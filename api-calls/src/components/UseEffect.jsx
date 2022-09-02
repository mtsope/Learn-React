import React from 'react'


function UseEffect() {

    const [starWarData, setStarWarData] = React.useState({})
    const [count, setCount] = React.useState(1)

    // React.useEffect(() => {
    //     console.log("Effect function ran")
    // }, [count])

    React.useEffect(function() {
        fetch("https://swapi.dev/api/people/1")
            .then(rest => rest.json())
            .then(data => setStarWarData(data))
            }, [])

    return (
        <div>
            <h2>This count is {count}</h2>
            <pre>{JSON.stringify(starWarData, null, 2)}</pre>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get next character</button>
        </div>
    )
}
export default UseEffect