export const coursesData = {
  1: {
    id: 1,
    title: "Python Programming",
    price: 5000,
    currency: "NGN",
    description:
      "A thorough Python programming course taking students from absolute zero to building real applications. Covers core syntax, data structures, OOP, file handling, APIs, databases, and automation. Students graduate able to build functional Python applications from scratch.",
    duration: "8 Modules | ~12 Weeks",
    level: "Beginner – No prior programming experience required",
    comingSoon: false,
    modules: [
      {
        id: "module_1",
        title: "Module 1",
        subtitle: "Introduction, Environment Setup & Core Numbers",
        description:
          "Understand why Python 3 is the future high-level language of choice, complete the path environmental variable installation, and master mathematical operators, bid-mass rules, and assignment short-hands.",
        lessons: [
          {
            id: "pv1.1",
            videoTitle:
              "Python 3 Tutorial for Beginners #1 - Why Learn Python?",
            duration: "5:21",
            url: "https://www.youtube.com/embed/Ozrduu2W9B8?si=JFZc-QLzWAbU3k-S",
          },
          {
            id: "pv1.2",
            videoTitle:
              "Python 3 Tutorial for Beginners #2 - Installing Python 3",
            duration: "4:28",
            url: "https://www.youtube.com/embed/SbQAAuom-GA?si=OvaOVUB0S_u6W3p8",
          },
          {
            id: "pv1.3",
            videoTitle: "Python 3 Tutorial for Beginners #3 - Numbers",
            duration: "8:29",
            url: "https://www.youtube.com/embed/Gqby4v5JOu4?si=bzD7llA04VM7K_3b",
          },
        ],
        assignment: {
          title: "Interactive Mathematical Engine",
          objective:
            "Build a simple Python program that works like a calculator. It should take in numbers (like your wages and bills), do some math on them, and print the results to the screen without causing any errors.",
          steps: [
            "Check Your Setup: First, open your computer's terminal (or command prompt) and type `python --version` (or `python3 --version`). You should see the Python version number pop up. If it doesn't, Python isn't set up right!",
            "Basic Math with Variables: Create some variables to hold numbers, like `wages = 1000` and `rent = 500`. Then, use Python's math shortcuts to update those numbers. For example, `wages -= rent` means 'take the value of wages, subtract rent, and save that new number back into the wages variable.' Do this for a few different expenses.",
            "The Modulo Operator (`%`): Imagine you have 10 slices of pizza and 3 friends. If everyone gets an equal number of whole slices, how many are left over? That's what modulo does—it finds the remainder. Use the `%` symbol in your code to find the remainder of a division problem. For example, `10 % 3` will give you `1` (because 10 divided by 3 is 3, with a remainder of 1).",
          ],
          hints: [
            "Strings vs. Numbers: When you ask a user to type something into Python using `input()`, Python always thinks it's text (a string), even if they typed a number like '5'. Before you can do math with it, you have to tell Python it's a number using `int()` (for whole numbers) or `float()` (for numbers with decimals).",
            "Checking Types: If your math isn't working, use the `type()` command (e.g., `print(type(my_variable))`) to see if Python thinks your variable is a string or an integer.",
          ],
        },
      },
      {
        id: "module_2",
        title: "Module 2",
        subtitle: "List Data Structures, Slicing & Standard Terminal Input",
        description:
          "Master array operations, item concatenation sequences, zero-indexed index slicing ranges, list insertion/removal methods, and string concatenation bindings from direct input blocks.",
        lessons: [
          {
            id: "pv2.1",
            videoTitle: "Python 3 Tutorial for Beginners #5 - Lists",
            duration: "10:33",
            url: "https://www.youtube.com/embed/cl0R4Tbf2v0?si=oNRevjiEfx882sys",
          },
          {
            id: "pv2.2",
            videoTitle: "Python 3 Tutorial for Beginners #6 - Standard Input",
            duration: "9:23",
            url: "https://www.youtube.com/embed/CEO614YbQCY?si=Wv7PwB-ppRN6BLZL",
          },
        ],
        assignment: {
          title: "The Dynamic Space Inventory Controller",
          objective:
            "Create a list (an inventory) that you can add things to while the program is running, and learn how to grab specific sections of that list.",
          steps: [
            'Create a List of Lists: Start by making a list that contains other lists inside of it. Think of it like a filing cabinet with folders inside. For example: `inventory = [["Apples", 5], ["Bananas", 10]]`.',
            "Add to the List: Write code that asks the user to type in a new item. Then, use the `.append()` command to stick that new item onto the end of your inventory list.",
            "Slice the List: Learn how to grab just a piece of your list. For example, if you want the first three items, you use slicing: `inventory[0:3]`. Remember, Python starts counting at zero, not one!",
          ],
          hints: [
            'Finding Things in Nested Lists: If you have lists inside of lists, you need two sets of brackets to find things. `inventory[0][1]` means: go to the first item in the main list (which is the list `["Apples", 5]`), and then grab the second item inside that smaller list (which is `5`).',
            "Removing Items: The `.pop()` command removes the last item from a list. If you want to remember what you just removed, assign it to a variable: `last_item = inventory.pop()`.",
          ],
        },
      },
      {
        id: "module_3",
        title: "Module 3",
        subtitle: "Advanced String Formatting & Programmatic Branching",
        description:
          "Ditch disjointed string concatenations using modern literal f-strings with precise column and decimal precision modifiers, while implementing complex conditional paths via logical comparison structures.",
        lessons: [
          {
            id: "pv3.1",
            videoTitle:
              "Python 3 Tutorial for Beginners #7 - String Formatting",
            duration: "10:15",
            url: "https://www.youtube.com/embed/yVGSeRcQfyI?si=f1FHxK71NuIBv6wU",
          },
          {
            id: "pv3.2",
            videoTitle: "Python 3 Tutorial for Beginners #8 - If Statements",
            duration: "10:10",
            url: "https://www.youtube.com/embed/t3c41sKJS20?si=ozsMVpwyZjLQ42Hp",
          },
        ],
        assignment: {
          title: "Precision Evaluation Console",
          objective:
            "Write a program that makes decisions using 'if' statements and prints out information that looks neat and organized, like a printed receipt or ID card.",
          steps: [
            "Making Decisions (`if/elif/else`): Ask the user for some information (like a test score). Use an `if` statement to check if the score is an A. If it's not, use an `elif` (else if) to check if it's a B. Keep going until you end with an `else` for anything that didn't match.",
            "Checking for 'Not Equal' (`!=`): Practice writing conditions that check if things are not the same. For example, `if password != \"secret\":` means 'if the password is NOT secret'.",
            // eslint-disable-next-line no-template-curly-in-string
            'Making it Look Good (f-strings): Use \'f-strings\' to easily mix variables into text. Put an `f` before your quote marks, and put your variables inside curly braces: `f"Your score is {score}"`. If you have a price like `10.5`, you can make it look like dollars and cents (`10.50`) by adding `:.2f` inside the curly braces: `f"The price is ${price:.2f}"`.',
          ],
          hints: [
            'Spacing: You can use f-strings to add blank spaces so columns line up nicely. `f"{name:20}"` means Python will add spaces until the name takes up exactly 20 characters of width.',
            "Order Matters: Python checks `if/elif/else` statements in order, from top to bottom. It stops as soon as it finds a true statement. Make sure you don't put a broad rule (like 'if score > 50') before a stricter rule (like 'if score > 90'), or the stricter rule will never run!",
          ],
        },
      },
      {
        id: "module_4",
        title: "Module 4",
        subtitle:
          "Iterative Structures: For Loops, While Loops & Range Generators",
        description:
          "Construct execution loops using linear element traversals, infinite state safety loops with conditional break/continue operators, and dynamic reverse-indexed numeric array generators.",
        lessons: [
          {
            id: "pv4.1",
            videoTitle: "Python 3 Tutorial for Beginners #9 - For Loops",
            duration: "7:20",
            url: "https://www.youtube.com/embed/ENMCxQ9kNS4?si=lUJOor0F6GmaGNM8",
          },
          {
            id: "pv4.2",
            videoTitle: "Python 3 Tutorial for Beginners #10 - While Loops",
            duration: "6:14",
            url: "https://www.youtube.com/embed/7p-BJ92aZp0?si=MGhEpTkO7WSZhvjt",
          },
          {
            id: "pv4.3",
            videoTitle: "Python 3 Tutorial for Beginners #11 - Ranges",
            duration: "7:12",
            url: "https://www.youtube.com/embed/GhrChSfaiu0?si=aRtHRTWgOeuk976d",
          },
        ],
        assignment: {
          title: "Reverse Data Telemetry Sorter",
          objective:
            "Write a loop that goes through a list of data backwards, and learns how to skip over certain pieces of data if they don't meet your rules.",
          steps: [
            "Counting Items: Use the `len()` command to find out how many items are in a list. This helps you know how many times your loop needs to run.",
            "Looping Backwards (`range`): The `range()` command usually counts up (0, 1, 2, 3). You need to make it count backwards. You do this by giving it three numbers: where to start, where to stop, and the 'step'. To go backwards, the step must be `-1`.",
            "Skipping Items (`continue`): Put an `if` statement inside your loop. If a piece of data hits a certain rule (like if the number is negative), use the `continue` command. This tells Python to skip the rest of the code for that single item and immediately move on to the next one in the list.",
          ],
          hints: [
            "The Negative Step: When using `range()` to count down, remember that the 'stop' number isn't included. If you want to count down to 0, your stop number needs to be `-1`.",
            "The Danger of `while` Loops: A `while` loop runs forever as long as its condition is true. If you forget to change that condition inside the loop (like adding 1 to a counter), the loop will never stop and your program will freeze!",
          ],
        },
      },
      {
        id: "module_5",
        title: "Module 5",
        subtitle: "Functional Architectures, Variable Scopes & Data Mapping",
        description:
          "Define functional blocks using parameterized inputs and tracking returns, distinguish local vs global declaration restrictions, and master associative multi-key dictionary arrays and deduplicated sets.",
        lessons: [
          {
            id: "pv5.1",
            videoTitle: "Python 3 Tutorial for Beginners #12 - Functions",
            duration: "10:49",
            url: "https://www.youtube.com/embed/l0E1tK-O8ew?si=TebZR-38wmA_D78y",
          },
          {
            id: "pv5.2",
            videoTitle: "Python 3 Tutorial for Beginners #13 - Variable Scope",
            duration: "4:25",
            url: "https://www.youtube.com/embed/wueXfiVkw1I?si=g-8xLQTFL4ivJvOK",
          },
          {
            id: "pv5.3",
            videoTitle: "Python 3 Tutorial for Beginners #14 - Dictionaries",
            duration: "12:32",
            url: "https://www.youtube.com/embed/q8H5R6eP3zQ?si=E0xKksAxVRVbcBH2",
          },
          {
            id: "pv5.4",
            videoTitle: "Python 3 Tutorial for Beginners #15 - Sorting & Sets",
            duration: "8:49",
            url: "https://www.youtube.com/embed/UirJNoJ9KT8?si=z3_lvyKFbdMzf7eH",
          },
        ],
        assignment: {
          title: "The Deduplicated Registry Engine",
          objective:
            "Build a 'function' (a reusable block of code) that takes in a messy dictionary (a way to store data with keys and values), removes any duplicate information, and gives you back a clean, unique set of data.",
          steps: [
            'Start with a Dictionary: Dictionaries store data in pairs, like a real dictionary has a word (the key) and a definition (the value). Example: `person = {"name": "Alice", "age": 30}`.',
            "Getting the Data Out: Learn how to use `.keys()` to get just the words (the keys) and `.values()` to get just the definitions (the values) out of the dictionary.",
            "Removing Duplicates (Sets): A 'Set' is a special type of list in Python that is physically incapable of holding duplicate items. If you put a list with duplicates into a set, Python automatically deletes the extras. You will use `set()` to instantly clean your data.",
          ],
          hints: [
            "Checking Before Asking: If you ask a dictionary for a key that doesn't exist (like asking for 'address' in the example above), Python will crash with an error. Always check if a key exists first by asking: `if \"address\" in person:`.",
            "Sets Have No Order: Unlike a normal list, items in a Set have no fixed order. You cannot ask for the 'first' item in a set because Python shuffles them around.",
          ],
        },
      },
      {
        id: "module_6",
        title: "Module 6",
        subtitle: "Object-Oriented Programming: Class Blueprints & Methods",
        description:
          "Design custom object patterns using initialization frameworks (`__init__`), instance attributes, self properties, class level variables, class-level decorators, and decoupled standalone static methods.",
        lessons: [
          {
            id: "pv6.1",
            videoTitle: "Python 3 Tutorial for Beginners #16 - Classes",
            duration: "9:29",
            url: "https://www.youtube.com/embed/H--VDcDSHdg?si=G_nIIC2BWKacYhpe",
          },
          {
            id: "pv6.2",
            videoTitle:
              "Python 3 Tutorial for Beginners #17 - The init function",
            duration: "6:42",
            url: "https://www.youtube.com/embed/TO1K8_BVCT4?si=AD2_DnpvnDTvU2rT",
          },
          {
            id: "pv6.3",
            videoTitle:
              "Python 3 Tutorial for Beginners #18 - Methods & Attributes",
            duration: "9:26",
            url: "https://www.youtube.com/embed/LwFnF9XoEfM?si=Kv80al8GSiVokFTg",
          },
        ],
        assignment: {
          title: "The Physical Entity Simulator",
          objective:
            "Move from writing lists of instructions to creating 'Classes.' A class is a blueprint for creating objects. You will build a blueprint for something (like a car, a robot, or a user profile) that contains its own data and its own functions.",
          steps: [
            "The Blueprint (`__init__`): Write a class and define its `__init__` function. This is the setup step that runs automatically whenever you create a new object from your blueprint. It defines what data that specific object will hold (like its name or color).",
            "Instance Data vs. Class Data: Learn the difference between data that belongs to a specific object (Instance Data, like 'my car is red') and data that belongs to the entire blueprint (Class Data, like 'all cars have 4 wheels').",
            "Different Types of Functions (Methods): Inside your class, you'll write three types of functions: Normal Methods (use `self`), Class Methods (`@classmethod`, use `cls`), and Static Methods (`@staticmethod`, no special variable needed).",
          ],
          hints: [
            "The `self` Keyword: Every normal function inside a class must have `self` as its first parameter. When Python runs `my_car.honk()`, it secretly passes `my_car` in as the `self` variable so the function knows which car is honking.",
            "Keep it Separate: Don't write your main program logic inside the class blueprint. The blueprint is just the definition. Use the blueprint down below in your main code block.",
          ],
        },
      },
      {
        id: "module_7",
        title: "Module 7",
        subtitle: "Modularity, Code Compilations & Streamlined Data Loops",
        description:
          "Split code into isolated packages using operational structure files (`__init__.py`), streamline array updates via list comprehensions, and leverage single-line anonymous lambda wrappers with functional mapping arrays.",
        lessons: [
          {
            id: "pv7.1",
            videoTitle:
              "Python 3 Tutorial for Beginners #19 - Modules & Packages",
            duration: "10:15",
            url: "https://www.youtube.com/embed/f26nAmfJggw?si=f1tR-bvIDZJUIBh1",
          },
          {
            id: "pv7.2",
            videoTitle:
              "Python 3 Tutorial for Beginners #20 - Bar Tab Calculator",
            duration: "13:21",
            url: "https://www.youtube.com/embed/h4NetyxAhv4?si=xNMpOKfrWUF_M09y",
          },
          {
            id: "pv7.3",
            videoTitle:
              "Python 3 Tutorial for Beginners #21 - List Comprehensions",
            duration: "7:28",
            url: "https://www.youtube.com/embed/7G0jqG_kiig?si=1RpSH3JXN8l6xQLn",
          },
          {
            id: "pv7.4",
            videoTitle: "Python 3 Tutorial for Beginners #22 - Maps",
            duration: "7:26",
            url: "https://www.youtube.com/embed/3Da00hgQ834?si=QttyCuDtmZL_qKYt",
          },
          {
            id: "pv7.5",
            videoTitle: "Python 3 Tutorial for Beginners #23 - Filters",
            duration: "6:49",
            url: "https://www.youtube.com/embed/jPoY--eTG5A?si=tDAqRWwGYBgAUSRz",
          },
          {
            id: "pv7.6",
            videoTitle: "Python 3 Tutorial for Beginners #24 - Lambdas",
            duration: "4:02",
            url: "https://www.youtube.com/embed/3waZGETmzjY?si=LsMU9TqwzHo_6D_Y",
          },
        ],
        assignment: {
          title: "The Streamlined Calculations Package",
          objective:
            "Take a large, messy file of code and split it into smaller, organized files that work together. You'll also learn advanced, one-line shortcuts to replace clunky `for` loops.",
          steps: [
            "Organizing Files (Packages): Create a new folder for your code. Inside that folder, create a blank file named `__init__.py`. Python sees that file and understands that the folder is now a 'package' (a toolbox) of code that can be imported into other projects.",
            "List Comprehensions: Learn the shortcut for building a list using a `for` loop in just one line of code. Instead of writing 4 lines of code to double every number in a list, you can write: `doubled = [num * 2 for num in my_list]`.",
            "Lambdas and `map()`: A `lambda` is a tiny function that doesn't even have a name. You'll use lambdas combined with the `map()` command to instantly apply a rule to every single item in a list, without writing a loop at all.",
          ],
          hints: [
            "Viewing `map()` Results: Functions like `map()` return a stream of data, not a normal list. If you try to print it, you'll just see gibberish (memory location). You have to force it to become a list first by wrapping it in `list()` like this: `print(list(my_mapped_data))`.",
            "Importing: When importing code from your new package, the format is usually `from folder_name.file_name import function_name`.",
          ],
        },
      },
      {
        id: "capstone_projects",
        title: "Capstone Project",
        subtitle: "Capstone Project",
        description:
          "Final Graduation Project. You have exactly two weeks to complete this. You must choose two (2) of the projects below and build them completely from scratch. You will need to use Classes (Object-Oriented Programming), organize your code into separate files (imported data models), and write code that processes data automatically.",
        lessons: [],
        projects: [
          {
            id: "project_alpha",
            title: "Project Alpha: Autonomous Financial Audit Framework",
            description:
              "Build a financial program that reads a list of complex invoices, calculates taxes automatically using one-line code shortcuts, and prints out a neatly organized custom receipt.",
            core_requirements: [
              "Build a custom Class (a blueprint) to act as a ledger, keeping a running total of the math variables.",
              "Use one-line shortcuts (List Comprehensions) and filters to separate out premium purchases or track areas of overspending.",
              "Print a final receipt where the text and numbers line up perfectly into sized columns using text formatting.",
            ],
            architectural_concept_map: {
              diagram_placeholder: "",
              specifications: [
                "Data Processing Core: Write a main script that uses tiny 'lambda' functions to process each transaction row one by one.",
                "The Metric Consolidation View: Make sure your Object modules maintain separate balances and validation states across different accounts so data doesn't mix up.",
              ],
            },
          },
          {
            id: "project_beta",
            title: "Project Beta: Automated Physics Telemetry Analyzer",
            description:
              "Create a science program that takes in raw dictionary data about planetary speeds, automatically deletes any duplicate errors using Sets, and calculates final velocities using advanced math.",
            core_requirements: [
              "Organize your internal structure by separating your code into different files (custom modules) inside a single package folder.",
              "Do the math on the speed data using higher-level combinations and map() functions.",
              "Write an automated filter that looks at the incoming data and strips out duplicate or corrupt 'background noise'.",
            ],
            architectural_concept_map: {
              diagram_placeholder: "",
              execution_flowchart:
                "[Raw Data Dictionary] ──> [Filter Module to Clean Noise] ──> [Calculation Module using Map] ──> [Clean, Deduplicated Final Output Log]",
            },
          },
          {
            id: "project_gamma",
            title: "Project Gamma: Interactive Sandbox Command Terminal",
            description:
              "Build an interactive, text-based menu (like a retro computer terminal) that safely manages stored object data and allows users to make multiple choices without crashing.",
            core_requirements: [
              "Set up a continuous `while True` loop that keeps the menu active on the screen until the user specifically triggers the safe 'escape' or 'quit' command.",
              "Store all the system's object data securely using matching, multi-key dictionaries.",
              "Build a safety net for user input. If the menu asks for a number and the user types a letter, the program must catch the error instead of breaking the math loop.",
            ],
            architectural_concept_map: {
              diagram_placeholder: "",
              specifications: [
                "Menu Tree Core: Use switches (like if/elif/else) to evaluate what the user typed and match it to the correct menu action.",
                "The Error Containment Pipeline: Always check user input to ensure the text they typed passes safety checks before saving it to your memory variables.",
              ],
            },
          },
        ],
      },
    ],
  },
  2: {
    id: 2,
    title: "Machine Learning",
    price: 5000,
    currency: "NGN",
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
            duration: "10:00",
            url: "https://www.youtube.com/embed/WUeBzT43JyY?si=B0ZogNmR19c7c9Qf",
            tasks: [
              [
                "Install Anaconda or Miniconda, launch Jupyter Notebook, and verify NumPy, Pandas, and Matplotlib imports with a sample array/dataframe/plot.",
              ],
            ],
          },
          {
            id: "v1.2",
            videoTitle: "Essential Python Refresher for Data Science",
            duration: "10:00",
            url: "https://www.youtube.com/embed/PNSIWjWAA7o?si=KgQvDgQRZ1CdYI62",
            tasks: [
              [
                "Build a small Python script that uses lists, dictionaries, loops, a function, and a class to summarize dataset statistics.",
              ],
            ],
          },
          {
            id: "v1.3",
            videoTitle: "Introduction to NumPy for Numerical Computation",
            duration: "10:00",
            url: "https://www.youtube.com/embed/uRsE5WGiKWo?si=PE4XCcgKFrG-JI68",
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
            duration: "10:00",
            url: "https://www.youtube.com/embed/mkYBJwX_dMs?si=NiPYTR3ISUCn4dZC",
            tasks: [
              [
                "Load a CSV file into a Pandas DataFrame, clean missing values, group by a column, compute aggregated statistics, and export the result to a new CSV file.",
              ],
            ],
          },
          {
            id: "v1.5",
            videoTitle: "Data Visualization with Matplotlib & Seaborn",
            duration: "10:00",
            url: "https://www.youtube.com/embed/ooqXQ37XHMM?si=kCRYEyG2g2sHj5mf",
            tasks: [
              [
                "Generate a Seaborn heatmap from a dataset correlation matrix, label the axes, and save the plot as a PNG file.",
              ],
            ],
          },
          {
            id: "v1.6",
            videoTitle: "Walkthrough: End-to-End Real Dataset Exploration",
            duration: "10:00",
            url: "https://www.youtube.com/embed/Liv6eeb1VfE?si=q2B7L9Rzh-GEKYoe",
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
            duration: "10:00",
            url: "https://www.youtube.com/embed/wOTFGRSUQ6Q?si=r_dNsji1Rbno_qHT",
            tasks: [
              [
                "Demonstrate math in ML by computing vectors, matrices, and simple model predictions with NumPy and explain why these operations matter.",
              ],
            ],
          },
          {
            id: "v2.2",
            videoTitle: "Linear Algebra Essentials",
            duration: "10:00",
            url: "https://www.youtube.com/embed/fNk_zzaMoSs?si=MEBFtm8MYpWE_mwr",
            tasks: [
              [
                "Use NumPy to compute vector dot products, matrix multiplication, and eigenvalues for a 2x2 matrix. Visualize the result with a short summary.",
              ],
            ],
          },
          {
            id: "v2.3",
            videoTitle: "Calculus for Optimization",
            duration: "10:00",
            url: "https://www.youtube.com/embed/WUvTyaaNkzM?si=HrwVgS1IkJqziyCP",
            tasks: [
              [
                "Implement numerical derivatives and partial derivatives for simple functions, then visualize how the gradient changes with the input values.",
              ],
            ],
          },
          {
            id: "v2.4",
            videoTitle: "Core Probability & Statistics for Data Science",
            duration: "10:00",
            url: "https://www.youtube.com/embed/Q22oEoo7gXc?si=vTdJ9UsU7-ZZ7ah3",
            tasks: [
              [
                "Compute mean, variance, and sample random values from a normal distribution in Python. Use Bayes theorem to estimate a simple conditional probability.",
              ],
            ],
          },
          {
            id: "v2.5",
            videoTitle: "Implementing Gradient Descent",
            duration: "10:00",
            url: "https://www.youtube.com/embed/vsWrXfO3wWw?si=M0co9NiXKvJ5uI-1",
            tasks: [
              [
                "Implement gradient descent from scratch in Python for a simple quadratic cost function and plot the parameter update path.",
              ],
            ],
          },
          {
            id: "v2.6",
            videoTitle: "Visualizing Loss Surfaces and Optimization",
            duration: "10:00",
            url: "https://www.youtube.com/embed/qg4PchTECck?si=6QlNR2L5N6jjqtNS",
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
            duration: "10:00",
            url: "https://www.youtube.com/embed/8jazNUpO3lQ?si=sQ20azlF81AAP9Rf",
            tasks: [
              [
                "Train a linear regression model on a toy dataset, then add polynomial features and compare training/validation error to illustrate bias-variance tradeoff.",
              ],
            ],
          },
          {
            id: "v3.2",
            videoTitle: "Logistic Regression and Classification Concepts",
            duration: "10:00",
            url: "https://www.youtube.com/embed/zM4VZR0px8E?si=i3wDLY6UtNzILmnK",
            tasks: [
              [
                "Train logistic regression on a binary dataset, plot the decision boundary, and compute cross-entropy loss plus accuracy.",
              ],
            ],
          },
          {
            id: "v3.3",
            videoTitle: "K-Nearest Neighbors (KNN) Algorithm",
            duration: "10:00",
            url: "https://www.youtube.com/embed/CQveSaMyEwM?si=R_DSCtkxE2vyDFkp",
            tasks: [
              [
                "Use scikit-learn KNN to fit a classifier, compare k=1,3,5, and evaluate accuracy for different distance metrics.",
              ],
            ],
          },
          {
            id: "v3.4",
            videoTitle: "Building Pipelines with Scikit-Learn",
            duration: "10:00",
            url: "https://www.youtube.com/embed/YyFuIubbqpo?si=19BdkWMbCg1yJucW",
            tasks: [
              [
                "Build a Scikit-learn Pipeline with preprocessing and a model, then run fit(), predict(), and score() on a dataset.",
              ],
            ],
          },
          {
            id: "v3.5",
            videoTitle: "Evaluating Model Performance",
            duration: "10:00",
            url: "https://www.youtube.com/embed/Nz73vXn5afE?si=A59jw711CFuLUZ9K",
            tasks: [
              [
                "Compute MAE/RMSE for regression and accuracy, confusion matrix, precision, recall, F1 for classification using scikit-learn.",
              ],
            ],
          },
          {
            id: "v3.6",
            videoTitle: "Cross-Validation Techniques",
            duration: "10:00",
            url: "https://www.youtube.com/embed/gJo0uNL-5Qw?si=3HAz3zZsHA3D90YF",
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
            duration: "10:00",
            url: "https://www.youtube.com/embed/_L39rN6gz7Y?si=2aoE9c4-F6joLTvt",
            tasks: [
              [
                "Train a decision tree classifier, inspect splitting criteria, evaluate feature importance, and discuss overfitting behavior.",
              ],
            ],
          },
          {
            id: "v4.2",
            videoTitle: "Ensemble Learning with Random Forests",
            duration: "10:00",
            url: "https://www.youtube.com/embed/J4Wdy0Wc_xQ?si=8cAlvgtVP6Ne1oxl",
            tasks: [
              [
                "Fit a Random Forest model, compare it to a single tree, and display the top feature importances.",
              ],
            ],
          },
          {
            id: "v4.3",
            videoTitle: "Boosting Techniques: XGBoost and LightGBM",
            duration: "10:00",
            url: "https://www.youtube.com/embed/OtD8wVaFm6E?si=pyk012tb9eA_KT8m",
            tasks: [
              [
                "Train an XGBoost or LightGBM model, tune learning rate and max_depth, and compare performance to a baseline model.",
              ],
            ],
          },
          {
            id: "v4.4",
            videoTitle: "Support Vector Machines (SVM)",
            duration: "10:00",
            url: "https://www.youtube.com/embed/efR1C6CvhmE?si=Uv7j6jh8IgJ0pIir",
            tasks: [
              [
                "Train SVM models with linear and RBF kernels, evaluate support vectors, and compare decision margins.",
              ],
            ],
          },
          {
            id: "v4.5",
            videoTitle: "Hyperparameter Tuning Strategies",
            duration: "10:00",
            url: "https://www.youtube.com/embed/HdlDYng8g9s?si=m6npJYY4uvKhvQ-_",
            tasks: [
              [
                "Use GridSearchCV or RandomizedSearchCV to tune model hyperparameters, then report the best combination and validation score.",
              ],
            ],
          },
          {
            id: "v4.6",
            videoTitle: "Feature Selection & Importance",
            duration: "10:00",
            url: "https://www.youtube.com/embed/EqLBAmtKMnQ?si=vfzaRLIA13ryjmcG",
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
            duration: "10:00",
            url: "https://www.youtube.com/embed/4b5d3muPQmA?si=FBk_YrARf0uqRFUx",
            tasks: [
              [
                "Apply K-Means clustering to a dataset, use the elbow method and silhouette score to choose the best k, and visualize the clusters.",
              ],
            ],
          },
          {
            id: "v5.2",
            videoTitle: "Density-Based Clustering with DBSCAN",
            duration: "10:00",
            url: "https://www.youtube.com/embed/RDZUdRSDOok?si=jgNfjeI9-s56xWwv",
            tasks: [
              [
                "Cluster a dataset using DBSCAN, identify noise points, compare results to K-Means, and explain when DBSCAN is preferable.",
              ],
            ],
          },
          {
            id: "v5.3",
            videoTitle: "Hierarchical Clustering",
            duration: "10:00",
            url: "https://www.youtube.com/embed/7xHsRkOdVwo?si=DCJRqEr-ZH0d-uUf",
            tasks: [
              [
                "Perform hierarchical clustering, plot a dendrogram, and choose cluster count based on the hierarchy structure.",
              ],
            ],
          },
          {
            id: "v5.4",
            videoTitle: "Dimensionality Reduction with PCA",
            duration: "10:00",
            url: "https://www.youtube.com/embed/FgakZw6K1QQ?si=p9SP7dK2O_gICTTo",
            tasks: [
              [
                "Use PCA to reduce data dimensionality, plot explained variance and a scree plot, then visualize the first two principal components.",
              ],
            ],
          },
          {
            id: "v5.5",
            videoTitle: "Advanced Visualization with t-SNE",
            duration: "10:00",
            url: "https://www.youtube.com/embed/NEaUSP4YerM?si=AAjgPErNbmneOzrN",
            tasks: [
              [
                "Apply t-SNE to high-dimensional data, plot the 2D embedding, and describe cluster structure observed in the visualization.",
              ],
            ],
          },
          {
            id: "v5.6",
            videoTitle: "Practical Application: Customer Segmentation",
            duration: "10:00",
            url: "https://www.youtube.com/embed/-LGwdrajMZ0?si=QUsfclGtvTx0hsUc",
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
            duration: "10:00",
            url: "https://www.youtube.com/embed/jmmW0F0biz0?si=b-djxyGkZmBzfJ-o",
            tasks: [
              [
                "Build a simple perceptron or multi-layer network example, experiment with activation functions, and document how outputs change.",
              ],
            ],
          },
          {
            id: "v6.2",
            videoTitle: "Forward Pass & Backpropagation",
            duration: "10:00",
            url: "https://www.youtube.com/embed/IN2XmBhILt4?si=FJMQhnimxQcqrrli",
            tasks: [
              [
                "Implement forward and backward passes for a 2-layer network in NumPy, compute loss, and update weights for one training step.",
              ],
            ],
          },
          {
            id: "v6.3",
            videoTitle: "Getting Started with TensorFlow and Keras",
            duration: "10:00",
            url: "https://www.youtube.com/embed/VhRtaziEWd4?si=TCwdvd_hZxgVou5s",
            tasks: [
              [
                "Build a Keras Sequential model with Dense layers, compile it, train on a small dataset, and evaluate test performance.",
              ],
            ],
          },
          {
            id: "v6.4",
            videoTitle: "Deep Learning Regularization Techniques",
            duration: "10:00",
            url: "https://www.youtube.com/embed/hpFzuMSYg9k?si=edkqxfGJbVX4nz89",
            tasks: [
              [
                "Train a model with dropout, L1/L2, early stopping, or batch normalization and compare validation performance against a baseline.",
              ],
            ],
          },
          {
            id: "v6.5",
            videoTitle: "Introduction to Convolutional Neural Networks (CNNs)",
            duration: "10:00",
            url: "https://www.youtube.com/embed/YGILT182T6w?si=ogMoc6bpeVZj-q2W",
            tasks: [
              [
                "Build a simple CNN in Keras, explain the role of conv and pooling layers, and visualize feature map shapes.",
              ],
            ],
          },
          {
            id: "v6.6",
            videoTitle: "Building an Image Classifier with Keras",
            duration: "10:00",
            url: "https://www.youtube.com/embed/jztwpsIzEGc?si=X-oqO6QbEEU3S8_H",
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
            duration: "10:00",
            url: "https://www.youtube.com/embed/0jPhNvqiuCA?si=UiM-pXygxS7w3iss",
            tasks: [
              [
                "Engineer features with encoding, scaling, polynomial terms, and interactions, then compare model performance before and after.",
              ],
            ],
          },
          {
            id: "v7.2",
            videoTitle: "Building Robust Scikit-learn Pipelines",
            duration: "10:00",
            url: "https://www.youtube.com/embed/YyFuIubbqpo?si=bj-v-oWLLf7vdTT7",
            tasks: [
              [
                "Build a Scikit-learn Pipeline using ColumnTransformer for preprocessing and a model estimator, then fit and evaluate it.",
              ],
            ],
          },
          {
            id: "v7.3",
            videoTitle: "Strategies for Imbalanced Datasets",
            duration: "10:00",
            url: "https://www.youtube.com/embed/JnlM4yLFNbk",
            tasks: [
              [
                "Address imbalanced classes using SMOTE or class weights, and compare classifier metrics on balanced versus imbalanced versions.",
              ],
            ],
          },
          {
            id: "v7.4",
            videoTitle: "Saving and Loading Machine Learning Models",
            duration: "10:00",
            url: "https://www.youtube.com/embed/KfnhNlD8WZI?si=FmezS8-dwzSSKdYA",
            tasks: [
              [
                "Serialize a trained model with pickle or joblib, reload it, and verify that it produces identical predictions.",
              ],
            ],
          },
          {
            id: "v7.5",
            videoTitle: "Building REST APIs with FastAPI for ML",
            duration: "10:00",
            url: "https://www.youtube.com/embed/dmUtafXB5aw?si=7Op9wu8m9CtpMTse",
            tasks: [
              [
                "Build a FastAPI endpoint that accepts JSON input, loads a trained model, and returns predictions in JSON format.",
              ],
            ],
          },
          {
            id: "v7.6",
            videoTitle: "Experiment Tracking with MLflow",
            duration: "10:00",
            url: "https://www.youtube.com/embed/6ngxBkx05Fs?si=NtHoKcfJDBUyAoBJ",
            tasks: [
              [
                "Track experiments with MLflow: log parameters, metrics, artifacts, and compare two runs in the UI.",
              ],
            ],
          },
          {
            id: "v7.7",
            videoTitle: "Containerizing ML Applications with Docker",
            duration: "10:00",
            url: "https://www.youtube.com/embed/nMXsVbEz_Os?si=SUO7ZmPxB7UyGMZ9",
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
        description:
          "CAPSTONE: Solve a real-world ML problem (classification, regression, or clustering) end-to-end. Submit: (1) cleaned dataset + EDA report, (2) model training notebook with evaluation, (3) deployed FastAPI endpoint, (4) 10-slide summary presentation, (5) GitHub repo with README. You must choose one (1) of the project tracks below and build it completely from scratch.",
        lessons: [],
        projects: [
          {
            id: "project_alpha",
            title: "Project Alpha: Predictive Classification Engine",
            description:
              "Build an end-to-end classification pipeline (e.g., Customer Churn or Credit Scoring) that predicts categorical outcomes, performs feature engineering, and serves predictions via a REST API.",
            core_requirements: [
              "Clean the dataset, handle missing values, and address any imbalanced classes using SMOTE or class weights.",
              "Train and tune a classification model (e.g., Random Forest, XGBoost, or Logistic Regression) and evaluate using precision, recall, confusion matrix, and F1-score.",
              "Deploy the trained model using FastAPI to accept JSON input and return a live prediction.",
            ],
            architectural_concept_map: {
              diagram_placeholder: "",
              execution_flowchart:
                "[Raw Dataset] ──> [EDA & Preprocessing] ──> [Model Training & Hyperparameter Tuning] ──> [Pickled Model] ──> [FastAPI Prediction Endpoint]",
            },
          },
          {
            id: "project_beta",
            title: "Project Beta: Dynamic Regression Valuation Model",
            description:
              "Develop a regression solution to estimate continuous values (e.g., Real Estate Prices or Sales Forecasting) based on multiple features, utilizing advanced scaling and pipelines.",
            core_requirements: [
              "Perform exploratory data analysis (EDA) and engineer new features, such as interaction terms or polynomial features.",
              "Build a Scikit-Learn Pipeline that chains scalers, encoders, and regression models (Linear, Random Forest, etc.).",
              "Optimize hyperparameters using GridSearchCV or RandomizedSearchCV, and evaluate performance using RMSE and MAE.",
            ],
            architectural_concept_map: {
              diagram_placeholder: "",
              specifications: [
                "Pipeline Construction: Use ColumnTransformer to process numerical and categorical data seamlessly before feeding it into the estimator.",
                "Evaluation Phase: Apply k-fold cross-validation to ensure the model generalizes well to unseen data without overfitting.",
              ],
            },
          },
          {
            id: "project_gamma",
            title: "Project Gamma: Intelligent Market Segmentation System",
            description:
              "Create an unsupervised machine learning system that groups unlabelled data (e.g., Customer Segmentation) into distinct clusters to drive targeted business strategies.",
            core_requirements: [
              "Preprocess the dataset and reduce the dimensionality of high-dimensional data using PCA.",
              "Apply clustering algorithms (K-Means or DBSCAN) and determine the optimal number of clusters using the elbow method and silhouette scores.",
              "Visualize the distinct clusters using 2D scatter plots (PCA or t-SNE) and summarize the defining characteristics of each segment.",
            ],
            architectural_concept_map: {
              diagram_placeholder: "",
              specifications: [
                "Dimensionality Reduction Core: Apply standard scaling and PCA to retain at least 90% of the dataset variance before clustering.",
                "Cluster Profiling: Group the original data by the newly generated cluster labels to extract actionable business insights.",
              ],
            },
          },
        ],
      },
    ],
  },
  3: {
    id: 3,
    title: "Frontend Development",
    price: 5000,
    currency: "NGN",
    description:
      "A complete frontend development course covering the holy trinity of the web — HTML, CSS, and JavaScript — followed by an introduction to the React.js library. Students will build responsive, interactive websites and a React-powered web app.",
    duration: "7 Modules | ~12 Weeks",
    level: "Beginner – No experience required",
    comingSoon: false,
    modules: [
      {
        id: "module_1",
        title: "Module 1",
        subtitle: "Introduction to Web Development & HTML Basics",
        description:
          "Foundational web mechanics, document architecture, and building your first structural webpage elements.",
        lessons: [
          {
            id: "fv1.1",
            videoTitle: "HTML Tutorial for Beginners 01 - HTML Introduction",
            duration: "2:30",
            url: "https://www.youtube.com/embed/Y1BlT4_c_SU?si=yZGgE5hy-WowJyAg",
          },
          {
            id: "fv1.2",
            videoTitle: "HTML Tutorial for Beginners 02 - What is HTML?",
            duration: "6:08",
            url: "https://www.youtube.com/embed/cZCq8lQ-vZ0?si=0k-6V1HORf1ASDZy",
          },
          {
            id: "fv1.3",
            videoTitle:
              "HTML Tutorial for Beginners 03 - HTML Syntax & Structure",
            duration: "13:10",
            url: "https://www.youtube.com/embed/IJWcX2EDAKg?si=U3QWrU10czetLgix",
          },
          {
            id: "fv1.4",
            videoTitle: "HTML Tutorial for Beginners 04 - Your First Web Page",
            duration: "9:36",
            url: "https://www.youtube.com/embed/IJWcX2EDAKg?si=U3QWrU10czetLgix",
          },
          {
            id: "fv1.5",
            videoTitle: "HTML Tutorial for Beginners 05 - Head and Body Tag",
            duration: "7:23",
            url: "https://www.youtube.com/embed/IJWcX2EDAKg?si=U3QWrU10czetLgix",
          },
          {
            id: "fv1.6",
            videoTitle: "HTML Tutorial for Beginners 06 - Headings and Text",
            duration: "8:19",
            url: "https://www.youtube.com/embed/XxZPrn1VFTc?si=XdVpU1Q-OpbidUwG",
          },
          {
            id: "fv1.7",
            videoTitle: "HTML Tutorial for Beginners 07 - Heading Structure",
            duration: "5:48",
            url: "https://www.youtube.com/embed/XxZPrn1VFTc?si=XdVpU1Q-OpbidUwG",
          },
          {
            id: "fv1.8",
            videoTitle:
              "HTML Tutorial for Beginners 08 - Default Browser Styles",
            duration: "3:41",
            url: "https://www.youtube.com/embed/OwC4xNWihoM?si=y8CLI1Dmqw9PBb-O",
          },
        ],
        assignment: {
          title: "The Portfolio Blueprint",
          objective:
            "Build a basic HTML webpage for a developer profile to learn how to structure a website without any CSS styling.",
          steps: [
            "Initialize the File: Create an `index.html` file. Add the basic HTML skeleton that every website needs (like `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`).",
            "Metadata Setup: Inside the `<head>`, give your page a title (like 'My Developer Journey') and add the meta tag that makes the website look right on mobile phones.",
            "Primary Structure: Add a main heading (`<h1>`) for your profile title. Right below it, add a short bio using a paragraph tag (`<p>`).",
            "Skills Mapping: Add a smaller sub-heading (like `<h2>`) called 'Core Stack'. Under it, create a bulleted list (`<ul>` and `<li>`) of three tech skills you want to learn.",
            "Separation Elements: Add a horizontal line (`<hr>`) to draw a clean line across the page, separating your bio from a projects section below.",
          ],
          hints: [
            "Keep Headings in Order: Don't jump from an `<h1>` to an `<h3>` just because you like the size. Browsers use headings to understand the structure of your page.",
            "It Will Look Plain: Right now, the page will look like a boring Word document. Don't worry! HTML is just for structure; we will make it look good later with CSS.",
          ],
        },
      },
      {
        id: "module_2",
        title: "Module 2",
        subtitle: "Advanced HTML Elements & Foundations of CSS",
        description:
          "Enriching content layouts with media, links, and styling integrations, alongside an introduction to the Cascade and selectors.",
        lessons: [
          {
            id: "fv2.1",
            videoTitle: "HTML Tutorial for Beginners 09 - The img Tag",
            duration: "6:13",
            url: "https://www.youtube.com/embed/g6xsNHnAmlE?si=N6m44L5z25N0d-ex",
          },
          {
            id: "fv2.2",
            videoTitle: "HTML Tutorial for Beginners 10 - HTML Links",
            duration: "12:25",
            url: "https://www.youtube.com/embed/f8pAb3IuECk?si=CAtUdyx1SxqOmBUw",
          },
          {
            id: "fv2.3",
            videoTitle: "HTML Tutorial for Beginners 11 - HTML Lists",
            duration: "8:06",
            url: "https://www.youtube.com/embed/HeQvQEiGMKk?si=3UtTGXzaUgsDfbBA",
          },
          {
            id: "fv2.4",
            videoTitle: "HTML Tutorial for Beginners 12 - HR and BR Tags",
            duration: "3:26",
            url: "https://www.youtube.com/embed/xkF-cKpzREU?si=5z0P7Czla6YIjvo7",
          },
          {
            id: "fv2.5",
            videoTitle: "HTML Tutorial for Beginners 13 - The div Tag",
            duration: "4:52",
            url: "https://www.youtube.com/embed/-XQlr727A8w?si=swYNpdu_7LimDItt",
          },
          {
            id: "fv2.6",
            videoTitle: "HTML Tutorial for Beginners 14 - ID's and Classes",
            duration: "8:14",
            url: "https://www.youtube.com/embed/9UNmumTYuq8?si=sghh6L-yf4ttdo8i",
          },
          {
            id: "fv2.7",
            videoTitle: "HTML Tutorial for Beginners 15 - Adding CSS to HTML",
            duration: "9:34",
            url: "https://www.youtube.com/embed/Tc4IsPFB01E?si=aIOhud9nC8Y7HkZH",
          },
          {
            id: "fv2.8",
            videoTitle:
              "HTML Tutorial for Beginners 16 - Adding JavaScript to HTML",
            duration: "9:42",
            url: "https://www.youtube.com/embed/Gd0RBdFRvF0?si=198WISgoko_-Cotr",
          },
          {
            id: "fv2.9",
            videoTitle: "HTML Tutorial for Beginners 17 - What To Do Next",
            duration: "3:32",
            url: "https://www.youtube.com/embed/xuA8kt2xnv8?si=tflSQK8W9qfoaROx",
          },
          {
            id: "fv2.10",
            videoTitle: "CSS Tutorial For Beginners 01 - Introduction to CSS",
            duration: "2:15",
            url: "https://www.youtube.com/embed/I9XRrlOOazo?si=VqtMsjLnnChTldOB",
          },
          {
            id: "fv2.11",
            videoTitle: "CSS Tutorial For Beginners - What is CSS?",
            duration: "4:44",
            url: "https://www.youtube.com/embed/4BEyFVufmM8?si=Glaxem3wbdGst0pl",
          },
          {
            id: "fv2.12",
            videoTitle:
              "CSS Tutorial For Beginners 03 - Default Browser Styles",
            duration: "4:47",
            url: "https://www.youtube.com/embed/iqTgros3FTc?si=mTPnma_QwoRmZxy9",
          },
          {
            id: "fv2.13",
            videoTitle: "CSS Tutorial For Beginners 04 - Basic CSS Syntax",
            duration: "8:02",
            url: "https://www.youtube.com/embed/1CqHws4WZ-M?si=nqg6K-XaFMUthyJU",
          },
          {
            id: "fv2.14",
            videoTitle:
              "CSS Tutorial For Beginners 05 - Inline & Embedded Styles",
            duration: "9:30",
            url: "https://www.youtube.com/embed/jpjzhva3owA?si=3w7PwBhpD2jnj5Yz",
          },
          {
            id: "fv2.15",
            videoTitle: "CSS Tutorial For Beginners 06 - External Style Sheets",
            duration: "5:38",
            url: "https://www.youtube.com/embed/Wj2iI7w37Y0?si=OWtFIG73l9zeCjvd",
          },
          {
            id: "fv2.16",
            videoTitle:
              "CSS Tutorial For Beginners 07 - CSS Comments and Where to Use Them",
            duration: "4:41",
            url: "https://www.youtube.com/embed/qfpo_XsM0hM?si=bA91_nhLu8-r9k_b",
          },
        ],
        assignment: {
          title: "The Interactive Media Card",
          objective:
            "Add images, clickable links, and a separate CSS file to start styling your plain HTML profile card.",
          steps: [
            "Directory Tree Organization: Create a new CSS file (like `style.css`) in your folder and link it inside the `<head>` of your HTML document.",
            'Generic Container Block: Wrap your entire profile section inside a `<div>` tag. Give this div a class name (like `class="profile-card"`) so you can target it with CSS.',
            "Media Integration: Add an image (`<img>`) to your profile. Make sure to include `alt` text (a description of the image) just in case the image fails to load.",
            "Anchor Routing: Add clickable links (`<a>`) at the bottom of the card that go to other websites, like a GitHub or LinkedIn profile.",
            "Initial Style Mapping: In your CSS file, change the background color of your profile card. Also, use CSS to remove the invisible spacing (margins) that browsers add by default.",
          ],
          hints: [
            "Spacing: If your text is touching the absolute edges of your colored box, you need to add `padding` in your CSS to push the text inward.",
            "Clear Naming: Give your classes names that make sense. Use `.profile-card` instead of something confusing like `.box1`.",
          ],
        },
      },
      {
        id: "module_3",
        title: "Module 3",
        subtitle: "CSS Specificity, Rule Hierarchies & Text Styling",
        description:
          "Mastering the rules of inheritance, priority mapping, element targeting variations, and comprehensive text typography.",
        lessons: [
          {
            id: "fv3.1",
            videoTitle:
              "CSS Tutorial For Beginners 08 - Targeting Elements with CSS",
            duration: "4:29",
            url: "https://www.youtube.com/embed/f7c7bTrqXic?si=ogHLUfrYt8ss0jE9",
          },
          {
            id: "fv3.2",
            videoTitle:
              "CSS Tutorial For Beginners 09 - Targeting Classes and ID's",
            duration: "7:25",
            url: "https://www.youtube.com/embed/hrqo_GOwHHs?si=OERfv3PuvgAyOWu0",
          },
          {
            id: "fv3.3",
            videoTitle:
              "CSS Tutorial For Beginners 10 - CSS Conflicts & the Cascade",
            duration: "8:05",
            url: "https://www.youtube.com/embed/4oPvurjpcNw?si=xQqU37lUaNObvEJH",
          },
          {
            id: "fv3.4",
            videoTitle: "CSS Tutorial For Beginners 11 - Inheritance",
            duration: "8:48",
            url: "https://www.youtube.com/embed/ZMpaebQ3n6A?si=HQl-xih68yVLunLR",
          },
          {
            id: "fv3.5",
            videoTitle: "CSS Tutorial For Beginners 12 - Selector Specificity",
            duration: "10:18",
            url: "https://www.youtube.com/embed/lZ6R_eYYxoE?si=Io9Cfs63uREPDd_C",
          },
          {
            id: "fv3.6",
            videoTitle:
              "CSS Tutorial For Beginners 13 - The Important Declaration",
            duration: "5:40",
            url: "https://www.youtube.com/embed/BHzQ_9zzuNM?si=NkTEc0ROImrEBmlF",
          },
          {
            id: "fv3.7",
            videoTitle:
              "CSS Tutorial For Beginners 14 - Targeting Multiple Elements",
            duration: "4:41",
            url: "https://www.youtube.com/embed/3SOf8gZlBhI?si=ayJLwB1nq1Xa2j_k",
          },
          {
            id: "fv3.8",
            videoTitle: "CSS Tutorial For Beginners 15 - Descendant Selectors",
            duration: "6:23",
            url: "https://www.youtube.com/embed/84KE7OwMjYY?si=QsSY7sMGsBWeSr_B",
          },
          {
            id: "fv3.9",
            videoTitle: "CSS Tutorial For Beginners 16 - Child Selectors",
            duration: "3:46",
            url: "https://www.youtube.com/embed/MlJrAhGVIis?si=B3jKo8KASPK9ZhIY",
          },
          {
            id: "fv3.10",
            videoTitle: "CSS Tutorial For Beginners 17 - Adjacent Selectors",
            duration: "4:21",
            url: "https://www.youtube.com/embed/K92X4yyyfNY?si=n4rbj9aaj0E8w5C2",
          },
          {
            id: "fv3.11",
            videoTitle: "CSS Tutorial For Beginners 18 - Attribute Selectors",
            duration: "10:39",
            url: "https://www.youtube.com/embed/GVocONem9lw?si=HkJ_S7bolM7yLI6J",
          },
          {
            id: "fv3.12",
            videoTitle: "CSS Tutorial For Beginners 19 - Pseudo Selectors",
            duration: "5:39",
            url: "https://www.youtube.com/embed/SlqUbzvuqDg?si=BCiE1muARBTS-wHC",
          },
          {
            id: "fv3.13",
            videoTitle:
              "CSS Tutorial For Beginners 20 - Hover, Active & Visited Effects",
            duration: "4:18",
            url: "https://www.youtube.com/embed/XT2PFpOyDzY?si=qPP_kUrqADkANbSr",
          },
          {
            id: "fv3.14",
            videoTitle:
              "CSS Tutorial For Beginners 21 - First & Last Child Selectors",
            duration: "5:32",
            url: "https://www.youtube.com/embed/UxHFB5_CSXc?si=cDNTsvAJsP5mWM1j",
          },
          {
            id: "fv3.15",
            videoTitle:
              "CSS Tutorial For Beginners 22 - First & Last of Type Selectors",
            duration: "3:54",
            url: "https://www.youtube.com/embed/7eVUWLv6gz4?si=gwwIneVzSsiki4_P",
          },
          {
            id: "fv3.16",
            videoTitle: "CSS Tutorial For Beginners 23 - nth Child Selectors",
            duration: "8:12",
            url: "https://www.youtube.com/embed/TVj1avJj8a8?si=k_7cfwY7x4qDKWk1",
          },
          {
            id: "fv3.17",
            videoTitle: "CSS Tutorial For Beginners 24 - nth of Type Selectors",
            duration: "5:43",
            url: "https://www.youtube.com/embed/E45xQZTgaUI?si=VcOM4tRjuEid8xoZ",
          },
          {
            id: "fv3.18",
            videoTitle: "CSS Tutorial For Beginners 25 - Combining Selectors",
            duration: "4:00",
            url: "https://www.youtube.com/embed/rK54iCKi6TE?si=E2yR6YtdQpvx4EVH",
          },
          {
            id: "fv3.19",
            videoTitle:
              "CSS Tutorial For Beginners 26 - The Universal Selector",
            duration: "7:15",
            url: "https://www.youtube.com/embed/EO4ToIX-ZQk?si=waJV4kMUtRXj3V81",
          },
          {
            id: "fv3.20",
            videoTitle: "CSS Tutorial For Beginners 27 - Font Size",
            duration: "8:00",
            url: "https://www.youtube.com/embed/799zrGVpfA8?si=z9XxGXIraeYlkkFp",
          },
          {
            id: "fv3.21",
            videoTitle: "CSS Tutorial For Beginners 28 - Font Family",
            duration: "5:27",
            url: "https://www.youtube.com/embed/v2o8LJWnoxI?si=UBvVMMGowZWm2LV9",
          },
          {
            id: "fv3.22",
            videoTitle: "CSS Tutorial For Beginners 29 - Text Decoration",
            duration: "4:52",
            url: "https://www.youtube.com/embed/dm54To0EOpw?si=QCYKIumiwvO9YSmq",
          },
          {
            id: "fv3.23",
            videoTitle: "CSS Tutorial For Beginners 30 - Font Weight",
            duration: "8:15",
            url: "https://www.youtube.com/embed/qeh4UeaGTnc?si=3YgsBEaPKmiOBR59",
          },
          {
            id: "fv3.24",
            videoTitle: "CSS Tutorial For Beginners 31 - Text Transform",
            duration: "5:01",
            url: "https://www.youtube.com/embed/j0FS2hCoIjs?si=r9ASWIJzNpC_khmw",
          },
          {
            id: "fv3.25",
            videoTitle: "CSS Tutorial For Beginners 32 - Text Colour",
            duration: "5:33",
            url: "https://www.youtube.com/embed/QzKu1qG4p5A?si=MatzJv_Pg3PaVGh_",
          },
          {
            id: "fv3.26",
            videoTitle: "CSS Tutorial For Beginners 33 - Styling Links",
            duration: "4:36",
            url: "https://www.youtube.com/embed/w_1pQGfrHT8?si=hUbxXV4ZkjLB9aui",
          },
          {
            id: "fv3.27",
            videoTitle:
              "CSS Tutorial For Beginners 34 - Letter Spacing & Line Height",
            duration: "9:05",
            url: "https://www.youtube.com/embed/4Gyd8hbrcBk?si=qoumZIc6-OBg6gdZ",
          },
          {
            id: "fv3.28",
            videoTitle: "CSS Tutorial For Beginners 35 - Paragraph Spacing",
            duration: "3:47",
            url: "https://www.youtube.com/embed/DdcD9otFk4A?si=NWfdz7m0VdAqrdJt",
          },
        ],
        assignment: {
          title: "Typography Layout & Selector Hierarchies",
          objective:
            "Learn how to target specific parts of your website with CSS to style text, change colors on hover, and fix conflicting rules without breaking the code.",
          steps: [
            "Generate Content Fields: Create an `<article>` tag and put three paragraphs inside it. Make sure one of the paragraphs has a clickable link (`<a>`) inside it.",
            "Descendant Targeting: Write a CSS rule that changes the color and thickness of a link, but ONLY if that link is inside the `<article>`. (Links outside the article should stay normal).",
            "Pseudo-State Interaction: Make the link change to a different color when the user hovers their mouse over it using the `:hover` rule.",
            "Structural Array Targeting: Use a special CSS rule to find the very first paragraph in your article and make its text slightly larger than the others.",
            "Handling Rule Collisions: Purposely write two CSS rules that try to change the font to two different things. See which one wins. Fix the conflict by using a specific class name, rather than forcing it with `!important`.",
          ],
          hints: [
            "Avoid !important: Try not to use the `!important` tag to force your CSS to work. It creates messy code. If a style isn't working, check to make sure you spelled the class name right.",
            "First Child vs First of Type: `:first-child` targets something only if it is the absolute first item. `:first-of-type` targets the first paragraph, even if there is an image above it.",
          ],
        },
      },
      {
        id: "module_4",
        title: "Module 4",
        subtitle: "The CSS Box Model, Styling Elements & Layout Deployments",
        description:
          "Working with dimensions, borders, visibility fields, shadows, gradients, and practical structural project assemblies.",
        lessons: [
          {
            id: "fv4.1",
            videoTitle: "CSS Tutorial For Beginners 36 - The Box Model",
            duration: "9:28",
            url: "https://www.youtube.com/embed/Qx-yzUBqatQ?si=UTpTciw4utuOUMh9",
          },
          {
            id: "fv4.2",
            videoTitle: "CSS Tutorial For Beginners 37 - Margins",
            duration: "10:39",
            url: "https://www.youtube.com/embed/ggo0di5L6sA?si=ThDi8DUSmrgBXpwm",
          },
          {
            id: "fv4.3",
            videoTitle: "CSS Tutorial For Beginners 38 - Padding",
            duration: "4:42",
            url: "https://www.youtube.com/embed/4YF-eaX4P0k?si=sobYTvD4eP4GNSv-",
          },
          {
            id: "fv4.4",
            videoTitle:
              "CSS Tutorial For Beginners 39 - Padding & Margin Long-hand",
            duration: "3:58",
            url: "https://www.youtube.com/embed/0Sm7MkZXT-8?si=9QHFCkM-djshapL5",
          },
          {
            id: "fv4.5",
            videoTitle: "CSS Tutorial For Beginners 40 - Borders",
            duration: "6:48",
            url: "https://www.youtube.com/embed/sdn5p4kf91c?si=I7W4VMqPfcoPqQcE",
          },
          {
            id: "fv4.6",
            videoTitle: "CSS Tutorial For Beginners 41 - Block-level Elements",
            duration: "11:09",
            url: "https://www.youtube.com/embed/HuiPIK-0-_A?si=EjwxgGn12cKBvoYl",
          },
          {
            id: "fv4.7",
            videoTitle: "CSS Tutorial For Beginners 42 - Width & Height",
            duration: "6:27",
            url: "https://www.youtube.com/embed/b9lWNg8lwW4?si=-0ddfTx6bfhodX-i",
          },
          {
            id: "fv4.8",
            videoTitle: "CSS Tutorial For Beginners 43 - Rounded Corners",
            duration: "7:21",
            url: "https://www.youtube.com/embed/7WPgQVMayWI?si=nyiLTbqveBd-Y7FW",
          },
          {
            id: "fv4.9",
            videoTitle: "CSS Tutorial For Beginners 44 - Backgrounds",
            duration: "9:03",
            url: "https://www.youtube.com/embed/jY-oTfLGpvI?si=80m00apIsnw1H47A",
          },
          {
            id: "fv4.10",
            videoTitle: "CSS Tutorial For Beginners 45 - Background Shorthand",
            duration: "4:01",
            url: "https://www.youtube.com/embed/0CkSJVl_g00?si=yT4957PWypWPuYMU",
          },
          {
            id: "fv4.11",
            videoTitle: "CSS Tutorial For Beginners 46 - Multiple Backgrounds",
            duration: "4:59",
            url: "https://www.youtube.com/embed/Sj7Hs94uZjE?si=aTosIyKGwR67XYHZ",
          },
          {
            id: "fv4.12",
            videoTitle: "CSS Tutorial For Beginners 47 - Color",
            duration: "6:29",
            url: "https://www.youtube.com/embed/YYMCcm4EM2M?si=MQeFT_VKu74LsR5B",
          },
          {
            id: "fv4.13",
            videoTitle: "CSS Tutorial For Beginners 48 - Opacity",
            duration: "7:12",
            url: "https://www.youtube.com/embed/tYXQHuoaihU?si=RwWQmet6_CeKSuKf",
          },
          {
            id: "fv4.14",
            videoTitle: "CSS Tutorial For Beginners 49 - CSS Gradients",
            duration: "9:07",
            url: "https://www.youtube.com/embed/wTk4Wuckd0U?si=KGX7n1ZuN6I1vLVt",
          },
          {
            id: "fv4.15",
            videoTitle: "CSS Tutorial For Beginners 50 - Box Shadow",
            duration: "4:26",
            url: "https://www.youtube.com/embed/Q1uowGztXGs?si=kZv4YSDwY_FLeGyh",
          },
          {
            id: "fv4.16",
            videoTitle: "CSS Tutorial For Beginners 51 - Browser Support",
            duration: "6:39",
            url: "https://www.youtube.com/embed/a0nkO-hVqGQ?si=evHV1mCr_kYmMphb",
          },
          {
            id: "fv4.17",
            videoTitle:
              "CSS Tutorial For Beginners 52 - CSS Website Build Part 1",
            duration: "9:35",
            url: "https://www.youtube.com/embed/B7dIKj47N5A?si=D6iBLsJxpRCeeAjq",
          },
          {
            id: "fv4.18",
            videoTitle:
              "CSS Tutorial For Beginners 53 - CSS Website Build Part 2",
            duration: "8:11",
            url: "https://www.youtube.com/embed/VZy528TnkBE?si=Mlz0rNXSQy2j-mEO",
          },
        ],
        assignment: {
          title: "The Box Model Profile Component",
          objective:
            "Build a visually stunning profile box by mastering margins (outside space), padding (inside space), borders, gradients, and shadows.",
          steps: [
            "Box Dimensioning Setup: Target your `.card-container` in CSS and give it a specific `width` and `height`.",
            "Internal Spacing Matrix: Add `padding` so the text doesn't touch the borders. Add `margin: auto` to perfectly center the box in the middle of your screen.",
            "Border Styling Execution: Add a solid border around the box, and use `border-radius` to make the sharp corners smoothly rounded.",
            "Complex Background Gradients: Instead of a flat background color, use `linear-gradient` to blend two colors together diagonally across the box.",
            "Drop Shadow Articulation: Add a `box-shadow` to make the card look like it is floating slightly off the webpage.",
          ],
          hints: [
            "The Growing Box: By default, adding padding makes the entire box bigger. If your box gets too wide, you might need to use `box-sizing: border-box` to keep it under control.",
            "Keep Shadows Soft: A massive, solid black shadow looks bad. Use a light gray, blurry shadow for a clean, modern design.",
          ],
        },
      },
      {
        id: "module_5",
        title: "Module 5",
        subtitle: "Advanced Layouts: Positioning & CSS Flexbox",
        description:
          "Mastering regular layouts vs float states, clear fixes, relative/absolute positioning parameters, and modern Flexbox UI systems.",
        lessons: [
          {
            id: "fv5.1",
            videoTitle: "CSS Positioning Tutorial #1 - Introduction",
            duration: "2:18",
            url: "https://www.youtube.com/embed/7ZXsPj43heo?si=Ta37jIi3Ae3FfgoW",
          },
          {
            id: "fv5.2",
            videoTitle: "CSS Positioning Tutorial #2 - Box Model Review",
            duration: "5:58",
            url: "https://www.youtube.com/embed/d601NaSSqSE?si=WUdbpeZUVJgxU6ve",
          },
          {
            id: "fv5.3",
            videoTitle: "CSS Positioning Tutorial #3 - Normal Document Flow",
            duration: "3:06",
            url: "https://www.youtube.com/embed/l8NH6YppJFA?si=m6GimPqcWPKDH9OK",
          },
          {
            id: "fv5.4",
            videoTitle: "CSS Positioning Tutorial #4 - Floating Elements",
            duration: "10:12",
            url: "https://www.youtube.com/embed/VwxGKpvW8Zk?si=tMHEEjCJxaOcQqY_",
          },
          {
            id: "fv5.5",
            videoTitle: "CSS Positioning Tutorial #5 - Clearing Floats",
            duration: "8:51",
            url: "https://www.youtube.com/embed/nE9lIRbIfI0?si=GCSsyEf4k6m0V2-c",
          },
          {
            id: "fv5.6",
            videoTitle: "CSS Positioning Tutorial #6 - Floating Columns",
            duration: "5:07",
            url: "https://www.youtube.com/embed/bJJ7jgfSvZY?si=91JbZ4gCd8FbSyR6",
          },
          {
            id: "fv5.7",
            videoTitle: "CSS Positioning Tutorial #7 - Text Columns",
            duration: "3:45",
            url: "https://www.youtube.com/embed/W77geg_3B5o?si=PrhJ820iO7XjsNFh",
          },
          {
            id: "fv5.8",
            videoTitle: "CSS Positioning Tutorial #8 - Position Relative",
            duration: "4:58",
            url: "https://www.youtube.com/embed/YBJqKWXL2vg?si=fJDfvO8VXUUj7sXf",
          },
          {
            id: "fv5.9",
            videoTitle: "CSS Positioning Tutorial #9 - Absolute Position",
            duration: "5:22",
            url: "https://www.youtube.com/embed/2JMGG_8T-vY?si=CE_zXwb9amQT_mCT",
          },
          {
            id: "fv5.10",
            videoTitle: "CSS Positioning Tutorial #10 - Fixed Position",
            duration: "4:35",
            url: "https://www.youtube.com/embed/8fQWx-d5qc8?si=clpMFvgsfucFIHjh",
          },
          {
            id: "fv5.11",
            videoTitle:
              "CSS Positioning Tutorial #11 - Z - Index & Stacking Order",
            duration: "8:32",
            url: "https://www.youtube.com/embed/k4taTzkhzHc?si=QILQWnbCffxWQr9J",
          },
          {
            id: "fv5.12",
            videoTitle: "CSS Positioning Tutorial #12 - Clipping Content",
            duration: "4:46",
            url: "https://www.youtube.com/embed/ED1mhlAVAGU?si=Jtm2AHOWOC_OpP7A",
          },
          {
            id: "fv5.13",
            videoTitle: "CSS Flexbox Tutorial #1 - Introduction",
            duration: "5:18",
            url: "https://www.youtube.com/embed/Y8zMYaD1bz0?si=0hHRHSMH4JBcH4sk",
          },
          {
            id: "fv5.14",
            videoTitle: "CSS Flexbox Tutorial #2 - Flex Containers",
            duration: "6:27",
            url: "https://www.youtube.com/embed/ux4h6pejCSM?si=hv-OCwG7clB8h1PX",
          },
          {
            id: "fv5.15",
            videoTitle: "CSS Flexbox Tutorial #3 - Flex Grow",
            duration: "4:59",
            url: "https://www.youtube.com/embed/yPK8cwBEOmg?si=WFbRnFXH2agxKyC0",
          },
          {
            id: "fv5.16",
            videoTitle: "CSS Flexbox Tutorial #4 - Flex Shrink",
            duration: "4:10",
            url: "https://www.youtube.com/embed/tSdq8amjMso?si=7KVJXlht3mlBNNmV",
          },
          {
            id: "fv5.17",
            videoTitle: "CSS Flexbox Tutorial #5 - Flex Wrap",
            duration: "4:43",
            url: "https://www.youtube.com/embed/rlZ-fC5eWWk?si=lqYRCdBFWWBHfctW",
          },
          {
            id: "fv5.18",
            videoTitle: "CSS Flexbox Tutorial #6 - Flex Basis",
            duration: "5:02",
            url: "https://www.youtube.com/embed/j5RxNRFWMwo?si=KM8Z6gWRvWB6mDpZ",
          },
          {
            id: "fv5.19",
            videoTitle:
              "CSS Flexbox Tutorial #7 - Creating a Menu with Flexbox",
            duration: "8:03",
            url: "https://www.youtube.com/embed/2plKBskaKfY?si=eNQFCwX3yOUfz8VN",
          },
          {
            id: "fv5.20",
            videoTitle:
              "CSS Flexbox Tutorial #8 - Creating Nested Menu's with Flexbox",
            duration: "8:10",
            url: "https://www.youtube.com/embed/8Ls7maJvjwQ?si=BWbFe66dOKbt1AZ8",
          },
          {
            id: "fv5.21",
            videoTitle: "CSS Flexbox Tutorial #9 - Axis",
            duration: "6:44",
            url: "https://www.youtube.com/embed/8vcSr1yVvXQ?si=yiN7ZQ52b944DruR",
          },
          {
            id: "fv5.22",
            videoTitle:
              "CSS Flexbox Tutorial #10 - Align Items on the Cross Axis",
            duration: "4:42",
            url: "https://www.youtube.com/embed/WY2itpeUK7Q?si=oBkpGjSwTPzr-0es",
          },
          {
            id: "fv5.23",
            videoTitle:
              "CSS Flexbox Tutorial #11 - Grid vs Stacked Layout Example",
            duration: "9:04",
            url: "https://www.youtube.com/embed/B_E6Kh9YkFM?si=z7HOOSkOfBxEPXMV",
          },
          {
            id: "fv5.24",
            videoTitle: "CSS Flexbox Tutorial #12 - Element Order",
            duration: "4:27",
            url: "https://www.youtube.com/embed/FPl-7mTW20U?si=U0yAQ8H3kUtCkYdr",
          },
        ],
        assignment: {
          title: "The Flexbox Navigation Dashboard",
          objective:
            "Build a modern, flexible navigation bar using CSS Flexbox that automatically adjusts and spaces items out perfectly.",
          steps: [
            "Flex Environment Initialization: Create a navigation bar (`<nav>`) with four links inside. In your CSS, turn the navigation bar into a flexbox by setting `display: flex`.",
            "Main-Axis Alignment: Use `justify-content` to space the four links out evenly across the horizontal bar.",
            "Cross-Axis Verification: Use `align-items` to make sure all the links are perfectly centered up-and-down, even if one link has bigger text than the others.",
            "Dynamic Item Expansion: Make one of the items (like a search bar) use `flex-grow` so it stretches out to fill any leftover empty space.",
            "Ordering Operations: Use the `order` property in CSS to force the third link in your HTML to physically display first on the screen, without changing the HTML code at all.",
          ],
          hints: [
            "Justify vs Align: `justify-content` handles left-to-right spacing. `align-items` handles top-to-bottom centering.",
            "Flex Parent: Remember, flexbox rules like `justify-content` only work if you put them on the parent container (the `<nav>`), not on the links themselves.",
          ],
        },
      },
      {
        id: "module_6",
        title: "Module 6",
        subtitle: "Project Control Management & Git Operations",
        description:
          "Mastering command line environments, tracking indices, version rolling, ignore policies, code branching systems, and resolution configurations.",
        lessons: [
          {
            id: "fv6.1",
            videoTitle: "Git Crash Course #1 - Introduction & Setup",
            duration: "20:04",
            url: "https://www.youtube.com/watch?v=4okmgMzPwZ8",
          },
          {
            id: "fv6.2",
            videoTitle: "Git Crash Course #2 - Command Line Basics",
            duration: "12:44",
            url: "https://www.youtube.com/watch?v=7M7gL0gqK9h",
          },
          {
            id: "fv6.3",
            videoTitle: "Git Crash Course #3 - Making a New Git Repository",
            duration: "4:31",
            url: "https://www.youtube.com/watch?v=7M7gL0gqK9i",
          },
          {
            id: "fv6.4",
            videoTitle: "Git Crash Course #4 - Staging Files",
            duration: "6:38",
            url: "https://www.youtube.com/watch?v=7M7gL0gqK9j",
          },
          {
            id: "fv6.5",
            videoTitle: "Git Crash Course #5 - Making Your First Commits",
            duration: "12:34",
            url: "https://www.youtube.com/watch?v=7M7gL0gqK9k",
          },
          {
            id: "fv6.6",
            videoTitle: "Git Crash Course #6 - Deleting & Untracking Files",
            duration: "5:20",
            url: "https://www.youtube.com/watch?v=7M7gL0gqK9l",
          },
          {
            id: "fv6.7",
            videoTitle: "Git Crash Course #7 - Viewing the Project History",
            duration: "6:09",
            url: "https://www.youtube.com/watch?v=7M7gL0gqK9m",
          },
          {
            id: "fv6.8",
            videoTitle: "Git Crash Course #8 - Undoing Changes",
            duration: "8:20",
            url: "https://www.youtube.com/watch?v=7M7gL0gqK9n",
          },
          {
            id: "fv6.9",
            videoTitle: "Git Crash Course #9 - .gitignore File",
            duration: "5:45",
            url: "https://www.youtube.com/watch?v=7M7gL0gqK9o",
          },
          {
            id: "fv6.10",
            videoTitle: "Git Crash Course #10 - Git Features in VS Code",
            duration: "6:22",
            url: "https://www.youtube.com/watch?v=7M7gL0gqK9p",
          },
          {
            id: "fv6.11",
            videoTitle: "Git Crash Course #11 - Understanding Branches",
            duration: "5:42",
            url: "https://www.youtube.com/watch?v=7M7gL0gqK9q",
          },
          {
            id: "fv6.12",
            videoTitle: "Git Crash Course #12 - Switching Between Branches",
            duration: "10:58",
            url: "https://www.youtube.com/watch?v=7M7gL0gqK9r",
          },
          {
            id: "fv6.13",
            videoTitle: "Git Crash Course #13 - Merging Branches",
            duration: "4:38",
            url: "https://www.youtube.com/watch?v=7M7gL0gqK9s",
          },
          {
            id: "fv6.14",
            videoTitle: "Git Crash Course #14 - Deleting Branches",
            duration: "6:08",
            url: "https://www.youtube.com/watch?v=7M7gL0gqK9t",
          },
        ],
        assignment: {
          title: "The Versioned Web Repository",
          objective:
            "Learn how to use Git in your computer's terminal to save versions of your code, ignore junk files, and safely test new features using branches.",
          steps: [
            "Initialize Tracking: Open your terminal, navigate to your project folder, and type `git init` to start tracking your code's history.",
            "Indexing Operations: Create a file named `.gitignore`. Type the names of any system files or cache folders in there so Git ignores them.",
            'Staging & Historical Log 1: Add your HTML and CSS files to Git (`git add`), and save them to the timeline with a clear message (`git commit -m "Initial profile setup"`).',
            "Branching Workflows: Create a new, safe workspace to test things out by making a branch called 'experimental-styles' (`git checkout -b`).",
            "Modification & Branch Destruction: Add a wild new background color, commit the change, and switch back to your main branch. Merge the experiment in, and then delete the experimental branch.",
          ],
          hints: [
            "Where am I?: Always type `git status` to check what branch you are on and what files have been changed before you commit.",
            "Merge Conflicts: If Git gets confused when merging, it will put weird arrows (`<<<<<<<`) in your code. Just open the file, delete the version you don't want, delete the arrows, and save.",
          ],
        },
      },
      {
        id: "module_7",
        title: "Module 7",
        subtitle: "JavaScript Essentials, Modern Logic & DOM Engineering",
        description:
          "Comprehensive program orchestration: variables, evaluation streams, control structures, functions, scope limits, entity states, event monitors, and dynamic interface alterations.",
        lessons: [
          {
            id: "fv7.1",
            videoTitle: "JavaScript Tutorial For Beginners 01 - Introduction",
            duration: "3:41",
            url: "https://www.youtube.com/embed/qoSksQ4s_hg?si=Z0UssVijPoKrnjyL",
          },
          {
            id: "fv7.2",
            videoTitle: "JavaScript for Beginners 02 - What is JavaScript?",
            duration: "4:04",
            url: "https://www.youtube.com/embed/qoSksQ4s_hg?si=Z0UssVijPoKrnjyL",
          },
          {
            id: "fv7.3",
            videoTitle:
              "JavaScript Tutorial For Beginners 03 - Hello World! in JavaScript",
            duration: "3:18",
            url: "https://www.youtube.com/embed/ranSYb-EhrU?si=mtJHinJy5W3hIjM1",
          },
          {
            id: "fv7.4",
            videoTitle: "New Modern JavaScript Update",
            duration: "0:52",
            url: "https://www.youtube.com/embed/GCcfKNswi4c?si=5LuQS_IhDTooGnhr",
          },
          {
            id: "fv7.5",
            videoTitle:
              "JavaScript Tutorial For Beginners #4 - Where to put your JS",
            duration: "5:14",
            url: "https://www.youtube.com/embed/czlwRUeTCgw?si=E4I-336QPYk97tav",
          },
          {
            id: "fv7.6",
            videoTitle:
              "JavaScript Tutorial For Beginners #5 - Google Chrome Developer Tools",
            duration: "4:52",
            url: "https://www.youtube.com/embed/JzZFccCEgGA?si=JqI92Ba9PhxMuhXT",
          },
          {
            id: "fv7.7",
            videoTitle:
              "JavaScript Tutorial For Beginners #6 - Basic JavaScript Syntax & Rules",
            duration: "7:50",
            url: "https://www.youtube.com/embed/QLatPwsbDrQ?si=zd6G_qShDoY1dCfA",
          },
          {
            id: "fv7.8",
            videoTitle:
              "JavaScript Tutorial For Beginners #7 - JavaScript Variables",
            duration: "9:00",
            url: "https://www.youtube.com/embed/u0Mq3FzpsmI?si=7xAwl5Qs-y_oel02",
          },
          {
            id: "fv7.9",
            videoTitle:
              "JavaScript Tutorial For Beginners #8 - Basic Mathematical Operators",
            duration: "6:17",
            url: "https://www.youtube.com/embed/_MC0Gw07w8M?si=5k4qOvSQR3wBpI4n",
          },
          {
            id: "fv7.10",
            videoTitle:
              "JavaScript Tutorial For Beginners #9 - Math Operator Short-hand",
            duration: "4:56",
            url: "https://www.youtube.com/embed/Z1eV0RBRam0?si=wR5DfHzcULoYhNox",
          },
          {
            id: "fv7.11",
            videoTitle:
              "JavaScript Tutorial For Beginners #10 - Logging to the Console",
            duration: "3:40",
            url: "https://www.youtube.com/embed/tH-q9QFNUdA?si=JpQOLel6TQW-IIEG",
          },
          {
            id: "fv7.12",
            videoTitle:
              "JavaScript Tutorial For Beginners #11 - Booleans in JavaScript",
            duration: "6:14",
            url: "https://www.youtube.com/embed/B4ZCFdrBmbE?si=9hzQtyzMeMBA7xk-",
          },
          {
            id: "fv7.13",
            videoTitle: "JavaScript Tutorial For Beginners #12 - If Statements",
            duration: "8:46",
            url: "https://www.youtube.com/embed/Lp-Du2fKoug?si=kUMaK6GrMhleYm4N",
          },
          {
            id: "fv7.14",
            videoTitle:
              "JavaScript Tutorial For Beginners #13 - Else If Statements",
            duration: "4:04",
            url: "https://www.youtube.com/embed/1v1Bk3Q02Sc?si=QJAm_3xh0S94gQb1",
          },
          {
            id: "fv7.15",
            videoTitle:
              "JavaScript Tutorial For Beginners #14 - Comparison Operators",
            duration: "5:26",
            url: "https://www.youtube.com/embed/LjGaaWX_NbE?si=ueyyZezs1UVnDGvD",
          },
          {
            id: "fv7.16",
            videoTitle:
              "JavaScript Tutorial For Beginners #15 - Logical Operators",
            duration: "6:02",
            url: "https://www.youtube.com/embed/mbT7sSmVUS8?si=-KD4PJocuY0kIBxC",
          },
          {
            id: "fv7.17",
            videoTitle: "JavaScript Tutorial For Beginners #16 - While Loops",
            duration: "4:10",
            url: "https://www.youtube.com/embed/PpbFyLTtpWI?si=ruH2Oi1QfL2OnUO6",
          },
          {
            id: "fv7.18",
            videoTitle: "JavaScript Tutorial For Beginners #17 - For Loops",
            duration: "7:50",
            url: "https://www.youtube.com/embed/U87UmD-5h4o?si=AJMeStA892dxDy9H",
          },
          {
            id: "fv7.19",
            videoTitle:
              "JavaScript Tutorial For Beginners #18 - Break & Continue",
            duration: "4:14",
            url: "https://www.youtube.com/embed/QSuTH0C_3_Y?si=KdBXjFS0Kj-sZiY5",
          },
          {
            id: "fv7.20",
            videoTitle:
              "JavaScript Tutorial For Beginners 19 - Practical Example using Loops",
            duration: "4:03",
            url: "https://www.youtube.com/embed/eZBTLsv2ktM?si=xvyft-2BBEbc0BoM",
          },
          {
            id: "fv7.21",
            videoTitle: "JavaScript Tutorial For Beginners #20 - Functions",
            duration: "9:19",
            url: "https://www.youtube.com/embed/KH57lIgwe2g?si=kxnZZ76CI3l55vCy",
          },
          {
            id: "fv7.22",
            videoTitle:
              "JavaScript Tutorial For Beginners #21 - Variable Scope",
            duration: "6:06",
            url: "https://www.youtube.com/embed/kjdZ1h3CIs4?si=rW48eZln9sMnQ7xS",
          },
          {
            id: "fv7.23",
            videoTitle: "JavaScript Tutorial For Beginners #22 - Numbers",
            duration: "6:10",
            url: "https://www.youtube.com/embed/TD3Pfuxgnuc?si=eSnBO5bjaGIGrxWT",
          },
          {
            id: "fv7.24",
            videoTitle:
              "JavaScript Tutorial For Beginners - NaN (Not a Number)",
            duration: "6:35",
            url: "https://www.youtube.com/embed/0ZiltZDg9Gg?si=mIGP6AmZouw5hCLh",
          },
          {
            id: "fv7.25",
            videoTitle: "JavaScript Tutorial For Beginners #24 - Strings",
            duration: "9:38",
            url: "https://www.youtube.com/embed/k8MIbEVXhE0?si=1Ywi196rNBsphn6S",
          },
          {
            id: "fv7.26",
            videoTitle:
              "JavaScript Tutorial For Beginners #25 - Slice and Split Strings",
            duration: "6:39",
            url: "https://www.youtube.com/embed/HEdikBHsMag?si=YFqKS5a9ywapfl9j",
          },
          {
            id: "fv7.27",
            videoTitle: "JavaScript Tutorial For Beginners #26 - Arrays",
            duration: "6:48",
            url: "https://www.youtube.com/embed/EUnV-fCY0Pc?si=D63LsKHgx8xPVl4E",
          },
          {
            id: "fv7.28",
            videoTitle:
              "JavaScript Tutorial For Beginners #27 - Introduction to Objects",
            duration: "6:37",
            url: "https://www.youtube.com/embed/EUnV-fCY0Pc?si=D63LsKHgx8xPVl4E",
          },
          {
            id: "fv7.29",
            videoTitle:
              "JavaScript Tutorial For Beginners #28 - Creating a new JavaScript Object",
            duration: "10:07",
            url: "https://www.youtube.com/embed/wA5vU_HQfVI?si=0h03a8SKDJnNtuNY",
          },
          {
            id: "fv7.30",
            videoTitle: "JavaScript Tutorial For Beginners #29 - THIS Keyword",
            duration: "5:24",
            url: "https://www.youtube.com/embed/yVdU2coJ1VQ?si=KW6XBCZcF4CeXfdn",
          },
          {
            id: "fv7.31",
            videoTitle:
              "JavaScript Tutorial For Beginners #30 - Constructor Functions",
            duration: "6:49",
            url: "https://www.youtube.com/embed/SrhHszXkMRU?si=bG3Tzd4MP48ga4RJ",
          },
          {
            id: "fv7.32",
            videoTitle:
              "JavaScript Tutorial For Beginners #31 - The Date Object",
            duration: "9:23",
            url: "https://www.youtube.com/embed/irrxnH-nkqg?si=PHr3JRvj_3iGEmmx",
          },
          {
            id: "fv7.33",
            videoTitle:
              "JavaScript Tutorial For Beginners #32 - What is the DOM in JavaScript?",
            duration: "4:31",
            url: "https://www.youtube.com/embed/H63dVFDuJDM?si=n573tl12nXhwVVPY",
          },
          {
            id: "fv7.34",
            videoTitle:
              "JavaScript Tutorial For Beginners #33 - Traversing the DOM",
            duration: "7:44",
            url: "https://www.youtube.com/embed/SowaJlX1uKA?si=tfChPy2v0Sl4usbG",
          },
          {
            id: "fv7.35",
            videoTitle:
              "JavaScript Tutorial For Beginners #34 - Changing Page Content",
            duration: "5:39",
            url: "https://www.youtube.com/embed/FQuwArzGPYo?si=aSneiASgTtCdUQJ8",
          },
          {
            id: "fv7.36",
            videoTitle:
              "JavaScript Tutorial For Beginners #35 - Changing Element Attributes",
            duration: "6:03",
            url: "https://www.youtube.com/embed/V0S0LXvnW-o?si=o3GmC2Bar9hiYX8w",
          },
          {
            id: "fv7.37",
            videoTitle:
              "JavaScript Tutorial For Beginners #36 - Changing CSS Styles",
            duration: "4:50",
            url: "https://www.youtube.com/embed/97agDBCyxAE?si=AydXio8e7XLro9Jt",
          },
          {
            id: "fv7.38",
            videoTitle:
              "JavaScript Tutorial For Beginners #37 - Adding Elements to the DOM",
            duration: "7:44",
            url: "https://www.youtube.com/embed/TrGI9Yki-24?si=Dpmi9zkdkKx8RvQH",
          },
          {
            id: "fv7.39",
            videoTitle:
              "JavaScript Tutorial For Beginners #38 - Removing Elements from the DOM",
            duration: "4:13",
            url: "https://www.youtube.com/embed/rBGgguNnutE?si=Ok7_ltdYTCuM-trD",
          },
          {
            id: "fv7.40",
            videoTitle:
              "JavaScript Tutorial For Beginners # 39 - Introduction to JavaScript Events",
            duration: "8:30",
            url: "https://www.youtube.com/embed/bf_9IeihQ0M?si=pByj1NAGc1RgekRe",
          },
          {
            id: "fv7.41",
            videoTitle:
              "JavaScript Tutorial For Beginners #40 - The onClick Event",
            duration: "8:05",
            url: "https://www.youtube.com/embed/XQEfWd1lh4Q?si=ba5VoZZGptyd-DCB",
          },
          {
            id: "fv7.42",
            videoTitle:
              "JavaScript Tutorial For Beginners #41 - Window onLoad Event",
            duration: "5:07",
            url: "https://www.youtube.com/embed/RVA4HoEE_q8?si=u7qZoDsjZYOpBXJx",
          },
          {
            id: "fv7.43",
            videoTitle:
              "JavaScript Tutorial For Beginners #42 - JavaScript Timers",
            duration: "12:12",
            url: "https://www.youtube.com/embed/Az5J_EkhYCY?si=v9qLEY1v-JgE7mzc",
          },
          {
            id: "fv7.44",
            videoTitle:
              "JavaScript Tutorial For Beginners #43 - Accessing Form Elements",
            duration: "6:04",
            url: "https://www.youtube.com/embed/BhlvQfIaE4k?si=0173QvUeilj_X-XR",
          },
          {
            id: "fv7.45",
            videoTitle:
              "JavaScript Tutorial For Beginners #44 - VERY Simple Form Validation",
            duration: "5:37",
            url: "https://www.youtube.com/embed/b0pxAb_yy2U?si=jn4lmvFk2bqkisGn",
          },
          {
            id: "fv7.46",
            videoTitle:
              "JavaScript Tutorial For Beginners #45 - JavaScript Libraries",
            duration: "8:34",
            url: "https://www.youtube.com/embed/uq7omoxwA7A?si=TDkkZfyCIbvHqZGY",
          },
        ],
        assignment: {
          title: "Dynamic Metric Counter & Form Validator",
          objective:
            "Write a JavaScript program that listens for a button click, checks if the text the user typed is valid, and updates the webpage instantly.",
          steps: [
            "DOM Traversal Setup: Create a `.js` file and link it to your HTML. Write JavaScript to grab the input box, the submit button, and a blank text space where you will show messages.",
            "Event Monitor Binding: Add an 'Event Listener' to the submit button so that it waits for a user to 'click' it.",
            "Data Inspection Logic: When clicked, stop the page from refreshing. Grab the text the user typed and use an `if` statement to check if it's long enough (e.g., more than 5 characters).",
            "State Counter & Feedback Delivery: Create a counter variable. If the text is good, add 1 to the counter and show a success message on the screen.",
            "Visual Attribute Manipulation: If the text is too short, use JavaScript to instantly add a CSS class that turns the input box red to warn the user.",
          ],
          hints: [
            "Stop the Refresh: Forms naturally refresh the page when you click submit. You must use `event.preventDefault()` inside your function to stop this, or your JavaScript will disappear instantly.",
            "Counter Placement: If you create your counter variable *inside* the click function, it will reset to zero every single time you click. Put `let count = 0;` outside the function!",
          ],
        },
      },
      {
        id: "capstone_projects",
        title: "Capstone Project",
        subtitle: "Capstone Project",
        description:
          "Final Graduation Project. You have exactly two weeks to complete this. You must choose two (2) of the projects below and build them completely from scratch using HTML, CSS (Flexbox/Grid), and JavaScript. You must also use Git to track your versions.",
        lessons: [],
        projects: [
          {
            id: "project_alpha",
            title: "Project Alpha: The Smart Dashboard Sandbox UI",
            description:
              "Build an interactive dashboard where users can type information and watch the screen layout, numbers, and colors update instantly.",
            core_requirements: [
              "Build the entire layout using modern CSS Flexbox.",
              "Use JavaScript to update counters, badges, and text on the screen based on what the user does.",
              "Create a 'Dark Mode' button that uses JavaScript to swap the website's colors from light to dark.",
            ],
            architectural_concept_map: {
              diagram_placeholder: "",
              specifications: [
                "Responsive Sidebar: A menu on the left side of the screen that automatically shrinks into a top banner when viewed on a small mobile screen.",
                "Wrapping Cards: A top row of data cards that automatically drop down to the next line if the screen gets too small (using flex-wrap).",
                "Data Console: A box at the bottom of the screen that prints out whatever the user types into the inputs, like a mock computer terminal.",
              ],
            },
          },
          {
            id: "project_beta",
            title: "Project Beta: The Client-Side Evaluation Engine",
            description:
              "Build a quiz or task app that generates questions, tracks the user's score, and features a running countdown timer.",
            core_requirements: [
              "Use JavaScript to create the quiz questions on the screen (do not just hardcode them into the HTML file).",
              "Create a countdown timer that warns the user when time is running out.",
              "Build a final summary screen that calculates their score and gives them a specific badge based on how well they did.",
            ],
            architectural_concept_map: {
              diagram_placeholder: "",
              execution_flowchart:
                "[Question Data] ──> [Draw on Screen with JS] ──> [User Clicks Answer] ──> [Check if Correct] ──> [Update Score] ──> [Show Final Result Screen]",
            },
          },
          {
            id: "project_gamma",
            title: "Project Gamma: The Interactive SaaS Documentation Hub",
            description:
              "Build a professional help/documentation website with a fixed sidebar, a live search bar, and buttons that copy text to the clipboard.",
            core_requirements: [
              "Create a split-screen design where the left sidebar stays totally still while the right side of the page scrolls.",
              "Build a live search bar that instantly hides or shows paragraphs of text as the user types.",
              "Create code example boxes with a 'Copy to Clipboard' button that actually works using JavaScript.",
            ],
            architectural_concept_map: {
              diagram_placeholder: "",
              specifications: [
                "The Fixed Sidebar: Use `position: fixed` or `height: 100vh` so the navigation menu never scrolls out of view.",
                "The Content Area: Push the main reading text to the right using margins so it doesn't overlap the sidebar. Use JavaScript to filter the text when searching.",
              ],
            },
          },
        ],
      },
    ],
  },
  /*4: {
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
          },
          {
            id: "gv1.2",
            videoTitle: "Getting Started with Pixel Lab",
          },
          {
            id: "gv1.3",
            videoTitle: "Understanding Canvas and Resolution",
          },
          {
            id: "gv1.4",
            videoTitle: "Core Tool Overview",
          },
          {
            id: "gv1.5",
            videoTitle: "Working with Layers",
          },
          {
            id: "gv1.6",
            videoTitle: "Saving and Exporting Designs",
          },
          {
            id: "gv1.7",
            videoTitle: "Design Principles & Inspiration",
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
          },
          {
            id: "gv2.2",
            videoTitle: "Psychology of Color",
          },
          {
            id: "gv2.3",
            videoTitle: "Working with Colors in Pixel Lab",
          },
          {
            id: "gv2.4",
            videoTitle: "Creating Gradients",
          },
          {
            id: "gv2.5",
            videoTitle: "Background Techniques",
          },
          {
            id: "gv2.6",
            videoTitle: "Using Free Texture Resources",
          },
          {
            id: "gv2.7",
            videoTitle: "Building Brand Color Palettes",
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
          },
          {
            id: "gv3.2",
            videoTitle: "Font Pairing and Hierarchy",
          },
          {
            id: "gv3.3",
            videoTitle: "Text in Pixel Lab",
          },
          {
            id: "gv3.4",
            videoTitle: "Text Effects",
          },
          {
            id: "gv3.5",
            videoTitle: "Advanced Text Placement",
          },
          {
            id: "gv3.6",
            videoTitle: "Importing Custom Fonts",
          },
          {
            id: "gv3.7",
            videoTitle: "Typography Dos and Don'ts",
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
          },
          {
            id: "gv4.2",
            videoTitle: "Styling Shapes",
          },
          {
            id: "gv4.3",
            videoTitle: "Creating Icons",
          },
          {
            id: "gv4.4",
            videoTitle: "Importing Icons and Clipart",
          },
          {
            id: "gv4.5",
            videoTitle: "Removing Backgrounds",
          },
          {
            id: "gv4.6",
            videoTitle: "Layering for Depth",
          },
          {
            id: "gv4.7",
            videoTitle: "Working with Stickers",
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
          },
          {
            id: "gv5.2",
            videoTitle: "Sketching Logo Concepts",
          },
          {
            id: "gv5.3",
            videoTitle: "Building Logos in Pixel Lab",
          },
          {
            id: "gv5.4",
            videoTitle: "Logo Colors",
          },
          {
            id: "gv5.5",
            videoTitle: "Testing Logos on Backgrounds",
          },
          {
            id: "gv5.6",
            videoTitle: "Exporting Versatile Logos",
          },
          {
            id: "gv5.7",
            videoTitle: "Brand Guidelines",
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
          },
          {
            id: "gv6.2",
            videoTitle: "Designing for Scroll-Stopping Content",
          },
          {
            id: "gv6.3",
            videoTitle: "Creating Instagram Carousels",
          },
          {
            id: "gv6.4",
            videoTitle: "Story and Thumbnail Design",
          },
          {
            id: "gv6.5",
            videoTitle: "Creating Templates",
          },
          {
            id: "gv6.6",
            videoTitle: "Batch Designing",
          },
          {
            id: "gv6.7",
            videoTitle: "Brand Consistency",
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
          },
          {
            id: "gv7.2",
            videoTitle: "Placing Designs in Mockups",
          },
          {
            id: "gv7.3",
            videoTitle: "Business Card Design",
          },
          {
            id: "gv7.4",
            videoTitle: "Certificate Design",
          },
          {
            id: "gv7.5",
            videoTitle: "Poster vs Banner Sizing",
          },
          {
            id: "gv7.6",
            videoTitle: "Preparing for Print",
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
          },
          {
            id: "gv8.2",
            videoTitle: "Week 2: Brand Assets Creation",
          },
          {
            id: "gv8.3",
            videoTitle: "Week 3: Marketing Materials",
          },
          {
            id: "gv8.4",
            videoTitle: "Week 4: Brand Style Guide",
          },
          {
            id: "gv8.5",
            videoTitle: "Final Deliverables",
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
          },
          {
            id: "av1.2",
            videoTitle: "Photoshop Interface & Setup",
          },
          {
            id: "av1.3",
            videoTitle: "Illustrator Interface Overview",
          },
          {
            id: "av1.4",
            videoTitle: "File Formats & Document Setup",
          },
          {
            id: "av1.5",
            videoTitle: "Shortcuts and Workflow",
          },
          {
            id: "av1.6",
            videoTitle: "Saving, Exporting & Cloud Services",
          },
          {
            id: "av1.7",
            videoTitle: "Project Organization",
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
          },
          {
            id: "av2.2",
            videoTitle: "Understanding Photoshop Layers",
          },
          {
            id: "av2.3",
            videoTitle: "Adjustment Layers",
          },
          {
            id: "av2.4",
            videoTitle: "Retouching and Healing",
          },
          {
            id: "av2.5",
            videoTitle: "Non-Destructive Workflows",
          },
          {
            id: "av2.6",
            videoTitle: "Advanced Portrait Retouching",
          },
          {
            id: "av2.7",
            videoTitle: "Camera Raw and Filters",
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
          },
          {
            id: "av3.2",
            videoTitle: "Blending Modes and Styles",
          },
          {
            id: "av3.3",
            videoTitle: "Photo Compositing Basics",
          },
          {
            id: "av3.4",
            videoTitle: "Perspective and Warping",
          },
          {
            id: "av3.5",
            videoTitle: "Color Grading",
          },
          {
            id: "av3.6",
            videoTitle: "Special Effects and Text",
          },
          {
            id: "av3.7",
            videoTitle: "Automation and Batch Processing",
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
          },
          {
            id: "av4.2",
            videoTitle: "Working with Shapes",
          },
          {
            id: "av4.3",
            videoTitle: "Pathfinder and Shape Builder",
          },
          {
            id: "av4.4",
            videoTitle: "Strokes and Lines",
          },
          {
            id: "av4.5",
            videoTitle: "Fills and Appearance",
          },
          {
            id: "av4.6",
            videoTitle: "Color Management in Illustrator",
          },
          {
            id: "av4.7",
            videoTitle: "Precision Tools",
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
          },
          {
            id: "av5.2",
            videoTitle: "Vector Logo Workflow",
          },
          {
            id: "av5.3",
            videoTitle: "Typography Techniques",
          },
          {
            id: "av5.4",
            videoTitle: "Live Trace and Vectorization",
          },
          {
            id: "av5.5",
            videoTitle: "Logo Variants and Artboards",
          },
          {
            id: "av5.6",
            videoTitle: "Logo Types and Structures",
          },
          {
            id: "av5.7",
            videoTitle: "Packaging and Presenting",
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
          },
          {
            id: "av6.2",
            videoTitle: "Business Cards and Flyers",
          },
          {
            id: "av6.3",
            videoTitle: "Brochure Design",
          },
          {
            id: "av6.4",
            videoTitle: "Working with Images in Illustrator",
          },
          {
            id: "av6.5",
            videoTitle: "Typography Styles",
          },
          {
            id: "av6.6",
            videoTitle: "Prepping for Print & Patterns",
          },
          {
            id: "av6.7",
            videoTitle: "Brand Style Guides",
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
          },
          {
            id: "av7.2",
            videoTitle: "Advanced Manipulation",
          },
          {
            id: "av7.3",
            videoTitle: "Creating UI Assets",
          },
          {
            id: "av7.4",
            videoTitle: "Social Media Templates",
          },
          {
            id: "av7.5",
            videoTitle: "Exporting for Web and Animations",
          },
          {
            id: "av7.6",
            videoTitle: "AI Tools in Photoshop",
          },
          {
            id: "av7.7",
            videoTitle: "Managing Large Projects",
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
          },
          {
            id: "av8.2",
            videoTitle: "Week 2: Logo and Brand Assets",
          },
          {
            id: "av8.3",
            videoTitle: "Week 3: Print and Photo Campaigns",
          },
          {
            id: "av8.4",
            videoTitle: "Week 4: Case Study and Presentation",
          },
          {
            id: "av8.5",
            videoTitle: "Final Deliverables",
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
          },
          {
            id: "kv1.2",
            videoTitle: "Understanding KDP Income Streams",
          },
          {
            id: "kv1.3",
            videoTitle: "Book Content Types",
          },
          {
            id: "kv1.4",
            videoTitle: "Market and Niche Research",
          },
          {
            id: "kv1.5",
            videoTitle: "Setting Up Your KDP Account",
          },
          {
            id: "kv1.6",
            videoTitle: "Navigating the Dashboard",
          },
          {
            id: "kv1.7",
            videoTitle: "The Publication Process",
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
          },
          {
            id: "kv2.2",
            videoTitle: "Choosing Your First Book",
          },
          {
            id: "kv2.3",
            videoTitle: "Structuring Your Content",
          },
          {
            id: "kv2.4",
            videoTitle: "Outlining Strategies",
          },
          {
            id: "kv2.5",
            videoTitle: "Using AI Tools Ethically",
          },
          {
            id: "kv2.6",
            videoTitle: "Content Guidelines and Policies",
          },
          {
            id: "kv2.7",
            videoTitle: "Copyright and Originality",
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
          },
          {
            id: "kv3.2",
            videoTitle: "Design Tools and Setup",
          },
          {
            id: "kv3.3",
            videoTitle: "Margins, Bleed, and Page Strategy",
          },
          {
            id: "kv3.4",
            videoTitle: "Designing Interior Pages",
          },
          {
            id: "kv3.5",
            videoTitle: "Creating Interior PDFs",
          },
          {
            id: "kv3.6",
            videoTitle: "Cover Design and Spine Calculation",
          },
          {
            id: "kv3.7",
            videoTitle: "Uploading Your First Book",
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
          },
          {
            id: "kv4.2",
            videoTitle: "Formatting with Microsoft Word",
          },
          {
            id: "kv4.3",
            videoTitle: "Ebook Formatting Rules",
          },
          {
            id: "kv4.4",
            videoTitle: "Converting to EPUB",
          },
          {
            id: "kv4.5",
            videoTitle: "Using Kindle Create",
          },
          {
            id: "kv4.6",
            videoTitle: "Testing with Kindle Previewer",
          },
          {
            id: "kv4.7",
            videoTitle: "Ebook Covers and Series Strategy",
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
          },
          {
            id: "kv5.2",
            videoTitle: "Cover Design Principles",
          },
          {
            id: "kv5.3",
            videoTitle: "Tools for Cover Design",
          },
          {
            id: "kv5.4",
            videoTitle: "Typography and Image Sourcing",
          },
          {
            id: "kv5.5",
            videoTitle: "Legal Considerations",
          },
          {
            id: "kv5.6",
            videoTitle: "The Thumbnail Test",
          },
          {
            id: "kv5.7",
            videoTitle: "Getting Feedback",
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
          },
          {
            id: "kv6.2",
            videoTitle: "Writing Compelling Descriptions",
          },
          {
            id: "kv6.3",
            videoTitle: "Keyword Research Deep Dive",
          },
          {
            id: "kv6.4",
            videoTitle: "The 7 Keyword Slots Strategy",
          },
          {
            id: "kv6.5",
            videoTitle: "Selecting Profitable Categories",
          },
          {
            id: "kv6.6",
            videoTitle: "Pricing and Exclusivity",
          },
          {
            id: "kv6.7",
            videoTitle: "ISBN and Publishing Checklist",
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
          },
          {
            id: "kv7.2",
            videoTitle: "Amazon Ads Fundamentals",
          },
          {
            id: "kv7.3",
            videoTitle: "Optimizing Ad Campaigns",
          },
          {
            id: "kv7.4",
            videoTitle: "Getting Ethical Reviews",
          },
          {
            id: "kv7.5",
            videoTitle: "Author Central and Branding",
          },
          {
            id: "kv7.6",
            videoTitle: "Email Lists and Social Media",
          },
          {
            id: "kv7.7",
            videoTitle: "Scaling Your Business",
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
          },
          {
            id: "kv8.2",
            videoTitle: "Week 2: Publishing and Launch",
          },
          {
            id: "kv8.3",
            videoTitle: "Week 3: Data Tracking and Optimization",
          },
          {
            id: "kv8.4",
            videoTitle: "Week 4: Business Planning",
          },
          {
            id: "kv8.5",
            videoTitle: "Submitting Deliverables",
          },
        ],
        assignment:
          "CAPSTONE: Publish a complete book on Amazon KDP (any type). Deliver: (1) Live Amazon book listing URL or ASIN, (2) Screenshot of KDP dashboard showing the book live, (3) Ad campaign report (minimum 7 days of data), (4) Author Central page link, (5) 6-Month KDP Business Plan: 5 books in pipeline with niche research, content plan, cover design timeline, marketing strategy, and income projections.",
      },
    ],
  }, 
  */
};
