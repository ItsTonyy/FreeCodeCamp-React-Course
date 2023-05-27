import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'
import arrayData from './components/arrayData'
import MapStructured from './components/MapStructure'


function App() {
  const CardsMap = arrayData.map(data => {
    return (<MapStructured
      key={data.id}
      title={data.title} 
      price={data.price}
      coverImg={data.coverImg}
      rating={data.stats.rating}
      reviewCount={data.stats.reviewCount}
      location={data.location}
      openSpots={data.openSpots}
      />)
  })


  return (
    <>
    <div className="container">
      <NavBar />
      <section className='cards-section'>
        {CardsMap}
      </section>

    </div>
    </>
  )
}

export default App
