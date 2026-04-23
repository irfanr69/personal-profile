import React, { useMemo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { articlesData } from '../data/articles';
import NotFound from './NotFound';

function Tags() {
  const { tagName: rawTagName } = useParams();
  const navigate = useNavigate();
  
  // Normalize tag name from URL (ansible -> Ansible)
  const activeTagName = useMemo(() => {
    if (!rawTagName) return null;
    const normalized = rawTagName.replace(/-/g, ' ').toLowerCase();
    // Special handling for common technical terms that might contain hyphens
    const potentialTags = articlesData.flatMap(a => a.tags || []);
    const match = potentialTags.find(t => t.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-.]/g, '') === rawTagName.toLowerCase());
    if (match) return match;
    // Find exact match in data to preserve casing
    const allTags = new Set();
    articlesData.forEach(a => a.tags?.forEach(t => allTags.add(t)));
    return Array.from(allTags).find(t => t.toLowerCase() === normalized) || normalized;
  }, [rawTagName]);

  // Extract all unique tags and count their occurrences (case-insensitive)
  const tagCloud = useMemo(() => {
    const counts = {}; // lower -> count
    const displayNames = {}; // lower -> original casing
    
    articlesData.forEach(article => {
      if (article.tags) {
        article.tags.forEach(tag => {
          const lower = tag.toLowerCase();
          counts[lower] = (counts[lower] || 0) + 1;
          if (!displayNames[lower]) displayNames[lower] = tag;
        });
      }
    });
    
    return Object.keys(counts).sort().map(lower => ({
      name: displayNames[lower],
      count: counts[lower],
      slug: lower.replace(/\s+/g, '-').replace(/[^a-z0-9-.]/g, '')
    }));
  }, []);

  // Group articles by tag (case-insensitive)
  const articlesByTag = useMemo(() => {
    const groups = {};
    articlesData.forEach(article => {
      if (article.tags) {
        article.tags.forEach(tag => {
          const lower = tag.toLowerCase();
          if (!groups[lower]) groups[lower] = [];
          groups[lower].push(article);
        });
      }
    });
    return groups;
  }, []);

  // Use lowercase key for matching
  const activeTagNameLower = activeTagName?.toLowerCase();

  // If a specific tag is requested but doesn't exist, we'll return empty list
  const displayTags = useMemo(() => {
    if (activeTagNameLower && articlesByTag[activeTagNameLower]) {
      // Find the display name from our cloud
      const cloudItem = tagCloud.find(t => t.slug === activeTagNameLower.replace(/\s+/g, '-').replace(/[^a-z0-9-.]/g, ''));
      return [{ 
        name: cloudItem?.name || activeTagName, 
        count: articlesByTag[activeTagNameLower].length,
        lowerKey: activeTagNameLower
      }];
    }
    return [];
  }, [activeTagNameLower, tagCloud, articlesByTag, activeTagName]);

  // Show 404 UI if tag is invalid
  if (!rawTagName || displayTags.length === 0) {
    return <NotFound />;
  }

  return (
    <>
      <header className="hero" style={{ minHeight: '35vh', paddingBottom: '2rem' }}>
        <div className="container hero-content">
          <div className="hero-text-wrapper" style={{ alignItems: 'center', textAlign: 'center' }}>
            <div style={{ marginBottom: '1rem' }}>
              <Link to="/articles" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 'bold' }}>
                <ArrowLeft size={18} /> Back to Articles
              </Link>
            </div>
            <h1>Tag: {displayTags[0].name}</h1>
            <p>Articles related to {displayTags[0].name}</p>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            {/* Articles Grouped by Tag */}
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '5rem' }}>
              {displayTags.map(tag => (
                <div key={tag.name}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {articlesByTag[tag.lowerKey]?.map(article => (
                      <Link 
                        key={article.id} 
                        to={`/article/${article.slug}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <div className="card" style={{ 
                          padding: '1.5rem 2rem', 
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{article.title}</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0 }}>{article.date}</p>
                          </div>
                          <ArrowRight size={20} style={{ color: 'var(--accent-primary)' }} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Tags;
