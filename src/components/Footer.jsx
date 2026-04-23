import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ padding: '2rem 0', borderTop: '1px solid var(--card-border)', marginTop: '2rem' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="https://github.com/irfanr69" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} aria-label="GitHub" onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/irfanrizqulloh" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} aria-label="LinkedIn" onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:irfrzq.user@gmail.com" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} aria-label="Email" onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <Mail size={20} />
          </a>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', opacity: 0.6, margin: 0 }}>
          &copy; {new Date().getFullYear()} Irfan Rizqulloh.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
