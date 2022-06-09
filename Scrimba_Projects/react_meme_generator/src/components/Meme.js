import React from 'react'
import data from '../memesData'

export default function Meme() {
  function handleClick(event) {
    event.preventDefault()
    const { data: { memes } } = data
    const randomNum = Math.floor(Math.random() * memes.length)
    const url = memes[randomNum].url
    console.log(url)
  }

  return (
    <main>
      <h1 className="sr-only">Meme Generator</h1>
      <form className="meme-generator">
        <label htmlFor="top-text" className="sr-only">Top text</label>
        <input type="text" id="top-text" name="top text" placeholder="Top text" />
        <label htmlFor="bottom-text" className="sr-only">Bottom text</label>
        <input type="text" id="bottom-text" name="bottom text" placeholder="Bottom text" />
        <button type="submit" id="submit-button" value="Submit" onClick={handleClick}>Get a new meme image</button>
      </form>


    </main>
  )
}