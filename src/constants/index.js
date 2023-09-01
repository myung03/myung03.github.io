import {
  ncis,
  dailyboost,
  neuralprof,
  alien,
  tripplanner,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// description of each project 
const projects = [
  {
    name: "NCIS Website",
    description:
      "Website built for Nautical Crime Investigation Services; involved updating the website to be more modern and user-friendly, and adding new features such as a AI ethics manual.",
    tags: [
      {
        name: "https://img.shields.io/badge/React-%2361DAFB.svg?style=flat-square&logo=react&logoColor=black",
        alt: "react",
      },
      {
        name: "https://img.shields.io/badge/Chakra_UI-%23131962.svg?style=flat-square&logo=chakra-ui&logoColor=white",
        alt: "chakra-ui",
      },
      {
        name: "https://img.shields.io/badge/Git-%23F05033.svg?style=flat-square&logo=git&logoColor=white",
        alt: "git",
      },
    ],
    image: ncis,
    source_code_link: "https://github.com/janayee-c/ncis",
  },
  {
    name: "NeuralProf",
    description:
      "Web application scrapes lecture slides and creates new lessons in a variety of languages using GPT-4 API. The content is automatically split into sections where users can ask questions.",
    tags: [
      {
        name: "https://img.shields.io/badge/React-%2361DAFB.svg?style=flat-square&logo=react&logoColor=black",
        alt: "react",
      },
      {
        name: "https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white",
        alt: "tailwind-css",
      },
      {
        name: "https://img.shields.io/badge/Chakra_UI-%23131962.svg?style=flat-square&logo=chakra-ui&logoColor=white",
        alt: "chakra-ui",
      },
      {
        name: "https://img.shields.io/badge/Flask-%23000.svg?style=flat-square&logo=flask&logoColor=white",
        alt: "flask",
      },
      {
        name: "https://img.shields.io/badge/Git-%23F05033.svg?style=flat-square&logo=git&logoColor=white",
        alt: "git",
      },
    ],
    image: neuralprof,
    source_code_link: "https://github.com/myung03/StormHacks-2023",
  },
  {
    name: "DailyBoost",
    description:
      "A social media app that encourages people to exercise daily by providing AI generate activity prompts. Users can post these activites to share with their friends.",
    tags: [
      {
        name: "https://img.shields.io/badge/React-%2361DAFB.svg?style=flat-square&logo=react&logoColor=black",
        alt: "react",
      },
      {
        name: "https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white",
        alt: "tailwind-css",
      },
      {
        name: "https://img.shields.io/badge/MongoDB-%2347A248.svg?style=flat-square&logo=mongodb&logoColor=white",
        alt: "mongo-db",
      }, 
      {
        name: "https://img.shields.io/badge/Git-%23F05033.svg?style=flat-square&logo=git&logoColor=white",
        alt: "git"
      },
      {
        name: "https://img.shields.io/badge/Firebase-%23FFCA28.svg?style=flat-square&logo=firebase&logoColor=black",
        alt: "firebase",
      },
      {
        name: "https://img.shields.io/badge/Node.js-%23339933.svg?style=flat-square&logo=node.js&logoColor=white",
        alt: "node-js",
      },
    ],
    image: dailyboost,
    source_code_link: "https://github.com/myung03/produHacks",
  },
  {
    name: "Space Invaders",
    description:
      "A Space Invaders game built using Python and Pygame. The player controls a spaceship that can move left and right, and shoot bullets to destroy the aliens. ",
    tags: [
      {
        name: "https://img.shields.io/badge/Python-%233776AB.svg?style=flat-square&logo=python&logoColor=white",
        alt: "python",
      },
      {
        name: "https://img.shields.io/badge/Git-%23F05033.svg?style=flat-square&logo=git&logoColor=white",
        alt: "git",
      },
    ],
    image: alien,
    source_code_link: "https://github.com/myung03/alien-invasion-rougelike",
  },
  {
    name: "Trip Planner",
    description:
      "A Java project that allows users to plan trips by selecting a starting location and destination. Users can edit their budget and trip information, and delete the trip once finished.",
    tags: [
      {
        name: "https://img.shields.io/badge/Java-%23ED8B00.svg?style=flat-square&logo=java&logoColor=white",
        alt: "java",
      },
      {
        name: "https://img.shields.io/badge/Git-%23F05033.svg?style=flat-square&logo=git&logoColor=white",
        alt: "git",
      },
      {
        name: "https://img.shields.io/badge/Swing%20GUI-%23000000.svg?style=flat-square&logo=java&logoColor=white",
        alt: "Swing GUI",
      },
    ],
    image: tripplanner,
    source_code_link: "https://github.com/myung03/tripplanner",
  },
];

export { projects };


const technologies = [
  { src: "https://img.shields.io/badge/Python-%233776AB.svg?style=flat-square&logo=python&logoColor=white", alt: "Python" },
  { src: "https://img.shields.io/badge/Java-%23ED8B00.svg?style=flat-square&logo=java&logoColor=white", alt: "Java" },
  { src: "https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat-square&logo=javascript&logoColor=black", alt: "JavaScript" },
  { src: "https://img.shields.io/badge/React-%2361DAFB.svg?style=flat-square&logo=react&logoColor=black", alt: "React" },
  { src: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white", alt: "HTML5" },
  { src: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat-square&logo=css3&logoColor=white", alt: "CSS3" },
  { src: "https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white", alt: "Tailwind CSS" },
  { src: "https://img.shields.io/badge/C-%23A8B9CC.svg?style=flat-square&logo=c&logoColor=black", alt: "C" },
  { src: "https://img.shields.io/badge/Git-%23F05033.svg?style=flat-square&logo=git&logoColor=white", alt: "Git" },
  { src: "https://img.shields.io/badge/GitHub-%23121011.svg?style=flat-square&logo=github&logoColor=white", alt: "GitHub" },
  { src: "https://img.shields.io/badge/Chakra_UI-%23131962.svg?style=flat-square&logo=chakra-ui&logoColor=white", alt: "Chakra UI" },
  { src: "https://img.shields.io/badge/Three.js-%23000000.svg?style=flat-square&logo=three.js&logoColor=white", alt: "Three.js" },
];