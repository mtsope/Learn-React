import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from './main/main'
import Nav from './nav/Nav'

function App() {
  // const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = React.useState(true)

  function toogleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    
    <div className="App">
      
        <Nav 
            darkMode={darkMode}
            toogleDarkMode={toogleDarkMode}
          />
        <Main
          darkMode={darkMode} 
        />
    </div>
  )
}

export default App
