import "./scss/app.scss";

const header = document.querySelector(".header");
const open = document.querySelector(".header__menu--open");
const close = document.querySelector(".header__menu--close");

open.addEventListener("click", () => {
  header.classList.add("header--fullscreen");
});

close.addEventListener("click", () => {
  header.classList.remove("header--fullscreen");
});
