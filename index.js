//HAMBURGER
window.onload = function () {
  //choose hamburger class
  const menuBtn = document.querySelector(".hamburger");

  //choose hamburger nav
  const mobileMenu = document.querySelector(".hamburger__nav");
  
  //hidie header text-box
  const headerText = document.querySelector(".header__text-box");

  //add event listener when user click menu btn
  //when click menu btn, it will either add or remove class is-active
  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active");
    headerText.classList.toggle("is-active");
  });
};
