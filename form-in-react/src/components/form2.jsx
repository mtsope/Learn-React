import React from 'react'
import '../components/form.css'

function Form2() {
    const [formData, setFormData] = React.useState(
        {
            firstName:"", 
            lastName:"", 
            email:"", 
            commnets:"",
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )

    console.log(formData.employment)

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked:value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        console.log(formData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input handleSubmit
                type="text" 
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input 
                type="text" 
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input 
                type="text" 
                placeholder="E-mail"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea
                value={formData.commnets}
                placeholder="Something you want"
                onChange={handleChange}
                name="commnets"
            />
            <input
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />
            <fieldset>
                <legend>Current employment status</legend>
                
                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br />

            <label htmlFor="favColor">What is your favorite color</label>
            <br />
            <select
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
                >
                <option value="">--Chhose--</option>
                <option value="red">Red</option>
                <option value="orage">Orange</option>
                <option value="black">Black</option>
                <option value="green">Green</option>
                <option value="pink">Pink</option>
                <option value="yellow">Yellow</option>
                <option value="blue">Blue</option>
            </select>
            <br />
            <br />
            <button> Submit</button>
        </form>
    )
}

export default Form2