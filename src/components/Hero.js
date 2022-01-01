import React from 'react';
import ImgBg from '../assets/images/hero.jpg';
import styled from 'styled-components';
import { Button } from './Button';
import { motion, AnimatePresence } from 'framer-motion';


const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  border-bottom: solid 4px white;

  @media (max-width: 767px) {
    background-position: left;
}
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroImage = styled(motion.img)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  object-fit: cover;
  filter: grayscale(100%);
  `;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  border-bottom:  solid 4px moccasin;
  border-right:  solid 3px lightSteelBlue;
  border-radius: 1px;
  max-width: 500px;
  width: calc(100%-100px);
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);

  @media screen and (min-width: 480px) {
   {
    max-width: 90%;
}

  h1 {
    font-size: clamp(1rem, 8vw, 2.2rem);
    font-weight: 700;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: clamp(1em, 8vw, 1.8rem);
    font-weight: 400;
    text-align: left;
    margin-bottom: 0.8rem;
  }
}
`;

const HeroButton = styled.div`
  position: absolute;
  display: center;
  margin-top: 240px;
  
  @media screen and (min-width: 769px) {
    display: none;
  }
`;


const Hero = () => {


  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0 }
  };

  return (
    <HeroSection>
      <HeroWrapper>
      <AnimatePresence>
        <HeroImage 
          src={ImgBg}
          initial='hidden'
          animate='visible'
          exit='exit'
          variants={fadeAnimation}
        />
        <HeroContent>
          <h1 
            data-aos='fade-down' 
            data-aos-duration='800'>
            HI
            <span style={{color: 'moccasin'}}>, </span> 
            I
            <span style={{color: 'moccasin'}}>'</span>
            M 
            <span style={{color: 'lightSteelBlue'}}> STEPHANE</span>
            <span style={{color: 'moccasin'}}>,</span>
          </h1>
          <p  
            data-aos='fade-right'
            data-aos-duration='800'
            data-aos-delay='200'>
            CREATIVE FRONT
            <span style={{color: 'moccasin'}}>-</span>
            END DEVELOPER 
            <br/>
            <span style={{color: 'lightSteelBlue'}}>& </span>
            UI DESIGNER
            <span style={{color: 'moccasin'}}>.</span>
          </p>
        </HeroContent>
        <HeroButton>
            <Button 
              data-aos='zoom-out'
              data-aos-duration='1000'
              data-aos-delay='250'
              style={{backgroundColor: 'lightSteelBlue', color: ' #2a2a2a'}} primary="true" to="/contact"
            >
              CONTACT
            </Button>
          </HeroButton>
          </AnimatePresence>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
