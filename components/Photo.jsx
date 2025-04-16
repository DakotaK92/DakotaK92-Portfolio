"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
            }
        }
      >
        {/* Image */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
            }}
        className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolute">
            {/* Import pic of me */} 
            <Image 
              src="/assets/photo.png"
              priority 
              quality={100}
              fill alt='Pickture of me' 
              className="object-contain"
            />
        </motion.div>
        {/* Circle try and go for a triangle instead */}
        <motion.svg 
          className="w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.polygon
            points="253,3 503,503 3,503"
            stroke="oklch(82.8% 0.189 84.429)" 
            strokeWidth="4"
            fill="transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, rotate: [0, 360] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          {/*<motion.circle
            cx="253" 
            cy="253" 
            r="250" 
            stroke="oklch(82.8% 0.189 84.429)" 
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{strokeDasharray: "24 10 0 0"}}
            animate={{
              strokeDasharray:["24 120 25 25","16 25 92 72","4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />*/}
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo
