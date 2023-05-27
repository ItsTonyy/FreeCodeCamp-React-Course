function MapStructured({coverImg, rating, reviewCount, location, title, price, openSpots}) {
  return(
    <div className="card">
      {openSpots === 0 && <div className='card--badge'>SOLD OUT</div>}
      <img src={coverImg} alt="imagem" className='card-img' />
      <div className="card--stats">
        <img src="Star.png" className="starImg" />
        <span>{rating}</span>
        <span className="gray">({reviewCount}) • </span>
        <span className="gray">{location}</span>
      </div>
      <p className='card-title'>{title}</p>
      <p><span className="bold">From ${price}</span> / person</p>
      </div>
  )
}

export default MapStructured