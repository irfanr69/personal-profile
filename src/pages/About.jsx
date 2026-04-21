import React from 'react';
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { experiencesData, organizationsData, certificationsData } from '../data/about';

function About() {
  return (
    <>
      <header className="hero" style={{ minHeight: '40vh', paddingBottom: '2rem' }}>
        <div className="container hero-content">
          <div className="hero-text-wrapper" style={{ alignItems: 'center', textAlign: 'center' }}>
            <h1>About Me</h1>
            <p>My journey, experience, and passion for technology.</p>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ marginBottom: '4rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img 
                  src="./assets/profile.jpg" 
                  alt="Irfan Rizqulloh" 
                  style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '0', objectFit: 'cover', border: '4px solid var(--accent-primary)', marginBottom: '1.5rem', boxShadow: 'none', display: 'block', margin: '0 auto 1.5rem auto' }} 
                />
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Irfan Rizqulloh</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  I am a Computer Science graduate from Telkom University with a deep passion for cloud infrastructure, cybersecurity, and data analytics. 
                  My goal is to build secure, scalable solutions and leverage data to drive decisions. I have hands-on experience orchestrating infrastructure, assessing vulnerabilities, and crafting interactive dashboards.
                </p>
              </div>

              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Professional Experience</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {experiencesData.map(exp => (
                  <div key={exp.id} className="card" style={{ padding: '2.5rem' }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{exp.role}</h3>
                      <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '0.8rem' }}>{exp.company}</h4>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', opacity: 0.8 }}>
                        {exp.period}
                      </div>
                    </div>
                    <div className="markdown-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', margin: 0 }}>
                      <ReactMarkdown>{exp.content}</ReactMarkdown>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '5rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Leadership & Organizations</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {organizationsData.map(org => (
                    <div key={org.id} className="card" style={{ padding: '2.5rem' }}>
                      <div style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{org.role}</h3>
                        <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '0.8rem' }}>{org.organization}</h4>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', opacity: 0.8 }}>
                          {org.period}
                        </div>
                      </div>
                      <div className="markdown-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', margin: 0 }}>
                        <ReactMarkdown>{org.content}</ReactMarkdown>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '5rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Education & Certifications</h2>
                <div className="card" style={{ padding: '2.5rem' }}>
                  <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <GraduationCap size={28} />
                    Bachelor of Computer Science
                  </h3>
                  <h5 style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)', fontWeight: 'normal' }}>Telkom University (GPA: 3.67)</h5>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', opacity: 0.8, marginBottom: '1rem' }}>
                    Graduated February 2025
                  </div>
                  <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>Thesis: Implementation of Ansible for Orchestrating Bastion Server in Demilitarized Zone.</p>
                  
                  <h4 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', fontSize: '1.2rem' }}>Key Certifications:</h4>
                  <div className="cert-markdown" style={{ color: 'var(--text-secondary)' }}>
                    <ReactMarkdown 
                      components={{
                        li: ({node, children, ...props}) => (
                          <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1.05rem' }}>
                            <span style={{ color: 'var(--accent-secondary)', flexShrink: 0, marginTop: '2px' }}><CheckCircle2 size={20} /></span>
                            <span>{children}</span>
                          </li>
                        ),
                        ul: ({node, ...props}) => <ul style={{ listStyle: 'none', padding: 0 }} {...props} />
                      }}
                    >
                      {certificationsData?.content || ''}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .markdown-content p { margin-bottom: 0; }
        .markdown-content ul, .markdown-content ol { padding-left: 1.5rem; margin-top: 0.5rem; }
        .markdown-content li { margin-bottom: 0.3rem; }
      `}} />
    </>
  );
}

export default About;
