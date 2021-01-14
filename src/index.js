import "./scss/app.scss";

const body = document.querySelector("body");
const header = document.querySelector(".header");
const open = document.querySelector(".header__menu--open");
const close = document.querySelector(".header__menu--close");

open.addEventListener("click", () => {
  header.classList.add("header--fullscreen");
  body.classList.add("overflow-hidden");
});

close.addEventListener("click", () => {
  header.classList.remove("header--fullscreen");
  body.classList.remove("overflow-hidden");
});
