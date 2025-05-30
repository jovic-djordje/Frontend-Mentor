//SELECTED ELEMENTS
const billInput = document.querySelector(".bill-input");
const btnInput = document.querySelector(".btn-input");
const btns = document.querySelectorAll(".btn");
const numOfPplInput = document.querySelector(".num-of-ppl-input");
const amount = document.querySelector(".tip-amount");
const span = amount.querySelector("span");
const total = document.querySelector(".total");
const totalSpan = total.querySelector("span");
const resetBtn = document.querySelector(".right-side-btn");

// FUNCTION FOR BUTTONS
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    //clean all inputs
    btnInput.value = "";

    // restart buttons
    btns.forEach((b) => b.classList.remove("active"));

    // add active class
    btn.classList.add("active");

    //convert number from button to %
    btnText = parseFloat(btn.innerText) / 100;
  });
});

// BUTTON WITH INPUT FILED
btnInput.addEventListener("input", function () {
  //reset buttons
  btns.forEach((btn) => btn.classList.remove("active"));

  btnInput.classList.add("active");
});

//PRESS ENTER
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.querySelector(".bill-error").style.display = "none";
    document.querySelector(".ppl-error").style.display = "none";
    billInput.style.border = "none";
    numOfPplInput.style.border = "none";

    let billFieldValue = parseFloat(billInput.value);
    let pplInputField = parseInt(numOfPplInput.value);

    //if bill input od pplnum input is empty
    if (billFieldValue <= 0) {
      billInput.style.border = "2px solid #B22222";
      document.querySelector(".bill-error").style.display = "block";
    }

    if (pplInputField <= 0) {
      numOfPplInput.style.border = "2px solid #B22222";
      document.querySelector(".ppl-error").style.display = "block";
    }

    let tipPercent = 0;

    if (btnInput.value !== "") {
      tipPercent = parseFloat(btnInput.value) / 100;
    } else if (btnText !== undefined) {
      tipPercent = btnText;
    } else {
      return;
    }

    //count
    let count = (billFieldValue * tipPercent) / pplInputField;
    let total = (billFieldValue + billFieldValue * tipPercent) / pplInputField;

    if (!isFinite(count) || !isFinite(total)) {
      span.textContent = "$0.00";
      totalSpan.textContent = "$0.00";
      return;
    }

    span.textContent = `$${count.toFixed(2)}`;
    totalSpan.textContent = `$${total.toFixed(2)}`;
  }
});

// RESET BUTTON
resetBtn.addEventListener("click", function () {
  billInput.value = "";
  numOfPplInput.value = "";
  span.textContent = "$0.00";
  totalSpan.textContent = "$0.00";
  billInput.style.border = "none";
  numOfPplInput.style.border = "none";
  document.querySelector(".bill-error").style.display = "none";
  document.querySelector(".ppl-error").style.display = "none";
});
