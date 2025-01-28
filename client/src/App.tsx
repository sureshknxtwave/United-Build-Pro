// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage.tsx';
import About from './pages/About/About.tsx';
import Contact from './pages/Contact/Contact.tsx';
import ServicePage from './pages/ServicesPage/ServicePage.tsx';
import Blocks from './pages/Blocks/Blocks.tsx';
import Services from './components/Homepage/Services.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import Footer from './components/Footer/Footer.tsx';
import Header from './components/Homepage/Header.tsx'
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={
          <>
          <Header/>
          <Navbar/>
          <Services/>
          <Footer/>
          </>} />
        <Route path="/services/*" element={<ServicePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blocks/*" element={<Blocks />} />
      </Routes>
    </Router>
  );
};

export default App;