import React, { useState, useEffect } from "react";
import "./App.css";
import { CourseProvider } from "./context/CourseContext";
import InfoSection from "./components/InfoSection";
import ExploreOurCourse from "./components/ExploreOurCourse";
import WhatWeOffer from "./components/WhatWeOffer";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import CourseDetails from "./components/CourseDetails";
import VideoPlayer from "./components/VideoPlayer";
import SandboxIDE from "./components/SandboxIDE";

function App() {
  const [currentView, setCurrentView] = useState("landing"); // dashboard | course | landing | course-details | video-player | sandbox
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedCourseDetails, setSelectedCourseDetails] = useState(null);
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("daiel-theme-v2");
    if (saved) return saved;
    return "dark"; // Always default to dark mode
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("daiel-theme-v2", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleCourseSelect = (courseId) => {
    setSelectedCourse(courseId);
    setCurrentView("course");
  };

  const handleCourseDetailsSelect = (courseId) => {
    setSelectedCourseDetails(courseId);
    setCurrentView("course-details");
    window.scrollTo(0, 0);
  };

  const handleVideoSelect = (courseId, videoId) => {
    setSelectedCourseDetails(courseId);
    setSelectedLessonId(videoId);
    setCurrentView("video-player");
    window.scrollTo(0, 0);
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
          {currentView === "landing" && (
            <>
              <InfoSection onSignupClick={() => setCurrentView("signup")} />
              <WhatWeOffer onSignupClick={() => setCurrentView("signup")} />
              <ExploreOurCourse 
                onCourseSelect={handleCourseDetailsSelect}
                onEnrollClick={() => setCurrentView("signup")} 
              />
            </>
          )}

          {currentView === "course-details" && (
            <CourseDetails 
              courseId={selectedCourseDetails} 
              onBack={() => setCurrentView("landing")}
              onEnrollClick={() => setCurrentView("signup")}
              onVideoSelect={(lessonId) => handleVideoSelect(selectedCourseDetails, lessonId)}
            />
          )}

          {currentView === "video-player" && (
            <VideoPlayer
              courseId={selectedCourseDetails}
              initialLessonId={selectedLessonId}
              onBack={() => setCurrentView("course-details")}
            />
          )}

          {currentView === "signup" && (
            <Signup
              onBack={() => setCurrentView("landing")}
              onLoginClick={() => setCurrentView("login")}
            />
          )}

          {currentView === "login" && (
            <Login
              onBack={() => setCurrentView("landing")}
              onSignupClick={() => setCurrentView("signup")}
              onLoginSuccess={() => setCurrentView("dashboard")}
            />
          )}

          {currentView === "dashboard" && (
            <Dashboard
              onCourseSelect={handleCourseSelect}
              onVideoSelect={handleVideoSelect}
              onSandboxSelect={() => setCurrentView("sandbox")}
            />
          )}

          {currentView === "sandbox" && (
            <SandboxIDE onBack={() => setCurrentView("dashboard")} />
          )}
        </main>

        <Footer />
      </div>
    </CourseProvider>
  );
}

export default App;
