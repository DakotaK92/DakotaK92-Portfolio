"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/assets/king-crown-white.png"
      : "/assets/king-crown-blue.png";

  return (
    <header className="sticky top-0 z-40 px-4 py-5 transition-colors duration-300 md:px-6 xl:py-7">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logoSrc}
            alt="Dakota King logo"
            width={304}
            height={78}
            priority
            className="h-auto w-44 md:w-52"
          />
        </Link>

        {/* Desktop Navigation (1024px+) */}
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Button
            asChild
            className="bg-[var(--accent)] text-[var(--button-text)] shadow-lg hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] hover:text-[var(--button-text)]"
          >
            <Link href="/contact">
              Hire Me
            </Link>
          </Button>
        </div>

        {/* Mobile & Tablet Navigation (<1024px) */}
        <div className="flex items-center gap-4 md:block lg:hidden">
          <MobileNav />
        </div>

      </div>
    </header>
  );
};

export default Header;
