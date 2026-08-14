import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { EditorView, basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { oneDark } from "@codemirror/theme-one-dark";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import {
  Play,
  RotateCcw,
  ChevronLeft,
  Terminal as TerminalIcon,
  Maximize2,
  Minimize2,
  Files,
  Blocks,
  Settings,
  LayoutTemplate,
  FileCode2,
  FileJson2,
  Download,
  BookOpen,
  ChevronDown,
  ChevronRight,
  CheckSquare,
  FilePlus,
  FolderPlus,
  FolderInput,
  Folder,
  X,
} from "lucide-react";
import { coursesData } from "../data/coursesData";
import "./SandboxIDE.css";

const getFallbackTaskForCourse = (courseId, courseType) => {
  const id = Number(courseId);
  if (id === 2 || courseType === "ml") {
    return {
      title: "Foundations of ML & Python for Data Science",
      module: "Module 1: Machine Learning Environment",
      description: "Build a Python data science script using NumPy and Pandas to inspect array shapes, load datasets, and compute descriptive statistics.",
      objectives: [
        "Import NumPy and Pandas libraries",
        "Create sample 2D data arrays and dataframes",
        "Perform statistical aggregations (mean, std, dot product)",
        "Print clean formatted output summaries to the console"
      ],
      hint: "Use `import numpy as np` and `import pandas as pd` to perform numerical matrix computations."
    };
  } else if (id === 3 || courseType === "frontend") {
    return {
      title: "Build a Responsive Grid Layout",
      module: "Module 1: HTML/CSS Basics",
      description: "Build a clean, responsive 3-column card grid using CSS Grid or Flexbox.",
      objectives: [
        "Use CSS Grid or Flexbox for layout",
        "Implement responsive design with media queries",
        "Write semantic HTML5 markup",
        "Style cards with consistent spacing and typography"
      ],
      hint: "Try using `grid-template-columns: repeat(3, 1fr)` for the desktop grid, then override it inside a `@media (max-width: 768px)` block with `grid-template-columns: 1fr`."
    };
  } else {
    return {
      title: "Interactive Python Mathematical Engine",
      module: "Module 1: Core Python Basics",
      description: "Build a Python program that performs mathematical calculations, variable assignments, and prints formatted outputs.",
      objectives: [
        "Declare numeric and string variables",
        "Perform arithmetic operations and modulo math",
        "Use f-strings for clean console outputs"
      ],
      hint: "Use `print(f'Result: {value}')` to format your calculations."
    };
  }
};

const SandboxIDE = ({ activeTask, courseType, onBack }) => {
  const currentTask = useMemo(() => {
    if (activeTask && (activeTask.title || activeTask.description)) {
      return {
        title: activeTask.title || "Module Assignment",
        module: activeTask.module || "Current Module",
        description: activeTask.description || activeTask.objective || "Complete the module assignment.",
        objectives: Array.isArray(activeTask.objectives)
          ? activeTask.objectives
          : Array.isArray(activeTask.steps)
          ? activeTask.steps
          : [activeTask.description || "Complete the assignment steps."],
        hint: activeTask.hint || (Array.isArray(activeTask.hints) ? activeTask.hints.join('\n\n') : "")
      };
    }

    const effectiveCourseId = Number(activeTask?.courseId || (courseType === 'frontend' ? 3 : (courseType === 'ml' ? 2 : 1)));
    const course = coursesData[effectiveCourseId] || coursesData[1];
    const firstModule = course?.modules?.[0];
    const assign = firstModule?.assignment;

    if (assign && typeof assign === 'object') {
      return {
        title: assign.title || `${firstModule.title} Assignment`,
        module: `${firstModule.title}: ${firstModule.subtitle || ""}`,
        description: assign.objective || firstModule.description || "",
        objectives: assign.steps || [assign.objective || "Complete the assignment."],
        hint: Array.isArray(assign.hints) ? assign.hints.join('\n\n') : (assign.hints || "")
      };
    }

    return getFallbackTaskForCourse(effectiveCourseId, courseType);
  }, [activeTask, courseType]);

  const getInitialFiles = useCallback(() => {
    const effectiveId = Number(activeTask?.courseId || (courseType === 'frontend' ? 3 : (courseType === 'ml' ? 2 : 1)));
    if (courseType === "python" || courseType === "ml" || effectiveId === 1 || effectiveId === 2) {
      const isML = effectiveId === 2 || courseType === "ml";
      return {
        "main.py": {
          path: "main.py",
          name: "main.py",
          type: "file",
          language: "python",
          value: isML
            ? `# =============================================================
# MODULE TASK — Machine Learning & Data Science
# =============================================================
#
# REPOSITORY REQUIREMENTS:
# -------------------------
# 1. Create a folder named "module_<N>_tasks/" in your repo
#    (e.g. module_1_tasks/) for ALL tasks in this module.
# 2. Each task script should be a separate .py file inside that folder.
# 3. The module PROJECT (capstone) should live at the root of
#    your repo or in a dedicated "project/" sub-folder.
# 4. Push BOTH the tasks folder AND the project before submitting.
#
# REQUIRED LIBRARIES:
# -------------------
# numpy  — numerical arrays & matrix operations
# pandas — dataframes & statistical summaries
# sklearn (optional) — ML models & preprocessing
#
# WHAT YOUR SCRIPT MUST DEMONSTRATE:
# -----------------------------------
# [ ] Import numpy and pandas correctly
# [ ] Create at least one NumPy array or matrix
# [ ] Load or create a Pandas DataFrame
# [ ] Compute at least TWO descriptive statistics (mean, std, etc.)
# [ ] Print labelled, readable output — no raw object dumps
#
# CODE COMMENTS:
# -------------------
# Comment every meaningful block of code explaining WHAT and WHY.
# Uncommented code will be marked down.
#
# =============================================================

import numpy as np
import pandas as pd

# --- STEP 1: Create a sample dataset (replace with your own data) ---
data = {
    'Feature_A': [1.2, 2.4, 3.1, 4.8, 5.0],
    'Feature_B': [10.5, 20.1, 15.4, 30.2, 25.0],
    'Target':    [0,    1,    0,    1,    1   ]
}

# --- STEP 2: Load into a DataFrame ---
df = pd.DataFrame(data)

# --- STEP 3: Print summary statistics ---
print("Dataset:")
print(df)
print()
print("Statistics:")
print(df.describe())
`
            : `# =============================================================
# MODULE TASK — Core Python Programming
# =============================================================
#
# REPOSITORY REQUIREMENTS:
# -------------------------
# 1. Create a folder named "module_<N>_tasks/" in your repo.
# 2. Place each task script as a separate .py file inside it.
# 3. Push your tasks folder AND module project before submitting.
#
# WHAT YOUR SCRIPT MUST DEMONSTRATE:
# -----------------------------------
# [ ] Variable declarations (integers, strings, lists)
# [ ] Arithmetic and string operations
# [ ] At least one loop or conditional statement
# [ ] Formatted print output using f-strings
#
# CODE COMMENTS:
# -------------------
# Explain every block of code. Uncommented code is marked down.
#
# =============================================================

# --- STEP 1: Declare your variables ---
name = "DAIEL Student"
module = 1

# --- STEP 2: Perform a calculation ---
score = 85
grade = "A" if score >= 80 else "B" if score >= 70 else "C"

# --- STEP 3: Print formatted output ---
print(f"Student  : {name}")
print(f"Module   : {module}")
print(f"Score    : {score}%")
print(f"Grade    : {grade}")
`,
        },
      };
    } else {
      return {
        "index.html": {
          path: "index.html",
          name: "index.html",
          type: "file",
          language: "html",
          value: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <div class="container">\n    <h1>Hello, Daiel Tech LMS!</h1>\n    <p>Welcome to the advanced Sandbox IDE.</p>\n    <button id="actionBtn">Click Me</button>\n  </div>\n  <script src="script.js"></script>\n</body>\n</html>`,
        },
        "styles.css": {
          path: "styles.css",
          name: "styles.css",
          type: "file",
          language: "css",
          value: `body {\n  font-family: 'Inter', sans-serif;\n  background-color: #0a0a0a;\n  color: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  margin: 0;\n}\n\n.container {\n  text-align: center;\n  padding: 40px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 16px;\n  backdrop-filter: blur(10px);\n}\n\nh1 {\n  background: linear-gradient(135deg, #4facfe, #00f2fe);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\nbutton {\n  margin-top: 20px;\n  padding: 10px 24px;\n  border-radius: 8px;\n  border: none;\n  background: #00f2fe;\n  color: #000;\n  font-weight: bold;\n  cursor: pointer;\n  transition: transform 0.2s;\n}\n\nbutton:hover {\n  transform: translateY(-2px);\n}`,
        },
        "script.js": {
          path: "script.js",
          name: "script.js",
          type: "file",
          language: "javascript",
          value: `const btn = document.getElementById('actionBtn');\n\nbtn.addEventListener('click', () => {\n  console.log('Button was clicked!');\n  btn.textContent = 'Clicked! Check Console ->';\n  btn.style.background = '#00ff87';\n});\n\nconsole.log('System Initialized.');`,
        },
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseType, activeTask?.courseId]);

  const isPythonEnv = useMemo(() => {
    const effId = Number(activeTask?.courseId || 0);
    return (
      courseType === "python" ||
      courseType === "ml" ||
      effId === 1 ||
      effId === 2
    );
  }, [courseType, activeTask?.courseId]);

  const [files, setFiles] = useState(() => getInitialFiles());
  const [activeFile, setActiveFile] = useState(() =>
    isPythonEnv ? "main.py" : "index.html",
  );
  const [activeSidebarTab, setActiveSidebarTab] = useState("task"); // 'task' | 'explorer' | 'extensions'
  const [hintVisible, setHintVisible] = useState(false);
  const [activeRightTab, setActiveRightTab] = useState(() =>
    isPythonEnv ? "console" : "preview",
  );
  const [inputMode, setInputMode] = useState(null); // { type: 'file' | 'folder', parent: '' }
  const [newItemName, setNewItemName] = useState("");

  const [collapsedFolders, setCollapsedFolders] = useState({});
  const [draggedItem, setDraggedItem] = useState(null);
  const [dragOverTarget, setDragOverTarget] = useState(null);
  const [movingItem, setMovingItem] = useState(null);
  const [selectedMoveTarget, setSelectedMoveTarget] = useState("");

  const [previewContent, setPreviewContent] = useState("");
  const [output, setOutput] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [editorTheme, setEditorTheme] = useState("dark");
  const [pyodideLoading, setPyodideLoading] = useState(false);
  const [pyodideStatusText, setPyodideStatusText] = useState("");
  const pyodideRef = useRef(null);

  const taskKey = useMemo(() => {
    const id =
      activeTask?.courseId ||
      activeTask?.id ||
      (courseType === "frontend" ? 3 : 2);
    const title = activeTask?.title || activeTask?.module || "default";
    return `${id}_${title}_${courseType}`;
  }, [
    activeTask?.courseId,
    activeTask?.id,
    activeTask?.title,
    activeTask?.module,
    courseType,
  ]);

  const prevTaskKeyRef = useRef(null);

  useEffect(() => {
    if (prevTaskKeyRef.current !== taskKey) {
      prevTaskKeyRef.current = taskKey;
      const initFiles = getInitialFiles();
      setFiles(initFiles);
      setActiveFile(isPythonEnv ? "main.py" : "index.html");
      setActiveRightTab(isPythonEnv ? "console" : "preview");
      setHintVisible(false);
      setInputMode(null);
      setNewItemName("");
      setCollapsedFolders({});
      setDraggedItem(null);
      setDragOverTarget(null);
      setMovingItem(null);
      setSelectedMoveTarget("");
      setOutput([]);
    }
  }, [taskKey, getInitialFiles, isPythonEnv]);

  const loadPyodideRuntime = useCallback(async () => {
    if (pyodideRef.current) return pyodideRef.current;

    setPyodideLoading(true);
    setPyodideStatusText("Loading Python WASM Runtime (Pyodide 0.25.0)...");

    if (!window.loadPyodide) {
      await new Promise((resolve, reject) => {
        let script = document.querySelector('script[src*="pyodide.js"]');
        if (!script) {
          script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js";
          script.async = true;
          script.onload = () => resolve();
          script.onerror = () =>
            reject(
              new Error(
                "Failed to load Pyodide CDN script. Please check your internet connection.",
              ),
            );
          document.body.appendChild(script);
        } else {
          script.addEventListener("load", resolve);
          script.addEventListener("error", reject);
        }
      });
    }

    setPyodideStatusText("Initializing CPython 3.11 environment...");
    const pyodide = await window.loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/",
    });

    pyodideRef.current = pyodide;
    setPyodideLoading(false);
    setPyodideStatusText("");
    return pyodide;
  }, []);

  useEffect(() => {
    if (isPythonEnv) {
      loadPyodideRuntime().catch((err) => {
        console.warn("Pyodide preload warning:", err);
      });
    }
  }, [isPythonEnv, loadPyodideRuntime]);

  const runPythonCode = async (code) => {
    setOutput([]); // Clear console on explicit Run click
    setActiveRightTab("console"); // Auto switch to console tab

    try {
      let pyodide = pyodideRef.current;
      if (!pyodide) {
        pyodide = await loadPyodideRuntime();
      }

      setPyodideLoading(true);
      setPyodideStatusText(
        "Checking imports & loading Python packages (e.g. numpy, pandas)...",
      );

      if (pyodide.loadPackagesFromImports) {
        await pyodide.loadPackagesFromImports(code, {
          messageCallback: (msg) => {
            setPyodideStatusText(`Pyodide: ${msg}`);
          },
        });
      }

      setPyodideStatusText("Running Python script...");

      const runnerCode = `
import sys
import io

_stdout_stream = io.StringIO()
_stderr_stream = io.StringIO()
_old_stdout = sys.stdout
_old_stderr = sys.stderr
sys.stdout = _stdout_stream
sys.stderr = _stderr_stream

try:
    import matplotlib
    matplotlib.use('module://matplotlib.backends.html5_canvas_backend')
    import matplotlib.pyplot as plt
    plt.clf()
except Exception:
    pass

_exec_err = None
try:
    exec(${JSON.stringify(code)}, globals())
except Exception as _e:
    _exec_err = _e

try:
    if 'plt' in locals() and plt.get_fignums():
        buf = io.BytesIO()
        plt.savefig(buf, format='png', bbox_inches='tight', dpi=120)
        buf.seek(0)
        import base64
        img_str = base64.b64encode(buf.read()).decode('utf-8')
        print(f"__PYODIDE_PLOT__:{img_str}")
        plt.close('all')
except Exception:
    pass

sys.stdout = _old_stdout
sys.stderr = _old_stderr

_out_val = _stdout_stream.getvalue()
_err_val = _stderr_stream.getvalue()
if _exec_err is not None:
    import traceback
    _err_val += "".join(traceback.format_exception(type(_exec_err), _exec_err, _exec_err.__traceback__))

(_out_val, _err_val)
`;

      const result = await pyodide.runPythonAsync(runnerCode);
      const outStr = result?.toJs ? result.toJs()[0] : result[0];
      const errStr = result?.toJs ? result.toJs()[1] : result[1];

      const logsToAppend = [];
      if (outStr) {
        const lines = outStr.split("\n");
        lines.forEach((line) => {
          logsToAppend.push({ type: "log", message: line });
        });
        if (logsToAppend.length > 0 && logsToAppend[logsToAppend.length - 1].message === "") {
          logsToAppend.pop();
        }
      }

      if (errStr) {
        const lines = errStr.split("\n");
        lines.forEach((line) => {
          if (line) {
            logsToAppend.push({ type: "error", message: line });
          }
        });
      }

      setOutput(logsToAppend);
    } catch (err) {
      setOutput((prev) => [
        ...prev,
        { type: "error", message: err.message || String(err) },
      ]);
    } finally {
      setPyodideLoading(false);
      setPyodideStatusText("");
    }
  };

  const handleCreateFile = () => {
    let parent = "";
    if (activeFile) {
      const parts = activeFile.split("/");
      if (parts.length > 1) {
        const isSelFolder = files[activeFile]?.type === "folder";
        parent = isSelFolder ? activeFile : parts.slice(0, -1).join("/");
      }
    }
    setInputMode({ type: "file", parent });
    setNewItemName("");
  };

  const handleCreateFolder = () => {
    let parent = "";
    if (activeFile) {
      const parts = activeFile.split("/");
      if (parts.length > 1) {
        const isSelFolder = files[activeFile]?.type === "folder";
        parent = isSelFolder ? activeFile : parts.slice(0, -1).join("/");
      }
    }
    setInputMode({ type: "folder", parent });
    setNewItemName("");
  };

  const handleSaveNewItem = () => {
    if (!newItemName.trim()) {
      setInputMode(null);
      return;
    }
    const parentPath = inputMode.parent;
    const fullPath = parentPath
      ? `${parentPath}/${newItemName.trim()}`
      : newItemName.trim();

    if (files[fullPath]) {
      alert("A file or folder with this name already exists.");
      setInputMode(null);
      return;
    }

    if (inputMode.type === "file") {
      const ext = newItemName.split(".").pop().toLowerCase();
      let lang = "plaintext";
      if (ext === "html") lang = "html";
      else if (ext === "css") lang = "css";
      else if (ext === "js" || ext === "jsx") lang = "javascript";
      else if (ext === "py") lang = "python";
      else if (ext === "json") lang = "json";

      setFiles((prev) => ({
        ...prev,
        [fullPath]: {
          path: fullPath,
          name: newItemName.trim(),
          type: "file",
          language: lang,
          value: "",
        },
      }));
      setActiveFile(fullPath);
    } else {
      setFiles((prev) => ({
        ...prev,
        [fullPath]: {
          path: fullPath,
          name: newItemName.trim(),
          type: "folder",
        },
      }));
    }

    setInputMode(null);
    setNewItemName("");
  };

  const moveItem = (sourcePath, targetFolderPath) => {
    if (!sourcePath) return;

    let destDir = targetFolderPath || "";
    if (targetFolderPath && files[targetFolderPath]?.type === "file") {
      const parts = targetFolderPath.split("/");
      destDir = parts.slice(0, -1).join("/");
    }

    if (destDir === sourcePath || destDir.startsWith(sourcePath + "/")) {
      alert("Cannot move a folder into itself or a subfolder of itself.");
      return;
    }

    const basename = sourcePath.split("/").pop();
    const newPath = destDir ? `${destDir}/${basename}` : basename;

    if (newPath === sourcePath) return;

    if (files[newPath]) {
      alert(
        `An item named '${basename}' already exists in the destination folder.`,
      );
      return;
    }

    if (destDir) {
      setCollapsedFolders((prev) => ({ ...prev, [destDir]: false }));
    }

    setFiles((prev) => {
      const updated = { ...prev };
      Object.keys(prev).forEach((k) => {
        if (k === sourcePath) {
          const item = prev[k];
          delete updated[k];
          updated[newPath] = {
            ...item,
            path: newPath,
            name: basename,
          };
        } else if (k.startsWith(sourcePath + "/")) {
          const subPath = k.slice(sourcePath.length + 1);
          const newSubPath = `${newPath}/${subPath}`;
          const item = prev[k];
          delete updated[k];
          updated[newSubPath] = {
            ...item,
            path: newSubPath,
          };
        }
      });
      return updated;
    });

    if (activeFile === sourcePath) {
      setActiveFile(newPath);
    } else if (activeFile.startsWith(sourcePath + "/")) {
      const subPath = activeFile.slice(sourcePath.length + 1);
      setActiveFile(`${newPath}/${subPath}`);
    }

    setMovingItem(null);
  };

  const handleDeletePath = (pathKey) => {
    setFiles((prev) => {
      const copy = { ...prev };
      Object.keys(copy).forEach((k) => {
        if (k === pathKey || k.startsWith(pathKey + "/")) {
          delete copy[k];
        }
      });
      return copy;
    });

    if (activeFile === pathKey || activeFile.startsWith(pathKey + "/")) {
      const remaining = Object.keys(files).filter(
        (k) =>
          k !== pathKey &&
          !k.startsWith(pathKey + "/") &&
          files[k].type === "file",
      );
      if (remaining.length > 0) {
        setActiveFile(remaining[0]);
      } else {
        setActiveFile("");
      }
    }
  };

  const getFileIcon = (fileName, isFolder, isCollapsed) => {
    if (isFolder) {
      return (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "3px",
            marginRight: "4px",
          }}
        >
          {isCollapsed ? (
            <ChevronRight size={13} color="#94a3b8" />
          ) : (
            <ChevronDown size={13} color="#94a3b8" />
          )}
          <Folder size={14} color="#ffd700" />
        </span>
      );
    }
    const ext = fileName.split(".").pop().toLowerCase();
    if (ext === "html")
      return (
        <FileCode2 size={14} color="#e34c26" style={{ marginRight: "6px" }} />
      );
    if (ext === "css")
      return (
        <FileCode2 size={14} color="#264de4" style={{ marginRight: "6px" }} />
      );
    if (ext === "js" || ext === "jsx")
      return (
        <FileJson2 size={14} color="#f7df1e" style={{ marginRight: "6px" }} />
      );
    if (ext === "py")
      return (
        <FileCode2 size={14} color="#306998" style={{ marginRight: "6px" }} />
      );
    return (
      <FileCode2 size={14} color="#888888" style={{ marginRight: "6px" }} />
    );
  };

  const [simulatedExtensions, setSimulatedExtensions] = useState([
    {
      id: "prettier",
      name: "Prettier",
      desc: "Code formatter",
      status: "uninstalled",
      iconClass: "prettier",
    },
    {
      id: "react",
      name: "ES7 React Snippets",
      desc: "React snippets for VS Code",
      status: "uninstalled",
      iconClass: "react",
    },
    {
      id: "dracula",
      name: "Dracula Theme",
      desc: "Dark theme for CodeMirror 6",
      status: "uninstalled",
      iconClass: "dracula",
    },
  ]);

  const editorViewRef = useRef(null);
  const cmContainerRef = useRef(null);

  const getLanguageExtension = useCallback((lang) => {
    switch (lang) {
      case "python": return python();
      case "javascript": return javascript({ jsx: true });
      case "html": return html();
      case "css": return css();
      default: return javascript();
    }
  }, []);

  const handleEditorChange = useCallback((value) => {
    if (!activeFile) return;
    setFiles((prev) => ({
      ...prev,
      [activeFile]: {
        ...prev[activeFile],
        value: value,
      },
    }));
  }, [activeFile]);

  // Build / rebuild CodeMirror when active file or theme changes
  useEffect(() => {
    if (!cmContainerRef.current || !activeFile || !files[activeFile]) return;

    const currentDoc = files[activeFile]?.value ?? "";
    const lang = files[activeFile]?.language ?? "plaintext";

    // Destroy previous instance
    if (editorViewRef.current) {
      editorViewRef.current.destroy();
      editorViewRef.current = null;
    }

    const updateListener = EditorView.updateListener.of((update) => {
      if (update.docChanged) {
        const newValue = update.state.doc.toString();
        handleEditorChange(newValue);
      }
    });

    const themeExtension = editorTheme === "dark" ? oneDark : [];

    const state = EditorState.create({
      doc: currentDoc,
      extensions: [
        basicSetup,
        getLanguageExtension(lang),
        themeExtension,
        updateListener,
        EditorView.lineWrapping,
        EditorView.theme({
          "&": { height: "100%", fontSize: "14px", fontFamily: "'JetBrains Mono', 'Fira Code', monospace" },
          ".cm-scroller": { overflow: "auto", height: "100%" },
          ".cm-content": { padding: "16px 0" },
        }),
      ],
    });

    editorViewRef.current = new EditorView({
      state,
      parent: cmContainerRef.current,
    });

    return () => {
      if (editorViewRef.current) {
        editorViewRef.current.destroy();
        editorViewRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFile, editorTheme]);

  const generatePreview = () => {
    if (isPythonEnv) return;
    const html = files["index.html"]?.value || "";
    const css = files["styles.css"]?.value || "";
    const js = files["script.js"]?.value || "";

    // We inject a script to capture console.log from the iframe and send it to the parent window
    const combinedHTML = `
      ${html.replace("</head>", `<style>${css}</style></head>`)}
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
      const currentTheme =
        document.documentElement.getAttribute("data-theme") || "dark";
      setEditorTheme(currentTheme === "light" ? "light" : "dark");
    };

    updateTheme(); // initial check

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          updateTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Run initial web preview once on mount for Web courses
  useEffect(() => {
    if (!isPythonEnv) {
      generatePreview();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Listen for iframe console messages
  useEffect(() => {
    const handleMessage = (event) => {
      if (
        event.data?.type === "CONSOLE_LOG" ||
        event.data?.type === "CONSOLE_ERROR"
      ) {
        setOutput((prev) => [
          ...prev,
          {
            type: event.data.type === "CONSOLE_ERROR" ? "error" : "log",
            message: event.data.payload,
          },
        ]);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const clearOutput = () => setOutput([]);

  const handleInstallExtension = (extId) => {
    setSimulatedExtensions((prev) =>
      prev.map((ext) =>
        ext.id === extId ? { ...ext, status: "installing" } : ext,
      ),
    );

    setTimeout(() => {
      setSimulatedExtensions((prev) =>
        prev.map((ext) =>
          ext.id === extId ? { ...ext, status: "installed" } : ext,
        ),
      );
    }, 1500);
  };

  const getExplorerList = () => {
    let list = [...Object.keys(files)];
    if (inputMode) {
      const virtualPath = inputMode.parent
        ? `${inputMode.parent}/__new_item__`
        : `__new_item__`;
      list.push(virtualPath);
    }

    // Hide items whose parent/ancestor directory is collapsed
    list = list.filter((p) => {
      const parts = p.split("/");
      for (let i = 1; i < parts.length; i++) {
        const ancestorPath = parts.slice(0, i).join("/");
        if (collapsedFolders[ancestorPath]) {
          return false;
        }
      }
      return true;
    });

    return list.sort((a, b) => {
      const getPathType = (p) => {
        if (p.endsWith("__new_item__")) return inputMode.type;
        return files[p]?.type;
      };

      const aParts = a.split("/");
      const bParts = b.split("/");
      const minLen = Math.min(aParts.length, bParts.length);

      for (let i = 0; i < minLen; i++) {
        if (aParts[i] !== bParts[i]) {
          const aPathAtLevel = aParts.slice(0, i + 1).join("/");
          const bPathAtLevel = bParts.slice(0, i + 1).join("/");
          const aType = getPathType(aPathAtLevel);
          const bType = getPathType(bPathAtLevel);

          if (aType !== bType) {
            if (aType === "folder") return -1;
            if (bType === "folder") return 1;
          }
          return aParts[i].localeCompare(bParts[i]);
        }
      }
      return aParts.length - bParts.length;
    });
  };

  return (
    <div
      className={`sandbox-advanced-container ${isFullscreen ? "fullscreen" : ""}`}
    >
      {/* GLOBAL HEADER */}
      <header className="sandbox-header">
        <div className="sandbox-header-left">
          <button className="back-btn" onClick={onBack}>
            <ChevronLeft size={18} />
            <span>Exit Sandbox</span>
          </button>
          <div className="sandbox-title">
            {Number(activeTask?.courseId) === 2 || courseType === "ml"
              ? "Daiel Tech Machine Learning & Data Science Environment"
              : courseType === "python" || Number(activeTask?.courseId) === 1
              ? "Daiel Tech Python Environment"
              : "Daiel Tech Web Environment"}
          </div>
        </div>

        <div className="sandbox-header-right">
          <button
            className="run-btn"
            onClick={() => {
              if (isPythonEnv) {
                runPythonCode(files[activeFile]?.value || "");
              } else {
                generatePreview();
              }
            }}
          >
            <Play size={14} fill="currentColor" />
            {isPythonEnv ? "Run" : "Run Code"}
          </button>
          <button
            className="icon-btn"
            onClick={() => setIsFullscreen(!isFullscreen)}
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
      </header>

      <div className="sandbox-main-body">
        {/* ACTIVITY BAR */}
        <div className="activity-bar">
          <button
            className={`activity-icon ${activeSidebarTab === "task" ? "active" : ""}`}
            onClick={() => setActiveSidebarTab("task")}
            title="Task Instructions"
          >
            <BookOpen size={24} strokeWidth={1.5} />
          </button>
          <button
            className={`activity-icon ${activeSidebarTab === "explorer" ? "active" : ""}`}
            onClick={() => setActiveSidebarTab("explorer")}
            title="Explorer"
          >
            <Files size={24} strokeWidth={1.5} />
          </button>
          <button
            className={`activity-icon ${activeSidebarTab === "extensions" ? "active" : ""}`}
            onClick={() => setActiveSidebarTab("extensions")}
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
          {activeSidebarTab === "task" && (
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
                    onClick={() => setHintVisible((v) => !v)}
                  >
                    {hintVisible ? (
                      <ChevronDown size={14} />
                    ) : (
                      <ChevronRight size={14} />
                    )}
                    <span>{hintVisible ? "Hide Hint" : "Show Hint"}</span>
                  </button>
                  {hintVisible && (
                    <div className="hint-content">
                      <p style={{ whiteSpace: "pre-wrap" }}>
                        {currentTask.hint}
                      </p>
                    </div>
                  )}
                </div>

                {(activeTask?.courseId === 2 || currentTask?.module?.includes("Machine Learning") || courseType === "ml") && (
                  <div className="ml-task-folder-notice" style={{ background: "rgba(2, 132, 199, 0.12)", border: "2px solid #0284c7", padding: "12px 16px", borderRadius: "10px", color: "#0284c7", fontSize: "0.95rem", fontWeight: 800, marginTop: "14px", lineHeight: "1.5" }}>
                    📌 <strong>Machine Learning Repository Requirement:</strong> Create a dedicated folder for all tasks in this module and push that folder to your GitHub repository alongside your module project submission.
                  </div>
                )}
              </div>
            </div>
          )}

          {activeSidebarTab === "explorer" && (
            <div className="sidebar-content">
              <div
                className="sidebar-title"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>EXPLORER</span>
                <div className="explorer-actions">
                  <button
                    className="explorer-action-btn"
                    title="New File"
                    onClick={handleCreateFile}
                  >
                    <FilePlus size={14} />
                  </button>
                  <button
                    className="explorer-action-btn"
                    title="New Folder"
                    onClick={handleCreateFolder}
                  >
                    <FolderPlus size={14} />
                  </button>
                </div>
              </div>

              <div
                className={`file-tree ${dragOverTarget === "__root__" ? "drag-over-root" : ""}`}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOverTarget("__root__");
                }}
                onDragLeave={() => {
                  if (dragOverTarget === "__root__") setDragOverTarget(null);
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  if (draggedItem) {
                    moveItem(draggedItem, "");
                    setDraggedItem(null);
                    setDragOverTarget(null);
                  }
                }}
              >
                {getExplorerList().map((pathKey) => {
                  if (pathKey.endsWith("__new_item__")) {
                    const depth = pathKey.split("/").length - 1;
                    const isFolder = inputMode.type === "folder";
                    return (
                      <div
                        key="__new_item__"
                        className="file-item creating"
                        style={{ paddingLeft: `${12 + depth * 16}px` }}
                      >
                        {getFileIcon(
                          isFolder ? "folder" : "file",
                          isFolder,
                          false,
                        )}
                        <input
                          autoFocus
                          className="new-item-input"
                          value={newItemName}
                          onChange={(e) => setNewItemName(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleSaveNewItem();
                            } else if (e.key === "Escape") {
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
                  const depth = pathKey.split("/").length - 1;
                  const isFolder = file.type === "folder";
                  const isActive = activeFile === pathKey;
                  const isCollapsed = Boolean(collapsedFolders[pathKey]);
                  const isDragOver = dragOverTarget === pathKey;

                  return (
                    <div
                      key={pathKey}
                      draggable={true}
                      className={`file-item ${isActive ? "active" : ""} ${isFolder ? "folder-item" : ""} ${isDragOver ? "drag-over" : ""}`}
                      style={{ paddingLeft: `${12 + depth * 16}px` }}
                      onClick={() => {
                        if (isFolder) {
                          setCollapsedFolders((prev) => ({
                            ...prev,
                            [pathKey]: !prev[pathKey],
                          }));
                        } else {
                          setActiveFile(pathKey);
                        }
                      }}
                      onDragStart={(e) => {
                        e.dataTransfer.setData("text/plain", pathKey);
                        setDraggedItem(pathKey);
                      }}
                      onDragOver={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setDragOverTarget(pathKey);
                      }}
                      onDragLeave={(e) => {
                        e.stopPropagation();
                        if (dragOverTarget === pathKey) setDragOverTarget(null);
                      }}
                      onDrop={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (draggedItem && draggedItem !== pathKey) {
                          moveItem(
                            draggedItem,
                            isFolder
                              ? pathKey
                              : pathKey.split("/").slice(0, -1).join("/"),
                          );
                        }
                        setDraggedItem(null);
                        setDragOverTarget(null);
                      }}
                    >
                      {getFileIcon(file.name, isFolder, isCollapsed)}
                      <span className="file-name-text">{file.name}</span>

                      <div className="file-actions-group">
                        <button
                          className="move-file-btn"
                          title="Move to folder..."
                          onClick={(e) => {
                            e.stopPropagation();
                            setMovingItem(pathKey);
                            setSelectedMoveTarget("");
                          }}
                        >
                          <FolderInput size={12} />
                        </button>
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
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeSidebarTab === "extensions" && (
            <div className="sidebar-content">
              <div className="sidebar-title">EXTENSIONS</div>
              <div className="extension-list">
                {simulatedExtensions.map((ext) => (
                  <div key={ext.id} className="extension-item">
                    <div className={`ext-icon ${ext.iconClass}`}></div>
                    <div className="ext-details">
                      <span className="ext-name">{ext.name}</span>
                      <span className="ext-desc">{ext.desc}</span>
                    </div>
                    {ext.status === "uninstalled" && (
                      <button
                        className="ext-install-btn"
                        onClick={() => handleInstallExtension(ext.id)}
                      >
                        <Download size={14} />
                      </button>
                    )}
                    {ext.status === "installing" && (
                      <span className="ext-status installing">
                        Installing...
                      </span>
                    )}
                    {ext.status === "installed" && (
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
              .filter((file) => file.type === "file")
              .map((file) => (
                <div
                  key={file.path}
                  className={`editor-tab ${activeFile === file.path ? "active" : ""}`}
                  onClick={() => setActiveFile(file.path)}
                >
                  {getFileIcon(file.name, false)}
                  <span>{file.name}</span>
                </div>
              ))}
          </div>
          <div className="codemirror-container" style={{ position: "relative", overflow: "hidden" }}>
            {activeFile && files[activeFile] ? (
              <div
                ref={cmContainerRef}
                style={{ height: "100%", overflow: "hidden" }}
              />
            ) : (
              <div
                className="no-file-selected"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  color: "var(--color-text-muted)",
                  fontSize: "14px",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <Files size={32} style={{ opacity: 0.3 }} />
                <span>
                  No active file open. Select or create a file to start.
                </span>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT PANE (Preview / Console) */}
        <div className="right-pane">
          <div className="right-tabs">
            {!isPythonEnv && (
              <div
                className={`right-tab ${activeRightTab === "preview" ? "active" : ""}`}
                onClick={() => setActiveRightTab("preview")}
              >
                <LayoutTemplate size={14} />
                Web Preview
              </div>
            )}
            <div
              className={`right-tab ${activeRightTab === "console" ? "active" : ""}`}
              onClick={() => setActiveRightTab("console")}
            >
              <TerminalIcon size={14} />
              Console
              {output.length > 0 && (
                <span className="console-badge">{output.length}</span>
              )}
            </div>
          </div>

          <div className="right-pane-content">
            {activeRightTab === "preview" && !isPythonEnv && (
              <div className="preview-container">
                <iframe
                  title="live-preview"
                  srcDoc={previewContent}
                  sandbox="allow-scripts allow-modals"
                  className="preview-iframe"
                />
              </div>
            )}

            {activeRightTab === "console" && (
              <div className="console-container">
                <div className="console-actions">
                  <button
                    className="clear-btn"
                    onClick={clearOutput}
                    title="Clear Console"
                  >
                    <RotateCcw size={14} /> Clear
                  </button>
                </div>
                <div className="console-output">
                  {pyodideLoading && (
                    <div className="pyodide-loader-bar">
                      <div className="pyodide-spinner"></div>
                      <span>{pyodideStatusText || "Processing Python environment..."}</span>
                    </div>
                  )}
                  {output.length === 0 && !pyodideLoading ? (
                    <div className="empty-console">
                      <TerminalIcon
                        size={32}
                        style={{ opacity: 0.2, marginBottom: 12 }}
                      />
                      <span>Console is empty. Run code to see output.</span>
                    </div>
                  ) : (
                    output.map((log, idx) => {
                      if (log.message && log.message.startsWith("__PYODIDE_PLOT__:")) {
                        const base64Src = log.message.replace("__PYODIDE_PLOT__:", "").trim();
                        return (
                          <div key={idx} className="log-line plot-line">
                            <span className="log-prompt">{">"}</span>
                            <div className="pyodide-plot-box">
                              <div className="plot-title">Matplotlib Plot</div>
                              <img
                                src={`data:image/png;base64,${base64Src}`}
                                alt="Python Chart"
                                className="pyodide-plot-img"
                              />
                            </div>
                          </div>
                        );
                      }
                      return (
                        <div key={idx} className={`log-line ${log.type}`}>
                          <span className="log-prompt">{">"}</span> {log.message}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOVE ITEM MODAL */}
      {movingItem && (
        <div
          className="sandbox-modal-backdrop"
          onClick={() => setMovingItem(null)}
        >
          <div className="sandbox-modal" onClick={(e) => e.stopPropagation()}>
            <div className="sandbox-modal-header">
              <h3>Move Item into Folder</h3>
              <button
                className="modal-close-icon"
                onClick={() => setMovingItem(null)}
              >
                <X size={16} />
              </button>
            </div>
            <div className="sandbox-modal-body">
              <p className="move-item-desc">
                Select target destination for{" "}
                <strong>{files[movingItem]?.name || movingItem}</strong>:
              </p>
              <div className="folder-select-list">
                <label
                  className={`folder-option ${selectedMoveTarget === "" ? "selected" : ""}`}
                >
                  <input
                    type="radio"
                    name="targetFolder"
                    value=""
                    checked={selectedMoveTarget === ""}
                    onChange={() => setSelectedMoveTarget("")}
                  />
                  <Folder size={15} color="#38bdf8" />
                  <span>/ (Root Directory)</span>
                </label>

                {Object.keys(files)
                  .filter(
                    (k) =>
                      files[k]?.type === "folder" &&
                      k !== movingItem &&
                      !k.startsWith(movingItem + "/"),
                  )
                  .map((folderKey) => (
                    <label
                      key={folderKey}
                      className={`folder-option ${selectedMoveTarget === folderKey ? "selected" : ""}`}
                    >
                      <input
                        type="radio"
                        name="targetFolder"
                        value={folderKey}
                        checked={selectedMoveTarget === folderKey}
                        onChange={() => setSelectedMoveTarget(folderKey)}
                      />
                      <Folder size={15} color="#ffd700" />
                      <span>/{folderKey}</span>
                    </label>
                  ))}
              </div>
            </div>
            <div className="sandbox-modal-footer">
              <button
                className="modal-cancel-btn"
                onClick={() => setMovingItem(null)}
              >
                Cancel
              </button>
              <button
                className="modal-move-btn"
                onClick={() => moveItem(movingItem, selectedMoveTarget)}
              >
                Move Here
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SandboxIDE;
