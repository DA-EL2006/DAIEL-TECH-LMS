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
  {
    title: "Graphics Design",
    description: "Our Graphics Design course equips learners with the creative and technical skills needed to communicate ideas visually. Students learn design principles, branding, and how to create professional designs using modern tools. By the end of the course, learners can confidently design logos, flyers, social media content, and brand assets for clients and businesses."
  },
  {
    title: "Frontend Development",
    description: "The Frontend Development track focuses on building beautiful, responsive, and user-friendly websites. Learners are trained in HTML, CSS, and JavaScript, and taught how to translate designs into functional web interfaces. The course emphasizes best practices, real projects, and preparing students for real-world web development roles."
  },
  {
    title: "Amazon KDP Writing",
    description: "Our Amazon KDP Writing course teaches learners how to create, publish, and market books on Amazon’s Kindle Direct Publishing platform. Students learn content research, book formatting, publishing strategies, and monetization techniques. This course is ideal for anyone looking to build passive income through digital publishing."
  }
];

const CoursesWeOffer = () => {
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
        // Faster typing: 10-30ms
        const speed = Math.random() * 20 + 10; 
        timeoutId = setTimeout(typeText, speed);
      } else {
        // Finished typing one course. Wait, then move to next.
        timeoutId = setTimeout(() => {
          setCurrentCourseIndex((prevIndex) => (prevIndex + 1) % coursesData.length);
        }, 2000); // 2 second pause before switching
      }
    };

    // Start typing
    timeoutId = setTimeout(typeText, 300);

    return () => clearTimeout(timeoutId);
  }, [currentCourseIndex]); // Re-run when index changes

  const currentCourse = coursesData[currentCourseIndex];

  return (
    <div className="courses-container">
      {/* 4 Spans for the animated border snake effect */}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      
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
