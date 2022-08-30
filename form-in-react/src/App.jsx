import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/form'
import Form2 from './components/form2'
import Signup_pratice from './components/signup_pratice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Signup_pratice />
    </div>
  )
}

export default App
