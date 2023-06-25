const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");


menuBtn.addEventListener("click", (e) => {
    menu.classList.add("menu-active");
});

closeMenuBtn.addEventListener("click", (e) => {
    menu.classList.remove("menu-active");
});