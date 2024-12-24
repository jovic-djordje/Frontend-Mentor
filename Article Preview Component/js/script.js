/* SELECT ELEMENTS*/
const btnShare = document.querySelector(".share-icon");
const mediasEl = document.querySelector(".socials-holder");
const iconHolder = document.querySelector(".icon-holder ");
const share = document.querySelector(".share-icon");
const mobileBtn = document.querySelector(".switch");
const mediaMobileHolder = document.querySelector(".social-mobile-holder");
const personalInfo = document.querySelector(".profile");
const rightCardSide = document.querySelector(".right-card-side");
const mobileShareBtn = document.querySelector(".share-mobile-btn");

// WHEN WE CLICK "SHARE" BTN ON DESKTOP, DIV WITH SOCIAL MEDIAS SHOULD APEAR ABOVE THAT BTN
btnShare.addEventListener("click", function () {
  if (mediasEl.classList.contains("hidden")) {
    mediasEl.classList.remove("hidden");
  } else {
    mediasEl.classList.add("hidden");
  }
  console.log("clicked");
});

// ON MOBILE WHEN WE CLICK ON "SHARE" BTN, DIV WITH SOCIAL MEDIAS SHOULD APEAR IN FOOTER OF OUR CARD
mobileBtn.addEventListener("click", function () {
  if (mediaMobileHolder.classList.contains("active")) {
    mediaMobileHolder.classList.remove("active");
    personalInfo.classList.add("active");
    rightCardSide.style.paddingBottom = "0";
    mediaMobileHolder.style.marginTop = "20px";
  }
  console.log("clicked");
});

// WHEN BTN IN MOBILE MODE IS CLICKED, DIV WITH SOCIAL MEDIAS IS VISIBLE WE HAVE "SHARE" BTN INSIDE THAT DIV,WHEN WE CLICK THAT BTN EVERYTHING NEEDS TO LOOK AS DEFAULT
mobileShareBtn.addEventListener("click", function () {
  mediaMobileHolder.classList.add("active");
  personalInfo.classList.remove("active");
  rightCardSide.style.paddingBottom = "";
  mediaMobileHolder.style.marginTop = "";
});

// I USED THIS FUNCTION BECAUSE WHEN I CLCIK ON "SHARE" BTN WHEN I AM ON MOBILE AND  I INCREASE THE SCREEN SIZE, DIV WITH SOCIAL MEDIAS STAY ACTIVE AND COVER PROFILE INFO SECTION
window.addEventListener("resize", () => {
  if (
    window.innerWidth >= 1024 &&
    !mediaMobileHolder.classList.contains("active")
  ) {
    mediaMobileHolder.classList.add("active");
    personalInfo.classList.remove("active");
    rightCardSide.style.paddingBottom = "";
  }
});
