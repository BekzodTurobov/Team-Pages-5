const optionsContainer = document.querySelectorAll(".options-container");
const optionsList = document.querySelectorAll(".option");
const mainEl = document.querySelector("main");
const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".btn-mobile-nav");
const navContainer = document.querySelector(".nav-container");
const allLinksEl = document.querySelectorAll("a");

//////////////////////////////////////////
//  MAKE SELECT OPTION WORK
//////////////////////////////////////////
let openedOption = 0;
let activeOption = 0;

document.addEventListener("click", selectOption);
optionsList.forEach((item) => {
  item.addEventListener("click", setOption);
});

////////////////////////////////////////
//  MAKE MOBILE NAVIGATION WORK
////////////////////////////////////////
document.addEventListener("click", openNav);
document.addEventListener("keydown", closeNav);

//////////////////////////////////////////
//  SMOOTH SCROLLING ANIMATION
//////////////////////////////////////////
allLinksEl.forEach((link) => {
  link.addEventListener("click", function (e) {
    smoothScroll(e, link);
  });
});

////////////////////////////////////////
//  IMPLEMENT STICKY NAVIGATION
////////////////////////////////////////
window.addEventListener("scroll", stickyNav);
