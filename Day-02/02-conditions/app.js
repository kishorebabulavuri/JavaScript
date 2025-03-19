let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}



let age = 16;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}


let marks = 75;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}


let num = 10;
if (num > 0) {
    console.log("Positive number");
    if (num % 2 === 0) {
        console.log("Even number");
    }
}


let age = 20;
let message = (age >= 18) ? "You can vote" : "You cannot vote";
console.log(message);


let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    case "Sunday":
        console.log("Relax! It's Sunday.");
        break;
    default:
        console.log("It's a regular day.");
}
