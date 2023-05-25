function Card({img, rating, reviewCount, country, title, price}) {
  return (
  <div className='outer-container'>
    <div className='card-container'>
      <div className='Card-img'>
        <img src={img} alt="Katie Image" width={176} className='katie-img' />
        <p className='SoldOut'>SOLD OUT</p> 
      </div>
      
      <div className='bottom-img'>
        <div className='bottom-img-1'>
          <img src="Star.png" alt="Red Star" width={15} />
          <p>{rating}</p>
          <p className='bottom-img-2nd-p'> {reviewCount}·{country}</p>
        </div>
        
        <div className='bottom-img-2'>
          <p className='bottom-img-2-p1'>{title}</p>
          <p  className='bottom-img-2-p1'><strong>From {price} </strong>/ person</p>
        </div>       
      </div>

    </div>
  </div>
  )
  
}

export default Card