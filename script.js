const pass = document.getElementById('password')
let errorMsg = document.getElementById('error-msg');
const mainForm = document.getElementById('main-form');

mainForm.addEventListener('submit', (e)=>{
    e.preventDefault();
})
pass.addEventListener('input', validatePass(pass));

pass.addEventListener('invalid', ()=>{
    pass.setCustomValidity('Invalid password');
})
function validatePass(pass){
    let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,}$/; /* Regex that must contain at least:
    One lowercase, one uppercase, one numeric digit, one special character, and be at least 7 characters long */
    // if (pass.value.match(passRegex)){
    //     return console.log('valid')
    // }
    if(pass.value === '' || null){
        console.log('value needed')
    }
}

