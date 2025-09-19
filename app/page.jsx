import { Button } from "@components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@components/Social";
import Photo from "@components/Photo";
import Stats from "@components/Stats";

export default function Home() {
  return (
    <section className="h-full p-2">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */} 
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Graphic Designer and Full Stack Developer</span>
            <h1 className="h1 mb-6">Hello! I'm <br /> <span className="text-amber-400">Dakota King</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">I excel at crafting a elegant digital experiences and I am proficient in various programing languages and technologies</p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button size="lg" className="uppercase flex items-center gap-2">
              <a 
                href="/assets/resume/Dakota King-Resume 2025.pdf" 
                download 
                className="flex items-center gap-2"
              >
                <span>Download my Resume</span>
                <FiDownload className="text-xl"/>
              </a>
            </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                containerStyles="flex gap-6" 
                iconStyles="w-9 h-9 bg-amber-400 rounded-full flex justify-center items-center text-black text-base hover:bg-yellow-200 hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* photo */} 
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
