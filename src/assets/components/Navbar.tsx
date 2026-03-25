import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const { t, i18n } = useTranslation();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLang);
  };

  const navLinks = (
    <>
      <Link to="/" onClick={() => setMenuOpen(false)} style={linkStyle}>{t("nav.home")}</Link>
      <Link to="/projects" onClick={() => setMenuOpen(false)} style={linkStyle}>{t("nav.projects")}</Link>
      <Link to="/contact" onClick={() => setMenuOpen(false)} style={linkStyle}>{t("nav.contact")}</Link>
      <Link to="/about" onClick={() => setMenuOpen(false)} style={linkStyle}>{t("nav.about")}</Link>
      <Link to="/skills" onClick={() => setMenuOpen(false)} style={linkStyle}>{t("nav.skills")}</Link>
      <Link to="/experience" onClick={() => setMenuOpen(false)} style={linkStyle}>{t("nav.experience")}</Link>
    </>
  );

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: isMobile ? "15px 20px" : "20px 10%",
      backgroundColor: "#000",
      borderBottom: "1px solid #222",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>

      {/* LOGO */}
      <div style={{
        fontSize: isMobile ? "1.4rem" : "1.8rem",
        fontWeight: "bold",
        fontFamily: "monospace"
      }}>
        <span style={{ color: "#646cff" }}>&lt;</span>
        <span style={{ color: "#fff" }}>BerkoTech</span>
        <span style={{ color: "#646cff" }}> /&gt;</span>
      </div>

      {/* DESKTOP MENU */}
      {!isMobile && (
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          {navLinks}

          <button onClick={toggleLanguage} style={langBtnStyle}>
            {i18n.language === "tr" ? "EN" : "TR"}
          </button>
        </div>
      )}

      {/* MOBILE MENU BUTTON */}
      {isMobile && (
        <div onClick={() => setMenuOpen(!menuOpen)} style={{ cursor: "pointer" }}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>
      )}

      {/* MOBILE MENU */}
      {isMobile && menuOpen && (
        <div style={{
          position: "absolute",
          top: "70px",
          left: 0,
          width: "100%",
          backgroundColor: "#000",
          borderTop: "1px solid #222",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          padding: "20px 0"
        }}>
          {navLinks}

          <button onClick={toggleLanguage} style={langBtnStyle}>
            {i18n.language === "tr" ? "EN" : "TR"}
          </button>
        </div>
      )}

    </nav>
  );
}

// --- STYLES ---
const linkStyle: React.CSSProperties = {
  color: "#888",
  textDecoration: "none",
  fontSize: "1rem",
  transition: "0.3s"
};

const langBtnStyle: React.CSSProperties = {
  backgroundColor: "transparent",
  color: "#646cff",
  border: "1px solid #646cff",
  padding: "5px 12px",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "0.8rem"
};

export default Navbar;