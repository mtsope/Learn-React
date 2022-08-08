import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import MainContent from './components/main/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       
       <Header />
       <MainContent />
       <Footer />
       
    </div>
  )
}

export default App
