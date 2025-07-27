// ========== Dark Mode Toggle ==========
const toggleDark = document.getElementById("toggle-dark");
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ========== Mobile Menu Toggle ==========
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

// ========== Real-Time Form Validation ==========
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submit-btn");

function validateForm() {
  const nameValid = nameInput.value.trim().length > 2;
  const emailValid = /\S+@\S+\.\S+/.test(emailInput.value);
  const messageValid = messageInput.value.trim().length > 10;

  document.getElementById("name-error").textContent = nameValid ? "" : "Enter valid name";
  document.getElementById("email-error").textContent = emailValid ? "" : "Enter valid email";
  document.getElementById("message-error").textContent = messageValid ? "" : "Message too short";

  submitBtn.disabled = !(nameValid && emailValid && messageValid);
}

nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
messageInput.addEventListener("input", validateForm);

// ========== Scroll Reveal Animations ==========
ScrollReveal({
  distance: "60px",
  duration: 1000,
  delay: 200,
  reset: true // animations repeat on scroll
});

ScrollReveal().reveal("header", { origin: "top" });
ScrollReveal().reveal("#hero", { origin: "left" });
ScrollReveal().reveal("#about", { origin: "right" });
ScrollReveal().reveal("#projects", { origin: "bottom" });
ScrollReveal().reveal("#contact, #contact-form", { origin: "top" });
ScrollReveal().reveal("footer", { origin: "bottom" });
