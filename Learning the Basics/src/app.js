import React from 'react'
import { ReactDOM } from 'react-dom'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


function App() { 
  return (
    <div>
      <Header />
      <Main />
      <Footer />  
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)