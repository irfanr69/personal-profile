import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { glossaryData } from '../data/glossary';

function Glossary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('All');

  const alphabets = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

  const filteredGlossary = useMemo(() => {
    return glossaryData.filter(item => {
      const matchesSearch = item.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.definition.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLetter = selectedLetter === 'All' || item.term.toUpperCase().startsWith(selectedLetter);
      return matchesSearch && matchesLetter;
    });
  }, [searchQuery, selectedLetter]);

  // Group filtered items by their first letter
  const groupedGlossary = useMemo(() => {
    const groups = {};
    filteredGlossary.forEach(item => {
      const firstLetter = item.term.charAt(0).toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(item);
    });
    // Sort group keys (A, B, C...)
    return Object.keys(groups).sort().reduce((acc, key) => {
      acc[key] = groups[key];
      return acc;
    }, {});
  }, [filteredGlossary]);

  return (
    <>
      <header className="hero" style={{ minHeight: '40vh', paddingBottom: '2rem' }}>
        <div className="container hero-content">
          <div className="hero-text-wrapper" style={{ alignItems: 'center', textAlign: 'center' }}>
            <h1>Glossary</h1>
            <p>Technical terms and definitions related to Cloud, Security, and Automation.</p>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            {/* Search Box */}
            <div style={{ maxWidth: '800px', margin: '0 auto 2rem auto', position: 'relative' }}>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <Search size={20} style={{ position: 'absolute', left: '1rem', color: 'var(--text-secondary)' }} />
                <input 
                  type="text" 
                  placeholder="Search technical terms..." 
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
            </div>

            {/* Alphabet Filter */}
            <div style={{ 
              maxWidth: '800px', 
              margin: '0 auto 3rem auto', 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: '0.5rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid var(--card-border)'
            }}>
              {alphabets.map(letter => {
                // Only show letter buttons that actually have terms, or 'All'
                const hasTerms = letter === 'All' || glossaryData.some(item => item.term.toUpperCase().startsWith(letter));
                if (!hasTerms) return null;

                return (
                  <button
                    key={letter}
                    onClick={() => setSelectedLetter(letter)}
                    style={{
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: selectedLetter === letter ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                      color: selectedLetter === letter ? 'var(--bg-main)' : 'var(--text-primary)',
                      border: '1px solid var(--card-border)',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>

            {/* Glossary Content Grouped by Alphabet */}
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              {Object.keys(groupedGlossary).length > 0 ? (
                Object.entries(groupedGlossary).map(([letter, items]) => (
                  <div key={letter} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {/* Alphabet Indicator */}
                    <div style={{ 
                      fontSize: '2.5rem', 
                      fontWeight: 'bold', 
                      color: 'var(--accent-primary)', 
                      borderBottom: '2px solid var(--accent-primary)',
                      width: 'fit-content',
                      paddingRight: '1rem',
                      marginBottom: '1rem',
                      opacity: 0.8
                    }}>
                      {letter}
                    </div>
                    
                    {/* Terms for this letter */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      {items.map((item, index) => (
                        <div key={index} style={{ 
                          display: 'flex', 
                          flexDirection: 'column', 
                          gap: '0.5rem', 
                          padding: '1.5rem 0', 
                          borderBottom: '1px solid var(--card-border)'
                        }}>
                          <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', margin: 0 }}>
                            {item.term}
                          </h3>
                          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
                            {item.definition}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ textAlign: 'center', padding: '3rem', border: '1px dashed var(--card-border)', color: 'var(--text-secondary)' }}>
                  <p>No terms found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Glossary;
