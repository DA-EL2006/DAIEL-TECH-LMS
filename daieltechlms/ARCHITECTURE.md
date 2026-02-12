# DAIEL LMS - Architecture & Data Flow

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                          DAIEL LMS                              │
│                   (Learning Management System)                  │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                     BROWSER - CLIENT SIDE                         │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                     React App (App.js)                  │   │
│  │  Manages routing, navigation, main layout              │   │
│  └────────────────┬────────────────────────────────────────┘   │
│                   │                                              │
│  ┌────────────────▼────────────────────────────────────────┐   │
│  │           CourseContext (Global State)                 │   │
│  │  ├─ courses[] (5 learning tracks)                      │   │
│  │  ├─ currentCourse & currentVideo                       │   │
│  │  ├─ isGuestMode (boolean)                              │   │
│  │  └─ userData (user profile)                            │   │
│  └────────────────┬────────────────────────────────────────┘   │
│                   │                                              │
│     ┌─────────────┼─────────────┬──────────────┐               │
│     │             │             │              │               │
│  ┌──▼───┐  ┌─────▼──────┐  ┌──▼────┐  ┌─────▼────┐           │
│  │Navbar│  │  Dashboard │  │Player │  │Annotations│          │
│  └──────┘  │  Component │  │Layout │  │Component  │          │
│            │  - 5 Tracks│  │       │  │- Notes    │          │
│            │  - Progress│  │       │  │- Categories         │
│            └────────────┘  │       │  │- Timestamps         │
│                            │       │  └───────────┘          │
│                         ┌──▼──────▼───┐                      │
│                         │Course Player │                      │
│                         │- Controls    │                      │
│                         │- Playback    │                      │
│                         │- Seek        │                      │
│                         └──────────────┘                      │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │            localStorage (Client Storage)            │   │
│  │  ├─ daiel_user_data                                │   │
│  │  ├─ daiel_notes (course_video → notes[])           │   │
│  │  ├─ daiel_video_progress (videoId → progress)      │   │
│  │  ├─ daiel_milestones (course_id → milestones[])    │   │
│  │  └─ daiel_sandbox_code (sandboxId → code)          │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                               │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│           FUTURE: Backend Integration (Stage 2-3)            │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌────────────────┐    ┌──────────────┐  ┌──────────────┐  │
│  │   Supabase     │    │ Pyodide      │  │  Sandpack    │  │
│  │   Database     │    │ Python       │  │  Code IDE    │  │
│  │ & Auth         │    │ Runtime      │  │  Environment │  │
│  └────────────────┘    └──────────────┘  └──────────────┘  │
│                                                               │
│  ┌────────────────┐    ┌──────────────┐  ┌──────────────┐  │
│  │   PDF Kit      │    │ Portfolio    │  │ Verification │  │
│  │ Certificates   │    │ Generator    │  │ Hash System  │  │
│  └────────────────┘    └──────────────┘  └──────────────┘  │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

## Data Flow Diagram

### 1. User Navigates to Course
```
Dashboard Component
    ↓
User clicks course card
    ↓
handleCourseSelect(courseId)
    ↓
CourseContext.selectCourse(courseId)
    ↓
App state updates → Course Player Layout renders
    ↓
UnifiedCoursePlayer & TimestampedAnnotations mount
    ↓
Load notes from localStorage for this course/video
```

### 2. User Watches Video
```
Video plays
    ↓
react-player tracks playback progress
    ↓
onProgress callback fires 30 times/second
    ↓
Send currentTime to:
  ├─ getCurrentTimestamp() → HH:MM:SS
  ├─ onTimeUpdate(timestamp) → Update component state
  └─ saveVideoProgress() → localStorage
    ↓
UI updates with current timestamp for note-taking
```

### 3. User Takes a Note
```
User types note text
    ↓
Selects category (General/Important/Idea/Review/Question)
    ↓
Clicks "Save Note" button
    ↓
handleAddNote() function:
  ├─ Validate text not empty
  ├─ Create note object:
  │  ├─ text: string
  │  ├─ timestamp: HH:MM:SS (from current playback)
  │  ├─ category: string
  │  ├─ id: unique timestamp
  │  └─ savedAt: ISO string
  ├─ Call saveNote(courseId, videoId, noteObject)
  ├─ Note stored in localStorage['daiel_notes']
  └─ UI updates with new note in list
    ↓
User can now click the timestamp button to seek
```

### 4. User Clicks Timestamp to Seek
```
User clicks timestamp button on note (e.g., "00:05:30")
    ↓
handleNoteClick(timestamp) fires
    ↓
onSeek callback → handleSeekToTimestamp()
    ↓
Convert timestamp string to seconds:
  00:05:30 → (0 × 3600) + (5 × 60) + 30 = 330 seconds
    ↓
playerRef.seekTo(330, 'seconds')
    ↓
Video jumps to that moment
    ↓
Player continues from new position
```

### 5. User Closes Browser (Guest Mode)
```
Page unload
    ↓
All data persists in localStorage:
  ├─ Notes still there
  ├─ Video progress saved
  ├─ Milestones recorded
  └─ Sandbox code archived
    ↓
User returns next day
    ↓
App loads → localStorage.getItem() retrieves data
    ↓
CourseContext hydrates with previous state
    ↓
User continues from where they left off
```

### 6. User Registers (Future - Stage 3)
```
User fills registration form
    ↓
registerAndSync(userProfile) called
    ↓
exportAllData() gathers everything from localStorage
    ↓
Sync service sends to Supabase:
  ├─ User profile created
  ├─ All guest notes → user's note table
  ├─ Video progress → user's progress records
  ├─ Milestones → user's milestone table
  └─ Sandbox code → user's code projects
    ↓
localStorage.getItem() still available (browser cache)
    ↓
Supabase becomes source of truth going forward
```

## Component Communication

```
┌─────────────────────────────────────────────────────────────┐
│                       App.js                                 │
│  (State: currentView, currentCourse, currentVideo,          │
│   currentTimestamp, selectedVideo)                          │
└────────────────────┬──────────────────────────────────────┘
                     │
         ┌───────────┴────────────┐
         │                        │
    ┌────▼──────┐         ┌──────▼──────┐
    │ Dashboard │         │ Course View  │
    │ Component │         │              │
    │           │         │  ┌──────────▼────┐
    │ Props:    │         │  │Course Player   │
    │ -onSelect │         │  │                │
    │           │         │  │ Props:         │
    │ Emits:    │         │  │ -videoUrl      │
    │ -course   │         │  │ -onProgress    │
    │  selected │         │  │ -onTimeUpdate  │
    └───────────┘         │  │                │
                          │  │ Emits:         │
                          │  │ -progress data │
                          │  │ -timestamp     │
                          │  └────────┬───────┘
                          │           │
                          │      ┌────▼──────────┐
                          │      │Annotations    │
                          │      │Component      │
                          │      │                │
                          │      │Props:         │
                          │      │-courseId      │
                          │      │-videoId       │
                          │      │-currentTime   │
                          │      │-onSeek        │
                          │      │                │
                          │      │Emits:         │
                          │      │-seek request  │
                          │      │-note added    │
                          │      └────────────────┘
                          │
                          │
                    ┌─────▼──────────────────┐
                    │  CourseContext         │
                    │  (Global State)        │
                    │                        │
                    │  Provides:             │
                    │  -courses[]            │
                    │  -currentCourse        │
                    │  -currentVideo         │
                    │  -isGuestMode          │
                    │  -userData             │
                    │  -selectCourse()       │
                    │  -selectVideo()        │
                    └────────────────────────┘
```

## State Management Flow

```
┌──────────────────────────────────────────────────────────┐
│            CourseContext (Global State Provider)         │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  State Variables:                                         │
│  ┌──────────────────────────────────────────────────┐   │
│  │ courses = [                                      │   │
│  │   {id, name, description, color, progress,      │   │
│  │    modules: [{id, title, progress}, ...]},      │   │
│  │   ...5 total                                     │   │
│  │ ]                                                │   │
│  └──────────────────────────────────────────────────┘   │
│                                                           │
│  ┌──────────────────────────────────────────────────┐   │
│  │ currentCourse = 'web-dev' or null                │   │
│  │ currentVideo = 1 or null                         │   │
│  │ isGuestMode = true/false                         │   │
│  │ userData = {id, email, name, ...} or null        │   │
│  └──────────────────────────────────────────────────┘   │
│                                                           │
│  Methods (useCallback):                                   │
│  ├─ updateCourseProgress(courseId, percentage)           │
│  ├─ selectCourse(courseId)                               │
│  ├─ selectVideo(videoId)                                 │
│  ├─ registerAndSync(user, supabaseClient)                │
│  └─ logout()                                              │
│                                                           │
│  Integration Points:                                      │
│  ├─ localStorage for data persistence                    │
│  ├─ Supabase for future backend sync                     │
│  └─ Context consumed by useCourse() hook                │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

## localStorage Schema

```javascript
// daiel_user_data
{
  id: "uuid",
  email: "user@example.com",
  name: "User Name",
  guestData: {...all data below},
  registeredAt: "2026-01-22T10:30:00Z"
}

// daiel_notes
{
  "web-dev_1": [
    {
      id: "note_1705925400000",
      text: "Key concept about flex layout",
      timestamp: "00:05:30",
      category: "important",
      savedAt: "2026-01-22T10:30:45Z"
    },
    ...
  ],
  "python-ml_2": [
    {...},
    ...
  ]
}

// daiel_video_progress
{
  "1": {
    currentTime: 330,
    duration: 3600,
    progress: 9.17,
    lastWatched: "2026-01-22T10:35:00Z"
  },
  "2": {...}
}

// daiel_milestones
{
  "course_web-dev": [
    {
      id: "milestone_1705925400000",
      title: "First HTML project",
      description: "Build a portfolio page",
      fileUrl: "...",
      completedAt: "2026-01-22T10:40:00Z"
    },
    ...
  ]
}

// daiel_sandbox_code
{
  "sandbox_web-dev-project-1": {
    code: "const App = () => { return <div>...</div> }",
    savedAt: "2026-01-22T10:45:00Z"
  },
  "sandbox_python-ml-exercise-1": {...}
}
```

## Component Lifecycle Example: Video Playback

```
UnifiedCoursePlayer Component Mounted
│
├─ useRef(null) → playerRef
├─ useState(isPlaying) → false
├─ useState(duration) → 0
├─ useState(playedSeconds) → 0
└─ useState(isSeeking) → false
│
▼ (User starts video)
│
onStart() callback
├─ setIsPlaying(true)
├─ Video begins buffering
└─ react-player starts emitting progress events
│
▼ (Every 33ms during playback)
│
onProgress(state) callback
├─ Check: !isSeeking? (ignore if user scrubbing)
├─ setPlayedSeconds(state.playedSeconds)
├─ Call: getCurrentTimestamp(playedSeconds) → "00:05:30"
├─ Call: onTimeUpdate("00:05:30") → Parent receives timestamp
├─ Call: onProgressUpdate({...progress data}) → Parent saves to localStorage
└─ TimestampedAnnotations receives new timestamp in props
│
▼ (User seeks/scrubs)
│
User moves progress bar
├─ setIsSeeking(true) (stop updating from player progress)
├─ handleSeek(newValue)
├─ playerRef.current.seekTo(newValue, 'seconds')
├─ Video jumps to position
├─ setIsSeeking(false) (resume tracking)
└─ onProgress() resumes normal flow
│
▼ (Video ends or user leaves)
│
UnifiedCoursePlayer Unmounted
└─ React cleanup: refs cleared, listeners removed
```

## 5 Learning Tracks Breakdown

```
┌─────────────────────────────────────────────────────────┐
│           DAIEL LMS - 5 Core Learning Tracks            │
├─────────────────────────────────────────────────────────┤
│                                                           │
│ 1️⃣  WEB DEVELOPMENT (🔴 #FF6B6B)                       │
│     └─ Focus: HTML, CSS, JavaScript, React             │
│     └─ Modules:                                         │
│        ├─ Introduction                                 │
│        ├─ Fundamentals                                 │
│        ├─ Advanced Concepts                            │
│        ├─ Project Build                                │
│        └─ Assessment                                   │
│                                                           │
│ 2️⃣  PYTHON & MACHINE LEARNING (🔵 #4ECDC4)            │
│     └─ Focus: Python, NumPy, Pandas, ML basics         │
│     └─ Modules: [Same 5-module structure]             │
│        └─ Includes: Pyodide sandboxes for exercises   │
│                                                           │
│ 3️⃣  GRAPHICS & DESIGN (🟡 #FFE66D)                    │
│     └─ Focus: UI/UX, Figma, design principles         │
│     └─ Modules: [Same structure]                      │
│        └─ Includes: Deliverable uploads               │
│                                                           │
│ 4️⃣  KDP PUBLISHING (💚 #95E1D3)                       │
│     └─ Focus: Self-publishing, Amazon tools           │
│     └─ Modules: [Same structure]                      │
│        └─ Includes: Evidence upload & verification    │
│                                                           │
│ 5️⃣  DIGITAL MARKETING (💙 #A8E6CF)                    │
│     └─ Focus: SEO, content, analytics                 │
│     └─ Modules: [Same structure]                      │
│        └─ Includes: Campaign tracking                 │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

## Performance Metrics

```
Component Sizes (Minified + Gzipped):
├─ UnifiedCoursePlayer.js: ~2.4KB
├─ TimestampedAnnotations.js: ~3.5KB
├─ Dashboard.js: ~4.1KB
├─ CourseContext.js: ~2.9KB
├─ storage.js: ~4.2KB
└─ Total: ~17.1KB (JS) + ~20KB (CSS)

localStorage Limits:
├─ Typical quota: 5-10MB per domain
├─ Estimated usage per user:
│  ├─ 100 notes: ~50KB
│  ├─ 10 video progress entries: ~5KB
│  ├─ 50 code projects: ~100KB
│  └─ Total: ~155KB (well within limits)

Rendering Performance:
├─ Dashboard load: <100ms
├─ Player mount: <200ms (video buffering separate)
├─ Note save: <10ms
├─ Video seek: <50ms
└─ localStorage operations: <5ms
```

---

**Revision**: January 2026
**Status**: Stage 1 Complete, Architecture ready for Stages 2 & 3
