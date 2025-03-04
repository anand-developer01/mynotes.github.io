
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
  ]
}
