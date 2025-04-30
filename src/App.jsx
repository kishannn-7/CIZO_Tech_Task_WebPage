import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import Services from './components/Services.jsx';
import Footer from './components/Footer.jsx';
import AboutUs from './components/AboutUs.jsx';
import TrustedbySection from './components/TrustedbySection.jsx';
import TestimonialSlider from './components/TestimonialSlider.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import HowItWorks from './components/HowitWorks.jsx';
import DevelopmentApproach from './components/DevelopmentApproach.jsx';
import TechStack from './components/TechStack.jsx';
import Resources from './components/Resources.jsx';
import DevelopmentProcess from './components/DevelopmentProcess.jsx';
import HireDevelopers from './components/HireDevelopers.jsx';

const App = () =>{
    return (
      <div className="bg-white">
        <Navbar/>
        <HeroSection/>
        <Services/>
        <AboutUs/>
        <TrustedbySection/>
        <TestimonialSlider/>
        <CaseStudies/>
        <HowItWorks/>
        <DevelopmentApproach/>
        <TechStack/>
        <DevelopmentProcess/>
        <Resources/>
        <HireDevelopers/>
        <Footer/>
      </div>
    )
};

export default App;