const isHighlighted = 'html-notes'
const Links1 = 'html-notes'
const Links2 = 'flex-notes'
const Links3 = 'bootstrap'
const Links4 = 'html-projects'

const htmlData = {
  htmlNote: [
    {
      id: 52,
      title: "DOCTYPE",
      note: [
        {
          text1: `In HTML, DOCTYPE (short for Document Type Declaration) is a declaration that specifies the version of HTML being used in a webpage. It tells the browser what type of document to expect and how to interpret the code. The DOCTYPE is placed at the very beginning of the HTML document before the <html> tag.

The declaration helps the browser know which set of rules to apply for rendering the page correctly. It ensures that the webpage behaves consistently across different browsers.

The DOCTYPE declaration is used to specify the version of HTML that the page is using, ensuring that the browser renders the page in the correct mode (standards mode or quirks mode(క్విర్క్స్ మోడ్)).

Here's an example of a DOCTYPE declaration for HTML5:

&lt;!DOCTYPE html&gt;
In older versions of HTML, the DOCTYPE declaration was more complex. For example, for HTML 4.01, it looked like this:

&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;
But in HTML5, it's simplified to just <!DOCTYPE html>, which is more streamlined and easier to use.

The DOCTYPE declaration, or document type declaration (DTD), is a statement that tells a web browser what version of HTML a document is written in.


The HTML document type declaration, also known as DOCTYPE, is the first line of code required in every HTML or XHTML document. The DOCTYPE declaration is an instruction to the web browser about what version of HTML the page is written in. This ensures that the web page is parsed the same way by different web browsers.

Additionally, doctypes for HTML 4.01 required the declaration of either strict, transitional, or frameset DTD, each with a different use case as outlined below.

<b>Strict DTD</b>: Used for web pages that exclude attributes and elements that W3C expects to phase out as CSS support grows
<b>Transitional DTD</b>: Used for web pages that include attributes and elements that W3C expects to phase out as CSS support grows
<b>Frameset DTD</b>: Used for web pages with frames

In contrast, the declaration of HTML5 DOCTYPE is much simpler: it no longer requires a reference to DTDs as it is no longer based on SGML. See the examples below for a comparison between HTML 4.01 and HTML5 DOCTYPEs.

Examples
Doctype syntax for HTML5 and beyond:
&lt;!DOCTYPE html&gt;

Doctype syntax for strict HTML 4.01:
&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;

Doctype syntax for transitional HTML 4.01:
&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot; &quot;http://www.w3.org/TR/html4/loose.dtd&quot;&gt;

Doctype syntax for frameset HTML 4.01:
&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01 Frameset//EN&quot; &quot;http://www.w3.org/TR/html4/frameset.dtd&quot;&gt;
`,
          code1: ``
        },
        {
          text1: `<b>Without a Doctype</b>:
The browser enters <b>Quirks mode</b> and tries to deal with your code as if it was written in the late 90’s. This means they will imitate many bugs that existed in the old browsers. It is not consistent on how to do this (so you will get significantly different results, for example, from Firefox to Internet Explorer).

The purpose of DOCTYPE is to tell the browser what type of HTML you are writing. It is not valid to omit the DOCTYPE. There is no “Standard” format. The browser will just try to parse HTML as best it can. But not all elements will be displayed correctly. DOCTYPE is a required part of all HTML documents.
In HTML5 the tag used is: &lt;!DOCTYPE html&gt;

If you don't include the <b>DOCTYPE</b> declaration or use &lt;!DOCTYPE html&gt;, the browser may switch to quirks mode. <b>Quirks mode</b> is a compatibility mode where the browser tries to render the webpage in a way that mimics older, non-standard behavior (from when web standards were not fully defined). This can lead to several issues, such as:

<b>Inconsistent Layouts</b>: The page may not be displayed as intended, and layout issues might occur. For example, margins, paddings, and text alignment might be rendered differently across browsers.

<b>CSS Problems</b>: Some modern CSS features may not work properly, or the browser may apply outdated, less efficient rendering techniques.

<b>JavaScript Issues</b>: Certain JavaScript functionality may behave unpredictably, especially newer JavaScript features that rely on more modern web standards.

<b>Performance Degradation</b>: In quirks mode, the browser may use older rendering algorithms that are less optimized than the modern standards-based layout engine.

<b>What happens without DOCTYPE</b>:
The browser is forced to fall back on quirks mode if it doesn't detect a proper DOCTYPE.

Web pages may look differently in different browsers because browsers can behave inconsistently in quirks mode.

<b>What Happens in Quirks Mode?</b>
<b>Layout Issues</b>:
Margins, paddings, and other spacing can be interpreted incorrectly. For example, in quirks mode, the browser may not respect the box model correctly, leading to elements not aligning as expected.
Tables, form elements, and other block-level elements may also display differently than in standards mode.

<b>CSS Rendering Problems</b>:
The browser may not apply modern CSS features correctly, or it might interpret older, non-standard behavior from early web browsers. This can lead to elements being styled incorrectly or CSS rules being ignored.

<b>JavaScript Compatibility</b>:
Modern JavaScript features may not work as intended. For example, some newer DOM methods and properties might not be available or could behave inconsistently in quirks mode.

<b>Box Model Rendering</b>:
One of the most well-known issues in quirks mode involves the CSS box model. In quirks mode, the default box model includes padding and borders in the element's width and height, unlike the standards mode where the width and height only apply to the content of the element.`,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "What is HTML?",
      note: [
        {
          text1: `HTML stands for HyperText Markup Language. It's the standard language used to create and design web pages. It provides the basic structure of web pages using various tags and elements.`,
          code1: ``
        },
      ],
    },
    {
      id: 52,
      title: "What is the difference between &lt;div&gt; and &lt;span&gt; in HTML?",
      note: [
        {
          text1: `&lt;div&gt; is a block-level element used for grouping and styling larger chunks of content. &lt;span&gt; is an inline element used to style small portions of text or elements within a block.`,
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
      title: "What is the difference between HTML5 and HTML4?",
      note: [
        {
          text1: `HTML5 introduced new elements, APIs, and attributes for modern web development. Key differences include new structural elements (&lt;article&gt;, &lt;section&gt;, &lt;nav&gt;), multimedia support (&lt;audio&gt;, &lt;video&gt;), and the &lt;!DOCTYPE html&gt; declaration (HTML5 uses a simpler DOCTYPE).`,
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
      title: "What are semantic elements in HTML?",
      note: [
        {
          text1: `A semantic element clearly describes its meaning to both the browser and the developer.
          Semantic elements are those that clearly describe their meaning in a human- and machine-readable way. Examples include &lt;article&gt;, &lt;footer&gt;, &lt;header&gt;, &lt;section&gt;, and &lt;nav&gt;. They help with accessibility and SEO.
          
          Semantic elements in HTML are HTML tags that carry meaning about the content within them. These elements help both developers and browsers understand the structure and purpose of a webpage, leading to better accessibility, SEO (search engine optimization), and maintainability. Instead of using generic tags like &lt;div&gt; or &lt;span&gt;, semantic elements describe the type of content contained within them.
          
          Semantic elements in HTML are tags that clearly convey the meaning and role of the content they contain. They help both the browser and assistive technologies, such as screen readers, to understand the structure and content of the page.
          
          Here are some common semantic HTML elements:

<b>&lt;header&gt;</b>: Represents introductory content or navigational links. It&#39;s typically used to contain a site&#39;s logo, title, and navigation menu.

<b>&lt;footer&gt;</b>: Defines the footer of a document or section. It often contains copyright information, contact details, or links to related documents.

<b>&lt;article&gt;</b>: Represents a self-contained piece of content, like a blog post or news article, that could be distributed or reused independently.

<b>&lt;section&gt;</b>: Represents a thematic grouping of content, typically with a heading. It is often used to break up a page into sections.

<b>&lt;nav&gt;</b>: Denotes a section of navigation links, helping to identify areas containing links to other parts of the website.

<b>&lt;main&gt;</b>: Specifies the main content of the document. It should be unique to the document and exclude content like headers, footers, and sidebars.

<b>&lt;aside&gt;</b>: Defines content that is tangentially related to the content around it (like sidebars, pull quotes, or advertisements).

<b>&lt;figure&gt;</b>: Represents content like images, illustrations, or videos, often accompanied by a caption (&lt;figcaption&gt;).

<b>&lt;figcaption&gt;</b>: Provides a caption or description for a &lt;figure&gt; element.

<b>&lt;mark&gt;</b>: Highlights or marks text that has been emphasized, often used for search results or important information.

<b>&lt;details&gt;</b>: Represents a disclosure widget from which the user can obtain additional information or controls. It typically includes a &lt;summary&gt; tag that acts as a toggle.

<b>&lt;summary&gt;</b>: Provides a summary or heading for the &lt;details&gt; element. It&#39;s clickable to show or hide the details.

<b>&lt;time&gt;</b>: Represents a specific time or a range of time, typically used for dates or time-related content.`,
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
        title: "What are attributes in HTML",
        note: [
            {
                text1: `Attributes provide additional information about HTML elements. They are always written in the opening tag and are in the form of name-value pairs (e.g., src, href, alt, id).`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        title: "What is the difference between an HTML element and an HTML tag?",
        note: [
            {
                text1: `An <b>HTML element</b> includes both the opening and closing tags, and the content between them. A <b>HTML tag</b> is just the markup that denotes the start or end of an element (e.g., &lt;div&gt; is a tag, and &lt;div&gt;&lt;/div&gt; is an element).`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        title: "What are forms in HTML?",
        note: [
            {
                text1: `Forms are used to collect input from users. The &lt;form&gt; element wraps form controls like text fields, checkboxes, radio buttons, and buttons to submit data to a server.`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        title: "What is the difference between &lt;input type=&#39;text&#39;&gt; and &lt;textarea&gt;?",
        note: [
            {
                text1: `&lt;input type=&quot;text&quot;&gt; creates a single-line text field, while &lt;textarea&gt; creates a multi-line text box.`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        title: "What is the use of the &lt;meta&gt; tag in HTML?",
        note: [
            {
                text1: `The &lt;meta&gt; tag is used to specify metadata about an HTML document, such as character encoding, viewport settings, author information, and keywords for search engines.`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        title: "What is the difference between the id and class attributes?",
        note: [
            {
                text1: `The <b>id</b> attribute uniquely identifies an element on a page and should only be used once. The <b>class</b> attribute can be used to apply the same style or behavior to multiple elements on a page.`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        title: "What is an anchor tag (&lt;a&gt;), and how is it used?",
        note: [
            {
                text1: `The anchor tag &lt;a&gt; is used to create hyperlinks in a webpage. The <b>href</b> attribute defines the destination URL. Example: &lt;a href=&quot;https://www.example.com&quot;&gt;Visit Example&lt;/a&gt;.`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        title: "What is the purpose of the <b>alt</b> attribute in an image (&lt;img&gt;)?",
        note: [
            {
                text1: `The <b>alt</b> attribute provides alternative text for an image, which is displayed if the image cannot be loaded. It's also important for accessibility, such as screen readers for visually impaired users.`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        title: "What are HTML entities?",
        note: [
            {
                text1: `HTML entities are special codes used to represent characters that have special meaning in HTML, such as <b><, >, &</b>, and <b>"</b>. For example, <b>&amp;lt;</b> represents <b><</b>, and <b>&amp;gt;</b> represents <b>></b>.`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        title: "What are the new input types in HTML5?",
        note: [
            {
                text1: `HTML5 introduced new input types for forms, such as <b>email, tel, date, time, url, range</b>, and <b>number</b>, to improve user input validation and enhance form functionality.`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        title: "What is the difference between &lt;link&gt; and &lt;a&gt;?",
        note: [
            {
                text1: `&lt;link&gt; is used to link external resources like stylesheets, while &lt;a&gt; is used to create hyperlinks that navigate to another webpage or resource.`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        section: "Advanced HTML Questions:",
        title: "What is the &lt;canvas&gt; element in HTML5?",
        note: [
            {
                text1: `The &lt;canvas&gt; element is used to draw graphics, such as images, shapes, and animations, via JavaScript. It provides a drawing area on the web page.`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        title: "What are the benefits of using HTML5 over older versions?",
        note: [
            {
                text1: `HTML5 offers better support for multimedia (audio and video), improved form elements, offline storage (localStorage), and new semantic elements. It's also backward-compatible with older browsers and has better mobile support.`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        title: "What is the purpose of the <b>viewport</b> meta tag in HTML5?",
        note: [
            {
                text1: `The <b>viewport</b> meta tag is used to control the layout on mobile devices by specifying the visible area and scale. For example: &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;.`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        title: "What are Web Workers in HTML5?",
        note: [
            {
                text1: `Web Workers allow JavaScript to run in the background on a separate thread, without blocking the main page’s UI thread. This is useful for performing computationally expensive tasks without affecting performance.`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        title: "What are the &lt;article&gt; and &lt;section&gt; tags used for?",
        note: [
            {
                text1: `The &lt;article&gt; tag represents self-contained content that can be distributed independently (e.g., a blog post). The &lt;section&gt; tag is used to group related content together within a document (e.g., a group of articles or chapters).`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        title: "What are the different types of lists in HTML?",
        note: [
            {
                text1: `HTML supports three types of lists:

Ordered lists: &lt;ol&gt; (numbered items)

Unordered lists: &lt;ul&gt; (bulleted items)

Definition lists: &lt;dl&gt; (lists of terms and definitions)`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        title: "What is the &lt;iframe&gt; tag used for in HTML?",
        note: [
            {
                text1: `The &lt;iframe&gt; tag is used to embed another HTML document within the current document. It allows displaying external content, like other webpages, within a frame.`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        title: "What is the role of &lt;noscript&gt; in HTML?",
        note: [
            {
                text1: `The &lt;noscript&gt; tag is used to provide content for browsers that do not support JavaScript or have it disabled. It can display alternative content when JavaScript is unavailable.`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        section: "HTML Accessibility and SEO Questions:",
        title: "What is ARIA (Accessible Rich Internet Applications)?",
        note: [
            {
                text1: `ARIA is a set of attributes that help make web content more accessible to people with disabilities. It allows developers to improve the accessibility of dynamic content like forms, controls, and widgets.`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        title: "How can you improve SEO using HTML?",
        note: [
            {
                text1: `You can improve SEO by using semantic HTML tags (e.g., &lt;header&gt;, &lt;footer&gt;, &lt;article&gt;, etc.), providing proper meta tags (&lt;meta&gt;), using heading tags (&lt;h1&gt;, &lt;h2&gt;, etc.) correctly, including alt attributes for images, and making the content easy to read and understand.`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        title: "What is the role of the &lt;header&gt; and &lt;footer&gt; tags in HTML5?",
        note: [
            {
                text1: `The &lt;header&gt; tag is used to define the introductory content or navigation links at the top of a page, while the &lt;footer&gt; tag contains footer content, such as copyright information, contact details, or links.`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        title: "What is the &lt;mark&gt; tag used for?",
        note: [
            {
                text1: `The &lt;mark&gt; tag is used to highlight or emphasize a part of text. It is typically used to highlight search terms or important parts of content.`,
                code1: ``
            }
        ]
    },
    {
        id: 1,
        title: "Callbacks",
        note: [
            {
                text1: ``,
                code1: ``
            }
        ]
    },
  ]
}