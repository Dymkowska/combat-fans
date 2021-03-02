const open = document.querySelector(".open");
const close = document.querySelector(".close");
const wrapper = document.querySelector(".menu-wrapper");

const changeMenu = () => {
    wrapper.classList.toggle("burger-menu");
};

open.addEventListener("click", changeMenu);
close.addEventListener("click", changeMenu)