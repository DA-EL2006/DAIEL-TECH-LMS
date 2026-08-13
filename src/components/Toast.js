import React, { useEffect } from "react";
import "./Toast.css";

const Toast = ({ message, type = "info", onClose, duration = 4000 }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const icons = {
    info: "ℹ️",
    success: "✓",
    error: "⚠️",
    warning: "🔔",
  };

  return (
    <div className="toast-container">
      <div className={`toast-item ${type}`}>
        <span className="toast-icon">{icons[type] || "ℹ️"}</span>
        <span className="toast-message">{message}</span>
        <button className="toast-close" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
