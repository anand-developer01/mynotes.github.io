const isHighlighted = 'java-notes'
const Links1 = 'java-notes'
const Links2 = 'spring-boot-notes'
const Links3 = 'vue-x'
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
        `,
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


.
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
  ]
}




