export const coursesData = {
  1: {
  "id": 1,
  "title": "Python Programming",
  "description": "A thorough Python programming course taking students from absolute zero to building real applications. Covers core syntax, data structures, OOP, file handling, APIs, databases, and automation. Students graduate able to build functional Python applications from scratch.",
  "duration": "8 Modules | ~12 Weeks",
  "level": "Beginner – No prior programming experience required",
  "comingSoon": false,
  "playlists": {
    "python_3_playlist": "https://www.youtube.com/playlist?list=PL4cUxeGkcC9idTSBaGGNrgh4ZgYE6Cc"
  },
  "source": "The Net Ninja (YouTube)",
  "modules": [
    {
      "id": "module_1",
      "title": "Module 1",
      "subtitle": "Introduction, Environment Setup & Core Numbers",
      "description": "Understand why Python 3 is the future high-level language of choice, complete the path environmental variable installation, and master mathematical operators, bid-mass rules, and assignment short-hands.",
      "lessons": [
        {
          "id": "pv1.1",
          "videoTitle": "Python 3 Tutorial for Beginners #1 - Why Learn Python?",
          "duration": "5:21",
          "url": "https://www.youtube.com/watch?v=Ozrduu2W9B8",
          "tasks": [
            "Install Python 3, verify local paths, and construct expressions using operators and shorthands."
          ]
        },
        {
          "id": "pv1.2",
          "videoTitle": "Python 3 Tutorial for Beginners #2 - Installing Python 3",
          "duration": "4:28",
          "url": "https://www.youtube.com/watch?v=SbQAAuom-GA",
          "tasks": [
            "Install Python 3, verify local paths, and construct expressions using operators and shorthands."
          ]
        },
        {
          "id": "pv1.3",
          "videoTitle": "Python 3 Tutorial for Beginners #3 - Numbers",
          "duration": "8:29",
          "url": "https://www.youtube.com/watch?v=Gqby4v5JOu4",
          "tasks": [
            "Install Python 3, verify local paths, and construct expressions using operators and shorthands."
          ]
        }
      ],
      "assignment": {
        "title": "Interactive Mathematical Engine",
        "objective": "Build a standalone Python shell script that accepts local variables, processes specific equations using typecasted integer divisions, and prints evaluated results back to the terminal console safely.",
        "steps": [
          "Verify your Python 3 environment locally using terminal configuration flags.",
          "Write a variable schema computing basic primary parameters (Wages, Bills, Rent) using appropriate assignment shorthands (`+=`, `-=`).",
          "Isolate a remainder computation using modern modulo structures without leaking float variables."
        ],
        "hints": [
          "Remember that default system inputs are collected natively as string arrays. Explicit typecasting wrapping functions are mandatory before evaluating math formulas.",
          "Use the `type()` built-in helper method inside your local test shell to double-check that your results match standard class specifications."
        ]
      }
    },
    {
      "id": "module_2",
      "title": "Module 2",
      "subtitle": "List Data Structures, Slicing & Standard Terminal Input",
      "description": "Master array operations, item concatenation sequences, zero-indexed index slicing ranges, list insertion/removal methods, and string concatenation bindings from direct input blocks.",
      "lessons": [
        {
          "id": "pv2.1",
          "videoTitle": "Python 3 Tutorial for Beginners #5 - Lists",
          "duration": "10:33",
          "url": "https://www.youtube.com/watch?v=cl0R4Tbf2v0",
          "tasks": [
            "Initialize python lists, append entries dynamically, and slice element subsets."
          ]
        },
        {
          "id": "pv2.2",
          "videoTitle": "Python 3 Tutorial for Beginners #6 - Standard Input",
          "duration": "9:23",
          "url": "https://www.youtube.com/watch?v=CEO614YbQCY",
          "tasks": [
            "Initialize python lists, append entries dynamically, and slice element subsets."
          ]
        }
      ],
      "assignment": {
        "title": "The Dynamic Space Inventory Controller",
        "objective": "Design an extensible data list architecture that continuously appends items via incoming tracking signals and slices elements out programmatically.",
        "steps": [
          "Establish an initial inventory tracking array containing nested list elements.",
          "Use the `.append()` protocol to introduce new collection entries from standard terminal prompts.",
          "Extract a sub-slice of tracking entries by specifying explicit zero-indexed bounds."
        ],
        "hints": [
          "Nesting arrays can be tricky. Remember that `list[0][1]` pulls the second entry from the first nested list.",
          "The `.pop()` method alters lists instantly by dropping the final index. Use separate target variables to hold item strings if you need to track them."
        ]
      }
    },
    {
      "id": "module_3",
      "title": "Module 3",
      "subtitle": "Advanced String Formatting & Programmatic Branching",
      "description": "Ditch disjointed string concatenations using modern literal f-strings with precise column and decimal precision modifiers, while implementing complex conditional paths via logical comparison structures.",
      "lessons": [
        {
          "id": "pv3.1",
          "videoTitle": "Python 3 Tutorial for Beginners #7 - String Formatting",
          "duration": "10:15",
          "url": "https://www.youtube.com/watch?v=yVGSeRcQfyI",
          "tasks": [
            "Implement string formatting literal structures and configure validation conditional branches."
          ]
        },
        {
          "id": "pv3.2",
          "videoTitle": "Python 3 Tutorial for Beginners #8 - If Statements",
          "duration": "10:10",
          "url": "https://www.youtube.com/watch?v=t3c41sKJS20",
          "tasks": [
            "Implement string formatting literal structures and configure validation conditional branches."
          ]
        }
      ],
      "assignment": {
        "title": "Precision Evaluation Console",
        "objective": "Develop an explicit evaluation pipeline using comparison switches and structural alignment strings to print structured data cards.",
        "steps": [
          "Accept input metadata and map conditions through an `if/elif/else` branching chain.",
          "Incorporate rigorous verification switches ensuring checking parameters aren't equal (`!=`).",
          "Format float evaluation numbers using modern column alignments and explicit `.2f` length properties within f-string braces."
        ],
        "hints": [
          "Be careful with spaces when using f-strings. Modifiers like `:{20}` create empty layout alignments dynamically without breaking strings up.",
          "Always test boundary scenarios where checking limits overlap, ensuring conditions execute strictly sequentially down the chain."
        ]
      }
    },
    {
      "id": "module_4",
      "title": "Module 4",
      "subtitle": "Iterative Structures: For Loops, While Loops & Range Generators",
      "description": "Construct execution loops using linear element traversals, infinite state safety loops with conditional break/continue operators, and dynamic reverse-indexed numeric array generators.",
      "lessons": [
        {
          "id": "pv4.1",
          "videoTitle": "Python 3 Tutorial for Beginners #9 - For Loops",
          "duration": "7:20",
          "url": "https://www.youtube.com/watch?v=ENMCxQ9kNS4",
          "tasks": [
            "Construct traversal loops, use reverse-indexed ranges, and execute break/continue logic."
          ]
        },
        {
          "id": "pv4.2",
          "videoTitle": "Python 3 Tutorial for Beginners #10 - While Loops",
          "duration": "6:14",
          "url": "https://www.youtube.com/watch?v=7p-BJ92aZp0",
          "tasks": [
            "Construct traversal loops, use reverse-indexed ranges, and execute break/continue logic."
          ]
        },
        {
          "id": "pv4.3",
          "videoTitle": "Python 3 Tutorial for Beginners #11 - Ranges",
          "duration": "7:12",
          "url": "https://www.youtube.com/watch?v=GhrChSfaiu0",
          "tasks": [
            "Construct traversal loops, use reverse-indexed ranges, and execute break/continue logic."
          ]
        }
      ],
      "assignment": {
        "title": "Reverse Data Telemetry Sorter",
        "objective": "Build an algorithmic sorting function traversing a data payload in absolute reverse configuration using custom parameter steps and loop continuation policies.",
        "steps": [
          "Construct a tracking loop evaluating lists using the `len()` helper function.",
          "Utilize a custom three-parameter `range()` step generator to iterate backwards across targeted data lists safely.",
          "Inject a `continue` operator constraint skipping individual nodes based on mathematical rules."
        ],
        "hints": [
          "When looping backward using `range()`, your third step size variable must be configured as a negative value (`-1`).",
          "An infinite loop locks local servers up instantly. Verify that your checking indexes shift values up or down prior to calling loop triggers."
        ]
      }
    },
    {
      "id": "module_5",
      "title": "Module 5",
      "subtitle": "Functional Architectures, Variable Scopes & Data Mapping",
      "description": "Define functional blocks using parameterized inputs and tracking returns, distinguish local vs global declaration restrictions, and master associative multi-key dictionary arrays and deduplicated sets.",
      "lessons": [
        {
          "id": "pv5.1",
          "videoTitle": "Python 3 Tutorial for Beginners #12 - Functions",
          "duration": "10:49",
          "url": "https://www.youtube.com/watch?v=l0E1tK-O8ew",
          "tasks": [
            "Author parameterized functions, map key-value dictionaries, and deduplicate collection arrays using sets."
          ]
        },
        {
          "id": "pv5.2",
          "videoTitle": "Python 3 Tutorial for Beginners #13 - Variable Scope",
          "duration": "4:25",
          "url": "https://www.youtube.com/watch?v=wueXfiVkw1I",
          "tasks": [
            "Author parameterized functions, map key-value dictionaries, and deduplicate collection arrays using sets."
          ]
        },
        {
          "id": "pv5.3",
          "videoTitle": "Python 3 Tutorial for Beginners #14 - Dictionaries",
          "duration": "12:32",
          "url": "https://www.youtube.com/watch?v=q8H5R6eP3zQ",
          "tasks": [
            "Author parameterized functions, map key-value dictionaries, and deduplicate collection arrays using sets."
          ]
        },
        {
          "id": "pv5.4",
          "videoTitle": "Python 3 Tutorial for Beginners #15 - Sorting & Sets",
          "duration": "8:49",
          "url": "https://www.youtube.com/watch?v=UirJNoJ9KT8",
          "tasks": [
            "Author parameterized functions, map key-value dictionaries, and deduplicate collection arrays using sets."
          ]
        }
      ],
      "assignment": {
        "title": "The Deduplicated Registry Engine",
        "objective": "Assemble a module parsing incoming structural dictionaries, resolving lookup errors safely, and outputting clean, deduplicated tracking datasets using sets.",
        "steps": [
          "Initialize an associative storage dictionary containing distinct key-value mappings.",
          "Extract dictionary entries dynamically using `.keys()` and `.values()` array mappings.",
          "Isolate values into a deduplicated tracking context by stripping duplicating records via explicit typecasting into sets."
        ],
        "hints": [
          "Directly accessing non-existent dictionary keys triggers fatal exceptions. Verify key inclusion using the `in` lookup statement first.",
          "Sets are strictly unordered entities. Avoid tracking algorithms that assume list indexes are preserved once you pass data to a set layout."
        ]
      }
    },
    {
      "id": "module_6",
      "title": "Module 6",
      "subtitle": "Object-Oriented Programming: Class Blueprints & Methods",
      "description": "Design custom object patterns using initialization frameworks (`__init__`), instance attributes, self properties, class level variables, class-level decorators, and decoupled standalone static methods.",
      "lessons": [
        {
          "id": "pv6.1",
          "videoTitle": "Python 3 Tutorial for Beginners #16 - Classes",
          "duration": "9:29",
          "url": "https://www.youtube.com/watch?v=H--VDcDSHdg",
          "tasks": [
            "Design custom objects, initialize instance properties using self binding, and map class methods."
          ]
        },
        {
          "id": "pv6.2",
          "videoTitle": "Python 3 Tutorial for Beginners #17 - The init function",
          "duration": "6:42",
          "url": "https://www.youtube.com/watch?v=TO1K8_BVCT4",
          "tasks": [
            "Design custom objects, initialize instance properties using self binding, and map class methods."
          ]
        },
        {
          "id": "pv6.3",
          "videoTitle": "Python 3 Tutorial for Beginners #18 - Methods & Attributes",
          "duration": "9:26",
          "url": "https://www.youtube.com/watch?v=LwFnF9XoEfM",
          "tasks": [
            "Design custom objects, initialize instance properties using self binding, and map class methods."
          ]
        }
      ],
      "assignment": {
        "title": "The Physical Entity Simulator",
        "objective": "Model an autonomous object container structure containing unique state traits, shared group attributes, and structural calculation functions.",
        "steps": [
          "Define a class template incorporating a multi-parameter validation initializer function (`__init__`).",
          "Differentiate specific object states by combining private instance data with structural class variables.",
          "Deploy a `@classmethod` block analyzing parent class constants and a standalone `@staticmethod` returning context-free strings."
        ],
        "hints": [
          "Instance functions must explicitly accept the `self` variable parameter block, whereas `@classmethod` macros pass the tracking class pointer (`cls`).",
          "Do not execute class definitions as inline functions; maintain a distinct top-level space inside your workspace code blocks."
        ]
      }
    },
    {
      "id": "module_7",
      "title": "Module 7",
      "subtitle": "Modularity, Code Compilations & Streamlined Data Loops",
      "description": "Split code into isolated packages using operational structure files (`__init__.py`), streamline array updates via list comprehensions, and leverage single-line anonymous lambda wrappers with functional mapping arrays.",
      "lessons": [
        {
          "id": "pv7.1",
          "videoTitle": "Python 3 Tutorial for Beginners #19 - Modules & Packages",
          "duration": "10:15",
          "url": "https://www.youtube.com/watch?v=f26nAmfJggw",
          "tasks": [
            "Establish modular packages, compress loops using comprehensions, and remap data collections using maps/lambdas."
          ]
        },
        {
          "id": "pv7.2",
          "videoTitle": "Python 3 Tutorial for Beginners #20 - Bar Tab Calculator",
          "duration": "13:21",
          "url": "https://www.youtube.com/watch?v=h4NetyxAhv4",
          "tasks": [
            "Establish modular packages, compress loops using comprehensions, and remap data collections using maps/lambdas."
          ]
        },
        {
          "id": "pv7.3",
          "videoTitle": "Python 3 Tutorial for Beginners #21 - List Comprehensions",
          "duration": "7:28",
          "url": "https://www.youtube.com/watch?v=7G0jqG_kiig",
          "tasks": [
            "Establish modular packages, compress loops using comprehensions, and remap data collections using maps/lambdas."
          ]
        },
        {
          "id": "pv7.4",
          "videoTitle": "Python 3 Tutorial for Beginners #22 - Maps",
          "duration": "7:26",
          "url": "https://www.youtube.com/watch?v=3Da00hgQ834",
          "tasks": [
            "Establish modular packages, compress loops using comprehensions, and remap data collections using maps/lambdas."
          ]
        },
        {
          "id": "pv7.5",
          "videoTitle": "Python 3 Tutorial for Beginners #23 - Filters",
          "duration": "6:49",
          "url": "https://www.youtube.com/watch?v=jPoY--eTG5A",
          "tasks": [
            "Establish modular packages, compress loops using comprehensions, and remap data collections using maps/lambdas."
          ]
        },
        {
          "id": "pv7.6",
          "videoTitle": "Python 3 Tutorial for Beginners #24 - Lambdas",
          "duration": "4:02",
          "url": "https://www.youtube.com/watch?v=3waZGETmzjY",
          "tasks": [
            "Establish modular packages, compress loops using comprehensions, and remap data collections using maps/lambdas."
          ]
        }
      ],
      "assignment": {
        "title": "The Streamlined Calculations Package",
        "objective": "Refactor a multi-layered loops pipeline into decoupled cross-imported modules that compress parsing steps using map configurations and lambdas.",
        "steps": [
          "Create a dedicated workspace sub-folder package incorporating an empty structural initialization file (`__init__.py`).",
          "Convert traditional loops into single-line list comprehensions that incorporate conditional filtering switches.",
          "Refactor standalone execution functions into inline anonymous `lambda` blocks passed directly to a higher-order `map()` handler."
        ],
        "hints": [
          "Functional arrays returned by `map()` or `filter()` frameworks are streaming objects. Convert them to lists via `list()` typecasting to print values.",
          "Ensure your import tracking statements map out from your package namespace cleanly (e.g., `from package.module import object`)."
        ]
      }
    },
    {
      "id": "capstone_projects",
      "title": "Capstone Project",
      "subtitle": "Capstone Project",
      "description": "Practical Graduation Requirement. Timeline Constraint: Exactly Two Weeks. Students must select and completely build out two (2) complex systems from the specialized architecture options below using Object-Oriented layouts, imported data models, and automated logic processing.",
      "lessons": [],
      "projects": [
        {
          "id": "project_alpha",
          "title": "Project Alpha: Autonomous Financial Audit Framework",
          "description": "An Object-Oriented simulation system reading complex invoice records, computing taxation arrays via list comprehensions, and mapping custom financial telemetry output logs.",
          "core_requirements": [
            "Maintain an active transactional architecture inside a custom class layout with running mathematical variables.",
            "Utilize list comprehensions and conditional filters to separate premium entries or track systemic over-expenditures.",
            "Format precise textual receipt profiles using column sizing limits and custom string templates."
          ],
          "architectural_concept_map": {
            "diagram_placeholder": "",
            "specifications": [
              "Data Processing Core: A top-level script parsing transaction rows via lambda wrappers.",
              "The Metric Consolidation View: Object modules maintaining separate validation states across separate transaction accounts."
            ]
          }
        },
        {
          "id": "project_beta",
          "title": "Project Beta: Automated Physics Telemetry Analyzer",
          "description": "A package system reading scientific tracking dictionaries, stripping out data duplications via set manipulation, and computing planetary velocity states via imported mathematical parameters.",
          "core_requirements": [
            "Build an internal structure utilizing isolated custom modules inside a single tracking directory package.",
            "Parse velocity parameter entries using higher-order math combinations and mapping functions.",
            "Implement automated evaluation filters that eliminate corrupt background noise data entries."
          ],
          "architectural_concept_map": {
            "diagram_placeholder": "",
            "execution_flowchart": "[Raw Signal Dictionary] ──> [Filter Module Noise Clean] ──> [Map Calculation Module] ──> [Deduplicated Telemetry Output Log]"
          }
        },
        {
          "id": "project_gamma",
          "title": "Project Gamma: Interactive Sandbox Command Terminal",
          "description": "A terminal simulation engine managing real-time object registry tracking logs, interactive multi-choice operational menu matrices, and state tracking breaks.",
          "core_requirements": [
            "Run an interactive process via an adaptive `while True` loop matrix equipped with safe escape tracking criteria.",
            "Isolate object data layers securely into matching multi-key internal dictionaries.",
            "Provide explicit input type validation paths preventing string collisions from breaking numerical tracking loops."
          ],
          "architectural_concept_map": {
            "diagram_placeholder": "",
            "specifications": [
              "Menu Tree Core: Adaptive switches evaluating raw inputs against matching data arrays.",
              "The Error Containment Pipeline: Input processing layers ensuring string conversions clear safety baselines before being committed to memory variables."
            ]
          }
        }
      ]
    }
  ]
},
  2: {
    id: 2,
    title: "Machine Learning",
    description:
      "A comprehensive, hands-on machine learning curriculum designed to take learners from mathematical foundations to building, evaluating, and deploying real-world ML models. By the end of this course, students will be able to design, train, and deploy production-ready machine learning systems.",
    duration: "8 Modules | ~16 Weeks",
    level: "Intermediate (Basic Python & Math required)",
    comingSoon: false,
    modules: [
      {
        id: "m1",
        title: "Module 1",
        subtitle: "Foundations of ML & Python for Data Science",
        lessons: [
          {
            id: "v1.1",
            videoTitle: "Setting Up the ML Environment",
            tasks: [
              [
                "Install Anaconda or Miniconda, launch Jupyter Notebook, and verify NumPy, Pandas, and Matplotlib imports with a sample array/dataframe/plot.",
              ],
            ],
          },
          {
            id: "v1.2",
            videoTitle: "Essential Python Refresher for Data Science",
            tasks: [
              [
                "Build a small Python script that uses lists, dictionaries, loops, a function, and a class to summarize dataset statistics.",
              ],
            ],
          },
          {
            id: "v1.3",
            videoTitle: "Introduction to NumPy for Numerical Computation",
            tasks: [
              [
                "Create a NumPy array with numbers 1 to 10, reshape it into a 2x5 matrix, and compute row/column sums.",
                "Generate two random NumPy arrays, perform element-wise multiplication, and compare results using broadcasting and vectorized operations.",
              ],
            ],
          },
          {
            id: "v1.4",
            videoTitle: "Data Manipulation with Pandas",
            tasks: [
              [
                "Load a CSV file into a Pandas DataFrame, clean missing values, group by a column, compute aggregated statistics, and export the result to a new CSV file.",
              ],
            ],
          },
          {
            id: "v1.5",
            videoTitle: "Data Visualization with Matplotlib & Seaborn",
            tasks: [
              [
                "Generate a Seaborn heatmap from a dataset correlation matrix, label the axes, and save the plot as a PNG file.",
              ],
            ],
          },
          {
            id: "v1.6",
            videoTitle: "Walkthrough: End-to-End Real Dataset Exploration",
            tasks: [
              [
                "Perform end-to-end EDA on Titanic or Iris: inspect structure, clean data, compute summary statistics, visualize key features, and document 3 insights.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 1: Load the Titanic dataset, clean missing values, perform EDA, and produce 5 labeled visualizations summarizing survival patterns.",
      },
      {
        id: "m2",
        title: "Module 2",
        subtitle: "Mathematics for Machine Learning",
        lessons: [
          {
            id: "v2.1",
            videoTitle: "The Role of Math in Machine Learning",
            tasks: [
              [
                "Demonstrate math in ML by computing vectors, matrices, and simple model predictions with NumPy and explain why these operations matter.",
              ],
            ],
          },
          {
            id: "v2.2",
            videoTitle: "Linear Algebra Essentials",
            tasks: [
              [
                "Use NumPy to compute vector dot products, matrix multiplication, and eigenvalues for a 2x2 matrix. Visualize the result with a short summary.",
              ],
            ],
          },
          {
            id: "v2.3",
            videoTitle: "Calculus for Optimization",
            tasks: [
              [
                "Implement numerical derivatives and partial derivatives for simple functions, then visualize how the gradient changes with the input values.",
              ],
            ],
          },
          {
            id: "v2.4",
            videoTitle: "Core Probability & Statistics for Data Science",
            tasks: [
              [
                "Compute mean, variance, and sample random values from a normal distribution in Python. Use Bayes theorem to estimate a simple conditional probability.",
              ],
            ],
          },
          {
            id: "v2.5",
            videoTitle: "Implementing Gradient Descent",
            tasks: [
              [
                "Implement gradient descent from scratch in Python for a simple quadratic cost function and plot the parameter update path.",
              ],
            ],
          },
          {
            id: "v2.6",
            videoTitle: "Visualizing Loss Surfaces and Optimization",
            tasks: [
              [
                "Visualize a loss surface and overlay optimization trajectories for gradient descent using Matplotlib.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 2: Derive and implement linear regression using the Normal Equation from scratch (no Scikit-learn). Evaluate on the Boston Housing dataset.",
      },
      {
        id: "m3",
        title: "Module 3",
        subtitle: "Supervised Learning I – Regression & Classification",
        lessons: [
          {
            id: "v3.1",
            videoTitle: "Linear and Polynomial Regression Models",
            tasks: [
              [
                "Train a linear regression model on a toy dataset, then add polynomial features and compare training/validation error to illustrate bias-variance tradeoff.",
              ],
            ],
          },
          {
            id: "v3.2",
            videoTitle: "Logistic Regression and Classification Concepts",
            tasks: [
              [
                "Train logistic regression on a binary dataset, plot the decision boundary, and compute cross-entropy loss plus accuracy.",
              ],
            ],
          },
          {
            id: "v3.3",
            videoTitle: "K-Nearest Neighbors (KNN) Algorithm",
            tasks: [
              [
                "Use scikit-learn KNN to fit a classifier, compare k=1,3,5, and evaluate accuracy for different distance metrics.",
              ],
            ],
          },
          {
            id: "v3.4",
            videoTitle: "Building Pipelines with Scikit-Learn",
            tasks: [
              [
                "Build a Scikit-learn Pipeline with preprocessing and a model, then run fit(), predict(), and score() on a dataset.",
              ],
            ],
          },
          {
            id: "v3.5",
            videoTitle: "Evaluating Model Performance",
            tasks: [
              [
                "Compute MAE/RMSE for regression and accuracy, confusion matrix, precision, recall, F1 for classification using scikit-learn.",
              ],
            ],
          },
          {
            id: "v3.6",
            videoTitle: "Cross-Validation Techniques",
            tasks: [
              [
                "Apply k-fold and stratified k-fold cross-validation to a classification model and compare the average scores.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 3: Build a house price predictor (regression) AND a spam email classifier (classification). Compare at least 3 models each, report metrics in a table, and explain your model choices.",
      },
      {
        id: "m4",
        title: "Module 4",
        subtitle: "Supervised Learning II – Ensemble Methods & SVMs",
        lessons: [
          {
            id: "v4.1",
            videoTitle: "Introduction to Decision Trees",
            tasks: [
              [
                "Train a decision tree classifier, inspect splitting criteria, evaluate feature importance, and discuss overfitting behavior.",
              ],
            ],
          },
          {
            id: "v4.2",
            videoTitle: "Ensemble Learning with Random Forests",
            tasks: [
              [
                "Fit a Random Forest model, compare it to a single tree, and display the top feature importances.",
              ],
            ],
          },
          {
            id: "v4.3",
            videoTitle: "Boosting Techniques: XGBoost and LightGBM",
            tasks: [
              [
                "Train an XGBoost or LightGBM model, tune learning rate and max_depth, and compare performance to a baseline model.",
              ],
            ],
          },
          {
            id: "v4.4",
            videoTitle: "Support Vector Machines (SVM)",
            tasks: [
              [
                "Train SVM models with linear and RBF kernels, evaluate support vectors, and compare decision margins.",
              ],
            ],
          },
          {
            id: "v4.5",
            videoTitle: "Hyperparameter Tuning Strategies",
            tasks: [
              [
                "Use GridSearchCV or RandomizedSearchCV to tune model hyperparameters, then report the best combination and validation score.",
              ],
            ],
          },
          {
            id: "v4.6",
            videoTitle: "Feature Selection & Importance",
            tasks: [
              [
                "Use feature selection or importance ranking methods to choose top features, then compare model accuracy before and after selection.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 4: Use the Heart Disease UCI dataset. Train Random Forest, XGBoost and SVM. Perform hyperparameter tuning for each. Produce a final comparison report with ROC curves and AUC scores.",
      },
      {
        id: "m5",
        title: "Module 5",
        subtitle: "Unsupervised Learning & Dimensionality Reduction",
        lessons: [
          {
            id: "v5.1",
            videoTitle: "K-Means Clustering Algorithm",
            tasks: [
              [
                "Apply K-Means clustering to a dataset, use the elbow method and silhouette score to choose the best k, and visualize the clusters.",
              ],
            ],
          },
          {
            id: "v5.2",
            videoTitle: "Density-Based Clustering with DBSCAN",
            tasks: [
              [
                "Cluster a dataset using DBSCAN, identify noise points, compare results to K-Means, and explain when DBSCAN is preferable.",
              ],
            ],
          },
          {
            id: "v5.3",
            videoTitle: "Hierarchical Clustering",
            tasks: [
              [
                "Perform hierarchical clustering, plot a dendrogram, and choose cluster count based on the hierarchy structure.",
              ],
            ],
          },
          {
            id: "v5.4",
            videoTitle: "Dimensionality Reduction with PCA",
            tasks: [
              [
                "Use PCA to reduce data dimensionality, plot explained variance and a scree plot, then visualize the first two principal components.",
              ],
            ],
          },
          {
            id: "v5.5",
            videoTitle: "Advanced Visualization with t-SNE",
            tasks: [
              [
                "Apply t-SNE to high-dimensional data, plot the 2D embedding, and describe cluster structure observed in the visualization.",
              ],
            ],
          },
          {
            id: "v5.6",
            videoTitle: "Practical Application: Customer Segmentation",
            tasks: [
              [
                "Apply clustering to a customer dataset, interpret each segment, and recommend business actions for the identified groups.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 5: Apply K-Means and DBSCAN to a customer transaction dataset. Reduce dimensions with PCA and visualize clusters with t-SNE. Interpret each cluster and suggest a business strategy for each segment.",
      },
      {
        id: "m6",
        title: "Module 6",
        subtitle: "Neural Networks & Deep Learning Fundamentals",
        lessons: [
          {
            id: "v6.1",
            videoTitle: "Introduction to Artificial Neural Networks",
            tasks: [
              [
                "Build a simple perceptron or multi-layer network example, experiment with activation functions, and document how outputs change.",
              ],
            ],
          },
          {
            id: "v6.2",
            videoTitle: "Forward Pass & Backpropagation",
            tasks: [
              [
                "Implement forward and backward passes for a 2-layer network in NumPy, compute loss, and update weights for one training step.",
              ],
            ],
          },
          {
            id: "v6.3",
            videoTitle: "Getting Started with TensorFlow and Keras",
            tasks: [
              [
                "Build a Keras Sequential model with Dense layers, compile it, train on a small dataset, and evaluate test performance.",
              ],
            ],
          },
          {
            id: "v6.4",
            videoTitle: "Deep Learning Regularization Techniques",
            tasks: [
              [
                "Train a model with dropout, L1/L2, early stopping, or batch normalization and compare validation performance against a baseline.",
              ],
            ],
          },
          {
            id: "v6.5",
            videoTitle: "Introduction to Convolutional Neural Networks (CNNs)",
            tasks: [
              [
                "Build a simple CNN in Keras, explain the role of conv and pooling layers, and visualize feature map shapes.",
              ],
            ],
          },
          {
            id: "v6.6",
            videoTitle: "Building an Image Classifier with Keras",
            tasks: [
              [
                "Train an image classifier on CIFAR-10 using Keras, evaluate test accuracy, and show sample predictions with labels.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 6: Build a CNN from scratch in Keras to classify handwritten digits (MNIST) and fashion items (Fashion-MNIST). Achieve >97% accuracy on MNIST. Document architecture choices, training curves, and test results.",
      },
      {
        id: "m7",
        title: "Module 7",
        subtitle: "ML Pipelines, Feature Engineering & Model Deployment",
        lessons: [
          {
            id: "v7.1",
            videoTitle: "Advanced Feature Engineering Techniques",
            tasks: [
              [
                "Engineer features with encoding, scaling, polynomial terms, and interactions, then compare model performance before and after.",
              ],
            ],
          },
          {
            id: "v7.2",
            videoTitle: "Building Robust Scikit-learn Pipelines",
            tasks: [
              [
                "Build a Scikit-learn Pipeline using ColumnTransformer for preprocessing and a model estimator, then fit and evaluate it.",
              ],
            ],
          },
          {
            id: "v7.3",
            videoTitle: "Strategies for Imbalanced Datasets",
            tasks: [
              [
                "Address imbalanced classes using SMOTE or class weights, and compare classifier metrics on balanced versus imbalanced versions.",
              ],
            ],
          },
          {
            id: "v7.4",
            videoTitle: "Saving and Loading Machine Learning Models",
            tasks: [
              [
                "Serialize a trained model with pickle or joblib, reload it, and verify that it produces identical predictions.",
              ],
            ],
          },
          {
            id: "v7.5",
            videoTitle: "Building REST APIs with FastAPI for ML",
            tasks: [
              [
                "Build a FastAPI endpoint that accepts JSON input, loads a trained model, and returns predictions in JSON format.",
              ],
            ],
          },
          {
            id: "v7.6",
            videoTitle: "Experiment Tracking with MLflow",
            tasks: [
              [
                "Track experiments with MLflow: log parameters, metrics, artifacts, and compare two runs in the UI.",
              ],
            ],
          },
          {
            id: "v7.7",
            videoTitle: "Containerizing ML Applications with Docker",
            tasks: [
              [
                "Create a Dockerfile for an ML app, build the image, and run the container locally to verify the service works.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 7: Build an end-to-end Scikit-learn pipeline for a tabular dataset of your choice. Serialize the model, create a FastAPI endpoint that accepts JSON input and returns predictions. Test your API with Postman or cURL.",
      },
      {
        id: "m8",
        title: "Module 8",
        subtitle: "🏆 CAPSTONE PROJECT – End-to-End ML Solution",
        lessons: [
          {
            id: "v8.1",
            videoTitle: "Capstone Overview and Project Selection",
            tasks: [
              [
                "Define the capstone problem, choose a dataset, perform EDA, and build a baseline model. Document results in a notebook.",
              ],
            ],
          },
          {
            id: "v8.2",
            videoTitle: "Model Selection & Tuning",
            tasks: [
              [
                "Engineer features, select candidate models, tune hyperparameters, and compare evaluation metrics for the top model.",
              ],
            ],
          },
          {
            id: "v8.3",
            videoTitle: "Building the Deployment Pipeline",
            tasks: [
              [
                "Build the deployment pipeline, create a prediction API, and write README documentation for how to run the model service.",
              ],
            ],
          },
          {
            id: "v8.4",
            videoTitle: "Finalizing Deliverables",
            tasks: [
              [
                "Prepare your final deliverables: GitHub repo, notebook, deployed API, and a concise presentation summarizing the project.",
              ],
            ],
          },
          {
            id: "v8.5",
            videoTitle: "Final Presentation & Review",
            tasks: [
              [
                "Prepare a final presentation, gather peer feedback, and document instructor review notes for the capstone.",
              ],
            ],
          },
        ],
        assignment:
          "CAPSTONE: Solve a real-world ML problem (classification, regression, or clustering) end-to-end. Submit: (1) cleaned dataset + EDA report, (2) model training notebook with evaluation, (3) deployed FastAPI endpoint, (4) 10-slide summary presentation, (5) GitHub repo with README.",
      },
    ],
  },
  3: {
  "id": 3,
  "title": "Frontend Development",
  "description": "A complete frontend development course covering the holy trinity of the web — HTML, CSS, and JavaScript — followed by an introduction to the React.js library. Students will build responsive, interactive websites and a React-powered web app.",
  "duration": "7 Modules | ~12 Weeks",
  "level": "Beginner – No experience required",
  "comingSoon": false,
  "playlists": {
    "html": "https://www.youtube.com/playlist?list=PL4cUxeGkcC9ibZ2TSBaGGNrgh4ZgYE6Cc",
    "css_basics": "https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQeDH6xYika1-UP60arkbX",
    "css_positioning": "https://www.youtube.com/playlist?list=PL4cUxeGkcC9guxdK2A3Zaj3N1sc9ZiswZ",
    "css_flexbox": "https://www.youtube.com/playlist?list=PL4cUxeGkcC9i371QO_Rt_814IeE0X6b6b",
    "javascript": "https://www.youtube.com/playlist?list=PL4cUxeGkcC9i9aeJcx65OOpvCDvfZ3U8O",
    "git": "https://www.youtube.com/playlist?list=PL4cUxeGkcC9g8O48y00vPlY_R8H1TclP3"
  },
  "source": "The Net Ninja (YouTube)",
  "modules": [
    {
      "id": "module_1",
      "title": "Module 1",
      "subtitle": "Introduction to Web Development & HTML Basics",
      "description": "Foundational web mechanics, document architecture, and building your first structural webpage elements.",
      "lessons": [
        {
          "id": "fv1.1",
          "videoTitle": "HTML Tutorial for Beginners 01 - HTML Introduction",
          "duration": "2:30",
          "url": "https://www.youtube.com/watch?v=Y1BlT4_c_SU",
          "tasks": [
            "Construct HTML document elements and tags to structure your page content."
          ]
        },
        {
          "id": "fv1.2",
          "videoTitle": "HTML Tutorial for Beginners 02 - What is HTML?",
          "duration": "6:08",
          "url": "https://www.youtube.com/watch?v=chx9Rs41W6g",
          "tasks": [
            "Construct HTML document elements and tags to structure your page content."
          ]
        },
        {
          "id": "fv1.3",
          "videoTitle": "HTML Tutorial for Beginners 03 - HTML Syntax & Structure",
          "duration": "13:10",
          "url": "https://www.youtube.com/watch?v=2r82W8S0_G8",
          "tasks": [
            "Construct HTML document elements and tags to structure your page content."
          ]
        },
        {
          "id": "fv1.4",
          "videoTitle": "HTML Tutorial for Beginners 04 - Your First Web Page",
          "duration": "9:36",
          "url": "https://www.youtube.com/watch?v=y3gV9_z0bO0",
          "tasks": [
            "Construct HTML document elements and tags to structure your page content."
          ]
        },
        {
          "id": "fv1.5",
          "videoTitle": "HTML Tutorial for Beginners 05 - Head and Body Tag",
          "duration": "7:23",
          "url": "https://www.youtube.com/watch?v=u8M70yA-fGg",
          "tasks": [
            "Construct HTML document elements and tags to structure your page content."
          ]
        },
        {
          "id": "fv1.6",
          "videoTitle": "HTML Tutorial for Beginners 06 - Headings and Text",
          "duration": "8:19",
          "url": "https://www.youtube.com/watch?v=T_8N_wS864E",
          "tasks": [
            "Construct HTML document elements and tags to structure your page content."
          ]
        },
        {
          "id": "fv1.7",
          "videoTitle": "HTML Tutorial for Beginners 07 - Heading Structure",
          "duration": "5:48",
          "url": "https://www.youtube.com/watch?v=mY7_92M2WjU",
          "tasks": [
            "Construct HTML document elements and tags to structure your page content."
          ]
        },
        {
          "id": "fv1.8",
          "videoTitle": "HTML Tutorial for Beginners 08 - Default Browser Styles",
          "duration": "3:41",
          "url": "https://www.youtube.com/watch?v=E-5bVf-RPhU",
          "tasks": [
            "Construct HTML document elements and tags to structure your page content."
          ]
        }
      ],
      "assignment": {
        "title": "The Portfolio Blueprint",
        "objective": "Code a fully semantic, multi-heading layout for a professional developer profile without any custom styling.",
        "steps": [
          "Initialize the File: Create an index.html file. Establish a standard structural declaration matching the correct modern syntax baseline (<!DOCTYPE html>, <html>, <head>, <body>).",
          "Metadata Setup: Inside the <head>, define an appropriate page title ('My Developer Journey') and specify the viewport meta settings for proper mobile translation.",
          "Primary Structure: Create a top-level section featuring a main profile title. Directly underneath, construct a short biography section using a nested, descriptive text element.",
          "Skills Mapping: Use an appropriate, clear sub-heading level to create a section titled 'Core Stack'. List out three technologies using a structural component that visually groups items with sequential markers.",
          "Separation Elements: Insert a clean text break using a thematic horizontal line to separate the profile intro from a project timeline block below."
        ],
        "hints": [
          "Make sure your semantic hierarchy flows cleanly downstream (i.e., don't jump directly from your main top-level page heading to a highly specific subsection heading without utilizing the stepping elements between them).",
          "Remember that browsers apply certain built-in margin and line-height patterns to lists and text elements by default. Do not worry if things look plain; focus purely on a logical information document structure."
        ]
      }
    },
    {
      "id": "module_2",
      "title": "Module 2",
      "subtitle": "Advanced HTML Elements & Foundations of CSS",
      "description": "Enriching content layouts with media, links, and styling integrations, alongside an introduction to the Cascade and selectors.",
      "lessons": [
        {
          "id": "fv2.1",
          "videoTitle": "HTML Tutorial for Beginners 09 - The img Tag",
          "duration": "6:13",
          "url": "https://www.youtube.com/watch?v=IC538_fSod0",
          "tasks": [
            "Incorporate structural blocks, class attributes, images, and external CSS references."
          ]
        },
        {
          "id": "fv2.2",
          "videoTitle": "HTML Tutorial for Beginners 10 - HTML Links",
          "duration": "12:25",
          "url": "https://www.youtube.com/watch?v=Z46GvD8Iid8",
          "tasks": [
            "Incorporate structural blocks, class attributes, images, and external CSS references."
          ]
        },
        {
          "id": "fv2.3",
          "videoTitle": "HTML Tutorial for Beginners 11 - HTML Lists",
          "duration": "8:06",
          "url": "https://www.youtube.com/watch?v=09oE4u6X9EE",
          "tasks": [
            "Incorporate structural blocks, class attributes, images, and external CSS references."
          ]
        },
        {
          "id": "fv2.4",
          "videoTitle": "HTML Tutorial for Beginners 12 - HR and BR Tags",
          "duration": "3:26",
          "url": "https://www.youtube.com/watch?v=xkF-cKpzREU",
          "tasks": [
            "Incorporate structural blocks, class attributes, images, and external CSS references."
          ]
        },
        {
          "id": "fv2.5",
          "videoTitle": "HTML Tutorial for Beginners 13 - The div Tag",
          "duration": "4:52",
          "url": "https://www.youtube.com/watch?v=Yf78u6XonS0",
          "tasks": [
            "Incorporate structural blocks, class attributes, images, and external CSS references."
          ]
        },
        {
          "id": "fv2.6",
          "videoTitle": "HTML Tutorial for Beginners 14 - ID's and Classes",
          "duration": "8:14",
          "url": "https://www.youtube.com/watch?v=TAsE2_g_6l8",
          "tasks": [
            "Incorporate structural blocks, class attributes, images, and external CSS references."
          ]
        },
        {
          "id": "fv2.7",
          "videoTitle": "HTML Tutorial for Beginners 15 - Adding CSS to HTML",
          "duration": "9:34",
          "url": "https://www.youtube.com/watch?v=fXWvY_b5jGg",
          "tasks": [
            "Incorporate structural blocks, class attributes, images, and external CSS references."
          ]
        },
        {
          "id": "fv2.8",
          "videoTitle": "HTML Tutorial for Beginners 16 - Adding JavaScript to HTML",
          "duration": "9:42",
          "url": "https://www.youtube.com/watch?v=9_t6N8bSgB8",
          "tasks": [
            "Incorporate structural blocks, class attributes, images, and external CSS references."
          ]
        },
        {
          "id": "fv2.9",
          "videoTitle": "HTML Tutorial for Beginners 17 - What To Do Next",
          "duration": "3:32",
          "url": "https://www.youtube.com/watch?v=3u_C9pG8FpY",
          "tasks": [
            "Incorporate structural blocks, class attributes, images, and external CSS references."
          ]
        },
        {
          "id": "fv2.10",
          "videoTitle": "CSS Tutorial For Beginners 01 - Introduction to CSS",
          "duration": "2:15",
          "url": "https://www.youtube.com/watch?v=qKoajPPWpmo",
          "tasks": [
            "Incorporate structural blocks, class attributes, images, and external CSS references."
          ]
        },
        {
          "id": "fv2.11",
          "videoTitle": "CSS Tutorial For Beginners - What is CSS?",
          "duration": "4:44",
          "url": "https://www.youtube.com/watch?v=CHL_W_u6u_s",
          "tasks": [
            "Incorporate structural blocks, class attributes, images, and external CSS references."
          ]
        },
        {
          "id": "fv2.12",
          "videoTitle": "CSS Tutorial For Beginners 03 - Default Browser Styles",
          "duration": "4:47",
          "url": "https://www.youtube.com/watch?v=ZJpU_nF3w58",
          "tasks": [
            "Incorporate structural blocks, class attributes, images, and external CSS references."
          ]
        },
        {
          "id": "fv2.13",
          "videoTitle": "CSS Tutorial For Beginners 04 - Basic CSS Syntax",
          "duration": "8:02",
          "url": "https://www.youtube.com/watch?v=UqNHe3uSAn8",
          "tasks": [
            "Incorporate structural blocks, class attributes, images, and external CSS references."
          ]
        },
        {
          "id": "fv2.14",
          "videoTitle": "CSS Tutorial For Beginners 05 - Inline & Embedded Styles",
          "duration": "9:30",
          "url": "https://www.youtube.com/watch?v=A_0fJvG-Y-g",
          "tasks": [
            "Incorporate structural blocks, class attributes, images, and external CSS references."
          ]
        },
        {
          "id": "fv2.15",
          "videoTitle": "CSS Tutorial For Beginners 06 - External Style Sheets",
          "duration": "5:38",
          "url": "https://www.youtube.com/watch?v=7M7gL0gqK9g",
          "tasks": [
            "Incorporate structural blocks, class attributes, images, and external CSS references."
          ]
        },
        {
          "id": "fv2.16",
          "videoTitle": "CSS Tutorial For Beginners 07 - CSS Comments and Where to Use Them",
          "duration": "4:41",
          "url": "https://www.youtube.com/watch?v=q6b_R4n6EAs",
          "tasks": [
            "Incorporate structural blocks, class attributes, images, and external CSS references."
          ]
        }
      ],
      "assignment": {
        "title": "The Interactive Media Card",
        "objective": "Enhance your HTML document with functional routing and media layouts, then implement an embedded or external styling layer to clear user-agent defaults.",
        "steps": [
          "Directory Tree Organization: Create a dedicated style sheet document in your workspace and reference it inside your document header element.",
          "Generic Container Block: Wrap your profile section in a standalone spatial division block. Assign it a reusable identifier tag via a class selector.",
          "Media Integration: Place an image into your container. Configure a fallback textual description within the element to ensure accessibility compliance if the source asset drops.",
          "Anchor Routing: Build a clean navigation layout underneath using text nodes wrapped in explicit hyperlink elements that route out to external resource hubs.",
          "Initial Style Mapping: Write selectors targeting your container class. Apply direct background tone modifications and clear out the default baseline spacing margins injected by the browser."
        ],
        "hints": [
          "If your text elements are sticking directly to the absolute outer edge of your visual background wrapper, you need to configure modern structural constraints using spacing properties that push inward from the boundary.",
          "When adding class tags, select highly clear, descriptive semantic naming patterns (e.g., use '.profile-card' rather than a generic tag like '.box1')."
        ]
      }
    },
    {
      "id": "module_3",
      "title": "Module 3",
      "subtitle": "CSS Specificity, Rule Hierarchies & Text Styling",
      "description": "Mastering the rules of inheritance, priority mapping, element targeting variations, and comprehensive text typography.",
      "lessons": [
        {
          "id": "fv3.1",
          "videoTitle": "CSS Tutorial For Beginners 08 - Targeting Elements with CSS",
          "duration": "4:29",
          "url": "https://www.youtube.com/watch?v=fG9A6eY5C6s",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.2",
          "videoTitle": "CSS Tutorial For Beginners 09 - Targeting Classes and ID's",
          "duration": "7:25",
          "url": "https://www.youtube.com/watch?v=3R4jS8_fS6k",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.3",
          "videoTitle": "CSS Tutorial For Beginners 10 - CSS Conflicts & the Cascade",
          "duration": "8:05",
          "url": "https://www.youtube.com/watch?v=gTf9A-G-wS8",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.4",
          "videoTitle": "CSS Tutorial For Beginners 11 - Inheritance",
          "duration": "8:48",
          "url": "https://www.youtube.com/watch?v=L5K8b_6Y_C0",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.5",
          "videoTitle": "CSS Tutorial For Beginners 12 - Selector Specificity",
          "duration": "10:18",
          "url": "https://www.youtube.com/watch?v=Xw0pW36U_Hk",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.6",
          "videoTitle": "CSS Tutorial For Beginners 13 - The Important Declaration",
          "duration": "5:40",
          "url": "https://www.youtube.com/watch?v=5V56E8aBvNk",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.7",
          "videoTitle": "CSS Tutorial For Beginners 14 - Targeting Multiple Elements",
          "duration": "4:41",
          "url": "https://www.youtube.com/watch?v=6m-bW_wY7_s",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.8",
          "videoTitle": "CSS Tutorial For Beginners 15 - Descendant Selectors",
          "duration": "6:23",
          "url": "https://www.youtube.com/watch?v=gN8_R3Q6F9s",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.9",
          "videoTitle": "CSS Tutorial For Beginners 16 - Child Selectors",
          "duration": "3:46",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5Fk",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.10",
          "videoTitle": "CSS Tutorial For Beginners 17 - Adjacent Selectors",
          "duration": "4:21",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5Fm",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.11",
          "videoTitle": "CSS Tutorial For Beginners 18 - Attribute Selectors",
          "duration": "10:39",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5Fn",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.12",
          "videoTitle": "CSS Tutorial For Beginners 19 - Pseudo Selectors",
          "duration": "5:39",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5Fo",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.13",
          "videoTitle": "CSS Tutorial For Beginners 20 - Hover, Active & Visited Effects",
          "duration": "4:18",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5Fp",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.14",
          "videoTitle": "CSS Tutorial For Beginners 21 - First & Last Child Selectors",
          "duration": "5:32",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5Fq",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.15",
          "videoTitle": "CSS Tutorial For Beginners 22 - First & Last of Type Selectors",
          "duration": "3:54",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5Fr",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.16",
          "videoTitle": "CSS Tutorial For Beginners 23 - nth Child Selectors",
          "duration": "8:12",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5Fs",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.17",
          "videoTitle": "CSS Tutorial For Beginners 24 - nth of Type Selectors",
          "duration": "5:43",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5Ft",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.18",
          "videoTitle": "CSS Tutorial For Beginners 25 - Combining Selectors",
          "duration": "4:00",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5Fu",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.19",
          "videoTitle": "CSS Tutorial For Beginners 26 - The Universal Selector",
          "duration": "7:15",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5Vv",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.20",
          "videoTitle": "CSS Tutorial For Beginners 27 - Font Size",
          "duration": "8:00",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5Fw",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.21",
          "videoTitle": "CSS Tutorial For Beginners 28 - Font Family",
          "duration": "5:27",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5Fx",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.22",
          "videoTitle": "CSS Tutorial For Beginners 29 - Text Decoration",
          "duration": "4:52",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5Fy",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.23",
          "videoTitle": "CSS Tutorial For Beginners 30 - Font Weight",
          "duration": "8:15",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5Fz",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.24",
          "videoTitle": "CSS Tutorial For Beginners 31 - Text Transform",
          "duration": "5:01",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5G1",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.25",
          "videoTitle": "CSS Tutorial For Beginners 32 - Text Colour",
          "duration": "5:33",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5G2",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.26",
          "videoTitle": "CSS Tutorial For Beginners 33 - Styling Links",
          "duration": "4:36",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5G3",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.27",
          "videoTitle": "CSS Tutorial For Beginners 34 - Letter Spacing & Line Height",
          "duration": "9:05",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5G4",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        },
        {
          "id": "fv3.28",
          "videoTitle": "CSS Tutorial For Beginners 35 - Paragraph Spacing",
          "duration": "3:47",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5G5",
          "tasks": [
            "Apply element selectors, class hierarchies, and type spacing parameters."
          ]
        }
      ],
      "assignment": {
        "title": "Typography Layout & Selector Hierarchies",
        "objective": "Build a complex, multi-layered text column section and use descendant, structural, and attribute selectors to handle rule priority mapping without resorting to destructive global modifiers.",
        "steps": [
          "Generate Content Fields: Build three sibling paragraphs inside a shared semantic article wrapper. Ensure one paragraph contains a distinct hyperlink element.",
          "Descendant Targeting: Write a style rule using a descendant selector pattern that strictly adjusts the typography weight and color of an anchor tag only if it lives inside that specific article wrapper.",
          "Pseudo-State Interaction: Add smooth behavioral style transitions that alter color parameters immediately whenever a cursor tracks dynamically over the anchor element.",
          "Structural Array Targeting: Create a rule using a structural pseudo-class selector that targets the absolute first elements in your text block to render them in a slightly larger text size.",
          "Handling Rule Collisions: Purposely write two matching style blocks that target the same font family property. Observe how order priority executes downstream. Resolve the structural collision cleanly using explicit class inheritance, without relying on override declarations."
        ],
        "hints": [
          "Refrain from appending the destructive !important rule block to force styling priorities. If an attribute refuses to change, trace your structural selector weight inside your workspace or using dev tools.",
          ":first-child targets an element if it is the absolute first child of its parent container, whereas :first-of-type matches the first instance of that specific tag among its siblings. Choose your target approach carefully."
        ]
      }
    },
    {
      "id": "module_4",
      "title": "Module 4",
      "subtitle": "The CSS Box Model, Styling Elements & Layout Deployments",
      "description": "Working with dimensions, borders, visibility fields, shadows, gradients, and practical structural project assemblies.",
      "lessons": [
        {
          "id": "fv4.1",
          "videoTitle": "CSS Tutorial For Beginners 36 - The Box Model",
          "duration": "9:28",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5G6",
          "tasks": [
            "Apply margins, borders, paddings, and shadows within your page layout."
          ]
        },
        {
          "id": "fv4.2",
          "videoTitle": "CSS Tutorial For Beginners 37 - Margins",
          "duration": "10:39",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5G7",
          "tasks": [
            "Apply margins, borders, paddings, and shadows within your page layout."
          ]
        },
        {
          "id": "fv4.3",
          "videoTitle": "CSS Tutorial For Beginners 38 - Padding",
          "duration": "4:42",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5G8",
          "tasks": [
            "Apply margins, borders, paddings, and shadows within your page layout."
          ]
        },
        {
          "id": "fv4.4",
          "videoTitle": "CSS Tutorial For Beginners 39 - Padding & Margin Long-hand",
          "duration": "3:58",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5G9",
          "tasks": [
            "Apply margins, borders, paddings, and shadows within your page layout."
          ]
        },
        {
          "id": "fv4.5",
          "videoTitle": "CSS Tutorial For Beginners 40 - Borders",
          "duration": "6:48",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5H1",
          "tasks": [
            "Apply margins, borders, paddings, and shadows within your page layout."
          ]
        },
        {
          "id": "fv4.6",
          "videoTitle": "CSS Tutorial For Beginners 41 - Block-level Elements",
          "duration": "11:09",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5H2",
          "tasks": [
            "Apply margins, borders, paddings, and shadows within your page layout."
          ]
        },
        {
          "id": "fv4.7",
          "videoTitle": "CSS Tutorial For Beginners 42 - Width & Height",
          "duration": "6:27",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5H3",
          "tasks": [
            "Apply margins, borders, paddings, and shadows within your page layout."
          ]
        },
        {
          "id": "fv4.8",
          "videoTitle": "CSS Tutorial For Beginners 43 - Rounded Corners",
          "duration": "7:21",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5H4",
          "tasks": [
            "Apply margins, borders, paddings, and shadows within your page layout."
          ]
        },
        {
          "id": "fv4.9",
          "videoTitle": "CSS Tutorial For Beginners 44 - Backgrounds",
          "duration": "9:03",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5H5",
          "tasks": [
            "Apply margins, borders, paddings, and shadows within your page layout."
          ]
        },
        {
          "id": "fv4.10",
          "videoTitle": "CSS Tutorial For Beginners 45 - Background Shorthand",
          "duration": "4:01",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5H6",
          "tasks": [
            "Apply margins, borders, paddings, and shadows within your page layout."
          ]
        },
        {
          "id": "fv4.11",
          "videoTitle": "CSS Tutorial For Beginners 46 - Multiple Backgrounds",
          "duration": "4:59",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5H7",
          "tasks": [
            "Apply margins, borders, paddings, and shadows within your page layout."
          ]
        },
        {
          "id": "fv4.12",
          "videoTitle": "CSS Tutorial For Beginners 47 - Color",
          "duration": "6:29",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5H8",
          "tasks": [
            "Apply margins, borders, paddings, and shadows within your page layout."
          ]
        },
        {
          "id": "fv4.13",
          "videoTitle": "CSS Tutorial For Beginners 48 - Opacity",
          "duration": "7:12",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5H9",
          "tasks": [
            "Apply margins, borders, paddings, and shadows within your page layout."
          ]
        },
        {
          "id": "fv4.14",
          "videoTitle": "CSS Tutorial For Beginners 49 -  CSS Gradients",
          "duration": "9:07",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5J1",
          "tasks": [
            "Apply margins, borders, paddings, and shadows within your page layout."
          ]
        },
        {
          "id": "fv4.15",
          "videoTitle": "CSS Tutorial For Beginners 50 - Box Shadow",
          "duration": "4:26",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5J2",
          "tasks": [
            "Apply margins, borders, paddings, and shadows within your page layout."
          ]
        },
        {
          "id": "fv4.16",
          "videoTitle": "CSS Tutorial For Beginners 51 - Browser Support",
          "duration": "6:39",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5J3",
          "tasks": [
            "Apply margins, borders, paddings, and shadows within your page layout."
          ]
        },
        {
          "id": "fv4.17",
          "videoTitle": "CSS Tutorial For Beginners 52 - CSS Website Build Part 1",
          "duration": "9:35",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5J4",
          "tasks": [
            "Apply margins, borders, paddings, and shadows within your page layout."
          ]
        },
        {
          "id": "fv4.18",
          "videoTitle": "CSS Tutorial For Beginners 53 - CSS Website Build Part 2",
          "duration": "8:11",
          "url": "https://www.youtube.com/watch?v=6B-B6D-A5J5",
          "tasks": [
            "Apply margins, borders, paddings, and shadows within your page layout."
          ]
        }
      ],
      "assignment": {
        "title": "The Box Model Profile Component",
        "objective": "Engineering an exact visual interface using margin mathematics, padding parameters, custom linear gradients, and layer drop shadows.",
        "steps": [
          "Box Dimensioning Setup: Author a class called .card-container. Explicitly set its geometric horizontal and vertical dimensions.",
          "Internal Spacing Matrix: Add internal clearance padding so text doesn't touch the borders. Configure precise outward margin values to center the entire container cleanly in the middle of the viewport.",
          "Border Styling Execution: Construct a solid outline path around your box container, incorporating subtle curvature transitions at the corner vertices.",
          "Complex Background Gradients: Configure a dual-tone background transition setting that flows diagonally across the container canvas.",
          "Drop Shadow Articulation: Apply an offset shadow matrix underneath the layout layer to lift the card element visually off the base viewport plane."
        ],
        "hints": [
          "By default, adding extra padding parameters pushes your overall container sizing out larger than your baseline defined dimensions. If this throws off your layouts, adjust how the box calculations are managed globally.",
          "Keep your shadow blur values soft and subtle. A harsh, pitch-black drop shadow often detracts from standard, clean interface designs."
        ]
      }
    },
    {
      "id": "module_5",
      "title": "Module 5",
      "subtitle": "Advanced Layouts: Positioning & CSS Flexbox",
      "description": "Mastering regular layouts vs float states, clear fixes, relative/absolute positioning parameters, and modern Flexbox UI systems.",
      "lessons": [
        {
          "id": "fv5.1",
          "videoTitle": "CSS Positioning Tutorial #1 - Introduction",
          "duration": "2:18",
          "url": "https://www.youtube.com/watch?v=7_tZpZgV0Gg",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.2",
          "videoTitle": "CSS Positioning Tutorial #2 - Box Model Review",
          "duration": "5:58",
          "url": "https://www.youtube.com/watch?v=aG-VvG-XNRE",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.3",
          "videoTitle": "CSS Positioning Tutorial #3 - Normal Document Flow",
          "duration": "3:06",
          "url": "https://www.youtube.com/watch?v=E7v4QGfLw8c",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.4",
          "videoTitle": "CSS Positioning Tutorial #4 - Floating Elements",
          "duration": "10:12",
          "url": "https://www.youtube.com/watch?v=x7E2D6xH66E",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.5",
          "videoTitle": "CSS Positioning Tutorial #5 - Clearing Floats",
          "duration": "8:51",
          "url": "https://www.youtube.com/watch?v=7yR6Z7Gk5RE",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.6",
          "videoTitle": "CSS Positioning Tutorial #6 - Floating Columns",
          "duration": "5:07",
          "url": "https://www.youtube.com/watch?v=E7v4QGfLw9a",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.7",
          "videoTitle": "CSS Positioning Tutorial #7 - Text Columns",
          "duration": "3:45",
          "url": "https://www.youtube.com/watch?v=E7v4QGfLw9b",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.8",
          "videoTitle": "CSS Positioning Tutorial #8 - Position Relative",
          "duration": "4:58",
          "url": "https://www.youtube.com/watch?v=E7v4QGfLw9c",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.9",
          "videoTitle": "CSS Positioning Tutorial #9 - Absolute Position",
          "duration": "5:22",
          "url": "https://www.youtube.com/watch?v=E7v4QGfLw9d",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.10",
          "videoTitle": "CSS Positioning Tutorial #10 - Fixed Position",
          "duration": "4:35",
          "url": "https://www.youtube.com/watch?v=E7v4QGfLw9e",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.11",
          "videoTitle": "CSS Positioning Tutorial #11 - Z - Index & Stacking Order",
          "duration": "8:32",
          "url": "https://www.youtube.com/watch?v=E7v4QGfLw9f",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.12",
          "videoTitle": "CSS Positioning Tutorial #12 - Clipping Content",
          "duration": "4:46",
          "url": "https://www.youtube.com/watch?v=E7v4QGfLw9g",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.13",
          "videoTitle": "CSS Flexbox Tutorial #1 - Introduction",
          "duration": "5:18",
          "url": "https://www.youtube.com/watch?v=qD97z88P6uM",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.14",
          "videoTitle": "CSS Flexbox Tutorial #2 - Flex Containers",
          "duration": "6:27",
          "url": "https://www.youtube.com/watch?v=7-qWlhWnS6c",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.15",
          "videoTitle": "CSS Flexbox Tutorial #3 - Flex Grow",
          "duration": "4:59",
          "url": "https://www.youtube.com/watch?v=wz33CgI3E2k",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.16",
          "videoTitle": "CSS Flexbox Tutorial #4 - Flex Shrink",
          "duration": "4:10",
          "url": "https://www.youtube.com/watch?v=68E6A6LwX6E",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.17",
          "videoTitle": "CSS Flexbox Tutorial #5 - Flex Wrap",
          "duration": "4:43",
          "url": "https://www.youtube.com/watch?v=7yR6Z7Gk5RF",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.18",
          "videoTitle": "CSS Flexbox Tutorial #6 - Flex Basis",
          "duration": "5:02",
          "url": "https://www.youtube.com/watch?v=7yR6Z7Gk5RG",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.19",
          "videoTitle": "CSS Flexbox Tutorial #7 - Creating a Menu with Flexbox",
          "duration": "8:03",
          "url": "https://www.youtube.com/watch?v=7yR6Z7Gk5RH",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.20",
          "videoTitle": "CSS Flexbox Tutorial #8 - Creating Nested Menu's with Flexbox",
          "duration": "8:10",
          "url": "https://www.youtube.com/watch?v=7yR6Z7Gk5RI",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.21",
          "videoTitle": "CSS Flexbox Tutorial #9 - Axis",
          "duration": "6:44",
          "url": "https://www.youtube.com/watch?v=7yR6Z7Gk5RJ",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.22",
          "videoTitle": "CSS Flexbox Tutorial #10 - Align Items on the Cross Axis",
          "duration": "4:42",
          "url": "https://www.youtube.com/watch?v=7yR6Z7Gk5RK",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.23",
          "videoTitle": "CSS Flexbox Tutorial #11 - Grid vs Stacked Layout Example",
          "duration": "9:04",
          "url": "https://www.youtube.com/watch?v=7yR6Z7Gk5RL",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        },
        {
          "id": "fv5.24",
          "videoTitle": "CSS Flexbox Tutorial #12 - Element Order",
          "duration": "4:27",
          "url": "https://www.youtube.com/watch?v=7yR6Z7Gk5RM",
          "tasks": [
            "Apply relative/absolute coordinates or Flexbox containers to structure elements."
          ]
        }
      ],
      "assignment": {
        "title": "The Flexbox Navigation Dashboard",
        "objective": "Migrate from legacy document structures or layout floats to a highly fluid, modern flex container layout that responds across diverse horizontal planes.",
        "steps": [
          "Flex Environment Initialization: Create a functional top navigation bar wrapper element containing four structural navigation links. Convert the parent wrapper element into a flexible layout context.",
          "Main-Axis Alignment: Configure alignment parameters across the primary flow path to distribute the navigation items with even air gaps between them.",
          "Cross-Axis Verification: Set vertical cross-axis rules to ensure all items align dead-center vertically, regardless of variations in element heights.",
          "Dynamic Item Expansion: Configure grow parameters on a specific search item link so it actively scales to fill out remaining empty spaces on the layout line.",
          "Ordering Operations: Without touching or rearranging your raw HTML source markup sequence, write an explicit order remapping property to force a link from the middle to display at the absolute front of the line."
        ],
        "hints": [
          "justify-content controls your alignment along the primary structural direction axis, while align-items directs behavior along the opposing intersection vector.",
          "Always ensure your parent element has its display model set to a flex state before trying to use child tracking attributes like flex-grow or order."
        ]
      }
    },
    {
      "id": "module_6",
      "title": "Module 6",
      "subtitle": "Project Control Management & Git Operations",
      "description": "Mastering command line environments, tracking indices, version rolling, ignore policies, code branching systems, and resolution configurations.",
      "lessons": [
        {
          "id": "fv6.1",
          "videoTitle": "Git Crash Course #1 - Introduction & Setup",
          "duration": "20:04",
          "url": "https://www.youtube.com/watch?v=4okmgMzPwZ8",
          "tasks": [
            "Execute Git version control commits, check tracking statuses, and merge branch files."
          ]
        },
        {
          "id": "fv6.2",
          "videoTitle": "Git Crash Course #2 - Command Line Basics",
          "duration": "12:44",
          "url": "https://www.youtube.com/watch?v=7M7gL0gqK9h",
          "tasks": [
            "Execute Git version control commits, check tracking statuses, and merge branch files."
          ]
        },
        {
          "id": "fv6.3",
          "videoTitle": "Git Crash Course #3 - Making a New Git Repository",
          "duration": "4:31",
          "url": "https://www.youtube.com/watch?v=7M7gL0gqK9i",
          "tasks": [
            "Execute Git version control commits, check tracking statuses, and merge branch files."
          ]
        },
        {
          "id": "fv6.4",
          "videoTitle": "Git Crash Course #4 - Staging Files",
          "duration": "6:38",
          "url": "https://www.youtube.com/watch?v=7M7gL0gqK9j",
          "tasks": [
            "Execute Git version control commits, check tracking statuses, and merge branch files."
          ]
        },
        {
          "id": "fv6.5",
          "videoTitle": "Git Crash Course #5 - Making Your First Commits",
          "duration": "12:34",
          "url": "https://www.youtube.com/watch?v=7M7gL0gqK9k",
          "tasks": [
            "Execute Git version control commits, check tracking statuses, and merge branch files."
          ]
        },
        {
          "id": "fv6.6",
          "videoTitle": "Git Crash Course #6 - Deleting & Untracking Files",
          "duration": "5:20",
          "url": "https://www.youtube.com/watch?v=7M7gL0gqK9l",
          "tasks": [
            "Execute Git version control commits, check tracking statuses, and merge branch files."
          ]
        },
        {
          "id": "fv6.7",
          "videoTitle": "Git Crash Course #7 - Viewing the Project History",
          "duration": "6:09",
          "url": "https://www.youtube.com/watch?v=7M7gL0gqK9m",
          "tasks": [
            "Execute Git version control commits, check tracking statuses, and merge branch files."
          ]
        },
        {
          "id": "fv6.8",
          "videoTitle": "Git Crash Course #8 - Undoing Changes",
          "duration": "8:20",
          "url": "https://www.youtube.com/watch?v=7M7gL0gqK9n",
          "tasks": [
            "Execute Git version control commits, check tracking statuses, and merge branch files."
          ]
        },
        {
          "id": "fv6.9",
          "videoTitle": "Git Crash Course #9 - .gitignore File",
          "duration": "5:45",
          "url": "https://www.youtube.com/watch?v=7M7gL0gqK9o",
          "tasks": [
            "Execute Git version control commits, check tracking statuses, and merge branch files."
          ]
        },
        {
          "id": "fv6.10",
          "videoTitle": "Git Crash Course #10 - Git Features in VS Code",
          "duration": "6:22",
          "url": "https://www.youtube.com/watch?v=7M7gL0gqK9p",
          "tasks": [
            "Execute Git version control commits, check tracking statuses, and merge branch files."
          ]
        },
        {
          "id": "fv6.11",
          "videoTitle": "Git Crash Course #11 - Understanding Branches",
          "duration": "5:42",
          "url": "https://www.youtube.com/watch?v=7M7gL0gqK9q",
          "tasks": [
            "Execute Git version control commits, check tracking statuses, and merge branch files."
          ]
        },
        {
          "id": "fv6.12",
          "videoTitle": "Git Crash Course #12 - Switching Between Branches",
          "duration": "10:58",
          "url": "https://www.youtube.com/watch?v=7M7gL0gqK9r",
          "tasks": [
            "Execute Git version control commits, check tracking statuses, and merge branch files."
          ]
        },
        {
          "id": "fv6.13",
          "videoTitle": "Git Crash Course #13 - Merging Branches",
          "duration": "4:38",
          "url": "https://www.youtube.com/watch?v=7M7gL0gqK9s",
          "tasks": [
            "Execute Git version control commits, check tracking statuses, and merge branch files."
          ]
        },
        {
          "id": "fv6.14",
          "videoTitle": "Git Crash Course #14 - Deleting Branches",
          "duration": "6:08",
          "url": "https://www.youtube.com/watch?v=7M7gL0gqK9t",
          "tasks": [
            "Execute Git version control commits, check tracking statuses, and merge branch files."
          ]
        }
      ],
      "assignment": {
        "title": "The Versioned Web Repository",
        "objective": "Initialize source version tracking over your local project workspace, perform branching operations, roll back file modifications, and stage historical commits via the terminal.",
        "steps": [
          "Initialize Tracking: Open your terminal path directly within your project workspace folder. Initialize a clean repository architecture.",
          "Indexing Operations: Create a .gitignore configuration document. Explicitly block system file structures or cache artifacts from being swept into tracking records. Check your current tracking states.",
          "Staging & Historical Log 1: Package your core structural profile assets into the tracking index. Commit this collection to the system timeline history with an explicit, semantic tracking comment.",
          "Branching Workflows: Spawn a distinct, standalone feature branch titled 'experimental-styles'. Move your terminal tracking context over to this branch safely.",
          "Modification & Branch Destruction: Add an experimental class into your code and execute a commit on your feature branch. Switch back to your primary production branch. Merge the feature changes in seamlessly. Afterward, delete the feature branch wrapper cleanly."
        ],
        "hints": [
          "Always verify your exact repository context and path location using status checks before writing staging or commit commands.",
          "If you run into merge block states or file conflicts, look for the inline markers inserted into the code by your source tracking tool. Cleanly pick the correct code blocks manually, save, and finalize your update step."
        ]
      }
    },
    {
      "id": "module_7",
      "title": "Module 7",
      "subtitle": "JavaScript Essentials, Modern Logic & DOM Engineering",
      "description": "Comprehensive program orchestration: variables, evaluation streams, control structures, functions, scope limits, entity states, event monitors, and dynamic interface alterations.",
      "lessons": [
        {
          "id": "fv7.1",
          "videoTitle": "JavaScript Tutorial For Beginners 01 - Introduction",
          "duration": "3:41",
          "url": "https://www.youtube.com/watch?v=qC_ZfWf0uK0",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.2",
          "videoTitle": "JavaScript for Beginners 02 - What is JavaScript?",
          "duration": "4:04",
          "url": "https://www.youtube.com/watch?v=U8XF698wV_w",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.3",
          "videoTitle": "JavaScript Tutorial For Beginners 03 - Hello World! in JavaScript",
          "duration": "3:18",
          "url": "https://www.youtube.com/watch?v=7E84g9E8XwY",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.4",
          "videoTitle": "New Modern JavaScript Update",
          "duration": "0:52",
          "url": "https://www.youtube.com/watch?v=pG-aI6gM_S8",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.5",
          "videoTitle": "JavaScript Tutorial For Beginners #4 - Where to put your JS",
          "duration": "5:14",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_A",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.6",
          "videoTitle": "JavaScript Tutorial For Beginners #5 - Google Chrome Developer Tools",
          "duration": "4:52",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_B",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.7",
          "videoTitle": "JavaScript Tutorial For Beginners #6 - Basic JavaScript Syntax & Rules",
          "duration": "7:50",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_C",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.8",
          "videoTitle": "JavaScript Tutorial For Beginners #7 - JavaScript Variables",
          "duration": "9:00",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_D",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.9",
          "videoTitle": "JavaScript Tutorial For Beginners #8 - Basic Mathematical Operators",
          "duration": "6:17",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_E",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.10",
          "videoTitle": "JavaScript Tutorial For Beginners #9 - Math Operator Short-hand",
          "duration": "4:56",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_F",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.11",
          "videoTitle": "JavaScript Tutorial For Beginners #10 - Logging to the Console",
          "duration": "3:40",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_G",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.12",
          "videoTitle": "JavaScript Tutorial For Beginners #11 - Booleans in JavaScript",
          "duration": "6:14",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_H",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.13",
          "videoTitle": "JavaScript Tutorial For Beginners #12 - If Statements",
          "duration": "8:46",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_I",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.14",
          "videoTitle": "JavaScript Tutorial For Beginners #13 - Else If Statements",
          "duration": "4:04",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_J",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.15",
          "videoTitle": "JavaScript Tutorial For Beginners #14 - Comparison Operators",
          "duration": "5:26",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_K",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.16",
          "videoTitle": "JavaScript Tutorial For Beginners #15 - Logical Operators",
          "duration": "6:02",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_L",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.17",
          "videoTitle": "JavaScript Tutorial For Beginners #16 - While Loops",
          "duration": "4:10",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_M",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.18",
          "videoTitle": "JavaScript Tutorial For Beginners #17 - For Loops",
          "duration": "7:50",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_N",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.19",
          "videoTitle": "JavaScript Tutorial For Beginners #18 - Break & Continue",
          "duration": "4:14",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_O",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.20",
          "videoTitle": "JavaScript Tutorial For Beginners 19 - Practical Example using Loops",
          "duration": "4:03",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_P",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.21",
          "videoTitle": "JavaScript Tutorial For Beginners #20 - Functions",
          "duration": "9:19",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_Q",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.22",
          "videoTitle": "JavaScript Tutorial For Beginners #21 - Variable Scope",
          "duration": "6:06",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_R",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.23",
          "videoTitle": "JavaScript Tutorial For Beginners #22 - Numbers",
          "duration": "6:10",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_S",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.24",
          "videoTitle": "JavaScript Tutorial For Beginners - NaN (Not a Number)",
          "duration": "6:35",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_T",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.25",
          "videoTitle": "JavaScript Tutorial For Beginners #24 - Strings",
          "duration": "9:38",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_U",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.26",
          "videoTitle": "JavaScript Tutorial For Beginners #25 - Slice and Split Strings",
          "duration": "6:39",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_V",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.27",
          "videoTitle": "JavaScript Tutorial For Beginners #26 - Arrays",
          "duration": "6:48",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_W",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.28",
          "videoTitle": "JavaScript Tutorial For Beginners #27 - Introduction to Objects",
          "duration": "6:37",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_X",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.29",
          "videoTitle": "JavaScript Tutorial For Beginners #28 - Creating a new JavaScript Object",
          "duration": "10:07",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_Y",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.30",
          "videoTitle": "JavaScript Tutorial For Beginners #29 - THIS Keyword",
          "duration": "5:24",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xy_Z",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.31",
          "videoTitle": "JavaScript Tutorial For Beginners #30 - Constructor Functions",
          "duration": "6:49",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xz1a",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.32",
          "videoTitle": "JavaScript Tutorial For Beginners #31 - The Date Object",
          "duration": "9:23",
          "url": "https://www.youtube.com/watch?v=Y8YfWw8Xz1b",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.33",
          "videoTitle": "JavaScript Tutorial For Beginners #32 - What is the DOM in JavaScript?",
          "duration": "4:31",
          "url": "https://www.youtube.com/watch?v=FIORjGvT0kk",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.34",
          "videoTitle": "JavaScript Tutorial For Beginners #33 - Traversing the DOM",
          "duration": "7:44",
          "url": "https://www.youtube.com/watch?v=FIORjGvT0kl",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.35",
          "videoTitle": "JavaScript Tutorial For Beginners #34 - Changing Page Content",
          "duration": "5:39",
          "url": "https://www.youtube.com/watch?v=FIORjGvT0km",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.36",
          "videoTitle": "JavaScript Tutorial For Beginners #35 - Changing Element Attributes",
          "duration": "6:03",
          "url": "https://www.youtube.com/watch?v=FIORjGvT0kn",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.37",
          "videoTitle": "JavaScript Tutorial For Beginners #36 - Changing CSS Styles",
          "duration": "4:50",
          "url": "https://www.youtube.com/watch?v=FIORjGvT0ko",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.38",
          "videoTitle": "JavaScript Tutorial For Beginners #37 - Adding Elements to the DOM",
          "duration": "7:44",
          "url": "https://www.youtube.com/watch?v=FIORjGvT0kp",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.39",
          "videoTitle": "JavaScript Tutorial For Beginners #38 - Removing Elements from the DOM",
          "duration": "4:13",
          "url": "https://www.youtube.com/watch?v=FIORjGvT0quest",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.40",
          "videoTitle": "JavaScript Tutorial For Beginners # 39 - Introduction to JavaScript Events",
          "duration": "8:30",
          "url": "https://www.youtube.com/watch?v=FIORjGvT0kr",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.41",
          "videoTitle": "JavaScript Tutorial For Beginners #40 - The onClick Event",
          "duration": "8:05",
          "url": "https://www.youtube.com/watch?v=FIORjGvT0ks",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.42",
          "videoTitle": "JavaScript Tutorial For Beginners #41 - Window onLoad Event",
          "duration": "5:07",
          "url": "https://www.youtube.com/watch?v=FIORjGvT0kt",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.43",
          "videoTitle": "JavaScript Tutorial For Beginners #42 - JavaScript Timers",
          "duration": "12:12",
          "url": "https://www.youtube.com/watch?v=FIORjGvT0ku",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.44",
          "videoTitle": "JavaScript Tutorial For Beginners #43 - Accessing Form Elements",
          "duration": "6:04",
          "url": "https://www.youtube.com/watch?v=FIORjGvT0kv",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.45",
          "videoTitle": "JavaScript Tutorial For Beginners #44 - VERY Simple Form Validation",
          "duration": "5:37",
          "url": "https://www.youtube.com/watch?v=FIORjGvT0kw",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.46",
          "videoTitle": "JavaScript Tutorial For Beginners #45 - JavaScript Libraries",
          "duration": "8:34",
          "url": "https://www.youtube.com/watch?v=FIORjGvT0kx",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        },
        {
          "id": "fv7.47",
          "videoTitle": "JavaScript Tutorial For Beginners #46 - What to Study Next",
          "duration": "4:31",
          "url": "https://www.youtube.com/watch?v=FIORjGvT0ky",
          "tasks": [
            "Write Javascript DOM traversal logic, handle event clicks, and run validator loops."
          ]
        }
      ],
      "assignment": {
        "title": "Dynamic Metric Counter & Form Validator",
        "objective": "Script an operational application program thread that listens for interface interaction events, parses input node objects, manages numerical calculations, and applies modifications directly into the web document tree.",
        "steps": [
          "DOM Traversal Setup: Link an external script execution file to your document tracking architecture. Write clean search queries to latch onto an input text element, a tracking submission node, and an empty data display field.",
          "Event Monitor Binding: Attach a persistent action listener to your submission node that fires immediately upon cursor click inputs.",
          "Data Inspection Logic: Inside your execution loop, intercept the default behavior of the submission action. Extract the raw text value from the input field node. Implement logical conditions to inspect whether the input string length matches safety baselines.",
          "State Counter & Feedback Delivery: Create a localized count tracker variable. If validation clears, increment your tracking tracker value by one and write a clean string interpolation into your display node to alert the user.",
          "Visual Attribute Manipulation: If validation checks fail, write rules that dynamically append an alert styling class directly to your layout components to mark the input state visually red."
        ],
        "hints": [
          "Form submission actions naturally attempt to refresh your browser window context instantly. Prevent this behavior by explicitly invoking the native execution stoppage property on the incoming event block.",
          "Carefully track variable scope contexts. If you declare your metric tracking counter inside the click execution block, it will reset to its default starting value every single time the action runs."
        ]
      }
    },
    {
      "id": "capstone_projects",
      "title": "Capstone Project",
      "subtitle": "Capstone Project",
      "description": "Practical Graduation Requirement. Timeline Constraint: Exactly Two Weeks. Students must select and completely build out two (2) projects from the matrix below using HTML, CSS (Flexbox/Grid), explicit version-tracked code histories, and pure vanilla JavaScript DOM logic.",
      "lessons": [],
      "projects": [
        {
          "id": "project_alpha",
          "title": "Project Alpha: The Smart Dashboard Sandbox UI",
          "description": "An interactive application control panel workspace where users can input parameters and watch an interface dynamically adapt its layout, data, and themes.",
          "core_requirements": [
            "A primary workspace layout handled completely via modern multi-column Flexbox styling.",
            "An interface dashboard that updates structural counters, user badges, and text logs on the screen using dynamic data.",
            "An operational theme module swapping layout styles cleanly between dark, light, and high-contrast color values by altering root elements."
          ],
          "architectural_concept_map": {
            "diagram_placeholder": "",
            "specifications": [
              "Global Sidebar Navigation Column: A vertical container locked on the left aspect, changing down to a horizontal top banner via media queries when the screen width drops below 768 pixels.",
              "Primary Metric Card Deck: An upper row grid layout leveraging flex-direction: row and flex-wrap: wrap to allow fluid resizing of tracking tiles across viewport changes.",
              "Data Logging Sandbox Terminal: A bottom-level code output console container that captures input tracking variables and appends strings as custom nodes to mock backend executions."
            ]
          }
        },
        {
          "id": "project_beta",
          "title": "Project Beta: The Client-Side Evaluation Engine",
          "description": "A client-side testing application platform that executes structured task configurations, tracks overall success parameters, calculates metrics on the fly, and fires custom alert timers.",
          "core_requirements": [
            "Dynamically loop over code objects or arrays to inject structured task elements onto the screen without hardcoding the items into the base HTML file.",
            "Implement persistent timer tracking loops that automatically advance layout panels or warn users when predefined time limits run out.",
            "An analytical summary pane that unlocks custom skill markers based on the calculated score."
          ],
          "architectural_concept_map": {
            "diagram_placeholder": "",
            "execution_flowchart": "[Data Array Layer] ──> [DOM Render Loop] ──> [User Event Action Click] ──> [Evaluation Check Logic] ──> [Calculate Metrics] ──> [Summary View Dashboard]"
          }
        },
        {
          "id": "project_gamma",
          "title": "Project Gamma: The Interactive SaaS Documentation Hub",
          "description": "A professional production documentation interface built with responsive navigation, text processing search filters, and an interactive sample component layout.",
          "core_requirements": [
            "A split-layout design featuring a fixed sidebar directory list paired with an independent scrolling content pane.",
            "A client-side search field that monitors input events to hide or show matching text blocks across the screen instantly as the user types.",
            "An interactive code snippet component layout equipped with functional 'Copy to Clipboard' macros using browser interface objects."
          ],
          "architectural_concept_map": {
            "diagram_placeholder": "",
            "specifications": [
              "The Navigation Tree Pane: Explicitly set to a constraint of position: fixed or height: 100vh with an active overflow property to permit nested document links to scroll independently of the main curriculum window.",
              "The Content Reading Space: Configured with wide left-side margins to clear the tracking directory column, applying input filter logic targeting element text attributes matching the input search value."
            ]
          }
        }
      ]
    }
  ]
},
  4: {
    id: 4,
    title: "Graphics Design Using Pixel Lab",
    description:
      "A hands-on graphic design course focused on the Pixel Lab mobile app. Students learn design principles, typography, color theory, and practical design production — creating stunning logos, posters, social media graphics, and brand materials entirely on their mobile device.",
    duration: "8 Modules | ~10 Weeks",
    level: "Beginner – No design experience required",
    comingSoon: false,
    modules: [
      {
        id: "g1",
        title: "Module 1",
        subtitle: "Intro to Design & Pixel Lab Interface",
        lessons: [
          {
            id: "gv1.1",
            videoTitle: "Introduction to Graphic Design",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: What is graphic design? Fields, career paths, client work vs content creation. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv1.2",
            videoTitle: "Getting Started with Pixel Lab",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Installing Pixel Lab: navigating the interface (canvas, tools, layers panel). Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv1.3",
            videoTitle: "Understanding Canvas and Resolution",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Understanding canvas: setting size (px, cm), resolution (72dpi screen vs 300dpi print). Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv1.4",
            videoTitle: "Core Tool Overview",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Tool overview: selection, crop, text, shape, brush, eraser, gradient. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv1.5",
            videoTitle: "Working with Layers",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Layers: creating, renaming, reordering, locking, blending modes. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv1.6",
            videoTitle: "Saving and Exporting Designs",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Saving and exporting: PNG, JPEG, PDF; sharing to social media. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv1.7",
            videoTitle: "Design Principles & Inspiration",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Design principles overview: alignment, contrast, repetition, proximity (CARP). Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Viewing inspiration: Pinterest, Behance, Dribbble. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 1: Create a Welcome Card design in Pixel Lab (1080×1080px). Include your name, a short tagline, a background (solid color or gradient), and at least one shape element. Export as PNG. Write 3 sentences explaining your design choices and add the exported PNG to your portfolio or Behance draft.",
      },
      {
        id: "g2",
        title: "Module 2",
        subtitle: "Color Theory & Backgrounds",
        lessons: [
          {
            id: "gv2.1",
            videoTitle: "The Color Wheel and Harmony",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Color wheel: primary, secondary, tertiary colors. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Color harmony schemes: complementary, analogous, triadic, monochromatic. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv2.2",
            videoTitle: "Psychology of Color",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Psychology of color: what colors communicate in design. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv2.3",
            videoTitle: "Working with Colors in Pixel Lab",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Setting colors in Pixel Lab: hex codes, RGB sliders, color picker. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv2.4",
            videoTitle: "Creating Gradients",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Creating gradients: linear, radial, angle; color stops. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv2.5",
            videoTitle: "Background Techniques",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Background techniques: solid, gradient, texture, pattern overlays. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Opacity and transparency in layers. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv2.6",
            videoTitle: "Using Free Texture Resources",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Using free texture resources and importing into Pixel Lab. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv2.7",
            videoTitle: "Building Brand Color Palettes",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Building a brand color palette. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 2: Design 3 different Instagram post backgrounds (1080×1080px each) using: (1) a complementary color gradient, (2) a textured background with overlay, (3) a monochromatic color scheme. Label each with the color hex codes used.",
      },
      {
        id: "g3",
        title: "Module 3",
        subtitle: "Typography & Text Design",
        lessons: [
          {
            id: "gv3.1",
            videoTitle: "Typography Basics",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Typography basics: typefaces, fonts, serif vs sans-serif vs display. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv3.2",
            videoTitle: "Font Pairing and Hierarchy",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Font pairing: rules and examples (heading + body combinations). Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Text hierarchy: size, weight, spacing. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv3.3",
            videoTitle: "Text in Pixel Lab",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Text in Pixel Lab: adding text, font selection, size, spacing (letter, line). Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv3.4",
            videoTitle: "Text Effects",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Text effects: shadow, stroke/outline, gradient fill on text. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv3.5",
            videoTitle: "Advanced Text Placement",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Text on shapes and curved text workarounds. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv3.6",
            videoTitle: "Importing Custom Fonts",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Importing custom fonts into Pixel Lab. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv3.7",
            videoTitle: "Typography Dos and Don'ts",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Dos and Don'ts. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 3: Create a Typography Poster (1080×1350px) for a motivational quote of your choice. Use 2 fonts maximum, create clear visual hierarchy (main quote + attribution), apply at least one text effect (shadow or outline), and ensure the text is readable on the background.",
      },
      {
        id: "g4",
        title: "Module 4",
        subtitle: "Shapes, Icons & Illustrations",
        lessons: [
          {
            id: "gv4.1",
            videoTitle: "Shape Tools in Pixel Lab",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Shape tools in Pixel Lab: rectangles, circles, polygons, custom shapes. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv4.2",
            videoTitle: "Styling Shapes",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Shape styling: fill, stroke, corner radius, shadow. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv4.3",
            videoTitle: "Creating Icons",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Combining shapes to create icons and illustrations. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv4.4",
            videoTitle: "Importing Icons and Clipart",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Importing PNG icons and clipart (removing backgrounds). Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv4.5",
            videoTitle: "Removing Backgrounds",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Background removal tool in Pixel Lab. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv4.6",
            videoTitle: "Layering for Depth",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Layering shapes for depth and dimension. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Creating simple flat design illustrations. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv4.7",
            videoTitle: "Working with Stickers",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Working with PNG stickers and decorative elements. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 4: Design an Event Flyer (1080×1920px) for a fictional event (concert, webinar, market). Include: event name, date/time/venue, at least 3 custom shapes used as design elements, icons, and a clear visual hierarchy. Must look like a professional print-ready flyer.",
      },
      {
        id: "g5",
        title: "Module 5",
        subtitle: "Logo Design in Pixel Lab",
        lessons: [
          {
            id: "gv5.1",
            videoTitle: "What Makes a Great Logo",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: What makes a great logo: simple, memorable, versatile, appropriate. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Logo types: wordmark, lettermark, icon/symbol, combination mark. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv5.2",
            videoTitle: "Sketching Logo Concepts",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Sketching logo concepts before designing digitally. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv5.3",
            videoTitle: "Building Logos in Pixel Lab",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Building logos in Pixel Lab using shapes + text. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv5.4",
            videoTitle: "Logo Colors",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Color choices for logos and what to avoid. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv5.5",
            videoTitle: "Testing Logos on Backgrounds",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Testing logos on light and dark backgrounds. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv5.6",
            videoTitle: "Exporting Versatile Logos",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Exporting logos: transparent PNG for versatility. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Logo variations: horizontal, stacked, icon-only. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv5.7",
            videoTitle: "Brand Guidelines",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Logo usage rules and brand guidelines basics. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 5: Design a complete logo set for a fictional brand of your choice. Deliver: (1) primary logo (icon + wordmark), (2) icon-only version, (3) logo on light background, (4) logo on dark background. All as transparent PNGs. Write a 1-paragraph brand story.",
      },
      {
        id: "g6",
        title: "Module 6",
        subtitle: "Social Media Graphics & Content Design",
        lessons: [
          {
            id: "gv6.1",
            videoTitle: "Social Media Sizing",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Social media size guide: Instagram (post, story, reel cover), Facebook, Twitter/X, LinkedIn. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv6.2",
            videoTitle: "Designing for Scroll-Stopping Content",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Designing for scroll-stopping content: contrast, focal point, white space. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv6.3",
            videoTitle: "Creating Instagram Carousels",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Creating Instagram carousel posts (consistent style across slides). Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv6.4",
            videoTitle: "Story and Thumbnail Design",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Story design: vertical format, CTA elements, poll/question overlays. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: YouTube thumbnail design principles. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv6.5",
            videoTitle: "Creating Templates",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Creating templates in Pixel Lab for consistent branding. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv6.6",
            videoTitle: "Batch Designing",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Batch designing: creating multiple posts efficiently. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv6.7",
            videoTitle: "Brand Consistency",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Brand consistency: color, font, logo placement across all graphics. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 6: Create a 5-post Instagram carousel for a brand of your choice (fictional or your own platform). All posts must share: same fonts, color palette, and logo placement. Each post needs unique content but consistent design. Export all 5 at 1080×1080px.",
      },
      {
        id: "g7",
        title: "Module 7",
        subtitle: "Mockups, Presentations & Print Design",
        lessons: [
          {
            id: "gv7.1",
            videoTitle: "Introduction to Mockups",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: What are mockups and why they matter for presenting work. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Types of mockups: phone screens, t-shirts, mugs, billboards, business cards. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv7.2",
            videoTitle: "Placing Designs in Mockups",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Placing your designs into mockups using Pixel Lab. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Free mockup resources: Mockup World, Freepik, SmartMockups. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv7.3",
            videoTitle: "Business Card Design",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Business card design: standard sizes, bleed, safe zones. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv7.4",
            videoTitle: "Certificate Design",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Certificate design: layout, hierarchy, decorative elements. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv7.5",
            videoTitle: "Poster vs Banner Sizing",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Poster vs banner sizing for print. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv7.6",
            videoTitle: "Preparing for Print",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Preparing designs for print: resolution, color mode notes, file format. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 7: Choose any 3 designs you've created in previous modules and present them in professional mockups. Also design a Business Card (both sides) for your personal brand or the brand from Module 5. Present all in a single Pixel Lab portfolio layout.",
      },
      {
        id: "g8",
        title: "Module 8",
        subtitle: "🏆 CAPSTONE PROJECT – Complete Brand Identity",
        lessons: [
          {
            id: "gv8.1",
            videoTitle: "Week 1: Brand Strategy and Planning",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Choose a brand (fictional or real). Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Define target audience, mood board, color palette, font selection. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv8.2",
            videoTitle: "Week 2: Brand Assets Creation",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Design logo suite, brand patterns, and icon set. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv8.3",
            videoTitle: "Week 3: Marketing Materials",
            tasks: [
              ["Create all social media templates and marketing materials"],
            ],
          },
          {
            id: "gv8.4",
            videoTitle: "Week 4: Brand Style Guide",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Compile a Brand Style Guide and present all work in mockups. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
          {
            id: "gv8.5",
            videoTitle: "Final Deliverables",
            tasks: [
              [
                "Use Pixel Lab to practice this topic and save the result for your design portfolio: Deliverables: Logo files (PNG), brand guide document, 10 branded social media graphics, mockup presentation. Save your Pixel Lab file or notes and add this sample to your portfolio or Behance draft.",
              ],
            ],
          },
        ],
        assignment:
          "CAPSTONE: Develop a complete Brand Identity Package for a fictional business. Deliverables: (1) Logo suite (3 variations, transparent PNG), (2) Brand Style Guide (colors, fonts, usage rules), (3) 10 branded social media graphics (posts + stories), (4) Business card + flyer design, (5) Mockup presentation of all materials.",
      },
    ],
  },
  5: {
    id: 5,
    title: "Graphics Design Using Adobe Photoshop & Illustrator",
    description:
      "A professional-grade graphic design course using the industry-standard Adobe Creative Suite. Students master raster editing in Photoshop and vector design in Illustrator, learning when and how to use each tool. The course covers photo manipulation, digital illustration, branding, print design, and UI asset creation.",
    duration: "8 Modules | ~16 Weeks",
    level: "Beginner to Intermediate",
    comingSoon: false,
    modules: [
      {
        id: "a1",
        title: "Module 1",
        subtitle: "Adobe Workspace & Foundational Concepts",
        lessons: [
          {
            id: "av1.1",
            videoTitle: "Design Fundamentals & Graphics Types",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Design fundamentals: raster vs vector graphics, resolution, color modes (RGB vs CMYK). Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av1.2",
            videoTitle: "Photoshop Interface & Setup",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Photoshop interface: panels, toolbar, layers panel, workspace setup. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av1.3",
            videoTitle: "Illustrator Interface Overview",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Illustrator interface: artboards, tools, layers, panels. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av1.4",
            videoTitle: "File Formats & Document Setup",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: File formats: PSD, AI, PDF, PNG, JPEG, SVG, EPS – when to use each. Save the source file or notes and add the example to your portfolio or case study.",
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Setting up documents: canvas size, resolution, color mode, artboards. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av1.5",
            videoTitle: "Shortcuts and Workflow",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Keyboard shortcuts mastery for both apps. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av1.6",
            videoTitle: "Saving, Exporting & Cloud Services",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Saving, exporting, and packaging files. Save the source file or notes and add the example to your portfolio or case study.",
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Introduction to Creative Cloud: sync settings, Libraries, fonts (Adobe Fonts). Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av1.7",
            videoTitle: "Project Organization",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Project organization: folder structure, naming conventions. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 1: Set up a Photoshop document (A4, 300dpi, CMYK) AND an Illustrator document (A4, RGB) side by side. On each, recreate the same basic composition: your name as the title, a colored rectangle, a shape, and a brief tagline. Export both as PDFs. Write a reflection: what felt different between the two tools?",
      },
      {
        id: "a2",
        title: "Module 2",
        subtitle: "Adobe Photoshop – Photo Editing & Retouching",
        lessons: [
          {
            id: "av2.1",
            videoTitle: "Selection Tools Masterclass",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Selection tools: Marquee, Lasso, Magic Wand, Quick Selection, Object Select. Save the source file or notes and add the example to your portfolio or case study.",
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Refine Edge / Select and Mask for complex selections (hair, fur). Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av2.2",
            videoTitle: "Understanding Photoshop Layers",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Layers: types (pixel, adjustment, fill, smart object), groups, clipping masks. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av2.3",
            videoTitle: "Adjustment Layers",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Adjustment layers: Curves, Levels, Hue/Saturation, Color Balance, Vibrance. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av2.4",
            videoTitle: "Retouching and Healing",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Retouching tools: Spot Healing Brush, Clone Stamp, Content-Aware Fill. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av2.5",
            videoTitle: "Non-Destructive Workflows",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Non-destructive editing with Smart Objects and Smart Filters. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av2.6",
            videoTitle: "Advanced Portrait Retouching",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Dodge, Burn, Sponge for lighting adjustments. Save the source file or notes and add the example to your portfolio or case study.",
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Frequency Separation technique for skin retouching. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av2.7",
            videoTitle: "Camera Raw and Filters",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Camera Raw filter for RAW and JPEG enhancement. Save the source file or notes and add the example to your portfolio or case study.",
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Filters and effects: Blur, Sharpen, Noise, Liquify. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 2: Take a portrait photo (yourself or stock photo) and perform a professional retouch: (1) remove blemishes with Healing Brush, (2) even skin tone with Frequency Separation, (3) enhance lighting with Curves adjustment layer, (4) add a background replacement with Select and Mask, (5) export as print-ready PDF at 300dpi.",
      },
      {
        id: "a3",
        title: "Module 3",
        subtitle: "Adobe Photoshop – Photo Manipulation & Compositing",
        lessons: [
          {
            id: "av3.1",
            videoTitle: "Advanced Layer Masking",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Advanced layer masking: painting masks, gradient masks, luminosity masks. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av3.2",
            videoTitle: "Blending Modes and Styles",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Blending modes explained: Multiply, Screen, Overlay, Soft Light, Color Dodge. Save the source file or notes and add the example to your portfolio or case study.",
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Layer styles: Drop Shadow, Inner Glow, Gradient Overlay, Stroke, Bevel & Emboss. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av3.3",
            videoTitle: "Photo Compositing Basics",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Photo compositing: combining multiple images seamlessly. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av3.4",
            videoTitle: "Perspective and Warping",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Perspective matching and warping with Warp Transform. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av3.5",
            videoTitle: "Color Grading",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Color grading: match color between photos, gradient maps, LUT application. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av3.6",
            videoTitle: "Special Effects and Text",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Creating surreal/fantasy photo effects. Save the source file or notes and add the example to your portfolio or case study.",
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Text effects: embossed, metal, fire, glass text. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av3.7",
            videoTitle: "Automation and Batch Processing",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Smart Object workflows for non-destructive compositing. Save the source file or notes and add the example to your portfolio or case study.",
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Actions and batch processing for repetitive edits. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 3: Create a fantasy photo composite of at least 3 separate images blended into one believable scene. Requirements: seamless edges (masking), matched lighting and color grading across all elements, creative use of blending modes, and a stylized text overlay. Final output: 1920×1080px PNG.",
      },
      {
        id: "a4",
        title: "Module 4",
        subtitle: "Adobe Illustrator – Vector Design Fundamentals",
        lessons: [
          {
            id: "av4.1",
            videoTitle: "Mastering the Pen Tool",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: The Pen Tool: anchor points, curves, handles, open vs closed paths. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av4.2",
            videoTitle: "Working with Shapes",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Shape tools: Rectangle, Ellipse, Polygon, Star, Spiral. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av4.3",
            videoTitle: "Pathfinder and Shape Builder",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Pathfinder panel: Unite, Minus Front, Intersect, Exclude. Save the source file or notes and add the example to your portfolio or case study.",
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Shape Builder Tool: intuitive vector combining. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av4.4",
            videoTitle: "Strokes and Lines",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Stroke panel: weight, dashes, caps, joins, variable width. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av4.5",
            videoTitle: "Fills and Appearance",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Fills: solid, gradient (linear/radial/freeform), pattern. Save the source file or notes and add the example to your portfolio or case study.",
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Appearance panel: multiple fills and strokes on one object. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av4.6",
            videoTitle: "Color Management in Illustrator",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Color: global swatches, CMYK, spot colors, color groups. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av4.7",
            videoTitle: "Precision Tools",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Alignment and distribution of objects. Save the source file or notes and add the example to your portfolio or case study.",
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Grids, guides, and Smart Guides for precision. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 4: Create a set of 6 flat-style vector icons (any theme: food, tech, travel, etc.) entirely with the Pen Tool and Shape Builder. Each icon must be clean, consistent in style, work at both 24px and 512px, and use a single unified color palette. Export as SVG and PNG.",
      },
      {
        id: "a5",
        title: "Module 5",
        subtitle: "Adobe Illustrator – Logo Design & Typography",
        lessons: [
          {
            id: "av5.1",
            videoTitle: "The Logo Design Process",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Logo design process: brief, research, sketch, refine, present. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av5.2",
            videoTitle: "Vector Logo Workflow",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Creating scalable logos: full vector workflow in Illustrator. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av5.3",
            videoTitle: "Typography Techniques",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Type on a path, text in a shape, outline text (Create Outlines). Save the source file or notes and add the example to your portfolio or case study.",
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Modifying letterforms: custom logotypes from existing fonts. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av5.4",
            videoTitle: "Live Trace and Vectorization",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Using Live Trace (Image Trace) to vectorize hand-drawn sketches. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av5.5",
            videoTitle: "Logo Variants and Artboards",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Logo color systems: primary, reversed, one-color, black & white versions. Save the source file or notes and add the example to your portfolio or case study.",
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Artboards for logo variants in one document. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av5.6",
            videoTitle: "Logo Types and Structures",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Designing wordmarks, lettermarks, and combination marks. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av5.7",
            videoTitle: "Packaging and Presenting",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Packaging logos: File > Package, embed fonts. Save the source file or notes and add the example to your portfolio or case study.",
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Presenting logos in a brand deck. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 5: Design a professional logo for a fictional company in Illustrator. Deliver all variants on artboards in one AI file: (1) Full color primary, (2) Reversed (white on dark), (3) One-color black, (4) One-color white. Also export each as PNG (transparent) and SVG. Present in a mini brand deck (PDF).",
      },
      {
        id: "a6",
        title: "Module 6",
        subtitle: "Branding, Print Design & Layout",
        lessons: [
          {
            id: "av6.1",
            videoTitle: "Brand Identity Systems",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Brand identity systems: logo, color, typography, patterns, imagery style. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av6.2",
            videoTitle: "Business Cards and Flyers",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Business card design: bleed, safe zone, double-sided layout. Save the source file or notes and add the example to your portfolio or case study.",
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Flyer and poster design: hierarchy, grid systems, visual flow. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av6.3",
            videoTitle: "Brochure Design",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Brochure design: tri-fold, bi-fold layout in Illustrator. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av6.4",
            videoTitle: "Working with Images in Illustrator",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Working with images in Illustrator: Place, Link vs Embed, clipping masks. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av6.5",
            videoTitle: "Typography Styles",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Paragraph and character styles for consistent typography. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av6.6",
            videoTitle: "Prepping for Print & Patterns",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Prepping files for print: bleed marks, color mode, PDF/X output. Save the source file or notes and add the example to your portfolio or case study.",
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Designing letterheads and branded stationery. Save the source file or notes and add the example to your portfolio or case study.",
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Creating pattern swatches for brand backgrounds. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av6.7",
            videoTitle: "Brand Style Guides",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Building a complete brand style guide (1-page summary). Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 6: Create a complete brand print kit for the company from Module 5. Deliverables: (1) Double-sided business card (Illustrator), (2) A5 flyer (Illustrator), (3) A4 letterhead (Illustrator), (4) 1-page brand style guide. All files export-ready for print at 300dpi.",
      },
      {
        id: "a7",
        title: "Module 7",
        subtitle: "Digital Illustration, UI Assets & Advanced Techniques",
        lessons: [
          {
            id: "av7.1",
            videoTitle: "Digital Illustration Workflow",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Digital illustration workflow: Illustrator for linework, Photoshop for texture. Save the source file or notes and add the example to your portfolio or case study.",
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Drawing characters and scenes with the Pen Tool and Blob Brush. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av7.2",
            videoTitle: "Advanced Manipulation",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Puppet Warp and Warp Envelope for illustration manipulation. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av7.3",
            videoTitle: "Creating UI Assets",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Creating UI elements in Illustrator: buttons, icons, app screens. Save the source file or notes and add the example to your portfolio or case study.",
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Photoshop for UI mockups: device frames, screen overlays. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av7.4",
            videoTitle: "Social Media Templates",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Designing social media templates in Illustrator/Photoshop. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av7.5",
            videoTitle: "Exporting for Web and Animations",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Exporting for web: Export for Web (Legacy), Export As, SVG options. Save the source file or notes and add the example to your portfolio or case study.",
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Creating animated GIFs in Photoshop (Timeline panel). Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av7.6",
            videoTitle: "AI Tools in Photoshop",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Photoshop Generative Fill (AI) for creative exploration. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av7.7",
            videoTitle: "Managing Large Projects",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Managing large projects with Libraries and linked assets. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 7: Create a Social Media Content Pack for a brand of your choice. Using both Photoshop AND Illustrator: (1) Design 3 Instagram post templates in Illustrator (editable), (2) Create 2 photo-based posts in Photoshop (retouching + text overlay), (3) Export a 3-frame animated GIF announcement in Photoshop. All at correct social media dimensions.",
      },
      {
        id: "a8",
        title: "Module 8",
        subtitle: "🏆 CAPSTONE PROJECT – Full Brand Design Campaign",
        lessons: [
          {
            id: "av8.1",
            videoTitle: "Week 1: Client Brief & Planning",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Client brief creation, moodboard, color palette, typography system. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av8.2",
            videoTitle: "Week 2: Logo and Brand Assets",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Logo design in Illustrator, brand pattern, icon set. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av8.3",
            videoTitle: "Week 3: Print and Photo Campaigns",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Print collateral in Illustrator, photo campaign in Photoshop. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av8.4",
            videoTitle: "Week 4: Case Study and Presentation",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Compile brand guide, present portfolio-ready case study. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
          {
            id: "av8.5",
            videoTitle: "Final Deliverables",
            tasks: [
              [
                "Use Photoshop/Illustrator to practice this topic and save the result for your portfolio or design log: Deliverables: AI source files, PSD source files, full export folder (PNG/PDF/SVG), brand guide PDF, Behance-style case study. Save the source file or notes and add the example to your portfolio or case study.",
              ],
            ],
          },
        ],
        assignment:
          "CAPSTONE: Design a complete brand campaign for a fictional company using both Adobe Photoshop and Illustrator. Deliver: (1) Logo system (Illustrator – AI + PNG + SVG), (2) Brand Style Guide PDF, (3) Business Card + Letterhead + Flyer (Illustrator), (4) 3 Photoshop-retouched campaign images with branded overlays, (5) 5 social media graphics, (6) Portfolio case study PDF (Behance-style layout documenting your design process).",
      },
    ],
  },
  6: {
    id: 6,
    title: "Amazon KDP Writing – Publish & Earn on Kindle Direct Publishing",
    description:
      "A complete, practical course on writing, designing, publishing, and marketing books on Amazon Kindle Direct Publishing (KDP). Covers low-content, medium-content, and full ebook publishing strategies. Students will leave with at least one published book and a repeatable publishing workflow.",
    duration: "8 Modules | ~12 Weeks",
    level: "Beginner – No writing or publishing experience required",
    comingSoon: false,
    modules: [
      {
        id: "k1",
        title: "Module 1",
        subtitle: "Intro to Amazon KDP & the Publishing Opportunity",
        lessons: [
          {
            id: "kv1.1",
            videoTitle: "What is Amazon KDP?",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: What is Amazon KDP? How self-publishing works. Save your findings, workbook, or screenshot notes in your publishing log.",
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: KDP business models: ebooks, paperbacks, hardcovers, low-content books. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv1.2",
            videoTitle: "Understanding KDP Income Streams",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Income streams: royalties (35% vs 70%), KENP (Kindle page reads). Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv1.3",
            videoTitle: "Book Content Types",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Low-content vs medium-content vs full books: pros, cons, income potential. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv1.4",
            videoTitle: "Market and Niche Research",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Market research: using Amazon search, Best Seller Rank (BSR), Book Bolt, Publisher Rocket. Save your findings, workbook, or screenshot notes in your publishing log.",
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Finding profitable niches: competition level, demand, BSR analysis. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv1.5",
            videoTitle: "Setting Up Your KDP Account",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Setting up your KDP account: identity verification, payment info, tax interview. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv1.6",
            videoTitle: "Navigating the Dashboard",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: KDP dashboard tour: bookshelf, reports, marketing tabs. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv1.7",
            videoTitle: "The Publication Process",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Understanding the publication process: draft → review → live. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 1: Conduct niche research and identify 3 profitable KDP niches using Amazon's search bar and BSR analysis. For each niche, document: (1) search term used, (2) number of results, (3) top 3 competitor BSRs, (4) estimated monthly sales, (5) your opportunity assessment. Present in a table.",
      },
      {
        id: "k2",
        title: "Module 2",
        subtitle: "Writing for KDP – Content Strategy & Ideation",
        lessons: [
          {
            id: "kv2.1",
            videoTitle: "Deep Dive into Book Types",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Book types deep-dive: journals, planners, notebooks, activity books, workbooks, ebooks, guides. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv2.2",
            videoTitle: "Choosing Your First Book",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Choosing your first book: align passion, skills, and market demand. Save your findings, workbook, or screenshot notes in your publishing log.",
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Reader avatars: defining your ideal reader before writing. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv2.3",
            videoTitle: "Structuring Your Content",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Writing for non-fiction: structure (intro, chapters, conclusion), reader promise. Save your findings, workbook, or screenshot notes in your publishing log.",
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Writing for fiction: genre conventions, series potential on KDP. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv2.4",
            videoTitle: "Outlining Strategies",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Outlining a book: mind map method, chapter-by-chapter outline. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv2.5",
            videoTitle: "Using AI Tools Ethically",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: AI-assisted writing tools: how to use ChatGPT ethically to support (not replace) your writing. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv2.6",
            videoTitle: "Content Guidelines and Policies",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Amazon KDP content guidelines: policy limits, prohibited content, and formatting requirements. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv2.7",
            videoTitle: "Copyright and Originality",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Avoiding copyright infringement: originality, public domain content, images. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 2: Choose your first KDP book concept. Create a full book outline: title, subtitle, target reader avatar, 7-day unique selling proposition sentence, and a chapter-by-chapter outline (minimum 5 chapters or 50 interior pages for low-content). Justify why this book will sell based on your Module 1 research.",
      },
      {
        id: "k3",
        title: "Module 3",
        subtitle: "Low-Content Book Creation",
        lessons: [
          {
            id: "kv3.1",
            videoTitle: "Introduction to Low-Content Books",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: What are low-content books? Journals, notebooks, planners, log books, coloring books. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv3.2",
            videoTitle: "Design Tools and Setup",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Tools: Canva (free), Book Bolt, Adobe Illustrator, Microsoft Word. Save your findings, workbook, or screenshot notes in your publishing log.",
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: KDP paperback trim sizes: 6×9 (most popular), 8.5×11, 5×8. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv3.3",
            videoTitle: "Margins, Bleed, and Page Strategy",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Margins and bleed requirements: KDP. Save your findings, workbook, or screenshot notes in your publishing log.",
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: keyword search and category browsing on Amazon. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv3.4",
            videoTitle: "Designing Interior Pages",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Designing interior pages: lined journal, dot grid, gratitude planner, habit tracker. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv3.5",
            videoTitle: "Creating Interior PDFs",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Creating interior PDF: embedding fonts, flattening, correct PDF settings. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv3.6",
            videoTitle: "Cover Design and Spine Calculation",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Designing the book cover: front, back, spine — KDP Cover Creator vs custom. Save your findings, workbook, or screenshot notes in your publishing log.",
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Calculating spine width: KDP formula (page count × paper type). Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv3.7",
            videoTitle: "Uploading Your First Book",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Uploading to KDP: interior PDF, cover, pricing, territories. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 3: Create a complete low-content book ready for KDP upload. Deliver: (1) Interior PDF (minimum 100 pages, correct trim size and margins), (2) Full book cover (front + spine + back) as PDF, (3) KDP listing draft (title, subtitle, description, keywords, categories). Upload to KDP and share your ASIN or preview screenshot.",
      },
      {
        id: "k4",
        title: "Module 4",
        subtitle: "Ebook Writing & Formatting",
        lessons: [
          {
            id: "kv4.1",
            videoTitle: "Ebook vs Paperback Strategies",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Ebook vs paperback: reader behavior, pricing strategy, simultaneous publishing. Save your findings, workbook, or screenshot notes in your publishing log.",
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Writing a compelling ebook: how-to guides, self-help, recipes, business topics. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv4.2",
            videoTitle: "Formatting with Microsoft Word",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Microsoft Word for KDP: styles (Heading 1/2, Normal), table of contents, page breaks. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv4.3",
            videoTitle: "Ebook Formatting Rules",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Formatting rules for ebooks: no fixed layouts, fluid text, image placement. Save your findings, workbook, or screenshot notes in your publishing log.",
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Kindle formatting checklist: fonts, paragraph spacing, hyperlinks, TOC. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv4.4",
            videoTitle: "Converting to EPUB",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Converting Word to EPUB: free tools (Calibre, Kindle Previewer). Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv4.5",
            videoTitle: "Using Kindle Create",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: KDP Kindle Create tool: importing, formatting, preview. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv4.6",
            videoTitle: "Testing with Kindle Previewer",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Amazon Kindle Previewer: testing your ebook on device simulations. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv4.7",
            videoTitle: "Ebook Covers and Series Strategy",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Ebook cover design: 1600×2560px minimum, 6:9 ratio, high contrast. Save your findings, workbook, or screenshot notes in your publishing log.",
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Series strategy: linking books, also-boughts, read-through income. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 4: Write and format the first 3 chapters (minimum 3,000 words total) of your ebook from Module 2. Format properly in Microsoft Word using heading styles and auto-generated TOC. Export as both a PDF (for print preview) and EPUB (for Kindle). Run through Kindle Previewer and fix any formatting errors. Submit screenshots of the Kindle preview.",
      },
      {
        id: "k5",
        title: "Module 5",
        subtitle: "Book Cover Design That Sells",
        lessons: [
          {
            id: "kv5.1",
            videoTitle: "Importance of Cover Design",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Why cover design is your #1 sales tool on Amazon. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv5.2",
            videoTitle: "Cover Design Principles",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Cover design principles: genre conventions, font, imagery, color. Save your findings, workbook, or screenshot notes in your publishing log.",
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Studying bestseller covers in your niche: patterns and conventions. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv5.3",
            videoTitle: "Tools for Cover Design",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Using Canva Pro for KDP covers: KDP-ready templates, custom dimensions. Save your findings, workbook, or screenshot notes in your publishing log.",
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Using Book Bolt for low-content covers. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv5.4",
            videoTitle: "Typography and Image Sourcing",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Typography on covers: font pairing, readability at thumbnail size. Save your findings, workbook, or screenshot notes in your publishing log.",
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Image sourcing: paid (Shutterstock, Adobe Stock) and free (Unsplash, Pexels). Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv5.5",
            videoTitle: "Legal Considerations",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Image licensing for commercial use – critical legal points. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv5.6",
            videoTitle: "The Thumbnail Test",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: The thumbnail test: how your cover looks at Amazon. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv5.7",
            videoTitle: "Getting Feedback",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Getting feedback: Reddit and community groups. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 5: Design 3 different cover options for one of your KDP books. For each cover: (1) create at full KDP resolution, (2) shrink to 160px wide thumbnail and evaluate readability. Get feedback from at least 2 peers. Choose the best cover, document why, make improvements based on feedback, and submit the final cover file ready for KDP upload.",
      },
      {
        id: "k6",
        title: "Module 6",
        subtitle: "KDP Publishing, Keywords & Categories",
        lessons: [
          {
            id: "kv6.1",
            videoTitle: "Step-by-Step Book Setup",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Step-by-step KDP book setup: language, title, subtitle, series, edition, author, description. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv6.2",
            videoTitle: "Writing Compelling Descriptions",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Writing a compelling book description: hook, benefits, social proof, CTA, HTML formatting. Save your findings, workbook, or screenshot notes in your publishing log.",
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: HTML formatting in KDP descriptions: <b>, <br>, <ul>, <li> tags. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv6.3",
            videoTitle: "Keyword Research Deep Dive",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Keyword research deep-dive: Amazon auto-suggest method, Publisher Rocket, Book Bolt. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv6.4",
            videoTitle: "The 7 Keyword Slots Strategy",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: 7 keyword slots strategy: long-tail keywords, buyer-intent phrases. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv6.5",
            videoTitle: "Selecting Profitable Categories",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Selecting profitable categories: 2 main + requesting additional via KDP support. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv6.6",
            videoTitle: "Pricing and Exclusivity",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Pricing strategy: free promotions, $0.99, $2.99, $9.99 – royalty math. Save your findings, workbook, or screenshot notes in your publishing log.",
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: KDP Select vs wide publishing: pros, cons, exclusivity decision. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv6.7",
            videoTitle: "ISBN and Publishing Checklist",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: ISBN: KDP free ISBN vs custom ISBN – differences and use cases. Save your findings, workbook, or screenshot notes in your publishing log.",
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Publishing checklist: everything to check before hitting Publish. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 6: Fully set up one book's KDP listing without publishing. Fill in every field: title, subtitle, description (with HTML formatting, minimum 200 words), all 7 keywords (with research justification), 2 categories, and pricing. Screenshot each section. Peer-review a classmate's listing and give written feedback.",
      },
      {
        id: "k7",
        title: "Module 7",
        subtitle: "Marketing, Reviews & Scaling Your KDP Business",
        lessons: [
          {
            id: "kv7.1",
            videoTitle: "Understanding the Amazon Algorithm",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: How Amazon's book algorithm works. Save your findings, workbook, or screenshot notes in your publishing log.",
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: keyword search and category browsing on Amazon. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv7.2",
            videoTitle: "Amazon Ads Fundamentals",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Amazon Ads (AMS): Sponsored Products, automatic vs manual campaigns. Save your findings, workbook, or screenshot notes in your publishing log.",
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Setting up your first $5/day ad campaign: targeting, bids, budgets. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv7.3",
            videoTitle: "Optimizing Ad Campaigns",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Reading ad reports: ACOS, impressions, clicks, sales – optimizing campaigns. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv7.4",
            videoTitle: "Getting Ethical Reviews",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Getting reviews ethically: ARC (Advance Review Copies), reader magnets, BookFunnel. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv7.5",
            videoTitle: "Author Central and Branding",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Author Central: setting up your author page, biography, photo, blog posts. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv7.6",
            videoTitle: "Email Lists and Social Media",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Building an email list: free ebook lead magnet, ConvertKit/Mailchimp. Save your findings, workbook, or screenshot notes in your publishing log.",
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Social media for KDP authors: TikTok BookTok, Instagram, Pinterest. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv7.7",
            videoTitle: "Scaling Your Business",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Scaling: publishing cadence, series strategy, outsourcing to ghostwriters. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 7: Launch your first Amazon Ad campaign for your published book (minimum $5 budget). Run for 7 days, then analyze: total spend, impressions, clicks, sales, and ACOS. Write a 1-page campaign report with your optimization plan. Also set up your Author Central page with a complete bio and profile photo.",
      },
      {
        id: "k8",
        title: "Module 8",
        subtitle: "🏆 CAPSTONE PROJECT – Published Book + Business Plan",
        lessons: [
          {
            id: "kv8.1",
            videoTitle: "Week 1: Finalizing Book Content",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Finalize book content, interior, and cover; complete KDP listing. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv8.2",
            videoTitle: "Week 2: Publishing and Launch",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Publish book, set up Author Central, launch Amazon Ad campaign. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv8.3",
            videoTitle: "Week 3: Data Tracking and Optimization",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Track sales data, optimize keywords and ads, gather first reviews. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
          {
            id: "kv8.4",
            videoTitle: "Week 4: Business Planning",
            tasks: [
              ["Write KDP Business Plan for next 6 months (5 books pipeline)"],
            ],
          },
          {
            id: "kv8.5",
            videoTitle: "Submitting Deliverables",
            tasks: [
              [
                "Practice this KDP skill and capture your findings with screenshots or a structured notes page: Deliverables: Published Amazon book (share ASIN), ad campaign report, Author Central link, 6-month business plan. Save your findings, workbook, or screenshot notes in your publishing log.",
              ],
            ],
          },
        ],
        assignment:
          "CAPSTONE: Publish a complete book on Amazon KDP (any type). Deliver: (1) Live Amazon book listing URL or ASIN, (2) Screenshot of KDP dashboard showing the book live, (3) Ad campaign report (minimum 7 days of data), (4) Author Central page link, (5) 6-Month KDP Business Plan: 5 books in pipeline with niche research, content plan, cover design timeline, marketing strategy, and income projections.",
      },
    ],
  },
};
