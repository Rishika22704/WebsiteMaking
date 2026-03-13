
// ********** GSAP ANIMATION *********
gsap.from(".slice, .scoop", {
    x: 0,
    duration: 1,
    opacity: 0,
    stagger: 1,
})

gsap.from(".scoop_text", {
    x: 10,
    duration: 1,
    opacity: 0,
    delay: 2.5,
    stagger: 1,
})

gsap.from(".slice_text", {
    x: -10,
    duration: 1,
    opacity: 0,
    delay: 3,
    stagger: 1,
})

gsap.from(".food", {
    x: 10,
    duration: 1,
    opacity: 0,
    delay: 1,
    stagger: 0.6,
})

gsap.from(".tag", {
    x: 10,
    duration: 1,
    opacity: 0,
    delay: 0.8,
    stagger: 0.7,
})

gsap.from(".img_bg", {
    duration: 1,
    opacity: 0,
    delay: 0.8,
    stagger: 0.5,
})

// ************ FORM  ANIMATION SCRIPT ************
let formBoxes = document.querySelector(".form_boxes");
let loginLink = document.querySelector(".login_link");
let signupLink = document.querySelector(".signup_link");
let signUp = document.querySelector(".signup_page");

let activeView = "signup_page";


loginLink.addEventListener("click", () => {
    if (activeView === "login_page") return;

    formBoxes.style.transform = "translateX(-100%)";
    formBoxes.style.transition = "transform 1s ease";
    activeView = "login_page";
});

signupLink.addEventListener("click", () => {
    if (activeView === "signup_page") return;

    formBoxes.style.transform = "translateX(0%)";
    formBoxes.style.transition = "transform 1s ease";
    activeView = "signup_page";
});


// ********** FORM VALIDATION SCRIPTS *********
let signUpForm = document.getElementById("signup_form");
let loginForm = document.getElementById("login_form");
let left_part = document.querySelector(".left_part");
let form = document.querySelector(".form");

let signupBtn = document.querySelector(".signup_btn");
let loginBtn = document.querySelector(".login_btn");



// ***********  SIGNUP FORM VALIDATION ************
signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let signUpEmail = signUpForm.querySelector("#signup_email");
    let signUpPassword = signUpForm.querySelector("#signup_password");

    if (/@/.test(signUpEmail.value) && signUpPassword.value.length < 15) {

        localStorage.setItem("userEmail", signUpEmail.value);
        localStorage.setItem("userPassword", signUpPassword.value);

        console.log(signUpEmail.value, signUpPassword.value);

        console.log("acc created");
        left_part.innerText = "Your accout is created succesfully..";
        left_part.style.color = "#210f04";
        left_part.style.fontSize = "1.8rem";
        left_part.style.fontWeight = "600";

        let img = document.createElement("img");
        img.src = "boy.png";
        img.style.width = "35%";

        left_part.prepend(img);
        signUpForm.reset();

        signUpPassword.type = "password";

    } else {
        console.log("invalid details");
    }

})


loginForm.addEventListener("submit", (event) => {
    event.preventDefault()

    let loginEmail = loginForm.querySelector("#login_email");
    let loginPassword = loginForm.querySelector("#login_password");
    // console.log(emailInput.value , pswInput.value);

    let confirmedEmail = loginEmail.value.trim();
    let confirmedPassword = loginPassword.value;

    let email = localStorage.getItem("userEmail");
    let password = localStorage.getItem("userPassword");
    // console.log(email, password);

    if (confirmedEmail === email && confirmedPassword === password) {
        console.log("matched");
        left_part.innerText = "Hey! Welcome back...";
        left_part.style.color = "#210f04";
        left_part.style.fontSize = "1.8rem";
        left_part.style.fontWeight = "600";

        let img = document.createElement("img");
        img.src = "welcome-girl.png";
        img.style.width = "35%";

        left_part.prepend(img);
        loginForm.reset();

        loginPassword.type = "password";

    } else {
        // console.log("Invalid email or pasword");
        left_part.innerText = "Invalid email or pasword";
        left_part.style.color = "#210f04";
        left_part.style.fontSize = "1.8rem";
        left_part.style.fontWeight = "600";

    }
})

let passwordIcons = document.querySelectorAll(".password_icon");
let passwordInputs = document.querySelectorAll(".password");

passwordIcons.forEach(icon =>{
    icon.addEventListener("click", () =>{
        passwordInputs.forEach(inp =>{
            if(inp.type === "password"){
                inp.type = "text";

                
            } else {
                inp.type = "password";
            }
        });
    });
});