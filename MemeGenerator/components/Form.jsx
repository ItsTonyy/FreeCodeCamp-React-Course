import { useEffect, useState } from 'react'


function Form() {

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data => setAllMeme(data.data.memes))
  }, [])

  const [meme, setMeme] = useState({
      topText: '',
      bottomText: '',
      randomImage: 'https://corhexa.com/png/600x300/f0f0f0'
  })

  const [allMeme, setAllMeme] = useState([])

  function GetMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMeme.length)
    const url = allMeme[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event) {
    const {value, name} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <div className='form'>
      <main className='form'>
        <div className='inputs'>
          <input 
            type='text'
            placeholder='Top text'
            className='input'
            name='topText'
            value={meme.topText}
            onChange={handleChange}
          />

          <input 
            type='text'
            placeholder='Bottom text'
            className='input'
            name='bottomText'
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        
        <div className='button-div'>
          <button
           className='form-button'
           onClick={GetMemeImage}
           > Get a new meme image 🖼️
          </button>
        </div>
        
    </main>

    <div className='meme'>
      <img src={meme.randomImage} className='form-image'/>
      <h2 className='meme-text-top'>{meme.topText}</h2>
      <h2 className='meme-text-bottom'>{meme.bottomText}</h2>
    </div>
    
    </div>
  )
}

export default Form