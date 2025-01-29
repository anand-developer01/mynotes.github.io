
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
    &lt;ul className={\`pagination-container \${className || &#39;&#39;}\`}&gt;
      {/* Left Navigation Arrow */}
      &lt;li
        className={\`pagination-item \${currentPage === 1 ? &#39;disabled&#39; : &#39;&#39;}\`}
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
            className={\`pagination-item \${pageNumber === currentPage ? &#39;selected&#39; : &#39;&#39;}\`}
            onClick={() =&gt; onPageChange(pageNumber)}
          &gt;
            {pageNumber}
          &lt;/li&gt;
        );
      })}

      {/* Right Navigation Arrow */}
      &lt;li
        className={\`pagination-item \${currentPage === lastPage ? &#39;disabled&#39; : &#39;&#39;}\`}
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
