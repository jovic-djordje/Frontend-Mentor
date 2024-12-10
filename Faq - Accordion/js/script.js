// SELECTING ELEMENTS
let btnClose = document.querySelectorAll(".close");
let btnOpen = document.querySelectorAll(".open");
let answerEl = document.querySelectorAll(".answer");

for (let i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener("click", function () {
    if (answerEl[i].classList.contains("hidden")) {
      // Show the answer and change to minus icon
      answerEl[i].classList.remove("hidden");
      btnOpen[i].src = "assets/images/icon-minus.svg";
    } else {
      // Hide the answer and change to plus icon
      answerEl[i].classList.add("hidden");
      btnOpen[i].src = "assets/images/icon-plus.svg";
    }

    console.log("clicked");
  });
}
