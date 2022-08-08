import React  from 'react'
import '../nav/nav.css'
import logo from '../assets/logo.png'

function Nav()
{
    return(
        <nav>
           <img className='nav-logo' src={logo} alt="logo" />
           <h3>ReactFacts</h3>
           <h4>React Course - Project1</h4>
        </nav>
    )
}

export default Nav