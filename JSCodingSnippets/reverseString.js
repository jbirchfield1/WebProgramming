function reverseString(input){
    let output = "";
    for(let i=input.length-1;i>=0;i--){
        output += input.charAt(i);
    }
    return output;
}

console.log(reverseString("auhsoJ"));
console.log(reverseString("etalubmocsid"))