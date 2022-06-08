import React from 'react'

export default function Card(props) {
  console.log(props)
  return (
    <div className="card--body">
      <img src={`../images/${props.image}`} alt="" className="card--img" />
      <div className="card--data">
        <div className="card--data__location">
          <span className="location">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            {props.location}</span>
          <a href={props.links.googleMaps} className="link"><button type="button">View on Google Maps</button></a>
        </div>
        <h2>{props.title}</h2>
        <span className="bold small">{props.dates.start} - {props.dates.end}</span>
        <p className="card--description">{props.description}</p>

      </div>
    </div>
  )
}