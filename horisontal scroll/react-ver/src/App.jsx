import {useRef} from 'react'
import './App.css'

function App() {

  const scrollRef = useRef(null)
  const childRef = useRef(null)
  let isDragging = false
  let startX, scrollLeft

  const handlePrevScroll = () => {
    const scrollElement = scrollRef.current
    const childElements = [...document.querySelectorAll(".child")]

    if (!scrollElement || !childElements) return

    scrollElement.scrollBy({
          left: -childElements[0].clientWidth - 10,
          behavior: "smooth"
      })
  }

  const handleNextScroll = () => {
    const scrollElement = scrollRef.current
    const childElements = [...document.querySelectorAll(".child")]
    
    if (!scrollElement || !childElements) return
      
    scrollElement.scrollBy({
          left: childElements[0].clientWidth + 10,
          behavior: "smooth"
      })
  }

  return (
    <>
        <div className="container">
          <div className="content-holder" id="js-content-holder" ref={scrollRef} onMouseDown={(e) => {
                isDragging = true
                const scrollElement = scrollRef.current
                scrollElement.classList.add("dragging")
                startX = e.pageX - scrollElement.offsetLeft
                scrollLeft = scrollElement.scrollLeft
          }}
          onMouseUp={() => {
            const scrollElement = scrollRef.current
            isDragging = false
            scrollElement.classList.remove("dragging")
          }}
          onMouseLeave={() => {
            const scrollElement = scrollRef.current
            isDragging = false
            scrollElement.classList.remove("dragging")
          }}
          onMouseMove={(e) => {
            isDragging = true
            const scrollElement = scrollRef.current
            scrollElement.classList.add("dragging")
            startX = e.pageX - scrollElement.offsetLeft
            scrollLeft = scrollElement.scrollLeft
      }}
          >
            {[...Array(20)].map((_, index) => (
              <div className="child" style={{color: "#fff"}} key={index} ref={childRef}>
                  {index + 1}
              </div>
            ))}
          </div>
      </div>
      <div className="btns">
        <button className="prev" onClick={handlePrevScroll}>
          Back
        </button>
        <button className="next" onClick={handleNextScroll}>
          Forward
        </button>
      </div>
    </>
  )
}

export default App
