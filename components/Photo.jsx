"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const Photo = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      {/* Fade wrapper */}
      <div
        className={`relative transition-opacity duration-[400ms] ease-in ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Image container */}
        <div
          className={`w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] relative transition-opacity duration-[400ms] ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src="/assets/DakotaKPic2.png"
            priority
            quality={100}
            fill
            alt="Picture of me"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Photo
