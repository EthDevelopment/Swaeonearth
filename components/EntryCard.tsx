import Link from "next/link";

interface EntryCardProps {
  title: string;
  date: string;
  excerpt?: string;
  slug: string;
}

export default function EntryCard({
  title,
  date,
  excerpt,
  slug,
}: EntryCardProps) {
  return (
    <article className="border-b pb-8">
      <p className="text-sm text-gray-500">
        {new Date(date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>

      <Link
        href={`/journal/${slug}`}
        className="mt-2 block text-3xl font-light hover:opacity-70 transition"
      >
        {title}
      </Link>

      {excerpt && <p className="mt-3 text-gray-600">{excerpt}</p>}

      <Link
        href={`/journal/${slug}`}
        className="mt-3 block font-light hover:opacity-70 transition text-sm"
      >
        Read →
      </Link>
    </article>
  );
}
