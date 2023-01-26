import React from 'react'
import MemeData from '../memeData.js'

function handleMemeGenBtn() {
    const meme = MemeData.data.memes
    const ranNum = Math.floor(Math.random() * meme.length)
    const Url = meme[ranNum].url

    console.log(Url)
} 

function Meme() {
  return (
    <main>
            <form className="form">
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
                    onClick={handleMemeGenBtn}
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
  )
}

export default Meme