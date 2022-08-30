import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from './components/Main/main'
import AppCount from './components/Accounting/AppCont'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AppCount />
    </div>
  )
}

export default App
