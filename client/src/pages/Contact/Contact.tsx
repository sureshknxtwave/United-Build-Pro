// src/App.tsx
import React from 'react';

import ConditionalTopBar from '../../components/Homepage/ConditionalTopBar.tsx';
import Navbar from '../../components/Navbar/Navbar.tsx';
import Banner from '../../components/Contact/Banner.tsx'

import Footer from '../../components/Footer/Footer.tsx';
import ContactForm from '../../components/Contact/ContactForm.tsx';

const Contact: React.FC = () => {
  return (
    <>
    <ConditionalTopBar/>
    <Navbar/>
    <Banner/>
    <ContactForm></ContactForm>
    <Footer/>
    </>
  );
};

export default Contact;