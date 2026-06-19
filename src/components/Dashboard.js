import React, { useState, useEffect } from "react";
import {
  BookOpen, Clock, Play, Award, Terminal, 
  Search, Flame, ChevronRight, Zap, Target, Book,
  Code, Hexagon, FileText
} from "lucide-react";
import "./Dashboard.css";

const Dashboard = ({ onCourseSelect, onVideoSelect, onSandboxSelect }) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchFocused, setSearchFocused] = useState(false);

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

  // Mock data
  const user = {
    name: "David",
    streak: 12,
    completionRate: 68,
    enrolledCourses: [
      {
        id: 1,
        name: "Advanced React Patterns",
        instructor: "Sarah Johnson",
        progress: 75,
        thumbnail: "react-thumb",
      },
      {
        id: 2,
        name: "Fullstack Next.js Ecosystem",
        instructor: "Michael Chen",
        progress: 32,
        thumbnail: "next-thumb",
      },
      {
        id: 3,
        name: "System Design for Scale",
        instructor: "Alex Rivera",
        progress: 10,
        thumbnail: "sys-thumb",
      }
    ],
  };

  const navLinks = [
    { id: "dashboard", label: "Overview", icon: Target },
    { id: "courses", label: "Learning", icon: BookOpen },
    { id: "sandboxes", label: "Sandboxes", icon: Code },
    { id: "achievements", label: "Badges", icon: Award },
  ];

  return (
    <div className="dash-container">
      {/* 1. GLOBAL NAVIGATION & HUD */}
      <nav className="dash-sidebar">
        <div className="dash-logo-mark">
          <Hexagon size={28} className="logo-icon" />
        </div>
        
        <div className="dash-nav-links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`dash-nav-item ${activeTab === link.id ? "active" : ""}`}
              onClick={() => {
                setActiveTab(link.id);
                if (link.id === "sandboxes" && onSandboxSelect) {
                  onSandboxSelect();
                }
              }}
              title={link.label}
            >
              <link.icon size={20} />
              <span className="nav-label">{link.label}</span>
            </button>
          ))}
        </div>

        <div className="dash-profile-section">
          <div className="streak-indicator">
            <Flame size={16} className="flame-icon" />
            <span>{user.streak}</span>
          </div>
          <div className="profile-avatar-wrap">
            <div className="avatar-ring"></div>
            <div className="profile-avatar">D</div>
          </div>
        </div>
      </nav>

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
            <div className="time-display">
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        </header>

        <div className="dash-content-wrapper">
          {/* 2. THE "HERO" INTERACTIVE WELCOME BENTO CARD */}
          <section className="bento-hero dash-glass-panel">
            <div className="hero-content">
              <h1 className="dynamic-greeting">
                {getGreeting()}, <span className="highlight-text">{user.name}</span>.
              </h1>
              <p className="hero-subtitle">System ready. You are 2 lessons away from your weekly goal.</p>
              
              <div className="hero-actions">
                <button className="btn-resume-learning" onClick={() => onCourseSelect(1)}>
                  <Play size={16} className="play-icon" fill="currentColor" />
                  Resume Learning
                </button>
                <button className="btn-view-path">
                  View Path
                </button>
              </div>
            </div>
            
            <div className="hero-progress-visual">
              <svg className="progress-ring" viewBox="0 0 120 120">
                <circle className="ring-bg" cx="60" cy="60" r="50" />
                <circle 
                  className="ring-fill" 
                  cx="60" cy="60" r="50" 
                  strokeDasharray={`${user.completionRate * 3.14} 314`}
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
                <h3>Time Invested</h3>
                <Zap size={16} className="mint-icon" />
              </div>
              <div className="sparkline-container">
                {/* Minimalist simulated bar chart */}
                <div className="bar-chart">
                  <div className="bar" style={{height: '30%'}}></div>
                  <div className="bar" style={{height: '50%'}}></div>
                  <div className="bar" style={{height: '80%'}}></div>
                  <div className="bar" style={{height: '40%'}}></div>
                  <div className="bar" style={{height: '100%'}}></div>
                  <div className="bar" style={{height: '60%'}}></div>
                  <div className="bar active" style={{height: '90%'}}></div>
                </div>
                <div className="chart-labels">
                  <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                </div>
              </div>
              <div className="metric-value">12h 45m <span className="trend positive">+2h</span></div>
            </div>

            {/* Card B: Skill Badges Unlocked */}
            <div className="bento-card skill-badges dash-glass-panel">
              <div className="card-top">
                <h3>Skills Acquired</h3>
                <Award size={16} className="violet-icon" />
              </div>
              <div className="badges-grid">
                <div className="badge-item react">
                   <Hexagon size={32} />
                   <span>React</span>
                </div>
                <div className="badge-item node">
                   <Hexagon size={32} />
                   <span>Node.js</span>
                </div>
                <div className="badge-item uiux">
                   <Hexagon size={32} />
                   <span>UI/UX</span>
                </div>
              </div>
            </div>

            {/* Card C: Upcoming Deliverables */}
            <div className="bento-card upcoming-tasks dash-glass-panel">
              <div className="card-top">
                <h3>Next Deliverables</h3>
                <Clock size={16} className="blue-icon" />
              </div>
              <div className="task-list">
                <div className="task-row">
                  <div className="task-info">
                    <FileText size={14} className="task-icon" />
                    <span>State Management Lab</span>
                  </div>
                  <div className="countdown font-mono">T- 12:45:00</div>
                </div>
                <div className="task-row">
                  <div className="task-info">
                    <Book size={14} className="task-icon" />
                    <span>System Design Quiz</span>
                  </div>
                  <div className="countdown font-mono critical">T- 04:15:00</div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. INTERACTIVE COURSE CARDS (The Main Feed) */}
          <section className="courses-feed">
            <h2 className="section-title">Active Courses</h2>
            <div className="course-cards-grid">
              {user.enrolledCourses.map((course) => (
                <div key={course.id} className="course-card dash-glass-panel">
                  <div className="course-mesh-bg" />
                  <div className="course-content">
                    <div className="course-meta">
                      <h4>{course.name}</h4>
                      <p>{course.instructor}</p>
                    </div>
                    
                    <div className="course-progress-container">
                      <div className="progress-track">
                        <div className="progress-indicator" style={{width: `${course.progress}%`}}></div>
                      </div>
                      <span className="progress-percent font-mono">{course.progress}%</span>
                    </div>

                    <div className="hover-actions">
                      <button className="action-btn" onClick={() => onCourseSelect(course.id)}>
                        <Play size={14} /> Jump to Lab
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
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
    </div>
  );
};

export default Dashboard;
