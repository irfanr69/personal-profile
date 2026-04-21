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
    // Sort by filename number if possible (descending for articles usually)
    const aNum = parseInt(a.id.match(/\d+/)) || 0;
    const bNum = parseInt(b.id.match(/\d+/)) || 0;
    return bNum - aNum;
  });
