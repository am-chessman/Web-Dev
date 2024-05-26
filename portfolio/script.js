const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('.nav-bar');

menuIcon.addEventListener('click', () => {
    if (!navBar.classList.contains('js-nav-bar')) {
        navBar.classList.add('js-nav-bar');
        menuIcon.innerHTML = '<i class="bi bi-x-circle-fill" style="position: relative; top: 5px; left: 2px;"></i>';
        navBar.setAttribute('style', 'translate: transformX(100%) !important;');
        console.log("Added")
    } else {
        navBar.classList.remove('js-nav-bar')
        menuIcon.innerHTML = '&#9776;'
        console.log("Removed")
    }
});
