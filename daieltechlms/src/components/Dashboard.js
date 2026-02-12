import React, { useState, useEffect } from 'react';
import { useCourse } from '../context/CourseContext';
import './Dashboard.css';

const Dashboard = ({ onCourseSelect, onVideoSelect }) => {
  const { courses, updateCourseProgress } = useCourse();
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [trackDetails, setTrackDetails] = useState({});

  // Initialize track details with mock modules
  useEffect(() => {
    const details = {};
    courses.forEach(course => {
      if (!details[course.id]) {
        details[course.id] = {
          ...course,
          modules: [
            { id: 1, title: 'Introduction', progress: Math.random() * 100 },
            { id: 2, title: 'Fundamentals', progress: Math.random() * 100 },
            { id: 3, title: 'Advanced Concepts', progress: Math.random() * 100 },
            { id: 4, title: 'Project Build', progress: Math.random() * 100 },
            { id: 5, title: 'Assessment', progress: Math.random() * 100 },
          ],
        };
      }
    });
    setTrackDetails(details);
  }, [courses]);

  // Calculate overall progress for a course
  const calculateCourseProgress = (courseId) => {
    const track = trackDetails[courseId];
    if (!track || !track.modules.length) return 0;
    const totalProgress = track.modules.reduce((sum, m) => sum + m.progress, 0);
    return Math.round(totalProgress / track.modules.length);
  };

  // Handle course selection
  const handleCourseClick = (courseId) => {
    setSelectedTrack(courseId);
    if (onCourseSelect) {
      onCourseSelect(courseId);
    }
  };

  // Handle module click
  const handleModuleClick = (courseId, moduleId) => {
    if (onVideoSelect) {
      onVideoSelect(courseId, moduleId);
    }
  };

  // Update progress for demo purposes
  const handleProgressUpdate = (courseId) => {
    const newProgress = Math.min(
      100,
      calculateCourseProgress(courseId) + 10
    );
    updateCourseProgress(courseId, newProgress);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Learning Dashboard</h1>
        <p className="subtitle">Master multiple skills through structured learning paths</p>
      </div>

      {selectedTrack ? (
        <div className="track-detail-view">
          <button
            className="back-btn"
            onClick={() => setSelectedTrack(null)}
          >
            ← Back to Dashboard
          </button>

          {trackDetails[selectedTrack] && (
            <div className="track-detail">
              <div className="track-header">
                <div className="track-color-badge" style={{
                  backgroundColor: trackDetails[selectedTrack].color
                }}></div>
                <div>
                  <h2>{trackDetails[selectedTrack].name}</h2>
                  <p>{trackDetails[selectedTrack].description}</p>
                </div>
              </div>

              <div className="overall-progress">
                <span className="progress-label">Overall Progress</span>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar-fill"
                    style={{
                      width: `${calculateCourseProgress(selectedTrack)}%`,
                      backgroundColor: trackDetails[selectedTrack].color,
                    }}
                  ></div>
                </div>
                <span className="progress-percentage">
                  {calculateCourseProgress(selectedTrack)}%
                </span>
              </div>

              <div className="modules-grid">
                <h3>Modules</h3>
                {trackDetails[selectedTrack].modules.map((module) => (
                  <div
                    key={module.id}
                    className="module-card"
                    onClick={() => handleModuleClick(selectedTrack, module.id)}
                  >
                    <div className="module-header">
                      <h4>{module.title}</h4>
                      <span className="module-number">Module {module.id}</span>
                    </div>

                    <div className="module-progress">
                      <div className="progress-bar-small">
                        <div
                          className="progress-bar-fill"
                          style={{
                            width: `${module.progress}%`,
                            backgroundColor: trackDetails[selectedTrack].color,
                          }}
                        ></div>
                      </div>
                      <span className="progress-text">
                        {Math.round(module.progress)}%
                      </span>
                    </div>

                    <button className="module-action-btn">
                      {module.progress === 100 ? '✓ Completed' : 'Continue →'}
                    </button>
                  </div>
                ))}
              </div>

              <button
                className="demo-progress-btn"
                onClick={() => handleProgressUpdate(selectedTrack)}
              >
                📈 Simulate Progress
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="courses-grid">
          {courses.map((course) => (
            <div
              key={course.id}
              className="course-card"
              onClick={() => handleCourseClick(course.id)}
            >
              <div className="card-header" style={{
                backgroundColor: course.color,
              }}>
                <span className="course-icon">📚</span>
              </div>

              <div className="card-body">
                <h3>{course.name}</h3>
                <p className="course-description">{course.description}</p>

                <div className="progress-section">
                  <div className="progress-label-inline">
                    <span>Progress</span>
                    <span className="progress-value">
                      {calculateCourseProgress(course.id)}%
                    </span>
                  </div>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: `${calculateCourseProgress(course.id)}%`,
                        backgroundColor: course.color,
                      }}
                    ></div>
                  </div>
                </div>

                <button className="card-cta">
                  {calculateCourseProgress(course.id) === 100
                    ? '✓ Completed'
                    : 'Start Learning →'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
