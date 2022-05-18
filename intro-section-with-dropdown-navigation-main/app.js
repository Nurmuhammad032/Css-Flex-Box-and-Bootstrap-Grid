const hamburgerWrapper = document.querySelector('.hamburger-wrapper');
const navbar = document.querySelector('.links-wrapper');

hamburgerWrapper.addEventListener('click', function(){
    navbar.classList.toggle('change-nav');
    hamburgerWrapper.classList.toggle('change-hamburger')
});