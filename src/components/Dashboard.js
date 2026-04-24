import React, { useState } from 'react';
import { 
  BarChart2, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Download, 
  MessageSquare, 
  Play, 
  Settings, 
  Award, 
  Users, 
  HelpCircle,
  ExternalLink,
  Calendar,
  ChevronRight,
  LogOut,
  User,
  Shield,
  Bell
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = ({ onCourseSelect, onVideoSelect }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Mock data for the dashboard
  const user = {
    name: 'David',
    streak: 7,
    enrolledCourses: [
      { id: 1, name: 'Fullstack Web Development', progress: 65, mentor: 'Sarah Johnson' },
      { id: 2, name: 'UI/UX Design Masterclass', progress: 30, mentor: 'Michael Chen' }
    ]
  };

  const assignments = [
    { id: 1, title: 'React Hooks Deep Dive', deadline: 'Oct 25, 2023', status: 'Pending' },
    { id: 2, title: 'State Management Design', deadline: 'Oct 20, 2023', status: 'Submitted' }
  ];

  const sidebarLinks = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart2 },
    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'assignments', label: 'Assignments', icon: Calendar },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'support', label: 'Support', icon: HelpCircle },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <img src="/logo-removebg-preview.png" alt="Daiel Tech" className="sidebar-logo" />
        </div>
        <nav className="sidebar-nav">
          {sidebarLinks.map(link => (
            <button 
              key={link.id}
              className={`sidebar-link ${activeTab === link.id ? 'active' : ''}`}
              onClick={() => setActiveTab(link.id)}
            >
              <link.icon size={20} />
              <span>{link.label}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <button className="sidebar-link logout-btn">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        {/* Top Header Section */}
        <header className="dashboard-top-bar">
          <div className="welcome-section">
            <h1>Welcome back, {user.name} 👋</h1>
            <p>Continue your learning journey at Daiel Tech.</p>
          </div>
          <div className="top-bar-actions">
            <button className="icon-btn" title="Notifications"><Bell size={20} /></button>
            <div className="profile-toggle">
              <div className="avatar">D</div>
              <ChevronRight size={16} />
            </div>
          </div>
        </header>

        <div className="dashboard-content">
          {/* Section 1 & 2: Overview & Next Steps */}
          <div className="content-grid-top">
            <section className="progress-card glass-card">
              <div className="card-header">
                <h3>Overall Progress</h3>
                <span className="streak-badge"><Award size={16} /> {user.streak} Day Streak</span>
              </div>
              <div className="progress-stats">
                <div className="stat-item">
                  <span className="stat-value">65%</span>
                  <span className="stat-label">Course Average</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">12/24</span>
                  <span className="stat-label">Modules Done</span>
                </div>
              </div>
              <div className="main-progress-bar">
                <div className="progress-fill" style={{ width: '65%' }}></div>
              </div>
            </section>

            <section className="continue-learning glass-card">
              <div className="next-lesson-info">
                <span className="section-tag">NEXT LESSON</span>
                <h3>Advanced State Management</h3>
                <p><Clock size={14} /> Estimated: 45 mins • Module 4</p>
              </div>
              <button className="continue-btn" onClick={() => onCourseSelect(1)}>
                Continue Learning <Play size={16} />
              </button>
            </section>

            <section className="goal-tracker glass-card">
              <h3>Weekly Goal</h3>
              <div className="goal-progress">
                <div className="goal-text">
                  <span>2 of 4 lessons completed</span>
                  <span>50%</span>
                </div>
                <div className="goal-bar">
                  <div className="goal-bar-fill" style={{ width: '50%' }}></div>
                </div>
              </div>
              <p className="goal-tip">Complete 2 more to reach your goal! 🚀</p>
            </section>
          </div>

          {/* Section 3: My Courses */}
          <section className="dashboard-section">
            <div className="section-header">
              <h2>My Courses</h2>
              <button className="text-btn">View All</button>
            </div>
            <div className="courses-grid">
              {user.enrolledCourses.map(course => (
                <div key={course.id} className="course-dashboard-card glass-card">
                  <div className="course-thumb">
                    <BookOpen size={24} />
                  </div>
                  <div className="course-details">
                    <h4>{course.name}</h4>
                    <p className="mentor">Mentor: {course.mentor}</p>
                    <div className="course-progress">
                      <div className="mini-bar">
                        <div className="mini-fill" style={{ width: `${course.progress}%` }}></div>
                      </div>
                      <span>{course.progress}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 & 5: Assignments & Community */}
          <div className="content-grid-bottom">
            <section className="dashboard-section glass-card">
              <div className="section-header">
                <h3>Assignments & Projects</h3>
                <Award size={18} className="text-primary" />
              </div>
              <div className="assignments-list">
                {assignments.map(item => (
                  <div key={item.id} className="assignment-item">
                    <div className="assignment-info">
                      <span className="title">{item.title}</span>
                      <span className="date">Due: {item.deadline}</span>
                    </div>
                    <span className={`status-badge ${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="dashboard-section glass-card">
              <div className="section-header">
                <h3>Community & Mentorship</h3>
                <Users size={18} className="text-primary" />
              </div>
              <div className="community-links">
                <a href="#discord" className="community-btn discord">
                  <MessageSquare size={18} /> Discord Access <ChevronRight size={14} />
                </a>
                <a href="#mentor" className="community-btn mentor">
                  <User size={18} /> Ask a Mentor <ChevronRight size={14} />
                </a>
              </div>
              <div className="announcements">
                <h4>Announcements</h4>
                <div className="announcement-item">
                  <span className="dot"></span>
                  <p>Live Q&A session this Friday at 6 PM. Join us!</p>
                </div>
              </div>
            </section>

            <section className="dashboard-section glass-card">
              <div className="section-header">
                <h3>Certificates</h3>
                <CheckCircle size={18} className="text-success" />
              </div>
              <div className="certificates-container">
                <div className="empty-certificates">
                  <Shield size={32} className="shield-icon" />
                  <p>Complete a course to unlock your first certificate!</p>
                </div>
                <button className="outline-btn" disabled>
                  <Download size={16} /> Download All
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Floating Settings/Account Toggle (Optional Utility) */}
      <div className="dashboard-settings-trigger">
        <Settings size={20} />
      </div>
    </div>
  );
};

export default Dashboard;
