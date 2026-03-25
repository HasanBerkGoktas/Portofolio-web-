import Navbar from "./assets/components/Navbar";
import About from "./assets/Sections/About";
import Contact from "./assets/Sections/Contact";
import Hero from "./assets/Sections/Hero";
import Projects from "./assets/Sections/Project";
import Experience from "./assets/Sections/Experience";
import Skills from "./assets/Sections/Skills";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./assets/Sections/i18n/i18n";

// 🔥 SAYFA DEĞİŞİNCE EN ÜSTE ATAR
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <>
      <Navbar />

      <main
        style={{
          backgroundColor: "#000",
          color: "#fff",
          minHeight: "100vh",
          paddingTop: "70px" // 🔥 navbar üstüne binmesin diye
        }}
      >
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;