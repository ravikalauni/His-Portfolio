// Toggle side navigation
const menuBtn = document.getElementById('menu-btn');
const sideNav = document.getElementById('side-nav');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
    sideNav.style.left = '0';
});

closeBtn.addEventListener('click', () => {
    sideNav.style.left = '-270px';
});
