var menuIcon = document.querySelector('.hamburger');

var menu = document.querySelector('.menu');

menuIcon.onclick = function() {
    menu.classList.toggle('menu--active');
}
