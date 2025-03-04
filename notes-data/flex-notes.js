


const isHighlighted = 'flex-notes'
const Links1 = 'css-notes'
const Links2 = 'flex-notes'
const Links3 = 'vue-x'
const Links4 = 'vuejs-projects'
  
  const flexData = {
    flexNote: [
      {
        id: 52,
        title: "flex",
        note: [
          {
            text1: `The flexible box layout module (usually referred to as flexbox) is a one-dimensional layout model for distributing space between items and includes numerous alignment capabilities. This article gives an outline of the main features of flexbox, which we will explore in more detail in the rest of these guides.
            
           <b> The two axes of flexbox</b>
When working with flexbox you need to think in terms of two axes — the main axis and the cross axis. The main axis is defined by the flex-direction property, and the cross axis runs perpendicular to it. Everything we do with flexbox refers back to these axes, so it is worth understanding how they work from the outset.

<b>What can you do with a flex layout?</b>
Flex layouts have the following features, which you will be able to explore in this guide.

=> They can display as a row, or a column.
=> They respect the writing mode of the document.
=> They are single line by default, but can be asked to wrap onto multiple lines.
=> Items in the layout can be visually reordered, away from their order in the DOM.
=> Space can be distributed inside the items, so they become bigger and smaller according to the space available in their parent.
=> Space can be distributed around the items and flex lines in a wrapped layout, using the Box Alignment properties.
=> The items themselves can be aligned on the cross axis.

<b>The main axis</b>
The main axis is defined by flex-direction, which has four possible values:
The main axis is the one set by your <b>flex-direction</b> property. If that is <b>row</b> your main axis is along the row, if it is <b>column</b> your main axis is along the column.
The main axis is defined by the <u>flex-direction</u> property. It determines the direction in which the flex items are placed in the flex container.
The <u>flex-direction</u> property has four possible values, each of which affects the orientation of the main axis:

=> row
=> row-reverse
=> column
=> column-reverse

<b>cross axis</b>
The cross axis runs in the other direction to the <b>main axis</b>, so if <b>flex-direction</b> is <b>row</b> the cross axis runs along the <b>column</b>.
While the main axis is determined by the <u>flex-direction</u> property, the cross axis runs perpendicular to the main axis. If the main axis is horizontal (using <u>row</u> or <u>row-reverse</u>), the cross axis is vertical. Conversely, if the main axis is vertical (using <u>column</u> or <u>column-reverse</u>), the cross axis is horizontal.

The cross axis is used to align items within the flex container, and properties like <u>align-items</u> and <u>align-content</u> operate along this axis.

<b>Property reference</b>
=> align-content
=> align-items
=> align-self
=> flex-wrap
=> flex-direction
=> flex
=> flex-basis
=> flex-flow
=> flex-grow
=> flex-shrink
=> justify-content
=> order
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
        title: "flex container",
        note: [
          {
            text1: `An area of a document that is laid out using flexbox is called a <b>flex container</b>. To create a flex container, set the area's <u>display</u> property to <u>flex</u>. When we do this, the direct children of that container become <u>flex items</u>. You can explicitly control whether the container itself is displayed inline or in block formatting context using inline flex or <u>inline-flex</u> for <u>inline flex</u> containers or <u>block flex</u> or <u>flex</u> for block level flex containers.
            
            A <u>flexbox</u> layout is defined using the <u>flex</u> or <u>inline-flex</u> values of the display property on the parent item. This element then becomes a <u>flex container</u>, and each one of its children becomes a <u>flex item</u>.

A value of <u>flex</u> causes the element to become a block level flex container, and inline-flex an inline level flex container. These values create a <b>flex formatting context</b> for the element, which is similar to a block formatting context in that floats will not intrude into the container, and the margins on the container will not collapse with those of the items.

As with all properties in CSS, some initial values are defined, so the contents of a new flex container will behave in the following way:

=> Items display in a row (the <u>flex-direction</u> property's default value is row).
=> The items start from the start edge of the main axis.
=> The items do not stretch on the main dimension but can shrink (a flex-item's <u>flex-grow</u> property's default value is 0 and its <u>flex-shrink</u> property's default value is 1).
=> The items will stretch to fill the size of the cross-axis (the <u>align-items</u> property's default value is <u>stretch</u>).
=> The flex-item's <u>flex-basis</u> property's default value is <u>auto</u>. This means that, in each case, it will be equal to the flex item <u>width</u> in horizontal writing mode, and the flex item <u>height</u> in vertical writing mode. If the corresponding <u>width/height</u> is also set to <u>auto</u>, the <u>flex-basis content</u> value is used instead.
=> All the items will be in a single row (the <u>flex-wrap</u> property's default value is <u>nowrap</u>), overflowing their container if their combined <u>width/height</u> exceeds the containing element <u>width/height</u>.
            `,
            code1: `//To use flexbox you need to declare that you want to use a flex formatting context and not regular block and inline layout. Do this by changing the value of the "display" property to "flex".
&lt;div class=&quot;container&quot;&gt;
  &lt;div&gt;One&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div&gt;The item we will refer to as three&lt;/div&gt;
&lt;/div&gt;


.container {
  display: flex;
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
        title: "flex-direction",
        note: [
          {
            text1: `<b>row (default)</b>: The main axis runs horizontally from left to right. Flex items are placed in a row, starting from the left and moving towards the right. This is the default value for <u>flex-direction</u>.

<b>row-reverse</b>: The main axis runs horizontally but in reverse order, from right to left. Flex items are placed in a row, starting from the right and moving towards the left.

<b>column</b>: The main axis runs vertically from top to bottom. Flex items are placed in a column, starting from the top and moving towards the bottom.

<b>column-reverse</b>: The main axis runs vertically but in reverse order, from bottom to top. Flex items are placed in a column, starting from the bottom and moving towards the top.

<div class="flex-direction-box">
<h4> Default flex </h4>
<div class="flex-container-axis-dir flex-decoration-b">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
</div>

<div class="flex-direction-box">
<h4> flex-direction : row </h4>
<div class="flex-container-axis-dir-row flex-decoration-b">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
</div>

<div class="flex-direction-box">
<h4> flex-direction : row-reverse </h4>
<div class="flex-container-axis-dir-row-reverse flex-decoration-b">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
</div>

<div class="flex-direction-box">
<h4> flex-direction : column </h4>
    <div class="flex-container-axis-dir-column flex-decoration-b">
        <div>1</div>
        <div>2</div>
        <div>3</div>  
    </div>
</div>

<div class="flex-direction-box">
<h4> flex-direction : column-reverse </h4>
    <div class="flex-container-axis-dir-column-reverse flex-decoration-b">
        <div>1</div>
        <div>2</div>
        <div>3</div>  
    </div>
</div>`,
            code1: `.container {
  display: flex;
  flex-direction: row;
}
            
            .container {
  display: flex;
  flex-direction: row-reverse;
}

            .container {
  display: flex;
  flex-direction: column;
}

            .container {
  display: flex;
  flex-direction: column-reverse;
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
        title: "flex-wrap",
        note: [
          {
            text1: `By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.
            
            The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

=>             nowrap (default): all flex items will be on one line
=> wrap: flex items will wrap onto multiple lines, from top to bottom.
=> wrap-reverse: flex items will wrap onto multiple lines from bottom to top.

/* Global values */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: revert;
flex-wrap: revert-layer;
flex-wrap: unset;

<div class="flex-wrap-example-container"> 
<h5>nowrap</h5>
<div class="flex-wrap-example" style="display: flex; flex-wrap: nowrap;">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
</div>

    <div class="flex-wrap-example-container"> 
        <h5>wrap</h5>
<div class="flex-wrap-example" style="display: flex; flex-wrap: wrap;">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
    </div>

    <div class="flex-wrap-example-container">
        <h5>wrap-reverse</h5>
<div class="flex-wrap-example" style="display: flex; flex-wrap: wrap-reverse;">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
    </div>    
`,
            code1: `.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}

flex-wrap: nowrap;
flex-wrap: wrap;
flex-wrap: wrap-reverse;
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
        title: "flex-flow",
        note: [
          {
            text1: `This is a shorthand for the flex-direction and flex-wrap properties, which together define the flex container’s main and cross axes. The default value is row nowrap.
            
The flex-flow CSS shorthand property specifies the direction of a flex container, as well as its wrapping behavior.

        <div class="flex-wrap-example-container">
        <h5>flex-flow: row wrap</h5>
        <div class="flex-wrap-example" style="display: flex; flex-flow: row wrap;">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            </div>
        </div>    

                <div class="flex-wrap-example-container">
        <h5>flex-flow: row-reverse nowrap;</h5>
        <div class="flex-wrap-example" style="display: flex; flex-flow: row-reverse nowrap;">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            </div>
        </div>    

                <div class="flex-wrap-example-container">
        <h5>flex-flow: column-reverse wrap;</h5>
        <div class="flex-wrap-example" style="display: flex; flex-flow: column-reverse wrap;">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            </div>
        </div>    

                <div class="flex-wrap-example-container">
        <h5>flex-flow: column wrap;</h5>
        <div class="flex-wrap-example" style="display: flex; flex-flow: column wrap;">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            </div>
        </div>    

                <div class="flex-wrap-example-container">
        <h5>flex-flow: column-reverse nowrap</h5>
        <div class="flex-wrap-example" style="display: flex; flex-flow: column-reverse nowrap;">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            </div>
        </div>    









        <center>  
<h5>  flex-flow: row wrap;</h5>  
<div id= "row" class="mainrow flex-wrap-div">  
    <div style="background-color: lightblue;"> 1 </div>  
    <div style="background-color: pink;"> 2 </div>  
    <div style="background-color: lightgreen"> 3 </div>  
    <div style="background-color: yellow;"> 4 </div>  
<div style="background-color: lightgreen"> 5 </div> 
<div style="background-color: lightblue;"> 6 </div> 
<div style="background-color: yellow;"> 7 </div>  
<div style="background-color: lightgreen"> 8 </div>  
<div style="background-color: lightblue;"> 9 </div>  
<div style="background-color: yellow;"> 10 </div>  
</div>  
<h5>  flex-flow: row-reverse wrap;</h5>  
<div id="rowrev" class = "mainrow flex-wrap-div">  
    <div style="background-color: lightblue;"> 1 </div>  
    <div style="background-color: pink;"> 2 </div>  
    <div style="background-color: lightgreen"> 3 </div>  
    <div style="background-color: yellow;"> 4 </div>  
<div style="background-color: lightgreen"> 5 </div> 
<div style="background-color: lightblue;"> 6 </div> 
<div style="background-color: yellow;"> 7 </div>  
<div style="background-color: lightgreen"> 8 </div>  
<div style="background-color: lightblue;"> 9 </div>  
<div style="background-color: yellow;"> 10 </div>  
</div>  



<h5>  flex-flow: column wrap;</h5>  
<div id="col" class = "maincol flex-wrap-div">  
<div style="background-color: lightblue;"> 1 </div>  
<div style="background-color: pink;"> 2 </div>  
<div style="background-color: lightgreen"> 3 </div>  
<div style="background-color: yellow;"> 4 </div>  
<div style="background-color: lightgreen"> 5 </div> 
<div style="background-color: lightblue;"> 6 </div> 
<div style="background-color: yellow;"> 7 </div>  
<div style="background-color: lightgreen"> 8 </div>  
<div style="background-color: lightblue;"> 9 </div>  
<div style="background-color: yellow;"> 10 </div>  
</div>  
<h5>  flex-flow: column-reverse wrap;</h5>  
<div id="colrev" class = "maincol flex-wrap-div">  
<div style="background-color: lightblue;"> 1 </div>  
<div style="background-color: pink;"> 2 </div>  
<div style="background-color: lightgreen"> 3 </div>  
<div style="background-color: yellow;"> 4 </div>  
<div style="background-color: lightgreen"> 5 </div> 
<div style="background-color: lightblue;"> 6 </div> 
<div style="background-color: yellow;"> 7 </div>  
<div style="background-color: lightgreen"> 8 </div>  
<div style="background-color: lightblue;"> 9 </div>  
<div style="background-color: yellow;"> 10 </div>  
</div>  
</center>  
            `,
            code1: `.container {
  flex-flow: column wrap;
}

flex-flow: row wrap;
flex-flow: row-reverse nowrap;
flex-flow: column-reverse wrap;
flex-flow: column wrap;


//------------
.mainrow {
    width: 85px;
    height: 100px;
    border: 5px solid red;
}

.maincol {
    width: 200px;
    height: 150px;
    text-align: left;
    border: 5px solid red;
}

#row {
    flex-flow: row wrap;
}

#rowrev {
    flex-flow: row-reverse wrap;
}

#col {
    flex-flow: column wrap;
}

#colrev {
    flex-flow: column-reverse wrap;
}

.flex-wrap-div {
    /* width: 100px;
    height: 50px; */
    display: flex;
    font-size: 20px;
    font-weight: bold;
}

&lt;center&gt;
    &lt;h5&gt; flex-flow: row wrap;&lt;/h5&gt;
    &lt;div id=&quot;row&quot; class=&quot;mainrow flex-wrap-div&quot;&gt;
        &lt;div style=&quot;background-color: lightblue;&quot;&gt; 1 &lt;/div&gt;
        &lt;div style=&quot;background-color: pink;&quot;&gt; 2 &lt;/div&gt;
        &lt;div style=&quot;background-color: lightgreen&quot;&gt; 3 &lt;/div&gt;
        &lt;div style=&quot;background-color: yellow;&quot;&gt; 4 &lt;/div&gt;
        &lt;div style=&quot;background-color: lightgreen&quot;&gt; 5 &lt;/div&gt;
        &lt;div style=&quot;background-color: lightblue;&quot;&gt; 6 &lt;/div&gt;
        &lt;div style=&quot;background-color: yellow;&quot;&gt; 7 &lt;/div&gt;
        &lt;div style=&quot;background-color: lightgreen&quot;&gt; 8 &lt;/div&gt;
        &lt;div style=&quot;background-color: lightblue;&quot;&gt; 9 &lt;/div&gt;
        &lt;div style=&quot;background-color: yellow;&quot;&gt; 10 &lt;/div&gt;
    &lt;/div&gt;
    &lt;h5&gt; flex-flow: row-reverse wrap;&lt;/h5&gt;
    &lt;div id=&quot;rowrev&quot; class=&quot;mainrow flex-wrap-div&quot;&gt;
        &lt;div style=&quot;background-color: lightblue;&quot;&gt; 1 &lt;/div&gt;
        &lt;div style=&quot;background-color: pink;&quot;&gt; 2 &lt;/div&gt;
        &lt;div style=&quot;background-color: lightgreen&quot;&gt; 3 &lt;/div&gt;
        &lt;div style=&quot;background-color: yellow;&quot;&gt; 4 &lt;/div&gt;
        &lt;div style=&quot;background-color: lightgreen&quot;&gt; 5 &lt;/div&gt;
        &lt;div style=&quot;background-color: lightblue;&quot;&gt; 6 &lt;/div&gt;
        &lt;div style=&quot;background-color: yellow;&quot;&gt; 7 &lt;/div&gt;
        &lt;div style=&quot;background-color: lightgreen&quot;&gt; 8 &lt;/div&gt;
        &lt;div style=&quot;background-color: lightblue;&quot;&gt; 9 &lt;/div&gt;
        &lt;div style=&quot;background-color: yellow;&quot;&gt; 10 &lt;/div&gt;
    &lt;/div&gt;
    &lt;h5&gt; flex-flow: column wrap;&lt;/h5&gt;
    &lt;div id=&quot;col&quot; class=&quot;maincol flex-wrap-div&quot;&gt;
        &lt;div style=&quot;background-color: lightblue;&quot;&gt; 1 &lt;/div&gt;
        &lt;div style=&quot;background-color: pink;&quot;&gt; 2 &lt;/div&gt;
        &lt;div style=&quot;background-color: lightgreen&quot;&gt; 3 &lt;/div&gt;
        &lt;div style=&quot;background-color: yellow;&quot;&gt; 4 &lt;/div&gt;
        &lt;div style=&quot;background-color: lightgreen&quot;&gt; 5 &lt;/div&gt;
        &lt;div style=&quot;background-color: lightblue;&quot;&gt; 6 &lt;/div&gt;
        &lt;div style=&quot;background-color: yellow;&quot;&gt; 7 &lt;/div&gt;
        &lt;div style=&quot;background-color: lightgreen&quot;&gt; 8 &lt;/div&gt;
        &lt;div style=&quot;background-color: lightblue;&quot;&gt; 9 &lt;/div&gt;
        &lt;div style=&quot;background-color: yellow;&quot;&gt; 10 &lt;/div&gt;
    &lt;/div&gt;
    &lt;h5&gt; flex-flow: column-reverse wrap;&lt;/h5&gt;
    &lt;div id=&quot;colrev&quot; class=&quot;maincol flex-wrap-div&quot;&gt;
        &lt;div style=&quot;background-color: lightblue;&quot;&gt; 1 &lt;/div&gt;
        &lt;div style=&quot;background-color: pink;&quot;&gt; 2 &lt;/div&gt;
        &lt;div style=&quot;background-color: lightgreen&quot;&gt; 3 &lt;/div&gt;
        &lt;div style=&quot;background-color: yellow;&quot;&gt; 4 &lt;/div&gt;
        &lt;div style=&quot;background-color: lightgreen&quot;&gt; 5 &lt;/div&gt;
        &lt;div style=&quot;background-color: lightblue;&quot;&gt; 6 &lt;/div&gt;
        &lt;div style=&quot;background-color: yellow;&quot;&gt; 7 &lt;/div&gt;
        &lt;div style=&quot;background-color: lightgreen&quot;&gt; 8 &lt;/div&gt;
        &lt;div style=&quot;background-color: lightblue;&quot;&gt; 9 &lt;/div&gt;
        &lt;div style=&quot;background-color: yellow;&quot;&gt; 10 &lt;/div&gt;
    &lt;/div&gt;
&lt;/center&gt;
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
        title: "justify-content",
        note: [
          {
            text1: `The CSS <u>justify-content</u> property defines how the browser distributes space between and around content items along the <u>main axis</u> of a flex container and the inline axis of grid and multicol containers.
            
            It defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

The <u>justify-content</u> property accepts five different values:

<b>flex-start (default)</b>: items are packed toward the start line
The default setting for aligning flex elements from the beginning of the container is flex-start.
<b>Inherit</b>: The elements are arranged according to the value of their inherited parent element.
<b>flex-end</b>: items are packed toward to end line. It aligns flex elements at the container's end.
<b>start</b>: items are packed toward the start of the writing-mode direction.
<b>end</b>: items are packed toward the end of the writing-mode direction.
<b>left</b>: items are packed toward left edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like start.
<b>right</b>: items are packed toward right edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like end.
<b>center</b>: items are centered along the line. The container's center is where the flex elements are aligned.
<b>space-between</b>: items are evenly distributed in the line; first item is on the start line, last item on the end line. Flex items are arranged with equal spacing, with the first thing pushed to the front and the final item pushed to the back.
<b>space-around</b>: items are evenly distributed in the line with equal space around them. The flexible elements are positioned before, between, and after each other, and the corners with equal spacing.
<b>space-evenly</b>: items are distributed so that the spacing between any two adjacent alignment subjects, before the first alignment subject, and after the last alignment subject is the same. The items are arranged uniformly in space, but the distances from the corners differ.

There are also two additional keywords you can pair with these values: safe and unsafe. Using safe ensures that however you do this type of positioning, you can’t push an element such that it renders off-screen (e.g. off the top) in such a way the content can’t be scrolled too (called “data loss”).

<div class="justify-content-flex-container-box">
<h5>flex-start</h5> 
<ul class="flex-container flex-start">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
</ul>

<h5>flex-end</h5> 
<ul class="flex-container flex-end">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
</ul>

<h5>center</h5> 
<ul class="flex-container center-f">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
</ul>

<h5>space-between</h5> 
<ul class="flex-container space-between">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
</ul>

<h5>space-around</h5> 
<ul class="flex-container space-around">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
</ul>

<h5>space-evenly</h5> 
<ul class="flex-container space-evenly">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
</ul>
</div>
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
        title: "align-items",
        note: [
          {
            text1: `The CSS <b>align-items</b> property sets the <b>align-self</b> value on all direct children as a group. In flexbox, it controls the alignment of items on the cross axis. In grid layout, it controls the alignment of items on the block axis within their grid areas.

            This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the <b>cross-axis</b> (perpendicular to the main-axis).
            
            The align-items property defines the default behavior for how items are laid out along the cross axis (perpendicular to the main axis).

Imagine a horizontal flexbox layout. That horizontal flow is the main axis, so align-items is the alignment opposite that, on the vertical axis. Bear in mind that changes when the main axis changes, and the cross axis changes with it.

You can think of align-items as the justify-content version for the cross-axis (perpendicular to the main-axis).

The align-items property accepts 5 different values:


<b>center</b>
The flex items' margin boxes are centered within the line on the cross-axis. If the cross-size of an item is larger than the flex container, it will overflow equally in both directions.
center: items are centered in the cross-axis

<b>start</b>
The items are packed flush to each other toward the start edge of the alignment container in the appropriate axis.

<b>end</b>
The items are packed flush to each other toward the end edge of the alignment container in the appropriate axis.

<b>self-start</b>
The items are packed flush to the edge of the alignment container's start side of the item, in the appropriate axis.

<b>self-end</b>
The items are packed flush to the edge of the alignment container's end side of the item, in the appropriate axis.

<b>baseline, first baseline, last baseline</b>
All flex items are aligned such that their flex container baselines align. The item with the largest distance between its cross-start margin edge and its baseline is flushed with the cross-start edge of the line.
baseline: items are aligned such as their baselines align

<b>stretch</b>
If the items are smaller than the alignment container, auto-sized items will be equally enlarged to fill the container, respecting the items' width and height limits.
stretch (default): stretch to fill the container (still respect min-width/max-width)

<b>anchor-center</b>
In the case of anchor-positioned elements, aligns the items to the center of the associated anchor element in the block direction. See Centering on the anchor using anchor-center.

<b>safe</b>
Used alongside an alignment keyword. If the chosen keyword means that the item overflows the alignment container causing data loss, the item is instead aligned as if the alignment mode were start.

<b>unsafe</b>
Used alongside an alignment keyword. Regardless of the relative sizes of the item and alignment container and whether overflow which causes data loss might happen, the given alignment value is honored.

There are also two values that were defined for flexbox, as they are base on flex model axes concepts, that work in grid layouts as well:

<b>flex-start</b>
Used in flex layout only, aligns the flex items flush against the flex container's main-start or cross-start side. When used outside of a flex formatting context, this value behaves as start.
flex-start: cross-start margin edge of the items is placed on the cross-start line

<b>flex-end</b>
Used in flex layout only, aligns the flex items flush against the flex container's main-end or cross-end side. When used outside of a flex formatting context, this value behaves as end.
flex-end: cross-end margin edge of the items is placed on the cross-end line

<div class="justify-content-flex-container-box"> 
<div>
    <h5>align-items : flex-start</h5> 
    <ul class="align-items-flex-container align-items-flex-start">
        <li class="align-items-flex-item">1<br>2</li>
        <li class="align-items-flex-item">3</li>
        <li class="align-items-flex-item">4<br>5</li>
        <li class="align-items-flex-item">6</li>
    </ul>
</div>

<div>
    <h5>align-items : flex-end</h5> 
    <ul class="align-items-flex-container align-items-flex-end">
        <li class="align-items-flex-item">1<br>2</li>
        <li class="align-items-flex-item">3</li>
        <li class="align-items-flex-item">4<br>5</li>
        <li class="align-items-flex-item">6</li>
    </ul>
</div>

    <div>
        <h5>align-items : center</h5> 
        <ul class="align-items-flex-container align-items-center">
            <li class="align-items-flex-item">1<br>2</li>
            <li class="align-items-flex-item">3</li>
            <li class="align-items-flex-item">4<br>5</li>
            <li class="align-items-flex-item">6</li>
        </ul>
    </div>

    <div>
        <h5>align-items : baseline</h5> 
        <ul class="align-items-flex-container align-items-baseline">
            <li class="align-items-flex-item">1<br>2</li>
            <li class="align-items-flex-item">3</li>
            <li class="align-items-flex-item">4<br>5</li>
            <li class="align-items-flex-item">6</li>
        </ul>
    </div>

    <div>
        <h5>align-items : stretch</h5> 
        <ul class="flex-container align-items-stretch">
            <li class="align-items-flex-item">1<br>2</li>
            <li class="align-items-flex-item">3</li>
            <li class="align-items-flex-item">4<br>5</li>
            <li class="align-items-flex-item">6</li>
        </ul>
    </div>
</div>
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
        title: "align-content",
        note: [
          {
            text1: `The CSS <b>align-content</b> property sets the distribution of space between and around content items along a flexbox's cross axis, or a grid or block-level element's block axis.
            
            It helps to align a flex container's lines within it when there is extra space in the cross-axis, similar to how <u>justify-content</u> aligns individual items within the main-axis.

<i><b>Note</b>, this property has no effect when the flexbox has only a single line.</i>

The align-content property accepts 6 different values:

<b>flex-start</b>: lines packed to the start of the container
<b>flex-end</b>: lines packed to the end of the container
<b>center</b>: lines packed to the center of the container
<b>space-between</b>: lines evenly distributed; the first line is at the start of the container while the last one is at the end
<b>space-around</b>: lines evenly distributed with equal space between them
<b>stretch (default)</b>: lines stretch to take up the remaining space


<div class="align-content-box">
<div class="align-content-sub-box">
<h5>align-content-flex-start</h5> 
<ul class="align-content-flex-container align-content-flex-start">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
  <li class="flex-item">6</li>
</ul>
</div>

<div class="align-content-sub-box">
<h5>align-content-flex-end</h5> 
<ul class="align-content-flex-container align-content-flex-end">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
  <li class="flex-item">6</li>
</ul>
</div>


<div class="align-content-sub-box">
<h5>align-content-center</h5> 
<ul class="align-content-flex-container align-content-center">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
  <li class="flex-item">6</li>
</ul>
</div>


<div class="align-content-sub-box">
<h5>align-content-space-between</h5> 
<ul class="align-content-flex-container align-content-space-between">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
  <li class="flex-item">6</li>
</ul>
</div>


<div class="align-content-sub-box">
<h5>align-content-space-around</h5> 
<ul class="align-content-flex-container align-content-space-around">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
  <li class="flex-item">6</li>
</ul>
</div>


<div class="align-content-sub-box">
<h5>align-content-stretch</h5> 
<ul class="align-content-flex-container align-content-stretch">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
  <li class="flex-item">6</li>
</ul>
</div>

`,
            code1: `align-content: flex-start | flex-end | center | space-between | space-around | stretch

.flex-container {
  align-content: space-around;
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
        title: "gap, row-gap, column-gap",
        note: [
          {
            text1: `The gap CSS shorthand property sets the gaps (also called <a href="https://developer.mozilla.org/en-US/docs/Glossary/Gutters" target="_blank">gutters</a>) between rows and columns. This property applies to multi-column, flex, and grid containers.
            
            <div class="gap-sub-box">
<h5>flex - gap</h5> 
<ul class="gap-flex">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
  <li class="flex-item">6</li>
</ul>
</div>
`,
            code1: `gap: 0;
            gap: 10%;
            gap: 1em;
            gap: 10px 20px;
            gap: calc(20px + 10%);
            
            
            
            
            //----------
            // Gap 
.gap-flex {
    list-style: none;
    gap: 5%;
    padding: 0;

    display: flex;
    flex-wrap: wrap;
}

.gap-sub-box {
    width: 256px;
    padding: 10px;
    margin: auto;
    border: 1px solid rgb(93, 4, 4);
}

.gap-sub-box h5 {
    text-align: center;
}
            
            &lt;div class=&quot;gap-sub-box&quot;&gt;
&lt;h5&gt;flex - gap&lt;/h5&gt; 
&lt;ul class=&quot;gap-flex&quot;&gt;
  &lt;li class=&quot;flex-item&quot;&gt;1&lt;/li&gt;
  &lt;li class=&quot;flex-item&quot;&gt;2&lt;/li&gt;
  &lt;li class=&quot;flex-item&quot;&gt;3&lt;/li&gt;
  &lt;li class=&quot;flex-item&quot;&gt;4&lt;/li&gt;
  &lt;li class=&quot;flex-item&quot;&gt;5&lt;/li&gt;
  &lt;li class=&quot;flex-item&quot;&gt;6&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;`
          },
          {
            text1: `<b>row-gap</b>
            The row-gap property in CSS sets space (formally called “gutters”) between rows in CSS Grid, Flexbox, and CSS Columns layouts.

            You can think of row-gap as the “next generation” or successor of grid-row-gap which was originally defined in the CSS Grid Layout specification. In an effort to extend that feature of grid so that it applies to flexbox and columns as well, the grid- prefix was dropped. It's less specific to grid that way.

But it's also a bit of a hassle if you've already been using grid-row-gap (as well as grid-gap and grid-column-gap for that matter) because it means we need to support the prefixed version until every browser makes the switch. The future-proof way to do that is to declare the prefixed property before row-gap. That way, browsers that support it will use it and those that don't will go up the next level and get what they need.
            
<div class="row-gap-sub-box">
<h5>flex - row gap</h5> 
<ul class="row-gap-flex">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
  <li class="flex-item">6</li>
</ul>
</div>
`,
            code1: `/* Default value */
row-gap: normal;

/* <length> values */
row-gap: 50px;
row-gap: 2rem;
row-gap: 1.5em;
row-gap: 5vw;
row-gap: 25ch;

/* <percentage> value */
row-gap: 15%;

/* Global values */
row-gap: inherit;
row-gap: initial;
row-gap: unset;


//---------
//row Gap 
.row-gap-flex {
    list-style: none;
    row-gap: 20px;
    padding: 0;

    display: flex;
    flex-wrap: wrap;
}

.row-gap-sub-box {
    width: 232px;
    padding: 10px;
    margin: auto;
    border: 1px solid rgb(93, 4, 4);
}

.row-gap-sub-box h5 {
    text-align: center;
}


&lt;div class=&quot;row-gap-sub-box&quot;&gt;
&lt;h5&gt;flex - row gap&lt;/h5&gt; 
&lt;ul class=&quot;row-gap-flex&quot;&gt;
  &lt;li class=&quot;flex-item&quot;&gt;1&lt;/li&gt;
  &lt;li class=&quot;flex-item&quot;&gt;2&lt;/li&gt;
  &lt;li class=&quot;flex-item&quot;&gt;3&lt;/li&gt;
  &lt;li class=&quot;flex-item&quot;&gt;4&lt;/li&gt;
  &lt;li class=&quot;flex-item&quot;&gt;5&lt;/li&gt;
  &lt;li class=&quot;flex-item&quot;&gt;6&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
`
          },
          {
            text1: `<b>column-gap</b>
            The CSS column-gap property sets space (also called “gutters”) between between columns in CSS Grid, Flexbox, and CSS Columns layouts.

            If you're wondering why we have a column-gap property when there's already a grid-column-gap one, you're not alone! In fact, column-gap effectively replaces grid-column-gap. By dropping the grid- prefix, it's a lot more clear that we can control gaps in more situations than CSS Grid.

Yeah, it's a bit of a headache if you've already been working with grid-column-gap because you now have to declare both for the widest browser support until browsers catch up to the change. So, a “future-proof” implementation might look something like this, where browsers that support column-gap will use it and browsers that do not support will skip it and use grid-column-gap instead.

            <div class="column-gap-sub-box">
<h5>flex - column gap</h5> 
<ul class="column-gap-flex">
  <li class="flex-item">1</li>
  <li class="flex-item">2</li>
  <li class="flex-item">3</li>
  <li class="flex-item">4</li>
  <li class="flex-item">5</li>
  <li class="flex-item">6</li>
</ul>
</div>`,
            code1: `// column Gap 
.column-gap-flex {
    list-style: none;
    column-gap: 20px;
    padding: 0;

    display: flex;
    flex-wrap: wrap;
}

.column-gap-sub-box {
    width: 184px;
    padding: 10px;
    margin: auto;
    border: 1px solid rgb(93, 4, 4);
}

.column-gap-sub-box h5 {
    text-align: center;
}

&lt;div class=&quot;column-gap-sub-box&quot;&gt;
&lt;h5&gt;flex - column gap&lt;/h5&gt; 
&lt;ul class=&quot;column-gap-flex&quot;&gt;
  &lt;li class=&quot;flex-item&quot;&gt;1&lt;/li&gt;
  &lt;li class=&quot;flex-item&quot;&gt;2&lt;/li&gt;
  &lt;li class=&quot;flex-item&quot;&gt;3&lt;/li&gt;
  &lt;li class=&quot;flex-item&quot;&gt;4&lt;/li&gt;
  &lt;li class=&quot;flex-item&quot;&gt;5&lt;/li&gt;
  &lt;li class=&quot;flex-item&quot;&gt;6&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
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
        section:'Properties for the Children(flex items)',
        title: "order",
        note: [
          {
            text1: `you can target individual items and change where they appear in the visual order with the order property.
            
            The <b>order</b> property is designed to lay the items out in ordinal groups. This means items are assigned an integer that represents their group. The items are then placed in the visual order according to that integer, lowest values first. If more than one item has the same integer value, then within that group the items are laid out as per source order.

            The order property is a sub-property of the Flexible Box Layout module.Flex items are displayed in the same order as they appear in the source document by default. The order property can be used to change this ordering.

            <ul class="order-flex-container">
  <li class="order-flex-item">1</li>
  <li class="order-flex-item">2</li>
  <li class="order-flex-item">3</li>
  <li class="order-flex-item">4</li>
  <li class="order-flex-item">5</li>
</ul>
            `,
            code1: `.elememt {
  order: 3;
}
order: <number>  


//--------

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-direction: row;
}
.box :nth-child(1) {
  order: 2;
}
.box :nth-child(2) {
  order: 3;
}
.box :nth-child(3) {
  order: 1;
}
.box :nth-child(4) {
  order: 3;
}
.box :nth-child(5) {
  order: 1;
}

//----------

.order-flex-container {
    padding: 0;
    margin: 0;
    list-style: none;
    
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
    
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
  }
  
  .order-flex-item:nth-of-type(1) { order: 3; }
  .order-flex-item:nth-of-type(2) { order: 4; }
  .order-flex-item:nth-of-type(3) { order: 1; }
  .order-flex-item:nth-of-type(4) { order: 5; }
  .order-flex-item:nth-of-type(5) { order: 2; }
  
  .order-flex-item {
    background: tomato;
    padding: 5px;
    width: 100px;
    height: 100px;
    margin: 5px;
    
    line-height: 100px;
    color: white;
    font-weight: bold;
    font-size: 2em;
    text-align: center;
  }


            &lt;ul class=&quot;order-flex-container&quot;&gt;
  &lt;li class=&quot;order-flex-item&quot;&gt;1&lt;/li&gt;
  &lt;li class=&quot;order-flex-item&quot;&gt;2&lt;/li&gt;
  &lt;li class=&quot;order-flex-item&quot;&gt;3&lt;/li&gt;
  &lt;li class=&quot;order-flex-item&quot;&gt;4&lt;/li&gt;
  &lt;li class=&quot;order-flex-item&quot;&gt;5&lt;/li&gt;
&lt;/ul&gt;
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
        title: "flex-grow",
        note: [
          {
            text1: `The <b>flex-grow</b> CSS property sets the flex grow factor, which specifies how much of the flex container's positive free space, if any, should be assigned to the flex item's main size.

When the flex-container's main size is larger than the combined main sizes of its flex items, this positive free space can be distributed among the flex items, with each item's growth being their growth factor value as a proportion of the sum total of all the flex items' flex grow factors.

The flex-grow property is a sub-property of the Flexible Box Layout module.
The flex-grow property is specified as a single &lt;number&gt;.
Default value:	0

It defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.

For example, if all items have flex-grow set to 1, every child will set to an equal size inside the container. If you were to give one of the children a value of 2, that child would take up twice as much space as the others.

<ul class="flex-grow-flex-container">
  <li class="flex-grow-flex-item">1</li>
  <li class="flex-grow-flex-item">2</li>
  <li class="flex-grow-flex-item">3</li>
  <li class="flex-grow-flex-item">4</li>
</ul>
`,
            code1: `  .flex-grow-flex-container {
    padding: 0;
    margin: 0;
    list-style: none;
    
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
      
    -webkit-justify-content: space-around;
    justify-content: space-around;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-align-items: stretch;
    align-items: stretch;
  }
  
  .flex-grow-flex-item:nth-of-type(1) { flex-grow: 1; }
  .flex-grow-flex-item:nth-of-type(2) { flex-grow: 1; }
  .flex-grow-flex-item:nth-of-type(3) { flex-grow: 2; }
  .flex-grow-flex-item:nth-of-type(4) { flex-grow: 1; }
  .flex-grow-flex-item:nth-of-type(5) { flex-grow: 1; }
  
  .flex-grow-flex-item {
    background: tomato;
    border: 3px solid rgba(0,0,0,.2);
    line-height: 100px;
    color: white;
    font-weight: bold;
    font-size: 2em;
    text-align: center;
  }
            
            &lt;ul class=&quot;flex-grow-flex-container&quot;&gt;
  &lt;li class=&quot;flex-grow-flex-item&quot;&gt;1&lt;/li&gt;
  &lt;li class=&quot;flex-grow-flex-item&quot;&gt;2&lt;/li&gt;
  &lt;li class=&quot;flex-grow-flex-item&quot;&gt;3&lt;/li&gt;
  &lt;li class=&quot;flex-grow-flex-item&quot;&gt;4&lt;/li&gt;
&lt;/ul&gt;`
          },
          {
            text1: ``,
            code1: ``
          },
        ],
      },
      {
        id: 52,
        title: "flex-shrink",
        note: [
          {
            text1: `The <b>flex-shrink</b> CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, the flex items can shrink to fit according to their flex-shrink value. Each flex line's negative free space is distributed between the line's flex items that have a flex-shrink value greater than 0.
            
            The flex-shrink property is a sub-property of the Flexible Box Layout module.

It specifies the "flex shrink factor" which determines how much the flex item will shrink relative to the rest of the flex items in the flex container when there isn't enough space on the row.

<b>Note</b>: It is recommended to use the <u>flex</u> shorthand instead of separate <u>flex-shrink, flex-grow</u> and <u>flex-basis</u> declarations. We have separated them here as this document covers one of the <u>flex</u> shorthand components: the <u>flex-shrink</u> property.
            The flex-shrink property specifies how much a flex item will shrink relative to the rest of the flex items.

            The first item has flex: 1 1 20em (shorthand for flex-grow: 1, flex-shrink: 1, flex-basis: 20em)
The second item has flex: 2 2 20em (shorthand for flex-grow: 2, flex-shrink: 2, flex-basis: 20em)

Both flex items want to be 20em wide. Because of the flex-grow (first parameter), if the flex container is larger than 40em, the 2nd child will take twice as much leftover space as the first child. But if the parent element is less than 40em wide, then the 2nd child will have twice as much shaved off of it as the 1st child, making it look smaller (because of the 2nd parameter, flex-shrink).

<ul class="flex-shrink-flex-container">
  <li class="flex-shrink-flex-item flex-shrink-flex1">1</li>
  <li class="flex-shrink-flex-item flex-shrink-flex2">2</li>
</ul>



<p>Do not let the third flex item shrink as much as the other flex items:</p>

<div class="flex-shrink-flex-container">
  <div>1</div>
  <div>2</div>
  <div style="flex-shrink: 0">3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</div>
`,
            code1: `.element {
  flex-shrink: 2;
}
 
Specifies the components of a flexible length: the flex grow factor and flex shrink factor, and the flex basis.
(Edge 12, Firefox 20, Safari 9, Chrome 29, IE 11, Opera 12)
Syntax: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]

//----------
.flex-shrink-flex-container {
  display: flex;
  align-items: stretch;
  background-color: #f1f1f1;
}

.flex-shrink-flex-container>div {
  background-color: DodgerBlue;
  color: white;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}

&lt;div class=&quot;flex-shrink-flex-container&quot;&gt;
  &lt;div&gt;1&lt;/div&gt;
  &lt;div&gt;2&lt;/div&gt;
  &lt;div style=&quot;flex-shrink: 0&quot;&gt;3&lt;/div&gt;
  &lt;div&gt;4&lt;/div&gt;
  &lt;div&gt;5&lt;/div&gt;
  &lt;div&gt;6&lt;/div&gt;
  &lt;div&gt;7&lt;/div&gt;
  &lt;div&gt;8&lt;/div&gt;
  &lt;div&gt;9&lt;/div&gt;
  &lt;div&gt;10&lt;/div&gt;
&lt;/div&gt;
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
        title: "flex-basis",
        note: [
          {
            text1: `The <b>flex-basis</b> property defines the size of the <b>flex-item</b> along the main axis of the flex container. The main axis is horizontal if <b>flex-direction</b> is set to <b>row</b> and it'll be vertical if the <b>flex-direction</b> property is set to <b>column</b>.
            
            <b>flex-basis: auto</b>
<b>flex-basis: auto</b> looks up the main size of the element and defines the size. For example, on a horizontal flex container, <b>auto</b> will look for <b>width</b> and <b>height</b> if the container axis is vertical.

If no size is specified, <b>auto</b> will fall back to <b>content</b>.

<b>flex-basis: content</b>
<b>flex-basis: content</b> resolves the size based on the element's content, unless <b>width</b> or <b>height</b> is set through normal <b>box-sizing</b>.

In both the cases where <b>flex-basis</b> is either <b>auto</b> or <b>content</b>, if main size is specified, that size will take priority.

<b>flex-basis:</b>
This is just as specifying <b>width</b> or <b>height</b>, but only more flexible. <b>lex-basis: 20em;</b> will set the initial size of the element to <b>20em</b>. Its final size will be based on available space, <b>flex-grow</b> multiple and <b>flex-shrink</b> multiple.

The specification suggests use of <b>flex</b> shorthand property. This helps write <b>flex-basis</b> along with <b>flex-grow</b> and <b>flex-shrink</b> properties.

<ul class="flex-basis-flex-container">
  <li class="flex-basis-flex-item flex-basis-flex1">1</li>
  <li class="flex-basis-flex-item flex-basis-flex2">2</li>
</ul>

    <center>
        <h6>
            The flex-basis Property
        </h6>
        <div class="flex-basis-Geeks">
            <div style="background-color:green;">
                number 80px
            </div>

            <div style="background-color:lightgreen;">
                percentage
            </div>

            <div style="background-color:green;">
                auto
            </div>

            <div style="background-color:lightgreen;">
                initial
            </div>

            <div style="background-color:green;">
                inherit
            </div>
        </div>
    </center>
            `,
            code1: `flex-basis: auto | content | <width> | <height>;
            
                    .Geeks {
            width: 400px;
            height: 70px;
            display: flex;
            border: 1px solid #8d09ca;
        }

        .Geeks div {
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: 80px;

            /* For Safari 6.1 and above browsers */
            -webkit-flex-grow: 0;
            -webkit-flex-shrink: 0;
            -webkit-flex-basis: 80px;
        }

        .Geeks div:nth-of-type(2) {
            flex-basis: 50%;
        }

        .Geeks div:nth-of-type(3) {
            flex-basis: auto;
        }

        .Geeks div:nth-of-type(4) {
            flex-basis: initial;
        }

        .Geeks div:nth-of-type(5) {
            flex-basis: inherit;
        }

                &lt;center&gt;
        &lt;h6&gt;
            The flex-basis Property
        &lt;/h6&gt;
        &lt;div class=&quot;Geeks&quot;&gt;
            &lt;div style=&quot;background-color:green;&quot;&gt;
                number 80px
            &lt;/div&gt;

            &lt;div style=&quot;background-color:lightgreen;&quot;&gt;
                percentage
            &lt;/div&gt;

            &lt;div style=&quot;background-color:green;&quot;&gt;
                auto
            &lt;/div&gt;

            &lt;div style=&quot;background-color:lightgreen;&quot;&gt;
                initial
            &lt;/div&gt;

            &lt;div style=&quot;background-color:green;&quot;&gt;
                inherit
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/center&gt;
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
        title: "align-self",
        note: [
          {
            text1: `The align-self property is a sub-property of the Flexible Box Layout module.

It makes possible to override the align-items value for specific flex items.
The align-self property accepts the same 5 values as the align-items:

=> flex-start: cross-start margin edge of the item is placed on the cross-start line
=> flex-end: cross-end margin edge of the item is placed on the cross-end line
=> center: item is centered in the cross-axis
=> baseline: items are aligned such as their baseline are aligned
=> stretch (default): stretch to fill the container (still respect min-width/max-width)

<ul class="align-self-flex-container">
  <li class="align-self-flex-item align-self-flex-start">1</li>
  <li class="align-self-flex-item align-self-flex-end">2</li>
  <li class="align-self-flex-item align-self-center">3</li>
  <li class="align-self-flex-item align-self-baseline">4</li>
  <li class="align-self-flex-item align-self-stretch">5</li>
</ul>
`,
            code1: `align-self: auto | flex-start | flex-end | center | baseline | stretch

.flex-item {
  align-self: flex-end;
}
  
//------------
.align-self-flex-container {
    padding: 0;
    margin: 0;
    list-style: none;
    height: 200px;
  
    display: flex;
  }
  
  .align-self-flex-start { align-self: flex-start; }
  .align-self-flex-end { align-self: flex-end; }
  .align-self-center { align-self: center; }
  .align-self-baseline { align-self: baseline; }
  .align-self-stretch { align-self: stretch; }
  
  .align-self-flex-item {
    background: tomato;
    padding: 5px;
    width: 100px;
    margin: 5px;
    line-height: 100px;
    color: white;
    font-weight: bold;
    font-size: 2em;
    text-align: center;
  }

&lt;ul class=&quot;align-self-flex-container&quot;&gt;
  &lt;li class=&quot;align-self-flex-item align-self-flex-start&quot;&gt;1&lt;/li&gt;
  &lt;li class=&quot;align-self-flex-item align-self-flex-end&quot;&gt;2&lt;/li&gt;
  &lt;li class=&quot;align-self-flex-item align-self-center&quot;&gt;3&lt;/li&gt;
  &lt;li class=&quot;align-self-flex-item align-self-baseline&quot;&gt;4&lt;/li&gt;
  &lt;li class=&quot;align-self-flex-item align-self-stretch&quot;&gt;5&lt;/li&gt;
&lt;/ul&gt;
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
        title: "flex shorthand for flex-grow, flex-shrink and flex-basis",
        note: [
          {
            text1: `This is the shorthand for flex-grow, flex-shrink and flex-basis. The second and third parameters (flex-shrink and flex-basis) are optional.
            
            <b>Common values for flex</b>
<b>flex: 0 auto;</b>
This is the same as flex: initial; and the shorthand for the default value: flex: 0 1 auto. It sizes the item based on its width/height properties (or its content if not set).

It makes the flex item inflexible when there is some free space left, but allows it to shrink to its minimum when there is not enough space. The alignment abilities or auto margins can be used to align flex items along the main axis.

<b>flex: auto;</b>
This is equivalent to flex: 1 1 auto. Beware, this is not the default value. It sizes the item based on its width/height properties, but makes it fully flexible so that they absorb any extra space along the main axis.

If all items are either flex: auto, flex: initial, or flex: none, any remaining space after the items have been sized will be distributed evenly to the items with flex: auto.

<b>flex: none;</b>
This is equivalent to flex: 0 0 auto. It sizes the item according to its width/height properties, but makes it fully inflexible.

This is similar to flex: initial except it is not allowed to shrink, even in an overflow situation.

<b>flex: &lt;positive-number&gt; </b>
Equivalent to flex: 1 0px. It makes the flex item flexible and sets the flex basis to zero, resulting in an item that receives the specified proportion of the remaining space.

If all items in the flex container use this pattern, their sizes will be proportional to the specified flex factor.

<div class="flex-body">
<header class="flex-header">Header</header>
<main class="flex-main">Main</main>
<aside class="flex-sidebar">Sidebar</aside>
<footer class="flex-footer">Footer</footer>
</div>
            `,
            code1: `flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]

.flex-item {

  /* this */
  flex: 1 100px;

  /* is the same as */
  flex-grow: 1;
  flex-basis: 100px;

  /* and it leaves the flex-shrink property alone, which would be */
  flex-shrink: inherit; /* defaults to 1 */

}
  

// Here’s the scoop on what the values map to depending on how many values you give it:

flex: none /* value 'none' case */
flex: <'flex-grow'> /* One value syntax, variation 1 */
flex: <'flex-basis'> /* One value syntax, variation 2 */
flex: <'flex-grow'> <'flex-basis'> /* Two values syntax, variation 1 */
flex: <'flex-grow'> <'flex-shrink'> /* Two values syntax, variation 2 */
flex: <'flex-grow'> <'flex-shrink'> <'flex-basis'> /* Three values syntax */
flex: inherit



//------
// Demo

  .flex-body {
    display: flex;
    flex-wrap: wrap;
  }
  .flex-body > * {
    background: #eee;
    padding: 2rem;
    text-align: center;
    border: 5px solid white;
  }
  
  .flex-header,
  .flex-footer {
    flex: 1 100%;
  }
  .flex-sidebar {
    flex: 1;
  }
  .flex-main {
    flex: 2;
  }

&lt;div class=&quot;flex-body&quot;&gt;
&lt;header class=&quot;flex-header&quot;&gt;Header&lt;/header&gt;
&lt;main class=&quot;flex-main&quot;&gt;Main&lt;/main&gt;
&lt;aside class=&quot;flex-sidebar&quot;&gt;Sidebar&lt;/aside&gt;
&lt;footer class=&quot;flex-footer&quot;&gt;Footer&lt;/footer&gt;
&lt;/div&gt;
`
          },
          {
            text1: `Our three properties control the following aspects of a flex item's flexibility:

<b>flex-grow</b>: How much of the positive free space does this item get?
<b>flex-shrink</b>: How much negative free space can be removed from this item?
<b>flex-basis</b>: What is the size of the item before growing and shrinking happens?
The properties are usually expressed using the shorthand flex property. The following code would set the flex-grow property to 2, flex-shrink to 1 and flex-basis to auto.`,
            code1: `.item {
  flex: 2 1 auto;
}`
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


  const switcher = document.getElementById("switcher");
  const demo = document.querySelector(".container");
  
console.log(switcher)

  switcher?.addEventListener("change", (evt) => {
    demo.style.flexDirection = evt.target.value;
  });
  