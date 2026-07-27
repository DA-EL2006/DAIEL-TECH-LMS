import React from "react";
import "./Footer.css";
import {
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
                title="Instagram @daiel_official"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://youtube.com/@DAIELTech"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-btn youtube"
                title="YouTube @DAIELTech"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbCvVRdAu3aXqzRRn82i"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-btn whatsapp"
                title="WhatsApp Channel"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-btn linkedin"
                title="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-btn twitter"
                title="Twitter / X"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
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
