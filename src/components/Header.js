import React from "react";
import { Sun, Moon } from "lucide-react";
import logo from "../assets/logo-removebg-preview.avif";
import "./Header.css";

const Header = ({
  theme,
  toggleTheme,
  setCurrentView,
  mobileMenuOpen,
  setMobileMenuOpen,
  currentView,
  selectedCourse,
}) => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (currentView !== "landing") {
      setCurrentView("landing");
      // Wait for DOM to update before scrolling
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo-section">
          <img
            src={logo}
            alt="DAIEL Logo"
            className="app-logo"
            onClick={() => setCurrentView("dashboard")}
          />
        </div>

        <button
          className="hamburger-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <a href="#home" className="nav-link" onClick={(e) => handleNavClick(e, 'home')}>
            HOME
          </a>
          <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, 'about')}>
            ABOUT
          </a>
          <a href="#explore-courses" className="nav-link" onClick={(e) => handleNavClick(e, 'explore-courses')}>
            COURSES
          </a>
          <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, 'contact')}>
            CONTACT
          </a>
          <button
            className="nav-link-btn nav-dropdown-login"
            onClick={() => {
              setCurrentView("login");
              setMobileMenuOpen(false);
            }}
          >
            Login
          </button>
          <button
            className="nav-signup-btn nav-dropdown-signup"
            onClick={() => {
              setCurrentView("signup");
              setMobileMenuOpen(false);
            }}
          >
            Sign Up
          </button>

          <button
            className="theme-toggle mobile-theme-toggle"
            onClick={toggleTheme}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            <span className="toggle-label">
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>

        <div className="nav-auth nav-auth-desktop">
          <button
            className="nav-link-btn"
            onClick={() => setCurrentView("login")}
          >
            Login
          </button>
          <button
            className="nav-signup-btn"
            onClick={() => setCurrentView("signup")}
          >
            Sign Up
          </button>
          <button
            className="theme-toggle desktop-theme-toggle"
            onClick={toggleTheme}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {selectedCourse && currentView !== "dashboard" && (
          <div className="nav-breadcrumb-section">
            <span className="nav-breadcrumb">/</span>
            <span className="nav-course-name">{selectedCourse}</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
