"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggler";

const Header = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/assets/king-crown-white.png"
      : "/assets/king-crown-blue.png";

  return (
    <header className="py-6 xl:py-12 px-6 transition-colors duration-300 bg-[var(--background)] text-[var(--accent)] border-b border-gray-500/20">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src={logoSrc} alt="Dakota King logo" className="w-76 h-auto" />
        </Link>

        {/* Desktop Navigation (1024px+) */}
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="text-[var(--button-text)] bg-[var(--accent)] hover:opacity-90 hover:text-[var(--button-text)] transition">
              Hire Me
            </Button>
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile & Tablet Navigation (<1024px) */}
        <div className="md:block lg:hidden flex items-center gap-4">
          <MobileNav />
        </div>

      </div>
    </header>
  );
};

export default Header;
