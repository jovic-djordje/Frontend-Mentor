//SELECT ELEMENTS
const submitBtn = document.querySelector(".btn");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const mail = document.getElementById("e-address");
const password = document.getElementById("password");
const error = document.querySelectorAll(".error-icon");

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const inputForm = () => {
  let isValid = true;
  // FIRST NAME
  if (firstName.value.trim() === "") {
    document.querySelector(".fname-error-text").style.display = "block";
    document.querySelector(".fname-error-icon").style.display = "block";
    firstName.style.border = "1px solid hsl(0, 100%, 74%) ";
    isValid = false;
  } else {
    document.querySelector(".fname-error-icon").style.display = "none";
    document.querySelector(".fname-error-text").style.display = "none";
  }
  // LAST NAME
  if (lastName.value.trim() === "") {
    document.querySelector(".lname-error-text").style.display = "block";
    document.querySelector(".lname-error-icon").style.display = "block";
    lastName.style.border = "1px solid hsl(0, 100%, 74%) ";
    isValid = false;
  } else {
    document.querySelector(".lname-error-text").style.display = "none";
    document.querySelector(".lname-error-icon").style.display = "none";
  }

  //EMAIL
  const mailEl = mail.value.trim();
  if (mail.value === "") {
    document.querySelector(".email-error-text").style.display = "none";
    document.querySelector(".email-empty-text").style.display = "block";
    document.querySelector(".email-error-icon").style.display = "block";
    mail.style.border = "1px solid hsl(0, 100%, 74%) ";
    isValid = false;
  } else if (!emailPattern.test(mailEl)) {
    document.querySelector(".email-empty-text").style.display = "none";
    document.querySelector(".email-error-text").style.display = "block";
    document.querySelector(".email-error-icon").style.display = "block";
    mail.style.border = "1px solid hsl(0, 100%, 74%) ";
    isValid = false;
  } else {
    document.querySelector(".email-empty-text").style.display = "none";
    document.querySelector(".email-error-text").style.display = "none";
    document.querySelector(".email-error-icon").style.display = "none";
  }

  //PASSWORD
  if (password.value === "") {
    document.querySelector(".password-error-text").style.display = "block";
    document.querySelector(".password-error-icon").style.display = "block";
    password.style.border = "1px solid hsl(0, 100%, 74%) ";
    isValid = false;
  } else {
    document.querySelector(".password-error-text").style.display = "none";
    document.querySelector(".password-error-icon").style.display = "none";
  }
  return isValid;
};

const alertFunction = () => {
  if (inputForm()) {
    const inputs = [firstName, lastName, mail, password];
    inputs.forEach((input) => {
      input.style.borderColor = " hsl(246, 25%, 77%)";
      input.value = "";
    });
  }
};

submitBtn.addEventListener("click", inputForm);
submitBtn.addEventListener("click", alertFunction);
