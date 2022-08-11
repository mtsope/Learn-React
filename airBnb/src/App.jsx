import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './componets/nav/Nav'
import Hero from './componets/hero/Hero'
import Card from './componets/card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
       <Hero />
      <Card />
    </div>
  )
}

export default App
