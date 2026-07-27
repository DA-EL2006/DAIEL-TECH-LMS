import React from "react";
import "./Footer.css";
import { ExternalLink, Send, Camera, Play, MessageCircle } from "lucide-react";

const Footer = ({ onLegalSelect }) => {
  return (
    <footer className="footer-premium" id="contact">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Section */}
          <div className="footer-col">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li>
                <a href="#about">About Daiel Tech</a>
              </li>
              <li>
                <a href="#courses">Our Courses</a>
              </li>
              <li>
                <a href="#how-it-works">How It Works</a>
              </li>
              <li>
                <a href="#careers">Careers / Become a Mentor</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Learning Section */}
          <div className="footer-col">
            <h4 className="footer-title">Learning</h4>
            <ul className="footer-links">
              <li>
                <a href="#all-courses">All Courses</a>
              </li>
              <li>
                <a href="#learning-paths">Learning Paths</a>
              </li>
              <li>
                <a href="#student-projects">Student Projects</a>
              </li>
              <li>
                <a href="#certificates">Certificates</a>
              </li>
            </ul>
          </div>

          {/* FAQs Section */}
          <div className="footer-col">
            <h4 className="footer-title">FAQs</h4>
            <ul className="footer-links">
              <li>
                <a href="#student-community">Student Community</a>
              </li>
              <li>
                <a href="https://wa.me/2347063210011">Support Center</a>
              </li>
              <li>
                <a href="#feedback">Feedback & Suggestions</a>
              </li>
              <li>
                <a href="#report">Report an Issue</a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="footer-col">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="#terms"
                  onClick={(e) => {
                    if (onLegalSelect) {
                      e.preventDefault();
                      onLegalSelect("terms");
                    }
                  }}
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  onClick={(e) => {
                    if (onLegalSelect) {
                      e.preventDefault();
                      onLegalSelect("privacy");
                    }
                  }}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#conduct"
                  onClick={(e) => {
                    if (onLegalSelect) {
                      e.preventDefault();
                      onLegalSelect("conduct");
                    }
                  }}
                >
                  Code of Conduct
                </a>
              </li>
              <li>
                <a
                  href="#refund"
                  onClick={(e) => {
                    if (onLegalSelect) {
                      e.preventDefault();
                      onLegalSelect("refund");
                    }
                  }}
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us Section */}
          <div className="footer-col">
            <h4 className="footer-title">Connect With Us</h4>
            <ul className="footer-social-links">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">
                    <ExternalLink size={18} />
                  </span>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">
                    <Send size={18} />
                  </span>
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/daieltech?igsh=MWd6aDRpNXZ6Ynljcg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">
                    <Camera size={18} />
                  </span>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/daieltech?si=kg1NkRfZtSw9bILZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">
                    <Play size={18} />
                  </span>
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://whatsapp.com/channel/0029VbCvVRdAu3aXqzRRn82i"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">
                    <MessageCircle size={18} />
                  </span>
                  WhatsApp Channel
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-logo-area">
            <img
              src="/logo-removebg-preview.png"
              alt="DAIEL Logo"
              className="footer-logo"
            />
            <span className="footer-brand">DAIEL TECH</span>
          </div>
          <p className="copyright">
            © 2026 DAIEL TECH - Igniting Futures. All rights reserved.
          </p>
        </div>
      </div>

      <div className="footer-glow"></div>
    </footer>
  );
};

export default Footer;
