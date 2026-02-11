'use client';

import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: 'home', path: '/' },
  { name: 'resume', path: '/resume' },
  { name: 'work', path: '/work' },
  { name: 'contact', path: '/contact' },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-[var(--accent)]" />
      </SheetTrigger>

      <SheetContent className="flex flex-col p-2">
        {/* logo */}
        <Link href="/" className="flex justify-center mt-20">
          <img src="/assets/king-crown-white.png" className="w-56 p-2" />
        </Link>

        {/* nav */}
        <nav className="flex flex-col items-center gap-4 p-4 text-white">
          {links.map((link, index) => (
            <SheetClose asChild key={index}>
              <Link
                href={link.path}
                className={`text-xl capitalize transition-all hover:text-amber-400 ${
                  link.path === pathname ? "text-amber-400 border-b-2" : ""
                }`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
