import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#392f5a]' />
          <div className='w-1 sm:h-80 h-40 main-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} line-1 anim-typewriter text-black`}>
            Hi, I'm <span className='text-[#392f5a]'>Matthew!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black`}>
            I'm a student at UBC. <br className='sm:block hidden' />
            I love developing web applications and learning about programming!
          </p>
        </div>
      </div>
      
      <ComputersCanvas />
    </section>
  );
};
export default Hero;