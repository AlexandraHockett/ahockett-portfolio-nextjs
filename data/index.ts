export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Certificates", link: "#certificates" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
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
    des: "This app allows users to search for recipes, view ingredients, and get cooking instructions. Built with React, it offers a seamless user experience and interactive features.",
    img: "/recipeApp.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://ahockett-recipeapp.netlify.app",
  },
  {
    id: 2,
    title: "3D Portfolio Project",
    des: "This project was built using React and Three.js, showcasing a 3D portfolio experience. It demonstrates advanced web development techniques, including 3D graphics and interactive elements.",
    img: "/3dProject.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://alexhockett.netlify.app",
  },
  {
    id: 3,
    title: "My Cute Penguin",
    des: "This project was created with HTML and CSS to showcase a cute penguin design. It’s a simple yet charming example of creative web design using fundamental web technologies.",
    img: "/myCutePenguin.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://alexhockett.netlify.app",
  },
  {
    id: 4,
    title: "Dictionary App",
    des: "Built with React and Bootstrap",
    img: "/dictionary.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://ahockettdictionary.netlify.app/",
  },
  {
    id: 5,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const certificates = [
  {
    title: "SheCodes Basics",
    link: "https://www.shecodes.io/certificates/67bf8e29a72f0ed3fbbc8182892c91ba",
    imageUrl:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/034/246/original/34246.png?1713536544",
    issuer: "SheCodes",
    description:
      "An introductory course covering the basics of web development, including HTML, CSS, and JavaScript.",
  },
  {
    title: "SheCodes Plus",
    link: "https://www.shecodes.io/certificates/f92923ede3cb550b423dbe1cac2f4f6d",
    imageUrl:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/035/608/original/35608.png?1713554952",
    issuer: "SheCodes",
    description:
      "Completed an advanced program focusing on modern front-end technologies and best practices.",
  },
  {
    title: "SheCodes Responsive",
    link: "https://www.shecodes.io/certificates/bcfcc457518b7725d6541e00a418d712",
    imageUrl:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/042/017/original/42017.png?1713537710",
    issuer: "SheCodes",
    description:
      "Mastered techniques for creating responsive and mobile-first web designs.",
  },
  {
    title: "SheCodes Advanced React Development",
    link: "https://www.shecodes.io/certificates/44fc432a69159fa02bae45245ef7af0d",
    imageUrl:
      "https://s3.amazonaws.com/shecodesio-production/students/certificates/000/049/007/original/49007.png?1713538731",
    issuer: "SheCodes",
    description:
      "Gained expertise in React development, focusing on state management, hooks, and component-driven design.",
  },
  {
    title: "Responsive Web Design",
    link: "https://www.freecodecamp.org/certification/AlexandraHockett/responsive-web-design",
    imageUrl: "https://i.ibb.co/ckFSJ2N/Captura-de-ecr-2024-05-16-100856.png",
    issuer: "FreeCodeCamp",
    description:
      "Completed a detailed course on responsive web design, covering CSS grid, flexbox, and advanced layouts.",
  },
  {
    title: " The Modern React 18 Bootcamp - A Complete Developer Guide",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-f1f181b4-81d8-42cf-8b0e-40e24c1ab45b.jpg?v=1729781559000",
    imageUrl:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-f1f181b4-81d8-42cf-8b0e-40e24c1ab45b.jpg?v=1729781559000",
    issuer: "Udemy",
    description:
      "Mastered the latest features of React 18, focusing on creating scalable and efficient applications.",
  },
  {
    title: "Complete Path to JavaScript Mastery",
    link: "https://certificate.jsmastery.pro/verify/11f39ee82172",
    imageUrl: "./JSMasteryCertificate-Javascript.png",
    issuer: "JSMastery",
    description:
      "Completed a comprehensive course on modern JavaScript, covering advanced techniques and industry standards.",
  },
  {
    title: "Volunteer",
    link: "https://www.youtube.com/watch?v=ZCB4lbMCKos",
    imageUrl: "./VolunteerCertificate.png",
    issuer: "Web Summit",
    description:
      "Assisted attendees at the entrance and supported event operations, contributing to the smooth flow of one of the world’s leading tech conferences. Provided guidance, answered queries, and ensured a welcoming experience for participants.",
  },
];

export const issuer = [
  {
    id: 1,
    name: "SheCodes",
    img: "/SheCodes.png",
    nameImg: "/SheCodes.png",
  },

  {
    id: 4,
    name: "WebSummit",
    img: "/WebSummit.png",
    nameImg: "/WebSummit.png",
  },
  {
    id: 3,
    name: "JSMastery",
    img: "/JSMastery.png",
    nameImg: "/JSMastery.png",
  },
  {
    id: 2,
    name: "Udemy",
    img: "/udemy.png",
    nameImg: "/udemy.png",
  },
  {
    id: 5,
    name: "FreeCodeCamp",
    img: "/freecodecamp.svg",
    nameImg: "/freecodecamp.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Curricular Internship in Educational Technology",
    company: "Happy Code Portugal",
    desc: "Completed a comprehensive review and optimization of the Flutter course, incorporating high-quality feedback to improve content clarity and effectively communicate concepts of padding and spacing. Successfully developed and implemented a React bootcamp curriculum tailored for teenagers, focusing on foundational web development skills and facilitating early-stage programming literacy. Enhanced educational resources at Happy Code Portugal by refining course explanations to ensure better understanding of core concepts, particularly in Flutter development.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Volunteer",
    company: "Web Summit",
    desc: "Assisted attendees at the entrance and supported event operations, contributing to the smooth flow of one of the world’s leading tech conferences. Provided guidance, answered queries, and ensured a welcoming experience for participants. Gained hands-on experience in event coordination and strengthened interpersonal and organizational skills in a dynamic environment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
