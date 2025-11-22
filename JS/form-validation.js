// This function is to validate the form fields on input after the DOM content has been loaded 
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.needs-validation');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailInput = document.getElementById('email');
    const ageInput = document.getElementById('age');
    const phoneInput = document.getElementById('phone');
    const agree = document.getElementById('agree');
    const dateOfBirth = document.getElementById('dateOfBirth');

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
    if (ageInput) {
        ageInput.addEventListener('input', validateAge);
    }
    if (emailInput) {
        emailInput.addEventListener('input', validateEmail);
    }
    if (phoneInput) {
        phoneInput.addEventListener('input', validatePhone);
    }
    if (agree) {
        agree.addEventListener('input', validateAgree);
    }
    if (dateOfBirth) {
        dateOfBirth.addEventListener('input', validateDateOfBirth);
    }

    // Add form submit handler
    if (form) {
        form.addEventListener('submit', function (event) {

            if (!validateForm()) {
                event.stopPropagation();
                event.preventDefault();
            }
            else {
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

    usernameValid.textContent = '';
    usernameInvalid.textContent = '';

    // If statement for when the username is left blank
    if (username === '') {
        usernameInvalid.textContent = 'Please enter a username';
        usernameInput.classList.add('is-invalid');
        usernameInput.classList.remove('is-valid');
        return false;
    }

    // If statement for when the username is less than 5 characters
    else if (username.length < 5) {
        usernameInvalid.textContent = 'The username must have at least 5 characters';
        usernameInput.classList.add('is-invalid');
        usernameInput.classList.remove('is-valid');
        return false;
    }

    // Runs this code when the username is valid
    else {
        usernameValid.textContent = 'Username is valid';
        usernameInput.classList.add('is-valid');
        usernameInput.classList.remove('is-invalid');
        return true;
    }
}

// Function to validate password
function validatePassword() {
    const passwordInput = document.getElementById('password');
    const password = passwordInput.value.trim();
    const passwordValid = document.getElementById('passwordValid');
    const passwordInvalid = document.getElementById('passwordInvalid');
    const regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&-=+_])[A-Za-z\d@$#!%*?&-=+_]{8,}$/;

    passwordValid.textContent = '';
    passwordInvalid.textContent = '';

    // empty
    if (password === '') {
        passwordInvalid.textContent = 'Please enter a password';
        passwordInput.classList.add('is-invalid');
        passwordInput.classList.remove('is-valid');
        return false;
    }// invalid format
    else if (!regularExpression.test(password)) {
        passwordInvalid.textContent = 'Password must have at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character';
        passwordInput.classList.add('is-invalid');
        passwordInput.classList.remove('is-valid');
        return false;
    }// valid
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

    confirmPasswordValid.textContent = '';
    confirmPasswordInvalid.textContent = '';

    // empty
    if (confirmPassword === '') {
        confirmPasswordInvalid.textContent = 'Please confirm your password';
        confirmPasswordInput.classList.add('is-invalid');
        confirmPasswordInput.classList.remove('is-valid');
        return false;
    }// mismatch
    if (password !== confirmPassword) {
        confirmPasswordInvalid.textContent = 'Passwords do not match';
        confirmPasswordInput.classList.add('is-invalid');
        confirmPasswordInput.classList.remove('is-valid');
        return false;
    }// valid
    confirmPasswordValid.textContent = 'Passwords match';
    confirmPasswordInput.classList.add('is-valid');
    confirmPasswordInput.classList.remove('is-invalid');
    return true;
}

function validateEmail() {
    const email = document.getElementById('email');
    const emailValue = email.value.trim();
    const emailInvalid = document.getElementById('emailInvalid');
    const emailValid = document.getElementById('emailValid');
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    emailValid.textContent = '';
    emailInvalid.textContent = '';

    if (emailValue === '') {
        emailInvalid.textContent = 'Please enter an email address';
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        return false;
    }
    else if (!regex.test(emailValue)) {
        emailInvalid.textContent = 'Please enter a valid email address';
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        return false;
    }
    else {
        emailValid.textContent = 'Email is valid';
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
        return true;
    }
}


function validateAge() {
    const age = document.getElementById('age');
    const ageValue = age.value.trim();
    const ageInvalid = document.getElementById('ageInvalid');
    const ageValid = document.getElementById('ageValid');

    ageValid.textContent = '';
    ageInvalid.textContent = '';

    if (ageValue === '') {
        ageInvalid.textContent = 'Please enter an age';
        age.classList.add('is-invalid');
        age.classList.remove('is-valid');
        return false;
    }
    else if (ageValue > 100 || ageValue <= 0) {
        ageInvalid.textContent = 'Please enter an age between 1 and 100';
        age.classList.add('is-invalid');
        age.classList.remove('is-valid');
        return false;
    }
    else {
        ageValid.textContent = 'Age is valid';
        age.classList.add('is-valid');
        age.classList.remove('is-invalid');
        return true;
    }
}

function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const phone = phoneInput.value.trim();
    const phoneValid = document.getElementById('phoneValid');
    const phoneInvalid = document.getElementById('phoneInvalid');
    const phoneRegex = /^(\+64|0)[1-9]\d{7,9}$/;

    phoneValid.textContent = '';
    phoneInvalid.textContent = '';

    // Empty input
    if (phone === '') {
        phoneInvalid.textContent = 'Please enter your phone number';
        phoneInput.classList.add('is-invalid');
        phoneInput.classList.remove('is-valid');
        return false;
    }// Invalid format
    if (!phoneRegex.test(phone)) {
        phoneInvalid.textContent = 'Please enter a valid NZ phone number (e.g. 0212345678 or +64212345678)';
        phoneInput.classList.add('is-invalid');
        phoneInput.classList.remove('is-valid');
        return false;
    }// Valid
    phoneValid.textContent = 'Phone number is valid';
    phoneInput.classList.add('is-valid');
    phoneInput.classList.remove('is-invalid');
    return true;
}


function validateAgree() {
    const agree = document.getElementById('agree');
    const agreeInvalid = document.getElementById('agreeInvalid');
    const agreeValid = document.getElementById('agreeValid');

    agreeValid.textContent = '';
    agreeInvalid.textContent = '';

    if (!agree.checked) {
        agreeInvalid.textContent = 'You must agree to the terms and conditions';
        agree.classList.add('is-invalid');
        agree.classList.remove('is-valid');
        return false;
    }
    else {
        agreeValid.textContent = 'Thank you for agreeing to the terms';
        agree.classList.add('is-valid');
        agree.classList.remove('is-invalid');
        return true;
    }
}

function validateDateOfBirth() {
    const dateOfBirth = document.getElementById('dateOfBirth');
    const dateOfBirthValue = dateOfBirth.value.trim();
    const dateOfBirthInvalid = document.getElementById('dateOfBirthInvalid');
    const dateOfBirthValid = document.getElementById('dateOfBirthValid');
    const ageInput = document.getElementById('age');
    const ageValue = Number(ageInput.value.trim());

    // Reset messages
    dateOfBirthInvalid.textContent = '';
    dateOfBirthValid.textContent = '';

    let birthDate, calculatedAge, monthDiff, dayDiff;

    if (dateOfBirthValue === '') {
        dateOfBirthInvalid.textContent = 'Please enter your date of birth';
        dateOfBirth.classList.add('is-invalid');
        dateOfBirth.classList.remove('is-valid');
        return false;
    } 
    else {
        birthDate = new Date(dateOfBirthValue);
        const today = new Date();

        if (birthDate > today) {
            dateOfBirthInvalid.textContent = "Your date of birth can't be in the future";
            dateOfBirth.classList.add('is-invalid');
            dateOfBirth.classList.remove('is-valid');
            return false;
        } 
        else {
            // Calculate age
            calculatedAge = today.getFullYear() - birthDate.getFullYear();
            monthDiff = today.getMonth() - birthDate.getMonth();
            dayDiff = today.getDate() - birthDate.getDate();
            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                calculatedAge--;
            }

            if (!ageValue || calculatedAge !== ageValue) {
                dateOfBirthInvalid.textContent = "Your date of birth does not match your age";
                dateOfBirth.classList.add('is-invalid');
                dateOfBirth.classList.remove('is-valid');
                return false;
            } 
            else {
                dateOfBirthValid.textContent = 'Date of birth matches your age';
                dateOfBirth.classList.add('is-valid');
                dateOfBirth.classList.remove('is-invalid');

                // Also mark age field as valid
                const ageValid = document.getElementById('ageValid');
                const ageInvalid = document.getElementById('ageInvalid');
                ageValid.textContent = 'Age is valid';
                ageInput.classList.add('is-valid');
                ageInput.classList.remove('is-invalid');
                ageInvalid.textContent = '';

                return true;
            }
        }
    }
}




// Main validation function

function validateForm() {
    // Validate all fields
    const isUsernameValid = validateUsername();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const isAgeValid = validateAge();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isAgreeValid = validateAgree();
    const isDateOfBirthValid = validateDateOfBirth();

    // Return overall form validity
    return isUsernameValid && isPasswordValid && isConfirmPasswordValid && isAgeValid && isEmailValid && isPhoneValid && isAgreeValid && isDateOfBirthValid;
}