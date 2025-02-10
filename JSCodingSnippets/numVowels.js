function numVowels(word){
    let vowelCount = 0;
    for(let i=0;i<word.length;i++){
        if(word.charAt(i) == 'a' || word.charAt(i) == 'e' || word.charAt(i) == 'i' || word.charAt(i) == 'o' || word.charAt(i) == 'u'){
            vowelCount++;
        }
    }
    return vowelCount;
}

console.log("The number of vowels in discombobulate is: " + numVowels("discombobulate"));
console.log("The number of vowels gluttonous is: " + numVowels("gluttonous"));