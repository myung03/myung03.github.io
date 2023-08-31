import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";

import { fadeIn } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="text-black">
      <Tilt option={{
        max: 45,
        scale: 1,
        speed: 500,
      }} className="glassmorphism p-4 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => (window.open(source_code_link), "_blank")} className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="github source code" className="w-3/4 h-3/4 object-contain"/>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="mt-2 text-gray text-m">{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

export default ProjectCard

