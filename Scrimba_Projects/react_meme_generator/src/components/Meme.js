import React from 'react'
import memesData from '../memesData'

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImage, setAllMemeImage] = React.useState(memesData)


  function getMemeImage(event) {
    event.preventDefault()
    const { data: { memes } } = allMemeImage
    const randomNum = Math.floor(Math.random() * memes.length)
    const url = memes[randomNum].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  return (
    <main>
      <h1 className="sr-only">Meme Generator</h1>
      <form className="meme-generator">
        <label htmlFor="top-text" className="sr-only">Top text</label>
        <input type="text" id="top-text" name="top text" placeholder="Top text" />
        <label htmlFor="bottom-text" className="sr-only">Bottom text</label>
        <input type="text" id="bottom-text" name="bottom text" placeholder="Bottom text" />
        <button type="submit" id="submit-button" value="Submit" onClick={getMemeImage}>Get a new meme image</button>
      </form>
      <img src={meme.randomImage} alt="" className="meme-img" />

    </main>
  )
}