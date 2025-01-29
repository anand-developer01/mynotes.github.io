const isHighlighted = 'javascript-code-challenge'
const Links1 = 'javascript-notes'
const Links2 = 'javascript-code-challenge'
const Links3 = 'javascript-builtin-function'
const Links4 = 'javascript-projects'

const jScodeChallengeData = {
    jScodeChallengeNote: [
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
                    code1: ``
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