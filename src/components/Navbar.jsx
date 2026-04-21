import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isArticles = location.pathname.startsWith('/article');
  const isAbout = location.pathname === '/about';
  const isProjects = location.pathname === '/projects';
  const isGlossary = location.pathname === '/glossary';

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = (e) => {
    e.stopPropagation();
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`top-nav ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>
            ./ROOT
          </Link>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className={isHome ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className={isAbout ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>About Me</Link>
          <Link to="/projects" className={isProjects ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <Link to="/articles" className={isArticles ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Articles</Link>
          <Link to="/glossary" className={isGlossary ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Glossary</Link>
        </div>

        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
