import fm from 'front-matter';
import article1Raw from './articles/1-ansible.md?raw';
import article2Raw from './articles/2-proxmox.md?raw';
import article3Raw from './articles/3-tableau.md?raw';

const parseArticle = (id, rawContent) => {
  const parsed = fm(rawContent);
  return {
    id,
    ...parsed.attributes,
    content: parsed.body
  };
};

export const articlesData = [
  parseArticle(1, article1Raw),
  parseArticle(2, article2Raw),
  parseArticle(3, article3Raw)
];
