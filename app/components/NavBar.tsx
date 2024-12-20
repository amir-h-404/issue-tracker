"use client";

import Link from "next/link";
import { GiSandSnake } from "react-icons/gi";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function NavBar() {
  // list of nav links:
  const links = [
    { id: 1, href: "/", content: "Dashboard" },
    { id: 2, href: "/issues", content: "Issues" },
  ];
  // get path of url:
  const currentPath = usePathname();
  return (
    <nav className="flex gap-6 text-xl mb-5 px-5 border-b h-14 items-center">
      <Link href="#">
        <GiSandSnake />
      </Link>
      <ul className="flex gap-6">
        {links.map((link) => (
          <Link
            key={link.id}
            className={classNames({
              "text-zinc-900": currentPath === link.href,
              "text-zinc-500": currentPath !== link.href,
              "hover:text-zinc-800 transition-colors": true,
            })}
            href={link.href}
          >
            {link.content}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
