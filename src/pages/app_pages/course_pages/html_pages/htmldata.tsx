// htmldata.js

export const firstmap = [
  {
    tag: "a",
    code: '<a href="URL">Link Text</a>',
    tag_desc:
      "The <a> tag defines a hyperlink, allowing users to navigate to another web page or resource when clicked.",
    alt_attr: [
      {
        attr_name: "href",
        attr_desc: "Specifies the destination URL of the linked resource.",
        attr_val_desc:
          "You should replace 'URL' with the actual web address (URL) you want to link to. It can be the address of another webpage or a resource like an image, video, or document.",
      },
      {
        attr_name: "target",
        attr_desc: "Specifies where to open the linked content when clicked.",
        attr_val_desc:
          "Common values include:\n- '_self': Opens the link in the same browsing context (window or tab).\n- '_blank': Opens the link in a new browsing context, typically a new tab or window. This ensures that the linked content opens independently from the current page.\n- '_parent': Opens the link in the parent browsing context of the current frame or window. Useful in the context of nested frames or iframes.\n- '_top': Opens the link in the top-level browsing context (i.e., the full body of the window). This replaces all frames, ensuring that the linked content replaces the entire window.",
      },
      {
        attr_name: "download",
        attr_desc:
          "Indicates that the linked resource should be downloaded rather than displayed when clicked.",
        attr_val_desc:
          "Specifies the filename to be used when downloading the resource. When used, clicking the link triggers a download of the resource instead of navigating to it.",
      },
      {
        attr_name: "rel",
        attr_desc:
          "Specifies the relationship between the current document and the linked resource.",
        attr_val_desc:
          "Common values include:\n- 'nofollow': Instructs search engines not to follow the link, affecting search engine optimization (SEO).\n- 'noopener': Prevents the new page from having access to the window.opener property, enhancing security.\n- 'noreferrer': Prevents the browser from sending the HTTP referer header if the user follows the hyperlink.",
      },
      {
        attr_name: "title",
        attr_desc: "Provides additional information about the linked resource.",
        attr_val_desc:
          "The title text is often displayed as a tooltip when the user hovers over the link. It can be used to provide a brief description or context about the destination of the link.",
      },
    ],
  },
  {
    tag: "abbr",
    code: '<abbr title="abbreviation">abbr</abbr>',
    tag_desc: "The <abbr> tag defines an abbreviation or acronym.",
    alt_attr: [
      {
        attr_name: "title",
        attr_desc:
          "Specifies the full expansion of the abbreviation or acronym.",
        attr_val_desc:
          "The text provided in the 'title' attribute is displayed as a tooltip when the user hovers over the abbreviation or acronym. It should provide the full meaning or expansion of the abbreviated term.",
      },
    ],
  },
  {
    tag: "address",
    code: "<address>Address Text</address>",
    tag_desc:
      "The <address> tag defines contact information for the author or owner of a document.",
    alt_attr: [], // Address tag does not typically have attributes
  },
  {
    tag: "area",
    code: '<area shape="rect" coords="0,0,100,100" href="#" alt="Clickable area">',
    tag_desc:
      "The <area> tag defines an area inside an image map that is clickable and can be used as a hyperlink.",
    alt_attr: [
      {
        attr_name: "shape",
        attr_desc: "Specifies the shape of the clickable area.",
        attr_val_desc:
          "Common values include 'rect' (rectangle), 'circle', 'poly' (polygon), and 'default'.",
      },
      {
        attr_name: "coords",
        attr_desc: "Specifies the coordinates of the clickable area.",
        attr_val_desc:
          "The coordinates depend on the shape of the area. For example, for a 'rect' shape, it represents the coordinates of the top-left and bottom-right corners of the rectangle (e.g., '0,0,100,100').",
      },
      {
        attr_name: "href",
        attr_desc: "Specifies the URL of the linked resource.",
        attr_val_desc:
          "It defines the destination of the hyperlink when the area is clicked.",
      },
      {
        attr_name: "alt",
        attr_desc: "Specifies an alternative text for the clickable area.",
        attr_val_desc:
          "The text is displayed when the image cannot be loaded or when the user hovers over the area.",
      },
    ],
  },
  // For <article>
  {
    tag: "article",
    code: "<article>Article Content</article>",
    tag_desc:
      "The <article> tag defines independent, self-contained content that can be distributed and reused independently.",
    alt_attr: [], // Article tag does not typically have attributes
  },

  // For <aside>
  {
    tag: "aside",
    code: "<aside>Aside Content</aside>",
    tag_desc:
      "The <aside> tag defines content that is tangentially related to the content around it, such as sidebars or callout boxes.",
    alt_attr: [], // Aside tag does not typically have attributes
  },

  // For <audio>
  {
    tag: "audio",
    code: '<audio controls><source src="audio.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>',
    tag_desc:
      "The <audio> tag defines sound content, such as music or other audio streams.",
    alt_attr: [
      {
        attr_name: "controls",
        attr_desc:
          "Specifies that audio controls should be displayed, allowing the user to play, pause, and adjust volume.",
      },
      {
        attr_name: "src",
        attr_desc: "Specifies the URL of the audio file to be played.",
        attr_val_desc: "Provide the path to the audio file.",
      },
      {
        attr_name: "type",
        attr_desc: "Specifies the MIME type of the audio file.",
        attr_val_desc:
          "Provide the appropriate MIME type for the audio file format (e.g., 'audio/mpeg' for MP3 files).",
      },
    ],
  },// For <b>
  {
    tag: "b",
    code: "<b>Bold Text</b>",
    tag_desc: "The <b> tag defines bold text without conveying any extra importance.",
    alt_attr: [] // B tag does not typically have attributes
  },
  
  // For <base>
  {
    tag: "base",
    code: '<base href="URL">',
    tag_desc: "The <base> tag specifies the base URL and target for all relative URLs in a document.",
    alt_attr: [
      {
        attr_name: "href",
        attr_desc: "Specifies the base URL for all relative URLs in the document.",
        attr_val_desc: "Provide the base URL."
      },
      {
        attr_name: "target",
        attr_desc: "Specifies the default target for all hyperlinks and forms in the document.",
        attr_val_desc: "Provide the target attribute value (e.g., '_blank' for opening links in a new tab)."
      }
    ]
  },
  
  // For <bdi>
  {
    tag: "bdi",
    code: '<bdi dir="rtl">Text</bdi>',
    tag_desc: "The <bdi> tag isolates a part of the text that might be formatted in a different direction from other text outside it.",
    alt_attr: [
      {
        attr_name: "dir",
        attr_desc: "Specifies the text directionality for the content inside the <bdi> tag.",
        attr_val_desc: "Common values include 'ltr' (left-to-right) and 'rtl' (right-to-left)."
      }
    ]
  },
  
  // For <blockquote>
  {
    tag: "blockquote",
    code: '<blockquote cite="URL">Quoted Text</blockquote>',
    tag_desc: "The <blockquote> tag defines a section that is quoted from another source.",
    alt_attr: [
      {
        attr_name: "cite",
        attr_desc: "Specifies the URL of the source where the quote is from.",
        attr_val_desc: "Provide the URL of the source."
      }
    ]
  },// For <br>
  {
    tag: "br",
    code: "<br>",
    tag_desc: "The <br> tag defines a line break.",
    alt_attr: [] // Br tag does not typically have attributes
  },
  
  // For <button>
  {
    tag: "button",
    code: "<button>Click Me</button>",
    tag_desc: "The <button> tag defines a clickable button.",
    alt_attr: [
      {
        attr_name: "type",
        attr_desc: "Specifies the type of button.",
        attr_val_desc: "Common values include 'button' (default), 'submit', and 'reset'."
      }
    ]
  },
  
  // For <canvas>
  {
    tag: "canvas",
    code: '<canvas id="myCanvas" width="200" height="100"></canvas>',
    tag_desc: "The <canvas> tag is used to draw graphics, animations, or other visual images on the fly using JavaScript.",
    alt_attr: [
      {
        attr_name: "id",
        attr_desc: "Specifies a unique id for the canvas.",
        attr_val_desc: "Provide a unique id."
      },
      {
        attr_name: "width",
        attr_desc: "Specifies the width of the canvas.",
        attr_val_desc: "Provide the width in pixels."
      },
      {
        attr_name: "height",
        attr_desc: "Specifies the height of the canvas.",
        attr_val_desc: "Provide the height in pixels."
      }
    ]
  },
  
  // For <caption>
  {
    tag: "caption",
    code: "<caption>Table Caption</caption>",
    tag_desc: "The <caption> tag defines a caption for a table.",
    alt_attr: [] // Caption tag does not typically have attributes
  },// For <cite>
  {
    tag: "cite",
    code: '<cite>Article Title</cite>',
    tag_desc: "The <cite> tag defines the title of a creative work, such as a book, movie, or painting.",
    alt_attr: [] // Cite tag does not typically have attributes
  },
  
  // For <code>
  {
    tag: "code",
    code: "<code>Inline Code</code>",
    tag_desc: "The <code> tag defines a piece of computer code.",
    alt_attr: [] // Code tag does not typically have attributes
  },
  
  // For <col>
  {
    tag: "col",
    code: "<col>",
    tag_desc: "The <col> tag defines column properties within a table.",
    alt_attr: [
      {
        attr_name: "span",
        attr_desc: "Specifies the number of columns the <col> element should span.",
        attr_val_desc: "Provide the number of columns."
      }
    ]
  },
  
  // For <colgroup>
  {
    tag: "colgroup",
    code: "<colgroup><col span='2'><col></colgroup>",
    tag_desc: "The <colgroup> tag groups together <col> elements in a table to define column properties.",
    alt_attr: [
      {
        attr_name: "span",
        attr_desc: "Specifies the number of columns the <colgroup> element should span.",
        attr_val_desc: "Provide the number of columns."
      }
    ]
  },// For <datalist>
  {
    tag: "datalist",
    code: `
      <input list="browsers">
      <datalist id="browsers">
        <option value="Chrome">
        <option value="Firefox">
        <option value="Edge">
        <option value="Safari">
        <option value="Opera">
      </datalist>
    `,
    tag_desc: "The <datalist> tag provides a predefined list of options for an <input> element.",
    alt_attr: [] // Datalist tag does not typically have attributes
  },
  
  // For <dd>
  {
    tag: "dd",
    code: "<dd>Description</dd>",
    tag_desc: "The <dd> tag defines a description or value in a description list (<dl>).",
    alt_attr: [] // Dd tag does not typically have attributes
  },
  
  // For <del>
  {
    tag: "del",
    code: "<del>Deleted Text</del>",
    tag_desc: "The <del> tag defines text that has been deleted from a document.",
    alt_attr: [] // Del tag does not typically have attributes
  },
  
  // For <details>
  {
    tag: "details",
    code: `
      <details>
        <summary>Click to view</summary>
        <p>Details content goes here.</p>
      </details>
    `,
    tag_desc: "The <details> tag creates a disclosure widget in which information is visible only when the widget is toggled open.",
    alt_attr: [] // Details tag does not typically have attributes
  }, 
  // For <dfn>
{
  tag: "dfn",
  code: "<dfn>Definition</dfn>",
  tag_desc: "The <dfn> tag specifies a term that is going to be defined within the document.",
  alt_attr: [] // Dfn tag does not typically have attributes
},

// For <dialog>
{
  tag: "dialog",
  code: `
    <dialog open>
      <p>Dialog content goes here.</p>
      <button>Close</button>
    </dialog>
  `,
  tag_desc: "The <dialog> tag defines a dialog box or window.",
  alt_attr: [
    {
      attr_name: "open",
      attr_desc: "Specifies that the dialog box is open when the page loads.",
      attr_val_desc: "No value needed. Simply add the 'open' attribute."
    }
  ]
},

// For <div>
{
  tag: "div",
  code: '<div style="width: 100px; height: 100px; background-color: #ccc;"></div>',
  tag_desc: "The <div> tag defines a division or section in an HTML document.",
  alt_attr: [
    {
      attr_name: "style",
      attr_desc: "Specifies inline CSS styles for the <div> element.",
      attr_val_desc: "Provide CSS styles within the 'style' attribute."
    }
  ]
},

// For <dl>
{
  tag: "dl",
  code: `
    <dl>
      <dt>Term</dt>
      <dd>Description</dd>
    </dl>
  `,
  tag_desc: "The <dl> tag defines a description list.",
  alt_attr: [] // Dl tag does not typically have attributes
},   {
  tag: "dl",
  code: `
    <dl>
      <dt>Term</dt>
      <dd>Description</dd>
    </dl>
  `,
  tag_desc: "The <dl> tag defines a description list.",
  alt_attr: [] // Dl tag does not typically have attributes
},
{
  tag: "dt",
  code: "<dt>Term</dt>",
  tag_desc: "The <dt> tag defines a term/name in a description list (<dl>).",
  alt_attr: [] // Dt tag does not typically have attributes
},
{
  tag: "em",
  code: "<em>Italic Text</em>",
  tag_desc: "The <em> tag defines emphasized text.",
  alt_attr: [] // Em tag does not typically have attributes
},
{
  tag: "embed",
  code: '<embed src="URL">',
  tag_desc: "The <embed> tag embeds external content or plugin into a document.",
  alt_attr: [
    {
      attr_name: "src",
      attr_desc: "Specifies the URL of the embedded content.",
      attr_val_desc: "URL of the content to be embedded."
    }
  ]
},
{
  tag: "fieldset",
  code: `
    <fieldset>
      <legend>Legend</legend>
      <!-- Add form controls here -->
    </fieldset>
  `,
  tag_desc: "The <fieldset> tag groups related form elements.",
  alt_attr: [
    {
      attr_name: "disabled",
      attr_desc: "Specifies that the fieldset should be disabled.",
      attr_val_desc: "No value needed. Simply add the 'disabled' attribute."
    },
    {
      attr_name: "form",
      attr_desc: "Specifies which form the fieldset belongs to.",
      attr_val_desc: "ID of the form element."
    },
    {
      attr_name: "name",
      attr_desc: "Specifies a name for the fieldset.",
      attr_val_desc: "Name of the fieldset."
    }
  ]
},
{
  tag: "figcaption",
  code: "<figcaption>Figure caption</figcaption>",
  tag_desc: "The <figcaption> tag defines a caption for a <figure> element.",
  alt_attr: [] // Figcaption tag does not typically have attributes
},
{
  tag: "figure",
  code: `
    <figure>
      <img src="image.jpg" alt="Description">
      <figcaption>Figure caption</figcaption>
    </figure>
  `,
  tag_desc: "The <figure> tag specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.",
  alt_attr: [] // Figure tag does not typically have attributes
},
{
  tag: "footer",
  code: "<footer>Footer Content</footer>",
  tag_desc: "The <footer> tag defines a footer for a document or section.",
  alt_attr: [] // Footer tag does not typically have attributes
},
{
  tag: "form",
  code: `
    <form action="URL" method="post">
      <!-- Add form controls here -->
    </form>
  `,
  tag_desc: "The <form> tag is used to create an HTML form for user input.",
  alt_attr: [
    {
      attr_name: "action",
      attr_desc: "Specifies where to send the form-data when the form is submitted.",
      attr_val_desc: "URL of the resource where the form data will be submitted."
    },
    {
      attr_name: "method",
      attr_desc: "Specifies the HTTP method to use when sending form-data.",
      attr_val_desc: "Either 'get' or 'post'."
    },
    {
      attr_name: "target",
      attr_desc: "Specifies where to display the response after submitting the form.",
      attr_val_desc: "'_self', '_blank', '_parent', or '_top'."
    },
    {
      attr_name: "enctype",
      attr_desc: "Specifies how form data should be encoded before sending it to the server.",
      attr_val_desc: "'application/x-www-form-urlencoded', 'multipart/form-data', or 'text/plain'."
    },
    {
      attr_name: "autocomplete",
      attr_desc: "Specifies whether the browser should autocomplete the form.",
      attr_val_desc: "'on' or 'off'."
    }
  ]
},
{
  tag: "h1",
  code: "<h1>Heading 1</h1>",
  tag_desc: "The <h1> to <h6> tags define HTML headings.",
  alt_attr: [] // H1 tag does not typically have attributes
},
{
  tag: "h2",
  code: "<h2>Heading 2</h2>",
  tag_desc: "The <h1> to <h6> tags define HTML headings.",
  alt_attr: [] // H2 tag does not typically have attributes
},
{
  tag: "h3",
  code: "<h3>Heading 3</h3>",
  tag_desc: "The <h1> to <h6> tags define HTML headings.",
  alt_attr: [] // H3 tag does not typically have attributes
},
{
  tag: "h4",
  code: "<h4>Heading 4</h4>",
  tag_desc: "The <h1> to <h6> tags define HTML headings.",
  alt_attr: [] // H4 tag does not typically have attributes
},
{
  tag: "h5",
  code: "<h5>Heading 5</h5>",
  tag_desc: "The <h1> to <h6> tags define HTML headings.",
  alt_attr: [] // H5 tag does not typically have attributes
},
{
  tag: "h6",
  code: "<h6>Heading 6</h6>",
  tag_desc: "The <h1> to <h6> tags define HTML headings.",
  alt_attr: [] // H6 tag does not typically have attributes
},
{
  tag: "head",
  code: `
    <head>
      <title>Document Title</title>
      <!-- Add meta tags, links, scripts, etc. here -->
    </head>
  `,
  tag_desc: "The <head> tag contains metadata about the document.",
  alt_attr: [] // Head tag does not typically have attributes
},
{
  tag: "header",
  code: "<header>Header Content</header>",
  tag_desc: "The <header> tag defines a header for a document or section.",
  alt_attr: [] // Header tag does not typically have attributes
},
{
  tag: "hr",
  code: "<hr>",
  tag_desc: "The <hr> tag defines a thematic break (horizontal rule) in an HTML page.",
  alt_attr: [] // Hr tag does not typically have attributes
},
{
  tag: "html",
  code: `
    <!DOCTYPE html>
    <html lang="en">
    <!-- Add head and body contents here -->
    </html>
  `,
  tag_desc: "The <html> tag defines the root of an HTML document.",
  alt_attr: [
    {
      attr_name: "lang",
      attr_desc: "Specifies the primary language for the content of the document.",
      attr_val_desc: "Language code (e.g., 'en' for English, 'es' for Spanish)."
    }
  ]
},
{
  tag: "i",
  code: "<i>Italic Text</i>",
  tag_desc: "The <i> tag defines italic text.",
  alt_attr: [] // I tag does not typically have attributes
},
{
  tag: "iframe",
  code: '<iframe src="URL" width="600" height="400"></iframe>',
  tag_desc: "The <iframe> tag defines an inline frame, allowing another HTML document to be embedded within the current document.",
  alt_attr: [
    {
      attr_name: "src",
      attr_desc: "Specifies the URL of the page to embed.",
      attr_val_desc: "URL of the page to be embedded."
    },
    {
      attr_name: "width",
      attr_desc: "Specifies the width of the iframe.",
      attr_val_desc: "Width in pixels."
    },
    {
      attr_name: "height",
      attr_desc: "Specifies the height of the iframe.",
      attr_val_desc: "Height in pixels."
    }
  ]
},
{
  tag: "img",
  code: '<img src="image.jpg" alt="Description">',
  tag_desc: "The <img> tag defines an image.",
  alt_attr: [
    {
      attr_name: "src",
      attr_desc: "Specifies the URL of the image.",
      attr_val_desc: "URL of the image file."
    },
    {
      attr_name: "alt",
      attr_desc: "Specifies an alternate text for the image.",
      attr_val_desc: "Text description of the image."
    },
    {
      attr_name: "width",
      attr_desc: "Specifies the width of the image (in pixels).",
      attr_val_desc: "Width of the image."
    },
    {
      attr_name: "height",
      attr_desc: "Specifies the height of the image (in pixels).",
      attr_val_desc: "Height of the image."
    },
    {
      attr_name: "title",
      attr_desc: "Specifies a title for the image.",
      attr_val_desc: "Text to be displayed as a tooltip when hovering over the image."
    }
  ]
},
{
  tag: "input",
  code: '<input type="text" name="fname">',
  tag_desc: "The <input> tag defines an input field that allows users to enter data.",
  alt_attr: [
    {
      attr_name: "type",
      attr_desc: "Specifies the type of input field.",
      attr_val_desc: "'text', 'password', 'checkbox', 'radio', 'submit', 'reset', 'file', 'hidden', 'number', 'email', 'url', 'tel', 'date', 'color', etc."
    },
    {
      attr_name: "name",
      attr_desc: "Specifies the name of the input field.",
      attr_val_desc: "Name of the input field."
    },
    {
      attr_name: "value",
      attr_desc: "Specifies the initial value of the input field.",
      attr_val_desc: "Initial value of the input field."
    },
    {
      attr_name: "placeholder",
      attr_desc: "Specifies a short hint that describes the expected value of the input field.",
      attr_val_desc: "Text to be displayed in the input field when it is empty."
    },
    {
      attr_name: "disabled",
      attr_desc: "Specifies that the input field should be disabled.",
      attr_val_desc: "No value needed. Simply add the 'disabled' attribute."
    }
  ]
},
{
  tag: "ins",
  code: '<ins datetime="2024-03-12">Inserted Text</ins>',
  tag_desc: "The <ins> tag defines inserted text that has been added to a document.",
  alt_attr: [
    {
      attr_name: "datetime",
      attr_desc: "Specifies the date and time when the text was inserted.",
      attr_val_desc: "Date and time value (e.g., 'YYYY-MM-DDTHH:MM:SS')."
    }
  ]
},
{
  tag: "kbd",
  code: "<kbd>Keyboard Input</kbd>",
  tag_desc: "The <kbd> tag defines keyboard input.",
  alt_attr: [] // Kbd tag does not typically have attributes
},
{
  tag: "label",
  code: '<label for="fname">First Name:</label>',
  tag_desc: "The <label> tag defines a label for an <input> element.",
  alt_attr: [
    {
      attr_name: "for",
      attr_desc: "Specifies which form element the label is bound to.",
      attr_val_desc: "ID of the form element."
    }
  ]
},
{
  tag: "legend",
  code: "<legend>Legend Text</legend>",
  tag_desc: "The <legend> tag defines a caption for a <fieldset> element.",
  alt_attr: [] // Legend tag does not typically have attributes
},
{
  tag: "li",
  code: "<li>List Item</li>",
  tag_desc: "The <li> tag defines a list item.",
  alt_attr: [] // Li tag does not typically have attributes
},
{
  tag: "link",
  code: '<link rel="stylesheet" href="styles.css">',
  tag_desc: "The <link> tag defines a link between a document and an external resource.",
  alt_attr: [
    {
      attr_name: "rel",
      attr_desc: "Specifies the relationship between the current document and the linked resource.",
      attr_val_desc: "Relationship type (e.g., 'stylesheet', 'icon', 'preconnect', 'prefetch', 'dns-prefetch', etc.)"
    },
    {
      attr_name: "href",
      attr_desc: "Specifies the URL of the linked resource.",
      attr_val_desc: "URL of the linked resource."
    },
    {
      attr_name: "type",
      attr_desc: "Specifies the MIME type of the linked resource.",
      attr_val_desc: "MIME type (e.g., 'text/css', 'image/png', 'image/jpeg', etc.)"
    },
    {
      attr_name: "media",
      attr_desc: "Specifies the media type of the linked resource.",
      attr_val_desc: "Media query (e.g., 'screen', 'print', 'speech', etc.)"
    },
    {
      attr_name: "hreflang",
      attr_desc: "Specifies the language of the linked resource.",
      attr_val_desc: "Language code (e.g., 'en', 'es', 'fr', etc.)"
    }
  ]
},
{
  tag: "main",
  code: "<main>Main Content</main>",
  tag_desc: "The <main> tag specifies the main content of a document.",
  alt_attr: [] // Main tag does not typically have attributes
},
{
  tag: "map",
  code: `
    <img src="workplace.jpg" alt="Workplace" usemap="#workmap">
    <map name="workmap">
      <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
      <area shape="circle" coords="290,172,200" alt="Phone" href="phone.htm">
    </map>
  `,
  tag_desc: "The <map> tag defines an image map.",
  alt_attr: [
    {
      attr_name: "name",
      attr_desc: "Specifies the name of the image map.",
      attr_val_desc: "Name of the image map."
    }
  ]
},
{
  tag: "mark",
  code: "<mark>Highlighted Text</mark>",
  tag_desc: "The <mark> tag defines marked/highlighted text.",
  alt_attr: [] // Mark tag does not typically have attributes
},
{
  tag: "meta",
  code: '<meta charset="UTF-8">',
  tag_desc: "The <meta> tag provides metadata about the HTML document.",
  alt_attr: [
    {
      attr_name: "charset",
      attr_desc: "Specifies the character encoding for the document.",
      attr_val_desc: "Character encoding (e.g., 'UTF-8', 'ISO-8859-1', etc.)"
    },
    {
      attr_name: "name",
      attr_desc: "Specifies the name of the metadata.",
      attr_val_desc: "Name of the metadata."
    },
    {
      attr_name: "content",
      attr_desc: "Specifies the value of the metadata.",
      attr_val_desc: "Value of the metadata."
    }
  ]
},
{
  tag: "meter",
  code: '<meter value="2" min="0" max="10">2 out of 10</meter>',
  tag_desc: "The <meter> tag defines a scalar measurement within a known range.",
  alt_attr: [
    {
      attr_name: "value",
      attr_desc: "Specifies the current value of the meter.",
      attr_val_desc: "Current value (must be within the 'min' and 'max' range)."
    },
    {
      attr_name: "min",
      attr_desc: "Specifies the minimum value of the meter.",
      attr_val_desc: "Minimum value."
    },
    {
      attr_name: "max",
      attr_desc: "Specifies the maximum value of the meter.",
      attr_val_desc: "Maximum value."
    },
    {
      attr_name: "low",
      attr_desc: "Specifies the low value of the meter.",
      attr_val_desc: "Low value (threshold)."
    },
    {
      attr_name: "high",
      attr_desc: "Specifies the high value of the meter.",
      attr_val_desc: "High value (threshold)."
    },
    {
      attr_name: "optimum",
      attr_desc: "Specifies the optimum value of the meter.",
      attr_val_desc: "Optimum value."
    }
  ]
},
{
  tag: "nav",
  code: "<nav>Navigation Links</nav>",
  tag_desc: "The <nav> tag defines navigation links.",
  alt_attr: [] // Nav tag does not typically have attributes
},
{
  tag: "noscript",
  code: "<noscript>JavaScript is disabled in your browser.</noscript>",
  tag_desc: "The <noscript> tag defines content to be displayed when a script is not executed.",
  alt_attr: [] // Noscript tag does not typically have attributes
},
{
  tag: "object",
  code: '<object data="URL" type="application/pdf" width="300" height="200">Object Placeholder</object>',
  tag_desc: "The <object> tag defines an embedded object within an HTML document.",
  alt_attr: [
    {
      attr_name: "data",
      attr_desc: "Specifies the URL of the object to embed.",
      attr_val_desc: "URL of the object."
    },
    {
      attr_name: "type",
      attr_desc: "Specifies the MIME type of the object.",
      attr_val_desc: "MIME type (e.g., 'application/pdf', 'image/jpeg', etc.)"
    },
    {
      attr_name: "width",
      attr_desc: "Specifies the width of the object.",
      attr_val_desc: "Width in pixels."
    },
    {
      attr_name: "height",
      attr_desc: "Specifies the height of the object.",
      attr_val_desc: "Height in pixels."
    }
  ]
},
{
  tag: "ol",
  code: `
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
  `,
  tag_desc: "The <ol> tag defines an ordered list.",
  alt_attr: [
    {
      attr_name: "reversed",
      attr_desc: "Specifies that the list items should be numbered in descending order.",
      attr_val_desc: "No value needed. Simply add the 'reversed' attribute."
    },
    {
      attr_name: "start",
      attr_desc: "Specifies the start value of the list.",
      attr_val_desc: "Start value of the list."
    },
    {
      attr_name: "type",
      attr_desc: "Specifies the type of the list item marker.",
      attr_val_desc: "'1' (numbers), 'A' (uppercase letters), 'a' (lowercase letters), 'I' (uppercase Roman numerals), 'i' (lowercase Roman numerals)."
    }
  ]
},
{
  tag: "optgroup",
  code: `
    <select>
      <optgroup label="Group 1">
        <option>Option 1</option>
        <option>Option 2</option>
      </optgroup>
      <optgroup label="Group 2">
        <option>Option 3</option>
        <option>Option 4</option>
      </optgroup>
    </select>
  `,
  tag_desc: "The <optgroup> tag defines a group of related options in a drop-down list (<select>).",
  alt_attr: [
    {
      attr_name: "label",
      attr_desc: "Specifies the label for the option group.",
      attr_val_desc: "Label for the option group."
    },
    {
      attr_name: "disabled",
      attr_desc: "Specifies that the option group should be disabled.",
      attr_val_desc: "No value needed. Simply add the 'disabled' attribute."
    }
  ]
},
{
  tag: "option",
  code: "<option>Option Text</option>",
  tag_desc: "The <option> tag defines an option in a drop-down list (<select>).",
  alt_attr: [
    {
      attr_name: "value",
      attr_desc: "Specifies the value of the option.",
      attr_val_desc: "Value of the option."
    },
    {
      attr_name: "selected",
      attr_desc: "Specifies that the option should be pre-selected when the page loads.",
      attr_val_desc: "No value needed. Simply add the 'selected' attribute."
    },
    {
      attr_name: "disabled",
      attr_desc: "Specifies that the option should be disabled.",
      attr_val_desc: "No value needed. Simply add the 'disabled' attribute."
    },
    {
      attr_name: "label",
      attr_desc: "Specifies a label for the option.",
      attr_val_desc: "Label for the option."
    }
  ]
},
{
  tag: "output",
  code: '<output for="x">Result</output>',
  tag_desc: "The <output> tag represents the result of a calculation or user action.",
  alt_attr: [
    {
      attr_name: "for",
      attr_desc: "Specifies the ID of the form element that the output is related to.",
      attr_val_desc: "ID of the related form element."
    },
    {
      attr_name: "name",
      attr_desc: "Specifies a name for the output element.",
      attr_val_desc: "Name of the output element."
    }
  ]
},
{
  tag: "p",
  code: "<p>Paragraph Text</p>",
  tag_desc: "The <p> tag defines a paragraph.",
  alt_attr: [] // P tag does not typically have attributes
},
{
  tag: "param",
  code: '<param name="autoplay" value="true">',
  tag_desc: "The <param> tag defines parameters for an object.",
  alt_attr: [
    {
      attr_name: "name",
      attr_desc: "Specifies the name of the parameter.",
      attr_val_desc: "Name of the parameter."
    },
    {
      attr_name: "value",
      attr_desc: "Specifies the value of the parameter.",
      attr_val_desc: "Value of the parameter."
    }
  ]
},
{
  tag: "pre",
  code: "<pre>Preformatted Text</pre>",
  tag_desc: "The <pre> tag defines preformatted text.",
  alt_attr: [] // Pre tag does not typically have attributes
},
{
  tag: "progress",
  code: '<progress value="70" max="100">70%</progress>',
  tag_desc: "The <progress> tag represents the completion progress of a task.",
  alt_attr: [
    {
      attr_name: "value",
      attr_desc: "Specifies the current value of the progress.",
      attr_val_desc: "Current value of the progress (must be within the 'min' and 'max' range)."
    },
    {
      attr_name: "max",
      attr_desc: "Specifies the maximum value of the progress.",
      attr_val_desc: "Maximum value of the progress."
    }
  ]
},
{
  tag: "q",
  code: '<q>Quoted Text</q>',
  tag_desc: "The <q> tag defines a short inline quotation.",
  alt_attr: [
    {
      attr_name: "cite",
      attr_desc: "Specifies the URL of the source of the quotation.",
      attr_val_desc: "URL of the source."
    }
  ]
},
{
  tag: "rp",
  code: "<rp>(</rp>",
  tag_desc: "The <rp> tag defines what to show in browsers that do not support ruby annotations.",
  alt_attr: [] // Rp tag does not typically have attributes
},
{
  tag: "rt",
  code: "<rt>Ruby Text</rt>",
  tag_desc: "The <rt> tag defines an explanation or pronunciation of characters (for East Asian typography).",
  alt_attr: [] // Rt tag does not typically have attributes
},
{
  tag: "ruby",
  code: "<ruby>漢<rt>Kan</rt>字<rt>ji</rt></ruby>",
  tag_desc: "The <ruby> tag defines a ruby annotation (for East Asian typography).",
  alt_attr: [] // Ruby tag does not typically have attributes
},
{
  tag: "s",
  code: "<s>Strikethrough Text</s>",
  tag_desc: "The <s> tag defines strikethrough text.",
  alt_attr: [] // S tag does not typically have attributes
},
{
  tag: "samp",
  code: "<samp>Sample Text</samp>",
  tag_desc: "The <samp> tag defines sample output from a computer program.",
  alt_attr: [] // Samp tag does not typically have attributes
},
{
  tag: "script",
  code: '<script src="script.js"></script>',
  tag_desc: "The <script> tag defines a client-side script.",
  alt_attr: [
    {
      attr_name: "src",
      attr_desc: "Specifies the URL of the external script file.",
      attr_val_desc: "URL of the script file."
    },
    {
      attr_name: "type",
      attr_desc: "Specifies the MIME type of the script.",
      attr_val_desc: "MIME type (e.g., 'text/javascript', 'text/ecmascript', etc.)"
    },
    {
      attr_name: "defer",
      attr_desc: "Specifies that the script should be executed after the document has been parsed.",
      attr_val_desc: "No value needed. Simply add the 'defer' attribute."
    },
    {
      attr_name: "async",
      attr_desc: "Specifies that the script should be executed asynchronously with the rest of the page.",
      attr_val_desc: "No value needed. Simply add the 'async' attribute."
    },
    {
      attr_name: "charset",
      attr_desc: "Specifies the character encoding of the external script file.",
      attr_val_desc: "Character encoding (e.g., 'UTF-8', 'ISO-8859-1', etc.)"
    }
  ]
},
{
  tag: "section",
  code: "<section>Section Content</section>",
  tag_desc: "The <section> tag defines a section in a document.",
  alt_attr: [] // Section tag does not typically have attributes
},
{
  tag: "select",
  code: `
    <select>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  `,
  tag_desc: "The <select> tag defines a drop-down list.",
  alt_attr: [
    {
      attr_name: "name",
      attr_desc: "Specifies the name of the drop-down list.",
      attr_val_desc: "Name of the drop-down list."
    },
    {
      attr_name: "size",
      attr_desc: "Specifies the number of visible options in the drop-down list.",
      attr_val_desc: "Number of visible options."
    },
    {
      attr_name: "multiple",
      attr_desc: "Specifies that multiple options can be selected at once.",
      attr_val_desc: "No value needed. Simply add the 'multiple' attribute."
    },
    {
      attr_name: "disabled",
      attr_desc: "Specifies that the drop-down list should be disabled.",
      attr_val_desc: "No value needed. Simply add the 'disabled' attribute."
    }
  ]
},
{
  tag: "small",
  code: "<small>Small Text</small>",
  tag_desc: "The <small> tag defines small text.",
  alt_attr: [] // Small tag does not typically have attributes
},
{
  tag: "source",
  code: '<source src="movie.mp4" type="video/mp4">',
  tag_desc: "The <source> tag specifies multiple media resources for media elements like <video> and <audio>.",
  alt_attr: [
    {
      attr_name: "src",
      attr_desc: "Specifies the URL of the media resource.",
      attr_val_desc: "URL of the media resource."
    },
    {
      attr_name: "type",
      attr_desc: "Specifies the MIME type of the media resource.",
      attr_val_desc: "MIME type (e.g., 'video/mp4', 'audio/mpeg', etc.)"
    }
  ]
},
{
  tag: "span",
  code: "<span>Span Text</span>",
  tag_desc: "The <span> tag defines a section in a document.",
  alt_attr: [] // Span tag does not typically have attributes
},
{
  tag: "strong",
  code: "<strong>Strong Text</strong>",
  tag_desc: "The <strong> tag defines strong text.",
  alt_attr: [] // Strong tag does not typically have attributes
},
{
  tag: "style",
  code: `
    <style>
      /* Add CSS styles here */
    </style>
  `,
  tag_desc: "The <style> tag defines style information for a document.",
  alt_attr: [] // Style tag does not typically have attributes
},
{
  tag: "sub",
  code: "<sub>Subscript Text</sub>",
  tag_desc: "The <sub> tag defines subscript text.",
  alt_attr: [] // Sub tag does not typically have attributes
},
{
  tag: "summary",
  code: "<summary>Summary Text</summary>",
  tag_desc: "The <summary> tag defines a visible heading for the <details> element.",
  alt_attr: [] // Summary tag does not typically have attributes
},
{
  tag: "sup",
  code: "<sup>Superscript Text</sup>",
  tag_desc: "The <sup> tag defines superscript text.",
  alt_attr: [] // Sup tag does not typically have attributes
},
{
  tag: "table",
  code: `
    <table border="1">
      <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
      </tr>
      <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
      </tr>
    </table>
  `,
  tag_desc: "The <table> tag defines a table.",
  alt_attr: [
    {
      attr_name: "border",
      attr_desc: "Specifies whether the table cells should have borders.",
      attr_val_desc: "Integer value (0 for no border, 1 for border)."
    },
    {
      attr_name: "width",
      attr_desc: "Specifies the width of the table.",
      attr_val_desc: "Width in pixels or percentage."
    },
    {
      attr_name: "cellpadding",
      attr_desc: "Specifies the space between the cell content and its borders.",
      attr_val_desc: "Integer value."
    },
    {
      attr_name: "cellspacing",
      attr_desc: "Specifies the space between cells.",
      attr_val_desc: "Integer value."
    },
    {
      attr_name: "summary",
      attr_desc: "Specifies a summary of the table's content for accessibility purposes.",
      attr_val_desc: "Text description of the table."
    }
  ]
},
{
  tag: "tbody",
  code: `
    <table border="1">
      <tbody>
        <tr>
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
        </tr>
        <tr>
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
        </tr>
      </tbody>
    </table>
  `,
  tag_desc: "The <tbody> tag groups the body content in an HTML table.",
  alt_attr: [] // Tbody tag does not typically have attributes
},
{
  tag: "td",
  code: "<td>Table Cell</td>",
  tag_desc: "The <td> tag defines a standard data cell in an HTML table.",
  alt_attr: [
    {
      attr_name: "colspan",
      attr_desc: "Specifies the number of columns a cell should span.",
      attr_val_desc: "Integer value."
    },
    {
      attr_name: "rowspan",
      attr_desc: "Specifies the number of rows a cell should span.",
      attr_val_desc: "Integer value."
    }
  ]
},
{
  tag: "template",
  code: `
    <template>
      <!-- Add content to be cloned here -->
    </template>
  `,
  tag_desc: "The <template> tag represents a piece of HTML that can be cloned and inserted in the document by JavaScript.",
  alt_attr: [] // Template tag does not typically have attributes
},
{
  tag: "textarea",
  code: "<textarea>Textarea Text</textarea>",
  tag_desc: "The <textarea> tag defines a multiline input control (text area).",
  alt_attr: [
    {
      attr_name: "name",
      attr_desc: "Specifies the name of the textarea.",
      attr_val_desc: "Name of the textarea."
    },
    {
      attr_name: "rows",
      attr_desc: "Specifies the visible number of lines in the textarea.",
      attr_val_desc: "Number of visible lines."
    },
    {
      attr_name: "cols",
      attr_desc: "Specifies the visible width of the textarea (in average character widths).",
      attr_val_desc: "Number of visible characters."
    },
    {
      attr_name: "disabled",
      attr_desc: "Specifies that the textarea should be disabled.",
      attr_val_desc: "No value needed. Simply add the 'disabled' attribute."
    },
    {
      attr_name: "readonly",
      attr_desc: "Specifies that the textarea should be read-only.",
      attr_val_desc: "No value needed. Simply add the 'readonly' attribute."
    },
    {
      attr_name: "placeholder",
      attr_desc: "Specifies a short hint that describes the expected value of the textarea.",
      attr_val_desc: "Text to be displayed in the textarea when it is empty."
    },
    {
      attr_name: "autofocus",
      attr_desc: "Specifies that the textarea should automatically get focus when the page loads.",
      attr_val_desc: "No value needed. Simply add the 'autofocus' attribute."
    },
    {
      attr_name: "autocomplete",
      attr_desc: "Specifies whether the browser should autocomplete the textarea.",
      attr_val_desc: "'on' or 'off'."
    }
  ]
},
{
  tag: "tfoot",
  code: `
    <table border="1">
      <tfoot>
        <tr>
          <td>Footer Row, Cell 1</td>
          <td>Footer Row, Cell 2</td>
        </tr>
      </tfoot>
    </table>
  `,
  tag_desc: "The <tfoot> tag groups footer content in an HTML table.",
  alt_attr: [] // Tfoot tag does not typically have attributes
},
{
  tag: "th",
  code: "<th>Table Header Cell</th>",
  tag_desc: "The <th> tag defines a header cell in an HTML table.",
  alt_attr: [
    {
      attr_name: "colspan",
      attr_desc: "Specifies the number of columns a header cell should span.",
      attr_val_desc: "Integer value."
    },
    {
      attr_name: "rowspan",
      attr_desc: "Specifies the number of rows a header cell should span.",
      attr_val_desc: "Integer value."
    }
  ]
},
{
  tag: "thead",
  code: `
    <table border="1">
      <thead>
        <tr>
          <th>Header Row, Cell 1</th>
          <th>Header Row, Cell 2</th>
        </tr>
      </thead>
    </table>
  `,
  tag_desc: "The <thead> tag groups header content in an HTML table.",
  alt_attr: [] // Thead tag does not typically have attributes
},
{
  tag: "time",
  code: '<time datetime="YYYY-MM-DD">Date and/or Time</time>',
  tag_desc: "The <time> tag defines a specific period in time or a date.",
  alt_attr: [
    {
      attr_name: "datetime",
      attr_desc: "Specifies the date and/or time.",
      attr_val_desc: "Date and/or time value (e.g., 'YYYY-MM-DD' or 'YYYY-MM-DDTHH:MM:SS')."
    }
  ]
},
{
  tag: "title",
  code: "<title>Document Title</title>",
  tag_desc: "The <title> tag defines the title of the document.",
  alt_attr: [] // Title tag does not typically have attributes
},
{
  tag: "tr",
  code: `
    <table border="1">
      <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
      </tr>
    </table>
  `,
  tag_desc: "The <tr> tag defines a row in an HTML table.",
  alt_attr: [] // Tr tag does not typically have attributes
},
{
  tag: "track",
  code: '<track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">',
  tag_desc: "The <track> tag specifies text tracks for media elements (<audio> and <video>).",
  alt_attr: [
    {
      attr_name: "src",
      attr_desc: "Specifies the URL of the track file.",
      attr_val_desc: "URL of the track file."
    },
    {
      attr_name: "kind",
      attr_desc: "Specifies the kind of text track.",
      attr_val_desc: "'subtitles', 'captions', 'descriptions', 'chapters', or 'metadata'."
    },
    {
      attr_name: "srclang",
      attr_desc: "Specifies the language of the track text data.",
      attr_val_desc: "Language code (e.g., 'en', 'es', 'fr', etc.)"
    },
    {
      attr_name: "label",
      attr_desc: "Specifies the title of the track.",
      attr_val_desc: "Title of the track."
    },
    {
      attr_name: "default",
      attr_desc: "Specifies that the track should be enabled by default.",
      attr_val_desc: "No value needed. Simply add the 'default' attribute."
    }
  ]
},
{
  tag: "u",
  code: "<u>Underlined Text</u>",
  tag_desc: "The <u> tag defines underlined text.",
  alt_attr: [] // U tag does not typically have attributes
},
{
  tag: "ul",
  code: `
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  `,
  tag_desc: "The <ul> tag defines an unordered list.",
  alt_attr: [] // Ul tag does not typically have attributes
},
{
  tag: "var",
  code: "<var>Variable Text</var>",
  tag_desc: "The <var> tag defines a variable.",
  alt_attr: [] // Var tag does not typically have attributes
},
{
  tag: "video",
  code: '<video width="320" height="240" controls><source src="movie.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
  tag_desc: "The <video> tag defines video, such as a movie clip or other video streams.",
  alt_attr: [
    {
      attr_name: "src",
      attr_desc: "Specifies the URL of the video file.",
      attr_val_desc: "URL of the video file."
    },
    {
      attr_name: "width",
      attr_desc: "Specifies the width of the video player.",
      attr_val_desc: "Width in pixels."
    },
    {
      attr_name: "height",
      attr_desc: "Specifies the height of the video player.",
      attr_val_desc: "Height in pixels."
    },
    {
      attr_name: "controls",
      attr_desc: "Specifies that video controls should be displayed.",
      attr_val_desc: "No value needed. Simply add the 'controls' attribute."
    },
    {
      attr_name: "autoplay",
      attr_desc: "Specifies that the video should start playing automatically.",
      attr_val_desc: "No value needed. Simply add the 'autoplay' attribute."
    },
    {
      attr_name: "loop",
      attr_desc: "Specifies that the video should start over again, every time it is finished.",
      attr_val_desc: "No value needed. Simply add the 'loop' attribute."
    },
    {
      attr_name: "muted",
      attr_desc: "Specifies that the audio output of the video should be muted.",
      attr_val_desc: "No value needed. Simply add the 'muted' attribute."
    },
    {
      attr_name: "poster",
      attr_desc: "Specifies an image to be shown while the video is downloading or until the user hits the play button.",
      attr_val_desc: "URL of the poster image."
    }
  ]
},
{
  tag: "wbr",
  code: "Line break opportunity: <wbr>",
  tag_desc: "The <wbr> tag defines a possible line-break opportunity.",
  alt_attr: [] // Wbr tag does not typically have attributes
}

  
];
