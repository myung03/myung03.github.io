import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { headshot } from '../assets/index';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../wrapper';
import { Tech } from '../components';

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} mt-[-15%] md:mt-0`}>About Me</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <div className="mt-5 flex flex-col md:flex-row justify-center items-center gap-[10%]">
    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-black text-[17px] max-w-3xl leading-[30px]">
      I'm a third year student pursuing a double major in Computer Science and Cognitive Systems at the University of British Columbia. 
      Some of my interests and passions include web development, artifical intelligence, and hackathons. I have experience with languages and frameworks such as 
      Python, Java, React.js, Three.js, and more - take a look at the icons below to see all the technologies I'm proficient with! 
    </motion.p>

    <div className="flex justify-center items-center mt-12 md:mt-0">
    <Tilt className="xs:w-[250px] w-full">
        <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)}
        className="w-full main-gradient p-[2px] rounded-[20px] shadow-2xl">
          <div options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}>
            <img src={headshot} alt={headshot} className="object-contain rounded-[20px]" />
          </div>
  
        </motion.div>
      </Tilt>
    </div>
    </div>
    <Tech></Tech>
    </>
  )
}

export default SectionWrapper(About, "about");