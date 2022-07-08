import React from "react";

export default function Die(props) {
  const styles = {
    background: props.isHeld ? "var(--die-match)" : "var(--white)"
  }


  return (
    <div className="die" style={styles} onClick={props.holdDice}>{props.value}</div>
  )
}