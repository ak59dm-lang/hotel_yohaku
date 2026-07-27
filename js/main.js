/* ==========================================
Drawer Menu
========================================== */

const menuBtn = document.querySelector(".js-menu-btn");
const drawer = document.querySelector(".js-drawer");

menuBtn.addEventListener("click", () => {
    drawer.classList.toggle("is-open");
});