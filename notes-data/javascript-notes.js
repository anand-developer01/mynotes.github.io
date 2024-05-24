const javascriptData = {
  javascriptNote: [
    {
      id: 1,
      section:`JAVASCRIPT RUNTIME`,
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
          text1: `
          During the creation phase of the execution context, the JavaScript engine places the add() function declaration in the heap memory. To be precise, the JavaScript engine creates an object of the Function type and a function reference add that refers to the function object.
          
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
          text1: ` `
        }
      ]
    },
    {
      id: 1,
      title: "variable scope",
      note: [
        {
          text1: `      Scope determines the visibility and accessibility of a variable. JavaScript has three scopes:

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
          text1: `An Application Programming Interface (API) is a software interface that allows two or more programs to communicate by acting as an intermediary between them.

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
          text1: `A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.
          (or)
  Lexical Scoping: A function scope's ability to access variables from the parent scope is known as lexical scope.
          (or)
  the inner functions have access to the variables and other resources of their parent scope.
  
  -The global scope is always the last scope of any JavaScript scope chain. In other words, the global scope is where all searches will end.
  -An inner (child) scope has access to its parent (outer) scope, but an outer scope does not have access to its child scope.
  
  Note:
  Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.`,
          code1: ``
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
      section:"ADVANCED FUNCTIONS",
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

A closure is a function that has access to the variables and parameters of its outer function, even after the outer function has returned. This is possible because the inner function retains a reference to the scope of the outer function, even after the outer function has been executed.

          In other words, closure is created when a child function keep the environment of the parent scope even after the parent function has already executed 

          Variables created without a declaration keyword <b>(var, let, or const)</b> are always global, even if they are created inside a function.
          In JavaScript, a closure is created when a function is defined within another function, allowing the inner function to access variables from the outer (enclosing) function's scope. Closures have access to the outer function's variables, parameters, and even the outer function's this context. This provides a way to create private variables, maintain state, and create functions with behavior that depends on their lexical environment.

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
          code1: ``
        },
        {
          text1: ``,
          code1: `
          // Example 2: Private Variables

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
          // Here, the inner function within counter forms a closure, and count is a private variable accessible only within that closure. This creates a way to have private state in JavaScript.
          
          Example 3: Function Factory
          
          function createMultiplier(factor) {
              return function(number) {
                  return number * factor;
              };
          }
          
          const double = createMultiplier(2);
          console.log(double(5)); // Outputs: 10

          // In this example, createMultiplier is a function factory that generates closure functions. The closure function (double) created with a specific factor retains access to that factor when invoked later.
          
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
          
          // Example 5: Closure with Parameters
          
          function multiplier(factor) {
              return function (number) {
                  return factor * number;
              };
          }
          
          const multiplyByTwo = multiplier(2);
          console.log(multiplyByTwo(5)); // Outputs: 10


          // Here, multiplier returns a function that can be used to multiply a number by a specified factor. The inner function retains access to the factor parameter of its outer function, creating a closure.
          
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
          
          // Example 7: Private Variables
          
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
    
          `
        },
        {
          text1: ` Here, createPerson returns an object with methods that have access to both name and age, creating private variables. The closure allows these variables to be accessed and modified only through the methods provided.

          Closures in JavaScript provide a powerful mechanism for creating modular and encapsulated code, enabling the creation of private variables, maintaining state, and implementing various programming patterns.
          
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
          code1 : `
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

          When working with asynchronous operations, such as making API requests or fetching data from a database, it is common to encounter situations where you need to handle the result of the operation once it completes.  Closures can help you manage this by capturing the state of variables at the time the asynchronous operation is initiated.`,
          code1:`function fetchData(url) {
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
          code1: `      function sayHello(greeting, punctuation) {
            console.log('\${greeting}, \${this.name} \${punctuation}');
        }
  
        const person = {
            name: 'John'
        };
  
        sayHello.apply(person, ['Hi', '!']); // Outputs: "Hi, John!"
        // In this example, sayHello.apply(person, ['Hi', '!']) calls the sayHello function with person as the value of this and the array ['Hi', '!'] as the arguments, resulting in the message "Hi, John!" being logged to the console.`
        },
        {
          text1: `      apply() is particularly useful when you have a function that accepts a variable number of arguments or when you want to pass an array of arguments dynamically.

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
          text1: `          In this example, originalFunction is a simple function that logs the name property of whatever object it is called on. We then use bind() to create a new function boundFunction where this is explicitly set to the obj object. When we call boundFunction(), it prints the name property of obj.

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
          text1: `      Understanding the context of <b>this</b> is essential for working effectively with objects, constructors, and event handling in JavaScript. It allows developers to write more flexible and dynamic code by accessing and manipulating object properties within different execution contexts. However, it's important to be cautious when dealing with <b>this</b>, as its behavior can be affected by various factors such as function binding, arrow functions, and strict mode.`,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "Callback",
      note: [
        {
          text1: `In JavaScript, a callback function is a function that is passed as an argument to another function and is executed after the completion of some asynchronous operation or at a later time. 
      
          Callbacks are a fundamental concept in JavaScript, especially in scenarios like event handling, asynchronous operations, and dealing with functions that take time to complete, such as fetching data from a server.
    
          We need callback functions because many JavaScript actions are asynchronous, which means they don't really stop the program (or a function) from running until they're completed, as you're probably used to. Instead, it will execute in the background while the rest of the code runs.
    
          when we have a function that might take a long time to complete, oftentimes we provide a callback function. This function encapsulates the code we would like to run at a later time when the blocking action (e.g a network call) has been resolved. This allows us to return control to the JS engine and defer the rest of the execution until after the call-stack has been cleared. This is the concept of asynchrony in JavaScript.
          
          Here's a simple example of a callback function:`,
          code1: `      function fetchData(callback) {
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
          text1: ` In JavaScript, you use the <b>unshift()</b> method to add one or more elements to the beginning of an array and it returns the array's length after the new elements have been added.

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
      title: "splice() - (adds, removes or replaces elements)",
      note: [
        {
          text1: `<b>The splice() method modifies an array(adds, removes or replaces elements).</b>

          splice() method that allows you to insert new elements into the middle of an array. Also, you can use this method to delete and replace existing elements as well.
          ---------------------
          <i><u>Deleting elements using JavaScript Array's splice() method</i></u>
---------------------
To  delete elements in an array, you pass two arguments into the splice() method as follows:
<span style="color:red">Array.splice(position,num);</span>
The <b>position</b> specifies the position of the first item to delete and the <b>num</b> argument determines the number of elements to delete.
The splice() method changes the original array and returns an array that contains the deleted elements.

Let's take a look at the following example.
Suppose, you have an array <b>scores</b> that contains five numbers from 1 to 5.
`,
          code1: `let scores = [1, 2, 3, 4, 5];
          // The following statement deletes three elements of the 'scores' array starting from the first element.
          
          let deletedScores = scores.splice(0, 3);
          // The scores array now contains two elements.
          
          console.log(scores); //  [4, 5]
          // And the deletedScores array contains three elements.
          
          console.log(deletedScores); // [1, 2, 3]
          // The following figure illustrates the scores.splice(0, 3) method call above.

          // The following figure illustrates the scores.splice(0,3) method call above.
          // 0: The position of the first item to delete
          // 3: The number of elements to delete`
        },
        {
          text1: `
          ---------------------
          <i><u>Inserting elements using the JavaScript Array splice() method</u></i>
          ---------------------

          You can insert one or more elements into an array by passing three or more arguments to the splice() method with the second argument is zero.

          Consider the following syntax.

          Array.splice(position,0,new_element_1,new_element_2,...);

          In this syntax:

          The <b>position</b> specifies the starting position in the array in which the new elements will be inserted.
          The second argument is zero (0) which instructs the splice() method to not delete any array elements.
          The third argument, fourth argument, and so on are the new elements that are inserted into the array.
          Note that the splice() method changes the original array. Also, the splice() method does not remove any elements, therefore, it returns an empty array. For example:

          `,
          code1: `// Assuming that you have an array named colors with three strings:

          let colors = ['red', 'green', 'blue'];
          
          // The following statement inserts one element after the second element.
          
          colors.splice(2, 0, 'purple');
          // The colors array now has four elements with the new element inserted in the second position.
          
          console.log(colors); // ["red", "green", "purple", "blue"]
          // The following figure demonstrates the method call above.
          
          // 2: starting position to Intert
          // 0: number of elements to delete(not delete any array elements.)
          // "purple": new element to insert.
          
          // You can insert more than one element by passing the fourth argument, the fifth argument, and so on to the splice() method as in the following example.
          
          colors.splice(1, 0, 'yellow', 'pink');
          console.log(colors); 
          ["red", "yellow", "pink", "green", "purple", "blue"]
          `
        },
        {
          text1: `---------------------
          <i><u>Replacing elements using the JavaScript Array splice() method</i></u>
          ---------------------
          
          The splice() method allows you to insert new elements into an array while deleting existing elements simultaneously.
          
          To do this, you pass at least three arguments with the second one that specifies the number of items to delete and the third one that indicates the elements to insert.
          
          Note that the number of elements to delete needs not be the same as the number of elements to insert.
          
          Suppose you have an array of programming languages with four elements as follows:
          `,
          code1: `let languages = ['C', 'C++', 'Java', 'JavaScript'];
          // The following statement replaces the second element with a new one.
          
          languages.splice(1, 1, 'Python');
          // The 'languages' array now still has four elements with the new second argument is 'Python' instead of 'C++'.
          
          console.log(languages);
          // ["C", "Python", "Java", "JavaScript"]
          // The following figure illustrates the method call above.
          
          // You can replace one element with multiple elements by passing more arguments into the splice() method as follows:
          
          languages.splice(2, 1, 'C#', 'Swift', 'Go');
          // The statement deletes one element from the second element i.e., 'Java' and inserts three new elements into the 'languages' array. The result is as follows.
          
          console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
          
          //------------------->
          const months1 = ['Jan', 'March', 'April', 'June'];
          months1.splice(1, 0, 'Feb');
          // 'Feb' Inserts at index 1
          console.log(months1);
          // Expected output: Array ["Jan", "Feb", "March", "April", "June"]
          
          months1.splice(4, 1, 'May');
          // 'May' Replaces 1 element at index 4
          console.log(months1);
          // Expected output: Array ["Jan", "Feb", "March", "April", "May"]
          
          //-------------------->
          const months = ['Jan', 'Feb', 'Monday', 'Tuesday'];
          const days = months.splice(2, 2, 'March', 'April');
          console.log(months) //  ['Jan', 'Feb', 'March', 'April']
          console.log(days) // ['Monday', 'Tuesday']`
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
      title: "slice() - copy elements of an array.",
      note: [
        {
          text1: `The slice() method accepts two optional parameters as follows:

          slice(start, stop);
          Both <b>start</b> and <b>stop</b> parameters are optional.
          
          The <b>start</b> parameter determines the zero - based index at which to start extraction.If the <b>start</b> is <b>undefined</b>, slice() begins at 0.
          
          The <b>stop</b> parameter, as its name implies, is a zero - based index at which to end extraction.The slice() method extracts up to <b>stop-1</b>.It means that the slice() method doesn't include the element at the <b>stop</b> position in the new array.If you omit the <b>stop</b> parameter, the slice() method will use the length of the array for the <b>stop</b> parameter.
          
          The slice() returns a new array that contains the elements of the original array.It's important to keep in mind that the slice() method performs the shallow copy of elements to the new array only.In addition, it doesn't change the source array.
          
          
          Clone an array
          The slice() is used to clone an array as shown in the following example:
          `,
          code1: `var numbers = [1, 2, 3, 4, 5];
          var newNumbers = numbers.slice();
          // In this example, the 'newNumbers' array contains all the elements of the 'numbers' array.`
        },
        {
          text1: ` Copy a portion of an array
The typical use of the slice() method is to copy a portion of an array without modifying the source array.Here is an example:
`,
          code1: `function toArray() {
            return Array.prototype.slice.call(arguments);
          }
          var classification = toArray('A', 'B', 'C');
          console.log(classification); // ["A", "B", "C"]`
        },
        {
          text1: `
          In this example, the <b>arguments</b> of the toArray() function is an array-like object. Inside the toArray() function, we called the slice() method to convert the arguments object into an array.

          Every argument we pass to the toArray() function will be the elements of the new array.
          
          Another typical example that you often see is converting a <b>NodeList</b> into an array as follows:
          `,
          code1: `var p = document.querySelectorAll('p');
          var list = Array.prototype.slice.call(p);
          
          // In this example, first, we used the 'document.querySelectorAll()' to get all 'p' nodes of the HTML document.The result of this method is a 'NodeList' object, which is an array - like object.Then, we called the 'slice()' method to convert the 'NodeList' object into an array.
          
          //   Sometimes, you see the following syntax:
          
          var list = [].slice.call(document.querySelectorAll('p'));
          
          // In this example, we instantiated an empty array '[]' and indirectly accessed the 'slice()' method of the 'Array.prototype' method through the empty array.The effect is the same as the one that uses the 'Array.prototype' directly.`
        },
      ]
    },
    {
      id: 1,
      title: "concat() - merge two arrays into an array",
      note: [
        {
          text1: `To merge two or more arrays, you use the <b>concat()</b> method of an Array object.The <b>concat()</b> method returns a new array and doesn't change the original arrays.For example:`,
          code1: `let odds = [1, 3, 5];
          let evens = [2, 4, 6];
          // merge odds and evens array
          let combined = odds.concat(evens);
          
          console.log('Result:', combined);
          console.log('Odds:', odds);
          
          
          // Output:
          // Result: [ 1, 3, 5, 2, 4, 6 ]
          // Odds: [ 1, 3, 5 ]`
        },
        {
          text1: `In this example, we have two arrays: <b>odds</b> and <b>evens</b>.We call the <b>concat()</b> method of the <b>odds</b> array method to merge elements of the two arrays.The elements of the second array are appended to the elements of the first array.

          Similarly, you can call the <b>concat()</b> method on an empty array denoted by(<b>[]</b>):`,
          code1: `let odds = [1, 3, 5];
          let evens = [2, 4, 6];
          // merge odds and evens array
          let combined = [].concat(odds, evens);
          
          console.log(combined);
          
          // Output:
          // [1, 3, 5, 2, 4, 6]
          

          //------------------ 
          // The 'concat()' method allows you to merge more than two arrays as shown in the following example:
          
          let upper = ['A', 'B', 'C'];
          let lower = ['a', 'b', 'c'];
          let digits = [1, 2, 3];
          let alphanumerics = upper.concat(lower, digits);
          
          // Output:
          // ['A', 'B', 'C', 'a', 'b', 'c', 1, 2, 3]
          
          // In this example, we merge the three arrays: 'upper', 'lower', and 'digits'.
          

          //-------------------
          // When you don't pass any argument into the 'concat()' method, it simply clones the array and returns it:
          

let colors = ['red', 'green', 'blue'];
let rgb = colors.concat();
console.log(rgb);

// Output:
// [ 'red', 'green', 'blue' ]


//-----------------------
// If you pass values that are not arrays, into the 'concat()' method, the method will appends each value to the end of the result array:

let rgb = ['red', 'green', 'blue'];
let moreColors = rgb.concat('yellow', 'magento');
console.log(moreColors);

// Output:
// ['red', 'green', 'blue', 'yellow', 'magento']


//---------------------
// In ES6, you can use spread operator to merge multiple arrays as follows:

let odds = [1, 3, 5];
let evens = [2, 4, 6];
let combined = [...odds, ...evens];
console.log(combined);

// Output:
// [ 1, 3, 5, 2, 4, 6 ]
          `
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

If you execute the JavaScript in the environment that doesn’t support the  'Array.of()' method, you can use the following polyfill:
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
          
           Note that the <b>flatMap()</b> method doesn’t modify the original array.
          
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
          text1: `The result is an array of nested arrays filled by words.To flatten the result, you can use the 'flat()' method on the result of the 'map()' method.However, it’ll be more concise to use the 'flatMap()' method.

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
      title: "Protojoin() - concatenate all elements of an array into a string separated by a separator.types",
      note: [
        {
          text1: ``,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "Prototypes",
      note: [
        {
          text1: ``,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      section: "JAVASCRIPT OBJECTS",
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
      title: "Prototypes",
      note: [
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
          
          console.log(Person[Symbol.hasInstance](p1)); // true`
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
    }


  ]
}