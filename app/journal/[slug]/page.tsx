import { getPostBySlug } from "@/lib/posts";
import ReactMarkdown from "react-markdown";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  return (
    <article className="py-16 max-w-3xl">
      <h1 className="text-5xl font-light mb-4">{post.title}</h1>

      <p className="text-gray-500 mb-12">
        {new Date(post.date).toLocaleDateString("en-GB")}
      </p>

      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
