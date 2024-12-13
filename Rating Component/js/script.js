// SELECT ELEMENTS
const cardEl = document.querySelector(".card");
const btnNum = document.querySelectorAll(".num");
const btnSubmit = document.querySelector(".btn");
const cardThanks = document.querySelector(".thanks-card");
const numContentEl = document.querySelector(".num-content");

// FUNCTION WHEN WE CLICK ON SUBMIT BTN HIDE CARD AND SHOWS THANKS CARD
const showThanks = (selectText) => {
  numContentEl.textContent = selectText;
  cardThanks.classList.remove("hidden");
  cardEl.classList.add("hidden");
};

// WHEN WE GO THROUGH EACH NUMBER AND CLICK BACkGROUND CHANGE IN WHITE, IF WE CLICK ON OTHER BTN WE APPLY THAT EFFECT TO THAT BTN
let active = 0;
let selectText = 0;

btnNum.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (active) {
      active.classList.remove("background");
    }
    btn.classList.add("background");
    selectText = btn.getAttribute("data-num-text");
    active = btn;
  });
});

// WHEN WE CLICK ON SUBMIT BTN THAKS CARD SHOW UP AND WICH NUMBER DID WE SELCTED
btnSubmit.addEventListener("click", () => {
  if (selectText) {
    showThanks(selectText);
  }
});
