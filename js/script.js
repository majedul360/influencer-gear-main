let nav = document.querySelector('nav');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
})

window.addEventListener('scroll', () => {
    nav.classList.remove('active');
})