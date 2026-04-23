import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Copy, Check, Info } from 'lucide-react';
import { articlesData } from '../data/articles';
import { glossaryData } from '../data/glossary';

const CodeBlock = ({ node, inline, className, children, ...props }) => {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || '');
  
  const handleCopy = () => {
    navigator.clipboard.writeText(String(children).replace(/\n$/, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!inline && match) {
    return (
      <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
        <button
          onClick={handleCopy}
          style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            background: 'var(--card-bg)',
            border: '1px solid var(--accent-primary)',
            color: 'var(--text-primary)',
            padding: '0.3rem 0.6rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.85rem',
            zIndex: 10
          }}
          aria-label="Copy code"
        >
          {copied ? <><Check size={14} /> Copied!</> : <><Copy size={14} /> Copy</>}
        </button>
        <pre style={{ 
          margin: 0, 
          padding: '1.5rem',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--accent-primary)',
          borderRadius: 0,
          overflowX: 'auto'
        }}>
          <code className={className} style={{ fontSize: '0.8em', color: 'var(--text-primary)', background: 'transparent', padding: 0, border: 'none' }} {...props}>
            {children}
          </code>
        </pre>
      </div>
    );
  }
  return <code className={className} {...props}>{children}</code>;
};

const ImageWithLabel = ({ src, alt, title }) => {
  return (
    <figure style={{ margin: '2rem 0', textAlign: 'center' }}>
      <img src={src} alt={alt} title={title} style={{ margin: '0 auto 0.5rem auto' }} />
      {(title || alt) && (
        <figcaption style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontStyle: 'italic', borderBottom: '1px dashed var(--card-border)', display: 'inline-block', paddingBottom: '0.2rem' }}>
          {title || alt}
        </figcaption>
      )}
    </figure>
  );
};

const MarkdownLink = ({ href, children }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      title={`Visit ${href}`}
      style={{ 
        color: 'var(--accent-primary)', 
        textDecoration: 'none', 
        borderBottom: '1px solid var(--accent-primary)', 
        paddingBottom: '1px',
        transition: 'all 0.2s ease' 
      }}
    >
      {children}
    </a>
  );
};

// Smart Responsive Glossary Term component
const GlossaryTerm = ({ term, definition }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shift, setShift] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (isVisible && wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      const popupWidth = Math.min(260, screenWidth * 0.8);
      const center = rect.left + (rect.width / 2);
      const margin = 20;

      let newShift = 0;
      if (center + (popupWidth / 2) > screenWidth - margin) {
        newShift = (screenWidth - margin) - (center + (popupWidth / 2));
      } else if (center - (popupWidth / 2) < margin) {
        newShift = margin - (center - (popupWidth / 2));
      }
      setShift(newShift);
    }
  }, [isVisible]);

  return (
    <span 
      ref={wrapperRef}
      className="glossary-term-wrapper"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onClick={(e) => {
        e.stopPropagation();
        setIsVisible(!isVisible);
      }}
      style={{
        position: 'relative',
        display: 'inline-block',
        cursor: 'help'
      }}
    >
      <span style={{
        borderBottom: '2px dashed var(--accent-primary)',
        color: 'var(--text-primary)',
        fontWeight: 'bold'
      }}>
        {term}
      </span>
      
      {isVisible && (
        <div 
          className="glossary-popup"
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 10px)',
            left: `calc(50% + ${shift}px)`,
            transform: 'translateX(-50%)',
            width: '260px',
            maxWidth: '80vw',
            background: 'var(--card-bg)',
            border: '2px solid var(--accent-primary)',
            padding: '12px',
            zIndex: 100000,
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            fontSize: '0.9rem',
            lineHeight: '1.4',
            color: 'var(--text-primary)',
            pointerEvents: 'none'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--accent-primary)', fontWeight: 'bold', borderBottom: '1px solid var(--card-border)', paddingBottom: '4px' }}>
            <Info size={14} /> {term}
          </div>
          {definition}
          <div style={{
            position: 'absolute',
            top: '100%',
            left: `calc(50% - ${shift}px)`,
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent',
            borderTop: '8px solid var(--accent-primary)'
          }}></div>
        </div>
      )}
    </span>
  );
};

// Component to handle glossary term highlighting
const TextWithGlossary = ({ children }) => {
  if (typeof children !== 'string') return children;

  const terms = [...glossaryData].sort((a, b) => b.term.length - a.term.length);
  if (terms.length === 0) return children;

  const escapedTerms = terms.map(t => t.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
  const regex = new RegExp(`\\b(${escapedTerms})\\b`, 'gi');

  const parts = children.split(regex);
  
  return parts.map((part, index) => {
    const matchingTerm = terms.find(t => t.term.toLowerCase() === part.toLowerCase());
    if (matchingTerm) {
      return <GlossaryTerm key={index} term={part} definition={matchingTerm.definition} />;
    }
    return part;
  });
};

function ArticleDetail() {
  const { id } = useParams();
  const article = articlesData.find(a => a.slug === id);

  if (!article) {
    return (
      <div style={{ textAlign: 'center', padding: '5rem', color: 'white' }}>
        <h2>Article not found</h2>
        <Link to="/articles" style={{ color: 'var(--accent-primary)' }}>Back to Articles</Link>
      </div>
    );
  }

  return (
    <>
      <header className="hero" style={{ minHeight: '30vh', paddingBottom: '2rem' }}>
        <div className="container hero-content">
          <div className="hero-text-wrapper" style={{ alignItems: 'center', textAlign: 'center' }}>
            <div style={{ marginBottom: '1rem' }}>
              <Link to="/articles" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 'bold' }}>
                <ArrowLeft size={18} /> Back to Articles
              </Link>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: '900px' }}>{article.title}</h1>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
            
            {article.tags && article.tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem', marginTop: '1.5rem' }}>
                {article.tags.map((tag, i) => (
                  <Link 
                    key={i} 
                    to={`/tags/${tag.replace(/\s+/g, '-').toLowerCase()}`}
                    style={{ 
                      fontSize: '0.8rem', 
                      padding: '0.2rem 0.8rem', 
                      border: '1px solid var(--card-border)',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-primary)';
                      e.currentTarget.style.color = 'var(--accent-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--card-border)';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <main>
        <section className="section" style={{ paddingTop: '1rem' }}>
          <div className="container">
            <div className="article-content" style={{ 
              maxWidth: '800px', 
              margin: '0 auto', 
              fontSize: '1.15rem', 
              lineHeight: '1.8',
              overflow: 'visible' 
            }}>
              <ReactMarkdown 
                components={{ 
                  code: CodeBlock, 
                  img: ImageWithLabel, 
                  a: MarkdownLink,
                  p: ({children}) => <p style={{ overflow: 'visible' }}><TextWithGlossary>{children}</TextWithGlossary></p>,
                  li: ({children}) => <li style={{ overflow: 'visible' }}><TextWithGlossary>{children}</TextWithGlossary></li>,
                  h1: ({children}) => <h1>{children}</h1>,
                  h2: ({children}) => <h2>{children}</h2>,
                  h3: ({children}) => <h3>{children}</h3>
                }}
              >
                {article.content}
              </ReactMarkdown>
            </div>
          </div>
        </section>
      </main>

      <style dangerouslySetInnerHTML={{__html: `
        .article-content > *:first-child { margin-top: 0; }
        .article-content h1, .article-content h2, .article-content h3 { overflow: visible; }
        .article-content h1 { margin-top: 3rem; margin-bottom: 1.5rem; font-size: 2.5rem; color: var(--text-primary); line-height: 1.2; }
        .article-content h2 { margin-top: 3rem; margin-bottom: 1.5rem; font-size: 2rem; color: var(--text-primary); border-bottom: 1px solid var(--card-border); padding-bottom: 0.5rem; line-height: 1.3; }
        .article-content h3 { margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem; color: var(--text-primary); line-height: 1.4; }
        .article-content p { margin-bottom: 1.5rem; color: var(--text-secondary); line-height: 1.8; }
        .article-content ul, .article-content ol { margin-bottom: 1.5rem; padding-left: 2rem; color: var(--text-secondary); line-height: 1.8; overflow: visible; }
        .article-content li { margin-bottom: 0.5rem; }
        .article-content a { color: var(--accent-primary); text-decoration: none; border-bottom: 1px solid transparent; transition: border-color 0.2s ease; }
        .article-content a:hover { border-bottom-color: var(--accent-primary); }
        .article-content blockquote { border-left: 4px solid var(--accent-primary); margin: 0 0 1.5rem 0; background: var(--bg-secondary); padding: 1rem 1.5rem; border-radius: 0; font-style: normal; color: var(--text-primary); }
        .article-content blockquote p { margin-bottom: 0; }
        .article-content code { background: var(--bg-secondary); padding: 0.2rem 0.4rem; border-radius: 0; font-size: 0.9em; font-family: var(--font-main); color: var(--text-primary); border: 1px solid var(--card-border); }
        .article-content img { max-width: 100%; height: auto; border-radius: 0; margin-bottom: 1.5rem; box-shadow: none; display: block; border: 1px solid var(--accent-primary); padding: 0.5rem; }
        .article-content hr { border: 0; border-top: 1px solid var(--card-border); margin: 3rem 0; }
        
        .glossary-popup { animation: fadeInSimple 0.15s ease-out; }
        @keyframes fadeInSimple {
          from { opacity: 0; transform: translateX(-50%) translateY(5px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}} />
    </>
  );
}

export default ArticleDetail;
