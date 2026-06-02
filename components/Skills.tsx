"use client";

import { Button } from "./ui/MovingBorders";
import { FaCode, FaDatabase, FaBrain } from "react-icons/fa6";

const categories = [
  {
    title: "Frontend",
    Icon: FaCode,
    skills: [
      { name: "Next.js", level: "expert" },
      { name: "React", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Framer Motion", level: "advanced" },
      { name: "GSAP", level: "advanced" },
    ],
  },
  {
    title: "Backend & Data",
    Icon: FaDatabase,
    skills: [
      { name: "Node.js", level: "advanced" },
      { name: "Prisma", level: "advanced" },
      { name: "PostgreSQL", level: "advanced" },
      { name: "Supabase", level: "advanced" },
      { name: "REST APIs", level: "expert" },
      { name: "Firebase", level: "proficient" },
    ],
  },
  {
    title: "AI & Platforms",
    Icon: FaBrain,
    skills: [
      { name: "Claude AI", level: "expert" },
      { name: "Anthropic SDK", level: "expert" },
      { name: "Vercel", level: "expert" },
      { name: "Stripe", level: "advanced" },
      { name: "OpenAI API", level: "advanced" },
      { name: "Git / GitHub", level: "advanced" },
    ],
  },
] as const;

const pill: Record<string, string> = {
  expert:    "border-purple/50 text-white bg-purple/15",
  advanced:  "border-white/20 text-white/80 bg-white/5",
  proficient:"border-white/10 text-white/45 bg-transparent",
};

const Skills = () => (
  <section className="w-full py-20">
    <h1 className="heading">
      Technical <span className="text-purple">skills</span>
    </h1>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((cat) => (
        <Button
          key={cat.title}
          borderRadius="1.75rem"
          className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          duration={Math.floor(Math.random() * 8000) + 8000}
        >
          <div className="flex flex-col p-6 gap-5">
            <div className="flex items-center gap-3">
              <cat.Icon className="text-purple" size={18} />
              <h2 className="text-lg font-bold text-white">{cat.title}</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`text-xs px-2.5 py-1 rounded-full border font-medium ${pill[skill.level]}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-1 border-t border-white/5">
              <span className="flex items-center gap-1.5 text-[10px] text-white/35">
                <span className="w-2 h-2 rounded-full bg-purple/80 inline-block" />
                Expert
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-white/35">
                <span className="w-2 h-2 rounded-full bg-white/50 inline-block" />
                Advanced
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-white/35">
                <span className="w-2 h-2 rounded-full bg-white/20 inline-block" />
                Proficient
              </span>
            </div>
          </div>
        </Button>
      ))}
    </div>
  </section>
);

export default Skills;
