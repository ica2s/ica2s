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