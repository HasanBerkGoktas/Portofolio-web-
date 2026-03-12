import React, { useState } from 'react';
import { FaGithub, FaTimes, FaInfoCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const myProjects = [
    {
      title: t('projects.dashboardTitle', 'Admin Dashboard Panel'),
      tech: t('projects.dashboardTech', 'React, Material UI'),
      desc: t('projects.dashboardDesc', 'Modern ve minimalist bir yönetim paneli örneğidir. Veri görselleştirme ve kullanıcı yönetimi içerir.'),
      details: t('projects.dashboardDetails', 'Bu projede Material UI bileşen kütüphanesini kullanarak responsive bir dashboard oluşturdum. Recharts ile veri grafikleri ekledim.'),
      githubLink: "https://github.com/HasanBerkGoktas/dashboard-admin-"
    },
    {
      title: t('projects.dbTitle', 'Veri Tabanı Kayıt Ekleme'),
      tech: t('projects.dbTech', 'C# Entity Framework'),
      desc: t('projects.dbDesc', 'Desktop tabanlı veri yönetim uygulaması.'),
      details: t('projects.dbDetails', 'C# ve Entity Framework kullanarak MSSQL veri tabanına CRUD (Ekle, Oku, Güncelle, Sil) işlemlerini gerçekleştiren bir masaüstü uygulamasıdır.'),
      githubLink: "https://github.com/HasanBerkGoktas/Veri-Tabani-Kayit-Ekleme"
    },
    {
      title: t('projects.nfsTitle', 'NFS Most Wanted Fan Site'),
      tech: t('projects.nfsTech', 'HTML, CSS'),
      desc: t('projects.nfsDesc', 'Efsane yarış oyununun fan sitesi.'),
      details: t('projects.nfsDetails', 'Saf CSS kullanarak oyunun atmosferini yansıtan bir tasarım yaptım. Flexbox ve Grid sistemlerini yoğun şekilde kullandım.'),
      githubLink: "https://github.com/HasanBerkGoktas/NFS-Most-Wanted-Fan-Site"
    },
    {
      title: t('projects.loginTitle', 'Giriş Yapılandırması'),
      tech: t('projects.loginTech', 'HTML, CSS'),
      desc: t('projects.loginDesc', 'Güvenli görünümlü giriş arayüzü.'),
      details: t('projects.loginDetails', 'Modern login formları ve validasyon tasarımları üzerine bir çalışma. Kullanıcı deneyimi (UX) odaklı bir form yapısıdır.'),
      githubLink: "https://github.com/HasanBerkGoktas/login"
    }
  ];

  return (
    <section id="projects" style={sectionStyle}>
      <h2 style={headingStyle}>{t('projects.title', 'Projelerim')}</h2>
      
      <div style={gridStyle}>
        {myProjects.map((p, index) => (
          <div 
            key={index} 
            style={cardStyle}
            onClick={() => setSelectedProject(p)}
            onMouseOver={(e) => e.currentTarget.style.borderColor = '#646cff'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = '#222'}
          >
            <div>
              <h3 style={titleStyle}>{p.title}</h3>
              <span style={techStyle}>{p.tech}</span>
              <p style={descStyle}>{p.desc}</p>
            </div>
            <div style={{color: '#646cff', fontSize: '0.8rem', marginTop: '10px', display: 'flex', alignItems: 'center', gap: '5px'}}>
               <FaInfoCircle /> {t('projects.clickForDetails', 'Detaylar için tıkla')}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div style={modalOverlayStyle} onClick={() => setSelectedProject(null)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <button style={closeButtonStyle} onClick={() => setSelectedProject(null)}>
              <FaTimes />
            </button>
            <h2 style={{color: '#646cff'}}>{selectedProject.title}</h2>
            <span style={techStyle}>{selectedProject.tech}</span>
            <hr style={{borderColor: '#222', margin: '20px 0'}} />
            <p style={{lineHeight: '1.6', color: '#ccc'}}>{selectedProject.details}</p>
            
            <a 
              href={selectedProject.githubLink} 
              target="_blank" 
              rel="noreferrer"
              style={githubButtonStyle}
            >
              <FaGithub style={{ marginRight: '8px' }} />
              {t('projects.viewOnGithub', "GitHub'da Kodları İncele")}
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

// --- STİLLER ---
const sectionStyle: React.CSSProperties = { padding: '60px 10%', backgroundColor: '#000', color: '#fff' };
const headingStyle: React.CSSProperties = { fontSize: '2.5rem', textAlign: 'center', marginBottom: '40px' };
const gridStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' };

const cardStyle: React.CSSProperties = {
  backgroundColor: '#0a0a0a',
  padding: '20px',
  borderRadius: '12px',
  border: '1px solid #222',
  transition: '0.3s ease',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '200px'
};

const titleStyle: React.CSSProperties = { fontSize: '1.2rem', color: '#fff', marginBottom: '5px' };
const techStyle: React.CSSProperties = { color: '#646cff', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase' };
const descStyle: React.CSSProperties = { color: '#888', marginTop: '10px', fontSize: '0.9rem' };

const modalOverlayStyle: React.CSSProperties = {
  position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
  backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
};

const modalContentStyle: React.CSSProperties = {
  backgroundColor: '#111', padding: '40px', borderRadius: '20px',
  maxWidth: '500px', width: '90%', position: 'relative', border: '1px solid #333', boxShadow: '0 0 30px rgba(100,108,255,0.2)'
};

const closeButtonStyle: React.CSSProperties = {
  position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer'
};

const githubButtonStyle: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#646cff',
  color: '#fff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', marginTop: '30px', width: '100%'
};

export default Projects;