"use client"

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";


const services = [
  {
    num: "01",
    title: "Web Development",
    description: "I build responsive and interactive websites using the latest technologies.",
    href: '',
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "I create user-friendly and visually appealing interfaces for web and mobile applications.",
    href: '',
  },
  {
    num: "03",
    title: "Graphic Design",
    description: "I create stunning graphics and illustrations for various digital platforms.",
    href: '',
  },
  {
    num: "04",
    title: "Logo Design",
    description: "I design unique and memorable logos that represent your brand identity.",
    href: '',
  }
]

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 p-4">
      <div className="container mx-auto">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
      >
            {services.map((service, index) => {
              return (
                <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                  {/* top */}
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold group-hover:text-amber-400 transition-all duration-500">{service.num}</div>
                    <Link href={service.href || '#'} className="w-[70px] h-[70px] rounded-full bg-white group-hover:text-amber-400 transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                      <BsArrowDownRight className="text-blue-800 text-3xl"/>
                    </Link>
                  </div>
                  {/* heading */}
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-amber-400 transition-all duration-500">{service.title}</h2>
                  {/* description */}
                  <p className="text-white/60">{service.description}</p>
                  {/* border */}
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              )
            })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
