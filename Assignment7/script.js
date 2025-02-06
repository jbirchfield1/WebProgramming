function submitForm(form){
    document.getElementById("results").innerHTML = form.elements["name"].value + "&nbsp" + form.elements["email"].value + "&nbsp" + form.elements["pword"].value + "&nbsp" + form.elements["age"].value + "&nbsp" + form.elements["gender"].value + "&nbsp" + form.elements["country"].value + "&nbsp" + form.elements["TandC"].value;
    form.reset();
}