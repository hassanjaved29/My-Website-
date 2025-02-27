document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
});

function openSkill(evt, skillName) {
    // Hide all tab content
    let tabContent = document.querySelectorAll(".tabcontent");
    tabContent.forEach(tab => tab.style.display = "none");

    // Remove active class from all tabs
    let tabLinks = document.querySelectorAll(".tablink");
    tabLinks.forEach(tab => tab.classList.remove("active"));

    // Show the selected tab content
    document.getElementById(skillName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Set the default tab to display
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".tabcontent").style.display = "block";
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const servicesSection = document.getElementById("services");

    function fadeInOnScroll() {
        if (!servicesSection) return;
        const sectionPosition = servicesSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            servicesSection.classList.add("fade-in-visible");
        }
    }

    window.addEventListener("scroll", fadeInOnScroll);

    document.querySelector('a[href="#services"]').addEventListener("click", function (e) {
        e.preventDefault();
        if (!servicesSection) return;

        servicesSection.classList.remove("fade-in-visible");
        void servicesSection.offsetWidth; // Forces reflow to restart animation
        servicesSection.classList.add("fade-in-visible");

        servicesSection.scrollIntoView({ behavior: "smooth" });
    });

    fadeInOnScroll(); // Run on page load in case it's already in view
});


document.querySelector("a[href='#services']").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#services").scrollIntoView({ behavior: "smooth" });
});
