import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import '../style.css'; // Import the premium styling

import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Projects from './pages/Projects';
import Glossary from './pages/Glossary';
import Tags from './pages/Tags';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Background Elements for Premium Look */}
      <div className="bg-shape bg-shape-1"></div>
      <div className="bg-shape bg-shape-2"></div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/tags/:tagName" element={<Tags />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
