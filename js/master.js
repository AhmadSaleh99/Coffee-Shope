let searchBox = document.querySelector(".searchBox");
let search = document.querySelector(".searchBtn");
search.onclick = function () {
  searchBox.classList.toggle("open");
  cartBox.classList.remove("open");
  nav.classList.remove("open");
};

let cartBox = document.querySelector(".cartBox");
let cart = document.querySelector(".cart");

cart.addEventListener("click", () => {
  cartBox.classList.toggle("open");
  searchBox.classList.remove("open");
  nav.classList.remove("open");
});

let nav = document.querySelector(".nav");
let menu = document.querySelector(".bar");

menu.onclick = function () {
  nav.classList.toggle("open");
  cartBox.classList.remove("open");
  searchBox.classList.remove("open");
};

window.onscroll = () => {
  searchBox.classList.remove("open");
  cartBox.classList.remove("open");
  nav.classList.remove("open");
};
