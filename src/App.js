import React, { useState, useEffect } from 'react';
import './App.css';
import { CourseProvider } from './context/CourseContext';
import InfoSection from './components/InfoSection';
import ExploreOurCourse from './components/ExploreOurCourse';
import WhatWeOffer from './components/WhatWeOffer';
import Footer from './components/Footer';
import { saveVideoProgress } from './utils/storage';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  const [currentView, setCurrentView] = useState('landing'); // dashboard | course | landing
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentTimestamp, setCurrentTimestamp] = useState('00:00:00');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('daiel-theme-v2');
    if (saved) return saved;
    return 'dark'; // Always default to dark mode
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('daiel-theme-v2', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Demo video URL (replace with real URLs)
  const demoVideoUrl = 'https://test-streams.mux.dev/x36xhzz/x3zzv.m3u8';

  const handleCourseSelect = (courseId) => {
    setSelectedCourse(courseId);
    setSelectedVideo(1); // Select first module by default
    setCurrentView('course');
  };

  const handleVideoSelect = (courseId, videoId) => {
    setSelectedCourse(courseId);
    setSelectedVideo(videoId);
    setCurrentView('course');
  };

  const handleSeekToTimestamp = (timestamp) => {
    // This will be called by the annotations component
    // The player will handle the actual seeking
  };

  const handleProgressUpdate = (progress) => {
    if (selectedVideo) {
      saveVideoProgress(selectedVideo, progress);
    }
  };

  const handleTimeUpdate = (timestamp) => {
    setCurrentTimestamp(timestamp);
  };

  return (
    <CourseProvider>
      <div className="app">
        <Header 
          theme={theme}
          toggleTheme={toggleTheme}
          setCurrentView={setCurrentView}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          currentView={currentView}
          selectedCourse={selectedCourse}
        />

        <main className="app-main">
          {currentView === 'landing' && (
            <>
              <InfoSection onSignupClick={() => setCurrentView('signup')} />
              <WhatWeOffer onSignupClick={() => setCurrentView('signup')} />
              <ExploreOurCourse />
            </>
          )}
          
          {currentView === 'signup' && (
            <Signup 
              onBack={() => setCurrentView('landing')} 
              onLoginClick={() => setCurrentView('login')}
            />
          )}

          {currentView === 'login' && (
            <Login 
              onBack={() => setCurrentView('landing')} 
              onSignupClick={() => setCurrentView('signup')}
              onLoginSuccess={() => setCurrentView('dashboard')}
            />
          )}

          {currentView === 'dashboard' && (
            <Dashboard 
              onCourseSelect={handleCourseSelect}
              onVideoSelect={handleVideoSelect}
            />
          )}
        </main>

        <Footer />
      </div>
    </CourseProvider>
  );
}

export default App;
