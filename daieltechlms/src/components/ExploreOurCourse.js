import React from 'react';
import './ExploreOurCourse.css';

// Using the generated images (placeholders for now, will be updated if needed)
import pythonImg from '../assets/python_banner.png';
import mlImg from '../assets/ml_banner.png';
import frontendImg from '../assets/frontend_banner.png';
import graphicsImg from '../assets/graphics_banner.png';

const courses = [
  {
    id: 1,
    title: 'Python Programming',
    description: 'Master Python from basics to advanced real-world applications.',
    image: pythonImg,
    category: 'Software Development',
    level: 'Beginner to Advanced'
  },
  {
    id: 2,
    title: 'Machine Learning',
    description: 'Build intelligent systems and predictive models with Python.',
    image: mlImg,
    category: 'Artificial Intelligence',
    level: 'Intermediate'
  },
  {
    id: 3,
    title: 'Frontend Development',
    description: 'Create stunning, responsive web interfaces with modern tools.',
    image: frontendImg,
    category: 'Web Development',
    level: 'Beginner to Pro'
  },
  {
    id: 4,
    title: 'Graphics Design',
    description: 'Communicate ideas visually with professional design principles.',
    image: graphicsImg,
    category: 'Creative Arts',
    level: 'Beginner'
  }
];

const ExploreOurCourse = () => {
  return (
    <section className="explore-courses" id="explore-courses">
      <div className="section-header">
        <h2 className="section-title">Explore Our Courses</h2>
        <p className="section-subtitle">Empower your future with industry-leading technical skills</p>
      </div>

      <div className="courses-grid-layout">
        {courses.map((course) => (
          <div key={course.id} className="course-premium-card">
            <div className="card-image-wrapper">
              <img src={course.image} alt={course.title} className="course-card-img" />
              <div className="card-category-tag">{course.category}</div>
            </div>
            
            <div className="card-info-content">
              <div className="card-level-badge">{course.level}</div>
              <h3 className="card-course-title">{course.title}</h3>
              <p className="card-course-desc">{course.description}</p>
              
              <div className="card-footer-actions">
                <button className="learn-more-btn">Learn More</button>
                <button className="enroll-btn-premium">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
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
