import React from "react";


export default function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "sold out"
  } else if (props.location === "Online") {
    badgeText = "online"
  } else if (props.openSpots > 0) {
    badgeText = `${props.openSpots} left`
  }

  return (
    <section className="card">
      <div className="card--head">
        <img src={`./images/${props.coverImg}`} alt="" className="card--image" />
        <span className="card--state">{badgeText}</span>
      </div>
      <div className="card--body">
        <div className="card--rating">
          <img src="./images/star.png" alt="" className="card--star_icon" />
          <p>{props.stats.rating} <span className="grey">({props.stats.reviewCount}) • {props.location}</span></p>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
      </div>
    </section>
  )
}