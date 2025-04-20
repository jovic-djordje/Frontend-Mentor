let hamburgerBtn = document.querySelector(".hamburger-icon");
let closeBtn = document.querySelector(".close-btn");
let mobileNavigation = document.querySelector(".mobile-nav");
let mobileNavItems = document.querySelectorAll(".mobile-nav-list-item");

hamburgerBtn.addEventListener("click", function () {
  mobileNavigation.style.display = "block";
  document.querySelector("body").style.overflow = "hidden";
});

closeBtn.addEventListener("click", function () {
  mobileNavigation.style.display = "none";
});

mobileNavItems.forEach((items) =>
  items.addEventListener("click", function () {
    mobileNavigation.style.display = "none";
    document.querySelector("body").style.overflow = "visible";
  })
);
