import Link from "next/link";
import { GiSandSnake } from "react-icons/gi";

export default function NavBar() {
  // list of nav links:
  const links = [
    { id: 1, href: "/", content: "Dashboard" },
    { id: 2, href: "/issue", content: "Issues" },
  ];
  return (
    <nav className="flex gap-6 text-xl mb-5 px-5 border-b h-14 items-center">
      <Link href="#">
        <GiSandSnake />
      </Link>
      <ul className="flex gap-6">
        {links.map((link) => (
          <Link
            key={link.id}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            href={link.href}
          >
            {link.content}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
