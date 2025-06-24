# Module 3.2.CS: Data Structures & Algorithms I

**Level:** 3 (Professional - Specialization)
**Major:** Computer Science / Cybersecurity (CS)

**Estimated Content Length:** 20-25 A4 Pages

**Prerequisites:** Module 3.1.CS (Programming Fundamentals - Python Focus)

**Learning Objectives:**
*   Understand the concept of abstract data types (ADTs).
*   Analyze the time and space complexity of algorithms using Big O notation.
*   Implement and analyze fundamental linear data structures: arrays/lists, linked lists (singly, doubly), stacks, queues.
*   Implement and analyze fundamental non-linear data structures: trees (binary trees, binary search trees - BSTs), hash tables (dictionaries).
*   Understand and implement basic sorting algorithms (Bubble Sort, Selection Sort, Insertion Sort).
*   Understand and implement basic searching algorithms (Linear Search, Binary Search).
*   Introduce the concept of recursion and its application.

---

## 1. Introduction: Organizing Data and Solving Problems Efficiently

While Module 3.1.CS focused on the syntax and basic constructs of programming, this module delves into two fundamental pillars of computer science: Data Structures and Algorithms. Data structures are ways of organizing and storing data in a computer so that it can be accessed and modified efficiently. Algorithms, as previously defined, are step-by-step procedures for solving problems. The choice of data structure significantly impacts the efficiency of the algorithms that operate on that data. Understanding how to analyze the efficiency of algorithms is crucial for writing performant code, especially when dealing with large datasets or complex computations – a common scenario in both software development and cybersecurity analysis.

This module builds directly on your Python programming foundation. We will begin by introducing the concept of Abstract Data Types (ADTs) as mathematical models for data structures. A major focus will be on analyzing algorithm efficiency using Big O notation, providing a standardized way to describe how an algorithm's runtime or space requirements grow as the input size increases. You will learn to implement, use, and analyze the performance characteristics of fundamental linear data structures, including arrays (Python lists), linked lists (singly and doubly linked), stacks, and queues. We will then move to non-linear structures, exploring trees (specifically binary trees and binary search trees) and hash tables (the underlying concept for Python dictionaries). Alongside data structures, we will cover essential algorithms for searching (linear search, binary search) and sorting (bubble sort, selection sort, insertion sort), analyzing their respective time complexities. Finally, we will introduce recursion, a powerful programming technique where a function calls itself, and see how it can be applied to solve certain problems elegantly. Mastering these core data structures and algorithms is essential for any computer scientist or cybersecurity professional aiming to design efficient solutions and understand the performance implications of different approaches.

## 2. Algorithm Analysis: Complexity and Big O Notation

When solving a problem, there are often multiple algorithms that can achieve the desired result. How do we compare them? Algorithm analysis provides a way to measure the efficiency of an algorithm, typically in terms of time (how long it takes) and space (how much memory it uses), independent of specific hardware or programming language implementations.

**A. Complexity:**
*   **Time Complexity:** Measures the amount of time an algorithm takes to run as a function of the size of the input (denoted as `n`). We usually focus on the *growth rate* of the runtime as `n` becomes large.
*   **Space Complexity:** Measures the amount of memory space an algorithm requires as a function of the size of the input `n`. This includes both the space for the input data and any auxiliary space (extra space) used by the algorithm during execution.

**B. Asymptotic Notation:**
We use asymptotic notation to describe the limiting behavior of a function when the argument tends towards a particular value or infinity. It focuses on the dominant term in the function and ignores constant factors and lower-order terms, as these become insignificant for large input sizes.

*   **Big O Notation (O): Upper Bound**
    *   **Definition:** Provides an asymptotic *upper bound* on the growth rate of a function. We say `f(n) = O(g(n))` (read as "f of n is Big O of g of n") if there exist positive constants `c` and `n₀` such that `0 ≤ f(n) ≤ c * g(n)` for all `n ≥ n₀`.
    *   **Purpose:** Describes the *worst-case* time or space complexity. It tells us that the algorithm will not perform worse than this bound for large inputs.
    *   **Common Big O Complexities (from fastest/most efficient to slowest/least efficient growth):**
        *   **O(1) - Constant Time:** Runtime/space is constant and does not depend on the input size `n`. (e.g., accessing an element in an array by index, pushing/popping from a stack implemented with an array).
        *   **O(log n) - Logarithmic Time:** Runtime/space grows logarithmically with `n`. Typically seen in algorithms that repeatedly divide the problem size in half (e.g., binary search in a sorted array).
        *   **O(n) - Linear Time:** Runtime/space grows linearly with `n`. (e.g., iterating through all elements in a list once, linear search).
        *   **O(n log n) - Log-Linear (or Linearithmic) Time:** Runtime grows by `n` multiplied by `log n`. Common in efficient sorting algorithms (e.g., Merge Sort, Heap Sort, Quick Sort average case).
        *   **O(n²) - Quadratic Time:** Runtime/space grows quadratically with `n`. Often involves nested loops where each loop iterates `n` times (e.g., Bubble Sort, Selection Sort, Insertion Sort worst case, comparing all pairs in a list).
        *   **O(n³) - Cubic Time:** Runtime/space grows cubically with `n`. (e.g., algorithms involving triple nested loops).
        *   **O(2ⁿ) - Exponential Time:** Runtime/space grows exponentially with `n`. Often seen in brute-force algorithms exploring all possible subsets or permutations (e.g., finding all subsets of a set, some recursive solutions without memoization). Generally considered intractable for even moderately large `n`.
        *   **O(n!) - Factorial Time:** Runtime/space grows factorially with `n`. Extremely slow growth, typically for problems involving permutations (e.g., solving the traveling salesman problem via brute-force permutation check).

*   **Big Omega (Ω): Lower Bound**
    *   **Definition:** Provides an asymptotic *lower bound*. `f(n) = Ω(g(n))` if there exist positive constants `c` and `n₀` such that `0 ≤ c * g(n) ≤ f(n)` for all `n ≥ n₀`.
    *   **Purpose:** Describes the *best-case* complexity.
*   **Big Theta (Θ): Tight Bound**
    *   **Definition:** Provides an asymptotic *tight bound*. `f(n) = Θ(g(n))` if `f(n) = O(g(n))` AND `f(n) = Ω(g(n))`. This means `f(n)` grows at the same rate as `g(n)`.
    *   **Purpose:** Often used to describe the average-case complexity or when the worst-case and best-case are the same.

**C. Analyzing Code Complexity:**
*   **Sequence of statements:** The sum of their complexities. If each is O(1), then a sequence is O(1).
*   **Loops:** Complexity of the loop body multiplied by the number of iterations. A simple `for` loop from 0 to `n-1` is typically O(n) if the body is O(1).
*   **Nested Loops:** Multiply the complexities of the inner and outer loops. Two nested loops, each iterating `n` times, often result in O(n²).
*   **Conditionals (`if`/`else`):** Take the complexity of the *worst-case* branch plus the complexity of the condition itself.
*   **Function Calls:** Add the complexity of the function call. If a function is called inside a loop, multiply its complexity by the number of iterations.

Understanding Big O notation is crucial for selecting efficient algorithms and predicting performance as data scales.

## 3. Abstract Data Types (ADTs)

An Abstract Data Type (ADT) is a mathematical model for a data type, defined by its behavior (the set of operations that can be performed on it) and its semantics (what these operations mean), from the point of view of a user. An ADT specifies *what* operations are supported but not *how* these operations are implemented or how the data is organized in memory.

*   **Example: Stack ADT**
    *   *Data:* A collection of items with a LIFO (Last-In, First-Out) discipline.
    *   *Operations:*
        *   `push(item)`: Adds an item to the top of the stack.
        *   `pop()`: Removes and returns the item from the top of the stack.
        *   `peek()` (or `top()`): Returns the top item without removing it.
        *   `isEmpty()`: Returns true if the stack is empty, false otherwise.
        *   `size()`: Returns the number of items in the stack.
*   **Example: Queue ADT**
    *   *Data:* A collection of items with a FIFO (First-In, First-Out) discipline.
    *   *Operations:*
        *   `enqueue(item)`: Adds an item to the rear of the queue.
        *   `dequeue()`: Removes and returns the item from the front of the queue.
        *   `peek()` (or `front()`): Returns the front item without removing it.
        *   `isEmpty()`: Returns true if the queue is empty, false otherwise.
        *   `size()`: Returns the number of items in the queue.

**ADT vs. Data Structure:**
*   **ADT:** The logical description or interface (the "what"). It defines a set of values and a set of operations on those values.
*   **Data Structure:** The concrete implementation of an ADT (the "how"). It's a specific way of organizing data in memory to support the ADT's operations efficiently. For example, a Stack ADT can be implemented using a Python list (dynamic array) or a linked list.

ADTs allow us to reason about data types at a higher level of abstraction, promoting modularity and separating the interface from the implementation details.

## 4. Linear Data Structures

Linear data structures arrange data elements in a sequential or linear manner, where each element is attached to its previous and next adjacent elements.

**A. Arrays / Python Lists:**
*   **Description:** An array is a collection of items stored at contiguous memory locations (in traditional, static arrays). Python `list` objects are dynamic arrays, meaning they can grow or shrink in size.
*   **Implementation (Python `list`):** Built-in.
*   **Complexity (Python `list` - Amortized):**
    *   Access by index (`my_list[i]`): O(1)
    *   Update by index (`my_list[i] = val`): O(1)
    *   Append (`append(item)`): O(1) (amortized - resizing to O(n) happens occasionally but is averaged out)
    *   Insert at arbitrary position (`insert(i, item)`): O(n) (elements after `i` must be shifted)
    *   Delete at arbitrary position (`pop(i)`, `remove(value)`): O(n) (elements after `i` must be shifted)
    *   Search (value using `in` operator or `index()` method): O(n) (linear scan)
    *   Get Length (`len(my_list)`): O(1)
*   **Pros:** Fast random access by index, simple to use in Python.
*   **Cons:** Slow insertion/deletion in the middle due to element shifting.

**B. Linked Lists:**
*   **Description:** A collection of nodes where each node contains data and a reference (pointer) to the next node (and possibly the previous node) in the sequence. Nodes are not necessarily stored contiguously in memory.
*   **Types:**
    *   *Singly Linked List:* Each node has data and a pointer to the `next` node. The list has a `head` pointer to the first node.
    *   *Doubly Linked List:* Each node has data, a pointer to the `next` node, and a pointer to the `previous` node. This allows for bidirectional traversal.
*   **Implementation (Python - requires custom classes):**
    ```python
    class Node:
        def __init__(self, data=None):
            self.data = data
            self.next = None

    class SinglyLinkedList:
        def __init__(self):
            self.head = None
        # ... methods for insert, delete, search, display ...
    ```
*   **Complexity (Singly Linked List, assuming head pointer):**
    *   Access by index/Search (value): O(n) (must traverse from the head)
    *   Insertion at Head: O(1)
    *   Deletion at Head: O(1)
    *   Insertion at Tail: O(n) (must traverse to find the last node, unless a tail pointer is maintained, then O(1))
    *   Deletion at Tail: O(n) (must traverse to find the second to last node)
    *   Insertion/Deletion after a given node (if node reference is known): O(1)
*   **Pros:** Efficient insertion/deletion at the beginning (and end if tail pointer maintained), dynamic size without resizing overhead of arrays.
*   **Cons:** Slow random access and search by index (requires traversal), requires extra memory for pointers.

**C. Stacks (LIFO - Last-In, First-Out):**
*   **ADT Operations:** `push(item)`, `pop()`, `peek()`, `isEmpty()`, `size()`.
*   **Implementations:**
    *   **Using Python List:**
        *   `push(item)`: `my_stack.append(item)` (O(1) amortized)
        *   `pop()`: `my_stack.pop()` (O(1))
        *   `peek()`: `my_stack[-1]` (O(1))
        *   `isEmpty()`: `len(my_stack) == 0` (O(1))
    *   **Using Linked List:** Push and pop operations occur at the head of the list (O(1)).
*   **Use Cases:** Function call management (call stack), undo mechanisms in software, parsing expressions (e.g., checking for balanced parentheses), depth-first search in graphs.

**D. Queues (FIFO - First-In, First-Out):**
*   **ADT Operations:** `enqueue(item)`, `dequeue()`, `peek()`, `isEmpty()`, `size()`.
*   **Implementations:**
    *   **Using Python List (Inefficient for dequeue):**
        *   `enqueue(item)`: `my_queue.append(item)` (O(1) amortized)
        *   `dequeue()`: `my_queue.pop(0)` (O(n) due to shifting remaining elements) - *Not recommended for frequent dequeues.*
    *   **Using `collections.deque` (Double-Ended Queue - Recommended in Python):**
        *   `enqueue(item)`: `my_deque.append(item)` (O(1))
        *   `dequeue()`: `my_deque.popleft()` (O(1))
        *   `peek()`: `my_deque[0]` (O(1))
    *   **Using Linked List:** Enqueue at the tail and dequeue from the head (requires maintaining both head and tail pointers for O(1) enqueue).
*   **Use Cases:** Task scheduling (e.g., print queues, CPU scheduling), breadth-first search in graphs, handling requests in web servers, message queuing systems.

## 5. Non-Linear Data Structures

Data elements are not arranged sequentially; relationships can be hierarchical or network-like.

**A. Trees:**
*   **Description:** A hierarchical data structure consisting of nodes connected by edges. Key properties:
    *   One node is designated as the **root**.
    *   Every node (except the root) has exactly one **parent**.
    *   A node can have zero or more **children**.
    *   Nodes with no children are called **leaf nodes**.
    *   Nodes with the same parent are **siblings**.
    *   A **path** is a sequence of nodes from an ancestor to a descendant.
    *   The **depth** of a node is the length of the path from the root to the node. The **height** of a tree is the length of the longest path from the root to a leaf.
*   **Binary Tree:** A tree in which each node has at most two children, referred to as the left child and the right child.
*   **Binary Search Tree (BST):** A binary tree with a specific ordering property: for any given node `N`:
    *   All keys in the left subtree of `N` are less than `N.key`.
    *   All keys in the right subtree of `N` are greater than `N.key`.
    *   Both left and right subtrees must also be binary search trees.
*   **Implementation (Python - requires custom classes for nodes):**
    ```python
    class TreeNode:
        def __init__(self, key):
            self.key = key
            self.left = None
            self.right = None
    # Methods for insert, search, delete, traversals (inorder, preorder, postorder)
    ```
*   **Complexity (BST - Average Case, assuming a relatively balanced tree):**
    *   Search(key): O(log n)
    *   Insert(key): O(log n)
    *   Delete(key): O(log n)
*   **Complexity (BST - Worst Case, if the tree becomes skewed/unbalanced, e.g., like a linked list):**
    *   Search, Insert, Delete: O(n)
*   **Tree Traversal Algorithms:**
    *   *Inorder Traversal (Left, Root, Right):* Visits nodes in ascending order for a BST.
    *   *Preorder Traversal (Root, Left, Right):* Useful for copying trees.
    *   *Postorder Traversal (Left, Right, Root):* Useful for deleting trees.
*   **Use Cases (BSTs):** Implementing dynamic sets, symbol tables (like dictionaries), efficient searching, sorting (Tree Sort), data indexing in databases. Self-balancing BSTs (e.g., AVL trees, Red-Black trees) guarantee O(log n) performance by rebalancing after insertions/deletions, but are more complex.

**B. Hash Tables (Implemented as Dictionaries in Python):**
*   **Description:** A data structure that maps keys to values using a **hash function**. The hash function computes an integer index (or "bucket") in an underlying array where the value associated with the key should be stored.
*   **Hash Function:** A function that takes a key as input and returns an integer hash code. A good hash function should:
    *   Be deterministic (same key always produces same hash).
    *   Distribute keys uniformly across the available buckets to minimize collisions.
    *   Be efficient to compute.
*   **Collisions:** Occur when two different keys hash to the same index. Strategies to handle collisions are essential:
    *   **Separate Chaining (Open Hashing):** Each bucket in the hash table points to a linked list (or other data structure) of all key-value pairs that hash to that index.
    *   **Open Addressing (Closed Hashing):** If a bucket is full upon insertion, the algorithm probes for the next available slot in the table according to a defined sequence (e.g., linear probing, quadratic probing, double hashing).
*   **Implementation (Python `dict`):** Python's built-in dictionary type is a highly optimized hash table implementation.
*   **Complexity (Average Case, assuming good hash function and collision resolution):**
    *   Insert(key, value): O(1)
    *   Delete(key): O(1)
    *   Search(key): O(1)
*   **Complexity (Worst Case - e.g., all keys hash to the same bucket, or frequent resizing):**
    *   Insert, Delete, Search: O(n)
*   **Load Factor:** Ratio of the number of stored items to the number of buckets. If the load factor gets too high, the probability of collisions increases, and the table may need to be resized (rehashed), which is an O(n) operation.
*   **Pros:** Extremely fast average time complexity for search, insert, and delete operations.
*   **Cons:** Generally unordered (though Python dictionaries maintain insertion order from Python 3.7+). Worst-case performance can be O(n). Performance depends heavily on a good hash function and effective collision resolution.
*   **Use Cases:** Implementing dictionaries/maps, database indexing, caching, symbol tables in compilers, efficient lookups.

## 6. Searching Algorithms

Algorithms for finding a specific element (target) within a data structure.

**A. Linear Search:**
*   **Description:** Sequentially checks each element in a list or array until the target element is found or the end of the collection is reached.
*   **Data Structure:** Works on any sequence (sorted or unsorted lists/arrays).
*   **Algorithm:**
    1. Iterate through the collection from the first element to the last.
    2. In each iteration, compare the current element with the target value.
    3. If a match is found, return the index (or true).
    4. If the end of the collection is reached without finding the target, return not found (or false).
*   **Complexity:**
    *   Time: O(n) in the worst case (target is last or not present) and average case. O(1) in the best case (target is the first element).
    *   Space: O(1) (iterative version).
*   **Use Case:** Simple to implement, suitable for small or unsorted collections.

**B. Binary Search:**
*   **Description:** An efficient algorithm for finding a target element in a **sorted** list or array. It works by repeatedly dividing the search interval in half.
*   **Data Structure:** Requires a sorted array/list.
*   **Algorithm (Iterative):**
    1. Initialize `low = 0` and `high = length_of_list - 1`.
    2. While `low <= high`:
        a. Calculate `mid = (low + high) // 2`.
        b. If `list[mid] == target`, the element is found; return `mid`.
        c. If `list[mid] < target`, the target must be in the right half; set `low = mid + 1`.
        d. Else (if `list[mid] > target`), the target must be in the left half; set `high = mid - 1`.
    3. If the loop finishes, the target is not in the list; return not found (e.g., -1).
*   **Complexity:**
    *   Time: O(log n) in the worst and average cases, because the search space is halved in each iteration. O(1) in the best case (target is the middle element).
    *   Space: O(1) for the iterative version. O(log n) for a typical recursive version due to the call stack depth.
*   **Use Case:** Very efficient for searching in large sorted arrays.

## 7. Basic Sorting Algorithms

Algorithms for arranging elements of a collection in a specific order (e.g., ascending or descending).

**A. Bubble Sort:**
*   **Description:** Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The largest (or smallest, depending on sort order) unsorted elements "bubble" to their correct position at the end of the list with each pass.
*   **Algorithm:**
    1. Iterate `n-1` times (outer loop for passes).
    2. In each pass, iterate from the first element to the `n-1-pass_number`-th element (inner loop for comparisons).
    3. Compare adjacent elements. If they are in the wrong order, swap them.
    4. An optimization: if no swaps occur during a pass, the list is sorted, and the algorithm can terminate early.
*   **Complexity:**
    *   Time: O(n²) in the worst case (reverse-sorted list) and average case. O(n) in the best case (already sorted, with optimization).
    *   Space: O(1) (in-place sort).
*   **Use Case:** Simple to understand and implement, but very inefficient for large lists. Mostly educational.

**B. Selection Sort:**
*   **Description:** Repeatedly finds the minimum (or maximum) element from the unsorted part of the list and puts it at the beginning (or end) of the sorted part.
*   **Algorithm:**
    1. Iterate from the first element to the second-to-last element (outer loop, `i`). This `i` marks the beginning of the unsorted portion.
    2. In each iteration, assume the element at `i` is the minimum (or maximum).
    3. Iterate from `i+1` to the end of the list (inner loop, `j`) to find the actual minimum (or maximum) element in the unsorted portion.
    4. If a smaller (or larger) element is found, update the index of the minimum (or maximum).
    5. After the inner loop, swap the element at `i` with the element at the found minimum (or maximum) index.
*   **Complexity:**
    *   Time: O(n²) in all cases (worst, average, best) because it always makes `n-1` passes and `n(n-1)/2` comparisons.
    *   Space: O(1) (in-place sort).
*   **Use Case:** Simple, performs fewer swaps than Bubble Sort, but still inefficient for large lists.

**C. Insertion Sort:**
*   **Description:** Builds the final sorted list one item at a time. It iterates through the input elements and, for each element, "inserts" it into its correct position in the already sorted part of the list (which is initially just the first element).
*   **Algorithm:**
    1. Iterate from the second element (`i=1`) to the end of the list.
    2. Store the current element (`key = list[i]`) in a temporary variable.
    3. Compare `key` with the elements in the sorted portion (to its left, `j = i-1`).
    4. Shift elements in the sorted portion that are greater than `key` one position to the right to make space.
    5. Insert `key` into its correct position.
*   **Complexity:**
    *   Time: O(n²) in the worst case (reverse-sorted list) and average case. O(n) in the best case (already sorted list).
    *   Space: O(1) (in-place sort).
*   **Use Case:** Efficient for small lists or lists that are already partially sorted (adaptive). Often used as a subroutine in more complex sorting algorithms like Timsort (Python's default sort).

More advanced and efficient sorting algorithms like Merge Sort, Quick Sort, and Heap Sort (typically O(n log n)) will be covered in later, more advanced algorithm modules.

## 8. Introduction to Recursion

Recursion is a powerful programming technique where a function calls itself, directly or indirectly, to solve a problem. A recursive solution breaks a problem down into smaller, self-similar subproblems.

**Key Components of a Recursive Function:**
1.  **Base Case(s):** One or more simple cases of the problem that can be solved directly without further recursion. This is crucial for stopping the recursion and preventing an infinite loop.
2.  **Recursive Step (Recursive Call):** The function calls itself with a modified input that moves the problem closer to a base case. The solution to the original problem is built up from the solutions of these smaller subproblems.

**Example: Factorial Calculation**
The factorial of a non-negative integer `n`, denoted by `n!`, is the product of all positive integers less than or equal to `n`.
*   `0! = 1` (Base Case)
*   `n! = n * (n-1)!` for `n > 0` (Recursive Step)

```python
def factorial_recursive(n):
    # Base case
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    elif n == 0:
        return 1
    # Recursive step
    else:
        return n * factorial_recursive(n - 1)

# Example usage
print(f"5! = {factorial_recursive(5)}")  # Output: 5! = 120
# print(factorial_recursive(-1)) # Would raise ValueError
```

**How Recursion Works (Call Stack):**
Each time a function is called (including recursive calls), a new frame is added to the program's call stack. This frame stores local variables, parameters, and the return address for that specific call. When a function returns, its frame is popped off the stack. In deep recursion, the call stack can grow large, potentially leading to a stack overflow error if the maximum recursion depth is exceeded.

**Pros of Recursion:**
*   **Elegance and Readability:** Can lead to very clean and intuitive solutions for problems that are naturally recursive (e.g., tree traversals, many divide-and-conquer algorithms like Merge Sort).
*   **Problem Decomposition:** Naturally reflects a divide-and-conquer approach to problem-solving.

**Cons of Recursion:**
*   **Efficiency:** Can be less efficient than iterative solutions due to the overhead of function calls (creating stack frames, passing parameters).
*   **Stack Overflow Risk:** Deep recursion can exhaust the call stack memory.
*   **Debugging:** Tracing recursive calls can sometimes be more complex than debugging iterative code.

Many recursive solutions can be converted to equivalent iterative solutions using loops and often an explicit stack data structure to simulate the call stack.

## 9. Conclusion & Next Steps

This module has introduced fundamental data structures (arrays/lists, linked lists, stacks, queues, trees, hash tables) and algorithms (searching, basic sorting, recursion), along with the crucial concept of algorithm analysis using Big O notation. Understanding these concepts is essential for writing efficient, scalable, and effective code in any area of computer science or cybersecurity.

The choice of data structure and algorithm can have a profound impact on a program's performance, especially as data sizes grow. As you continue your studies, you will encounter these concepts repeatedly and build upon them to tackle more complex problems. The key to mastery is consistent practice: implement these structures and algorithms yourself, analyze their performance characteristics (both theoretically and empirically), and consider their trade-offs in different scenarios.

**Potential Activities/Exercises:**
*   Implement a Stack and a Queue using Python lists, ensuring all ADT operations are covered. Test their LIFO and FIFO behavior.
*   Write a Python function to perform an iterative binary search on a sorted list.
*   Implement Bubble Sort or Insertion Sort and test it on small lists. Compare its performance (e.g., using `time` module) with Python's built-in `sort()` method for larger lists.
*   Write a recursive Python function to calculate the sum of numbers from 1 to `n`. Then, write an iterative version of the same function.
*   Implement a basic Binary Search Tree in Python with `insert` and `inorder_traversal` methods.

**Suggested Readings/Resources:**
*   "Problem Solving with Algorithms and Data Structures using Python" by Bradley N. Miller and David L. Ranum (Excellent interactive online textbook).
*   "Grokking Algorithms: An Illustrated Guide for Programmers and Other Curious People" by Aditya Bhargava (Very accessible introduction).
*   "Introduction to Algorithms" by Cormen, Leiserson, Rivest, and Stein (CLRS) - (A comprehensive and classic reference, more advanced).
*   Python official documentation on built-in data structures and the `collections` module.
*   Online coding platforms for practicing data structures and algorithms problems (e.g., GeeksforGeeks, LeetCode, HackerRank, Codewars).
