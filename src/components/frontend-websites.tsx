import { motion } from "framer-motion";

import { github, preview } from "../assets";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// Frontend Website Projects
const frontendProjects = [
  {
    name: "Rock Paper Scissor",
    description: "Interactive game with smooth animations and responsive design",
    github: "https://github.com/SHRAMAJEEVI/Rock-Paper-Scissors",
    liveSite: "https://shramajeevi.github.io/Rock-Paper-Scissors/",
  },
  {
    name: "Text to Speech Converter",
    description: "Web-based converter with natural-sounding speech and multiple languages",
    github: "https://github.com/SHRAMAJEEVI/uploading",
    liveSite: "https://shramajeevi.github.io/uploading/",
  },
  {
    name: "My Drawings",
    description: "Creative drawing application with various tools for digital art",
    github: "https://github.com/SHRAMAJEEVI/drawing",
    liveSite: "https://shramajeevi.github.io/drawing/",
  },
];

// Frontend Website Card
const FrontendWebsiteCard = ({ project, index }: { project: typeof frontendProjects[0]; index: number }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <div className="w-full max-w-[360px] h-[200px] green-pink-gradient p-[1px] rounded-[20px] shadow-card overflow-hidden">
      <div className="bg-tertiary rounded-[20px] h-full p-6 flex flex-col justify-between">
        {/* Project Info */}
        <div>
          <h3 className="text-white font-bold text-[20px]">{project.name}</h3>
          <p className="mt-2 text-white text-[14px] line-clamp-3 leading-6">
            {project.description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <div
            onClick={() => window.open(project.github, "_blank", "noreferrer")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="Github"
              title="Github"
              className="w-4 h-4 object-contain"
            />
          </div>
          <div
            onClick={() => window.open(project.liveSite, "_blank", "noreferrer")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={preview}
              alt="Live Site"
              title="Live Site"
              className="w-4 h-4 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// Frontend Websites Section
export const FrontendWebsites = () => {
  return (
    <SectionWrapper>
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Frontend</p>
          <h2 className={styles.sectionHeadText}>Websites.</h2>
        </motion.div>

        {/* About */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("left", "tween", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following frontend websites showcase my skills and experience through
            real-world examples of my work. Each project demonstrates my ability to
            create responsive, interactive web applications with modern technologies.
          </motion.p>
        </div>

        {/* Frontend Website Cards */}
        <div className="mt-20 flex flex-wrap gap-7">
          {frontendProjects.map((project, i) => (
            <FrontendWebsiteCard key={`frontend-project-${i}`} project={project} index={i} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
