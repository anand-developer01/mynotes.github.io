const javascriptData = {
  javascriptNote: [
    {
      id: 1,
      title: "JavaScript Event Loop ",
      note: `JavaScript is a single-threaded programming language. This means that JavaScript can do only one thing at a single point in time.

      The JavaScript engine executes a script from the top of the file and works its way down. It creates the execution contexts, and pushes, and pops functions onto and off the call stack in the execution phase.
      
      If a function takes a long time to execute, you cannot interact with the web browser during the function's execution because the page hangs.
      
      A function that takes a long time to complete is called a blocking function. Technically, a blocking function blocks all the interactions on the webpage, such as mouse clicks.
      
      An example of a blocking function is a function that calls an API from a remote server.
      
      The following example uses a big loop to simulate a blocking function:
      
      function task(message) {
          // emulate time consuming task
          let n = 10000000000;
          while (n > 0){
              n--;
          }
          console.log(message);
      }
      
      console.log('Start script...');
      task('Call an API');
      console.log('Done!');
      
      In this example, we have a big while loop inside the task() function that emulates a time-consuming task. The task() function is a blocking function.
      
      The script hangs for a few seconds (depending on how fast the computer is) and issues the following output:
      
      Start script...
      Download a file.
      Done!
      To execute the script, the JavaScript engine places the first call console.log() on top of the call stack and executes it. Then, it places the task() function on top of the call stack and executes the function.
      
      However, it'll take a while to complete the task() function. Therefore, you'll see the message 'Download a file.' a little time later. After the task() function completes, the JavaScript engine pops it off the call stack.
      
      Finally, the JavaScript engine places the last call to the console.log('Done!') function and executes it, which will be very fast.

      Callbacks to the rescue
      To prevent a blocking function from blocking other activities, you typically put it in a callback function for execution later. For example:
      
      console.log('Start script...');
      
      setTimeout(() => {
          task('Download a file.');
      }, 1000);
      
      console.log('Done!');
      
      In this example, you'll see the message 'Start script...' and 'Done!' immediately. And after that, you'll see the message 'Download a file'.
      
      Here's the output:
      
      Start script...
      Done!
      Download a file.
      As mentioned earlier, the JavaScript engine can do only one thing at a time. However, it's more precise to say that the JavaScript runtime can do one thing at a time.
      
      The web browser also has other components, not just the JavaScript engine.
      
      When you call the setTimeout() function, make a fetch request, or click a button, the web browser can do these activities concurrently and asynchronously.
      
      The setTimeout(), fetch requests and DOM events are parts of the Web APIs of the web browser.
      
      In our example, when calling the setTimeout() function, the JavaScript engine places it on the call stack, and the Web API creates a timer that expires in 1 second.
      
      Then JavaScript engine places the task() function into a queue called a callback queue or a task queue:
      
      The event loop is a constantly running process that monitors both the callback queue and the call stack.
      
      If the call stack is not empty, the event loop waits until it is empty and places the next function from the callback queue to the call stack. If the callback queue is empty, nothing will happen:
      
      
      See another example:
      
      console.log('Hi!');
      
      setTimeout(() => {
          console.log('Execute immediately.');
      }, 0);
      
      console.log('Bye!');
      
      In this example, the timeout is 0 seconds, so the message 'Execute immediately.' should appear before the message 'Bye!'. However, it doesn't work like that.
      
      The JavaScript engine places the following function call on the callback queue and executes it when the call stack is empty. In other words, the JavaScript engine executes it after the console.log('Bye!').
      
      console.log('Execute immediately.');
      
      Here's the output:
      
      Hi!
      Bye!
      Execute immediately.
      The following picture illustrates JavaScript runtime, Web API, Call stack, and Event loop:
      
      
      In this tutorial, you have learned about the JavaScript event loop, a constantly running process that coordinates the tasks between the call stack and callback queue to achieve concurrency.`,
    },
    {
      id: 1,
      title: "hoisting",
      note: `
      Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

      hoisting refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution. In turn, this allows us to use functions, variables, and classes before they are declared.

      In JavaScript, "hoisting" refers to the behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use a variable or function before it is declared in your code.

      Hoisting is a concept or behavior in JavaScript where the declaration of a function, variable, or class goes to the top of the scope they were defined in.
      
      
      Introduction to the JavaScript hoisting
When the JavaScript engine executes the JavaScript code, it creates the global execution context. The global execution context has two phases:

Creation
Execution
During the creation phase, the JavaScript engine moves the variable and function declarations to the top of your code. This is known as hoisting in JavaScript.

Variable hoisting
Variable hoisting means the JavaScript engine moves the variable declarations to the top of the script. For example, the following example declares the counter variable and initialize its value to 1:

console.log(counter); // 👉 undefined
var counter = 1;

In this example, we reference the counter variable before the declaration.

However, the first line of code doesn't cause an error. The reason is that the JavaScript engine moves the variable declaration to the top of the script.

Technically, the code looks like the following in the execution phase:

var counter;

console.log(counter); // 👉 undefined
counter = 1;

During the creation phase of the global execution context, the JavaScript engine places the variable counter in the memory and initializes its value to undefined.

The let keyword
The following declares the variable counter with the let keyword:

console.log(counter);
let counter = 1;

The JavaScript issues the following error:

"ReferenceError: Cannot access 'counter' before initialization
The error message explains that the counter variable is already in the heap memory. However, it hasn't been initialized.

Behind the scenes, the JavaScript engine hoists the variable declarations that use the let keyword. However, it doesn't initialize the let variables.

Notice that if you access a variable that doesn't exist, the JavaScript will throw a different error:

console.log(alien);
let counter = 1;

Here is the error:

"ReferenceError: alien is not defined

Function hoisting
Like variables, the JavaScript engine also hoists the function declarations. This means that the JavaScript engine also moves the function declarations to the top of the script. For example:

let x = 20,
  y = 10;

let result = add(x, y); 
console.log(result); // 👉 30

function add(a, b) {
  return a + b;
}

Output:

30
In this example, we called the add() function before defining it. The above code is equivalent to the following:

function add(a, b){
    return a + b;
}

let x = 20,
    y = 10;

let result = add(x,y);
console.log(result); // 👉 30

During the creation phase of the execution context, the JavaScript engine places the add() function declaration in the heap memory. To be precise, the JavaScript engine creates an object of the Function type and a function reference add that refers to the function object.

Function expressions
The following example changes the add from a regular function to a function expression:

let x = 20,
    y = 10;

let result = add(x,y); // ❌ Uncaught ReferenceError: add is not defined
console.log(result);

let add = function(x, y) {
    return x + y;
}

If you execute the code, the following error will occur:
Uncaught ReferenceError: add is not defined

During the creation phase of the global execution context, the JavaScript engine creates the add variable in the memory and initializes its value to undefined.

When executing the following code, the add is undefined, hence, it isn't a function:

let result = add(x,y);

The add variable is assigned to an anonymous function only during the execution phase of the global execution context.

Arrow functions
The following example changes the add function expression to the arrow function:

let x = 20,
    y = 10;

let result = add(x,y); // ❌ Uncaught ReferenceError: add is not defined
console.log(result);

let add = (x, y) => x + y; 

The code also issues the same error as the function expression example because arrow functions are syntactic sugar for defining function expressions.

Uncaught ReferenceError: add is not defined

Similar to the functions expressions, arrow functions are not hoisted.

Summary
> JavaScript hoisting occurs during the creation phase of the execution context that moves the variable and function declarations to the top of the script.
> The JavaScript engine hoists the variables declared using the let keyword, but it doesn't initialize them as the variables declared with the var keyword.
> The JavaScript engine doesn't hoist the function expressions and arrow functions.

      `,
    },
    {
      id: 1,
      title: "JavaScript Execution Context",
      note: `

      <b>global execution context:</b>
      The global execution context is the top-level context in a JavaScript program. It represents the global scope, encompassing the entire program and all its components. This context sets the stage for the entire code execution process and plays a pivotal role in managing global variables and functions.

      There are two phases of JavaScript execution context:

      <b>Creation phase:</b> In this phase, the JavaScript engine creates the execution context and sets up the script's environment. It determines the values of variables and functions and sets up the scope chain for the execution context.
      
      <b>Execution phase:</b> In this phase, the JavaScript engine executes the code in the execution context. It processes any statements or expressions in the script and evaluates any function calls.

      Introduction to the JavaScript execution context
      Let's start with the following example:

      let x = 10;
      function timesTen(a){
          return a * 10;
      }
      let y = timesTen(x);
      console.log(y); // 100
      
      In this example:
      > First, declare the <b>x</b> variable and initialize its value with <b>10</b>.
      > Second, declare the <b>timesTen()</b> function that accepts an argument and returns a value that is the result of the multiplication of the argument with 10.
      > Third, call the <b>timesTen()</b> function with the argument as the value of the <b>x</b> variable and store result in the variable <b>y</b>.
      > Finally, output the variable <b>y</b> to the Console.

      Behind the scenes, JavaScript does many things. in this tutorial, you will focus on execution contexts.
      When the JavaScript engine executes the JavaScript code, it creates execution contexts.
      Each execution context has two phases: the creation phase and the execution phase.

      <b>The creation phase:</b>

      When the JavaScript engine executes a script for the first time, it creates the global execution context. During this phase, the JavaScript engine performs the following tasks:

      > Create the global object i.e., <b>window</b> in the web browser or <b>global</b> in Node.js.
      > Create the <b>this</b> object and bind it to the global object.
      > Set up a memory heap for storing variables and function references.
      > Store the function declarations in the memory heap and variables within the global execution context with the initial values as <b>undefined</b>.

      When the JavaScript engine executes the code example above, it does the following in the creation phase:

      > First, store the variables <b>x</b> and <b>y</b> and function declaration timesTen() in the global execution context.
      > Second, initialize the variables <b>x</b> and <b>y</b> to <b>undefined</b>.

      <div style="background:yellow;">
      <------------------------------>
      Global Execution Context: Creation Phase (Web Browser)
      --------------------------------
      <------------------------------>
      <p>Global Object : Window</p>
      <------------------------------>
      <p>this:window</p>
      <------------------------------>
      <p>x:undefined</p>
      <------------------------------>
      <p>timesTen: function(){...}</p>
      <------------------------------>
      <p>y:undefined</p>
      <------------------------------>
      </div>

      After the creation phase, the global execution context moves to the execution phase.

      The execution phase:
      --------------------

      During the execution phase, the JavaScript engine executes the code line by line, assigns the values to variables, and executes the function calls.

      <------------------------------>
      Global Execution Context: Execution Phase (Web Browser)
      -------------------------------
      <------------------------------>
      Global Object : Window
      <------------------------------>
      this:window
      <------------------------------>
      x:10
      <------------------------------>
      timesTen:function(){...}
      <------------------------------>
      y:timesTen(x)
      <------------------------------>
      
      For each function call, the JavaScript engine creates a new function execution context.

      The function execution context is similar to the global execution context. But instead of creating the global object, the JavaScript engine creates the <b>arguments</b> object that is a reference to all the parameters of the function:

      <------------------------------>
      Global Execution Context: Execution Phase (Web Browser)
      -------------------------------
      <------------------------------>
      Global Object : Window
      <------------------------------>
      this:window
      <------------------------------>
      x:10
      <------------------------------>
      timesTen:function(){...}
      <------------------------------>
      y:timesTen(x)
      <------------------------------>
                      |
                      V
      --------------------------------
      Function Exection Context: Execution Phase (Web Browser)
      --------------------------------
      <------------------------------>
      Global Object : Window
      <------------------------------>
      this:window
      <------------------------------>
      a:undefined
      <------------------------------>

      In our example, the function execution context creates the <b>arguments</b> object that references all parameters passed into the function, sets <b>this</b> value to the global object, and initializes the a parameter to <b>undefined</b>.

      During the execution phase of the function execution context, the JavaScript engine assigns <b>10</b> to the parameter <b>a</b> and returns the result (100) to the global execution context:

      <------------------------------>
      Global Execution Context: Execution Phase (Web Browser)
      -------------------------------
      <------------------------------>
      Global Object : Window
      <------------------------------>
      this:window
      <------------------------------>
      x:10
      <------------------------------>
      timesTen:function(){...}
      <------------------------------>
      y:100
      <------------------------------>
                    ^
                    |
      <------------------------------>
      Global Object : arguments
      <------------------------------>
      this:window
      <------------------------------>
      x:10
      <------------------------------>

      To keep track of all the execution contexts, including the global execution context and function execution contexts, the JavaScript engine uses the call stack,
      `,
    },
    {
      id: 1,
      title: "JavaScript Singleton",
      note: `Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.`,
    },
    {
      id: 1,
      title: "variable scope",
      note: `
      Scope determines the visibility and accessibility of a variable. JavaScript has three scopes:

      > The global scope
      > Local scope
      > Block scope (started from ES6)

      The global scope:
      -----------------
      When the JavaScript engine executes a script, it creates a global execution context.

      Also, it also assigns variables that you declare outside of functions to the global execution context. These variables are in the global scope. They are also known as global variables.

      See the following example:

      var message = 'Hi';
      
      The variable message is global-scoped. It can be accessible everywhere in the script.

      <----------------------->
      Global Execution Context Execution Phase (Web Browser)
      -------------------------
      <----------------------->
      Global Object: window
      <----------------------->
      this: window 
      <----------------------->
      message: 'Hi' 
      <----------------------->


      Local scope
      The variables that you declare inside a function are local to the function. They are called local variables.

     For example:
      --------------------->
      var message = 'Hi';

      function say() {
          var message = 'Hello';
          console.log(message);
      }

      say();
      console.log(message);
      

      Output:
      .......
      Hello
      Hi
      -------->

      When the JavaScript engine executes the say() function, it creates a function execution context. The variable message declared inside the say() function is bound to the function execution context of the function, not the global execution context.

      <----------------------->
      Global Execution Context Execution Phase (Web Browser)
      -------------------------
      <----------------------->
      Global Object: window
      <----------------------->
      this: window 
      <----------------------->
      message: 'Hi' 
      <----------------------->
      say: function(){...}
      <----------------------->

                |
                V
      <----------------------->
      Function Execution Context Execution Phase 
      -------------------------
      <----------------------->
      Global Object: arguments
      <----------------------->
      this: window 
      <----------------------->
      message:'Hello'
      <----------------------->


      Scope chain:
      -----------

      Consider the following example:
      ----------------------->
      var message = 'Hi';

      function say() {
          console.log(message);
      }

      say();
    
      ........
      Output:
      Hi
      ------->

      In this example, we reference the variable message inside the say() function. Behind the scenes, JavaScript performs the following:

      Look up the variable message in the current context (function execution context) of the say() function. It cannot find any.
      Find the variable message in the outer execution context which is the global execution context. It finds the variable message.
      The way that JavaScript resolves a variable is by looking at it in its current scope, if it cannot find the variable, it goes up to the outer scope, which is called the scope chain.

      <----------------------->
      Global Execution Context Execution Phase (Web Browser)
      -------------------------
      <----------------------->
      Global Object: window
      <----------------------->
      this: window 
      <----------------------->
      message: 'Hi' 
      <----------------------->
      say: function(){...}
      <----------------------->

                |
                V
      <----------------------->
      Function Execution Context Execution Phase 
      -------------------------
      <----------------------->
      Global Object: arguments
      <----------------------->
      this: window 
      <----------------------->


      More scope chain example
      Consider the following example:

      var y = 20;

      function bar() {
          var y = 200;

          function baz() {  
              console.log(y);
          }

          baz();
      }

      bar();
      
      Output:

      200
      In this example:

      First, the JavaScript engine finds the variable y in the scope of the baz() function. It cannot find any. So it goes out of this scope.
      Then, the JavaScript engine finds the variable y in the bar() function. It can find the variable y in the scope of the bar() function so it stops searching.

      Global variable leaks: the weird part of JavaScript:
      ---------------------------------------------------
      See the following example:

      function getCounter() {
          counter = 10;
          return counter;
      }

      console.log(getCounter());
      
      Output:

      10
      In this example, we assigned 10 to the counter variable without the var, let, or const keyword and then returned it.

      Outside the function, we called the getCounter() function and showed the result in the console.

      This issue is known as the leaks of the global variables.

      Under the hood, the JavaScript engine first looks up the counter variable in the local scope of the getCounter() function. Because there is no var, let, or const keyword, the counter variable is not available in the local scope. It hasn't been created.

      Then, the JavaScript engine follows the scope chain and looks up the counter variable in the global scope. The global scope also doesn't have the counter variable, so the JavaScript engine creates the counter variable in the global scope.

      To fix this “weird” behavior, you use the 'use strict' at the top of the script or at the top of the function:

      'use strict'

      function getCounter() {
          counter = 10;
          return counter;
      }

      console.log(getCounter());
      
      Now, the code throws an error:

      ReferenceError: counter is not defined
      
      The following shows how to use the 'use strict' in the function:

      function getCounter() {
          'use strict'
          counter = 10;
          return counter;
      }

      console.log(getCounter());
      
      Block scope
      ES6 provides the let and const keywords that allow you to declare variables in block scope.

      Generally, whenever you see curly brackets {}, it is a block. It can be the area within the if, else, switch conditions or for, do while, and while loops.

      See the following example:

      function say(message) {
          if(!message) {
              let greeting = 'Hello'; // block scope
              console.log(greeting);
          }
          // say it again ?
          console.log(greeting); // ReferenceError
      }

      say();
      
      In this example, we reference the variable greeting outside the if block that results in an error.

      In this tutorial, you have learned about the JavaScript variable scopes including function scope, global scope, and block scope.
      
      `,
    },
    {
      id: 1,
      title: "Stack & heap",
      note: `
      Stack:-
      -----
      A Stack is a linear data structure that follows the LIFO (Last-In-First-Out) principle. This implies that the last item to enter the stack goes out first.

      Imagine a pile of books stacked up on a shelf. The last book ends up being the first to be removed. Data stored inside the stack can still be accessed easily.

      heap:-
      ----
      Reference data are stored inside the heap. When reference data is created, the variable of the data is placed on the stack but the actual value is placed on the heap.


      e.preventDefault() is a method that belongs to the event object (e). It is called to prevent the default behavior of form submission, which is to refresh the page. By calling preventDefault(), we override the default behavior and prevent the page from refreshing.
      `,
    },
    {
      id: 1,
      title: "Call Stack",
      note: `
      The JavaScript execution contexts (Global execution context and function execution context) are executed via the JavaScript engine. In order to manage these execution contexts, the JS engine uses the call stack. So, the JS call stack is a data structure that keeps track information of the functions being called and executed. Thus, if the user invokes a function for execution, the specified function gets pushed/added in the call stack, and when the user returns from a function, it means the function is popped out from the call stack. Thus, call stack is a normal stack data structure that follows the stack order principal, i.e., LIFO (Last In First Out).

      Introduction to JavaScript Call Stack
      A call stack is a way for the JavaScript engine to keep track of its place in code that calls multiple functions. It has the information on what function is currently being run and what functions are invoked from within that function…

      Also, the JavaScript engine uses a call stack to manage execution contexts:

      The global execution context
      Function execution contexts
      The call stack works based on the last-in-first-out (LIFO) principle.

      When you execute a script, the JavaScript engine creates a global execution context and pushes it on top of the call stack.

      Whenever a function is called, the JavaScript engine creates a function execution context for the function, pushes it on top of the call stack, and starts executing the function.

      If a function calls another function, the JavaScript engine creates a new function execution context for the function being called and pushes it on top of the call stack.

      When the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where it left off.

      The script will stop when the call stack is empty.

      JavaScript call stack example
      Let's start with the following example:

      function add(a, b) {
          return a + b;
      }

      function average(a, b) {
          return add(a, b) / 2;
      }

      let x = average(10, 20);
      
      When the JavaScript engine executes this script, it places the global execution context (denoted by main() or global() function on the call stack.

      The global execution context enters the creation phase and moves to the execution phase.

      The JavaScript engine executes the call to the average(10, 20) function and creates a function execution context for the average() function and pushes it on top of the call stack:

      The JavaScript engine starts executing the average() since because the average() function is on the top of the call stack.

      The average() function calls add() function. At this point, the JavaScript engine creates another function execution context for the add() function and places it on the top of the call stack:

      JavaScript engine executes the add() function and pops it off the call stack:

      At this point, the average() function is on the top of the call stack, the JavaScript engine executes and pops it off the call stack.

      Now, the call stack is empty so the script stops executing:

      The following picture illustrates the overall status of the Call Stack in all steps:

      Stack Overflow:
      --------------
      The call stack has a fixed size, depending on the implementation of the host environment, either the web browser or Node.js.

      If the number of execution contexts exceeds the size of the stack, a stack overflow error will occur.

      For example, when you execute a recursive function that has no exit condition, the JavaScript engine will issue a stack overflow error:

      function fn() {
          fn();
      }

      fn(); // stack overflow
      

      Asynchronous JavaScript:
      -----------------------
      JavaScript is a single-threaded programming language. This means that the JavaScript engine has only one call stack. Therefore, it only can do one thing at a time.

      When executing a script, the JavaScript engine executes code from top to bottom, line by line. In other words, it is synchronous.

      Asynchronous means the JavaScript engine can execute other tasks while waiting for another task to be completed. For example, the JavaScript engine can:

      Request for data from a remote server.
      Display a spinner
      When the data is available, display it on the webpage.
      To do this, the JavaScript engine uses an event loop, which will be covered in the following tutorial.

      Summary
      JavaScript engine uses a call stack to manage execution contexts.
      The call stack uses the stack data structure that works based on the LIFO (last-in-first-out) principle.
      `,
    },
    {
      id: 1,
      title: "Web APIs",
      note: `An Application Programming Interface (API) is a software interface that allows two or more programs to communicate by acting as an intermediary between them.

      API stands for Application Programming Interface, which is a set of protocols and definitions that allows communication between two software.

      All browsers have a set of built-in APIs that extend their functionality, usually by supporting complex operations.`,
    },
    {
      id: 1,
      title: "Callback queue",
      note: `Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.`,
    },
    {
      id: 1,
      title: "JavaScript Singleton",
      note: `Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.`,
    },
    {
      id: 1,
      title: "JavaScript Singleton",
      // showHtml: () => (
      //     <div className='table-res'>
      //         <table>
      //             <tbody>
      //                 <tr>
      //                     <th>feature</th>
      //                     <th>vue</th>
      //                     <th>react</th>
      //                 </tr>
      //                 <tr>
      //                     <td>Component</td>
      //                     <td>It uses Templates to build different components</td>
      //                     <td>It uses JSX as a component format</td>
      //                 </tr>
      //                 <tr>
      //                     <td>Architecture</td>
      //                     <td>It features an adaptable architecture for various complex features.</td>
      //                     <td>It supports different state management libraries for complex features.</td>
      //                 </tr>
      //                 <tr>
      //                     <td>Features</td>
      //                     <td>It is used to develop progressive web applications.</td>
      //                     <td>It is used to develop single-page applications and mobile apps.</td>
      //                 </tr>
      //                 <tr>
      //                     <td>CSS</td>
      //                     <td>It supports CSS in JS by writing CSS code inside JS</td>
      //                     <td>It supports CSS by including script files in the JS file or by importing in component</td>
      //                 </tr>
      //             </tbody>
      //         </table>
      //     </div>
      // )
    },
    {
      id: 2,
      title: "pure functions",
      note: `------------
            A pure function is a function that always returns the same output given a specific input.
            
            A pure function does not change any value or state outside of its scope and it doesn't depend on any value outside of its scope. It only depends on the input given to the function and does not produce any side effects.
            ------------
            
            A pure function in JavaScript is a function that returns the same result if the same arguments(input) are passed in the function. Let's see what makes a function pure in detail:
            
            - The return value of the function on the function call should only be dependent on the input function arguments.
            - It should not modify any non-local state. It means the function should not manipulate anything other than the data - stored in the local variables declared within the function.
            The function should not have any side effects, such as reassigning non-local variables, mutating the state of any part of code that is not inside the function, or calling any non-pure functions inside it.
            
            Pure functions are building blocks of functional programming. They always yield consistent result and does not manipulate non-local state or have any side effects. There are mainly two requirements of a pure function:
            
            Consistent result:--
            - Same result for the same input every time.
            - Result is only dependent on the input arguments. As the function does not perform any operation that requires any variable or data from outside the scope of the function.
            
            No side effects some common side effects:--
            - Making an HTTP request
            - Mutating any data that is not part of the function
            - Printing to a screen or console
            - DOM Query/Manipulation
            - Using Math.random()
            - Getting the current time`,
    },
    {
      id: 3,
      title: "Immediately Invoked Function Expression (IIFE):",
      note: `
            An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
            
            
An Immediately Invoked Function Expression (IIFE) is a common JavaScript design pattern used to create a private scope for variables. It involves defining and invoking a function expression immediately after its creation. The primary purpose of an IIFE is to encapsulate variables within a local scope, preventing them from polluting the global scope.

The basic syntax of an IIFE looks like this:


Copy code
---------
(function() {
  // code inside this function is executed immediately
})();
Let's break down the components of this pattern:

Function Expression:

(function() { /* code */ }) is a function expression enclosed in parentheses. The parentheses around the function declaration are necessary to distinguish it from a function declaration statement.
Invocation (()):

The function is immediately invoked by adding an extra set of parentheses (function() { /* code */ })(). This causes the function to execute immediately after its definition.
Use Cases:
Encapsulation and Avoiding Global Scope Pollution:

Variables declared inside an IIFE are scoped to the function, preventing them from leaking into the global scope.
javascript

Copy code
---------
(function() {
  var localVar = "I am local to the IIFE";
  console.log(localVar);
})();

// The following would throw an error because localVar is not defined in the global scope
// console.log(localVar);
Creating Private Variables:

IIFE can be used to create private variables that are accessible only within the function scope.

Copy code
---------
var counter = (function() {
  var count = 0;

  return {
    increment: function() {
      count++;
    },
    getCount: function() {
      return count;
    }
  };
})();

counter.increment();
console.log(counter.getCount()); // 1
In this example, count is a private variable that can only be accessed and modified through the returned object's methods.

Module Pattern:
--------------

IIFE is often used in the module pattern, where you can create self-contained modules with private state and expose only the necessary functionalities.

 Copy code
---------
var module = (function() {
  var privateVar = "I am private";

  function privateFunction() {
    console.log("This is private");
  }

  return {
    publicVar: "I am public",
    publicFunction: function() {
      console.log("This is public");
      privateFunction();
    }
  };
})();

console.log(module.publicVar);
module.publicFunction();
-----------------
Here, privateVar and privateFunction are encapsulated within the module, and only the public interface is exposed.

The IIFE pattern is a powerful and widely used technique in JavaScript for creating private scopes, avoiding global scope pollution, and implementing modular patterns. It is particularly useful in scenarios where you want to execute code immediately and keep certain variables or functionalities private.


IIFE starting with a semicolon (;)
Sometimes, you may see an IIFE that starts with a semicolon(;):

;(function() {
/* */
})();


In this syntax, the semicolon is used to terminate the statement in case two or more JavaScript files are blindly concatenated into a single file.

For example, you may have two file lib1.js and lib2.js which use IIFEs:

(function(){
    // ...
})()


(function(){
    // ...
})()


If you use a code bundler tool to concatenate code from both files into a single file, without the semicolon (;) the concatenated JavaScript code will cause a syntax error.


-----------------------
Advantages and Use Cases
1. Encapsulation
IIFE provides encapsulation, allowing you to create private scopes for variables and functions. This prevents variable conflicts and unintended modifications of data in the global scope. Encapsulation is crucial in larger applications and when working with multiple libraries.

2. Avoiding Global Pollution
By encapsulating code within IIFE, you avoid polluting the global namespace. This is particularly important when you want to minimize naming clashes with other scripts or libraries in your project. It keeps your code modular and self-contained.

3. Immediate Execution
IIFE executes code immediately after declaration. This feature is beneficial when you need to perform initialization tasks, configure settings, or kickstart an application. It ensures that your code runs exactly when and where you intend.

4. Data Privacy
IIFE allows you to create closures, which help maintain data privacy. You can hide variables and functions inside an IIFE, exposing only what's necessary. This concept is fundamental to the Module Pattern, a widely-used design pattern in JavaScript.

Real-World Scenarios for IIFE
1. Isolating Code
When integrating third-party scripts or libraries, you can wrap them in an IIFE to isolate their functionality and avoid conflicts with your code.

-------
(function(){
    Third party library code here
})()
-------


2. Reducing Global Variables
To minimize the number of global variables in your application, you can use IIFE to define modules or components, exposing only a limited interface to the global scope.

var module = (function() {
    var privateVariable = "I am private";
  
    function privateFunction() {
      console.log("This is private");
    }
  
    return {
      publicVar: "I am public",
      publicFunction: function() {
        console.log("This is public");
        privateFunction();
      }
    };
  })();

3. Managing Initialization
IIFE is useful for initializing your application by configuring settings, setting up event listeners, or bootstrapping the application.


Module Pattern
--------------
const calc = (function() {
    let result = 0;
  
    function add(a, b){
      result = a + b;
    }
  
    function substract(x, y){
      result = a - y;    
    }
  
    return {
      add : add,
      substract : substract,
      getResult: function(){
        return result;
      }
    }
  
  })()
  
  calc.add(2,8)
  console.log(calc.getResult())
  ----------

  In this example, we use IIFE to create a Calculator module with private data and exposed methods.

Configuring Settings
-------------------

const App = (function () {
    let apiConf = {
      apiKey: "dsfsdf",
      debugMod: false
    }
  
    function init() {
  
    }
  
    return {
      init: init,
      getApiKey : function(){
        return apiConf.apiKey
      } 
    }
  
  })()
  
  App.init()
  console.log(App.getApiKey())
  -------------

Named vs. Anonymous IIFE and Their Distinctions:
------------------------------------------------
Named IIFE:--
- Named IIFE functions have a unique identifier, making it easier to identify them in stack traces and debugging tools.
- They can be called recursively, allowing the function to reference itself.
- Naming IIFE can improve code self-documentation by giving it a meaningful name.
(function ThisIsName(){
    Named IIFE
})()

Anonymous IIFE:-
- Anonymous IIFE functions are more concise and often preferred for short-lived utility functions.
- They are generally used when you don't need to reference the function elsewhere in your code.
- Anonymous IIFE is suitable for encapsulating code that doesn't require a name.

(function(){
    Anonymous
})()

            `,
    },
    {
      id: 4,
      title: "arrow functions:",
      note: `
            Arrow functions are a concise way to write function expressions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a more compact syntax compared to traditional function expressions. Arrow functions are particularly useful for short, anonymous functions and for handling the scoping of the this keyword.

Basic Syntax:
The basic syntax of an arrow function is as follows:

Copy code
// Without parameters
const func1 = () => {
  // function body
};

// With parameters
const func2 = (param1, param2) => {
  // function body
};

// If there is only one parameter, parentheses can be omitted
const func3 = param => {
  // function body
};

// If the function body has only one statement, curly braces can be omitted
const func4 = () => console.log("Hello, world!");
Return Values:
If the function body consists of a single expression, and you want to implicitly return its result, you can omit the curly braces and the return keyword:


Copy code
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5


this Binding:
Arrow functions do not have their own this context. Instead, they inherit the this value from the enclosing scope (lexical scoping). This behavior is different from regular functions, which have their own this context.

===========================>

Understanding "this" in javascript with arrow functions
Published Feb 02, 2018Last updated Jul 03, 2019
This post is meant as second part of Understanding "This" in javascript.

We will go through the same examples, but we will use arrow functions instead to compare the outputs.

The motivation of this second post about the scope is, despite arrow functions are a powerful addition to ES6, they must not be misused or abused.

Default "this" context
Arrow functions do not bind their own this, instead, they inherit the one from the parent scope, which is called "lexical scoping". This makes arrow functions to be a great choice in some scenarios but a very bad one in others

If we look at the first example but using arrow functions


-------------------->
// define a function
const myFunction = () => {
  console.log(this);
};
-------------------->

// call it
myFunction();
What can we expect this to be?.... exactly, same as with normal functions, window or global object. Same result but not the same reason. With normal functions the scoped is bound to the global one by default, arrows functions, as I said before, do not have their own this but they inherit it from the parent scope, in this case the global one.

What would happen if we add "use strict"? Nothing, it will be the same result, since the scope comes from the parent one.

-------------------->
Arrow functions as methods
const myObject = {
  myMethod: () => {
    console.log(this);
  }
};
-------------------->

What about now?

In this case, one could say, that it really depends on how the method is called, same as normal functions, but that's not the case here, let's see...

myObject.myMethod() // this === window or global object

const myMethod = myObject.myMethod;
myMethod() // this === window or global object
Weird right? Well, remember, arrow functions don't bind their own scope, but inherit it from the parent one, which in this case is window or the global object.

Let's change the example a little bit

-------------------->
const myObject = {
  myArrowFunction: null,
  myMethod: function () {
    this.myArrowFunction = () => { console.log(this) };
  }
};
-------------------->


We need to call myObject.myMethod() to initialize myObject.myArrowFunction and then let's see what the output would be

-------------------->
myObject.myMethod() // this === myObject

myObject.myArrowFunction() // this === myObject

const myArrowFunction = myObject.myArrowFunction;
myArrowFunction() // this === myObject
-------------------->

Clearer now? When we call myObject.myMethod(), we initialize myObject.myArrowFunction with an arrow function which is inside of the method myMethod, so it will inherit its scope. We can clearly see a perfect use case, closures.

Explicit, Hard and New binding
What would happen when we try to bind a scope with any of these techniques?

let's see...

-------------------->
const myMethod = () => {
  console.log(this);
};

const myObject = {};
Explicity binding
myMethod.call(myObject, args1, args2, ...) // this === window or global object
myMethod.apply(myObject, [array of args]) // this === window or global object
Hard binding
const myMethodBound = myMethod.bind(myObject);

myMethodBound(); // this === window or global object
New binding
new myMethod(); // Uncaught TypeError: myMethod is not a constructor
-------------------->

As you see, it does not matter how we try to bind the scope, it will never work. Also, arrows functions are not constructors so you can not use new with them.

API calls
This part is interesting. Arrow functions are a good choice for API calls ( asynchronous code ), only if we use CLOSURES, let's look at this...

-------------------->
myObject = {
  myMethod: function () {
    helperObject.doSomethingAsync('superCool', () => {
      console.log(this); // this === myObject
    });
  },
};
-------------------->

This is the perfect example, we ask to do something async, we wait for the answer to do some actions and we don't have to worry about the scope we were working with.

But what would happen if for any reason we refactor the code and extract that function out in order to be reused, for example?

let's see...

-------------------->
const reusabledCallback = () => {
  console.log(this); // this === window or global object
};

myObject = {
  myMethod: function () {
    helperObject.doSomethingAsync('superCool', reusabledCallback);
  },
};
-------------------->

If we do so, we would be breaking the current working code, and, remember, it doesn't matter how we try to bind the scope, it won't work. So if you decide to do so, you have to use normal functions and bind the scope manually. For 
example

-------------------->
const reusabledCallback = function () {
  console.log(this);
};

myObject = {
  myMethod: function () {
    helperObject.doSomethingAsync('superCool', reusabledCallback.bind(myObject));
  },
};
-------------------->

=============================>

Copy code:
-------------------->
function RegularFunction() {
  this.value = 42;

  // Regular function with its own 'this' context
  setTimeout(function() {
    console.log(this.value); // undefined
  }, 1000);
}

function ArrowFunction() {
  this.value = 42;

  // Arrow function shares the 'this' context with the enclosing scope
  setTimeout(() => {
    console.log(this.value); // 42
  }, 1000);
}

const regularInstance = new RegularFunction();
const arrowInstance = new ArrowFunction();
--------------------->

When to Use Arrow Functions:
----------------------------

1) Short, Concise Functions:
Arrow functions are well-suited for short, concise functions, especially when the function body is a single expression.

2) Avoiding this Binding Issues:
Arrow functions are useful in scenarios where you want to maintain the this context of the enclosing scope, avoiding common issues related to this binding in regular functions.

3) Callbacks and Higher-Order Functions:
Arrow functions are commonly used as callbacks in functions like map, filter, and reduce due to their concise syntax.

Drawbacks:
---------
1) No arguments Object:
Arrow functions do not have their own arguments object. If you need to access the arguments passed to the function, you should use the rest parameters syntax (...args).

2) Not Suitable for All Cases:
While arrow functions are convenient for many scenarios, they may not be suitable for all use cases, especially when you need the this context to be dynamically determined.

In summary, arrow functions provide a concise syntax for writing functions in JavaScript and are commonly used in modern codebases. They are particularly useful for short, simple functions and for avoiding this binding issues in certain scenarios. However, it's essential to be aware of their behavior and limitations, especially when working with more complex use cases.

-------------
example:
------------
const village = 'wgl'

const myObject = {
  firstName: "test",
  myMethod: function () {
    console.log(this)
    const myArrowFunction = () => {
      console.log("arrow arrow", this.firstName);
      console.log("arrow arrow", this);
    };
    function myNormalFunction() {
      console.log("normal function ", this.firstName);
      console.log("normal function ", this);
      // console.log(village)  // we can access village variable directly because myNormalFunction() has global this
    }
    const bindindNormalFun = myNormalFunction.bind(myObject)
    bindindNormalFun()
    // myNormalFunction() // without binding to myObject myNormalFunction this === window object
    myArrowFunction()
  }
};

myObject.myMethod();
---------------------->
            `,
    },
    {
      id: 1,
      title: "JavaScript Singleton",
      note: `Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.`,
    },
    {
      id: 1,
      title: "Recursive Functions:",
      note: `Recursion is a process of calling itself. A function that calls itself is called a recursive function.
            a function that calls itself until your program achieves the desired result.
            
            Recursion is a process of calling itself. A function that calls itself is called a recursive function.

            The syntax for recursive function is:

            function recurse() {
                // function code
                recurse();
                // function code
            }

            recurse();
            Here, the recurse() function is a recursive function. It is calling itself inside the function.

            Working of recursion in JavaScript
            A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.

            Once the condition is met, the function stops calling itself. This is called a base condition.

            To prevent infinite recursion, you can use if...else statement (or similar approach) where one branch makes the recursive call, and the other doesn't.


            So, it generally looks like this.

            function recurse() {
                if(condition) {
                    recurse();
                }
                else {
                    // stop calling recurse()
                }
            }

            recurse();
            A simple example of a recursive function would be to count down the value to 1.

            Example 1: Print Numbers:
            ------------------>
            // program to count down numbers to 1
            function countDown(number) {

                // display the number
                console.log(number);

                // decrease the number value
                const newNumber = number - 1;

                // base case
                if (newNumber > 0) {
                    countDown(newNumber);
                }
            }

            countDown(4);
            ------------------>


            Output

            4
            3
            2
            1
In the above program, the user passes a number as an argument when calling a function.

In each iteration, the number value is decreased by 1 and function countDown() is called until the number is positive. Here, newNumber > 0 is the base condition.

This recursive call can be explained in the following steps:

countDown(4) prints 4 and calls countDown(3)
countDown(3) prints 3 and calls countDown(2)
countDown(2) prints 2 and calls countDown(1)
countDown(1) prints 1 and calls countDown(0)
When the number reaches 0, the base condition is met, and the function is not called anymore.

Example 2: Find Factorial
// program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log('The factorial of \${num} is \{result}');
}
Run Code
Output

The factorial of 3 is 6
When you call function factorial() with a positive integer, it will recursively call itself by decreasing the number.

This process continues until the number becomes 1. Then when the number reaches 0, 1 is returned.



            `,
    },
    {
      id: 1,
      title: "Iterators",
      note: `
            
            In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.

            In JavaScript, an iterator is an object that provides a way to access the elements of a collection, one at a time, and in a sequential manner. Iterators are used to traverse data structures like arrays, strings, maps, sets, and more. They follow a standard interface with methods like next() that returns the next element in the sequence along with information about whether the iteration is complete.

            The iterator protocol defines how to produce a sequence of values from an object.
            An object becomes an iterator when it implements a next() method.


            Iterator Interface:
            An iterator must adhere to the following interface:

            next() Method:
            The next() method returns an object with two properties:
            value: the next element in the iteration.
            done: a boolean indicating whether the iteration is complete (true when the last element is reached).
            Here's a simple example of creating an iterator for an array:

            javascript
            Copy code
            const iterableArray = [1, 2, 3, 4, 5];
            const iterator = iterableArray[Symbol.iterator]();

            console.log(iterator.next()); // { value: 1, done: false }
            console.log(iterator.next()); // { value: 2, done: false }
            console.log(iterator.next()); // { value: 3, done: false }
            console.log(iterator.next()); // { value: 4, done: false }
            console.log(iterator.next()); // { value: 5, done: false }
            console.log(iterator.next()); // { value: undefined, done: true }
            Iterables:
            An iterable is an object that implements the Symbol.iterator method, which returns an iterator. Iterables can be iterated over using constructs like for...of loops.

            Here's an example:

            javascript
            Copy code
            const iterableObject = {
            values: [1, 2, 3, 4, 5],
            [Symbol.iterator]: function() {
                let index = 0;
                return {
                next: () => {
                    if (index < this.values.length) {
                    return { value: this.values[index++], done: false };
                    } else {
                    return { value: undefined, done: true };
                    }
                },
                };
            },
            };

            for (const value of iterableObject) {
            console.log(value);
            }
            In this example, iterableObject is an iterable object with a values array and a custom iterator.

            Built-in Iterables:
            JavaScript has several built-in iterables, and many data structures are iterable by default, including:

            Arrays: Array.prototype[Symbol.iterator]
            Strings: String.prototype[Symbol.iterator]
            Maps: Map.prototype[Symbol.iterator]
            Sets: Set.prototype[Symbol.iterator]
            Typed Arrays: TypedArray.prototype[Symbol.iterator]
            NodeList: NodeList.prototype[Symbol.iterator]

            Iteration Protocols:
            JavaScript follows the iterable and iterator protocols, allowing developers to create custom iterable objects and iterators. The iterable protocol requires the implementation of the Symbol.iterator method, while the iterator protocol requires the implementation of the next() method.

            javascript
            Copy code
            const customIterable = {
            data: [1, 2, 3],
            [Symbol.iterator]: function() {
                let index = 0;
                return {
                next: () => {
                    if (index < this.data.length) {
                    return { value: this.data[index++], done: false };
                    } else {
                    return { value: undefined, done: true };
                    }
                },
                };
            },
            };

            for (const value of customIterable) {
            console.log(value);
            }
            This example demonstrates creating a custom iterable object with its own iterator.

            Understanding iterators and iterables is crucial for working with collections in JavaScript and is a fundamental concept for mastering features like for...of loops, destructuring, and the spread/rest operator.

            `,
    },
    {
      id: 1,
      title: "generators:",
      note: `
            In JavaScript, generators are a special type of function that allows you to control the flow of execution. Unlike regular functions, generators can be paused and resumed, enabling a more flexible and cooperative approach to handling asynchronous code and iterating over sequences of values.

          Here are some key characteristics of generators:

          Syntax:
          Generators are declared using the function* syntax. Inside a generator function, you use the yield keyword to produce a value and pause the generator's execution until the next value is requested.

          Copy code
          function* myGenerator() {
              yield 1;
              yield 2;
              yield 3;
          }

          Iterator:
          --------
          Generators automatically implement the iterable protocol, which means you can use them with for...of loops and other constructs that work with iterables.

          Copy code
          const gen = myGenerator();
          for (const value of gen) {
              console.log(value); // Outputs 1, 2, 3
          }

          Control Flow:
          ------------
          The yield keyword is used to pause the generator and return a value to the caller. When the generator is later resumed, it continues from where it was paused.

      
          
          Copy code
          function* countdown() {
              yield 3;
              yield 2;
              yield 1;
          }

          const iterator = countdown();
          console.log(iterator.next().value); // Outputs 3
          console.log(iterator.next().value); // Outputs 2
          Asynchronous Programming:
          Generators are often used in conjunction with asynchronous code to simplify the handling of asynchronous operations. Libraries like co.js and frameworks like Koa.js leverage generators for writing cleaner asynchronous code.

          
          Copy code
          function fetchData() {
              return new Promise(resolve => setTimeout(() => resolve('Data'), 1000));
          }

          function* fetchDataGenerator() {
              const data = yield fetchData();
              console.log(data); // Outputs 'Data'
          }

          const generator = fetchDataGenerator();
          const promise = generator.next().value;

          promise.then(result => generator.next(result));
          Generators are a powerful tool in JavaScript, especially for dealing with asynchronous programming and creating iterable sequences. They provide a way to write code that looks synchronous while still allowing for non-blocking operations.

          Encountering yield and yield*

          yield: pauses the generator execution and returns the value of the expression which is being written after the yield keyword.
          yield*: it iterates over the operand and returns each value until done is true.


             
          const arr = ['a', 'b', 'c']; 
            
          function* generator() { 
              yield 1; 
              yield* arr; 
              yield 2; 
          } 
            
          for (let value of generator()) { 
              console.log(value); 
          }



          function* firstGenerator() { 
            yield 2; 
            yield 3; 
        } 
          
        function* secondGenerator() { 
            yield 1; 
            yield* firstGenerator(); 
            yield 4; 
        } 
          
          
        for (let value of secondGenerator()) { 
            console.log(value) 
        }
        Output:
        
        1
        2
        3
        4

        --------------->
        Limitation of Generators: You can't yield inside a callback in a generator.
        Example : In this example, we will try to give yield inside a generator function.
        function* generator() { 
            ['a', 'b', 'c'].forEach(value => yield value)  
            // This will give syntax error 
        }
        -------------->

        const firstPromise = () => { 
          return new Promise((resolve, reject) => { 
              setTimeout(() => resolve(1), 5000) 
          }) 
        } 
        
        const secondPromise = () => { 
          return new Promise((resolve, reject) => { 
              setTimeout(() => resolve(2), 3000) 
          }) 
        } 
        
        function* generator() { 
          yield firstPromise(); 
          yield secondPromise(); 
        } 
        
        let itFu = generator(); 
        
        for(let vv of itFu){
          vv.then(r => console.log(r))
        }
        
            `,
    },
    {
      id: 1,
      title: "closure:",
      note: `Global variables can be made local (private) with closures.
            Closure in JavaScript is a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope of a function.


            In other words, closure is created when a child function keep the environment of the parent scope even after the parent function has already executed 


            Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

            Example:
            -------
            function myFunction() {
              a = 4;
            }


            In JavaScript, a closure is created when a function is defined within another function, allowing the inner function to access variables from the outer (enclosing) function's scope. Closures have access to the outer function's variables, parameters, and even the outer function's this context. This provides a way to create private variables, maintain state, and create functions with behavior that depends on their lexical environment.

Here are a few examples of closures in JavaScript:

Example 1: Basic Closure

Copy code
function outerFunction() {
    let outerVariable = "I am from the outer function";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction(); // Outputs: "I am from the outer function"
In this example, innerFunction is a closure because it is defined inside outerFunction and has access to outerVariable.

Example 2: Private Variables

Copy code
function counter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

const increment = counter();
increment(); // Outputs: 1
increment(); // Outputs: 2
Here, the inner function within counter forms a closure, and count is a private variable accessible only within that closure. This creates a way to have private state in JavaScript.

Example 3: Function Factory

Copy code
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
console.log(double(5)); // Outputs: 10
In this example, createMultiplier is a function factory that generates closure functions. The closure function (double) created with a specific factor retains access to that factor when invoked later.

Example 4: Event Handling

Copy code
function createButtonHandler(buttonId) {
    const button = document.getElementById(buttonId);

    button.addEventListener('click', function() {
        console.log('Button \${buttonId} clicked');
    });
}

createButtonHandler('btn1');
createButtonHandler('btn2');
In this example, createButtonHandler is a function that creates event handlers for different buttons. Each handler forms a closure, capturing the buttonId parameter and referencing the button variable from the outer function.


Example 5: Closure with Parameters

Copy code
function multiplier(factor) {
    return function (number) {
        return factor * number;
    };
}

const multiplyByTwo = multiplier(2);
console.log(multiplyByTwo(5)); // Outputs: 10
Here, multiplier returns a function that can be used to multiply a number by a specified factor. The inner function retains access to the factor parameter of its outer function, creating a closure.

Example 6: Counter using Closure

Copy code
function createCounter() {
    let count = 0;

    return function () {
        return ++count;
    };
}

const counter = createCounter();
console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2
console.log(counter()); // Outputs: 3

The createCounter function returns a closure that increments and returns a counter value. The inner function retains access to the count variable, allowing it to persist across multiple calls.

Example 7: Private Variables

Copy code
function createPerson(name) {
    let age = 0;

    return {
        getName: function () {
            return name;
        },
        getAge: function () {
            return age;
        },
        incrementAge: function () {
            age++;
        }
    };
}

const person = createPerson('John');
console.log(person.getName()); // Outputs: John
console.log(person.getAge());  // Outputs: 0
person.incrementAge();
console.log(person.getAge());  // Outputs: 1

Here, createPerson returns an object with methods that have access to both name and age, creating private variables. The closure allows these variables to be accessed and modified only through the methods provided.

Closures in JavaScript provide a powerful mechanism for creating modular and encapsulated code, enabling the creation of private variables, maintaining state, and implementing various programming patterns.

-------------------------
In this example, we would store an anonymous function at every index of an array. 

Example 1: This example shows the basic use of closure.

 
// Outer function
function outer() {
    let arr = [];
    let i;
    for (i = 0; i < 4; i++) {
        // storing anonymous function
        arr[i] = function () { return i; }
    }
 
    // returning the array.
    return arr;
}
 
let get_arr = outer();
 
console.log(get_arr[0]());
console.log(get_arr[1]());
console.log(get_arr[2]());
console.log(get_arr[3]());
Output:

Did you guess the right answer? In the above code, we have created four closures that point to the variable i which is the local variable to the function outer. Closure doesn't remember the value of the variable it only points to the variable or stores the reference of the variable and hence, returns the current value. In the above code when we try to update the value it gets reflected all because the closure stores the reference. 

4
4
4
4
Let's see the correct way to write the above code so as to get different values of i at different indexes. 

Example 2: This example shows the basic use of closure

   
// Outer function
function outer() {
    function create_Closure(val) {
        return function () {
            return val;
        }
    }
    let arr = [];
    let i;
    for (i = 0; i < 4; i++) {
        arr[i] = create_Closure(i);
    }
    return arr;
}
let get_arr = outer();
console.log(get_arr[0]());
console.log(get_arr[1]());
console.log(get_arr[2]());
console.log(get_arr[3]());
Output: In the above code we are updating the argument of the function create_Closure with every call. Hence, we get different values of i at different indexes.

0
1
2
3
Note: It may be slightly difficult to get the concept of closure at once but try experimenting with closure in different scenarios like for creating getter/setter, callbacks, and so on. 

            `,
    },
    {
      id: 1,
      title: "anonymous:",
      note: `It is a function that does not have any name associated with it. (or) An anonymous function is a function without a name
            An anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value. An anonymous function can also have multiple arguments, but only one expression.
            
            Anonymous Function
            It is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

            An anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value. An anonymous function can also have multiple arguments, but only one expression.
            ============================
            The below-enlightened syntax illustrates the declaration of an anonymous function using the normal declaration:

            function() {
                Function Body
            }
            =========================
            We may also declare an anonymous function using the arrow function technique which is shown below:
            ( () => {
                Function Body...
            } )();
            ===========================


            ===========================
            let show = function() {
            console.log('Anonymous function');
            };
            show();
            In this example, the anonymous function has no name between the function keyword and parentheses ().

            Because we need to call the anonymous function later, we assign the anonymous function to the show variable.

            Since the whole assignment of the anonymous function to the show variable makes a valid expression, you don't need to wrap the anonymous function inside the parentheses ().
            `,
    },
    {
      id: 1,
      title: "lexical scope:",
      note: `A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.
            (or)
    Lexical Scoping: A function scope's ability to access variables from the parent scope is known as lexical scope.
            (or)
    the inner functions have access to the variables and other resources of their parent scope.
    
    -The global scope is always the last scope of any JavaScript scope chain. In other words, the global scope is where all searches will end.
    -An inner (child) scope has access to its parent (outer) scope, but an outer scope does not have access to its child scope.
    
    Note:
    Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.`,
    },
    {
      id: 1,
      title: "call() method",
      note: `
      The call() method calls a function by passing this and specified values as arguments.

      The syntax of the call() method is:

      func.call(thisArg, arg1, ... argN)
      
      call() Parameters
      The call() method can take two parameters:

      thisArg - The thisArg is the object that the this object references inside the function func.
      arg1, ... argN (optional) - Arguments for the function func.


      In JavaScript, the call() method is a built-in method that is used to invoke a function with a specified this value and individual arguments provided as separate arguments. It allows you to call a function and explicitly set the context (the value of this) for that function, as well as pass arguments one by one.

      The syntax for the call() method is as follows:

      Copy code
      functionName.call(thisValue, arg1, arg2, ...);
      functionName: The function to be called.
      thisValue: The value to be passed as the this parameter when the function is called.
      arg1, arg2, ...: Optional arguments that will be passed to the function.
      Here's a simple example:

      Copy code
      function sayHello() {
          console.log('Hello, \${this.name}!');
      }

      const person = {
          name: 'John'
      };

      sayHello.call(person); // Outputs: "Hello, John!"
      In this example, sayHello.call(person) calls the sayHello function with person as the value of this, so within the function, this.name refers to John.

      You can also use call() to borrow methods from one object and apply them to another:

      
      Copy code
      const person1 = {
          firstName: 'John',
          lastName: 'Doe',
          getFullName: function() {
              return this.firstName + ' ' + this.lastName;
          }
      };

      const person2 = {
          firstName: 'Jane',
          lastName: 'Doe'
      };

      console.log(person1.getFullName.call(person2)); // Outputs: "Jane Doe"
      In this example, person1.getFullName.call(person2) borrows the getFullName method from person1 and applies it to person2, effectively setting this inside getFullName to refer to person2.

      The call() method is one of several methods (including apply() and bind()) that allow you to control the value of this when invoking functions in JavaScript.

      Examples:

      Using the JavaScript call() method for function borrowing
      -------------------------->
      const emp = {
        empDetails(tax) {
          console.log(this)
          const taxd = this.salary * tax / 1000
          return '\${this.firstName} \${this.lastName}, \${taxd} salary tax deduction'
        }
      };

      const empName1 = {
        firstName: 'suman',
        lastName: 'kumar',
        salary: 50000
      };

      const empName2 = {
        firstName: 'ramesh',
        lastName: 'pavan',
        salary: 80000
      };

      console.log( emp.empDetails.call (empName1, 5))
      console.log( emp.empDetails.call (empName2, 5))
      -------------------------->

      Example:2
      ------------------------>
      //Using the JavaScript call() method to chain constructors for an object

      function Box(height, width) {
        this.height = height;
        this.width = width;
      }

      const ob1 = new Box(3, 6)
      console.log(ob1)

      function Widget(height, width, color) {
        Box.call(this, height, width)
        this.color = color;
      }

      const wid = new Widget('red', 100, 200)
      console.log(wid)
      ------------------------>

      example:3

      const person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        myFunction: function() {
          console.log('\${this.firstName} \${this.lastName}')
        }
      };
      
      // const runFun = person.myFunction.bind(person)
      
      function sum(a, b) {
        console.log(this)
        this.myFunction();
        return a + b;
      }
      
      const ob = {
        Fname: 'mks',
        maFun: () => {
          const res = sum.call(person, 4, 5)
          return res
        }
      }
      console.log(ob.maFun())
      ----------------------->

      `,
    },
    {
      id: 1,
      title: "apply() method",
      note: `
      The apply() method calls the specified function with a given 'this' value, and arguments provided as an array  
      
      or  
      
      The apply() method invokes a function with a given 'this' value and arguments provided as an array.

      The call() method takes arguments separately.
      The apply() method takes arguments as an array.

      The apply() method in JavaScript is a built-in method that allows you to call a function with a specified this value and an array or array-like object of arguments. It is similar to the call() method, but instead of passing arguments one by one, you can pass them as an array.

      // Using the apply() method to append an array to another
      // The apply() method allows you to append elements of an array to another:
      //In this example, the apply() method modifies the original array arr. Note that the Array.prototype.concat() method also provides the same result except that it returns the new array instead of modifying the original array.



      The syntax for the apply() method is as follows:

      javascript
      Copy code
      functionName.apply(thisValue, [arg1, arg2, ...]);
      functionName: The function to be called.
      thisValue: The value to be passed as the this parameter when the function is called.
      [arg1, arg2, ...]: An array or array-like object containing the arguments to be passed to the function.
      Here's a simple example:

      javascript
      Copy code
      function sayHello(greeting, punctuation) {
          console.log('\${greeting}, \${this.name} \${punctuation}');
      }

      const person = {
          name: 'John'
      };

      sayHello.apply(person, ['Hi', '!']); // Outputs: "Hi, John!"
      In this example, sayHello.apply(person, ['Hi', '!']) calls the sayHello function with person as the value of this and the array ['Hi', '!'] as the arguments, resulting in the message "Hi, John!" being logged to the console.

      apply() is particularly useful when you have a function that accepts a variable number of arguments or when you want to pass an array of arguments dynamically.

      It's worth noting that in modern JavaScript, you can often achieve the same result using the spread operator (...) to pass an array of arguments directly to a function:


      Copy code
      sayHello.call(person, ...['Hi', '!']);
      Both apply() and call() are similar, but the choice between them depends on how the arguments are structured: apply() takes an array, while call() takes individual arguments. If you have an array of arguments, apply() can be more convenient.


      const person = {
        firstName: 'John',
        lastName: 'Doe',
        fullName() {
          return '-second \${this.firstName} \${this.lastName}'
        }
      }


      function greet(greeting, message) {
        console.log(this.fullName)
        return '\${greeting} \${this.firstName}. \${message}';
      }

      let result = greet.apply(person, ["-Hi how are you", "Please come to office"])
      let result1 = person.fullName.apply(person, ["-Hi how are you", "Please come to office"])
      console.log("----------with out apply-----------")
      console.log(greet('Hello', 'How are you?'))
      console.log("--------------with apply-------------------- ")
      console.log(result);
      console.log(result1);

      Example:
      const computer = {
        name: 'mac',
        isOs: false,
        trunOn() {
          return 'system name \${this.name}'
        }
      }

      console.log(computer.trunOn())

      const server = {
        name: 'windows',
        isOs: false,
      }

      let res1 = computer.trunOn.apply(server)
      console.log(res1)
      ----------------------->


      -------------------->
      const userFull = {
        fullName: 'sharath kumer',
        job: 'manager',
        area: 'wgl',
        age: 40,
        forVote(greet, message) {
          let elgVote = this.age > 18 ? '\${greet} \${this.fullName} elgable for vote, \${message}' : 'Not elgable for vote'
          return elgVote
        }
      }
      
      const user2 = {
        fullName: 'vamshi',
        job: 'PA',
        age: 70
      }
      console.log(userFull.forVote())
      console.log(userFull.forVote.apply(user2, ['hi', 'congratulations']))

      ------------------------->

      ------------------------->

      function greet(greeting, lang) {
        console.log(lang);
        console.log('\${greeting}, I am \${this.name} and I am \${this.age} years old');
      }
      const john = {
        name: 'John',
        age: 24,
      };
      const jane = {
        name: 'Jane',
        age: 22,
      };
      // Hi, I am John and I am 24 years old
      greet.apply(john, ['Hi', 'en']);
      // Hi, I am Jane and I am 22 years old
      greet.apply(jane, ['Hola', 'es']);

      ---------------------------->
      `,
    },
    {
      id: 1,
      title: "Bind() method",
      note: `
      
      
      Bind() allows you to create a new function from an existing function, change the new function's this context, and provide any arguments you want the new function to be called with. The arguments provided to bind will precede any arguments that are passed to the new function when it is called.

      does not immediately invoke the function

      returns a new function that can be invoked later in the code, while maintaining the desired context binding — this is useful for passing functions into other functions, like setTimeout(), which will invoke it later and won't necessarily bind the invoked function to the correct object without being coerced

      first parameter is the context object

      all other parameters are individually listed, like with call


      In JavaScript, the 'bind()' method is used to create a new function that, when called, has its 'this' keyword set to a specific value. It allows you to explicitly specify the value of 'this' when a function is executed. The 'bind()' method does not invoke the function immediately; instead, it returns a new function with the specified 'this' value and, optionally, initial arguments.

      // The bind() method creates a new function, when invoked, has the this sets to a provided value.
      // The bind() method allows an object to borrow a method from another object without making a copy of that method. This is known as function borrowing in JavaScript.

        Here's a simple example:

          ------------------>
          Copy code
          const originalFunction = function() {
            console.log(this.name);
          };

          const obj = { name: 'Example' };

          // Using bind to create a new function with a specific 'this' value
          const boundFunction = originalFunction.bind(obj);

          // Calling the new function
          boundFunction(); // Output: Example
          ----------------->

          In this example, originalFunction is a simple function that logs the name property of whatever object it is called on. We then use bind() to create a new function boundFunction where this is explicitly set to the obj object. When we call boundFunction(), it prints the name property of obj.

          bind() is particularly useful in scenarios where you want to ensure that a function is always called with a specific context, regardless of how it is later used or referenced.

          Note: The bind() method was introduced in ECMAScript 5 (ES5), so it may not be available in very old browsers. If you need to support such browsers, you may want to consider using a polyfill or alternative methods for achieving similar behavior.

          -------------------->
          let person = {
            name: 'John Doe',
            getName: function() {
              console.log(this)
              console.log(this.name);
            }
          };
          // person.getName()
          const f = person.getName.bind(person)
          setTimeout(f, 2000)
          -------------------->
          // The this inside the setTimeout() function is set to the global object in non-strict mode and undefined in the strict mode.
          // setTimeout(f, 0)


          ------------------->
          // Using bind() to borrow methods from a different object
          const runner = {
            name: 'Runner',
            run: function(speed) {
              console.log(' \${this.name} runs at \${speed}');
            }
          };

          const flyer = {
            name: 'Flyer',
            fly: function() {
              console.log(' \${this.name} flys at \${speed}');
            }
          };

          const checkFR = runner.run.bind(flyer, 40);
          checkFR();
          -------------------->

          -------------------->
          const car = {
            brand: 'Honda',
            getBrand() {
              return this.brand;
            }
          };
          
          console.log(car.getBrand());
          const getBrandName = car.getBrand;
          console.log('getBrandName = car.getBrand = ', getBrandName());

          //You get undefined instead of "Honda" because when you call a method without specifying its object, JavaScript sets this to the global object in non-strict mode and undefined in the strict mode.
          
          //To fix this issue, you use the bind() method of the Function.prototype object. The bind() method creates a new function whose the this keyword is set to a specified value.

          const getBrandName1 = car.getBrand.bind(car);
          console.log(getBrandName1());
          ------------------->
      `,
    },
    {
      id: 1,
      title: "this",
      note: `
      In JavaScript, the 'this' keyword refers to the context within which a function is executed. It represents the current execution context and provides a way to access the properties and methods of the current object.

      In JavaScript, the 'this' keyword always refers to an object. The thing about it is that the object it refers to will vary depending on how and where this is being called.

      The value of this depends on how a function is called:
      
      1) Global Context:
      When used outside of any function, 'this' refers to the global object. In a browser environment, the global object is 'window'.
      
      
      2) Function Context:
      When used within a function, the value of 'this' depends on how the function is called.
      If the function is called as a method of an object, 'this' refers to the object itself.
      If the function is called as a standalone function, 'this' refers to the global object ('window' in browsers) in non-strict mode, or it is 'undefined' in strict mode.

      A note about arrow functions:
      ------ ----- ----- ---------
      In arrow functions, JavaScript sets the this lexically. This means that the arrow function doesn't create its own execution context but inherits the this from the outer function where the arrow function is defined.

      In most cases, this means this will refer to the window object as well:

      const show = () => this

      console.log('arrow function this', show())
      image-374
      It's important to notice this because, for example, if we try to implement an arrow function to it as an object method, we won't be able to access the object through the this keyword:

      const person = {
          name: 'Pedro',
          surname: 'Sanchez',
          sayName: () => this.name + ' ' + this.surname
      }

      console.log(person.sayName());
      ---------------------->
      
      3) Constructor Context:
      When a function is used as a constructor (i.e., called with the 'new' keyword), 'this' refers to the newly created object instance.

      4) Event Handler Context:
      When used in event handlers (e.g., in an event listener), this typically refers to the element that triggered the event.

      A note about strict-mode:
      ------ ----- -----------
      When using strict-mode, calling 'this' within a function will return undefined.

      "use strict";

      function show() {
          console.log(this);
      }

      show();
      ------------>
      
      As a side comment, if you're not familiar with what strict-mode is, following the MDN docs:

      JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". Strict mode isn't just a subset: it intentionally has different semantics from normal code.

      Strict mode makes several changes to regular JavaScript semantics:

      > Eliminates some JavaScript silent errors by changing them to throw errors.
      > Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
      > Prohibits some syntax likely to be defined in future versions of ECMAScript.
      How to Use this in an Event Listener

      When using 'this' in an event listener, this will refer to the DOM element that fired the event.

      document.getElementById('testBtn').addEventListener('click', function() {
          console.log('this in a event', this);
      })

      In our case, we added the event listener to a button element: <button id="testBtn">TEST</button>

      And after clicking it, we get the following in our console:

      'this' Methods (call, apply and bind):
      ------ ------- ------ ----- ---  ----
      To complicate the subject a little more, javascript provides three native methods that can be used to manipulate the way the this keyword behaves. These methods are 'call', 'apply' and 'bind'. Let's see how they work.

      Here are some examples to illustrate the usage of 'this':
      
      Copy code
      // Global context
      console.log(this === window); // true
      
      // Method context
      const obj = {
        name: 'Object',
        greet() {
          console.log('Hello, \${this.name}!'');
        }
      };
      obj.greet(); // Output: "Hello, Object!"
      
      // Constructor context
      function Person(name) {
        this.name = name;
      }
      const person1 = new Person('John');
      console.log(person1.name); // Output: "John"
      
      // Event handler context (assuming button is an HTML button element)
      const button = document.querySelector ('button');
      button.addEventListener ('click', function() {
        console.log(this); // Output: HTMLButtonElement
      });

      ------------------>
      Understanding the context of this is essential for working effectively with objects, constructors, and event handling in JavaScript. It allows developers to write more flexible and dynamic code by accessing and manipulating object properties within different execution contexts. However, it's important to be cautious when dealing with this, as its behavior can be affected by various factors such as function binding, arrow functions, and strict mode.
      `,
    },
    {
      id: 1,
      title: "Callback",
      note: `In JavaScript, a callback function is a function that is passed as an argument to another function and is executed after the completion of some asynchronous operation or at a later time. 
      
      Callbacks are a fundamental concept in JavaScript, especially in scenarios like event handling, asynchronous operations, and dealing with functions that take time to complete, such as fetching data from a server.

      We need callback functions because many JavaScript actions are asynchronous, which means they don't really stop the program (or a function) from running until they're completed, as you're probably used to. Instead, it will execute in the background while the rest of the code runs.

      when we have a function that might take a long time to complete, oftentimes we provide a callback function. This function encapsulates the code we would like to run at a later time when the blocking action (e.g a network call) has been resolved. This allows us to return control to the JS engine and defer the rest of the execution until after the call-stack has been cleared. This is the concept of asynchrony in JavaScript.
      
      Here's a simple example of a callback function:
   
      Copy code
      function fetchData(callback) {
        // Simulating an asynchronous operation (e.g., fetching data from a server)
        setTimeout(function() {
          const data = "This is the fetched data";
          // Calling the callback function and passing the fetched data as an argument
          callback(data);
        }, 2000); // Simulating a 2-second delay
      }
      
      function handleData(data) {
        console.log("Handling data:", data);
      }
      
      // Calling fetchData and passing handleData as a callback function
      fetchData(handleData);
      In this example, fetchData is a function that simulates an asynchronous operation with a 2-second delay. It takes a callback function (handleData) as an argument and calls it with the fetched data after the operation is complete.
      
      Callback functions are crucial in scenarios where you want to ensure that certain code runs only after a specific operation is finished, especially when dealing with asynchronous tasks like AJAX requests, file I/O, or timers.
      
      It's worth noting that with the introduction of Promises and async/await in JavaScript, there are alternative ways to handle asynchronous operations that often result in more readable and maintainable code. However, understanding callbacks remains important as they are still widely used in JavaScript development.`,
    },
    {
      id: 1,
      title: "Class",
      note: ` Classes are a core concept in object-oriented programming, and TypeScript has full support for them. Classes allow developers to define blueprints for objects that share the same properties and methods. They can also include constructors, access modifiers, and inheritance.
      `,
    },
    {
      id: 1,
      title: "inheritance",
      note: `

      inheritance refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon the features of an existing one. JavaScript implements inheritance by using objects. Each object has an internal link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype and acts as the final link in this prototype chain

      In JavaScript, inheritance can be achieved through prototype chaining or using the newer syntax introduced with ES6 (ECMAScript 2015) classes. Let's explore both approaches.

      

      1. Prototype Chaining:
      ---------------------
      In JavaScript, objects can inherit properties and methods from other objects through their prototypes. Every object in JavaScript has a prototype, and if a property or method is not found on the object itself, JavaScript looks for it in the object's prototype chain.

      Here's an example:

      Copy code
      // Parent constructor function
      function Animal(name) {
          this.name = name;
      }

      // Adding a method to the prototype
      Animal.prototype.sound = function() {
          console.log('Generic animal sound');
      };

      // Child constructor function
      function Dog(name, breed) {
          // Call the parent constructor
          Animal.call(this, name);
          this.breed = breed;
      }

      // Set up the prototype chain
      Dog.prototype = Object.create(Animal.prototype);
      Dog.prototype.constructor = Dog; // Reset the constructor property

      // Add a method specific to Dog
      Dog.prototype.bark = function() {
          console.log('Woof!');
      };

      // Creating an instance of Dog
      const myDog = new Dog('Buddy', 'Golden Retriever');

      // Using inherited methods
      myDog.sound(); // Outputs: Generic animal sound
      myDog.bark();  // Outputs: Woof!

      2. ES6 Classes:
      --------------
      With the introduction of ES6, a more syntactic sugar for inheritance is provided through the class keyword:

      the child class has a constructor, it needs to call super(). For example, the following code results in an error:

      class Bird extends Animal {
          constructor(legs) {
          }
          fly() {
              console.log('flying');
          }
      }
      
      Error:

      ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
      
      Because the super() initializes the this object, you need to call the super() before accessing the this object. Trying to access this before calling super() also results in an error.

      ---------------
      Shadowing methods:
      ------------------
      ES6 allows the child class and parent class to have methods with the same name. In this case, when you call the method of an object of the child class, the method in the child class will shadow the method in the parent class.

      The following Dog class extends the Animal class and redefines the walk() method:

      To call the method of the parent class in the child class, you use super.method(arguments) like this:

      class Animal {
        constructor(legs) {
            this.legs = legs;
        }
        walk() {
            console.log('walking on ' + this.legs + ' legs');
        }
      }
      
      class Bird extends Animal {
        constructor(legs) {
            super(legs);
            console.log(this)
        }
        walk() {
          super.walk()
            console.log('flying');
        }
      }
      
      
      let bird = new Bird(2);
      
      bird.walk();

      ----------------------->

      Inheriting static members:
      -------------------------
      Besides the properties and methods, the child class also inherits all static properties and methods of the parent class. For example:

      class Animal {
          constructor(legs) {
              this.legs = legs;
          }
          walk() {
              console.log('walking on ' + this.legs + ' legs');
          }
          static helloWorld() {
              console.log('Hello World');
          }
      }

      class Bird extends Animal {
          fly() {
              console.log('flying');
          }
      }
      
      In this example, the Animal class has the helloWorld() static method and this method is available as Bird.helloWorld() and behaves the same as the Animal.helloWorld() method:

      Bird.helloWorld(); // Hello World

      --------------->
      Copy code
      // Parent class
      class Animal {
          constructor(name) {
              this.name = name;
          }

          sound() {
              console.log('Generic animal sound');
          }
      }

      // Child class
      class Dog extends Animal {
          constructor(name, breed) {
              super(name); // Call the parent constructor
              this.breed = breed;
          }

          bark() {
              console.log('Woof!');
          }
      }

      // Creating an instance of Dog
      const myDog = new Dog('Buddy', 'Golden Retriever');

      // Using inherited methods
      myDog.sound(); // Outputs: Generic animal sound
      myDog.bark();  // Outputs: Woof!

      Both approaches achieve inheritance in JavaScript, and the choice between them often comes down to personal preference or project requirements. The ES6 class syntax is more concise and readable, but it's important to understand that it's just a syntactic sugar over the prototype chain mechanism.

      `,
    },
    {
      id: 1,
      title: "Prototypes",
      note: `Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.`,
    },
    {
      id: 1,
      title: "JavaScript Singleton",
      note: `Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.`,
    },
    {
      id: 1,
      title: "JavaScript Singleton",
      note: `Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.`,
    },
    {
      id: 1,
      title: "JavaScript Singleton",
      note: `Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.`,
    },
    {
      id: 1,
      title: "JavaScript Singleton",
      note: `Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.`,
    },
    {
      id: 1,
      title: "JavaScript Singleton",
      note: `Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.`,
    },
    {
      id: 1,
      title: "JavaScript Singleton",
      note: `Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.`,
    },
    {
      id: 1,
      title: "JavaScript Singleton",
      note: `Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.`,
    },
    {
      id: 1,
      title: "JavaScript Singleton",
      note: `Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.`,
    },
    {
      id: 1,
      title: "JavaScript Singleton",
      note: `Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.`,
    },
    {
      id: 1,
      title: "JavaScript Singleton",
      note: `Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.`,
    },
    {
      id: 1,
      title: "JavaScript Singleton",
      note: `Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.`,
    },
    {
      id: 1,
      title: "JavaScript Singleton",
      note: `Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.`,
    },
    {
      id: 1,
      title: "JavaScript Singleton",
      note: `Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.`,
    },
    {
      id: 1,
      title: "JavaScript Singleton",
      note: `Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.`,
    },
    {
      id: 1,
      title: "What is Variable Shadowing?",
      note: `
      Variable shadowing occurs when a variable with the same name is declared in an inner scope, such as a function or a block, as a variable in an outer scope. In such cases, the variable in the inner scope shadows or hides the variable in the outer scope. This means that any references to the variable within the inner scope will refer to the inner variable, effectively "shadowing" the outer variable.

      Illegal Shadowing: Now, while shadowing a variable, it should not cross the boundary of the scope, i.e. we can shadow var variable by let variable but cannot do the opposite. So, if we try to shadow let variable by var variable, it is known as Illegal Shadowing and it will give the error as “variable is already defined.” 
      `,
    },

  ]
}