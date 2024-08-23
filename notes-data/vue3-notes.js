// Composition API: A new API that allows for more flexible and reusable logic through setup(), ref(), reactive(), and more.

//   Teleport: A new feature for rendering content outside the parent component’s DOM hierarchy.

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

const Links1 = 'vue-notes'
const Links2 = 'vue3'
const Links3 = 'vue-x'
const Links4 = 'vuejs-projects'

const isHighlighted = 'vue3'

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
According to Vue’s official documentation, Composition API exposes the following APIs:

<b>Reactivity API</b>, e.g. <b>ref()</b> and <b>reactive()</b> that allow us to directly create reactive state, computed state, and watchers.
<b>Lifecycle Hooks</b>, e.g. <b>onMounted()</b> and <b>onUnmounted()</b> that allow us to programmatically hook into the component lifecycle.
<b>Dependency Injection</b>, i.e. <b>provide()</b> and <b>inject()</b> that allow us to leverage Vue's dependency injection system while using Reactivity APIs.

The Composition API is a new addition to Vue 3 that offers a more flexible and scalable way of organizing and reusing logic within components. It enables developers to structure the component’s logic based on composition functions. Here are some key characteristics of the Composition API:

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
<b>Description</b>: Similar to the Options API, the Composition API retains lifecycle hooks, enabling developers to execute custom logic at various points in the component’s lifecycle.
<b>Use Case</b>: Performing actions when the component is created, mounted, or updated.

<b>Composition Functions</b>:
<b>Description</b>: The Composition API encourages the creation of functions that encapsulate logic, promoting reusability and modularity.
<b>Use Case</b>: Defining and reusing logic in a more granular and organized manner.
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
          img : `../assets/images/vue/composition API vs Options API.webp`
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
          img : `../assets/images/vue/composition-API-vs-Options-API-2.webp`
        }
      ]
    },
    {
      id: 1,
      title: "composable function:",
      note: [
        {
          text1: `If we were to implement the mouse tracking functionality using the Composition API directly inside a component, it would look like this:

          `,
          code1: `&lt;script setup&gt;
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
      title: "add new topic",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "add new topic",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
  ]
  
}






