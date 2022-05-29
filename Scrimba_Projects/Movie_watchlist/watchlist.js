const apiKey = 'fc0d64e0'
const $watchlistDiv = document.getElementById('movies-watchlist')
const watchlist = []
const watchlistFetched = []

// 1. check local storage state

if (localStorage.length > 0) {
  getStorageKeys()
  $watchlistDiv.classList.remove('center')
  getMovieList(watchlist)
} else {
  $watchlistDiv.classList.add('center')
  $watchlistDiv.innerHTML = `
    <p class="placeholder-text">Your watchlist is looking a little empty...</p>
      <a class="explore-link" href="./index.html"><i class="fa fa-plus-circle" aria-hidden="true"></i> Let's add some
        movies!</a>
  `
}

// 2. get local storage keys and put them into an array

function getStorageKeys() {
  for (let i = 0; i < localStorage.length; i++) {
    watchlist.push(localStorage.getItem( localStorage.key( i ) ) );
  }
}

// 2. fetch the items

async function getMovieList(ids) {
  for (let id of ids) {
    const res = await fetch(`https://www.omdbapi.com/?i=${id}&type=movie&apikey=${apiKey}`)
    const data = await res.json()

    try {
      watchlistFetched.push(
        {
          id: `${data.imdbID}`,
          properties: {
            title: `${data.Title}`,
            rating: `${data.Ratings[0].Value}`,
            runtime: `${data.Runtime}`,
            genre: `${data.Genre}`,
            plot: `${data.Plot}`,
            poster: `${data.Poster}`
          }
        }
      )
      displayWatchlist(watchlistFetched, $watchlistDiv)
      
    } catch (err) {
      console.error(err)
      $watchlistDiv.innerHTML = `<p class="placeholder-text">Whoops! A glitch in the Matrix has occurred. <br> Please try again.</p>`
    }
  }
}

// 3. display the watchlist

function displayWatchlist(movies, location) {
  let html = ""

  for (let movie of movies ) {
    html += `
      <div class="movie-div">
        <img src="${!movie.properties.poster || movie.properties.poster === 'N/A' ? 'https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg' : movie.properties.poster }" alt="Poster of ${movie.properties.title}">

        <div class="movie-description">
          <div class="rating-title">
            <h2>${movie.properties.title}</h2>
            <p class="rating"><i class="fa-solid fa-star"></i>
             ${movie.properties.rating.slice(0, 3)}</p>
          </div>

          <div class="time-genre-fav">
            <p>${movie.properties.runtime}</p>
            <p>${movie.properties.genre}</p>
            <button class="watchlist" id="${movie.id}">
            <i class="fa fa-minus-circle" aria-hidden="true"></i> Remove from Watchlist
            </button>
          </div>

          <p class="description">${movie.properties.plot}</p>
        </div>
    </div>
    <hr>
  `
  }
  location.innerHTML = html
  const watchlistBtn = document.querySelectorAll(".watchlist")
    watchlistBtn.forEach(button => {
        button.addEventListener("click", removeFromWatchlist)
  })
}

// 6. upon clicking -Remove removes movie from the local storage + refreshes the page

function removeFromWatchlist() {
  localStorage.removeItem(this.id)
  this.innerHTML = `<i class="fa fa-plus-circle" aria-hidden="true"></i> Removing from Watchlist...`
  this.removeEventListener('click', removeFromWatchlist)
  location.reload();
}