const wrongPasswordElement = document.querySelector('.wrongPassword');
const wrongUserElement = document.querySelector('.noUser');
const formInputElement = document.querySelectorAll('.js-input');

if(wrongPasswordElement) {
    if(!wrongPasswordElement.classList.contains('js-wrongPass')) {
        wrongPasswordElement.classList.add('js-wrongPass');
    } else {
        wrongPasswordElement.classList.add('js-wrongPass-none');
        console.log(wrongPasswordElement)
    }
} 

if(wrongUserElement) {
    if(!wrongUserElement.classList.contains('js-wrongUser')) {
        wrongUserElement.classList.add('js-wrongUser');
    } else {
        wrongUserElement.classList.add('js-wrongUser-none');
    }    
}

/* Show and hide password*/
// Selectors
const passwordField = $("#passInput");
const toggleValue = $(".show-pass");
const inputElement = $(".input-data");

// SVG Icons
const newValue = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
</svg>`;
const originalValue = toggleValue.html();

// Toggle password visibility and icon on click
toggleValue.click(function () {
    if (toggleValue.html() == originalValue && passwordField.attr("type") == "password") {
        toggleValue.html(newValue);
        passwordField.attr("type", "text");
    } else {
        toggleValue.html(originalValue);
        passwordField.attr("type", "password");
        console.log(inputElement.html())
    }
});
