import toggleDisplay from "./utils/toggleDisplay.js";

const mobileNavButton = document.querySelector('#mobile-nav-button');
const iconMenu = document.querySelector('#icon-menu');
const iconCancel = document.querySelector('#icon-cancel');
const primaryNavWrapper = document.querySelector('#primary-nav-wrapper');

mobileNavButton.addEventListener('click', () => {
    toggleDisplay(iconMenu, iconCancel, primaryNavWrapper);
});