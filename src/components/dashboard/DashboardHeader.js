import React from "react";
import { Search, Sun, Moon, Award, Flame } from "lucide-react";

const DashboardHeader = ({
  searchFocused,
  setSearchFocused,
  toggleTheme,
  theme,
  onNavigate,
  selectedCourseDetails,
  setCurrentView,
  totalCompletedCount = 0,
  currentTime = new Date(),
}) => {
  return (
    <header className="dash-hud">
      <div className={`cmd-search-bar ${searchFocused ? "focused" : ""}`}>
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
        {toggleTheme && (
          <button
            className="dash-theme-toggle-btn"
            onClick={toggleTheme}
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            style={{
              background: "var(--dash-surface-hover)",
              border: "1px solid var(--dash-border)",
              color: "var(--dash-text-main)",
              width: "34px",
              height: "34px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        )}

        <button
          className="cert-hud-btn font-mono"
          onClick={() => {
            if (onNavigate) {
              onNavigate("certificate", {
                courseId: selectedCourseDetails || 1,
              });
            } else {
              setCurrentView("certificate");
            }
          }}
          title="View & Download Official Course Certificate"
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(245,158,11,0.2) 100%)",
            border: "1px solid #d4af37",
            color: "#f59e0b",
            padding: "6px 12px",
            borderRadius: "8px",
            fontWeight: "700",
            fontSize: "12px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <Award size={14} />
          <span>Certificate</span>
        </button>

        <div className="streak-indicator-hud">
          <Flame size={14} className="flame-icon" />
          <span>{totalCompletedCount} Days</span>
        </div>
        <div className="profile-avatar-hud">
          <img
            src="https://i.pravatar.cc/150?u=daieltech"
            alt="Profile"
          />
        </div>
        <div className="time-display">
          {currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
