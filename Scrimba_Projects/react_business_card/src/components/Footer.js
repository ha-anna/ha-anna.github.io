import React from "react";
import twitterIcon from "../images/twitter.png"
import facebookIcon from "../images/fb.png"
import instagramIcon from "../images/ig.png"
import githubIcon from "../images/gh.png"

export default function Footer() {
  return (
    <footer>
      <a href="/#">
        <button type="button" className="footer-btn">
          <img src={twitterIcon} alt="Twitter" className="twitter-icon icon" />
        </button>
      </a>
      <a href="/#">
        <button type="button" className="footer-btn">
          <img src={facebookIcon} alt="Facebook" className="fb-icon icon" />
        </button>
      </a>
      <a href="/#">
        <button type="button" className="footer-btn">
          <img src={instagramIcon} alt="Instagram" className="ig-icon icon" />
        </button>
      </a>
      <a href="/#">
        <button type="button" className="footer-btn">
          <img src={githubIcon} alt="Github" className="gh-icon icon" />
        </button>
      </a>
    </footer>
  )
}