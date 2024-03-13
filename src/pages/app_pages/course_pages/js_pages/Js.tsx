import { FaHtml5, FaReact, FaAngular, FaVuejs, FaJs, FaListUl } from "react-icons/fa";
import { FaHistory, FaCode, FaLaptop, FaMobileAlt } from "react-icons/fa";
import {
  FaFileCode,
  FaNodeJs,
  FaChrome,
  FaGitAlt,
  FaServer,
  FaTools,
} from "react-icons/fa";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

const Js = () => {
  const [showCode, setShowCode] = useState(false);

  const toggleCode = () => {
    setShowCode(!showCode);
  };
  return (
    <>
      <section id="js" className="bg-gray-100 py-8 my-10">
        <div id="introduction" className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">What is JavaScript?</h2>
          <p className="text-gray-700 mb-4">
            JavaScript is a high-level, interpreted programming language that is
            widely used for creating interactive and dynamic content on web
            pages. It is an essential technology for front-end web development
            and now also for backend development too. JavaScript is supported by
            all modern web browsers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-white shadow-md rounded-lg flex items-center">
              <FaHtml5 className="text-3xl text-orange-500 mr-2" />
              <span className="font-semibold">Manipulate HTML and CSS</span>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg flex items-center">
              <FaReact className="text-3xl text-blue-500 mr-2" />
              <span className="font-semibold">Handle events</span>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg flex items-center">
              <FaAngular className="text-3xl text-red-500 mr-2" />
              <span className="font-semibold">Create animations</span>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg flex items-center">
              <FaVuejs className="text-3xl text-green-500 mr-2" />
              <span className="font-semibold">
                Used in conjunction with libraries and frameworks such as Vue.js
                to build complex web applications
              </span>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">Variables</h3>
          <p className="text-gray-700 mb-4">
            Variables are used to store data values. There are different types
            of variables, including numbers, strings, arrays, and objects.
          </p>
          <h3 className="text-xl font-bold mb-2">Functions</h3>
          <p className="text-gray-700 mb-4">
            Functions are used to perform specific tasks, and they can be reused
            throughout the code.
          </p>
          <h3 className="text-xl font-bold mb-2">Control Flow</h3>
          <p className="text-gray-700 mb-4">
            JavaScript uses conditional statements (if...else) and loops (for,
            while) to control the flow of the program. It also supports error
            handling with try...catch blocks.
          </p>
          <h3 className="text-xl font-bold mb-2">Powerful Capabilities</h3>
          <p className="text-gray-700">
            As you continue to learn about JavaScript, you'll discover its
            powerful capabilities for building interactive web applications.
          </p>
        </div>
      </section>

      <section id="history" className="bg-gray-100 my-10 py-8">
        <div id="content" className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">
            History and Evolution of JavaScript
          </h2>
          <p className="text-gray-700 mb-4">
            JavaScript was created by Brendan Eich in 1995 while he was working
            at Netscape Communications Corporation. Originally named Mocha, it
            was later renamed to LiveScript and finally to JavaScript. The
            language was designed in a span of 10 days and was intended to be a
            lightweight scripting language for the Netscape Navigator web
            browser.
          </p>
          <p className="text-gray-700 mb-4">
            In 1996, JavaScript was submitted to the European Computer
            Manufacturers Association (ECMA) International to carve out a
            standard specification, resulting in ECMAScript, which is the
            standardized specification for JavaScript. This standardization
            helped ensure that different web browsers could support JavaScript
            in a consistent manner.
          </p>
          <p className="text-gray-700 mb-4">
            Over the years, JavaScript has evolved significantly, with the
            introduction of new features and improvements in subsequent
            versions. The language has grown beyond its original role as a
            client-side scripting language for web browsers and is now used for
            server-side development (Node.js), mobile app development, and even
            desktop application development.
          </p>
          <p className="text-gray-700 mb-4">
            JavaScript's evolution has been marked by the introduction of new
            language features, such as arrow functions, template literals,
            async/await for handling asynchronous operations, and the adoption
            of modern development practices. Today, JavaScript is a fundamental
            language for web development and is widely used in building complex
            web applications and interactive user interfaces.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-white shadow-md rounded-lg flex items-center">
              <FaHistory className="text-3xl text-yellow-500 mr-2" />
              <span className="font-semibold">Origin and Naming</span>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg flex items-center">
              <FaCode className="text-3xl text-blue-500 mr-2" />
              <span className="font-semibold">Standardization</span>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg flex items-center">
              <FaLaptop className="text-3xl text-gray-500 mr-2" />
              <span className="font-semibold">Server-Side Development</span>
            </div>
            <div className="p-4 bg-white shadow-md rounded-lg flex items-center">
              <FaMobileAlt className="text-3xl text-green-500 mr-2" />
              <span className="font-semibold">Mobile App Development</span>
            </div>
          </div>
        </div>
      </section>

      <section id="development-environment" className="bg-gray-100 my-10 py-8">
        <div id="content" className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">
            Setting up your development environment
          </h2>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">
              <FaFileCode className="inline-block mr-2" />
              1. Text Editor or Integrated Development Environment (IDE)
            </h3>
            <p className="text-gray-700 mb-4">
              Popular options include Visual Studio Code, Sublime Text, Atom,
              and WebStorm. These tools provide features such as syntax
              highlighting, code completion, and integrated terminal for running
              commands.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">
              <FaNodeJs className="inline-block mr-2" />
              2. Node.js
            </h3>
            <p className="text-gray-700 mb-4">
              Install Node.js, which includes npm (Node Package Manager).
              Node.js allows you to run JavaScript on the server-side and
              provides access to a vast ecosystem of libraries and tools for web
              development.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">
              <FaChrome className="inline-block mr-2" />
              3. Web Browser
            </h3>
            <p className="text-gray-700 mb-4">
              Use a modern web browser such as Google Chrome, Mozilla Firefox,
              or Microsoft Edge for testing and debugging your JavaScript code.
              Most modern browsers come with built-in developer tools for
              inspecting and debugging web pages.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">
              <FaGitAlt className="inline-block mr-2" />
              4. Version Control System
            </h3>
            <p className="text-gray-700 mb-4">
              Consider using a version control system such as Git to track
              changes in your code and collaborate with others. Platforms like
              GitHub, GitLab, and Bitbucket provide hosting for Git repositories
              and offer additional collaboration features.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">
              <FaServer className="inline-block mr-2" />
              5. HTTP Server
            </h3>
            <p className="text-gray-700 mb-4">
              For local development, you may need an HTTP server to serve your
              web pages. You can use simple command-line tools like http-server
              or set up more advanced servers like Apache or Nginx.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">
              <FaTools className="inline-block mr-2" />
              6. Build Tools
            </h3>
            <p className="text-gray-700 mb-4">
              Depending on your project's complexity, you may need build tools
              such as Webpack, Gulp, or Grunt to automate tasks like bundling
              JavaScript files, optimizing assets, and managing dependencies.
            </p>
          </div>

          {showCode && (
            <div className="mb-4">
              <SyntaxHighlighter language="javascript" style={prism}>
                {`// Sample code for setting up development environment
// This is just an example
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});`}
              </SyntaxHighlighter>
            </div>
          )}

          <button
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600"
            onClick={toggleCode}
          >
            {showCode ? "Hide Code" : "Show Code"}
          </button>
        </div>
      </section>

      <section id="javascript-guide" className="bg-gray-100 my-10 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Guide to JavaScript</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <FaJs className="inline-block mr-2" /> Introduction to JavaScript
            </h3>
            <ul className="list-disc pl-6">
              <li>What is JavaScript?</li>
              <li>History and evolution of JavaScript</li>
              <li>Setting up your development environment</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <FaCode className="inline-block mr-2" /> Basic JavaScript Concepts
            </h3>
            <ul className="list-disc pl-6">
              <li>Variables and data types</li>
              <li>Operators</li>
              <li>Control structures (if...else, switch, loops)</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <FaCode className="inline-block mr-2" /> Functions
            </h3>
            <ul className="list-disc pl-6">
              <li>Function declaration and invocation</li>
              <li>Parameters and return values</li>
              <li>Arrow functions</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <FaCode className="inline-block mr-2" /> Arrays and Objects
            </h3>
            <ul className="list-disc pl-6">
              <li>Array manipulation methods</li>
              <li>Object creation and manipulation</li>
              <li>JSON (JavaScript Object Notation)</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <FaCode className="inline-block mr-2" /> DOM Manipulation
            </h3>
            <ul className="list-disc pl-6">
              <li>Accessing and modifying HTML elements</li>
              <li>Event handling</li>
              <li>Manipulating CSS styles</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <FaCode className="inline-block mr-2" /> Asynchronous JavaScript
            </h3>
            <ul className="list-disc pl-6">
              <li>Callbacks</li>
              <li>Promises</li>
              <li>Async/await</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <FaCode className="inline-block mr-2" /> Error Handling
            </h3>
            <ul className="list-disc pl-6">
              <li>Try...catch blocks</li>
              <li>Handling and throwing errors</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <FaCode className="inline-block mr-2" /> ES6 and Beyond
            </h3>
            <ul className="list-disc pl-6">
              <li>Arrow functions</li>
              <li>Template literals</li>
              <li>Destructuring</li>
              <li>Classes and inheritance</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <FaCode className="inline-block mr-2" /> Modules and Bundlers
            </h3>
            <ul className="list-disc pl-6">
              <li>ES6 modules</li>
              <li>CommonJS modules</li>
              <li>Introduction to Webpack</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <FaCode className="inline-block mr-2" /> Advanced JavaScript
              Concepts
            </h3>
            <ul className="list-disc pl-6">
              <li>Closures</li>
              <li>Prototypes and inheritance</li>
              <li>Functional programming concepts</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <FaCode className="inline-block mr-2" /> Client-Side Storage
            </h3>
            <ul className="list-disc pl-6">
              <li>LocalStorage and SessionStorage</li>
              <li>IndexedDB</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <FaCode className="inline-block mr-2" /> Performance Optimization
            </h3>
            <ul className="list-disc pl-6">
              <li>Best practices for writing efficient JavaScript code</li>
              <li>Code profiling and optimization techniques</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <FaCode className="inline-block mr-2" /> Debugging and Tools
            </h3>
            <ul className="list-disc pl-6">
              <li>Using browser developer tools</li>
              <li>Debugging JavaScript code</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <FaCode className="inline-block mr-2" /> Frameworks and Libraries
            </h3>
            <ul className="list-disc pl-6">
              <li>
                Introduction to popular JavaScript libraries and frameworks
                (e.g., React, Vue.js, Angular)
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <FaCode className="inline-block mr-2" /> Testing and Deployment
            </h3>
            <ul className="list-disc pl-6">
              <li>Unit testing with frameworks like Jest</li>
              <li>Deployment strategies for JavaScript applications</li>
            </ul>
          </div>

          <p className="text-lg">
            This list covers a wide range of topics, from the foundational
            concepts of JavaScript to more advanced and modern techniques. As
            you progress through these topics, you'll gain a solid understanding
            of JavaScript and its applications in web development.
          </p>
        </div>
      </section>


      <section id="primitive-data-types" className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4"><FaListUl className="inline-block mr-2" />Primitive Data Types</h2>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">1. Numbers</h3>
          <ul className="list-disc pl-6">
            <li>(a) Integers:</li>
            <li className="ml-8">Integers are whole numbers without any decimal point. They can be positive, negative, or zero. In many programming languages, integers have a specific size, such as 32 bits or 64 bits. Examples of integers include 5, -10, and 0.</li>
            <li>(b) Floats - Point Numbers:</li>
            <li className="ml-8">Floating-point numbers, also known as floats or real numbers, are numbers that contain a decimal point. They can represent both integer and fractional parts of a number. Examples of floating-point numbers include 3.14, -0.001, and 2.0.</li>
            <li>(c) Complex numbers:</li>
            <li className="ml-8">Complex numbers consist of a real part and an imaginary part. They are often used in scientific and engineering applications. An example of a complex number is 3 + 4i, where 3 is the real part and 4i is the imaginary part.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">2. Strings</h3>
          <ul className="list-disc pl-6">
            <li>JavaScript strings are used to represent text and are surrounded by either single or double quotes. They can contain letters, numbers, symbols, and even special characters.</li>
            <li>Strings can be created using string literals, like this: <code>let myString = 'Hello, World!';</code>. They can also be created using the String constructor, like this: <code>let myString = new String('Hello, World!');</code></li>
            <li>String Methods:</li>
            <li className="ml-8">String methods are built-in functions that can be used to manipulate strings in JavaScript. Some common string methods include <code>toUpperCase()</code>, <code>toLowerCase()</code>, <code>charAt()</code>, <code>indexOf()</code>, <code>slice()</code>, <code>substring()</code>, <code>split()</code>, <code>trim()</code>, etc.</li>
          </ul>
        </div>

        <SyntaxHighlighter language="javascript" style={prism}>
          {`// Example of using string methods
let myString = 'Hello, World!';
console.log(myString.toUpperCase()); // Output: HELLO, WORLD!
console.log(myString.charAt(0)); // Output: H
console.log(myString.indexOf('World')); // Output: 7
console.log(myString.slice(7)); // Output: World!
console.log(myString.split(', ')); // Output: ['Hello', 'World!']
console.log(myString.trim()); // Output: Hello, World! (no leading or trailing whitespace)`}
        </SyntaxHighlighter>

      </div>
    </section>
    </>
  );
};

export default Js;
