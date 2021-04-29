const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const validation = document.querySelector(".validation");


function validateForm(event) {
    event.preventDefault();


    if (checkLength(fullName.value, 0) === true) {
        fullNameError.style.display = "none";
        fullName.className = "valid";
    }
    else {
        fullNameError.style.display = "block";
        fullName.className = "";
    }
     if (checkLength(subject.value, 10) === true) {
         subjectError.style.display = "none";
         subject.className = "valid";
     }
     else {
         subjectError.style.display = "block";
         subject.className = "";
     }
     if (checkLength(address.value, 25) === true) {
         addressError.style.display = "none";
         address.className = "valid";
     }
     else {
         addressError.style.display = "block";
         address.className = "";
     }
     if (validateEmail(email.value)=== true) {
         emailError.style.display = "none";
         email.className = "valid";
     }
     else {
         emailError.style.display = "block";
         email.className = "";
    }
    if (fullName.className === "valid" && subject.className === "valid" && address.className === "valid" &&  email.className === "valid") {
        validation.style.display = "block";
    }
    else {
        validation.style.display = "none";
        }
}



form.addEventListener("submit", validateForm);

function checkLength(value, char) {
    if (value.trim().length > char) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}


function formSuccsess() {
    if (fullName.className === "valid")
    {
        validation.style.display = "block"
        
    }
    else {
        validation.style.display = "block"
    }
}