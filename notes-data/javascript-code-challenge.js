const isHighlighted = 'javascript-code-challenge'
const Links1 = 'javascript-notes'
const Links2 = 'javascript-code-challenge'
const Links3 = 'javascript-builtin-function'
const Links4 = 'javascript-projects'

const jScodeChallengeData = {
  jScodeChallengeNote: [
    {
      id: 1,
      title: "links",
      note: [
        {
          text1: `<a href="https://www.codinn.dev/tricky-javascript/es6789-code-snippets-interview-questions" target="_blank">code-snippets-interview-questions</a>
          
          <a href="https://www.interviewbit.com/javascript-interview-questions/#recursion-in-a-programming-language" target="_blank">javascript-interview-questionsx</a>
          <a href="https://leetcode.com/studyplan/30-days-of-javascript/" target="_blank">30-days-of-javascript</a>
          `,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "remove array duplicates",
      note: [
        {
          text1: `<b>Explanation</b>:
    => <u>reduce</u> <b>function</b>: The <u>reduce()</u> method is used to iterate through each item of the array and accumulate the results in a single value (in this case, an array).
    => <b>Accumulator</b> (<u>accumulator</u>): This holds the array that will contain only unique values. Initially, it's set to an empty array <u>[]</u>.
    => <b>Checking for duplicates</b>: Before adding the current value (<u>currentValue</u>) to the accumulator, we check if it already exists in the accumulator using <u>includes()</u>.
    => <b>Adding the value</b>: If the value isn't already in the accumulator, it gets pushed into the accumulator.
    `,
          code1: `const arrayWithDuplicates = [1, 2, 3, 2, 1, 4, 5, 4];

// Remove duplicates using reduce
const uniqueArray = arrayWithDuplicates.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []); // Initialize the accumulator as an empty array

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

//--------------- or -----------
        const nums = [3, 2, 8, 12, 11, 10, 3, 2]
        function removeDup(nums){
            let newAr = []
            for(let i=0; i < nums.length; i++){
                if(nums.indexOf(nums[i]) === i){
                    newAr.push(nums[i])
                }
            }
            return newAr
        }
        console.log(removeDup(nums));
`
        },
        {
          text1: `<b>Set</b>: A Set is a collection of values where each value must be unique. So, when you pass an array to a Set, it automatically removes duplicates.
<b>Spread Syntax</b> (...): We use the spread syntax (...) to convert the Set back into an array.`,
          code1: `const arrayWithDuplicates = [1, 2, 3, 2, 1, 4, 5, 4];

// Remove duplicates using map and Set
const uniqueArray = [...new Set(arrayWithDuplicates)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]`
        },
        {
          text1: `=> <b>map()</b>: We iterate over each element of the array. For each element (<u>item</u>), we check if it's the <u>first occurrence by comparing its <i>indexOf</i></u> with the current index. If it's the first occurrence, we return the item; otherwise, we return <u>null</u>.
=> <b>filter()</b>: After using <u>map()</u>, we call <u>filter()</u> to remove all <u>null</u> values, which represent the duplicates. The resulting array will contain only the unique elements.
`,
          code1: `const arrayWithDuplicates = [1, 2, 3, 2, 1, 4, 5, 4];

// Remove duplicates using map
const uniqueArray = arrayWithDuplicates.map((item, index, self) => {
  // Check if the current item is the first occurrence
  if (self.indexOf(item) === index) {
    return item;  // Keep the item if it's the first occurrence
  }
  return null;  // Otherwise, return null (duplicates will be null)
}).filter(item => item !== null);  // Remove the null values

console.log(uniqueArray);  // Output: [1, 2, 3, 4, 5]
`
        },
        {
          text1: `<b>Example with Objects</b>:
If you're dealing with an array of objects and want to remove duplicates based on a specific property (like <b>id</b>), you can do something similar.

<b>Explanation for Objects:</b>
    => <u>findIndex()</u>: Instead of using <u>indexOf()</u>, we use <u>findIndex()</u> to search for the first occurrence of the object based on a property (e.g., <u>id</u>).
    => This ensures that the duplicates are removed while keeping the first occurrence.
`,
          code1: `const arrayWithDuplicates = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'John' },
  { id: 3, name: 'Joe' }
];

// Remove duplicates based on 'id' using map
const uniqueArray = arrayWithDuplicates.map((item, index, self) => {
  // Check if this object is the first occurrence based on 'id'
  if (self.findIndex(i => i.id === item.id) === index) {
    return item;  // Keep the item if it's the first occurrence
  }
  return null;  // Otherwise, return null (duplicates will be null)
}).filter(item => item !== null);  // Remove the null values

console.log(uniqueArray);
// Output: [ { id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Joe' }]
`
        },
        {
          text1: ``,
          code1: `const arrayWithDuplicates = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'John' },
  { id: 3, name: 'Joe' },
];

const uniqueArray = arrayWithDuplicates.reduce((accumulator, currentValue) => {
  // Check if the current object with the same \`id\` is already in the accumulator
  if (!accumulator.some(item => item.id === currentValue.id)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(uniqueArray); 
// Output: [ { id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Joe' } ]
`
        },
        {
          text1: ``,
          code1: `const userList = [
            {
                id: 2,
                title: "Mens Casual Premium Slim Fit T-Shirts ",
                price: 22.3,
                category: "men's clothing",
            },
            {
                id: 3,
                title: "Mens Cotton Jacket",
                price: 55.99,
                category: "men's clothing",
            },
            {
                
                id: 4,
                title: "Mens Casual Slim Fit",
                price: 15.99,
                category: "men's clothing",
            },
            {
                id: 7,
                title: "White Gold Plated Princess",
                price: 9.99,
                category: "jewelery",
            },
            {
                id: 8,
                title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
                price: 10.99,
                category: "jewelery",
            },
            {
                id: 13,
                title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
                price: 599,
                category: "electronics",
            },
            {
                id: 14,
                title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
                price: 999.99,
                category: "electronics",
            },
            {
                id: 17,
                title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
                price: 39.99,
                category: "women's clothing",
            },
            {
                id: 19,
                title: "Opna Women's Short Sleeve Moisture",
                price: 7.95,
                category: "women's clothing",

            },
            {
                id: 20,
                title: "DANVOUY Womens T Shirt Casual Cotton Short",
                price: 12.99,
                category: "women's clothing",

            }
        ]

        const cats = userList.reduce((acc, curnt) => {
            if (!acc.includes(curnt.category)) {
                acc.push(curnt.category)
            }
            return acc
        }, [])
        console.log(cats)`
        },
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
      title: "Write a function to replace smiley faces ':)' with sad faces ':('.",
      note: [
        {
          text1: `<b>Instructions</b>
                    Convert all occurrences of <code>":)"</code> to <code>":("</code> in the given string and return the new string. 
                    
                    Reason:</strong> Replacing <code>:)</code> with <code>:(</code> in <code>":) :) :) All smiles here :)"</code> results <code>":( :( :( All smiles here :("</code>.`,
          code1: `input = ":) :) :) All smiles here :)"
function replaceSmiley(input) {
    return input.replace(/:\)/g, ":(" );
}
console.log(replaceSmiley(input))
// Output : :( :( :( All smiles here :(
`
        }
      ]
    },
    {
      id: 1,
      section: `Hard`,
      title: "Write a function to check if a number is a Disarium number.",
      note: [
        {
          text1: `A <b>disarium</b> number is a number in which the sum of the digits to the power of their respective position is equal to the number itself.`,
          code1: `        function checkDisariumFor(num) {
            const newD = num.toString().split('')
            let arrSum = 0
            for (i = 1; i <= newD.length; i++) {
                arrSum += Math.pow(newD[i - 1], i);
            }
            return arrSum
        }
        console.log(checkDisariumFor(135)) 
        function checkDisariumReduce(num) {
            const splArr = num.toString().split('')
            const disarium = splArr.reduce((acc, curr, i) => {
                acc += Math.pow(curr, i + 1)
                return acc
            }, 0)
            return disarium
        }
        console.log(checkDisariumReduce(135))`
        }
      ]
    },
    {
      id: 1,
      title: "Write a function to move all zeros in an array to the end.",
      note: [
        {
          text1: `<b>Instructions</b>
        Move all zeros to the end of the array while maintaining the relative order of the
            non-zero elements.
        For example, consider the array <code>[0, 1, 0, 3, 12]</code>.
        After moving all zeros to the end while keeping the relative order of the non-zero
            elements, the result would be <code>[1, 3, 12, 0, 0]</code>.
        Here, the non-zero elements <b>(1, 3, 12)</b> maintain their order, and
            the zeros are shifted to the end of the array.
        Return the array containing all zeros at the end.

        <b>Example</b>
            For this input <code> arr[] = [10, 0, 5, 20, 0, 12, 0]</code></pre>
            the result should be:<code>[10, 5, 20, 12, 0, 0, 0]</code></pre>
        <b>Reason:</b> The zeroes at index <b>1</b>, <b>4</b>, and <b>6</b> are moved to the end, resulting <code>[10, 5, 20, 12, 0, 0, 0]</code>.

        <b>Example</b>
            For this input<code>arr[] = [0, 1, 0, 3, 12]</code></pre>
            the result should be:<code>[1, 3, 12, 0, 0]</code></pre>
        <b>Reason:</b> The zeroes at index <b>0</b> and <b>2</b> are moved to the end, resulting <code>[1, 3, 12, 0, 0]</code>.`,
          code1: `function moveZerosToEnd(arr) {
  let nonZeroIndex = 0;  // This will track the index where the next non-zero element should go

  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      // If the current element is non-zero, place it at the next available position
      arr[nonZeroIndex] = arr[i];
      if (nonZeroIndex !== i) {
        arr[i] = 0;  // Set the current position to zero if it was changed
      }
      nonZeroIndex++;  // Move the index forward
    }
  }
  return arr;
}

// Example usage:
let arr = [10, 0, 5, 20, 0, 12, 0];
console.log(moveZerosToEnd(arr));  // Output: [10, 5, 20, 12, 0, 0, 0]


//------------- reduce -----------
        const arr2 = [10, 0, 5, 20, 0, 12, 0]
        function moveZerosToEnd(arrPara) {
            let nonZeroIndex = 0;
            arrPara.reduce((acc, curr, i) => {
                if (arrPara[i] !== 0) {
                    arrPara[nonZeroIndex] = arrPara[i]
                    if(nonZeroIndex !== i){
                        arrPara[i] = 0
                    }
                    nonZeroIndex++;
                }
            }, [])

            return arrPara
        }
        console.log(moveZerosToEnd(arr2))
`
        }
      ]
    },
    {
      id: 1,
      title: "Write a function to solve the coin change problem.",
      note: [
        {
          text1: `<b>Instructions</b>
    Given a set of coins and a target money, compute the fewest number of coins needed
    to make up that amount.
    For example, consider you have coins worth <code>[3, 2, 1]</code> and the target
    amount is <b>6</b>.
    Here, the fewest number of coins needed to make up the amount <b>6</b>
    would be two: one <b>3</b>-coin and one <b>3</b>-coin, totaling two
    <b>3</b>-coin pieces.
    Return the minimum number of coins needed to make up the given amount. If it's not
    possible, return <b>-1</b>.
    For example, if the available coins were <code>[5, 7]</code> and the target amount
    was <b>1</b>, you would not be able to make that amount with the given coins.
    So the expected output here would be <b>-1</b>.

    <b>Example</b>
    For this input<code>coins = [1, 2, 5] amount = 11</code>
    <code>3</code>
    <b>Reason:</b> We can use two <b>5</b>s with one
    <b>1</b> to make up <b>11</b>.

    <b>Example</b>
    For this input<code>coins = [1, 6, 10] amount = 12</code>
    <code>2</code>
    <b>Reason:</b> The minimum number of coins needed to make <b>12</b> is <b>2</b> (using coins <b>6 + 6</b>).`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Write a function to sort a string according to the ginortS order.",
      note: [
        {
          text1: `        <b>Instructions</b>
        In ginortS sort, sort all characters in following order:
            => Lowercase letters are sorted first. 
            => Followed by uppercase letters. 
            => Then, odd digits. 
            => Finally, even digits.
        
        Concatenate the sorted categories in the order: lowercase letters, uppercase
            letters, odd digits, even digits.
        For example, consider the string <code>"HelloWorld1234"</code>. Let's apply ginortS
            sort,
        
            => Lowercase letters: Sorted as <code>"dellloor"</code>
            => Uppercase letters: Sorted as <code>"HW"</code>
            => Odd digits: Sorted as <code>"13"</code>
            => Even digits: Sorted as <code>"24"</code>
        
        Hence, our output would be <code>"dellloorHW1324"</code>.
        Return a new string by sorting it according to the ginortS
            order.
        <b>Example</b>
            input = "Sorting4321"</code></pre>
            the result should be:"ginortS1324"</code></pre>
        
        <b>Reason:</b> After sorting the input string <code>"Sorting4321"</code>
            according to the specified order, we get <code>"ginortS1324"</code>.`,
          code1: `        let words = 'gAc1b@2zZ9!yX5'
        function sortAll(strs) {
            let smallsCharArr = [];
            let BigCharArr = [];
            let numbersArr = [];
            let specialArr = [];

            for (let char of strs) {
                if (/[a-z]/.test(char)) {
                    smallsCharArr.push(char)
                } else if (/[A-Z]/.test(char)) {
                    BigCharArr.push(char)
                } else if (/\d/.test(char)) {
                    numbersArr.push(char)
                } else {
                    specialArr.push(char)
                }
            }

            return [...numbersArr.sort((a,b)=> a - b), ...smallsCharArr.sort(), ...BigCharArr.sort(), ...specialArr.sort()].join('')
        }
        console.log(sortAll(words))
        //Output : 1259bcgyzAXZ!@
        `
        }
      ]
    },
    {
      id: 1,
      title: "Write a function to find the maximum number of words from a given text that can be typed with a broken keyboard.",
      note: [
        {
          text1: `        <b>Instructions</b>
        A broken keyboard means that one of its keys does not work. 
        For example, consider the string
            <code>"JavaScript challenges are good for practicing coding"</code> and assume the broken character is
            <code>'p'</code>.
        Since the letter <code>'p'</code> does not work, the word <code>"JavaScript"</code>
            cannot be typed.
        Hence, only <code>"challenges are good for practicing coding"</code> can be typed
            with <code>'p'</code> as a broken letter. And, the total number of words in it is <b>6</b>.
        Given a string and a character representing the key that is broken. 
        Return the maximum number of words that can be typed
            without the character.
        <b>Example</b>
        
            For this input<code>str = "hello world"
        brokenLetter = 'd'</code>
        the result should be:<code>1</code>
        
        <b>Reason:</b> The only word without <code>'d'</code> in
            <code>"hello world"</code> is <code>"hello"</code>. So, only <b>1</b> word can be typed.
        <b>Example</b>
        
            For this input<code>str = "Coding in JavaScript"
        brokenLetter = 'c'</code>
        the result should be:<code>1</code>
        
        <b>Reason:</b> In the input string, <code>"Coding"</code> and
            <code>"JavaScript"</code> contain <code>'c'</code> (in uppercase and lowercase). Therefore, only one word
            i.e, <code>"in"</code> can be typed.`,
          code1: `        function maxWordsCanType(str, brokenLetter) {
            let indStrs = brokenLetter.split(' ')
            let finalWords = [];
            for(let words of indStrs){
                if(!words.includes(str)){
                    finalWords.push(words)
                    // console.log(words)
                }
            }
            return finalWords.join(' ')
        }
        console.log(maxWordsCanType("p", "JavaScript challenges are good for practicing coding"))
        //Output : challenges are good for coding
        // `
        }
      ]
    },
    {
      id: 1,
      title: "Write a function to check if a number is pronic.",
      note: [
        {
          text1: ` For example, <strong>42</strong> is a pronic number because it is obtained by
            multiplying two consecutive integers <strong>6</strong> and <strong>7</strong> i.e, <code>6 * 7 = 42</code>.
            
            Return <code>"Pronic"</code> if the given integer is a
            pronic number. Otherwise, return <code>"Not Pronic"</code>

                    <b>Example</b>
        For this input<code>num = 12</code>
        the result should be:<code>"Pronic"</code>
       Reason:</strong> <strong>12</strong> can be expressed as <strong>3 *
                4</strong>, where <strong>3</strong> and <strong>4</strong> are consecutive numbers. So, it's a pronic  number.`,
          code1: `function checkPronic(pronicNum) {
            for (let n = 0; n <= pronicNum; n++) {
                // console.log(n * (n + 1) === pronicNum)
                if (n * (n + 1) === pronicNum) {
                    return \`\${pronicNum} Expressed as \${n} \${(n + 1)}\`
                    break;
                }
            }
            return \`Not Pronic\`
        }
        console.log(checkPronic(12)) // 12 Expressed as 3 4
        console.log(checkPronic(42)) // 42 Expressed as 6 7
        console.log(checkPronic(144)) // Not Pronic
        `
        }
      ]
    },
    {
      id: 1,
      title: "Guess the output of this code? f function scope in if condition",
      note: [
        {
          text1: `1) <u>let x = 1</u>;
 <b>x</b> is initialized to <b>1</b>.

2)<b>if (function f() {})</b>
*  Inside the <b>if</b> condition, you're declaring a function <b>f</b>.
* <b>This function declaration is hoisted</b> to the top of the <b>if</b> block.
* But here's the important part: <b>inside the "if" block</b>, it behaves like a regular function declaration. Outside the block, it's not accessible.

<b>3) x += typeof f</b>;
 Now, <b>typeof f</b> is evaluated.
Because <b>"f" is only hoisted within the "if" block</b>, outside of that block, <b>it is not accessible</b>.
When you use <b>typeof f</b> outside the block (even though <b>f</b> is declared inside the block), <b>JavaScript cannot find</b> "f" in the current scope. Therefore, <b>typeof f</b> results in <b>"undefined"</b>.

<b>4) Final Calculation of x</b>:
* <b>x += "undefined"</b> because <b>typeof f</b> returns <b>"undefined"</b>.
* This results in <b>x</b> becoming the string <b>"1undefined"</b>.
`,
          code1: `let x = 1;

if (function f() {}) {
  x += typeof f;
}

console.log(x);
`
        }
      ]
    },
    {
      id: 1,
      title: "JavaScript Event Loop",
      note: [
        {
          text1: `<b>== (Loose Equality)</b>: Converts values to the same data type before comparing (type coercion).
<b>=== (Strict Equality)</b>: Compares both value and data type, without converting types.`,
          code1: ``
        }
      ]
    },
    {
      id: 1,
      title: "Write a function in JavaScript that converts a given string to title case",
      note: [
        {
          text1: `Extracting words from a string: Using /\b\w+/g to split text into individual words.
          
          `,
          code1: `//--------------
                  function toTitleCase(str) {
            return str.replace(/\b\w+/g, function (word) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            });
        }
        // Example usage:
        console.log(toTitleCase("the quick brown fox")); // Output: 'The Quick Brown Fox'

        //---------------------
              const str = "This is a test string with vowels";
        function convertTitle(s) {
            let arSt = s.split(' ')
            let newAr = []
            for (let i = 0; i < arSt.length; i++) {
                newAr.push(arSt[i].charAt(0).toUpperCase()+arSt[i].slice(1).toLowerCase())
            }
            return newAr.join(' ')
        }
        console.log(convertTitle(str))`
        }
      ]
    },
    {
      id: 1,
      title: "Write a function in JavaScript that generates a random hexadecimal color code.",
      note: [
        {
          text1: ``,
          code1: `        function getRandomColor() {
            const hexChars = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += hexChars[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        
        
        //---------------------
            &lt;div id=&quot;ch&quot;&gt;
        Color
    &lt;/div&gt;

        setInterval(() => document.getElementById('ch').style.setProperty('background',getRandomColor()), 1000)
        `
        }
      ]
    },
    {
      id: 1,
      title: "he function should print 'array' for '[]' and 'null' for 'null' types.",
      note: [
        {
          text1: ``,
          code1: `const getType = (val) => (val === null ? null : val?.constructor.name);
          console.log(getType(42));
console.log(getType("Hello"));
console.log(getType(true));
console.log(getType([1, 2, 3]));
console.log(getType({ name: "John", age: 25 }));
console.log(getType(null));
console.log(getType(undefined));
console.log(getType(function () {}));

//The function should print "array" for "[]" and "null" for "null" types.
`
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
      section: `Intermediate`,
      title: "Write a function to find the first and last index of a given number in an array.",
      note: [
        {
          text1: `    <div class="slate-render slate-render--community-challenge">
        <h3 class=" mt-8x">Instructions</h3>
        <p class=" text-white-shade">Suppose the given array is <code>[5, 13, 14, 13, 14, 15]</code> and we have to find
            the first and last index of number <strong>13</strong>. Then,</p>
        <div style="display: none;"><svg aria-labelledby="dfivmeh-aria" role="img" width="100%" height="150">
                <title id="dfivmeh-aria">Loading...</title>
                <rect role="presentation" x="0" y="0" width="100%" height="100%" clip-path="url(#dfivmeh-diff)"
                    style="fill: url(&quot;#dfivmeh-animated-diff&quot;);"></rect>
                <defs>
                    <clipPath id="dfivmeh-diff">
                        <rect x="0" y="10" rx="5" ry="5" width="100%" height="150"></rect>
                    </clipPath>
                    <linearGradient id="dfivmeh-animated-diff" gradientTransform="translate(-2 0)">
                        <stop offset="0%" stop-color="#f5f6f7" stop-opacity="1"></stop>
                        <stop offset="50%" stop-color="#eee" stop-opacity="1"></stop>
                        <stop offset="100%" stop-color="#f5f6f7" stop-opacity="1"></stop>
                        <animateTransform attributeName="gradientTransform" type="translate" values="-2 0; 0 0; 2 0"
                            dur="1.2s" repeatCount="indefinite"></animateTransform>
                    </linearGradient>
                </defs>
            </svg></div>
        <figure class="content-image-wrapper d-block"><img
                src="https://cdn.programiz.pro/course-images/community-challenges/cc-js-first-and-last-index.png" style="width:100%;">
        </figure>
        <p class=" text-white-shade">Here, our output would be <code>[1, 3]</code>.</p>
        <p class="border-bottom--challenge text-white-shade">Return the first and last index of <code>num</code> in the
            array <code>arr</code> as an array.</p>
        <h3 class=" mt-8x">Example</h3>
        <div class="pre-wrapper challenge-snip ">
            <pre class="nonexecutable-code"><p class="challenge-snip__p">For this input</p><code class="no-highlight">arr[] = [10, 20, 30, 20, 25, 20, 33]
        num = 20</code></pre>
        </div>
        <div class="pre-wrapper challenge-snip  pt-3x pb-2x">
            <pre
                class="nonexecutable-code"><p class="challenge-snip__p">the result should be:</p><code class="no-highlight">[1, 5]</code></pre>
        </div>
        <p class=" text-white-shade"><strong>Reason:</strong> The first and last index of <strong>20</strong> in
            <code>[10, 20, 30, 20, 25, 20, 33]</code> is <strong>1</strong> and <strong>5</strong>, respectively.</p>
        <h3 class=" mt-8x">Example</h3>
        <div class="pre-wrapper challenge-snip ">
            <pre class="nonexecutable-code"><p class="challenge-snip__p">For this input</p><code class="no-highlight">arr[] = [10, 20, 30, 20, 25, 20, 33]
        num = 30</code></pre>
        </div>
        <div class="pre-wrapper challenge-snip  pt-3x pb-2x">
            <pre
                class="nonexecutable-code"><p class="challenge-snip__p">the result should be:</p><code class="no-highlight">[2, 2]</code></pre>
        </div>
        <p class=" text-white-shade"><strong>Reason:</strong> There's only one occurrence of <strong>30</strong> in
            <code>[10, 20, 30, 20, 25, 20, 33]</code>. So, the first and last index of 30 is <strong>2</strong> and
            <strong>2</strong>, respectively.</p>`,
          code1: `        function findFirstAndLastIndex(arr, num) {
    const firstIndex = arr.indexOf(num);
    const lastIndex = arr.lastIndexOf(num);
    return [firstIndex, lastIndex];
}

// Example usage:
const array = [5, 13, 14, 13, 14, 15];
const result = findFirstAndLastIndex(array, 13);
console.log(result);  // Output: [1, 3]
`
        }
      ]
    },
    {
      id: 1,
      title: "Write a function to find the largest number that can be formed by swapping two digits of a given number.",
      note: [
        {
          text1: `    <div class="slate-render slate-render--community-challenge">
        <h4 class=" mt-8x">Instructions</h4>
        <p class=" text-white-shade">Suppose, the given number is <strong>39452</strong>. If we swap two digits
            <strong>3</strong> and <strong>9</strong>, we get <strong>93452</strong>, which is the largest number you
            can form by swapping any two digits in <strong>39452</strong>.</p>
        <p class="border-bottom--challenge text-white-shade">Return the largest possible number by swapping two digits
            in the given int <code>num</code>.</p>
        <h4 class=" mt-8x">Example</h4>
        <div class="pre-wrapper challenge-snip ">
            <pre
                class="nonexecutable-code"><p class="challenge-snip__p">For this input</p><code class="no-highlight">num = 2736</code></pre>
        </div>
        <div class="pre-wrapper challenge-snip  pt-3x pb-2x">
            <pre
                class="nonexecutable-code"><p class="challenge-snip__p">the result should be:</p><code class="no-highlight">7236</code></pre>
        </div>
        <p class=" text-white-shade"><strong>Reason:</strong> Swapping <strong>2</strong> and <strong>7</strong> results
            in <strong>7236</strong>, which is the largest possible number that can be formed by swapping two digits of
            <strong>2736</strong>.</p>
    </div>`,
          code1: `let number = 2798;

function findLargest(num) {
    // Convert the number into an array of digits
    let convFun = num => Number(num); // Convert each element back to a number
    let forArr = Array.from(String(num), convFun);

    // Swap the first two digits
    let temp = forArr[0];
    forArr[0] = forArr[1];
    forArr[1] = temp;

    // Check if the swapped first digit is greater than the second
    return forArr[0] > forArr[1] ? forArr : 'NOT Bigger in swap';
}

console.log(findLargest(number)); // Output: [7, 2, 9, 8]
`
        }
      ]
    },
    {
      id: 1,
      title: "Guess the output of this JavaScript code? ",
      note: [
        {
          text1: `When the variable c is assigned the value of obj.b, it is a reference to the function itself and not the object obj. When c is called, it is not called on an object, so this will not refer to obj and the value of this.a is undefined. As a result, the output when calling c() will be undefined.`,
          code1: `const obj = {
  a: "foo",
  b: function () {
    console.log(this.a);
  },
};

const c = obj.b;

obj.b();
c();
`
        }
      ]
    },
    {
      id: 1,
      title: "compare object reference and variable using === and ==",
      note: [
        {
          text1: `<b>== (Loose Equality)</b>: Converts values to the same data type before comparing (type coercion).
<b>=== (Strict Equality)</b>: Compares both value and data type, without converting types.

So, here are the rules for type coercion in JavaScript:
=> If either operand is a <b>string</b>, the other operand will be converted to a <b>string</b>.
=> If either operand is a <b>number</b>, the other operand will be converted to a <b>number</b>.
=> If either operand is a <b>boolean</b>, it will be converted to a <b>number</b> (<b>true</b> becomes <b>1</b> and <b>false</b> becomes <b>0</b>).
=> If one operand is an <b>object</b> and the other is a primitive value, the object will be converted to a primitive value before the comparison is made.
=> If one of the operands is <b>null</b> or <b>undefined</b>, the other must also be <b>null</b> or <b>undefined</b> to return <b>true</b>. Otherwise it will return <b>false</b>.
`,
          code1: `let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);
// Output : false false true false
`
        }
      ]
    },
    {
      id: 1,
      title: "3. (Check for Anagram) Write a function to check if two given strings are anagrams (i.e., they contain the same characters but in different orders).",
      note: [
        {
          text1: ``,
          code1: `// ---------- Ex : 1 ---------
          function isAnagram(st1, st2) {
    if (st1.length !== st2.length) return false; // Step 1: Length check

    let count = {}; // Step 2: Create a frequency map

    for (let char of st1) {
        count[char] = (count[char] || 0) + 1; // Count occurrences in st1
    }

    for (let char of st2) {
        if (!count[char]) return false; // If char is missing or overused
        count[char]--;
    }

    return true; // Step 3: If all counts match, it's an anagram
}

// Test Cases
console.log(isAnagram("listen", "silent")); // ✅ true
console.log(isAnagram("tanw", "ant"));      // ❌ false
console.log(isAnagram("racecar", "carrace"));// ✅ true
console.log(isAnagram("hello", "world"));   // ❌ false
console.log(isAnagram("aabb", "abab"));     // ✅ 

// -------- Ex : 2 -----------
function isAnagram(st1, st2) {
    return st1.length === st2.length &&
           st1.split('').sort().join('') === st2.split('').sort().join('');
}

// Test Cases
console.log(isAnagram("listen", "silent")); // ✅ true
console.log(isAnagram("tanw", "ant"));      // ❌ false
console.log(isAnagram("racecar", "carrace"));// ✅ true
console.log(isAnagram("hello", "world"));   // ❌ false
console.log(isAnagram("aabb", "abab"));     // ✅ true`
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
      section: `Easy`,
      title: "Write a function to calculate the hypotenuse of a right triangle.",
      note: [
        {
          text1: `The hypotenuse of a right triangle is always the side opposite the right angle. It is the longest side in a right triangle.`,
          code1: `(Hypotenuse)2 = (Base)2 + (Altitude)2.
                  function calculateHypotenuse(a, b) {
            const powOf = Math.pow(a, 2) + Math.pow(b, 2)
            return Math.round(Math.sqrt(powOf))
        }

        console.log(calculateHypotenuse(3, 4))// 5`
        }
      ]
    },
    {
      id: 1,
      title: "print sequence number using setTimeout and ver in loop, avoid using let - (use closures)",
      note: [
        {
          text1: `To correct the code and avoid using let, you can use closures to capture the value of i at each iteration, which is the key to getting the expected behavior.


          <b>How It Works</b>:
    Each iteration calls <b>closu(i)</b>, passing the current value of <b>i</b> to the closure function.
    Inside <b>closu</b>, the <b>setTimeout</b> is executed with the value of <b>n</b> (the captured value of <b>i</b>), ensuring that the correct value is logged after the specified delay.
          `,
          code1: `// issue
        for (var i = 0; i < 3; i++) {
          setTimeout(() => console.log(i), 1000*i);
        }

        // closure solution
        for (var i = 0; i < 5; i++) {
            function closu(n){
                setTimeout(() => console.log(n), 1000 * n);
            }
            closu(i)
        }`
        }
      ]
    },
    {
      id: 1,
      title: "Guess the output of this code? ",
      note: [
        {
          text1: `In this case, the value of the key property for obj1 was changed to "new value" using the obj1 variable, which affected the value of the key property when accessed using the obj3 variable, because both variables reference the same object. However, the value of the key property for obj2 was not affected, because the obj2 variable was reassigned to reference a new object.`,
          code1: `let obj1 = { key: "value" };
let obj2 = obj1;
let obj3 = obj2;

obj1.key = "new value";
obj2 = { key: "another value" };

console.log(obj1.key, obj2.key, obj3.key);`
        }
      ]
    },
    {
      id: 1,
      title: "Guess the output of this code? ",
      note: [
        {
          text1: `The addFoo function takes an object as an argument and returns the value of obj.foo + 1. When addFoo is called with x as the argument, the output will be 2, because x.foo is equal to 1. When addFoo is called with y as the argument, the output will be 3, because y.foo is equal to 2.`,
          code1: `const x = { foo: 1 };
const y = { foo: 2 };

function addFoo(obj) {
  return obj.foo + 1;
}

console.log(addFoo(x));
console.log(addFoo(y));
// Output : 2,3
`
        }
      ]
    },
    {
      id: 1,
      title: "Guess the output of below JavaScript code? ",
      note: [
        {
          text1: `The setTimeout function is called inside of a loop that iterates through the elements in the arr array. The setTimeout function will execute its callback function after a delay of 1000 milliseconds. However, by the time the delay has elapsed and the callback function is called, the loop will have already completed and the value of i will be 5. As a result, the output will be 5 printed five times.`,
          code1: `const arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
//Output : 5 5 5 5 5


//-------------- solve -----------
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(i); // Logs the correct value (0, 1, 2, 3, 4)
  }, 1000);
}
  //By using "let", the value of "i" will be scoped to the block of each iteration. This way, each iteration of the loop will have a separate "i" value, and the correct value will be logged inside the "setTimeout".


  //----------- using IIFE ---------
  const arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  (function(i) {
    setTimeout(function () {
      console.log(i); // Logs the correct value (0, 1, 2, 3, 4)
    }, 1000);
  })(i); // IIFE (Immediately Invoked Function Expression)
}
//In this case, the function inside the "for" loop is immediately invoked, capturing the value of "i" at that specific iteration. This ensures the correct value of "i" is logged when the "setTimeout" executes.

// Both of these solutions will log the numbers "0, 1, 2, 3, 4" correctly.
`
        }
      ]
    },
    {
      id: 1,
      title: "for loop setTimeout function global variable increment",
      note: [
        {
          text1: `The <b>setTimeout</b> functions are asynchronous, so they execute after the loop finishes. At that time, <b>x</b> is incremented, and the value of <b>x</b> is logged.`,
          code1: `var x = 0;
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    x++;
    console.log(x);
  }, 1000);
}
`
        }
      ]
    },
    {
      id: 1,
      title: "forEach mutating array of objects",
      note: [
        {
          text1: `<b>Explanation</b>:
=> <b>arr.forEach(...)</b> iterates over each object in the <b>arr</b> array.
=> Inside the callback function, you're modifying the <b>x</b> property of each object in place (mutation). So for example, <b>a.x</b> becomes <b>a.x * 2</b>.
=> Since <b>forEach</b> is a function <u>that doesn't return anything</u>, it directly mutates the objects.
=> After the <b>forEach</b> loop runs, the <b>x</b> property of each object will be doubled. You can see that when you log <b>a.x, b.x</b>, etc.
`,
          code1: `let a = { x: 1 };
let b = { x: 2 };
let c = { x: 3 };
let d = { x: 4 };
let e = { x: 5 };
let arr = [a, b, c, d, e];

arr.forEach((obj) => (obj.x = obj.x * 2));  // Mutating each object in the array
console.log(a.x, b.x, c.x, d.x, e.x);  // The original objects are modified.

//---------- Map ---
let p = { i: 1 };
let q = { i: 2 };
let r = { i: 3 };
let s = { i: 4 };
let t = { i: 5 };
let arrMap = [p, q, r, s, t];
arrMap.map((obj) => (obj.i = obj.i * 2));  // Mutating each object in the array
console.log(p.i, q.i, r.i, s.i, t.i);  // The original objects are modified.
// However, "'map' is supposed to return a new array", but here you're just mutating the objects without returning a new one.

//----------- solution ----------
let a = { x: 1 };
let b = { x: 2 };
let c = { x: 3 };
let d = { x: 4 };
let e = { x: 5 };
let arr = [a, b, c, d, e];

// Using map instead of forEach to create new objects
let newArr = arr.map((obj) => {
    return { ...obj, x: obj.x * 2 };  // Create a new object with modified 'x'
});

console.log(newArr); // Prints the new array with updated 'x' values.
console.log(a.x, b.x, c.x, d.x, e.x); // The original objects remain unchanged.
`
        }
      ]
    },
    {
      id: 1,
      title: "Object spreading(...) inside other object",
      note: [
        {
          text1: `1) <b>let obj = { name: "John", age: 25 };</b>
Here, you create an object obj with two properties: name set to "John" and age set to 25.

2) <b>let newObj = { ...obj, age: 30 };</b>
* This is called <b>object</b> spreading. The <b>...obj</b> syntax spreads all properties from the <b>obj</b> into the <b>newObj</b> object.
* After spreading <b>obj</b>, you're explicitly setting <b>age</b> to <b>30</b> in <b>newObj</b>, which will override the original <b>age</b> value from <b>obj</b>.
* The resulting <b>newObj</b> will have <b>name: "John"</b> (from <b>obj</b>) and <b>age: 30</b> (overridden in the new object).

3)<b>console.log(obj.age);</b>
This logs the <b>age</b> property of the original object <b>obj</b>, which remains <b>25</b> because the original object wasn't mutated.

4)<b>console.log(newObj.age);</b>
This logs the <b>age</b> property of the new object <b>newObj</b>, which has been updated to <b>30</b> as a result of the explicit change.`,
          code1: `let obj = { name: "John", age: 25 };
let newObj = { ...obj, age: 30 };

console.log(obj.age);  // Logs the age of the original object
console.log(newObj.age);  // Logs the age of the new object
`
        }
      ]
    },
    {
      id: 1,
      title: "object literal notation",
      note: [
        {
          text1: `The code defines two variables name and age with values "John" and 25 respectively.

Then, it uses object literal notation to create an object user with properties name and age and the values are assigned from the variables name and age respectively.
So, the console.log statement logs the user object which is { name: "John", age: 25 }.
In ES6+, you can use object literal notation to create objects with properties using the same name as the variables with the values assigned to them.`,
          code1: `const name = "John";
const age = 25;

const user = { name, age };
console.log(user); //{ name: "John", age: 25 }
`
        }
      ]
    },
    {
      id: 1,
      title: "null and undefined check with === and ==",
      note: [
        {
          text1: `typeof null returns object which is an error in JavaScript. This is a historical bug in the language that cannot be fixed without breaking existing code. So, to check for null, you should use === null instead of typeof operator.

typeof undefined returns undefined.

null === undefined is false because null and undefined are two distinct types in JavaScript.

null == undefined is true because == is the loose equality operator in JavaScript, which performs type coercion before comparison. In this case, both null and undefined are coerced to undefined before comparison, and since they both have the same value, the comparison returns true. However, it is generally recommended to use === instead of == to avoid unexpected behavior due to type coercion.`,
          code1: `console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(null === undefined); // false
console.log(null == undefined); // true
`
        }
      ]
    },
    {
      id: 1,
      title: "Write a function in JavaScript that takes an array of numbers and returns the sum of all positive numbers in the array. ",
      note: [
        {
          text1: ``,
          code1: `function sumOfPositiveNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

// Example usage:
const arr = [1, -2, 3, 4, -5, 6];
console.log(sumOfPositiveNumbers(arr)); // Output: 14
`
        }
      ]
    },
    {
      id: 1,
      title: " Write a function in JavaScript that takes a string as input and returns a new string with all the vowels removed.",
      note: [
        {
          text1: ``,
          code1: `function removeVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}

// Example usage:
const str = "This is a test string with vowels";
console.log(removeVowels(str)); // Output: Ths s  tst strng wth vwls`
        }
      ]
    },
    {
      id: 1,
      title: "Write a function in JavaScript that checks if a string is a palindrome.",
      note: [
        {
          text1: ``,
          code1: `        const paliSt = 'HellolleH'
        function checkPali(str) {
            if (str === str.split('').reverse().join('')) {
                return 'string is Palindrome'
            }
            return 'not Palindrome'
        }
        // Example usage:
        console.log(checkPali(paliSt)); `
        }
      ]
    },
    {
      id: 1,
      title: "Write a function in JavaScript that checks if a given string is a valid IPv4 address.",
      note: [
        {
          text1: `The isValidIPv4 function takes a string as its parameter and checks if it is a valid IPv4 address.
An IPv4 address consists of four octets separated by periods, with each octet being a number between 0 and 255.
The function first splits the string into an array of octets using the split() method.
It then checks if the array has exactly four elements and if each element is a number between 0 and 255.
It also checks if each octet does not start with a 0 unless it is a single-digit octet.
If any of these conditions are not met, the function returns false. Otherwise, it returns true.

In the example usage, we pass the strings '192.168.0.1' and '256.0.0.0' to the isValidIPv4 function. The function returns true for the first string because it is a valid IPv4 address and false for the second string because it is not a valid IPv4 address.`,
          code1: `function isValidIPv4(str) {
  const octets = str.split(".");
  if (octets.length !== 4) return false;
  for (let i = 0; i < octets.length; i++) {
    const octet = octets[i];
    if (isNaN(octet) || octet < 0 || octet > 255) return false;
    if (octet.length > 1 && octet[0] === "0") return false;
  }
  return true;
}

// Example usage:
console.log(isValidIPv4("192.168.0.1")); // Output: true
console.log(isValidIPv4("256.0.0.0")); // Output: false
`
        }
      ]
    },
    {
      id: 1,
      title: "there are two nested functions var hosting in false condition",
      note: [
        {
          text1: `In this code, there are two nested functions: foo and bar. The variable x is declared and assigned a value of 1 within the foo function, while the variable y is declared and assigned a value of 2 within the bar function.

When the foo function is called, it invokes the bar function. Inside the bar function, the values of x and y are accessed and summed together using console.log(x + y).

Since x is accessible within the bar function due to lexical scoping, the value of x is 1. Similarly, the value of y is 2. Therefore, the output of console.log(x + y) will be 3.

Hence, the correct answer is C: 3.`,
          code1: `        let x = 10;
        function outer() {
            console.log(x);

            if (false) {
                var x = 20;
            }
        }
        outer();`
        }
      ]
    },
    {
      id: 1,
      title: "Write a JavaScript function that takes an array of numbers as input and returns a new array containing only the even numbers.",
      note: [
        {
          text1: `Using recursion and conditional statement`,
          code1: `function findEvenNumbersRecursive(numberArray) {
  if (numberArray.length === 0) {
    return [];
  }

  const firstNumber = numberArray[0];
  const remainingNumbers = numberArray.slice(1);

  if (firstNumber % 2 === 0) {
    return [firstNumber].concat(findEvenNumbersRecursive(remainingNumbers));
  } else {
    return findEvenNumbersRecursive(remainingNumbers);
  }
}
`
        }
      ]
    },
    {
      id: 1,
      title: "Three Ways to Reverse a String in JavaScript",
      note: [
        {
          text1: `1. Reverse a String With Built-In Functions (Ex : 1)
          2. Reverse a String With a Decrementing For Loop (Ex : 2)
          3. Reverse a String With Recursion (Ex : 3)`,
          code1: `// Ex : 1
          function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

reverseString("hello");


//------------- Ex : 2-------------
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');


//----------- Ex : 3
function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");


//--- Conditional (Ternary) Operator: ---
function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");

`
        }
      ]
    },
    {
      id: 1,
      title: "FizzBuzz Variation",
      note: [
        {
          text1: `Write a function that prints numbers from 1 to 50. But for multiples of 3, print "Alpha", for multiples of 5, print "Beta", and for numbers that are multiples of both 3 and 5, print "AlphaBeta". `,
          code1: `function isMul() {
    for (let i = 1; i <= 50; i++) {  // Corrected loop range
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("AlphaBeta");  // Multiples of both 3 and 5
        } else if (i % 3 === 0) {
            console.log("Alpha");  // Multiples of 3
        } else if (i % 5 === 0) {
            console.log("Beta");  // Multiples of 5
        } else {
            console.log(i);  // Print number if not a multiple of 3 or 5
        }
    }
}

isMul();
`
        }
      ]
    },
    {
      id: 1,
      title: "Find First Non-Repeating Character",
      note: [
        {
          text1: `Given a string, find the first character that does not repeat. Example Input: const str = 'swiss'; Expected Output:'w'`,
          code1: `function firstNonRepeatingChar(str) {
    let charCount = {}; // Step 1: Create a frequency map

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1; // Count occurrences
    }

    for (let char of str) { // Step 2: Find the first character with count = 1
        if (charCount[char] === 1) {
            return char; // Return the first non-repeating character
        }
    }

    return null; // If all characters repeat, return null
}

// Example Usage:
console.log(firstNonRepeatingChar("swiss")); // Output: "w"
console.log(firstNonRepeatingChar("racecar")); // Output: "e"
console.log(firstNonRepeatingChar("aabbcc")); // Output: null
console.log(firstNonRepeatingChar("javascript")); // Output: "j"
`
        }
      ]
    },
    {
      id: 1,
      title: "Find the Missing Number",
      note: [
        {
          text1: `You have an array of numbers from 1 to N, but one number is missing. Write a function to find the missing number.
Example Input:
const arr = [1, 2, 3, 5, 6]; 

Expected Output:
4
Hint: Use the sum formula (N * (N + 1)) / 2 or XOR approach.

Answer : 
<b>What is (n * (n + 1)) / 2?</b>
This is the <b>formula for the sum of the first N natural numbers.</b>

<b>Formula Explanation</b>:
The sum of the first N natural numbers (1, 2, 3, ..., N) is given by:
S=1+2+3+...+N
Using mathematical derivation, this sum can be computed directly with the formula:

S = N * (N+1)/ 2
This formula helps <b>calculate the total sum of numbers from 1 to N instantly, without looping.</b>

<b>Finding the Missing Number</b>:
1️⃣ <b>Calculate the expected sum</b> using the formula.
2️⃣ <b>Find the actual sum</b> by adding up the array elements.
3️⃣ <b>The difference between the expected sum and actual sum</b> gives the missing number:
Missing Number = Expected Sum - Actual Sum
`,
          code1: `function findMissingNumber(arr) {
    let n = arr.length + 1;  // The total count of numbers (including the missing one)
    let expectedSum = (n * (n + 1)) / 2; // Sum formula
    let actualSum = arr.reduce((sum, num) => sum + num, 0); // Sum of given numbers

    return expectedSum - actualSum; // The missing number
}

// Example Usage:
console.log(findMissingNumber([1, 2, 3, 5, 6])); // Output: 4
console.log(findMissingNumber([1, 2, 4, 5]));    // Output: 3
console.log(findMissingNumber([2, 3, 4, 5, 6])); // Output: 1 (Also works when \`1\` is missing)
`
        }
      ]
    },
    {
      id: 1,
      title: "Bubble Sort",
      note: [
        {
          text1: `implementation of the <b>Bubble Sort</b> algorithm`,
          code1: `
        function orderNum(num) {
            let temp;
            // Outer loop: Repeat n-1 times
            for (let i = 0; i < num.length - 1; i++) {
                // Inner loop: Compare adjacent elements and swap if necessary
                for (let j = 0; j < num.length - 1 - i; j++) {
                    if (num[j] > num[j + 1]) {
                        temp = num[j];
                        num[j] = num[j + 1];
                        num[j + 1] = temp;
                    }
                }
            }
            return num;
        }

        console.log(orderNum([12, 2, 8, 10, 4, 17, 9, 29]));`
        }
      ]
    },
    {
      id: 1,
      title: "JavaScript Code to Group Consecutive Numbers:",
      note: [
        {
          text1: ``,
          code1: `function groupConsecutiveNumbers(arr) {
    // To store the result
    let grouped = [];
    let temp = [];

    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // If temp is empty, start a new group with the first number
        if (temp.length === 0) {
            temp.push(arr[i]);
        } else {
            // Check if the current number is consecutive to the last one
            if (arr[i] === temp[temp.length - 1] + 1) {
                temp.push(arr[i]);
            } else {
                // If it's not consecutive, push the group and start a new one
                grouped.push(temp);
                temp = [arr[i]];
            }
        }
    }
    // Don't forget to add the last group
    if (temp.length > 0) {
        grouped.push(temp);
    }

    return grouped;
}

// Test the function with your example array
let arr = [1, 2, 3, 7, 8, 10, 11, 12, 15];
console.log(groupConsecutiveNumbers(arr));
`
        }
      ]
    },
    {
      id: 1,
      title: "print 1 to 5 every number with 1 sec gap",
      note: [
        {
          text1: ``,
          code1: `        // print 1 to 5 every number with 1 sec gap
        function runNum(num) {
            if (num <= 5) {
                setTimeout(() => {
                    console.log(num)
                    runNum(num + 1)
                }, 1000)
            }
        }
        runNum(1)`
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
      section: "Promise code challenge",
      title: "Promise Time Limit",
      note: [
        {
          text1: `Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
 

<b>Example 1</b>:
Input:---- 
fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
}
inputs = [5]
t = 50
Output: {"rejected":"Time Limit Exceeded","time":50}
Explanation:
const limited = timeLimit(fn, t)
const start = performance.now()
let result;
try {
   const res = await limited(...inputs)
   result = {"resolved": res, "time": Math.floor(performance.now() - start)};
} catch (err) {
   result = {"rejected": err, "time": Math.floor(performance.now() - start)};
}
console.log(result) // Output
The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.

<b>Example 2</b>:
Input: 
fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
}
inputs = [5]
t = 150
Output: {"resolved":25,"time":100}
Explanation:
The function resolved 5 * 5 = 25 at t=100ms. The time limit is never reached.
Example 3:

Input: 
fn = async (a, b) => { 
  await new Promise(res => setTimeout(res, 120)); 
  return a + b; 
}
inputs = [5,10]
t = 150
Output: {"resolved":15,"time":120}
Explanation:
​​​​The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.

<b>Example 4</b>:
Input: 
fn = async () => { 
  throw "Error";
}
inputs = []
t = 1000
Output: {"rejected":"Error","time":0}
Explanation:
The function immediately throws an error.
 

Constraints:
0 <= inputs.length <= 10
0 <= t <= 1000
fn returns a promise
`,
          code1: `
        var timeLimit = function (fn, t) {
            return async function (...args) {
                // Record the start time for performance measurement
                const start = performance.now();

                // Create a timeout promise that will reject after 't' milliseconds
                const timeoutPromise = new Promise((_, reject) =>
                    setTimeout(() => reject("Time Limit Exceeded"), t)
                );

                // Create a promise from the function 'fn'
                const fnPromise = fn(...args);

                try {
                    // Wait for whichever promise resolves/rejects first
                    const result = await Promise.race([fnPromise, timeoutPromise]);
                    return { resolved: result, time: Math.floor(performance.now() - start) };
                } catch (err) {
                    // If the promise was rejected (either by timeout or error), handle it
                    return { rejected: err, time: Math.floor(performance.now() - start) };
                }
            };
        };

        
        // Example usage:
        async function runExample() {
            //------ Example 1 -------
            const fn1 = async (n) => {
                await new Promise(res => setTimeout(res, 100));
                return n * n;
            };
            const inputs1 = [5];
            const t1 = 50;
            const limited1 = timeLimit(fn1, t1);
            let result1;
            try {
                const res = await limited1(...inputs1);
                result1 = res;
            } catch (err) {
                result1 = err;
            }
            console.log(result1); // Output: {"rejected":"Time Limit Exceeded","time":50}

            //------ Example 2 ------
            const fn2 = async (n) => {
                await new Promise(res => setTimeout(res, 100));
                return n * n;
            };
            const inputs2 = [5];
            const t2 = 150;
            const limited2 = timeLimit(fn2, t2);
            let result2;
            try {
                const res = await limited2(...inputs2);
                result2 = res;
            } catch (err) {
                result2 = err;
            }
            console.log(result2); // Output: {"resolved":25,"time":100}

            //------ Example 3 ------
            const fn3 = async (a, b) => {
                await new Promise(res => setTimeout(res, 120));
                return a + b;
            };
            const inputs3 = [5, 10];
            const t3 = 150;
            const limited3 = timeLimit(fn3, t3);
            let result3;
            try {
                const res = await limited3(...inputs3);
                result3 = res;
            } catch (err) {
                result3 = err;
            }
            console.log(result3); // Output: {"resolved":15,"time":120}

            //------ Example 4 ------
            const fn4 = async () => {
                throw "Error";
            };
            const inputs4 = [];
            const t4 = 1000;
            const limited4 = timeLimit(fn4, t4);
            let result4;
            try {
                const res = await limited4(...inputs4);
                result4 = res;
            } catch (err) {
                result4 = err;
            }
            console.log(result4); // Output: {"rejected":"Error","time":0}
        }

        // Run the examples
        runExample();`
        },
        {
          text1: `<b>Breakdown below code</b>:
<b>1) TestPromise()</b>:
This function is <b>asynchronous</b> (because it's marked with <b>async</b>).
It returns a <b>Promise</b>, which resolves after 100 milliseconds due to the <b>setTimeout</b>.
The <b>await</b> pauses the function until the promise inside <b>new Promise(res => setTimeout(res, 100)) is resolved.</b>

<b>2) new Promise(res => setTimeout(res, 100))</b>:
The <b>new Promise</b> constructor creates a new promise that resolves after 100ms.
Since there is no value passed to the <b>res</b> (resolve) function, the promise resolves with the value <b>undefined</b>.

<b>3) await</b>:
The <b>await</b> keyword is used to pause the <b>TestPromise</b> function execution until the <b>Promise</b> resolves.
Even though you have <b>await</b>, the promise resolves with <b>undefined</b> because <b>res()</b> is called without any arguments.

<b>4) .then(e => console.log(e))</b>:
After <b>TestPromise()</b> resolves, <b>.then(e => console.log(e))</b> is called.
Since the promise resolves with <b>undefined</b> (because <b>res</b> was called without any argument), the value of <b>e</b> is <b>undefined</b>, and that is logged to the console.
`,
          code1: `async function TestPromise(){
    return await new Promise(res => setTimeout(res, 100)) 
}

TestPromise().then(e => console.log(e));
`
        },
        {
          text1: `<b>Breakdown below code</b>:
          <b> setTimeout(() => { resolve("success") }, 1000);</b>: The <b>resolve("success")</b> is inside a callback function, which ensures it is invoked <b>only after 1000 milliseconds.</b>

<b>Date.now() - start</b>: This will correctly return the time elapsed, which is roughly 1000 ms.`,
          code1: `async function ssss() {
    const start = Date.now();

    try {
        // Corrected: passing the resolve function correctly to setTimeout
        const testVal = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("success"); // Resolve the promise after 1000ms
            }, 1000);
        });

        return { message: testVal, time: Date.now() - start };
    } catch (err) {
        return { error: err, time: Date.now() - start };
    }
}

ssss().then(e => console.log(e));
`
        },
        {
          text1: ``,
          code1: ``
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
      section: "Function Transformations",
      title: "Allow One Function Call",
      note: [
        {
          text1: `Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
 

<b>Example 1</b>:
Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called

<b>Example 2</b>:
Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
Output: [{"calls":1,"value":140}]
Explanation:
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called

Constraints:
calls is a valid JSON array
1 <= calls.length <= 10
1 <= calls[i].length <= 100
2 <= JSON.stringify(calls).length <= 1000`,
          code1: `var once = function (fn) {
    let isCalled = false;
    return function (...args) {
        if (!isCalled) {
            const result = fn(...args);  // Call the function and store the result
            isCalled = true;  // Mark that the function has been called
            return result;  // Return the result of the first call
        } else {
            return undefined;  // Return \`undefined\` on subsequent calls
        }
    }
};

let fn = (a, b, c) => (a + b + c);
let onceFn = once(fn);

console.log(onceFn(1, 2, 3));  // 6
console.log(onceFn(2, 3, 6));  // undefined
`
        }
      ]
    },
    {
      id: 1,
      title: "Function Composition",
      note: [
        {
          text1: `Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
The function composition of an empty list of functions is the identity function f(x) = x.
You may assume each function in the array accepts one integer as input and returns one integer as output.

 
<b>Example 1</b>:
Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65


<b>Example 2</b>:
Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Explanation:
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
Example 3:

Input: functions = [], x = 42
Output: 42
Explanation:
The composition of zero functions is the identity function
 

Constraints:
-1000 <= x <= 1000
0 <= functions.length <= 1000
all functions accept and return a single integer`,
          code1: `//---------  for loop example ---------------
          // Define the compose function that takes an array of functions as an argument
var compose = function (functions) {
    // Return a new function that takes the input \`x\`
    return function (x) {
        let valX = x; // Initialize the value with the input \`x\`
        
        // Loop through the functions array from right to left
        // We start at the last function and move backward to the first function
        for (let i = functions.length - 1; i >= 0; i--) {
            // Apply the current function to the current value of \`valX\`
            valX = functions[i](valX);
        }
        
        // Return the final result after applying all functions
        return valX;
    };
};

// Example usage of the compose function:
const fn = compose([x => x + 1, x => x * x, x => 2 * x]);

// Call the composed function \`fn\` with input \`4\`
console.log(fn(4)); // Output: 65

// Explanation of the output: 
// 1. Starting with x = 4
// 2. Apply x => 2 * x => 2 * 4 = 8
// 3. Apply x => x * x => 8 * 8 = 64
// 4. Apply x => x + 1 => 64 + 1 = 65


//------------- reducer function --------
// Key Steps:----
// "Identity Function": If the array is empty, the composition should return the identity function, i.e., "f(x) = x", because there are no functions to apply.
// "Composition": If there are functions in the array, the composition of the functions should be applied in reverse order, i.e., "f(g(h(x)))", where "h(x)" is applied first, followed by "g(h(x))", and then "f(g(h(x)))".

        var compose = function (functions) {
            return function (x) {
                // If functions array is empty, return identity function
                return functions.reduceRight((acc, fn) => fn(acc), x);
            };
        };

        // Example 1
        const functions1 = [x => x + 1, x => x * x, x => 2 * x];
        console.log(compose(functions1)(4));  // Output: 65

        // Example 2
        const functions2 = [x => 10 * x, x => 10 * x, x => 10 * x];
        console.log(compose(functions2)(1));  // Output: 1000

        // Example 3
        const functions3 = [];
        console.log(compose(functions3)(42));  // Output: 42
`
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
  ]
}