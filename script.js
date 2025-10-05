// script.js

// Show welcome message only on the home page
window.onload = function() {
  // Check if the current page is index.html
  if (window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/")) {
    alert("Welcome to Noor Fatima's Portfolio!");
  }
};

// Function to show thank you message on contact form submit
function showMessage(event) {
  event.preventDefault(); // Stop form from reloading the page
  alert("Thank you for contacting me! I will get back to you soon.");
}

