function MapStructured(props) {
  return(
    <div className="card">
            <img src={props.coverImg} alt="imagem" />
            <div className="card--stats">
                <img src="Star.png" className="starImg" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>


  

  )
}

export default MapStructured