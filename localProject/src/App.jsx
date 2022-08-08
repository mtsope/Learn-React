import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from './main/main'
import Nav from './nav/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      
        <Nav />
        <Main />
    
    </div>
  )
}

export default App
