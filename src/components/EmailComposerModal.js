import React, { useState } from "react";
import { Send, X, Mail, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import "./EmailComposerModal.css";

const EmailComposerModal = ({ isOpen, onClose, initialCategory = "issue" }) => {
  const [category, setCategory] = useState(initialCategory); // "issue" | "feedback" | "contact"
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sentSuccess, setSentSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSendEmail = (e) => {
    e.preventDefault();

    const categoryTitle = 
      category === "issue" ? "Issue Report" : 
      category === "feedback" ? "Feedback & Suggestion" : "General Inquiry";

    const fullSubject = encodeURIComponent(`[DAIEL TECH LMS - ${categoryTitle}] ${subject || 'New Message'}`);
    
    const bodyText = `Hi DAIEL TECH Support Team,

Category: ${categoryTitle}
Sender Name: ${senderName || 'Anonymous'}
Sender Email: ${senderEmail || 'Not provided'}

Message Details:
${message}

--
Sent via DAIEL TECH LMS Platform`;

    const fullBody = encodeURIComponent(bodyText);
    const mailtoUrl = `mailto:dael042024@gmail.com?subject=${fullSubject}&body=${fullBody}`;

    // Trigger user's mail client
    window.location.href = mailtoUrl;

    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      onClose();
    }, 2800);
  };

  return (
    <div className="email-modal-overlay" onClick={onClose}>
      <div className="email-modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Email Header Bar */}
        <div className="email-window-header">
          <div className="window-dots">
            <span className="dot dot-close" onClick={onClose}></span>
            <span className="dot dot-minimize"></span>
            <span className="dot dot-expand"></span>
          </div>
          <div className="email-window-title font-mono">
            <Mail size={16} className="title-icon" />
            Compose Message to dael042024@gmail.com
          </div>
          <button className="window-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {sentSuccess ? (
          <div className="email-success-banner">
            <CheckCircle2 size={54} className="success-icon" />
            <h3>Message Arranged & Dispatched!</h3>
            <p>Your mail client has been opened for <strong>dael042024@gmail.com</strong>.</p>
            <span className="closing-hint">Closing window...</span>
          </div>
        ) : (
          <form className="email-form" onSubmit={handleSendEmail}>
            {/* Category Selector */}
            <div className="email-category-pills">
              <button
                type="button"
                className={`pill-btn ${category === "issue" ? "active issue" : ""}`}
                onClick={() => setCategory("issue")}
              >
                <AlertCircle size={14} /> Report an Issue
              </button>
              <button
                type="button"
                className={`pill-btn ${category === "feedback" ? "active feedback" : ""}`}
                onClick={() => setCategory("feedback")}
              >
                <Sparkles size={14} /> Feedback & Suggestions
              </button>
            </div>

            {/* Address Row */}
            <div className="email-row">
              <span className="row-label">To:</span>
              <div className="row-target-box font-mono">
                dael042024@gmail.com
              </div>
            </div>

            <div className="email-row-grid">
              <div className="email-row">
                <span className="row-label">From Name:</span>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  required
                />
              </div>
              <div className="email-row">
                <span className="row-label">From Email:</span>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="email-row">
              <span className="row-label">Subject:</span>
              <input
                type="text"
                placeholder={
                  category === "issue"
                    ? "Brief description of the bug or issue..."
                    : category === "feedback"
                    ? "Suggestion to improve the learning experience..."
                    : "How can we help you?"
                }
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>

            {/* Message Body */}
            <div className="email-textarea-wrapper">
              <textarea
                placeholder={
                  category === "issue"
                    ? "Please describe the error, device, or screen where you encountered the issue..."
                    : category === "feedback"
                    ? "Share your ideas, requested features, or course feedback with our team..."
                    : "Write your message here..."
                }
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                required
              />
            </div>

            {/* Action Bar */}
            <div className="email-action-bar">
              <button type="button" className="btn-cancel" onClick={onClose}>
                Discard
              </button>
              <button type="submit" className="btn-send-email">
                <Send size={16} /> Send to dael042024@gmail.com
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EmailComposerModal;
