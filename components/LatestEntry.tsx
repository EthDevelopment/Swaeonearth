import Link from "next/link";

interface LatestEntryProps {
  title: string;
  excerpt?: string;
  slug: string;
}

export default function LatestEntry({
  title,
  excerpt,
  slug,
}: LatestEntryProps) {
  return (
    <section className="mt-32 border-t pt-12">
      <p className="text-sm uppercase tracking-widest text-gray-500">
        Latest Entry
      </p>

      <Link
        href={`/journal/${slug}`}
        className="mt-2 block text-3xl font-light hover:opacity-70 transition"
      >
        {title}
      </Link>

      {excerpt && <p className="mt-4 text-gray-600">{excerpt}</p>}

      <Link
        href={`/journal/${slug}`}
        className="mt-3 block font-light hover:opacity-70 transition text-sm"
      >
        Read →
      </Link>
    </section>
  );
}
