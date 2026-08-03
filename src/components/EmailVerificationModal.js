import React, { useState, useEffect, useRef } from "react";
import {
  ShieldCheck,
  X,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { sendResendVerificationEmail } from "../utils/resendEmail";
import "./EmailVerificationModal.css";

const EmailVerificationModal = ({
  isOpen,
  onClose,
  user,
  expectedOtp,
  onVerificationSuccess,
}) => {
  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
  const [currentExpectedOtp, setCurrentExpectedOtp] = useState(expectedOtp);
  const [error, setError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(60);

  const inputRefs = useRef([]);

  useEffect(() => {
    setCurrentExpectedOtp(expectedOtp);
  }, [expectedOtp]);

  // Resend Cooldown Countdown Timer
  useEffect(() => {
    if (!isOpen) return;
    if (resendCooldown <= 0) return;

    const timer = setInterval(() => {
      setResendCooldown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, resendCooldown]);

  if (!isOpen) return null;

  const handleDigitChange = (index, value) => {
    // Only numeric characters
    const digit = value.replace(/[^0-9]/g, "").slice(-1);

    const updated = [...otpDigits];
    updated[index] = digit;
    setOtpDigits(updated);
    setError("");

    // Auto-focus next input box
    if (digit && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      if (inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleVerify = (e) => {
    if (e) e.preventDefault();
    const enteredCode = otpDigits.join("");

    if (enteredCode.length < 6) {
      setError("Please enter all 6 digits of your verification code.");
      return;
    }

    setIsVerifying(true);
    setError("");

    setTimeout(() => {
      setIsVerifying(false);
      // Validate OTP match
      if (String(enteredCode).trim() === String(currentExpectedOtp).trim()) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          if (onVerificationSuccess) {
            onVerificationSuccess();
          }
        }, 1500);
      } else {
        setError(
          "Invalid verification code. Please check your email and try again.",
        );
      }
    }, 800);
  };

  const handleResend = async () => {
    if (resendCooldown > 0) return;

    const newOtp = Math.floor(100000 + Math.random() * 900000);
    setCurrentExpectedOtp(newOtp);
    setResendCooldown(60);
    setError("");

    await sendResendVerificationEmail({
      toEmail: user?.email || "student@daieltech.com",
      toName: user?.fullName || "Developer",
      otpCode: newOtp,
    });
  };

  return (
    <div className="otp-modal-overlay">
      <div className="otp-modal-card">
        <button className="otp-close-btn" onClick={onClose} title="Close Modal">
          <X size={18} />
        </button>

        {isSuccess ? (
          <div style={{ padding: "20px 0" }}>
            <CheckCircle2
              size={64}
              color="#10b981"
              style={{ margin: "0 auto 16px" }}
            />
            <h3 className="otp-title" style={{ color: "#10b981" }}>
              Email Verified Successfully!
            </h3>
            <p className="otp-subtitle">Accessing your LMS Dashboard...</p>
          </div>
        ) : (
          <>
            <div className="otp-header-icon">
              <ShieldCheck size={32} />
            </div>

            <h2 className="otp-title">Verify Your Email Address</h2>
            <p className="otp-subtitle">
              We sent a 6-digit verification code to
              <br />
              <span className="otp-target-email">
                {user?.email || "your registered email"}
              </span>
              <br />
              <small
                style={{
                  fontSize: "11px",
                  opacity: 0.75,
                  display: "block",
                  marginTop: "4px",
                }}
              >
                (Please check your <strong>Inbox</strong>,{" "}
                <strong>Spam/Junk</strong> folder, or{" "}
                <strong>Promotions</strong> tab)
              </small>
            </p>

            <form onSubmit={handleVerify} style={{ width: "100%" }}>
              <div className="otp-input-container">
                {otpDigits.map((digit, idx) => (
                  <input
                    key={idx}
                    ref={(el) => (inputRefs.current[idx] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleDigitChange(idx, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(idx, e)}
                    className="otp-single-box"
                    autoFocus={idx === 0}
                  />
                ))}
              </div>

              {error && <div className="otp-error-msg">{error}</div>}

              <button
                type="submit"
                className="otp-btn-verify"
                disabled={isVerifying}
              >
                {isVerifying ? (
                  "Verifying Code..."
                ) : (
                  <>
                    Verify &amp; Launch Dashboard <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>

            <div className="otp-resend-row">
              Didn't receive the email code?{" "}
              <button
                type="button"
                className="btn-resend-link"
                onClick={handleResend}
                disabled={resendCooldown > 0}
              >
                {resendCooldown > 0 ? (
                  `Resend in ${resendCooldown}s`
                ) : (
                  <>
                    <RefreshCw
                      size={12}
                      style={{ verticalAlign: "middle", marginRight: 4 }}
                    />
                    Resend Code Now
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailVerificationModal;
