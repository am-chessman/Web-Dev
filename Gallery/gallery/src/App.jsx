import './App.css'
import Holder from './components'
import imageObjects from './images'

function CreateHolder(term) {
  return(
  <Holder id={term.id} src={term.src}/>
  )
}

// Photos folder stored locally. Moved it in code folder

export default function App() {
  return (
    <main className="body-content">
      <div className='image-container'>
        {imageObjects.map((entry) => {
          return (
            <CreateHolder 
              id={entry.id}
              src={entry.src}
            />
          )
        })}
      </div>
    </main>
  )
}

