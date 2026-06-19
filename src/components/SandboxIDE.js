import React, { useState, useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { 
  Play, RotateCcw, ChevronLeft, Terminal as TerminalIcon, 
  Maximize2, Minimize2, Files, Blocks, Settings, 
  LayoutTemplate, FileCode2, FileJson2, Download
} from 'lucide-react';
import './SandboxIDE.css';

const initialFiles = {
  "index.html": {
    name: "index.html",
    language: "html",
    icon: <FileCode2 size={14} color="#e34c26" />,
    value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Hello, Daiel Tech LMS!</h1>
    <p>Welcome to the advanced Sandbox IDE.</p>
    <button id="actionBtn">Click Me</button>
  </div>
  <script src="script.js"></script>
</body>
</html>`
  },
  "styles.css": {
    name: "styles.css",
    language: "css",
    icon: <FileCode2 size={14} color="#264de4" />,
    value: `body {
  font-family: 'Inter', sans-serif;
  background-color: #0a0a0a;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}

h1 {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

button {
  margin-top: 20px;
  padding: 10px 24px;
  border-radius: 8px;
  border: none;
  background: #00f2fe;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
}

button:hover {
  transform: translateY(-2px);
}`
  },
  "script.js": {
    name: "script.js",
    language: "javascript",
    icon: <FileJson2 size={14} color="#f7df1e" />,
    value: `const btn = document.getElementById('actionBtn');

btn.addEventListener('click', () => {
  console.log('Button was clicked!');
  btn.textContent = 'Clicked! Check Console ->';
  btn.style.background = '#00ff87';
});

console.log('System Initialized.');`
  }
};

const SandboxIDE = ({ onBack }) => {
  const [files, setFiles] = useState(initialFiles);
  const [activeFile, setActiveFile] = useState("index.html");
  const [activeSidebarTab, setActiveSidebarTab] = useState("explorer"); // 'explorer' | 'extensions'
  const [activeRightTab, setActiveRightTab] = useState("preview"); // 'preview' | 'console'
  
  const [previewContent, setPreviewContent] = useState("");
  const [output, setOutput] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [monacoTheme, setMonacoTheme] = useState("vs-dark");

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
    setFiles(prev => ({
      ...prev,
      [activeFile]: {
        ...prev[activeFile],
        value: value
      }
    }));
  };

  const generatePreview = () => {
    const html = files["index.html"].value;
    const css = files["styles.css"].value;
    const js = files["script.js"].value;

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
      <\/script>
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
    const timeoutId = setTimeout(() => {
      generatePreview();
    }, 800); // 800ms debounce
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

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

  return (
    <div className={`sandbox-advanced-container ${isFullscreen ? 'fullscreen' : ''}`}>
      {/* GLOBAL HEADER */}
      <header className="sandbox-header">
        <div className="sandbox-header-left">
          <button className="back-btn" onClick={onBack}>
            <ChevronLeft size={18} />
            <span>Dashboard</span>
          </button>
          <div className="sandbox-title">Daiel Tech Web Environment</div>
        </div>

        <div className="sandbox-header-right">
          <button className="run-btn" onClick={generatePreview}>
            <Play size={14} fill="currentColor" />
            Refresh
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
          {activeSidebarTab === 'explorer' && (
            <div className="sidebar-content">
              <div className="sidebar-title">EXPLORER</div>
              <div className="file-tree">
                {Object.values(files).map((file) => (
                  <div 
                    key={file.name}
                    className={`file-item ${activeFile === file.name ? 'active' : ''}`}
                    onClick={() => setActiveFile(file.name)}
                  >
                    {file.icon}
                    <span>{file.name}</span>
                  </div>
                ))}
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
            {Object.values(files).map((file) => (
              <div 
                key={file.name}
                className={`editor-tab ${activeFile === file.name ? 'active' : ''}`}
                onClick={() => setActiveFile(file.name)}
              >
                {file.icon}
                <span>{file.name}</span>
              </div>
            ))}
          </div>
          <div className="monaco-container">
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
          </div>
        </div>

        {/* RIGHT PANE (Preview / Console) */}
        <div className="right-pane">
          <div className="right-tabs">
            <div 
              className={`right-tab ${activeRightTab === 'preview' ? 'active' : ''}`}
              onClick={() => setActiveRightTab('preview')}
            >
              <LayoutTemplate size={14} />
              Web Preview
            </div>
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
            {activeRightTab === 'preview' && (
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
