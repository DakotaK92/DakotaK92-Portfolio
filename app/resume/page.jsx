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
    "I'm a passionate web developer with a knack for creating dynamic and responsive web applications. I love exploring new technologies and continuously improving my skills.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Dakota K",
    },
    {
      fieldName: "Phone",
      fieldValue: "972-765-2528",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Years",
    },
    {
      fieldName: "Country",
      fieldValue: "USA",
    },
    {
      fieldName: "State",
      fieldValue: "Floida",
    },
    {
      fieldName: "Email",
      fieldValue: "dakotaking92@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English",
    },
  ],
};

// experience data
const experience = {
  // put resume here
  icon: undefined,
  title: 'My Experience',
  description: 'I have a diverse range of experience in web development and design. Here are some of the highlights:',
  // list of experience items
  items: [
    {
      company: "FASTSIGNS - Lakeland, FL",
      position: "Graphic Design and Production",
      duration: "Present - March 2025",
    },
    {
      company: "FASTSIGN - Carrollton, TX",
      position: "Graphic Design and Production",
      duration: "Sep 2022 - March 2025",
    },
    {
      company: "Signarama - McKinney, TX",
      position: "Graphic Design and Production",
      duration: "Jan 2022 - Present",
    },
    {
      company: "Amazon Delivery Driver - Mesquite, TX",
      position: "Frontend Developer",
      duration: "Jan 2022 - Present",
    },
    {
      company: "Target: Tech Associate - Rockwall, TX",
      position: "Frontend Developer",
      duration: "Jan 2022 - Present",
    },
  ],
};

const education = {
  // put resume here
  icon: undefined,
  title: 'My Education',
  description: 'I have a strong educational background in web development and design. Here are some of the highlights:',
  // list of experience items
  items: [
    {
      institution: "edX - Southern Methodist University (SMU)",
      degree: "Full Stack Developer Bootcamp",
      duration: "Nov. 2023 - May 2024",
    },
    {
      institution: "Collin College Community College",
      degree: "Graphic Design",
      duration: "May 2016 - May 2020",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have a diverse skill set that includes both technical and soft skills. Here are some of the key skills I possess:",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "html 5",
      },
      {
        icon: <FaCss3 />,
        name: "css 3",
      },
      {
        icon: <FaJs />,
        name: "javascript",
      },
      {
        icon: <FaReact />,
        name: "react.js",
      },
      {
        icon: <SiNextdotjs />,
        name: "next.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind.css",
      },
      {
        icon: <FaNodeJs />,
        name: "node.js",
      },
      {
        icon: <SiAdobecreativecloud />,
        name: "adobe creative cloud",
      },
    ]
};

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@components/ui/tooltip";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@components/ui/tabs";

import { ScrollArea } from "@components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
            {/* content */}
            <div className="min-h-[70vh] w-full">
              {/* experience */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl text-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li key={index} className="bg-blue-950 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-amber-400">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[60px] h-[6px] rounded-full bg-amber-400"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* education */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl text-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li key={index} className="bg-blue-950 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-amber-400">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[60px] h-[6px] rounded-full bg-amber-400"></span>
                              <p className="text-white/60">{item.institution}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* skills */}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                      <h3 className="text-4xl font-bold">{skills.title}</h3>
                      <h3 className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</h3>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                      {skills.skillList.map((skill, index) => {
                        return <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-blue-950 rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-amber-400 transition-all duration-300">{skill.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      })}
                    </ul>
                </div>
              </TabsContent>

              {/* about */}
              <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-h-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item,index) => {
                      return (
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
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
