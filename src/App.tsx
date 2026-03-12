import Navbar from "./assets/components/Navbar";
import About from "./assets/Sections/About";
import Contact from "./assets/Sections/Contact";
import Hero from "./assets/Sections/Hero";
import Projects from "./assets/Sections/Project";
import Experience from "./assets/Sections/Experience";
import Skills from "./assets/Sections/Skills";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/Sections/i18n/i18n"; // 1. BU SATIR SİHRİ YAPAN SATIR, MUTLAKA OLMALI

function App() {
  return (
    <BrowserRouter>
      {/* Navbar her zaman en üstte kalır */}
      <Navbar />

      <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;