import { useState } from 'react'
import './App.css'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="panel">       
            <Header />
            <Main />
            <Footer /> 
    </div>
  )
}

export default App
