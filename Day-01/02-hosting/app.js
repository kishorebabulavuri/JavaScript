// console.log(name); // undefined
// var name = 'Apex';

var name;
name = 'Apex';
console.log(name);


/* --------------------- Let ---------------------   */
 
// sample 1

// {
//     console.log(lastName); // ReferenceError: lastName is not defined
//     let lastName = 'Apex Lavuri';
// }

// sample 1 correct way 
// {
//     let lastName = 'Apex Lavuri';
//     console.log(lastName);
// }

// sample 2

// {
//     let lastName = 'Apex Lavuri';
// }
// console.log(lastName);

// sample 2 correct way 
// {
//         let lastName = 'Apex Lavuri';
//         console.log(lastName);
// }


/* -------------------- const ------------------ */


/*
console.log(value); // ReferenceError: Cannot access 'value' before initialization
const value = 10;


if (true) {
    console.log(message); // ReferenceError: Cannot access 'message' before initialization
    const message = 'Hello, World!';
}


function example() {
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    const x = 5;
}
example();  

*/

// correct format

const value = 10;
console.log(value); 


if (true) {
    const message = 'Hello, World!';
    console.log(message); // ReferenceError: Cannot access 'message' before initialization
}


function example() {
    const x = 5;
    console.log(x);
}
example();


/* ------------------------- Function Hoisting -------------------- */


// Function Declaration Hoisting

greet(); // Output: "Hello, World!"

function greet() {
    console.log("Hello, World!");
}

//  Function Expression Hoisting

hello(); // TypeError: hello is not a function

var hello = function() {
    console.log("Hello, World!");
};


// Function Expression with const

hello(); // ReferenceError: Cannot access 'hello' before initialization

const hello = function() {
    console.log("Hello, World!");
};




