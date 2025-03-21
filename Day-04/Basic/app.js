// create arrays

const subjects = ['javascript','react','sql','m','k','l'];
console.log(subjects)

let courses = Array(1,2,3,4,5,6);
console.log(courses)

// get elements from an Array

let firstElement = subjects[0];
console.log(firstElement);

let lastElement = courses[courses.length-1];
console.log(lastElement);

for (let i=0;i<subjects.length;i++) {
    console.log(subjects[i]);
    
}

for (let i=0;i<2;i++) {
    let k = prompt('enter a subject');
    subjects.push(k);
    
}

console.log(subjects);

for (let i=0;i<3;i++) {
    let k = prompt('enter a subject');
    subjects.unshift(k);
    
}


for (let i=0;i<5;i++) {
    subjects.pop()  
}
console.log(subjects);


for (let i=0;i<5;i++) {
    subjects.shift()  
}
console.log(subjects);


console.log(subjects.indexOf('javascrip'));
console.log(subjects.indexOf('javascript',3)); //(search starts from index 3)

console.log(subjects.includes('l',3));
console.log(subjects.includes('javascript',3));



console.log(subjects.at(3));
console.log(subjects.at(3,5)); //❌
console.log(subjects.at(3), subjects.at(5));  // ✔️






