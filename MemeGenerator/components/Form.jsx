import { useState } from 'react'
import memesData from './memesData'

function Form() {

  function GetMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    useState(memesArray[randomNumber].url) 
    const memeImage = useState('')
  }


  


  return (
    <div className='form'>
      <form className="form">
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
          <button className="form-button">
            Get a new meme image 🖼️
          </button>
        </div>
        
    </form>
    <img src={GetMemeImage} alt="imagem" className='form-image' />
    </div>
  )
}

export default Form