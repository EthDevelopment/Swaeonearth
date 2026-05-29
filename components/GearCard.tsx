import Image from "next/image";

interface GearCardProps {
  name: string;
  category: string;
  image: string;
  description: string;
  link?: string;
}

export default function GearCard({
  name,
  category,
  image,
  description,
  link,
}: GearCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border">
      <Image
        src={image}
        alt={name}
        width={800}
        height={600}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">
        <p className="mb-2 text-sm uppercase tracking-widest text-amber-500">
          {category}
        </p>

        <h2 className="mb-4 text-3xl font-light">{name}</h2>

        <p className="mb-6 text-gray-500">{description}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-amber-500"
          >
            View Gear →
          </a>
        )}
      </div>
    </div>
  );
}
