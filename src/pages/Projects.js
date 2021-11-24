import React from 'react';
import InfoSection from '../components/InfoSection';
import { InfoData, InfoDataTwo } from '../data/InfoData'

const Projects = () => {
  return (
  <>
    <InfoSection {...InfoData} /><InfoSection {...InfoDataTwo} />
  </> 
  )
};

export default Projects
