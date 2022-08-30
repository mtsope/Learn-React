import React from 'react'
import './signup_pratice.css'

function Signup_pratice() {
  const [formData, setFormData] = React.useState (

    {
        email:"",
        password:"",
        passwordConfirm:"",
        okayToEmail: true   
    }
  
  )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
                ...prevFormData,
                [name]: type === "checkbox" ? checked: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        }
        
        if(formData.okayToEmail) {
            console.log("Thanks for signed up for our newsletter!")
        }
    }

    return(
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    onChange={handleChange}
                    className="form--input"
                    name="passwordConfirm"
                    value={formData.passwordConfirm}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                        name="okayToEmail"
                        value={formData.okayToEmail}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
    
}
export default Signup_pratice
