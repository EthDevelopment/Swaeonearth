import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function JournalPage() {
  const posts = getAllPosts();

  return (
    <div className="py-16">
      <h1 className="text-5xl font-light">Journal</h1>

      <div className="mt-12 space-y-8">
        {posts.map((post: any) => (
          <div key={post.slug} className="border-b pb-8">
            <Link
              href={`/journal/${post.slug}`}
              className="text-2xl hover:underline"
            >
              {post.title}
            </Link>

            <p className="mt-2 text-gray-500">
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>

            <p className="mt-2">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
