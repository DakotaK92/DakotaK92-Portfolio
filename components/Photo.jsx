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
    <div className="relative flex w-full items-center justify-center py-10">
      <div className="absolute inset-x-8 top-1/2 h-52 -translate-y-1/2 rounded-full bg-[var(--accent-soft)] blur-3xl" />
      <div
        className={`relative aspect-square w-[300px] md:w-[350px] xl:w-[500px]
        transition-opacity duration-500 ease-out
        ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="absolute inset-6 rounded-full border border-[var(--border-soft)] bg-[var(--panel)] shadow-[var(--shadow)]" />
        <div className="absolute inset-0 rounded-full border border-[var(--accent)]/15" />
        <Image
          src="/assets/DakotaKPic2.png"
          priority
          quality={100}
          fill
          alt="Picture of Dakota King"
          className="object-contain p-4"
        />
      </div>
    </div>
  );
};

export default Photo;
