const isHighlighted = 'react-projects'
const Links1 = 'react-notes'
const Links2 = 'redux-notes'
const Links3 = 'react-typescript-data'
const Links4 = 'react-projects'

const reactProjectsData = {
    reactProjects: [
    {
      id: 1,
      title: "useContext login App",
      note: [
        {
          text1: ``,
          code1: `// App.jsx
          import { HashRouter, Route, Routes } from &quot;react-router-dom&quot;;
import Dashboard from &quot;./Dashboard&quot;;
import LoginContext from &#39;./LoginContext&#39;
import AuthProvider from &#39;./AuthContext&#39;
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
import { Navigate, Outlet } from &#39;react-router-dom&#39;;

const WithAuthHOC = () =&gt; {
    const sessionUserData = localStorage.getItem(&#39;user&#39;);
    if (sessionUserData?.length &gt; 0) {
        return &lt;Outlet /&gt;;
    } else {
        return &lt;Navigate to=&quot;/&quot; /&gt;; // Redirect to login if not authenticated
    }
};

export default WithAuthHOC;



//--------------
// Login.jsx
import { useContext, useState, useEffect } from &#39;react&#39;;
import { AuthContextUser } from &#39;./AuthContext&#39;;
import { useNavigate } from &#39;react-router-dom&#39;;
import &#39;./auth.css&#39;;

const ContextLogin = () =&gt; {
    const [userInput, setUserInput] = useState({ username: &#39;&#39;, password: &#39;&#39; });
    const { loginAction } = useContext(AuthContextUser);
    const navigate = useNavigate(); // Initialize navigate

    // Check if user is already logged in by looking for the user data in localStorage
    useEffect(() =&gt; {
        const sessionUserData = localStorage.getItem(&#39;user&#39;);
        if (sessionUserData) {
            navigate(&#39;/dashboard&#39;); // If user is logged in, redirect to dashboard
        }
    }, [navigate]);

    const handleSubmitEvent = (e) =&gt; {
        e.preventDefault();
        loginAction(userInput).then(() =&gt; {
            navigate(&#39;/dashboard&#39;); // Navigate to the dashboard after successful login
        });
    };

    const handleInput = (e) =&gt; {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    };

    return (
        &lt;div className=&#39;main&#39;&gt;
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
import axios from &#39;axios&#39;;
import { useNavigate } from &quot;react-router-dom&quot;;

export const AuthContextUser = createContext();

const AuthProvider = ({ children }) =&gt; {
    const [isAuth, setIsAuth] = useState(false);
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    // Check for session when the component mounts
    useEffect(() =&gt; {
        const sessionUserData = localStorage.getItem(&#39;user&#39;);
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
        navigate(&#39;/&#39;);
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
  ]
}




