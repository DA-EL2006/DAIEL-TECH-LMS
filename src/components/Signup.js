import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import './Signup.css';

const Signup = ({ onBack, onLoginClick, onNavigate, prefilledData }) => {
  const [formData, setFormData] = useState({
    fullName: prefilledData?.fullName || prefilledData?.name || '',
    email: prefilledData?.email || '',
    phone: '',
    password: '',
    confirmPassword: '',
    courseOfInterest: '',
    skillLevel: '',
    learningGoal: '',
    educationalBackground: '',
    occupation: '',
    otherOccupation: '',
    location: '',
    referralSource: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  React.useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        onLoginClick();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, onLoginClick]);

  const courses = [
    "Python Programming",
    "Machine Learning",
    // "Graphics Design (Pixelab)",
    // "Graphics Design (Photoshop/Illustrator PC required)",
    "Frontend Development"
  ];

  const skillLevels = ["Beginner", "Intermediate", "Advanced"];
  
  const educationalOptions = [
    "High School",
    "Undergraduate Student",
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
    "Other"
  ];

  const occupations = [
    "Student",
    "Professional/Employed",
    "Self-employed",
    "Unemployed",
    "Other"
  ];

  const referralSources = [
    "Social Media",
    "Friend/Referral",
    "Whatsapp group",
    "Website",
    "Event/Webinar"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Strong Password Validation Rules Evaluation
  const pass = formData.password || "";
  const passCriteria = {
    hasMinLength: pass.length >= 8,
    hasUpper: /[A-Z]/.test(pass),
    hasLower: /[a-z]/.test(pass),
    hasNumber: /[0-9]/.test(pass),
    hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(pass),
  };

  const passedCount = Object.values(passCriteria).filter(Boolean).length;
  const isPasswordStrong = passedCount === 5;

  const getStrengthLabel = () => {
    if (!pass) return { label: "", color: "" };
    if (passedCount <= 2) return { label: "Weak Password", color: "#ef4444" };
    if (passedCount <= 4) return { label: "Medium Strength", color: "#f59e0b" };
    return { label: "Strong Password ✓", color: "#10b981" };
  };

  const strengthInfo = getStrengthLabel();

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!isPasswordStrong) {
      newErrors.password = "Password must fulfill all security criteria below.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setErrors({});
      try {
        // 1. Create User in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;

        // 2. Prepare non-sensitive profile payload for Firestore
        const userProfile = {
          uid: user.uid,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          courseOfInterest: formData.courseOfInterest,
          skillLevel: formData.skillLevel,
          learningGoal: formData.learningGoal,
          educationalBackground: formData.educationalBackground,
          occupation: formData.occupation === 'Other' ? formData.otherOccupation : formData.occupation,
          location: formData.location,
          referralSource: formData.referralSource,
          purchasedCourseIds: [],
          enrolledCourses: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };

        // 3. Save User Profile into Cloud Firestore
        await setDoc(doc(db, "users", user.uid), userProfile);

        // 4. Send native Firebase email verification
        try {
          await sendEmailVerification(user);
        } catch (emailErr) {
          console.warn("Could not dispatch verification email:", emailErr);
        }

        // 5. Save to local storage cache for immediate local UI sync
        localStorage.setItem("daiel_logged_in_user", JSON.stringify(userProfile));
        localStorage.setItem("daiel_user_data", JSON.stringify(userProfile));

        setIsSuccess(true);
      } catch (error) {
        console.error("Firebase Registration Error:", error);
        let errorMsg = "Failed to create account. Please try again.";
        if (error.code === 'auth/email-already-in-use') {
          errorMsg = "This email address is already registered. Please login instead.";
          setErrors({ email: errorMsg });
        } else if (error.code === 'auth/invalid-email') {
          errorMsg = "Please provide a valid email address.";
          setErrors({ email: errorMsg });
        } else if (error.code === 'auth/weak-password') {
          errorMsg = "Password is too weak. Please fulfill all security criteria.";
          setErrors({ password: errorMsg });
        } else {
          setErrors({ general: error.message });
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (isSuccess) {
    return (
      <div className="signup-overlay">
        <div className="signup-card success-card">
          <div className="success-icon">🎉</div>
          <div className="signup-header">
            <h2>Registration Successful!</h2>
            <p className="congrats-text">
              Congratulations! You've made the right choice by joining Daiel Tech. 
              Your journey to mastering tech skills starts now.
            </p>
          </div>
          <div className="email-verify-notice" style={{ margin: "16px 0", padding: "14px", background: "rgba(59, 130, 246, 0.12)", border: "1px solid rgba(59, 130, 246, 0.3)", borderRadius: "12px", color: "#38bdf8", fontSize: "0.95rem" }}>
            📩 <strong>Firebase Verification Email Sent!</strong><br />
            A verification link has been sent to <strong>{formData.email}</strong>. Please check your <u>Inbox</u> and <u>Spam / Junk</u> folder.
          </div>
          <button className="submit-btn-premium" onClick={onLoginClick}>
            Go to Login
          </button>
          <p className="redirect-hint">Redirecting to login page in 3 seconds...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="signup-overlay">
      <div className="signup-card">
        <button className="close-btn" onClick={onBack}>×</button>
        <div className="signup-header">
          <h2>Create Your Account</h2>
          <p>Join Daiel Tech and shape your digital future</p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-grid">
            {/* Full Name */}
            <div className="form-group">
              <label>Name (as it should appear on certificate)</label>
              <input 
                type="text" 
                name="fullName" 
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              {errors.fullName && <span className="error-text">{errors.fullName}</span>}
            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone Number */}
            <div className="form-group">
              <label>Phone Number (WhatsApp preferred)</label>
              <input 
                type="tel" 
                name="phone" 
                placeholder="+234..."
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Passwords */}
            <div className="form-group full-width-pass">
              <label>Password</label>
              <input 
                type="password" 
                name="password" 
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a strong password..."
                required
              />
              {errors.password && <span className="error-text">{errors.password}</span>}

              {/* Password Strength Progress Bar */}
              {formData.password && (
                <div className="pass-strength-meter">
                  <div className="pass-strength-label-row">
                    <span className="strength-title">Password Security Strength:</span>
                    <span className="strength-value" style={{ color: strengthInfo.color }}>
                      {strengthInfo.label}
                    </span>
                  </div>
                  <div className="pass-meter-track">
                    <div 
                      className="pass-meter-fill" 
                      style={{ 
                        width: `${(passedCount / 5) * 100}%`,
                        backgroundColor: strengthInfo.color
                      }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Password Rules Checklist */}
              <div className="pass-rules-checklist">
                <div className={`rule-item ${passCriteria.hasMinLength ? "passed" : ""}`}>
                  <span className="rule-icon">{passCriteria.hasMinLength ? "✓" : "○"}</span>
                  <span>At least 8 characters long</span>
                </div>
                <div className={`rule-item ${passCriteria.hasUpper ? "passed" : ""}`}>
                  <span className="rule-icon">{passCriteria.hasUpper ? "✓" : "○"}</span>
                  <span>At least one uppercase letter (A-Z)</span>
                </div>
                <div className={`rule-item ${passCriteria.hasLower ? "passed" : ""}`}>
                  <span className="rule-icon">{passCriteria.hasLower ? "✓" : "○"}</span>
                  <span>At least one lowercase letter (a-z)</span>
                </div>
                <div className={`rule-item ${passCriteria.hasNumber ? "passed" : ""}`}>
                  <span className="rule-icon">{passCriteria.hasNumber ? "✓" : "○"}</span>
                  <span>At least one numeric digit (0-9)</span>
                </div>
                <div className={`rule-item ${passCriteria.hasSpecial ? "passed" : ""}`}>
                  <span className="rule-icon">{passCriteria.hasSpecial ? "✓" : "○"}</span>
                  <span>At least one special symbol (!@#$%^&*)</span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input 
                type="password" 
                name="confirmPassword" 
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
            </div>

            {/* Course of Interest */}
            <div className="form-group">
              <label>Course of Interest</label>
              <select name="courseOfInterest" value={formData.courseOfInterest} onChange={handleChange} required>
                <option value="">Select a course</option>
                {courses.map(course => <option key={course} value={course}>{course}</option>)}
              </select>
            </div>

            {/* Skill Level */}
            <div className="form-group">
              <label>Current Skill Level</label>
              <div className="radio-group">
                {skillLevels.map(level => (
                  <label key={level} className="radio-label">
                    <input 
                      type="radio" 
                      name="skillLevel" 
                      value={level.toLowerCase()} 
                      checked={formData.skillLevel === level.toLowerCase()}
                      onChange={handleChange}
                      required
                    />
                    {level}
                  </label>
                ))}
              </div>
            </div>

            {/* Educational Background */}
            <div className="form-group">
              <label>Educational Background</label>
              <select name="educationalBackground" value={formData.educationalBackground} onChange={handleChange} required>
                <option value="">Select qualification</option>
                {educationalOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>

            {/* Occupation */}
            <div className="form-group">
              <label>Occupation</label>
              <select name="occupation" value={formData.occupation} onChange={handleChange} required>
                <option value="">Select occupation</option>
                {occupations.map(occ => <option key={occ} value={occ}>{occ}</option>)}
              </select>
            </div>

            {formData.occupation === 'Other' && (
              <div className="form-group full-width animate-in">
                <label>Please specify your occupation</label>
                <input 
                  type="text" 
                  name="otherOccupation" 
                  placeholder="Tell us what you do"
                  value={formData.otherOccupation}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {/* Location */}
            <div className="form-group">
              <label>Country/Location</label>
              <input 
                type="text" 
                name="location" 
                placeholder="City, Country"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            {/* Referral Source */}
            <div className="form-group">
              <label>How did you hear about Daiel Tech?</label>
              <select name="referralSource" value={formData.referralSource} onChange={handleChange} required>
                <option value="">Select an option</option>
                {referralSources.map(src => <option key={src} value={src}>{src}</option>)}
              </select>
            </div>

            {/* Learning Goal */}
            <div className="form-group full-width">
              <label>Learning Goal (Briefly describe what you want to achieve)</label>
              <textarea 
                name="learningGoal" 
                rows="3" 
                value={formData.learningGoal}
                onChange={handleChange}
                placeholder="e.g. To start a career in data science"
                required
              ></textarea>
            </div>
          </div>

          <div className="form-footer">
            <label className="checkbox-container">
              <input 
                type="checkbox" 
                name="agreeToTerms" 
                checked={formData.agreeToTerms}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
              I agree to Daiel Tech's{" "}
              <span
                className="auth-link-inline"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) {
                    onNavigate("legal", { tab: "terms" });
                  }
                }}
              >
                Terms and Conditions
              </span>{" "}
              and{" "}
              <span
                className="auth-link-inline"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) {
                    onNavigate("legal", { tab: "privacy" });
                  }
                }}
              >
                Privacy Policy
              </span>
            </label>
            {errors.agreeToTerms && <p className="error-text">{errors.agreeToTerms}</p>}

            <button type="submit" className="submit-btn-premium" disabled={isSubmitting}>
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
              <div className="btn-glow"></div>
            </button>

            <div className="auth-links">
              <p>Already have an account? <span className="auth-link" onClick={onLoginClick}>Login here</span></p>
              <p>Forgot Password? <span className="auth-link">Click here</span></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
