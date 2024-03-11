export const css_data = [
  {
    border: {
      property_name: "border",
      value_types: ["<border-width>", "<border-style>", "<color>"],
      values_description: {
        "1px solid black": "Sets a solid black border with a width of 1 pixel.",
      },
    },

    color: {
      property_name: "color",
      value_types: ["<color>"],
      values_description: {
        red: "Sets the text color to red.",
        "#00FF00":
          "Sets the text color to green using hexadecimal color notation.",
        "rgb(255, 0, 0)":
          "Sets the text color to red using RGB color notation.",
      },
    },
    "font-size": {
      property_name: "font-size",
      value_types: [
        "<absolute-size>",
        "<relative-size>",
        "<length>",
        "<percentage>",
      ],
      values_description: {
        "12px": "Sets the font size to 12 pixels.",
        "1.5em":
          "Sets the font size to 1.5 times the size of the parent element's font size.",
      },
    },
    "text-align": {
      property_name: "text-align",
      value_types: ["left", "right", "center", "justify"],
      values_description: {
        left: "Aligns text content to the left.",
        center: "Aligns text content to the center.",
        right: "Aligns text content to the right.",
        justify:
          "Aligns text content to both the left and right edges, adding extra space between words as necessary to justify the text.",
      },
    },
    "background-color": {
      property_name: "background-color",
      value_types: ["<color>"],
      values_description: {
        yellow: "Sets the background color to yellow.",
        "rgba(255, 0, 0, 0.5)":
          "Sets the background color to red with 50% transparency.",
      },
    },
  },
  {
    clear: {
      property_name: "clear",
      value_types: ["none", "left", "right", "both"],
      values_description: {
        none: "No floating elements are allowed on either side.",
        left: "No floating elements are allowed on the left side.",
        right: "No floating elements are allowed on the right side.",
        both: "No floating elements are allowed on either side.",
      },
    },
    display: {
      property_name: "display",
      value_types: ["block", "inline", "inline-block", "flex", "grid", "none"],
      values_description: {
        block: "The element generates a block-level box.",
        inline: "The element generates one or more inline boxes.",
        "inline-block":
          "The element generates a block-level box that participates in a block formatting context.",
        flex: "The element generates a block-level flex container box.",
        grid: "The element generates a grid container box.",
        none: "The element is completely removed from the document layout and leaves no space for it.",
      },
    },
    float: {
      property_name: "float",
      value_types: ["left", "right", "none"],
      values_description: {
        left: "The element floats to the left of its container.",
        right: "The element floats to the right of its container.",
        none: "The element does not float.",
      },
    },
    "font-family": {
      property_name: "font-family",
      value_types: ["<family-name>", "<generic-family>"],
      values_description: {
        "'Times New Roman', Times, serif":
          "Specifies a specific font family and fallback generic family.",
        "Arial, sans-serif":
          "Specifies a specific font family and fallback generic family.",
      },
    },
    "font-style": {
      property_name: "font-style",
      value_types: ["normal", "italic", "oblique"],
      values_description: {
        normal: "The font style is normal.",
        italic: "The font style is italic.",
        oblique: "The font style is oblique.",
      },
    },
  },
  {
    "font-weight": {
      property_name: "font-weight",
      value_types: ["normal", "bold", "bolder", "lighter", "<number>"],
      values_description: {
        normal: "Defines normal characters.",
        bold: "Defines thick characters.",
        bolder: "Defines thicker characters.",
        lighter: "Defines lighter characters.",
        "<number>": "Defines the thickness of characters.",
      },
    },
    height: {
      property_name: "height",
      value_types: ["auto", "<length>", "<percentage>"],
      values_description: {
        auto: "The browser calculates the height.",
        "<length>": "Defines the height in length units.",
        "<percentage>":
          "Defines the height as a percentage of the containing block's height.",
      },
    },
    "letter-spacing": {
      property_name: "letter-spacing",
      value_types: ["normal", "<length>"],
      values_description: {
        normal: "The spacing between characters is normal.",
        "<length>": "Defines the spacing between characters in length units.",
      },
    },
    "line-height": {
      property_name: "line-height",
      value_types: ["normal", "<number>", "<length>", "<percentage>"],
      values_description: {
        normal: "The line height is normal.",
        "<number>": "Defines the line height as a multiple of the font size.",
        "<length>": "Defines the line height in length units.",
        "<percentage>":
          "Defines the line height as a percentage of the font size.",
      },
    },
    "list-style": {
      property_name: "list-style",
      value_types: ["<list-style-type>", "<list-style-position>", "<image>"],
      values_description: {
        "<list-style-type>": "Specifies the type of list marker.",
        "<list-style-position>": "Specifies the position of the list marker.",
        "<image>": "Specifies an image as the list item marker.",
      },
    },
  },
  {
    margin: {
      property_name: "margin",
      value_types: ["<length>", "<percentage>", "auto"],
      values_description: {
        "<length>": "Defines the margin in length units.",
        "<percentage>":
          "Defines the margin as a percentage of the width of the containing block.",
        auto: "The browser calculates the margin.",
      },
    },
    "max-height": {
      property_name: "max-height",
      value_types: ["none", "<length>", "<percentage>"],
      values_description: {
        none: "No maximum height is specified.",
        "<length>": "Defines the maximum height in length units.",
        "<percentage>":
          "Defines the maximum height as a percentage of the containing block's height.",
      },
    },
    "max-width": {
      property_name: "max-width",
      value_types: ["none", "<length>", "<percentage>"],
      values_description: {
        none: "No maximum width is specified.",
        "<length>": "Defines the maximum width in length units.",
        "<percentage>":
          "Defines the maximum width as a percentage of the containing block's width.",
      },
    },
    "min-height": {
      property_name: "min-height",
      value_types: ["auto", "<length>", "<percentage>"],
      values_description: {
        auto: "The browser calculates the minimum height.",
        "<length>": "Defines the minimum height in length units.",
        "<percentage>":
          "Defines the minimum height as a percentage of the containing block's height.",
      },
    },
    "min-width": {
      property_name: "min-width",
      value_types: ["auto", "<length>", "<percentage>"],
      values_description: {
        auto: "The browser calculates the minimum width.",
        "<length>": "Defines the minimum width in length units.",
        "<percentage>":
          "Defines the minimum width as a percentage of the containing block's width.",
      },
    },
  },
  {
    opacity: {
      property_name: "opacity",
      value_types: ["<number>"],
      values_description: {
        "<number>":
          "Specifies the opacity level. A value between 0 (fully transparent) and 1 (fully opaque).",
      },
    },
    overflow: {
      property_name: "overflow",
      value_types: ["visible", "hidden", "scroll", "auto"],
      values_description: {
        visible: "Content is not clipped and may be rendered outside the box.",
        hidden: "Content is clipped and not displayed if it overflows the box.",
        scroll:
          "Content is clipped and a scrollbar is added to see the rest of the content.",
        auto: "Content is clipped and a scrollbar is added only when necessary.",
      },
    },
    padding: {
      property_name: "padding",
      value_types: ["<length>", "<percentage>"],
      values_description: {
        "<length>": "Defines the padding in length units.",
        "<percentage>":
          "Defines the padding as a percentage of the width of the containing block.",
      },
    },
    position: {
      property_name: "position",
      value_types: ["static", "relative", "absolute", "fixed", "sticky"],
      values_description: {
        static:
          "The element is positioned according to the normal flow of the document.",
        relative: "The element is positioned relative to its normal position.",
        absolute:
          "The element is positioned relative to its nearest positioned ancestor.",
        fixed: "The element is positioned relative to the viewport.",
        sticky:
          "The element is positioned based on the user's scroll position.",
      },
    },
    "text-decoration": {
      property_name: "text-decoration",
      value_types: ["none", "underline", "overline", "line-through"],
      values_description: {
        none: "No decoration is applied.",
        underline: "A line is drawn beneath the text.",
        overline: "A line is drawn above the text.",
        "line-through": "A line is drawn through the middle of the text.",
      },
    },
  },
  {
    "text-transform": {
      property_name: "text-transform",
      value_types: ["none", "capitalize", "uppercase", "lowercase"],
      values_description: {
        none: "No capitalization or transformation is applied.",
        capitalize: "Transforms the first character of each word to uppercase.",
        uppercase: "Transforms all characters to uppercase.",
        lowercase: "Transforms all characters to lowercase.",
      },
    },
    "vertical-align": {
      property_name: "vertical-align",
      value_types: [
        "baseline",
        "sub",
        "super",
        "top",
        "text-top",
        "middle",
        "bottom",
        "text-bottom",
      ],
      values_description: {
        baseline:
          "Aligns the baseline of the element with the baseline of its parent.",
        sub: "Aligns the element as if it were subscript.",
        super: "Aligns the element as if it were superscript.",
        top: "Aligns the top of the element with the top of the tallest element on the line.",
        "text-top":
          "Aligns the top of the element with the top of the parent element's font.",
        middle:
          "Aligns the middle of the element with the middle of the parent element's font.",
        bottom:
          "Aligns the bottom of the element with the bottom of the lowest element on the line.",
        "text-bottom":
          "Aligns the bottom of the element with the bottom of the parent element's font.",
      },
    },
    visibility: {
      property_name: "visibility",
      value_types: ["visible", "hidden", "collapse"],
      values_description: {
        visible: "The element is visible.",
        hidden: "The element is hidden but still takes up space in the layout.",
        collapse:
          "For table rows, the row element will be hidden and the space it occupied will be collapsed.",
      },
    },
    "white-space": {
      property_name: "white-space",
      value_types: ["normal", "nowrap", "pre", "pre-wrap", "pre-line"],
      values_description: {
        normal: "Whitespace is collapsed and text wraps when necessary.",
        nowrap: "Whitespace is collapsed but text does not wrap.",
        pre: "Whitespace is preserved, and text will only wrap if an explicit line break is present.",
        "pre-wrap": "Whitespace is preserved, and text wraps when necessary.",
        "pre-line":
          "Whitespace is preserved, text wraps when necessary, and line breaks are preserved.",
      },
    },
    width: {
      property_name: "width",
      value_types: ["auto", "<length>", "<percentage>"],
      values_description: {
        auto: "The browser calculates the width.",
        "<length>": "Defines the width in length units.",
        "<percentage>":
          "Defines the width as a percentage of the containing block's width.",
      },
    },
  },
  {
    "word-break": {
      property_name: "word-break",
      value_types: ["normal", "break-all", "keep-all"],
      values_description: {
        normal: "Words break according to usual rules.",
        "break-all": "Word breaks can occur at any character.",
        "keep-all": "Word breaks only occur at allowed break points.",
      },
    },
    "word-spacing": {
      property_name: "word-spacing",
      value_types: ["normal", "<length>"],
      values_description: {
        normal: "The default spacing between words.",
        "<length>": "Defines the spacing between words in length units.",
      },
    },
    "word-wrap": {
      property_name: "word-wrap",
      value_types: ["normal", "break-word"],
      values_description: {
        normal: "Words break according to usual rules.",
        "break-word": "Word breaks can occur at any character.",
      },
    },
    "z-index": {
      property_name: "z-index",
      value_types: ["auto", "<number>"],
      values_description: {
        auto: "The stack order is determined by the context.",
        "<number>": "Defines the stack order relative to other elements.",
      },
    },
    flex: {
      property_name: "flex",
      value_types: [
        "none",
        "auto",
        "<flex-grow>",
        "<flex-shrink>",
        "<flex-basis>",
      ],
      values_description: {
        none: "The item is not flexible.",
        auto: "The item is flexible.",
        "<flex-grow>":
          "Defines the flexibility of the item along the main axis.",
        "<flex-shrink>":
          "Defines the flexibility of the item along the cross axis.",
        "<flex-basis>":
          "Defines the initial main size of the item before any flexible lengths or factors are applied.",
      },
    },
  },
  {
    "flex-direction": {
      property_name: "flex-direction",
      value_types: ["row", "row-reverse", "column", "column-reverse"],
      values_description: {
        row: "The main axis is horizontal, and items flow from left to right.",
        "row-reverse":
          "The main axis is horizontal, and items flow from right to left.",
        column: "The main axis is vertical, and items flow from top to bottom.",
        "column-reverse":
          "The main axis is vertical, and items flow from bottom to top.",
      },
    },
    "flex-wrap": {
      property_name: "flex-wrap",
      value_types: ["nowrap", "wrap", "wrap-reverse"],
      values_description: {
        nowrap: "Items are forced onto a single line.",
        wrap: "Items wrap onto multiple lines if needed.",
        "wrap-reverse":
          "Items wrap onto multiple lines in reverse order if needed.",
      },
    },
    "align-items": {
      property_name: "align-items",
      value_types: ["stretch", "flex-start", "flex-end", "center", "baseline"],
      values_description: {
        stretch: "Items are stretched to fit the container.",
        "flex-start": "Items are aligned to the start of the cross axis.",
        "flex-end": "Items are aligned to the end of the cross axis.",
        center: "Items are centered along the cross axis.",
        baseline: "Items are aligned such that their baselines align.",
      },
    },
    "align-self": {
      property_name: "align-self",
      value_types: [
        "auto",
        "stretch",
        "flex-start",
        "flex-end",
        "center",
        "baseline",
      ],
      values_description: {
        auto: "The value is determined by the parent's align-items property.",
        stretch: "The item is stretched to fit the container.",
        "flex-start": "The item is aligned to the start of the cross axis.",
        "flex-end": "The item is aligned to the end of the cross axis.",
        center: "The item is centered along the cross axis.",
        baseline:
          "The item is aligned such that its baseline aligns with the baseline of its parent.",
      },
    },
    "justify-content": {
      property_name: "justify-content",
      value_types: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
      ],
      values_description: {
        "flex-start": "Items are packed toward the start of the main axis.",
        "flex-end": "Items are packed toward the end of the main axis.",
        center: "Items are centered along the main axis.",
        "space-between":
          "Items are evenly distributed with the first item at the start and the last item at the end.",
        "space-around":
          "Items are evenly distributed with equal space around them.",
      },
    },
  },
  {
    animation: {
      property_name: "animation",
      value_types: [
        "<animation-name>",
        "<animation-duration>",
        "<animation-timing-function>",
        "<animation-delay>",
        "<animation-iteration-count>",
        "<animation-direction>",
        "<animation-fill-mode>",
        "<animation-play-state>",
      ],
      values_description: {
        "<animation-name>": "Specifies the name of the animation.",
        "<animation-duration>": "Specifies the duration of the animation.",
        "<animation-timing-function>":
          "Specifies the timing function for the animation.",
        "<animation-delay>": "Specifies the delay before the animation starts.",
        "<animation-iteration-count>":
          "Specifies the number of times the animation should repeat.",
        "<animation-direction>": "Specifies the direction of the animation.",
        "<animation-fill-mode>":
          "Specifies how the animation applies styles before and after it executes.",
        "<animation-play-state>":
          "Specifies whether the animation is running or paused.",
      },
    },
    "backface-visibility": {
      property_name: "backface-visibility",
      value_types: ["visible", "hidden"],
      values_description: {
        visible: "The back face of the element is visible.",
        hidden: "The back face of the element is hidden.",
      },
    },
    "box-shadow": {
      property_name: "box-shadow",
      value_types: ["none", "<shadow>"],
      values_description: {
        none: "No shadow is displayed.",
        "<shadow>": "Specifies the shadow effect.",
      },
    },
    cursor: {
      property_name: "cursor",
      value_types: [
        "auto",
        "default",
        "pointer",
        "text",
        "move",
        "wait",
        "help",
        "progress",
        "crosshair",
        "alias",
        "copy",
        "not-allowed",
      ],
      values_description: {
        auto: "The cursor is set to the platform-specific default cursor.",
        default: "The default cursor.",
        pointer: "The cursor is a pointer, typically used for links.",
        text: "The cursor is a text input cursor.",
        move: "The cursor indicates that something can be moved.",
        wait: "The cursor indicates that the program is busy.",
        help: "The cursor indicates that help is available.",
        progress: "The cursor indicates that the program is performing a task.",
        crosshair:
          "The cursor is a crosshair, often used for precision selection.",
        alias: "The cursor indicates an alias of something is to be created.",
        copy: "The cursor indicates that something can be copied.",
        "not-allowed":
          "The cursor indicates that the requested action will not be executed.",
      },
    },
    outline: {
      property_name: "outline",
      value_types: ["<color>", "<length>", "invert", "none"],
      values_description: {
        "<color>": "Specifies the color of the outline.",
        "<length>": "Specifies the thickness of the outline.",
        invert: "Inverts the colors of the element and its outline.",
        none: "No outline is displayed.",
      },
    },
  },
  {
    "pointer-events": {
      property_name: "pointer-events",
      value_types: [
        "auto",
        "none",
        "visiblePainted",
        "visibleFill",
        "visibleStroke",
        "visible",
        "painted",
        "fill",
        "stroke",
        "all",
      ],
      values_description: {
        auto: "The element reacts to pointer events if it is a descendant of a visible, painted, or fill element.",
        none: "The element does not react to pointer events.",
        visiblePainted:
          "The element reacts to pointer events if it is a descendant of a visible and painted element.",
        visibleFill:
          "The element reacts to pointer events if it is a descendant of a visible and fill element.",
        visibleStroke:
          "The element reacts to pointer events if it is a descendant of a visible and stroke element.",
        visible:
          "The element reacts to pointer events if it is a descendant of a visible element.",
        painted:
          "The element reacts to pointer events if it is a descendant of a painted element.",
        fill: "The element reacts to pointer events if it is a descendant of a fill element.",
        stroke:
          "The element reacts to pointer events if it is a descendant of a stroke element.",
        all: "The element reacts to pointer events regardless of the visibility of its ancestors.",
      },
    },
    resize: {
      property_name: "resize",
      value_types: ["none", "both", "horizontal", "vertical"],
      values_description: {
        none: "The user cannot resize the element.",
        both: "The user can resize the element horizontally and vertically.",
        horizontal: "The user can resize the element horizontally.",
        vertical: "The user can resize the element vertically.",
      },
    },
    "text-overflow": {
      property_name: "text-overflow",
      value_types: ["clip", "ellipsis"],
      values_description: {
        clip: "Text that overflows the container is clipped.",
        ellipsis:
          "Text that overflows the container is truncated with an ellipsis.",
      },
    },
    transform: {
      property_name: "transform",
      value_types: ["<transform-function>", "none"],
      values_description: {
        "<transform-function>": "Specifies a 2D or 3D transformation.",
        none: "No transformation is applied.",
      },
    },
    transition: {
      property_name: "transition",
      value_types: [
        "<single-transition-property>",
        "<transition-duration>",
        "<transition-timing-function>",
        "<transition-delay>",
      ],
      values_description: {
        "<single-transition-property>":
          "Specifies the CSS property to transition.",
        "<transition-duration>": "Specifies the duration of the transition.",
        "<transition-timing-function>":
          "Specifies the timing function for the transition.",
        "<transition-delay>":
          "Specifies the delay before the transition starts.",
      },
    },
  },
  {
    "user-select": {
      property_name: "user-select",
      value_types: ["auto", "text", "none", "contain", "all"],
      values_description: {
        auto: "The default platform behavior is applied.",
        text: "Text selection is allowed.",
        none: "Text selection is not allowed.",
        contain:
          "Text selection is allowed only if the entire element is selected.",
        all: "Text selection is allowed for the whole page.",
      },
    },
    visibility: {
      property_name: "visibility",
      value_types: ["visible", "hidden", "collapse"],
      values_description: {
        visible: "The element is visible.",
        hidden:
          "The element is hidden, but still takes up space in the layout.",
        collapse:
          "For table rows, the row element will be hidden, and the space it occupied will be collapsed.",
      },
    },
    "white-space": {
      property_name: "white-space",
      value_types: ["normal", "nowrap", "pre", "pre-wrap", "pre-line"],
      values_description: {
        normal: "Whitespace is collapsed and text wraps when necessary.",
        nowrap: "Whitespace is collapsed, but text does not wrap.",
        pre: "Whitespace is preserved, and text will only wrap if an explicit line break is present.",
        "pre-wrap": "Whitespace is preserved, and text wraps when necessary.",
        "pre-line":
          "Whitespace is preserved, text wraps when necessary, and line breaks are preserved.",
      },
    },
    width: {
      property_name: "width",
      value_types: ["auto", "<length>", "<percentage>"],
      values_description: {
        auto: "The browser calculates the width.",
        "<length>": "Defines the width in length units.",
        "<percentage>":
          "Defines the width as a percentage of the containing block's width.",
      },
    },
    "word-break": {
      property_name: "word-break",
      value_types: ["normal", "break-all", "keep-all"],
      values_description: {
        normal: "Words break according to usual rules.",
        "break-all": "Word breaks can occur at any character.",
        "keep-all": "Word breaks only occur at allowed break points.",
      },
    },
  },
  {
    "word-spacing": {
      property_name: "word-spacing",
      value_types: ["normal", "<length>"],
      values_description: {
        normal: "The default spacing between words.",
        "<length>": "Specifies the spacing between words in length units.",
      },
    },
    "word-wrap": {
      property_name: "word-wrap",
      value_types: ["normal", "break-word"],
      values_description: {
        normal: "Words break according to usual rules.",
        "break-word": "Word breaks can occur at any character.",
      },
    },
    "writing-mode": {
      property_name: "writing-mode",
      value_types: ["horizontal-tb", "vertical-rl", "vertical-lr"],
      values_description: {
        "horizontal-tb":
          "Text flows horizontally from left to right, then top to bottom.",
        "vertical-rl":
          "Text flows vertically from top to bottom, then right to left.",
        "vertical-lr":
          "Text flows vertically from top to bottom, then left to right.",
      },
    },
    "z-index": {
      property_name: "z-index",
      value_types: ["auto", "<integer>"],
      values_description: {
        auto: "The stack order is determined automatically by the document structure.",
        "<integer>": "Specifies the stack order relative to other elements.",
      },
    },
  },
  {
    "align-content": {
      property_name: "align-content",
      value_types: [
        "stretch",
        "center",
        "flex-start",
        "flex-end",
        "space-between",
        "space-around",
      ],
      values_description: {
        stretch: "Lines stretch to take up the remaining space.",
        center: "Lines are centered within the flex container.",
        "flex-start": "Lines are packed at the start of the flex container.",
        "flex-end": "Lines are packed at the end of the flex container.",
        "space-between":
          "Lines are evenly distributed with the first line at the start and the last line at the end.",
        "space-around":
          "Lines are evenly distributed with equal space around them.",
      },
    },
    "align-items": {
      property_name: "align-items",
      value_types: ["stretch", "center", "flex-start", "flex-end", "baseline"],
      values_description: {
        stretch: "Items stretch to fill the container.",
        center: "Items are centered within the container.",
        "flex-start": "Items are packed at the start of the container.",
        "flex-end": "Items are packed at the end of the container.",
        baseline: "Items are aligned based on their baseline.",
      },
    },
    "align-self": {
      property_name: "align-self",
      value_types: [
        "auto",
        "stretch",
        "center",
        "flex-start",
        "flex-end",
        "baseline",
      ],
      values_description: {
        auto: "The value is determined by the value of align-items on the parent container.",
        stretch: "The item stretches to fill the container.",
        center: "The item is centered within the container.",
        "flex-start": "The item is packed at the start of the container.",
        "flex-end": "The item is packed at the end of the container.",
        baseline: "The item is aligned based on its baseline.",
      },
    },
    "animation-delay": {
      property_name: "animation-delay",
      value_types: ["<time>", "initial", "inherit"],
      values_description: {
        "<time>": "Specifies the delay before the animation starts.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
    "animation-direction": {
      property_name: "animation-direction",
      value_types: [
        "normal",
        "reverse",
        "alternate",
        "alternate-reverse",
        "initial",
        "inherit",
      ],
      values_description: {
        normal: "The animation plays forward each cycle.",
        reverse: "The animation plays backward each cycle.",
        alternate:
          "The animation plays forward on even cycles and backward on odd cycles.",
        "alternate-reverse":
          "The animation plays backward on even cycles and forward on odd cycles.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
  },
  {
    "animation-timing-function": {
      property_name: "animation-timing-function",
      value_types: [
        "ease",
        "linear",
        "ease-in",
        "ease-out",
        "ease-in-out",
        "cubic-bezier(<number>, <number>, <number>, <number>)",
        "initial",
        "inherit",
      ],
      values_description: {
        ease: "Default value. Specifies a transition effect with a slow start, then fast, then end slowly (equivalent to cubic-bezier(0.25, 0.1, 0.25, 1)).",
        linear:
          "Specifies a transition effect with the same speed from start to end.",
        "ease-in": "Specifies a transition effect with a slow start.",
        "ease-out": "Specifies a transition effect with a slow end.",
        "ease-in-out":
          "Specifies a transition effect with a slow start and end.",
        "cubic-bezier(<number>, <number>, <number>, <number>)":
          "Specifies a cubic Bezier curve for the transition.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
    "backface-visibility": {
      property_name: "backface-visibility",
      value_types: ["visible", "hidden", "initial", "inherit"],
      values_description: {
        visible: "The back face of the element is visible.",
        hidden: "The back face of the element is hidden.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
    background: {
      property_name: "background",
      value_types: [
        "<background-color>",
        "<background-image>",
        "<background-repeat>",
        "<background-attachment>",
        "<background-position>",
        "<background-size>",
        "<background-origin>",
        "<background-clip>",
        "<background-blend-mode>",
        "initial",
        "inherit",
      ],
      values_description: {
        "<background-color>": "Specifies the background color.",
        "<background-image>": "Specifies one or more background images.",
        "<background-repeat>": "Specifies how background images are repeated.",
        "<background-attachment>":
          "Specifies whether the background image is fixed or scrolls with the page.",
        "<background-position>":
          "Specifies the starting position of the background image(s).",
        "<background-size>": "Specifies the size of the background image(s).",
        "<background-origin>":
          "Specifies the positioning area of the background images.",
        "<background-clip>":
          "Specifies the painting area of the background images.",
        "<background-blend-mode>":
          "Specifies the blending mode of the background images.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
    "background-attachment": {
      property_name: "background-attachment",
      value_types: ["scroll", "fixed", "local", "initial", "inherit"],
      values_description: {
        scroll: "The background image scrolls along with the content.",
        fixed: "The background image is fixed relative to the viewport.",
        local:
          "The background image is fixed relative to the element's contents.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
    "background-blend-mode": {
      property_name: "background-blend-mode",
      value_types: [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
        "initial",
        "inherit",
      ],
      values_description: {
        normal: "Default value. Specifies no blending.",
        multiply:
          "Multiplies the colors of the background and the background layers.",
        screen: "Inverse multiply and then invert the result.",
        overlay:
          "Multiplies or screens the colors, depending on the base color.",
        darken: "Selects the darker of the backdrop and the source colors.",
        lighten: "Selects the lighter of the backdrop and the source colors.",
        "color-dodge":
          "Brightens the backdrop color to reflect the source color.",
        "color-burn": "Darkens the backdrop color to reflect the source color.",
        "hard-light":
          "Multiplies or screens the colors, depending on the source color.",
        "soft-light":
          "Darkens or lightens the colors, depending on the source color.",
        difference:
          "Subtracts the darker of the two colors from the lighter color.",
        exclusion: "Similar to difference, but with lower contrast.",
        hue: "Uses the hue of the source color with the saturation and luminosity of the backdrop color.",
        saturation:
          "Uses the saturation of the source color with the hue and luminosity of the backdrop color.",
        color:
          "Uses the color of the source color with the hue and saturation of the backdrop color.",
        luminosity:
          "Uses the luminosity of the source color with the hue and saturation of the backdrop color.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
  },
  {
    "background-color": {
      property_name: "background-color",
      value_types: ["<color>", "transparent", "initial", "inherit"],
      values_description: {
        "<color>": "Specifies the background color.",
        transparent: "Specifies a transparent background color.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
    "background-image": {
      property_name: "background-image",
      value_types: ["none", "<url>", "initial", "inherit"],
      values_description: {
        none: "No background image is displayed.",
        "<url>": "Specifies the path to the background image.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
    "background-origin": {
      property_name: "background-origin",
      value_types: [
        "padding-box",
        "border-box",
        "content-box",
        "initial",
        "inherit",
      ],
      values_description: {
        "padding-box":
          "The background image is positioned relative to the padding box.",
        "border-box":
          "The background image is positioned relative to the border box.",
        "content-box":
          "The background image is positioned relative to the content box.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
    "background-position": {
      property_name: "background-position",
      value_types: [
        "<position>",
        "left top",
        "left center",
        "left bottom",
        "right top",
        "right center",
        "right bottom",
        "center top",
        "center center",
        "center bottom",
        "x% y%",
        "initial",
        "inherit",
      ],
      values_description: {
        "<position>":
          "Specifies the horizontal and vertical position of the background image.",
        "left top": "Positions the background image in the top-left corner.",
        "left center":
          "Positions the background image in the center of the left edge.",
        "left bottom":
          "Positions the background image in the bottom-left corner.",
        "right top": "Positions the background image in the top-right corner.",
        "right center":
          "Positions the background image in the center of the right edge.",
        "right bottom":
          "Positions the background image in the bottom-right corner.",
        "center top":
          "Positions the background image in the center of the top edge.",
        "center center":
          "Positions the background image in the center of the element.",
        "center bottom":
          "Positions the background image in the center of the bottom edge.",
        "x% y%":
          "Specifies the position as a percentage of the element's width and height.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
    "background-repeat": {
      property_name: "background-repeat",
      value_types: [
        "repeat",
        "repeat-x",
        "repeat-y",
        "no-repeat",
        "initial",
        "inherit",
      ],
      values_description: {
        repeat:
          "The background image is repeated both horizontally and vertically.",
        "repeat-x": "The background image is repeated only horizontally.",
        "repeat-y": "The background image is repeated only vertically.",
        "no-repeat": "The background image is not repeated.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
  },
  {
    border: {
      property_name: "border",
      value_types: ["<border-width>", "<border-style>", "<color>"],
      values_description: {
        "<border-width>": "Specifies the width of the border.",
        "<border-style>": "Specifies the style of the border.",
        "<color>": "Specifies the color of the border.",
      },
    },
    "border-bottom": {
      property_name: "border-bottom",
      value_types: ["<border-width>", "<border-style>", "<color>"],
      values_description: {
        "<border-width>": "Specifies the width of the bottom border.",
        "<border-style>": "Specifies the style of the bottom border.",
        "<color>": "Specifies the color of the bottom border.",
      },
    },
    "border-bottom-color": {
      property_name: "border-bottom-color",
      value_types: ["<color>", "transparent", "initial", "inherit"],
      values_description: {
        "<color>": "Specifies the color of the bottom border.",
        transparent: "Specifies a transparent bottom border color.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
    "border-bottom-left-radius": {
      property_name: "border-bottom-left-radius",
      value_types: ["<length>", "<percentage>", "initial", "inherit"],
      values_description: {
        "<length>": "Specifies the radius of the bottom-left corner.",
        "<percentage>":
          "Specifies the radius as a percentage of the border box.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
    "border-bottom-right-radius": {
      property_name: "border-bottom-right-radius",
      value_types: ["<length>", "<percentage>", "initial", "inherit"],
      values_description: {
        "<length>": "Specifies the radius of the bottom-right corner.",
        "<percentage>":
          "Specifies the radius as a percentage of the border box.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
  },
  {
    "border-bottom-style": {
      property_name: "border-bottom-style",
      value_types: [
        "none",
        "hidden",
        "dotted",
        "dashed",
        "solid",
        "double",
        "groove",
        "ridge",
        "inset",
        "outset",
        "initial",
        "inherit",
      ],
      values_description: {
        none: "No border is displayed.",
        hidden: "Same as none, but space is reserved for the border.",
        dotted: "The border is a series of dots.",
        dashed: "The border is a series of dashes.",
        solid: "The border is a single solid line.",
        double: "The border is two solid lines.",
        groove: "The border looks as though it were carved into the page.",
        ridge: "The border looks as though it were coming out of the page.",
        inset: "The border makes the box look like it is embedded in the page.",
        outset:
          "The border makes the box look like it is coming out of the page.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
    "border-bottom-width": {
      property_name: "border-bottom-width",
      value_types: [
        "thin",
        "medium",
        "thick",
        "<length>",
        "initial",
        "inherit",
      ],
      values_description: {
        thin: "Specifies a thin border.",
        medium: "Specifies a medium border.",
        thick: "Specifies a thick border.",
        "<length>": "Specifies the width of the bottom border in length units.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
    "border-collapse": {
      property_name: "border-collapse",
      value_types: ["separate", "collapse", "initial", "inherit"],
      values_description: {
        separate: "The border is separated from the adjacent borders.",
        collapse: "The border is collapsed into a single border when possible.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
    "border-color": {
      property_name: "border-color",
      value_types: ["<color>", "transparent", "initial", "inherit"],
      values_description: {
        "<color>": "Specifies the color of all four borders.",
        transparent: "Specifies a transparent border color.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
    "border-image": {
      property_name: "border-image",
      value_types: [
        "<image-source>",
        "<image-slice>",
        "<image-width>",
        "<image-outset>",
        "<image-repeat>",
        "initial",
        "inherit",
      ],
      values_description: {
        "<image-source>":
          "Specifies the path to the image to be used as the border.",
        "<image-slice>":
          "Specifies how to slice the image to use for the borders.",
        "<image-width>": "Specifies the width of the border image.",
        "<image-outset>":
          "Specifies the amount by which the border image area extends beyond the border box.",
        "<image-repeat>":
          "Specifies how the image should be repeated to fill the border area.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
  },
  {
    "border-image-outset": {
      property_name: "border-image-outset",
      value_types: ["<length>", "<number>", "initial", "inherit"],
      values_description: {
        "<length>":
          "Specifies the amount by which the border image area extends beyond the border box.",
        "<number>":
          "Specifies a multiplication factor to enlarge or shrink the border image area.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
    "border-image-repeat": {
      property_name: "border-image-repeat",
      value_types: [
        "stretch",
        "repeat",
        "round",
        "space",
        "initial",
        "inherit",
      ],
      values_description: {
        stretch:
          "The border image is stretched to fill the entire border area.",
        repeat: "The border image is repeated to fill the entire border area.",
        round:
          "The border image is repeated and stretched to fill the entire border area without clipping.",
        space:
          "The border image is repeated and spaced out to fill the entire border area without clipping.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
    "border-image-slice": {
      property_name: "border-image-slice",
      value_types: ["<number>", "<percentage>", "fill", "initial", "inherit"],
      values_description: {
        "<number>":
          "Specifies the size of the inward offsets from the top, right, bottom, and left edges of the border image.",
        "<percentage>":
          "Specifies the size as a percentage of the width or height of the image.",
        fill: "The entire image is used, and no slicing is applied.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
    "border-image-source": {
      property_name: "border-image-source",
      value_types: ["none", "<image>", "initial", "inherit"],
      values_description: {
        none: "No image is used as the border.",
        "<image>": "Specifies the path to the image to be used as the border.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
    "border-image-width": {
      property_name: "border-image-width",
      value_types: [
        "<length>",
        "<percentage>",
        "<number>",
        "auto",
        "initial",
        "inherit",
      ],
      values_description: {
        "<length>": "Specifies the width of the border image.",
        "<percentage>":
          "Specifies the width as a percentage of the width or height of the image.",
        "<number>":
          "Specifies a multiplication factor to enlarge or shrink the border image width.",
        auto: "The width of the border image is determined by the intrinsic width of the image.",
        initial: "Sets the property to its default value.",
        inherit: "Inherits the value from its parent element.",
      },
    },
  },

  // "border-left": {
  //   "property_name": "border-left",
  //   "value_types": ["<border-width>", "<border-style>", "<color>"],
  //   "values_description": {
  //     "<border-width>": "Specifies the width of the left border.",
  //     "<border-style>": "Specifies the style of the left border.",
  //     "<color>": "Specifies the color of the left border."
  //   }
  // },
  // "border-left-color": {
  //   "property_name": "border-left-color",
  //   "value_types": ["<color>", "transparent", "initial", "inherit"],
  //   "values_description": {
  //     "<color>": "Specifies the color of the left border.",
  //     "transparent": "Specifies a transparent left border color.",
  //     "initial": "Sets the property to its default value.",
  //     "inherit": "Inherits the value from its parent element."
  //   }
  // },
  // "border-left-style": {
  //   "property_name": "border-left-style",
  //   "value_types": ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "initial", "inherit"],
  //   "values_description": {
  //     "none": "No border is displayed on the left side.",
  //     "hidden": "Same as none, but space is reserved for the border.",
  //     "dotted": "The border on the left side is a series of dots.",
  //     "dashed": "The border on the left side is a series of dashes.",
  //     "solid": "The border on the left side is a single solid line.",
  //     "double": "The border on the left side is two solid lines.",
  //     "groove": "The border on the left side looks as though it were carved into the page.",
  //     "ridge": "The border on the left side looks as though it were coming out of the page.",
  //     "inset": "The border on the left side makes the box look like it is embedded in the page.",
  //     "outset": "The border on the left side makes the box look like it is coming out of the page.",
  //     "initial": "Sets the property to its default value.",
  //     "inherit": "Inherits the value from its parent element."
  //   }
  // },
  // "border-left-width": {
  //   "property_name": "border-left-width",
  //   "value_types": ["thin", "medium", "thick", "<length>", "initial", "inherit"],
  //   "values_description": {
  //     "thin": "Specifies a thin left border.",
  //     "medium": "Specifies a medium left border.",
  //     "thick": "Specifies a thick left border.",
  //     "<length>": "Specifies the width of the left border in length units.",
  //     "initial": "Sets the property to its default value.",
  //     "inherit": "Inherits the value from its parent element."
  //   }
  // },
  // "border-radius": {
  //   "property_name": "border-radius",
  //   "value_types": ["<length>", "<percentage>", "initial", "inherit"],
  //   "values_description": {
  //     "<length>": "Specifies the radius of the border corners.",
  //     "<percentage>": "Specifies the radius as a percentage of the border box.",
  //     "initial": "Sets the property to its default value.",
  //     "inherit": "Inherits the value from its parent element."
  //   }
  // },
  // "border-right": {
  //   "property_name": "border-right",
  //   "value_types": ["<border-width>", "<border-style>", "<color>"],
  //   "values_description": {
  //     "<border-width>": "Specifies the width of the right border.",
  //     "<border-style>": "Specifies the style of the right border.",
  //     "<color>": "Specifies the color of the right border."
  //   }
  // },
  // "border-right-color": {
  //   "property_name": "border-right-color",
  //   "value_types": ["<color>", "transparent", "initial", "inherit"],
  //   "values_description": {
  //     "<color>": "Specifies the color of the right border.",
  //     "transparent": "Specifies a transparent right border color.",
  //     "initial": "Sets the property to its default value.",
  //     "inherit": "Inherits the value from its parent element."
  //   }
  // },
  // "border-right-style": {
  //   "property_name": "border-right-style",
  //   "value_types": ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "initial", "inherit"],
  //   "values_description": {
  //     "none": "No border is displayed on the right side.",
  //     "hidden": "Same as none, but space is reserved for the border.",
  //     "dotted": "The border on the right side is a series of dots.",
  //     "dashed": "The border on the right side is a series of dashes.",
  //     "solid": "The border on the right side is a single solid line.",
  //     "double": "The border on the right side is two solid lines.",
  //     "groove": "The border on the right side looks as though it were carved into the page.",
  //     "ridge": "The border on the right side looks as though it were coming" } } ]
];
