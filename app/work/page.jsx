"use client"

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

{/* components */}
import WorkSliderBtn from "@components/WorkSliderBtn";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project One",
    description: "A personal portfolio website built with Next.js and Tailwind CSS.",
    stack: [{name: "Next.js"}, {name: "Tailwind CSS"}, {name: "Javascript"}],
    image: "/assets/work/project1.png",
    github: "https://github.com/DakotaK92/DakotaK92-Portfolio",
    live: "https://dakotavking.dev/",
  },
  {
    num: "02",
    category: "frontend",
    title: "Project Two",
    description: "A personal project for a friends company. I built a website for them using React.js.",
    stack: [{name: "React.js"}, {name: "CSS"}, {name: "Javascript"}],
    image: "/assets/work/project2.png",
    github: "https://github.com/DakotaK92/myPocketBard",
    live: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "Project Three",
    description: "A personal portfolio website built with React.js and CSS.",
    stack: [{name: "React.js"}, {name: "CSS"}, {name: "Javascript"}],
    image: "/assets/work/project3.png",
    github: "https://github.com/DakotaK92/Challenge-20-React-Portfolio",
    live: "",
  },

]

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex])
  }
  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'}
      }} 
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 p-4"
      >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline */}
              <div className="text-8xl leading-none font-extrabold text-[var(--accent)]">
                {project.num}
                </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-[var(--color)] group-hover:text-[var(--accent)] transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-[var(--color)]">
                {project.description}
              </p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-[var(--color)]">
                      {item.name}
                      {/* remove last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className="border border-[var(--foreground)]/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-[var(--foreground)]/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-[var(--foreground)] text-3xl group-hover:text-[var(--color)"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-[var(--foreground)]/5 flex justify-center items-center group">
                      <BsGithub className="text-[var(--foreground)] text-3xl group-hover:text-[var(--hover)]"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-[var(--background)]">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-blue-500/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image 
                          src={project.image} 
                          fill 
                          className="object-contain" 
                          alt='' 
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* slider buttons */}
              <WorkSliderBtn 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                btnStyles="bg-[var(--background)] border-1 hover:bg-[var(--accent)] hover:text-[var(--foreground-hover)] hover:border-none text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work
