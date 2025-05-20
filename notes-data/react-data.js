
const Links1 = 'react-notes'
const Links2 = 'redux-notes'
const Links3 = 'react-typescript-data'
const Links4 = 'react-projects'

const isHighlighted = 'react-notes'

const reactData = {
  reactNote: [
    // {
    //   id: 2,
    //   title: "intro",
    //   note: [
    //     {
    //       text1: `self closed component <ABC/>

    //      <iframe src="../db/React-js.pdf" width="100%" height="600px"></iframe>


    //       `,
    //       code1: ``
    //     }
    //   ]
    // },
    {
      id: 2,
      title: "intro",
      note: [
        {
          text1: `<b> create-react-app and react-scripts </b> 
          react-scripts is a set of scripts from the create-react-app starter pack. create-react-app helps you kick off projects without configuring, so you do not have to setup your project by yourself.

react-scripts start sets up the development environment and starts a server, as well as hot module reloading. `,
          code1: ``
        }
      ]
    },
    {
      id: 5,
      title: "libraries",
      note: [
        {
          text1: `Data binding is a concept in web development that establishes a connection between the data in an application and the user interface (UI) elements that display that data. The purpose of data binding is to ensure that changes in one part of the application are automatically reflected in another part, creating synchronization between the data and the UI.
          
          react-scripts is a library that is automatically installed when you create a new React application using the create-react-app tool. It contains the configuration and scripts necessary to build, test, and run a React app. This library abstracts away the complexity of setting up a React development environment, so developers can focus on writing code without worrying about configuration for tools like Webpack, Babel, ESLint, Jest, and others.`,
          code1: ``
        }
      ]
    },
    {
      id: 5,
      section: "configuration",
      title: "Webpack",
      note: [
        {
          text1: `<b>What is module bundler</b> : It is a tool used in web development that processes the multiple JavaScript modules/source files of an application into single file utilized by the browser

          <b>module bundler</b>. A module bundler is a tool in web development that processes multiple JavaScript (and sometimes CSS or other asset) modules and combines them into a single file — or a few optimized, minified, and compressed files — that can be used efficiently by a browser.
Common Module Bundlers:
    <b>Webpack </b> - The most widely used bundler, highly configurable.
    <b>Rollup </b> - Focused on bundling ES6 modules with tree-shaking.
    <b>Parcel </b> - Zero-config bundler, great for quick setups.
    <b>Vite </b> - Uses Rollup under the hood for production builds, with blazing-fast dev server using native ES modules.

     <b> Why Multiple Bundled Files?</b> 
    <b>Code Splitting</b> 
    Breaks the code into smaller chunks (e.g., by route or feature), so the browser only loads what's needed.
    <b>Example</b>:
        main.bundle.js - core app
        dashboard.chunk.js - loaded only on /dashboard
        vendors.bundle.js - third-party libraries (like React)

    <b>Lazy Loading</b> 
    Some files are loaded on-demand (e.g., when a user navigates to a specific page).

    The primary purpose of the bundlers is to organize modules and dependencies in front-end projects, optimize websites performance, and reduce output bundle size

          <b>What is Webpack? </b>
Webpack is a module bundler for JavaScript applications. It processes your application’s modules and packages them into one or more bundles, often a single bundle.js file, optimizing loading time for browsers.

 <b>Example Output From a Bundler (like Webpack)</b>
dist/
├── index.html
├── main.bundle.js          <-- Your app’s logic
├── vendors.bundle.js       <-- Third-party libraries
├── 456.chunk.js            <-- A dynamically imported module (code split)
├── main.bundle.js.map      <-- Source map (for debugging)

At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a <b>Dependency Graph</b> from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.

<b>Dependency Graph</b>
Any time one file depends on another, webpack treats this as a dependency. This allows webpack to take non-code assets, such as images or web fonts, and also provide them as dependencies for your application.

At its core, webpack is a module bundler. It examines all of the modules in your application, creates a dependency graph, then intelligently puts all of them together into one or more bundle(s) that your index.html file can reference.

App.js --->     |         |
Dashboard.js -> | Bundler | -> bundle.js
About.js --->   |         |

<b> Why Do We Need Webpack? </b>
Developers prefer to work with many small, manageable files, which improves the development experience and code maintainability. However, this modular approach can introduce order-of-operation issues, where a module depends on another that hasn’t yet loaded. Additionally, getting each file from the server would require a HTTP request, and more files mean more requests, this can slow down performance.

It handles not just JavaScript, but also CSS, images, and more, transforming them into a format that's ready for the web.

Setting up Webpack involves organizing your project, installing Webpack, and configuring it according to your needs.

<b>What problem is webpack solving?</b>

Historically when building a JavaScript application, your JavaScript code would be separated by files (these files may or may not have been actual modules). Then in your <b>index.html</b> file, you'd have to include &lt;script&gt; tags to every JavaScript file you had.

Not only was this tedious, but it was also error-prone. There were the obvious issues like typos or forgetting to include a file, but more than that, the order of the &lt;script&gt; tags mattered. If you loaded a script that depended on React before loading the React script, things would break. Because webpack (intelligently) creates a bundle for you, both of those problems go away. You don't have to worry about forgetting a &lt;script&gt; and you don't have to worry about the order.

As we'll soon see, the "module bundling" aspect is just one part of webpack. If needed, you're also able to tell webpack to make certain transformations on your modules before adding them to the bundle. Examples might include transforming SASS/LESS to regular CSS or "modern JavaScript" to ES5 that the browser can understand.

<b>Project Structure</b>
When you start a project with Webpack, it's a good idea to keep your files organized in <b>src</b> and <b>dist</b> folders:
<b>src</b> - This is where all your original code goes before Webpack bundles it. This includes your JavaScript, CSS, images, fonts, and more.
<b>dist</b> - After Webpack does its magic, it puts the finished, optimized code here. This is what you'll put on the web.

<a href="https://ui.dev/webpack" target="_blank"> webpack </a>

<b>Installing webpack</b>
npm i webpack webpack-dev-server webpack-cli --save--dev

`,
          code1: ``
        },
        {
          text1: `    
          <b>Loaders</b>: babel-loader, css-loader, style-loader, file-loader, sass-loader
<b>Plugins</b>:
    <b>HtmlWebpackPlugin</b>: generates HTML with the bundled script injected
    <b>MiniCssExtractPlugin</b>: extracts CSS into separate files
    <b>CleanWebpackPlugin</b>: cleans output folder before each build
    
    <table>
      <thead>
        <tr>
          <th>Section</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>entry</code>
          </td>
          <td>Tells Webpack where to start the bundling process
            (your main JS file).</td>
        </tr>
        <tr>
          <td><code>output</code>
          </td>
          <td>Specifies where the bundled files should be saved and
            with what name.</td>
        </tr>
        <tr>
          <td><code ata-end="1339">module.rules</code></td>
          <td>Defines how different types of files should be
            handled (via <strong>loaders</strong>). For example, using <code>babel-loader</code> for JS, <code
              ata-end="1470">css-loader</code> for CSS.</td>
        </tr>
        <tr>
          <td><code ata-end="1493">plugins</code></td>
          <td>Used to extend Webpack's functionality (e.g.,
            injecting scripts into HTML, extracting CSS).</td>
        </tr>
        <tr>
          <td><code>mode</code>
          </td>
          <td>Tells Webpack whether you're in <code>development</code> (with source maps, faster
            builds) or <code>production</code> (with optimizations like minification).</td>
        </tr>
      </tbody>
    </table>`,
          code1: `const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: ASSET_PATH,
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/, // styles files
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif|icon)$/,
                use: ['file-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
}`
        },
        {
          text1: ``,
          code1: ``
        },
      ]
    },
    {
      id: 5,
      title: "vite",
      note: [
        {
          text1: `Vite (French: [vit], like “veet”)
          Vite is a frontend build tool and development server used to speed up web development, particularly with modern frameworks like React and Vue. It's designed to provide a faster and leaner development experience by leveraging native ES modules and using optimized build processes.
          
          Vite is a powerful build tool and development server designed to speed up modern web development.
          
          Vite is a modern build tool and development server for front-end projects, created by Evan You (the creator of Vue.js). It's designed to be <b>fast, lightweight</b>, and <b>developer-friendly</b>, especially compared to older bundlers like Webpack.
          
          <b>How HMR Works in Vite</b>
          HMR is built into the Vite dev server. Here's the simplified flow:
🧩 <b>Step-by-Step</b>:
    You edit <u>Button.jsx</u>.
    Vite <b>detects the file change</b>.
    It <b>re-processes only that file</b> (using <u>esbuild</u>).
    Vite pushes the new module to the browser via <b>WebSocket</b>.
    The browser's <b>HMR runtime</b> replaces the old module <b>without reloading the page</b>.
    If you're using React, Vite uses <b>React Refresh</b> to preserve component state.
    
    
    ✅ <b>1. Vite Has Smart Defaults </b>
Vite is <b>opinionated</b> — it comes with sensible defaults, which means:
    No need to configure file watching
    No need to manually set up HMR
    No need to set up Babel or TypeScript transformations

It just <b>works out of the box</b>.

⚙️ <b>2. The react() Plugin Adds React-Specific Logic </b>
plugins: [react()],

This line does a <b>lot</b> behind the scenes:
    Adds <b>JSX support</b>
    Injects <b>React Fast Refresh</b> for HMR
    Supports .jsx, .tsx files
    Configures HMR for React components
So even though it looks like one line, this plugin is internally setting up:
    Babel transforms (if needed)
    HMR boundaries
    State-preserving updates

🧪 <b>3. HMR Is Built-In — No Need to Configure It </b>
Vite internally runs its <b>own development server</b> using:
    <b>esbuild</b> for lightning-fast transformation
    <b>WebSocket</b> server for HMR
    <b>Native ES Modules (ESM)</b> for browser delivery

That's why you don't see things like <b>entry, output</b>, or <b>devServer</b> like in Webpack — it's all <b>abstracted.</b>`,
          code1: ``
        },
        {
          text1: ` <b>eslint-plugin-react-refresh vs vite </b>
          
          🧠 <b>Breakdown</b>
✅ <b>Vite</b>:
    Has built-in support for HMR.
    Uses native <b>ES Modules</b> and a <b>WebSocket server</b> to push hot updates.
    Applies HMR to <b>any module </b>(JS, CSS, etc.).

✅ <b><span style="color:red">@vitejs/plugin-react</span></b>:
    Adds <b>React Fast Refresh</b> on top of Vite's HMR.
    Makes HMR React-aware (preserving component state across edits).

✅ <b>eslint-plugin-react-refresh</b>:
    Doesn't provide HMR at all.
    Only adds lint rules to enforce proper component exports, so HMR doesn't break.
    Example: It warns if you write this:

// ⚠️ This can break Fast Refresh
export const value = 42;

🟢 <b>Final Answer</b>:
    HMR is powered by Vite.
    eslint-plugin-react-refresh just helps you write code that plays nicely with React Fast Refresh.
          
          <table class="w-fit min-w-(--thread-content-width)">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Vite</th>
          <th>Webpack</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dev startup time</td>
          <td>⚡ Very fast (no bundling)</td>
          <td>🐢 Slow (bundles entire app)</td>
        </tr>
        <tr>
          <td>Rebuild speed</td>
          <td>⚡ Instant (per file)</td>
          <td>🐌 Slower (rebuilds chunks)</td>
        </tr>
        <tr>
          <td>HMR performance</td>
          <td>⚡ Near-instant</td>
          <td>🐌 Often slower + state loss</td>
        </tr>
        <tr>
          <td>Uses esbuild</td>
          <td>✅ Yes</td>
          <td>❌ No (uses slower JS-based tools)</td>
        </tr>
      </tbody>
    </table>
    
    </br>
    </br>
    
    <table class="w-fit min-w-(--thread-content-width)">
      <thead>
        <tr>
          <th data-col-size="sm">Feature</th>
          <th data-col-size="sm">Create React App (CRA)</th>
          <th data-col-size="md">Vite</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-col-size="sm"><strong>Bundler</strong></td>
          <td data-col-size="sm">Webpack</td>
          <td data-col-size="md">ESBuild (dev) + Rollup (build)</td>
        </tr>
        <tr>
          <td data-col-size="sm"><strong>Dev Server
              Speed</strong></td>
          <td data-col-size="sm">Slower startup and reloads</td>
          <td data-col-size="md">Very fast due to native ES modules &amp; ESBuild</td>
        </tr>
        <tr>
          <td data-col-size="sm"><strong>Build
              Speed</strong></td>
          <td data-col-size="sm">Slower (Webpack-based)</td>
          <td data-col-size="md">Much faster (Rollup + ESBuild optimized)</td>
        </tr>
        <tr>
          <td data-col-size="sm"><strong>Hot Module
              Reload (HMR)</strong></td>
          <td data-col-size="sm">Slower, especially in large projects</td>
          <td data-col-size="md">Near-instant, more efficient</td>
        </tr>
        <tr>
          <td " " 1082" data-col-size="sm"><strong>Initial
              Setup</strong></td>
          <td " " 1135" data-col-size="sm"><code>npx create-react-app my-app</code></td>
          <td data-col-size="md"><code>npm create vite@latest my-app</code></td>
        </tr>
        <tr " " 1321">
          <td " " 1216" data-col-size="sm"><strong "              " 1206">Customization</strong></td>
          <td data-col-size="sm" " " 1269">Requires <code "              " 1234">eject</code> (irreversible)</td>
          <td data-col-size="md" " " 1321">Easy to customize via <code "              " 1309">vite.config.js</code></td>
        </tr>
        <tr>
          <td " " 1351" data-col-size="sm"><strong>Modern
              Syntax Support</strong></td>
          <td data-col-size="sm" " " 1404">Good, uses Babel</td>
          <td data-col-size="md">Excellent, via ESBuild (faster than Babel)</td>
        </tr>
        <tr>
          <td " " 1486" data-col-size="sm"><strong>Built-in
              TypeScript</strong></td>
          <td " " 1539" data-col-size="sm">Optional, with template</td>
          <td data-col-size="md">Optional, with template</td>
        </tr>
        <tr>
          <td data-col-size="sm"><strong>SSR
              Support</strong></td>
          <td data-col-size="sm">Not built-in</td>
          <td data-col-size="md">Supported (with plugins)</td>
        </tr>
        <tr>
          <td data-col-size="sm"><strong>Out-of-the-box Features</strong></td>
          <td data-col-size="sm">Linting, testing with Jest</td>
          <td data-col-size="md">Minimal, but you can add what you want</td>
        </tr>
        <tr>
          <td data-col-size="sm"><strong>File Size
              (node_modules)</strong></td>
          <td data-col-size="sm">Large (~200MB+)</td>
          <td data-col-size="md">Smaller (~50MB+)</td>
        </tr>
        <tr>
          <td data-col-size="sm"><strong>Ecosystem
              Maturity</strong></td>
          <td data-col-size="sm">Older, widely adopted</td>
          <td data-col-size="md">Newer, rapidly growing adoption</td>
        </tr>
      </tbody>
    </table>`,
          code1: ``
        },
        {
          text1: ``,
          code1: ``
        },
      ]
    },
    {
      id: 5,
      title: "Setting up a React project with Vite",
      note: [
        {
          text1: `<b>1. Create a new Vite React project</b>
<b>npm create vite@latest my-react-app -- --template react</b>

    <b>my-react-app</b>: Your project folder name.
    <b>--template react</b>: Tells Vite to scaffold with the React + JavaScript template.
        For TypeScript, use: <b>--template react-ts</b>
        
        <b>2. Navigate into your project folder</b>
cd my-react-app
<b>3. Install dependencies</b>
npm install
<b>4. Start the development server</b>
npm run dev

    You'll see a local dev server running at something like http://localhost:5173

<b>🛠 Project Structure (default)</b>
my-react-app/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   └── App.jsx
└── ...

    <b>main.jsx</b>: Entry point that renders &lt;App /&gt;
    <b>App.jsx</b>: The main React component`,
          code1: ``
        }
      ]
    },
    {
      id: 5,
      title: "Hot Module Replacement (HMR)",
      note: [
        {
          text1: `HMR is a feature in modern development tools (like Webpack or Vite) that allows you to update parts of your web app (JavaScript, CSS, etc.) without refreshing the entire page.
          
          When you develop a React app (e.g., using Vite, Webpack, or Next.js), HMR lets you edit a component, and the browser updates just that component without reloading the whole page
          
          Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development.

          Hot Module Replacement (or HMR) is one of the most useful features offered by webpack. It allows all kinds of modules to be updated at runtime without the need for a full refresh. This page focuses on <b>implementation</b> while the concepts page gives more details on how it works and why it's useful.

<b>warning </b>
HMR is not intended for use in production, meaning it should only be used in development. See the building for production guide for more information.

<b>Setup</b>
The goals of development and production builds differ greatly. In development, we want strong source mapping and a localhost server with live reloading or hot module replacement. In production, our goals shift to a focus on minified bundles, lighter weight source maps, and optimized assets to improve load time. With this logical separation at hand, we typically recommend writing separate webpack configurations for each environment.

While we will separate the production and development specific bits out, note that we'll still maintain a "common" configuration to keep things DRY. In order to merge these configurations together, we'll use a utility called webpack-merge. With the "common" configuration in place, we won't have to duplicate code within the environment-specific configurations.


<b> About below diagram </b>
✅ <b> Step 1: Developer Edits Code </b>
    You modify a file using a text editor (like <u>App.js</u>).
    This change is saved to the <b>file system</b>.

✅ <b> Step 2: Webpack Detects Change </b>
    The <b>Webpack Compiler</b> watches the file system.
    When it sees a file change, it <b>recompiles only the updated modules</b>, not the whole app.

✅ <b> Step 3: HMR Server Gets the Update </b>
    The <b>HMR Server</b> inside the Webpack Dev Server receives the new compiled module.

✅ <b> Step 4: Push Update to Browser </b>
    The <b>HMR Server</b> sends the updated module to the browser using a <b>WebSocket connection</b>.
    This update is sent in a small package — only the changed code (not the full page).

✅ <b> Step 5: HMR Runtime Updates Code </b>
    In the browser:
        The <b>HMR Runtime</b> is already running inside  <b>bundle.js</b>.
        It <b>swaps out the old module</b> with the new one, live, while the app is running.
        <b>No page reload</b> happens.
        <b>State is preserved</b> (like your React component's state).

🧠 <b> What's Inside Each Box? </b>
📦 <b> Webpack Dev Server </b>
    <b>Bundle Server </b>: Serves the regular files like <b>bundle.js</b>, HTML, etc.
    <b>HMR Server </b>: Manages WebSocket communication and updates modules live.

🧠 <b> Webpack Compiler </b>
    Compiles updated code when files change.
    Works with both HMR Server and Bundle Server.

🌐 <b> Browser </b>
    Loads <b>bundle.js</b>, which includes:
        <b>HMR Runtime</b>: Handles hot updates.
        <b>Your App's JS Code</b>: The actual React components, etc.


<div>
<b>🔧 Tools Needed in React </b>
    <table>
      <thead>
        <tr>
          <th data-col-size="sm">Tool</th>
          <th data-col-size="md">What It Does</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-col-size="sm"><code>react-refresh</code></td>
          <td data-col-size="md">Enables component state preservation in HMR</td>
        </tr>
        <tr>
          <td data-col-size="sm"><code>@vitejs/plugin-react</code></td>
          <td data-col-size="md">Vite plugin that includes React Refresh</td>
        </tr>
        <tr>
          <td data-col-size="sm"><code>react-refresh-webpack-plugin</code></td>
          <td data-col-size="md">Webpack plugin for React HMR</td>
        </tr>
      </tbody>
    </table>

</br>
</br>

    <b> Step-by-Step Validation</b>
        <table>
      <thead>
        <tr>
          <th>Step</th>
          <th>Description in Image</th>
          <th>Is It Correct?</th>
          <th>Why?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><strong>Text Editor ➝
              File System</strong></td>
          <td>✅ Yes</td>
          <td>Developer changes are saved to the filesystem.</td>
        </tr>
        <tr>
          <td>2</td>
          <td><strong>File System ➝
              Webpack Compiler</strong></td>
          <td>✅ Yes</td>
          <td>Webpack watches files and triggers recompilation on
            changes.</td>
        </tr>
        <tr>
          <td>3</td>
          <td><strong>Webpack
              Compiler ➝ HMR Server</strong></td>
          <td>✅ Yes</td>
          <td>Updated modules are passed to the HMR server for
            distribution.</td>
        </tr>
        <tr>
          <td>4</td>
          <td><strong>HMR Server ➝
              Browser (via WebSocket)</strong></td>
          <td>✅ Yes</td>
          <td>HMR server sends updated module chunks over WebSocket
            to the browser.</td>
        </tr>
        <tr>
          <td>5</td>
          <td><strong>HMR Runtime ➝
              Updates JS Code</strong></td>
          <td>✅ Yes</td>
          <td>The browser's HMR runtime replaces the changed module
            in place, keeping app state intact.</td>
        </tr>
      </tbody>
    </table>
</div>
<a href="https://remix.run/docs/en/main/discussion/hot-module-replacement" target="_blank"> hot-module-replacement </a>
`,
          code1: ``,
          img: `../assets/images/react/webpack-overview-diagram.png`
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
      id: 5,
      title: "new topic",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 5,
      title: "new topic",
      note: [
        {
          text1: ``,
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
                    in JSX, all self-closing tags must be properly closed, unlike regular HTML where you can omit the closing slash.
                    &lt;input&gt;   {/* ❌ ERROR: Self-closing tags must be closed */}
                    &lt;input /&gt;   {/* ✅ Correct */}

                    As stated in the official docs of React, JSX provides syntactic sugar for React.createElement( ) function.
                   
                    <b> const element = &lt; h1 &gt; Hello, JSX !&lt; /h1 &gt; </b>
                   
                    In the above example, the syntax <b>&lt; h1 &gt; Hello, JSX !&lt; /h1 &gt;</b> is JSX. It represents a React element (a virtual representation of a DOM element) and is equivalent to the following JavaScript code:
                   
                    <b> const element = React.createElement('h1', null, 'Hello, JSX!'); </b>
                    <span style="color:#aa1099">
                    Behind the scenes, tools like Babel are used to transpile JSX into regular JavaScript code that uses React.createElement to create React elements. The resulting JavaScript is what actually gets executed in the browser.
                    </span>
                    why can't browser read jsx
                    JSX isn't directly supported by browsers, requiring conversion by tools like Babel to transform JSX into valid JavaScript. This transpilation ensures browsers can interpret and execute the JSX-embedded code in React applications.`,
          code1: `const element = React.createElement('h1', null, 'Hello, JSX!');
          `
        }
      ]
    },
    {
      id: 3,
      section: `State and Props`,
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
      id: 39,
      section: `Components`,
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
          code1: `import React, { useRef } from 'react';

const UncontrolledForm = () => {
  // Create a ref to access the input element
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    alert(\`Input Value: \${inputRef.current.value}\`); // Access the input value using the ref
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;div&gt;
        &lt;label htmlFor=&quot;name&quot;&gt;Name:&lt;/label&gt;
        &lt;input type=&quot;text&quot; id=&quot;name&quot; ref={inputRef} /&gt;
      &lt;/div&gt;
      &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
};

export default UncontrolledForm;
`
        }
      ],
    },
    {
      id: 15,
      section: "Reusable Components & Design Patterns",
      title: "What are Higher-Order Components?",
      note: [
        {
          text1: `<b>HOC, Render Props</b> and now <b>hooks</b> all serve to the same purpose: <u>Share stateful logic between components</u>. There is actually no way to tell which one is better or worst. All depends on your use case.
          
          A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature.

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
                  Props manipulation.
                  
                  Key Points About HOCs in React:
HOCs are functions that take a component and return a new component with additional props or behavior. They were commonly used to add cross-cutting concerns like:
=> Authentication checks
=> Data fetching
=> Event listeners
=> State management

<b>Benefits of Higher Order Components</b>
<b>Reusability</b>: HOCs allow you to encapsulate shared functionalities and apply them to multiple components, promoting code reuse.
<b>Separation of Concerns</b>: HOCs help maintain separate responsibilities, enabling your components to focus on their specific tasks.
<b>Code Abstraction</b>: HOCs abstract common logic from components, making them more concise and easier to understand.
<b>Composability</b>: You can combine various HOCs to compose complex functionalities into your components.
`,
          code1: `//class Component HOC
          // HOC.js
          // HOC.js

import React, {Component} from 'react';

export default function Hoc(HocComponent, data){
    return class extends Component{
        constructor(props) {
            super(props);
            this.state = {
                data: data
            };
        }
        
        render(){
            return (
                &lt;HocComponent data={this.state.data} {...this.props} /&gt;
            );
        }
    } 
}

//Home.js / App.js

import React, { Component } from 'react';
import StockList from './StockList';
import UserList from './UserList';
import Hoc from './HOC';

const StocksData = [
  {
      id: 1,
      name: 'TCS'
        
  },
  {
      id: 2,
      name: 'Infosys'
  },
  {
      id: 3,
      name: 'Reliance'
  }
];
const UsersData = [
  {
      id: 1,
      name: 'Krunal'
        
  },
  {
      id: 2,
      name: 'Ankit'
  },
  {
      id: 3,
      name: 'Rushabh'
  }
];

const Stocks = Hoc(
  StockList,
  StocksData
);

const Users = Hoc(
  UserList,
  UsersData
);


class Home extends Component {
  render() {
    return (
      &lt;div&gt;
        &lt;Users/&gt;
        &lt;Stocks/&gt;
      &lt;/div&gt;
    )
  }
}
export default Home;


// StockList.js
import React, { Component } from 'react';
import TableRow from './TableRow';
class StockList extends Component {
  constructor(props) {
    super(props);
  }

  tabRow() {
    if (this.props.data instanceof Array) {
      return this.props.data.map(function (object, i) {
        return & lt;TableRow obj = { object } key = { i } /& gt;;
      })
    }
  }
  render() {
    return (
      &lt;div className=&quot;container&quot;&gt;
        &lt;table className=&quot;table table-striped&quot;&gt;
          &lt;thead&gt;
            &lt;tr&gt;
              &lt;td&gt;ID&lt;/td&gt;
              &lt;td&gt;Name&lt;/td&gt;
            &lt;/tr&gt;
          &lt;/thead&gt;
          &lt;tbody&gt;
            {this.tabRow()}
          &lt;/tbody&gt;
        &lt;/table&gt;
      &lt;/div&gt;
    );
  }
}
export default StockList;


// TableRow.js
import React, { Component } from 'react';
class TableRow extends Component {
  render() {
    return (
      &lt;tr&gt;
      &lt;td&gt;
        {this.props.obj.id}
      &lt;/td&gt;
      &lt;td&gt;
        {this.props.obj.name}
      &lt;/td&gt;
    &lt;/tr&gt;
    );
  }
}
export default TableRow;


// UserList.js
import React, { Component } from 'react';
import TableRow from './TableRow';

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  tabRow() {
    if (this.props.data instanceof Array) {
      return this.props.data.map(function (object, i) {
        return &lt;TableRow obj={object} key={i} /&gt;;
      })
    }
  }
  render() {
    return (
      &lt;div className=&quot;container&quot;&gt;
        &lt;table className=&quot;table table-striped&quot;&gt;
          &lt;thead&gt;
            &lt;tr&gt;
              &lt;td&gt;ID&lt;/td&gt;
              &lt;td&gt;Name&lt;/td&gt;
            &lt;/tr&gt;
          &lt;/thead&gt;
          &lt;tbody&gt;
            {this.tabRow()}
          &lt;/tbody&gt;
        &lt;/table&gt;
      &lt;/div&gt;
    );
  }
}
export default UserList;

//-----------------------
// Ex : 2
// withCounter.js
import React from 'react'
const withCounter = OriginalComponent => {
	class NewComponent extends React.Component {
			constructor(props){
				super(props)
				this.state = {
					count : 0
				}
			}
			incrementCount = () => {
				this.setState(prevState => {return {count : prevState.count + 1}})
			}
		render() {
			return &lt;OriginalComponent count = {this.state.count} incrementCount = {this.incrementCount}/&gt;
		}
	}
	return NewComponent
}
export default withCounter

// ClickCounter.js
import React, { Component } from 'react'
import withCounter from './withCounter'
class ClickCounter extends Component {

	render() {
		const { count, incrementCount } = this.props
		return (
			&lt;div&gt;
				&lt;button onClick={incrementCount}&gt; click - {count}&lt;/button&gt;
			&lt;/div&gt;
		)
	}

}
export default withCounter(ClickCounter)

// HoverCounter.js
import React, { Component } from 'react'
import withCounter from './withCounter'
class HoverCounter extends Component{
	constructor(props){
		super(props)
		this.state = {
			count : 0
		}
	}

	incrementCount = () => {
		this.setState(prevState => {return {count : prevState.count + 1}})
	}

	render(){
		const { count, incrementCount } = this.props
		return(
			&lt;div&gt;
			&lt;h3 onMouseOver = { incrementCount }&gt; click - { count }&lt;/h3&gt;
		&lt;/div&gt;
			)
	}

}
export default withCounter(HoverCounter)



//===============================
//Functional HOC
//================================
//FuncrionalHoc.js
import React, { useEffect, useState } from 'react';
// import axios from 'axios'

const FuncrionalHoc = (UserComponent, StocksId) => {
    const NewUserComponent = () => {
        const [stocksData, setStocks] = useState({})
        useEffect(() => {
            // const stocks = await axios.get(\`https://jsonplaceholder.typicode.com/users/\${StocksId}\`)
            // setStocks(stocks.data)

            // axios.get(\`https://jsonplaceholder.typicode.com/users/\${StocksId}\`)
            // .then((data) => {
            //     console.log("user data", data)
            //     setStocks(data.data)
            // })
            // .catch((err) => {
            //     console.log(err)
            // })

            fetch(\`https://jsonplaceholder.typicode.com/users/\${StocksId}\`)
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    setStocks(data)
                })
                .catch(err => {
                    console.log(err)
                })

            return () => {
                console.log("unmount user data", stocksData)
            }
        }, [])
        return &lt;UserComponent StocksData={stocksData} /&gt;
    }
    return NewUserComponent;
}
export default FuncrionalHoc;

// functional-user-component.js
import React,{} from 'react';
const UserFunctionalComponent = (props) => {
    return (
        &lt;&gt;
            { JSON.stringify(props.StocksData) }
        &lt;/&gt;
    )
}
export default  UserFunctionalComponent


//use-functional-hoc.js
import React,{} from 'react';
import UserFunctionalComponent from './functional-user-component';
import FuncrionalHoc from './f-hoc';

export default  FuncrionalHoc(UserFunctionalComponent, 2)`
        },
        {
          text1: `<b>When to Use HOCs?</b>
You should use HOCs when you need to:
<b>Share reusable logic</b>: For example, logic related to authentication, permissions, or data fetching can be shared across multiple components.
<b>Enhance a component's behavior</b>: You can use an HOC to enhance a component with new props or lifecycle methods.
<b>Separation of concerns</b>: If you want to keep the core functionality of a component separate from concerns like data fetching, authentication, etc.

<b>Why Use HOCs?</b>
<b>Code Reusability</b>: HOCs help in reusing common code across multiple components, which reduces redundancy and improves maintainability.
<b>Component Composition</b>: HOCs allow you to combine different behaviors, creating a composable architecture.
<b>Clean and Organized Code</b>: HOCs make it easier to organize the logic for things like authentication, permissions, or data fetching in a clean, reusable manner.
          
          We have created a simple React Componenet called as the TextComponent and when the mouse is hovered upon the TextComponent its background color changes to green.--Ex : 1`,
          code1: `//---------- Ex : 1---------
          // Higher Order Component that Contians the logic
// to detect the hover.
function withHover(WrappedComponent) {
  return function (props) {
    const [isHovered, setHovered] = useState(false);

    function handleMouseEnter() {
      setHovered(true);
    }

    function handleMouseLeave() {
      setHovered(false);
    }

    return (
      &lt;div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}&gt;
        &lt;WrappedComponent {...props} isHovered={isHovered} /&gt;
      &lt;/div&gt;
    );
  };
}

// Updated Text Component without the Hover Logic
const TextComponent = ({ text, isHovered }) =&gt; {
  return (
    &lt;&gt;
      &lt;p style={{ backgroundColor: isHovered ? &quot;blue&quot; : &quot;white&quot; }}&gt;{text}&lt;/p&gt;
    &lt;/&gt;
  );
};

// Updated Input Component without the Hover Logic
const InputComponent = ({ type, isHovered }) =&gt; {
  return (
    &lt;input
      type={type}
      style={{ backgroundColor: isHovered ? &quot;blue&quot; : &quot;white&quot; }}
    /&gt;
  );
};

// Creating components that contain hover logic using
// Higher Order Component.
const TextComponentWithHover = withHover(TextComponent);
const InputComponentWithHover = withHover(InputComponent);

// Using the Components in our App
const App = () =&gt; {
  return (
    &lt;div className=&quot;App&quot;&gt;
      &lt;TextComponentWithHover
        text=&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.&quot;
      /&gt;

      &lt;InputComponentWithHover type=&quot;text&quot; /&gt;
    &lt;/div&gt;
  );
};

export default App;




//------------ Ex : 2 ------------
//--------- Fetch API search input --------
import React, { useState, useEffect, useRef, useCallback } from &#39;react&#39;;

// Custom hook to debounce search input
const useDebounce = (value, delay) =&gt; {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() =&gt; {
    const handler = setTimeout(() =&gt; {
      setDebouncedValue(value);
    }, delay);

    return () =&gt; clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

const withAuth = (WrappedComponent, httpComp) =&gt; {
  return function (props) {
    const [apiData, setApiData] = useState([]);
    const prevSearchRef = useRef(); // Track previous search input value
    const debouncedSearchInput = useDebounce(props.searchInput, 300); // Debounced search input

    const callApi = useCallback(async () =&gt; {
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
    }, [debouncedSearchInput, httpComp]);

    useEffect(() =&gt; {
      if (debouncedSearchInput !== prevSearchRef.current) {
        // Only call the API if the search input has actually changed
        callApi();
        prevSearchRef.current = debouncedSearchInput; // Update the previous search value
      }
    }, [debouncedSearchInput, callApi]);

    return &lt;WrappedComponent {...props} apiData={apiData} /&gt;;
  };
};

// Sample API fetch function
const httpComp = async () =&gt; {
  const apiRes = await fetch(&#39;https://jsonplaceholder.typicode.com/posts&#39;);
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
        },
        {
          text1: ``,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "Do We Really Need HOCs in React Functional Components?",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "Render Props",
      note: [
        {
          text1: `<b>Render Props</b>
          A render prop is where a component's prop is assigned a function and this is called in the render method of the component. Calling the function can return a React element or component to render.

          Render Props is a pattern in React for sharing code between components using a prop that is a function. This function returns a React element, which allows you to dynamically render content based on the state or behavior provided by the component using the render prop.

Render props are a technique for sharing code between React components using a prop whose value is a function. A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

          Render Props is considered to be an alternative pattern to HoC. The premise of a Render Prop is similar though in that it also creates a parent wrapper that has the reusable state/functions - but it doesn't do this as a wrapper to our component:

          <b>What do render props solve?</b>
=> Reuse code across components when using ES6 classes.
=> The lowest level of indirection - it's clear which component is called and the state is isolated.
=> No naming collision issues for props, state and class methods.
=> No need to deal with boiler code and hoisting static methods.
=> Minor problems:

=> Caution using shouldComponentUpdate as the render prop might close over data it is unaware of.
=> There could also be minor memory issues when defining a closure for every render. But be sure to measure first before making performance changes as it might not be an issue for your app.
=> Another small annoyance is the render props callback is not so neat in JSX as it needs to be wrapped in an expression. Rendering the result of an HOC does look cleaner.

<b>How Render Props Work</b>
The idea is to pass a function as a prop to a component, which the component will call to render its output. Here's a simple breakdown:
    <b>Parent Component</b>: This component holds state or logic and passes a function to its child as a prop.
    <b>Child Component</b>: This component uses the function prop to render whatever it needs based on the parent's state or logic.

    <b>Breakdown of the Example</b>
    <b>MouseTracker Component</b>: This component tracks the mouse position. It has its own state to keep track of the mouse coordinates and updates it whenever the mouse moves.
    <b>Render Prop</b>: The <u>MouseTracker</u> accepts a <u>render</u> prop, which is a function that takes the current mouse position as an argument and returns React elements. This allows the parent component to determine how to display the mouse position.
    <b>App Component</b>: This component uses <u>MouseTracker</u> and provides a function to render the mouse position. It's decoupled from the tracking logic, allowing for greater flexibility.

<b>Benefits of Render Props</b>
    <b>Reusability</b>: You can easily reuse the <u>MouseTracker</u> component in different parts of your application with different render functions.
    <b>Separation of Concerns</b>: Logic for tracking the mouse position is separate from the presentation logic.
    Flexibility</b>: The child component can render whatever it needs based on the data it receives.

<b>Considerations</b>
    <b>Naming</b>: When using render props, it's common to name the prop something like <u>render, children</u>, or a more descriptive name that indicates its purpose.
    <b>Performance</b>: Be mindful of performance, especially when the render function is re-created on every render. This can cause unnecessary re-renders of the child component.

    <u>They don't allow you to use their data outside of the <b>return</b> statement</u>. With the example above, you can't use the <u>x</u> and <u>y</u> values in any state variables, <u>useEffect</u> hooks, or any other functions within your component, because it's only accessible within the <u>return</u> statement.
          `,
          code1: `import React, { useState } from 'react';

// This is the component that uses a render prop
const MouseTracker = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    &lt;div style={{ height: &#39;100vh&#39; }} onMouseMove={handleMouseMove}&gt;
      {render(mousePosition)}
    &lt;/div&gt;
  );
};

// This is a component that utilizes MouseTracker with a render prop
const App = () => {
  return (
    &lt;MouseTracker
      render={({ x, y }) =&gt; (
        &lt;h1&gt;
          Mouse position: {x}, {y}
        &lt;/h1&gt;
      )}
    /&gt;
  );
};

export default App;

//---------------- Ex : 2 -----------------
import OnClick from &#39;./OnClick&#39;;
import OnHover from &#39;./OnHover&#39;;
import Counter from &#39;./Counter&#39;;
const AppHocTextHighlight = () =&gt; {

  return (
    &lt;&gt;
      &lt;Counter render={(count, incrementCount) =&gt; &lt;OnClick count={count} incrementCount={incrementCount}/&gt;}/&gt;

      &lt;Counter render={(count, incrementCount) =&gt; &lt;OnHover count={count} incrementCount={incrementCount}/&gt;}/&gt;
    &lt;/&gt;
  );

}

export default AppHocTextHighlight


//----------- Counter.js -------
import { useState } from &#39;react&#39;;

function Counter({ render }) {
    const [count, setCount] = useState(0)
    const incrementCount = () =&gt; {
        setCount(prev =&gt; prev + 1)
    }
    return (
        &lt;div&gt;
            {render(count, incrementCount)}
        &lt;/div&gt;
    )
}
export default Counter

// ------------- OnClick.js ------
const OnClick = ({ count, incrementCount }) =&gt; {
    return (
      &lt;&gt;
          &lt;button onClick={() =&gt; incrementCount()}&gt; click {count}&lt;/button&gt;
      &lt;/&gt;
    );
  };

  export default OnClick


//------------- OnHover.js -------
const OnHover = ({ count, incrementCount }) =&gt; {
    return (
      &lt;&gt;
        &lt;button onMouseEnter={() =&gt; incrementCount()}&gt; On Hover {count}&lt;/button&gt;
      &lt;/&gt;
    );
  };
export default OnHover 
`
        },
        {
          text1: `<b>Hooks insted render props and HOC</b>`,
          code1: `import React, { createContext, useContext } from 'react';

// Create a ThemeContext
const ThemeContext = createContext();

// Custom hook to get custom properties
const useCustomProps = () => {
  // Example of returning some custom props
  return {
    someProp: 'Hello, World!',
    anotherProp: 'This is another property.',
  };
};

// Custom hook to combine custom props and theme
const useConfig = () => {
  const customProps = useCustomProps();
  const theme = useContext(ThemeContext);

  return [customProps, theme];
};

// ThemeProvider to provide theme context
const ThemeProvider = ({ children }) => {
  const theme = {
    background: 'lightblue',
    color: 'darkblue',
  };

  return (
    &lt;ThemeContext.Provider value={theme}&gt;
      {children}
    &lt;/ThemeContext.Provider&gt;
  );
};

// Main component that uses the custom hook and context
const Component = () => {
  const [props, theme] = useConfig();

  // Check if theme is available
  if (!theme) {
    return &lt;div&gt;Loading theme...&lt;/div&gt;; // Fallback UI
  }

  const { someProp, anotherProp } = props;

  return (
    &lt;div style={{ background: theme.background, color: theme.color, padding: &#39;20px&#39; }}&gt;
      &lt;p&gt;{someProp}&lt;/p&gt;
      &lt;p&gt;{anotherProp}&lt;/p&gt;
    &lt;/div&gt;
  );
};

// App component
const App = () => {
  return (
    &lt;ThemeProvider&gt;
      &lt;Component /&gt;
    &lt;/ThemeProvider&gt;
  );
};

export default App;
`
        },
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "Compound Components",
      note: [
        {
          text1: ``,
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

          In ReactJS, <b>lifting state up</b> is a fundamental concept that plays an important role in managing the state efficiently across different components. When building React applications, it is common for multiple components to need access to the same piece of data or state.

In such cases, instead of duplicating the state across multiple components, React allows us to “lift” the state up to a common ancestor.

<b>What Does Lifting State Up Mean in React?</b>
In React, lifting state up refers to the technique of moving a shared state to a common ancestor of the components that need to access or modify it. Instead of maintaining separate state values in each component, the state is kept in the parent component. This parent component then passes the state and any necessary functions as props to its child components.
                     A
                    / |
                    B   C`,
          code1: `//ParentComponent.js
          import React, { useState } from 'react';
import CounterA from './CounterA';
import CounterB from './CounterB';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    &lt;div&gt;
      &lt;h1&gt;Shared Count: {count}&lt;/h1&gt;
      &lt;CounterA count={count} increment={increment} /&gt;
      &lt;CounterB count={count} decrement={decrement} /&gt;
    &lt;/div&gt;
  );
};

export default ParentComponent;

//CounterA.js
import React from 'react';

const CounterA = ({ count, increment }) => {
  return (
    &lt;div&gt;
      &lt;h2&gt;Counter A&lt;/h2&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={increment}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  );
};
export default CounterA;


//CounterB.js
import React from 'react';

const CounterB = ({ count, decrement }) => {
  return (
    &lt;div&gt;
      &lt;h2&gt;Counter B&lt;/h2&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={decrement}&gt;Decrement&lt;/button&gt;
    &lt;/div&gt;
  );
};
export default CounterB;
`
        }
      ],
    },
    {
      id: 27,
      title: "&lt;Fragment&gt; (&lt;&gt;...&lt;/&gt;)",
      note: [
        {
          text1: `&lt;Fragment&gt;, often used via &lt;&gt;...&lt;/&gt; syntax, lets you group elements without a wrapper node.
          
          <b> &lt;Fragment&gt; </b> 
Wrap elements in &lt;Fragment&gt; to group them together in situations where you need a single element. Grouping elements in Fragment has no effect on the resulting DOM; it is the same as if the elements were not grouped. The empty JSX tag <></> is shorthand for &lt;Fragment&gt; &lt;/Fragment&gt; in most cases.

<b>Props</b> 
optional key: Fragments declared with the explicit &lt;Fragment&gt; syntax may have keys.

<b> Warnings </b> 
If you want to pass key to a Fragment, you can't use the &lt;&gt;...&lt;/&gt; syntax. You have to explicitly import Fragment from 'react' and render &lt;Fragment key={yourKey}&gt;...&lt;/Fragment&gt;.

React does not reset state when you go from rendering &lt;&gt;&lt;Child /&gt;&lt;/&gt; to [&lt;Child /&gt;]  or back, or when you go from rendering &lt;&gt;&lt;Child /&gt;&lt;/&gt; to &lt;Child /&gt; and back. This only works a single level deep: for example, going from &lt;&gt;&lt;&gt;&lt;Child /&gt;&lt;/&gt;&lt;/&gt; to &lt;Child /&gt; resets the state. See the precise semantics here.

<b>Returning multiple elements </b>
Use Fragment, or the equivalent &lt;&gt;...&lt;/&gt; syntax, to group multiple elements together. You can use it to put multiple elements in any place where a single element can go. For example, a component can only return one element, but by using a Fragment you can group multiple elements together and then return them as a group:

Fragments are useful because grouping elements with a Fragment has no effect on layout or styles, unlike if you wrapped the elements in another container like a DOM element. If you inspect this example with the browser tools, you'll see that all &lt;h1&gt; and &lt;article&gt; DOM nodes appear as siblings without wrappers around them:

In React, fragments are a way to group multiple elements without adding extra nodes to the DOM. This can be useful for returning multiple elements from a component without wrapping them in an unnecessary <b>&lt;div&gt;</b> or other HTML element.
Why Use Fragments?

    <b>Avoid Unnecessary Markup</b>: Fragments help keep the DOM clean by preventing extra elements that don't serve any purpose.
    <b>Grouping Elements</b>: They allow you to group a list of children without adding additional nodes, which can be useful for styling and layout.
    <b>Performance</b>: Reducing the number of unnecessary nodes can slightly improve performance, especially in large applications.

    1. Short Syntax (&lt;&gt; ... &lt;/&gt;)
    2. Using React.Fragment
          `,
          code1: `&lt;&gt;
  &lt;OneChild /&gt;
  &lt;AnotherChild /&gt;
&lt;/&gt;

//----
export default function Blog() {
  return (
    &lt;&gt;
      &lt;Post title=&quot;An update&quot; body=&quot;It&#39;s been a while since I posted...&quot; /&gt;
      &lt;Post title=&quot;My new blog&quot; body=&quot;I am starting a new blog!&quot; /&gt;
    &lt;/&gt;
  )
}

function Post({ title, body }) {
  return (
    &lt;&gt;
      &lt;PostTitle title={title} /&gt;
      &lt;PostBody body={body} /&gt;
    &lt;/&gt;
  );
}

function PostTitle({ title }) {
  return &lt;h1&gt;{title}&lt;/h1&gt;
}

function PostBody({ body }) {
  return (
    &lt;article&gt;
      &lt;p&gt;{body}&lt;/p&gt;
    &lt;/article&gt;
  );
}


//-----------------
// Assigning multiple elements to a variable 
// Like any other element, you can assign Fragment elements to variables, pass them as props, and so on:

export default function CloseDialog() {
  const buttons = (
    &lt;&gt;
      &lt;OKButton /&gt;
      &lt;CancelButton /&gt;
    &lt;/&gt;
  );

  return (
    &lt;AlertDialog buttons={buttons}&gt;
      Are you sure you want to leave this page?
    &lt;/AlertDialog&gt;
  );
}

function OKButton() {
  return (
    &lt;&gt;
      &lt;button&gt; ok &lt;/button&gt;
    &lt;/&gt;
  );
}

function CancelButton() {
  return (
    &lt;&gt;
      &lt;button&gt; Cancel &lt;/button&gt;
    &lt;/&gt;
  );
}

function AlertDialog({ buttons, children }) {
  return (
    &lt;&gt;
      {children}
      {buttons}
    &lt;/&gt;
  );
}


//---------------
// Grouping elements with text 
// You can use "Fragment" to group text together with components:

function DateRangePicker({ start, end }) {
  return (
    &lt;&gt;
      From
      &lt;DatePicker date={start} /&gt;
      to
      &lt;DatePicker date={end} /&gt;
    &lt;/&gt;
  );
}
`
        },
        {
          text1: `<b>Rendering a list of Fragments </b>
Here's a situation where you need to write <b>Fragment</b> explicitly instead of using the &lt;&gt;&lt;/&gt; syntax. When you <u>render multiple elements in a loop (filter, map)</u>, you need to assign a <b>key</b> to each element. If the elements within the loop are Fragments, you need to use the normal JSX element syntax in order to provide the <b>key</b> attribute:`,
          code1: `function Blog() {
  return posts.map(post =>
    &lt;Fragment key={post.id}&gt;
      &lt;PostTitle title={post.title} /&gt;
      &lt;PostBody body={post.body} /&gt;
    &lt;/Fragment&gt;
  );
}
  
//--------
// You can inspect the DOM to verify that there are no wrapper elements around the Fragment children:

import { Fragment } from 'react';

const posts = [
  { id: 1, title: 'An update', body: "It's been a while since I posted..." },
  { id: 2, title: 'My new blog', body: 'I am starting a new blog!' }
];

export default function Blog() {
  return posts.map(post =>
    &lt;Fragment key={post.id}&gt;
      &lt;PostTitle title={post.title} /&gt;
      &lt;PostBody body={post.body} /&gt;
    &lt;/Fragment&gt;
  );
}

function PostTitle({ title }) {
  return &lt;h1&gt;{title}&lt;/h1&gt;
}

function PostBody({ body }) {
  return (
    &lt;article&gt;
      &lt;p&gt;{body}&lt;/p&gt;
    &lt;/article&gt;
  );
}`
        }
      ],
    },
    {
      id: 27,
      title: "&lt;Profiler&gt;",
      note: [
        {
          text1: `&lt;Profiler&gt;
&lt;Profiler&gt; lets you measure rendering performance of a React tree programmatically.
<span style="color:red"> &lt;Profiler id=&quot;App&quot; onRender={onRender}&gt;
  &lt;App /&gt;
&lt;/Profiler&gt;</span>
<b>Props</b> 
<u>id</u>: A string identifying the part of the UI you are measuring.
<u>onRender</u>: An onRender callback that React calls every time components within the profiled tree update. It receives information about what was rendered and how much time it took.
<b>Caveats </b>
Profiling adds some additional overhead, so <b>it is disabled in the production build by default</b>. To opt into production profiling, you need to enable a <u>special production build with profiling enabled</u>.

<b>onRender callback</b> 
React will call your onRender callback with information about what was rendered.
<span style="color:red">
function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
  // Aggregate or log render timings...
}</span>

<b>Parameters </b>
<u>id</u>: The string id prop of the &lt;Profiler&gt; tree that has just committed. This lets you identify which part of the tree was committed if you are using multiple profilers.
<u>phase</u>: <u>mount</u>, <u>update</u> or <u>nested-update</u>. This lets you know whether the tree has just been mounted for the first time or re-rendered due to a change in props, state, or Hooks.
<u>actualDuration</u>: The number of milliseconds spent rendering the &lt;Profiler&gt; and its descendants for the current update. This indicates how well the subtree makes use of memoization <u>(e.g. memo and useMemo)</u>. Ideally this value should decrease significantly after the initial mount as many of the descendants will only need to re-render if their specific props change.
<u>baseDuration</u>: The number of milliseconds estimating how much time it would take to re-render the entire &lt;Profiler&gt; subtree without any optimizations. It is calculated by summing up the most recent render durations of each component in the tree. This value estimates a worst-case cost of rendering (e.g. the initial mount or a tree with no memoization). Compare <u>actualDuration</u> against it to see if memoization is working.
<u>startTime</u>: A numeric timestamp for when React began rendering the current update.
<u>commitTime</u>: A numeric timestamp for when React committed the current update. This value is shared between all profilers in a commit, enabling them to be grouped if desirable.

<b>Note</b>
&lt;Profiler&gt;lets you gather measurements programmatically. If you're looking for an interactive profiler, try the Profiler tab in <b>React Developer Tools</b>. It exposes similar functionality as a browser extension.
`,
          code1: `//Wrap the &lt;Profiler&gt; component around a React tree to measure its rendering performance.

&lt;App&gt;
  &lt;Profiler id=&quot;Sidebar&quot; onRender={onRender}&gt;
    &lt;Sidebar /&gt;
  &lt;/Profiler&gt;
  &lt;PageContent /&gt;
&lt;/App&gt;

// It requires two props: an "id" (string) and an "onRender" callback (function) which React calls any time a component within the tree “commits” an update.
`
        },
        {
          text1: `&lt;Profiler&gt; is a component in React that helps you measure the performance of your components. It provides an API for collecting timing information about the rendering of components, which can be useful for optimizing performance and diagnosing performance issues in your application.

<b>Key Features of &lt;Profiler&gt;</b>
   <b> Performance Measurement</b>: The &lt;Profiler&gt; component measures how often a component renders and how long these renderings take.
    <b>Custom Callback</b>: It allows you to specify a callback function that gets called after the component renders, providing you with the timing data.
    <b>Granular Insights</b>: You can use &lt;Profiler&gt; to gain insights into the performance of specific components rather than the entire application.`,
          code1: `import React, { Profiler } from 'react';

const MyComponent = () => {
    return &lt;div&gt;My Component&lt;/div&gt;;
};

const onRenderCallback = (id, phase, actualDuration) => {
    console.log(\`Component: \${id}, Phase: \${phase}, Render Time: \${actualDuration}ms\`);
};

const App = () => {
    return (
      &lt;Profiler id=&quot;MyComponent&quot; onRender={onRenderCallback}&gt;
      &lt;MyComponent /&gt;
  &lt;/Profiler&gt;
    );
};

export default App;
`
        },
        {
          text1: ``,
          code1: ``
        },
      ],
    },
    {
      id: 27,
      title: "&lt;StrictMode&gt;",
      note: [
        {
          text1: `StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.

          StrictMode is a development mode feature in React that helps identify common problems in your application and supports you in fixing them. It performs additional checks and warnings to aid developers in writing better code and finding potential issues.
          &lt;StrictMode&gt; lets you find common bugs in your components early during development.

          Strict Mode enables extra development-only checks for the entire component tree inside the &lt;StrictMode&gt; component. These checks help you find common bugs in your components early in the development process.
          We recommend wrapping your entire app in Strict Mode, especially for newly created apps. If you use a framework that calls createRoot for you, check its documentation for how to enable Strict Mode.

Although the Strict Mode checks <b>only run in development</b>, they help you find bugs that already exist in your code but can be tricky to reliably reproduce in production. Strict Mode lets you fix bugs before your users report them.

To enable Strict Mode for your entire app, wrap your root component with <StrictMode> when you render it:
          `,
          code1: `import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  &lt;StrictMode&gt;
    &lt;App /&gt;
  &lt;/StrictMode&gt;
);`
        },
        {
          text1: `<b>Enabling Strict Mode for a part of the app </b>
You can also enable Strict Mode for any part of your application:
In below example, Strict Mode checks will not run against the Header and Footer components. However, they will run on Sidebar and Content, as well as all of the components inside them, no matter how deep.
`,
          code1: `import { StrictMode } from 'react';

function App() {
  return (
    &lt;&gt;
      &lt;Header /&gt;
      &lt;StrictMode&gt;
        &lt;main&gt;
          &lt;Sidebar /&gt;
          &lt;Content /&gt;
        &lt;/main&gt;
      &lt;/StrictMode&gt;
      &lt;Footer /&gt;
    &lt;/&gt;
  );
}`
        },
        {
          text1: `<b>Fixing bugs found by double rendering in development</b>
React assumes that every component you write is a pure function. This means that React components you write must always return the same JSX given the same inputs (<u>props, state</u>, and <u>context</u>).

Components breaking this rule behave unpredictably and cause bugs. To help you find accidentally impure code, Strict Mode calls some of your functions (only the ones that should be pure) <b>twice in development</b>. This includes:

=> Your component function body (only top-level logic, so this doesn't include code inside event handlers)
=> Functions that you pass to <b>useState, set functions, useMemo</b>, or <b>useReducer</b>
=> Some class component methods like <b>constructor, render, shouldComponentUpdate</b> (see the whole list)
If a function is pure, running it twice does not change its behavior because a pure function produces the same result every time. However, if a function is impure (for example, it mutates the data it receives), running it twice tends to be noticeable (that's what makes it impure!) This helps you spot and fix the bug early.`,
          code1: `//Here is an example to illustrate how double rendering in Strict Mode helps you find bugs early.
// This "StoryTray" component takes an array of "stories" and adds one last "Create Story" item at the end:

//StrictModeCheck.js
import { useState } from 'react';
import StoryTray from './StoryTray.js';

let initialStories = [
  {id: 0, label: "Ankit's Story" },
  {id: 1, label: "Taylor's Story" },
];

export default function StrictModeCheck() {
  let [stories, setStories] = useState(initialStories)
  return (
    &lt;div
      style={{
        width: &#39;100%&#39;,
        height: &#39;100%&#39;,
        textAlign: &#39;center&#39;,
      }}
    &gt;
      &lt;StoryTray stories={stories} /&gt;
    &lt;/div&gt;
  );
}


//StoryTray.js
export default function StoryTray({ stories }) {
    const items = stories;
    items.push({ id: 'create', label: 'Create Story' });
    return (
        &lt;ul&gt;
        {items.map(story =&gt; (
          &lt;li key={story.id}&gt;
            {story.label}
          &lt;/li&gt;
        ))}
      &lt;/ul&gt;
    );
  }
  
// Above code gives
// react-dom.development.js:86 Warning: Encountered two children with the same key, \`create\`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.

//App.js
import { useState } from 'react';
import StoryTray from './StoryTray.js';

let initialStories = [
  {id: 0, label: "Ankit's Story" },
  {id: 1, label: "Taylor's Story" },
];

export default function App() {
  let [stories, setStories] = useState(initialStories)
  return (
    &lt;div
      style={{
        width: &#39;100%&#39;,
        height: &#39;100%&#39;,
        textAlign: &#39;center&#39;,
      }}
    &gt;
      &lt;StoryTray stories={stories} /&gt;
    &lt;/div&gt;
  );
}

//StoryTray.js
import { useState } from 'react';

export default function StoryTray({ stories }) {
  const [isHover, setIsHover] = useState(false);
  const items = stories;
  items.push({ id: 'create', label: 'Create Story' });
  return (
    &lt;ul
      onPointerEnter={() =&gt; setIsHover(true)}
      onPointerLeave={() =&gt; setIsHover(false)}
      style={{
        backgroundColor: isHover ? &#39;#ddd&#39; : &#39;#fff&#39;
      }}
    &gt;
      {items.map(story =&gt; (
        &lt;li key={story.id}&gt;
          {story.label}
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

// Notice how every time you hover over the "StoryTray" component, “Create Story” gets added to the list again. The intention of the code was to add it once at the end. But "StoryTray" directly modifies the "stories" array from the props. Every time "StoryTray" renders, it adds “Create Story” again at the end of the same array. In other words, "StoryTray" is not a pure function—running it multiple times produces different results.

export default function StoryTray({ stories }) {
  const items = stories.slice(); // Clone the array
  // ✅ Good: Pushing into a new array
  items.push({ id: 'create', label: 'Create Story' });
`
        },
        {
          text1: `<b>Fixing bugs found by re-running Effects in development </b>
Strict Mode can also help find bugs in Effects.

Every Effect has some setup code and may have some cleanup code. Normally, React calls setup when the component mounts (is added to the screen) and calls cleanup when the component unmounts (is removed from the screen). React then calls cleanup and setup again if its dependencies changed since the last render.

When Strict Mode is on, React will also run <b>one extra setup+cleanup cycle in development for every Effect.</b> This may feel surprising, but it helps reveal subtle bugs that are hard to catch manually.

<b>Here is an example to illustrate how re-running Effects in Strict Mode helps you find bugs early.</b>

To make the issue more obvious, let's implement a feature. In the example below, roomId is not hardcoded. Instead, the user can select the roomId that they want to connect to from a dropdown. Click “Open chat” and then select different chat rooms one by one. Keep track of the number of active connections in the console:

You'll notice that the number of open connections always keeps growing. In a real app, this would cause performance and network problems. The issue is that your Effect is missing a cleanup function:
<span style="color:red">
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
</span>
Now that your Effect “cleans up” after itself and destroys the outdated connections, the leak is solved. However, notice that the problem did not become visible until you've added more features (the select box).

With Strict Mode, you immediately see that there is a problem (the number of active connections jumps to 2). Strict Mode runs an extra setup+cleanup cycle for every Effect. This Effect has no cleanup logic, so it creates an extra connection but doesn't destroy it. This is a hint that you're missing a cleanup function.

Strict Mode lets you notice such mistakes early in the process. When you fix your Effect by adding a cleanup function in Strict Mode, you also fix many possible future production bugs like the select box from before:
`,
          code1: `// ChatRoom.js
          import { useState, useEffect } from 'react';
import { createConnection } from './StoryTray';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  return (
    &lt;&gt;
      &lt;label&gt;
        Choose the chat room:{&#39; &#39;}
        &lt;select
          value={roomId}
          onChange={e =&gt; setRoomId(e.target.value)}
        &gt;
          &lt;option value=&quot;general&quot;&gt;general&lt;/option&gt;
          &lt;option value=&quot;travel&quot;&gt;travel&lt;/option&gt;
          &lt;option value=&quot;music&quot;&gt;music&lt;/option&gt;
        &lt;/select&gt;
      &lt;/label&gt;
      &lt;button onClick={() =&gt; setShow(!show)}&gt;
        {show ? &#39;Close chat&#39; : &#39;Open chat&#39;}
      &lt;/button&gt;
      {show &amp;&amp; &lt;hr /&gt;}
      {show &amp;&amp; &lt;ChatRoom roomId={roomId} /&gt;}
    &lt;/&gt;
  );
}

//---
// createConnection.js
let connections = 0;

export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
      connections++;
      console.log('Active connections: ' + connections);
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
      connections--;
      console.log('Active connections: ' + connections);
    }
  };
}


In the original example, the bug wasn't obvious. Now let's wrap the original (buggy) code in &lt;StrictMode&gt;:
// Ex : 2
//ChatRoom.js
import { useState, useEffect } from 'react';
import { createConnection } from './StoryTray.js';

const serverUrl = 'https://localhost:3031';

function ChatRoom({ roomId }) {
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId]);

    return <h1>Welcome to the {roomId} room!</h1>;
}

export default function App() {
    const [roomId, setRoomId] = useState('general');
    const [show, setShow] = useState(false);
    return (
        &lt;&gt;
            &lt;label&gt;
                Choose the chat room:{&#39; &#39;}
                &lt;select
                    value={roomId}
                    onChange={e =&gt; setRoomId(e.target.value)}
                &gt;
                    &lt;option value=&quot;general&quot;&gt;general&lt;/option&gt;
                    &lt;option value=&quot;travel&quot;&gt;travel&lt;/option&gt;
                    &lt;option value=&quot;music&quot;&gt;music&lt;/option&gt;
                &lt;/select&gt;
            &lt;/label&gt;
            &lt;button onClick={() =&gt; setShow(!show)}&gt;
                {show ? &#39;Close chat&#39; : &#39;Open chat&#39;}
            &lt;/button&gt;
            {show &amp;&amp; &lt;hr /&gt;}
            {show &amp;&amp; &lt;ChatRoom roomId={roomId} /&gt;}
        &lt;/&gt;
    );
}

//-----
//createConnection.js
let connections = 0;

export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
      connections++;
      console.log('Active connections: ' + connections);
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
      connections--;
      console.log('Active connections: ' + connections);
    }
  };
}

`
        }
      ],
    },
    {
      id: 27,
      title: "&lt;Suspense&gt;",
      note: [
        {
          text1: `&lt;Suspense&gt;
&lt;Suspense&gt; lets you display a fallback until its children have finished loading.
<span style="color:red">&lt;Suspense fallback={&lt;Loading /&gt;}&gt;
  &lt;SomeComponent /&gt;
&lt;/Suspense&gt;</span>

React Suspense is a major addition to the React ecosystem. It provides a simpler, integrated method of managing asynchronous actions and loading states.

<b> Props </b>
<b>children</b>: The actual UI you intend to render. If <u>children</u> suspends while rendering, the Suspense boundary will switch to rendering <u>fallback</u>.
<b>fallback</b>: An alternate UI to render in place of the actual UI if it has not finished loading. Any valid React node is accepted, though in practice, a fallback is a lightweight placeholder view, such as a loading spinner or skeleton. Suspense will automatically switch to <u>fallback</u> when <u>children</u> suspends, and back to <u>children</u> when the data is ready. If <u>fallback</u> suspends while rendering, it will activate the closest parent Suspense boundary.

<b>Caveats </b>
=> React does not preserve any state for renders that got suspended before they were able to mount for the first time. When the component has loaded, React will retry rendering the suspended tree from scratch.
=> If Suspense was displaying content for the tree, but then it suspended again, the fallback will be shown again unless the update causing it was caused by <a href="https://react.dev/reference/react/startTransition" target="_blank">startTransition</a> or <a href="https://react.dev/reference/react/useDeferredValue" target="_blank">useDeferredValue</a>.
=> If React needs to hide the already visible content because it suspended again, it will clean up <a href="https://react.dev/reference/react/useLayoutEffect" target="_blank">layout Effects</a> in the content tree. When the content is ready to be shown again, React will fire the layout Effects again. This ensures that Effects measuring the DOM layout don't try to do this while the content is hidden.
=> React includes under-the-hood optimizations like Streaming Server Rendering and Selective Hydration that are integrated with Suspense. Read an architectural overview and watch a technical talk to learn more.

React will display your <u>loading fallback</u> until all the code and data needed by the <u>children</u> has been loaded.

<b>Note</b>
<b>Only Suspense-enabled data sources will activate the Suspense component</b>. They include:

=> Data fetching with Suspense-enabled frameworks like Relay and Next.js
=> Lazy-loading component code with <a href="https://react.dev/reference/react/lazy" target="_blank">lazy</a>
=> Reading the value of a Promise with <a href="https://react.dev/reference/react/use" target="_blank">use</a>

Suspense does not detect when data is fetched inside an Effect or event handler.

The exact way you would load data in the Albums component above depends on your framework. If you use a Suspense-enabled framework, you'll find the details in its data fetching documentation.

Suspense-enabled data fetching without the use of an opinionated framework is not yet supported. The requirements for implementing a Suspense-enabled data source are unstable and undocumented. An official API for integrating data sources with Suspense will be released in a future version of React.
`,
          code1: `import React, { Suspense, useState, useEffect } from 'react';

// Simulate a data fetching function
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 2000); // Simulate a 2-second fetch
    });
};

// Create a resource that suspends
const createResource = () => {
    let status = 'pending';
    let result;

    const promise = fetchData()
        .then(res => {
            status = 'success';
            result = res;
        })
        .catch(err => {
            status = 'error';
            result = err;
        });

    return {
        read() {
            if (status === 'pending') {
                throw promise; // This will suspend the component
            } else if (status === 'error') {
                throw result;
            } else {
                return result;
            }
        }
    };
};

// Create a resource instance
const resource = createResource();

const DataFetchingComponent = () => {
    const data = resource.read(); // This will suspend if data is not ready
    return &lt;div&gt;{data}&lt;/div&gt;;
};

// Loading component
const Loading = () => &lt;div&gt;Loading data...&lt;/div&gt;;

const App = () => {
    return (
        &lt;div&gt;
            &lt;h1&gt;My App&lt;/h1&gt;
            &lt;Suspense fallback={&lt;Loading /&gt;}&gt;
                &lt;DataFetchingComponent /&gt;
            &lt;/Suspense&gt;
        &lt;/div&gt;
    );
};

export default App;

//--------------
// Ex : 2
//API Call
import React, { useState, useEffect, Suspense } from 'react';

// Function to fetch user data
const fetchUserData = () => {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
};

// Custom hook to fetch user data
const useFetchUser = () => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    const resource = createResource(fetchUserData);
    setResource(resource);
  }, []);

  return resource;
};

// Create a resource to handle fetching
const createResource = (fetchFunction) => {
  let status = 'pending';
  let result;
  let error;

  const promise = fetchFunction()
    .then((res) => {
      status = 'success';
      result = res;
    })
    .catch((err) => {
      status = 'error';
      error = err;
    });

  return {
    read() {
      if (status === 'pending') {
        throw promise; // This will trigger Suspense
      } else if (status === 'error') {
        throw error; // Throw the error to be caught in the component
      } else if (status === 'success') {
        return result; // Return the result when successful
      }
    },
  };
};

// User component that reads from the resource
const User = () => {
  const resource = useFetchUser();
  
  // Only read if the resource is available
  if (!resource) {
    return null; // Or a loading message until resource is created
  }

  const user = resource.read(); // This will suspend if the data is not yet available

  return (
    &lt;div&gt;
      &lt;h1&gt;{user.name}&lt;/h1&gt;
      &lt;p&gt;Email: {user.email}&lt;/p&gt;
      &lt;p&gt;Phone: {user.phone}&lt;/p&gt;
    &lt;/div&gt;
  );
};

// Main App component
const App = () => {
  return (
    &lt;Suspense fallback={&lt;div&gt;Loading user data...SSA&lt;/div&gt;}&gt;
      &lt;User /&gt;
    &lt;/Suspense&gt;
  );
};
export default App;

//-------------
// Ex : 3
// Main.js

import React, { Suspense, useState } from 'react';
import Albums from './Albums.js';

export default function ArtistPage() {
const [userId, setUserId] = useState(1)

    return (
        &lt;&gt;
            &lt;input type=&#39;text&#39; value={userId} onChange={(e) =&gt; setUserId(e.target.value)}/&gt;
            &lt;Suspense fallback={&lt;Loading /&gt;}&gt;
                &lt;Albums artistId={userId} /&gt;
            &lt;/Suspense&gt;
        &lt;/&gt;
    );
}

function Loading() {
    return &lt;h2&gt;🌀 Loading...&lt;/h2&gt;;
}


//Albums.js
import React, { useEffect, useState } from 'react';

// Function to fetch albums
const fetchAlbums = (artistId) => {
    return fetch(\`https://jsonplaceholder.typicode.com/albums?userId=\${artistId}\`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
};

// Albums component that fetches and displays albums for the artist
const Albums = ({ artistId }) => {
    const [albums, setAlbums] = useState([]);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        const loadAlbums = async () => {
            setStatus('loading');
            try {
                const data = await fetchAlbums(artistId);
                setAlbums(data);
                setStatus('success');
            } catch (error) {
                setStatus('error');
            }
        };

        loadAlbums();
    }, [artistId]);

    // Handle loading and error states for Suspense
    if (status === 'loading') {
        throw new Promise(() => { }); // Triggers Suspense
    }

    if (status === 'error') {
        throw new Error('Error loading albums.'); // Triggers Suspense
    }

    return (
        &lt;&gt;
            {
                albums.length !== 0 ? (
                    &lt;ul&gt;
                        {albums.map(album =&gt; (
                            &lt;li key={album.id}&gt;{album.title}&lt;/li&gt;
                        ))}
                    &lt;/ul&gt;
                ) : (&lt;p&gt;No Records found&lt;/p&gt;)
            }
        &lt;/&gt;
    );
};

export default Albums;
`
        },
        {
          text1: `<b>Revealing content together at once </b>
          By default, the whole tree inside Suspense is treated as a single unit. For example, even if only one of these components suspends waiting for some data, all of them together will be replaced by the loading indicator:

          Then, after all of them are ready to be displayed, they will all appear together at once.

In the example below, both <b>Biography</b> and <b>Albums</b> fetch some data. However, because they are grouped under a single Suspense boundary, these components always “pop in” together at the same time.
          `,
          code1: `&lt;Suspense fallback={&lt;Loading /&gt;}&gt;
  &lt;Biography /&gt;
  &lt;Panel&gt;
    &lt;Albums /&gt;
  &lt;/Panel&gt;
&lt;/Suspense&gt;

//-----------
// Ex : 1
//Main.js
import ArtistPage from "./ArtistPage"
const Main = () => {
    const artist = { id: 1, nxame: 'Artist Name' }; // Example artist
    return (
        &lt;&gt;
            &lt;ArtistPage artist={artist} /&gt;
        &lt;/&gt;
    )
}
export default Main

//---
//ArtistPage.js
import { Suspense } from 'react';
import Albums from './Albums';
import Biography from './Biography';
import Panel from './Panel';

export default function ArtistPage({ artist }) {
  return (
    &lt;&gt;
      &lt;h1&gt;{artist.name}&lt;/h1&gt;
      &lt;Suspense fallback={&lt;Loading /&gt;}&gt;
        &lt;Biography artistId={artist.id} /&gt;
        &lt;Panel&gt;
          &lt;Albums artistId={artist.id} /&gt;
        &lt;/Panel&gt;
      &lt;/Suspense&gt;
    &lt;/&gt;
  );
}

function Loading() {
  return &lt;h2&gt;🌀 Loading...&lt;/h2&gt;;
}


//----
//biography.js

import React, { useEffect, useState } from 'react';
// Function to fetch biography
const fetchBiography = (artistId) => {
  return fetch(\`https://jsonplaceholder.typicode.com/users/\${artistId}\`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
};

// Biography component
const Biography = ({ artistId }) => {
  const [biography, setBiography] = useState({});
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const loadBiography = async () => {
      setStatus('loading');
      try {
        const data = await fetchBiography(artistId);
        setBiography(data); // Assuming company name is part of the biography
        setStatus('success');
      } catch (error) {
        setStatus('error');
      }
    };

    loadBiography();
  }, [artistId]);

  // Handle loading state
  if (status === 'loading') {
    throw new Promise(() => {}); // Trigger Suspense loading
  }

  if (status === 'error') {
    throw new Error('Error loading biography.'); // Trigger Suspense error
  }

  return &lt;p&gt;{JSON.stringify(biography)}&lt;/p&gt;;
};
export default Biography;

//---
//Panel.js
import React from 'react';

const Panel = ({ children }) => {
  return (
    &lt;div style={{ border: &#39;1px solid #ccc&#39;, padding: &#39;10px&#39;, marginTop: &#39;10px&#39; }}&gt;
      {children}
    &lt;/div&gt;
  );
};

export default Panel;


//---
//fetchAlbums.js
import React, { useEffect, useState } from 'react';

// Function to fetch albums
const fetchAlbums = (artistId) => {
    return fetch(\`https://jsonplaceholder.typicode.com/albums?userId=\${artistId}\`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
};

// Albums component that fetches and displays albums for the artist
const Albums = ({ artistId }) => {
    const [albums, setAlbums] = useState([]);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        const loadAlbums = async () => {
            setStatus('loading');
            try {
                const data = await fetchAlbums(artistId);
                setAlbums(data);
                setStatus('success');
            } catch (error) {
                setStatus('error');
            }
        };

        loadAlbums();
    }, [artistId]);

    // Handle loading and error states for Suspense
    if (status === 'loading') {
        throw new Promise(() => { }); // Triggers Suspense
    }

    if (status === 'error') {
        throw new Error('Error loading albums.'); // Triggers Suspense
    }

    return (
        &lt;&gt;
            {
                albums.length !== 0 ? (
                    &lt;ul&gt;
                        {albums.map(album =&gt; (
                            &lt;li key={album.id}&gt;{album.title}&lt;/li&gt;
                        ))}
                    &lt;/ul&gt;
                ) : (&lt;p&gt;No Records found&lt;/p&gt;)
            }
        &lt;/&gt;
    );
};

export default Albums;


//============
// Components that load data don't have to be direct children of the Suspense boundary. For example, you can move "Biography" and "Albums" into a new "Details" component. This doesn't change the behavior. "Biography" and "Albums" share the same closest parent Suspense boundary, so their reveal is coordinated together.

&lt;Suspense fallback={&lt;Loading /&gt;}&gt;
  &lt;Details artistId={artist.id} /&gt;
&lt;/Suspense&gt;

function Details({ artistId }) {
  return (
    &lt;&gt;
      &lt;Biography artistId={artistId} /&gt;
      &lt;Panel&gt;
        &lt;Albums artistId={artistId} /&gt;
      &lt;/Panel&gt;
    &lt;/&gt;
  );
}
`
        },
        {
          text1: `<b>Revealing nested content as it loads</b>
          When a component suspends, the closest parent Suspense component shows the fallback. This lets you nest multiple Suspense components to create a loading sequence. Each Suspense boundary's fallback will be filled in as the next level of content becomes available. For example, you can give the album list its own fallback:

          With this change, displaying the <b>Biography</b> doesn't need to “wait” for the <b>Albums</b> to load.

The sequence will be:
1) If <b>Biography</b> hasn't loaded yet, <b>BigSpinner</b> is shown in place of the entire content area.
2) Once <b>Biography</b> finishes loading, <b>BigSpinner</b> is replaced by the content.
3) If <b>Albums</b> hasn't loaded yet, <b>AlbumsGlimmer</b> is shown in place of <b>Albums</b> and its <b>parent</b> Panel.
4) Finally, once <b>Albums</b> finishes loading, it replaces <b>AlbumsGlimmer</b>.

Suspense boundaries let you coordinate which parts of your UI should always “pop in” together at the same time, and which parts should progressively reveal more content in a sequence of loading states. You can add, move, or delete Suspense boundaries in any place in the tree without affecting the rest of your app's behavior.

Don't put a Suspense boundary around every component. Suspense boundaries should not be more granular than the loading sequence that you want the user to experience. If you work with a designer, ask them where the loading states should be placed—it's likely that they've already included them in their design wireframes.`,
          code1: `&lt;Suspense fallback={&lt;BigSpinner /&gt;}&gt;
  &lt;Biography /&gt;
  &lt;Suspense fallback={&lt;AlbumsGlimmer /&gt;}&gt;
    &lt;Panel&gt;
      &lt;Albums /&gt;
    &lt;/Panel&gt;
  &lt;/Suspense&gt;
&lt;/Suspense&gt;

//-----------

import { Suspense } from 'react';
import Albums from './Albums.js';
import Biography from './Biography.js';
import Panel from './Panel.js';
import './glimmer-loader.css'

export default function ArtistPage({ artist }) {
    return (
        &lt;&gt;
            &lt;h1&gt;{artist.name}&lt;/h1&gt;
            &lt;Suspense fallback={&lt;BigSpinner /&gt;}&gt;
                &lt;Biography artistId={artist.id} /&gt;
                &lt;Suspense fallback={&lt;AlbumsGlimmer /&gt;}&gt;
                    &lt;Panel&gt;
                        &lt;Albums artistId={artist.id} /&gt;
                    &lt;/Panel&gt;
                &lt;/Suspense&gt;
            &lt;/Suspense&gt;
        &lt;/&gt;
    );
}

function BigSpinner() {
    return &lt;h2&gt;🌀 Loading...&lt;/h2&gt;;
}

function AlbumsGlimmer() {
    return (
        &lt;p class=&quot;shimmer&quot;&gt;&lt;b&gt;Loading&lt;/b&gt;&lt;/p&gt;
    );
}

// loader css
.shimmer {
    color: grey;
    display: inline-block;
    mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/350% 100%;
    animation: shimmer 1.5s infinite;
    font-size: 50px;
    max-width: 200px;
  }
  
  @keyframes shimmer {
    100% {
      mask-position: left
    }
  }
`
        },
        {
          text1: `<b>Showing stale content while fresh content is loading </b>
In this example, the SearchResults component suspends while fetching the search results. Type "a", wait for the results, and then edit it to "ab". The results for "a" will get replaced by the loading fallback.


A common alternative UI pattern is to defer updating the list and to keep showing the previous results until the new results are ready. The useDeferredValue Hook lets you pass a deferred version of the query down:
`,
          code1: `//App.js
          import { Suspense, useState } from 'react';
import SearchResults from './Albums';

export default function App() {
  const [query, setQuery] = useState('');

  return (
    &lt;&gt;
      &lt;label&gt;
        Search albums:
        &lt;input 
          value={query} 
          onChange={e =&gt; setQuery(e.target.value)} 
          placeholder=&quot;Enter album name&quot;
        /&gt;
      &lt;/label&gt;
      &lt;Suspense fallback={&lt;h2&gt;Loading...&lt;/h2&gt;}&gt;
        &lt;SearchResults query={query} /&gt;
      &lt;/Suspense&gt;
    &lt;/&gt;
  );
}

//---
//SearchResults.js
import React, { useEffect, useState } from 'react';

// Function to fetch albums
const fetchAlbums = (query) => {
  return fetch(\`https://jsonplaceholder.typicode.com/albums\`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Filter albums based on query
      return data.filter(album => album.title.toLowerCase().includes(query.toLowerCase()));
    });
};

// SearchResults component
const SearchResults = ({ query }) => {
  const [albums, setAlbums] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const loadAlbums = async () => {
      if (!query) {
        setAlbums([]);
        return;
      }

      setStatus('loading');
      try {
        const data = await fetchAlbums(query);
        setAlbums(data);
        setStatus('success');
      } catch (error) {
        setStatus('error');
      }
    };

    loadAlbums();
  }, [query]);

  // Handle loading state
  if (status === 'loading') {
    throw new Promise(() => {}); // Trigger Suspense loading
  }

  if (status === 'error') {
    throw new Error('Error loading albums.'); // Trigger Suspense error
  }

  return (
    &lt;ul&gt;
      {albums.map(album =&gt; (
        &lt;li key={album.id}&gt;{album.title}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
};

export default SearchResults;

//------------
// The "query" will update immediately, so the input will display the new value. However, the "deferredQuery" will keep its previous value until the data has loaded, so "SearchResults" will show the stale results for a bit.

// To make it more obvious to the user, you can add a visual indication when the stale result list is displayed:

&lt;div style={{
  opacity: query !== deferredQuery ? 0.5 : 1 
}}&gt;
  &lt;SearchResults query={deferredQuery} /&gt;
&lt;/div&gt;

//--------
App.js
import { Suspense, useState, useDeferredValue } from 'react';
import SearchResults from './SearchResults.js';

export default function App() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;
  return (
    &lt;&gt;
      &lt;label&gt;
        Search albums:
        &lt;input value={query} onChange={e =&gt; setQuery(e.target.value)} /&gt;
      &lt;/label&gt;
      &lt;Suspense fallback={&lt;h2&gt;Loading...&lt;/h2&gt;}&gt;
        &lt;div style={{ opacity: isStale ? 0.5 : 1 }}&gt;
          &lt;SearchResults query={deferredQuery} /&gt;
        &lt;/div&gt;
      &lt;/Suspense&gt;
    &lt;/&gt;
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
      id: 17,
      section: `DOM`,
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
                    =>For example, the componentDidUpdate lifecycle method is called after the component has been updated in the DOM.
                    
                    
                    
                    The virtual DOM is an in-memory representation of the real DOM elements. Instead of interacting directly with the real DOM, which can be slow and costly in terms of performance, React creates a virtual representation of the UI components. This virtual representation is a lightweight JavaScript object that mirrors the structure of the real DOM.

Here's a step-by-step process of how the virtual DOM works:
<b>Step 1 </b>– Initial Rendering: when the app starts, the entire UI is represented as a Virtual DOM. React elements are created and rendered into the virtual structure.
<b>Step 2 </b>– State and Props Changes: as the states and props change in the app, React re-renders the affected components in the virtual DOM. These changes do not immediately impact the real DOM.
<b>Step 3 </b>– Comparison Using Diff Algorithm: React then uses a diffing algorithm to compare the current version of the Virtual DOM with the previous version. This process identifies the differences (or "diffs") between the two versions.
<b>Step 4 </b>– Reconciliation Process: based on the differences identified, React determines the most efficient way to update the real DOM. Only the parts of the real DOM that need to be updated are changed, rather than re-rendering the entire UI. This selective updating is quick and performant.
<b>Step 5 </b>– Update to the Real DOM: finally, React applies the necessary changes to the real DOM. This might involve adding, removing, or updating elements based on the differences detected in step 3.`,
          code1: ``
        }
      ],
    },
    {
      id: 48,
      title: "Explain what the Shadow DOM is.",
      note: [
        {
          text1: `The Shadow DOM, or Shadow Document Object Model, is a web standard that provides encapsulation for the styling and structure of a web component. It allows developers to create and use self-contained components with their own scoped styles, preventing style leakage and conflicts with the styles of the rest of the document.

          Shadow DOM is a web standard designed to encapsulate components' structure, style, and behavior, allowing for more modular and reusable code. In this blog, we'll explore the fundamentals of Shadow DOM, its role within the React ecosystem, and how it can be leveraged to enhance component encapsulation and isolation.

          <b>Understanding the Shadow DOM</b>
The Shadow DOM is a crucial concept in web development, particularly when building complex, large-scale applications. It allows developers to attach a hidden, separate DOM to an element, which is referred to as the shadow host. The DOM tree inside this shadow host is called a shadow tree, and it is not directly visible to the outer DOM or affected by its styles and scripts.

One of the key features of the Shadow DOM is its ability to create a shadow boundary. This boundary ensures that the styles defined inside the shadow tree do not leak out and styles from the main document do not interfere with the content inside the shadow tree. This encapsulation makes the Shadow DOM a powerful tool for web component development.

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

                    <b>The benefits of using shadow DOM for encapsulation include</b>:
<b>Style Scoping</b>: Styles defined inside a shadow DOM do not affect anything outside of it, preventing unexpected styling issues.
<b>DOM Isolation</b>: The shadow DOM's content is not affected by changes in the global DOM, reducing the risk of conflicts.
<b>Reusability</b>: Components with encapsulated styles and behavior are easier to share across different parts of an application or even different projects.

<b>Purpose</b>
<u>Virtual DOM</u>: Primarily aimed at improving performance by minimizing the number of DOM manipulations required during updates.
<u>Shadow DOM</u>: Focuses on encapsulating the style and behavior of web components, providing a scoped environment for CSS and JavaScript.

<b>Implementation</b>
<u>Virtual DOM</u>: Implemented by libraries/frameworks like React, Vue.js, and Angular to facilitate efficient updates of the real DOM.
<u>Shadow DOM</u>: Implemented natively by web browsers to support encapsulation of web components with Shadow DOM.

<b>Performance</b>
<u>Virtual DOM</u>: Offers performance benefits by reducing the number of DOM manipulations, resulting in faster updates and rendering.
<u>Shadow DOM</u>: While Shadow DOM itself doesn't directly impact performance, it can enhance performance by isolating component styles and behavior.

<b>Isolation</b>
<u>Virtual DOM</u>: Doesn't provide isolation by itself but helps in minimizing unintended side effects of DOM updates through its efficient diffing algorithm.
<u>Shadow DOM</u>: Provides encapsulation and isolation for the content of web components, preventing style and behavior leakage to the rest of the document.

<b>Usage</b>
<u>Virtual DOM</u>: Commonly used in modern JavaScript frameworks like React, where components are re-rendered efficiently based on state changes.
<u>Shadow DOM</u>: Utilized when creating custom web components with encapsulated styles and behavior, ensuring modularity and reusability.
`,
          code1: `// Functional component
          import React, { useRef, useEffect } from 'react';

const ShadowComponent = () => {
    const shadowRootRef = useRef(null);

    useEffect(() => {
        const hostElement = shadowRootRef.current;

        // Check if the shadow root already exists
        if (!hostElement.shadowRoot) {
            const shadowRoot = hostElement.attachShadow({ mode: 'open' });
            const div = document.createElement('div');
            div.textContent = 'Hello from Shadow DOM!';
            div.style.color = 'blue';
            shadowRoot.appendChild(div);
        }
    }, []);

    return &lt;div ref={shadowRootRef}&gt;&lt;/div&gt;;
};
export default ShadowComponent;

//---------
// Class component
import React from 'react';
class ShadowComponent extends React.Component {
    constructor(props) {
        super(props);
        this.shadowRootRef = React.createRef();
    }
    componentDidMount() {
        const hostElement = this.shadowRootRef.current;

        // Check if the shadow root already exists
        if (!hostElement.shadowRoot) {
            const shadowRoot = hostElement.attachShadow({ mode: 'open' });
            const div = document.createElement('div');
            div.textContent = 'Hello from Shadow DOM!';
            div.style.color = 'blue';
            shadowRoot.appendChild(div);
        }
    }
    render() {
        return &lt;div ref={this.shadowRootRef}&gt;&lt;/div&gt;;
    }
}
export default ShadowComponent;
`
        }
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
      id: 52,
      title: "dangerouslySetInnerHTML",
      note: [
        {
          text1: `<b>dangerouslySetInnerHTML</b> is a React attribute that allows you to set HTML directly from a React component. It can be useful when you need to render HTML content that comes from a source like a database or user input, but it carries certain risks.`,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "children prop",
      note: [
        {
          text1: `In React.js, the children prop is a special prop that allows you to pass components or other elements as data to a component. Essentially, it represents whatever is placed between the opening and closing tags of a component when it's used.

Here's a breakdown:
<b>What it is</b>:
The children prop is a way to make components more flexible and reusable.
It allows a parent component to inject arbitrary content (HTML elements, other React components, or even text) into a child component.
This is particularly useful for creating "wrapper" components that provide a consistent layout or structure.

<b>How it works</b>:
When you place content between the opening and closing tags of a component in JSX, that content becomes the value of the children prop within that component.
Inside the child component, you can access this content using props.children.
          
<b>Conditionally rendering children</b>(Ex : 2)
You can also conditionally render children based on the parent component's state or props. This is useful when you want to create a component that can be customized based on user input or other factors.

          <b>Using the FC type</b>)(Ex : 3)
There is a standard React type, FC, that we can use on arrow function components. FC stands for Function Component, and it aliases a type called FunctionComponent.

<a href="https://www.carlrippon.com/react-children-with-typescript/" target="_blank">react-children-with-typescript</a>
<a href="https://dev.to/debs_obrien/typescript-and-react-children-4epg" target="_blank">typescript-and-react-children</a> 
`,
          code1: `// ---------------- Ex : 1 ----------
          function Card(props) {
  return (
    &lt;div style={{ border: &#39;1px solid gray&#39;, padding: &#39;10px&#39;, background : &#39;#a99f09&#39; }}&gt;
      {props.children}
    &lt;/div&gt;
  );
}

function App() {
  return (
    &lt;div&gt;
      &lt;Card&gt;
        &lt;h2&gt;Welcome!&lt;/h2&gt;
        &lt;p&gt;This is some content inside the card.&lt;/p&gt;
      &lt;/Card&gt;
    &lt;/div&gt;
  );
}

export default App

//------------- Ex : 2 ------------
function ToggleButton(props) {
  const [showContent, setShowContent] = useState(false);
  const handleClick = () =&gt; {
    setShowContent(!showContent);
  };
  return (
    &lt;div&gt;
      &lt;button onClick={handleClick}&gt;{props.buttonText}&lt;/button&gt;
      {showContent &amp;&amp; props.children}
    &lt;/div&gt;
  );
}
function App() {
  return (
    &lt;ToggleButton buttonText=&quot;Show Content&quot;&gt;
      &lt;p&gt;Some hidden content here&lt;/p&gt;
    &lt;/ToggleButton&gt;
  );
}


//------------ Ex : 3 ------------
type Props = {
  title: string,
};
const Page: React.FC&lt;Props&gt; = ({
  title,
  children,
}) =&gt; (
  &lt;div&gt;
    &lt;h1&gt;{title}&lt;/h1&gt;
    {children}
  &lt;/div&gt;
);`
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
      title: "key",
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
      section: `Ways to Style React Components`,
      title: "Inline CSS",
      note: [
        {
          text1: `Every JSX element has a <b>style</b> property you can add to its opening tag. This means you can add inline styling to JSX in a React component like in traditional HTML.

The primary difference is that you must specify inline styles as objects. In this object, the keys are the CSS properties written in camelCase, and the values are strings corresponding to valid CSS values.
The syntax for inline styles in React is a bit different from regular CSS. Instead of using kebab-case and strings, you use camelCase and values often represented as strings or numbers. For example, a CSS rule like font-size: 12px; would translate to { fontSize: 12 } in React's inline style syntax.
<b>Advantages and Disadvantages</b>
Using inline styles comes with its set of advantages and disadvantages. On the positive side, it allows for quick styling and easy dynamic changes based on component state or props. However, it can lead to code redundancy and difficulties in maintaining styles for large projects.

<b>Rule of Thumb</b>
The official React documentation frowns upon the use of inline styling as a primary means of styling projects and recommends the use of the <b>className</b> attribute instead.

<b>Note</b>: Some examples in the documentation use <u>style</u> for convenience, but using the <u>style</u> attribute as the primary means of styling elements is generally not recommended. In most cases, <u>className</u> should be used to reference classes defined in an external CSS stylesheet. style is most often used in React apps to add dynamically computed styles at render time.
`,
          code1: `const styleCard = {
  color: 'green',
  fontSize: '40px',
  border: '2px solid green',
  padding: '5px',
  backgroundColor: 'yellow'
}

const cardStyles = {
  container: {
    display: "flex",
    height: 100,
    width: 400,
    boxShadow: "0 0 3px 2px #cec7c759",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#aaa'
  },
  profilePicture: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    color: "white",
    height: 20,
    width: 20,
    borderRadius: "50%",
    padding: 10,
    fontWeight: "bold",
  },
  bio: {
    marginLeft: 10,
  },
  userName: {
    fontWeight: "bold",
  },
};

const combineOverried = {
  box: { backgroundColor: 'yellow', height: '100px', width: '200px' },
  boxA: { backgroundColor: 'blue' },
};

const combines = {
  box: { backgroundColor: 'yellow', height: '100px', width: '200px' },
  boxA: { backgroundColor: 'blue' },
};

function Colorful() {
  return (
    &lt;&gt;
      &lt;div style={{ color: &#39;blue&#39;, lineHeight: 1, padding: 20 }}&gt; Inline Styled Component&lt;/div&gt;
      &lt;div style={styleCard}&gt;Style Me!&lt;/div&gt;

      &lt;div style={cardStyles.container}&gt;
        &lt;span style={cardStyles.profilePicture}&gt;D&lt;/span&gt;
        &lt;div style={cardStyles.bio}&gt;
          &lt;p style={cardStyles.userName}&gt;Desmond Nyamador&lt;/p&gt;
          &lt;p&gt;I just learned an easy way to style React Components&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      // this will be yellow
      &lt;div style={combineOverried.box}&gt;&lt;/div&gt;

      // this will be blue
      &lt;div style={Object.assign(combineOverried.box, combineOverried.boxA)}&gt;&lt;/div&gt;

      // this SHOULD be yellow, but it&#39;s blue.
      &lt;div style={combineOverried.box}&gt;&lt;/div&gt;

      //-----

      // this will be yellow
      &lt;div style={combines.box}&gt;&lt;/div&gt;

      // this will be blue
      &lt;div style={Object.assign({}, combines.box, combines.boxA)}&gt;&lt;/div&gt;

      // this SHOULD be yellow, but it&#39;s blue.
      &lt;div style={combines.box}&gt;&lt;/div&gt;
    &lt;/&gt;
  );
};

export default Colorful

// Once "Object.assign()" executes, the 'styles.box' object is changed for good.

// The solution is to pass an empty object to "Object.assign()". In so doing, you're telling the method to produce a NEW object with the objects you pass it. Like so:`
        }
      ],
    },
    {
      id: 52,
      title: "Normal CSS",
      note: [
        {
          text1: `In the external CSS styling technique, we basically create an external CSS file for each component and do the required styling of classes. and use those class names inside the component. It is a convention that name of the external CSS file same as the name of the component with '.css' extension. It is better if the name of the classes used, follow the format 'componentName-context' (here context signifies where we use this classname). For example, if we style the header of a component called 'Box', a better classname should style this element should be 'Box-header'.
          
          In React, <b>className</b> is an attribute used to apply CSS classes to elements. Since <b>class</b> is a reserved keyword in JavaScript, React uses <b>className</b> instead.
          `,
          code1: `/* styles.css */
.container {
    background-color: lightblue;
    padding: 20px;
  }
  
  .title {
    color: darkblue;
    font-size: 24px;
  }
  
//App.js
          import React from 'react';
import './styles.css'; // Assume this contains some CSS classes

const App = () => {
  return (
    &lt;div className=&quot;container&quot;&gt;
      &lt;h1 className=&quot;title&quot;&gt;Hello, World!&lt;/h1&gt;
    &lt;/div&gt;
  );
};

export default App;
`
        }
      ],
    },
    {
      id: 52,
      title: "Styled Components",
      note: [
        {
          text1: `The styled-components allows us to style the CSS under the variable created in JavaScript. style components is a third party package using which we can create a component as a JavaScript variable that is already styled with CSS code and used that styled component in our main component. styled-components allow us to create custom reusable components which can be less of a hassle to maintain.

          <b>Benefits of Using styled-components</b>
    <b>Scoped Styles</b>: Styles are scoped to the component, preventing conflicts.
    <b>Dynamic Styling</b>: You can easily create styles based on props, making your components more flexible.
    <b>Theming</b>: Supports theming, allowing you to define a set of colors and styles that can be applied consistently across your app.

          Install Styled Component Module:
          `,
          code1: `//install third-party styled-components package using the below command in terminal.
npm i --save styled-components
//-------

//Ex : 1
import React from 'react';
import styled from 'styled-components';

const Container = styled.div\`
  background-color: lightblue;
  padding: 20px;
\`;

const Title = styled.h1\`
  color: darkblue;
  font-size: 24px;
\`;

const App = () => {
  return (
    &lt;Container&gt;
      &lt;Title&gt;Hello, Styled Components!&lt;/Title&gt;
    &lt;/Container&gt;
  );
};

export default App;


//---------------

// Example of Dynamic Styling
// You can pass props to your styled component to create dynamic styles:

const Button = styled.button\`
  background-color: \${props => (props.primary ? 'blue' : 'gray')};
  color: white;
  padding: 10px 20px;
\`;

// Usage
&lt;Button primary&gt;Primary Button&lt;/Button&gt;
&lt;Button&gt;Secondary Button&lt;/Button&gt;

//-------------
//Ex : 2
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button\`
  background-color: \${props => (props.primary ? 'blue' : 'gray')};
  color: white;

  &:hover {
    background-color: \${props => (props.primary ? 'darkblue' : 'darkgray')};
  }
\`;

const App = () => {
  return (
    &lt;div&gt;
      &lt;h1&gt;Hello, Styled External Component!&lt;/h1&gt;
      &lt;StyledButton&gt;Styled Bootstrap Button&lt;/StyledButton&gt;
    &lt;/div&gt;
  );
};

export default App;

//-------------
// styled components in a separate file
//Ex : 3
// App.js
import React from 'react';
import StyledButton from './StyledButton'; // Import the styled component

const App = () => {
  return (
    &lt;div&gt;
      &lt;h1&gt;Hello, Styled External Component!&lt;/h1&gt;
      &lt;StyledButton primary&gt;Primary Button&lt;/StyledButton&gt;
      &lt;StyledButton&gt;Secondary Button&lt;/StyledButton&gt;
    &lt;/div&gt;
  );
};
export default App;


// StyledButton.js
import styled from 'styled-components';
import { Button } from 'react-bootstrap'; // Import the external component

// Create a styled version of the Bootstrap Button
const StyledButton = styled(Button)\`
  background-color: \${props => (props.primary ? 'blue' : 'gray')};
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: \${props => (props.primary ? 'darkblue' : 'darkgray')};
  }
\`;
export default StyledButton;`
        }
      ],
    },
    {
      id: 52,
      title: "CSS Modules",
      note: [
        {
          text1: `A CSS module is a simple CSS file but a key difference is by default when it is imported every class name and animation inside the CSS module is scoped locally to the component that is importing it also CSS file name should follow the format <b>filename.module.css</b>. This allows us to use a valid name for CSS classes without worrying about conflicts with other class names in your application.

          CSS Modules: If you want to avoid global scope issues, you can use CSS Modules. Rename your CSS file to <b>styles.module.css</b>, and import it like this:

To use CSS modules create a normal CSS file, import the module you have created from within your component using the syntax`,
          code1: `/* styles.module.css */
.container {
    background-color: lightblue;
    padding: 20px;
  }
  
  .title {
    color: darkblue;
    font-size: 24px;
  }
  
  // App.js
  import styles from './styles.module.css';

const App = () => {
  return (
    &lt;div className={styles.container}&gt;
      &lt;h1 className={styles.title}&gt;Hello, React!&lt;/h1&gt;
    &lt;/div&gt;
  );
};

export default App
  `
        }
      ],
    },
    {
      id: 52,
      title: "Sass & SCSS",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "Less",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 22,
      section: `Hooks`,
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
      title: "useState",
      note: [
        {
          text1: `State is an object that holds data that can change over time in a React component. It represents the mutable part of the component
useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called. 

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
                  <a href="https://www.geekster.in/articles/api-calling-with-useeffect/#:~:text=The%20useEffect()%20hook%20is,API%20endpoint%20using%20fetch()%20." target="_blank">useEffect</a>
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
        {
          text1: `<b>Fix the “Uncaught TypeError: destroy is not a function” Error in ReactJs and NextJs</b><span style="color:red">
                  destroy is not a function
TypeError: destroy is not a function</span>
                  Quick solution:
Your useEffect call is probably implicit but it should be explicit.
<span style="color:#d55555;">
<b>Implicit</b>: useEffect(() => functionCall()); 
<b>Explicit</b>: useEffect(() => {
  return functionCall();
});
</span>
That should fix the error but I suggest you read further to understand why you have this error.

This error is a bit puzzling but makes a lot of sense when you get the hang of the <b>useEffect</b> hook.

Uncaught TypeError: destroy is not a function
It turns out this almost always happens when you try to return anything from your useEffect hook that is not a function. For example, you might be doing something like this:

<span style="color:#d55555;">useEffect(() => functionCall());</span>
Which is the same as doing something like this:
<span style="color:#d55555;">
useEffect(() => {
  return functionCall();
});
</span>
<b>Why This Won't Work?</b>
If you return anything from a <b>useEffect</b> function, it <b>must</b> be a function.

<u>Understanding The useEffect Hook and its Cleanup Function</u>
<i>If you return anything from the <u>useEffect</u> hook function, it must be a cleanup function</i>. This function will run when the component unmounts. This can be thought of as roughly equivalent to the <u>componentWillUnmount</u> lifecycle method in class components.

The following is an example of a <u>useEffect</u> that returns something it's allowed to return (a function). Furthermore, if we were to test this in action, we'd find that the text <u>"This will be logged on unmount"</u> indeed gets logged when our component unmounts.
<span style="color:#d55555;">
const myFunction = async () => {
    // run asynchronous tasks here
};
useEffect(() => myFunction());
</span>

Finally, the shorthand arrow function syntax allows developers to omit the curly braces around the function body, which is useful for simple one-liners. The value of the function body automatically becomes the return value of the arrow function, removing the need of the 'return' keyword. This functionality is called Implicit Return.

Now, how do these tidbits come together to cause such a cryptic error? Simply put, the value of myFunction, which is a Promise, becomes the return value of the arrow function in the useEffect hook. Remember that the useEffect hook expects a cleanup function to be returned? A Promise is not a function. so React stumbles and produces the error.
                  `,
          code1: `
                  // destroy is not a function
// TypeError: destroy is not a function

                  import React, { useEffect } from 'react';
const SingleUser = () => {
    const [user, setUser] = React.useState({});

    useEffect(async() => {
        try {
            const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\`)
            const data = await res.json()
            setUser(data)
        }
        catch (err) {
            console.log(err)
        }
    }, [])

    return (
        &lt;&gt;
            {JSON.stringify(user)}
        &lt;/&gt;
    )
};
export default SingleUser;

// Solution 
import React, { useEffect } from 'react';
const SingleUser = () => {
    const [user, setUser] = React.useState({});
    const fetchApi = async () => {
        try {
            const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\`)
            const data = await res.json()
            setUser(data)
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchApi()
    }, [])
    return (
        &lt;&gt;
            {JSON.stringify(user)}
        &lt;/&gt;
    )
};
export default SingleUser;
`
        },
        {
          text1: `<a href="https://react.dev/learn/you-might-not-need-an-effect" target="_blank">you-might-not-need-an-effect</a>
          <a href="https://dev.to/rem0nfawzi/dont-use-useeffect-3ca8" target="_blank">dont-use-useeffect</a>
          <b>1) async/await useEffect</b>
<span style="color:#d55555;">
          is it good practice to add async to useEffect like this     useEffect(async () => {
        const { data } = await axios.get(
            'https://randomuser.me/api/?results=10'
          );
    },[]) </span>

No, it's generally <b>not a good practice</b> to make the <u>useEffect</u> callback itself <u>async</u>. This is because the <u>useEffect</u> hook expects the callback to return either <u>void</u> (nothing) or a cleanup function, but <u>async</u> functions return a <u>Promise</u>, which could lead to unexpected behavior.

Here’s why you should avoid doing this:
<b>Problem:</b>
When you use an <u>async</u> function directly inside <u>useEffect</u>, it implicitly returns a <u>Promise</u>. However, React doesn't know how to handle that <u>Promise</u>, which can lead to issues with state updates and component lifecycle management.

<span style="color:#d55555;">
useEffect(async () => {
  const { data } = await axios.get('https://randomuser.me/api/?results=10');
}, []);</span>
This causes React to expect a return value from <u>useEffect</u>, but the <u>async</u> function returns a <u>Promise</u> instead of <u>undefined</u> or a cleanup function, which is the expected behavior.



          In this post you'll learn how to use an <b>async</b> function inside your React <b>useEffect</b> hook.
Perhaps you've been using the good old <b>Promise</b> syntax with a <b>.then()</b> method chain.

Let's take a Promise-based refactor things out and investigate how to use <b>async/await</b> functions with React's <b>useEffect</b> hook, as we could easily slip up and cause ourselves some headache without knowing a few key points.

Below, we're setting some initial state as <b>[]</b> via a <b>useState</b> hook, which of course we'll want to populate via a <b>GET</b> request when the component mounts.

After the component mounts, we let a <b>useEffect</b> hook spin off a quick <b>fetchUsers()</b> call which returns us a <b>Promise</b> type, which we evaluate via <b>.then()</b> and grab the data inside and use the <b>setUsers()</b> setter function to populate our users value.


This WORKS, but you should avoid it. Why? Because React's <b>useEffect</b> hook expects a cleanup function returned from it which is called when the component unmounts. Using an <b>async</b> function here will cause a bug as the cleanup function will never get called. Yikes! So what do we do?

Simply put, we should use an <b>async</b> function inside the <b>useEffect</b> hook. There are two patterns you could use, an immediately-invoked function expression (my preferred approach), or a named function that you invoke. Let's compare, and you can decide what you prefer.
`,
          code1: `// ❌ Don't do this!
useEffect(async () => {
  const users = await fetchUsers();
  setUsers(users);

  return () => {
    // this never gets called, hello memory leaks...
  };
}, []);


//--------------------

// *** immediately-invoked function expression ***
// 🆗 Ship it
useEffect(() => {
  (async () => {
    const users = await fetchUsers();
    setUsers(users);
  })();

  return () => {
    // this now gets called when the component unmounts
  };
}, []);

//  **** A named function that you invoke ****
// 🆗 Ship it
useEffect(() => {
  const getUsers = async () => {
    const users = await fetchUsers();
    setUsers(users);
  };

  getUsers(); // run it, run it

  return () => {
    // this now gets called when the component unmounts
  };
}, []);
`,
        },
        {
          text1: `<b>2. Don't set state directly inside useEffect without proper checks</b>
Setting state inside <u>useEffect</u> is common, but you need to be careful when doing so. If you set state asynchronously and the component unmounts before the state is updated, it could lead to a memory leak or an error (e.g., <u>Cannot update a component while rendering a different component</u>).`,
          code1: `// Incorrect:

useEffect(() => {
  axios.get('https://api.example.com').then(response => {
    setData(response.data); // This could cause issues if the component unmounts before the response.
  });
}, []);


//---------------

// Correct: Use the cleanup function or check if the component is still mounted.
useEffect(() => {
  let isMounted = true;  // Flag to check if component is mounted
  axios.get('https://api.example.com').then(response => {
    if (isMounted) {
      setData(response.data);
    }
  });
  return () => { isMounted = false };  // Cleanup flag on unmount
}, []);`,
        },
        {
          text1: `<b>3. Don't forget to handle dependencies correctly</b>
If you omit dependencies in the dependency array, you might run into bugs where <u>useEffect</u> doesn't behave as expected. If you put an empty array <u>[]</u>, it will only run once on mount, but if you need it to run again when certain values change, make sure to list those dependencies.

<b>Note</b>: Be cautious about nested functions inside useEffect. If you define a function inside the effect that references state or props, you must include those dependencies in the dependency array to avoid stale closures.
`,
          code1: `//Incorrect:
useEffect(() => {
  console.log(data);  // Will run only on mount, and \`data\` might change.
}, []);  // Missing dependencies

// Correct:
useEffect(() => {
  console.log(data);  // Runs every time \`data\` changes
}, [data]);  // Add \`data\` to the dependency array`,
        },
        {
          text1: `<b>4) Don't use useEffect for async code without proper error handling</b>
When dealing with asynchronous code in useEffect, always make sure to handle errors, especially if you're fetching data or performing side effects that could fail.
`,
          code1: `//Incorrect:

useEffect(() => {
  fetchData(); // No error handling for async code
}, []);


//Correct:
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.example.com');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);`,
        },
        {
          text1: `<b>5)Don't use useEffect for initial render logic</b>
<u>useEffect</u> is useful for side effects, not for initial render logic. Initial state setting, initial values, and non-async calculations should not be placed inside <u>useEffect</u>. You should handle these tasks directly in the component body.`,
          code1: `//Incorrect:
useEffect(() => {
  setCount(0);  // Initial state should be set outside useEffect
}, []);

// Correct:
const [count, setCount] = useState(0);  // Initial state is set here

    // useEffect should be reserved for handling side effects after the component renders.
    `,
        },
        {
          text1: `<b>6. Don't have side effects in the render method</b>
Side effects, like fetching data, subscribing to events, or modifying global state, should not be performed directly in the render method of a functional component. These should instead be done inside <b>useEffect</b> or other hooks like <b>useLayoutEffect.</b>`,
          code1: `// Incorrect:
const MyComponent = () => {
  fetchData();  // Performing a side effect in the render
  return <div>Hello, World</div>;
};


// Correct:
useEffect(() => {
  fetchData();  // Side effects belong inside useEffect
}, []);`,
        },
        {
          text1: `<b>7. Don't use useEffect without cleaning up when necessary</b>
If your effect creates subscriptions, listeners, or any side effect that persists beyond the component's lifecycle (e.g., network requests, event listeners, timeouts), you need to clean it up properly using the cleanup function in <b>useEffect.</b>`,
          code1: `//Incorrect:
useEffect(() => {
  const timer = setInterval(() => console.log('Tick'), 1000);
  // No cleanup for the interval, which could cause a memory leak
}, []);



// Correct:
useEffect(() => {
  const timer = setInterval(() => console.log('Tick'), 1000);
  return () => {
    clearInterval(timer);  // Clean up the interval on unmount
  };
}, []);`,
        },
        {
          text1: `<b>8. Don't use useEffect with missing dependency arrays</b>
While it's not a "bad practice" per se, forgetting to specify the dependencies for <b>useEffect</b> can lead to unexpected behavior, like the effect running too often or not at all.`,
          code1: `//Incorrect (missing dependencies):
useEffect(() => {
  console.log('This should depend on \`someState\`');
}, []);  // \`someState\` should be a dependency

// Correct:
useEffect(() => {
  console.log('This should depend on \`someState\`');
}, [someState]);  // \`someState\` added as a dependency

    // Tip: Use the eslint-plugin-react-hooks plugin to help with dependencies management. It will warn you about missing or incorrectly specified dependencies.`,
        },
        {
          text1: `<b>9. Don't rely on useEffect for synchronous code</b>
If the effect doesn't involve asynchronous operations or side effects that need cleanup, you probably shouldn't use useEffect at all. Use regular logic in the component body instead.`,
          code1: `//Incorrect:
useEffect(() => {
  const result = computeSomething();  // This should be done outside useEffect if it's synchronous
}, []);

//Correct:
const result = computeSomething();  // Just use it directly in the component body`,
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
=> <u>Accessing functional components</u>: You can reference DOM elements and class components using refs because they have instances. On the other hand, functional components do not have instances. Therefore, the code below will not work.


<b>Ref Form Ex : 5</b>
use a <b>single useRef object</b> to hold multiple input refs like { fullname, area }, 

The <b>double arrow function</b> in this line:
React expects the ref prop to be either:
   1) A <b>ref object</b> (e.g., useRef()), or
   2) A callback function of the form <b>(element) => { ... }</b>
const setRef = (field) => (el) => {
  userDetailsRef.current[field] = el;
};


In your case, you want to assign multiple refs (e.g., fullname, area, etc.) dynamically using just one shared logic.

ref={setRef('fullname')}
will call setRef('fullname'), which returns a function:
(el) => {
  userDetailsRef.current['fullname'] = el;
}
That returned function becomes the callback ref, which React calls with the actual DOM element (el).

here's the expanded version without the double arrow:
function setRef(field) {
  return function (el) {
    userDetailsRef.current[field] = el;
  };
}`,
          code1: `// ----------- Ex : 1 -----------
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

// ----------- Ex : 2 -----------
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


// ----------- Ex : 3 -----------
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


// ----------- Ex : 4 -----------
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



// ----------- Ex : 5 -----------
use a single useRef object to hold multiple input refs like { fullname, area }, 
import React, { useRef } from &#39;react&#39;;

const UserInput = () =&gt; {
  const userDetailsRef = useRef({
    fullname: null,
    area: null,
  });

  // Reusable callback function to assign refs - curried function
  const setRef = (field) =&gt; (el) =&gt; {
    userDetailsRef.current[field] = el;
  };

  const handleSubmit = (e) =&gt; {
    e.preventDefault();
    const fullname = userDetailsRef.current.fullname.value;
    const area = userDetailsRef.current.area.value;

    console.log(&#39;Full Name:&#39;, fullname);
    console.log(&#39;Area:&#39;, area);
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;h2&gt;Registration Form&lt;/h2&gt;

      &lt;label&gt;Full Name:&lt;/label&gt;
      &lt;input
        type=&quot;text&quot;
        name=&quot;fullname&quot;
        defaultValue=&quot;sdfsd&quot;
        ref={setRef(&#39;fullname&#39;)}
      /&gt;

      &lt;label&gt;Area :&lt;/label&gt;
      &lt;input
        type=&quot;text&quot;
        name=&quot;area&quot;
        ref={setRef(&#39;area&#39;)}
      /&gt;

      &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
    &lt;/form&gt;
  );
};

export default UserInput;

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
          text1: `<b>Introduction to React and useContext</b>:
<a href="https://react.dev/reference/react/createContext" target="_blank">createContext</a>
<a href="https://react.dev/learn/passing-data-deeply-with-context" target="_blank">passing-data-deeply-with-context</a>
                    <b>What is Context in React?</b>
                    Instead of passing the props down through each component, React Context allows you to broadcast data to the components below.
                Accesses the value of a React context within a functional component.
                
                The <b>useContext</b> hook is used to consume values from a React context. Context provides a way to pass data through the component tree without having to pass props manually at every level. 

                 <b>context</b> refers to a mechanism that allows data to be shared across multiple components without explicitly passing it through props. 

                 <b>Why useContext is Important</b>
<u>Sharing Data Across Components</u>
One of the main benefits of using context is the ability to share data across multiple components. This is especially useful when dealing with data that needs to be accessed by several components at different levels of the component tree.

<u>Avoiding Prop Drilling</u>
Prop drilling is the process of passing data from one component to another through props. This can become cumbersome and difficult to manage when data needs to be passed through multiple levels of components. Context eliminates the need for prop drilling by providing a centralized way to share data.

<b>1. Creating a Context in React</b>
To create a context in React, we use the <b>React.createContext</b> method. This method returns a context object that can be used to <u>provide and consume</u> values within the component tree.
<b>createContext</b> is a function provided by React to create a context. A context allows you to share values (such as state, functions, etc.) across the component tree without passing props explicitly at each level.
When you call <b>createContext()</b>, it returns a context object that contains two important components:

-> Provider
-> Consumer (usually replaced with useContext hook)
<span style="color:#aa1099">
This is done using <b>React.createContext()</b>. It returns a Context object.
import React, { createContext } from 'react';
export const AuthContext = createContext(); // Create the context </span>

<b>2. Provide a Context Value</b>: The <b>Context.Provider</b> component allows you to define the context value that child components can consume.
<span style="color:#aa1099">     &lt;AuthContext.Provider value={{ user, login, logout }}&gt;
      {children}
    &lt;/AuthContext.Provider&gt; 
    </span>
<b>3. Using the useContext Hook (Consume the Context)</b>: This can be done using the <b>Context.Consumer</b> component or the <b>useContext</b> hook in functional components.
<u>Accessing Context Values</u>
The <u>useContext</u> hook allows us to access the value of a context within a functional component. By passing the context object to the useContext hook, we can retrieve the current value of the context.
<u>Updating Context Values</u>
To update the value of a context, we use the context provider. The provider allows us to define the value that should be made available to all components that consume the context. 

-> When consumed by the <b>useContext</b> hook, it establishes a store for the required values. This enables the centralized management of these values within our application.
-> The <b>Provider</b> property of <b>AuthContext</b> allows any component to access the store. This is crucial for enabling components to retrieve or update stored values. The specific values that are made available to the components are determined by the <b>value</b> property of the <b>Provider</b> component.
<span style="color:#aa1099"> 
import React, { useContext } from 'react';
import { AuthContext } from 'AuthContext';
const { userData, loginAction } = useContext(AuthContext);
OR
const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);
--- using useAuth custom hook ----
import { useAuth } from '../AuthContext'; 
  const { user, logout } = useAuth();
</span>
<b>=> Parameters </b>
<b>SomeContext</b>: The context that you've previously created with <b>createContext</b>. The context itself does not hold the information, it only represents the kind of information you can provide or read from components.
<b>=> Returns </b>
<b>useContext</b> returns the context value for the calling component. It is determined as the value passed to the closest <b>SomeContext.Provider</b> above the calling component in the tree. If there is no such provider, then the returned value will be the <b>defaultValue</b> you have passed to <b>createContext</b> for that context. The returned value is always up-to-date. React automatically re-renders components that read some context if it changes.

<b>=> warning </b>
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
          text1: `<b>useImperativeHandle</b> is a React Hook that lets you customize the handle exposed as a ref.
<span style="color:red"> useImperativeHandle(ref, createHandle, dependencies?)</span> 
Call useImperativeHandle at the top level of your component to customize the ref handle it exposes:

<b>Parameters</b> 
<u>ref</u>: The ref you received as the second argument from the forwardRef render function.
<u>createHandle</u>: A function that takes no arguments and returns the ref handle you want to expose. That ref handle can have any type. Usually, you will return an object with the methods you want to expose.
<u>optional dependencies</u>: The list of all reactive values referenced inside of the <u>createHandle</u> code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like <u>[dep1, dep2, dep3]</u>. React will compare each dependency with its previous value using the Object.is comparison. If a re-render resulted in a change to some dependency, or if you omitted this argument, your <u>createHandle</u> function will re-execute, and the newly created handle will be assigned to the ref.

<b>Returns</b> 
<u>useImperativeHandle</u> returns <u>undefined</u>.
`,
          code1: `import { forwardRef, useImperativeHandle } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  useImperativeHandle(ref, () => {
    return {
      // ... your methods ...
    };
  }, []);
  // ...
  
  //--------------

  import React, { useImperativeHandle, forwardRef, useRef } from 'react';

// Child Component
const InputComponent = forwardRef((props, ref) => {
  const inputRef = useRef();

  // Expose methods to parent
  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputRef.current.focus();
      },
      scrollIntoView() {
        inputRef.current.scrollIntoView();
      }
    }
  });

  return &lt;input ref={inputRef} type=&quot;text&quot; /&gt;;
});

// Parent Component
const ParentComponent = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    // Call the focus method exposed by InputComponent
    inputRef.current.focus();
  };

  return (
    &lt;div&gt;
      &lt;InputComponent ref={inputRef} /&gt;
      &lt;button onClick={handleFocus}&gt;Focus Input&lt;/button&gt;
    &lt;/div&gt;
  );
};

export default ParentComponent;

  `
        },
        {
          text1: `<b>useImperativeHandle</b> is a React hook that allows you to customize the instance value that is exposed when using <b>ref</b> with functional components. It's particularly useful when you want to expose specific methods or properties of a child component to the parent component.
<b>When to Use</b>
You typically use <b>useImperativeHandle</b> when you want to expose imperative methods from a child component, such as focusing an input or triggering animations. This can help manage complex interactions between components more cleanly.

<b>How It Works</b>
Here's a basic outline of how to use <b>useImperativeHandle</b>:
    <b>Create a Functional Component</b>: Use <u>React.forwardRef</u> to create a component that can accept a ref from a parent component.
    <b>Use useImperativeHandle</b>: Inside the functional component, use <u>useImperativeHandle</u> to define what should be exposed through the ref.`,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "useLayoutEffect",
      note: [
        {
          text1: `<b>useLayoutEffect</b> can hurt performance. Prefer useEffect when possible.
<b>useLayoutEffect</b> is a version of <b>useEffect</b> that fires before the browser repaints the screen.
<span style="color:red"> useLayoutEffect(setup, dependencies?) </span>

In React, <b>useLayoutEffect</b> is a hook that serves a similar purpose to <b>useEffect</b>, but it has a key difference in timing. It's used for synchronously running effects after all DOM mutations. Here's a breakdown of how it works and when to use it.

<b>Key Points about useLayoutEffect</b>
    <u>Timing</u>:
        <b>useLayoutEffect</b> runs synchronously after all DOM updates but before the browser has a chance to paint. This means that if you need to perform measurements or make changes that need to occur before the user sees the updated layout, you should use this hook.

    <u>Usage</u>:
        The API is the same as <b>useEffect</b>, taking a function as the first argument and a dependency array as the second.
        However, it's typically used for operations that require reading from the DOM and synchronously re-rendering before the browser paints.

    <u>Use Cases</u>:
        Measuring the size or position of elements after they are rendered.
        Applying styles or animations that need to be in place before the paint.
        Avoiding flickers or layout shifts by ensuring that updates are applied immediately.

        <b>What is the problem with useEffect?</b>
As stated above the <u>useEffect</u> hook is <u>asynchronous</u> this has a significant drawback in that it can only be called after the component has been mounted. This implies that side effects that depend on the layout of the component cannot be carried out using <u>useEffect</u>.

Unlike the <b>useEffect</b> hook, the <b>useLayoutEffect</b> hook runs <u>synchronously</u> which means it runs immediately after React has performed all the necessary DOM mutations but just before the browser paints the screen. It has the same API and possesses a similar syntax as the <b>useEffect</b> hook.
`,
          code1: `import React, { useLayoutEffect, useRef, useState } from 'react';

const MyComponent = () => {
  const [width, setWidth] = useState(0);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    // Measure the width of the box after it has been rendered
    if (boxRef.current) {
      setWidth(boxRef.current.getBoundingClientRect().width);
    }
  }, []); // Empty array means it runs once on mount

  return (
    &lt;div&gt;
      &lt;div ref={boxRef} style={{ width: &#39;50%&#39;, height: &#39;100px&#39;, backgroundColor: &#39;lightblue&#39; }}&gt;
        Resize the window to see the effect!
      &lt;/div&gt;
      &lt;p&gt;The width of the box is: {width}px&lt;/p&gt;
    &lt;/div&gt;
  );
};

export default MyComponent;

//-----------
Example : 2
import React, { useState, useLayoutEffect } from 'react';

const MyComponent = () => {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize width
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return &lt;div&gt;Window width: {width}px&lt;/div&gt;;
};

export default MyComponent;

//---------------
//Example : 3
import React, { useRef, useLayoutEffect } from "react";

const SmoothScrolling = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      // Smoothly scroll to the top of the container
      container.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    // Scroll to the top when the component is mounted
    handleScroll();

    // Add event listener to scroll to the top on subsequent scrolls
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return &lt;div ref={containerRef}&gt;{/* Your Content */}&lt;/div&gt;;
};

export default SmoothScrolling;

//------------
//Example : 4
import React, { useRef, useLayoutEffect } from "react";

const AnimatingElements = () => {
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const element = elementRef.current;

    // Animate the element's opacity on mount
    element.style.opacity = 0;
    setTimeout(() => {
      element.style.opacity = 1;
    }, 1000);

    return () => {
      // Clean up animation when the component unmounts
      element.style.opacity = 0;
    };
  }, []);

  return &lt;div ref={elementRef}&gt;Animate me!&lt;/div&gt;;
};

export default AnimatingElements;

//----------
Example : 5
import React, { useRef, useLayoutEffect } from 'react';

const Component = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    const { width, height } = ref.current.getBoundingClientRect();
    console.log(\`Width: \${width}px, Height: \${height}px\`);
    // Manipulate DOM based on measurements
  }, []);
  return &lt;div ref={ref}&gt;Resizable Element&lt;/div&gt;;
};
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
      title: "useDebugValue",
      note: [
        {
          text1: `In React, the <b>useDebugValue</b> hook is primarily used for debugging custom hooks. It allows you to display a label or value in React DevTools for a custom hook, making it easier to track the state or behavior of the hook during development.

<b>Key Points about useDebugValue</b>
    <u>Purpose</u>:
        useDebugValue is intended for developers to enhance the debugging experience. It helps to provide insights into the state or output of a custom hook when viewed in React DevTools.

    <u>Usage</u>:
        You call useDebugValue inside your custom hook, passing it a value or a function that returns a value. This value can be a string or any other data type that you want to display.

    <u>Conditional Values</u>:
        You can conditionally display different debug values depending on the state of the hook.`,
          code1: `import { useState, useEffect, useDebugValue } from 'react';

// Custom hook
const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, [url]);

  // Use useDebugValue to show the loading state in React DevTools
  useDebugValue(loading ? 'Loading...' : 'Loaded');

  return { data, loading };
};

// Example component using the custom hook
const DataComponent = () => {
  const { data, loading } = useFetchData('https://jsonplaceholder.typicode.com/users');

  if (loading) return &lt;p&gt;Loading...&lt;/p&gt;;
  return &lt;pre&gt;{JSON.stringify(data, null, 2)}&lt;/pre&gt;;
};

export default DataComponent;
`
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
      id: 52,
      title: "useId",
      note: [
        {
          text1: `<b>useId</b> is a React Hook for generating unique IDs that can be passed to accessibility attributes.
          <span style="color:red">const</span> id = <span style="color:#7F00FF">useId</span>()

          Call useId at the top level of your component to generate a unique ID:
          The useId hook is part of React and was introduced to help generate unique IDs for components, which is especially useful for accessibility (e.g., associating labels with form elements) and for handling unique key generation in lists.
          `,
          code1: `import { useId } from &#39;react&#39;;

function PasswordField() {
  const userId = useId();
  const checkboxId = useId();

  return (
    &lt;&gt;
      &lt;div style={{ display: &#39;flex&#39;, alignItems: &#39;center&#39;, justifyContent: &#39;space-around&#39;,background:&#39;#ca8ac9&#39; }}&gt;
        &lt;label htmlFor={checkboxId}&gt; checkbox &lt;/label&gt;
        &lt;input type=&quot;checkbox&quot; id={checkboxId} /&gt;
      &lt;/div&gt;

      &lt;div style={{ display: &#39;flex&#39;, alignItems: &#39;center&#39;, justifyContent: &#39;space-around&#39;,background:&#39;#ca8ac9&#39; }}&gt;
        &lt;label htmlFor={userId}&gt;First Name&lt;/label&gt;
        &lt;input id={userId} type=&quot;text&quot; placeholder={\`Generated id --&gt; \${userId}\`} /&gt;
      &lt;/div&gt;
    &lt;/&gt;
  )
}

export default PasswordField`
        }
      ],
    },
    {
      id: 52,
      title: "useActionState",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "useFormStatus",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "useOptimistic",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "useTransition",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "useDeferredValue",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "useInsertionEffect",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      section: `Router`,
      title: "Router",
      note: [
        {
          text1: `In React, routing allows you to create a single-page application (SPA) where you can navigate between different views or components without fully reloading the page. This is commonly achieved using libraries like <b>React Router</b>. Here's a breakdown of how 
                    
                    To configure React router, navigate to the <b>index.js</b> file, which is the root file, and import <b>BrowserRouter</b> from the <b>react-router-dom</b> package that we installed, wrapping it around our App component as follows:

In the latest version of React Router (version 6 and beyond), routing has become even more intuitive and powerful. Here's a breakdown of the key features and concepts:

<b>Key Features of React Router v6</b>
    <b>Simplified Route Definitions</b>:
        The syntax for defining routes has been simplified. You no longer need the <u>Switch</u> component; instead, routes are wrapped in <u>Routes</u>.
    <b>Nested Routes</b>:
        Nesting routes is straightforward, allowing you to create layouts that can render child components based on the current route.
    <b>Automatic Route Matching</b>:
        React Router v6 uses a more intelligent route matching algorithm, allowing for better handling of route priorities and wildcard matching.
    <b>New Hooks</b>:
        Hooks like <u>useNavigate</u>, <u>useParams</u>, <u>useLocation</u>, and <u>useRoutes</u> simplify navigation and route management.
   <b>Element Rendering</b>:
        Instead of using the <u>component</u> prop, you now use the <u>element</u> prop to specify the component to render.
        
     <b>Router</b>: The entire application is wrapped in <b>BrowserRouter</b>, enabling routing. The router is the top-level component that provides the routing infrastructure. In React Router, you typically use BrowserRouter for web applications and HashRouter for static sites.
     <b>Link</b>: Used to create navigation links. Clicking a link changes the URL without reloading the page. The Link component enables navigation by creating anchor-like elements that maintain the application's state.
     <b>Routes</b>: A new component that replaces <b>Switch</b>. It renders the first matching <b>Route</b>. The reason for this is because it's Routes job is to understand all of its children Route elements, and intelligently choose which ones are the best to render.
     <b>Route</b>: The <b>element</b> prop is used to specify which component to render for a given path. The <b>path='*'</b> acts as a catch-all for unmatched routes, rendering the <b>NotFound</b> component. A route is a mapping between a URL and a component. When a user visits a specific URL, React Router renders the corresponding component.
        `,
          code1: `//Installation: Install the latest version of React Router:

npm install react-router-dom

// Basic Usage: Here's a simple application with routing:

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => &lt;h2&gt;Home&lt;/h2&gt;;
const About = () => &lt;h2&gt;About&lt;/h2&gt;;
const NotFound = () => &lt;h2&gt;404 - Not Found&lt;/h2&gt;;

function App() {
  return (
    &lt;Router&gt;
      &lt;nav&gt;
        &lt;ul&gt;
          &lt;li&gt;
            &lt;Link to=&quot;/&quot;&gt;Home&lt;/Link&gt;
          &lt;/li&gt;
          &lt;li&gt;
            &lt;Link to=&quot;/about&quot;&gt;About&lt;/Link&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/nav&gt;

      &lt;Routes&gt;
        &lt;Route path=&quot;/&quot; element={&lt;Home /&gt;} /&gt;
        &lt;Route path=&quot;/about&quot; element={&lt;About /&gt;} /&gt;
        &lt;Route path=&quot;*&quot; element={&lt;NotFound /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/Router&gt;
  );
}
export default App;
`
        },
        {
          text1: `<b>BrowserRouter</b> is a component provided by the React Router library that enables client-side routing in React applications using the HTML5 history API. It allows your application to handle dynamic routing and navigation without full page reloads, creating a more seamless user experience.

                    <b>BrowserRouter</b>: BrowserRouter is top level component. BrowserRouter is a router implementation that uses the HTML5 history API (pushstate, replacestate, and popstate events) to keep your UI in sync with the URL. It is the parent component used to store all other components.

                    <b>Key Features of BrowserRouter</b>
    <u>History API</u>:
        BrowserRouter uses the browser's history stack to manage navigation. This means it can push and pop entries from the history stack, allowing users to use the browser's back and forward buttons to navigate.
    <u>URL Management</u>:
        It updates the URL in the browser's address bar as users navigate through the application, enabling deep linking to specific routes.
    <u>Nested Routing</u>:
        You can nest routes within BrowserRouter, making it easier to structure your application's routing.
    <u>React Context</u>:
        It provides routing-related data to all components within its scope via React's Context API, enabling easy access to routing information.

        <b>basename</b>
Configure your application to run underneath a specific basename in the URL:

                    We can see in the above code that we imported <b>Routes</b> and <b>Route</b> components from <b>react-router-dom</b> and then used them to declare the routes we want. All Routes are wrapped in the Routes tag, and these Routes have two major properties:

<b>path</b>: As the name implies, this identifies the path we want users to take to reach the set component. When we set the <b>path</b> to <b>/about</b>, for example, when the user adds <b>/about</b> to the URL link, it navigates to that page.

<b>element</b>: This contains the component that we want the set path to load. This is simple to understand, but remember to import any components we are using here, or else an error will occur.
                    
The <b>NavLink</b> component from react-router-dom is a special component that helps you navigate different routes using the <b>to</b> prop. <b>The NavLink</b> component also knows whether the route is currently "active" and adds a default <b>active</b> class to the link. We can use this class in our CSS to define some styling for active links, as shown below:

<b>How to fix No Routes Found Error</b>
When routing, a situation may cause a user to access an unconfigured route or a route that does not exist; when this occurs, React does not display anything on the screen except a warning with the message <u>No routes matched location.</u>

                    Advanced Features
    <b>Nested Routes</b>: You can define nested routes directly in your component structure:
<b>Programmatic Navigation</b>: Use the useNavigate hook to programmatically navigate:
<b>Route Parameters</b>: You can access route parameters using the useParams hook:

`,
          code1: `
                    //basename="/app" basename configure in BrowserRouter
                    function App() {
  return (
    &lt;BrowserRouter basename=&quot;/app&quot;&gt;
      &lt;Routes&gt;
        &lt;Route path=&quot;/&quot; /&gt; {/* 👈 Renders at /app/ */}
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  );
}

//---------------

                    // This can be fixed by configuring a new route to return a specific component when a user navigates to an unconfigured route as follows:
                    // App.js
import { Routes, Route } from 'react-router-dom';
import NoMatch from './Components/NoMatch';

const App = () => {
   return (
      &lt;&gt;
         &lt;Routes&gt;
            // ...
            &lt;Route path=&quot;*&quot; element={&lt;NoMatch /&gt;} /&gt;
         &lt;/Routes&gt;
      &lt;/&gt;
   );
};

export default App;
                    `
        },
        {
          text1: `<b>Nested Routes</b>: You can define nested routes directly in your component structure:
                    Nested routes in React allow you to define routes within other routes, creating a hierarchical structure for your application's routing. This is particularly useful for organizing your components and managing complex UIs where different views share a common layout.`,
          code1: `
                  // MainRoute.js
                  import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
                  import Shop from '../shop/shop-component'

                  return (
                  &lt;BrowserRouter&gt; 
                    &lt;Routes basename={&#39;/react&#39;}&gt;
                      &lt;Route path=&quot;/&quot; element={&lt;Navigation/&gt;}&gt;
                        &lt;Route index element={&lt;Home /&gt;} /&gt;
                        &lt;Route path=&quot;shop/*&quot; element={&lt;Shop /&gt;} /&gt;
                      &lt;/Route&gt;
                    &lt;/Routes&gt;
                  &lt;/BrowserRouter&gt;
                  )

                    //shop-component.js
                    import { Routes, Route } from 'react-router';
        return (
        &lt;&gt;
            &lt;Routes&gt;
                &lt;Route index element={&lt;CategoriesPreview loading={loading} /&gt;} /&gt;
                &lt;Route path=&#39;/:category&#39; element={&lt;Category /&gt;} /&gt;
                &lt;Route path=&#39;/product-details/:productId&#39; element={&lt;ProductDetails /&gt;} /&gt;
            &lt;/Routes&gt;
        &lt;/&gt;
                )

        // category-component.js
        import { useParams } from 'react-router-dom';
        const Category = () => {
        const { category } = useParams();
        return (...)
        }
        export default Category;

                    `
        },
        {
          text1: `<b>Programmatically Navigate</b>
React Router offers two different ways to programmatically navigate, depending on your preference. First is the <b>imperative navigate</b> method and second is the <b>declarative Navigate</b> component.

To get access to the <b>imperative navigate</b> method, you'll need to use React Router's <b>useNavigate</b> Hook. From there, you can pass <b>navigate</b> the new path you'd like the user to be taken to when <b>navigate</b> is invoked.

It offers a more streamlined and minimal code footprint (no use of <b>useState</b> within the component) and an easy imperative style, but it fails to be as clear on the intent of the code without further investigation - making us look inside the callback function for the <b>onClick</b> handler to see what is expected to happen. It requires more thinking, whereas the declarative &lt;Navigate /&gt; does not.


Using a <b>declarative navigation</b> approach with React Router's &lt;Navigate /&gt; component allows us to specify exactly when a navigation event occurs within our JSX - making it clear when and where the navigation will happen.

It's also easier to read and understand because the navigation is part of the JSX structure, and not nested somewhere deep down within a callback function. Why might you want to do this? Conditional rendering.

Let's assume a settings component that displays the app settings, with a button to return to the home page - redirecting a user based on an event they initiated. Using the &lt;Navigate /&gt; component is a super use case here to create a clear divide in component logic and operations:

If you'd prefer a more <b>declarative</b> approach, you can use React Router's <b>Navigate</b> component.

<b>Navigate</b> works just like any other React component, however, instead of rendering some <b>UI</b>, it navigates the user to a new location.

The useHistory() hook is now deprecated. If you are using React Router 6, the proper way to navigate programmatically is as follows:
`,
          code1: `//imperative navigate
                  import { useCallback } from 'react';
              import { useNavigate } from 'react-router-dom';

              const DataComponent = () => {
                const navigate = useNavigate()
                const NavigateHandler = useCallback(() => {
                    navigate("/UseMemoMain")
                },[])

                return (
                  &lt;&gt;
                    &lt;button onClick={NavigateHandler}&gt; Main Menu &lt;/button&gt;
                  &lt;/&gt;
                )
              };

              export default DataComponent;

              //---------
              // declarative approach
              //---------
              import React, {  } from 'react';
              import { Navigate } from 'react-router-dom';
              const DataComponent = () => {
                const [toDashboard, setToDashboard] = React.useState(false);
                const NavigateHandler = () => {
                  setToDashboard(true)
                }
                if(toDashboard){
                  return &lt;Navigate to=&quot;/UseMemoMain&quot; /&gt;;
                }
                return (
                  &lt;&gt;
                    &lt;button onClick={NavigateHandler}&gt; Main Menu { toDashboard } &lt;/button&gt;
                  &lt;/&gt;
                )
              };
              export default DataComponent;
`
        },
        {
          text1: `Route parameters in React Router allow you to capture values from the URL and use them in your components. This is especially useful for dynamic routing, such as displaying user profiles, product details, or any content that changes based on the URL.
<b>How to Use Route Parameters</b>
    <b>1) Define the Route with Parameters</b>: You can define a route with parameters using a colon (:) followed by the parameter name in the path.
    <b>2) Access the Parameters</b>: Use the useParams hook to access the parameters in your component.`,
          code1: `//MainRoute.js
return (
    &lt;BrowserRouter&gt;
        &lt;Routes&gt;
            &lt;Route path=&#39;/GetUser&#39; element={&lt;GetUser /&gt;} /&gt;
            &lt;Route path=&#39;/GetUser/:userId&#39; element={&lt;SingleUser /&gt;} /&gt;
        &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
);


                  //GetUser.js
                  import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const GetUser = () => {
  const [userData, setUserData] = React.useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        return res.json()
    })
    .then(data => {
        setUserData(data)
    })
  },[])

  return (
    &lt;&gt;
        {
            userData.map(u =&gt; (
                &lt;Link to={\`/GetUser/\${u.id}\`} key={u.id}&gt; &lt;p&gt;{ u.name }&lt;/p&gt; &lt;/Link&gt;
            ))
        }
    &lt;/&gt;
  )
};

export default GetUser;


                  //SingleUser.js
                  import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const SingleUser = () => {
    const [user, setUser] = React.useState({});
    const { userId } = useParams()

    useEffect(() => {
        fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setUser(data)
            })
    }, [userId])

    return (
        &lt;&gt;
            {JSON.stringify(user)}
        &lt;/&gt;
    )
};
export default SingleUser;
                  `
        },
      ],
    },
    {
      id: 52,
      title: "createBrowserRouter",
      note: [
        {
          text1: `<b><span style="color:red"> createBrowserRouter </span></b>
                  One of the key components provided by <b>react-router-dom</b> is createBrowserRouter
                  
                  createBrowserRouter is a function in React Router (introduced in version 6.4) that allows you to create a router instance for managing your application's routing using the HTML5 history API. This function is part of the new data routing features that simplify how you define and manage routes in a React application.

                  <b>Key Features</b>
    <b>Declarative Routing</b>: It allows you to define routes in a clear and declarative manner, using an array of route objects.
    <b>Nested Routes</b>: You can easily set up nested routes, making it simple to manage complex routing structures.
    <b>Loaders</b>: You can attach loaders to routes to fetch data before rendering the component, ensuring that the required data is available upfront.
    <b>Error Handling</b>: It supports error elements, allowing you to define how to handle errors that occur during data loading.
    <b>Integration with RouterProvider</b>: It works with RouterProvider to provide context to your components.

    <b>Nested Routes</b>
Nested routes are super handy for managing complex applications. They let you define routes within other routes, which is great for layouts where some components are always visible (like a navigation bar) while others change based on the route.

<b>Route Parameters</b>
Need to capture values from the URL? Route parameters have got you covered. This is especially useful for dynamic routing, like displaying user profiles or articles based on an ID.

<b>Error Handling</b>
You can define error handling routes to display custom error pages for specific conditions:

<b>Data Fetching</b>
React Router 6 introduces the ability to define loaders and actions for routes, which can handle data fetching and mutations. This ensures data is loaded before a component is rendered:

<b>Use Lazy Loading</b>
For better performance, use lazy loading to load components only when needed. React's lazy and Suspense can help with this:

createBroweserRouter gets an array with objects. Those objects are containing our route logic with some keys such as path, element, children.
Basically, path that we give is belong to the element which is a component in our app. That path shall render the related component. errorElement helps us to manage errors with its own component. The component in the errorElement can contain its own Link that helps us to go back to home page. We can also use children key for creating another routing logic in certain path we choose. path: “/prices/:crypto” allow us to dynamically give a selected path. With using react-query, axios and useState we can connect them to this :crypto so that When user select from a display its dynamically fetches the chosen one with its id and give it into :crypto. path: “/prices/SELECTED ITEM”

This is the recommended router for all React Router web projects. It uses the <u>DOM History API</u> to update the URL and manage the history stack.

It also enables the v6.4 data APIs like <u>loaders, actions, fetchers</u> and more.

Due to the decoupling of fetching and rendering in the design of the data APIs, you should create your router outside of the React tree with a statically defined set of routes. For more information on this design, please see the Remixing React Router blog post and the When to Fetch conference talk.

<b>Conclusion</b>
<b>createBrowserRouter</b> is a big step up from the traditional <b>Switch</b> component, offering enhanced flexibility and functionality. With features like nested routes, route parameters, error handling, and data fetching, you can create dynamic and efficient routes for your projects.
                  `,
          code1: `//Error Handling
                  const router = createBrowserRouter([
  {
    path: "/",
    element: &lt;Home /&gt;,
    errorElement: &lt;NotFound /&gt;,
    children: [
      {
        path: "about",
        element: &lt;About /&gt;,
      },
      {
        path: "contact",
        element: &lt;Contact /&gt;,
      },
    ],
  },
]);
                  
                  //Data Fetching loaders and actions
                  const router = createBrowserRouter([
  {
    path: "/",
    element: &lt;Home /&gt;,
    loader: async () => {
      const data = await fetchData();
      return { data };
    },
  },
]);

async function fetchData() {
  // Fetch your data here
  return fetch("/api/data").then((res) => res.json());
}

//---------------------
import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
        &lt;Home /&gt;
      &lt;/Suspense&gt;
    ),
    children: [
      {
        path: "about",
        element: (
          &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
            &lt;About /&gt;
          &lt;/Suspense&gt;
        ),
      },
      {
        path: "contact",
        element: (
          &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
            &lt;Contact /&gt;
          &lt;/Suspense&gt;
        ),
      },
    ],
  },
]);

function App() {
  return &lt;RouterProvider router={router} /&gt;;
}

export default App;
`
        },
      ],
    },
    {
      id: 52,
      title: "createRoutesFromElements",
      note: [
        {
          text1: `<b><span style="color:red"> createRoutesFromElements </span></b>
                  createRoutesFromElements is a utility function provided by React Router (specifically from version 6.4 onwards) that allows you to create a route configuration based on a set of React elements. This function helps in defining routes in a more declarative way, enabling a structure that's easier to read and maintain.
                  
                  createRoutesFromElements is a helper that creates route objects from &lt;Route&gt; elements. It's useful if you prefer to create your routes as JSX instead of objects.

                  It's also used internally by &lt;Routes&gt; to generate a route objects from its &lt;Route&gt; children.

                  <b>Key Features</b>
    <b>Declarative Syntax</b>: You can define routes using JSX elements, making it more intuitive, especially for those familiar with React.
    <b>Nested Routes</b>: It allows you to easily define nested routes and their associated components.
    <b>Error Boundaries</b>: You can specify error elements directly within the route definition.
    <b>Cleaner Organization</b>: It helps keep route definitions organized and reduces boilerplate code.
                  `,
          code1: `// You can do this:
const router = createBrowserRouter(
  createRoutesFromElements(
    &lt;Route path=&quot;/&quot; element={&lt;Root /&gt;}&gt;
      &lt;Route path=&quot;dashboard&quot; element={&lt;Dashboard /&gt;} /&gt;
      &lt;Route path=&quot;about&quot; element={&lt;About /&gt;} /&gt;
    &lt;/Route&gt;
  )
);

// Instead of this:
const router = createBrowserRouter([
  {
    path: "/",
    element: &lt;Root /&gt;,
    children: [
      {
        path: "dashboard",
        element: &lt;Dashboard /&gt;,
      },
      {
        path: "about",
        element: &lt;About /&gt;,
      },
    ],
  },
]);

//------------

// Define routes using createRoutesFromElements
const routes = createRoutesFromElements(
  &lt;&gt;
    &lt;Route path=&quot;/&quot; element={&lt;Home /&gt;} /&gt;
    &lt;Route path=&quot;/about&quot; element={&lt;About /&gt;} /&gt;
    &lt;Route path=&quot;/user&quot; element={&lt;UserProfile /&gt;} /&gt;
  &lt;/&gt;
);

// Create a router instance
const router = createBrowserRouter(routes);
`
        },
      ],
    },
    {
      id: 52,
      title: "RouterProvider",
      note: [
        {
          text1: `<b> <span style="color:red"> &lt;RouterProvider&gt; </span> </b>
                  All data router objects are passed to this component to render your app and enable the rest of the data APIs.

Due to the decoupling of fetching and rendering in the design of the data APIs, you should create your router outside of the React tree with a statically defined set of routes. For more information on this design, please see the  <a href="https://remix.run/blog/remixing-react-router" target="_blank"> Remixing React Router </a> blog post and the <a href="https://www.youtube.com/watch?v=95B8mnhzoCM" target="_blank">When to Fetch</a> conference talk.

<b>fallbackElement</b>
If you are not server rendering your app, createBrowserRouter will initiate all matching route loaders when it mounts. During this time, you can provide a fallbackElement to give the user some indication that the app is working. Make that static hosting TTFB count!

<b>future</b>
An optional set of Future Flags to enable. We recommend opting into newly released future flags sooner rather than later to ease your eventual migration to v7.
                  `,
          code1: `// fallbackElement
                  &lt;RouterProvider
  router={router}
  fallbackElement={&lt;SpinnerOfDoom /&gt;}
/&gt;

//future
function App() {
  return (
    &lt;RouterProvider
      router={router}
      future={{ v7_startTransition: true }}
    /&gt;
  );
}
`
        },
        {
          text1: `<Outlet>
                    <Link>
                    <NavLink>
                  `,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "useLoaderData",
      note: [
        {
          text1: `<b><span style="color:red">useLoaderData</span></b>
                  useLoaderData is a hook provided by React Router (starting from version 6.4) that allows components to access data loaded for a route. It is part of the new data loading APIs that simplify data fetching in your applications.

                  The <b>useLoaderData</b> hook in React Router 6 is a powerful tool that allows you to fetch data for your routes and make it available to your components before they are rendered. This can be useful for a number of reasons, such as improving performance, preventing empty states, and providing a better user experience.

<b>Why is useLoaderData useful?</b>
Here are some of the benefits of using the <u>useLoaderData</u> hook:

<u>Improved performance</u>: By fetching data for your routes before they are rendered, you can improve the performance of your application by reducing the number of network requests that are made.
<u>Prevented empty states</u>: By making data available to your components before they are rendered, you can prevent empty states from being displayed to your users.
<u>Better user experience</u>: By providing your users with data as soon as possible, you can improve the user experience of your application.

<b>How to use useLoaderData</b>
To use the <u>useLoaderData hook</u>, you first need to define a loader function. A loader function is a function that fetches data for a route.

Once you have defined a loader function, you can use the <u>useLoaderData</u> hook in your route components to access the data that was fetched by the loader function.

The <u>useLoaderData</u> hook will return the data that was fetched by the loader function for the current route. In this example, the <u>useLoaderData</u> hook will return an array of posts.

After route actions are called, the data will be revalidated automatically and return the latest result from your loader.

Note that <u>useLoaderData</u> does not initiate a fetch. It simply reads the result of a fetch React Router manages internally, so you don't need to worry about it refetching when it re-renders for reasons outside of routing.

This also means data returned is stable between renders, so you can safely pass it to dependency arrays in React hooks like <u>useEffect</u>. It only changes when the loader is called again after actions or certain navigations. In these cases the identity will change (even if the values don't).

You can use this hook in any component or any custom hook, not just the Route element. It will return the data from the nearest route on context.

<b>Conclusion</b>
The <u>useLoaderData</u> hook is a powerful tool that can be used to improve the performance, prevent empty states, and provide a better user experience for your React applications.
`,
          code1: `import { useLoaderData } from 'react-router-dom';

const PostsComponent = () => {
  const posts = useLoaderData();

  if (posts.isLoading) {
    return &lt;div&gt;Loading...&lt;/div&gt;;
  }

  if (posts.isError) {
    return     return &lt;div&gt;Error loading posts.&lt;/div&gt;;
  }

  // Render the posts
  return (
    &lt;ul&gt;
      {posts.data.map((post) =&gt; (
        &lt;li key={post.id}&gt;{post.title}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
};

export default PostsComponent;

// Define a loader function to fetch the posts
const fetchPosts = async () => {
  const response = await fetch('https://api.example.com/posts');
  return await response.json();
};

// Register the PostsComponent route with the router
const router = createBrowserRouter([
  {
    path: '/posts',
    element: PostsComponent,
    loader: fetchPosts,
  },
]);

// In this example, the "useLoaderData" hook is used to fetch the posts from an API before the "PostsComponent" is rendered. If the posts are still loading, a loading indicator is displayed. If there is an error loading the posts, an error message is displayed. Otherwise, the posts are rendered.
`
        },
        {
          text1: `Differences
The first thing to be aware of is the presence of a handful of new Data APIs that only work on routes defined via the new data routers (i.e., createBrowserRouter). These include a few categories of APIs:

Route-level data APIs such as loader, action, shouldRevalidate, handle, and lazy
In-component data hooks such as useLoaderData, useActionData, useFetcher, useMatches, useNavigation, etc.
Error-handling APIs such as route.errorElement, route.ErrorBoundary, and useRouteError
The rest of the APIs that existed prior to v6.4.0 are still usable in both BrowserRouter and RouterProvider apps. These include common hooks/components such as useNavigate, useLocation, useParams, <Link>, <Outlet />, etc.`,
          code1: `
import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  Outlet,
  useParams,
  useLoaderData,
} from 'react-router-dom';

// Components
const Home = () => {
  return &lt;h2&gt;Home&lt;/h2&gt;;
};

const NavBar = () => {
  return (
    &lt;nav&gt;
      &lt;ul&gt;
        &lt;li&gt;&lt;Link to=&quot;/&quot;&gt;Home&lt;/Link&gt;&lt;/li&gt;
        &lt;li&gt;&lt;Link to=&quot;/about&quot;&gt;About&lt;/Link&gt;&lt;/li&gt;
        &lt;li&gt;&lt;Link to=&quot;/users&quot;&gt;Users&lt;/Link&gt;&lt;/li&gt;
        &lt;li&gt;&lt;Link to=&quot;/user/1&quot;&gt;User 1&lt;/Link&gt;&lt;/li&gt;
        &lt;li&gt;&lt;Link to=&quot;/user/2&quot;&gt;User 2&lt;/Link&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/nav&gt;
  );
};

const Layout = () => (
  &lt;div&gt;
    &lt;NavBar /&gt;
    &lt;Outlet /&gt;
  &lt;/div&gt;
);

const About = () => &lt;h2&gt;About Page&lt;/h2&gt;;

const UserProfile = () => {
  const userData = useLoaderData();

  return (
    &lt;div&gt;
      &lt;h2&gt;User Profile for {userData.name}&lt;/h2&gt;
      &lt;p&gt;Email: {userData.email}&lt;/p&gt;
      &lt;p&gt;Phone: {userData.phone}&lt;/p&gt;
    &lt;/div&gt;
  );
};

const Users = () => {
  const users = useLoaderData();
  return (
    &lt;&gt;
      {users.map((u) =&gt; (
        &lt;Link to={\`/user/\${u.id}\`} key={u.id}&gt;
          &lt;p&gt;{u.name}&lt;/p&gt;
        &lt;/Link&gt;
      ))}
    &lt;/&gt;
  );
};

// Error Boundary Component
const ErrorBoundary = () => <h2>Oops! Something went wrong.</h2>;

// Loader Functions
const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) throw new Error('Failed to fetch users');
  return await response.json();
};

const fetchUserProfile = async ({ params }) => {
  const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${params.id}\`);
  if (!response.ok) throw new Error('User not found');
  return await response.json();
};

// -------- App.js -----------
// Define your routes. Without using "createRoutesFromElements"
// const routes = [
//   {
//     path: &#39;/&#39;,
//     element: &lt;Layout /&gt;,
//     errorElement: &lt;ErrorBoundary /&gt;,
//     children: [
//       { index: true, element: &lt;Home /&gt; },
//       { path: &#39;about&#39;, element: &lt;About /&gt; },
//       { path: &#39;users&#39;, element: &lt;Users /&gt;, loader: fetchUsers },
//       { path: &#39;user/:id&#39;, element: &lt;UserProfile /&gt;, loader: fetchUserProfile },
//     ],
//   },
// ];

// Create routes using createRoutesFromElements
const routes = createRoutesFromElements(
  &lt;&gt;
    &lt;Route path=&quot;/&quot; element={&lt;Layout /&gt;}&gt;
      &lt;Route index element={&lt;Home /&gt;} errorElement={&lt;ErrorBoundary /&gt;} /&gt;
      &lt;Route path=&quot;/about&quot; element={&lt;About /&gt;} /&gt;
      &lt;Route path=&quot;/users&quot; element={&lt;Users /&gt;} loader={fetchUsers} /&gt;
      &lt;Route path=&quot;/user/:id&quot; element={&lt;UserProfile /&gt;} loader={fetchUserProfile} errorElement={&lt;ErrorBoundary /&gt;} /&gt;
    &lt;/Route&gt;
  &lt;/&gt;
);

// Create a router instance
const router = createBrowserRouter(routes);

function App() {
  return (
    &lt;div&gt;
      &lt;RouterProvider router={router} /&gt;
    &lt;/div&gt;
  );
}

export default App;

`
        },
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
      section: `Code Splitting`,
      title: "Code splitting",
      note: [
        {
          text1: `Code splitting consists of separating the code into several packages or components that can be loaded on demand or in parallel. This means that they are not loaded until they are needed.

          <b>Code splitting</b> is a performance optimization technique in React where the application's JavaScript code is divided into smaller chunks, allowing parts of the app to be loaded only when they are needed, rather than loading the entire app at once.

          Code splitting is a technique in web development, especially within single-page applications (SPAs) built with frameworks like React, Angular, and Vue, that involves dividing your application's code into smaller, more manageable chunks. Instead of loading the entire application's code at once, code splitting enables you to load only the code that's needed for the initial render or for specific user interactions.
          
          <b>The benefits of code splitting are</b>:
The speed at which a website loads and displays content becomes faster.
The interaction time improves.
The percentage of users who abandon the web page without interacting with it decreases.

1- Profile.tsx (Ex : 1)
        
2- About.tsx
3- Contact.tsx
4- FAQs.tsx
5- Login.tsx

<a href="https://dev.to/franklin030601/code-splitting-in-react-js-4o2g" target="_blank">code-splitting-in-react-js</a>`,
          code1: `// --------- Ex : 1 -----------
          export const Profile = () =&gt; {
    return (
        &lt;div&gt;Profile&lt;/div&gt;
    )
}
    

//--------- PrivateRoutes ---------- 
export const PrivateRoutes = () =&gt; {
  return (
    &lt;&gt;
      &lt;NavBar /&gt;
      &lt;Routes&gt;
        &lt;Route path=&#39;profile&#39; element={ &lt;Profile /&gt; } /&gt;
        &lt;Route path=&#39;about&#39;   element={ &lt;About /&gt;   } /&gt;
        &lt;Route path=&#39;contact&#39; element={ &lt;Contact /&gt; } /&gt;
        &lt;Route path=&#39;faqs&#39;    element={ &lt;FAQs /&gt;    } /&gt;

        &lt;Route path=&#39;/*&#39;      element={&lt;Navigate to=&#39;/profile&#39; replace /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/&gt;
  )
}


// ---------- PublicRoutes ------------
export const PublicRoutes = () =&gt; {
  return (
    &lt;Routes&gt;
      &lt;Route path=&#39;login&#39; element={ &lt;Login /&gt; } /&gt;

      &lt;Route path=&#39;/*&#39; element={&lt;Navigate to=&#39;/login&#39; replace /&gt;} /&gt;
    &lt;/Routes&gt;
  )
}


//-------------- App ---------------
const isAuthenticated = false

const App = () =&gt; {
  return (
    &lt;BrowserRouter&gt;
      &lt;Routes&gt;
        {
          (isAuthenticated)
            ? &lt;Route path=&quot;/*&quot; element={&lt;PrivateRoutes /&gt;} /&gt;
            : &lt;Route path=&quot;/*&quot; element={&lt;PublicRoutes /&gt;} /&gt;
        }
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  )
}
export default App




//---------------- Final Example --------------
import { lazy, Suspense } from &#39;react&#39;;
import { BrowserRouter, Navigate, Route, Routes } from &#39;react-router-dom&#39;;
import { NavBar } from &#39;./components/NavBar&#39;;
// import { About, Contact, FAQs, Profile, Login } from &#39;./pages&#39;

const Profile = lazy(() =&gt; import(&#39;./pages/Profile&#39;));
const About = lazy(() =&gt; import(&#39;./pages/About&#39;));
const Contact = lazy(() =&gt; import(&#39;./pages/Contact&#39;));
const FAQs = lazy(() =&gt; import(&#39;./pages/FAQs&#39;));
const Login = lazy(() =&gt; import(&#39;./pages/Login&#39;));

const isAuthenticated = false

const App = () =&gt; {
  return (
    &lt;BrowserRouter&gt;
      &lt;Routes&gt;
        {
          (isAuthenticated)
            ? &lt;Route path=&quot;/*&quot; element={&lt;PrivateRoutes /&gt;} /&gt;
            : &lt;Route path=&quot;/*&quot; element={&lt;PublicRoutes /&gt;} /&gt;
        }
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  )
}
export default App

export const PublicRoutes = () =&gt; {
  return (
    &lt;Routes&gt;
      &lt;Route path=&#39;login&#39; element={&lt;Suspense fallback={&lt;&gt;...&lt;/&gt;}&gt; &lt;Login /&gt;&lt;/Suspense&gt;} /&gt;
      &lt;Route path=&#39;/*&#39; element={&lt;Navigate to=&#39;/login&#39; replace /&gt;} /&gt;
    &lt;/Routes&gt;
  )
}

export const PrivateRoutes = () =&gt; {
  return (
    &lt;&gt;
      &lt;NavBar /&gt;
      &lt;Routes&gt;
        &lt;Route path=&#39;profile&#39; element={&lt;Suspense fallback={&lt;&gt;...&lt;/&gt;}&gt; &lt;Profile /&gt;&lt;/Suspense&gt;} /&gt;
        &lt;Route path=&#39;about&#39; element={&lt;Suspense fallback={&lt;&gt;...&lt;/&gt;}&gt; &lt;About /&gt;&lt;/Suspense&gt;} /&gt;
        &lt;Route path=&#39;contact&#39; element={&lt;Suspense fallback={&lt;&gt;...&lt;/&gt;}&gt; &lt;Contact /&gt;&lt;/Suspense&gt;} /&gt;
        &lt;Route path=&#39;faqs&#39; element={&lt;Suspense fallback={&lt;&gt;...&lt;/&gt;}&gt; &lt;FAQs /&gt;&lt;/Suspense&gt;} /&gt;
        &lt;Route path=&#39;/*&#39; element={&lt;Navigate to=&#39;/profile&#39; replace /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/&gt;
  )
}
`
        }
      ],
    },
    {
      id: 52,
      title: "Dynamic Import",
      note: [
        {
          text1: `Dynamic imports in React allow you to load modules (like components) on demand, improving performance by reducing initial load times and optimizing code splitting.
          
          Dynamic <b>imports</b> in React allow you to dynamically load JavaScript modules at runtime, which can significantly improve your application's performance and load times. This technique is particularly useful for code splitting and lazy loading, ensuring that only the necessary code is loaded when needed.

The import() function returns a Promise that resolves to the module you want to use dynamic import.
A normal import in JavaScript (using the <b>import</b> statement) does not return a Promise. It's a synchronous operation and returns the exported values from the imported module.

          <b>How It Works?</b>(Ex : 1)
✔️ We store the dynamically imported component in state (Component).
✔️ Clicking the button triggers import() manually.
✔️ No need for <b>Suspense</b> since React treats it as a normal component.


<b>How This Works</b>Ex : 2:
✔️ import() loads the module asynchronously.
✔️ setDynamicComponent() updates state only when the module is loaded.
✔️ React rerenders the component once it's available.`,
          code1: `//---------------- Ex : 1 -----------
          //App.jsx
          import React, { useState } from &#39;react&#39;;
const App = () =&gt; {
  const [Component, setComponent] = useState(null);

  const loadComponent = async () =&gt; {
    const { default: DynamicComponent } = await import(&#39;./DynamicComponent&#39;);
    setComponent(() =&gt; DynamicComponent);
  };

  return (
    &lt;div&gt;
      &lt;h1&gt;Dynamic Import Without Lazy &amp; Suspense&lt;/h1&gt;
      &lt;button onClick={loadComponent}&gt;Load Component&lt;/button&gt;
      {Component &amp;&amp; &lt;Component /&gt;}
    &lt;/div&gt;
  );
};
export default App;


//--------- DynamicComponent.jsx ----------
export default function DynamicComponent() {          
    return (
        &lt;&gt;
            &lt;h1&gt;Dynamic&lt;/h1&gt;
        &lt;/&gt;
    );
}



//------------------  Ex : 2 ------------
//App.jsx
//const MyComponent = import(&#39;./DynamicComponent&#39;); // Returns a Promise
import React, { useState, useEffect } from &quot;react&quot;;
const App = () =&gt; {
  const [DynamicComponent, setDynamicComponent] = useState(null);
  useEffect(() =&gt; {
    import(&quot;./DynamicComponent&quot;).then((module) =&gt; {
      setDynamicComponent(() =&gt; module.default); // Set the component in state
    });
  }, []);

  return (
    &lt;div&gt;
      &lt;h1&gt;Dynamic Import Example&lt;/h1&gt;
      {DynamicComponent ? &lt;DynamicComponent /&gt; : &lt;p&gt;Loading component...&lt;/p&gt;}
    &lt;/div&gt;
  );
};
export default App;



// DynamicComponent.jsx
export default function DynamicComponent() {

    return (
        &lt;&gt;
            &lt;h1&gt;Dynamic&lt;/h1&gt;
        &lt;/&gt;
    );
}

// ------------- Ex : 3 -----------
import {useEffect, useState} from &#39;react&#39;;

const MyComponent = () =&gt; {
  const [importedComponent, setImportedComponent] = useState(null);

  useEffect(() =&gt; {
    const importComponent = async () =&gt; {
      const module = await import(&#39;./Task1&#39;);
      const AnotherComponent = module.default;
      setImportedComponent(&lt;AnotherComponent /&gt;);
    };

    importComponent();
  }, []);

  return (
    &lt;div&gt;
      {importedComponent}
      &lt;div&gt;This is my functional component!&lt;/div&gt;
    &lt;/div&gt;
  );
};

export default MyComponent;
`
        },
        {
          text1: `<b>When to Use Dynamic Imports Inside useEffect?</b>

✅ When you want to lazy load a component without lazy() and Suspense
✅ When a module is needed only after a certain action (e.g., user clicks a button)
✅ When working with large third-party libraries (like lodash, moment, or d3.js)
✅ When optimizing bundle size and reducing initial load time
<b>1. Dynamic Import with Default Export</b>
A default export is when you export a single entity (like a function or a class) from a module as the default export. In the case of React components, you typically use default exports.
<b>2. Dynamic Import with Named Export</b>
A named export is when you export one or more specific elements (like functions, variables, or components) from a module with a specific name.`,
          code1: `//----------- Ex : 1 ----------
          // Here’s how you can dynamically import a component inside useEffect and store it in state.
          import React, { useState, useEffect } from "react";

const App = () => {
  const [DynamicComponent, setDynamicComponent] = useState(null);

  useEffect(() => {
    import("./DynamicComponent").then((module) => {
      setDynamicComponent(() => module.default);
    });
  }, []); // Runs only once when the component mounts

  return (
    &lt;div&gt;
      &lt;h1&gt;Dynamic Import Inside useEffect&lt;/h1&gt;
      {DynamicComponent ? &lt;DynamicComponent /&gt; : &lt;p&gt;Loading component...&lt;/p&gt;}
    &lt;/div&gt;
  );
};

export default App;

//----------- Ex : 2 ----------
// Example: Dynamically Importing a Function Inside "useEffect"
// You can also use "useEffect" to dynamically import utility functions.
import React, { useState, useEffect } from "react";

const App = () => {
  const [result, setResult] = useState(null);
  useEffect(() => {
    import("./mathUtils").then((module) => {
      const add = module.add;
      setResult(add(5, 3));
    });
  }, []);

  return (
    &lt;div&gt;
      &lt;h1&gt;Dynamic Import for Functions&lt;/h1&gt;
      {result !== null ? &lt;p&gt;Result: {result}&lt;/p&gt; : &lt;p&gt;Loading function...&lt;/p&gt;}
    &lt;/div&gt;
  );
};
export default App;


//----------- Ex : 3 ----------
// Example: Dynamic Import Based on User Action ("useEffect" with Dependency)
// If you want to load a module when a specific state changes, add a dependency to "useEffect".
import React, { useState, useEffect } from "react";

const App = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [DynamicComponent, setDynamicComponent] = useState(null);

  useEffect(() => {
    if (showComponent) {
      import("./DynamicComponent").then((module) => {
        setDynamicComponent(() => module.default);
      });
    }
  }, [showComponent]); // Runs when showComponent changes

  return (
    &lt;div&gt;
      &lt;h1&gt;Conditional Dynamic Import&lt;/h1&gt;
      &lt;button onClick={() =&gt; setShowComponent(true)}&gt;Load Component&lt;/button&gt;
      {showComponent &amp;&amp; DynamicComponent ? &lt;DynamicComponent /&gt; : null}
    &lt;/div&gt;
  );
};

export default App;


// Async/ await default export
//------------- Ex : 5 -----------
import { useEffect, useState } from 'react';

const MyComponent = () => {
  const [importedComponent, setImportedComponent] = useState(null);

  useEffect(() => {
    const importComponent = async () => {
      const module = await import('./AnotherComponent');
      const AnotherComponent = module.default;  // Access default export
      setImportedComponent(&lt;AnotherComponent /&gt;);
    };

    importComponent();
  }, []);

  return (
    &lt;div&gt;
      {importedComponent}
      &lt;div&gt;This is my functional component!&lt;/div&gt;
    &lt;/div&gt;
  );
};

export default MyComponent;




// Named export
//------------- Ex : 5 -----------
import { useEffect, useState } from 'react';

const MyComponent = () => {
  const [importedComponent, setImportedComponent] = useState(null);

  useEffect(() => {
    const importComponent = async () => {
      const module = await import('./AnotherComponent');
      const AnotherComponent = module.AnotherComponent;  // Using named export
      setImportedComponent(&lt;AnotherComponent /&gt;);
    };

    importComponent();
  }, []);

  return (
    &lt;div&gt;
      {importedComponent}
      &lt;div&gt;This is my functional component!&lt;/div&gt;
    &lt;/div&gt;
  );
};

export default MyComponent;
//---------------  AnotherComponent.jsx    ---------------
// Named export
import React from 'react';

export const AnotherComponent = () => {
  return &lt;div&gt;Another component loaded dynamically!&lt;/div&gt;;
};

`
        },
        {
          text1: `Dynamic Import of Redux Reducers (Code-Splitting in Redux)`,
          code1: `//  Setup: Store Configuration (store.js)
          import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {}, // Empty initially, will be populated dynamically
});

// Function to inject reducers dynamically
export const injectReducer = (key, reducer) => {
  if (!store.asyncReducers) store.asyncReducers = {};
  if (!store.asyncReducers[key]) {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(store.asyncReducers);
  }
};

export default store;

//------- DynamicComponent.js ------------
import React, { useEffect } from &quot;react&quot;;
import { useDispatch, useSelector } from &quot;react-redux&quot;;

const DynamicComponent = () =&gt; {
  const dispatch = useDispatch();
  const count = useSelector((state) =&gt; state.counter?.value);

  useEffect(() =&gt; {
    import(&quot;./counterSlice&quot;).then((module) =&gt; {
      const counterReducer = module.default;
      import(&quot;../store&quot;).then(({ injectReducer }) =&gt; {
        injectReducer(&quot;counter&quot;, counterReducer);
        dispatch({ type: &quot;counter/increment&quot; });
      });
    });
  }, [dispatch]);

  return (
    &lt;div&gt;
      &lt;h1&gt;Dynamic Redux Reducer&lt;/h1&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
    &lt;/div&gt;
  );
};

export default DynamicComponent;

`
        }
      ],
    },
    {
      id: 27,
      title: "Lazy loading - (Component-Based Splitting)",
      note: [
        {
          text1: `Lazy loading is a strategy that delays the loading of some assets (e.g., images) until they are needed by the user based on the user's activity and navigation pattern; typically, these assets are only loaded when they are scrolled into view.

                    lazy loading is an optimization technique or a design pattern in which the loading of an item, whether it's a picture, video, web page, music file, or document, is delayed until it is required, saving bandwidth and precious computing resources.

                    In simple terms, lazy loading is a design pattern. It allows you to load parts of your application on-demand to reduce the initial load time. For example, you can initially load the components and modules related to user login and registration. Then, you can load the rest of the components based on user navigation.
                    
                    lazy lets you defer loading component's code until it is rendered for the first time.
<span style="color:red"> const SomeComponent = lazy(load) </span>
Call <b>lazy</b> outside your components to declare a lazy-loaded React component:
<span style="color:red">
import { lazy } from 'react';
// Dynamic import using \`default\` export
const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));</span>

<b>Default in Dynamic Imports in React</b>
The <b>default</b> keyword in a <b>dynamic import</b> is related to <b>default exports</b> in JavaScript ES6.

In JavaScript, when a module exports a single value, it can be exported as a <b>default export</b>. You can use the <b>default</b> keyword in dynamic imports to refer to the default export of the module.

<b>Parameters</b> 
<b>load</b>: A function that returns a Promise or another thenable (a Promise-like object with a <b>then</b> method). React will not call <b>load</b> until the first time you attempt to render the returned component. After React first calls <b>load</b>, it will wait for it to resolve, and then render the resolved value's <b>.default</b> as a React component. Both the returned Promise and the Promise's resolved value will be cached, so React will not call <b>load</b> more than once. If the Promise rejects, React will <b>throw</b> the rejection reason for the nearest Error Boundary to handle.
<b>Returns </b>
<b>lazy</b> returns a React component you can render in your tree. While the code for the lazy component is still loading, attempting to render it will suspend. Use <b> &lt;Suspense&gt; </b> to display a loading indicator while it's loading.

<b>Lazy Loading in React JS</b> helps to optimize the performance of React applications. The data is only rendered when visited or scrolled it can be images, scripts, etc. Lazy loading helps to load the web page quickly and presents the limited content to the user that is needed for the interaction lazy loading can be more helpful in applications that have high-resolution images or data that alters the loading time of the application.

<b>Lazy Loading in React</b>:
Lazy loading is a technique in React that allows you to load components, modules, or assets asynchronously, improving the loading time of your application. React provides a built-in React.lazy() method and Suspense component to achieve lazy loading.

1) <b>Code-Splitting</b>: You split your code into smaller chunks, typically by creating separate bundles for different parts of your application.
2) <b>Dynamic Import</b>: Instead of importing components directly at the top of your file, you use dynamic import() to import them only when they are needed.
3) <b>React.lazy()</b>: You wrap the dynamic import() call with React.lazy(), which allows React to render a fallback component while the requested component is being loaded.

<b>Steps to Implement Lazy Loading</b>:
Recognize the component you want to Lazy Load. These are mostly Large or complex which is not necessary for all the users when the page loads.
Import the <b>lazy()</b> and Suspense components from the React package
Use the <b>lazy()</b> function to dynamically import the component you want to lazy load:
Note that the argument to the <b>lazy()</b> function should be a function that returns the result of the import() function. 
Wrap the lazy-loaded component in a <b>Suspense</b> component, which will display a fallback UI while the component is being loaded:

<b>React.lazy()</b>
React.lazy() allows developers to easily create components with dynamic imports and render them as normal components. When the component is rendered, it will automatically load the bundle that contains the rendered component.

You need to provide a single input parameter to call <b>React.lazy()</b>. It accepts a function as an input parameter, and that function should return a promise after loading the component using <b>import()</b>. Finally, the returned promise from <b>React.lazy()</b> will give you a module with a default export containing the React component.

<b>Advantages of Lazy Loading</b>
=> Reduces initial loading time by reducing the bundle size.
=> Reduces browser workload.
=> Improves application performance in low bandwidth situations.
=> Improves user experience at initial loading.
=> Optimizes resource usage.
<b>advantages</b>:
<u>Faster Initial Load Time</u>: By only loading the necessary components when they are needed, lazy loading reduces the initial bundle size of your application. This results in faster load times, especially for large applications with many components or heavy assets.
<u>Improved Performance</u>: Smaller initial bundle sizes lead to quicker parsing and execution by the browser, resulting in improved overall performance. Users experience faster page load times and smoother interactions, particularly on slower networks or devices.
<u>Reduced Network Usage</u>: Lazy loading decreases the amount of data transferred over the network during the initial page load. This can be beneficial for users on limited data plans or slower connections, as it reduces the time required to download and render the initial content.
<u>Optimized Resource Usage</u>: Components or resources that are not immediately needed are deferred until they are required, optimizing resource usage and minimizing memory consumption. This can help improve the efficiency of your application, especially on devices with limited resources.
<u>Enhanced User Experience</u>: By prioritizing the loading of critical content and deferring non-essential components, lazy loading can enhance the user experience. Users can interact with the core functionality of the application more quickly, leading to higher user satisfaction and engagement.
<u>Scalability and Maintainability</u>: Lazy loading promotes a modular approach to development, allowing you to split your codebase into smaller, more manageable chunks. This makes it easier to maintain and scale your application over time, as you can add new features or components without significantly impacting the initial load time.


<b>Disadvantages of Lazy Loading</b>
=> Not suitable for small-scale applications.
=> Placeholders can slow down quick scrolling.
=> Requires additional communication with the server to fetch resources.
=> Can affect SEO and ranking.

<b>Importing Named Exports Dynamically:</b>
If MyComponent was exported as a <b>named export</b> (not default), you would need to import it differently.
                    `,
          code1: `
                    // Implement Lazy Loding with React.Lazy method
const MyComponent = React.lazy(() => import('./MyComponent'));

&lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
      &lt;MyComponent /&gt;
&lt;/Suspense&gt;

//------------
//Example : 1
//Parent.js
import React from "react";
import { Suspense, lazy } from "react";

const MyComponent1 = lazy(() => import('./MComponent1'))
const MyComponent2 = lazy(() => import('./MComponent2'))

function LazyLoadingApp() {
  return (
    &lt;&gt;
      &lt;h1&gt; Lazy Load&lt;/h1&gt;
      &lt;Suspense fallback={&lt;div&gt;Component1 are loading please wait...&lt;/div&gt;}&gt;
        &lt;MyComponent1 /&gt;
        &lt;MyComponent2 /&gt;
      &lt;/Suspense&gt;
    &lt;/&gt;
  );
}
export default LazyLoadingApp;

// MyComponent1.js

import React from "react";
function MyComponent1() {
  return (
    &lt;&gt;
      &lt;p&gt; myComponent1 &lt;/p&gt;
    &lt;/&gt;
  );
}
export default MyComponent1;

// MComponent2.js
import React, { useEffect, useState } from "react";
function MComponent2() {
    const [val, setVal] = useState(0)

    useEffect(() => {
        for (let i = 0; i < 1000000; i++) {
            setVal(val => val + i)
        }
    }, [])

    return (
        &lt;&gt;
            &lt;p&gt; myComponent2 { val }&lt;/p&gt;
        &lt;/&gt;
    );
}
export default MComponent2;

//---------------
//Example : 2
//Parent.js

import { useState, Suspense, lazy } from 'react';
import Loading from './Loading.js';

const MarkdownPreview = lazy(() => delayForDemo(import('./MarkdownPreview.js')));

export default function MarkdownEditor() {
  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState('Hello, **world**!');
  return (
    &lt;&gt;
      &lt;textarea value={markdown} onChange={e =&gt; setMarkdown(e.target.value)} /&gt;
      &lt;label&gt;
        &lt;input type=&quot;checkbox&quot; checked={showPreview} onChange={e =&gt; setShowPreview(e.target.checked)} /&gt;
        Show preview
      &lt;/label&gt;
      &lt;hr /&gt;
      {showPreview &amp;&amp; (
        &lt;Suspense fallback={&lt;Loading /&gt;}&gt;
          &lt;h2&gt;Preview&lt;/h2&gt;
          &lt;MarkdownPreview markdown={markdown} /&gt;
        &lt;/Suspense&gt;
      )}
    &lt;/&gt;
  );
}

// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

// Loading.js
export default function Loading() {
    return &lt;p&gt;&lt;i&gt;Loading...&lt;/i&gt;&lt;/p&gt;;
  }
  
// MarkdownPreview.js
export default function MarkdownPreview({ markdown }) {
  return (
    &lt;&gt;
        &lt;p&gt;{markdown}&lt;/p&gt;
    &lt;/&gt;
  );
}



//------------- Ex : 3 -----------
// Without default Export (Named Exports)
import React, { Suspense, lazy } from 'react';

// Use dynamic import for named export
const MyComponent = lazy(() => import('./MyComponent').then(module => ({ default: module.MyComponent })));

function App() {
  return (
    <div>
      &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
        &lt;MyComponent /&gt;
      &lt;/Suspense&gt;
    </div>
  );
}
export default App;

// Named export ------- AnotherComponent.jsx -------
import React from 'react';
export const AnotherComponent = () => {
  return &lt;div&gt;Another component loaded dynamically!&lt;/div&gt;;
};

`
        }
      ],
    },
    {
      id: 52,
      title: "React Error Boundary",
      note: [
        {
          text1: `   If the other module fails to load (for example, due to network failure), it will trigger an error. You can handle these errors to show a nice user experience and manage recovery with Error Boundaries. Once you’ve created your Error Boundary, you can use it anywhere above your lazy components to display an error state when there’s a network error.`,
          code1: `// ----------- ErrorBoundary.jsx ---------- 
          import React, { Component } from &#39;react&#39;;

class ErrorBoundary extends Component {
  state = { hasError: false, error: null, errorInfo: null };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an external service here
    console.error(&quot;Error caught in ErrorBoundary:&quot;, error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        &lt;div&gt;
          &lt;h1&gt;Something went wrong.&lt;/h1&gt;
          {/* You can use the error details in your fallback UI */}
        &lt;/div&gt;
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;



// ----------- App.jsx ---------- 
import React, { useState } from 'react';
import ErrorBoundaryFunctional from './Task1';

const BuggyComponent = () => {
  const [shouldThrowError, setShouldThrowError] = useState(false);

  if (shouldThrowError) {
    throw new Error('I crashed!');
  }

  return (
    &lt;div&gt;
      &lt;h1&gt;No error here!&lt;/h1&gt;
      &lt;button onClick={() =&gt; setShouldThrowError(true)}&gt;Trigger Error&lt;/button&gt;
    &lt;/div&gt;
  );
};

const App = () => {
  return (
    &lt;ErrorBoundaryFunctional&gt;
      &lt;BuggyComponent /&gt;
    &lt;/ErrorBoundaryFunctional&gt;
  );
};

export default App;


`
        },
        {
          text1: `Functinal compnent`,
          code1: `//   --------------  BuggyComponent.jsx  ---------------
          import React, { useState } from &#39;react&#39;;

const BuggyComponent = () =&gt; {
  const [shouldThrowError, setShouldThrowError] = useState(false);
  const [hasError, setHasError] = useState(false); // To control if an error should be shown

  const handleClick = () =&gt; {
    try {
      if (shouldThrowError) {
        // Simulate an error
        throw new Error(&#39;I crashed!&#39;);
      }
    } catch (error) {
      // Catch the error and set state to display an error message
      console.error(&#39;Caught error:&#39;, error);
      setHasError(true); // This will show an error message in the UI
    }
  };

  return (
    &lt;div&gt;
      {hasError ? (
        &lt;div&gt;
          &lt;h1&gt;Something went wrong!&lt;/h1&gt;
          &lt;p&gt;The error message is: I crashed!&lt;/p&gt;
        &lt;/div&gt;
      ) : (
        &lt;div&gt;
          &lt;h1&gt;No error here!&lt;/h1&gt;
          &lt;button onClick={() =&gt; {
            setShouldThrowError(true); // Enable error throwing
            handleClick(); // Attempt to trigger the error
          }}&gt;
            Trigger Error
          &lt;/button&gt;
        &lt;/div&gt;
      )}
    &lt;/div&gt;
  );
};

export default BuggyComponent;



// ------------- ErrorBoundary.jsx  -------------
// src/components/ErrorBoundary.tsx
import React, { useState, useEffect } from &#39;react&#39;;

const ErrorBoundary = ({ children }) =&gt; {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  // This effect simulates catching errors that happen in child components
  useEffect(() =&gt; {
    const handleError = (error) =&gt; {
      setHasError(true);
      setError(error);
    };

    window.addEventListener(&#39;error&#39;, (event) =&gt; {
      handleError(event.error);
    });

    return () =&gt; {
      window.removeEventListener(&#39;error&#39;, (event) =&gt; {
        handleError(event.error);
      });
    };
  }, []);

  if (hasError) {
    return (
      &lt;div&gt;
        &lt;h1&gt;Something went wrong!&lt;/h1&gt;
        &lt;p&gt;{error?.message}&lt;/p&gt;
      &lt;/div&gt;
    );
  }

  return &lt;&gt;{children}&lt;/&gt;;
};

export default ErrorBoundary;


// ------------- App.jsx ---------- 
import React from &#39;react&#39;;
import BuggyComponent from &#39;./BuggyComponent&#39;;
import ErrorBoundary from &#39;./ErrorBoundary&#39;;

const App = () =&gt; {
  return (
    &lt;ErrorBoundary&gt;
      &lt;BuggyComponent /&gt;
    &lt;/ErrorBoundary&gt;
  );
};

export default App;


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
      title: "Suspense for Code Splitting",
      note: [
        {
          text1: `<b>React.lazy</b> takes a function that must call a dynamic <b>import()</b>. This must return a <b>Promise</b> which resolves to a module with a <b>default</b> export containing a React component.

The lazy component should then be rendered inside a <b>Suspense</b> component, which allows us to show some fallback content (such as a loading indicator) while we're waiting for the lazy component to load.
The <b>fallback</b> prop accepts any React elements that you want to render while waiting for the component to load. You can place the <b>Suspense</b> component anywhere above the lazy component. You can even wrap multiple lazy components with a single <b>Suspense</b> component.`,
          code1: `
          
          // --------------- Ex : 2 ---------
          // You can even wrap multiple lazy components with a single Suspense
          import React, { Suspense } from &#39;react&#39;;

const OtherComponent = React.lazy(() =&gt; import(&#39;./OtherComponent&#39;));
const AnotherComponent = React.lazy(() =&gt; import(&#39;./AnotherComponent&#39;));

function MyComponent() {
  return (
    &lt;div&gt;
      &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
        &lt;section&gt;
          &lt;OtherComponent /&gt;
          &lt;AnotherComponent /&gt;
        &lt;/section&gt;
      &lt;/Suspense&gt;
    &lt;/div&gt;
  );
}`
        }
      ],
    },
    {
      id: 52,
      title: "React Router Code Splitting(Route based Code Splitting)",
      note: [
        {
          text1: `
          
          The code written for the UsersPage will be loaded only when the user navigates to the /users path which will decrease the bundle size for the first load and increase the overall performance.(Ex : 1)`,
          code1: `// ------------- Ex : 1 ------------
          import React, { lazy, Suspense } from &#39;react&#39;;
import { BrowserRouter as Router, Route, Switch } from &#39;react-router-dom&#39;;

const AdminPage = lazy(() =&gt; import(&#39;./AdminPage&#39;));
const UsersPage = lazy(() =&gt; import(&#39;./UsersPage&#39;));

const App = () =&gt; {
  return (
    &lt;Router&gt;
      &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
        &lt;Switch&gt;
          &lt;Route path=&quot;/&quot; exact component={AdminPage} /&gt;
          &lt;Route path=&quot;/users&quot; component={AdminPage} /&gt;
        &lt;/Switch&gt;
      &lt;/Suspense&gt;
    &lt;/Router&gt;
  );
};

export default App;
          
          
// ------------- Ex : 2 ------------
          import React, { Suspense, lazy } from &#39;react&#39;;
import { BrowserRouter as Router, Routes, Route } from &#39;react-router-dom&#39;;

const Home = lazy(() =&gt; import(&#39;./routes/Home&#39;));
const About = lazy(() =&gt; import(&#39;./routes/About&#39;));

const App = () =&gt; (
  &lt;Router&gt;
    &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
      &lt;Routes&gt;
        &lt;Route path=&quot;/&quot; element={&lt;Home /&gt;} /&gt;
        &lt;Route path=&quot;/about&quot; element={&lt;About /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/Suspense&gt;
  &lt;/Router&gt;
);`
        },
        {
          text1: ``,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "Webpack and Code Splitting",
      note: [
        {
          text1: `<b>Understanding Code-Splitting</b>
At its core, code-splitting is a technique that involves breaking down a large JavaScript bundle into smaller, more manageable chunks. These chunks, also known as bundles, are loaded asynchronously, allowing for faster initial page loads and better overall performance. Code-splitting ensures that only the necessary code is loaded when a specific feature or page is accessed, reducing the time it takes for the application to become interactive.

Webpack, a popular module bundler for JavaScript applications, offers built-in support for code-splitting. It provides a seamless way to create dynamic bundles that are loaded on demand, revolutionizing the way we optimize web applications.`,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "Bundle Analysis & Optimization",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "Preloading & Prefetching",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "Server-side Rendering (SSR) and Code Splitting",
      note: [
        {
          text1: `<b>What is Server-Side Rendering (SSR)?</b>
Server-side rendering (SSR) is the technique where the HTML of a web page is generated on the server rather than in the browser. When a user requests a page, the server sends a fully rendered HTML page to the browser, which is then displayed to the user. This contrasts with client-side rendering (CSR), where the browser loads an empty HTML page and then uses JavaScript to render the content dynamically.`,
          code1: ``
        }
      ],
    },
    {
      id: 13,
      section: `Class components`,
      title: "What are the different phases of component lifecycle?",
      note: [
        {
          text1: `The component lifecycle has three distinct lifecycle phases:

                  <b>Mounting</b>:The component is ready to mount in the browser DOM. This phase covers initialization from constructor(), getDerivedStateFromProps(), render(), and componentDidMount() lifecycle methods.
                  <b>In functional component</b>
                  To run logic when a functional component is mounted, you can use the useEffect hook with an empty dependency array []. This ensures that the effect will only run once, right after the initial render — effectively mimicking componentDidMount() in class components.

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
      id: 7,
      section: `VS (Difference Between)`,
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

                <div className='table-res'>
                  <table>
                      <tbody>
                          <tr>
                              <th>feature</th>
                              <th>vue</th>
                              <th>react</th>
                          </tr>
                          <tr>
                              <td>Component</td>
                              <td>It uses Templates to build different components</td>
                              <td>It uses JSX as a component format</td>
                          </tr>
                          <tr>
                              <td>Architecture</td>
                              <td>It features an adaptable architecture for various complex features.</td>
                              <td>It supports different state management libraries for complex features.</td>
                          </tr>
                          <tr>
                              <td>Features</td>
                              <td>It is used to develop progressive web applications.</td>
                              <td>It is used to develop single-page applications and mobile apps.</td>
                          </tr>
                          <tr>
                              <td>CSS</td>
                              <td>It supports CSS in JS by writing CSS code inside JS</td>
                              <td>It supports CSS by including script files in the JS file or by importing in component</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
                
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
    },
    {
      id: 45,
      title: "React and Angular.",
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
      id: 52,
      title: "What is the difference between React.memo() and useMemo()? When would you use each?",
      note: [
        {
          text1: `<b>1. React.memo()</b>
React.memo() is a higher-order component (HOC) used to optimize functional components by preventing unnecessary re-renders. It memorizes the component and only re-renders it if its props have changed.

<b>Usage</b>:
React.memo(Component) wraps a functional component and returns a memoized version of that component.

It will only re-render the component if the props passed to it have changed.

<b>When to use</b>:
Use React.memo() when you have a pure functional component that only depends on its props and doesn't have side effects or require internal state changes.

It’s useful when you have a component that receives complex objects or arrays as props that may not change often, as React would re-render it unnecessarily without memoization.

<b>Example</b>:
const MyComponent = React.memo((props) => {
  console.log("Rendering MyComponent");
  return &lt;div&gt;{props.value}&lt;/div&gt;;
});
export default MyComponent;

In this example, MyComponent will only re-render if props.value changes. If props.value remains the same between renders, React will skip rendering this component, thus improving performance.

<b>Props Comparison</b>:
By default, React.memo() does a shallow comparison of the props to determine if the component should re-render.
If you need a custom comparison, you can pass a second argument to React.memo():

React.memo(Component, (prevProps, nextProps) => {
  return prevProps.someProp === nextProps.someProp;
});
`,
          code1: ``
        },
        {
          text1: `<b>2. useMemo()</b>
<b>useMemo()</b> is a React hook that memorizes the result of a function (value calculation) between renders. It prevents the recalculation of a value unless the dependencies have changed.

<b>Usage</b>:
<b>useMemo(fn, deps)</b> takes a function <b>fn</b> and an array of dependencies <b>deps</b>. The value returned by <b>fn</b> is cached and will only be recalculated when any of the values in the dependency array <b>(deps)</b> change.

Unlike <b>React.memo()</b>, which is for <b>components</b>, <b>useMemo()</b> is for <b>values</b> (calculations, objects, arrays) inside components.

<b>When to use</b>:
Use <b>useMemo()</b> when you have expensive calculations or complex objects/arrays that don't need to be recalculated every render.
It's especially useful for preventing unnecessary recalculations of values when they depend on props or state that don't change on every render.


In this example, the <b>expensiveCalculation</b> function will only be called when num changes. Otherwise, the result will be reused, improving performance.`,
          code1: `const expensiveCalculation = (num) => {
  console.log("Expensive calculation");
  return num * 2;
};

const MyComponent = ({ num }) => {
  // Memoize the calculation to avoid recalculating on every render
  const memoizedValue = useMemo(() => expensiveCalculation(num), [num]);
  return &lt;div&gt;{memoizedValue}&lt;/div&gt;;
};`
        },
        {
          text1: `<table>
          <thead>
          <tr>
          <th><strong data-start="117" data-end="128">Feature</strong></th><th data-start="140" data-end="208"><strong data-start="142" data-end="160"><code data-start="144" data-end="158">React.memo()</code></strong></th><th data-start="208" data-end="276"><strong data-start="210" data-end="225"><code data-start="212" data-end="223">useMemo()</code></strong></th></tr></thead><tbody data-start="439" data-end="1797"><tr data-start="439" data-end="602"><td><strong data-start="441" data-end="452">Purpose</strong></td><td>Memoizes a component to prevent re-renders if props are unchanged</td><td>Memoizes values or computations to avoid unnecessary recalculation</td></tr><tr data-start="603" data-end="764"><td><strong data-start="605" data-end="613">Type</strong></td><td>Higher-order component (HOC)</td><td>React hook</td></tr><tr data-start="765" data-end="928"><td><strong data-start="767" data-end="776">Usage</strong></td><td>Wraps a component to optimize rendering based on props comparison</td><td>Memoizes a value or result of an expensive function or computation</td></tr><tr data-start="929" data-end="1138"><td><strong data-start="931" data-end="946">When to Use</strong></td><td>When you want to optimize re-rendering of a component based on its props</td><td>When you have expensive calculations or derived values that don't need to be recalculated on every render</td></tr><tr data-start="1139" data-end="1297"><td><strong data-start="1141" data-end="1162">What It Optimizes</strong></td><td>Component re-renders based on props</td><td>Expensive computations or derived values</td></tr><tr data-start="1298" data-end="1470"><td><strong data-start="1300" data-end="1316">Dependencies</strong></td><td>Compares previous and current props to decide whether to re-render</td><td>Takes a dependency array to determine when to recompute the memoized value</td></tr><tr data-start="1471" data-end="1630"><td><strong data-start="1473" data-end="1489">Return Value</strong></td><td>Returns a memoized version of the component</td><td>Returns the memoized value (result of the computation)</td></tr><tr data-start="1631" data-end="1797"><td><strong data-start="1633" data-end="1650">Example Usage</strong></td><td><code data-start="1658" data-end="1709">const MemoizedComponent = React.memo(MyComponent)</code></td><td><code data-start="1725" data-end="1795">const memoizedValue = useMemo(() =&gt; expensiveFunction(data), [data])</code></td></tr></tbody></table>
          
          <b>Quick Recap</b>:
<p><b>React.memo()</b> is used to avoid unnecessary re-renders of a component based on props.</p>
<b>useMemo()</b> is used to avoid re-calculating a value or performing expensive operations on every render.`,
          code1: ``
        },
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
      section: `General react questions`,
      title: "",
      note: [
        // {
        //   text1: ``,
        //   code1: ``
        // }
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
      id: 21,
      title: "What are error boundaries?",
      note: [
        {
          text1: `Error boundaries are a feature in React that allows you to catch JavaScript errors anywhere in a component tree and log those errors, display a fallback UI, or perform other actions. Error boundaries are useful for preventing unhandled errors from crashing the entire React application.

          React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed

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

                    The <b>componentDidCatch()</b> method works like a JavaScript catch <b>{ }</b> block, but for components. Only class components can be error boundaries. In practice, most of the time you'll want to declare an error boundary component once and use it throughout your application.
                    
                    getDerivedStateFromError(): This lifecycle method renders a fallback UI after an error is thrown. It is called during the render phase, so side effects are not permitted
componentDidCatch(): This method is used to log error information. It is called during the commit phase, so side effects are permitted
                    `,
          code1: `// ErrorBoundary.js
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }; // Update state to indicate an error has occurred
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return &lt;h1&gt;Something went wrong.&lt;/h1&gt;; // Fallback UI
    }

    return this.props.children; // Render children if no error
  }
}
export default ErrorBoundary;


// BuggyComponent.js
import React from 'react';

const BuggyComponent = () => {
  // This will simulate an error
  throw new Error('I crashed!'); 
  return &lt;div&gt;This will not render&lt;/div&gt;; // This line will never execute
};
export default BuggyComponent;

// App.js
import React from 'react';
import ErrorBoundary from './ErrorBoundary'; // Adjust the path if necessary
import BuggyComponent from './BuggyComponent'; // Adjust the path if necessary

const App = () => {
  return (
    &lt;ErrorBoundary&gt;
      &lt;h1&gt;My App&lt;/h1&gt;
      &lt;BuggyComponent /&gt; {/* This will throw an error */}
    &lt;/ErrorBoundary&gt;
  );
};

export default App;`
        }
      ],
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
      section: `effect, pure and rules`,
      title: ``,
    },
    {
      id: 52,
      title: "Components and Hooks must be pure",
      note: [
        {
          text1: `<a href="https://react.dev/reference/rules/components-and-hooks-must-be-pure" target="_blank">Components and Hooks must be pure</a>`,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "React calls Components and Hooks",
      note: [
        {
          text1: `<a href="https://react.dev/reference/rules/react-calls-components-and-hooks" target="_blank">React calls Components and Hooks</a>`,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "Rules of Hooks",
      note: [
        {
          text1: `<a href="https://react.dev/reference/rules/rules-of-hooks" target="_blank">Rules of Hooks</a>`,
          code1: ``
        }
      ],
    },
    {
      id: 52,
      title: "Use Refs to Store Old Reactive Values",
      note: [
        {
          text1: `non-reactive values in components and hooks. We can use this to store the values of things that we want to last between re-renders and won’t trigger a re-render when their values change.`,
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
      section: "ApolloClient (graphql)",
      title: "ApolloClient",
      note: [
        {
          text1: `Apollo is a library that brings together two incredibly useful technologies used to build web and mobile apps: React and GraphQL.
          
          <b>Apollo Client</b> is a powerful, flexible, and comprehensive state management library for JavaScript applications, specifically designed to manage data fetching and cache synchronization in a GraphQL environment. It is the client-side counterpart of Apollo Server, which helps you query, mutate, and manage data in your GraphQL-enabled applications.

          React was made for creating great user experiences with JavaScript. GraphQL is a very straightforward and declarative new language to more easily and efficiently fetch and change data, whether it is from a database or even from static files.
          
          Apollo Client is a comprehensive state management library for JavaScript. It enables you to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating your UI.

Apollo Client helps you structure code in an economical, predictable, and declarative way that's consistent with modern development practices. `,
          code1: ``
        },
        {
          text1: `Apollo Client is UI framework agnostic, which is super beneficial. You could use it with Angular, Vue, React or even native iOS and Android applications. The frontend application sends the GraphQL query to the Apollo Client, which processes the query and requests data from the GraphQL server. Note that the Apollo Client is agnostic of your GraphQL server's technology. It is compatible across any build setup and GraphQL API.

The GraphQL server then sends the data response back to the Apollo Client. Which then normalizes and stores the data. The frontend application receives the UI updates. Apollo Client basically does some of the hard lifting work for the frontend application. It also provides intelligent caching out of the box.

<b>Integrate Apollo Client</b>
Installation
The very first step is to install the following packages.
npm install @apollo/client graphql

<b>apollo/client</b>: Contains everything you need to setup Apollo Client 
<b>graphql</b>: Provides logic for parsing GraphQL queries.

<b>Imports</b>
In the root of your app, which is usually index.js or App.js, let’s get the imports ready.

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

<b>Create Apollo Client</b>
initialize the Apollo Client within the app.

const client = new ApolloClient({
  uri: ”https://my-example-url.com”, // Your running GraphQL server URL
  cache: new InMemoryCache()
});

Within the root of your app, initialize an instance of the Apollo Client as shown above and provide it the GraphQL server URL. This can also be a local schema path.

<b>Connect Apollo Client to React with Apollo Provider</b>
The next step is to connect the Apollo Client to React with the Apollo Provider component. It wraps the React app and places the client on the context. This allows access to the Apollo Client from all the components within the app. Wrap the provider within the root of your application.
&lt;ApolloProvider client = {client}&gt;
  &lt;App /&gt;
&lt;/ApolloProvider&gt;

<b>Consume GraphQL API and Execute Queries</b>
The initial setup work is done. Now we are ready to actually consume the GraphQL API and request data using GraphQL queries.

<b>useQuery Hook</b>
Queries provides clients the power to ask for exactly what they need and nothing more.

<i>The useQuery is a React hook, which is the API for executing queries in an Apollo application.</i>

First we write the GraphQL query that we want to execute, using the gql symbol. Below is the query, that queries for the fields we want to display on the conference sessions page.

const ALL_SESSIONS = gql\`
  query sessions {
    sessions {
    id
    title
    startsAt
    day
    room
    level
    speakers {
      id
      name
    }    
  }
}\`;

const { loading, error, data } = useQuery(ALL_SESSIONS);

The useQuery hook returns the loading and error states that are tracked by the Apollo Client. This will help the frontend component code for loading and error states to display to the user. When the result of the query comes back from the GraphQL Server, the data property is populated. The data property contains the json response from the GraphQL API.

Let’s add the hook to a component, this will ensure that when the component renders, the useQuery hook is executed. The AllSessionList component renders the sessions when the data is returned after executing the query. The loading sessions message is displayed briefly, until the data is returned.

function AllSessionList() {
  const { loading, error, data } = useQuery(ALL_SESSIONS);
  if (loading) return &lt;p&gt;Loading Sessions..&lt;/p&gt;;
  if (error) return &lt;p&gt;Error loading sessions!&lt;/p&gt;;
  return data.sessions.map((session) => (
    &lt;SessionItem
      key={session.id}
      session={{
        ...session,
      }}
    /&gt;
  ));
}
`,
          code1: `//-------- Ex : 1 ----------
          // src/queries.js
import { gql } from '@apollo/client';

export const GET_USER_BY_ID = gql\`
  query GetUserById($id: String!) {
    user(id: $id) {
      id
      username
      email
      role
    }
  }
\`;
 

//----------- UserDetail.jsx --------

import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '../../graphql/queries.js';

const UserDetail = () => {
  const [userId, setUserId] = useState('1'); // Default user ID (can be dynamic)

  // Use Apollo Client's useQuery hook to fetch user by ID
  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: { id: userId },
  });

  if (loading) return &lt;div&gt;Loading...&lt;/div&gt;;
  if (error) return &lt;div&gt;Error: {error.message}&lt;/div&gt;;

  return (
    &lt;div&gt;
      &lt;h2&gt;User Details&lt;/h2&gt;
      {data.user ? (
        &lt;div&gt;
          &lt;p&gt;&lt;strong&gt;ID:&lt;/strong&gt; {data.user.id}&lt;/p&gt;
          &lt;p&gt;&lt;strong&gt;Username:&lt;/strong&gt; {data.user.username}&lt;/p&gt;
          &lt;p&gt;&lt;strong&gt;Email:&lt;/strong&gt; {data.user.email}&lt;/p&gt;
          &lt;p&gt;&lt;strong&gt;Role:&lt;/strong&gt; {data.user.role}&lt;/p&gt;
        &lt;/div&gt;
      ) : (
        &lt;p&gt;No user found with ID {userId}&lt;/p&gt;
      )}

      {/* Buttons to switch users */}
      &lt;div&gt;
        &lt;button onClick={() =&gt; setUserId(&#39;1&#39;)}&gt;User 1&lt;/button&gt;
        &lt;button onClick={() =&gt; setUserId(&#39;2&#39;)}&gt;User 2&lt;/button&gt;
        &lt;button onClick={() =&gt; setUserId(&#39;3&#39;)}&gt;User 3&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  );
};

export default UserDetail;


//-------- ApolloClient.js --------
// ApolloClient.js
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Create Apollo Client instance
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',  // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});

export { client };


//---------- App.jsx -------
import { ApolloProvider } from '@apollo/client';
import { client } from './ApolloClient';
const App = () => {
  return (
      &lt;ApolloProvider client={client}&gt;
          &lt;PrivateMainRoute /&gt;
      &lt;/ApolloProvider&gt;
  );
}

export default App;
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
      ],
    },
    {
      id: 52,
      title: "ApolloClient",
      note: [
        {
          text1: ``,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "ApolloClient",
      note: [
        {
          text1: ``,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      section: "Micro Frontend Architecture",
      title: "Micro Frontend Architecture in React JS",
      note: [
        {
          text1: `<b>Micro Frontend Architecture in React JS</b> is a way of structuring a large React application by splitting it into smaller, independently developed, and deployed micro-frontends. These micro-frontends can be built using React or other frameworks, but in this case, we'll focus on React. Each part of the UI (or feature) is developed as a separate React app, which can be independently updated, deployed, and integrated into a larger, cohesive UI.
          
          
          <b>Key Concepts of Micro Frontend Architecture in React</b>:
<b>Componentization</b>:
In a typical React app, components are already modular. In a micro frontend setup, you take this concept further by breaking the app down into larger pieces, with each piece having its own separate React app or module.

<b>Independent Deployment</b>:
Each micro frontend can be developed, tested, and deployed independently. For example, the user profile page could be developed as a separate React app, the shopping cart as another, and they can each be deployed separately.

<b>Integration of Micro Frontends</b>:
The micro frontends need to be integrated at runtime to appear as one cohesive application. This can be done in a number of ways, like using single-spa, Module Federation (Webpack 5), or iframe-based integration.

<b>Shared State Management</b>:
Micro frontends need to communicate with each other and share states (like user authentication or shopping cart data). There are different ways to handle this, such as through <b>global stores</b> (e.g., using Redux or Context API) or <b> custom events.</b>







<b>How Micro Frontends Work in React</b>:
<b>1. Designing the Micro Frontends</b>:
Start by identifying the various features or domains of your app that can be isolated. For example:
-> Header (a navigation bar)
-> Product List
-> User Profile
-> Shopping Cart

Each of these can be a separate React app, developed by different teams if necessary.

<b>2. Choosing an Integration Method</b>:
There are several ways to integrate React micro frontends:

<b>i) Single-spa (Most Common Approach)</b>:
Single-spa is a popular JavaScript framework for orchestrating multiple micro frontends. It allows you to load multiple micro-frontends (even if they are built with different frameworks like React, Angular, or Vue) into the same application.

You configure each React app as a micro frontend, and then use single-spa to manage the routing, loading, and rendering of these apps.



<b>ii) Webpack Module Federation (for Shared Code)</b>:
Webpack 5 introduced Module Federation, which allows micro frontends to share code (like React or utility functions) at runtime. This is especially useful when you want to avoid duplicating common libraries or dependencies across micro frontends.


<b>iii) Iframe-Based Integration</b>:
You can also load each micro frontend as an iframe within the main application. This is a simpler, but less flexible, approach. However, it might be suitable for completely isolated micro-frontends or legacy apps that cannot be deeply integrated.

Example:
const IframeMicroFrontend = () => (
  &lt;iframe src=&quot;http://localhost:3001&quot; title=&quot;Product List&quot; /&gt;
);


<b>3. Communication Between Micro Frontends</b>:
<b>Global State Management</b>:
You can use React Context API, Redux, or MobX to manage shared state (like user authentication or the shopping cart). This helps ensure that all micro frontends can access and update shared data.


Example using React Context API:
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

<b>Custom Events or Pub/Sub Mechanism</b>:
Another approach to share data or trigger actions across micro frontends is through Custom Events or using a Pub/Sub system (e.g., RxJS, EventEmitter).

Example using custom events:
// Micro frontend A (emitting event)
window.dispatchEvent(new CustomEvent('userUpdated', { detail: { user } }));

// Micro frontend B (listening to event)
window.addEventListener('userUpdated', (e) => {
  const updatedUser = e.detail;
  // Update state or UI based on the new user data
});`,
          code1: `// Example of integration using single-spa:
import { registerApplication, start } from 'single-spa';

registerApplication(
  'header',
  () => import('./header-app'), // Dynamically load the header React app
  location => location.pathname === '/' // Only load when on homepage
);

registerApplication(
  'product-list',
  () => import('./product-list-app'),
  location => location.pathname === '/products'
);
start();



// Example of Webpack Module Federation configuration:
// webpack.config.js of Host Application
module.exports = {
  name: 'host-app',
  remotes: {
    'product-list': 'productListApp@http://localhost:3001/remoteEntry.js',
  },
};

// webpack.config.js of Micro Frontend (Product List)
module.exports = {
  name: 'productListApp',
  exposes: {
    './ProductList': './src/ProductList',
  },
};
// Here, the host app dynamically imports the ProductList component from a remote micro frontend at runtime.`
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
      title: "Login Redirect or Post-login Redirect",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ],
    },
  ]
}