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

// Open the sign in modal when Already have an account Sign in is clicked

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

// Shopping cart function

let cart = [];

function addToCart(productName, price) {
    const existingProductIndex = cart.findIndex(item => item.name === productName && item.price === price);
    
    if (existingProductIndex !== -1) {
        alert(`${productName} is already in the cart.`);
        return; 
    }

    const product = { name: productName, price: price };
    cart.push(product);
    displayCart();
}


function displayCart() {
    const items = document.getElementById("list-items");
    items.innerHTML = ""; 
    if (cart.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.textContent = "Your cart is empty.";
        emptyMessage.style.color = "green";
        items.appendChild(emptyMessage);
    } else {
        cart.forEach((item, index) => {
            const listItem = document.createElement("li");
            listItem.className = "cart-item-2";
            listItem.textContent = `${item.name} - $${item.price}`;

            // Create the remove button
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.className = "remove-button";
            removeButton.onclick = () => removeFromCart(index);

            listItem.appendChild(removeButton);
            items.appendChild(listItem); 
        });
    }
}

function removeFromCart(index) {
    cart.splice(index, 1); 
    displayCart(); 
}

document.querySelectorAll(".add-cart-button").forEach(button => {
    button.addEventListener("click", function() {

        const card = button.closest('.card-body');
        
        const productName = card.querySelector('.card-title').textContent;
        const priceText = card.querySelector('.price').textContent;
        const price = parseFloat(priceText.replace('$', '').trim());

        addToCart(productName, price);

    });
});



