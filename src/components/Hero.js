import React from 'react';
import styled, { css } from 'styled-components/macro';
import ImgBg from '../assets/images/hero.jpg';
import { Button } from './Button';


const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  border-bottom: solid 4px white;
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

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  filter: brightness(75%);
  `;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  border-bottom:  solid 4px moccasin;
  border-right:  solid 2px lightSteelBlue;
  border-radius: 1px;
  max-width: 500px;
  width: calc(100%-100px);
  color: #fff;
  background-color: rgba(0, 0, 0, 0.2);

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
  return (
    <HeroSection>
      <HeroWrapper>
        <HeroImage src={ImgBg}/>
        <HeroContent>
          <h1>HI<span style={{color: 'moccasin'}}>,</span> I<span style={{color: 'moccasin'}}>'</span>M <span style={{color: 'lightSteelBlue'}}>STEPHANE</span><span style={{color: 'moccasin'}}>,</span></h1>
          <p>CREATIVE FRONT<span style={{color: 'lightSteelBlue'}}>-</span>END DEVELOPER <span style={{color: 'moccasin'}}>&</span></p>
          <p>UI<span style={{color: 'lightSteelBlue'}}>/</span>UX DESIGNER.</p>
        </HeroContent>
        <HeroButton>
            <Button style={{backgroundColor: 'lightSteelBlue', color: ' #2a2a2a'}} primary="true" to="/contact">
            CONTACT ME
            </Button>
          </HeroButton>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
