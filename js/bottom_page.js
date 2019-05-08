var overlay = document.querySelector('.overlay');
var overlay2 = document.querySelector('.overlay2');
var overlay3 = document.querySelector('.overlay3');

function togglePopup() {
    overlay.classList.toggle('hidden');
}
function togglePopup2() {
    overlay2.classList.toggle('hidden');
}
function togglePopup4() {
    overlay3.classList.toggle('hidden');
}

overlay.onclick = togglePopup;
overlay2.onclick = togglePopup2;
overlay3.onclick = togglePopup4;

