const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a'); // All para iterar todos los valores de nav-links.

// Cuando se pulsa el toggle, se añade o elimina la clase .active, lo que hace que los nav-links se muestren (display:flex, menú abierto)
// o no (display:none, menú cerrado).
toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Detecta cuándo se pulsa un enlace dentro de nav-links y elimina la clase .active, lo que hace que el toggle se cierre.
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  })
});

// Detecta el tamaño del ancho de pantalla, de modo que si se cruza el ancho máximo de móviles (480px), el toggle se cierra (pierde la clase .active)
window.addEventListener('resize', () => {
  if (window.innerWidth >= 480) {
    nav.classList.remove('active');
  }
});

