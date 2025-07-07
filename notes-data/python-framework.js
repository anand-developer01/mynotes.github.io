const Links1 = 'python-notes'
const Links2 = 'python-ai'
const Links3 = 'python-framework'
const Links4 = 'python-projects'

const isHighlighted = 'python-framework'

const pythonData = {
    pythonFramework: [
                {
            id: 1,
            title: "develop projects",
            note: [
                {
                    text1: `After this, build portfolio projects like:

    Movie App
    Task Manager
    Personal Finance Tracker
    Blog Platform`,
                    code1: ``
                }
            ]
        },  
        {
            id: 1,
            section: 'django',
            title: "django",
            note: [
                {
                    text1: `Django is a high-level, free, and open-source web framework written in Python. It is designed to facilitate rapid development and pragmatic, clean design in web applications. 

                    Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.

                    <b>How does Django Work?</b>
Django follows the MVT design pattern (Model View Template).

<b>Model</b> - The data you want to present, usually data from a database.
<b>View</b> - A request handler that returns the relevant template and content - based on the request from the user.
<b>Template</b> - A text file (like an HTML file) containing the layout of the web page, with logic on how to display the data.

<b>Model</b>
-> The model provides data from the database.
-> In Django, the data is delivered as an Object Relational Mapping (ORM), which is a technique designed to make it easier to work with databases.
-> The most common way to extract data from a database is SQL. One problem with SQL is that you have to have a pretty good understanding of the database structure to be able to work with it.
-> Django, with ORM, makes it easier to communicate with the database, without having to write complex SQL statements.
-> The models are usually located in a file called models.py.

<b>View</b>
-> A view is a function or method that takes http requests as arguments, imports the relevant model(s), and finds out what data to send to the template, and returns the final result.
-> The views are usually located in a file called views.py.

<b>Template</b>
-> A template is a file where you describe how the result should be represented.
-> Templates are often .html files, with HTML code describing the layout of a web page, but it can also be in other file formats to present other results, but we will concentrate on .html files.
-> Django uses standard HTML to describe the layout, but uses Django tags to add logic:
`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Install Django",
            note: [
                {
                    text1: `(Optional but recommended): Create a virtual environment first using python -m venv venv and activate it.
                    
                    -> python -m venv my_django
                    -> source my_django/bin/activate
                    -> pip install django

                    <b>🏗️ Step 2: Create Your First Django Project</b>
                    -> django-admin startproject mysite
                    -> cd mysite
                    This creates a basic project structure like:

mysite/
    manage.py
    mysite/
        __init__.py
        settings.py
        urls.py
        wsgi.py

<b>🚀 Step 3: Run the Development Server</b>
-> python manage.py runserver

Visit: http://127.0.0.1:8000/ in your browser — you’ll see the Django welcome page 🎉
🧱 Step 4: Create an App
-> python manage.py startapp blog
Now your project structure will include a blog directory for your app.

<b>✅ Step 5: Add App to Settings</b>
Open mysite/settings.py and add 'blog', to INSTALLED_APPS:
INSTALLED_APPS = [
    ...
    'blog',
]

<b>🗂️ Step 6: Create Your First View</b>
In blog/views.py:
from django.http import HttpResponse
def home(request):
    return HttpResponse("Hello, Django!")

<b>🔗 Step 7: Map the URL</b>

Create blog/urls.py:

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
]

Then include it in the main mysite/urls.py:

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('blog.urls')),
]

Now, visiting http://127.0.0.1:8000/ will show Hello, Django!
`,
                    code1: ``
                }
            ]
        },
                {
            id: 1,
            section: `Python (FastAPI or Flask) for backend APIs`,
            title: "Flask",
            note: [
                {
                    text1: `Flask is a lightweight and powerful web framework for Python. It's often called a "micro-framework" because it provides the essentials for web development without unnecessary complexity. Unlike Django, which comes with built-in features like authentication and an admin panel, Flask keeps things minimal and lets us add only what we need.
                    
                    <b>Flask</b> is a <b>micro web framework</b> for Python.
Called "micro" because it's <b>lightweight</b> and <b>simple</b>, yet very <b>powerful</b>.
Perfect for building <b>APIs, small web apps</b>, or even <b>full-stack websites</b>.

                    <b>Interesting Facts about Flask</b>
Here are some interesting facts about Flask:

<b>Microframework</b>: Flask is considered a "micro" web framework because it is lightweight and simple to use, with minimal dependencies. It doesn't come with the full set of tools that more extensive frameworks like Django provide, giving developers more control and flexibility over the application structure.
<b>Werkzeug and Jinja2</b>: Flask is built on top of two powerful libraries:
<b>Werkzeug</b>: A comprehensive WSGI web server library that helps manage the application's request and response cycles.
vJinja2</b>: A templating engine that allows you to use dynamic HTML in your application, making it easy to build web pages with variables and loops.
<b>Routing</b>: Flask's routing system is extremely simple and intuitive. You define routes with decorators that map URLs to Python functions. This makes it very easy to set up and control the flow of your application.
<b>No ORM by Default</b>: Unlike Django, Flask does not come with a built-in Object-Relational Mapping (ORM) tool like Django's ORM. Instead, it lets developers choose their ORM, such as SQLAlchemy or simply use raw SQL.
<b>RESTful API Support</b>: Flask is popular for building RESTful APIs. Its simplicity and flexibility make it a great choice for building APIs and many developers use it for creating microservices and backends for single-page applications.
<b>Development Server</b>: Flask comes with a built-in development server that makes it easy to test and run the application locally. This server is lightweight and designed for use during development rather than production.


<b>Flask()</b>	Creates the app
<b>@app.route()</b>	Maps URL to a function
<b>debug=True</b>	Auto reloads app and shows error messages`,
                    code1: `// ------------- Ex : 1 ------------
                    //Basic Flask App Example
//📁 File: app.py

from flask import Flask

//# Create Flask app
app = Flask(__name__)

//# Route: Home page
@app.route('/')
def home():
    return "Hello, Flask!"

//------------
    @app.route('/about')
def about():
    return "This is the About page"


//# Run the app
if __name__ == '__main__':
    app.run(debug=True)
    
//     Make sure Flask is installed:
// pip install flask

// Run the app:
// python app.py

// Open browser and go to:
// http://localhost:5000/ // Hello, Flask! -> in browser

// This is just a reminder: Flask's built-in server is only for development/testing.
// In production, you should use a WSGI server like Gunicorn, uWSGI, or Waitress behind Nginx/Apache.


// ------------- Ex : 2 -------------
from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/products')
def get_products():
    return jsonify(["Mobile", "Laptop", "Headphones"])

if __name__ == '__main__':
    app.run(debug=True)

Output:
// http://localhost:5000/products
// [
//   "Mobile",
//   "Laptop",
//   "Headphones"
// ]

//------------- Ex : 3 -------------
from flask import Flask, request, redirect, render_template_string

app = Flask(__name__)

# In-memory task list
tasks = []

# Jinja2 HTML Template (fixed: no enumerate)
html_template = """
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;To-Do App&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;📝 To-Do List&lt;/h2&gt;

    &lt;form method=&quot;POST&quot; action=&quot;/add&quot;&gt;
        &lt;input type=&quot;text&quot; name=&quot;task&quot; placeholder=&quot;Enter a task&quot; required&gt;
        &lt;button type=&quot;submit&quot;&gt;Add Task&lt;/button&gt;
    &lt;/form&gt;

    &lt;ul&gt;
        {% for task in tasks %}
        &lt;li&gt;
            {{ loop.index }}. {{ task }}
            &lt;form method=&quot;POST&quot; action=&quot;/delete&quot; style=&quot;display:inline;&quot;&gt;
                &lt;input type=&quot;hidden&quot; name=&quot;index&quot; value=&quot;{{ loop.index0 }}&quot;&gt;
                &lt;button type=&quot;submit&quot;&gt;❌ Delete&lt;/button&gt;
            &lt;/form&gt;
        &lt;/li&gt;
        {% else %}
        &lt;li&gt;No tasks yet.&lt;/li&gt;
        {% endfor %}
    &lt;/ul&gt;
&lt;/body&gt;
&lt;/html&gt;
"""

@app.route('/')
def index():
    return render_template_string(html_template, tasks=tasks)

@app.route('/add', methods=['POST'])
def add():
    task = request.form.get('task')
    if task:
        tasks.append(task)
    return redirect('/')

@app.route('/delete', methods=['POST'])
def delete():
    index = int(request.form.get('index'))
    if 0 <= index < len(tasks):
        tasks.pop(index)
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)

`
                }
            ]
        },
        {
            id: 1,
            title: "request.form (Flask Forms + POST)",
            note: [
                {
                    text1: `<b>request.form</b> is a <b>MultiDict</b> (dictionary-like object) provided by Flask, which holds <b>form input data sent via the HTTP POST or PUT method</b> from an HTML form.
                    
->                     Access form fields like &lt;input&gt;, &lt;textarea&gt;, &lt;select&gt;
-> Only works with form submissions using method="POST" or method="PUT"

In a Flask App, we have our own Webpage (Client) and a Server. The Server should process the data.  The Request, in Flask, is an object that contains all the data sent from the Client to Server. This data can be recovered using the GET/POST Methods. POST is used when your application expects user input to be received by command or an HTTP request, while GET gets all the information before it even has a chance for submission. Using both methods at once gives perfect freedom but still requires complex UI patterns like AJAX calls etc, with most common applications being frameworks where multiple forms are necessary such as Slack Webhooks, MailgunMailserver, and eCommerce Commerce Framework. With Flask-Request class instead, we don't have any need anymore since this API allows us flexible handling of many other situations.
`,
                    code1: `&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;&lt;title&gt;Flask Form&lt;/title&gt;&lt;/head&gt;
&lt;body&gt;
  &lt;h2&gt;User Registration&lt;/h2&gt;
  &lt;form action=&quot;/submit&quot; method=&quot;POST&quot;&gt;
    Name: &lt;input type=&quot;text&quot; name=&quot;username&quot;/&gt;&lt;/br&gt;
    Email: &lt;input type=&quot;email&quot; name=&quot;email&quot;/&gt;&lt;/br&gt;
    Age: &lt;input type=&quot;number&quot; name=&quot;age&quot;/&gt;&lt;/br&gt;
    &lt;input type=&quot;submit&quot; value=&quot;Register&quot;/&gt;
  &lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;


                    
                    from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def show_form():
    return render_template('form.html')

@app.route('/submit', methods=['POST'])
def handle_submit():
    # Access form data
    username = request.form['username']  # same as input name="username"
    email = request.form.get('email')    # safer (doesn't throw error if missing)
    age = request.form.get('age')

    return f"Hello {username}, your email is {email} and you're {age} years old."

if __name__ == '__main__':
    app.run(debug=True)
`
                }
            ]
        },
        {
            id: 1,
            title: "Werkzeug (pronunciation వర్క్‌-సూక్ (Var-k-suukh))- (Backend HTTP toolkit) and Jinja2",
            note: [
                {
                    text1: `<b>Werkzeug</b> (pronounced “ver-ksuukh”) is a <b>WSGI (Web Server Gateway Interface)</b> utility library in Python that powers Flask’s core request/response handling.
                    
                    WSGI is a specification whose job is to create a standard interface between traditional web servers (like nginx) and Python web applications.

                    <b>What is Werkzeug?</b>
Werkzeug is a collection of libraries that can be used to create a WSGI (Web Server Gateway Interface) compatible web application in Python.

A WSGI (Web Server Gateway Interface) server is necessary for Python web applications since a web server cannot communicate directly with Python. WSGI is an interface between a web server and a Python-based web application.

The term “object” should not be misconstrued as requiring an actual object instance: a function, method, class, or instance with a <b>__call__</b> method are all acceptable for use as an application object.

                    It provides tools for:
    Parsing HTTP requests
    Building and returning HTTP responses
    Managing sessions, URL routing, middleware, and exceptions

    Werkzeug is a collection of libraries that you can use to build Web Server Gateway Interface (WSGI) compliant web applications in Python. It started as a simple collection of miscellaneous utilities for WSGI applications and has grown into one of the most advanced WSGI utility libraries. The choice of template engine, database adapter, and request handling is entirely up to the developer. In other words, don't enforce dependencies. This includes a debugger, request, and response objects, cache control objects, cookie handling, file uploads, and many community added add-ons. Released under the BSD license.
Installing:
<b>pip install -U Werkzeug</b>

WSGI is the Python standard for how web servers talk to web applications (like Flask or your <b>MovieApp</b>).

When the WSGI server (like Gunicorn, uWSGI, or Werkzeug’s <b>run_simple</b>) receives a request, it calls your application like this:

response = application(environ, start_response)

<b>render_template()</b> is a Flask function used to <b>render (display) an HTML page</b> by combining a <b>Jinja2 template</b> with data from Python. <b>Ex : 1</b>
render_template("file.html", key=value) // Pass variables to template
Really, an application object is just a callable that accepts two arguments — environ and start_response.

The <b>environ</b> variable is a dictionary containing essential information about the request as well as the server configuration. Here is where you can find things like the request method, the query string, and the request headers.

The <b>start_response</b> method is a callback that can be used to initiate an HTTP response. This is what you call when you have finished processing the request, calculated the response data, and want to return the actual response.

<b>Ex : 2 </b>The <b>MovieApp</b> class implements a WSGI-compatible web application, which processes requests from different users and generates responses back to the users. Here's the flow of how this class interfaces with a WSGI server:

The environment (<b>environ</b>) is automatically processed in the <b>Request</b> class to create a <b>request</b> object. The <b>request</b> is then processed in <b>dispatch_request()</b>. For this initial example, <b>dispatch_request()</b> returns a response of <b>'Hello World!'</b>. The response is then returned from <b>wsgi_app()</b>.

Flask Comparison:
<b>MovieApp</b> is an simplified version of the <b>Flask</b> class.

Within the <b>Flask</b> class, the <b>wsgi_app()</b> is the actual WSGI application that interfaces with the WSGI server. Also, <b>dispatch_request()</b> and <b>full_dispatch_request()</b> are used to do the request dispatching, which matches the URL to the applicable view function and handles exceptions.

<b>Request / Response Objects</b>
Your WSGI application is always passed two arguments. The WSGI “environment” and the WSGI <b>start_response</b> function that is used to start the response phase. The <b>Request</b> class wraps the <b>environ</b> for easier access to request variables (form data, request headers etc.).

<b>Request</b>	What the client/browser sends to your server
<b>Response</b>	What your server sends back to the client

<b>Ex : 3</b>
Because this is a very common task the Request object provides a helper for that. The above code can be rewritten like this

<b>@Request.application</b>	A Werkzeug decorator that converts a function into a WSGI application. It automatically parses the incoming environ and wraps it in a Request object.
<b>request.args.get('name', 'World!')</b>	Gets the name query parameter from the URL. If it doesn't exist, defaults to "World!".
<b>Response(...)</b>	Creates a proper HTTP response to be sent back to the browser.

<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>request.method</code></td>
      <td>HTTP method</td>
      <td><code>"GET"</code>, <code>"POST"</code></td>
    </tr>
    <tr>
      <td><code>request.args</code></td>
      <td>Query params (GET)</td>
      <td><code>?q=python → request.args['q']</code></td>
    </tr>
    <tr>
      <td><code>request.form</code></td>
      <td>Form data (POST)</td>
      <td><code>request.form['username']</code></td>
    </tr>
    <tr>
      <td><code>request.json</code></td>
      <td>JSON body</td>
      <td><code>request.json['email']</code></td>
    </tr>
    <tr>
      <td><code>request.headers</code></td>
      <td>HTTP headers</td>
      <td><code>request.headers['User-Agent']</code></td>
    </tr>
    <tr>
      <td><code>request.cookies</code></td>
      <td>Cookies sent by client</td>
      <td><code>request.cookies['session_id']</code></td>
    </tr>
    <tr>
      <td><code>request.path</code></td>
      <td>URL path</td>
      <td><code>"/home"</code></td>
    </tr>
    <tr>
      <td><code>request.url</code></td>
      <td>Full URL</td>
      <td><code>"http://localhost:5000/home"</code></td>
    </tr>
  </tbody>
</table>
    `,
                    code1: `// --------- Ex : 1 ----------
                    your_project/
├── app.py              ← your Flask app
└── templates/
    └────── user.html       ← put this here!


                    &lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello {{ name }}!&lt;/h1&gt;
    &lt;p&gt;You are {{ age }} years old.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;


from flask import Flask, render_template

app = Flask(__name__)

@app.route('/user/<name>/<int:age>')
def user(name, age):
    return render_template('user.html', name=name, age=age)

if __name__ == '__main__':
    app.run(debug=True)

// render_template('something.html')
// means it automatically looks in templates/ folder.  


// ------------ Ex : 2 ---------
from werkzeug.wrappers import Request, Response

class MovieApp(object):
    def __init__(self):
        pass

    def dispatch_request(self, request):
        return Response('Hello World!')

    def wsgi_app(self, environ, start_response):
        request = Request(environ)
        response = self.dispatch_request(request)
        return response(environ, start_response)

    def __call__(self, environ, start_response):
        return self.wsgi_app(environ, start_response)

def create_app():
    return MovieApp()

// # ✅ TESTING the dispatch_request directly
if __name__ == '__main__':
    app = create_app()
    fake_environ = {}  # A fake WSGI environment (normally provided by a WSGI server)
    request = Request(fake_environ)
    response = app.dispatch_request(request)
    print(response.get_data(as_text=True))  # → "Hello World!"



    // ----------- Ex : 3 ----------
from werkzeug.wrappers import Request, Response
from werkzeug.serving import run_simple

@Request.application
def application(request):
    name = request.args.get('name', 'World!')
    return Response(f"Hello {name}!", mimetype='text/plain')

if __name__ == '__main__':
    run_simple('localhost', 5001, application)

    // # http://localhost:5001/?name=Anand

`,
img: `../assets/images/python/werkzeug_flow_diagram.png`

                },
                                {
                    text1: `<b> environ – The Request Data</b>
    A dictionary containing all the details about the incoming HTTP request.
&lt;table border=&quot;1&quot; cellpadding=&quot;8&quot; cellspacing=&quot;0&quot;&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Key&lt;/th&gt;
      &lt;th&gt;Description&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;code&gt;&#39;REQUEST_METHOD&#39;&lt;/code&gt;&lt;/td&gt;
      &lt;td&gt;HTTP method like &lt;code&gt;&quot;GET&quot;&lt;/code&gt; / &lt;code&gt;&quot;POST&quot;&lt;/code&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;code&gt;&#39;PATH_INFO&#39;&lt;/code&gt;&lt;/td&gt;
      &lt;td&gt;The request URL path (e.g., &lt;code&gt;/home&lt;/code&gt;, &lt;code&gt;/api&lt;/code&gt;)&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;code&gt;&#39;QUERY_STRING&#39;&lt;/code&gt;&lt;/td&gt;
      &lt;td&gt;The part after &lt;code&gt;?&lt;/code&gt; in the URL (e.g., &lt;code&gt;name=anand&lt;/code&gt;)&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;code&gt;&#39;wsgi.input&#39;&lt;/code&gt;&lt;/td&gt;
      &lt;td&gt;The body stream (used for form or JSON data in POST requests)&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;code&gt;&#39;HTTP_USER_AGENT&#39;&lt;/code&gt;&lt;/td&gt;
      &lt;td&gt;The browser or client making the request&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;&lt;code&gt;&#39;SERVER_NAME&#39;&lt;/code&gt;, &lt;code&gt;&#39;SERVER_PORT&#39;&lt;/code&gt;&lt;/td&gt;
      &lt;td&gt;The hostname and port number of the server&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Jinja2 - (Frontend templating engine)",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Build a Flask REST API",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Bonus Fact: Extensibility",
            note: [
                {
                    text1: `<b>Flask-Login</b> (Authentication)

<b>Flask-Mail</b> (Email)

<b>Flask-Migrate<b> (Database migrations)

<b>Flask-CORS</b>, Flask-JWT, etc.`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "@app.route()",
            note: [
                {
                    text1: `So, does @app.route() come from Werkzeug?
✅ Answer: Indirectly, yes.
    <b>@app.route()</b> is part of Flask, but <b>Flask is built on top of Werkzeug</b>.
    Under the hood, Flask uses Werkzeug’s routing system to handle URLs, HTTP methods, and path matching.

<b>🧱 Structure Overview</b>
Flask
 └── Uses Werkzeug (routing, HTTP)
 └── Uses Jinja2 (templating)

So when you use:
@app.route("/home")
def home():
    return "Hello"

    Flask uses Werkzeug's <b>Map, Rule</b>, and <b>Request</b> classes to register and handle the route.

<b>📦 How It Works Internally</b>
Step-by-step:
    <b>@app.route()</b> adds a rule to the Flask app's internal URL map.
    That map is actually a <b>Werkzeug</b> Map object.
    When a request comes in, Flask uses <b>Werkzeug's router</b> to match the URL to your function.

<b>🧪 Deep Dive: Werkzeug in Flask</b>
Example of Werkzeug components being used directly:

from werkzeug.routing import Map, Rule
from werkzeug.wrappers import Request, Response
url_map = Map([
    Rule('/', endpoint='index'),
    Rule('/about', endpoint='about')
])

Flask wraps all this into the simpler <b>@app.route()</b> interface.

The @app.route in Flask is a decorator used to define routes within a Flask application. It maps a specific URL path to a Python function, known as a view function, which handles requests made to that URL.
`,
                    code1: `// --------- Ex : 1 -----------
                    from flask import Flask

# Step 1: Create Flask application
app = Flask(__name__)

# Step 2: Define route for the homepage
@app.route('/')
def index():
    return "Welcome to the homepage!"

# Step 3: Define route for the About page
@app.route('/about')
def about():
    return "This is the about page."

# Step 4: Run the app (debug=True shows errors in the browser)
if __name__ == '__main__':
    app.run(debug=True)
    
// Visit in your browser:
    // Home: http://127.0.0.1:5000/
    // About: http://127.0.0.1:5000/about
    `
                }
            ]
        },
        {
            id: 1,
            title: "topic",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "CORS Note - (flask-cors)",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
    ]
}