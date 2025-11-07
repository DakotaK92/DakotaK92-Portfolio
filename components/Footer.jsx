import { FaGithub, FaLinkedin, FaBehanceSquare } from "react-icons/fa"

import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-950">
      <div className="mx-auto max-w-5xl py-10 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <a href="/">
            <img src="/assets/king-crown-white.png" alt="Dakota King logo" className="h-12" />
          </a>
        </div>

          <ul className="mt-6 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 font-bold">
            <li>
                <a className="text-[var(--footer-color)] transition hover:text-[var(--accent)] [var(--accent)]" href="/"> Home </a>
            </li>
            <li>
                <a className="text-[var(--footer-color)] transition hover:text-[var(--accent)] [var(--accent)]" href="/resume"> Resume </a>
            </li>
            <li>
                <a className="text-[var(--footer-color)] transition hover:text-[var(--accent)] [var(--accent)]" href="/work"> Work </a>
            </li>
            <li>
                <a className="text-[var(--footer-color)] transition hover:text-[var(--accent)] [var(--accent)]" href="/contact"> Contact </a>
            </li>
          </ul>

          <ul className="mt-6 flex justify-center gap-6 md:gap-8 sm:gap-2">
            <li>
              <a 
                href="https://github.com/dakotak92" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--footer-color)] transition hover:text-[var(--accent)]"
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
                className="text-[var(--footer-color)] transition hover:text-[var(--accent)]"
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
                className="text-[var(--footer-color)] transition hover:text-[var(--accent)]"
              >
                <span className="sr-only">Behance</span>
                <FaBehanceSquare className="w-6 h-6"/>
                </a>
            </li>
          </ul>
      </div>
    </footer>
  )
}

export default Footer
