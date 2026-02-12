import React, { useState, useEffect, useRef } from 'react';
import './DeviceShowcase.css';

const DeviceShowcase = ({ images = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(-1);
    
    // Use a ref to track if it's the first mount to avoid initial slide-out weirdness if needed
    // But helpful for tracking previous state

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setPrevIndex(current => current);
            setCurrentIndex(current => (current + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images]);

    if (!images.length) return null;

    const getImageClass = (index) => {
        if (index === currentIndex) return 'device-image active';
        if (index === prevIndex) return 'device-image exit';
        return 'device-image ready'; // Sitting on the left
    };

    return (
        <div className="device-showcase-container">
            <div className="device-frame">
                <div className="device-glare"></div>
                <div className="device-camera"></div>
                <div className="device-screen">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Screen ${index + 1}`}
                            className={getImageClass(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DeviceShowcase;
