import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isArticles = location.pathname.startsWith('/article');
  const isAbout = location.pathname === '/about';

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="top-nav">
      <Link to="/" className={isHome ? 'active' : ''}>Home</Link>
      <Link to="/about" className={isAbout ? 'active' : ''}>About Me</Link>
      <Link to="/articles" className={isArticles ? 'active' : ''}>Articles</Link>
      <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </nav>
  );
}

export default Navbar;
