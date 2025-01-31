// src/App.tsx
import React from 'react';
import Banner from '../../components/Homepage/BannerSection.tsx';
import Header from '../../components/Homepage/Header.tsx';
import AboutUs from '../../components/Homepage/About.tsx';
import Services from '../../components/Homepage/Services.tsx';
import RecentProjects from '../../components/Homepage/Projects.tsx';
import HowWeWork from '../../components/Homepage/HowWeWorks.tsx';
import ClientsFeedback from '../../components/Homepage/ClientsFeedback.tsx';
import ContactForm from '../../components/Homepage/ContactForm.tsx';
import Footer from '../../components/Footer/Footer.tsx';
const Homepage: React.FC = () => {
  return (
    <>
    <Header/>
    <Banner />
    <AboutUs/>
    <Services/>
    <RecentProjects/>
    <HowWeWork/>
    <ClientsFeedback/>
    <ContactForm/>
    <Footer/>
    </>
  );
};

export default Homepage;