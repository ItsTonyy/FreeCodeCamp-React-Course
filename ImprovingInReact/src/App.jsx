import { useState } from 'react'
import './App.css'
import MainContent from './components/MainContent'
import NavBar from './components/NavBar'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(prevUiMode => !prevUiMode)
  }


  return (
    <>
      <NavBar 
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      />
      <MainContent darkMode={darkMode}/>
    </>
  )
}

export default App
