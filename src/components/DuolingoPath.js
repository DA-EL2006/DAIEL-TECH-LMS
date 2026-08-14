import React, { useState } from "react";
import { 
  Play, 
  Check, 
  Lock, 
  Trophy, 
  Flame, 
  Zap, 
  X, 
  Code
} from "lucide-react";
import { coursesData } from "../data/coursesData";
import "./DuolingoPath.css";

const DuolingoPath = ({
  selectedCourseId = 1,
  onSelectCourse,
  completedLessons = {},
  toggleLessonComplete,
  onVideoSelect,
  onAssignmentSelect,
  allCourses = []
}) => {
  const activeCourseId = selectedCourseId || 1;
  const [selectedNode, setSelectedNode] = useState(null); // Node popover modal

  const currentCourse = coursesData[activeCourseId] || coursesData[1];
  const courseMeta = allCourses.find((c) => c.id === activeCourseId) || {
    title: currentCourse?.title || "Python Programming",
    category: "Software Development",
    level: "Beginner"
  };

  const modules = currentCourse?.modules || [];
  const completedList = completedLessons[activeCourseId] || [];

  // Calculate statistics
  let totalLessonsCount = 0;
  modules.forEach((mod) => {
    totalLessonsCount += (mod.lessons || []).length;
  });

  const completedCount = completedList.length;
  const progressPercent = totalLessonsCount > 0 ? Math.round((completedCount / totalLessonsCount) * 100) : 0;
  const xpPoints = completedCount * 50;
  const streakDays = completedCount > 0 ? Math.min(completedCount + 2, 7) : 0;
  const trophiesEarned = modules.filter((mod) => {
    const modLessons = mod.lessons || [];
    return modLessons.length > 0 && modLessons.every((l) => completedList.includes(l.id));
  }).length;

  // Horizontal position pattern for winding path (sinusoidal alignment)
  const positionPattern = ["center", "right", "far-right", "right", "center", "left", "far-left", "left"];

  // Build a sequential list of all lessons across all modules for locking
  const allCourseLessons = [];
  modules.forEach((m) => {
    (m.lessons || []).forEach((l) => {
      allCourseLessons.push({ ...l, moduleId: m.id });
    });
  });

  const handleNodeClick = (lesson, mod) => {
    setSelectedNode({
      lesson,
      moduleTitle: mod.title,
      moduleSubtitle: mod.subtitle,
      isCompleted: completedList.includes(lesson.id)
    });
  };

  const handleAssignmentClick = (mod) => {
    if (!mod.assignment) return;
    const assignmentObj = typeof mod.assignment === 'string' 
      ? { title: `${mod.title} Capstone`, objective: mod.assignment, steps: [], hints: [] }
      : mod.assignment;

    setSelectedNode({
      isAssignment: true,
      assignment: {
        ...assignmentObj,
        moduleName: mod.subtitle || mod.title
      }
    });
  };

  return (
    <div className="duo-path-container">
      {/* 1. TOP HEADER & GAMIFICATION STATS BAR */}
      <header className="duo-header dash-glass-panel">
        <div className="duo-course-info">
          <div className="duo-course-badge">{courseMeta.category}</div>
          <h2 className="duo-course-title">{currentCourse?.title}</h2>
        </div>

        <div className="duo-stats-bar">
          <div className="duo-stat-item streak" title="Day Streak">
            <Flame size={20} className="stat-icon flame" />
            <span className="stat-value">{streakDays}</span>
            <span className="stat-label">Days</span>
          </div>

          <div className="duo-stat-item xp" title="Total Experience Points">
            <Zap size={20} className="stat-icon zap" />
            <span className="stat-value">{xpPoints}</span>
            <span className="stat-label">XP</span>
          </div>

          <div className="duo-stat-item trophy" title="Module Trophies Unlocked">
            <Trophy size={20} className="stat-icon trophy-icon" />
            <span className="stat-value">{trophiesEarned} / {modules.length}</span>
            <span className="stat-label">Trophies</span>
          </div>

          <div className="duo-progress-box">
            <div className="duo-progress-text">
              <span>Path Progress</span>
              <strong>{progressPercent}%</strong>
            </div>
            <div className="duo-progress-track">
              <div className="duo-progress-fill" style={{ width: `${progressPercent}%` }}></div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. DUOLINGO WINDING PATH CONTENT */}
      <div className="duo-path-scroll-area">
        {modules.map((mod, modIdx) => {
          const lessons = mod.lessons || [];
          let modCompletedCount = 0;
          lessons.forEach((l) => {
            if (completedList.includes(l.id)) modCompletedCount++;
          });
          const modPercent = lessons.length > 0 ? Math.round((modCompletedCount / lessons.length) * 100) : 0;
          const isModCompleted = modPercent === 100 && lessons.length > 0;

          return (
            <section key={mod.id || modIdx} className="duo-module-section">
              {/* Module Banner / Unit Header */}
              <div className="duo-unit-banner dash-glass-panel">
                <div className="unit-header-content">
                  <span className="unit-number-tag">UNIT {modIdx + 1}</span>
                  <h3 className="unit-title">{mod.title}: {mod.subtitle}</h3>
                  <p className="unit-description">{mod.description || "Master core concepts through interactive video lessons and practical challenges."}</p>
                </div>
                <div className="unit-badge-side">
                  <div className="unit-counter">
                    <strong>{modCompletedCount}</strong> / {lessons.length} Lessons
                  </div>
                  {isModCompleted && (
                    <div className="unit-complete-pill">
                      <Check size={14} /> Completed
                    </div>
                  )}
                </div>
              </div>

              {/* Winding Nodes Path */}
              <div className="duo-nodes-path">
                {lessons.map((lesson, lessonIdx) => {
                  const isCompleted = completedList.includes(lesson.id);
                  const globalLessonIdx = allCourseLessons.findIndex((l) => l.id === lesson.id);
                  const isFirstLesson = globalLessonIdx === 0;
                  const prevLessonId = globalLessonIdx > 0 ? allCourseLessons[globalLessonIdx - 1].id : null;
                  
                  const isUnlocked = isCompleted || isFirstLesson || (prevLessonId && completedList.includes(prevLessonId));
                  const isCurrent = isUnlocked && !isCompleted;

                  const posClass = positionPattern[lessonIdx % positionPattern.length];

                  return (
                    <div key={lesson.id} className={`duo-node-row ${posClass}`}>
                      {/* Floating Start Tooltip for Current Active Lesson */}
                      {isCurrent && (
                        <div className="duo-start-bubble">
                          <span>START</span>
                          <div className="bubble-arrow"></div>
                        </div>
                      )}

                      <button
                        className={`duo-path-node ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''} ${!isUnlocked ? 'locked' : ''}`}
                        onClick={() => handleNodeClick(lesson, mod, !isUnlocked)}
                        title={`${lesson.videoTitle || lesson.title} ${isUnlocked ? '' : '(Locked)'}`}
                      >
                        <div className="node-inner-circle">
                          {isCompleted ? (
                            <Check size={26} className="node-icon check" />
                          ) : isCurrent ? (
                            <Play size={24} className="node-icon play" fill="currentColor" />
                          ) : (
                            <Lock size={20} className="node-icon lock" />
                          )}
                        </div>
                        <span className="node-index-label">{lessonIdx + 1}</span>
                      </button>

                      <div className="node-caption">
                        <span className="node-title">{lesson.videoTitle || lesson.title}</span>
                        {lesson.duration && <span className="node-duration">{lesson.duration}</span>}
                      </div>
                    </div>
                  );
                })}

                {/* Module Capstone / Trophy Node */}
                {mod.assignment && (
                  <div className="duo-node-row center trophy-row">
                    <button
                      className={`duo-path-node trophy-node ${isModCompleted ? 'unlocked' : ''}`}
                      onClick={() => handleAssignmentClick(mod, isModCompleted)}
                      title={`Unit ${modIdx + 1} Capstone Challenge`}
                    >
                      <div className="node-inner-circle">
                        <Trophy size={28} className="node-icon trophy" />
                      </div>
                    </button>
                    <div className="node-caption">
                      <span className="node-title trophy-title">Unit {modIdx + 1} Capstone</span>
                      <span className="node-subtitle">Interactive Project</span>
                    </div>
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* 3. NODE POPOVER MODAL */}
      {selectedNode && (
        <div className="duo-modal-overlay" onClick={() => setSelectedNode(null)}>
          <div className="duo-modal-card dash-glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="duo-modal-close" onClick={() => setSelectedNode(null)}>
              <X size={18} />
            </button>

            {selectedNode.isAssignment ? (
              <div className="modal-node-body">
                <div className="modal-header-icon trophy-theme">
                  <Trophy size={36} />
                </div>
                <h3 className="modal-node-title">{selectedNode.assignment.title || "Module Capstone Assignment"}</h3>
                <p className="modal-node-sub">{selectedNode.assignment.moduleName}</p>
                <div className="modal-description-box">
                  <strong>Objective:</strong>
                  <p>{selectedNode.assignment.objective || selectedNode.assignment.description}</p>
                </div>

                {Number(activeCourseId) === 2 && (
                  <div className="ml-task-folder-notice" style={{ background: "rgba(2, 132, 199, 0.12)", border: "2px solid #0284c7", padding: "14px 18px", borderRadius: "10px", color: "#0284c7", fontSize: "0.95rem", fontWeight: 800, lineHeight: 1.5, margin: "14px 0", textAlign: "left" }}>
                    📌 <strong>Machine Learning Task Guideline:</strong> Create a dedicated folder for all tasks in this module and push that folder to your GitHub repository alongside your module project submission.
                  </div>
                )}

                <div className="modal-actions" style={{ flexDirection: "column", gap: "10px", width: "100%" }}>
                  <button
                    className="duo-btn-primary"
                    onClick={() => {
                      if (onAssignmentSelect) onAssignmentSelect(selectedNode.assignment);
                      setSelectedNode(null);
                    }}
                  >
                    <Code size={16} /> Launch in Sandbox IDE
                  </button>
                </div>
              </div>
            ) : (
              <div className="modal-node-body">
                <div className={`modal-header-icon ${selectedNode.isCompleted ? 'completed-theme' : 'play-theme'}`}>
                  {selectedNode.isCompleted ? <Check size={36} /> : <Play size={36} fill="currentColor" />}
                </div>
                <h3 className="modal-node-title">{selectedNode.lesson.videoTitle || selectedNode.lesson.title}</h3>
                <p className="modal-node-sub">{selectedNode.moduleTitle} • {selectedNode.lesson.duration || "Video Lesson"}</p>

                <div className="modal-actions">
                  <button
                    className="duo-btn-primary"
                    onClick={() => {
                      if (onVideoSelect) onVideoSelect(activeCourseId, selectedNode.lesson.id);
                      setSelectedNode(null);
                    }}
                  >
                    <Play size={16} fill="currentColor" /> Watch Video Lesson
                  </button>

                  <button
                    className={`duo-btn-secondary ${selectedNode.isCompleted ? 'active' : ''}`}
                    onClick={() => {
                      if (toggleLessonComplete) toggleLessonComplete(activeCourseId, selectedNode.lesson.id);
                      window.dispatchEvent(new Event("daiel_lesson_completed"));
                      setSelectedNode((prev) => ({ ...prev, isCompleted: !prev.isCompleted }));
                    }}
                  >
                    {selectedNode.isCompleted ? (
                      <>
                        <Check size={16} /> Completed
                      </>
                    ) : (
                      "Mark as Complete"
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default DuolingoPath;
