const isHighlighted = 'MERN-notes'
const Links1 = 'MERN-notes'
const Links2 = 'mongodb-notes'
const Links3 = 'express-js'
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
          text1: `NPM <b>(Node Package Manager)</b> is the default package manager for the Node.js runtime environment. It is a command-line tool that helps developers manage and share JavaScript code, libraries, and utilities that are used in a Node.js environment.

                    <b>Packages</b>
npm installs, updates and manages downloads of dependencies of your project. Dependencies are pre-built pieces of code, such as libraries and packages, that your Node.js application needs to work.

                    <b>NPM consists of two main parts:</b>
a CLI (command-line interface) tool for publishing and downloading packages, and
an online repository that hosts JavaScript packages

<b>Key Features of NPM</b>:
<b>Package Management</b>:
=> NPM allows developers to <b>install, manage, and share</b> libraries (also known as packages) of code. These packages can be anything from utility functions, frameworks (like Express), databases, and even build tools.
=> With NPM, you can easily add dependencies to your project, manage their versions, and ensure that your project works consistently across different environments.

<b>Repository</b>:
=> NPM provides an <b>online repository</b> (https://www.npmjs.com/) where developers can publish and share their packages with the global community. This repository has millions of packages available for use.
=> When you run the <b>npm install</b> command, it downloads packages from the <b>NPM registry</b>.

<b>Dependency Management</b>:
=> NPM allows you to declare dependencies (libraries your project needs) in a <b>package.json</b> file. This file tracks all the dependencies, along with their versions, for your project.
=> You can also specify which versions of dependencies are required or allowed using semantic versioning.

<b>Scripts</b>:
=> NPM allows you to define <b>scripts</b> in the <b>package.json</b> file. These scripts are commonly used for automation tasks like testing, building, or starting your project. For example, you can run <b>npm run test</b> to execute your test suite.

<b>Versioning and Updates</b>:
=> NPM helps you manage the versions of packages you install. You can define specific versions of packages or use a range of versions.
=> You can easily <b>update</b> dependencies by running <b>npm update</b>.

<b>Global vs Local Installation</b>:
=> You can install packages <b>globally</b> (making them available anywhere on your system) or locally (only within a specific project).
=> Global installations are typically used for command-line tools (e.g., <b>npm install -g webpack</b>), while local installations are for project-specific dependencies (e.g., <b>npm install express</b>).
`,
          code1: ``
        },
        {
          text1: `<b> package.json </b>
                    <b>package.json</b> is a <b>configuration file</b> that is essential in any Node.js project. It contains metadata about your project, including its name, version, dependencies, scripts, and more. This file is used by npm (Node Package Manager) to manage your project's dependencies and configuration, and it plays a key role in the development, testing, and deployment of a Node.js application.
                    
                    Every project in JavaScript - whether it's Node.js or a browser application - can be scoped as an npm package with its own package information and its <b>package.json</b> job to describe the project.

We can think of <b>package.json</b> as stamped labels on those npm good boxes that our army of Wombats delivers around.

<b>package.json</b> will be generated when <b>npm init</b> is run to initialise a JavaScript/Node.js project, with these basic metadata provided by developers:

<b>name</b>: the name of your JavaScript library/project. It should be a unique identifier (lowercase, with dashes or underscores allowed).
<b>version</b>: the version of your project. Often times, for application development, this field is often neglected as there's no apparent need for versioning opensource libraies. But still, it can come handy as a source of the deployment's version. Defines the version of the project using semantic versioning (major.minor.patch). Helps you track different versions of the project.

<b>^</b>: latest minor release. For example, a <b>^1.0.4</b> specification might install version <b>1.3.0</b> if that's the latest minor version in the <b>1</b> major series.
<b>~</b>: latest patch release. In the same way as <b>^</b> for minor releases, <b>~1.0.4</b> specification might install version <b>1.0.7</b> if that's the latest minor version in the <b>1.0</b> minor series.

<b>description</b>: the project's description
<b>license</b>: the project's license

<b>scripts</b>
<b>package.json</b> also supports a <b>scripts</b> property that can be defined to run command-line tools that are installed in the project's local context. For example, the <b>scripts</b> portion of an npm project can look something like this:

{
  "scripts": {
  "start": "node index.js",
    "build": "tsc",
    "format": "prettier --write **/*.ts",
    "format-check": "prettier --check **/*.ts",
    "lint": "eslint src/**/*.ts",
    "pack": "ncc build",
    "test": "jest",
    "all": "npm run build && npm run format && npm run lint && npm run pack && npm test"
  }
}
with <b>eslint, prettier, ncc, jest</b> not necessarily installed as global executables but rather as local to your project inside <b>node_modules/.bin/.</b>

<b>dependencies</b>:
Lists all the packages (and their versions) your project depends on to run.
These packages are installed when you run <b>npm install</b>

npm install &lt;package-name&gt;

"dependencies": {
  "express": "^4.17.1",
  "mongoose": "^5.9.1"
}
  
<b>devDependencies</b>:
Lists the packages needed for development purposes, such as testing libraries, build tools, or transpilers (e.g., Babel, Webpack).
These packages are not required in the production environment and can be installed with the <b>--dev</b> flag.

npm install &lt;package-name&gt; --save-dev

"devDependencies": {
  "mocha": "^8.0.0",
  "chai": "^4.2.0"
}
  

<b>package-lock.json</b>
This file describes the exact versions of the dependencies used in an npm JavaScript project. If <b>package.json</b> is a generic descriptive label, <b>package-lock.json</b> is an ingredient table.

<b>package-lock.json</b> is usually generated by the <b>npm install</b> command, and is also read by our NPM CLI tool to ensure reproduction of build environments for the project with <b>npm ci</b>.


<b>npm install</b>
This is the most commonly used command as we develop JavaScript/Node.js applications nowadays.

By default, <b>npm install &lt;package-name&gt;</b> will install the latest version of a package with the <b>^</b> version sign. An <b>npm install</b> within the context of an npm project will download packages into the project's <b>node_modules</b> folder according to <b>package.json</b> specifications, upgrading the package version (and in turn regenerating <b>package-lock.json</b>) wherever it can based on <b>^</b> and <b>~</b> version matching.

You can specify a global flag <b>-g</b> if you want to install a package in the global context which you can use anywhere across your machine


Here’s a breakdown of the differences between:
npm install &lt;package-name&gt;
npm install &lt;package-name&gt; --save
npm install &lt;package-name&gt; --save-dev

<b>1) npm install &lt;package-name&gt;</b>
This is the most basic form of the <b>npm install</b> command. It installs a package and adds it to your <b>node_modules</b> directory.

Behavior:
By default, as of <b>npm version 5</b> and later, running <b>npm install &lt;package-name&gt;</b> automatically saves the package to the <b>dependencies</b> section of your <b>package.json</b> file.
The package will be installed in the node_modules folder of your project.

<b>2) npm install &lt;package-name&gt; --save</b>
Before <b>npm version 5</b>, you needed to explicitly use the <b>--save</b> flag to add the package to the <b>dependencies</b> section of your <b>package.json</b>. However, <b>in npm version 5 and later</b>, this behavior became the default, so you don't have to use <b>--save</b> anymore.

<b>3) npm install &lt;package-name&gt; --save-dev</b>
The <b>--save-dev</b> flag tells npm that the package is only required during the development of your project, not in production. These packages are typically tools for development (like testing libraries, build tools, or compilers) and aren't needed when running the app in a production environment.

Behavior:
-> The package is installed and saved under the <b>devDependencies</b> section in your <b>package.json</b>.
-> This is useful for tools like testing frameworks, bundlers, and other development tools that are not required in production.

<b>--save-dev</b> installs and adds the entry to the <b>package.json</b> file devDependencies
<b>--no-sav</b>e installs but does not add the entry to the package.json file dependencies
<b>--save-optional</b> installs and adds the entry to the package.json file optionalDependencies
<b>--no-optional</b> will prevent optional dependencies from being installed
`,
          code1: ``
        },
        {
          text1: `NPX stands for <b>Node Package eXecute</b>. It is simply an NPM(Node Package Manager) package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it. NPX is installed automatically with NPM version 5.2.0 and above.

NPX is a utility that complements the experience of using packages from the npm registry. 
Since npm version 5.2.0 npx is pre-bundled with npm. So it's pretty much a standard nowadays.
npx is also a CLI tool whose purpose is to make it easy to install and manage dependencies hosted in the npm registry.

It's now very easy to run any sort of Node.js based executable that you would normally install via npm.
You can run the following command to see if it is already installed for your current npm version:

$ which npx
If it's not, you can install it like this:

$ npm install -g npx
Once you make sure you have it installed, let's see a few of the use cases that make npx extremely helpful.`,
          code1: ``
        },
        {
          text1: `<b> NVM</b>
                    <b>NVM</b> stands for <b>Node Version Manager</b> and is a command-line utility that allows developers to easily install, switch between, and manage multiple versions of <b>Node.js</b> on their system, which is particularly useful when working on projects with different Node.js version requirements. 
                    
                    nvm stands for <b>Node Version Manager</b>, a command-line utility that allows you to install and manage multiple versions of Node.js on the same system. It is particularly useful for developers who work on multiple projects that may require different versions of Node.js.
                    
                    <b>Common Commands in nvm</b>:
<b>1) Install a Specific Version of Node.js</b>: To install a specific version of Node.js, use:
nvm install <version>
Example:
nvm install 16.13.0

<b>2) List Installed Node.js Versions</b>: To view all the versions of Node.js installed via nvm:
nvm ls

<b>3) Use a Specific Version of Node.js</b>: To switch to a particular version of Node.js that you’ve installed:
nvm use <version>
Example:
nvm use 14.17.6

<b>4) Set Default Node.js Version</b>: To set a default Node.js version to be used whenever a new terminal session starts:
nvm alias default <version>
Example:
nvm alias default 16.13.0

<b>5) Uninstall a Version of Node.js</b>: To uninstall a specific version of Node.js:
nvm uninstall <version>
Example:
nvm uninstall 14.17.6

<b>6) Install Latest Node.js (LTS)</b>: To install the latest LTS (Long Term Support) version of Node.js:
nvm install --lts

<b>7) Check the Current Version of Node.js</b>: To check the current version of Node.js you're using:
nvm current
`,
          code1: ``
        },
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
      title: "CORS (Cross-Origin Resource Sharing)",
      note: [
        {
          text1: `CORS stands for <b>Cross-Origin Resource Sharing</b>. It is a security mechanism that allows or restricts web applications running at one origin (domain) from making requests for resources hosted on a different origin (domain). CORS is implemented by web browsers to prevent potentially malicious behavior (like cross-site request forgery or data theft) when your website or web application makes requests to a server that is hosted on a different domain.
                    
                    CORS is a security feature created to selectively relax the SOP restrictions and enable controlled access to resources from different domains. CORS rules allow domains to specify which domains can request information from them by adding specific HTTP headers in the response.
                   
                    <b>CORS Headers</b>
There are several important CORS-related headers:

<b>Access-Control-Allow-Origin</b>: Specifies which origins are allowed to access the resource.
Example: Access-Control-Allow-Origin: https://example.com or Access-Control-Allow-Origin: * (which allows all origins).
<b>Access-Control-Allow-Credentials</b>: Indicates whether or not the response to the request can expose cookies or authorization headers.
Example: Access-Control-Allow-Credentials: true.
<b>Access-Control-Allow-Methods</b>: Specifies which HTTP methods (GET, POST, PUT, DELETE, etc.) are allowed when accessing the resource.
Example: Access-Control-Allow-Methods: GET, POST, PUT.
<b>Access-Control-Allow-Headers</b>: Specifies which headers can be included in the actual request.
Example: Access-Control-Allow-Headers: Content-Type, X-Custom-Header.
<b>Access-Control-Expose-Headers</b>: Specifies which headers are safe to expose to the browser.
Example: Access-Control-Expose-Headers: Content-Length.
<b>Access-Control-Max-Age</b>: Specifies how long the results of a preflight request can be cached by the browser.

                    There are several HTTP headers related to CORS, but we are interested in the two related to the commonly seen vulnerabilities — <b>**Access-Control-Allow-Origin**</b> and <b>**Access-Control-Allow-Credentials**</b>.
               
                    I) <b>Access-Control-Allow-Origin</b>: This header specifies the allowed domains to read the response contents. The value can be either a wildcard character <b>**(*)**</b>, which indicates all domains are allowed, or a comma-separated list of domains.

#All domain are allowed
Access-Control-Allow-Origin: <b>*</b>   

#comma-separated list of domains
Access-Control-Allow-Origin: <b>example.com, metrics.com</b>    
                

II) <b>Access-Control-Allow-Credentials</b>: This header determines whether the domain allows for passing credentials — such as cookies or authorization headers in the cross-origin requests.

The value of the header is either True or False. If the header is set to <b>true</b> the domain allows sending credentials. If it is set to <b>false</b> or not included in the response, then it is not allowed.

#allow passing credenitals in the requests
Access-Control-Allow-Credentials: true

#Disallow passing in the requests
Access-Control-Allow-Credentials: false

<b>benefits of CORS</b>
<b>1. Enables Cross-Domain Resource Sharing</b>
<b>Benefit</b>: CORS allows resources (APIs, images, data, etc.) to be shared between different origins. This is crucial in modern web applications where data often needs to be fetched from multiple domains.
<b>Example</b>: A front-end application hosted at https://frontend.com can request data from a backend API hosted at https://api.<b>example</b>.com.

<b>2. Improved Security</b>
<b>Benefit</b>: CORS provides a security layer by ensuring that only authorized domains (origins) can access a server's resources. It does this by adding specific headers that indicate which origins are allowed to make requests, preventing unauthorized access to sensitive resources.
<b>Example</b>: A server can restrict access to its resources so that only requests coming from trusted domains, such as https://mytrusteddomain.com, are allowed.

<b>3. Prevents Cross-Site Request Forgery (CSRF)</b>
<b>Benefit</b>: CORS helps mitigate attacks like <b>Cross-Site Request Forgery (CSRF)</b>. By enforcing restrictions on which domains can access a resource, CORS prevents malicious websites from making unauthorized requests on behalf of users, particularly when sensitive data is involved (like submitting a form or modifying user settings).
<b>Example</b>: Without CORS, an attacker could create a malicious site that makes requests to your server on behalf of a user (using their credentials). CORS prevents this by ensuring that only specific trusted origins are allowed.

<b>4) Reduces the Risk of Data Theft </b>: Attackers can use CORS vulnerabilities to steal sensitive data from applications like API keys, SSH keys, Personal identifiable information (PII), or users’ credentials.
<b>Benefit</b>: By restricting cross-origin requests, CORS reduces the risk of data theft or unauthorized access to sensitive data on a server. This is especially important for APIs handling private user data or other sensitive information.
<b>Example</b>: A social media platform can ensure that only specific websites (such as <b>https://app.mysocialapp.com</b>) can access the user's profile information, preventing malicious sites from scraping data.

<b>5) Cross-Site Scripting (XSS)</b>: Attackers can use CORS vulnerabilities to perform XSS attacks by injecting malicious scripts into web pages to steal session tokens or perform unauthorized actions on behalf of the user.
<b>Remote Code Execution</b> in some cases (StackStorm case)
                    `,
          code1: ``
        },
        {
          text1: `<b>Same-Origin Policy (SOP)</b>
                    All web browsers implement a security model known as the <b>Same-Origin Policy (SOP)</b>. It restricts domains from accessing and retrieving data from other domains' resources.
                    The SOP policy helps protect users from malicious scripts that could access their sensitive data or perform unauthorized actions on their behalf.
                    For example, if <b>**business.com**</b> tries to make an HTTP request to <b>**metrics.com**</b>, the browser, by default, will block the request because it comes from a different domain.

As much as the SOP sounds like a proper protection policy, it doesn't scale well in today's technologies that depend on each other for operation. For example, it presents challenges to APIs and microservices which have legitimate use cases for accessing and sharing information between domains.

Because of cases like this, there was a need for a new security mechanism that would allow for cross-domain interactions. It's known as Cross-Origin Resource Sharing (CORS).`,
          code1: ``
        },
        {
          text1: `CORS is an HTTP header-based system that allows a server to specify any other origins (domain, scheme, or port) from which a browser should enable resources to be loaded other than its own.
                    <b>Example of CORS with Credentials and Custom Headers:</b>`,
          code1: `const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// CORS configuration with credentials and custom headers
app.use(cors({
  origin: 'http://your-frontend-app.com',  // Allow only specific origin
  methods: ['GET', 'POST'],  // Allow only specific HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Allow specific headers
  credentials: true  // Allow credentials (cookies, HTTP authentication)
}));

// Example API route
app.get('/data', (req, res) => {
  res.json({ message: 'Hello from the CORS-enabled server with credentials!' });
});

// Start the server
app.listen(port, () => {
  console.log(\`Server running on http://localhost:\${port}\`);
});
`
        },
        {
          text1: ``,
          code1: ``
        },
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
      title: "Express js",
      note: [
        {
          text1: `Express.js is a minimal and flexible Node.js web application framework that provides a list of features for building web and mobile applications easily. It simplifies the development of server-side applications by offering an easy-to-use API for routing, middleware, and HTTP utilities.
                    
->                     Built on Node.js for fast and scalable server-side development.
-> Simplifies routing and middleware handling for web applications.
-> Supports building REST APIs, real-time applications, and single-page applications.
-> Provides a lightweight structure for flexible and efficient server-side development.

npm install express --save
`,
          code1: `// Import Express
const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Welcome to the Express.js Tutorial');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});`
        }
      ]
    },
    {
      id: 1,
      title: "Middleware",
      note: [
        {
          text1: `<a href="https://expressjs.com/en/guide/using-middleware.html" target="_blank">using-middleware.</a>
          In Express.js, middleware refers to functions that have access to the <b>request</b> object (<b>req</b>), the <b>response</b> object (<b>res</b>), and the <b>next</b> function in the application's request-response cycle. These functions are executed sequentially and can perform various tasks before the request reaches its final route handler or before a response is sent back to the client. 
                    
                    Middleware in Express refers to functions that process requests before reaching the route handlers. These functions can modify the request and response objects, end the request-response cycle, or call the next middleware function. Middleware functions are executed in the order they are defined. They can perform tasks like authentication, logging, or error handling. Middleware helps separate concerns and manage complex routes efficiently.
                    
                    Middleware in Express are functions that sit between the request and response cycle. They can modify <b>req</b> and <b>res</b>, execute code, end the request-response cycle, or call <b>next()</b> to pass control to the next middleware. They are executed in the order they are defined.
                    
->                     Middleware functions usually have 3 standard params req, res, and next. The first two are objects, the last is a function that will call the next middleware function, if there is one.
-> Usually there is a middleware chain, meaning a chain of functions that are called one after the other, with the last function sending the response back to the browser. So we get the request from the browser, make any modifications and data additions, and then send a response back.
-> You must call next() (unless it’s the last function in the chain) or the request will just hang and eventually timeout. In the browser this will manifest as a really long spinner before a message of “connection timed out” or similar.
-> Any changes you make to req or res will be available in the next middleware function.
-> req and res are unique for each request. Meaning that a user from USA result in a different req object than a user from a European country.

<b>next()</b>: This function is called to pass control to the next middleware in the stack if the current one doesn't end the request-response cycle.
`,
          code1: `const express = require("express");
const app = express();

// Custom middleware for logging
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next(); // pass control to next middleware/route
});

// Route
app.get("/", (req, res) => {
  res.send("Hello Middleware!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
`
        }
      ]
    },
    {
      id: 1,
      title: "next()",
      note: [
        {
          text1: `<b>Middleware Chain Control</b>: The next() function is the third argument passed to Express middleware functions (after req and res). When invoked, it passes control to the next middleware function in the application's request-response cycle. This allows for a sequence of operations to be performed on a request before a response is sent.
<b>Preventing Request Hanging</b>: If a middleware function does not end the request-response cycle (e.g., by sending a response with <b>res.send()</b> or <b>res.json())</b>, it must call <b>next()</b> to ensure the request continues to be processed by subsequent middleware or route handlers. Failure to call next() will leave the request hanging, leading to a timeout for the client. 
<b>Error Handling</b>: next() can also be used to pass errors to Express's error-handling middleware. When <b>next(err)</b> is called with an error object, Express will bypass regular middleware and route handlers and instead invoke error-handling middleware specifically designed to manage and respond to errors.
<b>Skipping Middleware/Routes</b>: While less common, <b>next('route')</b> can be used within a route handler to skip the remaining middleware functions in the current route and move control to the next route handler that matches the request. 

<b>What is next()?</b>
next() is a function that Express provides to <b>move control</b> from one middleware function to the <b>next middleware or route handler</b> in the stack.
If you don’t call next() <b>and don’t send a response</b>, the request will just hang forever.

<b>Think of it like a relay race</b> 🏃‍♂️🏃‍♀️
Each <b>middleware</b> is a runner with a baton (the request).
To continue the race, the runner must <b>pass the baton</b> → next().
If a runner keeps the baton and doesn’t finish the race (<b>res.send()</b>), the race never ends.

<b>🔹 When you DO need next()</b>
You must call <b>next()</b> if your middleware:
Does some work (like logging, authentication, validation, etc.)
<b>Doesn't send a response</b> itself
Needs to <b>pass control</b> to the next middleware or route handler

app.use((req, res, next) => {
  console.log("Logging request:", req.method, req.url);
  next(); // ✅ continue to next route
});


<b>When you DON’T need next()</b>
You don't call <b>next()</b> if:
Your handler/middleware <b>already sent a response</b> with res.send, res.json, or res.end.
You intentionally want to <b>end the request here</b>.

app.get("/", (req, res) => {
  res.send("Hello World!"); // ✅ no need for next()
});

<b>Middleware (app.use / extra functions)</b> → usually needs <b>next()</b>.
<b>Final route handlers (app.get/post/etc.)</b> → usually end with <b>res.send(...)</b> → no next().
<b>Error-handling middleware</b> uses <b>next(err)</b> (special case).
`,
          code1: `// ------- Example 1 – Logging middleware
                    app.use((req, res, next) => {
  console.log('Logging:', req.method, req.url);
  next(); // pass to the next handler
});

app.get("/", (req, res) => {
  res.send("Home page");
});

// Output when visiting /:
Logging: GET /


// ------- Example 2 – Without next()
app.use((req, res, next) => {
  console.log('Logging:', req.method, req.url);
  // forgot next() and no res.send()
});
// Visiting /:
// Console: Logging: GET /
// Browser: hangs forever (because no response + no next).


// --------- Example 3 – Conditional next()
app.use((req, res, next) => {
  if (req.query.admin === "true") {
    next(); // allow request to continue
  } else {
    res.status(403).send("Forbidden: Not an admin");
  }
});

app.get("/", (req, res) => {
  res.send("Welcome, Admin!");
});

    // / → Forbidden unless you hit / ?admin=true.
    // Shows how middleware can decide whether to pass control or stop.


                    `
        }
      ]
    },
    {
      id: 1,
      title: "Application-level middleware",
      note: [
        {
          text1: `Application-level middleware is bound to the entire Express application using app.use() or app.METHOD(). 
          Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.

This example shows a middleware function with no mount path. The function is executed every time the app receives a request.

This type of middleware is commonly used for tasks like logging, body parsing, authentication checks, or setting headers for every incoming request.

<b>app.use() → Middleware</b>
app.use() is used to <b>register middleware functions.</b>
Middleware runs <b>before your route handlers.</b>

It can:
Run for <b>all requests</b> (no path given).
Or run only for a <b>specific path.</b>
`,
          code1: `// Application-level middleware 
          // The function is executed every time the app receives a request.
          const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})


// This example shows a middleware function mounted on the /user/:id path. The function is executed for any type of HTTP request on the /user/:id path.

app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})
`
        }
      ]
    },
    {
      id: 1,
      title: "Router-level Middleware",
      note: [
        {
          text1: `Router-level middleware is applied to a specific router instance using router.use() or router.METHOD(). It only applies to routes defined within that particular router, making it perfect for modular applications where middleware is only relevant to specific groups of routes.

This type of middleware is often used to group related routes (e.g., all routes related to authentication or user management) and apply middleware logic to them.

Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of <b>express.Router().</b>

const router = express.Router()

Load router-level middleware by using the <b>router.use()</b> and <b>router.METHOD()</b> functions.`,
          code1: `//The following example code replicates the middleware system that is shown above for application-level middleware, by using router-level middleware:
          
          const express = require('express')
const app = express()
const router = express.Router()

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', (req, res, next) => {
  // if the user ID is 0, skip to the next router
  if (req.params.id === '0') next('route')
  // otherwise pass control to the next middleware function in this stack
  else next()
}, (req, res, next) => {
  // render a regular page
  res.render('regular')
})

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', (req, res, next) => {
  console.log(req.params.id)
  res.render('special')
})

// mount the router on the app
app.use('/', router)
`
        }
      ]
    },
    {
      id: 1,
      title: "Error-handling Middleware",
      note: [
        {
          text1: `Error-handling middleware always takes four arguments. You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the <b>next</b> object, you must specify it to maintain the signature. Otherwise, the <b>next</b> object will be interpreted as regular middleware and will fail to handle errors.`,
          code1: `//Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three, specifically with the signature (err, req, res, next):

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})`
        }
      ]
    },
    {
      id: 1,
      title: "Built-in Middleware",
      note: [
        {
          text1: `Express provides built-in middleware to help with common tasks, like serving static files or parsing data.

For example, express.static() serves files like images, and express.json() helps parse incoming JSON data.

Express has the following built-in middleware functions:
<b>express.static</b> serves static assets such as HTML files, images, and so on.
<b>express.json</b> parses incoming requests with JSON payloads. NOTE: Available with Express 4.16.0+
<b>express.urlencoded</b> parses incoming requests with URL-encoded payloads. NOTE: Available with Express 4.16.0+`,
          code1: `app.use(express.static('public')); // Serves static files from the "public" folder
app.use(express.json()); // Parses JSON payloads in incoming requests`
        }
      ]
    },
    {
      id: 1,
      title: "Third-party Middleware",
      note: [
        {
          text1: `Third-party middleware is developed by external developers and packaged as npm modules. These middleware packages add additional functionality to your application, such as request logging, security features, or data validation.

For example, the morgan middleware logs HTTP requests, and body-parser helps parse incoming request bodies for easier handling of form data.

Use third-party middleware to add functionality to Express apps.

Install the Node.js module for the required functionality, then load it in your app at the application level or at the router level.

The following example illustrates installing and loading the cookie-parsing middleware function <b>cookie-parser</b>.

npm install cookie-parser
`,
          code1: `const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

// load the cookie-parsing middleware
app.use(cookieParser())
`
        }
      ]
    },
    {
      id: 1,
      title: "Logging",
      note: [
        {
          text1: `Logging in Node.js refers to the practice of recording information about an application's runtime behavior, events, and errors. This information is typically stored in files or sent to a centralized logging system for analysis and monitoring.
          
          <b>Why Logging is Useful?</b>
<b>Debugging</b> → Helps you find problems when something goes wrong.
<b>Monitoring</b> → Know which endpoints are being used most.
<b>Error Tracking</b> → See what errors are happening and w
          `,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "(JWT, OAuth) & bcrypt",
      note: [
        {
          text1: `<b>JWT</b>
                    A <b>JSON Web Token</b>, or JWT, is an open standard for securely creating and sending data between two parties, usually a client and a server.
                    
                    JSON Web Token (JWT) is a compact, URL-safe token used to represent claims between two parties. It works by encoding a JSON object into a string, which is then signed using a cryptographic algorithm to ensure its integrity and authenticity.

                    <b>JWT (JSON Web Token)</b> is a compact and self-contained way to represent information between two parties in a secure manner. It's commonly used for <b>authentication</b> and <b>authorization</b> in modern web applications and APIs. JWT allows for transmitting data as a JSON object, and it can be verified and trusted because it is digitally signed.
                    
                    "JWTs are typically used to represent user identities and ensure secure communication between a client (such as a web or mobile app) and a server. They allow the server to verify the identity of a user, determine whether they are authorized to access a resource, and maintain a stateless authentication mechanism."

                    JWTs are usually used to manage user sessions on a website. While they're an important part of the token based authentication process, JWTs themselves are used for <b>authorization</b>, not <b>authentication</b>.
                    
                    When you sign in to a site with a username and password, or with a third party method like Google, you're proving who you are with those sensitive details or access. This process is called <b>authentication</b>.

Once you're signed in, the site's server sends back a JWT that allows you access to things like your settings page, shopping cart, and so on. This process is called <b>authorization</b>.

JWTs are just bits of encoded JSON data with a cryptographic signature at the end.
Here's an example of a JWT:
<span style="color:red">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span> .eyJzdWIiOiIxMjM0NTY3ODkwI iwibmFtZSI6IlF1aW5jeSBMYXJzb24iLCJ pYXQiOjE1MTYyMzkwMjJ9. <span style="color:#09ca9a">WcPGXClpKD7Bc1C0CCDA1060E2GGlTfamrd8-W0ghBE</span>
Each JWT is made up of three segments, each separated by a dot (.). These three segments are the <b>header</b>, <b>payload</b>, and <b>signature.</b>  
If you copy and paste that JWT into the <a target="_blank" href="https://jwt.io/">JWT.io Debugger</a>, you can see the decoded versions of those three segments. 

A JSON Web Token (JWT) consists of three parts: the <b>header</b>, the <b>payload</b>, and the <b>signature</b>. The header contains metadata about the token and the algorithm used for signing, the payload holds the claims, and the signature ensures the token's integrity.

<b>Header Segment</b>
The header segment of a JWT contains information about the algorithm and token type.

Here's the header segment of the example JWT token above:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
The header segment is base 64 URL encoded, and decodes to the following JSON object:
{
  "alg": "HS256",
  "typ": "JWT"
}
<b>alg</b> is the type of algorithm used in the last segment, the cryptographic signature. In this case, the HMAC SHA256 algorithm is used, though RSA is also common.
<b>typ</b> is the type of token the segmented string is, which in this case is JWT.
<b>What is the purpose of the header in a JWT?</b>
The purpose of the header in a JWT is to contain metadata about the token, including the type of token and the signing algorithm used. This information is crucial for verifying the token's integrity and ensuring it hasn't been tampered with.

<b>Payload Segment</b>
The payload segment of a JWT contains registered claims or identifying information, usually for a user.
Here's the payload segment of the example JWT token above:
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlF1aW5jeSBMYXJzb24iLCJpYXQiOjE1MTYyMzkwMjJ9
The payload segment is also base 64 URL encoded, and decodes to the following JSON object:
{
  "sub": "1234567890",
  "name": "Quincy Larson",
  "iat": 1516239022
}
Since JWTs are usually used as part of the authentication method for sites, the payload segment usually contains identifying information for a user. These claims fall into three categories: registered, public, and private.
Registered claims are a set of predefined claims defined here that are optional, but recommended when using JWTs.
Public clams are optional claims, usually from the IANA JSON Web Token Registry.

Private claims are optional, and are any claims that don't fall under the registered or public claims categories.
<b>iat</b> is the <b>issued at</b> date for the token, and is a registered claim.

<b>Signature Segment</b>
The signature segment of a JWT contains the cryptographic signature of the token.
Here's the signature segment of the example JWT token above:

WcPGXClpKD7Bc1C0CCDA1060E2GGlTfamrd8-W0ghBE
The signature segment is made up of the base 64 URL encoded header and payload segments, a secret (usually the contents of a key in a signing algorithm), and hashed using the algorithm defined in the header segment:

HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  your-256-bit-secret
)
The signature helps ensure that the data in the header and payload segments haven't been tampered with, and the JWT can be trusted.
However, it's important to note that the cryptographic signature at the end of the JWT is just for validation. It doesn't encrypt any data in the header or payload segments of the token. So you should never send sensitive information like a user's password in a JWT – everything in the header and payload can and should be public.`,
          code1: ``
        },
        {
          text1: `<b>How do you create a JWT in Node.js?</b>
                    To create a JWT in Node.js, you first need to install the jsonwebtoken library. Then, you can create a payload with the necessary claims and sign the token using a secret key and the sign method.

                    <b>1) Install Necessary Dependencies</b>
npm install jsonwebtoken

<b>2) Create the JWT Token </b>
When the user logs in, you can generate a JWT using the jwt.sign() method from the jsonwebtoken package.
  -> Normally, you'd validate the user credentials here
  const user = {
    id: 1,
    username: 'john_doe',
    role: 'admin',
  };

  The <b>jwt.sign()</b> method takes the following parameters:
<b>Payload</b>: The user's information that you want to store in the token (e.g., user ID, roles).
<b>Secret key</b>: A secret string used to sign the token, which ensures its authenticity and integrity.
<b>Options</b>: Optional parameters such as expiresIn to specify how long the token is valid.

const token = jwt.sign(
    { id: 1, username: 'john_doe', role: 'admin' }, // Payload
    'your-secret-key', // Secret key
    { expiresIn: '1h' } // Options (optional)
);

   payload contains the user's ID, username, and role. The token will expire in 1 hour <b>('1h')</b>.

   <b>3) Send the JWT to the Client</b>
res.json({ token });

<b>4) Verify the JWT on the Server (JWT Payload and Decoding)</b>
jwt.<span style="color:red">verify</span>(token, 'your-secret-key', (err, decoded) => {
  if (err) {
    return res.status(401).send('Unauthorized');
    OR
    return res.status(401).send('Token has expired or is invalid');
  }

  // Access the decoded data
  console.log(decoded.id);    // User's ID
  console.log(decoded.role);  // User's role (admin, user, etc.)

  res.json({ message: 'Access granted', user: decoded });
});

<b>5) Send the JWT with Subsequent Requests</b>
For any protected resources, the client will send the JWT in the Authorization header of subsequent requests. The format is usually Bearer <token>.
Example request (in JavaScript for a browser client):

fetch('http://localhost:3000/protected', {
  method: 'GET',
  headers: {
    'Authorization': \`Bearer \${token}\`,
  },
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));
                    `,
          code1: `const jsonServer = require('json-server');
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
// CORS configuration with credentials and custom headers
server.use(cors({
    origin: 'http://localhost:3000',  // Allow only specific origin
    methods: ['GET', 'POST'],  // Allow only specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'],  // Allow specific headers
    credentials: true  // Allow credentials (cookies, HTTP authentication)
  }));

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
        { id: user.id, userDetails: user },  // Payload
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
          text1: `<b>bcrypt</b>
                    <b>What is Hashing?</b>
Hashing involves converting a given key or string of characters into another value. This is typically represented by a shorter, fixed-length value or key that represents the original value and facilitates the retrieval.

<b>What is Password Hashing?</b>
Password Hashing is a process of converting an input password into a fixed-length string of characters, typically for the purpose of securely storing and transmitting the password.

Password hash functions are designed to be one-way functions. This means it should not be computationally possible to reverse the process and get the original input password from the hashed value.

For example, suppose we want to hash a password like <b>password123</b>. The password will be transformed into a fixed-length character string using a hash algorithm like bcrypt. And we'll get a hashed result once the hash function has processed our password.

The hashed output of <b>password123</b> using <b>bcrypt</b>, for instance, would look like this:
e234dsdom3k2kmdl3l43iwes9vjro44223m3n32kn5n2ksdo4

<b>What is bcrypt?</b>
Bcrypt is a cryptographic algorithm that hashes passwords and creates a fixed-length string (the hash) that represents the original password. Hashing is a one-way function, meaning that once a password is hashed, it cannot be easily reversed back to the original password. This makes bcrypt useful for securely storing passwords in databases.

bcrypt is a type of cryptographic algorithm used to securely store passwords. It scrambles a user's password into a unique code. This way, even if a thief takes the database, they won't be able to recover the original passwords readily.

<b>How bcrypt works</b>:
<b>Salting</b>: When you hash a password with bcrypt, it automatically generates a salt and combines it with the password.
To improve security, bcrypt incorporates a random number called a salt. This salt is unique to each password and is attached to it before hashing. The combined value (password + salt) is then passed to the hashing function.
<b>Hashing</b>: Bcrypt then hashes the salted password with the cryptographic algorithm, resulting in a hash that is hard to reverse.
 Bcrypt processes a user's password using a sophisticated mathematical function. This function converts the password to a fixed-length string of characters that appear random and meaningless. The hashed value is what is kept in the database, not the original password. Because the hashing function is one-way, reversing the hash will not produce the original password.
<b>Storing</b>: The resulting hash includes the salt and other information needed to verify the password (the cost factor and the salt itself). So, you don't need to store the original password; you store the hash and the salt.

<b>How bcrypt is used in practice</b>:
When a user logs in, the system compares the hash of the password they input with the stored hash in the database.
<b>Hash the password</b>: When a user registers, bcrypt hashes the password with a salt and stores the hash in the database.
<b>Verification</b>: When a user logs in, the system uses bcrypt to hash the password they provide and compares it to the stored hash in the database. Since bcrypt includes the salt in the hash, it can correctly compare the two without needing the original password.

<b>Benefits of bcrypt</b>:
<b>Security</b>: The salt and adaptive cost factor make bcrypt resistant to common attacks like rainbow table attacks and brute-force attacks.
<b>Automatic salting</b>: Bcrypt automatically handles salting, so you don’t need to worry about managing salts yourself.
<b>Slow and adaptive</b>: The ability to adjust the cost factor makes bcrypt resilient against increasing computational power, allowing you to make it slower as technology improves.

<b>1) bcrypt.hash()</b>: This function is used to generate a hash of a plaintext password. It takes the plaintext password and a salt factor (optional) as input parameters and returns the hashed password asynchronously.
<b>2) bcrypt.compare()</b>: This function is used to compare a plaintext password with its hashed counterpart. It takes the plaintext password and the hashed password as input parameters and returns a boolean value indicating whether the passwords match.


To begin, we require the bcrypt module in our Node.js application:
const bcrypt = require('bcrypt');

To ensure the strength of our password hashes, we determine the number of salt rounds. This value dictates the computational cost of hashing and, consequently, the level of security:
const saltRounds = 10; // Typically a value between 10 and 12

With our configuration established, we can generate a salt asynchronously using the <b>bcrypt.genSalt()</b> function. This salt will be unique for each password hash, enhancing security:
bcrypt.genSalt(saltRounds, (err, salt) => {
if (err) {
    // Handle error
    return;
}

// Salt generation successful, proceed to hash the password
});

Once the salt is generated, we combine it with the user's password to compute the hash using the <b>bcrypt.hash()</b> function. This results in a securely hashed password ready for storage:
const userPassword = 'user_password'; // Replace with the actual password
bcrypt.hash(userPassword, salt, (err, hash) => {
    if (err) {
        // Handle error
        return;
    }

// Hashing successful, 'hash' contains the hashed password
console.log('Hashed password:', hash);
});


<b>How to Verify Passwords</b>
To verify a password using bcrypt, use the <b>bcrypt.compare()</b> function. This function compares a plaintext password provided by the user during login with the hashed password stored in the database.`,
          code1: `// ---------- Hashing a password: -----------
const bcrypt = require('bcryptjs');
const password = 'mySuperSecretPassword';
// Hash the password
bcrypt.hash(password, 10, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
  } else {
    console.log('Hashed password:', hash);
  }
});
Here, 10 is the cost factor (higher values make the hashing process slower and more secure).



//------------- Verifying a password: ------------
const storedHash = '$2a$10$ZQF7xGr69lKmm12k5Iyz9uFsdhrDovw1A4KZGk5WoUoEZTIwLVOee'; // Example hash
const inputPassword = 'mySuperSecretPassword';

// Compare the password entered by the user with the stored hash
bcrypt.compare(inputPassword, storedHash, (err, result) => {
  if (err) {
    console.error('Error comparing password:', err);
  } else if (result) {
    console.log('Password matches!');
  } else {
    console.log('Password does not match!');
  }
});`
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
      title: "Authentication & Authorization",
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