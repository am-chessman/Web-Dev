const progBarCont = document.querySelector('.progress-bar-container')
const buttonNext = document.querySelector('.next-btn')
const buttonPrev = document.querySelector('.previous-btn')
const progItem1 = document.querySelector('.progress-item-1')
const progItem2 = document.querySelector('.progress-item-2')
const progItem3 = document.querySelector('.progress-item-3')
const progItem4 = document.querySelector('.progress-item-4')

buttonNext.addEventListener('click', function(){
    progBarCont.classList.add('progress-bar-clicked')
    progItem1.classList.add('progress-item-1-moved')
    console.log(progBarCont)
})