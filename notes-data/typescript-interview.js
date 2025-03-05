const Links1 = 'typescript-notes'
const Links2 = 'type'
const Links3 = 'typescript-interview'
const Links4 = 'typescript-projects'

const isHighlighted = 'typescript-interview'

const TypeScriptInterviewData = {
    TypeScriptInterviewNote: [
      {
        id: 1,
        title: "links",
        note: [
          {
            text1: `<a href="https://arc.dev/talent-blog/typescript-interview-questions/" target="_blank">typescript-interview-questions</a>`,
            code1: ``,
          },
        ]
      },
      {
        id: 1,
        title: "What is typescript",
        note: [
          {
            text1: `Typescript code is converted to javascript, which can executed anywhere Javascript is supported : in a browser or Node js

            TypeScript is a superset of JavaScript in which you add types to JavaScript. JavaScript is a loosely typed language which leads to lot of types error in production code. With TypeScript developers can catch those error, even before running the code.
            `,
            code1: ``,
          },
        ]
      },
      {
        id: 1,
        title: "What is explicit and implicit type assignment?",
        note: [
          {
            text1: `<b>Explicit Type Assignment (Manually Defined Type)</b>
Explicit type assignment means that the <u>developer manually specifies the data type</u> of a variable.
<b>Example in TypeScript</b>:
let age: number = 25;      // ✅ Explicitly assigned as a number
let name: string = "John"; // ✅ Explicitly assigned as a string
<b>🔹 Key Characteristics</b>:
The <u>type is explicitly stated</u> when declaring the variable.
Helps catch <u>type errors</u> early.
Common in <u>statically typed languages</u> like TypeScript, Java, and C++.

<b>✅ 2️⃣ Implicit Type Assignment (Automatically Inferred Type)</b>
Implicit type assignment means that <u>the compiler automatically assigns a type based on the assigned value</u> (Type Inference).
<b>Example in TypeScript</b>:
let age = 25;      // ✅ TypeScript infers it as a number (Implicit)
let name = "John"; // ✅ TypeScript infers it as a string (Implicit)

<b>Example in JavaScript (Dynamic Typing)</b>:
let age = 25;      // JavaScript assigns the type dynamically
let name = "John"; // No explicit type declaration needed

<b>Key Characteristics</b>:
=> The <u>compiler/interpreter infers the type</u> based on the assigned value.
=> Common in <u>dynamically typed languages</u> like JavaScript and Python.
=> <u>More flexible</u> but can lead to <u>runtime errors</u> if types change unexpectedly.
`,
            code1: `//Explicit means writing out the type. Like below -
let firstName: string = "Nabendu";

// Implicit means TypeScript will guess the type, based on the value. Like below type will be considered a number
let age = 41;`,
          },
        ]
      },
      {
        id: 1,
        title: "Difference between any, unknown and never in TypeScript?",
        note: [
          {
            text1: ``,
            code1: `//The type of any is used to assign any type of a variable. It will not give error even if you reassign another type. Like below -
let x: any = 10;
x = 'hello'; // No TypeScript error
console.log(x.toUpperCase()); // No TypeScript error

// The type unknown is better than type any, because it requires us checking the type before performing operations on value. Like below -
let y: unknown = 10;
// Type assertion needed before using y as number
if (typeof y === 'number') {
    console.log(y.toFixed(2));
}

// The type never represents value that never occurs. It is typically used for return statements of function that doesn’t returns properly. Like below -
function throwError(message: string): never {
    throw new Error(message);
}`,
          },
        ]
      },
      {
        id: 1,
        title: "How do you give the type of Arrays?",
        note: [
          {
            text1: ``,
            code1: `//For typing array, we need to give the type as below. In this below example the array can contain type of string only.
const names: string[] = ["Nabendu", "Shikha", "Hriday"];
names.push("Dylan"); // no error

// We can also use a readonly keyword, which prevents the array been changed.
const names: readonly string[] = ["Nabendu", "Shikha", "Hriday"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly stri`,
          },
        ]
      },
      {
        id: 1,
        title: "What is Type Inference in array?",
        note: [
          {
            text1: ``,
            code1: `//If we don't give any type to an array, it will infer the type. Like below -

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error`,
          },
        ]
      },
      {
        id: 1,
        title: "What are tuples?",
        note: [
          {
            text1: `It is a type array with pre-defined length and types. It is very useful in giving types of mixed array with different types, like below.`,
            code1: `let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding Hero was here'];`,
          },
        ]
      },
      {
        id: 1,
        title: " What are readonly tuples?",
        note: [
          {
            text1: `If we don't make a tuple readonly, we can add more items to the one defined and TypeScript will not throw any error, like below.`,
            code1: `let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding Hero was here'];
//No safety in indexes from 3
ourTuple.push('This is wrong');

// Now, to fix it we use the keyword readonly before the type.
let ourTuple: readonly [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding Hero was here'];
// throws error as it is readonly
ourTuple.push('Coding Hero took a day off');`,
          },
        ]
      },
      {
        id: 1,
        title: "How to give the types for Objects?",
        note: [
          {
            text1: `We can give the type of object by creating another object like structure and specifying the keys and the type of the keys in the object.`,
            code1: `const car: { brand: string, model: string, year: number } = {
  brand: "Tata",
  model: "Tiago",
  year: 2016
};`,
          },
        ]
      },
      {
        id: 1,
        title: " How to have optional properties in Objects?",
        note: [
          {
            text1: `To give an optional property or key, we need to add the ? after thet key, like below.`,
            code1: `const car: { brand: string, model: string, year?: number } = {
  brand: "Tata",
  model: "Punch"
};`,
          },
        ]
      },
      {
        id: 1,
        title: "Explain enum in TypeScript?",
        note: [
          {
            text1: `An enum is a type of variables which are constants. You have to use the values within it only. The values are numeric by default and starts with 0 and increments by 1.`,
            code1: `enum allDirections { North, East, South, West }

let currentDirection = allDirections.North;
console.log(currentDirection);
// logs 0`,
          },
        ]
      },
      {
        id: 1,
        title: "What is String enum?",
        note: [
          {
            text1: `If you want the enum to contain strings instead of the default number, you need to specify the same.`,
            code1: `enum allDirections {
  North = "North",
  East = "East",
  South = "South",
  West = "West"
};

let currentDirection = allDirections.North;
console.log(currentDirection);
// logs "North"`,
          },
        ]
      },
      {
        id: 1,
        title: "What are Type Aliases?",
        note: [
          {
            text1: `They allow to define type with a custom name and can be used for all primitive types like string and number and also complex type like objects and arrays. Like below -`,
            code1: `type Year = number
type Type = string
type Model = string
type Car = {
  year: Year,
  type: Type,
  model: Model
}

const carYear: Year = 2005
const carType: Type = "Tata"
const carModel: Model = "Tiago"
const car: Car = {
  year: Year,
  type: Type,
  model: Model
};`,
          },
        ]
      },
      {
        id: 1,
        title: "What are interfaces?",
        note: [
          {
            text1: `Interfaces are like type but can be used only for objects. Like below -`,
            code1: `interface Square {
   length: number
}

const square: Square {
  length: 20
}`,
          },
        ]
      },
      {
        id: 1,
        title: "How to extend interfaces?",
        note: [
          {
            text1: `Interfaces can be extended with the extend keyword. Like below -`,
            code1: `interface Square {
   length: number
}

interface ColorSquare extends Square {
    color: string
}

const square: ColorSquare {
  length: 20,
  color: blue
}`,
          },
        ]
      },
      {
        id: 1,
        title: "What are Union types?",
        note: [
          {
            text1: `Union types are used when the property can be more then one value, like string or number. For this reason, they are also called OR and are used by using | symbol. Like below -`,
            code1: `function printSucessCode(code: string | number) {
  console.log(\`My success code is \${code}.\`)
}
printSucessCode(200);
printSucessCode('200');`,
          },
        ]
      },
      {
        id: 1,
        title: "How to give the return type in function?",
        note: [
          {
            text1: `We can give the return types of functions with : symbol after function name. Like below -`,
            code1: `function getSum(): number {
    return 24;
}

function printMessage(): void {
    console.log("Good Morning");
}`,
          },
        ]
      },
      {
        id: 1,
        title: "How to give type of parameters in function?",
        note: [
          {
            text1: `We can give the type of parameters by mentioning them after each parameter with : symbol.`,
            code1: `function sum(a: number, b: number) {
  return a + b;
}`,
          },
        ]
      },
      {
        id: 1,
        title: "How to give optional, default and rest parameters in function?",
        note: [
          {
            text1: `With default parameter, we can mark a parameter as optional. Like this, where c is optional and denoted by ?.`,
            code1: `//With default parameter, we can mark a parameter as optional. Like this, where c is optional and denoted by ?.
function substract(a: number, b: number, c?: number) {
  return a - b -(c || 0);
}

// The default values(an ES6 feature), goes after the type/ Like below -
function multiply(a: number, b: number=10) {
  return a * b;
}

// The rest parameters(an ES6 feature), are given the type of array, because they convert passed items in array. Like below -
function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((acc, curr) => acc+ curr, 0);
}
`,
          },
        ]
      },
      {
        id: 1,
        title: "What is casting in TypeScript?",
        note: [
          {
            text1: ``,
            code1: `//Casting is the process of overriding a type of a variable. Like in the below example, the type is unknown but is made string while using with the as keyword.
let y: unknown = 'Welcome';
console.log((y as string).length);

// We can also use <> in place of as. Both means the same.
let y: unknown = 'Welcome';
console.log((<string>y).length);`,
          },
        ]
      },
      {
        id: 1,
        title: "How to give type of a variable in Class?",
        note: [
          {
            text1: `In this simple example, we have given the type of name as string in a class.`,
            code1: `class Developer {
  name: string;
}

const dev = new Developer();
dev.name = "Nabendu";`,
          },
        ]
      },
      {
        id: 1,
        title: "What is public, private and protected in TypeScript classes?",
        note: [
          {
            text1: `Below is the meaning of all -
<b>public</b> - Default if not mentioned and allows the class member to be accessed from anywhere.
<b>private</b> - The class member can be accessed from only within the class.
<b>protected</b> - The class member can be accessed by itself or an inherited class.`,
            code1: `// Example of public -
            class Developer {
  public name: string;
}

const dev = new Developer();
dev.name = "Nabendu";`,
          },
          {
            text1: `Example of private. Note that we generally have a get function to access the private member.`,
            code1: `class Developer {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const dev = new Developer("Nabendu");
console.log(person.getName());`,
          },
          {
            text1: `We can also write the shorthand version of above, by directly adding the private variable in the constructor.`,
            code1: `class Developer {
  public constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

const dev = new Developer("Nabendu");
console.log(person.getName());`,
          },
          {
            text1: `For protected we need to inherit from a base class, which we do with the extends keyword. Also, we can get data from an interface to a class, using the implements keyword.`,
            code1: `interface Shape {
  getArea: () => number;
}
      
class Rectangle implements Shape {
  public constructor(protected width: number, protected height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}
      
class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }
}

const mySq = new Square(20);
console.log(mySq.getArea()); //Logs 400`,
          },
          {
            text1: ``,
            code1: ``,
          },
        ]
      },
      {
        id: 1,
        title: "What is the readonly keyword in reference to classes in TypeScript?",
        note: [
          {
            text1: `The readonly keyword prevent a class member from being changed. We generally use readonly with private or protected members.
In the below example, name cannot be changed after the initial definition.`,
            code1: `class Developer {
  private readonly name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const dev = new Developer("Nabendu");
console.log(person.getName());`,
          },
        ]
      },
      {
        id: 1,
        title: "How to implement overriding in classes of TypeScript?",
        note: [
          {
            text1: `Overriding is an important OOPs concept, where the inherited class overrides a function(mostly) in it’s parent class. We implement the same by using override keyword in the function.`,
            code1: `interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }

  public toString(): string {
    return \`Rectangle width is \${this.width} and height is \${this.height}\`;
  }
}

class Square extends Rectangle {
  public constructor(width: number) {
    super(width, width);
  }

  public override toString(): string {
    return \`Square width is \${this.width}\`;
  }
}

const square = new Square(20);
console.log(square.toString()); // Logs - Square width is 20`,
          },
        ]
      },
      {
        id: 1,
        title: "What are Abstract classes?",
        note: [
          {
            text1: `When we declare a base class with abstract keyword, we cannot create objects for the same. In this method, we generally use the methods of the abstract class in a child class.

Also, if we add abstract keyword in front of a function inside base class, we need to create it in the child class. But this is not required for a non-abstract function.`,
            code1: `abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return \`Polygon area is \${this.getArea()}\`;
  }
}

class Rectangle extends Polygon {
  public constructor(protected width: number, protected height: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

const rect = new Rectangle(10,20);
console.log(rect.getArea()); // Logs - 200
console.log(rect.toString());// Logs - Polygon area is 200`,
          },
        ]
      },
      {
        id: 1,
        title: "What are Singleton classes.",
        note: [
          {
            text1: `The Singleton classes are special types of classes, to ensure that we only have one instance of a class.

To make this class, we make the constructor private, preventing the use of new to create objects. Next, we use static method to create a single instance of the class. The example is below -`,
            code1: `class Coder {
  private static instance: Coder;

  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new Coder();
    return this.instance;
  }
}

const c1 = Coder.getInstance();
const c2 = Coder.getInstance();

console.log(c1 === c2); //Logs - true`,
          },
        ]
      },
      {
        id: 1,
        title: "What are Generics in TypeScript. Give examples in functions, classes and type aliases.",
        note: [
          {
            text1: `Generics allows to create type variables which can be used to create classes, functions and type aliases. Here, we don’t have to define the types that they use.`,
            code1: `//Function example -
function createArray<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createArray<string, number>('JS', 42)); //Logs - ['JS', 42]


// Class example -
class GenericClass<T> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return \`\${this.name}: \${this._value}\`;
  }
}
      
const value = new GenericClass<number>('theNum');2
value.setValue(10);
console.log(value.toString()); // theNum: 10

// Type aliases example -
type Numberic<T> = { value: T };
const ageValue: Numberic<number> = { value: 40 };`,
          },
        ]
      },
      {
        id: 1,
        title: "What is Partial, utility type.",
        note: [
          {
            text1: `Partial changes all the properties to be optional in an object. In the below example, the interface have width and height. But, we have given only width because ew have made rectPart as Partial.`,
            code1: `interface Rectangle {
  width: number;
  height: number;
}
            
let rectPart: Partial<Rectangle> = {}; 
rectPart.width = 100;

console.log(rectPart); // Logs - { width: 100 }`,
          },
        ]
      },
      {
        id: 1,
        title: "What is Required, utility type.",
        note: [
          {
            text1: `Required changes all the properties to be required in an object. In the belo example, the milage is made optional in the interface. But when we had made it Required while creating the object, we are forced to give the milage.`,
            code1: `interface Car {
  make: string;
  model: string;
  mileage?: number;
}
            
let myCar: Required<Car> = {
  make: 'Tata',
  model: 'Tiago',
  mileage: 20 // \`Required\` forces mileage to be defined
};

console.log(myCar); // Logs - { make: 'Tata', model: 'Tiago', mileage: 20 }`,
          },
        ]
      },
      {
        id: 1,
        title: "What is Record, utility type.",
        note: [
          {
            text1: `Record is a shortcut to define an object, with specified key type and value type.`,
            code1: `const nameAgeObj: Record<string, number> = {
  'Nabendu': 42,
  'Shikha': 41
};

console.log(nameAgeObj);// Logs - { Nabendu: 42, Shikha: 41 }`,
          },
        ]
      },
      {
        id: 1,
        title: "What is Omit, utility type.",
        note: [
          {
            text1: ``,
            code1: ``,
          },
        ]
      },
      {
        id: 1,
        title: "Utility Types",
        note: [
          {
            text1: `Omit removes keys from any object type. Like in the below example, omit have removed age and location from the type, which cannot be defined.`,
            code1: `interface Coder {
  name: string;
  age: number;
  location?: string;
}
    
const nabs: Omit<Coder, 'age' | 'location'> = {
  name: 'Nabendu'
};

console.log(nabs); // Logs - { name: 'Nabendu' }`,
          },
        ]
      },
      {
        id: 1,
        title: "What is Pick, utility type.",
        note: [
          {
            text1: `Pick removes all the keys from any object, excep the specified keys. Like in the below example, pick have removed age and location from the type, which cannot be defined.`,
            code1: `interface Coder {
  name: string;
  age: number;
  location?: string;
}
    
const nabs: Pick<Coder, 'name'> = {
  name: 'Nabendu'
};

console.log(nabs); // Logs - { name: 'Nabendu' }`,
          },
        ]
      },
      {
        id: 1,
        title: "What is Exclude, utility type.",
        note: [
          {
            text1: `Exclude is used to removes types from a union. Like in the below example boolean cannot be used, because it is excluded.`,
            code1: `type Marks = string | number | boolean;

const value: Exclude<Marks, boolean> = '56';

console.log(typeof value); // Logs - string`,
          },
        ]
      },
      {
        id: 1,
        title: "What is Readonly, utility type.",
        note: [
          {
            text1: `Readonly is used to create a type which cannot be modified once assigned a value. Like in the below example once we had assigned a value to the person object, it cannot be changed.`,
            code1: `interface Person {
    name: string;
    age: number;
}

const person: Readonly<Person> = {
    name: "Nabendu",
    age: 42,
};

person.name = 'Parag'; // Logs error`,
          },
        ]
      },
      {
        id: 1,
        title: "What is Nullish Coalescence.",
        note: [
          {
            text1: `Nullish Coalescence is used in expressions which have a fallback feature while dealing with null or undefined. It is used with the ?? operator.

Like in the below example mileage can be number, null or undefined. Here, we are using ?? to make it NA when the value is null or undefined.`,
            code1: `function showMileage(mileage: number | null | undefined) {
  console.log(\`Mileage: \${mileage ?? 'NA'}\`);
}
            
showMileage(null); // Logs 'Mileage: NA'
showMileage(0); // Logs 'Mileage: 0'
showMileage(undefined); // Logs 'Mileage: NA'`,
          },
        ]
      },
      {
        id: 1,
        title: "Rest Parameters",
        note: [
          {
            text1: `TypeScript supports rest parameters, allowing you to handle an arbitrary number of arguments as an array.`,
            code1: `function greet(name: string = "Guest"): string {
    return \`Hello, \${name}!\`;
}
// This is perfect for scenarios like summing a list of numbers.`,
          },
        ]
      },
      {
        id: 1,
        title: "Function Overloading",
        note: [
          {
            text1: `Function overloading allows you to define multiple signatures for a single function. This is useful for creating flexible APIs.`,
            code1: `function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
    return a + b;
}
// The implementation handles different input types, while TypeScript enforces the correct usage.`,
          },
        ]
      },
      {
        id: 1,
        title: "this* Typing in Functions",
        note: [
          {
            text1: `Explicitly defining the type of this ensures type safety when using it inside functions.`,
            code1: `interface Person {
    name: string;
    greet(this: Person): string;
}
const person: Person = {
    name: "Alice",
    greet() {
        return \`Hi, I'm \${this.name}\`;
    }
};
//This prevents incorrect usage of 'this' in function calls.
`,
          },
        ]
      },
      {
        id: 1,
        title: "Generic Functions",
        note: [
          {
            text1: ``,
            code1: ``,
          },
        ]
      },
      {
        id: 1,
        title: "Utility Types",
        note: [
          {
            text1: `Generics allow functions to work with any type, making them reusable and type-safe.`,
            code1: `function identity<T>(arg: T): T {
    return arg;
}
const str = identity<string>("hello");
const num = identity<number>(42);`,
          },
        ]
      },
      {
        id: 1,
        title: "Call, Apply, and Bind",
        note: [
          {
            text1: ``,
            code1: `function sayHello(this: { name: string }): string {
    return \`Hello, \${this.name}\`;
}
const user = { name: "John" };
console.log(sayHello.call(user));
//Use .call, .apply, or .bind to invoke functions with specific this values.`,
          },
        ]
      },
      {
        id: 1,
        title: "Call, Apply, and Bind",
        note: [
          {
            text1: `These methods allow explicit control over the this context of a function. Understanding them demonstrates mastery of JavaScript fundamentals`,
            code1: `function sayHello(this: { name: string }): string {
    return \`Hello, \${this.name}\`;
}
const user = { name: "John" };
console.log(sayHello.call(user));
//Use .call, .apply, or .bind to invoke functions with specific this`,
          },
        ]
      },
      {
        id: 1,
        title: "Void and Never Return Types",
        note: [
          {
            text1: `
=>             Use void for functions that don't return a value.
=> Use never for functions that never return, such as those that throw errors.
            `,
            code1: `function logMessage(message: string): void {
    console.log(message);
}

function throwError(message: string): never {
    throw new Error(message);
}`,
          },
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