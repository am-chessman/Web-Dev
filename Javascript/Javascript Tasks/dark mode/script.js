const toggleBtn = document.querySelector('.toggleBtn');
const slider = document.querySelector('.slider');
const body =  document.querySelector('.body-container')
toggleBtn.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('bg-color')
    } else if (body.classList.contains('bg-color')) {
        body.classList.remove('bg-color')
    }
})