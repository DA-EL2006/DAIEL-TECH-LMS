import React from 'react';
import './InfoSection.css';
import backgroundImage from '../background-image.jpg';
import BrieflyAboutUs from './BrieflyAboutUs';
import CoursesWeOffer from './CoursesWeOffer';
import DeviceShowcase from './DeviceShowcase';

// Import images from assets (assuming they are in src/assets/screenX.png)
// If relative path from components: ../assets/screenX.png
import screen1 from '../assets/screen1.jpg';
import screen2 from '../assets/screen2.jpg';
import screen3 from '../assets/screen3.jpg';

const deviceImages = [screen1, screen2, screen3];

const InfoSection = () => {
    return (
        <section className="info-section" style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})` 
        }}>
            
            {/* Top Row: Briefly About Us + Device Showcase */}
            <div className="briefly-showcase-row">
                <BrieflyAboutUs />
                <DeviceShowcase images={deviceImages} />
            </div>
            
            {/* Bottom/Other Section: Courses We Offer */}
            <CoursesWeOffer />

            {/* Floating Register Now Button */}
            <button className="register-now-btn" id="register-now-button">
                Register Now
            </button>
        </section>
    );
};

export default InfoSection;
