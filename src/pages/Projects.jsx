import React from 'react';
import { ExternalLink, Server, Cloud, Shield, BookOpen, Monitor } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Link } from 'react-router-dom';
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
            <div className="projects-container" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '2rem', 
              maxWidth: '800px', 
              margin: '0 auto' 
            }}>
              {projectsData.map((project, index) => (
                <div key={index} className="card" style={{ 
                  padding: '2.5rem',
                  border: '1px solid var(--card-border)',
                  position: 'relative'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'flex-start', 
                    gap: '0.8rem', 
                    marginBottom: '1.5rem' 
                  }}>
                    <div style={{ color: 'var(--accent-primary)' }}>
                      {getIcon(project.icon)}
                    </div>
                    <h3 style={{ fontSize: '1.8rem', margin: 0 }}>{project.title}</h3>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
                    {project.description}
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {project.tags.map((tag, i) => (
                      <span key={i} style={{ 
                        fontSize: '0.75rem', 
                        padding: '0.2rem 0.6rem', 
                        border: '1px solid var(--text-secondary)',
                        color: 'var(--text-secondary)',
                        opacity: 0.8
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Conditional Actions Section */}
                  {( (project.github && project.github !== '#' && project.github !== 'none') || 
                     (project.demo && project.demo !== '#' && project.demo !== 'none') || 
                     (project.article && project.article !== '#' && project.article !== 'none')
                  ) && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', borderTop: '1px solid var(--card-border)', paddingTop: '1.5rem' }}>
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
                          <Monitor size={18} /> Demo
                        </a>
                      )}
                      {project.article && project.article.trim() !== '' && project.article !== '#' && project.article !== 'none' && (
                        (() => {
                          const isExternal = project.article.startsWith('http');
                          if (isExternal) {
                            return (
                              <a href={project.article} target="_blank" rel="noopener noreferrer" style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '0.5rem', 
                                color: 'var(--accent-primary)',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize: '0.9rem'
                              }}>
                                <BookOpen size={18} /> Read Article <ExternalLink size={14} style={{ opacity: 0.7 }} />
                              </a>
                            );
                          }
                          return (
                            <Link to={`/article/${project.article}`} style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '0.5rem', 
                              color: 'var(--accent-primary)',
                              textDecoration: 'none',
                              fontWeight: 'bold',
                              fontSize: '0.9rem'
                            }}>
                              <BookOpen size={18} /> Read Article
                            </Link>
                          );
                        })()
                      )}
                    </div>
                  )}
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
