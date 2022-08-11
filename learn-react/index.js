
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

    //Arrays of number
    const nums = [1, 2, 3, 4, 5]

    // Result
    //[1, 4, 9, 16, 25]

    const squares = nums.map(function(num) {
        return num * num
    })
    
    console.log(squares)

    //String Array
    const names = ["michela", "tsope", "virginia", "diva", "roga"]

    //Result
    //["Michela", "Tsope", "Virginia", "Diva", "Roga"]

    
    const capitalized = names.map((name) => {
        return name[0].toUpperCase() + name.slice(1)
    })
    
    console.log(capitalized)

    //with HTML tag
     //Result
    //["<p>Michela<p>", "<p>Tsope"<p>, "<p>Virginia<p>", "<p>Diva<p>", "<p>Roga<p>"]
    
    const capitalized_paragraph = names.map(mon => `<p>${mon}<p/>`)
    console.log(capitalized_paragraph)

    return (
        <div>
            <h1>Hello {firstName}  {lastName} </h1>
            <h1>It is currently about {hours} o'clock</h1>
            <h2>Good {timeOfDay} </h2>
            <h3>{squares}</h3>
            <h3>{capitalized}</h3>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))

