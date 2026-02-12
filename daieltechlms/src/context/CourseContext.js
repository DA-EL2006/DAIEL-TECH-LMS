import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { getUserData, saveUserData, exportAllData } from '../utils/storage';

const CourseContext = createContext(null);

// 5 Core Learning Tracks
export const LEARNING_TRACKS = [
  {
    id: 'web-dev',
    name: 'Web Development',
    description: 'Master HTML, CSS, JavaScript, and React',
    color: '#FF6B6B',
    progress: 0,
    modules: [],
  },
  {
    id: 'python-ml',
    name: 'Python & Machine Learning',
    description: 'Learn Python, NumPy, Pandas, and ML fundamentals',
    color: '#4ECDC4',
    progress: 0,
    modules: [],
  },
  {
    id: 'graphics-design',
    name: 'Graphics & Design',
    description: 'UI/UX, Figma, design principles',
    color: '#FFE66D',
    progress: 0,
    modules: [],
  },
  {
    id: 'kdp-publishing',
    name: 'KDP Publishing',
    description: 'Self-publishing strategies and tools',
    color: '#95E1D3',
    progress: 0,
    modules: [],
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    description: 'SEO, content marketing, analytics',
    color: '#A8E6CF',
    progress: 0,
    modules: [],
  },
];

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState(LEARNING_TRACKS);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isGuestMode, setIsGuestMode] = useState(true);
  const [userData, setUserData] = useState(null);

  // Initialize on mount
  useEffect(() => {
    const savedUserData = getUserData();
    if (savedUserData) {
      setUserData(savedUserData);
      setIsGuestMode(false);
    }
  }, []);

  // Update course progress
  const updateCourseProgress = useCallback((courseId, percentage) => {
    setCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === courseId ? { ...course, progress: percentage } : course
      )
    );
  }, []);

  // Select a course
  const selectCourse = useCallback((courseId) => {
    const course = courses.find(c => c.id === courseId);
    setCurrentCourse(course);
  }, [courses]);

  // Select a video within course
  const selectVideo = useCallback((videoId) => {
    setCurrentVideo(videoId);
  }, []);

  // Register user and sync data
  const registerAndSync = useCallback(async (user, supabaseClient) => {
    try {
      // Export guest data
      const guestData = exportAllData();

      // Save user data
      const newUserData = {
        id: user.id,
        email: user.email,
        name: user.user_metadata?.name || '',
        guestData,
        registeredAt: new Date().toISOString(),
      };

      setUserData(newUserData);
      setIsGuestMode(false);
      saveUserData(newUserData);

      // Sync to Supabase (will be implemented in services)
      return true;
    } catch (error) {
      console.error('Error during registration and sync:', error);
      return false;
    }
  }, []);

  // Logout and return to guest mode
  const logout = useCallback(() => {
    setUserData(null);
    setIsGuestMode(true);
    setCurrentCourse(null);
    setCurrentVideo(null);
  }, []);

  const value = {
    courses,
    currentCourse,
    currentVideo,
    isGuestMode,
    userData,
    updateCourseProgress,
    selectCourse,
    selectVideo,
    registerAndSync,
    logout,
  };

  return (
    <CourseContext.Provider value={value}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourse must be used within CourseProvider');
  }
  return context;
};
