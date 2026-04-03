import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import { 
  techspireCertificate,
  makeForTumkuruCertificate,
  circuitricsCertificate,
  civistaCertificate,
  webPageDesignCertificate,
  volleyballCertificate,
  stateLevelVolleyballCertificate,
  dsaCertificate,
  learningGitCertificate,
  sharkTankCertificate,
  unstopCertificate,
  codebizzCertificate,
  pythonProgrammingCertificate,
  careerVaultCertificate
} from "../assets";

// Certificate type definition
interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  certificateId: string;
  image?: string;
}

// Certifications Section
export const Certifications = () => {
  const certificationsData: Certificate[] = [
    {
      title: "Techspire 2025",
      issuer: "Techspire Competition",
      date: "2025",
      description: "Participated and achieved certification in Techspire 2025 technical competition, demonstrating advanced skills in programming and problem-solving.",
      certificateId: "TECH-2025-001",
      image: techspireCertificate,
    },
    {
      title: "MakeForTumkuru",
      issuer: "MakeForTumkuru Initiative",
      date: "2025",
      description: "Contributed to the MakeForTumkuru initiative, showcasing innovation and technical skills in developing solutions for local challenges.",
      certificateId: "MAKE-TUM-2025-001",
      image: makeForTumkuruCertificate,
    },
    {
      title: "CircuiTRICS 2K25",
      issuer: "CircuiTRICS Competition",
      date: "2025",
      description: "Participated in CircuiTRICS 2K25, demonstrating expertise in circuit design and electronics engineering principles.",
      certificateId: "CIRC-2K25-001",
      image: circuitricsCertificate,
    },
    {
      title: "CIVISTA 2025",
      issuer: "CIVISTA Technical Festival",
      date: "2025",
      description: "Achieved certification in CIVISTA 2025 technical festival, participating in various technical competitions and workshops.",
      certificateId: "CIV-2025-001",
      image: civistaCertificate,
    },
    {
      title: "Web Page Design",
      issuer: "Web Development Program",
      date: "2025",
      description: "Completed certification in web page design, mastering HTML, CSS, and modern web development frameworks.",
      certificateId: "WEB-2025-001",
      image: webPageDesignCertificate,
    },
    {
      title: "Volleyball Championship",
      issuer: "Sports Department",
      date: "2025",
      description: "Participated in volleyball championship, demonstrating teamwork and athletic excellence.",
      certificateId: "VOL-2025-001",
      image: volleyballCertificate,
    },
    {
      title: "State Level Volleyball",
      issuer: "State Sports Association",
      date: "2025",
      description: "Represented at state level volleyball competition, achieving excellence in sports and teamwork.",
      certificateId: "STATE-VOL-2025-001",
      image: stateLevelVolleyballCertificate,
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "DSA Training Program",
      date: "2025",
      description: "Completed advanced certification in Data Structures and Algorithms, mastering problem-solving techniques.",
      certificateId: "DSA-2025-001",
      image: dsaCertificate,
    },
    {
      title: "Learning Git and GitHub",
      issuer: "Version Control Training",
      date: "2025",
      description: "Mastered Git version control and GitHub collaboration, essential skills for modern software development.",
      certificateId: "GIT-2025-001",
      image: learningGitCertificate,
    },
    {
      title: "Shark Tank 2025",
      issuer: "Shark Tank Competition",
      date: "2025",
      description: "Participated in Shark Tank 2025 entrepreneurship competition, presenting innovative ideas and business solutions.",
      certificateId: "SHARK-2025-001",
      image: sharkTankCertificate,
    },
    {
      title: "Unstop Platform",
      issuer: "Unstop Competition Platform",
      date: "2025",
      description: "Achieved certifications through Unstop platform, participating in various technical and non-technical competitions.",
      certificateId: "UNSTOP-2025-001",
      image: unstopCertificate,
    },
    {
      title: "CodeBizz 2026",
      issuer: "CodeBizz Programming Competition",
      date: "2026",
      description: "Volunteered for CodeBizz 2026 programming competition, contributing to event organization and supporting participants in technical challenges.",
      certificateId: "CODE-2026-001",
      image: codebizzCertificate,
    },
    {
      title: "Python Programming",
      issuer: "Python Training Program",
      date: "2025",
      description: "Completed comprehensive Python programming certification, mastering fundamental concepts, data structures, and practical applications in software development.",
      certificateId: "PYTHON-2025-001",
      image: pythonProgrammingCertificate,
    },
    {
      title: "CareerVault",
      issuer: "CareerVault Professional Development",
      date: "2025",
      description: "Achieved certification from CareerVault program, enhancing professional skills and career development capabilities for technical roles.",
      certificateId: "CAREER-2025-001",
      image: careerVaultCertificate,
    },
  ];

  return (
    <SectionWrapper>
      <div className="flex flex-col items-center">
        <motion.div
          variants={slideIn("up", "tween", 0.2, 1)}
          className="w-full max-w-6xl"
        >
          <h2 className={styles.sectionHeadText}>Certifications</h2>
          <p className={styles.sectionSubText}>Professional Certificates & Achievements</p>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                variants={slideIn("up", "tween", 0.2 + index * 0.1, 1)}
                className="bg-black-100 p-6 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  {/* Certificate Image */}
                  {cert.image && (
                    <div className="mb-4">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  )}
                  
                  {/* Certificate Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white text-lg font-bold">
                        {cert.title}
                      </h3>
                      <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-cyan-400 text-sm font-medium">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {cert.date}
                    </p>
                  </div>
                  
                  {/* Certificate Description */}
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                    {cert.description}
                  </p>
                  
                  {/* Certificate Footer */}
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-xs">
                        ID: {cert.certificateId}
                      </span>
                      {cert.image && (
                        <button 
                          onClick={() => window.open(cert.image, '_blank')}
                          className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors"
                        >
                          View Certificate
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
