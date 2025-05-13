'use client';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from"react-icons/ci"

const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'services',
        path: '/services',
    },
    {
        name: 'resume',
        path: '/resume',
    },
    {
        name: 'work',
        path: '/work',
    },
    {
        name: 'contact',
        path: '/contact',
    },
];

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center md:hidden p-2">
        <CiMenuFries className="text-[32px] text-amber-400"/>
      </SheetTrigger>
      <SheetContent className="flex flex-col p-2">
        {/* logo */}
        <a href="/" className='flex justify-center'>
            <img src="/assets/king-crown.png" className="flex p-6"/>
        </a>
        {/* nav */}
        <nav className='flex flex-col justify-center items-center gap-4 p-4'>
            {links.map((link, index) => {
                return (
                    <Link 
                        href={link.path} 
                        key={index} 
                        // fix border accent color
                        className={`${
                            link.path === pathname &&
                            "text-amber-400 border-b-2"
                        } text-xl capitalize hover:text-amber-400 transition-all`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav
