"use client";

import { motion } from "framer-motion";

const featuredProject = {
  title: "Dakota King Portfolio",
  description:
    "Personal portfolio website showcasing projects and skills.",
  video: "/assets/intro-videob_1.mp4",
  tools: [
    { name: "React", color: "bg-sky-100 text-sky-700" },
    { name: "Next.js", color: "bg-gray-200 text-gray-900" },
    { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-700" },
    { name: "Framer Motion", color: "bg-pink-100 text-pink-700" },
  ],
  github: "https://github.com/DakotaK92/DakotaK92-Portfolio",
  live: "https://dakotavking.dev",
};

const projects = [
  {
    id: 1,
    title: "MyPocketBard",
    description:
      "AI-powered songwriting assistant with lyric generation and rhyme tools.",
    image: "/assets/work/development-image-1.jpg",
    tools: [
      { name: "React", color: "bg-sky-100 text-sky-700" },
      { name: "Next.js", color: "bg-gray-200 text-gray-900" },
      { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-700" },
    ],
    github: "https://github.com/DakotaK92/myPocketBard",
    live: "https://my-pocket-bard.vercel.app/",
    isNew: true,
  },
  {
    id: 2,
    title: "Duncanville Bookstore App",
    description:
      "Mobile app for browsing comics store events, earn rewards for shopping and looking up comic book info.",
    image: "/assets/work/design-image-1.jpg",
    tools: [
      { name: "React-Native", color: "bg-sky-100 text-sky-700" },
      { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-700" },
      { name: "Clerk", color: "bg-green-200 text-green-700" },
    ],
    github: "https://github.com/DakotaK92/DuncanvilleComics-ReactNative",
    live: "https://github.com/DakotaK92/DuncanvilleComics-ReactNative",
    isNew: true,
  },
  {
    id: 3,
    title: "Dakota King Portfolio",
    description:
      "Personal portfolio website showcasing projects and skills.",
    image: "/assets/work/development-image-3.jpg",
    tools: [
      { name: "Framer Motion", color: "bg-pink-100 text-pink-700" },
      { name: "Next.js", color: "bg-gray-200 text-gray-900" },
      { name: "Tailwind CSS", color: "bg-cyan-100 text-cyan-700" },
    ],
    github: "https://github.com/DakotaK92/DakotaK92-Portfolio",
    live: "https://dakotavking.dev",
    isNew: false,
  },
];

const designs = [
  {
    id: 1,
    title: "Duncanville Bookstore",
    description:
      "Rebrand and new identity for local bookstore with modern, fun and approachable design.",
    image: "/assets/work/design-image-1.jpg",
    tools: [
      { name: "Illustrator", color: "bg-orange-200 text-gray-900" },
      { name: "Photoshop", color: "bg-sky-100 text-gray-900" },
    ],
    behance: "https://www.behance.net/dakotaking",
    isNew: true,
  },
  {
    id: 2,
    title: "Lick",
    description:
      "Ice cream brand identity and packaging design. Final project for branding degree.",
    image: "/assets/work/design-image-2.jpg",
    tools: [
      { name: "Illustrator", color: "bg-orange-200 text-gray-900" },
      { name: "Photoshop", color: "bg-sky-100 text-gray-900" },
    ],
    behance: "https://www.behance.net/dakotaking",
    isNew: false,
  },
  {
    id: 3,
    title: "Dicey Dice",
    description:
      "Logo and branding for a tie die inspired clothing line. Dnd themed heavy designs.",
    image: "/assets/work/design-image-3.jpg",
    tools: [
      { name: "Illustrator", color: "bg-orange-200 text-gray-900" },
      { name: "Photoshop", color: "bg-sky-100 text-gray-900" },
    ],
    behance: "https://www.behance.net/dakotaking",
    isNew: true,
  },
];


const Works = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
      }}
      className="w-full px-6 py-16 max-w-7xl mx-auto"
    >
      <section className="w-full max-w-7xl mx-auto">
        {/* ================= HERO / FEATURED WORK ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 bg-white p-8 rounded-xl">
          {/* Video */}
          <div className="relative w-full rounded-xl overflow-hidden bg-black">
            <video
              src={featuredProject.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Description */}
          <div className="text-black flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">
              {featuredProject.title}
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {featuredProject.description}
            </p>

            {/* Tools */}
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Tools Used</h4>
              <div className="flex flex-wrap gap-2">
                {featuredProject.tools.map((tool) => (
                  <span
                    key={tool.name}
                    className={`px-3 py-1 text-sm rounded-full ${tool.color}`}
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={featuredProject.github}
                target="_blank"
                className="px-6 py-3 rounded-lg hover:bg-[var(--accent-hover)] text-[var(--button-text)] transition bg-[var(--accent)]"
              >
                GitHub
              </a>
              <a
                href={featuredProject.live}
                target="_blank"
                className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-80 transition"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>

      {/* ================= PROJECT CARDS ================= */}
      <h2 className="text-3xl font-bold mb-6">Development Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative rounded-xl overflow-hidden bg-white"
            >
              {/* Ribbon */}
              {project.isNew && (
                <span className="absolute top-4 left-[-40px] rotate-[-45deg] bg-red-500 text-white text-xs px-12 py-1">
                  NEW
                </span>
              )}

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="text-black text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool.name}
                      className={`px-3 py-1 text-sm rounded-full ${tool.color}`}
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex-1 text-center px-4 py-2 rounded-md text-sm hover:bg-[var(--accent-hover)] text-[var(--button-text)] transition bg-[var(--accent)]"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex-1 text-center px-4 py-2 bg-black text-white rounded-md text-sm hover:opacity-80 transition"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DESIGN CARDS ================= */}
        <h2 className="text-3xl font-bold mt-10 mb-6">Design Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {designs.map((design) => (
            <div
              key={design.id}
              className="relative rounded-xl overflow-hidden bg-white"
            >
              {/* Ribbon */}
              {design.isNew && (
                <span className="absolute top-4 left-[-40px] rotate-[-45deg] bg-red-500 text-white text-xs px-12 py-1">
                  NEW
                </span>
              )}

              {/* Image */}
              <img
                src={design.image}
                alt={design.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="text-black text-xl font-semibold mb-2">
                  {design.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {design.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {design.tools.map((tool) => (
                    <span
                      key={tool.name}
                      className={`px-3 py-1 text-sm rounded-full ${tool.color}`}
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={design.behance}
                    target="_blank"
                    className="flex-1 text-center px-4 py-2 bg-black text-white rounded-md text-sm hover:opacity-80 transition"
                  >
                    Behance
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.section>
  );
};

export default Works;
