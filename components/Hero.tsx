import { FaLocationArrow, FaDownload, FaLinkedin } from "react-icons/fa6";

import { FlipWords } from "./ui/FlipWords";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pb-20 pt-20 sm:pt-36">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.02]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>
      <div className="relative my-10 sm:my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-xs text-green-400 font-medium tracking-wide">Open to Work</span>
            </div>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-xs text-white/50 font-medium tracking-wide">Coding since 2021</span>
            <span className="text-white/30 text-xs">·</span>
            <a
              href="https://www.linkedin.com/in/alexandra-hockett/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-white/50 hover:text-purple transition-colors"
            >
              <FaLinkedin size={11} />
              <span>LinkedIn</span>
            </a>
          </div>
          <h2 className="text-center text-[9px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-blue-100">
            Full Stack Developer | AI Integration Specialist
          </h2>
          <TextGenerateEffect
            className="text-center text-[28px] sm:text-[40px] md:text-5xl lg:text-6xl"
            words="Hi, I'm Alexandra. I craft dynamic and responsive web apps"
          />
          <div className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Based in Portugal, I bring ideas to life with{" "}
            <FlipWords
              words={[
                "React.js",
                "Next.js",
                "TypeScript",
                "AI Integration",
                "Full Stack Dev",
                "SaaS Platforms",
              ]}
              className="font-semibold text-purple"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <Link href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
            <a href="/Alexandra-Hockett-CV.pdf" download="Alexandra-Hockett-CV.pdf">
              <MagicButton
                title="Download CV"
                icon={<FaDownload />}
                position="right"
                otherClasses="!bg-[#161A31]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
