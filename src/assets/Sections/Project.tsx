import React, { useState, useEffect } from 'react';
import { FaGithub, FaTimes, FaInfoCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const myProjects = [
    {
      title: t('projects.dashboardTitle', 'Admin Dashboard Panel'),
      tech: t('projects.dashboardTech', 'React, Material UI'),
      desc: t('projects.dashboardDesc'),
      details: t('projects.dashboardDetails'),
      githubLink: "https://github.com/HasanBerkGoktas/dashboard-admin-"
    },
    {
      title: t('projects.dbTitle'),
      tech: t('projects.dbTech'),
      desc: t('projects.dbDesc'),
      details: t('projects.dbDetails'),
      githubLink: "https://github.com/HasanBerkGoktas/Veri-Tabani-Kayit-Ekleme"
    },
    {
      title: t('projects.nfsTitle'),
      tech: t('projects.nfsTech'),
      desc: t('projects.nfsDesc'),
      details: t('projects.nfsDetails'),
      githubLink: "https://github.com/HasanBerkGoktas/NFS-Most-Wanted-Fan-Site"
    },
    {
      title: t('projects.loginTitle'),
      tech: t('projects.loginTech'),
      desc: t('projects.loginDesc'),
      details: t('projects.loginDetails'),
      githubLink: "https://github.com/HasanBerkGoktas/login"
    }
  ];

  return (
    <section style={{
      padding: isMobile ? '50px 20px' : '60px 10%',
      backgroundColor: '#000',
      color: '#fff'
    }}>
      <h2 style={{
        fontSize: isMobile ? '1.8rem' : '2.5rem',
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        {t('projects.title')}
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: isMobile ? '15px' : '20px'
      }}>
        {myProjects.map((p, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#0a0a0a',
              padding: isMobile ? '15px' : '20px',
              borderRadius: '12px',
              border: '1px solid #222',
              transition: '0.3s',
              cursor: 'pointer',
              minHeight: '180px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
            onClick={() => setSelectedProject(p)}
            onMouseOver={(e) => {
              if (!isMobile) {
                e.currentTarget.style.borderColor = '#646cff';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = '#222';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div>
              <h3 style={{
                fontSize: isMobile ? '1rem' : '1.2rem',
                marginBottom: '5px'
              }}>
                {p.title}
              </h3>

              <span style={{
                color: '#646cff',
                fontSize: '0.7rem',
                fontWeight: 'bold'
              }}>
                {p.tech}
              </span>

              <p style={{
                color: '#888',
                marginTop: '10px',
                fontSize: isMobile ? '0.8rem' : '0.9rem'
              }}>
                {p.desc}
              </p>
            </div>

            <div style={{
              color: '#646cff',
              fontSize: '0.75rem',
              marginTop: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              <FaInfoCircle /> {t('projects.clickForDetails')}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: isMobile ? 'flex-end' : 'center',
            zIndex: 1000
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            style={{
              backgroundColor: '#111',
              padding: isMobile ? '25px' : '40px',
              borderRadius: isMobile ? '20px 20px 0 0' : '20px',
              maxWidth: '500px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              border: '1px solid #333'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes />
            </button>

            <h2 style={{ color: '#646cff', fontSize: isMobile ? '1.4rem' : '1.8rem' }}>
              {selectedProject.title}
            </h2>

            <span style={{ color: '#646cff', fontSize: '0.8rem' }}>
              {selectedProject.tech}
            </span>

            <hr style={{ borderColor: '#222', margin: '20px 0' }} />

            <p style={{
              lineHeight: '1.6',
              color: '#ccc',
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}>
              {selectedProject.details}
            </p>

            <a
              href={selectedProject.githubLink}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#646cff',
                color: '#fff',
                padding: '12px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                marginTop: '25px',
                width: '100%'
              }}
            >
              <FaGithub style={{ marginRight: '8px' }} />
              {t('projects.viewOnGithub')}
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;