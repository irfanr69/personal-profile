import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Calendar } from 'lucide-react';
import { articlesData } from '../data/articles';

function Articles() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const parseDate = (dateStr) => new Date(dateStr);

  const filteredArticles = articlesData
    .filter(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

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
            {/* Search and Filter Bar */}
            <div style={{ maxWidth: '800px', margin: '0 auto 3rem auto', display: 'flex', gap: '0.5rem' }}>
              <div style={{ position: 'relative', flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                <Search size={20} style={{ position: 'absolute', left: '1rem', color: 'var(--text-secondary)' }} />
                <input 
                  type="text" 
                  placeholder={isMobile ? "Search..." : "Search articles..."} 
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
              
              <div style={{ 
                position: 'relative', 
                display: 'flex', 
                alignItems: 'center', 
                width: isMobile ? '50px' : '180px',
                transition: 'width 0.3s ease'
              }}>
                <Calendar size={20} style={{ 
                  position: 'absolute', 
                  left: isMobile ? '50%' : '1rem', 
                  transform: isMobile ? 'translateX(-50%)' : 'none',
                  color: 'var(--text-secondary)', 
                  pointerEvents: 'none' 
                }} />
                <select 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  style={{
                    width: '100%',
                    padding: isMobile ? '1rem 0' : '1rem 1rem 1rem 3rem',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--card-border)',
                    color: isMobile ? 'transparent' : 'var(--text-primary)',
                    fontFamily: 'var(--font-main)',
                    fontSize: '1rem',
                    borderRadius: 0,
                    outline: 'none',
                    appearance: 'none',
                    cursor: 'pointer',
                    textAlign: isMobile ? 'center' : 'left'
                  }}
                  title="Sort by date"
                >
                  <option value="newest" style={{ color: 'var(--text-primary)', background: 'var(--bg-secondary)' }}>Newest First</option>
                  <option value="oldest" style={{ color: 'var(--text-primary)', background: 'var(--bg-secondary)' }}>Oldest First</option>
                </select>
              </div>
            </div>

            {searchQuery && (
              <div style={{ maxWidth: '800px', margin: '-2rem auto 2rem auto', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Found {filteredArticles.length} matching "{searchQuery}"
              </div>
            )}

            <div className="articles-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
              {filteredArticles.length > 0 ? (
                filteredArticles.map(article => (
                  <article key={article.id} className="card" style={{ padding: '2.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calendar size={14} /> {article.date}
                      </span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{article.title}</h3>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>{article.excerpt}</p>
                    
                    {article.tags && article.tags.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                        {article.tags.map((tag, i) => (
                          <Link 
                            key={i} 
                            to={`/tags/${tag.replace(/\s+/g, '-').toLowerCase()}`}
                            style={{ 
                              fontSize: '0.75rem', 
                              padding: '0.2rem 0.6rem', 
                              border: '1px solid var(--text-secondary)',
                              color: 'var(--text-secondary)',
                              opacity: 0.8,
                              textDecoration: 'none',
                              transition: 'all 0.2s ease',
                              cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = 'var(--accent-primary)';
                              e.currentTarget.style.color = 'var(--accent-primary)';
                              e.currentTarget.style.opacity = '1';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = 'var(--text-secondary)';
                              e.currentTarget.style.color = 'var(--text-secondary)';
                              e.currentTarget.style.opacity = '0.8';
                            }}
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    )}

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
