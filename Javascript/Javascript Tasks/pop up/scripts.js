let overlayPopup = document.getElementById('overlay')
let closeButton = document.getElementById('close-icon')
let buttonElement = document.getElementById('pop-up-btn')

buttonElement.addEventListener('click', function() {
    overlayPopup.style.display = 'block'
})
closeButton.addEventListener('click', function() {
    overlayPopup.style.display = 'none'
})