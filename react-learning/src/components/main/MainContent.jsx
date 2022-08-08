import React from "react"
import './MainContent.css'
import mainImage from "../../assets/iscon2.png"

 function MainContent()
{
    return (
        <div>
            <h1>Fun facts about React</h1>
            <img src={mainImage}  width="150px" alt="image" />
            <ol type="square">
                <li>Was first release in 2013</li>
                <li>About</li>
                <li>Was originally created by Joran Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li> Powwes thousands of enterprise apps, including mobile apps</li>
            </ol>
        </div>
    )
}

export default MainContent