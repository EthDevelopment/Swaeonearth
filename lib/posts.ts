import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content");

export type Post = {
  slug: string;
  content: string;
  title: string;
  date: string;
  excerpt?: string;
  location?: string;
  coverImage?: string;
};

export function getLatestPost() {
  const posts = getAllPosts();

  return posts[0];
}
export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(".md", "");

    const fullPath = path.join(postsDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    return {
      slug,
      content: "",
      title: data.title as string,
      date: String(data.date),
      excerpt: data.excerpt as string | undefined,
      location: data.location as string | undefined,
      coverImage: data.coverImage as string | undefined,
    };
  });

  return posts.sort(
    (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title as string,
    date: String(data.date),
    excerpt: data.excerpt as string | undefined,
    location: data.location as string | undefined,
    coverImage: data.coverImage as string | undefined,
  };
}

export function getAdjacentPosts(slug: string): {
  previous: Post | null;
  next: Post | null;
} {
  const posts = getAllPosts();

  const currentIndex = posts.findIndex((post) => post.slug === slug);

  return {
    previous: currentIndex > 0 ? posts[currentIndex - 1] : null,

    next: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
  };
}
