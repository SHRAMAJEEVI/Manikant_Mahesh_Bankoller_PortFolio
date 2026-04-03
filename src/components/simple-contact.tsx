import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import { uploadedImage1 } from "../assets";

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
