import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Global error handler to suppress third-party cross-origin "Script error." popups during component unmounting/switching
if (typeof window !== "undefined") {
  const originalOnError = window.onerror;
  window.onerror = function (message, source, lineno, colno, error) {
    // Suppress generic cross-origin "Script error." triggered by third-party scripts/workers
    if (
      message === "Script error." ||
      message === "Script error" ||
      (source && !source.includes(window.location.hostname))
    ) {
      console.warn("Suppressed external script notification:", message, source);
      return true; // Prevents the error from bubbling to React Dev Overlay
    }
    if (originalOnError) {
      return originalOnError.apply(this, arguments);
    }
    return false;
  };

  window.addEventListener("unhandledrejection", (event) => {
    if (
      event.reason &&
      (event.reason.message === "Script error." ||
        event.reason.message === "Script error" ||
        event.reason === "Script error.")
    ) {
      event.preventDefault();
    }
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
