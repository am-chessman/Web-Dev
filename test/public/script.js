const wrongPasswordElement = document.querySelector('.wrongPassword');
const wrongUserElement = document.querySelector('.noUser');

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
