import './App.css'
import Joke from './components/Joke'

function App() {
  return (
  <>
    <Joke
      setup= 'I got my daughter a fridge for her birthday.'
      punchline= 'I cant wait to see her face light up when she opens it.'
    />

    <Joke 
      setup= 'How did the hacker escape the police?'
      punchline= 'He just ransomware!'
    />

    <Joke 
      setup='Why dont pirates travel on mountain roads?'
      punchline='Scurvy.'
    />

    <Joke 
      setup='Why do bees stay in the hive in the winter?'
      punchline='Swarm.'
    />

    <Joke 
      setup='Whats the best thing about Switzerland?'
      punchline='I dont know, but the flag is a big plus!'
    />

  </>
  )

}

export default App
