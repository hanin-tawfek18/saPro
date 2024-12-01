
const form = document.getElementById('form1');
const FirstName =  document.getElementById('FirstName');
const LastName =  document.getElementById('LastName');
const email =  document.getElementById('email');
const phone =  document.getElementById('Phone');
const pass =  document.getElementById('pass');
const confirmPass =  document.getElementById('confirmPass');

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});

const setError = (Element, message) => {
    const inputField = Element.parentElement;
    const errorDisplay = inputField.querySelector('.error');

    errorDisplay.innerText = message;
    inputField.classList.add('error');
    inputField.classList.remove('success');
}

const setSuccess = element => {
    const inputField = element.parentElement; 
    const errorDisplay = inputField.querySelector('.error'); 

    errorDisplay.innerText = '';
    inputField.classList.add('success');
    inputField.classList.remove('error');
};

const validateInputs = () => {
    const FirstNameValue =  FirstName.value.trim();
    const LastNameValue =  LastName.value.trim();
    const emailValue =  email.value.trim();
    const phoneValue =  Phone.value.trim();
    const passValue =  pass.value.trim();
    const confirmPassValue =  confirmPass.value.trim();

    if(FirstNameValue === '' || FirstNameValue === 'First Name'){
        setError(FirstName, 'please fill up your First Name');
    }else{
        setSuccess(FirstName);
    }

    if(LastNameValue === '' || LastNameValue === 'last Name'){
        setError(LastName, 'please fill up your Last Name');
    }else{
        setSuccess(LastName);
    }

    if(emailValue === '' || emailValue === 'Email'){
        setError(email, 'please fill up your Email');
    }else{
        setSuccess(email);
    }

    if(phoneValue === '' || phoneValue === 'Phone Number'){
        setError(phone, 'please fill up your Phone Number');
    }else{
        setSuccess(phone);
    }

    if(passValue === '' || passValue === 'Password'){
        setError(pass, 'please fill up your Password');
    }else if(passValue < 8){
        setError(pass, 'Password must be at least 8 character');
    }else{
        setSuccess(pass);
    }

    if(confirmPassValue === '' || confirmPassValue === 'Confirm Password'){
        setError(confirmPass, 'please confirm your password');
    }else if(confirmPassValue != passValue){
        setError(confirmPass, 'Password does not match');
    }
    else{
        setSuccess(confirmPass);
    }

    if (
        FirstNameValue !== '' &&
        LastNameValue !== '' &&
        emailValue !== '' &&
        phoneValue !== '' &&
        passValue !== '' &&
        confirmPassValue !== ''&&
        passValue === confirmPassValue
    ) {
        window.location.href = window.location.href;
    }



};


// function checkPassword(){
//     let pass = document.getElementById("pass").value;
//     let confirmPass = document.getElementById("confirmPass").value;
//     console.log(pass,confirmPass);
//     let message = document.getElementById("message");
    
//     if(pass.length != 0){
//         if(pass == confirmPass){
//             message.textContent = "Passwords match";
//             message.style.color = "#3ae374";
//             message.style.textAlign = "center";
//         }
//         else{
//             message.textContent = "Passwords don't match";
//             message.style.color = "#f00202";
//             message.style.textAlign = "center";
//         }
//     }
//     else{
//         message.textContent = "please fill up your Password";
//         message.style.color = "#f00202";
//         message.style.textAlign = "center";
//     }
// }