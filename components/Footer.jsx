import { FaGithub, FaLinkedin, FaBehanceSquare } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-950 border-t border-white/10">
      <div className="mx-auto max-w-5xl py-10 px-6">
        
        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/">
            <img
              src="/assets/king-crown-white.png"
              alt="Dakota King logo"
              className="h-12"
            />
          </Link>
        </div>

        {/* Navigation */}
        <ul className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 font-bold">
          <li>
            <Link href="/" className="text-[var(--footer-color)] transition-colors duration-200 hover:text-amber-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/resume" className="text-[var(--footer-color)] transition-colors duration-200 hover:text-amber-400">
              Resume
            </Link>
          </li>
          <li>
            <Link href="/work" className="text-[var(--footer-color)] transition-colors duration-200 hover:text-amber-400">
              Work
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-[var(--footer-color)] transition-colors duration-200 hover:text-amber-400">
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <ul className="mt-6 flex justify-center gap-4 sm:gap-6 md:gap-8">
          <li>
            <a
              href="https://github.com/dakotak92"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--footer-color)] transition-colors duration-200 hover:text-amber-400"
            >
              <span className="sr-only">GitHub</span>
              <FaGithub className="w-6 h-6" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/dakotaking92/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--footer-color)] transition-colors duration-200 hover:text-amber-400"
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="w-6 h-6" />
            </a>
          </li>

          <li>
            <a
              href="https://www.behance.net/dakotaking"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--footer-color)] transition-colors duration-200 hover:text-amber-400"
            >
              <span className="sr-only">Behance</span>
              <FaBehanceSquare className="w-6 h-6" />
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <p className="mt-8 text-center text-sm text-[var(--footer-color)]">
          © {new Date().getFullYear()} Dakota King. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
