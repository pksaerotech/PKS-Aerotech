/* ==========================================
   PKS Aerotech Website
   Version 2.0
========================================== */

console.log("🚀 PKS Aerotech Website Loaded Successfully");

/* ===========================
   Sticky Navbar
=========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(8,24,47,0.92)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.35)";
        navbar.style.padding = "15px 8%";

    } else {

        navbar.style.background = "rgba(8,24,47,0.45)";
        navbar.style.boxShadow = "none";
        navbar.style.padding = "18px 8%";

    }

});

/* ===========================
   Active Navigation
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ===========================
   Smooth Fade Animation
=========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".placeholder-section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

/* ===========================
   Hero Button Hover Effect
=========================== */

const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});

/* ===========================
   Hero Title Glow Effect
=========================== */

const heroTitle = document.querySelector(".hero-content h1 span");

setInterval(() => {

    heroTitle.style.textShadow = "0 0 35px rgba(0,168,255,0.9)";

    setTimeout(() => {

        heroTitle.style.textShadow = "0 0 18px rgba(0,168,255,0.45)";

    }, 800);

}, 2000);

/* ===========================
   Scroll Indicator Click
=========================== */

const scrollIndicator = document.querySelector(".scroll-indicator");

if (scrollIndicator) {

    scrollIndicator.addEventListener("click", () => {

        document.querySelector("#about").scrollIntoView({

            behavior: "smooth"

        });

    });

}

/* ===========================
   JavaScript Animation Classes
=========================== */

.hidden{

    opacity:0;
    transform:translateY(50px);
    transition:all 1s ease;

}

.show{

    opacity:1;
    transform:translateY(0);

}

.nav-links a.active{

    color:var(--primary);

}

.nav-links a.active::after{

    width:100%;

}