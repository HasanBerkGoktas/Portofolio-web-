import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function About() {

  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={{
      padding: isMobile ? '60px 20px' : '80px 10%',
      backgroundColor: '#000',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px'
    }}>

      <h2 style={{
        fontSize: isMobile ? '1.8rem' : '2.5rem',
        marginBottom: '20px',
        borderBottom: '2px solid #646cff',
        display: 'inline-block',
        paddingBottom: '5px'
      }}>
        {t("about.title")}
      </h2>

      <div style={{
        backgroundColor: '#111',
        padding: isMobile ? '25px' : '40px',
        borderRadius: '20px',
        border: '1px solid #222',
        maxWidth: '800px',
        lineHeight: '1.6',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
      }}>

        <p style={{ 
          fontSize: isMobile ? '0.95rem' : '1.1rem', 
          color: '#ccc' 
        }}>
          {t("about.text1")}
        </p>
        
        <p style={{ 
          marginTop: '20px', 
          fontSize: isMobile ? '0.85rem' : '1rem', 
          color: '#888' 
        }}>
          {t("about.text2")}
        </p>

        <div style={{ 
          marginTop: '30px', 
          display: 'flex', 
          justifyContent: 'center', 
          gap: isMobile ? '8px' : '10px', 
          flexWrap: 'wrap' 
        }}>
          {['React', 'TypeScript', 'JavaScript', 'CSS3', 'Vite'].map((skill) => (
            <span key={skill} style={{
              padding: isMobile ? '4px 12px' : '5px 15px',
              backgroundColor: '#222',
              borderRadius: '50px',
              fontSize: isMobile ? '0.75rem' : '0.9rem',
              color: '#646cff',
              border: '1px solid #333'
            }}>
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;