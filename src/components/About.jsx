import React from 'react';
import Tile from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  const ServiceCard = ({index, title, icon}) => {
    return (
      <p className="text-black">{title}</p>
    )
  }
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>About Me</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-black text-[17px] max-w-3xl leading-[30px]">
      I'm a third year student pursuing a double major in Computer Science and Cognitive Systems at the University of British Columbia. 
      Some of my interests and passions include web development, artifical intelligence, and hackathons. I have experience with languages and frameworks such as 
      Python, Java, React.js, Three.js, Tailwind, Chakra, and more! I love learning new things and always believe there is more room to grow as a developer. I'm currently looking for a 2024 summer internship!
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.ttile} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default About