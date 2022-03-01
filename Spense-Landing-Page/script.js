const menuBtn = document.querySelector(".menu-btn");
const nav = document.getElementById("nav");
const form = document.getElementById("sign-up-form");

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('mobile-menu-open');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
});
