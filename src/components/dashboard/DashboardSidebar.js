import React from "react";
import {
  BookOpen,
  Award,
  Compass,
  Code,
  Target,
  Hexagon,
  LogOut,
} from "lucide-react";

const DashboardSidebar = ({
  activeTab,
  setActiveTab,
  currentView,
  setCurrentView,
  mobileSidebarOpen,
  setMobileSidebarOpen,
  onNavigate,
  selectedCourseDetails,
  onLogout,
}) => {
  const navLinks = [
    { id: "dashboard", label: "Overview", icon: Target },
    { id: "courses", label: "Learning", icon: BookOpen },
    { id: "explore", label: "Explore Courses", icon: Compass },
    { id: "sandboxes", label: "Sandboxes", icon: Code },
    { id: "achievements", label: "Badges", icon: Award },
  ];

  return (
    <nav className={`dash-sidebar ${mobileSidebarOpen ? "mobile-open" : ""}`}>
      <div className="dash-logo-mark">
        <Hexagon size={28} className="logo-icon" />
        <span className="mobile-brand-title">DAIEL LMS</span>
      </div>

      <div className="dash-nav-links">
        {navLinks.map((link) => {
          const isActive =
            (link.id === "sandboxes" && currentView === "sandbox") ||
            (link.id === "achievements" &&
              (currentView === "certificate" ||
                activeTab === "achievements")) ||
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
                    onNavigate("certificate", {
                      courseId: selectedCourseDetails || 1,
                    });
                  } else {
                    setCurrentView("certificate");
                  }
                  return;
                }
                setActiveTab(link.id);
                setMobileSidebarOpen(false);
                if (onNavigate) {
                  onNavigate(
                    link.id === "sandboxes" ? "sandbox" : "dashboard",
                    { tab: link.id },
                  );
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
          style={{ marginTop: "auto" }}
        >
          <LogOut size={20} />
          <span className="nav-label">Log Out</span>
        </button>
      )}
    </nav>
  );
};

export default DashboardSidebar;
