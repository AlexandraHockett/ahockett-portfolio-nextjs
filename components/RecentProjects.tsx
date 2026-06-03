"use client";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow, FaLock } from "react-icons/fa6";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of <span className="text-purple">projects</span>
      </h1>

      {/* ── Mobile layout (hidden on md+) ── */}
      <div className="md:hidden flex flex-col gap-5 mt-10">
        {projects.map(({ id, title, des, img, isVideo, videoSrc, isPrivate, iconLists, link }) => {
          const card = (
            <div className="w-full rounded-2xl bg-[#0d0f1f] border border-white/10 overflow-hidden">
              <div className="relative w-full h-48 bg-[#13162d] overflow-hidden">
                <img src="/bg.webp" alt="" className="w-full h-full object-cover" />
                {isVideo && videoSrc ? (
                  <video
                    src={videoSrc}
                    poster={img}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={img}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-4">
                <h2 className="font-bold text-base text-white mb-2 line-clamp-2">{title}</h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4 line-clamp-3">{des}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {iconLists.slice(0, 5).map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/20 rounded-full bg-black w-7 h-7 flex justify-center items-center"
                        style={{ transform: `translateX(-${4 * index * 2}px)` }}
                      >
                        <img src={icon} alt={icon} className="p-1" />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-purple text-xs font-medium">
                    {isPrivate ? (
                      <><span>Private</span><FaLock size={10} color="#CBACF9" /></>
                    ) : (
                      <><span>Live Site</span><FaLocationArrow size={10} color="#CBACF9" /></>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );

          return isPrivate ? (
            <div key={id}>{card}</div>
          ) : (
            <Link key={id} href={link} target="_blank" rel="noopener noreferrer">
              {card}
            </Link>
          );
        })}
      </div>

      {/* ── Desktop layout (hidden on mobile) ── */}
      <div className="hidden md:flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(
          ({ id, title, des, img, isVideo, videoSrc, isPrivate, iconLists, link }) => (
            <div
              key={id}
              className="h-[48rem] flex items-center justify-center w-[570px] mb-24"
            >
              <PinContainer
                title={isPrivate ? "Private Project" : link}
                href={isPrivate ? undefined : link}
              >
                <div className="relative flex items-center justify-center w-[570px] h-[40vh] overflow-hidden mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/bg.webp" alt="bg-img" />
                  </div>
                  {isVideo && videoSrc ? (
                    <video
                      src={videoSrc}
                      poster={img}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="z-10 absolute inset-0 m-auto max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <img
                      src={img}
                      alt={title}
                      className="z-10 absolute inset-0 m-auto max-w-full max-h-full object-contain"
                    />
                  )}
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mb-3">
                  {title}
                </h1>

                <div className="flex-1 mb-6">
                  <p className="lg:text-base lg:font-normal font-light text-sm line-clamp-6 lg:line-clamp-5 leading-relaxed min-h-[7rem] lg:min-h-[7.5rem]">
                    {des}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    {isPrivate ? (
                      <>
                        <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                          Private Project
                        </p>
                        <FaLock className="ms-3" color="#CBACF9" />
                      </>
                    ) : (
                      <>
                        <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                          Check Live Site
                        </p>
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                      </>
                    )}
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
