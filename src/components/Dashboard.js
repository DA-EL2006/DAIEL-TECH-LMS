import React, { useState, useEffect } from "react";
import {
  BookOpen, Play, Award,
  Search, Flame, Zap, Target,
  Code, Hexagon, LogOut, Menu, X
} from "lucide-react";
import "./Dashboard.css";
import { coursesData } from "../data/coursesData";
import CourseDetails from "./CourseDetails";
import VideoPlayer from "./VideoPlayer";
import SandboxIDE from "./SandboxIDE";
import LegalPages from "./LegalPages";
import DuolingoPath from "./DuolingoPath";
import Certificate from "./Certificate";
import { getPurchasedCourseIds } from "../utils/payment";

import pythonImg from '../assets/python_banner.png';
import mlImg from '../assets/ml_banner.png';
import frontendImg from '../assets/frontend_banner.png';
// import graphicsImg from '../assets/graphics_banner.png';
// import photoshopImg from '../assets/photoshop_banner.png';

const allCourses = [
  {
    id: 1,
    title: 'Python Programming',
    description: 'Master Python from basics to advanced real-world applications.',
    image: pythonImg,
    category: 'Software Development',
    level: 'Beginner to Advanced'
  },
  {
    id: 2,
    title: 'Machine Learning',
    description: 'Build intelligent systems and predictive models with Python.',
    image: mlImg,
    category: 'Artificial Intelligence',
    level: 'Intermediate'
  },
  {
    id: 3,
    title: 'Frontend Development',
    description: 'Create stunning, responsive web interfaces with modern tools.',
    image: frontendImg,
    category: 'Web Development',
    level: 'Beginner to Pro'
  },
  /*
  {
    id: 4,
    title: 'Graphics Design (Pixelab)',
    description: 'Create professional visuals and logos using your mobile device.',
    image: graphicsImg,
    category: 'Mobile Design',
    level: 'Beginner'
  },
  {
    id: 5,
    title: 'Adobe Photoshop or Illustrator',
    description: 'Master industry-standard tools for professional design. (PC Required)',
    image: photoshopImg,
    category: 'Professional Design',
    level: 'Intermediate'
  },
  {
    id: 6,
    title: 'Amazon KDP Writing',
    description: 'Publish & Earn on Kindle Direct Publishing with zero experience.',
    image: photoshopImg,
    category: 'Publishing & Writing',
    level: 'Beginner'
  }
  */
];
const Dashboard = ({ 
  loggedInUser, 
  currentView, 
  setCurrentView, 
  activeTab: propActiveTab,
  setActiveTab: propSetActiveTab,
  selectedCourseDetails, 
  setSelectedCourseDetails, 
  selectedLessonId, 
  setSelectedLessonId, 
  activeSandboxTask, 
  setActiveSandboxTask,
  selectedLegalTab,
  setSelectedLegalTab,
  onNavigate,
  onResumeCourse, 
  onLogout 
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState("dashboard");
  const activeTab = propActiveTab || internalActiveTab;
  const setActiveTab = propSetActiveTab || setInternalActiveTab;

  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [completedLessons, setCompletedLessons] = useState(() => {
    try {
      const saved = localStorage.getItem("daiel_completed_lessons");
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  const toggleLessonComplete = (courseId, lessonId) => {
    setCompletedLessons(prev => {
      const courseLessons = prev[courseId] ? [...prev[courseId]] : [];
      const index = courseLessons.indexOf(lessonId);
      let isAdding = false;
      if (index > -1) {
        courseLessons.splice(index, 1);
      } else {
        courseLessons.push(lessonId);
        isAdding = true;
      }
      const updated = {
        ...prev,
        [courseId]: courseLessons
      };
      localStorage.setItem("daiel_completed_lessons", JSON.stringify(updated));

      // Update completion timestamps for stats
      try {
        const savedTimestamps = localStorage.getItem("daiel_completion_timestamps");
        const timestamps = savedTimestamps ? JSON.parse(savedTimestamps) : {};
        if (isAdding) {
          timestamps[lessonId] = new Date().toISOString();
        } else {
          delete timestamps[lessonId];
        }
        localStorage.setItem("daiel_completion_timestamps", JSON.stringify(timestamps));
      } catch (e) {
        console.error(e);
      }

      return updated;
    });
  };

  const getCourseLessons = (courseId) => {
    const course = coursesData && coursesData[courseId];
    if (!course || !course.modules) {
      return Array.from({ length: 24 }, (_, i) => ({
        id: `mock_${courseId}_${i + 1}`,
        videoTitle: `Lesson ${i + 1}`,
        title: `Lesson ${i + 1}`
      }));
    }
    const lessonsList = [];
    course.modules.forEach((mod) => {
      if (mod.lessons) {
        mod.lessons.forEach((les) => {
          lessonsList.push(les);
        });
      }
    });
    return lessonsList;
  };

  const totalCompletedCount = Object.values(completedLessons).reduce((sum, list) => sum + list.length, 0);

  const getWeekCompletedCounts = () => {
    try {
      const savedTimestamps = localStorage.getItem("daiel_completion_timestamps");
      const timestamps = savedTimestamps ? JSON.parse(savedTimestamps) : {};
      
      const counts = [0, 0, 0, 0, 0, 0, 0];
      const now = new Date();
      const currentDay = now.getDay();
      const distanceToMonday = currentDay === 0 ? 6 : currentDay - 1;
      const monday = new Date(now);
      monday.setDate(now.getDate() - distanceToMonday);
      monday.setHours(0, 0, 0, 0);
      
      Object.entries(timestamps).forEach(([lessonId, isoString]) => {
        const date = new Date(isoString);
        if (date >= monday) {
          const day = date.getDay();
          const index = day === 0 ? 6 : day - 1;
          if (index >= 0 && index < 7) {
            counts[index] += 1;
          }
        }
      });
      return counts;
    } catch (e) {
      return [0, 0, 0, 0, 0, 0, 0];
    }
  };

  const weekCounts = getWeekCompletedCounts();
  const weekTotalMinutes = totalCompletedCount * 15;
  const h = Math.floor(weekTotalMinutes / 60);
  const m = weekTotalMinutes % 60;
  const timeInvestedValue = `${h}h ${m}m`;

  const maxCount = Math.max(...weekCounts, 1);
  const barHeights = weekCounts.map(count => `${(count / maxCount) * 80}%`);
  const currentDayOfWeekIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  // Derive first name from logged-in user's fullName, fall back to 'Developer'
  const firstName = loggedInUser?.fullName
    ? loggedInUser.fullName.trim().split(' ')[0]
    : 'Student';

  const purchasedIds = getPurchasedCourseIds();
  const enrolledCoursesList = purchasedIds.length > 0
    ? purchasedIds.map((cId) => {
        const cData = coursesData[cId];
        const cLessons = getCourseLessons(cId);
        const cCompleted = completedLessons[cId] || [];
        const cProgress = cLessons.length > 0 ? Math.round((cCompleted.length / cLessons.length) * 100) : 0;
        return {
          id: cId,
          name: cData ? cData.title : `Course #${cId}`,
          instructor: "Daiel Tech",
          progress: cProgress,
          thumbnail: cId === 1 ? pythonImg : cId === 2 ? mlImg : frontendImg,
        };
      })
    : [];

  const user = {
    name: firstName,
    streak: totalCompletedCount,
    completionRate: enrolledCoursesList.length > 0 ? enrolledCoursesList[0].progress : 0,
    enrolledCourses: enrolledCoursesList,
  };

  const navLinks = [
    { id: "dashboard", label: "Overview", icon: Target },
    { id: "courses", label: "Learning", icon: BookOpen },
    { id: "sandboxes", label: "Sandboxes", icon: Code },
    { id: "achievements", label: "Badges", icon: Award },
  ];

  return (
    <div className="dash-container">
      {/* MOBILE DASHBOARD TOP BAR */}
      <div className="dash-mobile-header font-mono">
        <button
          className="dash-mobile-toggle"
          onClick={() => setMobileSidebarOpen((prev) => !prev)}
          title="Toggle Navigation Menu"
        >
          {mobileSidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className="dash-mobile-title">DAIEL TECH LMS</div>
      </div>

      {/* MOBILE OVERLAY BACKDROP */}
      {mobileSidebarOpen && (
        <div
          className="dash-sidebar-backdrop"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* 1. GLOBAL NAVIGATION & HUD */}
      <nav className={`dash-sidebar ${mobileSidebarOpen ? "mobile-open" : ""}`}>
        <div className="dash-logo-mark">
          <Hexagon size={28} className="logo-icon" />
          <span className="mobile-brand-title">DAIEL LMS</span>
        </div>
        
        <div className="dash-nav-links">
          {navLinks.map((link) => {
            const isActive = (link.id === "sandboxes" && currentView === "sandbox") ||
                             (link.id === "achievements" && (currentView === "certificate" || activeTab === "achievements")) ||
                             (link.id === activeTab && currentView === "dashboard");
            return (
              <button
                key={link.id}
                className={`dash-nav-item ${isActive ? "active" : ""}`}
                onClick={() => {
                  if (link.id === "achievements") {
                    setMobileSidebarOpen(false);
                    setActiveTab("achievements");
                    if (onNavigate) {
                      onNavigate("certificate", { courseId: selectedCourseDetails || 1 });
                    } else {
                      setCurrentView("certificate");
                    }
                    return;
                  }
                  setActiveTab(link.id);
                  setMobileSidebarOpen(false);
                  if (onNavigate) {
                    onNavigate(link.id === "sandboxes" ? "sandbox" : "dashboard", { tab: link.id });
                  } else if (link.id === "sandboxes") {
                    setCurrentView("sandbox");
                  } else {
                    setCurrentView("dashboard");
                  }
                }}
                title={link.label}
              >
                <link.icon size={20} />
                <span className="nav-label">{link.label}</span>
              </button>
            );
          })}
        </div>

        {onLogout && (
          <button
            className="dash-nav-item logout-btn"
            onClick={() => {
              setMobileSidebarOpen(false);
              onLogout();
            }}
            title="Log Out"
            style={{ marginTop: 'auto' }}
          >
            <LogOut size={20} />
            <span className="nav-label">Log Out</span>
          </button>
        )}
      </nav>

      {currentView === "dashboard" ? (
        <>
          <main className="dash-main-area">
            {/* Top HUD Area */}
            <header className="dash-hud">
              <div className={`cmd-search-bar ${searchFocused ? 'focused' : ''}`}>
                <Search size={16} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Press Cmd+K to search courses, assignments, or code..." 
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
                <div className="cmd-hint">⌘K</div>
              </div>
              <div className="hud-actions">
                <button
                  className="cert-hud-btn font-mono"
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate("certificate", { courseId: selectedCourseDetails || 1 });
                    } else {
                      setCurrentView("certificate");
                    }
                  }}
                  title="View & Download Official Course Certificate"
                  style={{
                    background: 'linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(245,158,11,0.2) 100%)',
                    border: '1px solid #d4af37',
                    color: '#f59e0b',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontWeight: '700',
                    fontSize: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Award size={14} /> Certificate
                </button>
                <div className="streak-indicator-hud">
                  <Flame size={14} className="flame-icon" />
                  <span>{totalCompletedCount} Days</span>
                </div>
                <div className="profile-avatar-hud">
                  <img src="https://i.pravatar.cc/150?u=daieltech" alt="Profile" />
                </div>
                <div className="time-display">
                  {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </header>

            <div className="dash-content-wrapper">
              {activeTab === "dashboard" && (
                <>
                  {/* 2. THE "HERO" INTERACTIVE WELCOME BENTO CARD */}
                  <section className="bento-hero dash-glass-panel">
                    <div className="hero-content">
                      <h1 className="dynamic-greeting">
                        {getGreeting()}, <span className="highlight-text">{user.name}</span>.
                      </h1>
                      <p className="hero-subtitle">System initialized. Ready to begin your learning journey.</p>
                      
                      <div className="hero-actions">
                        <button className="btn-resume-learning" onClick={() => onResumeCourse && onResumeCourse(3)}>
                          <Play size={16} className="play-icon" fill="currentColor" />
                          Resume Learning
                        </button>
                        <button className="btn-view-path" onClick={() => setActiveTab("courses")}>
                          View Path
                        </button>
                      </div>
                    </div>
                    
                    <div className="hero-progress-visual">
                      <svg className="progress-ring" viewBox="0 0 120 120">
                        <circle className="progress-ring-bg" cx="60" cy="60" r="50" />
                        <circle 
                          className="progress-ring-bar" 
                          cx="60" 
                          cy="60" 
                          r="50" 
                          style={{
                            strokeDashoffset: 314 - (314 * user.completionRate) / 100
                          }}
                          strokeDasharray="314"
                        />
                      </svg>
                      <div className="progress-text">
                        <span className="percent">{user.completionRate}%</span>
                        <span className="label">Completed</span>
                      </div>
                    </div>
                  </section>

                  {/* 3. LEARNING METRICS & ANALYTICS PANEL (Grid Layout) */}
                  <section className="bento-metrics-grid">
                    {/* Card A: Time Invested */}
                    <div className="bento-card time-invested dash-glass-panel">
                      <div className="card-top">
                        <h3>Time Invested This Week</h3>
                        <Zap size={16} className="mint-icon" />
                      </div>
                      <div className="sparkline-container">
                        <div className="bar-chart">
                          {barHeights.map((height, i) => (
                            <div 
                              key={i} 
                              className={`bar ${i === currentDayOfWeekIndex ? 'active' : ''}`} 
                              style={{ height }}
                              title={`${["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][i]}: ${weekCounts[i]} lessons completed`}
                            ></div>
                          ))}
                        </div>
                        <div className="chart-labels">
                          <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                        </div>
                      </div>
                      <div className="metric-value">{timeInvestedValue}</div>
                    </div>

                    {/* Card B: Quick Actions Sandbox */}
                    <div className="bento-card quick-sandbox dash-glass-panel">
                      <div className="card-top">
                        <h3>Interactive Sandbox</h3>
                        <Code size={16} className="blue-icon" />
                      </div>
                      <p className="card-description">Experiment with HTML, CSS, JavaScript, or run Python programs in a clean sandbox.</p>
                      <button className="btn-task-start" style={{ marginTop: 'auto', width: 'fit-content' }} onClick={() => {
                        setActiveTab("sandboxes");
                        setCurrentView("sandbox");
                      }}>
                        Launch IDE
                      </button>
                    </div>

                    {/* Card C: Weekly Goals */}
                    <div className="bento-card weekly-goals dash-glass-panel">
                      <div className="card-top">
                        <h3>Weekly Goal Progress</h3>
                        <Target size={16} className="purple-icon" />
                      </div>
                      <div className="goal-progress-bar-container">
                        <div className="goal-progress-bar" style={{ width: `${Math.min(user.completionRate * 1.5, 100)}%` }}></div>
                      </div>
                      <div className="goal-meta">
                        <span>{user.completionRate}% of target achieved</span>
                      </div>
                    </div>
                  </section>

                  {/* 4. ACTIVE ENROLLED COURSES FEED */}
                  <section className="courses-feed" style={{ marginTop: '40px' }}>
                    <h2 className="section-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--dash-border)', paddingBottom: '12px', marginBottom: '20px' }}>
                      <span>Your Enrolled Courses</span>
                      <button 
                        className="btn-task-start" 
                        onClick={() => setActiveTab("courses")}
                      >
                        View All Path
                      </button>
                    </h2>
                    
                    <div className="course-cards-grid">
                      {user.enrolledCourses.map((course) => (
                        <div key={course.id} className="course-card dash-glass-panel">
                          <div 
                            className="course-bg-image" 
                            style={{ backgroundImage: `url(${course.thumbnail})` }}
                          ></div>
                          <div className="course-bg-overlay"></div>
                          <div className="course-content">
                            <div className="course-meta">
                              <h4>{course.name}</h4>
                              <p>Instructor: {course.instructor}</p>
                            </div>
                            <div className="course-progress-container">
                              <div className="progress-track">
                                <div className="progress-indicator" style={{ width: `${course.progress}%` }}></div>
                              </div>
                              <span className="progress-percent">{course.progress}%</span>
                            </div>
                            <div className="course-hover-actions">
                              <button
                                className="action-btn"
                                onClick={() => onResumeCourse && onResumeCourse(course.id)}
                              >
                                <Play size={14} fill="currentColor" /> Resume Course
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </>
              )}

              {activeTab === "courses" && (
                <DuolingoPath
                  selectedCourseId={selectedCourseDetails || 1}
                  onSelectCourse={(courseId) => setSelectedCourseDetails(courseId)}
                  completedLessons={completedLessons}
                  toggleLessonComplete={toggleLessonComplete}
                  onVideoSelect={(courseId, lessonId) => {
                    setSelectedCourseDetails(courseId);
                    setSelectedLessonId(lessonId);
                    setCurrentView("video-player");
                    window.scrollTo(0, 0);
                  }}
                  onAssignmentSelect={(assignment) => {
                    setActiveSandboxTask({
                      courseType: (selectedCourseDetails || 1) === 1 ? "python" : "frontend",
                      module: assignment.moduleName || "Assignment",
                      title: assignment.title,
                      description: assignment.objective,
                      objectives: assignment.steps || [],
                      hint: assignment.hints ? assignment.hints.join('\n\n') : ""
                    });
                    setCurrentView("sandbox");
                    window.scrollTo(0, 0);
                  }}
                  allCourses={allCourses}
                />
              )}

              {activeTab === "achievements" && (
                <Certificate
                  courseId={selectedCourseDetails || 1}
                  loggedInUser={loggedInUser}
                  onBack={() => {
                    setActiveTab("dashboard");
                    if (onNavigate) {
                      onNavigate("dashboard", { tab: "dashboard" });
                    }
                  }}
                />
              )}
            </div>
          </main>

          {/* 5. FOOTER / TERMINAL CONSOLE */}
          <footer className="terminal-footer">
            <div className="status-indicator online"></div>
            <div className="log-feed font-mono">
              <span className="prompt">{'>'}</span> System running optimally. All services operational.
              <span className="cursor-blink">_</span>
            </div>
            <div className="version-info font-mono">DAIEL-OS v2.1.0</div>
          </footer>
        </>
      ) : (
        <div className="dash-subview-area" style={{ flex: 1, overflowY: 'auto', position: 'relative' }}>
          {currentView === "course-details" && (
            <CourseDetails 
              courseId={selectedCourseDetails} 
              onBack={() => setCurrentView("dashboard")}
              onEnrollClick={() => {}}
              onVideoSelect={(lessonId) => {
                setSelectedLessonId(lessonId);
                setCurrentView("video-player");
                window.scrollTo(0, 0);
              }}
              onAssignmentSelect={(assignment) => {
                setActiveSandboxTask({
                  courseType: selectedCourseDetails === 1 ? "python" : "frontend",
                  module: assignment.moduleName || "Assignment",
                  title: assignment.title,
                  description: assignment.objective,
                  objectives: assignment.steps,
                  hint: assignment.hints ? assignment.hints.join('\n\n') : ""
                });
                setCurrentView("sandbox");
                window.scrollTo(0, 0);
              }}
              onProjectSelect={(project) => {
                const hintText = project.architectural_concept_map && project.architectural_concept_map.execution_flowchart 
                  ? `Execution Flowchart:\n${project.architectural_concept_map.execution_flowchart}`
                  : project.architectural_concept_map && project.architectural_concept_map.specifications
                  ? `Specifications:\n${project.architectural_concept_map.specifications.map(s => `• ${s}`).join('\n')}`
                  : "";
                setActiveSandboxTask({
                  courseType: selectedCourseDetails === 1 ? "python" : "frontend",
                  module: project.moduleName || "Capstone Project",
                  title: project.title,
                  description: project.description,
                  objectives: project.core_requirements,
                  hint: hintText
                });
                setCurrentView("sandbox");
                window.scrollTo(0, 0);
              }}
            />
          )}

          {currentView === "video-player" && (
            <VideoPlayer 
              courseId={selectedCourseDetails} 
              initialLessonId={selectedLessonId}
              onBack={() => setCurrentView("course-details")}
            />
          )}

          {currentView === "certificate" && (
            <Certificate 
              courseId={selectedCourseDetails || 1}
              loggedInUser={loggedInUser}
              onBack={() => {
                if (onNavigate) {
                  onNavigate("dashboard", { tab: "dashboard" });
                } else {
                  setCurrentView("dashboard");
                }
              }}
            />
          )}

          {currentView === "sandbox" && (
            <SandboxIDE 
              activeTask={activeSandboxTask}
              courseType={activeSandboxTask?.courseType || (selectedCourseDetails === 1 ? "python" : "frontend")}
              onBack={() => {
                if (selectedCourseDetails) {
                  setCurrentView("course-details");
                } else {
                  setCurrentView("dashboard");
                }
              }}
            />
          )}

          {currentView === "legal" && (
            <LegalPages 
              initialTab={selectedLegalTab} 
              onBack={() => setCurrentView("dashboard")} 
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
