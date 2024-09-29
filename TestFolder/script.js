const scrollElement = document.querySelector(".content-holder")
const childElements = [...document.querySelectorAll(".child")]
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const scrollWidth = childElements.clientWidth
let isDragging = false
let startX, scrollLeft
let firstChildPos = childElements[0].getBoundingClientRect().x

function scrollToLeft() {
    childElements.forEach(child => {
        scrollElement.scrollBy({
            left: - child.clientWidth + 10,
            behavior: "auto"
        })
    })
}

function scrollToRight() {
    childElements.forEach(child => {
        scrollElement.scrollBy({
            left: + child.clientWidth - 10,
            behavior: "auto"
        })
    })
}

scrollElement.addEventListener("mousedown", (e) => {
    isDragging = true
    scrollElement.classList.add("dragging")
    startX = e.pageX - scrollElement.offsetLeft
    scrollLeft = scrollElement.scrollLeft
})

scrollElement.addEventListener("mouseleave", () => {
    isDragging = false
    scrollElement.classList.remove("dragging")
})

scrollElement.addEventListener("mouseup", () => {
    isDragging = false
    scrollElement.classList.remove("dragging")
})

scrollElement.addEventListener("mousemove", (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollElement.offsetLeft
    const walk = (x - startX) * 3
    scrollElement.scrollLeft = scrollLeft - walk
})

scrollElement.addEventListener("mouseover", () => {
    scrollElement.style.cursor = "grab"
})