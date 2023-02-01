import React from 'react'
import MemeData from '../memeData.js'

function Meme() {


    const [memeInfo, setMemeInfo] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setallMemeImages] = React.useState(MemeData) 

    function getMemeImage(){
        const meme = allMemeImages.data.memes
        const ranNum = Math.floor(Math.random() * meme.length)
        const Url = meme[ranNum].url
        setMemeInfo(prevMeme => ({
            ...prevMeme,
            randomImage: Url
        }))
    
    }

  return (
    <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    onClick={getMemeImage}
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </div>
            
            <img src={memeInfo.randomImage} alt="" className='meme--image'/>
        </main>
  )
}

export default Meme