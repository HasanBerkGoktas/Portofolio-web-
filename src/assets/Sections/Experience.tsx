import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Experience: React.FC = () => {

  const { t } = useTranslation();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const experiences = [
    {
      company: "Morphosium Yazılım ve Donanım LTD.AŞ",
      position: t("experience.job1Title"),
      period: "2025 - Günümüz",
      description: t("experience.job1Desc")
    },
  ];

  return (
    <section style={{ 
      padding: isMobile ? "60px 20px" : "80px 10%", 
      backgroundColor: "#000", 
      color: "#fff" 
    }}>
      
      <h2
        style={{
          fontSize: isMobile ? "1.8rem" : "2.5rem",
          textAlign: "center",
          marginBottom: "40px",
          color: "#fff"
        }}
      >
        {t("experience.title")}
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#111",
              padding: isMobile ? "20px" : "25px",
              borderRadius: "15px",
              borderLeft: "4px solid #646cff",
              transition: "0.3s",
              cursor: "default"
            }}
            onMouseOver={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "translateX(10px)";
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "space-between",
                gap: isMobile ? "5px" : "0",
                marginBottom: "10px"
              }}
            >
              <h3 style={{ 
                color: "#646cff", 
                margin: 0,
                fontSize: isMobile ? "1.1rem" : "1.3rem"
              }}>
                {exp.position}
              </h3>

              <span style={{ 
                color: "#888", 
                fontSize: "0.9rem" 
              }}>
                {exp.period}
              </span>
            </div>

            <h4 style={{ 
              color: "#eee", 
              marginBottom: "10px",
              fontSize: isMobile ? "1rem" : "1.1rem"
            }}>
              {exp.company}
            </h4>

            <p style={{ 
              color: "#aaa", 
              lineHeight: "1.5", 
              margin: 0,
              fontSize: isMobile ? "0.9rem" : "1rem"
            }}>
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;