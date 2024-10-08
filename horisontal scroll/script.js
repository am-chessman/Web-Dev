const scrollElement = document.querySelector(".content-holder")
const childElements = [...document.querySelectorAll(".child")]
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const scrollWidth = childElements.clientWidth
let isDragging = false
let startX, scrollLeft
let firstChildPos = childElements[0].getBoundingClientRect().x

function scrollToLeft() {
    scrollElement.scrollBy({
        left: - childElements[0].clientWidth,
        behavior: "auto"
    })
}

function scrollToRight() {
    scrollElement.scrollBy({
        left: childElements[0].clientWidth,
        behavior: "auto"
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
    const walk = (x - startX) * 2
    scrollElement.scrollLeft = scrollLeft - walk
})

scrollElement.addEventListener("mouseover", () => {
    scrollElement.style.cursor = "grab"
})