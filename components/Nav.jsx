"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  //{ name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link) => {
        const isActive =
          link.path === "/"
            ? pathname === "/"
            : pathname.startsWith(link.path);

        return (
          <Link
            href={link.path}
            key={link.path}
            className={`capitalize font-bold text-lg transition-all ${
              isActive
                ? "text-[var(--accent)] border-b-2 border-[var(--accent)]"
                : ""
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
