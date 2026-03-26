const isHighlighted = 'java-notes'
const Links1 = 'java-notes'
const Links2 = 'spring-boot-notes'
const Links3 = 'java-practice'
const Links4 = 'vue3-projects'

const javaData = {
  javaNote: [
    {
      id: 1,
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
          text1: ``,
          code1: `// ---------- Ex : 1 ---------
           List<String> list = new ArrayList<>();
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
          text1: ``,
          code1: ``
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
      title: "Inheritance",
      note: [
        {
          text1: `Inheritance is an Object-Oriented Programming (OOP) concept in Java where one class acquires the properties (variables) and behaviors (methods) of another class using the extends keyword.
          
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
      title: "Access Modifiers",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
  ]
}




