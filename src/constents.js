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
import reactifyLogo from './assets/work_logo/rectify-app.png';
import sortingVisualLogo from "./assets/work_logo/sortingVisualLogo.png";
import searchingVisualLogo from "./assets/work_logo/searchingVisualLogo.png";
import resumeAnalyzerLogo from "./assets/work_logo/resumeAnalyzerLogo.png";
import aiInterviewLogo from "./assets/work_logo/aiInterviewLogo.png";

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
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: gcetLogo,
      school: "Galgotias College of Engineering and Technology, Greater Noida",
      date: "Out 2023 - Aug 2025",
      grade: "8.8 CGPA",
      desc: "I have completed Master's degree (MCA) in Computer Applications from Galgotias College of Engineering & Technology, Greater Noida. During my time at GCET, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Computer Networking, Database Management Systems, Web Development, and Software Engineering. My experience at Galgotias College has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: vsicsLogo,
      school: "Dr. Virendra Swarup Institute of Computer Science, Kanpur",
      date: "Aug 2021 - July 2023",
      grade: "8.1 CGPA",
      desc: "I have completed Bachelor's degree in Computer Science (B.Sc.) from Virendra Swaroop College, Kanpur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Virendra Swaroop College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Computer Application - BCA",
    },
  ];
  
  export const projects = [
    {
  id: 0,
  title: "Sorting Visualizer",
  description:
    "An interactive sorting algorithm visualizer that demonstrates how different sorting techniques work step by step. Built using HTML, CSS, and JavaScript with dynamic animations to help users understand algorithms visually.",
  image: sortingVisualLogo,
  tags: ["HTML", "CSS", "JavaScript", "DSA"],
  github: "https://github.com/Shrutiupymaneu/Sorting_Visual",
  webapp: "https://sorting-visual-phi.vercel.app/",
},
{
  id: 1,
  title: "Searching Visualizer",
  description:
    "A searching algorithm visualizer that helps users understand Linear Search and Binary Search through step-by-step animations. It includes an interactive interface for selecting algorithms, entering values, and visualizing the search process.",
  image: searchingVisualLogo,
  tags: ["HTML", "CSS", "JavaScript", "DSA"],
  github: "https://github.com/Shrutiupymaneu/Searching_Visual",
  webapp: "https://searching-visual.vercel.app/",
},
{
  id: 2,
  title: "AI Resume Analyzer",
  description:
    "An AI-based resume analyzer web application that reviews resumes and provides useful feedback based on skills, keywords, and job relevance. Built using React.js and Node.js with file upload functionality for analyzing resume content.",
  image: resumeAnalyzerLogo,
  tags: ["React JS", "Node JS", "Express JS", "JavaScript"],
  github: "https://github.com/Shrutiupymaneu/Resume_Analyzer",
  webapp: "https://resume-analyzer-lovat-tau.vercel.app/",
},
{
  id: 3,
  title: "AI Interview Question Generator",
  description:
    "An AI-powered interview question generator that creates role-based interview questions to help users prepare for technical and HR interviews. Built with a clean and responsive interface for easy practice and preparation.",
  image: aiInterviewLogo,
  tags: ["React JS", "JavaScript", "AI", "Web App"],
  github: "https://github.com/Shrutiupymaneu/AI_Interview_question_generator",
  webapp: "https://ai-interview-question-generator-opal.vercel.app/",
},
  ];  