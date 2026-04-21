import fm from 'front-matter';

// Using import.meta.glob to dynamically import all MD files in src/data/about
const aboutFiles = import.meta.glob('./about/*.md', { query: '?raw', eager: true });

const parseAbout = (path, rawContent) => {
  const parsed = fm(rawContent.default);
  return {
    id: path,
    ...parsed.attributes,
    content: parsed.body
  };
};

const allAboutData = Object.entries(aboutFiles).map(([path, content]) => 
  parseAbout(path, content)
);

export const experiencesData = allAboutData
  .filter(item => item.type === 'experience')
  .sort((a, b) => (a.order || 99) - (b.order || 99));

export const organizationsData = allAboutData
  .filter(item => item.type === 'organization')
  .sort((a, b) => (a.order || 99) - (b.order || 99));

export const certificationsData = allAboutData
  .find(item => item.type === 'certifications');
