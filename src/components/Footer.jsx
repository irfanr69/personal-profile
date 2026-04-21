import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--card-border)', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="https://github.com/irfanr69" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/irfanrizqulloh" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:irfrzq.user@gmail.com" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', opacity: 0.7 }}>
          &copy; {new Date().getFullYear()} Irfan Rizqulloh.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
