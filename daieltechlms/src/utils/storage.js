/**
 * localStorage utilities for managing user data persistence
 * Supports Guest Mode and eventual sync to Supabase
 */

const STORAGE_KEYS = {
  USER_DATA: 'daiel_user_data',
  NOTES: 'daiel_notes',
  VIDEO_PROGRESS: 'daiel_video_progress',
  MILESTONES: 'daiel_milestones',
  SANDBOX_CODE: 'daiel_sandbox_code',
};

// User Data Management
export const saveUserData = (userData) => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
    return true;
  } catch (error) {
    console.error('Error saving user data:', error);
    return false;
  }
};

export const getUserData = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.USER_DATA);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error retrieving user data:', error);
    return null;
  }
};

// Notes Management (Timestamped Annotations)
export const saveNote = (courseId, videoId, note) => {
  try {
    const notes = getAllNotes();
    const noteKey = `${courseId}_${videoId}`;
    
    if (!notes[noteKey]) {
      notes[noteKey] = [];
    }

    // Add timestamp to note
    const noteWithTimestamp = {
      ...note,
      id: `note_${Date.now()}`,
      savedAt: new Date().toISOString(),
    };

    notes[noteKey].push(noteWithTimestamp);
    localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
    return noteWithTimestamp;
  } catch (error) {
    console.error('Error saving note:', error);
    return null;
  }
};

export const getNotesByVideo = (courseId, videoId) => {
  try {
    const notes = getAllNotes();
    const noteKey = `${courseId}_${videoId}`;
    return notes[noteKey] || [];
  } catch (error) {
    console.error('Error retrieving notes:', error);
    return [];
  }
};

export const getAllNotes = () => {
  try {
    const notes = localStorage.getItem(STORAGE_KEYS.NOTES);
    return notes ? JSON.parse(notes) : {};
  } catch (error) {
    console.error('Error retrieving all notes:', error);
    return {};
  }
};

export const deleteNote = (courseId, videoId, noteId) => {
  try {
    const notes = getAllNotes();
    const noteKey = `${courseId}_${videoId}`;
    
    if (notes[noteKey]) {
      notes[noteKey] = notes[noteKey].filter(n => n.id !== noteId);
      localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error deleting note:', error);
    return false;
  }
};

// Video Progress Tracking
export const saveVideoProgress = (videoId, progress) => {
  try {
    const allProgress = getVideoProgress();
    allProgress[videoId] = {
      ...progress,
      lastWatched: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEYS.VIDEO_PROGRESS, JSON.stringify(allProgress));
    return true;
  } catch (error) {
    console.error('Error saving video progress:', error);
    return false;
  }
};

export const getVideoProgress = (videoId) => {
  try {
    const progress = localStorage.getItem(STORAGE_KEYS.VIDEO_PROGRESS);
    const allProgress = progress ? JSON.parse(progress) : {};
    return videoId ? allProgress[videoId] : allProgress;
  } catch (error) {
    console.error('Error retrieving video progress:', error);
    return videoId ? null : {};
  }
};

// Milestones Management
export const saveMilestone = (courseId, milestone) => {
  try {
    const milestones = getMilestones();
    const courseKey = `course_${courseId}`;
    
    if (!milestones[courseKey]) {
      milestones[courseKey] = [];
    }

    const milestoneWithMeta = {
      ...milestone,
      id: `milestone_${Date.now()}`,
      completedAt: new Date().toISOString(),
    };

    milestones[courseKey].push(milestoneWithMeta);
    localStorage.setItem(STORAGE_KEYS.MILESTONES, JSON.stringify(milestones));
    return milestoneWithMeta;
  } catch (error) {
    console.error('Error saving milestone:', error);
    return null;
  }
};

export const getMilestones = (courseId) => {
  try {
    const milestones = localStorage.getItem(STORAGE_KEYS.MILESTONES);
    const allMilestones = milestones ? JSON.parse(milestones) : {};
    
    if (courseId) {
      return allMilestones[`course_${courseId}`] || [];
    }
    return allMilestones;
  } catch (error) {
    console.error('Error retrieving milestones:', error);
    return courseId ? [] : {};
  }
};

// Sandbox Code Management
export const saveSandboxCode = (sandboxId, code) => {
  try {
    const allCode = getSandboxCode();
    allCode[sandboxId] = {
      code,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEYS.SANDBOX_CODE, JSON.stringify(allCode));
    return true;
  } catch (error) {
    console.error('Error saving sandbox code:', error);
    return false;
  }
};

export const getSandboxCode = (sandboxId) => {
  try {
    const code = localStorage.getItem(STORAGE_KEYS.SANDBOX_CODE);
    const allCode = code ? JSON.parse(code) : {};
    return sandboxId ? allCode[sandboxId] : allCode;
  } catch (error) {
    console.error('Error retrieving sandbox code:', error);
    return sandboxId ? null : {};
  }
};

// Clear all data (for logout)
export const clearAllData = () => {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
    return true;
  } catch (error) {
    console.error('Error clearing data:', error);
    return false;
  }
};

// Export all data for sync to backend
export const exportAllData = () => {
  try {
    return {
      userData: getUserData(),
      notes: getAllNotes(),
      videoProgress: getVideoProgress(),
      milestones: getMilestones(),
      sandboxCode: getSandboxCode(),
    };
  } catch (error) {
    console.error('Error exporting data:', error);
    return null;
  }
};
