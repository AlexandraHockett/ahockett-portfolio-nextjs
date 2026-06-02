"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { GridGlobe } from "./GridGlobe";

// Dynamic import do Lottie sem SSR
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => (
    <div className="h-16 w-16 animate-pulse bg-purple-500/20 rounded-lg" />
  ),
});

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Verificar se estamos no client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCopy = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText("alexandra@ahockett.com");
      setCopied(true);
    }
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(63,38,138,1) 49%, rgba(140,99,194,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>
          {id === 2 && <GridGlobe />}
          {id === 3 && (
            <>
              {/* Mobile: inline tag pills */}
              <div className="flex lg:hidden flex-wrap gap-2 mt-4">
                {["Next.js", "React", "TypeScript", "Tailwind", "Prisma", "PostgreSQL", "Supabase", "Claude AI"].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/60 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {/* Desktop: staggered column pills */}
              <div className="hidden lg:flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                  {["React.js", "Next.js", "TypeScript"].map((item) => (
                    <span
                      key={item}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50
                      lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
                </div>
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                  {["TailwindCSS", "HTML", "CSS"].map((item) => (
                    <span
                      key={item}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50
                      lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                {isClient && (
                  <Lottie
                    animationData={animationData}
                    loop={copied}
                    autoplay={copied}
                    rendererSettings={{
                      preserveAspectRatio: "xMidYMid slice",
                    }}
                  />
                )}
              </div>
              <MagicButton
                title={copied ? "Email copied" : "Copy my Email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
