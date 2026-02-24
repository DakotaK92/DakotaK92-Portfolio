"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Photo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full relative flex items-center justify-center py-10">
      <div
        className={`relative w-[300px] md:w-[350px] xl:w-[500px] aspect-square
        transition-opacity duration-500 ease-out
        ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <Image
          src="/assets/DakotaKPic2.png"
          priority
          quality={100}
          fill
          alt="Picture of Dakota King"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Photo;
