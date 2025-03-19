for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}

let i = 1;
while (i <= 5) {
    console.log("Iteration:", i);
    i++;  // Increment to avoid infinite loop
}


let i = 1;
do {
    console.log("Iteration:", i);
    i++;
} while (i <= 5);
