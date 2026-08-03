import React, { useState, useEffect } from 'react';
import './CoursesWeOffer.css';

const coursesData = [
  {
    title: "Python Programming",
    description: "Our Python Programming course is designed to take learners from the basics to practical problem-solving. Students learn how to write clean, efficient code, work with data, automate tasks, and build real-world applications. This course lays a strong foundation for careers in software development, data science, automation, and artificial intelligence."
  },
  {
    title: "Machine Learning",
    description: "The Machine Learning track introduces learners to the core concepts behind intelligent systems. Using Python, students learn how to analyze data, build predictive models, and train machines to make decisions. Emphasis is placed on hands-on projects, real-world datasets, and understanding how machine learning is applied across industries."
  },
  /*
  {
    title: "Graphics Design (Pixelab)",
    description: "Master the art of mobile graphics design using Pixelab. This course is perfect for students who want to create stunning visuals, logos, and flyers directly on their mobile devices. Learn the fundamentals of design, color theory, and typography, and how to apply them to create professional-grade graphics on the go."
  },
  {
    title: "Adobe Photoshop or Illustrator",
    description: "Our professional Graphics Design course equips learners with the creative and technical skills needed to communicate ideas visually using industry-standard tools like Adobe Photoshop and Illustrator. Students learn advanced design principles, branding, and how to create professional designs for print and digital media. (PC required)"
  },
  */
  {
    title: "Frontend Development",
    description: "The Frontend Development track focuses on building beautiful, responsive, and user-friendly websites. Learners are trained in HTML, CSS, and JavaScript, and taught how to translate designs into functional web interfaces. The course emphasizes best practices, real projects, and preparing students for real-world web development roles."
  }
];

const CoursesWeOffer = ({ onSignupClick }) => {
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  
  // We need to handle the typing logic carefully to allow switching courses
  useEffect(() => {
    let timeoutId;
    let charIndex = 0;
    const currentCourse = coursesData[currentCourseIndex];
    const fullText = currentCourse.description;
    
    // Clear text when course changes (though we do this in the cleanup/transition logic usually)
    setDisplayedText(''); 

    const typeText = () => {
      if (charIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, charIndex));
        charIndex++;
        // Typing speed calculated so total typing time is between 800ms and 1000ms (1 sec)
        const targetDuration = 800 + Math.random() * 200;
        const speed = targetDuration / fullText.length;
        timeoutId = setTimeout(typeText, speed);
      } else {
        // Finished typing one course. Wait 6 seconds before moving to next.
        timeoutId = setTimeout(() => {
          setCurrentCourseIndex((prevIndex) => (prevIndex + 1) % coursesData.length);
        }, 6000); // 6 second pause before switching
      }
    };

    // Start typing
    timeoutId = setTimeout(typeText, 300);

    return () => clearTimeout(timeoutId);
  }, [currentCourseIndex]); // Re-run when index changes

  const currentCourse = coursesData[currentCourseIndex];

  return (
    <div className="courses-container">
      <h3 className="courses-header">Courses we offer</h3>
      
      <div className="courses-content">
        <div className="course-item active">
            {/* 
              We can animate the title appearance too, 
              but for now let's just switch it instantly. 
            */}
            <h4>{currentCourse.title}</h4>
            <p>
              {displayedText}
              <span className="cursor">&nbsp;</span>
            </p>
        </div>
      </div>
    </div>
  );
};

export default CoursesWeOffer;
