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

// formInputElement.forEach((element) => {
//     if (element.innerHTML > 0) {
//         console.log(element.innerHTML)
//     }
// })
