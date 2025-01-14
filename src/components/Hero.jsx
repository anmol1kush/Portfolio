import { motion } from 'framer-motion';
import { styles } from '../styles';




const Hero = () => {
  return (
   <div>
  <section className='relative  w-full h-screen mx-auto' > 
    <div className={`${styles.paddingX} absolute   inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className=" flex flex-col justify-center items-center mt-5">
        <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
        <div className='w-1 sm-h-80 h-40 violet-gradient'/>
      </div>
      <div>
        <h2 className={`${styles.heroHeadText} text-white`}>
        Hi, I'm <span className=' text-[#915eff]'>Anmol</span>
        </h2>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        a passionate MERN Stack Developer.  <br className='sm:block hidden'/>
        </p>
      </div>
    </div>
     

      <div className="absolute xs:bottom-1 bottom-22 w-full flex justify-center items-center">
        <a href="#about">
          <div className='w-[35px] h-[55px] rounded-3xl border-4 border-secondary flex items-center justify-center p-z'>
            <motion.dev
            animate={ {
              y:[0,20,0],

            }}
             transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType:'loop'

             }}
              className=" w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

  </section>
   </div>
  );
};

export default Hero;
