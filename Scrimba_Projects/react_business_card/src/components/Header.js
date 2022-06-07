import React from "react";
import avatar from "../images/avatar.png"

export default function Header() {
  return (
    <header>
      <img src={avatar} alt="Laura Smith" className="header-avatar" />
    </header>
  )
}