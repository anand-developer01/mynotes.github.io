const isHighlighted = 'css-notes'
const Links1 = 'css-notes'
const Links2 = 'flex-notes'
const Links3 = 'bootstrap'
const Links4 = 'scss-sass'

const scssData = {
  scssNote: [
    {
      id: 1,
      title: "what is SCSS",
      note: [
        {
          text1: `SCSS, short for "Sassy Cascading Style Sheets," is a CSS preprocessor that extends CSS with features like variables, nesting, and mixins, making it easier and more efficient to write and maintain stylesheets. 

          <b>What it is</b>: SCSS is a language that compiles into CSS, allowing developers to use features not directly available in standard CSS. 
Key Features:
<b>Variables</b>: Store values (like colors or fonts) that can be reused throughout the stylesheet. 
<b>Nesting</b>: Organize styles logically by nesting selectors, mirroring the structure of HTML. 
<b>Mixins</b>: Create reusable blocks of CSS code that can be included in multiple places. 
<b>Functions</b>: Perform calculations and other operations on CSS values. 
Why use it? SCSS streamlines the process of writing and maintaining stylesheets, leading to cleaner, more organized, and easier-to-manage code. 


<b>How Does Sass Work?</b>
Sass works in such a way that when you write your styles in a .scss file, it gets compiled into a regular CSS file. The CSS code is then loaded into the browser.

That is why it's called a Preprocessor.

<b>Why should you use Sass?</b>
<b>Easy to learn</b>: If you are familiar with CSS already, then you'll be glad to know that Sass actually has a similar syntax, and so you can start using it, even after this tutorial ;)

<b>Compatibility</b>: It is compatible with all versions of CSS. So, you can use any available CSS libraries.

<b>Saves time</b>: It helps reduce the repetition of CSS, because of its powerful features.

<b>Reusable code</b>: Sass allows for variables and chunks of code (mixins) that can be reused over and over again. This helps you save time and makes you able to code faster.

<b>Organized Code</b>: Sass helps keep your code organized by using partials.

<b>Cross Browser Compatibility</b>: Sass gets compiled into CSS and adds all the necessary vendor prefixes so you don't have to worry about manually writing them out.



CSS Preprocessors compile the code which is written using a special compiler. They then use that to create a CSS file, which can then be referenced by the main HTML document.

When using any CSS Preprocessor, you will be able to program in normal CSS just as you would if the preprocessor were not in place. The good thing is you also have more options available to you. Some, such as SASS, has specific style standards which are meant make the writing of the document even easier, such as the freedom to omit braces if you want.

Of course, CSS Preprocessors also offer other features as well. Many of the features offered are incredibly similar across preprocessors, with only slight variances in syntax. Thus, you can choose pretty much any one you wish, and you will be able to achieve the same things. Some of the more useful features are:
            `,
          code1: ``,
        }
      ]
    },
    {
      id: 52,
      title: "Variables in Sass (Variables)",
      note: [
        {
          text1: `Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you’ll want to reuse. Sass uses the <b>$</b> symbol to make something a variable. 

          You can declare variables in Sass. This is one of Sass's strengths since we can define variables for various properties and use them in any file.
The benefit here is that if that value changes, you simply need to update a single line of code.
This is done by naming a variable with a dollar symbol <b>$</b> and then referencing it elsewhere in your code.
          
          When the Sass is processed, it takes the variables we define for the <b>$font-stack</b> and <b>$primary-color</b> and outputs normal CSS with our variable values placed in the CSS. This can be extremely powerful when working with brand colors and keeping them consistent throughout the site.`,
          code1: `// -------- SCSS Syntax  -------
          SassPlayground
SCSS Syntax
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
  
// -------- SCSS Syntax  -------
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color
  
//--------  css  --------
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
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
      title: "Nesting",
      note: [
        {
          text1: `Most of the time, while writing CSS, classes are often duplicated. We can avoid this duplication by nesting styles inside the parent element.
          
          When writing HTML you've probably noticed that it has a clear nested and visual hierarchy. CSS, on the other hand, doesn't.

Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered bad practice.
`,
          code1: `// -------- scss --------
          nav {
            height: 10vh;
            width: 100%;
            display: flex;

            ul {
              list-style: none;
              display: flex;
            }

            li {
              margin-right: 2.5rem;

              a {
                text-decoration: none;
                color: #707070;

                &:hover {
                  color: #069c54;
                }
              }
            }
          }
  

//---------- css ---------
 nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
  
nav li a {
  text-decoration: none;
  color: #707070;
}

nav li a:hover {
  color: #069c54;
}`
        },
        {
          text1: ``,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "Parent Selector",
      note: [
        {
          text1: `In the Sass code above, you might notice the ampersand symbol <b>&</b> used with the hover pseudo-class. This is called a Parent Selector.

The parent selector, <b>&</b>, is a special selector invented by Sass that's used in nested selectors to refer to the outer selector.
So, in the case of the code above, <b>&</b> will refer to the parent which is the anchor tag a.

The parent selector, <b>&</b>, is a special selector invented by Sass that's used in <b>nested selectors</b> to refer to the outer selector. It makes it possible to re-use the outer selector in more complex ways, like adding a <b>pseudo-class</b> or adding a selector before the parent.`,
          code1: `//When a parent selector is used in an inner selector, it's replaced with the corresponding outer selector. This happens instead of the normal nesting behavior.
          // -------- Ex : 1 ----------
          .alert {
  // The parent selector can be used to add pseudo-classes to the outer
  // selector.
  &:hover {
    font-weight: bold;
  }

  // It can also be used to style the outer selector in a certain context, such
  // as a body set to use a right-to-left language.
  [dir=rtl] & {
    margin-left: 0;
    margin-right: 10px;
  }

  // You can even use it as an argument to pseudo-class selectors.
  :not(&) {
    opacity: 0.8;
  }
}`
        },
        {
          text1: ``,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "Adding Suffixes",
      note: [
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
      title: "Partials",
      note: [
        {
          text1: `This is one of the many awesome features of Sass that gives you an advantage.

          You can create partial Sass files that contain little snippets of CSS that you can include in other Sass files. This is a great way to modularize your CSS and help keep things easier to maintain. A partial is a Sass file named with a leading underscore. You might name it something like <b>_partial.scss</b>. The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file. Sass partials are used with the <b>@use</b> rule.

As stylesheets grow large over time, it gets difficult to maintain them. Because of this, it just makes sense to break your stylesheets into smaller chunks. In other words, Partials help you organize and structure your code.

To declare a partial, we will start the file name with an underscore <b>_</b>, and add it in another Sass file using the <b>@import</b> directive.

For example, if we have a <b>_globals.scss, _variables.scss</b>, and <b>_buttons.scss</b>, we could import them into the main SCSS file <b>main.scss</b>.

@import "globals";
@import "variables";
@import "buttons";
You'll notice that the underscore and the <b>.scss</b> are not added. That is because Sass automatically assumes that you are referring to the <b>.sass</b> or <b>.scss</b> file.`,
          code1: ``
        },
        {
          text1: ``,
          code1: ``
        },
        {
          text1: `<b>Modules</b>
          You don't have to write all your Sass in a single file. You can split it up however you want with the <b>@use</b> rule. This rule loads another Sass file as a module, which means you can refer to its <b>variables, mixins</b>, and <b>functions</b> in your Sass file with a namespace based on the filename. 
          
          Notice we're using <b>@use 'base';</b> in the <b>styles.scss</b> file. When you use a file you don't need to include the file extension. Sass is smart and will figure it out for you.`,
          code1: `// ----------  --------
          // _base.scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
  
// styles.scss
@use 'base';

.inverse {
  background-color: base.$primary-color;
  color: white;
}`
        },
        {
          text1: ``,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "Mixins",
      note: [
        {
          text1: `<b>A mixin is a class that provides methods or properties for other classes to use, but it’s not meant to stand on its own</b>. Instead of forming a parent-child relationship like inheritance, you "mix" it into another class.
          
          In SCSS, mixins allow you to create groups of CSS declarations that can be reused throughout the stylesheet. This can be helpful when working with vendor prefixes, complex animations, and other code that might need to be used in multiple places.

          A <b>mixin</b> in SCSS is a <b>block of reusable CSS code</b> that you can "include" in any selector. Think of it like a function in programming: you write it once and use it wherever you need.

          <b>Why use Mixins?</b>
Avoid code duplication
Encourage modularity and reusability
Prevent deep and complex inheritance trees

To create a mixin you use the <b>@mixin</b> directive and give it a name. We've named our mixin <b>theme</b>. We're also using the variable <b>$theme</b> inside the parentheses so we can pass in a <b>theme</b> of whatever we want. After you create your mixin, you can then use it as a CSS declaration starting with <b>@include</b> followed by the name of the mixin.
`,
          code1: `//------------ Ex : 1 ----------
    @mixin border-radius { /* Creates a mixin for adding a border radius */
    -webkit-border-radius: 12px; /* Adds vendor prefixes for different browsers */
    -moz-border-radius: 12px;
    -ms-border-radius: 12px;
    border-radius: 12px;
  }

    .button {
    @include border-radius;
    /* Includes the mixin in the .button class */
  }


  //------------ Ex : 2 ----------
  @mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

.info {
  @include theme;
}
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
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
      title: "Extend/Inheritance",
      note: [
        {
          text1: `Inheritance in SCSS allows you to share a set of CSS properties from one selector to another using the <b>@extend</b> directive. This differs from CSS, where inheritance is limited to certain properties.
          
          Using <b>@extend</b> lets you share a set of CSS properties from one selector to another. In our example we're going to create a simple series of messaging for errors, warnings and successes using another feature which goes hand in hand with extend, placeholder classes. A placeholder class is a special type of class that only prints when it is extended, and can help keep your compiled CSS neat and clean.

          <b>@extend</b> allows one selector to inherit the styles of another. It's like saying:
<b>I want this class to behave like that class.</b>
          `,
          code1: `    &lt;h1 class=&quot;message&quot;&gt;message&lt;/h1&gt;
    &lt;h1 class=&quot;success&quot;&gt;success&lt;/h1&gt;
    &lt;h1 class=&quot;error&quot;&gt;error&lt;/h1&gt;
    &lt;h1 class=&quot;warning&quot;&gt;warning&lt;/h1&gt;

/* This CSS will print because %message-shared is extended. */
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}    
  
//--------------------


// Base style
.button {
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
}

// Another class inherits .button styles
.primary-btn {
  @extend .button;
  font-weight: bold;
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
      title: "@extend vs @mixin",
      note: [
        {
          text1: `
          
          <table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>Feature</th>
      <th>@mixin</th>
      <th>@extend</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Reusability</td>
      <td>Very flexible with parameters</td>
      <td>Only inherits from existing selectors</td>
    </tr>
    <tr>
      <td>Output</td>
      <td>Copies styles each time</td>
      <td>Groups selectors together</td>
    </tr>
    <tr>
      <td>Best for</td>
      <td>Complex styles or dynamic logic</td>
      <td>Simple shared styles</td>
    </tr>
    <tr>
      <td>CSS size impact</td>
      <td>Can increase CSS size</td>
      <td>Can reduce size</td>
    </tr>
    <tr>
      <td>Use case example</td>
      <td>Media queries, dynamic spacing</td>
      <td>Buttons, alerts, card styles</td>
    </tr>
  </tbody>
</table>
`,
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
      title: "Operators",
      note: [
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
      title: "new topic",
      note: [
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
      title: "new topic",
      note: [
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
      title: "new topic",
      note: [
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
      title: "new topic",
      note: [
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
      title: "new topic",
      note: [
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
      title: "new topic",
      note: [
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
      title: "new topic",
      note: [
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
      title: "new topic",
      note: [
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
      title: "new topic",
      note: [
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
      title: "new topic",
      note: [
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
      title: "new topic",
      note: [
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
      title: "new topic",
      note: [
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
  ]
}