import React from "react";
import './Header.css'
import logo from '../../assets/download.png'


function Header()
{
    return (
        <header>
        <nav className="nav">
            <img  src={logo} className="nav-logo" width="50px" alt="logo"/>
            <ul className="nav-items">
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ul>  
        </nav>
      
    </header>
    )
}


export default Header;