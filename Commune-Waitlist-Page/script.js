const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const nav = document.getElementById("nav");

const form = document.getElementById("form");

mobileMenuBtn.addEventListener("click", () => {
    nav.classList.toggle("mobile-menu-open");
    document.body.classList.toggle("no-scroll");
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
});
