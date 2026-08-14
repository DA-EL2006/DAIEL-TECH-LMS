import { auth, db } from "../firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

/**
 * Payment & Access Control Utility for Flutterwave Sandbox Integration
 * Manages course pricing, purchase persistence, customer details, and lesson access gating.
 */

export const FLUTTERWAVE_CONFIG = {
  publicKey: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY || "",
  currency: "NGN",
  defaultPrice: 5000,
};

const STORAGE_KEYS = {
  PURCHASED_COURSES: "daiel_purchased_courses",
  TRANSACTIONS: "daiel_payment_transactions",
};

/**
 * Get all purchased course IDs for the user
 * @returns {number[]} Array of course IDs
 */
export const getPurchasedCourseIds = () => {
  try {
    const savedUserStr = localStorage.getItem("daiel_logged_in_user");
    if (!savedUserStr) return [];

    const user = JSON.parse(savedUserStr);
    const userUid = user.uid || user.email;
    if (!userUid) return [];

    // 1. Check user profile object purchased arrays
    let userPurchased = [];
    if (user.purchasedCourseIds && Array.isArray(user.purchasedCourseIds)) {
      userPurchased = user.purchasedCourseIds;
    } else if (user.enrolledCourses && Array.isArray(user.enrolledCourses)) {
      userPurchased = user.enrolledCourses.map((c) =>
        typeof c === "object" ? c.id : c,
      );
    }

    // 2. Check user-scoped localStorage key
    const userScopedKey = `daiel_purchased_courses_${userUid}`;
    const rawUserList = localStorage.getItem(userScopedKey);
    const userScopedPurchased = rawUserList ? JSON.parse(rawUserList) : [];

    const combined = Array.from(
      new Set([...userPurchased, ...userScopedPurchased].map(Number)),
    );
    return combined;
  } catch (error) {
    console.error("Error fetching purchased course IDs:", error);
    return [];
  }
};

/**
 * Check if the user has purchased and has full access to a specific course
 * @param {number|string} courseId
 * @returns {boolean}
 */
export const hasCourseAccess = (courseId) => {
  if (!courseId) return false;
  const purchasedIds = getPurchasedCourseIds();
  return purchasedIds.includes(Number(courseId));
};

/**
 * Check if a specific lesson is free to preview for non-paying users.
 * Preference: Module 1 / Lesson 1 (pv1.1, ml1.1, fe1.1 or lesson index 0 of module 0) is FREE to preview.
 * @param {number|string} courseId
 * @param {string} lessonId
 * @param {number} moduleIndex
 * @param {number} lessonIndex
 * @returns {boolean}
 */
export const isLessonFreePreview = (
  courseId,
  lessonId,
  moduleIndex = 0,
  lessonIndex = 0,
) => {
  if (moduleIndex === 0 && lessonIndex === 0) {
    return true;
  }
  const freePreviewIds = ["pv1.1", "ml1.1", "fe1.1"];
  if (lessonId && freePreviewIds.includes(lessonId)) {
    return true;
  }
  return false;
};

/**
 * Record a successful Flutterwave course purchase for the current user
 * @param {number|string} courseId
 * @param {object} transactionData
 */
export const recordCoursePurchase = async (courseId, transactionData = {}) => {
  try {
    const numCourseId = Number(courseId);
    const savedUserStr = localStorage.getItem("daiel_logged_in_user");
    if (!savedUserStr) return false;

    const user = JSON.parse(savedUserStr);
    const userUid = user.uid || user.email;

    // 1. Update user object purchasedCourseIds
    const existingPurchases = user.purchasedCourseIds || [];
    if (!existingPurchases.includes(numCourseId)) {
      user.purchasedCourseIds = [...existingPurchases, numCourseId];
    }
    localStorage.setItem("daiel_logged_in_user", JSON.stringify(user));

    // 2. Update user-scoped localStorage key
    if (userUid) {
      const userScopedKey = `daiel_purchased_courses_${userUid}`;
      const rawUserList = localStorage.getItem(userScopedKey);
      const userList = rawUserList ? JSON.parse(rawUserList) : [];
      if (!userList.includes(numCourseId)) {
        userList.push(numCourseId);
        localStorage.setItem(userScopedKey, JSON.stringify(userList));
      }
    }

    // 3. Save transaction details log
    const savedTx = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
    const transactions = savedTx ? JSON.parse(savedTx) : [];
    const newTxRecord = {
      id: `tx_${Date.now()}`,
      courseId: numCourseId,
      txRef:
        transactionData.tx_ref ||
        transactionData.transaction_id ||
        `tx_ref_${Date.now()}`,
      transactionId:
        transactionData.transaction_id || transactionData.id || null,
      amount: transactionData.amount || FLUTTERWAVE_CONFIG.defaultPrice,
      currency: transactionData.currency || FLUTTERWAVE_CONFIG.currency,
      status: transactionData.status || "successful",
      timestamp: new Date().toISOString(),
    };
    transactions.push(newTxRecord);
    localStorage.setItem(
      STORAGE_KEYS.TRANSACTIONS,
      JSON.stringify(transactions),
    );

    // 4. Sync to Firestore user document
    const currentUser = auth.currentUser;
    if (currentUser) {
      try {
        const userRef = doc(db, "users", currentUser.uid);
        await updateDoc(userRef, {
          purchasedCourseIds: arrayUnion(numCourseId),
          updatedAt: new Date().toISOString(),
        });
        console.log(
          `Synced purchase of Course #${numCourseId} to Firestore user ${currentUser.uid}`,
        );
      } catch (fsErr) {
        console.warn("Could not sync purchase to Firestore:", fsErr);
      }
    }

    console.log(`Successfully recorded purchase for Course #${numCourseId}`);
    return true;
  } catch (error) {
    console.error("Error recording course purchase:", error);
    return false;
  }
};

/**
 * Reset all purchased courses in local storage for testing purposes.
 */
export const resetTestPurchases = () => {
  try {
    localStorage.removeItem(STORAGE_KEYS.PURCHASED_COURSES);
    localStorage.removeItem(STORAGE_KEYS.TRANSACTIONS);
    const savedUserStr = localStorage.getItem("daiel_logged_in_user");
    if (savedUserStr) {
      const user = JSON.parse(savedUserStr);
      user.purchasedCourseIds = [];
      user.enrolledCourses = [];
      localStorage.setItem("daiel_logged_in_user", JSON.stringify(user));
      if (user.uid || user.email) {
        localStorage.removeItem(`daiel_purchased_courses_${user.uid || user.email}`);
      }
    }
    console.log(
      "All test purchases have been cleared for the user!",
    );
    return true;
  } catch (e) {
    console.error("Error resetting test purchases:", e);
    return false;
  }
};

if (typeof window !== "undefined") {
  window.resetTestPurchases = resetTestPurchases;
}

/**
 * Dynamically extract active customer details from user prop, login session, or signup data
 * @param {object} user
 * @returns {{ name: string, email: string, phone: string }}
 */
export const getActiveCustomerDetails = (user) => {
  let name = user?.fullName || user?.name || user?.user_metadata?.name || "";
  let email = user?.email || user?.user_metadata?.email || "";
  let phone =
    user?.phone || user?.phoneNumber || user?.user_metadata?.phone || "";

  // 1. Fallback to daiel_logged_in_user (saved during Login or Signup)
  if (!email || !name || !phone) {
    try {
      const savedUserStr = localStorage.getItem("daiel_logged_in_user");
      if (savedUserStr) {
        const parsed = JSON.parse(savedUserStr);
        if (!name)
          name = parsed.fullName || parsed.name || parsed.fullName || "";
        if (!email) email = parsed.email || "";
        if (!phone) phone = parsed.phone || parsed.phoneNumber || "";
      }
    } catch (e) {
      console.error("Error parsing daiel_logged_in_user:", e);
    }
  }

  // 2. Fallback to daiel_user_data (saved on registration/sync)
  if (!email || !name || !phone) {
    try {
      const savedDataStr = localStorage.getItem("daiel_user_data");
      if (savedDataStr) {
        const parsed = JSON.parse(savedDataStr);
        if (!name) name = parsed.fullName || parsed.name || "";
        if (!email) email = parsed.email || "";
        if (!phone) phone = parsed.phone || parsed.phoneNumber || "";
      }
    } catch (e) {
      console.error("Error parsing daiel_user_data:", e);
    }
  }

  return {
    name: name ? name.trim() : "Student Learner",
    email: email ? email.trim() : "student@daieltech.com",
    phone: phone ? phone.trim() : "08000000000",
  };
};

/**
 * Helper to build Flutterwave React Config object
 * @param {object} course
 * @param {object} user
 * @returns {object}
 */
export const getFlutterwaveConfig = (course, user) => {
  const amount = course?.price || FLUTTERWAVE_CONFIG.defaultPrice;
  const courseId = course?.id || 1;
  const courseTitle = course?.title || "Course";

  // Dynamically extract name, email, phone from login/signup details
  const customer = getActiveCustomerDetails(user);

  // Clean public key string
  const cleanPublicKey = (FLUTTERWAVE_CONFIG.publicKey || "").trim();

  return {
    public_key: cleanPublicKey,
    tx_ref: `daiel_lms_${Date.now()}_course_${courseId}`,
    amount: amount,
    currency: FLUTTERWAVE_CONFIG.currency,
    payment_options: "card, banktransfer, ussd",
    customer: {
      email: customer.email,
      phone_number: customer.phone,
      name: customer.name,
    },
    customizations: {
      title: "DAIEL TECH LMS",
      description: `Payment for ${courseTitle}`,
    },
  };
};
