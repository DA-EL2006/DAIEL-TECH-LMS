import React, { useState } from "react";
import { X, BookOpen, Award, CheckSquare, Layers, Sparkles, FolderGit2 } from "lucide-react";
import { coursesData } from "../data/coursesData";
import "./StudentProjectsModal.css";

const StudentProjectsModal = ({ isOpen, onClose }) => {
  const [activeCourseId, setActiveCourseId] = useState(1); // 1 | 2 | 3

  if (!isOpen) return null;

  const currentCourse = coursesData[activeCourseId];

  return (
    <div className="projects-modal-overlay" onClick={onClose}>
      <div className="projects-modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="projects-modal-header">
          <div className="projects-header-title font-mono">
            <FolderGit2 size={22} className="header-icon" />
            DAIEL TECH Student Projects & Assignments Curriculum
          </div>
          <button className="projects-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Course Tabs */}
        <div className="projects-course-tabs">
          {Object.values(coursesData).map((course) => (
            <button
              key={course.id}
              className={`course-tab-btn ${activeCourseId === course.id ? "active" : ""}`}
              onClick={() => setActiveCourseId(course.id)}
            >
              <BookOpen size={16} />
              {course.title}
            </button>
          ))}
        </div>

        {/* Content Container */}
        <div className="projects-content-body">
          <div className="course-summary-banner">
            <h2>{currentCourse?.title}</h2>
            <p>{currentCourse?.description}</p>
            <div className="course-meta-tags font-mono">
              <span>{currentCourse?.duration}</span>
              <span>Level: {currentCourse?.level}</span>
            </div>
          </div>

          {/* Modules List */}
          <div className="modules-projects-list">
            {currentCourse?.modules?.map((mod, idx) => {
              const isCapstone = mod.projects || mod.title?.toLowerCase().includes("capstone") || mod.subtitle?.toLowerCase().includes("capstone");

              return (
                <div
                  key={mod.id || idx}
                  className={`module-project-card ${isCapstone ? "capstone-card" : ""}`}
                >
                  <div className="card-badge-header">
                    <span className="mod-number-pill">{mod.title}</span>
                    <h3 className="mod-subtitle">{mod.subtitle}</h3>
                    {isCapstone && <span className="trophy-badge"><Award size={14} /> Capstone Project</span>}
                  </div>

                  {mod.description && <p className="mod-description">{mod.description}</p>}

                  {/* Module Assignment */}
                  {mod.assignment && (
                    <div className="assignment-box">
                      <div className="box-header font-mono">
                        <Layers size={16} /> Module Assignment / Task
                      </div>
                      <div className="assignment-text">
                        {typeof mod.assignment === "string" ? (
                          mod.assignment
                        ) : (
                          <>
                            <strong>{mod.assignment.title}</strong>
                            <p>{mod.assignment.objective}</p>
                            {mod.assignment.steps && (
                              <ul className="assignment-steps">
                                {mod.assignment.steps.map((step, sIdx) => (
                                  <li key={sIdx}>{step}</li>
                                ))}
                              </ul>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Capstone Project Options (for Machine Learning Capstone) */}
                  {mod.projects && (
                    <div className="capstone-tracks-grid">
                      <h4 className="tracks-heading font-mono">
                        <Sparkles size={16} /> Selectable Capstone Tracks
                      </h4>
                      {mod.projects.map((proj) => (
                        <div key={proj.id} className="capstone-track-card">
                          <h5>{proj.title}</h5>
                          <p>{proj.description}</p>
                          <div className="track-reqs">
                            <strong>Core Requirements:</strong>
                            <ul>
                              {proj.core_requirements?.map((req, rIdx) => (
                                <li key={rIdx}>{req}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Video Tasks List */}
                  {mod.lessons && mod.lessons.some((l) => l.tasks && l.tasks.length > 0) && (
                    <div className="video-tasks-box">
                      <div className="box-header font-mono">
                        <CheckSquare size={16} /> Actionable Video Hands-on Tasks
                      </div>
                      <div className="tasks-scroll-list">
                        {mod.lessons.map((lesson) => (
                          lesson.tasks && (
                            <div key={lesson.id} className="lesson-tasks-group">
                              <span className="lesson-title font-mono">🎬 {lesson.videoTitle}</span>
                              <ul>
                                {lesson.tasks.flat().map((task, tIdx) => (
                                  <li key={tIdx}>{task}</li>
                                ))}
                              </ul>
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProjectsModal;
