const emailInput = document.getElementById("email");
const error = document.getElementById("error");
const form = document.getElementById("newsletter-form");
const formCard = document.getElementById("form-card");
const thanksCard = document.getElementById("thanks-card");
thanksCard.classList.add("d-none");

const dismissButton = document.getElementById("dismiss-button");
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function () {
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    error.textContent = "Email id is required";
    error.style.color = "hsl(4, 100%, 67%)";
    emailInput.style.background = "rgb(255 228 228)";
    emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
  } else if (!emailPattern.test(email)) {
    error.textContent = "Valid email id is required";
    error.style.color = "hsl(4, 100%, 67%)";
    emailInput.style.background = "rgb(255 228 228)";
    emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
    emailInput.style.color = "hsl(4, 100%, 67%)";
  } else {
    error.textContent = "";
    thanksCard.classList.remove("d-none");
    formCard.classList.add("d-none");
    emailInput.style.background = "";
    emailInput.style.border = "";
    emailInput.style.color = "";
    document.getElementById("email-receipt").innerText = email;
    document.getElementById("email-receipt").style.fontWeight = "bold";
  }
});
dismissButton.addEventListener("click", function () {
  formCard.classList.remove("d-none");
  thanksCard.classList.add("d-none");
  form.reset();
});
