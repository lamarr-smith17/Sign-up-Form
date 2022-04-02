const pass = document.getElementById('password')
const confirmPass = document.getElementById('confirm-password')
const mainForm = document.getElementById('main-form');
const addClass = mainForm.querySelector('#password');
const addClass2 = mainForm.querySelector('.password2-div');
const errorMsg = document.getElementById('error-msg');
const errorMsg2 = document.getElementById('error-msg2');

mainForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    validatePass(pass);
    validatePass2(confirmPass);
})



function validatePass(input){
    /* Regex that must contain at least:
    One lowercase, one uppercase, one numeric digit, one special character, and be at least 7 characters long */
    let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,}$/; 
    if(input.value === ' ' || input.value === null){
        errorMsg.innerText = 'Cannot have a empty password';
        addClass.classList.add('error');
    } else if (!input.value.match(passRegex)){
        errorMsg.innerText = 'Does not meet the password requirements';
        addClass.classList.add('error');
        input.setCustomValidity('Password must contain at least one lowercase, one uppercase, one numeric digit, one special character, and be at least 7 characters long');
    } else {
        addClass.classList.remove('error');
        addClass.classList.add('success');
    }
};

function validatePass2(input){
    if (input.value === ' ' || input.value === null){
        errorMsg2.innerText = 'Cannot have a empty password';
    } else if (pass !== input.value){
        errorMsg2.innerText = 'Passwords must match';
    } else {
        addClass2.classList.add('success');
    }
}



