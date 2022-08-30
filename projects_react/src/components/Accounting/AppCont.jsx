import React  from "react"
import Count from './Count'
import './AppCont.css'

function AppCont() {
    const [count, setCount] = React.useState(0)


    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div className="counter">
            <button className="minus" onClick={subtract}>-</button>
            <Count number={count} />
            <button className="plus" onClick={add}>+</button>
        </div>
    )
}

export default AppCont