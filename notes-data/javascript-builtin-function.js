const isHighlighted = 'javascript-builtin-function'
const Links1 = 'javascript-notes'
const Links2 = 'javascript-code-challenge'
const Links3 = 'javascript-builtin-function'
const Links4 = 'javascript-projects'

const javascriptBuiltinFunctionData = {
  javascriptBuiltinFunctionNote: [
    {
      id: 1,
      section: `String Methods`,
      title: "dot (.) Notation",
      note: [
        {
          text1: `In JavaScript, when you see a <b>dot (.)</b> after an object, array, or other data type, it's used to access <b>properties</b> or <b>methods</b> of that object, array, or class. The functions that come after the dot are called <b>methods</b> of the object or data type.

<b>Categories for dot notation</b>:
    <b>Methods</b>: A method is a function that is a property of an object or class. When you use the dot notation to call a function, you're invoking a method.

    For example, in the case of strings or arrays, you often use methods like .length, .includes(), .push(), etc.
       <b> Example with Array</b>:
let arr = [1, 2, 3];
arr.push(4);  // .push() is a method of Array
console.log(arr);  // Output: [1, 2, 3, 4]


<b> Example with String</b>:
    let str = "Hello";
    console.log(str.toUpperCase());  // .toUpperCase() is a method of String

Properties: A property is a value that is associated with an object. It's like an attribute or characteristic of that object. These are accessed using dot notation as well.

    <b> Example with Object</b>:
    let person = {
      name: "Alice",
      age: 25
    };
    console.log(person.name);  // "Alice" (Accessing the property "name" of the person object)

    <b> Here, name is a property of the person object</b>.
Chaining Methods (Method Chaining): Some methods return objects or values that allow you to chain further methods using the dot notation. This allows you to call multiple methods in a single statement.

    <b>Example of Method Chaining</b>:
        let str = "   Hello, World!   ";
        let result = str.trim().toLowerCase().replace('world', 'everyone');
        console.log(result);  // Output: "hello, everyone!"

    In this example, <b>trim(), toLowerCase(), and replace()</b> are all methods chained together.

`,
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
      ]
    },
    {
      id: 1,
      title: "charAt()",
      note: [
        {
          text1: `Returns the character at the specified index.

                    The JavaScript String charAt() method returns a new string with a single character from the original string at a given index. An index is the position of a character in a string, starting from 0 for the first character and ending with n-1 for the last character, where n is the length of the string.

                    <b>Parameters</b>
This method takes an optional parameter called 'index', which is explained below -
<i>index - The index (position) of the character.</i>
                    `,
          code1: `const str = "Tutorials Point";
   console.log("str = ", str);
   console.log("str.charAt() returns = ", str.charAt(5));
   `
        }
      ]
    },
    {
      id: 1,
      title: "charCodeAt()",
      note: [
        {
          text1: `Returns a number indicating the Unicode value of the character at the given index.`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      section: "Finding elements",
      title: "indexOf()",
      note: [
        {
          text1: `Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.
                    
                    indexOf() works on
                    Array
                    Strings

                    <b>Description</b>
The <b>indexOf()</b> method returns the first index (position) of a specified value.
The <b>indexOf()</b> method returns -1 if the value is not found.
The <b>indexOf()</b> method starts at a specified index and searches from left to right (from the given start postion to the end of the array).
By default the search starts at the first element and ends at the last.
Negative start values counts from the last element (but still searches from left to right).

The JavaScript string indexOf() method is used to search the position of a particular character or string in a sequence of given char values. This method is case-sensitive.
The index position of first character in a string is always starts with zero. If an element is not present in a string, it returns -1.


<b>indexOf(ch)</b>
It returns the index position of char value passed with method.
<b>indexOf(ch,index)</b>
It start searching the element from the provided index value and then returns the index position of specified char value.
<b>indexOf(str)</b>
It returns the index position of first character of string passed with method.
<b>indexOf(str,index)</b>
It start searching the element from the provided index value and then returns the index position of first character of string.
                    `,
          code1: `// Array
                    const fruits = ['apple', 'banana', 'orange', 'banana'];
console.log(fruits.indexOf('banana'));  // Output: 1
console.log(fruits.indexOf('grape'));   // Output: -1
console.log(fruits.indexOf('banana', 2));  // Output: 3 (searches starting from index 2)


//-----------

//String 
const sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.indexOf('fox'));   // Output: 16
console.log(sentence.indexOf('cat'));   // Output: -1
console.log(sentence.indexOf('the', 10));  // Output: 31 (searches starting from index 10)

`
        }
      ]
    },
    {
      id: 1,
      title: "lastIndexOf()",
      note: [
        {
          text1: `Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.
                    
                    The <u>lastIndexOf()</u> method in JavaScript is used to find the <b>last occurrence</b> of a specified value in an array or string, and returns the <b>index</b>of that last occurrence. If the value isn't found, it returns -1.

                    <b>Parameters</b>:
    <b>searchElement</b> or <b>searchValue</b>: The element or value to search for.
    <b>fromIndex</b> (optional): The index to start the search from (defaults to the last index of the array/string). The search will go backwards from this point.
                    `,
          code1: `//For arrays:
array.lastIndexOf(searchElement, fromIndex)


// For strings:
string.lastIndexOf(searchValue, fromIndex)

//-------------------

// Example 1: Using lastIndexOf() with an Array
let arr = [10, 20, 30, 20, 40];
let index = arr.lastIndexOf(20);
console.log(index);  // Output: 3
// In this example, the last occurrence of 20 is at index 3.


// Example 2: Using lastIndexOf() with a String
let str = "hello world, hello again!";
let index = str.lastIndexOf("hello");
console.log(index);  // Output: 13`
        }
      ]
    },
    {
      id: 1,
      title: "includes()",
      note: [
        {
          text1: `The <b>includes()</b> method checks if an array contains a specified element or not.
                    The includes() method in JavaScript is used to check if a specific element or substring exists in an array or string. It returns a boolean value (true or false), depending on whether the element/substring is found.
                    
                    Works On:
                    Array,
                    String 

                    Syntax:
    <b>For arrays</b>:
array.includes(element, start)

<b>For strings</b>:
    string.includes(searchString, position)

<b>Parameters</b>:
    <u>element or searchString</u>: The value or substring you're looking for.
    <u>start or position (optional)</u>: The position to start the search from. If not provided, it starts from the beginning of the array/string.

<b>Return Value</b>
    <u>true</u> if the element/substring is found.
    <u>false</u> if it is not found.


                    <b>includes() Syntax</b>
The syntax of the <u>includes()</u> method is:
arr.includes(valueToFind, fromIndex)
Here, <u>arr</u> is an array.

<b>includes() Parameters</b>
The <u>includes()</u> method can take two parameters:

<u>searchValue</u>- The value to search for.
<u>fromIndex</u> (optional) - The position in the array at which to begin the search. By default, it is <b>0</b>.
<b>Note</b>: For negative values, the search starts from <b>array.length + fromIndex</b> (Counting from backward). For example, <b>-1</b> represents the last element.

<b>includes() Return Value</b>
The <u>includes()</u> method returns:

<u>true</u> if <u>searchValue</u> is found anywhere within the array
<u>false</u> if <u>searchValue</u> is not found anywhere within the array
`,
          code1: `// defining an array
let languages = ["JavaScript", "Java", "C"];
// checking whether the array contains 'Java'
let check = languages.includes("Java");
console.log(check); 
// Output: true

//-----------------------
// Example 1: Using includes() method
let languages = ["JavaScript", "Java", "C", "C++"];
// checking whether the array contains 'C'
let check1 = languages.includes("C");
console.log(check1); // true

// checking whether the array contains 'Ruby'
let check2 = languages.includes("Ruby");
console.log(check2); // false
// Output :
// true
// false

//--------------------
// 2: includes() for Case-Sensitive Search
// The "includes()" method is case sensitive. For example:
let languages = ["JavaScript", "Java", "C", "Python"];
// checking whether the array contains 'Python'
let check1 = languages.includes("Python");
console.log(check1); // true
// checking whether the array contains 'python'
let check2 = languages.includes("python");
console.log(check2); // false
// Output:
// true
// false

//----------------------
// Example 3: includes() with two Parameters
let languages = ["JavaScript", "Java", "C", "Python"];

// second argument specifies position to start the search
let check1 = languages.includes("Java", 2);
console.log(check1); // false

// the search starts from third last element 
let check2 = languages.includes("Java", -3);
console.log(check2); // true 

// Output :
// false
// true
// In the above example, we have passed two argument values in the "include()" method.
// "languages.includes("Java", 2)" returns "false" since the method doesn't find "'Java'" from second index of the array.
// In "languages.includes("Java", -3)", the method starts searching "'Java'" from the "third last" element because of the negative argument

//----------------------
let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3, 3));  // Output: false (starts searching from index 3)
console.log(arr.includes(4, 3));  // Output: true (starts searching from index 3)

//-----------------------
// Checking for Substring in a String with a Start Position
let str = "The quick brown fox";
console.log(str.includes("quick", 5));  // Output: false (search starts after "The ")
console.log(str.includes("brown", 5));  // Output: true (search starts after "The ")
 "-3".

 //---------- Filter seatch using includes ----------
 const userList = [
  {
    "userId": 1,
    "id": 1,
    "title": "American first finance",
  },
  {
    "userId": 1,
    "id": 2,
    "title": "American cities",
  },
  {
    "userId": 1,
    "id": 3,
    "title": "Indian cities",
  },
  {
    "userId": 1,
    "id": 4,
    "title": "us books",
  },
  ]
  const searchRes = userList.filter(e => {
    return e.title.toLowerCase().includes("american".toLowerCase())
  })
  console.log(searchRes)
`
        }
      ]
    },
    {
      id: 1,
      title: "find()",
      note: [
        {
          text1: `First Filter returns all the elements that match the condition while the Find method only returns the first one and second and even more important, the Filter method returns a new array while Find only returns the element itself and not an array,
          
          The find method returns the first element in the array that satisfies a given test function. If no elements meet the criteria, it returns <b>undefined</b>.

          The find() method returns the value of the first array element that satisfies the provided test function.

          Syntax:
          <span style="color:red"> array.find(function(currentValue, index, arr), thisValue) </span>

          <b>currentValue</b>: The current element being processed in the array.
          <b>index (optional)</b>: The index of the current element being processed in the array.
          <b>arr (optional)</b>: The array find() was called upon.

          <b>thisArg (optional)</b>: An object to which the this keyword can refer in the callback function. If not provided, <b>undefined</b> is used.
          `,
          code1: `let numbers = [1, 3, 4, 9, 8];

          // function to check even number
          function isEven(element) {
            return element % 2 == 0;
          }
          
          // get the first even number
          let evenNumber = numbers.find(isEven);
          console.log(evenNumber);
          
          // Output: 4`
        },
        {
          text1: `The <b>thisArg</b> parameter in the <b>find()</b> method allows you to specify a value to be used as <>bthis</b> when executing the callback function. `,
          code1: `const person = {
            name: 'John',
            age: 30,
            hobbies: ['reading', 'gardening', 'cooking'],
            findHobby(hobbyToFind) {
              return this.hobbies.find(function(hobby) {
                return hobby === hobbyToFind;
              }, this); // using thisArg to bind 'this' to the 'person' object
            }
          };
          
          console.log(person.findHobby('gardening')); // Output: gardening
          console.log(person.findHobby('swimming'));  // Output: undefined


          //-------------

          const thresholdFilter = {
            threshold: 25,
            numbers: [10, 20, 30, 40, 50],
            filterNumber: function(number) {
              return number > this.threshold;
            },
            filteredNumbers: function() {
              return this.numbers.find(this.filterNumber, this);
            }
          };
          
          console.log(thresholdFilter.filteredNumbers()); // Output: 30
          
          `
        },
        {
          text1: `
          > We have an object called <b>person</b> with properties <b>name, age</b>, and <b>hobbies</b>.
          > <b>findHobby</b> is a method of the <b>person</b> object. It takes a <b>hobbyToFind</b> parameter and searches for it within the <b>hobbies</b> array.
          > Inside the <b>find()</b> method, we use a regular function (not an arrow function) for the callback. This function references <b>this</b> to access the <b>hobbies</b> array of the <b>person</b> object.
          > We use <b>this</b> as the second argument to <b>find()</b>, binding it to the <b>person</b> object. This ensures that <b>this</b> inside the callback function refers to the <b>person</b> object.
          `,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "localeCompare()",
      note: [
        {
          text1: `Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "length()",
      note: [
        {
          text1: `Returns the length of the string.
                    The length property in JavaScript is used to determine the number of elements in an <b>array</b> or the number of characters in a <b>string</b>.
                    Array
                    String
                    `,
          code1: `// 1. For Arrays:
// The length property gives you the number of elements in an array. It automatically updates as you add or remove items from the array.
let arr = [10, 20, 30, 40];
console.log(arr.length);  // Output: 4
// In this example, the array has 4 elements, so arr.length returns 4.


// 2. For Strings:
// The length property provides the number of characters in a string, including spaces and special characters.
let str = "Hello, world!";
console.log(str.length);  // Output: 13`
        }
      ]
    },
    {
      id: 1,
      title: "match()",
      note: [
        {
          text1: `Used to match a regular expression against a string.
                    
                    The <b>match()</b> method returns the result of matching a string against a regular expression.
                    In JavaScript, the <b>match()</b> method is used to search a string for a match against a regular expression and returns an array of matches or null if no match is found.
                    
                   <b> match() Parameters</b>
The <u>match()</u> method takes in:
<u>regexp</u> - A regular expression object (Argument is implicitly converted to <u>RegExp</u> if it is a non-<u>RegExp</u> object)
<b>Note</b>: If you don't give any parameters, <u>match()</u> returns <u>[""]</u>.

<b>match() Return Value</b>
Returns an Array containing the matches, one item for each match.
Returns <u>null</u> if no match is found.
`,
          code1: `// Syntax : 
                    // string.match(regexp)

                    //------------------
const message = "JavaScript is a fun programming language.";

// regular expression that checks if message contains 'programming'
const exp = /programming/;

// check if exp is present in message
let result = message.match(exp);
console.log(result);

/*
Output: [
  'programming',
  index: 20,
  input: 'JavaScript is a fun programming language.',
  groups: undefined
  ]
*/
                    `
        }
      ]
    },
    {
      id: 1,
      title: "replace()",
      note: [
        {
          text1: `Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.
                    The replace() method in JavaScript is used to search for a specified substring or pattern in a string and replace it with a new substring.
                    In JavaScript, you can use the replace() method to replace a string or substring in a string. The replace() method returns a new string with the replacement. The replace() method takes two arguments:
=> The first argument is the string or regular expression to be replaced.
=> The second argument is the string that will replace the matched string or regular expression.

<b>Important Notes</b>:
    => The <b>replace()</b> method returns a new string with the replacement applied. It does not modify the original string.
    => If the <b>searchValue</b> is not found, the original string is returned unchanged.
    => The method can be used with <b>strings</b> or <b>regular expressions</b> as the <b>searchValue</b>.


    <b>Note</b>: Only the first instance will be replaced. If you want to replace all instances, you will have to use the replaceAll() method.
    // Syntax
string.replace(searchValue, newValue);

    <b>searchValue</b>: The substring or regular expression pattern to search for within the string.
        If it's a string, it will only replace the <b>first occurrence</b>.
        If it's a regular expression (with the <b>global flag g</b>), it will replace all matches.
    <b>newValue</b>: The substring to replace the matched value with. It can also be a function that returns the replacement string based on the match.
    

   <b> The syntax of replace() is</b>:

str.replace(pattern, replacement)
Here, str is a string.

<b>replace() Parameter</b>
The replace() method takes in:

pattern - either a string or a regex that is to be replaced
replacement - the pattern is replaced with this replacement (can be either a string or a function)
<b>relace() Return Value</b>
The replace() method returns a new string with the specified pattern replaced.
`,
          code1: `//------------------
    // Example 1: Using replace() with a Regular Expression
// If you use a regular expression, you can match patterns and even use flags like g (global) to replace all occurrences.
// Without the global flag:
let str = "Hello, world! Welcome to the world!";
let result = str.replace(/world/, "JavaScript");
console.log(result); // Outputs: "Hello, JavaScript! Welcome to the world!"

// Only the first occurrence of "world" is replaced because the regular expression does not have the g (global) flag.

//--------------Example 2:----------
// *** With the global flag (g) ***:
let str = "Hello, world! Welcome to the world!";
let result = str.replace(/world/g, "JavaScript");
console.log(result); // Outputs: "Hello, JavaScript! Welcome to the JavaScript!"
// Now both occurrences of "world" are replaced with "JavaScript" because of the global flag (g).

//------------------
// Example 3: Using a Function as the newValue
// You can also pass a function as the newValue parameter. This function is called for each match and can return a custom replacement string.
let str = "I have 1 apple and 2 bananas.";
let result = str.replace(/\d+/g, function(match) {
    return parseInt(match) * 2;  // Doubles the number
});
console.log(result); // Outputs: "I have 2 apple and 4 bananas."

//----------------
    Example : 3.1
    const cities = "Seattle, NV - No : 2, AZ - No : 4";
    const newRes = cities.replace(/NV/, "New York").replace(/AZ/,"Arizona").replace(/\d+/g, function(match){
        return parseInt(match) * 2;
    });
    console.log(newRes) // Output : Seattle, New York - No : 4, Arizona - No : 8


//-------------------
// Example 4: Using replace() with Special Characters
// If you're replacing a string that contains special characters (like /, ., *, etc.), you may need to escape them when using a regular expression.

let str = "I like cats/dogs.";
let result = str.replace(/\//, "-");
console.log(result); // Outputs: "I like cats-dogs."


//---------- replaceAll --------
// if you have more than one occurence of such substring, you can use the replaceAll method:
let originalString = "The color of the sky changes throughout the day, and sometimes the color of the clouds creates a beautiful contrast. The color of a flower can indicate its species, and the color of clothing can affect someone's mood.";
let newString = originalString.replaceAll("color", "colour");
console.log(newString);
`
        }
      ]
    },
    {
      id: 1,
      title: "search()",
      note: [
        {
          text1: `Executes the search for a match between a regular expression and a specified string.
                    The <b>search()</b> method searches for a match between a given <u>string</u> and a <u>regular expression</u>.
                    In JavaScript, the <b>search()</b> method is specifically used for <b>strings</b> and <b>regular expressions</b>. It does <b>not work directly on arrays</b>. However, you can use it in a string context to search for a match, and if you want to search in an array, you would need to iterate through the array (or use array methods) and apply the <b>search()</b> method on each element.

                    <b>search() Syntax </b>
The syntax of the <u>search()</u> method is:
str.search(regexp)
Here, <u>str</u> is a string.

<b>search() Parameters </b>
The <u>search()</u> method takes a single parameter:
=> <u>regExp</u> - A regular expression object (Argument is implicitly converted to <u>regExp</u> if it is a non-<u>regExp</u> object)

<b>search() Return Value </b>
=> Returns the index of the first match between the regular expression and the given string
=> Returns <u>-1</u> if no match was found.


<b>search() with an Array</b>:
If you want to search through an array, you cannot directly use <u>search()</u> because it's a method for strings. But you can use methods like <u>find(), indexOf()</u>, or <u>some()</u> in combination with <u>search()</u> to search for a string inside each array element.

<b>Example 1: Using <u>search()</u> on Each Element of an Array</b>
You can use <u>Array.prototype.map()</u> to apply <u>search()</u> on each element of the array.
                    `,
          code1: `// Ex : 1
                    let sentence= "I love JavaScript.";
// pattern that searches the first occurence of an uppercase character
let regExp = /[A-Z]/;

// searching for a match between regExp and given string 
let indexReg = sentence.search(regExp);
console.log(indexReg);
// Output: 0


//-----------------
Example 1.1: Using search() on a String
let str = "Hello, world!";
let result = str.search("world");
console.log(result);  // Output: 7 (index of "world")


//----------------
// Example 2: Using search() Method
// defining string
let string1 = "JavaScript JavaScript1";

// pattern having 'JavaScript' followed by a digit
let regExp = /(JavaScript)\d/;

// searching for a match between regExp and given string
let index = string1.search(regExp);
console.log(index);
// Output
// 11

//------------
// Example 3: Passing non-regExp in search()
let string1 = "I love to code in JavaScript.";
// searching word "JavaScript" in the given string
let index = string1.search("code");
console.log(index);
// Output
// 10

//---------------
// Example 4
let arr = ["apple", "banana", "cherry"];
let searchTerm = "ban";
let result = arr.map(item => item.search(searchTerm));
console.log(result);  // Output: [-1, 0, -1] (index 0 means "banana" contains "ban")

//---------------
//Example 5: Using find() to Search for a String in an Array
// If you want to find the first element in the array that matches a search term, you can use find().

let arr = ["apple", "banana", "cherry"];
let searchTerm = "ban";
let found = arr.find(item => item.search(searchTerm) !== -1);
console.log(found);  // Output: "banana"


//---------------
// Example 3: Using some() to Check if Any Array Element Contains the Search Term
// You can also use some() to check if any element in the array contains the search term.
let arr = ["apple", "banana", "cherry"];
let searchTerm = "ban";
let hasMatch = arr.some(item => item.search(searchTerm) !== -1);
console.log(hasMatch);  // Output: true (since "banana" contains "ban")


//----------------

`
        }
      ]
    },
    {
      id: 1,
      section:"Manipulating Arrays",
      title: "concat()",
      note: [
        {
          text1: `To merge two or more arrays, you use the <b>concat()</b> method of an Array object.The <b>concat()</b> method returns a new array and doesn't change the original arrays.For example:`,
          code1: `let odds = [1, 3, 5];
                let evens = [2, 4, 6];
                // merge odds and evens array
                let combined = odds.concat(evens);
                
                console.log('Result:', combined);
                console.log('Odds:', odds);
                // Output:
                // Result: [ 1, 3, 5, 2, 4, 6 ]
                // Odds: [ 1, 3, 5 ]`
        },
        {
          text1: `In this example, we have two arrays: <b>odds</b> and <b>evens</b>.We call the <b>concat()</b> method of the <b>odds</b> array method to merge elements of the two arrays.The elements of the second array are appended to the elements of the first array.
      
                Similarly, you can call the <b>concat()</b> method on an empty array denoted by(<b>[]</b>):`,
          code1: `let odds = [1, 3, 5];
                let evens = [2, 4, 6];
                // merge odds and evens array
                let combined = [].concat(odds, evens);
                
                console.log(combined);
                
                // Output:
                // [1, 3, 5, 2, 4, 6]
                
      
                //------------------ 
                // The 'concat()' method allows you to merge more than two arrays as shown in the following example:
                
                let upper = ['A', 'B', 'C'];
                let lower = ['a', 'b', 'c'];
                let digits = [1, 2, 3];
                let alphanumerics = upper.concat(lower, digits);
                
                // Output:
                // ['A', 'B', 'C', 'a', 'b', 'c', 1, 2, 3]
                
                // In this example, we merge the three arrays: 'upper', 'lower', and 'digits'.
                
      
                //-------------------
                // When you don't pass any argument into the 'concat()' method, it simply clones the array and returns it:
                
      
      let colors = ['red', 'green', 'blue'];
      let rgb = colors.concat();
      console.log(rgb);
      
      // Output:
      // [ 'red', 'green', 'blue' ]
      
      
      //-----------------------
      // If you pass values that are not arrays, into the 'concat()' method, the method will appends each value to the end of the result array:
      
      let rgb = ['red', 'green', 'blue'];
      let moreColors = rgb.concat('yellow', 'magento');
      console.log(moreColors);
      
      // Output:
      // ['red', 'green', 'blue', 'yellow', 'magento']
      
      
      //---------------------
      // In ES6, you can use spread operator to merge multiple arrays as follows:
      
      let odds = [1, 3, 5];
      let evens = [2, 4, 6];
      let combined = [...odds, ...evens];
      console.log(combined);
      
      // Output:
      // [ 1, 3, 5, 2, 4, 6 ]
                `
        },
        {
          text1: `Combines the text of two strings and returns a new string. 
                    
                    The <b>concat()</b> method in JavaScript works primarily with <b>arrays</b> and <b>strings</b>:
                    Works On
                    1) arrays
                    2) strings

                    <b>Description</b>
The <b>concat()</b> method joins two or more strings.
The <b>concat()</b> method does not change the existing strings.
The <b>concat()</b> method returns a new string.
                    `,
          code1: `// Strings:
                    // The "concat()" method is used to combine two or more strings into a new string. It does not modify the original strings.
                    let text1 = "Hello";
let text2 = "world!";
let result = text1.concat(" ", text2);
//------------  + Operator  ----------
let greeting = "Hello";
let name = "John";
let result = greeting + name;
console.log(result); // Output: HelloJohn


// Arrays:
// The "concat()" method is used to merge two or more arrays. It does not modify the original arrays but returns a new array containing the combined elements.
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const result = arr1.concat(arr2);  // result: [1, 2, 3, 4, 5]
`
        }
      ]
    },
    {
      id: 1,
      section: "High-order methods",
      title: "",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "map()",
      note: [
        {
          text1: `In JavaScript, map() is a higher-order function that is used to iterate over elements of an array and execute a callback function on each element. It creates a new array based on the results of the callback function.
          <span style="color:red"> const numbers = [1, 2, 3, 4, 5]; </span>
        
          Multiply each number by 2
          const multipliedNumbers = numbers.map((num) => num * 2);
          
          console.log(numbers); // Output: [1, 2, 3, 4, 5]
          console.log(multipliedNumbers); // Output: [2, 4, 6, 8, 10]
          
          Sometimes, you need to take an array, transform its elements, and include the results in a new array.
          
          Typically, you use a <b>for</b> loop to iterate over the elements, transform each individual one, and push the results into a new array.
          
          Let's take a look at an example.
          
          Suppose that you have an array of numbers where each element represents the radius of a circle as follows:
          `,
          code1: `let circles = [
            10, 30, 50
          ];
          
          // The following illustrates how to calculate the area of each circle and push the result into a new array.
          
          let areas = []; // to store areas of circles
          let area = 0;
          for (let i = 0; i < circles.length; i++) {
            area = Math.floor(Math.PI * circles[i] * circles[i]);
            areas.push(area);
          }
          console.log(areas);

          // Output:
          // [314, 2827, 7853]
          // It takes a quite amount of code to accomplish this.

// Starting from ES5, JavaScript Array type provides the map() method that allows you to transform the array elements in a cleaner way.

function circleArea(radius) {
  return Math.floor(Math.PI * radius * radius);
}
let areas = circles.map(circleArea);
console.log(areas);

// Output
// [314, 2827, 7853]


//   First, define a function that calculates the area of a circle.
//     Then, pass the 'circleArea' function to the 'map()' method.The 'map()' method will call the 'circleArea' function on each element of the circles array and return a new array with the elements that have been transformed.
// To make it shorter, you can pass in the 'map()' method an anonymous function as follows.

let areas = circles.map(function(radius) {
  return Math.floor(Math.PI * radius * radius);
});
console.log(areas);
          `
        },
        {
          text1: `Also, you can make use of the arrow function in ES6 to achieve the same result with a cleaner code:

          let areas = circles.map(radius => Math.floor(Math.PI * radius * radius));
          console.log(areas);
          
          JavaScript Array <b>map()</b> method in detail
          The following illustrates the <b>map()</b> method.
          
            arrayObject.map(callback[, contextObject]);
          
          The <b>map()</b> method calls a callback function on every element of an array and returns a new array that contains the results.
          
            The <b>map()</b> method takes two named arguments, the first one is required whereas the second one is optional.
          
          Similar to the other iterative method such as <b>every()</b>, <b>some()</b>, <b>filter()</b>, <b>forEach()</b> and  <b>sort()</b>, the <b>callback()</b> function has the following form:
          
          function callback(currentElement, index, array) {
            ... 
          }
          
          The <b>callback()</b> function takes three arguments:
          
          The <b>currentElement</b> is the current element of the array that is being processed.
          The <b>index</b> is the index of the <b>currentElement</b>.
          The <b>array</b> is the array object being traversed.
          The <b>currentElement</b> is required while the <b>index</b> and <b>array</b> arguments are optional.
          
          If you pass the <b>contextObject</b> to the <b>map()</b> method, you can reference the <b>contextObject</b> inside the <b>callback()</b> function using the <b>this</b> keyword.
          
          It's important to note that the <b>map()</b> method does not change the original array, it creates a new array of all elements that have been transformed by the callback function.
          
          More JavaScript Array map() examples: -
          
            The following example shows how to transform an array of numbers by using a built -in method of the <b>Math</b> type as the <b>callback()</b> function.`,
          code1: `let numbers = [16, 25, 36];
          let results = numbers.map(Math.sqrt);
          console.log(results);
          
          // Output
          // [4, 5, 6]
          
          // The new array contains the square roots of the numbers in the 'numbers' array.
          
          // In this tutorial, you have learned how to use the JavaScript Array 'map()' method to transform elements of an array according to a provided function.
          
          // Excercies:---
          
          const userDetails = [
            {
              fullName: "American First Finance",
              area: 'yes',
            },
            {
              fullName: "World Health",
              area: 'yes',
            }
          ]
          
          // returning new array :-
          const newARR = userDetails.map(acc => {
              const shortOb =  {...acc, shordName : acc.fullName.toLocaleLowerCase().split(' ').map(name => name[0]).join('') }
              return shortOb
          })
          console.log(newARR) //
          // output:-
          // [
          //     { fullName: 'American First Finance', area: 'yes' },
          //     { fullName: 'World Health', area: 'yes'}
          // ]
          
          // mutated original array :-
          userDetails.forEach(acc => {
              acc.shortName = acc.fullName.toLocaleLowerCase().split(' ').map(name => name[0]).join('')
          })
          console.log(userDetails)
          // output:-
          // [
          //     { fullName: 'American First Finance', area: 'yes', shordName: 'aff' },
          //     { fullName: 'World Health', area: 'yes', shordName: 'wh' }
          // ]
          `
        },
      ]
    },
    {
      id: 1,
      title: "filter()",
      note: [
        {
          text1: `The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

          The filter() method takes a function as an argument. The function is called for each element in the array to determine
          
          The filter method in JavaScript is designed as a higher-order function that iterates over each element of an array, allowing developers to apply a specific condition to filter out elements.
          
          The filter method doesn't modify the original array, but instead creates and returns a new array containing only the elements that meet the specified condition.
          
          
          One of the most common tasks when working with an array is to create a new array that contains a subset of elements of the original array.
          
          Suppose you have an array of city objects where each object contains two properties: 'name' and 'population'.`,
          code1: `let cities = [
            { name: 'Los Angeles', population: 3792621 },
            { name: 'New York', population: 8175133 },
            { name: 'Chicago', population: 2695598 },
            { name: 'Houston', population: 2099451 },
            { name: 'Philadelphia', population: 1526006 }
          ];
          
          // To find the city whose population is greater than 3 million, you typically loop over the array elements using a for loop and test if the value of the 'population' property satisfies the condition, like this:
          
          let bigCities = [];
          for (let i = 0; i < cities.length; i++) {
            if (cities[i].population > 3000000) {
              bigCities.push(cities[i]);
            }
          }
          console.log(bigCities);
          
          // Output:
          // [
          //   { name: 'Los Angeles', population: 3792621 },
          //   { name: 'New York', population: 8175133 }
          // ]`
        },
        {
          text1: `JavaScript Array provides the 'filter()' method that allows you to do this task in a shorter and cleaner way.
          The following example returns the same result as the example above:`,
          code1: `let bigCities = cities.filter(function(e) {
            return e.population > 3000000;
          });
          console.log(bigCities);`
        },
        {
          text1: `In this example, we call the <b>filter()</b> method of the <b>cities</b> array object and pass a function that tests each element.

          Inside the function, we check if the <b>population</b> of each city in the array is greater than 3 million.If it is the case, the function returns <b>true</b> or <b>false</b> otherwise.
          
            The <b>filter()</b> method includes the only elements in the result array if they satisfy the test in the callback function.
          
          Starting with ES6, you can use the arrow function to make it more concise:`,
          code1: `let bigCities = cities.filter(city => city.population > 3000000);
          console.log(bigCities);`
        },
        {
          text1: `JavaScript Array filter() method in detail: --

          <span style="color:red"> arrayObject.filter(callback, contextObject); </span>
          
          The <b>filter()</b> method creates a new array with all the elements that pass the test implemented by the <b>callback()</b> function.
          
          Internally, the <b>filter()</b> method iterates over each element of the array and passes each element to the <b>callback</b> function. If the <b>callback</b> function returns <b>true</b>, it includes the element in the return array.
          
            The <b>filter()</b> method accepts two named arguments: a callback function and an optional object.
          
          Like other iterative methods of the Array object such as <b>every()</b>, <b>some()</b>, <b>map()</b> and <b>forEach()</b>, the <b>callback</b> function has the following form:
          
          <span style="color:red">
          function callback(currentElement, index, array) {
            ...
          }
          </span>
          
          The <b>callback</b> function takes three arguments:
          
          The <b>currentElement</b> argument is the current element in the array that is being processed by the <b>callback</b> function.
          The <b>index</b> of the <b>currentElement</b> that is being processed by the <b>callback</b> function.
          The <b>array</b> object being traversed.
          
          The <b>index</b> and <b>array</b> arguments are optional.
          
          The <b>contexObject</b> argument of the <b>filter()</b> method is optional.If you pass the <b>this</b> value, you can reference it by using <b>this</b> keyword inside the <b>callback</b> function.
          
          It is important to note that the <b>filter()</b> method does not change the original array.
          
          More JavaScript Array filter() method examples: -
          
          Because the <b>filter()</b> method returns a new array, you can chain the result with other array methods such as <b>sort()</b> and <b>map()</b>.
          
          For example, the following illustrates how to chain the three methods: <b>filter()</b>, <b>sort()</b>, and <b>map()</b>:
          `,
          code1: `let cities = [
            { name: 'Los Angeles', population: 3792621 },
            { name: 'New York', population: 8175133 },
            { name: 'Chicago', population: 2695598 },
            { name: 'Houston', population: 2099451 },
            { name: 'Philadelphia', population: 1526006 }
          ];

          cities
  .filter(city => city.population < 3000000)
  .sort((c1, c2) => c1.population - c2.population)
  .map(city => console.log(city.name + ':' + city.population));

// Output:
// Philadelphia: 1526006
// Houston: 2099451
// Chicago: 2695598
          `
        },
        {
          text1: `  > First, filter the cities whose populations are less than 3 million using the <b>filter()</b> method.
            > Second, sort the resulting cities by the populations in descending order using the <b>sort()</b> method.
            > Third, output array element to the console using the <b>map()</b> method.
          
          The following example illustrates the use of the <b>contextObject</b> argument that specifies an object which can be referenced in the <b>callback()</b> function using the <b>this</b> keyword`,
          code1: `function isInRange(value) {
            if (typeof value !== 'number') {
              return false;
            }
            return value >= this.lower && value <= this.upper;
          }
          
          let data = [10, 20, "30", 1, 5, 'JavaScript filter', undefined, 'example'];
          
          let range = {
            lower: 1,
            upper: 10
          };
          
          let numberInRange = data.filter(isInRange, range);
          console.log(numberInRange); // [10, 1, 5]
          
          // Output:
          // [10, 1, 5]
          `
        },
        {
          text1: `> First, define the <b>isInRange()</b> function that checks if its argument is a number and in the range specified by the <b>lower</b> and <b>upper</b> properties of an object.
          > Next, define an array of mixed data that contains numbers, strings, and undefined.
          > Then, define the <b>range</b> object with two properties <b>lower</b> and <b>upper</b>.
          > After that, call the <b>filter()</b> methods of the <b>data</b> array and pass in the <b>isInRange()</b> function and the <b>range</b> object.Because we pass in the <b>range</b> object, inside the <b>isInRange()</b> function, the <b>this</b> keyword references to the <b>range</b> object.
          > Finally, show the result array in the console.
          
          In this tutorial, you have learned how to use the JavaScript Array <b>filter()</b> method to filter elements in an array based on a test provided by a callback function.
          `,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "forEach()",
      note: [
        {
          text1: ` The forEach() array method loops through any array, executing a provided function once for each array element in ascending index order. This function is referred to as a callback function.

             The forEach method passes a callback function for each element of an array together with the following parameters:
          
            > Current Value (required) - The value of the current array element
            > Index (optional) - The current element's index number
            > Array (optional) - The array object to which the current element belongs
          
           Typically, when you want to execute a 'function' on every element of an 'array', you use a for 'loop' statement.
          
           For example, the following code shows every element of an array to console:`,
          code1: `let ranks = ['A', 'B', 'C'];
          for (let i = 0; i < ranks.length; i++) {
            console.log(ranks[i]);
          }
          
          // Output:
          // A
          // B
          // C
          
          // JavaScript Array provides the 'forEach()' method that allows you to run a function on every element.
          // The following code uses the 'forEach()' method that is equivalent to the code above:
          
          let ranks = ['A', 'B', 'C'];
          
          ranks.forEach(function(e) {
            console.log(e);
          });
          
          // Output:
          // A
          // B
          // C`
        },
        {
          text1: ` The 'forEach()' method iterates over elements in an array and executes a predefined function once per element.
           The following illustrates the syntax of the 'forEach()' method.
          
           Array.forEach(callback[, thisArg]);
          
           The 'forEach()' method takes two arguments:
          
           1) callback:
          ------------
           The 'callback' function that the 'forEach()' method uses to execute on every element.
          
           The callback accepts the following arguments:
          
           'currentElement': is the current array element being processed.
           'index': the index of the 'currentElement' in the array.
           'array': the array that calls the 'forEach()' method.
          
           The index and array are optional.
          
           2) thisArg:
          -----------
           The 'thisArg' is a value to use as this when executing the callback.
          
           Note that the 'forEach()' function returns 'undefined' therefore it is not chainable like other iterative methods: 'filter()', 'map()', 'some()', 'every()', and 'sort()'.
          
           One limitation of the 'forEach()' method in comparison with the for loop is that you cannot use the break or continue statement to control the loop.
          
           To terminate the loop in the 'forEach()' method, you must throw an exception inside the callback function.
          
           More JavaScript Array 'forEach()' method example: --
           ------------------------------------------------
           Let's take a look at an example of the 'forEach()' method that uses a 'contextObject'.
          
           The following illustrates 'Counter' constructor function:`,
          code1: `function Counter() {
            this.count = 0;
            let self = this;
            return {
              increase: function() {
                self.count++;
              },
              current: function() {
                return self.count;
              },
              reset: function() {
                self.count = 0;
              }
            }
          }
          
          // This example shows how to pass the counter object to the 'forEach()' method.
          
          var counter = new Counter();
          var numbers = [1, 2, 3];
          var sum = 0;
          numbers.forEach(function(e) {
            sum += e;
            this.increase();
          }, counter);
          
          console.log(sum); // 6
          console.log(counter.current()); // 3
          
          // How it works.
          
          // > First, create a new 'Counter' object.
          // > Next, define an array of three numbers.
          // > Then, declare a variable 'sum' and assign it a value of zero.
          // > After that, call the 'forEach()' method on the 'numbers' array.In the callback function, add the element to the 'sum' variable and call the 'increase()' method of the 'counter' object.Notice that the 'counter' object is referred to as 'this' inside the callback function.
          // > Finally, log the value of the sum and current value of the counter in the web console.
          
          // In this tutorial, you have learned how to use the JavaScript Array 'forEach()' method to execute a callback on every element of an array.`
        },
      ]
    },
    {
      id: 1,
      title: "every()",
      note: [
        {
          text1: `Returns true if every element in this array satisfies the provided testing function.
                    
                    <b>every</b> loops over the array elements left to right.
=> For each iteration, it calls the given function with the current array element as its 1st argument.
=> The loop continues until the function returns a <b>falsy value</b>. And in that case <u>every</u> returns <u>false</u> - otherwise it returns <u>true</u>.

The every() method checks if all the array elements pass the given test function.

<b>every() Syntax </b>
The syntax of the <u>every()</u> method is:
arr.every(callback(currentValue), thisArg)
Here, <u>arr</u> is an array.

<b> every() Parameters </b>
The every() method takes in:
=> callback() - the function to test for each array element. It takes in:
=> currentValue - the current element being passed from the array.
=> thisArg (optional) - value to use as this when executing callback(). By default, it is undefined.

<b>every() Return Value </b>
The every() method returns:
<b>true</b> - if all the array elements pass the given test function (callback returns a truthy value).
<b>false</b> - if any array element fails the given test function.
Notes:

<u>every()</u> does not change the original array.
<u>every()</u> does not execute the <u>callback()</u> function for an empty array. In case we do pass an empty array, it always returns true.

In JavaScript, the <u>every()</u> method is an <b>array method</b> that checks whether <b>all elements</b> in an array pass a <b>test implemented by a provided function</b>. It returns a <b>boolean value: true</b> if all elements satisfy the condition, and <u>false</u> if <b>at least one element</b> does not.

array.<span style="color:blue">every</span>(<span style="color:red">callback</span>(element, index, array), thisArg);

    <b>callback</b>: A function that is executed on each element in the array.
    <b>element</b>: The current element being processed in the array.
    <b>index (optional)</b>: The index of the current element being processed.
    <b>array (optional)</b>: The array that every() was called on.
<b>thisArg (optional)</b>: A value to use as this when executing the callback function.

<b>Return Value</b>:
    <u>true</u> if <b>all</b> elements pass the test (i.e., the callback function returns <b>true</b> for every element).
    <u>false</u> if <b>any</b> element does <b>not</b> pass the test (i.e., the callback function returns <b>false</b> for at least one element).
`,
          code1: `// Ex : 1
                    // function that checks whether
// the age is 18 or above
function checkAdult(age) {
    return age >= 18;
}
const ageArray = [34, 23, 20, 26, 12];
//checks if all the array elements
// pass the checkAdult() function
let check = ageArray.every(checkAdult);
// Output: false


//-----------------
// Example 2: At Least One Element Fails the Test
// Check if all numbers in an array are even:

let arr = [2, 4, 6, 8, 10];
let result = arr.every(num => num % 2 === 0);
console.log(result);  // Output: true
// All elements in arr are even, so the method returns "true".

//--------------
//Ex : 2.1
// Example where the test fails:
let arr = [2, 4, 5, 8, 10];
let result = arr.every(num => num % 2 === 0);
console.log(result);  // Output: false
// Since 5 is not even, the every() method returns false.


//---------------
// Example 3: JavaScript every() With Arrow Function
let numbers = [ 1 , 2 , 3 , 4 , 5];
// use arrow function with every()
let result = numbers.every(element => element < 6);
console.log(result); 
// Output: true

// In the above example, we have created the "numbers" array. Then, we call the "every()" method on that array.
// Notice the arrow function "element=> element < 6" inside the "every()" method. This function checks whether a given array element is less than 6 or not.
// Since, all the elements in the "numbers" array are less than 6, we get "true" as an output.

//-----------------------
// Example 4: Checking if All Strings in an Array Have a Minimum Length
let words = ["apple", "banana", "cherry"];
let result = words.every(word => word.length > 4);
console.log(result);  // Output: true
// All the "words" in the words array have more than 4 characters, so the method returns true.


//---------------------
// Example 5: Using "thisArg" to Specify "this" Value
// The "thisArg" parameter allows you to pass an external object to be used as this inside the "callback" function.

function checkLength(minLength) {
  return function(word) {
    return word.length >= minLength;
  };
}

let minLength = 5;
let words = ["apple", "banana", "kiwi", "cherry"];
let result = words.every(checkLength(minLength));
console.log(result);  // Output: false
// Explanation:
// The function "checkLength(minLength)" returns a function that checks if the length of each word is greater than or equal to "minLength". In this case, the result is "false" because "kiwi" has fewer than 5 characters.


//---------------------
// Example 6: "every()" with an Array of Objects
// Check if all objects in an array meet a specific condition:

let products = [
  { name: "apple", price: 1 },
  { name: "banana", price: 2 },
  { name: "cherry", price: 3 }
];
let result = products.every(product => product.price > 0);
console.log(result);  // Output: true
// Explanation:
// Since all the "price" values are greater than "0", the "every()" method returns "true".


//---------------------
// Example: Using thisArg in every()
// Let's say we have an object with a property minAge, and we want to check if all people in an array of objects have an age greater than or equal to minAge.

const personChecker = {
  minAge: 18,
  checkAge: function(person) {
    return person.age >= this.minAge;  // Use \`this\` to refer to \`minAge\`
  }
};
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 17 }
];

// Use \`thisArg\` to pass \`personChecker\` as the value of \`this\`
const result = people.every(person => personChecker.checkAge.call(personChecker, person));
console.log(result);  // Output: false (because Charlie is under 18)

// Explanation:
//     => The \`personChecker\` object has a \`minAge\` property and a \`checkAge\` method, which checks if a person's age is greater than or equal to \`minAge\`.
//     => We use \`every()\` to check if all elements in the \`people\` array satisfy the condition that their \`age\` is greater than or equal to \`minAge\`.
//     => The \`call()\` method is used to bind the \`thisArg\` (the \`personChecker\` object) to the \`checkAge\` method.


//-------------------------
// thisArg Example with every():
// Alternatively, we can use thisArg directly in the every() method to specify the context (value of this) inside the callback:
const personChecker = {
  minAge: 18,
};
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 17 }
];

// Using \`thisArg\` directly
const result = people.every(function(person) {
  return person.age >= this.minAge;  // 'this' refers to personChecker
}, personChecker);  // Set \`thisArg\` to \`personChecker\`
console.log(result);  // Output: false (because Charlie is under 18)

// "Explanation of thisArg:"
//     In this version, we don't need to use "call()". Instead, we pass "personChecker" as the second argument to "every()".
//     Now, inside the callback function, "this" refers to the "personChecker" object (thanks to the "thisArg" passed to "every()").
 `
        },
        {
          text1: `Checking array elements using the for loop:--
                    Sometimes, you need to test whether every element of an array satisfies a specified condition.
                    
                    Typically, you use a  'for' loop to iterate all elements and check each individual element against the condition. Suppose that you have an array 'numbers' with three elements:
                    
                    let numbers = [1, 3, 5];
                    The following code checks if every element in the 'numbers' array is greater than zero:`,
          code1: `let numbers = [1, 3, 5];
                    let result = true;
                    for (let i = 0; i < numbers.length; i++) {
                      if (numbers[i] <= 0) {
                        result = false;
                        break;
                      }
                    }
                    console.log(result);
                    // Output:
                    // true
                    // How it works:`
        },
        {
          text1: `> First, initialize the  'result' variable to 'true'.
                    > Second, iterate over the elements of the 'numbers' array and check whether each element is less than or equal zero.If it is the case, set the 'result' variable to 'false' and terminate the loop immediately using the 'break' statement.In case no element is less than or equal zero, the value of the 'result' variable remains  'true'.
                    
                    This code is simple and straight forward.However, it is quite verbose.
                    
                      JavaScript 'Array' type provides the 'every()' method that allows you to check if every element of an array pass a test in a shorter and cleaner way.
                    
                    
                    Introduction to JavaScript Array every() method: --
                    
                      Starting from ES5, JavaScript Array type provides a method 'every()' that tests every element in an array.
                    
                    The following example uses the 'every()' to check if every element of the numbers array is greater than zero:`,
          code1: `let numbers = [1, 3, 5];
                    let result = numbers.every(function(e) {
                      return e > 0;
                    });
                    
                    console.log(result);
                    
                    // Output:
                    // true
                    
                    // By using the ES6 arrow functions, the code can be even shorter:
          
          let numbers = [1, 3, 5];
          let result = numbers.every(e => e > 0);
          console.log(result);
                    `
        },
        {
          text1: `  The following illustrates the syntax of the 'every()' method.
          
                        arrayObject.every(callback[, thisArg])
                    
                    The 'every()' method accepts two named arguments: 'callback' and 'thisArg'.
                    
                    1) The callback argument
                    The 'callback' is a function that tests each element of the array.The 'callback()' function has the following form:
                    
                    function callback(currentElement, index, array) {
                      //...
                    }
                    
                    The 'callback()' function takes three arguments:
                    
                    First, the 'currentElement' is the current element that is being processed.
                      Second, the 'index' is the index  of the 'currentElement'.
                        Third, the 'array' is the array that the 'every()' method was called upon.
                          The 'currentElement' argument is required whereas the 'index' and 'array' arguments are optional.
                            2) The thisArg argument
            The 'thisArg' argument of the 'every()' method is optional.If you pass the 'thisArg' argument into the method, the this value inside the callback function will reference the 'thisArg' argument.
          
            The 'every()' method returns 'true' if the 'callback' function returns a truthy value for every array element; otherwise, it returns 'false'.
          
            Note that the 'every()' method executes the 'callback()' function on every element in the array until it finds the one that causes the 'callback()' return a falsy value.
          
            In other words, the 'every()' will stop calling the 'callback()' function and return 'false' once there is an array element that causes 'callback()' to return a falsy value.
          
            Let's take a look at some more examples of using the 'every()' method.
          
          More JavaScript Array every() method examples
          The following example tests whether all the array elements are the even numbers
                    `,
          code1: `let numbers = [1, 3, 5];
                    let isEven = numbers.every(function(e) {
                      return e % 2 == 0;
                    });
                    
                    console.log(isEven);
                    
                    // Output:
                    // false
                    
                    // In contrast, the following example tests if all the array elements are the odd numbers.
          
          let numbers = [1, 3, 5];
          let isOdd = numbers.every(function(e) {
            return Math.abs(e % 2) == 1;
          });
          
          console.log(isOdd);
          
          // Output:
          // true
          
          // Suppose that you have an object with two properties: 'min' and 'max':
          
          let range = {
            min: 0,
            mas: 10
          };
          
          // The following example tests whether all elements in the 'numbers' array is in the range specified by the 'min' and 'max' of the 'range' object.
          
          
          let numbers = [1, 3, 5];
          
          let range = {
            min: 0,
            max: 10
          };
          
          let isInRange = numbers.every(function(e) {
            return e >= this.min && e <= this.max;
          }, range);
          
          // Output:
          // true
          
                    `
        },
        {
          text1: `In this example, we pass the 'range' object to the 'every()' method as the second argument.And inside the 'callback()' function, we reference the 'range' object using the this keyword.
          
                      Caution: Empty arrays: --
                        If you call the 'every()' method on an empty array, the method will always return true for any condition.For example:`,
          code1: `let gtZero = [].every(e => e > 0); // any condition
                    let ltZero = [].every(e => e < 0); // any condition
                    
                    console.log('gtZero:', gtZero);
                    console.log('ltZero:', ltZero);
                    
                    // Output:
                    // gtZero: true
                    // ltZero: true`
        },
      ]
    },
    {
      id: 1,
      title: "some()",
      note: [
        {
          text1: `<a href="https://www.freecodecamp.org/news/javascript-array-some-tutorial-how-to-iterate-through-elements-in-an-array/" target="_blank">some()</a>
                     Returns true if at least one element in this array satisfies the provided testing function.
                    The some() method tests whether any of the array elements pass the given test function.
                    
                   <b> some() Syntax</b>
The syntax of the <u>some()</u> method is:
arr.some(callback(currentValue), thisArg)
Here, <u>arr</u> is an array.

<b>some() Parameters</b>
The <u>some()</u> method can take two parameters:
=> <u>callback</u> - The callback function to test for each array element. It takes in:
=> <u>currentValue</u> - The current element being passed from the array.
=> <u>thisArg (optional)</u> - Value to use as this when executing callback. By default, it is <u>undefined</u>.

<b>some() Return Value</b>
Returns <u>true</u> if an array element passes the given test function (<u>callback</u> returns a truthy value).
Otherwise, it returns <u>false</u>.

<b>Notes</b>: The <u>some()</u> method does not:
=> change the original array.
=> execute <u>callback</u> for array elements without values.


<b>some</b> also works very similarly to <b>every</b>:
<b>some</b> loops over the array elements left to right.
=> For each iteration, it calls the given function with the current array element as its 1st argument.
=> The loop continues until the function returns a <b>truthy value</b>. And in that case <b>some</b> returns <b>true</b> - otherwise it returns <b>false</b>.


//--------------
The way to use <b>every</b> and <b>some</b> array methods is exactly the same. They have the same set of parameters and those parameters also mean identical things. So it's very easy to learn them at once.

We have already worked with first parameter of these methods which is a function. We call this function predicate.

In computer science, a <b>predicate</b> is a function of a set of parameters that returns a boolean as an answer. JavaScript treats the function we give to <b>every/some</b> as a predicate. We can return any type of value we wish, but those are treated as a Boolean, so it's common to call this function a predicate.
`,
          code1: `nums.some(n => n % 2 == 1);
// true

//---------------------

// a test function: returns an even number
function isEven(element) {
  return element % 2 === 0;
}

// defining an array
let numbers = [1, 3, 2, 5, 4];

// checks whether the numbers array contain at least one even number
console.log(numbers.some(isEven));

// Output: true 


//-----------------
let people = [{
    name: "Anna",
    sex: "Female"
  },

  {
    name: "Ben",
    sex: "Male"
  },

  {
    name: "Cara",
    sex: "Female"
  },

  {
    name: "Danny",
    sex: "Female"
  }

]

function isThereMale(person) {
    return person.sex === "Male"
}
console.log(people.some(person => isThereMale(person))) // true

`
        },
        {
          text1: ` The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
          
                     The some() method is an Array.propotype (built-in) method which takes in a callback function and will test that function  on each iteration against the current item.
                    
                     The method takes in three parameters:
                    
                     > currentItem: This is the element inside of the array which is currently being iterated over
                     > index: This is the index position of the currentItem inside of the array
                     > array: This represents the array collection to which the some() method is bound
                    
                     Sometimes, you want to check if an array has at least one element that meets a specified condition.
                    
                     For example, to check if the following array has at least one element less than 5:`,
          code1: `let marks = [4, 5, 7, 9, 10, 3];
          
                     …you typically use a 'for' loop, like this:
                    
                    let marks = [4, 5, 7, 9, 10, 3];
                    
                    let lessThanFive = false;
                    
                    for (let index = 0; index < marks.length; index++) {
                      if (marks[index] < 5) {
                        lessThanFive = true;
                        break;
                      }
                    }
                    
                    console.log(lessThanFive);
                    
                    //  Output:
                    //  true
          
                    //  > First, declare a flag variable 'lessThanFive' and set its value to 'false'.
                    //  > Second, iterate over the elements.If an element is less than 5, set the flag to 'true' and immediately exit the loop using the 'break' statement.
                    //  The code works as expected.However, it is quite verbose.
                     
                     //---------------------------
                     let marks = [4, 5, 7, 9, 10, 3];
          
          lessThanFive = marks.some(function(e) {
            return e < 5;
          });
          
          console.log(lessThanFive);
          
          // Output
          // true
          
          // The condition is implemented via a callback function passed into the 'some()' method.
          // Now, the code is shorter.To make it more expressive, you can use the arrow function syntax in ES6:
          
          let marks = [4, 5, 7, 9, 10, 3];
          let lessThanFive = marks.some(e => e < 5);
          console.log(lessThanFive);
                     `
        },
        {
          text1: ` JavaScript Array 'some()' syntax: --
                    
                     arrayObject.some(callback[, thisArg]);
                    
                     The 'some()' method accepts two arguments:
                    
                     1) The callback argument
                     The 'some()' function executes the 'callback' function once for each element in the array until it finds the one where the 'callback' function returns a 'true'.The 'some()' method immediately returns 'true' and doesn't evaluate the remaining elements.
                    
                     If no element causes the 'callback()' to return 'true', the 'some()' method returns 'false'.
                    
                       The 'callback' function takes three arguments:
                    
                     function callback(currentElement [[, currentIndex], array]) {  ...}
                    
                     > The 'currentElement' is the current element being processed in the array.
                     > The 'currentIndex' is the index of the current element being processed in the array.
                     > The 'array' is array that 'some()' was called upon.
                    
                     2) The thisArg argument: --
                       The 'thisArg' argument is optional.If you pass the 'thisArg' into the method, you can use the 'thisArg' as the 'this' value inside the 'callback' function.
                    
                     JavaScript Array some() examples: --
                     Let's take some more examples of using the 'some()' method.
                    
                     1) Check if an element exists in the array:
                     The following 'exists()' function uses the 'some()' method to check if a value exists in an array:`,
          code1: `function exists(value, array) {
                      return array.some(e => e === value);
                    }
                    
                    let marks = [4, 5, 7, 9, 10, 2];
                    
                    console.log(exists(4, marks));
                    console.log(exists(11, marks));
                    
                    // Output:
                    // true
                    // false`
        },
        {
          text1: `2) Check if an array has one element that is in a range: --
                    The following example shows how to check if any number in the 'marks' array is in the range of(8, 10):`,
          code1: `let marks = [4, 5, 7, 9, 10, 2];
                    const range = {
                      min: 8,
                      max: 10
                    };
                    
                    let result = marks.some(function(e) {
                      return e >= this.min && e <= this.max;
                    }, range);
                    
                    console.log(result);
                    
                    // Output:
                    // true
                    
                    // > First, define a range object with min and max properties.
          // > Second, call the 'some()' method on the marks array object and pass the callback and range object.Because we pass the range object as the second argument('thisArg'), we can reference it inside the callback via the 'this' value.
                    `
        },
        {
          text1: `<b>Notice</b> that if you use the arrow function in this example, the 'this' value inside the callback function doest not bind to the range 'object' but the 'global' object.
                    Caution: Empty arrays
          If you call the some() method on an empty array, the result is always false regardless of any condition. 
          For example:
                    `,
          code1: `let result = [].some(e => e > 0);
                    console.log(result);
                    
                    result = [].some(e => e <= 0);
                    console.log(result);
                    
                    //   Output:
                    //   false
                    //   false`
        }
      ]
    },
    {
      id: 1,
      title: "sort()",
      note: [
        {
          text1: `Sorts the elements of an array.
                    The sort() method sorts the items of an array in a specific order (ascending or descending).
                    works on arrays,
                    <b>Array sort() Method Works</b>
The sort() method can be used to sort elements of an array in ascending order based on Unicode character code values by default.

                   <b> How To Sort Numbers Accurately in JavaScript </b>
The sort() method of JavaScript compares the elements of the array by converting them into strings and then comparing their Unicode code points.

It is also important for you to know that when you apply the sort() method to an array, it will change the position of the elements in the original array. This means you do not need to assign a new variable to the sorted array:
The sort() method compares the elements of the array by converting them into strings and then comparing their Unicode code points. This means that in some situations, the sorting could go wrong in reality:
The sort() method sorts arrays in <b>lexicographical</b> order by default.

let numArray = [3, 10, 4, 21, 5, 9, 2, 6, 5, 3, 5].sort();
console.log(numArray); // Output: [10,2,21,3,3,4,5,5,5,6,9]

This can lead to unexpected results when sorting arrays of numbers, as seen in the example where 10, 5, and 80 are sorted as 10, 5, 80 instead of 5, 10, 80.
let <span style="color:blue">numArr</span> = [10, 5, 80].<span style="color:#9d0797;">sort</span>();
console.log(<span style="color:blue">numArr</span>); // Output: [10, 5, 80]

To solve this shortcoming, you can provide a <b>comparison function</b> that defines the desired sorting order.
For sorting an array of numbers, the comparison function should subtract the second number from the first number.
This will result in a negative number if the first number is smaller than the second number, a positive number if the first number is larger than the second number, and 0 if the two numbers are equal.

-> The function <u>(a, b) => a - b</u> compares two elements a and b:
->     <u>If a - b < 0</u>, a is considered <b>smaller</b> than <b>b</b>, and the order is kept as is.
->     <u>If a - b > 0</u>, a is considered <b>larger</b> than <b>b</b>, and their order is swapped.
->     <u>If a - b === 0</u>, the order remains unchanged.
-> This comparison function effectively sorts the numbers <b>in ascending numerical order</b>.

<b>Explanation</b>:
In lexicographical order, the sorting compares characters from <b>left to right</b>:
    // Compare the first characters.
    // If they are the same, move to the next character and compare again.
    // Continue this process until a difference is found or the end of one of the strings is reached.
                    `,
          code1: `// sorts based on Unicode character code values, let's see some examples.
let numArray = [3, 4, 1, 7, 2];
let sortedArr = numArray.sort();
console.log(sortedArr); // Output: [1,2,3,4,7]

        const arNum = [3, 5, 8, 12, 11, 10, 4, 2]
        console.log(arNum.sort((a, b) => a - b)) // ascending
        console.log(arNum.sort((a, b) => b - a)) // descending 
`
        },
        {
          text1: `(Ex : 1) By providing a comparison function that defines the correct sorting order, we can ensure that the array is sorted accurately.
                    
                    <b>How To Sort Strings Accurately</b>
The sort() method can also be used to sort an array of strings, but the sorting order may not be accurate in all cases.

For example (Ex : 2), the strings "a", "A", and "b" would be sorted as "A", "a", "b" instead of "a", "A", "b", because the uppercase "A" has a lower Unicode code point than the lowercase "a".

To solve this shortcoming, you can provide a comparison function that defines the desired sorting order.
For sorting an array of strings in a case-insensitive alphabetical order, the comparison function should convert both strings to lowercase using the <b>toLowerCase()</b> method and then compare them using the <b><</b> and <b>></b> operators.
                    `,
          code1: `//------------ Ex : 1 ----------
 let stringsArr = ["a", "A", "b", "C", "D", "e"].sort();
 console.log(stringsArr); // Output: ['A', 'C', 'D', 'a', 'b', 'e']


//------------ Ex : 2 ----------
 let stringsArr2 = ["a", "A", "b", "C", "D", "e"];
 stringsArr2.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);
console.log(stringsArr2); // Output: ['a', 'A', 'b', 'C', 'D', 'e']


//----------- Ex : 3 -----------
//  Sorting Strings in Reverse Order
// If you want to sort strings in reverse order, simply use the reverse() method after sorting.
let words = ['banana', 'apple', 'cherry', 'kiwi', 'grape'];
words.sort().reverse();  // First sort, then reverse
console.log(words);  // Output: ['kiwi', 'grape', 'banana', 'cherry', 'apple']

`
        },
        {
          text1: `<b>Explanation of Lexicographical Sorting:</b>
    <b>Lexicographical Order</b>: In lexicographical order, strings are compared character by character based on their Unicode values (character encoding values).
    For example:
        The first letter of "apple" is "a", which comes before "b", so "apple" comes before "banana".
        "banana" comes before "cherry", because "b" comes before "c".

<b>Lexicographical Sorting Based on Unicode Values</b>:
JavaScript compares characters using their Unicode values. For example:
    The character "a" has a Unicode value of <b>97</b>.
    The character "b" has a Unicode value of <b>98</b>.
    "apple" will come before "banana" because "a" (97) is less than "b" (98).`,
          code1: `let words = ['banana', 'apple', 'grape', 'kiwi', 'cherry'];
words.sort();
console.log(words);  // Output: [ 'apple', 'banana', 'cherry', 'grape', 'kiwi' ]
`
        },
        {
          // text1: `<b>Lexicographical (లెక్సికోగ్రాఫికల్)</b> comparison is based on the Unicode value of each character in the strings.
          text1: `<b>Lexicographical</b> comparison is based on the Unicode value of each character in the strings.

The program should return a positive value if the first string comes after the second string, a negative value if the first string comes before the second string, and zero if the strings are equal. 

In mathematics, the <b>lexicographic or lexicographical</b> order is a generalization of the alphabetical order of the dictionaries to sequences of ordered symbols or, more generally,
                    `,
          code1: `let numbers = [10, 2, 5, 1, 9];
numbers.sort();  // Sorts the array in lexicographical (string) order
console.log(numbers);  // Output: [1, 10, 2, 5, 9]
`
        },
        {
          text1: `<b>console.log('iPhone' > 'fasttrack')</b> returns <b>true</b> because JavaScript compares strings <b>lexicographically</b>, which means it compares the characters of the strings one by one based on their Unicode values.
                    
                               <b>Lexicographical comparison</b>:
                JavaScript compares strings character by character using the Unicode (or ASCII) value of each character.
           <b>Comparison of 'iPhone' and 'fasttrack'</b>:
                The comparison starts with the first characters in both strings:
                <code>'i'</code> has a Unicode value of 105.
                <code>'f'</code> has a Unicode value of 102.
        
           Since <code>105</code> (for <code>'i'</code>) is <b>greater than</b> <code>102</code> (for <code>'f'</code>), the comparison  returns <code>true</code> right away without checking the remaining characters. This is because string comparison in JavaScript stops at the first character that differs.
           
               The Unicode values of characters are ordered in a way that uppercase letters (like <code>'I'</code>, <code>'F'</code>) come before lowercase letters (like <code>'i'</code>, <code>'f'</code>). In fact, lowercase letters generally have a higher Unicode value than uppercase letters, so <code>'i'</code> comes after <code>'F'</code>. However, you are comparing an uppercase <code>'I'</code> with a lowercase <code>'f'</code>.
        `,
          code1: `console.log('i' > 'f'); // true because Unicode of 'i' (105) > 'f' (102)
console.log('I' < 'f'); // true because Unicode of 'I' (73) < 'f' (102)


// If you want a case-insensitive comparison or a different kind of sorting, you could convert both strings to lowercase or uppercase first:
console.log('iPhone'.toLowerCase() > 'fasttrack'.toLowerCase()); // false

`
        },
        {
          text1: `To find the Unicode value of a character in JavaScript, you can use the <b>charCodeAt()</b> method. This method returns the Unicode value (or ASCII value for characters in the ASCII range) of the character at a specific index in a string.
                    
                    let character = 'A';
let unicodeValue = character.charCodeAt(0); // Get Unicode value of 'A'
console.log(unicodeValue);  // Output: 65

charCodeAt(0) returns the Unicode value of the character at index 0 in the string. In this case, the character 'A' has a Unicode value of 65`,
          code1: `string.charCodeAt(index)
    // "index": The index of the character in the string whose Unicode value you want to retrieve. The index is zero-based.
    
    let character = 'A';
let unicodeValue = character.charCodeAt(0); // Get Unicode value of 'A'
console.log(unicodeValue);  // Output: 65



//---------------------
let str = "Hello";
for (let i = 0; i < str.length; i++) {
    console.log(\`Character: \${str[i]}, Unicode: \${str.charCodeAt(i)}\`);
}
// Output :     
// Character: H, Unicode: 72
// Character: e, Unicode: 101
// Character: l, Unicode: 108
// Character: l, Unicode: 108
// Character: o, Unicode: 111
`
        },
        {
          text1: ``,
          code1: `function compareBy(propertyName) {
  return function (a, b) {
    let x = a[propertyName],
      y = b[propertyName];

    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      return 0;
    }
  };
}
let products = [
  { name: 'iPhone', price: 900 },
  { name: 'Samsung Galaxy', price: 850 },
  { name: 'Sony Xperia', price: 700 },
];

// sort products by name
console.log('Products sorted by name:');
products.sort(compareBy('name'));
console.table(products);

// sort products by price
console.log('Products sorted by price:');
products.sort(compareBy('price'));
console.table(products);`
        },
        {
          text1: `The sort() function allows you to sort an array object by either the default sorting order, or by a custom sorting function.
          
                    By default, it sorts the elements in the array in ascending order based on their string Unicode values. The function takes the inputs, converts them to strings, and then sorts them using Unicode values.
          
                    The 'sort()' method allows you to sort elements of an array in place.Besides returning the sorted array, the 'sort()' method changes the positions of the elements in the original array.
                    
                    By default, the 'sort()' method sorts the array elements in ascending order with the smallest value first and largest value last.
                    
                    The 'sort()' method casts elements to strings and compares the strings to determine the orders.
                    
                    Consider the following example:`,
          code1: `let numbers = [0, 1, 2, 3, 10, 20, 30];
                    numbers.sort();
                    console.log(numbers);
                    
                    // The output is:
                    // [0, 1, 10, 2, 20, 3, 30]`
        },
        {
          text1: `In this example, the 'sort()' method places 10 before 2 because the string “10” comes before “2” when doing a string comparison.
          
                    To fix this, you need to pass a compare function to the 'sort()' method.The 'sort()' method will use the compare function to determine the orders of elements.
                    
                    The following illustrates the syntax of the 'sort()' method:
                    
                    array.sort(comparefunction)
                    
                    The 'sort()' method accepts an optional argument which is a function that compares two elements of the array.
                    
                    If you omit the compare function, the 'sort()' method sorts the elements with the sort order based on the Unicode code point values of elements as mentioned earlier.
                    
                    The compare function of the 'sort()' method accepts two arguments and returns a value that determines the sort order.The following illustrates the syntax of the compare function:
                    
                      function compare(a, b) {
                      // ...
                    }
                    
                    The 'compare()' function accepts two arguments 'a' and 'b'.The 'sort()' method will sort elements based on the return value of the 'compare()' function with the following rules:
                    
                    1). If 'compare(a, b)' is less than zero, the 'sort()' method sorts 'a' to a lower index than 'b'.In other words, a will come first.
                    2). If 'compare(a, b)' is greater than zero, the 'sort()' method sort 'b' to a lower index than 'a', i.e., b will come first.
                    3). If 'compare(a, b)' returns zero, the 'sort()' method considers a equals b and leaves their positions unchanged.
                    To fix the issue of sorting the number, you can use the following syntax:
                    `,
          code1: `let numbers = [0, 1, 2, 3, 10, 20, 30];
                    numbers.sort(function(a, b) {
                      if (a > b) return 1;
                      if (a < b) return -1;
                      return 0;
                    });
                    
                    console.log(numbers);
                    
                    // Output:
                    // [0, 1, 2, 3, 10, 20, 30]
                    
                    // Or you can define the comparison function using the arrow function syntax:
                    
                    let numbers = [0, 1, 2, 3, 10, 20, 30];
                    numbers.sort((a, b) => {
                      if (a > b) return 1;
                      if (a < b) return -1;
                      return 0;
                    });
                    
                    console.log(numbers);
                    
                    // And the following is the simplest since the elements of the array are numbers:
                    
                    let numbers = [0, 1, 2, 3, 10, 20, 30];
                    numbers.sort((a, b) => a - b);
                    
                    console.log(numbers);
                    
                    // Sorting an array of strings: --
                    // ----------------------------
                    // Suppose you have an array of string named 'animals' as follows:
                    
                    let animals = [
                      'cat', 'dog', 'elephant', 'bee', 'ant'
                    ];
                    
                    // To sort the elements of the 'animals' array in ascending order alphabetically, you use the 'sort()' method without passing the compare function as shown in the following example:
                    
                    let animals = [
                      'cat', 'dog', 'elephant', 'bee', 'ant'
                    ];
                    animals.sort();
                    
                    console.log(animals);
                    
                    // Output:
                    // ['ant', 'bee', 'cat', 'dog', 'elephant']
                    
                    
                    // To sort the 'animals' array in descending order, you need to change the logic of the compare function and pass it to the 'sort()' method as the following example.
                    
                    let animals = [
                      'cat', 'dog', 'elephant', 'bee', 'ant'
                    ];
                    
                    animals.sort((a, b) => {
                      if (a > b)
                        return -1;
                      if (a < b)
                        return 1;
                      return 0;
                    });
                    
                    console.log(animals);
                    
                    Output:
                    ['elephant', 'dog', 'cat', 'bee', 'ant']
                    
                    // Suppose you have an array that contains elements in both uppercase and lowercase as follows:
                    
                    // sorting array with mixed cases
                    let mixedCaseAnimals = [
                      'Cat', 'dog', 'Elephant', 'bee', 'ant'
                    ];
                    
                    // To sort this array alphabetically, you need to use a custom compare function to convert all elements to the same case e.g., uppercase for comparison and pass that function to the 'sort()' method.
                    
                    let mixedCaseAnimals = [
                      'Cat', 'dog', 'Elephant', 'bee', 'ant'
                    ];
                    
                    mixedCaseAnimals.sort(function(a, b) {
                      let x = a.toUpperCase(),
                        y = b.toUpperCase();
                      return x == y ? 0 : x > y ? 1 : -1;
                    
                    });
                    
                    // Output:
                    // ['ant', 'bee', 'Cat', 'dog', 'Elephant']`
        },
        {
          text1: `Sorting an array of strings with non-ASCII characters:--
                    
                    The 'sort()' method is working fine with the strings with ASCII characters.However, for the strings with non - ASCII characters e.g., é, è, etc., the 'sort()' method will not work correctly.For example:`,
          code1: `let animaux = ['zèbre', 'abeille', 'écureuil', 'chat'];
                    animaux.sort();
                    console.log(animaux);
          
                    // As you see, the 'écureuil' string should come before the 'zèbre' string.
                    
                    // To resolve this, you use the 'localeCompare()' method of the 'String' object to compare strings in a specific locale, like this:
                    
                    animaux.sort(function(a, b) {
                      return a.localeCompare(b);
                    });
                    console.log(animaux);
                    
                    // Output:
                    // ['abeille', 'chat', 'écureuil', 'zèbre']
                    
                    // The elements of the 'animaux' array now are in the correct order.
                    
          // Sorting an array of numbers: --
          // ------- -- ----- -- --------
          //   Suppose you have an array of numbers named 'scores' as in the following example.
          
          let scores = [
            9, 80, 10, 20, 5, 70
          ];
          
          // To sort an array of numbers numerically, you need to pass into a custom comparison function that compares two numbers.
          
          // The following example sorts the 'scores' array numerically in ascending order.
          
          let scores = [
            9, 80, 10, 20, 5, 70
          ];
          // sort numbers in ascending order
          scores.sort((a, b) => a - b);
          
          console.log(scores);
          
          // Output:
          // [5, 9, 10, 20, 70, 80]
          
          
          // To sort an array of numbers numerically in descending order, you just need to reverse the logic in the compare function as shown in the following example:
          
          let scores = [
            9, 80, 10, 20, 5, 70
          ];
          // descending order
          scores.sort((a, b) => b - a);
          console.log(scores);
          
          // Output:
          // [80, 70, 20, 10, 9, 5]
          
          
          // Sorting an array of objects by a specified property: --
          // ------- -- ----- -- ------- -- - --------- --------
          //   The following is an array of 'employee' objects, where each object contains three properties: 'name', 'salary' and 'hireDate'.
          
          let employees = [
            { name: 'John', salary: 90000, hireDate: "July 1, 2010" },
            { name: 'David', salary: 75000, hireDate: "August 15, 2009" },
            { name: 'Ana', salary: 80000, hireDate: "December 12, 2011" }
          ];
          
          // Sorting objects by a numeric property
          // The following example shows how to sort the employees by 'salary' in ascending order.
          
          // sort by salary
          employees.sort(function(x, y) {
            return x.salary - y.salary;
          });
          
          console.table(employees);
          
          Output: <table>
          
          
          // This example is similar to the example of sorting an array of numbers in ascending order.The difference is that it compares the 'salary' property of two objects instead.
          
          // Sorting objects by a string property:
          // ------- ------- -- - ------ --------
          // To sort the 'employees' array by 'name' property case-insensitively, you pass the compare function that compares two strings case-insensitively as follows:
          
          employees.sort(function(x, y) {
            let a = x.name.toUpperCase(),
              b = y.name.toUpperCase();
            return a == b ? 0 : a > b ? 1 : -1;
          });
          
          console.table(employees);
          
          // Sorting objects by the date property:--
          // ------- ------- -- --- ---- --------
          // Suppose, you wish to sort employees based on each employee's hire date.
          
          // The hire date data is stored in the 'hireDate' property of the employee object. However, it is just a string that represents a valid date, not the 'Date' object. 
          
          // Therefore, to sort employees by hire date, you first have to create a valid 'Date' object from the date string, and then compare two dates, which is the same as comparing two numbers.
          
          // Here is the solution:
          
          employees.sort(function(x, y) {
            let a = new Date(x.hireDate),
              b = new Date(y.hireDate);
            return a - b;
          });
          
          console.table(employees);
          
          // Optimizing JavaScript Array sort() method:--
          // ---------- ---------- ----- ------ ------
          // In fact, the 'sort()' method calls the compare function multiple times for each element in the array.
          
          // See the following example:
          
          let rivers = ['Nile', 'Amazon', 'Congo', 'Mississippi', 'Rio-Grande'];
          
          rivers.sort(function(a, b) {
            console.log(a, b);
            return a.length - b.length;
          });
          
          // Output:
          // Amazon Nile
          // Congo Amazon
          // Congo Amazon
          // Congo Nile
          // Mississippi Congo
          // Mississippi Amazon
          // Rio - Grande Amazon
          // Rio - Grande Mississippi
                    `
        },
        {
          text1: `> First, declare an array 'rivers' that consists of the famous river names.
                    > Second, sort the 'rivers' array by the length of its element using the 'sort()' method.We output the elements of the 'rivers' array to the web console whenever the 'sort()' method invokes the comparison function .
                    
                    As shown in the output above, each element has been evaluated multiple times e.g., Amazon 4 times, Congo 2 times, etc.
                    
                    If the number of array elements is increasing, it will potentially decrease the performance.
                    
                    You cannot reduce the number of times that comparison function is executed. However, you can reduce the work that the comparison has to do. This technique is called Schwartzian Transform.
                    
                    To implement this, you follow these steps:
                    
                    1) First, extract the actual values into a temporary array using the map() method.
                    2) Second, sort the temporary array with the elements that are already evaluated(or transformed).
                    3) Third, walk the temporary array to get an array with the right order.
                    `,
          code1: `// Here is the solution:
          
                    // temporary array holds objects with position
                    // and length of element
                    var lengths = rivers.map(function(e, i) {
                      return { index: i, value: e.length };
                    });
                    
                    // sorting the lengths array containing the lengths of
                    // river names
                    lengths.sort(function(a, b) {
                      return +(a.value > b.value) || +(a.value === b.value) - 1;
                    });
                    
                    // copy element back to the array
                    var sortedRivers = lengths.map(function(e) {
                      return rivers[e.index];
                    });
                    
                    console.log(sortedRivers);
                    
                    // Output:
                    // [ 'Nile', 'Congo', 'Amazon', 'Rio-Grande', 'Mississippi' ]
                    
                    // In this tutorial, you have learned how to use the JavaScript Array 'sort()' method to sort arrays of strings, numbers, dates, and objects.`
        },
        {
          text1: ``,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "reduce()",
      note: [
        {
          text1: `The reduce() method executes a reducer function on each element of the array and returns a single output value.
      
                The array reduce in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function on each element of the array.It accepts a function executed on all the items of the specified array in the left - to - right sequence.The returned single value is stored in the accumulator.Thus, array reduce JavaScript is a non - mutating method.This means that instead of changing the actual value variable, it will hold the computed value in the accumulator without changing the original value variable.
                
                  reduce() Parameters: -
                  The <b>reduce()</b> method takes in:
                
                 1) => callback - The callback function to execute on each array element(except the first element if no <b>initialValue</b> is provided). It takes in
                
                  > <b>accumulator</b> - It accumulates the callback's return values.
                  > <b>currentValue</b> - The current element being passed from the array.
                
                2) => <b>initialValue</b>(optional) - A value that will be passed to <b>callback()</b> on first call.If not provided, the first element acts as the <b>accumulator</b> on the first call and <b>callback()</b> won't execute on it.
                
                <b>Note: </b> Calling reduce() on an empty array without initialValue will throw TypeError.
                
                <b>reduce() Return Value:- </b>
                  Returns the single value resulting after reducing the array.
      
                Notes:
                > <b>reduce()</b> executes the given function for each value from left to right.
                > <b>reduce()</b> does not change the original array.
                > It is almost always safer to provide <b>initialValue</b>.
      
                <b>Accumulator:</b> This contains the value calculated from the previous iteration. On the first iteration, if an <b>initialValue</b> will be provided, the accumulator will be set to the value of <b>initialValue</b>.
                <b>CurrentValue:</b> The current value of the element is processed in the array.
                <b>CurrentIndex:</b> The index of the current element is processed in the array.
                <b>Array:</b> The original array on which the <b>reduce()</b> method was called.
      
                When to Use the reduce() Method:--
                As shown above, the reduce() method is recommended when you need to have a single value returned from iterating over your array.
                
                This includes:
                
                > Summarizing your values into a single value
                > Grouping similar items together
                > Removing duplicates from an array
                
                The single value returned by the method can also be an array of objects, therefore containing multiple values.
                
                Suppose that you have an array of numbers, like this:
                let numbers = [1, 2, 3];
      
                // and you want to calculate the total of elements of the array. Typically, you use a 'for' loop to iterate over the elements and add them up as shown in the following example:
                
                let numbers = [1, 2, 3];
                let sum = 0;
                for (let i = 0; i < numbers.length; i++) {
                  sum += numbers[i];
                }
                console.log(sum);
                
                // Output:
                // 6
                `,
          code1: ``
        },
        {
          text1: ` The script is simple and straightforward:--
      
                > First, declare an array of three numbers 1, 2 and 3.
                  > Second, declare the sum variable and set its value to zero.
                > Third, in the for loop, add up the elements of the numbers array to the sum variable.After the loop, the value of the sum variable is 6.
                
                What we have done was to 'reduce' an array into a value.
                
                The 'Array.prototype' allows you to reduce an array to a single value using the 'reduce()' method like this:
                `,
          code1: `let numbers = [1, 2, 3];
                let sum = numbers.reduce(function(previousValue, currentValue) {
                  return previousValue + currentValue;
                });
                console.log(sum);`
        },
        {
          text1: `JavaScript Array reduce() method in detail: --
                  The following illustrates the syntax of the 'reduce()' method:
                
                array.reduce(callbackFn[, initialValue])
                
                The 'reduce()' method takes two arguments:
                
                > A callback function 'callbackFn'.The function is often referred to as a reducer.
                > An optional initial value.
                  The 'reduce()' method calls the 'callbackFn()' function for every element in the array.
                
                    The 'reducer()' function returns a value that results from executing the 'callbackFn' to completion over the entire array.
                    1) The callbackFn() function argument
      
                     The 'callbackFn' function has the following syntax:
                    
                     function callbackFn(previousValue, currentValue, currentIndex, array) { /**/ }
                    
                    
                     The 'callbackFn' function takes four arguments:
                    
                     'previousValue':
                     The value returned from the previous call of the 'callbackFn' function. On the first call, the 'initialValue' is the 'previousValue' if you pass the 'initialValue'.Otherwise, its value is the 'array[0]'.
                    
                       currentValue:
                     The value of the current array element.On the first call, it is 'array[0]' if you pas the 'initialValue' or 'array[1]' otherwise.
                    
                       currentIndex:
                     The index of the currentValue in the array.On the first call, it's '0' if you pass the 'initialValue' or '1' otherwise.
                    
                     'array':
                     The array to loop through.
      
                     <b>2) The initialValue argument</b>
                     The 'initialValue' argument is optional.
                     
                     If you specify the 'initialValue', the 'callbackFn' function will initialize the 'previousValue' to the 'initialValue' and 'currentValue' to the first array's element on the first call.
                     
                     If you don't specify the 'initialValue', the the 'callbackFn' function will initialize the 'previousValue' to the first array's element(array[0]) in the array and the 'currentValue' to the second array's element(array[1]).
                     
                     The following table illustrates the logic when the 'reduce()' method executes the 'callbackFn()' function for the first time according to the 'initialValue' argument:
      
                     <div class='table-res'>
                          <table border=1 >
                              <tbody>
                                  <tr>
                                    <th>initialValue</th>
                                    <th>previousValue</th>
                                    <th>currentValue</th>
                                  </tr>
      
                                  <tr>
                                    <td>passed</td>
                                    <td>initialValue</td>
                                    <td>array[0]</td>
                                  </tr>
      
                                  <tr>
                                    <td>not passed</td>
                                    <td>array[0]</td>
                                    <td>array[1]</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                    `,
          code1: `// The following example shows the progress of the reduce() function with an 'initialValue' as 100:
      
                let numbers = [1, 2, 3];
                
                function getOrdinalSuffix(i) {
                  let j = i % 10, k = i % 100;
                  if (j == 1 && k != 11) return i + 'st';
                  if (j == 2 && k != 12) return i + 'nd';
                  if (j == 3 && k != 13) return i + 'rd';
                  return i + 'th';
                }
                
                let call = 1;
                let sum = numbers.reduce(function(previousValue, currentValue, currentIndex, array) {
                  let result = previousValue + currentValue;
                
                  // show the 1st call, 2nd call, etc.
                  console.log('\${getOrdinalSuffix(call)} call');
                  call++;
                
                  // show the immediate values
                  console.table({ previousValue, currentValue, currentIndex, result });
                
                  return result;
                }, 100);
                
                console.log('Result: \${sum}');
                `
        },
        {
          text1: `Output:
                1st call
      
                <div class='table-res'>
                  <table border=1 >
                      <tbody>
                          <tr>
                            <th> (index)  </th>
                            <th> Values </th>
                          </tr>
      
                          <tr>
                            <td>previousValue</td>
                            <td>100</td>
                          </tr>
      
                          <tr>
                            <td>currentValue</td>
                            <td>1</td>
                          </tr>
      
                          <tr>
                            <td>currentIndex</td>
                            <td> 0 </td>
                          </tr>
      
                          <tr>
                            <td>result</td>
                            <td> 101 </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
      
              2nd call
      
                <div class='table-res'>
                  <table border=1 >
                      <tbody>
                          <tr>
                            <th> (index)  </th>
                            <th> Values </th>
                          </tr>
      
                          <tr>
                            <td>previousValue</td>
                            <td>101</td>
                          </tr>
      
                          <tr>
                            <td>currentValue</td>
                            <td>2</td>
                          </tr>
      
                          <tr>
                            <td>currentIndex</td>
                            <td> 1 </td>
                          </tr>
      
                          <tr>
                            <td>result</td>
                            <td> 103 </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
      
              3rd call
      
                <div class='table-res'>
                <table border=1 >
                    <tbody>
                        <tr>
                          <th> (index)  </th>
                          <th> Values </th>
                        </tr>
      
                        <tr>
                          <td>previousValue</td>
                          <td>103</td>
                        </tr>
      
                        <tr>
                          <td>currentValue</td>
                          <td> 3 </td>
                        </tr>
      
                        <tr>
                          <td>currentIndex</td>
                          <td> 2 </td>
                        </tr>
      
                        <tr>
                          <td>result</td>
                          <td> 106 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
      
              Result: 106
                `,
          code1: ``
        },
        {
          text1: ` And the following illustrates the 'reduce()' method without the 'initialValue' argument:
              1st call
      
                <div class='table-res'>
                <table border=1 >
                    <tbody>
                        <tr>
                          <th> (index) </th>
                          <th> Values </th>
                        </tr>
      
                        <tr>
                          <td>previousValue</td>
                          <td>1</td>
                        </tr>
      
                        <tr>
                          <td>currentValue</td>
                          <td> 2 </td>
                        </tr>
      
                        <tr>
                          <td>currentIndex</td>
                          <td> 1 </td>
                        </tr>
      
                        <tr>
                          <td>result</td>
                          <td> 3 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
              2nd call
      
                <div class='table-res'>
                <table border=1 >
                    <tbody>
                        <tr>
                          <th> (index) </th>
                          <th> Values </th>
                        </tr>
      
                        <tr>
                          <td>previousValue</td>
                          <td> 3 </td>
                        </tr>
      
                        <tr>
                          <td>currentValue</td>
                          <td> 3 </td>
                        </tr>
      
                        <tr>
                          <td>currentIndex</td>
                          <td> 2 </td>
                        </tr>
      
                        <tr>
                          <td>result</td>
                          <td> 6 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
      
                // Result: 6
                // More JavaScript Array reduce() examples: --
                // Suppose that you have the following 'shoppingCart' array of product objects:`,
          code1: `let shoppingCart = [
                  {
                    product: 'phone',
                    qty: 1,
                    price: 500,
                  },
                  {
                    product: 'Screen Protector',
                    qty: 1,
                    price: 10,
                  },
                  {
                    product: 'Memory Card',
                    qty: 2,
                    price: 20,
                  },
                ];
                
                // To calculate the total amount of the products in the shopping cart, you can use the 'reduce()' method, like this:
                
                let total = shoppingCart.reduce(function(previousValue, currentValue) {
                  return previousValue + currentValue.qty * currentValue.price;
                }, 0);
                
                // Output:
                // 550
                `
        },
        {
          text1: `Notice that in this example, we passed in the 'initialValue' argument to the 'reduce()' method.
      
                If we didn't do so, the 'reduce()' method would take the first element of the 'shoppingCart' array, which is an object, as an initial value and perform the calculation on this object.Hence, it would cause an incorrect result.
                
                
                JavaScript Array reduceRight() method: --
                  The 'reduceRight()' method works in the same way as the 'reduce()' method, but in the opposite direction.
                
                    The 'reduce()' method starts at the first element and travels toward the last, whereas the 'reduceRight()' method starts at the last element and travels backward the first.
                
                See the following example:`,
          code1: `let numbers = [1, 2, 3];
      
                let sum = numbers.reduceRight(function(previousValue, currentValue) {
                  console.log({ previousValue, currentValue });
                  return previousValue + currentValue;
                });
                
                console.log('Result: \${sum}');
                
                // Output
                
                // { previousValue: 3, currentValue: 2 }
                // { previousValue: 5, currentValue: 1 }
                // Result:6
                
                // reduceRight() methods to reduce an array into a value.
      
      // Map
      function double(x){
          return x * 2
      }
      const ar = [2,4,7,9];
      const dValues = ar.map(double)
      console.log(dValues)
      
      
      function total(arr) {
         return arr.reduce(function(tot, acc, i, arrr){
          console.log("tot ",tot)
          console.log("acc ",acc)
          return tot + acc
         }, 0)
      }
      
      console.log(total([1,2,3])); // 6
      
      const userDetails = [
          {
              fullName: "American First Finance",
              area: 'yes',
          },
          {
              fullName: "World Health",
              area: 'yes',
          }
      ]
      
      //-----------------
      // returning new array
      const newARR = userDetails.map(acc => {
          const shortOb =  {...acc, shordName : acc.fullName.toLocaleLowerCase().split(' ').map(name => name[0]).join('') }
          return shortOb
      })
      console.log(newARR) //
      output
      [
          { fullName: 'American First Finance', area: 'yes' },
          { fullName: 'World Health', area: 'yes'}
      ]
      
      //------------------------
      // mutated original array
      userDetails.forEach(acc => {
          acc.shortName = acc.fullName.toLocaleLowerCase().split(' ').map(name => name[0]).join('')
      })
      console.log(userDetails)
      output
      [
          { fullName: 'American First Finance', area: 'yes', shordName: 'aff' },
          { fullName: 'World Health', area: 'yes', shordName: 'wh' }
      ]
      
      // ========================================
      
      
      
      // Example 1:
      const bankMovementsInDollars = [130, -50, 2000, -500, 1200, 2000, -400, -200, 500]
      const rupees = 83.64
      const credis = bankMovementsInDollars.filter(mov => mov > 0)
                                          .map(doll => doll * rupees)
                                          .reduce((acc, mov) => acc + mov, 0)
      console.log("total credits in rupees ",credis)
      
      // ---------
      // Example 2:   
      // For example, here is the code for getting the total number of occurrences for each fruit in an array of fruits:
      const fruits = ['Banana', 'Orange', 'Apple', 'Orange', 'Pear', 'Banana', 'Pear', 'Banana']
      
      const occursFruits = fruits.reduce((acc, currFruit) => {
          return { ...acc, [currFruit]: (acc[currFruit] || 0) + 1 }
          // return 1
      }, {})
      console.log(occursFruits)
      
      // Note that at each step of the iteration, the accumulator will be a hash map (i.e. a JavaScript object) with a key for each fruit in the array so far, and the values will be the number of times each fruit has occurred. This is the expression where we update the accumulator:
      
      // {...acc, [currFruit]: (acc[currFruit] || 0) + 1 }
      // Let's break this down a little. First, using the spread operator, ...acc copies over all the existing values from the accumulator.
      
      // Then, [currFruit]: sets the value for the current fruit in the array. For example, on the very first iteration over the fruits collection, this will create the Banana property. acc[currFruit] || 0 retrieves the value for that fruit from the previous version of the accumulator. If the fruit doesn't exist in the accumulator, it will start with a value of zero. 
      
      // Finally, we add 1 to the value of that fruit and return the new accumulator.
      
      // -----------
      // Example 3:
      // For example, suppose we want to get just the names of each student from an array of objects. We can reduce the array from an array of objects to an array of string values, like so:
      
      const students = [
          { name: "Kingsley", score: 70 },
          { name: "Jack", score: 80 },
          { name: "Joe", score: 63 },
          { name: "Beth", score: 75 },
          { name: "Kareem", score: 59 },
          { name: "Sarah", score: 93 }
      ]
      
      const stuNames = students.map((stu) => {
          return stu.name
      })
      console.log(stuNames)
      
      const stuNamesReduce = students.reduce((acc, stu) => {
          return [...acc, stu.name]
      },[])
      console.log(stuNamesReduce)
      
      // ----------
      // Example 4:
      // total marks
      const studentsArray = [
          { name: "Kingsley", sub1: 45, sub2: 45, sub3: 45 },
          { name: "Jack", sub1: 41, sub2: 44, sub3: 85 },
          { name: "Joe", sub1: 57, sub2: 49, sub3: 45 },
          { name: "Beth", sub1: 45, sub2: 85, sub3: 65 },
          { name: "Kareem", sub1: 15, sub2: 65, sub3: 95 },
          { name: "Sarah", sub1: 35, sub2: 65, sub3: 5 }
      ]
      
      const sutMarks = studentsArray.reduce((acc, currStu) => {
          // return { ...acc, [currStu.name]: currStu.sub1 + currStu.sub2 + currStu.sub3 }
          return [...acc, {...currStu, total: currStu.sub1 + currStu.sub2 + currStu.sub3 }]
      }, [])
      
      console.log(sutMarks)
      console.log(studentsArray)
      
      const students = [
          { name: "Kingsley", score: 70 },
          { name: "Jack", score: 80 },
          { name: "Joe", score: 63 },
          { name: "Beth", score: 75 },
          { name: "Kareem", score: 59 },
          { name: "Sarah", score: 93 }
      ]
      
      const max = students.reduce((acc, currStu) => {
          console.log(acc, currStu.score)
          return acc ?? currStu.score > acc ? currStu.score : acc
      }, null)
      
      // console.log(max)
      
      // ---------
      // Example 5:
      let ArrayList = ["Gun", "Hat", "Hate", "Apple", "Animals", "Ball", "Bat", "Cat", "Candy", "Dog", "Dare", "Exam", "Earth", "Air"];
      const chOb = ArrayList.reduce((acc, let) => {
          return { ...acc, [let[0]]: acc[let[0]] ? acc[let[0]].concat([let]) : [let] }
      }, {})
      
      // console.log(chOb)
      
      // // {"A":["Animals","Apple"],"B":["Ball","Bat"],"C":["Candy","Cat"],"D":["Dare","Dog"],"E":["Earth","Exam"],"G":["Gang","Gun"],"H":["Hat","Hate"]}
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
      title: "reduceRight()",
      note: [
        {
          text1: `Apply a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value.`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      section:"Arrays to Strings",
      title: "join()",
      note: [
        {
          text1: `Joins all elements of an array into a string.
                concatenate all elements of an array into a string separated by a separator.types
                 The <b>join()</b> method allows you to concatenate all elements of an array and returns a new string:
                <span style="color:red"> Array.prototype.join([separator]) </span>
                
                The <b>join()</b> method accepts a optional argument <b>separator</b> which is a string that separates each pair of adjacent elements of the array in the result string.
                  The <b>separator</b> defaults to a comma if you don't pass it to the <b>join()</b> method.
                In case the array has one element, the <b>join()</b> method returns that element as a string without using the <b>separator</b>.
                And if the array is empty, the <b>join()</b> method returns an empty string.
                When the elements of the array aren't strings, the <b>join()</b> method converts them to strings before joining.
                
                Note that the <b>join()</b> method converts <b>undefined, null</b>, and empty array[] to an empty string.
                `,
          code1: `Ex: 
                const cssClasses = ['btn', 'btn-primary', 'btn-active'];
                const btnClass = cssClasses.join(' ');
                
                console.log(btnClass);
                
                // Output:
                // btn btn - primary btn - active
                
                // In this example, we have an array that holds a list of CSS classes.And we use the 'join()' method joins all elements of the 'cssClasses' array and return a string of the CSS classes separated by a space.
                `
        },
        {
          text1: `<b>2) Using the JavaScript Array 'join()' method to replace all occurrences of a string</b>
                
                This example uses the JavaScript Array 'join()' method to replace all occurrences of the space ' ' by the hyphen(-):`,
          code1: `const title = 'JavaScript array join example';
                const url = title.split(' ')
                  .join('-')
                  .toLowerCase();
                
                console.log(url);
                
                // Output:
                // javascript - array - join - example
                
                // > First, split the title string by the space into an array by using the 'split()' string method.
                // > Second, concatenate all elements in the result array into a string by using the 'join()' method.
                // > Third, convert the result string to lower case by using the 'toLowerCase()' method.`
        },
        {
          text1: `=> Summary
                Use the JavaScript Array 'join()' method to concatenate all elements of an array into a string separated by a separator.`,
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
      section: "Adding/removing elements",
      title: "pop()",
      note: [
        {
          text1: `The pop() method removes the last element from an array and returns that element.`,
          code1: `let cities = ["Madrid", "New York", "Kathmandu", "Paris"];
      
                // remove the last element
                let removedCity = cities.pop();
                
                console.log(cities)         // ["Madrid", "New York", "Kathmandu"]
                console.log(removedCity);   // Paris
                
                // pop() Return Value
                // Removes the last element from array and returns that value.
                // Returns undefined if the array is empty.
                // Notes: This method changes the original array and its length.`
        },
      ]
    },
    {
      id: 1,
      title: "push()",
      note: [
        {
          text1: `The push() method adds zero or more elements to the end of the array.`,
          code1: `let city = ["New York", "Madrid", "Kathmandu"];

          // add "London" to the array
          city.push("London");
          console.log(city);
          // Output: [ 'New York', 'Madrid', 'Kathmandu', 'London' ]
          
          // The syntax of the push() method is:
          arr.push(element1, element2, ..., elementN)

          // push() Parameters
          // The push() method takes in an arbitrary number of elements to add to the array.`
        },
      ]
    },
    {
      id: 1,
      title: "shift()",
      note: [
        {
          text1: `Removes the first element from an array and returns that element.
                    
                    The shift() method in JavaScript is used to remove the first element of an array, reducing the array’s length by one. This method is particularly useful for scenarios where elements need to be processed in the order they were added, such as in <b>queue-like structures</b>.
Javascript Shift is an inbuilt Array method that removes the first element from an array and returns the removed element.

<b>shift() Syntax</b>
The syntax of the <b>shift()</b> method is:
arr.shift()
Here, <b>arr</b> is an array.

<b>shift() Parameters</b>
The shift() method does not accept any arguments.

<b>shift() Return Value</b>
-> Removes the first element from array and returns that value.
-> Returns undefined if the array is empty.
After removing the element at the 0th index, it shifts other values to consecutive indexes down.
This function returns the removed first element of the array. If the array is empty then this function returns undefined.

<b>Notes</b>:
-> This method changes the original array and its length.
-> To remove the last element of an array, use the JavaScript Array pop() method.

<b>Eg</b>: In arr = [ “a”,”b”,”c”] after Shift is used the element “a” is removed and the subsequent elements are moved up 1 index, i.e “b” whose index was 1 initially is moved to 

 Javascript Shift() function reduces the size of the array by 1. And on the contrary
                    `,
          code1: `var languages = ["JavaScript", "Python", "Java", "C++", "Lua"];
var shifted = languages.shift();
console.log(languages); // [ 'Python', 'Java', 'C++', 'Lua' ]
console.log(shifted); // JavaScript

//------------------
// shift returns any type of object
var numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [-5, -4, -3],
];
console.log(numbers.shift()); // [ 1, 2, 3 ]
console.log(numbers); // [ [ 4, 5, 6 ], [ -5, -4, -3 ] ]`
        },
        {
          text1: `The shift() method removes the first element from an array and returns that element.
                  The syntax of the shift() method is:
        arr.shift()
        
        shift() Parameters
        The shift() method does not accept any arguments.
        
          shift() Return Value
          Removes the first element from array and returns that value.
          Returns undefined if the array is empty.
          After removing the element at the 0th index, it shifts other values to consecutive indexes down.
                  `,
          code1: `let languages = ["English", "Java", "Python", "JavaScript"];
        
                  // removes the first element of the array
                  let first = languages.shift();
                  console.log(first);
                  console.log(languages);
                  
                  // Output: English
                  //         [ 'Java', 'Python', 'JavaScript' ]`
        },
      ]
    },
    {
      id: 1,
      title: "unshift()",
      note: [
        {
          text1: `Adds one or more elements to the front of an array and returns the new length of the array.
                    The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

                    <b>Notes</b>:
This method changes the original array and its length.
To add elements to the end of an array, use the JavaScript Array push() method.
                    `,
          code1: `let languages = ["Java", "Python", "C"];
// add "JavaScript" at the beginning of the array
languages.unshift("JavaScript");
console.log(languages);
// Output: [ 'JavaScript', 'Java', 'Python', 'C' ]`
        },
        {
          text1: `In JavaScript, you use the <b>unshift()</b> method to add one or more elements to the beginning of an array and it returns the array's length after the new elements have been added.

          If we have an array of countries and want to add a country before <b>Nigeria</b> which is currently at the first index 0, we can do so with the <b>unshift()</b> method, as shown below:`,
          code1: `const countries = ["Nigeria", "Ghana", "Rwanda"];
          countries.unshift("Kenya");
          console.log(countries); // ["Kenya","Nigeria","Ghana","Rwanda"]
          
          // As we said, we can also add more than one element using the unshift() method:
          
          const countries2 = ["Nigeria", "Ghana", "Rwanda"];
          countries2.unshift("South Africa", "Mali", "Kenya");
          console.log(countries2); // ["South Africa","Mali","Kenya","Nigeria","Ghana","Rwanda"]
          
          // In our explanation of the unshift() method, we also stated that it returns the length of the new array, which is true:
          
          const countries3 = ["Nigeria", "Ghana", "Rwanda"];
          let countriesLength = countries3.unshift("South Africa", "Mali", "Kenya");
          console.log(countriesLength); // 6`
        },
      ]
    },
    {
      id: 1,
      title: "splice() - (adds, removes or replaces elements)",
      note: [
        {
          text1: `<b>The splice() method modifies an array(adds, removes or replaces elements).</b>
                splice() method that allows you to insert new elements into the middle of an array. Also, you can use this method to delete and replace existing elements as well.

                <b>Deleting elements using JavaScript Array's splice() method</b>
                To  delete elements in an array, you pass two arguments into the splice() method as follows:

                <span style="color:red">Array.splice(position,num);</span>
                The <b>position</b> specifies the position of the first item to delete and the <b>num</b> argument determines the number of elements to delete.
                The splice() method changes the original array and returns an array that contains the deleted elements.
                
                Let's take a look at the following example.
                Suppose, you have an array <b>scores</b> that contains five numbers from 1 to 5.
             `,
          code1: `let scores = [1, 2, 3, 4, 5];
                // The following statement deletes three elements of the 'scores' array starting from the first element.
                let deletedScores = scores.splice(0, 3);
                // The scores array now contains two elements.
                console.log(scores); //  [4, 5]
                // And the deletedScores array contains three elements.
                
                console.log(deletedScores); // [1, 2, 3]
                // The following figure illustrates the scores.splice(0, 3) method call above.
      
                // The following figure illustrates the scores.splice(0,3) method call above.
                // 0: The position of the first item to delete
                // 3: The number of elements to delete`
        },
        {
          text1: `<b>Inserting elements using the JavaScript Array splice() method</b>
      
                You can insert one or more elements into an array by passing three or more arguments to the splice() method with the second argument is zero.
      
                Consider the following syntax.
                <span style="color:red">  Array.splice(position, 0, new_element_1, new_element_2, ...); </span>
      
                In this syntax:
                The <b>position</b> specifies the starting position in the array in which the new elements will be inserted.
                The second argument is zero (0) which instructs the splice() method to not delete any array elements.
                The third argument, fourth argument, and so on are the new elements that are inserted into the array.
                Note that the splice() method changes the original array. Also, the splice() method does not remove any elements, therefore, it returns an empty array. For example:
      
                `,
          code1: `// Assuming that you have an array named colors with three strings:
                let colors = ['red', 'green', 'blue'];
                
                // The following statement inserts one element after the second element.
                colors.splice(2, 0, 'purple');
                // The colors array now has four elements with the new element inserted in the second position.
                
                console.log(colors); // ["red", "green", "purple", "blue"]
                // The following figure demonstrates the method call above.
                
                // 2: starting position to Intert
                // 0: number of elements to delete(not delete any array elements.)
                // "purple": new element to insert.
                
                // You can insert more than one element by passing the fourth argument, the fifth argument, and so on to the splice() method as in the following example.
                
                colors.splice(1, 0, 'yellow', 'pink');
                console.log(colors); 
                ["red", "yellow", "pink", "green", "purple", "blue"]
                `
        },
        {
          text1: `<b>Replacing elements using the JavaScript Array splice() method</b>
                The splice() method allows you to insert new elements into an array while deleting existing elements simultaneously.
                To do this, you pass at least three arguments with the second one that specifies the number of items to delete and the third one that indicates the elements to insert.
                
                <b>Note</b> that the number of elements to delete needs not be the same as the number of elements to insert.
                
                Suppose you have an array of programming languages with four elements as follows:
                `,
          code1: `let languages = ['C', 'C++', 'Java', 'JavaScript'];
                // The following statement replaces the second element with a new one.
                
                languages.splice(1, 1, 'Python');
                // The 'languages' array now still has four elements with the new second argument is 'Python' instead of 'C++'.
                
                console.log(languages);
                // ["C", "Python", "Java", "JavaScript"]
                // The following figure illustrates the method call above.
                
                // You can replace one element with multiple elements by passing more arguments into the splice() method as follows:
                
                languages.splice(2, 1, 'C#', 'Swift', 'Go');
                // The statement deletes one element from the second element i.e., 'Java' and inserts three new elements into the 'languages' array. The result is as follows.
                
                console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
                
                //------------------->
                const months1 = ['Jan', 'March', 'April', 'June'];
                months1.splice(1, 0, 'Feb');
                // 'Feb' Inserts at index 1
                console.log(months1);
                // Expected output: Array ["Jan", "Feb", "March", "April", "June"]
                
                months1.splice(4, 1, 'May');
                // 'May' Replaces 1 element at index 4
                console.log(months1);
                // Expected output: Array ["Jan", "Feb", "March", "April", "May"]
                
                //-------------------->
                const months = ['Jan', 'Feb', 'Monday', 'Tuesday'];
                const days = months.splice(2, 2, 'March', 'April');
                console.log(months) //  ['Jan', 'Feb', 'March', 'April']
                console.log(days) // ['Monday', 'Tuesday']`
        },
        {
          text1: `<a href="https://www.freecodecamp.org/news/how-to-slice-and-splice-arrays-in-javascript-72bbca45006/" target="_blank">slice and splice</a>`,
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
      title: "slice() - copy elements of an array.",
      note: [
        {
          text1: `The <b>slice()</b> method can be used to create a copy of an array or return a portion of an array. It is important to note that the <b>slice()</b> method does not alter the original array but instead creates a shallow copy.

                The slice() method accepts two optional parameters as follows:
               <span style="color:red"> slice(optional start parameter, optional end parameter) </span>
                Both <u>start</u> and <u>end</u> parameters are optional.
                The <u>start</u> parameter determines the zero - based index at which to start extraction.If the <u>start</u> is <u>undefined</u>, slice() begins at 0.
                
                The <b>end</b> parameter, as its name implies, is a zero - based index at which to end extraction. The slice() method extracts up to <b>end-1</b>. It means that the slice() method doesn't include the element at the <b>end</b> position in the new array. If you omit the <b>end</b> parameter, the slice() method will use the length of the array for the <b>end</b> parameter.
                
                The slice() returns a new array that contains the elements of the original array. It's important to keep in mind that the slice() method performs the shallow copy of elements to the new array only. In addition, it doesn't change the source array.

                It works on <b>Array</b> and <b>String</b> both
                `,
          code1: `//-------------- Ex : 1 ----------
                // //slice() JavaScript method without the start and end parameters
//In this first example, I have created a list of cities from around the world.
const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];
console.log(cities.slice()) // (5) ['Tokyo', 'Cairo', 'Los Angeles', 'Paris', 'Seattle']
// I can use the slice() method to create a shallow copy of that array.


//---------------- Ex : -------------
 //Clone an array
               // The slice() is used to clone an array as shown in the following example:
var numbers = [1, 2, 3, 4, 5];
                var newNumbers = numbers.slice();
                // In this example, the 'newNumbers' array contains all the elements of the 'numbers' array.             
               `
        },
        {
          text1: `<b>slice() JavaScript method using the start parameter</b>
                You can use the optional start parameter to set a starting position for selecting elements from the array. It is important to remember that arrays are zero based indexed.
                
                You can also use negative indexes which will start extracting elements from the end of the array.
                `,
          code1: `//In this example, we will set the start position at index 2 which will select the last three cities in the array and return them in a new array.
                 const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];
console.log(cities.slice(2))

//--------------
// The original array was not modified as we can see here in this example.
const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];
const newCityArr = cities.slice(2);

console.log("Original: ", cities)
console.log("New: ", newCityArr)

//----------------------
// In this example, we will set the start position at -2 which will select the last two cities in the array and return them in a new array.
const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];
const newCityArr = cities.slice(-2);

//-----------------
// If the start parameter is greater than the last index of the array, then an empty array will be returned.
const newCityArr = cities.slice(5);
`
        },
        {
          text1: `The slice() method in JavaScript is used to extract a shallow copy of a portion of an array or a string without modifying the original array or string. It returns a new array or string that contains the selected elements or characters from the original one.
                    array.slice([begin[, end]]);
string.slice([begin[, end]]);

    <b>begin</b> (optional): The index at which to begin extraction. If negative, it counts from the end of the array or string.
    <b>end</b> (optional): The index at which to end the extraction. This is not inclusive, meaning the element at the end index will not be included in the returned result. If not provided, the slice will go until the end of the array or string.

Key Points:
    => The <u>slice()</u> method does not modify the original array or string.
    => The <u>begin</u> index is inclusive (starts from that index).
    => The <u>end</u> index is exclusive (it does not include the element at the end index).
    => If <u>end</u> is omitted, <u>slice()</u> will extract elements until the end of the array or string.

    let arr = [10, 20, 30, 40, 50];
let newArr = arr.slice(-3, -1);
console.log(newArr);  // Output: [30, 40]

<b>Step-by-Step Explanation</b>:
<b>1. Understanding arr.slice(-3, -1)</b>:
    <b>Array</b>: <u>arr = [10, 20, 30, 40, 50]</u>
    <u>slice()</u> method: The <u>slice()</u> method extracts a shallow copy of a portion of an array (or string) into a new array (or string). It takes two arguments:
        <u>start</u>: The index where the slice begins (inclusive).
        <u>end</u>: The index where the slice ends (exclusive).
In this case, the <u>slice()</u> method is called with <b>negative indices</b>:
    <b>-3 (start index)</b>: This means "start 3 elements from the end."
    <b>-1 (end index)</b>: This means "end 1 element from the end."

<b>2. How Negative Indices Work</b>:
    Negative indices in JavaScript arrays start counting from the end of the array:
        -1 refers to the last element of the array (50).
        -2 refers to the second-to-last element (40).
        -3 refers to the third-to-last element (30).
So, in the case of <u>arr.slice(-3, -1)</u>:
    <b>Start</b>: The start index <u>-3</u> refers to the element <u>30</u> (the third-to-last element).
    <b>End</b>: The end index <u>-1</u> refers to the last element <u>(50)</u>, but since slice() is <b>exclusive</b> of the <u>end</u> index, it stops right before the last element.

<b>3. Extracting the Elements</b>:
The <u>slice()</u> method will:
    Start at index <u>-3</u> (which is <u>30</u>).
    End just before index <u>-1</u> (which is <u>50</u>).
    This means it will include the elements <u>30</u> and <u>40</u>, but exclude <u>50</u>.
So, the slice is from index <u>-3</u> to index <u>-1</u>, resulting in the sub-array <u>[30, 40]</u>
    `,
          code1: `let arr = [10, 20, 30, 40, 50];
let newArr = arr.slice(-3, -1);
console.log(newArr);  // Output: [30, 40]
`
        },
        {
          text1: `<b>Key Differences Between slice(), substring(), and substr()</b>:
    => <b>slice()</b>: Can accept negative indices, and the end index is exclusive.
    => <b>substring()</b>: Does not accept negative indices, and swaps begin and end if begin is greater than end.
    => <b>substr()</b>: The second argument specifies the length of the substring, not the end index.
    `,
          code1: ``
        },
        {
          text1: ` Copy a portion of an array
        The typical use of the slice() method is to copy a portion of an array without modifying the source array.Here is an example:
        `,
          code1: `function toArray() {
                    return Array.prototype.slice.call(arguments);
                    }
                    var classification = toArray('A', 'B', 'C');
                    console.log(classification); // ["A", "B", "C"]`
        },
        {
          text1: `In this example, the <b>arguments</b> of the toArray() function is an array-like object. Inside the toArray() function, we called the slice() method to convert the arguments object into an array.
      
                Every argument we pass to the toArray() function will be the elements of the new array.
                
                Another typical example that you often see is converting a <b>NodeList</b> into an array as follows:
                `,
          code1: `var p = document.querySelectorAll('p');
                var list = Array.prototype.slice.call(p);
                
                // In this example, first, we used the 'document.querySelectorAll()' to get all 'p' nodes of the HTML document.The result of this method is a 'NodeList' object, which is an array - like object.Then, we called the 'slice()' method to convert the 'NodeList' object into an array.
                
                //   Sometimes, you see the following syntax:
                var list = [].slice.call(document.querySelectorAll('p'));
                
                // In this example, we instantiated an empty array '[]' and indirectly accessed the 'slice()' method of the 'Array.prototype' method through the empty array.The effect is the same as the one that uses the 'Array.prototype' directly.`
        },
        {
          text1: `slice() vs splice()
                slice returns a piece of the array but it doesn’t affect the original array. splice changes the original array by removing, replacing, or adding values and returns the affected values.
                
                <div class='table-res'> 
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th><code>slice()</code></th>
                            <th><code>splice()</code></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Modifies Original</strong></td>
                            <td>No</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td><strong>Return Value</strong></td>
                            <td>New array (shallow copy)</td>
                            <td>Array of removed elements</td>
                        </tr>
                        <tr>
                            <td><strong>Arguments</strong></td>
                            <td><code>slice(start, end)</code></td>
                            <td><code>splice(start, deleteCount, item1, item2, ...)</code></td>
                        </tr>
                        <tr>
                            <td><strong>Common Use</strong></td>
                            <td>Extract a section of an array or string.</td>
                            <td>Modify the original array (add, remove, replace)</td>
                        </tr>
                    </tbody>
                </table>
                </div>`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      section: `Reversing elements`,
      title: "reverse()",
      note: [
        {
          text1: `The reverse() method of TypedArray instances reverses a typed array in place and returns the reference to the same typed array, the first typed array element now becoming the last, and the last typed array element becoming the first.In other words, elements order in the typed array will be turned towards the direction opposite to that previously stated.This method has the same algorithm as Array.prototype.reverse().
      
                Using a for loop (or any other type of loop), we can loop through an array from the last time to the first item, and push those values to a new array which becomes the reversed version. Here's how:`,
          code1: `const array = [1, 2, 3, 4]
      
                const reversedArray = []
                
                for (let i = array.length - 1; i >= 0; i--) {
                  const valueAtIndex = array[i]
                  reversedArray.push(valueAtIndex)
                }
                
                console.log(reversedArray)
                // [4, 3, 2, 1]
                
                //By using a 'for' loop, we start looping from the index of the last 'value (array.length - 1)' to the index of the first 'value (0)'.Then we push the values accordingly to 'reversedArray'.
      
                const array = [1, 2, 3, 4]
                
                array.reverse()
                
                console.log(array)
                // [ 4, 3, 2, 1 ]
                `
        },
        {
          text1: `<a href="https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/" target="_blank">Three Ways to Reverse a String in JavaScript</a>`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "toReversed()",
      note: [
        {
          text1: ` The <b>toReversed()</b> method reverses the order of elements in an array and returns a new array with the elements in reversed order.
      
                 Unlike the <b>reversed()</b> method that reverses the elements of the array in place, the <b>toReversed()</b> method does not modify the original array.Instead, it creates a new array with the elements of the original array in the reversed order.
                
                Here's the basic syntax of the <b>toReversed()</b> method:
                
                   <span style="color:red">Array.prototype.toReversed()</span>
                
                 The <b>toReversed()</b> method takes no parameters and returns a new array containing the elements in reversed order.
                
                 When you call the <b>toReversed()</b> method on a sparse array, it treats empty slots as if they have the value <b>undefined</b>.
                
                 This method is generic, meaning that you can call it on a non - array object that has a length property and integer - keyed properties.
                
                JavaScript Array toReversed() method examples
                Let's explore some examples of using the JavaScript array toReverse() method.
                
                <b> 1) Using JavaScript Array toReversed() method on string arrays </b>
                The following example uses the toReverse() method to reverse an array of strings:`,
          code1: `const colors = ['red', 'green', 'blue'];
                const reversedColors = colors.toReversed();
                
                console.log(colors);
                console.log(reversedColors);
                
                // Output:
                // ['red', 'green', 'blue']
                // ['blue', 'green', 'red']
                `
        },
        {
          text1: `<b>3) Using JavaScript Array toReversed() method on arrays of objects</b>
                The following example uses the toReversed() method to reverse the order of objects in an array:`,
          code1: `const contacts = [{ name: 'John' }, { name: 'Alice' }, { name: 'Bob' }];
                const reversedContacts = contacts.toReversed();
                
                console.log(contacts);
                console.log(reversedContacts);
                
                // Output:
                // [{ name: 'John' }, { name: 'Alice' }, { name: 'Bob' }]
                // [{ name: 'Bob' }, { name: 'Alice' }, { name: 'John' }]
                `
        },
        {
          text1: `<b>4) Calling toReversed() method on sparse arrays</b>
                When you call the toReversed() method on a sparse array, the result array remains sparse.The toReversed() method copies empty slots over their respective indices as empty slots:`,
          code1: `const scores = [1, , 7, 5];
                const reversedScores = scores.toReversed();
                
                console.log(scores);
                console.log(reversedScores);
                
                // Output:
                // [1, , 7, 5]
                // [5, 7, undefined, 1]
                `
        },
        {
          text1: `<b>5) Calling toReversed() method on non - array objects</b>
                The following example illustrates how to call the toReversed() method on an object that has the length property and integer - keyed properties:`,
          code1: `const arrayLike = {
                  length: 3,
                  unrelated: "bar",
                  2: 2,
                  3: 3, // ignored because the length is 3
                };
                
                const result = Array.prototype.reverse.call(arrayLike);
                
                console.log(result);
                
                // Output:
                // { 0: 2, 3: 3, length: 3, unrelated: 'bar' }
                `
        },
        {
          text1: `In this example, the toReversed() method does the following:
      
                First, access the length property of the object.
                  Second, iterate through each property with an integer key ranging from 0 to length / 2.
                Third, swap the values at corresponding indices on both ends of the array.Additionally, remove any destination property without a corresponding source property.
                  Finally, return a new object with the order of the elements(or properties) in the reversed order.
                <b>Summary</b>
                Use the JavaScript array toReversed() method to reverse the order of elements within an array and return a new reversed array.`,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "toSource()",
      note: [
        {
          text1: `Represents the source code of an object`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      section:"Creating Arrays",
      title: "of()",
      note: [
        {
          text1: `when you pass a number to the Array constructor, JavaScript creates an array whose length equals the number.For example:`,
          code1: `let numbers = new Array(2);
              console.log(numbers.length); // 2
              console.log(numbers[0]); // undefined
              
              // However, when you pass to the 'Array' constructor a value that is not a number, JavaScript creates an array that contains one element with that value.For example:
              
              numbers = new Array("2");
              console.log(numbers.length); // 1
              console.log(numbers[0]); // "2"`
        },
        {
          text1: `This behavior is sometimes confusing and error - prone because you may not know the type of data that you pass to the Array constructor.
    
              ES6 introduces the <b>Array.of()</b> method to solve this problem.
              
              The <b>Array.of()</b> method is similar to the Array constructor except the <b>Array.of()</b> method does not treat a single numeric value special.
              
              In other words, the <b>Array.of()</b> method always creates an array that contains the values that you pass to it regardless of the types or the number of arguments.
              
              The following shows the syntax of the <b>Array.of()</b> method:
              
              <span style="color:red"> Array.of(element0[, element1[, ...[, elementN]]]) </span>
              <b>JavaScript Array.of() examples</b>
              `,
          code1: `// See the following example:
    
              let numbers = Array.of(3);
              console.log(numbers.length); // 1
              console.log(numbers[0]); // 3
              
              // In this example, we passed the number 3 to the 'Array.of()' method.The 'Array.of()' method creates an array of one number.
              
              // Consider the following example:
              
              let chars = Array.of('A', 'B', 'C');
              console.log(chars.length); // 3
              console.log(chars); // ['A','B','C']
              // In this example, we created an array of three strings by passing 'A', 'B', and 'C' to the 'Array.of()' method.The size of the array is 3.
              `
        },
        {
          text1: `
             <b>JavaScript Array.of() polyfill:--</b>
    
    If you execute the JavaScript in the environment that doesn't support the  'Array.of()' method, you can use the following polyfill:
    `,
          code1: `if (!Array.of) {
                Array.of = function() {
                  return Array.prototype.slice.call(arguments);
                };
              }`
        },
        {
          text1: ``,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      title: "from()",
      note: [
        {
          text1: `To create an array from an array-like object in ES5, you iterate over all array elements and add each of them to an intermediate array like this:`,
          code1: `function arrayFromArgs() {
            var results = [];
            for (var i = 0; i < arguments.length; i++) {
              results.push(arguments[i]);
            }
            return results;
          }
          var fruits = arrayFromArgs('Apple', 'Orange', 'Banana');
          console.log(fruits);
          
          // Output:
          // [ 'Apple', 'Orange', 'Banana' ]
          
          // To make it more concise, you can use the 'slice()' method of the 'Array.prototype' as follows:
          
          function arrayFromArgs() {
            return Array.prototype.slice.call(arguments);
          }
          var fruits = arrayFromArgs('Apple', 'Orange', 'Banana');
          console.log(fruits);`
        },
        {
          text1: `ES6 introduces the 'Array.from()' method that creates a new instance of the 'Array' from an array-like or iterable object. The following illustrates the syntax of the 'Array.from()' method:

          <span style="color:red">Array.from(target [, mapFn[, thisArg]])</span>
          
          In this syntax:
          
          > <b>target</b> is an array - like or iterable object to convert to an array.
          > <b>mapFn</b> is the map function to call on every element of the array
          > <b>thisArg</b> is the <b>this</b> value when executing the <b>mapFn</b> function.
          
          The <b>Array.from()</b> returns a new instance of <b>Array</b> that contains all elements of the <b>target</b> object.
          
          ------------------------------
          <b>JavaScript Array.from() method examples </b>
          -------------------------------
          Let's take some examples of using the <b>Array.from()</b> method.
          1) Create an array from an array - like object:--
          The following example uses the <b>Array.from()</b> method to create a new array from the <b>arguments</b> object of a function:
          `,
          code1: `function arrayFromArgs() {
            return Array.from(arguments);
          }
          console.log(arrayFromArgs(1, 'A'));
          
          // Output:
          // [1, 'A']
          // In this example, we create an array from the arguments of the 'arrayFromArgs()' function and return it.
          `
        },
        {
          text1: `<b>2) JavaScript Array Array.from() with a mapping function:--</b>
          The <b>Array.from()</b> method accepts a callback function that allows you to execute the mapping function on every element of the array that is being created.See the following example:`,
          code1: `function addOne() {
            return Array.from(arguments, x => x + 1);
          }
          console.log(addOne(1, 2, 3));
          
          // Output:
          // [2, 3, 4]
          // In this example, we increased each argument of the 'addOne()' function by one and add the result to the new array.
          `
        },
        {
          text1: ` <b>3) JavaScript Array.from() with a this value:--</b>
           
          If the mapping function belongs to an object, you can optionally pass the third argument to the <b>Array.from()</b> method.The object will represent the <b>this</b> value inside the mapping function. Consider this example:`,
          code1: `let doubler = {
            factor: 2,
            double(x) {
              return x * this.factor;
            }
          }
          let scores = [5, 6, 7];
          let newScores = Array.from(scores, doubler.double, doubler);
          console.log(newScores);
          
          // Output:
          // [10, 12, 14]
          `
        },
        {
          text1: `<b>4) Create an array from an iterable object: --</b>
          
          Since the <b>Array.from()</b> method also works on an iterable object, you can use it to create an array from any object that has a <b>[symbol.iterator]</b> property.For example:`,
          code1: `let even = {
            *[Symbol.iterator]() {
              for (let i = 0; i < 10; i += 2) {
                yield i;
              }
            }
          };
          let evenNumbers = Array.from(even);
          console.log(evenNumbers);
          
          // Output:
          // [0, 2, 4, 6, 8]

          // > First, define the 'even' object with the '[System.iterator]' that returns even numbers from 0 to 10.
// > Then, use the 'Array.from()' method to create a new array of even numbers from the 'even' object.

          `
        }
      ]
    },
    {
      id: 1,
      section:"Flattening arrays",
      title: "flat()",
      note: [
        {
          text1: `ES2019 introduced the <b>Array.prototype.flat()</b> method that creates a new array with all the elements of the subarrays concatenated to it recursively up to a specified depth.

          // The following shows the syntax of the <b>flat()</b> method:
          
          <span style="color:red"> let newArray = arrayObject.flat([depth]) </span>
          
          // The <b>depth</b> parameter specifies how deep the method flats the array structure.It defaults to 1.
          // The following example shows how to flat an array of numbers:`,
          code1: `const numbers = [1, 2, [3, 4, 5]];
          const flatNumbers = numbers.flat();
          
          console.log(flatNumbers);
          
          // Output:
          // [1, 2, 3, 4, 5]
          
          // In this example, we didn't pass the depth argument into the 'flat()' method therefore the depth is 1 by default. The 'flat()' method concatenated all the elements of the nested array[3, 4, 5] to the elements of the new array.
          // 'Note' :- that the 'flat()' method creates a new array and doesn't change the original array:
          console.log(numbers);

// Output:
// [1, 2, [3, 4, 5]]

// The following example flats an array with two level depth:

const numbers = [1, 2, [3, 4, 5, [6, 7]]];
const flatNumbers = numbers.flat(2);

console.log(flatNumbers);

// Output:
// [1, 2, 3, 4, 5, 6, 7]

// When you dont know the depth level, you can pass the 'Infinity' into the 'flat()' method to recursively concatenate all elements of the sub - arrays into the new array:

const numbers = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];
const flatNumbers = numbers.flat(Infinity);

console.log(flatNumbers);

// If an array has empty slots, you can use the 'flat()' method to remove the holes, like this:

const numbers = [1, 2, , 4, , 5];
const sequence = numbers.flat();
console.log(sequence);

// Output:
// [1, 2, 4, 5]
          `
        },
        {
          text1: `<b>Summary</b>
          => Use the 'Array.prototype.flat()' method to flat an array with the nested arrays.
          => Use the 'depth' argument to specify how deep the nested arrays should be flattened.The depth is 1 by default.
          => The 'flat()' also removes the holes in the array with empty slots.
          `,
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
      ]
    },
    {
      id: 1,
      title: "flatMap()",
      note: [
        {
          text1: ` The <b>flat()</b> method creates a new <b>array</b> with the elements of the subarrays concatenated into it.
            The <b>map()</b> method creates a new array whose elements are the results of a mapping function.
          The <b>flatMap()</b> method is the combination of the <b>map()</b> method followed by the <b>flat()</b> method of depth 1.
          The <b>flatMap()</b> method first maps each element in an array using a mapping function and then flattens the results into a new array.
          
          The following shows the syntax of the <b>flatMap()</b> method:--
          `,
          code1: `let newArray = arrayObject.flatMap(callback, thisArg);`
        },
        {
          text1: ` The <b>flatMap()</b> method takes two parameters:
          -------------------------------
          <b>1) The callback mapping function:--</b>
          -------------------------------
           The <b>callback</b> is the mapping function has the same syntax as the one in the <b>map()</b> method:
          function callback(currentValue [[, index], array]);
          
          ----------------------
          <b> 2) The thisArg argument:--</b>
          ---------------------
           The optional <b>thisArg</b> argument is a value to use as <b>this</b> when executing the <b>callback</b>.
           Note that the <b>flatMap()</b> method doesn't modify the original array.
          
          ----------------------
          <b> JavaScript Array flatMap() examples </b>
          ----------------------
           Let's take some examples of using the <b>flatMap()</b> method.
          
          ----------------------
           1) Creating words from sentences example
          ----------------------
           Suppose that you have the following array:
          <span style="color:red"> let sentences = ["JavaScript Array flatMap()", " ", "is", " ", "Awesome"]; </span>
          
           The following <b>map()</b> function splits the words of  sentences:`,
          code1: `let words = sentences.map(s => s.split(' '));
          console.log(words);
          
          // Output:
          // [
          //   ['JavaScript', 'Array', 'flatMap()'],
          //   [' '],
          //   ['is'],
          //   [' '],
          //   ['Awesome']
          // ]`
        },
        {
          text1: `The result is an array of nested arrays filled by words.To flatten the result, you can use the 'flat()' method on the result of the 'map()' method.However, it'll be more concise to use the 'flatMap()' method.

          The 'flatMap()' creates a flattened array by running each sentence in the array through a mapping function and flattening the mapped results:`,
          code1: `let sentences = [
            "JavaScript Array flatMap()",
            " ",
            "is",
            " ",
            "Awesome"
          ];
          
          let words = sentences.flatMap(s => s.split(' '));
          console.log(words);
          
          // Output:
          // ['JavaScript', 'Array', 'flatMap()', '', '', 'is', '', '', 'Awesome']`
        },
        {
          text1: `----------------------
           <b>2) Adding and removing elements during mapping example:</b>
          ----------------------
          
           The 'flatMap()' method allows you to add or remove elements during mapping.Consider the following example:
           Suppose that you have the following shopping cart:`,
          code1: `let cart = [{
            name: 'Smartphone',
            qty: 2,
            price: 500,
            freeOfCharge: false
          },
          {
            name: 'Tablet',
            qty: 1,
            price: 800,
            freeOfCharge: false
          }
          ];
          
          // If customers buy a smartphone, you want to give them a free screen protector.
          // When the customer adds a smartphone to the cart, you can add a screen protector to the cart using the 'flatMap()' method as follows:
          
          let newCart = cart.flatMap(
            (item) => {
              if (item.name === 'Smartphone') {
                return [item, {
                  name: 'Screen Protector',
                  qty: item.qty,
                  price: 5,
                  freeOfCharge: true
                }]
              } else {
                return [item];
              }
            }
          );
          
          console.log(newCart);
          
          // The cart will look like this:
          
          [
            { name: 'Smartphone', qty: 2, price: 500, freeOfCharge: false },
            { name: 'Screen Protector', qty: 2, price: 5, freeOfCharge: true },
            { name: 'Tablet', qty: 1, price: 800, freeOfCharge: false }
          ]
          
          // The following uses the 'reduce()' method to calculate the total amount from the items in the cart.It ignores the free - of - charge items, like screen protectors:
          
          const total = newCart.reduce((sum, item) => {
            if (!item.freeOfCharge)
              sum += item.price * item.qty;
            return sum;
          }, 0);
          
          console.log({ total });
          
          // Output:
          // { total: 1800 }
        `
        },
        {
          text1: `<b>Summary</b>
          Use the <b>flatMap()</b> method to create a flattened array of elements by running each element in the collection through a mapping function and flattening the mapped results.`,
          code1: ``
        },
      ]
    },
    {
      id: 1,
      section:"Accessing elements",
      title: "at()",
      note: [
        {
          text1: `In JavaScript, you can use the square bracket <b>[]</b> to access an element of an array. For example, the <b>arr[0]</b> returns the first element in the array <b>arr</b>, the <b>arr[1]</b> returns the second element, and so on.

          To get the last element in an array, you use the <b>length</b> property like this:
          arr[length - 1]
          
          JavaScript doesn't allow you to use a negative index to access the last element like other languages e.g., Python.For example, the following returns undefined:
          arr[-1]
          
          The reason is that JavaScript also uses square brackets <b>[]</b> for accessing a property of an object.
          For example, the <b>obj[1]</b> returns a property of the object <b>obj</b> with the key "1".Hence, the <b>obj[-1]</b> returns the property of an object with the key "-1".
          
          In the above example, the <b>arr[-1]</b> returns the property of the <b>arr</b> object with the key "-1".Note that the type of an array is <b>object</b>.Since the "-1" property doesn't exist in the <b>arr</b> object, it returns <b>undefined</b>.
          
          For this reason, ES2022 introduced a new method <b>at()</b> added to the <b>prototype</b> of <b>Array</b>, <b>String</b>, and <b>TypeArray</b>.This tutorial focuses on the <b>at()</b> method of the <b>Array.prototype</b>.
          
          The <b>at()</b> method accepts an index and returns an element at that index.Here's the syntax of the <b>at()</b> method:
          arr.at(index)
          
          In this syntax, the <b>index</b> specifies an array element to return.It can be zero, positive, or negative.
          If the index is zero or positive, the <b>at()</b> method works like the <b>[]</b>.
          
          However, if you use a negative index, the method returns an element from the end of the array.For example, the <b>arr.at(-1)</b> returns the last element, <b>arr.at(-2)</b> returns the second last element, and so on.`,
          code1: `//The following example shows how to use the 'at()' method to return an array element:
          const scores = [5, 6, 7];
          console.log(scores.at(1)); // same as scores[1] 
          // get the last element
          console.log(scores.at(-1)); // 7
          console.log(scores.at(-1) === scores[scores.length - 1]); // true
          
          // Output:
          // 6
          // 7
          // true
`
        },
      ]
    },
    {
      id: 1,
      title: "split()",
      note: [
        {
          text1: `Splits a String object into an array of strings by separating the string into substrings.
                    The split() method is used to split a string into an array of substrings, and return the new array. The split() method does not change the original string. The method has two parameters. Both are optional.

First specifies the character, or the regular expression, to use for splitting the string. If the parameter is omitted, the entire string will be returned as an array with only one item. On the other hand, if an empty string (“”) is used as the separator, the string is split between each character.
Second parameter is an integer number that specifies the amount of splits. Items after the split limit will not be included in the resulting array.

The split() method in JavaScript is used to split a string into an array of substrings, based on a specified separator. The separator can be a string, a regular expression, or omitted (in which case the entire string is returned as a single element array).`,
          code1: `    const str = "Hello Dev Newbs! 😃";
    // separator is not provided
    console.log(str.split()) // ["Hello Dev Newbs! 😃"]

    // separator is empty string
    console.log(str.split("")) // ["H", "e", "l", "l", "o", " ", "D", "e", "v", " ", "N", "e", "w", // "b", "s", "!", " ", "\ud83d", "\ude03"]

    // separator is empty space
    console.log(str.split(" ")) // ["Hello", "Dev", "Newbs!", "😃"]

    // separator is RegExp specifying (optional) empty space + capital letter
    console.log(str.split(/[\s]*[A-Z]/))  // ["", "ello", "ev", "ewbs! 😃"]
    
    // separator is empty string & limit is 5 first letters
    console.log(str.split("", 5)) // ["H", "e", "l", "l", "o"]
    
    
    //Examples:
// Example 1: Splitting by Space
let str = "Hello world this is JavaScript";
let words = str.split(" ");
console.log(words); 
// Output: ["Hello", "world", "this", "is", "JavaScript"]
// In this case, the string is split at each space character, and we get an array of words.


// Example 2: Splitting by a Comma
let str = "apple,banana,grape,orange";
let fruits = str.split(",");
console.log(fruits);
// Output: ["apple", "banana", "grape", "orange"]
// Here, the string is split at each comma, so the resulting array contains individual fruit names.


// Example 3: Limiting the Number of Splits
let str = "apple,banana,grape,orange";
let limitedFruits = str.split(",", 2);
console.log(limitedFruits);
// Output: ["apple", "banana"]
// The second argument (2) limits the number of splits. The array only contains the first two elements.

// Example 4: Using Regular Expressions
// You can use a regular expression as the separator to split a string in more complex ways.
let str = "apple1banana2grape3orange";
let fruits = str.split(/\d/);  // Splitting at any digit
console.log(fruits);
// Output: ["apple", "banana", "grape", "orange"]
Here, the regular expression /\d/ matches any digit, so the string is split wherever a number appears.


// Example 5: Splitting an Empty String
// If you split an empty string, you'll get an array containing an empty string.
let emptyString = "";
let result = emptyString.split(",");
console.log(result);
// Output: [""]



// Example 6: Splitting without a Separator
// If you call split() without any separator, it returns an array containing the entire string as its only element.
let str = "Hello";
let result = str.split();
console.log(result);
// Output: ["Hello"]`
        }
      ]
    },
    {
      id: 1,
      title: "substr()",
      note: [
        {
          text1: `Returns the characters in a string beginning at the specified location through the specified number of characters.
                    
                   <b>substring() Syntax</b>
The syntax of the substring() method is:
str.substring(indexStart, indexEnd)
Here, str is a string.

<b>substring() Parameters</b>
The substring() method takes in:

<b>indexStart</b> - The index of the first character to start including in the returned substring.
<b>indexEnd (optional)</b> - The index before which to stop extraction. (Exclusive) If omitted, it extracts till the end of the string.

<b>Notes:</b>
Any argument value < 0 is treated as 0.
Any argument value > str.length is treated as str.length.
Any NaN argument value is treated as 0.
If indexStart is greater than indexEnd, the two arguments are swapped, i.e. str.substring(a, b) will be str.substring(b, a).
substring() Return Value
Returns a new string containing the specified part of the given string.
Note: substring() does not change the original string.

                    The substring() method returns a specified part of the string between start and end indexes.
                    The <b>substr()</b> method in JavaScript is used to extract a portion of a string, starting from a specified index, and optionally, for a specified length. It’s important to note that substr() has been deprecated in favor of the slice() and substring() methods, but it still works in most browsers.

                    substr() Deprecated: This feature is no longer recommended.
                    `,
          code1: `let string = "Programiz JavaScript Tutorials";

// first character
substr1 = string.substring(0, 1);
console.log(substr1); // P

// if start > end, they are swapped
substr2 = string.substring(1, 0);
console.log(substr2); // P

// From 11th to last character
substr3 = string.substring(10);
console.log(substr3); // JavaScript Tutorials

// the extreme values are 0 and str.length

// same as string.substring(0)
substr4 = string.substring(-44, 90);
console.log(substr4); // Programiz JavaScript Tutorials

// indexEnd is exclusive
substr5 = string.substring(0, string.length - 1);
console.log(substr5); // Programiz JavaScript Tutorial`
        }
      ]
    },
    {
      id: 1,
      title: "substring()",
      note: [
        {
          text1: `Returns the characters in a string between two indexes into the string.`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "toLocaleLowerCase()",
      note: [
        {
          text1: `The characters within a string are converted to lower case while respecting the current locale.
                    
                    <b>Description</b>
The <b>toLocaleLowerCase()</b> method converts a string to lowercase letters, using current locale.
The locale is based on the language settings of the browser.
The <b>toLocaleLowerCase()</b> method does not change the original string.
The <b>toLocaleLowerCase()</b> returns the same result as toLowerCase(), except for locales that conflict with the regular Unicode case mappings (such as Turkish).

The toLocaleLowerCase() method in JavaScript is used to convert all characters of a string to lowercase, taking into account the rules of a specific locale (language or region). This method is useful when you need locale-sensitive string manipulation, especially for languages that have special case conversion rules.
`,
          code1: `string.toLocaleLowerCase([locales]);
                    
                    let str = "Hello World!";
let result = str.toLocaleLowerCase();
console.log(result);  // Output: "hello world!"


let str = "İstanbul";
let result = str.toLocaleLowerCase('tr-TR');
console.log(result);  // Output: "istanbul" (with the dotless 'i')
`
        }
      ]
    },
    {
      id: 1,
      title: "toLocaleUpperCase()",
      note: [
        {
          text1: `The characters within a string are converted to upper case while respecting the current locale.`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "toLowerCase()",
      note: [
        {
          text1: `Returns the calling string value converted to lower case.`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "toString()",
      note: [
        {
          text1: `Description
The toString() method returns a string as a string.
The toString() method does not change the original string.
The toString() method can be used to convert a string object into a string.

                    
                    <b>Returns a string representing the specified object</b>.
                    The toString() method in JavaScript returns the string format of an object. This section will help you understand what happened under the hood in the last section.
                    The toString() method in JavaScript is a built-in method that returns a string representation of an object. It is commonly used to convert values like numbers, arrays, and objects to strings.

This method is automatically called when a value is used in a string context (such as concatenation).`,
          code1: `let text = "Hello World!";
let result = text.toString();

//--------------
const num = 2324123
console.log(num.toString())

//-------------
                    
                    object.toString();
const student = {
  name: "John",
  school: "freeCodeCamp",
};
console.log(student.toString());
// [object Object]
`
        }
      ]
    },
    {
      id: 1,
      title: "toUpperCase()",
      note: [
        {
          text1: `Returns the calling string value converted to uppercase.`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "valueOf()",
      note: [
        {
          text1: `Returns the primitive value of the specified object.
                    The Object.valueOf() method returns the primitive value of the specified object.
                    
                    The valueOf() method returns the primitive value of an object.
If the object has no primitive value, valueOf() returns the object itself.
The valueOf() method does not change the original object.

<b>valueOf() Syntax</b>
The syntax of the <u>valueOf()</u> method is:
obj.valueOf()
Here, <u>obj</u> is an object whose primitive value we want to find.

<b>valueOf() Parameters</b>
The valueOf() method does not take any parameters.

<b>valueOf() Return Value</b>
The valueOf() method returns the primitive value of the specified object.

<b>Notes</b>:
For objects of type Object, there is no primitive value, so the valueOf() method simply returns the object itself.
For objects of type <u>Number, Boolean, or String</u>, however, valueOf() returns the primitive value represented by the corresponding object.
                    `,
          code1: `const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits.valueOf();
console.log(myArray) // ['Banana', 'Orange', 'Apple', 'Mango']
//fruits.valueOf() returns the same as fruits:
//valueOf() returns the object itself

//---------------

        // create a new Number object with value of 12
        let num = new Number(12);
        console.log(num);
        // Output: [Number: 12]
        console.log(num.valueOf());
        // Output: 12
`
        }
      ]
    },
    {
      id: 1,
      title: "regex.test()",
      note: [
        {
          text1: `The <b>regex.test()</b> method is used to test for a match in a string. The method returns <b>true</b> if it finds a match; otherwise, it returns <b>false</b>.`,
          code1: `//Syntax :  RegExpObject.test(string)
    `
        }
      ]
    },
    {
      id: 1,
      title: "toFixed()",
      note: [
        {
          text1: `<b>Number toFixed() Parameters</b>
                    The <u>toFixed()</u> method converts a number to a string.
The <u>toFixed()</u> method rounds the string to a specified number of decimals.

The <u>toFixed()</u> method takes in:
<u>digits</u> (Optional) - Value between <b>0</b> and <b>20</b> representing the number of digits to appear after the decimal point. By default, it is <b>0</b>.

<b>Return value from Number toFixed()</b>
Returns a <u>String</u> representing the given number using fixed-point notation.
<b>Note</b>: The <u>toFixed()</u> method throws a <u>RangeError</u> if <u>digits</u> is not in between <b>1</b> and <b>100</u>.
`,
          code1: `let num = 57.77583;

        console.log(num.toFixed()); // 58-> rounded off, no fractional part
        console.log(num.toFixed(1)); // 57.8
        console.log(num.toFixed(7)); // 57.7758300 -> Added zeros
        console.log(num.toFixed(2)); // 57.78

        console.log((5.68e20).toFixed(2)); // 568000000000000000000.00
        console.log((1.23e-10).toFixed(2)); // 0.00
        console.log((-2.34).toFixed(1)); // -2.3
                    
                    
                    `
        }
      ]
    },
    {
      id: 1,
      title: "Date Functions",
      note: [
        {
          text1: `<div class='table-res'>     <table>
        <thead>
            <tr>
                <th><strong>Function</strong></th>
                <th><strong>Description</strong></th>
                <th><strong>Example</strong></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>Date.now()</code></td>
                <td>Returns the current timestamp (milliseconds since Jan 1, 1970).</td>
                <td><code>Date.now()</code> ➔ <code>1617174305292</code></td>
            </tr>
            <tr>
                <td><code>new Date()</code></td>
                <td>Creates a new Date object with the current date and time.</td>
                <td><code>new Date()</code> ➔
                    <code>Wed Mar 31 2021 11:58:25 GMT+0000 (Coordinated Universal Time)</code></td>
            </tr>
            <tr>
                <td><code>Date.getFullYear()</code></td>
                <td>Returns the year (4 digits) of a Date object.</td>
                <td><code>new Date().getFullYear()</code> ➔ <code>2021</code></td>
            </tr>
            <tr>
                <td><code>Date.getMonth()</code></td>
                <td>Returns the month (0-11) of a Date object.</td>
                <td><code>new Date().getMonth()</code> ➔ <code>2</code> (March)</td>
            </tr>
            <tr>
                <td><code>Date.getDate()</code></td>
                <td>Returns the day of the month (1-31) of a Date object.</td>
                <td><code>new Date().getDate()</code> ➔ <code>31</code></td>
            </tr>
            <tr>
                <td><code>Date.getDay()</code></td>
                <td>Returns the day of the week (0-6) of a Date object.</td>
                <td><code>new Date().getDay()</code> ➔ <code>3</code> (Wednesday)</td>
            </tr>
            <tr>
                <td><code>Date.getHours()</code></td>
                <td>Returns the hour (0-23) of a Date object.</td>
                <td><code>new Date().getHours()</code> ➔ <code>12</code></td>
            </tr>
            <tr>
                <td><code>Date.getMinutes()</code></td>
                <td>Returns the minutes (0-59) of a Date object.</td>
                <td><code>new Date().getMinutes()</code> ➔ <code>25</code></td>
            </tr>
        </tbody>
    </table> </div>`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "JSON Functions",
      note: [
        {
          text1: `<div class='table-res'> </div>`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Event Handling Functions",
      note: [
        {
          text1: `<div class='table-res'> </div>`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "JavaScript Math Methods",
      note: [
        {
          text1: `<div class='table-res'> 
                    <table class="ws-table-all notranslate">
  <tbody><tr>
    <th style="width:20%">Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_abs.asp">abs(x)</a></td>
    <td>Returns the absolute value of x</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_acos.asp">acos(x)</a></td>
    <td>Returns the arccosine of x, in radians</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_acosh.asp">acosh(x)</a></td>
    <td>Returns the hyperbolic arccosine of x</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_asin.asp">asin(x)</a></td>
    <td>Returns the arcsine of x, in radians</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_asinh.asp">asinh(x)</a></td>
    <td>Returns the hyperbolic arcsine of x</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_atan.asp">atan(x)</a></td>
    <td>Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_atan2.asp">atan2(y, x)</a></td>
    <td>Returns the arctangent of the quotient of its arguments</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_atanh.asp">atanh(x)</a></td>
    <td>Returns the hyperbolic arctangent of x</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_cbrt.asp">cbrt(x)</a></td>
    <td>Returns the cubic root of x</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_ceil.asp">ceil(x)</a></td>
    <td>Returns x, rounded upwards to the nearest integer</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_cos.asp">cos(x)</a></td>
    <td>Returns the cosine of x (x is in radians)</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_cosh.asp">cosh(x)</a></td>
    <td>Returns the hyperbolic cosine of x</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_exp.asp">exp(x)</a></td>
    <td>Returns the value of E<sup>x</sup></td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_floor.asp">floor(x)</a></td>
    <td>Returns x, rounded downwards to the nearest integer</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_log.asp">log(x)</a></td>
    <td>Returns the natural logarithm (base E) of x</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_max.asp">max(x, y, z, ..., n)</a></td>
    <td>Returns the number with the highest value</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_min.asp">min(x, y, z, ..., n)</a></td>
    <td>Returns the number with the lowest value</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_pow.asp">pow(x, y)</a></td>
    <td>Returns the value of x to the power of y</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_random.asp">random()</a></td>
    <td>Returns a random number between 0 and 1</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_round.asp">round(x)</a></td>
    <td>Rounds x to the nearest integer</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_sign.asp">sign(x)</a></td>
    <td>Returns if x is negative, null or positive (-1, 0, 1)</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_sin.asp">sin(x)</a></td>
    <td>Returns the sine of x (x is in radians)</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_sinh.asp">sinh(x)</a></td>
    <td>Returns the hyperbolic sine of x</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_sqrt.asp">sqrt(x)</a></td>
    <td>Returns the square root of x</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_tan.asp">tan(x)</a></td>
    <td>Returns the tangent of an angle</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_tanh.asp">tanh(x)</a></td>
    <td>Returns the hyperbolic tangent of a number</td>
  </tr>
  <tr>
    <td><a href="/jsref/jsref_trunc.asp">trunc(x)</a></td>
    <td>Returns the integer part of a number (x)</td>
  </tr>
  </tbody></table>
                    </div>
                    
                    
                    
                    
                    
                    
                    
                    <div class='table-res'>
                        <table>
        <thead>
            <tr>
                <th><strong>Function</strong></th>
                <th><strong>Description</strong></th>
                <th><strong>Example</strong></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>Math.abs(x)</code></td>
                <td>Returns the absolute value of <code>x</code>.</td>
                <td><code>Math.abs(-5)</code> ➔ <code>5</code></td>
            </tr>
            <tr>
                <td><code>Math.ceil(x)</code></td>
                <td>Returns the smallest integer greater than or equal to <code>x</code> (rounds up).</td>
                <td><code>Math.ceil(4.2)</code> ➔ <code>5</code></td>
            </tr>
            <tr>
                <td><code>Math.floor(x)</code></td>
                <td>Returns the largest integer less than or equal to <code>x</code> (rounds down).</td>
                <td><code>Math.floor(4.7)</code> ➔ <code>4</code></td>
            </tr>
            <tr>
                <td><code>Math.round(x)</code></td>
                <td>Returns the value of <code>x</code> rounded to the nearest integer.</td>
                <td><code>Math.round(4.5)</code> ➔ <code>5</code></td>
            </tr>
            <tr>
                <td><code>Math.trunc(x)</code></td>
                <td>Returns the integer part of <code>x</code> by removing the decimal part.</td>
                <td><code>Math.trunc(4.9)</code> ➔ <code>4</code></td>
            </tr>
            <tr>
                <td><code>Math.sign(x)</code></td>
                <td>Returns 1 if <code>x</code> is positive, -1 if <code>x</code> is negative, or 0 if <code>x</code> is
                    0.</td>
                <td><code>Math.sign(-10)</code> ➔ <code>-1</code></td>
            </tr>
            <tr>
                <td><code>Math.pow(base, exponent)</code></td>
                <td>Returns <code>base</code> raised to the power of <code>exponent</code>.</td>
                <td><code>Math.pow(2, 3)</code> ➔ <code>8</code></td>
            </tr>
            <tr>
                <td><code>Math.sqrt(x)</code></td>
                <td>Returns the square root of <code>x</code>.</td>
                <td><code>Math.sqrt(16)</code> ➔ <code>4</code></td>
            </tr>
            <tr>
                <td><code>Math.cbrt(x)</code></td>
                <td>Returns the cube root of <code>x</code>.</td>
                <td><code>Math.cbrt(27)</code> ➔ <code>3</code></td>
            </tr>
            <tr>
                <td><code>Math.exp(x)</code></td>
                <td>Returns <code>e</code> raised to the power of <code>x</code> (Euler's number).</td>
                <td><code>Math.exp(1)</code> ➔ <code>2.718</code></td>
            </tr>
            <tr>
                <td><code>Math.log(x)</code></td>
                <td>Returns the natural logarithm (base <code>e</code>) of <code>x</code>.</td>
                <td><code>Math.log(10)</code> ➔ <code>2.302</code></td>
            </tr>
            <tr>
                <td><code>Math.log10(x)</code></td>
                <td>Returns the base-10 logarithm of <code>x</code>.</td>
                <td><code>Math.log10(100)</code> ➔ <code>2</code></td>
            </tr>
            <tr>
                <td><code>Math.log2(x)</code></td>
                <td>Returns the base-2 logarithm of <code>x</code>.</td>
                <td><code>Math.log2(8)</code> ➔ <code>3</code></td>
            </tr>
            <tr>
                <td><code>Math.random()</code></td>
                <td>Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).</td>
                <td><code>Math.random()</code> ➔ <code>0.642</code></td>
            </tr>
            <tr>
                <td><code>Math.PI</code></td>
                <td>Returns the value of Pi (π), approximately 3.14159.</td>
                <td><code>Math.PI</code> ➔ <code>3.14159</code></td>
            </tr>
            <tr>
                <td><code>Math.E</code></td>
                <td>Returns Euler's number (approximately 2.718).</td>
                <td><code>Math.E</code> ➔ <code>2.718</code></td>
            </tr>
            <tr>
                <td><code>Math.SQRT2</code></td>
                <td>Returns the square root of 2 (approximately 1.414).</td>
                <td><code>Math.SQRT2</code> ➔ <code>1.414</code></td>
            </tr>
            <tr>
                <td><code>Math.SQRT1_2</code></td>
                <td>Returns the square root of 1/2 (approximately 0.707).</td>
                <td><code>Math.SQRT1_2</code> ➔ <code>0.707</code></td>
            </tr>
            <tr>
                <td><code>Math.LN2</code></td>
                <td>Returns the natural logarithm of 2 (approximately 0.693).</td>
                <td><code>Math.LN2</code> ➔ <code>0.693</code></td>
            </tr>
            <tr>
                <td><code>Math.LN10</code></td>
                <td>Returns the natural logarithm of 10 (approximately 2.302).</td>
                <td><code>Math.LN10</code> ➔ <code>2.302</code></td>
            </tr>
            <tr>
                <td><code>Math.LOG2E</code></td>
                <td>Returns the base-2 logarithm of <code>e</code> (approximately 1.442).</td>
                <td><code>Math.LOG2E</code> ➔ <code>1.442</code></td>
            </tr>
            <tr>
                <td><code>Math.LOG10E</code></td>
                <td>Returns the base-10 logarithm of <code>e</code> (approximately 0.434).</td>
                <td><code>Math.LOG10E</code> ➔ <code>0.434</code></td>
            </tr>
            <tr>
                <td><code>Math.sin(x)</code></td>
                <td>Returns the sine of <code>x</code> (in radians).</td>
                <td><code>Math.sin(Math.PI / 2)</code> ➔ <code>1</code></td>
            </tr>
            <tr>
                <td><code>Math.cos(x)</code></td>
                <td>Returns the cosine of <code>x</code> (in radians).</td>
                <td><code>Math.cos(0)</code> ➔ <code>1</code></td>
            </tr>
            <tr>
                <td><code>Math.tan(x)</code></td>
                <td>Returns the tangent of <code>x</code> (in radians).</td>
                <td><code>Math.tan(Math.PI / 4)</code> ➔ <code>1</code></td>
            </tr>
            <tr>
                <td><code>Math.asin(x)</code></td>
                <td>Returns the arcsine (inverse sine) of <code>x</code> in radians.</td>
                <td><code>Math.asin(1)</code> ➔ <code>1.5708</code></td>
            </tr>
            <tr>
                <td><code>Math.acos(x)</code></td>
                <td>Returns the arccosine (inverse cosine) of <code>x</code> in radians.</td>
                <td><code>Math.acos(1)</code> ➔ <code>0</code></td>
            </tr>
            <tr>
                <td><code>Math.atan(x)</code></td>
                <td>Returns the arctangent (inverse tangent) of <code>x</code> in radians.</td>
                <td><code>Math.atan(1)</code> ➔ <code>0.7854</code></td>
            </tr>
            <tr>
                <td><code>Math.atan2(y, x)</code></td>
                <td>Returns the arctangent of <code>y/x</code> considering the signs of <code>y</code> and
                    <code>x</code>.</td>
                <td><code>Math.atan2(1, 1)</code> ➔ <code>0.7854</code></td>
            </tr>
            <tr>
                <td><code>Math.min(...values)</code></td>
                <td>Returns the smallest of the zero or more numbers provided.</td>
                <td><code>Math.min(1, 5, 3, -2)</code> ➔ <code>-2</code></td>
            </tr>
            <tr>
                <td><code>Math.max(...values)</code></td>
                <td>Returns the largest of the zero or more numbers provided.</td>
                <td><code>Math.max(1, 5, 3, -2)</code> ➔ <code>5</code></td>
            </tr>
            <tr>
                <td><code>Math.acosh(x)</code></td>
                <td>Returns the inverse hyperbolic cosine of <code>x</code>.</td>
                <td><code>Math.acosh(1)</code> ➔ <code>0</code></td>
            </tr>
            <tr>
                <td><code>Math.asinh(x)</code></td>
                <td>Returns the inverse hyperbolic sine of <code>x</code>.</td>
                <td><code>Math.asinh(1)</code> ➔ <code>0.88137</code></td>
            </tr>
            <tr>
                <td><code>Math.atanh(x)</code></td>
                <td>Returns the inverse hyperbolic tangent of <code>x</code>.</td>
                <td><code>Math.atanh(0.5)</code> ➔ <code>0.54931</code></td>
            </tr>
        </tbody>
    </table>
     </div>
     
     
     <b>regularly used Math Functions</b>
     <div class='table-res'> 
         <table>
        <thead>
            <tr>
                <th><strong>Function</strong></th>
                <th><strong>Description</strong></th>
                <th><strong>Example</strong></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>Math.abs(x)</code></td>
                <td>Returns the absolute value of <code>x</code>.</td>
                <td><code>Math.abs(-5)</code> ➔ <code>5</code></td>
            </tr>
            <tr>
                <td><code>Math.ceil(x)</code></td>
                <td>Returns the smallest integer greater than or equal to <code>x</code> (rounds up).</td>
                <td><code>Math.ceil(4.2)</code> ➔ <code>5</code></td>
            </tr>
            <tr>
                <td><code>Math.floor(x)</code></td>
                <td>Returns the largest integer less than or equal to <code>x</code> (rounds down).</td>
                <td><code>Math.floor(4.7)</code> ➔ <code>4</code></td>
            </tr>
            <tr>
                <td><code>Math.random()</code></td>
                <td>Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).</td>
                <td><code>Math.random()</code> ➔ <code>0.342</code></td>
            </tr>
            <tr>
                <td><code>Math.max(...numbers)</code></td>
                <td>Returns the largest number from a set of numbers.</td>
                <td><code>Math.max(1, 2, 3)</code> ➔ <code>3</code></td>
            </tr>
            <tr>
                <td><code>Math.min(...numbers)</code></td>
                <td>Returns the smallest number from a set of numbers.</td>
                <td><code>Math.min(1, 2, 3)</code> ➔ <code>1</code></td>
            </tr>
            <tr>
                <td><code>Math.pow(base, exponent)</code></td>
                <td>Returns <code>base</code> raised to the power of <code>exponent</code>.</td>
                <td><code>Math.pow(2, 3)</code> ➔ <code>8</code></td>
            </tr>
            <tr>
                <td><code>Math.sqrt(x)</code></td>
                <td>Returns the square root of <code>x</code>.</td>
                <td><code>Math.sqrt(16)</code> ➔ <code>4</code></td>
            </tr>
        </tbody>
    </table>
    </div>`,
          code1: ``
        }
      ]
    },



    {
      id: 1,
      title: "typeof",
      note: [
        {
          text1: `The typeof operator returns a string indicating the type of the operand`,
          code1: `typeof 50; //   "number"
typeof "text"; //   "string"
typeof true; //   "boolean"
typeof undefined; //   "undefined"
typeof function () {}; //   "function"
typeof 10n; //   "bigint"
typeof Symbol(); //   "symbol"
typeof [1, 2]; //   "object"
typeof {}; //   "object"
 
typeof NaN; //   "number"        (NaN is Not a Number)
typeof undeclaredVar; //   "undefined"     (undeclaredVariable is never declared)
typeof Infinity; //   "number"        (Infinity, -Infinity, -0 are all valid numbers in JavaScript)
typeof null; //   "object"        (This stands since the beginning of JavaScript)
typeof /regex/; //   "object"        (regular expressions start and end with '/' in literal form)`
        }
      ]
    },
    {
      id: 1,
      title: "JavaScript Event Loop",
      note: [
        {
          text1: ``,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      section:"Object. class provides several built-in methods",
      title: "Object. class provides several built-in methods",
      note: [
        {
          text1: `1. Object.keys()
Purpose: Returns an array of a given object's own enumerable property names.
Syntax: Object.keys(obj)

Example:
const obj = { name: "Alice", age: 25 };
console.log(Object.keys(obj)); // ['name', 'age']
2. Object.values()
Purpose: Returns an array of a given object's own enumerable property values.
Syntax: Object.values(obj)

Example:
const obj = { name: "Alice", age: 25 };
console.log(Object.values(obj)); // ['Alice', 25]
3. Object.entries()
Purpose: Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
Syntax: Object.entries(obj)

Example:
const obj = { name: "Alice", age: 25 };
console.log(Object.entries(obj)); // [['name', 'Alice'], ['age', 25]]
4. Object.assign()
Purpose: Copies all enumerable own properties from one or more source objects to a target object.
Syntax: Object.assign(target, ...sources)

Example:
const obj1 = { name: "Alice" };
const obj2 = { age: 25 };
const newObj = Object.assign({}, obj1, obj2);
console.log(newObj); // { name: "Alice", age: 25 }
5. Object.freeze()
Purpose: Freezes an object, preventing the addition of new properties, deletion of existing properties, or the modification of existing properties.
Syntax: Object.freeze(obj)

Example:
const obj = { name: "Alice" };
Object.freeze(obj);
obj.name = "Bob"; // Will not work because the object is frozen
console.log(obj); // { name: "Alice" }
6. Object.seal()
Purpose: Seals an object, preventing the addition of new properties, but allows modification of existing properties.
Syntax: Object.seal(obj)

Example:
const obj = { name: "Alice" };
Object.seal(obj);
obj.name = "Bob"; // Works fine
obj.age = 25; // Cannot add new properties
console.log(obj); // { name: "Bob" }
7. Object.getOwnPropertyNames()
Purpose: Returns an array of all own property names (including non-enumerable properties) of an object.
Syntax: Object.getOwnPropertyNames(obj)

Example:
const obj = { name: "Alice" };
Object.defineProperty(obj, 'hidden', { value: 'secret', enumerable: false });
console.log(Object.getOwnPropertyNames(obj)); // ['name', 'hidden']
8. Object.getOwnPropertyDescriptor()
Purpose: Returns a property descriptor for a given property of an object.
Syntax: Object.getOwnPropertyDescriptor(obj, prop)

Example:
const obj = { name: "Alice" };
const descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(descriptor); 
// { value: 'Alice', writable: true, enumerable: true, configurable: true }
9. Object.getPrototypeOf()
Purpose: Returns the prototype (i.e., the internal [[Prototype]] property) of an object.
Syntax: Object.getPrototypeOf(obj)

Example:
const obj = { name: "Alice" };
console.log(Object.getPrototypeOf(obj)); // The prototype of the object
10. Object.setPrototypeOf()
Purpose: Sets the prototype (i.e., the internal [[Prototype]] property) of an object.
Syntax: Object.setPrototypeOf(obj, prototype)

Example:
const obj = { name: "Alice" };
const prototypeObj = { greet: () => "Hello!" };
Object.setPrototypeOf(obj, prototypeObj);
console.log(obj.greet()); // "Hello!"
11. Object.is()
Purpose: Determines whether two values are the same value.
Syntax: Object.is(value1, value2)

Example:
console.log(Object.is(25, 25)); // true
console.log(Object.is(25, '25')); // false
console.log(Object.is(NaN, NaN)); // true
12. Object.create()
Purpose: Creates a new object with the specified prototype object and optional properties.
Syntax: Object.create(proto, propertiesObject)

Example:
const person = { name: "Alice" };
const newPerson = Object.create(person);
console.log(newPerson.name); // Alice
13. Object.prototype.hasOwnProperty()
Purpose: Checks if the object has a property as its own (not inherited).
Syntax: obj.hasOwnProperty(prop)

Example:
const obj = { name: "Alice" };
console.log(obj.hasOwnProperty('name')); // true
console.log(obj.hasOwnProperty('age')); // false
14. Object.prototype.toString()
Purpose: Returns a string representation of the object.
Syntax: obj.toString()

Example:
const obj = { name: "Alice" };
console.log(obj.toString()); // "[object Object]"
15. Object.prototype.valueOf()
Purpose: Returns the primitive value of the specified object.
Syntax: obj.valueOf()

Example:
const obj = { name: "Alice" };
console.log(obj.valueOf()); // { name: "Alice" }`,
          code1: ``
        }
      ]
    },
  ]
}
