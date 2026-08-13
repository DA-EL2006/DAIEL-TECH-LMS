import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import './Login.css';

const Login = ({ onBack, onSignupClick, onLoginSuccess }) => {
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

            <div className="auth-links">
              <p>Don't have an account? <span className="auth-link" onClick={onSignupClick}>Sign up here</span></p>
              <p>Forgot Password? <span className="auth-link">Click here</span></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
