import React, { useState, useEffect } from 'react';
import { 
  FaHtml5, 
  FaReact,  
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiSharp, 
  SiMaterialdesign 
} from 'react-icons/si';

const Skills: React.FC = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const skillGroups = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: "85%", icon: <FaReact color="#61DBFB" /> },
        { name: "TypeScript", level: "75%", icon: <SiTypescript color="#3178C6" /> },
        { name: "Material UI", level: "80%", icon: <SiMaterialdesign color="#0081CB" /> },
        { name: "HTML5 & CSS5", level: "95%", icon: <FaHtml5 color="#E34F26" /> },
      ]
    },
    {
      category: "Backend & Tools",
      skills: [
        { name: "C# Entity Framework", level: "70%", icon: <SiSharp color="#239120" /> },
      ]
    }
  ];

  return (
    <section style={{
      padding: isMobile ? '60px 20px' : '80px 10%',
      backgroundColor: '#000',
      color: '#fff'
    }}>
      
      <h2 style={{
        fontSize: isMobile ? '1.8rem' : '2.5rem',
        textAlign: 'center',
        marginBottom: isMobile ? '30px' : '50px',
        fontWeight: 'bold'
      }}>
        Yeteneklerim
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile 
          ? '1fr' 
          : 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: isMobile ? '20px' : '40px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {skillGroups.map((group, idx) => (
          <div key={idx} style={{
            backgroundColor: '#0a0a0a',
            padding: isMobile ? '20px' : '30px',
            borderRadius: '20px',
            border: '1px solid #222'
          }}>
            <h3 style={{
              marginBottom: '20px',
              color: '#646cff',
              fontSize: isMobile ? '1.2rem' : '1.4rem',
              borderBottom: '1px solid #222',
              paddingBottom: '10px'
            }}>
              {group.category}
            </h3>

            {group.skills.map((skill, sIdx) => (
              <div key={sIdx} style={{ marginBottom: '18px' }}>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '8px',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  flexWrap: 'wrap',
                  gap: '5px'
                }}>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    {skill.icon} {skill.name}
                  </span>

                  <span style={{ color: '#888', fontSize: '0.8rem' }}>
                    {skill.level}
                  </span>
                </div>

                <div style={{
                  width: '100%',
                  height: isMobile ? '8px' : '10px',
                  backgroundColor: '#1a1a1a',
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%',
                    borderRadius: '10px',
                    width: skill.level,
                    backgroundColor: idx === 0 ? '#646cff' : '#444',
                    transition: 'width 1.5s ease-in-out'
                  }}></div>
                </div>

              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;