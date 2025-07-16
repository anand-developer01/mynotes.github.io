const Links1 = 'python-notes'
const Links2 = 'python-ai'
const Links3 = 'python-framework'
const Links4 = 'python-projects'

const isHighlighted = 'python-notes'

const pythonData = {
    pythonNote: [
        {
            id: 1,
            section: 'Introduction to Python',
            title: "What is Python?",
            note: [
                {
                    text1: `
                    
                    ✅ Core Python	variables, data types, functions, loops, dicts, lists
✅ OOP	classes, inheritance, encapsulation
✅ Data structures & algorithms	recursion, sorting, search, stacks, queues
✅ File handling	read/write files, JSON, CSV
✅ Exception handling	try-except, custom errors
✅ Modules & Packages	import, pip, virtual environments
✅ Advanced Python	decorators, generators, lambda, *args/**kwargs
✅ Standard Libraries	datetime, collections, itertools, os
✅ Tools	Jupyter, VS Code, pip, virtualenv
✅ Testing	unittest, pytest
✅ Real Projects	REST APIs, games, automation, data analysis, etc.

Note: It's just convention. Python follows PEP 8, which recommends <b>snake_case</b> for function and variable names, and <b>PascalCase</b> for class names.

EX : function name : show_my_name







🔲 Topics You Might Still Need to Cover
🔄 1. Django REST Framework - Advanced

Topic <b>-></b>	Description
🔲 ModelSerializer <b>-></b>    Simplifies serializer creation for models
🔲 ViewSets & Routers <b>-></b>     Cleaner way to handle CRUD using one class
🔲 Pagination <b>-></b>     For listing large sets of data
🔲 Filtering & Searching <b>-></b>  With filter_backends, SearchFilter, etc.
🔲 Permissions & Authentication <b>-></b>   JWT/Auth token, IsAuthenticated, etc.
🔲 Throttling & Rate Limiting <b>-></b>     To avoid API overuse
🔲 Custom API Responses <b>-></b>   Return custom error/success formats
🔲 Error Handling <b>-></b>     Handle validation or 404 errors properly
🛡️ 2. Security & Production Setup
Topic <b>-></b>     Description
🔲 CORS setup <b>-></b>     For frontend-backend communication
🔲 JWT or Token Auth <b>-></b>  For login/logout/token refresh
🔲 Deployment <b>-></b>     Using Heroku, Vercel, or other
🔲 Environment variables (.env) <b>-></b>   For hiding secrets like DB keys
🌐 3. Frontend Integration (Optional)

If you're planning React/Vue frontend:

    🔲 CORS

    🔲 API calls using axios or fetch

    🔲 Token-based login integration

📦 4. Bonus Topics (Real-World Usage)
Topic <b>-></b>     Description
🔲 Django Signals <b>-></b>     For post-save hooks, etc.
🔲 Background Tasks (Celery) <b>-></b>  For email, image processing, etc.
🔲 File Upload APIs <b>-></b>   Images, PDFs, etc.
🔲 Testing APIs <b>-></b>   With APITestCase or Postman
🔲 Swagger / API Docs <b>-></b>     Auto-generating API documentation
✅ Summary

You’ve already learned:

    Basic to intermediate DRF usage

    CRUD API development

    SQLite integration

    Admin usage

    Class-based and function-based views

👉 Next Suggested Steps:

If you're building an API project (like your Movie App), here's what I recommend next:

    ✅ Use ModelSerializer and ViewSet

    ✅ Add pagination, filtering, and search

    ✅ Implement login with JWT (using djangorestframework-simplejwt)

    ✅ Add Swagger API docs (drf_yasg or drf-spectacular)

    ✅ Deploy your API on Render, Railway, or Heroku


    //////////////////////////////////////////////////////////////
    <b>The PCPP1™ certification shows that the individual is familiar with the following concepts</b>:

    <b>Advanced use of classes and modelling real-life problems in the OOP categories</b>:
        Classes
        Instances
        Attributes
        Methods
        Class and instance data
        Shallow and deep operations
        Inheritance and polymorphism
        Extended function argument syntax and decorators
        Static and class methods
        Attribute encapsulation
        Composition and inheritance
        Advanced exceptions
        Copying object data
        Serialization
        Metaclasses

    <b>Best practices and standardization</b>:
        PEP8
        PEP 257
        Code layout
        Comments and docstrings
        Naming conventions
        String quotes and whitespaces
        Programming recommendations

    <b>GUI programming</b>:
        Events
        Widgets
        Geometry
        Tools and toolkits
        Conventions

    <b>The elements of network programming</b>:
        Network sockets
        Client-server communication
        JSON and XML files in network communication
        HTTP methods
        CRUD
        Building a simple REST client
    <b>File processing and communicating with a program's environment</b>:
        Processing files:<b> sqlite3, xml, csv, logging, and configparser</b>
        Communication: <b>os, datetime, io, and time</b>
`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Installing Python",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Naming convention in Python",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: 'Basic Syntax',
            title: "Python syntax and structure",
            note: [
                {
                    text1: ``,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "What does %d do in Python?",
            note: [
                {
                    text1: `The %d operator is used as a placeholder to specify integer values, decimals, or numbers. It allows us to print numbers within strings or other values. The %d operator is put where the integer is to be specified.`,
                    code1: `# declaring numeric variables
                    num = 2021

                    # concatenating numeric value within string
                    print("%d is here!!" % num)`
                }
            ]
        },
        {
            id: 1,
            title: "(f-string) : formatted string literal",
            note: [
                {
                    text1: `The f in strings like this:
                    f"Hello, {name}!"
                    is short for f-string, which stands for formatted string literal.
                    
                    <b>f-String Syntax</b>
f"some text {variable_or_expression} more text"

                    <b>What is an f-string?</b>
An f-string lets you insert variables or expressions directly into a string using {}.
It was introduced in Python 3.6 and makes string formatting easier and cleaner.
🔍 Without f-string (older way):
name = "Anand"
print("Hello, " + name + "!")

✅ With f-string (modern way):
name = "Anand"
print(f"Hello, {name}!")`,
                    code1: `//------------ Ex : 1 ---------
                    a = 10
b = 5
print(f"The sum of {a} and {b} is {a + b}")
//Output: The sum of 10 and 5 is 15`
                },
                {
                    text1: ``,
                    code1: ``
                },
            ]
        },
        {
            id: 1,
            title: "chained comparison",
            note: [
                {
                    text1: `Chained comparison is a way to write multiple comparisons in one clean, readable expression — just like you do in math.

                    Chained comparison, in programming, involves combining multiple comparison operations within a single expression, making the code more concise and readable. For example, instead of writing x > y and y > z, you can write x > y > z in Python. This allows you to check if multiple conditions are met in a sequence. 

                    Checking multiple conditions in a single expression is common in programming. In Python, comparison operator chaining allows us to write cleaner, more readable code when evaluating multiple conditions. Instead of using multiple and conditions, Python enables chaining comparisons directly in a mathematical-style expression.
                    `,
                    code1: `// ----------- Ex : 1 -----------
                    x = 5

if 1 < x < 10:
    print("x is between 1 and 10")

// This is equivalent to:
if 1 < x and x < 10:
    print("x is between 1 and 10")
    
    // ---------- Ex : 2 --------
    x, y, z = 5, 10, 20

if x < y <= z:
    print("y is greater than x and less than or equal to z")`
                }
            ]
        },
        {
            id: 1,
            section: `Python Control Statements`,
            title: "Iterative Statements / Repetition statement",
            note: [
                {
                    text1: `Iteration  / repetition refers to the execution of the same code multiple times in succession.
    Repetition of a set of statements in a program is made possible using looping constructs.

    => Looping constructs provide the facility to execute a set of statements in a program repetitively, based on a condition.
    => The statements in a loop are executed again and again as long as the particular logical condition remains true.
    => This condition is checked based on the value of a variable called the loop's control variable
    => When the condition becomes false, the loop terminates.

    => Repetition statements are called loops, and are used to repeat the same code multiple times in succession.
    => Python has two types of loops: Condition-Controlled and Count-Controlled
    => Condition-Controlled loop uses a true/false condition to control the number of times that it repeats - <b>while</b>. Basic syntax:
    while condition:
       statement(s) # notice the indent from of this line relative to the while

    Count-Controlled loop repeats a specific number of times - <b>for</b>. Basic syntax:

    for variable in [value1, value2, etc.]:
       statement(s) # notice the indent from of this line relative to the for
`,
                    code1: `//for variable in [value1, value2, etc.]:
//    statement(s) # notice the indent from of this line relative to the for

//    Examples of for loops
//    --------- Ex : 1 ---------
//    # This program demonstrates a simple for loop
//    # that uses a list of numbers.
   print('I will display the numbers 1 through 5.')
   for num in [1, 2, 3, 4, 5]:
       print num
//    Output:
//    I will display the numbers 1 through 5.
//    1
//    2
//    3
//    4
//    5

// ------------   Ex: 2 ----------
//    # This program also demonstrates a simple for
//    # loop that uses a list of strings.

colors = ['red', 'green', 'blue']
for col in colors:
  if col == 'green':
    print('I love green', col)

for name in ['Winken', 'Blinken', 'Nod']:
  print(name)

//    Output:
// I love green green
// Winken
// Blinken
// Nod

//    **** Using the \`range\` function with the for loop *****
//    "range" simplifies count-controlled "for" loops
// ------------   Ex: 3 ----------
   for num in range(5):
       print num
//    Numbers from 0 through and up till, but not including, 5 are generated. Equivalent to:
   for num in [0, 1, 2, 3, 4]:
       print num
//    Passing a second argument to range the first is used as the starting point and the second is used as the ending limit
   for num in range(1, 5):
       print num
//    Output:
//    1
//    2
//    3
//    4

// ------------   Ex: 4 ----------
//    By default the range function increments by 1, passing a third argument defines the step amount:
   for num in range(1, 10, 2):
       print num
//    Output:
//    1
//    3
//    5
//    7
//    9

// ------------   Ex: 5 ----------
//    The target value can be used in the loop:
//    # Print the table headings.
print ('%-10s%-10s' % ('Number', 'Square'))
print ('--------------------')

//    # Print the numbers 1 through 10
//    # and their squares.
for number in range(1, 11):
  square = number**2
  print ('%10d%10d' % (number, square))
//    Output:
//    Number    Square    
//    ------------------
//             1         1
//             2         4
//             3         9
//             4        16
//             5        25
//             6        36
//             7        49
//             8        64
//             9        81
//            10       100


// ------------   Ex: 6 ----------
print("1st example")

lst = [1, 2, 3]
for i in range(len(lst)):
     print(lst[i], end = " \\n")

print("2nd example")

for j in range(0,5):
    print(j, end = " \\n")
   `
                },
                {
                    text1: `In Python, while loops are used to execute a block of statements repeatedly until a given condition is satisfied. Then, the expression is checked again and, if it is still true, the body is executed again. This continues until the expression becomes false.

                    The following code iterates from 0 to 4 and prints each value using a <b>while</b> loop. It prints <b>End</b> to signify the end of the program after the loop is completed.`,
                    code1: ``
                },
                {
                    text1: `<b>Python for Loop with Strings</b>
A string is a sequence of Unicode letters, each having a positional index. Since, it is a sequence, you can iterate over its characters using the for loop.

<u>Example</u>
The following example compares each character and displays if it is not a vowel ('a', 'e', 'i', 'o', 'u')`,
                    code1: `zen = '''
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
'''
for char in zen:
  if char not in 'aeiou':
    print(char, end='')
`
                },
                {
                    text1: `<b>Python - For Else Loop</b>
Python supports an optional <b>else block</b> to be associated with a for loop. If a <b>else block</b> is used with a <b>for loop</b>, it is executed only when the for loop terminates normally.

The for loop terminates normally when it completes all its iterations without encountering a break statement, which allows us to exit the loop when a certain condition is met.

The following example illustrates the combination of an else statement with a for statement in Python. Till the count is less than 5, the iteration count is printed. As it becomes 5, the print statement in else block is executed, before the control is passed to the next statement in the main program.

<b>For-Else Construct without break statement</b>
As mentioned earlier in this tutorial, the else block executes only when the loop terminates normally i.e. without using break statement.
`,
                    code1: `for variable_name in iterable:
 #stmts in the loop
 .
 .
 .
else:
 #stmts in else clause
 .
 .

// ------------   Ex: 1 ----------
 for count in range(6):
   print ("Iteration no. {}".format(count))
else:
   print ("for loop over. Now in else block")
print ("End of for loop")

// Output:
// Iteration no. 0
// Iteration no. 1
// Iteration no. 2
// Iteration no. 3
// Iteration no. 4
// Iteration no. 5
// for loop over. Now in else block
// End of for loop


// ------------   Ex: 2 ----------
// In the following program, we use the for-else loop without break statement.
for i in ['T','P']:
   print(i)
else:
//    # Loop else statement
//    # there is no break statement in for loop, hence else part gets executed directly
   print("ForLoop-else statement successfully executed")

//    On executing, the above program will generate the following output -
// T
// P
// ForLoop-else statement successfully executed

// ------------   Ex: 3 ----------
// For-Else Construct with break statement
// In case of forceful termination (by using break statement) of the loop, else statement is overlooked by the interpreter and hence its execution is skipped.

for i in ['T','P']:
   print(i)
   break
else:
//    # Loop else statement
//    # terminated after 1st iteration due to break statement in for loop
   print("Loop-else statement successfully executed")

//    Output:
//    T
 `
                },
                {
                    text1: `<b>For-Else with break statement and if conditions</b>
If we use <b>for-else</b> construct with <b>break statement</b> and <b>if condition</b>, the <b>for loop</b> will iterate over the iterators and within this loop, you can use an <b>if block</b> to check for a specific condition. If the loop completes without encountering a <b>break statement</b>, the code in the else block is executed.`,
                    code1: `//The following program shows how else conditions works in case of break statement and conditional statements.
                    # creating a function to check whether the list item is a positive
# or a negative number
def positive_or_negative():
   # traversing in a list
   for i in [5,6,7]:
   # checking whether the list element is greater than 0
      if i>=0:
         # printing positive number if it is greater than or equal to 0
         print ("Positive number")
      else:
         # Else printing Negative number and breaking the loop
         print ("Negative number")
         break
   # Else statement of the for loop
   else:
      # Statement inside the else block
      print ("Loop-else Executed")
# Calling the above-created function
positive_or_negative()

// Output:-
// Positive number
// Positive number
// Positive number
// Loop-else Executed
                    `
                },
            ]
        },
        {
            id: 1,
            title: "While Loops",
            note: [
                {
                    text1: `<b>Python while Loop</b>
                    A <b>while loop</b> in Python programming language repeatedly executes a target statement as long as the specified boolean expression is true. This loop starts with <b>while keyword</b> followed by a boolean expression and colon symbol (:). Then, an indented block of statements starts.

Here, statement(s) may be a single statement or a block of statements with uniform indent. The condition may be any expression, and true is any non-zero value. As soon as the expression becomes false, the program control passes to the line immediately following the loop.`,
                    code1: `while expression:
   statement(s)

//    Example 1
// The following example illustrates the working of while loop. Here, the iteration run till value of count will become 5.

count=0
while count<5:
   count+=1
   print ("Iteration no. {}".format(count))

print ("End of while loop")

// Output :-
// Iteration no. 1
// Iteration no. 2
// Iteration no. 3
// Iteration no. 4
// Iteration no. 5
// End of while loop


//-----------------
// Example 2
// Here is another example of using the "while loop". For each iteration, the program asks for user input and keeps repeating till the user inputs a non-numeric string. The "isnumeric()" function returns true if input is an integer, false otherwise.

var = '0'
while var.isnumeric() == True:
   var = "test"
   if var.isnumeric() == True:
      print ("Your input", var)
print ("End of while loop")

// output:-
// enter a number..10
// Your input 10
// enter a number..100
// Your input 100
// enter a number..543
// Your input 543
// enter a number..qwer
// End of while loop
   `
                },
                {
                    text1: `<b>Python Infinite while Loop</b>
A loop becomes infinite loop if a condition never becomes FALSE. You must be cautious when using while loops because of the possibility that this condition never resolves to a FALSE value. This results in a loop that never ends. Such a loop is called an infinite loop.

An infinite loop might be useful in client/server programming where the server needs to run continuously so that client programs can communicate with it as and when required.`,
                    code1: `//Let's take an example to understand how the infinite loop works in Python:
                    var = 1
while var == 1 : # This constructs an infinite loop
   num = int(input("Enter a number :"))
   print ("You entered: ", num)
print ("Good bye!")

// output :-
// Enter a number :20
// You entered: 20
// Enter a number :29
// You entered: 29
// Enter a number :3
// You entered: 3
// Enter a number :11
// You entered: 11
// Enter a number :22
// You entered: 22
// Enter a number :Traceback (most recent call last):
//    File "examples\test.py", line 5, in
//       num = int(input("Enter a number :"))
// KeyboardInterrupt
`
                },
                {
                    text1: `<b>Python while-else Loop</b>
Python supports having an <b>else statement</b> associated with a <b>while loop</b>. If the <b>else statement</b> is used with a <b>while loop</b>, the <b>else statement</b> is executed when the condition becomes false before the control shifts to the main line of execution.`,
                    code1: `//Example
// The following example illustrates the combination of an else statement with a while statement. Till the count is less than 5, the iteration count is printed. As it becomes 5, the print statement in else block is executed, before the control is passed to the next statement in the main program.

count=0
while count<5:
   count+=1
   print ("Iteration no. {}".format(count))
else:
   print ("While loop over. Now in else block")
print ("End of while loop")

// Output:-
// Iteration no. 1
// Iteration no. 2
// Iteration no. 3
// Iteration no. 4
// Iteration no. 5
// While loop over. Now in else block
// End of while loop
`
                },
                {
                    text1: `<b>Single Statement Suites</b>
Similar to the <b>if</b> statement syntax, if your <b>while</b> clause consists only of a single statement, it may be placed on the same line as the while header.`,
                    code1: `flag = 0
while (flag): print ("Given flag is really true!")
print ("Good bye!")

// output:-
// Good bye!
`
                },
            ]
        },
        {
            id: 1,
            title: "break Statement",
            note: [
                {
                    text1: `Python <b>break statement</b> is used to terminate the current loop and resumes execution at the next statement, just like the traditional break statement in C.

The most common use for Python break statement is when some external condition is triggered requiring a sudden exit from a loop. The <b>break statement</b> can be used in both Python while and for loops.

If you are using nested loops in Python, the break statement stops the execution of the innermost loop and start executing the next line of code after the block.

<b>break</b> Statement with for loop
If we use break statement inside a for loop, it interrupts the normal flow of program and exit the loop before completing the iteration.
`,
                    code1: `looping statement:
   condition check:
      break

      //Example
// In this example, we will see the working of break statement in for loop.
for letter in 'Python':    
   if letter == 'h':
      break
   print ("Current Letter :", letter)
print ("Good bye!")

// Output:-
// Current Letter : P
// Current Letter : y
// Current Letter : t
// Good bye!
      `
                },
                {
                    text1: `<b>break</b> Statement with while loop
Similar to the for loop, we can use the break statement to skip the code inside while loop after the specified condition becomes TRUE.`,
                    code1: `var = 10                   
while var > 0:              
   print ('Current variable value :', var)
   var = var -1
   if var == 5:
      break

print ("Good bye!")

// Output:
// Current variable value : 10
// Current variable value : 9
// Current variable value : 8
// Current variable value : 7
// Current variable value : 6
// Good bye!
`
                },
                {
                    text1: `<b>break Statement with Nested Loops</b>:
In <b>nested loops</b>, one loop is defined inside another. The loop that enclose another loop (i.e. inner loop) is called as <b>outer loop</b>.

When we use a break statement with nested loops, it behaves as follows -
<span style="color:red">
=> When break statement is used inside the inner loop, only the inner loop will be skipped and the program will continue executing statements after the inner loop
=> And, when the break statement is used in the outer loop, both the outer and inner loops will be skipped and the program will continue executing statements immediate to the outer loop.
</span>
`,
                    code1: `//Example
// The following program demonstrates the use of break in a "for loop" iterating over a list. Here, the specified number will be searched in the list. If it is found, then the loop terminates with the "found" message.

no = 33
numbers = [11,33,55,39,55,75,37,21,23,41,13]
for num in numbers:
   if num == no:
      print ('number found in list')
      break
else:
   print ('number not found in list')

// Output:
// number found in list
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
            title: "Pass Statement",
            note: [
                {
                    text1: `The “pass” statement is a placeholder in Python code that signifies that a particular code block is empty or yet to be written. It is used to suppress errors and prevent unexpected behavior, and it is often employed in functions, classes, loops, and conditional statements.
                    
                    Python <b>pass statement</b> is used when a statement is required syntactically but you do not want any command or code to execute. It is a null which means nothing happens when it executes. This is also useful in places where piece of code will be added later, but a placeholder is required to ensure the program runs without errors.`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "What is Python?",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
                {
            id: 1,
            title: "if and elif",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: `Functions & Modules`,
            title: "Functions",
            note: [
                {
                    text1: `In Python, functions are reusable blocks of code that perform a specific task. They help you organize your code better, avoid repetition, and make it easier to read and maintain.
                    
                    <b>1. Define a Function</b>
Use the def keyword:
def greet():
    print("Hello, Anand!")

    You call (run) the function using its name followed by parentheses:
greet()

<b>2. Function with Parameters</b>
You can pass data into functions using parameters:

def greet(name):
    print(f"Hello, {name}!")

greet("Anand")
greet("John")

<b> 3. Function with Return Value </b>
Use the return keyword to return a result:

def add(a, b):
    return a + b

result = add(10, 5)
print(result)  # Output: 15

<b> 4. Default Parameters </b>
You can give default values to parameters:

def greet(name="Guest"):
    print(f"Hello, {name}!")

greet()          # Hello, Guest!
greet("Anand")   # Hello, Anand!

<b> 5. Keyword Arguments </b>
You can use the parameter names when calling a function:

def show_info(name, age):
    print(f"{name} is {age} years old.")

function call (run) : show_info(age=30, name="Anand")

<b> 6. Variable-Length Arguments </b>
    *args: For many positional arguments
    **kwargs: For many keyword arguments

def add_all(*args):
    return sum(args)

print(add_all(1, 2, 3, 4))  # Output: 10
`,
                    code1: `//----------- Ex : 1 -----------
                    def send_emails(*emails):
    for email in emails:
        print(f"Sending email to {email}...")

send_emails("anand@example.com", "ayesha@example.com", "john@example.com")


//----------- Ex : 2 -----------
def log_user_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

log_user_info(name="Anand", age=30, country="India")


//----------- Ex : 3 -----------
// The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2) for n > 1


// 1. Using a for loop
def fibonacci_series(n):
    a, b = 0, 1
    for _ in range(n):
        print(a, end=' ')
        a, b = b, a + b

fibonacci_series(10)


// 2. Store in a List and Return
def get_fibonacci(n):
    series = []
    a, b = 0, 1
    for _ in range(n):
        series.append(a)
        a, b = b, a + b
    return series

print(get_fibonacci(10))

Output:
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//----------- Ex : 4-----------
// 1. Calculator Function (Basic Math)

def calculator(a, b, operator):
    if operator == "+":
        return a + b
    elif operator == "-":
        return a - b
    elif operator == "*":
        return a * b
    elif operator == "/":
        return a / b
    else:
        return "Invalid operator"

# Example
print(calculator(10, 5, "+"))  # 15

//----------- Ex : 5 -----------
// 🔁 2. Unit Converter (KM to Miles, Celsius to Fahrenheit)

def km_to_miles(km):
    return km * 0.621371

def celsius_to_fahrenheit(c):
    return (c * 9/5) + 32

# Example
print(km_to_miles(5))             # 3.11 miles
print(celsius_to_fahrenheit(30))  # 86.0 F


//----------- Ex : 6 -----------
// ✅ 3. Email Validator (Basic Format Check)

def is_valid_email(email):
    return "@" in email and "." in email and len(email) > 5

# Example
print(is_valid_email("anand@gmail.com"))  # True
print(is_valid_email("anand@com"))        # False

💼 4. Salary Tax Calculator (Real-world use case)

def calculate_tax(salary):
    if salary <= 250000:
        return 0
    elif salary <= 500000:
        return (salary - 250000) * 0.05
    elif salary <= 1000000:
        return (salary - 500000) * 0.2 + 12500
    else:
        return (salary - 1000000) * 0.3 + 112500

print(calculate_tax(750000))  # Tax amount

//----------- Ex : 7 -----------
// 👨‍👩‍👧‍👦 5. Age Group Categorizer
def age_group(age):
    if age < 13:
        return "Child"
    elif age < 20:
        return "Teenager"
    elif age < 60:
        return "Adult"
    else:
        return "Senior"

print(age_group(45))  # Adult

//----------- Ex : 8 -----------
// 🔄 6. Reusable Discount Function for Products

def apply_discount(price, discount_percent):
    return price - (price * discount_percent / 100)

print(apply_discount(1000, 10))  # ₹900.0

//----------- Ex : 9 -----------
from pyapis import api_service
todo = get_todo(1)
print("To-do Title:", todo.get("title", "No title found"))

// todo is a dictionary (dict) in Python.
// You access dictionary values with either todo["title"] or todo.get("title").
// .get("title", "default") 

//api_service.py
import requests
def get_todo(todo_id):
    try:
        url = f"https://jsonplaceholder.typicode.com/todos/{todo_id}"
        response = requests.get(url)
        response.raise_for_status()  # raise error if status != 200
        return response.json()
    except requests.exceptions.RequestException as e:
        print("API call failed:", e)
        return None
`
                },
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "first-class citizen",
            note: [
                {
                    text1: `In programming, a first-class citizen (or first-class object) is an entity that:

    -> Can be <b>assigned to a variable</b>
    -> Can be <b>passed as an argument</b> to a function
    -> Can be <b>returned from a function</b>
    -> Can be stored in data structures (like lists, dictionaries, etc.)`,
                    code1: `// ------- 1. Assigned to a variable --------
def greet():
    print("Hello")

say_hello = greet
say_hello()  # Output: Hello



//  ------- 2. Passed as an argument ---------
def greet():
    print("Hello")

def call_func(func):
    func()

call_func(greet)  # Output: Hello


//------- passing function with other arguments -----
def add(x, y):
    return x+y

def sub(x, y):
    return x-y

def arithmetic(f, x, y):
    return f(x, y)

sum = arithmetic(add, 2,5)
print(sum)



// -------- 3. Returned from a function ----------
def outer():
    def inner():
        print("Inner")
    return inner

fn = outer()  # Calls outer, returns inner
fn()          # Output: Inner



// -------- 4. Stored in a data structure ----------
def add(a, b):
    return a + b

def sub(a, b):
    return a - b

ops = {"plus": add, "minus": sub}

print(ops["plus"](3, 2))   # Output: 5
print(ops["minus"](3, 2))  # Output: 1`
                }
            ]
        },
        {
            id: 1,
            section: `Closure function`,
            title: "What is Python?",
            note: [
                {
                    text1: `Python closure is a nested function that allows us to access variables of the outer function even after the outer function is closed.
                    
                    Closure =
    An inner function(Nested Function)
    Defined inside an outer function
    Accesses variables from the outer function's scope
    Returned by the outer function
    
    <b>What is __closure__?</b>
    Every function object has a special attribute called __closure__
    If the function is a <b>closure</b>, this will be a <b>tuple of "cell" objects</b>, each storing one of the <b>enclosed variables</b>

    <b>How to Check If It's a Closure</b>
    All function objects have a __closure__ attribute that returns a tuple of cell objects if it is a closure function.
You can inspect the closure using <b>__closure__</b>:
print(double.__closure__)  // # Tuple of cell objects
print(double.__closure__[0].cell_contents)  // # Output: 2


                <b>(Ex : 2)</b> This code executes the outer function <b>calculate()</b> and returns a closure to the odd number. 
That's why we can access the <b>num</b> variable of <b>calculate()</b> even after completing the outer function.
Again, when we call the outer function using
<b>odd2 = calculate()</b>
a new closure is returned. Hence, we get 3 again when we call odd2().

<b>When to use closures?</b>
Closures can be used to avoid global values and provide data hiding, and can be an elegant solution for simple cases with one or few methods.

1. Data Hiding (Encapsulation)
Closures let you hide variables from the outer world—similar to private variables in object-oriented programming.

Use Case:

def counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

inc = counter()
print(inc())  # 1
print(inc())  # 2

You can't access count directly, but the function still "remembers" its value.


📌 2. When You Need to Retain State Without Using a Class
Closures are an elegant alternative to classes when you need a function with state.

class Adder:
    def __init__(self, base):
        self.base = base

    def add(self, x):
        return self.base + x

Use a closure:

def make_adder(base):
    def adder(x):
        return base + x
    return adder

add10 = make_adder(10)
print(add10(5))  # 15

📌 3. When Writing Decorators
Closures are the foundation of decorators in Python.

def decorator(func):
    def wrapper():
        print("Before the function call")
        func()
        print("After the function call")
    return wrapper

@decorator
def say_hello():
    print("Hello!")

say_hello()


📌 4. Factory Functions
Closures can be used to <b>generate multiple customized functions.</b>

def power_factory(n):
    def power(x):
        return x ** n
    return power

square = power_factory(2)
cube = power_factory(3)

print(square(5))  # 25
print(cube(5))    # 125
`,
                    code1: `// ---------- Ex : 1 ----------
                    def outer():
    x = 10  # Enclosed variable

    def inner():
        print(f"x is {x}")  # inner function uses x

    return inner  # returning inner function

closure_fn = outer()  # outer is called, inner is returned
closure_fn()          # Output: x is 10

// -------- Ex : 2 ----------
def multiplier(factor):
    def multiply_by(n):
        return n * factor
    return multiply_by

double = multiplier(2)   # Returns a closure with factor = 2
triple = multiplier(3)   # Returns a closure with factor = 3

print(double(5))  # Output: 10
print(triple(5))  # Output: 15

//------
// You can inspect the closure using __closure__:
print(double.__closure__) //  # Tuple of cell objects
print(double.__closure__[0].cell_contents) //  # Output: 2

// ---------- Ex : 3 ---------
def calculate():
    num = 1
    def inner_func():
        nonlocal num
        num += 2
        return num
    return inner_func

# call the outer function
odd = calculate()

# call the inner function
print(odd())
print(odd())
print(odd())

# call the outer function again
odd2 = calculate()
print(odd2())

//-------------- Ex : 4 -------
// avoid global values and provide data hiding
def make_multiplier_of(n):
    def multiplier(x):
        return x * n
    return multiplier


// # Multiplier of 3
times3 = make_multiplier_of(3)

// # Multiplier of 5
times5 = make_multiplier_of(5)

// # Output: 27
print(times3(9))

// # Output: 15
print(times5(3))

// # Output: 30
print(times5(times3(2)))


// ------- 1. Data Hiding (Encapsulation)

def counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

inc = counter()
print(inc())  # 1
print(inc())  # 2

// You can't access count directly, but the function still "remembers" its value.

// ------- 📌 2. When You Need to Retain State Without Using a Class

class Adder:
    def __init__(self, base):
        self.base = base

    def add(self, x):
        return self.base + x

Use a closure:

def make_adder(base):
    def adder(x):
        return base + x
    return adder

add10 = make_adder(10)
print(add10(5))  # 15


// ------- 📌 3. When Writing Decorators
def decorator(func):
    def wrapper():
        print("Before the function call")
        func()
        print("After the function call")
    return wrapper

@decorator
def say_hello():
    print("Hello!")

say_hello()

// 📌 4. Factory Functions
def power_factory(n):
    def power(x):
        return x ** n
    return power

square = power_factory(2)
cube = power_factory(3)

print(square(5))  # 25
print(cube(5))    # 125

`
                }
            ]
        },
        {
            id: 1,
            title: "Decorators",
            note: [
                {
                    text1: `Dies when the main thread ends`,
                    code1: ``
                }
            ]
        }, 
                {
            id: 1,
            title: "new topic",
            note: [
                {
                    text1: `Dies when the main thread ends`,
                    code1: ``
                }
            ]
        }, 
        {
            id: 1,
            title: "Arguments (*args, **kwargs)",
            note: [
                {
                    text1: `In Python, *args and **kwargs are used to allow functions to accept an arbitrary number of arguments. These features provide great flexibility when designing functions that need to handle a varying number of inputs.
                    
                    In programming, we define a function to make a reusable code that performs similar operation. To perform that operation, we call a function with the specific value, this value is called a function argument in Python.
                    
                    Let's understand *args and **kwargs in Python — these are used when <b>you don't know in advance how many arguments</b> a function will receive.

                    In Python, we can pass a variable number of arguments to a function using special symbols. There are two special symbols:

                    We use Python *args and **kwargs when we are unsure about the number of arguments to pass. *args is used for non-keyworded arguments that we can pass to a function and perform operations, whereas **kwargs is used for a variable number of keyworded arguments passed to a function and performs dictionary operations.

1) *args (Non Keyword Arguments)
2) **kwargs (Keyword Arguments)

We use <b>*args</b> and <b>**kwargs</b> as an argument when we are unsure about the number of arguments to pass in the functions.

 <b>Are *args and **kwargs Python keywords?</b>
🔸 No, args and kwargs are not reserved keywords in Python.
🔸 But * and ** have special meaning in function definitions:

    <b>*</b> unpacks positional arguments into a tuple
    <b>**</b> unpacks keyword arguments into a dict
     You can name them anything:

def my_func(*values, **options):
    print(values)   # tuple of args
    print(options)  # dict of kwargs

    -> Using *args and **kwargs makes your code:
    -> Easier to read
    -> Familiar to other developers

<b>Python *args - (Ex : 1)</b>
Python *args
In Python, *args is used to pass a variable number of positional arguments to a function. It collects these arguments into a tuple, allowing you to handle multiple values without specifying them one by one.

We use Python *args when we’re unsure how many arguments a function might receive during a call.

Key Points to Remember
-> *args collects extra positional arguments into a tuple.
-> It must appear after standard arguments in the function definition.
-> You can loop through args just like a tuple.
-> The name doesn’t have to be args, but the asterisk * is required.


<b>Python **kwargs (Ex : 2)</b>
We use **kwargs in function definitions to pass keyworded variable-length arguments to functions. Please note that we can’t use **kwargs in Python to pass keyword arguments.

We use kwargs with double ** before the parameter name because it allows us to pass any number of arguments. 

Key Points to Remember
-> The keyworded arguments are passed as a dictionary. 
-> A keyword argument allows you to provide a variable name as we pass it into the function.
-> Python considers a variable name with two stars (**) before it a keyword argument.
-> kwargs is like a dictionary that maps every keyword to the value passed alongside it. Therefore, when we iterate over kwargs, there is no order in which they are printed. 
`,
                    code1: `//---------- Ex : 1 ---------
                    // *args
                    def multiply_all(*args):
    """Function to multiply any number of arguments together."""
    result = 1
    for number in args:
        result *= number
    return result

# Testing the function with different numbers of arguments
print(multiply_all(2, 3))          
print(multiply_all(4, 5, 6))     
print(multiply_all(1, 2, 3, 4, 5)) 
print(multiply_all(10))            
print(multiply_all()) 


//---------- Ex : 2 ---------
def print_kwargs(**kwargs):
    """Function to print key-value pairs passed as keyword arguments."""
    for key, value in kwargs.items():
        print(f"{key}: {value}")

# Testing the function with different sets of keyword arguments
print_kwargs(name="Raman", age=30, city="New York")
print("---")
print_kwargs(language="Python", version=3.10)
print("---")
print_kwargs(course="Data Science", duration="6 months", level="Intermediate")


//---------- Ex : 2 ---------
from flask import Flask, jsonify, request

app = Flask(__name__)

# Route with dynamic parts
@app.route("/profile/<username>/<int:year>/<month>")
def user_profile(**kwargs):
    # kwargs will contain: username, year, and month from the URL
    return jsonify({
        "username": kwargs.get("username"),
        "year": kwargs.get("year"),
        "month": kwargs.get("month")
    })

# Alternative using named parameters directly
@app.route("/greet/<name>")
def greet(name):
    return f"Hello, {name}!"

if __name__ == "__main__":
    app.run(debug=True)

//http://127.0.0.1:5000/profile/anand/2025/June
// {
//   "username": "anand",
//   "year": 2025,
//   "month": "June"
// }
      `
                }
            ]
        },
        {
            id: 1,
            title: "Lambda",
            note: [
                {
                    text1: `<b>What is a Lambda Function?</b>
Lambda functions are similar to user-defined functions but without a name. They're commonly referred to as anonymous functions.

Lambda functions are efficient whenever you want to create a function that will only contain simple expressions – that is, expressions that are usually a single line of a statement. They're also useful when you want to use the function once.

You can define a lambda function like this:
We use the <b>lambda keyword</b> instead of <b>def</b> to create a lambda function. Here's the syntax to declare the lambda function:
<b>lambda argument(s) : expression</b>
Here,
<b>argument(s)</b> - any value passed to the lambda function
<b>expression </b>- expression is executed and returned

-> lambda is a keyword in Python for defining the anonymous function.
-> argument(s) is a placeholder, that is a variable that will be used to hold the value you want to pass into the function expression. A lambda function can have multiple variables depending on what you want to achieve.
-> expression is the code you want to execute in the lambda function.

Notice that the anonymous function does not have a return keyword. This is because the anonymous function will automatically return the result of the expression in the function once it is executed.

Let's look at an example of a lambda function to see how it works. We'll compare it to a regular user-defined function.

Assume I want to write a function that returns twice the number I pass it. We can define a user-defined function as follows:

def f(x):
  return x * 2

f(3)
>> 6

Now for a lambda function. We'll create it like this:
lambda x: x * 3

<b>When Should You Use a Lambda Function?</b>
You should use the lambda function to create simple expressions. For example, expressions that do not include complex structures such as if-else, for-loops, and so on.

<b>Common Use Cases for Lambda Functions</b>
How to Use a Lambda Function with Iterables
An iterable is essentially anything that consists of a series of values, such as characters, numbers, and so on.

In Python, iterables include strings, lists, dictionaries, ranges, tuples, and so on. When working with iterables, you can use lambda functions in conjunction with two common functions: <b>filter()</b> and <b>map()</b>.

<b>Filter()</b>
When you want to focus on specific values in an iterable, you can use the filter function. The following is the syntax of a filter function:

filter(function, iterable)

Firstly I will use the lambda function to create the expression I want to derive like this:

lambda x: x % 2 == 0
Then I will insert it into the filter function like this:

list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
filter(lambda x: x % 2 == 0, list1)

>> <filter at 0x1e3f212ad60> # The result is always filter object so I will need to convert it to list using list()

list(filter(lambda x: x % 2 == 0, list1))
>> [2, 4, 6, 8, 10]

<b>Pandas Series - (Ex : 3)</b>
Another place you'll use lambda functions is in data science when creating a data frame from Pandas. A series is a data frame column. You can manipulate all of the values in a series by using the lambda function.

df["lower_name"] = df["name"].apply(lambda x: x.lower())
The apply function will apply each element of the series to the lambda function. The lambda function will then return a value for each element based on the expression you passed to it. In our case, the expression was to lowercase each element.
`,
                    code1: `// ------------- Ex : 1 ------------
                    s1 = 'GeeksforGeeks'

s2 = lambda func: func.upper()
print(s2(s1))
                    
                    
                    // -----------   -----------
                    // You use the \`map()\` function whenever you want to modify every value in an iterable.
list1 = [2, 3, 4, 5]

list(map(lambda x: pow(x, 2), list1))
>> [4, 9, 16, 25]


// ---------- Ex : 3 ---------
//Pandas Series
import pandas as pd

df = pd.DataFrame(
    {"name": ["IBRAHIM", "SEGUN", "YUSUF", "DARE", "BOLA", "SOKUNBI"],
     "score": [50, 32, 45, 45, 23, 45]
    }
)
    df["lower_name"] = df["name"].apply(lambda x: x.lower())`
                }
            ]
        },
        {
            id: 1,
            title: "map",
            note: [
                {
                    text1: `In Python, "map" primarily refers to the built-in map() function. This function applies a given function to each item of an iterable (like a list, tuple, or string) and returns a map object, which is an iterator.

The <b>map()</b> function is used to apply a given function to every item of an iterable, such as a list or tuple, and returns a map object (which is an iterator).      

The <b>map()</b> function executes a given function to each element of an iterable (such as lists, tuples, etc.).

Syntax
map(function, iterables)

<b>map() Arguments</b>
The map() function takes two arguments:

<b>function</b> - a function that is applied to each element of an iterable.
<b>iterables</b> - iterables such as lists, tuples, etc.
Note: We can pass more than one iterable to the map() function.

<b>map() Return Value</b>
The map() function returns a map object, which can be easily converted to lists, tuples, etc.`,
                    code1: `// ------------ Ex : 1 ---------- 
                    numbers = [1,2,3,4]

# returns the square of a number
def square(number):
  return number * number

# apply square() to each item of the numbers list
squared_numbers = map(square, numbers)

# converting to list for printing
result = list(squared_numbers)
print(result) 

# Output: [1,4,9,16]

// ----------- Ex : 2 -----------

def square(n):
    return n*n

numbers = (1, 2, 3, 4)
result = map(square, numbers)
print(result)

# converting the map object to set
result = set(result)
print(result)

// -----------  Ex : 3 ---------
// In a map() function, we can also use a lambda function instead of a regular function. For example,

numbers = (1, 2, 3, 4)
result = map(lambda x: x*x, numbers)
print(result)

# convert to set and print it
print(set(result))`
                }
            ]
        },
        {
            id: 1,
            title: "filter",
            note: [
                {
                    text1: `The <b>filter()</b> function in Python is a built-in function used to construct an iterator from elements of an iterable for which a function returns true.
                    
                    The filter() function selects elements from an iterable based on the result of a function.
                    
                     Syntax
filter(function, iterable)
filter() Parameters
The function takes two parameters:
<b>function</b> - a function that runs for each item of an iterable
<b>iterable</b> - a sequence that needs to be filtered like sets, lists, tuples, etc
`,
                    code1: `// ------------ Ex : 1 -----------
                # Filtering even numbers from a list
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def is_even(num):
    return num % 2 == 0

even_numbers_iterator = filter(is_even, numbers)
even_numbers = list(even_numbers_iterator)
print(even_numbers) # Output: [2, 4, 6, 8, 10]

# Using a lambda function for a more concise filter
positive_numbers = filter(lambda x: x > 0, [-2, -1, 0, 1, 2])
print(list(positive_numbers)) # Output: [1, 2]

// ------------ Ex : 2 -----------
# returns True if the argument passed is even
def check_even(number):
    if number % 2 == 0:
          return True  
    return False

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# if an element passed to check_even() returns True, select it
even_numbers_iterator = filter(check_even, numbers)

# converting to list
even_numbers = list(even_numbers_iterator)
print(even_numbers)

# Output: [2, 4, 6, 8, 10]


// -------------- Ex : 3 ----------
letters = ['a', 'b', 'd', 'e', 'i', 'j', 'o']

# a function that returns True if letter is vowel
def filter_vowels(letter):
    vowels = ['a', 'e', 'i', 'o', 'u']
    if letter in vowels:
        return True 
    else:
        return False

# selects only vowel elements
filtered_vowels = filter(filter_vowels, letters)

# converting to tuple
vowels = tuple(filtered_vowels)
print(vowels)

# Output: ('a', 'e', 'i', 'o')
`
                }
            ]
        },
        {
            id: 1,
            title: "reduce",
            note: [
                {
                    text1: `The <b>reduce()</b> function in Python is a functional programming tool that applies a given function cumulatively to the items of an iterable, from left to right, so as to reduce the iterable to a single value. It is part of the functools module and needs to be imported. 
                    
                    The <b>reduce(fun,seq)</b> function is used to apply a particular function passed in its argument to all of the list elements mentioned in the sequence passed along. This function is defined in "functools" module.
                    
                    <b>Syntax of reduce()</b>
functools.reduce(function, iterable[, initializer])

<b>function</b>: A function that takes two arguments and performs an operation on them.
<b>iterable</b>: An iterable whose elements are processed by the function.
<b>initializer (optional)</b>: A starting value for the operation. If provided, it is placed before the first element in the iterable.`,
                    code1: `// ----------- Ex : 1----------
                    from functools import reduce

# Function to add two numbers
def add(x, y):
    return x + y

a = [1, 2, 3, 4, 5]
res = reduce(add, a)

print(res)  # Output: 15

//------------- Ex : 2 ----------
// When paired with a lambda function, reduce() becomes a concise and powerful tool for aggregation tasks like summing, multiplying or finding the maximum value.

from functools import reduce
// # Summing numbers with reduce and lambda
a = [1, 2, 3, 4, 5]
res = reduce(lambda x, y: x + y, a)

print(res)

// ------------- Ex : 3 ----------
from functools import reduce

arr = [1, "a", 2, "b"]

nums, strings = reduce(
    lambda acc, x: (
        (acc[0] + [x], acc[1]) if isinstance(x, (int, float)) else (acc[0], acc[1] + [x])
    ),
    arr,
    ([], [])
)

print("Numbers:", nums)   # [1, 2]
print("Strings:", strings)  # ['a', 'b']

`
                }
            ]
        },
        {
            id: 1,
            title: "Decorators",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
                        {
            id: 1,
            title: "Generators",
            note: [
                {
                    text1: `This is part of a <b>generator expression</b>, which is Python's compact way of writing a <b>for-loop inside a function call</b> — similar to JavaScript’s .map() or .forEach().
                    
                    A generator expression in Python provides a concise and memory-efficient way to create a generator object. It is syntactically similar to a list comprehension but uses parentheses () instead of square brackets [].
                    
                    In Python, generators are a special type of iterator created using the <b>def</b> keyword followed by the <b>yield</b> statement. Unlike regular functions that use <b>return</b> to provide a single value, generator functions use <b>yield</b> to produce a sequence of values on demand.
                    <b>Ex : 1</b>
->                     A generator is a <b>special kind of iterator</b>.
-> It’s defined like a regular function using <b>def</b>, but instead of <b>return</b>, it uses <b>yield</b>.
-> Each call to <b>next()</b> on the generator <b>resumes from where it left off</b>, not from the beginning.

The state of the generator is maintained through the <b>yield</b> keyword, and its code only executes when <b>next()</b> is called on the generator object. Generators also support advanced methods like <b>.send(), .throw()</b>, and <b>.close()</b> for more complex use cases.

<b>List comprehensions</b>
They are the most common type of comprehension in Python. They allow you to create a new list by applying an expression to each element of an existing iterable. The basic syntax of a list comprehension is as follows:

new_list = [expression for item in iterable if condition]
Here's a breakdown of the components:

-> <b>expression</b>: The operation or transformation applied to each element.
-> <b>item</b>: The variable representing each element in the iterable.
-> <b>iterable</b>: The sequence (list, tuple, string, etc.) being iterated over.
-> <b>condition (optional)</b>: A conditional statement to filter elements.

eves = [num for num in arr<b style="color:red">:</b> if num % 2 == 0] // SyntaxError: invalid syntax
❌ Problem:
You added a colon (<b>:</b>) after arr, which is not allowed in list comprehensions.
In Python, colons are used in for loops or if blocks, but not in list comprehensions.


transpose = [[row[i] for row in matrix] for i in range(len(matrix[0]))] <b>Ex : 4</b>
This means:
-> Outer loop: <b>for i in range(len(matrix[0]))</b> → loop over column indices (0, 1, 2)
-> Inner loop: <b>for row in matrix</b> → for each row, get the <b>i</b>-th element
-> So you're collecting all the i-th elements from each row → that becomes a new row in the transposed matrix
`,
                    code1: `// ------------ Ex : 1 ---------
                    def count_up_to(max):
    count = 1
    while count <= max:
        yield count
        count += 1

counter = count_up_to(3)

print(next(counter))  # 1
print(next(counter))  # 2
print(next(counter))  # 3
print(next(counter))  # Raises StopIteration
                    //you're seeing Python's built-in StopIteration exception, which is how generators signal that they are finished.
                    
                    // ---------- Ex : 2 -----------
                    numbers = [1, 2, 3, 4, 5]
squared_numbers = [x**2 for x in numbers]
print(squared_numbers)  # Output: [1, 4, 9, 16, 25]

// ---------- Ex : 3 -----------
// List comprehensions can also include conditional statements to filter elements. Here’s an example that creates a new list of even numbers from an existing list:
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens_num = [i for i in numbers if i % 2 == 0]
print(evens_num)



//---------- Ex : 4 ------------
matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]
transpose = [[row[i] for row in matrix] for i in range(len(matrix[0]))]
print(transpose)  # Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

// or

matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]

transpose = []

for i in range(len(matrix[0])):  # column index
    new_row = []
    for row in matrix:
    --->print(f"row={row}, i={i}, row[i]={row[i]}")
    --->new_row.append(row[i])
    transpose.append(new_row)

print("Transpose:", transpose)

//---------- ✅ Example 2: Flatten a 2D Matrix
// 🧠 List Comprehension:

flat = [num for row in matrix for num in row]

// 🔍 Expanded Version:

flat = []
for row in matrix:
    for num in row:
        print(f"row={row}, num={num}")
        flat.append(num)

print("Flattened:", flat)

//-------✅ Example 3: Get Even Numbers in a 2D Matrix
// 🧠 List Comprehension:
even = [num for row in matrix for num in row if num % 2 == 0]

// 🔍 Expanded Debuggable Version:
even = []
for row in matrix:
    for num in row:
        if num % 2 == 0:
            print(f"Even found: {num}")
            even.append(num)

print("Even numbers:", even)


// ----------✅ Example 4: Multiply Matrix by 2
// 🧠 List Comprehension:
doubled = [[num * 2 for num in row] for row in matrix]

// 🔍 Expanded Version:
doubled = []

for row in matrix:
    new_row = []
    for num in row:
        doubled_value = num * 2
        print(f"Original: {num}, Doubled: {doubled_value}")
        new_row.append(doubled_value)
    doubled.append(new_row)

print("Doubled Matrix:", doubled)

// ----------✅ Example 5: Diagonal Extraction (Left-to-Right)
// 🧠 List Comprehension:
diagonal = [matrix[i][i] for i in range(len(matrix))]

// 🔍 Expanded Version:
diagonal = []

for i in range(len(matrix)):
    value = matrix[i][i]
    print(f"matrix[{i}][{i}] = {value}")
    diagonal.append(value)

print("Diagonal:", diagonal)
`
                }
            ]
        },
        {
            id: 1,
            title: "Iterators",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
                        {
            id: 1,
            title: "Virtual Environments",
            note: [
                {
                    text1: `When developing software with Python, a basic approach is to install Python on your machine, install all your required libraries via the terminal, write all your code in a single .py file or notebook, and run your Python program in the terminal.

This is a common approach for a lot of beginners and many people transitioning from working with Python for data analytics.

This works fine for simple Python scripting projects. But in complex software development projects, like building a Python library, an API, or software development kit, often you will be working with multiple files, multiple packages, and dependencies. As a result, you will need to isolate your Python development environment for that particular project.

Consider this scenario: you are working on app A, using your system installed Python and you pip install packageX version 1.0 to your global Python library. Then you switch to project B on your local machine, and you install the same packageX but version 2.0, which has some breaking changes between version 1.0 and 2.0.

When you go back to run your app A, you get all sorts of errors, and your app does not run. This is a scenario you can run into when building software with Python. And to get around this, we can use virtual environments.

<b>What is a Virtual Environment?</b>
Python's official documentation says:

"A virtual environment is a Python environment such that the Python interpreter, libraries and scripts installed into it are isolated from those installed in other virtual environments, and (by default) any libraries installed in a “system” Python, i.e., one which is installed as part of your operating system"

A Python Virtual Environment is an isolated space where you can work on your Python projects, separately from your system-installed Python. You can set up your own libraries and dependencies without affecting the system Python. We will use virtualenv to create a virtual environment in Python.

A virtual environment is a tool that helps to keep dependencies required by different projects separate by creating isolated Python virtual environments for them. This is one of the most important tools that most Python developers use.     

<b>Why use a virtual environment?</b>
    -> Each project can use different versions of the same package.
    -> Avoids polluting the global Python environment.
    -> Makes deployment easier and cleaner.

<b>🔧 How to create and use a virtual environment</b>
<b>1. Create a virtual environment</b>
python -m venv <span>env</span>
    env is the name of the virtual environment folder. You can name it anything.
    This creates a directory with Python binaries and local site-packages.
                (OR)
    $ /n/fs/myproject/py310/bin/python3.10 -m venv my_venv_py310
The -m <b>venv</b> tells Python to use the “venv” module to create a virtual environment in a directory called my_venv_py310.


<b>2. Activate the virtual environment</b>
    => On Windows:
<b>./\env/\Scripts/\activate</b>

=> On macOS/Linux:
    <b>source <span style="color:red">env</span>/bin/activate</b>
<b>env</b> is just the <b>name of the virtual environment folder</b> — and yes, you can name it anything you want.
After activation, your terminal prompt usually changes to show the environment name.

<b>3. Install packages inside the environment</b>
pip install flask
This installs <b>flask</b> only inside your virtual environment.

<b>4. Freeze dependencies</b>
pip freeze > requirements.txt
This saves the installed packages to a file, useful for sharing or deployment.
Freezing dependencies means saving a list of all the Python packages (and their exact versions) that are installed in your virtual environment.

<b>5. Deactivate the virtual environment</b>
deactivate

<b>🔁 Recreate environment from requirements.txt</b>
python -m venv env
source env/bin/activate  # or ./\env/\Scripts/\activate on Windows
pip install -r requirements.txt

<b>🧠 Tools that help manage environments</b>
    <b>venv</b> - built-in tool (recommended for most use cases)
    <b>virtualenv</b> - older third-party tool, used when venv is not available
    <b>pipenv</b> - combines package + environment management
    <b>conda</b> - for data science, handles packages + environments
    `,
                    code1: `//If you created your environment like this:
python -m venv myproject_env

// Then to activate it:
source myproject_env/bin/activate

// Deactivate the virtual environment
deactivate

//----- Freezing dependencies ------ 
// Freezing dependencies means saving a list of all the Python packages (and their exact versions) that are installed in your virtual environment.

pip freeze > requirements.txt

// ----- Recreate environment from requirements.txt -----
python -m venv env
source env/bin/activate  # or ./\env/\Scripts/\activate on Windows
pip install -r requirements.txt

`
                }
            ]
        },
        {
            id: 1,
            title: "pip",
            note: [
                {
                    text1: `In Python, pip is a package manager. It is a tool that simplifies the process of installing, managing, and uninstalling software packages and their dependencies. Essentially, it allows you to easily add functionality to your Python projects by installing pre-built libraries and modules. 
                    pip stands for:
<b>📦 Pip Installs Packages</b>
                    pip is the package installer for Python.
It lets you <b>install, upgrade, and manage</b> third-party Python libraries from the <b>Python Package Index (PyPI)</b> — like <b>flask, django, requests, numpy</b>, and more.

<table border="1" cellspacing="0" cellpadding="8">
  <thead>
    <tr>
      <th>Task</th>
      <th>Command</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>✅ Install a package</td>
      <td><code>pip install flask</code></td>
    </tr>
    <tr>
      <td>⬆️ Upgrade a package</td>
      <td><code>pip install --upgrade flask</code></td>
    </tr>
    <tr>
      <td>❌ Uninstall a package</td>
      <td><code>pip uninstall flask</code></td>
    </tr>
    <tr>
      <td>🔍 Check installed packages</td>
      <td><code>pip list</code></td>
    </tr>
    <tr>
      <td>❄️ Freeze dependencies</td>
      <td><code>pip freeze &gt; requirements.txt</code></td>
    </tr>
    <tr>
      <td>📦 Install from requirements</td>
      <td><code>pip install -r requirements.txt</code></td>
    </tr>
`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Unit Testing (unittest, pytest)",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
                                {
            id: 1,
            title: "What is Python?",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "__name__",
            note: [
                {
                    text1: `<b>What is __name__?</b>
In contrast, the “__main__“ string that is being matched in the if statement does have special semantics. Each time a Python module is imported, Python automatically assigns a string name to the dunder name (__name__) variable in that module's namespace; normally this is the name of the module being imported as defined by its source file name (or package hierarchy name). The outermost module—the one that is there every time you run Python and requires no import—is always assigned “__main__“ as its name. It is the main module that is always present. (See the Python Execution Model documentation for more details.)

The if __name__ == "__main__" block in Python allows you to define code that will only run when the file is executed directly as a script, but not when it's imported as a module into another script.

=> Every Python file (module) has a special built-in variable called <b>__name__</b>.
=> When a Python file is run directly (like <b>python myfile.py</b>), then Python sets <b>__name__ = "__main__"</b> in that file.
=> But if the file is <b>imported</b> from another file (like import myfile), then <b>__name__ = "myfile"</b> (i.e., the module name).

<b>Why is __name__ useful?</b>
The reason that <b>__name__</b> is useful has to do with the fact that Python runs the code that it is importing as a module. Doing an import populates the module's namespace with the variables, functions, and classes defined in the module. With <b>__name__</b> I have a way to control what actually runs and the context in which it runs.

Purpose of <b>if __name__ == "__main__":</b>
It tells Python:
<b>Only run the below code if this file is being executed directly, not when imported.</b>
`,
                    code1: `// ------------ Ex : 1 -----------
                    // # file: payment.py

def greet():
    print("Welcome to the payment system!")

if __name__ == "__main__":
    greet()

//     Output:
//     If you run python payment.py → Output:
// Welcome to the payment system!

// If you do:
// import payment
//  Nothing prints, because __name__ is not "__main__".


// ------------ Ex : 2 -----------
🧪 Real-Time Example:

# utils.py
def add(a, b):
    return a + b

if __name__ == "__main__":
    print(add(3, 4))  # Only runs when this file is executed directly

# main.py
import utils
print(utils.add(10, 5))

//     Output when running main.py:
// 15

// Output when running utils.py:
// 7
`
                }
            ]
        },
        {
            id: 1,
            section: `Listes`,
            title: "Listes in Python",
            note: [
                {
                    text1: `In Python, the sequence of various data types is stored in a list. A list is a collection of different kinds of values or items. Since Python lists are mutable, we can change their elements after forming. The comma (,) and the square brackets [enclose the List's items] serve as separators.
                    
                    In Python, a list is a built-in data structure that allows you to store an ordered collection of items. Lists are versatile and can hold a mix of different data types, including numbers, strings, and even other lists. Here are some key features and operations related to lists in Python:

                    <b>Key Features</b>
    <b>Ordered</b>: The items in a list maintain their order. The first item has an index of 0, the second an index of 1, and so on.
    <b>Mutable</b>: Lists are mutable, meaning you can change, add, or remove items after the list has been created.
    <b>Dynamic</b>: You can change the size of a list dynamically as you add or remove elements.
    <b>Heterogeneous</b>: Lists can contain items of different data types (e.g., integers, strings, objects).

                    `,
                    code1: `//Creating a List
// You can create a list by enclosing elements in square brackets ([]):

# Creating a list
my_list = [1, 2, 3, 'four', 5.0]

// 1) Common List Operations
//     "Accessing Elements": You can access elements by their index:
print(my_list[0])  # Output: 1
print(my_list[3])  # Output: 'four'

// 2) "Slicing": You can get a subset of the list using slicing:
print(my_list[1:4])  # Output: [2, 3, 'four']

// 3) Adding Elements:
//     "append()": Adds an item to the end of the list.
my_list.append('new item')

// "insert()": Inserts an item at a specified index.
    my_list.insert(1, 'inserted item')  # Inserts at index 1

// 4) Removing Elements:
    // "remove()": Removes the first occurrence of a specified item.
my_list.remove(2)

// "pop()": Removes an item at a specified index and returns it. If no index is specified, it removes and returns the last item.
    last_item = my_list.pop()  # Removes the last item

// 5) "Finding Length": You can get the number of items in a list using len():
length = len(my_list)

// 6) "Looping Through a List": You can use a for loop to iterate through the items:
for item in my_list:
    print(item)

// 7) "List Comprehensions": A concise way to create lists based on existing lists:
squares = [x**2 for x in range(10)]  # Generates a list of squares

//===============
// # Creating a list
fruits = ['apple', 'banana', 'cherry']

// # Accessing elements
print(fruits[1])  # Output: banana

// # Adding elements
fruits.append('orange')
print(fruits)  # Output: ['apple', 'banana', 'cherry', 'orange']

// # Removing elements
fruits.remove('banana')
print(fruits)  # Output: ['apple', 'cherry', 'orange']

// # Looping through the list
for fruit in fruits:
    print(fruit)

`
                },
                {
                    text1: `
                    
                    <div class='table-res'>
                    <table border=1 >
<tbody><tr>
<th>Method</th>
<th>Description</th>
</tr>
<tr><td>append()</td><td>Adds an element at 
  the end of the list</td></tr>
<tr><td>clear()</td><td>Removes all the 
  elements from the list</td></tr>
<tr><td>copy()</td><td>Returns a copy of the 
  list</td></tr>
<tr><td>count()</td><td>Returns the number of 
  elements with the specified value</td></tr>
<tr><td>extend()</td><td>Add the elements of a 
  list (or any iterable), to the end of the current list</td></tr>
<tr><td>index()</td><td>Returns the index of 
  the first element with the specified value</td></tr>
<tr><td>insert()</td><td>Adds an element at 
  the specified position</td></tr>
<tr><td>pop()</td><td>Removes the element at the 
  specified position</td></tr>
<tr><td>remove()</td><td>Removes the first 
  item with the specified value</td></tr>
<tr><td>reverse()</td><td>Reverses the order 
  of the list</td></tr>
<tr><td>sort()</td><td>Sorts the list</td></tr>
</tbody></table>
</div>
`,
                    code1: ``
                },                
                {
                    text1: `The list data type has some more methods. Here are all of the methods of list objects:

list.<b>append</b>(x)
    Add an item to the end of the list. Equivalent to a[len(a):] = [x].
    The .append() <b>method modifies the list in-place</b> and <b>returns</b> None. - <b>Ex : 2 </b>

list.<b>extend</b>(iterable)
    Extend the list by appending all the items from the iterable. Equivalent to a[len(a):] = iterable.
    We can add list items using the extend() method by passing another iterable containing the elements we want to add, like my_list.extend(iterable), which appends each element from the iterable to the end of my_list.

list.<b>insert</b>(i, x)
    Insert an item at a given position. The first argument is the index of the element before which to insert, so a.insert(0, x) inserts at the front of the list, and a.insert(len(a), x) is equivalent to a.append(x).

list.<b>remove</b>(x)
    Remove the first item from the list whose value is equal to x. It raises a ValueError if there is no such item.

list.<b>pop</b>([i])
    Remove the item at the given position in the list, and return it. If no index is specified, a.pop() removes and returns the last item in the list. It raises an IndexError if the list is empty or the index is outside the list range.

list.<b>clear</b>()
    Remove all items from the list. Equivalent to del a[:].

list.<b>index</b>(x[, start[, end]])
    Return zero-based index in the list of the first item whose value is equal to x. Raises a ValueError if there is no such item.

    The optional arguments start and end are interpreted as in the slice notation and are used to limit the search to a particular subsequence of the list. The returned index is computed relative to the beginning of the full sequence rather than the start argument.

list.<b>count</b>(x) - <b> Ex : 3 </b>
    Return the number of times x appears in the list.
    list.count(x) is a built-in method in Python that <b>returns the number of times the specified element x appears in the list.</b>
    <b>📚 Theoretical Explanation</b>:
    -> It iterates through the entire list.
    -> Compares each element with the given value x using == equality.
    -> Increments a counter each time it finds a match.
    -> Finally, returns the total count of matches found.

list.<b>sort</b>(*, key=None, reverse=False)
    Sort the items of the list in place (the arguments can be used for sort customization, see sorted() for their explanation).

list.<b>reverse</b>()
    Reverse the elements of the list in place.

list.<b>copy</b>()
    Return a shallow copy of the list. Equivalent to a[:].
`,
                    code1: `//An example that uses most of the list methods:
>>>

fruits = ['orange', 'apple', 'pear', 'banana', 'kiwi', 'apple', 'banana']
fruits.count('apple')
// 2

fruits.count('tangerine')
// 0

fruits.index('banana')
// 3

fruits.index('banana', 4) // # Find next banana starting at position 4
// 6

fruits.reverse()
fruits
// ['banana', 'apple', 'kiwi', 'banana', 'pear', 'apple', 'orange']

fruits.append('grape')
fruits
// ['banana', 'apple', 'kiwi', 'banana', 'pear', 'apple', 'orange', 'grape']

fruits.sort()
fruits
// ['apple', 'apple', 'banana', 'banana', 'grape', 'kiwi', 'orange', 'pear']

fruits.pop()
//'pear'

//----------
// extend()
// # Original list
list1 = [1, 2, 3]
// # Another list to extend with
another_list = [4, 5, 6]

list1.extend(another_list)
print("Extended list:", list1)
//Output:
// Extended list: [1, 2, 3, 4, 5, 6]

// ----------  The .append() method modifies the list in-place and returns None.  -------------
// ----------- Ex : 2 ---------
vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
nums = [1, 2, 3]
newList = vowels.append(nums)
print(newList)
// Output : None
// ---------- Correct way is ---------
vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
nums = [1, 2, 3]
vowels.append(nums)
print(vowels)
Output: ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', [1, 2, 3]]

// ----------- Ex : 3 ----------
data = [
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Bob"},
    {"id": 1, "name": "Alice"},
]
target = {"id": 1, "name": "Alice"}
count = data.count(target)
print("Count:", count)

// ---- ❌ Will Not Work for Partial Match: -----
data.count({"id": 1})  # ❌ Doesn't count partial match
// You must compare full dictionaries for count() to work.
// ----- For Partial Match (Alternative): -----
// If you want to count based on part of the dictionary (like only id == 1), use this:
count = sum(1 for d in data if d["id"] == 1)
`
                },                
                {
                    text1: `<b>Using Lists as Stacks</b>
                    The list methods make it very easy to use a list as a stack, where the last element added is the first element retrieved (“last-in, first-out”). To add an item to the top of the stack, use append(). To retrieve an item from the top of the stack, use pop() without an explicit index. For example:`,
                    code1: `stack = [3, 4, 5]
stack.append(6)
stack.append(7)
stack
// [3, 4, 5, 6, 7]
stack.pop()
// 7
stack
// [3, 4, 5, 6]
stack.pop()
// 6
stack.pop()
// 5
stack
//[3, 4]`
                },
            ]
        },
        {
            id: 1,
            title: "Change List Items",
            note: [
                {
                    text1: `<b>Change List Items</b>
List is a mutable data type in Python. It means, the contents of list can be modified in place, after the object is stored in the memory. You can assign a new value at a given index position in the list

<b>Change Consecutive List Items</b>
You can replace more consecutive items in a list with another sublist.

<b>Change a Range of List Items(Changing Multiple Items)</b>
If the source sublist has more items than the slice to be replaced, the extra items in the source will be inserted. Take a look at the following code
You can also change multiple items using slicing:
`,
                    code1: `// Syntex:
                    list1[i] = newvalue
                    //------------ Ex : 1 ------------
// Change List Items
colors = ['Red', 'Black', 'Green']
print('Original List:', colors)

// # changing the third item to 'Blue'
colors[2] = 'Blue'

print('Updated List:', colors)

//------------ Ex : 2 ------------
// In the following code, we change the value at index 2 of the given list.
list3 = [1, 2, 3, 4, 5]
print ("Original list ", list3)
list3[2] = 10
print ("List after changing value at index 2: ", list3)
// output -
// Original list [1, 2, 3, 4, 5]
// List after changing value at index 2: [1, 2, 10, 4, 5]

// In the following code, items at index 1 and 2 are replaced by items in another sublist.
list1 = ["a", "b", "c", "d"]
print ("Original list: ", list1)
list2 = ['Y', 'Z']
list1[1:3] = list2
print ("List after changing with sublist: ", list1)

//  output -
// Original list: ['a', 'b', 'c', 'd']
// List after changing with sublist: ['a', 'Y', 'Z', 'd']

// Change a Range of List Items(Changing Multiple Items)
// # Example 1 list
my_list = [10, 20, 30, 40]
// # Change the items at index 1 and 2
my_list[1:3] = [25, 35]
print(my_list)  # Output: [10, 25, 35, 40]
// Output: [10, 25, 35, 40]

//------------ Ex : 3 ------------
// # Example 2 list
list1 = ["a", "b", "c", "d"]
print ("Original list: ", list1)
list2 = ['X','Y', 'Z']
list1[1:3] = list2
print ("List after changing with sublist: ", list1)
// output -
// Original list: ['a', 'b', 'c', 'd']
// List after changing with sublist: ['a', 'X', 'Y', 'Z', 'd']


//------------ Ex : 4 ------------
// # Example 3 list
// If the sublist with which a slice of original list is to be replaced, has lesser items, the items with match will be replaced and rest of the items in original list will be removed.

// In the following code, we try to replace "b" and "c" with "Z" (one less item than items to be replaced). It results in Z replacing b and c removed.
list1 = ["a", "b", "c", "d"]
print ("Original list: ", list1)
list2 = ['Z']
list1[1:3] = list2
print ("List after changing with sublist: ", list1)

// output -
// Original list: ['a', 'b', 'c', 'd']
// List after changing with sublist: ['a', 'Z', 'd']

//------------ Ex : 5 ------------
// Changing Items with a Loop
// # Example 4 list
my_list = [10, 20, 30, 40]

// # Change items that are greater than 25
for i in range(len(my_list)):
    if my_list[i] > 25:
        my_list[i] = my_list[i] * 2

print(my_list)  # Output: [10, 20, 60, 80]
`
                }
            ]
        },
        {
            id: 1,
            title: "Remove List Items",
            note: [
                {
                    text1: `<b>Remove List Item Using remove() Method</b>
                    We can remove list items using the remove() method by specifying the value we want to remove within the parentheses, like <b>my_list.remove(value)</b>, which deletes the first occurrence of value from my_list.
                    This method removes the first occurrence of a specified value.

                    <b>Remove List Item Using pop() Method</b>
                    We can remove list items using the pop() method by calling it without any arguments my_list.pop(), which removes and returns the last item from my_list, or by providing the index of the item we want to remove my_list.pop(index), which removes and returns the item at that index.
                    This method removes an item at a specified index and returns it. If no index is specified, it removes and returns the last item

                    <b>Remove List Item Using clear() Method</b>
                    We can remove all list items using the clear() method by calling it on the list object like my_list.clear(), which empties my_list, leaving it with no elements.
                    This method removes all items from the list.

                    <b>Remove List Item Using del Keyword</b>
                    We can remove list items using the del keyword by specifying the index or slice of the items we want to delete, like <b>del my_list[index]</b> to delete a single item or del <b>my_list[start:stop]</b> to delete a range of items.
                    The <b>del</b> statement can be used to remove an item at a specific index or to delete the entire list.

                    <b>Using List Comprehension</b>
                    we are deleting a series of consecutive items from a list with the slicing
                    `,
                    code1: `//Using remove() Method
                    list1 = ["Rohan", "Physics", 21, 69.75]
print ("Original list: ", list1)

list1.remove("Physics")
print ("List after removing: ", list1)
// output -
// Original list: ['Rohan', 'Physics', 21, 69.75]
// List after removing: ['Rohan', 21, 69.75]

//-------------
// Remove List Item Using pop() Method
list2 = [25.50, True, -55, 45]
print ("Original list: ", list2)
list2.pop(2)
print ("List after popping: ", list2)
//Output:
// Original list:  [25.5, True, -55, 45]
// List after popping:  [25.5, True, 45]

//-------------
// Remove List Item Using clear() Method
my_list = [1, 2, 3, 4, 5]

# Clearing the list
my_list.clear()
print("Cleared list:", my_list)
// Output : Cleared list: []

//------------
// Remove List Item Using del Keyword
list1 = ["a", "b", "c", "d"]
print ("Original list: ", list1)
del list1[2]
print ("List after deleting: ", list1)
//Output : 
// Original list: ['a', 'b', 'c', 'd']
// List after deleting: ['a', 'b', 'd']

//-----------
// Using List Comprehension
// # Example list
my_list = [10, 20, 30, 20, 40]
// # Remove all occurrences of 20
my_list = [x for x in my_list if x != 20]
print(my_list)  # Output: [10, 30, 40]
//Output : [10, 30, 40]
//----------
list2 = [25.50, True, -55, 15]
print ("List before deleting: ", list2)
del list2[0:2]
print ("List after deleting: ", list2)
//Output:
// List before deleting:  [25.5, True, -55, 15]
// List after deleting:  [-55, 15]
`
                }
            ]
        },
        {
            id: 1,
            title: "Loop Lists",
            note: [
                {
                    text1: `Loop Through List Items with For Loop
                    A for loop in Python is used to iterate over a sequence (like a list, tuple, dictionary, string, or range) or any other iterable object. It allows you to execute a block of code repeatedly for each item in the sequence.`,
                    code1: `for item in list:
//    # Code block to execute

//----------
   //we are using a for loop to iterate through each element in the list "lst"
   lst = [25, 12, 10, -21, 10, 100]
for num in lst:
   print (num, end = ' ')
   //Output:
//    25 12 10 -21 10 100

//------------------
// Loop Through List Items with While Loop
my_list = [1, 2, 3, 4, 5]
index = 0

while index < len(my_list):
   print(my_list[index])
   index += 1
   `
                }
            ]
        },
        {
            id: 1,
            title: "List Comprehension",
            note: [
                {
                    text1: `List comprehension offers a concise way to create a new list based on the values of an existing list.
Suppose we have a list of numbers and we desire to create a new list containing the double value of each element in the list.

Syntax: newList = [ expression(element) <b>for</b> element <b>in</b> oldList <b>if</b> condition ] 

<b>Parameter</b>:
<b>expression</b>: Represents the operation you want to execute on every item within the iterable.
<b>element</b>: The term “variable” refers to each value taken from the iterable.
<b>iterable</b>: specify the sequence of elements you want to iterate through.(e.g., a list, tuple, or string).
<b>condition</b>: (Optional) A filter helps decide whether or not an element should be added to the new list.

<b>Return</b>:The return value of a list comprehension is a new list containing the modified elements that satisfy the given criteria.
Python List comprehension provides a much more short syntax for creating a new list based on the values of an existing list.

<b>for Loop vs. List Comprehension</b>
List comprehension makes the code cleaner and more concise than <b>for</b> loop.
Let's write a program to print the square of each list element using both for loop and <b>list</b> comprehension.

<b>Conditionals in List Comprehension</b>
List comprehensions can utilize conditional statements like <b>if…else</b> to filter existing lists.
Let's see an example of an <b>if</b> statement with list comprehension.
`,
                    code1: `//Syntax:
                    [expression for item in list if condition == True]
                    // for every "item" in "list", execute the "expression" "if" the "condition" is "True".
                    // The "if" statement in list comprehension is optional.

                    numbers = [1, 2, 3, 4]
// # list comprehension to create new list
doubled_numbers = [num * 2 for num in numbers]

print(doubled_numbers)
// Output:
[2, 4, 6, 8]

//-----------
// Here is an example of using list comprehension to find the square of the number in
numbers = [1, 2, 3, 4, 5] 
squared = [x ** 2 for x in numbers] 
print(squared)

// Output:
[1, 4, 9, 16, 25]

//---------
// ********** for Loop vs. List Comprehension *********
numbers = [1, 2, 3, 4, 5]
square_numbers = []
// # for loop to square each elements
for num in numbers:
    square_numbers.append(num * num)
print(square_numbers)
// # Output: [1, 4, 9, 16, 25]

//List Comprehension
numbers = [1, 2, 3, 4, 5]
// # create a new list using list comprehension
square_numbers = [num * num for num in numbers]
print(square_numbers)
// # Output: [1, 4, 9, 16, 25]


//-------------
// *********** Conditionals in List Comprehension **********
// # filtering even numbers from a list
even_numbers = [num for num in range(1, 10) if num % 2 == 0 ]
print(even_numbers)

// # Output: [2, 4, 6, 8]

// Here, list comprehension checks if the number from "range(1, 10)" is even or odd. If even, it appends the number in the list.
// Note: The "range()" function generates a sequence of numbers. To learn more, visit Python range().

//------------------
// *********** List Comprehension with String **********
// We can also use list comprehension with iterables other than lists.

word = "Python"
vowels = "aeiou"
// # find vowel in the string "Python"
result = [char for char in word if char in vowels]
print(result)

// # Output: ['o']
`,
                    img: `../assets/images/python/list-comprehension.png`
                }
            ]
        },
        {
            id: 1,
            title: "What is Python?",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: `Tuples`,
            title: "What is Python?",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: `Sets`,
            title: "What is Python?",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: `Dictionaries`,
            title: "Dictionaries",
            note: [
                {
                    text1: `Python dictionaries are a powerful built-in data type that allows you to store key-value pairs for efficient data retrieval and manipulation.
                    Dictionaries are Python's implementation of a data structure that is more generally known as an associative array. A dictionary consists of a collection of key-value pairs. Each key-value pair maps the key to its associated value.

You can define a dictionary by enclosing a comma-separated list of key-value pairs in curly braces ({}). A colon (:) separates each key from its associated value:

-> A dictionary in Python is a <b>mutable collection of key-value pairs</b> that allows for efficient data retrieval using unique keys.
-> Both dict() and {} can create dictionaries in Python. Use {} for <b>concise syntax</b> and dict() for <b>dynamic creation</b> from iterable objects.
-> <b>dict()</b> is a <b>class</b> used to create dictionaries. However, it's <b>commonly called a built-in function</b> in Python.
-> <b>.__dict__ is a special attribute</b> in Python that holds an object's <b>writable attributes</b> in a dictionary.
-> Python dict is implemented as a <b>hashmap</b>, which allows for <b>fast key lookups</b>.

Dictionaries are one of Python's most important and useful built-in data types. They provide a mutable collection of key-value pairs that lets you efficiently access and mutate values through their corresponding keys:

<b>Python's dictionaries have the following characteristics</b>:
<b>Mutable</b>: The dictionary values can be updated in place.
<b>Dynamic</b>: Dictionaries can grow and shrink as needed.
<b>Efficient</b>: They're implemented as hash tables, which allows for fast key lookup.
person["city"] = "Hyderabad" # Add new key-value
<b>Ordered</b>: Starting with Python 3.7, dictionaries keep their items in the same order they were inserted.
The keys of a dictionary have a couple of restrictions. They need to be:

<b>Hashable</b>: This means that you can't use unhashable objects like lists as dictionary keys.
<b>Unique</b>: This means that your dictionaries won't have duplicate keys.

<b>1. Keys must be unique</b>
d = {"a": 1, "b": 2, "a": 3}
print(d)  # {'a': 3, 'b': 2}
The last "a" overwrites the first.

<b>2. Values can be of any type</b>
person = {
    "name": "Anand",
    "age": 30,
    "skills": ["Python", "React"],
    "is_employed": True
}

<b>3. Accessing Values</b>
print(person["name"])      # Output: Anand
print(person.get("age"))   # Output: 30
print(person.get("city", "Unknown"))  # Default if key not found

<b>4. Adding or Updating Items</b>
person["city"] = "Hyderabad"         # Add new key-value
person["age"] = 31                   # Update existing

<b>5. Deleting Items</b>
del person["city"]        # Deletes key 'city'
person.pop("skills")      # Removes and returns the value of 'skills'

<b>6. Check key </b>
"name" in person	// Returns True

<b>Nested Dictionaries</b>
users = {
    "anand": {"age": 30, "role": "admin"},
    "ravi": {"age": 25, "role": "user"}
}

<b>dict.keys()</b>	Get all keys
<b>dict.values()</b>	Get all values
<b>dict.items()</b>	Get key-value pairs as tuples
<b>dict.get(k)</b>	Safe access to value (returns None if not found)
<b>dict.pop(k)</b>	Remove a key and return its value
<b>dict.update()</b>	Merge/overwrite with another dictionary
<b>dict.clear()</b>	Remove all items


<b>for ... in list</b>	Loop through list items
<b>for ... in dict.items()</b>	Loop through key-value pairs
<b>enumerate()</b>	Get index + item from a list
<b>zip()</b>	Combine two or more lists together
<b>range()</b>	Generate number sequences (looping)
`,
                    code1: `d = {
    key: value,
    key: value,
      .
      .
      .
    key: value
}
    

//---------- Ex :1 -----------`
                },
                {
                    text1: `What is Python?`,
                    code1: ``
                },
                {
                    text1: `What is Python?`,
                    code1: ``
                },
            ]
        },
        {
            id: 1,
            title: "items() - Looping through both keys and values",
            note: [
                {
                    text1: `The .items() method is used on a dictionary to return a view object that contains all the key-value pairs as tuples.
                    
                    <b>.items()</b> returns a <b>dict_items</b> object, which is an iterable view (not a list).
                    <b>1. Looping through both keys and values</b>
for key, value in person.items():
    print(f"{key} => {value}")
    `,
                    code1: `// ----------- Ex : 1 ---------
                    person = {
    "name": "Anand",
    "age": 30,
    "city": "Hyderabad"
}
print(person.items())

// 🔁 Output:
// dict_items([('name', 'Anand'), ('age', 30), ('city', 'Hyderabad')])

// ----------- Ex : 2 ---------
// Looping through both keys and values
person = {
    "name": "Anand",
    "age": 30,
    "city": "Hyderabad"
}
for key, value in person.items():
    print(f"{key} => {value}")

// ------------ Ex : 3 ---------
// Sorting by keys or values
sorted_by_key = dict(sorted(person.items()))
# {'age': 30, 'city': 'Hyderabad', 'name': 'Anand'}

// ------------ Ex : 4 ---------
marks = {
    "Math": 85,
    "Science": 92,
    "English": 78
}

# Total and average
total = sum(marks.values())
avg = total / len(marks)

// ------------ Ex : 5 ---------
invoice = {
    "invoice_no": "INV1001",
    "date": "2025-06-12",
    "items": [
        {"name": "Pen", "price": 10, "qty": 2},
        {"name": "Notebook", "price": 50, "qty": 1}
    ]
}

# Calculate total
total = sum(item["price"] * item["qty"] for item in invoice["items"])
print(total)


// ------------ Ex : 6 ---------
// API Response (Weather App)
weather = {
    "city": "Hyderabad",
    "temperature": 34,
    "unit": "Celsius",
    "condition": "Sunny"
}

print(f"{weather['city']} - {weather['temperature']}°{weather['unit']}")


// ------------ Ex : 6 ---------
// Analytics / Counters
words = ["apple", "banana", "apple", "orange", "banana", "apple"]

freq = {}
for word in words:
    freq[word] = freq.get(word, 0) + 1

# freq => {'apple': 3, 'banana': 2, 'orange': 1}


// ------------ Ex : 7 ---------
// Loop through keys:
person = {"name": "Anand", "age": 30, "city": "Hyderabad"}

for key in person:
    print(key)  # name, age, city

    // ------------ Ex : 8 ---------
// Loop through values:
for value in person.values():
    print(value)

// ------------ Ex : 9 ---------
// 🔸 Loop through key-value pairs:
for key, value in person.items():
    print(f"{key} = {value}")
`
                },
            ]
        },
        {
            id: 1,
            title: "List of Dictionaries",
            note: [
                {
                    text1: `A list of dictionaries is exactly what it sounds like:
    A <b>list</b> ([]) that contains multiple <b>dictionary</b> ({}) entries.
    Each dictionary represents a record or object with key: value pairs.`,
                    code1: `students = [
    {"name": "Anand", "age": 20, "marks": 85},
    {"name": "Ravi", "age": 21, "marks": 90},
    {"name": "Sneha", "age": 19, "marks": 95}
]

for student in students:
    print(student["name"], student["marks"])

//------------ Ex : 2 ---------
// Filter students above 90 marks
top_students = [s for s in students if s["marks"] > 90]
print(top_students)

//------------ Ex : 3 ---------
// Extract specific fields
names = [s["name"] for s in students]
print(names)  # ['Anand', 'Ravi', 'Sneha']
    `
                }
            ]
        },
        {
            id: 1,
            title: "enumerate()",
            note: [
                {
                    text1: `Returns both index and value while looping a list.`,
                    code1: `//------------ Ex : 1 ---------
                    colors = ["red", "green", "blue"]

for index, color in enumerate(colors):
    print(index, color)

// Output:
// 0 red
// 1 green
// 2 blue
`
                }
            ]
        },
        {
            id: 1,
            title: "zip()",
            note: [
                {
                    text1: `Combines multiple sequences together.`,
                    code1: `//------------ Ex : 1 ---------
                    names = ["Anand", "Ravi", "Meena"]
scores = [90, 85, 88]

for name, score in zip(names, scores):
    print(f"{name} scored {score}")

// Output:
// Anand scored 90
// Ravi scored 85
// Meena scored 88
`
                }
            ]
        },
        {
            id: 1,
            title: "range()",
            note: [
                {
                    text1: `Used to generate a sequence of numbers:
                    range(start, stop, step):
                    `,
                    code1: `//------------ Ex : 1 ---------
                    for i in range(5):
    print(i)  # 0 to 4
range(start, stop, step):
for i in range(1, 10, 2):
    print(i)  # 1, 3, 5, 7, 9`
                }
            ]
        },
        {
            id: 1,
            section: `Array`,
            title: "What is Python?",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: `File Handling`,
            title: "What is Python?",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: `Oops`,
            title: "class",
            note: [
                {
                    text1: `classes (blueprints) and objects (real items based on those blueprints).
                    A class is a collection of objects. Classes are blueprints for creating objects. A class defines a set of attributes and methods that the created objects (instances) can have.`,
                    code1: `// ------------ Ex : 1 ---------
                    class Person:
    def __init__(self, myname):
        self.myname = myname

    def show_my_name(self):
        print(f"my name is {self.myname}")

ob1 = Person("anand")
ob1.show_my_name()


// ------------ Ex : 2 ---------
class Dog:
    species = "Canine"  # Class attribute

    def __init__(self, name, age):
        self.name = name  # Instance attribute
        self.age = age  # Instance attribute

# Creating an object of the Dog class
dog1 = Dog("Buddy", 3)

print(dog1.name) 
print(dog1.species)`
                }
            ]
        },
                {
            id: 1,
            title: "__init__() - Constructor",
            note: [
                {
                    text1: `<b>__init__</b> method is the constructor in Python, automatically called when a new object is created. It initializes the attributes of the class.
                    
                    The __init__() method can take any number of parameters, but the first one is always a variable known as <b>self</b>, which corresponds to the instance being created. This means self points to the address of the current object of a class, which enables you to access the data of the object's variables. So, if there are a thousand instances of a class, we can get data of individual objects using <b>self</b> as it points to the address of a particular object and returns the respective value. 

                    <b>__init__</b>: Special method used for initialization.
<b>self.name and self.age</b>: Instance attributes initialized in the constructor.
<b>Class and Instance Variables</b>
In Python, variables defined in a class can be either class variables or instance variables, and understanding the distinction between them is crucial for object-oriented programming.

<b>Class Variables</b>
These are the variables that are shared across all instances of a class. It is defined at the class level, outside any methods. All objects of the class share the same value for a class variable unless explicitly overridden in an object.

<b>Instance Variables</b>
Variables that are unique to each instance (object) of a class. These are defined within the __init__ method or other instance methods. Each object maintains its own copy of instance variables, independent of other objects.`,
                    code1: `// ------------ Ex : 1 ---------
                    class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

dog1 = Dog("Buddy", 3)
print(dog1.name)`
                }
            ]
        },
        {
            id: 1,
            title: "self",
            note: [
                {
                    text1: `<b>self</b> parameter is a reference to the current instance of the class. It allows us to access the attributes and methods of the object.
                    
                    In Python, self is a conventional first parameter of instance methods in a class. It refers to the current instance of the class through which the method is being called.
                    
                    It represents the instance of the class being used. Whenever we create an object from a class, self refers to the current object instance. It is essential for accessing attributes and methods within the class.

->                      It allows <b>access to instance variables and methods</b> from within the class.
->  It is <b>automatically passed</b> by Python when an instance method is called using an object.
->  It must be <b>explicitly declared</b> in the method definition.
                    <b>Why is self needed?</b>
Python does not implicitly use this like JavaScript or Java. Instead, you must explicitly define self as the first parameter in every instance method.`,
                    code1: `// ------------- Ex : 1 ---------
                    class Mynumber:
    def __init__(self, value):
        self.value = value
    
    def print_value(self):
        print(self.value)

obj1 = Mynumber(17)
obj1.print_value() // 17


//--------------- Ex : 2 -----------
class Counter:
    def __init__(self):
        self.count = 0

    def increment(self):
        self.count += 1

    def decrement(self):
        self.count -= 1

    def get_count(self):
        return self.count

# using the Counter class
counter = Counter()
counter.increment()
counter.increment()
counter.decrement()
print(counter.get_count())`
                }
            ]
        },
        {
            id: 1,
            title: "methods",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
                {
            id: 1,
            title: "Inheritance",
            note: [
                {
                    text1: `(OOP) that allows a class (called a child or derived class) to inherit attributes and methods from another class (called a parent or base class). This promotes code reuse, modularity, and a hierarchical class structure. 
                    
                    <b>super()</b> function, which is a built-in function that returns a temporary object of the superclass, so you can access its methods without explicitly naming the parent class. 
                    
                    <b>Types of Inheritance</b>
                    <b>Single</b> :	One parent, one child	Ex : class B(A)
<b>Multilevel</b> :	Chain of inheritance Ex :	A → B → C
<b>Hierarchical</b> :	One parent, multiple children Ex :	A → B, A → C
<b>Multiple</b> :	Multiple parents, one child Ex :	class C(A, B)
                    `,
                    code1: `// ------------- Ex : 1 ------------
class Parent:
    def speak(self):
        print("Parent speaking")

class Child(Parent):  # Inheriting from Parent
    def play(self):
        print("Child playing")

c = Child()
c.speak()  # ✅ Inherited method
c.play()   # ✅ Own method

// ------------- Ex : 2 ------------
class Person:
    def __init__(self, name):
        self.name = name

class Student(Person):
    def __init__(self, name, roll):
        super().__init__(name)  # Calls Persons __init__
        self.roll = roll

s = Student("Anand", 101)
print(s.name)   # Anand
print(s.roll)   # 101


// ------------- Ex : 3 ------------
                    # Parent class
class Animal:
    def __init__(self, name):
        self.name = name  # Initialize the name attribute

    def speak(self):
        pass  # Placeholder method to be overridden by child classes
// Note: Use the pass keyword when you do not want to add any other properties or methods to the class.
# Child class inheriting from Animal
class Dog(Animal):
    def speak(self):
        return f"{self.name} barks!"  # Override the speak method

# Creating an instance of Dog
dog = Dog("Buddy")
print(dog.speak())
// Output
// Buddy barks!
//------
// Animal is the parent class with an __init__ method and a speak method.
// Dog is the child class that inherits from Animal.
// The speak method is overridden in the Dog class to provide specific behavior.



// ------------- Ex : 4 ------------
// Multilevel Example:

class A:
    def show_a(self): print("A")

class B(A):
    def show_b(self): print("B")

class C(B):
    def show_c(self): print("C")

c = C()
c.show_a()  # From A
c.show_b()  # From B
c.show_c()  # Own


// ------------- Ex : 5 ------------
// Multiple Inheritance Example:

class A:
    def show(self): print("From A")

class B:
    def show(self): print("From B")

class C(A, B):  # MRO: A -> B
    pass

c = C()
c.show()  # From A (left-to-right)

// ------------- Ex : 6 ------------
// ------------- Ex : 7 ------------
// ------------- Ex : 8 ------------
`
                },
                {
                    text1: `What is Python?`,
                    code1: ``
                },
            ]
        },
                {
            id: 1,
            title: "Encapsulation",
            note: [
                {
                    text1: `<b>Encapsulation</b> is the concept of <b>hiding internal data</b> and only exposing what is necessary.
It <b>binds data (variables)</b> and <b>methods (functions)</b> that work on that data into a single unit (class), and it <b>restricts direct access</b> to some of the object's components.

It involves combining data and its related methods into a single unit called “class”, which restricts direct access to variables and methods and helps prevent unintended changes to the data.

This promotes better code organization and reusability. Overall, encapsulation is essential for building robust software systems.

In object-oriented programming, encapsulation is a mechanism that enables the bundling of data and methods and restricts access to the data from outside the class. Private and public variables are two ways of controlling access to class variables.

-> A real-life example of this concept could be a car. The car's driver can interact with various features, such as the steering wheel, pedals, and dashboard. These features are accessible to the driver and are similar to public variables. 
 -> However, the driver cannot see or interact with many parts of the car, such as the engine and transmission. These parts are similar to private variables, accessible only within the class or object.
 -> By using private and public variables in encapsulation, we can control access to an object's data and ensure that it is only modified in a controlled way. 
 -> It makes managing the object's behavior easier and protects its internal data from being accidentally modified.

 Encapsulation in Python is achieved through the use of access modifiers which restrict access to the methods and variables of a class. This helps in bundling the data (variables) and the methods that act on the data into a single unit or class. Python primarily uses two types of access modifiers: public and private.

1. Public Members: In Python, members of a class that are accessible from outside the class are public. By default, all attributes and methods in a Python class are public. They can be accessed using the dot operator on an object.

2. Private Members: To make an attribute or method private (i.e., accessible only within the class), you precede its name with two underscores (\`__\`). This triggers a name mangling process, where the interpreter modifies the name of the variable in a way that makes it harder to create subclasses that accidentally override the private attributes and methods.

<b>Public</b>	self.name	Accessible from outside
<b>Protected</b>	self._name	Convention: Treat as internal
<b>Private</b>	self.__name	Name mangling (harder to access directly)

<b>public</b>	No underscore	Can be accessed from anywhere.
<b>_protected</b>	Single underscore <b>( _var )</b>	Shouldn't be accessed outside the class (not enforced).
<b>__private</b>	Double underscore <b>( __var )</b>	Name mangled to prevent outside access (enforced).
`,
                    code1: `// ---------- Ex : 1 --------
                    class BankAccount:
    def __init__(self, account_holder, balance):
        self.account_holder = account_holder  # Public
        self.__balance = balance              # Private

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
        else:
            print("Insufficient balance")

    def get_balance(self):
        return self.__balance  # Safe access method

# Creating an object
account = BankAccount("Anand", 1000)

# Accessing public attribute
print(account.account_holder)

# Accessing private attribute directly (Not recommended)
# print(account.__balance)  ❌ This will raise an error

# Accessing private attribute using getter
print(account.get_balance()) # ✅

# Deposit money
account.deposit(500)
print(account.get_balance())  # Output: 1500



//----------- Ex : 2 ----------
class Employee:
    def __init__(self, name, salary):
        self.name = name              # Public
        self.__salary = salary        # Private (name-mangled)

    def show_info(self):
        print(f"Name: {self.name}")
        print(f"Salary: {self.__salary}")

    def update_salary(self, new_salary):
        if new_salary > 0:
            self.__salary = new_salary
        else:
            print("Invalid salary")

# Create object
emp = Employee("Anand", 50000)

# Access public variable
print(emp.name)  # ✅ Works

# Access private variable directly
# print(emp.__salary)  ❌ Error: AttributeError

# Access through public method
emp.show_info()  # ✅ Works

# Access private using name mangling (not recommended)
print(emp._Employee__salary)  # 😬 Works but not good practice

# Update private variable using method
emp.update_salary(60000)
emp.show_info()

# emp.__salary = 999999  # ❌ Creates a new public variable, doesn't change the original __salary


`
                },
            ]
        },
        {
            id: 1,
            title: "Abstraction",
            note: [
                {
                    text1: `Abstraction in Python is a process of handling complexity by hiding unnecessary details and showing only the essential information to the user. It is one of the core principles of Object-Oriented Programming (OOP), which allows developers to implement more complex functionality without worrying about the underlying complexity.

                    <b>Abstraction</b> means <b>hiding the complex implementation details</b> and showing only the <b>essential features</b> of an object. It's a fundamental concept in Object-Oriented Programming (OOP), and Python supports it using:

                    In Python, abstraction can be achieved using Abstract Classes and Abstract Methods. Let's explore how we can implement this using Python's built-in abc module.
                    Abstract Base Classes (ABC)
<b>@abstractmethod</b> decorator
<b>Abstract Method</b>: An abstract method is a method that is declared but contains no implementation. It is just a placeholder that tells the programmer that this method must be overridden by subclasses.
 In Python, abstract method feature is not a default feature. To create abstract method and abstract classes we have to import the "ABC" and "abstractmethod" classes from abc (Abstract Base Class) library. Abstract method of base class force its child class to write the implementation of the all abstract methods defined in base class. If we do not implement the abstract methods of base class in the child class then our code will give error. In the below code method_1 is a abstract method created using @abstractmethod decorator.
<b>Abstract Class</b>: A class containing one or more abstract methods is called an abstract class. You cannot create an instance of an abstract class directly.

<b>ABC</b>	Base class for defining abstract classes
<b>@abstractmethod</b>	Marks a method that must be implemented in child classes
<b>Cannot instantiate</b>	You cannot create an object of an abstract class
<b>Enforces implementation</b>	All abstract methods must be implemented in child classes


  <table data-start="382" data-end="742" class="w-fit min-w-(--thread-content-width)">
    <thead data-start="382" data-end="409">
      <tr data-start="382" data-end="409">
        <th data-start="382" data-end="392" data-col-size="sm">Feature</th>
        <th data-start="392" data-end="399" data-col-size="sm">Java</th>
        <th data-start="399" data-end="409" data-col-size="sm">Python</th>
      </tr>
    </thead>
    <tbody data-start="437" data-end="742">
      <tr data-start="437" data-end="497">
        <td data-start="437" data-end="457" data-col-size="sm"><strong data-start="439" data-end="456">Language
            type</strong></td>
        <td data-col-size="sm" data-start="457" data-end="476">Statically typed</td>
        <td data-col-size="sm" data-start="476" data-end="497">Dynamically typed</td>
      </tr>
      <tr data-start="498" data-end="586">
        <td data-start="498" data-end="527" data-col-size="sm"><strong data-start="500" data-end="526">Abstract class
            support</strong></td>
        <td data-col-size="sm" data-start="527" data-end="560">Built into the language syntax</td>
        <td data-col-size="sm" data-start="560" data-end="586">Added via <code data-start="572"
            data-end="577">abc</code> module</td>
      </tr>
      <tr data-start="587" data-end="648">
        <td data-start="587" data-end="612" data-col-size="sm"><strong data-start="589" data-end="611">Method
            enforcement</strong></td>
        <td data-col-size="sm" data-start="612" data-end="630">Compiler checks</td>
        <td data-col-size="sm" data-start="630" data-end="648">Runtime checks</td>
      </tr>
      <tr data-start="649" data-end="742">
        <td data-start="649" data-end="678" data-col-size="sm"><strong data-start="651" data-end="677">Interfaces /
            Contracts</strong></td>
        <td data-col-size="sm" data-start="678" data-end="707">Interface + Abstract Class</td>
        <td data-col-size="sm" data-start="707" data-end="742">Abstract Base Class (<code data-start="730"
            data-end="739">abc.ABC</code>)</td>
      </tr>
    </tbody>
  </table>
                    `,
                    code1: `//------------- Ex : 1 -----------
                    from abc import ABC, abstractmethod

// # Abstract class
class Animal(ABC):
    
    @abstractmethod
    def sound(self):
        pass  # Abstract method, must be implemented by child classes

// # Concrete class
class Dog(Animal):
    def sound(self):
        return "Barks"

class Cat(Animal):
    def sound(self):
        return "Meows"

// # Usage
dog = Dog()
cat = Cat()

print(dog.sound())  # Output: Barks
print(cat.sound())  # Output: Meows

                    
                    //------------- Ex : 2 -----------
                    // # Import required modules
from abc import ABC, abstractmethod

// # Create Abstract base class
class Car(ABC):
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
    
    // # Create abstract method      
    @abstractmethod
    def printDetails(self):
        pass
  
    // # Create concrete method
    def accelerate(self):
        print("Speed up ...")
  
    def break_applied(self):
        print("Car stopped")

// # Create a child class
class Hatchback(Car):
    def printDetails(self):
        print("Brand:", self.brand)
        print("Model:", self.model)
        print("Year:", self.year)
  
    def sunroof(self):
        print("Not having this feature")

// # Create a child class
class Suv(Car):
    def printDetails(self):
        print("Brand:", self.brand)
        print("Model:", self.model)
        print("Year:", self.year)
  
    def sunroof(self):
        print("Available")

// # Create an instance of the Hatchback class
car1 = Hatchback("Maruti", "Alto", "2022")

// # Call methods
car1.printDetails()
car1.accelerate()
car1.sunroof()`
                }
            ]
        },
        {
            id: 1,
            title: "Polymorphism",
            note: [
                {
                    text1: `Polymorphism means <b>"many forms"</b>. In Python, it refers to the ability of different classes to provide different implementations for methods that share the same name.
                    
                    <b>Real-life Example</b>:
    -> A person behaves differently as a teacher, a father, or a friend — depending on the situation.
    -> Similarly, in Python, a method name can behave differently based on the object calling it.

    <b>Method Overriding</b>
    Method overriding is a fundamental concept in <u>object-oriented programming (OOP)</u> that allows a subclass to provide a specific implementation of a method that is already defined in its superclass.

This concept is crucial as it enables polymorphism, where different classes can implement methods in different ways while sharing the same method name. By overriding methods, developers can customise or extend the behavior of inherited methods without altering the original class.

<b>Implementation in Python</b>
In Python, method overriding occurs when a subclass defines a method with the same name and signature as a method in its superclass. When an instance of the subclass calls this method, the overridden version in the subclass executes, replacing the superclass's method.

This behavior demonstrates Python's support for dynamic method dispatch, a key feature of polymorphism.

To override a method in Python, you simply define a method in the subclass with the same name as the one in the superclass. Python does not require any special syntax for overriding methods, making it straightforward to implement. Here's an example:(Ex: 1)

    <b>Method Overloading</b>
    Method overloading is a feature in programming that allows multiple methods to have the same name but different parameters. It enhances code readability and reusability by enabling methods to perform different tasks based on the arguments passed.

This concept is particularly useful in data science for creating flexible and adaptable functions, such as those used in data manipulation or statistical calculations.

<b>Implementation in Python</b>
Unlike some other programming languages, Python does not support method overloading natively. In Python, defining multiple methods with the same name within a class will overwrite the previous definitions. However, Python's dynamic nature and support for default arguments, variable-length arguments, and keyword arguments allow for similar functionality.

To achieve method overloading, developers can use default arguments or variable-length arguments (*args and **kwargs). These techniques enable a single method to handle different numbers and types of arguments, simulating the effect of method overloading.(Ex : 4)

<b>*args</b>	Variable number of positional arguments	<u>Tuple</u>
<b>**kwargs</b>	Variable number of keyword arguments	<u>Dictionary</u>

    <b>Note</b>: Python does not support method overloading. We may overload the methods but can only use the latest defined method.

 <b>   Practical Applications in Data Science</b>
Understanding method overloading and overriding in Python has practical benefits in data science. These concepts play a critical role in simplifying and enhancing various data science tasks, from preprocessing data to evaluating models and customising algorithms.


<table class="table table-bordered" style="text-align: center;">
<tbody>
<tr>
<th><p style="text-align: center; ">Method Overloading </p></th>
<th><p style="text-align: center; ">Method Overriding</p></th>
</tr>
<tr>
<td><p style="text-align: left; ">Refers to defining multiple methods with the same name but different parameters</p></td>
<td><p style="text-align: left;">Refers to defining a method in a subclass that has the same name as the one in its superclass</p></td>
</tr>
<tr>
<td><p style="text-align: left;">Can be achieved in Python using default arguments</p></td>
<td><p style="text-align: left;">Can be achieved by defining a method in a subclass with the same name as the one in its superclass</p></td>
</tr>
<tr>
<td><p style="text-align: left;">Allows a class to have multiple methods with the same name but different behaviors based on the input parameters </p></td>
<td><p style="text-align: left;">Allows a subclass to provide its own implementation of a method defined in its superclass </p></td>
</tr>
<tr>
<td><p style="text-align: left;">The choice of which method to call is determined at compile-time based on the number and types of arguments passed to the method </p></td>
<td><p style="text-align: left;">The choice of which method to call is determined at runtime based on the actual object being referred to </p></td>
</tr>
<tr>
<td><p style="text-align: left;">Not supported natively in Python</p></td>
<td><p style="text-align: left;">Supported natively in Python</p></td>
</tr>
</tbody>
</table>
    `,
                    code1: `//------------- Ex : 1 ----------
class Animal:
    def speak(self):
        return "Animal Make a Sound"

class Cat:
    def speak(self):
        return "Meow"

class Dog:
    def speak(self):
        return "Bark"

# Polymorphism in action
def animal_sound(animal):
    print(animal.speak())

animal = Animal()
cat = Cat()
dog = Dog()

animal_sound(cat)  # Output: Meow
animal_sound(dog)  # Output: Bark
animal_sound(animal)


//------------- Ex : 2 ----------
// Built-in Polymorphism Example:
print(len("Python"))   # 6 (length of string)
print(len([1, 2, 3]))   # 3 (length of list)
print(len({1: "a", 2: "b"}))  # 2 (length of dict)
    // len() behaves differently for string, list, and dictionary — but the function name is the same.


//------------- Ex : 3 ----------
    //  Polymorphism with Inheritance:

class Animal:
    def speak(self):
        return "Some sound"

class Cow(Animal):
    def speak(self):
        return "Moo"

animal = Animal()
cow = Cow()

print(animal.speak())  # Some sound
print(cow.speak())     # Moo

// Here, Cow overrides the speak() method from Animal. That's runtime polymorphism (method overriding).

//------------- Ex : 4 ----------

class Calculator:
    def add(self, a, b=2):
        return a+b

calc = Calculator()
print(calc.add(5))           # Output: 5
print(calc.add(5, 10))       # Output: 15


//-------------  Ex:5 -----------
//Using Variable-Length Arguments
class Calculator:
    def add(self, *args):
        return sum(args)

calc = Calculator()
print(calc.add(5))           # Output: 5
print(calc.add(5, 10))       # Output: 15
print(calc.add(1, 2, 3, 4))  # Output: 10

//------------- Ex : 6 ----------
class Person:
    def show_info(self, **kwargs):
        for key, value in kwargs.items():
            print(f"{key}: {value}")

p = Person()
p.show_info(name="Anand", age=30)
p.show_info(name="Ravi", location="Hyderabad", hobby="Reading")


//------------ Ex : 7 ---------
class Circle:
    def draw(self):
        print("Drawing circle")

class Rectangle:
    def draw(self):
        print("Drawing rectangle")

for shape in [Circle(), Rectangle()]:
    shape.draw()


// ------------ Ex : 8 ----------
class Car:
    def __init__(self, car_break, modal, speed):
        self.car_break = car_break
        self.modal = modal
        self.speed = speed

    def start(self):
        print(f"{self.modal} car started with {self.speed}")

    def stop(self):
        print(f"cat stopped with breaks{self.car_break}")


class Motorcycle:
    def __init__(self, car_break, modal, speed):
        self.car_break = car_break
        self.modal = modal
        self.speed = speed

    def start(self):
        print(f"{self.modal} car started with {self.speed}")

    def stop(self):
        print(f"cat stopped with breaks{self.car_break}")


vehicles = [Car("break On", "patha modal", "100/km"), Motorcycle("break On", "chala kotha modal", "40/km")]

for v in vehicles:
    
    if isinstance(v, Car):
        print("Car---------")
        v.start()
        v.stop()
    
    if isinstance(v, Motorcycle):
        print("Motarcycle--------")
        v.start()
        v.stop()

`
                }
            ]
        },
        {
            id: 1,
            title: "protected vs private attributes",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "getters and setters",
            note: [
                {
                    text1: `<b>Getter</b>: A method used to <b>read</b> (access) the value of a private attribute.
<b>Setter</b>: A method used to <b>modify</b> (update) the value of a private attribute.
In Python, you can define them <b>manually</b> or use the <b>@property decorator</b>.`,
                    code1: `// --------- Ex : 1 -----------
                    //Using Methods
                     class Person:
    def __init__(self, name):
        self.__name = name  # private variable

    def get_name(self):      # getter
        return self.__name

    def set_name(self, new_name):  # setter
        if len(new_name) >= 2:
            self.__name = new_name
        else:
            print("Name is too short.")

            // Output:
            p = Person("Anand")
print(p.get_name())     # Anand

p.set_name("A")         # Name is too short.
print(p.get_name())     # Anand

p.set_name("Arun")
print(p.get_name())     # Arun


            // --------- Ex : 2 -----------
            // Using @property (Pythonic way)
            class Person:
    def __init__(self, name):
        self.__name = name

    @property
    def name(self):        # getter
        return self.__name

    @name.setter
    def name(self, value):  # setter
        if len(value) >= 2:
            self.__name = value
        else:
            print("Invalid name!")

            //Output:
            p = Person("Anand")
print(p.name)           // # Anand

p.name = "A"            // # Invalid name!
print(p.name)           // # Anand

p.name = "Kumar"
print(p.name)           // # Kumar

`
                }
            ]
        },
        {
            id: 1,
            title: "Static methods",
            note: [
                {
                    text1: `A <b>static method</b> is a method that <b>belongs to a class</b> rather than an instance. It <b>does not access or modify class or instance variables.</b>
                    
                    a <b>static method</b> is a type of method that does not require any instance to be called. It is very similar to the class method but the difference is that the static method doesn't have a mandatory argument like reference to the object - <b>self</b> or reference to the class - <b>cls</b>.

                    There can be some functionality that relates to the class, but does not require any instance(s) to do some work, static methods can be used in such cases. A static method is a method which is bound to the class and not the object of the class. It can't access or modify class state. It is present in a class because it makes sense for the method to be present in class. A static method does not receive an implicit first argument. 

                    <b>How to Create Static Method in Python?</b>
There are two ways to create Python static methods -
Using staticmethod() Function
Using @staticmethod Decorator

<b>Using staticmethod() Function</b>
Python's standard library function named staticmethod() is used to create a static method. It accepts a method as an argument and converts it into a static method.

Syntax
staticmethod(method)

When function decorated with @staticmethod is called, we don't pass an instance of the class to it as it is normally done with methods. It means that the function is put inside the class but it cannot access the instance of that class. <b>Example #1</b>:

<b>Static vs Class vs Instance Methods</b>
<table data-start="1391" data-end="1973" class="w-fit min-w-(--thread-content-width)"><thead data-start="1391" data-end="1507"><tr data-start="1391" data-end="1507"><th data-start="1391" data-end="1410" data-col-size="sm">Type</th><th data-start="1410" data-end="1429" data-col-size="sm">Decorator</th><th data-start="1429" data-end="1446" data-col-size="sm">Access <code data-start="1438" data-end="1444">self</code>?</th><th data-start="1446" data-end="1462" data-col-size="sm">Access <code data-start="1455" data-end="1460">cls</code>?</th><th data-start="1462" data-end="1507" data-col-size="md">Use Case</th></tr></thead><tbody data-start="1626" data-end="1973"><tr data-start="1626" data-end="1741"><td data-start="1626" data-end="1645" data-col-size="sm">Instance Method</td><td data-col-size="sm" data-start="1645" data-end="1664"><em data-start="1647" data-end="1663">(no decorator)</em></td><td data-col-size="sm" data-start="1664" data-end="1680">✅ Yes</td><td data-col-size="sm" data-start="1680" data-end="1695">❌ No</td><td data-col-size="md" data-start="1695" data-end="1741">Regular methods, need object state</td></tr><tr data-start="1742" data-end="1857"><td data-start="1742" data-end="1761" data-col-size="sm">Class Method</td><td data-col-size="sm" data-start="1761" data-end="1780"><code data-start="1763" data-end="1777">@classmethod</code></td><td data-col-size="sm" data-start="1780" data-end="1796">❌ No</td><td data-col-size="sm" data-start="1796" data-end="1811">✅ Yes</td><td data-col-size="md" data-start="1811" data-end="1857">Access/modify class state (<code data-start="1840" data-end="1845">cls</code>)</td></tr><tr data-start="1858" data-end="1973"><td data-start="1858" data-end="1877" data-col-size="sm">Static Method</td><td data-col-size="sm" data-start="1877" data-end="1896"><code data-start="1879" data-end="1894">@staticmethod</code></td><td data-col-size="sm" data-start="1896" data-end="1912">❌ No</td><td data-col-size="sm" data-start="1912" data-end="1927">❌ No</td><td data-col-size="md" data-start="1927" data-end="1973">Utility methods not tied to object or class</td></tr></tbody></table>

                    `,
                    code1: `//✅ Syntax:

class MyClass:
    @staticmethod
    def my_static_method():
        print("I'm a static method")

You can call it using:

MyClass.my_static_method()  # ✅ Recommended
obj = MyClass()
obj.my_static_method()      # ✅ Also works


//---------------- Ex: 1 -----------
//                     # Python program to 
// # demonstrate static methods
class Maths():
    
    @staticmethod
    def addNum(num1, num2):
        return num1 + num2
        
// # Drive s code
if __name__ == "__main__":
    
    // # Calling method of class
    // # without creating instance
    res = Maths.addNum(1, 2)
    print("The result is", res)
    `
                }
            ]
        },
        {
            id: 1,
            title: "self vs cls",
            note: [
                {
                    text1: ` we have <b>self</b> and <b>cls</b> “keywords” 
                    <b>self</b>
    Refers to the <b>current instance</b> of the class.
    Used in <b>instance methods.</b>
    Lets you access or modify <b>instance variables</b> (data unique to each object).
    
    
    <b>cls</b>
    Refers to the <b>class itself</b>, not an instance.
    Used in <b>class methods.</b>
    Lets you access or modify <b>class-level attributes</b> (shared across all instances).
To use cls, you must use the <b>@classmethod</b> decorator.
`,
                    code1: `//  ---------- Ex : 1  ----------
                    class Dog:
    def __init__(self, name, age):
        // # Instance variables initialized using self
        self.name = name
        self.age = age

    def speak(self):
        // # Accessing instance variable using self
        return f"{self.name} says woof!"

    def birthday(self):
        // # Modifying instance variable using self
        self.age += 1
        return f"Happy Birthday, {self.name}! You are now {self.age} years old."

    def get_info(self):
        return f"{self.name} is {self.age} years old."



        // # Creating dog objects
dog1 = Dog("Tommy", 5)
dog2 = Dog("Rocky", 3)

// # Calling instance methods
print(dog1.speak())        # Tommy says woof!
print(dog2.get_info())     # Rocky is 3 years old.

// # Celebrate Rocky's birthday
print(dog2.birthday())     # Happy Birthday, Rocky! You are now 4 years old.
print(dog2.get_info())     # Rocky is 4 years old.

// Output:---
// Tommy says woof!
// Rocky is 3 years old.
// Happy Birthday, Rocky! You are now 4 years old.
// Rocky is 4 years old.

                    
                    //  ---------- Ex : 2  ----------
                    // To use cls, you must use the @classmethod decorator.
                    class Dog:
    species = "Canis familiaris"

    @classmethod
    def get_species(cls):
        return cls.species

        // ----------- Ex : 3 -----------
        class Dog:
    # Class variable shared by all Dog instances
    species = "Canis familiaris"

    # Constructor: initializes instance variables
    def __init__(self, name, age):
        self.name = name      # instance variable
        self.age = age        # instance variable

    # Instance method using 'self'
    def speak(self):
        return f"{self.name} barks!"

    # Another instance method
    def get_details(self):
        return f"{self.name} is {self.age} years old."

    # Class method using 'cls' to access class variable
    @classmethod
    def get_species(cls):
        return f"All dogs belong to the species: {cls.species}"

    # Class method to change species for all dogs
    @classmethod
    def change_species(cls, new_species):
        cls.species = new_species


        # Creating two dog objects
dog1 = Dog("Tommy", 5)
dog2 = Dog("Rocky", 3)

# Instance method calls
print(dog1.speak())           # Tommy barks!
print(dog2.get_details())     # Rocky is 3 years old.

# Class method call
print(Dog.get_species())      # All dogs belong to the species: Canis familiaris

# Changing species using class method
Dog.change_species("Canis lupus")

# Check updated species
print(dog1.get_species())     # All dogs belong to the species: Canis lupus
print(dog2.get_species())     # All dogs belong to the species: Canis lupus


// Tommy barks!
// Rocky is 3 years old.
// All dogs belong to the species: Canis familiaris
// All dogs belong to the species: Canis lupus
// All dogs belong to the species: Canis lupus

`
                }
            ]
        },
        {
            id: 1,
            section: `Errors & Exceptions`,
            title: "What is Exception Handling?",
            note: [
                {
                    text1: `Exception handling allows you to catch and manage runtime errors in your code, so the application doesn't crash and can respond gracefully.
                    
                    Python Exception Handling handles errors that occur during the execution of a program. Exception handling allows to respond to the error, instead of crashing the running program. It enables you to catch and manage errors, making your code more robust and user-friendly. 
                    
                    <b>Difference Between Exception and Error</b>
<b>Error</b>: Errors are serious issues that a program should not try to handle. They are usually problems in the code's logic or configuration and need to be fixed by the programmer. Examples include syntax errors and memory errors.
<b>Exception</b>: Exceptions are less severe than errors and can be handled by the program. They occur due to situations like invalid input, missing files or network issues.

<b>Syntax and Usage</b>
try:
      # Code that might raise an exception
except SomeException:
      # Code to handle the exception
else:
     # Code to run if no exception occurs
finally:
    # Code to run regardless of whether an exception occurs
    
    <b>try, except, else and finally Blocks</b>
<b>try Block</b>: try block lets us test a block of code for errors. Python will "try" to execute the code in this block. If an exception occurs, execution will immediately jump to the except block.
<b>except Block</b>: except block enables us to handle the error or exception. If the code inside the try block throws an error, Python jumps to the except block and executes it. We can handle specific exceptions or use a general except to catch all exceptions.
<b>else Block</b>: else block is optional and if included, must follow all except blocks. The else block runs only if no exceptions are raised in the try block. This is useful for code that should execute if the try block succeeds.
The <b>else</b> block <b>executes only if there is no error</b> in the <b>try</b> block.
<b>finally Block</b>: finally block always runs, regardless of whether an exception occurred or not. It is typically used for cleanup operations (closing files, releasing resources).

<b>1. Catching Multiple Exceptions</b>
We can catch multiple exceptions in a single block if we need to handle them in the same way or we can separate them if different types of exceptions require different handling.

<b>2. Custom Exception Classes Ex : 4, Ex : 5, Ex : 6</b>
For domain-specific errors, define your own exceptions:

<b>3. Logging Exceptions</b>
In production apps (Flask/Django), you shouldn't just print() errors — you should log them.

import logging
logging.basicConfig(level=logging.ERROR)
try:
    1 / 0
except ZeroDivisionError as e:
    logging.error("Error occurred: %s", e)

    <b>4. Re-raising Exceptions : Ex : 3</b>
Sometimes you want to log or partially handle, but still raise the error up:

<b>5. Exception Handling in async / await</b>
Async code can raise exceptions too:

async def fetch_data():
    try:
        response = await some_async_call()
    except TimeoutError:
        print("Request timed out")

    <b>6. Global Exception Handling in Flask</b>
Useful for consistent API error responses:
from flask import jsonify

@app.errorhandler(Exception)
def handle_global_error(e):
    return jsonify(error=str(e)), 500

    <b>7. Returning Structured JSON Error Responses</b>
Build a standard JSON format for your API:

{
  "success": False,
  "error": {
    "type": "ValueError",
    "message": "Invalid input value"
  }
}

<b>Exception hierarchy (built-in exceptions) </b>
BaseException
 └── Exception
     ├── ArithmeticError
     │   ├── ZeroDivisionError
     │   └── OverflowError
     ├── LookupError
     │   ├── IndexError
     │   └── KeyError
     ├── TypeError
     ├── ValueError
     ├── FileNotFoundError
     └── ...

<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Exception</th>
      <th>When it Occurs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ZeroDivisionError</code></td>
      <td>Division or modulo by zero (<code>10 / 0</code>)</td>
    </tr>
    <tr>
      <td><code>ValueError</code></td>
      <td>Invalid value passed (e.g. <code>int("abc")</code>)</td>
    </tr>
    <tr>
      <td><code>TypeError</code></td>
      <td>Operation between wrong types (e.g. <code>"1" + 2</code>)</td>
    </tr>
    <tr>
      <td><code>IndexError</code></td>
      <td>Accessing out-of-range list index (<code>mylist[5]</code>)</td>
    </tr>
    <tr>
      <td><code>KeyError</code></td>
      <td>Accessing a non-existent dictionary key</td>
    </tr>
    <tr>
      <td><code>FileNotFoundError</code></td>
      <td>Opening a file that doesn't exist</td>
    </tr>
    <tr>
      <td><code>NameError</code></td>
      <td>Using a variable that hasn't been defined</td>
    </tr>
    <tr>
      <td><code>AttributeError</code></td>
      <td>Calling a non-existent method on an object</td>
    </tr>
    <tr>
      <td><code>ImportError</code></td>
      <td>Module not found during <code>import</code></td>
    </tr>
    <tr>
      <td><code>IndentationError</code></td>
      <td>Wrong indentation in code</td>
    </tr>
    <tr>
      <td><code>SyntaxError</code></td>
      <td>Invalid Python syntax</td>
    </tr>
    <tr>
      <td><code>RuntimeError</code></td>
      <td>A generic error that doesn't fit other categories</td>
    </tr>
    <tr>
      <td><code>StopIteration</code></td>
      <td>Raised by <code>next()</code> when no items are left</td>
    </tr>
    <tr>
      <td><code>MemoryError</code></td>
      <td>Not enough memory to continue execution</td>
    </tr>
    <tr>
      <td><code>PermissionError</code></td>
      <td>Access denied (e.g. opening a restricted file)</td>
    </tr>
    <tr>
      <td><code>OSError</code></td>
      <td>General OS-level error (disk I/O, network fail, etc.)</td>
    </tr>
    <tr>
      <td><code>TimeoutError</code></td>
      <td>Operation exceeded allowed time</td>
    </tr>
    <tr>
      <td><code>RecursionError</code></td>
      <td>Maximum recursion depth exceeded</td>
    </tr>
  </tbody>
</table>

    `,
                    code1: `//----------- Ex : 1 ----------
                    // # ZeroDivisionError (Exception)
n = 10
res = n / 0



//----------- Ex : 2 ----------
try:
    # Risky code here
    result = 10 / 0
except ZeroDivisionError:
    print("You can't divide by zero.")


   //----------- Ex : 2 ----------
   try:
    n = 0
    res = 100 / n
    
except ZeroDivisionError:
    print("You can't divide by zero!")
    
except ValueError:
    print("Enter a valid number!")
    
else:
    print("Result is", res)
    
finally:
    print("Execution complete.") 

//----------- Ex : 2 ----------
// Catching Multiple Exceptions
    a = ["10", "twenty", 30]  # Mixed list of integers and strings
try:
    total = int(a[0]) + int(a[1])  # 'twenty' cannot be converted to int
    
except (ValueError, TypeError) as e:
    print("Error", e)
    
except IndexError:
    print("Index out of range.")


    // ---------- Ex : 3 --------
    // def risky_function():
    raise ValueError("Something went wrong")

try:
    risky_function()
except Exception as e:
    print("Logging the error")
    raise  # re-raise the same exception


    // ---------- Ex : 4 --------
class UnderAgeError(Exception):
    def __init__(self, age, message="Age must be 18 or above"):
        self.age = age
        self.message = message
        super().__init__(f"{message}. Provided: {age}")

def register_user(age):
    if age < 18:
        raise UnderAgeError(age)
    return "User registered successfully!"

try:
    print(register_user(15))
except UnderAgeError as e:
    print("Custom Error Caught:", e)


    // ---------- Ex : 5 --------
from flask import Flask, jsonify

# ✅ Define app first
app = Flask(__name__)

# ✅ Define custom exception
class InvalidID(Exception):
    def __init__(self, message="Invalid user ID"):
        self.message = message
        super().__init__(self.message)

# ✅ Route using custom exception
@app.route('/user/<int:user_id>')
def get_user(user_id):
    if user_id <= 0:
        raise InvalidID("User ID must be a positive number")
    return jsonify({"user_id": user_id})

# ✅ Custom error handler
@app.errorhandler(InvalidID)
def handle_invalid_id(e):
    return jsonify({"error": str(e)}), 400

# ✅ Run the app
if __name__ == '__main__':
    app.run(debug=True)


    // ---------- Ex : 6 --------
    from flask import Flask, jsonify, request

app = Flask(__name__)

# ✅ Custom Exception Class
class UnderAgeError(Exception):
    def __init__(self, age, message="User must be 18 years or older"):
        self.age = age
        self.message = message
        super().__init__(f"{message}. Given age: {age}")

# ✅ Route that uses custom exception
@app.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()
    age = data.get("age")

    try:
        if age is None:
            raise ValueError("Age is required")
        if age < 18:
            raise UnderAgeError(age)

        return jsonify({"message": "Registration successful!"})
    
    except UnderAgeError as e:
        return jsonify({"error": str(e)}), 400
    
    except ValueError as ve:
        return jsonify({"error": str(ve)}), 422

# ✅ Optional: Handle all unknown exceptions globally
@app.errorhandler(Exception)
def handle_unexpected_error(e):
    return jsonify({"error": f"Internal server error: {str(e)}"}), 500

# ✅ Run the app
if __name__ == '__main__':
    app.run(debug=True)

`
                }
            ]
        },
        {
            id: 1,
            section: `Multithreading`,
            title: "What is Multithreading?",
            note: [
                {
                    text1: `Running multiple tasks <b>at the same time</b> in a single process using threads.
                    A thread is a lightweight unit of a process
Threads share memory space with the main thread

In Python, multithreading allows you to run multiple threads concurrently within a single process, which is also known as thread-based parallelism. This means a program can perform multiple tasks at the same time, enhancing its efficiency and responsiveness.

A thread is an entity within a process that can be scheduled for execution. Also, it is the smallest unit of processing that can be performed in an OS (Operating System). In simple words, a thread is a sequence of such instructions within a program that can be executed independently of other code. For simplicity, you can assume that a thread is simply a subset of a process! A thread contains all this information in a Thread Control Block (TCB) :

Multithreading in Python involves creating and managing multiple threads within a program. Threads execute concurrently, enabling parallel execution of tasks. This can improve performance, facilitate concurrent operations, and enhance responsiveness, especially for I/O-bound tasks or operations involving waiting.

To achieve multithreading in Python, we can use the following two modules:
The Thread Module
The Threading Module

Each thread runs <b>independently</b>, so:
    Your main program continues
    Background tasks (like a timer, loader, or scheduled function) run in parallel
    
    <b>Delayed Execution</b>	time.sleep() ->	setTimeout()
<b>Repeated Execution</b>	threading.Timer() ->  setInterval()
<b>True Multithreading</b>	threading.Thread ->	Web Workers (kinda)
<b>Async Execution</b>	asyncio ->	JS Promises/async

We use threading.main_thread() function to get the main thread object. In normal conditions, the main thread is the thread from which the Python interpreter was started. name attribute of the thread object is used to get the name of the thread. Then we use the threading.current_thread() function to get the current thread object.

The main thread will exit whenever it has finished executing all the code in your script that is not started in a separate thread. For instance, when you start a new thread using start() method, the main thread will continue to execute the remaining code in the script until it reaches the end and then exit.

<b>Which thread starts first: Main thread or Child thread?</b>
    <b>The main thread always starts first.</b>
It is the entry point of every Python program. When you run a script, it begins executing in the main thread. Only after that can you create and start child threads.
In Python, when a program starts, the default thread that executes the program's code is the Main Thread. Any other threads created within the program, referred to as Child Threads, are initiated by the Main Thread.

Therefore, the Main Thread starts first, as it is the initial entry point for the program's execution. Child threads are subsequently created and started by the Main Thread using methods like <b>Thread.start()</b>. While child threads run concurrently with the Main Thread after being started, the Main Thread is always the first to begin execution.

You can check which thread your code is running on with <b>threading.current_thread() == threading.main_thread().</b>

<b>Key Point for Interviews</b>:
    Even though you call <b>t.start()</b> from the main thread, the actual execution of the child thread is <b>scheduled by the OS</b>, so their <b>execution order may vary</b>, but the <b>main thread always starts first</b>.
`,
                    code1: `// ------------ Ex : 1 ----------
                    import threading

def greet():
    print("Hi! I'm running in a thread")
    threading.Timer(2, greet).start()

greet()

                    
                    
                    // ------------ Ex : 2 ----------
                    import time

for val in range(10):
    print(val)
    time.sleep(1)

                    
                    // ------------ Ex : 3 ----------
          import threading
import time

def print_hello():
    while True:
        print("Hello from thread")
        time.sleep(2)

# Start background thread
threading.Thread(target=print_hello, daemon=True).start()

# Main thread
for i in range(5):
    print(f"Main loop: {i}")
    time.sleep(1)
          
                    
                    // ------------ Ex : 4 ----------
                    // Main Thread Behavior in Python
         import threading
import time

def func(x):
   print('Current Thread Details:',threading.current_thread())
   for n in range(x):
      print('Internal Thread Running', n)
   print('Internal Thread Finished...')

t = threading.Thread(target=func, args=(6,))
t.start()

for i in range(3):
   print('Main Thread Running',i)
print("Main Thread Finished...")           
                    
                    // ------------ Ex : 5 ----------
                    import threading

def child_task():
    print("Child thread started")

print("Main thread started")

t = threading.Thread(target=child_task)
t.start()

print("Main thread finished")

// Output:
// Main thread started
// Main thread finished
// Child thread started

// Or sometimes:
// Main thread started
// Child thread started
// Main thread finished
                    
                    // ------------ Ex : 6 ----------`
                },
                {
                    text1: `<b>Creating Threads</b> 
                    Using <b>threading.Thread()</b>

                    To create a new thread, we create an object of the Thread class. It takes the 'target' and 'args' as the parameters. The target is the function to be executed by the thread whereas the args is the arguments to be passed to the target function.
                    t1 = threading.Thread(target, args)
t2 = threading.Thread(target, args)

<b>Start a Thread</b>
To start a thread, we use the start() method of the Thread class.
t1.start()
t2.start()
                    `,
                    code1: `// Syntax : 
                    // threading.Thread(target=callable, args=())
                    // ----------- Ex : 1 ---------
                    // Creating Threads - ( threading.Thread() )
                    import threading

def task():
    print("Task running")

t = threading.Thread(target=task)
t.start()



// ----------- Ex : 2 ---------
import threading


def print_cube(num):
    print("Cube: {}" .format(num * num * num))


def print_square(num):
    print("Square: {}" .format(num * num))


if __name__ =="__main__":
    t1 = threading.Thread(target=print_square, args=(10,))
    t2 = threading.Thread(target=print_cube, args=(10,))

    t1.start()
    t2.start()

    t1.join()
    t2.join()

    print("Done!")


// ---------- Ex : 3 --------
import threading
import time

def crawl(link, delay=3):
    print(f"crawl started for {link}")
    time.sleep(delay)  # Blocking I/O (simulating a network request)
    print(f"crawl ended for {link}")

links = [
    "https://python.org",
    "https://docs.python.org",
    "https://peps.python.org",
]

// # Start threads for each link
threads = []
for link in links:
    // # Using \`args\` to pass positional arguments and \`kwargs\` for keyword arguments
    t = threading.Thread(target=crawl, args=(link,), kwargs={"delay": 2})
    threads.append(t)

// # Start each thread
for t in threads:
    t.start()

// # Wait for all threads to finish
for t in threads:
    t.join()
`
                }
            ]
        },
        {
            id: 1,
            title: "Joining Threads",
            note: [
                {
                    text1: `Wait for a thread to finish using <b>.join()</b>
                    The join() method in Python's threading module is used to block the calling thread (typically the main thread) until the thread on which join() is called has completed its execution. 

                    In Python, thread_object.join() is used to block the calling thread until the thread on which join() is called has finished executing. It ensures that a thread completes its task before the main program or another thread continues. This is essential for managing dependencies between threads and avoiding race conditions.
                    
                    The .join() method delays a program's flow of execution until the target thread has been completely read.
                    
                    The following example features two threads, <b>thread_A</b> and <b>thread_B</b>. Each thread makes a call to <b>.start()</b>, immediately followed by a call to <b>.join()</b>.
                    
                    The second thread, <b>thread_B</b>, cannot start before <b>thread_A</b> is finished due to <b>.join()</b>.`,
                    code1: `// Syntax
                    // thread_object.join(timeout)
// ------------- Ex : 1 -----------
import threading
import time

def worker():
    print("Child thread: started")
    time.sleep(2)
    print("Child thread: finished")

# This runs in the main thread
print("Main thread: starting")

t = threading.Thread(target=worker)
t.start()

t.join()  # Main thread waits here

print("Main thread: all done")

// Output:
// Main thread: starting
// Child thread: started
// Child thread: finished
// Main thread: all done

// ------------- Ex : 2 -----------
                    import threading

def is_divisible(dividend, divisor):
  print("Starting...")
  if(dividend % divisor == 0):
    print(True)
  else:
    print(False)
  print("Finished")

thread_A = threading.Thread(target=is_divisible, args=(28, 14))
thread_B = threading.Thread(target=is_divisible, args=(34, 7))

thread_A.start()
thread_A.join()

thread_B.start()
thread_B.join()

//Output: 
// Starting...
// True
// Finished
// Starting...
// False
// Finished
`
                }
            ]
        }, 
        {
            id: 1,
            title: "Daemon Threads",
            note: [
                {
                    text1: `Dies when the main thread ends`,
                    code1: ``
                }
            ]
        },     
        {
            id: 1,
            title: "Race Conditions",
            note: [
                {
                    text1: `Dies when the main thread ends`,
                    code1: ``
                }
            ]
        },    
        {
            id: 1,
            title: "Locks / Synchronization",
            note: [
                {
                    text1: `Dies when the main thread ends`,
                    code1: ``
                }
            ]
        },   
                {
            id: 1,
            title: "Thread-safe Code",
            note: [
                {
                    text1: `Dies when the main thread ends`,
                    code1: ``
                }
            ]
        }, 
                        {
            id: 1,
            title: "Timers",
            note: [
                {
                    text1: `Dies when the main thread ends`,
                    code1: ``
                }
            ]
        }, 
                        {
            id: 1,
            title: "ThreadPoolExecutor",
            note: [
                {
                    text1: `Dies when the main thread ends`,
                    code1: ``
                }
            ]
        }, 
        {
            id: 1,
            title: "Multithreading vs Multiprocessing",
            note: [
                {
                    text1: `Dies when the main thread ends`,
                    code1: ``
                }
            ]
        }, 
                {
            id: 1,
            title: "Queues in Multithreading",
            note: [
                {
                    text1: `Dies when the main thread ends`,
                    code1: ``
                }
            ]
        }, 
                {
            id: 1,
            title: "Deadlock & Avoidance",
            note: [
                {
                    text1: `Dies when the main thread ends`,
                    code1: ``
                }
            ]
        }, 
        {
            id: 1,
            section: `Synchronization`,
            title: "Asynchronous Programming with Asyncio",
            note: [
                {
                    text1: `In the programming world, the concept of "non-blocking" is pervasive. JavaScript developers often use the term "asynchronous" because it is one of JavaScript's strengths. However, to truly understand asynchronous programming, it's essential to grasp the concepts of concurrent and parallel programming.

<b>Concurrent Programming</b>
When several independent entities are working simultaneously, the programming is concurrent. It doesn't necessarily mean that these tasks are running at the exact same time. Instead, it means that tasks are making progress over time by sharing resources, such as CPU time. The main advantage of concurrent programming is its robustness: if one process crashes, the rest of your program continues to function.

<b>Parallel Programming</b>
If an algorithm can divide its work into several parts, it is parallel. The more processors you have, the more you benefit from parallelism. Efficient parallel programming optimizes the resources of modern machines for better performance.

<b>Illustrating Concurrency vs. Parallelism with Cooking</b>
<b>Concurrency Example</b>:
Imagine you are preparing a meal where you need to grill some meat and make a sauce. You start by putting the meat on the barbecue. While the meat is grilling, you chop the tomatoes and other vegetables for the sauce. Then, you begin boiling the sauce while occasionally checking on the meat. Here, both tasks (grilling the meat and making the sauce) are in progress, but you are switching your attention between them. This represents concurrency.

<b>Parallelism Example</b>:
Now, let's say you have a friend to help you. While you focus on grilling the meat, your friend takes care of making the sauce. Both tasks are being done simultaneously without the need to switch attention between them. This represents parallelism.

<b>What is Asynchronous Programming?</b>
Asynchronous programming involves handling input/output (I/O) operations that occur outside your program, such as user input, printing to a terminal, reading from a socket, or writing to disk. The key characteristics of asynchronous I/O are:

The time taken by the operation is not CPU-dependent. Instead, it depends on factors like disk speed, network latency, and other external conditions.

The program cannot predict when the operation will end.

For services with significant I/O (like web servers, databases, and deployment scripts), optimizing these operations can greatly improve performance.

Let's see examples of blocking code and non-blocking code.`,
                    code1: `// ------------ Ex : 1 ------------
                    // Example of Blocking and Non-blocking Code
import time

def task():
    time.sleep(2)
    print("Hello")

for _ in range(3):
    task()
    // In this synchronous program, each task waits for the previous one to finish, causing delays.
    
    // ------------ Ex : 2 ------------
    // let's look at an asynchronous version using <b>asyncio</b>:
    import asyncio

async def task():
    await asyncio.sleep(2)
    print("Hello")

async def main():
    tasks = [task() for _ in range(3)]
    await asyncio.gather(*tasks)

asyncio.run(main())
// In this asynchronous program, tasks run concurrently, reducing the total execution time. Let's explore the components of asynchronous programming.

<b>Components of Asynchronous Programming</b>
Event loops, coroutines, and futures are the essential elements of an asynchronous Python program.

<b>Event Loop</b>: Manages task switching and execution flow, keeping track of tasks to be run asynchronously.

<b>Coroutines</b>: Special functions that can be paused and resumed, allowing other tasks to run during the wait. A coroutine specifies where in the function the task-switching event should take place, returning control to the event loop. Coroutines are typically created by the event loop and stored internally in a task queue.

<b>Futures</b>: Placeholders for results from coroutines, storing the result or exceptions. As soon as the event loop initiates a coroutine, a corresponding future is created that stores the result of the coroutine, or an exception if one was thrown during the coroutine's execution.
    `
                }
            ]
        }, 
        {
            id: 1,
            title: "async / await",
            note: [
                {
                    text1: `<b>async</b> and <b>await</b> in Python are used to define and run <b>non-blocking asynchronous code</b> using the <b>asyncio</b> library. This allows for better performance in I/O-bound tasks by enabling concurrent execution without using threads.
                    
                    <b>async</b> declares an asynchronous function
<b>await</b> pauses the function execution until the awaited task completes

<b><span style="color:red">asyncio.run()</span></b>: is used to <b>run an async function</b> from the <b>top-level</b> of your Python program.
It starts the <b>event loop</b>, runs your coroutine, and then <b>closes the loop</b> automatically when it's done.
Start the async engine, run this coroutine, and shut it down when finished.

<b>1. “This function runs the passed coroutine…”</b>
✔️ It means you pass an async def function to asyncio.run(), and it will run that function completely — start to finish.

-> This function runs the passed coroutine, taking care of managing the asyncio event loop and finalizing asynchronous generators.

-> This function cannot be called when another asyncio event loop is running in the same thread.

-> If debug is <b>True</b>, the event loop will be run in debug mode.
    You can pass debug=True to help detect bugs in your async code:
asyncio.run(main(), debug=True)

-> This function always creates a new event loop and closes it at the end. It should be used as a main entry point for asyncio programs, and should ideally only be called once.

<b>Note</b>: asyncio.run() must be called only once per program — it's for top-level scripts only, not inside another running event loop (like in Jupyter notebooks).

<b><span style="color:red">asyncio.sleep()</span></b>
    <b>asyncio.sleep()</b> is a non-blocking version of <b>time.sleep()</b> used in asynchronous (async) functions.

It pauses the current coroutine without blocking the entire program — allowing other async tasks to run during the wait.

If result is provided, it is returned to the caller when the coroutine completes.
sleep() always suspends the current task, allowing other tasks to run.
Syntax :  await asyncio.sleep(seconds)

    <b>Ex : 2</b>
    -> 🔁 <b>get_running_loop()</b> returns the <b>active event loop</b> (which is auto-created by asyncio.run()).
    -> You can use this to access precise <b>event-loop-based time</b>, which is monotonic (never goes backward).
    print(loop)
    end_time = loop.time() + 5.0
    -> 🕒 <b>loop.time()</b> gives current time from event loop (in seconds).
    -> So end_time = now + 5 seconds.
->     Prints the current real-world time every second.
-> Runs until ~4 seconds have passed, because it's checking:
loop.time() + 1.0 >= end_time


<b><span style="color:red">asyncio.gather</span></b>
Runs multiple <b>awaitable</b> tasks concurrently and <b>waits for all of them to complete</b>.
In the <b>Ex : 3</b>, we are trying to continue the execution of other tasks even if another one executing is sleeping (blocking). Notice the <b>async</b> keyword in front of the <b>task</b> and <b>main</b> functions.

Those functions are now <b>coroutines</b>.
Coroutines functions in Python are preceded by the keyword <b>async</b>. The <b>main()</b> function here is the task coordinator or our single event loop, as it executes all tasks using the <b>async.gather</b> method. The <b>asyncio.gather</b> function runs <b>awaitable</b> objects concurrently.


<b><span style="color:red">asyncio.shield</span></b>
`,
                    code1: `// ---------- Ex : 1 ----------
                    import asyncio

async def main():
    print("Hello from async")

asyncio.run(main())



//-------------  Ex : 2 -----------
import asyncio
import datetime

async def display_date():
    loop = asyncio.get_running_loop()
    print(loop)
    end_time = loop.time() + 5.0
    while True:
        print(datetime.datetime.now())
        if (loop.time() + 1.0) >= end_time:
            break
        await asyncio.sleep(1)

asyncio.run(display_date())


//Output:
// <_UnixSelectorEventLoop running=True closed=False debug=False>
// 2025-06-27 23:47:00.521097
// 2025-06-27 23:47:01.521327
// 2025-06-27 23:47:02.522314
// 2025-06-27 23:47:03.522953


//-------------  Ex : 2 -----------
import asyncio

async def task():
    await asyncio.sleep(2)
    print("Hello")

async def main():
    tasks = [task() for _ in range(3)]
    await asyncio.gather(*tasks)

asyncio.run(main())

// Output:
// Hello
// Hello
// Hello

//-------------  Ex : 3 -----------
import aiohttp
import asyncio

async def fetch(session, city):
    url = f"https://www.prevision-meteo.ch/services/json/{city}"
    async with session.get(url) as response:
        data = await response.json()
        print(f"Temperature at {city}: {data['current_condition']['tmp']} C")

async def main():
    async with aiohttp.ClientSession() as session:
        cities = ['paris', 'toulouse', 'marseille']
        tasks = [fetch(session, city) for city in cities]
        await asyncio.gather(*tasks)

asyncio.run(main())
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
            section: `Networking`,
            title: "Networking",
            note: [
                {
                    text1: `<b>Network Programming Basics</b>
Network programming involves writing software that allows different systems and applications to communicate over a network. This can range from simple applications, like sending messages between computers, to more complex systems, such as distributed databases and web servers. Network programming is essential in today's connected world, enabling everything from browsing the internet to conducting secure online transactions.

<b>Understanding Networking Concepts</b>
Before diving into Python's capabilities for network programming, it's important to understand some fundamental networking concepts:

<b>Network Protocols</b>: These are rules and conventions for communication between network devices. Common protocols include TCP (Transmission Control Protocol) and UDP (User Datagram Protocol). TCP is reliable and makes sure that data is delivered in order, making it suitable for applications like web browsing and email. UDP, on the other hand, is faster but does not guarantee delivery or order, making it suitable for applications like live video streaming and online gaming.
<b>IP Addresses</b>: Every device on a network has a unique IP (Internet Protocol) address, which acts as its identifier. There are two versions of IP addresses: IPv4 and IPv6. IPv4 addresses are 32-bit numbers, typically written as four decimal numbers separated by dots (e.g., 192.168.1.1). IPv6 addresses are 128-bit numbers, written as eight groups of four hexadecimal digits separated by colons.
<b>Ports</b>: Ports are numerical identifiers for specific processes or services on a device. For example, web servers typically use port 80 for HTTP traffic and port 443 for HTTPS traffic. When data is sent to an IP address, the port number indicates which application should receive the data.
<b>Sockets</b>: A socket is an endpoint for communication between two devices. It combines an IP address and a port number to uniquely identify a connection. Sockets provide a way for software to read and write data across the network.

<b>The Role of Python in Network Programming</b>
The Python includes several built-in libraries that simplify network tasks, such as:

<b>socket</b>: This library provides low-level access to network interfaces, allowing you to create and manage network connections using both TCP and UDP protocols.
<b>http.client and http.server</b>: These libraries offer higher-level functions for creating HTTP clients and servers, making it easier to build web-based applications.
<b>urllib and requests</b>: These libraries simplify working with URLs and handling HTTP requests, enabling you to interact with web APIs and download content from the web.
<b>asyncio</b>: This library provides support for asynchronous programming, allowing you to handle multiple network connections concurrently without blocking the main execution thread.

<b>Why Use Python for Network Programming?</b>
There are several reasons why Python is a popular choice for network programming:

<b>Simplicity and Readability</b>: Python's clean syntax and readability make it easier to write and understand network code, reducing the likelihood of bugs and making maintenance simpler.
<b>Extensive Libraries</b>: Python's standard library includes many modules for network programming, and there are numerous third-party libraries available for more specialized tasks.
<b>Cross-Platform Compatibility</b>: Python is cross-platform, meaning that code written on one operating system will typically run on another with little or no modification. This is particularly useful in network programming, where applications often need to run on different types of devices.
<b>Community and Support</b>: Python has a large and active community of developers, providing a wealth of resources, tutorials, and libraries. This makes it easier to find solutions to problems and get help when needed.

<b>Practical Applications of Python in Network Programming</b>
Python can be used for a wide range of network programming tasks, including:

<b>Creating Web Servers</b>: Python can be used to create web servers that handle HTTP requests and serve web pages or APIs. Frameworks like Flask and Django simplify the process of building web applications.
<b>Developing Network Tools</b>: Python is often used to create tools for network diagnostics, monitoring, and management. Examples include network scanners, packet sniffers, and traffic analyzers.
<b>Automating Network Tasks</b>: Python scripts can automate various network-related tasks, such as configuring network devices, managing network services, and performing regular network maintenance.
<b>Building Chat Applications</b>: Python can be used to create real-time chat applications that allow users to communicate over a network. These applications can range from simple command-line tools to complex, feature-rich messaging platforms.

<b>Creating Sockets in Python</b>
Sockets are fundamental to network programming as they provide the interface for sending and receiving data between devices on a network. In Python, the socket module is used to create and manage sockets, supporting both TCP and UDP protocols. Here we will go through the process of creating sockets and establishing basic network communication.

<b>Understanding Sockets</b>
A socket is essentially a combination of an IP address and a port number, creating a unique endpoint for network communication. There are two main types of sockets:

<b>Stream Sockets (TCP)</b>: These sockets use the Transmission Control Protocol (TCP) to provide reliable, connection-oriented communication. They make sure that data is delivered in the correct order and without errors.
<b>Datagram Sockets (UDP)</b>: These sockets use the User Datagram Protocol (UDP) to provide connectionless communication. They are faster but do not guarantee delivery or order, making them suitable for applications where speed is more critical than reliability.

<b>Creating a TCP Socket</b>
Creating a TCP socket in Python is straightforward. Here’s a step-by-step guide:

<b>Import the socket module</b>: The <b>socket</b> module provides the necessary functions and constants for network communication.
<b>Create a socket object</b>: Use the <b>socket.socket()</b> function to create a new socket object.
Bind the socket to an address and port</b>: Use the <b>bind()</b> method to associate the socket with a specific IP address and port number.
<b>Listen for incoming connections</b>: Use the <b>listen()</b> method to enable the socket to accept connections.
<b>Accept a connection</b>: Use the <b>accept()</b> method to wait for an incoming connection. This method returns a new socket object representing the connection and the address of the client.
<b>Receive and send data</b>: Use the <b>recv()</b> and <b>sendall()</b> methods to receive and send data over the connection.
<b>Close the connection</b>: Use the <b>close()</b> method to close the socket when done.

<b>Creating a UDP Socket</b>
Creating a UDP socket is similar to creating a TCP socket, but with some differences. UDP sockets are connectionless, meaning there is no need to establish a connection before sending data. Here’s how to create a UDP socket:

Import the <b>socket</b> module.
Create a socket object using the <b>socket.socket()</b> function with <b>socket.AF_INET</b> and <b>socket.SOCK_DGRAM</b>.
<b>Bind the socket to an address and port</b> using the <b>bind()</b> method.
<b>Send and receive data</b> using the <b>sendto()</b> and <b>recvfrom()</b> methods.

<b>Error Handling in Sockets</b>
Network communication can be unpredictable, so it's important to handle errors gracefully. Python's <b>socket</b> module raises exceptions for various errors, such as <b>socket.error, socket.timeout</b>, and <b>socket.gaierror</b>. You can use try-except blocks to handle these exceptions and make sure your program can recover from errors:

<b>Client-Server Communication</b>
Client-server communication is a fundamental concept in network programming. It involves two main components: the client, which initiates the communication, and the server, which responds to the client’s requests. This section will guide you through the process of implementing client-server communication in Python using both TCP and UDP protocols.

<b>Implementing TCP Client-Server Communication</b>
TCP (Transmission Control Protocol) is a connection-oriented protocol that makes sure reliable and ordered delivery of data. It is commonly used in applications where data integrity is crucial, such as web servers and email clients.

<b>TCP Server</b>
First, let's create a simple TCP server that listens for incoming connections and echoes back any data it receives. This server will run indefinitely, handling one connection at a time.

<b>IP address</b>	A unique address assigned to each device in a network (e.g., 127.0.0.1)
<b>Port</b>	A logical endpoint for communication (e.g., Flask runs on port 5000)
<b>Protocol</b>	Rules for data exchange, like HTTP, TCP, UDP
<b>Client/Server</b>	Client sends request → Server responds
<b>Socket</b>	Endpoint for sending/receiving raw data
<b>DNS</b>	Translates names like google.com to IP addresses
<b>CORS</b>	Security rule that restricts how websites from different origins communicate`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: `Python libraries`,
            title: "math",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "random",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
                {
            id: 1,
            title: "datetime",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
                {
            id: 1,
            title: "What is Python?",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
                {
            id: 1,
            title: "What is Python?",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: `dvanced Python`,
            title: "dvanced opics",
            note: [
                {
                    text1: `✅ Itertools & functools	❌ Not yet
✅ Threading & Multiprocessing	❌ Not yet
✅ Type Hinting (Python 3.9+)	❌ Not yet
✅ Async/Await	❌ Not yet
✅ Logging & Debugging`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "What is Python?",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Python Built-in Methods and Functions",
            note: [
                {
                    text1: `<h2>✅ String Methods</h2>
                    <table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Method</th>
      <th>Syntax</th>
      <th>Definition</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>capitalize()</td>
      <td>str.capitalize()</td>
      <td>Capitalizes first character</td>
      <td>Returns string with first letter capitalized</td>
      <td><code>"hello".capitalize() → "Hello"</code></td>
    </tr>
    <tr>
      <td>lower()</td>
      <td>str.lower()</td>
      <td>Converts to lowercase</td>
      <td>All characters to lowercase</td>
      <td><code>"HeLLo".lower() → "hello"</code></td>
    </tr>
    <tr>
      <td>upper()</td>
      <td>str.upper()</td>
      <td>Converts to uppercase</td>
      <td>All characters to uppercase</td>
      <td><code>"hi".upper() → "HI"</code></td>
    </tr>
    <tr>
      <td>strip()</td>
      <td>str.strip()</td>
      <td>Removes whitespace</td>
      <td>Removes leading/trailing spaces</td>
      <td><code>" hello ".strip() → "hello"</code></td>
    </tr>
    <tr>
      <td>replace()</td>
      <td>str.replace(old, new)</td>
      <td>Replaces substring</td>
      <td>Replaces all occurrences</td>
      <td><code>"abc".replace("a", "z") → "zbc"</code></td>
    </tr>
    <tr>
      <td>split()</td>
      <td>str.split([sep])</td>
      <td>Splits string</td>
      <td>Returns list of substrings</td>
      <td><code>"a,b,c".split(",") → ['a','b','c']</code></td>
    </tr>
    <tr>
      <td>join()</td>
      <td>sep.join(iterable)</td>
      <td>Joins elements with separator</td>
      <td>Concatenates list into string</td>
      <td><code>"-".join(['a','b']) → "a-b"</code></td>
    </tr>
    <tr>
      <td>find()</td>
      <td>str.find(sub)</td>
      <td>Finds index of substring</td>
      <td>Returns first occurrence or -1</td>
      <td><code>"hello".find("e") → 1</code></td>
    </tr>
    <tr>
      <td>startswith()</td>
      <td>str.startswith(prefix)</td>
      <td>Checks start</td>
      <td>Returns True if string starts with prefix</td>
      <td><code>"abc".startswith("a") → True</code></td>
    </tr>
    <tr>
      <td>endswith()</td>
      <td>str.endswith(suffix)</td>
      <td>Checks end</td>
      <td>Returns True if string ends with suffix</td>
      <td><code>"abc".endswith("c") → True</code></td>
    </tr>
  </tbody>
</table>

<h2>📋 2. List Methods</h2>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Method</th>
      <th>Syntax</th>
      <th>Definition</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>append()</td>
      <td>list.append(x)</td>
      <td>Adds item to end</td>
      <td>Modifies the list in place</td>
      <td><code>[1, 2].append(3) → [1, 2, 3]</code></td>
    </tr>
    <tr>
      <td>extend()</td>
      <td>list.extend(iterable)</td>
      <td>Adds multiple items</td>
      <td>Concatenates lists</td>
      <td><code>[1].extend([2,3]) → [1,2,3]</code></td>
    </tr>
    <tr>
      <td>insert()</td>
      <td>list.insert(i, x)</td>
      <td>Inserts at position</td>
      <td>Shifts elements right</td>
      <td><code>[1,3].insert(1,2) → [1,2,3]</code></td>
    </tr>
    <tr>
      <td>remove()</td>
      <td>list.remove(x)</td>
      <td>Removes first match</td>
      <td>Raises error if not found</td>
      <td><code>[1,2,3].remove(2) → [1,3]</code></td>
    </tr>
    <tr>
      <td>pop()</td>
      <td>list.pop([i])</td>
      <td>Removes and returns</td>
      <td>Default is last item</td>
      <td><code>[1,2,3].pop() → 3</code></td>
    </tr>
    <tr>
      <td>clear()</td>
      <td>list.clear()</td>
      <td>Removes all items</td>
      <td>Empties the list</td>
      <td><code>[1,2].clear() → []</code></td>
    </tr>
    <tr>
      <td>index()</td>
      <td>list.index(x)</td>
      <td>Returns index</td>
      <td>Of first occurrence</td>
      <td><code>[1,2,3].index(2) → 1</code></td>
    </tr>
    <tr>
      <td>count()</td>
      <td>list.count(x)</td>
      <td>Counts occurrences</td>
      <td>Returns number of matches</td>
      <td><code>[1,1,2].count(1) → 2</code></td>
    </tr>
    <tr>
      <td>sort()</td>
      <td>list.sort()</td>
      <td>Sorts list</td>
      <td>In ascending order by default</td>
      <td><code>[3,1,2].sort() → [1,2,3]</code></td>
    </tr>
    <tr>
      <td>reverse()</td>
      <td>list.reverse()</td>
      <td>Reverses list</td>
      <td>In-place reversal</td>
      <td><code>[1,2,3].reverse() → [3,2,1]</code></td>
    </tr>
  </tbody>
</table>

<h2>🔑 3. Dictionary Methods</h2>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Method</th>
      <th>Syntax</th>
      <th>Definition</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>get()</td>
      <td>dict.get(key, default)</td>
      <td>Returns value by key</td>
      <td>Returns default if not found</td>
      <td><code>d.get("a", 0)</code></td>
    </tr>
    <tr>
      <td>keys()</td>
      <td>dict.keys()</td>
      <td>Returns keys</td>
      <td>As a view object</td>
      <td><code>dict.keys()</code></td>
    </tr>
    <tr>
      <td>values()</td>
      <td>dict.values()</td>
      <td>Returns values</td>
      <td>As a view object</td>
      <td><code>dict.values()</code></td>
    </tr>
    <tr>
      <td>items()</td>
      <td>dict.items()</td>
      <td>Returns key-value pairs</td>
      <td>As a view object</td>
      <td><code>dict.items()</code></td>
    </tr>
    <tr>
      <td>update()</td>
      <td>dict.update([other])</td>
      <td>Merges dictionaries</td>
      <td>Adds or overwrites keys</td>
      <td><code>d.update({'b': 2})</code></td>
    </tr>
    <tr>
      <td>pop()</td>
      <td>dict.pop(key[,default])</td>
      <td>Removes key</td>
      <td>Returns value or default</td>
      <td><code>d.pop("a")</code></td>
    </tr>
    <tr>
      <td>popitem()</td>
      <td>dict.popitem()</td>
      <td>Removes last inserted</td>
      <td>Returns key-value tuple</td>
      <td><code>d.popitem()</code></td>
    </tr>
    <tr>
      <td>clear()</td>
      <td>dict.clear()</td>
      <td>Removes all items</td>
      <td>Empties dictionary</td>
      <td><code>d.clear()</code></td>
    </tr>
    <tr>
      <td>setdefault()</td>
      <td>dict.setdefault(key[,default])</td>
      <td>Returns key value</td>
      <td>Inserts key with default if missing</td>
      <td><code>d.setdefault("a", 1)</code></td>
    </tr>
    <tr>
      <td>copy()</td>
      <td>dict.copy()</td>
      <td>Shallow copy</td>
      <td>Returns a copy of dict</td>
      <td><code>copy_dict = d.copy()</code></td>
    </tr>
  </tbody>
</table>


<h2>🔵 4. Set Methods</h2>
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Method</th>
      <th>Syntax</th>
      <th>Definition</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>add()</td>
      <td>set.add(elem)</td>
      <td>Adds an element</td>
      <td>Adds a unique element to the set</td>
      <td><code>s.add(4)</code></td>
    </tr>
    <tr>
      <td>update()</td>
      <td>set.update(iterable)</td>
      <td>Adds multiple elements</td>
      <td>Updates set with items from iterable</td>
      <td><code>s.update([5,6])</code></td>
    </tr>
    <tr>
      <td>remove()</td>
      <td>set.remove(elem)</td>
      <td>Removes element</td>
      <td>Raises error if not found</td>
      <td><code>s.remove(3)</code></td>
    </tr>
    <tr>
      <td>discard()</td>
      <td>set.discard(elem)</td>
      <td>Removes element safely</td>
      <td>Does not raise error if not found</td>
      <td><code>s.discard(10)</code></td>
    </tr>
    <tr>
      <td>pop()</td>
      <td>set.pop()</td>
      <td>Removes random element</td>
      <td>Returns and removes arbitrary element</td>
      <td><code>s.pop()</code></td>
    </tr>
    <tr>
      <td>clear()</td>
      <td>set.clear()</td>
      <td>Removes all elements</td>
      <td>Empties the set</td>
      <td><code>s.clear()</code></td>
    </tr>
    <tr>
      <td>union()</td>
      <td>set.union(other)</td>
      <td>Returns union</td>
      <td>Combines sets</td>
      <td><code>s.union({5,6})</code></td>
    </tr>
    <tr>
      <td>intersection()</td>
      <td>set.intersection(other)</td>
      <td>Returns intersection</td>
      <td>Common elements</td>
      <td><code>s1.intersection(s2)</code></td>
    </tr>
    <tr>
      <td>difference()</td>
      <td>set.difference(other)</td>
      <td>Returns difference</td>
      <td>Items only in first set</td>
      <td><code>s1.difference(s2)</code></td>
    </tr>
    <tr>
      <td>issubset()</td>
      <td>set.issubset(other)</td>
      <td>Checks if subset</td>
      <td>Returns True if set is a subset</td>
      <td><code>{1,2}.issubset({1,2,3})</code></td>
    </tr>
    <tr>
      <td>issuperset()</td>
      <td>set.issuperset(other)</td>
      <td>Checks if superset</td>
      <td>Returns True if set is a superset</td>
      <td><code>{1,2,3}.issuperset({1,2})</code></td>
    </tr>
  </tbody>
</table>




<h2>🔢 5. Numeric & General Functions</h2>

<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Function</th>
      <th>Syntax</th>
      <th>Definition</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>round()</td>
      <td>round(number[, ndigits])</td>
      <td>Rounds a number</td>
      <td>To nearest whole number or decimal places</td>
      <td><code>round(3.1415, 2) → 3.14</code></td>
    </tr>
    <tr>
      <td>max()</td>
      <td>max(iterable)</td>
      <td>Returns maximum</td>
      <td>Largest value from items</td>
      <td><code>max([1, 5, 2]) → 5</code></td>
    </tr>
    <tr>
      <td>min()</td>
      <td>min(iterable)</td>
      <td>Returns minimum</td>
      <td>Smallest value from items</td>
      <td><code>min([1, 5, 2]) → 1</code></td>
    </tr>
    <tr>
      <td>sum()</td>
      <td>sum(iterable)</td>
      <td>Returns sum</td>
      <td>Of all numeric elements</td>
      <td><code>sum([1,2,3]) → 6</code></td>
    </tr>
    <tr>
      <td>pow()</td>
      <td>pow(x, y[, z])</td>
      <td>Power calculation</td>
      <td>Returns x**y % z if z given</td>
      <td><code>pow(2, 3) → 8</code></td>
    </tr>
    <tr>
      <td>divmod()</td>
      <td>divmod(a, b)</td>
      <td>Division and modulus</td>
      <td>Returns (a // b, a % b)</td>
      <td><code>divmod(7, 2) → (3, 1)</code></td>
    </tr>
    <tr>
      <td>type()</td>
      <td>type(object)</td>
      <td>Returns object type</td>
      <td>Useful for debugging</td>
      <td><code>type(3) → &lt;class 'int'&gt;</code></td>
    </tr>
    <tr>
      <td>isinstance()</td>
      <td>isinstance(obj, class)</td>
      <td>Checks object type</td>
      <td>Returns True/False</td>
      <td><code>isinstance(5, int) → True</code></td>
    </tr>
    <tr>
      <td>id()</td>
      <td>id(obj)</td>
      <td>Returns identity</td>
      <td>Unique ID of object in memory</td>
      <td><code>id(5)</code></td>
    </tr>
  </tbody>
</table>

`,
                    code1: ``
                }
            ]
        },
    ]
}