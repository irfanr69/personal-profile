import fm from 'front-matter';

// Using import.meta.glob to dynamically import all MD files in src/data/articles
const articleFiles = import.meta.glob('./articles/*.md', { query: '?raw', eager: true });

const parseArticle = (path, rawContent) => {
  const parsed = fm(rawContent.default);
  const slug = parsed.attributes.title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
    
  return {
    id: path,
    slug,
    ...parsed.attributes,
    content: parsed.body
  };
};

export const articlesData = Object.entries(articleFiles)
  .map(([path, content]) => parseArticle(path, content))
  .sort((a, b) => {
    // Sort by date (newest first)
    const dateA = new Date(a.date || 0);
    const dateB = new Date(b.date || 0);
    return dateB - dateA;
  });
