import React, { useState } from 'react';
import { auth, db, googleProvider } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import Toast from './Toast';
import './Login.css';

const Login = ({ onBack, onSignupClick, onRequireSignup, onLoginSuccess }) => {
  const [toast, setToast] = useState({ message: "", type: "info" });
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for that field as user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // 1. Authenticate using Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      const authUser = userCredential.user;

      // 2. Fetch full user profile from Cloud Firestore
      let userProfile = {
        uid: authUser.uid,
        email: authUser.email,
        fullName: authUser.displayName || authUser.email.split('@')[0]
      };

      try {
        const userDocRef = doc(db, "users", authUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          userProfile = { ...userProfile, ...userDoc.data() };
        }
      } catch (firestoreError) {
        console.warn("Could not fetch user document from Firestore:", firestoreError);
      }

      // 3. Store user in localStorage cache for local UI persistence
      localStorage.setItem("daiel_logged_in_user", JSON.stringify(userProfile));
      localStorage.setItem("daiel_user_data", JSON.stringify(userProfile));

      // 4. Update UI state
      setLoginSuccess(true);
      setTimeout(() => {
        if (onLoginSuccess) {
          onLoginSuccess(userProfile);
        } else {
          onBack();
        }
      }, 1500);

    } catch (error) {
      console.error("Firebase Login error:", error);
      if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
        setErrors({ email: "Invalid email address or password." });
      } else if (error.code === 'auth/wrong-password') {
        setErrors({ password: "Incorrect password." });
      } else if (error.code === 'auth/invalid-email') {
        setErrors({ email: "Please enter a valid email address." });
      } else if (error.code === 'auth/too-many-requests') {
        setErrors({ general: "Access disabled due to repeated failed attempts. Reset your password or try again later." });
      } else {
        setErrors({ general: error.message });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsSubmitting(true);
    setErrors({});
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const authUser = userCredential.user;

      // Check Firestore to enforce mandatory pre-registration
      const userDocRef = doc(db, "users", authUser.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        // User is already registered! Grant login access.
        const userProfile = { uid: authUser.uid, email: authUser.email, ...userDoc.data() };
        localStorage.setItem("daiel_logged_in_user", JSON.stringify(userProfile));
        localStorage.setItem("daiel_user_data", JSON.stringify(userProfile));
        setLoginSuccess(true);
        setTimeout(() => {
          if (onLoginSuccess) onLoginSuccess(userProfile);
        }, 1200);
      } else {
        // First-time Google user who has NOT completed the Signup form!
        await signOut(auth);
        const prefilled = {
          email: authUser.email || '',
          fullName: authUser.displayName || ''
        };
        setToast({
          message: "First-time user registration required! Redirecting to complete your setup...",
          type: "warning"
        });
        setTimeout(() => {
          if (onRequireSignup) {
            onRequireSignup(prefilled);
          } else if (onSignupClick) {
            onSignupClick(prefilled);
          }
        }, 2200);
      }
    } catch (error) {
      console.error("Google Auth error:", error);
      if (error.code !== 'auth/popup-closed-by-user') {
        setErrors({ general: `Google sign-in failed: ${error.message}` });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loginSuccess) {
    return (
      <div className="login-overlay">
        <div className="login-card success-card">
          <div className="success-icon">🔑</div>
          <div className="login-header">
            <h2>Welcome Back!</h2>
            <p>Authentication successful. Accessing your dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-overlay">
      <div className="login-card">
        <button className="close-btn" onClick={onBack}>×</button>
        <div className="login-header">
          <h2>Login to Your Account</h2>
          <p>Master your skills with Daiel Tech</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          {errors.general && <div className="error-text general-error" style={{ marginBottom: "12px", color: "#ef4444", fontSize: "14px", textAlign: "center" }}>{errors.general}</div>}
          <div className="form-group">
            <label>Email Address or Username</label>
            <input 
              type="text" 
              name="email" 
              placeholder="example@email.com or Full Name"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          <div className="form-footer">
            <button type="submit" className="submit-btn-premium" disabled={isSubmitting}>
              {isSubmitting ? 'Verifying...' : 'Login'}
              <div className="btn-glow"></div>
            </button>

            <div className="social-auth-divider">
              <span>OR</span>
            </div>

            <button
              type="button"
              className="btn-google-login"
              onClick={handleGoogleLogin}
              disabled={isSubmitting}
            >
              <svg className="google-icon" viewBox="0 0 24 24" width="18" height="18">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Sign in with Google</span>
            </button>

            <div className="auth-links">
              <p>Don't have an account? <span className="auth-link" onClick={onSignupClick}>Sign up here</span></p>
              <p>Forgot Password? <span className="auth-link">Click here</span></p>
            </div>
          </div>
        </form>
        <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: "", type: "info" })} />
      </div>
    </div>
  );
};

export default Login;
