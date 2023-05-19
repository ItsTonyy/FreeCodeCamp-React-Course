function Header() {
  return (
    <header>
      <nav>
        <img src='/images/react-logo.png' width='90' height='80' />
      </nav>

      <h1>Reasons I'm excited to learn React</h1>
    </header>
  )
}

function Main() {
  return (
    <main>
      <ol>
        <li>It's a popular library, so you'll be able to fit in with the popular kids.</li>

        <br></br>

        <li>I'm more likely to get a job if I know react</li>
      </ol>  

      <br></br>
      </main>
  )
}

function Footer() {
  return (
    <footer>
      © 2023 TerraNova Development. All rights reserverd.
    </footer>
  )
}



function Page() { 
  return (
    <div>
      <Header />
      <Main />
      <Footer />  
    </div>
  )
}

ReactDOM.render(

  <Page />,
  document.getElementById('root')
)