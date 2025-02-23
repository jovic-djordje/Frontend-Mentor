//SELECT ELEMENTS
const prevBtn = document.querySelector(".prev-icon");
const nextBtn = document.querySelector(".next-icon");
const imgs = document.querySelectorAll(".img");
const johnText = document.querySelector(".john-text");
const tanyaText = document.querySelector(".tanya-text");

let imgStart = 0;

const displayNone = () => {
  imgs.forEach((e) => {
    e.style.display = "none";
  });
};


const showText = () => {
  let tanyaPhoto = document.querySelector(".img-tanya");
  let johnPhoto = document.querySelector(".img-john");
  if (tanyaPhoto.style.display === "block") {
    tanyaText.style.display = "block";
    document.querySelector(".jname").classList.add("hidden");
    document.querySelector(".jjob").classList.add("hidden");
    document.querySelector(".name").classList.remove("hidden");
    document.querySelector(".job").classList.remove("hidden");

    johnText.style.display = "none";
  } else if (johnPhoto.style.display === "block") {
    johnText.style.display = "block";
    document.querySelector(".jname").classList.remove("hidden");
    document.querySelector(".jjob").classList.remove("hidden");
    document.querySelector(".name").classList.add("hidden");
    document.querySelector(".job").classList.add("hidden");

    tanyaText.style.display = "none";
  }
};

nextBtn.addEventListener("click", function () {
  displayNone();
  imgStart++;
  if (imgStart === imgs.length) {
    imgStart = 0;
  }
  imgs[imgStart].style.display = "block";
  showText();
});

prevBtn.addEventListener("click", function () {
  displayNone();
  imgStart--;
  if (imgStart === -1) {
    imgStart = imgs.length - 1;
  }
  imgs[imgStart].style.display = "block";
  showText();
});
