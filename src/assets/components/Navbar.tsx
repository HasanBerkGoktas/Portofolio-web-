import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const linkStyle: React.CSSProperties = {
  color: "#888",
  textDecoration: "none",
  fontSize: "1rem",
  transition: "0.3s"
};

function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 10%",
        backgroundColor: "#000",
        borderBottom: "1px solid #222",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}
    >
      <div
        style={{
          fontSize: "1.8rem",
          fontWeight: "bold",
          fontFamily: "monospace"
        }}
      >
        <span style={{ color: "#646cff" }}>&lt;</span>
        <span style={{ color: "#fff" }}>BerkoTech</span>
        <span style={{ color: "#646cff" }}> /&gt;</span>
      </div>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        
        <Link to="/" style={linkStyle}>{t("nav.home")}</Link>
        <Link to="/projects" style={linkStyle}>{t("nav.projects")}</Link>
        <Link to="/contact" style={linkStyle}>{t("nav.contact")}</Link>
        <Link to="/about" style={linkStyle}>{t("nav.about")}</Link>
        <Link to="/skills" style={linkStyle}>{t("nav.skills")}</Link>
        <Link to="/experience" style={linkStyle}>{t("nav.experience")}</Link>

        <button
          onClick={toggleLanguage}
          style={{
            backgroundColor: "transparent",
            color: "#646cff",
            border: "1px solid #646cff",
            padding: "5px 12px",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "0.8rem",
            marginLeft: "10px",
            transition: "0.3s"
          }}
        >
          {i18n.language === "tr" ? "EN" : "TR"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;