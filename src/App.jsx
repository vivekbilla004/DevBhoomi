import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Aboutus from "./components/pages/Aboutus";
import Contactus from "./components/pages/Contactus";
import ElevatorHero from "./components/ElevatorHero"; // Import ElevatorHero
import AboutCompany from "./components/AboutCompany";
import Services from "./components/Services";
import ExperiencePage from "./components/ExperiencePage";
import TeamSection from "./components/TeamSection";
import Testimonials from "./components/Testimonials";


const App = () => {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={
            <>
              <ElevatorHero />
              <AboutCompany />
              <Services/> 
              <ExperiencePage/>
              <TeamSection/>
              <Testimonials/>
              {/* Rendered below ElevatorHero */}
            </>
          } /> Render ElevatorHero on the root path
        <Route path="/Home" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contactus" element={<Contactus />} />
      </Routes>
    </Router>
  );
};

export default App;
