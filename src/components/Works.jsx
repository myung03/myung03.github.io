import React from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "../components";
import { styles } from "../styles";
import { SectionWrapper } from "../wrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const Works = () => {
  return (
    <>
         <motion.div className="mt-[-7%]" variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          My Portfolio
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Projects
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-black text-[17px] max-w-3xl leading-[30px]">
          Here are some of my projects that I've worked on. I'm always working on new projects and improving on old ones, so check back soon for more!
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
          key={`project-${index}`}
          index={index}
          {...project}>

          </ProjectCard>
        ))
}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");