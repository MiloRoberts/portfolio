import toggleDisplay from "./utils/toggleDisplay.js";

const menuIcon = document.getElementById('menu-icon'); const cancelIcon = document.getElementById('cancel-icon');

menuIcon.addEventListener('click', () => {
    toggleDisplay(menuIcon, cancelIcon);
});

cancelIcon.addEventListener('click', () => {
    toggleDisplay(menuIcon, cancelIcon);
});