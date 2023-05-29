function Form() {
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
    </div>
  )
}

export default Form