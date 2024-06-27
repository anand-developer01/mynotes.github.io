const TypeScriptData = {
    TypeScriptNote: [
      {
        id: 1,
        title: "TypeScript",
        note: [
          {
            text1: `
            TypeScript adds static typing with optional type annotations to JavaScript.
  
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
            text1: `
            > Research has shown that TypeScript can spot 15% of common bugs.
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
            text1: `
            <b>Primitive types</b>
            In JavaScript, a primitive value is data that is not an object and has no methods. There are 7 primitive data types:
  
            string
            number
            bigint
            boolean
            undefined
            null
            symbol
            <b>Primitives are immutable</b>: they can't be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can't be changed in the ways that objects, arrays, and functions can be altered.
            `,
            code1: `
            let name = 'Danny';
            name.toLowerCase();
            console.log(name); // Danny - the string method didn't mutate the string
  
            let arr = [1, 3, 5, 7];
            arr.pop();
            console.log(arr); // [1, 3, 5] - the array method mutated the array
  
            name = 'Anna' // Assignment gives the primitive a new (not a mutated) value
            `,
          }
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
            text1: `Type annotations are a crucial concept in TypeScript. They allow developers to specify the data types of variables, function parameters, and return types. This can help catch errors during development and improve code readability.`,
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
            text1: `Interfaces are used to define the structure of an object. They specify the names and types of the object’s properties and can be used to enforce consistency across multiple objects.
  
  Interfaces are a feature of TypeScript that allows us to define the structure or shape of an object and specify the properties and methods that an object has or should have. Their primary function is type checking and aiding developers in catching type-related errors during development.`,
            code1: `
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
  
            // We also can see an example of us trying to access a property that doesn’t exist in the interface by running console.log(personOne.hobbies), therefore throwing a type error.
  
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
          {
            text1: ``,
            code1: ``,
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
  <b> ReadonlyArray<T> </b>
  TypeScript comes with a ReadonlyArray<T> type that is the same as Array<T> with all mutating methods removed, so you can make sure you don’t change your arrays after creation:`,
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
        title: "readonly vs const",
        note: [
          {
            text1: `The easiest way to remember whether to use <b>readonly</b> or <b>const</b> is to ask whether you’re using it on a variable or a property. Variables use <b>const</b> whereas properties use <b>readonly</b>.
  
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
        title: "What is a const assertion?",
        note: [
          {
            text1: `A <b>const</b> assertion in TypeScript is used to indicate that a variable should be treated as a constant at compile-time. This means that the value of the variable cannot be changed after it has been initialized.
  
            Here’s an example of how to use a const assertion:
  
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
            text1: `
            Generics are a powerful feature in TypeScript that allow for the creation of reusable code. They allow developers to create functions and classes that can work with a variety of data types.

            Generics in TypeScript are a way to create reusable components and functions that work with a variety of data types while maintaining type safety. They allow you to define placeholders for types that are specified later when the generic type is used. This enables you to write more flexible and reusable code.

            Generics in TypeScript enable writing code that can work with a variety of data types while maintaining type safety. They allow the creation of reusable components, functions, and data structures without sacrificing type checking.

Generics are represented by type parameters, which act as placeholders for types. These parameters are specified within angle brackets (<>) and can be used throughout the code to define types of variables, function parameters, return types, and more.

Let's start with a simple example of a generic function:

In this example, <b>identity</b> is a generic function that takes a type parameter <b>T</b>. The parameter <b>arg</b> is of type <b>T</b>, and the return type of the function is also <b>T</b>. When calling <b>identity<string>("hello")</b>, the type parameter <b>T</b> is inferred as <b>string</b>, ensuring type safety.

-> <b>T</b> is a type parameter.
-> <b>arg</b> is of type <b>T</b>, meaning the function accepts an argument of any type and returns the same type.
            `,
            code1: `function identity<T>(arg: T): T {
              return arg;
          }
          
          // Usage
          let output = identity<string>("hello"); // output is of type 'string'
          let output2 = identity<number>(42); // output2 is of type 'number'
          `,
          },
          {
            text1: `The main reason to use generics in TypeScript (and any other programming language) is to enable types (classes, types, or interfaces) to act as parameters. It helps us reuse the same code for different types of input since the type itself is available as a parameter.

            Defining a relationship between input and output parameters types. For example, <b>function test <T>(input: T[]): T { ... }</b> allows you to make sure input and output use the same type, though input as an array.

            1) <b>Type Safety</b>: TypeScript ensures that the types used with generics are enforced correctly, preventing type errors at compile-time.

            2) <b>Code Reusability</b>: Generics allow you to write functions and components that can work with different data types, promoting code reuse without sacrificing type safety.
        
            3) <b>Flexibility</b>: Generics provide flexibility by allowing types to be specified dynamically when the function or component is used, rather than being fixed at the time of definition.
            `,
            code1: `
            // TypeScript code
            class Box<T> {
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
          }
        ]
      },
      {
        id: 1,
        title: "Enums:",
        note: [
          {
            text1: `
              Enums are a way to define a set of named values. They can improve code readability and help catch errors.
            `,
            code1: ``,
          }
        ]
      },
      {
        id: 1,
        title: "Type Inference",
        note: [
          {
            text1: `
            Type inference is a feature of TypeScript that allows developers to omit type annotations in certain situations.
            `,
            code1: ``,
          }
        ]
      },
      {
        id: 1,
        title: "Union and Intersection Types:",
        note: [
          {
            text1: `
            Union types allow for the combination of two or more data types into one. This can be useful when a function or variable can accept multiple types of data.
            `,
            code1: ``,
          }
        ]
      },
      {
        id: 1,
        title: "Type Guards:",
        note: [
          {
            text1: `
            Type guards are a feature in TypeScript that allow developers to check the type of a variable at runtime. This can be useful when working with union types or other situations where the type of a variable may not be known
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
            text1: `
            Decorators are a feature in TypeScript that allow for the addition of metadata to classes, methods, and properties. They can be used to modify the behavior of a class or to provide additional information for tools like code analyzers.
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
        title: "Classes",
        note: [
          {
            text1: `
            
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
            
            `,
            code1: ``,
          }
        ]
      },
    ]
  }