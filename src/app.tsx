import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { 
  About, 
  Education, 
  Experience, 
  FrontendWebsites,
  Hero, 
  Navbar, 
  SimpleContact, 
  Tech, 
  Works, 
  Footer,
  AsteroidsBackground,
  Certifications
} from "./components";
import Banner from "./components/banner";

// App
const App = () => {
  const [hide, setHide] = useState(true);

  return (
    <BrowserRouter>
      <Banner hide={hide} setHide={setHide} />
      <div className="relative z-0 bg-primary">
        <Routes>
          <Route path="/" element={
            <>
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar hide={hide} />
                <Hero />
              </div>
              <AsteroidsBackground>
                <About />
                <Experience />
                <Education />
                <Tech />
                <Works />
                <FrontendWebsites />
                <Certifications />
                <SimpleContact />
                <Footer />
              </AsteroidsBackground>
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
