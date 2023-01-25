// toggle class active
const navbarnav = document.querySelector('.navbar-nav');
// ketika hamburgermenu di klik
const menu = document.querySelector('#hamburger-menu');

menu.addEventListener('click', function() {
    navbarnav.classList.toggle('active');
});

document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active')
    }
});