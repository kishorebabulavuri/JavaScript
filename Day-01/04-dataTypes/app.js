/* -------------- Numbers ---------------- */

// Integer
let age = 25;
console.log(age); // 25

// Floating-point number
let price = 19.99;
console.log(price); // 19.99

// Arithmetic operations
let sum = 10 + 5;
let product = 4 * 3;
console.log(sum); // 15
console.log(product); // 12

/* --------------- Strings -------------------- */

// Single quotes
let greeting = 'Hello, World!';
console.log(greeting); // Hello, World!

// Double quotes
let message = "Welcome to JavaScript!";
console.log(message); // Welcome to JavaScript!

// Template literals
let name = 'Alice';
let welcomeMessage = `Hello, ${name}!`;
console.log(welcomeMessage); // Hello, Alice!

// String concatenation
let fullName = 'John' + ' ' + 'Doe';
console.log(fullName); // John Doe


/* ------------------- Boolean -------------------*/

// Boolean values
let isOnline = true;
let hasAccess = false;

console.log(isOnline); // true
console.log(hasAccess); // false

// Boolean in conditional statements
if (isOnline) {
    console.log('User is online.');
} else {
    console.log('User is offline.');
}


/* --------------. Undefined ------------------*/

// Variable declared but not initialized
let result;
console.log(result); // undefined

// Function with no return value
function noReturn() {}
console.log(noReturn()); // undefined


/* ---------------- Null --------------- */

// Explicitly setting a variable to null
let user = null;
console.log(user); // null

// Using null to indicate the absence of value
function findUser(userId) {
    return null; // No user found
}
console.log(findUser(123)); // null


/* ------------------ Symbol -------------------- */

// Creating symbols
const uniqueId = Symbol('id');
const anotherId = Symbol('id');

console.log(uniqueId); // Symbol(id)
console.log(anotherId); // Symbol(id)

// Symbols are unique
console.log(uniqueId === anotherId); // false

// Using symbols as object keys
let obj = {};
obj[uniqueId] = 'value';
console.log(obj[uniqueId]); // value

/* ------------ BigInt -------------------- */

// Creating BigInt values
const bigNumber = 1234567890123456789012345678901234567890n;
const anotherBigNumber = BigInt("1234567890123456789012345678901234567890");

console.log(bigNumber); // 1234567890123456789012345678901234567890n
console.log(anotherBigNumber); // 1234567890123456789012345678901234567890n

// Operations with BigInt
const result1 = bigNumber + 1n;
console.log(result1); // 1234567890123456789012345678901234567891n

/* Non-Primitive Type */

let person = {
    name: "Alice",
    age: 30,
    isStudent: false
};

console.log(person)