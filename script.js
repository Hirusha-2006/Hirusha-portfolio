document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Send form data to server (replace with your server-side code)
    // For example, you could send an email using a service like Mailgun or SendGrid
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  
    // Display a success message to the user
    alert("Your message has been sent successfully!");
  });

  var menuArea = document.querySelector(".menu-area");
var isMenuHidden = false;

document.addEventListener("mousemove", function() {
  if (isMenuHidden) {
    menuArea.classList.remove("hidden");
    isMenuHidden = false;
  }
});

window.addEventListener("scroll", function() {
  if (!isMenuHidden && window.scrollY > 100) {
    menuArea.classList.add("hidden");
    isMenuHidden = true;
  }
});