import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';
import { articlesData } from '../data/articles';

function ArticleDetail() {
  const { id } = useParams();
  const article = articlesData.find(a => a.id === parseInt(id));

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
          </div>
        </div>
      </header>

      <main>
        <section className="section" style={{ paddingTop: '1rem' }}>
          <div className="container">
            <div className="article-content" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.15rem', lineHeight: '1.8' }}>
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
          </div>
        </section>
      </main>

      {/* Global styles specifically for the injected Markdown content */}
      <style dangerouslySetInnerHTML={{__html: `
        .article-content > *:first-child { margin-top: 0; }
        .article-content h1 { margin-top: 3rem; margin-bottom: 1.5rem; font-size: 2.5rem; color: var(--text-primary); line-height: 1.2; }
        .article-content h2 { margin-top: 3rem; margin-bottom: 1.5rem; font-size: 2rem; color: var(--text-primary); border-bottom: 1px solid var(--card-border); padding-bottom: 0.5rem; line-height: 1.3; }
        .article-content h3 { margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem; color: var(--text-primary); line-height: 1.4; }
        .article-content p { margin-bottom: 1.5rem; color: var(--text-secondary); line-height: 1.8; }
        .article-content ul, .article-content ol { margin-bottom: 1.5rem; padding-left: 2rem; color: var(--text-secondary); line-height: 1.8; }
        .article-content li { margin-bottom: 0.5rem; }
        .article-content strong { color: var(--text-primary); font-weight: 600; }
        .article-content em { font-style: italic; }
        .article-content a { color: var(--accent-primary); text-decoration: none; border-bottom: 1px solid transparent; transition: border-color 0.2s ease; }
        .article-content a:hover { border-bottom-color: var(--accent-primary); }
        .article-content blockquote { border-left: 4px solid var(--accent-primary); margin: 0 0 1.5rem 0; background: var(--bg-secondary); padding: 1rem 1.5rem; border-radius: 0; font-style: normal; color: var(--text-primary); }
        .article-content blockquote p { margin-bottom: 0; }
        .article-content code { background: var(--bg-secondary); padding: 0.2rem 0.4rem; border-radius: 0; font-size: 0.9em; font-family: var(--font-main); color: var(--text-primary); border: 1px solid var(--card-border); }
        .article-content pre { background: var(--bg-secondary); padding: 1.5rem; border-radius: 0; overflow-x: auto; margin-bottom: 1.5rem; border: 1px solid var(--accent-primary); box-shadow: none; }
        .article-content pre code { background: transparent; padding: 0; color: var(--text-primary); font-size: 0.95em; border: none; }
        .article-content img { max-width: 100%; height: auto; border-radius: 0; margin-bottom: 1.5rem; box-shadow: none; display: block; border: 1px solid var(--accent-primary); filter: contrast(1.2) sepia(1) hue-rotate(90deg) saturate(3); }
        .article-content hr { border: 0; border-top: 1px solid var(--card-border); margin: 3rem 0; }
        .article-content table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; }
        .article-content th, .article-content td { padding: 0.75rem 1rem; border: 1px solid var(--card-border); text-align: left; }
        .article-content th { background: var(--card-bg); color: var(--text-primary); font-weight: 600; }
      `}} />
    </>
  );
}

export default ArticleDetail;
