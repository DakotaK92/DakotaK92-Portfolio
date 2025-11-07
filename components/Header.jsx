"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggler";

const Header = () => {
  const { resolvedTheme } = useTheme(); // resolvedTheme gives "light" or "dark" on the client
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const logoSrc =
    mounted && resolvedTheme === "dark"
      ? "/assets/king-crown-white.png"
      : "/assets/king-crown-blue.png";

  return (
    <header className="py-8 xl:py-12 px-6 transition-colors duration-300 bg-[var(--background)] text-[var(--foreground)]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src={logoSrc} alt="Dakota King logo" className="w-76 h-auto" />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />

          <Link href="/contact">
            <Button className="bg-[var(--accent)] hover:opacity-90 transition">Hire Me</Button>
          </Link>

          <ThemeToggle />
        </div>

        {/* Mobile navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
