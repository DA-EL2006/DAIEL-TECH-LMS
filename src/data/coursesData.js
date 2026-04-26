export const coursesData = {
  1: {
    id: 1,
    title: "Python Programming",
    description:
      "A thorough Python programming course taking students from absolute zero to building real applications. Covers core syntax, data structures, OOP, file handling, APIs, databases, and automation. Students graduate able to build functional Python applications from scratch.",
    duration: "8 Modules | ~12 Weeks",
    level: "Beginner – No prior programming experience required",
    comingSoon: false,
    modules: [
      {
        id: "p1",
        title: "Module 1",
        subtitle: "Python Basics & Environment Setup",
        lessons: [
          {
            id: "pv1.1",
            videoTitle: "Installing Python & VS Code",
            tasks: [
              [
                "Install Python 3.x and VS Code, configure the interpreter, and create a small script that prints your Python version and VS Code workspace settings.",
              ],
            ],
          },
          {
            id: "pv1.2",
            videoTitle: "Hello World and Basic Scripts",
            tasks: [
              [
                "Write and run your first Python script (Hello, World!), then modify it to greet the user by name.",
              ],
            ],
          },
          {
            id: "pv1.3",
            videoTitle: "Variables and Data Types",
            tasks: [
              [
                "Create 5 variables using int, float, string, boolean, and None types. Print each value and its type using the type() function.",
              ],
            ],
          },
          {
            id: "pv1.4",
            videoTitle: "Arithmetic Operators",
            tasks: [
              [
                "Write a Python script that uses arithmetic operators and operator precedence to calculate and print a small set of formatted results.",
              ],
            ],
          },
          {
            id: "pv1.5",
            videoTitle: "Working with Strings",
            tasks: [
              [
                "Use string methods upper(), lower(), strip(), split(), replace(), and len() to transform a sample sentence and print the before/after output.",
              ],
            ],
          },
          {
            id: "pv1.6",
            videoTitle: "Formatting Output (f-strings)",
            tasks: [
              [
                "Write a script that takes user input for name and favorite language, then prints a formatted message using an f-string.",
              ],
            ],
          },
          {
            id: "pv1.7",
            videoTitle: "Input, Output & Best Practices",
            tasks: [
              [
                "Build a small script that prompts the user for three values and prints them clearly using input() and print().",
                "Add comments and clean formatting to your script, then explain how each comment improves code readability.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 1: Build a Personal Info Card program. Accept the user's name, age, city, and hobby via input(). Display a neatly formatted info card using f-strings. Include at least 3 string methods.",
      },
      {
        id: "p2",
        title: "Module 2",
        subtitle: "Control Flow & Functions",
        lessons: [
          {
            id: "pv2.1",
            videoTitle: "Comparison and Logical Operators",
            tasks: [
              [
                "Write sample comparisons using ==, !=, >, <, >=, <= and print whether each comparison is True or False.",
                "Combine comparisons using and, or, and not to evaluate Boolean expressions and print each result.",
              ],
            ],
          },
          {
            id: "pv2.2",
            videoTitle: "Conditional Statements",
            tasks: [
              [
                "Write a menu-style script using if / elif / else and nested conditionals to classify user input into categories.",
              ],
            ],
          },
          {
            id: "pv2.3",
            videoTitle: "While Loops",
            tasks: [
              [
                "Write a while loop that prompts the user until they type quit, using break and continue to control the loop flow.",
              ],
            ],
          },
          {
            id: "pv2.4",
            videoTitle: "For Loops and Iteration",
            tasks: [
              [
                "Use for loops with range() to iterate a list and a string, printing each item and its index.",
                "Create loop examples that use an accumulator, a flag variable, and a nested loop to solve a small data-processing problem.",
              ],
            ],
          },
          {
            id: "pv2.5",
            videoTitle: "Defining Custom Functions",
            tasks: [
              [
                "Define a function with parameters and a return value that calculates and returns a summary statistic.",
              ],
            ],
          },
          {
            id: "pv2.6",
            videoTitle: "Variable Scope",
            tasks: [
              [
                "Write a script showing local vs global scope, then explain why local variables are safer for reusable functions.",
              ],
            ],
          },
          {
            id: "pv2.7",
            videoTitle: "Advanced Parameters & Docstrings",
            tasks: [
              [
                "Write a function that uses default parameters, *args, and **kwargs, then call it with different argument combinations.",
                "Add docstrings to your functions and show how help() or documentation comments describe function behavior.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 2: Build a Grade Calculator. Accept any number of subject scores. Compute the average, assign a letter grade (A–F), and print a report. Use at least 3 custom functions and a loop. Handle the case of zero subjects gracefully.",
      },
      {
        id: "p3",
        title: "Module 3",
        subtitle: "Data Structures – Lists, Tuples, Sets & Dictionaries",
        lessons: [
          {
            id: "pv3.1",
            videoTitle: "Deep Dive into Lists",
            tasks: [
              [
                "Create a list and demonstrate indexing, slicing, append, insert, remove, pop, and sort operations.",
              ],
            ],
          },
          {
            id: "pv3.2",
            videoTitle: "List Comprehensions",
            tasks: [
              [
                "Use list comprehensions to filter and transform a list of numbers or strings and print the new result.",
              ],
            ],
          },
          {
            id: "pv3.3",
            videoTitle: "Understanding Tuples",
            tasks: [
              [
                "Create tuple examples that show immutability, tuple packing/unpacking, and a use case for storing fixed records.",
              ],
            ],
          },
          {
            id: "pv3.4",
            videoTitle: "Working with Sets",
            tasks: [
              [
                "Use set operations to compare two collections and print union, intersection, and difference results.",
              ],
            ],
          },
          {
            id: "pv3.5",
            videoTitle: "Dictionaries in Python",
            tasks: [
              [
                "Create a dictionary, access and update values, remove a key, and iterate over keys, values, and items.",
                "Use a dictionary comprehension to transform one dictionary into another, such as squaring numeric values or swapping keys/values.",
              ],
            ],
          },
          {
            id: "pv3.6",
            videoTitle: "Nested Data Structures",
            tasks: [
              [
                "Build a nested structure like a list of dictionaries or a dictionary of lists and access nested values programmatically.",
              ],
            ],
          },
          {
            id: "pv3.7",
            videoTitle: "Choosing the Right Structure",
            tasks: [
              [
                "Compare two data structures for a problem and explain why one is a better fit based on access patterns and mutability.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 3: Build a Student Management System. Store student records as a list of dictionaries (name, scores, grade). Support: add student, view all, search by name, calculate class average. All data lives in memory.",
      },
      {
        id: "p4",
        title: "Module 4",
        subtitle: "Object-Oriented Programming (OOP)",
        lessons: [
          {
            id: "pv4.1",
            videoTitle: "Introduction to Classes and Objects",
            tasks: [
              [
                "Create a simple class with attributes and methods, then instantiate objects to show how classes model real data.",
                "Build a class using __init__ and instance attributes, then create two objects with different values.",
              ],
            ],
          },
          {
            id: "pv4.2",
            videoTitle: "Instance, Class, and Static Methods",
            tasks: [
              [
                "Implement instance, class, and static methods in a class and explain when each type should be used.",
              ],
            ],
          },
          {
            id: "pv4.3",
            videoTitle: "Encapsulation in Python",
            tasks: [
              [
                "Use public and “private” attributes in a class and demonstrate controlled access through getter/setter methods.",
              ],
            ],
          },
          {
            id: "pv4.4",
            videoTitle: "Inheritance and super()",
            tasks: [
              [
                "Define a base class and child class using super(), then show shared behavior and child-specific behavior.",
              ],
            ],
          },
          {
            id: "pv4.5",
            videoTitle: "Polymorphism and Overriding",
            tasks: [
              [
                "Override a method in a child class and use polymorphism to call the correct implementation at runtime.",
              ],
            ],
          },
          {
            id: "pv4.6",
            videoTitle: "Special (Dunder) Methods",
            tasks: [
              [
                "Implement __str__, __repr__, __len__, and __eq__ in a class and demonstrate their behavior with print() and comparisons.",
              ],
            ],
          },
          {
            id: "pv4.7",
            videoTitle: "Composition and Practical OOP",
            tasks: [
              [
                "Build a class using composition and another using inheritance, and explain why composition is preferred for the second example.",
                "Build a mini bank account hierarchy with savings and checking accounts, include deposit/withdraw methods, and enforce a withdrawal limit.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 4: Design and implement a Library Management System using OOP. Classes: Book, Member, Library. Library supports: add/remove books, register members, borrow/return books (enforce a 3-book limit per member), view available books.",
      },
      {
        id: "p5",
        title: "Module 5",
        subtitle: "File Handling, Exceptions & Modules",
        lessons: [
          {
            id: "pv5.1",
            videoTitle: "Reading and Writing Text Files",
            tasks: [
              [
                "Read a text file and write a transformed copy using open(), read(), readlines(), and write().",
                "Use a with statement to safely read from and write to a file, and explain why it is preferred.",
              ],
            ],
          },
          {
            id: "pv5.2",
            videoTitle: "Working with CSV Files",
            tasks: [
              [
                "Load a CSV file with DictReader, modify rows, and write the result back with DictWriter.",
              ],
            ],
          },
          {
            id: "pv5.3",
            videoTitle: "JSON Data Handling",
            tasks: [
              [
                "Load JSON data from a file, modify the object, and save it back with json.dump().",
              ],
            ],
          },
          {
            id: "pv5.4",
            videoTitle: "Exception Handling Basics",
            tasks: [
              [
                "Write code that handles file errors with try/except/else/finally and reports a helpful message to the user.",
              ],
            ],
          },
          {
            id: "pv5.5",
            videoTitle: "Custom Exceptions",
            tasks: [
              [
                "Define and raise a custom exception type for a validation error, then catch it and print a user-friendly message.",
              ],
            ],
          },
          {
            id: "pv5.6",
            videoTitle: "Python Standard Library",
            tasks: [
              [
                "Use os, sys, math, random, and datetime in a short script that manipulates files, computes math results, and prints a timestamp.",
              ],
            ],
          },
          {
            id: "pv5.7",
            videoTitle: "Modules and Virtual Environments",
            tasks: [
              [
                "Create a Python package with at least two modules, import them, and use a function from each module.",
                "Create a virtual environment with venv, install a package with pip, and list the installed dependencies.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 5: Build a Contacts Manager that persists data in a JSON file. Features: add contact (name, phone, email), search, update, delete, view all. Data must survive program restarts. Handle FileNotFoundError and invalid input gracefully.",
      },
      {
        id: "p6",
        title: "Module 6",
        subtitle: "APIs, Web Requests & Data Processing",
        lessons: [
          {
            id: "pv6.1",
            videoTitle: "Understanding HTTP",
            tasks: [
              [
                "Write notes and a sample request summary showing GET vs POST, common status codes, header use, and JSON response structure.",
              ],
            ],
          },
          {
            id: "pv6.2",
            videoTitle: "Making Requests with Python",
            tasks: [
              [
                "Use requests to fetch JSON from a free API, pass query params and headers, and print the parsed response.",
              ],
            ],
          },
          {
            id: "pv6.3",
            videoTitle: "API Authentication",
            tasks: [
              [
                "Demonstrate how to send an API key or Bearer token in request headers securely and explain why it matters.",
              ],
            ],
          },
          {
            id: "pv6.4",
            videoTitle: "Consuming Real APIs",
            tasks: [
              [
                "Fetch JSON from an API, parse it into Python objects, and print selected values from the response.",
                "Call a real API such as OpenWeather or REST Countries, consume the data, and present a short summary of the response.",
              ],
            ],
          },
          {
            id: "pv6.5",
            videoTitle: "Intro to Web Scraping",
            tasks: [
              [
                "Scrape a simple webpage with BeautifulSoup using find() and find_all(), then extract and print selected data.",
              ],
            ],
          },
          {
            id: "pv6.6",
            videoTitle: "Data Transformation",
            tasks: [
              [
                "Clean and transform scraped or API data by normalizing fields, removing empties, and creating a summary dataset.",
              ],
            ],
          },
          {
            id: "pv6.7",
            videoTitle: "Web Scraping Best Practices",
            tasks: [
              [
                "Document how to check robots.txt and implement rate-limiting pauses when scraping or calling APIs.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 6: Build a Weather Dashboard CLI app. Fetch current weather and 5-day forecast for any city using the OpenWeatherMap API (free tier). Display: temperature, humidity, weather description, and a simple ASCII representation of the forecast. Save results to a timestamped JSON file.",
      },
      {
        id: "p7",
        title: "Module 7",
        subtitle: "Databases & Automation with Python",
        lessons: [
          {
            id: "pv7.1",
            videoTitle: "Relational Database Concepts",
            tasks: [
              [
                "Design a simple relational schema, then explain tables, rows, columns, primary keys, and foreign keys using that schema.",
              ],
            ],
          },
          {
            id: "pv7.2",
            videoTitle: "Using SQLite in Python",
            tasks: [
              [
                "Create an SQLite database with sqlite3, define a table, and insert sample data using SQL commands.",
                "Write Python code that inserts, selects, updates, and deletes rows in an SQLite table.",
              ],
            ],
          },
          {
            id: "pv7.3",
            videoTitle: "Secure Database Queries",
            tasks: [
              [
                "Use parameterized SQLite queries to safely insert user input and explain how this prevents SQL injection.",
              ],
            ],
          },
          {
            id: "pv7.4",
            videoTitle: "Introduction to SQLAlchemy ORM",
            tasks: [
              [
                "Define SQLAlchemy models, create a session, and query records from the database.",
              ],
            ],
          },
          {
            id: "pv7.5",
            videoTitle: "System Task Automation",
            tasks: [
              [
                "Write an automation script that organizes files into folders by extension using os and shutil.",
                "Use the schedule library to run a Python task every minute or every day, then explain how scheduling works.",
              ],
            ],
          },
          {
            id: "pv7.6",
            videoTitle: "Email Automation",
            tasks: [
              [
                "Write a script that sends a test email with smtplib and describe how to keep credentials secure.",
              ],
            ],
          },
          {
            id: "pv7.7",
            videoTitle: "PDF and Excel Automation",
            tasks: [
              [
                "Use PyPDF2 or openpyxl to read or write a PDF/Excel file and describe the extraction or generation steps.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 7: Build an Expense Tracker with SQLite backend. Features: add expense (date, category, amount, description), view all expenses, filter by date range or category, view monthly totals. Bonus: export to CSV and auto-email a monthly summary.",
      },
      {
        id: "p8",
        title: "Module 8",
        subtitle: "🏆 CAPSTONE PROJECT – Real-World Python Application",
        lessons: [
          {
            id: "pv8.1",
            videoTitle: "Week 1: Project Setup and Planning",
            tasks: [
              [
                "Choose a capstone project idea and write a short plan for the CLI app, data tool, or automation bot you will build.",
                "Plan core features, create a GitHub repo, and commit your initial project scaffold.",
              ],
            ],
          },
          {
            id: "pv8.2",
            videoTitle: "Week 2: Core Implementation",
            tasks: [
              [
                "Implement the core features of your capstone project and verify they work end to end.",
                "Write unit tests for your capstone project using unittest or pytest and run them locally.",
              ],
            ],
          },
          {
            id: "pv8.3",
            videoTitle: "Week 3: Polish and Documentation",
            tasks: [
              [
                "Improve the user experience, add error handling, and document the changes made.",
                "Add logging and improve documentation for your capstone project.",
              ],
            ],
          },
          {
            id: "pv8.4",
            videoTitle: "Week 4: Finalizing and Demo",
            tasks: [
              [
                "Review your project, capture a demo video, and note any final changes needed.",
                "Share your project for peer review, collect feedback, and summarize the key improvements.",
              ],
            ],
          },
          {
            id: "pv8.5",
            videoTitle: "Submitting Deliverables",
            tasks: [
              [
                "Prepare the GitHub repo, README, working application, test file, and a 5-minute demo video for final submission.",
              ],
            ],
          },
        ],
        assignment:
          "CAPSTONE: Build a complete Python application of your choice (e.g., Budget Tracker, Quiz App, Inventory System, News Aggregator Bot). Must include: OOP design, file or database persistence, at least one external library, exception handling, unit tests, and full GitHub documentation.",
      },
    ],
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
    id: 3,
    title: "Frontend Development",
    description:
      "A complete frontend development course covering the holy trinity of the web — HTML, CSS, and JavaScript — followed by an introduction to the React.js library. Students will build responsive, interactive websites and a React-powered web app.",
    duration: "8 Modules | ~14 Weeks",
    level: "Beginner – No experience required",
    comingSoon: false,
    modules: [
      {
        id: "f1",
        title: "Module 1",
        subtitle: "HTML – Structure of the Web",
        lessons: [
          {
            id: "fv1.1",
            videoTitle: "Introduction to the Web and Tools",
            tasks: [
              [
                "Explain how browsers request pages over HTTP and build a simple HTML file to demonstrate the page lifecycle.",
                "Install VS Code and Live Server, launch a sample HTML page, and document how the live reload workflow works.",
              ],
            ],
          },
          {
            id: "fv1.2",
            videoTitle: "Basic HTML Document Structure",
            tasks: [
              [
                "Build a basic HTML page with DOCTYPE, html, head, and body sections, and display a header and paragraph in the browser.",
              ],
            ],
          },
          {
            id: "fv1.3",
            videoTitle: "Working with Text and Lists",
            tasks: [
              [
                "Create an HTML page using headings, paragraphs, spans, strong/emphasis tags, and line breaks to structure sample content.",
                "Build nested ordered and unordered lists in HTML to represent a menu or task list.",
              ],
            ],
          },
          {
            id: "fv1.4",
            videoTitle: "Links and Media",
            tasks: [
              [
                "Create a page with internal and external links, using target and relative/absolute URLs correctly.",
                "Add images to a webpage with alt text and explicit width/height attributes for proper accessibility.",
              ],
            ],
          },
          {
            id: "fv1.5",
            videoTitle: "HTML Tables",
            tasks: [
              [
                "Build an HTML table with headers, body rows, colspan, and rowspan to present structured data.",
              ],
            ],
          },
          {
            id: "fv1.6",
            videoTitle: "Forms and Inputs",
            tasks: [
              [
                "Create a form with text, email, password, checkbox, radio, textarea, select, and labeled controls.",
              ],
            ],
          },
          {
            id: "fv1.7",
            videoTitle: "Semantic HTML5 and Validation",
            tasks: [
              [
                "Build a semantic HTML page using header, nav, main, section, article, aside, and footer elements.",
                "Validate your HTML page with the W3C validator and fix any errors the validator reports.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 1: Build a Personal Portfolio Page using only HTML. Include: a header with your name and nav links, an About Me section, a Skills list, a Projects table (3 fake projects), a Contact form, and a footer. Must be fully semantic and pass W3C validation.",
      },
      {
        id: "f2",
        title: "Module 2",
        subtitle: "CSS – Styling the Web",
        lessons: [
          {
            id: "fv2.1",
            videoTitle: "CSS Syntax and Application",
            tasks: [
              [
                "Write CSS rules using selectors, properties, and values to style a sample HTML page.",
                "Apply styling using inline CSS, an internal style block, and an external stylesheet for the same page.",
              ],
            ],
          },
          {
            id: "fv2.2",
            videoTitle: "Advanced Selectors and Typography",
            tasks: [
              [
                "Use element, class, ID, attribute, and pseudo-class selectors to style buttons, inputs, and list items.",
                "Style text with Google Fonts, font-size, font-weight, line-height, and letter-spacing for a polished heading and paragraph.",
              ],
            ],
          },
          {
            id: "fv2.3",
            videoTitle: "The Box Model and Colors",
            tasks: [
              [
                "Use the CSS box model to space and size a card element, including box-sizing adjustments.",
                "Style a page using hex, rgb, rgba, and hsl colors, and define a color palette with CSS variables.",
              ],
            ],
          },
          {
            id: "fv2.4",
            videoTitle: "Backgrounds and Styling Elements",
            tasks: [
              [
                "Create backgrounds with solid color, an image, and a gradient, then control size and repeat behavior.",
              ],
            ],
          },
          {
            id: "fv2.5",
            videoTitle: "Layout with Flexbox",
            tasks: [
              [
                "Build a responsive layout with Flexbox, centering content, using gap, and wrapping items on smaller screens.",
              ],
            ],
          },
          {
            id: "fv2.6",
            videoTitle: "Layout with CSS Grid",
            tasks: [
              [
                "Create a CSS Grid layout with columns, rows, named grid areas, and responsive rearrangement.",
              ],
            ],
          },
          {
            id: "fv2.7",
            videoTitle: "Responsive Design and Animations",
            tasks: [
              [
                "Add responsive media queries and viewport units to make a landing page adapt from mobile to desktop.",
                "Animate a button or card using CSS transition and keyframe animation for hover and entrance effects.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 2: Style your Module 1 portfolio page using an external CSS file. Requirements: responsive layout (looks great on mobile + desktop), Flexbox navbar, CSS Grid project section, Google Font, custom color palette with CSS variables, hover effects on buttons/links, smooth transitions.",
      },
      {
        id: "f3",
        title: "Module 3",
        subtitle: "JavaScript Fundamentals",
        lessons: [
          {
            id: "fv3.1",
            videoTitle: "Introduction to JS and Variables",
            tasks: [
              [
                "Create a web page with a linked script file and explain how the browser loads and executes JavaScript.",
                "Write examples showing var, let, and const behavior and explain how hoisting works for each.",
              ],
            ],
          },
          {
            id: "fv3.2",
            videoTitle: "Data Types and Operators",
            tasks: [
              [
                "Create variables of each JavaScript data type and log their values and types to the console.",
                "Use arithmetic, comparison, logical, and ternary operators in small expressions and print the results.",
              ],
            ],
          },
          {
            id: "fv3.3",
            videoTitle: "Control Flow",
            tasks: [
              [
                "Write scripts that use if/else, switch, for, while, and do-while constructs for simple decision-making.",
              ],
            ],
          },
          {
            id: "fv3.4",
            videoTitle: "JavaScript Functions",
            tasks: [
              [
                "Define functions using declarations, expressions, and arrow syntax, including default parameters.",
              ],
            ],
          },
          {
            id: "fv3.5",
            videoTitle: "Working with Arrays",
            tasks: [
              [
                "Manipulate an array with map, filter, reduce, forEach, find, some, every, push, pop, and splice to solve a small task.",
              ],
            ],
          },
          {
            id: "fv3.6",
            videoTitle: "Objects and JSON",
            tasks: [
              [
                "Create an object with methods, access properties using dot and bracket notation, and destructure values.",
              ],
            ],
          },
          {
            id: "fv3.7",
            videoTitle: "Modern JS Features (ES6+)",
            tasks: [
              [
                "Refactor an older JavaScript function to use arrow syntax, template literals, and spread/rest operators.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 3: Build a JavaScript Quiz App (no libraries). At least 10 questions stored in an array of objects. Show one question at a time, track score, display final result with percentage and grade. Include a Restart button. All logic in vanilla JS.",
      },
      {
        id: "f4",
        title: "Module 4",
        subtitle: "DOM Manipulation & Events",
        lessons: [
          {
            id: "fv4.1",
            videoTitle: "Understanding the DOM",
            tasks: [
              [
                "Create a page and inspect the DOM elements with JavaScript to show the document structure.",
                "Select DOM elements using getElementById, querySelector, and querySelectorAll, then update their content.",
              ],
            ],
          },
          {
            id: "fv4.2",
            videoTitle: "Modifying DOM Elements",
            tasks: [
              [
                "Modify DOM elements using textContent, innerHTML, style, and classList methods.",
              ],
            ],
          },
          {
            id: "fv4.3",
            videoTitle: "Creating and Removing Elements",
            tasks: [
              [
                "Dynamically create and append new DOM elements with createElement, appendChild, and insertAdjacentHTML.",
                "Remove DOM elements using remove() and removeChild() in response to user actions.",
              ],
            ],
          },
          {
            id: "fv4.4",
            videoTitle: "Event Listeners",
            tasks: [
              [
                "Attach event listeners to buttons and form fields, then inspect the event object in the handler.",
              ],
            ],
          },
          {
            id: "fv4.5",
            videoTitle: "Advanced Events",
            tasks: [
              [
                "Implement event delegation on a list and explain how event bubbling works in the browser.",
              ],
            ],
          },
          {
            id: "fv4.6",
            videoTitle: "Form Validation with JS",
            tasks: [
              [
                "Build a form with JS validation that prevents default submission and shows error messages.",
              ],
            ],
          },
          {
            id: "fv4.7",
            videoTitle: "Using Local Storage",
            tasks: [
              [
                "Store, retrieve, and remove structured data in localStorage using JSON.stringify and JSON.parse.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 4: Build a To-Do List App with DOM manipulation. Features: add task, mark complete (strikethrough), delete task, filter (All/Active/Completed), task count. Persist tasks in localStorage so they survive page refresh. Fully styled with CSS.",
      },
      {
        id: "f5",
        title: "Module 5",
        subtitle: "Async JavaScript & APIs",
        lessons: [
          {
            id: "fv5.1",
            videoTitle: "Synchronous vs Asynchronous JS",
            tasks: [
              [
                "Write a synchronous and asynchronous example in JS, then explain the difference in execution order.",
                "Use a callback-based function to simulate async behavior and explain how callback hell appears.",
              ],
            ],
          },
          {
            id: "fv5.2",
            videoTitle: "Promises in JavaScript",
            tasks: [
              [
                "Create promises and use .then(), .catch(), .finally(), and Promise.all() to manage asynchronous results.",
              ],
            ],
          },
          {
            id: "fv5.3",
            videoTitle: "Async / Await Syntax",
            tasks: [
              [
                "Refactor Promise-based code to async/await and handle errors with try/catch.",
              ],
            ],
          },
          {
            id: "fv5.4",
            videoTitle: "Fetching Data from APIs",
            tasks: [
              [
                "Use fetch() to retrieve JSON from a public API and display the parsed data in the browser console.",
              ],
            ],
          },
          {
            id: "fv5.5",
            videoTitle: "Understanding REST APIs",
            tasks: [
              [
                "Explain REST API concepts and make sample fetch requests for different HTTP methods.",
                "Build a simple UI that fetches data from a public API like OpenWeather or REST Countries.",
              ],
            ],
          },
          {
            id: "fv5.6",
            videoTitle: "Error Handling in Async JS",
            tasks: [
              [
                "Add error catching to async fetch code and display a user-friendly message when the request fails.",
              ],
            ],
          },
          {
            id: "fv5.7",
            videoTitle: "UX: Loading States",
            tasks: [
              [
                "Add a loading spinner or message while waiting for async data to arrive.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 5: Build a Country Explorer web app. Use the REST Countries API to let users search any country. Display: flag, name, capital, population, region, languages, currencies. Show a loading spinner during fetch. Handle not-found errors gracefully.",
      },
      {
        id: "f6",
        title: "Module 6",
        subtitle: "Introduction to React.js",
        lessons: [
          {
            id: "fv6.1",
            videoTitle: "What is React and Why Use It?",
            tasks: [
              [
                "Build a simple React component and explain how React uses the Virtual DOM and component model to update the UI efficiently.",
              ],
            ],
          },
          {
            id: "fv6.2",
            videoTitle: "Setting up a React Project",
            tasks: [
              [
                "Scaffold a React project with Vite or Create React App and verify the starter app runs successfully.",
              ],
            ],
          },
          {
            id: "fv6.3",
            videoTitle: "Understanding JSX",
            tasks: [
              [
                "Build a React component using JSX expressions and className styling.",
              ],
            ],
          },
          {
            id: "fv6.4",
            videoTitle: "React Functional Components & Props",
            tasks: [
              [
                "Create and export a functional React component, then import and render it in App.",
                "Pass props to a component and validate them with PropTypes or type annotations.",
              ],
            ],
          },
          {
            id: "fv6.5",
            videoTitle: "State Management with useState",
            tasks: [
              [
                "Build a React counter component using useState to update state and trigger re-renders.",
              ],
            ],
          },
          {
            id: "fv6.6",
            videoTitle: "Rendering Lists and Conditions",
            tasks: [
              [
                "Render a list of items with .map() and assign keys to each child element.",
                "Use && and ternary operators to render different content based on component state.",
              ],
            ],
          },
          {
            id: "fv6.7",
            videoTitle: "Handling Events and Composition",
            tasks: [
              [
                "Add onClick and onChange handlers to React components and update state when events occur.",
                "Compose a parent component with child and grandchild components passing props down the tree.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 6: Build a React Recipe Book app. Data: an array of recipe objects (name, ingredients, steps, image URL). Features: display recipe cards in a grid, search/filter by name or ingredient, click a card to view full recipe detail, toggle a 'Saved' heart icon. State managed with useState.",
      },
      {
        id: "f7",
        title: "Module 7",
        subtitle: "React Hooks, Routing & State Management",
        lessons: [
          {
            id: "fv7.1",
            videoTitle: "Side Effects with useEffect",
            tasks: [
              [
                "Use useEffect to fetch data and clean up a timer or subscription when the component unmounts.",
              ],
            ],
          },
          {
            id: "fv7.2",
            videoTitle: "Fetching Data in React",
            tasks: [
              [
                "Fetch data inside useEffect and display it in the component once the request completes.",
              ],
            ],
          },
          {
            id: "fv7.3",
            videoTitle: "Custom Hooks",
            tasks: [
              [
                "Create a custom hook to encapsulate reusable state or fetch logic and use it in a component.",
              ],
            ],
          },
          {
            id: "fv7.4",
            videoTitle: "React Router for Navigation",
            tasks: [
              [
                "Build a small React app with React Router routes, Links, and a dynamic route using useParams.",
                "Create a multi-page React app with navigation and route-based content.",
              ],
            ],
          },
          {
            id: "fv7.5",
            videoTitle: "Global State with Context API",
            tasks: [
              [
                "Use Context API to share state across components without prop drilling.",
                "Describe a state management pattern and show how to store shared state in React.",
              ],
            ],
          },
          {
            id: "fv7.6",
            videoTitle: "Working with Forms in React",
            tasks: [
              [
                "Create a React form with controlled inputs and basic validation logic.",
              ],
            ],
          },
          {
            id: "fv7.7",
            videoTitle: "React Performance Basics",
            tasks: [
              [
                "Use useMemo or useCallback to optimize a React component and explain the performance benefit.",
              ],
            ],
          },
        ],
        assignment:
          "Assignment 7: Extend your Recipe Book into a multi-page app using React Router. Pages: Home (recipe grid with search), Recipe Detail (dynamic route with useParams), Saved Recipes (global state via Context API). Fetch recipes from an API (TheMealDB free API). Add a 404 Not Found page.",
      },
      {
        id: "f8",
        title: "Module 8",
        subtitle: "🏆 CAPSTONE PROJECT – Full Frontend Web App",
        lessons: [
          {
            id: "fv8.1",
            videoTitle: "Week 1: UI Design and Project Setup",
            tasks: [
              [
                "Design wireframes for your frontend capstone in Figma or on paper and explain your layout choices.",
                "Set up the React project, define the component tree, and sketch the routes for the app.",
              ],
            ],
          },
          {
            id: "fv8.2",
            videoTitle: "Week 2: Core Components and API",
            tasks: [
              [
                "Develop the core app components and pages for your capstone project.",
                "Integrate a real API into your app and display dynamic content from the response.",
              ],
            ],
          },
          {
            id: "fv8.3",
            videoTitle: "Week 3: Polishing the UI",
            tasks: [
              [
                "Polish the UI for responsiveness and add subtle animations to improve the experience.",
                "Add loading and error states to your app when fetching remote data.",
              ],
            ],
          },
          {
            id: "fv8.4",
            videoTitle: "Week 3: Deployment",
            tasks: [
              [
                "Deploy your React app to Vercel or Netlify and verify the live site works.",
              ],
            ],
          },
          {
            id: "fv8.5",
            videoTitle: "Week 4: Review and Demo",
            tasks: [
              [
                "Review and refactor your app, prepare a demo, and get it ready for portfolio submission.",
                "Prepare the full deliverables: GitHub repo, live URL, wireframe, and a short walkthrough video.",
              ],
            ],
          },
        ],
        assignment:
          "CAPSTONE: Build and deploy a complete React web application of your choice (e.g., Movie Browser, Job Board, E-commerce UI, Fitness Tracker). Must use: functional components, useState, useEffect, React Router, at least one external API, Context API or prop drilling, responsive design, and be deployed live. Include a professional README.",
      },
    ],
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
