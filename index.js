//HAMBURGER
window.onload = function () {
  //choose hamburger class
  const menuBtn = document.querySelector(".hamburger");

  //choose hamburger nav
  const mobileMenu = document.querySelector(".hamburger__nav");
  
  //add event listener when user click menu btn
  //when click menu btn, it will either add or remove class is-active
  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active");
  });
};
