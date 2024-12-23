//SELECT ELEMENTS
const inputEl = document.querySelector(".input");
const btnEl = document.querySelector(".btn");
const spanTextEl = document.querySelector(".span-text");
const errorEl = document.querySelector(".error");
const subEl = document.querySelector(".subscribe");
const inputHolderEl = document.querySelector(".input-holder");

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const vaildRegistration = () => {
  const mail = inputEl.value.trim();
  if (emailPattern.test(mail)) {
    spanTextEl.classList.add("hidden");
    errorEl.classList.add("hidden");
    inputHolderEl.classList.add("hidden");
    subEl.classList.remove("hidden");
  } else {
    spanTextEl.classList.remove("hidden");
    errorEl.classList.remove("hidden");
    inputEl.style.outline = "2px solid hsl(0, 93%, 68%)";
  }
};

btnEl.addEventListener("click", vaildRegistration);
btnEl.addEventListener("click", () => {
  btnEl.style.background = "hsl(0, 80%, 86%)";
  btnEl.style.boxShadow = "0 10px 15px hsl(0, 36%, 70%)";
  btnEl.style.top = "-2px";
  btnEl.style.padding = "13px";
});

subEl.addEventListener("click", function () {
  inputHolderEl.classList.remove("hidden");
  subEl.classList.add("hidden");
  inputEl.value = "";
  btnEl.style.background = "";
  btnEl.style.boxShadow = "";
  btnEl.style.top = "";
  btnEl.style.padding = "";
  inputEl.style.outline = "";
});
