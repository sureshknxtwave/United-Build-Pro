// src/App.tsx
import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import ConditionalTopBar from '../../components/Homepage/Header.tsx';
import Navbar from '../../components/Navbar/Navbar.tsx';
import Footer from '../../components/Footer/Footer.tsx';
import ServiceFeature from '../../components/ServiceComponents/2D&3DConsultant.tsx'
import BuildingMaterialsService from '../../components/ServiceComponents/BuildingMaterials.tsx';
import ConstructionInteriors from '../../components/ServiceComponents/Construction&Interior.tsx';
import JointVentures from '../../components/ServiceComponents/JointVentures.tsx';
import RealEstateConsultants from '../../components/ServiceComponents/RERAConsultants.tsx';
import LandDevelopment from '../../components/ServiceComponents/LandDevelopment.tsx';

const ServicePage: React.FC = () => {
  return (
    <>
    <ConditionalTopBar/>
    <Navbar/>
    <Routes>
    
    
        <Route path="/2d-3d-consultant" element={<ServiceFeature />} />
        <Route path="/building-materials" element={<BuildingMaterialsService />} />
        <Route path="/construction-interior" element={<ConstructionInteriors />} />
        <Route path="/joint-ventures" element={<JointVentures />} />
        <Route path="/rera-consultants" element={<RealEstateConsultants />} />
        <Route path="/land-development" element={<LandDevelopment/>} />
      </Routes>
   
    <Footer/>
    </>
  );
};

export default ServicePage;