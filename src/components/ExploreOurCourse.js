import React from 'react';
import './ExploreOurCourse.css';
import { hasCourseAccess } from '../utils/payment';
import FlutterwavePayButton from './FlutterwavePayButton';

// Using the generated images (placeholders for now, will be updated if needed)
import pythonImg from '../assets/python_banner.png';
import mlImg from '../assets/ml_banner.png';
import frontendImg from '../assets/frontend_banner.png';

const courses = [
  {
    id: 1,
    title: 'Python Programming',
    description: 'Master Python from basics to advanced real-world applications.',
    image: pythonImg,
    category: 'Software Development',
    level: 'Beginner to Advanced',
    price: 5000,
  },
  {
    id: 2,
    title: 'Machine Learning',
    description: 'Build intelligent systems and predictive models with Python.',
    image: mlImg,
    category: 'Artificial Intelligence',
    level: 'Intermediate',
    price: 5000,
  },
  {
    id: 3,
    title: 'Frontend Development',
    description: 'Create stunning, responsive web interfaces with modern tools.',
    image: frontendImg,
    category: 'Web Development',
    level: 'Beginner to Pro',
    price: 5000,
  },
];

const ExploreOurCourse = ({ onCourseSelect, onEnrollClick, loggedInUser }) => {
  return (
    <section className="explore-courses" id="explore-courses">
      <div className="section-header">
        <h2 className="section-title">Explore Our Courses</h2>
        <p className="section-subtitle">Empower your future with industry-leading technical skills</p>
      </div>

      <div className="courses-grid-layout">
        {courses.map((course) => {
          const isPurchased = hasCourseAccess(course.id);

          return (
            <div 
              key={course.id} 
              className="course-premium-card"
              onClick={() => onCourseSelect && onCourseSelect(course.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-image-wrapper">
                <img src={course.image} alt={course.title} className="course-card-img" />
                <div className="card-category-tag">{course.category}</div>
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: isPurchased ? '#22c55e' : 'linear-gradient(135deg, #f97316, #ea580c)',
                  color: '#ffffff',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                }}>
                  {isPurchased ? '✓ Unlocked' : `₦${course.price.toLocaleString()}`}
                </div>
              </div>
              
              <div className="card-info-content">
                <div className="card-level-badge">{course.level}</div>
                <h3 className="card-course-title">{course.title}</h3>
                <p className="card-course-desc">{course.description}</p>
                
                <div className="card-footer-actions" style={{ flexWrap: 'wrap', gap: '8px' }}>
                  <button 
                    className="learn-more-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onCourseSelect && onCourseSelect(course.id);
                    }}
                  >
                    Details & Preview
                  </button>
                  {isPurchased ? (
                    <button 
                      className="enroll-btn-premium"
                      style={{ background: '#22c55e' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        onCourseSelect && onCourseSelect(course.id);
                      }}
                    >
                      Start Learning
                    </button>
                  ) : (
                    <FlutterwavePayButton
                      course={course}
                      user={loggedInUser}
                      onSuccess={() => {
                        if (onCourseSelect) onCourseSelect(course.id);
                      }}
                      buttonText={`Pay ₦${course.price.toLocaleString()}`}
                      style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="view-all-container">
        <button className="view-all-courses-btn">
          View All Courses 
          <span className="arrow-icon">→</span>
        </button>
      </div>
    </section>
  );
};

export default ExploreOurCourse;
