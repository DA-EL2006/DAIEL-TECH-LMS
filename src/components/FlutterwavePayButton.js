import React, { useState, useEffect } from 'react';
import { getFlutterwaveConfig, recordCoursePurchase } from '../utils/payment';
import Toast from './Toast';
import './FlutterwavePayButton.css';

const FLUTTERWAVE_SCRIPT_URL = "https://checkout.flutterwave.com/v3.js";

/**
 * Dynamically ensures Flutterwave v3 JS checkout script is loaded in DOM
 */
const loadFlutterwaveScript = () => {
  return new Promise((resolve) => {
    if (typeof window !== "undefined" && typeof window.FlutterwaveCheckout === "function") {
      return resolve(true);
    }
    const existingScript = document.querySelector(`script[src="${FLUTTERWAVE_SCRIPT_URL}"]`);
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(true));
      existingScript.addEventListener("error", () => resolve(false));
      if (typeof window.FlutterwaveCheckout === "function") return resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = FLUTTERWAVE_SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const FlutterwavePayButton = ({ course, user, onSuccess, className, buttonText, style }) => {
  const [toast, setToast] = useState({ message: "", type: "info" });

  useEffect(() => {
    loadFlutterwaveScript();
  }, []);

  const handlePay = async (e) => {
    if (e) e.stopPropagation();

    if (typeof window === "undefined" || typeof window.FlutterwaveCheckout !== "function") {
      const loaded = await loadFlutterwaveScript();
      if (!loaded || typeof window.FlutterwaveCheckout !== "function") {
        setToast({ message: "Payment gateway script could not be loaded. Please check your internet connection.", type: "error" });
        return;
      }
    }

    const config = getFlutterwaveConfig(course, user);

    if (!config.public_key) {
      setToast({ message: "Payment Gateway Key is missing. Please configure REACT_APP_FLUTTERWAVE_PUBLIC_KEY in your .env file.", type: "warning" });
      return;
    }

    const handleSuccess = async (response) => {
      console.log("Flutterwave payment response:", response);
      if ((response.status === "successful" || response.status === "completed") && response.tx_ref) {
        await recordCoursePurchase(course.id, response);
        setToast({ message: "Payment successful! Course access unlocked.", type: "success" });
        if (onSuccess) onSuccess(response);
      } else {
        setToast({ message: `Payment verification status: ${response.status || "failed"}. Please try again.`, type: "error" });
      }
    };

    const handleClose = () => {
      console.log("Flutterwave payment modal closed");
    };

    try {
      window.FlutterwaveCheckout({
        ...config,
        callback: handleSuccess,
        onclose: handleClose,
      });
    } catch (err) {
      console.error("Error invoking FlutterwaveCheckout:", err);
      setToast({ message: "Payment initialization error. Please check your network connection.", type: "error" });
    }
  };

  const formattedPrice = (course?.price || 5000).toLocaleString();

  return (
    <>
      <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: "", type: "info" })} />
      <button 
        className={className || "flutterwave-pay-btn"} 
        onClick={handlePay}
        style={style}
      >
        <svg className="flutterwave-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/>
        </svg>
        <span>{buttonText || `Pay ₦${formattedPrice} - Unlock Full Course`}</span>
      </button>
    </>
  );
};

export default FlutterwavePayButton;
