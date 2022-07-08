import React from "react";

export default function Die(props) {
  const styles = {
    color: props.isHeld ? "var(--die-match)" : ""
  }


  function diceIcon() {
    switch (props.value) {
      case 1:
        return { __html: '<i class="fa-solid fa-dice-one"></i>' }
      case 2:
        return { __html: '<i class="fa-solid fa-dice-two"></i>' }
      case 3:
        return { __html: '<i class="fa-solid fa-dice-three"></i>' }
      case 4:
        return { __html: '<i class="fa-solid fa-dice-four"></i>' }
      case 5:
        return { __html: '<i class="fa-solid fa-dice-five"></i>' }
      case 6:
        return { __html: '<i class="fa-solid fa-dice-six"></i>' }
    }
  }

  return (
    <div className="die" style={styles} onClick={props.holdDice} dangerouslySetInnerHTML={diceIcon()}></div>
  )
}