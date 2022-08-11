
// const navbar =(
    
//         <nav>
//             <h1>Website</h1>
//             <ul>
//                 <li>Pricing</li>
//                 <li>About</li>
//                 <li>Conact</li>
//             </ul>
//         </nav>
//     );

function App() {
    const firstName = "Michela"
    const lastName = "Tsope"

    const data = new Date()
    const hours = data.getHours()
    let timeOfDay

    if(hours < 12) {
        timeOfDay = "morning"
    }else if(hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    return (
        <div>
            <h1>Hello {firstName}  {lastName} </h1>
            <h1>It is currently about {hours} o'clock</h1>
            <h2>Good {timeOfDay} </h2>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))

