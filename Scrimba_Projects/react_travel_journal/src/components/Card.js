import React from 'react'

export default function Card(props) {
  const { image, location, links: { googleMaps }, title, dates: { end }, dates: { start }, description } = props

  return (
    <div className="card">
      <img src={`../images/${image}`} alt="" className="card-img" />
      <div className="card-body">
        <div className="location-link">
          <span className="location">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            {location}</span>
          <a href={googleMaps} className="link">View on Google Maps</a>
        </div>
        <h2>{title}</h2>
        <span className="bold small">{start} - {end}</span>
        <p>{description}</p>
      </div>
    </div>
  )
}