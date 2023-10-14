import toggleDisplay from "./utils/toggleDisplay.js";

const mobileNavButton = document.querySelector('#mobile-nav-button');
const iconMenu = document.querySelector('#icon-menu');
const iconCancel = document.querySelector('#icon-cancel');
const primaryNavWrapper = document.querySelector('#primary-nav-wrapper');
const navigationBarLinks = [...document.querySelectorAll('.navigation-bar-link')];

mobileNavButton.addEventListener('click', () => {
    toggleDisplay(iconMenu, iconCancel, primaryNavWrapper);
});

navigationBarLinks.map((link) => {
    link.addEventListener('click', (event) => {
        if (!primaryNavWrapper.classList.contains('display-none')) {
            toggleDisplay(iconMenu, iconCancel, primaryNavWrapper);
        }
    });
});