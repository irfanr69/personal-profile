import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { articlesData } from '../data/articles';

function Articles() {
  return (
    <>
      <header className="hero" style={{ minHeight: '40vh', paddingBottom: '2rem' }}>
        <div className="container hero-content">
          <div className="hero-text-wrapper" style={{ alignItems: 'center', textAlign: 'center' }}>
            <h1>My Articles</h1>
            <p>Thoughts, tutorials, and insights on Cloud, Linux, and Automation.</p>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <div className="articles-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
              {articlesData.map(article => (
                <article key={article.id} className="card" style={{ padding: '2.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{article.title}</h3>
                  <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>{article.excerpt}</p>
                  <Link to={`/article/${article.id}`} className="read-more" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: '600', textDecoration: 'none' }}>
                    Read Article <ArrowRight size={18} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Articles;
