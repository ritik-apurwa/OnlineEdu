


//  *****************************    1 WHAT IS JAVASCRIPT ************************************* // 

/*
JavaScript is a high-level, interpreted programming language that is widely used for creating interactive and dynamic content on web pages. It is an essential technology for front-end web development and and now also for backend development too , it is supported by all modern web browsers.

JavaScript can be used to manipulate HTML and CSS, handle events, create animations, and much more. It is also commonly used in conjunction with libraries and frameworks such as React, Angular, and Vue.js to build complex web applications.

In JavaScript, variables are used to store data values. There are different types of variables, including numbers, strings, arrays, and objects. Functions are used to perform specific tasks, and they can be reused throughout the code.

JavaScript uses conditional statements (if...else) and loops (for, while) to control the flow of the program. It also supports error handling with try...catch blocks.

As you continue to learn about JavaScript, you'll discover its powerful capabilities for building interactive web applications. 

*/ 

//  *********************    - HISTORY AND EVOLUTION OF JAVASCRIPT  *************************** // 

/* 
JavaScript was created by Brendan Eich in 1995 while he was working at Netscape Communications Corporation. Originally named Mocha, it was later renamed to LiveScript and finally to JavaScript. The language was designed in a span of 10 days and was intended to be a lightweight scripting language for the Netscape Navigator web browser.

In 1996, JavaScript was submitted to the European Computer Manufacturers Association (ECMA) International to carve out a standard specification, resulting in ECMAScript, which is the standardized specification for JavaScript. This standardization helped ensure that different web browsers could support JavaScript in a consistent manner.

Over the years, JavaScript has evolved significantly, with the introduction of new features and improvements in subsequent versions. The language has grown beyond its original role as a client-side scripting language for web browsers and is now used for server-side development (Node.js), mobile app development, and even desktop application development.

JavaScript's evolution has been marked by the introduction of new language features, such as arrow functions, template literals, async/await for handling asynchronous operations, and the adoption of modern development practices. Today, JavaScript is a fundamental language for web development and is widely used in building complex web applications and interactive user interfaces. 

*/ 

//  ********************  - Setting up your development environment   *************************** // 

/* 

1. ** Text Editor or Integrated Development Environment (IDE)**:
   - Popular options include Visual Studio Code, Sublime Text, Atom, and WebStorm. These tools provide features such as syntax highlighting, code completion, and integrated terminal for running commands.

2. **Node.js**:
   - Install Node.js, which includes npm (Node Package Manager). Node.js allows you to run JavaScript on the server-side and provides access to a vast ecosystem of libraries and tools for web development.

3. **Web Browser**:
   - Use a modern web browser such as Google Chrome, Mozilla Firefox, or Microsoft Edge for testing and debugging your JavaScript code. Most modern browsers come with built-in developer tools for inspecting and debugging web pages.

4. **Version Control System**:
   - Consider using a version control system such as Git to track changes in your code and collaborate with others. Platforms like GitHub, GitLab, and Bitbucket provide hosting for Git repositories and offer additional collaboration features.

5. **HTTP Server**:
   - For local development, you may need an HTTP server to serve your web pages. You can use simple command-line tools like http-server or set up more advanced servers like Apache or Nginx.

6. **Build Tools**:
   - Depending on your project's complexity, you may need build tools such as Webpack, Gulp, or Grunt to automate tasks like bundling JavaScript files, optimizing assets, and managing dependencies.

By setting up these components, you'll have a solid foundation for writing, testing, and deploying JavaScript applications. Each component plays a crucial role in the development process and contributes to a productive and efficient coding environment.

*/ 

//  ********************  - Setting up your development environment   *************************** // 






/* 
      --- guide you  through while learning JavaScript from the basics to more advanced concepts  -- :

  1. **Introduction to JavaScript**
     - What is JavaScript?
     - History and evolution of JavaScript
     - Setting up your development environment

  2. **Basic JavaScript Concepts**
     - Variables and data types
     - Operators
     - Control structures (if...else, switch, loops)

  3. **Functions**
     - Function declaration and invocation
     - Parameters and return values
     - Arrow functions

  4. **Arrays and Objects**
     - Array manipulation methods
     - Object creation and manipulation
     - JSON (JavaScript Object Notation)

  5. **DOM Manipulation**
     - Accessing and modifying HTML elements
     - Event handling
     - Manipulating CSS styles

  6. **Asynchronous JavaScript**
     - Callbacks
     - Promises
     - Async/await

  7. **Error Handling**
     - Try...catch blocks
     - Handling and throwing errors

  8. **ES6 and Beyond**
     - Arrow functions
     - Template literals
     - Destructuring
     - Classes and inheritance

  9. **Modules and Bundlers**
     - ES6 modules
     - CommonJS modules
     - Introduction to Webpack

  10. **Advanced JavaScript Concepts**
      - Closures
      - Prototypes and inheritance
      - Functional programming concepts

  11. **Client-Side Storage**
      - LocalStorage and SessionStorage
      - IndexedDB

  12. **Performance Optimization**
      - Best practices for writing efficient JavaScript code
      - Code profiling and optimization techniques

  13. **Debugging and Tools**
      - Using browser developer tools
      - Debugging JavaScript code

  14. **Frameworks and Libraries**
      - Introduction to popular JavaScript libraries and frameworks (e.g., React, Vue.js, Angular)

  15. **Testing and Deployment**
      - Unit testing with frameworks like Jest
      - Deployment strategies for JavaScript applications

  This list covers a wide range of topics, from the foundational concepts of JavaScript to more advanced and modern techniques. As you progress through these topics, you'll gain a solid understanding of JavaScript and its applications in web development.

*/












































//todo: variables and DataTypes 

// data and values have data types. Data types describe the characteristics of the data. Data types can be divided into two parts: 

/*

! 1. Primitive data types

! 2. Non-primitive data types




! 1 Primitive Data Types 

* (i) Numbers  

todo: (a).Integers: Integers are whole numbers without any decimal point. They can be positive, negative, or zero. In many programming languages, integers have a specific size, such as 32 bits or 64 bits. Examples of integers include 5, -10, and 0.

todo: (b).Floats - Point Numbers: Floating-point numbers, also known as floats or real numbers, are numbers that contain a decimal point. They can represent both integer and fractional parts of a number. Examples of floating-point numbers include 3.14, -0.001, and 2.0.

todo: (c). Complex numbers - Complex numbers consist of a real part and an imaginary part. They are often used in scientific and engineering applications. An example of a complex number is 3 + 4i, where 3 is the real part and 4i is the imaginary part.

* (ii) Strings --- strings are not modifiable or in other words imutable primitive data types are comapred by their value above we compare diffrent data values of two variables but they are not equal because they are not same.

todo (a) JavaScript strings are used to represent text and are surrounded by either single or double quotes. They can contain letters, numbers, symbols, and even special characters.
todo (b) Strings can be created using string literals, like this: let myString = 'Hello, World!'; . They can also be created using the String constructor, like this: let myString = new String('Hello, World!');
todo (c) String Methods 













/*

 String methods 

 
1. == myString.length to check the length of the string 

2. == myString.toUpperCase() to convert the string into uppercase

3. == myString.toLowerCase() to convert the string into lowercase

4. == myString.slice(2,5) to slice the string. like there is ritik r on 0 index , i is on 1 index and t is on 2 index and another i on 3 index and k is on 4 index. so if we write slice(2, 5) it will return "tik " and index 2 , 3 , 4 it will take index two but not take index 5. 

5. == myStrign.charAt(4) this method is used for getting the character at a certain index.  Output will be "S"

6. == myString.indexOf("a") this method is used for getting the index of the character. Output will be "1"

7. == myString.lastindexOf("a") with this method we can get the last character of the string if there are two same characters in the string. Output will be "4"

8. == myString.replace("a", "A") with this method we can change a chaacter in the string only first character will be changed if there are two same characters in the string. Output will be "JPvaScript"

9. == myString.concat("is a good language") with this method we can add two strings together. Output will be "JavaScript is a good language" 

10. == myString.trim() with this method we can remove the extra spaces from the string. Output will be "JavaScript"

11. == console.log(javaScript.substring(2)); // this will return the substring from index 2 to the end of the string

12. == console.log(javaScript.endsWith("a"))// this will return true if the string ends with "a"

13. ==console.log(javaScript.startsWith("a"))// this will return true if the string starts with "a"

14. == console.log(javaScript.includes("a"))// this will return true if the string includes "a"

15. ==console.log(javaScript.repeat(2))// this will return the string 2 times

16. == console.log(javaScript.split("")) // tis will return the string as an array

17. == console.log(username.split("")) //  to split the string and return the array. array mean collection of values, and values are seperated by comma.

18. == console.log(username.anchor("")) // to add space between the string.)

19. ==console.log(username.blink()) // to blink the string and blink mean it blink the string according to the number of times you give.

20. == console.log(spacestring.fontcolor("red")) // to change the font color of the string.)

21. ==console.log(spacestring.trim()) // to trim the white spaces.

22. ==console.log(username.trimStart() // to trim the white spaces from start and

23. == console.log(username.trimEnd()) // to trim the white spaces from end.

24. ==console.log(username.padStart(4,"x")) // to pad and pad mean to add the character in the string.

25. ==console.log(number.padStart(4,"x")) // padStart(targetLength, padString ) if we give 6 argument to target length and will make our output string length 6 and and change all indexing with given padString but not change the value of string,in the padEnd(targetLenght, padString) if we give 6 argument to target length and it will make out string with the lengt of six and we giv padString 2 and it will change all ending string values with 1 from end

26 == console.log(number.padEnd(4,"x")) // padEnd(targetLength, padString ) first give targtlength mean your exepected length of the string and second give padString and it will add the padString at the end of the string. 

27. == console.log(MobNo.length) // to get the length of the string in number. Example -01 

28. ==  console.log(username.charCodeAt(username.length-1)) // to get the unicode of character here "0" has unicode of 48 

29. == console.log(myString.split()) output will be "JavaScript" 

30. == console.log(myString.split("")) output will be ["J","a","v","a","S", "c","r","i","p","t"] it will split every character in the string. 
31. == console.log(myString.split(" ")) output will be ["JavaScript"]  Example -02 

32. ==  console.log(username.split("").reverse().join("")) // to reverse the string all characters in this situation

33. == console.log(username.split("").sort().join("")) // to sort the string.

34. == // let quote = "Believe you can and you're halfway there."


*/

/*
String Escape Characters 
JavaScript allows the use of escape characters to include special characters in a string, such as \n for a new line, \t for a tab, \\ for a backslash, and \" for double quotes within a string.

*/


/* using a string template or string interpolation method, we can add expressions, which coulbe a value, or some operations (comparison, arithmetic operations, ternary operation)

*/ 


/*

* (iii) Bolleans 


a boolean data type represents one of the the two values: true or false.

todo #1 Truthy values 

a. all numbers (positive and negative) are truthy exept 0
b. all strings are truthy exept empty string
c. the boolean true 

todo #2 Falsy values
a. 0 
b. empty string 
c. NaN 
d. the boolean false
e. null 
f. undefined
g. 0n 

*/

/*
* (iv) Undefined -- undefined is a primitive datatype and also a global object that represents the intentional abssence of a value.

todo a. defalut value -- when a variable is declared but not initialized , it is automatically assigned the value udefined.

todo b. Return value -- fuctions in javascript that do not explicitly returen a value will return undefined.

todo c. Type -- undefined is a type of its own. 

todo d. comparison -- when comparing with == or ===, undefined is only equal to null.

todo e. use cases -- it is often used to check if a variable has been initialized or assigned a value. 

*/


/* 

* (v) Null  -- null is primitive data type in javascript that represents the intentional absence of any object value. 

todo a. type -- null is an object. typeOf null returns object.
todo b. use Cases -- it is often used to explicitly indicate that a variable is not assigned a value. 
todo c. comparision -- when comparing with == or ===, null it is only equal to iteself and undefined. 
todo d. debugging -- null can indicate that a variable has been explicitly set to ahve no value, which can be useful for debugging and understanding the state of your program. 

*/

/* 
  * (vi) Symbol -- symbol is a unique identifier in javascript. it has immutable value that is uded to identify an object. 


*/ 



// console.log(undefined > 0);
// console.log(undefined === 0);
// console.log("2" === 2);
// console.log("2" === 2);
// Primitive data types are compared by their values.
// 1. String, Number, Boolean, undefined, null, Symbol, BigInt




// ******** Reference data types are compared by their reference.********

// 1. Object, Array, Function, Date, RegExp, Map, Set

// const score = 1000
// const isLoggedIn = false
// const OutSideTemp = null
// let userEmail = "ztejd@example.com"
// const id = Symbol("123")
// const anotherid = Symbol("123")
// console.log(id === anotherid)
// const BigNumber = 32323232323222222n

//  console.log(typeof BigNumber)

// const heroes = [ "Shaktiman", "Batman", "Spiderman", "Ironman", "doga"  ]
// let myObj = {
//   name: "ritik" ,
//   password: 1234,
// };
//  console.log(typeof myObj)

// const myFunc = function(){
//   console.log(2+2)
// }

// console.log(typeof myFunc)
// Non Premietive data types are objects and functions data types are called functions objects

//  ************************ Memories **************************

// 1. Stack
//  Stack ( primitives ) , Heap ( non primitives )

// let myYoutubeName = "Ritik"
// let anotherYoutubeName = myYoutubeName
// anotherYoutubeName = "chaiaurcode"
// console.log(anotherYoutubeName)
// console.log(myYoutubeName)

// let user = {
//   name: "ritik" ,
//   age: 23,
//   email: "ritikapurwa@gmail.com",
//   bank: "ritik@sbi",
//   password: "ritik@123"
// }

// let usertwo = user
// usertwo.email = "ritikapurwa3500@gmail.com "
// console.log(user.email)
// console.log(usertwo.email)

//  primietive data types are copied by their value.
// non primitive data types are copied by their reference.
//  primitive data types are stored in stack and non primitive data types are stored in heap.

//  ************************* String *************************
// const name = "Ritik"
// const surname = "Apurwa"
// const fullName = name + " " + surname // old style
// console.log(fullName)
// console.log(`hello my name is ${name} and my surname is ${surname}. therefor my complete name is ${fullName} `) // new style with string interpolation.

// let username = String("ritikapurwa");
// let spacestring = String("   ritikapurwa   ");
// let surname = " apurwa ";

// console.log(username[0])

// console.log(username.__proto__) // __proto__ is a hidden property of object. and it is used to get the prototype of an object.

// console.log(username.length) // to find the length of string.

// console.log(username.toUpperCase()) // to change string to upper case.

// console.log(username.toLowerCase()) // to change string in lower case.

// console.log(username.indexOf("a")) // to find the index of a character.

// console.log(username.lastIndexOf("t")) // to check last index of a character.

// console.log(username.charAt("10")) to check the character at the index number of our choice.

// console.log(username.endsWith("a")) to check the string ends with a or not and result will come in boolean.

// console.log(username.includes("a")) // to check if the string containes the substring or not and result will come in boolean.

// console.log(username.repeat(10)) // repeat the string according to the number we give.

// console.log(username.split("")) //  to split the string and return the array. array mean collection of values, and values are seperated by comma.

// console.log(username.slice(0,3)) // to slice the string first give starting index and then ending index. note: ending index is not included and mean it will give index 1, index 2, and index 3 note: index counting  starts from 0. it accepts negative indexing.

// console.log(username.substring(3,6))  // give start number and end number and it will return the substring which is between the start and end number.

// console.log(username.substr(3,6)) // give start number and length and it will return the substring which is between the starting number  and length you give in this example you give (6) , diffrence between substr and substring , is that substr is not inclusive and inclusive mean

// console.log(spacestring.replace("a","b")) // to replace the character.

// console.log(username.replaceAll(("a","b")) // to replace all a characters with b  character.

// console.log(username.concat("",surname)) // to concatenate the string and here first commas represents the space between the two strings.

// console.log(username.anchor("")) // to add space between the string.)
// console.log(username.blink()) // to blink the string and blink mean it blink the string according to the number of times you give.

// console.log(spacestring.fontcolor("red")) // to change the font color of the string.)

// console.log(spacestring.trim()) // to trim the white spaces.

// console.log(username.trimStart() // to trim the white spaces from start and

// console.log(username.trimEnd()) // to trim the white spaces from end.

// console.log(username.padStart(4,"x")) // to pad and pad mean to add the character in the string.
// const str1 = '0000';

// console.log(str1.padStart(6, '1'));

//  padStart(targetLength, padString ) if we give 6 argument to target length and will make our output string length 6 and and change all indexing with given padString but not change the value of string,in the padEnd(targetLenght, padString) if we give 6 argument to target length and it will make out string with the lengt of six and we giv padString 2 and it will change all ending string values with 1 from end

// const fullNumber = '2681992';
// const last4Digits = fullNumber.slice(-2);
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
// console.log(maskedNumber)

// console.log(username.padStart(12,"x")) // to pad the string from end.

// console.log(username.charAt(username.length-2)) // to get the last character of string. if we give value -1 if we give value -2 it will give second last character of string.

// console.log(username.charCodeAt(username.length-1)) // to get the unicode of character.

// console.log(username.split("")) // to split the string.

// console.log(username.split("").reverse().join("")) // to reverse the string all characters in this situation

// console.log(username.split("").sort().join("")) // to sort the string.

// ************************* Numbers and Math *************************

// let score =  400
// let newscore = new Number(400);
// let precisescore = 113.1422;
// let precisescore2 = 10.14;
// const hundred = 1000000;
// console.log(typeof score)
// console.log(typeof newscore)
// console.log(newscore)
// console.log(score)

// console.log(newscore.toString().length) // to see the length of number.
// console.log(newscore.toFixed(5)) // to give the number in fixed decimal form.
// console.log(precisescore.toPrecision(5)) // to give the number in fixed decimal form. like we have 113.12 we give precission value 4 and get 113.1
// console.log(precisescore2.toPrecision(4)) // to give the number in fixed decimal form.

// console.log(hundred.toLocaleString("en-IN")) // to convert the number into indian currency format.
//  if we write Number. we get Max_value , Min_value epsilon and NaN , isIfinite and isInteger and Min_value etc.

//  ***************************** Math *****************************
// console.log(Math.PI) // to get the value of PI.

// conole.log(Math.abs)  it gives us the absolute value of number like if we give -10 it will give 10.

// console.log(Math.round(10.5)) // to round the number it means if we give 10.5 it will round to 11 and if we give 10.4 it will round to 10.

// console.log(Math.ceil(10.1)) // to round the number to the nearest higher integer.

// console.log(Math.floor(10.9)) // to round the number to the nearest lower integer. like if we have 10.9 it will round to 10.

// console.log(Math.trunc(10.9)) // to remove the decimal part of number if we give 10.9 it will remove the decimal part and give 10.

// console.log(Math.random() ) // to get the random number. and random number comes between 0 to 1.

// console.log(Math.random() * 10) to get the random number between 0 to 10. this is how we get values , if we want to get values between 0 to 100 we have to multiply with 100.
// console.log(Math.floor(Math.random() * 10)) // to get the random number betweenb 0 to 10 perfect values like 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
// console.log(Math.floor(Math.random() * 10 ))

// const min = 1000

// const max = 2000
// const MinMax = Math.floor(Math.random() * (max-min+1)) + min
// console.log(MinMax)

// ***************************** Date *****************************

// here Date is a constructor function, and we can create object of Date. Date function is important for creating date and time for hotel booking.
// let newDate = new Date()

// console.log(newDate.getDay()) // to get the day of the week.
// console.log(newDate.getFullYear()) // to get the year of the date.
// console.log(newDate.getMonth() + 1 ) // to get the month of the date.
// console.log(newDate.getDate()) // to get the date of the date.
// console.log(newDate.getHours()) // to get the hours of the date.
// console.log(newDate.getMinutes()) // to get the minutes of the date.
// console.log(newDate.getSeconds()) // to get the seconds of the date.
// console.log(newDate.getMilliseconds()) // to get the milliseconds of the date.
// console.log(newDate.setDate(1)) // to set the date of the date.
// console.log(newDate.setFullYear(2023)) // to set the year of the date.
// console.log(newDate.setMonth(0)) // to set the month of the date.
// console.log(newDate.setHours(10)) // to set the hours of the date.
// console.log(newDate.setMinutes(10)) // to set the minutes of the date.
// console.log(newDate.setSeconds(10)) // to set the seconds of the date.
// console.log(newDate.setMilliseconds(10)) // to set the milliseconds of the date.

// Create a new date object representing the current date and time
// const currentDate = new Date();
// const options = { timeZone: 'Asia/Kolkata' };
// const IndianTime = currentDate.toLocaleString('en-US', options);

//  Get the year, month, day, hours, minutes, seconds, and milliseconds
// const year = currentDate.getFullYear();
// const month = currentDate.getMonth(); // Note: Months are zero-indexed (0-11)
// const day = currentDate.getDate();
// const hours = currentDate.getHours();
// const minutes = currentDate.getMinutes();
// const seconds = currentDate.getSeconds();
// const milliseconds = currentDate.getMilliseconds();

//  Output the date and time components
// console.log(`Year: ${year}`);
// console.log(`Month: ${month + 1}`); // Adding 1 to the month to display it in the usual 1-12 format
// console.log(`Day: ${day}`);
// console.log(`Hours: ${hours}`);
// console.log(`Minutes: ${minutes}`);
// console.log(`Seconds: ${seconds}`);
// console.log(`Milliseconds: ${milliseconds}`);
// console.log('Current date and time in Indian Standard Time (IST):',IndianTime);

// let newDate = new Date()

// newDate.toLocaleString(
//   "default",
//   {
//     weekday:"long"

//   }
// )

// *************************** Array **********************************

// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.

// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create.
// shallow copies share the same underlying memory, so any changes made to one are reflected in the other.

// deep copies properties do not copy the same refrence

// let myArr =  [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "ritik" , "rahul" , "raj", "nagaur" , "jodhpur" , ];
// let heroes = [ 1, 2, 3, 4, 5, 6 ];
// let myArr2 = new Array ( 1, 2, 3, 4,);

// console.log(myArr[0]);
// console.log(myArr2[3]);
// console.log(heroes[2]);

// Array Methods

// heroes.push(3); // this element is used for adding the element in the last of array.

// heroes.pop() // this method is used for removing the last element of array.

// heroes.unshift(3); // this method is used for adding the element in the first of array.

// heroes.shift(); // this method is used for removing the first element of array.

// let myArr = [1,2, 3, 4, 5, ]
// let myArr2 = [6, 7, 8, 9, 10]
// let newArr = myArr.join()
// // console.log(newArr)
// // console.log(typeof newArr)
// console.log("A" , myArr)
// let myn1 = myArr.slice (1,3)
// let myn2 = myArr.splice(1,3)

// console.log(myn1)
// console.log(typeof myn1)

// ********************************* 09-12-2023 *******************************************

// let marvel_heroes = [ "thor" , "ironman" , "spiderman" , "hulk" , "captain america" , "blackwomen" ]
// let dc_heroes = [ "batman" , "superman" , "flash" , "wonder women"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

// if we use this method then it will convert our dc_heroes into a single string and if we want to get dc_heroes single element then we have to use this method console.log(marvel_heroes[6][1]) it will give us output as superman.

// console.log(marvel_heroes[6][1])

//  let all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes)
// let  all_new_heroes = [...marvel_heroes , ...dc_heroes]
// console.log(all_new_heroes)
// let another_array = [1,2,3,[4,5,6 , [7,8,9] , 10] ]
// let real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

// let Arrayss = "Ritik";

// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1,score2,score3))

// ********************** Object **********************

// singleton object
// object litreals
// constructor function object.create

// singleton object  >>>> it is a object which is created only once and it is shared by all the other objects.

// Symbol
// let mySym = Symbol("key-1")

// let jsUser = {
//   name: "Ritik",
//   age: 18 ,
//   email:"ritik@google.com",
//   location: "India",
//   score: 100,
//   isLoggedIn: false,
//   [mySym]: "myKey-1", // this is how a symbol is created.

// };

//  console.log(jsUser.email)
//  console.log(jsUser["email"])// this method called as bracket notation.
// jsUser.email = "ritikapurwa2@gmail.com" // to change value of email from ritik@gmail.com to ritikapurwa2@gmail.com.
//  console.log(jsUser.email)
//  Object.freeze(jsUser)
// jsUser.email = "ritikapurwa3@gmail.com" // after freeze we can not change the values of our object.
//  console.log(jsUser)

// jsUser.greeting = function(){
//   console.log( `Hello Jsuser ,${this.name} welcome to our community` )
// }
// console.log(jsUser.greeting())

// let tinderUser = new Object();

// tinderUser.id = "123abc";
// tinderUser.Name = "Ritik";
// tinderUser.isLoggedIn = false;
// tinderUser.points = 100;
// tinderUser.email = "ritik@gmail.com";
// tinderUser.phone = "9876543210";
// tinderUser.isVerified = true;

// let regularUser = {
//   email: "someEmail",
//   fullName: {
//     name: "Ritik",
//     Surname: {
//       firstSurname: "Kumar",
//       LastSurname: "Apurwa",
//     },
//   },
//   email: "ritik3500@gmail.com",
//   isPremium: true,
// };
// console.log(regularUser.fullName.Surname.firstSurname);

// let Obj1 = {
//   1: "a",
//   2: "b",
//   3: "c",
// };
// let Obj2 = {
//   4: "d",
//   5: "e",
//   6: "f",
// };
// let FullObj = { ...Obj1, ...Obj2 }; // to get all the key and value of obj1 and obj2 in one object , this is a spread operator.
// let FullObj2 = Object.assign(Obj1,Obj2); // with this method we can get all the key and value of obj1 and obj2 in Obj1.

// let FullObj3 = Object.assign({} ,Obj1, Obj2) // with this method we get all the key and value of obj1 and obj2 in new obj where first we give a target object and then all the obj are source obj it is right for sytaxically right.

// console.log(FullObj)
// console.log(FullObj2)
// console.log(FullObj3)

// console.log(Object.keys(tinderUser)); // to get all the key of object.
// console.log(Object.values(tinderUser)) // to get all the value of object.
// console.log(Object.entries(tinderUser)) // to get all the key and value of an  object.
// console.log(tinderUser.hasOwnProperty("isLoggedIn")) // to check the key is present in object or not.

// ****************************** last chapter Objects ***************

// let course = {
//   coursename: " js in hindi",
//   price: 1000,
//   courseInstructor: "Ritik",
// };
// if want values of course then we don't have to run course.coursename , course.price , course.courseInstructor , we can directly do this method and in console.log(course.coursename) it will give us output as js in hindi and console.log(course.price) it will give us output as 1000 and console.log(course.courseInstructor)

// let {price, coursename,courseInstructor} = course

// console.log(price)
// if you want to change the name of variable then we can do with this method

// let {courseInstructor : ins , price: p , } = course
// console.log(ins) // output will be ritik as per our object

//  let json1=  {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "Jennie",
//         "last": "Nichols"
//       },
//       "location": {
//         "street": {
//           "number": 8929,
//           "name": "Valwood Pkwy",
//         },
//         "city": "Billings",
//         "state": "Michigan",
//         "country": "United States",
//         "postcode": "63104",
//         "coordinates": {
//           "latitude": "-69.8246",
//           "longitude": "134.8719"
//         },
//         "timezone": {
//           "offset": "+9:30",
//           "description": "Adelaide, Darwin"
//         }
//       },
//       "email": "jennie.nichols@example.com",
//       "login": {
//         "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//         "username": "yellowpeacock117",
//         "password": "addison",
//         "salt": "sld1yGtd",
//         "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//         "sha1": "",
//         "sha256": "48df5229235aedcf2ce613cbdea349133c52dc2f3b83168dc51bda28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//       },
//       "dob": {
//         "date": "1992-03-08T15:13:16.688Z",
//         "age": 30
//       },
//       "registered": {
//         "date": "2007-07-09T05:51:59.390Z",
//         "age": 14
//       },
//       "phone": "(272) 790-0888",
//       "cell": "(489) 330-2385",
//       "id": {
//         "name": "SSN",
//         "value": "405-88-3636"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/75.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//       },
//       "nat": "US"
//     }
//   ],
//   "info": {
//     "seed": "56d27f4a53bd5441",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// };

// ******************************************** Function ********************************************

//  function addtwonumber(number1, number2 ) //these are parameters

//  {
//    console.log(number1, number2)
//  }

// addtwonumber // this is our functions's refernce name when we add  "()" it will call the function."

// function loginUserMessage(username = "sam") {
//   if(!username)
//     console.log("please enter the username")
//   return
//   `${username} just logged in`

// }

// console.log(loginUserMessage("Hitesh"));

// function calculateCartPrice(...num1){
//   return num1
// }
// console.log(calculateCartPrice(200,400,500,600))

// let username = {
//   username: "Hitesh",

//   price: 199,
// }
// function handleObject(anyObject){
//   console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
// }

// console.log(handleObject)

// let a = 11;

// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
//   console.log(a);
// }
// if we write code in a block then it will not work in global scope and our constans and varibles will not work outside our block.
// to create a block we use curly braces and write code in it.

// console.log(a) // this is
// console.log(b)
// console.log(c)
// block scope is