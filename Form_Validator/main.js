const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');


function showError(input, message) {
    const fromControl = input.parentElement;
    fromControl.className = 'from-control error';
    fromControl.querySelector('small').innerHTML = message;
}

function showSeccess(input) {
    const fromControl = input.parentElement;
    fromControl.className = 'from-control success';
}

function isValidEmail(input) {
    const re = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/i;
    if (re.test(input.value)) {
        showSeccess(input);
    } else {
        showError(input, `email is invalid`);
    }
}

function checkRequied(inputs) {
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `${input.id.toUpperCase()} is requied`);
        } 
        else {
            showSeccess(input);
        }
    });
}

function checkLenght(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${input.id.toUpperCase()} must be at least ${min} characters`);
    }
    else if (input.value.length > max) {
        showError(input, `${input.id.toUpperCase()} must be at least ${max} characters`);
    }
    else {
        showSeccess(input);
    }
}

function checkPassword(password, confirmPassword) {
    if (password.value === confirmPassword.value) {
        showSeccess(confirmPassword);
    }
    else {
        showError(confirmPassword, 'Passwords do not match');
    }
}


form.addEventListener('submit', function(event) {
    event.preventDefault();

    checkRequied([username, email, password, confirmPassword])
    checkLenght(username, 5, 20);
    checkLenght(password, 6, 20);
    isValidEmail(email);
    checkPassword(password, confirmPassword);


    // if (username.value === '') {
    //     showError(username, 'Username is requied');
    // }
    // else {
    //     showSeccess(username);
    // }

    // if (email.value === '') {
    //     showError(email, 'Email is requied');
    // }
    // else if (!isValidEmail(email.value)) {
    //     showError(email, 'Email is not valid');
    // }
    // else {
    //     showSeccess(email);
    // }

    // if (password.value === '') {
    //     showError(password, 'Password is requied');
    // }
    // else {
    //     showSeccess(password);
    // }

    // if (confirmPassword.value === '') {
    //     showError(confirmPassword, 'Confirm Password is requied');
    // }
    // else {
    //     showSeccess(confirmPassword);
    // }




})