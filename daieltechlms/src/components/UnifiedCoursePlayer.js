import React, { useState, useCallback, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { getCurrentTimestamp } from '../utils/timestamp';
import './UnifiedCoursePlayer.css';

const UnifiedCoursePlayer = ({ videoUrl, videoTitle, onProgressUpdate, onTimeUpdate }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const playerRef = useRef(null);
  const [volume, setVolume] = useState(0.8);
  const [playbackRate, setPlaybackRate] = useState(1);

  // Handle video ready
  const handleReady = useCallback(() => {
    console.log('Player ready');
  }, []);

  // Handle video start
  const handleStart = useCallback(() => {
    setIsPlaying(true);
  }, []);

  // Handle play/pause
  const handlePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  // Handle progress update
  const handleProgress = useCallback((state) => {
    if (!isSeeking) {
      setPlayedSeconds(state.playedSeconds);
      
      // Callback with current timestamp
      if (onTimeUpdate) {
        onTimeUpdate(getCurrentTimestamp(state.playedSeconds));
      }

      // Progress update callback (e.g., for saving progress)
      if (onProgressUpdate) {
        onProgressUpdate({
          currentTime: state.playedSeconds,
          duration,
          progress: duration ? (state.playedSeconds / duration) * 100 : 0,
        });
      }
    }
  }, [duration, isSeeking, onProgressUpdate, onTimeUpdate]);

  // Handle duration
  const handleDuration = useCallback((dur) => {
    setDuration(dur);
  }, []);

  // Handle seeking
  const handleSeek = useCallback((value) => {
    setPlayedSeconds(value);
    playerRef.current?.seekTo(value, 'seconds');
  }, []);

  // Seek to specific timestamp (HH:MM:SS format)
  const seekToTimestamp = useCallback((timestamp) => {
    const parts = timestamp.split(':').map(Number);
    let seconds = 0;

    if (parts.length === 3) {
      seconds = parts[0] * 3600 + parts[1] * 60 + parts[2];
    } else if (parts.length === 2) {
      seconds = parts[0] * 60 + parts[1];
    }

    handleSeek(seconds);
  }, [handleSeek]);

  // Change playback rate
  const handlePlaybackRateChange = useCallback((rate) => {
    setPlaybackRate(rate);
  }, []);

  // Format seconds to MM:SS
  const formatTime = (seconds) => {
    if (!seconds) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="unified-course-player">
      <div className="player-container">
        <div className="video-player-wrapper">
          <ReactPlayer
            ref={playerRef}
            url={videoUrl}
            playing={isPlaying}
            controls={false}
            onReady={handleReady}
            onStart={handleStart}
            onProgress={handleProgress}
            onDuration={handleDuration}
            volume={volume}
            playbackRate={playbackRate}
            width="100%"
            height="100%"
          />
          
          {/* Custom Controls Overlay */}
          <div className="custom-controls">
            {/* Progress Bar */}
            <div className="progress-section">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={playedSeconds}
                onChange={(e) => {
                  setIsSeeking(true);
                  handleSeek(parseFloat(e.target.value));
                }}
                onMouseUp={() => setIsSeeking(false)}
                onTouchEnd={() => setIsSeeking(false)}
                className="progress-bar"
                title={getCurrentTimestamp(playedSeconds)}
              />
            </div>

            {/* Control Bar */}
            <div className="control-bar">
              <div className="left-controls">
                {/* Play/Pause Button */}
                <button
                  className="control-btn play-btn"
                  onClick={handlePlayPause}
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21" />
                    </svg>
                  )}
                </button>

                {/* Volume Control */}
                <div className="volume-control">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="volume-slider"
                  />
                </div>

                {/* Time Display */}
                <span className="time-display">
                  {formatTime(playedSeconds)} / {formatTime(duration)}
                </span>
              </div>

              <div className="right-controls">
                {/* Playback Rate */}
                <select
                  value={playbackRate}
                  onChange={(e) => handlePlaybackRateChange(parseFloat(e.target.value))}
                  className="playback-rate-select"
                >
                  <option value={0.5}>0.5x</option>
                  <option value={0.75}>0.75x</option>
                  <option value={1}>1x</option>
                  <option value={1.25}>1.25x</option>
                  <option value={1.5}>1.5x</option>
                  <option value={2}>2x</option>
                </select>

                {/* Fullscreen Button */}
                <button className="control-btn fullscreen-btn" title="Fullscreen">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Title */}
        <div className="video-info">
          <h2 className="video-title">{videoTitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default UnifiedCoursePlayer;
