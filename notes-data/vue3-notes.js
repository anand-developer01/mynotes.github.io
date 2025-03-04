// Composition API: A new API that allows for more flexible and reusable logic through setup(), ref(), reactive(), and more.

//   Teleport: A new feature for rendering content outside the parent component's DOM hierarchy.

//     Fragments: Allows components to return multiple root nodes.

//       Suspense: Provides a way to handle async components and data fetching with a loading state.

// Performance Improvements: Optimized virtual DOM, improved reactivity system, and faster component mounting and updating.

// TypeScript Support: Improved TypeScript support with better type inference and integration.

//   v - model Enhancements: Supports multiple v - model bindings and custom v - model names for components.

// Reactive API: The new reactivity system is based on Proxies, providing better performance and more capabilities.

// Better Support for Server - Side Rendering(SSR): Enhanced support for SSR with improved hydration and streaming.

// New Lifecycle Hooks: Additional hooks like onBeforeMount, onBeforeUnmount, and onActivated for better control over component lifecycle.

// Enhanced refs and reactive: Improved handling and usage of refs and reactive objects.

//   defineComponent: A function for defining components with better TypeScript support and improved syntax.

// Custom Directives: New API for defining custom directives with improved flexibility.

// Improved Composition API: Advanced features like watchEffect and shallowReactive for more control over reactivity.

// < script setup > Syntax: A simpler and more concise way to use the Composition API in single - file components.

// createApp Function: New method to create and configure Vue applications, providing a more modular and flexible application instance.

// Enhanced provide / inject: Improved API for dependency injection with better support for reactive values.

//   Built - In Teleport Support: Direct support for rendering components into different parts of the DOM.




// Absolutely, Vue 3 brings a number of additional enhancements and features beyond the core ones I mentioned. Here are more notable features and improvements:

// Additional Vue 3 Features
// defineAsyncComponent:

// Allows you to define components that are loaded asynchronously, with support for loading, error, and timeout states.
// Custom Renderer API:

// Provides a low-level API for creating custom renderers, enabling the creation of frameworks or integrations with different platforms.
// Enhanced Error Handling:

// Improved handling of errors during component rendering and lifecycle hooks, with more informative error messages and better debugging.
// withDefaults:

// Allows defining default values for props in the defineProps function used with the <script setup> syntax.
// suspense with async setup:

// Allows setup functions to be asynchronous, providing better control over async operations and rendering states.
// useSlots and useAttrs:

// Enhanced APIs for accessing slot content and attributes within the setup function, making it easier to work with slots and attributes.
// Enhanced emit API:

// Improved emit functionality in the setup function for better type inference and event handling.
// shallowRef and shallowReactive:

// Provide shallow reactive references and objects that are reactive only at the top level, useful for performance optimization.
// watchPostEffect and watchEffect:

// Additional reactive APIs that allow you to watch reactive dependencies and perform side effects more effectively.
// Better Integration with DevTools:

// Enhanced Vue DevTools with support for Vue 3 features, providing better debugging and inspection capabilities.
// Improved v-bind with Object Syntax:

// Support for dynamic binding with better handling of object syntax in v-bind.
// Directives Enhancements:

// New and improved APIs for working with directives, including more granular control and flexibility.
// Improved Documentation and Guides:

// Updated and expanded documentation with more examples, guides, and explanations to help developers understand and use Vue 3 effectively.
// New Compiler Features:

// Enhanced compiler with better support for modern JavaScript features and more efficient code generation.
// Improved Internationalization (i18n) Support:

// Better support and integration for internationalization libraries and patterns.
// v-show and v-if Improvements:

// More efficient handling and optimizations for conditional rendering directives.
// Better Support for Progressive Web Apps (PWAs):

// Enhanced support and recommendations for building Progressive Web Apps with Vue 3.
// Improved Accessibility (a11y):

// Improvements and best practices for creating accessible applications with Vue 3.
const isHighlighted = 'vue3'
const Links1 = 'vue-notes'
const Links2 = 'vue3'
const Links3 = 'vue-x'
const Links4 = 'vue3-projects'

const vue3Data = {
  vue3Note: [
    {
      id: 1,
      title: "Composition API",
      note: [
        {
          text1: `The Composition API is a new feature introduced in Vue 3 that provides a different way of organizing and building Vue components. It allows developers to extract logic from components and 
          reuse it across multiple components, which can improve the readability and maintainability of the code.
          
          One of the main benefits is that it makes it easier to manage state and logic within a component by allowing you to define reactive properties and functions directly within it. This not only improves the readability and maintainability of the code but can also make it easier to understand how a component works and what its dependencies are.

          With Composition API, logic is written using imported Vue functions instead of using the Vue instance structure that we are used to from Options API.

          Vue 3 introduced Composition API which allows developers to write components in a better way. Using this API, developers can group the logical pieces of code together, which in turn helps write readable code.

Composition API is a built in feature in Vue 3 and is also available in Vue 2 via <b>@vue/composition-api</b> plugin.

Before Composition API was introduced, Vue 2 was using Options API. While developers can still use Options API in Vue 3, the problem with it is that one single topic would be fragmented across different options such as <b>data() or props, certain methods, some lifecycle hooks (mounted(), created(), and more), and watchers (watch)</b>.

With Composition API, you can organise code into smaller logical pieces, group them together, and even reuse them when required.

In Vue 3, a "composable" is a reusable function that leverages the Composition API to encapsulate and share reactive state, logic, and side effects between components. Composables are designed to help manage and organize code more effectively by allowing you to extract and reuse pieces of logic that are not specific to a single component.

In the context of Vue applications, a "composable" is a function that leverages Vue's Composition API to encapsulate and <b>reuse stateful logic</b>.
          `,
          code1: ``,
        }
      ]
    },
    {
      id: 1,
      title: "composition API vs Options API",
      note: [
        {
          text1: `<b>Options API</b>
          The Options API has been the standard way of writing Vue components in previous versions. It defines a component as an object with various options, <b>such as data, methods, computed properties, lifecycle hooks</b>, and more. Here are some key characteristics of the Options API:

<b>Declarative</b>: Components are defined using separate sections for data, methods, and other options, making it easy to understand the structure of the component.
<b>Simplicity</b>: The Options API is straightforward and accessible to beginners, as it follows a more traditional object-oriented approach.
<b>Global Mixins</b>: It allows for the use of mixins, which enable code reuse across multiple components.

When we use the Options API syntax, we need to create all the logic of a component within an <b>options object</b>, divided into groups of properties.

Below, we list the main options in the basic logic structure with Options API, although not all of them are mandatory or necessary depending on the objective of your component:

<b>data</b>: where we define our reactive properties (variables and states). Every property returned from data is exposed to the component's this object;
<b>methods</b>: where we declare functions that change states and trigger updates. Methods can be used as event handlers in the template;
<b>computed</b>: where we declare getter methods for processing and returning reactive data from our component;
<b>Lifecycle Hooks (mounted)</b>: which are built-in methods, which perform functions at different stages of a component's life (when it is mounted, updated, etc.).

Other common things we can run into with Options API and are not in the code above are:

<b>props</b>: components require explicit props declaration so that Vue knows what external props passed to the component should be treated as fallthrough attributes,
<b>watch</b>: declares watch callbacks to be invoked on data change. The watch option expects an object where keys are the reactive component instance properties to watch (e.g. properties declared via data or computed) — and values are the corresponding callbacks.

We also have other options, such as <b>name, components, props, directives, watch and emits</b>, among others, but they will not be covered in this article.

//----

<b>composition API</b>:
On the other hand, the Composition API is a new way of building components in Vue 3.0 that was introduced to address some of the limitations of the Options API. It allows developers to use a functional, reactive programming style to build components, and it offers a more flexible and expressive way of defining component behavior.

In this new Vue 3 syntax, all component logic is defined using functions imported from the Composition API and are normally used with the <b>&lt;script setup&gt;</b> tag.

The setup attribute allows us to use the Composition API with less <b>boilerplate</b> (In computer programming, <b>boilerplate code</b>, or simply <b>boilerplate</b>, are sections of code that are repeated in multiple places with little to no variation.) and its syntax eliminates the need to declare options in blocks, as we saw in Options API.

<b>What does Composition APIs expose?</b>
According to Vue's official documentation, Composition API exposes the following APIs:

<b>Reactivity API</b>, e.g. <b>ref()</b> and <b>reactive()</b> that allow us to directly create reactive state, computed state, and watchers.
<b>Lifecycle Hooks</b>, e.g. <b>onMounted()</b> and <b>onUnmounted()</b> that allow us to programmatically hook into the component lifecycle.
<b>Dependency Injection</b>, i.e. <b>provide()</b> and <b>inject()</b> that allow us to leverage Vue's dependency injection system while using Reactivity APIs.

The Composition API is a new addition to Vue 3 that offers a more flexible and scalable way of organizing and reusing logic within components. It enables developers to structure the component's logic based on composition functions. Here are some key characteristics of the Composition API:

<b>Function-based approach</b> Instead of defining separate options, logic is encapsulated within functions. This allows for better organization and reusability of code.
<b>Composition Functions</b> Components are built by combining smaller, reusable functions that can be composed together to create complex behavior.
<b>Better TypeScript support</b> The Composition API provides enhanced support for TypeScript, making it easier to type-check and refactor code.
The Composition API offers improved TypeScript support out of the box, providing better type-checking and code refactoring capabilities.
<b>Improved code organization</b> Logic related to a specific feature can be encapsulated in a single function, making it easier to understand and maintain the codebase.
<b>Better reactivity control</b> The Composition API provides finer-grained control over-reactivity, allowing developers to optimize performance.
//------
<b>Embracing the Composition API</b>
The Composition API is a departure from the traditional Options API, offering a more modular and function-centric approach to organizing component logic. Unlike the Options API, which relies on a single object containing various options, the Composition API allows developers to structure their logic into composable functions. Key features of the Composition API include:

<b>Reactive State</b>:
<b>Description</b>: The Composition API introduces the ref function, allowing developers to create reactive variables that can be tracked and automatically update the DOM when changed.
<b>Use Case</b>: Managing and tracking the state of a component in a reactive manner.

<b>Lifecycle Hooks</b>:
<b>Description</b>: Similar to the Options API, the Composition API retains lifecycle hooks, enabling developers to execute custom logic at various points in the component's lifecycle.
<b>Use Case</b>: Performing actions when the component is created, mounted, or updated.

<b>Composition Functions</b>:
<b>Description</b>: The Composition API encourages the creation of functions that encapsulate logic, promoting reusability and modularity.
<b>Use Case</b>: Defining and reusing logic in a more granular and organized manner.

<b>Options API</b>:
<b>Structure</b>: In the Options API, a Vue component is defined using an options object that contains properties such as data, methods, computed, watch, etc.
<b>Reactivity</b>: Data properties defined in the data and setup (using ref or reactive) options are made reactive by Vue. Computed properties and watchers are also reactive
<b>When to use</b>: The Options API is suitable for smaller, less complex components where reactivity is straightforward and does not require a lot of code organization

<b>Composition API</b>:
<b>Structure</b>: The Composition API allows you to organize your component's logic into reusable functions. These functions can be used to define reactive data, computed properties, watchers, etc.
<b>Reactivity</b>: Similar to the Options API, data defined using ref or reactive is reactive. Computed properties and watchers are also supported
<b>When to use</b>: The Composition API is beneficial for more complex components where reactivity logic needs to be more organized and reusable. It's especially useful when dealing with components that have a lot of reactive logic or when you need to share logic between components
          `,
          code1: `// Options API
          &lt;script&gt;
export default {
    data() {
        return {
            name: '',
            age: 0,
            aboveAge:false
        }
    },
    computed: {
        displayProfile() {
         return \`My name is \${this.name} and i am \${this.age}\`;
        }
    },
    methods: {
         verifyUser() {
         if(this.age < 18){
         this.aboveAge = false
        } else {
        this.aboveAge = true    
           }
        },   
    },
    mounted() {
        console.log('Application mounted');
    },
}
&lt;/script&gt;

//composition API
&lt;script setup&gt;
import {ref, reactive, onMounted } from 'vue'

const profile = reactive({name:'', age:''})
const aboveAge = ref(false)

const verifyUser = () => age.value < 18 ? aboveAge = false : aboveAge = true

const displayProfile = computed(() => {
  return \`My name is \${this.name} and i am \${this.age}\`;
})

onMounted (() => console.log('Application mounted'))
&lt;/script&gt;
`,
          img: `../assets/images/vue/composition API vs Options API.webp`
        },
        {
          text1: `<b>Cons of the Options API</b>
          <b>1. Code Organization Challenges</b>:
Description:- As a component grows in complexity, maintaining a well-organized code structure within a large options object can become challenging.
Implication:- Managing large components might lead to difficulties in code maintenance, readability, and collaboration.
<b>2. Limited Reusability</b>:
Description:- While suitable for simpler components, the Options API may prove less conducive to code reusability, making it harder to share and manage logic across different parts of the application.
Implication:- Complex applications requiring modular and shareable logic may encounter limitations with the Options API.
Another limitation of the Options API is that it can be inflexible when it comes to sharing logic between components. If you want to reuse a piece of logic across multiple components, you need to either copy and paste the code or abstract it into a mixin. This can make it difficult to manage code dependencies and maintain code quality as the size of a project grows.

In Vue 3, a "composable" is a reusable function that leverages the Composition API to encapsulate and <b>share reactive state, logic</b>, and side effects between components. Composables are designed to help manage and organize code more effectively by allowing you to extract and reuse pieces of logic that are not specific to a single component.

<b>Code Sharing</b>
One of the biggest differences between Options API and Composition API is the way they implement code sharing. <b>Options API</b> has two ways of sharing code, <b>mixins</b> and <b>renderless components</b>. Mixins can be a bit tricky to use, because they make it hard to determine where parts of code come from.

However, using mixins can be <b>difficult to debug and understand</b> for new developers, especially when they're dealing with global mixins. Their use can also lead to <b>naming conflicts</b> with components.

However, in much larger components, the Options API can end up becoming a problem: the blocks of code related to each other end up being very spread out within the component's script, compromising the understanding of the logic and maintainability.

Furthermore, because it has an object-oriented syntax, the Options API also has limited support for TypeScript, which can turns things a bit more difficult for the developer.

//------

<b>Pros of the Composition API</b>
<b>1. Reusability</b>:
<b>Description</b>: The Composition API excels in promoting code reusability by enabling developers to encapsulate and share logic in a modular manner.
<b>Implication</b>: Components can become more modular, making it easier to reuse and share logic across different parts of the application.
While the Options API supports <b>mixins</b> for code reuse, the Composition API takes it a step further with its composition functions. These functions can be easily composed and reused across multiple components, providing better code reusability.

In Vue 2, <b>mixins</b> were the primary mechanism for creating reusable chunks of component logic. While <b>mixins</b> continue to be supported in Vue 3, <b>Composable functions using Composition API</b> is now the preferred approach for code reuse between components.

<b>2. Better Organization</b>:
<b>Description</b>: The Composition API provides a more flexible and scalable approach to organizing code, particularly within complex components. Composition functions offer modularity and clarity.
<b>Implication</b>: Developers can organize their code more cohesively, leading to better maintainability and understandability of complex components.
<b>3. Easier Testing</b>:
<b>Description</b>: Due to its modular and composable nature, the Composition API can simplify the process of unit testing, making it easier to isolate and test individual functions.
<b>Implication</b>: Unit testing can be more straightforward and targeted, enhancing overall code quality and reliability.
Cons of the Composition API
<b>1. Learning Curve</b>:
<b>Description</b>: Developers new to Vue.js or those accustomed to the Options API may face a steeper learning curve when adopting the Composition API.
<b>Implication</b>: The initial investment in learning the Composition API may be higher, especially for teams with existing expertise in the Options API.
<b>2. Less Familiarity</b>:
<b>Description</b>: As a relatively newer addition to Vue.js, the Composition API may be less familiar to developers who have been working with Vue.js for an extended period.
<b>Implication</b>: Teams may need to allocate time for training and adaptation when transitioning to the Composition API.
<b>Better TypeScript support</b> The Composition API provides enhanced support for TypeScript, making it easier to type-check and refactor code.
The Composition API offers improved TypeScript support out of the box, providing better type-checking and code refactoring capabilities.

With <b>Composition API</b>, there is no need for <b>mixins</b>. Inside the setup hook, we can <b>group parts of code by logical concern</b>. Then, we can extract pieces of reactive logic and share them with other components.

Now let's take a look at <b>renderless components</b>. A renderless component is a component that <b>doesn't render any of its own HTML</b>. Instead, it only manages state and behaviour, which gives the parent component complete control over what should be rendered. That means, that if you move logic out of a UI component and into a renderless component, you can reuse it.
          `,
          code1: ``,
          img: `../assets/images/vue/composition-API-vs-Options-API-2.webp`
        }
      ]
    },
    {
      id: 1,
      title: "composable function:",
      note: [
        {
          text1: `<b>Composability</b> is a system design principle that deals with the inter-relationships of components.

          In Vue 3, a <b>composable function</b> is a custom function that encapsulates reusable logic and is typically used inside the <b>setup()</b> function. Composables allow you to organize code in a way that is easy to reuse across components without creating a rigid component hierarchy or using mixins. They are a part of the Composition API, which was introduced in Vue 3.
          
          a <b>Composable</b> is a function that leverages the power of the <b>Composition API</b>, enabling you to structure your code into reusable units.

          a <b>composable function</b> is a reusable function that encapsulates logic using Vue3's Composition API. It is typically used to reuse stateful login. across multiple components without using mixins
          Composables in Vue 3 are functions or objects that encapsulate a specific piece of functionality or logic. They are designed to be self-contained units that can be easily shared, reused, and composed together to build complex functionality in a declarative manner.

          When building frontend applications, we often need to reuse logic for common tasks. For example, we may need to format dates in many places, so we extract a reusable function for that. 

          <b>Reusability</b>: Composables allow you to encapsulate and package specific logic, making it highly reusable across different components. This promotes code reuse and reduces duplication, leading to a more maintainable codebase.
<b>Modularity</b>: By breaking down your code into smaller composables, you can achieve better modularity and separation of concerns. Each composable focuses on a specific task, making your codebase more organized and easier to understand.
<b>Testability</b>: Composables can be easily tested in isolation since they encapsulate specific logic. This facilitates unit testing and improves the overall testability of your Vue applications.
<b>Composition</b>: Composables are designed to be composable themselves. You can easily combine multiple composables together to create more complex functionality, providing a flexible way to build and extend features in your applications.

          If we were to implement the mouse tracking functionality using the Composition API directly inside a component, it would look like this:

          `,
          code1: `//--------- AppComposable.vue -------
          &lt;template&gt;
    &lt;div&gt;
        &lt;p&gt;{{ count }}&lt;/p&gt;
        &lt;button @click=&quot;increment&quot;&gt;Increment &lt;/button&gt;
        &lt;button @click=&quot;decrement&quot;&gt;Decrement &lt;/button&gt;

        &lt;br /&gt;

        &lt;p&gt;{{ timer }}&lt;/p&gt;
        &lt;button @click=&quot;start&quot;&gt;start &lt;/button&gt;
        &lt;button @click=&quot;stop&quot;&gt;stop &lt;/button&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot;&gt;
import { defineComponent } from &#39;vue&#39;;
import { useCounter } from &#39;./useCounter&#39;;
import { useTimer } from &#39;@/components/composable/useTimer&#39;

export default defineComponent({
    setup() {
        const { count, increment, decrement } = useCounter()
        const { timer, start, stop } = useTimer()
        return { count, increment, decrement, timer, start, stop }
    }
})
&lt;/script&gt;


//-------- useCounter.js -----
import { ref } from "vue";
export function useCounter() {
    const count = ref(0)
    const increment = () => {
        count.value++
    }
    const decrement = () => {
        count.value--
    }
    return { count, increment, decrement }
}


//------- useTimer.ts ---------
import { ref } from "vue";

export function useTimer() {
    const timer = ref(0)
    let timerId: ReturnType<typeof setInterval> | null = null;
    // let timerId = null // without typescript 
    const start = () => {
        if (timerId === null) {
            timerId = setInterval(() => {
                timer.value++
            }, 1000)
        }
    }
    const stop = () => {
        if (timerId !== null) {
            clearInterval(timerId)
            timerId = null
        }

    }
    return { timer, start, stop }
}

          
          //-----------------------
          &lt;script setup&gt;
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)

function update(event) {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))
&lt;/script&gt;

&lt;template&gt;Mouse position is at: {{ x }}, {{ y }}&lt;/template&gt;`
        },
        {
          text1: `But what if we want to reuse the same logic in multiple components? We can extract the logic into an external file, as a composable function:`,
          code1: `// mouse.js
import { ref, onMounted, onUnmounted } from 'vue'

// by convention, composable function names start with "use"
export function useMouse() {
  // state encapsulated and managed by the composable
  const x = ref(0)
  const y = ref(0)

  // a composable can update its managed state over time.
  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  // a composable can also hook into its owner component's
  // lifecycle to setup and teardown side effects.
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  // expose managed state as return value
  return { x, y }
}

&lt;script setup&gt;
import { useMouse } from './mouse.js'

const { x, y } = useMouse()
&lt;/script&gt;

&lt;template&gt;Mouse position is at: {{ x }}, {{ y }}&lt;/template&gt;
`
        },
        {
          text1: `<b>Practical Use Cases</b>

    <b>Debugging</b>:
    When debugging Vue applications, you might need to confirm whether certain reactive objects are readonly. This helps ensure that your application respects immutability constraints.
    
    <b>Enforcing Immutability</b>:
In scenarios where you want to ensure that data is not modified, <b>isReadonly</b> can be used to verify the immutability of objects.
    `,
          code1: `// ** Debugging: **
          import { readonly, isReadonly } from 'vue';

const data = readonly({
  name: 'Vue 3'
});

function debugObject(obj) {
  if (isReadonly(obj)) {
    console.log('The object is readonly.');
  } else {
    console.log('The object is not readonly.');
  }
}

debugObject(data); // Logs: The object is readonly.

//------------------

//** Enforcing Immutability: **
import { readonly, isReadonly } from 'vue';

function modifyData(data) {
  if (isReadonly(data)) {
    console.warn('Data is readonly and cannot be modified.');
    return;
  }
  // Safe to modify data
}

const readonlyData = readonly({ count: 1 });
const writableData = { count: 1 };

modifyData(readonlyData); // Logs: Data is readonly and cannot be modified.
modifyData(writableData); // No warning

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
      title: "setup() hook",
      note: [
        {
          text1: `The setup() hook serves as the entry point for Composition API usage in components in the following cases:

Using Composition API without a build step;
Integrating with Composition-API-based code in an Options API component.
Note

<b>Note:</b>
If you are using Composition API with Single-File Components, &lt;script setup&gt; is strongly recommended for a more succinct and ergonomic syntax.

<b>what is Composition API: setup() in vue3</b>

In Vue 3, the Composition API is a new way to manage component logic and state. It provides a more flexible and reusable approach compared to the Options API, which is the traditional method used in Vue 2. One of the key features of the Composition API is the setup() function.

<b>What is the setup() Function?</b>
The setup() function is the entry point of the Composition API in a Vue component. It is called before the component is created, and it serves as a place to declare reactive state, computed properties, methods, and other component logic.
Key Points of setup()

    <b>Declaration: setup() </b>is where you declare reactive state using the <b>ref() and reactive()</b> functions, as well as computed properties using <b>computed()</b>. You also define functions and other logic here.

    The setup function is called before the component is created and serves as the entry point for using Composition API features. It is used to <b>define reactive state, computed properties, and methods</b> in a Vue component. The setup function replaces some of the options defined in the Options API, <b>such as data, methods, computed, and watch</b>.

    <b>Parameters</b> : It takes two arguments:
        <b>props</b> : The component's props. This allows you to access the props passed to the component.
        <b>context</b> : An object that contains <b>attrs, slots, and emit</b>. This is useful for accessing the context of the component, such as emitting events or accessing slots.

    <b>Return Value</b>: The <b>setup()</b> function must return an object. The properties and methods of this object become available in the template and can be used just like <b>data and methods in the Options API</b>.

We can declare reactive state using Reactivity APIs and expose them to the template by returning an object from <b>setup()</b>. The properties on the returned object will also be made available on the component instance (if other options are used):

<a href="https://vuejs.org/api/reactivity-core.html#ref" target="_blank">refs</a> returned from <b>setup</b> are <a href="https://vuejs.org/guide/essentials/reactivity-fundamentals.html#deep-reactivity" target="_blank">automatically shallow unwrapped</a> when accessed in the template so you do not need to use <b>.value</b> when accessing them. They are also unwrapped in the same way when accessed on <b>this</b>.

<b>setup()</b> itself does not have access to the component instance - <b>this</b> will have a value of <b>undefined</b> inside <b>setup()</b>. You can access Composition-API-exposed values from Options API, but not the other way around.

<b>setup()</b> should return an object synchronously. The only case when <b>async setup()</b> can be used is when the component is a descendant of a <a href="">Suspense</a> component.
`,
          code1: `&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;{{ message }}&lt;/p&gt;
    &lt;p&gt;{{ evenOddMessage }}&lt;/p&gt;
    &lt;button @click=&quot;increment&quot;&gt;Increment&lt;/button&gt;
    &lt;button @click=&quot;decrement&quot;&gt;Decrement&lt;/button&gt;
    &lt;p&gt;Count: {{ count }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, computed } from 'vue';

export default {
  setup() {
    // Define reactive state
    const count = ref(0);

    // console.log(this) // undefined

    // Define a computed property
    const message = computed(() => {
      return count.value > 0 ? 'Count is positive' : 'Count is zero or negative';
    });
    const evenOddMessage = computed(() => {
      return count.value % 2 === 0 ? 'Count is Even' : 'Count is odd';
    });

    // Define methods
    const increment = () => {
      count.value++;
    };
    const decrement = () => {
      count.value--;
    };

    // Return state and methods to the template
    return {
      count,
      message,
      evenOddMessage,
      increment,
      decrement
    };
  }
};
&lt;/script&gt;
`
        },
        {
          text1: `<b>Key Points on above code </b>
<b>Reactive State</b>: Use ref to create reactive variables. Unlike data in the Options API, reactive state in setup is managed through ref or reactive. For example, const count = ref(0); creates a reactive count variable.

<b>Computed Properties</b>: Use computed to create reactive, derived values that automatically update when their dependencies change. For example, const message = computed(() => count.value > 0 ? 'Count is positive' </b>: 'Count is zero or negative');.

<b>Methods</b>: Define methods as regular functions inside setup. These methods can then be returned and used in the template.

<b>Returning Values</b>: The setup function must return an object containing the properties and methods that should be exposed to the template. The returned object can include reactive state, computed properties, methods, and more.

<b>Lifecycle Hooks</b>: If you need to use lifecycle hooks (e.g., onMounted, onUpdated), you import them from vue and call them within setup. 

<b>Composition API</b>: One of the main advantages of the setup function is that it allows for better code organization and reuse. You can extract logic into composable functions that can be reused across different components.`,
          code1: ``
        },
        {
          text1: `In Vue 3's Composition API, the setup function can accept two arguments: <b>props</b> and <b>context</b>. Understanding these arguments is crucial for effectively utilizing the setup function. Here's a detailed explanation with examples:

          <span style="color:green"><b>Arguments of setup</b></span>
<b><span style="color:red">props</span>:</b>
<b>Type</b>: Object
<b>Purpose</b>: Contains the props passed to the component from the parent. These props are reactive and can be accessed directly.

<b><span style="color:red">context</span></b>:
<b>Type</b>: Object
<b>Purpose</b>: Provides additional properties related to the component instance. It includes:
<b>attrs</b>: Contains the attributes (non-prop attributes) passed to the component.
<b>slots</b>: Provides access to the component's slots.
<b>emit</b>: A function to emit events from the component.
Example Using setup with props and context
          
          The first argument in the <b>setup</b> function is the <b>props</b> argument. Just as you would expect in a standard component, <b>props</b> inside of a <b>setup</b> function are reactive and will be updated when new props are passed in.
          
          Note that if you destructure the <b>props</b> object, the destructured variables will lose reactivity. It is therefore recommended to always access props in the form of <b>props.xxx</b>.

If you really need to destructure the props, or need to pass a prop into an external function while retaining reactivity, you can do so with the <a href="">toRefs()</a> and <a href="">toRef()</a> utility APIs:

<b>Why Destructuring Props is Problematic</b>
When you destructure <b>props</b> in the <b>setup</b> function, you create regular JavaScript variables. These variables are not reactive, meaning they do not automatically update when the <b>props</b> object changes. Here's a clear explanation:

<b>Reactive System:</b>
-> Vue's reactivity system is designed to keep the UI in sync with the underlying data. When you use <b>props</b> directly, Vue ensures that any changes to the props from the parent component are automatically reflected in the child component.
-> For example, if a parent component updates a prop, the child component receives the new value and updates accordingly.

<b>Destructuring Issue:</b>
-> When you destructure <b>props</b>, you extract values into local variables. These local variables are not reactive. They are simple JavaScript values that do not track changes in the original <b>props</b> object.
-> As a result, if the parent component updates the prop, the destructured variables in the <b>setup</b> function will not automatically reflect this change.
          `,
          code1: `export default {
  props: {
    title: String
  },
  setup(props) {
    console.log(props.title)
  }
}

//-----------  
Ex : 1
  import { toRefs, toRef } from 'vue'

export default {
  setup(props) {
    // turn \`props\` into an object of refs, then destructure
    const { title } = toRefs(props)
    // \`title\` is a ref that tracks \`props.title\`
    console.log(title.value)

    // OR, turn a single property on \`props\` into a ref
    const title = toRef(props, 'title')
  }
}

//------------
Ex : 2
// HelloWorld.vue
&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;{{ title }}&lt;/h1&gt;
    &lt;button @click=&quot;changeTitle&quot;&gt;Change Title&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {

    // Computed property for the title
    // const title = computed(() => props.title);
    const { title } = props; // These local variables are not reactive.  do not track changes in the original props object. When we apply Destructuring

    // Method to emit the new title to the parent
    const changeTitle = () => {
      // Emit an event to request a title change
      emit('update-title', 'New Title');
    };

    return {
      title,
      changeTitle
    };
  }
});
&lt;/script&gt;

// App.vue
&lt;script&gt;
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
export default {
  components: { HelloWorld },
  setup() {
    // State for the title
    const title = ref('Initial Title');

    // Method to handle title updates from the child
    const handleUpdateTitle = (newTitle) => {
      title.value = newTitle;
    };

    return {
      title,
      handleUpdateTitle
    };
  }
};
&lt;/script&gt;

&lt;template&gt;
  &lt;header&gt;
    &lt;div class=&quot;wrapper&quot;&gt;
      &lt;HelloWorld :title=&quot;title&quot; @update-title=&quot;handleUpdateTitle&quot; /&gt;
    &lt;/div&gt;
  &lt;/header&gt;
&lt;/template&gt;
          `
        },
        {
          text1: `<b>Setup Context (second argument)</b>
          The second argument passed to the <b>setup</b> function is a <b>Setup Context</b> object. The context object exposes other values that may be useful inside <b>setup</b>:
          <span style="color:red">The context object is not reactive and can be safely destructured:</span>

          <b>attrs</b> and <b>slots</b> are stateful objects that are always updated when the component itself is updated. This means you should avoid destructuring them and always reference properties as <b>attrs.x</b> or <b>slots.x</b>. Also note that, unlike <b>props</b>, the properties of <b>attrs</b> and <b>slots</b> are not reactive. If you intend to apply side effects based on changes to attrs or slots, you should do so inside an <b>onBeforeUpdate</b> lifecycle hook.
          
          <b><span style="color:red">context:</span></b>
<b>Type</b>: Object
<b>Purpose</b>: Provides additional properties related to the component instance. It includes</b>:
<b>attrs</b>: Contains the attributes (non-prop attributes) passed to the component.
<b>slots</b>: Provides access to the component's slots.
<b>emit</b>: A function to emit events from the component.
`,
          code1: `export default {
  setup(props, context) {
    // Attributes (Non-reactive object, equivalent to $attrs)
    console.log(context.attrs)

    // Slots (Non-reactive object, equivalent to $slots)
    console.log(context.slots)

    // Emit events (Function, equivalent to $emit)
    console.log(context.emit)

    // Expose public properties (Function)
    console.log(context.expose)
  }
}
// The context object is not reactive and can be safely destructured:

export default {
  setup(props, { attrs, slots, emit, expose }) {
    ...
  }
}
  
// Ex : 1
// Parent.vue
&lt;script&gt;
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
export default {
  components: { HelloWorld },
  setup() {
    const title = 'Hello World';
    const count = ref(0);
    const updatedCount = ref(0);

    const handleUpdate = (newCount) => {
      updatedCount.value = newCount;
    };

    return {
      title,
      count,
      updatedCount,
      handleUpdate
    };
  }
};
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;HelloWorld
      :title=&quot;title&quot;
      :initialCount=&quot;count&quot;
      @update=&quot;handleUpdate&quot;
    &gt;
      &lt;template #footer&gt;
        &lt;p&gt;This is the footer slot Parent content&lt;/p&gt;
      &lt;/template&gt;
    &lt;/HelloWorld&gt;
    &lt;p&gt;Updated count from child In parent: {{ updatedCount }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

`
        },
        {
          text1: `<b>Explanation above Example</b>:

<b>Child Component</b>:
<b>Event Emission</b>: The handleClick method in the child component increments the count and emits an update event with the new count value.
<b>Event Name</b>: The event name is 'update'.

<b>Parent Component</b>:
<b>Event Listener</b>: The parent component listens for the update event on the ChildComponent with @update="handleUpdate".
<b>Event Handler</b>: The handleUpdate method updates the updatedCount with the new count value received from the child component.
<b>Slot Content</b>: The parent component also provides slot content (footer) to the child component.`,
          code1: ``
        },
        {
          text1: `<b><span style="color:red"> Usage with Render Functions</span></b>
          <b>setup</b> can also return a render function which can directly make use of the reactive state declared in the same scope:

In Vue 3, the render function provides an alternative to using templates for defining the structure of a component's UI. Using a render function allows you to programmatically construct the virtual DOM, which can be useful for more dynamic and complex rendering scenarios.

    <b>Key Concepts</b>
    <b>Render Function</b>: A function that returns a virtual DOM tree. It uses the h function <b>(hyperscript)</b> to create and describe the structure of the component's output.

    <b>setup() Function</b>: In Vue 3, the <b>setup()</b> function is part of the Composition API. It's where you define reactive state, methods, and other logic for the component.

    <b>"h" Function</b>: This function is provided by Vue to create virtual DOM nodes. It stands for <b>hyperscript</b> and is used within the render function to generate the component's UI.

<b>Syntax of a Render Function</b>
The render function returns virtual DOM nodes created using the <b>h</b> function. The general syntax for the <b>h</b> function is:

<b><span style="color:red"> h(tag, props, children) </span></b>

    <b>tag</b>: The HTML tag name or Vue component to render <b>(e.g., 'div', 'button', or a component like MyComponent)</b>.
    <b>props</b>: An object representing attributes, event listeners, and other properties.
    <b>children</b>: (Optional) An array or a single virtual DOM node that represents the children of the element (e.g., text content or nested elements).
          `,
          code1: `import { h, ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    return () => h('div', count.value)
  }
}
//-----------

// Parent.vue
&lt;template&gt;
  &lt;div&gt;
    &lt;HelloWorld /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import HelloWorld from './components/HelloWorld.vue'; 

export default {
  components: {
    HelloWorld
  }
}
&lt;/script&gt;

//HelloWorld.vue
&lt;script&gt;
import { ref, h } from 'vue';

export default {
  setup() {
    // Define reactive state
    const count = ref(0);

    // Define a method to increment the count
    function increment() {
      count.value++;
    }

    // Return a render function
    return () =>
      h('div', [
        h('button', { onClick: increment }, 'Increment'),
        h('p', \`Count: \${count.value}\`)
      ]);
  }
}
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
      title: "Vue 3: Composition API + Vue Router",
      note: [
        {
          text1: `<b>Key Concepts for Vue 2 with Vue Router</b>:
    <b>Vue.use(Router)</b>: This is used to install the Vue Router plugin globally.

    <b>Vue</b>: This is the Vue constructor function.
<b>use()</b>: The use() method is a built-in Vue method for installing plugins into Vue. This method modifies the Vue instance by adding new features or global configurations.
<b>Router</b>: This is the Vue Router instance you created by importing <b>vue-router</b>. When you pass <b>Router</b> to <b>Vue.use()</b>, Vue Router's features (such as routing, navigation, etc.) are installed and globally available in your app.

// 4. Define some routes
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
];

// 5. Create a Router instance
const router = new Router({
  routes,  // Define the routing table
});

    <b>&lt;router-link&gt;</b>: A component used to create navigation links. It works like an anchor tag but without refreshing the page.
    <b>&lt;router-view&gt;</b>: A placeholder where the routed component will be displayed.`,
          code1: `<b>Install the Vue 3 Router from the Command Line</b>
$ npm i vue-router@next

//--------  router/index.js  -----
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
export default router;



//--------- main.js (Vue 3) ---------
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router

createApp(App)
  .use(router) // Use the router in the app
  .mount('#app');
`
        }
      ]
    },
    {
      id: 1,
      section: `Reactivity: Core`,
      title: "ref()",
      note: [
        {
          text1: `In Vue 3, ref() is a fundamental function provided by the Vue Composition API. It allows you to create reactive data, which means that Vue will track changes to this data and update the DOM accordingly when the data changes.

<b>What is ref()?</b>
<b>Purpose: ref() </b> is used to create a reactive reference to a value. This is part of Vue's Composition API, which provides a more flexible and modular approach to managing state and logic in Vue components.
<b>Usage</b>: It wraps a value in a reactive object so that Vue can track changes to this value and automatically re-render components when it changes.

Takes an inner value and returns a reactive and mutable ref object, which has a single property .value that points to the inner value.

* Details *
-> The ref object is mutable - i.e. you can assign new values to <b>.value</b>. It is also reactive - i.e. any read operations to <b>.value</b> are tracked, and write operations will trigger associated effects.
-> If an object is assigned as a ref's value, the object is made deeply reactive with <a href="#">reactive()</a>. This also means if the object contains nested refs, they will be deeply unwrapped.
-> To avoid the deep conversion, use <a href="#">shallowRef()</a> instead.
`,
          code1: `&lt;template&gt;
  &lt;div&gt;
    &lt;button @click=&quot;increment&quot;&gt;Increment&lt;/button&gt;
    &lt;p&gt;Count: {{ count }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref } from 'vue';

export default {
  setup() {
    // Create a reactive reference to a number
    const count = ref(0);

    // Function to increment the count
    const increment = () => {
      count.value++;
    };

    // The returned object is used in the template
    return {
      count,
      increment
    };
  }
};

&lt;/script&gt;
`
        },
        {
          text1: `<b>Key Points</b>
<b>Creating a Ref</b>: When you call ref(initialValue), Vue creates a reactive object with a property value that holds the initial value. This is necessary because Vue's reactivity system needs to be able to track changes to the value.
<b>Accessing and Mutating Values</b>: To access or mutate the value inside a ref, you use the .value property. 
<b>Reactivity</b>: When the value inside a ref changes, Vue automatically re-renders the parts of the component that depend on this value. This reactivity is key to making Vue applications dynamic and responsive.
<b>In Templates</b>: In Vue templates, you don't need to use <b>.value</b> to access the ref's value. Vue handles this automatically for you
<b>Ref vs. Reactive</b>: While ref() is great for individual values, Vue 3 also provides reactive() for creating reactive objects. reactive() is more suited for working with objects and arrays. For simple values like numbers, strings, and booleans, ref() is often the best choice.

<b>When to Use ref()</b>
-> When you need a reactive reference to a primitive value or a single value.
-> When you are dealing with reactivity in a composition API setup.
`,
          code1: ` // use .value property to access or mutate values
          console.log(count.value); // Access the value
count.value = 5;         // Update the value

// need to use '.value' to access the ref's value in 'template'
&lt;template&gt;
  &lt;p&gt;{{ count }}&lt;/p&gt;
  &lt;button @click=&quot;increment&quot;&gt;Increment&lt;/button&gt;
&lt;/template&gt;
`
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
      title: "computed()",
      note: [
        {
          text1: `Takes a <a href="./javascript-notes.html#getter%20and%20setter">getter function</a> and returns a readonly reactive ref object for the returned value from the getter. It can also take an object with <b>get</b> and <b>set</b> functions to create a writable ref object.

          In Vue 3, computed is a powerful function from the Composition API that allows you to create reactive computed properties. Computed properties are derived values that are automatically recalculated when their dependencies change. They are similar to computed properties in Vue 2 but are used in the context of the Composition API.

          In Vue 3, computed is a powerful function from the Composition API that allows you to create reactive computed properties. Computed properties are derived values that are automatically recalculated when their dependencies change. They are similar to computed properties in Vue 2 but are used in the context of the Composition API

<b>What is computed()?</b>
    <b>Purpose</b>: To define reactive properties that depend on other reactive state or properties. They are automatically updated when any of their dependencies change.
    <b>Usage</b>: Used to create values that are computed based on reactive data and can be used in the template or other parts of your component.

<b>Key Features</b>
    <b>Automatic Recalculation</b>: Computed properties automatically recalculate when their dependencies change, reducing the need for manual updates.
    <b>Caching</b>: Computed properties are cached based on their dependencies. They are only recalculated when their dependencies change, which improves performance

          `,
          code1: `// Syntax:
          import { computed } from 'vue';

const computedProperty = computed(() => {
  // Computed value logic
});
//-------------
          
          //Creating a readonly computed ref:
const count = ref(1)
const plusOne = computed(() => count.value + 1)
console.log(plusOne.value) // 2
plusOne.value++ // error

//-----------
// Creating a writable computed ref:

const count = ref(1)
const plusOne = computed({
  get: () => count.value + 1,
  set: (val) => {
    count.value = val - 1
  }
})

plusOne.value = 1
console.log(count.value) // 0
`
        },
        {
          text1: `<b>Advanced Usage</b>
          <b>Read-Only Computed Properties</b>:
By default, computed properties are read-only. To create a writable computed property, use the get and set functions

<b>Computed Properties with Dependencies</b>:
Computed properties can depend on multiple reactive properties. They will recalculate if any of their dependencies change
A writable computed property allows you to define both how the value is computed <b>(get)</b> and how it should be updated <b>(set)</b>. This can be particularly useful when you want a computed property to act like a two-way binding, where changing the computed value will update the underlying reactive state.
          `,
          code1: `// Syntax:
          import { computed, ref } from 'vue';

const myState = ref('initial value');

const myComputed = computed({
  get() {
    return myState.value;
  },
  set(newValue) {
    myState.value = newValue;
  }
});

Ex : 
&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;Full Name: {{ fullName }}&lt;/p&gt;
    &lt;input v-model=&quot;tempFullName&quot; placeholder=&quot;Enter full name&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const tempFullName = ref('');

    const fullName = computed({
      get() {
        return \`\${firstName.value} \${lastName.value}\`.trim();
      },
      set(newValue) {
        const [first, ...rest] = newValue.trim().split(' ');
        firstName.value = first || '';
        lastName.value = rest.join(' ') || '';
      }
    });

    // Watch for changes in tempFullName and update fullName accordingly (for matching to typing speed with computed property)
    watch(tempFullName, (newValue) => {
      fullName.value = newValue;
    });

    // Watch for changes in fullName and update tempFullName accordingly (for matching to typing speed with computed property)
    watch(fullName, (newValue) => {
      tempFullName.value = newValue;
    });

    return {
      firstName,
      lastName,
      fullName,
      tempFullName
    };
  }
}
&lt;/script&gt;

//-----------
Ex : 2

&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;Full Name: {{ fullName }}&lt;/p&gt;
    &lt;input v-model=&quot;fullName&quot; placeholder=&quot;Enter full name&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, computed } from 'vue';

export default {
  setup() {
    const firstName = ref('');
    const lastName = ref('');

    // Define a computed property for fullName
    const fullName = computed({
      get() {
        return \`\${firstName.value} \${lastName.value}\`.trim();
      },
      set(newValue) {
        const [first, ...rest] = newValue.trim().split(' ');
        firstName.value = first || '';
        lastName.value = rest.join(' ') || '';
      }
    });

    // Update fullName when firstName or lastName changes
    computed(() => {
      fullName.value = \`\${firstName.value} \${lastName.value}\`.trim();
    });

    return {
      firstName,
      lastName,
      fullName
    };
  }
}
&lt;/script&gt;

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
      title: "reactive()",
      note: [
        {
          text1: `Returns a reactive proxy of the object
          Type:
function reactive<T extends object>(target: T): UnwrapNestedRefs<T>

The reactive conversion is <b>deep</b>: it affects all nested properties. A reactive object also deeply unwraps any properties that are refs while maintaining reactivity.

It should also be noted that there is no ref unwrapping performed when the ref is accessed as an element of a reactive array or a native collection type like <b>Map</b>.

To avoid the deep conversion and only retain reactivity at the root level, use <a href="">shallowReactive()</a> instead.

The returned object and its nested objects are wrapped with <a href="">ES Proxy</a> and not equal to the original objects. It is recommended to work exclusively with the reactive proxy and avoid relying on the original object.
          `,
          code1: `Example
// Creating a reactive object:
const obj = reactive({ count: 0 })
obj.count++
//----------

// Ref unwrapping:
const count = ref(1)
const obj = reactive({ count })

// ref will be unwrapped
console.log(obj.count === count.value) // true

// it will update \`obj.count\`
count.value++
console.log(count.value) // 2
console.log(obj.count) // 2

// it will also update \`count\` ref
obj.count++
console.log(obj.count) // 3
console.log(count.value) // 3
//----------

// Note that refs are not unwrapped when accessed as array or collection elements:
const books = reactive([ref('Vue 3 Guide')])
// need .value here
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
// need .value here
console.log(map.get('count').value)
//----------

// When assigning a 'ref' to a 'reactive' property, that ref will also be automatically unwrapped:
const count = ref(1)
const obj = reactive({})

obj.count = count
console.log(obj.count) // 1
console.log(obj.count === count.value) // true
`
        },
        {
          text1: `<b>What is reactive()?</b>

<b>reactive()</b> is a function provided by Vue's Composition API that wraps an object in a reactive proxy. This proxy tracks the changes to the object's properties and updates the DOM or computed properties accordingly when changes occur.

<b>How reactive() Works</b>
    <b>Initialization</b>: You pass an object to <b>reactive()</b>, and it returns a new reactive object that Vue will track.
    <b>Tracking Changes</b>: Vue's reactivity system tracks changes to this object and triggers updates to any parts of the UI that depend on this object.
    <b>Nested Reactivity</b>: If the object contains other objects or arrays, Vue will also make these nested properties reactive.`,
          code1: `&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;{{ state.message }}&lt;/p&gt;
    &lt;p&gt;{{ state.items }}&lt;/p&gt;
    &lt;button @click=&quot;updateMessage&quot;&gt;Change Message&lt;/button&gt;
    &lt;button @click=&quot;addItem&quot;&gt;Add Item&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { reactive } from 'vue';

export default {
  setup() {
    // Define a reactive object with nested data
    const state = reactive({
      message: 'Hello, Vue 3!',
      items: [1, 2, 3]
    });

    const updateMessage = () => {
      state.message = 'Hello, Vue 3 with Reactive!';
    };

    const addItem = () => {
      state.items.push(state.items.length + 1);
    };

    return {
      state,
      updateMessage,
      addItem
    };
  }
}
&lt;/script&gt;
`
        },
        {
          text1: `<b>Key Points</b>:

    <b>1) Creating Reactivity</b>:
        reactive() is used to create a reactive object. For instance, const state = reactive({ message: 'Hello' }); creates a reactive state object.

    <b>2) Automatic Dependency Tracking</b>:
        Vue tracks dependencies automatically. When state.message changes, Vue updates the DOM where state.message is used.

    <b>3) Nested Reactivity</b>:
        Vue also makes nested objects or arrays reactive. For example, if state contains an array or another object, changes to those nested properties are also tracked.

    <b>4) Usage in Components</b>:
        In the setup function of a Vue component, you can define and return reactive objects that you can use in the template and other methods.
        
        <span style="color:red">Reactive System Internals</span>

Vue 3 uses <b>Proxy objects</b> to implement its reactivity system. The reactive() function creates a Proxy for the provided object. The Proxy intercepts operations such as property access and assignment, allowing Vue to track changes and trigger updates efficiently.
Limitations and Considerations

    <b>Immutable Properties</b>: Vue's reactivity system works best with mutable data. If you replace the entire object with a new one, Vue won't track this change. Instead, you should update properties of the existing object.
    <b>Performance</b>: While Vue's reactivity system is efficient, creating very deep or large reactive objects might impact performance. Use reactive() judiciously and consider Vue's best practices for performance optimization.
    <b>Non-Primitive Values</b>: Vue's <b>reactive()</b> is used for objects and arrays. For primitive values (strings, numbers, booleans), you would typically use <b>ref()</b>.

<b>Comparison with ref()</b>:-
    <b>ref()</b>: Creates a reactive reference for primitive values and objects. Use <b>ref()</b> when you need a reactive reference to a single value or a more straightforward way to handle reactivity with primitives.
    <b>reactive()</b>: Creates a deep reactive object for complex data structures. Use <b>reactive()</b> when you need to manage and track changes in objects and arrays.

     <span style="color:red"><b>reactive() and Non-Primitives</b></span>

<b>reactive()</b> is specifically designed for making complex data structures reactive. These include:
<span style="color:red">
    Objects: { key: 'value' }
    Arrays: [1, 2, 3]
    Nested Data Structures: </span> Objects containing other objects or arrays

Primitive Values and reactive()

Primitive values like strings, numbers, and booleans are not directly handled by reactive(). Instead, Vue provides a different mechanism for managing reactivity with primitives:

    <b>ref()</b>: This is used for creating a reactive reference to a single value, whether that value is a primitive (like a string or number) or an object.
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
      title: "readonly()",
      note: [
        {
          text1: `Takes an object (reactive or plain) or a ref and returns a readonly proxy to the original.
          
          A readonly proxy is deep: any nested property accessed will be readonly as well. It also has the same ref-unwrapping behavior as <b>reactive()</b>, except the unwrapped values will also be made readonly.

To avoid the deep conversion, use <a>shallowReadonly()</a> instead.

In Vue 3, readonly() is a function from the Composition API that creates a read-only reactive proxy of an object. This means that the object cannot be modified through the proxy; any attempts to change it will be ignored or will trigger warnings in development mode. readonly() is particularly useful for exposing a reactive state to child components or external code while ensuring that the state remains immutable.

<b>How readonly() Works</b>
    <b>Immutability</b>: readonly() provides a way to expose a reactive object without allowing modifications. This is useful for creating immutable data sources.
    <b>Reactive Proxy</b>: The object wrapped by readonly() remains reactive, meaning that its properties will still trigger reactivity updates in Vue's system. However, you cannot change the object's properties through this proxy.
          `,
          code1: `function readonly<T extends object>(
  target: T
): DeepReadonly<UnwrapNestedRefs<T>>
//------------

const original = reactive({ count: 0 })

const copy = readonly(original)

watchEffect(() => {
  // works for reactivity tracking
  console.log(copy.count)
})

// mutating original will trigger watchers relying on the copy
original.count++

// mutating the copy will fail and result in a warning
copy.count++ // warning!

//----------------------


&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;Message: {{ readOnlyState.message }}&lt;/p&gt;
    &lt;button @click=&quot;changeMessage&quot;&gt;Try to Change Message&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { reactive, readonly } from 'vue';

export default {
  setup() {
    // Define a reactive object
    const state = reactive({
      message: 'Hello, Vue 3!'
    });

    // Create a read-only version of the state
    const readOnlyState = readonly(state);

    const changeMessage = () => {
      readOnlyState.value = 'hi'
      // Attempting to modify readOnlyState.message will not work
      // readOnlyState.message = 'This will not work!';
      console.log('Attempt to modify readOnlyState.message');
    };

    return {
      readOnlyState,
      changeMessage
    };
  }
}
&lt;/script&gt;

`
        },
        {
          text1: `<b>Key Points</b>:

    <b>Creating a Read-Only Proxy</b>:
        <span style="color:red">const readOnlyState = readonly(state);</span> creates a read-only proxy of the state object.

    <b>Immutability</b>:
        Modifications to <b>readOnlyState</b> are not allowed. For instance, trying to update <b>readOnlyState.message</b> will fail silently, or in development mode, Vue will log a warning to the console.

    <b>Reactivity</b>:
        The object wrapped by <b>readonly()</b> is still reactive. If <b>state.message</b> changes (if modified directly on the <b>state</b> object), any component that depends on <b>readOnlyState.message</b> will update accordingly.

    <b>Use Case</b>:
        <b>readonly()</b> is typically used when you want to expose a reactive state to child components or other parts of your application but do not want those parts to alter the state.`,
          code1: ` // ParentComponent.vue
          &lt;template&gt;
  &lt;div&gt;
    &lt;HelloWorld :data=&quot;readOnlyData&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { reactive, readonly } from 'vue';
import HelloWorld from './components/HelloWorld.vue'; 

export default {
  components: { HelloWorld },
  setup() {
    const state = reactive({
      message: 'Hello from Parent!'
    });

    // Expose a read-only version of the state to child components
    const readOnlyData = readonly(state);

    return {
      readOnlyData
    };
  }
}
&lt;/script&gt;

//ChildComponent.vue
&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;Message: {{ data.message }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  props: {
    data: Object
  }
}
&lt;/script&gt;`
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
      title: "watchEffect()",
      note: [
        {
          text1: `Runs a function immediately while reactively tracking its dependencies and re-runs it whenever the dependencies are changed. The first argument is the effect function to be run. The effect function receives a function that can be used to register a cleanup callback. The cleanup callback will be called right before the next time the effect is re-run, and can be used to clean up invalidated side effects, e.g. a pending async request (see example below).

The second argument is an optional options object that can be used to adjust the effect's flush timing or to debug the effect's dependencies.

By default, watchers will run just prior to component rendering. Setting <b>flush: 'post'</b> will defer the watcher until after component rendering. See <a href="https://vuejs.org/guide/essentials/watchers.html#callback-flush-timing">Callback Flush Timing</a> for more information. In rare cases, it might be necessary to trigger a watcher immediately when a reactive dependency changes, e.g. to invalidate a cache. This can be achieved using <b>flush: 'sync'</b>. However, this setting should be used with caution, as it can lead to problems with performance and data consistency if multiple properties are being updated at the same time.

The return value is a handle function that can be called to stop the effect from running again.`,
          code1: `function watchEffect(
  effect: (onCleanup: OnCleanup) => void,
  options?: WatchEffectOptions
): StopHandle

type OnCleanup = (cleanupFn: () => void) => void

interface WatchEffectOptions {
  flush?: 'pre' | 'post' | 'sync' // default: 'pre'
  onTrack?: (event: DebuggerEvent) => void
  onTrigger?: (event: DebuggerEvent) => void
}

type StopHandle = () => void

//-----------------
          
          const count = ref(0)

watchEffect(() => console.log(count.value))
// -> logs 0

count.value++
// -> logs 1
//---------------
// Side effect cleanup:

watchEffect(async (onCleanup) => {
  const { response, cancel } = doAsyncWork(id.value)
  // 'cancel' will be called if 'id' changes
  // so that previous pending request will be cancelled
  // if not yet completed
  onCleanup(cancel)
  data.value = await response
})
//--------------
// Stopping the watcher:

const stop = watchEffect(() => {})

// when the watcher is no longer needed:
stop()
//-------------
// Options:
watchEffect(() => {}, {
  flush: 'post',
  onTrack(e) {
    debugger
  },
  onTrigger(e) {
    debugger
  }
})`
        },
        {
          text1: `<b>Key Points</b>

          <b>1) Automatic Dependency Tracking</b></b>:
          Inside the watchEffect() callback, you can access any reactive properties or computed values. Vue will automatically track these dependencies.
          In the example, message is tracked, and any change to message will cause the callback to re-run.

          <b>2) Immediate Execution</b>:
              The callback function provided to watchEffect() runs immediately after the watchEffect() call is made. This allows for initial side effects to be executed.

          <b>3) No Need to List Dependencies</b>:
              Unlike watch(), you do not need to specify which reactive properties you want to watch. Vue infers dependencies based on the reactive data accessed inside the callback.

          <b>4) Cleanup</b>:
          If you need to perform cleanup tasks (e.g., removing event listeners or stopping timers), you can return a cleanup function from the watchEffect() callback. This function will be called before the effect runs again and when the component is unmounted.
          
          <b>5) Use Cases</b>:
    <b>Side Effects</b>: watchEffect() is ideal for scenarios where you need to react to changes in reactive data by performing side effects, such as logging, API calls, or DOM manipulations.
    <b>Reactive Computations</b>: If you want to compute values based on reactive data and perform actions based on these computations, watchEffect() can be very useful.

    <b>Comparison with watch()</b>
    <b>watch()</b>: Requires specifying which reactive properties to watch. Provides more fine-grained control over which changes trigger the watcher and allows for old and new values to be compared.
    <b>watchEffect()</b>: Automatically tracks dependencies and is simpler to use when you don't need the fine-grained control provided by <b>watch()</b>.

   <b>watchEffect</b>
Unlike watch, watchEffect does not require you to specify the data that you're watching. Instead, it automatically tracks any reactive dependencies used inside it and re-runs the code whenever any of those dependencies change. We can rewrite the above example with the following syntax:
    `,
          code1: `// Oprion API
          &lt;template&gt;
  &lt;main&gt;
    {{ product.price }} = {{ product.quantity }} * 10
    &lt;input v-model=&quot;product.quantity&quot; type=&quot;number&quot; /&gt;
  &lt;/main&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot;&gt;
export default {
  name: "ProductComponent",
  data() {
    return {
      product: {
        price: 10,
        quantity: 1
      }
    };
  },
  watch: {
    "product.quantity": {
      handler: function (newVal, oldVal) {
        console.log(typeof newVal)
        this.product.price = newVal * 10;
      }
    }
  }
};
&lt;/script&gt;
          
//------------

// Composition API
&lt;template&gt;
  &lt;main&gt;
    {{ product.price }} = {{ product.quantity }} * 10
    &lt;input v-model=&quot;product.quantity&quot; type=&quot;number&quot; /&gt;
  &lt;/main&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, watchEffect } from 'vue';
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
          text1: `          `,
          code1: `watchEffect(() => {
  const timer = setInterval(() => {
    console.log('Timer running');
  }, 1000);

  // Cleanup function
  return () => clearInterval(timer);
});
          
          
          &lt;template&gt;
  &lt;div&gt;
    &lt;input v-model=&quot;searchTerm&quot; placeholder=&quot;Enter post ID&quot; /&gt;
    &lt;p&gt;Results: {{ results }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, watchEffect, onUnmounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const searchTerm = ref('');
    const results = ref([]);
    let controller = new AbortController();

    // Watch the searchTerm and perform API call whenever it changes
    watchEffect(() => {
      // Cleanup any ongoing request
      if (controller) {
        controller.abort();
      }

      // Create a new AbortController for the new request
      controller = new AbortController();
      const signal = controller.signal;

      // Only make API call if searchTerm is not empty
      if (searchTerm.value.trim()) {
        axios.get(\`https://jsonplaceholder.typicode.com/posts/\${searchTerm.value}\`, {
          signal
        })
        .then(response => {
          results.value = response.data;
        })
        .catch(error => {
          if (error.name === 'CanceledError') {
            console.log('Request was canceled');
          } else {
            console.error('Error fetching data:', error);
          }
        });
      } else {
        results.value = [];
      }
    });

    // Cleanup function to abort any ongoing request when the component is unmounted
    onUnmounted(() => {
      if (controller) {
        controller.abort();
      }
    });

    return {
      searchTerm,
      results
    };
  }
}
&lt;/script&gt;

//-----

// Ex : 2
&lt;template&gt;
  &lt;div&gt;
    &lt;input v-model=&quot;query&quot; placeholder=&quot;Enter query&quot; /&gt;
    &lt;p&gt;Status: {{ status }}&lt;/p&gt;
    &lt;p&gt;Data: {{ data }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, watchEffect } from 'vue';

export default {
  setup() {
    // Reactive variables
    const query = ref('');
    const data = ref(null);
    const status = ref('Idle');

    // Function to fetch data
    const fetchData = async (query, signal) => {
      status.value = 'Loading...';
      try {
        const response = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${query}\`, { signal });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        data.value = result;
        status.value = 'Success';
      } catch (error) {
        if (error.name === 'AbortError') {
          status.value = 'Aborted';
        } else {
          status.value = \`Error: \${error.message}\`;
        }
      }
    };

    watchEffect((onCleanup) => {
      if (query.value) {
        // Create an AbortController instance
        const controller = new AbortController();
        const { signal } = controller;

        // Start the fetch operation
        fetchData(query.value, signal);

        // Register the cleanup function
        onCleanup(() => {
          controller.abort();
        });
      } else {
        // Clear data if query is empty
        data.value = null;
        status.value = 'Idle';
      }
    });

    return {
      query,
      data,
      status,
    };
  }
};
&lt;/script&gt;

//-------
Ex :3

&lt;template&gt;
  &lt;div&gt;
    &lt;input v-model=&quot;query&quot; placeholder=&quot;Enter query&quot; /&gt;
    &lt;p&gt;Status: {{ status }}&lt;/p&gt;
    &lt;p&gt;Data: {{ data }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, watchEffect } from 'vue';

export default {
  setup() {
    const query = ref('');
    const data = ref(null);
    const status = ref('Idle');
    let xhr = null; // Reference to the XMLHttpRequest instance

    // Function to fetch data using XMLHttpRequest
    const fetchData = (query) => {
      status.value = 'Loading...';
      
      // Abort any ongoing request
      if (xhr) {
        xhr.abort();
      }

      // Create a new XMLHttpRequest
      xhr = new XMLHttpRequest();
      xhr.open('GET', \`https://jsonplaceholder.typicode.com/posts/\${query}\`);
      
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          data.value = JSON.parse(xhr.responseText);
          status.value = 'Success';
        } else {
          status.value = \`Error: \${xhr.statusText}\`;
        }
      };
      
      xhr.onerror = () => {
        status.value = \`Error: \${xhr.statusText}\`;
      };
      
      xhr.onabort = () => {
        status.value = 'Aborted';
      };

      xhr.send();
    };

    watchEffect(() => {
      // Perform the fetch operation if query is set
      if (query.value) {
        fetchData(query.value);
      } else {
        // Clear data if query is empty
        data.value = null;
        status.value = 'Idle';
      }
      
      // Cleanup function
      return () => {
        if (xhr) {
          xhr.abort();
        }
      };
    });

    return {
      query,
      data,
      status,
    };
  }
};
&lt;/script&gt;



`
        },
        {
          text1: `AbortController is a built-in JavaScript class used to manage and cancel asynchronous operations, such as HTTP requests, that support the Abort API. It's particularly useful for cleaning up long-running or multiple simultaneous requests, improving resource management, and enhancing user experience by preventing unnecessary work.

<b>Key Features of AbortController</b>
    <b>1) Cancellation</b>:
        -> You can create an <b>AbortController</b> instance, which provides a signal that can be used to cancel ongoing requests or operations.
        -> When you call <b>abort()</b> on the controller, it signals all associated requests to cancel.

    <b>2) Integration with Fetch API</b>:
    The <b>AbortController</b> is commonly used with the Fetch API to cancel HTTP requests.

    <b>3) Promise-Based</b>:
    The <b>AbortController</b> works with promises, allowing you to handle cancellations in a clean and manageable way.

    <b>1) Creating an AbortController</b>:
    <span style="color:red">const controller = new AbortController();</span>
    This creates a new <b>AbortController</b> instance. It has a <b>signal</b> property that is used to communicate with the operation you want to control.

    <b>2) Using the signal</b>:
When initiating an asynchronous operation (like a <b>fetch</b> request), you pass the <b>signal</b> to the options:
<span style="color:red">
const response = fetch('https://example.com', {
  signal: controller.signal
});
</span>

The <b>signal</b> is an instance of <b>AbortSignal</b> associated with the <b>AbortController</b>.

<b>3) Aborting the operation</b>:
To cancel the operation, you call the <b>abort</b> method on the <b>AbortController</b> instance:

<span style="color:red"> controller.abort(); </span>

Once <b>abort</b> is called, any operations that are using the <b>signal</b> will be aborted. For example, with <b>fetch</b>, an abort will result in a rejected promise with an <b>AbortError</b>.

<b>Use Cases:</b>
    <b>Network Requests</b>: Canceling a <b>fetch</b> request if a user navigates away from the page or if a new request is made that renders the old one obsolete.
    <b>Long-Running Tasks</b>: Aborting operations like file uploads or downloads if they are no longer needed.
    <b>UI Interaction</b>: Stopping tasks in response to user interactions, such as clicking a <b>Cancel</b> button.    
    
    //-------------

    <b>Why Use AbortController?</b>
<b>Efficiency</b>: Prevents unnecessary network requests and reduces server load.
<b>User Experience</b>: Improves responsiveness by canceling outdated or duplicate requests.
<b>Control</b>: Provides fine-grained control over request lifecycles, essential in complex applications.

<b>Where to Use AbortController?</b>
<b>Form Submissions</b>: Cancel previous requests when a user submits a new form.
<b>Auto-Save</b>: Cancel ongoing save requests when new data is entered.
<b>Search Functionality</b>: Cancel previous search queries when a new query is initiated.

<b>Understanding AbortController</b>
<b>Constructor</b>
The <b>AbortController</b> constructor creates a new <b>AbortController</b> object, which allows you to control the signal property to abort requests.
<span style="color:red"> const controller = new AbortController(); </span>

<b>Instance Properties</b>
<b>signal</b>
The <b>signal</b> property of an <b>AbortController</b> instance is an <b>AbortSignal</b> object that can be used to communicate with the request and tell it to abort.
<span style="color:red"> const signal = controller.signal; </span>

<b>Instance Methods</b>
<b>abort()</b>
The <b>abort()</b> method of an <b>AbortController</b> instance is used to abort one or more web requests.
<span style="color:red"> controller.abort(); </span>
    `,
          code1: `// Handling aborts:
//You can handle aborts in your code by catching the error:

fetch('https://example.com', { signal: controller.signal })
  .then(response => {
    // Handle response
  })
  .catch(error => {
    if (error.name === 'AbortError') {
      console.log('Fetch request was aborted');
    } else {
      console.error('An error occurred:', error);
    }
  });

// The AbortError is a specific error thrown when the request is aborted.

Ex :

        // Create an instance of AbortController
        const controller = new AbortController();
        const signal = controller.signal;

        // Start an HTTP request with the Fetch API
        fetch('https://jsonplaceholder.typicode.com/posts', { signal })
            .then(response => {
                // Check if the response is OK
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
            })
            .catch(error => {
                // Handle cancellation and other errors
                if (error.name === 'AbortError') {
                    console.log('Request was canceled');
                } else {
                    console.error('Fetch error:', error);
                }
            });

        // Cancel the request
        controller.abort();
`
        },
      ]
    },
    {
      id: 1,
      title: "watchPostEffect()",
      note: [
        {
          text1: `In Vue 3, watchPostEffect is a part of the Composition API that allows you to execute a callback function after the DOM has been updated in response to reactive data changes. It's particularly useful when you need to perform operations that depend on the updated DOM, such as measuring element sizes or interacting with third-party libraries that need to operate on the rendered DOM.
    
    <b>How watchPostEffect Works</b>
    <b>Purpose</b>: It runs a callback after the DOM updates have been applied, which ensures that you are working with the latest rendered state of your components.
    <b>Usage</b>: It is called inside the <b>setup</b> function of a Vue component.
    <b>Behavior</b>: Unlike <b>watchEffect</b>, which runs immediately when reactive dependencies change, <b>watchPostEffect</b> will run after the DOM update cycle, making it suitable for tasks that need to interact with or measure the DOM.
    
    <b>When to Use watchPostEffect</b>
    <b>DOM Measurement</b>: When you need to measure or interact with the DOM after updates.
    <b>Third-Party Libraries</b>: When integrating with libraries that require knowledge of the DOM state after updates.

    <b>Differences from watchEffect</b>
    <b>watchEffect</b> runs synchronously with reactive updates, but it does not guarantee that the DOM has been updated.
    <b>watchPostEffect</b> runs after the DOM updates, making it suitable for tasks that depend on the rendered output.

By using watchPostEffect, you can ensure that your code works with the final state of the DOM, which is crucial for accurate measurements and interactions.
    `,
          code1: `import { watchPostEffect } from 'vue';

export default {
  setup() {
    // Your reactive data and logic here

    watchPostEffect(() => {
      // Code here will run after DOM updates
    });
  }
};

//-----------
// Ex :

&lt;template&gt;
  &lt;div&gt;
    &lt;button @click=&quot;addContent&quot;&gt;Add Content&lt;/button&gt;
    &lt;div class=&quot;container&quot;&gt;
      &lt;div class=&quot;main-content&quot; ref=&quot;mainContentRef&quot;&gt;
        &lt;!-- Main content goes here --&gt;
        &lt;p v-for=&quot;n in contentItems&quot; :key=&quot;n&quot;&gt;Content {{ n }}&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class=&quot;sidebar&quot; ref=&quot;sidebarRef&quot;&gt;
        &lt;!-- Sidebar content goes here --&gt;
        &lt;p&gt;Sidebar&lt;/p&gt;
      &lt;/div&gt;

    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, watchPostEffect, nextTick } from 'vue';

export default {
  setup() {
    const contentItems = ref([1, 2, 3]); // Initial content items
    const mainContentRef = ref(null);
    const sidebarRef = ref(null);

    const addContent = async () => {
      contentItems.value.push(contentItems.value.length + 1);
      // Wait for DOM updates after content change
      await nextTick();
      // Trigger height update
      updateSidebarHeight();
    };

    const updateSidebarHeight = () => {
      if (mainContentRef.value && sidebarRef.value) {
        const mainContentHeight = mainContentRef.value.clientHeight;
        console.log('Updated Main content height:', mainContentHeight); // Debugging
        sidebarRef.value.style.height = \`\${mainContentHeight}px\`;
      }
    };

    // Initial setup: Set sidebar height based on current content
    nextTick().then(updateSidebarHeight);

    // Watch for any changes in the DOM and adjust sidebar height
    watchPostEffect(() => {
      updateSidebarHeight();
    });

    return {
      contentItems,
      mainContentRef,
      sidebarRef,
      addContent
    };
  }
};
&lt;/script&gt;

&lt;style scoped&gt;
.container {
  display: flex;
}

.main-content {
  flex: 1;
}

.sidebar {
  width: 200px;
  background-color: lightgray;
}

button {
  margin-top: 10px;
}
&lt;/style&gt;

`
        }
      ]
    },
    {
      id: 1,
      title: "watchSyncEffect()",
      note: [
        {
          text1: `Alias of <a href="#watchEffect()">watchEffect()</a> with flush: 'sync' option.
          
          In Vue 3, watchSyncEffect is a utility function that was introduced to handle scenarios where you need to synchronize side effects with changes in reactive state. It is part of Vue's Composition API, which provides advanced reactivity and lifecycle management.

          <b>watchSyncEffect Overview</b>
<b>watchSyncEffect</b> is used to perform side effects synchronously in response to reactive state changes. It is designed to handle scenarios where you want to run a function immediately and synchronously after the reactive data changes, ensuring that side effects are applied as soon as possible.
Key Characteristics

    <b>Immediate Execution</b>: Unlike <b>watchPostEffect</b>, which waits until the DOM updates are complete, watchSyncEffect runs the effect synchronously, right after the reactive dependencies have changed.
    <b>Synchronous Side Effects</b>: It is useful for scenarios where side effects need to be applied immediately without waiting for the DOM to update.

<b>How It Works</b>
watchSyncEffect takes a function as its argument. This function is executed synchronously whenever the reactive dependencies change.

<b>Comparison with watchPostEffect and watchEffect</b>
    <b>watchEffect</b>: Runs the effect reactively whenever dependencies change but does not guarantee synchronization with the DOM updates.
    <b>watchSyncEffect</b>: Runs synchronously with reactive state changes, ideal for immediate side effects that do not rely on DOM updates.
          `,
          code1: `&lt;template&gt;
  &lt;div&gt;
    &lt;input v-model=&quot;email&quot; placeholder=&quot;Enter your email&quot; /&gt;
    &lt;p v-if=&quot;isValid === false&quot; style=&quot;color: red;&quot;&gt;Invalid email address&lt;/p&gt;
    &lt;p v-if=&quot;isValid === true&quot; style=&quot;color: green;&quot;&gt;Email address is valid&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, watchSyncEffect } from 'vue';

export default {
  setup() {
    const email = ref('');
    const isValid = ref(null);

    // Function to validate email
    const validateEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };

    // Watch the 'email' reactive reference and validate it synchronously
    watchSyncEffect(() => {
      isValid.value = validateEmail(email.value);
      console.log('Email validation result:', isValid.value); // Debugging
    });

    return {
      email,
      isValid
    };
  }
};
&lt;/script&gt;

&lt;style scoped&gt;
/* Add your styles here */
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
      title: "watch()",
      note: [
        {
          text1: `<b>watch()</b> is lazy by default - i.e. the callback is only called when the watched source has changed.

The first argument is the watcher's source. The source can be one of the following:

A getter function that returns a value
A ref
A reactive object
...or an array of the above.
The second argument is the callback that will be called when the source changes. The callback receives three arguments: the new value, the old value, and a function for registering a side effect cleanup callback. The cleanup callback will be called right before the next time the effect is re-run, and can be used to clean up invalidated side effects, e.g. a pending async request.

When watching multiple sources, the callback receives two arrays containing new / old values corresponding to the source array.

The third optional argument is an options object that supports the following options:

<b>immediate</b>: trigger the callback immediately on watcher creation. Old value will be undefined on the first call.
<b>deep</b>: force deep traversal of the source if it is an object, so that the callback fires on deep mutations. See Deep Watchers.
<b>flush</b>: adjust the callback's flush timing. See Callback Flush Timing and watchEffect().
<b>onTrack / onTrigger</b>: debug the watcher's dependencies. See Watcher Debugging.
<b>once</b>: run the callback only once. The watcher is automatically stopped after the first callback run. 
Compared to <a href="#watchEffect()">watchEffect()</a>, <b>watch()</b> allows us to:

Perform the side effect lazily;
Be more specific about what state should trigger the watcher to re-run;
Access both the previous and current value of the watched state.`,
          code1: `Example

// Watching a getter:

const state = reactive({ count: 0 })
watch(
  () => state.count,
  (count, prevCount) => {
    /* ... */
  }
)

// Watching a ref:
const count = ref(0)
watch(count, (count, prevCount) => {
  /* ... */
})

// When watching multiple sources, the callback receives arrays containing new / old values corresponding to the source array:
watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
  /* ... */
})

// When using a getter source, the watcher only fires if the getter's return value has changed. If you want the callback to fire even on deep mutations, you need to explicitly force the watcher into deep mode with <b>{ deep: true }.</b> Note in deep mode, the new value and the old will be the same object if the callback was triggered by a deep mutation:
const state = reactive({ count: 0 })
watch(
  () => state,
  (newValue, oldValue) => {
    // newValue === oldValue
  },
  { deep: true }
)

// When directly watching a reactive object, the watcher is automatically in deep mode:
const state = reactive({ count: 0 })
watch(state, () => {
  /* triggers on deep mutation to state */
})

// watch() shares the same flush timing and debugging options with watchEffect():
watch(source, callback, {
  flush: 'post',
  onTrack(e) {
    debugger
  },
  onTrigger(e) {
    debugger
  }
})

// Stopping the watcher:
const stop = watch(source, callback)

// when the watcher is no longer needed:
stop()

// Side effect cleanup:
watch(id, async (newId, oldId, onCleanup) => {
  const { response, cancel } = doAsyncWork(newId)
  // 'cancel' will be called if 'id' changes, cancelling
  // the previous request if it hasn't completed yet
  onCleanup(cancel)
  data.value = await response
})`
        },
        {
          text1: `<b>Key Concepts</b>
    <b>Getter Function</b>: A getter is a function that derives or computes a value from reactive sources. It can be used to encapsulate complex logic for deriving values based on reactive data.

    <b>Reactive Source</b>: The source in the <b>watch</b> function can be a reactive reference <b>(ref)</b>, a reactive object <b>(reactive)</b>, or a getter function that returns a derived value.
    
    <b>Using Getters in watch</b>
You can use a getter function to observe changes in derived values. This is useful for watching computed properties or values that depend on multiple reactive sources. Here's how you can use getters in the watch function:
    `,
          code1: `&lt;template&gt;
  &lt;div&gt;
    &lt;input v-model=&quot;firstName&quot; placeholder=&quot;Enter first name&quot; /&gt;
    &lt;input v-model=&quot;lastName&quot; placeholder=&quot;Enter last name&quot; /&gt;
    &lt;p&gt;Full Name: {{ fullName }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    const firstName = ref('');
    const lastName = ref('');

    // Define a getter function to compute fullName
    const fullName = computed(() => \`\${firstName.value} \${lastName.value}\`);

    // Watch the computed value (getter)
    watch(fullName, (newFullName, oldFullName) => {
      console.log(\`Full Name changed from \${oldFullName} to \${newFullName}\`);
    });

    return {
      firstName,
      lastName,
      fullName
    };
  }
};
&lt;/script&gt;

//-----------
//Ex : 2
&lt;template&gt;
  &lt;div&gt;
    &lt;input v-model=&quot;firstName&quot; placeholder=&quot;Enter first name&quot; /&gt;
    &lt;input v-model=&quot;lastName&quot; placeholder=&quot;Enter last name&quot; /&gt;
    &lt;p&gt;Full Name: {{ fullName }}&lt;/p&gt;
    &lt;p&gt;Character Count: {{ characterCount }}&lt;/p&gt;
    &lt;p v-if=&quot;characterCount &gt; 10&quot; style=&quot;color: red;&quot;&gt;Character count exceeds 10!&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, computed, watch } from 'vue';

export default {
  setup() {
    // Reactive references for user input
    const firstName = ref('');
    const lastName = ref('');

    // Computed getter to derive the full name
    const fullName = computed(() => \`\${firstName.value} \${lastName.value}\`);

    // Computed getter to derive the character count of the full name
    const characterCount = computed(() => fullName.value.length);

    // Watch the character count for changes
    watch(characterCount, (newCount, oldCount) => {
      if (newCount > 10) {
        console.log(\`Character count has exceeded 10 characters: \${newCount}\`);
      }
    });

    return {
      firstName,
      lastName,
      fullName,
      characterCount
    };
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
          text1: ``,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      section:`Reactivity: Utilities`,
      title: "isRef",
      note: [
        {
          text1: `Checks if a value is a ref object.

Note the return type is a type predicate, which means isRef can be used as a type guard:

A <b>ref</b> in Vue is a way to create a reactive reference to a value. When you use <b>ref</b>, you get an object with a <b>.value</b> property that holds the actual value. This is a fundamental part of the Composition API, which allows for more flexible and reusable state management compared to the Options API.

<b>What isRef Does</b>
    <b>Purpose</b>: <b>isRef</b> checks if a given object is a <b>ref</b> object created by the <b>ref</b> function.
    <b>Usage</b>: You use <b>isRef</b> to determine if a particular object is a <b>ref</b>, which helps when you need to handle <b>ref</b> values dynamically or ensure type safety in your code.
`,
          code1: `let foo: unknown
if (isRef(foo)) {
  // foo's type is narrowed to Ref<unknown>
  foo.value
}
//----------
import { ref, isRef } from 'vue';

const myRef = ref(42);
const myNumber = 10;

console.log(isRef(myRef)); // true
console.log(isRef(myNumber)); // false
//---------
// Ex:
import { ref, isRef } from 'vue';

export default {
  props: {
    value: [String, Number, Object]
  },
  setup(props) {
    const isValueRef = isRef(props.value);

    if (isValueRef) {
      console.log('The prop is a ref');
      // You can safely access props.value.value here
    } else {
      console.log('The prop is not a ref');
    }
  }
};


`
        },
      ]
    },
    {
      id: 1,
      title: "unref()",
      note: [
        {
          text1: `Returns the inner value if the argument is a ref, otherwise return the argument itself. This is a sugar function for <span style="color:red"> val = isRef(val) ? val.value : val. </span>
          
          In Vue 3, the <b>unref</b> function is part of the Composition API and is used to extract the underlying value from a <b>ref</b> or return the value directly if it's not a <b>ref</b>. This function simplifies working with reactive references by allowing you to access the raw value in a more straightforward way.

    <b>What unref Does</b>
    <b>Purpose</b>: <b>unref</b> is used to unwrap a <b>ref</b> to access its actual value. If the argument passed to <b>unref</b> is not a <b>ref</b>, it simply returns the argument as is.
    <b>Usage</b>: It helps to avoid directly accessing the <b>.value</b> property of a <b>ref</b> and can make your code cleaner, especially when dealing with conditional or dynamic scenarios where you may not know in advance if a value is a <b>ref</b>.
          `,
          code1: `import { ref, unref } from 'vue';
                  const myRef = ref(42);
                  const myNumber = 10;

                  console.log(unref(myRef)); // 42
                  console.log(unref(myNumber)); // 10

              // 'unref(myRef)' returns '42', which is the value inside the 'ref'.
              // 'unref(myNumber)' simply returns '10' because 'myNumber' is not a 'ref'.
              `
        },
        {
          text1: `<b>Practical Use Cases</b>
    <b>Simplified Value Access</b>:
    When working with functions or components that may receive both <b>ref</b> and <b>non-ref</b> values, <b>unref</b> makes it easier to handle these values uniformly.`,
          code1: `import { ref, unref } from 'vue';

function logValue(value) {
  console.log(unref(value)); // Handles both refs and non-refs
}

const myRef = ref('Hello');
const myString = 'World';

logValue(myRef); // Logs 'Hello'
logValue(myString); // Logs 'World'
`
        },
        {
          text1: `<b>Dynamic Handling</b>:
In scenarios where the value might be a <b>ref</b> or a regular value, using <b>unref</b> helps avoid additional checks or conditional logic to access the value.`,
          code1: `import { ref, unref } from 'vue';

function processValue(value) {
  const actualValue = unref(value);
  // Proceed with actualValue directly
}

const myRef = ref(100);
const myValue = 200;

processValue(myRef); // Works seamlessly with both refs and non-refs
processValue(myValue);
`
        }
      ]
    },
    {
      id: 1,
      title: "toRef()",
      note: [
        {
          text1: `Can be used to normalize values / refs / getters into refs .

Can also be used to create a ref for a property on a source reactive object. The created ref is synced with its source property: mutating the source property will update the ref, and vice-versa.

In Vue 3, the <b>toRef</b> function is part of the Composition API and is used to create a <b>ref</b> from a property of an object. This is particularly useful when you want to create a reactive reference to a property of a reactive object or a <b>reactive</b> data structure, while still keeping the object reactive as a whole.

    <b>What toRef Does</b>
    <b>Purpose</b>: <b>toRef</b> creates a <b>ref</b> for a specific property of a reactive object. This allows you to work with individual properties as <b>ref</b> objects, which can be useful for fine-grained reactivity and simplifying certain types of data management.
    <b>Usage</b>: It is often used when you need to create a <b>ref</b> for a property in a reactive object to work with it independently, especially in scenarios involving computed properties or when passing data to child components.
`,
          code1: `//Object property signature:
          const state = reactive({
  foo: 1,
  bar: 2
})

// a two-way ref that syncs with the original property
const fooRef = toRef(state, 'foo')

// mutating the ref updates the original
fooRef.value++
console.log(state.foo) // 2

// mutating the original also updates the ref
state.foo++
console.log(fooRef.value) // 3

// Note this is different from:
const fooRef = ref(state.foo)

The above ref is 'not' synced with 'state.foo', because the 'ref()' receives a plain number value.
// 'toRef()' is useful when you want to pass the ref of a prop to a composable function:

<script setup>
import { toRef } from 'vue'

const props = defineProps(/* ... */)

// convert 'props.foo' into a ref, then pass into
// a composable
useSomeFeature(toRef(props, 'foo'))

// getter syntax - recommended in 3.3+
useSomeFeature(toRef(() => props.foo))
</script>
`
        },
        {
          text1: `When <b>toRef</b> is used with component props, the usual restrictions around mutating the props still apply. Attempting to assign a new value to the ref is equivalent to trying to modify the prop directly and is not allowed. In that scenario you may want to consider using <b>computed</b> with <b>get</b> and <b>set</b> instead. See the guide to using <b>v-model</b> with components for more information.

When using the object property signature, <b>toRef()</b> will return a usable ref even if the source property doesn't currently exist. This makes it possible to work with optional properties, which wouldn't be picked up by <b>toRefs</b>.

<b>Practical Use Cases</b>
    <b>1) Creating Refs from Reactive Properties</b>:
    When you have a <b>reactive</b> object and you want to pass or use its properties as individual <b>refs, toRef</b> can simplify the process.
`,
          code1: `&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;{{ firstNameRef }}{{ lastNameRef }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { reactive, toRef } from 'vue';
export default {
  setup(){
    const user = reactive({
      firstName: 'John',
      lastName: 'Doe'
    });
    
    const firstNameRef = toRef(user, 'firstName');
    const lastNameRef = toRef(user, 'lastName');
  
    return {
      firstNameRef,
      lastNameRef
    }
  }
}

&lt;/script&gt;
`
        },
        {
          text1: `<b>2) Passing Reactive Properties to Child Components</b>:
You can use <b>toRef</b> to pass individual properties from a reactive object to child components as <b>ref</b>, allowing the child components to be aware of and respond to changes in those properties.

<b>3)Creating Computed Properties</b>:
You might use toRef to create a <b>ref</b> for a specific property when defining computed properties or reactive state derived from an object's properties.
`,
          code1: `// Passing Reactive Properties to Child Components: 
          import { defineComponent, toRef } from 'vue';

export default defineComponent({
  props: {
    userName: String
  },
  setup(props) {
    const nameRef = toRef(props, 'userName');
    // Use nameRef in the component setup logic
  }
});

//------------------

//Creating Computed Properties:
import { reactive, computed, toRef } from 'vue';

const profile = reactive({
  firstName: 'Jane',
  lastName: 'Doe'
});

const fullName = computed(() => {
  const firstName = toRef(profile, 'firstName').value;
  const lastName = toRef(profile, 'lastName').value;
  return \`\${firstName} \${lastName}\`;
});

console.log(fullName.value); // 'Jane Doe'

`
        },
        // {
        //   text1: ``,
        //   code1: ``
        // }
      ]
    },
    {
      id: 1,
      title: "toValue()",
      note: [
        {
          text1: `Normalizes values / refs / getters to values. This is similar to <a>unref()</b>, except that it also normalizes getters. If the argument is a getter, it will be invoked and its return value will be returned.

This can be used in <a href="https://vuejs.org/guide/reusability/composables.html" target="_blank">Composables</a> to normalize an argument that can be either a value, a ref, or a getter.

In Vue 3, <b>toValue</b> is a function that is used to extract the raw value from a <b>ref</b> or reactive object. This function is part of Vue's reactivity system and is especially useful in scenarios where you need to work with values in a generic way, without being concerned whether the value is wrapped in a <b>ref</b> or is already a plain value.
<b>What toValue Does</b>
    <b>Purpose</b>: <u>toValue</u> helps you obtain the underlying value from a <b>ref</b> object or reactive data structure. If the argument is a <b>ref, toValue</b> returns the value inside the <b>ref</b>. If the argument is not a <b>ref</b>, it simply returns the argument itself.
    <b>Usage</b>: It is useful in scenarios where you want to handle values in a uniform manner, whether they are <b>ref</b> objects or regular values.
`,
          code1: `import { ref, reactive, toValue } from 'vue';

const myRef = ref(42);
const myNumber = 10;
const myReactive = reactive({ count: 5 });

console.log(toValue(myRef)); // 42
console.log(toValue(myNumber)); // 10
console.log(toValue(myReactive.count)); // 5

// In this example:
//     'toValue(myRef)' extracts the value '42' from the 'ref'.
//     'toValue(myNumber)' simply returns '10' because 'myNumber' is not a 'ref'.
//     'toValue(myReactive.count)' returns '5', accessing the 'count' property directly from the 
`
        },
        {
          text1: `<b>Practical Use Cases</b>
    <b>1) Uniform Value Access</b>:
    When dealing with functions or computations that may receive either <b>ref</b> objects or plain values, <b>toValue</b> allows you to handle them uniformly without manually checking their types.
    
    <b>2) Simplified Computed Properties</b>:
When creating computed properties, you may need to handle <b>ref</b> objects or reactive properties. Using <b>toValue</b> helps in accessing their values more straightforwardly.
    `,
          code1: `// 1) Uniform Value Access
          import { ref, toValue } from 'vue';

function processValue(value) {
  const actualValue = toValue(value);
  // Work with actualValue directly
  console.log(actualValue);
}

const myRef = ref('Hello');
const myString = 'World';

processValue(myRef); // Logs 'Hello'
processValue(myString); // Logs 'World'

//------------

//Simplified Computed Properties:
import { computed, ref, toValue } from 'vue';

const count = ref(10);
const multiplier = ref(2);

const doubled = computed(() => {
  return toValue(count) * toValue(multiplier);
});

console.log(doubled.value); // 20
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
      title: "toRefs()",
      note: [
        {
          text1: `Converts a reactive object to a plain object where each property of the resulting object is a ref pointing to the corresponding property of the original object. Each individual ref is created using <a href="toRef()" target="_blank">toRef()</a>.
          
          <b>toRefs</b> is useful when returning a reactive object from a composable function so that the consuming component can destructure/spread the returned object without losing reactivity:

          In Vue 3, the <b>toRefs</b> function is part of the Composition API and is used to convert the properties of a reactive object into individual <b>ref</b> instances. This is useful when you want to work with each property of a reactive object as a <b>ref</b> in a more granular way, especially when you need to pass these properties as <b>refs</b> to child components or use them in a setup function.

          <b>What toRefs Does</b>
    <b>Purpose</b>: toRefs converts the properties of a reactive object into ref instances, where each property in the reactive object becomes a separate ref. This ensures that you can work with each property as an individual reactive reference while maintaining reactivity across the entire object.
    <b>Usage</b>: It is particularly useful when you want to destructure a reactive object and retain reactivity on each property.
          `,
          code1: `import { reactive, toRefs } from 'vue';

const state = reactive({
  count: 0,
  name: 'Vue'
});

// Convert properties of the reactive object to refs
const { count, name } = toRefs(state);

console.log(count.value); // 0
console.log(name.value); // 'Vue'

// Update values through refs
count.value = 10;
name.value = 'Vue 3';

console.log(state.count); // 10
console.log(state.name); // 'Vue 3'

// 'toRefs(state)' converts each property of the 'state' reactive object into individual 'ref' instances.
// You can then access and modify these properties using 'count.value' and 'name.value'.
`
        },
        {
          text1: `<b>Practical Use Cases</b>
   <b>1) Passing Reactive Properties to Child Components</b>:
    When you need to pass reactive properties as props to child components, using <b>toRefs</b> ensures that each property maintains its reactivity when passed as a <b>ref</b>.`,
          code1: `//parent.vue
          &lt;template&gt;
  &lt;div&gt;
    &lt;h4&gt;Parent Component&lt;/h4&gt;
    &lt;p&gt;Count: {{ count }}&lt;/p&gt;
    &lt;p&gt;Name: {{ name }}&lt;/p&gt;
    &lt;HelloWorld :count=&quot;count&quot; :name=&quot;name&quot; /&gt;
    &lt;button @click=&quot;incrementCount&quot;&gt;Increment Count&lt;/button&gt;
    &lt;button @click=&quot;changeName&quot;&gt;Change Name&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { defineComponent, reactive, toRefs } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  components: {
    HelloWorld
  },
  setup() {
    // Create a reactive state object
    const state = reactive({
      count: 0,
      name: 'Vue 3'
    });

    // Convert reactive properties to refs
    const stateRefs = toRefs(state);

    // Define methods to update state
    const incrementCount = () => {
      stateRefs.count.value++;
    };

    const changeName = () => {
      stateRefs.name.value = 'Vue 3.x';
    };

    return {
      ...stateRefs,
      incrementCount,
      changeName
    };
  }
});
&lt;/script&gt;

//child.vue
&lt;template&gt;
  &lt;div&gt;
    &lt;h2&gt;Child Component&lt;/h2&gt;
    &lt;p&gt;Count from Parent: {{ count }}&lt;/p&gt;
    &lt;p&gt;Name from Parent: {{ name }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    count: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
});
&lt;/script&gt;
// In this example, 'state' properties are converted to 'refs' and passed to the 'ChildComponent' as props.
`
        },
        {
          text1: `<b>2) Destructuring Reactive Objects</b>:
When you destructure a reactive object, the properties are still reactive if converted to <b>refs</b> with <b>toRefs</b>. This helps avoid issues where destructuring directly from a reactive object would lose reactivity.

<b>3) Maintaining Reactivity in Computed Properties</b>:
When creating computed properties from a reactive object, converting the properties to <b>refs</b> can ensure that changes are correctly tracked and reflected.
`,
          code1: `//Destructuring Reactive Objects 
          import { reactive, toRefs } from 'vue';
const state = reactive({
  count: 0,
  name: 'Vue'
});

const { count, name } = toRefs(state);
// Use count and name as refs in computed properties or methods

//--------------

//Maintaining Reactivity in Computed Properties
import { reactive, computed, toRefs } from 'vue';
const state = reactive({
  count: 0,
  multiplier: 2
});

const { count, multiplier } = toRefs(state);
const doubled = computed(() => count.value * multiplier.value);
console.log(doubled.value); // 0 initially
`
        },
      ]
    },
    {
      id: 1,
      title: "isProxy()",
      note: [
        {
          text1: `Checks if an object is a proxy created by <b>reactive(), readonly(), shallowReactive() or shallowReadonly()</b>.
          
          n Vue 3, <b>isProxy</b> is a utility function provided by the Vue reactivity system to determine whether a given object is a reactive proxy created by Vue. Reactivity in Vue 3 relies on the Proxy API to create reactive objects, and <b>isProxy</b> helps to identify whether an object is a Vue-created reactive proxy.

    <b>What isProxy Does</b>
    <b>Purpose</b>: isProxy checks if an object is a reactive proxy or not. This can be useful for debugging, type checking, or when you need to differentiate between reactive proxies and plain objects in your code.

          `,
          code1: `import { reactive, isProxy } from 'vue';

const state = reactive({
  count: 0
});

const plainObject = { count: 0 };

console.log(isProxy(state)); // true
console.log(isProxy(plainObject)); // false

    In this example:
    'state' is a reactive object created by 'reactive', so 'isProxy(state)' returns 'true'.
    'plainObject' is a regular JavaScript object, so 'isProxy(plainObject)' returns 'false'.
          `
        },
        {
          text1: `<b>Practical Use Cases</b>
    <b>1) Debugging</b>:
    When debugging Vue applications, you might want to confirm whether certain objects are reactive proxies. <b>isProxy</b> can help verify this, especially in complex applications where objects are passed around and their reactivity status needs to be checked.
    
    <b>2)Type Checking</b>:
In TypeScript or JavaScript code, you might want to ensure that certain objects are reactive proxies before performing operations that depend on reactivity.

<b>3) Dynamic Handling of Reactive and Non-Reactive Data</b>:
When writing utility functions or components that handle both reactive and non-reactive data, <b>isProxy</b> helps in managing the data correctly.
    `,
          code1: `//Debugging:
          import { reactive, isProxy } from 'vue';

const state = reactive({
  count: 0
});

function debugObject(obj) {
  if (isProxy(obj)) {
    console.log('The object is a reactive proxy.');
  } else {
    console.log('The object is not a reactive proxy.');
  }
}

debugObject(state); // Logs: The object is a reactive proxy.

//---------

//Type Checking:
import { reactive, isProxy } from 'vue';

function processObject(obj: object) {
  if (isProxy(obj)) {
    // Safe to assume 'obj' is reactive
    console.log('Processing reactive object...');
  } else {
    console.log('Object is not reactive.');
  }
}

const state = reactive({ count: 1 });
processObject(state); // Logs: Processing reactive object...

//--------
import { reactive, isProxy } from 'vue';

function updateData(data) {
  if (isProxy(data)) {
    // Handle reactive data
    console.log('Updating reactive data...');
  } else {
    // Handle non-reactive data
    console.log('Updating non-reactive data...');
  }
}

const reactiveData = reactive({ count: 1 });
const plainData = { count: 1 };

updateData(reactiveData); // Logs: Updating reactive data...
updateData(plainData);   // Logs: Updating non-reactive data...
`
        }
      ]
    },
    {
      id: 1,
      title: "isReactive()",
      note: [
        {
          text1: `Checks if an object is a proxy created by reactive() or shallowReactive()
          
          isReactive() is a function provided by the Vue Composition API to check if a given object is reactive.

<b> What is Reactivity in Vue 3? </b>
Reactivity is a core feature in Vue.js that allows Vue components to automatically update whenever their reactive data changes. Vue 3 uses a reactivity system based on JavaScript Proxies to track and respond to changes in data.

<b>isReactive() Function</b>
The isReactive() function is part of the Vue Composition API and is used to determine if an object is a reactive object created by Vue's reactivity system.

    <b>object</b>: The object you want to check for reactivity.

    <b>Returns</b>
    <b>true</b> if the object is reactive.
    <b>false</b> otherwise.

    //---

    <b>Purpose</b>: Check if an object is reactive.
<b>Function</b>: isReactive(object)
<b>Returns</b>: true if the object is reactive, otherwise false.
          `,
          code1: `import { reactive, isReactive } from 'vue';

const state = reactive({
  count: 0
});

console.log(isReactive(state)); // true

const plainObject = { count: 0 };

console.log(isReactive(plainObject)); // false
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
      title: "isReadonly()",
      note: [
        {
          text1: `Checks whether the passed value is a readonly object. The properties of a readonly object can change, but they can't be assigned directly via the passed object.

The proxies created by <b>readonly()</b> and <b>shallowReadonly()</b> are both considered readonly, as is a <b>computed()</b> ref without a <b>set</b> function.

In Vue 3, <b>isReadonly</b> is a utility function provided by the Vue reactivity system to determine whether a given object is a readonly proxy. This function helps you identify whether an object is a reactive proxy that has been made immutable with Vue's <b>readonly</b> function.

<b>What isReadonly Does</b>
    <b>Purpose</b>: isReadonly checks if an object is a readonly reactive proxy. A readonly proxy is a special type of reactive proxy that allows you to read properties but prevents modifications.
    <b>Usage</b>: It is useful for debugging, enforcing immutability rules, or performing type checks where you need to confirm whether an object is a readonly proxy.
`,
          code1: `import { readonly, isReadonly } from 'vue';

const reactiveObj = reactive({
  count: 0
});

const readonlyObj = readonly({
  count: 0
});

console.log(isReadonly(reactiveObj)); // false
console.log(isReadonly(readonlyObj)); // true
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
      section:'Composition API: Lifecycle Hooks',
      title: "onMounted()",
      note: [
        {
          text1: `Registers a callback to be called after the component has been mounted.
          A component is considered mounted after:

All of its synchronous child components have been mounted (does not include async components or components inside <Suspense> trees).

Its own DOM tree has been created and inserted into the parent container. Note it only guarantees that the component's DOM tree is in-document if the application's root container is also in-document.

This hook is typically used for performing side effects that need access to the component's rendered DOM, or for limiting DOM-related code to the client in a <a href="https://vuejs.org/guide/scaling-up/ssr.html" target="_blank">server-rendered application</a>.
<u>This hook is not called during server-side rendering.</u>

In Vue 3, <b>onMounted()</b> is a lifecycle hook provided by the Composition API that allows you to execute code when a component has been mounted to the DOM. It's one of several lifecycle hooks available in Vue 3 that enable you to hook into different stages of a component's lifecycle.

<b>What is onMounted()?</b>
onMounted() is a lifecycle hook that runs after the component's template has been rendered and inserted into the DOM. This is typically used to perform actions that depend on the component being fully rendered, such as fetching data or interacting with the DOM.

<b>Usage</b>
You use <b>onMounted()</b> within the <b>setup()</b> function of a Vue 3 component. The <b>setup()</b> function is the entry point of the Composition API where you define reactive state, methods, and lifecycle hooks.
`,
          code1: `Ex : 1
          &lt;template&gt;
  &lt;div&gt;
    &lt;h5&gt;{{ message }}&lt;/h5&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const message = ref('Hello, Vue 3!');

    onMounted(() => {
      // This code runs after the component is mounted
      console.log('Component has been mounted to the DOM');
      
      // For example, you could fetch data or manipulate the DOM here
      fetchData();
    });

    function fetchData() {
      // Simulate an API call or other async operation
      setTimeout(() => {
        message.value = 'Data has been loaded!';
      }, 2000);
    }

    return {
      message
    };
  }
};
&lt;/script&gt;

//--------

Ex : 2
&lt;template&gt;
  &lt;div&gt;
    &lt;h5&gt;{{ userData }}&lt;/h5&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const userData = ref([]);

    onMounted(() => {
      // This code runs after the component is mounted
      console.log('Component has been mounted to the DOM');
      
      // For example, you could fetch data or manipulate the DOM here
      fetchData();
    });

    function fetchData() {
      // Simulate an API call or other async operation
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((data) => {
        return data.json()
      })
      .then((res) => {
        console.log(res.slice(0, 10))
        userData.value = res.slice(0, 10)
      })
    }

    return {
      userData
    };
  }
};
&lt;/script&gt;

`
        },
        {
          text1: `<div>
              <table data-start="1683" data-end="2098" class="__web-inspector-hide-shortcut__">
      <thead data-start="1683" data-end="1756">
        <tr data-start="1683" data-end="1756">
          <th data-start="1683" data-end="1693">Feature</th>
          <th data-start="1693" data-end="1721"><code data-start="1695" data-end="1706">mounted()</code> (Options API)
          </th>
          <th data-start="1721" data-end="1756"><code data-start="1723" data-end="1736">onMounted()</code> (Composition
            API)</th>
        </tr>
      </thead>
      <tbody data-start="1825" data-end="2098">
        <tr data-start="1825" data-end="1903">
          <td>Syntax</td>
          <td>Defined inside <code data-start="1851" data-end="1870">export default {}</code></td>
          <td>Used inside <code data-start="1885" data-end="1901">&lt;script setup&gt;</code></td>
        </tr>
        <tr data-start="1904" data-end="1971">
          <td>Import Needed?</td>
          <td>❌ No import needed</td>
          <td>✅ Must import <code data-start="1958" data-end="1969">onMounted</code></td>
        </tr>
        <tr data-start="1972" data-end="2034">
          <td>Execution</td>
          <td>Runs automatically</td>
          <td>Must be explicitly called</td>
        </tr>
        <tr data-start="2035" data-end="2098">
          <td>Works in Vue 2?</td>
          <td>✅ Yes (Vue 2 &amp; Vue 3)</td>
          <td>❌ No (Vue 3 only)</td>
        </tr>
      </tbody>
    </table></div>`,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "onUpdated()",
      note: [
        {
          text1: `Registers a callback to be called after the component has updated its DOM tree due to a reactive state change.
          <b>ts: </b><span style="color:red"> function onUpdated(callback: () => void): void </span>

          A parent component's updated hook is called after that of its child components.

This hook is called after any DOM update of the component, which can be caused by different state changes, because multiple state changes can be batched into a single render cycle for performance reasons. If you need to access the updated DOM after a specific state change, use <a href="https://vuejs.org/api/reactivity-core.html#ref" target="_blank">nextTick()</a> instead.

<u>This hook is not called during server-side rendering.</u>

<b>WARNING</b>
<span style="color:grey">Do not mutate component state in the updated hook - this will likely lead to an infinite update loop!</span>

<b>onUpdated()</b> is a lifecycle hook provided by the Composition API. It allows you to execute code in response to updates to a component's reactive data or props. Specifically, onUpdated() is called after the component's DOM has been updated following a change to its reactive state.

<b>When to Use onUpdated()</b>
The <b>onUpdated()</b> hook is useful for scenarios where you need to perform actions after the component's reactive data or props have changed and the DOM has been updated. Typical use cases include:

    <b>DOM Manipulation</b>: Performing operations that require the DOM to be updated before executing (e.g., working with third-party libraries that need to interact with the updated DOM).
    <b>Analytics</b>: Sending analytics or tracking information after the DOM changes.
    <b>Refetching Data</b>: Updating or refetching data when certain reactive properties change.
          `,
          code1: `&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;Count: {{ count }}&lt;/p&gt;
    &lt;button @click=&quot;increment&quot;&gt;Increment&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, onUpdated } from 'vue';

export default {
  setup() {
    const count = ref(0);

    function increment() {
      count.value++;
    }

    // This hook runs after the DOM has been updated
    onUpdated(() => {
      console.log('Component updated. Current count:', count.value);
    });

    return {
      count,
      increment
    };
  }
};
&lt;/script&gt;

//--------
Ex : 2

&lt;template&gt;
  &lt;div&gt;
    &lt;input v-model=&quot;id&quot; placeholder=&quot;Enter ID...&quot; type=&quot;number&quot; /&gt;
    &lt;button @click=&quot;fetchData&quot;&gt;Fetch Data&lt;/button&gt;
    &lt;div v-if=&quot;post&quot;&gt;
      &lt;h3&gt;{{ post.title }}&lt;/h3&gt;
      &lt;p&gt;{{ post.body }}&lt;/p&gt;
    &lt;/div&gt;
    &lt;p v-else-if=&quot;id &amp;&amp; !post&quot;&gt;No data found for ID {{ id }}.&lt;/p&gt;
    &lt;p v-if=&quot;error&quot; style=&quot;color: red;&quot;&gt;{{ error }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, onUpdated } from 'vue';

export default {
  setup() {
    const id = ref(null);  // Initialize with null or some default value
    const post = ref(null);
    const error = ref(null);
    const previousId = ref(null);

    // Function to fetch data from the API based on id
    async function fetchData() {
      if (id.value === null) {
        post.value = null;
        return;
      }

      try {
        const response = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id.value}\`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        post.value = result;
      } catch (err) {
        error.value = err.message;
        console.error('Fetch error:', err);
      }
    }

    // Track updates using onUpdated
    onUpdated(() => {
      // Fetch data only if the id has changed
      if (id.value !== previousId.value) {
        fetchData();
        previousId.value = id.value; // Update the previousId
      }
    });

    // Method to manually trigger the fetchData
    function fetchDataManually() {
      fetchData();
    }

    return {
      id,
      post,
      error,
      fetchDataManually
    };
  }
};
&lt;/script&gt;

//------
Ex : 3

&lt;script setup&gt;
import { ref, onUpdated } from 'vue'

const count = ref(0)

onUpdated(() => {
  // text content should be the same as current \`count.value\`
  console.log(document.getElementById('count').textContent)
})
&lt;/script&gt;

&lt;template&gt;
  &lt;button id=&quot;count&quot; @click=&quot;count++&quot;&gt;{{ count }}&lt;/button&gt;
&lt;/template&gt;
`
        }
      ]
    },
    {
      id: 1,
      title: "onUnmounted()",
      note: [
        {
          text1: `Registers a callback to be called after the component has been unmounted.

<b>ts </b><span style="color:red">function onUnmounted(callback: () => void): void</span>

A component is considered unmounted after:

=> All of its child components have been unmounted.
=> All of its associated reactive effects (render effect and computed / watchers created during <b>setup()</b>) have been stopped.

Use this hook to clean up manually created side effects such as timers, DOM event listeners or server connections.

<b>This hook is not called during server-side rendering.</b>`,
          code1: `&lt;script setup&gt;
import { onMounted, onUnmounted } from 'vue'

let intervalId
onMounted(() => {
  intervalId = setInterval(() => {
    // ...
  })
})

onUnmounted(() => clearInterval(intervalId))
&lt;/script&gt;`
        },
        {
          text1: `In Vue 3, the <b>onUnmounted()</b> lifecycle hook is part of the Composition API and is used to perform cleanup tasks when a component is about to be unmounted or removed from the DOM. This is useful for cleaning up resources, canceling subscriptions, or performing any necessary teardown when the component is no longer in use.

         <b> Purpose of onUnmounted()</b>

The <b>onUnmounted()</b> hook is primarily used for:

    <b>Cleanup</b>: Removing event listeners, canceling network requests, or clearing timers that were set up during the component's lifecycle.
    <b>Resource Management</b>: Releasing any resources or performing any necessary teardown to prevent memory leaks or other issues.

<b>When to Use onUnmounted()</b>
You should use <b>onUnmounted()</b> when:
    You have setup code that needs to be cleaned up, such as global event listeners or third-party libraries.
    You need to cancel ongoing asynchronous tasks or clear intervals/timers that were started when the component was mounted.
    <b>How onUnmounted() Works</b>
<b>onUnmounted()</b> is called when the component is removed from the DOM. It provides a way to execute any cleanup logic right before the component is destroyed.
    `,
          code1: `&lt;template&gt;
  &lt;div&gt;
    &lt;p&gt;Time elapsed: {{ timeElapsed }} seconds&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const timeElapsed = ref(0);
    let timer = null;

    // Function to start the timer
    function startTimer() {
      timer = setInterval(() => {
        timeElapsed.value += 1;
      }, 1000);
    }

    // Start the timer when the component is mounted
    onMounted(() => {
      startTimer();
    });

    // Clean up the timer when the component is unmounted
    onUnmounted(() => {
      if (timer !== null) {
        clearInterval(timer);
      }
    });

    return {
      timeElapsed
    };
  }
};
&lt;/script&gt;


//------------

Ex : 2
// Parent.vue
&lt;template&gt;
  &lt;div&gt;
    &lt;button @click=&quot;showComponent = !showComponent&quot;&gt;
      Toggle Component
    &lt;/button&gt;
    &lt;HelloWorld v-if=&quot;showComponent&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import HelloWorld from './components/HelloWorld.vue'; // Import your component

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      showComponent: true
    };
  }
};
&lt;/script&gt;


// child.vue
&lt;template&gt;
  &lt;div&gt;
    &lt;h5&gt;Window Resize Tracker&lt;/h5&gt;
    &lt;p&gt;Window width: {{ windowWidth }} pixels&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const windowWidth = ref(window.innerWidth);

    // Function to handle window resize
    function handleResize() {
      windowWidth.value = window.innerWidth;
    }

    // Set up the event listener when the component is mounted
    onMounted(() => {
      console.log('Component mounted');
      window.addEventListener('resize', handleResize);
    });

    // Clean up the event listener when the component is unmounted
    onUnmounted(() => {
      console.log('Component unmounted');
      window.removeEventListener('resize', handleResize);
    });

    return {
      windowWidth
    };
  }
};
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
      title: "onBeforeMount()",
      note: [
        {
          text1: `Registers a hook to be called right before the component is to be mounted.
<b>ts </b><span style="color:red">function onBeforeMount(callback: () => void): void </span>

When this hook is called, the component has finished setting up its reactive state, but no DOM nodes have been created yet. It is about to execute its DOM render effect for the first time.

<b>This hook is not called during server-side rendering.</b>
This hook is called right before the component is mounted. It helps perform actions that need to be executed before the component is displayed, such as fetching data from an API.

<b>onBeforeMount()</b>
The onBeforeMount hook occurs just before the component is mounted to the DOM. The onBeforeMount lifecycle hook happens right before the onMounted hook.

In Vue 3, the <b>onBeforeMount()</b> lifecycle hook is part of the Composition API and is used to perform actions before the component is mounted to the DOM. This hook is invoked after the component's reactive data has been set up but before the component's template is rendered for the first time.

<b>Purpose of onBeforeMount()</b>
The <b>onBeforeMount()</b> hook is typically used for:
    <b>Initialization Tasks</b>: Performing setup tasks that need to happen before the component's template is first rendered. This can include pre-render setup like fetching initial data or setting up configurations.

    <b>Preparation</b>: Preparing any data or state that the component will need once it is rendered. This ensures that all necessary data is ready before the component's visual output is displayed.

    <b>How onBeforeMount() Works</b>
    <b>Timing</b> : onBeforeMount() is called after the component's reactive properties have been initialized and before the component's DOM is rendered. This means that you can safely set up any data or perform actions that must be in place before the component appears on the screen.
`,
          code1: `&lt;template&gt;
  &lt;div&gt;
    &lt;h6&gt;Data Fetching Before Mount&lt;/h6&gt;
    &lt;p v-if=&quot;data&quot;&gt;Data: {{ data }}&lt;/p&gt;
    &lt;p v-else&gt;Loading data...&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, onBeforeMount } from 'vue';

export default {
  setup() {
    const data = ref(null);

    // Function to simulate fetching data
    async function fetchData() {
      try {
        // Simulating an API call with a timeout
        await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(data => data.json())
        .then(res => {
          console.log(res)
          data.value = res;
        })
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // Call fetchData before the component is mounted
    onBeforeMount(() => {
      console.log('Component is about to mount');
      fetchData();
    });

    return {
      data
    };
  }
};
&lt;/script&gt;

`
        },
        {
          text1: `<b>Why Use onBeforeMount()?</b>
    <b>Initialization</b>: It provides a way to perform initialization tasks before the component is rendered, ensuring that the component has the necessary data or configuration before it appears to the user.

    <b>Data Fetching</b>: It is useful for initiating data fetching or other asynchronous tasks that need to be completed before the component's template is rendered.

    <b>Consistency</b>: Ensures that any setup that affects the initial rendering of the component is completed, contributing to consistent and correct initial display.`,
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
      title: "onBeforeUpdate()",
      note: [
        {
          text1: `Registers a hook to be called right before the component is about to update its DOM tree due to a reactive state change.
<b>ts </b><span style="color:red"> function onBeforeUpdate(callback: () => void): void </span>

This hook can be used to access the DOM state before Vue updates the DOM. It is also safe to modify component state inside this hook.

This hook is not called during server-side rendering.

In Vue 3, the <b>onBeforeUpdate()</b> lifecycle hook is part of the Composition API and is used to perform actions right before the component's reactive data causes a re-render. This hook is triggered whenever the component's reactive state changes, but before the DOM updates to reflect those changes.
Purpose of <b>onBeforeUpdate()</b>

    The <b>onBeforeUpdate()</b> hook is typically used for:
    <b>Pre-Update Preparation</b>: To perform tasks or make changes before the DOM updates. This could be useful for tasks that need to occur right before the DOM is updated, such as making final adjustments to data or preparing for some side effects.

    <b>Optimizations</b>: To perform any calculations or prepare any data that might help optimize the upcoming DOM update. For example, you might use this hook to pre-compute some values or adjust other reactive properties based on changes.

    <b>How onBeforeUpdate() Works</b>
    <b>Timing</b>: onBeforeUpdate() is called right before the component updates the DOM in response to changes in reactive data. It allows you to perform actions or make adjustments before the actual rendering occurs.

    <b>Why Use onBeforeUpdate()?</b>
    <b>Data Preparation</b>: It provides an opportunity to prepare or adjust data just before the DOM reflects changes, which can be useful for managing state or performing pre-update calculations.
    <b>Performance Optimization</b>: Allows you to perform actions that might optimize the DOM update or adjust how data is handled before the re-rendering process occurs.
    <b>Consistency</b>: Helps maintain consistency between the reactive data and what is rendered on the screen, allowing you to manage side effects related to data changes effectively.
`,
          code1: `&lt;template&gt;
  &lt;div&gt;
    &lt;h5&gt;Before Update Hook Example&lt;/h5&gt;
    &lt;p&gt;Current count: {{ count }}&lt;/p&gt;
    &lt;button @click=&quot;increment&quot;&gt;Increment&lt;/button&gt;
    &lt;p&gt;Previous count: {{ previousCount }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, onBeforeUpdate } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const previousCount = ref(null);

    // Function to increment count
    function increment() {
      count.value += 1;
    }

    // Hook to perform an action before the component updates
    onBeforeUpdate(() => {
      // Store the previous count before updating
      previousCount.value = count.value;
      console.log('onBeforeUpdate: Current count is about to be updated to', count.value);
    });

    return {
      count,
      previousCount,
      increment
    };
  }
};
&lt;/script&gt;`
        }
      ]
    },
    {
      id: 1,
      title: "onBeforeUnmount()",
      note: [
        {
          text1: `onBeforeUnmount()
          Registers a hook to be called right before a component instance is to be unmounted.

<b>ts </b><span style="color:red"> function onBeforeUnmount(callback: () => void): void </span>

When this hook is called, the component instance is still fully functional.
<b>This hook is not called during server-side rendering.</b>

In Vue 3, the <b>onBeforeUnmount()</b> lifecycle hook is part of the Composition API and is used to perform cleanup or preparation tasks just before a component is removed from the DOM. This hook allows you to execute code right before the component is unmounted, providing an opportunity to clean up resources or perform any final operations.

<b>Purpose of onBeforeUnmount()</b>
The onBeforeUnmount() hook is typically used for:
    <b>Cleanup Operations</b>: To perform necessary cleanup tasks before the component is destroyed. This might include removing event listeners, stopping timers, or cleaning up other resources that were allocated during the component's lifecycle.

    <b>Finalization</b>: To perform any last operations that need to happen before the component is fully unmounted. This could involve saving state, logging information, or notifying other parts of the application.

    <b>How onBeforeUnmount() Works</b>
    <b>Timing</b>: onBeforeUnmount() is called before the component is unmounted and removed from the DOM. This allows you to handle any necessary cleanup operations or finalize tasks just before the component is destroyed.
`,
          code1: `// Parent.vue
          &lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;Component with onBeforeUnmount&lt;/h1&gt;
    &lt;button @click=&quot;toggle&quot;&gt;Toggle Component&lt;/button&gt;
    &lt;HelloWorld v-if=&quot;showComponent&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'; // Assume HelloWorld is your component

export default {
  components: { HelloWorld },
  setup() {
    const showComponent = ref(true);

    function toggle() {
      showComponent.value = !showComponent.value;
    }

    return {
      showComponent,
      toggle
    };
  }
};
&lt;/script&gt;

//------------
// Child.vue
&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;Timer Example&lt;/h1&gt;
    &lt;p&gt;Time: {{ time }} seconds&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const time = ref(0);
    let timer;

    // Function to start the timer
    function startTimer() {
      timer = setInterval(() => {
        time.value += 1;
      }, 1000);
    }

    // Start the timer when the component is mounted
    onMounted(() => {
      console.log('Component mounted');
      startTimer();
    });

    // Cleanup the timer before the component is unmounted
    onBeforeUnmount(() => {
      console.log('Component is about to unmount');
      clearInterval(timer);
    });

    return {
      time
    };
  }
};
&lt;/script&gt;
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
      title: "onErrorCaptured()",
      note: [
        {
          text1: `Registers a hook to be called when an error propagating from a descendant component has been captured.
          Errors can be captured from the following sources:

=> Component renders
=> Event handlers
=> Lifecycle hooks
=> setup() function
=> Watchers
=> Custom directive hooks
=> Transition hooks
The hook receives three arguments: the error, the component instance that triggered the error, and an information string specifying the error source type.
<span style="color:grey">
TIP: In production, the 3rd argument (<b>info</b>) will be a shortened code instead of the full information string. You can find the code to string mapping in the Production Error Code Reference.</span>

You can modify component state in <b>errorCaptured()</b> to display an error state to the user. However, it is important that the error state should not render the original content that caused the error; otherwise the component will be thrown into an infinite render loop.

The hook can return <b>false</b> to stop the error from propagating further. See error propagation details below.

<b>Error Propagation Rules</b>

By default, all errors are still sent to the application-level <b>app.config.errorHandler</b> if it is defined, so that these errors can still be reported to an analytics service in a single place.

If multiple <b>errorCaptured</b> hooks exist on a component's inheritance chain or parent chain, all of them will be invoked on the same error, in the order of bottom to top. This is similar to the bubbling mechanism of native DOM events.

If the <b>errorCaptured</b> hook itself throws an error, both this error and the original captured error are sent to <b>app.config.errorHandler</b>.

An <b>errorCaptured</b> hook can return <b>false</b> to prevent the error from propagating further. This is essentially saying "this error has been handled and should be ignored." It will prevent any additional <b>errorCaptured</b> hooks or <b>app.config.errorHandler</b> from being invoked for this error.

In Vue 3, the <b>onErrorCaptured()</b> lifecycle hook is part of the Composition API and is used for handling errors that occur within a component or its child components. It allows you to capture and handle errors in a specific component tree, providing a way to manage error boundaries and prevent errors from propagating up to parent components.

Purpose of <b>onErrorCaptured()</b>

The <b>onErrorCaptured()</b> hook serves several key purposes:

    <b>Error Handling</b>: Captures errors that occur in the component's subtree, allowing you to handle them locally within the component rather than letting them bubble up to parent components.

    <b>Prevent Error Propagation</b>: Stops errors from propagating further up the component tree. This ensures that errors in child components don't cause the entire application to crash.

    <b>Custom Error Logging</b>: Provides an opportunity to log errors, display user-friendly messages, or perform other actions when an error occurs in the component or its children.

<b>How onErrorCaptured() Works</b>
    <b>Timing</b>: onErrorCaptured() is called when an error is thrown within the component or its child components. It is invoked before the error is propagated further up the component tree.

    <b>Return Value</b>: The function can return <u>true</u> to prevent the error from propagating further or <u>false</u> (or nothing) to allow it to continue propagating.
          `,
          code1: `&lt;template&gt;
  &lt;div&gt;
    &lt;h2&gt;Child Component&lt;/h2&gt;
    &lt;button @click=&quot;throwError&quot;&gt;Throw Error&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    function throwError() {
      throw new Error('This is an error from ChildComponent');
    }

    return {
      throwError
    };
  }
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
      title: "onRenderTracked() (Dev Only)",
      note: [
        {
          text1: `Registers a debug hook to be called when a reactive dependency has been tracked by the component's render effect.

<b>This hook is development-mode-only and not called during server-side rendering.</b>

In Vue 3, the <b>onRenderTracked()</b> hook is part of the Composition API and provides a way to track changes to reactive dependencies that occur during the rendering process of a component. It is designed to be used for debugging and optimizing the performance of Vue applications by giving insight into which reactive dependencies are being accessed during rendering.

<b>Purpose of onRenderTracked()</b>
The onRenderTracked() hook serves several purposes:

    <b>Debugging</b>: Helps developers understand which reactive properties are being accessed during the rendering phase of a component. This can be useful for debugging issues related to reactivity and performance.

    <b>Performance Optimization</b>: Provides insight into which dependencies are being tracked and accessed, which can be used to optimize component rendering and reduce unnecessary updates.

    <b>Tracking Dependencies</b>: Allows developers to see which reactive properties are involved in the component's rendering process, aiding in understanding and managing component reactivity.

<b>How onRenderTracked() Works</b>

    <b>Timing</b>: onRenderTracked() is called whenever a reactive dependency is accessed during the component's rendering phase. This hook is useful for tracking and debugging reactive dependencies in the context of the component's rendering process.

    <b>Parameters</b>: The hook is called with a parameter that provides information about the tracked dependency.
`,
          code1: `&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;Render Tracked Example&lt;/h1&gt;
    &lt;p&gt;Count: {{ count }}&lt;/p&gt;
    &lt;button @click=&quot;increment&quot;&gt;Increment&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, onRenderTracked } from 'vue';

export default {
  setup() {
    const count = ref(0);

    function increment() {
      count.value += 1;
    }

    // Track reactive dependencies accessed during rendering
    onRenderTracked((event) => {
      console.log('Tracked dependency:', event);
    });

    return {
      count,
      increment
    };
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
          text1: ``,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "onRenderTriggered() (Dev Only)",
      note: [
        {
          text1: `Registers a debug hook to be called when a reactive dependency triggers the component's render effect to be re-run.
              <b>This hook is development-mode-only and not called during server-side rendering.</b>
              
              In Vue 3, the <b>onRenderTriggered()</b> lifecycle hook is part of the Composition API and is used to track changes to reactive dependencies that occur during the rendering process of a component. It allows developers to gain insights into how reactive properties are changing and being accessed during rendering, which can be useful for debugging and performance optimization.

              <b>Purpose of onRenderTriggered()</b>
    The onRenderTriggered() hook is primarily used for:

    <b>Debugging</b>: Helps developers understand which reactive properties are causing re-renders or updates during the rendering process of a component.
    <b>Performance Optimization</b>: Provides information about which reactive dependencies are being triggered and how they affect the rendering process. This can be useful for optimizing component performance by identifying unnecessary re-renders.
    <b>Understanding Reactivity</b>: Offers insights into how reactive properties interact with each other and how changes in state lead to updates in the component.

    <b>How onRenderTriggered() Works</b>
    <b>Timing</b>: onRenderTriggered() is called whenever a reactive dependency that is accessed during rendering is updated or triggered. This hook provides a way to track these updates and understand their impact on rendering.
    <b>Parameters</b>: The hook is called with a parameter that provides details about the triggered reactive dependency.
              `,
          code1: `&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;Render Triggered Example&lt;/h1&gt;
    &lt;p&gt;Count: {{ count }}&lt;/p&gt;
    &lt;button @click=&quot;increment&quot;&gt;Increment&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref, onRenderTriggered } from 'vue';

export default {
  setup() {
    const count = ref(0);

    function increment() {
      count.value += 1;
    }

    // Track changes to reactive dependencies during rendering
    onRenderTriggered((event) => {
      console.log('Triggered dependency:', event);
    });

    return {
      count,
      increment
    };
  }
};
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
      title: "onActivated()",
      note: [
        {
          text1: `Registers a callback to be called after the component instance is inserted into the DOM as part of a tree cached by <b><KeepAlive></b>.
          <b>This hook is not called during server-side rendering.</b>
          <b>ts </b> <span style="color:red"> function onActivated(callback: () => void): void </span>

          n Vue 3, the <b>onActivated()</b> lifecycle hook is part of the Composition API and is used in components that are wrapped in <keep-alive>. It is invoked when a component that is being cached by <keep-alive> is reactivated (i.e., when it is being shown again after being hidden).

<b>Purpose of onActivated()</b>
The <b>onActivated()</b> hook serves several key purposes:

    <b>Reactivation Logic</b>: Allows you to perform specific logic when a cached component is reactivated. This is useful for components that need to reset or refresh their state when they are brought back into view.

    <b>Optimization</b>: Helps manage the lifecycle of components that are cached by <keep-alive>, ensuring that the component behaves correctly when it is shown again.

    <b>Resource Management</b>: Provides a place to restart any processes or resource-intensive tasks that should resume when the component is reactivated.

<b>When to Use onActivated()</b>
The onActivated() hook is particularly relevant in scenarios where you use <keep-alive> to cache components for performance reasons. When a component wrapped with <keep-alive> is hidden and later shown again, onActivated() is called to handle any reactivation-specific logic.
          `,
          code1: `// Parent.vue
          &lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;Render Triggered Example&lt;/h1&gt;
    &lt;p&gt;Count: {{ count }}&lt;/p&gt;
    &lt;button @click=&quot;increment&quot;&gt;Increment&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: { HelloWorld },
  setup() {
    const showComponent = ref(true);

    function toggle() {
      showComponent.value = !showComponent.value;
    }

    return {
      showComponent,
      toggle
    };
  }
};
&lt;/script&gt;

//-----------

//Child.vue
          &lt;template&gt;
  &lt;div&gt;
    &lt;h6&gt;Activated Example&lt;/h6&gt;
      &lt;p&gt;This component is cached and will trigger 'onActivated' when reactivated. {{ incVal }} and userName : {{ userNmae }}&lt;/p&gt;
    &lt;input type=&quot;text&quot; v-model=&quot;userNmae&quot;/&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { defineComponent, onActivated, ref } from 'vue';

export default defineComponent({
  setup() {
    let incVal = ref(0)
    let userNmae = ref('')
    onActivated(() => {
      console.log('Component has been activated ',incVal.value);
      incVal.value++;
      // Perform any necessary logic when the component is reactivated
    });

    return {
      incVal,
      userNmae
    };
  }
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
      title: "onDeactivated()",
      note: [
        {
          text1: `Registers a callback to be called after the component instance is removed from the DOM as part of a tree cached by <b>&lt;KeepAlive&gt;</b>.

<b>This hook is not called during server-side rendering.</b>

In Vue 3, the <b>onDeactivated()</b> lifecycle hook is part of the Composition API and is used in components that are wrapped in <b>&lt;keep-alive&gt;</b>. It is called when a component is deactivated (i.e., when it is hidden and no longer visible, but still cached by <b>&lt;keep-alive&gt;</b>). This allows you to perform specific actions or cleanup tasks when the component is hidden from view.

<b>Purpose of onDeactivated()</b>
The onDeactivated() hook serves several key purposes:

    <b>Cleanup</b>: Provides a place to perform cleanup tasks when the component is no longer visible, such as stopping timers, canceling ongoing requests, or unsubscribing from events.

    <b>State Management</b>: Allows you to manage or save the component's state before it is hidden, ensuring that the component can be restored to its previous state when it is reactivated.

    <b>Resource Management</b>: Helps in managing resources by cleaning up or pausing processes that are not needed while the component is not visible.

<b>When to Use onDeactivated()</b>
The onDeactivated() hook is particularly relevant in scenarios where you use <b>&lt;keep-alive&gt;</b> to cache components for performance reasons. When a component wrapped with v is hidden (by conditionally rendering it with <b>v-if</b> or similar), <b>onDeactivated()</b> is called to handle any deactivation-specific logic.
`,
          code1: `//Parent.vue
          &lt;template&gt;
  &lt;div&gt;
    &lt;button @click=&quot;toggle&quot;&gt;Toggle Component&lt;/button&gt;
    &lt;keep-alive&gt;
      &lt;HelloWorld v-if=&quot;showComponent&quot; /&gt;
    &lt;/keep-alive&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: { HelloWorld },
  setup() {
    const showComponent = ref(true);

    function toggle() {
      showComponent.value = !showComponent.value;
    }

    return {
      showComponent,
      toggle
    };
  }
};
&lt;/script&gt;

//--------------
// child.vue

&lt;template&gt;
  &lt;div&gt;
    &lt;h6&gt;Deactivated Example&lt;/h6&gt;
    &lt;p&gt;This component is cached and will trigger 'onDeactivated' when deactivated. Increment {{ incVal }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { defineComponent, onDeactivated, ref } from 'vue';

export default defineComponent({
  setup() {
    
    const incVal = ref(0)
    onDeactivated(() => {
      console.log('Component has been deactivated', incVal.value);
      incVal.value++;
      // Perform any necessary cleanup when the component is hidden
    });

    return {
      incVal
    };
  }
});
&lt;/script&gt;

          `
        }
      ]
    },
    {
      id: 1,
      title: "onServerPrefetch() Server-Side Rendering Only",
      note: [
        {
          text1: `Registers an async function to be resolved before the component instance is to be rendered on the server.
<b>ts</b> <span style="color:red"> function onServerPrefetch(callback: () => Promise<any>): void </span>
If the callback returns a Promise, the server renderer will wait until the Promise is resolved before rendering the component.

This hook is only called during server-side rendering can be used to perform server-only data fetching.

In Vue 3, the onServerPrefetch() lifecycle hook is part of the Composition API and is used in server-side rendering (SSR) scenarios. It allows you to perform asynchronous data fetching or other preparatory tasks before the server-rendered HTML is generated and sent to the client. This hook is crucial for ensuring that data required by the component is available at the time of rendering, which can improve the performance and SEO of server-rendered applications.

<b>Purpose of onServerPrefetch()</b>
The <b>onServerPrefetch()</b> hook serves several key purposes:

    <b>erver-Side Data Fetching</b>: Allows you to fetch data or perform asynchronous operations on the server before the component is rendered. This ensures that the component has the necessary data when it is initially rendered on the server.
    <b>Improved Performance</b>: By prefetching data on the server, you can reduce the time it takes for the page to load on the client side, since the client receives fully-rendered HTML with the required data already included.
    <b>SEO Optimization</b>: Ensures that the HTML sent to search engines includes the complete content with all the necessary data, improving the visibility and indexing of your pages.

   <b> How onServerPrefetch() Works </b>
    <b>Timing</b>: The onServerPrefetch() hook is called during the server-side rendering process, before the component's HTML is generated and sent to the client. This allows you to perform data fetching and other asynchronous operations before the final HTML is produced.
    <b>Async Operations</b>: You can return a promise from onServerPrefetch(), which will be awaited by Vue before completing the server-side rendering. This ensures that the component is fully prepared with the required data.

    <b>Use Cases</b>
    <b>Preloading Data</b>: Use onServerPrefetch() to preload data that is required for rendering the component, ensuring that the client receives a fully-rendered page with all necessary data.
    <b>SEO-Friendly Pages</b>: Improve the SEO of your pages by ensuring that search engines receive fully-rendered content with pre-fetched data.
    <b>Performance Optimization</b>: Reduce client-side loading times by performing data fetching on the server and sending fully-prepared HTML to the client.
          `,
          code1: `Ex : 1
          <script setup>
import { ref, onServerPrefetch, onMounted } from 'vue'

const data = ref(null)

onServerPrefetch(async () => {
  // component is rendered as part of the initial request
  // pre-fetch data on server as it is faster than on the client
  data.value = await fetchOnServer(/* ... */)
})

onMounted(async () => {
  if (!data.value) {
    // if data is null on mount, it means the component
    // is dynamically rendered on the client. Perform a
    // client-side fetch instead.
    data.value = await fetchOnClient(/* ... */)
  }
})
</script>
//--------
// Ex : 2`
        }
      ]
    },
    {
      id: 1,
      section : "Async Components",
      title: "Suspense()",
      note: [
        {
          text1: `<b>&lt;Suspense&gt;</b> is a built-in component for orchestrating async dependencies in a component tree. It can render a loading state while waiting for multiple nested async dependencies down the component tree to be resolved.
          
          <b>Elevating Vue 3 Applications with defineAsyncComponent and Suspense</b>
<b>Introduction</b>:
In Vue 3, optimizing performance and enhancing user experience are pivotal considerations, particularly in large-scale applications. Two formidable features introduced in Vue 3, defineAsyncComponent and Suspense, offer elegant solutions for handling asynchronous component loading and managing loading states. In this blog post, we'll delve into the intricacies of these features, exploring their benefits, drawbacks, and providing comprehensive code examples for their implementation.

<b>Understanding defineAsyncComponent</b>:
defineAsyncComponent is a function provided by Vue 3 that enables the asynchronous loading of components, facilitating lazy loading and improving application performance. Let's examine the pros and cons of using defineAsyncComponent:

<b>Pros</b>:
<b>Lazy Loading</b>: Enables lazy loading of components, reducing initial bundle size and improving page load times.
<b>Improved Performance</b>: Asynchronously loads components, allowing the main thread to remain unblocked and enhancing overall performance.
<b>Enhanced Scalability</b>: Facilitates the modularization of large applications by loading components on-demand, improving scalability and maintainability.
<b>Optimized Resource Usage</b>: Reduces memory footprint by loading components only when they are needed, optimizing resource usage.

          <b>Understanding Suspense 1</b>:
Suspense is a component provided by Vue 3 that manages loading states and provides fallback content while waiting for asynchronous operations to complete.

The &lt;Suspense&gt; element features two slots: <b>#default</b> and <b>#fallback</b>, each permitting a single immediate child node. If feasible, the default slot's node is displayed; otherwise, the fallback slot's node takes precedence.

During the initial rendering, &lt;Suspense&gt; holds the default slot's content in memory. Should any asynchronous dependencies arise, it transitions to a pending state, exhibiting the fallback content. Upon resolving all asynchronous dependencies, &lt;Suspense&gt; enters a resolved state, presenting the resolved default slot content.

In cases where no asynchronous dependencies are encountered during the initial render, &lt;Suspense&gt; promptly enters a resolved state.

Once in a resolved state, &lt;Suspense&gt; reverts to a pending state only if the root node of the #default slot undergoes replacement. Deeper nested asynchronous dependencies do not trigger a return to a pending state for &lt;Suspense&gt;.

During a reversion, the fallback content isn't immediately displayed. Instead, &lt;Suspense&gt; exhibits the previous #default content while awaiting the resolution of the new content and its asynchronous dependencies. This behavior can be adjusted using the timeout prop: if rendering the new default content surpasses the timeout duration, &lt;Suspense&gt; switches to the fallback content. Setting a timeout value of 0 results in immediate display of the fallback content upon replacement of default content.

          <b>Understanding Suspense 2</b>
Suspense is a concept borrowed from React and has been implemented in Vue 3 to address the problem of handling asynchronous components. Asynchronous components are components that need to fetch data or perform an asynchronous operation before they can be rendered.

In traditional Vue 2.x, handling asynchronous components can be challenging, as the parent component needs to handle the loading state and fallback content manually.

With suspense, Vue 3 simplifies the process of handling asynchronous components by providing a declarative way to specify the loading state and fallback content. It allows developers to define how the application should behave while waiting for asynchronous operations to complete.

<b>Learning and Using Suspense in Vue 3</b>
To learn and use suspense in Vue 3, developers need to understand the following key concepts and techniques:
<b>Async Components</b>: Suspense is primarily used to handle async components. An async component is a component that is loaded asynchronously, such as when fetching data from an API. In Vue 3, async components are defined using the <b>defineAsyncComponent</b> function.
<b>Suspense and SuspenseFallback</b>: Suspense is implemented using the component in Vue 3. The component wraps the async component and allows developers to define a fallback component or content that will be displayed while the async component is loading.
<b>Error Handling</b>: Suspense also provides a way to handle errors that may occur while loading the async component. Developers can use the hook to handle errors and display appropriate error messages or fallback content.

<b>Let's examine the benefits of using Suspense</b>:
<b>Streamlined Loading State Management</b>: Simplifies the management of loading states for asynchronous operations, providing a seamless user experience.
<b>Fallback Content</b>: Allows for the display of fallback content while waiting for asynchronous operations to complete, improving user engagement and perception of performance.
<b>Resource Optimization</b>: By asynchronously loading components and their dependencies, lazy loading optimizes resource usage, diminishes memory footprint, and enhances scalability, making it particularly advantageous for large-scale enterprise applications.
<b>Improved User Experience</b>: The provision of feedback to users through loading indicators or placeholders while components are being loaded elevates the perceived performance and user experience of the application, fostering increased engagement and satisfaction.`,
          code1: `&lt;Suspense&gt;&lt;Suspense&gt;
  &lt;!-- component with nested async dependencies --&gt;
  &lt;Links /&gt;

  &lt;!-- loading state via #fallback slot --&gt;
  &lt;template #fallback&gt;
    &lt;Loader /&gt;
  &lt;/template&gt;
&lt;/Suspense&gt;


//---------------
&lt;template&gt;
  &lt;HelloWorld msg=&quot;Hello Vue 3!&quot; /&gt;
  &lt;Suspense&gt;
    &lt;div&gt;
      &lt;TheEcosystem /&gt;
      &lt;ThePlugins /&gt;
      &lt;TheLinks /&gt;
    &lt;/div&gt;
    &lt;template #fallback&gt;
      &lt;loadingComponent /&gt;
    &lt;/template&gt;
  &lt;/Suspense&gt;
&lt;/template&gt;


//---------------------
&lt;template&gt;
  &lt;suspense&gt;
    &lt;template #default&gt;
      &lt;todo-list /&gt;
    &lt;/template&gt;
    &lt;template #fallback&gt;
      &lt;div&gt;
        Loading...
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/suspense&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  components: {
    TodoList: defineAsyncComponent(() =&gt; import(&#39;./TodoList.vue&#39;))
  }
}
&lt;/script&gt;




////////////////////////////
//-------------- Ex : 1-----------
// UserList.vue
&lt;template&gt;
    &lt;div&gt;
        {{ users }}
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { onMounted, ref } from &#39;vue&#39;;
export default {
    name: &#39;UserList&#39;,
    setup() {
        const users = ref([])
        onMounted(async () =&gt; {
            try{
                const apiRes = await fetch(&#39;https://jsonplaceholder.typicode.com/users&#39;)
                users.value = await apiRes.json()
            }
            catch(err){
                console.log(err)
            }
        })
        return { users }
    }
}
&lt;/script&gt;

//---------- LoadingComponent.vue --------------
&lt;template&gt;
    &lt;div&gt;
        &lt;p&gt;Loading users, please wait...&lt;/p&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
&lt;/script&gt;

//-----------  SuspenseApp.vue ------------
&lt;template&gt;
    &lt;div&gt;
        &lt;Suspense&gt;
            &lt;template #default&gt;
                &lt;UserList /&gt;
            &lt;/template&gt;
            &lt;template #fallback&gt;
                &lt;LoadingComponent /&gt;
            &lt;/template&gt;
        &lt;/Suspense&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { defineAsyncComponent, Suspense } from &#39;vue&#39;;
import LoadingComponent from &#39;./loadingComponent.vue&#39;

const UserList = defineAsyncComponent(() =&gt; import(&#39;./UserList.vue&#39;));
&lt;/script&gt;

///////////////////////////////////////////
//defineAsyncComponent does NOT catch errors inside setup() (like API request failures).
//Handle API errors with errorMessage inside setup().
&lt;!-- UserList.vue --&gt;
&lt;script setup&gt;
import { onMounted, ref } from &#39;vue&#39;;

const users = ref([]);
const errorMessage = ref(null); // ✅ Store API error message

onMounted(async () =&gt; {
  try {
    const apiRes = await fetch(&#39;https://jsonplaceholder.typicode.com/user&#39;); // ❌ WRONG URL (will fail)
    if (!apiRes.ok) throw new Error(\`API error: \${apiRes.statusText}\`); // ✅ Catch HTTP errors

    users.value = await apiRes.json();
  } catch (err) {
    errorMessage.value = err.message; // ✅ Store error message
  }
});
&lt;/script&gt;

&lt;template&gt;
  &lt;div&gt;
    &lt;h2&gt;User List&lt;/h2&gt;
    
    &lt;!-- ✅ Show error message when API call fails --&gt;
    &lt;div v-if=&quot;errorMessage&quot; class=&quot;error&quot;&gt;
      ❌ {{ errorMessage }}
    &lt;/div&gt;

    &lt;!-- ✅ Show users when API is successful --&gt;
    &lt;ul v-else&gt;
      &lt;li v-for=&quot;user in users&quot; :key=&quot;user.id&quot;&gt;
        {{ user.name }} - {{ user.email }}
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style scoped&gt;
.error {
  color: red;
  font-weight: bold;
}
&lt;/style&gt;


//---------------
&lt;template&gt;
    &lt;div&gt;
        &lt;p&gt;Loading users, please wait...&lt;/p&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
&lt;/script&gt;


//--------------------
// &lt;!-- App.vue --&gt;
&lt;template&gt;
    &lt;div&gt;
        &lt;Suspense&gt;
            &lt;template #default&gt;
                &lt;UserList /&gt;
            &lt;/template&gt;
            &lt;template #fallback&gt;
                &lt;LoadingComponent /&gt;
            &lt;/template&gt;
        &lt;/Suspense&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { defineAsyncComponent } from &#39;vue&#39;;
import LoadingComponent from &#39;./LoadingComponent.vue&#39;
const UserList = defineAsyncComponent(() =&gt; import(&#39;./UserList.vue&#39;));
&lt;/script&gt;
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
      title: "defineAsyncComponent",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Add new topic",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      section:`Dependency Injection`,
      title: "provide()",
      note: [
        {
          text1: `Provides a value that can be injected by descendant components.
<b>ts</b> <span style="color:red"> function provide<T>(key: InjectionKey<T> | string, value: T): void </span>

<b>provide()</b> takes two arguments: the key, which can be a string or a symbol, and the value to be injected.

When using TypeScript, the key can be a symbol casted as <b>InjectionKey</b> - a Vue provided utility type that extends <b>Symbol</b>, which can be used to sync the value type between <b>provide()</b> and <b>inject()</b>.

Similar to lifecycle hook registration APIs, <b>provide()</b> must be called synchronously during a component's <b>setup()</b> phase.

In Vue 3, the <b>provide()</b> function is a part of the Composition API and is used to make data or methods available to descendant components in a component tree. It is a way to create a dependency injection system within your Vue application, allowing you to share values across components without having to pass props manually through every level of the component hierarchy.

<b>Purpose of provide()</b>
    <b>Dependency Injection</b>: Allows you to inject data or methods into the component tree so that descendant components can access them without needing to pass them explicitly through props.
    <b>Centralized Data Management</b>: Useful for providing global or shared state across a set of components, such as theme settings, user information, or configuration options.
    <b>Simplified Component Communication</b>: Reduces the need for prop drilling (passing props through multiple layers) by providing a more streamlined way to share data and functionality.

<b>How provide() Works</b>
    <b>Scope</b>: The data or methods provided using provide() are accessible to all descendant components that use the inject() function, regardless of the depth of the component tree.
    <b>Function</b>: provide() is used within a component's setup() function to specify the values that should be available to descendant components.
    <b>Key-Value Pairs</b>: Data is provided as key-value pairs, where the key is a unique identifier used by inject() to retrieve the value.

<b>What is Props Drilling?</b>
Props drilling arises when you need to pass data down a long chain of nested components in Vue. Each intermediate component acts as a mere conduit, forwarding the props it receives to its child without necessarily using them itself. This can lead to:

<b>Verbosity</b>: Components become cluttered with props that they don't directly utilize.
<b>Maintenance Challenges</b>: Changes to the data structure or flow require modifications in multiple components, increasing the risk of regressions.
<b>Reduced Readability</b>: The purpose of individual components becomes less clear with excessive props.

   <b> How to solve It</b>
Option 1 : Use some state management system like vuex or pinia
But but what If my system is not that large It only have one tree of components where passing props is enough ?
Now comes the need of Provider and Inject

<b>Provider (provide)</b>: This feature allows a parent component to provide data or methods to its descendants, regardless of their depth in the component tree.
<b>Inject (inject)</b>: The inject option in Vue allows child components to access the data or methods provided by their ancestors, using a reactive dependency injection mechanism.
`,
          code1: ` &lt;script setup&gt;
          import { ref, provide } from 'vue'
import { countSymbol } from './injectionSymbols'

// provide static value
provide('path', '/project/')

// provide reactive value
const count = ref(0)
provide('count', count)

// provide with Symbol keys
provide(countSymbol, count)
&lt;/script&gt;


// Ex: 1
// ParentComponent.vue:
&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;Parent Component&lt;/h1&gt;
    &lt;HelloWorld /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { defineComponent, provide, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  components: { HelloWorld },
  setup() {
    const message = ref('Hello from ParentComponent');

    // Provide the message value to all descendant components
    provide('sharedMessage', message);

    return {};
  }
});
&lt;/script&gt;

//---------
// ChildComponent.vue:
&lt;template&gt;
  &lt;div&gt;
    &lt;h2&gt;Child Component&lt;/h2&gt;
    &lt;p&gt;{{ sharedMessage }}&lt;/p&gt;
    &lt;WelcomeItem /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { defineComponent, inject } from 'vue';
import WelcomeItem from './WelcomeItem.vue';

export default defineComponent({
  components: { WelcomeItem },
  setup() {
    // Inject the shared message provided by ParentComponent
    const sharedMessage = inject('sharedMessage');

    return {
      sharedMessage
    };
  }
});
&lt;/script&gt;

//--------
// GrandchildComponent.vue:
&lt;template&gt;
  &lt;div&gt;
    &lt;h3&gt;Grandchild Component&lt;/h3&gt;
    &lt;p&gt;{{ sharedMessage }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import { defineComponent, inject } from 'vue';

export default defineComponent({
  setup() {
    // Inject the shared message provided by ParentComponent
    const sharedMessage = inject('sharedMessage');

    return {
      sharedMessage
    };
  }
});
&lt;/script&gt;`       
      },
      {
        text1: `<b>Explanation</b>
    <b>1) provide() in ParentComponent</b>:
        -> In <b>ParentComponent.vue, provide()</b> is used to make a reactive reference message available to all descendant components.
        -> The key <b>sharedMessage</b> is used to identify the provided value.

    <b>2) inject() in ChildComponent and GrandchildComponent</b>:
        -> In <b>ChildComponent.vue</b> and <b>GrandchildComponent.vue</b>, <b>inject()</b> is used to access the value provided by the ancestor component.
        -> Both <b>ChildComponent</b> and <b>GrandchildComponent</b> can access the <b>sharedMessage</b> value without needing to pass it through props.`,
        code1: ``
      }
      ]
    },
    {
      id: 1,
      title: "inject()",
      note: [
        {
          text1: `Injects a value provided by an ancestor component or the application (via <b>app.provide()</b>).
          
          In Vue.js, the <b>inject()</b> function is part of the Composition API and is used to access properties or methods that have been provided by an ancestor component using the provide() function. This mechanism allows for dependency injection within the component tree, which can simplify state and method sharing among components.

    <b>Purpose of inject()</b>
    <b>Dependency Injection</b>: inject() allows components to receive data or methods from their ancestor components without passing them explicitly through props. This can make component communication more efficient and reduce the need for prop drilling (passing props through many layers of components).

    <b>Global or Shared State</b>: It helps in sharing state or methods across multiple components that might be deeply nested without needing to pass them through intermediate components.

    <b>How inject() Works</b>
    <b>Scope</b>: inject() retrieves values that have been provided by an ancestor component. It does not have access to data or methods that are not provided up the component tree.
    <b>Key-Value Pairs</b>: The values provided with provide() are accessed in descendant components using inject() with the same key.

    The first argument is the injection key. Vue will walk up the parent chain to locate a provided value with a matching key. If multiple components in the parent chain provides the same key, the one closest to the injecting component will "shadow" those higher up the chain. If no value with matching key was found, <b>inject()</b> returns <b>undefined</b> unless a default value is provided.

The second argument is optional and is the default value to be used when no matching value was found.

The second argument can also be a factory function that returns values that are expensive to create. In this case, <b>true</b> must be passed as the third argument to indicate that the function should be used as a factory instead of the value itself.

Similar to lifecycle hook registration APIs, <b>inject()</b> must be called synchronously during a component's setup() phase.

When using TypeScript, the key can be of type of <b>InjectionKey</b> - a Vue-provided utility type that extends <b>Symbol</b>, which can be used to sync the value type between <b>provide()</b> and <b>inject()</b>.
          `,
          code1: `&lt;script setup&gt;
import { inject } from 'vue'
import { countSymbol } from './injectionSymbols'

// inject static value without default
const path = inject('path')

// inject reactive value
const count = inject('count')

// inject with Symbol keys
const count2 = inject(countSymbol)

// inject with default value
const bar = inject('path', '/default-path')

// inject with function default value
const fn = inject('function', () => {})

// inject with default value factory
const baz = inject('factory', () => new ExpensiveObject(), true)
&lt;/script&gt;

// Same Example in provide()`
        }
      ]
    },
    {
      id: 1,
      title: "hasInjectionContext()",
      note: [
        {
          text1: `Returns true if <b>inject()</b> can be used without warning about being called in the wrong place (e.g. outside of <b>setup()</b>). This method is designed to be used by libraries that want to use <b>inject()</b> internally without triggering a warning to the end user.
          
          <b>ts</b> <span style="color:red"> function hasInjectionContext(): boolean </span>

          n Vue 3, <b>hasInjectionContext()</b> is a utility function that allows you to determine whether the current component has an injection context. This is useful for scenarios where you need to check if a component is within a context where values have been provided using Vue's provide() function.

    <b>Purpose of hasInjectionContext()</b>
    <b>Check Injection Availability</b>: It helps in verifying if a component is part of a hierarchy where <b>provide()</b> has been used to inject dependencies. This can be useful in conditional logic where certain functionality should only be available if the context is provided.
    <b>Conditional Behavior</b>: It allows components to conditionally adapt their behavior based on the presence of injected values, which can help in implementing fallback mechanisms or ensuring proper context-based functionality.

<b>How hasInjectionContext() Works</b>
<b>hasInjectionContext()</b> is a function provided by Vue that checks if the current component has access to an injection context. It's especially useful in combination with the Composition API when working with <b>provide()</b> and <b>inject()</b>.

Suppose you are told that you can use inject in the component that you are working on. After debugging for a day you find out that your component don't share the parent that have the provider as people don't draw graph about them So instead of wasting a whole day vue provide you better solution hasInjectionContext 
          `,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Add new topic",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      section:'interview',
      title: "Add new topic",
      note: [
        {
          text1: `<a href="https://arc.dev/talent-blog/vue-interview-questions/" target="_blank">vue-interview-questions </a>`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "vue-interview-questions",
      note: [
        {
          text1: `<div class="post-text">
                      
<title>Vue 3 Interview Questions &amp; Answers</title>

<ol>
    <li>
        <p><strong>What is Vue 3?  How does it differ from Vue 2?</strong></p>
        <ul>
            <li><strong>Answer:</strong> Vue 3 is the latest major version of the Vue.js framework. Key differences from Vue 2 include improved performance due to the Composition API and Proxy-based reactivity system, better TypeScript support, enhanced tree-shaking capabilities for smaller bundle sizes, and a more streamlined API.  The Composition API offers a more organized way to manage component logic compared to the Options API in Vue 2.</li>
        </ul>
    </li>
    <li>
        <p><strong>Explain the Composition API. What are its advantages over the Options API?</strong></p>
        <ul>
            <li><strong>Answer:</strong> The Composition API provides a way to organize component logic using composable functions.  This improves code reusability, readability, and maintainability, especially in complex components. Advantages over the Options API include better code organization (grouping related logic), improved reusability of logic across components, and easier testing due to better separation of concerns.</li>
        </ul>
    </li>
    <li>
        <p><strong>What is Reactivity in Vue 3? How does it work?</strong></p>
        <ul>
            <li><strong>Answer:</strong> Reactivity is the mechanism that allows Vue to automatically update the DOM when data changes. In Vue 3, it's based on Proxies, which offer more comprehensive tracking of data changes compared to Vue 2's Object.defineProperty.  Proxies track changes to objects and their properties, triggering updates only when necessary.</li>
        </ul>
    </li>
    <li>
        <p><strong>Explain the difference between \`ref\` and \`reactive\` in Vue 3.</strong></p>
        <ul>
            <li><strong>Answer:</strong> \`ref\` creates a reactive single value.  It's used for primitive data types (e.g., numbers, strings, booleans). \`reactive\` creates a reactive object.  It's used for objects and arrays, making all their properties reactive.</li>
        </ul>
    </li>
    <li>
        <p><strong>What are computed properties in Vue 3? When would you use them?</strong></p>
        <ul>
            <li><strong>Answer:</strong> Computed properties are reactive properties that are derived from other reactive data.  They're automatically updated when the data they depend on changes. Use them when you need to perform calculations or transformations on existing data without manually managing updates.</li>
        </ul>
    </li>
    <li>
        <p><strong>What are watchers in Vue 3? How are they different from computed properties?</strong></p>
        <ul>
            <li><strong>Answer:</strong> Watchers track changes to a specific reactive data property and execute a callback function when a change is detected.  Unlike computed properties, watchers can perform asynchronous operations and have more control over when and how the update happens.  Computed properties are primarily for derived data, while watchers handle side effects or complex updates based on data changes.</li>
        </ul>
    </li>
    <li>
        <p><strong>Explain the lifecycle hooks in Vue 3. Give examples of when you would use them.</strong></p>
        <ul>
            <li><strong>Answer:</strong> Vue 3 lifecycle hooks are functions that are called at specific stages of a component's lifecycle (e.g., \`onMounted\`, \`onUpdated\`, \`onUnmounted\`).  \`onMounted\` is used for fetching data or performing DOM manipulations after the component is mounted. \`onUpdated\` is used for reacting to data changes. \`onUnmounted\` is used for cleanup actions before the component is unmounted.</li>
        </ul>
    </li>
    <li>
        <p><strong>What are slots in Vue 3 and how are they used?</strong></p>
        <ul>
            <li><strong>Answer:</strong> Slots are used to inject content into a component from its parent. They allow for creating reusable components that can be customized by the parent component.  They can be named slots for more control over content placement.</li>
        </ul>
    </li>
    <li>
        <p><strong>How do you handle events in Vue 3 components?</strong></p>
        <ul>
            <li><strong>Answer:</strong>  Events are handled using the \`v-on\` directive (or the \`@\` shorthand).  The directive binds a JavaScript function to an event on an HTML element. The function is called when the event occurs.</li>
        </ul>
    </li>
    <li>
        <p><strong>Explain the concept of props in Vue 3. How are they used for communication between components?</strong></p>
        <ul>
            <li><strong>Answer:</strong> Props are data passed from a parent component to a child component. They allow for unidirectional data flow, enhancing component reusability and maintainability.  The parent component defines the props, and the child component receives them as read-only properties.</li>
        </ul>
    </li>
    <li>
        <p><strong>Describe how to use \`provide\` and \`inject\` for dependency injection in Vue 3.</strong></p>
        <ul>
            <li><strong>Answer:</strong> \`provide\` makes a value available to all its descendants. \`inject\` allows a component to access the provided value. This is useful for dependency injection, allowing components to access shared data or services without relying on prop drilling.</li>
        </ul>
    </li>
    <li>
        <p><strong>What are directives in Vue 3? Give some examples.</strong></p>
        <ul>
            <li><strong>Answer:</strong> Directives are special attributes that extend the functionality of HTML elements.  Examples include \`v-bind\` (for dynamic binding), \`v-on\` (for event handling), \`v-model\` (for two-way data binding), and \`v-if\` (for conditional rendering).</li>
        </ul>
    </li>
    <li>
        <p><strong>Explain how to use \`v-model\` in Vue 3. What are its limitations?</strong></p>
        <ul>
            <li><strong>Answer:</strong> \`v-model\` provides two-way data binding between a form element and a data property.  Its limitations include difficulty with complex components and potential issues with unexpected updates when dealing with non-standard input types.</li>
        </ul>
    </li>
    <li>
        <p><strong>What are custom directives in Vue 3 and how would you create one?</strong></p>
        <ul>
            <li><strong>Answer:</strong> Custom directives extend Vue's built-in directives. They are created by registering an object with \`app.directive\`.  This object can contain functions for handling various lifecycle events of the directive (e.g., \`created\`, \`updated\`, \`beforeUnmount\`).</li>
        </ul>
    </li>
    <li>
        <p><strong>How do you handle routing in a Vue 3 application?</strong></p>
        <ul>
            <li><strong>Answer:</strong> Routing is typically handled using the Vue Router library. It allows for creating single-page applications with multiple views and navigation between them.</li>
        </ul>
    </li>
    <li>
        <p><strong>Explain how to use Vuex in a Vue 3 application.</strong></p>
        <ul>
            <li><strong>Answer:</strong> Vuex is a state management library for Vue.js. It provides a centralized store for managing application data, allowing components to easily access and modify the data in a predictable and organized way.  It employs concepts like mutations (for synchronously changing the state) and actions (for asynchronous operations).</li>
        </ul>
    </li>
    <li>
        <p><strong>What are some best practices for writing clean and maintainable Vue 3 code?</strong></p>
        <ul>
            <li><strong>Answer:</strong> Best practices include using the Composition API for better code organization, keeping components small and focused (Single Responsibility Principle), utilizing props and events for component communication, employing a consistent coding style, and using a state management solution (like Vuex) for complex applications.</li>
        </ul>
    </li>
    <li>
        <p><strong>How do you perform unit testing in Vue 3?  What tools are commonly used?</strong></p>
        <ul>
            <li><strong>Answer:</strong> Unit testing in Vue 3 typically uses libraries like Jest and Vitest for testing logic, and tools like Vue Test Utils for interacting with components and rendering them in a testing environment.  Testing focuses on isolating individual units of code (components, functions) to verify their behavior.</li>
        </ul>
    </li>
    <li>
        <p><strong>How do you handle asynchronous operations in Vue 3?</strong></p>
        <ul>
            <li><strong>Answer:</strong> Asynchronous operations are commonly handled using promises, async/await, or libraries like Axios for making HTTP requests.  Data fetching often involves using lifecycle hooks like \`onMounted\` to make requests after component creation.</li>
        </ul>
    </li>
    <li>
        <p><strong>Describe how you would integrate a third-party library into a Vue 3 project.</strong></p>
        <ul>
            <li><strong>Answer:</strong> Third-party libraries are usually integrated using npm or yarn.  After installing the library, it can be imported into Vue components using ES modules (\`import\`) and then used within the component's logic.</li>
        </ul>
    </li>
    <li>
        <p><strong>Explain the difference between \`$nextTick\` and \`setTimeout\`.</strong></p>
        <ul>
            <li><strong>Answer:</strong> \`$nextTick\` queues a callback to be executed after the next DOM update cycle.  \`setTimeout\` schedules a callback to be executed after a specified delay.  \`$nextTick\` is specific to Vue and ensures the callback runs after Vue has finished updating the DOM.</li>
        </ul>
    </li>
    <li>
        <p><strong>How would you optimize the performance of a Vue 3 application?</strong></p>
        <ul>
            <li><strong>Answer:</strong> Optimization strategies include using \`v-memo\` or \`v-once\` for preventing unnecessary re-renders, using \`key\` attributes in lists, optimizing computed properties to avoid expensive calculations, code-splitting for lazy loading components, and using a build process with tree-shaking to reduce bundle size.</li>
        </ul>
    </li>
    <li>
        <p><strong>What are some common security considerations when developing Vue 3 applications?</strong></p>
        <ul>
            <li><strong>Answer:</strong> Security considerations include sanitizing user input to prevent cross-site scripting (XSS) attacks, protecting against cross-site request forgery (CSRF) attacks, using HTTPS, and carefully managing authentication and authorization.</li>
        </ul>
    </li>
    <li>
        <p><strong>Explain your understanding of the Vue 3 reactivity system's performance improvements compared to Vue 2.</strong></p>
        <ul>
            <li><strong>Answer:</strong> Vue 3's use of Proxies allows for more efficient tracking of data changes compared to Vue 2's \`Object.defineProperty\`. Proxies track changes to entire objects, not just individual properties, leading to more granular and efficient reactivity updates, reducing unnecessary re-renders.</li>
        </ul>
    </li>
    <li>
        <p><strong>How would you approach building a complex component in Vue 3 using the Composition API?</strong></p>
        <ul>
            <li><strong>Answer:</strong> Break down the component's logic into smaller, reusable composable functions.  Each function handles a specific aspect of the component's functionality.  This improves readability, maintainability, and testability.</li>
        </ul>
    </li>
    <li>
        <p><strong>What are some common debugging techniques you use when working with Vue 3?</strong></p>
        <ul>
            <li><strong>Answer:</strong> Techniques include using the Vue Devtools browser extension for inspecting components, data, and reactivity, using the browser's developer console to log data and check for errors, employing logging statements within components, and using testing frameworks for identifying issues during development.</li>
        </ul>
    </li>
    <li>
        <p><strong>How would you handle error handling in a Vue 3 application?</strong></p>
        <ul>
            <li><strong>Answer:</strong> Implement error handling using \`try...catch\` blocks for handling synchronous errors and \`.catch()\` for handling asynchronous errors. Use a global error handler to catch unhandled errors. Display user-friendly error messages to the user while logging detailed error information for debugging purposes.</li>
        </ul>
    </li>
    <li>
        <p><strong>Explain the concept of a "single source of truth" in Vuex and why it's important.</strong></p>
        <ul>
            <li><strong>Answer:</strong> In Vuex, the single source of truth refers to the centralized store containing all the application's state. This is important because it ensures consistency and predictability, prevents data inconsistencies across components, and simplifies state management and debugging.</li>
        </ul>
    </li>
    <li>
        <p><strong>How do you manage state in a large Vue 3 application?</strong></p>
        <ul>
            <li><strong>Answer:</strong> For large applications, use Vuex (or Pinia) for centralized state management.  Organize the store into modules to break down the state into smaller, more manageable parts.  Consider using patterns like normalization to efficiently handle complex data structures.</li>
        </ul>
    </li>
    <li>
        <p><strong>Describe your experience with TypeScript in Vue 3.</strong></p>
        <ul>
            <li><strong>Answer:</strong> [Describe your experience.  If you have experience, detail your usage of types, interfaces, and how it improved code quality. If not, mention you're familiar with the concept and are eager to learn more.]</li>
        </ul>
    </li>
    <li>
        <p><strong>How would you handle form validation in a Vue 3 application?</strong></p>
        <ul>
            <li><strong>Answer:</strong> Use a validation library like VeeValidate or build a custom validation system.  Use reactive properties to store validation errors and display them next to the form inputs.  Validate form data on submission and provide feedback to the user.</li>
        </ul>
    </li>
    <li>
        <p><strong>Explain your understanding of the virtual DOM in Vue 3.</strong></p>
        <ul>
            <li><strong>Answer:</strong> The virtual DOM is a lightweight representation of the actual DOM. Vue uses it to efficiently update the real DOM by comparing the new virtual DOM with the previous one and only updating the parts that have changed, leading to improved performance.</li>
        </ul>
    </li>
    <li>
        <p><strong>How do you handle internationalization (i18n) in a Vue 3 application?</strong></p>
        <ul>
            <li><strong>Answer:</strong> Use a library like Vue I18n to manage translations. This allows for dynamically switching between languages and managing translations efficiently.</li>
        </ul>
    </li>
    <li>
        <p><strong>What is the purpose of the \`Teleport\` component in Vue 3?</strong></p>
        <ul>
            <li><strong>Answer:</strong> The \`Teleport\` component allows you to render a component's template to a different part of the DOM than its parent.  This is useful for modals, tooltips, or other UI elements that need to be rendered outside the component's typical render tree.</li>
        </ul>
    </li>
    <li>
        <p><strong>Explain the concept of Suspense in Vue 3.</strong></p>
        <ul>
            <li><strong>Answer:</strong> Suspense is used for handling asynchronous operations within components.  It allows for displaying a loading indicator while awaiting the results of an asynchronous operation, improving the user experience.</li>
        </ul>
    </li>
    <li>
        <p><strong>How would you optimize large lists in Vue 3 for better performance?</strong></p>
        <ul>
            <li><strong>Answer:</strong> Use the \`key\` prop to efficiently update lists. Consider using virtual scrolling libraries like \`vue-virtual-scroller\` for handling very large lists.</li>
        </ul>
    </li>
    <li>
        <p><strong>What is the difference between \`defineComponent\` and the Options API in Vue 3?</strong></p>
        <ul>
            <li><strong>Answer:</strong> \`defineComponent\` is the recommended way to define components in Vue 3, providing type safety and improved organization when used with the Composition API. The Options API is still supported but is generally less preferred for larger or more complex applications.</li>
        </ul>
    </li>
    <li>
        <p><strong>How do you structure a large Vue 3 project?</strong></p>
        <ul>
            <li><strong>Answer:</strong> Use a component-based architecture, breaking down the application into smaller, reusable components.  Organize components into folders based on their functionality.  Use a state management library like Vuex or Pinia for managing application state.</li>
        </ul>
    </li>
    <li>
        <p><strong>Explain your experience with server-side rendering (SSR) in Vue 3.</strong></p>
        <ul>
            <li><strong>Answer:</strong> [Describe your experience with SSR, including any frameworks used.  Mention challenges and solutions encountered if applicable.]</li>
        </ul>
    </li>
    <li>
        <p><strong>Describe a challenging Vue 3 project you worked on and how you overcame the challenges.</strong></p>
        <ul>
            <li><strong>Answer:</strong> [Describe a specific project, highlighting the challenges encountered and the solutions implemented.  Focus on your problem-solving skills and technical abilities.]</li>
        </ul>
    </li>
    <li>
        <p><strong>How do you stay up-to-date with the latest developments in Vue 3?</strong></p>
        <ul>
            <li><strong>Answer:</strong> [Mention resources you use, such as the official Vue.js documentation, blog posts, online courses, and community forums.]</li>
        </ul>
    </li>
    <li>
        <p><strong>What are your preferred tools and technologies for developing Vue 3 applications?</strong></p>
        <ul>
            <li><strong>Answer:</strong> [List your preferred tools, including IDEs, build tools, testing frameworks, and state management libraries.]</li>
        </ul>
    </li>
    <li>
        <p><strong>Why are you interested in this position?</strong></p>
        <ul>
            <li><strong>Answer:</strong> [Tailor your answer to the specific job description and company.  Highlight your relevant skills and experience and explain why you're a good fit for their team.]</li>
        </ul>
    </li>
    <li>
        <p><strong>What are your salary expectations?</strong></p>
        <ul>
            <li><strong>Answer:</strong> [Research the average salary for similar roles in your area and provide a range that reflects your experience and skills.]</li>
        </ul>
    </li>
    </ol><br><p>Thank you for reading our blog post on 'Vue 3 Interview Questions and Answers for 2 years experience'.We hope you found it informative and useful.Stay tuned for more insightful content!</p>                    </div>`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "next level questions",
      note: [
        {
          text1: `<b>1. Explain the internal reactivity system in Vue 3. How does Vue track and react to changes in reactive data?</b>
Answer: Vue 3 uses a reactive system based on <b>Proxies</b>. When a reactive object is created using <b>reactive()</b> or <b>ref()</b>, Vue 3 wraps the object in a Proxy. The Proxy intercepts getter and setter operations, allowing Vue to track dependencies during rendering (via getter calls) and update the DOM when the reactive data changes (via setter calls). The reactivity system is optimized with a dependency tracking mechanism and a <b>reactivity graph</b>, which ensures that only components affected by the change are re-rendered.

<b>2. How does Vue 3 handle performance optimizations like virtual DOM, lazy loading, and tree-shaking?</b>
Answer:
<b>Virtual DOM</b>: Vue 3 uses a virtual DOM to efficiently render updates. When the state of a component changes, Vue creates a virtual DOM tree and compares it with the previous tree (via a diffing algorithm). It then calculates the minimal changes needed to update the actual DOM.
<b>Lazy Loading</b>: Vue 3 supports code splitting out-of-the-box with defineAsyncComponent and dynamic imports. This allows you to load components on demand, which helps improve the initial load time of the application.
<b>Tree Shaking</b>: Vue 3 has better support for tree-shaking due to its modular architecture and smaller bundle size. It eliminates dead code during the build process when used with modern bundlers like Webpack or Vite.

<b>3. Can you explain how Vue 3 handles async components, and what are some best practices when working with them?</b>
Answer: In Vue 3, async components are loaded on demand using <b>defineAsyncComponent</b> or dynamic <b>import()</b>. The best practices include:
<b>Error Handling</b>: Use the <b>errorCaptured</b> lifecycle hook or <b>onErrorCaptured</b> to handle loading failures gracefully.
<b>Loading States</b>: Use <b>Suspense</b> or custom loading indicators to show progress while components are being loaded.
<b>Caching</b>: Use Vue's built-in caching strategies for async components to avoid unnecessary re-fetching.
Example:
const AsyncComponent = defineAsyncComponent({
  loader: () => import('./MyComponent.vue'),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 200, // Optional delay for loading
  timeout: 3000 // Timeout in milliseconds
});

<b>4. What is the Composition API's impact on testing in Vue 3, and how would you test a component using Composition API?</b>
Answer: The Composition API encourages better code modularity and reusability, making unit testing easier. With Composition API, you can test smaller, more focused pieces of logic (e.g., reactive state, methods) instead of testing large components. Some key strategies for testing:
<b>Using Vue Test Utils</b>: You can use Vue Test Utils to mount components and interact with them, including components using <b>setup()</b>.
<b>Mocking dependencies</b>: You can mock external dependencies (like API calls) using spies or stubs.
<b>Testing reactive state and lifecycle hooks</b>: You can directly test reactive data or lifecycle methods (e.g., <b>onMounted</b>) in isolation, making the tests more granular and focused.
Example:
import { mount } from '@vue/test-utils'
import MyComponent from '@/components/MyComponent.vue'

describe('MyComponent', () => {
  it('should display the correct message', async () => {
    const wrapper = mount(MyComponent)
    await wrapper.setData({ message: 'Hello Vue!' })
    expect(wrapper.text()).toContain('Hello Vue!')
  })
})

<b>5. Explain how to implement a custom directive in Vue 3. Can you give an example of a directive you've built?</b>
Answer: Custom directives in Vue 3 are created using the <b>app.directive()</b> method. You can define hooks like <b>beforeMount, mounted, beforeUpdate</b>, and <b>updated</b> to handle specific lifecycle events for the directive.

Example of a custom <b>v-focus</b> directive:
const focusDirective = {
  mounted(el) {
    el.focus();
  }
};
createApp(App).directive('focus', focusDirective).mount('#app');
<b>Use in template</b>:
&lt;input v-focus /&gt;
Custom directives are a powerful tool when you need low-level DOM manipulation that isn't easily handled by Vue's standard tools.

<b>6. How would you manage global state in a large Vue 3 application, and what are the pros/cons of using Vuex vs. the Composition API for state management?</b>
Answer:
<b>Vuex</b>: Vuex is a state management library for Vue.js that centralizes state management in larger applications. It has clear patterns for managing state (e.g., getters, actions, mutations) and makes it easy to implement features like time-travel debugging and devtools support. Vuex can become boilerplate-heavy for large apps.
<b>Composition API</b>: In smaller applications, or for more localized state management, the Composition API can be used in combination with reactive and ref to manage state without needing Vuex. This approach provides a more flexible and modular way to manage state across the app.
<b>Pros/Cons</b>:
<b>Vuex</b>: Great for large-scale state management with complex mutations, actions, and centralized state. However, it introduces boilerplate and requires a more structured approach.
<b>Composition API</b>: Less boilerplate, but lacks built-in tools for managing state across multiple components in larger applications. You would typically need to use provide/inject or create custom hooks to manage shared state.

<b>7. How does Vue 3 handle TypeScript integration? What are some best practices when using TypeScript with Vue 3?</b>
Answer: Vue 3 has improved TypeScript support compared to Vue 2. It provides better type inference, a more structured API for defining components, and tools like <b>defineComponent, reactive()</b>, and <b>ref()</b> with better type inference. Best practices for using TypeScript with Vue 3:
Use <b>defineComponent()</b> to define components with proper typing.
Use types for props, emitted events, and state to ensure type safety.
Make use of <b>Vue 3's Composition API</b> to better organize code and improve type inference.
Leverage <b>IDE support</b> to enhance the developer experience with Vue 3 and TypeScript.
Example:

import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'MyComponent',
  props: {
    message: {
      type: String,
      required: true
    }
  },
  setup() {
    const count = ref<number>(0)
    return { count }
  }
})

<b>8. What are some challenges you might face when integrating Vue 3 with third-party libraries or legacy systems, and how do you overcome them?</b>
Answer:
<b>Challenge 1: Library Compatibility</b>: Some third-party libraries or legacy systems might not support Vue 3. In such cases, you can either look for Vue 3-compatible libraries or create wrapper components to bridge the gap.
<b>Challenge 2: Mixing Vue 2 and Vue 3 code</b>: For large migrations, you may need to run Vue 2 and Vue 3 together. This can be achieved using the <b>Vue 2-to-3 migration build</b>, which helps manage compatibility issues between versions.
<b>Challenge 3: Event handling or state management</b>: Integrating with non-Vue code might require using Vue's <b>provide/inject</b> API or event buses to manage communication between Vue and third-party components.

<b>9. What are the considerations for Vue 3 in terms of accessibility (a11y), and what tools or strategies would you use to ensure an accessible application?</b>
Answer: Accessibility is crucial in modern web applications, and Vue 3 provides several tools to ensure accessibility:
<b>Focus Management</b>: Use directives like <b>v-focus</b> or <b>nextTick</b> to manage focus within the application.
<b>ARIA roles and attributes</b>: Ensure that you use the appropriate ARIA attributes in templates and elements to improve accessibility.
<b>Keyboard Navigation</b>: Ensure that interactive elements are accessible via keyboard navigation (e.g., <b>tabindex, aria-label</b>).
<b>Vue A11y Plugin</b>: Tools like <b>eslint-plugin-vue-a11y</b> can be used to automatically lint templates for accessibility issues.

<b>10. Can you explain how Vue 3's <u>Suspense</u> feature works and how it can be used in server-side rendering (SSR)?</b>
Answer: <b>Suspense</b> allows you to handle asynchronous rendering more effectively. It works by pausing the component's rendering until its dependencies (like async components or data) are resolved. During this wait, a fallback component can be shown, enhancing the user experience by reducing the perception of delay.
In SSR, Suspense is useful for rendering async components on the server side and sending a complete HTML response to the client. When the client-side app hydrates, Vue resumes rendering without having to re-fetch data or re-render async components.

Example usage in SSR:
&lt;Suspense&gt;
  &lt;template #default&gt;
    &lt;AsyncComponent /&gt;
  &lt;/template&gt;
  &lt;template #fallback&gt;
    &lt;div&gt;Loading...&lt;/div&gt;
  &lt;/template&gt;
&lt;/Suspense&gt;`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Add new topic",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
  ]

}






