const bars = document.querySelector(".fa-bars");
const sideMenu = document.querySelector(".side-menu");
const closingButton = document.querySelector(".fa-times");

bars.addEventListener("click", () => {
  sideMenu.classList.toggle("show-side-menu");
});

closingButton.addEventListener("click", () => {
  sideMenu.classList.remove("show-side-menu");
});
