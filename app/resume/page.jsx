"use client"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs
} from "react-icons/fa";

import {
  SiAdobecreativecloud,
  SiTailwindcss,
  SiNextdotjs
} from "react-icons/si";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import { ScrollArea } from "../../components/ui/scroll-area";

const about = {
  title: "About Me",
  description:
    "I'm a full-stack web developer with a background in graphic design and production, allowing me to approach development with both technical precision and strong visual awareness. I specialize in building responsive, performance-focused applications using React, Next.js, and modern UI frameworks. My experience in fast-paced production environments has strengthened my problem-solving skills, attention to detail, and ability to deliver high-quality work under tight deadlines.",
  info: [
    { fieldName: "Name:", fieldValue: "Dakota King" },
    { fieldName: "Experience:", fieldValue: "2 Years" },
    { fieldName: "Country:", fieldValue: "USA" },
    { fieldName: "State:", fieldValue: "Florida" },
    { fieldName: "Email:", fieldValue: "dakotaking92@gmail.com" },
    { fieldName: "Freelance:", fieldValue: "Available" },
    { fieldName: "Language:", fieldValue: "English" },
  ],
};

const experience = {
  title: "My Experience",
  description:
    "A blend of development, production design, and customer-focused roles that have strengthened both my technical and collaborative skillsets.",
  items: [
    {
      company: "Walt Disney World - Orlando, FL",
      position: "Disney College Program",
      duration: "Jan 2026 - Aug 2026",
    },
    {
      company: "FASTSIGNS - Lakeland, FL",
      position: "Graphic Design & Production",
      duration: "Mar 2025 - Sept 2025",
    },
    {
      company: "FASTSIGNS - Carrollton, TX",
      position: "Graphic Design & Production",
      duration: "Sept 2022 - Mar 2025",
    },
    {
      company: "Signarama - McKinney, TX",
      position: "Graphic Design and Production",
      duration: "May 2021 - August 2021",
    },
    {
      company: "Amazon - Mesquite, TX",
      position: "Package Handler at Amazon",
      duration: "November 2020 - April 2021",
    },
    {
      company: "Target - Rockwall, TX",
      position: "Tech Associate",
      duration: "March 2016 - November 2020",
    },
  ],
};

const education = {
  title: "My Education",
  description: "Formal education combined with hands-on development training.",
  items: [
    {
      institution: "edX - Southern Methodist University (SMU)",
      degree: "Full Stack Developer Boot-camp",
      duration: "Nov. 2023 - May 2024",
    },
    {
      institution: "Collin College Community College",
      degree: "Associate's Degree in Graphic Design",
      duration: "May 2016 - May 2020",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "A blend of frontend, backend, and design tools that allow me to build complete, polished web experiences.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiAdobecreativecloud />, name: "Adobe Creative Cloud" },
  ]
};

const Resume = () => {
  return (
    <section className="page-shell py-12 xl:py-16">
      <div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4},
        }}
        className="section-wrap min-h-[80vh] flex items-center justify-center"
      >
        <div className="w-full">
          <div className="mb-8 max-w-3xl">
            <span className="section-kicker">Resume</span>
            <h1 className="section-title mt-5">A quick snapshot of my experience, education, and skillset.</h1>
            <p className="section-copy mt-4">
              This section is designed to make it easy to scan the parts of my background that matter most, from hands-on production experience to modern frontend development work.
            </p>
          </div>

          <Tabs defaultValue="experience" className="flex flex-col gap-8 p-4 xl:flex-row xl:items-start">
            <TabsList className="mx-auto flex w-full max-w-[320px] flex-col xl:mx-0 xl:self-start">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

            <div className="min-h-[70vh] w-full">
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-[var(--text)]">{experience.title}</h3>
                  <p className="mx-auto max-w-[600px] text-[var(--muted-text)] xl:mx-0">{experience.description}</p>

                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                      {experience.items.map((item, index) => {
                        return (
                          <li key={index} className="glass-panel flex h-[184px] flex-col items-center justify-center gap-1 rounded-[1.5rem] px-8 py-6 lg:items-start">
                            <span className="font-semibold text-[var(--highlight)]">
                              {item.duration}
                            </span>
                            <h3 className="min-h-[60px] max-w-[260px] text-center text-xl font-black text-[var(--text)] lg:text-left">
                              {item.position}
                            </h3>

                            <div className="flex items-center gap-3">
                              <span className="h-[6px] w-[40px] rounded-full bg-[var(--accent)]"></span>
                              <p className="text-[var(--muted-text)]">{item.company}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-[var(--text)]">{education.title}</h3>
                  <p className="mx-auto max-w-[600px] text-[var(--muted-text)] xl:mx-0">{education.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                      {education.items.map((item, index) => {
                        return (
                          <li key={index} className="glass-panel flex h-[184px] flex-col items-center justify-center gap-1 rounded-[1.5rem] px-8 py-6 lg:items-start">
                            <span className="font-semibold text-[var(--highlight)]">{item.duration}</span>
                            <h3 className="min-h-[60px] max-w-[260px] text-center text-xl font-black text-[var(--text)] lg:text-left">{item.degree}</h3>
                            <div className="flex items-center gap-3">
                              <span className="h-[6px] w-[40px] rounded-full bg-[var(--accent)]"></span>
                              <p className="text-[var(--muted-text)]">{item.institution}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              <TabsContent value="skills" className="h-full w-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold text-[var(--text)]">{skills.title}</h3>
                    <p className="mx-auto max-w-[600px] text-[var(--muted-text)] xl:mx-0">{skills.description}</p>
                  </div>
                  <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="glass-panel group flex h-[150px] w-full flex-col items-center justify-center gap-3 rounded-[1.5rem]">
                                <div className="text-6xl text-[var(--accent)] transition-all duration-300 group-hover:text-[var(--highlight)]" aria-hidden="true">{skill.icon}</div>
                                <span className="text-center text-sm font-bold uppercase tracking-[0.16em] text-[var(--muted-text)]">{skill.name}</span>
                                <span className="sr-only">{skill.name}</span>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold text-[var(--text)]">{about.title}</h3>
                  <p className="mx-auto max-h-[600px] leading-8 text-[var(--muted-text)] xl:mx-0">{about.description}</p>
                  <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-y-6 xl:mx-0 xl:grid-cols-2">
                    {about.info.map((item,index) => {
                      return (
                        <li key={index} className="glass-panel flex items-center justify-center gap-4 rounded-[1.25rem] px-5 py-4 xl:justify-start">
                          <span className="font-semibold text-[var(--text)]">{item.fieldName}</span>
                          <span className="text-xl text-[var(--accent)]">{item.fieldValue}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default Resume
