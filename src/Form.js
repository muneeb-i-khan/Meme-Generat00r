import React from 'react'
import memesData from './memes.js'
import './App.css'
const Form = () => {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    function getMemeImage(){
        const memesArray =  allMemeImages.data.memes
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
    return (

        <div>
        <div className='form'>
            <div className='inputs'>
                <input placeholder='Top-text'
                type="text"
                className="form--input"
                name="topText"
                value={meme.topText}
                onChange={handleChange}></input>
                <input placeholder='Bottom-text'
                type="text"
                className="form--input"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}></input>
            </div>

            <button className='btn' onClick={getMemeImage}>Get new meme!</button>
            
        </div>
        <div className="meme">
            <div className='image-container'>
            <img src={meme.randomImage} className="meme-image"></img>
            </div>
        
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
    </div>
    </div>
   
    )
}

export default Form
