const phoneLinks = document.querySelectorAll(".phoneLink");
phoneLinks.forEach((link) => {
  link.href = "tel:+6582749231";
});

const emailLinks = document.querySelectorAll(".emailLink");
emailLinks.forEach((link) => {
  link.href = "mailto:fionaseah98@gmail.com";
});

const instagramLinks = document.querySelectorAll(".instagramLink");
instagramLinks.forEach((link) => {
  link.href =
    "https://www.instagram.com/fionaseahshuhui2606?igsh=MXN5ZTJ6a2Jpd25qNw%3D%3D&utm_source=qr";
});

const linkedInLinks = document.querySelectorAll(".linkedInLink");
linkedInLinks.forEach((link) => {
  link.href = "https://www.linkedin.com/in/fiona-seah-shu-hui/";
});

const gitHubLinks = document.querySelectorAll(".gitHubLink");
gitHubLinks.forEach((link) => {
  link.href = "https://github.com/FionaSeahShuHui1998";
});

const countryCodes = [
  { code: "+65", name: "Singapore" },
  { code: "+60", name: "Malaysia" },
  { code: "+62", name: "Indonesia" },
  { code: "+81", name: "Japan" },
  { code: "+82", name: "South Korea" },
  { code: "+91", name: "India" },
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
];

const select = document.getElementById("code");

const defaultOption = document.createElement("option");
defaultOption.value = "";
defaultOption.textContent = "Select Code";
defaultOption.disabled = true;
defaultOption.selected = true;
select.appendChild(defaultOption);

countryCodes.forEach((c) => {
  const option = document.createElement("option");
  option.value = c.code;
  option.textContent = `${c.code} (${c.name})`;
  select.appendChild(option);
});

document.getElementById("submitButton").addEventListener("click", function (e) {
  e.preventDefault();

  // Get field elements
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const codeField = document.getElementById("code");
  const contactField = document.getElementById("contact");
  const messageField = document.getElementById("message");

  // Get values
  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const code = codeField.value.trim();
  const contact = contactField.value.trim();
  const message = messageField.value.trim();

  // Clear all previous errors
  document
    .querySelectorAll(".error")
    .forEach((el) => el.classList.remove("error"));
  document
    .querySelectorAll(".error-message")
    .forEach((el) => (el.textContent = ""));

  let isValid = true;

  // Name validation
  if (name === "") {
    nameField.classList.add("error");
    document.getElementById("nameError").textContent =
      "Please enter your name.";
    isValid = false;
  }

  // Email validation
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailFormat.test(email)) {
    emailField.classList.add("error");
    document.getElementById("emailError").textContent =
      "Invalid email address.";
    isValid = false;
  }

  // Country code validation
  if (code === "") {
    codeField.classList.add("error");
    document.getElementById("codeError").textContent = "Please select a code.";
    isValid = false;
  }

  // Contact validation
  const contactFormat = /^[0-9]{8,15}$/;
  if (!contactFormat.test(contact)) {
    contactField.classList.add("error");
    document.getElementById("contactError").textContent =
      "Contact number must be 8–15 digits.";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    messageField.classList.add("error");
    document.getElementById("messageError").textContent =
      "Message cannot be empty.";
    isValid = false;
  }

  // Submit if all valid
  if (isValid) {
    const form = e.target.closest("form");
    form.submit();

    setTimeout(() => {
      form.reset();
    }, 300);
  }
});
