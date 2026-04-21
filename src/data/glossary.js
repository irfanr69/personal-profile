import fm from 'front-matter';
import glossaryRaw from './glossary.md?raw';

const parsed = fm(glossaryRaw);

export const glossaryData = parsed.attributes.glossary
  .sort((a, b) => a.term.localeCompare(b.term));
