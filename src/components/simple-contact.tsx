import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import { uploadedImage1, resume } from "../assets";

// Simple Contact
export const SimpleContact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (name.trim() && message.trim()) {
      setSubmitted(true);
      toast.success("Message submitted successfully!");
      
      // Here you can add actual email sending logic later
      console.log("Contact form submitted:", { name, message });
      
      // Clear form after 2 seconds
      setTimeout(() => {
        setName("");
        setMessage("");
        setSubmitted(false);
      }, 2000);
    } else {
      toast.error("Please fill in all fields");
    }
  };

  return (
    <SectionWrapper idName="contact">
      <div className="flex flex-col items-center">
        <motion.div
          variants={slideIn("up", "tween", 0.2, 1)}
          className="bg-black-100 p-8 rounded-2xl max-w-4xl w-full"
        >
          <h3 className={styles.sectionHeadText}>Get in Touch</h3>
          <p className={styles.sectionSubText}>Feel free to reach out to me!</p>
          
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Profile Photo */}
            <div className="mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-400/20">
                <img 
                  src={uploadedImage1} 
                  alt="Manikant Mahesh Bankoller - Profile Photo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="flex-1">
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-4"
              >
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-white font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-tertiary rounded-lg text-white placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    disabled={submitted}
                  />
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-white font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                    className="w-full px-4 py-3 bg-tertiary rounded-lg text-white placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                    disabled={submitted}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={submitted}
                  className="mt-6 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitted ? "Submitted ✓" : "Send Message"}
                </button>
              </form>
              
              {/* Resume Download Button */}
              <div className="mt-6 text-center">
                <p className="text-secondary text-sm mb-3">Want to know more about my experience?</p>
                <a
                  href={resume}
                  download="Manikant_Mahesh_Bankoller_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* 3D Earth Animation - Below Contact Section */}
        <motion.div
          variants={slideIn("up", "tween", 0.3, 1)}
          className="w-full mt-12 xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
