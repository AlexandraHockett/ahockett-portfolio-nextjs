"use client";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[48rem] h-[42rem] lg:min-h-[40rem] flex items-center justify-center sm:w-[570px] w-[80vw] mb-24"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.webp" alt="bg-img" />
                </div>
                {/* Imagem perfeitamente centrada */}
                <img
                  src={img}
                  alt={title}
                  className="z-10 absolute inset-0 m-auto max-w-full max-h-full object-contain"
                />
              </div>

              {/* Título com espaço adequado */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mb-3">
                {title}
              </h1>

              {/* Descrição expandida para textos longos */}
              <div className="flex-1 mb-6">
                <p className="lg:text-base lg:font-normal font-light text-sm line-clamp-6 lg:line-clamp-5 leading-relaxed min-h-[7rem] lg:min-h-[7.5rem]">
                  {des}
                </p>
              </div>

              {/* Ícones e CTA */}
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
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
