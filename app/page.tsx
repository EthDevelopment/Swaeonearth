import Hero from "@/components/Hero";
import LatestEntry from "@/components/LatestEntry";
import { getLatestPost } from "@/lib/posts";

export default function Home() {
  const latestPost = getLatestPost();

  return (
    <main>
      <Hero />

      <LatestEntry
        title={latestPost.title}
        excerpt={latestPost.excerpt}
        slug={latestPost.slug}
      />
    </main>
  );
}
