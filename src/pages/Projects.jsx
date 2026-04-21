import React from 'react';
import { ExternalLink, Server, Cloud, Shield } from 'lucide-react';
import { projectsData } from '../data/projects';
import { FaGithub } from 'react-icons/fa';

function Projects() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'server': return <Server size={32} />;
      case 'cloud': return <Cloud size={32} />;
      case 'shield': return <Shield size={32} />;
      default: return <Server size={32} />;
    }
  };

  return (
    <>
      <header className="hero" style={{ minHeight: '40vh', paddingBottom: '2rem' }}>
        <div className="container hero-content">
          <div className="hero-text-wrapper" style={{ alignItems: 'center', textAlign: 'center' }}>
            <h1>My Projects</h1>
            <p>Showcasing my technical implementations in Cloud, Automation, and Security.</p>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <div className="card-container" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
              gap: '2rem' 
            }}>
              {projectsData.map((project, index) => (
                <div key={index} className="card" style={{ 
                  padding: '2.5rem', 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  border: '1px solid var(--accent-primary)',
                  position: 'relative'
                }}>
                  <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                    {getIcon(project.icon)}
                  </div>
                  <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flexGrow: 1, lineHeight: '1.7' }}>
                    {project.description}
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2rem' }}>
                    {project.tags.map((tag, i) => (
                      <span key={i} style={{ 
                        fontSize: '0.8rem', 
                        padding: '0.2rem 0.6rem', 
                        border: '1px solid var(--text-secondary)',
                        color: 'var(--text-secondary)'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                    {project.github && project.github.trim() !== '' && project.github !== '#' && project.github !== 'none' && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        color: 'var(--accent-primary)',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '0.9rem'
                      }}>
                        <FaGithub size={18} /> Source Code
                      </a>
                    )}
                    {project.demo && project.demo.trim() !== '' && project.demo !== '#' && project.demo !== 'none' && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        color: 'var(--accent-primary)',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '0.9rem'
                      }}>
                        <ExternalLink size={18} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Projects;
