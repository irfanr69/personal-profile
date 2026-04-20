import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isArticles = location.pathname.startsWith('/article');
  const isAbout = location.pathname === '/about';

  return (
    <nav className="top-nav">
      <Link to="/" className={isHome ? 'active' : ''}>Home</Link>
      <Link to="/about" className={isAbout ? 'active' : ''}>About Me</Link>
      <Link to="/articles" className={isArticles ? 'active' : ''}>Articles</Link>
    </nav>
  );
}

export default Navbar;
