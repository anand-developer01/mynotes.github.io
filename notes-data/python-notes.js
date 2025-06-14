const Links1 = 'python-notes'
const Links2 = 'python-notes'
const Links3 = 'python-toolkit'
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

Note: It’s just convention. Python follows PEP 8, which recommends <b>snake_case</b> for function and variable names, and <b>PascalCase</b> for class names.

EX : function name : show_my_name
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
                },
                 {
                    text1: `What is Python?`,
                    code1: ``
                },
            ]
        },
        {
            id: 1,
            title: "Arguments (*args, **kwargs)",
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

list.<b>count</b>(x)
    Return the number of times x appears in the list.

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
// output −
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

Dictionaries are one of Python’s most important and useful built-in data types. They provide a mutable collection of key-value pairs that lets you efficiently access and mutate values through their corresponding keys:

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
                    
                    The __init__() method can take any number of parameters, but the first one is always a variable known as <b>self</b>, which corresponds to the instance being created. This means self points to the address of the current object of a class, which enables you to access the data of the object’s variables. So, if there are a thousand instances of a class, we can get data of individual objects using <b>self</b> as it points to the address of a particular object and returns the respective value. 

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
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Abstraction",
            note: [
                {
                    text1: `Abstraction in Python is a process of handling complexity by hiding unnecessary details and showing only the essential information to the user. It is one of the core principles of Object-Oriented Programming (OOP), which allows developers to implement more complex functionality without worrying about the underlying complexity.

                    <b>Abstraction</b> means <b>hiding the complex implementation details</b> and showing only the <b>essential features</b> of an object. It's a fundamental concept in Object-Oriented Programming (OOP), and Python supports it using:

                    In Python, abstraction can be achieved using Abstract Classes and Abstract Methods. Let’s explore how we can implement this using Python’s built-in abc module.
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
                    text1: `What is Python?`,
                    code1: ``
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
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "Static methods",
            note: [
                {
                    text1: `What is Python?`,
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
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: `Errors & Exceptions`,
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
            section: `Multithreading`,
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
            section: `Synchronization`,
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
            section: `Networking`,
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
            title: "What is Python?",
            note: [
                {
                    text1: `What is Python?`,
                    code1: ``
                }
            ]
        },
    ]
}