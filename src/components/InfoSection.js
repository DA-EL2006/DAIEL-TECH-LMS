import React, { useState, useEffect } from "react";
import "./InfoSection.css";
import backgroundImage from "../background-image.avif";
import BrieflyAboutUs from "./BrieflyAboutUs";

// Import images from assets
import screen1 from "../assets/screen1.avif";
import screen2 from "../assets/screen2.avif";
import screen3 from "../assets/screen3.avif";
import screen4 from "../assets/screen4.avif";

const deviceImages = [screen1, screen2, screen3, screen4];

const InfoSection = ({ onSignupClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);

  // Preload all carousel hero images on mount so transitions render instantly
  useEffect(() => {
    const imagesToPreload = [backgroundImage, ...deviceImages];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % deviceImages.length);
    }, 5000); // Crossfade every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="info-section" id="home">
      {/* Background Layers for Dynamic Transition */}
      <div className="bg-layers-container">
        {/* Base background image (static overlay or default) */}
        <div
          className="bg-base-layer"
          style={{
            backgroundImage: `linear-gradient(var(--color-overlay), var(--color-overlay)), url(${backgroundImage})`,
          }}
        ></div>

        {/* Dynamic Sliding/Fading Layers */}
        {deviceImages.map((img, index) => (
          <div
            key={index}
            className={`bg-dynamic-layer ${index === currentIndex ? "active" : ""} ${index === prevIndex ? "exit" : ""}`}
            style={{
              backgroundImage: `linear-gradient(var(--color-overlay), var(--color-overlay)), url(${img})`,
            }}
          ></div>
        ))}
      </div>

      <div className="info-content-wrapper">
        {/* Top Row: Briefly About Us */}
        <div className="briefly-row" id="about">
          <BrieflyAboutUs />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
