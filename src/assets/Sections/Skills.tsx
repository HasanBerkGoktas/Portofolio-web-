import React from 'react';
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
    <section id="skills" style={sectionStyle}>
      <h2 style={headingStyle}>Yeteneklerim</h2>
      
      <div style={containerStyle}>
        {skillGroups.map((group, idx) => (
          <div key={idx} style={groupStyle}>
            <h3 style={categoryTitleStyle}>{group.category}</h3>
            {group.skills.map((skill, sIdx) => (
              <div key={sIdx} style={skillWrapperStyle}>
                <div style={skillHeaderStyle}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {skill.icon} {skill.name}
                  </span>
                  <span style={{ color: '#888', fontSize: '0.85rem' }}>{skill.level}</span>
                </div>
                <div style={barBackgroundStyle}>
                  <div style={{
                    ...barFillStyle,
                    width: skill.level,
                    backgroundColor: idx === 0 ? '#646cff' : '#444'
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

// --- STİLLER ---
const sectionStyle: React.CSSProperties = {
  padding: '80px 10%',
  backgroundColor: '#000',
  color: '#fff'
};

const headingStyle: React.CSSProperties = {
  fontSize: '2.5rem',
  textAlign: 'center',
  marginBottom: '50px',
  fontWeight: 'bold'
};

const containerStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '40px',
  maxWidth: '1200px',
  margin: '0 auto'
};

const groupStyle: React.CSSProperties = {
  backgroundColor: '#0a0a0a',
  padding: '30px',
  borderRadius: '20px',
  border: '1px solid #222'
};

const categoryTitleStyle: React.CSSProperties = {
  marginBottom: '25px',
  color: '#646cff',
  fontSize: '1.4rem',
  borderBottom: '1px solid #222',
  paddingBottom: '10px'
};

const skillWrapperStyle: React.CSSProperties = {
  marginBottom: '22px'
};

const skillHeaderStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px',
  fontSize: '1rem'
};

const barBackgroundStyle: React.CSSProperties = {
  width: '100%',
  height: '10px',
  backgroundColor: '#1a1a1a',
  borderRadius: '10px',
  overflow: 'hidden'
};

const barFillStyle: React.CSSProperties = {
  height: '100%',
  borderRadius: '10px',
  transition: 'width 1.5s ease-in-out'
};

export default Skills;