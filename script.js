document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const photoElement = document.getElementById('about-photo');

    // Set the photo URL dynamically
    photoElement.src = 'https://media.licdn.com/dms/image/v2/D5603AQHeAxoXPSe9Ag/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722064619083?e=1730332800&v=beta&t=cz8ACLK7ErdnmTmoshsbwTUOIsIo5Z8g3GqMe79LnQc'; // Replace with your actual photo path
});

// Example JavaScript for interactive project details (if needed)
document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const projectUrl = this.getAttribute('href');
            // Logic to open project details, such as showing a modal or redirecting
            window.location.href = projectUrl; // Example action
        });
    });
});


// JavaScript to add tooltips (if needed)
document.querySelectorAll('.profile-card').forEach((card) => {
    card.addEventListener('mouseenter', () => {
      // Show tooltip or add some dynamic effect
    });
    card.addEventListener('mouseleave', () => {
      // Hide tooltip or remove the dynamic effect
    });
  });
  

document.addEventListener("DOMContentLoaded", function () {
  const progressLines = document.querySelectorAll(".progress-line");

  progressLines.forEach((line) => {
    const skillPercentage = line.getAttribute("data-skill");
    line.style.setProperty("--skill-width", skillPercentage);
  });
});

  

  document.querySelectorAll('.timeline-content').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
  

  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
    } else {
      alert("Message sent successfully!");
      // Here, you could add AJAX code to send form data to the server without reloading the page.
    }
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  

