function Card() {
  return (
  <div className='outer-container'>
    <div className='card-container'>
      <div className='Card-img'>
        <img src="Katie.png" alt="Katie Image" width={176} className='katie-img' />
        <p className='SoldOut'>SOLD OUT</p> 
      </div>
      
      <div className='bottom-img'>
        <div className='bottom-img-1'>
          <img src="Star.png" alt="Red Star" width={15} />
          <p>5.0</p>
          <p className='bottom-img-2nd-p'> (6)·USA</p>
        </div>
        
        <div className='bottom-img-2'>
          <p className='bottom-img-2-p1'>Life lessons with Kate Zaferes</p>
          <p  className='bottom-img-2-p1'><strong>From $136 </strong>/ person</p>
        </div>       
      </div>

    </div>
    <div className='card-container'>



    <div className='Card-img'>
      <img src="Katie.png" alt="Katie Image" width={176} className='katie-img' />
      <p className='SoldOut'>SOLD OUT</p> 
    </div>
    
    <div className='bottom-img'>
      <div className='bottom-img-1'>
        <img src="Star.png" alt="Red Star" width={15} />
        <p>5.0</p>
        <p className='bottom-img-2nd-p'> (6)·USA</p>
      </div>
      
      <div className='bottom-img-2'>
        <p className='bottom-img-2-p1'>Life lessons with Kate Zaferes</p>
        <p  className='bottom-img-2-p1'><strong>From $136 </strong>/ person</p>
      </div>       
    </div>

    </div>
  </div>
  )
  
}

export default Card