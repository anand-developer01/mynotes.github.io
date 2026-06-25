const isHighlighted = 'java-notes'
const Links1 = 'java-notes'
const Links2 = 'spring-boot-notes'
const Links3 = 'java-practice'
const Links4 = 'vue3-projects'

const javaData = {
  javaNote: [
    {
      id: 1,
      title: "class",
      note: [
        {
          text1: `
          <b> class rule </b>
          This error is a classic Java "Rule of Law": In a single <b>.java</b> file, you can only have ONE <b>public</b> class, and its name must match the filename exactly.`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Difference between \"\" and '' in Java",
      note: [
        {
          text1: `"" → String
String name = "Anand";

Key Points
Represents a String (sequence of characters)
Type: String
Can store multiple characters
Used with methods like:
length()
substring()
startsWith()


'' → char
char ch = 'A';
✅ Key Points
Represents a single character
Type: char
Can store only one character
Cannot store multiple characters ❌


Common Mistakes
❌ Wrong
char ch = 'AB';   // ❌ ERROR (more than one character)
❌ Wrong
String s = 'A';   // ❌ ERROR (char used instead of String)`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      section: 'Java Collections Framework',
      title: "Java Collections Framework",
      note: [
        {
          text1: `The <b>Java Collections Framework (JCF)</b> is a <b>set of interfaces, classes, and algorithms</b> used to <b>store, manipulate, and process groups of objects</b> efficiently.
          
          Java Collection Framework (JCF) is a set of classes and interfaces that provide ready-made data structures to store and manipulate groups of objects efficiently.

Java provides collection interfaces like List, Set, Map, and Queue, with ready-made classes such as ArrayList, HashSet, HashMap, and PriorityQueue, so you don’t have to write data-handling code from scratch.
The Collection Framework improves productivity by making code more reusable, maintainable and faster to develop.

          It provides ready-made data structures like List, Set, Queue, and Map.
          
        <b>Features of Java Collection Framework</b>
Provides ready-to-use data structures (e.g., ArrayList, HashSet, HashMap).9
Offers interfaces (Collection, List, Set, Map, Queue) to define standard behaviors.
Supports dynamic resizing, unlike arrays with a fixed size.
Includes algorithms (sorting, searching, iteration) via the Collections utility class.
Improves code reusability and performance by reducing boilerplate code.

<b>Collection Interface in Java</b>
The Collection interface is the root of the Java Collections Framework, defined in the java.util package. It represents a group of individual objects as a single unit and provides basic operations for working with them.

<b>Dynamic in Nature</b>: Collections can automatically grow or shrink in size, unlike arrays that have a fixed length.
<b>Stores Homogeneous and Heterogeneous Objects</b>: Can hold same-type or different-type elements based on implementation.
<b>Easy to Use</b>: Provides convenient methods such as add(), remove(), and clear() to manage elements effortlessly.
<b>Efficient Traversal</b>: Allows easy access and processing of elements using loops or iterators.

<b>Collection Interface Declaration</b>
<b>public interface Collection&lt;E&gt; extends Iterable&lt;E&gt;</b>
Here, E represents the type of elements stored in the collection.

Object Creation of Collection Interface
Collection &lt; String&gt; fruits = new ArrayList&lt;&gt;();

In Java, we cannot create an object of an interface directly. Instead, we create an object of the ArrayList class that implements the interface and assign it to the interface reference.`,
          code1: `// ----------- Ex : 1 ---------
          // We cannot instantiate interfaces directly in Java.
// We create an object of a class that implements the interface and assign it to the interface reference.


import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;


public class Demo {
    public static void main(String[] args) {

        Collection&lt; String&gt; fruits = new ArrayList&lt;&gt;();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Mango");

        // Iterating using for-each
        for (String fruit : fruits) {
            System.out.println(fruit);
        }

        // Iterating using Iterator
        Iterator<String> it = fruits.iterator();
        while (it.hasNext()) {
            System.out.println(it.next());
        }

    }
}

//Output:
Apple
Banana
Mango
Apple
Banana
Mango

`
        }
      ]
    },
    {
      id: 1,
      title: "Sub-Interfaces of Collection Interface",
      note: [
        {
          text1: `The Collection interface is the root of most Java collections. Its main sub-interfaces are: 
          
          <b>1. List</b>
List represents an ordered collection that allows duplicates.
Elements can be accessed by index.
<b>Implementing Classes</b>: ArrayList, LinkedList, Vector, Stack.
<b>Declaration</b>:
public interface List<E> extends Collection<E>

<b>2. Set</b>
Set represents an unordered collection with no duplicate elements.
<b>Implementing Classes</b>: HashSet, TreeSet, LinkedHashSet, EnumSet, CopyOnWriteArraySet.
<b>Declaration</b>:
public interface Set<E> extends Collection<E>

<b>3. SortedSet</b>
SortedSet extends Set and maintains elements in a sorted order.
Provides methods to handle range-based operations.
<b>Implementing Class</b>: TreeSet.
<b>Declaration</b>:
public interface SortedSet<E> extends Set<E>

<b>4. NavigableSet</b>
NavigableSet extends SortedSet and provides navigation methods like lower(), floor(), ceiling(), and higher().
<b>Implementing Class</b>: TreeSet.
<b>Declaration</b>:
public interface NavigableSet<E> extends SortedSet<E>

<b>5. Queue</b>
Queue represents a collection following FIFO (First-In-First-Out) order.
<b>Implementing Classes</b>: PriorityQueue, Deque, ArrayDeque, LinkedList
<b>Declaration</b>:
public interface Queue<E> extends Collection<E>

5. Deque
Deque extends Queue and allows elements to be added/removed from both ends.
<b>Implementing Classes</b>: ArrayDeque, LinkedList.
<b>Declaration</b>:
public interface Deque<E> extends Queue<E>

Collection
 ├── List
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;├── ArrayList
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;├── LinkedList
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;├── Vector
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;└── Stack
 ├── Set
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;├── HashSet
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;├── LinkedHashSet
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;├── TreeSet
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;├── EnumSet
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;└── CopyOnWriteArraySet
 │
 ├── SortedSet
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;└── TreeSet
 │
 ├── NavigableSet
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;└── TreeSet
 │
 ├── Queue
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;├── PriorityQueue
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;├── ArrayDeque
 │     &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;└── LinkedList
 │
 └── Deque
       &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;├── ArrayDeque
       &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;└── LinkedList


       <table border="1" cellpadding="8" cellspacing="0">
  <tr>
    <th>Sub-Interface</th>
    <th>Description</th>
    <th>Implementing Classes</th>
    <th>Declaration</th>
  </tr>
  
  <tr>
    <td>List</td>
    <td>Ordered collection, allows duplicates, access by index</td>
    <td>ArrayList, LinkedList, Vector, Stack</td>
    <td>public interface List&lt;E&gt; extends Collection&lt;E&gt;</td>
  </tr>
  
  <tr>
    <td>Set</td>
    <td>Unordered collection, no duplicates</td>
    <td>HashSet, TreeSet, LinkedHashSet, EnumSet, CopyOnWriteArraySet</td>
    <td>public interface Set&lt;E&gt; extends Collection&lt;E&gt;</td>
  </tr>
  
  <tr>
    <td>SortedSet</td>
    <td>Extends Set, maintains elements in sorted order, supports range operations</td>
    <td>TreeSet</td>
    <td>public interface SortedSet&lt;E&gt; extends Set&lt;E&gt;</td>
  </tr>
  
  <tr>
    <td>NavigableSet</td>
    <td>Extends SortedSet, provides navigation methods: lower(), floor(), ceiling(), higher()</td>
    <td>TreeSet</td>
    <td>public interface NavigableSet&lt;E&gt; extends SortedSet&lt;E&gt;</td>
  </tr>
  
  <tr>
    <td>Queue</td>
    <td>Collection following FIFO (First-In-First-Out)</td>
    <td>PriorityQueue, Deque, ArrayDeque, LinkedList</td>
    <td>public interface Queue&lt;E&gt; extends Collection&lt;E&gt;</td>
  </tr>
  
  <tr>
    <td>Deque</td>
    <td>Extends Queue, allows insertion/removal from both ends</td>
    <td>ArrayDeque, LinkedList</td>
    <td>public interface Deque&lt;E&gt; extends Queue&lt;E&gt;</td>
  </tr>
</table>

`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "List",
      note: [
        {
          text1: `In Java, a List is a fundamental interface in the <b>java.util</b> package that represents an <b>ordered collection</b> of elements. Unlike a Set, a List allows <b>duplicate elements</b> and provides precise control over where each element is inserted. You can access elements by their integer index (position).

          <b>Core Characteristics</b>
    <b>Ordered</b>: Elements maintain the insertion order.
    <b>Index-based</b>: You can access, insert, or remove elements at a specific index.
    <b>Duplicates Allowed</b>: You can store the same object multiple times.
    <b>Dynamic Size</b>: Lists automatically resize themselves as you add or remove elements.
          
    <b>Common Implementations</b>
The most frequently used implementations of the <b>List</b> interface are <b>ArrayList</b> and <b>LinkedList</b>.

<b>List is an Interface</b>
<b>List</b> is not a class.
<b>public interface List&lt;E&gt; extends Collection&lt;E&gt; </b>
Since it's an interface, we cannot create an object directly.

❌ Invalid
List&lt;String&gt; list = new List&lt;&gt;();
✅ Valid
List&lt;String&gt; list = new ArrayList&lt;&gt;();


<b>Why Use List Instead of Array?</b>
<b>Array</b>
String[] names = new String[3];
<b>Problems</b>:
-> Fixed size
-> Cannot grow dynamically

<b>List</b>
List&lt;String&gt; names = new ArrayList&lt;&gt;();
<b>Advantages</b>:
-> Dynamic size
-> Many built-in methods
-> Easy insertion and deletion0

<b>Common Implementations of List</b>
ArrayList
LinkedList
Vector
Stack

<b>ArrayList</b>
List&lt;String&gt; list = new ArrayList&lt;&gt;();
Uses dynamic array internally
Fast retrieval
Slow insertion/deletion in the middle

<b>LinkedList</b>
List&lt;String&gt; list = new LinkedList&lt;&gt;();
Uses doubly linked list
Fast insertion/deletion
Slow random access

<b>Key Methods to Know</b>
    <b>add(E e)</b>: Appends an element to the end.
    <b>get(int index)</b>: Returns the element at the specified position.
    <b>remove(int index) / remove(Object o)</b>: Removes the element.
    <b>size()</b>: Returns the number of elements.
    <b>contains(Object o)</b>: Returns true if the list contains the element.
    <b>clear()</b>: Removes all elements from the list.

    <b>Important Considerations</b>
    <b>Generics</b>: Always use Generics (e.g., <b>List&lt;String&gt;</b>) to ensure type safety and avoid <b>ClassCastException</b> at runtime.

    <b>Thread Safety</b>: The standard implementations (<b>ArrayList, LinkedList</b>) are not thread-safe. If you need a list for concurrent environments, use <b>CopyOnWriteArrayList</b> or wrap your list using <b>Collections.synchronizedList()</b>.

<b>ArrayList is NOT Thread-Safe</b>

If multiple threads modify an <b>ArrayList</b> simultaneously, you may get:
-> Data inconsistency
-> Race conditions
-> ConcurrentModificationException

Example:
List&lt;String&gt; list = new ArrayList&lt;&gt;();

Thread t1 = new Thread(() -> list.add("A"));
Thread t2 = new Thread(() -> list.add("B"));

t1.start();
t2.start();
The result is unpredictable because <b>ArrayList</b> does not synchronize access.

<b>Option 1: Collections.synchronizedList()</b>
List&lt;String&gt; list =
        Collections.synchronizedList(new ArrayList<>());

Every operation is synchronized internally.

Example:
list.add("Java");
list.add("React");

Safe for multiple threads.

<b>Option 2: CopyOnWriteArrayList</b>
List&lt;String&gt; list = new CopyOnWriteArrayList&lt;&gt;();

Best when:
Reads are very frequent
Writes are rare

Example:
List&lt;String&gt; list = new CopyOnWriteArrayList&lt;&gt;();
list.add("Java");
for(String item : list) {
    System.out.println(item);
}
Internally, every write creates a new copy of the array.

<b>Advantages</b>
Thread-safe
No ConcurrentModificationException
Excellent for read-heavy applications

<b>Disadvantages</b>
Expensive writes
More memory usage

    <b>Performance</b>: Always choose the implementation based on your specific access pattern—if you are mostly reading, choose <b>ArrayList</b>; if you are constantly modifying the middle of the list, consider <b>LinkedList</b> or other specialized structures.
`,
          code1: `// ---------- Ex : 1 ---------
           List&lt;String&gt; list = new ArrayList&lt;&gt;();
        list.add("Java");
        list.add("Spring");
        list.add("Java"); // duplicates allowed
        System.out.println(list);
        
        
        // ----------------- Ex : 2 ---------------
        class Employee {
    int id;
    String name;
    String position;

    Employee(int id, String name, String position){
        this.id = id;
        this.name = name;
        this.position = position;
    }
}


// Demo.java
        import java.util.ArrayList;
import java.util.List;

public class Demo {
    public static void main(String[] args) {

        List<Employee> emp = new ArrayList<>();
        emp.add(new Employee(1, "ram", "admin"));
        emp.add(new Employee(2, "vamshi", "suman"));
        System.out.println(emp);


        List<String> names = emp.stream()
                .map(e -> e.id +" - "+  e.name +" - " + e.position)
                .toList(); 

        System.out.println(names);
    }
}

//  Output:
 [Employee@6b95977, Employee@7e9e5f8a]
[1 - ram - admin, 2 - vamshi - suman]
        `
        }
      ]
    },
    {
      id: 1,
      title: "ArrayList",
      note: [
        {
          text1: `In Java, <b>ArrayList</b> is a resizable-array implementation of the <b>List</b> interface. It's part of the <b>java.util</b> package. Unlike arrays, <b>ArrayList</b> can dynamically grow and shrink in size as elements are added or removed.
          
          <b>Dynamic Sizing</b>: <b>ArrayList</b> can dynamically increase or decrease its size as elements are added or removed. You don't need to specify the size of the <b>ArrayList</b> initially.
<b>Indexed Access</b>: Elements in an <b>ArrayList</b> can be accessed using an index, similar to arrays. The index starts from 0 for the first element and goes up to size-1 for the last element.
<b>Ordered Collection</b>: <b>ArrayList</b> maintains the order of elements in which they are inserted.
<b>Allows Duplicates</b>: <b>ArrayList</b> can contain duplicate elements.
<b>Not Synchronized</b>: Unlike <b>Vector, ArrayList</b> is not synchronized. If multiple threads access an <b>ArrayList</b> concurrently and at least one of the threads modifies the list structurally, it must be synchronized externally.
<b>Null Elements</b>: <b>ArrayList</b> allows storing <b>null</b> elements.

<a href="https://medium.com/@Bharat2044/what-is-arraylist-in-java-and-how-to-create-and-all-predefined-methods-and-different-ways-to-print-fa3cc9f86f8b" target="_blank">ArrayList</a>`,
          code1: `//-------------- Ex : 1 ------------
          import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {

        ArrayList<String> list = new ArrayList<>();

        list.add("Apple");
        list.add("Banana");
        list.add("Mango");

        System.out.println(list);        // [Apple, Banana, Mango]

        System.out.println(list.get(1));  // Banana

        list.remove("Banana");

        System.out.println(list);        // [Apple, Mango]
    }
}
    
// Output:
// [Apple, Banana, Mango]
// Banana
// [Apple, Mango]
`
        }
      ]
    },
    {
      id: 1,
      title: "LinkedList",
      note: [
        {
          text1: `<b>LinkedList</b> is a class in the Java Collections Framework that implements both the <b>List</b> and <b>Deque</b> interfaces.
          
          Instead of storing elements in a continuous memory block like <b>ArrayList</b>, it stores elements as <b>nodes</b>, where each node contains:
-> Data
-> Reference to the next node
-> Reference to the previous node (Doubly Linked List)

A Linked List is a linear data structure where elements (called nodes) are connected using references (links). Unlike arrays, nodes are not stored in contiguous memory locations.


<b>1. What Exactly Is a Linked List in Java?</b>
A Linked List is a dynamic, node-based data structure where elements (called nodes) are linked using pointers (references). Unlike arrays, which occupy a single continuous block of memory, a Linked List's nodes can be scattered anywhere in memory but are connected through references.

A Linked List node typically contains:
-> The data it stores
-> A reference (pointer/link) to the next node
-> (For doubly linked lists) A reference to the previous node

Think of Linked Lists as:
"Chains of connected compartments spread across a warehouse."
-> Each compartment knows where the next one is.
-> You can easily insert or remove any compartment without disturbing the entire chain.
-> But you can't jump directly to a compartment you must walk through the chain.

This simple analogy explains both the power and the limitations of Linked Lists.

<b>2. Internal Working of Linked Lists in Java</b>
Java's LinkedList class is built on a Doubly Linked List implementation. Internally, it maintains:
-> A head (first node)
-> A tail (last node)
-> Nodes connected through previous and next references
-> A size counter

Let's understand the major components of the internal architecture.

<b>2.1 Nodes Are Objects on the Heap</b>
Each node in a Linked List is a separate object with:
-> A value
-> A reference to the next node
-> A reference to the previous node

This creates flexibility, but it also means:
-> More memory per element
-> More allocation operations
-> More fragmentation compared to arrays

<b>2.2 No Contiguous Memory Requirement</b>
Unlike arrays:
-> Nodes can live anywhere in heap memory
-> They are connected through references
-> You don't need to predefine size

This allows effortless resizing but results in slower traversal because pointers break CPU caching patterns.

<b>2.3 Traversal Requires Reference Chaining</b>
To reach the i-th element:
-> Java must start from the head
-> Follow the next references
-> Continue until it reaches that node

This means that indexing is O(n), unlike arrays which are O(1).
However, inserting or removing a node once you have a reference is extremely efficient.

<b>How the ArrayList works</b>
The ArrayList class has a regular array inside it. When an element is added, it is placed into the array. If the array is not big enough, a new, larger array is created to replace the old one and the old one is removed.

<b>How the LinkedList works</b>
The LinkedList stores its elements in "containers." The list has a link to the first container and each container has a link to the next container in the list. To add an element to the list, the element is placed into a new container and that container is linked to one of the other containers in the list.


<b>3. Types of Linked Lists Used in Java</b>
Let's explore the most commonly used Linked List variants.

<b>3.1 Singly Linked List</b>
Each node has:
-> Data
-> Reference to next node

Best for:
-> Forward traversal
-> Stack-like operations
-> Basic dynamic collections

<b>3.2 Doubly Linked List (used internally in Java's LinkedList)</b>
Each node has:
-> Data
-> Reference to next node
-> Reference to previous node

Better for:
-> Frequent insertions
-> Bidirectional navigation
-> Deque and queue-like structures

<b>3.3 Circular Linked List</b>
Last node's reference points to the first node.
Used in:
-> Round-robin scheduling
-> Repeated cyclic processes (OS kernels, task switching)




<b> Advantages of Linked Lists in Java </b>
Linked Lists are not always the fastest, but they offer unique strengths you cannot ignore.

4.1 Dynamic Sizing
Unlike arrays:
-> No need to define a fixed size
-> Memory allocated only when needed
-> Ideal when data continuously changes

This prevents memory wastage and avoids resizing costs.

<b>4.2 Fast Insertions and Deletions</b>
Linked Lists excel in structural modifications:
-> Insert anywhere without shifting
-> Delete in O(1) once the node is found
-> Perfect for systems with continuous updates

Examples:
-> Task queues
-> Realtime update buffers
-> Implementing Undo/Redo operations



<b>LinkedList Methods :</b>
<b>addFirst()</b>	Adds an element to the beginning of the list	
<b>addLast()</b>	Add an element to the end of the list	
<b>removeFirst()</b>	Remove an element from the beginning of the list	
<b>removeLast()</b>	Remove an element from the end of the list	
<b>getFirst()</b>	Get the element at the beginning of the list	
<b>getLast()</b>	Get the element at the end of the list
`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "What is Queue?",
      note: [
        {
          text1: `A Queue is a collection used to store elements in <b>FIFO order (First In First Out)</b>.
          
          👉 Think like:
Bank queue
Ticket counter
Printer queue

First Come → First Serve`,
          code1: `//------------ Ex : 1 -------------
          import java.util.*;

public class QueueExample {
    public static void main(String[] args) {

        Queue<String> queue = new LinkedList<>();

        queue.add("Anand");
        queue.add("John");
        queue.add("Priya");

        System.out.println(queue);
    }
}`
        }
      ]
    },
    {
      id: 1,
      title: "var",
      note: [
        {
          text1: `var is a feature introduced in Java 10 that allows the compiler to automatically infer the type of a local variable from its initializer. It reduces code verbosity while maintaining strong type checking at compile time.
          
          var name = "Anand";      // String
var age = 30;            // int
var salary = 50000.50;   // double

Rules of var
✅ Valid
var num = 10;
var name = "Java";
var list = new LinkedList<String>();

❌ Invalid
var x;          // Error: no initial value

❌ Invalid
var a = null;   // Error: type cannot be inferred
`,
          code1: `// --------------- Ex : 1 ---------------
          
          import java.util.LinkedList;

public class LinkedListExample {
    public static void main(String[] args) {

        LinkedList<String> fruits = new LinkedList<>();

        // Add elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Mango");

        System.out.println("Original List: " + fruits);

        // Add element at beginning
        fruits.addFirst("Orange");

        // Add element at end
        fruits.addLast("Grapes");

        System.out.println("After Adding: " + fruits);

        // Remove first element
        fruits.removeFirst();

        System.out.println("After Removing First: " + fruits);

        // Access element
        System.out.println("Second Element: " + fruits.get(1));
    }
}
    
// Output : 
// Original List: [Apple, Banana, Mango]
// After Adding: [Orange, Apple, Banana, Mango, Grapes]
// After Removing First: [Apple, Banana, Mango, Grapes]
// Second Element: Banana
`
        }
      ]
    },
    {
      id: 1,
      title: "What is Set?",
      note: [
        {
          text1: `A <b>Set</b> is a collection that <b>does not allow duplicate elements.</b>
          Declaration
public interface Set&lt;E&gt; extends Collection&lt;E&gt;

In Java, a Set is a collection that cannot contain duplicate elements. It models the mathematical set abstraction and is defined by the <b>java.util.Set</b> interface.

Unlike a <b>List</b>, which is ordered and allows duplicates, a <b>Set</b> focuses on uniqueness and usually does not guarantee the order of its elements (unless specific implementations are used).

<b>Core Characteristics</b>
    <b>Uniqueness</b>: It ensures that no two elements are equal (based on <b>.equals()</b> and <b>.hashCode())</b>.
    <b>No Indexing</b>: Because most sets are unordered, you cannot access elements by an integer index (there is no get(int index) method).
    <b>Efficiency</b>: Set implementations are highly optimized for testing whether an item is already contained within the collection.

    Here are the common <b>Set</b> implementations in Java, broken down by their primary characteristics and use cases:

    <b>HashSet</b>
        <b>Ordering</b>: Unordered; it does not guarantee any specific sequence for elements.
        <b>Performance</b>: Offers constant-time O(1) performance for basic operations (add, remove, contains).
        <b>Best For</b>: General-purpose collections where you need fast lookups and don't care about the order of elements.

    <b>LinkedHashSet</b>
        <b>Ordering</b>: Maintains the insertion order of elements.
        <b>Performance</b>: Maintains O(1) performance, similar to <b>HashSet</b>.
        <b>Best For</b>: Scenarios where you need to ensure element uniqueness but also need to remember the order in which items were added.

    <b>TreeSet</b>
        <b>Ordering</b>: Keeps elements in their natural sorted order (or via a custom <b>Comparator</b>).
        <b>Performance</b>: Operates in logarithmic <b>O(log n)</b> time.
        <b>Best For</b>: Situations where you need the data to be kept in a specific sorted sequence, though it is slightly slower than the other two implementations.

        <b>Important Set Methods</b>
        <b>add(E e)</b>
        -> Adds an element to the Set.
        -> Returns <b>true</b> if the element was added successfully.
        -> Duplicate elements are ignored.
        
        <b>remove(Object o)</b>
        Removes the specified element from the Set.
        Returns <b>true</b> if the element existed and was removed.
        
        <b>contains(Object o)</b>
        Checks whether the specified element exists in the Set.
        Returns <b>true</b> if found; otherwise <b>false</b>.
        
        <b>size()</b>
        Returns the total number of elements present in the Set.
        
        <b>isEmpty()</b>
        Checks whether the Set contains any elements.
        Returns <b>true</b> if the Set is empty; otherwise <b>false</b>.
        
        <b>clear()</b>
        Removes all elements from the Set.
        The Set becomes empty after execution.
`,
          code1: `// ---------------   HashSet ----------
          import java.util.*;

public class SetExample {
    public static void main(String[] args) {

        Set<String> set = new HashSet<>();

        set.add("Java");
        set.add("React");
        set.add("Java");

        System.out.println(set);
    }
}
    `
        }
      ]
    },
    {
      id: 1,
      title: "What is Map (Interface)",
      note: [
        {
          text1: `In Java, a Map is a collection that stores data in key-value pairs. Unlike <b>List</b> or <b>Set</b>, which store individual elements, a <b>Map</b> is designed to map a unique key to a specific value.

It is defined by the <b>java.util.Map</b> interface. Think of it like a real-world dictionary: the word is the key, and the definition is the value.

public interface Map<K, V>
K → Key type
V → Value type

<b>Core Characteristics</b>
    <b>Key-Value Pairs</b>: Every entry consists of a key and its associated value.
    <b>Unique Keys</b>: Each key must be unique; a Map cannot contain duplicate keys. However, values can be duplicated.
    <b>Efficient Lookup</b>: Maps are designed for high-performance retrieval of values based on their keys.
    <b>HashMap</b> and <b>LinkedHashMap</b> allow one null key, and <b>TreeMap</b> does NOT allow null keys (if natural ordering is used).

    Not a Collection: While it is part of the "Collections Framework," a Map does not technically implement the Collection interface because it handles pairs rather than individual elements.

    <b>HashMap</b>
    A HashMap stores data in <b>key-value pairs</b> and provides <b>fast access (O(1) average time)</b>.
    <b>Ordering</b>: Unordered; it does not guarantee any specific sequence for its entries. Does not maintain any order (no insertion or sorting order)
    <b>Performance</b>: Offers constant-time O(1) performance for basic operations like <b>put</b> and <b>get</b>.
    <b>Best For</b>: General-purpose data storage where speed is the priority and the order of elements does not matter.

    Map&lt;Integer, String&gt; map = new HashMap&lt;&gt;();

    <b>LinkedHashMap</b>
    <b>Ordering</b>: Maintains the insertion order of keys. This means that when you iterate over the map, the keys will be returned in the same order they were added.
    <b>Performance</b>: Maintains O(1) performance, similar to <b>HashMap</b>.
    <b>Best For</b>: Scenarios where you need to preserve the order in which entries were added, such as implementing an LRU (Least Recently Used) cache or maintaining a logical sequence of items.

    When using LinkedHashMap in a multi-threaded environment where multiple threads can access and modify the map at the same time, it’s important to synchronize access to it. This can be done by either using external synchronization or by using the synchronizedMap method provided by the Collections class.

    Map&lt;Integer, String&gt; map = new LinkedHashMap&lt;&gt;();


    <b>TreeMap</b>
    <b>Ordering</b>: Keeps entries in their natural sorted order (by key) or via a custom <b>Comparator</b> provided at creation.
    <b>Performance</b>: Operates in logarithmic O(log n) time.
    <b>Best For</b>: Situations where you need to perform range queries or retrieve keys in a specific sorted sequence (e.g., sorting keys alphabetically or numerically).

    Map&lt;Integer, String&gt; map = new TreeMap&lt;&gt;();


    <b>Can Map contain duplicate keys?</b>
❌ No
If you insert same key again:
map.put(1, "Java");
map.put(1, "Spring");

Final value:
<b>{ 1=Spring }</b>
Old value is replaced.

--------------------------------
<b>Common Interview Questions</b>
What is hashing?
What is hashCode()?
What is a bucket?
What is collision?
How does HashMap handle collisions?
Why is HashMap not thread-safe?
Difference between HashMap and Hashtable?
Difference between HashMap and ConcurrentHashMap?
`,
          code1: `//  --------------- Ex : 1 --------------
          import java.util.*;

          public class MapExample {
              public static void main(String[] args) {

                  Map<Integer, String> map = new HashMap<>();

                  map.put(1, "Java");
                  map.put(2, "React");
                  map.put(3, "Spring");

                  System.out.println(map);
              }
          }


          // ------------------ Employee ----------------
          class Employee {
              int id;
              String name;
              String position;

              Employee(int id, String name, String position){
                  this.id = id;
                  this.name = name;
                  this.position = position;
              }

              @Override
              public String toString() {
                  return id + " " + name + " " + position;
              }
          }


          // ------ EmployeeMapDemo -------
import java.util.*;

public class EmployeeMapDemo {
    public static void main(String[] args) {

        Map<Integer, Employee> empMap = new HashMap<>();

        empMap.put(101, new Employee(101, "Anand", "Developer"));
        empMap.put(102, new Employee(102, "John", "Tester"));
        empMap.put(103, new Employee(103, "Priya", "Manager"));

        // Fetch single employee
        System.out.println(empMap.get(101));

        // Iterate all employees
        for (Map.Entry<Integer, Employee> entry : empMap.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }
}
    `
        }
      ]
    },
    {
      id: 1,
      title: "Set to Map Conversion",
      note: [
        {
          text1: ``,
          code1: `// --------------- Ex : 1 List&lt;Employee&gt; → Map&lt;Integer, String&gt; --------------
          
          import java.util.*;
import java.util.stream.Collectors;

class Employee {
    int id;
    String name;

    Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return id + " " + name;
    }
}


    class Main {
        public static void main(String[] args) {
            List<Employee> emp = new ArrayList<>();
            
            emp.add(new Employee(1,"ram"));
            emp.add(new Employee(2,"Suman"));
            
            System.out.println("Set" + emp);
            
            Map<Integer, String> empMap = emp.stream()
                .collect(Collectors.toMap(
                        Employee::getId,
                        Employee::getName
                    ));
                    
            System.out.println("Map" +empMap);
        }
    }
        
    Output:
Set[1 ram, 2 Suman]
Map{1=ram, 2=Suman}


// --------------- Ex : 2 List&lt;Employee&gt; → Map&lt;Integer, Employee&gt; --------------
class Employee {
    int id;
    String name;
    String position;

    Employee(int id, String name, String position){
        this.id = id;
        this.name = name;
        this.position = position;
    }

    public String getName() {
        return name;
    }

    public Integer getId() {
        return id;
    }

    @Override
    public String toString() {
        return id + " " + name + " " + position;
    }
}
    
public class EmployeeMapDemo {
    public static void main(String[] args) {

        List<Employee> empList = new ArrayList<>();

        empList.add(new Employee(101, "Anand", "Developer"));
        empList.add(new Employee(102, "John", "Tester"));
        empList.add(new Employee(103, "Priya", "Manager"));

        Map<Integer, Employee> empMap =  empList.stream()
                .collect(Collectors.toMap(Employee::getId, emp -> emp));
              // Since emp -> emp simply returns the same object,
        System.out.println(empMap);

    }
}
    Output:
{101=101 Anand Developer, 102=102 John Tester, 103=103 Priya Manager}
`
        }
      ]
    },
    {
      id: 1,
      section: "Data Structures and Algorithms",
      title: "Pagination",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "What are the differences between List and Set?",
      note: [
        {
          text1: `List and Set both are interfaces. They both extends Collection interface. 
 
1) List is an ordered collection it maintains the insertion order, which means upon displaying the list content it will 
display the elements in the same order in which they got inserted into the list. 
Set is an unordered collection, it doesn’t maintain any order. There are few implementations of Set which 
maintains the order such as LinkedHashSet (It maintains the elements in insertion order). 
2) List allows duplicates while Set doesn’t allow duplicate elements. All the elements of a Set should be unique if 
you try to insert the duplicate element in Set it would replace the existing value. 
 
3) List implementations: ArrayList, LinkedList etc. 
Set implementations: HashSet, LinkedHashSet, TreeSet etc. 
 
4) List allows any number of null values. Set can have only a single null value at most. 
 
5) ListIterator can be used to traverse a List in both the directions (forward and backward) However it cannot be 
used to traverse a Set. We can use Iterator (It works with List too) to traverse a Set. 
 
6) List interface has one legacy class called Vector whereas Set interface does not have any legacy class.`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      section: "Stream API",
      title: "Stream API",
      note: [
        {
          text1: `It allows you to filter, transform, and process data easily using pipelines.

In simple words:
Stream API is used to process collections (List, Set, etc.) using functional programming concepts.

1️⃣ Key Features of Stream API
Processes collections of objects
Supports functional programming
Uses lambda expressions
Enables parallel processing
Improves readability and performance

2️⃣ Stream API Flow
Collection → Stream → Intermediate Operations → Terminal Operation → Result
Example flow:
List → stream() → filter() → map() → collect()

3️⃣ Types of Operations
<b>1. Intermediate Operations</b>
Return a Stream
Used for data transformation
Lazy execution (runs only when terminal operation is called)

Examples:
filter()
map()
sorted()
distinct()
limit()

<b>2. Terminal Operations</b>
Produce final result
Close the stream

Examples:
collect()
forEach()
count()
reduce()
findFirst()


<b>Interview Definition</b>
Stream API is a feature introduced in Java 8 that allows processing collections of objects using functional-style operations like filter, map, and reduce to perform data transformations and aggregations efficiently.


<h3>Stream vs Collection</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Collection</th>
      <th>Stream</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Storage</td>
      <td>Stores data</td>
      <td>Does not store data</td>
    </tr>
    <tr>
      <td>Processing</td>
      <td>Direct</td>
      <td>Pipeline operations</td>
    </tr>
    <tr>
      <td>Iteration</td>
      <td>External</td>
      <td>Internal</td>
    </tr>
    <tr>
      <td>Reusability</td>
      <td>Yes</td>
      <td>No (once used)</td>
    </tr>
  </tbody>
</table>


<h3>Common Stream Methods</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>filter()</td>
      <td>Filters elements</td>
    </tr>
    <tr>
      <td>map()</td>
      <td>Transforms elements</td>
    </tr>
    <tr>
      <td>sorted()</td>
      <td>Sorts elements</td>
    </tr>
    <tr>
      <td>distinct()</td>
      <td>Removes duplicates</td>
    </tr>
    <tr>
      <td>limit()</td>
      <td>Limits number of elements</td>
    </tr>
    <tr>
      <td>collect()</td>
      <td>Converts stream to collection</td>
    </tr>
    <tr>
      <td>count()</td>
      <td>Counts elements</td>
    </tr>
  </tbody>
</table>`,
          code1: `//--------- 1: Filter Even Numbers -----------
          import java.util.*;
import java.util.stream.*;

public class Example {
    public static void main(String[] args) {

        List<Integer> numbers = Arrays.asList(1,2,3,4,5,6);

        numbers.stream()
               .filter(n -> n % 2 == 0)
               .forEach(System.out::println);
    }
}
    
// Output
2
4
6


//-------------- 2: Map Operation (Transform Data) ------------
import java.util.*;

public class Example {
    public static void main(String[] args) {

        List<String> names = Arrays.asList("ram","shyam","hari");

        names.stream()
             .map(name -> name.toUpperCase())
             .forEach(System.out::println);
    }
}
// Output:
RAM
SHYAM
HARI



// ------------ 3: Collect Result ------------
import java.util.*;
import java.util.stream.Collectors;

public class Example {
    public static void main(String[] args) {

        List<Integer> numbers = Arrays.asList(1,2,3,4,5);

        List<Integer> result = numbers.stream()
                                      .filter(n -> n > 2)
                                      .collect(Collectors.toList());

        System.out.println(result);
    }
}
// Output:
[3, 4, 5]

// --------- ✅ Real-time Example (Employee Filtering) ---------

import java.util.*;
import java.util.stream.*;

class Employee {
    private int id;
    private String name;
    private double salary;

    // Constructor
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Getter methods
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }
}

public class StreamExample {

    public static void main(String[] args) {

        List<Employee> employees = Arrays.asList(
            new Employee(1, "Ram", 45000),
            new Employee(2, "Shyam", 60000),
            new Employee(3, "Hari", 75000),
            new Employee(4, "Krishna", 30000)
        );

        employees.stream()
                 .filter(emp -> emp.getSalary() > 50000)
                 .map(emp -> emp.getName())
                 .forEach(System.out::println);
    }
}
    // Output
Shyam
Hari

//          This will:
// Filter employees with salary > 50000
// Get their names
// Print them


`
        }
      ]
    },
    {
      id: 1,
      title: "collect(Collectors.toMap())",
      note: [
        {
          text1: `collect(Collectors.toMap()) is used to convert a collection (List/Set) into a Map.

          <b>keyMapper</b>	Function to generate the Map key
          <b>valueMapper</b>	Function to generate the Map value


          groupingBy() (very important)
          partitioningBy()
          mapping()
          joining()
          summarizingInt()
          `,
          code1: `// ------------- Ex -----------
          Map<Key, Value> map = list.stream()
                          .collect(Collectors.toMap(
                              keyMapper,
                              valueMapper
                          ));

                // ------------ Ex : 1 ----------
                import java.util.*;
                import java.util.stream.Collectors;

                public class Example {

                    public static void main(String[] args) {

                        List<String> names = Arrays.asList("Ram", "Shyam", "Hari");

                        Map<String, Integer> map = names.stream()
                                .collect(Collectors.toMap(
                                        name -> name,
                                        name -> name.length()
                                ));

                        System.out.println(map);
                    }
                }
                    // Output:
                    {Ram=3, Shyam=5, Hari=4}


            // ---------- Real-Time Example (Employee Map) -------
// EmployeeId → EmployeeName

class Employee {

    private int id;
    private String name;
    private double salary;

    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }
}


// Convert List → Map
import java.util.*;
import java.util.stream.Collectors;

public class StreamExample {

    public static void main(String[] args) {

        List<Employee> employees = Arrays.asList(
                new Employee(1, "Ram", 45000),
                new Employee(2, "Shyam", 60000),
                new Employee(3, "Hari", 75000)
        );

        Map<Integer, String> employeeMap =
                employees.stream()
                        .collect(Collectors.toMap(
                                emp -> emp.getId(),
                                emp -> emp.getName()
                        ));

        System.out.println(employeeMap);
    }
}
    // Output:
    {1=Ram, 2=Shyam, 3=Hari}

                `
        }
      ]
    },
    {
      id: 1,
      title: "stream map",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "stream filter",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "stream reduce",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "stream sorted(), distinct(), limit()",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "real-time examples",
      note: [
        {
          text1: ``,
          code1: `//------------- Ex : 1 -----------
          import java.util.*;

class User {
    private int id;
    private String name;
    private boolean active;

    // Constructor
    public User(int id, String name, boolean active) {
        this.id = id;
        this.name = name;
        this.active = active;
    }

    // Getter methods
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public boolean isActive() {
        return active;
    }

    // Optional: toString() for better printing
    @Override
    public String toString() {
        return id + " - " + name + " - " + active;
    }
}

public class StreamUser {

    public static void main(String[] args) {

        List<User> users = Arrays.asList(
                new User(1, "Anand", true),
                new User(2, "Ram", false),
                new User(3, "Shyam", true),
                new User(4, "Hari", false)
        );

        // Stream API usage
        List<User> activeUsers = users.stream()
                .filter(user -> user.isActive())
                // .filter(UserEx2::isActive) // Method Reference
                .toList();

        // Print result
        activeUsers.forEach(System.out::println); // Method Reference
        // activeUsers.forEach(u -> System.out.println(u.toString())); 
    }
}
    

//------------- lognest string -----------
       List<String> words = List.of("ram","elephant", "microservices", "Docker", "spring");

        String longest = words.stream()
                .max(Comparator.comparingInt(String::length))
                .orElse("");

        System.out.println(longest);
        
        //Output: microservices 
        
//         🧠 Step-by-Step Explanation
//         1️⃣ words.stream()
// Convert List → Stream
// 2️⃣ Comparator.comparingInt(String::length)
// Compares strings based on length
// Equivalent to:
// (s1, s2) -> Integer.compare(s1.length(), s2.length())
// 3️⃣ .max(...)
// Finds the maximum element
// Here: string with maximum length
// 4️⃣ .orElse("")
// If list is empty → return "" (default value)
// Prevents NullPointerException


// ----------- 🔥 1️⃣ Longest Username ------------
String longestName = users.stream()
        .map(User::getName)
        .max(Comparator.comparingInt(String::length))
        .orElse("");

// ----------- 🔥 1️⃣ Longest Username real time ------------
import java.util.*;

class User {
    private int id;
    private String name;

    // Constructor
    public User(int id, String name) {
        this.id = id;
        this.name = name;
    }

    // Getter methods
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}

public class LongestUser {
    public static void main(String[] args) {

        List<User> users = Arrays.asList(
                new User(1, "Ram"),
                new User(2, "Anand"),
                new User(3, "Christopher"),
                new User(4, "Hari")
        );

        // Find longest username
        String longestName = users.stream()
                .map(User::getName)
                .max(Comparator.comparingInt(String::length))
                .orElse("");

        System.out.println("Longest Username: " + longestName);
    }
}
    // ✅ Output
Longest Username: Christopher

// 🧠 Step-by-Step Flow
// 1️⃣ users.stream()
// Convert list → stream

// 2️⃣ map(User::getName)
// Convert:
// User → String (name)

// Intermediate data:
// ["Ram", "Anand", "Christopher", "Hari"]
// 3️⃣ max(Comparator.comparingInt(String::length))
// Compare strings by length
// Return the longest string
// 4️⃣ orElse("")
// If list is empty → return empty string
`
        }
      ]
    },
    {
      id: 1,
      title: "Method Reference :: ",
      note: [
        {
          text1: `n Java, the double colon :: is known as the Method Reference operator. Introduced in Java 8, it’s a shorthand syntax used to refer to a method without actually invoking it.
          
          Think of it as a cleaner, more readable way to write a Lambda Expression. Instead of describing how to do something, you’re just pointing to an existing method that already does it.
          
          ✅ Simple Definition
Method reference (::) is a shorthand way to call a method using lambda expressions.

          <b>1. How it works</b>
If a lambda expression simply calls an existing method, you can replace the lambda with a method reference.
    Lambda Style: s -> System.out.println(s)
    Method Reference Style: System.out::println
//-----------
    Instead of writing:
name -> name.length()
You can write:
String::length
    
<b>Interview Answer (Perfect)</b>
:: is called method reference in Java. It is used to refer to a method without executing it and is a shorthand for lambda expressions, improving readability and reducing boilerplate code.

<h3>Common Types of Method References</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Type</th>
      <th>Syntax</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Static Method</td>
      <td>Class::staticMethod</td>
      <td>Math::max</td>
    </tr>
    <tr>
      <td>Instance Method (Specific Object)</td>
      <td>instance::method</td>
      <td>myString::toLowerCase</td>
    </tr>
    <tr>
      <td>Instance Method (Arbitrary Object)</td>
      <td>Class::method</td>
      <td>String::toUpperCase</td>
    </tr>
    <tr>
      <td>Constructor</td>
      <td>Class::new</td>
      <td>ArrayList::new</td>
    </tr>
  </tbody>
</table>

<h3>Lambda vs Method Reference</h3>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Lambda</th>
      <th>Method Reference</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>x -&gt; x.toUpperCase()</td>
      <td>String::toUpperCase</td>
    </tr>
    <tr>
      <td>x -&gt; x.length()</td>
      <td>String::length</td>
    </tr>
    <tr>
      <td>user -&gt; user.getName()</td>
      <td>User::getName</td>
    </tr>
  </tbody>
</table>
    `,
          code1: `// ----------- Ex : 1 -----------
          import java.util.*;
          public class MethodRef {
              public static void main(String[] args) {
                  List<Integer> nums = Arrays.asList(1, 2, 3);
                  nums.forEach(System.out::println);
              }
          }
          // System.out::println = (x) -> System.out.println(x)

          // 2️⃣ Instance Method of Object
object::method
// Example
String str = "hello";
Runnable r = str::toUpperCase;

// 3️⃣ Instance Method of Class (Most Used)
ClassName::method

// Example
List<String> names = List.of("ram", "shyam");
names.stream()
     .map(String::toUpperCase)
     .forEach(System.out::println);
👉 String::toUpperCase = name -> name.toUpperCase()

// 4️⃣ Constructor Reference
ClassName::new
// ---------- User::new --------
import java.util.*;

class User {
    private String name;

    // Constructor that accepts name
    public User(String name) {
        this.name = name;
    }

    // Getter
    public String getName() {
        return name;
    }

    // toString() for printing
    @Override
    public String toString() {
        return "User{name='" + name + "'}";
    }
}

public class UserDoubleCollonMain {
    public static void main(String[] args) {

        // List of names
        List<String> names = List.of("Ram", "Shyam");

        // Convert names → User objects using constructor reference
        List<User> users = names.stream()
                .map(User::new)
            //  .map(user -> new UserEx1(user)) // generally we will use
                .toList();

        // Print users
        users.forEach(System.out::println);
    }
}


// 👉 Calls constructor new User(name)
// 🔥 Your Example Explained
.map(User::getName)
// 👉 Same as:
.map(user -> user.getName())

Comparator.comparingInt(String::length)
// 👉 Same as:
Comparator.comparingInt(s -> s.length())


//-------------

// 🔥 1️⃣ Simple String Uppercase
// ✅ Lambda
names.stream()
     .map(name -> name.toUpperCase())
     .forEach(System.out::println);

// ✅ Method Reference
names.stream()
     .map(String::toUpperCase)
     .forEach(System.out::println);
// 👉 Same meaning, cleaner with ::


// 🔥 2️⃣ Get Length of Strings
// Lambda
names.stream()
     .map(name -> name.length())
     .forEach(System.out::println);
// Method Reference
names.stream()
     .map(String::length)
     .forEach(System.out::println);

// 🔥 3️⃣ Print Values
// Lambda
names.forEach(name -> System.out.println(name));
// Method Reference
names.forEach(System.out::println);

🔥 4️⃣ Convert String → User Object (Constructor)
// Lambda
.map(name -> new User(name))
// Method Reference
.map(User::new)

🔥 5️⃣ Get Object Property
// Lambda
.map(user -> user.getName())
// Method Reference
.map(User::getName)

🔥 6️⃣ Sorting
// Lambda
users.stream()
     .sorted((u1, u2) -> u1.getName().compareTo(u2.getName()))
     .toList();
// Method Reference
users.stream()
     .sorted(Comparator.comparing(User::getName))
     .toList();

🔥 7️⃣ Filter Example (⚠️ Important)
// Lambda
users.stream()
     .filter(user -> user.isActive())
     .toList();
// Method Reference
users.stream()
     .filter(User::isActive)
     .toList();
          `
        }
      ]
    },
    {
      id: 1,
      section: "Generics",
      title: "Generics",
      note: [
        {
          text1: `<b>Definition of Generics in Java</b>
<b>Generics in Java</b> is a feature that allows you to write <b>classes, interfaces, and methods with a placeholder for types</b>, so that you can use the same code with different data types <b>in a type-safe way</b>.
          <b>Why Use Generics?</b>
    <b>Type Safety</b>: The compiler checks that you’re only adding the correct type of data.
    <b>Elimination of Casts</b>: You don't have to manually convert types (e.g., (String) myValue).
    <b>Code Reusability</b>: You can write a single class or method that works with different types of data while maintaining safety.
    
    Generics = Write code once, use it with any data type (without losing type safety).
    
    Before generics (Java 1.4 and earlier), we used Object type:
List list = new ArrayList();
list.add("Anand");
list.add(10);  // allowed

❌ Problems:
No type safety
Need manual casting
Runtime errors

✅ With Generics (Java 1.5+)
List<String> list = new ArrayList<>();
list.add("Anand");
// list.add(10); ❌ Compile-time error
✔ Type-safe
✔ No casting required
✔ Errors caught at compile time

<b>Basic Syntax</b>
ClassName&lt;T&gt; 
T = Type parameter (can be anything like E, K, V)`,
          code1: `//------ Example 1: Generic Class ---------
class Box&lt;T&gt; {
    private T value;

    public void setValue(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }
}

//Usage:
Box&lt;String&gt; stringBox = new Box&lt;&gt;();
stringBox.setValue("Hello");

Box&lt;Integer&gt; intBox = new Box&lt;&gt;();
intBox.setValue(100);`
        }
      ]
    },
    {
      id: 1,
      section: "Lambda functions",
      title: "Lambda functions",
      note: [
        {
          text1: `Lambda functions in Java are a <b>short way to write anonymous functions (functions without a name).</b> They are mainly used with <b>functional interfaces</b> and introduced in Java 8 to support functional programming.
          
          ✅ Simple Definition
A lambda expression is a concise way to represent a method with <b>no name, no modifier, and no return type declaration.</b>`,
          code1: `// 🔹------  Basic Syntax -------
(parameters) -> expression
// or
(parameters) -> {
    // multiple statements
}
    
// ---------  Example 1: Without Lambda (Old Way)
Runnable r = new Runnable() {
    @Override
    public void run() {
        System.out.println("Hello");
    }
};
// ----------  Example 2: With Lambda (New Way)
Runnable r = () -> System.out.println("Hello");
`
        }
      ]
    },
    {
      id: 1,
      title: "Functional Interface in Java",
      note: [
        {
          text1: `A <b>Functional Interface</b> is an interface that contains <b>exactly one abstract method.</b>
        A functional interface can have:
-> Only <b>one abstract method</b>
-> Any number of <b>default</b> or <b>static</b> methods

A Functional Interface in Java is an interface that contains exactly one abstract method.

They are the foundation of functional programming in Java, enabling the use of <b>Lambda expressions</b> and <b>Method references</b>. Because they only have one method, the compiler can easily map a lambda expression directly to that method.

<b>Key Characteristics</b>
    -> <b>Single Abstract Method (SAM)</b>: While they can have any number of <b>default</b> or <b>static</b> methods, they must have exactly one abstract method.

    -> <b>@FunctionalInterface Annotation</b>: This is an optional but highly recommended annotation. It instructs the compiler to verify that the interface has exactly one abstract method, providing a compile-time error if you accidentally add a second one.

    <b>🧠 Why Functional Interfaces?</b>
They are used for:
Lambda expressions
Stream API
Functional programming style in Java

<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Interface</th>
      <th>Method</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>Predicate&lt;T&gt;</code></td>
      <td><code>test(T t)</code></td>
      <td>Returns true/false</td>
    </tr>
    <tr>
      <td><code>Function&lt;T,R&gt;</code></td>
      <td><code>apply(T t)</code></td>
      <td>Converts input to output</td>
    </tr>
    <tr>
      <td><code>Consumer&lt;T&gt;</code></td>
      <td><code>accept(T t)</code></td>
      <td>Takes input, returns nothing</td>
    </tr>
    <tr>
      <td><code>Supplier&lt;T&gt;</code></td>
      <td><code>get()</code></td>
      <td>Returns a value</td>
    </tr>
  </tbody>
</table>

          `,
          code1: `// --------- Example 1: Functional Interface ---------
          @FunctionalInterface
          interface Greeting {
              void sayHello(String name); // The one abstract method
          }

          public class Main {
              public static void main(String[] args) {
                  // Implementation using a Lambda Expression
                  Greeting g = (name) -> System.out.println("Hello, " + name);
                  
                  g.sayHello("Java Developer");
              }
          }

          // Output:
Hello, Java Developer 

// --------------------- Ex : 2 ---------------------
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b); // single abstract method
}

public class Main {
    public static void main(String[] args) {

        Calculator add = (a, b) -> a + b;
        Calculator multiply = (a, b) -> a * b;

        System.out.println("Addition: " + add.calculate(10, 5));
        System.out.println("Multiplication: " + multiply.calculate(10, 5));
    }
}
    // Output:
Addition: 15
Multiplication: 50
}     `
        }
      ]
    },
    {
      id: 1,
      section: "Oops",
      title: "Pagination",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Constructor",
      note: [
        {
          text1: `A constructor is a special block of code used to <b>initialize objects.</b> It has the same name as the class and does not have a return type, not even void. When you create an object of a class, the constructor is called automatically to set up the initial state of the object.

In Java, a constructor is a block of codes similar to the method. It is called
when an instance of the class is created. At the time of calling constructor,
memory for the object is allocated in the memory.

A constructor in Java is a special member that is called when an object is created. It initializes the new object’s state

A constructor is a specialized block of code designed specifically to <b>initialize a newly created object.</b> It shares the same name as the class and does not have a return type, not even void. When you create an object of a class, the constructor is invoked automatically to set up the initial state of that object.

Whenever you use the new keyword to create an object, at least one constructor is called. It sets up the initial state of the object by assigning values to its instance variables.

<b>Rules of Constructors</b>
To write a constructor in Java, you must follow three strict rules:
  -> The name must match the class name exactly. If your class is <b>Student</b>, your constructor must be <b>Student()</b>.
  -> It cannot have an explicit return type. Unlike methods, constructors do not return values, not even <b>void</b>.
  -> It cannot be abstract, static, final, or synchronized. Constructors are tied directly to object instantiation, so these modifiers do not apply. (They can, however, be <b>public, private, protected</b>, or package-private).
  -> It can accept parameters to initialize object properties.


  <b> Types of Constructors </b>
  -> <b>Default Constructor</b>: A constructor with no parameters. If you don’t define any constructor, Java provides a default one automatically.
  If you do not write any constructor in your class, the Java compiler automatically inserts a hidden, no-argument constructor for you. It initializes all uninitialized instance variables to their default values (<b>0</b> for integers, <b>null</b> for objects, <b>false</b> for booleans).
   <b>Note</b>: It is not necessary to write a constructor for a class because the Java compiler automatically creates a default constructor (a constructor with no arguments) if your class doesn’t have any. 

  -> <b>Parameterized Constructor</b>: A constructor that takes arguments to initialize an object with specific values.
It accepts arguments so you can dynamically assign different values to different objects the moment they are created.

  -> <b>Copy Constructor</b>: A constructor that creates a new object as a copy of an existing object (not built-in in Java, but can be implemented manually). 

  -> <b> No-Argument Constructor </b>: A constructor that takes no parameters, often used to create objects with default values.
  This is a constructor you write yourself that takes no parameters. It is useful when you want to set specific default values for all objects of that class upon creation.

  -> <b>Constructor Overloading</b>: Having multiple constructors in the same class with different parameter lists (number or type of parameters).
  Just like methods, constructors can be overloaded. This means you can have <b>multiple constructors in the same class</b>, as long as their parameter lists (the number, type, or order of parameters) are different. This gives users of your class flexibility in how they create objects.

  -> <b>Chained Constructor (The this() method) - Constructor Chaining</b>: A constructor that calls another constructor in the same class using <b>this()</b> or in the parent class using <b>super()</b>.
  When you have overloaded constructors, they often share similar initialization logic. To avoid repeating code, one constructor can call another constructor within the same class using <b>this()</b>.
  <b>this()</b> → call another constructor in the same class
  <b>super()</b> → call a constructor in the parent class
`,
          code1: `// ----------------- Ex : 1 ----------------
          class Student {
    String name;

    // Constructor
    Student(String name) {
        this.name = name;
    }

    void display() {
        System.out.println("Name: " + name);
    }

    public static void main(String[] args) {
        Student s1 = new Student("Vishnu");
        s1.display();
    }
}

// Output:
// Name: Vishnu  


// ------------------The Default Constructor ----------------
public class Car {
    String brand;
    int year;

    public static void main(String[] args) {
        // We didn't write a constructor, but we can still create the object
        Car myCar = new Car(); 
        System.out.println(myCar.brand); // Output: null
    }
}
    // Output:
// null

// ------------------ Parameterized Constructor ----------------
public class Car {
    String brand;
    int year;

    // Parameterized constructor
    public Car(String b, int y) {
        brand = b;
        year = y;
    }

    public static void main(String[] args) {
        Car honda = new Car("Honda", 2018);
        Car toyota = new Car("Toyota", 2022);
    }
}
    // Output:
// No output, but two Car objects are created with specified brand and year
          
// ------------------ No-Argument Constructor ----------------
public class Car {
    String brand;
    int year;

    // User-defined no-argument constructor
    public Car() {
        brand = "Unknown Brand";
        year = 2023;
        System.out.println("Car object created!");
    }
}
    // Output:
// Car object created!
          

// ------------------ Constructor Overloading ----------------
public class User {
    String username;
    String email;
    int age;

    // Constructor 1: Only username provided
    public User(String username) {
        this.username = username;
        this.email = "Not provided";
    }

    // Constructor 2: Username and email provided
    public User(String username, String email) {
        this.username = username;
        this.email = email;
    }

    // Constructor 3: All details provided
    public User(String username, String email, int age) {
        this.username = username;
        this.email = email;
        this.age = age;
    }
}
    // Output:  


// ------------------ Copy Constructor (this()) ----------------    
// Copy constructor is not built-in in Java, but you can implement it manually. It creates a new object as a copy of an existing object.
// 
import java.io.*;

class Geeks{
    
    // data members of the class
    String name;
    int id;

    // Parameterized Constructor
    Geeks(String name, int id)
    {
        this.name = name;
        this.id = id;
    }

    // Copy Constructor
    Geeks(Geeks obj2)
    {
        this.name = obj2.name;
        this.id = obj2.id;
    }
}

class GFG {
    public static void main(String[] args)
    {
        // This would invoke the parameterized constructor
        System.out.println("First Object");
        Geeks geek1 = new Geeks("Sweta", 68);
        System.out.println("GeekName: " + geek1.name
                           + " and GeekId: " + geek1.id);

        System.out.println();

        // This would invoke the copy constructor
        Geeks geek2 = new Geeks(geek1);
        System.out.println(
            "Copy Constructor used Second Object");
        System.out.println("GeekName: " + geek2.name
                           + " and GeekId: " + geek2.id);
    }
}
    // Output:
First Object
GeekName: Sweta and GeekId: 68

Copy Constructor used Second Object
GeekName: Sweta and GeekId: 68

// ------------------Copy Constructor (2) ----------------

class Employee {
    int id;
    String name;

    Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }

    // Copy Constructor
    Employee(Employee e) {
        this.id = e.id;
        this.name = e.name;
    }

    void display() {
        System.out.println(id + " " + name);
    }
}

public class Main {
    public static void main(String[] args) {

        Employee e1 = new Employee(101, "Anand");

        // Copying e1 into e2
        Employee e2 = new Employee(e1);

        e2.display();
    }
}
    // Output:
101 Anand


// ------------------Copy Constructor (super()) ----------------
// 




// ------------------ Chained Constructor Using this() ----------------

class Employee {

    Employee() {
        this(101);
        System.out.println("Default Constructor");
    }

    Employee(int id) {
        this(id, "Anand");
        System.out.println("One Parameter Constructor");
    }

    Employee(int id, String name) {
        System.out.println(id + " " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        new Employee();
    }
}
// Output
// 101 Anand
// One Parameter Constructor
// Default Constructor

// Execution flow:
// Employee()
//     ↓
// Employee(int)
//     ↓
// Employee(int, String)


// ----------------- Chained Constructor Using super() ------------------
class Person {

    Person() {
        System.out.println("Person Constructor");
    }
}

class Employee extends Person {

    Employee() {
        super();
        System.out.println("Employee Constructor");
    }
}

public class Main {
    public static void main(String[] args) {
        new Employee();
    }
}
// Output
// Person Constructor
// Employee Constructor
`
        }
      ]
    },
    {
      id: 1,
      title: "What is the usage to Consumer interface?",
      note: [
        {
          text1: `Use Java's Consumer interface to store a lambda expression in a variable: 
          
          <b>Consumer<T></b> is a built-in Functional Interface located in the java.util.function package.
Here is the technical breakdown of what that means in practice:
<b>1. Why is it called a "Functional Interface"?</b>
A functional interface is an interface that has exactly one abstract method. This allows it to be used as the "target type" for <b>Lambda Expressions or Method References</b>.
In the case of Consumer, that single method is:
void accept(T t);

<b>The Internal Code (Simplified) - (Ex : 2)</b>
`,
          code1: `import java.util.ArrayList; // For ArrayList
import java.util.function.Consumer; // For the Consumer interface

public class Main {
    public static void main(String[] args){
        
        ArrayList<Integer> numbers = new ArrayList<Integer>(); 
        numbers.add(5); 
        numbers.add(9); 
        numbers.add(8); 
        numbers.add(1); 
        
        // This is a Lambda expression being assigned to a Consumer
        Consumer<Integer> method = (n) -> { System.out.println(n); }; 
        numbers.forEach( method ); 
    }
}
// ----------------  The Internal Code (Simplified) Ex : 2  ----------------
// If you were to look at the Java source code, it looks roughly like this:

Java
@FunctionalInterface
public interface Consumer<T> {
    
    // The main method you must implement (usually via Lambda)
    void accept(T t);

    // A default method to chain consumers together
    default Consumer<T> andThen(Consumer<? super T> after) {
        // ... implementation ...
    }
}

// -------------  Functional Interface  --------------
interface FuncInterface 
{ 
    // An abstract function 
    void abstractFun(int x); 
   
    // A non-abstract (or default) function 
    default void normalFun() 
    { 
       System.out.println("Hello"); 
    } 
} 
   
class Test 
{ 
    public static void main(String args[]) 
    { 
        // lambda expression to implement above 
        // functional interface. This interface 
        // by default implements abstractFun() 
        FuncInterface fobj = (int x)->System.out.println(2*x); 
   
        // This calls above lambda expression and prints 10. 
        fobj.abstractFun(5); 
    } 
} 
`
        }
      ]
    },
    {
      id: 1,
      title: "What are the states in the lifecycle of a Thread?",
      note: [
        {
          text1: `A thread can have one of the following states during its lifetime: 
<b>New</b>:  
In this state, a Thread class object is created using a new operator, but the thread is not alive. Thread doesn't start 
until we call the start () method. 
<b>Runnable</b>:  
In this state, the thread is ready to run after calling the start () method. However, the thread is not yet selected by 
the thread scheduler. 
<b>Running</b>:  
In this state, the thread scheduler picks the thread from the ready state, and the thread is running. 
<b>Waiting/Blocked</b>:  
In this state, a thread is not running but still alive, or it is waiting for the other thread to finish. 
<b>Dead/Terminated</b>:  
A thread is in terminated or dead state when the run () method exits. `,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Static Method",
      note: [
        {
          text1: `A static method belongs to the class rather than the object. 
There is no need to create the object to call the static methods. 
A static method can access and change the value of the static variable. 
          
          This error highlights one of the most important rules in Java: <b>A static method belongs to the class, not to an object</b>.
<b>The Problem Ex : 3</b>
When you mark a method as static, it exists even if you haven't created a new MyClass(). However, variables like <b>c</b> or <b>b</b> are <b>instance variables</b>—they only exist when an object is created.
static context: The "Class Level." It doesn't know which object's <b>c</b> or <b>b</b> you are talking about.
this keyword: Refers to the current object. Since a static method doesn't have a "current object," using this inside it is impossible.`,
          code1: `// -------------------- Ex : 3 -------------
          // A static method belongs to the class, not to an object.
          class MyClass {
    public int a = 7;
    public int b = 2;
    MyClass(int a, int b){
        this.a = a;
        this.b = b;
    }
    
    public static int Calc(){
        return this.a + this.b;
    }
}
public class Main {
    public static void main(String[] args){
        System.out.println(MyClass.Calc());
    }
}

// Output:
// ERROR!
// Main.java:266: error: non-static variable this cannot be referenced from a static context
//         return this.a + this.b;
//                ^
// Main.java:266: error: non-static variable this cannot be referenced from a static context
//         return this.a + this.b;
//                         ^
// 2 errors
// === Code Exited With Errors ===
//========= Correct way ==========
class MyClass {
    static int x = 7;
    static int y = 2;

    public static int Calc() {
        return x + y; // 'this' is removed
    }
}
          `
        }
      ]
    },
    {
      id: 1,
      title: "Why is the main method static?",
      note: [
        {
          text1: `Because the object is not required to call the static method.  
If we make the main method non-static, JVM will have to create its object first and then call main() method which 
will lead to the extra memory allocation. 
You can write the main method in your program without the static modifier, the program gets compiled without 
compilation errors.  
But, at the time of execution JVM does not consider this new method (without static) as the entry point of the 
program.  It searches for the main method which is public, static, with return type void, and a String array as an 
argument. 
If such a method is not found, a run time error is generated. 

<span style="color:red">Error: Main method is not static in class Sample, please define the main method as − public static void main(String[] 
args) </span>`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Can we declare the main () method as final in Java?",
      note: [
        {
          text1: `Yes, we can declare the main () method as final in Java. The compiler does not throw any error. 
• If we declare any method as final by placing the final keyword then that method becomes the final method. 
• The main use of the final method in Java is they are not overridden. 
• We cannot override final methods in subclasses. 
• If we are using inheritance and we need some methods not to overridden in subclasses then we need to 
make it final so that those methods can't be overridden by subclasses. 
• We can access final methods in the subclass but we cannot override final methods.`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Inheritance",
      note: [
        {
          text1: `Inheritance is an Object-Oriented Programming (OOP) concept in Java where one class acquires the properties (variables) and behaviors (methods) of another class using the extends keyword.
          Inheritance means one class can extend to another class. So that the codes can be reused from one class to another 
class. The existing class is known as the Super class whereas the derived class is known as a sub class.
          It allows:
        -> Code reusability
        -> Method overriding
        -> Establishing an "is-a" relationship between classes

        🔹 Simple Definition (Interview Ready)
        Inheritance is the mechanism by which one class (child class) can inherit the properties and methods of another class (parent class) in Java.

        Types of Inheritance in Java:
        1️⃣ Single Inheritance:

        2️⃣ Multilevel Inheritance:

        3️⃣ Hierarchical Inheritance:

        4️⃣ Multiple Inheritance ❌ (Not supported with classes)
          Java does NOT support multiple inheritance with classes to avoid the Diamond Problem (ambiguity)
        
        
        
        In Java, every class <b>implicitly extends</b> the <b>java.lang.Object</b> class if it does not explicitly extend another class. This means that even if you don’t write  <b>extends Object </b>, your class automatically inherits all the methods of  <b>Object</b>, such as:<b> Ex: 5</b>

toString()
equals(Object obj)
hashCode()
getClass()
clone()
finalize()  `,
          code1: `
          1️⃣ Single Inheritance:
class Vehicle {
    void start() {
        System.out.println("Vehicle starts");
    }
}

class Car extends Vehicle {
    void drive() {
        System.out.println("Car drives");
    }
}

public class Main {
    public static void main(String[] args) {
        Car c = new Car();
        c.start();   // inherited method
        c.drive();   // own method
    }
}
// ---Output:-- 
// Vehicle starts
// Car drives


          2️⃣ Multilevel Inheritance:
class Animal {
    void eat() {
        System.out.println("Animal eats");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

class Puppy extends Dog {
    void weep() {
        System.out.println("Puppy weeps");
    }
}

public class Main {
    public static void main(String[] args) {
        Puppy p = new Puppy();
        p.eat();
        p.bark();
        p.weep();
    }
}
// --- Output ----
// Animal eats
// Dog barks
// Puppy weeps



          3️⃣ Hierarchical Inheritance:
// Parent class
class Animal {
    void eat() {
        System.out.println("Animal eats food");
    }
}

// Child class 1
class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks");
    }
}

// Child class 2
class Cat extends Animal {
    void meow() {
        System.out.println("Cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();
        d.bark();

        Cat c = new Cat();
        c.eat();
        c.meow();
    }
}
// ---- Output ---:
// Animal eats food
// Dog barks
// Animal eats food
// Cat meows

//--------------- Ex : 5 ---------------
class MyClass {
    // No explicit extends
}

public class Main {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        System.out.println(obj.toString());  // Inherited from Object
    }
}

`
        }
      ]
    },
    {
      id: 1,
      title: "Can you use this() and super() both in a constructor?",
      note: [
        {
          text1: `No, because this() and super() must be the first statement in the class constructor. 
• this() is used to call default/parameterized constructor of same class. it should be first statement inside 
constructor. 
• super() is used to call default/parameterized constructor of base class. it should be first statement inside 
constructor. 
so this() and super() both are used for constructor call but both want to execute at first. That’s why it'll show 
compiler error like: 
error: call to this must be first statement in constructor this(); or 
error: call to this must be first statement in constructor super(); `,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "super Keyword",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Polymorphism",
      note: [
        {
          text1: `Polymorphism means many forms. 
A single object can refer to the super-class or sub-class depending on the reference type which is called 
polymorphism.`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Method Overriding",
      note: [
        {
          text1: `<b>Method Overriding</b> occurs when a <b>subclass (child class)</b> provides a <b>specific implementation</b> of a method that is already defined in its <b>superclass (parent class)</b>.  
It allows a <b>child class</b> to <b>change or extend</b> the behavior of the <b>parent class method</b>.


<b>Rules for Method Overriding</b>
-> <b>Same Method Signature</b> – The method in the <b>child class</b> must have the <b>same name, return type, and parameters</b> as in the <b>parent class</b>.
-> <b>Inheritance Required</b> – <b>Method overriding</b> happens only in <b>inheritance (child extends parent)</b>.
-> <b>Access Modifier</b> – The <b>access modifier</b> cannot be more restrictive than the <b>parent’s method</b>
-> Example: If <b>parent method</b> is <b>public</b>, <b>child</b> cannot make it <b>private</b> or <b>protected</b>.
-> <b>Return Type</b> – Must be the <b>same</b> or <b>covariant</b> (for objects, <b>child type</b> can override <b>parent type</b>).
-> <b>Cannot Override</b> <b>final</b>, <b>static</b>, or <b>private methods</b>.
-> <b>Annotation @Override</b> – Recommended to use to let the compiler check correctness.

<b>What @Override does</b>
The <b>@Override</b> annotation does <b>not actually make a method overridden</b>.  
The <b>overriding happens</b> simply because the <b>child class method</b> has the <b>same signature</b> as the <b>parent class method</b>.

The @Override annotation is optional, but it helps the compiler check that you are actually overriding a method.
`,
          code1: `// ---------------- Ex ---------------
          // Parent class
class Calc {
    int add(int a, int b) {
        System.out.println("Calc add method");
        return a + b;
    }
}

// Child class
class AdvCalc extends Calc {
    // Overriding add method (no @Override annotation used)
    int add(int a, int b) {
        System.out.println("AdvCalc add method");
        return a + b + 10; // just an example of different behavior
    }
}

// Main class to test
public class DemoCalc {
    public static void main(String[] args) {
        Calc c = new Calc();
        System.out.println("Result from Calc: " + c.add(5, 10));  
        // Output: Calc add method
        // Result from Calc: 15

        AdvCalc ac = new AdvCalc();
        System.out.println("Result from AdvCalc: " + ac.add(5, 10));  
        // Output: AdvCalc add method
        // Result from AdvCalc: 25

        // Runtime polymorphism
        Calc c2 = new AdvCalc();
        System.out.println("Result from Calc reference pointing to AdvCalc: " + c2.add(5, 10));
        // Output: AdvCalc add method
        // Result: 25
    }
}



// ----------- Ex : 2 -----------
// Compile-time check – If you mistakenly change the method signature in the child class, the compiler will give an error.

class Parent {
    void show() {
        System.out.println("Parent show");
    }
}

class Child extends Parent {
    @Override
    void show(int x) { // ❌ Compiler error: method does not override
        System.out.println("Child show");
    }
}

`
        }
      ]
    },
    {
      id: 1,
      title: "Method overloading",
      note: [
        {
          text1: `Method overloading is when a class has multiple methods with the same name but different parameters (different number, type, or order of arguments).
          
          The compiler decides which version to call based on the arguments you pass — this is resolved at <b>compile time</b> (static polymorphism).
          
        <b>Key rules</b>:
-> Parameters must differ (type, count, or order)
-> Return type alone is <b>not enough</b> to overload — it won't compile
-> Access modifiers can vary, but don't affect overloading
`,
          code1: `// -------------- Ex : 1 -------------
          class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }

    //Calling add(1, 2) → uses the first. add(1.5, 2.5) → uses the second. add(1, 2, 3) → uses the third.

    // ------------ Here are some real-world examples of method overloading: ------------
    // ------------ 1. Print/Log System (like System.out.println in Java) ----------
    class Logger {
    void log(String message) { 
        System.out.println("LOG: " + message); 
    }
    void log(String message, int errorCode) { 
        System.out.println("LOG [" + errorCode + "]: " + message); 
    }
    void log(Exception e) { 
        System.out.println("ERROR: " + e.getMessage()); 
    }
}

// Usage
logger.log("Server started");           // simple message
logger.log("Not found", 404);           // with error code
logger.log(new NullPointerException()); // with exception

// ------------- 2. Payment System ---------------
class PaymentService {
    void processPayment(double amount) { 
        // pay in default currency (USD)
    }
    void processPayment(double amount, String currency) { 
        // pay in specific currency
    }
    void processPayment(double amount, String currency, String couponCode) { 
        // pay with discount coupon
    }
}

// Usage
payment.processPayment(100.0);                   // simple payment
payment.processPayment(100.0, "EUR");            // in Euros
payment.processPayment(100.0, "USD", "SAVE20"); // with coupon


// -------------- 3. Search Feature (like Google/e-commerce search) -----------------
class SearchService {
    List<Product> search(String keyword) { 
        // search by name
    }
    List<Product> search(String keyword, String category) { 
        // search within a category
    }
    List<Product> search(String keyword, double minPrice, double maxPrice) { 
        // search with price range
    }
}

// Usage
search.search("shoes");                    // basic search
search.search("shoes", "Sports");          // in sports category
search.search("shoes", 500.0, 2000.0);    // within price range
}`
        }
      ]
    },
    {
      id: 1,
      title: "Packages",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Abstract",
      note: [
        {
          text1: `<b>Abstraction</b> is the process of <b>hiding implementation details</b> and <b>showing only essential functionality</b> to the user.
          
          "Abstraction is the process of hiding implementation details and exposing only essential functionality. In Java, it is achieved using abstract classes and interfaces."
          <b>Abstraction</b> is an OOP principle that hides implementation details and shows only essential features to the user. Java achieves abstraction through abstract classes and interfaces.
          Abstraction reduces complexity, improves maintainability, and enforces design contracts
          
          <b> abstract class </b>
          An abstract class is a class that is declared using the <b>abstract</b> keyword and <b>cannot be instantiated (you cannot create objects of it).</b>
          
          
          <b>Simple Definition (Best for Interview)</b>
An abstract class in Java is a class that cannot be instantiated and is used to achieve abstraction. It can have both abstract methods and non-abstract methods.

It can contain:
-> <b>Abstract methods</b> (methods without body)
-> <b>Concrete methods</b> (methods with implementation)
`,
          code1: ` // -----------------  Ex : 1 -----------
          abstract class Shape {
    String color;

    Shape(String color) {
        this.color = color;
    }

    abstract double area();

    void display() {
        System.out.println("Color: " + color + ", Area: " + area());
    }
}

class Circle extends Shape {
    double radius;

    Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    double width, height;

    Rectangle(String color, double width, double height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    @Override
    double area() {
        return width * height;
    }
}

public class Main {
    public static void main(String[] args) {
        Shape c = new Circle("Red", 5);
        Shape r = new Rectangle("Blue", 4, 6);
        c.display();  // Color: Red, Area: 78.53
        r.display();  // Color: Blue, Area: 24.0
    }
}`
        }
      ]
    },
    {
      id: 1,
      title: "Encapsulation",
      note: [
        {
          text1: `Encapsulation is one of the four core principles of Object-Oriented Programming (OOP). It refers to <b>bundling data (fields) and the methods that operate on that data into a single unit (a class), while restricting direct access to some of the object's components.</b>
          
          Encapsulation in java is a mechanism of wrapping the data(variables) and code acting on the data(members) together as single unit
          Encapsulation is the process of <b>binding data (variables) and methods (functions) together into a single unit (class)</b> and <b>restricting direct access to the data.</b>
          
          <b>🔷 Key Idea</b>
Instead of accessing variables directly, we control access using:
-> private variables
-> public getter and setter methods
👉 This is also called <b>data hiding</b>

🔷 Real-Time Example
Think of a <b>bank account</b>:
You <b>cannot directly access</b> balance
You use methods like:
-> deposit()
-> withdraw()
-> getBalance()
👉 This is encapsulation

<b>🔷 Why Encapsulation is Important</b>
✅ Protects data from unauthorized access
✅ Improves security
✅ Provides control over data (validation)
✅ Makes code maintainable
✅ Supports abstraction

<b>🔷 Interview-Ready Answer</b>
Encapsulation in Java is the process of wrapping data and methods into a single unit, i.e., a class, and restricting direct access to the data using access modifiers. It is achieved using private variables and public getter and setter methods, which helps in data hiding and improves security and maintainability.`,
          code1: `public class BankAccount {
    private double balance;
    private String owner;
    private int transactionCount;

    // Constructor
    public BankAccount(String owner, double initialBalance) {
        this.owner = owner;
        this.balance = initialBalance;
        this.transactionCount = 0;
    }

    // Getters
    public double getBalance()       { return balance; }
    public String getOwner()         { return owner; }
    public int getTransactionCount() { return transactionCount; }

    // Deposit with validation
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            transactionCount++;
            System.out.println("  Deposited: $" + amount);
        } else {
            System.out.println("  Deposit failed: Amount must be positive.");
        }
    }

    // Withdraw with validation
    public void withdraw(double amount) {
        if (amount <= 0) {
            System.out.println("  Withdrawal failed: Amount must be positive.");
        } else if (amount > balance) {
            System.out.println("  Withdrawal failed: Insufficient funds. Balance is $" + balance);
        } else {
            balance -= amount;
            transactionCount++;
            System.out.println("  Withdrawn: $" + amount);
        }
    }

    // Account summary
    public void printSummary() {
        System.out.println("  Owner        : " + owner);
        System.out.println("  Balance      : $" + balance);
        System.out.println("  Transactions : " + transactionCount);
    }

    public static void main(String[] args) {
        System.out.println("========================================");
        System.out.println("       BANK ACCOUNT SIMULATION          ");
        System.out.println("========================================");

        BankAccount account = new BankAccount("Alice", 1000.0);

        System.out.println("\n--- Initial Account Summary ---");
        account.printSummary();

        System.out.println("\n--- Depositing $500 ---");
        account.deposit(500.0);
        System.out.println("  Balance after deposit: $" + account.getBalance());

        System.out.println("\n--- Withdrawing $200 ---");
        account.withdraw(200.0);
        System.out.println("  Balance after withdrawal: $" + account.getBalance());

        System.out.println("\n--- Withdrawing $2000 (more than balance) ---");
        account.withdraw(2000.0);

        System.out.println("\n--- Depositing negative amount ---");
        account.deposit(-100.0);

        System.out.println("\n--- Withdrawing negative amount ---");
        account.withdraw(-50.0);

        System.out.println("\n--- Final Account Summary ---");
        account.printSummary();

        System.out.println("\n--- Encapsulation Demo ---");
        System.out.println("  account.balance       --> ERROR: balance has private access");
        System.out.println("  account.getBalance()  --> $" + account.getBalance());

        System.out.println("========================================");
    }
}
    

//////////////////////////// OUTPUT /////////////////////////////
// ========================================
//        BANK ACCOUNT SIMULATION          
// ========================================

// --- Initial Account Summary ---
//   Owner        : Alice
//   Balance      : $1000.0
//   Transactions : 0

// --- Depositing $500 ---
//   Deposited: $500.0
//   Balance after deposit: $1500.0

// --- Withdrawing $200 ---
//   Withdrawn: $200.0
//   Balance after withdrawal: $1300.0

// --- Withdrawing $2000 (more than balance) ---
//   Withdrawal failed: Insufficient funds. Balance is $1300.0

// --- Depositing negative amount ---
//   Deposit failed: Amount must be positive.

// --- Withdrawing negative amount ---
//   Withdrawal failed: Amount must be positive.

// --- Final Account Summary ---
//   Owner        : Alice
//   Balance      : $1300.0
//   Transactions : 2

// --- Encapsulation Demo ---
//   account.balance       --> ERROR: balance has private access
//   account.getBalance()  --> $1300.0
// ========================================

// === Code Execution Successful ===
`
        }
      ]
    },
    {
      id: 1,
      title: "(Access specifiers) - Access Modifiers",
      note: [
        {
          text1: `Access Modifiers in Java define who <b>can access a class, method, variable, or constructor</b>. They are used for <b>encapsulation (data hiding)</b> and controlling visibility.
          
          Access specifiers (also called access modifiers) control the visibility and accessibility of class members (variables, methods, constructors) in object-oriented programming.
          
        <b>The Three Main Access Specifiers</b>
<b>1. Public</b>
Accessible from anywhere — same class, same package, subclasses, other packages
No restrictions
public int age;
public void display() { }

<b>2. Private</b>
Accessible only within the same class
Not visible to subclasses or other classes
private int salary;
private void calculate() { }

<b>3. Protected</b>
Accessible within the same class, same package, and subclasses (even in other packages)
Protected members are available outside the class.

<b>4. Default (no keyword — package-private)</b>
Accessible only within the same package
Used when no specifier is written
`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Difference between String, String Builder, and String Buffer.",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Difference between Abstract class and Interface.",
      note: [
        {
          text1: `The differences between Abstract Class and Interface are as follows: 
<b>Abstract Class</b>: 
• Abstract classes have a default constructor and it is called whenever the concrete subclass is instantiated. 
• It contains Abstract methods as well as Non-Abstract methods. 
• The class which extends the Abstract class shouldn’t require the implementation of all the methods, only 
Abstract methods need to be implemented in the concrete sub-class. 
• Abstract class contains instance variables. 
<b>Interface</b>: 
• It doesn’t have any constructor and couldn’t be instantiated. 
• The abstract method alone should be declared. 
• Classes that implement the interface should provide the implementation for all the methods. 
• The interface contains only constants.`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Exceptions",
      note: [
        {
          text1: `An exception is an event that disrupts the normal flow of a program during execution. Java has a robust exception-handling mechanism built into the language.

Throwable
├── Error              (JVM errors — don't catch these)
│   &nbsp; &nbsp; &nbsp; ├── OutOfMemoryError
│   &nbsp; &nbsp; &nbsp; └── StackOverflowError
└── Exception
    &nbsp; &nbsp; &nbsp; ├── IOException         (Checked)
    &nbsp; &nbsp; &nbsp; ├── SQLException        (Checked)
    &nbsp; &nbsp; &nbsp; ├── FileNotFoundException (Checked)
    &nbsp; &nbsp; &nbsp; └── RuntimeException    (Unchecked)
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ├── NullPointerException
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ├── ArithmeticException
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ├── ArrayIndexOutOfBoundsException
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; └── IllegalArgumentException


        <b>Checked vs Unchecked Exceptions</b>
<b>Checked Exceptions (Exception) </b>
These are exceptions that the <b>compiler forces you to handle</b>. If you call a method that can throw a checked exception and you don't handle it, your code won't even compile.
Think of it as: The compiler is saying "Hey, something could go wrong here — deal with it!"
----------
// This will NOT compile if you don't handle IOException
public void readFile() {
    FileReader fr = new FileReader("file.txt"); // ❌ Compile error!
}

// You MUST do one of these two things:

// Option 1 — Handle it with try-catch
public void readFile() {
    try {
        FileReader fr = new FileReader("file.txt"); // ✅
    } catch (IOException e) {
        System.out.println("File not found!");
    }
}

// Option 2 — Declare it with throws
public void readFile() throws IOException {
    FileReader fr = new FileReader("file.txt"); // ✅
}
-------------
Common examples: <b> IOException, SQLException, FileNotFoundException </b>


<b>Unchecked Exceptions (RuntimeException)</b>
These are exceptions the <b>compiler does NOT force you to handle</b>. They happen at runtime, usually due to bugs in your logic.
Think of it as: The compiler trusts you — but if your logic is wrong, the program crashes at runtime.
-------------
// This compiles fine ✅ — but CRASHES at runtime ❌
public void example() {
    String name = null;
    System.out.println(name.length()); // NullPointerException at runtime!
}

// Another example
int[] arr = new int[3];
arr[10] = 5; // ArrayIndexOutOfBoundsException — no compile error, crashes at runtime
-------------
Common examples: <b>NullPointerException, ArithmeticException, ArrayIndexOutOfBoundsException, IllegalArgumentException</b>

**** Side-by-side Comparison  *****
// ---- CHECKED ----
public void saveToDatabase(String data) throws SQLException {
    // compiler FORCES you to acknowledge this can fail
    connection.execute(data);
}

// ---- UNCHECKED ----
public void printLength(String s) {
    // compiler says nothing — but crashes if s is null
    System.out.println(s.length());
}

<b>Simple Rule to Remember</b>
<b>Checked</b> = Problems <b>outside your control</b> (file missing, network down, DB unavailable) → compiler forces you to prepare for them.

<b>Unchecked</b> = Problems <b>inside your code</b> (null values, bad index, wrong logic) → your responsibility to write correct code.
                  `,
          code1: `// Basic Syntax
// try-catch-finally
try {
    int result = 10 / 0; // throws ArithmeticException
} catch (ArithmeticException e) {
    System.out.println("Error: " + e.getMessage());
} finally {
    System.out.println("Always runs — good for cleanup");
}

// -----------------  Multi-catch  ----------------
try {
    // risky code
} catch (IOException | SQLException e) {
    System.out.println("Caught: " + e.getMessage());
}

// ----------   try-with-resources (auto-closes resources)  ------------
try (FileReader fr = new FileReader("file.txt")) {
    // use fr — it closes automatically
} catch (IOException e) {
    e.printStackTrace();
}

// ------------- Throwing Exceptions ----------------
public void setAge(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("Age cannot be negative: " + age);
    }
    this.age = age;
}

// ------------- Declaring with \`throws\` --------------
public void readFile(String path) throws IOException {
    FileReader fr = new FileReader(path); // checked exception
}



// ---------------       Custom Exceptions      --------------
// Checked custom exception
public class InsufficientFundsException extends Exception {
    private double amount;

    public InsufficientFundsException(double amount) {
        super("Insufficient funds. Short by: " + amount);
        this.amount = amount;
    }

    public double getAmount() { return amount; }
}

// Usage
public void withdraw(double amount) throws InsufficientFundsException {
    if (amount > balance) {
        throw new InsufficientFundsException(amount - balance);
    }
    balance -= amount;
}
`
        }
      ]
    },
    {
      id: 1,
      title: "Multithreading in Java",
      note: [
        {
          text1: `<b>The Core Idea</b>
Java runs your program in a process. Inside that process, you can have many threads — each thread is an independent path of execution, but they all share the same memory.

Multithreading in Java is a feature that allows a program to execute multiple threads (small units of a process) simultaneously.
<b>🔹 What is a Thread?</b>
A thread is a lightweight sub-process.
It is the smallest unit of execution in a program.
Process (Your Java App)
&nbsp; &nbsp; &nbsp; ├── Thread 1 → handles UI
&nbsp; &nbsp; &nbsp; ├── Thread 2 → downloads file
&nbsp; &nbsp; &nbsp; └── Thread 3 → writes to DB

<b>🔹 Why we use Multithreading?</b>
Better performance
Faster execution
Efficient CPU usage
Non-blocking operations (like UI, API calls)
Parallel execution

<b>🔹 Ways to create a Thread in Java </b>
<b>1. By extending Thread class </b>
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running...");
    }

    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        t1.start(); // starts new thread
    }
}

<b>2. By implementing Runnable interface (preferred)</b>
Why prefer <b>Runnable</b>? Because Java doesn't allow multiple inheritance. If you <b>extend Thread</b>, you can't extend anything else. <b>Runnable</b> keeps your options open.

class MyTask implements Runnable {
    public void run() {
        System.out.println("Runnable thread running...");
    }

    public static void main(String[] args) {
        Thread t1 = new Thread(new MyTask());
        t1.start();
    }
}
    <b>
    NEW → RUNNABLE → RUNNING → (BLOCKED/WAITING) → TERMINATED
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; start()              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;sleep/wait/join
      </b>

<b>🔹 Thread Lifecycle</b>
<b>New</b> → Thread created
<b>Runnable</b> → Ready to run
<b>Running</b> → Executing
<b>Blocked/Waiting</b> → Paused
<b>Terminated</b> → Execution finished

<b>start()</b>	Starts a new thread
<b>run()</b>	Contains task logic
<b>sleep()</b>	Pauses thread
<b>join()</b>	Waits for thread to finish
<b>yield()</b>	Suggests thread pause


If you want, I can also explain:

🔥 
Synchronization in Java (very important)
🔥 
Deadlock, race condition
🔥 
Executor framework (advanced multithreading)
🔥 
Real interview questions with answers
`,
          code1: `// ------------ Two Ways to Create a Thread -------------
// ----------- 1. Extend Thread -----------
class MyThread extends Thread {
    public void run() {
        System.out.println("Running in: " + Thread.currentThread().getName());
    }
}

MyThread t = new MyThread();
t.start(); // DON'T call run() directly — that won't create a new thread


// ------------  2. Implement Runnable ✅ (preferred) ------------
class MyTask implements Runnable {
    public void run() {
        System.out.println("Task running!");
    }
}

Thread t = new Thread(new MyTask());
t.start();
`
        }
      ]
    },
    {
      id: 1,
      title: "Wrapper classes",
      note: [
        {
          text1: `In Java, Wrapper classes are a set of classes that allow you to treat primitive data types (<b>like int, char, boolean</b>) as objects.

Since Java is an object-oriented language, many features (such as Collections like <b>ArrayList, HashMap, or Generics</b>) only work with objects. Wrapper classes bridge the gap between the primitive world and the object world.

Primitive types are <b>not objects</b>, but many Java APIs work only with objects.

For example, Collections Framework (<b>ArrayList, HashMap</b>, etc.) stores objects, not primitives. If you want to store an int in an ArrayList, you need to wrap it in an Integer object.

❌ Invalid:
ArrayList&lt;int&gt; numbers = new ArrayList&lt;&gt;();

✅ Valid:
ArrayList&lt;Integer&gt; numbers = new ArrayList&lt;&gt;();
numbers.add(10);
numbers.add(20);

<b>Key Concepts: Autoboxing and Unboxing</b>
To make working with these classes convenient, Java provides two automatic mechanisms:
    <b>Autoboxing</b>: The automatic conversion of a primitive type into its corresponding wrapper class object.
        &nbsp; &nbsp; => Example: <b>Integer myInt = 10;</b> (The compiler converts 10 to <b>Integer.valueOf(10)</b>).

    <b>Unboxing</b>: The automatic conversion of a wrapper class object back into its corresponding primitive type.
        &nbsp; &nbsp; => Example: <b>int val = myInt;</b> (The compiler converts <b>myInt</b> to <b>myInt.intValue()</b>).

<b>Why Use Wrapper Classes?</b>
    -> <b>Collections Framework</b>: You cannot store primitive types in a List or Set.
       &nbsp; &nbsp; => Example: List&lt;int&gt; list = new ArrayList&lt;&gt;(); will cause a compile-time error. You must use List&lt;Integer&gt; list = new ArrayList&lt;&gt;();.
    -> <b>Utility Methods</b>: Wrapper classes provide helpful static methods to manipulate data.
       &nbsp; &nbsp; => Example: Converting a string to an integer: int num = Integer.parseInt("123");.
    -> <b>Nullability</b>: A primitive type (like int) must have a value (defaults to 0). A wrapper object (like Integer) can be null, which is useful when representing the absence of a value (e.g., in database results).
    -> <b>Synchronization</b>: In multithreading, you can only synchronize on objects, not primitives.



        boolean[] arr1 = new boolean[3];
        Boolean[] arr2 = new Boolean[3];
        System.out.println(arr1[0]);
        System.out.println(arr2[0]);

        <b>The Result</b>
    arr1[0] outputs: false
    arr2[0] outputs: null

<b>Why this happens</b>
<b>1. Primitive Arrays (boolean[])</b>
When you initialize an array of primitive types, Java automatically populates the array with the default value for that type.
    -> For <b>boolean</b>, the default is <b>false</b>.
    -> For numeric types (<b>int, double</b>, etc.), the default is <b>0</b> or <b>0.0</b>.
    -> For <b>char</b>, the default is the null character <b>'\u0000'</b>.
Because <b>arr1</b> holds actual primitive values, it is fully populated with <b>false</b> the moment it is created.

<b>2. Wrapper Class Arrays (Boolean[])</b>
When you initialize an array of objects (which is what a wrapper class array is), Java populates the array with the default reference value, which is null.
    -> The array arr2 does not contain Boolean objects yet; it is simply an array of three empty sots (references) waiting to hold Boolean objects.
    -> Since nothing has been assigned to index 0, it remains null.

Important Caution: The <b>NullPointerException</b>
Because <b>Boolean[]</b> (the wrapper array) defaults to <b>null</b>, you must be careful when unboxing. If you try to perform an operation that triggers unboxing on a null element, your code will crash:


❌ Error:
Boolean[] arr2 = new Boolean[3];
boolean b = arr2[0]; // This will throw a NullPointerException!

✅ Valid:
if (arr2[0] != null && arr2[0]) {
    // Safely perform logic
}

<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Primitive Type</th>
      <th>Wrapper Class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>byte</code></td>
      <td><code>Byte</code></td>
    </tr>
    <tr>
      <td><code>short</code></td>
      <td><code>Short</code></td>
    </tr>
    <tr>
      <td><code>int</code></td>
      <td><code>Integer</code></td>
    </tr>
    <tr>
      <td><code>long</code></td>
      <td><code>Long</code></td>
    </tr>
    <tr>
      <td><code>float</code></td>
      <td><code>Float</code></td>
    </tr>
    <tr>
      <td><code>double</code></td>
      <td><code>Double</code></td>
    </tr>
    <tr>
      <td><code>char</code></td>
      <td><code>Character</code></td>
    </tr>
    <tr>
      <td><code>boolean</code></td>
      <td><code>Boolean</code></td>
    </tr>
  </tbody>
</table>`,
          code1: `// -------------- Ex : 1 -------------
          class Main {
    public static void main(String[] args) {
        boolean[] arr1 = new boolean[3];
        Boolean[] arr2 = new Boolean[3];
        System.out.println(arr1[0]);
        System.out.println(arr2[0]);
    }
}`
        }
      ]
    },
  ]
}




