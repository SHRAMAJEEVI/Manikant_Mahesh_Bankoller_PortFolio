import { Link } from "react-router-dom";

import { SOCIALS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// Footer
const Footer = () => {
  return (
    <nav
      className={cn(
        styles.paddingX,
        "w-full flex items-center py-8 bg-primary border-t border-t-secondary/5"
      )}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <p className="text-white text-md font-bold flex">
          Arise, awake and stop not till the goal is reached
        </p>

        {/* Social Links */}
        <ul className="list-none hidden flex-row sm:flex gap-6">
          {SOCIALS.map((social) => {
            const Icon = social.icon;
            return (
              <li
                key={social.name}
                className="font-poppins cursor-pointer opacity-80 hover:opacity-100 transition"
              >
                <a 
                  href={social.link} 
                  target="_blank" 
                  rel="noreferrer noopener"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-tertiary hover:bg-cyan-400/20 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="text-2xl text-white hover:text-cyan-400 transition-all duration-300" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
