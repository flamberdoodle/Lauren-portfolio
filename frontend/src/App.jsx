import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

// my pages ------------------------------
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Art from './Components/Art'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import GameDev from './Components/GameDev'
import Programming from './Components/programming'
import Projects from './Components/Projects'
import RenderingAndAnim from './Components/RenderingAndAnim'
import Skills from './Components/Skills'
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Art />
      <Experience />
      <GameDev />
      <Programming />
      <Projects />
      <RenderingAndAnim />
      <Skills />
      <Footer />
    </>
  )
}

export default App