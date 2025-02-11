
function validateForm(form){
    let name = document.forms["form1"]["name"].value;
    let email = document.forms["form1"]["email"].value;
    let age = document.forms["form1"]["age"].value;
    let emailTest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let valid = true;
    if(name == "" ){
        document.getElementById("nameInput").style.backgroundColor = "red";
        console.error("null name input");
        valid = false;
    }
    if(email == ""){
        document.getElementById("emailInput").style.backgroundColor = "red";
        console.error("null email input");
        valid = false;
    }else if(!emailTest.test(email)){
        document.getElementById("emailInput").style.backgroundColor = "red";
        console.error("invalid email input");
        valid = false;
    }
    if(age < 18 || age > 100){
        document.getElementById("ageInput").style.backgroundColor = "red";
        console.error("age outside of acceptable range");
        valid = false;
    }
    return valid;
}
function submitForm(form){
    if(validateForm(form)){
        document.getElementById("results").innerHTML = "Form Submitted Sucessfully!";
        form.reset();
        document.getElementById("nameInput").style.backgroundColor = "";
        document.getElementById("emailInput").style.backgroundColor = "";
        document.getElementById("ageInput").style.backgroundColor = "";
    }else{
        document.getElementById("results").innerHTML = "";
    }
}