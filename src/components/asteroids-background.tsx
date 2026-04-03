import { ReactNode } from "react";
import { AsteroidsCanvas } from "./canvas";

interface AsteroidsBackgroundProps {
  children: ReactNode;
}

const AsteroidsBackground = ({ children }: AsteroidsBackgroundProps) => {
  return (
    <div className="relative">
      {/* Asteroids Background - Only for wrapped sections */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AsteroidsCanvas />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AsteroidsBackground;
