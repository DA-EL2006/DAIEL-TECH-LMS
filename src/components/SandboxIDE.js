import React, { useState, useRef, useEffect, useCallback } from 'react';
import Editor from '@monaco-editor/react';
import { 
  Play, RotateCcw, ChevronLeft, Terminal as TerminalIcon, 
  Maximize2, Minimize2, Files, Blocks, Settings, 
  LayoutTemplate, FileCode2, FileJson2, Download,
  BookOpen, ChevronDown, ChevronRight, CheckSquare,
  FilePlus, FolderPlus
} from 'lucide-react';
import './SandboxIDE.css';

const taskData = {
  title: "Build a Responsive Grid Layout",
  module: "Module 1: HTML/CSS Basics",
  description: `Your task is to build a clean, responsive 3-column card grid using CSS Grid or Flexbox.

The layout should collapse to 1 column on mobile screens. Use semantic HTML5 elements and ensure proper spacing between cards.

**Requirements:**
- Create a container with 3 card elements
- Apply a CSS grid with 3 equal columns on desktop
- Use a media query to stack columns on screens < 768px
- Each card must have a title, a short paragraph, and a styled button`,
  objectives: [
    "Use CSS Grid or Flexbox for layout",
    "Implement responsive design with media queries",
    "Write semantic HTML5 markup",
    "Style cards with consistent spacing and typography",
  ],
  hint: "Try using `grid-template-columns: repeat(3, 1fr)` for the desktop grid, then override it inside a `@media (max-width: 768px)` block with `grid-template-columns: 1fr`."
};

const SandboxIDE = ({ activeTask, courseType, onBack }) => {
  const currentTask = activeTask || taskData;

  const getInitialFiles = useCallback(() => {
    if (courseType === 'python') {
      return {
        "main.py": {
          path: "main.py",
          name: "main.py",
          type: "file",
          language: "python",
          value: `# Python Programming Sandbox\n\nprint("Hello from Python 3!")\n`
        }
      };
    } else {
      return {
        "index.html": {
          path: "index.html",
          name: "index.html",
          type: "file",
          language: "html",
          value: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <div class="container">\n    <h1>Hello, Daiel Tech LMS!</h1>\n    <p>Welcome to the advanced Sandbox IDE.</p>\n    <button id="actionBtn">Click Me</button>\n  </div>\n  <script src="script.js"></script>\n</body>\n</html>`
        },
        "styles.css": {
          path: "styles.css",
          name: "styles.css",
          type: "file",
          language: "css",
          value: `body {\n  font-family: 'Inter', sans-serif;\n  background-color: #0a0a0a;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  margin: 0;\n}\n\n.container {\n  text-align: center;\n  padding: 40px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n  backdrop-filter: blur(10px);\n}\n\nh1 {\n  background: linear-gradient(135deg, #4facfe, #00f2fe);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\nbutton {\n  margin-top: 20px;\n  padding: 10px 24px;\n  border-radius: 8px;\n  border: none;\n  background: #00f2fe;\n  color: #000;\n  font-weight: bold;\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n\nbutton:hover {\n  transform: translateY(-2px);\n}`
        },
        "script.js": {
          path: "script.js",
          name: "script.js",
          type: "file",
          language: "javascript",
          value: `const btn = document.getElementById('actionBtn');\n\nbtn.addEventListener('click', () => {\n  console.log('Button was clicked!');\n  btn.textContent = 'Clicked! Check Console ->';\n  btn.style.background = '#00ff87';\n});\n\nconsole.log('System Initialized.');`
        }
      };
    }
  }, [courseType]);

  const [files, setFiles] = useState(() => getInitialFiles());
  const [activeFile, setActiveFile] = useState(() => courseType === 'python' ? "main.py" : "index.html");
  const [activeSidebarTab, setActiveSidebarTab] = useState("task"); // 'task' | 'explorer' | 'extensions'
  const [hintVisible, setHintVisible] = useState(false);
  const [activeRightTab, setActiveRightTab] = useState(() => courseType === 'python' ? "console" : "preview");
  const [inputMode, setInputMode] = useState(null); // { type: 'file' | 'folder', parent: '' }
  const [newItemName, setNewItemName] = useState("");

  const [previewContent, setPreviewContent] = useState("");
  const [output, setOutput] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [monacoTheme, setMonacoTheme] = useState("vs-dark");

  useEffect(() => {
    const initFiles = getInitialFiles();
    setFiles(initFiles);
    setActiveFile(courseType === 'python' ? "main.py" : "index.html");
    setActiveRightTab(courseType === 'python' ? "console" : "preview");
    setHintVisible(false);
    setInputMode(null);
    setNewItemName("");
    setOutput([]);
  }, [activeTask, courseType, getInitialFiles]);

  useEffect(() => {
    if (courseType === 'python') {
      const script1 = document.createElement('script');
      script1.src = "https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt.min.js";
      script1.async = true;
      document.body.appendChild(script1);

      const script2 = document.createElement('script');
      script2.src = "https://cdn.jsdelivr.net/npm/skulpt@1.2.0/dist/skulpt-stdlib.js";
      script2.async = true;
      document.body.appendChild(script2);

      return () => {
        document.body.removeChild(script1);
        document.body.removeChild(script2);
      };
    }
  }, [courseType]);

  const runPythonCode = (code) => {
    if (!window.Sk) {
      setOutput(prev => [...prev, { type: 'error', message: "Python interpreter loading... please try again in a moment." }]);
      return;
    }

    setOutput([]); // Clear console
    setActiveRightTab("console"); // Auto switch to console tab

    window.Sk.configure({
      output: (text) => {
        setOutput(prev => [...prev, { type: 'log', message: text }]);
      },
      read: (x) => {
        if (window.Sk.builtinFiles === undefined || window.Sk.builtinFiles["files"][x] === undefined) {
          throw new Error("File not found: '" + x + "'");
        }
        return window.Sk.builtinFiles["files"][x];
      }
    });

    window.Sk.misceval.asyncToPromise(() => {
      return window.Sk.importMainWithBody("<stdin>", false, code, true);
    })
    .catch((err) => {
      setOutput(prev => [...prev, { type: 'error', message: err.toString() }]);
    });
  };

  const handleCreateFile = () => {
    let parent = "";
    if (activeFile) {
      const parts = activeFile.split('/');
      if (parts.length > 1) {
        const isSelFolder = files[activeFile]?.type === 'folder';
        parent = isSelFolder ? activeFile : parts.slice(0, -1).join('/');
      }
    }
    setInputMode({ type: 'file', parent });
    setNewItemName("");
  };

  const handleCreateFolder = () => {
    let parent = "";
    if (activeFile) {
      const parts = activeFile.split('/');
      if (parts.length > 1) {
        const isSelFolder = files[activeFile]?.type === 'folder';
        parent = isSelFolder ? activeFile : parts.slice(0, -1).join('/');
      }
    }
    setInputMode({ type: 'folder', parent });
    setNewItemName("");
  };

  const handleSaveNewItem = () => {
    if (!newItemName.trim()) {
      setInputMode(null);
      return;
    }
    const parentPath = inputMode.parent;
    const fullPath = parentPath ? `${parentPath}/${newItemName.trim()}` : newItemName.trim();

    if (files[fullPath]) {
      alert("A file or folder with this name already exists.");
      setInputMode(null);
      return;
    }

    if (inputMode.type === 'file') {
      const ext = newItemName.split('.').pop().toLowerCase();
      let lang = "plaintext";
      if (ext === 'html') lang = "html";
      else if (ext === 'css') lang = "css";
      else if (ext === 'js' || ext === 'jsx') lang = "javascript";
      else if (ext === 'py') lang = "python";
      else if (ext === 'json') lang = "json";

      setFiles(prev => ({
        ...prev,
        [fullPath]: {
          path: fullPath,
          name: newItemName.trim(),
          type: "file",
          language: lang,
          value: ""
        }
      }));
      setActiveFile(fullPath);
    } else {
      setFiles(prev => ({
        ...prev,
        [fullPath]: {
          path: fullPath,
          name: newItemName.trim(),
          type: "folder"
        }
      }));
    }

    setInputMode(null);
    setNewItemName("");
  };

  const handleDeletePath = (pathKey) => {
    setFiles(prev => {
      const copy = { ...prev };
      Object.keys(copy).forEach((k) => {
        if (k === pathKey || k.startsWith(pathKey + '/')) {
          delete copy[k];
        }
      });
      return copy;
    });
    
    if (activeFile === pathKey || activeFile.startsWith(pathKey + '/')) {
      const remaining = Object.keys(files).filter(k => k !== pathKey && !k.startsWith(pathKey + '/') && files[k].type === 'file');
      if (remaining.length > 0) {
        setActiveFile(remaining[0]);
      } else {
        setActiveFile("");
      }
    }
  };

  const getFileIcon = (fileName, isFolder) => {
    if (isFolder) {
      return <Blocks size={14} color="#ffd700" style={{ marginRight: '6px' }} />;
    }
    const ext = fileName.split('.').pop().toLowerCase();
    if (ext === 'html') return <FileCode2 size={14} color="#e34c26" style={{ marginRight: '6px' }} />;
    if (ext === 'css') return <FileCode2 size={14} color="#264de4" style={{ marginRight: '6px' }} />;
    if (ext === 'js' || ext === 'jsx') return <FileJson2 size={14} color="#f7df1e" style={{ marginRight: '6px' }} />;
    if (ext === 'py') return <FileCode2 size={14} color="#306998" style={{ marginRight: '6px' }} />;
    return <FileCode2 size={14} color="#888888" style={{ marginRight: '6px' }} />;
  };

  const [simulatedExtensions, setSimulatedExtensions] = useState([
    { id: 'prettier', name: 'Prettier', desc: 'Code formatter', status: 'uninstalled', iconClass: 'prettier' },
    { id: 'react', name: 'ES7 React Snippets', desc: 'React snippets for VS Code', status: 'uninstalled', iconClass: 'react' },
    { id: 'dracula', name: 'Dracula Theme', desc: 'Dark theme for Monaco', status: 'uninstalled', iconClass: 'dracula' },
  ]);
  
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const handleEditorChange = (value) => {
    if (!activeFile) return;
    setFiles(prev => ({
      ...prev,
      [activeFile]: {
        ...prev[activeFile],
        value: value
      }
    }));
  };

  const generatePreview = () => {
    if (courseType === 'python') return;
    const html = files["index.html"]?.value || "";
    const css = files["styles.css"]?.value || "";
    const js = files["script.js"]?.value || "";

    // We inject a script to capture console.log from the iframe and send it to the parent window
    const combinedHTML = `
      ${html.replace('</head>', `<style>${css}</style></head>`)}
      <script>
        const originalLog = console.log;
        const originalError = console.error;
        
        console.log = function(...args) {
          window.parent.postMessage({ type: 'CONSOLE_LOG', payload: args.map(String).join(' ') }, '*');
          originalLog.apply(console, args);
        };
        
        console.error = function(...args) {
          window.parent.postMessage({ type: 'CONSOLE_ERROR', payload: args.map(String).join(' ') }, '*');
          originalError.apply(console, args);
        };
        
        window.onerror = function(message, source, lineno, colno, error) {
          window.parent.postMessage({ type: 'CONSOLE_ERROR', payload: message }, '*');
        };
        
        ${js}
      </script>
    `;
    setPreviewContent(combinedHTML);
    setOutput([]); // Clear console on run
  };

  // Detect and sync with global theme changes
  useEffect(() => {
    const updateTheme = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      setMonacoTheme(currentTheme === 'light' ? 'vs-light' : 'vs-dark');
    };
    
    updateTheme(); // initial check
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          updateTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Run initial preview
  useEffect(() => {
    generatePreview();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Live Auto-Preview with Debounce
  useEffect(() => {
    if (courseType === 'python') return;
    const timeoutId = setTimeout(() => {
      generatePreview();
    }, 800); // 800ms debounce
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files, courseType]);

  // Listen for iframe console messages
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'CONSOLE_LOG' || event.data?.type === 'CONSOLE_ERROR') {
        setOutput(prev => [...prev, { 
          type: event.data.type === 'CONSOLE_ERROR' ? 'error' : 'log', 
          message: event.data.payload 
        }]);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const clearOutput = () => setOutput([]);

  const handleInstallExtension = (extId) => {
    setSimulatedExtensions(prev => prev.map(ext => ext.id === extId ? { ...ext, status: 'installing' } : ext));
    
    setTimeout(() => {
      setSimulatedExtensions(prev => prev.map(ext => ext.id === extId ? { ...ext, status: 'installed' } : ext));
    }, 1500);
  };

  const getExplorerList = () => {
    const list = [...Object.keys(files)];
    if (inputMode) {
      const virtualPath = inputMode.parent 
        ? `${inputMode.parent}/__new_item__`
        : `__new_item__`;
      list.push(virtualPath);
    }
    
    return list.sort((a, b) => {
      const getPathType = (p) => {
        if (p.endsWith('__new_item__')) return inputMode.type;
        return files[p]?.type;
      };
      
      const aParts = a.split('/');
      const bParts = b.split('/');
      const minLen = Math.min(aParts.length, bParts.length);

      for (let i = 0; i < minLen; i++) {
        if (aParts[i] !== bParts[i]) {
          const aPathAtLevel = aParts.slice(0, i + 1).join('/');
          const bPathAtLevel = bParts.slice(0, i + 1).join('/');
          const aType = getPathType(aPathAtLevel);
          const bType = getPathType(bPathAtLevel);

          if (aType !== bType) {
            if (aType === 'folder') return -1;
            if (bType === 'folder') return 1;
          }
          return aParts[i].localeCompare(bParts[i]);
        }
      }
      return aParts.length - bParts.length;
    });
  };

  return (
    <div className={`sandbox-advanced-container ${isFullscreen ? 'fullscreen' : ''}`}>
      {/* GLOBAL HEADER */}
      <header className="sandbox-header">
        <div className="sandbox-header-left">
          <button className="back-btn" onClick={onBack}>
            <ChevronLeft size={18} />
            <span>Exit Sandbox</span>
          </button>
          <div className="sandbox-title">
            {courseType === 'python' ? 'Daiel Tech Python Environment' : 'Daiel Tech Web Environment'}
          </div>
        </div>

        <div className="sandbox-header-right">
          <button className="run-btn" onClick={() => {
            if (courseType === 'python') {
              runPythonCode(files[activeFile]?.value || "");
            } else {
              generatePreview();
            }
          }}>
            <Play size={14} fill="currentColor" />
            {courseType === 'python' ? 'Run' : 'Refresh'}
          </button>
          <button className="icon-btn" onClick={() => setIsFullscreen(!isFullscreen)} title="Toggle Fullscreen">
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
      </header>

      <div className="sandbox-main-body">
        {/* ACTIVITY BAR */}
        <div className="activity-bar">
          <button 
            className={`activity-icon ${activeSidebarTab === 'task' ? 'active' : ''}`}
            onClick={() => setActiveSidebarTab('task')}
            title="Task Instructions"
          >
            <BookOpen size={24} strokeWidth={1.5} />
          </button>
          <button 
            className={`activity-icon ${activeSidebarTab === 'explorer' ? 'active' : ''}`}
            onClick={() => setActiveSidebarTab('explorer')}
            title="Explorer"
          >
            <Files size={24} strokeWidth={1.5} />
          </button>
          <button 
            className={`activity-icon ${activeSidebarTab === 'extensions' ? 'active' : ''}`}
            onClick={() => setActiveSidebarTab('extensions')}
            title="Extensions"
          >
            <Blocks size={24} strokeWidth={1.5} />
          </button>
          <div className="activity-spacer"></div>
          <button className="activity-icon" title="Settings">
            <Settings size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* SIDEBAR */}
        <div className="sidebar-pane">

          {/* TASK INSTRUCTIONS PANEL (README.md style) */}
          {activeSidebarTab === 'task' && (
            <div className="sidebar-content task-panel">
              <div className="sidebar-title">TASK INSTRUCTIONS</div>
              <div className="task-panel-body">

                 <div className="task-panel-header">
                  <div className="task-panel-module">{currentTask.module}</div>
                  <h2 className="task-panel-title">{currentTask.title}</h2>
                </div>

                <div className="task-panel-section">
                  <p className="task-panel-desc">{currentTask.description}</p>
                </div>

                <div className="task-panel-section">
                  <div className="task-objectives-label">Objectives</div>
                  <ul className="task-objectives-list">
                    {(currentTask.objectives || []).map((obj, i) => (
                      <li key={i} className="task-objective-item">
                        <CheckSquare size={13} className="obj-icon" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* HINT ACCORDION */}
                <div className="hint-accordion">
                  <button 
                    className="hint-toggle"
                    onClick={() => setHintVisible(v => !v)}
                  >
                    {hintVisible ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    <span>{hintVisible ? 'Hide Hint' : 'Show Hint'}</span>
                  </button>
                  {hintVisible && (
                    <div className="hint-content">
                      <p style={{ whiteSpace: 'pre-wrap' }}>{currentTask.hint}</p>
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}

          {activeSidebarTab === 'explorer' && (
            <div className="sidebar-content">
              <div className="sidebar-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>EXPLORER</span>
                <div className="explorer-actions">
                  <button className="explorer-action-btn" title="New File" onClick={handleCreateFile}>
                    <FilePlus size={14} />
                  </button>
                  <button className="explorer-action-btn" title="New Folder" onClick={handleCreateFolder}>
                    <FolderPlus size={14} />
                  </button>
                </div>
              </div>
              <div className="file-tree">
                {getExplorerList().map((pathKey) => {
                  if (pathKey.endsWith('__new_item__')) {
                    const depth = pathKey.split('/').length - 1;
                    const isFolder = inputMode.type === 'folder';
                    return (
                      <div 
                        key="__new_item__"
                        className="file-item creating"
                        style={{ paddingLeft: `${12 + depth * 16}px` }}
                      >
                        {getFileIcon(isFolder ? "folder" : "file", isFolder)}
                        <input
                          autoFocus
                          className="new-item-input"
                          value={newItemName}
                          onChange={(e) => setNewItemName(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              handleSaveNewItem();
                            } else if (e.key === 'Escape') {
                              setInputMode(null);
                              setNewItemName("");
                            }
                          }}
                          onBlur={handleSaveNewItem}
                          placeholder={isFolder ? "folder name" : "file name"}
                        />
                      </div>
                    );
                  }

                  const file = files[pathKey];
                  if (!file) return null;
                  const depth = pathKey.split('/').length - 1;
                  const isFolder = file.type === 'folder';
                  const isActive = activeFile === pathKey;

                  return (
                    <div 
                      key={pathKey}
                      className={`file-item ${isActive ? 'active' : ''} ${isFolder ? 'folder-item' : ''}`}
                      style={{ paddingLeft: `${12 + depth * 16}px` }}
                      onClick={() => {
                        if (!isFolder) {
                          setActiveFile(pathKey);
                        }
                      }}
                    >
                      {getFileIcon(file.name, isFolder)}
                      <span>{file.name}</span>
                      <button 
                        className="delete-file-btn" 
                        title="Delete" 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeletePath(pathKey);
                        }}
                      >
                        ×
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeSidebarTab === 'extensions' && (
            <div className="sidebar-content">
              <div className="sidebar-title">EXTENSIONS</div>
              <div className="extension-list">
                {simulatedExtensions.map(ext => (
                  <div key={ext.id} className="extension-item">
                    <div className={`ext-icon ${ext.iconClass}`}></div>
                    <div className="ext-details">
                      <span className="ext-name">{ext.name}</span>
                      <span className="ext-desc">{ext.desc}</span>
                    </div>
                    {ext.status === 'uninstalled' && (
                      <button className="ext-install-btn" onClick={() => handleInstallExtension(ext.id)}>
                        <Download size={14}/>
                      </button>
                    )}
                    {ext.status === 'installing' && (
                      <span className="ext-status installing">Installing...</span>
                    )}
                    {ext.status === 'installed' && (
                      <span className="ext-status installed">Installed</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* EDITOR WORKSPACE */}
        <div className="editor-pane">
          <div className="editor-tabs">
            {Object.values(files)
              .filter(file => file.type === 'file')
              .map((file) => (
                <div 
                  key={file.path}
                  className={`editor-tab ${activeFile === file.path ? 'active' : ''}`}
                  onClick={() => setActiveFile(file.path)}
                >
                  {getFileIcon(file.name, false)}
                  <span>{file.name}</span>
                </div>
              ))}
          </div>
          <div className="monaco-container">
            {activeFile && files[activeFile] ? (
              <Editor
                height="100%"
                language={files[activeFile].language}
                theme={monacoTheme}
                value={files[activeFile].value}
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  padding: { top: 16, bottom: 16 },
                  scrollBeyondLastLine: false,
                  smoothScrolling: true,
                  cursorBlinking: "smooth",
                  wordWrap: "on"
                }}
              />
            ) : (
              <div className="no-file-selected" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                color: 'var(--color-text-muted)',
                fontSize: '14px',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <Files size={32} style={{ opacity: 0.3 }} />
                <span>No active file open. Select or create a file to start.</span>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT PANE (Preview / Console) */}
        <div className="right-pane">
          <div className="right-tabs">
            {courseType !== 'python' && (
              <div 
                className={`right-tab ${activeRightTab === 'preview' ? 'active' : ''}`}
                onClick={() => setActiveRightTab('preview')}
              >
                <LayoutTemplate size={14} />
                Web Preview
              </div>
            )}
            <div 
              className={`right-tab ${activeRightTab === 'console' ? 'active' : ''}`}
              onClick={() => setActiveRightTab('console')}
            >
              <TerminalIcon size={14} />
              Console
              {output.length > 0 && <span className="console-badge">{output.length}</span>}
            </div>
          </div>

          <div className="right-pane-content">
            {activeRightTab === 'preview' && courseType !== 'python' && (
              <div className="preview-container">
                <iframe
                  title="live-preview"
                  srcDoc={previewContent}
                  sandbox="allow-scripts allow-modals"
                  className="preview-iframe"
                />
              </div>
            )}

            {activeRightTab === 'console' && (
              <div className="console-container">
                <div className="console-actions">
                  <button className="clear-btn" onClick={clearOutput} title="Clear Console">
                    <RotateCcw size={14} /> Clear
                  </button>
                </div>
                <div className="console-output">
                  {output.length === 0 ? (
                    <div className="empty-console">
                      <TerminalIcon size={32} style={{opacity: 0.2, marginBottom: 12}} />
                      <span>Console is empty. Run code to see output.</span>
                    </div>
                  ) : (
                    output.map((log, idx) => (
                      <div key={idx} className={`log-line ${log.type}`}>
                        <span className="log-prompt">{'>'}</span> {log.message}
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SandboxIDE;
