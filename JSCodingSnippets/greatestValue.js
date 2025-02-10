function greatestValue(numbers){
    let gValue = 0;
    for(let i=0; i<numbers.length;i++){
        if(gValue<numbers[i])
            gValue = numbers[i]
    }
    return gValue;
}

console.log(greatestValue([3,7,4,78,19,5]))