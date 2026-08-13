import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Global error handler to suppress third-party cross-origin "Script error." popups during component unmounting/switching
if (typeof window !== "undefined") {
  const originalOnError = window.onerror;
  window.onerror = function (message, source, lineno, colno, error) {
    const msg = String(message || "");
    // Suppress generic cross-origin "Script error." triggered by third-party scripts/workers/CDNs
    if (
      msg.includes("Script error") ||
      msg.includes("ResizeObserver loop limit exceeded") ||
      msg.includes("Script error.") ||
      (source && !source.includes(window.location.hostname))
    ) {
      console.warn("Suppressed external script notification:", message, source);
      return true; // Prevents error from bubbling to React Dev Overlay
    }
    if (originalOnError) {
      return originalOnError.apply(this, arguments);
    }
    return false;
  };

  window.addEventListener("unhandledrejection", (event) => {
    const reasonMsg = String(event.reason?.message || event.reason || "");
    if (
      reasonMsg.includes("Script error") ||
      reasonMsg.includes("ResizeObserver loop limit exceeded") ||
      reasonMsg.includes("Script error.")
    ) {
      event.preventDefault();
    }
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
