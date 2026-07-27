import React from "react";
import "./Footer.css";
import {
  Send,
  Camera,
  Play,
  MessageCircle,
  ExternalLink,
  PhoneCall,
  AlertCircle,
  Sparkles,
  FolderGit2,
  HeartHandshake,
  Award,
} from "lucide-react";
import logo from "../assets/logo-removebg-preview.png";

const Footer = ({
  onLegalSelect,
  onEmailComposerSelect,
  onStudentProjectsSelect,
  onBecomeMentorSelect,
  onCoursesSelect,
  onCertificateSelect,
}) => {
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
                <a
                  href="#courses"
                  onClick={(e) => {
                    if (onCoursesSelect) {
                      e.preventDefault();
                      onCoursesSelect();
                    }
                  }}
                >
                  Our Courses
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onBecomeMentorSelect) onBecomeMentorSelect();
                  }}
                >
                  <HeartHandshake
                    size={15}
                    style={{ verticalAlign: "middle", marginRight: 4 }}
                  />
                  Careers / Become a Mentor
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onEmailComposerSelect) onEmailComposerSelect("contact");
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Learning Section */}
          <div className="footer-col">
            <h4 className="footer-title">Learning</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="#all-courses"
                  onClick={(e) => {
                    if (onCoursesSelect) {
                      e.preventDefault();
                      onCoursesSelect();
                    }
                  }}
                >
                  All Courses
                </a>
              </li>
              <li>
                <a
                  href="#learning-paths"
                  onClick={(e) => {
                    if (onCoursesSelect) {
                      e.preventDefault();
                      onCoursesSelect();
                    }
                  }}
                >
                  Learning Paths
                </a>
              </li>
              <li>
                <a
                  href="#student-projects"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onStudentProjectsSelect) onStudentProjectsSelect();
                  }}
                >
                  <FolderGit2
                    size={15}
                    style={{ verticalAlign: "middle", marginRight: 4 }}
                  />
                  Student Projects
                </a>
              </li>
              <li>
                <a
                  href="#certificates"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onCertificateSelect) onCertificateSelect();
                  }}
                >
                  <Award
                    size={15}
                    style={{ verticalAlign: "middle", marginRight: 4 }}
                  />
                  Certificates
                </a>
              </li>
            </ul>
          </div>

          {/* FAQs & Support Section */}
          <div className="footer-col">
            <h4 className="footer-title">Support & Feedback</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="https://wa.me/2347063210011"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PhoneCall
                    size={15}
                    style={{ verticalAlign: "middle", marginRight: 4 }}
                  />
                  Support Center (WhatsApp)
                </a>
              </li>
              <li>
                <a
                  href="#feedback"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onEmailComposerSelect)
                      onEmailComposerSelect("feedback");
                  }}
                >
                  <Sparkles
                    size={15}
                    style={{ verticalAlign: "middle", marginRight: 4 }}
                  />
                  Feedback & Suggestions
                </a>
              </li>
              <li>
                <a
                  href="#report"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onEmailComposerSelect) onEmailComposerSelect("issue");
                  }}
                >
                  <AlertCircle
                    size={15}
                    style={{ verticalAlign: "middle", marginRight: 4 }}
                  />
                  Report an Issue
                </a>
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

          {/* Connect With Us Section (Icon Badges) */}
          <div className="footer-col">
            <h4 className="footer-title">Connect With Us</h4>
            <div className="footer-icon-badges">
              <a
                href="https://www.instagram.com/daiel_official?igsh=a2NnOWsxbWdjZjhq"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-btn instagram"
                title="Instagram @daieltech"
              >
                <Camera size={20} />
              </a>
              <a
                href="https://youtube.com/@DAIELTech"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-btn youtube"
                title="YouTube @DAIELTech"
              >
                <Play size={20} />
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbCvVRdAu3aXqzRRn82i"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-btn whatsapp"
                title="WhatsApp Channel"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-btn linkedin"
                title="LinkedIn"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-btn twitter"
                title="Twitter / X"
              >
                <Send size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-logo-area">
            <img src={logo} alt="DAIEL TECH Logo" className="footer-logo" />
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
