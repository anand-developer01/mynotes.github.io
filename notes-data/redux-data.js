const Links1 = 'react-notes'
const Links2 = 'redux-notes'
const Links3 = 'react-typescript-data'
const Links4 = 'react-projects'

const isHighlighted = 'redux-notes'

const reduxData = {
  reduxNote: [
    {
      id: 2,
      title: "What is Redux?",
      note: [
        {
          text1: `<a href="https://github.com/reduxjs/redux-toolkit" target="_blank"> redux-toolkit </a>
                    <a href="https://webcodingcenter.com/redux" target="_blank"> redux </a>
                    Redux is a state management library that allows you to manage the state of your JavaScript applications more efficiently and predictably.
                    
                    Instead of passing this information from component to component using props, Redux allows you to store them in one central location where they can be easily accessed and updated. This makes it easier to manage complex states and keep your application organized.

                    <b>Why Should I Use Redux?</b>
                    Redux can help simplify the state management process, especially when dealing with complex and interconnected components. Here are some reasons why you might want to use Redux in your application:

<b>1) Centralized state management</b>: With Redux, you can maintain the state of your entire application in a single store, making it easier to manage and access data across components.
<b>2) Predictable state updates</b>: Redux has a clear flow of data, which means changes to the state can only happen when you create an action and send it through Redux. This makes it easy to understand how your application's data will change in response to user actions.
<b>3) Easier debugging</b>: With Redux DevTools, you have a clear record of all the changes to your application's state. This makes locating and fixing issues in your code easier, saving you time and effort in the debugging process.
<b>4) Better performance</b>: By minimizing the number of state updates and reducing the need for prop drilling, Redux helps improve your application's performance.

<b>How Does Redux Work?</b>
As previously mentioned, Redux enables you to maintain a single centralized store that manages the state of your entire application. All components in your application can access this store and update or retrieve data from it as needed.
The key components that enable this centralized approach to state management are:
1) Store
2) Actions
3) Dispatch
4) Reducers

<b>Store</b>
The Redux store is like a giant container that holds all the data for your application.

Think of the store as a box with different compartments for different data types. You can store any data you want in these compartments, and it can hold various kinds of data, such as strings, numbers, arrays, objects, and even functions.

Also, the store is the single source of truth for your application's state. This means that any component in your application can access it to retrieve and update data.

The store contains the complete state of your application, typically represented as a plain JavaScript object. This state can include various slices of data, like user information, UI states, or fetched data.

The store is a centralized repository that holds the entire state of your application in Redux. It acts as a single source of truth for the state.

<b>Actions</b>
An action is an object that describes what changes need to be made to the state of your application. It sends data from your application to the Redux store and serves as the only way to update the store.

An action must have a <b>type</b> property describing the action being performed. This <b>type</b> property is typically defined as a string constant to ensure consistency and avoid typos.

In addition to the <b>type</b> property, an action can have a <b>payload</b> property. The <b>payload</b> property represents the data that provides additional information about the action being performed. For example, if an action type is ADD_TASK, the payload might be an object containing a new task item's <b>id</b>, <b>text</b>, and <b>completed status</b>.
<span style="color:red">
{
  type: 'ADD_TASK',
  payload: {
    id: 1,
    text: 'Buy groceries',
    completed: false
  }
}
</span>
Note that to create actions, we use action creators. Action creators are functions that create and return action objects.


<b>Dispatch</b>
In Redux, dispatch is a function provided by the store that allows you to send an action to update the state of your application. When you call dispatch, the store runs an action through all of the available reducers, which in turn update the state accordingly.

<b>Reducers</b>
In Redux, a reducer is a function that takes in the current state of an application and an action as arguments, and returns a new state based on the action.

                    `,
          code1: `//Here is an example of an action creator that takes in a task's text and returns an action object to add the task to the Redux store:

                function addTask(taskText) {
                return {
                    type: 'ADD_TASK',
                    payload: {
                    id: 1,
                    text: taskText,
                    completed: false
                    }
                }
                }
                

                // Here's an example of a simple reducer:
const initialState = {
  count: 0
};

function counterReducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
                `
        },
        {
          text1: `<b>create store</b>
Install Redux Toolkit
Make sure you have Redux Toolkit and React-Redux installed:
<span style="color:red">npm install @reduxjs/toolkit react-redux</span>
 
                    <span style="color:red">configureStore.ts:98 Uncaught Error: \`reducer\` is a required argument, and must be a function or an object of functions that can be passed to combineReducers</span>
                    When using configureStore from Redux Toolkit, the reducer should be passed as an object under the reducer key, or directly as a function if there's only one reducer.
                    `,
          code1: `//basic setup of store
                    //store.js
                    import { configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from './reducer/RootReducer'
const store = configureStore({
    reducer : CounterReducer
})
export default store

//RootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import CounterReducer from './CounterReducer';
export const reducer = combineReducers({
    CounterReducer
})


//Index.js or App.js
import store from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  &lt;React.StrictMode&gt;
    &lt;Provider store={store}&gt;
      &lt;App /&gt;
    &lt;/Provider&gt;
  &lt;/React.StrictMode&gt;
);

//===============
// Correct Usage of configureStore
//==============
    // "Single Root Reducer": If your RootReducer is a single reducer function, you can pass it directly:

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer/RootReducer'; // Ensure it's a default export

const store = configureStore({
  reducer: rootReducer, // Pass the reducer function directly
});

export default store;


//----------
    // "Multiple Reducers": If RootReducer combines multiple reducers (using combineReducers), ensure it is exported correctly and used like this:
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import counterReducer from './features/counterSlice';
import userReducer from './features/userSlice';

// Combine reducers in RootReducer
const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer, // Pass the combined reducer
});

export default store;


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
      title: "configureStore",
      note: [
        {
          text1: ` A standard Redux store setup typically requires multiple pieces of configuration:

=> Combining the slice reducers into the root reducer
=> Creating the middleware enhancer, usually with the thunk middleware or other side effects middleware, as well as middleware that might be used for development checks
=> Adding the Redux DevTools enhancer, and composing the enhancers together
=> Calling <u>createStore</u>

Legacy Redux usage patterns typically required several dozen lines of copy-pasted boilerplate to achieve this.

Redux Toolkit's <b>configureStore</b> simplifies that setup process, by doing all that work for you. One call to <b>configureStore</b> will:

=> Call <b>combineReducers</b> to combine your slices reducers into the root reducer function
=> Add the thunk middleware and called <b>applyMiddleware</b>
=> In development, automatically add more middleware to check for common mistakes like accidentally mutating the state
=> Automatically set up the Redux DevTools Extension connection
=> Call <b>createStore</b> to create a Redux store using that root reducer and those configuration options

The configureStore function from Redux Toolkit accepts a single parameter, which is an options object. This object can contain various properties to customize the behavior of the Redux store. Here are the key parameters you can use with <b>configureStore</b>:
                   
<b>Parameters of configureStore</b>
    <b>reducer</b>:
        Type: (state: any, action: AnyAction) => any | { [key: string]: (state: any, action: AnyAction) => any }
        Description: A single reducer function or an object of slice reducers that will be combined into a single reducer function. This is the main parameter that defines the shape of your store's state.

        If this is a single function, it will be directly used as the root reducer for the store.

If it is an object of slice reducers, like <b>{users : usersReducer, posts : postsReducer}, configureStore</b> will automatically create the root reducer by passing this object to the Redux combineReducers utility.

<b>middleware</b>:
    Type: Middleware[] | (getDefaultMiddleware: () => Middleware[]) => Middleware[]
    Description: An array of middleware functions or a function that returns an array of middleware. If you provide a function, you can customize the default middleware provided by Redux Toolkit.

    A callback which will receive <b>getDefaultMiddleware</b> as its argument, and should return a middleware array.

If this option is provided, it should return all the middleware functions you want added to the store. <b>configureStore</b> will automatically pass those to <b>applyMiddleware</b>.

If not provided, <b>configureStore</b> will call <b>getDefaultMiddleware</b> and use the array of middleware functions it returns.

<b>devTools</b>:
    Type: boolean | DevToolsOptions
    Description: Enables or disables Redux DevTools extension. If set to true, it will enable DevTools. You can also pass options to configure it further.
<b>preloadedState</b>:
    Type: PreloadedState<any>
    Description: An optional initial state that will be used to populate the store when it is created.
    <b>[preloadedState] (any)</b>: The initial state. You may optionally specify it to hydrate the state from the server in universal apps, or to restore a previously serialized user session. If you produced reducer with combineReducers, this must be a plain object with the same shape as the keys passed to it. Otherwise, you are free to pass anything that your reducer can understand.
    preloadedState is an optional argument you can pass when creating a Redux store, especially when using Redux Toolkit. It allows you to set the initial state of your Redux store before any actions are dispatched.

    <b>Purpose of preloadedState</b>
    <u>Initial State Setup</u>: It provides a way to initialize the state of your application with specific values. This is particularly useful for server-side rendering or restoring a saved state.
    <u>Integration with External Data</u>: If you have existing data (e.g., from a database, local storage, or API) that you want to load into your application when it starts, you can use preloadedState to seed your store with this data.
    <u>Testing</u>: During testing, you can provide a specific state to the store to test how your application behaves with that state.

<b>enhancers</b>:
    Type: StoreEnhancer[]
    Description: An optional array of store enhancers, which can be used to add additional capabilities to the store.

    <a href="https://redux-toolkit.js.org/api/configureStore" target="_blank">configureStore</a>
`,
          code1: `//Parameters of configureStore
    //-------- ** reducer ** ---------:
    const store = configureStore({
      reducer: {
        counter: counterReducer,
        user: userReducer,
      },
    });

// ------------- ** middleware ** -----------:
    Type: Middleware[] | (getDefaultMiddleware: () => Middleware[]) => Middleware[]

    import { getDefaultMiddleware } from '@reduxjs/toolkit';
    const store = configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        customMiddleware,
      ],
    });

// -------- ** devTools ** ---------:
    const store = configureStore({
      reducer: rootReducer,
      devTools: process.env.NODE_ENV !== 'production', // Enable only in development
    });

// ** preloadedState **:
// When you create a Redux store using "configureStore" (or the traditional "createStore"), you can specify "preloadedState" like this:

//------------------------
// combineReducer.js
import CounterReducer from './CounterReducer';
export const RootReducer = combineReducers({
    counter: CounterReducer,
})


//-------------------------
// Store.js
const preloadedState = {
    counter: { // Key should match the slice name
        coin: 10, // Preloaded value for coin
    },
};
const store = configureStore({
    reducer: RootReducer,
    preloadedState
})

// --------- ** enhancers ** -----------:
// store.js
import { configureStore } from '@reduxjs/toolkit';
import { RootReducer } from './reducer/RootReducer'

// Custom logger enhancer
const loggerEnhancer = (store) => (next) => (action) => {
    console.log('Dispatching:', action);
    const result = next(action);
    console.log('Next State:', store.getState());
    return result;
};

// Create the store
const store = configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerEnhancer), // Add enhancer to middleware
});

// Export the store
export default store;


//-------------------------------
// Here's a complete example demonstrating how to use configureStore with various parameters:
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import customMiddleware from './middleware/customMiddleware';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    customMiddleware, // Custom middleware
  ],
  devTools: process.env.NODE_ENV !== 'production', // Enable DevTools in development
  preloadedState: {
    // Initial state
  },
});

// Export the configured store
export default store;
`
        },
        {
          text1: `<span style="color:red">ChangeCounter.js:7 Selector unknown returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.</span>

The warning you're seeing indicates that your selector is returning the entire state object instead of a specific part of the state. This can lead to unnecessary re-renders because any change in the state will trigger a re-render of the components that use that selector.
`,
          code1: `
//To fix this, ensure that your selector is returning only the necessary slice of state. In your case, 
// if you'''re trying to access the "coin" value from the "counter" slice, your selector should be defined like this:
//selector : specific part of the state
import { useSelector } from 'react-redux';
const MyComponent = () => {
    const coin = useSelector((state) => state.counter.coin); // Correctly access the specific value
    return &lt;div&gt;Current coin value: {coin}&lt;/div&gt;;
}
                    `
        }
      ],
    },
    {
      id: 52,
      title: "combineReducers",
      note: [
        {
          text1: `<b>combineReducers</b> is a utility function provided by Redux that allows you to combine multiple reducer functions into a single reducer function. This is especially useful when your application's state is complex and needs to be managed in a modular way.
                    
                    The combineReducers helper function turns an object whose values are different <b>slice reducer</b> functions into a single combined reducer function you can pass to Redux Toolkit's <b>configureStore</b> (or the legacy <b>createStore</b> method)

The resulting combined reducer calls every slice reducer any time an action is dispatched, and gathers their results into a single state object. This enables splitting up reducer logic into separate functions, each managing their own slice of the state independently.

You can control state key names by using different keys for the reducers in the passed object. For example, you may call <b>combineReducers({ todos: myTodosReducer, counter: myCounterReducer })</b> for the state shape to be <b>{ todos, counter }</b>.

<b>Arguments</b>
<b>reducers (Object)</b>: An object whose values correspond to different reducer functions that need to be combined into one.
<span style="color:red">
combineReducers({
  posts: postsReducer,
  comments: commentsReducer
})</span>

See the notes below for some rules every passed reducer must follow.
<b>Returns</b>
(Function): A reducer that invokes every reducer inside the reducers object, and constructs a state object with the same shape.

<b>Notes</b>
This function is mildly opinionated and is skewed towards helping beginners avoid common pitfalls. This is why it attempts to enforce some rules that you don't have to follow if you write the root reducer manually.

Any reducer passed to <b>combineReducers</b> must satisfy these rules:

=> For any action that is not recognized, it must return the <b>state</b> given to it as the first argument.
=> It must never return <b>undefined</b>. It is too easy to do this by mistake via an early <b>return</b> statement, so <b>combineReducers</b> throws if you do that instead of letting the error manifest itself somewhere else.
=> If the <b>state</b> given to it is <b>undefined</b>, it must return the initial state for this specific reducer. According to the previous rule, the initial state must not be <b>undefined</b> either. It is handy to specify it with optional arguments syntax, but you can also explicitly check the first argument for being <b>undefined</b>.

While <b>combineReducers</b> attempts to check that your reducers conform to some of these rules, you should remember them, and do your best to follow them. <b>combineReducers</b> will check your reducers by passing <b>undefined</b> to them; this is done even if you specify initial state to <b>Redux.createStore(combineReducers(...), initialState).</b> Therefore, you <b>must</b> ensure your reducers work properly when receiving <b>undefined</b> as state, even if you never intend for them to actually receive <b>undefined</b> in your own code.

<b>Tips</b>
This helper is just a convenience! You can write your own <b>combineReducers</b> that works differently, or even assemble the state object from the child reducers manually and write a root reducer function explicitly, like you would write any other function.

You may call <b>combineReducers</b> at any level of the reducer hierarchy. It doesn't have to happen at the top. In fact you may use it again to split the child reducers that get too complicated into independent grandchildren, and so on.
                    `,
          code1: `//"tip"
// This should be rarely needed - Redux Toolkit's "configureStore" method will automatically call "combineReducers" for you if you pass in an object of slice reducers:

const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer
  }
})

// You can still call "combineReducers()" yourself if you need to construct the root reducer manually first.`
        },
        {
          text1: ``,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "createSlice",
      note: [
        {
          text1: `A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

This API is the standard approach for writing Redux logic.

Internally, it uses <b>createAction</b> and <b>createReducer</b>, so you may also use Immer to write "mutating" immutable updates:

<b>Define a Slice</b>
You start by calling createSlice and providing an object with the following properties:
    <b>name</b>: A string that represents the slice's name (used in action types).
    A string name for this slice of state. Generated action type constants will use this as a prefix.

    <b>initialState</b>: The initial state of the slice.
    The initial state value for this slice of state.
This may also be a "lazy initializer" function, which should return an initial state value when called. This will be used whenever the reducer is called with <b>undefined</b> as its state value, and is primarily useful for cases like reading initial state from <b>localStorage</b>.

    <b>reducers</b>: An object where each key is a reducer function that describes how the state changes in response to actions.
    An object containing Redux "case reducer" functions (functions intended to handle a specific action type, equivalent to a single case statement in a switch).

The keys in the object will be used to generate string action type constants, and these will show up in the Redux DevTools Extension when they are dispatched. Also, if any other part of the application happens to dispatch an action with the exact same type string, the corresponding reducer will be run. Therefore, you should give the functions descriptive names.

This object will be passed to <b>createReducer</b>, so the reducers may safely "mutate" the state they are given.

<b>Customizing Generated Action Creators</b>
If you need to customize the creation of the payload value of an action creator by means of a <b>prepare callback</b>, the value of the appropriate field of the <b>reducers</b> argument object should be an object instead of a function. This object must contain two properties: <b>reducer</b> and <b>prepare</b>. The value of the <b>reducer</b> field should be the case reducer function while the value of the <b>prepare</b> field should be the prepare callback function:

<b>The reducers "creator callback" notation</b>
Alternatively, the <b>reducers</b> field can be a callback which receives a "create" object.

The main benefit of this is that you can create async thunks as part of your slice (though for bundle size reasons, you need a bit of setup for this). Types are also slightly simplified for prepared reducers.
`,
          code1: `//Parameters
// createSlice accepts a single configuration object parameter, with the following options:

function createSlice({
    // A name, used in action types
    name: string,
    // The initial state for the reducer
    initialState: State,
    // An object of "case reducers". Key names will be used to generate actions.
    reducers: Record<string, ReducerFunction | ReducerAndPrepareObject>,
    // A "builder callback" function used to add more reducers
    extraReducers?: (builder: ActionReducerMapBuilder<State>) => void,
    // A preference for the slice reducer's location, used by \`combineSlices\` and \`slice.selectors\`. Defaults to \`name\`.
    reducerPath?: string,
    // An object of selectors, which receive the slice's state as their first parameter.
    selectors?: Record<string, (sliceState: State, ...args: any[]) => any>,
})

//----------
// reducers
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
  },
})
// Will handle the action type \`'counter/increment'\`

//---------
// Customizing Generated Action Creators(reducer and prepare) 

import { createSlice, nanoid } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (text) => {
        const id = nanoid()
        return { payload: { id, text } }
      },
    },
  },
})


//--------
// Creator callback for reducers
import { createSlice, nanoid } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    loading: false,
    todos: [],
  },
  reducers: (create) => ({
    deleteTodo: create.reducer((state, action) => {
      state.todos.splice(action.payload, 1)
    }),
    addTodo: create.preparedReducer(
      (text) => {
        const id = nanoid()
        return { payload: { id, text } }
      },
      // action type is inferred from prepare callback
      (state, action) => {
        state.todos.push(action.payload)
      }
    ),
    fetchTodo: create.asyncThunk(
      async (id, thunkApi) => {
        const res = await fetch(\`myApi/todos?id=\${id}\`)
        return await res.json()
      },
      {
        pending: (state) => {
          state.loading = true
        },
        rejected: (state, action) => {
          state.loading = false
        },
        fulfilled: (state, action) => {
          state.loading = false
          state.todos.push(action.payload)
        },
      }
    ),
  }),
})

export const { addTodo, deleteTodo, fetchTodo } = todosSlice.actions



// ------------------ Ex : 1 ---------------
// ** counterSlice.js ** 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for simulating an API call
export const fetchCount = createAsyncThunk('counter/fetchCount', async (amount) => {
    // Simulating a network request
    const response = await new Promise((resolve) => {
        setTimeout(() => resolve({ data: amount }), 1000);
    });
    return response.data; // This will be the payload of the fulfilled action
});

// Create the counter slice
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        loading: false,
        error: null,
    },
    reducers: {
        increment: (state) => {
            state.value += 1; // Mutative update
        },
        decrement: (state) => {
            state.value -= 1; // Mutative update
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCount.pending, (state) => {
                state.loading = true; // Set loading state
                state.error = null;   // Reset error
            })
            .addCase(fetchCount.fulfilled, (state, action) => {
                state.loading = false; // Reset loading state
                state.value += action.payload; // Update value with fetched data
            })
            .addCase(fetchCount.rejected, (state, action) => {
                state.loading = false; // Reset loading state
                state.error = action.error.message; // Capture error message
            })
            // Using addMatcher to respond to all increment actions
            .addMatcher(
                (action) => action.type.endsWith('/increment'), // Matcher function
                (state) => {
                    // Logic to execute when increment actions are dispatched
                    console.log('Increment action dispatched');
                }
            );
    },
});

// Export actions
export const { increment, decrement } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;


// --------- CounterComponent.jsx -----------
// ** ExampleComponent.js ** 
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, fetchCount } from '../../redux/reducer/CounterReducer';

const CounterComponent = () => {
    const dispatch = useDispatch();
    const { value, loading, error } = useSelector((state) => state.counter); // Select counter state

    const handleFetchCount = () => {
        const amount = 5; // Example amount to fetch
        dispatch(fetchCount(amount)); // Dispatch async thunk
    };

    return (
        &lt;div&gt;
            &lt;h1&gt;Count: {value}&lt;/h1&gt;
            {loading &amp;&amp; &lt;p&gt;Loading...&lt;/p&gt;}
            {error &amp;&amp; &lt;p&gt;Error: {error}&lt;/p&gt;}
            &lt;button onClick={() =&gt; dispatch(increment())}&gt;Increment&lt;/button&gt;
            &lt;button onClick={() =&gt; dispatch(decrement())}&gt;Decrement&lt;/button&gt;
            &lt;button onClick={handleFetchCount}&gt;Fetch Count&lt;/button&gt;
        &lt;/div&gt;
    );
};

export default CounterComponent;

// ** RootReducer.js **
import CounterReducer from './CounterReducer';
// import userReducer from './userReducer'

export const RootReducer = combineReducers({
    counter: CounterReducer,
    // userReducer : userReducer
})

`
        },
      ],
    },
    {
      id: 52,
      title: "createReducer",
      note: [
        {
          text1: `A utility that simplifies creating Redux reducer functions. It uses Immer internally to drastically simplify immutable update logic by writing "mutative" code in your reducers, and supports directly mapping specific action types to case reducer functions that will update the state when that action is dispatched.

Redux reducers are often implemented using a <b>switch</b> statement, with one <b>case</b> for every handled action type.`,
          code1: `const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, value: state.value + 1 }
    case 'decrement':
      return { ...state, value: state.value - 1 }
    case 'incrementByAmount':
      return { ...state, value: state.value + action.payload }
    default:
      return state
  }
}`
        },
        {
          text1: `This approach works well, but is a bit boilerplate-y and error-prone. For instance, it is easy to forget the <b>default</b> case or setting the initial state.

The <b>createReducer</b> helper streamlines the implementation of such reducers. It uses a "builder callback" notation to define handlers for specific action types, matching against a range of actions, or handling a default case. This is conceptually similar to a switch statement, but with better TS support.

<b>createReducer</b> is a utility function in Redux Toolkit that simplifies the process of creating a reducer. It allows you to define your reducer logic in a more concise and readable manner, while still maintaining immutability in the state updates. Here's a detailed overview of <b>createReducer</b>:

<b>Key Features of createReducer</b>
    <b>Immutable Updates</b>: It uses Immer under the hood, allowing you to write "mutative" code while ensuring that the state remains immutable. You can directly modify the state in your reducer functions.
    <b>Action Type Mapping</b>: It provides a way to define how the state should change in response to specific action types, using a simpler syntax than traditional reducers.
    <b>Ease of Use</b>: It reduces boilerplate code and improves readability, making it easier to manage state changes.

With <b>createReducer</b>, your reducers instead look like:`,
          code1: `import { createAction, createReducer } from '@reduxjs/toolkit'

const increment = createAction('counter/increment')
const decrement = createAction('counter/decrement')
const incrementByAmount = createAction('counter/incrementByAmount')

const initialState = { value: 0 }

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value++
    })
    .addCase(decrement, (state, action) => {
      state.value--
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload
    })
})`
        },
        {
          text1: `<b>Usage with the "Builder Callback" Notation</b>
                    This function accepts a callback that receives a <b>builder</b> object as its argument. That builder provides <b>addCase, addMatcher</b> and <b>addDefaultCase</b> functions that may be called to define what actions this reducer will handle.

   <b>Parameters</b>
<b>initialState</b> <u>State | (() => State)</u>: The initial state that should be used when the reducer is called the first time. This may also be a "lazy initializer" function, which should return an initial state value when called. This will be used whenever the reducer is called with <u>undefined</u> as its state value, and is primarily useful for cases like reading initial state from <u>localStorage</u>.
<b>builderCallback</b> <u>(builder: Builder) => void</u> A callback that receives a builder object to define case reducers via calls to <u>builder.addCase(actionCreatorOrType, reducer)</u>. 

<b>Builder Methods</b>
<b><u>builder.addCase</u></b>:
Adds a case reducer to handle a single exact action type.
builder.addCase is a method used within the builder callback notation of <u>createReducer</u> in Redux Toolkit. It allows you to define how the state should change in response to specific action types. This method improves readability and makes it easier to manage complex reducer logic.

<u>builder.addCase()</u> has two arguments we need to pass, first is action type, for which case we need to handle reducer state, and the other is a reducer, which contains <b>state</b> and <b>action</b>. So the form has redux state <b>value</b>, and <b>the act</b> includes <b>the type</b> and coming <b>payload</b>.
All calls to <u>builder.addCase</u> must come before any calls to <u>builder.addMatcher</u> or <u>builder.addDefaultCase</u>.
<span style="color:red"> builder.addCase(actionType, reducerFunction); </span>
<b>Parameters</b>
<u>actionCreator</u>: Either a plain action type string, or an action creator generated by createAction that can be used to determine the action type.
This is typically an action creator (like one generated by <u>createAction</u> or <u>createSlice</u>) or a string that represents the action type.
<u>reducer / reducerFunction</u>: The actual case reducer function.
This function takes the current state and any action payload and returns the new state or modifies it directly (thanks to Immer).

<b><u>builder.addMatcher</u></b>:  
<span style="color:red">builder.addMatcher(matcherFunction, reducerFunction);</span>
<b>builder.addMatcher</b> is a method used in Redux Toolkit's builder callback notation for <b>createReducer</b> or <b>createSlice</b>. It allows you to define a reducer that responds to a set of actions that match a specific condition, rather than needing to specify each action type explicitly.

Allows you to match your incoming actions against your own filter function instead of only the <u>action.type</u> property.
If multiple matcher reducers match, all of them will be executed in the order they were defined in - even if a case reducer already matched. All calls to <u>builder.addMatcher</u> must come after any calls to <u>builder.addCase</u> and before any calls to <u>builder.addDefaultCase</u>.

<u>Flexible Matching</u>: You can define a custom matching function that determines which actions should trigger the reducer logic. This is useful when you want to handle multiple actions with similar characteristics.
<u>Cleaner Code</u>: Instead of adding multiple addCase calls for different actions, you can group them using a matcher, reducing boilerplate and improving readability.

<b>Parameters</b>
<u>matcher</u> A matcher function. In TypeScript, this should be a <a href="https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates" target="_blank">type predicate</a> function
This is a function that takes an action as an argument and returns <u>true</u> if the action should be handled by the reducer. It can also return <u>false</u> if the action should not be handled.
<u>reducer</u> The actual case reducer function.
This function updates the state based on the matched action.
`,
          code1: `import { createAction, createReducer } from '@reduxjs/toolkit'

const increment = createAction('increment')
const decrement = createAction('decrement')

function isActionWithNumberPayload(action) {
  return typeof action.payload === 'number'
}

const reducer = createReducer(
  {
    counter: 0,
    sumOfNumberPayloads: 0,
    unhandledActions: 0,
  },
  (builder) => {
    builder
      .addCase(increment, (state, action) => {
        // action is inferred correctly here
        state.counter += action.payload
      })
      // You can chain calls, or have separate \`builder.addCase()\` lines each time
      .addCase(decrement, (state, action) => {
        state.counter -= action.payload
      })
      // You can apply a "matcher function" to incoming actions
      .addMatcher(isActionWithNumberPayload, (state, action) => {})
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {})
  }
)
  

//-----------
// increment and decrement example using builder callback
import { createSlice, createAction, createReducer } from '@reduxjs/toolkit';

// Define actions
export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const incrementByAmount = createAction('incrementByAmount');

// Initial state
const initialState = {
    value: 0,
};

// Create the reducer using the builder callback
const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state) => {
            state.value += 1; // Mutative update
        })
        .addCase(decrement, (state) => {
            state.value -= 1; // Mutative update
        });
});

// Export the reducer
export default counterReducer;



//----------
Ex :3
// createReducer.js
import { createAction, createReducer } from '@reduxjs/toolkit';

// Define action creators
export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');
export const addValue = createAction('counter/addValue'); // New action for adding a specific value

// Matcher to check if the action payload is a number
const isNumberAction = (action) => typeof action.payload === 'number';

// Create the initial state
const initialState = {
  count: 0,
};

// Create the reducer using the builder callback
const counterReducer = createReducer(initialState, (builder) => {
  // Handle increment and decrement actions
  builder
    .addCase(increment, (state) => {
      state.count += 1; // Increment the count
    })
    .addCase(decrement, (state) => {
      state.count -= 1; // Decrement the count
    })
    // Add matcher for actions where the payload is a number
    .addMatcher(
      isNumberAction,
      (state, action) => {
        console.log(action.payload)
        // Add the number payload to the count
        state.count += action.payload;
      }
    );
});
export default counterReducer;



// CounterComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/reducer/CounterReducer'; // Adjust the path as needed

const CounterComponent = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count); // Access the count

  const handleIncrement = () => {
    dispatch(increment()); // Dispatch increment action
  };

  const handleDecrement = () => {
    dispatch(decrement()); // Dispatch decrement action
  };

  const handleAddNumber = () => {
    const number = prompt('Enter a number to add:'); // Prompt user for a number
    const parsedNumber = Number(number);
    if (!isNaN(parsedNumber)) {
      dispatch({ type: 'counter/addValue', payload: parsedNumber }); // Dispatch with number payload
    }
  };

  return (
    &lt;div&gt;
      &lt;h1&gt;Count: {count}&lt;/h1&gt;
      &lt;button onClick={handleIncrement}&gt;Increment&lt;/button&gt;
      &lt;button onClick={handleDecrement}&gt;Decrement&lt;/button&gt;
      &lt;button onClick={handleAddNumber}&gt;Add Number&lt;/button&gt;
    &lt;/div&gt;
  );
};

export default CounterComponent;

// "Adding a Value": When a user inputs a number, it will be handled either through the new addValue action or through the addMatcher if you dispatch an action with a numeric payload.
// "Using addMatcher": This will allow the application to handle any action that fits the criteria of having a numeric payload.

//===========
// Ex : 3

import { createSlice } from "@reduxjs/toolkit";

const initialState = { x: 0, y: 0 };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // action creators to be auto-generated
        incrementX(state, action) {
            state.x += action.payload;
        },
        incrementY(state, action) {
            state.y += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                // divide10, multiply10
                (action) => action.type.endsWith("10"),
                (state, action) => {
                    console.log("Matched action:", action.type.split('-')[1]);
                    if (action.type.split('/')[1].startsWith('divide')) {
                        state.x /= 10;
                        state.y /= 10;
                    } else if (action.type.split('/')[1].startsWith('multiply')) {
                        state.x *= 10;
                        state.y *= 10;
                    }
                }
            )
            // .addDefaultCase(() => initialState); // reset
    } 
});
export const { incrementX, incrementY } = counterSlice.actions;
export default counterSlice.reducer;



// IncrementDecrementList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementX, incrementY } from '../../../redux/reducer/matching utility/isAllOf_Reducer';

const UserList = () => {
  const dispatch = useDispatch();
  const incDec = useSelector((state) => state.auth);

  return (
    &lt;div&gt;
      { JSON.stringify(incDec) }
      &lt;button onClick={() =&gt; dispatch(incrementX(1))}&gt; incrementX &lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch(incrementY(1))}&gt; incrementY &lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch({type : \`counter/divide-\${incDec.x}\`})}&gt;Divide by {incDec.x}&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch({type : \`counter/multiply-\${incDec.y}\`})}&gt;Multiply by {incDec.y}&lt;/button&gt;
    &lt;/div&gt;
  );
};

export default UserList;
`
        },
        {
          text1: `<b>createSlice vs createReducer </b>
                    createSlice: A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

createReducer: A utility that simplifies creating Redux reducer functions. It uses Immer internally to drastically simplify immutable update logic by writing "mutative" code in your reducers, and supports directly mapping specific action types to case reducer functions that will update the state when that action is dispatched.`,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "CreateAction",
      note: [
        {
          text1: `A helper function for defining a Redux action type and creator.
<span style="color:red"> function createAction(type, prepareAction?) </span>
The usual way to define an action in Redux is to separately declare an action type constant and an action creator function for constructing actions of that type.

In Redux Toolkit, createAction is a utility function used to create action creators. Action creators are functions that return an action object, which is a plain JavaScript object describing what happened in your application (including the type of action and any associated data).
<b>Key Features of createAction</b>
    <b>Simplicity</b>: createAction simplifies the process of creating action creators by automatically generating action types and action creators.
    <b>Type Safety</b>: It ensures that the action type is consistent and prevents errors due to typos.
    <b>Supports Payload</b>: You can define a payload for the action, and createAction will handle it for you.

    <b>Benefits</b>
    <b>Automatic Type Generation</b>: You don't need to manually define the action type as a string. <u>createAction</u> generates it for you.
    <b>Payload Handling</b>: The payload is automatically included in the action object, making it easy to pass data with actions.
    <b>Consistent Action Types</b>: Using createAction helps avoid common mistakes like typos in action type strings
    `,
          code1: `const INCREMENT = 'counter/increment'

function increment(amount) {
  return {
    type: INCREMENT,
    payload: amount,
  }
}

const action = increment(3)
// { type: 'counter/increment', payload: 3 }

// The "createAction" helper combines these two declarations into one. It takes an action type and returns an action creator for that type. The action creator can be called either without arguments or with a "payload" to be attached to the action.

//--------------

import { createAction } from '@reduxjs/toolkit'

const increment = createAction('counter/increment')

let action = increment()
// { type: 'counter/increment' }

action = increment(3)
// returns { type: 'counter/increment', payload: 3 }

console.log(\`The action type is: \${increment.type}\`)
// 'The action type is: counter/increment'


//--------------
// "Consistent Action Types": Using createAction helps avoid common mistakes like typos in action type strings.
const incrementAction = { type: 'INCREMNT', payload: 1 }; // Typo here

// If you have a typo, it can lead to bugs that are difficult to track down. For instance, if your reducer is checking for the action type:

function counterReducer(state, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + action.payload };
        // ...
    }
}
`
        },
        {
          text1: `<b>Using Prepare Callbacks to Customize Action Contents</b>
                    
                    By default, the generated action creators accept a single argument, which becomes <b>action.payload</b>. This requires the caller to construct the entire payload correctly and pass it in.

In many cases, you may want to write additional logic to customize the creation of the <b>payload</b> value, such as accepting multiple parameters for the action creator, generating a random ID, or getting the current timestamp. To do this, <b>createAction</b> accepts an optional second argument: a "prepare callback" that will be used to construct the payload value.

If provided, all arguments from the action creator will be passed to the prepare callback, and it should return an object with the <b>payload</b> field (otherwise the payload of created actions will be <b>undefined</b>). Additionally, the object can have a <b>meta</b> and/or an <b>error</b> field that will also be added to created actions. <b>meta</b> may contain extra information about the action, <b>error</b> may contain details about the action failure. These three fields (<b>payload, meta</b> and <b>error</b>) adhere to the specification of Flux Standard Actions.
                    `,
          code1: `import { createAction, nanoid } from '@reduxjs/toolkit'

const addTodo = createAction('todos/add', function prepare(text) {
  return {
    payload: {
      text,
      id: nanoid(),
      createdAt: new Date().toISOString(),
    },
  }
})

console.log(addTodo('Write more docs'))
/**
 * {
 *   type: 'todos/add',
 *   payload: {
 *     text: 'Write more docs',
 *     id: '4AJvwMSWEHCchcWYga3dj',
 *     createdAt: '2019-10-03T07:53:36.581Z'
 *   }
 * }
 **/`
        },
        {
          text1: `<b>Usage with createReducer()</b>
Action creators can be passed directly to <b>addCase</b> in a createReducer() build callback.`,
          code1: `import { createAction, createReducer } from '@reduxjs/toolkit'

const increment = createAction('counter/increment')
const decrement = createAction('counter/decrement')

const counterReducer = createReducer(0, (builder) => {
  builder.addCase(increment, (state, action) => state + action.payload)
  builder.addCase(decrement, (state, action) => state - action.payload)
})`
        },
        {
          text1: `<b>actionCreator.match</b>
Every generated actionCreator has a <b>.match(action)</b> method that can be used to determine if the passed action is of the same type as an action that would be created by the action creator.

In Redux Toolkit, each action creator created using <b>createAction</b> or <b>createSlice</b> automatically generates a <b>match</b> method. This method is useful for type-safe checking of action objects against the action creator. Here's a breakdown of how <b>actionCreator.match</b> works and its use cases.

<b>What is actionCreator.match?</b>
The match method is a function that allows you to verify if a given action object matches the type and structure of the action created by the action creator. It returns a boolean indicating whether the action matches.

<b>How to Use actionCreator.match</b>
    <u>1) Creating an Action Creator</u>: When you create an action using createAction or in a slice using createSlice, you can use the match method to validate actions
    <u>2) Using match in a Reducer or Middleware</u>: You can use match in a reducer, middleware, or anywhere you want to check if an action is of a specific type.
`,
          code1: `const counterReducer = (state = { value: 0 }, action) => {
  if (increment.match(action)) {
    return { ...state, value: state.value + 1 };
  }
  if (decrement.match(action)) {
    return { ...state, value: state.value - 1 };
  }
  return state;
};

//---------
// Ex : 1
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state, action) => {
        // console.log(action.payload)
      state.value = 0
    },
  },
});

// Export actions
export const { increment, decrement, reset } = counterSlice.actions;

// Export reducer
export default counterSlice.reducer;


//------

// Counter.js
import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../../../redux/reducer/matching utility/isAllOf_Reducer';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.auth.value);

  const handleIncrement = () => {
    const action = increment();
    dispatch(action);
    checkActionType(action);
  };

  const handleDecrement = () => {
    const action = decrement();
    dispatch(action);
    checkActionType(action);
  };

  const handleReset = () => {
    const action = reset(0);
    dispatch(action);
    checkActionType(action);
  };

  const checkActionType = (action) => {
    if (increment.match(action)) {
      console.log("This is an increment action!", increment.match(action));
    } else if (decrement.match(action)) {
      console.log("This is a decrement action!", decrement.match(action));
    } else if (reset.match(action)) {
      console.log("This is a reset action!", reset.match(action));
    }
  };

  return (
    &lt;div&gt;
      &lt;h1&gt;Counter: {count}&lt;/h1&gt;
      &lt;button onClick={handleIncrement}&gt;Increment&lt;/button&gt;
      &lt;button onClick={handleDecrement}&gt;Decrement&lt;/button&gt;
      &lt;button onClick={handleReset}&gt;Reset&lt;/button&gt;
    &lt;/div&gt;
  );
};

export default Counter;

`
        },
      ],
    },
    {
      id: 52,
      title: "matching utilities",
      note: [
        {
          text1: `<b>matching utilities</b>
                    Redux Toolkit exports several other matching utilities that you can leverage to check for specific kinds of actions. These are primarily useful for writing the builder.addMatcher() cases in createSlice and createReducer, as well as custom middleware.:

<b>isAllOf</b> - returns true when all conditions are met
<b>isAnyOf</b> - returns true when at least one of the conditions are met
<b>isAsyncThunkAction</b> - accepts one or more action creators and returns true when all match
<b>isPending</b> - accepts one or more action creators and returns true when all match
<b>isFulfilled</b> - accepts one or more action creators and returns true when all match
<b>isRejected</b> - accepts one or more action creators and returns true when all match
<b>isRejectedWithValue</b> - accepts one or more action creators and returns true when all match`,
          code1: ``
        },
        {
          text1: `<b>isAllOf in Redux Toolkit</b>

<b>Description</b>:isAllOf is a utility function provided by Redux Toolkit to simplify the process of matching multiple action types in your Redux reducers or middleware. It is particularly useful in scenarios where you want to perform a specific action only when all of a set of actions have been dispatched.
Use Cases
    <b>Multiple Action Checks</b>: It's useful when you want to perform logic that should only execute if several actions are dispatched at the same time. For instance, you may want to update the state only if two specific actions occur.
    <b>Complex Reducer Logic</b>: It helps to manage more complex reducer logic where different combinations of actions may require different state updates.
    
    <b>Purpose</b>:

    isAllOf checks if a dispatched action matches all of the specified action creators. It allows you to create more complex conditions in your reducer logic.

<b>Function Signature</b>:

isAllOf(...actionCreators)

    It accepts one or more action creators as arguments.

<b>Returns a Function</b>:

    It returns a function that can be used to test an action. This function takes an action as an argument and returns true if the action matches all of the provided action creators, or false otherwise.
    `,
          code1: `// formSlice.js
import { createSlice, createAction, isAllOf } from '@reduxjs/toolkit';

// Define action creators
export const validateForm = createAction('form/validate');
export const submitForm = createAction('form/submit');

// Create the initial state for the form
const initialState = {
  isValid: false,
  submitted: false,
};

// Create the slice
const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(validateForm, (state) => {
        state.isValid = true; // Assume form is valid after this action
      })
      .addMatcher(
        (action) => isAllOf(action, validateForm, submitForm), // Check if both actions are dispatched
        (state) => {
          if (state.isValid) {
            state.submitted = true; // Update submitted state if valid
            console.log('Form submitted successfully!');
          } else {
            console.log('Form is not valid, submission ignored.');
          }
        }
      );
  },
});

// Export the reducer
export default formSlice.reducer;


//------
import isAllOfReducer from './matching utility/isAllOf_Reducer'
export const RootReducer = combineReducers({
    // counter: CounterReducer,
    // userReducer : userReducer,
    formSubmit : isAllOfReducer
})


//----
// FormComponent.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validateForm, submitForm } from '../../../redux/reducer/matching utility/isAllOf_Reducer';

const FormComponent = () => {
  const dispatch = useDispatch();
  const { isValid, submitted } = useSelector((state) => state.formSubmit);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue){
        // Validate the form
        dispatch(validateForm());
    }
    // Submit the form
    dispatch(submitForm());
  };

  return (
    &lt;div&gt;
      &lt;h2&gt;Form Submission Example&lt;/h2&gt;
      &lt;form onSubmit={handleSubmit}&gt;
        &lt;input
          type=&quot;text&quot;
          value={inputValue}
          onChange={handleInputChange}
          placeholder=&quot;Enter something...&quot;
        /&gt;
        &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
      &lt;/form&gt;
      {submitted &amp;&amp; (
        &lt;p&gt;{isValid ? &#39;Form submitted successfully!&#39; : &#39;Form not valid.&#39;}&lt;/p&gt;
      )}
    &lt;/div&gt;
  );
};

export default FormComponent;

//============
Ex : 2

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
      title: "Extra Reducers",
      note: [
        {
          text1: `<b>extraReducers</b>
                    Conceptually, each slice reducer "owns" its slice of state. There's also a natural correspondence between the update logic defined inside <b>reducers</b>, and the action types that are generated based on those.

However, there are many times that a Redux slice may also need to update its own state in response to action types that were defined elsewhere in the application (such as clearing many different kinds of data when a "user logged out" action is dispatched). This can include action types defined by another <b>createSlice</b> call, actions generated by a <b>createAsyncThunk</b>, RTK Query endpoint matchers, or any other action. In addition, one of the key concepts of Redux is that many slice reducers can independently respond to the same action type.

<b><u>extraReducers</u> allows <u>createSlice</u> to respond and update its own state in response to other action types besides the types it has generated.</b>

As with the <u>reducers</u> field, each case reducer in <u>extraReducers</u> is wrapped in Immer and may use "mutating" syntax to safely update the state inside.

However, unlike the <b>reducers</b> field, each individual case reducer inside of <b>extraReducers</b> will not generate a new action type or action creator.

If two fields from <b>reducers</b> and <b>extraReducers</b> happen to end up with the same action type string, the function from <b>reducers</b> will be used to handle that action type.

<b>The extraReducers "builder callback" notation</b>
Similar to <b>createReducer</b>, the <b>extraReducers</b> field uses a "builder callback" notation to define handlers for specific action types, matching against a range of actions, or handling a default case. This is conceptually similar to a switch statement, but with better TS support as it can infer the action type from the provided action creator. It's particularly useful for working with actions produced by <b>createAction</b> and <b>createAsyncThunk</b>.

`,
          code1: `import { createAction, createSlice } from '@reduxjs/toolkit'
const incrementBy = createAction('incrementBy')
const decrement = createAction('decrement')

function isRejectedAction(action) {
  return action.type.endsWith('rejected')
}

createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(incrementBy, (state, action) => {
        // action is inferred correctly here if using TS
      })
      // You can chain calls, or have separate \`builder.addCase()\` lines each time
      .addCase(decrement, (state, action) => {})
      // You can match a range of action types
      .addMatcher(
        isRejectedAction,
        // \`action\` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
        (state, action) => {}
      )
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {})
  },
})`
        },
        {
          text1: `In Redux Toolkit, <b>extraReducers</b> is an optional configuration object that allows you to define additional reducers that respond to actions generated by other parts of your application, such as thunks or other slices.

The keys in <b>extraReducers</b> are action types, and the values are reducer functions that should be executed in response to those actions. The syntax for defining an extra reducer is as follows:

In below example, <b>actionType</b> is the type of the action that the reducer should respond to, and <b>(state, action) => { ... }</b> is the reducer function itself.

Now, regarding your question about <b>thunk</b> inside the <b>[]:</b> when you create a thunk with <b>createAsyncThunk</b>, it generates three different action types: <b>pending, fulfilled</b>, and <b>rejected</b>. Each of these action types represents a different stage in the lifecycle of the asynchronous operation that the thunk is performing.

To handle these actions in your <b>extraReducers</b> section, you need to specify the action type and provide a reducer function that should be executed in response to that action. The syntax for defining a reducer that responds to a <b>fulfilled</b> action generated by a thunk is as follows:

In below example, <b>myThunk</b> is the name of the thunk that you're defining, and <b>fulfilled</b> is the action type that represents the successful completion of the asynchronous operation.

<b>Here's what each of the arguments means:</b>
<b>typePrefix</b>: A string that will be used as a prefix for the action types that are generated by the thunk. For example, if you pass <b>todos</b> as the typePrefix, the generated action types will be <b>todos/pending</b>, <b>todos/fulfilled</b>, and <b>todos/rejected</b>.
<b>payloadCreator</b>: A function that should return a promise that resolves with the payload of the <b>fulfilled</b> action. This function can also accept an optional second argument, which is an object that contains some <b>extra</b> properties that are passed to the thunk by default. For example, you might pass an extra object that contains an API client, so that the thunk can use that client to make API requests.
<b>options</b>: An optional object that can be used to configure various aspects of the thunk, such as how the <b>pending</b> and <b>rejected</b> actions are handled, or whether to overwrite existing state or merge it when the <b>fulfilled</b> action is handled.


<span style="color:red">createSlice.ts:414 Uncaught Error: The object notation for \`createSlice.extraReducers\` has been removed. Please use the 'builder callback' notation instead: </span>

// object notation
const counterReducer = createReducer(initialState, <b><span style="color:orange">{
    [increment]: (state) => {
        state.value += 1; // Mutative update
    },
    [decrement]: (state) => {
        state.value -= 1; // Mutative update
    }
}</span></b> );

if you get above 
The object syntax for createSlice.extraReducers has been <a href="https://github.com/reduxjs/redux-toolkit/issues/2301" target="_blank"> deprecated since version 1.9.0</a> and then removed in v2.0.0. It's explained both in <a href="https://github.com/reduxjs/redux-toolkit/releases/tag/v2.0.0" target="_blank">v2.0.0 changelogs</a> and in the <a href="https://redux.js.org/usage/migrations/migrating-rtk-2#object-syntax-for-createsliceextrareducers-and-createreducer-removed" target="_blank">migration guide to RTK 2.0 and Redux 5.0</a> how to fix it. As the error says, you have to convert the object into the <b>builder callback</b> syntax:
`,
          code1: `//Syntex:
                    extraReducers: {
                        [actionType]: (state, action) => {
                            // reducer logic goes here
                        }
                    }

                    // "fulfilled" action generated by a thunk is as follows:
                    extraReducers: {
  [myThunk.fulfilled]: (state, action) => {
    // reducer logic goes here
  }
}

// here's the syntax for createAsyncThunk:
const myAsyncThunk = createAsyncThunk(
  typePrefix,
  payloadCreator,
  options?
);

// Ex : 1
export const getCurrentTheme = createAsyncThunk('theme/getCurrentTheme',
    async () => {
        // console.log('env', configEnv.BASE_URL)
        const result = await axios.get(\`\${configEnv.BASE_URL}/currentTheme\`, )
        // console.log(result.data)
        return result.data
    }
)

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    extraReducers: {
        [getCurrentTheme.pending] : (state) => {
            // state.loading = true
        },
        [getCurrentTheme.fulfilled]: (state, { payload }) => {
            state.currentTheme = payload
        }
    }
})

// createSlice.ts:414 Uncaught Error: The object notation for \`createSlice.extraReducers\` has been removed. Please use the 'builder callback' notation instead:
                    `
        },
        {
          text1: `In this example, <b>fetchUserData</b> is the name of the thunk that we're defining. The <b>payloadCreator</b> function takes a <b>userId</b> argument and an <b>extra</b> argument that contains an API client. It uses the API client to fetch the user data, and returns the data property of the response as the payload of the <b>fulfilled</b> action.

                    <b><u>builder callback</u>:</b>

                    The <b>builder callback</b> in Redux Toolkit is a new way to define extraReducers in a slice using a more flexible and intuitive syntax. This approach was introduced to replace the deprecated object notation for extraReducers, making it easier to manage complex state changes and type checking, especially with TypeScript.

                    In recent updates to Redux Toolkit, the way we define reducers has evolved. The traditional object notation for createReducer has been replaced by a more flexible and powerful builder callback notation. This change is designed to offer better TypeScript support and more control over reducer logic.

                    In 2nd example, we're using <b>createAsyncThunk</b> to define the <b>fetchUserData</b> thunk, and we're using it in the <b>extraReducers</b> section of a slice definition for the <b>user</b> domain. The <b>extraReducers</b> section is a function that takes a <b>builder</b> object, which has methods like <b>addCase</b> and <b>addMatcher</b> that allow you to define how the slice should respond to different actions.

In this case, we're using <b>builder.addCase</b> to define three cases: <b>pending, fulfilled, and rejected</b>. Each case takes two arguments: the action type, which is generated by the <b>createAsyncThunk</b> function, and a callback function that takes the <b>state</b> and <b>action</b> arguments.

In the <b>pending</b> case, we're setting the <b>status</b> property of the <b>state</b> to "loading". In the <b>fulfilled</b> case, we're setting the status property to <b>succeeded</b> and the <b>data</b> property to the payload of the action. In the <b>rejected</b> case, we're setting the <b>status</b> property to <b>failed</b> and the <b>error</b> property to the error message of the action.

When the <b>fetchUserData</b> thunk is dispatched, it will trigger the <b>pending</b> case first, then either the <b>fulfilled</b> or <b>rejected</b> case, depending on whether the promise is resolved or rejected.
                    `,
          code1: `//Here's an example of how you might use createAsyncThunk to define a thunk that fetches some data from an API:
// Ex : 1
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (userId, { extra }) => {
    //const { apiClient } = extra;
    const response = await axios.get(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);
    return response.data;
  }
);

export default fetchUserData;


//----------
// here's an example of how to use "createAsyncThunk" with an extra reducer:
//Ex : 2

import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "./thunks";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
`
        },
        {
          text1: ``,
          code1: ``
        },
        {
          text1: `reducer vs extrareducers
                    <div class='table-res'>
                    <table>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Reducers</th>
                                <th>ExtraReducers</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Purpose</strong></td>
                                <td>Handle actions specific to the slice</td>
                                <td>Handle actions from other slices or async actions</td>
                            </tr>
                            <tr>
                                <td><strong>Defined In</strong></td>
                                <td>Directly in the slice definition</td>
                                <td>In the <code>extraReducers</code> property of the slice</td>
                            </tr>
                            <tr>
                                <td><strong>Action Types</strong></td>
                                <td>Defined by the slice (e.g., <code>increment</code>, <code>decrement</code>)</td>
                                <td>Can handle any action type, including those from <code>createAsyncThunk</code></td>
                            </tr>
                            <tr>
                                <td><strong>Use Case</strong></td>
                                <td>Typical synchronous updates</td>
                                <td>Handling asynchronous logic or cross-slice actions</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    `,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "createAsyncThunk",
      note: [
        {
          text1: `In Redux, middleware has always been used to perform asynchronous tasks. Asynchronous tasks means things you have to wait for, such as fetching data from an API. A middleware is designed to enable developers to write logic that has side effects. An example is a package called redux-thunk.
                    
                    Redux toolkit comes with built-in dependencies such as <u>redux-thunk</u>, because Redux toolkit includes <u>redux-thunk</u> by default, we can use <u>createAsyncThunk</u> to make asynchronous requests.

<b>createAsyncThunk</b>
createAsyncThunk is where we perform asychronous tasks in our slice. It receives two parameters

=> name of the action, the standard convention is <b>[slice name]/[action name]</b> such as <u>posts/fetchPosts</u>
=> The callback function that performs the API call and returns the result when it is finished. Our API call returns a promise (which is an object that represents the status of an asynchronous operation, in our case an API call).

For each action that is created using <u>createAsyncThunk</u>, there are three probable state for the promise returned. <u>pending, fulfilled, rejected</u>.

You decide what Redux should do in the three (3) different stages of the API call. Inside our slice we will add a property called <u>extraReducers</u> that holds a couple functions to handle the return of the API: <u>pending, fulfilled and rejected</u>.

<b>extraReducers</b>
You use extraReducers to handle actions that are created by <u>createAsyncThunk</u>. Based on the status of the promise, we will update our state.

createAsyncThunk is a utility function provided by <b>Redux Toolkit</b> that simplifies the process of handling <b>asynchronous logic</b> (like making API requests) within Redux. It allows you to define a "thunk" action that automatically handles the <b>dispatching of pending, fulfilled, and rejected action types</b> based on the lifecycle of the asynchronous operation.

<b>Why Use createAsyncThunk?</b>
When you handle asynchronous operations like fetching data, you often need to dispatch multiple actions:

    <b>Request started</b> (e.g., to set loading state)
    <b>Request succeeded</b> (to store the result)
    <b>Request failed</b> (to store the error)

<u>createAsyncThunk</u> automates this process, generating these actions for you, and helping you manage the state transitions without needing to manually write reducers for each case.

<u>How It Works</u>
    <b>Action Types</b>: createAsyncThunk automatically generates three action types based on the provided string prefix</b>:
        data/fetch/pending (when the async operation starts)
        data/fetch/fulfilled (when the async operation completes successfully)
        data/fetch/rejected (when the async operation fails)
    <b>Async Function</b>: The second argument is a function that performs the async operation. It can return a promise, and Redux Toolkit will automatically handle resolving the promise.
    <b>Action Payloads</b>: The function should return the data you want to pass as the payload when the async operation is successful. If the operation fails, you can throw an error, and the error will be passed to the rejected action.
`,
          code1: `import { createAsyncThunk } from '@reduxjs/toolkit';

// Define an async thunk action
const fetchData = createAsyncThunk(
  'data/fetch',       // Action type prefix
  async (arg, thunkAPI) => {  // The payload creator function
    const response = await fetch('https://api.example.com/data');
    return response.json();  // Return the result (which will be the payload of the fulfilled action)
  }
);

// Ex: 1
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'data/fetchData',  // Action type prefix
  async (endpoint) => {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();  // Data returned from the async function
  }
);



import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './path-to-thunk';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;  // Start loading
        state.error = null;    // Clear any previous errors
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.items = action.payload;  // Store the fetched data
        state.loading = false;  // Stop loading
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;  // Stop loading
        state.error = action.error.message;  // Store the error message
      });
  }
});

export default dataSlice.reducer;

//--
import { useDispatch } from 'react-redux';
import { fetchData } from './path-to-thunk';

const MyComponent = () => {
  const dispatch = useDispatch();

  const loadData = () => {
    dispatch(fetchData('https://api.example.com/data'));
  };

  return &lt;button onClick={loadData}&gt;Load Data&lt;/button&gt;;
};


// Ex : 2
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

var tid;
function fetchMyData(i) {
  // simulating data fetching from server
  return new Promise((resolve, reject) => {
    tid = setTimeout(() => resolve(Math.random()), i * 1000);
    setTimeout(reject, 5000);
  });
}

const fetchData = createAsyncThunk(
  "data/fetchStatus",
  async (i, thunkAPI) => {
    //const state = thunkAPI.getState();
    //const extra = thunkAPI.extra;
    //const requestId = thunkAPI.requestId;
    //const signal = thunkAPI.signal;
    //console.log(state, extra, requestId, signal);
    //thunkAPI.dispatch({ type: "data/cancel" });
    //thunkAPI.rejectWithValue("rejected", { a: 0 });
    //thunkAPI.fulfillWithValue("fulfilled", { a: 0 });
    try {
      return await fetchMyData(i);
    } catch (err) {
      return thunkAPI.rejectWithValue("time out!");
    }
  },
  {
    // condition: (arg, { getState, extra }) => true, // 'false' to prevent running payload creator
    // dispatchConditionRejection: true, // 'true' to dispatch 'rejected' action when condition() returns 'false'
    // idGenerator: ()=>Math.random(),    // function generating 'requestId', defaults to nanoid()
    // serializeError: console.error,    // replaces the internal miniSerializeError method
    // getPendingMeta: ({ arg, requestId }, { getState, extra })=>({})   // creates an object that will be merged into the pendingAction.meta field.
  }
);

const initialState = 0;

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        console.log(action);
        clearTimeout(tid);
        return "fetching data...";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        console.log(action);
        return action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        console.log(action);
        if (action.meta.aborted) return "cancelled!";
        return action.payload;
      });
  }
});

export { fetchData };
export const { cancel } = dataSlice.actions;
export default dataSlice.reducer;


//--

// Counter.js
import React,{useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../redux/reducer/matching utility/isAllOf_Reducer';
import { unwrapResult } from "@reduxjs/toolkit";

export default () => {
  const v = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const abort = useRef();
  return (
    &lt;div&gt;
      &lt;span&gt;{v}&lt;/span&gt;
      &lt;button
        onClick={() =&gt; {
          const d = dispatch(fetchData(3));
          abort.current = d.abort;
          d.then(() =&gt; console.log(&quot;resolved&quot;));
        }}
      &gt;
        Fetch Data
      &lt;/button&gt;
      
      &lt;button
        onClick={() =&gt; {
          const d = dispatch(fetchData(6));
          abort.current = d.abort;
          d.unwrap() //  to extract the payload of a fulfilled action or to throw either the error or, if available, payload created by rejectWithValue from a rejected action
            // .then(unwrapResult)     // alternative to .unwrap()
            .then((originalPromiseResult) =&gt; {
              console.log(&quot;originalPromiseResult&quot;, originalPromiseResult);
            })
            .catch((rejectedValueOrSerializedError) =&gt; {
              console.log(
                &quot;rejectedValueOrSerializedError&quot;,
                rejectedValueOrSerializedError
              );
            });
        }}
      &gt;
        Fetch Data Slowly
      &lt;/button&gt;
      &lt;button onClick={() =&gt; abort.current()}&gt;Cancel&lt;/button&gt;
    &lt;/div&gt;
  );
};
`
        }
      ],
    },
    {
      id: 52,
      title: "useSelect",
      note: [
        {
          text1: `The <b>useSelector</b> hooks allow you to extract data or the state from the Redux store using a selector function. It is equivalent to the mapStateToProps argument used in the connect() function conceptually.

-> when an action is performed, the <b>useSelector()</b> hook will compare the results of the previous and current selector values and if they are different then the component is bound to re-render otherwise it stays the same.
-> the main difference between the two is that the mapStateToProps pass down multiple values as props whereas the <b>useSelector</b> will take the current state as the argument and returns a single variable as a result.
-> The function will be called with the entire redux store state as an argument and runs whenever the functional components render the page. The <b>useSelector()</b> hook will subscribe to the redux store and runs whenever an action is dispatched. You may call the <b>useSelector()</b> any number of times in a single function. However, each call will create an individual subscription to the redux store.

A <b>selector function</b> is any function that accepts the Redux store state (or part of the state) as an argument, and returns data that is based on that state.
Selectors are primarily used to encapsulate logic for looking up specific values from state, logic for actually deriving values, and improving performance by avoiding unnecessary recalculations.

The selector will be called with the entire Redux store state as its only argument. The selector may return any value as a result, including directly returning a value that was nested inside state, or deriving new values. The return value of the selector will be used as the return value of the useSelector() hook.

The selector will be run whenever the function component renders (unless its reference hasn't changed since a previous render of the component so that a cached result can be returned by the hook without re-running the selector). useSelector() will also subscribe to the Redux store, and run your selector whenever an action is dispatched.

When an action is <b>dispatched, useSelector()</b> will do a reference comparison of the previous selector result value and the current result value. If they are different, the component will be forced to re-render. <u>If they are the same, the component will not re-render. useSelector() uses strict === reference equality checks by default, not shallow equality (see the following section for more details).</u>

<b> useSelector and useDispatch </b>:- 
=> Before the introduction of hooks in react, React redux used the higher order component connect() to connect a component to the redux store and read the values from the redux store each time a state gets updated. The connect() function takes two optional parameters- mapStateToProps, and mapDispatchToProps.

=> useSelector and useDispatch served as an alternative to the connect() function. The useSelector hook is equivalent to the mapStateToProps and takes an argument that returns the part of the state that the component needs whereas the hook useDispatch acts just like mapDispatchToProps.
`,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "createSelector",
      note: [
        {
          text1: `A "selector" is any function that accepts the Redux state tree as an argument, and returns some extracted or derived data. That includes plain functions like you showed.

In many cases, you want to memoize the calculation of the results, such as mapping over an array of items, so that it's not re-calculated unless the inputs have changed. Reselect's <b>createSelector</b> creates memoized selector functions that only recalculate the output if the inputs change.

-> Selectors can compute derived data, allowing Redux to store the minimal possible state.
-> Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
-> Selectors are composable. They can be used as input to other selectors.

Reselect exports a createSelector API, which generates memoized selector functions. createSelector accepts one or more "input" selectors, which extract values from arguments, and an "output" selector that receives the extracted values and should return a derived value. If the generated selector is called multiple times, the output will only be recalculated when the extracted values have changed.`,
          code1: `//When you call a selector (eg. selectSum), Reselect will run ALL your input selectors (eg. selectX) with all of the arguments you gave, and looks at the returned values. If any of the results are === different than before, it will re-run the output selector, and pass in those results as the arguments. If all of the results of the input selectors are the same as the last time, it will skip re-running the output selector, and just return the cached final result from before.

// ----------------
// reducer.js
// ----------------
import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = { x: 0, y: 0, z: 0 };

const counterSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // action creators to be auto-generated
    incrementX(state, action) {
      state.x += action.payload;
    },
    incrementY(state, action) {
      state.y += action.payload;
    },
    incrementZ(state, action) {
      state.z += action.payload;
    }
  }
});
export const { incrementX, incrementY, incrementZ } = counterSlice.actions;
export default counterSlice.reducer;

// Try to define reusable selectors alongside their corresponding reducers.
// input selectors
const selectX = (state) => state.x;
const selectY = (state) => state.y;
const selectZ = (state) => state.z;

const selectSum = createSelector(
  [selectX, selectY, selectZ], // notation 1
  (x, y, z) => x + y + z
);
const selectProduct = createSelector(
  selectX, // notation 2
  selectY,
  selectZ,
  (x, y, z) => x * y * z
);
const selectMySum = createSelector(
  selectSum,
  selectProduct,
  (state, i) => i,
  (s, p, i) => s + p + i
);
export { selectSum, selectProduct, selectMySum };

// ---------------
// App.js
// ---------------
import { useSelector, useDispatch } from "react-redux";
import {
  incrementX,
  incrementY,
  incrementZ,
  selectSum,
  selectProduct,
  selectMySum
} from "./reducer";

export default () => {
  const state = useSelector((state) => state);
  const sum = selectSum(state);
  const product = selectProduct(state);
  const mysum = selectMySum(state, 1000); // 1000 to be passed to all input selectors as second arg
  const dispatch = useDispatch();
  return (
    &lt;div&gt;
      &lt;button onClick={() =&gt; dispatch(incrementZ(-1))}&gt;Z-1&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch(incrementY(-1))}&gt;Y-1&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch(incrementX(-1))}&gt;X-1&lt;/button&gt;
      &lt;span&gt;
        ({state.x},{state.y},{state.z})
      &lt;/span&gt;
      &lt;button onClick={() =&gt; dispatch(incrementX(1))}&gt;X+1&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch(incrementY(1))}&gt;Y+1&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch(incrementZ(1))}&gt;Z+1&lt;/button&gt;
      &lt;br /&gt;
      &lt;span&gt;sum: {sum}&lt;/span&gt;
      &lt;br /&gt;
      &lt;span&gt;product: {product}&lt;/span&gt;
      &lt;br /&gt;
      &lt;span&gt;my sum: {mysum}&lt;/span&gt;
    &lt;/div&gt;
  );
};`
        }
      ],
    },
    {
      id: 52,
      title: "persistent storage:",
      note: [
        {
          text1: `Redux persist takes your Redux state object and save it to Persistence storage.

When we refresh page in a web-app, the state always resets back to the initial values which in not a good thing when you try to build some large web-app like e-commerce.

developers can save the Redux store in persistent storage, for example, the local storage. Therefore, even after refreshing the browser, the site state will still be preserved. Redux Persist also includes methods that allow us to customize the state that gets persisted and rehydrated, all with an easily understandable API.

To use a different storage engine, we just need to modify the value of the storage property of persistConfig with the storage engine we want to use. For example, to use the sessionStorage engine, we'll first import it as follows:

import { persistStore, persistReducer } from 'redux-persist';
For persistReducer is wrap your app's root reducers and pass it to the persistStore function it ensures your redux state is stored to persisted storage whenever it changes.`,
          code1: `import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
// Then, modify persistConfig to look like the following code:

const persistConfig = {
  key: 'root',f
  storageSession,
}`
        },
        {
          text1: `<b>Customize what's persisted</b>:
We can customize a part of our state to persist by using the blacklist and whitelist properties of the config object passed to persistReducer. With the blacklist property, we can specify which part of state not to persist, while the whitelist property does the opposite, specifying which part of the state to persist.
If we want to prevent notes from persisting, the config object should look like the following:`,
          code1: `const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['notes']
}
OR

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['users']
}`
        },
        {
          text1: `The blacklist and whitelist properties take an array of strings. Each string must match a part of the state that is managed by the reducer we pass to persistReducer. When using blacklist and whitelist, we can only target one level deep. But, if we want to target a property in one of our states above, we can take advantage of nested persist.
`,
          code1: `
                    // For example, let's say the userReducer initial state looks like the following:
                    const initialState = {
  user: {},
  isLoggedIn: false,
}

// If we want to prevent isLoggedIn from persisting, our code will look like the following:

const rootPersistConfig = {
  key: 'root',
  storage,
}

const userPersistConfig = {
  key: 'user',
  storage,
  blacklist: ['isLoggedIn']
}

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  notes: notesReducer
})

// const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
// Now, the isLoggedIn property won't be persisted.`
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
      title: "Writing Reducers with Immer",
      note: [
        {
          text1: `<a href="https://redux-toolkit.js.org/usage/immer-reducers" target="_blank"> Writing Reducers with Immer </a>`,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "persistent storage:",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      section: "redux saga",
      title: "Redux-Saga",
      note: [
        {
          text1: `Redux-Saga is a Redux middleware library designed to manage side effects in Redux applications, such as asynchronous operations like API calls, data manipulation, and other input/output services. It leverages ES6 Generators to allow writing asynchronous code that appears synchronous, which enhances readability and testability.
          
          <b>🧠 Think of it like this:</b>
          <b>Redux</b> = Manages <b>state</b> and <b>actions</b> → <b>reducers → new state</b>.
(Pure, synchronous, predictable)
<b>Redux Middleware</b> = A place to intercept actions between dispatch and reducer, useful for async logic.
<b>Redux-Saga</b> = One of the <b>middlewares</b> you can plug into Redux, to handle side effects (API calls, background tasks, etc.) using generator functions.

<b>Key Concepts of Redux-Saga</b>:
<b>Middleware</b>: Redux-Saga acts as a middleware between dispatched actions and the Redux store. When an action is dispatched, Redux-Saga can intercept it and trigger corresponding "saga" functions.
<b>Generators</b>: The core of Redux-Saga lies in JavaScript Generators. These special functions can be paused and resumed, making them ideal for managing complex asynchronous flows in a non-blocking and declarative manner. 
<b>Effects</b>: Sagas use "Effects" to interact with the outside world and the Redux store. Common Effects include:
<b>call</b>: For calling functions, often used for making API requests.
<b>put</b>: For dispatching actions to the Redux store.
<b>take</b>: For pausing saga execution until a specific action is dispatched.
<b>fork</b>: For creating detached tasks that run concurrently.
takeEvery/takeLatest</b>: High-level APIs for handling sequences of actions.
<b>Sagas</b>: Sagas are essentially generator functions that contain the logic for handling side effects. They "watch" for specific actions and execute the defined asynchronous flow in response.

<b>redux-thunk</b>	The simplest way to handle async — actions return functions instead of plain objects. Ideal for small apps.
<b>redux-saga</b>	Uses generators to handle complex async workflows (e.g., polling, cancellation, sequencing, parallel tasks).
<b>redux-observable</b>	Uses RxJS (streams) for complex event handling. Less common, more functional/reactive.`,
          code1: `// install saga
          npm install redux-saga

          //store.js
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefault) =>
    getDefault({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
          `
        }
      ],
    },
    {
      id: 52,
      title: "Redux-Saga Full Discussion",
      note: [
        {
          text1: `Redux-Saga Full Discussion Plan
✅ Introduction & Motivation
🧠 How Sagas Work (Concept + Flow)
⚡ Effects API (takeLatest, call, put, etc.)
🏗️ Watcher & Worker Pattern
🧪 Connecting Saga to Store
🌐 API Calls with Saga (call/put)
⏸️ Delay, Debounce, Throttle
🥇 Error Handling & Retry Logic
⏯️ Task Cancellation & takeLatest vs takeEvery
⚔️ Parallel & Race Effects
📡 Long-running tasks (polling, websockets)
🧰 Channels & Advanced Patterns
🧪 Testing Sagas
📝 Best Practices & Real Project Examples

<b>What is Redux-Saga & Why Use It</b>
Redux by itself is <b>synchronous</b>. But real apps need to:
Fetch data from APIs
Handle authentication tokens
Coordinate multiple API calls
Handle errors, retries, and timeouts
Cancel long tasks if the user navigates away

👉 If you do this inside components → you get <b>messy UI code</b>
👉 If you do this in reducers → ❌ reducers must be pure functions
👉 If you use <b>redux-thunk</b> → fine for small apps, but <b>complicated flows</b> get hard to manage.

<b>Redux-Saga solves this by providing</b>:
<b>Generator functions (function*)</b> to write async code in a synchronous style
A set of <b>Effects APIs (take, call, put</b>, etc.) to express async workflows declaratively
Ability to <b>cancel, delay, parallelize</b>, or <b>race</b> effects easily
🦸 <b>Think of sagas as background workers</b> listening to Redux actions, performing side effects, and dispatching new actions back.

<b>How Sagas Work (Concept + Flow)</b>
Let's see the big picture 👇
UI  →  dispatch(ACTION)  
    →  Saga Middleware intercepts
        →  Watcher Saga catches ACTION
            →  Worker Saga runs (async stuff)
                →  Saga dispatches SUCCESS/FAIL actions
                    →  Reducer updates store
                        →  UI re-renders
`,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "Generator",
      note: [
        {
          text1: `A generator is a special type of function in JavaScript that can pause its execution and be resumed later. Unlike a regular function, which runs to completion and returns only one value, a generator can yield a sequence of multiple values over time. This behavior is managed through an iterable Generator object that is returned when the generator function is called.
          
          <b>The key features and syntax of generators include</b>:
<b>Generator function declaration</b>: A generator function is defined using <b>function*</b> syntax.
<b>The yield keyword</b>: The <b>yield</b> keyword pauses the execution of the generator and returns a value to the caller. When the generator is resumed, it continues execution from the point of the last <b>yield</b>.
<b>The next() method</b>: When a generator function is called, it returns a generator object. To start or resume the function's execution, you must call its <b>.next()</b> method.
<b>Iterator result object</b>: The <b>.next()</b> method returns an object with two properties: <b>value</b>, which holds the yielded value, and <b>done</b>, a boolean indicating whether the generator has finished. 

<b>Key Takeaways for Generators</b>
<b>function*</b> = defines a generator
Execution is <b>lazy</b> → only runs when .next() is called internally by the saga middleware
Enables <b>stepwise async flows</b>

<b>Why Redux-Saga uses Generators - (Ex : 2)</b>
-> Sagas run in the background.
-> Generators let you write <b>async code that looks synchronous</b>.
-> Each <b>yield</b> tells Redux-Saga “👉 handle this effect, then resume here.”
`,
          code1: `    function* myGenerator() {
  console.log('Start');
  yield 1;
  console.log('Middle');
  yield 2;
  console.log('End');
}

const gen = myGenerator();

console.log(gen.next());  // { value: 1, done: false }
console.log(gen.next());  // { value: 2, done: false }
console.log(gen.next());  // { value: undefined, done: true }

// ---------- Ex : 2 -----------
function* fetchDataSaga() {
  const data = yield call(fetch, '/api/data');
  yield put({ type: 'FETCH_SUCCESS', payload: data });
}

`
        }
      ],
    },
    {
      id: 52,
      title: "yield",
      note: [
        {
          text1: `<b>yield</b> is the <b>heart</b> of a generator function — and therefore, of a saga.
It <b>pauses the function</b> and returns a value to the caller (Redux-Saga middleware).
Later, the middleware can resume the generator with <b>.next()</b>.

Here(Ex ; 1):
First <b>next()</b> runs until it hits <b>yield 100</b>.
It pauses and returns <b>{ value: 100, done: false }</b>.
Second <b>next('OK')</b> resumes the generator, and <b>'OK'</b> becomes the value of <b>result.</b>


<b>In Redux-Saga</b>
When you use <b>yield</b> with <b>effect creators</b> like <b>call(), put()</b>, etc., you’re not calling the function directly — you're <b>telling Redux-Saga middleware</b>:
“Please do this effect, wait for it to finish, and then give me the result.”


<b>The saga middleware</b>:
Sees the <b>yield call(...)</b>
Runs the API request behind the scenes
Resumes the generator with the result once the promise resolves

✅ <b>Key Points about yield in Sagas</b>
<b>yield</b> pauses the generator and gives the saga middleware control.
Middleware executes the effect, waits for its result, and resumes the saga.
You can think of <b>yield</b> as <b>await</b> + more power (because it can do cancellation, parallel, sequencing, etc.).`,
          code1: `// --------- Ex : 1 ---------
          function* example() {
  console.log('Before yield');
  const result = yield 100;
  console.log('After yield', result);
}

const gen = example();
console.log(gen.next());       // Before yield → { value: 100, done: false }
console.log(gen.next('OK'));   // After yield OK → { value: undefined, done: true }

// --------- Ex : 2 ---------
function* fetchUserSaga() {
  const response = yield call(fetch, '/api/user');   // ⏸️ pause until fetch completes
  const data = yield response.json();
  yield put({ type: 'USER_SUCCESS', payload: data });
}

`
        }
      ],
    },
    {
      id: 52,
      title: "put",
      note: [
        {
          text1: `In Redux-Saga, <b>put</b> is used to <b>dispatch an action</b> to the Redux store — similar to how you’d normally use <b>dispatch</b> in a React component.
          
          <b>👉 Here:</b>
<b>put({ type: 'USER_FETCH_SUCCESS', payload: data })</b> dispatches the action to the store.
Reducers listening to <b>USER_FETCH_SUCCESS</b> will update the state accordingly.

<b>💡 Why use put instead of dispatch directly?</b>
Because sagas run outside React components. You don't have access to <b>dispatch</b> by default inside a saga, so Redux-Saga gives you the <b>put</b> effect to interact with the store.

<b>✅ Key Points about put</b>
Dispatches Redux actions from inside a saga.
Triggers reducers or other sagas listening for that action.
Typically used after API calls (<b>call</b>) to update the state with success or failure actions.
`,
          code1: `// --------------------
          import { put } from 'redux-saga/effects';
yield put({ type: 'ACTION_TYPE', payload: someData });

// 👉 Think of \`put\` as the saga equivalent of:
dispatch({ type: 'ACTION_TYPE', payload: someData });

// ----------- Ex : 1 -------------
function* fetchUserSaga() {
  try {
    const response = yield call(fetch, '/api/user');
    const data = yield response.json();

    // Dispatch success action with user data
    yield put({ type: 'USER_FETCH_SUCCESS', payload: data });
  } catch (error) {
    // Dispatch failure action if something goes wrong
    yield put({ type: 'USER_FETCH_FAILURE', error });
  }
}

`
        }
      ],
    },
    {
      id: 52,
      title: "call",
      note: [
        {
          text1: `<b>call</b> is one of the most important effects in Redux-Saga. It is used to <b>call functions (usually async)</b> in a way that the saga middleware can <b>pause, resume, or cancel</b> them.
          
          <b>fn</b> → The function to be executed (can be async or sync)
<b>arg1, arg2, …</b> → Arguments to pass to <b>fn</b>
Returns → The value that <b>fn</b> returns (or resolves if it’s a promise)

</b>Here’s what happens</b>:
Saga <b>pauses</b> at <b>yield call(...)</b>.
Saga middleware executes <b>fetchUserApi(action.payload)</b>.
Waits for it to resolve <b>(Promise)</b>.
The resolved value is stored in <b>user</b>.
Then the next <b>yield put(...)</b> executes.

<b>Why Not Call the Function Directly?</b>
const user = yield fetchUserApi(action.payload); // ❌ works but not ideal

<b>Problems</b>:
Saga cannot control this effect.
Cannot cancel the call if needed.
Harder to <b>mock in unit tests</b>.
Cannot chain retries or handle errors declaratively.
<b>call</b> solves all this and keeps your sagas declarative.
`,
          code1: `//  --------- Syntax ---------
          import { call } from "redux-saga/effects";
const result = yield call(fn, arg1, arg2, ...);


// ----------- Ex : 1 -----------
import { call, put } from "redux-saga/effects";

function fetchUserApi(userId: number) {
  return fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`)
    .then(res => res.json());
}

function* fetchUserSaga(action: { type: string; payload: number }) {
  try {
    const user = yield call(fetchUserApi, action.payload);
    yield put({ type: "USER_SUCCESS", payload: user });
  } catch (error: any) {
    yield put({ type: "USER_ERROR", payload: error.message });
  }
}

// -------------
//If you want to call a method of an object, you can pass the object as context:
const api = {
  getUser: (id: number) => fetch(\`/users/\${id}\`).then(res => res.json()),
};

const user = yield call([api, api.getUser], 1); // call(api.getUser, 1) with context \`api\`
// First argument [context, function] binds this correctly.


// -------- Calling Promise Functions ---------
// call works with any Promise-returning function:
function fetchData() {
  return new Promise(resolve => setTimeout(() => resolve("data"), 1000));
}
const data = yield call(fetchData);

// Saga waits 1 second, then stores "data" in data.
// No \`await\` needed; \`call\` handles the async.


// --------- Example — Retry with Call -----------
import { call, put, delay } from "redux-saga/effects";

function fetchData() {
  return fetch("https://api.example.com/data").then(res => res.json());
}

function* fetchWithRetrySaga() {
  let attempts = 0;
  while (attempts < 3) {
    try {
      const data = yield call(fetchData);
      yield put({ type: "SUCCESS", payload: data });
      return; // exit on success
    } catch (err) {
      attempts++;
      yield delay(1000); // wait 1s before retry
    }
  }
  yield put({ type: "FAILURE", payload: "Failed after 3 attempts" });
}
// call makes it easy to control async calls, retries, delays, and cancellation.
`
        }
      ],
    },
    {
      id: 52,
      title: "takeEvery",
      note: [
        {
          text1: `Listens for <b>every dispatched action</b> of a specific type.
Runs a <b>new saga for each action, even if previous ones are still running.</b>
`,
          code1: `// --------------
          import { takeEvery } from "redux-saga/effects";

function* workerSaga(action) {
  console.log("Handling action:", action);
}

export function* watchSaga() {
  yield takeEvery("ACTION_TYPE", workerSaga);
}


// -------- Imagine a search input that dispatches SEARCH_QUERY every keystroke: -------
function* searchSaga(action) {
  const results = yield call(apiSearch, action.payload.query);
  yield put({ type: "SEARCH_SUCCESS", payload: results });
}

function* watchSearch() {
  yield takeEvery("SEARCH_QUERY", searchSaga);
}
// If the user types quickly, all searchSaga instances run concurrently.
// Each API call completes independently.
// ✅ Use case: When every action matters, e.g., logging, analytics, notifications.
`
        }
      ],
    },
    {
      id: 52,
      title: "takeLatest",
      note: [
        {
          text1: `Listens for actions like <b>takeEvery</b>.
But <b>if a previous saga is still running</b>, it <b>cancels</b> it and only runs the <b>latest</b> action.`,
          code1: `// --------------
          import { takeLatest } from "redux-saga/effects";

function* workerSaga(action) {
  console.log("Handling latest action:", action);
}

export function* watchSaga() {
  yield takeLatest("ACTION_TYPE", workerSaga);
}


// ---------- Ex : 1 ------------
function* searchSaga(action) {
  const results = yield call(apiSearch, action.payload.query);
  yield put({ type: "SEARCH_SUCCESS", payload: results });
}

function* watchSearch() {
  yield takeLatest("SEARCH_QUERY", searchSaga);
}

If the user types fast, previous API calls are canceled.
Only the latest input triggers the saga to completion.
✅ Use case: When only the latest action matters, e.g., live search, form submissions, token validation.
`
        },
        {
          text1: `<b>takeEvery</b> → run all actions concurrently
<b>takeLatest</b> → only care about the latest action, cancel previous
Both <b>listen for Redux actions</b> and call a worker saga`,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "all()",
      note: [
        {
          text1: `In Redux-Saga, <b>all()</b> is an effect creator used to run multiple effects in parallel and wait for all of them to complete. It is conceptually similar to <b>Promise.all()</b> in JavaScript.
          
          Runs <b>multiple effects (sagas) in parallel</b>.
Waits for <b>all of them to complete</b> before moving on (if used in a generator).
Useful for <b>starting multiple watchers or parallel tasks</b> at once.

          Each saga inside all() runs concurrently.
The root saga waits until all listed sagas are ready.

<b>Key Points About all</b>
Runs <b>effects in parallel<b> instead of sequentially.
Commonly used in <b>rootSaga</b> to combine all watchers.
Can include <b>saga calls, takeEvery, takeLatest</b>, or other effects inside <b>all()</b>.`,
          code1: `import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    saga1(),
    saga2(),
    saga3(),
  ]);
}

// -------- Suppose your app has user and product data to fetch: ---------
function* fetchUserSaga() {
  console.log("Fetching user...");
}

function* fetchProductsSaga() {
  console.log("Fetching products...");
}

export default function* rootSaga() {
  yield all([
    fetchUserSaga(),
    fetchProductsSaga(),
  ]);
}

`
        }
      ],
    },
        {
      id: 52,
      title: "delay",
      note: [
        {
          text1: `What it does
Pauses a saga for a <b>specified number of milliseconds</b>.

Useful for:
Retrying failed requests
Debouncing user input
Adding artificial delays for animations or testing`,
          code1: `import { delay, put } from 'redux-saga/effects';

function* exampleSaga() {
  console.log("Start waiting...");
  yield delay(1000); // pause for 1 second
  console.log("1 second passed");
  yield put({ type: "DELAY_DONE" });
}
// yield delay(ms) pauses the generator for ms milliseconds.
// Saga middleware resumes the saga after the delay.


// --------- Retry API Call with Delay --------
import { call, put, delay } from "redux-saga/effects";

function fetchData() {
  return fetch("/api/data").then(res => res.json());
}

function* fetchWithRetry() {
  let attempts = 0;
  const maxAttempts = 3;

  while (attempts < maxAttempts) {
    try {
      const data = yield call(fetchData);
      yield put({ type: "FETCH_SUCCESS", payload: data });
      return; // exit on success
    } catch (error) {
      attempts++;
      yield delay(1000); // wait 1 second before retry
    }
  }

  yield put({ type: "FETCH_FAILURE", payload: "Failed after 3 attempts" });
}
// After a failed attempt, the saga waits 1 second before retrying.
// Clean, declarative, and testable way to implement retries.

// -------- Debounce User Input ------------
import { takeLatest, call, put, delay } from "redux-saga/effects";

function* searchSaga(action) {
  yield delay(500); // wait 500ms after user stops typing
  const results = yield call(apiSearch, action.payload.query);
  yield put({ type: "SEARCH_SUCCESS", payload: results });
}

export function* watchSearch() {
  yield takeLatest("SEARCH_QUERY", searchSaga);
}
Prevents firing <b>too many API calls</b> while the user is typing.
Combines <b>takeLatest + delay</b> for debouncing.
`
        }
      ],
    },
        {
      id: 52,
      title: "persistent storage:",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
        {
      id: 52,
      title: "persistent storage:",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
  ]
}        