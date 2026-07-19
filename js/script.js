// ==========================================
// PORTFOLIO JAVASCRIPT
// ==========================================

// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Close menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});


// ===============================
// TYPING ANIMATION
// ===============================

const words = [
    "Computer Science Student",
    "Java Developer",
    "Web Developer",
    "Problem Solver",
    "Full Stack Learner",
    "AI Enthusiast"
];

const typingElement = document.querySelector(".typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


// ===============================
// STICKY NAVBAR
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(2,6,23,0.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    } else {

        header.style.background = "rgba(15,23,42,.9)";
        header.style.boxShadow = "none";

    }

});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(
    ".project-card, .skill-card, .profile-card, .about-container, .contact-container"
);

function reveal() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


// ===============================
// BACK TO TOP BUTTON
// ===============================

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ===============================
// CONTACT FORM
// ===============================

emailjs.init({
    publicKey: "iddsBIKkiq-qCyvek"
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_knllp9a",
        "template_pf9pkqf",
        this
    )

    .then(function(){

        alert("Message sent successfully!");
        form.reset();

    })

    .catch(function(error){

        console.log(error);
        alert("Failed to send message.");

    });

});


// ===============================
// CURRENT YEAR
// ===============================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Mohammed Mezan Khan. All Rights Reserved.`;

}


// ===============================
// PAGE LOADER EFFECT
// ===============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";

document.body.style.transition = "opacity .6s ease";