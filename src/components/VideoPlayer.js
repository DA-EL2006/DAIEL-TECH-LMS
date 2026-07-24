import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Save,
  Check,
} from "lucide-react";
import { coursesData } from "../data/coursesData";
import "./VideoPlayer.css";

const VideoPlayer = ({ courseId, initialLessonId, onBack }) => {
  const [currentLessonId, setCurrentLessonId] = useState(initialLessonId);
  const [notes, setNotes] = useState("");
  const [saveStatus, setSaveStatus] = useState(""); // '' | 'saving' | 'saved'

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
      const savedTimestamps = localStorage.getItem(
        "daiel_completion_timestamps",
      );
      const timestamps = savedTimestamps ? JSON.parse(savedTimestamps) : {};
      if (isAdding) {
        timestamps[activeLessonId] = new Date().toISOString();
      } else {
        delete timestamps[activeLessonId];
      }
      localStorage.setItem(
        "daiel_completion_timestamps",
        JSON.stringify(timestamps),
      );
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
    if (activeLessonId) {
      const savedNotes = localStorage.getItem(
        `daiel-notes-${courseId}-${activeLessonId}`,
      );
      if (savedNotes) {
        setNotes(savedNotes);
      } else {
        setNotes("");
      }
      setSaveStatus("");
    }
  }, [courseId, activeLessonId]);

  // Auto-save notes logic
  useEffect(() => {
    if (!activeLessonId) return;

    const timeoutId = setTimeout(() => {
      if (notes.trim() !== "") {
        localStorage.setItem(
          `daiel-notes-${courseId}-${activeLessonId}`,
          notes,
        );
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

  const handleNavigate = (newLessonId) => {
    if (newLessonId) {
      setCurrentLessonId(newLessonId);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = activeLesson.url.match(regExp);
    if (match && match[2] && match[2].length === 11) {
      videoEmbedUrl = `https://www.youtube.com/embed/${match[2]}`;
    } else if (activeLesson.url.includes("youtube.com/embed/")) {
      videoEmbedUrl = activeLesson.url;
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
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                className={`nav-btn complete-toggle-btn ${isCompleted ? "completed" : ""}`}
                onClick={handleToggleComplete}
                style={{
                  background: isCompleted
                    ? "var(--color-primary, #0053e4)"
                    : "rgba(255, 255, 255, 0.05)",
                  color: isCompleted ? "#ffffff" : "var(--text-primary)",
                  borderColor: isCompleted
                    ? "var(--color-primary, #0053e4)"
                    : "rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: "700",
                }}
              >
                <CheckCircle size={18} />
                {isCompleted ? "Completed" : "Mark Completed"}
              </button>

              <button
                className="nav-btn"
                onClick={() => handleNavigate(nextLessonId)}
                disabled={!nextLessonId}
              >
                Next Lesson
                <ChevronRight size={20} />
              </button>
            </div>

            {activeLesson.tasks && activeLesson.tasks.length > 0 && (
              <div className="video-summary">
                <h3>
                  <CheckCircle size={20} color="var(--color-byte)" /> Actionable
                  Tasks
                </h3>
                <ul>
                  {activeLesson.tasks.map((task, idx) => (
                    <li key={idx} className="summary-task-item">
                      <Check className="task-icon" size={18} />
                      <span>{task}</span>
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
