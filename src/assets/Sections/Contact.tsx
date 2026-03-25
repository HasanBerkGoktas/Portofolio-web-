import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3artf9o",
      "template_ywtos6a",
      e.currentTarget,
      "nL6jaTdOqqWGhfNhf"
    ).then(
      () => {
        alert(t("contact.success"));
        e.currentTarget.reset();
        setShowForm(false);
      },
      () => {
        alert(t("contact.error"));
      }
    );
  };

  return (
    <section
      style={{
        padding: isMobile ? "70px 20px" : "100px 10%",
        backgroundColor: "#000",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <h2 style={{ 
        fontSize: isMobile ? "1.8rem" : "2.5rem", 
        marginBottom: 15 
      }}>
        {t("contact.title")}
      </h2>

      <p style={{ 
        color: "#888", 
        marginBottom: isMobile ? 30 : 40,
        fontSize: isMobile ? "0.9rem" : "1rem"
      }}>
        {t("contact.description")}
      </p>

      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: isMobile ? 20 : 30,
        flexWrap: "wrap"
      }}>
        <a
          href="https://www.linkedin.com/in/hasan-berk-g%C3%B6kta%C5%9F-b6046b334/"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            color: "#888",
            textDecoration: "none"
          }}
        >
          <FaLinkedin size={isMobile ? 30 : 40} />
          <span style={{ fontSize: "0.85rem" }}>LinkedIn</span>
        </a>

        <a
          href="https://github.com/HasanBerkGoktas?tab=repositories"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            color: "#888",
            textDecoration: "none"
          }}
        >
          <FaGithub size={isMobile ? 30 : 40} />
          <span style={{ fontSize: "0.85rem" }}>GitHub</span>
        </a>

        <div
          onClick={() => setShowForm(!showForm)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            color: "#888",
            cursor: "pointer"
          }}
        >
          <FaEnvelope size={isMobile ? 30 : 40} />
          <span style={{ fontSize: "0.85rem" }}>Email</span>
        </div>
      </div>

      {showForm && (
        <form
          onSubmit={sendEmail}
          style={{
            marginTop: 40,
            maxWidth: 500,
            marginInline: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <input
            type="text"
            name="user_name"
            placeholder={t("contact.name")}
            required
            style={{
              padding: isMobile ? 10 : 12,
              background: "#111",
              border: "1px solid #333",
              color: "#fff",
              borderRadius: 6,
              fontSize: isMobile ? "0.9rem" : "1rem"
            }}
          />

          <input
            type="email"
            name="user_email"
            placeholder={t("contact.email")}
            required
            style={{
              padding: isMobile ? 10 : 12,
              background: "#111",
              border: "1px solid #333",
              color: "#fff",
              borderRadius: 6,
              fontSize: isMobile ? "0.9rem" : "1rem"
            }}
          />

          <textarea
            name="message"
            placeholder={t("contact.message")}
            required
            style={{
              padding: isMobile ? 10 : 12,
              background: "#111",
              border: "1px solid #333",
              color: "#fff",
              borderRadius: 6,
              height: 120,
              fontSize: isMobile ? "0.9rem" : "1rem"
            }}
          />

          <button
            type="submit"
            style={{
              padding: isMobile ? 10 : 12,
              background: "#646cff",
              border: "none",
              color: "#fff",
              borderRadius: 6,
              cursor: "pointer",
              fontSize: isMobile ? "0.9rem" : "1rem"
            }}
          >
            {t("contact.send")}
          </button>
        </form>
      )}

      <footer style={{ 
        marginTop: isMobile ? 60 : 80, 
        color: "#333",
        fontSize: isMobile ? "0.8rem" : "0.9rem"
      }}>
        © 2026 Hasan Berk
      </footer>
    </section>
  );
}

export default Contact;