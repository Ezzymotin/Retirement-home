// script.js

// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! We have received your message.`);
        document.getElementById('contactForm').reset(); // Clear the form
    } else {
        alert('Please fill out all fields before submitting.');
    }
});

// Event listener for navigation buttons
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); 
        }
    });
});

// Event listener for amenities list hover
document.querySelectorAll('.amenity-item').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#f0f8ff'; // Highlight on hover
    });

    item.addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; // Remove highlight
    });
});

// Event listener for call-to-action button click
document.getElementById('ctaButton').addEventListener('click', function() {
    alert('Thank you for showing interest! Our team will contact you soon.');
});
