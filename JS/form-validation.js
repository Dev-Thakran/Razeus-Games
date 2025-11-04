// Disable form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


function validateForm() {

    var validFeedback = document.querySelectorAll(".valid-feedback");
    var invalidFeedback = document.querySelectorAll(".invalid-feedback");
    for (var x = 0; x < validFeedback.length; x++) {
        validFeedback[x].innerHTML = "";
    }
    for (var y = 0; y < invalidFeedback.length; y++) {
        invalidFeedback[y].innerHTML = "";
    }

    

    // The validation for username
    let username = document.getElementById("username").value;
    console.log(username.length);
    if (username.length < 5) {
        document.getElementById("usernameInvalid").innerHTML = "The username must have more than 5 characters";
        return false;
    }
    else if (username == "") {
        document.getElementById("usernameInvalid").textContent = "Please enter a username";
        return false;
    }
    else {
        document.getElementById("usernameValid").textContent = "The username is valid";
    }



    // The validation for age
    let age = document.getElementById("age").value;
    if (age < 0 || age > 100) {
        document.getElementById("ageInvalid").textContent = "Please enter a valid age between 0 and 100";
        return false;
    }
    else {
        document.getElementById("ageValid").textContent = "The age is valid";
    }



    // Validation for password
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    var regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (regularExpression.test(password) == false) {
        document.getElementById("passwordInvalid").textContent = "Password must have atleast one special character, number and should contain lowercase and uppercase letters";
        return false;
    }
    else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordInvalid").textContent = "Passwords do not match.";
        return false;
    }
    return true;
}