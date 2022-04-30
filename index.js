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

//REVIEWS
/select slider and innerslider
let slider = document.querySelector(".slider");
let innerSlider = document.querySelector(".slider-inner");

let pressed = false;
let startx;
let x;

//add event listener to slider
//mousedown == click -> able to drag along slider
slider.addEventListener("mousedown", (e) => {
  pressed = true;
  //show how many offset pixels counting from the left to the cursor click
  //the number of how pixels that the left hand side to the left or right of the slider compared to inner slider
  startx = e.offsetX - innerSlider.offsetLeft;
  //grabbing icon
  slider.style.cursor = "grabbing";
  console.log(innerSlider.offsetLeft);
});

//grabbing icon when the mouse enter slider
slider.addEventListener("mouseenter", () => {
  slider.style.cursor = "grab";
});

//normal cursor when mouse leaves slider
// slider.addEventListener("mouseleave", () => {
//   slider.style.cursor = "default";
// });

//get the hand opening up when grabbing
slider.addEventListener("mouseup", () => {
  slider.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  pressed = false;
});

slider.addEventListener("mousemove", (e) => {
  //if the mouse move, pressed -> false -> return another functions
  if (!pressed) return;
  //preventDefault -> drag along the slider
  e.preventDefault();

  //relative to parent slider div
  x = e.offsetX;

  innerSlider.style.left = `${x - startx}px`;

  checkboundary();
});

//prevent scroll when the first slider-img meets slider (leftside)
function checkboundary() {
  //The Element.getBoundingClientRect() providing information about the size of an element and its position relative to the viewport.
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  // console.log(outer);
  // console.log(inner);
  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px";
  } else if (inner.right < outer.right) {
    //inner.width - outer.width -> we dont want to keep outer in the viewport
    innerSlider.style.left = `-${inner.width - outer.width}px`;
  }
}

