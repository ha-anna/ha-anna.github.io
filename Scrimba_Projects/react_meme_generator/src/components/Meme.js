import React from 'react'

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    async function fetchMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemes(data.data.memes)
    }
    fetchMemes()
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  function getMemeImage(event) {
    event.preventDefault()
    const randomNum = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNum].url
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

        <input
          type="text"
          id="top-text"
          name="topText"
          placeholder="Top text"
          onChange={handleChange}
          value={meme.topText}
        />

        <label htmlFor="bottom-text" className="sr-only">Bottom text</label>

        <input
          type="text"
          id="bottom-text"
          name="bottomText"
          placeholder="Bottom text"
          onChange={handleChange}
          value={meme.bottomText}
        />

        <button id="submit-button" onClick={getMemeImage}>Get a new meme image</button>
      </form>
      <div className="meme">
        <img src={meme.randomImage} alt="" className="meme-img" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>

    </main>
  )
}