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
              src="/assets/DakotaKPic.png"
              priority 
              quality={100}
              fill alt='Picture of me'
              className="object-contain"
            />
        </motion.div>
        <motion.svg 
          className="w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.polygon/>
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo
