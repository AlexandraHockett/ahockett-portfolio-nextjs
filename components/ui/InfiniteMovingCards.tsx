"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    title: string;
    link: string;
    imageUrl: string;
    issuer: string;
    description: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-2 sm:gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[30vw] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-10 sm:p-0 md:w-[30vw]"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(63,38,138,1) 49%, rgba(140,99,194,1) 100%)",
            }}
            key={idx}
          >
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="mb-0 rounded-lg w-full sm:mb-4"
              />
              <div className="flex flex-col gap-1 ">
                <span className="text-sm font-semibold text-white hidden sm:block md:text-xl">
                  {item.title}
                </span>
                <span className="text-sm text-gray-400 mt-1 hidden sm:block">
                  {item.issuer}
                </span>
                <span className="text-sm text-gray-300 mt-2 hidden sm:block">
                  {item.description}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
