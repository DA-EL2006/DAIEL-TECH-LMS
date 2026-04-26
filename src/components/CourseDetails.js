import React, { useState } from 'react';
import { ArrowLeft, Play, Check, ChevronDown, ChevronUp, Trophy, Rocket } from 'lucide-react';
import './CourseDetails.css';
import { coursesData } from '../data/coursesData';
const CourseDetails = ({ courseId, onBack, onEnrollClick, onVideoSelect }) => {
  const [expandedModule, setExpandedModule] = useState(null);
  
  const course = coursesData[courseId];

  if (!course) {
    return (
      <div className="course-details-wrapper">
        <div className="placeholder-container">
          <h2>Course not found</h2>
          <button className="btn-primary" onClick={onBack}>Go Back</button>
        </div>
      </div>
    );
  }

  if (course.comingSoon) {
    return (
      <div className="course-details-wrapper">
        <div className="premium-course-hero">
          <div className="hero-content">
            <button className="back-link" onClick={onBack}>
              <span>←</span> Back to Courses
            </button>
            <h1 className="course-title">{course.title}</h1>
          </div>
        </div>
        <div className="placeholder-container">
          <Rocket className="coming-soon-icon" size={64} />
          <h2>Syllabus Coming Soon</h2>
          <p>We are currently updating the curriculum for this course. Please check back later!</p>
          <button className="btn-primary" onClick={onBack}>Explore Other Courses</button>
        </div>
      </div>
    );
  }

  const toggleModule = (moduleId) => {
    if (expandedModule === moduleId) {
      setExpandedModule(null);
    } else {
      setExpandedModule(moduleId);
    }
  };

  const handleAction = (type, id) => {
    if (type === 'video' && onVideoSelect) {
      onVideoSelect(id);
    } else {
      console.log(`Action triggered: ${type} with id ${id}`);
    }
  };

  return (
    <div className="course-details-wrapper">
      {/* Hero Section */}
      <section className="premium-course-hero">
        <div className="hero-glow-effect"></div>
        <div className="hero-content">
          <button className="back-link" onClick={onBack}>
            <ArrowLeft size={20} />
            Back to Courses
          </button>
          
          <div className="course-badges">
            <span className="badge badge-level">{course.level}</span>
            <span className="badge badge-duration">{course.duration}</span>
          </div>
          
          <h1 className="course-title">{course.title}</h1>
          <p className="course-desc">{course.description}</p>
          
          <div className="hero-actions">
            <button className="btn-enroll-hero" onClick={onEnrollClick}>
              Enroll Now - Start Learning
            </button>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="premium-curriculum-section">
        <div className="curriculum-header">
          <h2>Course Curriculum</h2>
          <p>Master the skills step-by-step with our structured modules</p>
        </div>
        
        <div className="modules-list">
          {course.modules.map((mod, index) => (
            <div 
              key={mod.id} 
              className={`module-container ${expandedModule === mod.id ? 'is-open' : ''}`}
            >
              <div 
                className="module-header-bar" 
                onClick={() => toggleModule(mod.id)}
              >
                <div className="module-header-left">
                  <div className="module-number">{index + 1}</div>
                  <div className="module-title-group">
                    <h3>{mod.title}</h3>
                    <h4>{mod.subtitle}</h4>
                  </div>
                </div>
                <div className="module-header-right">
                  <span className="module-meta">{mod.lessons.length} Lessons</span>
                  <div className="toggle-btn">
                    {expandedModule === mod.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </div>
              </div>
              
              <div className="module-body">
                <div className="lessons-timeline">
                  {mod.lessons.map((lesson, idx) => (
                    <div key={lesson.id} className="timeline-item">
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        
                        {/* Video Element */}
                        <div 
                          className="lesson-video-card"
                          onClick={() => handleAction('video', lesson.id)}
                        >
                          <div className="play-icon-wrapper">
                            <Play size={18} fill="currentColor" />
                          </div>
                          <div className="video-info">
                            <span className="video-label">Video {index + 1}.{idx + 1}</span>
                            <span className="video-title">{lesson.videoTitle}</span>
                          </div>
                        </div>

                        {/* Associated Tasks */}
                        {lesson.tasks && lesson.tasks.length > 0 && (
                          <div className="lesson-tasks-container">
                            <div className="tasks-label">Practice Tasks</div>
                            <ul className="premium-task-list">
                              {lesson.tasks.map((task, tIdx) => (
                                <li key={`${lesson.id}-task-${tIdx}`}>
                                  <button 
                                    className="task-action-link"
                                    onClick={() => handleAction('task', `${lesson.id}-task-${tIdx}`)}
                                  >
                                    <Check className="check-icon" size={16} />
                                    <span className="task-text">{task}</span>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Module Assignment */}
                {mod.assignment && (
                  <div className="premium-assignment-card">
                    <div className="assignment-icon">
                      <Trophy size={32} />
                    </div>
                    <div className="assignment-content">
                      <h4>Module Assignment</h4>
                      <p>{mod.assignment}</p>
                    </div>
                    <button className="btn-start-assignment" onClick={() => handleAction('assignment', mod.id)}>
                      View Details
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
