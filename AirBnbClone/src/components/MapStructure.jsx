function MapStructured({coverImg, rating, reviewCount, location, title, price, openSpots}) {
  let badgeText
    if (openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    } 

  return(
    <div className="card">
      {badgeText && <div className='card--badge'>{badgeText}</div>}
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