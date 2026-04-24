# DAIEL LMS - Learning Management System

A comprehensive, browser-native Learning Management System built with React, featuring split-screen course playback, timestamped annotations, client-side persistence, and multiple interactive learning environments.

## Project Overview

DAIEL LMS is designed in three progressive stages:

### Stage 1: The "Smart Wrapper" (Core MVP) ✅
Focus on seamless content consumption and student retention.

- **3.1 Unified Course Player**: Split-screen layout with react-player integration
- **3.2 Timestamped Annotations**: Interactive note-taking linked to video timestamps
- **3.3 Client-Side Data Persistence**: localStorage for guest mode data + Supabase sync
- **3.4 Niche Navigation**: Dashboard with 5 learning tracks and real-time progress

### Stage 2: The "Interactive Sandboxes" 🔄
Enable browser-native "Learning by Doing".

- **3.5 Python & ML Runtime**: Pyodide integration for WebAssembly Python execution
- **3.6 Frontend Development Workspace**: Sandpack IDE for HTML/CSS/JS projects
- **3.7 Deliverable-Based Milestones**: Evidence upload system for graphics/KDP tracks

### Stage 3: The "Evidence" (Monetization) 💼
Convert learning into professional artifacts and credentials.

- **3.8 Automated Portfolio Generator**: Dynamic public-facing user profiles
- **3.9 Certification Engine**: PDF generation with verification hashes

## Project Structure

```
daieltechlms/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── UnifiedCoursePlayer.js       # Video player with custom controls
│   │   ├── UnifiedCoursePlayer.css
│   │   ├── TimestampedAnnotations.js    # Note-taking component
│   │   ├── TimestampedAnnotations.css
│   │   ├── Dashboard.js                 # Learning tracks dashboard
│   │   └── Dashboard.css
│   ├── context/
│   │   └── CourseContext.js             # Course & learning state management
│   ├── hooks/                           # Custom React hooks (extensible)
│   ├── services/                        # API integration layer
│   │   ├── supabaseClient.js            # Supabase setup
│   │   ├── authService.js               # Authentication
│   │   └── syncService.js               # Local-to-remote data sync
│   ├── utils/
│   │   ├── storage.js                   # localStorage utilities
│   │   └── timestamp.js                 # Video timestamp utilities
│   ├── App.js                           # Main app component
│   ├── App.css                          # Global styles
│   └── index.js
├── package.json
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js 16+
- npm or yarn

### Steps

1. **Navigate to project directory**
   ```bash
   cd daieltechlms
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Core Features (Stage 1)

### Unified Course Player (3.1)
- Split-screen layout maintaining video visibility
- Custom controls: play/pause, volume, playback rate (0.5x - 2x)
- Progress bar with seek capability
- Fullscreen support
- Responsive design

**Component**: `UnifiedCoursePlayer.js`

### Timestamped Annotations (3.2)
- Real-time note capture with HH:MM:SS timestamps
- Note categories: General, Important, Idea, Review, Question
- Click any note to seek video to that timestamp
- Notes persist in localStorage
- Edit and delete functionality

**Component**: `TimestampedAnnotations.js`

### Client-Side Persistence (3.3)
**Features**:
- Guest mode with full localStorage persistence
- Note management with video linking
- Video progress tracking
- Milestone tracking
- Sandbox code storage
- Export all data for sync to backend

**Utilities**: `utils/storage.js`

**Data Structure**:
```javascript
{
  userData: { id, email, name, registeredAt },
  notes: { courseId_videoId: [...notes] },
  videoProgress: { videoId: { currentTime, duration, progress, lastWatched } },
  milestones: { course_courseId: [...milestones] },
  sandboxCode: { sandboxId: { code, savedAt } }
}
```

### Learning Tracks Dashboard (3.4)
**5 Core Learning Tracks**:
1. **Web Development** - HTML, CSS, JavaScript, React
2. **Python & Machine Learning** - Python, NumPy, Pandas, ML fundamentals
3. **Graphics & Design** - UI/UX, Figma, design principles
4. **KDP Publishing** - Self-publishing strategies and tools
5. **Digital Marketing** - SEO, content marketing, analytics

**Features**:
- Visual progress bars with color-coded tracks
- Module breakdown for each course
- Track detail view with module expansion
- Progress simulation for demo purposes
- Responsive grid layout

**Component**: `Dashboard.js`

## Context Management

### CourseContext (`context/CourseContext.js`)

Global state for course and learning management:

```javascript
const {
  courses,                    // Array of learning tracks
  currentCourse,              // Currently selected course ID
  currentVideo,               // Currently viewing video ID
  isGuestMode,                // Boolean - guest or registered user
  userData,                   // User profile data
  updateCourseProgress,       // Update course progress
  selectCourse,               // Select a course
  selectVideo,                // Select video in course
  registerAndSync,            // Register user and sync guest data
  logout,                     // Return to guest mode
} = useCourse();
```

## Utility Functions

### Storage Utilities (`utils/storage.js`)

#### User Data
- `saveUserData(userData)` - Save user profile
- `getUserData()` - Retrieve user profile

#### Notes Management
- `saveNote(courseId, videoId, note)` - Save timestamped note
- `getNotesByVideo(courseId, videoId)` - Retrieve video notes
- `getAllNotes()` - Get all notes
- `deleteNote(courseId, videoId, noteId)` - Delete a note

#### Video Progress
- `saveVideoProgress(videoId, progress)` - Save playback progress
- `getVideoProgress(videoId)` - Retrieve progress

#### Milestones
- `saveMilestone(courseId, milestone)` - Save milestone
- `getMilestones(courseId)` - Retrieve course milestones

#### Sandbox Code
- `saveSandboxCode(sandboxId, code)` - Save code project
- `getSandboxCode(sandboxId)` - Retrieve code project

#### Data Management
- `clearAllData()` - Logout and clear all data
- `exportAllData()` - Export all data for backend sync

### Timestamp Utilities (`utils/timestamp.js`)

- `secondsToTimestamp(seconds)` - Convert seconds to HH:MM:SS
- `timestampToSeconds(timestamp)` - Convert HH:MM:SS to seconds
- `formatTimestamp(timestamp)` - Format for display
- `getCurrentTimestamp(currentTime)` - Get current video time
- `isValidTimestamp(timestamp)` - Validate timestamp format

## Responsive Design

The application is fully responsive with breakpoints at:
- **Desktop**: Full split-screen layout (2fr 1fr grid)
- **Tablet** (≤1200px): Single column, stacked layout
- **Mobile** (≤768px): Optimized for small screens

## Next Steps - Stage 2 & 3

### To implement Pyodide integration:
1. Create `components/PythonSandbox.js`
2. Set up Pyodide WebAssembly runtime
3. Create interactive Python editor with output

### To implement Sandpack IDE:
1. Create `components/FrontendWorkspace.js`
2. Integrate Sandpack for HTML/CSS/JS
3. Link projects to portfolio system

### To implement Supabase integration:
1. Create `services/supabaseClient.js`
2. Set up authentication
3. Create `services/syncService.js` for data sync

### To implement Portfolio & Certification:
1. Create `components/UserPortfolio.js`
2. Create `services/certificateService.js`
3. Integrate PDF generation with pdfkit

## Dependencies

### Core
- **react** (^19.2.3) - UI framework
- **react-dom** (^19.2.3) - DOM rendering
- **react-scripts** (5.0.1) - Build scripts

### Media & Player
- **react-player** (^2.14.2) - Video player component

### Data & Backend
- **supabase** (^2.39.8) - Backend-as-a-service
- **@supabase/supabase-js** (^2.39.8) - Supabase client

### Interactive Environments
- **pyodide** (^0.25.0) - WebAssembly Python runtime
- **@codesandbox/sandpack-react** (^2.19.8) - Frontend IDE

### Document Generation
- **pdfkit** (^0.14.0) - PDF generation

### Utilities
- **axios** (^1.7.4) - HTTP client
- **uuid** (^9.0.1) - Unique ID generation

## Environment Variables

Create a `.env` file in the root:

```
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_anon_key
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Considerations

1. **Code Splitting**: Lazy load sandboxes and certification features
2. **Video Optimization**: Use HLS streaming for better performance
3. **localStorage Limits**: Implement data archiving for large note collections
4. **Worker Threads**: Use Web Workers for Pyodide processing

## Security Notes

- Supabase handles secure authentication
- PDF certificates include verification hashes
- localStorage is user-device isolated
- Always validate milestone submissions on backend

## Contributing

For future contributions, maintain the component structure and follow the existing patterns for:
- Context providers for global state
- Utility functions for reusable logic
- CSS modules for component styling
- localStorage for offline-first design

## License

MIT License - 2026 DAIEL LMS

---

**Current Status**: Stage 1 MVP complete - Core player, notes, persistence, and dashboard functional. Ready for Stage 2 expansion with sandboxes.
