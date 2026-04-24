"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 px-4 py-4 transition-colors duration-300 md:px-6 xl:py-5">
      <div className="glass-panel container mx-auto flex items-center justify-between rounded-full px-5 py-3 md:px-7">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/king-crown-white.png"
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
