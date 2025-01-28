// src/App.tsx
import React from 'react';

import ConditionalTopBar from '../../components/Homepage/ConditionalTopBar.tsx';
import Navbar from '../../components/Navbar/Navbar.tsx';
import Banner from '../../components/About/Banner.tsx'
import WhyChooseUs from '../../components/About/WhyChooseUs.tsx';
import Footer from '../../components/Footer/Footer.tsx';
const About: React.FC = () => {
  return (
    <>
    <ConditionalTopBar/>
    <Navbar/>
    <Banner/>
    <WhyChooseUs/>
    <Footer/>
    </>
  );
};

export default About;