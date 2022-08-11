import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Contact from './components/contact/contact'
import img_contact from './assets/img_card.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="contacts">
        <Contact 
          img= {img_contact}
          name= "Michela"
          phone= "(+258) 833230921"
          email= "michelatsope@sapo.com"
        />
        <Contact
           img= {img_contact}
           name= "Michela"
           phone= "(+258) 833230921"
           email= "michelatsope@sapo.com"
            />
          <Contact
           img= {img_contact}
           name= "Michela"
           phone= "(+258) 833230921"
           email= "michelatsope@sapo.com"
            />
            <Contact
           img= {img_contact}
           name= "Michela"
           phone= "(+258) 833230921"
           email= "michelatsope@sapo.com"
            />
    </div>
  )
}

export default App
