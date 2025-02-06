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

