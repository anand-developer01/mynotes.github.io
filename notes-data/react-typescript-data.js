
const Links1 = 'react-notes'
const Links2 = 'redux-notes'
const Links3 = 'react-typescript-data'
const Links4 = 'react-projects'

const isHighlighted = 'react-typescript-data'

const reactTypescriptData = {
  reactTypescriptNote: [
    {
      id: 2,
      title: "intro",
      note: [
        {
          text1: `<a href="https://www.freecodecamp.org/news/use-typescript-with-react/" target="_blank">typescript-with-react</a>`,
          code1: ``
        }
      ]
    },
    {
      id: 2,
      title: "React Synthetic Event types.(typescript react DOM events)",
      note: [
        {
          text1: `These are the types provided by React's <b>SyntheticEvent system</b>, which wraps the native DOM events and normalizes their behavior across different browsers. React uses its synthetic event system to provide consistent event handling that works across all platforms and browsers.

In TypeScript, these event types are often prefixed with <b>React</b>. and are specific to the type of DOM element (e.g., <b>HTMLButtonElement</b>, <b>HTMLInputElement</b>, etc.) to ensure that the events are properly typed.

So, when you refer to events like React.ChangeEvent&lt;HTMLInputElement&gt;, React.MouseEvent&lt;HTMLButtonElement&gt;, or React.FormEvent&lt;HTMLFormElement&gt;, you're referring to React Synthetic Event types.

<b>1. Mouse Events</b>
React.MouseEvent<T>: A mouse event for a specific element type (e.g., HTMLButtonElement, HTMLDivElement, etc.).
<b>Example</b>: React.MouseEvent<HTMLButtonElement>
Used for events like click, mousedown, mouseup, mouseover, mousemove, mouseout, etc.

const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log('Button clicked!');
};

<b>2. Keyboard Events</b>
React.KeyboardEvent<T>: A keyboard event for a specific element type (e.g., HTMLInputElement).
<b>Example</b>: React.KeyboardEvent<HTMLInputElement>
Used for events like keydown, keyup, keypress.

const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
  console.log('Key pressed:', e.key);
};

<b>3. Focus Events</b>
React.FocusEvent<T>: A focus event for a specific element type.
<b>Example</b>: React.FocusEvent<HTMLInputElement>
Used for events like focus, blur.

const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
  console.log('Input focused!');
};

<b>4. Form Events</b>
React.FormEvent<T>: A form event for a specific element type (e.g., HTMLFormElement).
<b>Example</b>: React.FormEvent<HTMLFormElement>
Used for events like submit, reset.

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log('Form submitted!');
};

React.ChangeEvent<T>: A change event for input elements like input, select, textarea.
<b>Example</b>: React.ChangeEvent<HTMLInputElement>
Used for events like change.

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log('Input changed:', e.target.value);
};

React.InputEvent<T>: An event for the input element (for real-time input value changes).
<b>Example</b>: React.InputEvent<HTMLInputElement>
Used for events like input (fires on every keystroke or value change in text fields).

const handleInput = (e: React.InputEvent<HTMLInputElement>) => {
  console.log('Input value:', e.target.value);
};

<b>5. Clipboard Events</b>
React.ClipboardEvent<T>: A clipboard event for a specific element type.
<b>Example</b>: React.ClipboardEvent<HTMLInputElement>
Used for events like copy, cut, paste.

const handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
  console.log('Text copied!');
};

<b>6. Drag Events</b>
React.DragEvent<T>: A drag event for a specific element type.
<b>Example</b>: React.DragEvent<HTMLDivElement>
Used for events like dragstart, drag, dragend, dragenter, dragleave, dragover, drop.

const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
  console.log('Element dragged!');
};

<b>7. Touch Events</b>
React.TouchEvent<T>: A touch event for a specific element type (used for mobile devices).
<b>Example</b>: React.TouchEvent<HTMLDivElement>
Used for events like touchstart, touchmove, touchend, touchcancel.

const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
  console.log('Touch started!');
};

<b>8. Pointer Events</b>
React.PointerEvent<T>: A pointer event for a specific element type (works with mouse, pen, and touch).
<b>Example</b>: React.PointerEvent<HTMLButtonElement>
Used for events like pointerdown, pointerup, pointermove, pointerover, pointerout.

const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
  console.log('Pointer down!');
};

<b>9. Wheel Events</b>
React.WheelEvent<T>: A wheel event for a specific element type.
<b>Example</b>: React.WheelEvent<HTMLDivElement>
Used for events like wheel (mouse wheel scrolling).

const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
  console.log('Wheel event:', e.deltaY);
};

<b>10. Animation Events</b>
React.AnimationEvent<T>: An animation event for a specific element type.
<b>Example</b>: React.AnimationEvent<HTMLDivElement>
Used for events like animationstart, animationend, animationiteration.

const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
  console.log('Animation ended!');
};

<b>11. Transition Events</b>
React.TransitionEvent<T>: A transition event for a specific element type.
<b>Example</b>: React.TransitionEvent<HTMLDivElement>
Used for events like transitionstart, transitionend, transitionrun.

const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
  console.log('Transition ended!');
};`,
        code1: ``
        },
        {
          text1: `        <table>
          <thead>
          <tr data-start="5407" data-end="5502">
          <th data-start="5407" data-end="5431">
          <strong data-start="5409" data-end="5422">DOM Event</strong>
          </th>
          <th data-start="5431" data-end="5468"><strong data-start="5433" data-end="5447">React Type</strong></th><th data-start="5468" data-end="5502"><strong data-start="5470" data-end="5481">Example</strong></th></tr></thead><tbody data-start="5599" data-end="6638"><tr data-start="5599" data-end="5702"><td><code data-start="5601" data-end="5608">click</code></td><td><code data-start="5625" data-end="5646">React.MouseEvent&lt;T&gt;</code></td><td><code data-start="5662" data-end="5699">React.MouseEvent&lt;HTMLButtonElement&gt;</code></td></tr><tr data-start="5703" data-end="5807"><td><code data-start="5705" data-end="5714">keydown</code></td><td><code data-start="5729" data-end="5753">React.KeyboardEvent&lt;T&gt;</code></td><td><code data-start="5766" data-end="5805">React.KeyboardEvent&lt;HTMLInputElement&gt;</code></td></tr><tr data-start="5808" data-end="5911"><td><code data-start="5810" data-end="5818">submit</code></td><td><code data-start="5834" data-end="5854">React.FormEvent&lt;T&gt;</code></td><td><code data-start="5871" data-end="5905">React.FormEvent&lt;HTMLFormElement&gt;</code></td></tr><tr data-start="5912" data-end="6015"><td><code data-start="5914" data-end="5922">change</code></td><td><code data-start="5938" data-end="5960">React.ChangeEvent&lt;T&gt;</code></td><td><code data-start="5975" data-end="6012">React.ChangeEvent&lt;HTMLInputElement&gt;</code></td></tr><tr data-start="6016" data-end="6119"><td><code data-start="6018" data-end="6025">input</code></td><td><code data-start="6042" data-end="6063">React.InputEvent&lt;T&gt;</code></td><td><code data-start="6079" data-end="6115">React.InputEvent&lt;HTMLInputElement&gt;</code></td></tr><tr data-start="6120" data-end="6223"><td><code data-start="6122" data-end="6129">focus</code></td><td><code data-start="6146" data-end="6167">React.FocusEvent&lt;T&gt;</code></td><td><code data-start="6183" data-end="6219">React.FocusEvent&lt;HTMLInputElement&gt;</code></td></tr><tr data-start="6224" data-end="6327"><td><code data-start="6226" data-end="6232">blur</code></td><td><code data-start="6250" data-end="6271">React.FocusEvent&lt;T&gt;</code></td><td><code data-start="6287" data-end="6323">React.FocusEvent&lt;HTMLInputElement&gt;</code></td></tr><tr data-start="6328" data-end="6432"><td><code data-start="6330" data-end="6336">copy</code></td><td><code data-start="6354" data-end="6379">React.ClipboardEvent&lt;T&gt;</code></td><td><code data-start="6391" data-end="6431">React.ClipboardEvent&lt;HTMLInputElement&gt;</code></td></tr><tr data-start="6433" data-end="6535"><td><code data-start="6435" data-end="6441">drag</code></td><td><code data-start="6459" data-end="6479">React.DragEvent&lt;T&gt;</code></td><td><code data-start="6496" data-end="6529">React.DragEvent&lt;HTMLDivElement&gt;</code></td></tr><tr data-start="6536" data-end="6638"><td><code data-start="6538" data-end="6545">wheel</code></td><td><code data-start="6562" data-end="6583">React.WheelEvent&lt;T&gt;</code></td><td><code data-start="6599" data-end="6633">React.WheelEvent&lt;HTMLDivElement&gt;</code></td></tr></tbody>
        </table>`,
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
      id: 52,
      title: "1. Mouse Events",
      note: [
        {
          text1: `<b>Full Example Using TypeScript with Mouse Events</b>
Here is a complete example where we handle different mouse events in a React component.`,
          code1: `import React, { useState } from 'react';

const MouseEventComponent: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  // Handle click event
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setMessage('Button clicked!');
    console.log('Mouse clicked at:', event.clientX, event.clientY);
  };

  // Handle double-click event
  const handleDoubleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMessage('Div double-clicked!');
    console.log('Mouse double-clicked at:', event.clientX, event.clientY);
  };

  // Handle mouse enter event
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMessage('Mouse entered the div!');
    console.log('Mouse entered at:', event.clientX, event.clientY);
  };

  // Handle mouse leave event
  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMessage('Mouse left the div!');
    console.log('Mouse left at:', event.clientX, event.clientY);
  };

  // Handle mouse move event
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('Mouse moved at:', event.clientX, event.clientY);
  };

  // Handle mouse down event
  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('Mouse button pressed down at:', event.clientX, event.clientY);
  };

  // Handle mouse up event
  const handleMouseUp = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('Mouse button released at:', event.clientX, event.clientY);
  };

  return (
    &lt;div&gt;
      &lt;div 
        style={{ width: &#39;300px&#39;, height: &#39;200px&#39;, backgroundColor: &#39;lightblue&#39; }} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
        onMouseMove={handleMouseMove}
      &gt;
        &lt;p&gt;{message}&lt;/p&gt;
      &lt;/div&gt;
      &lt;button
        style={{ marginTop: &#39;20px&#39; }}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      &gt;
        Click Me!
      &lt;/button&gt;
    &lt;/div&gt;
  );
};

export default MouseEventComponent;`
        },
        {
          text1: ``,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "2. Keyboard Events",
      note: [
        {
          text1: `<b>Handling Keyboard Events in React with TypeScript</b>
Keyboard events are triggered when the user interacts with a keyboard. In React, you can handle events such as key presses, key down, and key up.

Common Keyboard Events:
<b>onKeyDown</b>: Triggered when a key is pressed down.
<b>onKeyPress (deprecated in some cases)</b>: Triggered when a key is pressed and the character is produced (like pressing a letter or number).
<b>onKeyUp</b>: Triggered when a key is released.

In React, <b>React.KeyboardEvent</b> is a synthetic event that is triggered when a keyboard event occurs. It is part of React’s event system, which wraps the native DOM events in a cross-browser compatible way. React events are normalized, meaning the same event works in all browsers.

When you use <b>React.KeyboardEvent</b>, you are specifically working with events related to keyboard interactions, such as pressing and releasing keys.

<b>Understanding React.KeyboardEvent&lt;HTMLInputElement&gt;</b>:
In TypeScript, you can use <b>React.KeyboardEvent</b> to handle keyboard events. The generic <b>React.KeyboardEvent&lt;T&gt;</b> takes an element type <b>T</b> that the event is being applied to. In your case, you're dealing with an <b>&lt;input&gt;</b> element, so the event will be typed as React.<b>KeyboardEvent&lt;HTMLInputElement&gt;</b>.
`,
          code1: `import React, { useState } from &#39;react&#39;;

const KeyboardEventComponent: React.FC = () =&gt; {
  const [key, setKey] = useState&lt;string&gt;(&#39;&#39;);
  const [message, setMessage] = useState&lt;string&gt;(&#39;&#39;);

  // Handle key down event
  const handleKeyDown = (event: React.KeyboardEvent&lt;HTMLInputElement&gt;) =&gt; {
    setKey(event.key); // Store the pressed key
    setMessage(\`Key down: \${event.key}\`);
  };

  // Handle key up event
  const handleKeyUp = (event: React.KeyboardEvent&lt;HTMLInputElement&gt;) =&gt; {
    setMessage(\`Key up: \${event.key}\`);
  };

  return (
    &lt;div&gt;
      &lt;h2&gt;React Keyboard Event Handling with TypeScript&lt;/h2&gt;
      &lt;input
        type=&quot;text&quot;
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        placeholder=&quot;Press any key&quot;
      /&gt;
      &lt;p&gt;Last pressed key: {key}&lt;/p&gt;
      &lt;p&gt;{message}&lt;/p&gt;
    &lt;/div&gt;
  );
};

export default KeyboardEventComponent;
`
        },
        {
          text1: `<b>Key Event Properties in TypeScript:</b>
1) <b>event.key</b> The value of the key pressed, e.g., <b>a</b>, <b>Enter</b>, <b>Backspace</b>, etc.

2) <b>event.code</b> The physical key on the keyboard. It'’'s not affected by the shift key or the keyboard layout. For example, it can be <b>KeyA</b> for the <b>A</b> key, <b>Enter</b> for the Enter key.

3) <b>event.altKey, event.ctrlKey, event.shiftKey, event.metaKey</b> Boolean values indicating whether the respective modifier keys <b>(Alt, Ctrl, Shift, Meta/Command)</b> are pressed when the event occurs.

4) <b>event.repeat</b> A boolean indicating if the key is being held down and repeating (e.g., when holding a key down for a prolonged period).`,
          code1: `import React, { useState } from &#39;react&#39;;

const KeyboardEventComponent: React.FC = () =&gt; {
  const [key, setKey] = useState&lt;string&gt;(&#39;&#39;);
  const [message, setMessage] = useState&lt;string&gt;(&#39;&#39;);

  // Handle key down event
  const handleKeyDown = (event: React.KeyboardEvent&lt;HTMLInputElement&gt;) =&gt; {
    const { key, altKey, ctrlKey, shiftKey, metaKey } = event;
    
    let modifierMessage = &#39;&#39;;
    if (altKey) modifierMessage += &#39;Alt + &#39;;
    if (ctrlKey) modifierMessage += &#39;Ctrl + &#39;;
    if (shiftKey) modifierMessage += &#39;Shift + &#39;;
    if (metaKey) modifierMessage += &#39;Meta + &#39;;
    
    setKey(key);
    setMessage(\`Key down: \${modifierMessage}\${key}\`);
  };

  // Handle key up event
  const handleKeyUp = (event: React.KeyboardEvent&lt;HTMLInputElement&gt;) =&gt; {
    setMessage(\`Key up: \${event.key}\`);
  };

  return (
    &lt;div&gt;
      &lt;h2&gt;React Keyboard Event Handling with TypeScript&lt;/h2&gt;
      &lt;input
        type=&quot;text&quot;
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        placeholder=&quot;Press any key&quot;
      /&gt;
      &lt;p&gt;Last pressed key: {key}&lt;/p&gt;
      &lt;p&gt;{message}&lt;/p&gt;
    &lt;/div&gt;
  );
};

export default KeyboardEventComponent;
`
        },
      ],
    },
    {
      id: 52,
      title: "3. Focus Events",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "4. Form Events",
      note: [
        {
          text1: `<b>1. Typing the Input Change Event (onChange)</b>(Ex : 1) 
For each input field, you'll handle the <b>onChange</b> event, which is triggered whenever the user modifies the value. In TypeScript, you'll use the <b>React.ChangeEvent&lt;HTMLInputElement&gt;</b> type to capture the event.

<b>2. Typing the Form Submit Event (onSubmit)</b>(Ex : 2)
For form submissions, use <b>React.FormEvent&lt;HTMLFormElement&gt;</b> to type the onSubmit event handler. This ensures that TypeScript understands the event is coming from a &lt;form&gt; element and that it is a submit event.

<b>React.FormEvent&lt;HTMLFormElement&gt;</b>: The event is typed as <b>FormEvent&lt;HTMLFormElement&gt;</b>, which ensures that TypeScript understands it is a submit event triggered by a &lt;form&gt; element.

<b>3. Typing Focus Events (onFocus / onBlur)</b>(Ex : 3)
When dealing with focus-related events (e.g., when an input gains or loses focus), use the <b>React.ChangeEvent&lt;HTMLInputElement&gt;</b> type.`,
          code1: `//----------- Ex : 1 ------------
          import React, { useState } from &#39;react&#39;;

interface FormData {
  username: string;
  email: string;
  password: string;
}

const FormComponent: React.FC = () =&gt; {
  const [formData, setFormData] = useState&lt;FormData&gt;({
    username: &#39;&#39;,
    email: &#39;&#39;,
    password: &#39;&#39;,
  });

  // Handle the change of input fields
  const handleInputChange = (e: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Dynamically update the field based on its name
    });
  };

  return (
    &lt;form&gt;
      &lt;input
        type=&quot;text&quot;
        name=&quot;username&quot;
        value={formData.username}
        onChange={handleInputChange}
      /&gt;
      &lt;input
        type=&quot;email&quot;
        name=&quot;email&quot;
        value={formData.email}
        onChange={handleInputChange}
      /&gt;
      &lt;input
        type=&quot;password&quot;
        name=&quot;password&quot;
        value={formData.password}
        onChange={handleInputChange}
      /&gt;
    &lt;/form&gt;
  );
};

export default FormComponent;



//------------ Ex : 2 -------------
const handleSubmit = (e: React.FormEvent&lt;HTMLFormElement&gt;) => {
  e.preventDefault();  // Prevents page reload on submit
  console.log(formData);
};

return (
  &lt;form onSubmit={handleSubmit}&gt;
    &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
  &lt;/form&gt;
);



//----------- Ex : 3 ----------
const handleFocus = (e: React.FocusEvent&lt;HTMLInputElement&gt;) =&gt; {
  console.log(&#39;Input focused:&#39;, e.target.name);
};

const handleBlur = (e: React.FocusEvent&lt;HTMLInputElement&gt;) =&gt; {
  console.log(&#39;Input blurred:&#39;, e.target.name);
};

return (
  &lt;form&gt;
    &lt;input
      type=&quot;text&quot;
      name=&quot;username&quot;
      onFocus={handleFocus}
      onBlur={handleBlur}
    /&gt;
  &lt;/form&gt;
);

`
        }
      ],
    },
    {
      id: 52,
      title: "Clipboard Events",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "Drag Events",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "Touch Events",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "Pointer Events",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "Wheel Events",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "Animation Events",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "Transition Events",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "ReactNode",
      note: [
        {
          text1: `In React and TypeScript, ReactNode is a type that represents any value that can be rendered as a child of a React component. It is a union type encompassing various renderable values, including:

          In ReactJS with TypeScript, ReactNode is a type that represents a React element, an array of React elements, or a string, number, or boolean. It is defined in the react module and can be used to specify the type of a variable that can hold any of these types.

<b>ReactElement</b>: A JSX element, representing a component instance.
<b>string</b>: Text content.
<b>number</b>: Numerical content.
<b>ReactFragment</b>: A way to group multiple children without adding extra DOM elements.
<b>ReactPortal</b>: A way to render children into a different DOM subtree.
<b>boolean, null, undefined</b>: These are valid ReactNode types but do not render anything.

<b>Children</b>
There are two common paths to describing the children of a component. The first is to use the React.ReactNode type, which is a union of all the possible types that can be passed as children in JSX:

interface ModalRendererProps {
  title: string;
  children: React.ReactNode;
}`,
          code1: `// Sample example
          import React from &#39;react&#39;;

interface Props {
  children: React.ReactNode;
}

const MyComponent: React.FC&lt;Props&gt; = ({ children }) =&gt; {
  return &lt;div&gt;{children}&lt;/div&gt;;
};

// Usage examples:
&lt;MyComponent&gt;Hello&lt;/MyComponent&gt;
&lt;MyComponent&gt;123&lt;/MyComponent&gt;
&lt;MyComponent&gt;{[&lt;p&gt;Item 1&lt;/p&gt;, &lt;p&gt;Item 2&lt;/p&gt;]}&lt;/MyComponent&gt;

//----------  Ex : 2 --------
import React, { ReactNode } from &#39;react&#39;;

function MyComponent(props: { children: ReactNode }) {
  return &lt;div&gt;{props.children}&lt;/div&gt;;
}`
        },
        {
          text1: ``,
          code1: ``
        },
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "useContext",
      note: [
        {
          text1: `Typescript Theme change`,
          code1: `//---------- ThemeContext.tsx --------
           import React, { createContext, useState, useContext, ReactNode } from &#39;react&#39;;

// Define types for the context
type Theme = &#39;light&#39; | &#39;dark&#39;;

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () =&gt; void;
}

// Create a context with a default value
const ThemeContext = createContext&lt;ThemeContextType | undefined&gt;(undefined);

// Define a provider component
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC&lt;ThemeProviderProps&gt; = ({ children }) =&gt; {
  const [theme, setTheme] = useState&lt;Theme&gt;(&#39;light&#39;); // default theme is light

  const toggleTheme = () =&gt; {
    setTheme((prevTheme) =&gt; (prevTheme === &#39;light&#39; ? &#39;dark&#39; : &#39;light&#39;));
  };

  return (
    &lt;ThemeContext.Provider value={{ theme, toggleTheme }}&gt;
      {children}
    &lt;/ThemeContext.Provider&gt;
  );
};

// Custom hook to use the ThemeContext
export const useTheme = (): ThemeContextType =&gt; {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(&#39;useTheme must be used within a ThemeProvider&#39;);
  }
  return context;
};


//----------- App.tsx --------
import React from &#39;react&#39;;
import { ThemeProvider } from &#39;./ThemeContext&#39;;
import { ThemeSwitcher } from &#39;./ThemeSwitcher&#39;;

const App: React.FC = () =&gt; {
  return (
    &lt;ThemeProvider&gt;
      &lt;div className=&quot;App&quot;&gt;
        &lt;h1&gt;Theme Toggle with TypeScript and Context API&lt;/h1&gt;
        &lt;ThemeSwitcher /&gt;
      &lt;/div&gt;
    &lt;/ThemeProvider&gt;
  );
};

export default App;


//-------- ThemeSwitcher.tsx--------
import React from &#39;react&#39;;
import { useTheme } from &#39;./ThemeContext&#39;;

export const ThemeSwitcher: React.FC = () =&gt; {
  const { theme, toggleTheme } = useTheme(); // Access the theme and toggle function

  return (
    &lt;div style={{ padding: &#39;20px&#39;, textAlign: &#39;center&#39; }}&gt;
      &lt;p&gt;Current theme: &lt;strong&gt;{theme}&lt;/strong&gt;&lt;/p&gt;
      &lt;button onClick={toggleTheme}&gt;Toggle Theme&lt;/button&gt;
      &lt;div
        style={{
          marginTop: &#39;20px&#39;,
          padding: &#39;20px&#39;,
          backgroundColor: theme === &#39;light&#39; ? &#39;#fff&#39; : &#39;#333&#39;,
          color: theme === &#39;light&#39; ? &#39;#000&#39; : &#39;#fff&#39;,
        }}
      &gt;
        &lt;p&gt;This is a {theme} themed box!&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
};



//------------ styles.css -------
/* styles.css */

/* Light theme */
body[data-theme='light'] {
  background-color: #ffffff;
  color: #000000;
}

/* Dark theme */
body[data-theme='dark'] {
  background-color: #333333;
  color: #ffffff;
}

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
    {
      id: 52,
      title: "Issue in passing typescript props",
      note: [
        {
          text1: `Why User Doesn't Work Directly:
React.FC&lt;User&gt; is telling TypeScript that the component expects <b>User</b> to be the <b>entire props object</b>. This means <b>props</b> will be of type <b>User</b>, so when you try to destructure <b>userData</b> from <b>props</b>, TypeScript can't find that field in the <b>User</b> interface because it is expecting the entire props object to directly match the <b>User</b> type.

export interface User {
  username: string;
  area: string;
  phone: number;
  age: number;
}
In that case, props should directly have these fields (username, area, phone, age), not a nested userData field.


<b>Correct Approach</b>:
-> Define the props interface that includes <b>userData</b>:
-> Create an explicit <b>UserComponentProps</b> interface where <b>userData</b> is a property, and use <b>React.FC&lt;UserComponentProps&gt;</b>.

-> Use User directly for props if the component accepts the entire object.
`,
          code1: `//----------   ----------
          // Property 'userData' does not exist on type 'User'
          // in parent compoent
           &lt;UserComponent userData = {userDet}/&gt;

           // ----------- UserComponent.tsx ---------
          const UserComponent: React.FC = ({userData}: User) => {
  return (
    &lt;&gt;
      &lt;div&gt;
          { JSON.stringify(userData)}
      &lt;/div&gt;;
    &lt;/&gt;
  )
};

          
          // --------- ------
          // in parent compoent
          &lt;UserComponent userData = {userDet}/&gt;
          

          // UserComponent
          interface UserComponentProps {
  userData : User
}
          const UserComponent: React.FC&lt;UserComponentProps&gt; = ({userData}) =&gt; {
  return (
    &lt;&gt;
      &lt;div&gt;
          { JSON.stringify(userData)}
      &lt;/div&gt;;
    &lt;/&gt;
  )
};`
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
    {
      id: 52,
      title: "React Typescritp Pagination",
      note: [
        {
          text1: ``,
          code1: `// AppPagination.tsx
import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState&lt;Post[]&gt;([]);
  const [currentPage, setCurrentPage] = useState&lt;number&gt;(1);
  const [totalCount, setTotalCount] = useState&lt;number&gt;(0);
  const [loading, setLoading] = useState&lt;boolean&gt;(false);

  const postsPerPage = 10;

  const fetchPosts = async (page: number) => {
    setLoading(true);

    try {
      const response = await fetch(
        \`https://jsonplaceholder.typicode.com/posts?_page=\${page}&_limit=\${postsPerPage}\`
      );
      const data = await response.json();
      setPosts(data);

      const total = parseInt(response.headers.get('x-total-count') || '0', 10);
      setTotalCount(total);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    &lt;div&gt;
      {loading &amp;&amp; &lt;p&gt;Loading...&lt;/p&gt;}
      &lt;table border={1}&gt;
                &lt;thead&gt;
                    &lt;tr&gt;
                        &lt;th&gt;Id&lt;/th&gt;
                        &lt;th&gt;title&lt;/th&gt;
                        &lt;th&gt;body&lt;/th&gt;
                        &lt;th&gt;userId&lt;/th&gt;
                    &lt;/tr&gt;
                &lt;/thead&gt;
                &lt;tbody&gt;
                    {posts.map((item) =&gt; {
                        return (
                            &lt;tr key={item.id}&gt;
                                &lt;td&gt;{item.id}&lt;/td&gt;
                                &lt;td&gt;{item.title}&lt;/td&gt;
                                &lt;td&gt;{item.body}&lt;/td&gt;
                                &lt;td&gt;{item.userId}&lt;/td&gt;
                            &lt;/tr&gt;
                        );
                    })}
                &lt;/tbody&gt;
            &lt;/table&gt;

      &lt;Pagination
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={postsPerPage}
        onPageChange={handlePageChange}
        siblingCount={1}
      /&gt;
    &lt;/div&gt;
  );
};

export default App;



//------------- Pagination.tsx -----------
import React from 'react';
import { usePagination, DOTS } from './usePagination';
import './Pagination.css'; // Import normal CSS here

interface PaginationProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

const Pagination: React.FC&lt;PaginationProps&gt; = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => onPageChange(currentPage + 1);
  const onPrevious = () => onPageChange(currentPage - 1);

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    &lt;ul className={\`pagination-container \${className || '}\`}&gt;
      {/* Left Navigation Arrow */}
      &lt;li
        className={\`pagination-item \${currentPage === 1 ? 'disabled' : '}\`}
        onClick={onPrevious}
      &gt;
        &lt;div className=&quot;arrow left&quot; /&gt;
      &lt;/li&gt;

      {/* Pagination Numbers */}
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          // Use index as part of the key to ensure uniqueness for dots
          return &lt;li key={\`dots-\${index}\`} className=&quot;pagination-item dots&quot;&gt;&amp;#8230;&lt;/li&gt;;
        }

        return (
          &lt;li
            key={pageNumber} // Use pageNumber as the key
            className={\`pagination-item \${pageNumber === currentPage ? 'selected' : '}\`}
            onClick={() =&gt; onPageChange(pageNumber)}
          &gt;
            {pageNumber}
          &lt;/li&gt;
        );
      })}

      {/* Right Navigation Arrow */}
      &lt;li
        className={\`pagination-item \${currentPage === lastPage ? 'disabled' : '}\`}
        onClick={onNext}
      &gt;
        &lt;div className=&quot;arrow right&quot; /&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  );
};

export default Pagination;



//-------------  usePagination.tsx  -----------------
import React from 'react';
import { useMemo } from 'react';

export const DOTS = '...';

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    /*
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    /*
      We do not want to show dots if there is only one position left 
      after/before the left/right page count as that would lead to a change if our Pagination
      component size which we do not want
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};

`
        }
      ],
    },
    {
      id: 52,
      title: "multiple components task",
      note: [
        {
          text1: ``,
          code1: `//---------- /hook/useResults.ts ---------------
import { useState, useEffect } from "react";
import { User } from "../types";

const API_URL = "https://randomuser.me/api/?results=20";

export default function useResults() {
  //states for doctors
  const [users, setUsers] = useState<User[]>([]);

  //load list of appointments, doctors, patients on component mount
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.results);
      })
      .catch((err: Error) => console.log(err));
  }, []);

  const handleRefresh: () => void = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.results);
      })
      .catch((err: Error) => console.log(err));
  };

  return { users, handleRefresh };
}


//-------------- Types.ts --------------
export type Name = {
    title: string;
    first: string;
    last: string;
  };
  
  export type Street = {
    number: number;
    name: string;
  };
  
  export type Coordinate = {
    latitude: string;
    longitude: string;
  };
  
  export type Timezone = {
    offset: string;
    description: string;
  };
  
  export type Dob = {
    date: string;
    age: number;
  };
  
  export type Registered = {
    date: string;
    age: number;
  };
  
  export type Id = {
    name: string;
    value: number;
  };
  
  export type Login = {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  
  export type Picture = {
    large: string;
    medium: string;
    thumbnail: string;
  };
  
  export type Location = {
    street: Street;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: Coordinate;
    timezone: Timezone;
  };
  
  export type User = {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: Dob;
    registered: Registered;
    phone: string;
    cell: string;
    id: Id;
    picture: Picture;
    nat: string;
  };
  
  //-------------- ./Tasks/Header.tsx -----------------
  import { Link } from "react-router-dom";

export default function Task4() {
  return (
    &lt;section className=&quot;header&quot;&gt;
      &lt;Link to=&quot;/&quot;&gt;
        &lt;button className=&quot;headerBtn&quot;&gt;Task1&lt;/button&gt;
      &lt;/Link&gt;
      &lt;Link to=&quot;/task2&quot;&gt;
        &lt;button className=&quot;headerBtn&quot;&gt;Task2&lt;/button&gt;
      &lt;/Link&gt;
      &lt;Link to=&quot;/task3&quot;&gt;
        &lt;button className=&quot;headerBtn&quot;&gt;Task3&lt;/button&gt;
      &lt;/Link&gt;
      &lt;Link to=&quot;/task4&quot;&gt;
        &lt;button className=&quot;headerBtn&quot;&gt;Task4&lt;/button&gt;
      &lt;/Link&gt;
    &lt;/section&gt;
  );
}


//-------------------- MainRoute.tsx --------------------
import { HashRouter, Route, Routes } from "react-router-dom";
import Task1 from "./components/react-typescript-user-task/tasks/Task1";
import Task2 from "./components/react-typescript-user-task/tasks/Task2";
import Task3 from "./components/react-typescript-user-task/tasks/Task3";
import Task4 from "./components/react-typescript-user-task/tasks/Task4";
import "./App.css";

export default function App() {
  return (
    &lt;HashRouter&gt;
      &lt;Routes&gt;
        &lt;Route path=&quot;/&quot; element={&lt;Task1/&gt;} /&gt;
        &lt;Route path=&quot;/task2&quot; element={&lt;Task2/&gt;} /&gt;
        &lt;Route path=&quot;/task3&quot; element={&lt;Task3/&gt;} /&gt;
        &lt;Route path=&quot;/task4&quot; element={&lt;Task4/&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/HashRouter&gt;
  );
}


//------------------ /Tasks/Task1.tsx -------------
import useResults from "../hook/useResults";
import Header from "./Header";

export default function Task1() {
  //get users
  const { users } = useResults();
  console.log("users: ", users);

  return (
    &lt;&gt;
      &lt;Header /&gt;
      &lt;h1&gt;Task1&lt;/h1&gt;
    &lt;/&gt;
  );
}



//------------------ /Tasks/Task2.tsx -------------
import useResults from "../hook/useResults";
import Header from "./Header";

export default function Task2() {
  //get users
  const { users, handleRefresh } = useResults();

  return (
    &lt;&gt;
      &lt;Header /&gt;
      &lt;div&gt;
        &lt;h1&gt;Task2&lt;/h1&gt;
        &lt;button className=&quot;refreshBtn&quot; onClick={handleRefresh}&gt;
          Refresh
        &lt;/button&gt;
        &lt;pre&gt;{JSON.stringify(users, null, 4)}&lt;/pre&gt;
      &lt;/div&gt;
    &lt;/&gt;
  );
}



//------------------ /Tasks/Task3.tsx -------------
import useResults from "../hook/useResults";
import Header from "./Header";

export default function Task3() {
  //get users
  const { users, handleRefresh } = useResults();

  return (
    &lt;&gt;
      &lt;Header /&gt;
      &lt;div&gt;
        &lt;h1&gt;Task3&lt;/h1&gt;
        &lt;button className=&quot;refreshBtn&quot; onClick={handleRefresh}&gt;
          Refresh
        &lt;/button&gt;
        &lt;table&gt;
          &lt;thead&gt;
            &lt;tr&gt;
              &lt;th className=&quot;tableCell&quot;&gt;name&lt;/th&gt;
              &lt;th className=&quot;tableCell&quot;&gt;email&lt;/th&gt;
              &lt;th className=&quot;tableCell&quot;&gt;username&lt;/th&gt;
              &lt;th className=&quot;tableCell&quot;&gt;password&lt;/th&gt;
            &lt;/tr&gt;
          &lt;/thead&gt;
          &lt;tbody&gt;
            {users.length &gt; 0 ? (
              users.map((user, index) =&gt; (
                &lt;tr key={index}&gt;
                  &lt;td className=&quot;tableCell&quot;&gt;
                    {user.name.title +
                      &quot; &quot; +
                      user.name.first +
                      &quot; &quot; +
                      user.name.last}
                  &lt;/td&gt;
                  &lt;td className=&quot;tableCell&quot;&gt;{user.email}&lt;/td&gt;
                  &lt;td className=&quot;tableCell&quot;&gt;{user.login.username}&lt;/td&gt;
                  &lt;td className=&quot;tableCell&quot;&gt;{user.login.password}&lt;/td&gt;
                &lt;/tr&gt;
              ))
            ) : (
              &lt;tr&gt;
                &lt;td colSpan={4}&gt;no data&lt;/td&gt;
              &lt;/tr&gt;
            )}
          &lt;/tbody&gt;
        &lt;/table&gt;
      &lt;/div&gt;
    &lt;/&gt;
  );
}



//------------------ /Tasks/Task4.tsx -------------
import useResults from "../hook/useResults";
import Header from "./Header";

export default function Task4() {
  //get users
  const { users, handleRefresh } = useResults();

  return (
    &lt;&gt;
      &lt;Header /&gt;
      &lt;div&gt;
        &lt;h1&gt;Task4&lt;/h1&gt;
        &lt;button className=&quot;refreshBtn&quot; onClick={handleRefresh}&gt;
          Refresh
        &lt;/button&gt;
        &lt;table&gt;
          &lt;thead&gt;
            &lt;tr&gt;
              &lt;th className=&quot;tableCell&quot;&gt;name&lt;/th&gt;
              &lt;th className=&quot;tableCell&quot;&gt;email&lt;/th&gt;
              &lt;th className=&quot;tableCell&quot;&gt;username&lt;/th&gt;
              &lt;th className=&quot;tableCell&quot;&gt;password&lt;/th&gt;
              &lt;th className=&quot;tableCell&quot;&gt;picture&lt;/th&gt;
            &lt;/tr&gt;
          &lt;/thead&gt;
          &lt;tbody&gt;
            {users.length &gt; 0 ? (
              users.map((user, index) =&gt; (
                &lt;tr key={index}&gt;
                  &lt;td className=&quot;tableCell&quot;&gt;
                    {user.name.title + &quot; &quot; + user.name.first + user.name.last}
                  &lt;/td&gt;
                  &lt;td className=&quot;tableCell&quot;&gt;{user.email}&lt;/td&gt;
                  &lt;td className=&quot;tableCell&quot;&gt;{user.login.username}&lt;/td&gt;
                  &lt;td className=&quot;tableCell&quot;&gt;{user.login.password}&lt;/td&gt;
                  &lt;td className=&quot;tableCell&quot;&gt;
                    &lt;img
                      src={user.picture.medium}
                      className=&quot;userImg&quot;
                      alt={user.login.username}
                    /&gt;
                  &lt;/td&gt;
                &lt;/tr&gt;
              ))
            ) : (
              &lt;tr&gt;
                &lt;td colSpan={5}&gt;no data&lt;/td&gt;
              &lt;/tr&gt;
            )}
          &lt;/tbody&gt;
        &lt;/table&gt;
      &lt;/div&gt;
    &lt;/&gt;
  );
}`
        }
      ],
    },
    {
      id: 52,
      title: "HOC Typescript Example",
      note: [
        {
          text1: `Translation and Language Switching`,
          code1: `import React, { useState } from 'react';

// Type definitions for translations ----- Index signatures in TypeScript
interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

// Translation data
const i18n: Translations = {
  en: {
    &quot;Please Login&quot;: 'Please Login',
  },
  es: {
    &quot;Please Login&quot;: 'Por favor Iniciar sesión',
  },
  fr: {
    &quot;Please Login&quot;: 'Veuillez vous connecter',
  }
};

// Type definition for the props that the HOC will inject into the wrapped component
interface WithTranslationProps {
  t: (key: string) =&gt; string;
  language: string;
  changeLanguage: (lang: string) =&gt; void;
}

// Modify the HOC to accept a generic type for WrappedComponent props
function withTranslation&lt;P extends object&gt;(
  WrappedComponent: React.ComponentType&lt;P &amp; WithTranslationProps&gt;, // Ensure this accepts the correct props
  translation: Translations
) {
  return function (props: P) {
    const [language, setLanguage] = useState&lt;string&gt;('en');

    // Translation function
    const translate = (key: string) =&gt; translation[language][key] || key;

    // Change language function
    const changeLanguage = (lang: string) =&gt; {
      setLanguage(lang);
    };

    return (
      &lt;WrappedComponent
        {...props}
        t={translate}
        language={language}
        changeLanguage={changeLanguage}
      /&gt;
    );
  };
}

// Type definitions for the LoginComponent props
interface LoginComponentProps extends WithTranslationProps {}

const LoginComponent: React.FC&lt;LoginComponentProps&gt; = ({ t, language, changeLanguage }) =&gt; {
  return (
    &lt;div&gt;
      &lt;p&gt;{t('Please Login')}&lt;/p&gt;
      &lt;p&gt;Current language: {language}&lt;/p&gt;
      &lt;button onClick={() =&gt; changeLanguage('en')}&gt;English&lt;/button&gt;
      &lt;button onClick={() =&gt; changeLanguage('es')}&gt;Español&lt;/button&gt;
      &lt;button onClick={() =&gt; changeLanguage('fr')}&gt;Français&lt;/button&gt;
    &lt;/div&gt;
  );
};

// Creating the component with translation functionality using the HOC
const LoginComponentWithTranslation = withTranslation(LoginComponent, i18n);

export default function App() {
  return (
    &lt;div className=&quot;App&quot;&gt;
      &lt;LoginComponentWithTranslation /&gt;
    &lt;/div&gt;
  );
}





////////////////////////////////////
// Fetch API Call and debounce HOC search input
////////////////////////////////

import React, { useState, useEffect, useRef, useCallback } from 'react';

// Define types for the API data
interface ApiData {
  id: number;
  title: string;
}

// Custom hook to debounce search input
const useDebounce = (value: string, delay: number): string =&gt; {
  const [debouncedValue, setDebouncedValue] = useState&lt;string&gt;(value);

  useEffect(() =&gt; {
    const handler = setTimeout(() =&gt; {
      setDebouncedValue(value);
    }, delay);

    return () =&gt; clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

// Define types for the props of the HOC and Wrapped Component
interface WithAuthProps {
  searchInput: string;
}

interface WrappedComponentProps {
  apiData: ApiData[];
}

// Higher-Order Component to handle API fetching and filtering
const withAuth = (
  WrappedComponent: React.ComponentType&lt;WrappedComponentProps&gt;,
  httpComp: () =&gt; Promise&lt;ApiData[]&gt;
) =&gt; {
  return function (props: WithAuthProps) {
    const [apiData, setApiData] = useState&lt;ApiData[]&gt;([]);
    const prevSearchRef = useRef&lt;string | undefined&gt;(null); // Track previous search input value
    const debouncedSearchInput = useDebounce(props.searchInput, 300); // Debounced search input

    const callApi = useCallback(async () =&gt; {
      try {
        const apiD = await httpComp();
        let filteredData = apiD;

        if (debouncedSearchInput) {
          filteredData = apiD.filter((f) =&gt;
            f.title.toLowerCase().includes(debouncedSearchInput.toLowerCase())
          );
        }
        setApiData(filteredData);
      } catch (err) {
        console.error(err);
      }
    }, [debouncedSearchInput, httpComp]);

    useEffect(() =&gt; {
      // Call the API only if the search input has actually changed
      if (debouncedSearchInput !== prevSearchRef.current) {
        callApi();
        prevSearchRef.current = debouncedSearchInput;
      }
    }, [debouncedSearchInput, callApi]);

    return &lt;WrappedComponent {...props} apiData={apiData} /&gt;;
  };
};

// Sample API fetch function
const httpComp = async (): Promise&lt;ApiData[]&gt; =&gt; {
  const apiRes = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await apiRes.json();
};

// Component to display API data
const ShowApiData: React.FC&lt;{ apiData: ApiData[] }&gt; = ({ apiData }) =&gt; {
  return (
    &lt;div&gt;
      {apiData.length ? (
        apiData.map((item) =&gt; &lt;div key={item.id}&gt;{item.title}&lt;/div&gt;)
      ) : (
        &lt;p&gt;No data available&lt;/p&gt;
      )}
    &lt;/div&gt;
  );
};

// Export the HOC with the ShowApiData component
export const ReturnHOCInputCom = withAuth(ShowApiData, httpComp);

`
        }
      ],
    },
    {
      id: 52,
      title: "Authorization ROLE calling api",
      note: [
        {
          text1: ``,
          code1: `//-----------------
          // App.jsx
import React, { useEffect, useState } from 'react';
import { ReturnHOCInputCom } from './withAuth';
import './loginHoc.css';

// Define the User interface as described above
interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: { lat: number; lng: number };
    country: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      coordinates: { lat: number; lng: number };
      country: string;
    };
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
  role: string;
}

function AppHoc() {
  const [users, setUsers] = useState&lt;User[]&gt;([]); // List of users
  const [songleUser, setSongleUser] = useState&lt;User | null&gt;(null); // Single selected user

  useEffect(() =&gt; {
    const getUsers = async () =&gt; {
      try {
        const userRes = await fetch('https://dummyjson.com/users');
        const data = await userRes.json();
        setUsers(data.users); // Set users list
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  const hendleSetUser = (userId: number) =&gt; {
    const singUser = users.find((us) =&gt; us.id === userId);
    setSongleUser(singUser || null); // Set single user or null if not found
  };

  return (
    &lt;&gt;
      &lt;div className=&quot;main-cont&quot;&gt;
        &lt;div&gt;
          &lt;ul className=&quot;ul-list-box&quot;&gt;
            {users.length &gt; 0 &amp;&amp;
              users.map((e) =&gt; (
                &lt;li key={e.id} onClick={() =&gt; hendleSetUser(e.id)}&gt;
                  {e.firstName} {e.lastName}
                &lt;/li&gt;
              ))}
          &lt;/ul&gt;
        &lt;/div&gt;
        &lt;div&gt;
          {/* Pass songleUser prop to HOC, conditionally */}
          {songleUser ? (
            &lt;ReturnHOCInputCom songleUser={songleUser} /&gt;
          ) : (
            &lt;p&gt;Please select a user&lt;/p&gt;
          )}
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/&gt;
  );
}

export default AppHoc;






//---------------------------
// ReturnHOCInputCom.tsx
          import React from 'react';

// Define the User interface as above
// Define the User interface as described above
interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: { lat: number; lng: number };
    country: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      coordinates: { lat: number; lng: number };
      country: string;
    };
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
  role: string;
}
// Define the CheckUserProps interface
interface CheckUserProps {
  songleUser: User | null;
}

// HOC to check if the user has the required role
const withAuth = &lt;P extends object&gt;(
  WrappedComponent: React.ComponentType&lt;P &amp; CheckUserProps&gt;, // Wrapped component expects CheckUserProps
  checkPermissions: (props: CheckUserProps) =&gt; boolean
) =&gt; {
  return function (props: P &amp; CheckUserProps) {
    if (checkPermissions(props)) {
      return &lt;WrappedComponent {...props} /&gt;;
    } else {
      return &lt;p&gt;Please login with appropriate role&lt;/p&gt;;
    }
  };
};

// PrivateComponent to display the logged-in user
const PrivateComponent: React.FC&lt;CheckUserProps&gt; = ({ songleUser }) =&gt; {
  if (!songleUser) {
    return &lt;p&gt;No user selected&lt;/p&gt;;
  }

  return (
    &lt;p&gt;
      YOU are Logged In As &lt;b&gt;{songleUser.role}&lt;/b&gt;
    &lt;/p&gt;
  );
};

// Check if the user has the &quot;admin&quot; role
const yourRole = (props: CheckUserProps) =&gt; {
  return props.songleUser?.role === 'admin'; // Check user role
};

// Export the HOC-wrapped component
export const ReturnHOCInputCom = withAuth(PrivateComponent, yourRole);
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
