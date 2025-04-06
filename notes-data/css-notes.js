const isHighlighted = 'css-notes'
const Links1 = 'css-notes'
const Links2 = 'flex-notes'
const Links3 = 'bootstrap'
const Links4 = 'scss-sass'

const cssData = {
  cssNote: [
    {
      id: 1,
      title: "css",
      note: [
        {
          text1: `
            
            `,
          code1: ``,
        }
      ]
    },
    {
      id: 1,
      title: "CSS Position",
      note: [
        {
          text1: `The position property can help you manipulate the location of an element
            <b>The position Property</b>
The position property specifies the type of positioning method used for an element.
There are five different position values:
=> static
=> relative
=> fixed
=> absolute
=> sticky

=> <b>static</b>: every element has a static position by default, so the element will stick to the normal page flow. So if there is a left/right/top/bottom/z-index set then there will be no effect on that element.
=> <b>relative</b>: an element's original position remains in the flow of the document, just like the static value. But now left/right/top/bottom/z-index will work. The positional properties “nudge” the element from the original position in that direction.
=> <b>absolute</b>: the element is removed from the flow of the document and other elements will behave as if it's not even there whilst all the other positional properties will work on it.
=> <b>fixed</b>: the element is removed from the flow of the document like absolutely positioned elements. In fact they behave almost the same, only fixed positioned elements are always relative to the document, not any particular parent, and are unaffected by scrolling.
=> <b>sticky</b>: the element is treated like a relative value until the scroll location of the viewport reaches a specified threshold, at which point the element takes a fixed position where it is told to stick.
=> <b>inherit</b>: the position value doesn't cascade, so this can be used to specifically force it to, and inherit the positioning value from its parent.

The main difference between static or relative and absolute or fixed was the space they take up in the flow of the DOM. Positions static & relative keep their natural space in the flow of the document, while the absolute & fixed don't — their space is removed and they have a floating behavior.
`,
          code1: ``,
        },
        {
          text1: `<b>Static position</b>
This is the default CSS position applicable to all HTML elements. This position place the HTML elements based on normal document flow. Using this position, top/right/bottom/left properties can not be applicable to elements (ie., static position elements don’t obey top/right/bottom/left properties).

By default, every element in CSS is positioned as static.

This has no special property, it is positioned according to the normal flow of the page.
`,
          code1: `  // html
             &lt;&gt;
            &lt;div class=&quot;p1&quot;&gt;
            &lt;/div&gt;
            &lt;div class=&quot;p2&quot;&gt;
            &lt;/div&gt;
        &lt;/&gt;
        
        //css
        .p1 {
    width: 50px;
    height: 50px;
    background-color: cornflowerblue;
    position: static;
}

.p2 {
    width: 50px;
    height: 50px;
    background-color: sandybrown;
    position: static;
    border: 3px solid blue;
}
        `,
        },
        {
          text1: `<b>position absolute</b>
          absolute property positions an element relative to the parent or the page if the parent is not set to position: relative;

          An absolute position element is positioned relative to the first parent element that has a position other than static.Absolutely positioned elements are removed from the normal flow. The document and other elements behave like the absolutely positioned element does not exist.Absolutely positioned elements can overlap other elements.

          An element with <u>position: absolute;</u> is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).

However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

<b>Note</b>: Absolute positioned elements are removed from the normal flow, and can overlap elements.

          Absolute positioning allows you to <b>place your element precisely where you want it</b>.

Absolute positioning is done <b>relative to the first relatively (or absolutely) positioned parent element</b>. In the case when there is no positioned parent element, the element that has position set to absolute will be positioned related <b>directly to the HTML element (the page itself).</b>

An important thing to keep in mind while using absolute positioning is to make sure it is <b>not overused</b>, otherwise, it can lead to a maintenance nightmare.

The next thing, yet again, is to show an example of absolute positioning.

In the example, the parent element has the position set to relative. Now, when you set the position of the child element to absolute, <b>any additional positioning will be done relative to the parent element</b>. The child element moves relatively to the top of the parent element by 100px and right of the parent element by 40px.

                          <div class='abs-box'>
                    <div class="box"></div>
                    <div class="box position-absolute-set" id="example-absolute">position-absolute-set</div>
                    <div class="box"></div>
                </div>
          
          
          `,
          code1: `                &lt;div class=&quot;box&quot;&gt;&lt;/div&gt;
                &lt;div class=&quot;box position-absolute-set&quot; id=&quot;example-element&quot;&gt;position-absolute-set&lt;/div&gt;
                &lt;div class=&quot;box&quot;&gt;&lt;/div&gt;

.abs-box {
    padding: 15px;
    background-color: #ff0;
  }
  
.box {
    background-color: rgba(0, 0, 255, .2);
    border: 3px solid #00f;
    /* float: left; */
    width: 65px;
    height: 65px;
}

#example-absolute {
    background-color: #ff0;
    border: 3px solid red;
    color: #000;
    z-index: 1;
}

.position-absolute-set {
    position: absolute;
    top: 115em;
    left: 131px;
}`,
        },
        {
          text1: `position-relative
          Relative positioning is the first position type we'll take a look at. This is very similar to static positioning, except that once the positioned element has taken its place in the normal flow, you can then modify its final position, including making it overlap other elements on the page. Go ahead and update the <u>position</u> declaration in your code:

<span style="color:red"> position: relative; </span>
If you save and refresh at this stage, you won't see a change in the result at all. So how do you modify the element's position? You need to use the top, bottom, left, and right properties, which we'll explain in the next section.

<b>Introducing top, bottom, left, and right</b>
<u>top, bottom, left</u>, and <u>right</u> are used alongside <u>position</u> to specify exactly where to move the positioned element to. To try this out, add the following declarations to the .positioned rule in your CSS:

When assigned <b>position: relative</b>, an element follows the render flow of the page, but will be shifted relative to its initial position.

To determine the amount of offset, you set values for the <b>top, right, bottom</b>, and/or <b>left</b> properties. Surrounding elements won’t be affected, but there will be space where the repositioned element would have been (in static positioning).

In this example, I've offset div 2 by 30 pixels down (with the <b>top</b> property) and 30 pixels to the right (using the <b>left</b> property). The repositioned div does not affect the position of surrounding elements.

When using <b>position: relative</b>, the <b>z-index</b> value should be set to <b>auto</b> unless you want to create a new stacking context. Essentially, a new stacking context means you create a new set of layers that will be stacked based on that element.


When you set the position relative to an element, without adding any other positioning attributes (top, bottom, right, left) <b>nothing will happen.</b> When you add position apart from relative, such as left: 20px the element will move 20px to the right from its normal position. Here, you can see that <b>this element is relative to itself</b>. When the element moves, no other element on the layout will be affected.

There is a thing you should keep in mind while setting position - relative to an element limits the scope of absolutely positioned child elements. This means that any element that is the child of this element can be absolutely positioned within this block.

After this brief explanation, we need to back it up, by showing an example.

In this example, you will see how the relative positioned element moves when its attributes are changed. The first element moves to the <b>left</b> and <b>top</b> from its normal position, while the second element stays in the same place because none of the additional positioning attributes were changed.

            Ex:1
            <div id="div-1" class="position-box">1</div>
            <div id="div-2" class="position-box">2</div>
            <div id="div-3" class="position-box">3</div>
            <br/>
               <p> Ex : 2 </p>
                <div class="position-relative-box"></div>
                <div class="position-relative-box position-relative" id="example-element">position-relative</div>
                <div class="position-relative-box"></div>

`,
          code1: `// Ex:1
            &lt;div id=&quot;div-1&quot; class=&quot;position-box&quot;&gt;1&lt;/div&gt;
&lt;div id=&quot;div-2&quot; class=&quot;position-box&quot;&gt;2&lt;/div&gt;
&lt;div id=&quot;div-3&quot; class=&quot;position-box&quot;&gt;3&lt;/div&gt;
            
//css
#div-1 { background-color: #FF5C35; }

#div-2 {
  position: relative;
  top: 30px;
  left: 30px;
  background-color: #0068B1;
}

#div-3 { background-color: #4FB06D; }

.position-box {
  width: 75px;
  height: 75px;
  margin: 10px;
  border-radius: 10px;
  text-align: center;
  line-height: 75px;
  color: white;
  font-size: 24px;
}


//----------
// Ex : 2                  
            &lt;div className=&quot;box&quot;&gt;&lt;/div&gt;
                &lt;div className=&quot;box position-relative&quot; id=&quot;example-element&quot;&gt;position-relative&lt;/div&gt;
                &lt;div className=&quot;box&quot;&gt;&lt;/div&gt;

            .box {
    background-color: rgba(0, 0, 255, .2);
    border: 3px solid #00f;
    float: left;
    width: 65px;
    height: 65px;
}

#example-element {
    background-color: #ff0;
    border: 3px solid red;
    color: #000;
    z-index: 1;
}

.position-relative {
    position: relative;
    top: 40px;
    left: 40px;
}`,
        },
        {
          text1: `position fixed
          Fixed Position is a CSS technique that keeps an element in the same place even when the page is scrolled. The syntax for fixed positioning is position: fixed;. To position the element, we use top, right, bottom, and left properties.
          
          The position: fixed property in CSS is used to position an element relative to the viewport, regardless of the scrolling position of the document. When an element is set to position: fixed, it is removed from the normal document flow and remains fixed in the same position within the viewport, even as the user scrolls the page.

          <b>Important Considerations:</b>
=> When using position: fixed, it's essential to specify the top, bottom, left, or right properties to determine the fixed position of the element within the viewport.
=> Fixed elements are removed from the normal document flow, which means they do not affect the layout of other elements on the page.
=> Fixed elements remain visible in the same position, even when the user scrolls the page, providing a consistent user experience.
=> Fixed positioning is supported in all modern browsers, but it's essential to test and ensure compatibility with older browsers if needed.

Elements with <b>position: fixed</b> do not adhere to the normal render flow of the document. Instead, fixed elements are positioned relative to the viewport — in other words, the part of the document that is currently visible in the browser.

Fixed elements do not move when the user scrolls, and, unlike <b>relative</b>, they do not leave a blank space where the element would have been positioned. You can use the <b>top, right, bottom</b>, and <b>left</b> properties to set the fixed element's final position.

Here, div 2 is offset by 30 pixels top and 30 pixels left, like in the last example. However, this time it is positioned relative to the viewport. Notice that there is no space where the element would have been on the page.
          `,
          code1: `&lt;div className=&quot;box&quot;&gt;&lt;/div&gt;
                &lt;div className=&quot;box position-fixed&quot; id=&quot;example-element&quot;&gt;position-fixed&lt;/div&gt;
                &lt;div className=&quot;box&quot;&gt;&lt;/div&gt;

            .box {
    background-color: rgba(0, 0, 255, .2);
    border: 3px solid #00f;
    float: left;
    width: 65px;
    height: 65px;
}

#example-element {
    background-color: #ff0;
    border: 3px solid red;
    color: #000;
    z-index: 1;
}

.position-fixed {
    position: fixed;
    top: 40px;
    left: 40px;
}`,
        },
        {
          text1: `<b>sticky</b>
          In CSS, the position: sticky property is used to create elements that behave like <b>relative positioning</b> until they reach a certain scroll position, at which point they "stick" to a specific position in the viewport, effectively behaving like <b>fixed positioning</b>.

The key feature of <u>position: sticky</u> is that the element remains <b>relative to its nearest scrollable ancestor</b> until a defined threshold (usually a <u>top, bottom, left, or right</u> value) is reached. Once the threshold is passed during scrolling, the element sticks in place, behaving like a <u>fixed</u> element, but only within its container.

<b>How position: sticky Works</b>:
    => The element starts in the normal document flow, just like <u>position: relative</u>.
    => When the user scrolls the page, the element will <b>stick</b> to a defined position (e.g., top of the screen, bottom of the container) once the scroll position reaches a certain threshold, and it stays "stuck" at that position until its containing block (ancestor) is out of view.


    <b>The Sticky Exploration</b>
While playing with it, I quickly noticed that when an element with a <u>position: sticky</u> style is wrapped, and it is the only element inside the wrapper element, this element, which was defined <u>position: sticky</u> will not stick.

<span style="color:red">&lt;!-- DOESN&#39;T WORK!!! --&gt;
&lt;style&gt;
    .sticky{
        position: sticky;
        top: 0;
    }
&lt;/style&gt;
&lt;div class=&quot;wrapper&quot;&gt;
   &lt;div class=&quot;sticky&quot;&gt;
        SOME CONTENT
   &lt;/div&gt;
&lt;/div&gt;</span>

When I added more elements inside the wrapper element, it started working.

<u>Why is that?</u>
The reason for that is that when an element is given the position: sticky style, the sticky item's container is the only area in which the sticky item can stick. The item doesn't have any elements to float over since it can only float over sibling elements, which, being an only child, it doesn't have.

<b>How CSS Position Sticky Really Works!</b>
CSS position sticky has two main parts, <b>sticky item & sticky container</b>.

<b>Sticky Item </b> — is the element that we defined with the <u>position: sticky</u> styles. The element will float when the viewport position matches the position definition, for example: <u>top: 0px</u>.

<b>Sticky Container</b> —is the HTML element which wraps the <b>sticky item</b>. This is the maximum area that the sticky item can float in.

<b>When you define an element with position: sticky you're automatically defining the parent element as a sticky container!</b>
This is very important to remember! The container is the scope of the sticky item, and the item can't get out of its sticky container.

This is the reason why in the previous example, the sticky item didn't stick in the first place: The sticky item was the only child element in a sticky container.
          `,
          code1: `&lt;div className=&quot;box&quot;&gt;&lt;/div&gt;
                &lt;div className=&quot;box position-sticky&quot; id=&quot;example-element&quot;&gt;position-sticky&lt;/div&gt;
                &lt;div className=&quot;box&quot;&gt;&lt;/div&gt;

            .box {
    background-color: rgba(0, 0, 255, .2);
    border: 3px solid #00f;
    float: left;
    width: 65px;
    height: 65px;
}

#example-element {
    background-color: #ff0;
    border: 3px solid red;
    color: #000;
    z-index: 1;
}

.position-sticky {
    position: sticky;
    top: 20px;
}
    


//------------
// Ex : 2
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Position Absolute Example&lt;/title&gt;
    &lt;style&gt;
        body {
            color: #fff;
            font-family: arial;
            font-weight: bold;
            font-size: 40px;
        }

        .main-container {
            max-width: 600px;
            margin: 0 auto;
            border: solid 10px green;
            padding: 10px;
            margin-top: 40px;
        }

        .main-container * {
            padding: 10px;
            background: #aaa;
            border: dashed 5px #000;
        }

        /* .main-container *+* {
            margin-top: 20px;
        } */

        .main-header {
            height: 50px;
            background: #aaa;
            border-color: red;
        }

        .main-content {
            min-height: 1000px;
        }

        .main-header {
            position: -webkit-sticky;
            position: sticky;
            top: 0;
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;main class=&quot;main-container&quot;&gt;
        &lt;header class=&quot;main-header&quot;&gt;HEADER&lt;/header&gt;
        &lt;div class=&quot;main-content&quot;&gt;MAIN CONTENT&lt;/div&gt;
        &lt;footer class=&quot;main-footer&quot;&gt;FOOTER&lt;/footer&gt;
    &lt;/main&gt;
&lt;/body&gt;

&lt;/html&gt;

//--------------
//Ex : 2
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Position Absolute Example&lt;/title&gt;
    &lt;style&gt;
        body {
            color: #fff;
            font-family: arial;
            font-weight: bold;
            font-size: 10px;
        }

        .main-container {
            /* max-width: 600px; */
            margin: 0 auto;
            border: solid 1px green;
            padding: 10px;
            margin-top: 40px;
        }

        .main-container * {
            padding: 10px;
            background: #aaa;
            border: dashed 1px #000;
        }

        /* .main-container *+* {
            margin-top: 20px;
        } */

        .main-header {
            height: 50px;
            background: #7b8ee2;
            border-color: red;
        }

        .main-content {
            min-height: 1000px;
        }

        .main-header {
            position: -webkit-sticky;
            position: sticky;
            top: 0;
        }


        .box {
            background-color: rgba(0, 0, 255, .2);
            border: 1px solid #00f;
            /* float: left; */
            width: 65px;
            height: 65px;
        }

        .abs-box {
            display: flex;
            flex-direction: row;
            padding: 15px;
            height: 600px;
            background-color: rgb(252, 252, 241);
        }

        .box-position-sticky {
            position: sticky;
            top: 300px;
            right: 300px;
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;main class=&quot;main-container&quot;&gt;
        &lt;header class=&quot;main-header&quot;&gt;HEADER position-sticky&lt;/header&gt;
        &lt;div class=&quot;main-content&quot;&gt;
            MAIN CONTENT
            &lt;div class=&#39;abs-box&#39;&gt;
                &lt;div class=&quot;box&quot;&gt;&lt;/div&gt;
                &lt;div class=&quot;box box-position-sticky&quot;&gt;position-sticky&lt;/div&gt;
                &lt;div class=&quot;box&quot;&gt;&lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;footer class=&quot;main-footer&quot;&gt;FOOTER&lt;/footer&gt;
    &lt;/main&gt;
&lt;/body&gt;


//------------
// Ex : 3

&lt;!-- DOESN&#39;T WORK!!! --&gt;
&lt;style&gt;
    .sticky{
        position: sticky;
        top: 0;
    }
&lt;/style&gt;
&lt;div class=&quot;wrapper&quot;&gt;
   &lt;div class=&quot;sticky&quot;&gt;
        SOME CONTENT
   &lt;/div&gt;
&lt;/div&gt;

`,
        },
        {
          text1: `<div class='table-res'>
                        <table border=1 >
    <thead>
        <tr>
            <th><strong>Property</strong></th>
            <th>
                <strong><code>position: relative</code></strong>
            </th>
            <th>
                <strong><code>position: absolute</code></strong>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Positioning Reference</strong></td>
            <td>Positioned relative to its <strong>normal position</strong> in the flow.</td>
            <td>Positioned relative to its nearest <strong>positioned ancestor</strong> (or viewport).</td>
        </tr>
        <tr>
            <td><strong>Effect on Document Flow</strong></td>
            <td><strong>Does not remove</strong> from flow; it still affects layout.</td>
            <td><strong>Removed from flow</strong>; does not affect the layout of other elements.</td>
        </tr>
        <tr>
            <td><strong>Common Usage</strong></td>
            <td>Adjusting position slightly, creating a context for absolute elements.</td>
            <td>Exact positioning, often for modals, tooltips, or dropdowns.</td>
        </tr>
        <tr>
            <td><strong>Stacking Context</strong></td>
            <td>Can create a stacking context if <code>z-index</code> is used.</td>
            <td>Always creates a stacking context if <code>z-index</code> is used.</td>
        </tr>
    </tbody>
</table>
</div>
`,
          code1: `&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Position Absolute Example&lt;/title&gt;
    &lt;style&gt;
        .container {
            background-color: lightgrey;
        }

        .box {
            position: absolute;
            /* Positioned relative to .container */
            top: 50px;
            left: 100px;
            width: 50px;
            height: 50px;
            background-color: red;
        }
        
        .circle-shape {
            position: relative;
            /* The reference point for absolute positioning */
            background-color: #0974ac;
            margin: 300px;
            width: 200px;
            height: 200px;
            border-radius: 50%;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
        }

    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;div class=&quot;circle-shape&quot;&gt;
            &lt;div class=&quot;box&quot;&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;circle-shape&quot;&gt;
            &lt;div class=&quot;box&quot;&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;circle-shape&quot;&gt;
            &lt;div class=&quot;box&quot;&gt;&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;`,
        },
        {
          text1: ``,
          code1: ``,
        },
      ]
    },
    {
      id: 52,
      title: "CSS Selectors:",
      note: [
        {
          text1: `CSS selectors are used to "find" (or select) the HTML elements you want to style.

We can divide CSS selectors into five categories:

=> Simple selectors (select elements based on name, id, class)
=> Combinator selectors (select elements based on a specific relationship between them)
=> Pseudo-class selectors (select elements based on a certain state)
=> Pseudo-elements selectors (select and style a part of an element)
=> Attribute selectors (select elements based on an attribute or attribute value)


<b>The CSS element Selector</b>
The element selector selects HTML elements based on the element name.


<b>The CSS id Selector</b>
The id selector uses the id attribute of an HTML element to select a specific element.
The id of an element is unique within a page, so the id selector is used to select one unique element!
To select an element with a specific id, write a hash (#) character, followed by the id of the element.

<b>The CSS class Selector</b>
The class selector selects HTML elements with a specific class attribute.
To select elements with a specific class, write a period (.) character, followed by the class name.

<b>The CSS Universal Selector</b>
The universal selector (*) selects all HTML elements on the page.


<b>The CSS Grouping Selector</b>
The grouping selector selects all the HTML elements with the same style definitions.
Look at the following CSS code (the h1, h2, and p elements have the same style definitions):

It will be better to group the selectors, to minimize the code.

To group selectors, separate each selector with a comma.
`,
          code1: `
          // Here, all &lt;p&gt; elements on the page will be center-aligned, with a red text color: 
        p {
          text-align: center;
          color: red;
        }
                  
        //--------

          // The CSS rule below will be applied to the HTML element with id="para1": 
        #para1 {
          text-align: center;
          color: red;
        }

        //--------

        // In this example all HTML elements with class="center" will be red and center-aligned: 
        .center {
          text-align: center;
          color: red;
        }

        // You can also specify that only specific HTML elements should be affected by a class.
        // In this example only <p> elements with class="center" will be red and center-aligned: 
        p.center {
          text-align: center;
          color: red;
        }


      // HTML elements can also refer to more than one class.
      // In this example the &lt;p&gt; element will be styled according to class="center" and to class="large": 
      &lt;p class=&quot;center large&quot;&gt;This paragraph refers to two classes.&lt;/p&gt;


// The CSS rule below will affect every HTML element on the page: 
* {
  text-align: center;
  color: blue;
}


// In this example we have grouped the selectors from the code above: 
h1, h2, p {
  text-align: center;
  color: red;
}
        `
        }
      ],
    },
    {
      id: 52,
      title: "Simple selectors",
      note: [
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
      title: "Pseudo-class selectors",
      note: [
        {
          text1: `Pseudo-classes are keywords added to selectors that specify a special state of the selected elements. They enable you to apply styles to elements based on user interactions, their position in the document, or specific conditions. For example, you can change the style of an element when the user hovers over it, or when a link is visited.
          
          A CSS <b>pseudo-class</b> is a keyword added to a selector that specifies a special state of the selected element(s). For example, the pseudo-class <b>:hover</b> can be used to select a button when a user's pointer hovers over the button and this selected button can then be styled.

          CSS pseudo-classes are keywords added to selectors that specify a special state of the selected elements. CSS pseudo-classes allow you to style elements based on their state or position in the document tree.

/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
  
A pseudo-class consists of a colon (<b>:</b>) followed by the pseudo-class name (e.g., <b>:hover</b>). A functional pseudo-class also contains a pair of parentheses to define the arguments (e.g., <b>:dir()</b>). The element that a pseudo-class is attached to is defined as an anchor element (e.g., <b>button</b> in case <b>button:hover</b>).

Pseudo-classes let you apply a style to an element not only in relation to the content of the document tree, but also in relation to external factors like the history of the navigator (<u>:visited</u>, for example), the status of its content (like <u>:checked</u> on certain form elements), or the position of the mouse (like <u>:hover</u>, which lets you know if the mouse is over an element or not).

=> CSS :hover Pseudo Class
=> CSS :active Pseudo Class
=> CSS :focus Pseudo Class
=> CSS :visited Pseudo Class
=> CSS :not Pseudo Class


<b>1. CSS :hover Pseudo Class</b>
The :hover pseudo-class is used to add special effects to an element when the mouse pointer hovers over it. This is commonly used for buttons and links to enhance interactivity.


<b>2. CSS :active Pseudo Class</b>
The :active pseudo-class applies to an element that is currently being activated by the user, such as when a button is clicked.

<b>3. CSS :focus Pseudo Class</b>
The :focus pseudo-class selects an element that is currently focused by the user, typically used with input fields in forms.

<b>4. CSS :visited Pseudo Class</b>
The :visited pseudo-class is used to select links that the user has already visited, allowing you to style them differently from unvisited links.

<b>5. CSS :not Pseudo Class</b>
The :not() pseudo-class selects elements that do not match a specific selector. This can be useful for applying styles to a group of elements while excluding certain ones.
The :not() pseudo-class is used to exclude certain elements from a set of selectors. It's a way to apply styles to elements except those that match the argument passed inside the :not().

Syntax:
<span style="color:red">
selector:not(excluded-selector) {
  /* styles */
}
</span>
          `,
          code1: `
          /* ------:hover Pseudo-class-------- */
                .box-hover {
            background-color: yellow;
            width: 300px;
            height: 200px;
            margin: auto;
            font-size: 40px;
            text-align: center;
        }

        .box-hover:hover {
            background-color: orange;
        }

        h1,
        h2 {
            color: green;
            text-align: center;
        }

        &lt;h2&gt;:hover Pseudo-class&lt;/h2&gt;
        &lt;div class=&quot;box-hover&quot;&gt;
            My color changes if you hover over me!
        &lt;/div&gt;


        /* ------:active Pseudo-class------- */
        .box-active {
            background-color: yellow;
            width: 300px;
            height: 200px;
            margin: auto;
            font-size: 40px;
            text-align: center;
        }

        .box-active:active {
            background-color: orange;
        }

        h1,
        h2 {
            color: green;
            text-align: center;
        }

                &lt;h2&gt;:active Pseudo-class&lt;/h2&gt;
        &lt;div class=&quot;box-active&quot;&gt;
            My color changes for a moment if you click me!
        &lt;/div&gt;

          

        /* ------- :focus Pseudo-class ------- */
        form {
            width: 300px;
            height: 200px;
            margin: 0 auto;
            text-align: center;
            line-height: 2rem;
        }

        label {
            width: 30%;
        }

        input {
            background-color: default;
            float: right;
        }

        input:focus {
            background-color: grey;
        }

        h1,
        h2 {
            color: green;
            text-align: center;
        }


          &lt;div&gt;
                &lt;h2&gt; :focus Pseudo-class &lt;/h2&gt;
        &lt;form&gt;
            &lt;label for=&quot;username&quot;&gt;Username:&lt;/label&gt;
            &lt;input type=&quot;text&quot; name=&quot;username&quot; placeholder=&quot;Enter your username&quot; /&gt;
            &lt;br&gt;

            &lt;label for=&quot;emailid&quot;&gt;Email-Id:&lt;/label&gt;
            &lt;input type=&quot;email&quot; name=&quot;emailid&quot; placeholder=&quot;Enter your email-id&quot; /&gt;

            &lt;label for=&quot;Password&quot;&gt;Password:&lt;/label&gt;
            &lt;input type=&quot;password&quot; name=&quot;Password&quot; placeholder=&quot;Enter your password&quot; /&gt;
        &lt;/form&gt;     
 &lt;/div&gt;




        /* -------:visited Pseudo-class------ */
        body {
            text-align: center;
        }

        h1,
        h2 {
            color: green;
        }

        a:visited {
            color: red;
        }

                  &lt;h2&gt;:visited Pseudo-class&lt;/h2&gt;
        &lt;p&gt;
            &lt;a href=&quot;https://www.geeksforgeeks.org/&quot; target=&quot;_blank&quot;&gt;
                My color changes once you visit this link
            &lt;/a&gt;
        &lt;/p&gt;



                  /* ----- :not pseudo-class ---- */
        /* In the following example,  the :not pseudo-class is used to select all h2 elements that do not have the class “special”. The color of these h2 elements will be set to orange. */

        h2:not(.special) {
            color: orange;
        }

        /* Apply styles to all &lt;li&gt; elements except the one with class 'highlight' */
        li:not(.highlight) {
            color: gray;
        }
            
        //html
                &lt;h2&gt;:not Pseudo-class&lt;/h2&gt;
        &lt;h2 class=&quot;special&quot;&gt;Special Header&lt;/h2&gt;

        &lt;ul&gt;
            &lt;li&gt;Item 1&lt;/li&gt;
            &lt;li class=&quot;highlight&quot;&gt;Item 2&lt;/li&gt;
            &lt;li&gt;Item 3&lt;/li&gt;
            &lt;li&gt;Item 4&lt;/li&gt;
        &lt;/ul&gt;
        `
        },        
        {
          text1: `<b>:root Pseudo-class</b>
          The <b>:root</b> CSS pseudo-class matches the root element of a tree representing the document. In HTML, <b>:root</b> represents the <html> element and is identical to the selector <b>html</b>, except that its specificity is higher.`,
          code1: `/* Selects the root element of the document:
   <html> in the case of HTML */
:root {
  background: yellow;
}
  
`
        },
        {
          text1: `:root can be useful for declaring <b>global CSS variables:</b>
          :root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
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
      title: "Pseudo-elements selectors",
      note: [
        {
          text1: `In CSS, pseudo-elements are used to style specific parts of an element, such as its first letter, first line, or content before or after the actual content of the element. They allow you to target and apply styles to parts of an element that are not directly represented in the HTML structure.

=> CSS ::first-line Pseudo Element
=> CSS ::first-letter Pseudo Element
=> CSS ::before Pseudo Element
=> CSS ::after Pseudo Element

<b>1. CSS ::first-line Pseudo Element</b>
Applies styles to the first line of a block-level element. Note that the length of the first line depends on many factors, including the width of the element, the width of the document, and the font size of the text. Note that only a few properties are applied for first-line pseudo-element like font properties, color properties, background properties, word-spacing, letter-spacing, text-decoration, vertical-align, text-transform, line-height, clear, etc.

<b>2. CSS ::first-letter Pseudo Element</b>
Applies styles to the first letter of the first line of a block-level element, but only when not preceded by other content (such as images or inline tables). Note that only a few properties are applied for first-letter pseudo-element like font properties, color properties, background properties, word-spacing, letter-spacing, text-decoration, vertical-align, text-transform, line-height, clear, etc.

<b>3. CSS ::before Pseudo Element</b>
Creates a pseudo-element that is the first child of the selected element. It is often used to add cosmetic content to an element with the content property. It is inline by de


<b>4. CSS ::after Pseudo Element</b>
Creates a pseudo-element that is the last child of the selected element. It is often used to add cosmetic content to an element with the content property. It is inline by default.
`,
          code1: `// ------------- ::first-line Pseudo Element ----------
                  body {
            background-color: whitesmoke;
            color: green;
            font-size: large;
            text-align: center;
        }
        
        p::first-line {
            color: Red;
            font-weight: bold;
        }
        
            &lt;p&gt;
        This is a paragraph using first-line
        pseudo-element to style first line of
        the paragraph. Content in the first 
        line turns red and becomes bold.
    &lt;/p&gt;


// ------------- ::first-letter Pseudo Element ----------
            body {
            background-color: whitesmoke;
            color: green;
            font-size: large;
            text-align: center;
        }

        p::first-letter {
            color: Red;
            font-size: 30px;
            font-weight: bold;
        }

        &lt;p&gt;
        This is a paragraph using first-letter
        pseudo-element to style first letter
        of the paragraph. first-letter element
        turned the first letter of this paragraph
        to red and made it bold.
    &lt;/p&gt;


    //---------------  ::before element  --------------

            body {
            background-color: whitesmoke;
            color: green;
            font-size: large;
            text-align: center;
        }
        
        p::before {
            content: '*';
            color: red;
            font-size: 30px;
        }


            &lt;p&gt;
        This is a paragraph to which
        we added red color quotation
        marks using ::before element.
    &lt;/p&gt;
    &lt;p&gt;
        This is a paragraph to which
        we added red color quotation
        marks using ::before element.
    &lt;/p&gt;


    //---------------  ::after element  --------------

            body {
            background-color: whitesmoke;
            color: green;
            font-size: large;
            text-align: center;
        }
        
        p::after {
            content: '"';
            color: red;
            font-size: 30px;
        }

            &lt;p&gt;
        This is a paragraph to which
        we added red color quotation
        marks using ::after element.
    &lt;/p&gt;
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
      id: 1,
      title: ":root Selector",
      note: [
        {
          text1: `The :root <b>selector is a CSS</b> pseudo-class that matches the root element of the document. In an HTML document, this is the <b> <html> element</b>.
        (Ex : 2)
While it behaves similarly to the <b>html</b> selector, the :root selector has higher specificity and is commonly used to define global styles or CSS custom properties (variables).

<b>:root Selector for CSS Variables</b> Ex : 2
The :root selector is particularly useful for defining CSS custom properties (variables), which can be used throughout the entire stylesheet for consistent theming.`,
          code1: `// ---------- Ex : 1 ----------
          :root {
    /* CSS properties */
    background-color: lightgray;
    font-size: 16px;
}
    


//------------ Ex : 2 ---------
       :root {
    --main-bg-color: #f0f0f0;
    --main-text-color: #333;
    --primary-color: #4CAF50;
    --font-size: 18px;
}

body {
    background-color: var(--main-bg-color);
    color: var(--main-text-color);
    font-size: var(--font-size);
}

button {
    background-color: var(--primary-color);
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}`
        },
      ]
    },
    {
      id: 52,
      title: "background",
      note: [
        {
          text1: `background-color
background-image
background-repeat
background-attachment
background-position
background (shorthand property)`,
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
      title: "CSS Borders",
      note: [
        {
          text1: `Border Width
          Border color
          Border Sides
          Border Shorthand
          Rounded Borders
          `,
          code1: ``
        },
        {
          text1: `dotted - Defines a dotted border
dashed - Defines a dashed border
solid - Defines a solid border
double - Defines a double border
groove - Defines a 3D grooved border. The effect depends on the border-color value
ridge - Defines a 3D ridged border. The effect depends on the border-color value
inset - Defines a 3D inset border. The effect depends on the border-color value
outset - Defines a 3D outset border. The effect depends on the border-color value
none - Defines no border
hidden - Defines a hidden border`,
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
      title: "CSS Margins",
      note: [
        {
          text1: `The CSS <u>margin</u> properties are used to create space around elements, outside of any defined borders.

With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left).

margin : top, right, bottom, left 

<b>Margin - Individual Sides</b>
CSS has properties for specifying the margin for each side of an element:

margin-top
margin-right
margin-bottom
margin-left

All the margin properties can have the following values:
auto - the browser calculates the margin
length - specifies a margin in px, pt, cm, etc.
% - specifies a margin in % of the width of the containing element
inherit - specifies that the margin should be inherited from the parent element`,
          code1: ``
        },
        {
          text1: `CSS Margin Collapse`,
          code1: `&lt;head&gt;
&lt;style&gt;
h1 {
  margin: 0 0 50px 0;
}

h2 {
  margin: 20px 0 0 0;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;p&gt;In this example the h1 element has a bottom margin of 50px and the h2 element has a top margin of 20px. So, the vertical margin between h1 and h2 should have been 70px (50px + 20px). However, due to margin collapse, the actual margin ends up being 50px.&lt;/p&gt;

&lt;h1&gt;Heading 1&lt;/h1&gt;
&lt;h2&gt;Heading 2&lt;/h2&gt;

&lt;/body&gt;
&lt;/html&gt;`
        },
      ],
    },
    {
      id: 52,
      title: "margin: auto;",
      note: [
        {
          text1: `The <b>margin: auto;</b> property works to center an element horizontally, but only when certain conditions are met. If it's not working in your case, there could be a few reasons why it's not centering as expected. Here's what to check and correct:

<b>1. Width is Required</b>:
For margin: auto to work and center the element, the element must have a defined width. If no width is set, the element will expand to the width of its parent container, and auto margins won't have an effect.

<b>2. Block Display (default for div)</b>:
The margin: auto works for block-level elements. By default, most elements like &lt;div&gt; are block elements, so this should work without needing any additional properties.
If the element is an inline or inline-block element, you will need to change it to a block-level element or apply other centering techniques.

<b>3. Parent Container</b>:
Ensure the parent container (the element surrounding <b>.main-box</b>) has enough space. If the parent container has limited space, <b>margin: auto;</b> may not work effectively.
If <b>.main-box</b> is inside <b>.parent-container</b>, this can help center it perfectly within the parent.

<b>4. Centering Vertically</b>:
If you want to center the <b>.main-box</b> both horizontally <b>and vertically</b>, you can use <b>flexbox</b> or <b>grid</b>.
Here's how you can use <b>Flexbox</b> to center both horizontally and vertically:
`,
          code1: ` // Width is Required:
          .main-box {
    background-color: rgb(112, 120, 158);
    width: 50%; /* or any specific width like px or % */
    margin: auto;
}

// Block Display (default for div):
.main-box {
    display: block; /* Ensure it is a block-level element */
    background-color: rgb(112, 120, 158);
    width: 50%; /* Set a width */
    margin: auto;
}


//Parent Container:
.parent-container {
    width: 100%;
    height: 100vh; /* Full viewport height */
    display: flex;
    justify-content: center;
    align-items: center;
}


//Centering Vertically:
.parent-container {
    display: flex;
    justify-content: center; /* Horizontally center */
    align-items: center; /* Vertically center */
    height: 100vh; /* Take up the full viewport height */
}

.main-box {
    background-color: rgb(112, 120, 158);
    width: 50%; /* Set a width */
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
      title: "CSS Padding",
      note: [
        {
          text1: `
The CSS padding properties are used to generate space around an element's content, inside of any defined borders.

With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).

<b>Padding - Individual Sides</b>
CSS has properties for specifying the padding for each side of an element:

padding-top
padding-right
padding-bottom
padding-left

All the padding properties can have the following values:
<b>length</b> - specifies a padding in px, pt, cm, etc.
<b>%</b> - specifies a padding in % of the width of the containing element
<b>inherit</b> - specifies that the padding should be inherited from the parent element

Note: Negative values are not allowed.`,
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
      title: "CSS Height, Width",
      note: [
        {
          text1: `The CSS height and width properties are used to set the height and width of an element.

The CSS max-width property is used to set the maximum width of an element.

<b>CSS Setting height and width</b>
The height and width properties are used to set the height and width of an element.

The height and width properties do not include padding, borders, or margins. It sets the height/width of the area inside the padding, border, and margin of the element.

<b>CSS height and width Values</b>
The height and width properties may have the following values:

auto - This is default. The browser calculates the height and width
length - Defines the height/width in px, cm, etc.
% - Defines the height/width in percent of the containing block
initial - Sets the height/width to its default value
inherit - The height/width will be inherited from its parent value
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
      title: "CSS Box Model",
      note: [
        {
          text1: `In CSS, the term "box model" is used when talking about design and layout.

The CSS box model is essentially a box that wraps around every HTML element. It consists of: content, padding, borders and margins. The image below illustrates the box model:
          
          Explanation of the different parts:
<b>Content</b> - The content of the box, where text and images appear
<b>Padding</b> - Clears an area around the content. The padding is transparent
<b>Border</b> - A border that goes around the padding and content
<b>Margin</b> - Clears an area outside the border. The margin is transparent


<div class="w3-boxmodel">
<div class="margin">
  <div class="border w3-theme">
    <div class="padding">
      <div class="content"></div>
     </div>
  </div>
</div>
</div>`,
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
      title: "CSS Outline",
      note: [
        {
          text1: `CSS has the following outline properties:
The CSS <b>outline</b> property is used to draw a line outside an element's border. Unlike <b>border</b>, it does not take up space in the box model and does not affect element dimensions. It is often used for accessibility (e.g., focus styles) and highlighting elements.

width → Specifies the thickness (e.g., 1px, 2px, thick).
style → Defines the outline style (solid, dashed, dotted, etc.).
color → Specifies the outline color.

outline-style
outline-color
outline-width
outline-offset
outline`,
          code1: `      button {
  outline: 2px solid red;
}
  &lt;button&gt; btn &lt;/button&gt;`
        },
        {
          text1: ``,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "CSS Text",
      note: [
        {
          text1: `<b>Text Color</b>
The color property is used to set the color of the text. The color is specified by:

a color name - like "red"
a HEX value - like "#ff0000"
an RGB value - like "rgb(255,0,0)"`,
          code1: `body {
  color: blue;
}

h1 {
  color: green;
}`
        },
        {
          text1: `<b>Text Alignment and Text Direction</b>
In this chapter you will learn about the following properties:

=> text-align
=> text-align-last
=> direction
=> unicode-bidi
=> vertical-align

<b>Text Alignment</b>
The <u>text-align</u> property is used to set the horizontal alignment of a text.

A text can be left or right aligned, centered, or justified.

The following example shows center aligned, and left and right aligned text (left alignment is default if text direction is left-to-right, and right alignment is default if text direction is right-to-left):

When the <u>text-align</u> property is set to "justify", each line is stretched so that every line has equal width, and the left and right margins are straight (like in magazines and newspapers):
`,
          code1: `h1 {
  text-align: center;
}

h2 {
  text-align: left;
}

h3 {
  text-align: right;
}
  
//-------------
div {
  text-align: justify;
}
`
        },
        {
          text1: `<b>Text Align Last</b>
The <u>text-align-last</u> property specifies how to align the last line of a text.`,
          code1: `//Align the last line of text in three <p> elements:
          p.a {
  text-align-last: right;
}

p.b {
  text-align-last: center;
}

p.c {
  text-align-last: justify;
}`
        },
        {
          text1: `<b>Text Direction</b>
The <u>direction</u> and <u>unicode-bidi</u> properties can be used to change the text direction of an element:`,
          code1: `p {
  direction: rtl;
  unicode-bidi: bidi-override;
}`
        },
        {
          text1: `<b>Vertical Alignment</b>
The <u>vertical-align</u> property sets the vertical alignment of an element.`,
          code1: `img.a {
  vertical-align: baseline;
}

img.b {
  vertical-align: text-top;
}

img.c {
  vertical-align: text-bottom;
}

img.d {
  vertical-align: sub;
}

img.e {
  vertical-align: super;
}`
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
      title: "CSS Layout - The display Property",
      note: [
        {
          text1: `The <b>display</b> property is the most important CSS property for controlling layout.

<b>The display Property</b>
The <b>display</b> property is used to specify how an element is shown on a web page.

Every HTML element has a default display value, depending on what type of element it is. The default display value for most elements is <b>block or inline.</b>

The <b>display</b> property is used to change the default display behavior of HTML elements.



<b>Block-level Elements</b>
A block-level element ALWAYS starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

The &lt;div&gt; element is a block-level element.

Examples of block-level elements:
=>  &lt;div&gt;
=>  &lt;h1&gt; - &lt;h6&gt;
=>  &lt;p&gt;
=>  &lt;form&gt;
=>  &lt;header&gt;
=>  &lt;footer&gt;
=>  &lt;section&gt;


<b>Inline Elements</b>
An inline element DOES NOT start on a new line and only takes up as much width as necessary.

This is an inline &lt;span&gt; element inside a paragraph.

<b>Examples of inline elements:</b>
&lt;span&gt;
&lt;a&gt;
&lt;img&gt;




<div class='table-res'>
                     <table class="ws-table-all notranslate" border=1 >
  <tbody><tr>
    <th style="width:25%">Value</th>
    <th>Description</th>
  </tr>
    <tr>
    <td>inline</td>
    <td>Displays an element as an inline element</td>
    </tr>
  <tr>
    <td>block</td>
    <td>Displays an element as a block element</td>
    </tr>
  <tr>
    <td>contents</td>
    <td>Makes the container disappear, making the child elements children of the 
    element the next level up in the DOM</td>
    </tr>
  <tr>
    <td>flex</td>
    <td>Displays an element as a block-level flex container</td>
    </tr>
  <tr>
    <td>grid</td>
    <td>Displays an element as a block-level grid container</td>
    </tr>
  <tr>
    <td>inline-block</td>
    <td>Displays an element as an inline-level block container. The element itself is formatted as an inline 
    element, but you can apply height and width values</td>
    </tr>
  <tr>
    <td>inline-flex</td>
    <td>Displays an element as an inline-level flex container</td>
    </tr>
  <tr>
    <td>inline-grid</td>
    <td>Displays an element as an inline-level grid container</td>
    </tr>
  <tr>
    <td>inline-table</td>
    <td>The element is displayed as an inline-level table</td>
    </tr>
  <tr>
    <td>list-item</td>
    <td>Let the element behave like a &lt;li&gt; element</td>
    </tr>
  <tr>
    <td>run-in</td>
    <td>Displays an element as either block or inline, depending on context </td>
  </tr>
    <tr>
    <td>table</td>
    <td>Let the element behave like a &lt;table&gt; element</td>
    </tr>
  <tr>
    <td>table-caption</td>
    <td>Let the element behave like a &lt;caption&gt; element</td>
    </tr>
  <tr>
    <td>
      table-column-group</td>
    <td>Let the element behave like a &lt;colgroup&gt; element</td>
    </tr>
  <tr>
    <td>table-header-group</td>
    <td>Let the element behave like a &lt;thead&gt; element</td>
    </tr>
  <tr>
    <td>table-footer-group</td>
    <td>Let the element behave like a &lt;tfoot&gt; element</td>
    </tr>
  <tr>
    <td>table-row-group</td>
    <td>Let the element behave like a &lt;tbody&gt; element</td>
    </tr>
  <tr>
    <td>table-cell</td>
    <td>Let the element behave like a &lt;td&gt; element</td>
    </tr>
  <tr>
    <td>table-column</td>
    <td>Let the element behave like a &lt;col&gt; element</td>
    </tr>
  <tr>
    <td>table-row</td>
    <td>Let the element behave like a &lt;tr&gt; element</td>
    </tr>
  <tr>
    <td>none</td>
    <td>The element is completely removed</td>
  </tr>
  <tr>
    <td>initial</td>
    <td>Sets this property to its default value</td>
    </tr>
  <tr>
    <td>inherit</td>
    <td>Inherits this property from its parent element</td>
    </tr>
  </tbody></table>
                      </div>
`,
          code1: ``
        },
        {
          text1: `   <b>     Display: none;</b>
display: none; is commonly used with JavaScript to hide and show elements without deleting and recreating them. Take a look at our last example on this page if you want to know how this can be achieved.

The &lt;script&gt; element uses display: none; as default.

<u>Click to show panel</u>
This panel contains a &lt;div&gt; element, which is hidden by default <u>(display: none;)</u>.
It is styled with CSS, and we use JavaScript to show it (change it to <u>(display: block;)</u>.


<b>Override The Default Display Value</b>
As mentioned, every element has a default display value. However, you can override this.

Changing an inline element to a block element, or vice versa, can be useful for making the page look a specific way, and still follow the web standards.




<b>Note</b>: Setting the display property of an element only changes how the element is displayed, NOT what kind of element it is. So, an inline element with display: block; is not allowed to have other block elements inside it.


`,
          code1: `//A common example is making inline &lt;li&gt; elements for horizontal menus:
          li {
  display: inline;
}
  

// The following example displays &lt;span&gt; elements as block elements:
span {
  display: block;
}

// The following example displays &lt;a&gt; elements as block elements:

a {
  display: block;
}
  `
        },
        {
          text1: `<h2>Hide an Element - display:none or visibility:hidden?</h2>

    <div class="w3-content test" style="max-width:920px">
        <div class="w3-row-padding w3-center" style="margin:0 -16px">
            <div class="w3-col w3-border" id="imgbox1" style="width: 30%; display: block;">
                <p style="word-wrap: break-word;"><code class="w3-codespan" style="wrap">display:none</code></p>
                <img src="./CSS Layout - The display Property_files/img_5terre.jpg" style="width:100%" alt="Italy">
                <p><button class="ws-btn w3-block" onclick="removeElement()">Remove</button></p>
            </div>
            <div class="w3-col w3-border" style="width: 30%; visibility: visible;" id="imgbox2">
                <p style="word-wrap: break-word;"><code class="w3-codespan">visibility:hidden</code></p>
                <img src="./CSS Layout - The display Property_files/img_forest.jpg" style="width:100%" alt="Forest">
                <p><button class="ws-btn w3-block" onclick="changeVisibility()">Hide</button></p>
            </div>
            <div class="w3-col w3-border" style="width:30%;">
                <p>Reset</p>
                <img src="./CSS Layout - The display Property_files/img_lights.jpg" style="width:100%" alt="Lights">
                <p><button class="ws-btn w3-block" onclick="resetElement()">Reset All</button></p>
            </div>
        </div>
    </div>
    
    Hiding an element can be done by setting the <b>display</b> property to <b>none</b>. The element will be hidden, and the page will be displayed as if the element is not there:`,
          code1: `h1.hidden {
  display: none;
}
  
// "visibility:hidden;" also hides an element.

// However, the element will still take up the same space as before. The element will be hidden, but still affect the layout:

// Example
h1.hidden {
  visibility: hidden;
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
      title: "max-width",
      note: [
        {
          text1: `<b>Using width, max-width and margin: auto;</b>
As mentioned in the previous chapter; a block-level element always takes up the full width available (stretches out to the left and right as far as it can).

Setting the width of a block-level element will prevent it from stretching out to the edges of its container. Then, you can set the margins to auto, to horizontally center the element within its container. The element will take up the specified width, and the remaining space will be split equally between the two margins:

This &lt;div&gt; element has a width of 500px, and margin set to auto.

<b>Note</b>: The problem with the &lt;div&gt; above occurs when the browser window is smaller than the width of the element. The browser then adds a horizontal scrollbar to the page.

Using max-width instead, in this situation, will improve the browser's handling of small windows. This is important when making a site usable on small devices:

This &lt;div&gt; element has a max-width of 500px, and margin set to auto.

<b>Tip</b>: Resize the browser window to less than 500px wide, to see the difference between the two divs!

Here is an example of the two divs above:`,
          code1: `div.ex1 {
  width: 500px;
  margin: auto;
  border: 3px solid #73AD21;
}

div.ex2 {
  max-width: 500px;
  margin: auto;
  border: 3px solid #73AD21;
}`
        }
      ],
    },
    {
      id: 52,
      title: "z-index property",
      note: [
        {
          text1: `The z-index property specifies the stack order of an element.

The z-index Property
When elements are positioned, they can overlap other elements.

The z-index property specifies the stack order of an element (which element should be placed in front of, or behind, the others).

An element can have a positive or negative stack order:

Note: z-index only works on positioned elements (<u>position: absolute, position: relative, position: fixed, or position: sticky</u>) and flex items (elements that are direct children of <u>display: flex</u> elements).
`,
          code1: `img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}`
        }
      ],
    },
    {
      id: 52,
      title: "CSS Overflow",
      note: [
        {
          text1: `The CSS <u>overflow</u> property controls what happens to content that is too big to fit into an area.
          The <u>overflow</u> property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.

The overflow property has the following values:

=> <b>visible</b> - Default. The overflow is not clipped. The content renders outside the element's box
=> <b>hidden</b> - The overflow is clipped, and the rest of the content will be invisible
=> <b>scroll</b> - The overflow is clipped, and a scrollbar is added to see the rest of the content
=> <b>auto</b> - Similar to <u>scroll</u>, but it adds scrollbars only when necessary

=> <b>Note</b>: The overflow property only works for block elements with a specified height.

<b>Note</b>: In OS X Lion (on Mac), scrollbars are hidden by default and only shown when being used (even though "overflow:scroll" is set).`,
          code1: ``
        },
        {
          text1: `<b>overflow: visible</b>
By default, the overflow is visible, meaning that it is not clipped and it renders outside the element's box:`,
          code1: `&lt;head&gt;
&lt;style&gt;
div {
  background-color: coral;
  width: 200px;
  height: 65px;
  border: 1px solid;
  overflow: visible;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h2&gt;Overflow: visible&lt;/h2&gt;

&lt;p&gt;By default, the overflow is visible, meaning that it is not clipped and it renders outside the element&#39;s box:&lt;/p&gt;

&lt;div&gt;You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element&#39;s box.&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;`
        },
        {
          text1: `<b>overflow: hidden</b>
With the hidden value, the overflow is clipped, and the rest of the content is hidden:`,
          code1: `&lt;head&gt;
&lt;style&gt;
div {
  background-color: coral;
  width: 200px;
  height: 65px;
  border: 1px solid black;
  overflow: hidden;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h2&gt;Overflow: hidden&lt;/h2&gt;

&lt;p&gt;With the hidden value, the overflow is clipped, and the rest of the content is hidden:&lt;/p&gt;
&lt;p&gt;Try to remove the overflow property to understand how it works.&lt;/p&gt;

&lt;div&gt;You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element&#39;s box.&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
`
        },
        {
          text1: `<b>overflow: scroll</b>
Setting the value to scroll, the overflow is clipped and a scrollbar is added to scroll inside the box. Note that this will add a scrollbar both horizontally and vertically (even if you do not need it):`,
          code1: `&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
div {
  background-color: coral;
  width: 200px;
  height: 100px;
  border: 1px solid black;
  overflow: scroll;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h2&gt;Overflow: scroll&lt;/h2&gt;

&lt;p&gt;Setting the overflow value to scroll, the overflow is clipped and a scrollbar is added to scroll inside the box. Note that this will add a scrollbar both horizontally and vertically (even if you do not need it):&lt;/p&gt;

&lt;div&gt;You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element&#39;s box.&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;`
        },
        {
          text1: `<b>overflow: auto</b>
The auto value is similar to scroll, but it adds scrollbars only when necessary:`,
          code1: `&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
div {
  background-color: coral;
  width: 200px;
  height: 65px;
  border: 1px solid black;
  overflow: auto;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h2&gt;Overflow: auto&lt;/h2&gt;

&lt;p&gt;The auto value is similar to scroll, only it add scrollbars when necessary:&lt;/p&gt;

&lt;div&gt;You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element&#39;s box.&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;`
        },
        {
          text1: `<b>overflow-x and overflow-y</b>
The <u>overflow-x</u> and <u>overflow-y</u> properties specifies whether to change the overflow of content just horizontally or vertically (or both):

<u>overflow-x</u> specifies what to do with the left/right edges of the content.
<u>overflow-y</u> specifies what to do with the top/bottom edges of the content.`,
          code1: `&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
div {
  background-color: coral;
  width: 200px;
  height: 65px;
  border: 1px solid black;
  overflow-x: hidden;
  overflow-y: scroll;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h2&gt;Overflow-x and overflow-y&lt;/h2&gt;

&lt;p&gt;You can also change the overflow of content horizontally or vertically.&lt;/p&gt;
&lt;p&gt;overflow-x specifies what to do with the left/right edges of the content.&lt;/p&gt;
&lt;p&gt;overflow-y specifies what to do with the top/bottom edges of the content.&lt;/p&gt;

&lt;div&gt;You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element&#39;s box.&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;`
        },
        {
          text1: `By using <b>overflow-wrap: break-word</b>, the word is wrapped to fit within the box, preventing overflow.`,
          code1: `&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; 
          content=&quot;width=device-width, initial-scale=1.0&quot;&gt;

    &lt;style&gt;
        body {
            background-color: #242B2E;
            color: white;
        }

        .box {
            margin: 30px;
            height: 100px;
            width: 100px;
            background-color: #FF6666;
            overflow-wrap: break-word;
        }

        .p {
            color: white;
            margin: 5px;
            padding: 10px;
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div class=&quot;box&quot;&gt;
        &lt;p&gt;
            try to read this word
            chekolosvakialRegion
        &lt;/p&gt;
    &lt;/div&gt;
&lt;/body&gt;`
        }
      ],
    },
    {
      id: 52,
      title: "CSS Layout - float and clear",
      note: [
        {
          text1: `The CSS <u>float</u> property specifies how an element should float.

The CSS <u>clear</u> property specifies what elements can float beside the cleared element and on which side.
<b>The float Property</b>
The float property is used for positioning and formatting content e.g. let an image float left to the text in a container.

The float property can have one of the following values:

<u>left</u> - The element floats to the left of its container
<u>right</u> - The element floats to the right of its container
<u>none</u> - The element does not float (will be displayed just where it occurs in the text). This is default
<u>inherit</u> - The element inherits the float value of its parent
In its simplest use, the float property can be used to wrap text around images.



<h2>Float Right (float: right;)</h2>
<div class="float-right-b">
<p><img src="../assets/images/vue/composition API vs Options API.webp" alt="Pineapple" style="width:170px;height:170px;margin-left:15px;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.</p>
</div>`,
          code1: `img {
  float: right;
}
  
img {
  float: left;
}
  
img {
  float: none;
}
`
        },
        {
          text1: `<b>Example - Float Next To Each Other</b>
Normally div elements will be displayed on top of each other. However, if we use float: left we can let elements float next to each other:`,
          code1: `&lt;head&gt;
&lt;style&gt;
div {
  float: left;
  padding: 15px; 
}

.div1 {
  background: red;
}

.div2 {
  background: yellow;
}

.div3 {
  background: green;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h2&gt;Float Next To Each Other&lt;/h2&gt;

&lt;p&gt;In this example, the three divs will float next to each other.&lt;/p&gt;

&lt;div class=&quot;div1&quot;&gt;Div 1&lt;/div&gt;
&lt;div class=&quot;div2&quot;&gt;Div 2&lt;/div&gt;
&lt;div class=&quot;div3&quot;&gt;Div 3&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;`
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
      title: "CSS Layout - clear and clearfix",
      note: [
        {
          text1: `<b>The clear Property</b>
When we use the float property, and we want the next element below (not on right or left), we will have to use the <u>clear</u> property.

The <u>clear</u> property specifies what should happen with the element that is next to a floating element.

The <u>clear</u> property can have one of the following values:

<u>none</u> - The element is not pushed below left or right floated elements. This is default
<u>left</u> - The element is pushed below left floated elements
<u>right</u> - The element is pushed below right floated elements
<u>both</u> - The element is pushed below both left and right floated elements
<u>inherit</u> - The element inherits the clear value from its parent

When clearing floats, you should match the clear to the float: If an element is floated to the left, then you should clear to the left. Your floated element will continue to float, but the cleared element will appear below it on the web page.


<h2>Without clear</h2>
<div class="div1">div1</div>
<div class="div2">div2 - Notice that div2 is after div1 in the HTML code. However, since div1 floats to the left, the text in div2 flows around div1.</div>
<br><br>

<h2>With clear</h2>
<div class="div3">div3</div>
<div class="div4">div4 - Here, clear: left; moves div4 down below the floating div3. The value "left" clears elements floated to the left. You can also clear "right" and "both".</div>
`,
          code1: `// This example clears the float to the left. Here, it means that the &lt;div2&gt; element is pushed below the left floated &lt;div1&gt; element:
          
          
          &lt;head&gt;
&lt;style&gt;
.div1 {
  float: left;
  padding: 10px;
  border: 3px solid #73AD21;
}

.div2 {
  padding: 10px;
  border: 3px solid red;
}

.div3 {
  float: left;
  padding: 10px;  
  border: 3px solid #73AD21;
}

.div4 {
  padding: 10px;
  border: 3px solid red;
  clear: left;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h2&gt;Without clear&lt;/h2&gt;
&lt;div class=&quot;div1&quot;&gt;div1&lt;/div&gt;
&lt;div class=&quot;div2&quot;&gt;div2 - Notice that div2 is after div1 in the HTML code. However, since div1 floats to the left, the text in div2 flows around div1.&lt;/div&gt;
&lt;br&gt;&lt;br&gt;

&lt;h2&gt;With clear&lt;/h2&gt;
&lt;div class=&quot;div3&quot;&gt;div3&lt;/div&gt;
&lt;div class=&quot;div4&quot;&gt;div4 - Here, clear: left; moves div4 down below the floating div3. The value &quot;left&quot; clears elements floated to the left. You can also clear &quot;right&quot; and &quot;both&quot;.&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;`
        },
        {
          text1: `<b>The clearfix Hack</b>
          If a floated element is taller than the containing element, it will "overflow" outside of its container. We can then add a clearfix hack to solve this problem:
          
          <h2>Without Clearfix</h2>

<p>This image is floated to the right. It is also taller than the element containing it, so it overflows outside of its container:</p>

<div class="clearfix-hack-border">
  <img class="img1" src="../assets/images/vue/composition API vs Options API.webp" alt="Pineapple" width="170" height="170">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...
</div>

<h2 style="clear:right">With Clearfix</h2>
<p>We can fix this by adding a clearfix class with overflow: auto; to the containing element:</p>

<div class="clearfix-hack-border clearfix">
  <img class="img2" src="../assets/images/vue/composition API vs Options API.webp" alt="Pineapple" width="170" height="170">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...
</div>
          `,
          code1: `&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
.clearfix-hack-border {
  border: 3px solid #4CAF50;
  padding: 5px;
}

.img1 {
  float: right;
}

.img2 {
  float: right;
}

.clearfix {
  overflow: auto;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;b&gt; The clearfix Hack&lt;/b&gt;
          If a floated element is taller than the containing element, it will &quot;overflow&quot; outside of its container. We can then add a clearfix hack to solve this problem:
          
          &lt;h2&gt;Without Clearfix&lt;/h2&gt;

&lt;p&gt;This image is floated to the right. It is also taller than the element containing it, so it overflows outside of its container:&lt;/p&gt;

&lt;div class=&quot;clearfix-hack-border&quot;&gt;
  &lt;img class=&quot;img1&quot; src=&quot;../assets/images/vue/composition API vs Options API.webp&quot; alt=&quot;Pineapple&quot; width=&quot;170&quot; height=&quot;170&quot;/&gt;
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...
&lt;/div&gt;

&lt;h2 style=&quot;clear:right&quot;&gt;With Clearfix&lt;/h2&gt;
&lt;p&gt;We can fix this by adding a clearfix class with overflow: auto; to the containing element:&lt;/p&gt;

&lt;div class=&quot;clearfix-hack-border clearfix&quot;&gt;
  &lt;img class=&quot;img2&quot; src=&quot;../assets/images/vue/composition API vs Options API.webp&quot; alt=&quot;Pineapple&quot; width=&quot;170&quot; height=&quot;170&quot;&gt;
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...
&lt;/div&gt;`
        },
        {
          text1: `The <u>overflow: auto</u> clearfix works well as long as you are able to keep control of your margins and padding (else you might see scrollbars). The <b>new, modern clearfix hack</b> however, is safer to use, and the following code is used for most webpages:
          
          <h2>Without Clearfix</h2>

<p>This image is floated to the right. It is also taller than the element containing it, so it overflows outside of its container:</p>

<div class="clearfix-hack-borde2"> 
  <img class="img1" src="../assets/images/vue/composition API vs Options API.webp" alt="Pineapple" width="170" height="170">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...
</div>

<h2 style="clear:right">With New Modern Clearfix</h2>
<p>Add the clearfix hack to the containing element, to fix this problem:</p>

<div class="clearfix2 clearfix-hack-borde2 ">
  <img class="img2" src="../assets/images/vue/composition API vs Options API.webp" alt="Pineapple" width="170" height="170">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...
</div>
          `,
          code1: `//-----------------
          .clearfix::after {
  content: "";
  clear: both;
  display: table;
}
 //-----------------

          .clearfix-hack-borde2  {
    border: 3px solid #4CAF50;
    padding: 5px;
  }
  
  .img1 {
    float: right;
  }
  
  .img2 {
    float: right;
  }
  
  .clearfix2::after {
    content: "";
    clear: both;
    display: table;
  }
    
  
  &lt;p&gt;This image is floated to the right. It is also taller than the element containing it, so it overflows outside of its container:&lt;/p&gt;

&lt;div class=&quot;clearfix-hack-borde2&quot;&gt; 
  &lt;img class=&quot;img1&quot; src=&quot;../assets/images/vue/composition API vs Options API.webp&quot; alt=&quot;Pineapple&quot; width=&quot;170&quot; height=&quot;170&quot;/&gt;
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...
&lt;/div&gt;

&lt;h2 style=&quot;clear:right&quot;&gt;With New Modern Clearfix&lt;/h2&gt;
&lt;p&gt;Add the clearfix hack to the containing element, to fix this problem:&lt;/p&gt;

&lt;div class=&quot;clearfix2 clearfix-hack-borde2 &quot;&gt;
  &lt;img class=&quot;img2&quot; src=&quot;../assets/images/vue/composition API vs Options API.webp&quot; alt=&quot;Pineapple&quot; width=&quot;170&quot; height=&quot;170&quot;&gt;
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...
&lt;/div&gt;`
        },
        {
          text1: ``,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "display: block",
      note: [
        {
          text1: `A block-level element takes up the full width of its parent container (by default) and always starts on a new line. It stretches across the width of its parent element, with any content following it appearing on a new line.

<b>Characteristics of Block Elements</b>:
-> They <b>occupy the full width</b> of their parent container (unless a width is explicitly set).
-> They <b>start on a new line</b> and push subsequent elements down to the next line.
-> Can have <b>height, width, margin, padding</b>, etc.
`,
          code1: `        .main-box {
            background-color: rgb(112, 120, 158);
            width: 50%;
            margin: auto;
            padding:5px;
        }

        .class-block {
            display: block;
            background-color: #455de7;
            padding: 12px;
            margin:10px;
        }
            
            &lt;div class=&quot;main-box&quot;&gt;
        &lt;div class=&quot;class-block&quot;&gt;Block Element&lt;/div&gt;
        &lt;div class=&quot;class-block&quot;&gt;Another Block Element&lt;/div&gt;
        &lt;div class=&quot;class-block&quot;&gt;Another Block Element&lt;/div&gt;
        &lt;div class=&quot;class-block&quot;&gt;Another Block Element&lt;/div&gt;
        &lt;div class=&quot;class-block&quot;&gt;Another Block Element&lt;/div&gt;
        &lt;div class=&quot;class-block&quot;&gt;Another Block Element&lt;/div&gt;
    &lt;/div&gt;`
        },
        {
          text1: `    <div class="main-box">
        <div class="class-block">Block Element</div>
        <div class="class-block">Another Block Element</div>
        <div class="class-block">Another Block Element</div>
        <div class="class-block">Another Block Element</div>
        <div class="class-block">Another Block Element</div>
        <div class="class-block">Another Block Element</div>
    </div>`,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "display: inline",
      note: [
        {
          text1: `The <b>display: inline;</b> CSS property is used to make an element behave like an inline element. An <b>inline</b> element does not start on a new line and only takes up as much width as necessary for its content. It will appear <b>next to other inline elements</b> in the same line, and they will flow horizontally across the parent container.

<b>Key Characteristics of display: inline;</b>:
<b>Does not create a new line</b>: Inline elements do not start on a new line. They are placed in the same line as other inline elements (if space allows).
<b>Width and height</b>: You cannot set the width or height properties on inline elements directly. The element will only take as much space as its content requires.
<b>Padding and margin</b>: You can set padding and margin on inline elements, but only horizontally (left and right). Vertical margins or padding (top and bottom) do not affect the layout in the same way they do for block elements.
<b>Cannot contain block elements</b>: Inline elements cannot contain block-level elements directly.`,
          code1: `            .main-box {
            background-color: rgb(112, 120, 158);
            width: 50%;
            margin: auto;
            padding:5px;
        }
            
        .class-inline {
            display:inline;
            background-color: #455de7;
            padding: 12px;
            margin:10px;
        }
            
            &lt;div class=&quot;main-box&quot;&gt;
        &lt;div class=&quot;class-inline&quot;&gt;Block Element&lt;/div&gt;
        &lt;div class=&quot;class-inline&quot;&gt;Another Block Element&lt;/div&gt;
        &lt;div class=&quot;class-inline&quot;&gt;Another Block Element&lt;/div&gt;
        &lt;div class=&quot;class-inline&quot;&gt;Another Block Element&lt;/div&gt;
        &lt;div class=&quot;class-inline&quot;&gt;Another Block Element&lt;/div&gt;
        &lt;div class=&quot;class-inline&quot;&gt;Another Block Element&lt;/div&gt;
    &lt;/div&gt;`
        },
        {
          text1: `    <div class="main-box">
        <div class="class-inline">Block Element</div>
        <div class="class-inline">Another Block Element</div>
        <div class="class-inline">Another Block Element</div>
        <div class="class-inline">Another Block Element</div>
        <div class="class-inline">Another Block Element</div>
        <div class="class-inline">Another Block Element</div>
    </div>`,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "display: inline-block",
      note: [
        {
          text1: `<b>The display: inline-block Value</b>
Compared to <u>display: inline</u>, the major difference is that <u>display: inline-block</u> allows to set a width and height on the element.

Also, with <u>display: inline-block</u>, the top and bottom margins/paddings are respected, but with <u>display: inline</u> they are not.

Compared to <u>display: block</u>, the major difference is that <u>display: inline-block</u> does not add a line-break after the element, so the element can sit next to other elements.
The following example shows the different behavior of <u>display: inline, display: inline-block</u> and <u>display: block:</u>

An <b>inline-block</b> element is similar to an <b>inline</b> element in that it does not force a new line, but it behaves like a <b>block</b> element in terms of allowing <b>width, height, margin</b>, and <b>padding</b> to be applied.

<b>Characteristics of Inline-block Elements</b>:
-> They <b>do not take up the full width</b> of their parent container. They only take up the width necessary for their content, just like <b>inline</b> elements.
-> They <b>do not break onto a new line</b>. Multiple <b>inline-block</b> elements can appear <b>side by side</b> on the same line.
-> Can have <b>height, width, margin, padding</b>, etc.
-> Unlike <b>inline</b> elements, they can respect <b>width and height</b>.
`,
          code1: `        .class-inline-block {
            display: inline-block;
            background-color: #455de7;
            padding: 12px;
            margin:10px;
        }
            
        &lt;div class=&quot;main-box&quot;&gt;
        &lt;div class=&quot;class-inline-block&quot;&gt;Block Element&lt;/div&gt;
        &lt;div class=&quot;class-inline-block&quot;&gt;Another Block Element&lt;/div&gt;
        &lt;div class=&quot;class-inline-block&quot;&gt;Another Block Element&lt;/div&gt;
        &lt;div class=&quot;class-inline-block&quot;&gt;Another Block Element&lt;/div&gt;
        &lt;div class=&quot;class-inline-block&quot;&gt;Another Block Element&lt;/div&gt;
        &lt;div class=&quot;class-inline-block&quot;&gt;Another Block Element&lt;/div&gt;
    &lt;/div&gt;`
        },
        {
          text1: `    <div class="main-box">
        <div class="class-inline-block">Block Element</div>
        <div class="class-inline-block">Another Block Element</div>
        <div class="class-inline-block">Another Block Element</div>
        <div class="class-inline-block">Another Block Element</div>
        <div class="class-inline-block">Another Block Element</div>
        <div class="class-inline-block">Another Block Element</div>
    </div>`,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "CSS Layout - Horizontal & Vertical Align",
      note: [
        {
          text1: `<b>Center Align Elements</b>
To horizontally center a block element (like &lt;div&gt;), use <u>margin: auto;</u>

Setting the width of the element will prevent it from stretching out to the edges of its container.

The element will then take up the specified width, and the remaining space will be split equally between the two margins:

<b>Center Align Elements</b>
<p>To horizontally center a block element (like div), use margin: auto;</p>

<div class="center">
  <p>Hello World!</p>
</div>
`,
          code1: `.center {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}`
        },
        {
          text1: `<b>Center Align Text</b>
To just center the text inside an element, use text-align: center;`,
          code1: `.center {
  text-align: center;
  border: 3px solid green;
}`
        },
        {
          text1: `<b>Center an Image</b>
To center an image, set left and right margin to <u>auto</u> and make it into a <u>block</u> element:`,
          code1: `img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}`
        },
        {
          text1: `<b>Left and Right Align - Using position</b>
One method for aligning elements is to use <u>position: absolute;</u>

<b>Right align with the position property</b>

<p>An example of how to right align elements with the position property:</p>

<div class="right">
  <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.</p>
</div>
`,
          code1: `.right {
  position: absolute;
  right: 0px;
  width: 300px;
  border: 3px solid #73AD21;
  padding: 10px;
}
  
// Left and Right Align - Using float
// Another method for aligning elements is to use the float property:
.right {
  float: right;
  width: 300px;
  border: 3px solid #73AD21;
  padding: 10px;
}

// Center Vertically - Using padding
There are many ways to center an element vertically in CSS. A simple solution is to use top and bottom "padding":
.center {
  padding: 70px 0;
  border: 3px solid green;
}

// To center both vertically and horizontally, use "padding" and "text-align: center"
.center {
  padding: 70px 0;
  border: 3px solid green;
  text-align: center;
}

// Center Vertically - Using line-height
// Another trick is to use the "line-height" property with a value that is equal to the "height" property:

.center {
  line-height: 200px;
  height: 200px;
  border: 3px solid green;
  text-align: center;
}

/* If the text has multiple lines, add the following: */
.center p {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
}


// Center Vertically - Using position & transform
// If "padding" and "line-height" are not options, another solution is to use positioning and the "transform" property:

.center {
  height: 200px;
  position: relative;
  border: 3px solid green;
}

.center p {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

// Center Vertically - Using Flexbox
// You can also use flexbox to center things. Just note that flexbox is not supported in IE10 and earlier versions:

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 3px solid green;
}
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
      title: "CSS Combinators",
      note: [
        {
          text1: `A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.

There are four different combinators in CSS:

=> Descendant combinator (space)
=> Child combinator (>)
=> Next sibling combinator (+)
=> Subsequent-sibling combinator (~)
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
      title: "CSS Opacity / Transparency",
      note: [
        {
          text1: `<b>Transparent Image</b>
The opacity property can take a value from 0.0 - 1.0. The lower the value, the more transparent:
<b>Transparent Hover Effect</b>
The opacity property is often used together with the :hover selector to change the opacity on mouse-over:
`,
          code1: `img {
  opacity: 0.5;
}

img:hover {
  opacity: 1.0;
}`
        },
        {
          text1: `<b>Transparent Box</b>
When using the <u>opacity</u> property to add transparency to the background of an element, all of its child elements inherit the same transparency. This can make the text inside a fully transparent element hard to read:
    <div class="row">
        <div class="col-lg-3 col-sm-12">
            <div style="background-color:#04AA6D;opacity:1;padding:50px;color:black">
                <p>opacity 1</p>
            </div>
        </div>

        <div class="col-lg-3 col-sm-12">
            <div style="background-color:#04AA6D;opacity:0.6;padding:50px;color:black">
                <p>opacity 0.6</p>
            </div>
        </div>

        <div class="col-lg-3 col-sm-12">
            <div style="background-color:#04AA6D;opacity:0.3;padding:50px;color:black">
                <p>opacity 0.3</p>
            </div>
        </div>

        <div class="col-lg-3 col-sm-12">
            <div style="background-color:#04AA6D;opacity:0.1;padding:50px;color:black">
                <p>opacity 0.1</p>
            </div>
        </div>

    </div>
`,
          code1: `div {
  opacity: 0.3;
}`
        },
      ],
    },
    {
      id: 52,
      title: "new topic:",
      note: [
        {
          text1: `<b>Transparency using RGBA</b>
          If you do not want to apply opacity to child elements, like in our example above, use RGBA color values. The following example sets the opacity for the background color and not the text:


that you can use RGB as a color value. In addition to RGB, you can use an RGB color value with an alpha channel (RGBA) - which specifies the opacity for a color.

An RGBA color value is specified with: rgba(red, green, blue, alpha). The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).`,
          code1: `div {
  background: rgba(76, 175, 80, 0.3) /* Green background with 30% opacity */
}`
        },
        {
          text1: `<b>Text in Transparent Box</b>`,
          code1: `&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
div.background {
  background: url(klematis.jpg) repeat;
  border: 2px solid black;
}

div.transbox {
  margin: 30px;
  background-color: #ffffff;
  border: 1px solid black;
  opacity: 0.6;
}

div.transbox p {
  margin: 5%;
  font-weight: bold;
  color: #000000;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;div class=&quot;background&quot;&gt;
  &lt;div class=&quot;transbox&quot;&gt;
    &lt;p&gt;This is some text that is placed in the transparent box.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;`
        },
      ],
    },
    {
      id: 52,
      title: "Navigation Bars",
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
      title: "CSS Dropdowns",
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
      title: "CSS Image Gallery",
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
      title: "CSS Attribute Selectors",
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
      title: "CSS Units",
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
      title: "CSS The !important Rule",
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
      section: 'CSS Advanced',
      title: "CSS Rounded Corners",
      note: [
        {
          text1: `With the CSS <u>border-radius</u> property, you can give any element "rounded corners".
          The CSS <b>border-radius</b> property defines the radius of an element's corners.


          <p>Rounded corners for an element with a specified background color:</p>
<p id="rcorners1">Rounded corners!</p>
<p>Rounded corners for an element with a border:</p>
<p id="rcorners2">Rounded corners!</p>
          `,
          code1: `#rcorners1 {
  border-radius: 25px;
  background: #73AD21;
  padding: 20px;
  width: 200px;
  height: 150px;
}

#rcorners2 {
  border-radius: 25px;
  border: 2px solid #73AD21;
  padding: 20px;
  width: 200px;
  height: 150px;
}

#rcorners3 {
  border-radius: 25px;
  background: url(paper.gif);
  background-position: left top;
  background-repeat: repeat;
  padding: 20px;
  width: 200px;
  height: 150px;
}`
        },
        {
          text1: `<b>Tip</b>: The <u>border-radius</u> property is actually a shorthand property for the <u>border-top-left-radius, border-top-right-radius, border-bottom-right-radius</u> and <u>border-bottom-left-radius</u> properties.
          
          <p>Four values - border-radius: 15px 50px 30px 5px:</p>
          <p>Four values - <b>border-radius: 15px 50px 30px 5px;</b> (first value applies to top-left corner, second value applies to top-right corner, third value applies to bottom-right corner, and fourth value applies to bottom-left corner): </p>
<p id="rcorners-a"></p>

<p>Three values - <b>border-radius: 15px 50px 30px;</b> (first value applies to top-left corner, second value applies to top-right and bottom-left corners, and third value applies to bottom-right corner):</p>
<p id="rcorners-b"></p>

<p>Two values - <b>border-radius: 15px 50px;</b> (first value applies to top-left and bottom-right corners, and the second value applies to top-right and bottom-left corners):</p>
<p id="rcorners-c"></p>

<p>One value - <b>border-radius: 15px;</b> (the value applies to all four corners, which are rounded equally:</p>
<p id="rcorners-d"></p>
          `,
          code1: ``
        },        {
          text1: ``,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "CSS Border Images",
      note: [
        {
          text1: `The CSS <u>border-image</u> property allows you to specify an image to be used instead of the normal border around an element.

The property has three parts:

-> The image to use as the border
-> Where to slice the image
-> Define whether the middle sections should be repeated or stretched

We will use the following image (called "border.png"):

The <u>border-image</u> property takes the image and slices it into nine sections, like a tic-tac-toe board. It then places the corners at the corners, and the middle sections are repeated or stretched as you specify.

Note: For <u>border-image</u> to work, the element also needs the <b>border</b> property set!

Here, the middle sections of the image are repeated to create the border:
`,
          code1: `#borderimg {
  border: 10px solid transparent;
  padding: 15px;
  border-image: url(border.png) 30 round;
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
      title: "CSS Multiple Backgrounds",
      note: [
        {
          text1: `CSS allows you to add multiple background images for an element, through the background-image property.

The different background images are separated by commas, and the images are stacked on top of each other, where the first image is closest to the viewer.

The following example has two background images, the first image is a flower (aligned to the bottom and right) and the second image is a paper background (aligned to the top-left corner):

Multiple background images can be specified using either the individual background properties (as above) or the background shorthand property.

The following example uses the background shorthand property (same result as example above):
`,
          code1: `#example1 {
  background-image: url(img_flwr.gif), url(paper.gif);
  background-position: right bottom, left top;
  background-repeat: no-repeat, repeat;
}

#example1 {
  background: url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;
}
`
        },
        {
          text1: `<b>CSS Background Size</b>
          The CSS box-sizing property allows us to include the padding and border in an element's total width and height.

          The CSS <u>background-size</u> property allows you to specify the size of background images.

The size can be specified in lengths, percentages, or by using one of the two keywords: contain or cover.

The following example resizes a background image to much smaller than the original image (using pixels):


The two other possible values for <u>background-size</u> are <u>contain</u> and <u>cover</u>.

The <u>contain</u> keyword scales the background image to be as large as possible (but both its width and its height must fit inside the content area). As such, depending on the proportions of the background image and the background positioning area, there may be some areas of the background which are not covered by the background image.

The <u>cover</u> keyword scales the background image so that the content area is completely covered by the background image (both its width and height are equal to or exceed the content area). As such, some parts of the background image may not be visible in the background positioning area.

<h3>The background-size Property</h3>

<h4>background-size: contain:</h4>
<div class="background-size-contain">
<p>Lorem ipsum dolor sit amet.</p>
</div>


<h4>background-size: cover:</h4>
<div class="background-size-cover">
<p>Lorem ipsum dolor sit amet.</p>
</div>

<h4>No background-size defined:</h4>
<div class="background-size-defined">
<p>Lorem ipsum dolor sit amet.</p>
</div>

<p>Original image:</p>
<img src="https://www.w3schools.com/css/img_flwr.gif" alt="Flowers" width="224" height="162">
`,
          code1: `#div1 {
  background: url(img_flower.jpg);
  background-size: 100px 80px;
  background-repeat: no-repeat;
}
  
//Resized background-image:
#example1 {
  border: 1px solid black;
  background: url(img_flwr.gif);
  background-size: 100px 80px;
  background-repeat: no-repeat;
  padding: 15px;
}


//Original size of the background-image:
#example2 {
  border: 1px solid black;
  background: url(img_flwr.gif);
  background-repeat: no-repeat;
  padding: 15px;
}


//------------
//Ex:
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
.div1 {
  border: 1px solid black;
  height: 120px;
  width: 150px;
  background: url(img_flwr.gif);
  background-repeat: no-repeat;
  background-size: contain;
}

.div2 {
  border: 1px solid black;
  height: 120px;
  width: 150px;
  background: url(img_flwr.gif);
  background-repeat: no-repeat;
  background-size: cover;
}

.div3 {
  border: 1px solid black;
  height: 120px;
  width: 150px;
  background: url(img_flwr.gif);
  background-repeat: no-repeat;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h1&gt;The background-size Property&lt;/h1&gt;

&lt;h2&gt;background-size: contain:&lt;/h2&gt;
&lt;div class=&quot;div1&quot;&gt;
&lt;p&gt;Lorem ipsum dolor sit amet.&lt;/p&gt;
&lt;/div&gt;

&lt;h2&gt;background-size: cover:&lt;/h2&gt;
&lt;div class=&quot;div2&quot;&gt;
&lt;p&gt;Lorem ipsum dolor sit amet.&lt;/p&gt;
&lt;/div&gt;

&lt;h2&gt;No background-size defined:&lt;/h2&gt;
&lt;div class=&quot;div3&quot;&gt;
&lt;p&gt;Lorem ipsum dolor sit amet.&lt;/p&gt;
&lt;/div&gt;

&lt;p&gt;Original image:&lt;/p&gt;
&lt;img src=&quot;img_flwr.gif&quot; alt=&quot;Flowers&quot; width=&quot;224&quot; height=&quot;162&quot;&gt;

&lt;/body&gt;
&lt;/html&gt;

  `
        },
        {
          text1: `<b>Define Sizes of Multiple Background Images</b>
          The <b>background-size</b> property also accepts multiple values for background size (using a comma-separated list), when working with multiple backgrounds.

          <div id="multiple-background-images">
  <h4>Lorem Ipsum Dolor</h4>
  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
  <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
</div>
          `,
          code1: `&lt;html&gt;
&lt;head&gt;
&lt;style&gt; 
#example1 {
  background: url(img_tree.gif) left top no-repeat, url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;
  padding: 15px;
  background-size: 50px, 130px, auto;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;div id=&quot;example1&quot;&gt;
  &lt;h1&gt;Lorem Ipsum Dolor&lt;/h1&gt;
  &lt;p&gt;Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.&lt;/p&gt;
  &lt;p&gt;Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.&lt;/p&gt;
&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
`
        },
        {
          text1: `<b>Full Size Background Image</b>
Now we want to have a background image on a website that covers the entire browser window at all times.

The requirements are as follows:

=> Fill the entire page with the image (no white space)
=> Scale image as needed
=> Center image on page
=> Do not cause scrollbars
The following example shows how to do it; Use the &lt;html&gt; element (the &lt;html&gt; element is always at least the height of the browser window). Then set a fixed and centered background on it. Then adjust its size with the background-size property:



<b>CSS background-origin Property</b>
The CSS <u>background-origin</u> property specifies where the background image is positioned.

The property takes three different values:

=> border-box - the background image starts from the upper left corner of the border
=> padding-box - (default) the background image starts from the upper left corner of the padding edge
=> content-box - the background image starts from the upper left corner of the content
The following example illustrates the <u>background-origin</u> property:


<b>CSS background-clip Property</b>
The CSS <u>background-clip</u> property specifies the painting area of the background.

The property takes three different values:

=> border-box - (default) the background is painted to the outside edge of the border
=> padding-box - the background is painted to the outside edge of the padding
=> content-box - the background is painted within the content box
`,
          code1: `html {
  background: url(img_man.jpg) no-repeat center fixed;
  background-size: cover;
}
  

//CSS background-origin Property
#example1 {
  border: 10px solid black;
  padding: 35px;
  background: url(img_flwr.gif);
  background-repeat: no-repeat;
  background-origin: content-box;
}

//CSS background-clip Property
#example1 {
  border: 10px dotted black;
  padding: 35px;
  background: yellow;
  background-clip: content-box;
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
      title: "CSS Colors",
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
      title: "CSS Gradients",
      note: [
        {
          text1: `CSS gradients let you display smooth transitions between two or more specified colors.

CSS defines three types of gradients:
=> Linear Gradients (goes down/up/left/right/diagonally)
=> Radial Gradients (defined by their center)
=> Conic Gradients (rotated around a center point)

<b>CSS Linear Gradients</b>
To create a linear gradient you must define at least two color stops. Color stops are the colors you want to render smooth transitions among. You can also set a starting point and a direction (or an angle) along with the gradient effect.
<u>background-image: linear-gradient(direction, color-stop1, color-stop2, ...);</u>

<b>Direction - Top to Bottom (this is default)</b>

The following example shows a linear gradient that starts at the top. It starts red, transitioning to yellow:
<h4>Linear Gradient - Top to Bottom</h4>
<p>This linear gradient starts red at the top, transitioning to yellow at the bottom:</p>

<div id="grad1"></div>
`,
          code1: `&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
#grad1 {
  height: 200px;
  background-color: red; /* For browsers that do not support gradients */
  background-image: linear-gradient(red, yellow);
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h1&gt;Linear Gradient - Top to Bottom&lt;/h1&gt;
&lt;p&gt;This linear gradient starts red at the top, transitioning to yellow at the bottom:&lt;/p&gt;

&lt;div id=&quot;grad1&quot;&gt;&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;

//Direction - Left to Right
#grad {
  background-image: linear-gradient(to right, red , yellow);
}


//--------------------
// Direction - Diagonal
// You can make a gradient diagonally by specifying both the horizontal and vertical starting positions.
#grad {
  background-image: linear-gradient(to bottom right, red, yellow);
}
`
        },
        {
          text1: `<b>Using Angles</b>
If you want more control over the direction of the gradient, you can define an angle, instead of the predefined directions (to bottom, to top, to right, to left, to bottom right, etc.). A value of 0deg is equivalent to "to top". A value of 90deg is equivalent to "to right". A value of 180deg is equivalent to "to bottom"


<b>Using Multiple Color Stops</b>
The following example shows a linear gradient (from top to bottom) with multiple color stops:

`,
          code1: `#grad {
  background-image: linear-gradient(180deg, red, yellow);
}
  
//Using Multiple Color Stops
#grad {
  background-image: linear-gradient(red, yellow, green);
}
  `
        },
        {
          text1: `<b>Using Transparency</b>
CSS gradients also support transparency, which can be used to create fading effects.

To add transparency, we use the rgba() function to define the color stops. The last parameter in the rgba() function can be a value from 0 to 1, and it defines the transparency of the color: 0 indicates full transparency, 1 indicates full color (no transparency).

<b>Repeating a linear-gradient</b>
The <u>repeating-linear-gradient()</u> function is used to repeat linear gradients:
`,
          code1: `//Using Transparency
          #grad {
  background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
}
  
// A repeating linear gradient:
#grad {
  background-image: repeating-linear-gradient(red, yellow 10%, green 20%);
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
      title: "CSS Radial Gradients",
      note: [
        {
          text1: `<b>CSS Radial Gradients</b>
A radial gradient is defined by its center.

To create a radial gradient you must also define at least two color stops.

Syntax
<u>background-image: radial-gradient(shape size at position, start-color, ..., last-color);</u>
By default, shape is ellipse, size is farthest-corner, and position is center.


<b>Use of Different Size Keywords</b>
The size parameter defines the size of the gradient. It can take four values:

=> closest-side
=> farthest-side
=> closest-corner
=> farthest-corner
`,
          code1: `//Radial Gradient - Evenly Spaced Color Stops (this is default) 
          #grad {
  background-image: radial-gradient(red, yellow, green);
}
  


// Radial Gradient - Differently Spaced Color Stops
// The following example shows a radial gradient with differently spaced color stops:

#grad {
  background-image: radial-gradient(red 5%, yellow 15%, green 60%);
}
  
// Set Shape
// The shape parameter defines the shape. It can take the value circle or ellipse. The default value is ellipse.
// The following example shows a radial gradient with the shape of a circle:

#grad {
  background-image: radial-gradient(circle, red, yellow, green);
}


//---------
// A radial gradient with different size keywords:

#grad1 {
  background-image: radial-gradient(closest-side at 60% 55%, red, yellow, black);
}

#grad2 {
  background-image: radial-gradient(farthest-side at 60% 55%, red, yellow, black);
}

//------

// Repeating a radial-gradient
// The repeating-radial-gradient() function is used to repeat radial gradients:
#grad {
  background-image: repeating-radial-gradient(red, yellow 10%, green 15%);
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
      title: "CSS Conic Gradients",
      note: [
        {
          text1: `<b>CSS Conic Gradients</b>
A conic gradient is a gradient with color transitions rotated around a center point.

To create a conic gradient you must define at least two colors.

Syntax
<u>background-image: conic-gradient([from angle] [at position,] color [degree], color [degree], ...);</u>
By default, angle is 0deg and position is center.

If no degree is specified, the colors will be spread equally around the center point.`,
          code1: `//A conic gradient with three colors:

#grad {
  background-image: conic-gradient(red, yellow, green);
}
//--------------

// A conic gradient with five colors:
#grad {
  background-image: conic-gradient(red, yellow, green, blue, black);
}

// A conic gradient with three colors and a degree for each color:
#grad {
  background-image: conic-gradient(red 45deg, yellow 90deg, green 210deg);
}


// Create Pie Charts
// Just add border-radius: 50% to make the conic gradient look like a pie:

#grad {
  background-image: conic-gradient(red, yellow, green, blue, black);
  border-radius: 50%;
}


// Here is another pie chart with defined degrees for all the colors:

#grad {
  background-image: conic-gradient(red 0deg, red 90deg, yellow 90deg, yellow 180deg, green 180deg, green 270deg, blue 270deg);
  border-radius: 50%;
}

//-------

// Conic Gradient With Specified From Angle
// The [from angle] specifies an angle that the entire conic gradient is rotated by.
// The following example shows a conic gradient with a from angle of 90deg:

// A conic gradient with a from angle:

#grad {
  background-image: conic-gradient(from 90deg, red, yellow, green);
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
      title: "CSS Shadow Effects (text-shadow & box-shadow)",
      note: [
        {
          text1: `CSS Text Shadow
The CSS <u>text-shadow</u> property applies shadow to text.

In its simplest use, you only specify the horizontal shadow (2px) and the vertical shadow (2px):`,
          code1: `h1 {
  text-shadow: 2px 2px;
}
  
//---------

// add a color to the shadow:
h1 {
  text-shadow: 2px 2px red;
}

//---------
// add a blur effect to the shadow:

h1 {
  text-shadow: 2px 2px 5px red;
}


//--------
// example shows a white text with black shadow:

h1 {
  color: white;
  text-shadow: 2px 2px 4px #000000;
}

//--------
// example shows a red neon glow shadow:
h1 {
  text-shadow: 0 0 3px #FF0000;
}


//--------------------
// Multiple Shadows
// To add more than one shadow to the text, you can add a comma-separated list of shadows.
// The following example shows a red and blue neon glow shadow:

h1 {
  text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
}

//--------------
// The following example shows a white text with black, blue, and darkblue shadow:
h1 {
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
}


//-----------
// the text-shadow property to create a plain border around some text (without shadows):
h1 {
  color: coral;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
  `
        },
        {
          text1: `<b>CSS box-shadow Property</b>
The CSS box-shadow property is used to apply one or more shadows to an element.

<b>Specify a Horizontal and a Vertical Shadow</b>
In its simplest use, you only specify a horizontal and a vertical shadow. The default color of the shadow is the current text-color.

<b>Set the Spread Radius of the Shadow</b>
The <u>spread</u> parameter defines the spread radius. A positive value increases the size of the shadow, a negative value decreases the size of the shadow.

<b>Set the inset Parameter</b>
The inset parameter changes the shadow from an outer shadow (outset) to an inner shadow.
`,
          code1: `//Specify a horizontal and a vertical shadow:

div {
  box-shadow: 10px 10px;
}
  
//-----

// Specify a color for the shadow:
div {
  box-shadow: 10px 10px lightblue;
}

// Add a blur effect to the shadow:
div {
  box-shadow: 10px 10px 5px lightblue;
}

//Set the spread radius of the shadow:
div {
  box-shadow: 10px 10px 5px 12px lightblue;
}

//Add the inset parameter:
div {
  box-shadow: 10px 10px 5px lightblue inset;
}


//============
//Add Multiple Shadows

&lt;head&gt;
&lt;style&gt; 
#example1 {
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 5px blue, 10px 10px red, 15px 15px green;
  margin: 20px;
}

#example2 {
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 5px 8px blue, 10px 10px 8px red, 15px 15px 8px green;
  margin: 20px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h1&gt;Multiple Shadows&lt;/h1&gt;

&lt;div id=&quot;example1&quot;&gt;
  &lt;h2&gt;Multiple shadows&lt;/h2&gt;
  &lt;p&gt;box-shadow: 5px 5px blue, 10px 10px red, 15px 15px green:&lt;/p&gt;
&lt;/div&gt;
&lt;br&gt;

&lt;div id=&quot;example2&quot;&gt;
  &lt;h2&gt;Multiple shadows with blur effect&lt;/h2&gt;
  &lt;p&gt;box-shadow: 5px 5px 8px blue, 10px 10px 8px red, 15px 15px 8px green:&lt;/p&gt;
&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;


// Ex :2 
// The box-shadow property can be used to create polaroid images

&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
div.polaroid {
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}

div.container {
  padding: 10px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h1&gt;Create Polaroid Images&lt;/h1&gt;

&lt;p&gt;The box-shadow property can be used to create polaroid images:&lt;/p&gt;

&lt;div class=&quot;polaroid&quot;&gt;
  &lt;img src=&quot;rock600x400.jpg&quot; alt=&quot;Norway&quot; style=&quot;width:100%&quot;&gt;
  &lt;div class=&quot;container&quot;&gt;
    &lt;p&gt;Hardanger, Norway&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;



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
      title: "CSS Text Effects",
      note: [
        {
          text1: `<b>CSS Text Overflow, Word Wrap, Line Breaking Rules, and Writing Modes</b>
In this chapter you will learn about the following properties:

text-overflow
word-wrap
word-break
writing-mode
<a href="https://www.w3schools.com/css/css3_text_effects.asp" target="_blank">CSS Text Effects</a>
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
      title: "CSS 2D Transforms",
      note: [
        {
          text1: `CSS 2D Transforms
CSS transforms allow you to move, rotate, scale, and skew elements.
CSS transforms allow you to modify the appearance of an element by rotating, scaling, skewing, or translating it without affecting the document flow. This is done using the <b>transform</b> property.

Mouse over the element below to see a 2D transformation:
<b>CSS 2D Transforms Methods</b>With the CSS transform property you can use the following 2D transformation methods:

translate()
rotate()
scaleX()
scaleY()
scale()
skewX()
skewY()
skew()
matrix()
`,
          code1: ``
        },
        {
          text1: `<b>The translate() Method</b>
          The <u>translate()</u> method moves an element from its current position (according to the parameters given for the X-axis and the Y-axis).

The following example moves the <div> element 50 pixels to the right, and 100 pixels down from its current position:

<h4>The translate() Method</h4>
<p>The translate() method moves an element from its current position:</p>
<div class="no-transform-translate">
Original position
</div>
<div class="transform-translate-box">
This div element is moved 50 pixels to the right, and 100 pixels down from its current position.
</div>
 `,
          code1: `div {
  transform: translate(50px, 100px);
}
  
&lt;head&gt;
&lt;style&gt; 
.div1 {
  width: 300px;
  height: 100px;
  background-color: yellow;
  border: 1px solid black;
  transform: translate(50px,200px);
}

.div2 {
  width: 300px;
  height: 100px;
  background-color: yellow;
  border: 1px solid black;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h1&gt;The translate() Method&lt;/h1&gt;
&lt;p&gt;The translate() method moves an element from its current position:&lt;/p&gt;

&lt;div class=&quot;div1&quot;&gt;
This div element is moved 50 pixels to the right, and 100 pixels down from its current position.
&lt;/div&gt;

&lt;div class=&quot;div2&quot;&gt;
Original position
&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
`
        },
        {
          text1: `<b>The rotate() Method</b>
The rotate() method rotates an element clockwise or counter-clockwise according to a given degree.
The following example rotates the <div> element clockwise with 20 degrees:
<u>Using negative values will rotate the element counter-clockwise.</u>
<h4>The rotate() Method</h4>
<p>The rotate() method rotates an element clockwise or counter-clockwise.</p>
<div class="transform-rotate-box">
This a normal div element.
</div>

<div class="myRotate transform-rotate-box">
This div element is rotated clockwise 20 degrees.
</div>
`,
          code1: `&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
.transform-rotate-box {
  width: 300px;
  height: 100px;
  background-color: yellow;
  border: 1px solid black;
}

.myRotate {
  transform: rotate(20deg);
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h4&gt;The rotate() Method&lt;/h4&gt;

&lt;p&gt;The rotate() method rotates an element clockwise or counter-clockwise.&lt;/p&gt;

&lt;div class=&quot;transform-rotate-box&quot;&gt;
This a normal div element.
&lt;/div&gt;

&lt;div class=&quot;myRotate transform-rotate-box&quot;&gt;
This div element is rotated clockwise 20 degrees.
&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
`
        },
        {
          text1: `<b>The scale() Method</b>
The scale() method increases or decreases the size of an element (according to the parameters given for the width and height).
The following example increases the &lt;div&gt; element to be two times of its original width, and three times of its original height: 
<h4>The scale() Method</h4>
<p>The scale() method increases or decreases the size of an element.</p>
<div class="scale-transform-box">
This div element is two times of its original width, and three times of its original height.
</div>

<div class="no-scale-transform">
Original box withour transform: scale
</div>`,
          code1: `&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
.scale-transform-box {
  width: 200px;
  height: 100px;
  background-color: yellow;
  border: 1px solid black;
  transform: scale(2,2);
  margin-left:100px;
}

.no-scale-transform {
  width: 200px;
  height: 100px;
  background-color: yellow;
  border: 1px solid black;
  margin-top:50px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h4&gt;The scale() Method&lt;/h4&gt;
&lt;p&gt;The scale() method increases or decreases the size of an element.&lt;/p&gt;
&lt;div class=&quot;scale-transform-box&quot;&gt;
This div element is two times of its original width, and three times of its original height.
&lt;/div&gt;

&lt;div class=&quot;no-scale-transform&quot;&gt;
Original box withour transform: scale
&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;`
        },
        {
          text1: `<b>The scaleX() Method</b>
The <u>scaleX()</u> method increases or decreases the width of an element.
The following example increases the &lt;div&gt; element to be two times of its original width: 


<b>The scaleY() Method</b>
The <u>scaleY()</u> method increases or decreases the height of an element.
The following example increases the &lt;div&gt; element to be three times of its original height: 
`,
          code1: `//scaleX
          div {
  transform: scaleX(2);
}
  
//scaleY
div {
  transform: scaleY(3);
}`
        },
        {
          text1: `<b>The skew() Method</b>
The skew() method skews an element along the X and Y-axis by the given angles.
The following example skews the &lt;div&gt; element 20 degrees along the X-axis, and 10 degrees along the Y-axis:

<h4>The skew() Method</h4>
<p>The skew() method skews an element into a given angle.</p>

<div class="no-transform-skew">
This a normal div element.
</div>

<div class="transform-skew-box no-transform-skew">
This div element is skewed 20 degrees along the X-axis, and 10 degrees along the Y-axis.
</div>
`,
          code1: `&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
.no-transform-skew {
  width: 300px;
  height: 100px;
  background-color: yellow;
  border: 1px solid black;
}


.transform-skew-box {
  transform: skew(20deg,10deg);
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h1&gt;The skew() Method&lt;/h1&gt;
&lt;p&gt;The skew() method skews an element into a given angle.&lt;/p&gt;

&lt;div class=&quot;no-transform-skew&quot;&gt;
This a normal div element.
&lt;/div&gt;

&lt;div class=&quot;transform-skew-box no-transform-skew&quot;&gt;
This div element is skewed 20 degrees along the X-axis, and 10 degrees along the Y-axis.
&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;`
        },
        {
          text1: `<b>The skewX() Method</b>
The <u>skewX()</u> method skews an element along the X-axis by the given angle.
The following example skews the &lt;div&gt; element 20 degrees along the X-axis:

<b>The skewY() Method</b>
The <u>skewY()</u> method skews an element along the Y-axis by the given angle.
The following example skews the &lt;div&gt; element 20 degrees along the Y-axis:
`,
          code1: `//skewX
          div {
  transform: skewX(20deg);
}

          //skewY
          div {
  transform: skewY(20deg);
}
  `
        },
        {
          text1: `<b>The matrix() Method</b>
The <u>matrix()</u> method combines all the 2D transform methods into one.

The <u>matrix()</u> method take six parameters, containing mathematic functions, which allows you to rotate, scale, move (translate), and skew elements.

The parameters are as <b>follow: matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())</b>`,
          code1: `div {
  transform: matrix(1, -0.3, 0, 1, 0, 0);
}`
        },
        {
          text1: `<b>Combine Transform Functions</b>

Instead of writing transform multiple times, combine all transformations into one declaration using space-separated values:`,
          code1: `.mon-box:hover {
  background-color: black;
  transform: scale(0.5) rotate(45deg); /* Combine both transforms */
}
`
        },

      ],
    },
    {
      id: 52,
      title: "CSS 3D Transforms",
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
      title: "CSS Transitions",
      note: [
        {
          text1: `CSS transitions allows you to change property values smoothly, over a given duration.
          In this chapter you will learn about the following properties:
=> transition
=> transition-delay
=> transition-duration
=> transition-property
=> transition-timing-function

<b>How to Use CSS Transitions?</b>
To create a transition effect, you must specify two things:

the CSS property you want to add an effect to
the duration of the effect
<b>Note</b>: If the duration part is not specified, the transition will have no effect, because the default value is 0.

The following example shows a 100px * 100px red &lt;div&gt; element. The &lt;div&gt; element has also specified a transition effect for the width property, with a duration of 2 seconds:

The transition effect will start when the specified CSS property (width) changes value.
<h4>The transition Property</h4>
<p>Hover over the div element below, to see the transition effect:</p>
<div class="transition-box"></div>
`,
          code1: `//Now, let us specify a new value for the width property when a user mouses over the &lt;div&gt; element:
          &lt;head&gt;
&lt;style&gt; 
.transition-box {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
}

.transition-box:hover {
  width: 300px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h4&gt;The transition Property&lt;/h4&gt;
&lt;p&gt;Hover over the div element below, to see the transition effect:&lt;/p&gt;
&lt;div class=&quot;transition-box&quot;&gt;&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;

//-----------
// The following example adds a transition effect for both the width and height property, with a duration of 2 seconds for the width and 4 seconds for the height:
// Ex: 2
&lt;head&gt;
&lt;style&gt; 
.transition-box {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 0.5s, height 4s;
}

.transition-box:hover {
  width: 300px;
  height: 300px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h1&gt;The transition Property&lt;/h1&gt;

&lt;p&gt;Hover over the div element below, to see the transition effect:&lt;/p&gt;

&lt;div class=&quot;transition-box&quot;&gt;&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
`
        },
        {
          text1: `<b>Specify the Speed Curve of the Transitiob</b>
The transition-timing-function property specifies the speed curve of the transition effect.

The transition-timing-function property can have the following values:

=> ease - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
=> linear - specifies a transition effect with the same speed from start to end
=> ease-in - specifies a transition effect with a slow start
=> ease-out - specifies a transition effect with a slow end
=> ease-in-out - specifies a transition effect with a slow start and end
=> cubic-bezier(n,n,n,n) - lets you define your own values in a cubic-bezier function

<h4>The transition-timing-function Property</h4>
<p>Hover over the div elements below, to see the different speed curves:</p>
<div id="linear" class="box-transition">linear</div><br>
<div id="ease" class="box-transition">ease</div><br>
<div id="ease-in" class="box-transition">ease-in</div><br>
<div id="ease-out" class="box-transition">ease-out</div><br>
<div id="ease-in-out" class="box-transition">ease-in-out</div><br>
`,
          code1: `&lt;head&gt;
&lt;style&gt; 
.box-transition {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
}

#linear {transition-timing-function: linear;}
#ease {transition-timing-function: ease;}
#ease-in {transition-timing-function: ease-in;}
#ease-out {transition-timing-function: ease-out;}
#ease-in-out {transition-timing-function: ease-in-out;}

div:hover {
  width: 300px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h1&gt;The transition-timing-function Property&lt;/h1&gt;

&lt;p&gt;Hover over the div elements below, to see the different speed curves:&lt;/p&gt;

&lt;div id=&quot;linear&quot; class=&quot;box-transition&quot;&gt;linear&lt;/div&gt;&lt;br&gt;
&lt;div id=&quot;ease&quot; class=&quot;box-transition&quot;&gt;ease&lt;/div&gt;&lt;br&gt;
&lt;div id=&quot;ease-in&quot; class=&quot;box-transition&quot;&gt;ease-in&lt;/div&gt;&lt;br&gt;
&lt;div id=&quot;ease-out&quot; class=&quot;box-transition&quot;&gt;ease-out&lt;/div&gt;&lt;br&gt;
&lt;div id=&quot;ease-in-out&quot; class=&quot;box-transition&quot;&gt;ease-in-out&lt;/div&gt;&lt;br&gt;

&lt;/body&gt;
&lt;/html&gt;`
        },
        {
          text1: ``,
          code1: ``
        },
        {
          text1: `        <div class="circle-shape">
            <div class="image-box">
                <img src='http://i296.photobucket.com/albums/mm174/StuffieStephie/S1ChibiPreview2_zpsswyamase.png' />
            </div>
        </div>
        
                <br />
        <br />
        <br />
                <div class="box-circle-shape">
            <div class="image-box">
                <img src='http://i296.photobucket.com/albums/mm174/StuffieStephie/S1ChibiPreview2_zpsswyamase.png' />
            </div>
        </div>
        `,
          code1: `//Ex : 1
                  .circle-shape {
            height: 200px;
            width: 200px;
        }

        .circle-shape .image-box img {
            height: 200px;
            width: 200px;
            border-radius: 100px;
            border: 3px solid #5196f0;
            transition: 0.5s;
        }

        .circle-shape .image-box img:hover {
            border-radius: 10px;
        }

                &lt;div class=&quot;circle-shape&quot;&gt;
            &lt;div class=&quot;image-box&quot;&gt;
                &lt;img src=&#39;http://i296.photobucket.com/albums/mm174/StuffieStephie/S1ChibiPreview2_zpsswyamase.png&#39; /&gt;
            &lt;/div&gt;
        &lt;/div&gt;


        //Ex : 2
        .box-circle-shape {
            height: 200px;
            width: 200px;
            border: 3px solid #5196f0;
            border-radius: 100px;
            transition: 0.5s;
        }

        .box-circle-shape .image-box img {
            display: block;
            margin: auto;
            height: 170px;
            width: 170px;
            transition: 0.5s;
        }


        .box-circle-shape:hover {
            border-radius: 10px;
        }

        .box-circle-shape:hover .image-box img {
            transform: translate(0px,-55px) scale(0.9,0.9);
        }

                &lt;div class=&quot;box-circle-shape&quot;&gt;
            &lt;div class=&quot;image-box&quot;&gt;
                &lt;img src=&#39;http://i296.photobucket.com/albums/mm174/StuffieStephie/S1ChibiPreview2_zpsswyamase.png&#39; /&gt;
            &lt;/div&gt;
        &lt;/div&gt;
          `
        },
        {
          text1: `<b>Delay the Transition Effect</b>
          The transition-delay CSS property specifies the duration to wait before starting a property's transition effect when its value changes.
          The transition-delay property specifies a delay (in seconds) for the transition effect.
          The transition-delay property, normally used as part of transition shorthand, is used to define a length of time to delay the start of a transition.
          
    =>       A valid time value defined in seconds or milliseconds e.g. 1.3s or 125ms
    => A comma-separated list of time values, for defining separate delay values on multiple transitions for a single element e.g. 1s background-color, 350ms transform
    The default value for transition-delay is 0s, meaning that no delay will take place and the transition will start to occur immediately. The time value can be expressed as a decimal-based number for more precise timing.
    
    When a transition has a delay value that is negative, it will cause the transition to begin immediately (with no delay), however, the transition will begin partway through the process, as though it had already begun.
    
    <center><b>Ex :1</b></center>
    <div class="transition-delay-box transition-delay-uni"></div>
      <br/>
      <br/>
    <center><b>Ex :2</b></center>
    <div class="transition-delay1-box transition-delay1-uni"></div>

      <br/>
    <center><b>Ex :2</b></center>
    <ul class="transition-delay-list">
  <li><a href="#0">① <span>This</span></a></li>
  <li><a href="#0">② <span>Little</span></a></li>
  <li><a href="#0">③ <span>Piggy</span></a></li>
  <li><a href="#0">④ <span>Went</span></a></li>
  <li><a href="#0">⑤ <span>To</span></a></li>
  <li><a href="#0">⑥ <span>Market</span></a></li>
</ul>
    `,
          code1: `
.transition-delay-box {
    width: 150px;
    height: 150px;
    background: goldenrod;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    transition-delay: 2s;
  }
  
  .transition-delay-box:hover {
    background-color: blue;
    cursor: pointer;
  }
  
  .transition-delay-uni {
    transition-duration: 1s;
    transition-property: background-color;
  }

  &lt;div class=&quot;transition-delay-box transition-delay-uni&quot;&gt;&lt;/div&gt;


  //Now compare that to the following demo, which has a delay of -1s and a duration of 3s:

  // Notice that in the second example, only the final two-thirds of the actual transition are visible and there is no delay. The negative value removes the delay and effectively cuts into the duration.
//Ex : 2
  .transition-delay1-box {
  width: 150px;
  height: 150px;
  background: goldenrod;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  transition-delay: -1s;
}

.transition-delay1-box:hover {
  background-color: blue;
  cursor: pointer;
}

.transition-delay1-uni {
  transition-duration: 3s;
  transition-property: background-color;
}

&lt;div class=&quot;transition-delay1-box transition-delay1-uni&quot;&gt;&lt;/div&gt;


//----------
// Ex : 3
.transition-delay-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}
.transition-delay-list li {
  flex: 1;
}
.transition-delay-list li a {
  text-decoration: none;
  color: inherit;
  padding-top: 1rem;
  display: block;
  text-align: center;
  overflow: hidden;
  font-size: 40px;
}
.transition-delay-list li a span {
  display: block;
  background: rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  font-size: 22px;
  margin-top: 1rem;
}

@media (hover: hover) {
  .transition-delay-list li a span {
    transform: translateY(100px);
    transition: 0.2s;
  }
  .transition-delay-list:hover span {
    transform: translateY(0);
  }
  .transition-delay-list li:nth-child(1) span {
    transition-delay: 0.0s;
  }
  .transition-delay-list li:nth-child(2) span {
    transition-delay: 0.05s;
  }
  .transition-delay-list li:nth-child(3) span {
    transition-delay: 0.1s;
  }
  .transition-delay-list li:nth-child(4) span {
    transition-delay: 0.15s;
  }
  .transition-delay-list li:nth-child(5) span {
    transition-delay: 0.2s;
  }
  .transition-delay-list li:nth-child(6) span {
    transition-delay: 0.25s;
  }
}

.transition-delay-list li:nth-child(1) {
  background: #90CAF9;
}
.transition-delay-list li:nth-child(2) {
  background: #80DEEA;
}
.transition-delay-list li:nth-child(3) {
  background: #A5D6A7;
}
.transition-delay-list li:nth-child(4) {
  background: #E6EE9C;
}
.transition-delay-list li:nth-child(5) {
  background: #FFF176;
}
.transition-delay-list li:nth-child(6)  {
  background: #FFD54F;
}

&lt;ul class=&quot;list&quot;&gt;
  &lt;li&gt;&lt;a href=&quot;#0&quot;&gt;① &lt;span&gt;This&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;#0&quot;&gt;② &lt;span&gt;Little&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;#0&quot;&gt;③ &lt;span&gt;Piggy&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;#0&quot;&gt;④ &lt;span&gt;Went&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;#0&quot;&gt;⑤ &lt;span&gt;To&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href=&quot;#0&quot;&gt;⑥ &lt;span&gt;Market&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
          `
        },
        {
          text1: `<h6>Transition + Transform</h6>
<p>Hover over the div element below:</p>
<div class="transition-transform-div"></div>`,
          code1: `&lt;html&gt;
&lt;head&gt;
&lt;style&gt; 
.transition-transform-div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s, height 2s, transform 4s;
}

.transition-transform-div:hover {
  width: 300px;
  height: 300px;
  transform: rotate(180deg);
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h1&gt;Transition + Transform&lt;/h1&gt;

&lt;p&gt;Hover over the div element below:&lt;/p&gt;

&lt;div class=&quot;transition-transform-div&quot;&gt;&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;`
        },
        {
          text1: `<b>transition-duration</b> The transition-duration property, normally used as part of transition shorthand, is used to define the duration of a specified transition. That is, the length of time it will take for the targeted element to transition between two defined states.

          The <b>transition-duration</b> CSS property sets the length of time a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur.

          The <b>transition-duration</b> property specifies how many seconds (s) or milliseconds (ms) a transition effect takes to complete.
          
          The value can be one of the following:
=> A valid time value (defined in seconds or milliseconds)
=> A comma-separated list of time values, for transitioning multiple properties on a single element
The default value for transition-duration is 0s, meaning that no transition will take place and the property change will take place immediately, even if the other transition-related properties are defined. The time value can be expressed as a decimal-based number for more precise timing and negative values are not allowed.

    <center>
        <div class="transition-duration-box"></div>
    </center>
    `,
          code1: `&lt;html&gt;
&lt;head&gt;
    &lt;style&gt;
        .transition-duration-box {
            width: 150px;
            height: 150px;
            background: goldenrod;
            margin-top: 20px;
            margin-left: auto;
            margin-right: auto;
            -webkit-transition-duration: 1s;
            -moz-transition-duration: 1s;
            -o-transition-duration: 1s;
            transition-duration: 1s;
        }

        .transition-duration-box:hover {
            background-color: lightblue;
            cursor: pointer;
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;center&gt;
        &lt;div class=&quot;transition-duration-box&quot;&gt;&lt;/div&gt;
    &lt;/center&gt;
&lt;/body&gt;
&lt;/html&gt;


// You may specify multiple durations; each duration will be applied to the corresponding property as specified by the "transition-property" property, which acts as a master list. If the number of specified durations is less than in the master list, the user agent repeats the list of durations. If the number of specified durations is more than in the master list, the list is truncated to the right size. In both the cases, the CSS declaration stays valid.

/* <time> values */
transition-duration: 6s;
transition-duration: 120ms;
transition-duration: 1s, 15s;
transition-duration: 10s, 30s, 230ms;
`
        },
        {
          text1: `<b>transition-property</b>
          The transition-property property, normally used as part of transition shorthand, is used to define what property, or properties, you want to apply a transition effect to.
          
          The value can be one of the following:

=> A single property name, as in the example above
=> A comma-separated list of property names (shorthand or longhand), for transitioning multiple properties on a single element
=> The keyword none, which indicates that no property will transition
=> The keyword all, which indicates that all properties will transition (the default)
=> When comma separating the values, the property names are essentially mapped to the other transition properties defined (transition-timing-function, transition-duration, and transition-delay). So this means if a comma-separated list of properties includes one or more property names that are invalid, the other properties will still transition, and will map to their intended related transition properties.

A value of <b>none</b> means that no property will transition. Otherwise, a list of properties to be transitioned, or the keyword all which indicates that <b>all</b> properties are to be transitioned, is given.

The <b>transition-property</b> property specifies the name of the CSS property the transition effect is for (the transition effect will start when the specified CSS property changes).

The spec describes this by saying:

“[U]nrecognized or non-animatable properties must be kept in the list to preserve the matching of indices.”

When using a value of none or the universal keywords inherit or initial, these values cannot be used as part of a comma-separated list, otherwise this will result in a syntax error and the entire line will be ignored.

<p>Hover over the div element below, to see the transition effect:</p>
<div class="transition-property-div"></div>
<p><b>Note:</b> The transition effect has a 1 second delay before starting.</p>
`,
          code1: `&lt;html&gt;
&lt;head&gt;
&lt;style&gt; 
.transition-property-div {
  width: 100px;
  height: 100px;
  background: red;
  transition-property: height;
  transition-duration: 1s;
  transition-delay: 1s;
}

.transition-property-div:hover {
  height: 300px;
  width:250px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;Hover over the div element below, to see the transition effect:&lt;/p&gt;
&lt;div class=&quot;transition-property-div&quot;&gt;&lt;/div&gt;
&lt;p&gt;&lt;b&gt;Note:&lt;/b&gt; The transition effect has a 1 second delay before starting.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;`
        },
        {
          text1: `<b>transition-timing-function</b> The transition-timing-function property, normally used as part of transition shorthand, is used to define a function that describes how a transition will proceed over its duration, allowing a transition to change speed during its course.
          
          The <b>transition-timing-function</b> CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

          These timing functions are commonly called easing functions, and can be defined using a predefined keyword value, a stepping function, or a cubic Bézier curve.

The predefined keyword values allowed are:
=> ease
=> linear
=> ease-in
=> ease-out
=> ease-in-out
=> step-start
=> step-end
For some values, the effect may not be as obvious unless the transition duration is set to a larger value.

You may specify multiple easing functions; each one will be applied to the corresponding property as specified by the transition-property property, which acts as a <b>transition-property</b> list. If there are fewer easing functions specified than in the transition-property list, the user agent must calculate which value is used by repeating the list of values until there is one for each transition property. If there are more easing functions, the list is truncated to the right size. In both cases, the CSS declaration stays valid.


    <center>
        <section class="example">
            <header class="example-header">
                <p class="example-name">
                    <b>default</b> : <code>transition-timing-function: ease;</code>
                </p>
                <div class="example-description">
                    <p>The transition starts slowly, accelerates in the middle, and slows down at the end.</p>
                </div>
            </header>
            <div class="example-output-div transition-timing-function " id="transition-timing-function-ease">
                <p class="square transition-timing-function-square--alpha">Hover me</p>
            </div>
        </section>

        <section class="example">
            <header class="example-header">
                <p class="example-name">
                    <code>transition-timing-function: ease-in;</code>
                </p>
                <div class="example-description">
                    <p>The transition starts slowly, and accelerates gradually until the end.</p>
                </div>
            </header>
            <div class="example-output-div transition-timing-function " id="transition-timing-function-ease-in">
                <p class="square transition-timing-function-square--alpha">Hover me</p>
            </div>


            <section class="example">
                <header class="example-header">
                    <p class="example-name">
                        <code>transition-timing-function: ease-out;</code>
                    </p>
                    <div class="example-description">
                        <p>The transition starts quickly, and decelerates gradually until the end.</p>
                    </div>
                </header>
                <div class="example-output-div transition-timing-function " id="transition-timing-function-ease-out">
                    <p class="square transition-timing-function-square--alpha">Hover me</p>
                </div>
            </section>


            <section class="example">
                <header class="example-header">
                    <p class="example-name">
                        <code>transition-timing-function: ease-in-out;</code>
                    </p>
                    <div class="example-description">
                        <p>Like <code>ease</code>, but more pronounced.</p>
                        <p>The transition starts quickly, and decelerates gradually until the end.</p>
                    </div>
                </header>
                <div class="example-output-div transition-timing-function " id="transition-timing-function-ease-in-out">
                    <p class="square transition-timing-function-square--alpha">Hover me</p>
                </div>
            </section>


            <section class="example">
                <header class="example-header">
                    <p class="example-name">
                        <code class="example-value" data-tooltip="Click to copy"
                            data-clipboard-text="transition-timing-function: linear;">transition-timing-function: linear;</code>
                    </p>
                    <div class="example-description">
                        <p>The transition has a <em>*constant speed</em>.</p>

                    </div>
                </header>
                <div class="example-output-div transition-timing-function " id="transition-timing-function-linear">
                    <p class="square transition-timing-function-square--alpha">Hover me</p>
                </div>
            </section>

            <section class="example">
                <header class="example-header">
                    <p class="example-name">
                        <code>transition-timing-function: step-start;</code>
                    </p>
                    <div class="example-description">
                        <p>The transition jumps <em>instantly</em> to the <strong>final state</strong>.</p>
                    </div>
                </header>
                <div class="example-output-div transition-timing-function " id="transition-timing-function-step-start">
                    <p class="square transition-timing-function-square--alpha">Hover me</p>
                </div>
            </section>

            <section class="example">
                <header class="example-header">
                    <p class="example-name">
                        <code>transition-timing-function: step-end;</code>
                    </p>
                    <div class="example-description">
                        <p>The transition stays at the <strong>initial state</strong> until the end, when it
                            <em>instantly</em> jumps to the <strong>final state</strong>.
                        </p>
                    </div>
                </header>

                <div class="example-output-div transition-timing-function" id="transition-timing-function-step-end">
                    <p class="square transition-timing-function-square--alpha">Hover me</p>
                </div>
            </section>

            <section class="example">
                <header class="example-header">
                    <p class="example-name">
                        <code>transition-timing-function: steps(4, end);</code>
                    </p>
                    <div class="example-description">
                        <p>By using <code>steps()</code> with an <strong>integer</strong>, you can define a specific
                            <em>number</em> of steps before reaching the end. The state of the element will <em>not</em>
                            vary gradually, but rather <strong>jump</strong> from state to state in separate instants.
                        </p>
                    </div>
                </header>
                <div class="example-output-div transition-timing-function " id="transition-timing-function-steps4-end">
                    <p class="square transition-timing-function-square--alpha">Hover me</p>
                </div>
            </section>
    </center>
`,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "CSS Animations",
      note: [
        {
          text1: `<b>What are CSS Animations?</b>
An animation lets an element gradually change from one style to another.
You can change as many CSS properties you want, as many times as you want.
To use CSS animation, you must first specify some keyframes for the animation.
Keyframes hold what styles the element will have at certain times.

          @keyframes
animation-name
animation-duration
animation-delay
animation-iteration-count
animation-direction
animation-timing-function
animation-fill-mode
animation`,
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
      title: "CSS Image Reflection",
      note: [
        {
          text1: `<b>CSS Image Reflections</b>
The <b>box-reflect</b> property is used to create an image reflection.

The value of the <u>box-reflect</u> property can be: <u>below, above, left</u> , or <u>right.</u>`,
          code1: `&lt;html&gt;
&lt;head&gt;
    &lt;style&gt;
        img {
            -webkit-box-reflect: below;
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;center&gt;
        &lt;p&gt;Show the reflection below the image:&lt;/p&gt;
        &lt;img src=&quot;https://www.w3schools.com/css/img_tree.png&quot;&gt;
    &lt;/center&gt;

&lt;/body&gt;
&lt;/html&gt;`
        },
        {
          text1: `<b>CSS Reflection Offset</b>
To specify the gap between the image and the reflection, add the size of the gap to the <b>box-reflect</b> property.`,
          code1: `img {
  -webkit-box-reflect: below 20px;
}
  

//We can also create a fade-out effect on the reflection.
        img {
            -webkit-box-reflect: below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));
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
      title: "CSS The object-fit Property",
      note: [
        {
          text1: `The CSS <b>object-fit</b> property is used to specify how an &lt;img&gt; or &lt;video&gt; should be resized to fit its container.

<b>The CSS object-fit Property</b>
The CSS <b>object-fit</b> property is used to specify how an &lt;img&gt; or &lt;video&gt; should be resized to fit its container.

This property tells the content to fill the container in a variety of ways; such as "preserve that aspect ratio" or "stretch up and take up as much space as possible".

<img src="https://www.w3schools.com/css/paris.jpg" alt="Paris" class="no-object-fit-img">


`,
          code1: ``
        },
        {
          text1: `We see that the image is being squished to fit the container of 200x300 pixels (its original aspect ratio is destroyed).

Here is where the <b>object-fit</b> property comes in. The <b>object-fit</b> property can take one of the following values:

<b>fill</b> - This is default. The image is resized to fill the given dimension. If necessary, the image will be stretched or squished to fit
<b>contain</b> - The image keeps its aspect ratio, but is resized to fit within the given dimension
<b>cover</b> - The image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit
<b>none</b> - The image is not resized
<b>scale-down</b> - the image is scaled down to the smallest version of <b>none</b> or <b>contain</b>


if we use <b>object-fit: cover;</b> the image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit:

<h5>No object-fit:</h5>
<img src="https://www.w3schools.com/css/paris.jpg" alt="Paris" style="width:200px;height:300px">

<h5>Using object-fit: cover</h5>
<img src="https://www.w3schools.com/css/paris.jpg" alt="Paris" style="width:200px;height:300px" class="cover-object-fit-img" >

<h5>object-fit: fill (this is default):</h5>
<img src="https://www.w3schools.com/css/paris.jpg" style="width:200px;height:300px" class="fill-object-fit">

<h5>object-fit: contain:</h5>
<img src="https://www.w3schools.com/css/paris.jpg" style="width:200px;height:300px" class="contain-object-fit">

<h5>object-fit: scale-down:</h5>
<img src="https://www.w3schools.com/css/paris.jpg" style="width:200px;height:300px" class="scale-down-object-fit">

<h5>object-fit: none:</h5>
<img src="https://www.w3schools.com/css/paris.jpg" style="width:200px;height:300px" class="none-object-fit">
`,
          code1: `.fill-object-fit {object-fit: fill;}
.contain-object-fit {object-fit: contain;}
.scale-down-object-fit {object-fit: scale-down;}
.none-object-fit {object-fit: none;}
`
        },
        {
          text1: `<p>Here we use do not use "object-fit", so when we resize the browser window, the aspect ratio of the images will be destroyed:</p>

          <h4>Not Using object-fit</h4>
<p>Here we use do not use "object-fit", so when we resize the browser window, the aspect ratio of the images will be destroyed:</p>
<div style="width:100%;height:400px;">
  <img src="https://www.w3schools.com/css/rock600x400.jpg" alt="Norway" style="float:left;width:50%;height:100%;">
  <img src="https://www.w3schools.com/css/paris.jpg" alt="Paris" style="float:left;width:50%;height:100%;">
</div>

<h4>Using object-fit</h4>
<p>Here we use "object-fit: cover;", so when we resize the browser window, the aspect ratio of the images is preserved:</p>
<div style="width:100%;height:400px;">
  <img src="https://www.w3schools.com/css/rock600x400.jpg" alt="Norway" style="float:left;width:50%;height:100%;object-fit:cover;">
  <img src="https://www.w3schools.com/css/paris.jpg" alt="Paris" style="float:left;width:50%;height:100%;object-fit:cover;">
</div>
`,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "CSS The object-position Property",
      note: [
        {
          text1: `The CSS <b>object-position</b> property is used to specify how an &lt;img&gt; or &lt;video&gt; should be positioned within its container.
          
          Next, we use <b>object-fit: cover;</b> to keep the aspect ratio and to fill the given dimension. However, the image will be clipped to fit, like this:
          <h5>Using object-fit: cover</h5>
<img src="https://www.w3schools.com/css/paris.jpg" alt="Paris" style="width:200px;height:300px" class="cover-object-fit-img" >
          `,
          code1: ``
        },
        {
          text1: `<b>Using the object-position Property</b>
Let's say that the part of the image that is shown, is not positioned as we want. To position the image, we will use the <b>object-position</b> property.

Here we will use the <b>object-position</b> property to position the image so that the great old building is in center:

<h5>Using object-position</h5>
<p>Here we will use the object-position property to position the image so that the great old building is in center:</p>
<img src="https://www.w3schools.com/css/paris.jpg" alt="Paris" class="object-position-img">`,
          code1: `&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
.object-position-img {
  width: 200px;
  height: 300px;
  object-fit: cover;
  object-position: 80% 100%;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h2&gt;Using object-position&lt;/h2&gt;
&lt;p&gt;Here we will use the object-position property to position the image so that the great old building is in center:&lt;/p&gt;
&lt;img src=&quot;https://www.w3schools.com/css/paris.jpg&quot; alt=&quot;Paris&quot; class=&quot;object-position-img&quot;&gt;

&lt;/body&gt;
&lt;/html&gt;`
        },
      ],
    },
    {
      id: 52,
      title: "CSS Masking",
      note: [
        {
          text1: `With CSS masking you create a mask layer to place over an element to partially or fully hide portions of the element.

          <b>The CSS mask-image Property</b>
The CSS mask-image property specifies a mask layer image.
The mask layer image can be a PNG image, an SVG image, a CSS gradient, or an SVG &lt;mask&gt; element.

<b>Use an Image as the Mask Layer</b>
To use a PNG or an SVG image as the mask layer, use a url() value to pass in the mask layer image.
The mask image needs to have a transparent or semi-transparent area. Black indicates fully transparent.
Here is the mask image (a PNG image) we will use:

<b>Example Explained</b>
The <b>mask-image</b> property specifies the image to be used as a mask layer for an element.

The <b>mask-repeat</b> property specifies if or how a mask image will be repeated. The <b>no-repeat</b> value indicates that the mask image will not be repeated (the mask image will only be shown once).


<h5>The mask-image Property</h5>
<h6>An image with a mask layer image:</h6>
<div class="mask-image-box">
<img src="https://www.w3schools.com/css/img_5terre.jpg" alt="Cinque Terre" width="600" height="400">
</div>

<h3>Original image:</h3>
<img src="https://www.w3schools.com/css/img_5terre.jpg" alt="Cinque Terre" width="600" height="400">


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
      title: "CSS polygon() Function",
      note: [
        {
          text1: `The CSS <b>polygon()</b> function defines a polygon.

The polygon() function is used with the clip-path property and the shape-outside property.

<b>fill-rule</b>:	Optional. Specifies the filling rule. Can be nonzero or evenodd. The default value is nonzero
<b>length-percentage</b>:	Required. Specifies points that define the polygon. This can be a length or percentage value. Each point is a pair of x and y coordinates. 0 0 defines the left top corner, 100% 100% defines the right bottom corner

<h5>The polygon() Function</h5>
<div class="polygon-box"></div>
`,
          code1: `polygon(fill-rule, length-percentage)
          
          &lt;html&gt;
&lt;head&gt;
&lt;style&gt;
.polygon-box {
	background-color:#98ac3a;
    height:100px;
    padding:15px;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;The polygon() Function&lt;/h1&gt;
&lt;div class=&quot;polygon-box&quot;&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;

//-----------
// Ex : 2
&lt;html&gt;
&lt;head&gt;
    &lt;style&gt;
        .poly-arrow {
            clip-path: polygon(0% 20%,
                    60% 20%,
                    60% 0%,
                    100% 50%,
                    60% 100%,
                    60% 80%,
                    0% 80%);
        }

        #example-element {
            background: linear-gradient(to bottom right, #f52, #05f);
            width: 50%;
            height: 450px;
            padding:20px;
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;center&gt;
        &lt;div id=&quot;example-element&quot; class=&quot;poly-arrow&quot;&gt;&lt;/div&gt;
    &lt;/center&gt;

&lt;/body&gt;
&lt;/html&gt;
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
      title: "filter: blur()",
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
      title: "backdrop-filter: blur()",
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
      section:"Interview",
      title: "Explain responsive web design. ",
      note: [
        {
          text1: `Responsive Design is a web page creation approach that uses flexible images, layouts, and CSS media queries. This design approach aims to build web pages that detect visitors' orientation and screen size so that the layout can be changed accordingly.`,
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
      title: "How do you specify units in the CSS? What are the different ways to do it?new topic",
      note: [
        {
          text1: `The CSS mainly uses four different units: px, em, pt, and percentage (%).
CSS units are classified into two types:
    <b>Absolute Units</b> (Fixed size)
    <b>Relative Units</b> (Size depends on the parent or viewport)


    
-> Px (Pixel) is used for fine-grained control and alignment, not cascade. To get it sharp, we can use 1px or multiple of px.
-> Em is used to maintain relative size and responsive fonts. 1em = 16px, which is also the same font size. In common practice, it is advisable to set the font size to 10px.
-> Pt (point) is a fixed-size unit that is used in print. 1pt = 1/72 inch.
-> Percentage (%) is used to set the font size relative to the font size of the body. Thus, it is necessary to set a reasonable font size for the body.
`,
          code1: ``
        },
        {
          text1: ` <b>1. Absolute Units (Fixed)</b>
Absolute units have a fixed size regardless of the screen or parent element.
 <table data-start="457" data-end="714" node="[object Object]">
    <thead data-start="457" data-end="480">
      <tr data-start="457" data-end="480">
        <th data-start="457" data-end="465">Unit</th>
        <th data-start="465" data-end="480">Description</th>
      </tr>
    </thead>
    <tbody data-start="505" data-end="714">
      <tr data-start="505" data-end="543">
        <td><code data-start="507" data-end="511">px</code></td>
        <td>Pixels (most commonly used)</td>
      </tr>
      <tr data-start="544" data-end="601">
        <td><code data-start="546" data-end="550">pt</code></td>
        <td>Points (1 pt = 1/72 inch, used in print media)</td>
      </tr>
      <tr data-start="602" data-end="624">
        <td><code data-start="604" data-end="608">cm</code></td>
        <td>Centimeters</td>
      </tr>
      <tr data-start="625" data-end="647">
        <td><code data-start="627" data-end="631">mm</code></td>
        <td>Millimeters</td>
      </tr>
      <tr data-start="648" data-end="682">
        <td><code data-start="650" data-end="654">in</code></td>
        <td>Inches (1 in = 2.54 cm)</td>
      </tr>
      <tr data-start="683" data-end="714">
        <td><code data-start="685" data-end="689">pc</code></td>
        <td>Picas (1 pc = 12 pt)</td>
      </tr>
    </tbody>
  </table>`,
          code1: ``
        },
        {
          text1: `<b>2. Relative Units (Flexible)</b>
          Relative units depend on the viewport, parent element, or font size.
          
            <table data-start="1060" data-end="1562" node="[object Object]">
    <thead data-start="1060" data-end="1083">
      <tr data-start="1060" data-end="1083">
        <th data-start="1060" data-end="1068">Unit</th>
        <th data-start="1068" data-end="1083">Description</th>
      </tr>
    </thead>
    <tbody data-start="1108" data-end="1562">
      <tr data-start="1108" data-end="1159">
        <td><code data-start="1110" data-end="1113">%</code></td>
        <td>Percentage relative to the parent element</td>
      </tr>
      <tr data-start="1160" data-end="1213">
        <td><code data-start="1162" data-end="1166">em</code></td>
        <td>Relative to the parent element's font size</td>
      </tr>
      <tr data-start="1214" data-end="1265">
        <td><code data-start="1216" data-end="1221">rem</code></td>
        <td>Relative to the root (<code data-start="1246" data-end="1252">html</code>) font size</td>
      </tr>
      <tr data-start="1266" data-end="1305">
        <td><code data-start="1268" data-end="1272">vw</code></td>
        <td>Percentage of viewport width</td>
      </tr>
      <tr data-start="1306" data-end="1346">
        <td><code data-start="1308" data-end="1312">vh</code></td>
        <td>Percentage of viewport height</td>
      </tr>
      <tr data-start="1347" data-end="1396">
        <td><code data-start="1349" data-end="1355">vmin</code></td>
        <td>Based on the smaller of <code data-start="1382" data-end="1386">vw</code> or <code data-start="1390"
            data-end="1394">vh</code></td>
      </tr>
      <tr data-start="1397" data-end="1445">
        <td><code data-start="1399" data-end="1405">vmax</code></td>
        <td>Based on the larger of <code data-start="1431" data-end="1435">vw</code> or <code data-start="1439"
            data-end="1443">vh</code></td>
      </tr>
      <tr data-start="1446" data-end="1503">
        <td><code data-start="1448" data-end="1452">ch</code></td>
        <td>Width of the "0" character in the current font</td>
      </tr>
      <tr data-start="1504" data-end="1562">
        <td><code data-start="1506" data-end="1510">ex</code></td>
        <td>Height of the lowercase "x" in the current font</td>
      </tr>
    </tbody>
  </table>`,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "Difference between CSS grid vs flexbox?",
      note: [
        {
          text1: `CSS Grid Layout is a two-dimensional system along with rows and columns. It is used for large-sized layouts.
Flexbox is a Grid layout with a one-dimensional system either within a row or a column. It is used for an application's components.`,
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
      title: "horizontally and vertically center an element ",
      note: [
        {
          text1: `<b>1. Using Flexbox (Best Method)</b>
          
           This method is responsive and works well for most layouts.
           `,
          code1: `.container {
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Centers vertically */
  height: 100vh; /* Full viewport height */
}
`
        },
        {
          text1: `<b>2. Using Grid (Modern Approach)</b>
          
          The place-items: center; is a shorthand for justify-items (horizontal) and align-items (vertical).
          `,
          code1: `.container {
  display: grid;
  place-items: center; /* Centers both horizontally & vertically */
  height: 100vh;
}
`
        },
        {
          text1: `<b>3. Using Absolute Positioning & Transform</b>
          Moves the element to the center by shifting it back by <b>50% of its own width and height.</b>`,
          code1: `.element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
`
        },
        {
          text1: `<b>4. Using Margin Auto (For Block Elements)</b>
          If the element has a fixed width and height, use this:
          This works only for elements with fixed dimensions.


          <b>Best Choice?</b>
✔ <b>Use Flexbox</b> or <b>CSS Grid</b> for modern and responsive designs.
✔ Use <b>position: absolute</b> for centering in a specific area.
          `,
          code1: `.element {
  width: 200px;
  height: 100px;
  margin: auto;
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
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