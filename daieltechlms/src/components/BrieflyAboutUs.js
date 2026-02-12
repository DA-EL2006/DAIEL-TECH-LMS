import React, { useState, useEffect } from 'react';
import './BrieflyAboutUs.css';


const BrieflyAboutUs = () => {
  const fullText = "Daiel Tech is a digital skills hub dedicated to training and mentoring young talents with relevant, future-ready tech skills that unlock global opportunities, transform lives, and shape the digital future beyond borders.";
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeoutId;
    let index = 0;
    
    const typeText = () => {
      // Use logical check to continue typing
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
        
        // Typing speed
        const speed = Math.random() * 30 + 30; // Slightly slower: 30-60ms
        timeoutId = setTimeout(typeText, speed);
      } else {
        // Finished typing
        setIsTyping(false);
        // Wait before restarting
        timeoutId = setTimeout(() => {
          setDisplayedText('');
          index = 0;
          setIsTyping(true);
          typeText();
        }, 3000); 
      }
    };

    // Start initial typing
    timeoutId = setTimeout(typeText, 500);

    // Cleanup function to clear whatever timeout is currently active
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="briefly-about-container">
      {/* 4 Spans for the animated border snake effect */}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      
      <h3 className="briefly-header">Briefly about us</h3>
      <p className="briefly-text">
        {displayedText}
        <span className="cursor">&nbsp;</span>
      </p>
    </div>
  );
};

export default BrieflyAboutUs;
