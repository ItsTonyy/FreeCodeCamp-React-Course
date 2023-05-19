import React from 'react'

function Header() {
  return (
    <header>
      <nav>
        <img src='/images/react-logo.png'/>

        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <h1>Reasons I'm excited to learn React</h1>
    </header>
  )
}

export default Header