// JavaScript for Interactive Landing Page

// Wait for the DOM (HTML structure) to be fully loaded before running script
document.addEventListener('DOMContentLoaded', function () {

    // --- 1. Fixed Navigation Bar Scroll Effect ---

    // Select the <header> element by its ID
    const navbar = document.getElementById('navbar');

    // Function to handle the scroll event
    function handleScroll() {
        // Check if the page has been scrolled more than 50 pixels vertically
        if (window.scrollY > 50) {
            // Add the 'scrolled' class to change the background style
            navbar.classList.add('scrolled');
        } else {
            // Remove the 'scrolled' class if the user scrolls back to top
            navbar.classList.remove('scrolled');
        }
    }

    // Attach the scroll event listener to the window object
    window.addEventListener('scroll', handleScroll);


    // --- 2. Mobile Menu Toggle ---

    // Select the menu toggle button and the navigation links list
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Function to toggle the mobile menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function () {
            // Toggle the 'active' class on the nav-links list
            // This triggers the CSS transition to slide the menu in/out
            navLinks.classList.toggle('active');

            // Optional: Toggle an 'open' class on the button for animation (hamburger to X)
            mobileMenuBtn.classList.toggle('open');
        });
    }

    // --- 3. Close Mobile Menu on Link Click ---

    // Select all individual links inside the nav menu
    const menuItems = document.querySelectorAll('.nav-links a');

    // Loop through each link and add a click event
    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Remove 'active' class to close menu when a link is clicked
            // This provides a better user experience on mobile
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('open');
            }
        });
    });

});
