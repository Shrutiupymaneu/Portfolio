// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Education Section Logo's
import gcetLogo from './assets/education_logo/galgotia_logo.jpeg';
import vsicsLogo from './assets/education_logo/vsics.png';

// Project Section Logo's
import cryptoLogo from './assets/work_logo/crypto-app.png';
import pasteAppLogo from './assets/work_logo/paste-app.png';
import quizAppLogo from './assets/work_logo/quiz-app.png';
import todoListLogo from './assets/work_logo/to-do-list.png';
import weatherAppLogo from './assets/work_logo/weather-app.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: gcetLogo,
      school: "Galgotias College of Engineering and Technology, Greater Noida",
      date: "Out 2023 - Present",
      grade: "8.6 CGPA",
      desc: "I am pursuing my Master's degree (MCA) in Computer Applications from Galgotias College of Engineering & Technology, Greater Noida. During my time at GCET, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Computer Networking, Database Management Systems, Web Development, and Software Engineering. My experience at Galgotias College has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: vsicsLogo,
      school: "Dr. Virendra Swarup Institute of Computer Science, Kanpur",
      date: "Aug 2021 - July 2023",
      grade: "77.02%",
      desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from Virendra Swaroop College, Kanpur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Virendra Swaroop College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Computer Application - BCA",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Paste App",
      description:
        "A simple and efficient pastebin application that allows users to store and share text snippets. Built using React.js, it offers a user-friendly interface for easy pasting and sharing of code snippets or notes.",
       image: pasteAppLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS"],
      github: "https://github.com/Shrutiupymaneu/PasteApp",
      webapp: "https://paste-app-tau-ruddy.vercel.app/",
    },
    {
      id: 1,
      title: "Todo List",
      description:
        "A simple and effective to-do list application that helps users manage their tasks efficiently. Built using React.js, it features task creation, editing, and deletion functionalities for a seamless user experience.",
     image: todoListLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shrutiupymaneu/To-Do-List",
      webapp: "https://to-do-list-swart-iota.vercel.app/",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "A weather application that provides real-time weather updates and forecasts. Built using React.js, it fetches data from external APIs to deliver accurate weather information based on user location.",
      image: weatherAppLogo,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/Shrutiupymaneu/Weather-App",
      webapp: "https://weather-app-seven-alpha-28.vercel.app/",
    },
  ];  