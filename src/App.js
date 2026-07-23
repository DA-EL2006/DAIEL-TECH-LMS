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
import LegalPages from "./components/LegalPages";

function App() {
  const [currentView, setCurrentView] = useState("landing"); // dashboard | course | landing | course-details | video-player | sandbox
  const [selectedCourse] = useState(null);
  const [selectedCourseDetails, setSelectedCourseDetails] = useState(null);
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [selectedLegalTab, setSelectedLegalTab] = useState("terms");
  const [activeSandboxTask, setActiveSandboxTask] = useState(null);

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

  const handleCourseDetailsSelect = (courseId) => {
    setSelectedCourseDetails(courseId);
    setCurrentView("course-details");
    window.scrollTo(0, 0);
  };

  return (
    <CourseProvider>
      <div className="app">
        {!loggedInUser && (
          <Header
            theme={theme}
            toggleTheme={toggleTheme}
            setCurrentView={setCurrentView}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            currentView={currentView}
            selectedCourse={selectedCourse}
          />
        )}

        <main className="app-main">
          {!loggedInUser ? (
            <>
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
                  onLoginSuccess={(user) => {
                    setLoggedInUser(user);
                    setCurrentView("dashboard");
                  }}
                />
              )}

              {currentView === "legal" && (
                <LegalPages
                  initialTab={selectedLegalTab}
                  onBack={() => setCurrentView("landing")}
                />
              )}
            </>
          ) : (
            <Dashboard
              loggedInUser={loggedInUser}
              currentView={currentView}
              setCurrentView={setCurrentView}
              selectedCourseDetails={selectedCourseDetails}
              setSelectedCourseDetails={setSelectedCourseDetails}
              selectedLessonId={selectedLessonId}
              setSelectedLessonId={setSelectedLessonId}
              activeSandboxTask={activeSandboxTask}
              setActiveSandboxTask={setActiveSandboxTask}
              selectedLegalTab={selectedLegalTab}
              setSelectedLegalTab={setSelectedLegalTab}
              onResumeCourse={(courseId) => {
                setSelectedCourseDetails(courseId);
                const lastWatched = localStorage.getItem(`daiel_last_watched_${courseId}`);
                if (lastWatched) {
                  setSelectedLessonId(lastWatched);
                  setCurrentView("video-player");
                } else {
                  setCurrentView("course-details");
                }
                window.scrollTo(0, 0);
              }}
              onLogout={() => {
                setLoggedInUser(null);
                setCurrentView("landing");
                window.scrollTo(0, 0);
              }}
            />
          )}
        </main>

        {!loggedInUser && (
          <Footer 
            onLegalSelect={(tab) => {
              setSelectedLegalTab(tab);
              setCurrentView("legal");
            }}
          />
        )}
      </div>
    </CourseProvider>
  );
}

export default App;
