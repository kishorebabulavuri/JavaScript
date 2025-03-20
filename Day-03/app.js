function values(a,b) {
    console.log('a value : '+ a + ' b value :'+ b)
}

values(9,3)

function values(a,b) {
    console.log(`a value is ${a}, b value is ${b}`)
}

values(9,3)


let addition = function (a,b) {
    return a+b;
}
console.log(`addition of two numbers are`, addition(2,3))

// Arrow Functions 

// Single Parameter & one return value

const phno1 = (num) => {
    return num;
}
console.log(phno1(9398088219))

const phno2 = num => num

console.log(phno2(9398088219))

// Multiple parameters

const addition1 = (a,b) => a+b;

console.log(addition(3,5));


const ram = () => {
    let k = 55;
    let m=6;

    return k+m;
}

console.log(ram())

// Function scope & Hoisting 

var m = 'user logged'
const kishore = () => {
    let k = 'user logout';
    if(m){
        console.log('kishore', m)
    }
}
kishore()

// console.log(k) : k is not defined (Because of local scope)



// Error bacause Mahesh() before initialization

// Mahesh(); 
var m = 'user logged'
const Mahesh = () => {
    let k = 'user logout';
    if(m){
        console.log(m);
    }
}

//it works well
Mahesh2 ()
function Mahesh2 () {
    let k = 'user logout';
    if(m){
        console.log('mahesh',m);
    }
}

