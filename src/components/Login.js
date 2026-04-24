import React, { useState } from 'react';
import axios from 'axios';
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
      // Fetch users from SheetDB
      const response = await axios.get('https://sheetdb.io/api/v1/8y8e88qu4ga5s');
      const users = response.data;

      // Check for user
      const user = users.find(u => u.email === formData.email || u.fullName === formData.email);

      if (!user) {
        setErrors({ email: "Email or username not found" });
      } else if (user.password !== formData.password) {
        setErrors({ password: "Incorrect password" });
      } else {
        // Success
        setLoginSuccess(true);
        // In a real app, you'd store the user session/token here
        setTimeout(() => {
          if (onLoginSuccess) {
            onLoginSuccess();
          } else {
            onBack();
          }
        }, 2000);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to connect to the authentication server. Please try again later.");
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
