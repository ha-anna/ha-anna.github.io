import React from "react";

export default function Footer() {
  return (
    <footer id="footer" aria-label="Footer">
      <ul className="footer-nav">
        <li className="nav-item">
          <a href="https://www.linkedin.com/in/itshaanna/" target="_blank" rel="noreferrer" className="sns-link">
            <img src="/res/iconlinkedin.webp" alt="Linkedin" className="sns-img" />
          </a>
        </li>
        <li className="nav-item">
          <a href="https://github.com/its-haanna" target="_blank" rel="noreferrer" className="sns-link">
            <img src="/res/icongithub.webp" alt="Github" className="sns-img" />
          </a>
        </li>
        <li className="nav-item">
          <a href="https://codepen.io/haanna" target="_blank" rel="noreferrer" className="sns-link">
            <img src="/res/iconcodepen.webp" alt="Codepen" className="sns-img" />
          </a>
        </li>
        <li className="nav-item">
          <a href="https://www.instagram.com/haanna.dev/" target="_blank" rel="noreferrer" className="sns-link">
            <img src="/res/iconinstagram.webp" alt="Instagram" className="sns-img" />
          </a>
        </li>
      </ul>
      <span className="small">Ha Anna &copy; 2022</span>
    </footer>
  )
}