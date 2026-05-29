import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 text-sm">
      <Link href="/">Home</Link>
      <Link href="/journal">Journal</Link>
      <Link href="/journey">Journey</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
