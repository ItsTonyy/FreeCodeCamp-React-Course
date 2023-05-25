import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'

function App() {
  return (
    <>
    <div className="container">
      <NavBar />
      <Hero />
      <Card 
        img = {"katie-zaferes.png"}
        rating = {"5.0"}
        reviewCount = {6}
        country = {'Brazil'}
        title = {"Life Lessons with Katie Zaferes"}
        price = {133}
      />      
    </div>
    </>
  )
}

export default App
