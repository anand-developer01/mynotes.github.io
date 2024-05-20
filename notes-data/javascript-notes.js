const javascriptData = {
  javascriptNote: [
    {
      id: 1,
      title: "Array destructuring",
      note: [
        {
          text1 : `//Array destructuring is a unique technique that allows you to neatly extract an array's value into new variables.

          //Array destructuring in JavaScript is a syntax that allows you to extract values from arrays and assign them to variables in a concise way. It's a shorthand syntax for extracting multiple values from an array simultaneously.
          
          // Data needed for first part of the section`,
          code1 : `const restaurant = {
            name: 'Classico Italiano',
            location: 'Via Angelo Tavanti 23, Firenze, Italy',
            categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
            starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
            mainMenu: ['Pizza', 'Pasta', 'Risotto'],
          
            openingHours: {
              thu: {
                open: 12,
                close: 22,
              },
              fri: {
                open: 11,
                close: 23,
              },
              sat: {
                open: 0, // Open 24 hours
                close: 24,
              },
            },
            order: function(startIndex, mainIndex) {
              return [this.starterMenu[startIndex], this.mainMenu[mainIndex]]
            }
          };`
        },
        {
          text1 : `// Multi-level array destructuring in JavaScript allows you to extract values not only from the top level of an array but also from nested arrays within it. This is particularly useful when working with arrays of arrays (also known as nested arrays or multidimensional arrays).
          `,
          code1 : `console.log(restaurant.order(2, 0))

          const copy2ar = [...restaurant.starterMenu, ...restaurant.mainMenu];
          console.log(copy2ar);
          
          const { name: resName, categories: cats, starterMenu: mms } = restaurant
          console.log(resName, cats, mms)
          
          const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
          
          const newRes = { since: 1995, newRes: [restaurant.order(1, 1), restaurant.starterMenu], rr: restaurant?.openingHours[weekDays[1]], founder: "anand" }
          
          console.log(newRes);
          
          //------
          let a = 44;
          let b = 55;
          const obb = { a: 4, b: 6, c: 8 };
          ({ a, b } = obb) // => 4 6`
        },
        {
          text1 : ``,
          code1 : ``
        },
        {
          text1 : ``,
          code1 : ``
        },
        {
          text1 : ``,
          code1 : ``
        }
      ]
    },
    {
      id: 1,
      title: "Object destructuring",
      note: [
        {
          text1 : `//Object destructuring is a unique technique that allows you to neatly extract an Object value into new variables.

          //Object destructuring in JavaScript is a syntax that allows you to extract values from Object and assign them to variables in a concise way. It's a shorthand syntax for extracting multiple values from an Object simultaneously.
          
          // Object destructuring in JavaScript is a feature that allows you to extract properties from objects and assign them to variables in a concise way. It's commonly used when working with objects returned from functions or when dealing with complex data structures.
          
          //Object destructuring is a unique technique that allows you to neatly extract an Object value into new variables.
          
          //Object destructuring in JavaScript is a syntax that allows you to extract values from Object and assign them to variables in a concise way. It's a shorthand syntax for extracting multiple values from an Object simultaneously.`,
          code1 : `const restaurant = {
            name: 'Classico Italiano',
            location: 'Via Angelo Tavanti 23, Firenze, Italy',
            categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
            starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
            mainMenu: ['Pizza', 'Pasta', 'Risotto'],
          
            openingHours: {
              thu: {
                open: 12,
                close: 22,
              },
              fri: {
                open: 11,
                close: 23,
              },
              sat: {
                open: 0, // Open 24 hours
                close: 24,
              },
            },
            order: function(startIndex, mainIndex) {
              return [this.starterMenu[startIndex], this.mainMenu[mainIndex]]
            },
            orderDelivery: function({
              time = "8:40",
              startIndex,
              mainIndex = 0,
              address
            }) {
              // object Parameters destructuring
              // default values
              return 'Food item \${this.starterMenu[startIndex]} and \${this.mainMenu[mainIndex]} scheduled to delivey on \${time} at address : \${address} '
            }
          };`
        },
        {
          text1 : `Multi-level array destructuring in JavaScript allows you to extract values not only from the top level of an array but also from nested arrays within it. This is particularly useful when working with arrays of arrays (also known as nested arrays or multidimensional arrays).`,
          code1 : `console.log("order ", restaurant.order(2, 0))

          const copy2ar = [...restaurant.starterMenu, ...restaurant.mainMenu];
          console.log(copy2ar);`
        },
        {
          text1 : `if we wanted the variable names to be different from the property names?`,
          code1 : `const {
            name: restaurantName,
            categories: cats,
            starterMenu: breakFast
          } = restaurant
          console.log("different variable names ", restaurantName, cats, breakFast)
          
          // Default values:
          //----------------
          // There is no 'menu' array in restaurant object
          // starters New variable created
          const { menu = [], starterMenu: starters = [] } = restaurant
          console.log("Default values", menu, starters)
          
          //Mutating Variables
          let a = 44;
          let b = 55;
          const obj = { a: 4, b: 6, c: 8 };
          // is that when we start a line with a curly brace like this, then JavaScript expects a code block, And since we cannot assign anything to a code block, then we get this error, the trick is to wrap all of this into a parenthesis.
          ({ a, b } = obj) // => 4 6 
          

          //Nested Objects
          const { openingHours: { fri: { open: o, close: c } } } = restaurant
          const { fri: { open, close } } = restaurant.openingHours
          console.log("Nested Objects ", open, close)
          console.log("Nested Objects with new name variables", o, c)
          
          
//---------------------->
// In destructuring the function object parameter
const deliveryItem = restaurant.orderDelivery({
  time: '10:30',
  address: 'LIG - 7',
  startIndex: 1,
  mainIndex: 2
})
console.log("Order Delivery function parameters:-- ", deliveryItem)

// default values
const deliveryItem2 = restaurant.orderDelivery({
  address: 'LIG - 7',
  startIndex: 1,
})
console.log("Order Delivery function parameters. Default values:--", deliveryItem2)
//---------------------->


// const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
// let newRes = { since: 1995, newRes: [restaurant.order(1, 1), restaurant.starterMenu], openClose : { restaurant : { openingHours : { fri : { open : o, close : c} } } } , founder: "anand" }
const newRes = { since: 1995, newRes: [restaurant.order(1, 1), restaurant.starterMenu], resOpenings: { openingHours: { fri: { open: op, close: cl } } } = restaurant, founder: "anand" }

console.log(newRes);


const { openingHours: { fri: { open: op1, close: cl1 } } } = restaurant

console.log(op1, cl1);
          `
        },
      ]
    },
    {
      id: 1,
      title: "rest operator",
      note: [
        {
          text1 : `//rest operator is to pack elements into an array

          // The operator is used to put some user-supplied values into an Array. The text after the rest operator references the values you wish to encase inside an array. You can only use it before the last parameter in a function definition.
          
          // While the spread operator expands elements, the rest operator condenses them into a single entity within function parameters or array destructuring.It collects remaining elements into a designated variable, facilitating flexible function definitions and array manipulation
          
          // Rest Parameter (...args) Details:
          
          // Collecting Function Arguments: The rest parameter syntax allows a function to accept an indefinite number of arguments as an array. This is particularly useful when you want to create functions that can accept a variable number of arguments.
          
          // Collecting Remaining Array Elements: In array destructuring, the rest parameter collects the remaining elements into a new array. This can be helpful when you want to extract certain elements from an array and gather the rest into a separate variable.
          
          // Combining with Destructuring: Rest parameters can be combined with array destructuring to collect remaining elements into a separate array. This allows for flexible handling of arrays, especially when the length of the array is not fixed.
          
          // Function Signatures: Rest parameters are commonly used in function signatures to indicate that a function can accept multiple arguments and gather them into an array within the function body.`,
          code1 : ``
        },
      ]
    },
    {
      id: 1,
      title: "spread operator",
      note: [
        {
          text1 : `//The spread operator is to unpack an array
          // The spread operator, denoted by three consecutive dots (...), is primarily used for expanding iterables like arrays into individual elements. This operator allows us to efficiently merge, copy, or pass array elements to functions without explicitly iterating through them.
          
          // Expanding Iterables:- The spread operator is primarily used to expand an iterable (like arrays, strings, etc.) into individual elements. It essentially spreads the values of an iterable into a new context.
          
          // Copying Arrays:- When used with arrays, the spread operator creates a shallow copy of the array. This means it creates a new array and copies over the values from the original array.
          
          // Concatenating Arrays:- It allows for easily concatenating or merging multiple arrays into a single array.
          
          // Passing Arguments:- Spread is frequently used when calling functions that expect a variable number of arguments. It can pass each element of an array as an argument to the function.
          
          // Object Literals:- It can also be used to merge properties of objects into a new object.
          
          // Iterating Over Strings: With strings, the spread operator can be used to split the string into individual characters.`,
          code1 : `const restaurant = {
            name: 'Classico Italiano',
            location: 'Via Angelo Tavanti 23, Firenze, Italy',
            categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
            starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
            mainMenu: ['Pizza', 'Pasta', 'Risotto'],
          
            openingHours: {
              thu: {
                open: 12,
                close: 22,
              },
              fri: {
                open: 11,
                close: 23,
              },
              sat: {
                open: 0, // Open 24 hours
                close: 24,
              },
            },
            order: function(startIndex, mainIndex) {
              return [this.starterMenu[startIndex], this.mainMenu[mainIndex]]
            },
            orderDelivery: function({
              time = "8:40",
              startIndex,
              mainIndex = 0,
              address
            }) {
              // object Parameters destructuring
              // default values
              return 'Food item \${this.starterMenu[startIndex]} and \${this.mainMenu[mainIndex]} scheduled to delivey on \${time} at address : \${address} '
            },
            orderPasta: function(ing1, ing2, ing3) {
              console.log('Pasta Ingredients \${ing1}, \${ing2} and \${ing3}')
            }
          };
          
          // spread operator doing the concat job
          let arr = [1, 2, 3];
          let arr2 = [4, 5];
          
          // join 2 arrays
          arr = [...arr, ...arr2];
          console.log(arr); // [ 1, 2, 3, 4, 5]
          
          const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu]
          console.log(fullMenu)
          `
        },
        {
          text1 : `// hallow copy Using spread operator
          // hallow copy is a bit-wise copy of an object which makes a new object by copying the memory address of the original object. That is, it makes a new object by which memory addresses are the same as the original object.`,
          code1 : `const newRestaurant = { since: 1992, ...restaurant, founder: 'annd' };
          console.log(newRestaurant)
          
          const restaurantCopy = { ...restaurant }
          restaurantCopy.name = 'dabha'
          console.log("shallo copy restaurant", restaurantCopy)
          console.log("old restaurant", restaurant)`
        },
        {
          text1 : `// Deep copy, copies all the fields with dynamically allocated memory. That is, every value of the copied object gets a new memory address rather than the original object.

          // How do I deep copy an object.
          // There are several ways I think. A common and popular way is to use JSON.stringify() and JSON.parse().`,
          code1 : `const oldObj = { a: { b: 10 }, c: 2 };
          const newObj = JSON.parse(JSON.stringify(oldObj));
          
          oldObj.a.b = 3;
          oldObj.c = 4;
          
          console.log('oldObj', oldObj);
          console.log('newObj', newObj);
          
          
          // Iterables : arrays, strings, maps, sets. NOT Objects
          const str = 'Anand';
          const myName = [...str, "'", 'S']
          console.log(myName)
          // console.log('\${...myName}') // Error Uncaught SyntaxError: Unexpected token '...' 
          const myNameCopy = [...myName];
          console.log('my name is \${[...myName]} - \${myNameCopy}')
          
          const ingredients = [prompt("let\'s make pasta Ingredient !?"), prompt("Ingredient 2?"), prompt("Ingredient 3")];
          console.log(ingredients)
          restaurant.orderPasta(...ingredients)`
        },
        {
          text1 : ``,
          code1 : ``
        },
      ]
    },
    {
      id: 1,
      title: "for...of loop",
      note: [
        {
          text1 : `// A for...of loop operates on the values sourced from an iterable one by one in sequential order. Each operation of the loop on a value is called an iteration, and the loop is said to iterate over the iterable. Each iteration executes statements that may refer to the current sequence value.

          // The for..of loop in JavaScript allows you to iterate over iterable objects (arrays, sets, maps, strings etc).
          `,
          code1 : `const students = ['John', 'Sara', 'Jack', 'red', 'green', 'blue'];

          // using for...of
          for (let item of students) {
          
            // display the values
            console.log(item);
          }
          
          // entries
          for (let [i, item] of students.entries()) {
            console.log(i + 1, item);
          }
          
          console.log(...students.entries())
          
          // Restaurant Examples
          // Property Names
          const properties = Object.keys(restaurant.hours)
          
          let openStr = 'we are open on \${properties.length} days :';
          
          for (const day of properties) {
            openStr += '\${day}, ';
          }
          
          console.log(openStr)
          
          //Propety Values
          const values = Object.values(restaurant.hours)
          console.log(values)
          
          //Entire Object
          const entries = Object.entries(restaurant.hours)
          
          // { open, close } 
          for (let [day, { open, close }] of entries) {
            console.log('On \${day} we open \${open} and close \${close}')
          }`
        },
        {
          text1 : ``,
          code1 : ``
        },
      ]
    },
    {
      id: 1,
      title: "Prototypes",
      note: [
        {
          text1 : ``,
          code1 : ``
        },
        {
          text1 : ``,
          code1 : ``
        },
      ]
    },
    {
      id: 1,
      title: "Prototypes",
      note: [{
        text1: `// In JavaScript, every object has an internal property called [[Prototype]], which
        is
        essentially a reference to another object called its prototype. This prototype is a
        fundamental concept in JavaScript's object-oriented programming model.

        // Prototypes: JavaScript is a prototype-based language, which means that it uses
        prototypes to inherit properties and methods from one object to another. In
        JavaScript,
        objects can be linked to other objects, forming a prototype chain. When a property
        or
        method is accessed on an object, the JavaScript engine first checks if that property
        or
        method exists on the object itself. If it does not, it will check the object's
        prototype, and so on, until it reaches the end of the prototype chain. If the
        property
        or method is not found, it will return undefined.

        // Here's a clear breakdown:

        // Every object has a prototype: When you create an object in JavaScript, it
        automatically gets a prototype. This prototype is a regular JavaScript object
        itself,
        and it can have its own properties and methods.

        // The prototype chain: When you try to access a property or method on an object,
        JavaScript first checks if that property or method exists on the object itself. If
        it
        doesn't find it, it looks at the object's prototype, and if it's not there, it
        continues
        up the prototype chain until it finds the property or method or reaches the end of
        the
        chain (where the prototype is null).

        // both __proto__ and prototype are related to object inheritance, but they serve
        different purposes.

        // __proto__:
        // ----------
        // __proto__ is a property that exists on every object in JavaScript.
        // It's a reference to the prototype object from which the current object inherits.
        // When you access a property or method on an object, JavaScript first checks if
        that
        property or method exists directly on the object itself.If it doesn't, JavaScript
        looks
        at the object's __proto__ to find it.This process continues up the prototype chain
        until
        the property or method is found or until the end of the chain is reached(i.e., when
        __proto__ becomes null).
        // It's important to note that __proto__ is considered deprecated and should not be
        used
        for production code. Instead, you should use Object.getPrototypeOf() to get the
        prototype of an object, and Object.setPrototypeOf() to set the prototype of an
        object.

        // prototype:
        // ----------
        // prototype is a property that exists on constructor functions in JavaScript.
        // It's used to set up inheritance when you want to create objects using the new
        keyword.
        // When you create a constructor function and add properties or methods to its
        prototype, those properties and methods become available to instances created using
        that
        constructor function.
        // When you use the new keyword to create an instance of a constructor function, the
        newly created object's __proto__ is set to the constructor function's prototype.
        // In summary, __proto__ is a property that exists on every object and is used to
        reference the prototype of the object, while prototype is a property that exists on
        constructor functions and is used to set up inheritance for objects created using
        those
        constructor functions.

        // Define a constructor function`,
        code1: `// Define a constructor function
        function Person(name, age) {
            this.name = name;
        this.age = age;
}

        // Add a method to the prototype of the Person constructor
        Person.prototype.greet = function() {
            console.log('Hello, my name is \${this.name} and I am \${this.age} years old.');
};

        // Create an instance of Person
        const john = new Person('John', 30);

        // Accessing properties directly on the object
        console.log(john.name); // Output: John
        console.log(john.age); // Output: 30

        // Accessing method defined on the prototype
        john.greet(); // Output: Hello, my name is John and I am 30 years old.

        // Using __proto__
        console.log(john.__proto__ === Person.prototype); // Output: true
        console.log(Object.getPrototypeOf(john) === Person.prototype); // Output: true

        // Changing prototype using __proto__ (not recommended)
        const newPrototype = {
            farewell: function() {
            console.log('Goodbye, \${this.name}!');
}
};
        john.__proto__ = newPrototype;

        john.farewell(); // Output: Goodbye, John!





        // Of course! Let's illustrate with an example:


        // Define a constructor function
        function Person(name, age) {
            this.name = name;
        this.age = age;
}

        // Add a method to the prototype of the Person constructor
        Person.prototype.greet = function() {
            console.log('Hello, my name is \${this.name} and I am \${this.age} years old.');
};

        // Create an instance of Person
        const john = new Person('John', 30);

        // Accessing properties directly on the object
        console.log(john.name); // Output: John
        console.log(john.age); // Output: 30

        // Accessing method defined on the prototype
        john.greet(); // Output: Hello, my name is John and I am 30 years old.

        // Using __proto__
        console.log(john.__proto__ === Person.prototype); // Output: true
        console.log(Object.getPrototypeOf(john) === Person.prototype); // Output: true

        // Changing prototype using __proto__ (not recommended)
        const newPrototype = {
            farewell: function() {
            console.log('Goodbye, \${this.name}!');
}
};
        john.__proto__ = newPrototype;

        john.farewell(); // Output: Goodbye, John!`
      },
      {
        text1: `// In this example:

      // > We define a constructor function Person that takes name and age parameters and
      sets
      them as properties on the created object.
      // > We add a greet method to the Person.prototype, which will be shared among all
      instances of Person.
      // > We create an instance of Person named john.
      // > We access properties (name and age) directly on the john object, and the greet
      method via the prototype chain.
      // > We demonstrate that john.__proto__ points to Person.prototype.
      // > We change the prototype of john using __proto__, but this method is not
      recommended
      for production code.
      // > This example showcases how prototype is used to set up inheritance for objects
      created with a constructor function and how __proto__ is used to reference the
      prototype
      of an object.
      `,
        code1: `//EX 2:---
      // Define a constructor function for a Vehicle
      function Vehicle(make, model) {
          this.make = make;
      this.model = model;
}

      // Add a method to the prototype of Vehicle
      Vehicle.prototype.info = function() {
          console.log('This is a \${this.make} \${this.model}.');
};

      // Create a Car constructor function that inherits from Vehicle
      function Car(make, model, year) {
          Vehicle.call(this, make, model); // Call the Vehicle constructor within the Car constructor
      this.year = year;
}

      // Set up inheritance: Assign Vehicle's prototype to Car's prototype
      Car.prototype = Object.create(Vehicle.prototype);
      Car.prototype.constructor = Car; // Reset constructor property to Car

      // Add a method to the prototype of Car
      Car.prototype.start = function() {
          console.log('Starting the \${this.make} \${this.model}...');
};

      // Create an instance of Car
      const myCar = new Car('Toyota', 'Camry', 2022);

      // Access methods defined on both Vehicle and Car prototypes
      myCar.info(); // Output: This is a Toyota Camry.
      myCar.start(); // Output: Starting the Toyota Camry...

      // Demonstrating the prototype chain
      console.log(myCar.__proto__ === Car.prototype); // Output: true
      console.log(Car.prototype.__proto__ === Vehicle.prototype); // Output: true
      console.log(Vehicle.prototype.__proto__ === Object.prototype); // Output: true`
      }, {
        text1: `// In this example:
        // We define a 'constructor' function 'Vehicle' to represent a generic vehicle with
        make
        and model properties.
        // We add an info method to the 'Vehicle.prototype' to display vehicle information.
        // We define a 'constructor' function Car to represent a specific type of vehicle
        that
        inherits from Vehicle. It adds a year property.
        // We set up inheritance by using Object.create() to link Car.prototype to
        'Vehicle.prototype', thus allowing 'Car' instances to access methods defined on
        Vehicle.
        // We add a start method to the 'Car.prototype' to start the car.
        // We create an instance of 'Car' named 'myCar' and demonstrate accessing methods
        defined on both Vehicle and Car.
        // Finally, we demonstrate the prototype chain, showing how myCar.__proto__ points
        to
        'Car.prototype', 'Car.prototype.__proto__' points to 'Vehicle.prototype', and
        'Vehicle.prototype.__proto__' points to Object.prototype.

        
        //-----------------
        // Function.prototype === Array.prototype and
        Function.prototype.isPrototypeOf(Array.prototype) both are false
        //----------------

        // The reason why Function.prototype.isPrototypeOf(Array.prototype) returns false is
        because Array.prototype is not directly descended from Function.prototype in the
        prototype chain.

        // In JavaScript, Array.prototype inherits from Object.prototype, not directly from
        Function.prototype. The Function constructor function and its prototype properties
        are
        unrelated to Array.

        // Let's clarify by looking at the prototype chain:

        // javascript
        // Copy code
        // console.log(Object.getPrototypeOf(Array.prototype) === Function.prototype); //
        Returns false
        // console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype); //
        Returns
        true
        // This confirms that Array.prototype directly inherits from Object.prototype, not
        from
        Function.prototype.`,
        code1: `function Student(name, age) {
          this.name = name;
      this.age = age;
}
      Student.prototype.prop = 'I am good to see you'

      var stu1 = new Student("John", 50);
      var stu2 = new Student("ram", 43);

      Object.setPrototypeOf(stu1, {area: "wgl" })

      console.log(Object.getPrototypeOf(stu2)) // {prop: 'I am good to see you'}
      console.log(Object.getPrototypeOf(stu1)) // {area: 'wgl'}

      console.log(stu1.__proto__) // {area: 'wgl'}
      console.log(stu2.__proto__) // {prop: 'I am good to see you'}

      console.log(Student.prototype === stu2.__proto__) // true
      console.log(Student.prototype === stu1.__proto__) // false`
      },
      {
        text1: `                                // '.prototype' is a special property that all functions have that contains a
        reference
        to an object.
        // When a constructor is used to instantiate a new object, 'Student.prototype' is
        set as
        the prototype of the new object.
        // All instances of that constructor (the objects it creates) can access the
        properties
        of 'Student.prototype'.

        //--------------------------

        // Every thing is an object in javascript. even thou all kind of data like Array,
        String, Number, Boolean, Function, Set, Map they have they own prototype object with
        usefull properties inside the prototype object these objects call __proto__

        //Every datatype at the end inherite from one object that is called Object.prototype  `,
        code1: `// array type / function type
        // array prototype(or) function prototype -> object prototype -> null
        // Ex:
        let cust =[12, 4, 7]
        // cust.__proto__ points to Array.prototype
        // cust.__proto__ === Array.prototype // true
        // Array.prototype.__proto__ points to Object.prototype
        // Array.prototype.__proto__ === Object.prototype // true
        // Arrray.prototype.__proto__.__proto__ points to null
        // Object.prototype.__proto__ points to null

        // Boolean.__proto__ points to Object.prototype
        // Number.__proto__ === Boolean.__proto__ // true
        // String.__proto__ points to Object.prototype

        // All datatypes in javascript inheries from Object.prototype at the end
        // Object.prototype.__proto__ points to null at the end
        // Object.prototype.__proto__ === null // true
        // this is end of the chain. This chain is called prototype chain
        `
      },
      {
        text1: `// Prototypal inheritance: Prototypal inheritance is the mechanism by which objects
        can
        inherit properties and methods from their prototype.If an object doesn't have a
        property or method, JavaScript looks for it in its prototype, and if the prototype
        doesn't have it, it looks in the prototype's prototype, and so on.

        // Prototype inheritance in JavaScript is a way for objects to share properties and
        methods with other objects.Each object has a hidden link to another object called
        its
        prototype.If a property or method is not found on the object itself, JavaScript
        looks
        for it in its prototype chain.This allows objects to inherit properties and methods
        from their prototypes, creating a form of inheritance without classes.


        //-----------------------
        // Benifits of Prototype
        //-----------------------

        //------------------>
        // They use less memory.
        //------------------>

        // case1 for the userDatails method logic is same if you console user objects every
        object has getMarks function so it crates different memory location for


        // When a method is defined using this.this.getMarks a new copy is created every
        time a
        new object is instantiated.Let's look at an example.

        // In most Object Oriented programming languages a class has a constructor. A
        constructor is a sort of initializing function that is called every time a new
        instance
        of the class is created.Usually the Constructor function name is defined using the
        actual class name or the keyword constructor:

        // If you add properties to 'this' inside the 'userDetails' class, all future
        instances
        of 'userDetails' will get its own copy of the properties and methods, which causes
        redundancy.On a side note, using 'this' is great for accessing and manipulating
        private
        variables.But let's assume we are dealing with public variables.

        // Each instance of 'userDetails' receives a duplicate copy of the getMarks()
        method.
        When the getMarks() method is duplicated in every instance, this can become
        problematic
        as it starts to affect the performance and memory of your app.`,
        code1: `function userDetails(userName, area, m1, m2, m3) {
          this.userName = userName;
          this.area = area;
          this.m1 = m1;
          this.m2 = m2;
          this.m3 = m3;
          this.getMarks = function() {
    return m1 + m2 + m3;
  }
}

          const user1 = new userDetails("ram", "wgl", 15, 54, 76)
          const user2 = new userDetails("ravi", "hyd", 65, 54, 76)

          console.log(user1.getMarks())
          console.log(user2.getMarks())

          console.log(user1.getMarks === user2.getMarks) // false

          // Further, we can see how both of the getMarks() methods are separate and maintain their own copy:`
      },
      {
        text1: ` // Prototypes are the solution
        // Here are some advantages of using prototype methods:

        // 1) If you added a property to getMarks.prototype , then that property will be
        shared
        in all objects associated with the class , including all future objects created
        using new
        userProtoDetails.Sharing the property is different than duplicating.Instances can
        borrow this method through the prototype chain, which will be discussed further.
        // 2) Changing the property value in the methods inherited through the prototype
        chain
        will change all values in the associated objects.
        // 3) In most cases, using 'prototype' or 'this' would be similar, but 'prototype'
        allows you to save memory since there's only one instance of it, rather than its own
        instance for each object.
        // Let's use the same example above, except redacting this.callOrder and using a
        'userProtoDetails.prototype.getMarks' instead:


        // When we run our function, every instance of 'userProtoDetails' does not duplicate
        our
        getMarks() method since it's now part of the prototype and can't be copied:`,
        code1: `function userProtoDetails(userName, area, m1, m2, m3) {
          this.userName = userName;
          this.area = area;
          this.m1 = m1;
          this.m2 = m2;
          this.m3 = m3;
}

          userProtoDetails.prototype.getMarks = function() {
  return this.m1 + this.m2 + this.m3;
}

          const userPro1 = new userProtoDetails("ram", "wgl", 90, 54, 76)
          const userPro2 = new userProtoDetails("ravi", "hyd", 99, 54, 76)

          console.log(userPro1.getMarks())
          console.log(userPro2.getMarks())

          console.log(userPro1.getMarks === userPro2.getMarks) // true`
      },
      {
        text1: `// The prototype chain can be found under '__proto__' , which is an object in each
        instance that points to the prototype it was created from.On the other hand, the
        'prototype' property is found in every function created in JS.It’s the property of a
        class constructor.

        // __proto__: 'Object' shows us how JavaScript assigns userPro1 and userPro2 to an
        object constructor — this is what allows us to access all the methods from the
        assigned
        prototype.Thus, both the getMarks() methods can be shared:
        console.log(userPro1.__proto__)

        // Prototypes are usually more memory-efficient and faster than creating many
        classes.
        Additionally, prototypes are useful in situations where you need to create objects
        that
        inherit from other objects, as JavaScript's prototype-based inheritance system
        allows
        for easy inheritance and modification.

        //-----------------------
        // inheritance in javascript
        //-----------------------

        // Prototype inheritance in javascript is the linking of prototypes of a parent
        object
        to a child object to share and utilize the properties of a parent class using a
        child
        class.

        // Prototypes are hidden objects that are used to share the properties and methods
        of a
        parent class to child classes.`,
        code1: `function Phone() {
                  this.modalNumber = '';
                  this.getModalNumber = function() {
                  return this.modalNumber
                }
              }

          function Samsung(modalNumber) {
          this.modalNumber = modalNumber;
          this.latestFeature = function() {
          console.log("foldable smart phone")
      }
}

          Samsung.prototype = new Phone;

          const smObj = new Samsung("a123456")
          console.log(smObj.getModalNumber())


          // Example 2
          // Using Object.create():
          //...............
          // Parent object
          let animal = {
          speak: function() {
          console.log(this.sound);
  }
};

          // Child object inheriting from the parent
          let cat = Object.create(animal);
          cat.sound = "Meow";

          // Now, cat has access to the speak method from the animal object
          cat.speak(); // Output: Meow


          // Example 3
          //--------------------
          //Constructor Functions:
          //--------------------
          // Parent constructor function
          function Animal(sound) {
          this.sound = sound;
}

          // Adding a method to the parent's prototype
          Animal.prototype.speak = function() {
          console.log(this.sound);
};

          // Child constructor function
          function Cat(sound) {
          Animal.call(this, sound); // Call parent constructor
}

          // Inheriting from the parent's prototype
          Cat.prototype = Object.create(Animal.prototype);
          Cat.prototype.constructor = Cat; // Set correct constructor

          // Creating a cat object
          let myCat = new Cat("Meow");

          // Now, myCat has access to the speak method inherited from Animal
          myCat.speak(); // Output: Meow


          // Ex
          // Class Syntax (ES6):
          //..................
          // Parent class
          class Animal {
          constructor(sound) {
          this.sound = sound;
  }
          speak() {
          console.log(this.sound);
  }
}

          // Child class inheriting from Animal
          class Cat extends Animal {
          constructor(sound) {
          super(sound); // Call parent constructor
  }
}

          // Creating a cat object
          let myCat = new Cat("Meow");

          // Now, myCat has access to the speak method inherited from Animal
          myCat.speak(); // Output: Meow
 `
      },
      {
        text1: `// The Object.setPrototypeOf() method in JavaScript is a standard built-in object
        which
        sets the prototype (i.e., the internal[[Prototype]]property) of a specified object
        to
        another object or null.

        // In JavaScript, Object.setPrototypeOf is a method used to set the prototype (i.e.,
        the
        internal[[Prototype]]property) of a specified object to another object or null.This
        method allows you to dynamically change the inheritance chain of an object.`,
        code1: ``
      },
      ]
    },

    {
      id: 1,
      title: "getter and setter",
      note: [
        {
          text1: ` // In JavaScript, accessor properties are methods that get or set the value of an
          object. For that, we use these two keywords:

          // get - to define a getter method to get the property value
          // set - to define a setter method to set the property value


          // In JavaScript, accessor properties are properties that allow you to define custom
          behavior for getting and setting a property's value. They are different from data
          properties, which have a straightforward value assignment. Accessor properties use
          getter and setter functions to control how values are retrieved or modified.

          //------------------
          // Understanding Accessor Properties:--
          //------------------
          // Accessor properties are defined by providing getter and/or setter methods. These
          methods can be defined either within an object literal using special 'get' and 'set'
          syntax or by using 'Object.defineProperty'.

          // Defining Accessor Properties in an Object Literal
          // When using object literals, you can define accessor properties directly within
          the object by specifying 'get' and 'set' functions.
`,
          code1: ` const person = {
            firstName: 'John',
            lastName: 'Doe',

            // Getter for fullName
            get fullName() {
              return '\${this.firstName} \${this.lastName}';
            },

            // Setter for fullName
            set fullName(name) {
              const parts = name.split(' ');
              this.firstName = parts[0];
              this.lastName = parts[1];
            }
          };

          console.log(person.fullName); // Outputs: John Doe
          person.fullName = 'Jane Smith';
          console.log(person.firstName); // Outputs: Jane
          console.log(person.lastName);  // Outputs: Smith`
        },
        {
          text1: `// In JavaScript, accessor properties are properties that allow you to define custom
          behavior for getting and setting a property's value. They are different from data
          properties, which have a straightforward value assignment. Accessor properties use
          getter and setter functions to control how values are retrieved or modified.

          //-------------------
          // Understanding Accessor Properties
          //-------------------
          // Accessor properties are defined by providing getter and/or setter methods. These
          methods can be defined either within an object literal using special get and set
          syntax or by using Object.defineProperty.

          // Defining Accessor Properties in an Object Literal
          // When using object literals, you can define accessor properties directly within
          the object by specifying get and set functions.`,
          code1: `// Example:
          // Copy code
          const person = {
            firstName: 'John',
            lastName: 'Doe',

            // Getter for fullName
            get fullName() {
              return '\${this.firstName} \${this.lastName}';
            },

            // Setter for fullName
            set fullName(name) {
              const parts = name.split(' ');
              this.firstName = parts[0];
              this.lastName = parts[1];
            }
          };

          console.log(person.fullName); // Outputs: John Doe
          person.fullName = 'Jane Smith';
          console.log(person.firstName); // Outputs: Jane
          console.log(person.lastName);  // Outputs: Smith

          In this example:

          The 'get' method for 'fullName' constructs a full name by combining 'firstName' and 'lastName'.
            The 'set' method for 'fullName' splits the provided name into 'firstName' and 'lastName'.`
        },
        {
          text1: `//----------------
          // Defining Accessor Properties with 'Object.defineProperty'
          //----------------
          // You can also define accessor properties using the 'Object.defineProperty' method,
          which allows for more detailed control over the property attributes.`,
          code1: `            const person = {
            firstName: 'John',
            lastName: 'Doe'
          };

          Object.defineProperty(person, 'fullName', {
            // Getter for fullName
            get() {
              return '\${this.firstName} \${this.lastName}';
            },
            // Setter for fullName
            set(name) {
              const parts = name.split(' ');
              this.firstName = parts[0];
              this.lastName = parts[1];
            },
            enumerable: true,
            configurable: true
          });

          console.log(person.fullName); // Outputs: John Doe
          person.fullName = 'Jane Smith';
          console.log(person.firstName); // Outputs: Jane
          console.log(person.lastName);  // Outputs: Smith`
        },
        {
          text1: `// In this example:

          // 'Object.defineProperty' is used to define a property 'fullName' with 'get' and
          'set' methods.
          // 'enumerable: true' makes the 'fullName' property show up during enumeration
          (e.g., in 'for...in' loops).
          // 'configurable: true' allows the property to be reconfigured or deleted.

          //---------------------
          // Characteristics of Accessor Properties
          //---------------------
          // Accessor properties have the following characteristics:

          // Getters: Functions that are called when the property is accessed.
          // Setters: Functions that are called when a new value is assigned to the property.
          // No Direct Storage: Unlike data properties, accessor properties do not store
          values directly. The getter and setter functions handle value retrieval and
          assignment.
          // Flexibility: Accessor properties provide a way to add logic to the process of
          getting and setting property values, which can be useful for validation, computed
          properties, and encapsulation.

          //----------------
          // Object.defineProperty()
          //----------------

          // The Object.defineProperty() method adds a property or modifies an existing
          property on an object and returns the object.

          // The syntax of the defineProperty() method is:

          // Object.defineProperty(obj, prop, descriptor)
          // Here, 'defineProperty()' is a static method. Hence, we need to access the method
          using the class name, Object.


          // defineProperty() Parameters
          // The 'defineProperty()' method takes in:

          // 'obj' - the object on which to define the property.
          // 'prop' - the name or 'Symbol' of the property to be defined or modified.
          // 'descriptor' - the descriptor for the property being defined or modified.

          // Each property value must either be a data descriptor or an accessor
          descriptor.They can have the following optional properties:

          // configurable - the ability to change or delete a property's attributes
          // enumerable - the property that is visible in for...in loops and with
          Object.keys().
          // Data descriptors can also have:

          // value - the actual data stored in a property, accessible through its key.
          // writable - the ability to change the value of a property.If false, the property's
          value cannot be changed.`,
        }
      ]
    },
    {
      id: 1,
      title: "static methods",
      note: [
        {
          text1: `// static methods are methods that are associated with a class, not an instance of the
            class. They are called using the class name.

            // By definition, static methods are bound to a class, not the instances of that class.
            Therefore, static methods are useful for defining helper or utility methods.

            // Here's an example of a static method:

            // In JavaScript, creating static methods using the prototype is not a common practice.
            Static methods are usually defined directly on the class constructor rather than its
            prototype.`,
          code1: `
            function Person(name) {
              this.name = name;
            }
            
            Person.prototype.instanceMethodName = function() {
              return this.name;
            };
            
            Person.createStatic = function(gender) {
              let name = gender == "male" ? "John Doe" : "Jane Doe";
              return new Person(name).instanceMethodName();
            };
            
            const ob = new Person('male')
            console.log("instance Method", ob.instanceMethodName())
            console.log("Static Method", Person.createStatic('male'))`
        },
        {
          text1: `// The createStatic() method is considered a static method because it doesn’t depend on
            any instance of the 'Person' type for its property values.It can be called directly on
            the Person class itself, without creating an instance of the class.

            //----------------------
            // JavaScript static methods in ES6
            //-----------------------
            // In ES6, you define static methods using the static keyword. The following example
            defines a static method called createStaticEs6() for the 'Person' class:`,
          code1: `class Person {
              constructor(name) {
                this.name = name;
              }
              instanceMethodNameEs6() {
                return this.name;
              }
              static createStaticEs6(gender) {
                let name = gender == "male" ? "John Doe" : "Jane Doe";
                return new Person(name);
              }
            }
            
            let staticMethodCall = Person.createStaticEs6("male");
            
            // let person = new Person('James Doe');
            // let staticMethodError = person.createStaticEs6("male");
            
            console.log(staticMethodCall)
            // console.log(staticMethodError) // TypeError: person.createAnonymous is not a function
            

            //---------------
            // Ex: 2
            //---------------
            
            class User {
              static staticMethod() {
                console.log(this === User);
              }
            }
            
            User.staticMethod(); // true
            
            
            class User2 { }
            
            User2.staticMethod2 = function() {
              console.log(this === User2);
            };
            
            User2.staticMethod2(); // true
            `


        },
        {
          text1: `// Class Definition: The 'Article' class is defined with a constructor to initialize
            'title' and 'date', and a static method 'compare' to compare articles by date.
            // Instance Creation: Three instances of 'Article' are created with different dates.
            // Sorting: The 'articles' array is sorted using the 'Article.compar'e static method,
            which sorts the articles by their date.
            // Result: The sorted array has the earliest date first, so "CSS"(January 1, 2019) is at
            index 0 and is displayed in the alert.`,
          code1: `class Person {
              constructor(name, age) {
                this.name = name;
                this.age = age;
              }
            
              // Instance method
              getInfo() {
                return '\${this.name} is \${this.age} years old.';
              }
            
              // Static method
              static compareAges(person1, person2) {
                if (person1.age > person2.age) {
                  return '\${person1.name} is older than \${person2.name}.';
                } else if (person1.age < person2.age) {
                  return '\${person1.name} is younger than \${person2.name}.';
                } else {
                  return '\${person1.name} and \${person2.name} are of the same age.';
                }
              }
            }
            
            const alice = new Person('Alice', 25);
            const bob = new Person('Bob', 30);
            
            console.log(alice.getInfo()); // Outputs: Alice is 25 years old.
            console.log(bob.getInfo());   // Outputs: Bob is 30 years old.
            
            console.log(Person.compareAges(alice, bob)); // Outputs: Alice is younger than Bob.`
        },
        {
          text1: `// Accessing Static Methods within Instance Methods
            //------------------------------------------------
            // While static methods are typically called on the class itself, you can also call
            static methods from within instance methods if needed:`,
          code1: `class Person {
              constructor(name, age) {
                this.name = name;
                this.age = age;
              }
            
              // Instance method
              getInfo() {
                return '\${this.name} is \${this.age} years old.';
              }
            
              // Static method
              static isAdult(person) {
                return person.age >= 18;
              }
            
              // Instance method calling a static method
              checkIfAdult() {
                return Person.isAdult(this) ? '\${this.name} is an adult.' : '\${this.name} is not an adult.';
              }
            }
            
            const alice = new Person('Alice', 25);
            const bob = new Person('Bob', 16);
            
            console.log(alice.checkIfAdult()); // Outputs: Alice is an adult.
            console.log(bob.checkIfAdult());   // Outputs: Bob is not an adult.`
        }
      ]
    },
    {
      id: 1,
      title: "static properties",
      note: [
        {
          text1: `// In JavaScript, static properties are properties that are defined directly on the class itself rather than on instances of the class. Static properties are shared across all instances of the class and are accessed using the class name, not through individual instances.

          // Defining Static Properties
          ---------------------------
          
          // Static properties are defined using the static keyword in the class definition. Here's how you can define and use static properties:`,
          code1: `class Car {
            // Static property
            static numberOfWheels = 4;
          
            constructor(make, model) {
              this.make = make;
              this.model = model;
            }
          
            // Static method
            static compare(carA, carB) {
              return carA.model === carB.model;
            }
          }
          
          // Accessing the static property
          console.log(Car.numberOfWheels); // Outputs: 4
          
          // Creating instances of Car
          const car1 = new Car('Toyota', 'Corolla');
          const car2 = new Car('Honda', 'Civic');
          
          // Accessing static method
          console.log(Car.compare(car1, car2)); // Outputs: false
          
          // Attempting to access static property from an instance
          console.log(car1.numberOfWheels); // Outputs: undefined`
        },
        {
          text1: ` // Key Characteristics of Static Properties
          //--------------- ----------- -----------
          // Class-Level Scope: Static properties are defined at the class level, meaning they are shared among all instances of the class.
          // Access via Class Name: They are accessed using the class name, not through instances.
          // Initialization: They are typically initialized when they are declared.
          // Use Cases for Static Properties
          //-------- ---------- ----------
          // Constants: Use static properties to define constants that are related to the class but do not change per instance.
          // Configuration Values: Store configuration values or default settings that apply to the class as a whole.
          // Counters: Maintain counters or other aggregate data relevant to the class.
          // Example Use Case: Managing Instances
          //---------- ---------- --------
          // Here's an example where static properties are used to keep track of the number of instances created from a class:`,
          code1: ` class User {
            static count = 0;
          
            constructor(name) {
              this.name = name;
              User.count++; // Increment the static property
            }
          
            static getCount() {
              return User.count;
            }
          }
          
          const user1 = new User('Alice');
          const user2 = new User('Bob');
          const user3 = new User('Charlie');
          
          console.log(User.getCount()); // Outputs: 3
          
          
          class Item {
            static count = 0;
          }

          `
        },
        {
          text1: ` To access a static property, you use the class name followed by the . operator and the
          static property name. For example:

          console.log(Item.count); // 0
          
              To access the static property in a static method, you use the class name followed by the
              . operator and the static property name. For example:`,
          code1: `class Item {
            static count = 0;
            static getCount() {
              return Item.count;
            }
          }
          
          console.log(Item.getCount()); // 0`
        },
        {
          text1: `To access a static property in a class constructor or instance method, you use the
          following syntax:`,
          code1: `className.staticPropertyName;                 
          Or
          this.constructor.staticPropertyName;`
        },
        {
          text1: `The following example increases the count static property in the class constructor:`,
          code1: `class Item {
            constructor(name, quantity) {
              this.name = name;
              this.quantity = quantity;
              this.constructor.count++;
            }
            static count = 0;
            static getCount() {
              return Item.count;
            }
          }`
        },
        {
          text1: `When you create a new instance of the Item class, the following statement increases the
          count static property by one:
          this.constructor.count++;
          For example:`,
          code1: `// Item class ...
          let pen = new Item("Pen", 5);
          let notebook = new Item("notebook", 10);
          
          console.log(Item.getCount()); // 2`
        },
        {
          text1: `This example creates two instances of the Item class, which calls the class constructor.
          Since the class constructor increases the count property by one each time it's called,
          the value of the count is two.

          Put it all together.`,
          code1: `class Item {
            constructor(name, quantity) {
              this.name = name;
              this.quantity = quantity;
              this.constructor.count++;
            }
            static count = 0;
            static getCount() {
              return Item.count;
            }
          }
          
          let pen = new Item('Pen', 5);
          let notebook = new Item('notebook', 10);
          
          console.log(Item.getCount()); // 2`
        },
        {
          text1: `<strong>Summary</strong>
          A static property of a class is shared by all instances of that class.
          Use the static keyword to define a static property.
          Use the className.staticPropertyName to access the static property in a static method.
          Use the this.constructor.staticPropertyName or className.staticPropertyName to access
          the static property in a constructor`,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "computed properties",
      note: [
        {
          text1: `In JavaScript, computed properties (also known as computed property names) allow you to dynamically name object properties using expressions. This feature was introduced in ECMAScript 6 (ES6) and provides a way to set the property name using an expression inside square brackets <strong>[]</strong> during object literal creation.

          <strong>Syntax and Example</strong>
          The syntax for computed property names is straightforward: you use square brackets <b>[]</b> around an expression within an object literal. The expression is evaluated, and the result is used as the property name.
          
          Computed properties, introduced in ECMAScript 2015 (ES6), allow you to create object properties dynamically using an expression in square brackets ([]). Instead of specifying a fixed property name, you can use an expression to compute the property name at runtime. This provides flexibility in working with object properties and enables dynamic behaviors.`,
          code1: `const propertyName = "dynamicKey";

          const obj = {
            [propertyName]: "This is a dynamic value",
            ["key" + 1]: "This is another dynamic value"
          };
          
          console.log(obj.dynamicKey); // Outputs: This is a dynamic value
          console.log(obj.key1);       // Outputs: This is another dynamic value

          //------------

          let propName = 'c';
          const rank = {
            a: 1,
            b: 2,
            [propName]: 3,
          };

          console.log(rank.c); // 3

          `
        },
        {
          text1: `<b>2) Dynamic Property Names</b>
          One common use case for computed properties is when you have dynamic property names. Consider the following example:`,
          code1: `function createPerson(name, age) {
            return {
              name,
              age,
              ['is\${name}Adult']: age >= 18
            };
          }
          
          const person = createPerson("John", 25);
          console.log(person);`
        },
        {
          text1: `<b>3) Dynamic Property Assignment</b>
          Computed properties can also be used to dynamically assign values to object properties. Consider the following example:`,
          code1: `function createProduct(id, name, price) {
            const product = {};
            product[id] = {
              name,
              price
            };
            return product;
          }
          
          const productId = "ABC123";
          const productData = createProduct(productId, "Sample Product", 9.99);
          console.log(productData);
          
          //-------------

          function createObject(key, value) {
            return {
              [key]: value
            };
          }
          
          const obj = createObject("name", "Alice");
          console.log(obj.name); // Outputs: Alice
          `
        },
        {
          text1: `<b>Using Computed Properties with Loops</b>
          You can use computed properties inside loops to dynamically create property names:`,
          code1: `const dynamicKeys = ["first", "second", "third"];
          const dynamicValues = [1, 2, 3];
          
          const obj = {};
          
          dynamicKeys.forEach((key, index) => {
            obj[key] = dynamicValues[index];
          });
          
          console.log(obj); // Outputs: { first: 1, second: 2, third: 3 }
          `
        },
        {
          text1: `<b>Combining with Other ES6 Features</b>
          Computed properties can be combined with other ES6 features like template literals and destructuring:`,
          code1: `Template Literals
          javascript
          Copy code
          const prefix = "user";
          const id = 42;
          
          const user = {
            ['\${prefix}_id']: id
          };
          
          console.log(user.user_id); // Outputs: 42


          // <b>Destructuring</b>
          //--------------
          Copy code
          const propName = "age";
          const user = { name: "Alice", [propName]: 25 };
          
          const { name, [propName]: userAge } = user;
          
          console.log(name);    // Outputs: Alice
          console.log(userAge); // Outputs: 25`
        },
        {
          text1: `<b>Practical Example: Managing Form Data</b>
          Computed properties are handy when working with dynamic form data, especially when the form fields are generated dynamically or their names change based on certain conditions.`,
          code1: `const formFields = ["username", "email", "password"];
          const formData = {};
          
          formFields.forEach(field => {
            formData[field] = ""; // Initialize all form fields with an empty string
          });
          
          console.log(formData); // Outputs: { username: "", email: "", password: "" }


         //  Like an object literal, you can use computed properties for getters and setters of a class. For example:
          let name = 'fullName';

          class Person {
            constructor(firstName, lastName) {
              this.firstName = firstName;
              this.lastName = lastName;
            }
            get [name]() {
              return '\${this.firstName} \${this.lastName}';
            }
          }

          let person = new Person('John', 'Doe');
          console.log(person.fullName);


          `
        },
        {
          text1: `<b>Summary</b>
          Computed properties in JavaScript allow for dynamic property names in object literals, enabling more flexible and expressive object creation. By using expressions within square brackets, you can dynamically determine property names at runtime. This feature is particularly useful for creating objects with dynamic keys, managing form data, and working with complex data structures where property names are not known beforehand.`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "private fields or properties",
      note: [
        {
          text1: `JavaScript private fields are a feature that allows you to define properties that are not accessible or modifiable from outside of the class in which they are declared. This feature enhances encapsulation by providing truly private data, ensuring that internal state cannot be accessed or modified directly from outside the class.

          Private fields were introduced in ECMAScript 2019 (ES10) and are denoted by a <b>#</b> prefix.
          
          <b>Defining Private Fields</b>
          Private fields are defined within a class using the <b>#</b> prefix. They are only accessible within the class where they are defined.`,
          code1: `class Person {
            // Private field
            #name;
          
            constructor(name) {
              this.#name = name;
            }
          
            // Public method to access the private field
            getName() {
              return this.#name;
            }
          
            // Public method to modify the private field
            setName(name) {
              this.#name = name;
            }
          }
          
          const person = new Person('Alice');
          console.log(person.getName()); // Outputs: Alice
          
          // Trying to access the private field directly will result in an error
          console.log(person.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class
          
          person.setName('Bob');
          console.log(person.getName()); // Outputs: Bob
          `
        },
        {
          text1: `<b>Key Features of Private Fields</b>

          <b>Private Fields Start with #</b>: Private fields must start with a <b> #</b> character.
          <b>Accessible Only Within Class</b>: They can only be accessed or modified within the class where they are defined.
          <b>No Access Outside Class</b>: Attempting to access or modify private fields from outside the class will result in a syntax error.

          <b>Benefits of Private Fields</b>
          <b>Encapsulation</b>: Enhances encapsulation by ensuring that the internal state of an object cannot be tampered with from outside the class.
          <b>Data Privacy</b>: Ensures that sensitive data remains private and is only accessible through controlled interfaces (getter/setter methods).
          <b>Avoid Naming Collisions</b>: Private fields help avoid naming collisions between properties intended for internal use and those meant for public access.
          
          <b> Comparison with WeakMaps for Private Data</b>
Before private fields were introduced, developers often used WeakMaps to simulate private data:
          `,
          code1: `const _privateData = new WeakMap();

          class Person {
            constructor(name) {
              _privateData.set(this, { name });
            }
          
            getName() {
              return _privateData.get(this).name;
            }
          
            setName(name) {
              _privateData.get(this).name = name;
            }
          }
          
          const person = new Person('Alice');
          console.log(person.getName()); // Outputs: Alice
          person.setName('Bob');
          console.log(person.getName()); // Outputs: Bob
          `
        },
        {
          text1: `Using private fields simplifies this pattern and makes it more readable and efficient.

          <b>Limitations of Private Fields</b>
          <b>No Access Outside Class</b>: Private fields are strictly inaccessible outside their class, even in subclasses.
          <b>Cannot Be Dynamically Accessed</b>: Private fields cannot be accessed dynamically using bracket notation. They must be accessed using the exact syntax with the <b>#</b> prefix.

          <b>Example with Multiple Private Fields</b>`,
          code1: `class Car {
            // Private fields
            #make;
            #model;
            #year;
          
            constructor(make, model, year) {
              this.#make = make;
              this.#model = model;
              this.#year = year;
            }
          
            getDetails() {
              return '\${this.#make} \${this.#model}, \${this.#year}';
            }
          }
          
          const car = new Car('Toyota', 'Corolla', 2020);
          console.log(car.getDetails()); // Outputs: Toyota Corolla, 2020
          // Direct access to private fields will cause a syntax error
          console.log(car.#make); // SyntaxError: Private field '#make' must be declared in an enclosing class
          `
        },
        {
          text1: `<b> Using getter and setter to access private fields</b>
The following redefines the <b>Circle</b> class by adding the <b>radius</b> getter and setter to provide access to the <b>#radius</b> private field:`,
          code1: `class Circle {
            #radius = 0;
            constructor(radius) {
              this.radius = radius; // calling setter
            }
            get area() {
              return Math.PI * Math.pow(this.#radius, 2);
            }
            set radius(value) {
              if (typeof value === 'number' && value > 0) {
                this.#radius = value;
              } else {
                throw 'The radius must be a positive number';
              }
            }
            get radius() {
              return this.#radius;
            }
          }`
        },
        {
          text1: `How it works.

          > The <b>radius</b> setter validates the argument before assigning it to the <b>#radius</b> private field. If the argument is not a positive number, the <b>radius</b> setter throws an error.
          > The <b>radius</b> getter returns the value of the <b>#radius</b> private field.
          > The constructor calls the <b>radius</b> setter to assign the argument to the <b>#radius</b> private field.
          
          <b>Private fields and subclasses</b>
          Private fields are only accessible inside the class where they're defined. Also, they're not accessible from the subclasses. For example, the following defines the <b>Cylinder</b> class that extends the <b>Circle</b> class:`,
          code1: `class Cylinder extends Circle {
            #height;
            constructor(radius, height) {
              super(radius);
              this.#height = height;
          
              // cannot access the #radius of the Circle class here
            }
          }`
        },
        {
          text1: `If you attempt to access the <b>#radius</b>  private field in the <b>Cylinder</b>  class, you'll get a <b>SyntaxError</b> .

          <b>The in operator: check private fields exist</b>
          To check if an object has a private field inside a class, you use the <b>in</b>  operator:
          
          // <span style="color:red">fieldName in objectName</span>

          For example, the following adds the <b>hasRadius()</b>  static method to the <b>Circle</b>  class that uses the in</b>  operator to check if the <b>circle</b>  object has the <b>#radius</b>  private field:`,
          code1: `class Circle {
            #radius = 0;
            constructor(radius) {
              this.radius = radius;
            }
            get area() {
              return Math.PI * Math.pow(this.radius, 2);
            }
            set radius(value) {
              if (typeof value === 'number' && value > 0) {
                this.#radius = value;
              } else {
                throw 'The radius must be a positive number';
              }
            }
            get radius() {
              return this.#radius;
            }
            static hasRadius(circle) {
              return #radius in circle;
            }
          }
          
          let circle = new Circle(10);
          
          console.log(Circle.hasRadius(circle));


          // Output: true
          `
        },
        {
          text1: `<b>Static private fields</b>
          The following example shows how to use a static private field:`,
          code1: `class Circle {
            #radius = 0;
            static #count = 0;
            constructor(radius) {
              this.radius = radius; // calling setter
              Circle.#count++;
            }
            get area() {
              return Math.PI * Math.pow(this.radius, 2);
            }
            set radius(value) {
              if (typeof value === 'number' && value > 0) {
                this.#radius = value;
              } else {
                throw 'The radius must be a positive number';
              }
            }
            get radius() {
              return this.#radius;
            }
            static hasRadius(circle) {
              return #radius in circle;
            }
            static getCount() {
              return Circle.#count;
            }
          }
          
          let circles = [new Circle(10), new Circle(20), new Circle(30)];
          
          console.log(Circle.getCount());
          `
        },
        {
          text1: `How it works.

          First, add a private static field <b>#count</b> to the Circle <b>class</b> and initialize its value to zero:
          
          <span style="color:grey">static #count = 0;</span>
          Second, increase the <b>#count</b> by one in the constructor:
          <span style="color:grey">Circle.#count++;</span>
          Third, define a static method that returns the value of the <b>#count</b> private static field:
          <span style="color:grey">
          static getCount() {
              return Circle.#count;
          }</span>
        
          Finally, create three instances of the <b>Circle</b> class and output the <b>count</b> value to the console:
          <span style="color:grey">
          let circles = [new Circle(10), new Circle(20), new Circle(30)];
          console.log(Circle.getCount());</span>
          
          <b>Summary</b>
          Prefix the field name with <b>#</b> sign to make it private.
          Private fields are accessible only inside the class, not from outside of the class or subclasses.
          Use the <b>in</b> operator to check if an object has a private field.`,
          code1: ``
        },
        {
          text1: ``,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "private methods",
      note: [
        {
          text1: `Private methods in JavaScript are methods that are accessible only within the class where they are defined. They are part of the class's internal implementation and cannot be accessed or called from outside the class, even by instances of the class. Private methods are denoted by a <b>#</b> prefix, similar to private fields.

          <b>Defining Private Methods</b>
          Private methods are defined within a class using the <b>#</b> prefix before the method name. These methods can be called from other methods within the same class but are not accessible from outside the class.
          
          To make a public method private, you prefix its name with a hash #. JavaScript allows you to define private methods for instance methods, <b>static methods</b>, and <b>getter/setters</b>.

The following shows the syntax of defining a private instance method:
          `,
          code1: `class MyClass {
            #privateMethod() {
              //...
            }
          }
          
          //---------------
          
          class Person {
            #name;
            
            constructor(name) {
              this.#name = name;
            }
          
            // Public method
            greet() {
              console.log(this.#getGreeting());
            }
          
            // Private method
            #getGreeting() {
              return 'Hello, my name is \${this.#name}';
            }
          }
          
          const person = new Person('Alice');
          person.greet(); // Outputs: Hello, my name is Alice
          
          // Trying to call the private method directly will result in an error
          console.log(person.#getGreeting()); // SyntaxError: Private field '#getGreeting' must be declared in an enclosing class
          
          `
        },
        {
          text1: `To call the <b>#privateStaticMethod()</b> inside the <b>MyClass</b>, you use the class name instead of the <b>this</b> keyword:

          <span style="color:grey"> MyClass.#privateStaticMethod(); </span>
          
          The following shows the syntax of the private getters/setters:
          
          <span style="color:grey">
          class MyClass {
            #field;
            get #myField() {
                return #field;
            }
            set #myField(value){
                #field = value;
            }
          }
          </span>
          
          In this example, the <b>#myField</b> is the private getter and setter that provides access to the private field <b>#field</b>.
          
          In practice, you use private methods to minimize the number of methods that the object exposes.
          
          As a rule of thumb, you should make all class methods private by default first. And then you make a method public whenever the object needs to use that method to interact with other objects.`,
          code1: ``
        },
        {
          text1: `<b>Private Methods in Combination with Public Methods</b>
          Private methods are often used in conjunction with public methods to perform complex tasks while keeping the public API simple and clean.
          
          <b>Example: Using Private Methods for Complex Tasks</b>`,
          code1: `class Calculator {
            add(a, b) {
              return this.#logResult(a + b);
            }
          
            subtract(a, b) {
              return this.#logResult(a - b);
            }
          
            // Private method
            #logResult(result) {
              console.log('The result is \${result}');
              return result;
            }
          }
          
          const calc = new Calculator();
          console.log(calc.add(5, 3));      // Outputs: The result is 8, followed by: 8
          console.log(calc.subtract(10, 4)); // Outputs: The result is 6, followed by: 6
          
          // Trying to call the private method directly will result in an error
          console.log(calc.#logResult(10)); // SyntaxError: Private field '#logResult' must be declared in an enclosing class
          `
        },
        {
          text1: `<b>1) Private instance method example</b>
          The following illustrates how to define the <b>Person</b> class with private instance methods:`,
          code1: `class Person {
            #firstName;
            #lastName;
            constructor(firstName, lastName) {
              this.#firstName = firstName;
              this.#lastName = lastName;
            }
            getFullName(format = true) {
              return format ? this.#firstLast() : this.#lastFirst();
            }
          
            #firstLast() {
              return '\${this.#firstName} \${this.#lastName}';
            }
            #lastFirst() {
              return '\${this.#lastName}, \${this.#firstName}';
            }
          }
          
          let person = new Person('John', 'Doe');
          console.log(person.getFullName());
          
          // Output: John Doe
          `
        },
        {
          text1: `In this example:

          First, define two private fields <b>#firstName</b> and <b>#lastName</b> in the <b>Person</b> class body.
          
          Second, define the private methods <b>#firstLast()</b> and <b>#lastFirst()</b>. These methods return the full name in different formats.
          
          Third, define the public instance method <b>getFullName()</b> that returns a person's full name. The <b>getFullName()</b> method calls the private method <b>#firstLast()</b> and <b>#lastFirst()</b> to return the full name.
          
          Finally, create a new <b>person</b> object and output the full name to the console.
          
          <b>2) Private static method example</b>
          The following adds the <b>#validate()</b> private static method to the <b>Person</b> class:`,
          code1: `class Person {
            #firstName;
            #lastName;
            constructor(firstName, lastName) {
              this.#firstName = Person.#validate(firstName);
              this.#lastName = Person.#validate(lastName);
            }
            getFullName(format = true) {
              return format ? this.#firstLast() : this.#lastFirst();
            }
            static #validate(name) {
              if (typeof name === 'string') {
                let str = name.trim();
                if (str.length >= 3) {
                  return str;
                }
              }
              throw 'The name must be a string with at least 3 characters';
            }
          
            #firstLast() {
              return '\${this.#firstName} \${this.#lastName}';
            }
            #lastFirst() {
              return '\${this.#lastName}, \${this.#firstName}';
            }
          }
          
          let person = new Person('John', 'Doe');
          console.log(person.getFullName());`
        },
        {
          text1: `How it works.

          First, define the static method <b>#validate()</b> that returns a value if it is a string with at least three characters. The method raises an exception otherwise.
          
          Second, call the <b>#validate()</b> private static method in the constructor to validate the <b>firstName</b> and <b>lastName</b> arguments before assigning them to the corresponding private attributes.`,
          code1: ``
        },
        {
          text1: ``,
          code1: ``
        },
        {
          text1: ``,
          code1: ``
        },
      ]
    },
      {
      id: 1,
      title: "instanceof operator",
      note: [
        {
          text1: `In object-oriented programming, an instance is a concrete realization of a class. When you define a class, you're essentially creating a blueprint. An instance, then, is an object built from that blueprint. It has all the characteristics defined in the class, but with specific values.
          
          In JavaScript, the <b>instanceof</b> operator is used to check if an object belongs to a particular class or constructor function. It evaluates to <b>true</b> if the object is an instance of the specified class or a subclass of it, otherwise <b>false</b>.


          `,
          code1:`
          object instanceof Class


          // Ex:
          class Animal {}

          class Dog extends Animal {}

          const animal = new Animal();
          const dog = new Dog();

          console.log(animal instanceof Animal); // true
          console.log(dog instanceof Animal);    // true, because Dog extends Animal
          console.log(dog instanceof Dog);      // true
          console.log(animal instanceof Dog);    // false




          In this example, animal instanceof Animal returns true because animal is an instance of Animal. Similarly, dog instanceof Animal returns true because dog is an instance of Dog, which is a subclass of Animal. However, animal instanceof Dog returns false because animal is not an instance of Dog.

          `
        },
        {
          text1: `The <b>instanceof</b> operator returns <b>true</b> if a prototype of a constructor (<b>constructor.prototype</b>) appears in the prototype chain of an <b>object</b>.

          The following shows the syntax of the instanceof operator:
          
          <span style="color:red">object instanceof contructor</span>

          In this syntax:
          
          <b>object</b> is the object to test.
          <b>constructor</b> is a function to test against.

          <b>JavaScript instanceof operator example</b>
          The following example defines the <b>Person</b> type and uses the <b>instanceof</b> operator to check if an object is an instance of that type:`,
          code1: `function Person(name) {
            this.name = name;
          }
          
          let p1 = new Person('John');
          
          console.log(p1 instanceof Person); // true


//           How it works.

// First, define a Person type using the constructor function pattern:

function Person(name) {
  this.name = name;
}

// Second, create a new object of the 'Person' type:

let p1 = new Person('John Doe');

// Third, check if the 'person' is an instance of the 'Person' type:

console.log(p1 instanceof Person); // true
          
          `
        },
        {
          text1: `It returns <b>true</b> because the <b>Person.prototype</b> appears on the prototype chain of the <b>p1</b> object. The prototype chain of the <b>p1</b> is the link between <b>p1, Person.prototype</b>, and <b>Object.prototype:</b>
          
          The following also returns true because the Object.prototype appears on the prototype chain of the p1 object:

          <span style="color:red"> console.log(p1 instanceof Object); // true </span>

          <b> ES6 class and instanceof operator </b>
          The following example defines the <b>Person</b> class and uses the <b>instanceof</b> operator to check if an object is an instance of the class:
`,
          code1: `
          class Person {
            constructor(name) {
              this.name = name;
            }
          }
          
          let p1 = new Person('John');
          
          console.log(p1 instanceof Person); // true

          
          // First, define the 'Person' class:

          class Person {
            constructor(name) {
              this.name = name;
            }
          }

          // Second, create a new instance of the 'Person' class:

          let p1 = new Person('John');

          // Third, check if p1 is an instance of the 'Person' class:

          console.log(p1 instanceof Person); // true

          `
        },
        {
          text1: `<b>-> The instanceof operator and inheritance</b>
          The following example defines the <b>Employee</b> class that extends the <b>Person</b> class:`,
          code1: `
          class Person {
            constructor(name) {
              this.name = name;
            }
          }
          
          class Employee extends Person {
            constructor(name, title) {
              super(name);
              this.title = title;
            }
          }
          
          let e1 = new Employee();
          
          console.log(e1 instanceof Employee); // true
          console.log(e1 instanceof Person); // true
          console.log(e1 instanceof Object); // true
          `
        },
        {
          text1:`Since <b>e1</b> is an instance of the <b>Employee</b> class, it's also an instance of the <b>Person</b> and <b>Object</b> classes (base classes).

          <b>-> Symbol.hasInstance</b>
          In ES6, the <b>instanceof</b> operator uses the <b>Symbol.hasInstance</b> function to check the relationship. The <b>Symbol.hasInstance()</b> accepts an object and returns <b>true</b> if a type has that object as an instance. For example:`,
          code1:`class Person {
            constructor(name) {
              this.name = name;
            }
          }
          
          let p1 = new Person('John');
          
          console.log(Person[Symbol.hasInstance](p1)); // true`
        },
        {
          text1:`Since the <b>Symbol.hasInstance</b> is defined on the Function prototype, it's automatically available by default in all functions and classes

          You can redefine the <b>Symbol.hasInstance</b> on a subclass as a static method. For example:`,
          code1:`class Person {
            constructor(name) {
              this.name = name;
            }
          }
          
          class Android extends Person {
            static [Symbol.hasInstance]() {
              return false;
            }
          }
          
          let a1 = new Android('Sonny');
          
          console.log(a1 instanceof Android); // false
          console.log(a1 instanceof Person); // false`
        },
        {
          text1:``,
          code1:``
        },
      ]
    }


  ]
}
