import Link from "next/link";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let’s build <span className="text-purple">something amazing</span>{" "}
          together!
        </h1>{" "}
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Got a vision for your digital future? I’m here to make it happen. Drop
          me a message and let’s turn your ideas into reality!
        </p>
        <a href="mailto:contact@alexandrahockett.com">
          <MagicButton
            title="Let's get in touch!"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Alexandra
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={profile.img} alt="icons" width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
