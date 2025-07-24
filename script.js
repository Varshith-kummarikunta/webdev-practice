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

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitBtn = document.getElementById('submit-btn');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

function validateName() {
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    return false;
  }
  nameError.textContent = "";
  return true;
}

function validateEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(emailInput.value)) {
    emailError.textContent = "Enter a valid email";
    return false;
  }
  emailError.textContent = "";
  return true;
}

function validateMessage() {
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message cannot be empty";
    return false;
  }
  messageError.textContent = "";
  return true;
}

function validateForm() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  submitBtn.disabled = !(isNameValid && isEmailValid && isMessageValid);
}

nameInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);
messageInput.addEventListener('input', validateForm);
