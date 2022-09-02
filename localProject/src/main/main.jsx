import React  from 'react'
import '../main/main.css'

function Main(props)
{
    return(
        <main className={props.darkMode ? "dark": ""}>
            <h1 className="main--tittle"> Fun facts about Reeact </h1>
            <ul className="main-facts">
                <li>Was first release in 2013;</li>
                <li>Was originally created by Joran Walke;</li>
                <li>Has well over 100k stars on Github;</li>
                <li>Is maintained by Facebook;</li>
                <li> Powwes thousands of enterprise apps, including mobile apps.</li>
            </ul>
        </main>
    )
}

export default Main