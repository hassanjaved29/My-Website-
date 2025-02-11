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
