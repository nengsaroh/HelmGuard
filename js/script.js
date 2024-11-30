// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#humberger-menu").onclick = () => {
   navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan navbar

const hamburger = document.querySelector("#humberger-menu");

document.addEventListener("click", function (e) {
   if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
   }
});


// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
   // Select all FAQ question buttons
   const questions = document.querySelectorAll('.faq-question');
 
   // Add event listeners to each question
   questions.forEach(function(question) {
     question.addEventListener('click', function() {
       // Toggle the corresponding answer visibility
       const answer = question.nextElementSibling;
 
       // Toggle the "show" class to show/hide the answer
       answer.classList.toggle('show');
     });
   });
 });
 