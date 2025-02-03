function greet(name){
    return "Hello, "+name+"!";
}

console.log(greet("Bhaskar"));

function isPositive(number){
    return number >= 0;
}

//Arrow function
let greetName = (name) => "Hello, "+name+"!";
console.log(greetName("Ghosh"));

let isPositiveNumber = (number) => number >= 0;
console.log(isPositiveNumber(5));