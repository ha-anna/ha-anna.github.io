import React from "react";

export default function About() {

  return (
    <section aria-labelledby="about" className="about">
      <h2 id="about">About</h2>
      <div className="about-body">
        <div className="about-basic">
          <img className="about-img" src="/res/avatar.webp" alt="Avatar" />
          <h3 className="name">Ha Anna</h3>
          <p>Seoul, South Korea</p>
          <p>anna@haanna.com</p>
          <a href="https://ha-anna-cv.vercel.app/" target="_blank" className="btn" rel="noreferrer">View My CV</a>
        </div>

        <div className="about-more">
          <p className="about-desc">
            I have been a part of the Internet crowd all my life,
            making blog themes as a teenager, creating graphics
            for various causes and events, and even writing my master
            thesis about emoji. Because I enjoy solving problems and
            being creative, becoming a front-end designer was an easy
            choice to make. Currently, I am learning React.
          </p>

          <div className="hashtag-group">
            <span className="hashtag">#front_end</span>
            <span className="hashtag">#web_design</span>
            <span className="hashtag">#ux/ui</span>
            <span className="hashtag">#accessibility</span>
            <span className="hashtag">#graphic_design</span>
          </div>
          <h3>Skills</h3>
          <div className="hashtag-group">
            <span className="hashtag">#html</span>
            <span className="hashtag">#css</span>
            <span className="hashtag">#javascript</span>
            <span className="hashtag">#react</span>
          </div>
          <h3>Tools</h3>
          <div className="hashtag-group">
            <span className="hashtag">#illustrator</span>
            <span className="hashtag">#photoshop</span>
            <span className="hashtag">#figma</span>
            <span className="hashtag">#vs_code</span>
            <span className="hashtag">#github</span>
            <span className="hashtag">#tailwind_css</span>
            <span className="hashtag">#bootstrap</span>
            <span className="hashtag">#git</span>
          </div>
        </div>
      </div>
    </section >
  )
}