import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import EntryCard from "@/components/EntryCard";

export default function JournalPage() {
  const posts = getAllPosts();

  return (
    <div className="py-16">
      <h1 className="text-5xl font-light">Journal</h1>

      <div className="mt-12 space-y-8">
        {posts.map((post: any) => (
          <EntryCard
            key={post.slug}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
}
