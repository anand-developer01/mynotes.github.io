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

<b>Steeper learning curve</b>: Frameworks may have a steeper learning curve as developers need to understand the framework’s architecture, conventions, and overall structure.
<b>Less Control/Flexibilty</b>: framework dictates the overall structure and flow of the application. Developers need to follow the framework’s conventions and structure.
<b>Higher level of abstraction</b> : Frameworks provide a higher level of abstraction and control the flow of the application.
<b>Build entire applications</b>: Frameworks are used to build entire applications. They often come with predefined patterns, tools, and best practices for developing within a specific domain, such as web development or mobile app development.

                    <b>Key Differences:</b>
                    <b>Inversion of Control</b>: In a framework, the control flow is inverted. The framework calls the developer’s code, whereas in a library, the developer calls the library’s code.
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
                          <td>Framework manages the flow and calls developer’s code</td> 
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
Although not strictly associated with the MVVM pattern, Vue’s design was partly inspired by it. As a convention, we often use the variable <b>vm (short for ViewModel)</b> to refer to our Vue instance.

When you create a Vue instance, you pass in an <b>options object</b>. The majority of this guide describes how you can use these options to create your desired behavior. For reference, you can also browse the full list of options in the API reference.

A Vue application consists of a <b>root Vue instance</b> created with <b>new Vue</b>, optionally organized into a tree of nested, reusable components. For example, a todo app’s component tree might look like this:

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

                    <b> 1. v-bind </b> 
                    The v-bind  directive, often abbreviated as <b> : </b> , allows you to bind an attribute to an expression. It's useful for dynamically setting HTML attributes, such as <b> src </b> or <b> href</b> .
                    `,
          code1: `<img v-bind:src="imageURL">
<a v-bind:href="linkURL">Visit our website</a>`
        },
        {
          text1: `<b>CSS Binding</b>
We can use the v-bind directive to do in-line styling and modify classes dynamically.`,
          code1: `&lt;div v-bind:style=&quot;{ fontSize: size }&quot;&gt; Text example &lt;/div&gt; 
      //------ 
      &lt;div v-bind:style=&quot;{ fontSize: size + 'px' }&quot;&gt; Text example &lt;/div&gt; 
      //------ 
      &lt;div v-bind:style=&quot;{ 'font-size': size + 'px' }&quot;&gt; Text example &lt;/div&gt; 
      //-----

// The background color depends on the 'bgVal' data property value inside the Vue instance.

&lt;div v-bind:style=&quot;{ backgroundColor: 'hsl('+bgVal+',80%,80%)' }&quot;&gt; Notice the background color on this div tag. &lt;/div&gt;

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
        text1: `We can use the <b>v-for</b> directive to render a list of items based on an array. The <b>v-for</b> directive requires a special syntax in the form of <b>item in items</b>, where <b>items</b> is the source data array and <b>item</b> is an <b>alias</b> for the array element being iterated on: 

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
                    We can easily see these by running inspect element for both a <b>v-if</b> and a <b>v-show</b>. So let’s say we have the following code that has both types of conditionals and a button that toggles them.
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
          text1: `<b>Accessing Event Argument in Inline Handlers​</b>
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

          <b>.stop</b>: the click event’s propagation will be stopped
          <b>.prevent</b>: just the modifier
          <b>.self</b>: not from a child element
          <b>.capture</b>: use capture mode when adding the event listener.
          <b>.once</b>: At most once, the click event will be triggered.
          <b>.passive</b>: the scroll event’s default behavior (scrolling) will happen

          <b>stopPropagation</b> prevents further propagation of the current event in the capturing and bubbling phases.

<b>preventDefault</b> prevents the default action the browser makes on that event.

Event modifiers are pre-set modifications that you can chain to your event listener via dot notation. There will be times (especially with single page applications) where you need to use <b>stopPropogation()</b>. You can do this very easily with Vanilla JavaScript, but Vue.js makes event modifiers very easy. The <b>stopPropogation()</b> method can be recreated with <b>@click.stop="functionName"</b


<b>preventDefault</b> — calls <b>event.preventDefault()</b> before running the handler. Useful for client-side form handling, for example.
<b>stopPropagation</b> — calls event.stopPropagation(), preventing the event reaching the next element
<b>passive</b> — improves scrolling performance on touch/wheel events (Svelte will add it automatically where it's safe to do so)
<b>nonpassive</b> — explicitly set passive: false
<b>capture</b> — fires the handler during the capture phase instead of the bubbling phase
<b>once</b> — remove the handler after the first time it runs
<b>self</b> — only trigger handler if event.target is the element itself
<b>trusted</b> — only trigger handler if <b>event.isTrusted</b> is <b>true</b>, meaning the event was triggered by a user action rather than because some JavaScript called element.dispatchEvent(...)



`,
          code1: `<!-- the click event's propagation will be stopped -->
<a @click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form @submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a @click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form @submit.prevent></form>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div @click.self="doThat">...</div>


<!-- use capture mode when adding the event listener     -->
<!-- i.e. an event targeting an inner element is handled -->
<!-- here before being handled by that element           -->
<div @click.capture="doThis">...</div>

<!-- the click event will be triggered at most once -->
<a @click.once="doThis"></a>

<!-- the scroll event's default behavior (scrolling) will happen -->
<!-- immediately, instead of waiting for 'onScroll' to complete  -->
<!-- in case it contains 'event.preventDefault()'                -->
<div @scroll.passive="onScroll">...</div>
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
&lt;template&gt; 
&lt;div id=&quot;main&quot; class=&quot;main-alt&quot;&gt; 
{{ reversedMessage }} 
&lt;input v-model = &quot;message&quot;/&gt; 
&lt;/div&gt; 
&lt;/template&gt; 
&lt;script&gt;

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

// This also means the following computed property will never update, because 'Date.now()' is not a reactive dependency:

computed: {
  now: function () {
    return Date.now()
  }
}
&lt;/script&gt;

// Passing parametes to computed properties
// Example: 2


&lt;template&gt; &lt;div&gt; &lt;div&gt; &lt;label&gt;First Name:&lt;/label&gt; &lt;input type=&quot;text&quot; v-model=&quot;firstName&quot; /&gt; &lt;/div&gt; &lt;div&gt; &lt;label&gt;Last Name:&lt;/label&gt; &lt;input type=&quot;text&quot; v-model=&quot;lastName&quot; /&gt; &lt;/div&gt; &lt;div&gt; &lt;label&gt;Full Name:&lt;/label&gt; &lt;input v-model=&quot;prefix&quot; /&gt; &lt;span&gt;{{ getFullName(prefix) }} &lt;/span&gt; &lt;/div&gt; &lt;/div&gt; &lt;/template&gt;

&lt;script&gt;

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
&lt;/script&gt;


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

&lt;template&gt; &lt;div&gt; &lt;input v-model=&quot;searchQuery&quot; type=&quot;text&quot; placeholder=&quot;Search the name&quot;&gt; &lt;div class=&quot;Chatroom__list__messages&quot; v-for=&quot;result in resultQuery&quot; :key=&quot;result.image&quot;&gt; &lt;div&gt; {{ result.name }} &lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/template&gt;

&lt;script&gt;

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
 &lt;/script&gt;
//////////////////////////////////////////////////////////////////
 // Example: 3

 &lt;template&gt;
    &lt;div&gt;
        &lt;div v-for=&quot;(result, i) in userData&quot; :key=&quot;i&quot;&gt;
            &lt;div&gt;
                {{ result.name }} &lt;button @click=&quot;removeRecord(result.id)&quot;&gt;remove record&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div v-if=&quot;!isRecords&quot;&gt;
            No records found
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;

export default {
    components: {
    },
    data() {
        return {
            userData: [
                {
                    name: "Tunde",
                    id: 1,
                },
                {
                    name: "bola",
                    id: 2,
                },
                {
                    id: 3,
                    name: "Supreme",
                },
            ],
        }
    },
    computed: {
        isRecords() {
            return this.userData.length > 0
        }
    },
    methods: {
        emptyRecords(){

        },
        removeRecord(id){
            console.log(id)
            this.userData = this.userData.filter(v => {
                return v.id !== id
            })
        }

    }
}
&lt;/script&gt;

`
        },
        {
          text1: `The difference between a computed property and a method is that <b>computed properties are cached</b> and change only when their dependencies change. A <b>method will evaluate every time it's called</b>.

          The difference between a <b>computed property and a method is that computed properties are cached</b>, these properties only change when their dependency change. A method will be evaluated every time it is being called.

          Why do we need caching? Imagine we have an expensive computed property <b>A</b>, which requires looping through a huge Array and doing a lot of computations. Then we may have other computed properties that in turn depend on <b>A</b>. Without caching, we would be executing <b>A</b>’s getter many more times than necessary! In cases where you do not want caching, use a method instead.
          `,
          code1: ``
        },
        {
          text1: `<b>Writable Computed</b>
By default, Computed properties are getter-only, but it’s possible a declare a setter and make Computed a “Writable Computed”.`,
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

In most cases, you will not end in a situation where you need to set some data in computed property and that’s why computed properties by default are getters only. For some rare scenarios, we can write a setter like this to update the data value:

<b>Best practices</b>
-> Computed property getters should always be pure functions.
-> Try to avoid mutating computed property as much as possible. Instead of mutating the computed property, you should try to update the data field which triggers new computations and invokes the getter. e.g.,

<b>How computed property is different from methods?</b>
This is important to understand that <b>computed properties</b> and <b>methods</b> have a different purpose to serve. In a nutshell:

The <b>computed property</b> will always give the same value for the same data field value(<b>pure functions</b>) and will get invoked only when the data field value gets updated.

<b>Methods</b> need not be <b>pure functions</b> and can be invoked any number of times. They do not create data fields for us.

`,
          code1: `
      &lt;template&gt; &lt;div&gt; &lt;div&gt;Employee Details&lt;/div&gt; &lt;div&gt;{{details}}&lt;/div&gt; &lt;button @click=&quot;changeEmployeeDetails&quot;&gt;Change Details&lt;/button&gt; &lt;/div&gt; &lt;/template&gt;
&lt;script&gt;

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
&lt;/script&gt;
`
        },
        {
          text1: `   <b> {{ message.split('').reverse().join('') }}</b>
          <b>Readability</b>: While the expression {{ message.split('').reverse().join('') }} achieves the desired result (reversing the characters in message), it can be less readable and harder to understand at a glance, especially for someone unfamiliar with JavaScript string methods.

<b>Maintainability</b>: If you need to perform similar transformations in multiple places within your Vue.js component or across multiple components, repeating the same complex expression can make your code harder to maintain. Changes to the transformation logic would need to be applied everywhere the expression is used.

<b>Debugging</b>: Debugging becomes more challenging with complex expressions embedded directly in the template. Errors might not be immediately obvious, and debugging tools might not provide as much context within templates as they do for JavaScript code.

<b>Performance</b>: While this specific example is not computationally expensive, more complex expressions or ones that rely on heavy computations could impact performance, especially if they are re-evaluated frequently (for example, inside a v-for loop).
          `,
          code1: ` computed: {
      reversedMessage: function() {
        return this.message.split('').reverse().join('');
      }
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
      title: "Watched Property",
      note: [
        {
          text1: `
          In Vue.js, the watch option is used to watch for changes on a specific data property or computed property and perform actions in response to those changes. It provides a way to reactively respond to data changes that do not involve updating the DOM directly.

          <b>Definition</b>: The watch option allows you to observe changes to a data property, computed property, or even a deep property of an object, and take action when those changes occur.

          A watcher in Vue is a special feature that allows us to observe some data and perform specific actions when it changes. It is a more generic way to observe and react to data changes in the Vue instance.

With watchers, we are not just able to watch a property and perform custom actions; we can also access the old value that this particular property is changing from, as well as the new value that it has changed to.

Use Cases:
<b>Asynchronous Operations</b>: Execute asynchronous operations or API calls in response to data changes.
<b>Complex Logic</b>: Perform complex computations or updates based on changes in multiple data properties.
<b>Handling Side Effects</b>: Implement side effects such as logging, animations, or triggering other methods.

A <b>side effect</b> is anything that affects state outside of the component, or affects state in an asynchronous way.
Common examples are:
> Fetching data
> Manipulating the DOM
> Using a browser API, such as local storage or audio playback
          `,
          code1: `
          var vm = new Vue({
  data: {
    message: 'Hello, Vue.js!'
  },
  watch: {
    message: function(newValue, oldValue) {
      // This function will run whenever 'message' changes
      console.log('Old message: \${oldValue}, New message: \${newValue}');
    }
  }
});
          `
        },
        {
          text1: `Watch Example: Call API when parent input prop changed

        <span style="color:orange">Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: <b>searchQuery</b></span>

        to avoid above error created <b>localSearchQuery</b> data property and updating <b>searchQuery</b> using <b>$emit</b>

        input value too fast that v-model can not handle, As per input speed data not updating in DOM for that created <b>custom directive</b> insted of v-model
        `,
          code1: ` //parent.vue
&lt;template&gt;
    &lt;div&gt;
        &lt;WatchApi :searchQuery.sync=&quot;ParentSearchQuery&quot;/&gt;
        {{ ParentSearchQuery }}
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import WatchApi from './WatchApi.vue' 
export default {
    components: {
        WatchApi
    },
    data(){
        return{
            ParentSearchQuery : null,
        }
    },

}
    &lt;/script&gt;    


  //WatchApi.vue
  &lt;template&gt;
    &lt;div&gt;
        &lt;input v-model=&quot;localSearchQuery&quot; type=&quot;text&quot; placeholder=&quot;Search the name&quot; @input=&quot;updateSearchQuery&quot;/&gt;
        &lt;input v-model=&quot;localSearchQuery&quot; type=&quot;text&quot; placeholder=&quot;Search the name&quot;/&gt;
        &lt;input v-initvalue=&quot;localSearchQuery&quot; v-on:keyup=&quot;localSearchQuery = $event.target.value&quot; type=&quot;text&quot; placeholder=&quot;Search the name&quot;/&gt;
        {{ localSearchQuery }}
        {{ error ? error : userList }}
    &lt;/div&gt;
&lt;/template&gt;


&lt;script&gt; 

export default {
    components: {
    },
    props: {
        searchQuery: { // Assuming 'searchQuery' is passed as a prop from parent component
            type: String,
            required: false
        },
    },
    data() {
        return {
            userList: [],
            localSearchQuery: this.searchQuery, // Initialize with prop value
            error:""
        }
    },
    computed: {

    },
    methods: {
        async getUser() {
            if (this.searchQuery) {
                await fetch('https://jsonplaceholder.typicode.com/users/\${this.localSearchQuery}')
                    .then(async (response) => {
                        // console.log(response.ok)
                        if (response.ok) {
                            return response.json()
                        }
                        throw new Error('Somthing went wrong')
                    })
                    .then(async (json) => {
                        // console.log(json)
                         this.userList = await json
                    })
                    .catch(err => {
                        // console.log(err)
                        this.userList = []
                        this.error = err
                    })
            }
            return;
        },
        // updateSearchQuery() {
        //     this.$emit('update:searchQuery', this.localSearchQuery);
        // }
    },
    watch: {
        searchQuery(val) {
            console.log(val)
            val ? this.getUser() : this.userList = []
            this.error = ''
        },
                // Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "searchQuery"

        // to avoid above error created 'localSearchQuery' data property and updating 'searchQuery' using '$emit'
        localSearchQuery(newVal) {
            this.$emit('update:searchQuery', newVal)
        }
    }
}

&lt;/script&gt;

//Custom Directive in main.js / App.js
Vue.directive('initvalue', {
  inserted: function(el, binding) {
      el.value = binding.value;
  }
});


`
        },
        {
          text1: ``,
          code1: `
          &lt;template&gt;
    &lt;div&gt;
      &lt;p&gt;Count: {{ count }}&lt;/p&gt;
      &lt;button @click=&quot;increment&quot;&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script&gt;

          &lt;script&gt; 
            export default {
    data() {
      return {
        count: 0
      };
    },
    watch: {
      count(newValue, oldValue) {
        console.log('Count changed from \${oldValue} to \${newValue}');
        // Example: Perform additional side effects here
      }
    },
    methods: {
      increment() {
        this.count++;
      }
    }
  };
          &lt;/script&gt;
          `
        },
        {
          text1: ``,
          code1: ``
        },
        {
          text1: `what is difference between watch and computed

-> Computed properties are more declarative than watcher properties.
-> Computed properties should be pure in the way that they should return a value, be synchronous, and have no side effects.
-> Watched props only call functions, while computed properties generate new reactive properties.
-> Watched properties can only watch one prop at a time, whereas computed properties can react to changes in several props.
-> As computed properties are cached, they only need to be recalculated when something changes. Props that have been watched are always used.
-> Computed properties are evaluated asynchronously, which means they are only utilized when needed. When a prop is changed, watched props are executed.
-> So there are quite some situations where computed properties won't help you, for example: your component receives a prop, and whenever the prop changes, your component had to make an ajax request. For this, you would need a watcher.

<b>Computed Properties:</b>
<b>Purpose</b>: Computed properties are used to compute and cache a value based on reactive data properties.

<b>Watchers</b>:
<b>Purpose</b>: Watchers are used to perform custom actions or side effects in response to changes in data properties.

<b>Key Differences</b>:
<b>Caching</b>: Computed properties cache their values based on dependencies, optimizing performance by recalculating only when necessary. Watchers do not cache values and execute every time the watched property changes.
<b>Use Case</b>: Computed properties are ideal for deriving values or formatting data for display purposes. Watchers are suitable for handling side effects or executing imperative logic in response to data changes.
<b>Performance</b>  : Computed properties are generally more efficient for repeated calculations due to caching. Watchers are used for reacting to changes dynamically but may have performance implications if used inefficiently.
`,
          code1: ``
        },
        {
          text1: `
          the watcher <b>name</b> was declared as a function. But it can actually be declared as an object. When declared as an object, the watcher can take three properties namely a <b>handler</b> function, and two booleans <b>deep</b> and <b>immediate</b>.

In Vue.js, the handler function within the watch property of a component is a callback function that gets executed whenever the watched property or expression changes. It serves as the main logic or action you want to perform in response to changes in the data being watched. Here's a detailed explanation of the handler function within the watch property:

<span style="color:green">
    watch: {
    //     user(newValue, oldValue) {
    //   this.fullName = this.newValue + " " +  this.oldValue
    // },
        user: {
            deep: true,
            handler() {
                this.isElgableCheck()
                this.clearError()
            }
        },
    },
</span>

<b>watch</b> is lazy by default: the callback won't be called until the watched source has changed. But in some cases we may want the same callback logic to be run eagerly - for example, we may want to fetch some initial data, and then re-fetch the data whenever relevant state changes.

We can force a watcher's callback to be executed immediately by declaring it using an object with a <b>handler</b> function and the <b>immediate: true</b> option:

The <b>immediate</b> option tells vue.js to trigger the function as soon as the component is created instead of waiting for changes to occur.

<span style="color:green">
export default {
  // ...
  watch: {
    question: {
      handler(newQuestion) {
        // this will be run immediately on component creation.
      },
      // force eager callback execution
      immediate: true
    }
  }
  // ...
}
</span>

In Vue.js, <b>deep watch</b> refers to a way of watching for changes in nested data structures within a component's state. By default, Vue's watch function performs shallow watching, which means it only watches changes to the immediate properties of an object or array.

<b>deep:</b> Watchers can be very helpful in mutation, but by default, watchers do not mutate nested properties and if we want to mutate the nested property we need to set <b>{ deep: true }</b> in the watcher as below:

However, in some cases, you may need to watch for changes that occur deeply within nested objects or arrays. This is where deep watching becomes useful. Deep watching can be enabled by passing an additional option <b>{ deep: true }</b> when setting up a watcher in Vue.js.`,
          code1: `
// Immediate Example
&lt;template&gt;
    &lt;div&gt;
        &lt;input type=&quot;text&quot; v-model=&quot;message&quot; placeholder=&quot;message&quot; /&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    name: "WatchApi",
    data: () => {
        return {
            message : 'Hello, World!'
        };
    },
    watch: {
        message: {
            immediate: true,
            handler: function (newVal, oldVal) {
                console.log('Message changed from', oldVal, 'to', newVal)
            }
        }
    },
};
&lt;/script&gt;

//---------------------
// deep example
          // Example : 1
          // User.vue
          &lt;template&gt;
  &lt;div class=&quot;main&quot;&gt;
    &lt;p class=&quot;id&quot;&gt;{{ userData.id }}:&lt;/p&gt;
    &lt;div class=&quot;left-section&quot;&gt;
      &lt;input type=&quot;text&quot; v-model=&quot;user.name&quot; /&gt;
      &lt;p class=&quot;display&quot;&gt;New Value: {{ newDisplay }}&lt;/p&gt;
      &lt;p class=&quot;display&quot;&gt;Old Value: {{ oldDisplay }}&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: "User",
  props: {
    userData: {
      type: Object,
      default: () => {},
    },
  },
  data: () => {
    return {
      user: null,
      newDisplay: "",
      oldDisplay: "",
    };
  },
  created() {
    this.user = JSON.parse(JSON.stringify(this.userData));
    console.log(this.user);
  },
  watch: {
    "user.name": function (newVal, oldVal) {
      this.newDisplay = newVal;
      this.oldDisplay = oldVal;
    },
  },
};
&lt;/script&gt;

// App.vue

&lt;template&gt;
  &lt;div id=&quot;app&quot;&gt;
    &lt;user v-for=&quot;(item, index) in users&quot; :key=&quot;index&quot; :userData=&quot;item&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import User from "./components/User";
export default {
  name: "App",
  components: { User },
  data() {
    return {
      users: [
        { id: 1, name: "shiv" },
        { id: 2, name: "Jhon" },
        { id: 3, name: "Mariya" },
      ],
    };
  },
};
&lt;/script&gt;

// Example : 2
// parent.vue
&lt;template&gt;
    &lt;div id=&quot;app&quot;&gt;
        &lt;WatchApi v-for=&quot;(item, index) in users&quot; :key=&quot;index&quot; :userData=&quot;item&quot; @updateUser=&quot;userDetails&quot;/&gt;
        {{ users }}
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;

import WatchApi from "./WatchApi";
export default {
    name: "App",
    components: { WatchApi },
    data() {
        return {
            users: [
                { id: 1, name: "shiv", age: 72, salary: 40000 },
                { id: 2, name: "Jhon", age: 52, salary: 50000 },
                { id: 3, name: "Mariya", age: 12, salary: 20000 }
            ],
        };
    },
    methods:{
        userDetails(userD) {
            var parsedobj = JSON.parse(JSON.stringify(userD))
            // console.log(parsedobj)
           const edUser =  this.users.map(v => {
               return v.id === userD.id ? {...v, name: userD.name, age:userD.age } : v
            })
            // console.log(edUser)
            this.users = edUser
        }
    }

};
&lt;/script&gt;

//---------------
// deep example
// WatchApi.vue
&lt;template&gt;
    &lt;div class=&quot;main&quot;&gt;
        &lt;div class=&quot;left-section&quot; style=&quot;margin:15px;padding:10px;background-color: aquamarine;&quot;&gt;
            &lt;p class=&quot;id&quot;&gt;{{ userData.id }}:&lt;/p&gt;
            &lt;input type=&quot;text&quot; v-model=&quot;user.name&quot; /&gt;&lt;span&gt;New name: {{ newDisplay }}&lt;/span&gt;
            &lt;input type=&quot;text&quot; v-model=&quot;user.age&quot; placeholder=&quot;age&quot; /&gt;&lt;span&gt;New age: {{ user.age }}&lt;/span&gt;
            &lt;p&gt;{{ isElgable }}&lt;/p&gt;
            &lt;p&gt;{{ error }}&lt;/p&gt;
            &lt;p&gt;{{ user }}&lt;/p&gt;
            &lt;button @click=&quot;updateUDetails&quot;&gt;Update user&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;

export default {
    name: "WatchApi",
    props: {
        userData: {
            type: Object,
            default: () => { },
        },
    },
    data: () => {
        return {
            user: null,
            newDisplay: "",
            isElgable: false,
            error:''
        };
    },
    created() {
        this.user = JSON.parse(JSON.stringify(this.userData));
        // console.log(this.user);
    },
    methods: {
        isElgableCheck() {
           (this.user.age > 18 && this.user.age < 100) ? this.isElgable = true : this.isElgable = false;
        },
        clearError(){
            this.user.age > 100 ? this.error = 'Please enter valid Age' : this.error = ''
        },
        updateUDetails(){
            // console.log(this.user)
            this.$emit("updateUser",this.user)
        }
    },
    watch: {
        "user.name": function (newVal, oldVal) {
            this.newDisplay = newVal;
        },
        user: {
            deep: true,
            handler() {
                this.isElgableCheck()
                this.clearError()
            }
        },
    },
};

&lt;/script&gt;
`
        },
        {
          text1: `Vue 3
          In Vue.js, <b>watchEffect</b> is a function provided by the Vue Composition API. It allows you to run a reactive effect immediately and re-run it whenever its dependencies change. Unlike the <b>watch</b> function, which requires you to explicitly specify the dependencies, <b>watchEffect</b> automatically tracks the reactive dependencies used within the provided effect function.

          Key Points
<b>Automatic Dependency Tracking: watchEffect</b> tracks any reactive dependencies that are accessed within the effect function. When any of these dependencies change, the effect function is re-executed.

<b>Immediate Execution</b>: The effect function is executed immediately once the <b>watchEffect</b> is set up.

<b>Dependency Collection</b>: Dependencies are collected dynamically during the execution of the effect function, so there's no need to explicitly list them.

<b>Clean-up Function</b>: If the effect function returns a clean-up function, it will be called before the effect is re-executed on subsequent dependency changes.
          `,
          code1: `
          import { ref, watchEffect } from 'vue';

const count = ref(0);

watchEffect((onCleanup) => {
  const interval = setInterval(() => {
    console.log('The count is: \${count.value}');
  }, 1000);

  // Register a clean-up function to clear the interval
  onCleanup(() => {
    clearInterval(interval);
  });
});

//------------
&lt;template&gt;
  &lt;main&gt;
    {{ product.price }} = {{ product.quantity }} * 10
    &lt;input v-model=&quot;product.quantity&quot; type=&quot;number&quot; /&gt;
  &lt;/main&gt;
&lt;/template&gt;

&lt;script setup lang=&quot;ts&quot;&gt;
import { ref, watchEffect } from 'vue'
const product = ref({
  price: 10,
  quantity: 1
});

// runs every time its dependencies (quantity) change
watchEffect(() => {
  product.value.price = product.value.quantity * 10;
});
&lt;/script&gt;
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
      title: "Class and Style Bindings",
      note: [
        {
          text1: `In Vue.js, class and style bindings provide a way to dynamically bind classes and styles to an element. This can be done using object syntax, array syntax, or shorthand syntax. Here's a comprehensive overview of how to use class and style bindings in Vue.js:

          Ex 1:<b> (Class Bindings - Object Syntax)</b> : When <b>isActive</b> or <b>hasError</b> changes, the class list will be updated accordingly. For example, if <b>hasError</b> becomes <b>true</b>, the class list will become <b>"static active text-danger"</b>.

          Ex 2: <b>Array Syntax</b>
Using an array to apply multiple classes

EX 3:
<b>Style Bindings</b>
Object Syntax
Similar to class bindings, you can bind styles using an object syntax:

Ex 4:
<b>Style Bindings (Object Syntax) </b>
Similar to class bindings, you can bind styles using an object syntax:
          `,
          code1: `
          // Ex: 1 
          &lt;div class=&quot;static&quot; :class=&quot;{ active: isActive, &#39;text-danger&#39;: hasError }&quot;
&gt;&lt;/div&gt;
          // In the above example, the 'active' class will be applied if 'isActive' is 'true', and the 'text-danger' class will be applied if 'hasError' is 'true'.
          //==========
          // Ex: 2:1 (Array Syntax)
        //-----------
          // In this example, the 'active' class will be applied if 'isActive' is true, and 'errorClass and errorPara' will always be applied.
&lt;div :class=&quot;[isActive ? &#39;active&#39; : &#39;&#39;, &#39;errorClass&#39;]&quot;&gt;paragraph&lt;/div&gt;

&lt;style&gt;
.active {
    color : rgb(9, 25, 250);
    background-color: yellow;
}
.errorClass{
    background-color: red;
}
.errorPara{
    background-color: rgb(107, 240, 125);
}
&lt;/style&gt;
// Ex 2:2 :
//-------------
// Combining Syntaxes
// You can also combine object and array syntaxes:
        &lt;div :class=&quot;[{ active: isActive }, &#39;errorPara&#39;]&quot;&gt;text&lt;/div&gt;
        <div :class="['static-class', { active: isActive, 'text-danger': hasError }]"></div>
        &lt;div :class=&quot;[&#39;static-class&#39;, { active: isActive, &#39;text-danger&#39;: hasError }]&quot;&gt;&lt;/div&gt;
  //-----

&lt;template&gt;
    &lt;div :class=&quot;classObject&quot;&gt; Paragraph &lt;/div&gt;
  &lt;/template&gt;

  &lt;script&gt;
  export default {
    data() {
      return {
        isActive: true,
        hasError: true,
      };
    },
    computed: {
      classObject() {
        return {
          active: this.isActive,
          &#39;text-danger&#39;: this.hasError,
        };
      },
    },
  };
  &lt;/script&gt;
  &lt;style&gt;
  .active{
    background-color: green;
  }
  .text-danger{
    color:red
  }
  &lt;/style&gt;

  //--------------
 // Style Bindings(Object Syntax)
 &lt;div :style=&quot;{ color: activeColor, fontSize: fontSize + &#39;px&#39; }&quot;&gt;&lt;/div&gt;
&lt;script&gt;
export default {
 data() {
  return {
    activeColor: &#39;red&#39;,
    fontSize: 14
  };
}
}
&lt;/script&gt;

//--------
// Array Syntax
// You can also bind multiple style objects using array syntax:

&lt;div :style=&quot;[baseStyles, overridingStyles]&quot;&gt;&lt;/div&gt;
data() {
  return {
    baseStyles: {
      color: &#39;blue&#39;,
      fontSize: &#39;14px&#39;
    },
    overridingStyles: {
      fontSize: &#39;18px&#39;,
      fontWeight: &#39;bold&#39;
    }
  };
}

//--------
// Using Computed Properties
// For more complex logic, you can use 'computed properties' to manage class and style bindings:

&lt;template&gt;
    &lt;div :class=&quot;classObject&quot; :style=&quot;styleObject&quot;&gt; Phagraph &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data() {
        return {
            isActive : true,
            hasError : true,
            activeColor : &#39;yellow&#39;,
            fontSize : 30
        };
    },
    computed: {
        classObject() {
            return {
                active: this.isActive,
                &#39;text-danger&#39;: this.hasError
            };
        },
        styleObject() {
            return {
                color: this.activeColor,
                fontSize: this.fontSize + &#39;px&#39;
            };
        }
    }
};
&lt;/script&gt;

//-------
// Example
// Here is a complete example combining everything:

&lt;template&gt;
  &lt;div&gt;
    &lt;div :class=&quot;{ active: isActive, &#39;text-danger&#39;: hasError }&quot;&gt;Object Syntax Class Binding&lt;/div&gt;
    &lt;div :class=&quot;[isActive ? &#39;active&#39; : &#39;&#39;, hasError ? &#39;text-danger&#39; : &#39;&#39;]&quot;&gt;Array Syntax Class Binding&lt;/div&gt;
    &lt;div :style=&quot;{ color: activeColor, fontSize: fontSize + &#39;px&#39; }&quot;&gt;Object Syntax Style Binding&lt;/div&gt;
    &lt;div :style=&quot;[baseStyles, overridingStyles]&quot;&gt;Array Syntax Style Binding&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
      activeColor: &#39;red&#39;,
      fontSize: 14,
      baseStyles: {
        color: &#39;blue&#39;,
        fontSize: &#39;14px&#39;
      },
      overridingStyles: {
        fontSize: &#39;18px&#39;,
        fontWeight: &#39;bold&#39;
      }
    };
  }
};
&lt;/script&gt;

&lt;style&gt;
.active {
  background-color: yellow;
}
.text-danger {
  color: red;
}
&lt;/style&gt;

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
      title: "Lifecycle Hooks",
      note: [
        {
          text1: `Each Vue component instance goes through a series of initialization steps when it's created - for example, it needs to set up data observation, compile the template, mount the instance to the DOM, and update the DOM when data changes. Along the way, it also runs functions called lifecycle hooks, giving users the opportunity to add their own code at specific stages.
          Lifecycle hooks in Vue.js are special methods that allow you to hook into different stages of a component's life cycle, providing control over the behavior of the component at each stage. Here’s an overview of the most commonly used lifecycle hooks in Vue.js:

          <b>Lifecycle Diagram</b>
<b>Creation</b>
> beforeCreate
> created
<b>Mounting</b>
> beforeMount
> mounted
<b>Updating</b>
> beforeUpdate
> updated
<b>Destruction</b>
> beforeDestroy
> destroyed

<b>1. Creation</b>:
--------------
<b>beforeCreate</b>: This is the very first hook that gets called after the Vue instance is initialized. At this point, the instance's <b>data</b> and <b>methods</b> are not yet available.

The <b>beforeCreate</b> hook is a lifecycle hook in Vue.js that is triggered immediately when a component instance is initialized. This occurs after the resolution of props but before the execution of other lifecycle hooks such as <b>data()</b> or <b>computed</b>. This hook provides an early entry point to perform actions or setups before the component fully initializes.

It's important to note that in the Composition API, specifically in the <b>setup()</b> function, hooks are executed even before the <b>beforeCreate</b> hook. This means that any logic or operations defined in the <b>setup()</b> function will run before the <b>beforeCreate</b> hook is triggered. Below is an example to illustrate this sequencing:

Link for more information : https://medium.com/@emperorbrains/exploring-vue-3-lifecycle-hooks-a-hands-on-guide-with-real-time-examples-cccff27f76d3

<b>Diagram Representation:</b>
beforeCreate
| (initializing)
↓
<b>created:</b> This hook is called after the instance is created, and the <b>data</b> and <b>methods</b> are now available. However, the DOM has not yet been mounted.

The <b>created</b> hook is a lifecycle hook in Vue.js that is called after the component instance has finished processing all state-related options, including the <b>data()</b> and <b>computed</b> hooks. At this point, the component has been fully initialized, and reactive data, computed properties, and methods are available for use.

This hook is commonly used to perform actions that require access to the component's state and configurations, making it a suitable place for additional setup, data fetching, or any logic that depends on the initialized state of the component.

<b>Diagram Representation:</b>
created
| (instance created)
↓

<b>2. Mounting</b>
--------------
<b>beforeMount</b>: This hook is called right before the mounting process begins, and the render function is about to be called for the first time. The component's template is compiled, but it has not yet been inserted into the DOM.

The <b>beforeMount</b> hook is a lifecycle hook in Vue.js that is called right before the component is about to be mounted to the DOM. At this stage, the component has completed the setup of its reactive state, including data, computed properties, and methods. However, no DOM nodes associated with the component have been created yet. The <b>beforeMount</b> hook provides an opportunity to perform actions or setup tasks just before the component's initial render.

When the <b>beforeMount</b> hook is triggered, the component is on the verge of executing its DOM render effect for the first time. This makes it a suitable point to make final adjustments or execute logic that needs to be performed prior to the component becoming visible in the DOM.

<b>Diagram Representation:</b>
beforeMount
| (before rendering)
↓
<b>mounted</b>: This hook is called after the component is mounted to the DOM. At this point, you can access the DOM elements and perform operations that require the component to be present in the DOM.

The mounted hook is a lifecycle hook in Vue.js that is called after the component or instance has been successfully mounted to the DOM. At this stage, the component's template has been rendered, and its associated DOM elements are now part of the document. The <b>mounted</b> hook is commonly used for performing side effects, initialization tasks, or any operations that require access to the component's rendered DOM.

Key points about the <b>mounted</b> hook:

<b>1. DOM Accessibility</b>: Since the <b>mounted</b> hook is called after the component is attached to the DOM, it provides a suitable point for accessing and manipulating the DOM elements associated with the component.

<b>2 . Initialization Tasks</b>: It is often used to trigger actions that should occur once the component is fully visible in the document. This includes setting up event listeners, fetching additional data, or initializing third-party libraries.

<b>Diagram Representation:</b>
mounted
| (component mounted)
↓

<b>3. Updating</b>
--------------
<b>-> beforeUpdate</b>: This hook is called when the component detects a change in its reactive data. It is called before the DOM is patched, giving you an opportunity to perform actions before the DOM is updated.

The <b>beforeUpdate</b> hook is a lifecycle hook in Vue.js that is called right before the component is about to update its DOM tree due to a reactive state change. It provides a useful opportunity to access and modify the component's state or the DOM state before the actual update takes place.

Key points about the <b>beforeUpdate</b> hook:

<b>1) DOM State Access</b>: This hook allows you to access both the component's state and the DOM state just before Vue updates the DOM. It is particularly useful for making modifications or performing actions that should occur before the visual representation of the component is updated.
<b>2) Safe State Modification</b>: Unlike some lifecycle hooks, it is safe to modify the component's state within the <b>beforeUpdate</b> hook. This makes it a suitable place to adjust data or perform calculations based on the current state before the update.
<b>3) Conditional Updates</b>: Use cases include conditional updates, where certain modifications to the DOM or component state need to happen based on specific conditions before the update is applied.

<b>Diagram Representation</b>:
beforeUpdate
| (data change detected)
↓
<b>-> updated</b>: This hook is called after the component has re-rendered and the DOM has been updated. You can perform actions that depend on the DOM being in its updated state.

The <b>updated</b> hook is a lifecycle hook in Vue.js that is called after the component has successfully updated its DOM tree due to a reactive state change. It signals that the component's state and the corresponding DOM elements have been synchronized.

Key points about the <b>updated</b> hook:

<b>1) DOM Synchronization</b>: This hook is triggered after any DOM update caused by reactive state changes in the component. It provides confirmation that the component's template has been re-rendered to reflect the updated state.
<b>2) No Information on Cause</b>: While the <b>updated</b> hook informs you that an update has occurred, it doesn't provide specific details about what caused the update. For understanding the cause of changes, watchers are more appropriate.
<b>3) Caution on DOM Updates</b>: It is generally not recommended to perform direct DOM updates within the <b>updated</b> hook, as this hook can be triggered multiple times during the component's lifecycle. For DOM manipulations, it's often more appropriate to use other lifecycle hooks or directives.

<b>Diagram Representation</b>:
updated
| (DOM updated)
↓

<b>4. Destruction</b>
-----------------
<b>-> beforeDestroy</b>: This hook is called right before the component is destroyed. You can perform cleanup tasks, such as removing event listeners or stopping timers.

The <b>beforeUnmount</b> hook is a lifecycle hook in Vue.js that is called right before a component instance is about to be unmounted, providing an opportunity for cleanup tasks before the component is destroyed.

Key points about the <b>beforeUnmount</b> hook:

<b>1) Cleanup Operations</b>: This hook is particularly useful for performing cleanup operations, such as clearing intervals, deregistering event listeners, or releasing resources, before the component is permanently removed from the DOM.
<b>2) Replacement for Vue 2's 'beforeDestroy'</b>: In Vue 2, the equivalent hook was named <b>beforeDestroy</b>. In Vue 3, the naming was changed to <b>beforeUnmount</b> to better align with the updated component lifecycle terminology.

<b>Diagram Representation</b>:
beforeDestroy
| (cleanup)
↓
<b>-> destroyed</b>: This hook is called after the component has been destroyed. The component’s data bindings and event listeners are no longer active.

The <b>unmounted</b> hook is the final lifecycle hook in Vue.js, called after the component has been successfully unmounted and destroyed. At this stage, the component's DOM elements have been removed, and any resources or event listeners associated with the component should be released.

Key points about the <b>unmounted</b> hook:

<b>1) Final Cleanup</b>: The <b>unmounted</b> hook provides a final opportunity for cleanup operations that should be performed after the component is no longer part of the DOM. This is the last stop in the component's lifecycle.
<b>2) No Access to Component State</b>: It's important to note that variables or state initialized within the component are not accessible within the <b>unmounted</b> hook. Any resources or data specific to the component should be handled and cleaned up in earlier hooks, such as <b>beforeUnmount</b>.

<b>Diagram Representation</b>:
destroyed
| (component destroyed)
↓

<b>Key Points to Emphasize</b>
<b>Sequence</b>: The hooks are called in a specific order, starting from creation to destruction.
<b>Purpose</b>: Each hook serves a distinct purpose, from initializing data to cleaning up before the component is removed.
<b>Access to Data and DOM</b>: Some hooks allow access to data and DOM, while others do not (e.g., beforeCreate does not have access to data, while mounted does).
<b>Common Use Cases</b>:
<b>created</b>: Initialize data, make API calls.
<b>mounted</b>: Access the DOM, manipulate elements.
<b>beforeUpdate</b>: Perform actions before re-rendering.
<b>updated</b>: Perform actions after the DOM has been updated.
<b>beforeDestroy</b>: Cleanup tasks.
`,
          code1: `
          //-----------------
          // All hooks Example
          //................
          &lt;template&gt;
    &lt;div&gt;
      &lt;p&gt;{{ message }}&lt;/p&gt;
      &lt;button @click=&quot;updateMessage&quot;&gt;Update Message&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script&gt;
  export default {
    data() {
      return {
        message: &#39;Hello Vue.js!&#39;
      };
    },
    beforeCreate() {
      console.log(&#39;beforeCreate&#39;);
      console.log(this.message); //undefined
    },
    created() {
      console.log(&#39;created&#39;);
      console.log(this.message);
    },
    beforeMount() {
      console.log(&#39;beforeMount&#39;);
    },
    mounted() {
      console.log(&#39;mounted&#39;);
    },
    beforeUpdate() {
      console.log(&#39;beforeUpdate&#39;);
    },
    updated() {
      console.log(&#39;updated&#39;);
    },
    beforeDestroy() {
      console.log(&#39;beforeDestroy&#39;);
    },
    destroyed() {
      console.log(&#39;destroyed&#39;);
    },
    methods: {
      updateMessage() {
        this.message = &#39;Hello Updated Vue.js!&#39;;
      }
    }
  };
  &lt;/script&gt;

  &lt;style&gt;
  /* Add your styles here */
  &lt;/style&gt;
  //.............

          //---------------
          *** beforeCreate ***
          //...............
          // Example Vue.js component using the Composition API
import { ref, onBeforeCreate } from 'vue';

export default {
  setup() {
    // Code within setup() runs before beforeCreate hook
    console.log('Code inside setup()');

    // onBeforeCreate hook can still be used for specific actions
    onBeforeCreate(() => {
      console.log('beforeCreate hook');
      // Additional actions before other lifecycle hooks
    });

    // Return reactive data, refs, or other configurations
    return {
      exampleData: ref('Hello, Vue!'),
    };
  },

  // Other lifecycle hooks like created(), mounted(), etc. can follow
};

// In this example, the code within the 'setup()' function is executed before the 'beforeCreate' hook. This demonstrates the order of execution and emphasizes the role of 'beforeCreate' in the component's lifecycle.
//................
//---------------
*** created  ***
//..............

export default {
  data() {
    return {
      message: 'Hello, Vue!',
    };
  },

  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
  },

  created() {
    // Accessing reactive data and computed properties
    console.log('Message:', this.message);
    console.log('Reversed Message:', this.reversedMessage);

    // Perform additional setup or async operations if needed
    // For example, fetching data from an API
    this.fetchData();
  },

  methods: {
    async fetchData() {
      // Simulating data fetching from an API
      // Await an asynchronous operation, like an Axios request
      console.log('Fetching data...');
      // Example: const response = await axios.get('/api/data');
      // Process the response and update the component's state
    },
  },
};

// In this example, the 'created' hook is used to log information about the reactive data and computed properties, as well as initiate a data fetching operation. This showcases how the hook can be employed for post-initialization tasks in a Vue.js component.

//...........
//-----------
*** beforeMount ***
//...........

export default {
  data() {
    return {
      message: 'Hello, Vue!',
    };
  },

  beforeMount() {
    // Accessing reactive data or performing setup before mounting
    console.log('Before Mount: Message is', this.message);

    // You might perform additional tasks or interact with third-party libraries
    // just before the component is mounted to the DOM.
    // For example, initializing a chart library or setting up event listeners.
    this.initializeChart();
  },

  mounted() {
    // At this point, the component has been mounted to the DOM.
    // You can perform actions that require access to the DOM elements.
    console.log('Mounted: Component has been mounted to the DOM');
  },

  methods: {
    initializeChart() {
      // Example: Initializing a chart library (not an actual implementation)
      console.log('Initializing chart...');
      // Code to set up a chart using a third-party library, e.g., Chart.js
    },
  },
};

// In this example, the 'beforeMount' hook is used to log information about the reactive data and to initialize a chart library just before the component is mounted. This illustrates the role of the 'beforeMount' hook in facilitating pre-mount setup tasks.
//...........
//-------------
*** mounted ***
//............
export default {
  data() {
    return {
      message: 'Hello, Vue!',
    };
  },

  mounted() {
    // Accessing the DOM elements after the component has been mounted
    const element = this.$el;
    console.log('Mounted: Component has been mounted to the DOM');

    // Perform side effects or initialization tasks that require DOM access
    this.setupEventListeners();
  },

  methods: {
    setupEventListeners() {
      // Example: Setting up a click event listener on a button
      const button = this.$el.querySelector('button');
      if (button) {
        button.addEventListener('click', this.handleButtonClick);
      }
    },

    handleButtonClick() {
      // Event handler logic
      console.log('Button clicked!');
    },
  },
};
// In this example, the 'mounted' hook is utilized to access the DOM elements after the component has been mounted and to set up an event listener on a button. This demonstrates how the hook is commonly used for tasks that require interaction with the rendered DOM.
//.............
//------------
*** beforeUpdate ***
//-----------
export default {
  data() {
    return {
      imageUrl: 'original-image.jpg',
      imageWidth: 100,
    };
  },

  beforeUpdate() {
    // Accessing and modifying the component state or DOM state before the update
    console.log('Before Update: Current Image Width is', this.imageWidth);

    // Example: Modify image width before the actual update
    this.imageWidth = this.calculateNewImageWidth();
  },

  updated() {
    // After the update, the component's state and the DOM have been synchronized
    console.log('Updated: Image updated with new width', this.imageWidth);
  },

  methods: {
    calculateNewImageWidth() {
      // Example: Calculate a new width based on some condition
      return Math.random() > 0.5 ? 150 : 80;
    },
  },
};

// In this example, the 'beforeUpdate' hook is used to access and modify the image width before the component updates. This demonstrates how the hook can be valuable for scenarios where pre-update adjustments are necessary.
//-----------
//..........
*** updated  ***
//-----------
export default {
  data() {
    return {
      message: 'Hello, Vue!',
    };
  },

  updated() {
    // This hook is called after any update to the component's DOM
    console.log('Updated: Component has been updated with new state');

    // Avoid direct DOM updates here to prevent potential issues
    // Use this hook for side effects that don't involve modifying the DOM directly
  },

  methods: {
    updateMessage() {
      // Example: Changing the message triggers a reactive state change
      this.message = 'Updated Message!';
    },
  },
};

// In this example, the 'updated' hook is utilized to log a message indicating that the component has been updated. It emphasizes the caution against performing direct DOM updates inside this hook, redirecting such operations to more appropriate lifecycle hooks or directives.
//............
//------------
*** beforeUnmount  ***
//------------

export default {
  data() {
    return {
      intervalId: null,
    };
  },

  beforeUnmount() {
    // Cleanup operations before the component is unmounted
    console.log('Before Unmount: Cleaning up resources');

    // Clearing an interval as an example of cleanup
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },

  mounted() {
    // Set up an interval as an example
    this.intervalId = setInterval(() => {
      console.log('Interval tick');
    }, 1000);
  },
};

// In this example, the 'beforeUnmount' hook is used to clean up resources (clearing an interval) before the component is unmounted. This illustrates the importance of this hook in managing cleanup tasks just before the component is removed from the DOM.
//............
//------------
*** unmounted  ***
//------------
export default {
  data() {
    return {
      intervalId: null,
    };
  },

  beforeUnmount() {
    // Cleanup operations before unmounting
    console.log('Before Unmount: Cleaning up resources');

    // Clearing an interval as an example of cleanup
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  },

  mounted() {
    // Set up an interval as an example
    this.intervalId = setInterval(() => {
      console.log('Interval tick');
    }, 1000);
  },

  unmounted() {
    // This hook is called after the component is completely unmounted
    console.log('Unmounted: Component has been successfully unmounted');
  },
};

// In this example, the 'unmounted' hook is used to log a message indicating that the component has been successfully unmounted. The cleanup operations are handled in the 'beforeUnmount' hook, emphasizing the separation of concerns between cleanup and the final acknowledgment of unmounting.
//............

          `
        }
      ]
    },
    {
      id: 1,
      title: "Template Refs",
      note: [
        {
          text1: `If a ref attribute is added to an HTML element in your Vue template, you'll be able to reference that element or even a child element in your Vue instance. You can also access the DOM element directly; it is a read-only attribute and returns an object.

          In Vue.js, template refs provide a way to directly access DOM elements or child components in your Vue instance. They are especially useful when you need to manipulate the DOM or access component methods and properties directly.

         <b> Key Points </b>
<b>Lifecycle Hooks</b>: You can access refs in lifecycle hooks like mounted(), updated(), etc. They are not available in created() because the DOM has not been rendered yet.
<b>Reactive</b>: Refs are not reactive. If the ref value changes, it won't trigger a re-render of your Vue component.
<b>Best Practices</b>: Use refs sparingly. Prefer using Vue's declarative rendering and data binding wherever possible. Refs should be used primarily when you need to access a third-party library or manipulate the DOM directly.`,
          code1: `&lt;template&gt;
    &lt;div&gt;
        &lt;input ref=&quot;myInput&quot; type=&quot;text&quot;&gt;
        &lt;button @click=&quot;focusInput&quot;&gt;Focus the input&lt;/button&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    methods: {
        focusInput() {
            this.$refs.myInput.focus();
        },
    },
};
&lt;/script&gt;`
        },
        {
          text1: `<b>Example: Accessing Child Component Methods</b>
Assume you have a child component called ChildComponent`,
          code1: `&lt;!-- ChildComponent.vue --&gt;
&lt;template&gt;
  &lt;div&gt;
    Child Component
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  methods: {
    someMethod() {
      console.log(&#39;Child method called&#39;);
    },
  },
};
&lt;/script&gt;

// Parent component

&lt;template&gt;
  &lt;div&gt;
    &lt;child-component ref=&quot;myChild&quot;&gt;&lt;/child-component&gt;
    &lt;button @click=&quot;callChildMethod&quot;&gt;Call Child Method&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import ChildComponent from &#39;./ChildComponent.vue&#39;;

export default {
  components: {
    ChildComponent,
  },
  methods: {
    callChildMethod() {
      this.$refs.myChild.someMethod();
    },
  },
};
&lt;/script&gt;

`
        },
        {
          text1: `counter and Random button color change using ref`,
          code1: `&lt;!-- src/App.vue --&gt;
&lt;template&gt;
    &lt;div id=&quot;app&quot;&gt;
      &lt;WatchApi /&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script&gt;
  import WatchApi from &#39;./WatchApi.vue&#39;;

  export default {
    name: &#39;App&#39;,
    components: {
      WatchApi,
    },
  };
  &lt;/script&gt;

  &lt;style&gt;
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  &lt;/style&gt;

  //---------- 

  &lt;!-- src/components/ClickCounter.vue --&gt;
&lt;template&gt;
    &lt;div&gt;
      &lt;h1&gt;Click Counter&lt;/h1&gt;
      &lt;button ref=&quot;counterButton&quot; @click=&quot;incrementCounter&quot;&gt;Click me&lt;/button&gt;
      &lt;p&gt;Button has been clicked {{ counter }} times.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;script&gt;
  export default {
    data() {
      return {
        counter: 0,
      };
    },
    methods: {
      incrementCounter() {
        this.counter++;
        this.updateButtonColor();
      },
      updateButtonColor() {
        const colors = [&#39;#FF5733&#39;, &#39;#33FF57&#39;, &#39;#3357FF&#39;, &#39;#F333FF&#39;, &#39;#FF33A1&#39;];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.$refs.counterButton.style.backgroundColor = randomColor;
      },
    },
  };
  &lt;/script&gt;

  &lt;style scoped&gt;
  div {
    text-align: center;
    margin-top: 50px;
  }
  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  p {
    font-size: 18px;
    margin-top: 20px;
  }
  &lt;/style&gt;

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
                   // https://www.vuemastery.com/courses/vuex-fundamentals/vuex4-intro-to-vuex/

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
                   &lt;b&gt; Slot.js &lt;/b&gt;
                    &lt;template&gt; 
                    &lt;div&gt; 
                    &lt;test-slot :bgcl=&quot;bgccl&quot;&gt; 
                    &lt;template v-slot:header&gt;
                    &lt;h1 v-bind:style=&quot;slotBgColor&quot;&gt;This is Header&lt;/h1&gt; 
                    {{childMessage}}asa 
                    &lt;/template&gt; 

                    &lt;h1&gt;This is slot text&lt;/h1&gt; 
                    &lt;template v-slot:footer&gt; 
                    &lt;h1 v-html=&quot;footerMessage&quot; :style=&quot;slotBgColor&quot;&gt;&lt;/h1&gt; 
                    &lt;/template&gt; 
                    &lt;/test-slot&gt; 



                    &lt;child-slot v-slot=&quot;{childMessage,idVal}&quot;&gt; 
                    {{childMessage}} 
                    {{idVal}} 
                    &lt;/child-slot&gt; 
                    &lt;/div&gt; 
                    &lt;/template&gt; 



                    &lt;script&gt; 
                    import Vue from &quot;vue&quot;; 
                    Vue.use(require(&quot;vue-cookies&quot;)); 
                    export default { 
                    name: &quot;NextTick&quot;, 
                    data() { 
                    return { 
                    footerMessage: 
                    &quot;this is &lt;b style=&#39;background-color:#09ccea;padding:12px;border-radius:8px;&#39;&gt;footer&lt;/b&gt;&quot;, 
                    bgccl: true, 
                    slotBgColor: { backgroundColor: &quot;orange&quot; }, 
                    }; 

                    }, 

                    components: { 
                    TestSlot: () =&gt; import(&#39;./TestSlot&#39;), 
                    ChildSlot: () =&gt; import(&#39;./ChildSlot&#39;) 
                    }, 
                    mounted() {}, 
                    methods: { 
                    showMessage() { 
                    alert(&quot;This is message&quot;); 
                    }, 
                    }, 
                    }; 

                    &lt;/script&gt; 

&lt;b&gt;TestSlot.js &lt;/b&gt;
                    &lt;template&gt; 
                    &lt;div&gt; 
                    &lt;slot name=&quot;header&quot; :childMessage=&quot;{childMessage}&quot;/&gt; 
                    &lt;h1 :class=&quot;{ bgColAccBanner: bgcl }&quot;&gt;Test Slot {{ bgcl }}&lt;/h1&gt; 
                    &lt;slot name=&quot;footer&quot;&gt;&lt;/slot&gt; 
                    &lt;/div&gt; 
                    &lt;/template&gt; 

                    &lt;script&gt; 
                    import Vue from &quot;vue&quot;; 
                    Vue.use(require(&quot;vue-cookies&quot;)); 
                    export default { 
                    name: &quot;NextTick&quot;, 
                    data() { 
                    return { 
                    // bgColAccBanner:{backgroundColor:red} 
                    childMessage:&#39;this message form slot&#39; 
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
                    template: &quot;&lt;h1&gt; Ram Ram &lt;/h1&gt;&quot;, 
                    mounted() {}, 
                    methods: {}, 
                    }; 

                    &lt;/script&gt; 
                    &lt;style&gt; 
                    .bgColAccBanner { 
                    background-color: green; 
                    } 

                    &lt;/style&gt; 
                    &lt;b&gt;ChildSlot.js&lt;/b&gt; 
                    &lt;template&gt; 
                    &lt;div&gt; 
                    &lt;slot :childMessage=&quot;childMessage&quot; :idVal=&quot;idVal&quot;&gt;&lt;/slot&gt; 
                    &lt;/div&gt; 
                    &lt;/template&gt; 



                    &lt;script&gt; 
                    import Vue from &quot;vue&quot;; 
                    Vue.use(require(&quot;vue-cookies&quot;)); 
                    export default { 
                    name: &quot;NextTick&quot;, 
                    data() { 
                    return { 
                    // bgColAccBanner:{backgroundColor:red} 
                    childMessage:&#39;this message form slot&#39;, 
                    idVal:123 
                    }; 
                    }, 
                    props: { 
                    }, 
                    components: {}, 
                    template: &quot;&lt;h1&gt; Ram Ram &lt;/h1&gt;&quot;, 
                    mounted() {}, 
                    methods: {}, 
                    }; 

                    &lt;/script&gt; 
                    &lt;style&gt; 
                    .bgColAccBanner { 
                    background-color: green; 
                    } 
                    &lt;/style&gt; 
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

