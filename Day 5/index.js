console.log("Hello World");
console.log("The answer is "+42);
//alert("Message!");              //Single line comment
/* Multi-line comment */

let level = 23;
let accuracy = 0.99;
let name = "Pikachu";
let temp = [55, 60, 57, 5]      //Array

let isValid = "hello!";

const BEST_CLASS = "CS3163";
//BEST_CLASS = "CS3213";          //error

let credit = 5 + 4 + (2*3);


// Strings

let names = "Bhaskar Ghosh";
let fName = names.substring(0,names.indexOf(" "));
let len = fName.length;
console.log(fName);
console.log(len);

/* Loops and Conditions... */

function mystery(a, b){
    if(a > b){
        return;
    } else {
        let result = 0;
        for (let i=0;i<b;i++){
            result+=i;
        }
        return result;
    }
}

console.log(mystery(4,6));

while(condition){
    console.log("While loop");
}

do{
    statements;
}while(condition);

/* Arrays */

let aname = ["Earth", "Water", "Fire"];
let array = [];
aname[0] = "Hello";
aname[2] = " My";

array.push("Bhaskar");
array.unshift("Tyler");
array.pop(); //Delete last element
array.sort();
