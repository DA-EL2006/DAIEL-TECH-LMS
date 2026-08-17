import React, { useState, useMemo } from "react";
import {
  Download,
  Award,
  ShieldCheck,
  ArrowLeft,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { coursesData } from "../data/coursesData";
import logo from "../assets/logo-removebg-preview.avif";
import "./Certificate.css";

const Certificate = ({ courseId = 1, loggedInUser, onBack }) => {
  const course = coursesData[courseId] || coursesData[1];

  // Interactive Student Name
  const initialName =
    loggedInUser?.name || loggedInUser?.username || "Kayode David Odunayo";
  const [studentName, setStudentName] = useState(initialName);
  const [isEditingName, setIsEditingName] = useState(false);

  // Calculate dynamic completion percentage for the current course
  const { totalLessons, completedCount, completionPercentage } = useMemo(() => {
    try {
      const saved = localStorage.getItem("daiel_completed_lessons");
      const parsed = saved ? JSON.parse(saved) : {};
      const completedList = parsed[courseId] || [];

      let total = 0;
      if (course && course.modules) {
        course.modules.forEach((mod) => {
          total += (mod.lessons || []).length;
        });
      }

      const count = completedList.length;
      const pct =
        total > 0 ? Math.min(Math.round((count / total) * 100), 100) : 0;
      return {
        totalLessons: total,
        completedCount: count,
        completionPercentage: pct,
      };
    } catch (e) {
      return { totalLessons: 0, completedCount: 0, completionPercentage: 0 };
    }
  }, [courseId, course]);

  // Unique Certificate Serial Number
  const certId = useMemo(() => {
    return `DAIEL-CERT-2026-${courseId}009-${Math.floor(100000 + ((courseId * 77) % 899999))}`;
  }, [courseId]);

  const issueDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handlePrintDownload = () => {
    window.print();
  };

  return (
    <div className="cert-page-wrapper">
      {/* Top Controls Bar (Hidden during PDF print) */}
      <div className="cert-controls-bar no-print">
        {onBack && (
          <button className="btn-cert-back" onClick={onBack}>
            <ArrowLeft size={18} /> Back
          </button>
        )}

        <div className="cert-live-stats font-mono">
          <span className="stat-pill">
            <CheckCircle size={14} className="icon-green" /> Completed:{" "}
            {completedCount} / {totalLessons} Lessons
          </span>
          <span className="stat-pill highlight">
            <Sparkles size={14} /> Progress: {completionPercentage}%
          </span>
        </div>

        <button className="btn-cert-download" onClick={handlePrintDownload}>
          <Download size={18} /> Download Certificate (PDF)
        </button>
      </div>

      {/* Main Printable Certificate Container */}
      <div className="cert-printable-container" id="printable-certificate">
        {/* Double Gold Metallic Border Frame */}
        <div className="cert-inner-frame">
          <div className="cert-corner corner-tl"></div>
          <div className="cert-corner corner-tr"></div>
          <div className="cert-corner corner-bl"></div>
          <div className="cert-corner corner-br"></div>

          {/* Certificate Header */}
          <div className="cert-header">
            <div className="cert-logo-wrapper">
              <img src={logo} alt="DAIEL TECH Logo" className="cert-logo-img" />
              <div className="cert-brand-name font-mono">DAIEL TECH LMS</div>
            </div>
            <div className="cert-badge-gold">
              <ShieldCheck size={28} />
              <span>VERIFIED ACADEMIC CREDENTIAL</span>
            </div>
          </div>

          {/* Certificate Main Title */}
          <div className="cert-title-area">
            <h1 className="cert-main-title">Certificate of Completion</h1>
            <p className="cert-subtitle">PROUDLY PRESENTED TO</p>
          </div>

          {/* Recipient Name Display / Edit */}
          <div className="cert-recipient-section">
            {isEditingName ? (
              <input
                type="text"
                className="cert-name-input font-serif"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                onBlur={() => setIsEditingName(false)}
                autoFocus
              />
            ) : (
              <h2
                className="cert-recipient-name"
                onClick={() => setIsEditingName(true)}
                title="Click to edit name"
              >
                {studentName}
              </h2>
            )}
            <div className="cert-name-line"></div>
          </div>

          {/* Certificate Body Text */}
          <div className="cert-body-text">
            <p>
              for successfully completing the comprehensive professional track
              in
            </p>
            <h3 className="cert-course-title">
              {course?.title || "Technology & Software Engineering"}
            </h3>
            <p className="cert-course-meta">
              demonstrating mastery over course modules with an overall progress
              rating of{" "}
              <strong className="completion-tag font-mono">
                {completionPercentage}% Verified Completion
              </strong>
              .
            </p>
          </div>

          {/* Footer Signatures & Stamp */}
          <div className="cert-footer-section">
            <div className="cert-sign-col">
              <div className="signature-line font-script">Kayode David O.</div>
              <div className="sign-divider"></div>
              <div className="sign-name">Dr. Kayode David</div>
              <div className="sign-title">Head of Curriculum, DAIEL TECH</div>
            </div>

            <div className="cert-seal-center">
              <div className="gold-seal-badge">
                <Award size={44} className="seal-icon" />
                <div className="seal-text font-mono">
                  DAIEL TECH OFFICIAL SEAL
                </div>
              </div>
            </div>

            <div className="cert-sign-col">
              <div className="signature-line font-script font-alt">
                DAIEL Board
              </div>
              <div className="sign-divider"></div>
              <div className="sign-name">Academic Council</div>
              <div className="sign-title">Director of Technology</div>
            </div>
          </div>

          {/* Bottom Serial & Verification Footer */}
          <div className="cert-bottom-info font-mono">
            <span>Certificate ID: {certId}</span>
            <span>Date Issued: {issueDate}</span>
            <span>Verify at: https://daieltech.lms/verify/{certId}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
