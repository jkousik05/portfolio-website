
// MOBILE MENU
const header = document.querySelector("header");
const navLinks = document.querySelector(
    "header .nav-links"
);
// Create menu button
const menuButton = document.createElement("button");
menuButton.innerHTML =
    '<i class="fa-solid fa-bars"></i>';
menuButton.classList.add("menu-button");
header.appendChild(menuButton);
// Open / close menu
menuButton.addEventListener("click", function(){
    navLinks.classList.toggle("active");
});
// Close menu after clicking a link
navLinks.querySelectorAll("a").forEach(function(link){
    link.addEventListener("click", function(){
        navLinks.classList.remove("active");
    });
});
// CONTACT
const submitButton =
    document.querySelector(".input-box .btn");
const emailInput =
    document.querySelector(".input-box input");
submitButton.addEventListener("click", function(){
    const email = emailInput.value.trim();
    if(email === ""){
        alert("Please enter your email.");
        return;
    }
    if(!email.includes("@")){
        alert("Please enter a valid email address.");
        return;
    }
    alert(
        "Thank you! Your email has been submitted."
    );
    emailInput.value = "";
});