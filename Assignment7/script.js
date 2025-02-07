function submitForm(form){
    document.getElementById("results").innerHTML = "Name: " + form.elements["name"].value 
    + "<br>Email: " + form.elements["email"].value + 
    "<br>Password: " + form.elements["pword"].value + 
    "<br>Age: " + form.elements["age"].value + 
    "<br>Gender: " + form.elements["gender"].value + 
    "<br>Country: " + form.elements["country"].value + 
    "<br>Terms And Conditions Agreement: " + form.elements["TandC"].value;
    form.reset();
}