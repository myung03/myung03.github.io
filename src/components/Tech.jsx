import React from "react";
import Tilt from "react-parallax-tilt";

const Tech = () => {
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

  return (
    <div className="flex flex-wrap items-center justify-center gap-5 p-4 mt-10">
      {technologies.map((tech, index) => (
        <Tilt key={index} className="shadow-lg overflow-hidden">
          <div options={{
            max: 10000,
            scale: 1000,
            speed: 1000,
          }}>
            <img src={tech.src} alt={tech.alt}/>
            </div>
        </Tilt>
      ))}
    </div>
  );
};

export default Tech;
