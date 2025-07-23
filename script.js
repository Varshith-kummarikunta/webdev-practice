const toggleButton = document.getElementById("toggle-dark");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent submit

  let valid = true;

  // Name
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("name-error").textContent = "Name is required";
    valid = false;
  } else {
    document.getElementById("name-error").textContent = "";
  }

  // Email
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("email-error").textContent = "Enter valid email";
    valid = false;
  } else {
    document.getElementById("email-error").textContent = "";
  }

  // Message
  const message = document.getElementById("message").value.trim();
  if (message.length < 10) {
    document.getElementById("message-error").textContent = "Message too short";
    valid = false;
  } else {
    document.getElementById("message-error").textContent = "";
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.reset(); // clear form
  }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
