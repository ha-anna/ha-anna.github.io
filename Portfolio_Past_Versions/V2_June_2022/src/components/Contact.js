import React from "react";

export default function Contact() {
  return (
    <section aria-labelledby="contact" className="contact">
      <h2 id="contact">Let's talk</h2>
      <div className="contact-body">
        <p>Have a question or want to work together?</p>
        <a href="mailto:anna@haanna.com" target="_blank" className="btn" rel="noreferrer">Contact Me</a>
      </div>
    </section>
  )
}