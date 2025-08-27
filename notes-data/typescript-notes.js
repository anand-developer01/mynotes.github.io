const Links1 = 'typescript-notes'
const Links2 = 'type'
const Links3 = 'typescript-interview'
const Links4 = 'typescript-projects'

const isHighlighted = 'typescript-notes'

const TypeScriptData = {
  TypeScriptNote: [
    {
      id: 1,
      title: "Static vs Dynamic Typing",
      note: [
        {
          text1: `Typing refers to how data and variables are categorized based on their data types like integers, strings, or boolean.  This categorization is crucial as it determines how a programming language handles and manipulates data. There are two categories of typing: static typing and dynamic typing.
          
          <b>Static Typing</b>
Static typing is a typing system where variables are bound to a data type during compilation. Once a variable is assigned a data type it remains unchanged throughout the programs execution. This binding promotes type safety and detects errors at an early stage.

<b>Dynamic Typing</b>
In contrast, dynamic typing allows variables to be bound to data types at runtime instead of during compilation. This flexibility enables concise code and ease of use. It compromises on type safety as a trade-off.
          `,
          code1: ``,
        },
      ]
    },
    {
      id: 1,
      title: "Compile Time vs Runtime:",
      note: [
        {
          text1: `<b>Compile Time</b>
          Compile time refers to the phase when the source code of a program is translated into machine code or bytecode by a compiler. During compilation, the compiler checks for syntax errors, type correctness, and some semantic issues in the code. Languages like Java, C++, and Kotlin undergo extensive compile-time checks, ensuring that potential errors such as type mismatches (e.g., assigning a string to an integer variable) are identified before the program is executed. Compile-time errors prevent the program from being executed until they are fixed, making this phase essential for ensuring code reliability and correctness.
          
          <b>Runtime:</b>
          Runtime occurs when the compiled code is executed by a processor. During this phase, the program interacts with system resources (such as memory and files) and performs computations based on the instructions given in the code. Runtime errors, unlike compile-time errors, occur during program execution and can include exceptions, memory leaks, and logical errors. Languages like Python and JavaScript, which are dynamically typed, may catch some errors at runtime due to their nature of evaluating types and expressions during execution
          
          <b>Key Differences:</b>
<b>Timing</b>: Compile time occurs before the program is run, allowing for early detection of syntax and type errors. Runtime occurs during program execution.
<b>Error Handling</b>: Compile-time errors are caught by the compiler and must be fixed before the program runs. Runtime errors, on the other hand, occur while the program is running and can cause unexpected behavior or terminate the program.
`,
          code1: `//Example of a Compile-Time Error in Java:
          public class CompileTimeError {
    public static void main(String[] args) {
        int x = "hello"; // This will cause a compile-time error because "hello" is a String, not an int
    }
}`,
        },
      ]
    },
    {
      id: 1,
      title: "TypeScript",
      note: [
        {
          text1: `TypeScript adds static typing with optional type annotations to JavaScript.
  
            TypeScript is an open-source pure object-oriented programing language. It is a strongly typed superset of JavaScript which compiles to plain JavaScript. It contains all elements of the JavaScript. It is a language designed for large-scale JavaScript application development, which can be executed on any browser, any Host, and any Operating System. The TypeScript is a language as well as a set of tools. TypeScript is the ES6 version of JavaScript with some additional features.
  
            (OR)
            It just allows you to write JavasScript code in a more readable way. so your code faces a lot less error in the runtime. if there is any error, it is alreay being displayed to you.
  
            TypeScript is a superset of JavaScript, meaning that it does everything that JavaScript does, but with some added features.
  
            The main reason for using TypeScript is to add static typing to JavaScript. Static typing means that the type of a variable cannot be changed at any point in a program. It can prevent a LOT of bugs!
  
            JavaScript is a dynamically typed language, meaning variables can change type.
  
            <b>JavaScript and More</b>:
            TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.
  
            <b>A Result You Can Trust</b>:
            TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps.
  
            <b>Safety at Scale</b>:
            TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.
            `,
          code1: ``,
        }
      ]
    },
    {
      id: 1,
      title: "We use TypeScript because of the following benefits.",
      note: [
        {
          text1: `-> TypeScript supports Static typing, Strongly type, Modules, Optional Parameters, etc.
  -> TypeScript supports object-oriented programming features such as classes, interfaces, inheritance, generics, etc.
  -> TypeScript is fast, simple, and most importantly, easy to learn.
  -> TypeScript provides the error-checking feature at compilation time. It will compile the code, and if any error found, then it highlighted the mistakes before the script is run.
  -> TypeScript supports all JavaScript libraries because it is the superset of JavaScript.
  -> TypeScript support reusability because of the inheritance.
  -> TypeScript make app development quick and easy as possible, and the tooling support of TypeScript gives us autocompletion, type checking, and source documentation.
  -> TypeScript has a definition file with .d.ts extension to provide a definition for external JavaScript libraries.
  -> TypeScript supports the latest JavaScript features, including ECMAScript 2015.
  -> TypeScript gives all the benefits of ES6 plus more productivity.
  -> Developers can save a lot of time with TypeScript.
  `,
          code1: ``,
        }
      ]
    },
    {
      id: 1,
      title: "Why you should use TypeScript",
      note: [
        {
          text1: ` > Research has shown that TypeScript can spot 15% of common bugs.
            > Readability – it is easier to see what the code it supposed to do. And when working in a team, it is easier to see what the other developers intended to.
            > It's popular – knowing TypeScript will enable you to apply to more good jobs.
            > Learning TypeScript will give you a better understanding, and a new perspective, on JavaScript.
            Here's a short article I wrote demonstrating how TypeScript can prevent irritating bugs.
            `,
          code1: ``,
        }
      ]
    },
    {
      id: 1,
      title: "Drawbacks of TypeScript",
      note: [
        {
          text1: `> TypeScript takes longer to write than JavaScript, as you have to specify types, so for smaller solo projects it might not be worth using it.
  > TypeScript has to be compiled – which can take time, especially in larger projects.`,
          code1: ``,
        }
      ]
    },
    {
      id: 1,
      title: "Types in TypeScript",
      note: [
        {
          text1: `<b>Primitive types</b>
            In JavaScript, a primitive value is data that is not an object and has no methods. There are 7 primitive data types:
Primitives in JavaScript <b>(string, number, boolean, null, undefined, bigint, symbol)</b> are <b>immutable</b>, meaning their values <b>cannot be changed once created</b>.

However, <b>variables holding primitives can be reassigned</b>, but this does not change the original primitive—it simply creates a new value and updates the reference.
            <b>Primitives are immutable</b>: they can't be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can't be changed in the ways that objects, arrays, and functions can be altered.
All primitives are <u>immutable</u>; that is, they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned to a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

           <b> Final Thoughts</b>
✔ <b>Primitives (string, number, boolean, etc.) are immutable</b> —modifying them creates a new value.
✔ <b>Objects and arrays are mutable</b> —modifying them changes the original reference.
✔ <b>Variables can be reassigned</b>, but the primitive values themselves do not change.

        <table data-start="2984" data-end="3464">
            <thead data-start="2984" data-end="3038">
                <tr data-start="2984" data-end="3038">
                    <th data-start="2984" data-end="3005"><strong data-start="2986" data-end="3004">Primitive
                            Type</strong></th>
                    <th data-start="3005" data-end="3019"><strong data-start="3007" data-end="3018">Example</strong>
                    </th>
                    <th data-start="3019" data-end="3038"><strong data-start="3021" data-end="3036">Description</strong>
                    </th>
                </tr>
            </thead>
            <tbody data-start="3090" data-end="3464">
                <tr data-start="3090" data-end="3140">
                    <td><strong data-start="3092" data-end="3103">Boolean</strong></td>
                    <td><code data-start="3106" data-end="3112">true</code>, <code data-start="3114"
                            data-end="3121">false</code></td>
                    <td>Logical values</td>
                </tr>
                <tr data-start="3141" data-end="3203">
                    <td><strong data-start="3143" data-end="3153">Number</strong></td>
                    <td><code data-start="3156" data-end="3160">42</code>, <code data-start="3162"
                            data-end="3168">3.14</code></td>
                    <td>Whole &amp; floating-point numbers</td>
                </tr>
                <tr data-start="3204" data-end="3242">
                    <td><strong data-start="3206" data-end="3216">String</strong></td>
                    <td><code data-start="3219" data-end="3228">"Hello"</code></td>
                    <td>Text data</td>
                </tr>
                <tr data-start="3243" data-end="3301">
                    <td><strong data-start="3245" data-end="3255">BigInt</strong></td>
                    <td><code data-start="3258" data-end="3277">9007199254740991n</code></td>
                    <td>whole numbers and floating point values, but allows larger negative and positive numbers than the <u>number</u> type. (Large whole numbers)</td>
                </tr>
                <tr data-start="3302" data-end="3354">
                    <td><strong data-start="3304" data-end="3314">Symbol</strong></td>
                    <td><code data-start="3317" data-end="3331">Symbol("id")</code></td>
                    <td>Unique identifiers</td>
                </tr>
                <tr data-start="3355" data-end="3395">
                    <td><strong data-start="3357" data-end="3365">Null</strong></td>
                    <td><code data-start="3368" data-end="3374">null</code></td>
                    <td>Absence of value</td>
                </tr>
                <tr data-start="3396" data-end="3464">
                    <td><strong data-start="3398" data-end="3411">Undefined</strong></td>
                    <td><code data-start="3414" data-end="3425">undefined</code></td>
                    <td>Variable declared but not assigned</td>
                </tr>
            </tbody>
        </table>
            `,
          code1: `//✅ 1️⃣ Primitive Values Are Immutable
let message = "Hello";
message[0] = "Y"; // ❌ This won't change "Hello" to "Yello"
console.log(message); // Output: "Hello"
// 🔹 Even though we tried to modify message[0], the string remains unchanged because strings are immutable.


// ---- ✅ 2️⃣ Variables Holding Primitives Can Be Reassigned ----
let name = "John";
name = "Doe"; // ✅ Reassigning the variable to a new string
console.log(name); // Output: "Doe"
// 🔹 The original "John" string is not modified—instead, a new string ("Doe") is created, and name is updated to refer to it.

// --- ✅ 3️⃣ Objects and Arrays Are Mutable ----
// Unlike primitives, objects and arrays are mutable, meaning their contents can be changed.
let person = { name: "Alice" };
person.name = "Bob"; // ✅ Changing object property
console.log(person.name); // Output: "Bob"
// 🔹 The object itself is modified, not reassigned.


// --- ✅ 4️⃣ Example: Primitive vs. Object Mutation ---
// Primitive (Immutable)
let a = "Hello";
let b = a; // Copy value (creates a new string)
b = "World";
console.log(a); // Output: "Hello" (original remains unchanged)
// Object (Mutable)
let obj1 = { greeting: "Hello" };
let obj2 = obj1; // Copy reference (points to the same object)
obj2.greeting = "World";
console.log(obj1.greeting); // Output: "World" (original object is modified)

//--------------
            let name = 'Danny';
            name.toLowerCase();
            console.log(name); // Danny - the string method didn't mutate the string
  
            let arr = [1, 3, 5, 7];
            arr.pop();
            console.log(arr); // [1, 3, 5] - the array method mutated the array
            // name = 'Anna' // Assignment gives the primitive a new (not a mutated) value
            `,
        }
      ]
    },
    {
      id: 1,
      title: "TypeScript Arrays",
      note: [
        {
          text1: `To specify the type of an array like <u>[1, 2, 3]</u>, you can use the syntax <u>number[]</u>; this syntax works for any type (e.g. <u>string[]</u> is an array of strings, and so on). You may also see this written as <u>Array&lt;number&gt;</u>, which means the same thing. We'll learn more about the syntax <u>T&lt;U&gt;</u> when we cover generics.`,
          code1: `// below userArr is empty array it should always empty
// const userArr : [] = []

// below one is string array
const arrString : string[] = []
arrString.push('ram')
console.log(arrString) // Output: [ 'ram' ]


// below one is number array
const ArrNumber : number[] = []
ArrNumber.push(45)
console.log(ArrNumber) // Output: [ 45 ]


// array of objects
type User = {
  username : string;
  isActive : boolean
}

let allUsers : User[] = []

allUsers.push({
  username : 'ram',
  isActive : false
})
console.log(allUsers)


// an array of arrays
const arr : number[][] = [
  [4,6,7],[4,8,9]]
  console.log(arr)
`,
        },
        {
          text1: `<b>Array&lt;T&gt; vs T[]:</b>
          When you're declaring an array type in TypeScript, you've got one of two options: Array&lt;T&gt; or T[].
          <b>Array&lt;T&gt;</b> and <b>T[]</b> are functionally identical in your code.
          
          
          Dominik argues that <b>Array&lt;string&gt;</b> is more readable than <b>string[]</b>. This is subjective - it's like the difference between reading "array of strings" or "string array".

When hovering values or displaying errors, TypeScript uses the <b>T[]</b> syntax. Inexperienced TS devs might experience cognitive load when translating between <b>Array&lt;T&gt;</b> in their code and <b>T[]</b> in their errors.

const array = [1, 2];
const array: number[]

Overall, I disagree with Dominik that <b>Array&lt;T&gt;</b> is always the better choice. There are enough caveats to either approach that I won't be making a recommendation one way or the other.
But - you should be consistent. You can use this ESLint rule to enforce one or the other in your codebase. And if I had to choose, I would choose T[].



In TypeScript, both <u>Array&lt;T&gt;</u> and <u>T[]</u> are ways to represent <b>arrays of a specific type</b>. They are semantically equivalent in most cases, but there are some subtle differences in terms of usage and readability. Let's break down both notations:

<b>1. Array&lt;T&gt;</b>:
This syntax uses <b>generics</b> to define the type of elements in the array. It's a more explicit, generic form that can be useful when you're working with advanced type manipulations, especially when the array type is a part of more complex types.
Example:

let numbers: Array<number> = [1, 2, 3, 4];
let strings: Array<string> = ["hello", "world"];

    <u>Array&lt;T&gt;</u> is a generic type that works in the same way as <u>T[]</u>.
    The <u>T</u> inside the angle brackets <u>&lt;T&gt;</u> refers to the type of elements in the array.

<b>Benefits</b>:
    <b>Clarity with Complex Types</b>: In some cases, especially with more complex generic types, <u>Array&lt;T&gt;</u> may look cleaner and more readable. For example, <u>Array&lt;T&gt;</u> makes it explicit that you're working with a <b>generic array type</b>.

<b>2. T[]</b>:
This is the <b>array shorthand</b> syntax in TypeScript. It's a simpler, more concise way to define an array of type <u>T</u>. This is often preferred for readability when you're just working with basic types and array operations.
Example:

let numbers: number[] = [1, 2, 3, 4];
let strings: string[] = ["hello", "world"];

    <u>T[]</u> is the shorthand for <u>Array&lt;T&gt;</u> and is typically used when you want to define an array of type <u>T</u>.

Benefits:
    <b>Concise</b>: It's simpler and more compact, making it easier to read and write in most cases.
    <b>Common Usage</b>: This is the most commonly used syntax when working with arrays.

<b>Key Differences</b>:
    <b>1) Syntax and Readability</b>:
        => <u>T[]</u> is shorter and more concise, which is why it's generally preferred when defining simple arrays.
        => <u>Array&lt;T&gt;</u> is a bit more verbose but can be useful in situations where you're working with more complex generics or want to explicitly indicate that you're working with a <b>generic array type</b>.

    <b>2) Use in Complex Generics</b>:
        <u>Array&lt;T&gt;</u> can be more suitable when combined with other generic types or when working with complex type manipulations. For example:

interface MyArray&lt;T&gt; {
  values: Array&lt;T&gt;;
  count: number;
}

<u>T[]</u> can sometimes be less expressive in such cases because it doesn't provide the same clarity when working with multiple levels of generics.

<b>3) Array Methods and Constructor Signatures</b>:
    When using <u>Array&lt;T&gt;</u>, you can also use the <u>Array</u> constructor:
const arr: Array<number> = new Array(5);  // Creates an array of length 5
The <u>T[]</u> syntax doesn't directly support this kind of usage.
`,
          code1: `const firstTest = (arr: Array<string>) => {};

const secondTest = (arr: string[]) => {};

// Both behave the same!
firstTest(["hello", "world"]);
secondTest(["hello", "world"]);

//------------- Ex : 2 ------------

// Using keyof with T[] can lead to unexpected results.
type Person = {
  id: string;
  name: string;
};

const result: keyof Person[] = ["id", "name"];
// Type 'string[]' is not assignable to type 'keyof Person[]'. OR Type 'string[]' is not assignable to type '"reduceRight"'.

// The fix is to use Array&lt;T&gt; instead:
const result: Array&lt;keyof Person&gt; = ["id", "name"];



//-------------- Ex :3 -------------
// Comparison Between Array&lt;T&gt; and T[]
// Let's take a look at how both notations behave in a simple function:

// Using T[]:
function printArray1(arr: number[]): void {
  arr.forEach((item) => console.log(item));
}

// Using Array&lt;T&gt;:
function printArray2(arr: Array<number>): void {
  arr.forEach((item) => console.log(item));
}

const nums = [1, 2, 3, 4];

printArray1(nums);  // Output: 1, 2, 3, 4
printArray2(nums);  // Output: 1, 2, 3, 4

// Both of these functions behave the same, and both T[] and Array&lt;T&gt; will work interchangeably when defining the array types.
`,
        },
        {
          text1: ``,
          code1: ``,
        },
      ]
    },
    {
      id: 1,
      title: "Tuple",
      note: [
        {
          text1: `Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a <b>string</b> and a <b>number</b>:
          
          A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
          
          We know that an array holds multiple values of the same data type. But sometimes, we may need to store a collection of values of different data types in a single variable. Arrays will not provide this feature, but TypeScript has a data type called Tuple to achieve this purpose. A Tuple is an array which store multiple fields belong to different data types. It is similar to the structures in the C programming language.
          
          In TypeScript, tuples are a special type of array that allows you to store a fixed number of elements, where each element can have a different type. They are useful when you need to represent a collection of elements with a known, fixed length and where each element has a specific type.`,

          code1: `type StringNumberPair = [string, number];
          // A tuple is defined using square brackets [], with each element having its own type:
let tuple: [string, number, boolean] = ['Hello', 42, true];
          `,
        },
        {
          text1: ``,
          code1: ``,
        },
        {
          text1: ``,
          code1: ``,
        },
      ]
    },
    {
      id: 1,
      title: "Static Typing",
      note: [
        {
          text1: `
            Static Typing: TypeScript allows developers to specify types for variables, function parameters, return types, and more. This enables catching type-related errors during development and provides better tooling support for code editors and IDEs.
  
            static typing to JavaScript. Static typing means that the type of a variable cannot be changed at any point in a program. It can prevent a LOT of bugs!
  
            Static Typing allows for catching type-related errors at compile time. It provides an automatic way to verify the type safety and correctness of your application during the development stage
  
            JavaScript is a dynamically typed language. While this makes it very flexible, it also can cause issues.
  
            In contrast, TypeScript's static types mean variables, objects, and functions are predictable and limited to a specific type (or types).

            Static typing is a programming language feature that allows developers to define data types for variables, function parameters, and function return types at compile time. Static typing helps catch errors early in the development cycle and improves code quality by making code more self-documenting.
            `,
          code1: ``,
        }
      ]
    },
    {
      id: 1,
      title: "Type Annotations:",
      note: [
        {
          text1: `<a href="https://www.freecodecamp.org/news/basic-typescript-types/#:~:text=Type%20annotation%20in%20TypeScript%20involves,improves%20code%20quality%20and%20maintainability." target="_blank">Type Annotations</a>
          Type annotations are a crucial concept in TypeScript. They allow developers to specify the data types of variables, function parameters, and return types. This can help catch errors during development and improve code readability.
          
          Type annotation in TypeScript involves explicitly specifying the data type of variables, function parameters, and return values. This annotation enhances code clarity and enables TypeScript's static type checking to catch errors during compilation. This improves code quality and maintainability.

In TypeScript, type annotations are written using a colon (:) followed by the desired type. Let's explore how type annotations are applied in TypeScript basic types:`,

          code1: ``,
        },
        {
          text1: ``,
          code1: ``,
        },
        {
          text1: ``,
          code1: ``,
        },
      ]
    },
    {
      id: 1,
      title: "Interfaces:",
      note: [
        {
          text1: `Interfaces are used to define the structure of an object. They specify the names and types of the object's properties and can be used to enforce consistency across multiple objects.
  
  Interfaces are a feature of TypeScript that allows us to define the structure or shape of an object and specify the properties and methods that an object has or should have. Their primary function is type checking and aiding developers in catching type-related errors during development.
  
  Interfaces are a feature of TypeScript that allows us to define the structure or shape of an object and specify the properties and methods that an object has or should have. Their primary function is type checking and aiding developers in catching type-related errors during development.
  `,
          code1: `// Syntax :
            interface InterfaceName {
    property1: type;
    property2: type;
    // Additional properties and methods can be defined here
}

//--------------

            interface Person {
              name: string;
              age: number;
              sex: "male" | "female";
            }
  
            const personOne: Person = {
              name: "Coner",
              age: 24,
              sex: "male",
            }
  
            console.log(personOne.name); // Coner
            // 👇 Property 'hobbies' does not exist on type 'Person'
            console.log(personOne.hobbies); // undefined
  
            // We also can see an example of us trying to access a property that doesn't exist in the interface by running "console.log(personOne.hobbies)", therefore throwing a type error.
  
            // -------------------
            interface Shape {
              name: string;
              color: string;
              area(): number;
            }
  
            // Define a function to calculate the area of a shape
            function calculateArea(shape: Shape): void {
              console.log('Calculating area of \${shape.name}...');
              console.log('Area: \${shape.area()}');
            }
  
            // Define a circle object
            const circle: Shape = {
              name: "Circle",
              color: "Red",
              area() {
                return Math.PI * 2 * 2;
              },
            };
  
            // Calculate and log the area of the circle
            calculateArea(circle);

            //----------------------

            function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}
 
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

//---using interface
interface LabeledValue {
  label: string;
}
 
function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}
 
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
            `,
        },
        {
          text1: `<b>Type checking</b>
The first benefit of interfaces is the most obvious one: they highlight any possible type errors and issues in our code to prevent us from accessing any properties that might not exist. This, in turn, helps us reduce runtime errors and prevent bugs from being created.

<b>Contract definition</b>
Another benefit of interfaces is that they define and create clear contracts for the functions and code that consume them. They prevent us from consuming methods and properties that don't exist and help ensure we stay within the established structure defined for the object that the interface is describing.

<b>Documentation and readability</b>
Because interfaces define the properties and methods that exist on an object as well as their types, they act as a form of documentation that enhances the code readability and helps developers reading the code understand how it works and how the code fits together.

<b>Reusability</b>
Since interfaces can always be extended and reused in various places, they promote code reusability and help reduce duplication. By defining central, common interfaces that can be reused and extended throughout an application, you can ensure consistency in your code and logic.

<b>Code navigation and autocompletion</b>
IDEs that integrate with TypeScript can read the interfaces you define and offer autocompletion suggestions from them, as well as help with code navigation to make you a more productive and efficient developer.

<b>Easier refactoring</b>
Finally, interfaces help make refactoring easier because you're able to update the implementation of a piece of code or logic, and as long as it adheres to the same interface, other code that depends on the changed logic shouldn't be impacted.


Here are a few key reasons why working with TypeScript interfaces is recommended within the community:
<b> Type checking</b>: Interfaces enable static type checking, catching errors at compile-time rather than runtime
<b> Source code readability</b>: Interfaces serve as clear documentation for the expected structure of the objects within your source files. You can also use interfaces to describe functions and classes
<b> Reusability</b>: Interfaces can be reused across different parts of your application, ensuring consistency across your codebase
<b> Extendability</b>: Interfaces are extendable in the sense that you can combine them, allowing a composition of complex types
`,
          code1: ``,
        },
        {
          text1: `<b>Function types</b>
In addition to defining the types of objects, we can also use interfaces to type functions, their return values, and their arguments. For example, we can do something like this.`,
          code1: `
            
            // ------ Ex : 2 -----------
            interface User {
  name: string;
  age: number;
  estAdmin: boolean;
}

function createUser(data: User): User & { creationDate: Date } {
  return {
    ...data,
    creationDate: new Date(),
  };
}

const uu:User = {
    name: "ram",
  age: 45,
  estAdmin: false
}
console.log(createUser(uu))


// Output:
// {
//   name: 'ram',
//   age: 45,
//   estAdmin: false,
//   creationDate: 2025-01-03T13:14:25.844Z
// }
  `,
        },
        {
          text1: `<b>Classes</b>
TypeScript has native support for the class keyword that was implemented in ES2015. You can define a class as well as its fields and methods like this.

class Person {
  name: string = '';
  age: number = 0;
}

const me = new Person();
console.log(me)

But, we can combine these class definitions with interfaces to make sure the class correctly implements all of the properties defined on the interface like so.

In below example, we have an interface called <u>PersonInt</u> and use the <u>implements</u> keyword to say the class <u>Person</u> will have all of the types defined in <u>PersonInt</u>. Because this isn't true and the <u>age</u> field is missing in the class, an error is thrown.
`,
          code1: `interface PersonInt {
  name: string;
  age?: number;
}

// Class 'Person' incorrectly implements interface 'PersonInt'.
// Property 'age' is missing in type 'Person' but required in type 'PersonInt'
class Person implements PersonInt {
  name: string = 'ram';
}

const me = new Person();

console.log(me)`,
        },
        {
          text1: `<a href="https://medium.com/@jeffbutsch/typescript-interface-functions-c691a108e3f1" target="_blank">interface with function in typescript</a>
          <a href="https://www.scaler.com/topics/typescript/function-interface-in-typescript/" target="_blank">interface with function in typescript</a>
          
          `,
          code1: `interface interface_name
{
(variable1, variable2): return type;
};


//----------Ex : 1---------
interface getUser {
  (id:number, name:string) : string
}

let uname : getUser = function(id:number, name: string){ 
  return \`\${id} \${name}\` 
}

console.log(uname(1,"ram"))

//------------Ex : 2--------
interface getUser {
  (id:number, name:string) : [number, string]
}

let uname : getUser = function(id:number, name: string){ 
  return [id, name] 
}

console.log(uname(1,"ram"))
`,
        },
        {
          text1: ``,
          code1: ``,
        },
        {
          text1: ``,
          code1: ``,
        },
        {
          text1: ``,
          code1: ``,
        },
      ]
    },
    {
      id: 1,
      title: "Type Aliases",
      note: [
        {
          text1: `Type aliases in TypeScript offer a streamlined approach to defining custom names for existing types, thereby bolstering code clarity and maintainability
          
          In TypeScript, a type alias allows you to assign a custom name to an existing type, enhancing code readability and reusability.
-> Provide a shorthand for complex types like unions or objects.
-> Allow naming of primitive types, object types, or functions for clarity.
-> Simplify repetitive type definitions and improve maintainability.
`,
          code1: `type Point = {
    x: number;
    y: number;
};

type Shape = "circle" | "square" | "rectangle";

function drawShape(shape: Shape, position: Point): void {
    console.log(\`Drawing a \shape} at (\position.x}, \position.y})\`);
}

drawShape("circle", { x: 10, y: 20 });

// ---------- Ex : 2 -----------
// Alias for User ID
type UserID = number;

// Usage
function getUserByID(id: UserID): User {
    // Implementation to fetch user by ID
    console.log("Fetching user with ID:", id);
    return {} as User; // Dummy return for demonstration
}

// Test
const user = getUserByID(123);
console.log("Fetched user:", user);

// How to use the Math Operation Alias
// Alias for MathOperation
type MathOperation = (x: number, y: number) => number;

// Usage
const add: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x - y;

// Test
console.log("Addition result:", add(5, 3));
console.log("Subtraction result:", subtract(8, 3));

Defining a User Profile with Type Aliases

type UserProfile = {
    username: string;
    email: string;
    age: number;
};

const user: UserProfile = {
    username: "Akshit Saxena",
    email: "akshit.saxena@geeksforgeeks.com",
    age: 24,
};

function greetUser(profile: UserProfile): string {
    return \`Hello, \${profile.username}! 
    You are \${profile.age} years old. 
    Your email is \${profile.email}.\`;
}

console.log(greetUser(user));

// ------------  Example with Objects ------
type User = {
  id: number;
  name: string;
  email?: string;
};

const u1: User = { id: 1, name: "Anand" };
const u2: User = { id: 2, name: "Rahul", email: "rahul@mail.com" };

//----------Type Alias for Tuples
type Point = [number, number];
const p1: Point = [10, 20];

// --------- Union Types
type Status = "success" | "error" | "loading";

let current: Status;
current = "success"; // ✅
// current = "pending"; ❌ Error


//------------- Intersection Types
type Person = { name: string };
type Employee = { id: number };

type Staff = Person & Employee;

const emp: Staff = { name: "Anand", id: 101 };



//----------- Utility with Generics
type ApiResponse&lt;T&gt; = {
  data: T;
  error?: string;
};

const res: ApiResponse&lt;string[]&gt; = {
  data: [&quot;post1&quot;, &quot;post2&quot;]
};


//------------ Real-World Example

type ID = number | string;

type User = {
  id: ID;
  name: string;
  email?: string;
};

type ApiResponse&lt;T&gt; = {
  status: &quot;success&quot; | &quot;error&quot;;
  data?: T;
  error?: string;
};

const response: ApiResponse&lt;User[]&gt; = {
  status: &quot;success&quot;,
  data: [{ id: 1, name: &quot;Anand&quot; }]
};


`,
        },
      ]
    },
        {
      id: 1,
      title: "interface and type",
      note: [
        {
          text1: `<b>Extension / Inheritance</b>
Interface → extendable via <b>extends</b> (declaration merging possible).
Type → extendable via intersection <b>&</b>, but no declaration merging.
Both achieve inheritance, but <b>interfaces are better for OOP-like hierarchies.</b>


<b>Declaration Merging</b>
<b>Interface</b> → can be declared multiple times, TypeScript merges them.
<b>Type</b> → cannot be redeclared.

<b>Union & Advanced Types</b>
Type can do unions, intersections, primitives, tuples, etc.
Interface cannot.

<b>Performance & Readability</b>
<b>Interface</b> is preferred for defining objects and class contracts.
<b>Type</b> is preferred for complex compositions like unions, mapped types, tuples, etc.

<b>When to Use What</b>
✅ Use <b>interface</b> when designing object shapes, especially for <b>OOP / class-based patterns</b>.
✅ Use <b>type</b> when working with <b>unions, intersections, primitives, or complex compositions</b>.
`,
          code1: ` //----------- Extension / Inheritance
          // Interface extends
interface Animal {
  name: string;
}
interface Dog extends Animal {
  bark(): void;
}

// Type intersection
type AnimalType = { name: string };
type DogType = AnimalType & { bark(): void };

// ------------ Declaration Merging
// - interface -
interface User {
  name: string;
}
interface User {
  age: number;
}
const u: User = { name: "Anand", age: 30 }; // ✅ Works

// - type -
// ❌ Error with type
type UserType = { name: string };
// type UserType = { age: number }; // Cannot redeclare

// ---------- Union & Advanced Types
// Using type
type ID = string | number;
type Point = [number, number];

// Interface ❌ can't define union or tuple
// Interfaces cannot directly define unions like this:
interface Status = "success" | "error" | "loading"; // ❌ ERROR

`
        },
      ]
    },
    {
      id: 1,
      title: "Optional Properties",
      note: [
        {
          text1: ` Not all properties of an interface may be required. Some exist under certain conditions or may not be there at all. These optional properties are popular when creating patterns like “option bags” where you pass an object to a function that only has a couple of properties filled in.
  
   Interfaces with optional properties are written similar to other interfaces, with each optional property denoted by a ? at the end of the property name in the declaration.`,
          code1: `
            interface SquareConfig {
              color?: string;
              width?: number;
            }
  
            function createSquare(config: SquareConfig): { color: string; area: number } {
              let newSquare = { color: "white", area: 100 };
              if (config.color) {
                newSquare.color = config.color;
              }
              if (config.width) {
                newSquare.area = config.width * config.width;
              }
              return newSquare;
            }
  
            let mySquare = createSquare({ color: "black" });
            `,
        },
      ]
    },
    {
      id: 1,
      title: "What is readonly?",
      note: [
        {
          text1: `The readonly keyword in TypeScript is used to indicate that a property or variable cannot be modified after it has been initialized. This means that the value of the property or variable cannot be changed once it has been set.
  
  
  `,
          code1: `
            interface Point {
    readonly x: number;
    readonly y: number;
  }
  
  let p1: Point = { x: 10, y: 20 };
  p1.x = 5; // error!
  Cannot assign to 'x' because it is a read-only property.
  `,
        },
        {
          text1: `
  <b> ReadonlyArray&lt;T&gt; </b>
  TypeScript comes with a ReadonlyArray&lt;T&gt; type that is the same as Array&lt;T&gt; with all mutating methods removed, so you can make sure you don't change your arrays after creation:`,
          code1: `
  let a: number[] = [1, 2, 3, 4];
  let ro: ReadonlyArray<number> = a;
  
  ro[0] = 12; // error!
  // Index signature in type 'readonly number[]' only permits reading.
  ro.push(5); // error!
  // Property 'push' does not exist on type 'readonly number[]'.
  ro.length = 100; // error!
  // Cannot assign to 'length' because it is a read-only property.
  a = ro; // error!
  // The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
  `,
        },
        {
          text1: ``,
          code1: ``,
        },
      ]
    },
    {
      id: 1,
      title: "Index signatures",
      note: [
        {
          text1: `<a href="https://www.scaler.com/topics/typescript/index-signatures-in-typescript/" target="_blank">index-signatures-in-typescript</a>
          <b>Index signatures</b>
There might be a time when you know the shape of your object, but you don't know the actual properties of it. Or, the properties might change, but the shape will remain consistent. In these situations, it's not practical or potentially possible to type every single property on the interface. To to get around this, we can use index signatures.

<b>What is Index Signature? </b>
Index signature is used to represent the type of object/dictionary when the values of the object are of consistent types.

In TypeScript, an index signature allows you to define the type of keys and the type of values that can be accessed dynamically on an object. This is useful when you don't know the names of the properties ahead of time but you do know what the structure of the object should be (i.e., what type the keys and values should have).


<b>Bracket Notation Property Accessor in Javascript</b>
The Bracket Notation approach involves using square brackets, in which you have an expression that evaluates to a value. That value serves as a key for accessing the property. Here's the syntax:

//---------------
object[expression]
const obj = {
  name: "deeecode",
  age: 80,
  language: "javascript",
}
const target = obj["name"]
// deeecode
//---------------

An <u>Object</u> in JavaScript (and hence TypeScript) can be accessed with a <b>string</b> to hold a reference to any other JavaScript <b>object</b>.

Here is a quick example:
let foo: any = {};
foo['Hello'] = 'World';
console.log(foo['Hello']); // World
`,
          code1: `// --- Syntax ---
            interface MyObject {
  [key: string]: number;
}

//--------- Ex : 1 -----
            interface User {
[index:string]:string | number
  id : number
  name: string
  area: string
}

const userDetails : User = {
    id : 1,
    name: "ram",
    area: "warangal"
}

let idexName:string = 'name'
let idexId:string = 'id'


console.log(userDetails[idexName])
console.log(userDetails[idexId])`,
        },
        {
          text1: ``,
          code1: ``,
        },
        {
          text1: `How would you annotate <u>salaryObject</u> parameter of <u>totalSalary()</u> function to accept objects with key as string and value as number?

The answer is to use an index signature!
Let's find what are TypeScript index signatures and when they're needed.`,
          code1: `//You have 2 objects that describe the salary of 2 software developers:
const salary1 = {
  baseSalary: 100_000,
  yearlyBonus: 20_000
};

const salary2 = {
  contractSalary: 110_000
};


// You want to implement a function that returns the total remuneration based on the salary object:
function totalSalary(salaryObject: ???) {
  let total = 0;
  for (const name in salaryObject) {
    total += salaryObject[name];
  }
  return total;
}

console.log(totalSalary(salary1)); // => 120_000
console.log(totalSalary(salary2)); // => 110_000`,
        },
        {
          text1: `<b>1. Why index signature</b>
The idea of the index signatures is to type objects of unknown structure when you only know the key and value types.

An index signature fits the case of the salary parameter: the function should accept salary objects of different structures — just make sure that object values are numbers.

Let's annotate the <u>salaryObject</u> parameter with an index signature:

<u>{ [key: string]: number }</u> is the index signature, which tells TypeScript that <u>salaryObject</u> has to be an object with <u>string</u> type as key and <u>number</u> type as value.

Now the <u>totalSalary()</u> accepts as arguments both <u>salary1</u> and <u>salary2</u> objects, since they are objects with number values.
`,
          code1: `function totalSalary(salaryObject: { [key: string]: number }) {
  let total = 0;
  for (const name in salaryObject) {
    total += salaryObject[name];
  }
  return total;
}

console.log(totalSalary(salary1)); // => 120_000
console.log(totalSalary(salary2)); // => 110_000




// However, the function would not accept an object that has, for example, strings as values:

const salary3 = {
  baseSalary: '100 thousands'
};

// Type error:
// Argument of type '{ baseSalary: string; }' is not assignable to parameter of type '{ [key: string]: number; }'.
//   Property 'baseSalary' is incompatible with index signature.
//     Type 'string' is not assignable to type 'number'.
totalSalary(salary3);`,
        },
        {
          text1: `<b>Non-existing properties </b>
          
          What would happen if you try to access a non-existing property of an object whose index signature is <u>{ [key: string]: string }?</u>
As expected, TypeScript infers the type of the value to <u>string</u>. But if you check the runtime value — it's <u>undefined:</u>


The index signature does nothing more than translate a key type to a value type. If the mapping is not right, the value type may differ from the actual runtime data type.

Mark the indexed value as string or undefined to improve typing accuracy. TypeScript becomes aware that the properties you are attempting to access may not exist :

The index signature maps a key type to a value type — that's all. If you don't make that mapping correct, the value type can deviate from the actual runtime data type.

To make typing more accurate, mark the indexed value as <u>string</u> or <u>undefined</u>. Doing so, 
`,
          code1: `// EX : 1
          interface StringByString {
  [key: string]: string;
}

const object: StringByString = {};

const value = object['nonExistingProp'];
console.log(value); // => undefined
//According to TypeScript, the cost variable has a string type, however, its runtime value is unknown.
// "value" variable is a "string" type according to TypeScript, however, its runtime value is "undefined".

//---------------

// TypeScript becomes aware that the properties you access might not exist:

interface StringByString {
  [key: string]: string | undefined;
}

const object: StringByString = {};

const value = object['nonExistingProp'];
console.log(value); // => undefined
`,
        },
        {
          text1: `<b>String and number key</b>
Let's say you have a dictionary of number names:

JavaScript implicitly coerces numbers to strings when used as keys in property accessors (<u>names[1]</u> is the same as <u>names['1']</u>). TypeScript performs this coercion too.

You can think that <u>[key: string]</u> is the same as <u>[key: string | number]</u>.`,
          code1: `interface NumbersNames {
  [key: string]: string
}

const names: NumbersNames = {
  '1': 'one',
  '2': 'two',
  '3': 'three',
  // etc...
};

// Accessing a value by a string key works as expected:
const value1 = names['1']; // OK
// Would it be an error if you access a value by a number 1?


// Is it an error if you try to access a value with the number 1 ?
const value2 = names[1]; // OK

`,
        },
        {
          text1: `<b>Index signature vs Record</b>`,
          code1: ``,
        },
        {
          text1: `<b>Boolean key not allowed </b>
          An index signature parameter type must be 'string', 'number', 'symbol', or a template literal type.`,
          code1: `The key of the index signature can only be a string, number, or symbol. Other types are not allowed:

interface OopsDictionary {
  // Type error: 
  // An index signature parameter type must be 'string', 'number', 
  // 'symbol', or a template literal type.  
  [key: boolean]: string;
}`,
        },
        {
          text1: ``,
          code1: ``,
        },
      ]
    },
    {
      id: 1,
      title: "readonly vs const",
      note: [
        {
          text1: `The easiest way to remember whether to use <b>readonly</b> or <b>const</b> is to ask whether you're using it on a variable or a property. Variables use <b>const</b> whereas properties use <b>readonly</b>.
  
            <b>readonly</b> is used to indicate that a property or variable cannot be modified after it has been initialized. This means that the value of the property or variable cannot be changed once it has been set.
  
            <b>const</b> assertions are used to indicate that a variable should be treated as a constant at compile-time. This means that the value of the variable cannot be changed after it has been initialized.
  
            The key difference between readonly and const assertions is that readonly is used for properties and variables that are part of an object or interface, while const assertions are used for standalone variables.
            `,
          code1: ``,
        }
      ]
    },
    {
      id: 1,
      title: "Keyof Type Operator",
      note: [
        {
          text1: `In TypeScript, the <u>keyof</u> keyword is used to extract the <b>keys</b> (or property names) of an object type <u>as a union of string literals</u>. It allows you to work with the keys of an object in a type-safe way, enabling more powerful and flexible code when working with objects.
          
          The TypeScript <b>keyof</b> operator is used to get a union of all keys in an object type. It’s useful when you want to work with the property names of an object in a type-safe way, ensuring only valid keys are used.

We can use it to define generic functions that work with any object type, without knowing the specific keys of that type. It can also be used to create read-only versions of an interface or to extract specific keys from an interface.

<b>How to use the Keyof Type Operator? </b>
We have defined an interface “Person” with three different properties: name, age, and gender. We then define a type PersonKeys that is equal to keyof Person, which is a union type of “name” | “age” | “gender”.

interface Person {
      name: string;
      age: number;
      gender: string;
}
type PersonKeys = keyof Person;
`,
          code1: `type KeysOfType = keyof ObjectType;
          
          
          //-------------- Ex :1 -------------
          interface Person {
      name: string;
      age: number;
      gender: string;
}
type PersonKeys = keyof Person;

const psrsonArr : PersonKeys[] = ['name','age','gender']
console.log(psrsonArr) // Output: [ 'name', 'age', 'gender' ]

const psrsonArr2 : PersonKeys[] = ['name','age','gender','area']
console.log(psrsonArr) // Output: error TS2322: Type '"area"' is not assignable to type '"name" | "age" | "gender"'.

// OR

interface Person {
  name: string;
  age: number;
  address: string;
}

// Using keyof to get the keys of Person
type PersonKeys = keyof Person;  // "name" | "age" | "address"

const key: PersonKeys = "name";  // Valid
const invalidKey: PersonKeys = "email";  // Error: Type '"email"' is not assignable to type '"name" | "age" | "address"'

// "keyof Person" results in a type "name" | "age" | "address", which is a union of all the keys in the Person interface.
// PersonKeys is now a type that can only be one of the property names ("name", "age", or "address").


          //-------------- Ex :2 -------------
//           Accessing object properties
// Example: In this example, we define an interface "Person" with three properties: "name", "age", and "gender". We also define a variable "person" of type "Person" with some values.

interface Person {
    name: string;
    age: number;
    gender: string;
}

const person: Person = {
    name: "John",
    age: 25,
    gender: "male",
};

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

console.log(getProperty(person, "name")); // "John"
console.log(getProperty(person, "age")); // 25
console.log(getProperty(person, "gender")); // "male"

// -> getProperty takes an object obj of type "T" and a key "K", where "K" is a valid key of "T".
// -> "K extends keyof T", ensuring the key exists in the object.
// -> The function returns the value associated with "obj[key]".


//------------------- Ex : 3 -----------------
// Using mapped Type:
// Example: In this example, we have defined an interface Person with three properties: name, age, and gender.
interface Person {
    name: string;
    age: number;
    gender: string;
}

type ReadonlyPerson = {
    readonly [K in keyof Person]: Person[K];
}

const person: ReadonlyPerson = {
    name: "John",
    age: 25,
    gender: "male",
};

console.log(person.name); // "John"
console.log(person.age); // 25
console.log(person.gender); // "male"

//=> "[K in keyof Person]" creates properties with keys "K" and value types "Person[K]", but read-only.
//=> The type ReadonlyPerson has immutable properties derived from Person.
//=> A ReadonlyPerson variable cannot modify its properties.


//---------------- Ex : 4 ------------------
// Using keyof with a Function
// You can use "keyof" to create more flexible functions. For example, you might want to create a function that accepts a key of an object and returns the value associated with that key.

interface Person {
  name: string;
  age: number;
  address: string;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];  // Returns the value of the key
}

const person: Person = { name: "John", age: 25, address: "123 Main St" };

const userName = getProperty(person, "name");  // string
const age = getProperty(person, "age");    // number

// ->  "T" is the generic type representing the object ("Person" in this case).
// ->  "K" extends keyof "T" ensures that "K" is a valid key of "T" (in this case, a key of "Person").
// ->  The return type of "getProperty" is "T[K]", which represents the value type for the key "K" in object "T".


//---------------- Ex : 5 ------------------
// keyof with Dynamic Keys
// The keyof operator can also be used with dynamic types or mapped types.

interface Product {
  id: number;
  name: string;
  price: number;
}

type ProductKey = keyof Product;  // "id" | "name" | "price"

function printProductInfo&lt;T&gt;(product: T, key: keyof T): void {
  console.log(key, product[key]);
}

const product: Product = { id: 1, name: "Laptop", price: 999 };

printProductInfo(product, "name");  // Output: "name Laptop"
printProductInfo(product, "price");  // Output: "price 999"


"T" is the generic type representing the object (Person in this case).
"K" extends "keyof T" ensures that "K" is a valid key of "T" (in this case, a key of Person).
The return type of getProperty is "T[K]", which represents the value type for the key "K" in object "T".

//---------------- Ex : 6 ------------------

"keyof" with Dynamic Keys
The "keyof" operator can also be used with dynamic types or mapped types.

interface Product {
  id: number;
  name: string;
  price: number;
}

type ProductKey = keyof Product;  // "id" | "name" | "price"

function printProductInfo&lt;T&gt;(product: T, key: keyof T): void {
  console.log(key, product[key]);
}

const product: Product = { id: 1, name: "Laptop", price: 999 };

printProductInfo(product, "name");  // Output: "name Laptop"
printProductInfo(product, "price");  // Output: "price 999"



//---------------- Ex : 7 ------------------
// keyof with Record Type
// The Record utility type allows you to create a type with specific keys, and keyof can be used to extract the keys from it.

type RecordExample = Record<"a" | "b" | "c", number>;
type Keys = keyof RecordExample;  // "a" | "b" | "c"

// Here, RecordExample is an object type where the keys are "a", "b", and "c", and the values are all of type number. keyof RecordExample will give you a union type of those keys: "a" | "b" | "c".



//---------------- Ex : 8 ------------------
// keyof with Arrays
// In TypeScript, arrays are also considered objects, so you can use "keyof" with an array type to get the indices as keys:

const arr = [1, 2, 3, 4];
// keyof typeof arr is "0" | "1" | "2" | "3"
type ArrKeys = keyof typeof arr;

const index: ArrKeys = "2";  // Valid, because "2" is a key of arr
const invalidIndex: ArrKeys = "5";  // Error: Type '"5"' is not assignable to type '"0" | "1" | "2" | "3"'

// Here, "keyof typeof arr" returns a union of all valid indices of the array, which are "0" | "1" | "2" | "3".




//---------------- Ex : 9 ------------------

// "keyof" with Nested Objects
// You can also use "keyof" with nested objects, and TypeScript will infer the type for each level of keys:

interface Company {
  name: string;
  employees: {
    name: string;
    role: string;
  }[];
}

type CompanyKeys = keyof Company;  // "name" | "employees"
type EmployeeKeys = keyof Company['employees'][0];  // "name" | "role"
`,
        },
        {
          text1: ``,
          code1: ``,
        },
        {
          text1: ``,
          code1: ``,
        },
      ]
    },
    {
      id: 1,
      title: "typeof",
      note: [
        {
          text1: `The <b>typeof</b> operator in TypeScript is similar to JavaScript's typeof, but with some unique features tailored for TypeScript's static type system. It is used to determine the type of a variable at compile time. This can be particularly useful for ensuring type safety in functions and when manipulating data structures.
          
          
        <b>Practical application</b>:
Combining <u>typeof</u> with <u>keyof typeof</u> can be particularly useful in scenarios such as function parameter validation:

function getConfigValue(key: ConfigKeys): number | string {
  return config[key]
}
  This function is type-safe, meaning it can only accept arguments that are actual keys of <u>config</u>, and TypeScript will enforce this at compile time.
  `,
          code1: `// Here's a simple example demonstrating the use of typeof:

let myNumber = 42
let myString = '42'

type NumberType = typeof myNumber // 'number'
type StringType = typeof myString // 'string'


//-------------------- Ex :2 --------------
"typeof" can be applied to more complex data structures, such as arrays and objects, to extract their types.
TypeScript typeof array
When used with an array, "typeof" will return the type of the elements inside the array along with an array indicator ("[]").

let numberArray = [1, 2, 3]
type ArrayType = typeof numberArray // 'number[]'


//-------------- Ex : 3 ---------------
// TypeScript typeof object
// typeof is also extremely useful when working with objects, especially when you need to create a type that conforms to an existing object's shape.

let person = {
  name: 'Alice',
  age: 25
}

type PersonType = typeof person // { name: string; age: number; }


`,
        },
        {
          text1: ``,
          code1: ``,
        },
        {
          text1: ``,
          code1: ``,
        },
      ]
    },
    {
      id: 1,
      title: "What is a const assertion?",
      note: [
        {
          text1: `A <b>const</b> assertion in TypeScript is used to indicate that a variable should be treated as a constant at compile-time. This means that the value of the variable cannot be changed after it has been initialized.
  
            Here's an example of how to use a const assertion:
  
            const a = 10 as const;
  
            // This line will cause a compile-time error
            a = 20;
            In this example, we use the 'as const' syntax to indicate that the variable a should be treated as a constant. 
            `,
          code1: ``,
        }
      ]
    },
    {
      id: 1,
      title: "Classes",
      note: [
        {
          text1: `
            Classes are a core concept in object-oriented programming, and TypeScript has full support for them. Classes allow developers to define blueprints for objects that share the same properties and methods. They can also include constructors, access modifiers, and inheritance.
            `,
          code1: ``,
        }
      ]
    },
    {
      id: 1,
      title: "Generics",
      note: [
        {
          text1: ` <a href="https://www.freecodecamp.org/news/how-typescript-generics-work/" target="_blank">how-typescript-generics-work</a>
          <a href="https://prismic.io/blog/typescript-generics" target="_blank">typescript-generics</a>
            Generics are a powerful feature in TypeScript that allow for the creation of reusable code. They allow developers to create functions and classes that can work with a variety of data types.

            <b>Generics in TypeScript are a way to create reusable components and functions that work with a variety of data types while maintaining type safety.</b> They allow you to define placeholders for types that are specified later when the generic type is used. This enables you to write more flexible and reusable code.

            Generics in TypeScript enable writing code that can work with a variety of data types while maintaining type safety. They allow the creation of reusable components, functions, and data structures without sacrificing type checking.

Generics are represented by type parameters, which act as placeholders for types. These parameters are specified within angle brackets (<>) and can be used throughout the code to define types of variables, function parameters, return types, and more.

Let's start with a simple example of a generic function:

In this example, <b>identity</b> is a generic function that takes a type parameter <b>T</b>. The parameter <b>arg</b> is of type <b>T</b>, and the return type of the function is also <b>T</b>. When calling <b>identity<string>("hello")</b>, the type parameter <b>T</b> is inferred as <b>string</b>, ensuring type safety.

-> <b>T</b> is a type parameter.
-> <b>arg</b> is of type <b>T</b>, meaning the function accepts an argument of any type and returns the same type.
            `,
          code1: `function identity&lt;T&gt;(arg: T): T {
              return arg;
          }
          
          // Usage
          let output = identity<string>("hello"); // output is of type 'string'
          let output2 = identity<number>(42); // output2 is of type 'number'
          `,
        },
        {
          text1: `The main reason to use generics in TypeScript (and any other programming language) is to enable types (classes, types, or interfaces) to act as parameters. It helps us reuse the same code for different types of input since the type itself is available as a parameter.

            Defining a relationship between input and output parameters types. For example, <b>function test &lt;T&gt;(input: T[]): T { ... }</b> allows you to make sure input and output use the same type, though input as an array.

            1) <b>Type Safety</b>: TypeScript ensures that the types used with generics are enforced correctly, preventing type errors at compile-time.

            2) <b>Code Reusability</b>: Generics allow you to write functions and components that can work with different data types, promoting code reuse without sacrificing type safety.
        
            3) <b>Flexibility</b>: Generics provide flexibility by allowing types to be specified dynamically when the function or component is used, rather than being fixed at the time of definition.
            `,
          code1: `
            // TypeScript code
            class Box&lt;T&gt; {
              private contents: T;
          
              constructor(value: T) {
                  this.contents = value;
              }
          
              getValue(): T {
                  return this.contents;
              }
          }
          
          // Usage
          let box1 = new Box<string>("Hello");
          console.log(box1.getValue()); // Output: "Hello"
          
          let box2 = new Box<number>(42);
          console.log(box2.getValue()); // Output: 42
          
          //-----------------------
          // Generated JavaScript
          "use strict";
class Box {
    constructor(value) {
        this.contents = value;
    }
    getValue() {
        return this.contents;
    }
}
// Usage
let box1 = new Box("Hello");
console.log(box1.getValue()); // Output: "Hello"
let box2 = new Box(42);
console.log(box2.getValue()); // Output: 42
          `,
        },
        {
          text1: `<b style="color:#754629;">Capital Letters in Generics</b>
          In TypeScript, capital letters in generic types typically represent type parameters or type variables. These are placeholders that you use to define the types of parameters, return types, or properties in a more flexible and reusable way. The capital letter convention is simply a naming convention, where developers often use uppercase letters like T, U, V, etc., to represent these generic type parameters.
          
          <b>Why Use Capital Letters in Generics?</b>
    <b>Clarity</b>: Uppercase letters help distinguish type parameters from regular variables (which are usually lowercase).
    <b>Convention</b>: Using capital letters like <b>T</b> (for "type") is a widely accepted practice that makes the code easier to understand for other developers familiar with TypeScript's conventions.
    <b>Flexibility</b>: The use of generics allows you to create functions, classes, and interfaces that work with any data type.
    
    <b>A generic variable is a single character symbol that indicates a data type to be declared later on. Think of a generic variable as a "type placeholder."

By convention, the symbol used for a generic variable is one of the uppercase characters: T, V, K, S or E</b>. (You can use any alphabetic character you like, but an uppercase character makes your code easier to understand.) These characters are placed between opening and closing "angle brackets, <like so>." Then, to use the generic, the programmer supplies the actual type name for each generic variable declared.
`,
          code1: `function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}

console.log(createPair<string, number>('hello', 42)); // ['hello', 42]`
        },
        {
          text1: `<b>1) Using generics with interfaces</b>
          Generics with Interfaces in TypeScript allow you to define flexible, reusable types that can work with various data structures while preserving type safety. When using generics in interfaces, you can define the type of properties, methods, or the entire structure in a flexible manner without specifying a concrete type upfront.
We can use generics with interfaces to define custom types for the properties of the object the interface describes.


In Ex : 2 snippet, <u> &lt;string, number&gt; </u> are passed to the interface <u>UserData</u>. In this way, <u>UserData</u> becomes a reusable interface in which any data type can be assigned depending upon the use case.
Here in this example, <u>name</u> and <u>rollNo</u> will always be <u>string</u> and <u>number</u>, respectively.
`,
          code1: `// When using generics in interfaces, you define a placeholder for the type inside the angle brackets <>. Here's a simple example:

          //-------------- Ex : 1 -------------
interface Box&lt;T&gt; {
  value: T;
}

//-> T is a generic type parameter.
//-> "value: T" means that the "value" property of the "Box" interface can be any type, depending on the type argument passed when the interface is used.

interface Box&lt;T&gt; {
  value: T;
}

const numberBox: Box<number> = { value: 42 };
const stringBox: Box<string> = { value: "Hello, World!" };
const booleanBox: Box<boolean> = { value: false };

console.log(numberBox.value); // Output: 42
console.log(stringBox.value); // Output: "Hello, World!"
console.log(booleanBox.value); // Output: false

//-------------- Ex : 2 -------------
interface UserData<X,Y> {
    name: X;
    rollNo: Y;
}

const user: UserData<string, number> = {
    name: "Ram",
    rollNo: 1
}

console.log(user)


//--------------Ex : 3 -------------
interface MetaData {
	sex: string;
	height: "tall" | "short";
	favouriteNumber: number;
}

// 👇 Defining our generic
interface Person&lt;T&gt; {
	id: number;
	name: string;
	age: number;
	metadata: T;
}

// 👇 Using our generic
const personOne: Person<(number|string)[]> = {
	id: 1,
	name: 'Jeff',
	age: 31,
	metadata: ['male', 'tall', 22]
}

// 👇 Using our generic
const personTwo: Person<MetaData> = {
	id: 1,
	name: 'Jeff',
	age: 31,
	metadata: {
		sex: 'female',
		height: 'tall',
		favouriteNumber: 45,
	}
}

// In this example, we define an interface using a generic ("Person"), the generic type passed to this interface is then used to type the "metadata" property on it. We then have two examples, one where the "metadata" property is typed using an array of strings/numbers and another where it's typed using a second interface called "MetaData".

// Both of these are valid examples because the data passed to the metadata property in each object aligns with the generic value being passed into the interface describing the object.
`
        },
        {
          text1: `<b>1)Generic Utility Function</b>

Here, we've manually set the type to highlight how TypeScript handles different types with generics. However, it's important to remember that TypeScript typically infers the type automatically based on the argument provided. You don't need to manually specify the type unless you're overriding TypeScript's inference or dealing with complex types where explicit type annotations are necessary

In this example, T is a type parameter that can represent any type. The actual type is determined when the function is called, whether it’s a number, string, or any other type..
         

Real-time examples include creating functions for:

    => Identity functions that return the same type.
    => Sorting arrays of various types.
    => Fetching data from APIs with dynamic response types.
    => Merging objects of different types.
    => Mapping arrays with transformations.
    => Validating data using specific logic.
    => Caching data for later use.



    <b>Real-Time Example 1 & 2: Generic Identity Function</b>
A simple and common use case for a generic function is an identity function that returns the value passed to it, preserving its type.

//--------
function identity&lt;T&gt;(value: T): T {
  return value;
}
const stringResult = identity("Hello, TypeScript!"); // T is inferred as string
const numberResult = identity(42);                  // T is inferred as number
console.log(stringResult); // Output: "Hello, TypeScript!"
console.log(numberResult); // Output: 42
//-------

    <b>Use Case</b>: This is useful when you want to ensure that the input and output of a function are the same type, but you don’t know the type beforehand. The generic <b>T</b> allows the function to work with any type (string, number, etc.) and still preserve the type integrity.


    <b>Real-Time Example 3: Generic Function for Sorting Arrays</b>
Consider a function that sorts an array of items. Using generics, the function can sort an array of any type of elements, while TypeScript ensures that the types are consistent.

<b>Use Case</b>: This can be used to sort arrays of various types (numbers, strings, etc.), while still maintaining type safety. The function can accept arrays of any type and return the sorted array in the same type.


<b>Real-Time Example 4: Generic API Fetch Function</b>
In real-world applications, you often deal with APIs where the structure of the data can vary depending on the endpoint. By using generics, you can create a flexible function to fetch data from an API while maintaining type safety.

<b>Use Case</b>: This generic function can be used to fetch different types of data from an API. By passing different expected types (like <u>User</u> or <u>Post</u>), TypeScript ensures the correct data structure is returned based on the API response.
    `,
          code1: `// A generic function that works with any data type
function identity&lt;T&gt;(arg: T): T {
    return arg;
}

// Using the generic function with different types
let num = identity<number>(42); // T is number
let str = identity<string>("Hello"); // T is string

//TS automatically infers the type so this also works:
//let num = identity(42); // T is number
//let str = identity("Hello"); // T is string


//-------------- Ex : 2 -----------
function toArray&lt;T&gt;(value: T): T[] {
    return [value];
}

let numberArray: number[] = toArray(42);
console.log(numberArray); // Output: [42]

let stringArray: string[] = toArray("hello");
console.log(stringArray); // Output: ["hello"]

// The "toArray" function converts a single value of type "T" into an array containing that value. This simple utility function showcases how generics can be used to create reusable code that adapts to different data types effortlessly.


//--------------- Ex : 3 ----------
function sortArray&lt;T&gt;(arr: T[]): T[] {
  return arr.sort(); // Sorts in place
}

const numberArray = [10, 2, 33, 4];
const stringArray = ["apple", "orange", "banana"];

const sortedNumbers = sortArray(numberArray);
const sortedStrings = sortArray(stringArray);

console.log(sortedNumbers); // Output: [2, 4, 10, 33]
console.log(sortedStrings); // Output: ["apple", "banana", "orange"]


//---------------- Ex : 4 -----------
async function fetchData&lt;T&gt;(url: string): Promise&lt;T&gt; {
  const response = await fetch(url);
  const data = await response.json();
  return data; // T will be inferred based on the expected response type
}

interface User {
  id: number;
  name: string;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const userData = fetchData<User>("https://jsonplaceholder.typicode.com/users/1");
const postData = fetchData<Post>("https://jsonplaceholder.typicode.com/posts/1");

userData.then((user) => {
  console.log(user.name); // Output: name of the user
});

postData.then((post) => {
  console.log(post.title); // Output: title of the post
});



//----------------- Ex :5 --------------
interface ObjOne {
  prop1: string;
  prop2: number;
}

interface ObjTwo {
  prop3: string;
  prop4: string;
}

// Defining our function with a generic type (T)
async function fetchData&lt;T&gt;() {
  const response = await fetch('API_URL');
  // Telling TS that the response data is the type of T (our generic)
  const data = await response.json() as T;

  return data;
}

// Use async function to call fetchData
async function run() {
  const data1 = await fetchData<ObjOne>();
  console.log(data1);

  const data2 = await fetchData<ObjTwo>();
  console.log(data2);
}

// Call the async function to run the code
run();

`
        },
        {
          text1: `<b>Using generics with types</b>
          
          Generics can also be applied to custom types. The process is similar to interfaces: you define a shape with placeholder types, which are determined when the type is used. Generics enforce typing but do not dictate specific types.

          Using generics with types is pretty similar to using interfaces and follows the same principles we covered above, but this time using the type syntax like so.

          In TypeScript, generics with types allow you to create reusable and flexible type definitions that can work with any type you define later. By using generic types, you can ensure that your code is both type-safe and flexible enough to handle a wide range of data types without losing type information.

          You can define a <b>generic type alias</b> by specifying a placeholder type, just like you would with generics in functions or interfaces. This allows you to define a reusable type that works with any type you specify.

         <b> Use Cases for Type Aliases with Generics</b>
    <b>Reusable Data Structures</b> Create flexible data structures like collections, containers, or responses that work with any type.
    <b>Flexible Functions</b> Write functions that can accept and return values of any type without losing type safety.
    <b>Type Safety</b> Type aliases with generics enforce type safety, preventing you from inadvertently using incompatible types.
    <b>Multiple Type Parameters</b> Use generics with multiple type parameters to create more complex abstractions, such as pairs or tuples.


    </b>EX : 7 - Extending Other Types</b>
The <u>extends</u> keyword also allows you to use <>bother types or interfaces</b> as the base. You can extend any type, including interfaces, other generics, or even built-in types like string or number.
For example, you can extend a more complex type:

interface Animal {
  name: string;
  species: string;
}
function printAnimal&lt;U extends Animal&gt;(animal: U) {
  console.log(\`The \${animal.species} is called \${animal.name}\`);
}
const dog = { name: 'Rex', species: 'Dog', age: 5 };
printAnimal(dog); // Works because dog has at least { name: string, species: string }

Here, the <u>U</u> type parameter <b>extends</b> <u>Animal</u>, so it must at least have the <u>name</u> and <u>species</u> properties, but it can have additional properties like <u>age</u>.
          `,
          code1: `//------------- Ex : 1 ------------
          type Person&lt;T, K, V&gt; = {
  name: T,
  age: K,
  isMarried: V
}
const person1: Person<string, number, boolean> = {
  name: 'Bob',
  age: 67,
  isMarried: false
}
console.log(person1)



//--------------- Ex : 2 --------------
// Using Generics with Function Type Aliases
// You can also use generics in function type aliases. This allows you to define a type for a function that works with any type of argument and return type.
type IdentityFn&lt;T&gt; = (value: T) => T;

const numberIdentity: IdentityFn<number> = (value) => value;
const stringIdentity: IdentityFn<string> = (value) => value;

console.log(numberIdentity(5));  // Output: 5
console.log(stringIdentity('hello'));  // Output: hello



//--------------- Ex : 3 --------------
type apiResponse&lt;T&gt; = {
  data: T;
  status: number;
  message: string
}
const userResponse: apiResponse&lt;{id:number, name:string}&gt; = {
  data: { id: 1, name: 'ram' },
  status: 200,
  message: 'success'
}

const postResponse: apiResponse&lt;{ id: number; title: string }&gt; = {
  data: { id: 101, title: 'Generics in TypeScript' },
  status: 200,
  message: 'Success'
};

console.log(userResponse)
console.log(postResponse)

// "ApiResponse&lt;T&gt;" is a generic type alias representing an API response. It contains:
//     "data": The response data of type "T".
//     "status": The HTTP status code (a "number").
//     "message": A string that describes the status of the request.
// The "data" property in "userResponse" and "postResponse" will have different structures based on the type passed to "ApiResponse".



//--------------- Ex : 4 --------------
// Constrained Generic Type Alias
// Sometimes you want to constrain a generic type to a specific type or a subset of types. You can do this using "extends".

type Lengthy<T extends { length: number }> = T;

const array: Lengthy&lt;number[]&gt; = [1, 2, 3]; // OK, arrays have a 'length' property
const stringValue: Lengthy<string> = 'Hello'; // OK, strings have a 'length' property
const numberValue: Lengthy<number> = 42; // Error: number doesn't have 'length'

// "Lengthy<T extends { length: number }>" is a constrained generic type alias. It ensures that "T" is a type that has a "length" property (such as "string" or "array").
// "array" is valid because arrays have a "length" property.
// "stringValue" is valid because strings have a "length" property.
// "numberValue" is invalid because "number" does not have a "length" property, so TypeScript will give an error.



//--------------- Ex : 5 --------------
// Default Type Parameters in Type Aliases
// You can provide a default value for a type parameter, so if no type is provided, it falls back to the default type.

type Wrapper&lt;T = string&gt; = {
  value: T;
};

const numberWrapper: Wrapper<number> = { value: 42 };
const defaultWrapper: Wrapper = { value: 'Hello' }; // 'T' defaults to string

console.log(numberWrapper.value); // Output: 42
console.log(defaultWrapper.value); // Output: Hello

"Wrapper&lt;T = string&gt;" defines a type alias with a default type of "string" for "T".
If no type is provided when creating a "Wrapper" object, it will default to "string" (as in "defaultWrapper").
"numberWrapper" specifies that the type is "number", so "value" is a "number".


//--------------- Ex : 6 --------------
function merge&lt;U extends string[], V extends number[]&gt;(obj1: U, obj2: V) {
  return [ ...obj1, ...obj2 ];
}
const person = [ 'John' ];
const age = [25 ];

const result = merge(person, age); 
console.log(result); // Output: { name: 'John', age: 25 }

// -OR-

function merge&lt;U extends { name: string }, V extends { age: number }&gt;(obj1: U, obj2: V) {
  return { ...obj1, ...obj2 };
}
const person = { name: 'John' };
const age = { age: 25 };

const result = merge(person, age); 
console.log(result); // Output: { name: 'John', age: 25 }

// Generics ("U" and "V"):
//     "U" extends "{ name: string }", so "obj1" must have a "name" property of type "string".
//     "V" extends "{ age: number }", so "obj2" must have an "age" property of type "number".

// Explanation of extends in this code:
//     U extends { name: string }:
//         "U" is a generic type parameter that must extend an object type that has a "name" property of type "string".
//         This means that "obj1" (the first argument of the "merge" function) must be an object that includes at least a "name" property of type "string". It can have additional properties as well.

// ------ WITHOUT extends ----
function merge&lt;U, V&gt;(obj1:U, obj2 : V){
  return {...obj1, ...obj2}
}
type Person = { name: string };
type Age = { age: number };

// Using the function with constraints
const person: Person = { name: 'John' };
const age: Age = { age: 25 };

const result = merge(person, age); // TypeScript knows 'result' will have { name: string, age: number }
console.log(result);




//--------------- Ex : 7 --------------
interface Animal {
  name: string;
  species: string;
}
function printAnimal&lt;U extends Animal&gt;(animal: U) {
  console.log(\`The \${animal.species} is called \${animal.name}\`);
}

const dog = { name: 'Rex', species: 'Dog', age: 5 };
printAnimal(dog); // Works because dog has at least { name: string, species: string }




//--------------- Ex : 8 --------------
type MetaData = {
	sex: string;
	height: "tall" | "short";
	favouriteNumber: number;
}

type Person&lt;T&gt; = {
	id: number;
	name: string;
	age: number;
	metadata: T;
}

const personOne: Person&lt;(number|string)[]&gt; = {
	id: 1,
	name: 'Jeff',
	age: 31,
	metadata: ['male', 'tall', 22]
}

const personTwo: Person&lt;MetaData&gt; = {
	id: 2,
	name: 'Jess',
	age: 28,
	metadata: {
		sex: 'female',
		height: 'tall',
		favouriteNumber: 45,
	}
}
`
        },
        {
          text1: `<b>Constrained generic types</b>
          <a href="https://dev.to/keento0809/constrained-generic-types-in-typescript-3mmp#:~:text=TypeScript%20gives%20us%20the%20option,in%20the%20code%20snippet%20below." target="_blank">Constrained generic types</a>
TypeScript gives us the option to handle the cases such as some functions only working with a specific, limited set of types.

For example, TypeScript complains about the type error because of passing a non-specified type value as the type parameter in the code snippet below.


So in this case, the printArrayLength function expects to receive any kind of array and then, return the length of the array passed as the parameter.

But since generic type T accepts any type values which are not limited to the array, a type error appears (some arguments whose types are number, boolean, and so on don't have length property in it.

`,
          code1: `function printArrayLength&lt;T&gt;(array: T){
    return array.length // error: Property 'length' does not exist on type 'T'.
}
    
// So, in order to fix the problem, we can limit the assignable values to generic type by using "extend" keyword together.

function printArrayLength&lt;T extends U[],U&gt;(array: T){
    return array.length
}
console.log(printArrayLength(['a','b','c'])) // OK, Output: 3
console.log(printArrayLength([1,2,3,4,5])) // OK, Output: 5

`
        },
        {
          text1: `<b>Using generics with classes</b>
          TypeScript supports generic classes. The generic type parameter is specified in angle brackets after the name of the class. A generic class can have generic fields (member variables) or methods.

          In TypeScript, <b>generic classes</b> are classes that can work with any data type. They allow you to define a class with a placeholder type (a generic type) that is specified when the class is instantiated. This provides flexibility and type safety, as the class can work with different types while ensuring the correctness of the types at compile time.

          <b>Syntax for Generic Classes</b>
To define a generic class, you use the <u>class</u> keyword followed by the generic type in angle brackets (<u>&lt;T&gt;</u>). The type parameter <u>T</u> represents the type that will be provided when creating an instance of the class.

<b>Key Points to Remember:</b>
    => <b>Generic Classes</b> allow you to create classes that can work with any type.
    => The type for the generic class can be specified when creating an instance of the class.
    => You can have multiple type parameters for more complex use cases.
    => You can also add <b>constraints</b> to the types to restrict what types can be used.
    => Default types can be provided for generics.
    => You can have <b>static methods</b> in generic classes, though they don't take the class's generic type into account.
          `,
          code1: `//-------------- Ex : 1 -------------
          class MyClass&lt;T&gt; {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const numOob = new MyClass(23)
const stringOob = new MyClass("string value")
console.log(numOob.getValue())
console.log(stringOob.getValue())
// Output:
// 23
// string value



//------------ Ex : 2 --------------
class Pair<T, U> {
  first: T;
  second: U;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }

  getFirst(): T {
    return this.first;
  }

  getSecond(): U {
    return this.second;
  }
}

const pair = new Pair<string, number>('John', 25);
console.log(pair.getFirst());  // Output: 'John'
console.log(pair.getSecond()); // Output: 25

// In this example:
//     "Pair<T, U>" is a class with two type parameters, "T" and "U".
//     You can instantiate the class with different types for "T" and "U"



//-------------- Ex : 3 --------------
// You can also add constraints to the type parameters to restrict them to certain types. For example, you might want to ensure that the type is an object or implements a particular interface.

interface HasName {
  name: string;
}

class Person<T extends HasName> {
  person: T;
  constructor(person: T) {
    this.person = person;
  }
  greet(): string {
    return \`Hello, \${this.person.name}!\`;
  }
}

const person = new Person({ name: 'Alice', age: 30 });
console.log(person.greet());  // Output: 'Hello, Alice!'

const invalidPerson = new Person({ age: 30 });  // Error: Property 'name' is missing

"T extends HasName" means that "T" must be a type that has at least a "name" property (it must implement the "HasName" interface).
This constraint ensures that the "greet()" method can safely access "person.name".


//------------------ Ex : 4 ------------
// Generic Class with Default Type
// You can also specify a default type for a generic class. If no type is passed when creating an instance of the class, the default type will be used.

class Container<T = string> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const stringContainer = new Container("Hello, world!"); // type 'string' by default
console.log(stringContainer.getValue());  // Output: 'Hello, world!'

const numberContainer = new Container<number>(123); // explicitly 'number'
console.log(numberContainer.getValue());  // Output: 123

// In this example:
//     The default type for "T" is "string", but you can explicitly specify a different type when instantiating the class.


//-------------- Ex : 5 ----------------
// Static Methods with Generics
// You can also define static methods in a generic class. However, the generic type is defined on the class level and not the method level.

class Logger&lt;T&gt; {
  static log(message: string): void {
    console.log(message);
  }

  logMessage(message: T): void {
    Logger.log(\`Message: \${message}\`);
  }
}

const logger = new Logger<number>();
logger.logMessage(123);  // Output: 'Message: 123'
Logger.log("This is a static log.");  // Output: 'This is a static log.'

// The class "Logger" is generic ("&lt;T&gt;"), but the static method "log()" is not type-dependent on "T". It works independently of the type.


//--------------- Ex : 6 --------------

// 👇 Defining our new class with a generic
class ExampleClass&lt;T&gt; {
	// 👇 Initializing a new property with an array of the generic value
	private values: T[] = [];

	// 👇 Setting the argument for this method to be the generic
	setValue(value: T): void {
		this.values.push(value);
	}

	// 👇 Setting the return value of this method to be an array of the generic
	getValues(): T[] {
		return this.values;
	}
}

// 👇 Using 'number' as the type to replace our generic 'T'
const example = new ExampleClass<number>();

// 👇 We can now only pass in numbers. Any other type will error.
example.setValue(24);
example.setValue(42);
const values = example.getValues();

console.log(values); // [24, 42]

// In this example, we define a new class that takes in a generic and uses that generic to type the property and methods that exist on it. We then initialize a new instance of that class with the type of number and successfully use the methods on it by passing in number values. However, if we were to pass in a string (or another non-number type) to this instance of the class, it would error as we've already told the class that the generic is a number.

`
        },
        {
          text1: `<b>Generic Interfaces with A Function</b>
          In TypeScript, you can define <b>generic interfaces</b> to describe the shape of objects, including functions, that can work with different types. This is useful when you want to ensure that a function adheres to a specific type structure while remaining flexible with the types it operates on.
<b>Generic Interfaces with Functions</b>
When creating a generic interface for a function, you define a <b>generic type parameter</b> in the interface, which will be applied to the function's parameters and return type.
`,
          code1: `
          interface MyFunction&lt;T&gt; {
  (arg: T): T;
}

//----------------- Ex: 1 --------------- 
// Generic interface for a function that takes and returns a number
interface Identity&lt;T&gt; {
  (arg: T): T;
}

const identity: Identity<number> = (arg: number): number => {
  return arg;
};
console.log(identity(42));  // Output: 42

// The "Identity&lt;T&gt;" interface defines a function that accepts an argument of type "T" and returns a value of type "T".
// "identity" is a function that uses the "Identity<number>" interface, so the input and output types are "number".



//--------------- Ex : 2 --------------
//You can use the same interface with different types of data.
interface Identity&lt;T&gt; {
  (arg: T): T;
}

const identityString: Identity<string> = (arg: string): string => {
  return arg;
};

const identityNumber: Identity<number> = (arg: number): number => {
  return arg;
};

console.log(identityString("Hello"));  // Output: "Hello"
console.log(identityNumber(123));      // Output: 123

// Here, we use the "Identity&lt;T&gt;" interface with different types ("string" and "number"), demonstrating that it can work with various types while maintaining type safety.




//----------------- Ex : 3----------------
// Generic Interface with Constraints
// You can add constraints to the generic type "T" to restrict the types that can be used with the interface. This is useful when you want to ensure the type adheres to certain properties or methods.

interface Lengthy<T extends { length: number }> {
  (arg: T): number;
}

const stringLength: Lengthy<string> = (arg: string): number => {
  return arg.length;
};

const arrayLength: Lengthy<any[]> = (arg: any[]): number => {
  return arg.length;
};

console.log(stringLength("Hello"));  // Output: 5
console.log(arrayLength([1, 2, 3]));  // Output: 3

// The interface "Lengthy&lt;T&gt;" has a constraint that "T" must have a "length" property (this works for arrays, strings, and other objects that have a "length" property).
// The "stringLength" function calculates the length of a string, and "arrayLength" calculates the length of an array.

//----------------- Ex : 4----------------
// A Function with Multiple Generic Parameters
// You can also define a function interface with multiple generic parameters to handle more complex scenarios.

interface Pair<T, U> {
  (first: T, second: U): string;
}

const pairStringAndNumber: Pair<string, number> = (first: string, second: number): string => {
  return \`First: \${first}, Second: \${second}\`;
};

console.log(pairStringAndNumber("Age", 25));  // Output: "First: Age, Second: 25"

// Here, the "Pair<T, U>" interface describes a function that takes two arguments of types "T" and "U" and returns a string. When you create an instance of this function, you specify the types ("string" and "number").

//----------------- Ex : 5----------------
// Generic Interfaces for Callbacks
// A more advanced use case is to create generic interfaces for functions that take "callbacks".

interface Callback&lt;T&gt; {
  (data: T, callback: (result: T) => void): void;
}

const fetchData: Callback<string> = (data, callback) => {
  console.log("Fetching data:", data);
  callback(data.toUpperCase());
};

fetchData("hello", (result) => {
  console.log("Processed result:", result);  // Output: "Processed result: HELLO"
});

// The "Callback&lt;T&gt;" interface defines a function that takes "data" of type "T" and a "callback" function that processes the result.
// "fetchData" accepts a string ("hello") and processes it in a callback.


//----------------- Ex : 6----------------

// A More Complex Function with Multiple Constraints
// Let's say you want to create a function interface where the type has multiple constraints, such as both implementing certain interfaces and having specific properties.

interface Person {
  name: string;
  age: number;
}

interface Greetable<T extends Person> {
  (person: T): string;
}

const greet: Greetable<Person> = (person) => {
  return \`Hello, \${person.name}! You are \${person.age} years old.\`;
};

const john = { name: "John", age: 25 };
console.log(greet(john));  // Output: "Hello, John! You are 25 years old."

// "Greetable&lt;T&gt;" is a generic interface that takes a "Person" or any object extending "Person".
// The function "greet" takes an object of type "Person" and generates a greeting message.


//----------------- Ex : 2----------------

interface Identity&lt;T&gt; {
  (arg: T): number | T;
}

const identity: Identity<number[]> = (arg: number[]): number | number[] => {
  if (arg.length < 4){
    return arg
  }
  let sumVal = arg.reduce(function(x, y){
      return x + y
  },0)
  return sumVal;
};

console.log(identity([42,4,9,0]));  // Output: 55
`
        },
        {
          text1: `<b>Constraints in typescript</b>
In TypeScript, generic constraints allow you to apply constraints on the types that can be passed as arguments to a generic function or used as type parameters in a generic class or interface.

By using generic constraints, you can ensure that a type parameter satisfies certain conditions or has specific properties. This can be useful when you want to restrict the types that can be used with a generic function or class to only those that meet certain criteria.

For example, you can define a generic function that takes two parameters of different types and returns a merged object of those types. You can apply constraints to ensure that the types being merged have specific properties or meet certain conditions.

Constrained generic types are helpful to prevent from having the situation that TypeScript didn't implement type checking properly.

Let me get this straight now. In the code below, TypeScript doesn't show any errors, but still, arguments passed to the function and its return value are not exactly the same as we expect.

In this scenario(Ex : 1), what we would like to implement with the combineTwoObj function is to combine two objects passed as parameters and return a new object containing all key-value pairs of them.

However, it also works when not passing exactly two objects (one of them is just a number in this case). So this means limiting the type of generic type is needed to get the ideal result of combineTwoObj function.
`,
          code1: `//----------------- Ex : 1 ------------
          function combineTwoObj&lt;T,U&gt;(firstObj:T,secondObj:U) {
    return {
        ...firstObj,
        ...secondObj
    }
}
console.log(combineTwoObj({name:'Tom',age:22}, {address : 'wgl'})) 
// Output: { name: 'Tom', age: 22, address: 'wgl' } But this output is not an expected one.


//--------------- Ex : 2 ---------------
//What we can do to achieve that goal is to add extends keyword after "T" and "U".
function combineTwoObj&lt;T extends object,U extends object&gt;(firstObj:T,secondObj:U) {
    return {
        ...firstObj,
        ...secondObj
    }
}
console.log(combineTwoObj({name:'Tom',age:22},10))  // Argument of type 'number' is not assignable to parameter of type 'object'.
console.log(combineTwoObj({name:'Tom',age:22},{hobby: 'running', isAdult: true})) // Ok, Output: { "name": "Tom","age": 22,"hobby": "running","isAdult": true }
`
        },
        {
          text1: `Generic Constraints with keyof
          
          `,
          code1: `//--------------- Ex : 1 ---------------
          function getProperty&lt;T, K extends keyof T&gt;(obj: T, key: K): T[K] {
    return obj[key];
}

let person = { name: "John", age: 30, city: "New York" };
let age: number = getProperty(person, "age");
console.log(age); // Output: 30

// Here, the "getProperty" function takes an object of type "T" and a key of type "K", where "K" extends the keys of "T". It then returns the corresponding property value from the object. This example demonstrates how to use generics with "keyof" to enforce type safety when accessing object properties.


//--------
function getProperty&lt;T, K extends keyof T&gt;(obj: T, key: K): string {
  // console.log(key)
    return \`\${String(key)} : \${String([obj[key]])}\`
}

let person = { name: "John", age: 30, city: "New York" };
let uname: string = getProperty(person, "name");
let age: string = getProperty(person, "age");
let city: string = getProperty(person, "city");

console.log(uname); // Output: name : John
console.log(age); // Output: age : 30
console.log(city); // Output: city : New York



//--------------- Ex : 2 ---------------
          type Person = {
  name: string;
  age: number;
  address: string;
};

const person: Person = {
  name: 'John',
  age: 25,
  address: '123 Main St'
};

function getProperty&lt;T, K extends keyof T&gt;(obj: T, key: K) {
  return obj[key];
}

const personName = getProperty(person, 'name');  // Renamed variable
const personAge = getProperty(person, 'age');    // Renamed variable
const personAddress = getProperty(person, 'address');  // Renamed variable

console.log(personName);    // Output: 'John'
console.log(personAge);     // Output: 25
console.log(personAddress); // Output: '123 Main St'
`
        },
        {
          text1: ``,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "Enums:",
      note: [
        {
          text1: `Enums are a way to define a set of named values. They can improve code readability and help catch errors.
            Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

In TypeScript, enums, or enumerated types, are data structures of constant length that hold a set of constant values. Each of these constant values is known as a member of the enum. Enums are useful when setting properties or values that can only be a certain number of possible values. One common example is the suit value of a single card in a deck of playing cards. Every card that is drawn will either be a club, a diamond, a heart, or a spade; there are no possible suit values beyond these four, and these possible values are not likely to change. Because of this, an enum would be an efficient and clear way to describe the possible suits of a card.

Enums stands for <b>Enumerations</b>. Enums are a new data type supported in TypeScript. It is used to define the set of <b>named constants</b>, i.e., a collection of related values. TypeScript supports both <b>numeric</b> and <b>string-based</b> enums. We can define the enums by using the <b>enum</b> keyword.

<b>Why Enums?</b>
Enums are useful in TypeScript because of the following:
=> It makes it easy to change values in the future.
=> It reduces errors which are caused by transporting or mistyping a number.
=> It exists only during compilation time, so it does not allocate memory.
=> It saves runtime and compile-time with inline code in JavaScript.
=> It allows us to create constants that we can easily relate to the program.
=> It will enable developers to develop memory-efficient custom constants in JavaScript, which does not support enums, but TypeScript helps us to access them.

There are three types of Enums in TypeScript. These are:
-> Numeric Enums
-> String Enums
-> Heterogeneous Enums

Numeric Enums
Numeric enums are <b>number-based</b> enums, which store values as numbers. It means we can assign the number to an instance of the enum.

enum Direction {  
    Up = 1,  
    Down,  
    Left,  
    Right,  
}  
console.log(Direction);  

In the above example, we have a numeric enum named <u>Direction</u>. Here, we initialize <u>Up</u> with 1, and all of the following members are <u>auto-incremented</u> from that point. It means Direction.Up has the value 1, <u>Down</u> has 2, <u>Left</u> has 3, and <u>Right</u> has 4.
            `,
          code1: `enum Direction {  
    Up = 1,  
    Down,  
    Left,  
    Right,  
}  
console.log(Direction);  

//-------------JS-----------

"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);

//============ Ex : 2 ==============

enum UserResponse {
  No = 0,
  Yes = 1,
}
function respond(recipient: string, message: UserResponse): any {
  return \`\${recipient} \${message}\`
}
console.log(respond("Princess Caroline", UserResponse.Yes));
//----
// Output:
// Princess Caroline 1

//-------------JS-----------
"use strict";
var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["Yes"] = 1] = "Yes";
})(UserResponse || (UserResponse = {}));
function respond(recipient, message) {
    return \`\${recipient} \${message}\`;
}
console.log(respond("Princess Caroline", UserResponse.Yes));
`,
        },
        {
          text1: `<b>String Enums</b>
    String enums are a similar concept to numeric enums, except that the enum has some subtle runtime differences. In a string enum, each enum values are <b>constant-initialized</b> with a string literal, or with another string enum member rather than numeric values.
    
    String enums do not have <b>auto-incrementing</b> behavior. The benefits of using this enum is that string enums provides better <b>readability</b>. If we were debugging a program, string enums allow us to give a meaningful and readable value when our code runs, independent of the name of the enum member itself.`,
          code1: `enum AppStatus {  
        ACTIVE = 'ACT',  
        INACTIVE = 'INACT',  
        ONHOLD = 'HLD',  
        ONSTOP = 'STOP'  
    }  
    function checkStatus(status: AppStatus): void {  
        console.log(status);  
    }  
    checkStatus(AppStatus.ONSTOP);  
    // Output:---
    // STOP
    
    //-------------JS-----------
    "use strict";
    var AppStatus;
    (function (AppStatus) {
        AppStatus["ACTIVE"] = "ACT";
        AppStatus["INACTIVE"] = "INACT";
        AppStatus["ONHOLD"] = "HLD";
        AppStatus["ONSTOP"] = "STOP";
    })(AppStatus || (AppStatus = {}));
    function checkStatus(status) {
        console.log(status);
    }
    checkStatus(AppStatus.ONSTOP);
    
    `,
        },
        {
          text1: `<b>Heterogeneous Enums</b>
    The heterogeneous enums are enums, which contains both <b>string</b> and <b>numeric</b> values. But it is advised that you don't do this unless there is a need to take advantage of JavaScript runtime behavior.`,
          code1: `enum AppStatus {  
        ACTIVE = 'Yes',  
        INACTIVE = 1,  
        ONHOLD = 2,  
        ONSTOP = 'STOP'  
    }  
    console.log(AppStatus.ACTIVE);  
    console.log(AppStatus.ONHOLD);
    
    // Output:
    // Yes
    // 2
    `,
        },
        {
          text1: `<b>Computed and constant members</b>
    We know that each enum members has a value associated with it. These values can be either constant or computed. We can consider enum member as <b>constant</b> if:
    
    1. It is the first member of the enum and has no initializer value. In this case, it is assigned the value 0.
    <b>Example</b>:
    // Name.Abhishek is constant:  
    enum Name {   
       Abhishek   
    }  
    console.log(Name);  
    
    2. It has no initializer value, and the preceding enum member is a numeric constant. In this case, the value of the current enum member will be the value of the preceding enum member plus one.
    // All enum members in 'Name' and 'Profile' are constant.  
    enum Name {   
       Abhishek,  
       Ravi,  
       Ajay  
    }  
    enum Profile {   
       Engineer=1,  
       Leader,  
       Businessman  
    }  
    
    In TypeScript, we can say that an expression is a constant enum expression if it is:
    => A literal enum expression.
    => A reference to the previously defined constant enum member.
    => A parenthesized constant enum expression.
    => It is one of the +, -, ~ unary operators which is applied to constant enum expression.
    => +, -, *, /, %, <<, >>, >>>, &, |, ^ binary operators with constant enum expressions as operands.
    
    
    `,
          code1: `// All enum members in 'Name' and 'Profile' are constant.  
    enum Name {   
       Abhishek,  
       Ravi,  
       Ajay  
    }  
    enum Profile {   
       Engineer=1,  
       Leader,  
       Businessman  
    }  
       
    
    //-------------JS-----------
    
    "use strict";
    // All enum members in 'Name' and 'Profile' are constant.  
    var Name;
    (function (Name) {
        Name[Name["Abhishek"] = 0] = "Abhishek";
        Name[Name["Ravi"] = 1] = "Ravi";
        Name[Name["Ajay"] = 2] = "Ajay";
    })(Name || (Name = {}));
    var Profile;
    (function (Profile) {
        Profile[Profile["Engineer"] = 1] = "Engineer";
        Profile[Profile["Leader"] = 2] = "Leader";
        Profile[Profile["Businessman"] = 3] = "Businessman";
    })(Profile || (Profile = {}));
    
    
    //In all other cases, the enum member is considered computed. The following enum example includes enum members with computed values.
    enum Weekend {  
      Friday = 1,  
      Saturday = getDate('Dominoz'),  
      Sunday = Saturday * 40  
    }  
      
    function getDate(day : string): number {  
        if (day === 'Dominoz') {  
            return 3;  
        }  
    }  
    console.log(Weekend.Saturday);   
    console.log(Weekend.Sunday);  
    
    // Output:
    
    // 3
    // 120
    `,
        },
        {
          text1: ``,
          code1: ``,
        },
      ]
    },

    {
      id: 1,
      title: "Type Inference",
      note: [
        {
          text1: `TypeScript type inference is a powerful feature that allows you to write more concise and readable code. It also helps to prevent errors by ensuring that your code is type-safe
            Type inference is a feature of TypeScript that allows developers to omit type annotations in certain situations.

            <b>What is type inference?</b>
Type inference enables TypeScript to automatically infer the types of variables, function parameters and return values without the need for explicit declarations. Code is more concise and often more readable, while maintaining robust typing security.

<b>Definition and explanation</b>
TypeScript type inference is a feature that allows the TypeScript compiler to automatically deduce the type of a variable or expression. This means that you do not have to explicitly specify the type of every variable and expression in your code.

For example, consider the following TypeScript code:
const x = 10;
const y = x + 2;
console.log(y); // 12

In this code, the TypeScript compiler can infer that the type of <b>x</b> is <b>number</b>. This is because <b>x</b> is being assigned a number value. The compiler can also infer that the type of <b>y</b> is <b>number</b>, because <b>y</b> is the result of adding two numbers together.

As a result, the TypeScript compiler does not need to be explicitly told the type of <b>x</b> or <b>y</b>. This can make the code more concise and readable, as it eliminates the need for type annotations.

//---

When a variable is initialized without specifying its type, TypeScript analyzes the assigned value to determine its type. For example, if you write const <b>myValue = 5</b>, TypeScript infers that <b>myValue</b> is of type <b>number</b>. This inference is made possible by TypeScript's internal rules, which deduce types from values and the contexts in which they are used.


Similarly, if you return a value from a function without specifying the return type, TypeScript will infer the type of that return value.

function add(a: number, b: number) {
  return a + b; // TypeScript infers that the return type is 'number'
}

<b>Comparison with explicit typing</b>
Explicit typing involves explicitly declaring the type of each variable, parameter or return value. This can be beneficial for code clarity, especially in development teams where readability and rapid code comprehension are crucial.

The code will become more verbose and cluttered in some cases. It's much the same principle as for comments, which don't add value to your code.

const myNumber: number = 5;
function add(a: number, b: number): number {
  return a + b;
}


            `,
          code1: ``,
        },
        {
          text1: `<b>How Does TypeScript Type Inference Work?</b>
TypeScript type inference works by using a variety of techniques to deduce the type of a variable or expression. These techniques include:

<b>Type checking</b>: The TypeScript compiler checks the types of the expressions that are used to initialize a variable or expression. This can be used to infer the type of the variable or expression.
<b>Type inference rules</b>: TypeScript has a set of rules that can be used to infer the type of a variable or expression. These rules are based on the types of the expressions that are used in the variable or expression.
<b>Type annotations</b>: If you have explicitly annotated the type of a variable or expression, the TypeScript compiler will use that type annotation to infer the type of the variable or expression.

How does TypeScript perform inference?`,
          code1: `//*Inference in variables*
//When you declare a variable without specifying its type but assigning it a value, TypeScript infers the type of that value.

const message = "Hello"; // TypeScript infers that 'message' is of type 'string'.
const ultimateQuestion = 42; // TypeScript infers that 'ultimateQuestion' is of type 'number'.
const isValid = true; // TypeScript infers that 'isValid' is of type 'boolean'.

// This inference is based on the literal values provided during declaration. The variable's type is thus locked to that of the initial value.

//---------

// *Inference in functions*
// Type inference in functions can be performed using parameters. Knowing their type enables TypeScript to infer return values.
// TypeScript can also guess the return type by analyzing the value returned by the function.

const add = (a: number, b: number) => a + b;
// The types of parameters 'a' and 'b' are explicitly defined here.
const sendHello = (name: string) => \`Hello, \${name}\`;
// TypeScript infers that the return type is 'string'.


//---------

// *Inference in objects and arrays*
// For objects and arrays, TypeScript recursively infers types by examining the values of each property or element.
const user = {
  name: "Alice",
  age: 30,
  isAdmin: false,
}; // TypeScript infers that 'user' is of type '{ name: string; age: number; isAdmin: boolean; }''

const countMe = [1, 2, 3, 4, 5]; // TypeScript infers that 'countMe' is of type 'number[]'.
const mixed = [1, "two", true]; // TypeScript infers that 'mixed' is of type '(number | string | boolean)[]'.
            
            
            `,
        },
        {
          text1: `<b>Benefits of TypeScript Type Inference</b>
TypeScript type inference provides a number of benefits, including:

<b>Conciseness</b>: TypeScript type inference can help to make your code more concise by eliminating the need for type annotations. This can make your code easier to read and write.
<b>Readability</b>: TypeScript type inference can help to make your code more readable by making it clear what the types of your variables and expressions are. This can make it easier to understand your code for both humans and machines.
<b>Type safety</b>: TypeScript type inference can help to prevent errors by ensuring that your code is type-safe. This means that the TypeScript compiler can detect errors at compile time, rather than at runtime.

<b>Advantages of type inference</b>
Type inference offers several significant advantages:
<b> Reduction of boilerplate code</b>: Type inference reduces the need to write explicit type annotations everywhere, making code more concise.
<b> Improved readability</b>: Fewer type declarations can make code easier to read and understand, especially for experienced developers who can quickly identify types from context.
<b> Early error detection</b>: TypeScript can still detect type errors at compile time, even when types are inferred, ensuring typing safety without code overhead.
<b> Flexibility</b>: Inference allows developers to focus on business logic rather than type management, which can speed up development.
<b> Maintainability**</b>: Fewer explicit type declarations mean fewer change points when refactoring code, making it easier to maintain.
`,
          code1: ``,
        },
        {
          text1: ``,
          code1: ``,
        },
      ]
    },
    {
      id: 1,
      title: "Union Types:",
      note: [
        {
          text1: `Union types allow for the combination of two or more data types into one. This can be useful when a function or variable can accept multiple types of data.

            The TypeScript <b>union</b> has the ability to combine one or two different types of data (i.e., number, string, float, double, etc). It is the most powerful way to express a variable with multiple types. Use pipe ('|') symbol to combine two or more data types to achieve Union type.

            <b>Function Parameter as Union Type</b>: We can pass the function as a parameter. In this example, parameter geeks is of union type. You can pass either a string value or a number value otherwise the compiler will give an error.
            `,
          code1: `Syntax : (type1|type2|type3|...|type-n)
          
          //------------- Ex : 1 --------------
          let geeks: (string | number); 
geeks = 123;   // OK 
geeks = "XYZ"; // OK 
geeks = true;  // Compiler Error  



//------------- Ex : 2 --------------
function displayType(geeks: (string | number)) { 
    if(typeof(geeks) === "number") 
        console.log('geeks is number.') 
    else if(typeof(geeks) === "string") 
        console.log('geeks is string.') 
} 
  
// Output: Code is number.  
displayType(49);  
  
// Output: Code is string. 
displayType("GFG");  
  
// Compiler Error: Argument of type 'true' is not  
// assignable to a parameter of type string | number 
displayType(true);  
`,
        }
      ]
    },
    {
      id: 1,
      title: "Intersection",
      note: [
        {
          text1: `An intersection type creates a new type by combining multiple existing types. The new type has all features of the existing types.
          An intersection type is a type that merges several kinds into one. This allows you to combine many types to create a single type with all of the properties that you require. An object of this type will have members from all of the types given. The ‘&’ operator is used to create the intersection type.
          
          To combine types, you use the & operator as follows:
type typeAB = typeA & typeB;

The <b>typeAB</b> will have all properties from both typeA and <b>typeB</b>.

Note that the union type uses the <b>|</b> operator that defines a variable that can hold a value of either <b>typeA</b> or <b>typeB</b>
let varName = typeA | typeB; // union type

Suppose that you have three interfaces: <b>BusinessPartner, Identity</b>, and <b>Contact</b>.

interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}
The following defines two intersection types:
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;
The <b>Employee</b> type contains all properties of the <b>Identity</b> and <b>Contact</b> type:

type Employee = Identity & Contact;
let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};

And the <b>Customer</b> type contains all properties of the <b>BusinessPartner</b> and <b>Contact</b> type:

type Customer = BusinessPartner & Contact;
let c: Customer = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};

Later, if you want to implement employee sales, you can create a new intersection type that contains all properties of <b>Identity, Contact</b>, and <b>BusinessPartner</b> types:

type Employee = Identity & BusinessPartner & Contact;
let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684',
    credit: 1000
};

Notice both <b>BusinessPartner</b> and <b>Identity</b> have the property <b>name</b> with the same type. If they do not, then you will have an error.

<b>Type Order</b>
When you intersect types, the order of the types doesn’t matter. For example:
type typeAB = typeA & typeB;
type typeBA = typeB & typeA;
`,
          code1: `// ------------ Ex : 1 ------------
interface Student { 
  student_id: number; 
  name: string; 
} 
  
interface Teacher { 
  Teacher_Id: number; 
  teacher_name: string; 
} 
  
type intersected_type = Student & Teacher; 
  
let obj1: intersected_type = { 
  student_id: 3232, 
  name: "rita", 
  Teacher_Id: 7873, 
  teacher_name: "seema", 
}; 
  
console.log(obj1.Teacher_Id); // 7873
console.log(obj1.name); // rita



//---------------- Ex : 2 -------------
interface A { 
  feauA: string; 
  feauB: string; 
} 
  
interface B { 
  feauA: number; 
  feauB: string; 
} 
  
type AB = A & B; 
  
  
let obj1: AB; 
let obj2: AB; 
  
// Error, Type '20' is not assignable 
// to type 'string & number' 
obj1.feauA = 20;  
console.log(obj1.feauA); 
  
obj2.feauB = "c"; 
console.log(obj2.feauB);
// Example 2: In this example, we create two interfaces A and B, in which there are two properties named ‘feauA’ and ‘feauB’. But the type of feauA isn’t the same in both the interfaces, when we try to assign a value 20 to feauA typescript compiler raises an error as the intersection type is of the type ‘string & number’. If we try to assign a string to feauA, the error is not raised as to when intersected the type is String.



//------------- Ex : 3 -----------------
interface A { 
  prop1: String; 
} 
  
interface B { 
  prop2: String; 
} 
  
interface C { 
  prop3: String; 
} 
  
let obj1: A & B = { prop1: "length", prop2: "width" }; 
let obj2: B & A = { prop1: "length", prop2: "width" }; 
let obj3: A & (B & C) = { prop1: "", prop2: "", prop3: "" }; 
let obj4: (A & B) & C = { prop1: "", prop2: "", prop3: "" }; 
  
obj3.prop3 = "height"; 
console.log(obj3.prop3); 
  
obj4.prop1 = "length"; 
console.log(obj4.prop1); 
  
console.log(obj3 == obj4); // false 
console.log(typeof obj3 == typeof obj4); // true 
console.log(typeof obj1 == typeof obj2); // true
// Output:-------
// height
// length
// false
// true
// true


// Example 3: "\`Intersection types are commutative and associative\`": The order of the intersection doesn’t matter when we intersect two or more types. Even if the order of intersection changes the type of the intersected objects are the same, the ‘typeof’ operator is used to check that, the properties of the intersected objects are also the same. 
`,
        },
      ]
    },
    {
      id: 1,
      title: "any",
      note: [
        {
          text1: ``,
          code1: ``,
        },
      ]
    },
    {
      id: 1,
      title: "unknown",
      note: [
        {
          text1: ``,
          code1: ``,
        },
      ]
    },
    {
      id: 1,
      title: "never",
      note: [
        {
          text1: ``,
          code1: ``,
        },
      ]
    },
    {
      id: 1,
      title: "Type Guards:",
      note: [
        {
          text1: `Type guards are a feature in TypeScript that allow developers to check the type of a variable at runtime. This can be useful when working with union types or other situations where the type of a variable may not be known
            `,
          code1: ``,
        }
      ]
    },
    {
      id: 1,
      title: "Decorators:",
      note: [
        {
          text1: `Decorators are a feature in TypeScript that allow for the addition of metadata to classes, methods, and properties. They can be used to modify the behavior of a class or to provide additional information for tools like code analyzers.
            `,
          code1: ``,
        }
      ]
    },
    {
      id: 1,
      title: "Modules:",
      note: [
        {
          text1: `
            Modules are a way to organize code into smaller, reusable components. They allow developers to define private and public parts of a codebase and to import and export components between files.
  
            `,
          code1: ``,
        }
      ]
    },
    {
      id: 1,
      title: "Utility Types",
      note: [
        {
          text1: ``,
          code1: ``,
        },
      ]
    },

  ]
}