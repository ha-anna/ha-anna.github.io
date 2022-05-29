const apiKey = 'fc0d64e0'
let page = 1

const $search = document.querySelector('form')
// @ts-ignore
const $searchButton = document.getElementById('search-button')
const $searchBar = document.getElementById('search-input')
const $mainPageDiv = document.getElementById('movies')
// @ts-ignore
const $watchlistPageDiv = document.getElementById('movies-watchlist')


let moviesFetched = []

// 1. listen for search query input and fetch API based on the input

$search.addEventListener('submit', event => {
  event.preventDefault()
  // @ts-ignore
  getDatabase($searchBar.value)
  resetPageAfterSearch()
})

function resetPageAfterSearch() {
  $mainPageDiv.innerHTML = ''
  moviesFetched = []
}

// 2. fetch movies' ID based on the search input + in case of issue display alert message

async function getDatabase(movie) {
  const res = await fetch(`https://www.omdbapi.com/?s=${movie}&page=${page}&apikey=${apiKey}`)
  const data = await res.json()

  // @ts-ignore
  if (!$searchBar.value) {
    $mainPageDiv.innerHTML = `<class="placeholder-text">Please provide an input for your search.</p>`
  } else if (data.Response === 'False') {
    $mainPageDiv.innerHTML = `<p class="placeholder-text">Unable to find what you’re looking for. <br> Please try another search.</p>`
  } else {
    //console.log(data)
    const dataExtracted = data.Search.map(movie => movie.imdbID)
    getMovies(dataExtracted)
    // @ts-ignore
    $searchBar.value = ''
  }
}

// 3. fetch movies based on the imdbID and push them into array 

async function getMovies(ids) {
  for (let id of ids) {
    const res = await fetch(`https://www.omdbapi.com/?i=${id}&type=movie&apikey=${apiKey}`)
    const data = await res.json()

    try {
      moviesFetched.push(
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
      displayMovies(moviesFetched, $mainPageDiv)
      
    } catch (err) {
      console.error(err)
      $mainPageDiv.innerHTML = `<p class="placeholder-text">Unable to find what you’re looking for. <br> Please try another search.</p>`
    } 
  }
}

// 4. display stored movies on the page

function displayMovies(movies, location) {
  let html = ""

  for (let movie of movies ) {
    html += `
      <div class="movie-div">
        <img src="${!movie.properties.poster || movie.properties.poster === 'N/A' ?
        'https://www.cronobierzo.es/wp-content/uploads/2020/01/no-image.jpg' :
        movie.properties.poster}" alt="Poster of ${movie.properties.title}" alt="Poster of ${movie.properties.title}">

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
            ${isAdded(movie.id) ?
              `<i class="fa fa-plus-circle" aria-hidden="true"></i> Add to Watchlist` :
              `<i class="fa fa-minus-circle" aria-hidden="true"></i> Remove from Watchlist`}
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
      if (isAdded(button.id)) {
        button.addEventListener("click", addToWatchlist)
      } else {
        button.addEventListener("click", removeFromWatchlist)
      }
  })

}

// 5. upon clicking +Watchlist adds movie to the local storage + changes the button


function addToWatchlist() {
    localStorage.setItem(this.id, this.id)
    this.innerHTML = `<i class="fa fa-minus-circle" aria-hidden="true"></i> Remove from Watchlist`
    this.removeEventListener('click', addToWatchlist)
    this.addEventListener('click', removeFromWatchlist)
}

// 6. upon clicking -Remove removes movie from the local storage + changes the button

function removeFromWatchlist() {
  localStorage.removeItem(this.id)
  this.innerHTML = `<i class="fa fa-plus-circle" aria-hidden="true"></i> Add to Watchlist`
  this.removeEventListener('click', removeFromWatchlist)
  this.addEventListener('click', addToWatchlist)
}

// 6. checking local storage for existing elements

function isAdded(id) {
  if (localStorage.getItem(id) === null) {
    return true
  } else {
    return false
  }
}
