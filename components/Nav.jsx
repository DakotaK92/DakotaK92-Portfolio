"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    }
]
 
const Nav = () => {
    const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
            <Link href={link.path} key={index} className={`${link.path === pathname && "text-[var(--accent)] border-b-2 border-[var(--accent)]"
            } capitalize font-bold hover:text-[var(--accent)] transition-all text-l`}>
                {link.name}
            </Link>
        )
      })}
    </nav>
  )
}

export default Nav
