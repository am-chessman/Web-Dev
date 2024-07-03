import { useState } from 'react'
import './App.css'

function App() {
  const [text, textState] = useState("")

  function textEntered(event) {
    let textInput = event.target.value
    textState(textInput)
  }

  console.log(text)

  fetch("/")
    .then(response => {
      if (!response) {
        throw new Error("Couldn't find any if")
      }
    })

  return (
    <div className='chatBox'>
      <form action="" method="post" onSubmit={}>
        <input type="text" name="userInput" id="" placeholder='Enter something...' onChange={textEntered} value={text}/>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default App
