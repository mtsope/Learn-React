import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './componets/nav/Nav'
import Hero from './componets/hero/Hero'
import Card from './componets/card/Card'
import data from './componets/card/data'
import photo_card from './assets/img_card.png'

function App() {
  const [count, setCount] = useState(0)

  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        img={photo_card}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
    />
    )
  })
  return (
    <div className="App">
      <Nav />
      <Hero />
        {cards}
    </div>
  )
}

export default App
