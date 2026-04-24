/**
 * Timestamp utilities for video player and annotation system
 */

/**
 * Convert seconds to HH:MM:SS format
 * @param {number} seconds - Duration in seconds
 * @returns {string} Formatted timestamp in HH:MM:SS
 */
export const secondsToTimestamp = (seconds) => {
  if (!seconds || seconds < 0) return '00:00:00';

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  const pad = (num) => String(num).padStart(2, '0');

  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
};

/**
 * Convert HH:MM:SS format to seconds
 * @param {string} timestamp - Timestamp in HH:MM:SS format
 * @returns {number} Duration in seconds
 */
export const timestampToSeconds = (timestamp) => {
  if (!timestamp || typeof timestamp !== 'string') return 0;

  const parts = timestamp.split(':').map(Number);
  
  if (parts.length === 3) {
    const [hours, minutes, seconds] = parts;
    return hours * 3600 + minutes * 60 + seconds;
  } else if (parts.length === 2) {
    const [minutes, seconds] = parts;
    return minutes * 60 + seconds;
  }
  
  return 0;
};

/**
 * Format timestamp for display
 * @param {string} timestamp - Timestamp in HH:MM:SS format
 * @returns {string} Display-friendly format
 */
export const formatTimestamp = (timestamp) => {
  if (!timestamp) return '00:00';
  
  const parts = timestamp.split(':');
  if (parts.length === 3 && parts[0] === '00') {
    return `${parts[1]}:${parts[2]}`;
  }
  return timestamp;
};

/**
 * Get current time in HH:MM:SS format from video element
 * @param {number} currentTime - Current playback time in seconds
 * @returns {string} Formatted timestamp
 */
export const getCurrentTimestamp = (currentTime) => {
  return secondsToTimestamp(currentTime);
};

/**
 * Validate timestamp format
 * @param {string} timestamp - Timestamp to validate
 * @returns {boolean} True if valid HH:MM:SS format
 */
export const isValidTimestamp = (timestamp) => {
  const regex = /^(\d{1,2}):(\d{2}):(\d{2})$/;
  if (!regex.test(timestamp)) return false;

  const [, hours, minutes, seconds] = timestamp.match(regex);
  return minutes < 60 && seconds < 60;
};
