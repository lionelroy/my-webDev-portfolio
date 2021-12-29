import React from 'react';
import AboutSection from '../components/AboutSection';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import SkillSection from '../components/SkillSection';

const Home = () => {
  return (
    <>
      <Hero />
      <InfoSection/>
      <SkillSection/>
      <AboutSection/>
    </>
  )
}

export default Home;
