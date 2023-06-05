import { useState } from 'react'
import memesData from './memesData'

function Form() {

  const [meme, setMeme] = useState({
      topText: '',
      bottomText: '',
      randomImage: 'https://corhexa.com/png/600x300/f0f0f0'
  })

  const [allMemeImages, setAllMemeImages] = useState(memesData)

  function GetMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
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

    <img src={meme.randomImage}/>
    </div>
  )
}

export default Form