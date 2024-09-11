let loginModalBtn = document.getElementById("login-modal");
let signupModal = document.getElementById("signup-modal");
let closeSignupModal = document.getElementById("close-signup-modal");
let signinModal = document.getElementById("signin-modal");
let closeSigninModal = document.getElementById("close-signin-modal");
let goToLoginLink = document.getElementById("go-to-login");
let goBackSignupLink = document.getElementById("go-back-signup");
let form_data = document.getElementById("signup-form");
let loginForm = document.getElementById("login-form");

// Open the signup modal when login button is clicked

loginModalBtn.addEventListener("click", () => {
    signupModal.style.display = "block";
});

// Close the signup modal

closeSignupModal.addEventListener("click", () => {
    signupModal.style.display = "none";
});

// Open the signin modal when "Already have an account? Sign in" is clicked

goToLoginLink.addEventListener("click", (e) => {
    e.preventDefault();
    signupModal.style.display = "none";
    signinModal.style.display = "block";
});

// Close the signin modal

closeSigninModal.addEventListener("click", () => {
    signinModal.style.display = "none";
});

// Switch back to signup modal when "Don't have an account? Sign up" is clicked

goBackSignupLink.addEventListener("click", (e) => {
    e.preventDefault();
    signinModal.style.display = "none";
    signupModal.style.display = "block";
});

// Save data in local storage and show signin modal

form_data.addEventListener("submit", (e) => {
    e.preventDefault();
    let userName = document.getElementById("name").value.trim();
    let userEmail = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (userName === "" || userEmail === "" || password === "") {
        alert("Please Fill The Form Completely !");
    } else {
        localStorage.setItem("Name", userName);
        localStorage.setItem("Email", userEmail);
        localStorage.setItem("Password", password);
        signupModal.style.display = "none";
        signinModal.style.display = "block";
        alert("Signup Successfully !");
    }
});

// login Form getting data from localStorage

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();
    let userEmail = document.getElementById("email-signin").value.trim();
    let password = document.getElementById("password-signin").value.trim();

    let localName = localStorage.getItem("Email");
    let localPassword = localStorage.getItem("Password");

    if (userEmail === localName && password === localPassword) {
        alert("Welcome To Home My Boy !");
        signinModal.style.display = "none";
    }
    else {
        alert("User Not Found");


    }
});



