import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  return {
    frontmatter: data,
    content,
  };
}

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory);

  return files.map((file) => {
    const slug = file.replace('.mdx', '');
    const { frontmatter } = getPostBySlug(slug);

    return { id: slug, ...frontmatter };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
