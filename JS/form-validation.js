// Bootstrap form validation initialization
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

// This function is to validate the form fields on input after the DOM content has been loaded 
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.needs-validation');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Add input event listeners for real-time validation
    if (usernameInput) {
        usernameInput.addEventListener('input', validateUsername);
    }
    if (passwordInput) {
        passwordInput.addEventListener('input', validatePassword);
    }
    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('input', validateConfirmPassword);
    }

    // Add form submit handler
    if (form) {
        form.addEventListener('submit', function (event) {

            if (!validateForm()) {
                event.preventDefault();
                event.stopPropagation();
            }
            else {
                event.preventDefault();
                window.location.href = 'form-submitted.html';
            }

            form.classList.add('was-validated');
        });
    }
});

// Function to validate username
function validateUsername() {
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value.trim();
    const usernameValid = document.getElementById('usernameValid');
    const usernameInvalid = document.getElementById('usernameInvalid');

    // If statement for when the username is left blank
    if (username === '') {
        usernameInvalid.textContent = 'Please enter a username';
        usernameInput.classList.add('is-invalid');
        usernameInput.classList.remove('is-valid');
        return false;
    }

    // If statement for when the username is less than 5 characters
    if (username.length < 5) {
        usernameInvalid.textContent = 'The username must have at least 5 characters';
        usernameInput.classList.add('is-invalid');
        usernameInput.classList.remove('is-valid');
        return false;
    }

    // Runs this code when the username is valid
    usernameValid.textContent = 'Username is valid';
    usernameInput.classList.add('is-valid');
    usernameInput.classList.remove('is-invalid');
    return true;
}

// Function to validate password
function validatePassword() {
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value.trim();
    const passwordValid = document.getElementById('passwordValid');
    const passwordInvalid = document.getElementById('passwordInvalid');
    const regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{8,}$/;

    // empty
    if (password === '') {
        passwordInvalid.textContent = 'Please enter a password';
        passwordInput.classList.add('is-invalid');
        passwordInput.classList.remove('is-valid');
        return false;
    }

    // invalid format
    else if (!regularExpression.test(password)) {
        passwordInvalid.textContent = 'Password must have at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character';
        passwordInput.classList.add('is-invalid');
        passwordInput.classList.remove('is-valid');
        return false;
    }

    // valid
    else {
        passwordValid.textContent = 'Password is valid';
        passwordInput.classList.add('is-valid');
        passwordInput.classList.remove('is-invalid');
        return true;
    }
}

// Function to validate confirm password
function validateConfirmPassword() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const confirmPasswordValid = document.getElementById('confirmPasswordValid');
    const confirmPasswordInvalid = document.getElementById('confirmPasswordInvalid');

    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    // empty
    if (confirmPassword === '') {
        confirmPasswordInvalid.textContent = 'Please confirm your password';
        confirmPasswordInput.classList.add('is-invalid');
        confirmPasswordInput.classList.remove('is-valid');
        return false;
    }

    // mismatch
    if (password !== confirmPassword) {
        confirmPasswordInvalid.textContent = 'Passwords do not match';
        confirmPasswordInput.classList.add('is-invalid');
        confirmPasswordInput.classList.remove('is-valid');
        return false;
    }

    // valid
    confirmPasswordValid.textContent = 'Passwords match';
    confirmPasswordInput.classList.add('is-valid');
    confirmPasswordInput.classList.remove('is-invalid');
    return true;
}

// Main validation function

function validateForm() {
    // Validate all fields
    const isUsernameValid = validateUsername();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    // Return overall form validity
    return isUsernameValid && isPasswordValid && isConfirmPasswordValid;
}