let clickedNums = '';
let display = document.querySelector('.display')

function nums() {
    let buttons = document.querySelectorAll('.btn')
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            clickedNums += button.innerHTML
            display.innerHTML = clickedNums
        })
    })
}

function operations() {
    let operations = document.querySelectorAll('.operand')

    operations.forEach(operation => {
        operation.addEventListener('click', () => {
            clickedNums += operation.innerHTML
            display.innerHTML = clickedNums
        })
    })

}
operations()
nums()

