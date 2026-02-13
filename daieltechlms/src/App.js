import React, { useState } from 'react';
import './App.css';
import { CourseProvider } from './context/CourseContext';
import Dashboard from './components/Dashboard';
import UnifiedCoursePlayer from './components/UnifiedCoursePlayer';
import TimestampedAnnotations from './components/TimestampedAnnotations';
import { saveVideoProgress } from './utils/storage';
import InfoSection from './components/InfoSection';
import ExploreOurCourse from './components/ExploreOurCourse';



function App() {
  const [currentView, setCurrentView] = useState('dashboard'); // dashboard | course
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentTimestamp, setCurrentTimestamp] = useState('00:00:00');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo-section">
              <img 
                src="/logo-removebg-preview.png" 
                alt="DAIEL Logo" 
                className="app-logo" 
                onClick={() => setCurrentView('dashboard')}
              />
            </div>
            
            <button className="hamburger-menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
              <a href="#home" className="nav-link">HOME</a>
              <a href="#about" className="nav-link">ABOUT</a>
              <a href="#courses" className="nav-link" onClick={(e) => { e.preventDefault(); setCurrentView('dashboard'); setMobileMenuOpen(false); }}>
                COURSES
              </a>
              <a href="#contact" className="nav-link">CONTACT</a>
              <button className="nav-link-btn nav-dropdown-login">Login</button>
              <button className="nav-signup-btn nav-dropdown-signup">Sign Up</button>
            </div>

            <div className="nav-auth nav-auth-desktop">
              <button className="nav-link-btn">Login</button>
              <button className="nav-signup-btn">Sign Up</button>
            </div>

            {selectedCourse && currentView !== 'dashboard' && (
              <div className="nav-breadcrumb-section">
                <span className="nav-breadcrumb">/</span>
                <span className="nav-course-name">{selectedCourse}</span>
              </div>
            )}
          </div>
        </nav>

        <main className="app-main">
          <InfoSection />
          {currentView === 'dashboard' && <ExploreOurCourse />}
          {currentView === 'dashboard' ? (

            <Dashboard
              onCourseSelect={handleCourseSelect}
              onVideoSelect={handleVideoSelect}
            />
          ) : (
            <div className="course-player-layout">
              <div className="player-column">
                <UnifiedCoursePlayer
                  videoUrl={demoVideoUrl}
                  videoTitle={`Module ${selectedVideo}: Interactive Learning`}
                  onProgressUpdate={handleProgressUpdate}
                  onTimeUpdate={handleTimeUpdate}
                />
              </div>

              <div className="annotations-column">
                <TimestampedAnnotations
                  courseId={selectedCourse}
                  videoId={selectedVideo}
                  currentTimestamp={currentTimestamp}
                  onSeek={handleSeekToTimestamp}
                  onNoteAdded={(note) => console.log('Note added:', note)}
                />
              </div>
            </div>
          )}
        </main>

        <footer className="app-footer">
          <p>© 2026 DAIEL LMS - Learning Management System. All rights reserved.</p>
        </footer>
      </div>
    </CourseProvider>
  );
}

export default App;
