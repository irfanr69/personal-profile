import fm from 'front-matter';

// Using import.meta.glob to dynamically import all MD files in src/data/projects
const projectFiles = import.meta.glob('./projects/*.md', { query: '?raw', eager: true });

const parseProject = (path, rawContent) => {
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

export const projectsData = Object.entries(projectFiles)
  .map(([path, content]) => parseProject(path, content))
  .sort((a, b) => {
    // Sort by filename number if possible
    const aNum = parseInt(a.id.match(/\d+/));
    const bNum = parseInt(b.id.match(/\d+/));
    return aNum - bNum;
  });
