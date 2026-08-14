import React from "react";
import { Lock, X, ShieldAlert, CheckCircle2 } from "lucide-react";
import FlutterwavePayButton from "./FlutterwavePayButton";
import "./PaymentRequiredModal.css";

const PaymentRequiredModal = ({
  isOpen,
  course,
  loggedInUser,
  onClose,
  onPaymentSuccess,
}) => {
  if (!isOpen || !course) return null;

  const courseTitle = course.title || course.name || "Selected Course";
  const coursePrice = course.price || 5000;
  const courseCategory = course.category || "Software Development";

  return (
    <div className="pay-modal-overlay" onClick={onClose}>
      <div className="pay-modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="pay-modal-header">
          <div className="pay-modal-badge">
            <ShieldAlert size={16} />
            <span>Enrollment Required</span>
          </div>
          <button
            className="pay-modal-close-btn"
            onClick={onClose}
            title="Close alert"
          >
            <X size={20} />
          </button>
        </div>

        <div className="pay-modal-body">
          <div className="pay-modal-icon-wrapper">
            <Lock size={36} />
          </div>

          <h2 className="pay-modal-title">Payment Required to Access</h2>
          <p className="pay-modal-subtitle">
            You have not purchased <strong>{courseTitle}</strong> yet. Pay to
            unlock full access to its learning path, video lessons, and sandbox
            assignments.
          </p>

          <div className="pay-modal-course-card">
            <div className="course-card-meta">
              <span className="course-cat">{courseCategory}</span>
              <h3 className="course-name">{courseTitle}</h3>
            </div>
            <div className="course-card-price">
              <span className="price-label">Price</span>
              <span className="price-val">₦{coursePrice.toLocaleString()}</span>
            </div>
          </div>

          <div className="pay-modal-benefits">
            <div className="benefit-item">
              <CheckCircle2 size={16} color="#38bdf8" />
              <span>Full access to all video modules</span>
            </div>
            <div className="benefit-item">
              <CheckCircle2 size={16} color="#38bdf8" />
              <span>Interactive Pyodide sandbox coding tasks</span>
            </div>
            <div className="benefit-item">
              <CheckCircle2 size={16} color="#38bdf8" />
              <span>Official certificate of completion</span>
            </div>
          </div>
        </div>

        <div className="pay-modal-footer">
          <button className="pay-modal-cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <FlutterwavePayButton
            course={course}
            user={loggedInUser}
            onSuccess={(res) => {
              if (onPaymentSuccess) onPaymentSuccess(course.id, res);
              onClose();
            }}
            buttonText={`Pay ₦${coursePrice.toLocaleString()} - Unlock Course`}
            style={{
              padding: "10px 20px",
              fontSize: "0.9rem",
              fontWeight: "700",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #0053e4 0%, #0284c7 100%)",
              color: "#ffffff",
              border: "none",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentRequiredModal;
