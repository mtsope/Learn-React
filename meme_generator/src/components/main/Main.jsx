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
    const [allMemeImages, setAllMemeImages] = React.useState([])
    
    // React.useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res => res.json())
    //         .then(data => setAllMemeImages(data.data.memes))
    // }, [])

    React.useEffect(() => {
        async function getMemes() {

            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data.data.memes)
        }
        getMemes()
    }, [])


    function getMemeImage() {

        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }


    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
           
    }
    return(
        <main>
            <div className="form">
                <input 
                    className="form--input" 
                    type="text" 
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />

                <input 
                    className="form--input" 
                    type="Button text" 
                    placeholder="and take my money" 
                    name="buttonText"
                    value={meme.buttonText}
                    onChange={handleChange}
                />

                <button 
                    className="form--button"
                    onClick={getMemeImage}>

                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text button">{meme.buttonText}</h2>
            </div>
        </main>
       
    )
}

export default Main