const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('.nav-bar');

menuIcon.addEventListener('click', () => {
    if (!navBar.classList.contains('js-nav-bar')) {
        navBar.classList.add('js-nav-bar');
        console.log("Added")
    } else {
        navBar.classList.remove('js-nav-bar')
        console.log("Removed")
    }
});
