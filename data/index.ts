export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Certificates", link: "#certificates" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I thrive in collaborative teams, shipping from design to production.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "Remote-first and async-friendly — comfortable across time zones.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "A dynamic tech stack that keeps growing.",
    description: "Always learning, always improving.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast driven by curiosity and innovation.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.webp",
    spareImg: "/b4.webp",
  },

  {
    id: 5,
    title: "Currently building AI-powered SaaS and creative automation tools.",
    description: "Open to remote opportunities.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.webp",
    spareImg: "/grid.webp",
  },
  {
    id: 6,
    title: "Ready to bring your ideas to life? Let’s collaborate!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 0,
    title: "JobAgent AI — Personal Career Assistant",
    des: "Full-stack AI-powered personal career assistant. Features automatic CV matching with score breakdown, AI-tailored CV generation preserving original design, streaming cover letter generation, LinkedIn profile optimizer, and mock interview questions — all powered by Claude AI. Built for personal use with authenticated access.",
    img: "/jobagent.jpg",
    isPrivate: true,
    iconLists: [
      "https://skillicons.dev/icons?i=nextjs",
      "https://skillicons.dev/icons?i=react",
      "https://skillicons.dev/icons?i=ts",
      "https://skillicons.dev/icons?i=tailwind",
      "https://skillicons.dev/icons?i=prisma",
      "https://skillicons.dev/icons?i=postgres",
      "https://skillicons.dev/icons?i=vercel",
    ],
    link: "https://job-agent-ahockett.vercel.app",
  },
  {
    id: 1,
    title: "Code AI Studio — AI SaaS Platform",
    des: "SaaS platform with 20+ AI models for generating professional images and videos. Features Avatar Creator with consistent character identity, credit-based billing with Stripe, a gamified AI Companion, and a full admin panel — all in one product.",
    img: "/codeaistudio.png",
    isVideo: true,
    videoSrc: "/videos/CODE_AI_STUDIO_AVATAR_1_EN.mp4",
    iconLists: [
      "https://skillicons.dev/icons?i=nextjs",
      "https://skillicons.dev/icons?i=react",
      "https://skillicons.dev/icons?i=ts",
      "https://skillicons.dev/icons?i=tailwind",
      "https://skillicons.dev/icons?i=prisma",
      "https://skillicons.dev/icons?i=postgres",
      "https://skillicons.dev/icons?i=vercel",
    ],
    link: "https://codeaistudio.com",
  },
  {
    id: 6,
    title: "AI Agents System — Interactive Demo",
    des: "Interactive demo of the autonomous agent system built into Code AI Studio. 15 agents across Business, Development, Creative, and Multi-agent categories with real-time streaming UI. The full implementation runs privately within the platform.",
    img: "/agents-demo.png",
    iconLists: [
      "https://skillicons.dev/icons?i=nextjs",
      "https://skillicons.dev/icons?i=tailwind",
      "https://skillicons.dev/icons?i=ts",
      "https://skillicons.dev/icons?i=vercel",
    ],
    link: "https://ai-agents-demo-codeaistudio.vercel.app/",
  },
  {
    id: 7,
    title: "VidMind — AI Video Analyser",
    des: "Upload your video. Discover your best moments. Generate your post. In 30 seconds. AI-powered video analysis for content creators — hook score, best clips, and social posts for Instagram, TikTok, LinkedIn and YouTube.",
    img: "/vidmind.png",
    iconLists: [
      "https://skillicons.dev/icons?i=nextjs",
      "https://skillicons.dev/icons?i=ts",
      "https://skillicons.dev/icons?i=tailwind",
      "https://skillicons.dev/icons?i=vercel",
      "https://skillicons.dev/icons?i=framer",
    ],
    link: "https://vidmind-studio.vercel.app",
  },
  {
    id: 8,
    title: "Forma — AI Personal Fitness Coach",
    des: "Full-stack PWA built and iterated with real family beta testers. Gemini generates a fully personalised workout plan on onboarding (responseSchema). AI Coach has 7 function-calling tools — swap exercises, adapt for injuries, mark workouts, add notes. PWA with Web Push (VAPID), family leaderboard, group chat with @mentions, and post-session AI analysis.",
    img: "/forma.png",
    iconLists: [
      "https://skillicons.dev/icons?i=nextjs",
      "https://skillicons.dev/icons?i=ts",
      "https://skillicons.dev/icons?i=tailwind",
      "https://skillicons.dev/icons?i=prisma",
      "https://skillicons.dev/icons?i=supabase",
      "https://skillicons.dev/icons?i=vercel",
    ],
    link: "https://forma-aiapp.vercel.app",
    demoLabel: "Demo profile · PIN 1234 · resets every 24h",
  },
  {
    id: 2,
    title: "Coutale Portugal — E-commerce & B2B Platform",
    des: "Full e-commerce platform for Coutale Portugal — a premium wine accessories brand. Includes category filtering, custom product personalisation editor, admin dashboard, Stripe checkout, transactional emails, and support for 3 languages (PT/EN/ES).",
    img: "/coutale-logo.png",
    isVideo: true,
    videoSrc: "/videos/sample_coutale.mp4",
    iconLists: [
      "https://skillicons.dev/icons?i=nextjs",
      "https://skillicons.dev/icons?i=react",
      "https://skillicons.dev/icons?i=ts",
      "https://skillicons.dev/icons?i=tailwind",
      "https://skillicons.dev/icons?i=supabase",
      "https://skillicons.dev/icons?i=firebase",
      "https://skillicons.dev/icons?i=vercel",
    ],
    link: "https://coutaleportugal.vercel.app/pt",
  },
  {
    id: 3,
    title: "BadCompany — Events Platform",
    des: "Full-stack web platform for BadCompany — featuring a public-facing site, e-commerce store, and custom admin dashboard. Includes role-based authentication, rich-text content editor, newsletter system with open tracking, Cloudinary media management, and interactive maps. Deployed and live in production.",
    img: "/bc.webp",
    iconLists: [
      "https://skillicons.dev/icons?i=nextjs",
      "https://skillicons.dev/icons?i=react",
      "https://skillicons.dev/icons?i=ts",
      "https://skillicons.dev/icons?i=tailwind",
      "https://skillicons.dev/icons?i=prisma",
      "https://skillicons.dev/icons?i=postgres",
      "https://skillicons.dev/icons?i=cloudinary",
    ],
    link: "https://ahockett-badcompany.vercel.app",
  },
  {
    id: 4,
    title: "Professional Services Website",
    des: "Advanced business website featuring conversion optimization, multilingual support (PT/EN), Schema SEO, GSAP animations, performance optimization, and lead generation systems. Built for Portuguese market with international reach.",
    img: "/ahockett.webp",
    iconLists: [
      "/next.webp", // Next.js 14
      "/ts.webp", // TypeScript
      "/gsap.webp", // GSAP animations
      "/fm.webp", // Framer Motion
      "/tail.webp", // Tailwind CSS
      "/i18n.webp", // Internationalization (PT/EN)
      "/seo.webp", // Advanced SEO + Schema
      "/analytics.webp", // Analytics & conversion tracking
      "/performance.webp", // Core Web Vitals optimization
    ],
    link: "https://ahockett.com",
  },
  {
    id: 5,
    title: "MentorAI - AI Teaching Platform",
    des: "Full-stack SaaS platform with real-time AI voice tutoring, user authentication, subscriptions, and dynamic content management.",
    img: "/mentor-ai.webp",
    iconLists: [
      "/next.webp",
      "/ts.webp",
      "/supabase.webp",
      "/clerk.webp",
      "/ai.webp",
    ],
    link: "https://ahockett-saas-project.vercel.app/",
  },
];

export const certificates = [
  {
    title: "SheCodes Basics",
    link: "https://www.shecodes.io/certificates/67bf8e29a72f0ed3fbbc8182892c91ba",
    imageUrl: "SheCodes-basics.webp",
    issuer: "SheCodes",
    description:
      "An introductory course covering the basics of web development, including HTML, CSS, and JavaScript.",
  },
  {
    title: "SheCodes Plus",
    link: "https://www.shecodes.io/certificates/f92923ede3cb550b423dbe1cac2f4f6d",
    imageUrl: "SheCodes-plus.webp",
    issuer: "SheCodes",
    description:
      "Completed an advanced program focusing on modern front-end technologies and best practices.",
  },
  {
    title: "SheCodes Responsive",
    link: "https://www.shecodes.io/certificates/bcfcc457518b7725d6541e00a418d712",
    imageUrl: "SheCodes-responsive.webp",
    issuer: "SheCodes",
    description:
      "Mastered techniques for creating responsive and mobile-first web designs.",
  },
  {
    title: "SheCodes Advanced React Development",
    link: "https://www.shecodes.io/certificates/44fc432a69159fa02bae45245ef7af0d",
    imageUrl: "SheCodesReact.webp",
    issuer: "SheCodes",
    description:
      "Gained expertise in React development, focusing on state management, hooks, and component-driven design.",
  },
  {
    title: "Responsive Web Design",
    link: "https://www.freecodecamp.org/certification/AlexandraHockett/responsive-web-design",
    imageUrl: "freecodecamp-responsiveWebDesign.webp",
    issuer: "FreeCodeCamp",
    description:
      "Completed a detailed course on responsive web design, covering CSS grid, flexbox, and advanced layouts.",
  },
  {
    title: " The Modern React 18 Bootcamp - A Complete Developer Guide",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-f1f181b4-81d8-42cf-8b0e-40e24c1ab45b.jpg?v=1729781559000",
    imageUrl: "udemy-react18.webp",
    issuer: "Udemy",
    description:
      "Mastered the latest features of React 18, focusing on creating scalable and efficient applications.",
  },
  {
    title: "Complete Path to JavaScript Mastery",
    link: "https://certificate.jsmastery.pro/verify/11f39ee82172",
    imageUrl: "JsMastery-JavaScript.webp",
    issuer: "JSMastery",
    description:
      "Completed a comprehensive course on modern JavaScript, covering advanced techniques and industry standards.",
  },
  {
    title: "Volunteer",
    link: "https://www.youtube.com/watch?v=ZCB4lbMCKos",
    imageUrl: "VolunteerCertificate.webp",
    issuer: "Web Summit",
    description:
      "Assisted attendees at the entrance and supported event operations, contributing to the smooth flow of one of the world’s leading tech conferences. Provided guidance, answered queries, and ensured a welcoming experience for participants.",
  },
];

export const issuer = [
  {
    id: 1,
    name: "SheCodes",
    img: "/SheCodes.webp",
    nameImg: "/SheCodes.webp",
  },

  {
    id: 4,
    name: "WebSummit",
    img: "/WebSummit.webp",
    nameImg: "/WebSummit.webp",
  },
  {
    id: 3,
    name: "JSMastery",
    img: "/JSMastery.webp",
    nameImg: "/JSMastery.webp",
  },
  {
    id: 2,
    name: "Udemy",
    img: "/udemy.webp",
    nameImg: "/udemy.webp",
  },
  {
    id: 5,
    name: "FreeCodeCamp",
    img: "/freecodecamp.webp",
    nameImg: "/freecodecamp.webp",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "React Curriculum Developer & Instructor",
    company: "Happy Code Portugal",
    dateRange: "Sep – Nov 2024",
    desc: "Developed and delivered an 8-lesson React.js bootcamp curriculum for teenagers, covering JSX, component architecture, state management with hooks, and React Router. Built all educational materials from scratch — step-by-step guides, interactive exercises, and capstone projects. Also reviewed and optimised the existing Flutter curriculum.",
    className: "md:col-span-2",
    thumbnail: "/exp1.webp",
  },
  {
    id: 2,
    title: "Conference Volunteer",
    company: "Web Summit",
    dateRange: "2024",
    desc: "Supported event operations at one of the world’s largest tech conferences, assisting thousands of attendees at entry points. Developed strong communication and problem-solving skills in a fast-paced, high-volume environment.",
    className: "md:col-span-2",
    thumbnail: "/exp2.webp",
  },
  {
    id: 3,
    title: "Freelance Full Stack Developer & Founder",
    company: "AHockett.com",
    dateRange: "Nov 2024 – Present",
    desc: "Founded and developed ahockett.com, delivering full-stack web and AI-powered solutions for clients. Built Code AI Studio — a production SaaS platform integrating 25+ AI models with credit-based monetisation and GDPR compliance. Developed Coutale Portugal — a full e-commerce & B2B platform with a custom laser engraving canvas editor, automated invoicing, and multi-payment support. Specialises in Next.js, TypeScript, SaaS architecture, AI integrations, and conversion-optimised user experiences.",
    className: "md:col-span-2",
    thumbnail: "/videos/ahockett-logo.mp4",
    isVideo: true,
    fallbackImage: "/exp3.webp",
  },
  // {
  //   id: 3,
  //   title: "Curricular Internship in Educational Technology",
  //   company: "Happy Code Portugal",
  //   desc: "Completed a comprehensive review and optimization of the Flutter course, incorporating high-quality feedback to improve content clarity and effectively communicate concepts of padding and spacing. Successfully developed and implemented a React bootcamp curriculum tailored for teenagers, focusing on foundational web development skills and facilitating early-stage programming literacy. Enhanced educational resources at Happy Code Portugal by refining course explanations to ensure better understanding of core concepts, particularly in Flutter development.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp3.png",
  // },
  // {
  //   id: 4,
  //   title: "Volunteer",
  //   company: "Web Summit",
  //   desc: "Assisted attendees at the entrance and supported event operations, contributing to the smooth flow of one of the world’s leading tech conferences. Provided guidance, answered queries, and ensured a welcoming experience for participants. Gained hands-on experience in event coordination and strengthened interpersonal and organizational skills in a dynamic environment.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp1.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.webp",
    link: "https://github.com/AlexandraHockett",
    name: "Git Hub", // Add the name property here
  },
  {
    id: 3,
    img: "/link.webp",
    link: "https://www.linkedin.com/in/alexandra-hockett/",
    name: "Linkedin",
  },
];
