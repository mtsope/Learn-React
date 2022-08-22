import './Main.css'
import memesData from './memesData'
import React from 'react'
import image from '../../assets/Troll Face.png'

function Main(){

    //state for the photo
    const [meme, setMeme] = React.useState({
        topText: "",
        buttonText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    function getMemeImage() {

        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

        
    }
    return(
        <main>
            <div className="form">
                <input className="form--input" type="text" placeholder="Shou up" />
                <input className="form--input" type="text" placeholder="and take my money" />
                <button className="form--button" onClick={getMemeImage}> Get a new meme image</button>
            </div>
            <img src={meme.randomImage} className="meme--image" />
        </main>
       
    )
}

export default Main