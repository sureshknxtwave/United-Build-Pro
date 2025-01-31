// src/App.tsx
import React from 'react';

import ConditionalTopBar from '../../components/Homepage/Header.tsx';
import Navbar from '../../components/Navbar/Navbar.tsx';
import Banner from '../../components/Contact/Banner.tsx'

import Footer from '../../components/Footer/Footer.tsx';
import ContactForm from '../../components/Contact/ContactForm.tsx';
import GoogleMap from '../../components/Contact/GoogleMap.tsx';

const Contact: React.FC = () => {
  return (
    <>
    <ConditionalTopBar/>
    <Navbar/>
    <Banner/>
    <ContactForm></ContactForm>
    <GoogleMap/>
    <Footer/>
    </>
  );
};

export default Contact;