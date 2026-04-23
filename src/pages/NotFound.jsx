import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

function NotFound() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      padding: '80px 1.5rem 2rem 1.5rem',
      boxSizing: 'border-box'
    }}>
      <div style={{ 
        color: 'var(--accent-primary)', 
        marginBottom: '1.5rem',
        animation: 'pulse 2s infinite' 
      }}>
        <AlertCircle size={window.innerWidth < 600 ? 60 : 80} />
      </div>
      
      <h1 style={{ fontSize: 'clamp(3rem, 15vw, 6rem)', marginBottom: '0.5rem', color: 'var(--text-primary)', lineHeight: 1 }}>404</h1>
      <h2 style={{ fontSize: 'clamp(1.1rem, 4vw, 1.5rem)', marginBottom: '2rem', color: 'var(--text-secondary)', fontWeight: 'normal', maxWidth: '600px' }}>
        [ERROR]: Command not found or path is invalid.
      </h2>
      
      <div style={{ 
        width: '100%',
        maxWidth: '500px', 
        padding: '1.2rem', 
        background: 'var(--bg-secondary)', 
        border: '1px solid var(--card-border)',
        marginBottom: '2.5rem',
        fontFamily: 'monospace',
        textAlign: 'left',
        boxSizing: 'border-box',
        fontSize: 'clamp(0.8rem, 3.5vw, 1rem)'
      }}>
        <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.5', overflowWrap: 'break-word' }}>
          $ check_path --current-url<br />
          <span style={{ color: 'var(--accent-primary)' }}>Status: 404 Not Found</span><br />
          The resource you are looking for does not exist in this terminal.
        </p>
      </div>

      <Link to="/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem' }}>
        <Home size={18} /> Back to ./HOME
      </Link>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}} />
    </div>
  );
}

export default NotFound;
