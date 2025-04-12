"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
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
            <Link href={link.path} key={index} className={`${link.path === pathname && "text-amber-400 border-b-2 border-amber-400"
            } capitalize font-medium hover:text-amber-400 transition-all`}>
                {link.name}
            </Link>
        )
      })}
    </nav>
  )
}

export default Nav
