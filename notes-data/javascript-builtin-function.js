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
            title: "concat()",
            note: [
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
                    code1: `string.match(regexp)


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
    
`,
                    code1: `// Syntax
string.replace(searchValue, newValue);

    "searchValue": The substring or regular expression pattern to search for within the string.
        If it's a string, it will only replace the "first occurrence".
        If it's a regular expression (with the global flag g), it will replace all matches.
    "newValue": The substring to replace the matched value with. It can also be a function that returns the replacement string based on the match.
    
    
    //------------------
    // Example 2: Using replace() with a Regular Expression
// If you use a regular expression, you can match patterns and even use flags like g (global) to replace all occurrences.
// Without the global flag:
let str = "Hello, world! Welcome to the world!";
let result = str.replace(/world/, "JavaScript");
console.log(result); // Outputs: "Hello, JavaScript! Welcome to the world!"

// Only the first occurrence of "world" is replaced because the regular expression does not have the g (global) flag.

//------------------------


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

//----------------
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

//-------------
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

//---------------
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

//--------
let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3, 3));  // Output: false (starts searching from index 3)
console.log(arr.includes(4, 3));  // Output: true (starts searching from index 3)

//---------
// Checking for Substring in a String with a Start Position
let str = "The quick brown fox";
console.log(str.includes("quick", 5));  // Output: false (search starts after "The ")
console.log(str.includes("brown", 5));  // Output: true (search starts after "The ")

 "-3".
`
                }
            ]
        },
        {
            id: 1,
            title: "search()",
            note: [
                {
                    text1: `Executes the search for a match between a regular expression and a specified string.`,
                    code1: ``
                }
            ]
        },
          {
            id: 1,
            title: "concat() - merge two arrays into an array",
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
                    text1: `Returns a string representing the specified object.
                    
                    The toString() method in JavaScript returns the string format of an object. This section will help you understand what happened under the hood in the last section.
                    
                    The toString() method in JavaScript is a built-in method that returns a string representation of an object. It is commonly used to convert values like numbers, arrays, and objects to strings.

This method is automatically called when a value is used in a string context (such as concatenation).`,
                    code1: `object.toString();


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
                    text1: `Returns the primitive value of the specified object.`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            section: `Array Methods`,
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
            title: "filter()",
            note: [
                {
                    text1: `Creates a new array with all of the elements of this array for which the provided filtering function returns true.`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "forEach()",
            note: [
                {
                    text1: `Calls a function for each element in the array.`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "join()",
            note: [
                {
                    text1: `Joins all elements of an array into a string.`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "map()",
            note: [
                {
                    text1: `Creates a new array with the results of calling a provided function on every element in this array.`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "pop()",
            note: [
                {
                    text1: `Removes the last element from an array and returns that element.`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "push()",
            note: [
                {
                    text1: `Adds one or more elements to the end of an array and returns the new length of the array.`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "reduce()",
            note: [
                {
                    text1: `Apply a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.`,
                    code1: ``
                }
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
            title: "reverse()",
            note: [
                {
                    text1: `Reverses the order of the elements of an array -- the first becomes the last, and the last becomes the first.`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "shift()",
            note: [
                {
                    text1: `Removes the first element from an array and returns that element.`,
                    code1: ``
                }
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
            title: "some()",
            note: [
                {
                    text1: `Returns true if at least one element in this array satisfies the provided testing function.
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

// Output: true `
                }
            ]
        },
        {
            id: 1,
            title: "every()",
            note: [
                {
                    text1: `Returns true if every element in this array satisfies the provided testing function.`,
                    code1: ``
                }
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
            title: "sort()",
            note: [
                {
                    text1: `Sorts the elements of an array.`,
                    code1: ``
                }
            ]
        },
        {
            id: 1,
            title: "unshift()",
            note: [
                {
                    text1: `Adds one or more elements to the front of an array and returns the new length of the array.`,
                    code1: ``
                }
            ]
        },
    ]
}
