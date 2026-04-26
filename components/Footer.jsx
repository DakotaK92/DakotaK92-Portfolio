import Image from "next/image";
import { FaGithub, FaLinkedin, FaBehanceSquare } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-4 pb-8 pt-16 md:px-6">
      <div className="section-wrap">
        <div className="glass-panel mx-auto max-w-5xl rounded-[2.25rem] px-6 py-10 md:px-10">
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src="/assets/king-crown-white.png"
                alt="Dakota King logo"
                width={144}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-center leading-7 text-[var(--muted-text)]">
            Portfolio and project work by Dakota King, blending graphic design instincts with modern frontend development.
          </p>

          <ul className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-[0.18em] sm:gap-6 md:gap-8">
            <li>
              <Link href="/" className="text-[var(--text)] transition-colors duration-200 hover:text-[var(--accent)]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/resume" className="text-[var(--text)] transition-colors duration-200 hover:text-[var(--accent)]">
                Resume
              </Link>
            </li>
            <li>
              <Link href="/work" className="text-[var(--text)] transition-colors duration-200 hover:text-[var(--accent)]">
                Work
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-[var(--text)] transition-colors duration-200 hover:text-[var(--accent)]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[var(--text)] transition-colors duration-200 hover:text-[var(--accent)]">
                Contact
              </Link>
            </li>
          </ul>

          <ul className="mt-8 flex justify-center gap-4 sm:gap-6 md:gap-8">
            <li>
              <a
                href="https://github.com/dakotak92"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/60 text-[var(--accent)] shadow-lg hover:-translate-y-0.5 hover:bg-[var(--accent)] hover:text-[var(--button-text)] dark:bg-white/6"
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
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/60 text-[var(--accent)] shadow-lg hover:-translate-y-0.5 hover:bg-[var(--accent)] hover:text-[var(--button-text)] dark:bg-white/6"
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
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white/60 text-[var(--accent)] shadow-lg hover:-translate-y-0.5 hover:bg-[var(--accent)] hover:text-[var(--button-text)] dark:bg-white/6"
              >
                <span className="sr-only">Behance</span>
                <FaBehanceSquare className="w-6 h-6" />
              </a>
            </li>
          </ul>

          <p className="mt-8 text-center text-sm text-[var(--muted-text)]">
            © {new Date().getFullYear()} Dakota King. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
