
const Links1 = 'react-notes'
const Links2 = 'redux-notes'
const Links3 = 'redux-toolkit'
const Links4 = 'react-projects'

const isHighlighted = 'react-notes'

const reactData = {
    reactNote: [
        {
            id: 2,
            title: "intro",
            note: `
            `
        },
        {
            id: 3,
            title: "What are props in React?",
            note: [
                {
                    text1: ` In React, "props" is short for "properties," and it is a mechanism for passing data from a parent component to a child component. Props are a way to provide input to a React component, allowing it to render dynamically based on the received data.
            They can be single-valued or objects having a set of values that will be passed to components of React during creation by using a naming convention that almost looks similar to HTML-tag attributes. 

            Props stand for "Properties." They are read-only values. 
            It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. 
            It gives a way to pass data from one component to other components. 
            It is similar to function arguments. Props are passed to the component in the same way as arguments passed in a function.

            Props are immutable so we cannot modify the props from inside the component. 
            Inside the components, we can add attributes called props. 
            These attributes are available in the component as this. props and can be used to render dynamic data in our render method.
            `
                }
            ]
        },
        {
            id: 4,
            title: "Explain about types of side effects in React component.?",
            note: [
                {
                    text1: ` #) A <b>side effect</b> is anything that affects something outside the scope of the function being executed. These can be, say, a network request, which has your code communicating with a third party

                    In React components, side effects are operations that affect the outside world :

                    => such as modifying the DOM or manually changing the DOM in React components,
                    => setting up a subscription,
                    => making API calls for Data fetching, or updating global state,
                    => Using unpredictable timing functions like setTimeout or setInterval

                    Side effects can be classified into two types:

                    <b> Synchronous side effects: </b> 
                    Synchronous side effects are the effects that happen immediately after the state of the component changes. These side effects are straightforward to manage, as they don't require any asynchronous processing or waiting for data.
                    Examples of synchronous side effects include:

                    Changing the visibility of a component
                    Updating the text or content of a component
                    Showing or hiding an error message

                    <b>Asynchronous side effects: </b>
                    Asynchronous side effects are the effects that happen after a delay or as a result of some external event, such as a user input or a network request. These side effects can be more complicated to manage than synchronous side effects, as they require asynchronous processing and state management.
                    Examples of asynchronous side effects include:

                    Making an API call to fetch data
                    Updating the application state after receiving data from an API call
                    Setting a timer to run a function after a specified delay
                    To manage side effects in React components, developers can use the useEffect hook. The useEffect hook allows developers to perform side effects after rendering the component and to clean up any resources used by the effect. By using the useEffect hook, developers can manage both synchronous and asynchronous side effects in their components.

                    <div class='table-res'>
                    <table border=1 >
                        <tbody>
                            <tr>
                                <th>Lifecycle Methods</th>
                                <th>Hook</th>
                                <th>Renders</th>
                            </tr>
                            <tr>
                                <td>1) componentDidMount</td>
                                <td>{'useEffect(()=>{ ... }, [ ])'}</td>
                                <td>after first render only</td>
                            </tr>
                            <tr>
                                <td>2) componentDidUpdate</td>
                                <td>{'useEffect(()=>{... }, [dependency1, dependency2])'}</td>
                                <td>after first render AND subsequent renders caused by a change in a dependency</td>
                            </tr>
                            <tr>
                                <td>3) componentWillUnmount</td>
                                <td>{'useEffect(() => { ... return ()=> {...cleanup}})'}</td>
                                <td>So as a cleanup method to improve your application, you can clean up (cancel) the asynchronous request so that it's not completed.</td>
                            </tr>
                            <tr>
                                <td>4) shouldComponentUpdate</td>
                                <td>{'no comparable hook, instead, wrap function component in React.memo(List)'}</td>
                                <td>renders only if a prop changes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                    `,
                    code1: ``
                },
            ]
        },
        {
            id: 5,
            title: "Data Binding",
            note: [
                {
                    text1: `Data binding is a concept in web development that establishes a connection between the data in an application and the user interface (UI) elements that display that data. The purpose of data binding is to ensure that changes in one part of the application are automatically reflected in another part, creating synchronization between the data and the UI.`,
                    code1: ``
                }
            ]
        },
        {
            id: 6,
            title: "JSX",
            note: [
                {
                    text1: `JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to XML or HTML but allows you to write JavaScript code in a more declarative way, especially when defining UI components in React.js.

                    JSX makes it easier to describe the structure of UI components in a syntax that resembles HTML. While it might look like a template language, JSX is ultimately just syntactic sugar over regular JavaScript. It gets transpiled into JavaScript code that creates and manipulates React elements

                    As stated in the official docs of React, JSX provides syntactic sugar for React.createElement( ) function.

                    <b> const element = &lt; h1 &gt; Hello, JSX !&lt; /h1 &gt; </b>

                    In the above example, the syntax <b>&lt; h1 &gt; Hello, JSX !&lt; /h1 &gt;</b> is JSX. It represents a React element (a virtual representation of a DOM element) and is equivalent to the following JavaScript code:

                    <b> const element = React.createElement('h1', null, 'Hello, JSX!'); </b>
                    <span style="color:#aa1099">
                    Behind the scenes, tools like Babel are used to transpile JSX into regular JavaScript code that uses React.createElement to create React elements. The resulting JavaScript is what actually gets executed in the browser.
                    </span>
                    why can't browser read jsx
                    JSX isn't directly supported by browsers, requiring conversion by tools like Babel to transform JSX into valid JavaScript. This transpilation ensures browsers can interpret and execute the JSX-embedded code in React applications.`,
                    code1: `const element = React.createElement('h1', null, 'Hello, JSX!'); </b>`
                }
            ]
        },
        {
            id: 7,
            title: "vue js vs React js",
            note: [
                {
                    text1: `Vue.js and React.js are both popular JavaScript frameworks for building user interfaces, but they have some differences in terms of design philosophy, syntax, and approach to certain features. Here are some key distinctions between Vue.js and React.js:

                    <b>Learning Curve</b>:
                    Vue.js: Vue has a gentle learning curve, making it relatively easy for beginners to pick up. Its template syntax is similar to HTML, which can be advantageous for developers familiar with web development basics.
                    React.js: React has a steeper learning curve, especially for beginners. Concepts like JSX (JavaScript XML) and the emphasis on a unidirectional data flow may require some adjustment for developers new to the framework.

                    <b>Syntax</b>:
                    Vue.js: Vue.js uses an HTML-based template syntax that is familiar to many developers. Templates are written in plain HTML with Vue-specific directives.
                    React.js: React uses JSX, which is a syntax extension for JavaScript. JSX allows you to write HTML elements and components directly within your JavaScript code, providing a more expressive way to describe the UI.

                    <b>Data Binding</b>:
                    Vue.js: Vue supports both one-way and two-way data binding. It has a v-model directive for two-way binding and provides easy syntax for handling state changes in components.
                    React.js: React primarily uses one-way data binding. Data flows from parent components to child components through props. React does not have built-in two-way binding, emphasizing a unidirectional data flow.

                    <b>State Management</b>:
                    Vue.js: Vue has a built-in state management system that allows you to manage local component state. For more complex state management, Vue can be integrated with Vuex, a state management library.
                    React.js: React uses a unidirectional data flow and relies on state and props to manage component data. For larger applications, Redux or other state management libraries are commonly used with React.

                    <b>Component Structure</b>:
                    Vue.js: Vue components are more flexible in terms of structure, and the framework provides a clear and concise way to define components, templates, and styles.
                    React.js: React components are typically written using JSX and often include separate files for CSS styles. React encourages a modular and reusable component structure.

                    <b>Community and Ecosystem</b>:
                    Vue.js: Vue has a growing and active community, but it is generally smaller than the React community. However, it has gained popularity rapidly, and there is a good ecosystem of libraries and tools.
                    React.js: React has a large and well-established community with a rich ecosystem of libraries, tools, and resources. It is widely adopted by many large companies and has strong community support.
                    Ultimately, the choice between Vue.js and React.js often depends on factors such as personal preference, project requirements, and the specific needs of the development team. Both frameworks are capable of building powerful and efficient user interfaces.

                    <b>vue js </b>:

                    `,
                    code1: `  var V = new Vue({
                        el:'#vue-instance',
                    data:{
                        name:'Niklesh'
              }
            })
            &lt;script src=&quot; https://cdnjs.cloudflare.com /ajax/libs/vue/2.5.4/vue.js&quot;&gt; &lt;/script&gt;
                    &lt;div id=&quot;vue-instance&quot;&gt;
                        &lt;div&gt;One Way binding with input box &lt;input type=&quot;text&quot; :value=&quot;name&quot;&gt;&lt;/div&gt;
                        &lt;div&gt;One Way binding as text {{ name }}&lt;/div&gt;

                        &lt;div&gt;Two way binding : &lt;input type=&quot;text&quot; v-model=&quot;name&quot;&gt;&lt;/div&gt;
                    &lt;/div&gt;`
                }
            ],
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
            //         )
        },
        {
            id: 8,
            title: "Virtual DOM",
            note: [
                {
                    text1: `The Virtual DOM (VDOM) is an in-memory representation of Real DOM. The representation of a UI is kept in memory and synced with the "real" DOM. It's a step that happens between the render function being called and the displaying of elements on the screen. This entire process is called reconciliation.
                    The virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed.

                    Reconciliation:-
                    Reconciliation in React.js is the process of efficiently updating the user interface to reflect changes in the application state. When the state of a React component changes, React needs to update the actual DOM to reflect those changes. The reconciliation process involves comparing the new Virtual DOM representation of the UI with the previous one and determining the minimal set of changes needed to update the real DOM.

                    Here are the key steps in the reconciliation process:

                    <b>1)Rendering</b>:
                    =>When a React component's state or props change, the component is re-rendered.
                    =>During the re-render, the component returns a new Virtual DOM representation of its UI.

                    <b>2)Virtual DOM Comparison</b>:
                    =>React compares the new Virtual DOM with the previous snapshot of the Virtual DOM.
                    =>It identifies the differences (diffs) between the new and old Virtual DOM. This process is often referred to as the "diffing algorithm."

                    <b>3)Reconciliation Algorithm</b>:
                    =>React uses a reconciliation algorithm to efficiently determine how to update the real DOM based on the identified differences.
                    =>The algorithm aims to minimize the number of manipulations needed in the actual DOM, optimizing the update process.

                    <b>4)Updating the DOM</b>:
                    =>After determining the differences, React applies the changes to the real DOM.
                    =>React updates only the parts of the DOM that have changed, rather than re-rendering the entire DOM.

                    <b>5)Component Lifecycle Methods</b>:
                    =>During the reconciliation process, React invokes specific lifecycle methods on the components, allowing them to perform actions at different stages of the update cycle.
                    =>For example, the componentDidUpdate lifecycle method is called after the component has been updated in the DOM.`,
                    code1: ``
                }
            ],
        },
        {
            id: 9,
            title: "What are controlled components?",
            note: [
                {
                    text1: `-A controlled component is a component that is controlled by React state
                    -A component that controls the input elements within the forms on subsequent user input is called Controlled Component, i.e, every state mutation will have an associated handler function.
                    -Controlled Components are those in which form's data is handled by the component's state. It takes its current value through props and makes changes through callbacks like onClick, onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component.

                    In most cases, we recommend using controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.
                    `,
                    code1: ``
                }
            ],
        },
        {
            id: 10,
            title: "Uncontrolled Components",
            note: [
                {
                    text1: `Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM (Document Object Model). So in order to access any value that has been entered we take the help of refs.
                    You query the DOM using a ref to find its current value when you need it.

                    In most cases, it's recommend to use controlled components to implement forms. In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.`,
                    code1: ``
                }
            ],
        },
        {
            id: 11,
            title: "What is the difference between createElement and cloneElement?",
            note: [
                {
                    text1: `JSX elements will be transpiled to React.createElement() functions to create React elements which are going to be used for the object representation of UI. Whereas cloneElement is used to clone an element and pass it new props.

                    <b>1) createElement</b>:
                    The createElement method is the fundamental way to create a React element. It is a function that takes three arguments:
                    <b>Type</b>: This can be either a string representing the HTML tag name or a reference to a component.
                    <b>Props</b>: This is an object containing the properties that will be assigned to the element.
                    Children: This can be a string, a React element, or an array of React elements.

                    <b>Syntax</b>:-
                    <span style="color:red">const element = React.createElement('h1', {className: 'title'}, 'Hello, world!');</span>

                    <b>2) cloneElement</b>:
                    The cloneElement method is used to clone and modify an existing React element. It takes two arguments:
                    <b>Element</b>: This is the React element that you want to clone.
                    <b>Props</b>: This is an object containing the properties that you want to add or override.

                    <b>Syntax</b>:-
                    <span style="color:red">React.cloneElement(
                    element,
                    [props],
                    [...children]
                    )</span>
                    <b>Element</b>: the element that we want to clone.
                    <b>[props]</b>: The additional props that we want to add to the element.
                    <b>[…children]</b>: The children of the cloned object. Note that the children of the existing object are not copied
`,
                    code1: `//Ex:-
                    const originalElement = React.createElement('h1', {className: 'title'}, 'Hello, world!');

                    const clonedElement = React.cloneElement(originalElement, {className: 'subtitle'},'MKS');

                    //Ex2:-
                    const originalElement = React.createElement('div', {className: 'title', style:{backgroundColor: "#9acf75" } }, 'Hello, world!');
                    const originalPara = React.createElement('p', {className: 'para', style:{backgroundColor: "#989fac" } }, 'Hello, world!');
                    const clonedElement = React.cloneElement(originalElement, {className: 'App-header', style:{backgroundColor: "#9acf75" } }, originalPara );
                    return (
                        &lt;div&gt;
                            {originalElement}
                            {clonedElement}
                        &lt;/div&gt;
                        );
`
                }
            ],
        },
        {
            id: 12,
            title: "What is Lifting State Up in React?",
            note: [
                {
                    text1: ` When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components.
                     A
                    / |
                    B   C`,
                    code1: ``
                }
            ],
        },
        {
            id: 13,
            title: "What are the different phases of component lifecycle?",
            note: [
                {
                    text1: `The component lifecycle has three distinct lifecycle phases:

                    <b>Mounting</b>:The component is ready to mount in the browser DOM. This phase covers initialization from constructor(), getDerivedStateFromProps(), render(), and componentDidMount() lifecycle methods.

                    <b>Updating</b>: In this phase, the component gets updated in two ways, sending the new props and updating the state either from setState() or forceUpdate(). This phase covers getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate() and componentDidUpdate() lifecycle methods.

                    <b>Unmounting</b>: In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase includes componentWillUnmount() lifecycle method.

                    It's worth mentioning that React internally has a concept of phases when applying changes to the DOM. They are separated as follows Render The component will render without any side effects. This applies to Pure components and in this phase, React can pause, abort, or restart the render.

                    Pre-commit Before the component actually applies the changes to the DOM, there is a moment that allows React to read from the DOM through the <b>getSnapshotBeforeUpdate()</b>.

                    Commit React works with the DOM and executes the final lifecycles respectively <b>componentDidMount()</b> for mounting, <b>componentDidUpdate()</b> for updating, and <b>componentWillUnmount()</b> for unmounting.`,
                    code1: ``
                }
            ],
        },
        {
            id: 14,
            title: "What are the lifecycle methods of React?",
            note: [
                {
                    text1: `Before React 16.3

                    <b>componentWillMount</b>: Executed before rendering and is used for App level configuration in your root component.
                    <b>componentDidMount</b>: Executed after first rendering and here all AJAX requests, DOM or state updates, and set up event listeners should occur.
                    <b>componentWillReceiveProps</b>: Executed when particular prop updates to trigger state transitions.
                    <b>shouldComponentUpdate</b>: Determines if the component will be updated or not. By default it returns true. If you are sure that the component doesn't need to render after state or props are updated, you can return false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives new prop.
                    <b>componentWillUpdate</b>: Executed before re-rendering the component when there are props & state changes confirmed by shouldComponentUpdate() which returns true.
                    <b>componentDidUpdate</b>: Mostly it is used to update the DOM in response to prop or state changes.
                    <b>componentWillUnmount</b>: It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.

                    React 16.3+

                    <b>getDerivedStateFromProps</b>: Invoked right before calling render() and is invoked on every render. This exists for rare use cases where you need a derived state. Worth reading if you need derived state.
                    <b>componentDidMount</b>: Executed after first rendering and where all AJAX requests, DOM or state updates, and set up event listeners should occur.
                    <b>shouldComponentUpdate</b>: Determines if the component will be updated or not. By default, it returns true. If you are sure that the component doesn't need to render after the state or props are updated, you can return a false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives a new prop.
                    <b>getSnapshotBeforeUpdate</b>: Executed right before rendered output is committed to the DOM. Any value returned by this will be passed into componentDidUpdate(). This is useful to capture information from the DOM i.e. scroll position.
                    <b>componentDidUpdate</b>: Mostly it is used to update the DOM in response to prop or state changes. This will not fire if shouldComponentUpdate() returns false.
                    <b>componentWillUnmount</b>: It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.`,
                    code1: ``
                }
            ],
        },
        {
            id: 15,
            title: "What are Higher-Order Components?",
            note: [
                {
                    text1: `A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature.

                    We call them pure components because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components.

                    Benefits of Using Higher-Order Components in React
                    <b>Reusability</b>: HOCs allow you to reuse component logic across multiple components, which can save time and reduce code duplication.
                    <b>Flexibility</b>: HOCs can take additional arguments, which allows you to customize the behavior of the HOC. This makes them a flexible way to add functionality to your components.
                    <b>Separation of concerns</b>: HOCs can help separate concerns in your code by encapsulating certain functionality in a separate component. This can make the code easier to read and maintain.
                    <b>Composition</b>: HOCs can be composed together to create more complex functionality. This allows you to build up functionality from smaller, reusable pieces.
                    Higher-order components can be used to implement cross-cutting concerns in your application such as authentication, error handling, logging, performance tracking, and many other features.

                    <span style="color:red">const EnhancedComponent = higherOrderComponent (WrappedComponent);</span>

                    <b>HOC can be used for many use cases</b>:
                    Code reuse, logic and bootstrap abstraction.
                    Render hijacking.
                    State abstraction and manipulation.
                    Props manipulation.`,
                    code1: ``
                }
            ],
        },
        {
            id: 16,
            title: "How to create props proxy for HOC component?",
            note: [
                {
                    text1: `You can add/edit props passed to the component using props proxy pattern like this:

                    This approach enables the addition of props to wrapped components before rendering, proving useful in various scenarios such as logging, modifying data passed to components, and managing authentication in diverse applications.`,
                    code1: `  function HOC(WrappedComponent) {
                        return class Test extends Component {
                                  render() {
                            const newProps = {
                                  title: "New Header",
                              footer: false,
                              showFeatureX: false,
                              showFeatureY: true,
                            };

                              return  &lt;WrappedComponent {...this.props} {...newProps} /&gt;;
                          }
                        };
                      }`
                }
            ],
        },
        {
            id: 17,
            title: "What is the use of react-dom package?",
            note: [
                {
                    text1: `The react-dom package provides DOM-specific methods that can be used at the top level of your app. Most of the components are not required to use this module. Some of the methods of this package are:

                    render()
                    hydrate()
                    unmountComponentAtNode()
                    findDOMNode()
                    createPortal()

                    <b><span style="color:red">render()</span></b>:
                    render function renders a piece of JSX (“React node”) into a browser DOM node.
                    In React 18, render was replaced by createRoot. Please use createRoot for React 18 and beyond.

                    <b>Syntax </b>:
                    render(reactNode, domNode, callback?)
                    Parameters</b>:
                    <b>reactNode</b>: A React node that you want to display. This will usually be a piece of JSX like <App />, but you can also pass a React element constructed with createElement(), a string, a number, null, or undefined.
                    <b>domNode</b>: A DOM element. React will display the reactNode you pass inside this DOM element. From this moment, React will manage the DOM inside the domNode and update it when your React tree changes.
                    <b>optional callback</b>: A function. If passed, React will call it after your component is placed into the DOM.

                    <b><span style="color:red">findDOMNode</span></b>:
                    findDOMNode finds the browser DOM node for a React class component instance.
                    <b>Syntax</b>:-
                    const domNode = findDOMNode(componentInstance)

                    <b><span style="color:red">unmountComponentAtNode()</span></b>:
                    unmountComponentAtNode removes a mounted React component from the DOM.
                    unmountComponentAtNode returns true if a component was unmounted and false otherwise.


`,
                    code1: `//Ex:-----------
                    import React from "react";
                    import {render, unmountComponentAtNode} from "react-dom";

                    import App from "./App";

                    const rootElement = document.getElementById("root");


        const CBFun = () => {
                        setTimeout(() => {
                            console.log("call")
                            unmountComponentAtNode(rootElement);
                        }, 2000)
                    }

                    render(&lt;App /&gt;, rootElement,  CBFun() );

                    //--------- 
                    // findDOMNode Ex:
                    // Defining our App Component 
                    const App = () => {

                                    // Function to get element from findDOMNode() 
                                    function find() {
                                        let node = document.getElementById("node");
                                        let a = ReactDOM.findDOMNode(node);
                                        console.log(a);
                                        a.style.color = 'green';
                                        a.style.fontSize = "x-large";
                                    } 
                      // Returning our JSX code 
                      return &lt;&gt;
                      &lt;div&gt;
                          &lt;div id=&#39;node&#39;&gt;DOM Node&lt;/div&gt;
                          &lt;button onClick={find}&gt;Click to find&lt;/button&gt;
                      &lt;/div&gt;
                  &lt;/&gt;; 
                    }


                    App.js
                    -------
                    const domNode = document.getElementById('root');

        document. getElementById('render'). addEventListener ( 'click', () => {
                        render(&lt;App /&gt;, domNode);
        });

        document. getElementById('unmount'). addEventListener ( 'click', () => {
                        unmountComponentAtNode(domNode);
        });
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
                {
                    text1: ``,
                    code1: ``
                },
            ],
        },
        {
            id: 18,
            title: "What is the purpose of render method of react-dom?",
            note: [
                {
                    text1: `This method is used to render a React element into the DOM in the supplied container and return a reference to the component. If the React element was previously rendered into container, it will perform an update on it and only mutate the DOM as necessary to reflect the latest changes.

                    <span style="color:red">ReactDOM.render(element, container, [callback])</span>

                    If the optional callback is provided, it will be executed after the component is rendered or updated.`,
                    code1: ``
                }
            ],
        },
        {
            id: 19,
            title: "What is prop drilling in React",
            note: [
                {
                    text1: `Prop drilling in React refers to the process of passing down props (properties) through multiple levels of nested components. When a component deep in the component tree needs access to a prop that is originally provided by a parent component, these props have to be passed down through the intermediate components, even if those intermediate components do not use or need the props themselves.

                    Prop drilling can become a challenge in large applications as the component tree grows, and passing down props through multiple levels might make the code harder to maintain. To address this, there are advanced state management solutions in React, such as context API, Redux, or Recoil, which can help manage global or shared state without the need for prop drilling.`,
                    code1: ``
                }
            ],
        },
        {
            id: 21,
            title: "What are error boundaries?",
            note: [
                {
                    text1: `Error boundaries are a feature in React that allows you to catch JavaScript errors anywhere in a component tree and log those errors, display a fallback UI, or perform other actions. Error boundaries are useful for preventing unhandled errors from crashing the entire React application.

                    In React, errors that occur during rendering, in lifecycle methods, or in the constructors of the whole tree below them are considered uncaught errors. By default, if an error occurs in a component, it will propagate up the component tree until it reaches the root, causing the entire application to unmount.

                    Error boundaries work by defining special methods in a class component. When an error is thrown during the rendering or lifecycle methods of a component, the error is caught by the nearest error boundary and allows you to handle the error gracefully.


                    Any component which uses one of the following lifecycle methods is considered an error boundary.
                    In what places can an error boundary detect an error?

                    Render phase
                    Inside a lifecycle method
                    Inside the constructor

                    With error boundaries: As mentioned above, error boundary is a component using one or both of the following methods: static <b>getDerivedStateFromError</b> and <b>componentDidCatch.</b>

                    As of v16.2.0, there's no way to turn a functional component into an error boundary.

                    The React docs are clear about that, although you're free to reuse them as many times as you wish:

                    The <b>componentDidCatch()</b> method works like a JavaScript catch <b>{ }</b> block, but for components. Only class components can be error boundaries. In practice, most of the time you'll want to declare an error boundary component once and use it throughout your application.`,
                    code1: ``
                }
            ],
        },
        {
            id: 22,
            title: "What is React Hooks?",
            note: [
                {
                    text1: `Hooks allow functional components to have local component state, access context, perform side effects, and more.

                    <b>1) useState</b>
                    Manages state in functional components.
                    const [state, setState] = useState(initialState);

                    <b>2) useEffect</b>
                    Performs side effects in functional components, such as data fetching or subscriptions.`,
                    code1: `useEffect(() => {
                        // Side effect code here
                        return () => {
                            // Cleanup code here
                        };
                        }, [dependencies]);`
                },
                {
                    text1: `<b>3) useContext</b>
                    Instead of passing the props down through each component, React Context allows you to broadcast data to the components below.
                    Accesses the value of a React context within a functional component.

                    const contextValue = useContext(MyContext);`,
                    code1: ``
                },
                {
                    text1: `<b>4) useReducer</b>
                    Manages more complex state logic by combining useState and useEffect in a single hook.
                    const [state, dispatch] = useReducer(reducer, initialState);`,
                    code1: ``
                },
                {
                    text1: `<b>5) useCallback</b>
                    Memoizes a callback function to prevent unnecessary renders in child components.`,
                    code1: `    const memoizedCallback = useCallback(() => {
                        // Callback code here
                    }, [dependencies]);`
                },
                {
                    text1: `<b>6) useMemo</b>
                    Memoizes the result of a computation to prevent unnecessary recalculations.
                    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`,
                    code1: ``
                },
                {
                    text1: `<b>7) useRef</b>
                    Creates a mutable object that persists across renders and does not trigger re-renders when mutated.

                    const myRef = useRef(initialValue);`,
                    code1: ``
                },
                {
                    text1: `<b>8) forwardRef </b> -
                    Ref forwarding is a technique for automatically passing a ref through a component to one of its children. This is typically not necessary for most components in the application. However, it can be useful for some kinds of components, especially in reusable component libraries.`,
                    code1: `                    import React, {forwardRef, useRef, useImperativeHandle} from 'react';

                    const RefCustomInput = forwardRef(function RefCustomInput(props, ref) {
        const inputRef = useRef(null);
        useImperativeHandle(ref, () => {
            return {
                        focus() {
                        inputRef.current.focus();
                    },
                        scrollIntoView() {
                            console.log(inputRef.current.value)
                        },
                        };
                    }, []);

                    return (
                        &lt;&gt;
                        &lt;input type=&quot;text&quot; {...props} ref={inputRef} /&gt;
                    &lt;/&gt;
                    )
                });

                export default RefCustomInput;`
                },
                {
                    text1: `<b>9) useImperativeHandle</b>

                    Customizes the instance value exposed when using React.forwardRef.
                    useImperativeHandle(ref, () => ({
                        // Exposed methods or properties
                    }), [dependencies]);`,
                    code1: ``
                },
                {
                    text1: `<b>10) useLayoutEffect</b>

                    Similar to useEffect, but fires synchronously after all DOM mutations.

                    useLayoutEffect fires synchronously after all DOM loading is done loading. This is useful for synchronously re-rendering the DOM and also to read the layout from the DOM. But to prevent blocking the page loading, we should always use the useEffect hook.

                    useLayoutEffect is a hook in React that is similar to useEffect, but it fires synchronously after all DOM mutations. It is often used when you need to read from the DOM or perform other actions that require layout before the browser paint

                    Synchronous Execution
                    Unlike useEffect, which runs asynchronously after the browser paints, useLayoutEffect runs synchronously immediately after all DOM mutations. This makes it suitable for tasks that need to be executed before the browser paints.

                    useLayoutEffect(() => {
                        // DOM mutation code here
                    }, [dependencies]);`,
                    code1: `//Ex:-
                    const ref = useRef('This is dom')

                    useEffect(() => {
                        ref.current = 'some value'
                    })

                    // then, elsewhere in that hook or something, later
                    useLayoutEffect(() => {
                        console.log(ref.current) // <-- this logs an old value because this runs first!
                    })`
                },
                {
                    text1: `<b>11) useDebugValue</b>:

                    Customizes the display of a custom hook in React DevTools.
                    useDebugValue(value);`,
                    code1: ``
                },
                {
                    text1: ``,
                    code1: ``
                },
            ],
        },
        {
            id: 20,
            section: `Hooks`,
            title: "useState",
            note: [
                {
                    text1: `useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called. 

                    <span style="color:red"> const [state, setState] = useState(initialValue); </span>
                    using array destructuring we can set the variable name and function name

                    <b>What does the React.useState Hook do?</b>
As stated previously, <b>useState</b> enables you to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component.

Whereas the <b>state in a class</b> is always an <b>object</b>, with Hooks, the state can be any type. Each piece of state holds a single value: an object, an array, a Boolean, or any other type you can imagine.

<b>useState</b> returns an array where the first item is the getter and the second item is the setter. useState can also take an initial state by passing your desired value as the params. It is a common practice to prefix the setter with set followed by the state name like the example above.
                    `,
                    code1: `const App = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        &lt;div&gt;
            &lt;p&gt;{count}&lt;/p&gt;
            &lt;button type=&quot;button&quot; onClick={incrementCount}&gt;
                Increment Count
            &lt;/button&gt;
        &lt;/div&gt;
    );
};`
                }
            ],
        },
        {
            id: 23,
            title: "useEffect",
            note: [
                {
                    text1: `<b>Side Effect</b>
                    Most React components are <a href="./javascript-notes.html#pure functions">pure functions</a>, meaning they receive an input and produce a predictable output of JSX.

                    In React.js, a side effect refers to any operation that interacts with the outside world or has an impact beyond the component itself. This includes operations such as:

    <b>Data fetching</b>: Making API calls to retrieve or send data.
    <b>Direct DOM manipulation</b>: Changing elements or attributes directly, rather than using React's declarative approach.
    <b>ubscriptions</b>: Setting up listeners or subscriptions to external data sources.
    <b>Timers</b>: Using functions like <u>setTimeout</u> or <u>setInterval</u> to schedule tasks.
    <b>Logging</b>: Writing to the console or other external systems for debugging purposes.

To handle side effects in React, you use the <u>useEffect</u> hook (or <u>componentDidMount, componentDidUpdate</u>, and <u>componentWillUnmount</u> lifecycle methods in class components). The useEffect hook allows you to perform side effects in functional components and gives you a way to clean up after the effects when the component unmounts or when dependencies change.

                    In React, <b>side effects</b> refer to any operations or behaviors that occur in a component after rendering, and that don't directly impact the current component render cycle. These side effects can include tasks such as data fetching, subscriptions, manually changing the DOM, or other interactions with the outside world.

                    The useEffect hook in React is used to perform side effects in functional components. Side effects can include data fetching, subscriptions, manual DOM manipulations, or any operation that needs to be performed after the component has been rendered to the screen.

                    The typical use case for useEffect is to manage asynchronous or non-blocking code within a functional component. It allows you to perform actions that are not directly related to rendering but are necessary for the component's behavior.

                    <b>1)Asynchronous Execution</b>:
                    The function passed to useEffect runs asynchronously after the render cycle. It does not block the rendering of the component.

                    <b>2)Dependencies Array</b>:
                    The second parameter is an array of dependencies. If any of these dependencies change between renders, the useEffect function will run again. If the dependencies array is empty, the useEffect will only run once after the initial render.
                   <u> Mounting Phase</u>:
<b>Initialisation</b>: useEffect with an empty dependency array runs once after the initial render. It simulates <b>componentDidMount</b> in class components.
<u>Effect Runs on Every Render</u>: Since there is no dependency array, the effect function provided to useEffect will execute after every render of the component. This can be useful for operations that need to occur on every update, but it may lead to performance issues if the effect involves expensive operations or if it causes additional renders.
If you do not pass a dependency array to the useEffect hook, it will execute the effect after every render of the component. This is because the effect does not have a specified dependency array, meaning it will run every time the component updates.
An empty dependency array ([]) the effect will only run once after the initial render and not on any subsequent renders.

<u>1. Skipping the argument</u>:
We may skip passing the second argument. If we choose to do so then our hook will trigger the callback function on each re-render of the component. Any unrelated state change will trigger the callback function to execute inducing bugs, and compromising performance.
<span style="color:red">
useEffect(() => {
    // Runs in each re-render of the component
})
</span>
<u>2. Empty Array ( [] )</u>
An empty array simply means that there are no dependencies that will trigger the callback within it. Our code inside the callback will run once when the component gets registered, and that is it. The useEffect hook acts like componentDidMount method if an empty array is passed as the dependency array.
<span style="color:red">
useEffect(() => {
    // Runs only when the component is registered
}, [])
</span>
<u>3. Array of dependencies ( [variable1, variable2] )</u>
This might be the most common form used with useEffect. We pass an array filled with all the dependencies that should trigger the callback function to run. Change in any of the variable in the list will execute the callback.

Often these include the states that have been created using useState hook.
<span style="color:red">
const [x, setX] = useState();
const [y, setY] = useState();
useEffect(() => {
    // Runs if x or y changes
}, [x, y])
</span>
                    <b>3)Cleanup Function</b>:
                    The function returned inside useEffect can be used for cleanup. It will be invoked when the component is about to unmount or when the dependencies specified in the array change.

                    <b>4)Common Use Cases</b>:
                    Fetching data from an API.
                    Subscribing to external data sources (e.g., websockets).
                    Manually changing the DOM or interacting with external libraries.

                    One thing to keep in mind is that useEffect only runs after React renders your component, so your effect callback will not prevent browser painting. This is different from how class components behave

                    Here is the basic syntax of the useEffect hook:
`,
                    code1: `useEffect(() => {
                    // Side effect code here

                    return () => {
                                // Cleanup code (optional)
                            };
                    }, [dependencies]);
                    //-------------

                    // The first argument is a function that contains the code for the side effect.
                    // The second argument is an array of dependencies. If any of the dependencies change between renders, the effect is re-run. If the array is empty, the effect runs only once (similar to componentDidMount in class components).

                    // Example: Fetching Data
                    import React, {useState, useEffect} from 'react';

                    const ExampleComponent = () => {
                    const [data, setData] = useState(null);

                    useEffect(() => {
                        const fetchData = async () => {
                        try {
                            const response = await fetch(\`https://api.example.com/data\`);
                                    const result = await response.json();
                                    setData(result);
                        } catch (error) {
                                        console.error('Error fetching data:', error);
                        }
                        };

                                    fetchData();
                    }, []); // Empty dependency array means run the effect once on mount

                                    return &lt;p&gt;Data: {data}&lt;/p&gt;;
                    };

                    // In this example, the useEffect hook is used to fetch data from an API. The effect runs once when the component mounts (due to the empty dependency array), and it updates the data state when the fetch is successful.

                    useEffect(() => {
                    const subscription = externalService.subscribe(data => {
                            // Handle incoming data
                        });

                    return () => {
                        // Cleanup: Unsubscribe when the component unmounts or when dependencies change
                        subscription.unsubscribe();
                    };
                    }, [dependencies]);`
                },
                {
                    text1: `<b>Cleanup</b>:-
                    If the effect involves any cleanup, such as unsubscribing from a subscription or clearing a timer, you can return a cleanup function. This cleanup function will be executed when the component is unmounted or when the dependencies change and the effect is re-run.

                    This is where the useEffect cleanup function comes in. The cleanup function is a function that is called when the component is unmounted (i.e., when it is no longer being rendered). It allows you to perform any necessary cleanup tasks, such as cancelling an ongoing API request.
To use the cleanup function, you can pass it as a return value from the useEffect hook. For example:
                    `,
                    code1: `useEffect(() => {
  // actions performed when component mounts
  return () => {
    // actions to be performed when component unmounts
  }
}, []);

//--------

useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(url);
    // do something with the response
  };
  fetchData();
  return () => {
    // cleanup function goes here
  };
}, [url]);

// In this example, the 'fetchData' function is called when the component is rendered. When the component is unmounted, the cleanup function is called, allowing you to cancel the ongoing fetch request if necessary.

//--------
import { useEffect, useState } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return <div>{count}</div>;
}

// In this example, the 'useEffect' hook sets up an interval that increments the 'count' state variable every second. The cleanup function returned by the 'useEffect' hook cancels this interval by calling 'clearInterval' when the component unmounts or re-renders. This ensures that the interval is not still running in the background after the component is no longer being used.

// Example :
function App() {
    const [timer, setTimer] = useState(100)
    const [isRunning, setIsRunning] = useState(false)
    const [resetTime, setResetTime] = useState(900)

    let time = new Date(timer * 1000).toISOString().substr(11, 8);

    function resetTimer() {
      setIsRunning(false)
      setTimer(resetTime)
    }

    function increment() {
      const newTime = timer + 1
      setIsRunning(false);
      setTimer(newTime);
    }

    function decrement() {
      const newTime = timer - 1
      setIsRunning(false);
      setTimer(newTime);
    }

    useEffect(() => {
      if (isRunning) {
        const interval = setInterval(() => {
          setTimer(prevTimer => prevTimer > 0 && prevTimer - 1)
        }, 1000);

        return () => clearInterval(interval)
      }
    }, [isRunning, timer])

    useEffect(() => {
      setResetTime(timer)
    }, [])

    return (
        &lt;div className=&quot;App&quot;&gt;
        &lt;h1&gt;{time}&lt;/h1&gt;
        &lt;button onClick={() =&gt; setIsRunning(false)} &gt;Pause&lt;/button&gt;
        &lt;button onClick={() =&gt; setIsRunning(true)}&gt;Start&lt;/button&gt;
        &lt;button onClick={() =&gt; resetTimer()}&gt;Reset&lt;/button&gt;
        &lt;button onClick={() =&gt; decrement()}&gt;-&lt;/button&gt;
        &lt;button onClick={() =&gt; increment()}&gt;+&lt;/button&gt;
      &lt;/div&gt;
    );
  }

  export default App;

//   Example: 2
  //Countdown
  import React, { useRef, useEffect, useState } from "react";

export default function Countdown() {
  const [num, setNum] = useState(100);
  const [pause, setPause] = useState(false);

  let intervalRef = useRef();

  const decreaseNum = () => setNum((prev) => prev - 1);

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleClick = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(decreaseNum, 1000);
    }
    setPause((prev) => !prev);
  };

  return (
    &lt;div&gt;
      &lt;div&gt;{num}&lt;/div&gt;
      &lt;button onClick={handleClick}&gt;{pause ? &quot;Run&quot; : &quot;Pause&quot;}&lt;/button&gt;
    &lt;/div&gt;
  );
}
`
                },
                {
                    text1: `<b>Canceling a fetch request</b>
                    By using a <b>useEffect cleanup</b> function, you can cancel the ongoing API request when the component is unmounted, like so:

                    <b>AbortError</b> error Handling:

                    The <u>AbortError: signal is aborted without reason</u> typically occurs in JavaScript when using the Fetch API or other asynchronous operations that support aborting via an AbortController. This error indicates that an operation (like a fetch request) was aborted, but the reason for the abort was not specified or is not explicitly clear.

<b>Understanding the Error</b>
    <b>AbortController</b>: The <u>AbortController</u> API allows you to abort ongoing fetch requests or other asynchronous operations. You create an <u>AbortController</u> instance, pass its <u>signal</u> to the fetch request, and then call <u>abort()</u> on the controller when you want to cancel the request.
    <b>AbortError</b>: When an operation is aborted, the JavaScript runtime throws an <u>AbortError</u>. This is a standard error used to indicate that the operation was canceled.

<b>Common Causes</b>
    <b>Manual Abort Without Reason</b>: If you manually call <u>abort()</u> on an <u>AbortController</u> instance without providing a reason or message, you might see this error. While <u>AbortError</u> itself doesn't require a reason, it's helpful for debugging to understand why the abort occurred.
    <b>Fetch Requests Aborted</b>: If a fetch request is aborted (e.g., due to a component unmounting), the error may occur. This is especially common in React applications when using <u>useEffect</u> to manage data fetching and cleanup.

    <b>Key Points</b>
    <b>Handling AbortError</b>: When catching errors, check if the error is an <u>AbortError</u> to handle it specifically and distinguish it from other types of errors.
    <b>Clean-Up</b>: Always ensure you abort ongoing requests in the cleanup function of <u>useEffect</u> or similar lifecycle methods to avoid memory leaks and unwanted operations.
    <b>Debugging</b>: If you encounter this error frequently, ensure that abort operations are done intentionally and investigate why the abort might be happening unexpectedly.
                    `,
                    code1: `// child component
                    import React, { useState, useEffect } from 'react';

function UserProfile({userId}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`, { signal })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('Fetch request was aborted');
        } else {
          setError(err);
        }
      });

    // Cleanup function to abort the fetch request if the component unmounts
    return () => {
      controller.abort();
    };
  }, [userId]); // Empty dependency array means this runs once after the initial render

  if (error) {
    return &lt;div&gt;Error: {error.message}&lt;/div&gt;;
  }

  return &lt;div&gt;Data: {data ? JSON.stringify(data) : &#39;Loading...&#39;}&lt;/div&gt;;
}
export default UserProfile;


// parent component
import { useState, useEffect } from 'react';
import './App.css';
import CircleComponent from './components/circle game/CircleComponent';
function App() {

  const [user, setUsername] = useState('ram')
  const [userId, setUserId] = useState(1)

  useEffect(() => {
    let mounted = true;
    setTimeout(() => {
      if (mounted) {
        setUsername('hello world');
      }
    }, 4000);

    return () => mounted = false;
  }, []);

  return (
    &lt;div className=&quot;App&quot;&gt;
      &lt;input type=&#39;text&#39; value={userId} name=&#39;userId&#39; onChange={e =&gt; {setUserId(e.target.value)}}/&gt;
      &lt;CircleComponent userId = {userId}/&gt;
      { user }
    &lt;/div&gt;
  );
}

export default App;

// In this version of the "UserProfile" component, the "useEffect" cleanup function cancels the ongoing API request by calling the "abort" method on the "AbortController" instance. This ensures that the request is stopped when the component is unmounted, helping to prevent unnecessary network traffic and data inconsistencies.
`
                },
                {
                    text1: ``,
                    code1: ``
                },
                {
                    text1: `When you begin writing code in React to fetch data from an API, you may encounter an issue where your application enters into an infinite rendering loop. This occurs because updating the state triggers a re-render, leading to the execution of the same code again.

                    The below code will lead to an infinite rendering of our application. So what I am trying to achieve here is, I tried to fetching data from an API and once I will the get the data I am updating the state and once a state is updated in the a component a re-render will happen. When the component will re-render same code will execute again which will lead my application to infinite re-render. Now let's discuss how to handle these kind of scenarios in React.
                    `,
                    code1: `import React, { useState, useEffect } from "react";

function App() {
  const [studentList, setStudentList] = useState([]);
  const api = "https://hp-api.onrender.com/api/characters/house/gryffindor";
  //Fetching data from the API
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      setStudentList(data);
    })
    .catch((error) => {
      console.log("Error while fetcing data: ", error);
    });
  return (
    &lt;&gt;
      &lt;h1&gt;List of students in Howarts&lt;/h1&gt;
      {studentList.map((student) =&gt; (
        &lt;&gt;
          &lt;h4&gt;{student.name}&lt;/h4&gt;
        &lt;/&gt;
      ))}
    &lt;/&gt;
  );
}`
                },
            ],
        },
        {
            id: 24,
            title: "useRef",
            note: [
                {
                    text1: `-> The useRef Hook allows you to persist values between renders.
                    -> It can be used to store a mutable value that does not cause a re-render when updated.
                    -> It can be used to access a DOM element directly.

                    <b>useRef()</b> only returns one item. It returns an Object called <b>current</b>.
                    When we initialize useRef we set the initial value: <b>useRef(0)</b>.
                    It's like doing this: <b>const count = {current: 0}</b>. We can access the count by using <u>count.current</u>.

                    The useRef hook is one of the built-in hooks in React. You can use it to persist or preserve values between re-renders. The useRef hook takes an initial value of any type as argument and returns an object with a single current property.

                    useRef is one of the standard hooks provided by React. It will return an object that you can use during the whole lifecycle of the component.
                    The main use case for the useRef hook is to access a DOM child directly. I'll show exactly how to do that in another section.

                    Although accessing the DOM is the main use case, it doesn't mean it's the only one! useRef can also be very useful to hold a mutable value across different renders of your component.

                    The useRef Hook is a function that returns a mutable ref object whose <b>.current</b> property is initialized with the passed argument (<b>initialValue</b>). The returned object will persist for the full lifetime of the component.

                    There are two main uses of useRef that are explained in the following sections:
                    - > Accessing the DOM nodes or React elements
                    - > keeping a mutable variable.
                    <b>useRef() hook creates references.</b>
                    Calling <b>const reference = useRef(initialValue)</b> with the initial value returns a special object named reference. The reference object has a property current: you can use this property to read the reference value reference.current, or update reference.current = newValue.

                    - > Between the component re-renderings, the value of the reference is persistent.
                    - > Updating a reference, contrary to updating state, doesn't trigger component re-rendering.
                    - > References can also access DOM elements. Assign the reference to ref attribute of the element you'd like to access: <b> &lt;div ref={reference}&gt;Element&lt;/div&gt;</b> - and the element is available at reference.current.

                    <b>useRef</b> is like you said different from normal state variables managed with <b>useState</b> in React. While <b>useState</b> is designed to store state that causes re-renders when updated, <b>useRef</b> is designed to store mutable values that persist across renders without causing a re-render.


                    React will set the <b>initialValue</b> you pass to the <b>useRef</b> hook as the value of the <b>current</b> property of the returned <b>ref</b> object. As an example, if the <b>initialValue</b> is the boolean value <b>true</b>, then the <b>ref</b> object returned by the <b>useRef</b> hook will be <b>{ current: true }</b>. If you don't pass an initial value, the <b>current</b> property will be <b>undefined</b>.

The returned <b>ref</b> object is mutable. You can update and reference its value directly as in the example below. However, unlike react state, mutating the <b>ref</b> object doesn't re-render the Component.
                    `,
                    code1: `import React, { useRef, useEffect, useState } from "react";
const MyComponent = () => {
    const ref = useRef(true);

    const eventHandler = () => {
        ref.current = !ref.current;
        console.log(ref.current)
    };

    console.log(ref.current); // true

    return (
        &lt;&gt;
            &lt;button onClick={eventHandler}&gt;change ref&lt;/button&gt;
        &lt;/&gt;
    );
};

export default MyComponent`
                },
                {
                    text1: `<b>What is createRef function?</b>
The <b>createRef</b> function is one of the built-in functions in React. You can use it to create refs in class Components. Unlike <b>useRef</b>, the <b>createRef</b> function doesn't take an argument. It returns a ref object with the current property initially set to <b>null</b>.

The ref object is a plain JavaScript object. Therefore, you can change its value from <b>null</b> to any data type. Similar to the <b>useRef</b> hook, changing its value doesn't re-render a React component.

Unlike the <b>useRef</b> hook, the <b>createRef</b> function always returns a new object. It's worth emphasizing that the <b>createRef</b> function is considered a legacy API. You can use it in legacy codebase that uses class components. For new code, use functional components and the <b>useRef</b> hook.
`,
                    code1: `import { createRef } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.ref.current = true;
  }

  eventHandler = () => {
    this.ref.current = !this.ref.current;
  };

  render() {
    console.log(this.ref.current);
    return &lt;&gt;&lt;/&gt;;
  }
}`
                },
                {
                    text1: `<b>Using refs to Access DOM Elements in React</b>
One of the use cases of refs in React is to access DOM elements. React is declarative by design. However, sometimes you may need to access a DOM element imperatively.

You can use refs to access a rendered DOM element in your React Component instead of using methods such as <b>document.getElementById</b> or <b>document.querySelector</b>.

To access a DOM element, you can use the <b>ref</b> attribute of the element's corresponding JSX as in the example below. The value of theref attribute should be the <b>ref</b> object returned by the <b>useRef</b> hook in React functional components.`,
                    code1: `import { useRef } from "react";

const MyComponent = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return &lt;input ref={inputRef} type=&quot;text&quot; /&gt;;
};

// In the example above, we accessed the "input" element inside the "useEffect" hook and invoked the "focus" method. You can also access the DOM element from an event handler.

//------------

// Because it's a hook, you can't use "useRef" in class components. As explained above, you use the "createRef" function to create refs in class components. In the code below, I've refactored the previous example to use ES6 class.

import { createRef } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return &lt;input ref={this.inputRef} type=&quot;text&quot; /&gt;;
  }
}
`
                },
                {
                    text1: `<b>Differences between the useRef hook and the createRef function</b>
As discussed in the previous sections, you can create refs using either the <b>useRef</b> hook or the createRef function. However, there are differences between the two.

The <b>useRef</b> hook is for creating refs in React functional components. On the other hand, the <b>createRef</b> function is for creating refs in ES6 classes. The <b>createRef</b> function is considered a legacy API. Only use it if you're maintaining legacy codebase that uses class components.

The <b>useRef</b> hook takes an initial value as an argument and returns a ref object. React will set the ref object's <b>current</b> property to the initial value. If you don't pass an initial value, the value of the <b>current</b> property will initially be <b>undefined</b>. On the other hand, the <b>createRef</b> function doesn't take an argument. The ref object's <b>current</b> property will initially be set to <b>null</b>.

The </b>useRef</b> hook will always return the same ref object when a functional component re-renders. On the other hand, the </b>createRef</b> function returns a different object on every render.

<b>Best practices when working with refs</b>
As hinted above, the useRef hook comes in handy for persisting values of any type between re-renders. Be sure to follow the best practices below while using it.

=> Avoid over-reliance on refs. You should use refs as an escape hatch to access DOM elements, browser APIs, and work with systems external to your React application. If you find yourself over-relying on refs, probably there is something you're doing wrong.
=> Do not access or mutate refs during render. Accessing a ref during render leads to unpredictable results.

In addition to the best practices highlighted above, the <b>useRef</b> hook is like any other React hook. You must follow all the rules of hooks while using it.

These rules include invoking <b>useRef</b> at the top level in React functional components. You shouldn't use hooks inside conditional statements, loops, and event handlers. However, you can mutate the ref object inside conditional statements, loops, and event handlers.
`,
                    code1: `// useClickAway.js
                    import React, { useEffect } from "react";

export default function useClickAway(eventRef, targetElement, callback) {
    useEffect(() => {
        function handleClickAway(event) {
            if (targetElement.current && targetElement.current.contains(event.target)) {
                callback(event.target.src);
            }
        }
        eventRef.current.addEventListener("mousedown", handleClickAway);
        return () => {
            (eventRef.current)?.removeEventListener("mousedown", handleClickAway);
        };
    }, [targetElement, eventRef]);
}

// App.js
import React, { useRef } from "react";
import useClickAway from './useClickAway'


export default function Storefront() {
    const targetElement = useRef(null);
    const eventRef = useRef(null);

    const alertClickAway = (elementVal) => {
        alert("you click on image", elementVal);
        // console.log(elementVal);
    };

    useClickAway(eventRef, targetElement, alertClickAway);

    return (
        &lt;div className=&quot;gallery&quot; ref={eventRef}&gt;
            &lt;div className=&quot;col&quot;&gt;
                &lt;img src=&quot;https://i.postimg.cc/G207QNV7/image.png&quot; alt=&quot;Product 1&quot; width=&quot;80&quot; height=&quot;80&quot; ref={targetElement} /&gt;
                &lt;p&gt;iWatch Series 6&lt;/p&gt;
                &lt;div className=&quot;btns&quot;&gt;
                    &lt;button&gt;
                        &lt;img
                            src=&quot;https://api.iconify.design/flat-color-icons:like.svg?color=%23888888&quot;
                            alt=&quot;like&quot;
                        /&gt;
                    &lt;/button&gt;
                    &lt;button&gt;
                        &lt;img
                            src=&quot;https://api.iconify.design/icon-park:buy.svg?color=%23888888&quot;
                            alt=&quot;add&quot;
                        /&gt;
                    &lt;/button&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    );
}
export default App;
`
                },
                {
                    text1: `<b>When to use React useRef hook?</b>
1) <u>Accessing DOM Elements</u>: useRef is often used to directly access a DOM element in your JSX. This is useful for things like focusing on an input field upon a component mounting.

2) <u>Storing Mutable Data</u>: It allows you to store data that persists across renders but doesn't cause a re-render when updated, unlike useState.

3) <u>Referencing Interval or Timeout IDs</u>: Useful for keeping track of <u>setInterval</u> or <u>setTimeout</u> IDs, so you can clear them (like with <u>clearInterval or clearTimeout</u>) when needed.

4) <u>Tracking Previous State or Props</u>: It helps in keeping track of a component's previous state or props to compare with current values.

5) <u>Implementing Custom Hooks</u>: useRef can be used within custom hooks to retain stateful values or references across renders without triggering re-renders.

<b>Use-cases of refs in React</b>
The following are some ref use-cases in React:
=> <u>Interacting with input elements</u>: You can use refs to access input elements and implement functionalities like focus and auto-completion.
=> <u>Interacting with third-party UI libraries</u>: You can use refs to interact with third-party UI libraries that might be difficult to access using standard DOM methods. For instance, if you use a third-party library to generate sliders, you can use ref to reference the sliders' DOM element without accessing the library's source code.
=> <u>Media playback</u>: You may also access media assets like images, audio, and videos using refs. For instance, auto-playing videos and lazy loading images when an element enters the viewport.
=> <u>Complex animation triggering</u>: Traditionally, CSS keyframes or timeouts are used to determine when to initiate animations. You can also use refs to observe DOM elements and determine when to start an animation.

<b>You shouldn't use refs in the following cases</b>:
=> <u>Declarative cases</u>: As highlighted above, React is declarative by design. Do not use refs if you can write declarative code.
=> <u>Elements affecting state</u>: Mutating a ref doesn't re-render a component. Therefore, don't use refs when state changes need to trigger a re-render.
=> <u>Accessing functional components</u>: You can reference DOM elements and class components using refs because they have instances. On the other hand, functional components do not have instances. Therefore, the code below will not work.`,
                    code1: `
                    // Storing Mutable Data:(doesn't cause a re-render)
                    import React, { useRef } from 'react';

function MyComponent() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log(\`Current count: \${countRef.current}\`);
  };

  return (
    &lt;div&gt;
      &lt;button onClick={handleClick}&gt;Increment Count&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default MyComponent;

//--------------------------
// Referencing Interval or Timeout IDs (like with clearInterval or clearTimeout)

import React, { useRef, useEffect, useState } from 'react';

function TimerComponent() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Start the interval
    intervalRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the interval
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
    &lt;/div&gt;
  );
}
export default TimerComponent;


//--------------------------
// Tracking Previous State or Props
// State tracking
import React, { useState, useRef, useEffect } from 'react';

function PreviousStateExample() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  // Update the ref value with the current state on every render
  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  // Access the previous state value
  const prevCount = prevCountRef.current;

  return (
    &lt;div&gt;
      &lt;p&gt;Current count: {count}&lt;/p&gt;
      &lt;p&gt;Previous count: {prevCount !== undefined ? prevCount : &#39;N/A&#39;}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  );
}
export default PreviousStateExample;

//-----------------
// Prop tracking
// Parent
import React, { useState } from 'react';
import PropTracker from './ChildRef';

function ParentComponent() {
  const [value, setValue] = useState(0);

  return (
    &lt;div&gt;
      &lt;PropTracker value={value} /&gt;
      &lt;button onClick={() =&gt; setValue(value + 1)}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  );
}
export default ParentComponent;


// Child
import React, { useEffect, useRef } from 'react';
function PropTracker({ value }) {
  // Create a ref to store the previous value of the prop
  const prevValueRef = useRef();
  // Update the ref with the current value on every render
  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);
  // Access the previous prop value
  const prevValue = prevValueRef.current;
  return (
    &lt;div&gt;
      &lt;p&gt;Current value: {value}&lt;/p&gt;
      &lt;p&gt;Previous value: {prevValue !== undefined ? prevValue : &#39;N/A&#39;}&lt;/p&gt;
    &lt;/div&gt;
  );
}
export default PropTracker;


//-------
// Parent:-
import React, { useState } from 'react';
import usePrevious from './ChildRef'; // Import the custom hook
function ExampleComponent() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count); // Use the custom hook

  return (
    &lt;div&gt;
      &lt;p&gt;Current count: {count}&lt;/p&gt;
      &lt;p&gt;Previous count: {prevCount !== undefined ? prevCount : &#39;N/A&#39;}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  );
}
export default ExampleComponent;

// custom hook
import { useRef, useEffect } from 'react';
// Custom hook to track the previous value
function usePrevious(value) {
  // Create a ref to store the previous value
  const ref = useRef();
  // Update the ref with the current value after each render
  useEffect(() => {
    ref.current = value;
  }, [value]);
  // Return the previous value from the ref
  return ref.current;
}
export default usePrevious;

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
            ],
        },
        {
            id: 52,
            title: "forwardRef",
            note: [
                {
                    text1: `<b>forwardRef</b> is a utility function that passes down a <b>ref</b> through a component to one of its children. This is particularly useful when you need to access a DOM element or component instance directly in a parent component but the desired child element is wrapped by a higher-order component or a component that doesn't expose the <b>ref</b> by default.

<b>forwardRef</b> takes a functional component as its argument and returns a new component with a forwarded <b>ref</b> attribute. This allows you to directly access the underlying child DOM node or instance from a parent component using the <b>ref</b>.

<b>React.forwardRef</b> is a higher-order component in React that allows you to forward a ref to a child component. This is particularly useful when you need to access the DOM nodes or component instances of a child component from a parent component.

<b>When to Use React.forwardRef</b>:
    <b>Accessing DOM Elements</b>: When you want to give a parent component access to a child component's DOM node.
    <b>Component Libraries</b>: When building reusable component libraries where the parent might need to interact directly with a component's DOM.
    <b>Higher-Order Components</b>: When wrapping components in higher-order components and you need to forward refs through them.

<b>Basic Usage of React.forwardRef</b>
Here's a step-by-step guide on how to use <b>React.forwardRef</b>:
    <b>1) Create a Component Using forwardRef</b>: Define a component that accepts ref as a second argument in addition to its props. This ref will be forwarded to the underlying DOM element or component.
`,
                    code1: `//Child
                    import React, { forwardRef } from 'react';
// Create a button component that forwards its ref
const FancyButton = forwardRef((props, ref) => {
  return (
    &lt;input ref={ref} className=&quot;fancy-button&quot; defaultValue={props.children}/&gt;
  );
});
export default FancyButton;

//------------
// Parent
import React, { useRef } from 'react';
import FancyButton from './ChildRef';

function ParentComponent() {
  const buttonRef = useRef();
  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.focus(); // Focus the button when clicking the "Focus" button
    }
  };
  return (
    &lt;div&gt;
      &lt;FancyButton ref={buttonRef}&gt;Click me!&lt;/FancyButton&gt;
      &lt;button onClick={handleClick}&gt;Focus the fancy button&lt;/button&gt;
    &lt;/div&gt;
  );
}
export default ParentComponent;


                    `
                },
                {
                    text1: `<b>Key Points to Remember</b>:

    <b>Function Signature: React.forwardRef</b> takes a render function that receives <b>props</b> and <b>ref</b>. The ref should be passed down to a DOM element or another component that you want to expose.
    <b>Handling Refs</b>: If the ref is forwarded to another component, that component must be able to handle refs, typically by using React.
    forwardRef itself.
    <b>Ref Forwarding and Functional Components</b>: React.forwardRef is most commonly used with functional components, but you can also use it with 
    class components if necessary.
    <b>Default Props and Context</b>: React.forwardRef does not affect how you set default props or use context. It only changes how refs are forwarded.

<b>Practical Use Cases</b>:
    <u>Integrating with Third-Party Libraries</u>: Forward refs to integrate with third-party libraries that require direct DOM manipulation.
    <u>Custom Input Components</u>: Build custom input components that need to expose their internal DOM elements (e.g., focus, selection).`,
                    code1: `const Component = forwardRef((props, ref) => {
      // Use ref on a DOM element or pass it to another component
    });`
                },
                {
                    text1: ``,
                    code1: ``
                },
                {
                    text1: ``,
                    code1: ``
                },
            ],
        },
        {
            id: 52,
            title: "useContext",
            note: [
                {
                    text1: `<b>1. Introduction to React and useContext</b>:

                    <b>2. What is Context in React?</b>
                    Instead of passing the props down through each component, React Context allows you to broadcast data to the components below.
                Accesses the value of a React context within a functional component.

                The <b>useContext</b> hook is used to consume values from a React context. Context provides a way to pass data through the component tree without having to pass props manually at every level. 

                 <b>context</b> refers to a mechanism that allows data to be shared across multiple components without explicitly passing it through props. 

                 <b>3. Why useContext is Important</b>
<u>Sharing Data Across Components</u>
One of the main benefits of using context is the ability to share data across multiple components. This is especially useful when dealing with data that needs to be accessed by several components at different levels of the component tree.

<u>Avoiding Prop Drilling</u>
Prop drilling is the process of passing data from one component to another through props. This can become cumbersome and difficult to manage when data needs to be passed through multiple levels of components. Context eliminates the need for prop drilling by providing a centralized way to share data.

<b>4. Creating a Context in React</b>
To create a context in React, we use the <b>React.createContext</b> method. This method returns a context object that can be used to provide and consume values within the component tree.

<b>5. Using the useContext Hook</b>
<u>Accessing Context Values</u>
The <u>useContext</u> hook allows us to access the value of a context within a functional component. By passing the context object to the useContext hook, we can retrieve the current value of the context.
<u>Updating Context Values</u>
To update the value of a context, we use the context provider. The provider allows us to define the value that should be made available to all components that consume the context. 

<b>=> Parameters </b>
<b>SomeContext</b>: The context that you've previously created with <b>createContext</b>. The context itself does not hold the information, it only represents the kind of information you can provide or read from components.
<b>=> Returns </b>
<b>useContext</b> returns the context value for the calling component. It is determined as the value passed to the closest <b>SomeContext.Provider</b> above the calling component in the tree. If there is no such provider, then the returned value will be the <b>defaultValue</b> you have passed to <b>createContext</b> for that context. The returned value is always up-to-date. React automatically re-renders components that read some context if it changes.

<b>=> Caveats </b>
<b>useContext()</b> call in a component is not affected by providers returned from the same component. The corresponding <b> <Context.Provider>  </b>needs to be above the component doing the <b>useContext()</b> call.
React automatically re-renders all the children that use a particular context starting from the provider that receives a different <b>value</b>. The previous and the next values are compared with the <b>Object.is</b> comparison. Skipping re-renders with <b>memo</b> does not prevent the children receiving fresh context values.
If your build system produces duplicates modules in the output (which can happen with symlinks), this can break context. Passing something via context only works if <b>SomeContext</b> that you use to provide context and <b>SomeContext</b> that you use to read it are exactly the same object, as determined by a <b>===</b> comparison.
`,
                    code1: `import { useContext } from 'react';
function Button() {
  const theme = useContext(ThemeContext);
  // ...`
                },
                {
                    text1: `<b>Practical Example: Theme Switcher</b>
                    <b>Adding a Theme Provider</b>
Then we'll add a ThemeProvider component that will provide the context value to the child components.

<b>Implementing a Theme Switcher Child Component</b>
Next, we'll create a theme switcher component that allows users to toggle between light and dark themes with a button press. This component will consume the ThemeContext through useContext.

<b>Wrapping with the ThemeProvider</b>
In all React applications we have a functional component named <b>App</b> that serves as the root component of the React application. The <b>App</b> component is responsible for rendering the <b>ThemeSwitcher</b> component, which is a child component that allows users to switch between different themes (e.g., light and dark themes).

The <b>ThemeProvider</b> component is a context provider that is used to make the theme-related data and functionality available to all of its child components. The <b>ThemeProvider</b> component is created using the React context API and is responsible for managing the theme state and providing a function to toggle the theme.

The <b>ThemeSwitcher</b> component is wrapped inside the <b>ThemeProvider</b> component, which means that the <b>ThemeSwitcher</b> component (and any other child components inside the <b>ThemeProvider</b>) will have access to the theme context. This access is achieved using the <b>useContext hook</b>.
`,
                    code1: `//ThemeProvider.js
                    import React, { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme : () => {},
})

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark')
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        &lt;ThemeContext.Provider value={{theme, toggleTheme}}&gt;{children}&lt;/ThemeContext.Provider&gt;
    )
}


// ThemeSwitcher.js
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import './Theme.css'
const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        &lt;div &gt;
            &lt;p className=&#39;themeTitleText&#39;&gt;Current theme: {theme}&lt;/p&gt;
            &lt;button onClick={toggleTheme} className={theme + &#39;ButtonTheme&#39;} &gt;Toggle Theme&lt;/button&gt;
        &lt;/div&gt;
    )
}
export default ThemeSwitcher


// App.js
import Mainroute from './Mainroute'

import { ThemeProvider } from './components/UseContext/theme-switch/ThemeProvider';
function App() {
    return (
      &lt;div&gt;
        &lt;ThemeProvider&gt; 
          &lt;Mainroute/&gt;
        &lt;/ThemeProvider&gt;
      &lt;/div&gt;
    );
  }
export default App;


//Mainroute.js
function App() {
    const {theme} = useContext(ThemeContext)
    return (
        &lt;div className={theme + &#39;Theme&#39;}&gt;
            ...
        &lt;/div&gt;
    );
}

// Theme.css
.lightTheme {
    background-color: #fff;
    color: #000;
}
.darkTheme {
    background-color: #000;
    color: #fff;
}
.darkButtonTheme {
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    border: 1px solid #fff;  
    display: flex;
    flex-direction: row;
    justify-content: center;

}
.darkButtonTheme:hover {
    background-color: #ddd; /* Change the background color on hover */
    color: #000;
    cursor: pointer; /* Change the cursor to a pointer on hover */
}
.lightButtonTheme {
    background-color: #fff;
    color: #000;
    border-radius: 5px;
    border: 1px solid #000;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
}
.lightButtonTheme:hover {
    background-color: #ddd; /* Change the background color on hover */
    cursor: pointer; /* Change the cursor to a pointer on hover */
}
.themeTitleText {
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 20px;
}

// TypeScript
// https://dev.to/nas5w/toggling-light-dark-theme-in-react-with-usecontext-39hn
`
                },
                {
                    text1: ``,
                    code1: `//Updating a value via context(ThemeContext )
                    // Example : 1
                    import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export default function MyApp() {
  const [theme, setTheme] = useState('light');
  return (
    &lt;ThemeContext.Provider value={theme}&gt;
      &lt;Form /&gt;
      &lt;label&gt;
        &lt;input
          type=&quot;checkbox&quot;
          checked={theme === &#39;dark&#39;}
          onChange={(e) =&gt; {
            setTheme(e.target.checked ? &#39;dark&#39; : &#39;light&#39;)
          }}
        /&gt;
        Use dark mode
      &lt;/label&gt;
    &lt;/ThemeContext.Provider&gt;
  )
}

function Form({ children }) {
  return (
    &lt;Panel title=&quot;Welcome&quot;&gt;
      &lt;Button&gt;Sign up&lt;/Button&gt;
      &lt;Button&gt;Log in&lt;/Button&gt;
    &lt;/Panel&gt;
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    &lt;section className={className}&gt;
      &lt;h1&gt;{title}&lt;/h1&gt;
      {children}
    &lt;/section&gt;
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    &lt;button className={className}&gt;
      {children}
    &lt;/button&gt;
  );
}

//////////////
// Updating an object via context (login)
/////////////

import { createContext, useContext, useState } from 'react';

const CurrentUserContext = createContext(null);

export default function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    &lt;CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser
      }}
    &gt;
      &lt;Form /&gt;
    &lt;/CurrentUserContext.Provider&gt;
  );
}


function Form({ children }) {
    return (
        &lt;Panel title=&quot;Welcome&quot;&gt;
        &lt;LoginButton /&gt;
      &lt;/Panel&gt;
    );
  }

  function LoginButton() {
    const {
      currentUser,
      setCurrentUser
    } = useContext(CurrentUserContext);

    if (currentUser !== null) {
      return <p>You logged in as {currentUser.name}.</p>;
    }

    return (
        &lt;Button onClick={() =&gt; {
            setCurrentUser({ name: &#39;Advika&#39; })
          }}&gt;Log in as Advika&lt;/Button&gt;
    );
  }

  function Panel({ title, children }) {
    return (
        &lt;section className=&quot;panel&quot;&gt;
        &lt;h1&gt;{title}&lt;/h1&gt;
        {children}
      &lt;/section&gt;
    )
  }

  function Button({ children, onClick }) {
    return (
        &lt;button className=&quot;button&quot; onClick={onClick}&gt;
        {children}
      &lt;/button&gt;
    );
  }


/////////////////
// Multiple contexts
// In this example, there are two independent contexts. "ThemeContext" provides the current theme, which is a string, while "CurrentUserContext" holds the object representing the current user.
////////////////
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

export default function MultipleContexts() {
  const [theme, setTheme] = useState('light');
  const [currentUser, setCurrentUser] = useState(null);
  return (
    &lt;ThemeContext.Provider value={theme}&gt;
      &lt;CurrentUserContext.Provider
        value={{
          currentUser,
          setCurrentUser
        }}
      &gt;
        &lt;WelcomePanel /&gt;
        &lt;label&gt;
          &lt;input
            type=&quot;checkbox&quot;
            checked={theme === &#39;dark&#39;}
            onChange={(e) =&gt; {
              setTheme(e.target.checked ? &#39;dark&#39; : &#39;light&#39;)
            }}
          /&gt;
          Use dark mode
        &lt;/label&gt;
      &lt;/CurrentUserContext.Provider&gt;
    &lt;/ThemeContext.Provider&gt;
  )
}

function WelcomePanel({ children }) {
  const {currentUser} = useContext(CurrentUserContext);
  return (
    &lt;Panel title=&quot;Welcome&quot;&gt;
      {currentUser !== null ?
        &lt;Greeting /&gt; :
        &lt;LoginForm /&gt;
      }
    &lt;/Panel&gt;
  );
}

function Greeting() {
  const {currentUser} = useContext(CurrentUserContext);
  return (
    &lt;p&gt;You logged in as {currentUser.name}.&lt;/p&gt;
  )
}

function LoginForm() {
  const {setCurrentUser} = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const canLogin = firstName.trim() !== '' && lastName.trim() !== '';
  return (
    &lt;&gt;
      &lt;label&gt;
        First name{&#39;: &#39;}
        &lt;input
          required
          value={firstName}
          onChange={e =&gt; setFirstName(e.target.value)}
        /&gt;
      &lt;/label&gt;
      &lt;label&gt;
        Last name{&#39;: &#39;}
        &lt;input
        required
          value={lastName}
          onChange={e =&gt; setLastName(e.target.value)}
        /&gt;
      &lt;/label&gt;
      &lt;Button
        disabled={!canLogin}
        onClick={() =&gt; {
          setCurrentUser({
            name: firstName + &#39; &#39; + lastName
          });
        }}
      &gt;
        Log in
      &lt;/Button&gt;
      {!canLogin &amp;&amp; &lt;i&gt;Fill in both fields.&lt;/i&gt;}
    &lt;/&gt;
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
//   const className = 'panel-' + theme;
  const className = theme + 'Theme';
  return (
    &lt;section className={className}&gt;
      &lt;h1&gt;{title}&lt;/h1&gt;
      {children}
    &lt;/section&gt;
  )
}

function Button({ children, disabled, onClick }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    &lt;button
      className={className}
      disabled={disabled}
      onClick={onClick}
    &gt;
      {children}
    &lt;/button&gt;
  );
}

///////////////////
// Extracting providers to a component 
//////////////////
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

export default function MyApp() {
  const [theme, setTheme] = useState('light');
  return (
    &lt;MyProviders theme={theme} setTheme={setTheme}&gt;
      &lt;WelcomePanel /&gt;
      &lt;label&gt;
        &lt;input
          type=&quot;checkbox&quot;
          checked={theme === &#39;dark&#39;}
          onChange={(e) =&gt; {
            setTheme(e.target.checked ? &#39;dark&#39; : &#39;light&#39;)
          }}
        /&gt;
        Use dark mode
      &lt;/label&gt;
    &lt;/MyProviders&gt;
  );
}

function MyProviders({ children, theme, setTheme }) {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    &lt;ThemeContext.Provider value={theme}&gt;
      &lt;CurrentUserContext.Provider
        value={{
          currentUser,
          setCurrentUser
        }}
      &gt;
        {children}
      &lt;/CurrentUserContext.Provider&gt;
    &lt;/ThemeContext.Provider&gt;
  );
}

function WelcomePanel({ children }) {
  const {currentUser} = useContext(CurrentUserContext);
  return (
    &lt;Panel title=&quot;Welcome&quot;&gt;
      {currentUser !== null ?
        &lt;Greeting /&gt; :
        &lt;LoginForm /&gt;
      }
    &lt;/Panel&gt;
  );
}

function Greeting() {
  const {currentUser} = useContext(CurrentUserContext);
  return (
    &lt;p&gt;You logged in as {currentUser.name}.&lt;/p&gt;
  )
}

function LoginForm() {
  const {setCurrentUser} = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const canLogin = firstName !== '' && lastName !== '';
  return (
    &lt;&gt;
      &lt;label&gt;
        First name{&#39;: &#39;}
        &lt;input
          required
          value={firstName}
          onChange={e =&gt; setFirstName(e.target.value)}
        /&gt;
      &lt;/label&gt;
      &lt;label&gt;
        Last name{&#39;: &#39;}
        &lt;input
        required
          value={lastName}
          onChange={e =&gt; setLastName(e.target.value)}
        /&gt;
      &lt;/label&gt;
      &lt;Button
        disabled={!canLogin}
        onClick={() =&gt; {
          setCurrentUser({
            name: firstName + &#39; &#39; + lastName
          });
        }}
      &gt;
        Log in
      &lt;/Button&gt;
      {!canLogin &amp;&amp; &lt;i&gt;Fill in both fields.&lt;/i&gt;}
    &lt;/&gt;
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = theme + 'Theme';
  return (
    &lt;section className={className}&gt;
      &lt;h1&gt;{title}&lt;/h1&gt;
      {children}
    &lt;/section&gt;
  )
}

function Button({ children, disabled, onClick }) {
  const theme = useContext(ThemeContext);
  const className =  theme + 'Button' + 'Theme';
  return (
    &lt;button
      className={className}
      disabled={disabled}
      onClick={onClick}
    &gt;
      {children}
    &lt;/button&gt;
  );
}

//////////////////
// Scaling up with context and a reducer
//////////////////
// TaskApp.js
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import { TasksProvider } from './TasksContext.js';

export default function TaskApp() {
  return (
    &lt;TasksProvider&gt;
      &lt;h1&gt;Day off in Kyoto&lt;/h1&gt;
      &lt;AddTask /&gt;
      &lt;TaskList /&gt;
    &lt;/TasksProvider&gt;
  );
}

//TasksContext.js
import { createContext, useContext, useReducer } from 'react';
const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  return (
    &lt;TasksContext.Provider value={tasks}&gt;
      &lt;TasksDispatchContext.Provider value={dispatch}&gt;
        {children}
      &lt;/TasksDispatchContext.Provider&gt;
    &lt;/TasksContext.Provider&gt;
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialTasks = [
  { id: 0, text: 'Philosophers Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }];


// AddTask.js
import { useState, useContext } from 'react';
import { useTasksDispatch } from './TasksContext.js';
export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  return (
    &lt;&gt;
      &lt;input
        placeholder=&quot;Add task&quot;
        value={text}
        onChange={e =&gt; setText(e.target.value)}
      /&gt;
      &lt;button onClick={() =&gt; {
        setText(&#39;&#39;);
        dispatch({
          type: &#39;added&#39;,
          id: nextId++,
          text: text,
        }); 
      }}&gt;Add&lt;/button&gt;
    &lt;/&gt;
  );
}

let nextId = 3;


//TaskList.js
import { useState, useContext } from 'react';
import { useTasks, useTasksDispatch } from './TasksContext.js';

export default function TaskList() {
  const tasks = useTasks();
  return (
    &lt;ul&gt;
      {tasks.map(task =&gt; (
        &lt;li key={task.id}&gt;
          &lt;Task task={task} /&gt;
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
        &lt;&gt;
        &lt;input
          value={task.text}
          onChange={e =&gt; {
            dispatch({
              type: &#39;changed&#39;,
              task: {
                ...task,
                text: e.target.value
              }
            });
          }} /&gt;
        &lt;button onClick={() =&gt; setIsEditing(false)}&gt;
          Save
        &lt;/button&gt;
      &lt;/&gt;
    );
  } else {
    taskContent = (
        &lt;&gt;
        {task.text}
        &lt;button onClick={() =&gt; setIsEditing(true)}&gt;
          Edit
        &lt;/button&gt;
      &lt;/&gt;
    );
  }
  return (
    &lt;label&gt;
      &lt;input
        type=&quot;checkbox&quot;
        checked={task.done}
        onChange={e =&gt; {
          dispatch({
            type: &#39;changed&#39;,
            task: {
              ...task,
              done: e.target.checked
            }
          });
        }}
      /&gt;
      {taskContent}
      &lt;button onClick={() =&gt; {
        dispatch({
          type: &#39;deleted&#39;,
          id: task.id
        });
      }}&gt;
        Delete
      &lt;/button&gt;
    &lt;/label&gt;
  );
}

`
                },
                {
                    text1: ``,
                    code1: ``
                },
            ],
        },
        {
            id: 52,
            title: "useReducer",
            note: [
                {
                    text1: `<b>useReducer</b> is a React Hook that lets you add a reducer to your component.

                    Components with many state updates spread across many event handlers can get overwhelming. For these cases, you can consolidate all the state update logic outside your component in a single function, called a reducer.
    <span style="color:red">const [state, dispatch] = useReducer(reducer, initialArg, init?)</span>

Although reducers can <b>reduce</b> the amount of code inside your component, they are actually named after the <a href="javascript-notes.html#reduce() - reduce elements of an array to a value." target="_blank">reduce()</a> operation that you can perform on arrays.

The <b>reduce()</b> operation lets you take an array and <b>accumulate</b> a single value out of many:
<span style="color:red">
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce(
  (result, number) => result + number
); // 1 + 2 + 3 + 4 + 5 = 15
</span>
The function you pass to reduce is known as a <b>reducer</b>. It takes the result so far and the current item, then it returns the <u>next result</u>. React reducers are an example of the same idea: they take the state so far and the action, and return the next state. In this way, they accumulate actions over time into state.

You could even use the <b>reduce()</b> method with an <b>initialState</b> and an array of <b>actions</b> to calculate the final state by passing your reducer function to it:

<span style="color:red"> useReducer(reducer, initialArg, init?) </span>
Call useReducer at the top level of your component to manage its state with a reducer.

<b>What is a Reducer?</b>
A reducer is a pure function that takes the current state and an action as arguments and returns a new state. The reducer function is responsible for updating the state based on the action received. It's a core concept in the Redux library and also used with useReducer in React.

    <b>How Reducers Work</b>
    <b>Current State</b>: The current state of the application or a component.
    <b>Action</b>: An object that describes what happened and often contains additional data (payload).
    <b>New State</b>: The state after the action has been processed by the reducer.

<b>Parameters </b>
<u>reducer</u>: The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.
<u>initialArg</u>: The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next init argument.
<u>optional init</u>: The initializer function that should return the initial state. If it's not specified, the initial state is set to initialArg. Otherwise, the initial state is set to the result of calling init(initialArg).

<b>Returns </b>
useReducer returns an array with exactly two values:
1) The current state. During the first render, it's set to init(initialArg) or initialArg (if there's no init).
2) The dispatch function that lets you update the state to a different value and trigger a re-render.

<b>Caveats </b>
=> <b>useReducer</b> is a Hook, so you can only call it <b>at the top level of your component</b> or your own Hooks. You can't call it inside loops or conditions. If you need that, extract a new component and move the state into it.
=> In Strict Mode, React will <b>call your reducer and initializer twice</b> in order to <a href="https://react.dev/reference/react/useReducer#my-reducer-or-initializer-function-runs-twice" target="_blank"> help you find accidental impurities</a>. This is development-only behavior and does not affect production. If your reducer and initializer are pure (as they should be), this should not affect your logic. The result from one of the calls is ignored.

                    `,
                    code1: `import React, { useReducer } from 'react';

// Initial state
const initialState = { count: 0 };

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      throw new Error('Unknown action type');
  }
}

function Counter() {
  // Use useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {state.count}&lt;/p&gt;
      &lt;button onClick={() =&gt; dispatch({ type: &#39;INCREMENT&#39; })}&gt;Increment&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch({ type: &#39;DECREMENT&#39; })}&gt;Decrement&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default Counter;
`
                },
                {
                    text1: `<b>dispatch function </b>
The <b>dispatch</b> function returned by <b>useReducer</b> lets you update the state to a different value and trigger a re-render. You need to pass the action as the only argument to the <b>dispatch</b> function:
<span style="color:red"> const [state, dispatch] = useReducer(reducer, { age: 42 });
function handleClick() {
  dispatch({ type: 'incremented_age' });
  // ... </span>
React will set the next state to the result of calling the <b>reducer</b> function you've provided with the current <b>state</b> and the action you've passed to <b>dispatch</b>.

<b>Parameters </b>
<b>action</b>: The action performed by the user. It can be a value of any type. By convention, an action is usually an object with a <b>type</b> property identifying it and, optionally, other properties with additional information.

<b>Returns </b>
<b>dispatch</b> functions do not have a return value.

<b>Caveats </b>
The <u>dispatch</u> function <b>only updates the state variable for the next render</b>. If you read the state variable after calling the <u>dispatch</u> function, <a href="https://react.dev/reference/react/useReducer#ive-dispatched-an-action-but-logging-gives-me-the-old-state-value" target="_blank">you will still get the old value</a> that was on the screen before your call.

If the new value you provide is identical to the current <u>state</u>, as determined by an <u>Object.is</u> comparison, React will <b>skip re-rendering the component and its children</b>. This is an optimization. React may still need to call your component before ignoring the result, but it shouldn't affect your code.

React <a href="https://react.dev/learn/queueing-a-series-of-state-updates" target="_blank">batches state updates</a>. It updates the screen <b>after all the event handlers have run</b> and have called their <b>set</b> functions. This prevents multiple re-renders during a single event. In the rare case that you need to force React to update the screen earlier, for example to access the DOM, you can use <a href="https://react.dev/reference/react-dom/flushSync" target="_blank">flushSync</a>.


Then you need to fill in the code that will calculate and return the next state. By convention, it is common to write it as a <b>switch statement</b>. For each <b>case</b> in the <b>switch</b>, calculate and return some next state.

Actions can have any shape. By convention, it's common to pass objects with a <b>type</b> property identifying the action. It should include the minimal necessary information that the reducer needs to compute the next state.

Read <a href="https://react.dev/learn/updating-objects-in-state" target="_blank"> updating objects in state </a> and <a href="https://react.dev/learn/updating-arrays-in-state" target="_blank">updating arrays in state</a> to learn more.
`,
                    code1: `//function reducer(state, action) {
//   switch (action.type) {
//     case 'incremented_age': {
      return {
        name: state.name,
        age: state.age + 1
      };
    // }
    // case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age
      };
//     }
//   }
//   throw Error('Unknown action: ' + action.type);
//}

//-----------

// function Form() {
//   const [state, dispatch] = useReducer(reducer, { name: 'Taylor', age: 42 });

//   function handleButtonClick() {
    dispatch({ type: 'incremented_age' });
//   }

//   function handleInputChange(e) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value
    });
//   }
  // ...


//------------
//   State is read-only. Don't modify any objects or arrays in state:

// function reducer(state, action) {
//   switch (action.type) {
//     case 'incremented_age': {
      🚩 Dont mutate an object in state like this:
      state.age = state.age + 1;
    //   return state;
    // }
// Instead, always return new objects from your reducer:

// function reducer(state, action) {
//   switch (action.type) {
//     case 'incremented_age': {
      ✅ Instead, return a new object
      return {
        ...state,
        age: state.age + 1
      };
//     }

`
                },
                {
                    text1: ``,
                    code1: ` // Form (object) 
// In this example, the reducer manages a state object with two fields: "name" and "age".

import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      return {
        name: state.name,
        age: state.age + 1
      };
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

const initialState = { name: 'Taylor', age: 42 };

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: 'incremented_age' });
  }

  function handleInputChange(e) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value
    }); 
  }

  return (
    &lt;&gt;
      &lt;input
        value={state.name}
        onChange={handleInputChange}
      /&gt;
      &lt;button onClick={handleButtonClick}&gt;
        Increment age
      &lt;/button&gt;
      &lt;p&gt;Hello, {state.name}. You are {state.age}.&lt;/p&gt;
    &lt;/&gt;
  );
}

//------------
// Todo list (array) 

import { useReducer, useState } from 'react';

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

function TaskApp({ tasks, handleAddTask, handleChangeTask, handleDeleteTask }) {
  const [text, setText] = useState('');
  return (
    &lt;&gt;
      &lt;input type=&#39;text&#39; onChange={e =&gt; setText(e.target.value)} /&gt;
      &lt;button onClick={() =&gt; {
        setText(&#39;&#39;);
        handleAddTask(text)
      }}&gt;Add&lt;/button&gt;
      &lt;ul&gt;
        {tasks.map(task =&gt; (
          &lt;li key={task.id}&gt;
            &lt;Task task={task} handleChangeTask={handleChangeTask} handleDeleteTask={handleDeleteTask} /&gt;
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/&gt;
  );
}

function Task({ task, handleAddTask, handleChangeTask, handleDeleteTask }) {

  const [isEditing, setIsEditing] = useState(false);
  // const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      &lt;&gt;
        &lt;input
          value={task.text}
          onChange={e =&gt; {
            handleChangeTask({
              ...task,
              text: e.target.value
            })
          }} /&gt;
        &lt;button onClick={() =&gt; setIsEditing(false)}&gt;
          Save
        &lt;/button&gt;
      &lt;/&gt;
    );
  } else {
    taskContent = (
      &lt;&gt;
        {task.text}
        &lt;button onClick={() =&gt; { setIsEditing(true); }}&gt;
          Edit
        &lt;/button&gt;
      &lt;/&gt;
    );
  }
  return (
    &lt;&gt;
    &lt;label&gt;
      &lt;input
        type=&quot;checkbox&quot;
        checked={task.done}
        onChange={e =&gt; {
          handleChangeTask({
            ...task,
            done: e.target.checked
          })
        }}
      /&gt;
      {taskContent}
      &lt;button onClick={() =&gt; {
        handleDeleteTask(task.id);
      }}&gt;
        Delete
      &lt;/button&gt;
    &lt;/label&gt;
  &lt;/&gt;
  );
}


export default function Home() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    &lt;&gt;
      &lt;h1&gt;Prague itinerary&lt;/h1&gt;
      &lt;TaskApp
        handleAddTask={handleAddTask}
        tasks={tasks}
        handleChangeTask={handleChangeTask}
        handleDeleteTask={handleDeleteTask}
      /&gt;
    &lt;/&gt;
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
];

`
                },
                {
                    text1: `Next refer <a href="https://react.dev/reference/react/useReducer#avoiding-recreating-the-initial-state" target="_block"> Avoiding recreating the initial state </a>`,
                    code1: ``
                },
                {
                    text1: ``,
                    code1: ``
                },
            ],
        },
        {
            id: 52,
            title: "useCallback",
            note: [
                {
                    text1: `<b>useCallback</b> is a React Hook that lets you cache a function definition between re-renders.
                    <b>useCallback</b> is a hook that will return a <b>memoized</b> version of the callback function that only changes if one of the dependencies has changed.
                    <b>Memoization</b> is a way to cache a result so that it doesn't need to be computed again. This can boost performance.
                    <span style="color:red"> useCallback(fn, dependencies) </span>
Call <b>useCallback</b> at the top level of your component to cache a function definition between re-renders:

<b>Parameters</b> 
<b>fn</b> : The function value that you want to cache. It can take any arguments and return any values. React will return (not call!) your function back to you during the initial render. On next renders, React will give you the same function again if the <b>dependencies</b> have not changed since the last render. Otherwise, it will give you the function that you have passed during the current render, and store it in case it can be reused later. React will not call your function. The function is returned to you so you can decide when and whether to call it.
<b>dependencies</b> : The list of all reactive values referenced inside of the <b>fn</b> code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like <b>[dep1, dep2, dep3]</b>. React will compare each dependency with its previous value using the Object.is comparison algorithm.

<b>Returns</b> 
On the initial render, <b>useCallback</b> returns the <b>fn</b> function you have passed.

During subsequent renders, it will either return an already stored fn  function from the last render (if the dependencies haven't changed), or return the fn function you have passed during this render.

<b>Caveats</b> 
=> <b>useCallback</b> is a Hook, so you can only call it <u>at the top level of your component</u> or your own Hooks. You can't call it inside loops or conditions. If you need that, extract a new component and move the state into it.
=> React <u>will not throw away the cached function unless there is a specific reason to do that</u>. For example, in development, React throws away the cache when you edit the file of your component. Both in development and in production, React will throw away the cache if your component suspends during the initial mount. In the future, React may add more features that take advantage of throwing away the cache—for example, if React adds built-in support for virtualized lists in the future, it would make sense to throw away the cache for items that scroll out of the virtualized table viewport. This should match your expectations if you rely on useCallback as a performance optimization. Otherwise, a <b>state variable</b> or a <b>ref</b> may be more appropriate.

<b>You need to pass two things to useCallback</b>:
1) A function definition that you want to cache between re-renders.
2) A <b>list of dependencies</b> including every value within your component that's used inside your function.
On the initial render, the <b>returned function</b> you'll get from <b>useCallback</b> will be the function you passed.

On the following renders, React will compare the <b>dependencies</b> with the dependencies you passed during the previous render. If none of the dependencies have changed (compared with <b>Object.is</b>), <b>useCallback</b> will return the same function as before. Otherwise, <b>useCallback</b> will return the function you passed on this render.
In other words, <b>useCallback</b> caches a function between re-renders until its dependencies change.


<b>What is useCallback?</b>
The useCallback hook is a performance optimization mechanism in React that helps prevent unnecessary re-renders of child components when their parent component re-renders. It achieves this by memoizing (caching) callback functions based on their dependencies. If the dependencies haven't changed, the same function reference is returned, avoiding the creation of a new function object on every render.

<b>When to Use useCallback</b>:
<b>Passing callbacks as props to child components</b>: When a parent component passes a callback function as a prop to a child component, and the child component relies on the same callback reference across renders (e.g., for event handlers), useCallback can prevent the child from re-rendering unnecessarily due to a change in the parent's state or props.
<b>Callbacks that are expensive to create</b>: If creating the callback function involves complex calculations or fetching data, using useCallback can improve performance by ensuring it's only created when its dependencies change.

<b>Let's walk through an example to see when this is useful.</b>
Say you're passing a <b>handleSubmit</b> function down from the <b>ProductPage</b> to the <b>ShippingForm</b> component:

You've noticed that toggling the <b>theme</b> prop freezes the app for a moment, but if you remove <b> <ShippingForm /> </b>from your JSX, it feels fast. This tells you that it's worth trying to optimize the <b> ShippingForm </b> component.

<b>By default, when a component re-renders, React re-renders all of its children recursively</b>. This is why, when <b>ProductPage</b> re-renders with a different <b>theme</b>, the <b>ShippingForm</b> component also re-renders. This is fine for components that don't require much calculation to re-render. But if you verified a re-render is slow, you can tell <b>ShippingForm</b> to skip re-rendering when its props are the same as on last render by wrapping it in  <a href="https://react.dev/reference/react/memo" target="_block"> memo </a>:

<b>With this change, "ShippingForm" will skip re-rendering if all of its props are the same as on the last render.</b> This is when caching a function becomes important! Let's say you defined <b>handleSubmit</b> without <b>useCallback</b>:
                    `,
                    code1: `function ProductPage({ productId, referrer, theme }) {
  // ...
  return (
    &lt;div className={theme}&gt;
      &lt;ShippingForm onSubmit={handleSubmit} /&gt;
    &lt;/div&gt;
  );

  //----------
  import { memo } from 'react';

const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  // ...
});

//---------

function ProductPage({ productId, referrer, theme }) {
  // Every time the theme changes, this will be a different function...
  function handleSubmit(orderDetails) {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }

  return (
    &lt;div className={theme}&gt;
    // {/* ... so ShippingForm's props will never be the same, and it will re-render every time */}
      &lt;ShippingForm onSubmit={handleSubmit} /&gt;
    &lt;/div&gt;
  );
}
  `
                },
                {
                    text1: `<b>In JavaScript, a function () {} or () => {} always creates a different function</b>, similar to how the {} object literal always creates a new object. Normally, this wouldn't be a problem, but it means that <b>ShippingForm</b> props will never be the same, and your memo optimization won't work. This is where <b>useCallback</b> comes in handy:

                    As <b>{}</b> notation creates a new Object, the function notation like <b> function () {} or () => {} </b> creates a new function

Normally this isn't an issue but creating new function on every re render defeats the purpose of caching

                    <b>By wrapping "handleSubmit" in "useCallback", you ensure that it's the same function between the re-renders</b> (until dependencies change). You don't have to wrap a function in <b>useCallback</b> unless you do it for some specific reason. In this example, the reason is that you pass it to a component wrapped in memo, and this lets it skip re-rendering. There are other reasons you might need <b>useCallback</b> which are described further on this page.
Note:-
<b>You should only rely on <u>useCallback</u> as a performance optimization</b>. If your code doesn't work without it, find the underlying problem and fix it first. Then you may add useCallback back.

<b>useCallback caches the function itself</b>. Unlike <b>useMemo</b>, it does not call the function you provide. Instead, it caches the function you provided so that <b>handleSubmit</b> itself doesn't change unless <b>productId</b> or <b>referrer</b> has changed. This lets you pass the <b>handleSubmit</b> function down without unnecessarily re-rendering <b>ShippingForm</b>. Your code won't run until the user submits the form.
                    `,
                    code1: `function ProductPage({ productId, referrer, theme }) {
  // Tell React to cache your function between re-renders...
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]); // ...so as long as these dependencies don't change...

  return (
    &lt;div className={theme}&gt;
      {/* ...ShippingForm will receive the same props and can skip re-rendering */}
      &lt;ShippingForm onSubmit={handleSubmit} /&gt;
    &lt;/div&gt;
  );
}`
                },
                {
                    text1: `<b>When Not to Use useCallback</b>:
<b>Simple callbacks without dependencies</b>: If a callback function is simple and doesn't have any dependencies that change frequently, using useCallback might not be necessary. The overhead of memoization could outweigh the potential performance benefit.
<b>Callbacks used within the same component</b>: If a callback is only used within the same component where it's created, there's no need for useCallback as React already handles component re-renders efficiently.`,
                    code1: ``
                },
                {
                    text1: `Let's implement a function called <b>sumFunctionFactory()</b>, which returns another function that sums numbers. Then let's use that function to create two functions <b>function1</b> and <b>function2</b>.

                    The functions <b>function1</b> and <b>function2</b> share the same code source, but they are distinct separate function objects, meaning they refer to different instances, thus Comparing them evaluates to false and that's just how JavaScript works.

                    <b>The useCallback() hook</b>
                    Going back to React, when a component re-renders, every function inside of the component is recreated and therefore these function's references change between renders.

<b>useCallback(callback, dependencies)</b> will return a memoized instance of the callback that only changes if one of the dependencies has changed. This means that instead of recreating the function object on every re-render, we can use the same function object between renders.
                    `,
                    code1: `// factory function
function sumFunctionFactory() {
  return (a, b) => a + b;
}

const function1 = sumFunctionFactory();
const function2 = sumFunctionFactory();

function1(2, 3);
// expected output: 5
function2(2, 3);
// expected output: 5

console.log(function1 === function2);
// expected output: false`
                },
                {
                    text1: `To prevent unnecessary expensive list re-renderings, you wrap it into <b>React.memo()</b>.
The parent component <b> &lt;ParentComponent&gt; </b> provides a handler function to the child component <b>&lt;MyList&gt;</b>:`,
                    code1: `// MyList.js
                    import React,{ useEffect } from 'react';

function MyList({ handler, changeDep }) {
    const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    useEffect(() => {
      console.log("Child Component redered");
    }, []);
    console.log("Child render----");
    return (
        &lt;&gt;
        {items.map((item, index) =&gt; {
          return (
            &lt;div key={index} onClick={handler}&gt;
              {item}
            &lt;/div&gt;
          );
        })}
      &lt;/&gt;
    );
  }

  export default React.memo(MyList);

  //---------
// ParentComponent.js

  import React, { useState, useCallback, useEffect } from 'react';
import MyList from './MyList';

export default function ParentComponent() {
    const [state, setState] = useState(false);
    const [dep, setDep] = useState(0);
    // console.log("Parent Component redered");

    const increment = () => {
        setDep(e => e + 1)
    }

    // const handler = (event) => {
    //     console.log("You clicked ", event.currentTarget);
    // }
    const handler = useCallback(
        (event) => {
            console.log("You clicked ", event.currentTarget);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [dep]);

    const statehanddler = () => {
        setState(!state);
    };

    return (
        &lt;&gt;
            &lt;button onClick={statehanddler}&gt;Change State Of Parent Component&lt;/button&gt;
            &lt;button onClick={increment}&gt;increment&lt;/button&gt;
            {dep}
            &lt;MyList handler={handler} /&gt;
        &lt;/&gt;
    );
} 


//------------


import React, { useState, useCallback } from 'react';

// Main Task Manager Component
const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  // Add a new task
  const addTask = useCallback(() => {
    if (taskInput.trim()) {
      setTasks(prevTasks => [...prevTasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  }, [taskInput]);

  // Toggle task completion
  const toggleTaskCompletion = useCallback((index) => {
    setTasks(prevTasks =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  // Filter tasks based on the selected filter
  const filteredTasks = useCallback(() => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'active':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  return (
    &lt;div&gt;
      &lt;h1&gt;Task Manager&lt;/h1&gt;
      &lt;input
        type=&quot;text&quot;
        value={taskInput}
        onChange={(e) =&gt; setTaskInput(e.target.value)}
        placeholder=&quot;Add a new task...&quot;
      /&gt;
      &lt;button onClick={addTask}&gt;Add Task&lt;/button&gt;

      &lt;div&gt;
        &lt;button onClick={() =&gt; setFilter(&#39;all&#39;)}&gt;All&lt;/button&gt;
        &lt;button onClick={() =&gt; setFilter(&#39;active&#39;)}&gt;Active&lt;/button&gt;
        &lt;button onClick={() =&gt; setFilter(&#39;completed&#39;)}&gt;Completed&lt;/button&gt;
      &lt;/div&gt;

      &lt;ul&gt;
        {filteredTasks().map((task, index) =&gt; (
          &lt;TaskItem
            key={index}
            task={task}
            onToggle={() =&gt; toggleTaskCompletion(index)}
          /&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
};

// Task Item Component
const TaskItem = React.memo(({ task, onToggle }) => {
  console.log(\`Rendering: \${task.text}\`);
  return (
    &lt;li onClick={onToggle} style={{ textDecoration: task.completed ? &#39;line-through&#39; : &#39;none&#39; }}&gt;
      {task.text}
    &lt;/li&gt;
  );
});

export default TaskManager;

`
                },
                {
                    text1: `<a href="https://deadsimplechat.com/blog/usecallback-guide-use-cases-and-examples/" target="_blank">usecallback-guide-use-cases-and-examples</a>`,
                    code1: ``
                },
            ],
        },
        {
            id: 52,
            title: "useMemo",
            note: [
                {
                    text1: `<b>useMemo</b> is one of the built-in hooks provided by React. It's used for memoization, which is an optimization technique to improve the performance of React components.

Memoization involves caching the results of complex logic so that they can be reused instead of being reimplemented on every render.
With useMemo, React can store the result of a function call and reuse it when the dependencies of that function haven't changed, rather than recalculating the value on every render.

<b>memoValue</b>: This is the variable that holds the memoized result of the function.
The first argument is a function that contains the code you want to memorize.
The second argument is an array of dependencies. If any of these dependencies change between renders, the memoized value will be changed.

But with <b>useMemo</b>, React remembers the result of that function as long as its inputs stay the same. So, if your inputs don't change, React just grabs the stored result instead of recalculating it every time. This saves time and makes your app snappier.
`,
                    code1: `const memoValue = useMemo(() => {
  // complex logic code will goes here
  return result;
}, [dependency]);


import React, { useState, useMemo } from 'react';

function ShoppingCart() {
  // State to store the items in the shopping cart
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 15 },
    { id: 3, name: 'Product C', price: 20 },
  ]);

  // Calculate the total price of items in the cart
  const totalPrice = useMemo(() => {
    console.log('Calculating total price...');
    return cartItems.reduce((sum, item) => sum + item.price, 0);
  }, [cartItems]);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    &lt;div&gt;
      &lt;h1&gt;Shopping Cart&lt;/h1&gt;
      &lt;ul&gt;
        {cartItems.map((item) =&gt; (
          &lt;li key={item.id}&gt;
            {item.name}: \${item.price}
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
      &lt;p&gt;Total Price: \${totalPrice}&lt;/p&gt;
      &lt;p&gt;Length of cart - {cartItems.length}&lt;/p&gt;
      &lt;button onClick={() =&gt; addItemToCart({ id: cartItems.length + 1, name: &#39;Product D&#39;, price: 25 })}&gt;
        Add Product D
      &lt;/button&gt;
    &lt;/div&gt;
  );
}

export default ShoppingCart;

//-------------

// Parent.js
import React, { useEffect, useState } from 'react';
import ChildMemo from './ChildMemo'

const ParentComponent = () => {

  const [pname, setPname] = useState('')
  const [product, setProduct] = useState([])

  const [val, setVal] = useState(0)

  const SubmitForm = (e) => {
    e.preventDefault()
    setProduct([...product, {id:product.length + 1, pname:pname}])
    setPname('')
  }

  const increment = () => {
    setVal(prev => prev + 1)
  }

  return (
    &lt;&gt;
      &lt;div&gt;
        &lt;form onSubmit={SubmitForm}&gt;
          &lt;input type=&#39;text&#39; name=&#39;pname&#39; value={pname} onChange={(e) =&gt; setPname(e.target.value)}/&gt;
          &lt;button&gt;Submit&lt;/button&gt;
        &lt;/form&gt;
        &lt;ChildMemo items = {product} val={val} increment={increment}/&gt;
      &lt;/div&gt;
    &lt;/&gt;
  );
};

export default ParentComponent;

//---------

// Child.js
import React, { useMemo } from 'react';

const ListComponent = ({ items, val, increment }) => {
    // Expensive computation

    const processItems = useMemo(() => {
        console.log("memo rendered inside method")
        return items.map(item => ({ id: item.id, pname: item.pname?.toUpperCase() }));
    },[items])

    // const processItems = (items) => {
    //     // Expensive computation
    //     // Imagine some heavy processing here
    //     console.log("memo rendered inside method")
    //     return items.map(item => ({ id: item.id, pname: item.pname?.toUpperCase() }));
    // };
    // const processedItems = processItems(items);

    return (
        &lt;&gt;
            &lt;ul&gt;
                {processItems.map(item =&gt; (
                    &lt;li key={item.id}&gt;{item.pname}&lt;/li&gt;
                ))}
            &lt;/ul&gt;
            &lt;p&gt;{val}&lt;/p&gt;
            &lt;button onClick={increment}&gt;increment&lt;/button&gt;
        &lt;/&gt;
    );
};

export default ListComponent;
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
                {
                    text1: ``,
                    code1: ``
                },
            ],
        },
        {
            id: 52,
            title: "useImperativeHandle",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ],
        },
        {
            id: 52,
            title: "useLayoutEffect",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ],
        },
        {
            id: 52,
            title: "useDebugValue",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ],
        },
        {
            id: 52,
            title: "React.memo()",
            note: [
                {
                    text1: `<b>How to Memoize a React Component</b>
                    In React, we implement memoization via <b>React.memo()</b>, which is a higher-order component. The React.memo serves as a wrapper for a component and returns a memoized output of that component, which prevents the component or sub-components from unnecessary re-rendering.

There are two ways by which we can use <b>React.memo</b> in our component. We can either use it to wrap the entire component or add it to the part where we export the component.

In the example below you will find the first way of using it:`,
                    code1: `const newComponent = React.memo((props) => {
    return (
      //render with props
    );
});

export default newComponent;`
                },
                {
                    text1: `In the syntax above, the <b>newComponent</b> component is wrapped with <b>React.memo()</b>, which creates a memoized version of the component. This memoized version of the component will only re-render if the props passed to it have changed.

And here is the second way you can use <b>React.memo</b>:`,
                    code1: `const newComponent = (props) => {
  //render with props
}

export default React.memo(newComponent);`
                },
                {
                    text1: `The syntax above denotes that we can memoize a component by simply passing it as an argument to React.memo and exporting the result.

<b>Note</b>: React.memo has nothing to do with React hooks. It is an in-built method in React used to aid the optimization of our React applications. If you prefer using a hook to memoize your component, you can use memo in place of React.memo.`,
                    code1: ``
                },
                {
                    text1: ``,
                    code1: ``
                },
            ],
        },
        {
            id: 26,
            title: "What are Custom Hooks?",
            note: [
                {
                    text1: `React custom hooks are reusable functions that a React JS developer can use to add special and unique functionality to the React applications.

                    React that allows you to extract and reuse stateful logic from functional components. By creating custom hooks, you can encapsulate complex logic into reusable functions and share that logic across different components. Custom Hooks follow a naming convention: their names start with <b>use</b> (e.g., useCustomHook).

                    A Custom Hook is a function in Javascript whose name begins with <b>use</b> and which calls other hooks. It is a part of React v16.8 hook update and permits you for reusing the stateful logic without any need for component hierarchy restructuring.

                    In almost all of the cases, custom hooks are considered to be sufficient for replacing render props and HoCs (Higher-Order components) and reducing the amount of nesting required. Custom Hooks will allow you for avoiding multiple layers of abstraction or wrapper hell that might come along with Render Props and HoCs.

                    The disadvantage of Custom Hooks is it cannot be used inside of the classes.

                    Here's a basic example of a custom hook:`,
                    code1: `                    // useCounter.js
                    import {useState} from 'react';

          const useCounter = (initialValue, step) => {
            const [count, setCount] = useState(initialValue);

            const increment = () => {
                        setCount(count + step);
            };

            const decrement = () => {
                        setCount(count - step);
            };

                    return {
                        count,
                        increment,
                        decrement,
            };
          };
                    export default useCounter;

                    // Now, you can use this custom hook in multiple components:
                    // ExampleComponent1.js
                    import React from 'react';
                    import useCounter from './useCounter';

          const ExampleComponent1 = () => {
            const counter1 = useCounter(0, 1);

                    return (
                    &lt;div&gt;
                        &lt;p&gt;Count: {counter1.count}&lt;/p&gt;
                        &lt;button onClick={counter1.increment}&gt;Increment&lt;/button&gt;
                        &lt;button onClick={counter1.decrement}&gt;Decrement&lt;/button&gt;
                    &lt;/div&gt;
                    );
          };

                    // ExampleComponent2.js
                    import React from 'react';
                    import useCounter from './useCounter';

          const ExampleComponent2 = () => {
            const counter2 = useCounter(10, 2);

                    return (
                        &lt;div&gt;
                        &lt;p&gt;Count: {counter2.count}&lt;/p&gt;
                        &lt;button onClick={counter2.increment}&gt;Increment&lt;/button&gt;
                        &lt;button onClick={counter2.decrement}&gt;Decrement&lt;/button&gt;
                    &lt;/div&gt;
                    );
          };`
                }
            ],
        },
        {
            id: 27,
            title: "Explain Strict Mode in React?",
            note: [
                {
                    text1: `StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.

                    StrictMode is a development mode feature in React that helps identify common problems in your application and supports you in fixing them. It performs additional checks and warnings to aid developers in writing better code and finding potential issues.`,
                    code1: ``
                }
            ],
        },
        {
            id: 27,
            title: "Lazy loading",
            note: [
                {
                    text1: `Lazy loading is a strategy that delays the loading of some assets (e.g., images) until they are needed by the user based on the user's activity and navigation pattern; typically, these assets are only loaded when they are scrolled into view.

                    lazy loading is an optimization technique or a design pattern in which the loading of an item, whether it's a picture, video, web page, music file, or document, is delayed until it is required, saving bandwidth and precious computing resources.`,
                    code1: ``
                }
            ],
        },
        {
            id: 28,
            title: "Which method would you use to handle events in React?",
            note: [
                {
                    text1: `In React, handling events is a crucial aspect of building interactive user interfaces. There are a few methods for handling events in React, and the appropriate method depends on the context and your specific requirements. Here are the commonly used approaches:

                    Inline Event Handling (JSX Syntax):`,
                    code1: `//You can handle events directly in the JSX using inline event handlers. This is similar to traditional HTML event handling.

                    &lt;button onClick={handleClick}&gt;Click me&lt;/button&gt;

      const handleClick = () => {
                        console.log('Button clicked!');
      };
                    // This approach is straightforward and suitable for simple cases. However, it can become less maintainable in more complex applications.

                    // <b>Class Methods:</b>
                    // You can define class methods to handle events, especially in class components.

                    class MyComponent extends React.Component {
                        handleClick() {
                        console.log('Button clicked!');
        }

                    render() {
          return &lt;button onClick={this.handleClick}&gt;Click me&lt;/button&gt;;
        }
      }
                    // Class methods are useful when you need access to the component instance (e.g., for updating state).
                    // Arrow Functions (Inline Callbacks):

                    // You can use arrow functions as inline callbacks. This is a concise way to define callback functions directly in the JSX.

                    &lt;button onClick={() =&gt; console.log(&#39;Button clicked!&#39;)}&gt;Click me&lt;/button&gt;
                    // While concise, be cautious with arrow functions in render methods, especially for performance reasons, as a new function is created on every render.
                    // Passing Parameters to Event Handlers:

                    // If you need to pass additional parameters to your event handler, you can use arrow functions or the bind method.

                    &lt;button onClick={() =&gt; handleClick(param)}&gt;Click me&lt;/button&gt;

                    &lt;button onClick={handleClick.bind(this, param)}&gt;Click me&lt;/button&gt;
                    // Ensure that you are mindful of potential performance implications when using arrow functions for this purpose.
                    // Using useCallback Hook (Functional Components):

                    // In functional components, you can use the useCallback hook to memoize event handler functions, preventing unnecessary re-creation.

                    const handleClick = useCallback(() => {
                        console.log('Button clicked!');
      }, []); // Empty dependency array means it won't change between renders
                    // This is useful for optimizing performance in scenarios where the event handler doesn't depend on changing variables.`
                }
            ],
        },
        {
            id: 29,
            title: "In which situation would you use refs in React?",
            note: [
                {
                    text1: `Refs in React are used to get references to a DOM element or to a React component instance created using React.createRef(). They provide a way to interact with the underlying DOM elements or with the methods and properties of a class component. Here are some common situations where you might use refs in React:

                    Accessing DOM Elements:

                    Refs are often used to interact with or manipulate the properties of DOM elements directly. This can include tasks like focusing on an input field, measuring the size of an element, or triggering imperative animations.`,
                    code1: `                    class MyComponent extends React.Component {
                        constructor(props) {
                        super(props);
                    this.myInput = React.createRef();
        }

                    componentDidMount() {
                        // Focus on the input element when the component mounts
                        this.myInput.current.focus();
        }

                    render() {
          return &lt;input ref={this.myInput} /&gt;;
        }
      }
                    // Managing Focus, Text Selection, and Media Playback:

                    // Refs are useful for managing user interactions, such as setting focus on an input field, selecting text, or controlling media playback.

                    class AutoFocusInput extends React.Component {
                        constructor(props) {
                        super(props);
                    this.inputRef = React.createRef();
        }

                    componentDidMount() {
                        this.inputRef.current.focus();
        }

                    render() {
          return &lt;input ref={this.inputRef} /&gt;;
        }
      }
                    // Interacting with Third-Party Libraries:

                    // When working with third-party libraries that operate on DOM elements, refs can be used to get references to those elements and interact with them within your React components.

                    class ThirdPartyIntegration extends React.Component {
                        constructor(props) {
                        super(props);
                    this.thirdPartyElement = React.createRef();
        }

                    componentDidMount() {
                        // Initialize a third-party library with the DOM element
                        thirdPartyLibrary.init(this.thirdPartyElement.current);
        }

                    render() {
          return &lt;div ref={this.thirdPartyElement}&gt;&lt;/div&gt;;
        }
      }
                    // Triggering Animations or Measurements:

                    // Refs can be used to trigger animations or perform measurements (e.g., getting the height or width of an element) when needed.

                    class MeasureElement extends React.Component {
                        constructor(props) {
                        super(props);
                    this.myElement = React.createRef();
        }

                    handleButtonClick() {
          // Measure the height of the element
          const height = this.myElement.current.clientHeight;
                    console.log(\`Element height: {height}px \`);
        }

                    render() {
          return (
            &lt;div&gt;
            &lt;div ref={this.myElement}&gt;Resizable Element&lt;/div&gt;
            &lt;button onClick={() =&gt; this.handleButtonClick()}&gt;Measure Height&lt;/button&gt;
        &lt;/div&gt;
                    );
        }
      }
                    // Accessing Class Component Methods:

                    // Refs can be used to access methods or properties of a class component directly, although this approach is less common due to the availability of other state management techniques.

                    class MyClassComponent extends React.Component {
                        myMethod() {
                        console.log('Method called');
        }

                    render() {
          return &lt;div&gt;Class Component&lt;/div&gt;;
        }
      }

                    class ParentComponent extends React.Component {
                        constructor(props) {
                        super(props);
                    this.myComponentRef = React.createRef();
        }

                    handleButtonClick() {
                        // Access a method of the class component using the ref
                        this.myComponentRef.current.myMethod();
        }

                    render() {
          return (
            &lt;div&gt;
            &lt;MyClassComponent ref={this.myComponentRef} /&gt;
            &lt;button onClick={() =&gt; this.handleButtonClick()}&gt;Call Method&lt;/button&gt;
        &lt;/div&gt;
                    );
        }
      }`
                }
            ],
        },
        {
            id: 30,
            title: "Why would you use super constructors with props arguments?",
            note: [
                {
                    text1: `In JavaScript, when you extend a class using the class keyword, the child class needs to call the super() method in its constructor to invoke the constructor of the parent class. This is essential for setting up the inheritance relationship and initializing the properties and methods defined in the parent class.

                    The super() method is particularly important when working with React components that extend React.Component. Here are a couple of reasons why you would use super(props) in a React component:

                    Accessing this.props in the Constructor:

                    When you want to access the props object inside the constructor of a class component, you need to pass props to super(props). This ensures that the this.props object is available within the constructor.

                    `,
                    code1: `class MyComponent extends React.Component {
                        constructor(props) {
                        super(props);
                    // Now, you can access this.props in the constructor
                    console.log(this.props.someProp);
                        }

                                    render() {
                        return &lt;div&gt;{this.props.someProp}&lt;/div&gt;;
                        }
                    }
                    `
                },
                {
                    text1: `Without passing props to super(props), this.props would be undefined inside the constructor, potentially leading to unexpected behavior or errors.
                    Passing props to the Parent Constructor:

                    If the parent class has its own constructor that takes props as an argument, it's important to pass props to super(props) in the child class constructor. This ensures that the parent class can initialize its properties based on the provided props.`,
                    code1: `class ParentComponent extends React.Component {
                        constructor(props) {
                        super(props);
                    this.state = {
                        parentState: props.initialValue,
                        };
                        }

                                render() {
                    return &lt;div&gt;{this.state.parentState}&lt;/div&gt;;
                    }
                }

                    class ChildComponent extends ParentComponent {
                        constructor(props) {
                        super(props); // Pass props to the parent constructor
                    // Child-specific initialization
                    this.state = {
                        childState: 'Child State',
                    };
                    }

                                render() {
                    return (
                        &lt;div&gt;
                        {this.state.parentState}
                        {this.state.childState}
                    &lt;/div&gt;
                                );
                    }
                }`
                },
                {
                    text1: `By passing props to super(props) in the child constructor, you ensure that the parent constructor correctly receives and processes the props necessary for its initialization.

                    In summary, using super(props) is crucial in React class components to ensure proper inheritance and to provide the props object to both the parent and child constructors. It allows you to access and initialize properties based on the incoming props within the context of the component's lifecycle.`,
                    code1: ``
                },
                {
                    text1: ``,
                    code1: ``
                },
            ],
        },
        {
            id: 31,
            title: "How would you use validation on props?",
            note: [
                {
                    text1: `In React, you can use PropTypes or TypeScript to perform prop validation and ensure that the components receive the expected types of props. Prop validation helps catch potential issues early in the development process and makes your code more maintainable. Below, I'll provide examples using both PropTypes and TypeScript:

                    Prop Validation with PropTypes:
                    Install PropTypes:
                    If you haven't already, you need to install the prop-types library:

                    <b>npm install prop-types</b>
                    Using PropTypes:

                    Define the PropTypes for your component by specifying the expected types for each prop.

`,
                    code1: `                    import React from 'react';
                    import PropTypes from 'prop-types';

                    const MyComponent = ({name, age, isActive}) => {
                        // Component logic

                        return &lt;div&gt;{/* Component JSX */}&lt;/div&gt;;
                    };

                    MyComponent.propTypes = {
                        name: PropTypes.string.isRequired,
                        age: PropTypes.number.isRequired,
                        isActive: PropTypes.bool.isRequired,
                    };

                    export default MyComponent;
                    `
                },
                {
                    text1: `In this above, PropTypes.string, PropTypes.number, and PropTypes.bool are used to specify the expected types of the name, age, and isActive props, respectively. The isRequired validator indicates that these props must be provided.
                    Prop Validation with TypeScript:
                    Using TypeScript:

                    If you are using TypeScript, you can define an interface for your props and specify the types.

                    `,
                    code1: `---------------
                    TSX
                    --------------
                    import React from 'react';

                    interface MyComponentProps {
                        name: string;
                    age: number;
                    isActive: boolean;
      }

                    const MyComponent: React.FC<MyComponentProps> = ({name, age, isActive}) => {
                        // Component logic

                        return &lt;div&gt;{/* Component JSX */}&lt;/div&gt;;
                    };

                    export default MyComponent;

                    // In this example, the MyComponentProps interface defines the expected types for name, age, and isActive. The React.FC type is used for functional components.
                    Default Props (Optional):

                    // You can also provide default values for props using defaultProps in PropTypes or by assigning default values directly in TypeScript.


                    // PropTypes with Default Props
                    MyComponent.defaultProps = {
                        isActive: false,
                        };


                        // TypeScript with Default Values
                        const MyComponent: React.FC<MyComponentProps> = ({name, age, isActive = false}) => {
                            // Component logic

                            return &lt;div&gt;{/* Component JSX */}&lt;/div&gt;;
                        };
                    `
                },
                {
                    text1: `Default values ensure that if a prop is not provided, the default value will be used.
                    By using either PropTypes or TypeScript, you can enhance your React components with type checking, making your code more robust and easier to maintain. Choose the approach that best fits your project's requirements and development workflow.`,
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
            ],
        },
        {
            id: 32,
            title: "Which method would you use to add attributes to components conditionally?",
            note: [
                {
                    text1: `In React, you can conditionally add attributes to components using JavaScript expressions within JSX. The key is to use curly braces { } to embed dynamic values or expressions within the JSX. Below are a few examples demonstrating how to conditionally add attributes:

                    `,
                    code1: `//1. Using Conditional (Ternary) Operator:
                            //----------------------------------

                    import React from 'react';

                    const MyComponent = ({isSpecial}) => {
                    return (
                    &lt;div className={isSpecial ? &#39;special&#39; : &#39;&#39;}&gt;
                        {/* Other JSX content */}
                    &lt;/div&gt;
                    );
                    };

                    export default MyComponent;

                    // In this example, the className attribute is conditionally set based on the value of the isSpecial prop. If isSpecial is true, the class 'special' is added; otherwise, an empty string is used.


                    // 2. Using Logical AND Operator:
                    //------------------------------

                    import React from 'react';

                    const MyComponent = ({isLoggedIn}) => {
                    return (
                        &lt;div&gt;
                            {isLoggedIn &amp;&amp; &lt;span&gt;Welcome, User!&lt;/span&gt;}
                            {/* Other JSX content */}
                        &lt;/div&gt;
                        );
                    };

                    export default MyComponent;

                    // In this example, the <span> element is conditionally rendered based on the value of the isLoggedIn prop. If isLoggedIn is true, the <span> element is rendered; otherwise, nothing is rendered.

                        // 3. Using Object Spread Operator:
                        //-------------------------------
                        import React from 'react';

                        const MyComponent = ({isDisabled}) => {
                        const buttonProps = {
                                                    type: 'button',
                        onClick: () => console.log('Button clicked'),
                        // Other common attributes
                        };

                        return (
                            &lt;button {...buttonProps} disabled={isDisabled}&gt;
                                Click me
                            &lt;/button&gt;
                        );
                        };

                        export default MyComponent;

                        // In this example, the disabled attribute is conditionally added to the &lt;button&gt; element based on the value of the isDisabled prop.

                            // 4. Using Classnames Library:
                            //----------------------------
                            // If you have multiple class names to conditionally apply, you might consider using a utility library like classnames:


                            import React from 'react';
                            import classNames from 'classnames';

                            const MyComponent = ({isActive, isHighlighted}) => {
                            const containerClasses = classNames('container', {
                                'active': isActive,
                            'highlighted': isHighlighted,
                            });

                            return (
                            &lt;div className={containerClasses}&gt;
                                {/* Other JSX content */}
                            &lt;/div&gt;
                            );
                            };

                            export default MyComponent;

                            // In this example, the classNames function from the classnames library is used to conditionally apply class names based on the values of the isActive and isHighlighted props.`
                }
            ],
        },
        {
            id: 33,
            title: "What methods would you use to check and improve slow app rendering in React?",
            note: [
                {
                    text1: `Improving the rendering performance of a React application involves identifying and addressing bottlenecks that slow down the rendering process. Here are some methods to check and improve slow app rendering in React:

                   <b> 1. Performance Profiling Tools</b>:
                    => 1.1. React DevTools Profiler:
                    Use the React DevTools Profiler to identify components that contribute most to the rendering time. It allows you to visualize component rendering durations and spot performance issues.

                    => 1.2. Chrome DevTools:
                    Use the "Performance" tab in Chrome DevTools to record and analyze the runtime performance of your application. This tool helps you identify slow JavaScript, layout thrashing, and other performance bottlenecks.

                    <b>2. Memoization</b>:
                    => 2.1. React.memo:
                    Use React.memo to memoize functional components and prevent unnecessary re-renders.
                    => 2.2. UseMemo and UseCallback:
                    Use useMemo and useCallback hooks to memoize values and functions to avoid recomputing them on every render.

                    <b>3. Optimizing Re-renders</b>:
                    => 3.1. Pure Components:
                    Use class components that extend React.PureComponent to prevent unnecessary re-renders when the props and state remain the same.
                    => 3.2. React.memo for Functional Components:
                    Memoize functional components using React.memo to avoid re-renders when props do not change.

                    <b>4. Code Splitting</b></b>:
                    => 4.1. React.lazy and Suspense:
                    Use React.lazy and Suspense to enable code splitting and load components lazily, reducing the initial bundle size.

                    <b>5. Avoiding Unnecessary Work</b>:
                    => 5.1. ShouldComponentUpdate (Class Components):
                    Implement shouldComponentUpdate lifecycle method in class components to selectively prevent rendering based on props and state.
                    => 5.2. React.memo and useMemo (Functional Components):
                    Leverage React.memo and useMemo to prevent unnecessary renders based on prop and state changes.

                    <b>6. Using Production Builds</b>:
                    => 6.1. Optimized Production Builds:
                    Ensure that your production builds are optimized. Use tools like react-scripts (Create React App) or webpack with appropriate configurations for production builds.
                    <span style="color:red">npm run build</span>

                    <b>7. Bundle Size Analysis</b>:
                    => 7.1. Bundle Size Tools:
                    Analyze your bundle size using tools like source-map-explorer or webpack-bundle-analyzer. Identify and optimize large dependencies and unnecessary code.
                    <span style="color:red">npx source-map-explorer build/static/js/main.*.js</span>

                    By employing these methods, you can identify and address performance bottlenecks, optimize your application, and ensure a smoother user experience. Remember to measure the impact of changes using performance profiling tools and adjust accordingly.`,
                    code1: `//1. Performance Profiling Tools:
                                        import React from 'react';
                    import {unstable_trace as trace} from 'scheduler/tracing';

                    function MyComponent() {
                        return trace('MyComponent render', performance.now(), () => (
                                    // Component JSX
                                    ));
                        }
                    // This enables the React Profiler for this component.


                    //==================
                    // 2. Memoization:
                    // => 2.1. React.memo:

                    import React from 'react';
                    const MemoizedComponent = React.memo(({prop1, prop2}) => {
                        // Component JSX
                    });
                    //-----------
                    // => 2.2. UseMemo and UseCallback:
                    import React, {useMemo, useCallback} from 'react';
                    const MyComponent = ({data}) => {
                    const memoizedData = useMemo(() => computeExpensiveValue(data), [data]);
                    const memoizedCallback = useCallback(() => handleCallback(data), [data]);
                    // Component JSX using memoizedData and memoizedCallback
                    };


                    //=================
                    // 3. Optimizing Re-renders:
                    // => 3.1. Pure Components:
                    import React, {PureComponent} from 'react';
                    class MyPureComponent extends PureComponent {
                            render() {
                            // Component JSX
                        }
                    }
                    //------------
                    // => 3.2. React.memo for Functional Components:

                    import React from 'react';
                    const MyMemoizedComponent = React.memo(({prop1, prop2}) => {
                        // Component JSX
                    });


                    //==================
                    // 4. Code Splitting:
                    const MyLazyComponent = React.lazy(() => import('./MyLazyComponent'));
                    function MyComponent() {
                        return (
                            &lt;React.Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
                                &lt;MyLazyComponent /&gt;
                            &lt;/React.Suspense&gt;
                            );
                        }


                    //=====================
                    // 5. Avoiding Unnecessary Work:
                    // shouldComponentUpdate:
                    class MyComponent extends React.Component {
                        shouldComponentUpdate(nextProps, nextState) {
                        // Check conditions and return true/false
                    }
                    }
                    //-----------
                    // React.memo
                    const MyComponent = React.memo(({prop1, prop2}) => {
                        // Component JSX
                    });


                    // 6. Using Production Builds:


                    // 7. Bundle Size Analysis:
                    `
                }
            ],
        },
        {
            id: 34,
            title: "In which situation would you use useMemo() in React?",
            note: [
                {
                    text1: `The <b>useMemo</b> hook in React is used to memoize the result of a computation and prevent unnecessary recalculations. It is particularly useful in situations where a computation is expensive or time-consuming, and you want to avoid repeating it on every render. Here are some common situations where you might use useMemo:

                    <b>1. Computations in Functional Components</b>:
                    When performing heavy computations or complex operations within a functional component, <b>useMemo</b> can be used to memoize the result:

                    In this example, processedData will be memoized, and the expensive processData function will only be recomputed when the data dependency changes.

                    <b>2. Preventing Unnecessary Renderings</b>:
                    If a component depends on props or state, and the rendering is computationally expensive, you can use <b>useMemo</b> to memoize the JSX markup:

                    In this example, <b>renderedContent</b> is memoized, and the JSX markup will only be recomputed when prop1 or prop2 changes.

                    <b>3. Optimizing Expensive Function Calls</b>:
                    If your component uses a function from a third-party library that is computationally expensive and doesn't depend on props or state changes, you can use useMemo to memoize the function:

                    This ensures that the expensive function is only called once during the component's lifecycle.

                    <b>4. Memoizing Callback Functions</b>:
                    When passing functions as props to child components, useMemo can be used to memoize the callback functions, preventing unnecessary re-renders of child components:

                    By memoizing the handleClick function, you ensure that the child component doesn't re-render unnecessarily when the parent re-renders.

                    Use <b>useMemo</b> when the performance benefits of memoization outweigh the cost of maintaining the memoized value. It's important to note that useMemo is not a silver bullet, and incorrect usage might lead to performance issues. Always measure and profile your application to ensure that memoization provides the expected performance improvements.`,
                    code1: `
                    // 1. Computations in Functional Components
                    //--------------------------------
                    import React, {useMemo} from 'react';

                    const MyComponent = ({data}) => {
                    const processedData = useMemo(() => {
                    // Expensive computation based on data
                    return processData(data);
                    }, [data]);
                        return &lt;div&gt;{processedData}&lt;/div&gt;;
                    };


                    // 2. Preventing Unnecessary Renderings
                    //--------------------------------
                    import React, {useMemo} from 'react';

                    const MyComponent = ({prop1, prop2}) => {
                    const renderedContent = useMemo(() => {
                    // Expensive rendering based on prop1 and prop2
                    return &lt;div&gt;{prop1 + prop2}&lt;/div&gt;;
                    }, [prop1, prop2]);

                        return &lt;div&gt;{renderedContent}&lt;/div&gt;;
                    };


                    // 3. Optimizing Expensive Function Calls
                    //--------------------------------
                    import React, {useMemo} from 'react';
                    import {expensiveFunction} from 'thirdPartyLibrary';

                    const MyComponent = () => {
                    const memoizedExpensiveFunction = useMemo(() => {
                    return expensiveFunction();
                    }, []); // Empty dependency array means it's only calculated once

                    // Use memoizedExpensiveFunction in the component
                    };


                    // 4. Memoizing Callback Functions
                    //--------------------------------
                    import React, {useMemo} from 'react';

                    const ParentComponent = () => {
                    const handleClick = useMemo(() => {
                    return () => {
                        // Handle click logic
                    };
                    }, []); // Empty dependency array means it's only calculated once
                        return &lt;ChildComponent onClick={handleClick} /&gt;;
                    };

                    const ChildComponent = ({onClick}) => {
                        // Use onClick in the component
                    };
                    `
                }
            ],
        },
        {
            id: 35,
            title: "How would you avoid binding in React?",
            note: [
                {
                    text1: `To avoid the need for binding we have something introduced in ES6 as arrow functions. Using the arrow function to call this.setState will lead to avoiding the use of bind. When we use the arrow function it works because of the following reasons:

                    ● It does not re-scope this, so we don't need to bind this in the class constructor.
                    ● JavaScript has first-class functions, which means functions are considered as data. Therefore, arrow functions can be assigned to class properties.

                    In React, binding can be avoided through various techniques, especially with the introduction of functional components and the use of arrow functions. Here are some methods to avoid binding in React:

                    <b>1. Arrow Functions in Class Components</b>:
                    Use arrow functions for class methods. Arrow functions automatically bind the lexical scope, eliminating the need for explicit binding in the constructor.

                    <b>2. Arrow Functions in Functional Components</b>:
                    For functional components, use arrow functions directly in the JSX or define them outside the component. This way, you don't need to bind the functions explicitly.

                    <b>3. Function Declarations Outside Render</b>:
                    Avoid defining functions within the render method to prevent them from being recreated on every render. This is particularly important for performance.

                    <b>4. Binding in the Constructor (Class Components)</b>:
                    If you still need to use class components and traditional function declarations, you can bind methods in the constructor. However, this approach is less concise compared to using arrow functions.

                    <b>5. Function Components with Hooks</b>:
                    In functional components using hooks, you don't need to worry about binding issues. Hooks preserve the lexical scope, making it easy to use functions without binding.

                    By adopting these practices, you can write more concise and readable code while avoiding common binding issues in React components. Arrow functions and functional components with hooks offer a more modern and cleaner approach to handling functions and their scope in React applications.`,
                    code1: `//1. Arrow Functions in Class Components
                            //---------------------------
                    class MyComponent extends React.Component {
                        handleClick = () => {
                            console.log('Button clicked!');
                        };

                    render() {
                        return &lt;button onClick={this.handleClick}&gt;Click me&lt;/button&gt;;
                        }
                    }


                    //2. Arrow Functions in Functional Components
                    //---------------------------
                                        import React from 'react';

                    const MyComponent = () => {
                    const handleClick = () => {
                        console.log('Button clicked!');
                    };

                    return &lt;button onClick={handleClick}&gt;Click me&lt;/button&gt;;
                    };


                    //3. Function Declarations Outside Render
                    //---------------------------
                        class MyComponent extends React.Component {
                        handleClick() {
                        console.log('Button clicked!');
                        }

                        render() {
                                return &lt;button onClick={this.handleClick}&gt;Click me&lt;/button&gt;;
                            }
                        }


                    //4. Binding in the Constructor (Class Components)
                    //---------------------------
                    class MyComponent extends React.Component {
                        constructor(props) {
                        super(props);
                    this.handleClick = this.handleClick.bind(this);
                    }
                        handleClick() {
                        console.log('Button clicked!');
                    }

                    render() {
                            return &lt;button onClick={this.handleClick}&gt;Click me&lt;/button&gt;;
                        }
                    }


                    //5. Function Components with Hooks
                    //---------------------------
                    import React, {useState} from 'react';

                    const MyComponent = () => {
                    const [count, setCount] = useState(0);

                    const handleClick = () => {
                        setCount(count + 1);
                    };

                        return (
                            &lt;div&gt;
                                &lt;p&gt;Count: {count}&lt;/p&gt;
                                &lt;button onClick={handleClick}&gt;Increment&lt;/button&gt;
                            &lt;/div&gt;
                        );
                    };
                    `
                }
            ],
        },
        {
            id: 36,
            title: "Explain what a mounted component is.",
            note: [
                {
                    text1: `React does so by <b>mounting</b>" (adding nodes to the DOM), <b>unmounting</b>" (removing them from the DOM), and <b>updating</b>" (making changes to nodes already in the DOM).

                    Mounting is the process of outputting the virtual representation of a component into the final UI representation (e.g. DOM or Native Components).

                    In React, a <b>mounted component</b>" refers to a component that has been rendered and attached to the DOM (Document Object Model). In the React component lifecycle, there are several phases a component goes through, and the term <b>mounted</b> specifically refers to the phase when the component has been successfully rendered to the DOM.

                    Here's a brief overview of the React component lifecycle and the <b>mounted</b> phase:

                    <b><span style="color:red">Mounting Phase</span></b>:
                    <b>constructor()</b>: The initial phase where the component is initialized, and state and props are set up.
                    <b>static getDerivedStateFromProps()</b>: A static method that is called before every render to update the state based on changes in props.
                    <b>render()</b>: The method that returns the JSX representation of the component.
                    <b>componentDidMount()</b>: Invoked after the component has been rendered to the DOM. This is the phase where side effects such as data fetching or subscriptions can be performed. The component is considered "mounted" at this point.

                    <b><span style="color:red">Updating Phase</span></b>:
                    <b>static getDerivedStateFromProps()</b>: Similar to the mounting phase, but occurs before each render during updates.
                    <b>shouldComponentUpdate()</b>: Determines if the component should re-render. If false is returned, the component won't re-render.
                    <b>render()</b>: Re-renders the component based on state or prop changes.
                    <b>getSnapshotBeforeUpdate()</b>: Captures information about the DOM before the update.
                    <b>componentDidUpdate()</b>: Invoked after the component has been updated in the DOM.

                    <b><span style="color:red">Unmounting Phase</span></b>:
                    <b>componentWillUnmount()</b>: Invoked just before the component is unmounted and removed from the DOM. Cleanup operations can be performed here.

                    <b><span style="color:red">Error Handling Phase</span></b>:
                    <b>static getDerivedStateFromError()</b>: Used to update state in response to a JavaScript error during rendering.
                    <b>componentDidCatch()</b>: Invoked after an error has been thrown in a descendant component.
                    The <b>mounted</b> phase is crucial for performing actions that should only occur once the component is visible in the DOM. For example, you might use componentDidMount to initiate data fetching, subscribe to events, set up timers, or perform other side effects.

                    In summary, a mounted component is a component that has completed its initial rendering and is now part of the DOM, allowing you to perform tasks specific to the component's presence in the user interface.`,
                    code1: `// In a functional component with hooks, the equivalent to componentDidMount is the useEffect hook with an empty dependency array:

                    import React, {useEffect} from 'react';
                    const MyComponent = () => {
                        useEffect(() => {
                            // Code to run after component is mounted
                            return () => {
                                // Cleanup code (equivalent to componentWillUnmount)
                            };
                        }, []); // Empty dependency array means it runs only once after mount

                    return &lt;div&gt;Component content&lt;/div&gt;;
                    };`
                }
            ],
        },
        {
            id: 37,
            title: "Explain what an event is in React.",
            note: [
                {
                    text1: `● Events in React JS allow developers to respond to user interaction within their applications quickly and efficiently.
                    ● Events are triggered whenever certain actions occur - from clicks to key presses - which then fire off callback functions so that appropriate responses can be made accordingly.

                    In React, an event is an occurrence triggered by the user or the system that can be detected and handled by React components. Events in React are similar to events in standard HTML but are handled in a more declarative way using JSX syntax.

                    Basic Concepts:
                    Event Handling in JSX:
                    In React, events are attached using JSX syntax, similar to HTML. For example, handling a button click is done like this:

                    &lt;button onClick={handleClick}&gt;Click me&lt;/button&gt;
                    Here, handleClick is a function that will be called when the button is clicked.

                    <b>SyntheticEvent</b>:
                    React uses SyntheticEvent, a cross-browser wrapper around the browser's native event, to provide a consistent API for handling events. This abstraction allows React to optimize and normalize event handling.

                    <b>Event Handling in Class Components</b>:
                    In class components, event handlers are usually defined as methods within the component class. The methods are then attached to the corresponding events in the JSX.

                    <b>Event Handling in Functional Components with Hooks</b>:
                    In functional components, the useState and useEffect hooks are often used to manage state and side effects related to events.

                    Common Events in React:-
                    <b>onClick</b>: Triggered when a clickable element, like a button or a link, is clicked.
                    <b>onChange</b>: Triggered when the value of an input element changes (e.g., in a text input or a dropdown).
                    <b>onSubmit</b>: Triggered when a form is submitted.
                    <b>onMouseOver/onMouseOut</b>: Triggered when the mouse pointer enters/exits an element.
                    <b>Handling Events with Parameters</b>:
                    To pass parameters to an event handler, you can use an arrow function in the JSX:

                    &lt;button onClick={() =&gt; handleClick(param)}&gt;Click me&lt;/button&gt;
                    Alternatively, you can use the bind method:

                    &lt;button onClick={handleClick.bind(this, param)}&gt;Click me&lt;/button&gt;

                    In summary, events in React are interactions triggered by users or the system that can be handled by React components. Event handling is an essential aspect of building interactive and dynamic user interfaces in React applications.`,
                    code1: `//Event Handling in Class Components
                    //--------------------------------
                    import React, {Component} from 'react';

                    class MyComponent extends Component {
                        handleClick = (event) => {
                            console.log('Button clicked!', event);
                        };

                    render() {
                        return &lt;button onClick={this.handleClick}&gt;Click me&lt;/button&gt;;
                        }
                    }

                    //Event Handling in Functional Components with Hooks
                    //--------------------------------
                    import React, {useState, useEffect} from 'react';

                    const MyComponent = () => {
                    const [count, setCount] = useState(0);

                    const handleClick = () => {
                        setCount(count + 1);
                    };

                    useEffect(() => {
                        console.log('Component updated with new count:', count);
                    }, [count]);

                        return (
                        &lt;div&gt;
                            &lt;p&gt;Count: {count}&lt;/p&gt;
                            &lt;button onClick={handleClick}&gt;Increment&lt;/button&gt;
                        &lt;/div&gt;
                        );
                    };
                    `
                }
            ],
        },
        {
            id: 38,
            title: "What is a class component?",
            note: [
                {
                    text1: `The class component uses ES6 class syntax, and it extends React components with a render method that returns React elements.

                    In React, a class component is a type of component that is defined using ES6 class syntax. Class components are also known as stateful components because they have the ability to manage and maintain local state. They were the primary way of creating components in React before the introduction of functional components and hooks.

                    Key features of class components include:-
                    <b>State Management</b>:
                    Class components can have local state, managed through the this.state property.
                    State is initialized in the constructor method and updated using the setState method.

                    <b>Lifecycle Methods</b>:
                    Class components have lifecycle methods (e.g., componentDidMount, componentDidUpdate, componentWillUnmount) that allow developers to perform actions at specific points in the component's lifecycle.

                    <b>Instance Methods</b>:
                    Class components often define methods that handle events or encapsulate other logic related to the component.

                    <b>Class Inheritance</b>:
                    Class components extend the React.Component class, inheriting its functionality and methods.`,
                    code1: `//Here's a basic example of a class component in React:

                    import React, {Component} from 'react';

                    class MyComponent extends Component {
                        constructor(props) {
                        super(props);
                    this.state = {
                        // Initial state goes here
                        count: 0,
                    };
                    }

                    handleClick = () => {
                        // Updating state using setState
                        this.setState({ count: this.state.count + 1 });
                    };

                    render() {
                        return (
                            &lt;div&gt;
                                &lt;p&gt;Count: {this.state.count}&lt;/p&gt;
                                &lt;button onClick={this.handleClick}&gt;Increment&lt;/button&gt;
                            &lt;/div&gt;
                            );
                        }
                        }

                    export default MyComponent;`
                }
            ],
        },
        {
            id: 39,
            title: "What is a component?",
            note: [
                {
                    text1: `In React, a component is a reusable, self-contained piece of code that represents a part of a user interface. Components are the building blocks of a React application, and they encapsulate the structure and behavior of a UI element. React applications are typically composed of multiple components that are organized into a hierarchical structure.

                    Components can be classified into two main types:

                    <b>Functional Components</b>:
                    Functional components are defined as JavaScript functions.
                    They are stateless by default, but with the introduction of React hooks in React 16.8, functional components can now use state and other React features previously limited to class components.
                    Functional components are concise, easier to read, and encouraged for simple, stateless UI components.

                    import React from 'react';
                    const MyComponent = () => {
                    return &lt;div&gt;Hello, I&#39;m a functional component!&lt;/div&gt;;
                    };
                    export default MyComponent;

                    <b>Class Components</b>:
                    Class components are defined using ES6 class syntax and extend the React.Component class.
                    They can have local state, lifecycle methods, and instance methods.
                    While functional components with hooks are now the preferred way to define components, class components are still supported in React.

                    import React, {Component} from 'react';
                    class MyComponent extends Component {
                        render() {
                            return &lt;div&gt;Hello, I&#39;m a class component!&lt;/div&gt;;
                        }
                    }
                    export default MyComponent;

                    Key Characteristics of Components:-
                    <b>Reusability</b>:
                    Components are designed to be reusable. You can create a component and use it in multiple parts of your application.
                    <b>Encapsulation</b>:
                    Components encapsulate their functionality and appearance. They can be thought of as self-contained units that can be easily composed to build complex UIs.
                    <b>Composition</b>:
                    React applications are typically built by composing components together to create a tree-like structure. A parent component can contain child components, and those child components can, in turn, contain more child components.
                    <b>State and Props</b>:
                    Components can have local state managed by the component itself. Additionally, they can receive data from parent components through props (properties).
                    <b>Lifecycle Methods</b>:
                    Class components have lifecycle methods (e.g., componentDidMount, componentDidUpdate, componentWillUnmount) that allow developers to perform actions at specific points in the component's lifecycle.
                    <b>Declarative UI</b>:

                    React components describe what the UI should look like at any point in time. This declarative approach makes it easier to understand and reason about the UI.

                    In this example, Header, MainContent, and Footer are components that are composed together to create the overall structure of the App component.`,
                    code1: `//Functional Components:
                    //------------------
                    import React from 'react';
                    const MyComponent = () => {
                    return &lt;div&gt;Hello, I&#39;m a functional component!&lt;/div&gt;;
                    };
                    export default MyComponent;


                    //Class Components
                    //---------------
                    import React, {Component} from 'react';
                    class MyComponent extends Component {
                        render() {
                            return &lt;div&gt;Hello, I&#39;m a class component!&lt;/div&gt;;
                        }
                    }
                    export default MyComponent;


                    // Here's an example of using components together to create a simple application:
                    //------------------
                    import React from 'react';
                    import Header from './Header';
                    import MainContent from './MainContent';
                    import Footer from './Footer';

                    const App = () => {
                    return (
                            &lt;div&gt;
                                &lt;Header /&gt;
                                &lt;MainContent /&gt;
                                &lt;Footer /&gt;
                            &lt;/div&gt;
                            );
                    };
                    export default App;
                    `
                }
            ],
        },
        {
            id: 40,
            title: "What is the difference between class and functional components?",
            note: [
                {
                    text1: `Class components and functional components are two different ways of defining React components in a React application. While both types of components serve the same fundamental purpose of representing parts of a user interface, they differ in terms of syntax, features, and best practices. As of the introduction of React Hooks in React 16.8, functional components with hooks have become the more popular and recommended way of writing components.

                    <b>1. Syntax</b>:
                    <u>Class Components</u>:
                    import React, {Component} from 'react';
                    class MyClassComponent extends Component {
                        render() {
                            return &lt;div&gt;Hello, I&#39;m a class component!&lt;/div&gt;;
                        }
                    }

                    <u>Functional Components</u>:
                    import React from 'react';
                    const MyFunctionalComponent = () => {
                    return &lt;div&gt;Hello, I&#39;m a functional component!&lt;/div&gt;;
                    };

                    <b>2. State</b>:
                    <u>Class Components</u>:
                    Class components can have local state managed by the component itself.
                    State is initialized in the constructor method and updated using the setState method.

                    import React, {Component} from 'react';

                    class MyComponent extends Component {
                        constructor(props) {
                        super(props);
                    this.state = {
                        count: 0,
                    };
                    }

                    handleClick = () => {
                        this.setState({ count: this.state.count + 1 });
                    };

                    render() {
                    return (
                        &lt;div&gt;
                            &lt;p&gt;Count: {this.state.count}&lt;/p&gt;
                            &lt;button onClick={this.handleClick}&gt;Increment&lt;/button&gt;
                        &lt;/div&gt;
                        );
                    }
                    }

                    <u>Functional Components with Hooks</u>:
                    Functional components with hooks can also manage local state using the useState hook.
                    The useState hook returns the current state value and a function to update the state.

                    import React, {useState} from 'react';

                    const MyComponent = () => {
                    const [count, setCount] = useState(0);

                    const handleClick = () => {
                        setCount(count + 1);
                    };

                        return (
                        &lt;div&gt;
                            &lt;p&gt;Count: {count}&lt;/p&gt;
                            &lt;button onClick={handleClick}&gt;Increment&lt;/button&gt;
                        &lt;/div&gt;
                        );
                    };

                    <b>3. Lifecycle Methods</b>:
                    <u>Class Components</u>:
                    Class components have lifecycle methods (e.g., componentDidMount, componentDidUpdate, componentWillUnmount) that allow developers to perform actions at specific points in the component's lifecycle.

                    import React, {Component} from 'react';

                    class MyComponent extends Component {
                        componentDidMount() {
                        console.log('Component is mounted!');
                    }

                    componentDidUpdate() {
                        console.log('Component is updated!');
                    }

                    componentWillUnmount() {
                        console.log('Component is about to unmount!');
                    }

                    render() {
                    return &lt;div&gt;Hello, I&#39;m a class component!&lt;/div&gt;;
                    }
                    }

                    <u>Functional Components with Hooks</u>:
                    Functional components with hooks have equivalent lifecycle methods using the useEffect hook.
                    The useEffect hook can handle side effects such as data fetching, subscriptions, or cleanup.

                    import React, {useEffect} from 'react';

                    const MyComponent = () => {
                            useEffect(() => {
                                console.log('Component is mounted!');

                                return () => {
                                    console.log('Component is about to unmount!');
                                };
                            }, []); // Empty dependency array means it runs only once after mount

                        return &lt;div&gt;Hello, I&#39;m a functional component!&lt;/div&gt;;
                    };

                    <b>4. Readability and Conciseness</b>:
                    Functional components with hooks are generally considered more readable, concise, and easier to understand.
                    They encourage a more functional programming style and make it easier to reason about the component's behavior.

                    <b>5. Class Inheritance</b>:
                    Class components extend the React.Component class and support class inheritance.
                    Functional components are just functions and don't support class inheritance.

                    <b>6. Best Practices</b>:
                    As of React 16.8, functional components with hooks are the recommended way of writing components in React.
                    They simplify component logic, encourage better code organization, and offer improved performance optimizations.
                    In summary, while class components are still valid and widely used, functional components with hooks have become the standard in modern React development due to their simplicity, readability, and the benefits brought by React Hooks. Functional components are now the preferred choice for writing new components in React.`,
                    code1: ``
                }
            ],
        },
        {
            id: 41,
            title: "What is a state object?",
            note: [
                {
                    text1: `In React, a <b>state object</b> refers to an object in a component that holds the local state of that component. The state represents data that can change over time and influences the rendering of the component. The concept of state is fundamental in React and allows components to manage and respond to dynamic user interactions, data fetching, or any other scenario where the UI needs to be updated based on changing values.

                    In class components, the state is typically initialized in the constructor using this.state and updated using the setState method. Here's a simple example:

                    import React, {Component} from 'react';

                    class MyComponent extends Component {
                        constructor(props) {
                        super(props);
                        this.state = {
                            count: 0,
                            message: 'Hello, React!',
                        };
                    }

                    handleClick = () => {
                        this.setState({
                            count: this.state.count + 1,
                            message: 'Button clicked!',
                        });
                    };

                    render() {
                        return (
                            &lt;div&gt;
                                &lt;p&gt;{this.state.message}&lt;/p&gt;
                                &lt;p&gt;Count: {this.state.count}&lt;/p&gt;
                                &lt;button onClick={this.handleClick}&gt;Click me&lt;/button&gt;
                            &lt;/div&gt;
                            );
                        }
                    }

                    export default MyComponent;

                    In functional components, the <b>useState</b> hook is used to create and manage state. The useState hook returns an array where the first element is the current state value, and the second element is a function to update the state. Here's the equivalent example using a functional component:

                    import React, {useState} from 'react';

                    const MyComponent = () => {
                    const [state, setState] = useState({
                        count: 0,
                        message: 'Hello, React!',
                    });

                    const handleClick = () => {
                        setState({
                            count: state.count + 1,
                            message: 'Button clicked!',
                        });
                    };

                        return (
                        &lt;div&gt;
                            &lt;p&gt;{state.message}&lt;/p&gt;
                            &lt;p&gt;Count: {state.count}&lt;/p&gt;
                            &lt;button onClick={handleClick}&gt;Click me&lt;/button&gt;
                        &lt;/div&gt;
                        );
                    };

                    export default MyComponent;

                    In both examples, the state object contains properties (count and message in this case), and when the button is clicked, the setState function is used to update the state, triggering a re-render of the component with the new state values.

                    The use of a state object allows components to maintain and manage multiple pieces of data that can change independently. State is crucial for creating interactive and dynamic user interfaces in React applications.`,
                    code1: ``
                }
            ],
        },
        {
            id: 42,
            title: "What is a props object?",
            note: [
                {
                    text1: `In React, the "props object" refers to a JavaScript object that holds the properties (props) passed to a React component. Props allow the parent component to pass data down to its child components, enabling communication and customization of child components based on the parent's needs.

                    <b>Functional Components</b>:
                    In functional components, the props object is automatically passed as the first argument to the component's function:

                    import React from 'react';
                    const MyComponent = (props) => {
                    return &lt;div&gt;{props.message}&lt;/div&gt;;
                    };

                    Here, props is an object containing all the properties passed to MyComponent. The component uses props.message to access the specific prop named "message."

                    <b>Class Components</b>:
                    In class components, the props object is accessed through this.props:

                    import React, {Component} from 'react';
                    class MyComponent extends Component {
                        render() {
                            return &lt;div&gt;{this.props.message}&lt;/div&gt;;
                        }
                    }

                    The this.props syntax is used to access the props object within class component methods like render().

                    In this example, the ParentComponent is passing a prop named "message" with the value "Hello from Parent!" to the ChildComponent. The ChildComponent then displays the value of this prop.

                    Props provide a way to make components more dynamic and reusable, as the same component can be used with different sets of data in different parts of the application. The props object is an integral part of the parent-child communication in React.`,
                    code1: `//Example Usage:
                    // ParentComponent.js:
                    //----------------
                    import React from 'react';
                    import ChildComponent from './ChildComponent';

                    const ParentComponent = () => {
                    const data = 'Hello from Parent!';
                        return &lt;ChildComponent message={data} /&gt;;
                    };

                    export default ParentComponent;


                    // ChildComponent.js:
                    //-----------------
                    import React from 'react';

                    const ChildComponent = (props) => {
                    return &lt;p&gt;{props.message}&lt;/p&gt;;
                    };

                    export default ChildComponent;
                    `
                }
            ],
        },
        {
            id: 43,
            title: "How are state objects different from props objects?",
            note: [
                {
                    text1: `In React, state and props are both mechanisms for managing data in a component, but they serve different purposes and have distinct characteristics.

                    <b>State</b>:
                    <u>Definition</u>:
                    State is a JavaScript object that represents the internal, mutable data of a component.
                    It is managed and controlled by the component itself.
                    Changes to state trigger a re-render of the component.
                    <u>Mutability</u>:
                    State is mutable and can be updated using the setState method.
                    State changes trigger a re-render of the component, updating the UI.
                    <u>Scope</u>:
                    State is local to the component in which it is defined. It is not directly accessible by parent or child components.
                    <u>Initialization</u>:
                    State is typically initialized in the component's constructor method or, in functional components, using the useState hook.

                    <b>Props</b>:
                    <u>Definition</u>:
                    Props (short for properties) are a mechanism for passing data from a parent component to a child component.
                    They are immutable and cannot be modified by the component that receives them.
                    Changes to props do not trigger a re-render of the component.
                    <u>Immutability</u>:
                    Props are immutable and cannot be modified within the component that receives them.
                    They are read-only and serve as a way to configure and customize child components.
                    <u>Scope</u>:
                    Props are passed from parent components to child components. Child components cannot directly modify the props they receive.
                    <u>Initialization</u>:
                    Props are passed as attributes in JSX when a component is used.

                    Key Differences:
                    <b>Mutability</b>:
                    State is mutable and can be updated by the component itself.
                    Props are immutable and cannot be modified within the component that receives them.

                    <b>Ownership</b>:
                    State is owned and managed by the component itself.
                    Props are passed from parent components and are owned by the parent.

                    <b>Scope</b>:
                    State is local to the component.
                    Props are passed from parent to child and are accessible in the child component.

                    <b>Triggering Re-renders</b>:
                    Changes to state trigger re-renders of the component.
                    Changes to props do not trigger re-renders. Components re-render only if their own state or props change.
                    In summary, state is internal and mutable data managed by a component, while props are external and immutable data passed from parent components to child components. Understanding when to use state and when to use props is crucial for building effective and maintainable React applications.
`,
                    code1: `                    //Example of State:
                    // Class Component:
                    import React, {Component} from 'react';

                    class Counter extends Component {
                        constructor(props) {
                        super(props);
                    this.state = {
                        count: 0,
                        };
                    }

                    increment = () => {
                        this.setState({ count: this.state.count + 1 });
                    };

                        render() {
                    return (
                        &lt;div&gt;
                            &lt;p&gt;Count: {this.state.count}&lt;/p&gt;
                            &lt;button onClick={this.increment}&gt;Increment&lt;/button&gt;
                        &lt;/div&gt;
                        );
                    }
                    }

                    // Functional Component with Hooks:
                    import React, {useState} from 'react';

                    const Counter = () => {
                    const [count, setCount] = useState(0);

                    const increment = () => {
                        setCount(count + 1);
                    };

                        return (
                            &lt;div&gt;
                                &lt;p&gt;Count: {count}&lt;/p&gt;
                                &lt;button onClick={increment}&gt;Increment&lt;/button&gt;
                            &lt;/div&gt;
                        );
                    };

                    //-------------
                    Example of Props:
                    //Parent Component:
                    import React from 'react';
                    import ChildComponent from './ChildComponent';

                    const ParentComponent = () => {
                    const data = 'Hello from Parent!';

                        return &lt;ChildComponent message={data} /&gt;;
                    };


                    //Child Component:
                    import React from 'react';
                    const ChildComponent = (props) => {
                    return &lt;p&gt;{props.message}&lt;/p&gt;;
                    };
                    `
                }
            ],
        },
        {
            id: 44,
            title: "Explain what MVC architecture is",
            note: [
                {
                    text1: `MVC stands for Model-View-Controller, and it is a software architectural pattern used for designing and organizing code in applications. The MVC architecture separates an application into three interconnected components, each with distinct responsibilities, to enhance modularity, maintainability, and scalability. The three components are as follows:

                    <b>Model (M)</b>:
                    The Model represents the application's data and business logic. It is responsible for managing the application's state, processing data, and enforcing business rules.
                    The Model is independent of the user interface and is not concerned with how the data is presented or how the user interacts with it.

                    <b>View (V)</b>:
                    The View is responsible for presenting the data to the user and receiving user input. It represents the user interface components, such as buttons, forms, and graphical elements.
                    The View is unaware of the underlying data and business logic. It relies on the Model to provide the necessary data and updates the user interface accordingly.

                    <b>Controller (C)</b>:
                    The Controller acts as an intermediary between the Model and the View. It receives user input from the View, processes it, and updates the Model accordingly.
                    The Controller is responsible for handling user interactions, making decisions based on user input, and updating both the Model and the View as needed.
                    In some variations of the MVC pattern, the Controller may be responsible for handling application-level logic and managing the flow of data between the Model and the View.
                    Key Principles of MVC:
                    Separation of Concerns:

                    The primary goal of MVC is to separate different aspects of an application to make the code more modular and maintainable.
                    The Model, View, and Controller have distinct responsibilities, and changes in one component should not directly affect the others.

                    <u>Reusability</u>:
                    The modular structure of MVC promotes the reuse of components. For example, a different View can be created to display the same data, or a different Controller can handle user input in a different way without affecting the underlying Model.

                    <u>Testability</u>:
                    The separation of concerns makes it easier to test each component independently. Unit testing can be performed on the Model, View, and Controller to ensure their individual functionality.

                    <u>Scalability</u>:
                    MVC architecture provides a scalable structure that facilitates the addition of new features or the modification of existing ones without major disruptions. Changes in one component are less likely to impact others.
                    Example in Web Development:
                    In the context of web development, MVC is often used to structure web applications:

                    <b>Model (M)</b>: Represents the data and business logic. It could involve data storage, retrieval, and processing.
                    <b>View (V)</b>: Represents the user interface and how the data is presented. It includes HTML, CSS, and UI components.
                    <b>Controller (C)</b>: Manages user input, updates the Model, and interacts with the View. It often involves server-side logic and routes requests.
                    For example, in a web application using a framework like Django (Python) or Ruby on Rails (Ruby), the framework often follows an MVC architecture. The Model handles database operations, the View handles rendering HTML and presenting data, and the Controller manages the flow of data between the Model and the View.

                    Overall, the MVC architecture provides a structured and organized approach to building applications, facilitating better code organization, maintainability, and collaboration among developers.`,
                    code1: ``
                }
            ],
        },
        {
            id: 45,
            title: "what is architectural difference between React and Angular.",
            note: [
                {
                    text1: `React and Angular are both popular JavaScript frameworks/libraries for building web applications, but they have several differences in terms of architecture, approach, language, and other aspects. Here's a summary of the key differences between React and Angular:

                    <b>1. Architecture</b>:
                    <u>React</u>:
                    Focuses on the "View" part of the application architecture.
                    Follows a component-based architecture where UIs are built using components.
                    React does not prescribe a specific architectural pattern, allowing developers to choose their preferred state management solutions (e.g., Redux, MobX).
                    <u>Angular</u>:
                    Follows the MVC (Model-View-Controller) architectural pattern.
                    Provides a more opinionated and structured approach with clear separation of concerns.
                    Enforces a specific architecture with modules, components, services, and directives.

                    <b>2. Language</b>:
                    <u>React</u>:
                    Written in JavaScript and can be used with JSX (JavaScript XML) syntax.
                    Supports ES5, ES6, and TypeScript.
                    <u>Angular</u>:
                    Primarily written in TypeScript, a superset of JavaScript.
                    TypeScript introduces static typing, decorators, and additional features.

                    <b>3. Data Binding</b>:
                    <u>React</u>:
                    Uses one-way data binding. Data flows from parent components to child components.
                    Emphasizes a unidirectional data flow.
                    <u>Angular</u>:
                    Supports two-way data binding, allowing changes in the UI to automatically update the model and vice versa.
                    Simplifies synchronization between the model and the view.

                    <b>4. Dependency Injection</b>:
                    <u>React</u>:
                    Does not have built-in support for dependency injection.
                    Props drilling is a common pattern to pass data down the component tree.
                    <u>Angular</u>:
                    Has a built-in dependency injection system that facilitates the injection of services into components.
                    Promotes modularity and testability.

                    <b>5. Rendering</b>:
                    <u>React</u>:
                    Uses a virtual DOM to efficiently update only the parts of the actual DOM that have changed.
                    Provides a reconciliation algorithm to optimize updates.
                    <u>Angular</u>:
                    Uses a real DOM and updates the entire DOM when there are changes.
                    Employs change detection to track and update components based on changes in the data.

                    <b>6. Learning Curve</b>:
                    <u>React</u>:
                    Generally considered easier to learn, especially for developers familiar with JavaScript.
                    Has a more gradual learning curve.
                    <u>Angular</u>:
                    Has a steeper learning curve due to its opinionated nature and the introduction of TypeScript.
                    Requires understanding of various concepts like modules, decorators, services, etc.

                    <b>7. Tooling</b>:
                    <u>React</u>:
                    Can be used with various build tools (e.g., Webpack) and task runners.
                    Developers have the flexibility to choose tools based on their preferences.
                    <u>Angular</u>:
                    Comes with a comprehensive CLI (Command Line Interface) that automates common development tasks.
                    Enforces a specific project structure and simplifies development workflows.

                    <b>8. Community and Ecosystem</b>:
                    <u>React</u>:
                    Large and active community.
                    Extensive ecosystem with a variety of third-party libraries and tools.
                    <u>Angular</u>:
                    Backed by Google, has strong community support.
                    Comprehensive ecosystem with built-in tools for testing, animations, etc.

                    <b>9. Size and Performance</b>:
                    <u>React</u>:
                    Lightweight core. The size of the final bundle depends on additional libraries used (e.g., state management libraries).
                    <u>Angular</u>:
                    Larger bundle size compared to React due to the framework's features.
                    Supports Ahead-of-Time (AOT) compilation for improved performance.

                    <b>10. Flexibility</b>:
                    <u>React</u>:
                    Offers more flexibility in terms of choosing libraries and tools.
                    Developers have more control over the architecture.

                    <u>Angular</u>:
                    Provides a more opinionated and structured approach.
                    Offers less flexibility but more guidance for building large-scale applications.

                    Conclusion:
                    The choice between React and Angular depends on project requirements, team expertise, and developer preferences. React is known for its simplicity, flexibility, and ease of integration, while Angular provides a more opinionated and structured framework with a full set of features out of the box. Each has its strengths, and the decision often comes down to the specific needs of the project and the development`,
                    code1: ``
                }
            ],
        },
        {
            id: 46,
            title: "How are controlled and uncontrolled components different?",
            note: [
                {
                    text1: `Controlled components and uncontrolled components are two different approaches to managing and handling form elements and user input in React. The key differences lie in how they handle and manage the state of form elements.

                    <b>Controlled Components</b>:
                    <u>State is Managed by React</u>:
                    In controlled components, the state of form elements (such as input fields) is managed by React using the useState hook (in functional components) or this.setState (in class components).
                    The component's state serves as the single source of truth for the values of form elements.

                    <u>Input Values are Controlled</u>:
                    The values of form elements are tied to the component's state.
                    User input triggers a change in the component's state, and the component re-renders to reflect the updated state.

                    <u>Predictable Behavior</u>:
                    Since the state is managed by React, the behavior is predictable and follows the React data flow model.
                    The component's UI is always a reflection of its current state.


                    <b>Uncontrolled Components</b>:
                    <u>State is Managed by the DOM</u>:
                    In uncontrolled components, the state of form elements is not managed by React. Instead, it is managed by the DOM itself.
                    The component relies on refs to access and interact with the DOM nodes directly.

                    <u>Input Values are Uncontrolled</u>:
                    The values of form elements are not directly tied to the component's state. Instead, the component queries the DOM to get the current values.

                    <u>Use Cases</u>:
                    Uncontrolled components are often used when integrating with non-React code or when working with third-party libraries that manage their state internally.
                    They might be suitable in situations where you want to minimize the amount of React-specific code.
                    Choosing Between Controlled and Uncontrolled Components:

                    <b>Controlled Components</b>:
                    Provide a predictable and React-centric way of managing form state.
                    Suitable for situations where React should have full control over form behavior.

                    <b>Uncontrolled Components</b>:
                    Useful in scenarios where you want to integrate React with non-React code or libraries.
                    Can be simpler in some cases, especially when dealing with large and dynamic forms.
                    The choice between controlled and uncontrolled components depends on the specific requirements and constraints of the application. In many cases, controlled components are the preferred choice in React applications due to their predictability and ease of integration with other React features.`,
                    code1: ` // Example:
                    // Controlled Components
                    import React, {useState} from 'react';

                    const ControlledComponent = () => {
                    const [inputValue, setInputValue] = useState('');

                    const handleInputChange = (event) => {
                        setInputValue(event.target.value);
                    };

                        return (
                        &lt;div&gt;
                            &lt;input
                                type=&quot;text&quot;
                                value={inputValue}
                                onChange={handleInputChange}
                            /&gt;
                            &lt;p&gt;Input Value: {inputValue}&lt;/p&gt;
                        &lt;/div&gt;
                        );
                    };

                    export default ControlledComponent;

                    //-------------
                     // Uncontrolled Components
                    import React, {useRef} from 'react';

                    const UncontrolledComponent = () => {
                    const inputRef = useRef();

                    const handleButtonClick = () => {
                        // Access the input value directly through the DOM
                        alert(\`Input Value: inputRef.current.value \`);
                    };

                        return (
                        &lt;div&gt;
                            &lt;input type=&quot;text&quot; ref={inputRef} /&gt;
                            &lt;button onClick={handleButtonClick}&gt;Get Input Value&lt;/button&gt;
                        &lt;/div&gt;
                        );
                    };

                    export default UncontrolledComponent;
                    `
                }
            ],
        },
        {
            id: 47,
            title: "What are package managers in React.js?",
            note: [
                {
                    text1: `In React.js, package managers are tools that facilitate the installation, management, and dependency resolution of JavaScript packages and libraries. They help developers streamline the process of managing project dependencies, ensuring that the correct versions of packages are installed and available for use in the application. Two popular package managers used in the React.js ecosystem are:

                    <b>npm (Node Package Manager)</b>:
                    npm is the default package manager for Node.js, and it is widely used in the JavaScript ecosystem, including React.js development.
                    npm allows developers to install, manage, and share JavaScript packages and libraries.
                    It is often used to install React itself, as well as third-party libraries and tools.
                    <u>Package.json</u>:
                    package.json is a file in the root of a Node.js project that lists dependencies and other metadata.
                    It includes information about the project, scripts, and dependencies, allowing developers to define and manage the project's dependencies.

                    <b>Yarn (Yet Another Resource Negotiator)</b>:
                    Yarn is another package manager for JavaScript that was developed by Facebook in collaboration with other companies.
                    It is compatible with npm and offers faster and more reliable dependency management.
                    Yarn uses a lockfile (yarn.lock) to ensure deterministic and reproducible installations.
                    <u>Yarn.lock</u>:
                    Similar to package.json, the yarn.lock file is generated by Yarn and locks down the versions of dependencies to ensure consistency across different environments.
                    Choosing between npm and Yarn often depends on personal preference and the requirements of the project. Both package managers are widely used in the React.js community, and developers can seamlessly switch between them without compatibility issues. It's essential to adhere to the chosen package manager's conventions and use the associated configuration files (package.json and yarn.lock) for managing project dependencies.`,
                    code1: `//npm
                    // Example Commands:
                    // # Install a package
                    npm install package-name

                    // # Install a package as a development dependency
                    npm install package-name --save-dev

                    // # Install packages based on package.json
                    npm install

                    // # Update packages to their latest versions
                    npm update

                    //--------

                    //yarn
                    // Example Commands:
                    // # Install a package
                    yarn add package-name

                    // # Install a package as a development dependency
                    yarn add package-name --dev

                    // # Install packages based on yarn.lock
                    yarn install

                    // # Upgrade packages to their latest versions
                    yarn upgrade
                    `
                }
            ],
        },
        {
            id: 48,
            title: "Explain what the Shadow DOM is.",
            note: [
                {
                    text1: `The Shadow DOM, or Shadow Document Object Model, is a web standard that provides encapsulation for the styling and structure of a web component. It allows developers to create and use self-contained components with their own scoped styles, preventing style leakage and conflicts with the styles of the rest of the document.

                    Here are key concepts and features of the Shadow DOM:
                    <b>Encapsulation</b>:
                    The Shadow DOM encapsulates the styles and markup of a component, making it isolated from the rest of the document. This encapsulation helps prevent styles or scripts in the component from affecting the global styles and scripts, and vice versa.

                    <b>Scoped Styles</b>:
                    Styles defined within the Shadow DOM are scoped to the component. They do not leak out to the surrounding document, and styles from the document do not penetrate into the Shadow DOM. This allows developers to write styles without worrying about unintentional global effects.

                    <b>Composition</b>:
                    Components with Shadow DOM can be composed and reused without concern for naming conflicts or style collisions. Each instance of a component with Shadow DOM operates independently, contributing to improved modularity and maintainability.

                    <b>Isolation of JavaScript</b>:
                    JavaScript running inside the Shadow DOM is isolated from the global JavaScript context. This means that variables, functions, or scripts defined within the Shadow DOM do not interfere with the global scope, and vice versa.

                    <b>Creating Shadow DOM</b>:
                    The Shadow DOM is created using the attachShadow method. In the context of web components, this method is typically called within the constructor of a custom element.

                    <b>Accessing the Shadow DOM</b>:
                    Outside code can access the Shadow DOM using the shadowRoot property of an element with Shadow DOM. However, direct manipulation of the Shadow DOM from outside the component is discouraged for the sake of encapsulation.

                    const myComponent = document.querySelector('my-component');
                    const shadowRoot = myComponent.shadowRoot;

                    The Shadow DOM is a crucial feature for building reusable, encapsulated components in web development. It enhances the modularity and maintainability of web applications by providing a way to create components with encapsulated styles and structure. The Shadow DOM is commonly used in conjunction with custom elements and web components.
`,
                    code1: `class MyComponent extends HTMLElement {
                        constructor() {
                        super();

                    // Create a shadow DOM and attach it to the custom element
                    const shadowRoot = this.attachShadow({mode: 'open' });

                    // Define the markup and styles for the shadow DOM
                    shadowRoot.innerHTML = \`
                    &lt;style&gt;
                    /* Scoped styles for the component */
                        :host {
                            display: block;
                        padding: 10px;
                        background-color: lightgray;
                        }
                            &lt;/style&gt;
                            &lt;div&gt;
                                &lt;!-- Content of the component --&gt;
                                &lt;p&gt;Hello, Shadow DOM!&lt;/p&gt;
                            &lt;/div&gt;
                            \`;
                        }
                    }

                    // Define the custom element using the class
                    customElements.define('my-component', MyComponent);

                     attachShadow({mode: 'open' }) // is used to create an open Shadow DOM, which allows external styles to be applied to the Shadow DOM.
                    `
                }
            ],
        },
        {
            id: 49,
            title: "How is the Shadow DOM different from the virtual DOM?.",
            note: [
                {
                    text1: `The Shadow DOM and the virtual DOM are both concepts used in web development, but they serve different purposes and address different concerns. Let's explore the key differences between the Shadow DOM and the virtual DOM:

                    <b>1. Purpose</b>:
                    <u>Shadow DOM</u>:
                    The Shadow DOM is primarily designed for encapsulation. It allows developers to create isolated and encapsulated components with scoped styles and markup. The main goal is to prevent style and DOM structure leakage from one component to another.
                    <u>Virtual DOM</u>:
                    The virtual DOM is a performance optimization technique. It provides an in-memory representation of the actual DOM to efficiently update the UI by minimizing direct manipulations of the real DOM. The focus is on improving rendering efficiency and reducing unnecessary reflows and repaints.

                    <b>2. Isolation</b>:
                    <u>Shadow DOM</u>:
                    Provides encapsulation by isolating the styles and structure of a component. Styles defined within the Shadow DOM are scoped to the component, and the DOM structure is not accessible from the outside.
                    <u>Virtual DOM</u>:
                    Does not provide encapsulation or isolation of styles. Its primary goal is to optimize updates to the UI by reducing the number of direct manipulations to the real DOM.

                    <b>3. Usage</b>:
                    <u>Shadow DOM</u>:
                    Typically used in the context of web components. It allows developers to create reusable and encapsulated components that can be composed without worrying about style or DOM conflicts.
                    <u>Virtual DOM</u>:
                    Widely used in libraries and frameworks like React. It is employed to efficiently update the UI by comparing the differences between consecutive states and applying minimal changes to the real DOM.

                    <b>4. Concerns</b>:
                    <u>Shadow DOM</u>:
                    Addresses encapsulation, style scoping, and DOM structure isolation. It ensures that the styles of one component do not affect others and that the DOM structure is self-contained.
                    <u>Virtual DOM</u>:
                    Focuses on performance optimization, reducing the cost of updating the UI by batching and efficiently applying changes to the real DOM.

                    <b>5. Implementation</b>:
                    <u>Shadow DOM</u>:
                    Created using the attachShadow method. It is commonly used with custom elements to encapsulate the styles and structure of a component.

                    const shadowRoot = element.attachShadow({mode: 'open' });

                    <u>Virtual DOM</u>:
                    Created in memory as a lightweight representation of the actual DOM. It is used by libraries and frameworks like React to efficiently update the UI based on changes to component state.

                    <b>6. Common Use Cases</b>:
                    <u>Shadow DOM</u>:
                    Ideal for creating reusable and encapsulated web components. It is commonly used when developing component-based architectures.
                    <u>Virtual DOM</u>:
                    Widely used in applications where dynamic and frequent updates to the UI are required. Commonly employed in single-page applications built with libraries like React.

                    <b>7. Framework/Library Support</b>:
                    <u>Shadow DOM</u>:
                    Supported in modern browsers and is used in conjunction with web components. It is not tied to any specific library or framework.
                    <u>Virtual DOM</u>:
                    Widely used in libraries and frameworks like React and Vue.js. The virtual DOM is a key concept in these frameworks for optimizing UI updates.

                    In summary, while both the Shadow DOM and the virtual DOM are related to the DOM and web development, they serve different purposes. The Shadow DOM focuses on encapsulation and isolation of styles and structure, while the virtual DOM is a performance optimization technique for efficiently updating the UI by minimizing direct manipulations of the real DOM. They are often used in combination to achieve both encapsulation and performance benefits in web applications.`,
                    code1: ``
                }
            ],
        },
        {
            id: 50,
            title: "Explain what a pure function is.",
            note: [
                {
                    text1: `A pure function is a function in programming that has two main characteristics:
                    <b>Deterministic</b>:
                    A pure function produces the same output for the same set of input parameters every time it is invoked. There are no hidden or external factors that can cause the function to behave differently for the same inputs.

                    <b>No Side Effects</b>:
                    A pure function does not cause any observable side effects outside of its scope. It means that when a pure function is called, it doesn't modify any external state, doesn't mutate input parameters, doesn't interact with I/O devices, and doesn't perform any other actions that could affect the program's state or the outside world.
                    In essence, a pure function is like a mathematical function. Given the same input, it will always produce the same output, and it won't change anything outside of its scope. Pure functions are a fundamental concept in functional programming and have several advantages:

                    <b>Advantages of Pure Functions</b>:
                    <u>Predictability</u>:
                    Since pure functions are deterministic, you can predict their behavior based on their inputs, making code easier to reason about.
                    <u>Testability</u>:
                    Pure functions are easy to test because you can isolate them from the rest of the program. You only need to consider the inputs and outputs without worrying about external state.
                    <u>Concurrency</u>:
                    Pure functions are inherently thread-safe and can be parallelized easily. They don't rely on shared state that might be modified concurrently by multiple threads.
                    <u>Cacheability</u>:
                    Because pure functions always produce the same output for the same inputs, the results can be cached, leading to potential performance optimizations.
                    <u>Debugging</u>:
                    Debugging is simplified because the behavior of pure functions is determined solely by their inputs and not by hidden or changing external factors.

                    In the above examples, add and square are pure functions because they meet the criteria of being deterministic and having no side effects. On the other hand, impureAdd is not a pure function because it modifies the external state (result), leading to observable side effects.

                    By adhering to the principles of pure functions, developers can write code that is more modular, easier to understand, and less error-prone, especially in functional programming paradigms.
`,
                    code1: ` //Examples of Pure Functions:
                    // Pure Function Example 1
                    function add(x, y) {
                    return x + y;
                    }

                    // Pure Function Example 2
                    function square(x) {
                    return x * x;
                    }

                    // Impure Function (Not Pure)
                    let result = 0;
                    function impureAdd(x, y) {
                        result = x + y;
                    return result;
                    }`
                }
            ],
        },
        {
            id: 51,
            title: "Explain what a pure function in react",
            note: [
                {
                    text1: `In React, a pure function refers to a specific type of function that satisfies the principles of functional programming, particularly the characteristics of pure functions. Pure functions in the context of React are often associated with functional components and are essential for building predictable and maintainable UIs.

                    Here are the key characteristics of a pure function in the context of React:

                    <b>Deterministic</b>:
                    A pure function in React is deterministic, meaning that given the same set of input props and state, it will always produce the same output (Virtual DOM representation) during each invocation.

                    <b>No Side Effects</b>:
                    A pure function should not cause any side effects. It should not modify the state outside of its scope, interact with external APIs, or perform any other actions that could affect the application's state or the outside world.

                    <b>Props and State as Input</b>:
                    A pure function in React typically takes the component's props and state as input parameters. It produces a Virtual DOM representation based on these inputs.

                    <b>No Mutation of Props or State</b>:
                    A pure function should not mutate the input props or state. Instead, it should treat them as immutable data and create new objects or values as needed.

                    Advantages of Pure Functions in React</b>:
                    <b>Predictable Rendering</b>:
                    Pure components render predictably based on their input props and state, making it easier to reason about their behavior.

                    <b>Improved Performance</b>:
                    React can optimize the rendering process for pure components more effectively, leading to potential performance improvements.

                    <b>Easier Testing</b>:
                    Pure components are easier to test since their behavior is solely determined by their inputs, and they don't rely on external state changes.

                    <b>Facilitates Memoization</b>:
                    Memoization techniques, such as React's React.memo or custom memoization strategies, work well with pure components.
                    In summary, pure functions in React, often represented by functional components, adhere to the principles of functional programming. They contribute to a more predictable, modular, and maintainable codebase, and they play a key role in React's performance optimizations.`,
                    code1: ` //Here's an example of a pure function in React:
                    import React from 'react';
                    // Pure Function Component
const PureComponent = (props) => {
// No side effects, only depends on the input props
const {name, age} = props;

    // Deterministic output based on props
    return (
    &lt;div&gt;
        &lt;p&gt;Name: {name}&lt;/p&gt;
        &lt;p&gt;Age: {age}&lt;/p&gt;
    &lt;/div&gt;
    );
};

export default PureComponent;
                    // In this example, PureComponent is a functional component that behaves like a pure function. It takes name and age as input through the props parameter and produces a Virtual DOM representation based on these props. It doesn't have any internal state, doesn't cause side effects, and is deterministic.
`
                }
            ],
        },
        {
            id: 52,
            title: "aff intro",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ],
        },
    ]
}
