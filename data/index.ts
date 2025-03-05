import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Certificates", link: "#certificates" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Collaborating closely with clients to bring their visions to life.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "Adaptable to your schedule, wherever you are in the world.",
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
    title: "Developing a cutting-edge JavaScript animation library.",
    description: "Get a sneak peek at what’s coming next.",
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
    id: 1,
    title: "Recipe App",
    des: "Search for recipes, view ingredients, and get cooking instructions. Built with React for a seamless experience.",
    img: "/recipeApp.webp",
    iconLists: [
      "/re.webp",
      "/vite.webp",
      "/ts.webp",
      "/react-router.webp",
      "/css3.webp",
    ],
    link: "https://ahockett-recipeapp.netlify.app",
  },
  {
    id: 2,
    title: "3D Portfolio Project",
    des: "A 3D portfolio built with React and Three.js, showcasing web development and interactive design.",
    img: "/3dProject.webp",
    iconLists: ["/re.webp", "/tail.webp", "/vite.webp", "/three.webp"],
    link: "https://alexhockett.netlify.app",
  },
  {
    id: 3,
    title: "My Cute Penguin",
    des: "A creative penguin design built with HTML and CSS, showcasing fundamental web design skills.",
    img: "/myCutePenguin.webp",
    iconLists: ["/html.webp", "/css3.webp"],
    link: "https://mycutepenguin.netlify.app",
  },
  {
    id: 4,
    title: "Dictionary App",
    des: "React-based dictionary app with Bootstrap styling and API integration for real-time definitions.",
    img: "/dictionary.webp",
    iconLists: [
      "/re.webp",
      "/bootstrap.webp",
      "/axios.webp",
      "/javascript.webp",
    ],
    link: "https://ahockettdictionary.netlify.app/",
  },
  {
    id: 5,
    title: "Portfolio Website",
    des: "A responsive portfolio with Next.js, featuring dynamic sections, animations, and 3D elements.",
    img: "/portfolio.webp",
    iconLists: ["/next.webp", "/ts.webp", "/three.webp", "/fm.webp"],
    link: "https://www.alexandrahockett.com",
  },
  // {
  //   id: 6,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "https://github.com/adrianhajdin/iphone",
  // },
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
    title: "Curricular Internship in Educational Technology",
    company: "Happy Code Portugal",
    desc: "Completed a comprehensive review and optimization of the Flutter course, incorporating high-quality feedback to improve content clarity and effectively communicate concepts of padding and spacing. Successfully developed and implemented a React bootcamp curriculum tailored for teenagers, focusing on foundational web development skills and facilitating early-stage programming literacy. Enhanced educational resources at Happy Code Portugal by refining course explanations to ensure better understanding of core concepts, particularly in Flutter development.",
    className: "md:col-span-2",
    thumbnail: "/exp1.webp",
  },
  {
    id: 2,
    title: "Volunteer",
    company: "Web Summit",
    desc: "Assisted attendees at the entrance and supported event operations, contributing to the smooth flow of one of the world’s leading tech conferences. Provided guidance, answered queries, and ensured a welcoming experience for participants. Gained hands-on experience in event coordination and strengthened interpersonal and organizational skills in a dynamic environment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.webp",
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
