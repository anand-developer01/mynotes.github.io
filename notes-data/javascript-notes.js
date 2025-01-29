const isHighlighted = 'javascript-notes'
const Links1 = 'javascript-notes'
const Links2 = 'javascript-code-challenge'
const Links3 = 'javascript-builtin-function'
const Links4 = 'javascript-projects'

const javascriptData = {
  javascriptNote: [
    {
      id: 1,
      section: `JAVASCRIPT RUNTIME`,
      title: "JavaScript Event Loop",
      note: [
        {
          text1: `JavaScript is a single-threaded programming language. This means that JavaScript can do only one thing at a single point in time.

          The JavaScript engine executes a script from the top of the file and works its way down. It creates the execution contexts, and pushes, and pops functions onto and off the call stack in the execution phase.
          
          If a function takes a long time to execute, you cannot interact with the web browser during the function's execution because the page hangs.
          
          A function that takes a long time to complete is called a blocking function. Technically, a blocking function blocks all the interactions on the webpage, such as mouse clicks.
          
          An example of a blocking function is a function that calls an API from a remote server.
          
          The following example uses a big loop to simulate a blocking function:`,
          code1: `      function task(message) {
            // emulate time consuming task
            let n = 10000000000;
            while (n > 0){
                n--;
            }
            console.log(message);
        }
        
        console.log('Start script...');
        task('Call an API');
        console.log('Done!');`
        },
        {
          text1: `In this example, we have a big while loop inside the task() function that emulates a time-consuming task. The task() function is a blocking function.
      
          The script hangs for a few seconds (depending on how fast the computer is) and issues the following output:
          
          Start script...
          Download a file.
          Done!
          To execute the script, the JavaScript engine places the first call console.log() on top of the call stack and executes it. Then, it places the task() function on top of the call stack and executes the function.
          
          However, it'll take a while to complete the task() function. Therefore, you'll see the message 'Download a file.' a little time later. After the task() function completes, the JavaScript engine pops it off the call stack.
          
          Finally, the JavaScript engine places the last call to the console.log('Done!') function and executes it, which will be very fast.
    
          Callbacks to the rescue
          To prevent a blocking function from blocking other activities, you typically put it in a callback function for execution later. For example:`,
          code1: `console.log('Start script...');
      
          setTimeout(() => {
              task('Download a file.');
          }, 1000);
          
          console.log('Done!');`
        },
        {
          text1: `In this example, you'll see the message 'Start script...' and 'Done!' immediately. And after that, you'll see the message 'Download a file'.
      
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
          `,
          code1: `See another example:
      
          console.log('Hi!');
          
          setTimeout(() => {
              console.log('Execute immediately.');
          }, 0);
          
          console.log('Bye!');`
        },
        {
          text1: `In this example, the timeout is 0 seconds, so the message 'Execute immediately.' should appear before the message 'Bye!'. However, it doesn't work like that.
      
          The JavaScript engine places the following function call on the callback queue and executes it when the call stack is empty. In other words, the JavaScript engine executes it after the 
          
          console.log('Bye!').
          console.log('Execute immediately.');
          
          Here's the output:
            <span style="color:red">
            Hi!
            Bye!
            Execute immediately.
            </span>
          The following picture illustrates JavaScript runtime, Web API, Call stack, and Event loop:
          
          In this tutorial, you have learned about the JavaScript event loop, a constantly running process that coordinates the tasks between the call stack and callback queue to achieve concurrency.`,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "hoisting",
      note: [
        {
          text1: `Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

          hoisting refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope - all before code execution. In turn, this allows us to use functions, variables, and classes before they are declared.
    
          In JavaScript, "hoisting" refers to the behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use a variable or function before it is declared in your code.
    
          Hoisting is a concept or behavior in JavaScript where the declaration of a function, variable, or class goes to the top of the scope they were defined in.
          
          Introduction to the JavaScript hoisting
    When the JavaScript engine executes the JavaScript code, it creates the global execution context. The global execution context has two phases:
    
    <b>1) Creation </b>
    <b>2) Execution </b>
    During the creation phase, the JavaScript engine moves the variable and function declarations to the top of your code. This is known as hoisting in JavaScript.
    
    <b>Variable hoisting</b>
    Variable hoisting means the JavaScript engine moves the variable declarations to the top of the script. For example, the following example declares the counter variable and initialize its value to 1:`,
          code1: `console.log(counter); // 👉 undefined
          var counter = 1;`
        },
        {
          text1: `In this example, we reference the counter variable before the declaration.
          However, the first line of code doesn't cause an error. The reason is that the JavaScript engine moves the variable declaration to the top of the script.
          Technically, the code looks like the following in the execution phase:`,
          code1: `var counter;
          console.log(counter); // 👉 undefined
          counter = 1;`
        },
        {
          text1: `During the creation phase of the global execution context, the JavaScript engine places the variable counter in the memory and initializes its value to undefined.
          The let keyword
The following declares the variable counter with the let keyword:`,
          code1: `console.log(counter);
          let counter = 1;
          
          The JavaScript issues the following error:
          
          // "ReferenceError: Cannot access 'counter' before initialization
          // The error message explains that the counter variable is already in the heap memory. However, it hasn't been initialized.
          `
        },
        {
          text1: `Behind the scenes, the JavaScript engine hoists the variable declarations that use the let keyword. However, it doesn't initialize the let variables.

          Notice that if you access a variable that doesn't exist, the JavaScript will throw a different error:`,
          code1: `
          console.log(alien);
          let counter = 1;

          // Here is the error:
          // ReferenceError: alien is not defined
          `
        },
        {
          text1: `<b>Function hoisting</b>
          Like variables, the JavaScript engine also hoists the function declarations. This means that the JavaScript engine also moves the function declarations to the top of the script. For example:`,
          code1: `let x = 20,
          y = 10;
        
        let result = add(x, y); 
        console.log(result); // 👉 30
        
        function add(a, b) {
          return a + b;
        }
        
        Output: 30

        // In this example, we called the add() function before defining it. The above code is equivalent to the following:
        
        function add(a, b){
            return a + b;
        }
        
        let x = 20,
            y = 10;
        
        let result = add(x,y);
        console.log(result); // 👉 30`
        },
        {
          text1: `During the creation phase of the execution context, the JavaScript engine places the add() function declaration in the heap memory. To be precise, the JavaScript engine creates an object of the Function type and a function reference add that refers to the function object.
          
          Function expressions
          The following example changes the add from a regular function to a function expression:`,
          code1: `let x = 20,
          y = 10;
      
      let result = add(x,y); // ❌ Uncaught ReferenceError: add is not defined
      console.log(result);
      
      let add = function(x, y) {
          return x + y;
      }`
        },
        {
          text1: `If you execute the code, the following error will occur:
          Uncaught ReferenceError: add is not defined
          
          During the creation phase of the global execution context, the JavaScript engine creates the add variable in the memory and initializes its value to undefined.
          
          When executing the following code, the add is undefined, hence, it isn't a function:
          
          let result = add(x,y);
          
          The add variable is assigned to an anonymous function only during the execution phase of the global execution context.
          
          Arrow functions
          The following example changes the add function expression to the arrow function:
          `,
          code1: `let x = 20,
          y = 10;
      
      let result = add(x,y); // ❌ Uncaught ReferenceError: add is not defined
      console.log(result);
      
      let add = (x, y) => x + y; `
        },
        {
          text1: `The code also issues the same error as the function expression example because arrow functions are syntactic sugar for defining function expressions.

          Uncaught ReferenceError: add is not defined
          
          Similar to the functions expressions, arrow functions are not hoisted.
          
          <b>Summary</b>
          > JavaScript hoisting occurs during the creation phase of the execution context that moves the variable and function declarations to the top of the script.
          > The JavaScript engine hoists the variables declared using the let keyword, but it doesn't initialize them as the variables declared with the var keyword.
          > The JavaScript engine doesn't hoist the function expressions and arrow functions.`,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "JavaScript Execution Context",
      note: [
        {
          text1: `
          <b>global execution context:</b>
          The global execution context is the top-level context in a JavaScript program. It represents the global scope, encompassing the entire program and all its components. This context sets the stage for the entire code execution process and plays a pivotal role in managing global variables and functions.
    
          There are two phases of JavaScript execution context:
    
          <b>Creation phase:</b> In this phase, the JavaScript engine creates the execution context and sets up the script's environment. It determines the values of variables and functions and sets up the scope chain for the execution context.
          
          <b>Execution phase:</b> In this phase, the JavaScript engine executes the code in the execution context. It processes any statements or expressions in the script and evaluates any function calls.
    
          Introduction to the JavaScript execution context
          Let's start with the following example:`,
          code1: `      let x = 10;
          function timesTen(a){
              return a * 10;
          }
          let y = timesTen(x);
          console.log(y); // 100`
        },
        {
          text1: ` In this example:
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
    
          <span style="background:yellow; width:300px; padding:10px;" class="text-center d-flex flex-column">
          <b>Global Execution Context</b> </br>Creation Phase (Web Browser)
          <span style="background:#8989ac; padding:10px; margin:3px;">Global Object : Window</span>
          <span style="background:#8989ac; padding:10px; margin:3px;">this : window</span>
          <span style="background:#8989ac; padding:10px; margin:3px;">x : undefined</span>
          <span style="background:#8989ac; padding:10px; margin:3px;">timesTen : function(){...}</span>
          <span style="background:#8989ac; padding:10px; margin:3px;">y : undefined</span>
          </span>

          After the creation phase, the global execution context moves to the execution phase.
    
          <b>The execution phase:</b>
    
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
    
          To keep track of all the execution contexts, including the global execution context and function execution contexts, the JavaScript engine uses the call stack,`,
          code1: ``
        },
        {
          text1: ``
        }
      ]
    },
    {
      id: 1,
      title: "variable scope",
      note: [
        {
          text1: `Scope determines the visibility and accessibility of a variable. JavaScript has three scopes:

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
          The variables that you declare inside a function are local to the function. They are called local variables.`,
          code1: `For example:
         
          var message = 'Hi';
    
          function say() {
              var message = 'Hello';
              console.log(message);
          }
    
          say();
          console.log(message);
          
    
          // Output:
          // .......
          // Hello
          // Hi
          `
        },
        {
          text1: ` When the JavaScript engine executes the say() function, it creates a function execution context. The variable message declared inside the say() function is bound to the function execution context of the function, not the global execution context.

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
    `,
          code1: `
          // Scope chain:

          // Consider the following example:
          // -------- --- ---------- ------
          
          var message = 'Hi';
          function say() {
              console.log(message);
          }
          say();
        
          // ........
          // Output:
          // Hi
          `
        },
        {
          text1: `In this example, we reference the variable <b>message</b> inside the <b>say()</b> function. Behind the scenes, JavaScript performs the following:

          Look up the variable <b>message</b> in the current context (function execution context) of the <b>say()</b> function. It cannot find any.
          Find the variable <b>message</b> in the outer execution context which is the global execution context. It finds the variable <b>message</b>.
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
    `,
          code1: `
          var y = 20;

          function bar() {
              var y = 200;
              function baz() {  
                  console.log(y);
              }
              baz();
          }
    
          bar();
          
          // Output:
          // 200
          `
        },
        {
          text1: `First, the JavaScript engine finds the variable y in the scope of the <b>baz()</b> function. It cannot find any. So it goes out of this scope.
          Then, the JavaScript engine finds the variable y in the <b>bar()</b> function. It can find the variable y in the scope of the <b>bar()</b> function so it stops searching.
    
          <b>Global variable leaks: the weird part of JavaScript:</b>
          `,
          code1: `
          // See the following example:

          function getCounter() {
              counter = 10;
              return counter;
          }
    
          console.log(getCounter());
          
          // Output:
          // 10
          `
        },
        {
          text1: `In this example, we assigned 10 to the <b>counter</b> variable without the <b>var, let, or const</b> keyword and then returned it.

          Outside the function, we called the <b>getCounter()</b> function and showed the result in the console.
          This issue is known as the leaks of the global variables.
    
          Under the hood, the JavaScript engine first looks up the <b>counter</b> variable in the local scope of the <b>getCounter()</b> function. Because there is no <b>var, let, or const</b> keyword, the <b>counter</b> variable is not available in the local scope. It hasn't been created.
    
          Then, the JavaScript engine follows the scope chain and looks up the <b>counter</b> variable in the global scope. The global scope also doesn't have the <b>counter</b> variable, so the JavaScript engine creates the <b>counter</b> variable in the global scope.
    
          To fix this “weird” behavior, you use the <b>'use strict'</b> at the top of the script or at the top of the function:`,
          code1: `
          'use strict'

          function getCounter() {
              counter = 10;
              return counter;
          }
          
          console.log(getCounter());
          
          // Now, the code throws an error:
          
          ReferenceError: counter is not defined
          
          // The following shows how to use the 'use strict' in the function:
          
          function getCounter() {
              'use strict'
              counter = 10;
              return counter;
          }
          
          console.log(getCounter());`
        },
        {
          text1: `     <b>Block scope</b>
          ES6 provides the <b>let</b> and <b>const</b> keywords that allow you to declare variables in block scope.
    
          Generally, whenever you see curly brackets <b>{}</b>, it is a block. It can be the area within the <b>if, else, switch</b> conditions or <b>for</b>, <b>do while</b>, and <b>while </b> loops.
    
          In this below, we reference the variable <b>greeting</b> outside the <b>if</b> block that results in an error.
  
          In this tutorial, you have learned about the JavaScript variable scopes including function scope, global scope, and block scope.`,
          code1: `          
          // See the following example:
    
          function say(message) {
              if(!message) {
                  let greeting = 'Hello'; // block scope
                  console.log(greeting);
              }
              // say it again ?
              console.log(greeting); // ReferenceError
          }
    
          say();`
        },
      ]
    },
    {
      id: 1,
      title: "Stack & heap",
      note: [
        {
          text1: `<b>Stack:-</b>
          A Stack is a linear data structure that follows the LIFO (Last-In-First-Out) principle. This implies that the last item to enter the stack goes out first.
    
          Imagine a pile of books stacked up on a shelf. The last book ends up being the first to be removed. Data stored inside the stack can still be accessed easily.
    
          <b>heap:-</b>
          Reference data are stored inside the heap. When reference data is created, the variable of the data is placed on the stack but the actual value is placed on the heap.

          <b>e.preventDefault()</b> is a method that belongs to the event object (e). It is called to prevent the default behavior of form submission, which is to refresh the page. By calling preventDefault(), we override the default behavior and prevent the page from refreshing.`,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "Call Stack",
      note: [
        {
          text1: `The JavaScript execution contexts (Global execution context and function execution context) are executed via the JavaScript engine. In order to manage these execution contexts, the JS engine uses the call stack. So, the JS call stack is a data structure that keeps track information of the functions being called and executed. Thus, if the user invokes a function for execution, the specified function gets pushed/added in the call stack, and when the user returns from a function, it means the function is popped out from the call stack. Thus, call stack is a normal stack data structure that follows the stack order principal, i.e., LIFO (Last In First Out).

          Introduction to JavaScript Call Stack
          A call stack is a way for the JavaScript engine to keep track of its place in code that calls multiple functions. It has the information on what function is currently being run and what functions are invoked from within that function…
    
          Also, the JavaScript engine uses a call stack to manage execution contexts:
    
          <b>The global execution context</b>
          <b>Function execution contexts</b>
          The call stack works based on the last-in-first-out (LIFO) principle.
    
          When you execute a script, the JavaScript engine creates a global execution context and pushes it on top of the call stack.
    
          Whenever a function is called, the JavaScript engine creates a function execution context for the function, pushes it on top of the call stack, and starts executing the function.
    
          If a function calls another function, the JavaScript engine creates a new function execution context for the function being called and pushes it on top of the call stack.
    
          When the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where it left off.
    
          The script will stop when the call stack is empty.
    
          <b>JavaScript call stack example</b>
          Let's start with the following example:`,
          code1: `function add(a, b) {
            return a + b;
        }
        
        function average(a, b) {
            return add(a, b) / 2;
        }
        
        let x = average(10, 20);
        `
        },
        {
          text1: `      When the JavaScript engine executes this script, it places the global execution context denoted by <b>main()</b> or <b>global()</b> function on the call stack.

          The global execution context enters the creation phase and moves to the execution phase.
    
          The JavaScript engine executes the call to the <b>average(10, 20)</b> function and creates a function execution context for the <b>average()</b> function and pushes it on top of the call stack:
    
          The JavaScript engine starts executing the <b>average()</b> since because the <b>average()</b> function is on the top of the call stack.
    
          The <b>average()</b> function calls <b>add()</b> function. At this point, the JavaScript engine creates another function execution context for the <b>add()</b> function and places it on the top of the call stack:
    
          JavaScript engine executes the <b>add()</b> function and pops it off the call stack:
    
          At this point, the <b>average()</b> function is on the top of the call stack, the JavaScript engine executes and pops it off the call stack.
    
          Now, the call stack is empty so the script stops executing:
    
          The following picture illustrates the overall status of the Call Stack in all steps:
          
          <b>Stack Overflow</b>
The call stack has a fixed size, depending on the implementation of the host environment, either the web browser or Node.js.

If the number of execution contexts exceeds the size of the stack, a stack overflow error will occur.

For example, when you execute a recursive function that has no exit condition, the JavaScript engine will issue a stack overflow error:
`,
          code1: `function fn() {
            fn();
        }
        
        fn(); // stack overflow`
        },
        {
          text1: `<b>Asynchronous JavaScript</b>
          JavaScript is a single-threaded programming language. This means that the JavaScript engine has only one call stack. Therefore, it only can do one thing at a time.
          
          When executing a script, the JavaScript engine executes code from top to bottom, line by line. In other words, it is synchronous.
          
          Asynchronous means the JavaScript engine can execute other tasks while waiting for another task to be completed. For example, the JavaScript engine can:
          
          Request for data from a remote server.
          Display a spinner
          When the data is available, display it on the webpage.
          To do this, the JavaScript engine uses an event loop, which will be covered in the following tutorial.
          
          <b>Summary</b>
          JavaScript engine uses a call stack to manage execution contexts.
          The call stack uses the stack data structure that works based on the LIFO (last-in-first-out) principle.
          `,
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
      title: "Web APIs",
      note: [
        {
          text1: `<a href="https://www.javascripttutorial.net/web-apis/" target="_blank">Web API</a>
          An Application Programming Interface (API) is a software interface that allows two or more programs to communicate by acting as an intermediary between them.

          API stands for Application Programming Interface, which is a set of protocols and definitions that allows communication between two software.
    
          All browsers have a set of built-in APIs that extend their functionality, usually by supporting complex operations.`,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "lexical scope:",
      note: [
        {
          text1: `<b>Scope</b> in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript
          Scope determines the accessibility (visibility) of variables
          scope in JavaScript refers to the context or environment in which variables are declared and can be accessed.
          Scope of variables refers to the accessibility of a particular variable within the program.
          <b>Scope</b> refers to the area where an item (such as a function or variable) is visible and accessible to other code.


          In lexical scope, the scope of a variable is defined by where it is written or declared in the source code, rather than by where the function is called. Essentially, lexical scope refers to the context in which the code is written, and this context determines how variables are accessed during the program's execution.

          <b>Types of Scope in JavaScript</b>:
There are different types of scope, and understanding them is crucial to avoiding issues like accidental variable overwriting, unintended side effects, and understanding closures.
    => Global Scope
    => Function Scope
    => Block Scope
    => Lexical Scope (Closures)

    <b>lexical</b> is term hierarchy or in a sequence
          A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.

          function parentFun(){
            var b=10;
            sub();
            function sub(){
              console.log(b)
            }
          }
            Here sub() function lexically setting inside main() function 
            Here sub() function lexically inside main() function that means lexical in order or hierarchy
            
                        The term lexical refers to the structure or arrangement of words or symbols in a language. In programming, especially in the context of lexical scope, it refers to the physical location of code elements (such as variables, functions, and blocks) in the source code itself.

            Here sub() function physically inside main() function
            main() function lexically inside global scope


           <b> Step-by-Step Breakdown of the Execution Flow</b>:
<b>1. Global Execution Context</b>:
Before parentFun() is called, JavaScript starts in the global execution context.
    <b>Global context</b>:
        parentFun is declared and is available to be called in the global scope.
        The JavaScript engine is ready to execute parentFun() when invoked.

<b>2. Execution Context for parentFun()</b>:
When parentFun() is called, a new execution context is created for parentFun. The steps in this context are as follows:
    <b>Creation Phase (for parentFun)</b>:
        The variable b is hoisted to the top of the parentFun() execution context, but its value is initially set to undefined.
        The function sub is hoisted, so it is available to be invoked throughout the entire scope of parentFun().
   <b> Execution Phase (for parentFun)</b>:
        The variable b is set to 10 during the execution phase, so b = 10 is executed.
        sub() is called. At this point, the lexical environment of parentFun() is still active, so sub() can access variables from the parentFun() scope, including b.

<b>3. Execution Context for sub()</b>:
When sub() is invoked, a new execution context is created for sub. This context has the following behavior:
    <b>Creation Phase (for sub)</b>:
        There are no variables declared inside sub(), so the variable environment for sub() is empty.
        The scope chain for sub() includes</b>:
            sub()'s own scope (empty in this case).
            The lexical scope of parentFun(), which has access to b.
            The global scope.
    <b>Execution Phase (for sub)</b>:
        The console.log(b) statement inside sub() is executed. It refers to b from the lexical scope of parentFun(), where b was set to 10.
        Since sub() forms a closure over its lexical environment, it has access to b even though parentFun() has finished execution.
        <b>Closure in Action</b>:
        The closure in this case is the function sub(), which "remembers" and has access to the variable b from its lexical environment (the parentFun() function) even after parentFun() finishes executing.

<b>4. Returning to parentFun()</b>:
After sub() finishes executing and logging b, its execution context is popped off the stack and the program returns to parentFun(). Since parentFun() has no further code to execute, its execution context is also popped off the stack.

Finally, the program finishes executing and returns to the global context.

          (or)
  Lexical Scoping: A function scope's ability to access variables from the parent scope is known as lexical scope.
          (or)
  the inner functions have access to the variables and other resources of their parent scope.
  
  <b>Lexical scoping in JavaScript</b>
JavaScript uses lexical scoping to resolve the variable names when a function is created inside another function. It determines the function's parent scope by looking at where the function was created instead of where it was invoked.

  -The global scope is always the last scope of any JavaScript scope chain. In other words, the global scope is where all searches will end.
  -An inner (child) scope has access to its parent (outer) scope, but an outer scope does not have access to its child scope.
  
  Note:
  Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.`,
          code1: `var a = 10;  // Global variable 'a' is declared

var func = function () {  // 'func' is a function declared in the global scope
  var b = 20;  // 'b' is declared inside 'func', so it's scoped to 'func'
  
  console.log("a and b are accessible (outer):", a, b);  // 'a' from global scope and 'b' from 'func' scope

  var innerFunc = function () {  // 'innerFunc' is declared inside 'func'
    var c = 30;  // 'c' is declared inside 'innerFunc', so it's scoped to 'innerFunc'
    
    console.log("a, b, and c are accessible (inner):", a, b, c);  // 'a' from global, 'b' from 'func', 'c' from 'innerFunc'
  }

  innerFunc();  // Calls 'innerFunc', which logs all three variables
  return;
}

func();  // Calls 'func', which also calls 'innerFunc' inside it

console.log("only a is accessible (global):", a);  // Only 'a' is accessible here in the global scope
`
        },
      ]
    },
    {
      id: 1,
      title: "Callback queue",
      note: [
        {
          text1: ``,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      section: `ecmascript vs es6`,
      title: "ES Module Systems",
      note: [
        {
          text1: `ES6 modules are automatically strict-mode code, even if you don't write <b>use strict</b>; in them.
          You can use <u>import</u> and <u>export</u> in modules.

          Let’s talk about export first. Everything declared inside a module is local to the module, by default. If you want something declared in a module to be public, so that other modules can use it, you must export that feature. There are a few ways to do this. The simplest way is to add the export keyword.

          You can <u>export</u> any top-level <u>function, class, var, let</u>, or <u>const</u>.

          When you run a module containing an import declaration, the modules it imports are loaded first, then each module body is executed in a depth-first traversal of the dependency graph, avoiding cycles by skipping anything already executed.

          The new standard is designed to interoperate with existing CommonJS and AMD modules. So suppose you have a Node project and you’ve done npm install lodash. Your ES6 code can import individual functions from Lodash:

import {each, map} from "lodash";
each([3, 2, 1], x => console.log(x));


1) Named Exports
2) Default Exports

<b>Named Exports</b>
Named exports allow you to export multiple values (functions, variables, objects, etc.) from a module. You <b>export</b> each item explicitly by using the <u>export</u> keyword, either inline with the declaration or at the end of the module. When importing these values into another module, you must use the exact names used in the export.
          `,
          code1: `//Named Exports
//You can export multiple values from a file using named exports.
// mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;  

// Named Imports
// When importing named exports, use curly braces {} with the exact names.
// app.js

import { add, subtract } from './mathUtils.js';
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2 

//------------------ -----------

// Default Export
//Default exports allow you to export a single value or function.
// greeting.js
export default function greet(name) {
  return Hello, \${name}!;
}      
  
// Default Import
// When importing a default export, you can use any name.
// app.js
 import greet from './greeting.js';
console.log(greet('Raj')); // Output: Hello, Raj! 


<b>Named Exports</b>
<b>Multiple</b> Exports Yes
<b>Import</b> Syntax Curly braces {} required
<b>Renaming</b> Possible during import
<b>Code Readability</b> Easy to identify exported items

<b>Default Export</b>
<b>Multiple</b> Exports No
<b>Import</b> Syntax No curly braces needed
<b>Renaming Import name can be chosen
<b>Code Readability</b> Less obvious, single value

<b>Benefits of ES6 Modules</b>
<b>Encapsulation</b>: Keeps code organized and avoids polluting the global namespace.
<b>Reusability</b>: Easily reuse logic across files.
<b>Lazy Loading</b>: Modules can be loaded on demand for performance optimization.
<b>Improved Readability</b>: Clear dependency management makes code easier to understand.
`
        },
        {
          text1: `<b>Import vs. Require</b>
Before ES modules were standardized, Node.js used the CommonJS require syntax to load modules. While require served its purpose, it had some limitations, such as being synchronous and not supporting static analysis. ES modules address these limitations and offer a more flexible and efficient way to work with modules.
          `,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "ES Module Systems",
      note: [
        {
          text1: `arrow functions
          Template literals
          promises
          fetch API
          ES Module Systems
          `,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      section: "ADVANCED FUNCTIONS",
      title: "Functions are First-Class Citizens",
      note: [
        {
          text1: `A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function.
          JavaScript treats function as a first-class citizen. This means that functions are simply a value and are just another type of object.
          
          Functions are first-class citizens in JavaScript. In other words, you can treat functions like values of other types.

          The following defines the <b>add()</b> function and assigns the function name to the variable <b>sum</b>:
          `,
          code1: `function add(a, b) {
                    return a + b;
                }
        
        let sum = add;
        
        // In the assignment statement, we don't include the opening and closing parentheses at the end of the 'add' identifier. We also don't execute the function but reference the function.

        // By doing this, we can have two ways to execute the same function. For example, we can call it normally as follows:

        let result = add(10, 20);
        // Alternatively, we can all the 'add()' function via the 'sum' variable like this:

        let result = sum(10,20);
        `
        },
        {
          text1: `<b>Passing a function to another function</b>
          Because functions are values, you can pass a function as an argument into another function.

The following declares the <b>average()</b> function that takes three arguments. The third argument is a function:
          `,
          code1: `function average(a, b, fn) {
            return fn(a, b) / 2;
        }
        
        // Now, you can pass the 'sum' function to the 'average()' function as follows:

let result = average(10, 20, sum);

// Put it all together:
function add(a, b) {
    return a + b;
}

let sum = add;

function average(a, b, fn) {
    return fn(a, b) / 2;
}

let result = average(10, 20, sum);

console.log(result);
// Output:
// 15
        `
        },
        {
          text1: `<b>Returning functions from functions</b>
          Since functions are values, you can return a function from another function.

The following <b>compareBy()</b> function returns a function that compares two objects by a property:
`,
          code1: `function compareBy(propertyName) {
            return function (a, b) {
              let x = a[propertyName],
                y = b[propertyName];
          
              if (x > y) {
                return 1;
              } else if (x < y) {
                return -1;
              } else {
                return 0;
              }
            };
          }`
        },
        {
          text1: `<b> More JavaScript Functions are First-Class Citizens example </b>
          The following <b>convert()</b> function has two parameters. The first parameter is a function and the second one is the length that will be converted based on the first argument:

          To convert <b>cm</b> to <b>in</b>, you can call the <b>convert()</b> function and pass the <b>cmToIn</b> function into the <b>convert()</b> functio

          Similarly, to convert a length from inches to centimeters, you can pass the <b>inToCm</b> function into the <b>convert()</b> function, like this:
          `,
          code1: `function cmToIn(length) {
            return length / 2.54;
          }
          
          function inToCm(length) {
            return length * 2.54;
          }
          
          function convert(fn, length) {
            return fn(length);
          }
          
          let inches = convert(cmToIn, 10);
          console.log(inches);
          
          let cm = convert(inToCm, 10);
          console.log(cm);`
        }
      ]
    },
    {
      id: 1,
      title: "Higher-Order Function",
      note: [
        {
          text1: `A function that receives another function as an argument or that returns a new function or both is called Higher-order function. Higher-order functions are only possible because of the First-class function.
          
          A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.
          `,
          code1: `
          const greet =  function(name){
            return function(m){
          
                console.log('Hi!! \${name}, \${m}');
            }
        }
        
        const greet_message = greet('ABC');
        greet_message("Welcome To GeeksForGeeks")

        //--------------------------------

          // Custom higher-order function: multiplyBy
          const multiplyBy = (multiplier) => {
            // Returned function takes a number and multiplies it by the multiplier
            return (number) => {
              return number * multiplier;
            };
          };
          
          // Create custom multiplier functions
          const multiplyByTwo = multiplyBy(2);
          const multiplyByFive = multiplyBy(5);
          
          // Use custom multiplier functions
          console.log(multiplyByTwo(3));   // Output: 6 (3 * 2)
          console.log(multiplyByFive(4));  // Output: 20 (4 * 5)
          `
        },
      ]
    },
    {
      id: 1,
      title: "pure functions",
      note: [
        {
          text1: `A pure function is a function that always returns the same output given a specific input.
            
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
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "Immediately Invoked Function Expression (IIFE):",
      note: [
        {
          text1: `An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
            
          An Immediately Invoked Function Expression (IIFE) is a common JavaScript design pattern used to create a private scope for variables. It involves defining and invoking a function expression immediately after its creation. The primary purpose of an IIFE is to encapsulate variables within a local scope, preventing them from polluting the global scope.
          
          The basic syntax of an IIFE looks like this:`,
          code1: `(function() {
            // code inside this function is executed immediately
          })();`
        },
        {
          text1: `Let's break down the components of this pattern:

          <b>Function Expression:</b>
          
          (function() { /* code */ }) is a function expression enclosed in parentheses. The parentheses around the function declaration are necessary to distinguish it from a function declaration statement.

          <b>Invocation (()):</b>
          The function is immediately invoked by adding an extra set of parentheses (function() { /* code */ })(). This causes the function to execute immediately after its definition.
          Use Cases:
          Encapsulation and Avoiding Global Scope Pollution:
          
          Variables declared inside an IIFE are scoped to the function, preventing them from leaking into the global scope.`,
          code1: `(function() {
            var localVar = "I am local to the IIFE";
            console.log(localVar);
          })();`
        },
        {
          text1: `// The following would throw an error because localVar is not defined in the global scope
          // console.log(localVar);
          Creating Private Variables:
          
          IIFE can be used to create private variables that are accessible only within the function scope.`,
          code1: `var counter = (function() {
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
          console.log(counter.getCount()); // 1`
        },
        {
          text1: `In this example, count is a private variable that can only be accessed and modified through the returned object's methods.

          <b>Module Pattern:</b>
          
          IIFE is often used in the module pattern, where you can create self-contained modules with private state and expose only the necessary functionalities.`,
          code1: `var module = (function() {
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
          module.publicFunction();`
        },
        {
          text1: `Here, privateVar and privateFunction are encapsulated within the module, and only the public interface is exposed.

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
          
          <i>If you use a code bundler tool to concatenate code from both files into a single file, without the semicolon (;) the concatenated JavaScript code will cause a syntax error.</i>
          
          <b>Advantages and Use Cases</b>
          <b>1. Encapsulation</b>
IIFE provides encapsulation, allowing you to create private scopes for variables and functions. This prevents variable conflicts and unintended modifications of data in the global scope. Encapsulation is crucial in larger applications and when working with multiple libraries.

<b>2. Avoiding Global Pollution</b>
By encapsulating code within IIFE, you avoid polluting the global namespace. This is particularly important when you want to minimize naming clashes with other scripts or libraries in your project. It keeps your code modular and self-contained.

<b>3. Immediate Execution</b>
IIFE executes code immediately after declaration. This feature is beneficial when you need to perform initialization tasks, configure settings, or kickstart an application. It ensures that your code runs exactly when and where you intend.

<b>4. Data Privacy</b>
IIFE allows you to create closures, which help maintain data privacy. You can hide variables and functions inside an IIFE, exposing only what's necessary. This concept is fundamental to the Module Pattern, a widely-used design pattern in JavaScript.

Real-World Scenarios for IIFE
<b>1. Isolating Code</b>
When integrating third-party scripts or libraries, you can wrap them in an IIFE to isolate their functionality and avoid conflicts with your code.
          `,
          code1: `(function(){
            Third party library code here
        })()`
        },
        {
          text1: `<b>2. Reducing Global Variables</b>
          To minimize the number of global variables in your application, you can use IIFE to define modules or components, exposing only a limited interface to the global scope.`,
          code1: `var module = (function() {
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
          })();`
        },
        {
          text1: `<b>3. Managing Initialization</b>
          IIFE is useful for initializing your application by configuring settings, setting up event listeners, or bootstrapping the application.`,
          code1: `
          // Module Pattern
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
            
            
//             In this example, we use IIFE to create a Calculator module with private data and exposed methods.

// Configuring Settings

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
            `
        },
        {
          text1: `<b>Named vs. Anonymous IIFE and Their Distinctions:</b>
          <b>Named IIFE:</b>
          - Named IIFE functions have a unique identifier, making it easier to identify them in stack traces and debugging tools.
          - They can be called recursively, allowing the function to reference itself.
          - Naming IIFE can improve code self-documentation by giving it a meaningful name.
          (function ThisIsName(){
              Named IIFE
          })()
          
          <b>Anonymous IIFE:</b>
          - Anonymous IIFE functions are more concise and often preferred for short-lived utility functions.
          - They are generally used when you don't need to reference the function elsewhere in your code.
          - Anonymous IIFE is suitable for encapsulating code that doesn't require a name.
          
          (function(){
              Anonymous
          })()`,
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
      title: "arrow functions:",
      note: [
        {
          text1: `Arrow functions are a concise way to write function expressions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a more compact syntax compared to traditional function expressions. Arrow functions are particularly useful for short, anonymous functions and for handling the scoping of the this keyword.`,
          code1: `
          // Basic Syntax:
          
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
          };`
        },
        {
          text1: `// If the function body has only one statement, curly braces can be omitted
          const func4 = () => console.log("Hello, world!");
          Return Values:
          If the function body consists of a single expression, and you want to implicitly return its result, you can omit the curly braces and the return keyword:
          
          Copy code
          const add = (a, b) => a + b;
          console.log(add(2, 3)); // 5
          
          
          <b>this Binding:</b>
Arrow functions do not have their own this context. Instead, they inherit the this value from the enclosing scope (lexical scoping). This behavior is different from regular functions, which have their own this context.
         
Understanding <b>this</b> in javascript with arrow functions
Published Feb 02, 2018Last updated Jul 03, 2019
This post is meant as second part of Understanding <b>This</b> in javascript.

We will go through the same examples, but we will use arrow functions instead to compare the outputs.

The motivation of this second post about the scope is, despite arrow functions are a powerful addition to ES6, they must not be misused or abused.

Default <b>this</b> context
Arrow functions do not bind their own this, instead, they inherit the one from the parent scope, which is called <b>lexical scoping</b>. This makes arrow functions to be a great choice in some scenarios but a very bad one in others

If we look at the first example but using arrow functions
`,
          code1: `// define a function
          const myFunction = () => {
            console.log(this);
          };
          // call it
myFunction();

          `
        },
        {
          text1: `What can we expect this to be?.... exactly, same as with normal functions, window or global object. Same result but not the same reason. With normal functions the scoped is bound to the global one by default, arrows functions, as I said before, do not have their own this but they inherit it from the parent scope, in this case the global one.

          What would happen if we add "use strict"? Nothing, it will be the same result, since the scope comes from the parent one.`,
          code1: `
          // Arrow functions as methods
          const myObject = {
            myMethod: () => {
              console.log(this);
            }
          };`
        },
        {
          text1: `What about now?

          In this case, one could say, that it really depends on how the method is called, same as normal functions, but that's not the case here, let's see...
          
          myObject.myMethod() // this === window or global object
          
          const myMethod = myObject.myMethod;
          myMethod() // this === window or global object
          Weird right? Well, remember, arrow functions don't bind their own scope, but inherit it from the parent one, which in this case is window or the global object.
          
          Let's change the example a little bit`,
          code1: `const myObject = {
            myArrowFunction: null,
            myMethod: function () {
              this.myArrowFunction = () => { console.log(this) };
            }
          };`
        },
        {
          text1: `We need to call myObject.myMethod() to initialize myObject.myArrowFunction and then let's see what the output would be`,
          code1: `myObject.myMethod() // this === myObject

          myObject.myArrowFunction() // this === myObject
          
          const myArrowFunction = myObject.myArrowFunction;
          myArrowFunction() // this === myObject`
        },
        {
          text1: `Clearer now? When we call myObject.myMethod(), we initialize myObject.myArrowFunction with an arrow function which is inside of the method myMethod, so it will inherit its scope. We can clearly see a perfect use case, closures.

          Explicit, Hard and New binding
          What would happen when we try to bind a scope with any of these techniques?
          
          let's see...`,
          code1: `const myMethod = () => {
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
          new myMethod(); // Uncaught TypeError: myMethod is not a constructor`
        },
        {
          text1: `As you see, it does not matter how we try to bind the scope, it will never work. Also, arrows functions are not constructors so you can not use new with them.

          API calls
          This part is interesting. Arrow functions are a good choice for API calls ( asynchronous code ), only if we use CLOSURES, let's look at this...`,
          code1: `myObject = {
            myMethod: function () {
              helperObject.doSomethingAsync('superCool', () => {
                console.log(this); // this === myObject
              });
            },
          };`
        },
        {
          text1: `This is the perfect example, we ask to do something async, we wait for the answer to do some actions and we don't have to worry about the scope we were working with.

          But what would happen if for any reason we refactor the code and extract that function out in order to be reused, for example?
          
          let's see...`,
          code1: `const reusabledCallback = () => {
            console.log(this); // this === window or global object
          };
          
          myObject = {
            myMethod: function () {
              helperObject.doSomethingAsync('superCool', reusabledCallback);
            },
          };`
        },
        {
          text1: `If we do so, we would be breaking the current working code, and, remember, it doesn't matter how we try to bind the scope, it won't work. So if you decide to do so, you have to use normal functions and bind the scope manually. For 
          example`,
          code1: `const reusabledCallback = function () {
            console.log(this);
          };
          
          myObject = {
            myMethod: function () {
              helperObject.doSomethingAsync('superCool', reusabledCallback.bind(myObject));
            },
          };
          
          //-----------------
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
          `
        },
        {
          text1: `
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
          
          In summary, arrow functions provide a concise syntax for writing functions in JavaScript and are commonly used in modern codebases. They are particularly useful for short, simple functions and for avoiding this binding issues in certain scenarios. However, it's essential to be aware of their behavior and limitations, especially when working with more complex use cases.`,
          code1: `const village = 'wgl'

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
          
          myObject.myMethod();`
        },
        {
          text1: ``,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "Recursive Functions:",
      note: [
        {
          text1: `Recursion is a process of calling itself. A function that calls itself is called a recursive function.
          a function that calls itself until your program achieves the desired result.
          
          Recursion is a process of calling itself. A function that calls itself is called a recursive function.

          The syntax for recursive function is:
`,
          code1: `            function recurse() {
            // function code
            recurse();
            // function code
        }`
        },
        {
          text1: `recurse();
          Here, the recurse() function is a recursive function. It is calling itself inside the function.

          Working of recursion in JavaScript
          A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.

          Once the condition is met, the function stops calling itself. This is called a base condition.

          To prevent infinite recursion, you can use if...else statement (or similar approach) where one branch makes the recursive call, and the other doesn't.

          So, it generally looks like this.`,
          code1: `            function recurse() {
            if(condition) {
                recurse();
            }
            else {
                // stop calling recurse()
            }
        }

        //------------------

        // recurse();
        //     A simple example of a recursive function would be to count down the value to 1.

            // Example 1: Print Numbers:
            
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
            // --------------
            // Output
            // 4
            // 3
            // 2
            // 1
`
        },
        {
          text1: `In the above program, the user passes a number as an argument when calling a function.

          In each iteration, the number value is decreased by 1 and function countDown() is called until the number is positive. Here, newNumber > 0 is the base condition.
          
          This recursive call can be explained in the following steps:
          
          countDown(4) prints 4 and calls countDown(3)
          countDown(3) prints 3 and calls countDown(2)
          countDown(2) prints 2 and calls countDown(1)
          countDown(1) prints 1 and calls countDown(0)
          When the number reaches 0, the base condition is met, and the function is not called anymore.`,
          code1: `
          // Example 2: Find Factorial
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
          
          // Output:
          // The factorial of 3 is 6
          `
        },
        {
          text1: `When you call function factorial() with a positive integer, it will recursively call itself by decreasing the number.

          This process continues until the number becomes 1. Then when the number reaches 0, 1 is returned.
          `,
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
      title: "Iterators",
      note: [
        {
          text1: ` In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.

          In JavaScript, an iterator is an object that provides a way to access the elements of a collection, one at a time, and in a sequential manner. Iterators are used to traverse data structures like arrays, strings, maps, sets, and more. They follow a standard interface with methods like next() that returns the next element in the sequence along with information about whether the iteration is complete.

          The iterator protocol defines how to produce a sequence of values from an object.
          An object becomes an iterator when it implements a next() method.


          Iterator Interface:
          An iterator must adhere to the following interface:

          <b>next() Method:</b>
          The next() method returns an object with two properties:
          value: the next element in the iteration.
          done: a boolean indicating whether the iteration is complete (true when the last element is reached).
          Here's a simple example of creating an iterator for an array:`,
          code1: `const iterableArray = [1, 2, 3, 4, 5];
          const iterator = iterableArray[Symbol.iterator]();

          console.log(iterator.next()); // { value: 1, done: false }
          console.log(iterator.next()); // { value: 2, done: false }
          console.log(iterator.next()); // { value: 3, done: false }
          console.log(iterator.next()); // { value: 4, done: false }
          console.log(iterator.next()); // { value: 5, done: false }
          console.log(iterator.next()); // { value: undefined, done: true }
          Iterables:`
        },
        {
          text1: `An iterable is an object that implements the Symbol.iterator method, which returns an iterator. Iterables can be iterated over using constructs like for...of loops.

          Here's an example:`,
          code1: `            const iterableObject = {
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
            }`
        },
        {
          text1: `            In this example, iterableObject is an iterable object with a values array and a custom iterator.

          Built-in Iterables:
          JavaScript has several built-in iterables, and many data structures are iterable by default, including:`,
          code1: `            Arrays: Array.prototype[Symbol.iterator]
          Strings: String.prototype[Symbol.iterator]
          Maps: Map.prototype[Symbol.iterator]
          Sets: Set.prototype[Symbol.iterator]
          Typed Arrays: TypedArray.prototype[Symbol.iterator]
          NodeList: NodeList.prototype[Symbol.iterator]`
        },
        {
          text1: ` <b>Iteration Protocols:</b>
          JavaScript follows the iterable and iterator protocols, allowing developers to create custom iterable objects and iterators. The iterable protocol requires the implementation of the Symbol.iterator method, while the iterator protocol requires the implementation of the next() method.
          `,
          code1: `
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
            `
        },
        {
          text1: `This example demonstrates creating a custom iterable object with its own iterator.

          Understanding iterators and iterables is crucial for working with collections in JavaScript and is a fundamental concept for mastering features like for...of loops, destructuring, and the spread/rest operator.`,
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
      title: "generators",
      note: [
        {
          text1: ` In JavaScript, generators are a special type of function that allows you to control the flow of execution. Unlike regular functions, generators can be paused and resumed, enabling a more flexible and cooperative approach to handling asynchronous code and iterating over sequences of values.

          Here are some key characteristics of generators:

          Syntax:
          Generators are declared using the function* syntax. Inside a generator function, you use the yield keyword to produce a value and pause the generator's execution until the next value is requested.`,
          code1: `          function* myGenerator() {
            yield 1;
            yield 2;
            yield 3;
        }`
        },
        {
          text1: ` 
          <b>Iterator:</b>
          Generators automatically implement the iterable protocol, which means you can use them with for...of loops and other constructs that work with iterables.`,
          code1: `          const gen = myGenerator();
          for (const value of gen) {
              console.log(value); // Outputs 1, 2, 3
          }
`
        },
        {
          text1: `         
          <b>Control Flow:</b>
          The yield keyword is used to pause the generator and return a value to the caller. When the generator is later resumed, it continues from where it was paused.`,
          code1: `          function* countdown() {
            yield 3;
            yield 2;
            yield 1;
        }

        const iterator = countdown();
        console.log(iterator.next().value); // Outputs 3
        console.log(iterator.next().value); // Outputs 2`
        },
        {
          text1: `<b>Asynchronous Programming:</b>
          Generators are often used in conjunction with asynchronous code to simplify the handling of asynchronous operations. Libraries like co.js and frameworks like Koa.js leverage generators for writing cleaner asynchronous code.`,
          code1: `          function fetchData() {
            return new Promise(resolve => setTimeout(() => resolve('Data'), 1000));
        }

        function* fetchDataGenerator() {
            const data = yield fetchData();
            console.log(data); // Outputs 'Data'
        }

        const generator = fetchDataGenerator();
        const promise = generator.next().value;

        promise.then(result => generator.next(result));`
        },
        {
          text1: ` Generators are a powerful tool in JavaScript, especially for dealing with asynchronous programming and creating iterable sequences. They provide a way to write code that looks synchronous while still allowing for non-blocking operations.

          <span style="color:red">Encountering yield and yield* </span>

          <b>yield:</b> pauses the generator execution and returns the value of the expression which is being written after the yield keyword.
          yield*: it iterates over the operand and returns each value until done is true.`,
          code1: `        const arr = ['a', 'b', 'c']; 
            
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
        4`
        },
        {
          text1: `Limitation of Generators: You can't yield inside a callback in a generator.
          Example : In this example, we will try to give yield inside a generator function.`,
          code1: ` 
          function* generator() { 
            ['a', 'b', 'c'].forEach(value => yield value)  
            // This will give syntax error 
        }
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
      title: "closure:",
      note: [
        {
          text1: `Global variables can be made local (private) with closures.
          Closure in JavaScript is a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope of a function.

In JavaScript, a closure is a feature that allows a function to remember and access its lexical scope even when that function is executed outside that lexical scope. In simpler terms, a closure gives you access to an outer function's scope from an inner function even after the outer function has finished executing.

A closure is created when a function retains access to its lexical scope even when the function is executed outside that scope. This characteristic allows functions to maintain a private state and preserve variable values without exposing them globally, making closures particularly useful for data encapsulation.
Exactly! One of the powerful features of closures in JavaScript is their ability to encapsulate and hide variables from the global scope, making them private.

A closure is a function that has access to the variables and parameters of its outer function, even after the outer function has returned. This is possible because the inner function retains a reference to the scope of the outer function, even after the outer function has been executed.

          In other words, closure is created when a child function keep the environment of the parent scope even after the parent function has already executed 

         <u> Variables created without a declaration keyword <b>(var, let, or const)</b> are always global, even if they are created inside a function.</u>
          In JavaScript, a closure is created when a function is defined within another function, allowing the inner function to access variables from the outer (enclosing) function's scope. Closures have access to the outer function's variables, parameters, and even the outer function's this context. This provides a way to create private variables, maintain state, and create functions with behavior that depends on their lexical environment.

        
          A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the <b>lexical environment</b>). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

          <b>Understanding Closures</b>
A closure occurs when a function retains access to the variables and parameters of its outer function even after the outer function has finished execution. This means that the inner function can still access and modify variables that were in its surrounding scope at the time the closure was created.

 Here are a few examples of closures in JavaScript:`,
          code1: `function outerFunction() {
            var outerVariable = 'I am from outerFunction';
            
            function innerFunction() {
              console.log(outerVariable); // innerFunction has access to outerVariable
            }
            
            return innerFunction; // Return the inner function
          }
          
          var inner = outerFunction(); // inner now holds a reference to innerFunction
          inner(); // When inner is executed, it still has access to outerVariable through closure
          `
        },
        {
          text1: ` In above example, <b>innerFunction</b> has access to the <b>outerVariable</b> even though it's declared in the <b>outerFunction</b>, and <b>outerFunction</b> has already finished executing. This is possible because of closure.

          <b>Lexical Scope:</b> In JavaScript, variables defined outside of a function are accessible inside the function. This is called lexical scope.
          
          <b>Inner Functions:</b> Functions defined inside another function are called inner functions. These inner functions have access to the variables declared in the outer function, as well as to the global scope.
          
          <b>Closure:</b> When an inner function is returned from the outer function and survives beyond the life of the outer function, it maintains access to the variables and parameters of that outer function, even though the outer function has completed execution. This phenomenon is called closure.`,
          code1: `// Example 2: Private Variables
function counter() {
  let count = 0;  // This is the "private" variable

  return function() {
    count++;  // The inner function has access to \`count\`
    console.log(count);  // Prints the updated value of \`count\`
  };
}

const increment = counter();  // \`increment\` is a reference to the inner function
increment();  // Outputs: 1
increment();  // Outputs: 2

          // Here, the inner function within counter forms a closure, and count is a private variable accessible only within that closure. This creates a way to have private state in JavaScript.
          
    //      **** How It Works: ****
    // *** Outer Function (counter): ***
    //     The "counter" function defines a variable "count" initialized to 0.
    //     It returns an inner function that increments "count" and prints its value.
    // *** The Closure: ***
    //     The inner function returned by counter() forms a "closure" because it "remembers" the environment in which it was created. In this case, it "remembers" the variable "count" from the outer counter() function.
    // *** Calling increment(): ***
    //     When increment() is called for the first time, it increases "count" from 0 to 1 and logs 1 to the console.
    //     When increment() is called a second time, "count" has persisted from the previous call (because of the closure) and is now 1. It increments it to 2 and logs 2 to the console.


          //--------------------
          // Example 3: Function Factory
          function createMultiplier(factor) {
              return function(number) {
                  return number * factor;
              };
          }
          const double = createMultiplier(2);
          console.log(double(5)); // Outputs: 10
          // In this example, createMultiplier is a function factory that generates closure functions. The closure function (double) created with a specific factor retains access to that factor when invoked later.
          

          //----------------
          // Example 4: Event Handling
          function createButtonHandler(buttonId) {
              const button = document.getElementById(buttonId);
          
              button.addEventListener('click', function() {
                  console.log('Button \${buttonId} clicked');
              });
          }
          createButtonHandler('btn1');
          createButtonHandler('btn2');
          // In this example, createButtonHandler is a function that creates event handlers for different buttons. Each handler forms a closure, capturing the buttonId parameter and referencing the button variable from the outer function.
          

          //---------------
          // Example 5: Closure with Parameters
          function multiplier(factor) {
              return function (number) {
                  return factor * number;
              };
          }
          
          const multiplyByTwo = multiplier(2);
          console.log(multiplyByTwo(5)); // Outputs: 10
          // Here, multiplier returns a function that can be used to multiply a number by a specified factor. The inner function retains access to the factor parameter of its outer function, creating a closure.
          
          //---------------
          // Example 6: Counter using Closure
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
          // The createCounter function returns a closure that increments and returns a counter value. The inner function retains access to the count variable, allowing it to persist across multiple calls.
          

          //----------------
          // Example 7: Private Variables
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
          //  Here, createPerson returns an object with methods that have access to both name and age, creating private variables. The closure allows these variables to be accessed and modified only through the methods provided.
`
        },
        {
          text1: `<b>Key Things to Consider In Below example</b>:
    <b>setTimeout Delays</b>: The <b>setTimeout()</b> function schedules the callback to run after a certain delay, and it does not block the rest of the code execution. This means that the loop will <b>complete</b> first, and then the callbacks (for <b>setTimeout</b>) will be executed <b>after the loop finishes</b>.

    <b>Loop with var</b>: When you use <b>var</b>, the variable <b>i</b> is shared across all iterations of the loop. However, the callbacks inside <b>setTimeout()</b> are scheduled for later execution. By the time they are executed, the value of <b>i</b> has already been updated to <b>4</b> in the last iteration, and each <b>setTimeout</b> callback will reference this <b>final value</b> of <b>i</b>.
    
    <b>Why It Might Work in Your Case</b>:
Your code works as expected (producing 1 2 3 4) because the setTimeout() callbacks are using the <b>inc argument</b>, which correctly captures the value of <b>i</b> at the time the <b>clo(i)</b> function was called. In this case, the value of <b>inc</b> (which is equal to <b>i</b> when passed to <b>clo()</b>) remains <b>stably bound</b> within each <b>closure</b>, and <b>does not reference <i>i</i> after the loop ends</b>.

<u>So, the output order becomes</u>:
    After the first second, 1 is printed.
    After the second second, 2 is printed.
    After the third second, 3 is printed.
    After the fourth second, 4 is printed.
    `,
          code1: `for(var i=0; i<=3; i++){
    function clo(inc){
        setTimeout(function(){
        console.log(inc)
    }, inc * 1000)
    }
clo(i)
}
          `
        },
        {
          text1: `Closures in JavaScript provide a powerful mechanism for creating modular and encapsulated code, enabling the creation of private variables, maintaining state, and implementing various programming patterns.
          
          In this example, we would store an anonymous function at every index of an array. 
          
          Example 1: This example shows the basic use of closure.`,
          code1: ` 
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
          
          // Did you guess the right answer? In the above code, we have created four closures that point to the variable i which is the local variable to the function outer. Closure doesn't remember the value of the variable it only points to the variable or stores the reference of the variable and hence, returns the current value. In the above code when we try to update the value it gets reflected all because the closure stores the reference. 
          
          4
          4
          4
          4

          //------------
          // Let's see the correct way to write the above code so as to get different values of i at different indexes. 
          
          // Example 2: This example shows the basic use of closure
          
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
          Output: 
          // In the above code we are updating the argument of the function create_Closure with every call. Hence, we get different values of i at different indexes.
          
          0
          1
          2
          3
          // Note: It may be slightly difficult to get the concept of closure at once but try experimenting with closure in different scenarios like for creating getter/setter, callbacks, and so on. `
        },
        {
          text1: `<span style="color:#0987ac; font-size:22px;">use case of Closure </span>
          In this code snippet, you're using <b>setTimeout</b> inside a loop to create three alerts, each displaying the value of i. However, due to the asynchronous nature of <b>setTimeout</b>, the alerts won't display as you might expect.

          Here's what happens:
          
          The loop starts, and i is initialized to 0.
          The first <b>setTimeout</b> is called with a delay of 1000 milliseconds. Since i is 0, the alert function is created to alert 0.
          The loop continues, and i becomes 1.
          The second <b>setTimeout</b> is called with a delay of 1001 milliseconds. Now, the alert function captures the current value of i, which is 1.
          The loop continues, and i becomes 2.
          The third <b>setTimeout</b> is called with a delay of 1002 milliseconds. Again, the alert function captures the current value of i, which is 2.
          By the time the alerts are triggered (after the specified delays), the value of i has already been updated to 3 due to the loop completing. Therefore, all three alerts display 3.`,
          code1: `for (var i = 0; i < 3; i++) {
            setTimeout(function() { alert(i); }, 1000 + i);
          }
          
          // If you want each alert to display the corresponding value of i (0, 1, 2) after the specified delays, you need to create a closure to capture the current value of i at each iteration. You can achieve this by using an IIFE (Immediately Invoked Function Expression) like this:

          for (var i = 0; i < 3; i++) {
            setTimeout(function(i_local) { 
              return function() { console.log(i_local); } 
            }(i), 1000 + i);
          }
          
          // -- or --
          
          for (var i = 0; i < 3; i++) {
            (function (i) {
              setTimeout(function() { console.log(i); }, 1000 + i);
            })(i);
          }
          `,
        },
        {
          text1: `<span style="color:#0987ac; font-size:22px;">Encapsulation and data privacy</span>
          Encapsulation involves bundling data and methods that operate on that data within a single unit, typically a class or a function. It promotes the idea of hiding the internal state of an object and exposing only the necessary functionalities to interact with that object.

          Closures allow you to create private variables and functions within a scope. This means that you can encapsulate certain data and functionality, preventing them from being accessed or modified from outside the closure. This is particularly useful when you want to hide implementation details and expose only a limited interface to other parts of your code.
        
          In Below example, we have a <b>createBook</b> function that takes a <b>title</b> and an <b>author</b> as arguments and returns an object with four methods: <b>getTitle</b>, <b>getAuthor</b>, <b>setTitle</b>, and <b>setAuthor</b>. These methods allow us to retrieve or update the values of the <b>_title</b> and <b>_author</b> variables, which are private to the <b>createBook</b> function and not accessible outside of it.
          `,
          code1: `function createBook(title, author) {
            let _title = title; // Private variable
            let _author = author; // Private variable
            return {
              getTitle: function() {
                return _title;
              },
              getAuthor: function() {
                return _author;
              },
              setTitle: function(newTitle) {
                _title = newTitle;
              },
              setAuthor: function(newAuthor) {
                _author = newAuthor;
              }
            }
          }
          
          const book1 = createBook('Clean Code', 'Robert Cecil Martin');
          console.log(book1.getTitle()); // 'Clean Code'
          console.log(book1.getAuthor()); // 'Robert Cecil Martin'
          book1.setTitle('Code Complete');
          console.log(book1.getTitle()); // 'Code Complete'`,
        },
        {
          text1: `<span style="color:#0987ac; font-size:22px;">Persistent state / State Retention</span>
          Closures allow functions to retain their state even after they have finished executing. This means that variables inside a closure will still be accessible when the closure is invoked later on. This can be particularly useful when dealing with event handlers or asynchronous operations.          
          <u>Ex: 1---</u>
          In Below example, the <b>createTimer</b> function creates a closure that increments the <b>seconds</b> variable every second using <b>setInterval</b>. The closure retains the value of <b>seconds</b> even after the <b>createTimer</b> function has finished executing. This allows the timer to continue running and displaying the elapsed time.
          <u>Ex: 2---</u>
          In Below example, the <b>createCounter</b> function returns a function that increments and returns the value of the <b>count</b> variable each time it is called. Because the returned function is a closure, it keeps access to the <b>count</b> variable even after the <b>createCounter</b> function has returned, allowing it to maintain states across multiple function calls.
          `,
          code1: ` // Ex: 1---
          function createTimer() {
            let seconds = 0;
          
            setInterval(() => {
              seconds++;
              console.log('Elapsed time: \${seconds} seconds');
            }, 1000);
          }
          
          const timer = createTimer(); // Starts the timer

          // Ex: 2---
          function createCounter() {
            let count = 0;
            return function() {
              count += 1;
              return count;
            }
          }
          
          const counter1 = createCounter();
          const counter2 = createCounter();
          const counter3 = createCounter();
          
          console.log("counter1", counter1()); // 1
          console.log("counter1", counter1()); // 2
          console.log("counter2", counter2()); // 1
          console.log("counter2", counter2()); // 2
          console.log("counter3", counter3()); // 1
          console.log("counter3", counter3()); // 2
          console.log("counter3", counter3()); // 3`,
        },
        {
          text1: `<span style="color:#0987ac; font-size:22px;">Memoization </span> 
          Closures can also be used for memoization, which is a technique to optimize the performance of functions by caching their results. By caching the results of expensive calculations, you can avoid redundant computations and improve the overall performance of your code.
          
          Memorization is a technique that involves storing the results of expensive or time-consuming calculations in a cache or lookup table so that they can be quickly retrieved the next time the same calculation is needed. It can greatly improve the performance of a function or algorithm, especially if it is called multiple times with the same arguments.
          
          // Ex : 1--
          In the example above, the <b>memoizedAdd</b> function returns an inner function that calculates the sum of two numbers. The results of previous calculations are stored in the <b>cache</b> object. Before performing a new calculation, the inner function checks if the result for the given input parameters already exists in the cache. If it does, it returns the cached result instead of recomputing it.
          `,
          code1: `
          // Ex: 1--
          function memoizedAdd() {
            const cache = {};
            
            return function(x, y) {
              const key = '\${x}-\${y}';
              
              if (cache[key]) {
                return cache[key];
              }
              
              const result = x + y;
              cache[key] = result;
              
              return result;
            }
          }
          
          const add = memoizedAdd();
          console.log(add(2, 3)); // Output: 5
          console.log(add(2, 3)); // Output: 5 (cached result)

          // Ex: 2--
          function createFibonacciGenerator() {
            const cache = {};
          
            return function fibonacci(n) {
              if (n in cache) {
                return cache[n];
              } else {
                let a = 0, b = 1, c;
                for (let i = 0; i < n; i++) {
                  c = a + b;
                  a = b;
                  b = c;
                }
                cache[n] = a;
                return a;
              }
            }
          }
          
          const fibonacciGenerator = createFibonacciGenerator();
          console.log(fibonacciGenerator(10)); // 55
          console.log(fibonacciGenerator(10)); // 55 (cached result)

          `,
        },
        {
          text1: `<span style="color:#0987ac; font-size:22px;">Event handlers </span> 
          Closures are commonly used in event handlers to preserve the state of variables. When you attach an event handler to an HTML element, you often need to access the element's properties or other variables within the event handler.  Closures allow you to do this by capturing the variables in the lexical environment at the time the event handler is defined.`,
          code1: `
          function createButton() {
            const button = document.createElement('button');
            button.innerText = 'Click me';
            
            let count = 0;
            
            button.addEventListener('click', function() {
              count++;
              console.log('Button clicked \${count} times');
            });
            
            return button;
          }
          
          const button = createButton();
          document.body.appendChild(button);
          `
        },
        {
          text1: `<span style="color:#0987ac; font-size:22px;">asynchronous operations </span>
          JavaScript closures are not only useful for encapsulating data and creating private variables, but they are also powerful tools for handling asynchronous operations. In this section, we will explore how closures can be used to manage asynchronous tasks in JavaScript.

          When working with asynchronous operations, such as making API requests or fetching data from a database, it is common to encounter situations where you need to handle the result of the operation once it completes.  Closures can help you manage this by capturing the state of variables at the time the asynchronous operation is initiated.
          `,
          code1: `function fetchData(url) {
            return new Promise((resolve, reject) => {
              // Simulating an asynchronous API request
              setTimeout(() => {
                const data = { name: "John", age: 30 };
                resolve(data);
              }, 2000);
            });
          }
          
          function processData() {
            // Variable defined outside the closure
            let processedData = null;
          
            fetchData("https://api.example.com/data")
              .then((data) => {
                processedData = data;
                // Closure captures the state of processedData
                console.log("Data processed:", processedData);
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          }
          
          processData();`
        }
      ]
    },
    {
      id: 1,
      title: "anonymous:",
      note: [
        {
          text1: `It is a function that does not have any name associated with it. (or) An anonymous function is a function without a name
          An anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value. An anonymous function can also have multiple arguments, but only one expression.
          
          Anonymous Function
          It is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

          An anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value. An anonymous function can also have multiple arguments, but only one expression.`,
          code1: `            
          // The below-enlightened syntax illustrates the declaration of an anonymous function using the normal declaration:

          function() {
              Function Body
          }

          // We may also declare an anonymous function using the arrow function technique which is shown below:

          ( () => {
              Function Body...
          } )();
          
          //--------------

          let show = function() {
          console.log('Anonymous function');
          };
          show();

          // In this example, the anonymous function has no name between the function keyword and parentheses ().
          
          // Because we need to call the anonymous function later, we assign the anonymous function to the show variable.

          // Since the whole assignment of the anonymous function to the show variable makes a valid expression, you don't need to wrap the anonymous function inside the parentheses ().
          `
        },
      ]
    },
    {
      id: 1,
      title: "call() method",
      note: [
        {
          text1: `The call() method calls a function by passing this and specified values as arguments.

          The syntax of the call() method is:
    
          func.call(thisArg, arg1, ... argN)
   
          The call() method can take two parameters:
    
          <b>thisArg</b> - The thisArg is the object that the this object references inside the function func (or) The value to be passed as the this parameter when the function is called..
          <b>arg1</b>, ... argN (optional) - Arguments for the function func.

          In JavaScript, the call() method is a built-in method that is used to invoke a function with a specified this value and individual arguments provided as separate arguments. It allows you to call a function and explicitly set the context (the value of this) for that function, as well as pass arguments one by one.`,
          code1: `function sayHello() {
            console.log('Hello, \${this.name}!');
        }
  
        const person = {
            name: 'John'
        };
  
        sayHello.call(person); // Outputs: "Hello, John!"
        // In this example, sayHello.call(person) calls the 'sayHello' function with person as the value of this, so within the function, this.name refers to John.
        
        //----------

        // You can also use call() to borrow methods from one object and apply them to another:

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

      // In this example, person1.getFullName.call(person2) borrows the 'getFullName' method from person1 and applies it to person2, effectively setting this inside 'getFullName' to refer to person2.
        `
        },
        {
          text1: `The call() method is one of several methods (including apply() and bind()) that allow you to control the value of this when invoking functions in JavaScript.
          Using the JavaScript call() method for function borrowing
          `,
          code1: ` 
          // Using the JavaScript call() method for function borrowing
          
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
          
    
          // Ex :2
          // -----
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

    
          // Ex :3
          //-------
    
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
          console.log(ob.maFun())`
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
      title: "apply() method",
      note: [
        {
          text1: `The apply() method calls the specified function with a given <b>'this</b> value, and arguments provided as an array  
          or  
          The apply() method invokes a function with a given 'this' value and arguments provided as an array.
    
          The call() method takes arguments separately.
          The apply() method takes arguments as an array.
    
          The apply() method in JavaScript is a built-in method that allows you to call a function with a specified this value and an array or array-like object of arguments. It is similar to the call() method, but instead of passing arguments one by one, you can pass them as an array.
    
          => Using the apply() method to append an array to another
          => The apply() method allows you to append elements of an array to another:

          In this example, the apply() method modifies the original array arr. Note that the Array.prototype.concat() method also provides the same result except that it returns the new array instead of modifying the original array.
          
          The syntax for the apply() method is as follows:

          <span style="color:red"> functionName.apply(thisValue, [arg1, arg2, ...]);</span>

          <b>functionName</b>: The function to be called.
          <b>thisValue</b>: The value to be passed as the this parameter when the function is called.
          <b>[arg1, arg2, ...]</b>: An array or array-like object containing the arguments to be passed to the function.
          `,
          code1: `function sayHello(greeting, punctuation) {
            console.log('\${greeting}, \${this.name} \${punctuation}');
        }
  
        const person = {
            name: 'John'
        };
  
        sayHello.apply(person, ['Hi', '!']); // Outputs: "Hi, John!"
        // In this example, sayHello.apply(person, ['Hi', '!']) calls the sayHello function with person as the value of this and the array ['Hi', '!'] as the arguments, resulting in the message "Hi, John!" being logged to the console.`
        },
        {
          text1: `apply() is particularly useful when you have a function that accepts a variable number of arguments or when you want to pass an array of arguments dynamically.

          It's worth noting that in modern JavaScript, you can often achieve the same result using the spread operator (...) to pass an array of arguments directly to a function:
 
          <span style="color:red">sayHello.call(person, ...['Hi', '!']);</span>
          Both <b>apply()</b> and <b>call()</b> are similar, but the choice between them depends on how the arguments are structured: 
          apply() takes an array, while call() takes individual arguments. If you have an array of arguments, apply() can be more convenient.`,
          code1: `const person = {
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
    
          // Ex:
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

          // ----------------------->
    
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
    
          // ----------------->
    
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
    `
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
      title: "Bind() method",
      note: [
        {
          text1: `Bind() allows you to create a new function from an existing function, change the new function's this context, and provide any arguments you want the new function to be called with. The arguments provided to bind will precede any arguments that are passed to the new function when it is called.

          does not immediately invoke the function
    
          returns a new function that can be invoked later in the code, while maintaining the desired context binding — this is useful for passing functions into other functions, like setTimeout(), which will invoke it later and won't necessarily bind the invoked function to the correct object without being coerced
    
          first parameter is the context object
    
          all other parameters are individually listed, like with call
    
          In JavaScript, the <b>bind()</b> method is used to create a new function that, when called, has its <b>this</b> keyword set to a specific value. It allows you to explicitly specify the value of <b>this</b> when a function is executed. The <b>bind()</b> method does not invoke the function immediately; instead, it returns a new function with the specified <b>this</b> value and, optionally, initial arguments.
    
          // The bind() method creates a new function, when invoked, has the this sets to a provided value.
          // The bind() method allows an object to borrow a method from another object without making a copy of that method. This is known as function borrowing in JavaScript.`,
          code1: `const originalFunction = function() {
            console.log(this.name);
          };

          const obj = { name: 'Example' };

          // Using bind to create a new function with a specific 'this' value
          const boundFunction = originalFunction.bind(obj);

          // Calling the new function
          boundFunction(); // Output: Example`
        },
        {
          text1: `In this example, originalFunction is a simple function that logs the name property of whatever object it is called on. We then use bind() to create a new function boundFunction where this is explicitly set to the obj object. When we call boundFunction(), it prints the name property of obj.

          bind() is particularly useful in scenarios where you want to ensure that a function is always called with a specific context, regardless of how it is later used or referenced.

          Note: The bind() method was introduced in ECMAScript 5 (ES5), so it may not be available in very old browsers. If you need to support such browsers, you may want to consider using a polyfill or alternative methods for achieving similar behavior.`,
          code1: `let person = {
            name: 'John Doe',
            getName: function() {
              console.log(this)
              console.log(this.name);
            }
          };
          // person.getName()
          const f = person.getName.bind(person)
          setTimeout(f, 2000)
          
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
          `
        },
        {
          text1: ``,
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
      title: "Callback",
      note: [
        {
          text1: `<a href="https://javascript.info/callbacks" target="_blank">callbacks</a>
          In JavaScript, a callback function is a function that is passed as an argument to another function and is executed after the completion of some asynchronous operation or at a later time. 
      
          Callbacks are a fundamental concept in JavaScript, especially in scenarios like event handling, asynchronous operations, and dealing with functions that take time to complete, such as fetching data from a server.
    
          We need callback functions because many JavaScript actions are asynchronous, which means they don't really stop the program (or a function) from running until they're completed, as you're probably used to. Instead, it will execute in the background while the rest of the code runs.
    
          when we have a function that might take a long time to complete, oftentimes we provide a callback function. This function encapsulates the code we would like to run at a later time when the blocking action (e.g a network call) has been resolved. This allows us to return control to the JS engine and defer the rest of the execution until after the call-stack has been cleared. This is the concept of asynchrony in JavaScript.
          
          Here's a simple example of a callback function:`,
          code1: `function fetchData(callback) {
            // Simulating an asynchronous operation (e.g., fetching data from a server)
            setTimeout(function() {
              const data = "This is the fetched data";
              // Calling the callback function and passing the fetched data as an argument
              callback(data);
            }, 2000); // Simulating a 2-second delay
          }
          
          function handleData(data) {
            console.log("Handling data:", data);
          }`
        },
        {
          text1: `// Calling fetchData and passing handleData as a callback function
          fetchData(handleData);
          In this example, fetchData is a function that simulates an asynchronous operation with a 2-second delay. It takes a callback function (handleData) as an argument and calls it with the fetched data after the operation is complete.
          
          Callback functions are crucial in scenarios where you want to ensure that certain code runs only after a specific operation is finished, especially when dealing with asynchronous tasks like AJAX requests, file I/O, or timers.
          
          It's worth noting that with the introduction of Promises and async/await in JavaScript, there are alternative ways to handle asynchronous operations that often result in more readable and maintainable code. However, understanding callbacks remains important as they are still widely used in JavaScript development.`,
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
      section: "Array Methods",
      title: "push()",
      note: [
        {
          text1: `The push() method adds zero or more elements to the end of the array.`,
          code1: `let city = ["New York", "Madrid", "Kathmandu"];

          // add "London" to the array
          city.push("London");
          console.log(city);
          // Output: [ 'New York', 'Madrid', 'Kathmandu', 'London' ]
          
          // The syntax of the push() method is:
          arr.push(element1, element2, ..., elementN)

          // push() Parameters
          // The push() method takes in an arbitrary number of elements to add to the array.`
        },
      ]
    },
    {
      id: 1,
      title: "unshift()",
      note: [
        {
          text1: `In JavaScript, you use the <b>unshift()</b> method to add one or more elements to the beginning of an array and it returns the array's length after the new elements have been added.

          If we have an array of countries and want to add a country before <b>Nigeria</b> which is currently at the first index 0, we can do so with the <b>unshift()</b> method, as shown below:`,
          code1: `const countries = ["Nigeria", "Ghana", "Rwanda"];
          countries.unshift("Kenya");
          console.log(countries); // ["Kenya","Nigeria","Ghana","Rwanda"]
          
          // As we said, we can also add more than one element using the unshift() method:
          
          const countries2 = ["Nigeria", "Ghana", "Rwanda"];
          countries2.unshift("South Africa", "Mali", "Kenya");
          console.log(countries2); // ["South Africa","Mali","Kenya","Nigeria","Ghana","Rwanda"]
          
          // In our explanation of the unshift() method, we also stated that it returns the length of the new array, which is true:
          
          const countries3 = ["Nigeria", "Ghana", "Rwanda"];
          let countriesLength = countries3.unshift("South Africa", "Mali", "Kenya");
          console.log(countriesLength); // 6`
        },
      ]
    },
    {
      id: 1,
      title: "pop()",
      note: [
        {
          text1: `The pop() method removes the last element from an array and returns that element.`,
          code1: `let cities = ["Madrid", "New York", "Kathmandu", "Paris"];

          // remove the last element
          let removedCity = cities.pop();
          
          console.log(cities)         // ["Madrid", "New York", "Kathmandu"]
          console.log(removedCity);   // Paris
          
          // pop() Return Value
          // Removes the last element from array and returns that value.
          // Returns undefined if the array is empty.
          // Notes: This method changes the original array and its length.`
        },
      ]
    },
    {
      id: 1,
      title: "shift()",
      note: [
        {
          text1: `The shift() method removes the first element from an array and returns that element.
          The syntax of the shift() method is:
arr.shift()

shift() Parameters
The shift() method does not accept any arguments.

  shift() Return Value
  Removes the first element from array and returns that value.
  Returns undefined if the array is empty.
  After removing the element at the 0th index, it shifts other values to consecutive indexes down.
          `,
          code1: `let languages = ["English", "Java", "Python", "JavaScript"];

          // removes the first element of the array
          let first = languages.shift();
          console.log(first);
          console.log(languages);
          
          // Output: English
          //         [ 'Java', 'Python', 'JavaScript' ]`
        },
      ]
    },
    {
      id: 1,
      title: "of() - improve array creation.",
      note: [
        {
          text1: `when you pass a number to the Array constructor, JavaScript creates an array whose length equals the number.For example:`,
          code1: `let numbers = new Array(2);
          console.log(numbers.length); // 2
          console.log(numbers[0]); // undefined
          
          // However, when you pass to the 'Array' constructor a value that is not a number, JavaScript creates an array that contains one element with that value.For example:
          
          numbers = new Array("2");
          console.log(numbers.length); // 1
          console.log(numbers[0]); // "2"`
        },
        {
          text1: `This behavior is sometimes confusing and error - prone because you may not know the type of data that you pass to the Array constructor.

          ES6 introduces the <b>Array.of()</b> method to solve this problem.
          
          The <b>Array.of()</b> method is similar to the Array constructor except the <b>Array.of()</b> method does not treat a single numeric value special.
          
          In other words, the <b>Array.of()</b> method always creates an array that contains the values that you pass to it regardless of the types or the number of arguments.
          
          The following shows the syntax of the <b>Array.of()</b> method:
          
          <span style="color:red"> Array.of(element0[, element1[, ...[, elementN]]]) </span>
          <b>JavaScript Array.of() examples</b>
          `,
          code1: `// See the following example:

          let numbers = Array.of(3);
          console.log(numbers.length); // 1
          console.log(numbers[0]); // 3
          
          // In this example, we passed the number 3 to the 'Array.of()' method.The 'Array.of()' method creates an array of one number.
          
          // Consider the following example:
          
          let chars = Array.of('A', 'B', 'C');
          console.log(chars.length); // 3
          console.log(chars); // ['A','B','C']
          // In this example, we created an array of three strings by passing 'A', 'B', and 'C' to the 'Array.of()' method.The size of the array is 3.
          `
        },
        {
          text1: `
         <b>JavaScript Array.of() polyfill:--</b>

If you execute the JavaScript in the environment that doesn't support the  'Array.of()' method, you can use the following polyfill:
`,
          code1: `if (!Array.of) {
            Array.of = function() {
              return Array.prototype.slice.call(arguments);
            };
          }`
        },
        {
          text1: ``,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "from() - create arrays from array-like or iterable objects.",
      note: [
        {
          text1: `To create an array from an array-like object in ES5, you iterate over all array elements and add each of them to an intermediate array like this:`,
          code1: `function arrayFromArgs() {
            var results = [];
            for (var i = 0; i < arguments.length; i++) {
              results.push(arguments[i]);
            }
            return results;
          }
          var fruits = arrayFromArgs('Apple', 'Orange', 'Banana');
          console.log(fruits);
          
          // Output:
          // [ 'Apple', 'Orange', 'Banana' ]
          
          // To make it more concise, you can use the 'slice()' method of the 'Array.prototype' as follows:
          
          function arrayFromArgs() {
            return Array.prototype.slice.call(arguments);
          }
          var fruits = arrayFromArgs('Apple', 'Orange', 'Banana');
          console.log(fruits);`
        },
        {
          text1: `ES6 introduces the 'Array.from()' method that creates a new instance of the 'Array' from an array-like or iterable object. The following illustrates the syntax of the 'Array.from()' method:

          <span style="color:red">Array.from(target [, mapFn[, thisArg]])</span>
          
          In this syntax:
          
          > <b>target</b> is an array - like or iterable object to convert to an array.
          > <b>mapFn</b> is the map function to call on every element of the array
          > <b>thisArg</b> is the <b>this</b> value when executing the <b>mapFn</b> function.
          
          The <b>Array.from()</b> returns a new instance of <b>Array</b> that contains all elements of the <b>target</b> object.
          
          ------------------------------
          <b>JavaScript Array.from() method examples </b>
          -------------------------------
          
          Let's take some examples of using the <b>Array.from()</b> method.
          
          1) Create an array from an array - like object:--
          
          The following example uses the <b>Array.from()</b> method to create a new array from the <b>arguments</b> object of a function:
          `,
          code1: `function arrayFromArgs() {
            return Array.from(arguments);
          }
          
          console.log(arrayFromArgs(1, 'A'));
          
          // Output:
          // [1, 'A']
          
          // In this example, we create an array from the arguments of the 'arrayFromArgs()' function and return it.
          `
        },
        {
          text1: `<b>2) JavaScript Array Array.from() with a mapping function:--</b>

          The <b>Array.from()</b> method accepts a callback function that allows you to execute the mapping function on every element of the array that is being created.See the following example:`,
          code1: `function addOne() {
            return Array.from(arguments, x => x + 1);
          }
          console.log(addOne(1, 2, 3));
          
          // Output:
          // [2, 3, 4]
          // In this example, we increased each argument of the 'addOne()' function by one and add the result to the new array.
          `
        },
        {
          text1: ` <b>3) JavaScript Array.from() with a this value:--</b>
           
          If the mapping function belongs to an object, you can optionally pass the third argument to the <b>Array.from()</b> method.The object will represent the <b>this</b> value inside the mapping function. Consider this example:`,
          code1: `let doubler = {
            factor: 2,
            double(x) {
              return x * this.factor;
            }
          }
          let scores = [5, 6, 7];
          let newScores = Array.from(scores, doubler.double, doubler);
          console.log(newScores);
          
          // Output:
          // [10, 12, 14]
          `
        },
        {
          text1: `<b>4) Create an array from an iterable object: --</b>
          
          Since the <b>Array.from()</b> method also works on an iterable object, you can use it to create an array from any object that has a <b>[symbol.iterator]</b> property.For example:`,
          code1: `let even = {
            *[Symbol.iterator]() {
              for (let i = 0; i < 10; i += 2) {
                yield i;
              }
            }
          };
          let evenNumbers = Array.from(even);
          console.log(evenNumbers);
          
          // Output:
          // [0, 2, 4, 6, 8]

          // > First, define the 'even' object with the '[System.iterator]' that returns even numbers from 0 to 10.
// > Then, use the 'Array.from()' method to create a new array of even numbers from the 'even' object.

          `
        }
      ]
    },
    {
      id: 1,
      title: "flat() - flatten an array recursively up to a specified depth.",
      note: [
        {
          text1: `ES2019 introduced the <b>Array.prototype.flat()</b> method that creates a new array with all the elements of the subarrays concatenated to it recursively up to a specified depth.

          // The following shows the syntax of the <b>flat()</b> method:
          
          <span style="color:red"> let newArray = arrayObject.flat([depth]) </span>
          
          // The <b>depth</b> parameter specifies how deep the method flats the array structure.It defaults to 1.
          // The following example shows how to flat an array of numbers:`,
          code1: `const numbers = [1, 2, [3, 4, 5]];
          const flatNumbers = numbers.flat();
          
          console.log(flatNumbers);
          
          // Output:
          // [1, 2, 3, 4, 5]
          
          // In this example, we didn't pass the depth argument into the 'flat()' method therefore the depth is 1 by default. The 'flat()' method concatenated all the elements of the nested array[3, 4, 5] to the elements of the new array.
          // 'Note' :- that the 'flat()' method creates a new array and doesn't change the original array:
          console.log(numbers);

// Output:
// [1, 2, [3, 4, 5]]

// The following example flats an array with two level depth:

const numbers = [1, 2, [3, 4, 5, [6, 7]]];
const flatNumbers = numbers.flat(2);

console.log(flatNumbers);

// Output:
// [1, 2, 3, 4, 5, 6, 7]

// When you dont know the depth level, you can pass the 'Infinity' into the 'flat()' method to recursively concatenate all elements of the sub - arrays into the new array:

const numbers = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];
const flatNumbers = numbers.flat(Infinity);

console.log(flatNumbers);

// If an array has empty slots, you can use the 'flat()' method to remove the holes, like this:

const numbers = [1, 2, , 4, , 5];
const sequence = numbers.flat();
console.log(sequence);

// Output:
// [1, 2, 4, 5]
          `
        },
        {
          text1: `<b>Summary</b>
          => Use the 'Array.prototype.flat()' method to flat an array with the nested arrays.
          => Use the 'depth' argument to specify how deep the nested arrays should be flattened.The depth is 1 by default.
          => The 'flat()' also removes the holes in the array with empty slots.
          `,
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
      title: "flatMap() - execute a mapping function on every element and flatten the result.",
      note: [
        {
          text1: ` The <b>flat()</b> method creates a new <b>array</b> with the elements of the subarrays concatenated into it.

            The <b>map()</b> method creates a new array whose elements are the results of a mapping function.
          
          The <b>flatMap()</b> method is the combination of the <b>map()</b> method followed by the <b>flat()</b> method of depth 1.
          
          The <b>flatMap()</b> method first maps each element in an array using a mapping function and then flattens the results into a new array.
          
          The following shows the syntax of the <b>flatMap()</b> method:--
          `,
          code1: `let newArray = arrayObject.flatMap(callback, thisArg);`
        },
        {
          text1: ` The <b>flatMap()</b> method takes two parameters:

          -------------------------------
          <b>1) The callback mapping function:--</b>
          -------------------------------
          
           The <b>callback</b> is the mapping function has the same syntax as the one in the <b>map()</b> method:
          
          function callback(currentValue [[, index], array]);
          
          ----------------------
          <b> 2) The thisArg argument:--</b>
          ---------------------
           The optional <b>thisArg</b> argument is a value to use as <b>this</b> when executing the <b>callback</b>.
          
           Note that the <b>flatMap()</b> method doesn't modify the original array.
          
          ----------------------
          <b> JavaScript Array flatMap() examples </b>
          ----------------------
           Let's take some examples of using the <b>flatMap()</b> method.
          
          ----------------------
           1) Creating words from sentences example
          ----------------------
           Suppose that you have the following array:
          
          <span style="color:red"> let sentences = ["JavaScript Array flatMap()", " ", "is", " ", "Awesome"]; </span>
          
           The following <b>map()</b> function splits the words of  sentences:`,
          code1: `let words = sentences.map(s => s.split(' '));
          console.log(words);
          
          // Output:
          // [
          //   ['JavaScript', 'Array', 'flatMap()'],
          //   [' '],
          //   ['is'],
          //   [' '],
          //   ['Awesome']
          // ]`
        },
        {
          text1: `The result is an array of nested arrays filled by words.To flatten the result, you can use the 'flat()' method on the result of the 'map()' method.However, it'll be more concise to use the 'flatMap()' method.

          The 'flatMap()' creates a flattened array by running each sentence in the array through a mapping function and flattening the mapped results:`,
          code1: `let sentences = [
            "JavaScript Array flatMap()",
            " ",
            "is",
            " ",
            "Awesome"
          ];
          
          let words = sentences.flatMap(s => s.split(' '));
          console.log(words);
          
          // Output:
          // ['JavaScript', 'Array', 'flatMap()', '', '', 'is', '', '', 'Awesome']`
        },
        {
          text1: `----------------------
           <b>2) Adding and removing elements during mapping example:</b>
          ----------------------
          
           The 'flatMap()' method allows you to add or remove elements during mapping.Consider the following example:
           Suppose that you have the following shopping cart:`,
          code1: `let cart = [{
            name: 'Smartphone',
            qty: 2,
            price: 500,
            freeOfCharge: false
          },
          {
            name: 'Tablet',
            qty: 1,
            price: 800,
            freeOfCharge: false
          }
          ];
          
          // If customers buy a smartphone, you want to give them a free screen protector.
          // When the customer adds a smartphone to the cart, you can add a screen protector to the cart using the 'flatMap()' method as follows:
          
          let newCart = cart.flatMap(
            (item) => {
              if (item.name === 'Smartphone') {
                return [item, {
                  name: 'Screen Protector',
                  qty: item.qty,
                  price: 5,
                  freeOfCharge: true
                }]
              } else {
                return [item];
              }
            }
          );
          
          console.log(newCart);
          
          // The cart will look like this:
          
          [
            { name: 'Smartphone', qty: 2, price: 500, freeOfCharge: false },
            { name: 'Screen Protector', qty: 2, price: 5, freeOfCharge: true },
            { name: 'Tablet', qty: 1, price: 800, freeOfCharge: false }
          ]
          
          // The following uses the 'reduce()' method to calculate the total amount from the items in the cart.It ignores the free - of - charge items, like screen protectors:
          
          const total = newCart.reduce((sum, item) => {
            if (!item.freeOfCharge)
              sum += item.price * item.qty;
            return sum;
          }, 0);
          
          console.log({ total });
          
          // Output:
          // { total: 1800 }
        `
        },
        {
          text1: `<b>Summary</b>
          Use the <b>flatMap()</b> method to create a flattened array of elements by running each element in the collection through a mapping function and flattening the mapped results.`,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "join() - concatenate all elements of an array into a string separated by a separator.types",
      note: [
        {
          text1: ` The <b>join()</b> method allows you to concatenate all elements of an array and returns a new string:
          <span style="color:red"> Array.prototype.join([separator]) </span>
          
          The <b>join()</b> method accepts a optional argument <b>separator</b> which is a string that separates each pair of adjacent elements of the array in the result string.
          
            The <b>separator</b> defaults to a comma if you don't pass it to the <b>join()</b> method.
          
          In case the array has one element, the <b>join()</b> method returns that element as a string without using the <b>separator</b>.
          
          And if the array is empty, the <b>join()</b> method returns an empty string.
          
          When the elements of the array aren't strings, the <b>join()</b> method converts them to strings before joining.
          
          Note that the <b>join()</b> method converts <b>undefined, null</b>, and empty array[] to an empty string.
          `,
          code1: `Ex: 
          const cssClasses = ['btn', 'btn-primary', 'btn-active'];
          const btnClass = cssClasses.join(' ');
          
          console.log(btnClass);
          
          // Output:
          // btn btn - primary btn - active
          
          // In this example, we have an array that holds a list of CSS classes.And we use the 'join()' method joins all elements of the 'cssClasses' array and return a string of the CSS classes separated by a space.
          `
        },
        {
          text1: `<b>2) Using the JavaScript Array 'join()' method to replace all occurrences of a string</b>
          
          This example uses the JavaScript Array 'join()' method to replace all occurrences of the space ' ' by the hyphen(-):`,
          code1: `const title = 'JavaScript array join example';
          const url = title.split(' ')
            .join('-')
            .toLowerCase();
          
          console.log(url);
          
          // Output:
          // javascript - array - join - example
          
          // > First, split the title string by the space into an array by using the 'split()' string method.
          // > Second, concatenate all elements in the result array into a string by using the 'join()' method.
          // > Third, convert the result string to lower case by using the 'toLowerCase()' method.`
        },
        {
          text1: `=> Summary
          Use the JavaScript Array 'join()' method to concatenate all elements of an array into a string separated by a separator.`,
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
      title: "at() - access array elements using both positive and negative indexes.",
      note: [
        {
          text1: `In JavaScript, you can use the square bracket <b>[]</b> to access an element of an array. For example, the <b>arr[0]</b> returns the first element in the array <b>arr</b>, the <b>arr[1]</b> returns the second element, and so on.

          To get the last element in an array, you use the <b>length</b> property like this:
          
          arr[length - 1]
          
          JavaScript doesn't allow you to use a negative index to access the last element like other languages e.g., Python.For example, the following returns undefined:
          
          arr[-1]
          
          The reason is that JavaScript also uses square brackets <b>[]</b> for accessing a property of an object.
          
          For example, the <b>obj[1]</b> returns a property of the object <b>obj</b> with the key "1".Hence, the <b>obj[-1]</b> returns the property of an object with the key "-1".
          
          In the above example, the <b>arr[-1]</b> returns the property of the <b>arr</b> object with the key "-1".Note that the type of an array is <b>object</b>.Since the "-1" property doesn't exist in the <b>arr</b> object, it returns <b>undefined</b>.
          
          For this reason, ES2022 introduced a new method <b>at()</b> added to the <b>prototype</b> of <b>Array</b>, <b>String</b>, and <b>TypeArray</b>.This tutorial focuses on the <b>at()</b> method of the <b>Array.prototype</b>.
          
          The <b>at()</b> method accepts an index and returns an element at that index.Here's the syntax of the <b>at()</b> method:
          
          arr.at(index)
          
          In this syntax, the <b>index</b> specifies an array element to return.It can be zero, positive, or negative.
          If the index is zero or positive, the <b>at()</b> method works like the <b>[]</b>.
          
          However, if you use a negative index, the method returns an element from the end of the array.For example, the <b>arr.at(-1)</b> returns the last element, <b>arr.at(-2)</b> returns the second last element, and so on.`,
          code1: `//The following example shows how to use the 'at()' method to return an array element:
          const scores = [5, 6, 7];
          console.log(scores.at(1)); // same as scores[1] 
          // get the last element
          console.log(scores.at(-1)); // 7
          console.log(scores.at(-1) === scores[scores.length - 1]); // true
          
          // Output:
          // 6
          // 7
          // true
`
        },
      ]
    },
    {
      id: 1,
      title: "Object.freeze()",
      note: [
        {
          text1: `const prevents reassignment.
<b>Object.freeze()</b> prevents mutability.

The <b>Object.freeze()</b> static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.

<b>freeze()</b> returns the same object that was passed into the function. It does not create a frozen copy.

The Object.freeze() method is shallow, meaning that it can freeze the properties of the object, not the objects referenced by the properties. 

The <u>Object.freeze()</u> method freezes an object i.e. it prevents the object from being modified.

Object.freeze method makes the object completely read-only, but it's only doing a shallow freeze, which means that it will only freeze the immediate properties of the object itself. If the object contains an array or object as a property, those properties can still be modified.

<u>Object.freeze</u> makes an object completely immutable, while <u>Object.seal</u> allows existing properties to be modified, but prevents the addition and deletion of new properties.

-> <b>freeze() </b> is a static method. Hence, we need to access the method using the class name, Object.

Notes: A frozen object can no longer be changed. Freezing an object prevents:
=> New properties from being added to the object.
=> Existing properties to be removed from the object.
=> Changing the enumerability, configurability, or writability of existing properties.
=> Changing the values of existing object properties and prototypes.

<b>Description</b>
The <u>Object.freeze()</u> method prevents any changes to an object.
The <u>Object.freeze()</u> method will fail silently in non-strict mode.
The <u>Object.freeze()</u> method will throw a TypeError in strict mode.
Frozen objects are read-only. No modification, addition or deletion of properties are allowed.
The Object.isFrozen() method can be used to check if an object is frozen.

<b>Note</b>: Object.freeze(obj) only applies to the immediate properties of obj. If the values of those properties are objects themselves, those objects are not frozen and may be the target of property addition, removal, or value reassignment operations.

The Object.isFrozen() method can be used to check if an object is frozen.
Object.isFrozen(frozenStudent); // === true
 `,
          code1: `syntax : Object.freeze(obj)
          
          //-------------------
          let obj = {
  prop: function () {},
  foo: "bar",
};

// freeze the object
Object.freeze(obj)

// changes will not occur
obj.foo = "bar1";
console.log(obj.foo);

// Output: bar


//------------------- TypeError in strict mode. ------------
        "use strict"
        // Create Object
        const person = {
            firstName: "John",
            lastName: "Doe",
            age: 50,
            eyeColor: "blue"
        };
        // Freeze Object
        Object.freeze(person)
        // Test Error
        let text;
        try {
            person.age = 51;
            text = Object.values(person);
            console.log(text)
        }
        catch (err) {
            console.log(err)
            text = err;
        }
        console.log(person)

        Output : ----
        TypeError: Cannot assign to read only property 'age' of object '#<Object>'

        //--------------------

        let obj = {
  prop: function () {},
  foo: "bar",
};

// freeze the obj object
let o = Object.freeze(obj);

// changes will fail silently
obj.foo = "bar1";
console.log(obj.foo); 

// cannot add a new property 
obj.new_foo = "bar";
console.log(obj.new_foo); 
console.log(obj); 

// In the above example, we have created an object "obj" with two properties: "prop" and "foo".

// We then used the "Object.freeze()" method to freeze "obj", which makes it immutable. Once an object is frozen, its properties cannot be modified or deleted.

// The output indicates that any attempt to modify a property or add a new property on a frozen object will fail silently without throwing an error.
`
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
      title: "Object.seal()",
      note: [
        {
          text1: `Object.seal()
On the other hand, The Object.seal() method prevents the addition and deletion of properties from an object, but it does not prevent the modification of the values of existing properties.
The <b>Object.seal()</b> method seals the given object. This prevents new properties from being added to the object and marks all the existing properties as non-configurable.

The <b>seal()</b> method, being a static method, is called using the Object class name.

<b>seal() Parameters</b>
The <u>seal()</u> method takes in:
<u>obj</u> - the object that is to be sealed.


<b>seal() Return Value</b>
The <u>seal()</u> method returns the object being sealed i.e. <u>obj</u>.

Object.isSealed() can be used to check if an object is sealed or not.
Object.isSealed(student); // === true`,
          code1: `const person = {
    name: 'Geeksforgeeks',
    address: {
        city:"Noida"
    }
}
Object.freeze(person)
person.address.city = "India"
person.name = "India"
console.log(person.address.city)
console.log(person.name)


//--------------
        let obj = {
            foo: "bar",
            func: function () { },
        };

        // before sealing, properties can be
        // added, modified, or removed
        obj.foo = "JavaScript";
        obj.value = 5;
        delete obj.func;

        console.log(obj);
        // Output: { foo: 'JavaScript', value: 5 } 


        // seal the object
        let o = Object.seal(obj);

        // can still change property values
        // as it is writable by default
        obj.foo = "bar1";
        console.log(obj);
        // Output: { foo: 'bar1', value: 5 }


        // no other change happens, fails silently
        obj.foo1 = "bar";
        delete obj.foo;

        console.log(obj);
        // Output: { foo: 'bar1', value: 5 }

//         From the example above, it is clear that we can add, modify, or remove properties from the "obj" object before it is sealed.
// After sealing "obj" with the "seal()" method, we
// can modify existing writable properties like "foo" and "value",
// cannot add new properties to "obj" (attempt fails silently in non-strict mode)
// Uncaught TypeError: Cannot add property foo1, object is not extensible (In non-strict mode)
`
        },
        {
          text1: `<b>Key differences</b>:
=> <u>Object.seal()</u> allows modification of existing properties, but does not permit addition or deletion of properties. <u>Object.freeze()</u>, on the other hand, prevents any modifications, additions, or deletions to properties.
=> <u>Object.seal()</u> creates a <u>sealed</u> object, while <u>Object.freeze()</u> creates a <u>frozen</u> object.
=> Sealed objects are still mutable, whereas frozen objects are completely immutable.
=> <u>Both methods return the modified object itself.
=> <u>Object.seal()</u> allows checking if an object is sealed using <u>Object.isSealed()</u>, and <u>Object.freeze()</u> allows checking if an object is frozen using Object.isFrozen().

<b>Conclusion</b> : <u>Object.seal() and <u>Object.freeze()</u> are methods in JavaScript that provide different levels of object immutability and control over object modifications.

=> <u>Object.seal()</u> allows the modification of existing properties while preventing the addition or deletion of properties. Sealed objects are still mutable, and the <u>Object.isSealed()</u> method can be used to check if an object is sealed.
=> <u>Object.freeze()</u> creates completely immutable objects where no modifications, additions, or deletions of properties are allowed. Frozen objects are read-only, and the <u>Object.isFrozen()</u> method can be used to check if an object is frozen.

the choice between <u>Object.seal()</u> and <u>Object.freeze()</u> depends on the desired level of immutability and control required for the object. If you want to allow modification of existing properties but prevent structural changes, <u>Object.seal()</u> is suitable. If you need to create fully immutable objects, ensuring that no modifications are possible, <u>Object.freeze()</u> is the appropriate choice.

By understanding the differences and capabilities of <u>Object.seal()</u> and <u>Object.freeze()</u>, you can effectively manage object mutability and ensure the desired level of data integrity and security in your JavaScript applications.`,
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
      title: "( in ) - Operator",
      note: [
        {
          text1: `JavaScript <b>in operator</b> is an inbuilt operator which is used to check whether a particular property exists in an object or not. It returns a boolean value true if the specified property is in an object, otherwise, it returns false.
          
         <b> prop</b>: This parameter holds the string or symbol that represents a property name or array index.
<b>object</b>: This parameter is an Object that is to be checked whether it contains the prop.
          `,
          code1: `prop in object
          
              // Illustration of in operator 
    const array = ['geeks', 'for',
        'geeks']
 
    // Output of the indexed number 
    console.log(0 in array);
 
    // Output of the Value 
    console.log('for' in array);
 
    // output of the Array property 
    console.log('length' in array);

    Output : 
    true
false
true
          `
        },
      ]
    },
    {
      id: 1,
      title: "add new topic",
      note: [
        {
          text1: ``,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      section: `Reversing elements`,
      title: "reverse() - reverse the order of elements in place and return the same array with the elements in the reversed order.",
      note: [
        {
          text1: `The reverse() method of TypedArray instances reverses a typed array in place and returns the reference to the same typed array, the first typed array element now becoming the last, and the last typed array element becoming the first.In other words, elements order in the typed array will be turned towards the direction opposite to that previously stated.This method has the same algorithm as Array.prototype.reverse().

          Using a for loop (or any other type of loop), we can loop through an array from the last time to the first item, and push those values to a new array which becomes the reversed version. Here's how:`,
          code1: `const array = [1, 2, 3, 4]

          const reversedArray = []
          
          for (let i = array.length - 1; i >= 0; i--) {
            const valueAtIndex = array[i]
            reversedArray.push(valueAtIndex)
          }
          
          console.log(reversedArray)
          // [4, 3, 2, 1]
          
          //By using a 'for' loop, we start looping from the index of the last 'value (array.length - 1)' to the index of the first 'value (0)'.Then we push the values accordingly to 'reversedArray'.

          const array = [1, 2, 3, 4]
          
          array.reverse()
          
          console.log(array)
          // [ 4, 3, 2, 1 ]
          `
        },
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "toReversed() - reverse the order of elements of an array and return the new array with the elements in the reversed order.",
      note: [
        {
          text1: ` The <b>toReversed()</b> method reverses the order of elements in an array and returns a new array with the elements in reversed order.

           Unlike the <b>reversed()</b> method that reverses the elements of the array in place, the <b>toReversed()</b> method does not modify the original array.Instead, it creates a new array with the elements of the original array in the reversed order.
          
          Here's the basic syntax of the <b>toReversed()</b> method:
          
             <span style="color:red">Array.prototype.toReversed()</span>
          
           The <b>toReversed()</b> method takes no parameters and returns a new array containing the elements in reversed order.
          
           When you call the <b>toReversed()</b> method on a sparse array, it treats empty slots as if they have the value <b>undefined</b>.
          
           This method is generic, meaning that you can call it on a non - array object that has a length property and integer - keyed properties.
          
          JavaScript Array toReversed() method examples
          Let's explore some examples of using the JavaScript array toReverse() method.
          
          <b> 1) Using JavaScript Array toReversed() method on string arrays </b>
          The following example uses the toReverse() method to reverse an array of strings:`,
          code1: `const colors = ['red', 'green', 'blue'];
          const reversedColors = colors.toReversed();
          
          console.log(colors);
          console.log(reversedColors);
          
          // Output:
          // ['red', 'green', 'blue']
          // ['blue', 'green', 'red']
          `
        },
        {
          text1: `<b>3) Using JavaScript Array toReversed() method on arrays of objects</b>
          The following example uses the toReversed() method to reverse the order of objects in an array:`,
          code1: `const contacts = [{ name: 'John' }, { name: 'Alice' }, { name: 'Bob' }];
          const reversedContacts = contacts.toReversed();
          
          console.log(contacts);
          console.log(reversedContacts);
          
          // Output:
          // [{ name: 'John' }, { name: 'Alice' }, { name: 'Bob' }]
          // [{ name: 'Bob' }, { name: 'Alice' }, { name: 'John' }]
          `
        },
        {
          text1: `<b>4) Calling toReversed() method on sparse arrays</b>
          When you call the toReversed() method on a sparse array, the result array remains sparse.The toReversed() method copies empty slots over their respective indices as empty slots:`,
          code1: `const scores = [1, , 7, 5];
          const reversedScores = scores.toReversed();
          
          console.log(scores);
          console.log(reversedScores);
          
          // Output:
          // [1, , 7, 5]
          // [5, 7, undefined, 1]
          `
        },
        {
          text1: `<b>5) Calling toReversed() method on non - array objects</b>
          The following example illustrates how to call the toReversed() method on an object that has the length property and integer - keyed properties:`,
          code1: `const arrayLike = {
            length: 3,
            unrelated: "bar",
            2: 2,
            3: 3, // ignored because the length is 3
          };
          
          const result = Array.prototype.reverse.call(arrayLike);
          
          console.log(result);
          
          // Output:
          // { 0: 2, 3: 3, length: 3, unrelated: 'bar' }
          `
        },
        {
          text1: `In this example, the toReversed() method does the following:

          First, access the length property of the object.
            Second, iterate through each property with an integer key ranging from 0 to length / 2.
          Third, swap the values at corresponding indices on both ends of the array.Additionally, remove any destination property without a corresponding source property.
            Finally, return a new object with the order of the elements(or properties) in the reversed order.
          <b>Summary</b>
          Use the JavaScript array toReversed() method to reverse the order of elements within an array and return a new reversed array.`,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      section: `High-order methods`,
      title: "map() - transform array elements.",
      note: [
        {
          text1: `In JavaScript, map() is a higher-order function that is used to iterate over elements of an array and execute a callback function on each element. It creates a new array based on the results of the callback function.
          <span style="color:red"> const numbers = [1, 2, 3, 4, 5]; </span>
        
          Multiply each number by 2
          const multipliedNumbers = numbers.map((num) => num * 2);
          
          console.log(numbers); // Output: [1, 2, 3, 4, 5]
          console.log(multipliedNumbers); // Output: [2, 4, 6, 8, 10]
          
          Sometimes, you need to take an array, transform its elements, and include the results in a new array.
          
          Typically, you use a <b>for</b> loop to iterate over the elements, transform each individual one, and push the results into a new array.
          
          Let's take a look at an example.
          
          Suppose that you have an array of numbers where each element represents the radius of a circle as follows:
          `,
          code1: `let circles = [
            10, 30, 50
          ];
          
          // The following illustrates how to calculate the area of each circle and push the result into a new array.
          
          let areas = []; // to store areas of circles
          let area = 0;
          for (let i = 0; i < circles.length; i++) {
            area = Math.floor(Math.PI * circles[i] * circles[i]);
            areas.push(area);
          }
          console.log(areas);

          // Output:
          // [314, 2827, 7853]
          // It takes a quite amount of code to accomplish this.

// Starting from ES5, JavaScript Array type provides the map() method that allows you to transform the array elements in a cleaner way.

function circleArea(radius) {
  return Math.floor(Math.PI * radius * radius);
}
let areas = circles.map(circleArea);
console.log(areas);

// Output
// [314, 2827, 7853]


//   First, define a function that calculates the area of a circle.
//     Then, pass the 'circleArea' function to the 'map()' method.The 'map()' method will call the 'circleArea' function on each element of the circles array and return a new array with the elements that have been transformed.
// To make it shorter, you can pass in the 'map()' method an anonymous function as follows.

let areas = circles.map(function(radius) {
  return Math.floor(Math.PI * radius * radius);
});
console.log(areas);
          `
        },
        {
          text1: `Also, you can make use of the arrow function in ES6 to achieve the same result with a cleaner code:

          let areas = circles.map(radius => Math.floor(Math.PI * radius * radius));
          console.log(areas);
          
          JavaScript Array <b>map()</b> method in detail
          The following illustrates the <b>map()</b> method.
          
            arrayObject.map(callback[, contextObject]);
          
          The <b>map()</b> method calls a callback function on every element of an array and returns a new array that contains the results.
          
            The <b>map()</b> method takes two named arguments, the first one is required whereas the second one is optional.
          
          Similar to the other iterative method such as <b>every()</b>, <b>some()</b>, <b>filter()</b>, <b>forEach()</b> and  <b>sort()</b>, the <b>callback()</b> function has the following form:
          
          function callback(currentElement, index, array) {
            ... 
          }
          
          The <b>callback()</b> function takes three arguments:
          
          The <b>currentElement</b> is the current element of the array that is being processed.
          The <b>index</b> is the index of the <b>currentElement</b>.
          The <b>array</b> is the array object being traversed.
          The <b>currentElement</b> is required while the <b>index</b> and <b>array</b> arguments are optional.
          
          If you pass the <b>contextObject</b> to the <b>map()</b> method, you can reference the <b>contextObject</b> inside the <b>callback()</b> function using the <b>this</b> keyword.
          
          It's important to note that the <b>map()</b> method does not change the original array, it creates a new array of all elements that have been transformed by the callback function.
          
          More JavaScript Array map() examples: -
          
            The following example shows how to transform an array of numbers by using a built -in method of the <b>Math</b> type as the <b>callback()</b> function.`,
          code1: `let numbers = [16, 25, 36];
          let results = numbers.map(Math.sqrt);
          console.log(results);
          
          // Output
          // [4, 5, 6]
          
          // The new array contains the square roots of the numbers in the 'numbers' array.
          
          // In this tutorial, you have learned how to use the JavaScript Array 'map()' method to transform elements of an array according to a provided function.
          
          // Excercies:---
          
          const userDetails = [
            {
              fullName: "American First Finance",
              area: 'yes',
            },
            {
              fullName: "World Health",
              area: 'yes',
            }
          ]
          
          // returning new array :-
          const newARR = userDetails.map(acc => {
              const shortOb =  {...acc, shordName : acc.fullName.toLocaleLowerCase().split(' ').map(name => name[0]).join('') }
              return shortOb
          })
          console.log(newARR) //
          // output:-
          // [
          //     { fullName: 'American First Finance', area: 'yes' },
          //     { fullName: 'World Health', area: 'yes'}
          // ]
          
          // mutated original array :-
          userDetails.forEach(acc => {
              acc.shortName = acc.fullName.toLocaleLowerCase().split(' ').map(name => name[0]).join('')
          })
          console.log(userDetails)
          // output:-
          // [
          //     { fullName: 'American First Finance', area: 'yes', shordName: 'aff' },
          //     { fullName: 'World Health', area: 'yes', shordName: 'wh' }
          // ]
          `
        },
      ]
    },
    {
      id: 1,
      title: "filter() - filter elements in an array.",
      note: [
        {
          text1: `The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

          The filter() method takes a function as an argument. The function is called for each element in the array to determine
          
          The filter method in JavaScript is designed as a higher-order function that iterates over each element of an array, allowing developers to apply a specific condition to filter out elements.
          
          The filter method doesn't modify the original array, but instead creates and returns a new array containing only the elements that meet the specified condition.
          
          
          One of the most common tasks when working with an array is to create a new array that contains a subset of elements of the original array.
          
          Suppose you have an array of city objects where each object contains two properties: 'name' and 'population'.`,
          code1: `let cities = [
            { name: 'Los Angeles', population: 3792621 },
            { name: 'New York', population: 8175133 },
            { name: 'Chicago', population: 2695598 },
            { name: 'Houston', population: 2099451 },
            { name: 'Philadelphia', population: 1526006 }
          ];
          
          // To find the city whose population is greater than 3 million, you typically loop over the array elements using a for loop and test if the value of the 'population' property satisfies the condition, like this:
          
          let bigCities = [];
          for (let i = 0; i < cities.length; i++) {
            if (cities[i].population > 3000000) {
              bigCities.push(cities[i]);
            }
          }
          console.log(bigCities);
          
          // Output:
          // [
          //   { name: 'Los Angeles', population: 3792621 },
          //   { name: 'New York', population: 8175133 }
          // ]`
        },
        {
          text1: `JavaScript Array provides the 'filter()' method that allows you to do this task in a shorter and cleaner way.
          The following example returns the same result as the example above:`,
          code1: `let bigCities = cities.filter(function(e) {
            return e.population > 3000000;
          });
          console.log(bigCities);`
        },
        {
          text1: `In this example, we call the <b>filter()</b> method of the <b>cities</b> array object and pass a function that tests each element.

          Inside the function, we check if the <b>population</b> of each city in the array is greater than 3 million.If it is the case, the function returns <b>true</b> or <b>false</b> otherwise.
          
            The <b>filter()</b> method includes the only elements in the result array if they satisfy the test in the callback function.
          
          Starting with ES6, you can use the arrow function to make it more concise:`,
          code1: `let bigCities = cities.filter(city => city.population > 3000000);
          console.log(bigCities);`
        },
        {
          text1: `JavaScript Array filter() method in detail: --

          <span style="color:red"> arrayObject.filter(callback, contextObject); </span>
          
          The <b>filter()</b> method creates a new array with all the elements that pass the test implemented by the <b>callback()</b> function.
          
          Internally, the <b>filter()</b> method iterates over each element of the array and passes each element to the <b>callback</b> function. If the <b>callback</b> function returns <b>true</b>, it includes the element in the return array.
          
            The <b>filter()</b> method accepts two named arguments: a callback function and an optional object.
          
          Like other iterative methods of the Array object such as <b>every()</b>, <b>some()</b>, <b>map()</b> and <b>forEach()</b>, the <b>callback</b> function has the following form:
          
          <span style="color:red">
          function callback(currentElement, index, array) {
            ...
          }
          </span>
          
          The <b>callback</b> function takes three arguments:
          
          The <b>currentElement</b> argument is the current element in the array that is being processed by the <b>callback</b> function.
          The <b>index</b> of the <b>currentElement</b> that is being processed by the <b>callback</b> function.
          The <b>array</b> object being traversed.
          
          The <b>index</b> and <b>array</b> arguments are optional.
          
          The <b>contexObject</b> argument of the <b>filter()</b> method is optional.If you pass the <b>this</b> value, you can reference it by using <b>this</b> keyword inside the <b>callback</b> function.
          
          It is important to note that the <b>filter()</b> method does not change the original array.
          
          More JavaScript Array filter() method examples: -
          
          Because the <b>filter()</b> method returns a new array, you can chain the result with other array methods such as <b>sort()</b> and <b>map()</b>.
          
          For example, the following illustrates how to chain the three methods: <b>filter()</b>, <b>sort()</b>, and <b>map()</b>:
          `,
          code1: `let cities = [
            { name: 'Los Angeles', population: 3792621 },
            { name: 'New York', population: 8175133 },
            { name: 'Chicago', population: 2695598 },
            { name: 'Houston', population: 2099451 },
            { name: 'Philadelphia', population: 1526006 }
          ];

          cities
  .filter(city => city.population < 3000000)
  .sort((c1, c2) => c1.population - c2.population)
  .map(city => console.log(city.name + ':' + city.population));

// Output:
// Philadelphia: 1526006
// Houston: 2099451
// Chicago: 2695598
          `
        },
        {
          text1: `  > First, filter the cities whose populations are less than 3 million using the <b>filter()</b> method.
            > Second, sort the resulting cities by the populations in descending order using the <b>sort()</b> method.
            > Third, output array element to the console using the <b>map()</b> method.
          
          The following example illustrates the use of the <b>contextObject</b> argument that specifies an object which can be referenced in the <b>callback()</b> function using the <b>this</b> keyword`,
          code1: `function isInRange(value) {
            if (typeof value !== 'number') {
              return false;
            }
            return value >= this.lower && value <= this.upper;
          }
          
          let data = [10, 20, "30", 1, 5, 'JavaScript filter', undefined, 'example'];
          
          let range = {
            lower: 1,
            upper: 10
          };
          
          let numberInRange = data.filter(isInRange, range);
          console.log(numberInRange); // [10, 1, 5]
          
          // Output:
          // [10, 1, 5]
          `
        },
        {
          text1: `> First, define the <b>isInRange()</b> function that checks if its argument is a number and in the range specified by the <b>lower</b> and <b>upper</b> properties of an object.
          > Next, define an array of mixed data that contains numbers, strings, and undefined.
          > Then, define the <b>range</b> object with two properties <b>lower</b> and <b>upper</b>.
          > After that, call the <b>filter()</b> methods of the <b>data</b> array and pass in the <b>isInRange()</b> function and the <b>range</b> object.Because we pass in the <b>range</b> object, inside the <b>isInRange()</b> function, the <b>this</b> keyword references to the <b>range</b> object.
          > Finally, show the result array in the console.
          
          In this tutorial, you have learned how to use the JavaScript Array <b>filter()</b> method to filter elements in an array based on a test provided by a callback function.
          `,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "reduce() - reduce elements of an array to a value.",
      note: [
        {
          text1: `The reduce() method executes a reducer function on each element of the array and returns a single output value.

          The array reduce in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function on each element of the array.It accepts a function executed on all the items of the specified array in the left - to - right sequence.The returned single value is stored in the accumulator.Thus, array reduce JavaScript is a non - mutating method.This means that instead of changing the actual value variable, it will hold the computed value in the accumulator without changing the original value variable.
          
            reduce() Parameters: -
            The <b>reduce()</b> method takes in:
          
           1) => callback - The callback function to execute on each array element(except the first element if no <b>initialValue</b> is provided). It takes in
          
            > <b>accumulator</b> - It accumulates the callback's return values.
            > <b>currentValue</b> - The current element being passed from the array.
          
          2) => <b>initialValue</b>(optional) - A value that will be passed to <b>callback()</b> on first call.If not provided, the first element acts as the <b>accumulator</b> on the first call and <b>callback()</b> won't execute on it.
          
          <b>Note: </b> Calling reduce() on an empty array without initialValue will throw TypeError.
          
          <b>reduce() Return Value:- </b>
            Returns the single value resulting after reducing the array.

          Notes:
          > <b>reduce()</b> executes the given function for each value from left to right.
          > <b>reduce()</b> does not change the original array.
          > It is almost always safer to provide <b>initialValue</b>.

          <b>Accumulator:</b> This contains the value calculated from the previous iteration. On the first iteration, if an <b>initialValue</b> will be provided, the accumulator will be set to the value of <b>initialValue</b>.
          <b>CurrentValue:</b> The current value of the element is processed in the array.
          <b>CurrentIndex:</b> The index of the current element is processed in the array.
          <b>Array:</b> The original array on which the <b>reduce()</b> method was called.

          When to Use the reduce() Method:--
          As shown above, the reduce() method is recommended when you need to have a single value returned from iterating over your array.
          
          This includes:
          
          > Summarizing your values into a single value
          > Grouping similar items together
          > Removing duplicates from an array
          
          The single value returned by the method can also be an array of objects, therefore containing multiple values.
          
          Suppose that you have an array of numbers, like this:
          let numbers = [1, 2, 3];

          // and you want to calculate the total of elements of the array. Typically, you use a 'for' loop to iterate over the elements and add them up as shown in the following example:
          
          let numbers = [1, 2, 3];
          let sum = 0;
          for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
          }
          console.log(sum);
          
          // Output:
          // 6
          `,
          code1: ``
        },
        {
          text1: ` The script is simple and straightforward:--

          > First, declare an array of three numbers 1, 2 and 3.
            > Second, declare the sum variable and set its value to zero.
          > Third, in the for loop, add up the elements of the numbers array to the sum variable.After the loop, the value of the sum variable is 6.
          
          What we have done was to 'reduce' an array into a value.
          
          The 'Array.prototype' allows you to reduce an array to a single value using the 'reduce()' method like this:
          `,
          code1: `let numbers = [1, 2, 3];
          let sum = numbers.reduce(function(previousValue, currentValue) {
            return previousValue + currentValue;
          });
          console.log(sum);`
        },
        {
          text1: `JavaScript Array reduce() method in detail: --
            The following illustrates the syntax of the 'reduce()' method:
          
          array.reduce(callbackFn[, initialValue])
          
          The 'reduce()' method takes two arguments:
          
          > A callback function 'callbackFn'.The function is often referred to as a reducer.
          > An optional initial value.
            The 'reduce()' method calls the 'callbackFn()' function for every element in the array.
          
              The 'reducer()' function returns a value that results from executing the 'callbackFn' to completion over the entire array.
              1) The callbackFn() function argument

               The 'callbackFn' function has the following syntax:
              
               function callbackFn(previousValue, currentValue, currentIndex, array) { /**/ }
              
              
               The 'callbackFn' function takes four arguments:
              
               'previousValue':
               The value returned from the previous call of the 'callbackFn' function. On the first call, the 'initialValue' is the 'previousValue' if you pass the 'initialValue'.Otherwise, its value is the 'array[0]'.
              
                 currentValue:
               The value of the current array element.On the first call, it is 'array[0]' if you pas the 'initialValue' or 'array[1]' otherwise.
              
                 currentIndex:
               The index of the currentValue in the array.On the first call, it's '0' if you pass the 'initialValue' or '1' otherwise.
              
               'array':
               The array to loop through.

               <b>2) The initialValue argument</b>
               The 'initialValue' argument is optional.
               
               If you specify the 'initialValue', the 'callbackFn' function will initialize the 'previousValue' to the 'initialValue' and 'currentValue' to the first array's element on the first call.
               
               If you don't specify the 'initialValue', the the 'callbackFn' function will initialize the 'previousValue' to the first array's element(array[0]) in the array and the 'currentValue' to the second array's element(array[1]).
               
               The following table illustrates the logic when the 'reduce()' method executes the 'callbackFn()' function for the first time according to the 'initialValue' argument:

               <div class='table-res'>
                    <table border=1 >
                        <tbody>
                            <tr>
                              <th>initialValue</th>
                              <th>previousValue</th>
                              <th>currentValue</th>
                            </tr>

                            <tr>
                              <td>passed</td>
                              <td>initialValue</td>
                              <td>array[0]</td>
                            </tr>

                            <tr>
                              <td>not passed</td>
                              <td>array[0]</td>
                              <td>array[1]</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
              `,
          code1: `// The following example shows the progress of the reduce() function with an 'initialValue' as 100:

          let numbers = [1, 2, 3];
          
          function getOrdinalSuffix(i) {
            let j = i % 10, k = i % 100;
            if (j == 1 && k != 11) return i + 'st';
            if (j == 2 && k != 12) return i + 'nd';
            if (j == 3 && k != 13) return i + 'rd';
            return i + 'th';
          }
          
          let call = 1;
          let sum = numbers.reduce(function(previousValue, currentValue, currentIndex, array) {
            let result = previousValue + currentValue;
          
            // show the 1st call, 2nd call, etc.
            console.log('\${getOrdinalSuffix(call)} call');
            call++;
          
            // show the immediate values
            console.table({ previousValue, currentValue, currentIndex, result });
          
            return result;
          }, 100);
          
          console.log('Result: \${sum}');
          `
        },
        {
          text1: `Output:
          1st call

          <div class='table-res'>
            <table border=1 >
                <tbody>
                    <tr>
                      <th> (index)  </th>
                      <th> Values </th>
                    </tr>

                    <tr>
                      <td>previousValue</td>
                      <td>100</td>
                    </tr>

                    <tr>
                      <td>currentValue</td>
                      <td>1</td>
                    </tr>

                    <tr>
                      <td>currentIndex</td>
                      <td> 0 </td>
                    </tr>

                    <tr>
                      <td>result</td>
                      <td> 101 </td>
                    </tr>
                </tbody>
            </table>
        </div>

        2nd call

          <div class='table-res'>
            <table border=1 >
                <tbody>
                    <tr>
                      <th> (index)  </th>
                      <th> Values </th>
                    </tr>

                    <tr>
                      <td>previousValue</td>
                      <td>101</td>
                    </tr>

                    <tr>
                      <td>currentValue</td>
                      <td>2</td>
                    </tr>

                    <tr>
                      <td>currentIndex</td>
                      <td> 1 </td>
                    </tr>

                    <tr>
                      <td>result</td>
                      <td> 103 </td>
                    </tr>
                </tbody>
            </table>
        </div>

        3rd call

          <div class='table-res'>
          <table border=1 >
              <tbody>
                  <tr>
                    <th> (index)  </th>
                    <th> Values </th>
                  </tr>

                  <tr>
                    <td>previousValue</td>
                    <td>103</td>
                  </tr>

                  <tr>
                    <td>currentValue</td>
                    <td> 3 </td>
                  </tr>

                  <tr>
                    <td>currentIndex</td>
                    <td> 2 </td>
                  </tr>

                  <tr>
                    <td>result</td>
                    <td> 106 </td>
                  </tr>
              </tbody>
          </table>
      </div>

        Result: 106
          `,
          code1: ``
        },
        {
          text1: ` And the following illustrates the 'reduce()' method without the 'initialValue' argument:
        1st call

          <div class='table-res'>
          <table border=1 >
              <tbody>
                  <tr>
                    <th> (index) </th>
                    <th> Values </th>
                  </tr>

                  <tr>
                    <td>previousValue</td>
                    <td>1</td>
                  </tr>

                  <tr>
                    <td>currentValue</td>
                    <td> 2 </td>
                  </tr>

                  <tr>
                    <td>currentIndex</td>
                    <td> 1 </td>
                  </tr>

                  <tr>
                    <td>result</td>
                    <td> 3 </td>
                  </tr>
              </tbody>
          </table>
      </div>
        2nd call

          <div class='table-res'>
          <table border=1 >
              <tbody>
                  <tr>
                    <th> (index) </th>
                    <th> Values </th>
                  </tr>

                  <tr>
                    <td>previousValue</td>
                    <td> 3 </td>
                  </tr>

                  <tr>
                    <td>currentValue</td>
                    <td> 3 </td>
                  </tr>

                  <tr>
                    <td>currentIndex</td>
                    <td> 2 </td>
                  </tr>

                  <tr>
                    <td>result</td>
                    <td> 6 </td>
                  </tr>
              </tbody>
          </table>
      </div>

          // Result: 6
          // More JavaScript Array reduce() examples: --
          // Suppose that you have the following 'shoppingCart' array of product objects:`,
          code1: `let shoppingCart = [
            {
              product: 'phone',
              qty: 1,
              price: 500,
            },
            {
              product: 'Screen Protector',
              qty: 1,
              price: 10,
            },
            {
              product: 'Memory Card',
              qty: 2,
              price: 20,
            },
          ];
          
          // To calculate the total amount of the products in the shopping cart, you can use the 'reduce()' method, like this:
          
          let total = shoppingCart.reduce(function(previousValue, currentValue) {
            return previousValue + currentValue.qty * currentValue.price;
          }, 0);
          
          // Output:
          // 550
          `
        },
        {
          text1: `Notice that in this example, we passed in the 'initialValue' argument to the 'reduce()' method.

          If we didn't do so, the 'reduce()' method would take the first element of the 'shoppingCart' array, which is an object, as an initial value and perform the calculation on this object.Hence, it would cause an incorrect result.
          
          
          JavaScript Array reduceRight() method: --
            The 'reduceRight()' method works in the same way as the 'reduce()' method, but in the opposite direction.
          
              The 'reduce()' method starts at the first element and travels toward the last, whereas the 'reduceRight()' method starts at the last element and travels backward the first.
          
          See the following example:`,
          code1: `let numbers = [1, 2, 3];

          let sum = numbers.reduceRight(function(previousValue, currentValue) {
            console.log({ previousValue, currentValue });
            return previousValue + currentValue;
          });
          
          console.log('Result: \${sum}');
          
          // Output
          
          // { previousValue: 3, currentValue: 2 }
          // { previousValue: 5, currentValue: 1 }
          // Result:6
          
          // reduceRight() methods to reduce an array into a value.

// Map
function double(x){
    return x * 2
}
const ar = [2,4,7,9];
const dValues = ar.map(double)
console.log(dValues)


function total(arr) {
   return arr.reduce(function(tot, acc, i, arrr){
    console.log("tot ",tot)
    console.log("acc ",acc)
    return tot + acc
   }, 0)
}

console.log(total([1,2,3])); // 6

const userDetails = [
    {
        fullName: "American First Finance",
        area: 'yes',
    },
    {
        fullName: "World Health",
        area: 'yes',
    }
]

//-----------------
// returning new array
const newARR = userDetails.map(acc => {
    const shortOb =  {...acc, shordName : acc.fullName.toLocaleLowerCase().split(' ').map(name => name[0]).join('') }
    return shortOb
})
console.log(newARR) //
output
[
    { fullName: 'American First Finance', area: 'yes' },
    { fullName: 'World Health', area: 'yes'}
]

//------------------------
// mutated original array
userDetails.forEach(acc => {
    acc.shortName = acc.fullName.toLocaleLowerCase().split(' ').map(name => name[0]).join('')
})
console.log(userDetails)
output
[
    { fullName: 'American First Finance', area: 'yes', shordName: 'aff' },
    { fullName: 'World Health', area: 'yes', shordName: 'wh' }
]

// ========================================



// Example 1:
const bankMovementsInDollars = [130, -50, 2000, -500, 1200, 2000, -400, -200, 500]
const rupees = 83.64
const credis = bankMovementsInDollars.filter(mov => mov > 0)
                                    .map(doll => doll * rupees)
                                    .reduce((acc, mov) => acc + mov, 0)
console.log("total credits in rupees ",credis)

// ---------
// Example 2:   
// For example, here is the code for getting the total number of occurrences for each fruit in an array of fruits:
const fruits = ['Banana', 'Orange', 'Apple', 'Orange', 'Pear', 'Banana', 'Pear', 'Banana']

const occursFruits = fruits.reduce((acc, currFruit) => {
    return { ...acc, [currFruit]: (acc[currFruit] || 0) + 1 }
    // return 1
}, {})
console.log(occursFruits)

// Note that at each step of the iteration, the accumulator will be a hash map (i.e. a JavaScript object) with a key for each fruit in the array so far, and the values will be the number of times each fruit has occurred. This is the expression where we update the accumulator:

// {...acc, [currFruit]: (acc[currFruit] || 0) + 1 }
// Let's break this down a little. First, using the spread operator, ...acc copies over all the existing values from the accumulator.

// Then, [currFruit]: sets the value for the current fruit in the array. For example, on the very first iteration over the fruits collection, this will create the Banana property. acc[currFruit] || 0 retrieves the value for that fruit from the previous version of the accumulator. If the fruit doesn't exist in the accumulator, it will start with a value of zero. 

// Finally, we add 1 to the value of that fruit and return the new accumulator.

// -----------
// Example 3:
// For example, suppose we want to get just the names of each student from an array of objects. We can reduce the array from an array of objects to an array of string values, like so:

const students = [
    { name: "Kingsley", score: 70 },
    { name: "Jack", score: 80 },
    { name: "Joe", score: 63 },
    { name: "Beth", score: 75 },
    { name: "Kareem", score: 59 },
    { name: "Sarah", score: 93 }
]

const stuNames = students.map((stu) => {
    return stu.name
})
console.log(stuNames)

const stuNamesReduce = students.reduce((acc, stu) => {
    return [...acc, stu.name]
},[])
console.log(stuNamesReduce)

// ----------
// Example 4:
// total marks
const studentsArray = [
    { name: "Kingsley", sub1: 45, sub2: 45, sub3: 45 },
    { name: "Jack", sub1: 41, sub2: 44, sub3: 85 },
    { name: "Joe", sub1: 57, sub2: 49, sub3: 45 },
    { name: "Beth", sub1: 45, sub2: 85, sub3: 65 },
    { name: "Kareem", sub1: 15, sub2: 65, sub3: 95 },
    { name: "Sarah", sub1: 35, sub2: 65, sub3: 5 }
]

const sutMarks = studentsArray.reduce((acc, currStu) => {
    // return { ...acc, [currStu.name]: currStu.sub1 + currStu.sub2 + currStu.sub3 }
    return [...acc, {...currStu, total: currStu.sub1 + currStu.sub2 + currStu.sub3 }]
}, [])

console.log(sutMarks)
console.log(studentsArray)

const students = [
    { name: "Kingsley", score: 70 },
    { name: "Jack", score: 80 },
    { name: "Joe", score: 63 },
    { name: "Beth", score: 75 },
    { name: "Kareem", score: 59 },
    { name: "Sarah", score: 93 }
]

const max = students.reduce((acc, currStu) => {
    console.log(acc, currStu.score)
    return acc ?? currStu.score > acc ? currStu.score : acc
}, null)

// console.log(max)

// ---------
// Example 5:
let ArrayList = ["Gun", "Hat", "Hate", "Apple", "Animals", "Ball", "Bat", "Cat", "Candy", "Dog", "Dare", "Exam", "Earth", "Air"];
const chOb = ArrayList.reduce((acc, let) => {
    return { ...acc, [let[0]]: acc[let[0]] ? acc[let[0]].concat([let]) : [let] }
}, {})

// console.log(chOb)

// // {"A":["Animals","Apple"],"B":["Ball","Bat"],"C":["Candy","Cat"],"D":["Dare","Dog"],"E":["Earth","Exam"],"G":["Gang","Gun"],"H":["Hat","Hate"]}
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
      title: "every() - check if every element in an array passes a test.",
      note: [
        {
          text1: `Checking array elements using the for loop:--
          Sometimes, you need to test whether every element of an array satisfies a specified condition.
          
          Typically, you use a  'for' loop to iterate all elements and check each individual element against the condition. Suppose that you have an array 'numbers' with three elements:
          
          let numbers = [1, 3, 5];
          The following code checks if every element in the 'numbers' array is greater than zero:`,
          code1: `let numbers = [1, 3, 5];
          let result = true;
          for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] <= 0) {
              result = false;
              break;
            }
          }
          console.log(result);
          // Output:
          // true
          // How it works:`
        },
        {
          text1: `> First, initialize the  'result' variable to 'true'.
          > Second, iterate over the elements of the 'numbers' array and check whether each element is less than or equal zero.If it is the case, set the 'result' variable to 'false' and terminate the loop immediately using the 'break' statement.In case no element is less than or equal zero, the value of the 'result' variable remains  'true'.
          
          This code is simple and straight forward.However, it is quite verbose.
          
            JavaScript 'Array' type provides the 'every()' method that allows you to check if every element of an array pass a test in a shorter and cleaner way.
          
          
          Introduction to JavaScript Array every() method: --
          
            Starting from ES5, JavaScript Array type provides a method 'every()' that tests every element in an array.
          
          The following example uses the 'every()' to check if every element of the numbers array is greater than zero:`,
          code1: `let numbers = [1, 3, 5];
          let result = numbers.every(function(e) {
            return e > 0;
          });
          
          console.log(result);
          
          // Output:
          // true
          
          // By using the ES6 arrow functions, the code can be even shorter:

let numbers = [1, 3, 5];
let result = numbers.every(e => e > 0);
console.log(result);
          `
        },
        {
          text1: `  The following illustrates the syntax of the 'every()' method.

              arrayObject.every(callback[, thisArg])
          
          The 'every()' method accepts two named arguments: 'callback' and 'thisArg'.
          
          1) The callback argument
          The 'callback' is a function that tests each element of the array.The 'callback()' function has the following form:
          
          function callback(currentElement, index, array) {
            //...
          }
          
          The 'callback()' function takes three arguments:
          
          First, the 'currentElement' is the current element that is being processed.
            Second, the 'index' is the index  of the 'currentElement'.
              Third, the 'array' is the array that the 'every()' method was called upon.
                The 'currentElement' argument is required whereas the 'index' and 'array' arguments are optional.
                  2) The thisArg argument
  The 'thisArg' argument of the 'every()' method is optional.If you pass the 'thisArg' argument into the method, the this value inside the callback function will reference the 'thisArg' argument.

  The 'every()' method returns 'true' if the 'callback' function returns a truthy value for every array element; otherwise, it returns 'false'.

  Note that the 'every()' method executes the 'callback()' function on every element in the array until it finds the one that causes the 'callback()' return a falsy value.

  In other words, the 'every()' will stop calling the 'callback()' function and return 'false' once there is an array element that causes 'callback()' to return a falsy value.

  Let's take a look at some more examples of using the 'every()' method.

More JavaScript Array every() method examples
The following example tests whether all the array elements are the even numbers
          `,
          code1: `let numbers = [1, 3, 5];
          let isEven = numbers.every(function(e) {
            return e % 2 == 0;
          });
          
          console.log(isEven);
          
          // Output:
          // false
          
          // In contrast, the following example tests if all the array elements are the odd numbers.

let numbers = [1, 3, 5];
let isOdd = numbers.every(function(e) {
  return Math.abs(e % 2) == 1;
});

console.log(isOdd);

// Output:
// true

// Suppose that you have an object with two properties: 'min' and 'max':

let range = {
  min: 0,
  mas: 10
};

// The following example tests whether all elements in the 'numbers' array is in the range specified by the 'min' and 'max' of the 'range' object.


let numbers = [1, 3, 5];

let range = {
  min: 0,
  max: 10
};

let isInRange = numbers.every(function(e) {
  return e >= this.min && e <= this.max;
}, range);

// Output:
// true

          `
        },
        {
          text1: `In this example, we pass the 'range' object to the 'every()' method as the second argument.And inside the 'callback()' function, we reference the 'range' object using the this keyword.

            Caution: Empty arrays: --
              If you call the 'every()' method on an empty array, the method will always return true for any condition.For example:`,
          code1: `let gtZero = [].every(e => e > 0); // any condition
          let ltZero = [].every(e => e < 0); // any condition
          
          console.log('gtZero:', gtZero);
          console.log('ltZero:', ltZero);
          
          // Output:
          // gtZero: true
          // ltZero: true`
        },
      ]
    },
    {
      id: 1,
      title: "some() - check if at least one element in an array passed a test.",
      note: [
        {
          text1: ` The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

           The some() method is an Array.propotype (built-in) method which takes in a callback function and will test that function  on each iteration against the current item.
          
           The method takes in three parameters:
          
           > currentItem: This is the element inside of the array which is currently being iterated over
           > index: This is the index position of the currentItem inside of the array
           > array: This represents the array collection to which the some() method is bound
          
           Sometimes, you want to check if an array has at least one element that meets a specified condition.
          
           For example, to check if the following array has at least one element less than 5:`,
          code1: `let marks = [4, 5, 7, 9, 10, 3];

           …you typically use a 'for' loop, like this:
          
          let marks = [4, 5, 7, 9, 10, 3];
          
          let lessThanFive = false;
          
          for (let index = 0; index < marks.length; index++) {
            if (marks[index] < 5) {
              lessThanFive = true;
              break;
            }
          }
          
          console.log(lessThanFive);
          
          //  Output:
          //  true

          //  > First, declare a flag variable 'lessThanFive' and set its value to 'false'.
          //  > Second, iterate over the elements.If an element is less than 5, set the flag to 'true' and immediately exit the loop using the 'break' statement.
          //  The code works as expected.However, it is quite verbose.
           
           //---------------------------
           let marks = [4, 5, 7, 9, 10, 3];

lessThanFive = marks.some(function(e) {
  return e < 5;
});

console.log(lessThanFive);

// Output
// true

// The condition is implemented via a callback function passed into the 'some()' method.
// Now, the code is shorter.To make it more expressive, you can use the arrow function syntax in ES6:

let marks = [4, 5, 7, 9, 10, 3];
let lessThanFive = marks.some(e => e < 5);
console.log(lessThanFive);
           `
        },
        {
          text1: ` JavaScript Array 'some()' syntax: --
          
           arrayObject.some(callback[, thisArg]);
          
           The 'some()' method accepts two arguments:
          
           1) The callback argument
           The 'some()' function executes the 'callback' function once for each element in the array until it finds the one where the 'callback' function returns a 'true'.The 'some()' method immediately returns 'true' and doesn't evaluate the remaining elements.
          
           If no element causes the 'callback()' to return 'true', the 'some()' method returns 'false'.
          
             The 'callback' function takes three arguments:
          
           function callback(currentElement [[, currentIndex], array]) {  ...}
          
           > The 'currentElement' is the current element being processed in the array.
           > The 'currentIndex' is the index of the current element being processed in the array.
           > The 'array' is array that 'some()' was called upon.
          
           2) The thisArg argument: --
             The 'thisArg' argument is optional.If you pass the 'thisArg' into the method, you can use the 'thisArg' as the 'this' value inside the 'callback' function.
          
           JavaScript Array some() examples: --
           Let's take some more examples of using the 'some()' method.
          
           1) Check if an element exists in the array:
           The following 'exists()' function uses the 'some()' method to check if a value exists in an array:`,
          code1: `function exists(value, array) {
            return array.some(e => e === value);
          }
          
          let marks = [4, 5, 7, 9, 10, 2];
          
          console.log(exists(4, marks));
          console.log(exists(11, marks));
          
          // Output:
          // true
          // false`
        },
        {
          text1: `2) Check if an array has one element that is in a range: --
          The following example shows how to check if any number in the 'marks' array is in the range of(8, 10):`,
          code1: `let marks = [4, 5, 7, 9, 10, 2];
          const range = {
            min: 8,
            max: 10
          };
          
          let result = marks.some(function(e) {
            return e >= this.min && e <= this.max;
          }, range);
          
          console.log(result);
          
          // Output:
          // true
          
          // > First, define a range object with min and max properties.
// > Second, call the 'some()' method on the marks array object and pass the callback and range object.Because we pass the range object as the second argument('thisArg'), we can reference it inside the callback via the 'this' value.
          `
        },
        {
          text1: `<b>Notice</b> that if you use the arrow function in this example, the 'this' value inside the callback function doest not bind to the range 'object' but the 'global' object.
          Caution: Empty arrays
If you call the some() method on an empty array, the result is always false regardless of any condition. 
For example:
          `,
          code1: `let result = [].some(e => e > 0);
          console.log(result);
          
          result = [].some(e => e <= 0);
          console.log(result);
          
          //   Output:
          //   false
          //   false`
        }
      ]
    },
    {
      id: 1,
      title: "sort() - sort elements in an array.",
      note: [
        {
          text1: `The sort() function allows you to sort an array object by either the default sorting order, or by a custom sorting function.

          By default, it sorts the elements in the array in ascending order based on their string Unicode values. The function takes the inputs, converts them to strings, and then sorts them using Unicode values.

          The 'sort()' method allows you to sort elements of an array in place.Besides returning the sorted array, the 'sort()' method changes the positions of the elements in the original array.
          
          By default, the 'sort()' method sorts the array elements in ascending order with the smallest value first and largest value last.
          
          The 'sort()' method casts elements to strings and compares the strings to determine the orders.
          
          Consider the following example:`,
          code1: `let numbers = [0, 1, 2, 3, 10, 20, 30];
          numbers.sort();
          console.log(numbers);
          
          // The output is:
          // [0, 1, 10, 2, 20, 3, 30]`
        },
        {
          text1: `In this example, the 'sort()' method places 10 before 2 because the string “10” comes before “2” when doing a string comparison.

          To fix this, you need to pass a compare function to the 'sort()' method.The 'sort()' method will use the compare function to determine the orders of elements.
          
          The following illustrates the syntax of the 'sort()' method:
          
          array.sort(comparefunction)
          
          The 'sort()' method accepts an optional argument which is a function that compares two elements of the array.
          
          If you omit the compare function, the 'sort()' method sorts the elements with the sort order based on the Unicode code point values of elements as mentioned earlier.
          
          The compare function of the 'sort()' method accepts two arguments and returns a value that determines the sort order.The following illustrates the syntax of the compare function:
          
            function compare(a, b) {
            // ...
          }
          
          The 'compare()' function accepts two arguments 'a' and 'b'.The 'sort()' method will sort elements based on the return value of the 'compare()' function with the following rules:
          
          1). If 'compare(a, b)' is less than zero, the 'sort()' method sorts 'a' to a lower index than 'b'.In other words, a will come first.
          2). If 'compare(a, b)' is greater than zero, the 'sort()' method sort 'b' to a lower index than 'a', i.e., b will come first.
          3). If 'compare(a, b)' returns zero, the 'sort()' method considers a equals b and leaves their positions unchanged.
          To fix the issue of sorting the number, you can use the following syntax:
          `,
          code1: `let numbers = [0, 1, 2, 3, 10, 20, 30];
          numbers.sort(function(a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
          });
          
          console.log(numbers);
          
          // Output:
          // [0, 1, 2, 3, 10, 20, 30]
          
          // Or you can define the comparison function using the arrow function syntax:
          
          let numbers = [0, 1, 2, 3, 10, 20, 30];
          numbers.sort((a, b) => {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
          });
          
          console.log(numbers);
          
          // And the following is the simplest since the elements of the array are numbers:
          
          let numbers = [0, 1, 2, 3, 10, 20, 30];
          numbers.sort((a, b) => a - b);
          
          console.log(numbers);
          
          // Sorting an array of strings: --
          // ----------------------------
          // Suppose you have an array of string named 'animals' as follows:
          
          let animals = [
            'cat', 'dog', 'elephant', 'bee', 'ant'
          ];
          
          // To sort the elements of the 'animals' array in ascending order alphabetically, you use the 'sort()' method without passing the compare function as shown in the following example:
          
          let animals = [
            'cat', 'dog', 'elephant', 'bee', 'ant'
          ];
          animals.sort();
          
          console.log(animals);
          
          // Output:
          // ['ant', 'bee', 'cat', 'dog', 'elephant']
          
          
          // To sort the 'animals' array in descending order, you need to change the logic of the compare function and pass it to the 'sort()' method as the following example.
          
          let animals = [
            'cat', 'dog', 'elephant', 'bee', 'ant'
          ];
          
          animals.sort((a, b) => {
            if (a > b)
              return -1;
            if (a < b)
              return 1;
            return 0;
          });
          
          console.log(animals);
          
          Output:
          ['elephant', 'dog', 'cat', 'bee', 'ant']
          
          // Suppose you have an array that contains elements in both uppercase and lowercase as follows:
          
          // sorting array with mixed cases
          let mixedCaseAnimals = [
            'Cat', 'dog', 'Elephant', 'bee', 'ant'
          ];
          
          // To sort this array alphabetically, you need to use a custom compare function to convert all elements to the same case e.g., uppercase for comparison and pass that function to the 'sort()' method.
          
          let mixedCaseAnimals = [
            'Cat', 'dog', 'Elephant', 'bee', 'ant'
          ];
          
          mixedCaseAnimals.sort(function(a, b) {
            let x = a.toUpperCase(),
              y = b.toUpperCase();
            return x == y ? 0 : x > y ? 1 : -1;
          
          });
          
          // Output:
          // ['ant', 'bee', 'Cat', 'dog', 'Elephant']`
        },
        {
          text1: `Sorting an array of strings with non-ASCII characters:--
          
          The 'sort()' method is working fine with the strings with ASCII characters.However, for the strings with non - ASCII characters e.g., é, è, etc., the 'sort()' method will not work correctly.For example:`,
          code1: `let animaux = ['zèbre', 'abeille', 'écureuil', 'chat'];
          animaux.sort();
          console.log(animaux);

          // As you see, the 'écureuil' string should come before the 'zèbre' string.
          
          // To resolve this, you use the 'localeCompare()' method of the 'String' object to compare strings in a specific locale, like this:
          
          animaux.sort(function(a, b) {
            return a.localeCompare(b);
          });
          console.log(animaux);
          
          // Output:
          // ['abeille', 'chat', 'écureuil', 'zèbre']
          
          // The elements of the 'animaux' array now are in the correct order.
          
// Sorting an array of numbers: --
// ------- -- ----- -- --------
//   Suppose you have an array of numbers named 'scores' as in the following example.

let scores = [
  9, 80, 10, 20, 5, 70
];

// To sort an array of numbers numerically, you need to pass into a custom comparison function that compares two numbers.

// The following example sorts the 'scores' array numerically in ascending order.

let scores = [
  9, 80, 10, 20, 5, 70
];
// sort numbers in ascending order
scores.sort((a, b) => a - b);

console.log(scores);

// Output:
// [5, 9, 10, 20, 70, 80]


// To sort an array of numbers numerically in descending order, you just need to reverse the logic in the compare function as shown in the following example:

let scores = [
  9, 80, 10, 20, 5, 70
];
// descending order
scores.sort((a, b) => b - a);
console.log(scores);

// Output:
// [80, 70, 20, 10, 9, 5]


// Sorting an array of objects by a specified property: --
// ------- -- ----- -- ------- -- - --------- --------
//   The following is an array of 'employee' objects, where each object contains three properties: 'name', 'salary' and 'hireDate'.

let employees = [
  { name: 'John', salary: 90000, hireDate: "July 1, 2010" },
  { name: 'David', salary: 75000, hireDate: "August 15, 2009" },
  { name: 'Ana', salary: 80000, hireDate: "December 12, 2011" }
];

// Sorting objects by a numeric property
// The following example shows how to sort the employees by 'salary' in ascending order.

// sort by salary
employees.sort(function(x, y) {
  return x.salary - y.salary;
});

console.table(employees);

Output: <table>


// This example is similar to the example of sorting an array of numbers in ascending order.The difference is that it compares the 'salary' property of two objects instead.

// Sorting objects by a string property:
// ------- ------- -- - ------ --------
// To sort the 'employees' array by 'name' property case-insensitively, you pass the compare function that compares two strings case-insensitively as follows:

employees.sort(function(x, y) {
  let a = x.name.toUpperCase(),
    b = y.name.toUpperCase();
  return a == b ? 0 : a > b ? 1 : -1;
});

console.table(employees);

// Sorting objects by the date property:--
// ------- ------- -- --- ---- --------
// Suppose, you wish to sort employees based on each employee's hire date.

// The hire date data is stored in the 'hireDate' property of the employee object. However, it is just a string that represents a valid date, not the 'Date' object. 

// Therefore, to sort employees by hire date, you first have to create a valid 'Date' object from the date string, and then compare two dates, which is the same as comparing two numbers.

// Here is the solution:

employees.sort(function(x, y) {
  let a = new Date(x.hireDate),
    b = new Date(y.hireDate);
  return a - b;
});

console.table(employees);

// Optimizing JavaScript Array sort() method:--
// ---------- ---------- ----- ------ ------
// In fact, the 'sort()' method calls the compare function multiple times for each element in the array.

// See the following example:

let rivers = ['Nile', 'Amazon', 'Congo', 'Mississippi', 'Rio-Grande'];

rivers.sort(function(a, b) {
  console.log(a, b);
  return a.length - b.length;
});

// Output:
// Amazon Nile
// Congo Amazon
// Congo Amazon
// Congo Nile
// Mississippi Congo
// Mississippi Amazon
// Rio - Grande Amazon
// Rio - Grande Mississippi
          `
        },
        {
          text1: `> First, declare an array 'rivers' that consists of the famous river names.
          > Second, sort the 'rivers' array by the length of its element using the 'sort()' method.We output the elements of the 'rivers' array to the web console whenever the 'sort()' method invokes the comparison function .
          
          As shown in the output above, each element has been evaluated multiple times e.g., Amazon 4 times, Congo 2 times, etc.
          
          If the number of array elements is increasing, it will potentially decrease the performance.
          
          You cannot reduce the number of times that comparison function is executed. However, you can reduce the work that the comparison has to do. This technique is called Schwartzian Transform.
          
          To implement this, you follow these steps:
          
          1) First, extract the actual values into a temporary array using the map() method.
          2) Second, sort the temporary array with the elements that are already evaluated(or transformed).
          3) Third, walk the temporary array to get an array with the right order.
          `,
          code1: `// Here is the solution:

          // temporary array holds objects with position
          // and length of element
          var lengths = rivers.map(function(e, i) {
            return { index: i, value: e.length };
          });
          
          // sorting the lengths array containing the lengths of
          // river names
          lengths.sort(function(a, b) {
            return +(a.value > b.value) || +(a.value === b.value) - 1;
          });
          
          // copy element back to the array
          var sortedRivers = lengths.map(function(e) {
            return rivers[e.index];
          });
          
          console.log(sortedRivers);
          
          // Output:
          // [ 'Nile', 'Congo', 'Amazon', 'Rio-Grande', 'Mississippi' ]
          
          // In this tutorial, you have learned how to use the JavaScript Array 'sort()' method to sort arrays of strings, numbers, dates, and objects.`
        },
        {
          text1: ``,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "forEach() - loop through array elements.",
      note: [
        {
          text1: ` The forEach() array method loops through any array, executing a provided function once for each array element in ascending index order. This function is referred to as a callback function.

             The forEach method passes a callback function for each element of an array together with the following parameters:
          
            > Current Value (required) - The value of the current array element
            > Index (optional) - The current element's index number
            > Array (optional) - The array object to which the current element belongs
          
           Typically, when you want to execute a 'function' on every element of an 'array', you use a for 'loop' statement.
          
           For example, the following code shows every element of an array to console:`,
          code1: `let ranks = ['A', 'B', 'C'];
          for (let i = 0; i < ranks.length; i++) {
            console.log(ranks[i]);
          }
          
          // Output:
          // A
          // B
          // C
          
          // JavaScript Array provides the 'forEach()' method that allows you to run a function on every element.
          // The following code uses the 'forEach()' method that is equivalent to the code above:
          
          let ranks = ['A', 'B', 'C'];
          
          ranks.forEach(function(e) {
            console.log(e);
          });
          
          // Output:
          // A
          // B
          // C`
        },
        {
          text1: ` The 'forEach()' method iterates over elements in an array and executes a predefined function once per element.
           The following illustrates the syntax of the 'forEach()' method.
          
           Array.forEach(callback[, thisArg]);
          
           The 'forEach()' method takes two arguments:
          
           1) callback:
          ------------
           The 'callback' function that the 'forEach()' method uses to execute on every element.
          
           The callback accepts the following arguments:
          
           'currentElement': is the current array element being processed.
           'index': the index of the 'currentElement' in the array.
           'array': the array that calls the 'forEach()' method.
          
           The index and array are optional.
          
           2) thisArg:
          -----------
           The 'thisArg' is a value to use as this when executing the callback.
          
           Note that the 'forEach()' function returns 'undefined' therefore it is not chainable like other iterative methods: 'filter()', 'map()', 'some()', 'every()', and 'sort()'.
          
           One limitation of the 'forEach()' method in comparison with the for loop is that you cannot use the break or continue statement to control the loop.
          
           To terminate the loop in the 'forEach()' method, you must throw an exception inside the callback function.
          
           More JavaScript Array 'forEach()' method example: --
           ------------------------------------------------
           Let's take a look at an example of the 'forEach()' method that uses a 'contextObject'.
          
           The following illustrates 'Counter' constructor function:`,
          code1: `function Counter() {
            this.count = 0;
            let self = this;
            return {
              increase: function() {
                self.count++;
              },
              current: function() {
                return self.count;
              },
              reset: function() {
                self.count = 0;
              }
            }
          }
          
          // This example shows how to pass the counter object to the 'forEach()' method.
          
          var counter = new Counter();
          var numbers = [1, 2, 3];
          var sum = 0;
          numbers.forEach(function(e) {
            sum += e;
            this.increase();
          }, counter);
          
          console.log(sum); // 6
          console.log(counter.current()); // 3
          
          // How it works.
          
          // > First, create a new 'Counter' object.
          // > Next, define an array of three numbers.
          // > Then, declare a variable 'sum' and assign it a value of zero.
          // > After that, call the 'forEach()' method on the 'numbers' array.In the callback function, add the element to the 'sum' variable and call the 'increase()' method of the 'counter' object.Notice that the 'counter' object is referred to as 'this' inside the callback function.
          // > Finally, log the value of the sum and current value of the counter in the web console.
          
          // In this tutorial, you have learned how to use the JavaScript Array 'forEach()' method to execute a callback on every element of an array.`
        },
      ]
    },
    {
      id: 1,
      title: "find",
      note: [
        {
          text1: `First Filter returns all the elements that match the condition while the Find method only returns the first one and second and even more important, the Filter method returns a new array while Find only returns the element itself and not an array,
          
          The find method returns the first element in the array that satisfies a given test function. If no elements meet the criteria, it returns <b>undefined</b>.

          The find() method returns the value of the first array element that satisfies the provided test function.

          Syntax:
          <span style="color:red"> array.find(function(currentValue, index, arr), thisValue) </span>

          <b>currentValue</b>: The current element being processed in the array.
          <b>index (optional)</b>: The index of the current element being processed in the array.
          <b>arr (optional)</b>: The array find() was called upon.

          <b>thisArg (optional)</b>: An object to which the this keyword can refer in the callback function. If not provided, <b>undefined</b> is used.
          `,
          code1: `let numbers = [1, 3, 4, 9, 8];

          // function to check even number
          function isEven(element) {
            return element % 2 == 0;
          }
          
          // get the first even number
          let evenNumber = numbers.find(isEven);
          console.log(evenNumber);
          
          // Output: 4`
        },
        {
          text1: `The <b>thisArg</b> parameter in the <b>find()</b> method allows you to specify a value to be used as <>bthis</b> when executing the callback function. `,
          code1: `const person = {
            name: 'John',
            age: 30,
            hobbies: ['reading', 'gardening', 'cooking'],
            findHobby(hobbyToFind) {
              return this.hobbies.find(function(hobby) {
                return hobby === hobbyToFind;
              }, this); // using thisArg to bind 'this' to the 'person' object
            }
          };
          
          console.log(person.findHobby('gardening')); // Output: gardening
          console.log(person.findHobby('swimming'));  // Output: undefined


          //-------------

          const thresholdFilter = {
            threshold: 25,
            numbers: [10, 20, 30, 40, 50],
            filterNumber: function(number) {
              return number > this.threshold;
            },
            filteredNumbers: function() {
              return this.numbers.find(this.filterNumber, this);
            }
          };
          
          console.log(thresholdFilter.filteredNumbers()); // Output: 30
          
          `
        },
        {
          text1: `
          > We have an object called <b>person</b> with properties <b>name, age</b>, and <b>hobbies</b>.
          > <b>findHobby</b> is a method of the <b>person</b> object. It takes a <b>hobbyToFind</b> parameter and searches for it within the <b>hobbies</b> array.
          > Inside the <b>find()</b> method, we use a regular function (not an arrow function) for the callback. This function references <b>this</b> to access the <b>hobbies</b> array of the <b>person</b> object.
          > We use <b>this</b> as the second argument to <b>find()</b>, binding it to the <b>person</b> object. This ensures that <b>this</b> inside the callback function refers to the <b>person</b> object.
          `,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "find",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "find",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      section: "JAVASCRIPT OBJECTS",
      title: "object methods",
      note: [
        {
          text1: `An object is a collection of key/value pairs or properties. When the value is a function, the property becomes a method. Typically, you use methods to describe the object's behaviors.

          In JavaScript, object methods are functions that are defined as properties of an object. These methods allow objects to perform actions or computations related to their properties and behavior. 
          
          <b>Defining Object Methods</b>:
Object methods are defined within the object literal notation or added to an object after it's created using dot notation or square bracket notation.
          `,
          code1: `const myObject = {
            property1: value1,
            property2: value2,
            method1: function() {
              // method1 implementation
            },
            method2() {
              // method2 implementation (ES6 shorthand)
            }
          };


          //In this example, 'method1' and 'method2' are object methods.

          //-------------------

          For example, the following adds the 'greet' method to the 'person' object:

          let person = {
            firstName: 'John',
            lastName: 'Doe'
        };
        
        person.greet = function () {
            console.log('Hello!');
        }
        
        person.greet();

        // Output:
        // Hello!
          `
        },
        {
          text1: `<b>Accessing Object Methods</b>:
          Object methods are accessed using dot notation or square bracket notation, followed by parentheses () to invoke them.
          
          Example:
          myObject.<span style="color:red">method1</span>(); <span style="color:gray"> // Invoke method1 </span>
          myObject[<span style="color:green">'method2'</span>](); <span style="color:gray"> // Invoke method2 using square bracket notation </span>
          </span>
          <b>this</b> Keyword in Object Methods:
          Inside an object method, the <b>this</b> keyword refers to the object itself. It allows the method to access other properties and methods of the object.`,
          code1: `const person = {
            firstName: 'John',
            lastName: 'Doe',
            fullName() {
              return this.firstName + ' ' + this.lastName;
            }
          };
          
          console.log(person.fullName()); // Output: John Doe
          `
        },
        {
          text1: `<b>Using Object Methods</b>:
          Object methods are used to encapsulate functionality related to the object. They can access and modify the object's properties, perform computations based on those properties, and interact with other objects or functions.`,
          code1: `const calculator = {
            operand1: 0,
            operand2: 0,
            add() {
              return this.operand1 + this.operand2;
            },
            setOperands(op1, op2) {
              this.operand1 = op1;
              this.operand2 = op2;
            }
          };
          
          calculator.setOperands(5, 3);
          console.log(calculator.add()); // Output: 8

          // In this example, 'add' is an object method of 'calculator', used to perform addition based on its properties. The 'setOperands' method is used to set the operands before performing the addition.

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
      title: "Constructor Function",
      note: [
        {
          text1: `It seems there might be a slight confusion in terminology. In JavaScript, constructors and constructor functions typically refer to the same concept. A constructor function is a regular JavaScript function used to create and initialize objects within a class or a constructor function.
          
          <b>Constructor Function</b>:
A constructor function is a regular JavaScript function that is used to create instances of objects. It's called a constructor because it's invoked using the new keyword to construct or create new objects.

<b>Purpose of Constructor Functions</b>:
Constructor functions serve as blueprints for creating objects with similar properties and methods. They encapsulate the initialization logic for objects, allowing for the creation of multiple instances with shared behaviors. Constructor functions are fundamental to object-oriented programming in JavaScript and are used extensively to define object types and their behavior.

Technically speaking, a constructor function is a regular function with the following convention:

> The name of a constructor function starts with a capital letter like <b>Person, Document</b>, etc.
> A constructor function should be called only with the <b>new</b> operator.
          `,
          code1: `The following example defines a constructor function called Person:

          function Person(firstName, lastName) {
              this.firstName = firstName;
              this.lastName = lastName;
          }`
        },
        {
          text1: `In this example, the <b>Person</b> is the same as a regular function except that its name starts with the capital letter <b>P</b>.

          To create a new instance of the <b>Person</b>, you use the <b>new</b> operator:
          
          let person = new Person('John','Doe');
          Basically, the <b>new</b> operator does the following:
          
          > Create a new empty object and assign it to the <b>this</b> variable.
          > Assign the arguments <b>John</b> and <b>Doe</b> to the <b>firstName</b> and <b>lastName</b> properties of the object.
          > Return the <b>this</b> value.

          It's functionally equivalent to the following:`,
          code1: `function Person(firstName, lastName) {
            // this = {};
        
            // add properties to this
            this.firstName = firstName;
            this.lastName = lastName;
        
            // return this;
        }
       
        // Therefore, the following statement:
        
        let person = new Person('John','Doe');
       
        // … returns the same result as the following statement:
        
        let person = {
            firstName: 'John',
            lastName: 'Doe'
        };
       
        // However, the constructor function 'Person' allows you to create multiple similar objects. For example:
        
        let person1 = new Person('Jane','Doe')
        let person2 = new Person('James','Smith')`
        },
        {
          text1: `<b>Adding methods to JavaScript constructor functions</b>
          An object may have methods that manipulate its data. To add a method to an object created via the constructor function, you can use the <b>this</b> keyword. For example:`,
          code1: `function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        
            this.getFullName = function () {
                return this.firstName + " " + this.lastName;
            };

            Now, you can create a new 'Person' object and invoke the 'getFullName()' method:

let person = new Person("John", "Doe");
console.log(person.getFullName());

// Output:
// John Doe

        }`
        },
        {
          text1: `The problem with the constructor function is that when you create multiple instances of the <b>Person</b>, the <b>this.getFullName()</b> is duplicated in every instance, which is not memory efficient.

          To resolve this, you can use the <a href="#Prototypes">prototype</a> so that all instances of a custom type can share the same methods.
          
         <b> Returning from constructor functions</b>
Typically, a constructor function implicitly returns <b>this</b> that set to the newly created object. But if it has a <b>return</b> statement, then here are the rules:

If <b>return</b> is called with an object, the constructor function returns that object instead of <b>this</b>.
If <b>return</b> is called with a value other than an object, it is ignored.

<b>Calling a constructor function without the new keyword</b>
Technically, you can call a constructor function like a regular function without using the new keyword like this:

<span style="color:red"> let person = Person('John','Doe');</span>

In this case, the <b>Person</b> just executes like a regular function. Therefore, the <b>this</b> inside the <b>Person</b> function doesn't bind to the <b>person</b> variable but the global object.

If you attempt to access the <b>firstName</b> or <b>lastName</b> property, you'll get an error:

console.log(person.firstName);
Error:

TypeError: Cannot read property 'firstName' of undefined
Similarly, you cannot access the <b>getFullName()</b> method since it's bound to the global object.

person.getFullName();
Error:
TypeError: Cannot read property 'getFullName' of undefined

To prevent a constructor function from being invoked without the <b>new</b> keyword, ES6 introduced the new.target property.

If a constructor function is called with the <b>new</b> keyword, the <b>new.target</b> returns a reference of the function. Otherwise, it returns <b>undefined</b>.

The following adds a statement to the <b>Person</b> function to show the <b>new.target</b> to the console:
          `,
          code1: `function Person(firstName, lastName) {
            console.log(new.target);
        
            this.firstName = firstName;
            this.lastName  = lastName;
        
            this.getFullName = function () {
                return this.firstName + " " + this.lastName;
            };
        }
        
        
        // The following returns 'undefined' because the 'Person' constructor function is called like a regular function:

let person = Person("John", "Doe");
// Output:
// undefined

// However, the following returns a reference to the 'Person' function because it's called the 'new' keyword:

let person = new Person("John", "Doe");
Output:
[Function: Person]

// By using the 'new.target', you can force the callers of the constructor function to use the 'new' keyword. Otherwise, you can throw an error like this:

function Person(firstName, lastName) {
    if (!new.target) {
        throw Error("Cannot be called without the new keyword");
    }

    this.firstName = firstName;
    this.lastName = lastName;
}

// Alternatively, you can make the syntax more flexible by creating a new 'Person' object if the users of the constructor function don't use the 'new' keyword:

function Person(firstName, lastName) {
    if (!new.target) {
        return new Person(firstName, lastName);
    }

    this.firstName = firstName;
    this.lastName = lastName;
}

let person = Person("John", "Doe");

console.log(person.firstName);

// This pattern is often used in JavaScript libraries and frameworks to make the syntax more flexible.
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
      title: "Prototypes",
      note: [{
        text1: `// In JavaScript, every object has an internal property called [[Prototype]], which is essentially a reference to another object called its prototype. This prototype is a  fundamental concept in JavaScript's object-oriented programming model.

        <b>prototype:</b>: JavaScript is a prototype-based language, which means that it uses
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
        <b>Every object has a prototype</b>: When you create an object in JavaScript, it
        automatically gets a prototype. This prototype is a regular JavaScript object
        itself,
        and it can have its own properties and methods.

        <b>The prototype chain</b>: When you try to access a property or method on an object,
        JavaScript first checks if that property or method exists on the object itself. If it
        doesn't find it, it looks at the object's prototype, and if it's not there, it continues
        up the prototype chain until it finds the property or method or reaches the end of  the
        chain (where the prototype is null).

        // both __proto__ and prototype are related to object inheritance, but they serve
        different purposes.

        <b>__proto__:</b>
        <b>__proto__</b> is a property that exists on every object in JavaScript.
        It's a reference to the prototype object from which the current object inherits.
        When you access a property or method on an object, JavaScript first checks if
        that
        property or method exists directly on the object itself.If it doesn't, JavaScript
        looks
        at the object's <b>__proto__</b> to find it.This process continues up the prototype chain
        until
        the property or method is found or until the end of the chain is reached(i.e., when
        <b>__proto__</b> becomes null).
        It's important to note that <b>__proto__</b> is considered deprecated and should not be
        used
        for production code. Instead, you should use Object.getPrototypeOf() to get the
        prototype of an object, and Object.setPrototypeOf() to set the prototype of an
        object.

        <b>prototype:</b>
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
        text1: `// '.prototype' is a special property that all functions have that contains a
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
        'prototype' property is found in every function created in JS.It's the property of a
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
      title: "Array destructuring",
      note: [
        {
          text1: `//Array destructuring is a unique technique that allows you to neatly extract an array's value into new variables.

          //Array destructuring in JavaScript is a syntax that allows you to extract values from arrays and assign them to variables in a concise way. It's a shorthand syntax for extracting multiple values from an array simultaneously.
          
          // Data needed for first part of the section`,
          code1: `const restaurant = {
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
          text1: `// Multi-level array destructuring in JavaScript allows you to extract values not only from the top level of an array but also from nested arrays within it. This is particularly useful when working with arrays of arrays (also known as nested arrays or multidimensional arrays).
          `,
          code1: `console.log(restaurant.order(2, 0))

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
          text1: ``,
          code1: ``
        },
        {
          text1: ``,
          code1: ``
        },
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Object destructuring",
      note: [
        {
          text1: `//Object destructuring is a unique technique that allows you to neatly extract an Object value into new variables.

          //Object destructuring in JavaScript is a syntax that allows you to extract values from Object and assign them to variables in a concise way. It's a shorthand syntax for extracting multiple values from an Object simultaneously.
          
          // Object destructuring in JavaScript is a feature that allows you to extract properties from objects and assign them to variables in a concise way. It's commonly used when working with objects returned from functions or when dealing with complex data structures.
          
          //Object destructuring is a unique technique that allows you to neatly extract an Object value into new variables.
          
          //Object destructuring in JavaScript is a syntax that allows you to extract values from Object and assign them to variables in a concise way. It's a shorthand syntax for extracting multiple values from an Object simultaneously.`,
          code1: `const restaurant = {
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
          text1: `Multi-level array destructuring in JavaScript allows you to extract values not only from the top level of an array but also from nested arrays within it. This is particularly useful when working with arrays of arrays (also known as nested arrays or multidimensional arrays).`,
          code1: `console.log("order ", restaurant.order(2, 0))

          const copy2ar = [...restaurant.starterMenu, ...restaurant.mainMenu];
          console.log(copy2ar);`
        },
        {
          text1: `if we wanted the variable names to be different from the property names?`,
          code1: `const {
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
          text1: `//rest operator is to pack elements into an array

          // The operator is used to put some user-supplied values into an Array. The text after the rest operator references the values you wish to encase inside an array. You can only use it before the last parameter in a function definition.
          
          // While the spread operator expands elements, the rest operator condenses them into a single entity within function parameters or array destructuring.It collects remaining elements into a designated variable, facilitating flexible function definitions and array manipulation
          
          // Rest Parameter (...args) Details:
          
          // <b>Collecting Function Arguments</b>: The rest parameter syntax allows a function to accept an indefinite number of arguments as an array. This is particularly useful when you want to create functions that can accept a variable number of arguments.
          
          // <b>Collecting Remaining Array Elements</b>: In array destructuring, the rest parameter collects the remaining elements into a new array. This can be helpful when you want to extract certain elements from an array and gather the rest into a separate variable.
          
          // <b>Combining with Destructuring</b>: Rest parameters can be combined with array destructuring to collect remaining elements into a separate array. This allows for flexible handling of arrays, especially when the length of the array is not fixed.
          
          // <b>Function Signatures</b>: Rest parameters are commonly used in function signatures to indicate that a function can accept multiple arguments and gather them into an array within the function body.`,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "spread operator",
      note: [
        {
          text1: `//The spread operator is to unpack an array
          // The spread operator, denoted by three consecutive dots (...), is primarily used for expanding iterables like arrays into individual elements. This operator allows us to efficiently merge, copy, or pass array elements to functions without explicitly iterating through them.
          
          // <b>Expanding Iterables</b>:- The spread operator is primarily used to expand an iterable (like arrays, strings, etc.) into individual elements. It essentially spreads the values of an iterable into a new context.
          
          // <b>Copying Arrays</b>:- When used with arrays, the spread operator creates a shallow copy of the array. This means it creates a new array and copies over the values from the original array.

          he spread operator in JavaScript creates a shallow copy of an object or an array.

          For objects, it copies the object's properties, but if those properties are themselves objects, they are not cloned. Instead, references to those nested objects are copied. This means changes to nested objects in the copied object will also affect the original object, as they refer to the same objects in memory.

          Similarly, for arrays, it creates a shallow copy. The elements themselves are copied, but if those elements are objects, they are not cloned. Changes to these nested objects within the copied array will also affect the original array.

          To perform a deep copy, where nested objects are also cloned, you would need to use techniques like <b>recursion or specialized libraries such as Lodash's cloneDeep</b> function.`,
          code1: `function deepCopy(obj) {
            if (obj === null || typeof obj !== 'object') {
                return obj;
            }
            
            let copy = Array.isArray(obj) ? [] : {};
            
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    copy[key] = deepCopy(obj[key]);
                }
            }
            
            return copy;
        }
        
        const originalObject = {
            name: 'John',
            age: 30,
            address: {
                city: 'New York',
                country: 'USA'
            }
        };
        
        const deepCopyObject = deepCopy(originalObject);
        
        // Modify the deep copy
        deepCopyObject.name = 'Alice';
        deepCopyObject.address.city = 'Los Angeles';
        
        console.log(originalObject); // { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } }
        console.log(deepCopyObject); // { name: 'Alice', age: 30, address: { city: 'Los Angeles', country: 'USA' } }
        `
        },
        {
          text1: `
          // <b>Concatenating Arrays</b>:- It allows for easily concatenating or merging multiple arrays into a single array.
          
          // <b>Passing Arguments</b>:- Spread is frequently used when calling functions that expect a variable number of arguments. It can pass each element of an array as an argument to the function.
          
          // <b>Object Literals</b>:- It can also be used to merge properties of objects into a new object.
          
          // <b>Iterating Over Strings</b>: With strings, the spread operator can be used to split the string into individual characters.`,
          code1: `const restaurant = {
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
          text1: ` As mentioned in the comments <b>...</b> is bound to specific use cases. <b>\${...args}</b> wouldn't even make much sense. What should be the result? E.g. if <b>\${...args}</b> would be equivalent to <b>\${args[0],args[1]}</b>, then it would evaluate to the value of <b>args[1]</b>, because here <b style="color:red;"> ,</b> is a comma operator.`,
          code1: `    const myName = "anand";
          const myNameCopy = [...myName];
          console.log('my name is \${ [...myName] } - \${ myNameCopy }')
          Output:
          my name is a,n,a,n,d - a,n,a,n,d
           
          --------------------------------
           
          var values = [25, 50, 75, 100]
          // This:
          console.log(Math.max(25, 50, 75, 100)); // => 100
           
          // Is the same as this:
          console.log(Math.max(...values)); // => 100
          console.log([...values].toString()); // => 25,50,75,100 in string form`
        },
        {
          text1: `// hallow copy Using spread operator
          // hallow copy is a bit-wise copy of an object which makes a new object by copying the memory address of the original object. That is, it makes a new object by which memory addresses are the same as the original object.`,
          code1: `const newRestaurant = { since: 1992, ...restaurant, founder: 'annd' };
          console.log(newRestaurant)
          
          const restaurantCopy = { ...restaurant }
          restaurantCopy.name = 'dabha'
          console.log("shallo copy restaurant", restaurantCopy)
          console.log("old restaurant", restaurant)`
        },
        {
          text1: `// Deep copy, copies all the fields with dynamically allocated memory. That is, every value of the copied object gets a new memory address rather than the original object.

          // How do I deep copy an object.
          // There are several ways I think. A common and popular way is to use JSON.stringify() and JSON.parse().`,
          code1: `const oldObj = { a: { b: 10 }, c: 2 };
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
          text1: ``,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "for...of loop",
      note: [
        {
          text1: `// A <b>for...of loop</b> operates on the values sourced from an iterable one by one in sequential order. Each operation of the loop on a value is called an iteration, and the loop is said to iterate over the iterable. Each iteration executes statements that may refer to the current sequence value.

          // The for..of loop in JavaScript allows you to iterate over iterable objects (arrays, sets, maps, strings etc).
          `,
          code1: `const students = ['John', 'Sara', 'Jack', 'red', 'green', 'blue'];

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
          text1: ``,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "Short-Circuiting with the Logical OR (||) Operator",
      note: [
        {
          text1: `Short circuiting works by evaluating an expression from left to right and returning the value of the first operand that determines the final result.
          
          In the case of OR, the expression is evaluated until we get one true result because the result will always be true, independent of the further conditions. If there is an expression with ||(logical OR), and the first operand itself is true, then a short circuit occurs, evaluation stops, and true is returned. OR short-circuiting can also be used to replace if else statements just like AND short-circuiting in JavaScript. In JavaScript true||expression always returns true and the false || expression always returns the expression.

        The logical OR operator (<b>||</b>) returns <b>true</b> if at least one of its operands is <b>true</b>, and it returns <b>false</b> only if both operands are <b>false</b>. Like the <b>&&</b> operator, it also short-circuits its evaluation. If the left operand is <b>true</b>, there's no need to evaluate the right operand because the result is already determined to be <b>true</b>.

        <b>Logical OR (||)</b>: When using ||, if the first operand evaluates to true, the second operand is not evaluated because the result of the OR operation will always be true regardless of the second operand's value. Again, this is short-circuiting. For example:
        <span style="color:red">
        if (condition1 || condition2) {
        Code block
        }
        </span>
        // Here, if <b>condition1</b> evaluates to true, <b>condition2</b> will not be evaluated because the overall result of the <b>||</b> operation will be true anyway.

        // Short circuiting can be useful for improving performance and preventing potential errors, especially when the evaluation of the second operand involves complex or expensive operations, or when evaluating it could lead to unintended side effects.

        // in the case of the OR operator, short circuiting means that if the first value is a truthy value, it will immediately return that first value.
`,
          code1: `// First operand is true and operator is ||,
          // evaluation stops and true is returned.
          console.log(true || false || false)
          // Evaluation stops at the second operand(true).
          console.log(false || true || true || false)
          
          console.log(3 || 'ram') // 3
          console.log('' || 'ram') // ram
          console.log(true || 0) // true
          console.log(undefined || null) // null
          console.log(undefined || 0 || '' || 'hello' || 23 || null) // hello
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
      title: "Short-Circuiting with the Logical AND && Operator",
      note: [
        {
          text1: `//Short circuiting works by evaluating an expression from left to right and returning the value of the first operand that determines the final result.


        // Falsy Values
        // <b>'' (empty string)</b>: An empty string in JavaScript is considered falsy. Therefore, the condition evaluates to false, and the code block inside the if statement will not be executed.
        
        // <b> 0 </b>: The number zero is considered falsy in JavaScript. Therefore, the condition evaluates to false, and the code block inside the if statement will not be executed.
        
        // <b>null</b>: The null value is considered falsy in JavaScript. Therefore, the condition evaluates to false, and the code block inside the if statement will not be executed.
        
        // In JavaScript, values other than false, 0, '' (empty string), null, undefined, and NaN are considered truthy. Understanding these truthy and falsy values is crucial when writing conditional statements and logical operations in JavaScript.
        
        // Understanding truthy and falsy values is crucial as they play a significant role in conditional statements and logical operations.
        
        // Short circuiting refers to the behavior of logical operators && (logical AND) and || (logical OR) in programming languages.
        
        // Logical AND (&&): When using &&, if the first operand evaluates to false, the second operand is not evaluated because the result of the AND operation will always be false regardless of the second operand's value. This is known as short-circuiting. For example:
        
        // if (condition1 && condition2) {
        // Code block
        // }
        
        // In this case, if condition1 evaluates to false, condition2 will not be evaluated because the overall result of the && operation will be false anyway.
        
        // In JavaScript, short-circuit evaluation occurs when using logical operators like <b>&&</b> (AND) and <b>||</b> (OR). Let's take a closer look at each of these operators.
        
        // Short-Circuiting with the Logical AND (&&) Operator
        
        // The logical AND operator (<b>&&</b>) returns <b>true</b> if both of its operands are <b>true</b>, and it returns <b>false</b> if at least one of them is <b>false</b>. However, it doesn't necessarily evaluate both operands. If the left operand is <b>false</b>, there's no need to evaluate the right operand because the result is already determined to be <b>false</b>. This is where short-circuiting comes into play.
        
        // The logical AND expression is a short-circuit operator. As each operand is converted to a boolean, if the result of one conversion is found to be false, the AND operator stops and returns the original value of that falsy operand; it does not evaluate any of the remaining operands.`,
          code1: `
        const a1 = 10;
        const b1 = 'a';
        const c1 = null;
        const d1 = 'c'
        
        console.log(a1 && b1 && c1 && d1) // null
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
      title: "Nullish coalescing operator (??)",
      note: [
        {
          text1: `// Nullish coalescing operator (??)

        // The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
        
        // Remember that a nullish value and a falsy value are different concepts. While <b>null, undefined, 0, '', false, and NaN</b> are considered falsy values, only <b>null</b> and <b>undefined</b> are considered nullish values.
        `,
          code1: `       
        const foo = null ?? 'default value';
        console.log(foo); // expected output: "default value" 
        const baz = 0 ?? 42;
        console.log(baz); // expected output: 0 
        `
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
      title: "logical assignment operator (&&=) (||=) (??=)",
      note: [
        {
          text1: `
          Logical OR assignment operator (||=)
Logical AND assignment operator (&&=)
Nullish coalescing assignment operator (??=)

        <div class='table-res'>
        <table>
        <thead>
        <tr>
        <th>Logical Assignment Operators</th>
        <th>Logical Operators</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>x ||= y</td><td>x || (x = y)</td>
        </tr>
        <tr><td>x &amp;&amp;= y</td><td>x &amp;&amp; (x = y)</td></tr>
        <tr><td>x ??= y</td><td>x ?? (x = y);</td></tr>
        </tbody>
        </table>
        </div>
        `,
          code1: `const rest1 = {
          name: 'maa wanta gadhi',
          numGuests: 20
        }
        const rest2 = {
          name: 'mana biryani',
          numGuests: 0
        }
        const rest3 = {
          name: 'rajavaaru',
          owner: 'ramu'
        }
        
        // OR Assignment operator:--
        rest1.numGuests = rest1.numGuests || 10
        rest2.numGuests = rest2.numGuests || 10
        
        // using OR Assignment operator
        rest1.numGuests ||= 10
        rest2.numGuests ||= 10
        
        console.log(rest1) // {name: 'maa wanta gadhi', numGuests: 20}
        console.log(rest2) // {name: 'mana biryani', numGuests: 10}
        
        //-----------------

        // nullish assignment operator(null or undefined):--
        rest1.numGuests ??= 10
        rest2.numGuests ??= 10
        
        console.log(rest1) // {name: 'maa wanta gadhi', numGuests: 20}
        console.log(rest2) // {name: 'mana biryani', numGuests: 10}
        
        //-----------------

        // AND assignment operator:--
        rest1.owner = rest1.owner && "value available"
        rest3.owner = rest3.owner && "value available"
        
        // using AND assignment operator
        rest1.owner &&= "value available"
        rest2.owner &&= "value available"
        
        console.log(rest1) // {name: 'maa wanta gadhi', numGuests: 20, owner: undefined}
        console.log(rest2) // {name: 'mana biryani', numGuests: 10}
        
        `
        }
      ]
    },
    {
      id: 1,
      title: "Optional chaining (?.)",
      note: [
        {
          text1: `// is a feature that simplifies the process of accessing properties and methods of nested objects or arrays when intermediate properties may be null or undefined.

        // let user = {}; // user has no address
        
        `,
          code1: `        
        console.log(user.address ? user.address.street ? user.address.street.name : null : null);
        console.log(restaurant.hours.mon?.open)
        console.log(restaurant.openingHours?.mon?.open)
        
        
        const weeks = ['mod','tue','wed','thu','fri','sat','sun'];

for(let day of weeks){
    const openH = restaurant.hours[day]?.open ?? 'Closed'
    console.log('On \${day} we open at \${openH}')
}

//Methods
console.log(restaurant.order(2,0) ?? 'Method does not exist')
console.log(restaurant.orderMaaVandaGadhi?.(2,1) ?? 'Method does not exist')


// Array
// const users = [{uname:'ram', area:'wgl'}];
const users = [];
console.log(users[0]?.area ?? "User Array Empty");

// old use case
if(users.length > 0) { console.log(users[0].area) } else { console.log("User Array Empty") }
        `
        },
      ]
    },
    {
      id: 1,
      title: "Object Literal",
      note: [
        {
          text1: `JavaScript Object Literal is a data type used to define objects in JavaScript. It is a syntax for creating an object in JavaScript that is composed of key-value pairs. It is a lightweight and efficient way to create and store data. It is a great way to store related data in an organized manner.`,
          code1: `const hours = {
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
          }
          
          const restaurant = {
            name: 'Classico Italiano',
            location: 'Via Angelo Tavanti 23, Firenze, Italy',
            categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
            starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
            mainMenu: ['Pizza', 'Pasta', 'Risotto'],
          
            order(startIndex, mainIndex) {
              return [this.starterMenu[startIndex], this.mainMenu[mainIndex]]
            },
          
            hours,
            orderDelivery({
              time = "8:40",
              startIndex,
              mainIndex = 0,
              address
            }) {
              // object Parameters destructuring
              // default values
              return 'Food item \${this.starterMenu[startIndex]} and \${this.mainMenu[mainIndex]} scheduled to delivey on \${time} at address : \${address} '
            }
          };
          
          console.log(restaurant)

// Output : --

          {name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), mainMenu: Array(3), …}
categories
: 
(4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
hours
: 
{thu: {…}, fri: {…}, sat: {…}}
location
: 
"Via Angelo Tavanti 23, Firenze, Italy"
mainMenu
: 
(3) ['Pizza', 'Pasta', 'Risotto']
name
: 
"Classico Italiano"
order
: 
ƒ order(startIndex, mainIndex)
orderDelivery
: 
ƒ orderDelivery({ time = "8:40", startIndex, mainIndex = 0, address })
starterMenu
: 
(4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
[[Prototype]]
: 
Object

          `
        },
      ]
    },
    {
      id: 1,
      title: "this",
      note: [
        {
          text1: `In JavaScript, the <b>this</b> keyword refers to the context within which a function is executed. It represents the current execution context and provides a way to access the properties and methods of the current object.

          In JavaScript, the <b>this</b> keyword always refers to an object. The thing about it is that the object it refers to will vary depending on how and where this is being called.
    
          The value of this depends on how a function is called:
          
          <b>1) Global Context:</b>
          When used outside of any function, <b>this</b> refers to the global object. In a browser environment, the global object is <b>window</b>.
          
          
          <b>2) Function Context:</b>
          When used within a function, the value of <b>this</b> depends on how the function is called.
          If the function is called as a method of an object, <b>this</b> refers to the object itself.
          If the function is called as a standalone function, <b>this</b> refers to the global object (<b>window</b> in browsers) in non-strict mode, or it is <b>undefined</b> in strict mode.
    
          <b>A note about arrow functions:</b>
          In arrow functions, JavaScript sets the this lexically. This means that the arrow function doesn't create its own execution context but inherits the this from the outer function where the arrow function is defined.
    
          In most cases, this means this will refer to the window object as well:
    
          <span style="color:red">const show = () => this</span>
          console.log('arrow function this', show())

          It's important to notice this because, for example, if we try to implement an arrow function to it as an object method, we won't be able to access the object through the this keyword:`,
          code1: `      const person = {
            name: 'Pedro',
            surname: 'Sanchez',
            sayName: () => this.name + ' ' + this.surname
        }
  
        console.log(person.sayName());`
        },
        {
          text1: `      3) Constructor Context:
          When a function is used as a constructor (i.e., called with the 'new' keyword), 'this' refers to the newly created object instance.
    
          4) Event Handler Context:
          When used in event handlers (e.g., in an event listener), this typically refers to the element that triggered the event.
          
          <b>A note about strict-mode:</b>
          When using strict-mode, calling 'this' within a function will return undefined.
          `,
          code1: `      "use strict";

          function show() {
              console.log(this);
          }
          show();`
        },
        {
          text1: `As a side comment, if you're not familiar with what strict-mode is, following the MDN docs:

          JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". Strict mode isn't just a subset: it intentionally has different semantics from normal code.
    
          Strict mode makes several changes to regular JavaScript semantics:
    
          > Eliminates some JavaScript silent errors by changing them to throw errors.
          > Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
          > Prohibits some syntax likely to be defined in future versions of ECMAScript.
          How to Use this in an Event Listener
    
          When using <b>this</b> in an event listener, this will refer to the DOM element that fired the event.`,
          code1: `      document.getElementById('testBtn').addEventListener('click', function() {
            console.log('this in a event', this);
        })`
        },
        {
          text1: `In our case, we added the event listener to a button element: <button id="testBtn">TEST</button>

          And after clicking it, we get the following in our console:
    
          <b>'this' Methods (call, apply and bind):</b>
          To complicate the subject a little more, javascript provides three native methods that can be used to manipulate the way the this keyword behaves. These methods are <b>call</b>, <b>apply</b> and <b>bind</b>. Let's see how they work.
    
          Here are some examples to illustrate the usage of <b>this</b>:`,
          code1: `      // Global context
          console.log(this === window); // true
          
          // Method context
          const obj = {
            name: 'Object',
            greet() {
              console.log('Hello, \${this.name}!');
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
          });`
        },
        {
          text1: `Understanding the context of <b>this</b> is essential for working effectively with objects, constructors, and event handling in JavaScript. It allows developers to write more flexible and dynamic code by accessing and manipulating object properties within different execution contexts. However, it's important to be cautious when dealing with <b>this</b>, as its behavior can be affected by various factors such as function binding, arrow functions, and strict mode.`,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      section: "CLASSES",
      title: "Class",
      note: [
        {
          text1: `Classes are a core concept in object-oriented programming, and TypeScript has full support for them. Classes allow developers to define blueprints for objects that share the same properties and methods. They can also include constructors, access modifiers, and inheritance.`,
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
          text1: `// The createStatic() method is considered a static method because it doesn't depend on
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
          Copy code
          const prefix = "user";
          const id = 42;
          
          const user = {
            ['\${prefix}_id']: id
          };
          
          console.log(user.user_id); // Outputs: 42


          // Destructuring
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
          
          // <span style="color:red"> fieldName in objectName</span>

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
          <span style="color:grey"> Circle.#count++;</span>
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
          code1: `
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
          text1: `Since <b>e1</b> is an instance of the <b>Employee</b> class, it's also an instance of the <b>Person</b> and <b>Object</b> classes (base classes).

          <b> -> Symbol.hasInstance</b>
          In ES6, the <b>instanceof</b> operator uses the <b>Symbol.hasInstance</b> function to check the relationship. The <b>Symbol.hasInstance()</b> accepts an object and returns <b>true</b> if a type has that object as an instance. For example:`,
          code1: `class Person {
            constructor(name) {
              this.name = name;
            }
          }
          
          let p1 = new Person('John');
          
          console.log( Person[Symbol.hasInstance] (p1)); // true`
        },
        {
          text1: `Since the <b>Symbol.hasInstance</b> is defined on the Function prototype, it's automatically available by default in all functions and classes

          You can redefine the <b>Symbol.hasInstance</b> on a subclass as a static method. For example:`,
          code1: `class Person {
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
          text1: ``,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      section: `PROMISES & ASYNC/AWAIT`,
      title: "Promises",
      note: [
        {
          text1: `<a href="https://javascript.info/promise-basics" target="_blank">promise-basics</a>
          <b>Promise</b> : An object that is used as a placeholder for the future result of an asynchronous operation
          (or)
          <b>Promise</b> : A container for an asynchronously delivered value.
          (or)
          <b>Promise</b> : A container for a future value.

          In JavaScript, a <b>Promise</b> is a special object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are a way to handle asynchronous operations more elegantly compared to traditional callback functions.

          <b>Description</b>
A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

<b>What is a Promise?</b>
A Promise has three states:
<b>Pending</b>: The initial state. The operation is ongoing, and the final value isn't available yet.
<b>Fulfilled</b>: The operation completed successfully, and the promise has a resolved value.
<b>Rejected</b>: The operation failed, and the promise has a reason for the failure.
Creating a Promise
You create a promise using the Promise constructor, which takes a function with two arguments: <u>resolve</u> and <u>reject</u>. These are functions you call to transition the promise from the pending state to either fulfilled or rejected.

A promise starts in a pending state. That means the process is not complete. If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state.

For example, when you request data from the server by using a promise, it will be in a pending state. When the data arrives successfully, it will be in a fulfilled state. If an error occurs, then it will be in a rejected state.



a promise is an object that represents the initial evaluation and eventual result of an asynchronous operation in one of three states pending, fulfilled, and rejected. In any asynchronous operation, a promise will:

=> exists first in a <u>pending</u> state while the operation is being evaluated or processed
=> proceed to be <u>settled</u> in either a <u>fulfilled</u> state if the operation is completed successfully or a <u>rejected</u> state and consequently throws an error if the operation fails.

The code block below shows a practical example of how to work with promises. First, we initiate a <u>new promise</u> using the <u>Promise constructor</u> and pass a callback function to the constructor containing the code we wish to run asynchronously. The first and second parameters of this callback automatically provide us with two functions; The first function (commonly named the <u>resolve</u> function) takes in an argument that would be the result of the promise if the asynchronous operation is completed (fulfilled). On the other hand, the second function (commonly named the <u>reject</u> function) takes in an argument that would be the error thrown by the promise when the asynchronous fails to complete successfully(rejected). When working with a promise, we would commonly chain to it two types of handler methods that hold code that will run only after the promise has been <b>settled</b>.
          `,
          code1: `       
//--------------
let checkEven = new Promise((resolve, reject) => {
            let number = 3;
            if (number % 2 === 0) resolve("The number is even!");
            else reject("The number is odd!");
        });

        checkEven
            .then((message) => console.log(message)) // On success
            .catch((error) => console.error(error)); // On failure`,
          img : `../assets/images/javascript/Promise.webp`
        },
        {
          text1: `<table border="0">
          <tbody>
            <tr>
              <th>Method</th>
              <th>Description</th>
            </tr>
            <tr>
              <td><code>all(iterable)</code></td>
              <td>Waits for all promises to be resolved or any one to be rejected</td>
            </tr>
            <tr>
              <td><code>allSettled(iterable)</code></td>
              <td>Waits until all promises are either resolved or rejected</td>
            </tr>
            <tr>
              <td><code>any(iterable)</code></td>
              <td>Returns the promise value as soon as any one of the promises is fulfilled</td>
            </tr>
            <tr>
              <td><code>race(iterable)</code></td>
              <td>Wait until any of the promises is resolved or rejected</td>
            </tr>
            <tr>
              <td><code>reject(reason)</code></td>
              <td>Returns a new Promise object that is rejected for the given reason</td>
            </tr>
            <tr>
              <td><code>resolve(value)</code></td>
              <td>Returns a new Promise object that is resolved with the given value</td>
            </tr>
            <tr>
              <td><code>catch()</code></td>
              <td>Appends the rejection handler callback</td>
            </tr>
            <tr>
              <td><code>then()</code></td>
              <td>Appends the resolved handler callback</td>
            </tr>
            <tr>
              <td><code>finally()</code></td>
              <td>Appends a handler to the promise</td>
            </tr>
          </tbody>
        </table>`,
          code1: ``
        },
        {
          text1: `The function passed to <u>new Promise</u> is called the executor. When <u>new</u> Promise is created, the executor runs automatically. It contains the producing code which should eventually produce the result. In terms of the analogy above: the executor is the “singer”.

Its arguments <u>resolve</u> and <u>reject</u> are callbacks provided by JavaScript itself. Our code is only inside the executor.

When the executor obtains the result, be it soon or late, doesn't matter, it should call one of these callbacks:

<u>resolve(value)</u> — if the job is finished successfully, with result <u>value</u>.
<u>reject(error)</u> — if an error has occurred, error is the <u>error</u> object.
<u>So to summarize</u>: the executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls <u>resolve</u> if it was successful or <u>reject</u> if there was an error.

The <u>promise</u> object returned by the <u>new</u> Promise constructor has these internal properties:

<u>state</u> — initially <u>"pending"</u>, then changes to either <u>"fulfilled"</u> when resolve is called or <u>"rejected"</u> when <u>reject</u> is called.
<u>result</u> — initially <u>undefined</u>, then changes to <u>value</u> when <u>resolve(value)</u> is called or <u>error</u> when <u>reject(error)</u> is called.`,
          code1: `let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});
`
        },        
        {
          text1: `Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function. Imagine a function, createAudioFileAsync(), which asynchronously generates a sound file given a configuration record and two callback functions: one called if the audio file is successfully created, and the other called if an error occurs.`,
          code1: `function successCallback(result) {
            console.log(\`Audio file ready at URL: \${result}\`);
          }
          
          function failureCallback(error) {
            console.error(\`Error generating audio file: \${error}\`);
          }
          
          createAudioFileAsync(audioSettings, successCallback, failureCallback);

          //----
          // If 'createAudioFileAsync()' were rewritten to return a promise, you would attach your callbacks to it instead:
      
          Copy to Clipboard
          createAudioFileAsync(audioSettings).then(successCallback, failureCallback);`
        },
        {
          text1: `The most important, fundamental one is <b>.then</b>.

The first argument of <u>.then</u> is a function that runs when the promise is resolved and receives the result.
The second argument of <u>.then</u> is a function that runs when the promise is rejected and receives the error.

The <b>Promise.then()</b> method in JavaScript takes up to two parameters:

    <u>onFulfilled (Required)</u>: A callback function that is executed when the promise is successfully resolved (i.e., when the promise is "fulfilled").
    <u>onRejected (Optional)</u>: A callback function that is executed when the promise is rejected (i.e., when the promise is "rejected").

    promise.then(onFulfilled, onRejected);

    <b>onFulfilled</b>: This function is called with the value passed to <u>resolve()</u> when the promise is fulfilled.
    <b>onRejected</b>: This function is called with the reason passed to <u>reject()</u> when the promise is rejected.

    Both parameters are optional in the sense that you can call <u>then()</u> with just the <u>onFulfilled</u> handler, and the <u>onRejected</u> handler can be omitted. If no <u>onRejected</u> handler is provided, the rejection will be handled by any subsequent <u>catch()</u> block or the default rejection handler.
`,
          code1: `        //The syntax is:

promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);

"use strict";

        let promise = new Promise(function (resolve, reject) {
            setTimeout(() => {
                if(false){
                    resolve("Done!")
                } else {
                    reject("faild!")
                }
            }, 1000);
        });

        // resolve runs the first function in .then
        promise.then(
            result => console.log(result), // shows "done!" after 1 second
            error => console.log(error) // doesn't run
        );`
        },
        {
          text1: `<b>catch</b>
If we're interested only in errors, then we can use <u>null</u> as the first argument: <u>.then(null, errorHandlingFunction)</u>. Or we can use <u>.catch(errorHandlingFunction)</u>, which is exactly the same:
The call <b>.catch(f)</b> is a complete analog of <b>.then(null, f)</b>, it's just a shorthand.

<b>Using catch() to handle rejections</b>
If you do not provide an <b>onRejected</b> callback in <b>then()</b>, you can chain a <b>catch()</b> method to handle the rejection:
`,
          code1: `let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise.catch(alert); // shows "Error: Whoops!" after 1 second

//------------------

        // ----------------callback function---------------------
        function loadScript(src, callback) {
            let script = document.createElement('script');
            script.src = src;

            // Debugging: Log the script element
            // console.log(script);

            // On load, execute the callback with the script element
            script.onload = () => callback(null, script); // Passing 'null' for error since it's loaded successfully
            // On error, execute the callback with an error message
            script.onerror = () => callback(new Error(\`Script load error for \${src}\`));

            document.head.append(script);
        }

        const callFuncion = (err, script) => {
            try {
                if (err) {
                    // Log the error if the script loading failed
                    console.log("Error:", err.message);
                } else {
                    // If script is loaded successfully, log the script and its type
                    console.log("Script loaded successfully:", script);
                    console.log("Type of script:", typeof script); // This will log 'object'
                    window.open(script.src)
                }
            } catch (err) {
                console.log("Caught error:", err);
            }
        }

        // Calling loadScript with the URL of Lodash and the callback function
        loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js", callFuncion);


        // ----------------promise---------------------

        function loadScript(src) {
            return new Promise(function (resolve, reject) {
                let script = document.createElement('script');
                script.src = src;

                script.onload = () => resolve(script);
                script.onerror = () => reject(new Error(\`Script load error for \${src}\`));

                document.head.append(script);
            });
        }

        let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

        promise.then(
            script => {
                console.log(\`\${script.src} is loaded!\`);
                window.open(script.src);
            },
            error => console.log(\`Error: \${error.message}\`)
        );

        promise.then(script => console.log('Another handler...', script));



        //--------------Ex : 2-----------------

        &lt;html&gt;
&lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;style&gt;
        .message-ball {
            font-size: 20px;
            line-height: 200px;
            text-align: center;
        }

        .circle {
            transition-property: width, height;
            transition-duration: 2s;
            position: fixed;
            transform: translateX(-50%) translateY(-50%);
            background-color: red;
            border-radius: 50%;
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

    &lt;button onclick=&quot;go()&quot;&gt;Click me&lt;/button&gt;

    &lt;script&gt;
        function go() {
            showCircle(150, 150, 100).then(div =&gt; {
                div.classList.add(&#39;message-ball&#39;);
                div.append(&quot;Hello, world!&quot;);
            });
        }

        function showCircle(cx, cy, radius) {
            let div = document.createElement(&#39;div&#39;);
            div.style.width = 0;
            div.style.height = 0;
            div.style.left = cx + &#39;px&#39;;
            div.style.top = cy + &#39;px&#39;;
            div.className = &#39;circle&#39;;
            document.body.append(div);

            return new Promise(resolve =&gt; {
                setTimeout(() =&gt; {
                    div.style.width = radius * 2 + &#39;px&#39;;
                    div.style.height = radius * 2 + &#39;px&#39;;

                    div.addEventListener(&#39;transitionend&#39;, function handler() {
                        div.removeEventListener(&#39;transitionend&#39;, handler);
                        resolve(div);
                    });
                }, 0);
            })
        }
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
`
        },
        {
          text1: `<b>Cleanup: finally</b>
Just like there's a <u>finally</u> clause in a regular <u>try {...} catch {...}</u>, there's <u>finally</u> in promises.

The call <u>.finally(f)</u> is similar to <u>.then(f, f)</u> in the sense that <u>f</u> runs always, when the promise is settled: be it resolve or reject.

The idea of <u>finally</u> is to set up a handler for performing cleanup/finalizing after the previous operations are complete.

E.g. stopping loading indicators, closing no longer needed connections, etc.

Think of it as a party finisher. No matter was a party good or bad, how many friends were in it, we still need (or at least should) do a cleanup after it.


Please note that <u>finally(f)</u> isn't exactly an alias of <u>then(f,f)</u> though.

There are important differences:
1) A <u>finally</u> handler has no arguments. In <u>finally</u> we don't know whether the promise is successful or not. That's all right, as our task is usually to perform “general” finalizing procedures.
Please take a look at the example above: as you can see, the finally handler has no arguments, and the promise outcome is handled by the next handler.

2) A <u>finally</u> handler “passes through” the result or error to the next suitable handler.
For instance, here the result is passed through finally to then:`,
          code1: `//The code may look like this:
          // new Promise((resolve, reject) => {
  /* do something that takes time, and then call resolve or maybe reject */
})
  // runs when the promise is settled, doesn't matter successfully or not
  .finally(() => stop loading indicator)
  // so the loading indicator is always stopped before we go on
  .then(result => show result, err => show error)
  
  
  new Promise((resolve, reject) => {
  setTimeout(() => resolve("value"), 2000);
})
  .finally(() => alert("Promise ready")) // triggers first
  .then(result => alert(result)); // <-- .then shows "value"`
        },
        {
          text1: `As you can see, the <u>value</u> returned by the first promise is passed through <u>finally</u> to the next <u>then</u>.
That's very convenient, because <u>finally</u> is not meant to process a promise result. As said, it's a place to do generic cleanup, no matter what the outcome was.
And here's an example of an error, for us to see how it's passed through <u>finally</u> to <u>catch</u>:

3) A <u>finally</u> handler also shouldn't return anything. If it does, the returned value is silently ignored.
The only exception to this rule is when a <u>finally</u> handler throws an error. Then this error goes to the next handler, instead of any previous outcome.

To summarize:
A <u>finally</u> handler doesn't get the outcome of the previous handler (it has no arguments). This outcome is passed through instead, to the next suitable handler.
If a <u>finally</u> handler returns something, it's ignored.
When <u>finally</u> throws an error, then the execution goes to the nearest error handler.
These features are helpful and make things work just the right way if we use finally how it's supposed to be used: for generic cleanup procedures.`,
          code1: `new Promise((resolve, reject) => {
  throw new Error("error");
})
  .finally(() => alert("Promise ready")) // triggers first
  .catch(err => alert(err));  // <-- .catch shows the error`
        },

      ]
    },
    {
      id: 1,
      title: "Promise Chaining",
      note: [
        {
          text1: `A Promise is an object representing the eventual completion or failure of an asynchronous operation.
          Chaining: When you chain promises, you can perform a series of asynchronous operations in a specific order. Each .then() method returns a new promise, which can be used to perform the next asynchronous operation.
          
          A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step. In the old days, doing several asynchronous operations in a row would lead to the classic callback hell:
          
          With promises, we accomplish this by creating a promise chain. The API design of promises makes this great, because callbacks are attached to the returned promise object, instead of being passed into a function.
          
          const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);

          This second promise (promise2) represents the completion not just of doSomething(), but also of the successCallback or failureCallback you passed in — which can be other asynchronous functions returning a promise. When that's the case, any callbacks added to promise2 get queued behind the promise returned by either successCallback or failureCallback.

          Promises are not just the mechanism to performif this occurs then do that sort of operation. That's the building block, but it turns out we can string multiple promises together to represent a sequence of operations. Understanding promise chaining is the building block to understanding javascript async/await.

The key to making this work is built on the fact that:
Every time you call then(), catch() on a promise, it creates and returns a new promise which can be chained further.

<b>Function definition of then() and catch()</b>
- <b>then(onFulfilled, onRejected)</b>: It takes two arguments as the callback functions. One for handling the fulfilled state (success handler) and the other for handling the rejected state(error handler) of the promise. Both the callback functions return a promise object.
- <b>catch(onRejected)</b>: It takes one argument as the callback function i.e to handle the rejected state of the promise. The callback function onRejected also returns a promise object.

<b>1. Chaining multiple synchronous tasks using .then()</b>
Let's understand the synchronous task chaining with a simple example of a number game wherein each <b>synchronous</b> step is to be performed sequentially. The steps are :
You select a random number <b>→ then</b> multiply the number by 2 <b>→ then</b> Add 2 to the multiplied number <b>→ then</b> the game is completed successfully

Also, the <b>data can be passed down the chain using return statements</b>. In the Ex:1 using the statement <b>return(randomNumbar *2) at Step 2</b>, we pass the value to <b>Step3</b>, and 8 is printed.
          `,
          code1: `// callback hell
          doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log(\`Got the final result: \${finalResult}\`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);

// Here's the magic: the "then()" function returns a "new promise", different from the original:

const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);


//----------- Ex : 1 -------------
        function numberGame() {
           return new Promise ((resolve, reject) => {
                setTimeout(() => {
                    resolve(3)
                }, 2000)
            }).then((randomNumber) => {
                // console.log(randomNumber)
                return randomNumber * 2
            }).then((addNumber) => {
                return addNumber + 2
            }).then((num) => {
                return \`The final value is \${num}\`
            }).then(res => console.log(res))
        }
        numberGame()
        // numberGame().then(res => console.log(res))



//---------------- many .then to a single promise  --------------
// A classic newbie error: technically we can also add many .then to a single promise. This is not chaining.

// For example:

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});
`
        },
        {
          text1: `<b>2. Chaining multiple asynchronous tasks using .then()</b>
<b>Mainly promise chaining is used to chain multiple asynchronous task that has to be performed sequentially. Asynchronous task</b> can be chained in a similar way to <b>synchronous task</b>. The only difference is that <b>asynchronous tasks require promises</b>.
Lets understand Asynchronous task chaining with an example. Imagine that your friends are coming over for dinner,and you are planning to serve pasta to them.
Preparation for the party includes the following steps:
You buy grocery from the store <b>→ then</b> prepare pasta <b>→ then</b> serve the pasta. Here each task is performed asynchronously.`,
          code1: `// Step 1: Purchasing groceries
        function serveDinner() {
            return new Promise((resolve, reject) => {
                console.log("Buying groceries...");
                //Step : 1 promise1 - buy grocery
                setTimeout(() => {
                    groceryItems = ['pasta', 'arrabbita sauce', 'coke'];
                    resolve(groceryItems)
                }, 2000)
            }).then((receivedGroceryItems) => {
                // Step2 : grocery items received
                console.log("received items...",receivedGroceryItems.join(", "));
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if(receivedGroceryItems[0] === 'pasta' && receivedGroceryItems[1] === 'arrabbita sauce') {
                            resolve(receivedGroceryItems[0])
                        }
                    }, 3000)
                })
            }).then((receivedPasta) => {
                console.log("preparing pasta...");
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(\`\${receivedPasta} is ready to serve\`)
                    },2000)
                })
            })
        }

        serveDinner().then((item) => {
            console.log(item)            
        })
            
        //-------------------

                // Step 1: Make an API call to fetch data
        function fetchData() {
            return new Promise((resolve, reject) => {
                // Using the fetch API to make a GET request to a fake placeholder API
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json(); // Parse the response as JSON
                    })
                    .then(data => resolve(data))  // Resolve with the fetched data
                    .catch(error => reject(error));  // Reject if an error occurs
            });
        }

        // Step 2: Process the response data (e.g., display user names)
        function processUsers(users) {
            return new Promise((resolve, reject) => {
                if (users && users.length > 0) {
                    // For example, extracting the names of the users
                    const userNames = users.map(user => user.name);
                    resolve(userNames);
                } else {
                    reject(new Error("No users found"));
                }
            });
        }

        // Step 3: Display the processed data or handle further actions
        function displayUserNames(userNames) {
            return new Promise((resolve, reject) => {
                if (userNames.length > 0) {
                    console.log("User Names: ");
                    userNames.forEach(name => console.log(name));
                    resolve("User names displayed successfully");
                } else {
                    reject(new Error("No user names to display"));
                }
            });
        }

        // Putting it all together in a promise chain
        fetchData()
            .then(users => processUsers(users))      // Step 2: Process the fetched users
            .then(userNames => displayUserNames(userNames))  // Step 3: Display the user names
            .then(message => console.log(message))   // Success message
            .catch(error => console.error("Error: ", error));  // Error handling



            //---------------------


                    // Step 1: Make an API call to fetch data
        function fetchData() {
            return new Promise((resolve, reject) => {
                // Using the fetch API to make a GET request to a fake placeholder API
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json(); // Parse the response as JSON
                    })
                    .then(data => resolve(data))  // Resolve with the fetched data
                    .catch(error => reject(error));  // Reject if an error occurs
            });
        }

        function getUserById(users) {
            return new Promise((resolve, reject) => {
                const userById = users.find(e => e.id === 1)
                if (userById) {
                    resolve(userById)
                } else {
                    reject(new Error("users not found"));
                }
            })
        }

        function getAddress(user) {
            return new Promise((resolve, reject) => {
                if (user) {
                    resolve(user.address)
                } else {
                    reject(new Error("user not found"));
                }
            })
        }

        function getGeo(address) {
            return new Promise((resolve, reject) => {
                if (address) {
                    resolve(address.geo)
                } else {
                    reject(new Error("address not found"));
                }
            })
        }

        fetchData().then(users => getUserById(users))
            .then(singleUser => getAddress(singleUser))
            .then(address => getGeo(address))
            .then(geo => console.log(geo))
            .catch(err => console.log("geo not found"))
        `
        },
        {
          text1: ``,
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
      title: "Promise.all()",
      note: [
        {
          text1: `<a href="https://dev.to/dperrymorrow/speed-up-your-code-with-promiseall-3d4i" target="_blank"> speed-up-your-code-with-promiseall </a>
          <a href="https://blog.openreplay.com/promises-in-parallel/" target="_blank"> promises-in-parallel </a>
          The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.
          
          One of the most amazing things about working with Javascript is its concurrency. Meaning it can run your code in parallel instead of waiting for each Promise to finish before moving starting the next. Commonly referred to as "forking".
          
          <b>Promise.all() Method</b>
👉 The <u>Promise.all()</u> method accepts an iterable Object, such as an Array of promises as an input and returns a single promise that resolves to a result array of the input promises.
👉 When all input promises have been resolved or the iterable input does not contain a promise, the returned promise will be resolved.
👉 It rejects immediately when an input promise rejects or non-promise throws an error and will reject with that <u>first rejection message / error message.</u>
👉 It is often used when there are many asynchronous tasks involved that the overall code relies on to work successfully - all of the ones we want to do before we continue to execute the code.
👉 This method aggregates the results of multiple promises.

<b>Fulfillment of Promise.all()</b>
🔹 When an <u>empty iterable</u> is passed, the promise returned by this method is executed synchronously. The resolved value will be an <u>empty array</u>.
🔹 When a <u>non-empty iterable</u> is passed, and all of the promises fulfill or are not promises,the promise returned by this method will be executed asynchronously.

<b>Rejection of Promise.all() : Fail-Fast Behavior</b>
<b>Promise.all()</b> shows <u>fail-fast</u> behavior, that is, Promise.all() <u>asynchronously</u> rejects with the value of the promise that rejected, if any of the passed-in elements are rejected.
          
          JavaScript is an asynchronous language that, most of the time, relies on promises to handle asynchronous operations. Developers face situations where multiple asynchronous tasks need to be executed concurrently, and we need a way to wait until all of them are completed before proceeding. This is where the Promise.all in JavaScript comes into play. In this blog, let us explore what js Promise.all is, its syntax and usage examples, and address common questions such as its differences from Promise. Race, handling non-promise values, managing promise rejections, compatibility, and interplay with async/await.

Promise.all in javaScript can work in the following way-
=> All or Nothing: Promise.all() waits for all promises in the iterable to settle, meaning they either all resolve or at least one rejects.
=> Single Promise Result: It returns a single promise that fulfills with an array of results when all promises in the iterable are fulfilled. The order of the results corresponds to the order of the promises in the iterable.
=> First Rejection: If any promise in the iterable is rejected, the whole Promise.all() is rejected with the reason of the first rejected promise. Subsequent rejections are ignored.

<b>Syntax</b>
The syntax of js Promise.all is relatively straightforward:

<u>Promise.all(iterable);</u> 

Here, iterable is an array or any iterable object containing promises. The Promise.all method returns a single promise that resolves when all the promises in the iterable have been resolved or rejected with the reason of the first promise that was rejected.

This method is useful for when you want to wait for more than one promise to complete.

Given an <u>Iterable</u>(arrays are <u>Iterable</u>), or a promise of an <u>Iterable</u>, which produces promises (or a mix of promises and values), iterate over all the values in the <u>Iterable</u> into an array and return a promise that is fulfilled when all the items in the array are fulfilled. The promise's fulfillment value is an array with fulfillment values at respective positions to the original array. If any promise in the array rejects, the returned promise is rejected with the rejection reason.

<b>Promise.all()</b> is a built-in helper that accepts an array of promises (or generally an iterable). The function returns a promise from where you can extract promises resolved values using a then-able syntax:

<u>If all promises are resolved successfully</u>, then <u>allPromise</u> fulfills with an array containing fulfilled values of the promises. The order of promises in the array does matter — you'll get the fulfilled values in the same order.

<b>But if at least one promise rejects</b>, then <b>allPromise</b> rejects right away (without waiting for the remaining pending promises to resolve) for the same reason.

<b>Example: 1 - all promises fulfilled</b>
To study how <u>Promise.all()</u> works, I'm going to use 2 helpers — <u>resolveTimeout(value, delay)</u> and <u>rejectTimeout(reason, delay)</u>
<u>resolveTimeout(value, delay)</u> returns a promise that fulfills with <u>value</u> after passing delay time.
<u>rejectTimeout(reason, delay)</u>, however, returns a promise that rejects with <u>reason</u> (usually an error) after passing <u>delay</u> time.

Let's access, at the same time, the lists of vegetables and fruits available at the local grocery store. Accessing each list is an asynchronous operation:
<u>const allPromise = Promise.all([...])</u> returns a new promise <u>allPromise</u>.
<u>const lists = await allPromise</u> awaits 1 second until <u>allPromise</u> fulfills with an array containing the first and second promises fulfill values.

Finally, <u>lists</u> contains the aggregated result: <u>[['potatoes', 'tomatoes'], ['oranges', 'apples']]</u>.
Note that the order of the values in the aggregated result corresponds to the order of the promises in the array supplied to <u>Promise.all()</u>:

<b> Example: 2 - one promise rejects</b>
Now imagine the situation the grocery is out of fruits. Let's reject the fruits promise with an error <u>new Error('Out of fruits!')</u>:

In this scenario <u>allPromise = Promise.all([...])</u> returns, as usual, a promise.
After 1 second the second promise rejects with an error <u>new Error('Out of fruits!').</u> This makes <u>allPromise</u> reject right away with the same <u>new Error('Out of fruits!')</u>.

Even if the vegetables' promise has been fulfilled, <u>Promise.all()</u> doesn't take it into account.

Such behavior of <u>Promise.all([...])</u> is named fail-fast. If at least one promise in the promises array rejects, then the promise returned by <u>allPromise = Promise.all([...])</u> rejects too — for the same reason.
`,
          code1: `//syntax 
          const allPromise = Promise.all([promise1, promise2]);

allPromise.then(values => {
  console.log(values); // [resolvedValue1, resolvedValue2]
}).catch(error => {
  console.log(error); // rejectReason of any first rejected promise
});

// --------- In the case of async/await syntax: -----------------

const allPromise = Promise.all([promise1, promise2]);

try {
  const values = await allPromise;
  console.log(values); // [resolvedValue1, resolvedValue2]
} catch (error) {
  console.log(error); // rejectReason of any first rejected promise
}
  
//------------- Ex : 1 -----------
        async function load() {
            const allPromise = Promise.all([
                resolveTimeout(["potatoes", "tomatoes"], 1000),
                resolveTimeout(["oranges", "apples"], 1000)
            ]);

            // wait...
            const lists = await allPromise;

            // after 1 second
            console.log(lists);
            // [['potatoes', 'tomatoes'], ['oranges', 'apples']]
        }

        load();

        function resolveTimeout(value, delay) {
            return new Promise((resolve) => setTimeout(() => resolve(value), delay));
        }

        function rejectTimeout(reason, delay) {
            return new Promise((r, reject) => setTimeout(() => reject(reason), delay));
        }
            
  //--------------- Ex : 2 ------------

          async function load() {
            const allPromise = Promise.all([
                resolveTimeout(["potatoes", "tomatoes"], 1000),
                resolveTimeout(["oranges", "apples"], 1000),
                rejectTimeout(new Error("Time out", 1000))
            ]);

            // wait...
            const lists = await allPromise;

            // after 1 second
            console.log(lists);
            // [['potatoes', 'tomatoes'], ['oranges', 'apples']]
        }

        load();

        function resolveTimeout(value, delay) {
            return new Promise((resolve) => setTimeout(() => resolve(value), delay));
        }

        function rejectTimeout(reason, delay) {
            return new Promise((r, reject) => setTimeout(() => reject(reason), delay));
        }


        //-------------------- Ex : 3 -------------------
// From the below example, it's clear that Promise.all waits till all the promises resolve.
                // A simple promise that resolves after a given time
        const timeOut = (t) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(\`Completed in \${t}\`)
                }, t)
            })
        }

        const durations = [1000, 2000, 3000]

        const promises = []

        durations.map((duration) => {
            // In the below line, two things happen.
            // 1. We are calling the async function (timeout()). So at this point the async function has started and enters the 'pending' state.
            // 2. We are pushing the pending promise to an array.
            promises.push(timeOut(duration))
        })

        console.log(promises) // [ Promise { "pending" }, Promise { "pending" }, Promise { "pending" } ]

        // We are passing an array of pending promises to Promise.all
        // Promise.all will wait till all the promises get resolves and then the same gets resolved.
        Promise.all(promises)
            .then(response => console.log(response)) // ["Completed in 1000", "Completed in 2000", "Completed in 3000"]



        // ----------------- Ex : 4 ---------------------------------------------
                // Simulate API calls using Promises (for demonstration purposes)
        function fetchUserPosts(userId) {
            return new Promise((resolve, reject) => {
                fetch(\`https://jsonplaceholder.typicode.com/posts/\${userId}\`)
                .then(res => res.json())
                .then(posts => {
                    // console.log(posts) 
                    resolve({ userId : posts.userId, title: \`User \${posts.title}\`, age: 30 + posts.id });
                })
            });
        }

        function fetchUserProfile(userId) {
            return new Promise((resolve, reject) => {
                fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`)
                .then(res => res.json())
                .then(users => {
                    // console.log(users) 
                    resolve({ userId : users.id, name: \`User \${users.name}\`, age: 30 + users.id })
                })
            });
        }

        // Function to fetch profiles and posts in parallel for multiple users
        function fetchUserData(userIds) {
            const profilePromises = userIds.map(userId => fetchUserProfile(userId));
            const postPromises = userIds.map(userId => fetchUserPosts(userId));

            // Use Promise.all() to wait for both profile and post data for all users
            return Promise.all([...profilePromises, ...postPromises])
                .then(results => {
                    // console.log(results)
                    // Split results into profiles and posts based on their order
                    const profiles = results.slice(0, userIds.length);
                    const posts = results.slice(userIds.length);

                    // Combine profiles and posts into a structured format
                    const userData = userIds.map((userId, index) => ({
                        profile: profiles[index],
                        posts: posts[index]
                    }));

                    return userData;
                })
                .catch(error => {
                    console.error("Error fetching data:", error);
                    throw error;
                });
        }

        // Example Usage
        const userIds = [1, 2, 3];  // Example user IDs to fetch data for
        fetchUserData(userIds)
            .then(userData => {
                console.log("All user data fetched successfully:");
                console.log(userData);
            })
            .catch(error => {
                console.error("Error occurred:", error);
            });

        `
        },
        {
          text1: `<b>Does JavaScript Promise.all() run in parallel or sequential?</b>
          <a href="https://www.leohuynh.dev/blog/does-promise-all-run-in-parallel-or-sequential" target="_blank">does-promise-all-run-in-parallel-or-sequential</a>
          
          Let's say you have a list of async tasks (each return a Promise).
let promise1 = async function () {
  /* ... */
}
let promise2 = async function () {
  /* ... */
}
let promise3 = async function () {
  /* ... */
}

         What would you choose to run them?

Awaiting each promise one by one:
await promise1()
await promise2()
await promise3()
// do other stuff

Or run them all at once:

await Promise.all([promise1(), promise2(), promise3()])
// do other stuff
          
The first approach is running them sequentially, one after another. It means that the next promise will start only after the previous one is resolved.
Like this:
promise1().then(() => {
  promise2().then(() => {
    promise3().then(() => {
      // do other stuff
    })
  })
})
          
          
          <b>Is Promise.all(iterable) executing all promises?</b>
No, promises cannot "be executed", they do not consist of code that can be run. A promise is created when you start a task, and it represents the results only. It is your code that is executing everything in parallel, by starting all tasks at once to run concurrently. This happens even before (and would also happen without) passing the promises to Promise.all.

Promise.all does only await multiple promises. It doesn't care in what order they get resolved by those tasks, or whether the computations are running in parallel.

<b>is there a convenient way to run an iterable sequencially?</b>
If you already have your promises, you can't do much but Promise.all([p1, p2, p3, …]) (which does not have a notion of sequence). But if you do have an iterable of asynchronous functions, you can indeed run them sequentially. Basically you need to get from

[fn1, fn2, fn3, …]
to
fn1().then(fn2).then(fn3).then(…)

and the solution to do that is using Array::reduce:
iterable.reduce((p, fn) => p.then(fn), Promise.resolve())


The second approach is well-known as running them in <b>parallel</b>, meaning that all promises will start at the same time. It's useful when you don't need to wait for the previous promise to be resolved before starting the next one.

But does it really run in parallel (or all at once)? 

The answer is no. JavaScript is single-threaded programming language, so it can't run multiple things at the exact same time (except for some circumstances such as web workers.) <b>Promise.all()</b> actually runs them concurrently, not in parallel!

What's the difference?

<b>Concurrent programming vs Parallel programming</b>
<u>TL;DR: Concurrent programming is about dealing with a lot of things at once, while parallel programming is about doing a lot of things at once.</u>

A dead-simple example for a 9-year-old kid:
<b>Concurrency</b>: 2 lines of customers ordering food from a single cashier (lines take turns ordering).
<b>Parallelism</b>: 2 lines of customers ordering food at the same time from 2 cashiers.
As so, what <u>Promise.all()</u> does is, it adds the promises to an event loop queue and calls them all together. But it waits for each one to resolve before moving on. <u>Promise.all</u> will stop if the first promise rejects, unless you handle the error yourself (e.g. with <u>.catch()</u>).

That's the major difference between concurrent and parallel, with concurrent execution, promises run one after another but don't have to wait for previous ones to end. They make progress at the same time. In contrast, parallel execution runs promises at the exact same time in separate processes. This allows them to progress completely separately at their own speed.
`,
          code1: ``
        },
        {
          text1: `Asynchronous JavaScript was introduced to help implement non-blocking code execution. Async-await took it up a notch by making it easier to work with promises and avoid the infamous callback hell.
          
          However, one has to be a bit cautious while using <b>await</b> because it blocks code i.e when <b>await</b> is used, code execution stops until the promise that it is waiting for is settled (either resolved or rejected). This is different from the <b>.then</b> and <b>.catch</b> methods that were used before it, where code execution would not pause. Regular code execution would continue and <b>.then</b> or <b>.catch</b> would be called only when the promise had settled.

When you have multiple independent <b>await</b> statements in your code block, all those statements become blocking statements, potentially breaking the async nature and the core advantage of using async-await in the first place.

<b>Real-world example</b>
Ex : 3
I'm loading three images from a remote server using the fetch method. Since <b>fetch</b> is async and I like modern JavaScript, I take the async-await approach for all asynchronous operations. I then load these images onto the DOM. I also implement a fairly basic timer that works using <b>Date</b> to get a rough estimate of how much it takes to finish the entire operation.
Make note of the time it takes to finish the operation. It took between 2 and 3 seconds for me.

<b>So what's the problem here?</b>
The three <b>await</b> statements block code execution at each step, making the images get fetched only one after the other. However, the three <b>fetchImage</b> calls can actually be made independently of one another since fetch was designed to be asynchronous. The only requirement for us is that all three promises should settle before <b>loadImages</b> is called so that valid values can be passed in as the arguments.

So, by using multiple <b>await</b> statements one after the other, what was supposed to be an async load operation has now become a synchronous, time-consuming one.
This can also be verified by inspecting the Network tab in the Dev Tools when running the code locally. Notice how the activities only happen sequentially.
If the <b>loadImages</b> call is temporarily commented out and the <b>await</b> keyword is removed, you can observe the three fetch statements happening asynchronously.

<b>Enter Promise.all()</b>
Ex : 4
By now, I hope it is established that having multiple independent <b>await</b> statements is not a good idea for performance. The solution to this problem is to use the <b>Promise.all()</b> method

It takes an iterable of promises as input and returns a single promise. An array of promises is usually passed in as the iterable. The returned promise resolves when all the input promises get fulfilled. It rejects when any one of the input promises reject.

Here's how we modify our existing code
=> Omit the <b>await</b> keyword from the three <b>fetchImage()</b> calls so that <b>photo1, photo2</b>, and <b>photo3</b> become simple promises that will get a resolved value at a future time.
=> Call the <b>Promise.all()</b> method and pass in the three promises as an array
=> Handle the settled value of this promise.

If <b>allPromises</b> gets fulfilled, the fulfilled value would be an array, with each element being the resolved value of the corresponding input promise. So in our case, the resolved value will be an array of image URLs.
`,
          code1: `// Ex : 1
          // log every second -> callback hell version

setTimeout(() => {
  console.log('1 second');
  setTimeout(() => {
    console.log('2 seconds');
    setTimeout(() => {
      console.log('3 seconds');
      setTimeout(() => {
        console.log('4 seconds');
        setTimeout(() => {
          console.log('5 seconds');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

/* 
OUTPUT:
1 second
2 seconds
3 seconds
4 seconds
5 seconds
*/

//----------------- log every second -> async-await version ---------
// Ex : 2

const wait = function(time) {
  return new Promise(resolve => setTimeout(resolve, time * 1000))
}

async function clock() {
  try {
    await wait(1);
    console.log('1 second');

    await wait(1);
    console.log('2 seconds');

    await wait(1);
    console.log('3 seconds');

    await wait(1);
    console.log('4 seconds');

    await wait(1);
    console.log('5 seconds');
  } catch (err) {
    console.log(err);
  }
}
clock();

/* 
OUTPUT:
1 second
2 seconds
3 seconds
4 seconds
5 seconds
*/



//-------------------- 
//------------Ex : 3

//css :
        .img-container {
            padding: 15px;
        }
        .img-container img {
            margin:12px;
            width: 200px; 
            height:300px;
        }

// HTML :
&lt;div class=&quot;img-container&quot;&gt;&lt;/div&gt;

// Javascript :
const imgContainer = document.querySelector('.img-container');

// simple timer code
let time = '';
function resetTime() {
  time = new Date();
}
function elapsedTime(type) {
  const now = new Date();
  console.log(type, (now - time) / 1000);
}

// fetch photo from server
async function fetchImage(w = 200, h = 300) {
  try {
    const data = await fetch(\`https://picsum.photos/\${w}/\${h}/\`);
    return data.url;
  } catch (err) {
    return new Error(err);
  }
}

// load photos to DOM
function loadImages(...sources) {
  sources.forEach((source) => {
    const img = document.createElement('img');
    img.src = source;
    imgContainer.append(img);
  });
}


(async function () {
  resetTime();
  try {
    const photo1 = await fetchImage(700, 800);
    const photo2 = await fetchImage(50, 50);
    const photo3 = await fetchImage(100, 200);
    loadImages(photo1, photo2, photo3);
  } catch (err) {
    console.log(err);
  }
  elapsedTime('one-by-one');
})();



//-----------------------  Promise.all ---------------------
// Ex : 4

        const imgContainer = document.querySelector('.img-container');

        // simple timer code
        let time = '';
        function resetTime() {
            time = new Date();
        }
        function elapsedTime(type) {
            const now = new Date();
            console.log(type, (now - time) / 1000);
        }

        // fetch photo from server
        async function fetchImage(w = 200, h = 300) {
            try {
                const data = await fetch(\`https://picsum.photos/\${w}/\${h}/\`);
                return data.url;
            } catch (err) {
                return new Error(err);
            }
        }

        // load photos to DOM
        function loadImages(...sources) {
            sources.forEach((source) => {
                const img = document.createElement('img');
                img.src = source;
                imgContainer.append(img);
            });
        }


        (async function () {
            resetTime();
            try {
                const [photo1, photo2, photo3] = await Promise.all([fetchImage(700, 800), fetchImage(50, 50), fetchImage(100, 200)])
                loadImages(photo1, photo2, photo3);
                // console.log(photo1, photo2, photo3);
            } catch (err) {
                console.log(err);
            }
            elapsedTime('Promise.all');
        })();
`
        },
        {
          text1: `Here's an example of how Promise.all works. The promises start in the order they're created, but they run in parallel.
          <b>Key Notes</b>:
    The logs related to <b>Done waiting</b> will appear in order of the promises finishing, not in the order they were initiated.
    Even though the promises were initiated sequentially, they run in parallel because of <b>Promise.all()</b>.
    The final log <b>All done!</b> will be printed once all promises are resolved.
    
    This example demonstrates how <b>Promise.all()</b> allows multiple asynchronous operations to run in parallel and waits for all of them to complete before proceeding.`,
          code1: `        function promise(index) {
            return new Promise((resolve) => {
                const delay = Math.random() * 5000; // between 0 and 5 seconds
                console.log(\`\${index}. Waiting \${delay}\`);
                setTimeout(() => {
                    console.log(\`\${index}. Done waiting \${delay}\`);
                    resolve();
                }, delay);
            });
        }

        Promise.all([
            promise(1),
            promise(2),
            promise(3),
            promise(4),
            promise(5)
        ])
            .then(() => console.log('All done!'));`
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
      title: "Promise.race()",
      note: [
        {
          text1: `The <b>Promise.race()</b> static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.
          
          The <b>Promise.race()</b> static method accepts a list of promises as an iterable object and returns a new promise that fulfills or rejects as soon as there is one promise that fulfills or rejects, with the value or reason from that promise.

           <b>Promise.race() Method</b>
👉 The <u>Promise.race()</u> method returns a Promise that is resolved or rejected, as soon as one of the promises in an iterable, such as an array, fulfills or rejects, with the value or reason from that Promise.
👉 The promise returned will be forever pending, if the iterable passed is empty.
👉 <u>Promise.race()</u> will resolve to the first value found in the iterable, if the iterable contains one or more non-promise value or an already settled promise.

(Ex : 1) In the first case, pro2(100ms) is faster than pro1(200ms), so the output shows two. In the second case, pro3(300ms) is faster than pro4(400ms), so the promise rejects. So basically, <b>Promise.race() takes the first settled Promise</b>

(Ex : 2) If we take this same example and pass all the promises inside Promise.race(), it will return <u>two</u> as output, as the pro2 is the fastest promise to be settled in this case.

(Ex : 3) The following creates two promises: p1 resolves in 1 second and the p2 resolves in 2 seconds. Because the first promise resolves faster than the second one, the p1 wins the race. the <u>Promise.race()</u> resolves with the value from the first promise:

          `,
          code1: `// Let's see an example of Promise.race() with setTimeout 👇
// Ex : 1
const pro1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("one"), 200);
});

const pro2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("two"), 100);
});

Promise.race([pro1, pro2])
  .then((response) => {
    console.log(response); //output: two
  })
  .catch((err) => {
    console.log(err);
  });

const pro3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("rejected"), 300);
});

const pro4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("four"), 400);
});

Promise.race([pro3, pro4])
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  }); //output: rejected
  
  
  //---------------------- Ex : 2 ----------------

  const pro1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("one"), 200);
});

const pro2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("two"), 100);
});

const pro3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("rejected"), 300);
});

const pro4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("four"), 400);
});

Promise.race([pro1, pro2, pro3, pro4])
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

//output: two



//--------------------------- Ex : 3 ---------------

        const p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('The first promise has resolved');
                resolve(10);
            }, 1 * 1000);

        });

        const p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('The second promise has resolved');
                resolve(20);
            }, 2 * 1000);
        });


        Promise.race([p1, p2])
            .then(value => console.log(\`Resolved: \${value}\`))
            .catch(reason => console.log(\`Rejected: \${reason}\`));
  `
        }
      ]
    },
    {
      id: 1,
      title: "Promise.any()",
      note: [
        {
          text1: `The Promise.any() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.
          
          The <u>Promise.any()</u> method is one of the <u>promise concurrency</u> methods. This method is useful for returning the first promise that fulfills. It short-circuits after a promise fulfills, so it does not wait for the other promises to complete once it finds one.

          ◼️<b> Promise.any() Method</b>
👉 The Promise.any() takes an iterable Object, such as an Array of promises as an input. Once a promise is fulfilled, a single promise is returned and the promise is resolved using the value of the promise.
👉 If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError (that groups together individual errors).

Fulfillment of Promise.any()
🔹 Unlike <u>Promise.all()</u>, this method is used to return the first promise that fulfills.
🔹 It is <u>short-circuited</u> right after a promise is completed, so as soon as a promise is fulfilled, it will not wait for other promises to complete.
🔹 When a <u>non-empty</u> iterable is passed, and any of the promises fulfill, or are non-promises, then the promise returned by this method is fulfilled asynchronously.

For Example, the following code snippet will resolve the QuickyDone promise first as it is resolved after 100ms and the other one resolves after 500ms. It will not wait for any other promise to be fulfilled but immediately return the first promise that resolves. Ex : 1

<b>Rejection of Promise.any()</b>
🔹 Promise.any() rejects with an AggregateError if no promise fulfils.
🔹 The <u>AggregateError</u> object represents an error when several errors need to be wrapped in a single error. It is thrown when multiple errors need to be reported by an operation. Ex : 2

<b>Already rejected</b>, if the <u>iterable</u> passed is empty.
<b>Asynchronously fulfilled</b>, when any of the promises in the given <u>iterable</u> fulfills. The fulfillment value is the fulfillment value of the first promise that was fulfilled.
<b>Asynchronously rejected</b>, when all of the promises in the given <u>iterable</u> reject. The rejection reason is an <u>AggregateError</u> containing an array of rejection reasons in its <u>errors</u> property. The errors are in the order of the promises passed, regardless of completion order. If the <u>iterable</u> passed is non-empty but contains no pending promises, the returned promise is still asynchronously (instead of synchronously) rejected.

 <b>Note</b> that, Promise.any() was supported in node.js 15.0.0. If your node.js version is older than that, the console might show a TypeError: Promise.any is not a function message, so you need to update it and try again.
`,
          code1: `// -------- Ex : 1 resolve----------
          //         const SlowlyDone = new Promise((resolve, reject) => {
            setTimeout(resolve, 500, "Done slowly");
        }); //resolves after 500ms

        const QuicklyDone = new Promise((resolve, reject) => {
            setTimeout(resolve, 100, "Done quickly");
        }); //resolves after 100ms

        const Rejection = new Promise((resolve, reject) => {
            setTimeout(reject, 100, "Rejected"); //always rejected
        });

        Promise.any([Rejection, SlowlyDone, QuicklyDone])
            .then((value) => {
                console.log(value);
                //  QuicklyDone fulfils first
            })
            .catch((err) => {
                console.log(err);
            });

        //expected output: Done quickly

        
        //--------------- Ex : 2 Rejected--------

        const Rejection1 = new Promise((resolve, reject) => {
            setTimeout(reject, 100, "Rejected1"); //always rejected
        });

        const Rejection2 = new Promise((resolve, reject) => {
            setTimeout(reject, 100, "Rejected2"); //always rejected
        });

        Promise.any([Rejection1, Rejection2])
            .catch((err) => {
                console.log(err);
            });

        // expected output: "AggregateError: No Promise in Promise.any was resolved or AggregateError: All promises were rejected"
        `
        }
      ]
    },
    {
      id: 1,
      title: "Promise.allSettled()",
      note: [
        {
          text1: `The <b>Promise.allSettled()</b> static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.
          
          <b>Promise.allSettled()</b> waits for all promises you give it to settle, meaning either resolve or reject. It then returns an array of objects with the status and value or reason for each promise.

This is useful when you have multiple asynchronous tasks that you want to ensure have completed, but don't necessarily care if some fail.
This will run all three API calls, and the .then() callback will be called once they have all settled. The results array will have three objects: one for each promise, with either a status of <b>fulfilled</b> and the data, or <b>rejected</b> and the error.

The <b>Promise.allSettled()</b> method in JavaScript is a promise combinator that waits for all promises passed to it to either resolve or reject. It returns a promise that resolves after all of the input promises have settled (each may resolve or reject). The returned promise is fulfilled with an array of objects that each describe the outcome of each promise.


Promise.allSettled(iterable);
<b>iterable</b>: An iterable (such as an array) of promises or values to settle.

Returned Value
-> A single promise that resolves after all the promises in the iterable have settled.
-> The promise's value is an array of objects, each describing the outcome of each promise.

Each object in the array has the following format:
<b>status</b>: This will be either <u>fulfilled</u> or <u>rejected</u>.
<b>value</b>: If the promise was fulfilled, this will be the fulfilled value.
<b>reason</b>: If the promise was rejected, this will be the reason for the rejection.

          `,
          code1: `// Syntax : 
          Promise.allSettled([apiCall1(), apiCall2(), apiCall3()]).then((results) => {});
          
                  const promise1 = Promise.resolve(42);
        const promise2 = Promise.reject('An error occurred');
        const promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'));

        Promise.allSettled([promise1, promise2, promise3])
            .then((results) => results.forEach((result) => console.log(result)));



          //---------------
                  function fetchUserPosts(userId) {
            return new Promise((resolve, reject) => {
                fetch(\`https://jsonplaceholder.typicode.com/posts/1\`)
                    .then(res =>  {
                        if(res.ok){
                            resolve(res.json())
                        } else {
                            reject(new Error("Api not found 404"))
                        }
                })
            });
        }

        function fetchUserProfile(userId) {
            return new Promise((resolve, reject) => {
                fetch(\`https://jsonplaceholder.typicode.com/users/2\`)
                    .then(res => {
                        if(res.ok){
                            resolve(res.json())
                        } else {
                            reject(new Error("Api not found 404"))
                        }
                    })
            });
        }

        function fetchUserProfile2(userId) {
            return new Promise((resolve, reject) => {
                fetch(\`https://jsonplaceholder.typicode.com/user/1\`)
                    .then(res => {
                        // console.log(res)
                        if(res.ok){
                            resolve(res.json())
                        } else {
                            reject(new Error("Api not found 404"))
                        }
                    })
            });
        }


        async function time(label, fn) {
            const start = new Date();
            await fn();
            console.log(
                (new Date() - start) / 1000, \`seconds to load \${label}\`
            );
        }

        time("parallel", async () => {
            await Promise.all([fetchUserProfile(), fetchUserPosts()]);
        });
        const mainCall = Promise.allSettled([fetchUserProfile(), fetchUserPosts(), fetchUserProfile2()]);

        mainCall.then(res => console.log(res))
        .catch(err => console.log(err))

          `
        }
      ]
    },
    {
      id: 1,
      title: "Promise.prototype.finally()",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Promise Error Handling",
      note: [
        {
          text1: `<b>Error handling with promises</b>
          <a href="https://www.javascripttutorial.net/promise-error-handling/" target="_blank"> promise-error-handling </a>
Asynchronous actions may sometimes fail: in case of an error the corresponding promise becomes rejected. For instance, <u>fetch</u> fails if the remote server is not available. We can use <u>.catch</u> to handle errors (rejections).

Promise chaining is great at that aspect. When a promise rejects, the control jumps to the closest rejection handler down the chain. That's very convenient in practice.
For instance, in the code below the URL is wrong (no such site) and <u>.catch</u> handles the error:`,
          code1: `fetch('https://no-such-server.blabla') // rejects
  .then(response => response.json())
  .catch(err => alert(err)) // TypeError: failed to fetch (the text may vary)
// Or, maybe, everything is all right with the site, but the response is not valid JSON:

fetch('/') // fetch works fine now, the server responds with the HTML page
  .then(response => response.json()) // rejects: the page is HTML, not a valid json
  .catch(err => alert(err)) // SyntaxError: Unexpected token < in JSON at position 0
// The easiest way to catch all errors is to append .catch to the end of chain:

fetch('/article/promise-chaining/user.json')
  .then(response => response.json())
  .then(user => fetch(\`https://api.github.com/users/\${user.name}\`))
  .then(response => response.json())
  .then(githubUser => new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  }))
  .catch(error => alert(error.message));
// Normally, ".catch" doesn't trigger at all, because there are no errors. But if any of the promises above rejects (a network problem or invalid json or whatever), then it would catch it.`
        },
        {
          text1: `<b>Implicit try…catch</b>
The code of a promise executor and promise handlers has an <u>invisible try..catch</u> around it. If an exception happens, it gets caught and treated as a rejection.`,
          code1: `new Promise((resolve, reject) => {
  throw new Error("Whoops!");
}).catch(alert); // Error: Whoops!
// …Works exactly the same as this:

new Promise((resolve, reject) => {
  reject(new Error("Whoops!"));
}).catch(alert); // Error: Whoops!
// The “invisible try..catch” around the executor automatically catches the error and treats it as a rejection.
// This happens not only in the executor, but in its handlers as well. If we "throw" inside a ".then" handler, that means a rejected promise, so the control jumps to the nearest error handler.

// Here's an example:
new Promise((resolve, reject) => {
  resolve("ok");
}).then((result) => {
  throw new Error("Whoops!"); // rejects the promise
}).catch(alert); // Error: Whoops!
// This happens for all errors, not just those caused by the "throw" statement. For example, a programming error:

new Promise((resolve, reject) => {
  resolve("ok");
}).then((result) => {
  blabla(); // no such function
}).catch(alert); // ReferenceError: blabla is not defined
// The final ".catch" not only catches explicit rejections, but also occasional errors in the handlers above.`
        },
        {
          text1: `<b>Rethrowing</b>
As we already noticed, <u>.catch</u> behaves like <u>try..catch</u>. We may have as many <u>.then</u> handlers as we want, and then use a single <u>.catch</u> at the end to handle errors in all of them.

In a regular <u>try..catch</u> we can analyze the error and maybe rethrow it if can't handle. The same thing is possible for promises.

If we <u>throw</u> inside <u>.catch</u>, then the control goes to the next closest error handler. And if we handle the error and finish normally, then it continues to the closest successful .then handler.

In the example below the <u>.catch</u> successfully handles the error:
`,
          code1: `// the execution: catch -> then
new Promise((resolve, reject) => {
  throw new Error("Whoops!");
}).catch(function(error) 
  alert("The error is handled, continue normally");
}).then(() => alert("Next successful handler runs"));
// Here the <u>.catch</u> block finishes normally. So the next successful <u>.then</u> handler is called.
// In the example below we see the other situation with <u>.catch</u>. The handler <u>(*)</u> catches the error and just can't handle it (e.g. it only knows how to handle <u>URIError</u>), so it throws it again:

// the execution: catch -> catch -> then
new Promise((resolve, reject) => {
  throw new Error("Whoops!");
}).catch(function(error) { // (*)

  if (error instanceof URIError) {
    // handle it
  } else {
    alert("Can't handle such error");
    throw error; // throwing this or another error jumps to the next catch
  }

}).then(function() {
  /* never runs here */
}).catch(error => { // (**)
  alert(\`The unknown error has occurred: \${error}\`);
  // don't return anything => execution goes the normal way
});
// Then the execution jumps from the first ".catch (*)" to the next one "(**)" down the chain.
// In the section below we'll see a practical example of rethrowing.
`
        },
        {
          text1: `<b>Fetch error handling example</b>
Let's improve error handling for the user-loading example.

The promise returned by fetch rejects when it's impossible to make a request. For instance, a remote server is not available, or the URL is malformed. But if the remote server responds with error 404, or even error 500, then it's considered a valid response.

What if the server returns a non-JSON page with error 500 in the line (*)? What if there's no such user, and GitHub returns a page with error 404 at (**)?`,
          code1: `fetch('no-such-user.json') // (*)
  .then(response => response.json())
  .then(user => fetch(\`https://api.github.com/users/\${user.name}\`)) // (**)
  .then(response => response.json())
  .catch(alert); // SyntaxError: Unexpected token < in JSON at position 0
  // ...
// As of now, the code tries to load the response as JSON no matter what and dies with a syntax error. You can see that by running the example above, as the file no-such-user.json doesn't exist.

// That's not good, because the error just falls through the chain, without details: what failed and where.
// So let's add one more step: we should check the response.status property that has HTTP status, and if it's not 200, then throw an error.

class HttpError extends Error { // (1)
  constructor(response) {
    super(\`\${response.status} for \${response.url}\`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) { // (2)
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    })
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // HttpError: 404 for .../no-such-user.json
`
        },
        {
          text1: `=> We make a custom class for HTTP Errors to distinguish them from other types of errors. Besides, the new class has a constructor that accepts <u>response</u> object and saves it in the error. So error-handling code will be able to access the response.
=> Then we put together the requesting and error-handling code into a function that fetches the <u>url</u> and treats any non-200 status as an error. That's convenient, because we often need such logic.
=> Now <u>alert</u> shows a more helpful descriptive message.

The great thing about having our own class for errors is that we can easily check for it in error-handling code using <u>instanceof</u>.

For instance, we can make a request, and then if we get 404 - ask the user to modify the information.
The code below loads a user with the given name from GitHub. If there's no such user, then it asks for the correct name:
`,
          code1: `function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");

  return loadJson(\`https://api.github.com/users/\${name}\`)
    .then(user => {
      alert(\`Full name: \${user.name}.\`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err; // (*)
      }
    });
}

demoGithubUser();
// Please note: ".catch" here catches all errors, but it “knows how to handle” only "HttpError 404". In that particular case it means that there's no such user, and ".catch" just retries in that case.

// For other errors, it has no idea what could go wrong. Maybe a programming error or something. So it just rethrows it in the line "(*)".`
        },
        {
          text1: `<b>Unhandled rejections</b>
What happens when an error is not handled? For instance, after the rethrow <u>(*)</u> in the example above.
Or we could just forget to append an error handler to the end of the chain, like here:

In case of an error, the promise state becomes <u>rejected</u>, and the execution should jump to the closest rejection handler. But there is no such handler in the examples above. So the error gets <u>stuck</u>. There's no code to handle it.

In practice, just like with a regular unhandled errors, it means that something has terribly gone wrong.
What happens when a regular error occurs and is not caught by <u>try..catch?</u> The script dies. Similar thing happens with unhandled promise rejections.
The JavaScript engine tracks such rejections and generates a global error in that case. You can see it in the console if you run the example above.
In the browser we can catch such errors using the event <u>unhandledrejection</u>:

The event is the part of the HTML standard.
If an error occurs, and there's no <u>.catch</u>, the <u>unhandledrejection</u> handler triggers, and gets the <u>event</u> object with the information about the error, so we can do something.
Usually such errors are unrecoverable, so our best way out is to inform the user about the problem and probably report the incident to the server.
In non-browser environments like Node.js there are other similar ways to track unhandled errors.
`,
          code1: `new Promise(function() {
  noSuchFunction(); // Error here (no such function)
})
  .then(() => {
    // successful promise handlers, one or more
  }); // without .catch at the end!
  
  
  window.addEventListener('unhandledrejection', function(event) {
  // the event object has two special properties:
  alert(event.promise); // [object Promise] - the promise that generated the error
  alert(event.reason); // Error: Whoops! - the unhandled error object
});

new Promise(function() {
  throw new Error("Whoops!");
}); // no catch to handle the error
  `
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
      title: "async/await",
      note: [
        {
          text1: `async and await are the keywords used to write the asynchronous code in a synchronous manner where the await keyword waits for the promise to be resolved or rejected and the async keyword is used to wrap all await keywords with a function.`,
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
        {
          text1: `<b>Async Await vs Fetch.Then()</b>
          There is three key differences between async <b>await</b> and <b>then()</b>. They boil down to syntax, error handling, and general code organization.
          
          1) With <b>await</b>, we are able to write asynchronous code in a way that looks and feels synchronous. <b>await</b> is allowing us to pause code execution until our promise is resolved and then again while parsing the JSON we get back from that fulfillment. With <b>then()</b> we are promise chaining. We are saying after this, do this, and so on and so on. This is what is allowing us to asynchronously handle the request sent to the endpoint. This promise chaining is more explicit and allows us to handle that promise in multiple ways before returning it.

          2) The next difference is how these two methods handle errors. With <b>await</b> we are able to create a <b>try</b> and <b>catch</b> code block.

          This code block is acting as an <b>if-else</b> but one designed for acting with requests. What this is doing is in the <b>try</b> if the requests is successful, continue on and return the object; otherwise, throw this error to the console and tell me the error with the requests. With <b>catch()</b>, your errors are handled in your promise chain just as your <b>then()</b>s are.
          `,
          code1: `const apiCall = async () => {
            try{
               const apiCallPromise  = await 
               fetch('https://api.example.com/data');
            };
            const apiCallObj = await apiCallPromise.json();
            return apiCallObj;
            catch(error){
               console.error(error);
            };
         };
         `
                 },
                 {
                   text1: `This snippet functions exactly the same as done <b>with</b> the await example but the difference is that here, <b>catch()</b> is expecting a callback function.
                   
                   3) The third key difference between the <b>await</b> and <b>then()</b> comes down to code organization. I have touched on it already but using <b>await</b> allows you to write your code in a more linear and organized manner. You can perform subsequent operations on the fetched response immediately after the <b>await</b> statement, which can make the code flow more naturally. With <b>then()</b>, you need to chain multiple <b>then()</b> calls to handle the response and subsequent processing. This can sometimes lead to nested or cascading <b>then()</b> calls, which may make the code harder to read and maintain.
                   `,
                   code1: `const apiCall = () => {
            fetch('https://api.example.com/data')
            .then((resp) => resp.json)
            .then((data) => {
               return data;
            });
            .catch((error) => console.error('Error:', error));
         };`
        },
        {
          text1: `<b>async/await</b> and <b>.then()</b> are both ways to handle asynchronous operations in JavaScript, particularly when working with promises. They provide different approaches to managing asynchronous code, each with its own advantages and use cases.

          <b>1) async/await</b>
          <b>async/await</b> is a syntactic sugar introduced in ECMAScript 2017 (ES8) that makes working with asynchronous code more readable and easier to manage compared to traditional promise chaining.
    
          <u>How It Works</u>:
    => <b>async Function</b>: Declaring a function with <b>async</b> makes it return a promise implicitly. Inside an <b>async</b> function, you can use <b>await</b> to pause execution until the promise is resolved or rejected.
    => <b>await Expression</b>: The <b>await</b> keyword pauses the execution of the <b>async</b> function until the promise is resolved, then returns the result. If the promise is rejected, <b>await</b> throws the error, which you can catch with <b>try/catch.</b>
    
    <b>Advantages</b>:
    <b>Readability</b>: The <b>async/await</b> syntax is more readable and closely resembles synchronous code.
    <b>Error Handling</b>: Error handling with <b>try/catch</b> is straightforward and integrates well with synchronous code structures.
    <b>Debugging</b>: Easier to debug due to its linear code flow.
    `,
          code1: `// Async function to fetch data
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

// Call the async function
fetchData();
`
        },
        {
          text1: `<b>2) .then()</b>
The .then() method is a way to handle promises and is part of the Promises API. It involves chaining methods to handle the resolved or rejected state of a promise.

<u>How It Works</u>:
    <b>then() Method</b>: The <b>.then()</b> method is used to specify what should happen when the promise resolves. You can chain multiple .then() calls for sequential asynchronous operations.
    <b>catch() Method</b>: The <b>.catch()</b> method is used to handle any errors that occur during the promise chain.
    
    <u>Advantages</u>:
    <b>Chainable: .then()</b> allows chaining multiple asynchronous operations, making it flexible for complex workflows.
    <b>Compatibility</b>: Works with existing promise-based APIs and can be used in environments that do not support <u>async/await</u>.
    `,
          code1: `// Function to fetch data with .then()
function fetchData() {
  fetch('https://api.example.com/data')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

// Call the function
fetchData();
`
        },
        {
          text1: `<b>When to Use Which</b>:
    <b>Use async/await</b>: When you want cleaner, more readable code that resembles synchronous code and simplifies error handling. It is particularly useful for handling asynchronous operations sequentially.
    <b>Use .then()</b>: When working with existing code that uses promises, or when you need to chain multiple asynchronous operations. It's also useful when dealing with APIs or libraries that return promises.
          
          <b>Comparison:</b>              
                <div class='table-res'>
                    <table border=1 >
                        <tbody>
                            <tr>
                              <th>Feature</th>
                              <th>async/await</th>
                              <th>.then()</th>
                            </tr>

                            <tr>
                              <th>Syntax</th>
                              <td>More concise and resembles synchronous code</td>
                              <td>Can become complex with nested .then()</td>
                            </tr>

                            <tr>
                              <th>Error Handling</th>
                              <td>Use try/catch blocks for errors</td>
                              <td>Use .catch() to handle errors</td>
                            </tr>

                            <tr>
                              <th>Readability</th>
                              <td>Easier to read and maintain</td>
                              <td>Can be less readable with deep chaining</td>
                            </tr>

                            <tr>
                              <th>Debugging</th>
                              <td>Easier to debug due to linear flow</td>
                              <td>Can be harder to trace with complex chains</td>
                            </tr>

                            <tr>
                              <th>Browser Support</th>
                              <td>Requires modern JavaScript environments</td>
                              <td>Supported in all environments with promises</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                `,
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
      title: "Synchronous / Asynchronous",
      note: [
        {
          text1: `<b> Synchronous</b>:
           Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.
           Instruction in synchronous code executes in a given sequence.

           <b>Asynchronous</b>:
           Asynchronous code execution allows to execution next instructions immediately and doesn't block the flow because of previous instructions.
           `,
          code1: ``,
          img: `../assets/images/javascript/When-to-use-Async-vs-Sync-Programming.webp`
        },
        {
          text1: `Synchronous programming is a way for computers to do things one step at a time, in the order they are given the instructions.

Imagine you're cooking dinner and have a list of tasks, like <u> boiling water for pasta, frying chicken, and making a salad</u>.
You would do these tasks one at a time and wait for each one to finish before moving to the next.
Synchronous programming works similarly, where the computer will complete one task before moving on to the next. This makes it easy to understand and predict what the computer will do at any given time.

          <span style="background:yellow; width:300px; padding:10px;" class="text-center d-flex flex-column">
          <b>Synchronous programming</b> </br>
          <span style="background:#8989ac; padding:10px; margin:3px;">boiling water for pasta</span>
          <span style="background:#8989ac; padding:10px; margin:3px;">frying chicken</span>
          <span style="background:#8989ac; padding:10px; margin:3px;">making a salad</span>
          </span>


// Define a function
function f1() {
    // Do something
    // Do something again
    // Again
    // So on...
}

// Invoke the function
f1();

By default, every line in a function executes sequentially, one line at a time. The same is applicable even when you invoke multiple functions in your code. Again, line by line.

So what happens when you define a function and then invoke it? The JavaScript engine maintains a <u>stack</u> data structure called <u>function execution stack</u>. The purpose of the stack is to track the current function in execution. It does the following:

=> When the JavaScript engine invokes a function, it adds it to the stack, and the execution starts.
=> If the currently executed function calls another function, the engine adds the second function to the stack and starts executing it.
=> Once it finishes executing the second function, the engine takes it out from the stack.
=> The control goes back to resume the execution of the first function from the point it left it last time.
=> Once the execution of the first function is over, the engine takes it out of the stack.
=> Continue the same way until there is nothing to put into the stack.

//----------------- below IMG - 1 ---------------
Let's look at an example of three functions that execute one by one:

function f1() {
  // some code
}
function f2() {
  // some code
}
function f3() {
  // some code
}

// Invoke the functions one by one
f1();
f2();
f3();

A step-by-step flow shows the execution order

Did you see what happened there? First, <u>f1()</u> goes into the stack, executes, and pops out. Then <u>f2()</u> does the same, and finally <u>f3()</u>. After that, the stack is empty, with nothing else to execute.

Ok, let's now work through a more complex example. Here is a function <u>f3()</u> that invokes another function <u>f2()</u> that in turn invokes another function <u>f1()</u>.

`,
          code1: ``,
          img: `../assets/images/javascript/Synchronous-flow.gif`,
          
        },
        {
          text1: `//----------------- below IMG - 2 ---------------
function f1() {
  // Some code
}
function f2() {
  f1();
}
function f3() {
  f2();
}
f3();
Let's see what's going on with the function execution stack:

A step-by-step flow shows the execution order

Notice that first <u>f3()</u> gets into the stack, invoking another function, <u>f2()</u>. So now <u>f2()</u> gets inside while <u>f3()</u> remains in the stack. The <u>f2()</u> function invokes <u>f1()</u>. So, time for <u>f1()</u> to go inside the stack with both <u>f2()</u> and <u>f3()</u> remaining inside.

First, <u>f1()</u> finishes executing and comes out of the stack. Right after that <u>f2()</u> finishes, and finally <u>f3()</u>.

The bottom line is that everything that happens inside the <u>function execution stack</u> is sequential. This is the <u>Synchronous</u> part of JavaScript. JavaScript's <u>main</u> thread makes sure that it takes care of everything in the stack before it starts looking into anything <u>elsewhere</u>.

Great! Now that we understand how <u>synchronous</u> operations work in JavaScript, let's now flip the coin and see its <u>asynchronous</u> side. Are you ready?
`,
          code1: ``,
          img: `../assets/images/javascript/Synchronous-second-flow.gif`
        },
        {
          text1: `<u>Asynchronous</u> programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.

Many functions provided by browsers, especially the most interesting ones, can potentially take a long time, and therefore, are asynchronous. For example:

=> Making HTTP requests using <u>fetch()</u>
=> Accessing a user's camera or microphone using <u>getUserMedia()</u>
=> Asking a user to select files using <u>showOpenFilePicker()</u>
So even though you may not have to implement your own asynchronous functions very often, you are very likely to need to use them correctly.

<b>Synchronous programming</b>
Consider the following code:
const name = "Miriam";
const greeting = \`Hello, my name is \${name}!\`;
console.log(greeting);
// "Hello, my name is Miriam!"

This code:
1) Declares a string called <u>name</u>.
2) Declares another string called <u>greeting</u>, which uses <u>name</u>.
3) Outputs the greeting to the JavaScript console.
We should note here that the browser effectively steps through the program one line at a time, in the order we wrote it. At each point, the browser waits for the line to finish its work before going on to the next line. It has to do this because each line depends on the work done in the preceding lines.

That makes this a synchronous program. It would still be synchronous even if we called a separate function, like this:

function makeGreeting(name) {
  return \`Hello, my name is \${name}!\`;
}
const name = "Miriam";
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"

Here, <b>makeGreeting()</b> is a synchronous function because the caller has to wait for the function to finish its work and return a value before the caller can continue.
`,
          code1: `//The program below uses a very inefficient algorithm
          
        function slowFunction() {
            // Simulate a long-running synchronous operation
            let counter = 0;
            for (let i = 0; i < 1000000000; i++) {
                counter++;
            }

            // Return the "asynchronous" result
            return counter.toString();
        }

        console.log(slowFunction())
        `
        },
        {
          text1: `<b>Asynchronous</b> In traditional (synchronous) programming, each person would have to wait for the person before them to finish their task before starting their own. But with asynchronous programming, everyone can start and work on their tasks simultaneously without waiting for the others to finish.

Similarly, in a computer program, asynchronous programming allows a program to work on multiple tasks simultaneously instead of completing one task before moving on to the next one. This can make the program get more things done in a shorter amount of time.

Asynchronous programming is a way for a computer program to handle multiple tasks simultaneously rather than executing them one after the other.

As we saw in the synchronous code example, all instructions in the program execute one after another, and every instruction waits for its previous instruction to get executed. Due to this nature of synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the user interface. Asynchronous code execution allows to execution next instructions immediately and doesn't block the flow because of previous instructions.

The word <u>asynchronous</u> means <b>not occurring at the same time</b>. What does it mean in the context of JavaScript?
Typically, executing things in sequence works well. But you may sometimes need to fetch data from the server or execute a function with a delay, something you do not anticipate occurring <u>NOW</u>. So, you want the code to execute <u>asynchronously</u>.

In these circumstances, you may not want the JavaScript engine to halt the execution of the other sequential code. So, the JavaScript engine needs to manage things a bit more efficiently in this case.

We can classify most asynchronous JavaScript operations with two primary triggers:

1) <b>Browser API/Web API</b> events or functions. These include methods like <u>setTimeout</u>, or event handlers like click, mouse over, scroll, and many more.
2) <b>Promises</b>. A unique JavaScript object that allows us to perform asynchronous operations.
 Don't worry if you are new to promises. You do not need to know more than this to follow this article. At the end of the article, I have provided some links so you can start learning promises in the most beginner-friendly way.


 <b>How to Handle Browser APIs/Web APIs</b>
Browser APIs like <u>setTimeout</u> and event handlers rely on <u>callback</u> functions. A callback function executes when an asynchronous operation completes. Here is an example of how a <u>setTimeout</u> function works:

function printMe() {
  console.log('print me');
}
setTimeout(printMe, 2000);

The <u>setTimeout</u> function executes a function after a certain amount of time has elapsed. In the code above, the text <u>print me</u> logs into the console after a delay of 2 seconds.
Now assume we have a few more lines of code right after the <u>setTimeout</u> function like this:

function printMe() {
  console.log('print me');
}
function test() {
  console.log('test');
}
setTimeout(printMe, 2000);
test();

So, what do we expect to happen here? What do you think the output will be?
Will the JavaScript engine wait for 2 seconds to go to the invocation of the <u>test()</u> function and output this:

printMe
test

Or will it manage to keep the callback function of <u>setTimeout</u> aside and continue its other executions? So the output could be this, perhaps:

test
printMe

If you guessed the latter, you're right. That's where the asynchronous mechanism kicks in.

<b>How the JavaScript Callback Queue Works (aka Task Queue)</b>
JavaScript maintains a queue of callback functions. It is called a callback queue or task queue. A queue data structure is <u>First-In-First-Out(FIFO)</u>. So, the callback function that first gets into the queue has the opportunity to go out first. But the question is:

When does the JavaScript engine put it in the queue?
When does the JavaScript engine take it out of the queue?
Where does it go when it comes out of the queue?
Most importantly, how do all these things relate to the asynchronous part of JavaScript?


The below image shows the regular <u>call stack</u> we have seen already. There are two additional sections to track if a browser API (like setTimeout) kicks in and <u>queues</u> the callback function from that API.

The JavaScript engine keeps executing the functions in the call stack. As it doesn't put the callback function straight into the stack, there is no question of any code waiting for/blocking execution in the stack.

The engine creates a <u>loop</u> to look into the queue periodically to find what it needs to pull from there. It pulls a callback function from the queue to the call stack when the stack is empty. Now the callback function executes generally as any other function in the stack. The loop continues. This loop is famously known as the <u>Event Loop</u>.

So, the moral of the story is:

=> When a Browser API occurs, park the callback functions in a queue.
=> Keep executing code as usual in the stack.
=> The event loop checks if there is a callback function in the queue.
=> If so, pull the callback function from the queue to the stack and execute.
=> Continue the loop.
`,
          code1: ``
        },
        {
          text1: `Alright, let's see how it works with the code below:

function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function main() {
    console.log('main');
    setTimeout(f1, 0);
    f2();
}
main();

The code executes a <u>setTimeout</u> function with a callback function <u>f1()</u>. Note that we have given zero delays to it. This means that we expect the function <u>f1()</u> to execute immediately. Right after setTimeout, we execute another function, <u>f2()</u>.

So, what do you think the output will be? Here it is:
main
f2
f1

But, you may think that <u>f1</u> should print before <u>f2</u> as we do not delay f1 to execute. But no, that's not the case. Remember the <u>event loop</u> mechanism we discussed above? Now, let's see it in a step-by-step flow for the above code.



Event loop - see the step-by-step execution

Here are steps written out:
1) The <u>main()</u> function gets inside the call stack.
2) It has a console log to print the word main. The <u>console.log('main')</u> executes and goes out of the stack.
3) The setTimeout browser API takes place.
4) The callback function puts it into the callback queue.
5) In the stack, execution occurs as usual, so <u>f2()</u> gets into the stack. The console log of <u>f2()</u> executes. Both go out of the stack.
6) The <u>main()</u> also pops out of the stack.
7) The event loop recognizes that the call stack is empty, and there is a callback function in the queue.
8) The callback function <u>f1()</u> then goes into the stack. Execution starts. The console log executes, and <u>f1()</u> also comes out of the stack.
9) At this point, nothing else is in the stack and queue to execute further.

I hope it's now clear to you how the <u>asynchronous</u> part of JavaScript works internally. But, that's not all. We have to look at <u>promises</u>.
`,
          code1: ``,
          img: `../assets/images/javascript/Synchronous-event-loop-flow.gif`
        },
        {
          text1: `JavaScript is single threaded and has a synchronous execution model. Single threaded means that one command is being executed at a time. Synchronous means one at a time i.e. one line of code is being executed at time in order the code appears. So in JavaScript one thing is happening at a time.
          
          <b>Execution Context</b>
The JavaScript engine interacts with other engines in the browser. In the JavaScript execution stack there is global context at the bottom and then when we invoke functions the JavaScript engine creates new execution contexts for respective functions. When the called function exits its execution context is popped from the stack, and then next execution context is popped and so on...



Maybe you think setTimeout like this -: <b>The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds</b>. it's true, but let's dive deeper.

There aren't any methods like <u>setTimeout()</u> or <u>setInterval()</u> in JavaScript. They are not provided by the JavaScript engine itself but they are provided by browser as part of the window object. Let's break it down:

If javascript doesn't provide <u>setInterval()</u> and <u>setTimeout()</u> but when we run our javascript code which also contains <b>setTImeout</b> it works perfectly fine. Yes, that's the real problem. Many people know how to use and they don't have any idea about what's going on under the hood. Before knowing about windows object, let's look at web APIs.

<b>Web APIs</b>
A browser can perform many tasks like getting user's location, turning on/off bluetooth, storage tasks, timer related tasks and many more. And we as a developers need these things. So, all these things can be accessed by JavaScript via Web APIs. That's it, now we have all these things inside one place and that place is window object.

<b>Some web APIs</b>:
=> localStorage
=> setTimeout()
=> console
=> DOM APIs
=> fetch()
=> location
=> alert()
=> and others

If <u>setTimeout()</u> is present inside window object then why we don't write like this:
window.setTimeout(() => console.log('Timer finished'), 1000 );

Instead we write without <u>window</u> object:
setTimeout(() => console.log('Timer finished'), 1000 );

<u>window</u> is a global object and <u>setTimeout()</u> is present inside global object(at global scope), so we can access <u>setTimeout()</u> without <u>window</u> object. Not only with <u>setTimeout()</u>, we don't need to write <u>window</u> object to access <u>alert, localstorage</u>, and other web APIs.

Far by we've discussed that the browser provides web APIs, so we can use the things like <u>setTimeout()</u> but nodejs is not a browser. Then how is it possible to access <u>setTimeout()</u> in node. Well, we don't have <u>window</u> object available while working with node. But we can still access <u>setTimeout()</u>, let me tell you something at this point <u>setTimeout()</u> function in node works similar to <u>window.setTimeout()</u>, however they are not exactly same. Read more about this here.
`,
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
      title: "imperative vs declarative javascript",
      note: [
        {
          text1: `Declarative programming is a programming style that expresses the logic of a computation without describing its control flow. In JavaScript, a declarative example could be written as follows:
          Imperative means you tell the compiler what you exactly want to happen, 
          while in declarative paradigm you only specify what you want the result to be.

<b>Declarative</b>:
Declarative programming is an approach focused on expressing what the code should do, rather than how the operations should be performed. It emphasizes the results rather than the process. Code written with this approach is generally more readable and concise.

          <b>Imperative</b>
          Imperative programming, on the other hand, is an approach that explains step by step how operations should be performed. You explicitly specify all stages of the algorithm and control structures (such as loops and conditional statements).
          `,
          code1: `// declarative paradigm
          const add = (x, y) => x + y;
let result = add(2, 3);
console.log(result); // 5
//-----------
Ex  : 1
// Usually what you'd do is to define a for loop as below: imperative programming
let n = [-9, 87, 72, 452, 32, -9]
for(let i = 0; i < n.length; i++) {
    console.log(n[i])
}

// declarative way:
let n = [-9, 87, 72, 452, 32, -9]
n.forEach(v => console.log(v))

//--------
Ex : 2 
// Here is the imperative way:
let n = [-9, 87, 72, 452, 32, -9]
let z = []
let doubleMinusOne = x => (x * 2) - 1
for(let i = 0; i < n.length; i++) {
    z[i] = doubleMinusOne(n[i])
}

// Now the 'z' variable holds an array of items doubled and subtracted by one from the 'n' array.
// Here is how to do it declaratively:
let n = [-9, 87, 72, 452, 32, -9]
let z = n.map(v => (v * 2) - 1)

//------------------
// Ex : 3
// imperative way:
let n = [-9, 87, 72, 452, 32, -9]
let z = []
let lessThanFifty = v => v < 50
for(let i = 0; i < n.length; i++) {
    lessThanFifty(n[i]) && z.push(n[i])
}

// And the code below is the declarative counterpart:
let n = [-9, 87, 72, 452, 32, -9]
let z = n.filter(v => v < 50)

`
        },
        {
          text1: `<b>Advantages of Declarative Programming</b>
        <b>Readability</b>: Code written with Declarative programming is generally more readable and understandable.
        <b>Maintenance and Extensibility</b>: With the Declarative approach, maintaining and expanding the code becomes easier.
        <b>Reduced Error Risk</b>: Focusing on what is being done rather than how it is done reduces the risk of making errors.

        <b>Advantages of Imperative Programming</b>
        <b>Control</b>: Imperative programming allows you to specify each step of the algorithm, providing more specific and detailed control.
        <b>Optimization</b>: By determining step by step how operations are performed, it may be easier for you to make performance optimizations.
        <b>Educational</b>: Imperative programming can be helpful, especially for beginners, in better understanding how an algorithm works.

        In conclusion, when choosing between Declarative and Imperative programming approaches, you should consider your project's requirements, code readability, and maintenance processes. This way, you will adopt the most suitable approach for your project.`,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "proxy object",
      note: [
        {
          text1: `A proxy may refer to a person who is authorized to act for another or it may designate the function or authority of serving in another's stead.

So a proxy is nothing but a mediator that speaks or operates on behalf of the given party.

Here is the syntax for declaring a proxy object:

new Proxy(<object>, <handler>)
The Proxy takes two parameters:

<object>: The object that needs to be proxied.
<handler>: An object that defines the list of methods that can be intercepted. These are also called traps.
`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "new FormData",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      section:'JavaScript Event',
      title: "JavaScript Event",
      note: [
        {
          text1: `<a href="https://www.guvi.in/blog/guide-for-events-in-javascript/" target="_blank">guide-for-events-in-javascript</a>
          A JavaScript event is a specific action that occurs within a web page or application, such as clicking on an element, moving the mouse, pressing a key, or loading a page. Essentially, events are like signals that tell the browser to execute certain code or perform specific actions in response to user interactions or other occurrences.
          
          Here's a simplified breakdown of how events work in JavaScript:

<b>Event Triggering:</b> Events can be triggered by user interactions (like clicking, hovering, typing) or by the browser itself (like when a page finishes loading).
<b>Event Handling:</b> To respond to these events, developers write event handler functions. These functions contain the instructions or code that should run when the event occurs.
<b>Event Binding:</b> Event handlers are then bound or attached to specific elements or objects on the webpage using JavaScript methods like addEventListener() or by directly assigning functions to event attributes in HTML.
<b>Event Execution:</b> When the specified event occurs, the associated event handler function is executed, allowing the webpage to respond dynamically to user actions or other events.
Understanding how events are triggered and handled in JavaScript is fundamental to building interactive and responsive web applications. It enables developers to create engaging user experiences by customizing how their websites respond to user inputs and other events.


<b>How to Create an Event in JavaScript?</b>
The following is a step-by-step guide to creating custom events:

<b>Event Initialization</b>: Begin by initializing a new event object using the Event() constructor. This object represents the custom event you want to create.
<b>Event Configuration</b>: Configure the event object by specifying its type. The event type is a descriptive string that identifies the custom event you're creating. You can also provide additional options, such as whether the event bubbles up through the DOM hierarchy or can be canceled.
<b>Dispatching the Event</b>: Once the event object is configured, you can dispatch it to trigger the custom event. Dispatching an event involves specifying the target element or object where the event should originate from and calling the dispatchEvent() method on that target.


<b>Events</b> are fired to notify code of <b>interesting changes</b> that may affect code execution. These can arise from user interactions such as using a mouse or resizing a window, changes in the state of the underlying environment (e.g. low battery or media events from the operating system), and other causes.

Each event is represented by an object that is based on the <b>Event</b> interface, and may have additional custom fields and/or functions to provide information about what happened. The documentation for every event has a table (near the top) that includes a link to the associated event interface, and other relevant information.

`,
          code1: `/ Step 1: Event Initialization
var customEvent = new Event("customEvent");

// Step 2: Event Configuration
// You can also pass additional options as the second argument, such as { bubbles: true, cancelable: true }
customEvent.initEvent("customEventType", true, true);

// Step 3: Dispatching the Event
var targetElement = document.getElementById("targetElement");
targetElement.dispatchEvent(customEvent);`,
          img: `../assets/images/javascript/javascript-events.png`
        },        
        {
          text1: `The browser can trigger many different types of events on the DOM(Document Object Model). The full list of all DOM event types are located here: MDN. For this blog, I'll go over some of the more frequently used DOM events, explain what the event does, and how each one is used.

Here are some of the most common event types and event names:

<b>Mouse Events</b>: click, dblclick, mousedown, mouseup, contextmenu, mouseout, mousewheel, mouseover
<b>Touch Events</b>: touchstart, touchend, touchmove, touchcancel
<b>Keyboard Events</b>: keydown, keyup, keypress
<b>Form Events</b>: focus, blur, change, submit
<b>Window Events</b>: resize, scroll, load, unload, hashchange
Touch events are triggered on touch-enabled devices such as smartphones, tablets, and touch-screen laptops. Mouse events are triggered on the majority of all browsers and devices. The MouseEvent interface represents events that occur due to the user interacting with a pointing device.

<b>The click event</b>: The onclick event occurs when the user clicks on an element.
<b>The dblclick event</b>: ondblclick event occurs when the user double-clicks on an element.
<b>Mousedown & Mouseup events</b>:A pointing device button is pressed/released on an element.
<b>Mouseout event</b>: A pointing device is moved off the element that has the listener attached.

<b>Keyboard events(keydown, keyup, keypress)</b>:
<b>Keydown</b>: Any key is pressed.
<b>keyup</b>: Any key is released.
<b>keypress</b>: Any key (except shift, Fn, or capslock) is in the pressed position(fired continuously.)

<b>Form Events(focus, blur, change, submit)</b>:
<b>focus</b>: An element that has received focus.
<b>blur</b>: An element that has lost focus.
<b>change</b>: Event that is fired for input, select, and textarea elements when an alteration to the element's value is done by the user.
<b>submit</b>: The submit button is pressed.

<b>Window Events(resize, scroll, load, unload, hashchange)</b>:
<b>resize</b>: This event fires when the document view(window) has been resized.
<b>scroll</b>: Event fires when the document view or an element has been scrolled.
<b>load/unload</b>: The load event is fired when the whole page has loaded, including all resources such as css and images. Unload is when the document or child resource is being unloaded.
<b>hashchange</b>: This event is fired when the identifier of the URL has changed(the part of the URL that begins with a # symbol).

<b>Some other common DOM events that are used are</b>:
<b>error</b>: A resource has failed to load.
<b>abort</b>: The loading fo a resource was aborted.
<b>online</b>: The browser has gained access to the network.
<b>animationstart</b>: This event fires when a CSS animatino has started.
Event listeners are what make Javascript dynamic and fun. It allows the developer to be creative and experiment with their application to make it interesting and expressive. There are all kinds of keyword events that just about allow the user to do anything to interact with the browser. Knowing more event listener types will allow you(the developer) to become a Javascript wizard!`,
          code1: ``
        },
        {
          text1: ``,
          code1: ``
        },
        {
          text1: `The <b>DOMContentLoaded</b> event fires when the HTML document has been completely parsed, and all deferred scripts (<b>&lt;script defer src=&quot;…&quot;&gt;</b> and <b>&lt;script type=&quot;module&quot;&gt;</b>) have downloaded and executed. It doesn't wait for other things like images, subframes, and async scripts to finish loading.

DOMContentLoaded does not wait for stylesheets to load, however deferred scripts do wait for stylesheets, and the DOMContentLoaded event is queued after deferred scripts. Also, scripts which aren't deferred or async (e.g. <b>&lt;script&gt;</b>) will wait for already-parsed stylesheets to load.

A different event, load, should be used only to detect a fully-loaded page. It is a common mistake to use load where DOMContentLoaded would be more appropriate.


<b>The Problem</b>
You want to run some JavaScript code after a page has loaded. Should you use the <b>window load</b> event or the document <b>DOMContentLoaded</b> event to determine when to run the code?

<b>The Solution</b>
The window <b>load event</b> is fired when the entire web page has been loaded. This includes the page DOM and all dependent resources such as scripts, stylesheets, and images.

The document <b>DOMContentLoaded</b> event is fired when the page DOM has been loaded and all deferred scripts have been loaded and executed.

If your JavaScript code only needs to interact with the DOM, use the <b>DOMContentLoaded</b> event. This can be useful if you want to modify the DOM once it's loaded, set up event listeners, or fetch data from an API that will be displayed in the UI. For example, if you're using a UI library, such as <b>HighCharts</b>, adding the UI element after the <b>DOMContentLoaded</b> event improves performance as it does not wait for images or CSS to be loaded before adding the chart UI element to the page:
`,
          code1: `document.addEventListener('DOMContentLoaded', ()=> {
    Highcharts.chart('container', {
      // add config here
    });
});


// If your JavaScript code depends on resources like stylesheets and images, then using the window load event is a better option. For example, if you want to start an animation only once all images have been loaded do the following:
window.onload = function() {
    // code to run animation.
    HeaderTextAnimation();
};
`
        },
        {
          text1: ``,
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
      title: "Phases of JavaScript Event",
      note: [
        {
          text1: `There are three different phases during the lifecycle of a JavaScript event.

=> Capturing Phase
=> Target Phase
=> Bubbling Phase

<b>Capturing Phase</b> is when the event goes down to the element. <b>The target phase</b> is when the event reaches the element and the <b>Bubbling phase</b> is when the event bubbles up from the element.



<b>1. Event Capturing</b>
Event capturing is the first phase in the event flow process where the event is captured or detected at the highest level of the DOM hierarchy and then propagates down to the target element. Event capturing allows developers to intercept events before they reach their target, enabling global event handling and delegation. Practical use cases include implementing event delegation, validating user input, and applying consistent event handling across multiple elements.

In the event capturing phase, an event originates at the least particular element and progresses downhill to the most specific element. 

During the capture process:
=> The browser will execute if the element's outermost ancestor &lt;html&gt; has a click event handler registered for the capturing phase.
=> Then it moves on to the next element inside &lt;html&gt; and repeats the process, continuing until it reaches the immediate parent of the element that was actually selected.

<b>2. Event Targeting (Target Phase)</b>
Event targeting, also known as the “at target” phase, occurs when the event reaches the target element that triggered it. During the targeting phase, event handlers attached directly to the target element are executed, allowing for specific actions or behaviors to be applied based on the event

A target element is the most deeply nested element that generated the event. It can be accessed as “event.target”. The target element, or the element that triggered the event, receives the event.

During the target phase:
=> If the target property has an event handler for the click event registered on it, the browser will execute it.
=> If bubbles are true, the event is propagated to the selected element's direct parent, then the next, until it reaches the &lt;html&gt; element. If bubbles are false, the event is not propagated to any of the target's ancestors. (Note: Don't worry about the keyword “bubble phase”, we will discuss it in detail in the next section.)

<b>3. Event Bubbling</b>
Event bubbling is the final phase in the event flow process where the event, having been processed at the target element, propagates back up through the DOM hierarchy to the root element. Unlike event capturing, which starts from the top of the DOM tree and moves downward, event bubbling starts at the target element and moves upward. Practical implications include simplifying event handling by allowing for more concise code, enabling event delegation, and facilitating the creation of interactive components.

The bubble phase is the opposite of capturing. In the event bubbling model, an event starts at the most specific element and then flows upward to the least specific element (the document or even window).

The exact opposite of the capturing phase occurs during the bubbling phase:
=> The browser will execute if the direct parent of the element selected has a click event handler registered for the bubbling phase.
=> Then it repeats the process for the next immediate ancestor element, then the next, and so on until it reaches the &lt;html&gt; element.

A click on the inner &lt;p&gt; first runs onclick:

On that &lt;p&gt;.
Then on the outer &lt;div&gt;.
Then on the outer &lt;form&gt;.
And so on upwards till the document object.
`,
          code1: `//FORM > DIV > P
           &lt;head&gt;
    &lt;style&gt;
        body * {
            margin: 10px;
            border: 1px solid blue;
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;

    &lt;form&gt;FORM
        &lt;div&gt;DIV
            &lt;p&gt;P&lt;/p&gt;
        &lt;/div&gt;
    &lt;/form&gt;

    &lt;script&gt;
        for (let elem of document.querySelectorAll(&#39;*&#39;)) {
            elem.addEventListener(&quot;click&quot;, e =&gt; console.log(\`Capturing: \${elem.tagName}\`), true);
            elem.addEventListener(&quot;click&quot;, e =&gt; console.log(\`Bubbling: \${elem.tagName}\`));
        }
    &lt;/script&gt;
           `,
          img: `../assets/images/javascript/Bubbling-and-capturing.svg`
        },
        {
          text1: ``,
          code1: ``,
          img: `../assets/images/javascript/event-phases.png`
        },
        {
          text1: `<b>event.target</b>
A handler on a parent element can always get the details about where it actually happened.

<u>The most deeply nested element that caused the event is called a target element, accessible as <b>event.target</b></u>.

Note the differences from this (<u>=event.currentTarget</u>):

<u>event.target</u> - is the “target” element that initiated the event, it doesn't change through the bubbling process.
<u>this</u> - is the “current” element, the one that has a currently running handler on it.
For instance, if we have a single handler <u>form.onclick</u>, then it can “catch” all clicks inside the form. No matter where the click happened, it bubbles up to &lt;form&gt; and runs the handler.

In <u>form.onclick</u> handler:
=> <u>this (=event.currentTarget)</u> is the &lt;form&gt; element, because the handler runs on it.
=> <u>event.target</u> is the actual element inside the form that was clicked.
`,
          code1: ``
        },        {
          text1: `<b>Stopping bubbling</b>
A bubbling event goes from the target element straight up. Normally it goes upwards till &lt;html&gt;, and then to document object, and some events even reach window, calling all handlers on the path.

But any handler may decide that the event has been fully processed and stop the bubbling.
The method for it is <b>event.stopPropagation()</b>.
For instance, here body.onclick doesn't work if you click on &lt;button&gt;:

<b>How to Stop Event Bubbling</b>
Event Bubbling is a default behavior for events. But in some cases, you might want to prevent this.
To prevent event bubbling, you use the <b>stopPropagation</b> method of the event object.

<b>Event.stopPropagation()</b> is a method that prevents an event from propagating up the DOM tree.

<b>How does Event.stopPropagation() work?</b>
When an event occurs on an element, it will normally bubble up through its parent elements and trigger any event listeners attached to them. By calling Event.stopPropagation(), you can stop this propagation so that the event will only trigger the listener attached to the element where it occurred, and not any of its parent elements.

<b>Why would you use it?</b>
You might use Event.stopPropagation() if you want to prevent a parent element from handling an event that was triggered on a child element. For example, if you have a button inside a div, and clicking the button should not also trigger a click event on the div, you can call Event.stopPropagation() inside the button's click event listener.

When handling events, an <b>event</b> object is passed to the handling function:
The <b>event</b> object contains properties that have information about the event that was triggered and the element it was triggered on. This object also contains methods - one of which is <b>stopPropagation()</b>.
The <u>stopPropagation</u> method of an event prevents the event from propagating to the parents and ancestors of the element the event was triggered on.

The <b>stopPropagation()</b> method prevents propagation of the same event from being called.
Propagation means bubbling up to parent elements or capturing down to child elements.

Ex : 
Because DIV 1 is inside Div 2, both DIVs get clicked when you click on DIV 1.
Check the stop propagation checkbox, and try again.
The stopPropagation() method allows you to prevent propagation of the current event.

<h5>The stopPropagation() Method</h5>
<p>Click DIV 1:</p>
<div onclick="func2()">DIV 2
  <div onclick="func1(event)">DIV 1</div>
</div>

Stop propagation:
<input type="checkbox" id="check">

`,
          code1: `&lt;h1&gt;The stopPropagation() Method&lt;/h1&gt;

&lt;p&gt;Click DIV 1:&lt;/p&gt;
&lt;div onclick=&quot;func2()&quot;&gt;DIV 2
  &lt;div onclick=&quot;func1(event)&quot;&gt;DIV 1&lt;/div&gt;
&lt;/div&gt;

Stop propagation:
&lt;input type=&quot;checkbox&quot; id=&quot;check&quot;/&gt;


function func1(event) {
  alert("DIV 1");
  if (document.getElementById("check").checked) {
    event.stopPropagation();
  }
}

function func2() {
  alert("DIV 2");
}

//------------


body.addEventListener('click', () => {
  console.log("body was clicked")
})

div.addEventListener('click', () => {
  console.log("div was clicked")
})

span.addEventListener('click', () => {
  console.log("span was clicked")
})

button.addEventListener('click', (event) => {
  event.stopPropagation()
  console.log("button was clicked")
})
  


//-------------

// Let's say, for example, from our HTML code, that you want the div to open a modal when it is clicked. For the button, on the other hand, you want it to make an API request when it is clicked.

// In this case, you may not want the modal to open when you click the button. You might want the modal to only open when you actually click it (and not when you click any of its children). This is where preventing event "propagation" comes in.

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Event Propagation Example&lt;/title&gt;
    &lt;style&gt;
        #modal {
            display: none;
            background-color: rgba(0, 0, 0, 0.5);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
        }
        .modal-content {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id=&quot;modal&quot;&gt;
        &lt;div class=&quot;modal-content&quot;&gt;
            &lt;p&gt;This is a modal.&lt;/p&gt;
            &lt;button id=&quot;modalButton&quot;&gt;Close Modal&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;div id=&quot;outerDiv&quot; style=&quot;width: 300px; height: 300px; background-color: lightblue; text-align: center; padding: 20px;&quot;&gt;
        &lt;p&gt;Click this div to open the modal.&lt;/p&gt;
        &lt;button id=&quot;innerButton&quot;&gt;Click me for API Request&lt;/button&gt;
    &lt;/div&gt;

    &lt;script&gt;
        // Modal
        const modal = document.getElementById(&#39;modal&#39;);
        const outerDiv = document.getElementById(&#39;outerDiv&#39;);
        const innerButton = document.getElementById(&#39;innerButton&#39;);

        // Event listener to open the modal when the outer div is clicked
        outerDiv.addEventListener(&#39;click&#39;, function() {
            modal.style.display = &#39;flex&#39;;
            console.log(&#39;Modal opened&#39;);
        });

        // Event listener to simulate an API request when the button is clicked
        innerButton.addEventListener(&#39;click&#39;, function(event) {
            // Stop the event from propagating to the outer div (bubbling phase)
            event.stopPropagation();

            // Simulate an API request
            console.log(&#39;API request made&#39;);
        });

        // Close the modal when the close button inside the modal is clicked
        document.getElementById(&#39;modalButton&#39;).addEventListener(&#39;click&#39;, function() {
            modal.style.display = &#39;none&#39;;
            console.log(&#39;Modal closed&#39;);
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;


//------------------
// React Example
//-----------------
import React from 'react';

function MainEvent() {
  function handleInnerElementClick(event) {
    event.stopPropagation();
    console.log('Inner element clicked');
  }

  function handleDocumentClick() {
    console.log('Document clicked');
  }

  return (
    &lt;div id=&quot;outer&quot; onClick={handleDocumentClick} style={{backgroundColor: &#39;#09ca91&#39;, padding: &#39;15px&#39;}}&gt;
      &lt;div id=&quot;inner&quot; onClick={handleInnerElementClick} style={{backgroundColor: &#39;#ca459a&#39;, padding: &#39;15px&#39;}}&gt;
        Inner Element
      &lt;/div&gt;
    &lt;/div&gt;
  );
}

export default MainEvent;
`
        },
        {
          text1: `<b>stopImmediatePropagation</b>
          <b>stopPropagation</b> will prevent any parent handlers from being executed 
          <b>stopImmediatePropagation</b> will prevent any parent handlers and also any other handlers from executing
          The stopImmediatePropagation() method prevents other listeners of the same event from being called.

          <b>event.stopImmediatePropagation()</b>
If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones still execute.
In other words, <u>event.stopPropagation()</u> stops the move upwards, but on the current element all other handlers will run.
To stop the bubbling and prevent handlers on the current element from running, there's a method <u>event.stopImmediatePropagation()</u>. After it no other handlers execute.
As you must have understood, to make our example work, we must stop the propagation once the event handler for the button executes. We have two utilities for this - <b>event.stopPropagation()</b> and <b>event.stopImmediatePropagation()</b>. Both of them block the propagation of the event once encountered. There is only one difference in their work.
The <b>event.stopPropagation()</b> stops the event from going to the next element. All handlers associated with the current element for that particular event will still get executed. This does not happen in <b>event.stopImmediatePropagation()</b> where propagation stops immediately, and no event handlers execute even if they belong to the current element.
          
          If several listeners are attached to the same element for the same event type, they are called in the order in which they were added. If <b>stopImmediatePropagation()</b> is invoked during one such call, no remaining listeners will be called, either on that element or any other element.

          <b>#Event.stopImmediatePropagation()</b>
<b>Event.stopImmediatePropagation()</b> is a method that prevents an event from propagating up the DOM tree and prevents any further listeners on the current element from being called.

<b>How does it work?</b>
When an event occurs on an element, it will normally bubble up through its parent elements and trigger any event listeners attached to them. By calling <b>Event.stopImmediatePropagation()</b>, you can stop this propagation so that the event will only trigger the listener attached to the element where it occurred. Additionally, any other listeners on the same element will also be prevented from being called.

<b>Why would you use it?</b>
You might use <b>Event.stopImmediatePropagation()</b> if you want to prevent any other listeners on the same element from being called after a specific listener has been triggered. This can be useful if you have multiple listeners on the same element that might conflict with each other.


In <b>2nd</b> example, we define a React component <u>MyComponent</u> that renders a button with an <u>id</u> of "example" and a second button that simulates a click on the first button. We use the <u>useRef</u> hook to create a ref to the button element, and we use the <u>useEffect</u> hook to attach three event listeners to the button element, similar to the original example. We also define a <u>handleClick</u> function that simulates a click on the button element when the second button is clicked.

Note that we use the <u>useEffect</u> hook to attach and clean up the event listeners, similar to how we would use <u>addEventListener</u> and <u>removeEventListener</u> in JavaScript. Also, we use the <u>ref</u> attribute in React to create a reference to the button element, which we can use to attach the event listeners in the <u>useEffect</u> hook and to simulate a click in the <u>handleClick</u> function.
          `,
          code1: `
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Event Propagation Example&lt;/title&gt;
    &lt;style&gt;
        div {
            display: inline-block;
            padding: 10px;
            background-color: #fff;
            border: 2px solid #000;
            margin: 10px;
        }

        button {
            width: 100px;
            color: #008;
            padding: 5px;
            background-color: #fff;
            border: 2px solid #000;
            border-radius: 30px;
            margin: 5px;
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;h2&gt;Click on the buttons&lt;/h2&gt;
    &lt;div&gt;
        outer div&lt;br /&gt;
        &lt;div&gt;
            middle div&lt;br /&gt;
            &lt;div&gt;
                inner div&lt;br /&gt;
                &lt;button&gt;allow propagation&lt;/button&gt;&lt;br /&gt;
                &lt;button id=&quot;stopPropagation&quot;&gt;stop propagation&lt;/button&gt;&lt;br /&gt;
                &lt;button id=&quot;stopImmediatePropagation&quot;&gt;immediate stop propagation&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;pre&gt;&lt;/pre&gt;


    &lt;script&gt;
        const outElem = document.querySelector(&quot;pre&quot;);

        /* Clear the output */
        document.addEventListener(
            &quot;click&quot;,
            () =&gt; {
                outElem.textContent = &quot;&quot;;
            },
            true,
        );

        /* Set event listeners for the buttons */
        document.querySelectorAll(&quot;button&quot;).forEach((elem) =&gt; {
            for (let i = 1; i &lt;= 3; i++) {
                elem.addEventListener(&quot;click&quot;, (evt) =&gt; {
                    /* Do any propagation stopping in first event handler */
                    if (i === 1 &amp;&amp; elem.id) {
                        console.log(elem.id)
                        evt[elem.id]();
                        outElem.textContent += \`Event handler for event 1 calling \${elem.id}()\n\`;
                    }

                    outElem.textContent += \`Click event \${i} processed on &quot;\${elem.textContent}&quot; button\n\`;
                });
            }
        });

        /* Set event listeners for the divs */
        document
            .querySelectorAll(&quot;div&quot;)
            .forEach((elem) =&gt;
                elem.addEventListener(
                    &quot;click&quot;,
                    (evt) =&gt;
                        (outElem.textContent += \`Click event processed on &quot;\${elem.firstChild.data.trim()}&quot;\n\`),
                ),
            );

    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;


//-------------------Ex : 2--------------

import React, { useEffect, useRef, useState } from 'react';

function MyComponent() {
    const elementRef = useRef(null);
    const [isSetSIP, isSetSIPset] = useState(false)
    useEffect(() => {
        function listener1(event) {
            console.log('Listener 1');
            if(isSetSIP){
                event.stopImmediatePropagation();
            }
        }

        function listener2() {
            console.log('Listener 2');
        }

        function listener3() {
            console.log('Listener 3');
        }

        const element = elementRef.current;

        element.addEventListener('click', listener1);
        element.addEventListener('click', listener2);
        element.addEventListener('click', listener3);

        // Clean up event listeners when component unmounts
        return () => {
            element.removeEventListener('click', listener1);
            element.removeEventListener('click', listener2);
            element.removeEventListener('click', listener3);
        };
    }, [isSetSIP]);

    function handleClick() {
        const element = elementRef.current;
        element.click();
    }

    return (
        &lt;div&gt;
            &lt;input type=&quot;checkbox&quot; onChange={() =&gt; isSetSIPset((p) =&gt; !p)} /&gt;
            &lt;button id=&quot;example&quot; ref={elementRef}&gt;Example Button&lt;/button&gt;
            &lt;button onClick={handleClick}&gt;Simulate Click&lt;/button&gt;
        &lt;/div&gt;
    );
}

export default MyComponent;

`
        },
        {
          text1: `<b>preventDefault</b>
          <b>stopPropagation</b> prevents further propagation of the current event in the capturing and bubbling phases.
<b>preventDefault</b> prevents the default action the browser makes on that event.

<b>#Event.preventDefault()</b>
<u>Event.preventDefault()</u> is a method that prevents the default behavior of an element when an event is triggered.

<b>How does it work?</b>
When an event occurs on an element, it may have a default behavior associated with it. For example, clicking on a link will normally navigate to the URL specified in the href attribute of the link. By calling <u>Event.preventDefault()</u>, you can prevent this default behavior from occurring.

<b>Why would you use it?</b>
You might use <u>Event.preventDefault()</u> if you want to prevent the default behavior of an element when an event is triggered. This can be useful if you want to provide your own behavior for an element or if you want to prevent certain actions from occurring, such as submitting a form when a button is clicked.

In below example, we define a React component <u>MyComponent</u> that renders a link with an <u>id</u> of "example-link". We define a <u>handleClick</u> function that prevents the default behavior of the link (i.e., navigating to a new page) and logs a message to the console. We attach the <u>handleClick</u> function to the <u>onClick</u> attribute of the link element, similar to how we would use <u>addEventListener</u> in JavaScript.

Note that we use the <u>href</u> attribute to set the link URL to <u>#</u> in order to prevent the page from reloading when the link is clicked. We also use the <u>onClick</u> attribute in React to attach the event handler to the link element, rather than the <u>addEventListener</u> method in JavaScript.
`,
          code1: `import React from 'react';

function MyComponent() {
  function handleClick(event) {
    event.preventDefault();
    console.log('Link clicked');
  }

  return (
    &lt;div&gt;
      &lt;a href=&quot;#&quot; id=&quot;example-link&quot; onClick={handleClick}&gt;
        Example Link
      &lt;/a&gt;
    &lt;/div&gt;
  );
}

export default MyComponent;`
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
      title: "window vs document Object",
      note: [
        {
          text1: `<b>What is a JavaScript window?</b>
The window is at a root/top level at the JavaScript object hierarchy. It  is a global/root object in JavaScript and it is the root object of the Document object model(DOM);

<b>What is a JavaScript document?</b>
A document is an object inside the window object and we use a document object for manipulation inside the document.

The first thing that gets loaded into the browser is the window and the properties related to that window are stored in the window object. Properties related to window objects are length, innerWidth, innerHeight, caches, etc.

<b>There was a document object too so what about it then?</b>
So after the window gets loaded then there's a document (HTML, PHP, or another document) loaded inside that window, and the properties related to that document is stored in the document object. Properties related to document objects are title, URL, cookie, etc.
`,
          code1: `//Syntax:

// window object:
window.propertyname;

// document object:
document.propertyname
// OR
window.document.propertyname`
        },
        {
          text1: `<b>Window Object</b>
The Window object is a global object in client-side JavaScript, representing the browser window containing a DOM document and acting as the root of the document object model.

The window object, supported by all browsers, represents the browser's window and automatically includes global JavaScript objects, functions, and variables as members.

The Window object is responsible for managing global variables, functions, and objects, providing methods for browser interaction and managing properties related to frames, tabs, or windows, such as <u> alert(), confirm(), setTimeout(), and setInterval() </u>.

Few properties and methods of window objects are,

<b>Browser Object Model (BOM)</b>
The Browser Object Model contains objects that represent the current browser window or tab. The topmost object in the BOM is the window object representing the window or tab or an iframe sometimes. Window object has properties like browser history, location and the device's screen etc. In case of multi tab browser, a window object represents a single tab, but some of its properties like innerHeight, innerWidth and methods like resizeTo() will affect the whole browser window.

The <b>window object</b> in JavaScript provides access to the browser's history, location, and other properties and methods that allow us to interact with the browser window itself. It contains information about the browser window, like the size, the document the window contains, and the window's history.

<b>Properties</b>
<b>window.innerHeight</b> - the inner height of the browser window (in pixels)
<b>window.innerWidth</b> - the inner width of the browser window (in pixels)

<b>Methods</b>
<b>window.open()</b> - open a new window
<b>window.close()</b> - close the current window
<b>window.moveTo()</b> - move the current window
<b>window.resizeTo()</b> - resize the current window

A <b>window object</b> is a global object in JavaScript, which is available in all contexts throughout your code. You can access it directly using the window keyword.

Here are some examples of common tasks that involve the window object -
Getting the current URL of the page: <u>var currentUrl = window.location.href;</u>
Getting the width of the browser window: <u>var windowWidth = window.innerWidth;</u>
Getting the height of the browser window: <u> var windowHeight = window.innerHeight;</u>
Opening a new window: <u>window.open('http://www.example.com', '_blank');</u>
Closing the current window: <u>window.close();</u>
`,
          code1: `&lt;/head&gt;
&lt;body&gt;
   &lt;h2&gt;JavaScript Window&lt;/h2&gt;
   &lt;p id=&quot;innerHeight&quot;&gt;&lt;/p&gt;
   &lt;p id=&quot;innerWidth&quot;&gt;&lt;/p&gt;
   &lt;p id=&quot;currentUrl&quot;&gt;&lt;/p&gt;
   &lt;script&gt;
      const height = document.getElementById(&#39;innerHeight&#39;);
      const width = document.getElementById(&#39;innerWidth&#39;);
      const url = document.getElementById(&#39;currentUrl&#39;);
      height.textContent = &quot;innerHeight - &quot; +
      window.innerHeight;
      width.textContent = &quot;innerWidth - &quot; +
      window.innerWidth;
      url.textContent = &quot;currentUrl - &quot; + window.location.href;
   &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;

// Output :
// JavaScript Window
// innerHeight - 607
// innerWidth - 1366
// currentUrl - file:///D:/forms-code/index.html
`,
          img: `../assets/images/javascript/window-object.webp`
        },
        {
          text1: `<b>Document Object</b>
The Document object is the HTML document that appears in the browser window and serves as an interface for interacting with the web page's content. The browser generates a Document Object Model of a web page upon loading it.

The <u>W3C Document Object Model (DOM)</u> is a platform-neutral interface that enables dynamic access and updating of a document's content, structure, and style by programs and scripts.

The DOM is a logical tree in a document, with methods allowing programmatic access to change its structure, style, or content.

The DOM manipulation tool offers methods to access and manipulate the structure and content of a document, such as getElementById(), querySelector(), createElement(), and innerHTML. It represents the entire HTML document as a node tree, with the Document object as the root node. It allows dynamic updates and interactions with web page content.

Few properties and methods of Document Object Model,

<b>Properties</b>
<u>element.innerHTML = new html content</u> //Change the inner HTML of an element
<u>element.attribute = new value</u> //Change the attribute value of an HTML element

<b>Methods</b>
<u>document.createElement(element)</u> //Create an HTML element
<u>document.removeChild(element)</u> //Remove an HTML element

<b>Document Object Model</b>
When a web page is loaded, the browser creates a Document Object Model of the page. The document object represents the whole html document as a tree of Objects(HTML, HEAD, BODY, and other HTML tags). It is the root element that represents the html document.

These are the few methods and properties of <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model" target="_blank">DOM</a>, to know more you can refer to MDN docs here.

The <b>document object</b> represents the structure of the web page as a whole and provides access to the content of the page, as well as methods for manipulating that content. It contains information about the content of the page, like the URL, the title, the content, and the links.

For example, we can use the document.getElementById() method to get a reference to an element on the page by its ID, or the document.createElement() method to create a new element. We can also use the window object to manipulate the browser window, such as with the window.open() method to open a new window, or the window.scrollTo() method to scroll to a specific position on the page.

<b>JavaScript Document</b>
In JavaScript, the <b>document object</b> represents the web page currently loaded in the web browser. It provides access to the content of the page, as well as methods for manipulating that content.

The <b>document object</b> is a property of the window object and is also a global object in JavaScript, which means that it is available in all contexts throughout your code. You can access it directly using the document keyword.

Below are some examples of common tasks that involve the document object -
Getting the title of the document: <u> var docTitle = document.title; </u>
Getting the last modified date of the document: <u> var modified = document.lastModified; </u>
Getting the body element of the document: <u> var bodyEl = document.body; </u>
Getting an element by its ID: <u> var el = document.getElementById('my-element'); </u>
Creating a new element: <u> var newEl = document.createElement('div'); </u>
`,
          code1: `//Syntax
//The syntax for a javascript document is as follows -

document.propertyName
//--------

&lt;head&gt;
   &lt;title&gt;Example- JavaScript Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
   &lt;h2&gt; JavaScript Document &lt;/h2&gt;
   &lt;p id=&quot;title&quot;&gt;&lt;/p&gt;
   &lt;p id=&quot;currentUrl&quot;&gt;&lt;/p&gt;
   &lt;script&gt;
      const p = document.getElementById(&#39;title&#39;);
      const url = document.getElementById(&#39;currentUrl&#39;);
      p.textContent = &quot;Doc Title - &quot; + document.title;
      url.textContent = &quot;Doc CurrentUrl - &quot; + document.location.href;
   &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
`,
          img: `../assets/images/javascript/document-object.gif`
        },
        {
          text1: `<b>Window Vs Document</b>
<b>Window object</b> : It is the top most object and outermost element of the object hierarchy as shown in Figure 1.

<b>Document object</b> : Each HTML document that gets loaded into a window becomes a document object. The document contains the contents of the page. Using document object, JavaScript can modify, add and delete the HTML elements, attributes CSS styles in the page

The window object represents a window/tab containing a DOM document where as document object is property of window object that points to the DOM document loaded in that window.

You can access a document object either using window.document property or using document object directly as window is global object. In the below example, title is the property of document object.

The other major difference is that both window object and document object have properties and methods. Few method names are same in both objects but with different behavior. In the below example window.open() opens a new tab or window and document.open() creates a blank document within the window.

<b>Screen</b>
Screen is the window property that holds information of browser screen. It refers to screen object associated with that window object. Used to display screen width, height, colorDepth, pixelDepth etc

Similar to document screen can be accessed either by window.screen or screen object directly. Screen object doesn't have any methods as in window and document objects.


<div class='table-res'>
          <table class="table table-bordered">
<tbody><tr>
<th>JavaScript's window</th>
<th>JavaScript's document</th>
</tr>
<tr>
<td>It represents the current web browser window.</td>
<td>It represents the web page that is currently loaded in the window.</td>
</tr>
<tr>
<td>Its properties include location, history, innerWidth, innerHeight, etc.</td>
<td>Its properties include title, lastModified, body, head, etc.</td>
</tr>
<tr>
<td>JavaScript windows methods are: open(), close(), scrollTo(), alert(), etc.</td>
<td>JavaScript windows methods are: getElementById(), createElement(), querySelector(), querySelectorAll(), etc.</td>
</tr>
<tr>
<td>It is available globally.</td>
<td>It is available globally.</td>
</tr>
<tr>
<td>It is an object of a window.</td>
<td>It is an object of the browser.</td>
</tr>
</tbody></table>
</div>
`,
          code1: `
          //Screen
          window.screen.height
          
          screen.height
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
      title: "Custom event",
      note: [
        {
          text1: `<b>Creating a Custom Event</b>:
          There are two ways to create custom events.

=> The first way is using an <b>Event</b> constructor.
=> The second way is using the <b>CustomEvent</b> constructor which we prefer.

To create a custom event we use the Event constructor or CustomEvent interface. The Event constructor creates an <b>Event</b> and <b>CustomEvent</b> creates an Event with more functionality.

The below steps are followed to create one using a new <b>Event</b>.

=> We create an event using the Event constructor.
=> We listen to this event using the <b>addEventListener()</b> method.
=> We trigger or dispatch the event using <b>element.dispatchEvent(eventName)</b> method.
=> A custom Event named <b>start</b> has now been created.

<b>bubbles</b>
The <b>bubbles</b> property specifies whether the event should be propagated upward to the parent element. Setting this to <b>true</b> means that if the event gets dispatched in a child element, the parent element can listen on the event and perform an action based on that. This is the behavior of most native DOM events, but for custom events, it is set to <b>false</b> by default.

If you only want the event to be dispatched at a particular element, you can stop the propagation of the event via <b>event.stopPropagation()</b>. This should be in the callback that listens on the event. More on this later.

<b>cancelable</b>
As the name implies, <b>cancelable</b> specifies whether the event should be cancelable.

Native DOM events are cancelable by default, so you can call <b>event.preventDefault()</b> on them, which will prevent the default action of the event. If the custom event has <b>cancelable</b> set to <b>false</b>, calling <b>event.preventDefault()</b> will not perform any action.

<b>composed</b>
The <b>composed</b> property specifies whether an event should bubble across from the shadow DOM (created when using web components) to the real DOM. If <b>bubbles</b> is set to <b>false</b>, the value of this property won't matter because you're explicitly telling the event not to bubble upward. However, if you want to dispatch a custom event in a web component and listen on it on a parent element in the real DOM, then the composed property needs to be set to <b>true</b>.

A drawback of using this method is that you can't send data across to the listener. However, in most applications, we would want to be able to send data across from where the event is being dispatched to the listener. To do this, we can use the <b>CustomEvent</b> controller

You can't also send data using native DOM events. Data can only be gotten from the event's target.
`,
          code1: `
          // we created an event, "myevent", by passing the event name to the "Event" constructor. Event names are case-insensitive, so "myevent" is the same as "myEvent" and "MyEvent", 
          const myEvent = new Event('myevent', {
  bubbles: true,
  cancelable: true,
  composed: false
})

//------------
          // To assign event
const startEvent = new Event("start");
// To trigger the event Listener
document.addEventListener("start", () => {
    console.log("The start event was triggered")
});
// To trigger the Event
document.dispatchEvent(startEvent);
          
`
        },        
        {
          text1: `<b>Creating a custom event using CustomEvent</b>:
Creating custom events using the CustomEvent interface has an advantage as it can send custom data. The below steps are followed in order to create a new CustomEvent.

=> We create a custom event using the CustomEvent constructor.
=> This takes two arguments, the first is the name of the event and the second is an object that contains the data. The property name inside the object name should be named <b>detail</b> otherwise it won't work.
=> We create a listener for this event.
=> We trigger or dispatch the event.
=> A custom event that contains data has been created.
`,
          code1: `
          // To assign event
const event = new CustomEvent("start", {
      detail: {
        platform : "GeeksforGeeks"
      }
});

// To trigger the event Listener
document.addEventListener('start', (e)=>{
      console.log(
        \`start event triggered on platform :
        \${e.detail.platform}\`
        );
});
// To trigger the Event
document.dispatchEvent(event);
          

//-------------
          
          window.addEventListener("xyz", event => console.log(event.detail));

event = new CustomEvent("xyz", {
  detail: {
    action: "didInitialize",
    payload: 3
  }
});

window.dispatchEvent(event);`
        },
        {
          text1: `<b>dispatchEvent()</b>
          The dispatchEvent() method is a JavaScript function used to trigger (or "dispatch") an event on a specified target (such as a DOM element, document, window, or custom object). It allows developers to programmatically fire an event, simulating user interactions or other events that might need to be triggered under specific conditions.
          
          The <b>dispatchEvent</b> method allows you to simulate an event on an element. Why do you need it: you can simulate a user clicking on a button, trying to submit a form, and so on. In this case, the event will not differ from the real one except for the <b>event.isTrusted</b> property. You can even create events with non-standard (your own) names and then call them at the right time. The method is applied to the element on which the event is to be fired. As a parameter, the method receives an event (object) created using the new Event constructor.
          `,
          code1: `element.dispatchEvent(event);
          
          const event = new CustomEvent('NOTIFICATION_ADD', { 
  detail: {
    title: 'Error!',
    message: 'There was a problem creating your account.'
  }
});

function handleButtonClick(){
	window.dispatchEvent(event);
}

function handleAddNotification(e) {
  alert(e.detail.title + ' ' + e.detail.message);
}

window.addEventListener('NOTIFICATION_ADD', handleAddNotification);

&lt;button onclick=&quot;handleButtonClick()&quot;&gt;
  Create my account
&lt;/button&gt;
`
        },
        {
          text1: `To generate an event programmatically, you follow these steps:

First, create a new <u>Event</u> object using <u>Event</u> constructor.
Then, trigger the event using <u>element.dispatchEvent()</u> method.
Event constructor
To create a new event, you use the <u>Event</u> constructor like this:

let event = new Event(type, [,options]);

The <u>Event</u> constructor accepts two parameters:

<b>type</b>
is a string that specifies the event type such as 'click'.

<b>options</b>
is an object with two optional properties:

=> <u>bubbles</u>: is a boolean value that determines if the event bubbles or not. If it is <u>true</u> then the event is bubbled and vice versa.
=> <u>cancelable</u>: is also a boolean value that specifies whether the event is cancelable when it is <u>true</u>.

By default, the <u>options</u> object is:
{ bubbles: false, cancelable: false}

For example, the following creates a new <u>click</u> event with the default <u>options</u> object:

let clickEvent = new Event('click');

After creating an event, you can fire it on a target element using the <u>dispatchEvent()</u> method like this:

element.dispatchEvent(event);




In Below example, the event handler is executed as if the <u>click</u> event were generated by user actions.

If the event comes from the user actions, the <u>event.isTrusted</u> property is set to <u>true</u>. In case the event is generated by code, the <u>event.isTrusted</u> is <u>false</u>. Therefore, you can examine the value of <u>event.isTrusted</u> property to check the “authenticity” of the event.

The <u>Event</u> is the base type of <u>UIEvent</u> which is the base type of other specific event types such as <u>MouseEvent, TouchEvent, FocusEvent</u>, and <u>KeyboardEvent</u>.

It's a good practice to use the specialized event constructor like MouseEvent instead of using the generic <u>Event</u> type because these constructors provide more information specific to the events.

For example, the <u>MouseEvent</u> event has many other properties such as <u>clientX</u> and <u>clientY</u> that specify the horizontal and vertical coordinates at which the event occurred relative to the viewport:

let clickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    clientX: 150,
    clientY: 150
});

The dispatchEvent() method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order. The normal event processing rules (including the capturing and optional bubbling phase) also apply to events dispatched manually with dispatchEvent().
`,
          code1: `//HTML:
&lt;button class=&quot;btn&quot;&gt;Test&lt;/button&gt;

// JavaScript:
let btn = document.querySelector('.btn');

 btn.addEventListener('click', function () {
        alert('Mouse Clicked');
 });

let clickEvent = new Event('click');
btn.dispatchEvent(clickEvent);`
        },
        {
          text1: ``,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "parallel or concurrently or sequentially",
      note: [
        {
          text1: ``,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "import and export modules",
      note: [
        {
          text1: ``,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "Browsers",
      note: [
        {
          text1: `Browsers can only access some response headers by default when it comes to CORS request, the default response headers are the ones listed below:

-> Cache-Control
-> Content-Language
-> Content-Type
-> Expires
-> Last-Modified
-> Pragma
`,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "CORS request",
      note: [
        {
          text1: ``,
          code1: ``
        },
      ]
    },

  ]
}


function func1(event) {
  alert("DIV 1");
  if (document.getElementById("check").checked) {
    event.stopPropagation();
  }
}

function func2() {
  alert("DIV 2");
}