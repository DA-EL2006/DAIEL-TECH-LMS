import React, { useState, useCallback, useEffect } from 'react';
import { saveNote, getNotesByVideo, deleteNote } from '../utils/storage';
import { getCurrentTimestamp } from '../utils/timestamp';
import './TimestampedAnnotations.css';

const TimestampedAnnotations = ({
  courseId,
  videoId,
  currentTimestamp,
  onSeek,
  onNoteAdded,
}) => {
  const [notes, setNotes] = useState([]);
  const [newNoteText, setNewNoteText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [isExpanded, setIsExpanded] = useState(false);

  // Load notes on component mount or video change
  useEffect(() => {
    if (courseId && videoId) {
      const loadedNotes = getNotesByVideo(courseId, videoId);
      setNotes(loadedNotes);
    }
  }, [courseId, videoId]);

  // Add new note
  const handleAddNote = useCallback(() => {
    if (!newNoteText.trim()) return;

    const newNote = {
      text: newNoteText,
      timestamp: currentTimestamp,
      category: selectedCategory,
    };

    const savedNote = saveNote(courseId, videoId, newNote);
    if (savedNote) {
      setNotes(prev => [...prev, savedNote]);
      setNewNoteText('');
      if (onNoteAdded) {
        onNoteAdded(savedNote);
      }
    }
  }, [newNoteText, currentTimestamp, selectedCategory, courseId, videoId, onNoteAdded]);

  // Delete note
  const handleDeleteNote = useCallback((noteId) => {
    if (deleteNote(courseId, videoId, noteId)) {
      setNotes(prev => prev.filter(n => n.id !== noteId));
    }
  }, [courseId, videoId]);

  // Seek to note timestamp
  const handleNoteClick = useCallback((timestamp) => {
    if (onSeek) {
      onSeek(timestamp);
    }
  }, [onSeek]);

  // Sort notes by timestamp
  const sortedNotes = [...notes].sort((a, b) => {
    const aTime = a.timestamp.split(':').map(Number);
    const bTime = b.timestamp.split(':').map(Number);
    
    const aSeconds = (aTime[0] || 0) * 3600 + (aTime[1] || 0) * 60 + (aTime[2] || 0);
    const bSeconds = (bTime[0] || 0) * 3600 + (bTime[1] || 0) * 60 + (bTime[2] || 0);
    
    return aSeconds - bSeconds;
  });

  const getCategoryColor = (category) => {
    const colors = {
      general: '#6C63FF',
      important: '#FF6B6B',
      idea: '#FFD93D',
      review: '#6BCB77',
      question: '#4D96FF',
    };
    return colors[category] || colors.general;
  };

  const getCategoryIcon = (category) => {
    const icons = {
      general: '📝',
      important: '⭐',
      idea: '💡',
      review: '🔍',
      question: '❓',
    };
    return icons[category] || '📝';
  };

  return (
    <div className="timestamped-annotations">
      <div className="annotations-header">
        <h3>Notes</h3>
        <button
          className="expand-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          title={isExpanded ? 'Collapse' : 'Expand'}
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>

      {/* Note Input Section */}
      <div className="note-input-section">
        <div className="note-input-wrapper">
          <input
            type="text"
            value={newNoteText}
            onChange={(e) => setNewNoteText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddNote()}
            placeholder="Add a note..."
            className="note-input"
          />
          <span className="current-timestamp">{currentTimestamp}</span>
        </div>

        <div className="note-controls">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            <option value="general">General</option>
            <option value="important">Important</option>
            <option value="idea">Idea</option>
            <option value="review">Review</option>
            <option value="question">Question</option>
          </select>

          <button
            onClick={handleAddNote}
            disabled={!newNoteText.trim()}
            className="add-note-btn"
          >
            Save Note
          </button>
        </div>
      </div>

      {/* Notes List */}
      <div className={`notes-list ${isExpanded ? 'expanded' : ''}`}>
        {sortedNotes.length === 0 ? (
          <p className="no-notes">No notes yet. Add one to get started!</p>
        ) : (
          sortedNotes.map((note) => (
            <div
              key={note.id}
              className="note-item"
              style={{ borderLeftColor: getCategoryColor(note.category) }}
            >
              <div className="note-header">
                <span className="note-category">
                  {getCategoryIcon(note.category)} {note.category}
                </span>
                <button
                  className="note-timestamp-btn"
                  onClick={() => handleNoteClick(note.timestamp)}
                  title="Click to seek to this timestamp"
                >
                  {note.timestamp}
                </button>
              </div>

              <p className="note-text">{note.text}</p>

              <div className="note-footer">
                <span className="note-time">
                  {new Date(note.savedAt).toLocaleDateString()}
                </span>
                <button
                  className="delete-note-btn"
                  onClick={() => handleDeleteNote(note.id)}
                  title="Delete note"
                >
                  ✕
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Notes Summary */}
      {sortedNotes.length > 0 && (
        <div className="notes-summary">
          <span className="note-count">{sortedNotes.length} notes</span>
        </div>
      )}
    </div>
  );
};

export default TimestampedAnnotations;
