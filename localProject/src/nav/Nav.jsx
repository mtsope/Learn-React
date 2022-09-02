import React  from 'react'
import '../nav/nav.css'
import logo from '../assets/logo.png'

function Nav(props)
{
    return(
        <nav className={props.darkMode ? "dark": ""} >
           <img className='nav-logo' src={logo} alt="logo" />
           <h3 className="nav--logo--text">ReactFacts</h3>

           <div className="toogler">
            <p className="toggler--light">Light</p>

            <div className="toogler--slider"
                onClick={props.toogleDarkMode}>
                <div className="toggler--slider--circle"></div>
            </div>
            <p className="toggler--dark">Dark</p>
           </div>
        </nav>
    )
}

export default Nav