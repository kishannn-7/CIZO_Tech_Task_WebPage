import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import Services from './components/Services.jsx';
import Footer from './components/Footer.jsx';


const App = () =>{
    return (
      <div className="bg-white">
        <Navbar/>
        <HeroSection/>
        <Services/>
        <Footer/>
      </div>
    )
};


export default App;