import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Save,
  CheckSquare,
  Square,
  Lock,
} from "lucide-react";
import { coursesData } from "../data/coursesData";
import "./VideoPlayer.css";

const VideoPlayer = ({ courseId, initialLessonId, onBack }) => {
  const [currentLessonId, setCurrentLessonId] = useState(initialLessonId);
  const [notes, setNotes] = useState("");
  const [saveStatus, setSaveStatus] = useState(""); // '' | 'saving' | 'saved'
  const [watchProgress, setWatchProgress] = useState(0); // 0 to 100%
  const [hasWatched75, setHasWatched75] = useState(false);
  const [checkedTasks, setCheckedTasks] = useState({});

  const course = coursesData[courseId];

  // Flatten modules to get a sequential list of all lessons
  const allLessons = [];
  if (course && course.modules) {
    course.modules.forEach((mod) => {
      mod.lessons.forEach((lesson) => {
        allLessons.push({
          ...lesson,
          moduleTitle: mod.title,
          moduleSubtitle: mod.subtitle,
        });
      });
    });
  }

  const currentIndex = allLessons.findIndex((l) => l.id === currentLessonId);

  // Fallback if lesson not found
  const activeLesson =
    currentIndex !== -1 ? allLessons[currentIndex] : allLessons[0];
  const activeLessonId = activeLesson ? activeLesson.id : null;

  const prevLessonId =
    currentIndex > 0 ? allLessons[currentIndex - 1].id : null;
  const nextLessonId =
    currentIndex < allLessons.length - 1
      ? allLessons[currentIndex + 1].id
      : null;

  const [completedList, setCompletedList] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("daiel_completed_lessons");
      const parsed = saved ? JSON.parse(saved) : {};
      setCompletedList(parsed[courseId] || []);
    } catch (e) {
      setCompletedList([]);
    }
  }, [courseId, activeLessonId]);

  useEffect(() => {
    if (activeLessonId) {
      localStorage.setItem(`daiel_last_watched_${courseId}`, activeLessonId);
    }
  }, [courseId, activeLessonId]);

  const isCompleted = completedList.includes(activeLessonId);

  // Load 75% watched state & task checkbox state
  useEffect(() => {
    if (!activeLessonId) return;

    const wasWatched = localStorage.getItem(`daiel_watched75_${courseId}_${activeLessonId}`);
    const isAlreadyCompleted = completedList.includes(activeLessonId);
    if (wasWatched === "true" || isAlreadyCompleted) {
      setHasWatched75(true);
      setWatchProgress(100);
    } else {
      setHasWatched75(false);
      setWatchProgress(0);
    }

    try {
      const savedTasks = localStorage.getItem(`daiel_tasks_${courseId}_${activeLessonId}`);
      setCheckedTasks(savedTasks ? JSON.parse(savedTasks) : {});
    } catch (e) {
      setCheckedTasks({});
    }
  }, [courseId, activeLessonId, completedList]);

  // Parse lesson duration string to seconds
  const getDurationInSeconds = (durStr) => {
    if (!durStr) return 300;
    const parts = durStr.split(":").map(Number);
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    return 300;
  };

  // Video Watch Timer Progress tracking (reaches 75% threshold)
  useEffect(() => {
    if (!activeLessonId || hasWatched75 || isCompleted) return;

    const totalSeconds = getDurationInSeconds(activeLesson?.duration);
    let elapsedSeconds = Math.round((watchProgress / 100) * totalSeconds);

    const interval = setInterval(() => {
      elapsedSeconds += 1;
      const pct = Math.min(Math.round((elapsedSeconds / totalSeconds) * 100), 100);

      setWatchProgress((prev) => {
        const nextPct = Math.max(prev, pct);
        if (nextPct >= 75) {
          setHasWatched75(true);
          localStorage.setItem(`daiel_watched75_${courseId}_${activeLessonId}`, "true");
        }
        return nextPct;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [activeLessonId, activeLesson, hasWatched75, isCompleted, courseId, watchProgress]);

  const handleToggleComplete = () => {
    try {
      const saved = localStorage.getItem("daiel_completed_lessons");
      const parsed = saved ? JSON.parse(saved) : {};
      const list = parsed[courseId] ? [...parsed[courseId]] : [];

      const index = list.indexOf(activeLessonId);
      let isAdding = false;
      if (index > -1) {
        list.splice(index, 1);
      } else {
        list.push(activeLessonId);
        isAdding = true;
      }

      parsed[courseId] = list;
      localStorage.setItem("daiel_completed_lessons", JSON.stringify(parsed));
      setCompletedList(list);

      // Update completion timestamps for stats
      const savedTimestamps = localStorage.getItem("daiel_completion_timestamps");
      const timestamps = savedTimestamps ? JSON.parse(savedTimestamps) : {};
      if (isAdding) {
        timestamps[activeLessonId] = new Date().toISOString();
      } else {
        delete timestamps[activeLessonId];
      }
      localStorage.setItem("daiel_completion_timestamps", JSON.stringify(timestamps));
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();
    if (!isCompleted) {
      handleToggleComplete();
    }
    alert("Task submitted successfully! Lesson marked as completed.");
  };

  // Load notes when lesson changes
  useEffect(() => {
    const savedNotes = localStorage.getItem(`daiel-notes-${courseId}-${activeLessonId}`);
    if (savedNotes) {
      setNotes(savedNotes);
    } else {
      setNotes("");
    }
    setSaveStatus("");
  }, [courseId, activeLessonId]);

  // Debounced Auto-Save Notes Effect
  useEffect(() => {
    if (!activeLessonId) return;
    const timeoutId = setTimeout(() => {
      if (notes.trim() !== "") {
        localStorage.setItem(`daiel-notes-${courseId}-${activeLessonId}`, notes);
        setSaveStatus("saved");
        setTimeout(() => setSaveStatus(""), 2000); // Clear status after 2 seconds
      } else {
        localStorage.removeItem(`daiel-notes-${courseId}-${activeLessonId}`);
      }
    }, 1000); // Save 1s after last keystroke

    return () => clearTimeout(timeoutId);
  }, [notes, courseId, activeLessonId]);

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
    setSaveStatus("saving");
  };

  const isNextLocked = false;

  const handleNavigate = (newLessonId) => {
    if (!newLessonId) return;
    setCurrentLessonId(newLessonId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTaskCheck = (idx) => {
    const updated = { ...checkedTasks, [idx]: !checkedTasks[idx] };
    setCheckedTasks(updated);
    localStorage.setItem(
      `daiel_tasks_${courseId}_${activeLessonId}`,
      JSON.stringify(updated)
    );
  };

  const rawTasks = activeLesson?.tasks || [];
  const formattedTasks = rawTasks.flatMap((t) => (Array.isArray(t) ? t : [t]));

  if (!course || !activeLesson) {
    return (
      <div className="video-player-wrapper">
        <div className="placeholder-container">
          <h2>Content Not Found</h2>
          <button className="btn-primary" onClick={onBack}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  let videoEmbedUrl = "https://www.youtube.com/embed/zJSY8tbf_ys";

  if (activeLesson && activeLesson.url) {
    let raw = activeLesson.url.trim();

    // 1. If raw is a full <iframe> snippet, extract the src attribute
    if (raw.includes("<iframe")) {
      const srcMatch = raw.match(/src=["']([^"']+)["']/i);
      if (srcMatch && srcMatch[1]) {
        raw = srcMatch[1];
      }
    }

    // 2. If raw is already an embed URL (e.g. https://www.youtube.com/embed/Y1BlT4_c_SU?si=...)
    if (raw.includes("youtube.com/embed/") || raw.includes("youtube-nocookie.com/embed/")) {
      videoEmbedUrl = raw;
    } else {
      // 3. Fallback: Parse video ID from watch or short URL
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = raw.match(regExp);
      if (match && match[2] && match[2].length === 11) {
        videoEmbedUrl = `https://www.youtube.com/embed/${match[2]}`;
      } else {
        videoEmbedUrl = raw;
      }
    }
  }

  return (
    <div className="video-player-wrapper">
      <div className="video-header-nav">
        <button className="back-to-course-btn" onClick={onBack}>
          <ArrowLeft size={20} />
          Back to {course.title}
        </button>
        <div className="course-breadcrumbs">
          <span>{course.title}</span>
          <span className="breadcrumb-separator">/</span>
          <span>{activeLesson.moduleTitle}</span>
          <span className="breadcrumb-separator">/</span>
          <span style={{ color: "var(--text-primary)" }}>
            Lesson {currentIndex + 1}
          </span>
        </div>
      </div>

      <div className="video-layout-grid">
        {/* Main Video & Info Column */}
        <div className="video-main-content">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={videoEmbedUrl}
              title={activeLesson.videoTitle || "YouTube video player"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-info-card">
            <div className="video-title-row">
              <div>
                <h1>{activeLesson.videoTitle}</h1>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    marginTop: "8px",
                    fontSize: "1.05rem",
                  }}
                >
                  {activeLesson.moduleTitle}: {activeLesson.moduleSubtitle}
                </p>
              </div>
              <div className="video-module-tag">
                Lesson {currentIndex + 1} of {allLessons.length}
              </div>
            </div>

            {/* 75% WATCH REQUIREMENT PROGRESS BAR */}
            <div className="watch-progress-box">
              <div className="watch-progress-info">
                <span className="watch-label">Video Watch Requirement (75% Minimum):</span>
                <span className={`watch-badge ${hasWatched75 || isCompleted ? "unlocked" : "locked"}`}>
                  {hasWatched75 || isCompleted ? (
                    <>🎉 75% Threshold Unlocked</>
                  ) : (
                    <>🔒 {watchProgress}% / 75% Watched</>
                  )}
                </span>
              </div>
              <div className="watch-bar-track">
                <div
                  className={`watch-bar-fill ${hasWatched75 || isCompleted ? "unlocked" : ""}`}
                  style={{ width: `${Math.min(hasWatched75 || isCompleted ? 100 : watchProgress, 100)}%` }}
                />
                <div className="watch-threshold-marker" style={{ left: "75%" }} title="75% Requirement Threshold" />
              </div>
            </div>

            <div className="video-controls">
              <button
                className="nav-btn"
                onClick={() => handleNavigate(prevLessonId)}
                disabled={!prevLessonId}
              >
                <ChevronLeft size={20} />
                Previous Lesson
              </button>

              <button
                className={`nav-btn complete-toggle-btn ${isCompleted ? "completed" : ""} ${!hasWatched75 && !isCompleted ? "disabled" : ""}`}
                onClick={handleToggleComplete}
                style={{
                  background: isCompleted
                    ? "var(--color-primary, #0053e4)"
                    : hasWatched75
                    ? "rgba(0, 242, 254, 0.15)"
                    : "rgba(255, 255, 255, 0.04)",
                  color: isCompleted ? "#ffffff" : hasWatched75 ? "#00f2fe" : "var(--text-secondary)",
                  borderColor: isCompleted
                    ? "var(--color-primary, #0053e4)"
                    : hasWatched75
                    ? "#00f2fe"
                    : "rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: "700",
                  opacity: !hasWatched75 && !isCompleted ? 0.6 : 1,
                  cursor: !hasWatched75 && !isCompleted ? "not-allowed" : "pointer"
                }}
                title={!hasWatched75 && !isCompleted ? "Watch at least 75% of the video to unlock completion" : "Mark as completed"}
              >
                {!hasWatched75 && !isCompleted ? <Lock size={16} /> : <CheckCircle size={18} />}
                {isCompleted ? "Completed" : hasWatched75 ? "Mark Completed" : `Mark Completed (${watchProgress}%)`}
              </button>

              <button
                className={`nav-btn ${isNextLocked ? "locked" : ""}`}
                onClick={() => handleNavigate(nextLessonId)}
                disabled={!nextLessonId}
                title={isNextLocked ? "Complete current lesson to unlock next video" : "Next Lesson"}
              >
                Next Lesson
                {isNextLocked ? <Lock size={16} style={{ marginLeft: "6px" }} /> : <ChevronRight size={20} />}
              </button>
            </div>

            {formattedTasks.length > 0 && (
              <div className="video-summary">
                <h3>
                  <CheckCircle size={20} color="var(--color-byte)" /> Compulsory Video Tasks
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginBottom: "14px" }}>
                  Complete all tasks below as you follow along with the lesson:
                </p>
                <ul className="compulsory-task-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {formattedTasks.map((task, idx) => (
                    <li
                      key={idx}
                      className={`summary-task-item ${checkedTasks[idx] ? "completed" : ""}`}
                      onClick={() => toggleTaskCheck(idx)}
                      style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        padding: "12px 14px",
                        borderRadius: "10px",
                        background: checkedTasks[idx] ? "rgba(0, 242, 254, 0.06)" : "rgba(255, 255, 255, 0.03)",
                        border: `1px solid ${checkedTasks[idx] ? "rgba(0, 242, 254, 0.2)" : "rgba(255, 255, 255, 0.06)"}`,
                        marginBottom: "10px",
                        transition: "all 0.2s ease"
                      }}
                    >
                      <button className="task-checkbox-btn" style={{ background: "none", border: "none", cursor: "pointer", padding: 0, marginTop: "2px" }}>
                        {checkedTasks[idx] ? (
                          <CheckSquare size={18} color="#00f2fe" />
                        ) : (
                          <Square size={18} color="var(--text-secondary)" />
                        )}
                      </button>
                      <span className="task-text" style={{ textDecoration: checkedTasks[idx] ? "line-through" : "none", opacity: checkedTasks[idx] ? 0.75 : 1, lineHeight: "1.5", fontSize: "0.95rem" }}>
                        {task}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="task-submission-section">
                  <p className="submission-note">
                    Ensure your code works before submitting here 😂
                  </p>

                  <div className="feedback-input-group">
                    <label htmlFor="task-feedback" className="feedback-label">
                      Feedback (Optional)
                    </label>
                    <textarea
                      id="task-feedback"
                      placeholder="Any thoughts on this task or video? Did you find it easy or difficult?"
                      className="feedback-textarea"
                      rows="2"
                    ></textarea>
                  </div>

                  <div className="submission-input-group">
                    <input
                      type="url"
                      placeholder="Paste your GitHub repository or Gist link here..."
                      className="github-link-input"
                    />
                    <button
                      className="submit-link-btn"
                      onClick={handleSubmitTask}
                    >
                      Submit Task
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Notes Column */}
        <div className="video-sidebar">
          <div className="notes-card">
            <div className="notes-header">
              <h3>Personal Notes</h3>
              <div
                className={`save-status ${saveStatus === "saved" ? "saved" : ""}`}
              >
                {saveStatus === "saving" && "Saving..."}
                {saveStatus === "saved" && (
                  <>
                    <Save size={14} /> Saved locally
                  </>
                )}
              </div>
            </div>
            <textarea
              className="notes-textarea"
              placeholder="Jot down your key learnings, ideas, or code snippets here... (Notes are saved automatically to your browser)"
              value={notes}
              onChange={handleNotesChange}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
