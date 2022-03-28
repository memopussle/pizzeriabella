//HAMBURGER
window.onload = function () {

    //choose hamburger class
    const menuBtn = document.querySelector('.hamburger');

    //add event listener when user click menu btn
    menuBtn.addEventListener('click', function () {
      menuBtn.classList.add('is-active');
    });
}