import { useState } from 'react'
import memesData from './memesData'

function Form() {
  const [memeImage, setMemeImage] = useState('')
  

  function GetMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
  }

  return (
    <div className='form'>
      <main className="form">
        <div className='inputs'>
          <input 
            type="text"
            placeholder="Top text"
            className="input"
          />

          <input 
            type="text"
            placeholder="Bottom text"
            className="input"
          />
        </div>
        
        <div className="button-div">
          <button
           className="form-button"
           onClick={GetMemeImage}
           > Get a new meme image 🖼️
          </button>
        </div>
        
    </main>

    <img src={memeImage}/>
    </div>
  )
}

export default Form