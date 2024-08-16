import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(-1)
  const [color, setColor] = useState(null)

  const click = color => {
    if (count < 4) {
      setCount(prevCount => prevCount + 1)
    }
    setColor(color)
  }

  useEffect(() => {
    const progressBar = document.querySelectorAll(".progress")
    const progressIcon = document.querySelectorAll("span")

    if (progressBar[count]) {
      progressBar[count].classList.add("progress-color")
      progressIcon[count].innerHTML = `<i class="bi bi-check-lg"></i>`
    }

  }, [color, count])

  return (
    <>
      <div className="progress-bar-container">
        <div className="progress-bar">
            <div className="num-item">
                <span>
                  <i className="bi bi-x"></i>
                </span>
            </div>
            <div className="progress-item">
              <div className="progress">

              </div>
            </div>
            <div className="num-item">
                <span>
                  <i className="bi bi-x"></i>
                </span>
            </div>
            <div className="progress-item">
              <div className="progress">
                
              </div>
            </div>
            <div className="num-item">
                <span>
                  <i className="bi bi-x"></i>
                </span>
            </div>
            <div className="progress-item">
              <div className="progress">
                
              </div>
            </div>
            <div className="num-item">
                <span>
                  <i className="bi bi-x"></i>
                </span>
            </div>
            <div className="progress-item">
              <div className="progress">
                
              </div>
            </div>
            <div className="num-item">
                <span>
                  <i className="bi bi-x"></i>
                </span>
            </div>
        </div>

        <div className="button-objects">
          <button className="previous-btn">
            <i className="bi bi-arrow-left"></i>
          </button>
          <button className="next-btn" onClick={() => click("red")}>
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
