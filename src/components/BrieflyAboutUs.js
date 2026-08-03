import React, { useState, useEffect } from "react";
import "./BrieflyAboutUs.css";

const BrieflyAboutUs = () => {
  const fullText =
    "Daiel Tech is a digital skills hub dedicated to training and mentoring young talents with relevant, future-ready tech skills that unlock global opportunities, transform lives, and shape the digital future beyond borders.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeoutId;
    let index = 0;

    const typeText = () => {
      // Use logical check to continue typing
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;

        // Typing speed calculated so total typing time is between 800ms and 1000ms (1 sec)
        const targetDuration = 800 + Math.random() * 200;
        const speed = targetDuration / fullText.length;
        timeoutId = setTimeout(typeText, speed);
      } else {
        // Finished typing
        // Wait before restarting
        timeoutId = setTimeout(() => {
          setDisplayedText("");
          index = 0;
          typeText();
        }, 1000);
      }
    };

    // Start initial typing
    timeoutId = setTimeout(typeText, 1000);

    // Cleanup function to clear whatever timeout is currently active
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="briefly-about-container">
      <h3 className="briefly-header">Briefly about us</h3>
      <p className="briefly-text">
        {displayedText}
        <span className="cursor">&nbsp;</span>
      </p>
    </div>
  );
};

export default BrieflyAboutUs;
