import React from "react";
import { useTranslation } from "react-i18next";

const Experience: React.FC = () => {

  const { t } = useTranslation();

  const experiences = [
    {
      company: "Morphosium Yazılım ve Donanım LTD.AŞ",
      position: t("experience.job1Title"),
      period: "2025 - Günümüz",
      description: t("experience.job1Desc")
    },
  ];

  return (
    <section style={{ padding: "80px 10%", backgroundColor: "#000", color: "#fff" }}>
      
      <h2
        style={{
          fontSize: "2.5rem",
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
              padding: "25px",
              borderRadius: "15px",
              borderLeft: "4px solid #646cff",
              transition: "transform 0.3s ease",
              cursor: "default"
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "translateX(10px)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "translateX(0)")}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "10px"
              }}
            >
              <h3 style={{ color: "#646cff", margin: 0 }}>{exp.position}</h3>
              <span style={{ color: "#888", fontSize: "0.9rem" }}>{exp.period}</span>
            </div>

            <h4 style={{ color: "#eee", marginBottom: "10px" }}>{exp.company}</h4>

            <p style={{ color: "#aaa", lineHeight: "1.5", margin: 0 }}>
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;