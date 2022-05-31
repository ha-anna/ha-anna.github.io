const cryptoName = 'bitcoin'
const photoGenre = 'cat'
const timeStyle = 'short'
const fallbackImg = 'https://images.unsplash.com/photo-1491036775913-3fbc5c455842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTM4NDAyNTk&ixlib=rb-1.2.1&q=80&w=1080'
const units = 'metric'

// 1. getting wallpaper from unsplash

fetch(`https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=${photoGenre}`)
    .then(res => {
    if (!res.ok) {
      throw Error("An issue with API occurred.")
    }
    console.log(res.status)
    return res.json()
  })
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
		    document.getElementById("author").innerHTML = `<p>By: <a href="${data.user.links.html}" target="_blank">${data.user.name}</a></p>`
    }).catch(err => {
      document.body.style.backgroundImage = `url(${fallbackImg})`
    })

// 2. getting dogecoin info

fetch(`https://api.coingecko.com/api/v3/coins/${cryptoName}`)
  .then(res => {
    if (!res.ok) {
      throw Error("An issue with API occured.")
    }
    console.log(res.status)
    return res.json()
  })
  .then(data => {
    document.getElementById('crypto-top').innerHTML = `
          <img src="${data.image.small}" class="crypto-icon" alt="">
          <h2>
            ${data.name}
          </h2>`
    
    document.getElementById('crypto-data').innerHTML = `
      <p><b>Current:</b> $${data.market_data.current_price.usd}</p>
      <p><b>High:</b> $${data.market_data.high_24h.usd}</p>
      <p><b>Low:</b> $${data.market_data.low_24h.usd}</p>
    `
    console.log(data)
    
  })
  .catch(err => console.error(err))

// 3. getting current time

function getCurrentTime() {
const date = new Date()
const formattedDate = date.toLocaleTimeString("en-us", {timeStyle: `${timeStyle}`})
document.getElementById('time').innerHTML = `<h1>${formattedDate} </h1>`
}

setInterval(getCurrentTime, 1000)

// 4. getting geolocation

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};


navigator.geolocation.getCurrentPosition(position => {
  console.log(position)
  // const lat = position.coords.latitude
  // const lon = position.coords.longitude
  const lat = 37.5665  // hard-coded because of inaccuracy
   const lon = 126.9780

  fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}`)
    .then(res => {
      if (!res.ok) {
        throw Error("Weather data not available")
      }
      return res.json()
    })
    .then(data => {
      console.log(data)
      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

      document.getElementById('weather').innerHTML = `
      <div class="weather-top">
        <h2>Weather</h2>
        <img src="${iconUrl}" alt="" class="weather-icon">
      </div>
      <p><b>Location:</b> ${data.name}</p>
      <p><b>Temp:</b> ${data.main.temp.toFixed()}°C</p>
      <p><b>Feels like:</b> ${data.main.feels_like.toFixed()}°C</p>
      <p><b>Sky:</b> ${data.weather[0].main}</p>
      `
    })
    .catch(err => console.error(err))

});



