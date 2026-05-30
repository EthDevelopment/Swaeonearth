import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-6 text-sm">
        <Link href="/">Dashboard</Link>
        <Link href="/charity">Charity</Link>
        <Link href="/journal">Journal</Link>
        <Link href="/journey">Journey</Link>
        <Link href="/gear">Gear</Link>
        <Link href="/about">About</Link>
      </div>

      <Link
        href="/support"
        className=" px-4 py-2 text-sm text-amber-600 transition hover:text-amber-500 "
      >
        Support
      </Link>
    </nav>
  );
}
