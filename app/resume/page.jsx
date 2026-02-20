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

// about data
const about = {
  title: "About Me",
  description:
    "I’m a full-stack web developer with a background in graphic design and production, allowing me to approach development with both technical precision and strong visual awareness. I specialize in building responsive, performance-focused applications using React, Next.js, and modern UI frameworks. My experience in fast-paced production environments has strengthened my problem-solving skills, attention to detail, and ability to deliver high-quality work under tight deadlines.",
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

// experience data
const experience = {
  title: 'My Experience',
  description: 
    "A blend of development, production design, and customer-focused roles that have strengthened both my technical and collaborative skillsets.",
  // list of experience items
  items: [
    {
      company: "Walt Disney World - Orlando, FL",
      position: "Disney College Program",
      duration: "Jan 2026 – Aug 2026",
    },
    {
      company: "FASTSIGNS - Lakeland, FL",
      position: "Graphic Design & Production",
      duration: "Mar 2025 – Sept 2025",
    },
    {
      company: "FASTSIGNS - Carrollton, TX",
      position: "Graphic Design & Production",
      duration: "Sept 2022 – Mar 2025",
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
      duration: "Marck 2016 - November 2020",
    },
  ],
};

const education = {
  title: 'My Education',
  description: 
  'Formal education combined with hands-on development training.',
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
      { icon: <FaHtml5 /> },
      { icon: <FaCss3 /> },
      { icon: <FaJs /> },
      { icon: <FaReact /> },
      { icon: <SiNextdotjs /> },
      { icon: <SiTailwindcss /> },
      { icon: <FaNodeJs /> },
      { icon: <SiAdobecreativecloud /> },
    ]
};

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../components/ui/tooltip";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";

import { ScrollArea } from "../../components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        {/* Sidebar */}
        <div className="container mx-auto">
          <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px] p-4">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
              <TabsTrigger
                value="experience"
                className="cursor-pointer 
                  text-muted-foreground 
                  dark:text-muted-foreground
                  data-[state=active]:text-foreground
                  dark:data-[state=active]:text-white"
              >
                Experience
              </TabsTrigger>

              <TabsTrigger
                value="education"
                className="cursor-pointer 
                  text-muted-foreground 
                  dark:text-muted-foreground
                  data-[state=active]:text-foreground
                  dark:data-[state=active]:text-white"
              >
                Education
              </TabsTrigger>

              <TabsTrigger
                value="skills"
                className="cursor-pointer 
                  text-muted-foreground 
                  dark:text-muted-foreground
                  data-[state=active]:text-foreground
                  dark:data-[state=active]:text-white"
              >
                Skills
              </TabsTrigger>

              <TabsTrigger
                value="about"
                className="cursor-pointer 
                  text-muted-foreground 
                  dark:text-muted-foreground
                  data-[state=active]:text-foreground
                  dark:data-[state=active]:text-white"
              >
                About me
              </TabsTrigger>
            </TabsList>


            {/* Content */}
            <div className="min-h-[70vh] w-full">

              {/* Experience */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-[var(--text)]">{experience.title}</h3>
                  <p className="max-w-[600px] text-[var(--text)] mx-auto xl:mx-0">{experience.description}</p>

                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li key={index} className="bg-[var(--foreground)] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-amber-400">
                              {item.duration}
                            </span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-white">
                              {item.position}
                            </h3>

                            <div className="flex items-center gap-3">
                              {/* line accent */}
                              <span className="w-[40px] h-[6px] rounded-full bg-amber-400"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* Education */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-[var(--text)] mx-auto xl:mx-0">{education.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li key={index} className="bg-[var(--foreground)] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-amber-400">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-white">{item.degree}</h3>
                            <div className="flex items-center gap-3">
                              {/* line accent */}
                              <span className="w-[40px] h-[6px] rounded-full bg-amber-400"></span>
                              <p className="text-white/60">{item.institution}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* Skills */}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                      <h3 className="text-4xl font-bold text-[var(--text)]">{skills.title}</h3>
                      <h3 className="max-w-[600px] text-[var(--text)] mx-auto xl:mx-0">{skills.description}</h3>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                      {skills.skillList.map((skill, index) => {
                        return <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[var(--foreground)] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-amber-400 transition-all duration-300 text-white">{skill.icon}</div>
                              </TooltipTrigger>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      })}
                    </ul>
                </div>
              </TabsContent>

              {/* About */}
              <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold text-[var(--text)]">{about.title}</h3>
                  <p className="max-h-[600px] text-[var(--text)] mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item,index) => {
                      return (
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-[var(--text)] text-semibold">{item.fieldName}</span>
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
      </motion.div>
    </div>
  )
}

export default Resume