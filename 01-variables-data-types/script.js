//////=====================1:CONSOLE============

// Log string
// console.log('Hello World');

// // Log multiple values
// console.log(2, 'Hello', true);

// // Log a variable
// const x = 100;
// console.log(x);

// // Log number
// console.log(100);

// // Log string
// console.log('Hello World');

// // Log multiple values
// console.log(20, 'Hello', true);

// // Log a variable
// const o =100;
// console.log(o);

// // Console error & warning
// console.error('Alert');
// console.warn('Warning');

// // Log object as table
// console.table({ name: 'Brad', email: 'brad@gmail.com' });

// // Group console commands
// console.group('simple');
// console.log(x);
// console.error('Alert');
// console.warn('Warning');
// console.groupEnd();

// // Add CSS to logs
// const styles = 'padding: 10px; background-color: white; color: green';
// console.log('%cHello World', styles);

//////=====================3:VARIEBLE============


// Ways to declare a variable
// `var`, `let`, & `const`

// let firstName = 'John';
// const lastName = 'Doe';
// let age = 30;

// console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// We can re-assign `let` variables. If you change `age` to use `const`, you will get an error
// age = 31;
// console.log(age);

// // With let, we can declare a value without assigning a value
// let score;
// score = 1;
// console.log(score);

// if (true) {
//   score = score + 1;
// }

// console.log(score);

// const oo= 100;

// We can not re-assign a const variable
// x = 200 // Will result in an error

// We can still manipulate arrays and objects using const
// const arr = [1, 2, 3, 4];
// arr.push(5);
// console.log(arr);

// const person = {
//   name: 'Brad',
// };
// person.name = 'John';
// person.email = 'brad@gmail.com';
// console.log(person);

// // Declare multiple values at once
// let a, b, c;

// const d = 10,
//   e = 20,
//   f = 30;

// console.log(d);
// console.log(a);


//////=====================4:DATATYPES============

// // String
// const ff= 'Sara';

// // Number
// const aa = 30;
// const temp = 98.9;

// // Boolean
// const hasKids = true;

// // Null
// const aptNumber = null;

// // Undefined
// // let score;
// const s = undefined;

// // Symbol
// const id = Symbol('id');

// // BigInt
// const n = 9007199254740991n;

// // Reference Types

// const numbers = [1, 2, 3, 4];



// function sayHello() {
//   console.log('Hello');
// }

// const output = sayHello;

// console.log(output, typeof output);

// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3



//////=====================5:STACK-TYPES============
// Value is stored in the stack
// const name = 'John';
// const age = 30;

// // Reference is stored in the heap
// const person = {
//   name: 'Brad',
//   age: 40,
// };

// let newName = name;
// newName = 'Jonathan';

// let newPerson = person;
// newPerson.name = 'Bradley';

// console.log(name, newName); // John, Jonathan
// console.log(person, newPerson); // { name: 'Bradley', age: 40 }, { name: 'Bradley', age: 40 }



//////=====================6:TYPE-CONVERSION============
// let amount = 'hello';

// // Convert string to number
// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

// // Convert number to string
// amount = amount.toString();
// amount = String(amount);

// // Convert string to decimal
// amount = parseFloat(amount);

// // Convert number to boolean
// amount = Boolean(amount);

// // Ways to get NaN
// console.log(Math.sqrt(-1));
// console.log(1 + NaN);
// console.log(undefined + undefined);
// console.log('foo' / 3);

// console.log(amount, typeof amount);


//////=====================7:OPERATORS============

// // 1. Arithmetic Operators

// let x7;

// x7 = 5 + 5;
// x7 = 5 - 5;
// x7 = 5 * 5;
// x7 = 5 / 5;
// x7 = 7 % 5;

// // Concatenation
// x7 = 'Hello' + ' ' + 'World';

// // Exponent
// x7 = 2 ** 3;

// // Increment
// x7 = 1;
// // x = x + 1;
// x7++;

// // Decrement
// // x = x - 1;
// x7--;

// // 2. Assignment Operators

// x7 = 10;

// x7 += 5;
// x7 -= 5;
// x7 *= 5;
// x7 /= 5;
// x7 %= 5;
// x7 **= 5;

// // 3. Comparison Operators

// // Equal to (Just the value, not the type)
// x7 = 2 == '2';

// // Equal to (Type and value)
// x7 = 2 === '2';

// // Not equal to (Just the value, not the type)
// x7 = 2 != '2';

// // Not equal to (Type and value)
// x7 = 2 !== 2;

// // Greater than and less than
// x7 = 10 > 5;
// x7 = 10 < 5;
// x7 = 10 <= 5;
// x7 = 10 >= 5;

// console.log(x7);

//////=====================8:TYPE-COERCION============
// let x;

// // Coerced to a string
// x = 5 + '5';

// x = 5 + Number('5');

// // Coerced to a number
// x = 5 * '5';

// // null is coerced to 0 as it is a `falsy` value
// x = 5 + null;

// x = Number(null);

// x = Number(true);
// x = Number(false);

// // true is coerced to a 1
// x = 5 + true;

// // false is coerced to 0 (falsy)
// x = 5 + false;

// // Undefined is coerced to 0 (falsy)
// x = 5 + undefined;

// console.log(x, typeof x);



//////=====================9:STRING============
// let x;

// const name = 'John';
// const age = 31;

// // Concatenation
// x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// // Template Literals
// x = `Hello, my name is ${name} and I am ${age} years old`;

// // String Properties and Methods

// // Creating a "string object" (JS does this automatically when using a propery or method on a primitive string)
// const s = new String('Hello World');

// x = typeof s;

// x = s.length;

// // Access value by key
// x = s[0];

// // Shows the prototype of the string object. Shows the properties and methods
// x = s.__proto__;

// // Change case
// x = s.toUpperCase();
// x = s.toLowerCase();

// // charAt() - returns the character at the specified index
// x = s.charAt(0);

// // indexOf - returns the index of the first occurrence of a specified value in a string
// x = s.indexOf('d');

// // substring() - search a string for a specified value
// x = s.substring(2, 5);
// x = s.substring(7);

// // slice() - extracts a part of a string and returns a new string
// x = s.slice(-11, -6);

// // trim() - remove whitespace from beginning and end of string
// x = '         Hello World';
// x = x.trim();

// // replace() - replace all instances of a string
// x = s.replace('World', 'John');

// // includes() - returns true if the string is found
// x = s.includes('Hell');

// // valueOf() - returns the primitive value of a variable
// x = s.valueOf();

// // split() - returns an array of strings
// x = s.split('');

// console.log(x);

//////=====================10-capitalize-challenge============
// // Create a new string called "myNewString" that holds the value of "Developer", using the lowercase value from "myString"
// const myString = 'developer';

// let myNewString;

// // Solution 1:
// myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// // Solution 2:
// myNewString = myString[0].toUpperCase() + myString.substring(1);
// // Solution 3:
// myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

// console.log(myNewString);


//////=====================11-numbers============
// let x;

// const num = new Number(5);

// // toString() - returns a string representation of the number
// x = num.toString();
// // To get the length
// x = num.toString().length;

// // toFixed() - returns a string representation of the number with a specified number of decimals
// x = num.toFixed(2);

// // toPrecision() - returns a number with the specified length
// x = num.toPrecision(3);

// // toExponential() -  convert a number to exponential notation and return its value as a string
// x = num.toExponential(2);

// // toLocaleString() - returns a string representation of the number, using the current locale
// x = num.toLocaleString('en-US');

// // valueOf - Get value
// x = num.valueOf();

// // The Number object itself has some properties and methods

// // Largest and smallest possible number
// x = Number.MAX_VALUE;
// x = Number.MIN_VALUE;

// console.log(x);



//////=====================12-math-object============
// let x;

// // Square root
// x = Math.sqrt(9);

// // Absolute value
// x = Math.abs(-5);

// // Round
// x = Math.round(4.2);

// // Round up
// x = Math.ceil(4.2);

// // Round down
// x = Math.floor(4.9);

// // Exponent
// x = Math.pow(2, 3);

// // Minimum number
// x = Math.min(4, 5, 3);

// // Maximum number
// x = Math.max(4, 5, 3);

// // Get a random number/decimal between 0 and 1
// x = Math.random();

// // Get a random number between 1 and 100
// x = Math.floor(Math.random() * 100 + 1);

// console.log(x);



