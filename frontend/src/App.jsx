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
import ScrollToTop from './Components/ScrollToTop'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App