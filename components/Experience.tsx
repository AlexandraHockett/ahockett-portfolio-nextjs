// Local: components/Experience.tsx - Versão Premium com vídeos maiores
import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  // Função para renderizar thumbnail com tamanhos específicos por tipo
  const renderThumbnail = (card: any) => {
    const isVideo =
      card.isVideo ||
      card.thumbnail.endsWith(".mp4") ||
      card.thumbnail.endsWith(".webm");

    if (isVideo) {
      return (
        <div className="relative w-full aspect-video max-w-xs mx-auto">
          <video
            className="w-full h-full object-cover rounded-xl shadow-2xl"
            autoPlay
            loop
            muted
            playsInline
            poster={card.poster}
          >
            <source src={card.thumbnail} type="video/mp4" />
            <img
              src={card.fallbackImage || "/exp-fallback.webp"}
              alt={card.title}
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
          </video>
          {/* Overlay sutil para melhorar a legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl pointer-events-none"></div>
        </div>
      );
    } else {
      return (
        <div className="w-full max-w-32 mx-auto">
          <img
            src={card.thumbnail}
            alt={card.title}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      );
    }
  };

  return (
    <div className="py-20" id="experience">
      <h1 className="heading">
        My <span className="text-purple"> work experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className="flex flex-col p-6 py-8 gap-6">
              {/* Thumbnail/Video Section */}
              <div className="flex justify-center">{renderThumbnail(card)}</div>

              {/* Content Section */}
              <div className="text-center space-y-3">
                <h1 className="text-xl md:text-2xl font-bold leading-tight">
                  {card.title}
                </h1>
                <h2 className="text-purple text-lg font-semibold">
                  {card.company}
                </h2>
                <div className="w-12 h-0.5 bg-purple mx-auto"></div>
                <p className="text-white-100 font-medium text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
