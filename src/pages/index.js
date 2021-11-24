import React from 'react';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import { InfoData, InfoDataTwo } from '../data/InfoData';

const Home = () => {
  return (
    <>
      <Hero />
      <InfoSection {...InfoData}/>
      <InfoSection {...InfoDataTwo}/>
    </>
  )
}

export default Home;
