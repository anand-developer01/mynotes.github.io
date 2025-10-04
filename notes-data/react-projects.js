const isHighlighted = 'react-projects'
const Links1 = 'react-notes'
const Links2 = 'redux-notes'
const Links3 = 'react-typescript-data'
const Links4 = 'react-projects'

const reactProjectsData = {
    reactProjects: [
        {
            id: 1,
            title: "frontend-interview-questions/tree/master",
            note: [
                {
                    text1: `<a href="https://github.com/piyush-eon/frontend-interview-questions/tree/master" target="_blank"
                    rel="noopener">frontend-interview-questions/tree/master</a>`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "JavaScript Event Loop",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "JavaScript Event Loop",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "useContext login App",
            note: [
                {
                    text1: ``,
                    code1: `// App.jsx
          import { HashRouter, Route, Routes } from &quot;react-router-dom&quot;;
import Dashboard from &quot;./Dashboard&quot;;
import LoginContext from './LoginContext'
import AuthProvider from './AuthContext'
import WithAuthHOC from &quot;./WithAuthHOC&quot;;

function App() {
    return (
        &lt;&gt;
            &lt;HashRouter&gt;
                &lt;AuthProvider&gt;
                    &lt;Routes&gt;

                        &lt;Route element={&lt;WithAuthHOC /&gt;} &gt;
                            &lt;Route path=&quot;/dashboard&quot; element={&lt;Dashboard /&gt;} /&gt;
                        &lt;/Route&gt;
                        &lt;Route path=&quot;/&quot; element={&lt;LoginContext /&gt;} /&gt;

                    &lt;/Routes&gt;
                &lt;/AuthProvider&gt;
            &lt;/HashRouter&gt;
        &lt;/&gt;
    );
}

export default App;


//----------- 
//WithAuthHOC.js
import { Navigate, Outlet } from 'react-router-dom';

const WithAuthHOC = () =&gt; {
    const sessionUserData = localStorage.getItem('user');
    if (sessionUserData?.length &gt; 0) {
        return &lt;Outlet /&gt;;
    } else {
        return &lt;Navigate to=&quot;/&quot; /&gt;; // Redirect to login if not authenticated
    }
};

export default WithAuthHOC;



//--------------
// Login.jsx
import { useContext, useState, useEffect } from 'react';
import { AuthContextUser } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './auth.css';

const ContextLogin = () =&gt; {
    const [userInput, setUserInput] = useState({ username: ', password: ' });
    const { loginAction } = useContext(AuthContextUser);
    const navigate = useNavigate(); // Initialize navigate

    // Check if user is already logged in by looking for the user data in localStorage
    useEffect(() =&gt; {
        const sessionUserData = localStorage.getItem('user');
        if (sessionUserData) {
            navigate('/dashboard'); // If user is logged in, redirect to dashboard
        }
    }, [navigate]);

    const handleSubmitEvent = (e) =&gt; {
        e.preventDefault();
        loginAction(userInput).then(() =&gt; {
            navigate('/dashboard'); // Navigate to the dashboard after successful login
        });
    };

    const handleInput = (e) =&gt; {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    };

    return (
        &lt;div className='main'&gt;
            &lt;form onSubmit={handleSubmitEvent}&gt;
                &lt;div className=&quot;form_control&quot;&gt;
                    &lt;label htmlFor=&quot;user-email&quot;&gt;Email:&lt;/label&gt;
                    &lt;input
                        type=&quot;text&quot;
                        id=&quot;user-email&quot;
                        name=&quot;username&quot;
                        onChange={handleInput}
                    /&gt;
                &lt;/div&gt;
                &lt;div className=&quot;form_control&quot;&gt;
                    &lt;label htmlFor=&quot;password&quot;&gt;Password:&lt;/label&gt;
                    &lt;input
                        type=&quot;password&quot;
                        id=&quot;password&quot;
                        name=&quot;password&quot;
                        onChange={handleInput}
                    /&gt;
                &lt;/div&gt;
                &lt;button className=&quot;btn-submit&quot;&gt;Submit&lt;/button&gt;
            &lt;/form&gt;
        &lt;/div&gt;
    );
};

export default ContextLogin;



//------------
// AuthContextUser.jsx
import { createContext, useContext, useState, useEffect } from &quot;react&quot;;
import axios from 'axios';
import { useNavigate } from &quot;react-router-dom&quot;;

export const AuthContextUser = createContext();

const AuthProvider = ({ children }) =&gt; {
    const [isAuth, setIsAuth] = useState(false);
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    // Check for session when the component mounts
    useEffect(() =&gt; {
        const sessionUserData = localStorage.getItem('user');
        if (sessionUserData) {
            setUserData(JSON.parse(sessionUserData));
            setIsAuth(true); // Mark user as authenticated
        }
    }, []);

    // Login action that sets user data in localStorage
    const loginAction = async (loginData) =&gt; {
        try {
            const res = await axios.get(\`https://jsonplaceholder.typicode.com/users?id=\${loginData.username}\`);
            localStorage.setItem(&quot;user&quot;, JSON.stringify(res.data)); // Save user data to localStorage
            setUserData(res.data);
            setIsAuth(true); // Mark the user as authenticated
            return res; // Return the response to let the calling component know
        } catch (err) {
            console.log(err);
            throw err;
        }
    };

    // Log out action
    const logOut = () =&gt; {
        localStorage.removeItem(&quot;user&quot;);
        setUserData({});
        setIsAuth(false);
        navigate('/login');
    };

    return (
        &lt;AuthContextUser.Provider value={{ isAuth, userData, loginAction, logOut }}&gt;
            {children}
        &lt;/AuthContextUser.Provider&gt;
    );
};

export const useAuth = () =&gt; useContext(AuthContextUser);

export default AuthProvider;

//-----------------
//Dashboard.jsx
import { useContext } from &quot;react&quot;;
import { AuthContextUser } from &quot;./AuthContext&quot;; 

const Dashboard = () =&gt; {
  const { userData, logOut } = useContext(AuthContextUser);

  const handleLogout = () =&gt; {
    logOut(); // Log out and redirect to home page
  };

  return (
    &lt;div&gt;
      &lt;h1&gt;Dashboard&lt;/h1&gt;
      &lt;p&gt;Welcome to the dashboard!&lt;/p&gt;
      &lt;h4&gt;{userData[0]?.username}&lt;/h4&gt;
      &lt;button onClick={handleLogout}&gt;Logout&lt;/button&gt;
    &lt;/div&gt;
  );
};

export default Dashboard;
`
                }
            ]
        },
        {
            id: 1,
            title: "This prevents an API call on every keystroke and only triggers the call after the user stops typing for 300 milliseconds.",
            note: [
                {
                    text1: ``,
                    code1: `// App.tsx
import React, { useState } from 'react';
import { ReturnHOCInputCom } from './withAuth';
function AppHoc() {
  const [searchInput, setSearchInput] = useState(')
  return (
    &lt;&gt;
      &lt;input type='text' value={searchInput} onChange={e =&gt; setSearchInput(e.target.value)} /&gt;
      &lt;ReturnHOCInputCom extraVal=&quot;This is extra text&quot; searchInput={searchInput}/&gt;
    &lt;/&gt;
  );
}

export default AppHoc;


//-------------------
import React, { useState, useEffect } from 'react';

// Custom hook to debounce search input
const useDebounce = (value, delay) =&gt; {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() =&gt; {
    const handler = setTimeout(() =&gt; {
      setDebouncedValue(value);
    }, delay);

    // Cleanup the timeout
    return () =&gt; clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

const withAuth = (Wrappedcomponent, httpComp) =&gt; {
  return function (props) {
    const [apiData, setApiData] = useState([]);
    const debouncedSearchInput = useDebounce(props.searchInput, 300); // Debounce search input

    useEffect(() =&gt; {
      const callApi = async () =&gt; {
        try {
          const apiD = await httpComp();
          let filteredData = apiD;

          if (debouncedSearchInput) {
            filteredData = apiD.filter(f =&gt;
              f.title.toLowerCase().includes(debouncedSearchInput.toLowerCase())
            );
          }

          setApiData(filteredData);
        } catch (err) {
          console.log(err);
        }
      };

      callApi();
    }, [debouncedSearchInput]); // Only trigger effect when the debounced value changes

    return &lt;Wrappedcomponent {...props} apiData={apiData} /&gt;;
  };
};

// Sample API fetch function
const httpComp = async () =&gt; {
  const apiRes = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await apiRes.json();
};

// Component to display API data
const showApiData = ({ apiData }) =&gt; {
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

// Export the HOC with the showApiData component
export const ReturnHOCInputCom = withAuth(showApiData, httpComp);

`
                }
            ]
        },
        {
            id: 1,
            title: "JavaScript Event Loop",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "React category wise product filter using check box",
            note: [
                {
                    text1: ``,
                    code1: `//---------- using new Set --------------
            import * as React from 'react';
import { useState } from 'react';

// Categories to filter by
const categories = [
    'electronics',
    'jewelery',
    &quot;men's clothing&quot;,
    &quot;women's clothing&quot;,
];

// List of all products
const allProducts = [
    {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        category: 'electronics',
        rating: { rate: 3.9, count: 120 },
    },
    {
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts ',
        price: 22.3,
        category: &quot;men's clothing&quot;,
        rating: { rate: 4.1, count: 259 },
    },
    {
        id: 3,
        title: 'Mens Cotton Jacket',
        price: 55.99,
        category: &quot;men's clothing&quot;,
        rating: { rate: 4.7, count: 500 },
    },
    {
        id: 4,
        title: 'Womens Dress',
        price: 15.99,
        category: &quot;women's clothing&quot;,
        rating: { rate: 2.1, count: 430 },
    },
    {
        id: 5,
        title: &quot;John Hardy Women's Legends Naga Gold &amp; Silver Dragon Station Chain Bracelet&quot;,
        price: 695,
        category: 'jewelery',
        rating: { rate: 4.6, count: 400 },
    },
];

export default function App() {
    let [categoryFilters, setcategoryFilters] = useState(new Set());

    function updateFilters(checked, categoryFilter) {
        if (checked) {
            setcategoryFilters((prev) =&gt; {
                const next = new Set(prev); // Create a new Set
                next.add(categoryFilter); // Add the selected category
                return next;
            });
        } else {
            setcategoryFilters((prev) =&gt; {
                const next = new Set(prev); // Create a new Set
                next.delete(categoryFilter); // Remove the deselected category
                return next;
            });
        }
    }

    // Filter products based on selected categories
    const filteredProducts =
        categoryFilters.size === 0
            ? allProducts
            : allProducts.filter((p) =&gt; categoryFilters.has(p.category));

    return (
        &lt;div&gt;
            &lt;div className=&quot;d-flex justify-content-evenly&quot;&gt;
                {categories.map((elm, index) =&gt; {
                    return (
                        &lt;div className=&quot;form-check ms-2&quot; key={index}&gt;
                            &lt;label className=&quot;form-check-label&quot;&gt;
                                &lt;input
                                    className=&quot;form-check-input&quot;
                                    type=&quot;checkbox&quot;
                                    onChange={(e) =&gt; updateFilters(e.target.checked, elm)}
                                /&gt;
                                {elm}
                            &lt;/label&gt;
                        &lt;/div&gt;
                    );
                })}
            &lt;/div&gt;

            &lt;div className=&quot;d-flex flex-wrap&quot;&gt;
                {filteredProducts.map((prod) =&gt; {
                    return (
                        &lt;div className=&quot;card m-3&quot; style={{ width: '400px' }} key={prod.id}&gt;
                            &lt;div className=&quot;card-body&quot;&gt;
                                &lt;p className=&quot;card-text&quot;&gt;Id: {prod.id}&lt;/p&gt;
                                &lt;h3 className=&quot;card-title&quot;&gt;Title: {prod.title}&lt;/h3&gt;
                                &lt;p className=&quot;card-text&quot;&gt;Price: {prod.price}&lt;/p&gt;
                                &lt;p className=&quot;card-text&quot;&gt;Category: {prod.category}&lt;/p&gt;
                                &lt;p className=&quot;card-text&quot;&gt;Rating: {prod.rating.rate}&lt;/p&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    );
                })}
            &lt;/div&gt;
        &lt;/div&gt;
    );
}


//---------- using new Array --------------
import * as React from &#39;react&#39;;
import { useState, useMemo } from &#39;react&#39;;

const categories = [
    &#39;electronics&#39;,
    &#39;jewelery&#39;,
    &quot;men&#39;s clothing&quot;,
    &quot;women&#39;s clothing&quot;,
];

const allProducts = [
    {
        id: 1,
        title: &#39;Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops&#39;,
        price: 109.95,
        category: &#39;electronics&#39;,
        rating: { rate: 3.9, count: 120 },
    },
    {
        id: 2,
        title: &#39;Mens Casual Premium Slim Fit T-Shirts &#39;,
        price: 22.3,
        category: &quot;men&#39;s clothing&quot;,
        rating: { rate: 4.1, count: 259 },
    },
    {
        id: 3,
        title: &#39;Mens Cotton Jacket&#39;,
        price: 55.99,
        category: &quot;men&#39;s clothing&quot;,
        rating: { rate: 4.7, count: 500 },
    },
    {
        id: 4,
        title: &#39;Womens Dress&#39;,
        price: 15.99,
        category: &quot;women&#39;s clothing&quot;,
        rating: { rate: 2.1, count: 430 },
    },
    {
        id: 5,
        title:&quot;John Hardy Women&#39;s Legends Naga Gold &amp; Silver Dragon Station Chain Bracelet&quot;,
        price: 695,
        category: &#39;jewelery&#39;,
        rating: { rate: 4.6, count: 400 },
    },
];

export default function App() {
    let [categoryFilters, setCategoryFilters] = useState([]);

    function updateFilters(checked, categoryFilter) {
        setCategoryFilters((prev) =&gt; {
            // If checked, add the category, else remove it
            if (checked) {
                return [...prev, categoryFilter]; // Add categoryFilter to prev state
            } else {
                return prev.filter((item) =&gt; item !== categoryFilter); // Remove categoryFilter
            }
        });
    }

    // Memoize filtered products based on selected categories
    const filteredProducts = useMemo(() =&gt; {
        return categoryFilters.length === 0
            ? allProducts
            : allProducts.filter((p) =&gt; categoryFilters.includes(p.category));
    }, [categoryFilters]);

    return (
        &lt;div&gt;
            &lt;div className=&quot;d-flex justify-content-evenly&quot;&gt;
                {categories.map((elm, index) =&gt; {
                    return (
                        &lt;div className=&quot;form-check ms-2&quot; key={index}&gt;
                            &lt;label className=&quot;form-check-label&quot;&gt;
                                &lt;input
                                    className=&quot;form-check-input&quot;
                                    type=&quot;checkbox&quot;
                                    onChange={(e) =&gt; updateFilters(e.target.checked, elm)}
                                /&gt;
                                {elm}
                            &lt;/label&gt;
                        &lt;/div&gt;
                    );
                })}
            &lt;/div&gt;
            &lt;div className=&quot;d-flex flex-wrap&quot;&gt;
                {filteredProducts.map((prod) =&gt; {
                    return (
                        &lt;div className=&quot;card m-3&quot; style={{ width: &#39;400px&#39; }} key={prod.id}&gt;
                            &lt;div className=&quot;card-body&quot;&gt;
                                &lt;p className=&quot;card-text&quot;&gt;Id: {prod.id}&lt;/p&gt;
                                &lt;h3 className=&quot;card-title&quot;&gt;Title: {prod.title}&lt;/h3&gt;
                                &lt;p className=&quot;card-text&quot;&gt;Price: {prod.price}&lt;/p&gt;
                                &lt;p className=&quot;card-text&quot;&gt;Category: {prod.category}&lt;/p&gt;
                                &lt;p className=&quot;card-text&quot;&gt;Rating: {prod.rating.rate}&lt;/p&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    );
                })}
            &lt;/div&gt;
        &lt;/div&gt;
    );
}

`
                }
            ]
        },
        {
            id: 1,
            title: "Observer Pattern (also called Publish–Subscribe pattern)",
            note: [
                {
                    text1: `<b>Why it’s called Observer Pattern</b>

You have a <b>subject</b> → <b>NotificationService</b>

And <b>observers</b> (subscribers) → in this case, the <b>NotificationProvider</b> (and potentially others) subscribe to notification events.

When something happens (e.g., <b>showBanner</b> is called), the service notifies all subscribers, and they react accordingly (showing a banner)
.`,
                    code1: `// NotificationService.ts
class NotificationService {
  private static listeners: ((props: any) => void)[] = [];

  static subscribe(listener: (props: any) => void) {
    NotificationService.listeners.push(listener);
  }

  static unsubscribe(listener: (props: any) => void) {
    NotificationService.listeners = NotificationService.listeners.filter(
      (l) => l !== listener
    );
  }

  static showBanner(props: any) {
    NotificationService.listeners.forEach((listener) => listener(props));
  }
}

export default NotificationService;


// NotificationProvider.tsx
import React, { useEffect, useRef, useState } from "react";
import NotificationService from "./NotificationService";

// Optional: Create a context if you want to call showBanner from children
export const NotificationContext = React.createContext({
  showBanner: (props: any, duration?: number) => {},
});

const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [banner, setBanner] = useState<{
    bannerTitle: string;
    bannerMessage: string;
    variant: "soft" | "critical" | "informational";
  } | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const timeRef = useRef<NodeJS.Timeout | null>(null);

  const showBanner = (
    props: {
      bannerTitle: string;
      bannerMessage: string;
      variant: "soft" | "critical" | "informational";
    },
    duration = 3000
  ) => {
    setBanner(props);
    setIsVisible(true);

    if (timeRef.current) clearTimeout(timeRef.current);
    timeRef.current = setTimeout(() => {
      setBanner(null);
      setIsVisible(false);
    }, duration);
  };

  useEffect(() => {
    const listener = (props: any) => {
      showBanner(props);
    };

    NotificationService.subscribe(listener);
    return () => {
      NotificationService.unsubscribe(listener);
      if (timeRef.current) clearTimeout(timeRef.current);
    };
  }, []);

  return (
    &lt;NotificationContext.Provider value={{ showBanner }}&gt;
      {isVisible &amp;&amp; banner &amp;&amp; (
        &lt;div
          className={\`notification- banner \${ banner.variant }\`}
          style={{
            position: &quot;fixed&quot;,
            top: 10,
            right: 10,
            padding: &quot;10px 15px&quot;,
            background: &quot;#333&quot;,
            color: &quot;#fff&quot;,
            borderRadius: &quot;8px&quot;,
          }}
        &gt;
          &lt;strong&gt;{banner.bannerTitle}&lt;/strong&gt;
          &lt;div&gt;{banner.bannerMessage}&lt;/div&gt;
        &lt;/div&gt;
      )}
      {children}
    &lt;/NotificationContext.Provider&gt;
  );
};

export default NotificationProvider;


// NotificationProvider.tsx
import NotificationService from "./NotificationService";

const NotificationProvider = () => {
  const handleClick = () => {
    NotificationService.showBanner({
      bannerTitle: "Success",
      bannerMessage: "Your changes have been saved!",
      variant: "soft",
    });
  };

  return &lt;button onClick={handleClick}&gt;Show Banner&lt;/button&gt;;
};

export default NotificationProvider

//App.tsx
import { } from 'react'
import NotificationProvider from "./components/notification/NotificationProvider";
import UtilizeNotification from './components/notification/UtilizeNotification'

function App() {

  return (
    &lt;&gt;
      &lt;NotificationProvider&gt;
        &lt;UtilizeNotification /&gt;
      &lt;/NotificationProvider&gt;
    &lt;/&gt;
  )
}

export default App
`
          }
    ]
},
  ]
}




