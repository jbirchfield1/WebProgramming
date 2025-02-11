
function validateForm(form){
    let name = document.forms["form1"]["name"].value;
    let email = document.forms["form1"]["email"].value;
    let age = document.forms["form1"]["age"].value;
    if(name == "" ){
        document.getElementById("nameInput").style.backgroundColor = "red";
        return false;
    }
    if(email == ""){
        document.getElementById("emailInput").style.backgroundColor = "red";
        return false;
    }
    if(age<18 || age>100){
        document.getElementById("ageInput").style.backgroundColor = "red";
    }
}
function submitForm(form){
    let name = document.forms["form1"]["name"].value;
    let email = document.forms["form1"]["email"].value;
    let age = document.forms["form1"]["age"].value;
    
}