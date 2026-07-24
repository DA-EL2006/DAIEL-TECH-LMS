import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = ({ onBack, onLoginClick }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
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

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
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
      try {
        // Map data for SheetDB
        const dataToLog = {
          data: [{
            ...formData,
            timestamp: new Date().toLocaleString()
          }]
        };

        const response = await axios.post('https://sheetdb.io/api/v1/8y8e88qu4ga5s', dataToLog);
        
        if (response.status === 201 || response.status === 200) {
          setIsSuccess(true);
        }
      } catch (error) {
        console.error("Submission error details:", {
          message: error.message,
          response: error.response?.data,
          status: error.response?.status,
          headers: error.response?.headers
        });
        alert(`There was an error submitting your registration: ${error.message}. Please check the console for more details.`);
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
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                name="password" 
                value={formData.password}
                onChange={handleChange}
                required
              />
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
              I agree to Daiel Tech's <a href="#terms">Terms and Conditions</a> and <a href="#privacy">Privacy Policy</a>
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
