import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import API from './components/Api'
import UseEffect from './components/UseEffect'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <UseEffect />
    </div>
  )
}

export default App
