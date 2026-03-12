import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const iconContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 10,
  color: "#888",
  textDecoration: "none",
  cursor: "pointer",
};

const labelStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  fontWeight: 500,
};

const inputStyle: React.CSSProperties = {
  padding: 12,
  background: "#111",
  border: "1px solid #333",
  color: "#fff",
  borderRadius: 6,
};

const buttonStyle: React.CSSProperties = {
  padding: 12,
  background: "#646cff",
  border: "none",
  color: "#fff",
  borderRadius: 6,
  cursor: "pointer",
};

function Contact() {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);

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
        padding: "100px 10%",
        backgroundColor: "#000",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: 15 }}>
        {t("contact.title")}
      </h2>

      <p style={{ color: "#888", marginBottom: 40 }}>
        {t("contact.description")}
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: 30 }}>
        <a
          href="https://www.linkedin.com/in/hasan-berk-g%C3%B6kta%C5%9F-b6046b334/"
          target="_blank"
          rel="noreferrer"
          style={iconContainerStyle}
        >
          <FaLinkedin size={40} />
          <span style={labelStyle}>LinkedIn</span>
        </a>

        <a
          href="https://github.com/HasanBerkGoktas?tab=repositories"
          target="_blank"
          rel="noreferrer"
          style={iconContainerStyle}
        >
          <FaGithub size={40} />
          <span style={labelStyle}>GitHub</span>
        </a>

        <div
          onClick={() => setShowForm(!showForm)}
          style={iconContainerStyle}
        >
          <FaEnvelope size={40} />
          <span style={labelStyle}>Email</span>
        </div>
      </div>

      {showForm && (
        <form
          onSubmit={sendEmail}
          style={{
            marginTop: 50,
            maxWidth: 500,
            marginInline: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 15,
          }}
        >
          <input
            type="text"
            name="user_name"
            placeholder={t("contact.name")}
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="user_email"
            placeholder={t("contact.email")}
            required
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder={t("contact.message")}
            required
            style={{ ...inputStyle, height: 120 }}
          />

          <button type="submit" style={buttonStyle}>
            {t("contact.send")}
          </button>
        </form>
      )}

      <footer style={{ marginTop: 80, color: "#333" }}>
        © 2026 Hasan Berk
      </footer>
    </section>
  );
}

export default Contact;