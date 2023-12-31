import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto opacity-90">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#f0f0f0]" />

          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[45px]">
          <h1 className={`${styles.heroHeadText} text-[#f0f0f0`}>
            Hi, I'm Tomilola
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            A results driven and detail oriented front-end developer with a
            passion for creating engaging and user friendly web experiences.
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
