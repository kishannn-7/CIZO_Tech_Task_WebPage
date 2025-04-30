import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import Services from './components/Services.jsx';
import Footer from './components/Footer.jsx';
import AboutUs from './components/AboutUs.jsx';
import TrustedbySection from './components/TrustedbySection.jsx';
import TestimonialSlider from './components/TestimonialSlider.jsx';


const App = () =>{
    return (
      <div className="bg-white">
        <Navbar/>
        <HeroSection/>
        <Services/>
        <AboutUs/>
        <TrustedbySection/>
        <TestimonialSlider/>
        <Footer/>
      </div>
    )
};


export default App;