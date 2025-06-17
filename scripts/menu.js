const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
  
  if (menu.classList.contains('show')) {
    // Menu aberto, troca para X
    menuToggle.innerHTML = '&#10006;'; // &times; é o "×"
  } else {
    // Menu fechado, volta para hamburguer
    menuToggle.innerHTML = '&#9776;'; // ☰
  }
});