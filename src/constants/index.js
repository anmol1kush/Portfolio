
import {
  mobile,
  backend,
  creator,
  web,
  javascript,



  reactjs,

  tailwind,
  nodejs,
  mongodb,
  git,

  meta,
  starbucks,
  tesla,
  shopify,

  threejs,
  github,

} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
 
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  }
];

const technologies = [
  {
    name: "htmllogo",
    icon: "htmllogo.png",
  },
  {
    name: "csslogo",
    icon: "csslogo.png",
  },
  {
    name: "JavaScript ",
    icon: javascript,
  },

  {
    name: "React JS ",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS ",
    icon: tailwind,
  },
  {
    name: "Node JS ",
    icon: nodejs,
  },
  
  {
    name: "MongoDB ",
    icon: mongodb,
  },

 
  {
    name: "github ",
    icon: github
  },

  {
    name: "python ",
    icon: "Python.png"
  }, {
    name: "cpp ",
    icon: "cpp-logo.jpg"
  },
  {
    name: "java ",
    icon: "java.png"
  },
  {
    name: "mysql ",
    icon: "mysql.png"
  },
  {
    name: "postman ",
    icon: "postman.png"
  }


];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];



const projects = [
  {
    name: "Intern-Job",
    description:
      "Intern-Job is a web application designed to streamline the job and internship process. It allows users to post job openings, browse available opportunities, and apply for positions with ease. The platform provides an interface for employers to manage job postings and for applicants to track their application.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: 'InternJob.png',
    source_code_link: "https://github.com/anmol1kush/Intern-Job",
  },
  {
    name: "Coming Soon",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, dolore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, dolore .Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, dolore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, dolore .',
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rest",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: 'Coming-Soon.jpg',
    source_code_link: "https://github.com/anmol1kush",
  },
  {
    name: "Coming Soon",
    description:
     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, dolore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, dolore .Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, dolore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, dolore .',
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: 'Coming-Soon.jpg',
    source_code_link: "https://github.com/anmol1kush",
  },
];

export { services, technologies, experiences, projects };
