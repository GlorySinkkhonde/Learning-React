import React from 'react'
import MemeData from '../memeData.js'

function Meme() {

    const [MemeImg, setMemeImg] = React.useState('0')

    function getMemeImage(){

        const meme = MemeData.data.memes
        const ranNum = Math.floor(Math.random() * meme.length)
        setMemeImg(meme[ranNum].url)
    
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
            
            <img src={MemeImg} alt="" className='meme--image'/>
        </main>
  )
}

export default Meme