import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getAdjacentPosts } from "@/lib/posts";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  const { previous, next } = getAdjacentPosts(slug);

  return (
    <article className="mx-auto max-w-3xl py-20">
      <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
        {post.location}
      </p>

      <h1 className="text-5xl font-light mb-4">{post.title}</h1>

      <p className="text-gray-500 mb-12">
        {new Date(post.date).toLocaleDateString("en-GB")}
      </p>

      {post.coverImage && (
        <Image
          src={post.coverImage}
          alt={post.title}
          width={1200}
          height={800}
          className="mb-8 rounded-lg"
        />
      )}

      <div className="prose prose-lg max-w-none prose-headings:font-light prose-p:text-gray-700 prose-p:leading-8">
        {" "}
        <ReactMarkdown>{post.content}</ReactMarkdown>
        <nav className="mt-20 flex justify-between border-t pt-8">
          <div>
            {previous && (
              <Link
                href={`/journal/${previous.slug}`}
                className="text-sm text-gray-500 hover:text-white"
              >
                ← {previous.title}
              </Link>
            )}
          </div>

          <div>
            {next && (
              <Link
                href={`/journal/${next.slug}`}
                className="text-sm text-gray-500 hover:text-white"
              >
                {next.title} →
              </Link>
            )}
          </div>
        </nav>
      </div>
    </article>
  );
}
