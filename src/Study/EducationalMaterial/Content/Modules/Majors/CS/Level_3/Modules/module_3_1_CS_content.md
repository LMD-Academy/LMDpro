# Module 3.1.CS: Programming Fundamentals (Python Focus)

**Level:** 3 (Professional - Specialization)
**Major:** Computer Science / Cybersecurity (CS)

**Estimated Content Length:** 20-25 A4 Pages

**Prerequisites:** Module 1.5 (Technology & Data Literacy Basics), Logical thinking ability.

**Learning Objectives:**
*   Understand fundamental programming concepts (algorithms, data types, variables, control structures).
*   Master core Python syntax and semantics (operators, expressions, statements).
*   Implement programs using fundamental Python data structures (lists, tuples, dictionaries, sets).
*   Develop modular code using functions and understand scope.
*   Learn basic input/output operations and file handling in Python.
*   Understand principles of object-oriented programming (OOP) in Python (classes, objects, inheritance, polymorphism - introductory).
*   Introduce basic error handling using try-except blocks.

---

## 1. Introduction: The Language of Computation

At the heart of computer science and cybersecurity lies the ability to instruct computers precisely what to do. Programming is the process of designing, writing, testing, and maintaining the source code of computer programs. This code, written in a specific programming language, translates human intentions into instructions that a computer can execute. Python has become an exceptionally popular language across various domains, including web development, data science, automation, cybersecurity, and scientific computing, largely due to its readability, extensive libraries, and gentle learning curve, making it an ideal starting point for mastering programming fundamentals.

This module, the first in the Level 3 Computer Science / Cybersecurity specialization, provides a comprehensive introduction to the core concepts of programming, using Python as the primary language. We will start with the absolute basics, defining what algorithms are and exploring fundamental programming building blocks like data types, variables, and control structures (sequential, conditional, iterative). You will gain hands-on experience with Python's syntax, learning how to use operators, form expressions, and write clear statements. We will delve into Python's versatile built-in data structures – lists, tuples, dictionaries, and sets – understanding their characteristics and common use cases. A key focus will be on writing modular and reusable code through functions, including understanding parameter passing and variable scope. You will learn how to interact with users through basic input/output operations and how to read from and write to files. We will also introduce the foundational principles of Object-Oriented Programming (OOP) – classes, objects, inheritance, and polymorphism – concepts crucial for building larger, more complex software systems. Finally, we will cover basic error handling techniques using try-except blocks to make programs more robust. Mastering these programming fundamentals in Python provides a solid foundation for tackling more advanced computer science topics, software development practices, and cybersecurity scripting challenges in subsequent modules.

## 2. Fundamental Programming Concepts

Before diving into Python syntax, let's understand some universal programming concepts.

*   **Algorithm:** A step-by-step procedure or set of rules for solving a specific problem or accomplishing a task. Algorithms must be unambiguous, finite, and effective.
    *   *Example (Making Tea):* 1. Boil water. 2. Put tea bag in cup. 3. Pour boiling water into cup. 4. Wait 3 minutes. 5. Remove tea bag. 6. Add milk/sugar (optional).
*   **Program:** An implementation of an algorithm in a specific programming language.
*   **Source Code:** The human-readable text written by a programmer in a programming language.
*   **Compiler/Interpreter:** A program that translates source code into machine code (instructions the computer's processor can directly execute). Python is typically *interpreted*, meaning code is executed line by line, although compilation to bytecode occurs behind the scenes.
*   **Syntax:** The set of rules that defines the combinations of symbols that are considered to be correctly structured programs in a specific language (like grammar in human language).
*   **Semantics:** The meaning of syntactically correct strings in a language.
*   **Data Types:** Classifications that specify which type of value a variable has and what type of mathematical, relational, or logical operations can be applied to it without causing an error (e.g., integer, floating-point number, string, boolean).
*   **Variables:** Named storage locations in memory that hold data values. The value can typically be changed during program execution.
*   **Control Structures:** Mechanisms that determine the order in which statements are executed.
    *   **Sequence:** Statements are executed one after another in the order they appear.
    *   **Selection (Conditional):** Executes different blocks of code based on whether a condition is true or false (e.g., `if`, `else`).
    *   **Iteration (Looping):** Repeats a block of code multiple times (e.g., `for`, `while`).
*   **Debugging:** The process of finding and fixing errors (bugs) in source code.

## 3. Python Syntax and Semantics Basics

Python is known for its clean and readable syntax.

*   **Statements:** Instructions that the Python interpreter can execute (e.g., assignment statements, `print` statements, `if` statements).
*   **Expressions:** Combinations of values, variables, operators, and function calls that evaluate to a single value (e.g., `5 + 3`, `x * 2`, `len("hello")`).
*   **Indentation:** Python uses whitespace (indentation, typically 4 spaces) to define blocks of code (e.g., code inside an `if` statement or a `for` loop). This is crucial and part of the syntax, unlike many other languages that use braces `{}`.
    ```python
    x = 15 # Example value
    if x > 10:
        print("x is greater than 10") # Indented block
        y = x * 2
    print("This line is outside the if block")
    ```
*   **Comments:** Used to explain code. Ignored by the interpreter.
    *   Single-line comments start with `#`: `# This is a comment`
    *   Multi-line comments (docstrings) often use triple quotes: `"""This is a multi-line docstring."""` (Technically strings, but often used for comments/documentation).
*   **Variables and Assignment:** Use the assignment operator `=` to assign a value to a variable name. Variable names are case-sensitive and should be descriptive (e.g., `user_age = 25`, `total_price = 19.99`). Python is dynamically typed, meaning you don't need to declare the type of a variable explicitly; its type is inferred from the assigned value.
*   **Built-in Functions:** Python comes with many useful functions, e.g.:
    *   `print()`: Displays output to the console.
    *   `input()`: Reads input from the user (returns a string).
    *   `len()`: Returns the length (number of items) of an object (string, list, etc.).
    *   `type()`: Returns the type of an object.
    *   `int()`, `float()`, `str()`: Convert values between types.

## 4. Python Operators

Symbols that perform operations on values (operands).

*   **Arithmetic Operators:** `+` (addition), `-` (subtraction), `*` (multiplication), `/` (true division), `//` (floor division - rounds down to nearest whole number), `%` (modulo - remainder of division), `**` (exponentiation).
*   **Assignment Operators:** `=` (assign), `+=`, `-=`, `*=`, `/=`, `%=`, `**=`, `//= ` (shorthand for performing an operation and assigning the result, e.g., `x += 1` is equivalent to `x = x + 1`).
*   **Comparison (Relational) Operators:** `==` (equal to), `!=` (not equal to), `>` (greater than), `<` (less than), `>=` (greater than or equal to), `<=` (less than or equal to). Return `True` or `False`.
*   **Logical Operators:** `and` (True if both operands are true), `or` (True if at least one operand is true), `not` (True if operand is false, False if operand is true).
*   **Identity Operators:** `is` (True if both operands refer to the same object in memory), `is not` (True if operands refer to different objects).
*   **Membership Operators:** `in` (True if value is found in the sequence), `not in` (True if value is not found in the sequence).

## 5. Python Data Structures

Containers used to store collections of data.

*   **Lists:**
    *   Ordered, mutable (changeable), allow duplicate elements.
    *   Defined with square brackets `[]`: `my_list = [10, "apple", 20.5, 10]`
    *   Access by index: `my_list[1]` returns `"apple"`.
    *   Modify elements: `my_list[0] = 15`.
    *   Common methods: `append()`, `insert()`, `remove()`, `pop()`, `sort()`, `reverse()`, `index()`, `count()`, `len()`.
    *   Use cases: Storing collections where order matters and items might need to be changed, added, or removed.
*   **Tuples:**
    *   Ordered, immutable (unchangeable), allow duplicate elements.
    *   Defined with parentheses `()`: `my_tuple = (10, "apple", 20.5, 10)`
    *   Access by index: `my_tuple[1]` returns `"apple"`.
    *   Cannot modify elements after creation.
    *   Common methods: `count()`, `index()`, `len()`.
    *   Use cases: Storing collections that shouldn't change (e.g., coordinates, RGB colors), used as dictionary keys (since they are immutable).
*   **Dictionaries:**
    *   Unordered (in Python < 3.7, ordered in Python >= 3.7), mutable, store key-value pairs, keys must be unique and immutable.
    *   Defined with curly braces `{}`: `my_dict = {"name": "Alice", "age": 30, "city": "New York"}`
    *   Access values by key: `my_dict["age"]` returns `30`.
    *   Modify values: `my_dict["age"] = 31`.
    *   Add new pairs: `my_dict["email"] = "alice@example.com"`.
    *   Common methods: `keys()`, `values()`, `items()` (returns view objects), `get(key, default)` (safe access), `pop(key)`, `update()`, `len()`.
    *   Use cases: Storing data associated with unique identifiers, configuration settings, representing structured data (like JSON).
*   **Sets:**
    *   Unordered, mutable, do *not* allow duplicate elements.
    *   Defined with curly braces `{}` or `set()`: `my_set = {1, 2, 3, "hello", 2}` results in `{1, 2, 3, "hello"}`.
    *   Cannot access by index (unordered).
    *   Common methods: `add()`, `remove()` (raises error if not found), `discard()` (no error if not found), `pop()` (removes arbitrary element), `clear()`, `len()`.
    *   Set operations: `union (|)`, `intersection (&)`, `difference (-)`, `symmetric_difference (^)`.
    *   Use cases: Checking for membership efficiently, removing duplicates from a list (`list(set(my_list))`), performing mathematical set operations.

Choosing the right data structure is important for writing efficient and readable code.

## 6. Control Flow Statements

Direct the order of execution.

*   **`if` Statement:** Executes a block of code only if a condition is true.
    ```python
    age = 20
    if age >= 18:
        print("Adult")
    ```
*   **`if-else` Statement:** Executes one block if the condition is true, and another block if it's false.
    ```python
    age = 15 # Example value
    if age >= 18:
        print("Adult")
    else:
        print("Minor")
    ```
*   **`if-elif-else` Statement:** Checks multiple conditions in sequence.
    ```python
    score = 75
    if score >= 90:
        grade = "A"
    elif score >= 80:
        grade = "B"
    elif score >= 70:
        grade = "C"
    else:
        grade = "D"
    print(f"Grade: {grade}")
    ```
*   **`for` Loop:** Iterates over a sequence (list, tuple, dictionary, set, string) or other iterable object.
    ```python
    # Iterate over a list
    fruits = ["apple", "banana", "cherry"]
    for fruit in fruits:
        print(fruit)

    # Iterate using range
    for i in range(5): # 0, 1, 2, 3, 4
        print(i)
    ```
*   **`while` Loop:** Executes a block of code as long as a condition remains true.
    ```python
    count = 0
    while count < 3:
        print(f"Count is {count}")
        count += 1 # Important: update condition variable to avoid infinite loop
    ```
*   **Loop Control Statements:**
    *   `break`: Exits the current loop immediately.
    *   `continue`: Skips the rest of the current iteration and proceeds to the next one.
    *   `pass`: Acts as a placeholder; does nothing (useful when syntax requires a statement but no action is needed).

## 7. Functions

Named blocks of reusable code that perform a specific task.

*   **Defining Functions:** Uses the `def` keyword.
    ```python
    def greet(name): # 'name' is a parameter
        """This function greets the person passed in as a parameter."""
        print(f"Hello, {name}!")

    def add_numbers(x, y):
        """This function returns the sum of two numbers."""
        return x + y
    ```
*   **Calling Functions:** Use the function name followed by parentheses `()` containing arguments.
    ```python
    greet("Bob") # "Bob" is an argument
    sum_result = add_numbers(5, 3)
    print(sum_result) # Output: 8
    ```
*   **Parameters vs. Arguments:** Parameters are variables listed inside the parentheses in the function definition; arguments are the values sent to the function when it is called.
*   **Return Values:** The `return` statement exits a function and optionally sends a value back to the caller. If omitted, the function returns `None`.
*   **Scope:** Refers to the region of a program where a variable is accessible.
    *   **Local Scope:** Variables defined inside a function are local to that function and cannot be accessed outside it.
    *   **Global Scope:** Variables defined outside any function have global scope.
    *   `global` keyword: Used inside a function to modify a global variable (use sparingly).
*   **Default Parameter Values:** Assign default values in the definition.
    ```python
    def power(base, exponent=2):
        return base ** exponent
    print(power(3)) # Output: 9 (uses default exponent 2)
    print(power(3, 3)) # Output: 27
    ```
*   **Keyword Arguments:** Call functions specifying parameter names.
    ```python
    print(power(exponent=3, base=2)) # Output: 8
    ```
*   **Variable-Length Arguments:**
    *   `*args`: Collects extra positional arguments into a tuple. Used when a function needs to accept an arbitrary number of positional arguments.
        ```python
        def print_all(*args):
            for arg in args:
                print(arg)
        print_all(1, "hello", True) 
        ```
    *   `**kwargs`: Collects extra keyword arguments into a dictionary. Used when a function needs to accept an arbitrary number of keyword arguments.
        ```python
        def print_info(**kwargs):
            for key, value in kwargs.items():
                print(f"{key}: {value}")
        print_info(name="Alice", age=30, city="New York")
        ```
Functions are essential for organizing code, reducing repetition, and improving readability.

## 8. Basic Input/Output and File Handling

*   **User Input:** `input(prompt)` function. Always returns a string, so type conversion (`int()`, `float()`) is often needed.
    ```python
    name = input("Enter your name: ")
    age_str = input("Enter your age: ")
    try:
        age = int(age_str)
        print(f"Hello {name}, you are {age} years old.")
    except ValueError:
        print("Invalid age entered. Please enter a number.")
    ```
*   **Formatted Output (`print()`):**
    *   **f-Strings (Formatted String Literals - Recommended):** Embed expressions inside strings prefixed with `f`.
        ```python
        value = 42
        precision = 3
        print(f"The value is {value}.")
        print(f"Calculation: {value * 2}")
        print(f"PI with {precision} decimals: {3.1415926535:.{precision}f}") 
        ```
    *   `str.format()` method: Older style, still useful in some contexts.
        ```python
        print("The value is {} and the name is {}.".format(value, name))
        ```
    *   `%` operator: Oldest style (generally avoid for new code due to being less flexible and readable).
*   **File Handling:** Interacting with files on the computer.
    *   **Opening Files:** `open(filename, mode)` function. Returns a file object.
        *   `mode`: `'r'` (read - default), `'w'` (write - truncates file if exists, creates if not), `'a'` (append - adds to end of file, creates if not), `'r+'` (read and write), `'w+'` (write and read, truncates), `'a+'` (append and read). Add `'b'` for binary mode (e.g., `'rb'`, `'wb'`).
    *   **Best Practice: `with` statement:** Automatically closes the file even if errors occur. This is known as a context manager.
        ```python
        # Writing to a file
        try:
            with open("output.txt", "w") as f:
                f.write("This is the first line.\n")
                f.write("This is the second line.\n")
            print("Successfully wrote to output.txt")
        except IOError:
            print("Error: Could not write to file.")

        # Reading from a file
        try:
            with open("output.txt", "r") as f:
                # content = f.read() # Read entire file into a single string
                # lines = f.readlines() # Read all lines into a list of strings
                for line_number, line_content in enumerate(f, 1): # Iterate line by line (memory efficient for large files)
                    print(f"Line {line_number}: {line_content.strip()}") # .strip() removes leading/trailing whitespace including newline
        except FileNotFoundError:
            print("Error: output.txt not found.")
        except IOError:
            print("Error: Could not read from file.")
        ```
    *   **Common File Object Methods:** `read(size)`, `readline()`, `readlines()`, `write(string)`, `writelines(list_of_strings)`, `close()`, `seek(offset)`, `tell()`.

## 9. Introduction to Object-Oriented Programming (OOP) in Python

OOP is a programming paradigm based on the concept of "objects," which can contain data (attributes) and code (methods).

*   **Classes:** Blueprints for creating objects. Define attributes and methods that all objects of that class will have.
    ```python
    class Dog:
        # Class attribute (shared by all instances of the class)
        species = "Canis familiaris"

        # Constructor (__init__ method) - called when an object is created
        # 'self' refers to the instance being created
        def __init__(self, name, age, breed="Unknown"):
            # Instance attributes (specific to each instance/object)
            self.name = name  # Public attribute
            self.age = age    # Public attribute
            self._breed = breed # Protected attribute (by convention)
            self.__secret_trick = "Roll over" # Private attribute (name mangling)

        # Instance method (operates on an instance of the class)
        def bark(self):
            print(f"{self.name} says Woof!")

        def get_age_in_dog_years(self):
            return self.age * 7
        
        def get_breed(self):
            return self._breed

        def set_breed(self, new_breed):
            self._breed = new_breed
            
        def _perform_secret(self): # Protected method by convention
            print(f"{self.name} performs: {self.__secret_trick}")
            
        def reveal_trick(self): # Public method to access private-like behavior
            self._perform_secret()

    ```
*   **Objects (Instances):** Created from classes. Each object is an instance of its class.
    ```python
    my_dog = Dog("Buddy", 3, "Golden Retriever")
    another_dog = Dog("Lucy", 5) # Uses default breed "Unknown"

    print(f"{my_dog.name} is a {my_dog.get_breed()} and is {my_dog.age} years old.")
    my_dog.bark()       # Output: Buddy says Woof!
    print(f"{another_dog.name}'s species: {another_dog.species}") # Accessing class attribute
    print(f"{my_dog.name} is {my_dog.get_age_in_dog_years()} in dog years.")
    # print(my_dog.__secret_trick) # This would cause an AttributeError
    my_dog.reveal_trick() # Accesses the "private" behavior via a public method
    ```
*   **Core OOP Principles (Brief Introduction):**
    *   **Encapsulation:** Bundling data (attributes) and methods that operate on the data within a single unit (class). It often involves restricting direct access to some of an object's components (information hiding). Python uses naming conventions:
        *   `_single_underscore`: Suggests an attribute/method is for internal use (protected by convention).
        *   `__double_underscore`: Triggers name mangling (`_ClassName__attributeName`), making it harder (but not impossible) to access directly from outside. This is Python's way of supporting "private-like" attributes.
    *   **Inheritance:** Mechanism where a new class (subclass or derived class) inherits attributes and methods from an existing class (superclass or base class). Promotes code reuse and establishes an "is-a" relationship.
        ```python
        class ServiceDog(Dog): # ServiceDog inherits from Dog
            def __init__(self, name, age, breed, service_type):
                super().__init__(name, age, breed) # Call the parent class's constructor
                self.service_type = service_type

            def assist(self):
                print(f"{self.name} is performing a {self.service_type} task.")
            
            # Method Overriding
            def bark(self):
                print(f"{self.name} (a service dog) barks gently.")

        my_service_dog = ServiceDog("Guidey", 4, "Labrador", "Guide Assistance")
        my_service_dog.bark() # Calls overridden bark method
        my_service_dog.assist()
        print(f"{my_service_dog.name} is {my_service_dog.get_age_in_dog_years()} in dog years.")
        ```
    *   **Polymorphism:** ("Many forms") The ability of an object to take on many forms. Often manifested through method overriding (subclass providing its own implementation of a superclass method) or objects of different classes responding to the same method call (often referred to as "duck typing" in Python - "if it walks like a duck and quacks like a duck, it's a duck").
        ```python
        # Example of polymorphism (duck typing in Python)
        def pet_interaction(pet): # pet can be any object with bark or meow methods
            if hasattr(pet, 'bark'):
                pet.bark()
            elif hasattr(pet, 'meow'):
                pet.meow()

        class Cat:
            def __init__(self, name):
                self.name = name
            def meow(self):
                print(f"{self.name} says Meow")

        cat_object = Cat("Whiskers")
        dog_object = Dog("Rex", 2)

        pet_interaction(dog_object)  # Output: Rex says Woof!
        pet_interaction(cat_object)  # Output: Whiskers says Meow
        ```

## 10. Basic Error Handling (Try-Except)

Dealing with potential errors gracefully to prevent program crashes.
*   **`try` block:** Contains code that might raise an exception (error during execution).
*   **`except ExceptionType as e:` block:** Code that executes if an exception of `ExceptionType` occurs in the `try` block. `e` is an optional variable holding the exception object. Multiple `except` blocks can handle different exception types. A generic `except:` will catch any exception (use sparingly, better to catch specific exceptions).
*   **`else` block (optional):** Code that executes if *no exceptions* occur in the `try` block.
*   **`finally` block (optional):** Code that *always* executes, regardless of whether an exception occurred or not (often used for cleanup operations like closing files or network connections).

```python
try:
    numerator_str = input("Enter the numerator: ")
    denominator_str = input("Enter the denominator: ")
    
    numerator = int(numerator_str)
    denominator = int(denominator_str)
    
    result = numerator / denominator
    
except ValueError:
    print("Error: Invalid input. Please enter whole numbers.")
except ZeroDivisionError:
    print("Error: Cannot divide by zero.")
except Exception as general_error: # Catch any other unexpected errors
    print(f"An unexpected error occurred: {general_error}")
else:
    print(f"The result of {numerator} / {denominator} is: {result}")
finally:
    print("Calculation attempt finished.")
```

## 11. Conclusion & Next Steps

This module has laid the groundwork for programming in Python, covering fundamental concepts, syntax, data structures, control flow, functions, basic I/O, introductory OOP, and error handling. These are the essential building blocks you'll use to tackle more complex problems in computer science and cybersecurity.

The key to mastering programming is consistent practice. Experiment with the concepts learned by writing small programs, solving coding challenges, and gradually building up to more complex projects. Subsequent modules will build heavily on this foundation, introducing more advanced data structures, algorithms, software design principles, and specialized applications of Python in areas like networking, data analysis, and security scripting.

**Potential Activities/Exercises:**
*   Write a Python script that takes user input for two numbers and an operation (+, -, *, /) and prints the result. Include comprehensive error handling for invalid inputs and division by zero.
*   Create a simple class representing a `Book` with attributes like `title`, `author`, and `isbn`, and a method to display book details. Create a subclass `EBook` that inherits from `Book` and adds a `file_format` attribute.
*   Write a function that takes a list of numbers and returns a new list containing only the even numbers, using a list comprehension.
*   Read data from a text file, process it (e.g., count the frequency of each word), and write the results (word and its count) to a new CSV file.

**Suggested Readings/Resources:**
*   Official Python Tutorial (docs.python.org/3/tutorial/)
*   "Python Crash Course" by Eric Matthes (Excellent for beginners and practical projects)
*   "Automate the Boring Stuff with Python" by Al Sweigart (Focuses on practical scripting)
*   "Fluent Python" by Luciano Ramalho (More advanced, for deeper understanding of Python's features)
*   Online coding platforms (e.g., Codecademy, HackerRank, LeetCode, Edabit for practice problems)
*   Real Python (realpython.com) for tutorials and articles.
