import React from "react"

function API() {
    const [starWarData, setStarWarData] = React.useState({})

    console.log("Component rendered")

    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => console.log(data))


        return (
            <div>
                <pre>{JSON.stringify(starWarData, null, 2)}</pre>
            </div>
        )

}

export default API