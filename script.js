/* Dark Mode Toggle */
const toggleBtn = document.getElementById('toggle-dark');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️ Light Mode';
  } else {
    toggleBtn.textContent = '🌙 Toggle Dark Mode';
  }
});

/* Mobile Navigation Toggle */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});

/* Scroll Reveal Animations */
ScrollReveal({
  distance: '60px',
  duration: 1000,
  delay: 200,
  reset: false
});
ScrollReveal().reveal('.hero', { origin: 'top' });
ScrollReveal().reveal('.about', { origin: 'left' });
ScrollReveal().reveal('.projects', { origin: 'right' });
ScrollReveal().reveal('.contact', { origin: 'bottom' });
