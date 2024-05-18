// npm install @babel/preset-env @babel/preset-react babel-loader
// npm install webpack webpack-cli
// npm install --save html-loader
// /////////////////////////////////////


// ////////////////////////////////////
// AFF
// ================================================================
// American First Finance provides finance service and help consumers obtain payment plans to purchase the goods and services that they want and at the same time help merchants and service suppliers increase sales. They can approve up to 80% of consumers, and offer a world class customer service experience.


// American First Finance helps consumers obtain payment plans to purchase what they want and at the same time help merchants increase sales. We can approve up to 80% of consumers, and offer a world class customer service experience.


// AFF offer programs with over 86% approval rates. In most cases our customers can be approved instantly by filling out a simple one page application.
// --------------------------------------------------------------
// Get approval amounts from $300 up to $5,000† and enjoy a network of 20,000+ stores to choose from.

// Simply find a store and apply online with AFF. If approved, we’ll give you the ability to transact at the store you selected.

// Our network of fine merchants includes stores you already know and love – here are just a few!
// --------------------------------------------------------------
// RISA Retail Installment Sales Agreement (closed-end, interest-bearing)
// Lease-to-own (“LTO”) (uses a “turn” or multiple)
// Bank Installment Loan – Merchant Funded (closed-end, interest-bearing)
// Bank Installment Loan – Consumer Funded (closed-end, interest-bearing)
// Bank 2-Tier “true-secondary” point-of-sale (“POS”) Installment Loan (closed-end, interest-bearing)
// Bank Line of Credit (open-end, fee-based) – launching 2020!
// --------------------------------------------------------------
// A rent-to-own lease refers to an alternative method of acquiring quality household items like furniture (including mattresses), appliances, electronics, or other consumer goods. Also known as a lease-to-own payment plan, this option can allow consumers with bad credit an option to access products without making substantial upfront payments.
// ================================================================
// ///////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////














// 1. What is React?
// React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for applications with a single page. It is helpful in building complex and reusable user interface(UI) components of mobile and web applications as it follows the component-based approach.

// The important features of React are:

// It supports server-side rendering.
// It will make use of the virtual DOM rather than real DOM (Data Object Model) as RealDOM manipulations are expensive.
// It follows unidirectional data binding or data flow.
// It uses reusable or composable UI components for developing the view.

// 2. What are the advantages of using React?
// MVC is generally abbreviated as Model View Controller.

// Use of Virtual DOM to improve efficiency: React uses virtual DOM to render the view. As the name suggests, virtual DOM is a virtual representation of the real DOM. Each time the data changes in a react app, a new virtual DOM gets created. Creating a virtual DOM is much faster than rendering the UI inside the browser. Therefore, with the use of virtual DOM, the efficiency of the app improves.
// Gentle learning curve: React has a gentle learning curve when compared to frameworks like Angular. Anyone with little knowledge of javascript can start building web applications using React.
// SEO friendly: React allows developers to develop engaging user interfaces that can be easily navigated in various search engines. It also allows server-side rendering, which boosts the SEO of an app.
// Reusable components: React uses component-based architecture for developing applications. Components are independent and reusable bits of code. These components can be shared across various applications having similar functionality. The re-use of components increases the pace of development.
// Huge ecosystem of libraries to choose from: React provides you with the freedom to choose the tools, libraries, and architecture for developing an application based on your requirement.

// 3. What are the limitations of React?
// The few limitations of React are as given below:

// React is not a full-blown framework as it is only a library.
// The components of React are numerous and will take time to fully grasp the benefits of all.
// It might be difficult for beginner programmers to understand React.
// Coding might become complex as it will make use of inline templating and JSX.

// 4. What is useState() in React?
// The useState() is a built-in React Hook that allows you for having state variables in functional components. It should be used when the DOM has something that is dynamically manipulating/controlling.

// In the below-given example code, The useState(0) will return a tuple where the count is the first parameter that represents the counter’s current state and the second parameter setCounter method will allow us to update the state of the counter.

// We can make use of setCounter() method for updating the state of count anywhere. In this example, we are using setCounter() inside the setCount function where various other things can also be done. The idea with the usage of hooks is that we will be able to keep our code more functional

// 5. What are keys in React?
// A key is a special string attribute that needs to be included when using lists of elements.


// Example of a list using key -

// const ids = [1,2,3,4,5];
// const listElements = ids.map((id)=>{
// return(
// <li key={id.toString()}>
//   {id}
// </li>
// )
// })
// Importance of keys -

// Keys help react identify which elements were added, changed or removed.
// Keys should be given to array elements for providing a unique identity for each element.
// Without keys, React does not understand the order or uniqueness of each element.
// With keys, React has an idea of which particular element was deleted, edited, and added.
// Keys are generally used for displaying a list of data coming from an API.
// ***Note- Keys used within arrays should be unique among siblings. They need not be globally unique.
// //////////////////////////////////////
// What are props in React?

// In React, "props" is short for "properties," and it is a mechanism for passing data from a parent component to a child component. Props are a way to provide input to a React component, allowing it to render dynamically based on the received data.
// They can be single-valued or objects having a set of values that will be passed to components of React during creation by using a naming convention that almost looks similar to HTML-tag attributes. 

// Props stand for "Properties." They are read-only values. 
// It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. 
// It gives a way to pass data from one component to other components. 
// It is similar to function arguments. Props are passed to the component in the same way as arguments passed in a function.

// Props are immutable so we cannot modify the props from inside the component. 
// Inside the components, we can add attributes called props. 
// These attributes are available in the component as this. props and can be used to render dynamic data in our render method.

// //////////////////////////////////////
// Explain about types of side effects in React component.?

// Common side effects include:

// Making a request to an API for data from a backend server
// To interact with browser APIs (that is, to use document or window directly)
// Using unpredictable timing functions like setTimeout or setInterval
// ---
// Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. 

// In React components, side effects are operations that affect the outside world, such as modifying the DOM, making API calls, or updating global state. Side effects can be classified into two types:

// Synchronous side effects: 
// -------------------------
// Synchronous side effects are the effects that happen immediately after the state of the component changes. These side effects are straightforward to manage, as they don't require any asynchronous processing or waiting for data.
// Examples of synchronous side effects include:

// Changing the visibility of a component
// Updating the text or content of a component
// Showing or hiding an error message

// Asynchronous side effects: 
// --------------------------
// Asynchronous side effects are the effects that happen after a delay or as a result of some external event, such as a user input or a network request. These side effects can be more complicated to manage than synchronous side effects, as they require asynchronous processing and state management.
// Examples of asynchronous side effects include:

// Making an API call to fetch data
// Updating the application state after receiving data from an API call
// Setting a timer to run a function after a specified delay
// To manage side effects in React components, developers can use the useEffect hook. The useEffect hook allows developers to perform side effects after rendering the component and to clean up any resources used by the effect. By using the useEffect hook, developers can manage both synchronous and asynchronous side effects in their components.


// Lifecycle Methods	|	Hook					|	Renders
// -----------------		----						-------

// 1)componentDidMount	|	useEffect(()=>{ ... }, [ ])		|	after first render only

// 2)componentDidUpdate	|	useEffect(()=>{... }, [dependency1, dependency2])	|	after first render AND subsequent renders caused by a change in a dependency

// 3)componentWillUnmount	|	useEffect(() => { ... return ()=> {...cleanup}})	|	So as a cleanup method to improve your application, you can clean up (cancel) the asynchronous request so that it’s not completed.

// 4)shouldComponentUpdate	|	no comparable hook, instead, wrap function component in React.memo(List)	|	renders only if a prop changes

// //////////////////////////////////////
// Data Binding:--
// ------------
// Data binding is a concept in web development that establishes a connection between the data in an application and the user interface (UI) elements that display that data. The purpose of data binding is to ensure that changes in one part of the application are automatically reflected in another part, creating synchronization between the data and the UI.
// //////////////////////////////////
// JSX:-
// ----
// JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to XML or HTML but allows you to write JavaScript code in a more declarative way, especially when defining UI components in React.js.

// JSX makes it easier to describe the structure of UI components in a syntax that resembles HTML. While it might look like a template language, JSX is ultimately just syntactic sugar over regular JavaScript. It gets transpiled into JavaScript code that creates and manipulates React elements

// As stated in the official docs of React, JSX provides syntactic sugar for React.createElement( ) function.
// ------------
// const element = <h1>Hello, JSX!</h1>;
// ------------
// In the above example, the syntax <h1>Hello, JSX!</h1> is JSX. It represents a React element (a virtual representation of a DOM element) and is equivalent to the following JavaScript code:
// ------------
// const element = React.createElement('h1', null, 'Hello, JSX!');
// ------------
// Behind the scenes, tools like Babel are used to transpile JSX into regular JavaScript code that uses React.createElement to create React elements. The resulting JavaScript is what actually gets executed in the browser.

// why can't browser read jsx:
// JSX isn't directly supported by browsers, requiring conversion by tools like Babel to transform JSX into valid JavaScript. This transpilation ensures browsers can interpret and execute the JSX-embedded code in React applications.

// /////////////////////////////////////
// vue js vs React js:-----
// -------------------

// Vue.js and React.js are both popular JavaScript frameworks for building user interfaces, but they have some differences in terms of design philosophy, syntax, and approach to certain features. Here are some key distinctions between Vue.js and React.js:

// Learning Curve:
// ---------------

// Vue.js: Vue has a gentle learning curve, making it relatively easy for beginners to pick up. Its template syntax is similar to HTML, which can be advantageous for developers familiar with web development basics.
// React.js: React has a steeper learning curve, especially for beginners. Concepts like JSX (JavaScript XML) and the emphasis on a unidirectional data flow may require some adjustment for developers new to the framework.

// Syntax:
// --------

// Vue.js: Vue.js uses an HTML-based template syntax that is familiar to many developers. Templates are written in plain HTML with Vue-specific directives.
// React.js: React uses JSX, which is a syntax extension for JavaScript. JSX allows you to write HTML elements and components directly within your JavaScript code, providing a more expressive way to describe the UI.

// Data Binding:
// ------------

// Vue.js: Vue supports both one-way and two-way data binding. It has a v-model directive for two-way binding and provides easy syntax for handling state changes in components.
// React.js: React primarily uses one-way data binding. Data flows from parent components to child components through props. React does not have built-in two-way binding, emphasizing a unidirectional data flow.

// State Management:
// -----------------

// Vue.js: Vue has a built-in state management system that allows you to manage local component state. For more complex state management, Vue can be integrated with Vuex, a state management library.
// React.js: React uses a unidirectional data flow and relies on state and props to manage component data. For larger applications, Redux or other state management libraries are commonly used with React.

// Component Structure:
// --------------------

// Vue.js: Vue components are more flexible in terms of structure, and the framework provides a clear and concise way to define components, templates, and styles.
// React.js: React components are typically written using JSX and often include separate files for CSS styles. React encourages a modular and reusable component structure.


// Component	It uses Templates to build different components		|	It uses JSX as a component format
// Architecture	It features an adaptable architecture for various complex features.	|	It supports different state management libraries for complex features.
// Features	It is used to develop progressive web applications.	|	It is used to develop single-page applications and mobile apps.
// CSS		It supports CSS in JS by writing CSS code inside JS	|	It supports CSS by including script files in the JS file or by importing in component


// Community and Ecosystem:
// -----------------------

// Vue.js: Vue has a growing and active community, but it is generally smaller than the React community. However, it has gained popularity rapidly, and there is a good ecosystem of libraries and tools.
// React.js: React has a large and well-established community with a rich ecosystem of libraries, tools, and resources. It is widely adopted by many large companies and has strong community support.
// Ultimately, the choice between Vue.js and React.js often depends on factors such as personal preference, project requirements, and the specific needs of the development team. Both frameworks are capable of building powerful and efficient user interfaces.



// vue js :
// -----------------
// var V = new Vue({
//   el:'#vue-instance',
//   data:{
//     name:'Niklesh'
//   }
// })
// <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.4/vue.js"></script>
// <div id="vue-instance">
// <div>One Way binding with input box <input type="text" :value="name"></div>
// <div>One Way binding as text {{name}}</div>

// <div>Two way binding : <input type="text" v-model="name"></div>
// </div>
// -----------------
// ///////////////////////////////////
// what is JSX?
// JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to XML or HTML but allows you to write JavaScript code in a more declarative way, especially when defining UI components in React.js.

// //////////////////////////////////
// Virtual DOM:-
// The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.
// The virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed. 

// Reconciliation:-
// Reconciliation in React.js is the process of efficiently updating the user interface to reflect changes in the application state. When the state of a React component changes, React needs to update the actual DOM to reflect those changes. The reconciliation process involves comparing the new Virtual DOM representation of the UI with the previous one and determining the minimal set of changes needed to update the real DOM.

// Here are the key steps in the reconciliation process:

// 1)Rendering:

// -When a React component's state or props change, the component is re-rendered.
// -During the re-render, the component returns a new Virtual DOM representation of its UI.


// 2)Virtual DOM Comparison:

// -React compares the new Virtual DOM with the previous snapshot of the Virtual DOM.
// -It identifies the differences (diffs) between the new and old Virtual DOM. This process is often referred to as the "diffing algorithm."


// 3)Reconciliation Algorithm:

// React uses a reconciliation algorithm to efficiently determine how to update the real DOM based on the identified differences.
// The algorithm aims to minimize the number of manipulations needed in the actual DOM, optimizing the update process.


// 4)Updating the DOM:

// -After determining the differences, React applies the changes to the real DOM.
// -React updates only the parts of the DOM that have changed, rather than re-rendering the entire DOM.


// 5)Component Lifecycle Methods:

// -During the reconciliation process, React invokes specific lifecycle methods on the components, allowing them to perform actions at different stages of the update cycle.
// -For example, the componentDidUpdate lifecycle method is called after the component has been updated in the DOM.

// /////////////////////////////////

// What are controlled components?

// -A controlled component is a component that is controlled by React state
// -A component that controls the input elements within the forms on subsequent user input is called Controlled Component, i.e, every state mutation will have an associated handler function.
// -Controlled Components are those in which form’s data is handled by the component’s state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component.

// In most cases, we recommend using controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.



// ////////////////////////////////
// Uncontrolled Components:-
// Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.
// You query the DOM using a ref to find its current value when you need it.

// In most cases, it's recommend to use controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.
// ==========================
// useEffect : --
// useEffect hook can also be used to handle unmounting in React. The useEffect hook is a function that takes a callback function and an array of dependencies. The callback function is called whenever any of the dependencies change, and it can return a cleanup function that is called when the component unmounts.



// ////////////////////////////////
// What is the difference between createElement and cloneElement?

// JSX elements will be transpiled to React.createElement() functions to create React elements which are going to be used for the object representation of UI. Whereas cloneElement is used to clone an element and pass it new props.

// createElement:
// The createElement method is the fundamental way to create a React element. It is a function that takes three arguments:

// Type: This can be either a string representing the HTML tag name or a reference to a component.
// Props: This is an object containing the properties that will be assigned to the element.
// Children: This can be a string, a React element, or an array of React elements.

// ------------
// Syntax:-
// const element = React.createElement('h1', {className: 'title'}, 'Hello, world!');
// ------------

// cloneElement:
// The cloneElement method is used to clone and modify an existing React element. It takes two arguments:

// Element: This is the React element that you want to clone.
// Props: This is an object containing the properties that you want to add or override.

// ------------
// Syntax:-
// React.cloneElement(
//      element,
//      [props],
//      [...children]
// )
// Element: the element that we want to clone.
// [props]: The additional props that we want to add to the element.
// […children]: The children of the cloned object. Note that the children of the existing object are not copied

// Ex:-
// const originalElement = React.createElement('h1', {className: 'title'}, 'Hello, world!');

// const clonedElement = React.cloneElement(originalElement, {className: 'subtitle'},'MKS');

// Ex2:-
//   const originalElement = React.createElement('div', { className: 'title', style:{ backgroundColor: "#9acf75" } }, 'Hello, world!');
//   const originalPara = React.createElement('p', { className: 'para', style:{ backgroundColor: "#989fac" } }, 'Hello, world!');

//   const clonedElement = React.cloneElement(originalElement, { className: 'App-header', style:{ backgroundColor: "#9acf75" } }, originalPara );
//   return (
//     <div>
//       { originalElement }
//       { clonedElement }
//     </div>
//   );
// --------------

// //////////////////////////////

// What is Lifting State Up in React?

// When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.

// 	A
//        / \
//       B   C

// ===========================
// //////////////////////////////






// What are the different phases of component lifecycle?

// The component lifecycle has three distinct lifecycle phases:

// Mounting: 
// ---------The component is ready to mount in the browser DOM. This phase covers initialization from constructor(), getDerivedStateFromProps(), render(), and componentDidMount() lifecycle methods.

// Updating:
// -------- In this phase, the component gets updated in two ways, sending the new props and updating the state either from setState() or forceUpdate(). This phase covers getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate() and componentDidUpdate() lifecycle methods.

// Unmounting:
// ----------- 
// In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase includes componentWillUnmount() lifecycle method.

// It's worth mentioning that React internally has a concept of phases when applying changes to the DOM. They are separated as follows Render The component will render without any side effects. This applies to Pure components and in this phase, React can pause, abort, or restart the render.

//     Pre-commit Before the component actually applies the changes to the DOM, there is a moment that allows React to read from the DOM through the getSnapshotBeforeUpdate().

//     Commit React works with the DOM and executes the final lifecycles respectively componentDidMount() for mounting, componentDidUpdate() for updating, and componentWillUnmount() for unmounting.




// //////////////////////////////////////////


// What are the lifecycle methods of React?

// Before React 16.3

//     componentWillMount: Executed before rendering and is used for App level configuration in your root component.
//     componentDidMount: Executed after first rendering and here all AJAX requests, DOM or state updates, and set up event listeners should occur.
//     componentWillReceiveProps: Executed when particular prop updates to trigger state transitions.
//     shouldComponentUpdate: Determines if the component will be updated or not. By default it returns true. If you are sure that the component doesn't need to render after state or props are updated, you can return false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives new prop.
//     componentWillUpdate: Executed before re-rendering the component when there are props & state changes confirmed by shouldComponentUpdate() which returns true.
//     componentDidUpdate: Mostly it is used to update the DOM in response to prop or state changes.
//     componentWillUnmount: It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.

// React 16.3+

//     getDerivedStateFromProps: Invoked right before calling render() and is invoked on every render. This exists for rare use cases where you need a derived state. Worth reading if you need derived state.
//     componentDidMount: Executed after first rendering and where all AJAX requests, DOM or state updates, and set up event listeners should occur.
//     shouldComponentUpdate: Determines if the component will be updated or not. By default, it returns true. If you are sure that the component doesn't need to render after the state or props are updated, you can return a false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives a new prop.
//     getSnapshotBeforeUpdate: Executed right before rendered output is committed to the DOM. Any value returned by this will be passed into componentDidUpdate(). This is useful to capture information from the DOM i.e. scroll position.
//     componentDidUpdate: Mostly it is used to update the DOM in response to prop or state changes. This will not fire if shouldComponentUpdate() returns false.
//     componentWillUnmount It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.



// ////////////////////////////////////////////


// What are Higher-Order Components?

// A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature.

// We call them pure components because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components.

// Benefits of Using Higher-Order Components in React
// Reusability: HOCs allow you to reuse component logic across multiple components, which can save time and reduce code duplication.
// Flexibility: HOCs can take additional arguments, which allows you to customize the behavior of the HOC. This makes them a flexible way to add functionality to your components.
// Separation of concerns: HOCs can help separate concerns in your code by encapsulating certain functionality in a separate component. This can make the code easier to read and maintain.
// Composition: HOCs can be composed together to create more complex functionality. This allows you to build up functionality from smaller, reusable pieces.
// Higher-order components can be used to implement cross-cutting concerns in your application such as authentication, error handling, logging, performance tracking, and many other features.

// const EnhancedComponent = higherOrderComponent(WrappedComponent);

// HOC can be used for many use cases:

//     Code reuse, logic and bootstrap abstraction.
//     Render hijacking.
//     State abstraction and manipulation.
//     Props manipulation.




// ///////////////////////////////////////

// How to create props proxy for HOC component?

// You can add/edit props passed to the component using props proxy pattern like this:


// This approach enables the addition of props to wrapped components before rendering, proving useful in various scenarios such as logging, modifying data passed to components, and managing authentication in diverse applications.


// function HOC(WrappedComponent) {
//   return class Test extends Component {
//     render() {
//       const newProps = {
//         title: "New Header",
//         footer: false,
//         showFeatureX: false,
//         showFeatureY: true,
//       };

//       return <WrappedComponent {...this.props} {...newProps} />;
//     }
//   };
// }

// //////////////////////////////////////


// What is the use of react-dom package?

// The react-dom package provides DOM-specific methods that can be used at the top level of your app. Most of the components are not required to use this module. Some of the methods of this package are:

//     render()
//     hydrate()
//     unmountComponentAtNode()
//     findDOMNode()
//     createPortal()

// render():--
// -----------
// render function renders a piece of JSX (“React node”) into a browser DOM node.

// In React 18, render was replaced by createRoot. Please use createRoot for React 18 and beyond.

// Syntax : 
// render(reactNode, domNode, callback?) 
// --------------
// Parameters:--
// reactNode: A React node that you want to display. This will usually be a piece of JSX like <App />, but you can also pass a React element constructed with createElement(), a string, a number, null, or undefined.

// domNode: A DOM element. React will display the reactNode you pass inside this DOM element. From this moment, React will manage the DOM inside the domNode and update it when your React tree changes.

// optional callback: A function. If passed, React will call it after your component is placed into the DOM.
// Ex:-----------
// import React from "react";
// import { render, unmountComponentAtNode } from "react-dom";

// -------------
// import App from "./App";

// const rootElement = document.getElementById("root");


// const CBFun = () => {
//   setTimeout(() => {
//     console.log("call")
//     unmountComponentAtNode(rootElement);
//   }, 2000)
// }

// render(<App />, rootElement,  CBFun() );

// --------------------------------
// ========================

// findDOMNode:------------
// -----------
// findDOMNode finds the browser DOM node for a React class component instance.
// Syntax:-
// const domNode = findDOMNode(componentInstance)

// Ex:-----
// // Defining our App Component 
// const App = () => { 
  
//   // Function to get element from findDOMNode() 
//   function find() { 
//     let node = document.getElementById("node"); 
//     let a = ReactDOM.findDOMNode(node); 
//     console.log(a); 
//     a.style.color = 'green'; 
//     a.style.fontSize = "x-large"; 
//   } 
//   // Returning our JSX code 
//   return <> 
//     <div> 
//       <div id='node'>DOM Node</div> 
//       <button onClick={find}>Click to find</button> 
//     </div> 
//   </>; 
// } 
// --------------
// ==============

// unmountComponentAtNode():----------
// ------------------------
// unmountComponentAtNode removes a mounted React component from the DOM.
// unmountComponentAtNode returns true if a component was unmounted and false otherwise.

// App.js
// -------
// const domNode = document.getElementById('root');

// document.getElementById('render').addEventListener('click', () => {
//   render(<App />, domNode);
// });

// document.getElementById('unmount').addEventListener('click', () => {
//   unmountComponentAtNode(domNode);
// });




// //////////////////////////////////////////////

// What is the purpose of render method of react-dom?:-

// This method is used to render a React element into the DOM in the supplied container and return a reference to the component. If the React element was previously rendered into container, it will perform an update on it and only mutate the DOM as necessary to reflect the latest changes.

// ReactDOM.render(element, container, [callback])

// If the optional callback is provided, it will be executed after the component is rendered or updated.

// //////////////////////////////////////////////

// What is prop drilling in React

// Prop drilling in React refers to the process of passing down props (properties) through multiple levels of nested components. When a component deep in the component tree needs access to a prop that is originally provided by a parent component, these props have to be passed down through the intermediate components, even if those intermediate components do not use or need the props themselves.

// Prop drilling can become a challenge in large applications as the component tree grows, and passing down props through multiple levels might make the code harder to maintain. To address this, there are advanced state management solutions in React, such as context API, Redux, or Recoil, which can help manage global or shared state without the need for prop drilling.

// /////////////////////////////////////////////


// what is usestate in react js?
// In React, useState is a Hook that allows functional components to manage state. The useState Hook is used to declare state variables and provides a way to update them within functional components.

// using array destructuring we can set the variable name and function name



// /////////////////////////////////////////////

// What are error boundaries?


// Error boundaries are a feature in React that allows you to catch JavaScript errors anywhere in a component tree and log those errors, display a fallback UI, or perform other actions. Error boundaries are useful for preventing unhandled errors from crashing the entire React application.

// In React, errors that occur during rendering, in lifecycle methods, or in the constructors of the whole tree below them are considered uncaught errors. By default, if an error occurs in a component, it will propagate up the component tree until it reaches the root, causing the entire application to unmount.

// Error boundaries work by defining special methods in a class component. When an error is thrown during the rendering or lifecycle methods of a component, the error is caught by the nearest error boundary and allows you to handle the error gracefully.


// Any component which uses one of the following lifecycle methods is considered an error boundary.
// In what places can an error boundary detect an error?

//     Render phase
//     Inside a lifecycle method
//     Inside the constructor

// With error boundaries: As mentioned above, error boundary is a component using one or both of the following methods: static getDerivedStateFromError and componentDidCatch.


// As of v16.2.0, there's no way to turn a functional component into an error boundary.

// The React docs are clear about that, although you're free to reuse them as many times as you wish:

// The componentDidCatch() method works like a JavaScript catch {} block, but for components. Only class components can be error boundaries. In practice, most of the time you’ll want to declare an error boundary component once and use it throughout your application.


// ////////////////////////////////////////////
// What is React Hooks?

// Hooks allow functional components to have local component state, access context, perform side effects, and more.

// 1) useState:
// Manages state in functional components.

// const [state, setState] = useState(initialState);


// 2) useEffect:

// Performs side effects in functional components, such as data fetching or subscriptions.
// useEffect(() => {
//   // Side effect code here
//   return () => {
//     // Cleanup code here
//   };
// }, [dependencies]);

// 3) useContext:
// Instead of passing the props down through each component, React Context allows you to broadcast data to the components below.
// Accesses the value of a React context within a functional component.

// const contextValue = useContext(MyContext);

// 4) useReducer:

// Manages more complex state logic by combining useState and useEffect in a single hook.
// const [state, dispatch] = useReducer(reducer, initialState);


// 5) useCallback:

// Memoizes a callback function to prevent unnecessary renders in child components.

// const memoizedCallback = useCallback(() => {
//   // Callback code here
// }, [dependencies]);


// 6) useMemo:

// Memoizes the result of a computation to prevent unnecessary recalculations.

// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);


// 7) useRef:

// Creates a mutable object that persists across renders and does not trigger re-renders when mutated.

// const myRef = useRef(initialValue);



// 8) forwardRef : -
// Ref forwarding is a technique for automatically passing a ref through a component to one of its children. This is typically not necessary for most components in the application. However, it can be useful for some kinds of components, especially in reusable component libraries.


// import React, { forwardRef, useRef, useImperativeHandle } from 'react';

// const RefCustomInput = forwardRef(function RefCustomInput(props, ref) {
//     const inputRef = useRef(null);
//     useImperativeHandle(ref, () => {
//         return {
//             focus() {
//                 inputRef.current.focus();
//             },
//             scrollIntoView() {
//                 console.log(inputRef.current.value)
//             },
//         };
//     }, []);

//     return (
//         <>
//             <input type="text" {...props} ref={inputRef} />
//         </>
//     )
// });

// export default RefCustomInput;
// =====================================

// 9) useImperativeHandle:

// Customizes the instance value exposed when using React.forwardRef.

// useImperativeHandle(ref, () => ({
//   // Exposed methods or properties
// }), [dependencies]);


// 10) useLayoutEffect:

// Similar to useEffect, but fires synchronously after all DOM mutations.

// useLayoutEffect fires synchronously after all DOM loading is done loading. This is useful for synchronously re-rendering the DOM and also to read the layout from the DOM. But to prevent blocking the page loading, we should always use the useEffect hook.


// useLayoutEffect is a hook in React that is similar to useEffect, but it fires synchronously after all DOM mutations. It is often used when you need to read from the DOM or perform other actions that require layout before the browser paint

// Synchronous Execution:
// Unlike useEffect, which runs asynchronously after the browser paints, useLayoutEffect runs synchronously immediately after all DOM mutations. This makes it suitable for tasks that need to be executed before the browser paints.

// useLayoutEffect(() => {
//   // DOM mutation code here
// }, [dependencies]);

// ----------------------
// Ex:-

//   const ref = useRef('This is dom')
  
//   useEffect(() => {
//     ref.current = 'some value'
//   })

//   // then, elsewhere in that hook or something, later
//   useLayoutEffect(() => {
//     console.log(ref.current) // <-- this logs an old value because this runs first!
//   })

// ----------------------


// 11) useDebugValue:

// Customizes the display of a custom hook in React DevTools.

// useDebugValue(value);

// ////////////////////////////////////////////////////////

// What is the use of useEffect React Hooks?

// The useEffect hook in React is used to perform side effects in functional components. Side effects can include data fetching, subscriptions, manual DOM manipulations, or any operation that needs to be performed after the component has been rendered to the screen.

// The typical use case for useEffect is to manage asynchronous or non-blocking code within a functional component. It allows you to perform actions that are not directly related to rendering but are necessary for the component's behavior.


// 1)Asynchronous Execution:
// The function passed to useEffect runs asynchronously after the render cycle. It does not block the rendering of the component.

// 2)Dependencies Array:

// The second parameter is an array of dependencies. If any of these dependencies change between renders, the useEffect function will run again. If the dependencies array is empty, the useEffect will only run once after the initial render.

// 3)Cleanup Function:

// The function returned inside useEffect can be used for cleanup. It will be invoked when the component is about to unmount or when the dependencies specified in the array change.
// Cleanup:--
// -------
// If the effect involves any cleanup, such as unsubscribing from a subscription or clearing a timer, you can return a cleanup function. This cleanup function will be executed when the component is unmounted or when the dependencies change and the effect is re-run.

// 4)Common Use Cases:

// Fetching data from an API.
// Subscribing to external data sources (e.g., websockets).
// Manually changing the DOM or interacting with external libraries.


// One thing to keep in mind is that useEffect only runs after React renders your component, so your effect callback will not prevent browser painting. This is different from how class components behave

// Here is the basic syntax of the useEffect hook:

// ------------------
// useEffect(() => {
//   // Side effect code here

//   return () => {
//     // Cleanup code (optional)
//   };
// }, [dependencies]);
// -------------------

// The first argument is a function that contains the code for the side effect.
// The second argument is an array of dependencies. If any of the dependencies change between renders, the effect is re-run. If the array is empty, the effect runs only once (similar to componentDidMount in class components).

// -------------------
// Example: Fetching Data

// import React, { useState, useEffect } from 'react';

// const ExampleComponent = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.example.com/data');
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array means run the effect once on mount

//   return <p>Data: {data}</p>;
// };
// ------------------------

// In this example, the useEffect hook is used to fetch data from an API. The effect runs once when the component mounts (due to the empty dependency array), and it updates the data state when the fetch is successful.



// ---------------
// useEffect(() => {
//   const subscription = externalService.subscribe(data => {
//     // Handle incoming data
//   });

//   return () => {
//     // Cleanup: Unsubscribe when the component unmounts or when dependencies change
//     subscription.unsubscribe();
//   };
// }, [dependencies]);
// -----------------
// ///////////////////////////////////////////////////////////////////////
// useRef:-
// ------

// The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// It can be used to access a DOM element directly.

// useRef() only returns one item. It returns an Object called current.
// When we initialize useRef we set the initial value: useRef(0).
// It's like doing this: const count = {current: 0}. We can access the count by using count.current.

// =============================================
// useRef is one of the standard hooks provided by React. It will return an object that you can use during the whole lifecycle of the component. 
// The main use case for the useRef hook is to access a DOM child directly. I’ll show exactly how to do that in another section. 

// Although accessing the DOM is the main use case, it doesn’t mean it’s the only one! useRef can also be very useful to hold a mutable value across different renders of your component. 
// ==============================================
// The useRef Hook is a function that returns a mutable ref object whose `.current` property is initialized with the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

// There are two main uses of useRef that are explained in the following sections: 
//     - Accessing the DOM nodes or React elements 
//     - keeping a mutable variable.
// ---------------------------------------------------
// useRef() hook creates references.

// Calling const reference = useRef(initialValue) with the initial value returns a special object named reference. The reference object has a property current: you can use this property to read the reference value reference.current, or update reference.current = newValue.

// Between the component re-renderings, the value of the reference is persistent.

// Updating a reference, contrary to updating state, doesn't trigger component re-rendering.

// References can also access DOM elements. Assign the reference to ref attribute of the element you'd like to access: <div ref={reference}>Element</div> — and the element is available at reference.current.

// //////////////////////////////////////////////////////////////////

// What are Custom Hooks?

// React custom hooks are reusable functions that a React JS developer can use to add special and unique functionality to the React applications. 

// React that allows you to extract and reuse stateful logic from functional components. By creating custom hooks, you can encapsulate complex logic into reusable functions and share that logic across different components. Custom Hooks follow a naming convention: their names start with "use" (e.g., useCustomHook).

// A Custom Hook is a function in Javascript whose name begins with ‘use’ and which calls other hooks. It is a part of React v16.8 hook update and permits you for reusing the stateful logic without any need for component hierarchy restructuring.

// In almost all of the cases, custom hooks are considered to be sufficient for replacing render props and HoCs (Higher-Order components) and reducing the amount of nesting required. Custom Hooks will allow you for avoiding multiple layers of abstraction or wrapper hell that might come along with Render Props and HoCs.

// The disadvantage of Custom Hooks is it cannot be used inside of the classes.



// Here's a basic example of a custom hook:


// // useCounter.js
// import { useState } from 'react';

// const useCounter = (initialValue, step) => {
//   const [count, setCount] = useState(initialValue);

//   const increment = () => {
//     setCount(count + step);
//   };

//   const decrement = () => {
//     setCount(count - step);
//   };

//   return {
//     count,
//     increment,
//     decrement,
//   };
// };

// export default useCounter;
// Now, you can use this custom hook in multiple components:


// // ExampleComponent1.js
// import React from 'react';
// import useCounter from './useCounter';

// const ExampleComponent1 = () => {
//   const counter1 = useCounter(0, 1);

//   return (
//     <div>
//       <p>Count: {counter1.count}</p>
//       <button onClick={counter1.increment}>Increment</button>
//       <button onClick={counter1.decrement}>Decrement</button>
//     </div>
//   );
// };


// // ExampleComponent2.js
// import React from 'react';
// import useCounter from './useCounter';

// const ExampleComponent2 = () => {
//   const counter2 = useCounter(10, 2);

//   return (
//     <div>
//       <p>Count: {counter2.count}</p>
//       <button onClick={counter2.increment}>Increment</button>
//       <button onClick={counter2.decrement}>Decrement</button>
//     </div>
//   );
// };
// ///////////////////////////////////////////////////////////
// Explain Strict Mode in React?

// StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.


// StrictMode is a development mode feature in React that helps identify common problems in your application and supports you in fixing them. It performs additional checks and warnings to aid developers in writing better code and finding potential issues.
// ///////////////////////////////////////////////////////////////

// Lazy loading:-
// ------------
// Lazy loading is a strategy that delays the loading of some assets (e.g., images) until they are needed by the user based on the user's activity and navigation pattern; typically, these assets are only loaded when they are scrolled into view.

// lazy loading is an optimization technique or a design pattern in which the loading of an item, whether it’s a picture, video, web page, music file, or document, is delayed until it is required, saving bandwidth and precious computing resources.

// //////////////////////////////////////////////////////////////

// Which method would you use to handle events in React?

// In React, handling events is a crucial aspect of building interactive user interfaces. There are a few methods for handling events in React, and the appropriate method depends on the context and your specific requirements. Here are the commonly used approaches:

// Inline Event Handling (JSX Syntax):

// You can handle events directly in the JSX using inline event handlers. This is similar to traditional HTML event handling.

// <button onClick={handleClick}>Click me</button>

// const handleClick = () => {
//   console.log('Button clicked!');
// };
// This approach is straightforward and suitable for simple cases. However, it can become less maintainable in more complex applications.
// Class Methods:

// You can define class methods to handle events, especially in class components.

// class MyComponent extends React.Component {
//   handleClick() {
//     console.log('Button clicked!');
//   }

//   render() {
//     return <button onClick={this.handleClick}>Click me</button>;
//   }
// }
// Class methods are useful when you need access to the component instance (e.g., for updating state).
// Arrow Functions (Inline Callbacks):

// You can use arrow functions as inline callbacks. This is a concise way to define callback functions directly in the JSX.

// <button onClick={() => console.log('Button clicked!')}>Click me</button>
// While concise, be cautious with arrow functions in render methods, especially for performance reasons, as a new function is created on every render.
// Passing Parameters to Event Handlers:

// If you need to pass additional parameters to your event handler, you can use arrow functions or the bind method.

// <button onClick={() => handleClick(param)}>Click me</button>

// <button onClick={handleClick.bind(this, param)}>Click me</button>
// Ensure that you are mindful of potential performance implications when using arrow functions for this purpose.
// Using useCallback Hook (Functional Components):

// In functional components, you can use the useCallback hook to memoize event handler functions, preventing unnecessary re-creation.

// const handleClick = useCallback(() => {
//   console.log('Button clicked!');
// }, []); // Empty dependency array means it won't change between renders
// This is useful for optimizing performance in scenarios where the event handler doesn't depend on changing variables.

// //////////////////////////////////////////////////////////////////

//     In which situation would you use refs in React?


// Refs in React are used to get references to a DOM element or to a React component instance created using React.createRef(). They provide a way to interact with the underlying DOM elements or with the methods and properties of a class component. Here are some common situations where you might use refs in React:

// Accessing DOM Elements:

// Refs are often used to interact with or manipulate the properties of DOM elements directly. This can include tasks like focusing on an input field, measuring the size of an element, or triggering imperative animations.

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.myInput = React.createRef();
//   }

//   componentDidMount() {
//     // Focus on the input element when the component mounts
//     this.myInput.current.focus();
//   }

//   render() {
//     return <input ref={this.myInput} />;
//   }
// }
// Managing Focus, Text Selection, and Media Playback:

// Refs are useful for managing user interactions, such as setting focus on an input field, selecting text, or controlling media playback.

// class AutoFocusInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.inputRef = React.createRef();
//   }

//   componentDidMount() {
//     this.inputRef.current.focus();
//   }

//   render() {
//     return <input ref={this.inputRef} />;
//   }
// }
// Interacting with Third-Party Libraries:

// When working with third-party libraries that operate on DOM elements, refs can be used to get references to those elements and interact with them within your React components.

// class ThirdPartyIntegration extends React.Component {
//   constructor(props) {
//     super(props);
//     this.thirdPartyElement = React.createRef();
//   }

//   componentDidMount() {
//     // Initialize a third-party library with the DOM element
//     thirdPartyLibrary.init(this.thirdPartyElement.current);
//   }

//   render() {
//     return <div ref={this.thirdPartyElement}></div>;
//   }
// }
// Triggering Animations or Measurements:

// Refs can be used to trigger animations or perform measurements (e.g., getting the height or width of an element) when needed.

// class MeasureElement extends React.Component {
//   constructor(props) {
//     super(props);
//     this.myElement = React.createRef();
//   }

//   handleButtonClick() {
//     // Measure the height of the element
//     const height = this.myElement.current.clientHeight;
//     console.log(`Element height: ${height}px`);
//   }

//   render() {
//     return (
//       <div>
//         <div ref={this.myElement}>Resizable Element</div>
//         <button onClick={() => this.handleButtonClick()}>Measure Height</button>
//       </div>
//     );
//   }
// }
// Accessing Class Component Methods:

// Refs can be used to access methods or properties of a class component directly, although this approach is less common due to the availability of other state management techniques.

// class MyClassComponent extends React.Component {
//   myMethod() {
//     console.log('Method called');
//   }

//   render() {
//     return <div>Class Component</div>;
//   }
// }

// class ParentComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.myComponentRef = React.createRef();
//   }

//   handleButtonClick() {
//     // Access a method of the class component using the ref
//     this.myComponentRef.current.myMethod();
//   }

//   render() {
//     return (
//       <div>
//         <MyClassComponent ref={this.myComponentRef} />
//         <button onClick={() => this.handleButtonClick()}>Call Method</button>
//       </div>
//     );
//   }
// }


// /////////////////////////////////////////////////////////////////

//     Why would you use super constructors with props arguments?

// In JavaScript, when you extend a class using the class keyword, the child class needs to call the super() method in its constructor to invoke the constructor of the parent class. This is essential for setting up the inheritance relationship and initializing the properties and methods defined in the parent class.

// The super() method is particularly important when working with React components that extend React.Component. Here are a couple of reasons why you would use super(props) in a React component:

// Accessing this.props in the Constructor:

// When you want to access the props object inside the constructor of a class component, you need to pass props to super(props). This ensures that the this.props object is available within the constructor.

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     // Now, you can access this.props in the constructor
//     console.log(this.props.someProp);
//   }

//   render() {
//     return <div>{this.props.someProp}</div>;
//   }
// }
// Without passing props to super(props), this.props would be undefined inside the constructor, potentially leading to unexpected behavior or errors.
// Passing props to the Parent Constructor:

// If the parent class has its own constructor that takes props as an argument, it's important to pass props to super(props) in the child class constructor. This ensures that the parent class can initialize its properties based on the provided props.

// class ParentComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       parentState: props.initialValue,
//     };
//   }

//   render() {
//     return <div>{this.state.parentState}</div>;
//   }
// }

// class ChildComponent extends ParentComponent {
//   constructor(props) {
//     super(props); // Pass props to the parent constructor
//     // Child-specific initialization
//     this.state = {
//       childState: 'Child State',
//     };
//   }

//   render() {
//     return (
//       <div>
//         {this.state.parentState}
//         {this.state.childState}
//       </div>
//     );
//   }
// }

// By passing props to super(props) in the child constructor, you ensure that the parent constructor correctly receives and processes the props necessary for its initialization.

// In summary, using super(props) is crucial in React class components to ensure proper inheritance and to provide the props object to both the parent and child constructors. It allows you to access and initialize properties based on the incoming props within the context of the component's lifecycle.

// ///////////////////////////////////////////////////////////////
// How would you use validation on props?



// In React, you can use PropTypes or TypeScript to perform prop validation and ensure that the components receive the expected types of props. Prop validation helps catch potential issues early in the development process and makes your code more maintainable. Below, I'll provide examples using both PropTypes and TypeScript:

// Prop Validation with PropTypes:
// Install PropTypes:

// If you haven't already, you need to install the prop-types library:


// npm install prop-types
// Using PropTypes:

// Define the PropTypes for your component by specifying the expected types for each prop.


// import React from 'react';
// import PropTypes from 'prop-types';

// const MyComponent = ({ name, age, isActive }) => {
//   // Component logic

//   return <div>{/* Component JSX */}</div>;
// };

// MyComponent.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   isActive: PropTypes.bool.isRequired,
// };

// export default MyComponent;
// In this example, PropTypes.string, PropTypes.number, and PropTypes.bool are used to specify the expected types of the name, age, and isActive props, respectively. The isRequired validator indicates that these props must be provided.
// Prop Validation with TypeScript:
// Using TypeScript:

// If you are using TypeScript, you can define an interface for your props and specify the types.

// ---------------
// TSX
// --------------
// import React from 'react';

// interface MyComponentProps {
//   name: string;
//   age: number;
//   isActive: boolean;
// }

// const MyComponent: React.FC<MyComponentProps> = ({ name, age, isActive }) => {
//   // Component logic

//   return <div>{/* Component JSX */}</div>;
// };

// export default MyComponent;
// In this example, the MyComponentProps interface defines the expected types for name, age, and isActive. The React.FC type is used for functional components.
// Default Props (Optional):

// You can also provide default values for props using defaultProps in PropTypes or by assigning default values directly in TypeScript.


// // PropTypes with Default Props
// MyComponent.defaultProps = {
//   isActive: false,
// };


// // TypeScript with Default Values
// const MyComponent: React.FC<MyComponentProps> = ({ name, age, isActive = false }) => {
//   // Component logic

//   return <div>{/* Component JSX */}</div>;
// };
// Default values ensure that if a prop is not provided, the default value will be used.
// By using either PropTypes or TypeScript, you can enhance your React components with type checking, making your code more robust and easier to maintain. Choose the approach that best fits your project's requirements and development workflow.

// ///////////////////////////////////////////////////////


//     Which method would you use to add attributes to components conditionally?

// In React, you can conditionally add attributes to components using JavaScript expressions within JSX. The key is to use curly braces {} to embed dynamic values or expressions within the JSX. Below are a few examples demonstrating how to conditionally add attributes:

// 1. Using Conditional (Ternary) Operator:


// import React from 'react';

// const MyComponent = ({ isSpecial }) => {
//   return (
//     <div className={isSpecial ? 'special' : ''}>
//       {/* Other JSX content */}
//     </div>
//   );
// };

// export default MyComponent;
// In this example, the className attribute is conditionally set based on the value of the isSpecial prop. If isSpecial is true, the class 'special' is added; otherwise, an empty string is used.

// 2. Using Logical AND Operator:


// import React from 'react';

// const MyComponent = ({ isLoggedIn }) => {
//   return (
//     <div>
//       {isLoggedIn && <span>Welcome, User!</span>}
//       {/* Other JSX content */}
//     </div>
//   );
// };

// export default MyComponent;
// In this example, the <span> element is conditionally rendered based on the value of the isLoggedIn prop. If isLoggedIn is true, the <span> element is rendered; otherwise, nothing is rendered.

// 3. Using Object Spread Operator:


// import React from 'react';

// const MyComponent = ({ isDisabled }) => {
//   const buttonProps = {
//     type: 'button',
//     onClick: () => console.log('Button clicked'),
//     // Other common attributes
//   };

//   return (
//     <button {...buttonProps} disabled={isDisabled}>
//       Click me
//     </button>
//   );
// };

// export default MyComponent;
// In this example, the disabled attribute is conditionally added to the <button> element based on the value of the isDisabled prop.

// 4. Using Classnames Library:
// If you have multiple class names to conditionally apply, you might consider using a utility library like classnames:



// import React from 'react';
// import classNames from 'classnames';

// const MyComponent = ({ isActive, isHighlighted }) => {
//   const containerClasses = classNames('container', {
//     'active': isActive,
//     'highlighted': isHighlighted,
//   });

//   return (
//     <div className={containerClasses}>
//       {/* Other JSX content */}
//     </div>
//   );
// };

// export default MyComponent;
// In this example, the classNames function from the classnames library is used to conditionally apply class names based on the values of the isActive and isHighlighted props.

// ////////////////////////////////////////////////

// What methods would you use to check and improve slow app rendering in React?


// Improving the rendering performance of a React application involves identifying and addressing bottlenecks that slow down the rendering process. Here are some methods to check and improve slow app rendering in React:

// 1. Performance Profiling Tools:
// 1.1. React DevTools Profiler:

// Use the React DevTools Profiler to identify components that contribute most to the rendering time. It allows you to visualize component rendering durations and spot performance issues.


// import React from 'react';
// import { unstable_trace as trace } from 'scheduler/tracing';

// function MyComponent() {
//   return trace('MyComponent render', performance.now(), () => (
//     // Component JSX
//   ));
// }
// This enables the React Profiler for this component.

// 1.2. Chrome DevTools:

// Use the "Performance" tab in Chrome DevTools to record and analyze the runtime performance of your application. This tool helps you identify slow JavaScript, layout thrashing, and other performance bottlenecks.
// 2. Memoization:
// 2.1. React.memo:

// Use React.memo to memoize functional components and prevent unnecessary re-renders.


// import React from 'react';

// const MemoizedComponent = React.memo(({ prop1, prop2 }) => {
//   // Component JSX
// });
// 2.2. UseMemo and UseCallback:

// Use useMemo and useCallback hooks to memoize values and functions to avoid recomputing them on every render.


// import React, { useMemo, useCallback } from 'react';

// const MyComponent = ({ data }) => {
//   const memoizedData = useMemo(() => computeExpensiveValue(data), [data]);
//   const memoizedCallback = useCallback(() => handleCallback(data), [data]);

//   // Component JSX using memoizedData and memoizedCallback
// };
// 3. Optimizing Re-renders:
// 3.1. Pure Components:

// Use class components that extend React.PureComponent to prevent unnecessary re-renders when the props and state remain the same.


// import React, { PureComponent } from 'react';

// class MyPureComponent extends PureComponent {
//   render() {
//     // Component JSX
//   }
// }
// 3.2. React.memo for Functional Components:

// Memoize functional components using React.memo to avoid re-renders when props do not change.


// import React from 'react';

// const MyMemoizedComponent = React.memo(({ prop1, prop2 }) => {
//   // Component JSX
// });
// 4. Code Splitting:
// 4.1. React.lazy and Suspense:

// Use React.lazy and Suspense to enable code splitting and load components lazily, reducing the initial bundle size.


// const MyLazyComponent = React.lazy(() => import('./MyLazyComponent'));

// function MyComponent() {
//   return (
//     <React.Suspense fallback={<div>Loading...</div>}>
//       <MyLazyComponent />
//     </React.Suspense>
//   );
// }
// 5. Avoiding Unnecessary Work:
// 5.1. ShouldComponentUpdate (Class Components):

// Implement shouldComponentUpdate lifecycle method in class components to selectively prevent rendering based on props and state.


// class MyComponent extends React.Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     // Check conditions and return true/false
//   }
// }
// 5.2. React.memo and useMemo (Functional Components):

// Leverage React.memo and useMemo to prevent unnecessary renders based on prop and state changes.


// const MyComponent = React.memo(({ prop1, prop2 }) => {
//   // Component JSX
// });
// 6. Using Production Builds:
// 6.1. Optimized Production Builds:

// Ensure that your production builds are optimized. Use tools like react-scripts (Create React App) or webpack with appropriate configurations for production builds.


// npm run build
// 7. Bundle Size Analysis:
// 7.1. Bundle Size Tools:

// Analyze your bundle size using tools like source-map-explorer or webpack-bundle-analyzer. Identify and optimize large dependencies and unnecessary code.


// npx source-map-explorer build/static/js/main.*.js
// By employing these methods, you can identify and address performance bottlenecks, optimize your application, and ensure a smoother user experience. Remember to measure the impact of changes using performance profiling tools and adjust accordingly.

// ///////////////////////////////////////////////////////////////

//     In which situation would you use useMemo() in React?

// The useMemo hook in React is used to memoize the result of a computation and prevent unnecessary recalculations. It is particularly useful in situations where a computation is expensive or time-consuming, and you want to avoid repeating it on every render. Here are some common situations where you might use useMemo:

// 1. Computations in Functional Components:
// When performing heavy computations or complex operations within a functional component, useMemo can be used to memoize the result:


// import React, { useMemo } from 'react';

// const MyComponent = ({ data }) => {
//   const processedData = useMemo(() => {
//     // Expensive computation based on data
//     return processData(data);
//   }, [data]);

//   return <div>{processedData}</div>;
// };
// In this example, processedData will be memoized, and the expensive processData function will only be recomputed when the data dependency changes.

// 2. Preventing Unnecessary Renderings:
// If a component depends on props or state, and the rendering is computationally expensive, you can use useMemo to memoize the JSX markup:



// import React, { useMemo } from 'react';

// const MyComponent = ({ prop1, prop2 }) => {
//   const renderedContent = useMemo(() => {
//     // Expensive rendering based on prop1 and prop2
//     return <div>{prop1 + prop2}</div>;
//   }, [prop1, prop2]);

//   return <div>{renderedContent}</div>;
// };
// In this example, renderedContent is memoized, and the JSX markup will only be recomputed when prop1 or prop2 changes.

// 3. Optimizing Expensive Function Calls:
// If your component uses a function from a third-party library that is computationally expensive and doesn't depend on props or state changes, you can use useMemo to memoize the function:



// import React, { useMemo } from 'react';
// import { expensiveFunction } from 'thirdPartyLibrary';

// const MyComponent = () => {
//   const memoizedExpensiveFunction = useMemo(() => {
//     return expensiveFunction();
//   }, []); // Empty dependency array means it's only calculated once

//   // Use memoizedExpensiveFunction in the component
// };
// This ensures that the expensive function is only called once during the component's lifecycle.

// 4. Memoizing Callback Functions:
// When passing functions as props to child components, useMemo can be used to memoize the callback functions, preventing unnecessary re-renders of child components:



// import React, { useMemo } from 'react';

// const ParentComponent = () => {
//   const handleClick = useMemo(() => {
//     return () => {
//       // Handle click logic
//     };
//   }, []); // Empty dependency array means it's only calculated once

//   return <ChildComponent onClick={handleClick} />;
// };

// const ChildComponent = ({ onClick }) => {
//   // Use onClick in the component
// };
// By memoizing the handleClick function, you ensure that the child component doesn't re-render unnecessarily when the parent re-renders.

// Use useMemo when the performance benefits of memoization outweigh the cost of maintaining the memoized value. It's important to note that useMemo is not a silver bullet, and incorrect usage might lead to performance issues. Always measure and profile your application to ensure that memoization provides the expected performance improvements.


// ////////////////////////////////////////////////////////////

//     How would you avoid binding in React?


// In React, binding can be avoided through various techniques, especially with the introduction of functional components and the use of arrow functions. Here are some methods to avoid binding in React:

// 1. Arrow Functions in Class Components:
// Use arrow functions for class methods. Arrow functions automatically bind the lexical scope, eliminating the need for explicit binding in the constructor.



// class MyComponent extends React.Component {
//   handleClick = () => {
//     console.log('Button clicked!');
//   };

//   render() {
//     return <button onClick={this.handleClick}>Click me</button>;
//   }
// }
// 2. Arrow Functions in Functional Components:
// For functional components, use arrow functions directly in the JSX or define them outside the component. This way, you don't need to bind the functions explicitly.


// import React from 'react';

// const MyComponent = () => {
//   const handleClick = () => {
//     console.log('Button clicked!');
//   };

//   return <button onClick={handleClick}>Click me</button>;
// };
// 3. Function Declarations Outside Render:
// Avoid defining functions within the render method to prevent them from being recreated on every render. This is particularly important for performance.



// class MyComponent extends React.Component {
//   handleClick() {
//     console.log('Button clicked!');
//   }

//   render() {
//     return <button onClick={this.handleClick}>Click me</button>;
//   }
// }
// 4. Binding in the Constructor (Class Components):
// If you still need to use class components and traditional function declarations, you can bind methods in the constructor. However, this approach is less concise compared to using arrow functions.



// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     console.log('Button clicked!');
//   }

//   render() {
//     return <button onClick={this.handleClick}>Click me</button>;
//   }
// }
// 5. Function Components with Hooks:
// In functional components using hooks, you don't need to worry about binding issues. Hooks preserve the lexical scope, making it easy to use functions without binding.



// import React, { useState } from 'react';

// const MyComponent = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// };
// By adopting these practices, you can write more concise and readable code while avoiding common binding issues in React components. Arrow functions and functional components with hooks offer a more modern and cleaner approach to handling functions and their scope in React applications.

// ///////////////////////////////////////////////////////////////////


// Explain what a mounted component is.


// React does so by "mounting" (adding nodes to the DOM), "unmounting" (removing them from the DOM), and "updating" (making changes to nodes already in the DOM).

// Mounting is the process of outputting the virtual representation of a component into the final UI representation (e.g. DOM or Native Components).

// In React, a "mounted component" refers to a component that has been rendered and attached to the DOM (Document Object Model). In the React component lifecycle, there are several phases a component goes through, and the term "mounted" specifically refers to the phase when the component has been successfully rendered to the DOM.

// Here's a brief overview of the React component lifecycle and the "mounted" phase:

// Mounting Phase:

// constructor(): The initial phase where the component is initialized, and state and props are set up.
// static getDerivedStateFromProps(): A static method that is called before every render to update the state based on changes in props.
// render(): The method that returns the JSX representation of the component.
// componentDidMount(): Invoked after the component has been rendered to the DOM. This is the phase where side effects such as data fetching or subscriptions can be performed. The component is considered "mounted" at this point.
// Updating Phase:

// static getDerivedStateFromProps(): Similar to the mounting phase, but occurs before each render during updates.
// shouldComponentUpdate(): Determines if the component should re-render. If false is returned, the component won't re-render.
// render(): Re-renders the component based on state or prop changes.
// getSnapshotBeforeUpdate(): Captures information about the DOM before the update.
// componentDidUpdate(): Invoked after the component has been updated in the DOM.
// Unmounting Phase:

// componentWillUnmount(): Invoked just before the component is unmounted and removed from the DOM. Cleanup operations can be performed here.
// Error Handling Phase:

// static getDerivedStateFromError(): Used to update state in response to a JavaScript error during rendering.
// componentDidCatch(): Invoked after an error has been thrown in a descendant component.
// The "mounted" phase is crucial for performing actions that should only occur once the component is visible in the DOM. For example, you might use componentDidMount to initiate data fetching, subscribe to events, set up timers, or perform other side effects.

// In a functional component with hooks, the equivalent to componentDidMount is the useEffect hook with an empty dependency array:

// jsx
// Copy code
// import React, { useEffect } from 'react';

// const MyComponent = () => {
//   useEffect(() => {
//     // Code to run after component is mounted
//     return () => {
//       // Cleanup code (equivalent to componentWillUnmount)
//     };
//   }, []); // Empty dependency array means it runs only once after mount

//   return <div>Component content</div>;
// };
// In summary, a mounted component is a component that has completed its initial rendering and is now part of the DOM, allowing you to perform tasks specific to the component's presence in the user interface.


// //////////////////////////////////////////////////////


// Explain what an event is in React.

// ● Events in React JS allow developers to respond to user interaction within their applications quickly and efficiently. 
// ● Events are triggered whenever certain actions occur – from clicks to key presses - which then fire off callback functions so that appropriate responses can be made accordingly. 


// In React, an event is an occurrence triggered by the user or the system that can be detected and handled by React components. Events in React are similar to events in standard HTML but are handled in a more declarative way using JSX syntax.

// Basic Concepts:
// Event Handling in JSX:

// In React, events are attached using JSX syntax, similar to HTML. For example, handling a button click is done like this:



// <button onClick={handleClick}>Click me</button>
// Here, handleClick is a function that will be called when the button is clicked.

// SyntheticEvent:

// React uses SyntheticEvent, a cross-browser wrapper around the browser's native event, to provide a consistent API for handling events. This abstraction allows React to optimize and normalize event handling.
// Event Handling in Class Components:
// In class components, event handlers are usually defined as methods within the component class. The methods are then attached to the corresponding events in the JSX.


// import React, { Component } from 'react';

// class MyComponent extends Component {
//   handleClick = (event) => {
//     console.log('Button clicked!', event);
//   };

//   render() {
//     return <button onClick={this.handleClick}>Click me</button>;
//   }
// }
// Event Handling in Functional Components with Hooks:
// In functional components, the useState and useEffect hooks are often used to manage state and side effects related to events.



// import React, { useState, useEffect } from 'react';

// const MyComponent = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   useEffect(() => {
//     console.log('Component updated with new count:', count);
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// };

// Common Events in React:
// onClick: Triggered when a clickable element, like a button or a link, is clicked.
// onChange: Triggered when the value of an input element changes (e.g., in a text input or a dropdown).
// onSubmit: Triggered when a form is submitted.
// onMouseOver/onMouseOut: Triggered when the mouse pointer enters/exits an element.
// Handling Events with Parameters:
// To pass parameters to an event handler, you can use an arrow function in the JSX:



// <button onClick={() => handleClick(param)}>Click me</button>
// Alternatively, you can use the bind method:



// <button onClick={handleClick.bind(this, param)}>Click me</button>
// In summary, events in React are interactions triggered by users or the system that can be handled by React components. Event handling is an essential aspect of building interactive and dynamic user interfaces in React applications.

// ///////////////////////////////////////////////////////////////////////

// What is a class component?


// The class component uses ES6 class syntax, and it extends React components with a render method that returns React elements.

// In React, a class component is a type of component that is defined using ES6 class syntax. Class components are also known as stateful components because they have the ability to manage and maintain local state. They were the primary way of creating components in React before the introduction of functional components and hooks.

// Here's a basic example of a class component in React:

// jsx
// Copy code
// import React, { Component } from 'react';

// class MyComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // Initial state goes here
//       count: 0,
//     };
//   }

//   handleClick = () => {
//     // Updating state using setState
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.handleClick}>Increment</button>
//       </div>
//     );
//   }
// }

// export default MyComponent;
// Key features of class components include:

// State Management:

// Class components can have local state, managed through the this.state property.
// State is initialized in the constructor method and updated using the setState method.
// Lifecycle Methods:

// Class components have lifecycle methods (e.g., componentDidMount, componentDidUpdate, componentWillUnmount) that allow developers to perform actions at specific points in the component's lifecycle.
// Instance Methods:

// Class components often define methods that handle events or encapsulate other logic related to the component.
// Class Inheritance:

// Class components extend the React.Component class, inheriting its functionality and methods.


// ///////////////////////////////////////////////////////

// What is a component?


// In React, a component is a reusable, self-contained piece of code that represents a part of a user interface. Components are the building blocks of a React application, and they encapsulate the structure and behavior of a UI element. React applications are typically composed of multiple components that are organized into a hierarchical structure.

// Components can be classified into two main types:

// Functional Components:

// Functional components are defined as JavaScript functions.
// They are stateless by default, but with the introduction of React hooks in React 16.8, functional components can now use state and other React features previously limited to class components.
// Functional components are concise, easier to read, and encouraged for simple, stateless UI components.

// ------------------------
// import React from 'react';

// const MyComponent = () => {
//   return <div>Hello, I'm a functional component!</div>;
// };

// export default MyComponent;
// ---------------------------

// Class Components:

// Class components are defined using ES6 class syntax and extend the React.Component class.
// They can have local state, lifecycle methods, and instance methods.
// While functional components with hooks are now the preferred way to define components, class components are still supported in React.

// ---------------------------
// import React, { Component } from 'react';

// class MyComponent extends Component {
//   render() {
//     return <div>Hello, I'm a class component!</div>;
//   }
// }

// export default MyComponent;
// ---------------------------

// Key Characteristics of Components:
// Reusability:

// Components are designed to be reusable. You can create a component and use it in multiple parts of your application.
// Encapsulation:

// Components encapsulate their functionality and appearance. They can be thought of as self-contained units that can be easily composed to build complex UIs.
// Composition:

// React applications are typically built by composing components together to create a tree-like structure. A parent component can contain child components, and those child components can, in turn, contain more child components.
// State and Props:

// Components can have local state managed by the component itself. Additionally, they can receive data from parent components through props (properties).
// Lifecycle Methods:

// Class components have lifecycle methods (e.g., componentDidMount, componentDidUpdate, componentWillUnmount) that allow developers to perform actions at specific points in the component's lifecycle.
// Declarative UI:

// React components describe what the UI should look like at any point in time. This declarative approach makes it easier to understand and reason about the UI.
// Here's an example of using components together to create a simple application:



// import React from 'react';
// import Header from './Header';
// import MainContent from './MainContent';
// import Footer from './Footer';

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <MainContent />
//       <Footer />
//     </div>
//   );
// };

// export default App;
// In this example, Header, MainContent, and Footer are components that are composed together to create the overall structure of the App component.


// /////////////////////////////////////////////////////////



// What is the difference between class and functional components?

// Class components and functional components are two different ways of defining React components in a React application. While both types of components serve the same fundamental purpose of representing parts of a user interface, they differ in terms of syntax, features, and best practices. As of the introduction of React Hooks in React 16.8, functional components with hooks have become the more popular and recommended way of writing components.

// 1. Syntax:
// Class Components:


// import React, { Component } from 'react';

// class MyClassComponent extends Component {
//   render() {
//     return <div>Hello, I'm a class component!</div>;
//   }
// }
// Functional Components:


// import React from 'react';

// const MyFunctionalComponent = () => {
//   return <div>Hello, I'm a functional component!</div>;
// };
// 2. State:
// Class Components:

// Class components can have local state managed by the component itself.
// State is initialized in the constructor method and updated using the setState method.

// import React, { Component } from 'react';

// class MyComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   handleClick = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.handleClick}>Increment</button>
//       </div>
//     );
//   }
// }
// Functional Components with Hooks:

// Functional components with hooks can also manage local state using the useState hook.
// The useState hook returns the current state value and a function to update the state.

// -------------------
// import React, { useState } from 'react';

// const MyComponent = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   );
// };
// --------------------


// 3. Lifecycle Methods:
// Class Components:

// Class components have lifecycle methods (e.g., componentDidMount, componentDidUpdate, componentWillUnmount) that allow developers to perform actions at specific points in the component's lifecycle.

// ----------------------
// import React, { Component } from 'react';

// class MyComponent extends Component {
//   componentDidMount() {
//     console.log('Component is mounted!');
//   }

//   componentDidUpdate() {
//     console.log('Component is updated!');
//   }

//   componentWillUnmount() {
//     console.log('Component is about to unmount!');
//   }

//   render() {
//     return <div>Hello, I'm a class component!</div>;
//   }
// }
// ------------------------

// Functional Components with Hooks:

// Functional components with hooks have equivalent lifecycle methods using the useEffect hook.
// The useEffect hook can handle side effects such as data fetching, subscriptions, or cleanup.


// -------------------------
// import React, { useEffect } from 'react';

// const MyComponent = () => {
//   useEffect(() => {
//     console.log('Component is mounted!');

//     return () => {
//       console.log('Component is about to unmount!');
//     };
//   }, []); // Empty dependency array means it runs only once after mount

//   return <div>Hello, I'm a functional component!</div>;
// };
// -------------------------

// 4. Readability and Conciseness:
// Functional components with hooks are generally considered more readable, concise, and easier to understand.
// They encourage a more functional programming style and make it easier to reason about the component's behavior.

// 5. Class Inheritance:
// Class components extend the React.Component class and support class inheritance.
// Functional components are just functions and don't support class inheritance.

// 6. Best Practices:
// As of React 16.8, functional components with hooks are the recommended way of writing components in React.
// They simplify component logic, encourage better code organization, and offer improved performance optimizations.
// In summary, while class components are still valid and widely used, functional components with hooks have become the standard in modern React development due to their simplicity, readability, and the benefits brought by React Hooks. Functional components are now the preferred choice for writing new components in React.


// //////////////////////////////////////////////////////////


// What is a state object?


// In React, a "state object" refers to an object in a component that holds the local state of that component. The state represents data that can change over time and influences the rendering of the component. The concept of state is fundamental in React and allows components to manage and respond to dynamic user interactions, data fetching, or any other scenario where the UI needs to be updated based on changing values.

// In class components, the state is typically initialized in the constructor using this.state and updated using the setState method. Here's a simple example:



// import React, { Component } from 'react';

// class MyComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       message: 'Hello, React!',
//     };
//   }

//   handleClick = () => {
//     this.setState({
//       count: this.state.count + 1,
//       message: 'Button clicked!',
//     });
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.state.message}</p>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.handleClick}>Click me</button>
//       </div>
//     );
//   }
// }

// export default MyComponent;


// In functional components, the useState hook is used to create and manage state. The useState hook returns an array where the first element is the current state value, and the second element is a function to update the state. Here's the equivalent example using a functional component:


// import React, { useState } from 'react';

// const MyComponent = () => {
//   const [state, setState] = useState({
//     count: 0,
//     message: 'Hello, React!',
//   });

//   const handleClick = () => {
//     setState({
//       count: state.count + 1,
//       message: 'Button clicked!',
//     });
//   };

//   return (
//     <div>
//       <p>{state.message}</p>
//       <p>Count: {state.count}</p>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// };

// export default MyComponent;


// In both examples, the state object contains properties (count and message in this case), and when the button is clicked, the setState function is used to update the state, triggering a re-render of the component with the new state values.

// The use of a state object allows components to maintain and manage multiple pieces of data that can change independently. State is crucial for creating interactive and dynamic user interfaces in React applications.

// ////////////////////////////////////////////////////

// What is a props object?

// In React, the "props object" refers to a JavaScript object that holds the properties (props) passed to a React component. Props allow the parent component to pass data down to its child components, enabling communication and customization of child components based on the parent's needs.

// Functional Components:
// In functional components, the props object is automatically passed as the first argument to the component's function:

// jsx
// Copy code
// import React from 'react';

// const MyComponent = (props) => {
//   return <div>{props.message}</div>;
// };
// Here, props is an object containing all the properties passed to MyComponent. The component uses props.message to access the specific prop named "message."

// Class Components:
// In class components, the props object is accessed through this.props:

// --------------------
// import React, { Component } from 'react';

// class MyComponent extends Component {
//   render() {
//     return <div>{this.props.message}</div>;
//   }
// }
// -------------------
// The this.props syntax is used to access the props object within class component methods like render().

// Example Usage:
// ParentComponent.js:
// -------------------
// import React from 'react';
// import ChildComponent from './ChildComponent';

// const ParentComponent = () => {
//   const data = 'Hello from Parent!';

//   return <ChildComponent message={data} />;
// };

// export default ParentComponent;
// --------------------
// ChildComponent.js:

// import React from 'react';

// const ChildComponent = (props) => {
//   return <p>{props.message}</p>;
// };

// export default ChildComponent;
// ---------------------

// In this example, the ParentComponent is passing a prop named "message" with the value "Hello from Parent!" to the ChildComponent. The ChildComponent then displays the value of this prop.

// Props provide a way to make components more dynamic and reusable, as the same component can be used with different sets of data in different parts of the application. The props object is an integral part of the parent-child communication in React.

// /////////////////////////////////////////

// How are state objects different from props objects?

// In React, state and props are both mechanisms for managing data in a component, but they serve different purposes and have distinct characteristics.
// ------
// State:
// ------

// Definition:
// State is a JavaScript object that represents the internal, mutable data of a component.
// It is managed and controlled by the component itself.
// Changes to state trigger a re-render of the component.

// Mutability:
// State is mutable and can be updated using the setState method.
// State changes trigger a re-render of the component, updating the UI.

// Scope:
// State is local to the component in which it is defined. It is not directly accessible by parent or child components.

// Initialization:
// State is typically initialized in the component's constructor method or, in functional components, using the useState hook.

// Example of State:
// Class Component:
// ----------------

// Copy code
// --------
// import React, { Component } from 'react';

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// }
// Functional Component with Hooks:


// Copy code
// ---------
// import React, { useState } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// ------
// Props:
// ------
// Definition:
// Props (short for properties) are a mechanism for passing data from a parent component to a child component.
// They are immutable and cannot be modified by the component that receives them.
// Changes to props do not trigger a re-render of the component.

// Immutability:
// Props are immutable and cannot be modified within the component that receives them.
// They are read-only and serve as a way to configure and customize child components.

// Scope:
// Props are passed from parent components to child components. Child components cannot directly modify the props they receive.

// Initialization:
// Props are passed as attributes in JSX when a component is used.

// Example of Props:
// Parent Component:
// ---------------
// Copy code
// ---------
// import React from 'react';
// import ChildComponent from './ChildComponent';

// const ParentComponent = () => {
//   const data = 'Hello from Parent!';

//   return <ChildComponent message={data} />;
// };
// Child Component:


// Copy code
// ---------
// import React from 'react';

// const ChildComponent = (props) => {
//   return <p>{props.message}</p>;
// };

// Key Differences:
// ---------------
// Mutability:
// State is mutable and can be updated by the component itself.
// Props are immutable and cannot be modified within the component that receives them.

// Ownership:
// State is owned and managed by the component itself.
// Props are passed from parent components and are owned by the parent.

// Scope:
// State is local to the component.
// Props are passed from parent to child and are accessible in the child component.

// Triggering Re-renders:
// Changes to state trigger re-renders of the component.
// Changes to props do not trigger re-renders. Components re-render only if their own state or props change.
// In summary, state is internal and mutable data managed by a component, while props are external and immutable data passed from parent components to child components. Understanding when to use state and when to use props is crucial for building effective and maintainable React applications.

// ////////////////////////////////////////////

// Explain what MVC architecture is. 

// MVC stands for Model-View-Controller, and it is a software architectural pattern used for designing and organizing code in applications. The MVC architecture separates an application into three interconnected components, each with distinct responsibilities, to enhance modularity, maintainability, and scalability. The three components are as follows:

// Model (M):

// The Model represents the application's data and business logic. It is responsible for managing the application's state, processing data, and enforcing business rules.
// The Model is independent of the user interface and is not concerned with how the data is presented or how the user interacts with it.
// View (V):

// The View is responsible for presenting the data to the user and receiving user input. It represents the user interface components, such as buttons, forms, and graphical elements.
// The View is unaware of the underlying data and business logic. It relies on the Model to provide the necessary data and updates the user interface accordingly.
// Controller (C):

// The Controller acts as an intermediary between the Model and the View. It receives user input from the View, processes it, and updates the Model accordingly.
// The Controller is responsible for handling user interactions, making decisions based on user input, and updating both the Model and the View as needed.
// In some variations of the MVC pattern, the Controller may be responsible for handling application-level logic and managing the flow of data between the Model and the View.
// Key Principles of MVC:
// Separation of Concerns:

// The primary goal of MVC is to separate different aspects of an application to make the code more modular and maintainable.
// The Model, View, and Controller have distinct responsibilities, and changes in one component should not directly affect the others.
// Reusability:

// The modular structure of MVC promotes the reuse of components. For example, a different View can be created to display the same data, or a different Controller can handle user input in a different way without affecting the underlying Model.
// Testability:

// The separation of concerns makes it easier to test each component independently. Unit testing can be performed on the Model, View, and Controller to ensure their individual functionality.
// Scalability:

// MVC architecture provides a scalable structure that facilitates the addition of new features or the modification of existing ones without major disruptions. Changes in one component are less likely to impact others.
// Example in Web Development:
// In the context of web development, MVC is often used to structure web applications:

// Model (M): Represents the data and business logic. It could involve data storage, retrieval, and processing.
// View (V): Represents the user interface and how the data is presented. It includes HTML, CSS, and UI components.
// Controller (C): Manages user input, updates the Model, and interacts with the View. It often involves server-side logic and routes requests.
// For example, in a web application using a framework like Django (Python) or Ruby on Rails (Ruby), the framework often follows an MVC architecture. The Model handles database operations, the View handles rendering HTML and presenting data, and the Controller manages the flow of data between the Model and the View.

// Overall, the MVC architecture provides a structured and organized approach to building applications, facilitating better code organization, maintainability, and collaboration among developers.

// //////////////////////////////////////////////////////////

// what is architectural difference between React and Angular.


// React and Angular are both popular JavaScript frameworks/libraries for building web applications, but they have several differences in terms of architecture, approach, language, and other aspects. Here's a summary of the key differences between React and Angular:

// 1. Architecture:
// React:
// -----
// Focuses on the "View" part of the application architecture.
// Follows a component-based architecture where UIs are built using components.
// React does not prescribe a specific architectural pattern, allowing developers to choose their preferred state management solutions (e.g., Redux, MobX).

// Angular:
// -------
// Follows the MVC (Model-View-Controller) architectural pattern.
// Provides a more opinionated and structured approach with clear separation of concerns.
// Enforces a specific architecture with modules, components, services, and directives.

// 2. Language:
// React:
// -------
// Written in JavaScript and can be used with JSX (JavaScript XML) syntax.
// Supports ES5, ES6, and TypeScript.

// Angular:
// -------
// Primarily written in TypeScript, a superset of JavaScript.
// TypeScript introduces static typing, decorators, and additional features.

// 3. Data Binding:
// React:
// -----
// Uses one-way data binding. Data flows from parent components to child components.
// Emphasizes a unidirectional data flow.

// Angular:
// -------
// Supports two-way data binding, allowing changes in the UI to automatically update the model and vice versa.
// Simplifies synchronization between the model and the view.

// 4. Dependency Injection:
// React:
// -----
// Does not have built-in support for dependency injection.
// Props drilling is a common pattern to pass data down the component tree.

// Angular:
// -------
// Has a built-in dependency injection system that facilitates the injection of services into components.
// Promotes modularity and testability.

// 5. Rendering:
// React:
// ------
// Uses a virtual DOM to efficiently update only the parts of the actual DOM that have changed.
// Provides a reconciliation algorithm to optimize updates.
// Angular:
// --------
// Uses a real DOM and updates the entire DOM when there are changes.
// Employs change detection to track and update components based on changes in the data.

// 6. Learning Curve:
// React:
// ------
// Generally considered easier to learn, especially for developers familiar with JavaScript.
// Has a more gradual learning curve.

// Angular:
// -------
// Has a steeper learning curve due to its opinionated nature and the introduction of TypeScript.
// Requires understanding of various concepts like modules, decorators, services, etc.

// 7. Tooling:
// React:
// ------
// Can be used with various build tools (e.g., Webpack) and task runners.
// Developers have the flexibility to choose tools based on their preferences.

// Angular:
// -------
// Comes with a comprehensive CLI (Command Line Interface) that automates common development tasks.
// Enforces a specific project structure and simplifies development workflows.


// 8. Community and Ecosystem:
// React:
// -----
// Large and active community.
// Extensive ecosystem with a variety of third-party libraries and tools.

// Angular:
// -------
// Backed by Google, has strong community support.
// Comprehensive ecosystem with built-in tools for testing, animations, etc.

// 9. Size and Performance:
// React:
// -----
// Lightweight core. The size of the final bundle depends on additional libraries used (e.g., state management libraries).

// Angular:
// -------
// Larger bundle size compared to React due to the framework's features.
// Supports Ahead-of-Time (AOT) compilation for improved performance.

// 10. Flexibility:
// React:
// -----
// Offers more flexibility in terms of choosing libraries and tools.
// Developers have more control over the architecture.

// Angular:
// -------
// Provides a more opinionated and structured approach.
// Offers less flexibility but more guidance for building large-scale applications.
// Conclusion:
// The choice between React and Angular depends on project requirements, team expertise, and developer preferences. React is known for its simplicity, flexibility, and ease of integration, while Angular provides a more opinionated and structured framework with a full set of features out of the box. Each has its strengths, and the decision often comes down to the specific needs of the project and the development 

// /////////////////////////////////////////////


// How are controlled and uncontrolled components different?

// Controlled components and uncontrolled components are two different approaches to managing and handling form elements and user input in React. The key differences lie in how they handle and manage the state of form elements.

// Controlled Components:
// State is Managed by React:

// In controlled components, the state of form elements (such as input fields) is managed by React using the useState hook (in functional components) or this.setState (in class components).
// The component's state serves as the single source of truth for the values of form elements.
// Input Values are Controlled:

// The values of form elements are tied to the component's state.
// User input triggers a change in the component's state, and the component re-renders to reflect the updated state.


// Example:
// Copy code
// ---------
// import React, { useState } from 'react';

// const ControlledComponent = () => {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//       />
//       <p>Input Value: {inputValue}</p>
//     </div>
//   );
// };

// export default ControlledComponent;


// Predictable Behavior:
// --------------------
// Since the state is managed by React, the behavior is predictable and follows the React data flow model.
// The component's UI is always a reflection of its current state.

// Uncontrolled Components:
// ------------------------
// State is Managed by the DOM:
// In uncontrolled components, the state of form elements is not managed by React. Instead, it is managed by the DOM itself.
// The component relies on refs to access and interact with the DOM nodes directly.

// Input Values are Uncontrolled:
// The values of form elements are not directly tied to the component's state. Instead, the component queries the DOM to get the current values.


// Example:
// Copy code
// ---------
// import React, { useRef } from 'react';

// const UncontrolledComponent = () => {
//   const inputRef = useRef();

//   const handleButtonClick = () => {
//     // Access the input value directly through the DOM
//     alert(`Input Value: ${inputRef.current.value}`);
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleButtonClick}>Get Input Value</button>
//     </div>
//   );
// };

// export default UncontrolledComponent;
// -----------------


// Use Cases:
// ---------
// Uncontrolled components are often used when integrating with non-React code or when working with third-party libraries that manage their state internally.
// They might be suitable in situations where you want to minimize the amount of React-specific code.
// Choosing Between Controlled and Uncontrolled Components:


// Controlled Components:
// Provide a predictable and React-centric way of managing form state.
// Suitable for situations where React should have full control over form behavior.


// Uncontrolled Components:
// Useful in scenarios where you want to integrate React with non-React code or libraries.
// Can be simpler in some cases, especially when dealing with large and dynamic forms.
// The choice between controlled and uncontrolled components depends on the specific requirements and constraints of the application. In many cases, controlled components are the preferred choice in React applications due to their predictability and ease of integration with other React features.


// ////////////////////////////////////////////////////


// What are package managers in React.js?

// In React.js, package managers are tools that facilitate the installation, management, and dependency resolution of JavaScript packages and libraries. They help developers streamline the process of managing project dependencies, ensuring that the correct versions of packages are installed and available for use in the application. Two popular package managers used in the React.js ecosystem are:


// npm (Node Package Manager):
// npm is the default package manager for Node.js, and it is widely used in the JavaScript ecosystem, including React.js development.
// npm allows developers to install, manage, and share JavaScript packages and libraries.
// It is often used to install React itself, as well as third-party libraries and tools.


// Example Commands:
// Copy code
// # Install a package
// npm install package-name

// # Install a package as a development dependency
// npm install package-name --save-dev

// # Install packages based on package.json
// npm install

// # Update packages to their latest versions
// npm update


// Package.json:
// package.json is a file in the root of a Node.js project that lists dependencies and other metadata.
// It includes information about the project, scripts, and dependencies, allowing developers to define and manage the project's dependencies.


// Yarn:
// Yarn is another package manager for JavaScript that was developed by Facebook in collaboration with other companies.
// It is compatible with npm and offers faster and more reliable dependency management.
// Yarn uses a lockfile (yarn.lock) to ensure deterministic and reproducible installations.


// Example Commands:
// bash
// Copy code
// # Install a package
// yarn add package-name

// # Install a package as a development dependency
// yarn add package-name --dev

// # Install packages based on yarn.lock
// yarn install

// # Upgrade packages to their latest versions
// yarn upgrade


// Yarn.lock:
// Similar to package.json, the yarn.lock file is generated by Yarn and locks down the versions of dependencies to ensure consistency across different environments.
// Choosing between npm and Yarn often depends on personal preference and the requirements of the project. Both package managers are widely used in the React.js community, and developers can seamlessly switch between them without compatibility issues. It's essential to adhere to the chosen package manager's conventions and use the associated configuration files (package.json and yarn.lock) for managing project dependencies.

// ////////////////////////////////////

// Explain what the Shadow DOM is.

// The Shadow DOM, or Shadow Document Object Model, is a web standard that provides encapsulation for the styling and structure of a web component. It allows developers to create and use self-contained components with their own scoped styles, preventing style leakage and conflicts with the styles of the rest of the document.

// Here are key concepts and features of the Shadow DOM:

// Encapsulation:
// The Shadow DOM encapsulates the styles and markup of a component, making it isolated from the rest of the document. This encapsulation helps prevent styles or scripts in the component from affecting the global styles and scripts, and vice versa.

// Scoped Styles:
// Styles defined within the Shadow DOM are scoped to the component. They do not leak out to the surrounding document, and styles from the document do not penetrate into the Shadow DOM. This allows developers to write styles without worrying about unintentional global effects.

// Composition:
// Components with Shadow DOM can be composed and reused without concern for naming conflicts or style collisions. Each instance of a component with Shadow DOM operates independently, contributing to improved modularity and maintainability.


// Isolation of JavaScript:
// JavaScript running inside the Shadow DOM is isolated from the global JavaScript context. This means that variables, functions, or scripts defined within the Shadow DOM do not interfere with the global scope, and vice versa.


// Creating Shadow DOM:
// The Shadow DOM is created using the attachShadow method. In the context of web components, this method is typically called within the constructor of a custom element.


// javascript
// Copy code
// class MyComponent extends HTMLElement {
//   constructor() {
//     super();

//     // Create a shadow DOM and attach it to the custom element
//     const shadowRoot = this.attachShadow({ mode: 'open' });

//     // Define the markup and styles for the shadow DOM
//     shadowRoot.innerHTML = `
//       <style>
//         /* Scoped styles for the component */
//         :host {
//           display: block;
//           padding: 10px;
//           background-color: lightgray;
//         }
//       </style>
//       <div>
//         <!-- Content of the component -->
//         <p>Hello, Shadow DOM!</p>
//       </div>
//     `;
//   }
// }

// // Define the custom element using the class
// customElements.define('my-component', MyComponent);
// In this example, attachShadow({ mode: 'open' }) is used to create an open Shadow DOM, which allows external styles to be applied to the Shadow DOM.


// Accessing the Shadow DOM:
// Outside code can access the Shadow DOM using the shadowRoot property of an element with Shadow DOM. However, direct manipulation of the Shadow DOM from outside the component is discouraged for the sake of encapsulation.

// javascript
// Copy code
// const myComponent = document.querySelector('my-component');
// const shadowRoot = myComponent.shadowRoot;

// The Shadow DOM is a crucial feature for building reusable, encapsulated components in web development. It enhances the modularity and maintainability of web applications by providing a way to create components with encapsulated styles and structure. The Shadow DOM is commonly used in conjunction with custom elements and web components.

// ///////////////////////////////////////////


// How is the Shadow DOM different from the virtual DOM?. 

// The Shadow DOM and the virtual DOM are both concepts used in web development, but they serve different purposes and address different concerns. Let's explore the key differences between the Shadow DOM and the virtual DOM:

// 1. Purpose:
// Shadow DOM:
// The Shadow DOM is primarily designed for encapsulation. It allows developers to create isolated and encapsulated components with scoped styles and markup. The main goal is to prevent style and DOM structure leakage from one component to another.


// Virtual DOM:
// The virtual DOM is a performance optimization technique. It provides an in-memory representation of the actual DOM to efficiently update the UI by minimizing direct manipulations of the real DOM. The focus is on improving rendering efficiency and reducing unnecessary reflows and repaints.


// 2. Isolation:
// Shadow DOM:
// Provides encapsulation by isolating the styles and structure of a component. Styles defined within the Shadow DOM are scoped to the component, and the DOM structure is not accessible from the outside.

// Virtual DOM:
// Does not provide encapsulation or isolation of styles. Its primary goal is to optimize updates to the UI by reducing the number of direct manipulations to the real DOM.

// 3. Usage:
// Shadow DOM:
// Typically used in the context of web components. It allows developers to create reusable and encapsulated components that can be composed without worrying about style or DOM conflicts.

// Virtual DOM:
// Widely used in libraries and frameworks like React. It is employed to efficiently update the UI by comparing the differences between consecutive states and applying minimal changes to the real DOM.

// 4. Concerns:
// Shadow DOM:
// Addresses encapsulation, style scoping, and DOM structure isolation. It ensures that the styles of one component do not affect others and that the DOM structure is self-contained.

// Virtual DOM:
// Focuses on performance optimization, reducing the cost of updating the UI by batching and efficiently applying changes to the real DOM.


// 5. Implementation:
// Shadow DOM:
// Created using the attachShadow method. It is commonly used with custom elements to encapsulate the styles and structure of a component.


// javascript
// Copy code
// const shadowRoot = element.attachShadow({ mode: 'open' });


// Virtual DOM:
// Created in memory as a lightweight representation of the actual DOM. It is used by libraries and frameworks like React to efficiently update the UI based on changes to component state.


// 6. Common Use Cases:
// Shadow DOM:
// Ideal for creating reusable and encapsulated web components. It is commonly used when developing component-based architectures.

// Virtual DOM:
// Widely used in applications where dynamic and frequent updates to the UI are required. Commonly employed in single-page applications built with libraries like React.

// 7. Framework/Library Support:
// Shadow DOM:
// Supported in modern browsers and is used in conjunction with web components. It is not tied to any specific library or framework.


// Virtual DOM:
// Widely used in libraries and frameworks like React and Vue.js. The virtual DOM is a key concept in these frameworks for optimizing UI updates.
// In summary, while both the Shadow DOM and the virtual DOM are related to the DOM and web development, they serve different purposes. The Shadow DOM focuses on encapsulation and isolation of styles and structure, while the virtual DOM is a performance optimization technique for efficiently updating the UI by minimizing direct manipulations of the real DOM. They are often used in combination to achieve both encapsulation and performance benefits in web applications.

// ////////////////////////////////////////////////

// Explain what a pure function is. 


// A pure function is a function in programming that has two main characteristics:

// Deterministic:
// A pure function produces the same output for the same set of input parameters every time it is invoked. There are no hidden or external factors that can cause the function to behave differently for the same inputs.


// No Side Effects:
// A pure function does not cause any observable side effects outside of its scope. It means that when a pure function is called, it doesn't modify any external state, doesn't mutate input parameters, doesn't interact with I/O devices, and doesn't perform any other actions that could affect the program's state or the outside world.
// In essence, a pure function is like a mathematical function. Given the same input, it will always produce the same output, and it won't change anything outside of its scope. Pure functions are a fundamental concept in functional programming and have several advantages:

// Advantages of Pure Functions:
// Predictability:
// Since pure functions are deterministic, you can predict their behavior based on their inputs, making code easier to reason about.


// Testability:
// Pure functions are easy to test because you can isolate them from the rest of the program. You only need to consider the inputs and outputs without worrying about external state.


// Concurrency:
// Pure functions are inherently thread-safe and can be parallelized easily. They don't rely on shared state that might be modified concurrently by multiple threads.


// Cacheability:
// Because pure functions always produce the same output for the same inputs, the results can be cached, leading to potential performance optimizations.


// Debugging:
// Debugging is simplified because the behavior of pure functions is determined solely by their inputs and not by hidden or changing external factors.


// Examples of Pure Functions:
// javascript
// Copy code
// // Pure Function Example 1
// function add(x, y) {
//   return x + y;
// }

// // Pure Function Example 2
// function square(x) {
//   return x * x;
// }

// // Impure Function (Not Pure)
// let result = 0;
// function impureAdd(x, y) {
//   result = x + y;
//   return result;
// }


// In the above examples, add and square are pure functions because they meet the criteria of being deterministic and having no side effects. On the other hand, impureAdd is not a pure function because it modifies the external state (result), leading to observable side effects.

// By adhering to the principles of pure functions, developers can write code that is more modular, easier to understand, and less error-prone, especially in functional programming paradigms.


// /////////////////////////////////////

// Explain what a pure function in react

// In React, a pure function refers to a specific type of function that satisfies the principles of functional programming, particularly the characteristics of pure functions. Pure functions in the context of React are often associated with functional components and are essential for building predictable and maintainable UIs.

// Here are the key characteristics of a pure function in the context of React:

// Deterministic:
// A pure function in React is deterministic, meaning that given the same set of input props and state, it will always produce the same output (Virtual DOM representation) during each invocation.

// No Side Effects:
// A pure function should not cause any side effects. It should not modify the state outside of its scope, interact with external APIs, or perform any other actions that could affect the application's state or the outside world.

// Props and State as Input:
// A pure function in React typically takes the component's props and state as input parameters. It produces a Virtual DOM representation based on these inputs.


// No Mutation of Props or State:
// A pure function should not mutate the input props or state. Instead, it should treat them as immutable data and create new objects or values as needed.
// Here's an example of a pure function in React:


// Copy code

// import React from 'react';

// // Pure Function Component
// const PureComponent = (props) => {
//   // No side effects, only depends on the input props
//   const { name, age } = props;

//   // Deterministic output based on props
//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//     </div>
//   );
// };

// export default PureComponent;


// In this example, PureComponent is a functional component that behaves like a pure function. It takes name and age as input through the props parameter and produces a Virtual DOM representation based on these props. It doesn't have any internal state, doesn't cause side effects, and is deterministic.

// Advantages of Pure Functions in React:
// Predictable Rendering:
// Pure components render predictably based on their input props and state, making it easier to reason about their behavior.

// Improved Performance:
// React can optimize the rendering process for pure components more effectively, leading to potential performance improvements.

// Easier Testing:
// Pure components are easier to test since their behavior is solely determined by their inputs, and they don't rely on external state changes.

// Facilitates Memoization:
// Memoization techniques, such as React's React.memo or custom memoization strategies, work well with pure components.
// In summary, pure functions in React, often represented by functional components, adhere to the principles of functional programming. They contribute to a more predictable, modular, and maintainable codebase, and they play a key role in React's performance optimizations.

// ///////////////////////////////////////

// Explain what Flux architecture is.

// What are bundlers in React.js?

// difference between React.memo and useMemo





// ////////////////////////////////////////////
// ///////////////////////////////////////////
// redux tools
// //////////////////////
// /////////////////////
// Developed back in 2015 by Dan Abramov and Andrew Clark, Redux is an open-source library that has been designed with the help of JavaScript. The primary use of Redux is to manage and centralize the states of applications. However, it is generally used with JavaScript libraries, such as Angular or React, to build User Interfaces (UIs).

// Being an attractive stream, Redux charms a lot of people. So, if you're ready to curate your career in this domain, refer to these Redux interview questions to prepare well and get the job you deserve.

// We created the Redux Interview questions and answers blog into two stages, they are:

// For Freshers
// For Experienced 
// Top 10 Redux Interview Questions and Answers
// What is Redux in ReactJS?
// Is it true that Redux is only compatible with React?
// What are some of Redux DevTools' most essential features?
// In what situations may we use Redux?
// Explain what a "store" in Redux means.
// In Redux, how can we structure the top-level directories?
// Are there similarities between Redux and RxJS?
// What are the concepts of functional programming?
// What is the difference between state and props?
// What are ReactJs' limitations?
// Redux Interview Questions and Answers for Freshers
// 1. What is Redux?
// Redux is an open-source library written in the JavaScript scripting language. Redux's primary purpose is to manage and centralise the application state, and it's generally used in conjunction with JavaScript libraries like React or Angular to create user interfaces (User Interfaces). It's a state container that's predictable for JavaScript apps. Redux is a lightweight application (about 2 kilobytes) with no dependencies.

// 2. What is Flux?
// Like the Model View Controller design pattern, Flux is an application design paradigm. Flux is a new type of architecture that works in tandem with React and the idea of Unidirectional Data Flow.

// Flux

// 3. What is Redux in ReactJS?
// The official React binding for Redux is Redux in React, which allows React components to read data from a Redux Store and dispatch Actions to the Store to update the data. The goal of Redux is to make it easier for apps to scale by providing a way to manage the state using a unidirectional data flow architecture.

// Want to enhance your skills in dealing with Programming & Framework, enroll in our Online Redux Training
// 4. Describe Redux's basic principles.
// Redux's basic principles:

// Source of truth: Our application's global state is always stored in an object tree within a single store.
// The state is read-only: Our application's state can only be changed by issuing an action, which is an object that describes what happened.
// Pure functions are used to make changes: This principle dictates that we must construct pure reducers to define how the actions modify the state tree.
// 5. What are the advantages of using Redux?
// The following are some of the advantages of using Redux:

// Redux makes transferring states between components a breeze.
// Redux's states are always predictable, and it's pretty simple to maintain.
// Redux makes debugging and testing code simple by logging behavior and status.
// Redux is a fantastic performer. It may occur to us that maintaining the application's state global will cause performance issues. However, this isn't always the case because React-Redux has several performance optimizations built-in, so our connected component only re-renders when it needs to.
// Redux also provides state persistence by saving the application's state in local storage and restoring it after a refresh.
// 6. Is it true that Redux is only compatible with React?
// No, Redux does not have to be used in conjunction with React. For many UI layers, Redux is used as a data store. Redux has bindings for React, Angular, Angular 2, Vue, and more frameworks.

// 7. What is  Redux Toolkit?
// Redux Toolkit is Redux's official, opinionated, and battery-powered development toolkit. It also includes the most popular Redux add-ons, such as Redux Thunk for asynchronous logic, Reselect for building selector functions, and many others, making development easier and saving developers time.

//  MindMajix YouTube Channel

// 8. What are some of Redux DevTools' most essential features?
// Redux DevTools has the following essential features:

// Redux DevTools is a time travel environment that allows us to live edit in Redux with action replay, hot reloading, and a customized user interface.
// We can check all states and the action payload using Redux DevTools. Simply canceling activities allows us to travel back in time.
// If we update the code of the reducer, each stage action is re-evaluated.
// With the persist state() store enhancer, we can also keep our debug sessions across page reloads.
// 9. Is keeping all of the component's states in the Redux store necessary?
// All component states do not need to be kept in the Redux store. We need to keep your application state as little as possible. Thus, we should only do it if it makes a difference to us or if it makes using Dev Tools easier.

// 10. In what situations may we use Redux?
// Redux is frequently used in conjunction with React. However, we can use the bindings it provides in conjunction with Angular, Vue, Meteor, and other frameworks.

// 11. What are Redux constants?
// When using an Integrated Development Environment, constants in Redux assist us in quickly locating all instances of a specific functionality across our whole project (IDE). We may avoid ridiculous issues caused by typing errors or typos by using constants, which display a "ReferenceError" anytime a typo is made.

// 12. What is the mental model of redux-saga?
// In our programme, Redux-Saga is a separate thread that is only responsible for side effects in our program. Redux middleware is Redux-Saga. It can be started, paused, and terminated from the main application using regular Redux actions, has access to the complete Redux application state, and can also dispatch Redux actions, in other words.

// 13. Explain what a "store" in Redux means.
// In Redux, the "Store" holds all the states, reducers, and actions that make up the app. The following are some of the Store's responsibilities:

// The Redux Store keeps track of the current application's state from within.

// We can use the Store to get the current state.getState().
// We can use the Store—dispatch to update the state (action).
// The Store can also be used to register listener callbacks. subscriber(listener)
// 14. What is Redux Thunk?
// We can write action creators that return a function instead of an action using Redux Thunk middleware. This thunk can delay an action's dispatch or perform conditional dispatch. The storage methods dispatch and getState are supplied as parameters to the internal procedure (). When an action creator returns a function, the Redux Thunk middleware executes the function, which does not have to be pure.

//  In other words, the function is allowed to have side effects, such as making asynchronous API calls. It's even capable of dispatching activities. The Redux thunk is used to postpone the dispatch of action or to dispatch if a given condition is fulfilled. If Redux Thunk middleware is enabled, when a function rather than an action object is sent, the middleware will call that function using the dispatch method as the first argument.

// 15. What are Redux's workflow features?
// Redux's workflow features are:

// Reset: Resetting the Store's state is possible.
// Revert: It is possible to revert or roll back to the previously committed state.
// Sweep: All disabled actions that we mistakenly fired will be deleted.
// Commit: The current state is set as the starting point.
// Related Article - ReactJS Introduction
// Redux Interview Questions and Answers for Experienced
// 1. What are Redux forms, and how do you use them? What are the main characteristics?
// Redux Forms, which are available in both React and Redux, allow a form in React to use Redux to store all of its states. In HTML5, we can utilize them with raw inputs. Redux forms are compatible with various UI frameworks, including Material UI, React Widgets, React Bootstrap, etc.

// The following are the main characteristics of Redux forms:

// The Redux store ensures the persistence of field data.
// Validation and submission (synchronous/asynchronous).
// Field values are formatted, parsed, and normalized.
// 2. In Redux, how can we structure the top-level directories?
// There are numerous top-level directories in every Redux application, as seen below:

// Containers: Containers connect "smart" React components to Redux.
// Actions: Actions are utilized by all action producers, and the file name should relate to the app's section.
// Reducers: Reducers are used for all reducers with the same file name as the state key.
// Store: Stores are used to set up new stores. This directory works best in programs that are modest to medium in size.
// Redux Data Flow

// 3. What is  Redux-Saga?
// Redux Saga is a middleware framework that allows a Redux store to communicate with external resources asynchronously, such as making HTTP calls to external services, accessing browser storage, and performing Input/Output operations, among other things. These procedures are also known as side effects.

// 4. Are there any things we should never do inside a reducer?
// We should never do the following things inside a reducer:

// Change the reducer's parameter.
// We must ensure no side actions, such as routing transitions or API calls.
// Non-pure functions, such as Date. now(), Math. random(), and so on should not be called.
// 5. What is the distinction between React redux and React context?
// Context may be used directly in your application and is ideal for passing data down to deeply nested components, precisely what it was meant for. On the other hand, Redux is far more powerful and has many features that the Context API does not.

// React Redux also uses context internally, but this isn't disclosed in the public API. As a result, you should feel much more comfortable using context via React Redux rather than directly since if it changes, the duty for changing the code will fall on React-Redux rather than the developer.

// 6. Are there similarities between Redux and RxJS?
// Although there are a few overlapping themes, these libraries are highly varied and serve very different goals.

// Redux is a state management framework for web applications. It is commonly used as a UI architecture. Consider it a compliment to (half of) Angular.

// RxJS is a library for reactive programming. It's most commonly used in JavaScript to complete asynchronous activities. Consider it a substitute for Promises.

// Because the Store is reactive, Redux employs the Reactive paradigm a little. The Store observes events from afar and adjusts its behaviour accordingly. RxJS employs the Reactive paradigm, but instead of being an architecture, it provides simple building blocks called Observables to achieve this "observing from afar" pattern.

// 7. What's the Difference Between MVC and Flux?
// The data, display, and logical layers are nicely separated and managed in the MVC structure. Even a minor update to an application can result in numerous changes throughout the application. It occurs because, in the context of MVC, data flow is bidirectional. MVC structure maintenance isn't complex, but Debugging does require a lot of skill.

// Flux and redux are inextricably linked. A story-based technique captures changes made to the application state, event subscription, and current state, all of which are linked via components. Redux is used to transmit call back payloads.

// Checkout - ReactJS Interview Questions
// 8. What are the concepts of functional programming?
// Redux is structured using various functional programming techniques, which are described below.

// First-class objects are handled as functions.
// Pass functions in the form of arguments.
// Recursions, functions, and arrays can be used to control flow.
// Reduce and map filters are used as helper functions.
// Allows functions to be linked together.
// The situation remains unchanged.
// It is not necessary to prioritise the order in which the code is executed.
// 9. How do you know if the Redux state has changed?
// A change in state to an application is applied for a release of action; this ensures that the intent to modify the state is achieved.

// Example:

// The user activates the application by pressing a button.
// In the form of a component, a function is called.
// As a result, the relative container now dispatches an action.
// This occurs because mapDispatchToProps ties the prop (which was just called in the container) to an action dispatcher (in the container).
// After capturing the action, the reducer calls a function, which returns a new state with precise changes.
// The container is aware of the state change, and the mapStateToProps function alters a specified prop in the component.
// 10. What is the typical data flow in a React and Redux app?
// The typical data flow starts with a callback from the UI component that triggers the dispatch of action with a payload intercepted and received by the reducers. A new application state will be created as a result of this interception. The actions will then be transmitted down through a hierarchy of Redux store components.

// Typical data flow in a React

// 11. What do you mean by "virtual DOM"?
// It's a memory-based depiction of Real DOM. The representation of a user interface is stored in memory and synchronized with the "actual" DOM. It's the rate at which the render function is called, and the fundamentals are displayed on the screen.

// 12. What is the difference between state and props?
// Props and states are both fundamental JavaScript objects. While they both comprehend information that affects the cause's output, their functioning with the constituent, i.e., the element's status, is maintained in the same way as variables are confirmed within a purpose.

// The constituency accepts props in the same way that utility parameters are approved.

// 13. What are ReactJs' limitations?
// The following are some of the ReactJS drawbacks:

// With inline templating and JSX, the programming difficulty rises.
// Over-engineering occurs when there are too many minor components.
// There is a learning curve for those who are new to web programming.
// React is merely a library, not a full-fledged framework.
// 14. In a React app, why would you use force update?
// React does not identify if there is a form that requires a UI change to power a re-render.

// 15. Define the terms "controlled compound" and "uncontrolled component."
// A controlled component is powered by React and serves as the single source of truth for form data.

// Your form data is handled by the DOM rather than your React component in an uncontrolled component.
// ///////////////////////////////////////////////////////////////////////////////////////////





























































































































































































































































// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// Q.What Is React?
// React Is A Declarative, Efficient, Flexible Open Source Front-End JavaScript Library Developed By Facebook In 2011. It Follows The Component-Based Approach For Building Reusable UI Components, Especially For Single Page Application. It Is Used For Developing Interactive View Layer Of Web And Mobile Apps. It Was Created By Jordan Walke, A Software Engineer At Facebook. It Was Initially Deployed On Facebook's News Feed Section In 2011 And Later Used In Its Products Like WhatsApp & Instagram.
// Q.Differentiate Between Real DOM And Virtual DOM.
// React Uses Virtual DOM. Below Is The Difference Real And Virtual DOM.
// REAL DOM
// 1. It Updates Slow.
// 2. Can Directly Update HTML.
// 3. Creates A New DOM If Element Updates.
// 4. DOM Manipulation Is Very Expensive.
// 5. Too Much Of Memory Wastage.
// VIRTUAL DOM
// 1. It Updates Faster.
// 2. Can’t Directly Update HTML.
// 3. TUpdates The JSX If Element Updates.
// 4. DDOM Manipulation Is Very Easy.
// 5. No Memory Wastage.
// Q.What Are The Features Of React?
// React Framework Gaining Quick Popularity As The Best Framework Among Web Developers. The Main Features Of React Are:
// 1. JSX
// 2. Components
// 3. It Follows Uni-Directional Data Flow Or One-Way Data Binding
// 4. Virtual DOM
// 5. Simplicity
// 6. Performance
// 7. It Uses Server-Side Rendering

// Q.What Are The Advantages Of React?
// 1. Reusable Components
// 2. Performance Enhancement
// 3. The Support Of Handy Tools
// 4. Known To Be SEO Friendly
// 5. The Benefit Of Having JavaScript Library
// 6. Easy To Learn And USe
// 7. Scope For Testing The Codes
// 8. It Can Be Conveniently Used On The Client As Well As Server Side
// 9. Using React, Writing UI Test Cases Become Extremely Easy
// 10. Because Of JSX, Code’s Readability Increases
// Q.What Are The Limitations Of React?
// - React Is Just A Library, Not A Full-Blown Framework
// - Coding Gets Complex As It Uses Inline Templating And JSX
// - View Part
// - Its Library Is Very Large And Takes Time To Understand
// Q.What Is JSX?
// JSX Is A Shorthand For JavaScript XML. This Is A Type Of File Used By React Which Utilizes The Expressiveness Of JavaScript Along With HTML Like Template Syntax. This Makes The HTML File Really Easy To Understand. This File Makes Applications Robust And Boosts Its Performance.
// Q.Why Can’t Browsers Read JSX?
// Browsers Can Only Read JavaScript Objects But JSX In Not A Regular JavaScript Object. Thus To Enable A Browser To Read JSX, First, We Need To Transform JSX File Into A JavaScript Object Using JSX Transformers Like Babel And Then Pass It To The Browser.
// Q.How Is React Different From Angular?
// ARCHITECTURE - React Have Only The View Of MVC Where Angular Have Complete MVC
// RENDERING - React Have Server-Side Rendering Where Angular Have Client-Side Rendering
// DOM - React Uses Virtual DOM Where Angular Uses Real DOM
// DATA BINDING - React Have One-Way Data Binding Where Angular Have Two-Way Data Binding
// DEBUGGING - React Have Compile Time Debugging Where Angular Have Runtime Debugging
// AUTHOR - React By Facebook Where Angular By Google
// TYPE - React Is Open Source JS Framework Where Angular Is Open Source MVC Framework
// PERFORMANCE - React Is Fast, Due To Virtual DOM Where Angular Is Slow
// TESTING - React Support Unit Testing Where Angular Support Unit And Integration Testing
// Q.Explain The Purpose Of Render() In React.
// Each React Component Must Have A Render() Mandatorily. It Returns A Single React Element Which Is The Representation Of The Native DOM Component. If More Than One HTML Element Needs To Be Rendered, Then They Must Be Grouped Together Inside One Enclosing Tag Such As Form, Group, Div Etc. This Function Must Be Kept Pure I.E., It Must Return The Same Result Each Time It Is Invoked.
// Q.What Is Props?
// - Props Is The Shorthand For Properties In React. They Are Read-Only Components Which Must Be Kept Pure I.E. Immutable. They Are Always Passed Down From The Parent To The Child Components Throughout The Application. A Child Component Can Never Send A Prop Back To The Parent Component. This Help In Maintaining The Unidirectional Data Flow And Are Generally Used To Render The Dynamically Generated Data.
// Q.What Is A State In React?
// - States Are The Heart Of React Components. States Are The Source Of Data And Must Be Kept As Simple As Possible. Basically, States Are The Objects Which Determine Components Rendering And Behavior. They Are Mutable Unlike The Props And Create Dynamic And Interactive Components. They Are Accessed Via This.State().
// Q.Differentiate Between States And Props.
// States
// - Receive Initial Value From Parent Component
// - Parent Component Cant Change Value
// - Set Default Values Inside Component
// - Changes Inside Component
// - Set Initial Value For Child Components
// - Cant Changes Inside Child Components
// Props
// - Receive Initial Value From Parent Component
// - Parent Component Can Change Value
// - Set Default Values Inside Component
// - Cant Changes Inside Component
// - Set Initial Value For Child Components
// - Hanges Inside Child Components
// Q.What Is Arrow Function In React? How Is It Used?
// - Arrow Functions Are More Of Brief Syntax For Writing The Function Expression. They Are Also Called ‘Fat Arrow‘ (=>) The Functions. These Functions Allow To Bind The Context Of The Components Properly Since In ES6 Auto Binding Is Not Available By Default. Arrow Functions Are Mostly Useful While Working With The Higher Order Functions.
// Q.Differentiate Between Stateful And Stateless Components.
// Stateful Component
// - Stores Info About Component’s State Change In Memory
// - Have Authority To Change State
// - Contains The Knowledge Of Past, Current And Possible Future Changes In State
// - Stateless Components Notify Them About The Requirement Of The State Change, Then They Send Down The Props To Them.
// Stateless Component
// - Calculates The Internal State Of The Components
// - Do Not Have The Authority To Change State
// - Contains No Knowledge Of Past, Current And Possible Future State Changes
// - They Receive The Props From The Stateful Components And Treat Them As Callback Functions.
// Q.What Are The Different Phases Of React Component’s Lifecycle?
// - There Are Three Different Phases Of React Component’s Lifecycle:
// - Initial Rendering Phase: This Is The Phase When The Component Is About To Start Its Life Journey And Make Its Way To The DOM.
// - Updating Phase: Once The Component Gets Added To The DOM, It Can Potentially Update And Re-Render Only When A Prop Or State Change Occurs. That Happens Only In This Phase.
// - Unmounting Phase: This Is The Final Phase Of A Component’s Life Cycle In Which The Component Is Destroyed And Removed From The DOM.
// Q. Explain The Lifecycle Methods Of React Components In Detail.
// - ComponentWillMount() – Executed Just Before Rendering Takes Place Both On The Client As Well As Server-Side.
// - ComponentDidMount() – Executed On The Client Side Only After The First Render
// - ComponentWillReceiveProps() – Invoked As Soon As The Props Are Received From The Parent Class And Before Another Render Is Called.
// - ShouldComponentUpdate() – Returns True Or False Value Based On Certain Conditions. If You Want Your Component To Update, Return True Else Return False. By Default, It Returns False.
// - ComponentWillUpdate() – Called Just Before Rendering Takes Place In The DOM.
// - ComponentDidUpdate() – Called Immediately After Rendering Takes Place.
// - ComponentWillUnmount() – Called After The Component Is Unmounted From The DOM. It Is Used To Clear Up The Memory Spaces.
// Q.What Is An Event In React?
// In React, Events Are The Triggered Reactions To Specific Actions Like Mouse Hover, Mouse Click, Key Press, Etc.But There Are Some Syntactical Differences Like:
// - Events Are Named Using Camel Case Instead Of Just Using The Lowercase.
// - Events Are Passed As Functions Instead Of Strings.
// Q.What Do You Understand By Refs In React?
// Refs Is The Short Hand For References In React. It Is An Attribute Which Helps To Store A Reference To A Particular React Element Or Component, Which Will Be Returned By The Components Render Configuration Function. It Is Used To Return References To A Particular Element Or Component Returned By Render(). They Come In Handy When We Need DOM Measurements Or To Add Methods To The Components.
// Q.List Some Of The Cases When You Should Use Refs
// - When You Need To Manage Focus, Select Text Or Media Playback
// - To Trigger Imperative Animations
// - Integrate With Third-Party DOM Libraries
// Q.What Are Higher-Order Components?
// - A Higher-Order Component (HOC) Is A Function That Takes A Component And Returns A New Component. Basically, It’s A Pattern That Is Derived From React’s Compositional Nature We Call Them As “Pure’ Components” Because They Can Accept Any Dynamically Provided Child Component But They Won’t Modify Or Copy Any Behavior From Their Input Components.HOC Can Be Used For Many Use Cases As Below,
// - Code Reuse, Logic And Bootstrap Abstraction
// - Render High Jacking
// - State Abstraction And Manipulation
// - Props Manipulation
// Q.What Are React Hooks?
// - Hooks Are A New Addition In React 16.8. They Let You Use State And Other React Features Without Writing A Class. With Hooks, You Can Extract Stateful Logic From A Component So It Can Be Tested Independently And Reused. Hooks Allow You To Reuse Stateful Logic Without Changing Your Component Hierarchy. This Makes It Easy To Share Hooks Among Many Components Or With The Communit
// Q.What Are Advantages Of Using React Hooks?
// - Primarily, Hooks In General Enable The Extraction And Reuse Of Stateful Logic That Is Common Across Multiple Components Without The Burden Of Higher Order Components Or Render Props. Hooks Allow To Easily Manipulate The State Of Our Functional Component Without Needing To Convert Them Into Class Components. Hooks Don’t Work Inside Classes (Because They Let You Use React Without Classes). By Using Them, We Can Totally Avoid Using Lifecycle Methods, Such As ComponentDidMount, ComponentDidUpdate, ComponentWillUnmount. Instead, We Will Use Built-In Hooks Like UseEffec
// Q.What Is UseState() In React?
// UseState Is One Of Build-In React Hooks. UseState(0) Returns A Tuple Where The First Parameter Count Is The Current State Of The Counter And SetCounter Is The Method That Will Allow Us To Update The Counter's State.
// We Can Use The SetCounter Method To Update The State Of Count Anywhere - In This Case We Are Using It Inside Of The SetCount Function Where We Can Do More Things; The Idea With Hooks Is That We Are Able To Keep Our Code More Functional And Avoid Class Based Components If Not Desired/Need
// Q.What Is Npm
// Npm (Short For Node.Js Package Manager) Is A Package Manager For The JavaScript Programming Language. It Is The Default Package Manager For The JavaScript Runtime Environment Node.Js. It Consists Of A Command Line Client, Also Called Npm, And An Online Database Of Public And Paid-For Private Packages, Called The Npm Registry. The Registry Is Accessed Via The Client, And The Available Packages Can Be Browsed And Searched Via The Npm Website. The Package Manager And The Registry Are Managed By Npm, Inc.
// Q.What Is Node.JS
// Node.Js Is An Open-Source, Cross-Platform JavaScript Run-Time Environment That Executes JavaScript Code Outside Of A Browser.
// Q.What Is StrictMode In React?
// React's StrictMode Is Sort Of A Helper Component That Will Help You Write Better React Components, You Can Wrap A Set Of Components With And It'll Basically:
// - Verify That The Components Inside Are Following Some Of The Recommended Practices And Warn You If Not In The Console.
// - Verify The Deprecated Methods Are Not Being Used, And If They're Used Strict Mode Will Warn You In The Console.
// - Lp You Prevent Some Side Effects By Identifying Potential Risks.
// Q.What Is Prop Drilling And How Can You Avoid It?
// - When Building A React Application, There Is Often The Need For A Deeply Nested Component To Use Data Provided By Another Component That Is Much Higher In The Hierarchy. The Simplest Approach Is To Simply Pass A Prop From Each Component To The Next In The Hierarchy From The Source Component To The Deeply Nested Component. This Is Called Prop Drilling.
// - To Avoid Prop Drilling, A Common Approach Is To Use React Context. This Allows A Provider Component That Supplies Data To Be Defined, And Allows Nested Components To Consume Context Data Via Either A Consumer Component Or A UseContext Hook.
// Q.Difference Table Between Controlled And Uncontrolled Component
// Controlled
// - It Does Not Maintain Its Internal State.
// - Here, Data Is Controlled By The Parent Component.
// - It Accepts Its Current Value As A Prop.
// - It Allows Validation Control.
// - It Has Better Control Over The Form Elements And Data.
// Uncontrolled
// - It Maintains Its Internal States.
// - Here, Data Is Controlled By The DOM Itself.
// - It Uses A Ref For Their Current Values.
// - It Does Not Allow Validation Control.
// - It Has Limited Control Over The Form Elements And Data.
// Q.What Is React Context?
// - Context Allows Passing Data Through The Component Tree Without Passing Props Down Manually At Every Level. In React Application, We Passed Data In A Top-Down Approach Via Props. Sometimes It Is Inconvenient For Certain Types Of Props That Are Required By Many Components In The React Application. Context Provides A Way To Pass Values Between Components Without Explicitly Passing A Prop Through Every Level Of The Component Tree.
// Q.What Is React Map
// - A Map Is A Data Collection Type Where Data Is Stored In The Form Of Pairs. It Contains A Unique Key. The Value Stored In The Map Must Be Mapped To The Key. We Cannot Store A Duplicate Pair In The Map(). It Is Because Of The Uniqueness Of Each Stored Key. It Is Mainly Used For Fast Searching And Looking Up Data.
// Q.What Is React Conditional Rendering
// - In React, We Can Create Multiple Components Which Encapsulate Behavior That We Need. After That, We Can Render Them Depending On Some Conditions Or The State Of Our Application. In Other Words, Based On One Or Several Conditions, A Component Decides Which Elements It Will Return. In React, Conditional Rendering Works The Same Way As The Conditions Work In JavaScript. We Use JavaScript Operators To Create Elements Representing The Current State, And Then React Component Update The UI To Match Them.
// - There Is More Than One Way To Do Conditional Rendering In React. They Are Given Below
// - If, Ternary Operator, Logical && Operator, Switch Case Operator, Conditional Rendering With Enums
// Q.What Is React Router?
// - React Router Plays An Important Role To Display Multiple Views In A Single Page Application. It Is Used To Define Multiple Routes In The App. When A User Types A Specific URL Into The Browser, And If This URL Path Matches Any 'Route' Inside The Router File, The User Will Be Redirected To That Particular Route. So, We Need To Add A Router Library To The React App, Which Allows Creating Multiple Routes With Each Leading To Us A Unique View.
// Q.How Is React Router Different From Conventional Routing?
// Conventional Routing
// - In Conventional Routing, Each View Contains A New File.
// - The HTTP Request Is Sent To A Server To Receive The Corresponding HTML Page.
// - In This, The User Navigates Across Different Pages For Each View.
// React Routing
// - In React Routing, There Is Only A Single HTML Page Involved.
// - Only The History Attribute Is Changed.
// - In This, The User Is Thinking He Is Navigating Across Different Pages, But Its An Illusion Only.
// Q.Why Switch Keyword Used In React Router V4?
// - 'Switch' Keyword Is Used To Display Only A Single Route To Rendered Amongst The Several Defined Routes. The Component Is Used To Render Components Only When The Path Will Be Matched. Otherwise, It Returns To The Not Found Component.
// Q.How Many Ways Can We Style The React Component?
// - Inline Styling, CSS Stylesheet, CSS Module, Styled Components
// Q.What Is Redux?
// - Redux Is An Open-Source JavaScript Library Used To Manage Application State. React Uses Redux For Building The User Interface. The Redux Application Is Easy To Test And Can Run In Different Environments Showing Consistent Behavior. It Was First Introduced By Dan Abramov And Andrew Clark In 2015.
// - React Redux Is The Official React Binding For Redux. It Allows React Components To Read Data From A Redux Store, And Dispatch Actions To The Store To Update Data. Redux Helps Apps To Scale By Providing A Sensible Way To Manage State Through A Unidirectional Data Flow Model. React Redux Is Conceptually Simple. It Subscribes To The Redux Store, Checks To See If The Data Which Your Component Wants Have Changed, And Re-Renders Your Componen
// Q.What Are The Three Principles That Redux Follows?
// - Single Source Of Truth: The State Of Your Entire Application Is Stored In An Object/State Tree Inside A Single Store. The Single State Tree Makes It Easier To Keep Changes Over Time. It Also Makes It Easier To Debug Or Inspect The Application.
// - The State Is Read-Only: There Is Only One Way To Change The State Is To Emit An Action, An Object Describing What Happened. This Principle Ensures That Neither The Views Nor The Network Callbacks Can Write Directly To The State.
// - Changes Are Made With Pure Functions: To Specify How Actions Transform The State Tree, You Need To Write Reducers (Pure Functions). Pure Functions Take The Previous State And Action As A Parameter And Return A New State.
// Q.List Down The Components Of Redux.
// - STORE: A Store Is A Place Where The Entire State Of Your Application Lists. It Is Like A Brain Responsible For All Moving Parts In Redux.
// - ACTION: It Is An Object Which Describes What Happened.
// - REDUCER: It Determines How The State Will Change.
// Q.Explain The Role Of Reducer.
// - Reducers Read The Payloads From The Actions And Then Updates The Store Via The State Accordingly. It Is A Pure Function Which Returns A New State From The Initial State. It Returns The Previous State As It Is If No Work Needs To Be Done.
// Q.What Is The Significance Of Store In Redux?
// - A Store Is An Object Which Holds The Application's State And Provides Methods To Access The State, Dispatch Actions And Register Listeners Via Subscribe(Listener). The Entire State Tree Of An Application Is Saved In A Single Store Which Makes The Redux Simple And Predictable. We Can Pass Middleware To The Store Which Handles The Processing Of Data As Well As Keep A Log Of Various Actions That Change The Store's State. All The Actions Return A New State Via Reducers.
// Q.What Are The Advantages Of Redux?
// - Better Code Organization – Redux Is Precise In Terms Of How The Code Needs To Be Organized. This Results In A Consistent Code Workable For Any Development Team.
// - Developer Tools – Allow Developers To Track Each And Everything, Ranging From Actions To State Changes, Happening In The Application In Real-Time
// - Large-Scale Community – Redux Is Backed By A Mammoth Community. It Contributes To An Ever-Growing And Refined Library And Ready-To-Use Applications
// - Easy Testing – Redux Code Is Mainly Composed Of Functions That Are Isolated, Pure, And Small. Hence, Testing Is Much Easy And Simple
// - Maintainability – Thanks To A Predictable Outcome And Strict Structure, The Code Is Easier To Maintain.
// - Output Predictability – There Is No Confusion About Syncing The Current State With Actions As Well As Other Parts Of The Application As There Is Only A Single Source Of Truth, Which Is The Store
// - Server-Side Rendering – There Is A Need Of Only Passing The Store Created On The Server-Side To The Client-Side. In Addition To This Being Useful For Initial Render, It Also Offers A Better User Experience Because It Optimizes The Application Performance
// Q.What Is Redux DevTools?
// - Redux DevTools Is A Live-Editing Time Travel Environment For Redux With Hot Reloading, Action Replay, And Customizable UI. If You Don’t Want To Bother With Installing Redux DevTools And Integrating It Into Your Project, Consider Using Redux DevTools Extension For Chrome And Firefo
// Q.What Is The Difference Between React Context And React Redux?
// - You Can Use Context In Your Application Directly And Is Going To Be Great For Passing Down Data To Deeply Nested Components Which What It Was Designed For. Whereas Redux Is Much More Powerful And Provides A Large Number Of Features That The Context Api Doesn't Provide.
// - Also, React Redux Uses Context Internally But It Doesn’t Expose This Fact In The Public API. So You Should Feel Much Safer Using Context Via React Redux Than Directly Because If It Changes, The Burden Of Updating The Code Will Be On React Redux Instead Developer Responsibility.
// Q.What Are The Features Of Redux DevTools?
// - Lets You Inspect Every State And Action Payload
// - Lets You Go Back In Time By “Cancelling” Actions
// - If You Change The Reducer Code, Each “Staged” Action Will Be Re-Evaluated
// - If The Reducers Throw, You Will See During Which Action This Happened, And What The Error Was With PersistState() Store Enhancer, You Can Persist Debug Sessions Across Page Reloads
// Q.Are There Any Similarities Between Redux And RxJS?
// - These Libraries Are Very Different For Very Different Purposes, But There Are Some Vague Similarities.
// - Redux Is A Tool For Managing State Throughout The Application. It Is Usually Used As An Architecture For UIs. Think Of It As An Alternative To (Half Of) Angular.
// - RxJS Is A Reactive Programming Library. It Is Usually Used As A Tool To Accomplish Asynchronous Tasks In JavaScript. Think Of It As An Alternative To Promises.
// Redux Uses The Reactive Paradigm Little Bit Because The Store Is Reactive. The Store Observes Actions From A Distance, And Changes Itself. RxJS Also Uses The Reactive Paradigm, But Instead Of Being An Architecture, It Gives You Basic Building Blocks, Observables, To Accomplish This "Observing From A Distance" Pattern.
// Q.What Is Code-Splitting In React
// - Code-Splitting Is A Feature Supported By Bundlers Like Webpack, Rollup And Browserify (Via Factor-Bundle) Which Can Create Multiple Bundles That Can Be Dynamically Loaded At Runtime.
// Q.What Bundling In React
// - Most React Apps Will Have Their Files “Bundled” Using Tools Like Webpack, Rollup Or Browserify. Bundling Is The Process Of Following Imported Files And Merging Them Into A Single File: A “Bundle”. This Bundle Can Then Be Included On A Webpage To Load An Entire App At Once
// Q.What Is React.Lazy
// - React.Lazy Is The Recommended Solution For Code Splitting. It Uses Suspense And It Is Maintained By React.
// Q.What Are The Differences Between React.Lazy And @Loadable/Components?
// React.Lazy-
// - Support Suspense
// - Not Supporting SSR
// - Not Supporting Library Splitting
// - Not Supporting Import(`./${Value}`)
// @Loadable/Component-
// - Support Suspense
// - Supporting SSR
// - Supporting Library Splitting
// - Supporting Import(`./${Value}`)
// Q.What Is Suspense In React Code Splitting
// - React Suspense Is A Generic Way For Components To Suspend Rendering While They Load Data From A Cache. It Is A Fundamentally New Capability That: Lets You Render A Component Tree “In Background” While Components Are Fetching Data, And. Display Them Only After The Whole Tree Is Ready
// Q.What Is A Pure Function?
// - Such Functions Are Called “Pure” Because They Do Not Attempt To Change Their Inputs, And Always Return The Same Result For The Same Inputs. React Is Pretty Flexible But It Has A Single Strict Rule: All React Components Must Act Like Pure Functions With Respect To Their Props.
// Q.What Are The Components In React?
// - Components Are The Building Blocks Of Any React Application, And A Single App Usually Consists Of Multiple Components. A Component Is Essentially A Piece Of The User Interface. It Splits The User Interface Into Independent, Reusable Parts That Can Be Processed Separate
// - There Are Two Types Of Components In React:
// - Statelfull Components
// - Stateless Components
// Q.What Are Functional Components?
// - These Types Of Components Have No State Of Their Own And Only Contain Render Methods, And Therefore Are Also Called Stateless Components. They May Derive Data From Other Components As Props (Properties).
// Q.What Are Class Components?
// - These Types Of Components Can Hold And Manage Their Own State And Have A Separate Render Method To Return JSX On The Screen. They Are Also Called Stateful Components As They Can Have A State.
// Q.What Is The Flux?
// - Flux Is The Application Architecture That Facebook Uses For Building Web Applications. It Is A Method Of Handling Complex Data Inside A Client-Side Application And Manages How Data Flows In A React Application.
// - There Is A Single Source Of Data (The Store) And Triggering Certain Actions Is The Only Way Way To Update Them.The Actions Call The Dispatcher, And Then The Store Is Triggered And Updated With Their Own Data Accordingly
// - When A Dispatch Has Been Triggered, And The Store Updates, It Will Emit A Change Event That The Views Can Rerender Accordingly.
// Q.How Is Redux Different From Flux?
// Redux-
// - Redux Is An Open-Source JavaScript Library Used To Manage Application State
// - Store’s State Is Immutable
// - Can Only Have A Single-Store
// - Uses The Concept Of Reducer
// Flux
// - Flux Is An Architecture And Not A Framework Or Library
// - Store’s State Is Mutable
// - Can Have Multiple Stores
// - Uses The Concept Of The Dispatcher
// Q.What Is Major Differences Between The ES5 And ES6
// - Require Vs. Import – The Require Used In ES5 Is Now Replaced With Import. Var React = Require('React'); //Is Now Replaced With Import React From 'React'; //In ES6
// - Export Vs. Exports – Instead Of Exports, Now Export Is Used.Export Default Component; // Replaces Module.Exports = Component; // In ES6
// - Component And Function – The Use Of Component And Function Has Also Changed From ES5 To ES6.
// Q. You Must’ve Heard That “In React, Everything Is A Component.” What Do You Understand From The Statement?
// - The Building Blocks Of A React Application’s UI Are Called Components. Any App UI Created Using React Is Divisible Into A Number Of Small Independent And Reusable Pieces, Known As Components. React Renders Each Of The Components Independent Of Each Other. Hence, There Is No Effect Of Rendering A Component On The Rest Of The App UI.
// Q.Can Parent Component Change Value In States And Props?
// - The Parent Component Can Change The Value In Props But Not In The State.
// Q.Can Changes Be Made Inside The Component?
// - The Changes Can Be Made Inside The State But Not In Props.
// Q.Can We Make Changes Inside Child Components?
// - Yes, We Can Make Changes Inside The Child Component In Props But Not In The Case Of States.
// Q.Define Synthetic Events In React?
// - The Synthetic Events In React Are The Objects In React, Which Acts As A Cross-Browser Wrapper Around The Browser's Native Event. The Main Purpose Is To Combine The Different Browsers On The API So That The Event Shows Various Properties.
// Q.Can We Modularize Code In React? How?
// - Yes, We Can Modularize Code In React. It Can Be Done By Using Export And Import Properties.
// Q.What Is The Difference Between React Context And React Redux?
// - We Can Use Context In Our Application Directly And Is Going To Be Great For Passing Down Data To Acutely Nested Components That What It Was Designed For. Whereas Redux Is Much More Potent And Provides A Large Number Of Skin Textures That The Context API Doesn’t Provide. Also, React Redux Uses Context Internally But It Doesn’t Render This Fact In The Public API.
// Q.What Is The Difference Between React Native And React?
// - React -JavaScript Library, Supporting Both Front-End Web And Being Run On The Server, For Building User Interfaces And Web Applications. React Native – Mobile Framework That Compiles To Native App Components, Allowing You To Build Native Mobile Applications (IOS, Android, And Windows) In JavaScript That Allows You To Use React To Build Your Components, And Implements React Under The Hood.
// Q.What Is The Difference Between Element And Component?
// - Element – A Plain Object Describing What We Want To Appear On The Screen In Terms Of The DOM Nodes / Other Components. Elements Can Contain Other Elements In Their Props. Creating A React Element Is Cheap. Once An Element Is Created, It Is Never Mutated.
// - Component – Declared In Several Ways. Component Can Class With A Render() Method. Alternatively It Can Be Defined As A Function. Component Takes Props As An Input, And Returns An JSX Tree As The
// Q.What Is The Super Keyword In React?
// - The Super Keyword Is Used To Access & Call Functions On An Object’s Parent.
// Q.What Is Meant By Callback Function? What Is Its Purpose?
// - A Callback Function Should Be Called When SetState Has Finished, And The Component Is Re-Rendered. As The SetState Is Asynchronous, Which Is Why It Takes In A Second Callback Function.
// Q.Explain The Use Of ‘Key’ In React List
// - Keys Allow You To Provide Each List Element With A Stable Identity. The Keys Should Be Unique.
// Q.Explain Error Boundaries?
// - Error Boundaries Help You To Catch Javascript Error Anywhere In The Child Components. They Are Most Used To Log The Error And Show A Fallback UI.
// Q.What Is The Use Of Empty Tags <> ?
// - Empty Tags Are Used In React For Declaring Fragments.
// Q.What Is The Use Of Webpack?
// - Webpack In Basically Is A Module Builder. It Is Mainly Runs During The Development Proc
// Q.What Is Babel In React Js?
// - Babel, Is A JavaScript Compiler That Converts Latest JavaScript Like ES6, ES7 Into Plain Old ES5 JavaScript That Most Browsers Understand.
// Q.Explain The Term Reconciliation
// - When A Component’s State Or Props Change Then Rest Will Compare The Rendered Element With Previously Rendered DOM And Will Update The Actual DOM If It Is Needed. This Process Is Known As Reconciliation.
// Q.Explain The Meaning Of Mounting And Demounting
// - The Process Of Attaching The Element To The DCOM Is Called Mounting.
// - The Process Of Detaching The Element From The DCOM Is Called The Demounting Process
// Q.Name Any Five Predefined Prototypes Used In React
// - Most Important Protoype Used In React Js Are: Number, String, Array, Object, Element
// Q.What Is BrowserRouter In React?
// - BrowserRouter Is The Router Implementation For HTML5 Browsers (Vs Native): - Link Is Your Replacement For Anchor Tags.
// - Route Is The Conditionally Shown Component Based On Matching A Path To A URL.
// - Switch Returns Only The First Matching Route Rather Than All Matching Routes.
// Q.What Is The Use Of Switch In React Router?
// - The Component Will Only Render The First Route That Matches/Includes The Path. Once It Finds The First Route That Matches The Path, It Will Not Look For Any Other Matches. Not Only That, It Allows For Nested Routes To Work Properly, Which Is Something That Will Not Be Able To Handle
// Q.What Is History In React Router?
// - The Term “History” And " History Object" In This Documentation Refers To The History Package, Which Is One Of Only 2 Major Dependencies Of React Router (Besides React Itself), And Which Provides Several Different Implementations For Managing Session History In JavaScript In Various Environments
// Q.Is SetState() Is Async? Why Is SetState() In React Async Instead Of Sync?
// - SetState() Does Not Immediately Mutate This.State But Creates A Pending State Transition. Accessing This.State After Calling This Method Can Potentially Return The Existing Value. There Is No Guarantee Of Synchronous Operation Of Calls To SetState And Calls May Be Batched For Performance Gains.
// - This Is Because SetState Alters The State And Causes Rerendering. This Can Be An Expensive Operation And Making It Synchronous Might Leave The Browser Unresponsive. Thus The SetState Calls Are Asynchronous As Well As Batched For Better UI Experience And Performance
// Q.What Is Layout With Flexbox?
// - A Component Can Specify The Layout Of Its Children Using The Flexbox Algorithm. Flexbox Is Designed To Provide A Consistent Layout On Different Screen Sizes.
// Q.What Is UseEffect Hook?
// - The Effect Hook, UseEffect, Adds The Ability To Perform Side Effects From A Function Component. It Serves The Same Purpose As ComponentDidMount, ComponentDidUpdate, And ComponentWillUnmount In React Classes, But Unified Into A Single API.


// ///////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////








































































































































// ===============================
// ========================
// ================
// vs--
// ================
// ========================
// ==============================


// Server-Side Rendering vs Client-Side Rendering
// Server-Side Rendering (SSR) and Client-Side Rendering (CSR) are two terms that describe how a web page gets rendered. They're used to refer to the process of loading a page and displaying it on your computer or mobile device. In general, SSR means that the page is being rendered on the server, while CSR means it's being rendered on your computer. When you're building a website, you have to decide whether to use server-side or client-side rendering.

// Server-side rendering (SSR) means that the content of your site is generated on the server, then sent to the browser. This is useful for SEO purposes, because search engines can "see" the content of your site before they send it to users. However, with SSR, users need to wait for their browsers to load before they see anything on their screens—and on slow connections or expensive data plans, this can make things feel slow.

// Client-side rendering (CSR) means that when a page loads in a browser, it doesn't have much content at first — just an HTML skeleton with some CSS styling information attached. As soon as possible after loading (usually within just a few seconds), the rest of the page's content is sent from the server and rendered into place within that initial HTML skeleton so that when users scroll down further into your site they don't see any blank space anymore. This makes for much faster reads on slower connections where data costs might not be as high as they are.
// ============================
// First User Interaction Time. 
// ============================


// Primitive:-
// ---------
// Most of the time, a primitive value is represented directly at the lowest level of the language implementation.

// All primitives are immutable; that is, they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned to a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered. The language does not offer utilities to mutate primitive values.
// <or>---
// An immutable value is one whose content cannot be changed without creating an entirely new value.

// In JavaScript, primitive values are immutable — once a primitive value is created, it cannot be changed, although the variable that holds it may be reassigned another value. By contrast, objects and arrays are mutable by default — their properties and elements can be changed without reassigning a new value.
// ================================================
// Redux Thunk vs Redux Saga:
// =========================
// Actually, Both of them are middleware for Redux to deal with asynchronous actions. For knowing the difference between then please pay attention to the following picture:

// Architect of Redux

// The middleware box generally refers to software services that glue together separate features in existing software. For Redux, middleware provides a third-party extension point between dispatching an action and handing the action off to the reducer. then reducer makes the new state.

// Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store’s dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed. simple, easy to learn and use with 352B volume

// Redux Saga leverages an ES6 feature called Generators, allowing us to write asynchronous code that looks synchronous, and is very easy to test. In the saga, we can test our asynchronous flows easily and our actions stay pure. complicated, hard to learn and understand, 14kB volume but organized complicated asynchronous actions easily and make then very readable and the saga has many useful tools to deal with asynchronous actions
// ==================================================
// Synchronous:
// Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.
// Instruction in synchronous code executes in a given sequence.
// Asynchronous:
// Asynchronous code execution allows to execution next instructions immediately and doesn't block the flow because of previous instructions.
// Instructions in asynchronous code can execute in parallel.
// ===================================================
// redux-saga (call) : -
// Instead of invoking the asynchronous request directly, the method call will return only a plain object describing the operation. Redux Saga then takes care of the invocation and return the result to the generator.

// The same thing happens with the put method. Instead of dispatching an action inside the generator, put returns an object with instructions for the middleware to dispatch the action.
// Those returned objects are called effects. Here’s an example of the effect returned by the call method:
// ===============================
// ========================
// ================
// https://codepen.io/sepimran/details/PoJRwzo
// OwlCarousel2
// Redux Persist
// ================
// ========================
// ==============================
// async-await:-
// -----------
// async and await are the keywords used to write the asynchronous code in a synchronous manner where the await keyword waits for the promise to be resolved or rejected and the async keyword is used to wrap all await keywords with a function.
// ===========================
// ===========================
// boilerplate:
// -a boilerplate is a unit of writing that can be reused over and over without change. By extension, the idea is sometimes applied to reusable programming, as in “boilerplate code.”
// -Boilerplate code means a piece of code which can be used over and over again. On the other hand, anyone can say that it's a piece of reusable code.
// =====================
// What is createSlice in Redux Toolkit?
// createSlice is a higher order function that accepts an initial state, an object full of reducer functions and a slice name. It automatically generates action creators and action types, based on the names of the reducer functions that we supply.  It also helps you organize all of your Redux-related logic for a given slice into a single file.

// createReducer: A utility that simplifies creating Redux reducer functions. It uses Immer internally to drastically simplify immutable update logic by writing "mutative" code in your reducers, and supports directly mapping specific action types to case reducer functions that will update the state when that action is dispatched.







// ==================================
// ==================================
// React Hooks:-
// React Hooks are APIs that give the functional components the ability to manage the state of an application, handle the side effects, and write clean and simpler code for an application. They are introduced in React version 16 and are constantly improved over time.

// ============================
// Redux vs Context API:

// Context hook:
// Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

// useContext is a hook.				| 		Redux is a state management library.
// It is used to share data.			|		It is used to manage data and state.
// Changes are made with the Context value.	|		Changes are made with pure functions i.e. reducers.
// We can change the state in it.			|		The state is read-only. We cannot change them directly.
// It re-renders all components whenever there is 
// any update in the provider’s value prop.	| 		It only re-render the updated components.
// It is better to use with small applications.	|		It is perfect for larger applications. 
// It is easy to understand and requires less code.|		It is quite complex to understand.

// ==============================
// useContext vs useReducer:-
// ------------------------
// Instead of passing the props down through each component, React Context allows you to broadcast data to the components below.

// The useReducer hook is used for complex state manipulations and state transitions. … useReducer is a React hook function that accepts a reducer function, and an initial state. 
// Synta:
// ----------
// useReducer(<reducer>, <initialState>)
// const [state, dispatch] = useReducer(reducer, initialState);

//   const handleComplete = (todo) => {
//     dispatch({ type: "COMPLETE", id: todo.id });
//   };
// ----------
// ========================================
// useSelect:
// ---------------------
// The useSelector hooks allow you to extract data or the state from the Redux store using a selector function. It is equivalent to the mapStateToProps argument used in the connect() function conceptually.

// -> when an action is performed, the useSelector() hook will compare the results of the previous and current selector values and if they are different then the component is bound to re-render otherwise it stays the same.
// -> the main difference between the two is that the mapStateToProps pass down multiple values as props whereas the useSelector will take the current state as the argument and returns a single variable as a result.
// -> The function will be called with the entire redux store state as an argument and runs whenever the functional components render the page. The useSelector() hook will subscribe to the redux store and runs whenever an action is dispatched. You may call the useSelector() any number of times in a single function. However, each call will create an individual subscription to the redux store.
// ---

// A "selector function" is any function that accepts the Redux store state (or part of the state) as an argument, and returns data that is based on that state.
// Selectors are primarily used to encapsulate logic for looking up specific values from state, logic for actually deriving values, and improving performance by avoiding unnecessary recalculations.

// The selector will be called with the entire Redux store state as its only argument. The selector may return any value as a result, including directly returning a value that was nested inside state, or deriving new values. The return value of the selector will be used as the return value of the useSelector() hook.

// The selector will be run whenever the function component renders (unless its reference hasn't changed since a previous render of the component so that a cached result can be returned by the hook without re-running the selector). useSelector() will also subscribe to the Redux store, and run your selector whenever an action is dispatched.

// When an action is dispatched, useSelector() will do a reference comparison of the previous selector result value and the current result value. If they are different, the component will be forced to re-render. If they are the same, the component will not re-render. useSelector() uses strict === reference equality checks by default, not shallow equality (see the following section for more details).

// =======================================
// =================================
// useSelector and useDispatch:- 
// Before the introduction of hooks in react, React redux used the higher order component connect() to connect a component to the redux store and read the values from the redux store each time a state gets updated. The connect() function takes two optional parameters- mapStateToProps, and mapDispatchToProps.

// useSelector and useDispatch served as an alternative to the connect() function. The useSelector hook is equivalent to the mapStateToProps and takes an argument that returns the part of the state that the component needs whereas the hook useDispatch acts just like mapDispatchToProps.
// =================================
// createSelector
// ----------------------
// A "selector" is any function that accepts the Redux state tree as an argument, and returns some extracted or derived data. That includes plain functions like you showed.

// In many cases, you want to memoize the calculation of the results, such as mapping over an array of items, so that it's not re-calculated unless the inputs have changed. Reselect's createSelector creates memoized selector functions that only recalculate the output if the inputs change.

// -> Selectors can compute derived data, allowing Redux to store the minimal possible state.
// -> Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
// -> Selectors are composable. They can be used as input to other selectors.

// Reselect exports a createSelector API, which generates memoized selector functions. createSelector accepts one or more "input" selectors, which extract values from arguments, and an "output" selector that receives the extracted values and should return a derived value. If the generated selector is called multiple times, the output will only be recalculated when the extracted values have changed.

// --------
// When you call a selector (eg. selectSum), Reselect will run ALL your input selectors (eg. selectX) with all of the arguments you gave, and looks at the returned values. If any of the results are === different than before, it will re-run the output selector, and pass in those results as the arguments. If all of the results of the input selectors are the same as the last time, it will skip re-running the output selector, and just return the cached final result from before.

// ---------------
// ----------------
// reducer.js
// ----------------
// import { createSlice, createSelector } from "@reduxjs/toolkit";

// const initialState = { x: 0, y: 0, z: 0 };

// const counterSlice = createSlice({
//   name: "data",
//   initialState,
//   reducers: {
//     // action creators to be auto-generated
//     incrementX(state, action) {
//       state.x += action.payload;
//     },
//     incrementY(state, action) {
//       state.y += action.payload;
//     },
//     incrementZ(state, action) {
//       state.z += action.payload;
//     }
//   }
// });
// export const { incrementX, incrementY, incrementZ } = counterSlice.actions;
// export default counterSlice.reducer;

// // Try to define reusable selectors alongside their corresponding reducers.
// // input selectors
// const selectX = (state) => state.x;
// const selectY = (state) => state.y;
// const selectZ = (state) => state.z;

// const selectSum = createSelector(
//   [selectX, selectY, selectZ], // notation 1
//   (x, y, z) => x + y + z
// );
// const selectProduct = createSelector(
//   selectX, // notation 2
//   selectY,
//   selectZ,
//   (x, y, z) => x * y * z
// );
// const selectMySum = createSelector(
//   selectSum,
//   selectProduct,
//   (state, i) => i,
//   (s, p, i) => s + p + i
// );
// export { selectSum, selectProduct, selectMySum };

// ---------------
// App.js
// ----------------
// import { useSelector, useDispatch } from "react-redux";
// import {
//   incrementX,
//   incrementY,
//   incrementZ,
//   selectSum,
//   selectProduct,
//   selectMySum
// } from "./reducer";

// export default () => {
//   const state = useSelector((state) => state);
//   const sum = selectSum(state);
//   const product = selectProduct(state);
//   const mysum = selectMySum(state, 1000); // 1000 to be passed to all input selectors as second arg
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <button onClick={() => dispatch(incrementZ(-1))}>Z-1</button>
//       <button onClick={() => dispatch(incrementY(-1))}>Y-1</button>
//       <button onClick={() => dispatch(incrementX(-1))}>X-1</button>
//       <span>
//         ({state.x},{state.y},{state.z})
//       </span>
//       <button onClick={() => dispatch(incrementX(1))}>X+1</button>
//       <button onClick={() => dispatch(incrementY(1))}>Y+1</button>
//       <button onClick={() => dispatch(incrementZ(1))}>Z+1</button>
//       <br />
//       <span>sum: {sum}</span>
//       <br />
//       <span>product: {product}</span>
//       <br />
//       <span>my sum: {mysum}</span>
//     </div>
//   );
// };

// --------------------
// ===============================



// ===============================
// ========================
// ================
// redux 
// ================
// ========================
// ==============================
// persistent storage:
// Redux persist takes your Redux state object and save it to Persistence storage.

// When we refresh page in a web-app, the state always resets back to the initial values which in not a good thing when you try to build some large web-app like e-commerce.

// developers can save the Redux store in persistent storage, for example, the local storage. Therefore, even after refreshing the browser, the site state will still be preserved. Redux Persist also includes methods that allow us to customize the state that gets persisted and rehydrated, all with an easily understandable API.

// To use a different storage engine, we just need to modify the value of the storage property of persistConfig with the storage engine we want to use. For example, to use the sessionStorage engine, we’ll first import it as follows:

// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
// Then, modify persistConfig to look like the following code:

// const persistConfig = {
//   key: 'root',f
//   storageSession,
// }
// --
// import { persistStore, persistReducer } from 'redux-persist';
// For persistReducer is wrap your app’s root reducers and pass it to the persistStore function it ensures your redux state is stored to persisted storage whenever it changes.

// -----------------
// Customize what’s persisted:---
// We can customize a part of our state to persist by using the blacklist and whitelist properties of the config object passed to persistReducer. With the blacklist property, we can specify which part of state not to persist, while the whitelist property does the opposite, specifying which part of the state to persist.
// If we want to prevent notes from persisting, the config object should look like the following:

// const rootPersistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['notes']
// }
// // OR

// const rootPersistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['users']
// }

// The blacklist and whitelist properties take an array of strings. Each string must match a part of the state that is managed by the reducer we pass to persistReducer. When using blacklist and whitelist, we can only target one level deep. But, if we want to target a property in one of our states above, we can take advantage of nested persist.

// For example, let’s say the userReducer initial state looks like the following:
// --------------

// const initialState = {
//   user: {},
//   isLoggedIn: false,
// }

// If we want to prevent isLoggedIn from persisting, our code will look like the following:
// ------------

// const rootPersistConfig = {
//   key: 'root',
//   storage,
// }

// const userPersistConfig = {
//   key: 'user',
//   storage,
//   blacklist: ['isLoggedIn']
// }

// const rootReducer = combineReducers({
//   user: persistReducer(userPersistConfig, userReducer),
//   notes: notesReducer
// })

// const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
// Now, the isLoggedIn property won’t be persisted.







// ===============================
// ========================
// ================
// TypeScript
// ================
// ========================
// ==============================
// TypeScript:-
// ----------
// TypeScript adds static typing with optional type annotations to JavaScript.

// TypeScript is an open-source pure object-oriented programing language. It is a strongly typed superset of JavaScript which compiles to plain JavaScript. It contains all elements of the JavaScript. It is a language designed for large-scale JavaScript application development, which can be executed on any browser, any Host, and any Operating System. The TypeScript is a language as well as a set of tools. TypeScript is the ES6 version of JavaScript with some additional features.

// (OR)

// TypeScript is a superset of JavaScript, meaning that it does everything that JavaScript does, but with some added features.

// The main reason for using TypeScript is to add static typing to JavaScript. Static typing means that the type of a variable cannot be changed at any point in a program. It can prevent a LOT of bugs!

// JavaScript is a dynamically typed language, meaning variables can change type.


// JavaScript and More:
// -------------------
// TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.


// A Result You Can Trust:
// ----------------------
// TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps.


// Safety at Scale:
// ---------------
// TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.

// -------------------------------
// We use TypeScript because of the following benefits.
// -------------------------------
// -> TypeScript supports Static typing, Strongly type, Modules, Optional Parameters, etc.
// -> TypeScript supports object-oriented programming features such as classes, interfaces, inheritance, generics, etc.
// -> TypeScript is fast, simple, and most importantly, easy to learn.
// -> TypeScript provides the error-checking feature at compilation time. It will compile the code, and if any error found, then it highlighted the mistakes before the script is run.
// -> TypeScript supports all JavaScript libraries because it is the superset of JavaScript.
// -> TypeScript support reusability because of the inheritance.
// -> TypeScript make app development quick and easy as possible, and the tooling support of TypeScript gives us autocompletion, type checking, and source documentation.
// -> TypeScript has a definition file with .d.ts extension to provide a definition for external JavaScript libraries.
// -> TypeScript supports the latest JavaScript features, including ECMAScript 2015.
// -> TypeScript gives all the benefits of ES6 plus more productivity.
// -> Developers can save a lot of time with TypeScript.


// =============================
// Type Annotations:
// Type annotations are a crucial concept in TypeScript. They allow developers to specify the data types of variables, function parameters, and return types. This can help catch errors during development and improve code readability.
// =============================
// Interfaces:-
// Interfaces are used to define the structure of an object. They specify the names and types of the object’s properties and can be used to enforce consistency across multiple objects.
// =============================
// Classes:-
// Classes are a core concept in object-oriented programming, and TypeScript has full support for them. Classes allow developers to define blueprints for objects that share the same properties and methods. They can also include constructors, access modifiers, and inheritance.
// =============================
// Generics:-
// Generics are a powerful feature in TypeScript that allow for the creation of reusable code. They allow developers to create functions and classes that can work with a variety of data types.
// =============================
// Enums:
// Enums are a way to define a set of named values. They can improve code readability and help catch errors.
// =============================
// Type Inference
// Type inference is a feature of TypeScript that allows developers to omit type annotations in certain situations.
// =============================
// Union and Intersection Types:-
// Union types allow for the combination of two or more data types into one. This can be useful when a function or variable can accept multiple types of data.
// =============================
// Type Guards:
// Type guards are a feature in TypeScript that allow developers to check the type of a variable at runtime. This can be useful when working with union types or other situations where the type of a variable may not be known
// =============================
// Decorators:
// Decorators are a feature in TypeScript that allow for the addition of metadata to classes, methods, and properties. They can be used to modify the behavior of a class or to provide additional information for tools like code analyzers.
// =============================
// Modules:
// Modules are a way to organize code into smaller, reusable components. They allow developers to define private and public parts of a codebase and to import and export components between files.











// ===============================
// ========================
// ================
// React TypeScript
// ================
// ========================
// ==============================
// React.FC:-
// React.FC is a generic type in the React module that defines a functional component in TypeScript. It is a shorthand for describing a functional component that has a prop type.












// ===============================
// ========================
// ================
// GraphQL
// ================
// ========================
// ==============================

// In a nutshell, GraphQL acts as a layer to fetch and mutate data. It’s language-agnostic on both the front and back-end (e.g. JavaScript, Java, C#, Go, PHP, etc.) and serves as a bridge between client and server communications. In this way, it can be considered both a front-end and back-end technology.

// The goal of GraphQL is to provide methods for retrieving and modifying data. To provide this function, GraphQL has several operations:

// 1. Queries: for performing data fetching operations on the server.

// 2. Mutations: analogue to the standard CRUD (Create, Retrieve, Update, Delete) operations, except for the Retrieve (for which Queries are responsible in GraphQL).

// 3. Subscriptions: conceptually, subscriptions are like Queries in that it’s utilized to fetch data. It may maintain an active connection to your GraphQL server to enable the server to push live updates for the subscribed clients.

// 4. Resolvers: Resolvers are implemented in the back-end as handlers for the lookup logic for the requested resources.









// ===============================
// ========================
// ================
// Vue js
// ================
// ========================
// ==============================

// The data and properties you use within a computed property function are its dependencies.

// Reactive dependencies are those that are observable, like data properties or Vuex state.

// Non-reactive dependencies would be something like a simple variable or something from local-storage. For example

// const someArray = [1, 2, 3]
// export default {
//   data: () => ({ foo: 'foo' }),
//   computed: {
//     FOO () {
//       return this.foo.toUpperCase() // data property "foo" is a reactive dependency
//     },
//     firstArrayValue () {
//       return someArray[0] // variable "someArray" is a non-reactive dependency
//     }
//   }
// }

























// ===============================
// ========================
// ================
// javascript--
// ================
// ========================
// ==============================

// JavaScript Singleton:-
// ---------------------
// Singleton is a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.

// Object.freeze():-
// ----------------
// const prevents reassignment.
// Object.freeze() prevents mutability.

// The Object.freeze() method is shallow, meaning that it can freeze the properties of the object, not the objects referenced by the properties. 

// Object.freeze method makes the object completely read-only, but it’s only doing a shallow freeze, which means that it will only freeze the immediate properties of the object itself. If the object contains an array or object as a property, those properties can still be modified.

// Object.freeze makes an object completely immutable, while Object.seal allows existing properties to be modified, but prevents the addition and deletion of new properties.

// Object.isFrozen(frozenStudent); // === true

// Object.seal():-
// -------------
// Object.seal()
// On the other hand, The Object.seal() method prevents the addition and deletion of properties from an object, but it does not prevent the modification of the values of existing properties.
// Object.isSealed(student); // === true
// --------------
// const person = {
//     name: 'Geeksforgeeks',
//     address: {
//         city:"Noida"
//     }
// }
// Object.freeze(person)
// person.address.city = "India"
// person.name = "India"
// console.log(person.address.city)
// console.log(person.name)
// ----------------

// functions: 
// ==============
// anonymous:
// ----------
// It is a function that does not have any name associated with it. (or) An anonymous function is a function without a name
// An anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value. An anonymous function can also have multiple arguments, but only one expression.

// closure:
// -------
// Global variables can be made local (private) with closures.
// Closure in JavaScript is a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope of a function.


// lexical scope:-
// --------------
// A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.
// 		(or)
// Lexical Scoping: A function scope’s ability to access variables from the parent scope is known as lexical scope.
// 		(or)
// the inner functions have access to the variables and other resources of their parent scope.

// -The global scope is always the last scope of any JavaScript scope chain. In other words, the global scope is where all searches will end.
// -An inner (child) scope has access to its parent (outer) scope, but an outer scope does not have access to its child scope.

// Note:
// Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.
// ===================================
// pure:
// ----
// ------------
// A pure function is a function that always returns the same output given a specific input.

// A pure function does not change any value or state outside of its scope and it doesn’t depend on any value outside of its scope. It only depends on the input given to the function and does not produce any side effects.
// ------------

// A pure function in JavaScript is a function that returns the same result if the same arguments(input) are passed in the function. Let's see what makes a function pure in detail:

// - The return value of the function on the function call should only be dependent on the input function arguments.
// - It should not modify any non-local state. It means the function should not manipulate anything other than the data - stored in the local variables declared within the function.
// The function should not have any side effects, such as reassigning non-local variables, mutating the state of any part of code that is not inside the function, or calling any non-pure functions inside it.

// Pure functions are building blocks of functional programming. They always yield consistent result and does not manipulate non-local state or have any side effects. There are mainly two requirements of a pure function:

// Consistent result:--
// - Same result for the same input every time.
// - Result is only dependent on the input arguments. As the function does not perform any operation that requires any variable or data from outside the scope of the function.

// No side effects some common side effects:--
// - Making an HTTP request
// - Mutating any data that is not part of the function
// - Printing to a screen or console
// - DOM Query/Manipulation
// - Using Math.random()
// - Getting the current time

// =============================================
// Immediately Invoked Function Expression (IIFE):
// ----------------------------------------------
// arrow functions:
// ----------------

// ===========================
// Recursive Functions:
// --------------------
// Recursion is a process of calling itself. A function that calls itself is called a recursive function.

// a function that calls itself until your program achieves the desired result.
// ===================================

// Iterators and generators:
// ------------------------

// What is a side effect in JavaScript? : -
// -------------------------------------
// When we modify something, in JavaScript, we cause side effects, this simply means modifying or changing our code, causing it to have unpredictable behavior and mutability. 
// ===================================================================


// ////////////////////////////
// ////////////////
// ////////////
// webpack notes
// ////////////
// ///////////////////////
// ////////////////////////////

// Router is not working in webpack?

// If you happen to have a custom Webpack setup, you may be wondering how to set up React Router with Webpack. Let's say we have the following minimal React application using React Router:

// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
// } from 'react-router-dom';

// const Home = () => <div>Home</div>;

// const About = () => <div>About</div>;

// const App = () => (
//   <Router>
//     <Link to="/">Home</Link>
//     <Link to="/about">About</Link>

//     <Route exact path="/" component={Home} />
//     <Route path="/about" component={About} />
//   </Router>
// );

// export default App;
// If you open your React application and navigate between both paths, everything should be fine. However, if you navigate via the browser's URL bar to /about, you will get something like Cannot GET /about. That's because Webpack doesn't know what to serve on this path, because Webpack only knows about the root path / for your application. In order to serve your React application on every path, you need to tell Webpack and its configuration that it should fallback for every path to your entry point:

// ...

// module.exports = {
//   ...
//   devServer: {
//     historyApiFallback: true,
//   },
// };
// Now you should be able to navigate via the browser's URL bar to /about. I hope this helps anyone who stumbles across this issue.

// ////////////////////////////
// what is webpack:
// ---------------

// webpack is a highly extensible and configurable JavaScript static module bundler for JavaScript applications. With its extensible nature, you can plug in external loaders and plugins to achieve your end goal.

// Webpack is an open-source JavaScript module bundler that is widely used in modern web development workflows. It takes various assets, such as JavaScript, CSS, images, and fonts, and bundles them together in an optimized way for deployment on the web. Webpack allows developers to organize and manage their codebase more efficiently, enabling features like code splitting, asset optimization, and module loading.

// Key concepts and features of Webpack include:

// Module Bundling:

// Webpack treats every file in your project as a module, including JavaScript files, stylesheets, images, and other assets. It creates a dependency graph to understand how these modules are related to each other.
// Entry Points:

// An entry point is the starting point of your application, where Webpack begins its bundling process. You can have multiple entry points, each representing a different part of your application.
// Output:

// Webpack generates one or more bundles as output. These bundles are the result of the bundling process and typically include the JavaScript, CSS, and other assets needed for your application.
// Loaders:

// Loaders are used to preprocess files before they are added to the bundle. For example, the Babel loader is commonly used to transpile modern JavaScript (ES6+) to a version compatible with most browsers.
// Plugins:

// Plugins extend the functionality of Webpack and perform a wide range of tasks, such as optimizing code, generating HTML files, extracting CSS into separate files, and more. Plugins are often used to customize the build process.
// Code Splitting:

// Webpack supports code splitting, allowing you to split your code into smaller chunks that can be loaded on demand. This can lead to faster initial load times and improved performance.
// Development Server:

// Webpack provides a development server that allows developers to test their applications locally. The development server supports features like live reloading and hot module replacement (HMR) to speed up the development process.
// Tree Shaking:

// Webpack supports tree shaking, a technique that eliminates dead code from the final bundle. This helps reduce the size of the bundle by removing unused code.
// Production Optimization:

// In the production build, Webpack optimizes the code by minifying JavaScript, CSS, and other assets. This results in smaller bundle sizes and improved performance for the deployed application.
// ===================================
// ---------------
// what is package.json
// what is dependencies in package.json 
// ====================================================================================================
// ====================================================================================================


// //////////////////////////////////////////////////////////////////////////////////////////
// ==========================================================================================
// /////////////////////////////////////////////////////////////////////////////////////////
// What is useCallback?
// useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.

// Memoization is a way to cache a result so that it doesn’t need to be computed again. This can boost performance.
// =============================
// redux middleware:-
// It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
// (or)
// Redux middleware is a snippet of code that provides a third-party extension point between dispatching an action and the moment it reaches the reducers.


// People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing,
// [ Action ] <-> [ Middleware ] <-> [ Dispatcher ]
// const store = createStore(rootReducer, applyMiddleware(reduxLogger, reduxThunk))
// =============================
// mutating state:-
// By mutation I mean changing or affecting a source element. The goal is to keep the original element unchanged at all times.

// A mutation is a side effect: the fewer things that change in a program, the less there is to keep track of, which results in a simpler program.

// mutating state in react:
// State mutation happens when you try to update the state of a component without actually using setState function.
// This can happen when you are trying to do some computations using a state variable and unknowingly save the result in the same state variable.

// This is the main reason why it is advised to return new instances of state variables from the reducers by using Object.assign({}, ...) or spread syntax.
// ====================================
// Mutability:-
// Mutability refers to data types that can be accessed and changed after they've been created and stored in memory. Immutability, on the other hand, refers to data types that you can't change after creating them – but that you can still access in the memory.


// ===================================
// Stack:-
// -----
// Stack is a data structure that obeys the Last In First Out (LIFO) principle. This implies that the last item to enter the stack goes out first.

// Imagine a pile of books stacked up on a shelf. The last book ends up being the first to be removed. Data stored inside the stack can still be accessed easily.

// heap:-
// ----
// Reference data are stored inside the heap. When reference data is created, the variable of the data is placed on the stack but the actual value is placed on the heap.


// e.preventDefault() is a method that belongs to the event object (e). It is called to prevent the default behavior of form submission, which is to refresh the page. By calling preventDefault(), we override the default behavior and prevent the page from refreshing.










// ===============================
// ========================
// ================
// Oops
// ================
// ========================
// ==============================
// Classes are a core concept in object-oriented programming, and TypeScript has full support for them. Classes allow developers to define blueprints for objects that share the same properties and methods. They can also include constructors, access modifiers, and inheritance.