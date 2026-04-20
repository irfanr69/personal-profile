import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { articlesData } from '../data/articles';

function Articles() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articlesData.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            {/* Search Bar */}
            <div style={{ maxWidth: '800px', margin: '0 auto 3rem auto', position: 'relative' }}>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Search size={20} style={{ position: 'absolute', left: '1rem', color: 'var(--text-secondary)' }} />
                <input 
                  type="text" 
                  placeholder="Search articles (e.g. Ansible, Proxmox...)" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '1rem 1rem 1rem 3rem',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--card-border)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-main)',
                    fontSize: '1rem',
                    borderRadius: 0,
                    outline: 'none'
                  }}
                />
              </div>
              {searchQuery && (
                <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Found {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} matching "{searchQuery}"
                </div>
              )}
            </div>

            <div className="articles-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
              {filteredArticles.length > 0 ? (
                filteredArticles.map(article => (
                  <article key={article.id} className="card" style={{ padding: '2.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{article.title}</h3>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>{article.excerpt}</p>
                    <Link to={`/article/${article.slug}`} className="read-more" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: '600', textDecoration: 'none' }}>
                      Read Article <ArrowRight size={18} />
                    </Link>
                  </article>
                ))
              ) : (
                <div style={{ textAlign: 'center', padding: '3rem', border: '1px dashed var(--card-border)', color: 'var(--text-secondary)' }}>
                  <p>No articles found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Articles;
