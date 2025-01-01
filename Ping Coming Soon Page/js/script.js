//SELECT ELEMENTS
const btnEl = document.querySelector(".btn");
const mailEl = document.getElementById("email");

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const btnHandle = () => {
  const mail = mailEl.value.trim();
  if (mail !== "" && !emailPattern.test(mail)) {
    document.querySelector(".error").style.display = "block";
    mailEl.style.outline = "1px solid hsl(354, 100%, 66%)";
    mailEl.style.border = "none";
  } else {
    document.querySelector(".error").style.display = "none";
    mailEl.style.border = "1px solid #969696";
    mailEl.style.outline = "";
  }
};
btnEl.addEventListener("click", btnHandle);
