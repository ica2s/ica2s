import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();


const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden'); 
});


const menuLinks = menu.querySelectorAll('a');
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.add('hidden'); 
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   gsap.from(".card", {
//     opacity: 0,
//     x: (i) => (i % 2 === 0 ? -100 : 100), // Alternating Left & Right Slide Effect
//     duration: 1,
//     stagger: 0.2, // Delay between animations
//     ease: "power2.out",
//   });
// });

// document.querySelector("#contactForm").addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const name = document.querySelector("#name").value;
//   const email = document.querySelector("#email").value;
//   const message = document.querySelector("#message").value;

//   const response = await fetch("http://localhost:5000/api/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name, email, message }),
//   });

//   const result = await response.json();

//   if (response.ok) {
//       alert("Message sent successfully!");
//   } else {
//       alert("Error: " + result.error);
//   }
// });
