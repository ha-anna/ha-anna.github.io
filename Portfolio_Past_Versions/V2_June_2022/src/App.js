import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedCursor from "react-animated-cursor"

export default function App() {

  return (
    <>
      <AnimatedCursor
        innerSize={35}
        outerSize={0}
        color='254, 162, 159'
        outerAlpha={0.5}
        innerStyle={{
          border: '3px solid var(--black)'
        }}
        outerStyle={{
          mixBlendMode: 'screen'
        }}
        innerScale={0.7}
        outerScale={0}
        clickables={
          [
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.nav-link'
          ]}
      />
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}