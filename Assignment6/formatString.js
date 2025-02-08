function formatNames(names){
    let output = "";
    for(let i = 0; i < names.length;i++){
            //names[i] = names[i].charAt(0).toUpperCase() + names[i].slice(1);        //makes first letter uppercase
            output += names[i].charAt(0).toUpperCase() + names[i].slice(1);      //adds name to output
        if(i<names.length-1)
            output += ", "          //puts comma after name if it isn't the end
    }
    return output;
}


console.log(formatNames(["alice", "bob", "charlie"]));