const isHighlighted = 'javascript-notes'
const Links1 = 'MERN-notes'
const Links2 = 'mongodb'
const Links3 = 'express js'
const Links4 = 'javascript-projects'

const mernData = {
    mernNote: [

        {
            id: 1,
            title: "aff intro",
            note: [
                {
                    text1: `
Senior MERN Stack Developer Interview Preparation Guide

Since you're aiming for a Senior MERN Stack Developer role, your interview will likely cover React.js, Node.js, MongoDB, Express.js, system design, performance optimization, and DevOps. Below is a structured roadmap to help you prepare effectively.
📌 <b>1. React.js & Frontend Topics</b>
✅ Core React Concepts

    React Hooks (useState, useEffect, useContext, useReducer, useMemo, useCallback)

    Component Lifecycle & Performance Optimization (React.memo, lazy loading, suspense)

    Reusable Components & Design Patterns (HOC, Render Props, Compound Components)

    React Context vs. Redux (When to use which?)

    State Management (Redux Toolkit, Zustand, Recoil)

    React with TypeScript (Types for props, state, context, and Redux)

✅ UI Performance Optimization

    Code Splitting & Lazy Loading (React.lazy, Suspense)

    Virtual DOM & Reconciliation

    Optimizing Rerenders (React.memo, useMemo, useCallback)

    Debouncing & Throttling in Input Fields

✅ React with APIs

    REST vs. GraphQL API Integration

    Handling Authentication (JWT, OAuth, Session Management)

    WebSockets for Real-Time Applications

✅ Testing & Automation

    Jest & React Testing Library

    Playwright or Cypress for UI Automation Testing

📌 <b>2. Node.js & Backend Topics</b>
✅ Core Node.js Concepts
    Event Loop, Callbacks, Promises, Async/Await
    Streams & Buffer
    Cluster & Worker Threads for Performance
✅ Express.js & API Development
    Middleware, Error Handling, Logging
    Authentication & Authorization (JWT, OAuth)
    Rate Limiting & Security Best Practices
    WebSockets with socket.io
✅ Database & MongoDB
    Schema Design & Indexing in MongoDB
    Aggregation Pipeline for Complex Queries
    Transactions & ACID Compliance in MongoDB
    Mongoose ODM

✅ Caching & Performance Optimization
    Redis for Caching & Session Management
    Query Optimization using Indexes
    Load Balancing & Reverse Proxy (Nginx)

📌 <b>3. System Design & Architecture</b>
✅ High-Level System Design

    Designing Scalable Applications (Microservices vs. Monolith)

    Database Scaling (Sharding, Replication, Partitioning)

    Load Balancing & CDN (NGINX, CloudFront)

    WebSockets for Real-Time Communication

    Serverless with AWS Lambda or Firebase

📌 <b>4. DevOps & Deployment</b>
✅ CI/CD & Deployment

    Docker & Kubernetes

    AWS Services (EC2, S3, Lambda, RDS, DynamoDB)

    GitHub Actions for CI/CD

    Logging & Monitoring (ELK Stack, Prometheus, Grafana)

📌 <b>5. Coding & DSA (JavaScript)</b>
✅ Problem-Solving Skills

    JavaScript Array & String Manipulation

    Recursion, Sliding Window, Two-Pointer, HashMaps

    Tree & Graph Traversal

    Big-O Analysis for Performance

Practice coding on:

    LeetCode (Medium/Hard)

    HackerRank

    CodeSignal

📌 <b>6. Behavioral & System Design Interview</b>
✅ Behavioral Questions

    "Tell me about a challenging project."

    "How do you handle conflicts in a team?"

    "How do you mentor junior developers?"

    "Describe a time when you optimized a slow application."

✅ System Design Questions

    How would you design an e-commerce system (like Flipkart)?

    How would you design a chat application (like WhatsApp)?

    How would you scale a URL shortener (like Bit.ly)?

    How would you optimize a search feature in a large dataset?

🚀 Action Plan for You

    Solve 1-2 DSA Problems Daily (LeetCode Medium)

    Revise MERN Stack Concepts Daily

    Build a Scalable Full-Stack Project

    Practice System Design Mock Interviews

    Prepare for Behavioral Interviews

    Stay Updated with Trends (Next.js, Serverless, AI Integration)
            `
                }
            ]
        },
        {
            id: 1,
            section: "Core Node.js Concepts",
            title: "Modules",
            note: [
                {
                    text1: `<b>Modules</b>
                    A module is an encapsulated and reusable chunk of code that has its own context 
                    In node.js each file is treated as a separate module
                    In Node.js, modules are reusable blocks of code that can be included in a Node.js application. Modules help in structuring the application into smaller, manageable parts, allowing for better maintainability and code reuse.
                    1) Local Modules 
                    2) Built-in Modules ( Core Modules )
                    3) Third party modules
                    `,
                    code1: ``
                },
                {
                    text1: `<b>1. Local Modules</b>
Local modules are custom modules that you create within your own application to organize and separate your code. These are not part of Node.js's core library or third-party packages, but are rather created and maintained by you for specific functionalities within your project.

<b>Key Points</b>:
<b>Custom Modules</b>: You create local modules based on your application's requirements.
<b>Modularization</b>: Helps in organizing code into smaller, reusable chunks.
File-Based: Typically consists of one or more JavaScript files, and can export functions, objects, or data for use in other files.`,
                    code1: ``
                },
                {
                    text1: `<b>2. Built-in Modules ( Core Modules )</b>
These are modules that come pre-installed with Node.js. They are part of the Node.js runtime environment and do not need to be installed separately. These modules offer a wide variety of functionalities, such as file system operations, networking, URL parsing, etc.

1) http
2) fs (File System) 
3) path
4) events
5) os
6) url
7) util
8) stream
`,
                    code1: ``
                },
                {
                    text1: `<b>Third party modules</b>
                    These are third-party modules that can be installed from npm (Node Package Manager) and used to add additional functionality to your Node.js application. Some popular external modules include
                    Third-party modules are modules created by the community that extend the functionality of Node.js. These modules are not part of Node.js, but you can install them using npm (Node Package Manager) or yarn. They can offer functionalities ranging from web frameworks to utilities for database connections, file uploads, authentication, and more.
                    express, mongoose, lodash, axios, socket.io
                    `,
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
            title: "Built-in HTTP Module",
            note: [
                {
                    text1: `Node.js HTTP module is a built-in library that allows developers to create web servers, as well as communicate with other APIs using HTTP 1.1, HTTP 2, and HTTPS.
                    
                    The http module in Node.js is one of the core modules that allows you to create web servers and handle HTTP requests and responses. It is essential for building APIs, web applications, or any service that needs to interact over HTTP or HTTPS.

                    The HTTP module extends two built-in classes:
<b>Net module</b>
Provides network API for creating stream-based TCP servers or clients.
<b>Events module</b>
Provides an event-driven architecture using EventEmitter class.

<b>Key Features of the http Module</b>
<b>Create HTTP Servers</b>: The <b>http</b> module allows you to create an HTTP server to listen for incoming HTTP requests and send responses back to the clients.
<b>Handle HTTP Requests and Responses</b>: It provides APIs to parse incoming HTTP requests and send out HTTP responses.
<b>HTTP Methods</b>: The module allows handling different HTTP methods such as <b>GET, POST, PUT, DELETE,</b> etc.
<b>Custom Headers</b>: You can set custom headers and content in the HTTP response.

<b>Basic Usage of the http Module</b>
Here's how you can use the <b>http</b> module to create a simple HTTP server.
<b>Creating a Simple HTTP Server</b></b>:
<b>Import the <u>http</u> module</b>: You use the <b>require()</b> function to load the <b>http</b> module.
<b>Create the server</b>: Use the <b>http.createServer()</b> method to create a new HTTP server. The server takes a callback function that handles incoming requests and sends a response.
<b>Listen on a Port</b>: Use the <b>server.listen()</b> method to make the server listen on a specific port.

<b>http.createServer()</b>: Creates the HTTP server. The callback function <b>(req, res)</b> gets executed every time an incoming HTTP request is made.
<b>req</b>: Represents the incoming request object that contains data about the request.
<b>res</b>: Represents the outgoing response object, allowing you to send a response back to the client.
<b>res.writeHead(200, { 'Content-Type': 'text/plain' })</b>: Sends the response header with a status code 200 (OK) and specifies the response type as plain text.
<b>res.end()</b>: Ends the response and sends the data <b>('Hello, world!')</b> to the client.
<b>server.listen(3000)</b>: Listens for incoming connections on port <b>3000</b>.
`,
                    code1: `const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Handle GET requests
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is a GET request\n');
  }
  
  // Handle POST requests
  else if (req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(\`Received POST data: \${body}\n\`);
    });
  }
  else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed\n');
  }
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


// ----------- Ex : 2 ------------
const http = require('http');
const url = require('url');

// Create the server
const server = http.createServer((req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;

  // Define routes
  if (pathname === '/api/greet' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello, world!' }));
  } 
  else if (pathname === '/api/user' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      const user = JSON.parse(body);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: \`User \${user.name} created!\` }));
    });
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(8010, () => {
  console.log('API server running on http://localhost:8010');
});

`
                },
                {
                    text1: ``,
                    code1: ``
                },
                {
                    text1: `<b>For req (Request) Object</b>:
<b>req.get(headerName)</b>: Retrieve a request header by name.
<b>req.is(type)</b>: Check if the request body is of a specific content type.
<b>req.method</b>: HTTP method (e.g., GET, POST).
<b>req.query</b>: Query string parameters.
<b>req.body</b>: Request body (e.g., for POST, PUT requests).
<b>req.socket</b>: Access to the TCP socket for lower-level network info.
<b>req.accepts(types)</b>: Check if the client accepts the specified content type.
<b>req.on()</b>:
Used to listen for events related to the incoming request.
Common events include <b>data, end</b>, and <b>error</b>.
Helps in handling incoming data (e.g., chunks of the request body) and managing the request lifecycle.

<b>For res (Response) Object</b>:
<b>res.status(code)</b>: Set the HTTP status code for the response.
<b>res.send(body)</b>: Send a response body (string, object, array).
<b>res.json(body)</b>: Send a JSON response.
<b>res.sendFile(path)</b>: Send a file as the response.
<b>res.redirect(url)</b>: Redirect to another URL.
<b>res.setHeader(name, value)</b>: Set a header for the response.
<b>res.cookie(name, value, options)</b>: Set a cookie.
<b>res.clearCookie(name, options)</b>: Clear a cookie.
<b>res.write(chunk)</b>: Write a chunk to the response (used in streaming).
<b>res.end(data)</b>: End the response and optionally send data.
<b>res.setTimeout(ms, callback)</b>: Set a timeout for the response.
<b>res.flush()</b>: Flush the response to the client immediately.
<b>res.setHeader()</b>:

`,
                    code1: ``
                },
            ]
        },
        {
            id: 1,
            title: "Node.js as a File Server",
            note: [
                {
                    text1: ``,
                    code1: ``
                },
                {
                    text1: ``,
                    code1: ``
                },
                {
                    text1: `Ex : 1
                    <b>Use of Express</b>: This approach uses <b>Express</b> directly to handle the route <b>/file</b>. Express simplifies many aspects of routing, request handling, and error management.
<b>File Handling</b>: The code uses <b>fs.readFile()</b> to read the file into memory and then sends the file using <b>res.send()</b>.
<b>Content-Type</b>: The <b>Content-Type</b> header is set to <b>"PNG"</b>, which should ideally be <b>"image/png"</b>.
<b>Error Handling</b>: If the file is not found, it responds with <b>404 Not Found.</b>`,
                    code1: `//----------- Ex : 1 ---------
                    // Useing Express js
                    const http = require('http');
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.get('/file', (req, res) => {
    const file = fs.readFile("./assets/wall.png", (err, file) => {
        if(err) res.status(404).end("Not found");
        res.set("Content-Type", "PNG");
        res.send(file)
    })
})




// ------------Ex : 2 ------------
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create the server
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.statusCode = 501;
        res.setHeader("Content-Type", "text/plain");
        return res.end("Method not implemented");
    }

    const reqPath = req.url.toString().split("?")[0];
    // Check if the requested path matches the image
    if (reqPath === "/file") {
        const filePath = path.join(__dirname, 'assets', 'wall.png');

        // Stream the image file
        const stream = fs.createReadStream(filePath);

        stream.on("open", () => {
            res.setHeader("Content-Type", "image/png"); // Set content type to image/png
            stream.pipe(res); // Stream the file to the response
        });

        // Handle any error with file reading
        stream.on("error", (err) => {
            res.statusCode = 500;
            res.setHeader("Content-Type", "text/plain");
            res.end("Error reading the file.");
        });
    } else {
        // Handle case where file doesn't match
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("File not found.");
    }
});

server.listen(8010, () => {
    console.log('API server running on http://localhost:8010');
});
`
                },
            ]
        },
        {
            id: 1,
            title: "URL Module",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "What is NPM?",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Events",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Callbacks",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Formidable Module",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Nodemailer (Email)",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Callbacks",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Promises",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Async/Await",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Streams & Buffer",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Cluster & Worker Threads for Performance",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "Express.js & API Development",
            title: "Middleware",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Logging",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Authentication & Authorization (JWT, OAuth)",
            note: [
                {
                    text1: ``,
                    code1: ``
                },
                {
                    text1: ``,
                    code1: `// -------------  Frontend React ------------
                    import React, { useState } from &#39;react&#39;;
import axios from &#39;axios&#39;;

// Interface for the User object
interface User {
  username: string;
  password: string;
}

// Interface for the Protected data returned from API
interface ProtectedData {
  message: string;
  user: object; // You can replace \`object\` with a more specific type for user if needed
}

const App: React.FC = () =&gt; {
  // State hooks
  const [userLogins, setUserLogins] = useState&lt;User&gt;({ username: &#39;&#39;, password: &#39;&#39; });
  const [token, setToken] = useState&lt;string&gt;(&#39;&#39;); // JWT token
  const [protectedData, setProtectedData] = useState&lt;ProtectedData&gt;({ message: &#39;&#39;, user: {} });
  const [apiError, setApiError] = useState&lt;string&gt;(&#39;&#39;); // API error message

  // Handle login and store the token
  const handleLogin = async () =&gt; {
    const { username, password } = userLogins;
    try {
      const response = await axios.post(&#39;http://localhost:5000/login&#39;, { username, password });
      setToken(response.data.token); // Set token after successful login
      console.log(&#39;Token inside login function:&#39;, response.data.token);
      setApiError(&#39;&#39;); // Clear any previous error if login is successful
    } catch (error: any) {
      console.error(&#39;Login failed&#39;, error.response?.data?.message || error.message);
      setApiError(error.response?.data?.message || &#39;Login failed. Please try again.&#39;);
    }
  };

  // Handle input changes for login form
  const handleInput = (e: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; {
    const { name, value } = e.target;
    setUserLogins({ ...userLogins, [name]: value });
  };

  // Fetch protected data using the token
  const fetchProtectedData = async () =&gt; {
    console.log(&#39;Using token for protected data:&#39;, token);

    if (!token) {
      console.error(&#39;Token is missing&#39;);
      return; // Prevent data fetch if token is missing
    }

    try {
      const response = await axios.post(&#39;http://localhost:5000/protected&#39;, {}, {
        headers: { Authorization: \`Bearer \${token}\` }, // Send token in the Authorization header
      });
      setProtectedData(response.data); // Set the fetched protected data
      console.log(&#39;Protected data fetched:&#39;, response.data);
    } catch (error: any) {
      console.error(&#39;Error fetching protected data:&#39;, error);
    }
  };

  return (
    &lt;div&gt;
      {apiError &amp;&amp; &lt;p style={{ color: &#39;red&#39; }}&gt;{apiError}&lt;/p&gt;} {/* Display API error message */}
      
      &lt;div&gt;
        &lt;input
          type=&quot;text&quot;
          placeholder=&quot;Username&quot;
          name=&quot;username&quot;
          value={userLogins.username}
          onChange={handleInput}
        /&gt;
        &lt;input
          type=&quot;password&quot;
          placeholder=&quot;Password&quot;
          name=&quot;password&quot;
          value={userLogins.password}
          onChange={handleInput}
        /&gt;
        &lt;button
          onClick={handleLogin}
          style={{
            background: Object.values(userLogins).every((x) =&gt; x === &#39;&#39;) ? &#39;grey&#39; : &#39;&#39;,
            cursor: Object.values(userLogins).every((x) =&gt; x === &#39;&#39;) ? &#39;not-allowed&#39; : &#39;pointer&#39;,
          }}
          disabled={Object.values(userLogins).every((x) =&gt; x === &#39;&#39;)} // Disable button if any field is empty
        &gt;
          Login
        &lt;/button&gt;
      &lt;/div&gt;

      {token &amp;&amp; (
        &lt;div&gt;
          &lt;button onClick={fetchProtectedData}&gt;Fetch Protected Data&lt;/button&gt;
          {protectedData &amp;&amp; &lt;div&gt;{protectedData.message}&lt;/div&gt;}
        &lt;/div&gt;
      )}
    &lt;/div&gt;
  );
};

export default App;



//------------- Backend node js ----------------

const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');

// Use default middlewares (e.g. logger, static, CORS, etc.)
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Apply general CORS for all routes
server.use(cors());

// Secret key for JWT
const SECRET_KEY = 'your_secret_key_here';  // Change this to a secure key in production

// Custom login route
server.post('/login', (req, res) => {
  const { username, password } = req.body;

  const db = router.db; // Access the in-memory db
  const users = db.get('users').value(); // Fetch the 'users' collection

  // Find user by username
  const user = users.find(user => user.username === username);
  
  if (user) {
    // Compare the password (you should have hashed passwords in your db)
    bcrypt.compare(password, user.password, (err, result) => {
      if (err || !result) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Generate a JWT token
      const token = jwt.sign(
        { id: user.id, username: user.username },  // Payload
        SECRET_KEY,                               // Secret key
        { expiresIn: '1h' }                      // Token expiration time
      );

      // Send the token as the response
      res.status(200).json({ token });
    });
  } else {
    // If user not found, send error
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Middleware to check the JWT token for protected routes
const authenticateJWT = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];  // Extract Bearer token
  if (!token) {
    return res.status(403).json({ message: 'Access denied, token missing' });
  }

  // Verify the token
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;  // Attach the user info to the request
    next();
  });
};

// Protected route
server.post('/protected', authenticateJWT, (req, res) => {
  res.status(200).json({ message: 'This is protected data', user: req.user });
});

// Use the default router to handle other routes
server.use(router);

// Start the server on port 5000
server.listen(5000, () => {
  console.log('JSON Server is running on http://localhost:5000');
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
            ]
        },
        {
            id: 1,
            title: "Error Handling",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Rate Limiting & Security Best Practices",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "WebSockets with socket.io",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Error Handling",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Error Handling",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Error Handling",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: "Interview",
            title: "Interview",
            note: [
                {
                    text1: `<b>Basic Node.js Questions</b>:
-> What is Node.js?
<b>Answer</b>: Node.js is an open-source, cross-platform runtime environment that allows JavaScript to be executed server-side. It uses the V8 JavaScript engine (from Google Chrome) and is event-driven, non-blocking, and designed to build scalable network applications.

-> What is the difference between Node.js and JavaScript in the browser?
<b>Answer</b>: Node.js allows JavaScript to run outside the browser, on the server-side. Unlike JavaScript in the browser, Node.js can access the file system, network, and other resources on the server. Additionally, Node.js uses the V8 engine, but lacks a built-in DOM like a browser.

-> What are the key features of Node.js?
<b>Answer</b>:
Non-blocking, event-driven I/O
Single-threaded with event looping
Fast and efficient due to the V8 engine
Cross-platform compatibility
Built-in libraries for HTTP, file system, etc.

-> What is npm?
<b>Answer</b>: npm (Node Package Manager) is the default package manager for Node.js. It allows developers to install, manage, and share reusable code in the form of packages or libraries.

-> How do you handle exceptions in Node.js?
<b>Answer</b>: Node.js has try/catch blocks for synchronous code and process.on('uncaughtException') for asynchronous code. However, it is recommended to use proper error handling patterns like callback-based error handling or Promises to catch errors in asynchronous code.

<b>Intermediate Node.js Questions</b>:
-> What is the event loop in Node.js?
<b>Answer</b>: The event loop is a key part of Node.js's non-blocking I/O model. It continuously checks the event queue for tasks to execute. If there are no tasks to execute, it waits. This allows Node.js to handle multiple concurrent requests without blocking the main thread.

-> What is the difference between synchronous and asynchronous code in Node.js?
<b>Answer</b>:
Synchronous code executes line by line, blocking the next line until the current one finishes.
Asynchronous code allows Node.js to handle multiple operations concurrently, executing callbacks once the operation completes, without blocking the rest of the code execution.

-> What are streams in Node.js?
<b>Answer</b>: Streams are objects that allow reading or writing data in a continuous manner. There are four types of streams in Node.js:
Readable streams: Streams from which data is read (e.g., fs.createReadStream).
Writable streams: Streams to which data is written (e.g., fs.createWriteStream).
Duplex streams: Streams that are both readable and writable (e.g., TCP sockets).
Transform streams: Duplex streams that modify the data as it's read and written (e.g., zlib for compression).

-> Explain the concept of middleware in Express.js.
<b>Answer</b>: Middleware are functions that have access to the request (req), response (res), and the next function in the request-response cycle. Middleware can perform actions like logging, authentication, validation, or modifying the request or response before passing control to the next middleware or route handler.

-> What is the purpose of the require function in Node.js?
<b>Answer</b>: require is used to import modules, JSON, or files in Node.js. It allows you to include functionality from other files and modules into your current file, enabling code reusability.

<b>Advanced Node.js Questions</b>:
-> What is the difference between process.nextTick(), setImmediate(), and setTimeout() in Node.js?
<b>Answer</b>:
process.nextTick() is used to defers the execution of a function until the next event loop cycle. It executes before any I/O events.
setImmediate() is executed on the next iteration of the event loop, after I/O events.
setTimeout() is executed after a specified delay (in milliseconds) and is placed in the timers phase of the event loop.

-> What are Cluster and Worker Threads in Node.js?
<b>Answer</b>:
Cluster: A built-in module to take advantage of multi-core systems by creating child processes that share the same server port. Each process runs in its own thread, allowing parallel execution.
Worker Threads: A module that allows JavaScript to run in multiple threads in a single Node.js process, useful for CPU-bound tasks.

-> What is the purpose of the Buffer class in Node.js?
<b>Answer</b>: The Buffer class is used to handle raw binary data in Node.js. It is especially useful for interacting with binary data like files, streams, and network protocols.

-> How do you implement authentication in a Node.js application?
<b>Answer</b>: Authentication in Node.js is often implemented using techniques like:
JWT (JSON Web Tokens): Tokens are issued after validating user credentials and used to authenticate subsequent requests.
Session-based authentication: Using cookies and server-side session stores.
OAuth: Used to authenticate users via third-party services like Google, Facebook, etc.

-> Explain the concept of "callback hell" in Node.js and how to avoid it.
<b>Answer</b>: "Callback hell" refers to nested callbacks, where callbacks are embedded inside other callbacks, making the code difficult to read and maintain. It can be avoided by:
Using Promises to manage asynchronous code more clearly.
Using async/await for writing asynchronous code in a synchronous style.

-> What is the EventEmitter class in Node.js?
<b>Answer</b>: The EventEmitter class allows objects to emit events and listen to those events. It’s commonly used in Node.js for handling events, such as requests in HTTP servers or custom events in applications.


<b>Practical Node.js & Performance Questions</b>:
-> How would you optimize the performance of a Node.js application?
<b>Answer</b>:
Use async/await or Promises to handle asynchronous code efficiently.
Implement load balancing with the Cluster module to utilize multi-core processors.
Cache frequently accessed data using in-memory stores like Redis.
Optimize database queries to reduce latency.
Minimize the use of blocking I/O operations.
Use tools like PM2 to monitor and manage the application in production.

-> How would you handle file uploads in Node.js?
<b>Answer</b>: You can use libraries like Multer or Busboy for handling multipart/form-data requests, which is commonly used for file uploads. Multer can be configured to store uploaded files on the server, in memory, or directly to cloud storage.

-> What is the role of package.json in a Node.js project?
<b>Answer</b>: The package.json file contains metadata about the project, such as its name, version, scripts, dependencies, and configuration settings. It’s used by npm to manage and install project dependencies.

-> How would you implement rate limiting in a Node.js application?
<b>Answer</b>: Rate limiting can be implemented using middleware in Express.js to limit the number of requests a client can make in a certain period. Libraries like express-rate-limit can be used for this purpose to prevent abuse or excessive API calls.

Node.js Tools & Libraries Questions:
-> What is PM2 and how is it useful in Node.js applications?
<b>Answer</b>: PM2 is a process manager for Node.js applications. It helps with managing, monitoring, and scaling applications in production. It supports clustering, automatic restarts, log management, and performance monitoring.

-> What are some common Node.js libraries used for web development?
<b>Answer</b>:
Express: For building web servers and APIs.
Socket.io: For real-time web applications (e.g., chat).
Mongoose: For interacting with MongoDB databases.
Passport.js: For authentication middleware.
JWT: For token-based authentication.

<b>Miscellaneous Questions</b>:
-> Explain the this keyword in Node.js.
<b>Answer</b>: The value of this depends on the context in which it is used. In Node.js:
In regular functions, this refers to the global object (or undefined in strict mode).
In object methods, this refers to the object the method is called on.
Arrow functions do not bind their own this; they inherit it from the surrounding lexical context.

-> What is the path module used for in Node.js?
<b>Answer</b>: The path module is used for working with and manipulating file and directory paths in a platform-independent way. Common methods include path.join(), path.resolve(), path.extname(), etc.

-> What is CORS, and how would you enable it in a Node.js/Express application?
<b>Answer</b>: CORS (Cross-Origin Resource Sharing) is a security feature implemented by browsers to control cross-origin requests. You can enable CORS in Node.js by using the cors middleware package in Express.

const cors = require('cors');
app.use(cors());`,
                    code1: ``
                }
            ]
        },
    ]
}