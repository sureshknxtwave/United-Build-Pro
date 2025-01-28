// src/pages/Blocks/Blocks.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ConditionalTopBar from '../../components/Homepage/ConditionalTopBar.tsx';
import Navbar from '../../components/Navbar/Navbar.tsx';
import Footer from '../../components/Footer/Footer.tsx';
import BlocksListing from '../../components/Blocks/BlocksListing.tsx';
import BlockDetails from '../../components/Blocks/BlockDetails.tsx';
import BlocksHero from '../../components/Blocks/Banner.tsx';

const Blocks: React.FC = () => {
  return (
    <>
      <ConditionalTopBar />
      <Navbar />
      <BlocksHero></BlocksHero>
      <Routes>
        <Route index element={<BlocksListing />} />
        <Route path=":id" element={<BlockDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Blocks;