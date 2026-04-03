import { BallCanvas } from "./canvas";
import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

// Skills
export const Tech = () => {
  return (
    <SectionWrapper>
      {/* Title */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Expertise</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      {/* Skills Grid */}
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {/* Iterate over each skill */}
        {TECHNOLOGIES.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
