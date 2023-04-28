import React from "react";
import { isMobile } from 'react-device-detect';

export default function Header() {
  function toggle() {
    document.body.classList.toggle('nav-open');
    document.body.classList.toggle('nav-height');
  }

  function close() {
    document.body.classList.remove('nav-open');
    document.body.classList.remove('nav-height');
  }

  const isHeader = () => {
    if (isMobile) {
      return { backgroundImage: `url('')` }
    } else {
      return
    }
  }

  return (
    <header id="top" style={isHeader()}>
      <a className="logo-link" href="."><img alt="Ha Anna" src="/res/logowebsm.webp" className="logo" /></a>

      <button className="nav-toggle" aria-label="toggle navigation" onClick={toggle}>
        <span className="hamburger"></span>
      </button>
      <nav id="nav">
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#top" className="nav-link">Home</a>
          </li>

          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={close}>About</a>
          </li>

          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={close}>Projects</a>
          </li>

          {/* <li className="nav-item">
            <a href="#blog" className="nav-link" onClick={close}>Blog</a>
          </li> */}

          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={close}>Let's talk</a>
          </li>

        </ul>
      </nav>
      <h1 id="title">
        <span className="block block-web">Hello, </span>
        <span className="block">I am </span>
        <span className="block">Ha </span>
        <span className="block">Anna</span>
      </h1>
      <p className="title-desc">front-end <span className="role">developer</span> and <span className="role">designer</span> based in Seoul, KR</p>

    </header>
  )
}