const validEmail = () => {
  let input = document.querySelector(".input-field");
  let inputField = input.value;
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(inputField)) {
    let subCart = document.querySelector(".subscribe-cart");
    let validInput = document.getElementById("valid-email");
    validInput.innerText = inputField;
    subCart.classList.remove("hidden");
    let form = document.querySelector(".form");
    form.classList.add("hidden");
  } else if (inputField === "") {
    let mailErrorMeassage = document.querySelector(".error-message");
    mailErrorMeassage.classList.remove("hidden");
  } else if (!regex.test(inputField)) {
    input.style.border = "2px solid hsl(4, 100%, 67%)";
    input.style.backgroundColor = "hsl(4, 100%, 87%)";
    input.style.color = "hsl(4, 100%, 57%)";
    let mailErrorMeassage = document.querySelector(".error-message");
    mailErrorMeassage.classList.remove("hidden");
  }
};

const dismissMessage = () => {
  let subCart = document.querySelector(".subscribe-cart");
  subCart.classList.add("hidden");
  let form = document.querySelector(".form");
  form.classList.remove("hidden");
  let input = document.querySelector(".input-field");
  input.style.border = "1px solid hsl(0, 0%, 58%)";
  input.style.backgroundColor = "transparent";
  input.style.color = "#000";
  let inputField = (input.value = "");
  let mailErrorMeassage = document.querySelector(".error-message");
  mailErrorMeassage.classList.add("hidden");
};
