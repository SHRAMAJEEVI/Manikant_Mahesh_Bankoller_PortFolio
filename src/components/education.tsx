import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";

// Education Section
export const Education = () => {
  const educationData = [
    {
      title: "Computer Science Engineering Student",
      institution: "Sri Siddhartha Institute of Technology, Tumakuru, Karnataka, India",
      date: "2023 – 2027",
      points: [
        "Pursuing Bachelor of Engineering in Computer Science with CGPA of 9.05.",
        "Coursework: Data Structures and Algorithms, Object-Oriented Programming, DBMS, Computer Networks, Operating System.",
        "Active participant in technical competitions and hackathons.",
        "Developed strong problem-solving and teamwork skills through academic projects.",
      ],
    },
    {
      title: "Class XII (PCMB)",
      institution: "Marikamba Govt PU College, Sirsi, Karnataka, India",
      date: "Graduated 2023",
      points: [
        "Completed Pre-University Education with Physics, Chemistry, Mathematics, Biology.",
        "Achieved 92% in final examinations.",
        "Strong foundation in science and mathematics.",
      ],
    },
    {
      title: "Class X",
      institution: "MES ENGLISH MEDIUM HIGH SCHOOL",
      date: "Graduated 2021",
      points: [
        "Achieved 88% in final examinations.",
        "Excellent academic performance in all subjects.",
      ],
    },
  ];

  return (
    <SectionWrapper>
      <div className="flex flex-col items-center">
        <motion.div
          variants={slideIn("up", "tween", 0.2, 1)}
          className="w-full max-w-4xl"
        >
          <h2 className={styles.sectionHeadText}>Education</h2>
          <p className={styles.sectionSubText}>My Academic Journey</p>
          
          <div className="mt-20 flex flex-col">
            {educationData.map((education, index) => (
              <motion.div
                key={index}
                variants={slideIn("up", "tween", 0.2 + index * 0.2, 1)}
                className="bg-black-100 p-8 rounded-2xl mb-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-white text-xl font-bold">
                      {education.title}
                    </h3>
                    <p className="text-cyan-400 text-md font-medium mt-1">
                      {education.institution}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      {education.date}
                    </p>
                  </div>
                </div>
                
                <ul className="mt-6 list-disc list-inside">
                  {education.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="text-gray-300 text-sm leading-relaxed mb-2"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
