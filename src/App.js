import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import { CourseProvider } from "./context/CourseContext";
import InfoSection from "./components/InfoSection";
import ExploreOurCourse from "./components/ExploreOurCourse";
import WhatWeOffer from "./components/WhatWeOffer";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import CourseDetails from "./components/CourseDetails";
import VideoPlayer from "./components/VideoPlayer";
import Certificate from "./components/Certificate";
import LegalPages from "./components/LegalPages";
import EmailComposerModal from "./components/EmailComposerModal";
import StudentProjectsModal from "./components/StudentProjectsModal";
import BecomeMentorModal from "./components/BecomeMentorModal";
import ErrorBoundary from "./components/ErrorBoundary";
import { getPurchasedCourseIds } from "./utils/payment";
import EmailVerificationModal from "./components/EmailVerificationModal";
import { auth, db } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [pendingVerificationUser, setPendingVerificationUser] = useState(null);
  const [prefilledData, setPrefilledData] = useState(null);

  // Session Persistence: restore logged-in user from localStorage / Firebase
  const [loggedInUser, setLoggedInUser] = useState(() => {
    try {
      const saved = localStorage.getItem("daiel_logged_in_user");
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  // Listen to real-time Firebase Auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        let userProfile = {
          uid: authUser.uid,
          email: authUser.email,
          fullName: authUser.displayName || authUser.email?.split('@')[0] || "User"
        };
        try {
          const userDoc = await getDoc(doc(db, "users", authUser.uid));
          if (userDoc.exists()) {
            userProfile = { ...userProfile, ...userDoc.data() };
          }
        } catch (err) {
          console.warn("Could not fetch user document from Firestore:", err);
        }
        setLoggedInUser(userProfile);
        localStorage.setItem("daiel_logged_in_user", JSON.stringify(userProfile));

        const savedView = localStorage.getItem("daiel_current_view");
        if (!savedView || savedView === "login" || savedView === "signup" || savedView === "landing") {
          setCurrentView("dashboard");
          setActiveTab("dashboard");
          localStorage.setItem("daiel_current_view", "dashboard");
          localStorage.setItem("daiel_active_tab", "dashboard");
        }
      } else {
        setLoggedInUser(null);
        localStorage.removeItem("daiel_logged_in_user");
      }
    });

    return () => unsubscribe();
  }, []);

  const [currentView, setCurrentView] = useState(() => {
    const saved = localStorage.getItem("daiel_current_view");
    if (saved && saved !== "login" && saved !== "signup" && saved !== "landing") {
      return saved;
    }
    return loggedInUser ? "dashboard" : "landing";
  });
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("daiel_active_tab") || "dashboard";
  });
  const [selectedCourse] = useState(null);
  const [selectedCourseDetails, setSelectedCourseDetails] = useState(() => {
    const saved = localStorage.getItem("daiel_selected_course_details");
    if (saved) return Number(saved);
    const purchased = getPurchasedCourseIds();
    return purchased.length > 0 ? purchased[0] : 1;
  });
  const [selectedLessonId, setSelectedLessonId] = useState(() => {
    return localStorage.getItem("daiel_selected_lesson_id") || null;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLegalTab, setSelectedLegalTab] = useState(() => {
    return localStorage.getItem("daiel_selected_legal_tab") || "terms";
  });
  const [activeSandboxTask, setActiveSandboxTask] = useState(null);

  // Modals state
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [emailCategory, setEmailCategory] = useState("issue");
  const [studentProjectsModalOpen, setStudentProjectsModalOpen] = useState(false);
  const [becomeMentorModalOpen, setBecomeMentorModalOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("daiel-theme-v2");
    if (saved) return saved;
    return "dark"; // Default to dark mode
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("daiel-theme-v2", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Central Navigation & URL Hash Routing Engine
  const navigateTo = useCallback((view, params = {}, pushHistory = true) => {
    const { courseId, lessonId, tab, legalTab, sandboxTask } = params;

    const targetView = view || "landing";
    const targetCourseId = courseId !== undefined ? courseId : selectedCourseDetails;
    const targetLessonId = lessonId !== undefined ? lessonId : selectedLessonId;
    const targetTab = tab !== undefined ? tab : activeTab;
    const targetLegalTab = legalTab !== undefined ? legalTab : selectedLegalTab;

    setCurrentView(targetView);
    if (targetCourseId) setSelectedCourseDetails(targetCourseId);
    if (targetLessonId) setSelectedLessonId(targetLessonId);
    if (targetTab) setActiveTab(targetTab);
    if (targetLegalTab) setSelectedLegalTab(targetLegalTab);
    if (sandboxTask !== undefined) setActiveSandboxTask(sandboxTask);

    // Save to LocalStorage for refresh persistence
    localStorage.setItem("daiel_current_view", targetView);
    if (targetCourseId) localStorage.setItem("daiel_selected_course_details", targetCourseId);
    if (targetLessonId) localStorage.setItem("daiel_selected_lesson_id", targetLessonId);
    if (targetTab) localStorage.setItem("daiel_active_tab", targetTab);
    if (targetLegalTab) localStorage.setItem("daiel_selected_legal_tab", targetLegalTab);

    // Map to react-router-dom paths
    let targetPath = "/";
    if (targetView === "login") targetPath = "/login";
    else if (targetView === "signup") targetPath = "/signup";
    else if (targetView === "dashboard") targetPath = `/dashboard${targetTab ? `?tab=${targetTab}` : ""}`;
    else if (targetView === "course-details") targetPath = `/courses/${targetCourseId || 1}`;
    else if (targetView === "video-player") targetPath = `/learn/${targetCourseId || 1}/${targetLessonId || "pv1.1"}`;
    else if (targetView === "certificate") targetPath = `/certificate/${targetCourseId || 1}`;
    else if (targetView === "legal") targetPath = `/legal${targetLegalTab ? `?tab=${targetLegalTab}` : ""}`;
    else if (targetView === "sandbox") targetPath = "/sandbox";

    if (pushHistory && location.pathname !== targetPath) {
      navigate(targetPath);
    }
  }, [selectedCourseDetails, selectedLessonId, activeTab, selectedLegalTab, navigate, location.pathname]);

  // Sync hash routing on Browser Back/Forward buttons (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (!hash || hash === "#" || hash === "#landing") {
        if (loggedInUser) {
          navigateTo("dashboard", { tab: "dashboard" }, false);
        } else {
          navigateTo("landing", {}, false);
        }
        return;
      }

      const [viewPart, queryPart] = hash.substring(1).split("?");
      const params = {};
      if (queryPart) {
        queryPart.split("&").forEach((pair) => {
          const [k, v] = pair.split("=");
          params[k] = decodeURIComponent(v);
        });
      }

      const view = viewPart || "landing";
      const courseId = params.id ? Number(params.id) : params.courseId ? Number(params.courseId) : undefined;
      const lessonId = params.lessonId;
      const tab = params.tab;

      navigateTo(view, { courseId, lessonId, tab, legalTab: tab }, false);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [loggedInUser, navigateTo]);

  // Initial Route Check on Mount & Refresh
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash !== "#") {
      const [viewPart, queryPart] = hash.substring(1).split("?");
      const params = {};
      if (queryPart) {
        queryPart.split("&").forEach((pair) => {
          const [k, v] = pair.split("=");
          params[k] = decodeURIComponent(v);
        });
      }

      const view = viewPart || (loggedInUser ? "dashboard" : "landing");
      const courseId = params.id ? Number(params.id) : params.courseId ? Number(params.courseId) : undefined;
      const lessonId = params.lessonId;
      const tab = params.tab;

      if (view === "dashboard" && !loggedInUser) {
        navigateTo("landing", {}, false);
      } else {
        navigateTo(view, { courseId, lessonId, tab, legalTab: tab }, false);
      }
    } else if (loggedInUser && (currentView === "landing" || currentView === "login" || currentView === "signup")) {
      navigateTo("dashboard", { tab: "dashboard" }, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAuthRedirectTarget = () => {
    if (typeof window === "undefined") return "signup";
    const hasRegistered =
      localStorage.getItem("daiel_has_registered") === "true" ||
      !!localStorage.getItem("daiel_user_data");
    return hasRegistered ? "login" : "signup";
  };

  const handleCourseDetailsSelect = (courseId) => {
    navigateTo("course-details", { courseId });
    window.scrollTo(0, 0);
  };

  const handleCoursesNavigation = () => {
    if (loggedInUser) {
      navigateTo("dashboard", { tab: "courses" });
    } else {
      const element = document.getElementById("explore-courses");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigateTo("landing");
      }
    }
  };

  return (
    <CourseProvider>
      <div className="app">
        {!loggedInUser && (
          <Header
            theme={theme}
            toggleTheme={toggleTheme}
            setCurrentView={(view) => navigateTo(view)}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            currentView={currentView}
            selectedCourse={selectedCourse}
          />
        )}

        <main className="app-main">
          {!loggedInUser ? (
            <>
              {currentView === "landing" && (
                <>
                  <InfoSection onSignupClick={() => navigateTo(getAuthRedirectTarget())} />
                  <WhatWeOffer onSignupClick={() => navigateTo(getAuthRedirectTarget())} />
                  <ExploreOurCourse 
                    onCourseSelect={handleCourseDetailsSelect}
                    onEnrollClick={() => navigateTo(getAuthRedirectTarget())}
                    loggedInUser={loggedInUser}
                  />
                </>
              )}

                  {currentView === "course-details" && (
                    <CourseDetails 
                      courseId={selectedCourseDetails} 
                      onBack={() => navigateTo("landing")}
                      onEnrollClick={() => navigateTo(getAuthRedirectTarget())}
                      onVideoSelect={(lessonId) => navigateTo("video-player", { courseId: selectedCourseDetails, lessonId })}
                      loggedInUser={loggedInUser}
                    />
                  )}

                  {currentView === "video-player" && (
                    <VideoPlayer
                      courseId={selectedCourseDetails}
                      initialLessonId={selectedLessonId}
                      onBack={() => navigateTo("course-details", { courseId: selectedCourseDetails })}
                      loggedInUser={loggedInUser}
                    />
                  )}

                  {currentView === "certificate" && (
                    <Certificate
                      courseId={selectedCourseDetails}
                      loggedInUser={loggedInUser}
                      onBack={() => navigateTo("landing")}
                    />
                  )}

                  {currentView === "signup" && (
                    <Signup
                      onBack={() => navigateTo("landing")}
                      onLoginClick={() => navigateTo("login")}
                      onNavigate={navigateTo}
                      prefilledData={prefilledData}
                    />
                  )}

                  {currentView === "login" && (
                    <Login
                      onBack={() => navigateTo("landing")}
                      onSignupClick={() => navigateTo("signup")}
                      onRequireSignup={(data) => {
                        setPrefilledData(data);
                        navigateTo("signup");
                      }}
                      onLoginSuccess={(user) => {
                        localStorage.setItem("daiel_has_registered", "true");
                        setLoggedInUser(user);
                        localStorage.setItem("daiel_logged_in_user", JSON.stringify(user));
                        navigateTo("dashboard", { tab: "dashboard" });
                      }}
                    />
                  )}

                  {currentView === "legal" && (
                    <LegalPages
                      initialTab={selectedLegalTab}
                      onBack={() => navigateTo("landing")}
                    />
                  )}
                </>
              ) : (
                <ErrorBoundary>
                  <Dashboard
                    loggedInUser={loggedInUser}
                    currentView={currentView}
                    setCurrentView={(v) => navigateTo(v)}
                    activeTab={activeTab}
                    setActiveTab={(tab) => navigateTo(currentView, { tab })}
                    selectedCourseDetails={selectedCourseDetails}
                    setSelectedCourseDetails={setSelectedCourseDetails}
                    selectedLessonId={selectedLessonId}
                    setSelectedLessonId={setSelectedLessonId}
                    activeSandboxTask={activeSandboxTask}
                    setActiveSandboxTask={setActiveSandboxTask}
                    selectedLegalTab={selectedLegalTab}
                    setSelectedLegalTab={setSelectedLegalTab}
                    onNavigate={navigateTo}
                    onResumeCourse={(courseId) => {
                      const lastWatched = localStorage.getItem(`daiel_last_watched_${courseId}`);
                      if (lastWatched) {
                        navigateTo("video-player", { courseId, lessonId: lastWatched });
                      } else {
                        navigateTo("course-details", { courseId });
                      }
                      window.scrollTo(0, 0);
                    }}
                    onLogout={async () => {
                      try {
                        await signOut(auth);
                      } catch (err) {
                        console.error("SignOut error:", err);
                      }
                      setLoggedInUser(null);
                      localStorage.removeItem("daiel_logged_in_user");
                      localStorage.removeItem("daiel_user_data");
                      localStorage.removeItem("daiel_purchased_courses");
                      localStorage.removeItem("daiel_payment_transactions");
                      localStorage.removeItem("daiel_current_view");
                      localStorage.removeItem("daiel_active_tab");
                      localStorage.removeItem("daiel_selected_course_details");
                      localStorage.removeItem("daiel_selected_lesson_id");
                      navigateTo("landing", {}, false);
                      window.scrollTo(0, 0);
                    }}
                    theme={theme}
                    toggleTheme={toggleTheme}
                  />
                </ErrorBoundary>
              )}
            </main>

            {!loggedInUser && (
              <Footer 
                onLegalSelect={(tab) => navigateTo("legal", { legalTab: tab })}
                onEmailComposerSelect={(cat) => {
                  setEmailCategory(cat);
                  setEmailModalOpen(true);
                }}
                onStudentProjectsSelect={() => setStudentProjectsModalOpen(true)}
                onBecomeMentorSelect={() => setBecomeMentorModalOpen(true)}
                onCoursesSelect={handleCoursesNavigation}
                onCertificateSelect={() => navigateTo("login")}
              />
            )}

            {/* Interactive Modals */}
            <EmailComposerModal
              isOpen={emailModalOpen}
              onClose={() => setEmailModalOpen(false)}
              initialCategory={emailCategory}
            />

            <StudentProjectsModal
              isOpen={studentProjectsModalOpen}
              onClose={() => setStudentProjectsModalOpen(false)}
            />

            <BecomeMentorModal
              isOpen={becomeMentorModalOpen}
              onClose={() => setBecomeMentorModalOpen(false)}
            />

            {/* First-Time Email Verification OTP Modal */}
            <EmailVerificationModal
              isOpen={showOtpModal}
              onClose={() => setShowOtpModal(false)}
              user={pendingVerificationUser?.user}
              expectedOtp={pendingVerificationUser?.otpCode}
              onVerificationSuccess={() => {
                if (pendingVerificationUser?.user) {
                  const u = pendingVerificationUser.user;
                  const verifiedSaved = localStorage.getItem("daiel_verified_users");
                  const verifiedList = verifiedSaved ? JSON.parse(verifiedSaved) : [];
                  if (u.email && !verifiedList.includes(u.email)) {
                    verifiedList.push(u.email);
                    localStorage.setItem("daiel_verified_users", JSON.stringify(verifiedList));
                  }
                  localStorage.setItem("daiel_has_registered", "true");
                  setLoggedInUser(u);
                  localStorage.setItem("daiel_logged_in_user", JSON.stringify(u));
                  setShowOtpModal(false);
                  setPendingVerificationUser(null);
                  navigateTo("dashboard", { tab: "dashboard" });
                }
              }}
            />
      </div>
    </CourseProvider>
  );
}

export default App;
