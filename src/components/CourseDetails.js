import React, { useState } from 'react';
import { ArrowLeft, Play, ChevronDown, ChevronUp, Trophy, Rocket, CheckCircle, Lock, ShieldCheck } from 'lucide-react';
import './CourseDetails.css';
import { coursesData } from '../data/coursesData';
import { hasCourseAccess, isLessonFreePreview } from '../utils/payment';
import FlutterwavePayButton from './FlutterwavePayButton';

const CourseDetails = ({ courseId, onBack, onEnrollClick, onVideoSelect, onAssignmentSelect, onProjectSelect, loggedInUser }) => {
  const [expandedModule, setExpandedModule] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const course = coursesData[courseId];
  const isPurchased = hasCourseAccess(courseId);

  const completedLessons = React.useMemo(() => {
    try {
      const saved = localStorage.getItem("daiel_completed_lessons");
      const parsed = saved ? JSON.parse(saved) : {};
      return parsed[courseId] || [];
    } catch (e) {
      return [];
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, refreshKey]);

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

  const handleAction = (type, data, isAllowed) => {
    if (!isAllowed) {
      alert("This content is locked. Please click 'Pay to Unlock Full Course' to get instant access via Flutterwave.");
      return;
    }

    if (type === 'video' && onVideoSelect) {
      onVideoSelect(data);
    } else if (type === 'assignment' && onAssignmentSelect) {
      onAssignmentSelect(data, course.title);
    } else if (type === 'project' && onProjectSelect) {
      onProjectSelect(data, course.title);
    } else {
      console.log(`Action triggered: ${type}`);
    }
  };

  const handlePaymentSuccess = (response) => {
    setRefreshKey(prev => prev + 1);
    alert(`🎉 Payment Successful! Reference: ${response.tx_ref}. Full access to ${course.title} has been unlocked!`);
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
            {isPurchased ? (
              <span className="badge" style={{ background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', border: '1px solid rgba(34, 197, 94, 0.4)' }}>
                <ShieldCheck size={14} style={{ display: 'inline', marginRight: 4 }} /> Full Access Unlocked
              </span>
            ) : (
              <span className="badge" style={{ background: 'rgba(249, 115, 22, 0.2)', color: '#fb923c', border: '1px solid rgba(249, 115, 22, 0.4)' }}>
                Lesson 1 Free Preview Available
              </span>
            )}
          </div>
          
          <h1 className="course-title">{course.title}</h1>
          <p className="course-desc">{course.description}</p>
          
          <div className="hero-actions" style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
            {isPurchased ? (
              <button 
                className="btn-enroll-hero" 
                onClick={() => {
                  const firstLesson = course.modules[0]?.lessons[0]?.id;
                  if (firstLesson) handleAction('video', firstLesson, true);
                }}
              >
                Continue Learning
              </button>
            ) : (
              <>
                <FlutterwavePayButton
                  course={course}
                  user={loggedInUser}
                  onSuccess={handlePaymentSuccess}
                  buttonText={`Pay ₦${(course.price || 5000).toLocaleString()} to Unlock Full Course`}
                />
                <button 
                  className="btn-enroll-hero" 
                  style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}
                  onClick={() => {
                    const firstLesson = course.modules[0]?.lessons[0]?.id;
                    if (firstLesson) handleAction('video', firstLesson, true);
                  }}
                >
                  Watch Free Preview (Lesson 1)
                </button>
              </>
            )}
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
          {course.modules.map((mod, moduleIndex) => (
            <div 
              key={mod.id} 
              className={`module-container ${expandedModule === mod.id ? 'is-open' : ''}`}
            >
              <div 
                className="module-header-bar" 
                onClick={() => toggleModule(mod.id)}
              >
                <div className="module-header-left">
                  <div className="module-number">{moduleIndex + 1}</div>
                  <div className="module-title-group">
                    <h3>{mod.title}</h3>
                    <h4>{mod.subtitle}</h4>
                  </div>
                </div>
                <div className="module-header-right">
                  <span className="module-meta">
                    {mod.lessons && mod.lessons.length > 0 ? `${mod.lessons.length} Lessons` : mod.projects ? `${mod.projects.length} Projects` : '0 Lessons'}
                  </span>
                  <div className="toggle-btn">
                    {expandedModule === mod.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </div>
              </div>
              
              <div className="module-body">
                {mod.lessons && mod.lessons.length > 0 && (
                  <div className="lessons-timeline">
                    {mod.lessons.map((lesson, lessonIndex) => {
                      const isFreePreview = isLessonFreePreview(course.id, lesson.id, moduleIndex, lessonIndex);
                      const isAllowed = isPurchased || isFreePreview;

                      return (
                        <div key={lesson.id} className="timeline-item">
                          <div className="timeline-marker"></div>
                          <div className="timeline-content">
                            
                            {/* Video Element */}
                            <div 
                              className="lesson-video-card"
                              onClick={() => handleAction('video', lesson.id, isAllowed)}
                              style={{ opacity: isAllowed ? 1 : 0.75, cursor: 'pointer' }}
                            >
                              <div className="play-icon-wrapper" style={{
                                background: completedLessons.includes(lesson.id) ? 'rgba(0, 83, 228, 0.15)' : isAllowed ? 'rgba(255, 255, 255, 0.05)' : 'rgba(239, 68, 68, 0.1)',
                                color: completedLessons.includes(lesson.id) ? 'var(--color-primary, #0053e4)' : isAllowed ? 'var(--text-primary)' : '#ef4444'
                              }}>
                                {completedLessons.includes(lesson.id) ? (
                                  <CheckCircle size={18} fill="none" />
                                ) : isAllowed ? (
                                  <Play size={18} fill="currentColor" />
                                ) : (
                                  <Lock size={18} />
                                )}
                              </div>
                              <div className="video-info">
                                <span className="video-label" style={{
                                  color: completedLessons.includes(lesson.id) ? 'var(--color-primary, #0053e4)' : 'var(--text-secondary)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '8px'
                                }}>
                                  Video {moduleIndex + 1}.{lessonIndex + 1} {completedLessons.includes(lesson.id) && '(Completed)'}
                                  {isFreePreview && !isPurchased && (
                                    <span style={{ background: '#22c55e', color: '#fff', fontSize: '0.65rem', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>
                                      FREE PREVIEW
                                    </span>
                                  )}
                                  {!isAllowed && (
                                    <span style={{ background: '#ef4444', color: '#fff', fontSize: '0.65rem', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }}>
                                      LOCKED (PAY TO UNLOCK)
                                    </span>
                                  )}
                                </span>
                                <span className="video-title">{lesson.videoTitle}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Capstone Projects Section */}
                {mod.projects && mod.projects.length > 0 && (
                  <div className="projects-list" style={{ padding: '16px 30px 30px 30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {mod.projects.map((project) => (
                      <div key={project.id} className="premium-project-card" style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '12px',
                        padding: '20px',
                        position: 'relative'
                      }}>
                        <h4 style={{ color: 'var(--color-byte)', fontSize: '1.2rem', marginBottom: '10px', marginTop: 0 }}>{project.title}</h4>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '0.95rem', lineHeight: '1.5' }}>{project.description}</p>
                        
                        <div className="project-requirements" style={{ marginBottom: '16px' }}>
                          <h5 style={{ color: 'var(--text-primary)', marginBottom: '8px', fontSize: '0.95rem', fontWeight: 600 }}>Core Requirements</h5>
                          <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            {project.core_requirements.map((req, rIdx) => (
                              <li key={rIdx}>{req}</li>
                            ))}
                          </ul>
                        </div>

                        {project.architectural_concept_map && (
                          <div className="project-concept-map" style={{
                            background: 'rgba(0, 0, 0, 0.2)',
                            padding: '12px 16px',
                            borderRadius: '8px',
                            fontFamily: 'monospace',
                            fontSize: '0.85rem',
                            color: '#34d399',
                            borderLeft: '3px solid #34d399',
                            marginBottom: '16px',
                            overflowX: 'auto',
                            whiteSpace: 'pre-wrap'
                          }}>
                            {project.architectural_concept_map.execution_flowchart ? (
                              <div>
                                <div style={{ fontWeight: 'bold', marginBottom: '4px', color: 'var(--text-primary)' }}>Execution Flowchart:</div>
                                {project.architectural_concept_map.execution_flowchart}
                              </div>
                            ) : (
                              <div>
                                <div style={{ fontWeight: 'bold', marginBottom: '4px', color: 'var(--text-primary)' }}>Specifications:</div>
                                {project.architectural_concept_map.specifications.map((spec, sIdx) => (
                                  <div key={sIdx} style={{ margin: '4px 0' }}>• {spec}</div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}

                        <button 
                          className="btn-start-assignment" 
                          onClick={() => handleAction('project', { ...project, moduleName: mod.subtitle })}
                          style={{ marginTop: '10px' }}
                        >
                          Start in Sandbox
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Module Assignment */}
                {mod.assignment && (
                  <div className="premium-assignment-card">
                    <div className="assignment-icon">
                      <Trophy size={32} />
                    </div>
                    <div className="assignment-content">
                      <h4>Module Assignment: {typeof mod.assignment === 'object' ? mod.assignment.title : ''}</h4>
                      <p>{typeof mod.assignment === 'object' ? mod.assignment.objective : mod.assignment}</p>
                    </div>
                    <button className="btn-start-assignment" onClick={() => handleAction('assignment', { ...mod.assignment, moduleName: mod.subtitle })}>
                      Start Assignment
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
