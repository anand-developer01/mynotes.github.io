const isHighlighted = 'expressjs-notes'
const Links1 = 'MERN-notes'
const Links2 = 'mongodb-notes'
const Links3 = 'expressjs-notes'
const Links4 = 'javascript-projects'

const expressData = {
    expressNote: [
        {
            id: 1,
            title: "prepare ",
            note: [
                {
                    text1: `<h2><b>Middleware</b></h2>
<ul>
  <li>What is middleware in Express.js?</li>
  <li>Why do we use <code>next()</code> in middleware? What happens if we don’t call it?</li>
  <li>Types of middleware: application-level, router-level, error-handling, built-in, third-party.</li>
  <li>Order of middleware execution—how does Express decide what runs first?</li>
  <li>Real use cases: logging, authentication/authorization, validation, rate limiting, error handling.</li>
  <li>Can you give real examples (logging, auth, validation)?</li>
  <li>Difference between synchronous vs asynchronous middleware.</li>
</ul>

<h2><b>REST API</b></h2>
<ul>
  <li>What is a REST API and its core principles (statelessness, resources, representations)?</li>
  <li>HTTP methods and when to use them: GET, POST, PUT, PATCH, DELETE.</li>
  <li>Idempotency: which methods are idempotent and why it matters.</li>
  <li>Route params vs query params; good URI design for resources.</li>
  <li>Common status codes: 200, 201, 204, 400, 401, 403, 404, 409, 422, 500.</li>
  <li>Pagination, filtering, sorting; versioning strategies (<code>/v1</code>, headers).</li>
</ul>

<h2><b>Express Basics</b></h2>
<ul>
  <li>Setting up an Express server; role of <code>app.listen()</code>.</li>
  <li>Difference between <code>app.use()</code> and <code>app.get()</code>/<code>app.post()</code>.</li>
  <li>Built-in middleware: <code>express.json()</code>, <code>express.urlencoded()</code>, static files.</li>
  <li>Routing basics; using <code>express.Router()</code> to modularize routes.</li>
  <li>Handling async code with <code>async/await</code> and centralized error handling.</li>
  <li>Environment variables/config, CORS basics, using tools like nodemon.</li>
</ul>

<h2><b>Authentication</b></h2>
<ul>
  <li>What is JWT? Why token-based auth vs session-based auth?</li>
  <li>Why use the <code>Authorization: Bearer &lt;token&gt;</code> header?</li>
  <li>Where to store JWT on the client; risks and mitigations.</li>
</ul>

<h2><b>Security</b></h2>
<ul>
  <li>Securing APIs with <code>helmet</code>, proper CORS, rate limiting, input validation.</li>
  <li>Password hashing with <code>bcrypt</code>; avoiding sensitive data in tokens.</li>
</ul>

<h2><b>Error Handling</b></h2>
<ul>
  <li>Writing error-handling middleware: <code>(err, req, res, next)</code>.</li>
  <li>Consistent error response shape; mapping errors to proper status codes.</li>
  <li>Handling unhandled rejections/uncaught exceptions.</li>
</ul>

<h2><b>Hands-on Coding Tasks</b></h2>
<ul>
  <li>Build CRUD for <code>/users</code> with proper status codes.</li>
  <li>Create a request-logging middleware (method, URL, response time).</li>
  <li>Build login that issues JWT; protect a route with JWT middleware.</li>
  <li>Add validation to a POST route; return 422 with details on failure.</li>
  <li>Implement centralized error handler and remove inline <code>try/catch</code> clutter.</li>
</ul>

<h2><b>Advanced / Tricky Questions</b></h2>
<ul>
  <li>Difference between <code>app.use("/api", router)</code> and <code>app.get("/api", handler)</code>.</li>
  <li>How to structure a large Express project (controllers, services, routes, middlewares).</li>
  <li>E2E testing basics with Jest + Supertest; mocking DB calls.</li>
  <li>Performance considerations: compression, caching headers, N+1 queries, DB pooling.</li>
</ul>
`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Why do we use next() in middleware? What happens if we don’t call it?",
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
            title: "Can you give real examples (logging, auth, validation)?",
            note: [
                {
                    text1: ``,
                    code1: `//1. Logging Middleware
                    // logger.js
function logger(req, res, next) {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(\`\${req.method} \${req.originalUrl} - \${res.statusCode} [\${duration}ms]\`);
  });
  next();
}

module.exports = logger;

// Usage
const express = require("express");
const app = express();
const logger = require("./logger");

app.use(logger);

app.get("/home", (req, res) => {
  res.send("This is Home");
});




// 2. Authentication Middleware (JWT)

// 📌 Protects routes with JWT token in Authorization: Bearer <token> header.
// auth.js
const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1]; // "Bearer <token>"
  if (!token) return res.status(401).json({ message: "Invalid token format" });

  jwt.verify(token, "secretkey", (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid/Expired token" });
    req.user = user; // attach decoded user to request
    next();
  });
}

module.exports = authMiddleware;

// Usage
const auth = require("./auth");

app.get("/profile", auth, (req, res) => {
  res.json({ message: \`Welcome \${req.user.username}\` });
});



// 3. Validation Middleware
// 📌 Validates request body before reaching controller. (Using express-validator)
// validation.js
const { body, validationResult } = require("express-validator");

const validateUser = [
  body("email").isEmail().withMessage("Invalid email format"),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateUser;


// usage
const validateUser = require("./validation");

app.post("/register", validateUser, (req, res) => {
  res.json({ message: "User registered successfully" });
});

`
                }
            ]
        },
        {
            id: 1,
            title: "What is express.json()",
            note: [
                {
                    text1: `It's a <b>built-in middleware</b> in Express (since v4.16+).
It <b>parses incoming requests with JSON payloads</b> and makes the data available in <b>req.body</b>.
Without it, if you send JSON data in a POST request, Express won't automatically understand it.

Most APIs work with JSON (for POST/PUT/PATCH).
<b>express.json()</b> ensures the server <b>understands JSON data</b> sent from clients (React, Angular, Postman, etc.).
<b>express.json()</b> is a middleware that parses incoming JSON requests and puts the data into <b>req.body.</b>`,
                    code1: `//  --------- Example without express.json ---------
                    const express = require("express");
const app = express();

app.post("/user", (req, res) => {
  console.log(req.body); // ❌ undefined
  res.send("User data received");
});

app.listen(3000, () => console.log("Server running on port 3000"));

//If you send a POST request with JSON body:
{
  "name": "Anand",
  "age": 30
}
// 👉 req.body will be undefined ❌



// --------- Example with express.json() -----------
const express = require("express");
const app = express();

// Built-in middleware
app.use(express.json());

app.post("/user", (req, res) => {
  console.log(req.body); // ✅ { name: "Anand", age: 30 }
  res.send(\`User \${req.body.name} received\`);
});

app.listen(3000, () => console.log("Server running on port 3000"));
// 👉 Now Express automatically parses JSON and attaches it to req.body.
`
                }
            ]
        },
        {
            id: 1,
            title: "express.urlencoded({ extended: true })",
            note: [
                {
                    text1: `Parses form data <b>(application/x-www-form-urlencoded)</b>.
Example: HTML form submissions.`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: 'express.static("public")',
            note: [
                {
                    text1: `Serves static files like HTML, CSS, JS, images.`,
                    code1: `app.use(express.static("public"));
// Now /logo.png loads from public/logo.png.
`
                }
            ]
        },
        {
            id: 1,
            section: "Third-party Middleware",
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
            title: "morgan",
            note: [
                {
                    text1: `Logging middleware (shows request method, URL, status, response time).`,
                    code1: `const morgan = require("morgan");
app.use(morgan("dev"));
`
                }
            ]
        },
        {
            id: 1,
            title: "cors",
            note: [
                {
                    text1: `Enables <b>Cross-Origin Resource Sharing</b> (so frontend React app can call backend API).`,
                    code1: `const cors = require("cors");
app.use(cors());
`
                }
            ]
        },
        {
            id: 1,
            title: "helmet",
            note: [
                {
                    text1: `Security middleware (sets HTTP headers to protect app).`,
                    code1: `const helmet = require("helmet");
app.use(helmet());
`
                }
            ]
        },
        {
            id: 1,
            title: "express-session",
            note: [
                {
                    text1: `Stores session data (used for login systems).`,
                    code1: ``
                }
            ]
        },
                {
            id: 1,
            title: "cookie-parser",
            note: [
                {
                    text1: `Parses cookies from request headers.`,
                    code1: `const cookieParser = require("cookie-parser");
app.use(cookieParser());
`
                }
            ]
        },
                {
            id: 1,
            title: "Custom middleware",
            note: [
                {
                    text1: `Custom middleware in Express.js refers to functions designed to intercept and process requests and responses in the application's request-response cycle. These functions have access to the req (request), res (response), and next (next middleware function) objects, allowing them to perform various tasks before or after a request reaches its final route handler.`,
                    code1: `// ------------- 
                    
function authMiddleware(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized");
  }
  next(); // allow request to continue
}

app.use("/secure", authMiddleware);

app.get("/secure/data", (req, res) => {
  res.send("This is protected data");
});


app.listen(5000, () => {
    console.log("5000")
})
    
// If you send the request with an Authorization header, e.g. in Postman:
// Key: Authorization
// Value: Bearer test123 

`
                }
            ]
        },
    ]
}