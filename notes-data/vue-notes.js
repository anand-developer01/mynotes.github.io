const vueData = {
    vueNote: [
      {
        id: 1,
        title: "what is difference between framework and library ",
        note: [
          {
            text1: `<b>Library</b>:
  Library: A library, on the other hand, is a collection of functions, methods, and classes that you can use to perform specific actions or solve specific problems in your code. Libraries typically don't impose a strict structure on your code or dictate the flow of control. Instead, you call functions or methods from the library when you need them, and your code remains in control of the overall flow. Examples include jQuery, Lodash, and Axios.
  
                      A library is a collection of pre-written code that you can use to perform specific tasks. Libraries are often used to reduce the amount of code a programmer needs to write by providing reusable functions or classes that can be called upon as needed.
                      
                      A library is a collection of pre-written code that developers can use in their programs. It provides specific functions or classes that can be called by the application code.
  
                      <b>More Control</b>: Developers have more control when using libraries. They can choose which functions or classes to use and how to integrate them into their code.
                      <b>Specific Usage</b>: Libraries are typically used for specific tasks. For example, a graphics library might provide functions for drawing shapes and images.
                      <b>More flexible</b>: Developers have more flexibility when using libraries, picking and choosing specific components as needed. Frameworks are often less flexible in terms of structure and conventions.
                      <b>Lower learning curve</b>: Library has generally a lower learning curve since developers can choose specific components to use without being required to understand the entire library.
  
                      //------------------
  
                      <b>framework</b>
                      Framework: A framework is a comprehensive software infrastructure that provides a set of pre-defined rules, guidelines, and abstractions that dictate the flow of control of the application. In other words, with a framework, you write the code that fits into the framework, and the framework calls your code when it's appropriate. The control flow is largely dictated by the framework itself. Examples include AngularJS, React, and Django.
  
                      A framework is a set of libraries or tools that provide a structure for building applications. It typically includes code libraries, templates, and guidelines for how to use the libraries to develop applications.
  
                      Frameworks can be useful for developers because they provide a standardized way to build and organize code, which can help streamline the development process and make it easier to build and maintain complex applications.
  
  Framework:
  A framework is a more comprehensive and structured collection of pre-written code that provides a skeleton for building applications.
  
  <b>Steeper learning curve</b>: Frameworks may have a steeper learning curve as developers need to understand the framework's architecture, conventions, and overall structure.
  <b>Less Control/Flexibilty</b>: framework dictates the overall structure and flow of the application. Developers need to follow the framework's conventions and structure.
  <b>Higher level of abstraction</b> : Frameworks provide a higher level of abstraction and control the flow of the application.
  <b>Build entire applications</b>: Frameworks are used to build entire applications. They often come with predefined patterns, tools, and best practices for developing within a specific domain, such as web development or mobile app development.
  
                      <b>Key Differences:</b>
                      <b>Inversion of Control</b>: In a framework, the control flow is inverted. The framework calls the developer's code, whereas in a library, the developer calls the library's code.
                      <b>Extensibility</b>: Libraries are more easily replaceable, whereas frameworks are more opinionated and provide a more comprehensive structure for the entire application.
                      <b>Size and Scope</b>: Libraries tend to be smaller and focused on specific tasks, while frameworks are larger and provide a more complete infrastructure for application development.
  
  
                      <div class='table-res'>
                          <table border=1 >
                          <tbody> 
                           <tr> 
                            <td><strong>Parameter</strong></td> 
                            <td><strong>Framework</strong></td> 
                            <td><strong>Library</strong></td> 
                           </tr> 
                           <tr> 
                            <td>Control Flow</td> 
                            <td>Controls the overall flow of the application</td> 
                            <td>Developer retains control over the flow</td> 
                           </tr> 
                           <tr> 
                            <td>Extensiveness</td> 
                            <td>More comprehensive, providing a broad set of tools</td> 
                            <td>Focuses on specific functionality or problem-solving</td> 
                           </tr> 
                           <tr> 
                            <td>Flexibility</td> 
                            <td>More rigid with strict conventions and guidelines</td> 
                            <td>More flexible, allowing selective usage</td> 
                           </tr> 
                           <tr> 
                            <td>Architectural</td> 
                            <td>May enforce its own architectural patterns</td> 
                            <td>Does not dictate the overall application structure</td> 
                           </tr> 
                           <tr> 
                            <td>Examples</td> 
                            <td>Ruby on Rails, Django, React, Flutter</td> 
                            <td>jQuery, NumPy, Gson, Boost, OpenCV</td> 
                           </tr> 
                           <tr> 
                            <td>Inversion of Control</td> 
                            <td>Framework manages the flow and calls developer's code</td> 
                            <td>Developer decides when and how to use the library</td> 
                           </tr> 
                          </tbody> 
                          </table>
                      </div>
                      `,
            code1: ``
          }
        ]
      },
      {
        id: 1,
        title: "What is Vue",
        note: [
          {
            text1: `
                      Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative, component-based programming model that helps you efficiently develop user interfaces of any complexity.
                      
                      <b>Declarative Rendering</b>: Vue extends standard HTML with a template syntax that allows us to declaratively describe HTML output based on JavaScript state.
  
                      Declarative Rendering
                      What you see in the editor is a Vue Single-File Component (SFC). An SFC is a reusable self-contained block of code that encapsulates HTML, CSS and JavaScript that belong together, written inside a .vue file.
  
                      The core feature of Vue is declarative rendering: using a template syntax that extends HTML, we can describe how the HTML should look based on JavaScript state. When the state changes, the HTML updates automatically.
  
  <b>Reactivity</b>: Vue automatically tracks JavaScript state changes and efficiently updates the DOM when changes happen.
  
  <b>Creating a Vue Instance</b>
  Every Vue application starts by creating a new Vue instance with the Vue function:
  
  var vm = new Vue({
    // options
  })
  Although not strictly associated with the MVVM pattern, Vue's design was partly inspired by it. As a convention, we often use the variable <b>vm (short for ViewModel)</b> to refer to our Vue instance.
  
  When you create a Vue instance, you pass in an <b>options object</b>. The majority of this guide describes how you can use these options to create your desired behavior. For reference, you can also browse the full list of options in the API reference.
  
  A Vue application consists of a <b>root Vue instance</b> created with <b>new Vue</b>, optionally organized into a tree of nested, reusable components. For example, a todo app's component tree might look like this:
  
  `,
            code1: ``
          }
        ]
      },
      {
        id: 1,
        title: "Vue Directives",
        note: [
          {
            text1: `Vue directives are special HTML attributes with the prefix v- that give the HTML tag extra functionality. can be used to bind data, add event listeners, control the rendering of elements and so much more.
                     <b> Common Vue.js Directives</b>
                      Vue.js provides a variety of directives for different use cases. Let's explore some of the most commonly used ones:
  
                      <b> 1. v-bind
                      The <b> v-bind </b> directive, often abbreviated as <b> : </b> , allows you to bind an attribute to an expression. It's useful for dynamically setting HTML attributes, such as <b> src </b> or <b> href</b> .
                      `,
            code1: `<img v-bind:src="imageURL">
  <a v-bind:href="linkURL">Visit our website</a>`
          },
          {
            text1: `CSS Binding
  We can use the v-bind directive to do in-line styling and modify classes dynamically.`,
            code1: `<div v-bind:style="{ fontSize: size }">
    Text example
  </div>
  //------
  <div v-bind:style="{ fontSize: size + 'px' }">
    Text example
  </div>
  //------
  <div v-bind:style="{ 'font-size': size + 'px' }">
    Text example
  </div>
  //-----
  
  // The background color depends on the 'bgVal' data property value inside the Vue instance.
  
  <div v-bind:style="{ backgroundColor: 'hsl('+bgVal+',80%,80%)' }">
    Notice the background color on this div tag.
  </div>
  
  //-----
  // The background color is set with a 'JavaScript conditional (ternary) expression' depending on whether the 'isImportant' data property value is 'true' or 'false'.
  
  <div v-bind:style="{ backgroundColor: isImportant ? 'lightcoral' : 'lightgray' }">
    Conditional background color
  </div>
  
  
  `
          },
          {
            text1: `We can use <b>v-bind</b> to change the class attribute.
  
  The value of <b>v-bind:class</b> can be a variable:
  
  Example
  The class name is taken from the <b>className</b> Vue data property:
  
  `,
            code1: `
  <div v-bind:class="className">
    The class is set with Vue
  </div>
                      
                      // The class attribute is assigned or not depending on if the class 'myClass' is set to 'true' or 'false':
  
  <div v-bind:class="{ myClass: true }">
    The class is set conditionally to change the background color
  </div>`
          },
          {
            text1: `The shorthand for <b>v-bind:</b> is simply <b>:</b>.
  Example
  Here we just write ':' instead of 'v-bind:':`,
            code1: `<div :class="{ impClass: isImportant }">
    The class is set conditionally to change the background color
  </div>
  
  <b>v-model</b> :
  v-model creates a link between the input element value attribute and a data value in the Vue instance. When you change the input, the data updates and when the data changes, the input updates as well (two-way binding).
  
  The v-model directive is used for two-way data binding. It binds an input element's value to a variable, allowing changes in the input to update the variable, and vice versa.
  
  <input v-model="username" type="text">
  <p>Hello, {{ username }}!</p>
  
  new Vue({
      el: '#app',
      data: {
          username: ''
      }
  });
  
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
        title: "v-for (List Rendering):",
        note: [{
          text1: `
  
                  We can use the <b>v-for</b> directive to render a list of items based on an array. The <b>v-for</b> directive requires a special syntax in the form of <b>item in items</b>, where <b>items</b> is the source data array and <b>item</b> is an <b>alias</b> for the array element being iterated on: 
  
                  Inside the <b>v-for</b> scope, template expressions have access to all parent scope properties. In addition, <b>v-for</b> also supports an optional second alias for the index of the current item:
                  `,
          code1: `<template>
                  <div id="app">
                  <h2>Fruits List:</h2>
                  <ul>
                  <li v-for="fruit in fruits" :key="fruit.id">{{ fruit.name }}</li>
                  </ul>
                  </div>
                  </template>
  
                  <script>
                  export default {
                  data() {
                  return {
                  fruits: [
                  { id: 1, name: 'Apple' },
                  { id: 2, name: 'Banana' },
                  { id: 3, name: 'Orange' },
                  { id: 4, name: 'Grapes' },
                  { id: 5, name: 'Strawberry' }
                  ]
                  }
                  }
                  };
                  </script>
                  
  
                  const parentMessage = ref('Parent') // Parent scope properties
                  const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
                  template
                  <li v-for="(item, index) in items">
                    {{ parentMessage }} - {{ index }} - {{ item.message }}
                  </li>
  
                  // Output:
                  Parent - 0 - Foo
                  Parent - 1 - Bar
  
  
                  // The variable scoping of 'v-for' is similar to the following JavaScript:
  
                  js
                  const parentMessage = 'Parent'
                  const items = [
                    /* ... */
                  ]
  
                  items.forEach((item, index) => {
                    // has access to outer scope 'parentMessage'
                    // but 'item' and 'index' are only available in here
                    console.log(parentMessage, item.message, index)
                  })
                  `
        },
        {
          text1: `Notice how the <b>v-for</b> value matches the function signature of the <b>forEach</b> callback. In fact, you can use destructuring on the <b>v-for</b> item alias similar to destructuring function arguments:`,
          code1: `<li v-for="{ message } in items">
    {{ message }}
  </li>
  
  <!-- with index alias -->
  <li v-for="({ message }, index) in items">
    {{ message }} {{ index }}
  </li>
  
  // For nested 'v-for', scoping also works similar to nested functions. Each 'v-for' scope has access to parent scopes:
  
  
  <li v-for="item in items">
    <span v-for="childItem in item.children">
      {{ item.message }} {{ childItem }}
    </span>
  </li>
  You can also use 'of' as the delimiter instead of 'in', so that it is closer to JavaScript's syntax for iterators:
  
  <div v-for="item of items"></div>`
        },
        {
          text1: `<b>v-for with an Object</b>
                  You can also use <b>v-for</b> to iterate through the properties of an object. The iteration order will be based on the result of calling <b>Object.keys()</b> on the object:
                  `,
          code1: `
                  // Vue 3:
                  <template>
                      <div>
                        <h1>{{ myObject.title }}</h1>
                        <p>Author: {{ myObject.author }}</p>
                        <p>Published At: {{ myObject.publishedAt }}</p>
                      </div>
  
                  </template>
  
                    <script>
                    import { reactive } from 'vue'; // Import reactive directly from 'vue'
  
                    export default {
                      setup() {
                        const myObject = reactive({
                          title: 'How to do lists in Vue',
                          author: 'Jane Doe',
                          publishedAt: '2016-04-10'
                        });
  
                        console.log(myObject); // This will log the reactive object to the console
  
                        return {
                          myObject
                        };
                      }
                    };
                    </script>
  
                    vue :2 
  
                    <template>
                      <div id="app">
                        <h2>Fruits List:</h2>
                        <li v-for="(value, key, index) in myObject">
                          {{ index }}. - {{ key }}: - {{ value }}
                        </li>
  
                      </div>
                    </template>
  
                    <script>
                    export default {
                      data() {
                        return {
                          myObject: {
                            title: 'How to do lists in Vue',
                            author: 'Jane Doe',
                            publishedAt: '2016-04-10'
                          }
                        }
                      }
                    };
                    </script>
  
                  `
        },
        {
          text1: `<b>v-for with a Range</b>
                  <b>v-for</b> can also take an integer. In this case it will repeat the template that many times, based on a range of <b>1...n</b>.
                  `,
          code1: `
                  <span v-for="n in 10">{{ n }}</span>
                  Note here 'n' starts with an initial value of '1' instead of '0'.
                  `
        },
        {
          text1: `<b>v-for on <template></b>
                  Similar to template <b>v-if</b>, you can also use a <b><template></b> tag with <b>v-for</b> to render a block of multiple elements. For example:`,
          code1: `
                  <ul>
                    <template v-for="item in items">
                      <li>{{ item.msg }}</li>
                      <li class="divider" role="presentation"></li>
                    </template>
                  </ul>
                  `
        },
        {
          text1: `v-for with v-if
                  
                  <b><i>Note:</i></b>
                  <b>Avoid 'v-if' with 'v-for'​</b>
                  Never use <b>v-if</b> on the same element as <b>v-for</b>.
  
                  There are two common cases where this can be tempting:
  
                  To filter items in a list (e.g. <b>v-for="user in users" v-if="user.isActive"</b>). In these cases, replace <b>users</b> with a new computed property that returns your filtered list (e.g. <b>activeUsers</b>).
  
                  To avoid rendering a list if it should be hidden (e.g. <b>v-for="user in users" v-if="shouldShowUsers"</b>). In these cases, move the <b>v-if</b> to a container element (e.g. <b>ul, ol</b>).
  
                  When they exist on the same node, <b>v-if</b> has a higher priority than <b>v-for</b>. That means the <b>v-if</b> condition will not have access to variables from the scope of the <b>v-for</b>:
                  `,
          code1: `
                  // Bad
  template
  <ul>
    <li
      v-for="user in users"
      v-if="user.isActive"
      :key="user.id"
    >
      {{ user.name }}
    </li>
  </ul>
  
  //Good
  <ul>
    <template v-for="user in users" :key="user.id">
      <li v-if="user.isActive">
        {{ user.name }}
      </li>
    </template>
  </ul>
  
  
  <!--
  This will throw an error because property "todo"
  is not defined on instance.
  -->
  <li v-for="todo in todos" v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
  This can be fixed by moving 'v-for' to a wrapping '<template>' tag (which is also more explicit):
  
  template
  <template v-for="todo in todos">
    <li v-if="!todo.isComplete">
      {{ todo.name }}
    </li>
  </template>
  
  // good
  <template v-for="todo in todos">
    <li v-if="!todo.isComplete">
      {{ todo.name }}
    </li>
  </template>
  
  `
        },
        {
          text1: `<b>v-for with a Component</b>
          You can directly use <b>v-for</b> on a component, like any normal element (don't forget to provide a <b>key</b>):
  
          <span style="color:red"> <MyComponent v-for="item in items" :key="item.id" /> </span>
          However, this won't automatically pass any data to the component, because components have isolated scopes of their own. In order to pass the iterated data into the component, we should also use props:
  
          The reason for not automatically injecting <b>item</b> into the component is because that makes the component tightly coupled to how <b>v-for</b> works. Being explicit about where its data comes from makes the component reusable in other situations.
          `,
          code1: `<MyComponent
    v-for="(item, index) in items"
    :item="item"
    :index="index"
    :key="item.id"
  />`
        },
        {
          text1: `<b><i>Array Change Detection​</i></b>
  <b>Mutation Methods​</b>
  Vue is able to detect when a reactive array's mutation methods are called and trigger necessary updates. These mutation methods are:
  
  push()
  pop()
  shift()
  unshift()
  splice()
  sort()
  reverse()
  
  <b>Replacing an Array​</b>
  Mutation methods, as the name suggests, mutate the original array they are called on. In comparison, there are also non-mutating methods, e.g. <b>filter(), concat()</b> and <b>slice()</b>, which do not mutate the original array but <b>always return a new array</b>. When working with non-mutating methods, we should replace the old array with the new one:
  
  You might think this will cause Vue to throw away the existing DOM and re-render the entire list - luckily, that is not the case. Vue implements some smart heuristics to maximize DOM element reuse, so replacing an array with another array containing overlapping objects is a very efficient operation.
  `,
          code1: `// 'items' is a ref with array value
  items.value = items.value.filter((item) => item.message.match(/Foo/))`
        },
        {
          text1: `<b>Displaying Filtered/Sorted Results</b>
                  Sometimes we want to display a filtered or sorted version of an array without actually mutating or resetting the original data. In this case, you can create a computed property that returns the filtered or sorted array.`,
          code1: `
                  const numbers = ref([1, 2, 3, 4, 5])
  
                  const evenNumbers = computed(() => {
                    return numbers.value.filter((n) => n % 2 === 0)
                  })
                  template
                  <li v-for="n in evenNumbers">{{ n }}</li>
                  In situations where computed properties are not feasible (e.g. inside nested 'v-for' loops), you can use a method:
  
                  js
                  const sets = ref([
                    [1, 2, 3, 4, 5],
                    [6, 7, 8, 9, 10]
                  ])
  
                  function even(numbers) {
                    return numbers.filter((number) => number % 2 === 0)
                  }
                  template
                  <ul v-for="numbers in sets">
                    <li v-for="n in even(numbers)">{{ n }}</li>
                  </ul>
                  Be careful with 'reverse()' and 'sort()' in a computed property! These two methods will mutate the original array, which should be avoided in computed getters. Create a copy of the original array before calling these methods:
  
                  - return numbers.reverse()
                  + return [...numbers].reverse()
                  `
        },
        ]
      },
      {
        id: 1,
        section: "Conditional Rendering",
        title: "v-if",
        note: [
          {
            text1: `The directive <b>v-if</b> is used to conditionally render a block. The block will only be rendered if the directive's expression returns a truthy value.
  
  <span style="color:red"><h1 v-if="awesome">Vue is awesome!</h1></span> 
  
  <b>v-else​</b>
  You can use the <b>v-else</b> directive to indicate an "else block" for <b>v-if</b>:
  `,
            code1: `<button @click="awesome = !awesome">Toggle</button>
  
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>`
          },
          {
            text1: `A <b>v-else</b> element must immediately follow a <b>v-if</b> or a <b>v-else-if</b> element - otherwise it will not be recognized.
  
  <b>v-else-if​</b>
  The <b>v-else-if</b>, as the name suggests, serves as an "else if block" for <b>v-if</b>. It can also be chained multiple times:
  
  Similar to <b>v-else</b>, a <b>v-else-if</b> element must immediately follow a <b>v-if</b> or a <b>v-else-if</b> element.
  `,
            code1: `<div v-if="type === 'A'">
    A
  </div>
  <div v-else-if="type === 'B'">
    B
  </div>
  <div v-else-if="type === 'C'">
    C
  </div>
  <div v-else>
    Not A/B/C
  </div>`
          },
          {
            text1: `<b>v-if on <template></b>
  Because <b>v-if</b> is a directive, it has to be attached to a single element. But what if we want to toggle more than one element? In this case we can use <b>v-if</b> on a <b><template></b> element, which serves as an invisible wrapper. The final rendered result will not include the <b><template></b> element.
  
                      <b>v-else</b> and <b>v-else-if</b> can also be used on <b><template></b>.
                      `,
            code1: `<template v-if="ok">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>`
          },
          {
            text1: `<b>v-show</b>
  
                      Another option for conditionally displaying an element is the <b>v-show</b> directive. The usage is largely the same:
  
  <span style="color:red"><h1 v-show="ok">Hello!</h1> </span>
                      The difference is that an element with <b>v-show</b> will always be rendered and remain in the DOM; <b>v-show</b> only toggles the <b>display</b> CSS property of the element.
  
                      <b>v-show</b> doesn't support the <b><template></b> element, nor does it work with <b>v-else</b>.
  
  <b>v-show VS v-show </b>
  
                      <b>v-show</b>: expensive initial load, cheap toggling,
                      <b>v-if</b>: cheap initial load, expensive toggling.
  
                      v-show always compiles and renders everything - it simply adds the "display: none" style to the element. It has a higher initial load cost, but toggling is very cheap.
  
                      Incomparison, v-if is truely conditional: it is lazy, so if its initial condition is false, it won't even do anything. This can be good for initial load time. When the condition is true, v-if will then compile and render its content. Toggling a v-if block actually tearsdown everything inside it, e.g. Components inside v-if are acually destroyed and re-created when toggled, so toggling a huge v-if block can be more expensive than v-show
  
                      
                      <b>v-if</b> is "real" conditional rendering because it ensures that event listeners and child components inside the conditional block are properly destroyed and re-created during toggles.
  
                      <b>v-if</b> is also <b>lazy</b>: if the condition is false on initial render, it will not do anything - the conditional block won't be rendered until the condition becomes true for the first time.
  
                      In comparison, <b>v-show</b> is much simpler - the element is always rendered regardless of initial condition, with CSS-based toggling.
  
                      Generally speaking, <b>v-if</b> has higher toggle costs while <b>v-show</b> has higher initial render costs. So prefer <b>v-show</b> if you need to toggle something very often, and prefer <b>v-if</b> if the condition is unlikely to change at runtime.
  
  
                      The key difference is that v-if <b>conditionally renders</b> elements and v-show <b>conditionally displays</b> elements.
                      This means that <b>v-if</b> will actually destroy and recreate elements when the conditional is toggled. Meanwhile, <b>v-show</b> will always keep the element in the DOM and will only toggle its display by changing its CSS.
                      We can easily see these by running inspect element for both a <b>v-if</b> and a <b>v-show</b>. So let's say we have the following code that has both types of conditionals and a button that toggles them.
                      `,
            code1: ``
          },
        ]
      },
      {
        id: 1,
        title: "Event Handling (v-on)",
        note: [
          {
            text1: `We can use the <b>v-on</b> directive, which we typically shorten to the <b>@</b> symbol, to listen to DOM events and run some JavaScript when they're triggered. The usage would be <b>v-on:click="handler"</b> or with the shortcut, <b>@click="handler"</b>.
  
  The handler value can be one of the following:
  
  1) <b>Inline handlers</b>: Inline JavaScript to be executed when the event is triggered (similar to the native <b>onclick</b> attribute).
  
  2) <b>Method handlers</b>: A property name or path that points to a method defined on the component.
  
  <b> Inline Handlers </b>
  Inline handlers are typically used in simple cases, for example:
  `,
            code1: `data() {
    return {
      count: 0
    }
  }
  
  <button @click="count++">Add 1</button>
  <p>Count is: {{ count }}</p>
  `
          },
          {
            text1: `<b>Method Handlers​</b>
  The logic for many event handlers will be more complex though, and likely isn't feasible with inline handlers. That's why <b>v-on</b> can also accept the name or path of a component method you'd like to call.`,
            code1: `data() {
    return {
      name: 'Vue.js'
    }
  },
  methods: {
    greet(event) {
      // 'this' inside methods points to the current active instance
      alert('Hello\${this.name}!')
      // 'event' is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
  
  
  <!-- 'greet' is the name of the method defined above -->
  <button @click="greet">Greet</button>
  `
          },
          {
            text1: `A method handler automatically receives the native DOM Event object that triggers it - in the example above, we are able to access the element dispatching the event via <b>event.target</b>.
            
            <b>Method vs. Inline Detection</b>
            The template compiler detects method handlers by checking whether the <b>v-on</b> value string is a valid JavaScript identifier or property access path. For example, <b>foo, foo.bar and foo['bar']</b> are treated as method handlers, while <b>foo()</b> and <b>count++</b> are treated as inline handlers.
            `,
            code1: `<template>
    <div>
      <!-- Method handler examples -->
      <button @click="handleClick">Method Handler 1</button>
      <!-- Method Handler 2 -->
      <button @click="logUserName(user.fullName)">Method Handler 2</button>
      <!-- Method Handler 3 -->
      <button @click="logUserName(user['fullName'])">Method Handler 3</button>
      
      <!-- Inline handler examples -->
      <button @click="sayHello">Inline Handler 1</button>
      <button @click="count++">Inline Handler 2</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        count: 0,
        user: {
          fullName: "John Doe"
        }
      };
    },
    methods: {
      handleClick() {
        console.log('Method handler clicked');
      },
      logUserName(fullName) {
        console.log('User full name:', fullName);
      },
      sayHello() {
        console.log('Hello!');
      }
    }
  };
  </script>
  `
          },
          {
            text1: `Calling Methods in Inline Handlers​
  Instead of binding directly to a method name, we can also call methods in an inline handler. This allows us to pass the method custom arguments instead of the native event:`,
            code1: `methods: {
    say(message) {
      alert(message)
    }
  }
  template
  <button @click="say('hello')">Say hello</button>
  <button @click="say('bye')">Say bye</button>`
          },
          {
            text1: `<b>Accessing Event Argument in Inline Handlers</b>
  Sometimes we also need to access the original DOM event in an inline handler. You can pass it into a method using the special <b>$event</b>, variable, or use an inline arrow function:`,
            code1: `<!-- using $event special variable -->
  <button @click="warn('Form cannot be submitted yet.', $event)">
    Submit
  </button>
  
  <!-- using inline arrow function -->
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">
    Submit
  </button>
  
  methods: {
    warn(message, event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault()
      }
      alert(message)
    }
  }
  `
          },
          {
            text1: `<b>Event Modifiers</b>
            It is a very common need to call <b>event.preventDefault() or event.stopPropagation()</b> inside event handlers. Although we can do this easily inside methods, it would be better if the methods can be purely about data logic rather than having to deal with DOM event details.
  
            To address this problem, Vue provides event modifiers for <b>v-on</b>. Recall that modifiers are directive postfixes denoted by a dot.
  
            
            DOM event handlers can have modifiers that alter their behaviour. 
            
            <b>.stop</b>: the click event's propagation will be stopped
            <b>.prevent</b>: just the modifier
            <b>.self</b>: not from a child element
            <b>.capture</b>: use capture mode when adding the event listener.
            <b>.once</b>: At most once, the click event will be triggered.
            <b>.passive</b>: the scroll event's default behavior (scrolling) will happen
            
            <b>stopPropagation</b> prevents further propagation of the current event in the capturing and bubbling phases.
  
  <b>preventDefault</b> prevents the default action the browser makes on that event.
  
  Event modifiers are pre-set modifications that you can chain to your event listener via dot notation. There will be times (especially with single page applications) where you need to use <b>stopPropogation()</b>. You can do this very easily with Vanilla JavaScript, but Vue.js makes event modifiers very easy. The <b>stopPropogation()</b> method can be recreated with <b>@click.stop="functionName"</b
  
  
  <b>preventDefault</b> - calls <b>event.preventDefault()</b> before running the handler. Useful for client-side form handling, for example.
  <b>stopPropagation</b> - calls event.stopPropagation(), preventing the event reaching the next element
  <b>passive </b>- improves scrolling performance on touch/wheel events (Svelte will add it automatically where it's safe to do so)
  <b>nonpassive</b> - explicitly set passive: false
  <b>capture</b> - fires the handler during the capture phase instead of the bubbling phase
  <b>once</b> - remove the handler after the first time it runs
  <b>self</b> - only trigger handler if event.target is the element itself
  <b>trusted</b> - only trigger handler if <b>event.isTrusted</b> is <b>true</b>, meaning the event was triggered by a user action rather than because some JavaScript called element.dispatchEvent(...)
  `,
            code1: `<div style="background-color:#1f1f1f;color:#cccccc;font-family:'Droid Sans Mono', 'monospace', monospace;font-size:14px;font-weight:normal;line-height:19px;white-space:pre;">
            <div><span style="color:#ce9178;">the click event's propagation will be stopped </span></div>
            <div><span style="color:#ce9178;"> &lt;a @click.stop="doThis"&gt;&lt;/a&gt;</span></div>
            <div><span style="color:#ce9178;"> </span></div>
            <div><span style="color:#ce9178;"> </span></div>
            <div><span style="color:#ce9178;"> the submit event will no longer reload the page </span></div>
            <div><span style="color:#ce9178;"> &lt;form @submit.prevent="onSubmit"&gt;&lt;/form&gt;</span></div>
            <div><span style="color:#ce9178;"> </span></div>
            <div><span style="color:#ce9178;"> modifiers can be chained </span></div>
            <div><span style="color:#ce9178;"> &lt;a @click.stop.prevent="doThat"&gt;&lt;/a&gt;</span></div>
            <div><span style="color:#ce9178;"> </span></div>
            <div><span style="color:#ce9178;"> just the modifier </span></div>
            <div><span style="color:#ce9178;"> &lt;form @submit.prevent&gt;&lt;/form&gt;</span></div>
            <div><span style="color:#ce9178;"> </span></div>
            <div><span style="color:#ce9178;"> only trigger handler if event.target is the element itself </span></div>
            <div><span style="color:#ce9178;"> i.e. not from a child element </span></div>
            <div><span style="color:#ce9178;"> &lt;div @click.self="doThat"&gt;...&lt;/div&gt;</span></div>
            <div><span style="color:#ce9178;"> </span></div>
            <div><span style="color:#ce9178;"> </span></div>
            <div><span style="color:#ce9178;"> use capture mode when adding the event listener </span></div>
            <div><span style="color:#ce9178;"> i.e. an event targeting an inner element is handled </span></div>
            <div><span style="color:#ce9178;"> here before being handled by that element </span></div>
            <div><span style="color:#ce9178;"> &lt;div @click.capture="doThis"&gt;...&lt;/div&gt;</span></div>
            <div><span style="color:#ce9178;"> </span></div>
            <div><span style="color:#ce9178;"> the click event will be triggered at most once </span></div>
            <div><span style="color:#ce9178;"> &lt;a @click.once="doThis"&gt;&lt;/a&gt;</span></div>
            <div><span style="color:#ce9178;"> </span></div>
            <div><span style="color:#ce9178;"> the scroll event's default behavior (scrolling) will happen </span></div>
            <div><span style="color:#ce9178;"> immediately, instead of waiting for 'onScroll' to complete </span></div>
            <div><span style="color:#ce9178;"> in case it contains 'event.preventDefault()' </span></div>
            <div><span style="color:#ce9178;"> &lt;div @scroll.passive="onScroll"&gt;...&lt;/div&gt;</span></div>
        </div>
  `
          },
          {
            text1: `The <b>event.preventDefault()</b> method prevents the default behavior of an element from happening. For example, if you have a form with a submit button, and you want to prevent the form from being submitted when the button is clicked, you can use <b>preventDefault()</b> to cancel the default submission behavior.
  
  Here's an example of how to use preventDefault() in vanilla JavaScript:`,
            code1: `document.querySelector('form').addEventListener('submit', function(event) {
    // prevent default form submission
    event.preventDefault();
  
    // do something with the form data
  });
  
  //------
  
  $("#but").click(function (event) {
    event.preventDefault()
  })
  $("#foo").click(function () {
    alert("parent click event fired!")
  })
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <div id="foo">
    <button id="but">button</button>
  </div>
  `
          },
          {
            text1: `On the other hand, the event.stopPropagation() method prevents an event from bubbling up the event chain. This can be useful if you have a click event on a parent element, and you want to prevent that event from being triggered when a child element is clicked.
  
  Here's an example of how to use stopPropagation() in vanilla JavaScript:`,
            code1: `
  document.querySelector('button').addEventListener('click', function(event) {
    // stop click event from propagating to parent element
    event.stopPropagation();
  
    // do something with the click event
  });
  
  //----------
            
            $("#but").click(function (event) {
    event.stopPropagation()
  })
  $("#foo").click(function () {
    alert("parent click event fired!")
  })
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <div id="foo">
    <button id="but">button</button>
  </div>
  
  
  //In summary, 'event.preventDefault()' prevents the default behavior of an element from happening, while 'event.stopPropagation()' prevents an event from bubbling up the event chain.
  `
          },
          {
            text1: `<b>Key Modifiers​</b>
  When listening for keyboard events, we often need to check for specific keys. Vue allows adding key modifiers for <b>v-on</b> or <b>@</b> when listening for key events:`,
            code1: `<!-- only call 'submit' when the 'key' is 'Enter' -->
  <input @keyup.enter="submit" />
  // You can directly use any valid key names exposed via 'KeyboardEvent.key' as modifiers by converting them to kebab-case.
  
  template
  <input @keyup.page-down="onPageDown" />
  
  // In the above example, the handler will only be called if '$event.key' is equal to 'PageDown'.
  `
          },
          {
            text1: `Key Aliases​
  Vue provides aliases for the most commonly used keys:
  
  .enter
  .tab
  .delete (captures both "Delete" and "Backspace" keys)
  .esc
  .space
  .up
  .down
  .left
  .right
  System Modifier Keys​
  You can use the following modifiers to trigger mouse or keyboard event listeners only when the corresponding modifier key is pressed:
  
  .ctrl
  .alt
  .shift
  .meta`,
            code1: `<!-- Alt + Enter -->
  <input @keyup.alt.enter="clear" />
  
  <!-- Ctrl + Click -->
  <div @click.ctrl="doSomething">Do something</div>`
          },
          {
            text1: `.exact Modifier​
  The .exact modifier allows control of the exact combination of system modifiers needed to trigger an event.`,
            code1: `<!-- this will fire even if Alt or Shift is also pressed -->
  <button @click.ctrl="onClick">A</button>
  
  <!-- this will only fire when Ctrl and no other keys are pressed -->
  <button @click.ctrl.exact="onCtrlClick">A</button>
  
  <!-- this will only fire when no system modifiers are pressed -->
  <button @click.exact="onClick">A</button>`
          }
        ]
      },
      {
        id: 1,
        title: "Form Input Bindings",
        note: [
          {
            text1: `When dealing with forms on the frontend, we often need to sync the state of form input elements with corresponding state in JavaScript. It can be cumbersome to manually wire up value bindings and change event listeners:`,
            code1: `<template>
    <div>
      <input :value="text" @input="event => text = event.target.value">
      {{ text }}
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        text:''
      };
    }
  };
  </script>
  
  // The 'v-model' directive helps us simplify the above to:
  
  <input v-model="text">
  
  `
          },
          {
            text1: `In addition, <b>v-model</b> can be used on inputs of different types, <b><textarea></b>, and <b><select></b> elements. It automatically expands to different DOM property and event pairs based on the element it is used on:
  
  <b><input></b> with text types and <b><textarea></b> elements use <b>value</b> property and <b>input</b> event;
  <b><input type="checkbox"></b> and <b><input type="radio"></b> use <b>checked</b> property and <b>change</b> event;
  <b><select></b> uses <b>value</b> as a prop and <b>change</b> as an event.
  
  Note: <b>v-model will ignore the initial <b>value</b>, <b>checked</b> or <b>selected</b> attributes found on any form elements. It will always treat the current bound JavaScript state as the source of truth. You should declare the initial value on the JavaScript side, using reactivity APIs.
  `,
            code1: `Note that interpolation inside '<textarea>' won't work. Use 'v-model' instead.
  <!-- bad -->
  <textarea>{{ text }}</textarea>
  
  <!-- good -->
  <textarea v-model="text"></textarea>
  
  // Single checkbox, boolean value:
  
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>
  
  //-------------
  
  // We can also bind multiple checkboxes to the same array or Set value:
  
  <template>
    <div>
      <div>Checked names: {{ checkedNames }}</div>
  
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
  
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
  
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
    </div>
  </template>
  
  <script>
  export default {
    // setup() {
    //   const checkedNames = ref([]) composition api vue 3
    // },
    data() {
      return {
        text: '',
      };
    }
  };
  </script>
  
  In this case, the 'checkedNames' array will always contain the values from the currently checked boxes.
  
  
  //--------------------
  
  Radio​
  <div>Picked: {{ picked }}</div>
  
  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>
  
  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>
  
  //----------------------------
  
  Single select:
  
  <div>Selected: {{ selected }}</div>
  
  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  
  <script>
  export default {
    data() {
      return {
        selected: []
      };
    }
  };
  </script>
  
  //---------------------
  
  Select options can be dynamically rendered with v-for:
  
  js
  export default {
    data() {
      return {
        selected: 'A',
        options: [
          { text: 'One', value: 'A' },
          { text: 'Two', value: 'B' },
          { text: 'Three', value: 'C' }
        ]
      }
    }
  }
  template
  <select v-model="selected">
    <option v-for="option in options" :value="option.value">
      {{ option.text }}
    </option>
  </select>
  
  <div>Selected: {{ selected }}</div>
  
  
  `
          },
          {
            text1: `Value Bindings​
  For radio, checkbox and select options, the <b>v-model</b> binding values are usually static strings (or booleans for checkbox):
  
  But sometimes we may want to bind the value to a dynamic property on the current active instance. We can use <b>v-bind</b> to achieve that. In addition, using <b>v-bind</b> allows us to bind the input value to non-string values.`,
            code1: `<!-- 'picked' is a string "a" when checked -->
  <input type="radio" v-model="picked" value="a" />
  
  <!-- 'toggle' is either true or false -->
  <input type="checkbox" v-model="toggle" />
  
  <!-- 'selected' is a string "abc" when the first option is selected -->
  <select v-model="selected">
    <option value="abc">ABC</option>
  </select>
  
  // -----------------
  
  // Checkbox​
  
  <input
    type="checkbox"
    v-model="toggle"
    true-value="yes"
    false-value="no" />
  `
          },
          {
            text1: `<b>true-value</b> and <b>false-value</b> are Vue-specific attributes that only work with <b>v-model</b>. Here the <b>toggle</b> property's value will be set to <b>'yes'</b> when the box is checked, and set to <b>'no'</b> when unchecked. You can also bind them to dynamic values using <b>v-bind:</b>`,
            code1: `<input
    type="checkbox"
    v-model="toggle"
    :true-value="dynamicTrueValue"
    :false-value="dynamicFalseValue" />
    
    //------------------
  
    // Radio​
    <input type="radio" v-model="pick" :value="first" />
    <input type="radio" v-model="pick" :value="second" />
  
    'pick' will be set to the value of 'first' when the first radio input is checked, and set to the value of 'second' when the second one is checked.
  
  
    // Select Options​
  
    <select v-model="selected">
      <!-- inline object literal -->
      <option :value="{ number: 123 }">123</option>
    </select>
    
    'v-model' supports value bindings of non-string values as well! In the above example, when the option is selected, 'selected' will be set to the object literal value of '{ number: 123 }'.
  
    
    
    `
          },
          {
            text1: `<b>.lazy​</b>
  By default, <b>v-model</b> syncs the input with the data after each <b>input</b> event (with the exception of IME composition as stated above). You can add the <b>lazy</b> modifier to instead sync after <b>change</b> events:
  
  <!-- synced after "change" instead of "input" -->
  <span style="color:red"> <input v-model.lazy="msg" /> </span>
  
  <b>.number​</b>
  If you want user input to be automatically typecast as a number, you can add the <b>number</b> modifier to your <b>v-model</b> managed inputs:
  
  <span style="color:red"><input v-model.number="age" /></span>
  
  If the value cannot be parsed with <b>parseFloat()</b>, then the original value is used instead.
  
  The number modifier is applied automatically if the input has type="number".
  
  <b>.trim</b>​
  If you want whitespace from user input to be trimmed automatically, you can add the <b>trim</b> modifier to your <b>v-model</b>-managed inputs:
  
  <span style="color:red">
  <input v-model.trim="msg" /> </span>`,
            code1: ``
          },
          {
            text1: ``,
            code1: `
            // main.vue
  
            <template>
              <div>
                <h2>Using CustomInput Component with v-model</h2>
                <InputComponent v-model="message" />
                <p>Message from parent component: {{ message }}</p>
              </div>
            </template>
  
            <script>
            import InputComponent from './InputComponent.vue';
  
            export default {
              components: {
                InputComponent,
              },
              data() {
                return {
                  message: '', // This is the initial value
                };
              },
            };
            </script>
  
  //---------------
  // InputComponent.vue
  <template>
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      placeholder="Enter text..."
    />
  </template>
  
  <script>
  export default {
    props: ['value'],
  };
  </script>
  
  // Example 2
  // Parent.vue
  
  <template>
    <section id="main" class="main-alt">
      <div v-for="u in userDetails">
        <InputComponent :user="u" />
        Value : {{ u.value }}
      </div>
    </section>
  </template>
  
  <script>
  import InputComponent from './InputComponent.vue';
  
  export default {
    components: {
      InputComponent,
    },
    data() {
      return {
        userDetails: [
          {
            id: 1,
            name: 'ram',
            area: 'wgl',
            value: ''
          },
          {
            id: 2,
            name: 'venkat',
            area: 'wgl',
            value: ''
          },
          {
            id: 3,
            name: 'kumar',
            area: 'wgl',
            value: ''
          },
        ], // This is the initial value
      };
    },
  };
  </script>
  
  //InputComponent.vue
  
  <template>
    <div>
      <input type="text" v-model="user.value" />
      <!-- {{ user }} -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: {
        type: Object,
        required: false,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        // model: this.value
      }
    },
  }
  </script>
  
  Example: 3
  
            `
          },
        ]
      },
      {
        id: 1,
        title: "Computed properties",
        note: [
          {
            text1: `Definition: Computed properties are like methods but are cached based on their reactive dependencies. Vue.js watches these dependencies and only re-evaluates the computed property when one of its dependencies has changed.
  
            
  
            <b>Computed properties</b> are like data properties, except they depend on other properties.
  
            <b>Computed properties</b> are written like methods, but they do not accept any input arguments.
  
            <b>Computed properties</b> are updated automatically when a dependency changes, while methods are called on when something happens, like with event handling for example.
  
            <b>Computed properties</b> are used when outputting something that depends on something else.
  
  
            <b>computed properties</b> are cached based on their reactive dependencies.</b> A computed property will only re-evaluate when some of its reactive dependencies have changed. This means as long as message has not changed, multiple access to the reversedMessage computed property will immediately return the previously computed result without having to run the function again.
            `,
            code1: `
  <template>
      <div id="main" class="main-alt">
          {{ reversedMessage }}
          <input v-model = "message"/>
      </div>
  </template>
  
  <script>
  
  export default {
      components: {
      },
      data() {
          return {
              message: 'Hello'
          };
      },
      computed: {
          // a computed getter
          //Syntax: You define computed properties using the computed property in the Vue component's options:
          reversedMessage: function () {
              // 'this' points to the vm instance
              return this.message.split('').reverse().join('')
          }
      },
      methods: {
  
      }
  };
  </script>
  
  // This also means the following computed property will never update, because 'Date.now()' is not a reactive dependency:
  
  computed: {
    now: function () {
      return Date.now()
    }
  }
  
  // Passing parametes to computed properties
  // Example: 2
  <template>
    <div id="main" class="main-alt">
        <div>
            <label for="first-name">First Name:</label>
            <input type="text" id="first-name" v-model="firstName">
        </div>
        <div>
            <label for="last-name">Last Name:</label>
            <input type="text" id="last-name" v-model="lastName">
        </div>
        <div>
            <label for="full-name">Full Name:</label>
            <input v-model="prefix"/>
            <span id="full-name">{{ getFullName(prefix) }}</span>
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    components: {
    },
    data() {
        return {
            firstName: '',
            lastName: '',
            prefix: 'Hello'
        }
    },
    computed: {
        getFullName: function () {
            return function (prefix) {
                return prefix + ' ' + this.firstName + ' ' + this.lastName;
            }
        },
    },
  };
  </script>
  
  
  // Much better. In addition, you can also provide a setter for a computed property:
  
  // ...
  computed: {
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
  // ...
  
   // Example: 3
  
   <template>
     <div>
         <input v-model="searchQuery" type="text" placeholder="Search the name">
         <div class="Chatroom__list__messages" v-for="result in resultQuery" :key="result.image">
  
             <div>
                 {{ result.name }}
             </div>
  
         </div>
     </div>
   </template>
  
   <script>
  
   export default {
     components: {
     },
     data() {
         return {
             userData: [
                 {
                     name: "Tunde",
                     uid: "LfhxERlvyfh2auIY0HnpidjJg3L2",
                 },
                 {
                     name: "bola",
                     uid: "R6lyXuNwZfc9ztLDfIZBSZLg2QD2",
                 },
                 {
                     uid: "k8ZVBdA9wfetiB8vJV3Qc07NZty1",
                     name: "Supreme",
                 },
             ],
             searchQuery: null
         }
     },
     computed: {
         resultQuery() {
             if (this.searchQuery) {
                 return this.userData.filter((item) => {
                     // return item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
                     return this.searchQuery
                         .toLowerCase()
                         .split(' ')
                         .every(v => item.name.toLowerCase().includes(v))
                 })
             }
         }
     },
   };
   </script>
  `
          },
          {
            text1: `
  
            The difference between a computed property and a method is that <b>computed properties are cached</b> and change only when their dependencies change. A <b>method will evaluate every time it's called</b>.
  
            The difference between a <b>computed property and a method is that computed properties are cached</b>, these properties only change when their dependency change. A method will be evaluated every time it is being called.
  
            Why do we need caching? Imagine we have an expensive computed property <b>A</b>, which requires looping through a huge Array and doing a lot of computations. Then we may have other computed properties that in turn depend on <b>A</b>. Without caching, we would be executing <b>A</b>'s getter many more times than necessary! In cases where you do not want caching, use a method instead.
            `,
            code1: ``
          },
          {
            text1: `<b>Writable Computed</b>
  By default, Computed properties are getter-only, but it's possible a declare a setter and make Computed a “Writable Computed”.`,
            code1: `
            <script setup>
            import { ref, computed } from 'vue'
  
            const name = ref('Harry')
            const surname = ref('Potter')
  
            const fullName = computed({
               get() {
                 return name.value + ' ' + surname.value
               },
               set(newValue) {
                 [name.value, surname.value] = newValue.toUpperCase()
               }
            })
            </script>
            `
          },
          {
            text1: `<b>Is Computed property always pure functions?</b>
  As shown in the above example, the computed property is a pure function, but what if I want to update any data field value inside the computed property?
  
  In most cases, you will not end in a situation where you need to set some data in computed property and that's why computed properties by default are getters only. For some rare scenarios, we can write a setter like this to update the data value:
  
  <b>Best practices</b>
  -> Computed property getters should always be pure functions.
  -> Try to avoid mutating computed property as much as possible. Instead of mutating the computed property, you should try to update the data field which triggers new computations and invokes the getter. e.g.,
  
  <b>How computed property is different from methods?</b>
  This is important to understand that <b>computed properties</b> and <b>methods</b> have a different purpose to serve. In a nutshell:
  
  The <b>computed property</b> will always give the same value for the same data field value(<b>pure functions</b>) and will get invoked only when the data field value gets updated.
  
  <b>Methods</b> need not be <b>pure functions</b> and can be invoked any number of times. They do not create data fields for us.
  
  `,
            code1: `<template>
      <div>
        <div>Employee Details</div>
        <div>{{details}}</div>
        <button @click="changeEmployeeDetails">Change Details</button>
      </div>
    </template>
  
  <script>
  
  export default {
    name: 'Employee',
    data() {
      return {
        employee: {
          name: 'John',
          type: 'permanent'
        }
      }
    },
    methods: {
      changeEmployeeDetails() {
        this.details = 'Tom: Contract'
      }
    },
    computed: {
      details: {
        get() {
          return '\${ this.employee.name }: \${ this.employee.type }'
        },
        set(value) {
          const employeeDetails = value.split(': ')
          this.employee.name = employeeDetails[0]
          this.employee.type = employeeDetails[1]
        }
      }
    }
  }
  </script>`
          },
          {
            text1: ``,
            code1: ``
          },
        ]
      },
      {
        id: 1,
        title: "what is difference between framework and library",
        note: [
          {
            text1: ``,
            code1: ``
          }
        ]
      },
      {
        id: 1,
        title: "what is difference between framework and library",
        note: [
          {
            text1: ``,
            code1: ``
          }
        ]
      },
      {
        id: 1,
        title: "vue",
        note: [
          {
            text1: `
                      https://www.vuemastery.com/courses/vuex-fundamentals/vuex4-intro-to-vuex/
                      
                      <b>Computed properties</b>: Unlike methods, they don't accept any arguments, but they do have access to existing state. They're built for performance and track/cache their own dependencies so they're great for creating derived data from your state. 
  
                      <b>Methods</b>: Unlike computed properties, methods can take arguments, however, the method will not track its dependencies or cache any of the data passed to it. 
  
                      <b>Watchers</b>: These are particularly for reacting to a change in state that Vue itself won't do automatically (like update the DOM). I try and use watchers very sparingly, but they do have their uses. One instance I sometimes find myself needing is to reapply a jQuery plugin to a set of DOM els whenever data changes. That's just one example. 
              `
          }
        ]
      },
      {
        id: 1,
        title: "Slot",
        note: [
          {
            text1: `
  Slots are reserved space offered by vuejs to display content passed down from one component to another. There are two types of slot in vuejs namely: named slot and unnamed(default) slot.  
              `,
            code1: `
                      Ex: 1 
  
                     <b> Slot.js </b>
  
                      <template> 
  
                      <div> 
  
                      <test-slot :bgcl="bgccl"> 
  
                      <template v-slot:header> 
  
                      <h1 v-bind:style="slotBgColor">This is Header</h1> 
  
                      {{childMessage}}asa 
  
                      </template> 
  
                      <h1>This is slot text</h1> 
  
                      <template v-slot:footer> 
  
                      <h1 v-html="footerMessage" :style="slotBgColor"></h1> 
  
                      </template> 
  
                      </test-slot> 
  
  
  
                      <child-slot v-slot="{childMessage,idVal}"> 
  
                      {{childMessage}} 
  
                      {{idVal}} 
  
                      </child-slot> 
  
                      </div> 
  
                      </template> 
  
  
  
                      <script> 
  
                      import Vue from "vue"; 
  
                      Vue.use(require("vue-cookies")); 
  
                      export default { 
  
                      name: "NextTick", 
  
                      data() { 
  
                      return { 
  
                      footerMessage: 
  
                      "this is <b style='background-color:#09ccea;padding:12px;border-radius:8px;'>footer</b>", 
  
                      bgccl: true, 
  
                      slotBgColor: { backgroundColor: "orange" }, 
  
  
  
                      }; 
  
                      }, 
  
                      components: { 
  
                      TestSlot: () => import('./TestSlot'), 
  
                      ChildSlot: () => import('./ChildSlot') 
  
                      }, 
  
                      mounted() {}, 
  
                      methods: { 
  
                      showMessage() { 
  
                      alert("This is message"); 
  
                      }, 
  
                      }, 
  
                      }; 
  
                      </script> 
  
  
  
  <b>TestSlot.js </b>
                      <template> 
  
                      <div> 
  
                      <slot name="header" :childMessage="{childMessage}"/> 
  
                      <h1 :class="{ bgColAccBanner: bgcl }">Test Slot {{ bgcl }}</h1> 
  
                      <slot name="footer"></slot> 
  
                      </div> 
  
                      </template> 
  
  
  
                      <script> 
  
                      import Vue from "vue"; 
  
                      Vue.use(require("vue-cookies")); 
  
                      export default { 
  
                      name: "NextTick", 
  
                      data() { 
  
                      return { 
  
                      // bgColAccBanner:{backgroundColor:red} 
  
                      childMessage:'this message form slot' 
  
                      }; 
  
                      }, 
  
                      props: { 
  
                      bgcl: { 
  
                      type: Boolean, 
  
                      required: false, 
  
                      default: false, 
  
                      }, 
  
                      }, 
  
                      components: {}, 
  
                      template: "<h1> Ram Ram </h1>", 
  
                      mounted() {}, 
  
                      methods: {}, 
  
                      }; 
  
                      </script> 
  
                      <style> 
  
                      .bgColAccBanner { 
  
                      background-color: green; 
  
                      } 
  
                      </style> 
  
  
  
                      <b>ChildSlot.js</b> 
  
                      <template> 
  
                      <div> 
  
                      <slot :childMessage="childMessage" :idVal="idVal"></slot> 
  
                      </div> 
  
                      </template> 
  
  
  
                      <script> 
  
                      import Vue from "vue"; 
  
                      Vue.use(require("vue-cookies")); 
  
                      export default { 
  
                      name: "NextTick", 
  
                      data() { 
  
                      return { 
  
                      // bgColAccBanner:{backgroundColor:red} 
  
                      childMessage:'this message form slot', 
  
                      idVal:123 
  
                      }; 
  
                      }, 
  
                      props: { 
  
                      }, 
  
                      components: {}, 
  
                      template: "<h1> Ram Ram </h1>", 
  
                      mounted() {}, 
  
                      methods: {}, 
  
                      }; 
  
                      </script> 
  
                      <style> 
  
                      .bgColAccBanner { 
  
                      background-color: green; 
  
                      } 
  
                      </style> 
  
  
                      
                      `
          }
        ]
      },
      {
        id: 1,
        title: "nextTick ",
        note: [
          {
            text1: ``,
            code1: `<div> 
  
          <p ref="myRef">No</p> 
  
        </div> 
  
   
  
      <script> 
  
      export default { 
  
        created() { 
  
          if (!this.$refs.myRef) { 
  
            console.log("This doesn't exist yet!"); 
  
          } 
  
       
  
          this.$nextTick(() => { 
  
            if (this.$refs.myRef) { 
  
              console.log("Now it does!"); 
  
            } 
  
          }); 
  
        }, 
  
        mounted() { 
  
          this.$refs.myRef.innerHTML = "🥑"; 
  
          console.log("Now its mounted"); 
  
        } 
  
      }; 
  
      </script> `
          }
        ]
      }
    ]
  }
  
  
  
  
  
  
  
  // =====================
  // indusInd
  // ----------------
  // A/C 100054551294
  
  
  // card :
  // 4213 2423 0723 5567
  // cvv : 251
  // Ex Date : 03/27
  // pin: 3841
  // ----
  // Password : Kansas@123#
  
  
  
  // >( ) Axios - Promise based HTTP client
  //  ( ) Progressive Web App (PWA)
  //  ( ) Content - Git-based headless CMS
  
  