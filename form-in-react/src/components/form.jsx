import React from 'react'
import '../components/form.css'

function Form() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")



    console.log(firstName, lastName)

    function handleFirstNameChange(event) {
        setFirstName(event.target.value)
    }

    function handleLastNameChange(event) {
        setFirstName(event.target.value)
    }


    return(
        <form>
            <input type="text" placeholder="First Name"
                onChange={handleFirstNameChange}
            />
            <input type="text" placeholder="Last Name"
                onChange={handleLastNameChange}
            />
        </form>
    )
}

export default Form