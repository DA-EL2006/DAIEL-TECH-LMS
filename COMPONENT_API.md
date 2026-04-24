# DAIEL LMS - Component Index & API Reference

## Quick Navigation

- [Unified Course Player](#unified-course-player-31)
- [Timestamped Annotations](#timestamped-annotations-32)
- [Dashboard](#dashboard-34)
- [Course Context](#course-context)
- [Storage Utilities](#storage-utilities-33)
- [Timestamp Utilities](#timestamp-utilities)

---

## Unified Course Player (3.1)

**File**: `src/components/UnifiedCoursePlayer.js`

**Purpose**: Split-screen video player with custom controls, integrated into the course layout.

### Props

```typescript
interface UnifiedCoursePlayerProps {
  videoUrl: string,              // Video URL (HLS .m3u8 or MP4)
  videoTitle: string,            // Display title of the video
  onProgressUpdate?: (progress: ProgressData) => void,  // Callback on progress
  onTimeUpdate?: (timestamp: string) => void,  // Callback with current HH:MM:SS
}

interface ProgressData {
  currentTime: number,      // Current playback time in seconds
  duration: number,         // Total video duration in seconds
  progress: number,         // Percentage watched (0-100)
}
```

### Example Usage

```jsx
<UnifiedCoursePlayer
  videoUrl="https://test-streams.mux.dev/x36xhzz/x3zzv.m3u8"
  videoTitle="Module 1: Introduction to React"
  onProgressUpdate={(progress) => {
    saveVideoProgress(videoId, progress);
  }}
  onTimeUpdate={(timestamp) => {
    setCurrentTimestamp(timestamp);
  }}
/>
```

### Features

- **Controls**: Play/Pause, Volume (0-100%), Playback Speed (0.5x - 2x)
- **Progress Bar**: Scrubbing with hover preview
- **Time Display**: MM:SS / MM:SS format
- **Fullscreen**: Click to expand video
- **Responsive**: Adapts to container width
- **Keyboard Support**: Standard HTML5 player shortcuts

### Styling

- Container: Fluid width, 16:9 aspect ratio
- Controls: Auto-hide on hover
- Colors: Primary gradient (FF6B6B - red)
- Mobile: Touch-friendly button sizes

---

## Timestamped Annotations (3.2)

**File**: `src/components/TimestampedAnnotations.js`

**Purpose**: Real-time note-taking synchronized with video playback.

### Props

```typescript
interface TimestampedAnnotationsProps {
  courseId: string,             // ID of the course
  videoId: string | number,     // ID of the video
  currentTimestamp: string,     // Current video time in HH:MM:SS
  onSeek?: (timestamp: string) => void,  // Callback when note timestamp clicked
  onNoteAdded?: (note: Note) => void,    // Callback when note created
}

interface Note {
  id: string,                   // Unique note ID
  text: string,                 // Note content
  timestamp: string,            // HH:MM:SS format
  category: 'general' | 'important' | 'idea' | 'review' | 'question',
  savedAt: string,              // ISO timestamp
}
```

### Example Usage

```jsx
<TimestampedAnnotations
  courseId="web-dev"
  videoId={1}
  currentTimestamp={currentTime}
  onSeek={(timestamp) => {
    // Handle seeking to this timestamp
    playerRef.current.seekTo(timestampToSeconds(timestamp), 'seconds');
  }}
  onNoteAdded={(note) => {
    console.log('Note created:', note);
  }}
/>
```

### Features

- **Note Categories**: 5 types with unique icons and colors
  - 📝 General (Blue)
  - ⭐ Important (Red)
  - 💡 Idea (Yellow)
  - 🔍 Review (Green)
  - ❓ Question (Cyan)
- **Auto-Timestamp**: Captures HH:MM:SS when note saved
- **Click to Seek**: Click timestamp button to jump video to that moment
- **Sorting**: Chronological order by timestamp
- **Persistence**: All notes saved to localStorage
- **Edit/Delete**: Full CRUD operations on notes
- **Expandable**: Compact or expanded view toggle

### Note Storage Format

Notes stored in localStorage under `daiel_notes`:
```javascript
{
  "courseId_videoId": [
    {
      id: "note_1705925400000",
      text: "This is the note content",
      timestamp: "00:05:30",
      category: "important",
      savedAt: "2026-01-22T10:30:45Z"
    }
  ]
}
```

---

## Dashboard (3.4)

**File**: `src/components/Dashboard.js`

**Purpose**: Central hub displaying 5 learning tracks with progress visualization.

### Props

```typescript
interface DashboardProps {
  onCourseSelect?: (courseId: string) => void,    // Click track
  onVideoSelect?: (courseId: string, videoId: number) => void,  // Click module
}
```

### Example Usage

```jsx
<Dashboard
  onCourseSelect={(courseId) => {
    selectCourse(courseId);
    setCurrentView('course');
  }}
  onVideoSelect={(courseId, videoId) => {
    selectCourse(courseId);
    selectVideo(videoId);
  }}
/>
```

### Learning Tracks

```javascript
const LEARNING_TRACKS = [
  {
    id: 'web-dev',
    name: 'Web Development',
    description: 'Master HTML, CSS, JavaScript, and React',
    color: '#FF6B6B',
    progress: 0,  // 0-100%
    modules: []
  },
  {
    id: 'python-ml',
    name: 'Python & Machine Learning',
    description: 'Learn Python, NumPy, Pandas, and ML fundamentals',
    color: '#4ECDC4',
    progress: 0,
    modules: []
  },
  {
    id: 'graphics-design',
    name: 'Graphics & Design',
    description: 'UI/UX, Figma, design principles',
    color: '#FFE66D',
    progress: 0,
    modules: []
  },
  {
    id: 'kdp-publishing',
    name: 'KDP Publishing',
    description: 'Self-publishing strategies and tools',
    color: '#95E1D3',
    progress: 0,
    modules: []
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    description: 'SEO, content marketing, analytics',
    color: '#A8E6CF',
    progress: 0,
    modules: []
  }
];
```

### Features

- **Track Grid**: 5 colorful course cards
- **Progress Bars**: Real-time visual progress (0-100%)
- **Module View**: Click to expand track and see 5 modules
- **Detail Page**: Shows overall progress + per-module breakdown
- **Demo Progress**: Simulate progress for testing
- **Responsive**: Grid → Single column on mobile
- **Color-Coded**: Each track has unique brand color

### Module Structure

Each track contains 5 modules:
1. Introduction
2. Fundamentals
3. Advanced Concepts
4. Project Build
5. Assessment

Each module tracks individual progress percentage.

---

## Course Context

**File**: `src/context/CourseContext.js`

**Purpose**: Global state management for courses, learning progress, and user data.

### Hook: `useCourse()`

```typescript
interface CourseContextValue {
  // State
  courses: Course[],                    // 5 learning tracks
  currentCourse: string | null,         // Selected track ID
  currentVideo: number | null,          // Selected module
  isGuestMode: boolean,                 // Guest vs registered
  userData: UserData | null,            // User profile

  // Methods
  updateCourseProgress: (courseId: string, percentage: number) => void,
  selectCourse: (courseId: string) => void,
  selectVideo: (videoId: number) => void,
  registerAndSync: (user: User, supabaseClient: SupabaseClient) => Promise<boolean>,
  logout: () => void,
}
```

### Example Usage

```jsx
import { useCourse } from '../context/CourseContext';

function MyComponent() {
  const { courses, currentCourse, selectCourse, isGuestMode } = useCourse();

  return (
    <div>
      <h2>Current Track: {currentCourse}</h2>
      <p>Guest Mode: {isGuestMode ? 'Yes' : 'No'}</p>
      <button onClick={() => selectCourse('web-dev')}>
        Learn Web Dev
      </button>
    </div>
  );
}
```

### Wrapping App with Provider

```jsx
import { CourseProvider } from './context/CourseContext';

function App() {
  return (
    <CourseProvider>
      {/* All child components can use useCourse() */}
      <Dashboard />
      <CoursePlayer />
    </CourseProvider>
  );
}
```

---

## Storage Utilities (3.3)

**File**: `src/utils/storage.js`

**Purpose**: Client-side data persistence using browser localStorage.

### User Data

```javascript
saveUserData(userData: object) → boolean
  // Save user profile
  // Returns: success boolean

getUserData() → object | null
  // Retrieve user profile
  // Returns: user object or null if not found
```

### Notes Management

```javascript
saveNote(courseId: string, videoId: string|number, note: object) → Note
  // Save timestamped note
  // Params: course ID, video ID, {text, category}
  // Returns: saved note object with ID and timestamp

getNotesByVideo(courseId: string, videoId: string|number) → Note[]
  // Get all notes for a specific video
  // Returns: array of notes

getAllNotes() → object
  // Get all notes across all videos
  // Returns: {courseId_videoId: [notes]}

deleteNote(courseId: string, videoId: string|number, noteId: string) → boolean
  // Delete a specific note
  // Returns: success boolean
```

### Video Progress

```javascript
saveVideoProgress(videoId: string|number, progress: object) → boolean
  // Save playback position and duration
  // Params: video ID, {currentTime, duration, progress}
  // Returns: success boolean

getVideoProgress(videoId?: string|number) → object
  // Get progress for video or all videos
  // Returns: progress object or map of all progress
```

### Milestones

```javascript
saveMilestone(courseId: string, milestone: object) → Milestone
  // Save completed milestone/assignment
  // Returns: saved milestone with ID

getMilestones(courseId?: string) → object | array
  // Get milestones for course or all courses
  // Returns: milestones array or map
```

### Sandbox Code

```javascript
saveSandboxCode(sandboxId: string, code: string) → boolean
  // Save code project
  // Returns: success boolean

getSandboxCode(sandboxId?: string) → object | string
  // Get code project(s)
  // Returns: code string or map of all code projects
```

### Data Management

```javascript
clearAllData() → boolean
  // Clear all stored data (logout)
  // Returns: success boolean

exportAllData() → ExportedData | null
  // Export all user data for backend sync
  // Returns: complete data object ready for Supabase
  // Structure: {userData, notes, videoProgress, milestones, sandboxCode}
```

### Example Usage

```javascript
// Save a note
const note = saveNote('web-dev', 1, {
  text: 'Remember to use flexbox for layouts',
  category: 'important'
});

// Get all notes for a video
const notes = getNotesByVideo('web-dev', 1);

// Save progress
saveVideoProgress(1, {
  currentTime: 330,
  duration: 3600,
  progress: 9.17
});

// Export for registration
const allData = exportAllData();
// Send to backend: await syncService.syncUserData(allData);
```

---

## Timestamp Utilities

**File**: `src/utils/timestamp.js`

**Purpose**: Convert between seconds and HH:MM:SS format for video timestamps.

### Functions

```javascript
secondsToTimestamp(seconds: number) → string
  // Convert seconds to HH:MM:SS
  // Example: 330 → "00:05:30"
  // Example: 3661 → "01:01:01"

timestampToSeconds(timestamp: string) → number
  // Convert HH:MM:SS to seconds
  // Example: "00:05:30" → 330
  // Example: "5:30" → 330 (accepts MM:SS)

formatTimestamp(timestamp: string) → string
  // Format for display (removes leading 00:)
  // Example: "00:05:30" → "5:30"
  // Example: "01:05:30" → "01:05:30"

getCurrentTimestamp(currentTime: number) → string
  // Get current video time as HH:MM:SS
  // Example: 330 → "00:05:30"

isValidTimestamp(timestamp: string) → boolean
  // Validate timestamp format
  // Returns: true if valid HH:MM:SS format
```

### Example Usage

```javascript
// When video plays
onProgress((state) => {
  const timestamp = getCurrentTimestamp(state.playedSeconds);
  // timestamp = "00:05:30"
});

// When user clicks note timestamp
handleNoteClick((noteTimestamp) => {
  const seconds = timestampToSeconds(noteTimestamp);
  playerRef.current.seekTo(seconds, 'seconds');
});

// When saving note
saveNote(courseId, videoId, {
  text: "Important concept",
  timestamp: getCurrentTimestamp(currentTime)  // Captures HH:MM:SS
});
```

---

## Data Flow Example

### Complete Note-Taking Workflow

```
1. Video Playing
   UnifiedCoursePlayer → onProgress
   → currentTime: 330 seconds
   → getCurrentTimestamp(330) → "00:05:30"
   → onTimeUpdate("00:05:30")
   
2. User Types Note
   Input field: "This is important"
   Category select: "important"
   
3. User Clicks "Save Note"
   handleAddNote() function:
   → saveNote("web-dev", 1, {
       text: "This is important",
       category: "important"
     })
   → Automatically adds timestamp: "00:05:30"
   → Saves to localStorage
   → Returns Note object with ID
   
4. Note Appears in List
   TimestampedAnnotations renders new note
   → Shows: "⭐ important | 00:05:30"
   → Text: "This is important"
   
5. User Clicks Timestamp
   handleNoteClick("00:05:30")
   → timestampToSeconds("00:05:30") → 330
   → playerRef.seekTo(330, 'seconds')
   → Video jumps to 5:30 mark
   
6. Data Persists
   Close browser
   → localStorage still contains note
   → Return next day
   → getNotesByVideo() retrieves it
   → User continues from where they left off
```

---

## Common Patterns

### Using Course Context in a Component

```jsx
import { useCourse } from '../context/CourseContext';

function MyComponent() {
  const { courses, currentCourse, selectCourse } = useCourse();

  return (
    <button onClick={() => selectCourse('python-ml')}>
      Switch to {courses.find(c => c.id === 'python-ml')?.name}
    </button>
  );
}
```

### Saving Progress After Video Play

```jsx
const handleProgressUpdate = (progress) => {
  saveVideoProgress(currentVideo, progress);
  updateCourseProgress(selectedCourse, progress.progress);
};

<UnifiedCoursePlayer
  videoUrl={videoUrl}
  onProgressUpdate={handleProgressUpdate}
/>
```

### Creating a Controlled Note

```jsx
const [noteText, setNoteText] = useState('');
const [category, setCategory] = useState('general');

const handleSave = () => {
  const note = saveNote(courseId, videoId, {
    text: noteText,
    category: category,
    timestamp: currentTimestamp
  });
  
  setNoteText('');
  setCategory('general');
};
```

---

## Testing Components

### Testing Player Seek

```javascript
// Arrange
const playerRef = useRef();

// Act
playerRef.current.seekTo(330, 'seconds');

// Assert
expect(playerRef.current.getInternalPlayer().currentTime).toBe(330);
```

### Testing Note Saving

```javascript
// Arrange
const courseId = 'web-dev';
const videoId = 1;

// Act
const note = saveNote(courseId, videoId, {
  text: 'Test note',
  category: 'important'
});

// Assert
expect(note.text).toBe('Test note');
expect(note.timestamp).toMatch(/\d{2}:\d{2}:\d{2}/);
expect(localStorage.getItem('daiel_notes')).toBeTruthy();
```

---

**Last Updated**: January 2026
**Version**: 1.0.0 (Stage 1 Complete)
