import Navbar from "./Components/navbar";
import Home from "./Components/Home";
import About from "./Components/about";
import Contact from "./Components/contact";
import Art from "./Components/art";
import GameDev from "./Components/GameDev";
import Programming from "./Components/programming";
import Projects from "./Components/projects";
import RenderingAndAnim from "./Components/RenderingAndAnim";
import ScrollToTop from "./Components/ScrollToTop";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/programming" element={<Programming />} />
        <Route path="/gamedev" element={<GameDev />} />
        <Route path="/renderingandanim" element={<RenderingAndAnim />} />
        <Route path="/art" element={<Art />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;