import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import geYoImg from '../assets/images/geYo-image.png';
import weatherAppImg from '../assets/images/weather-app-image.png';

const Section = styled.section`
 border: solid 4px white;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 0fr;
  grid-template-rows: 400px;
  margin-bottom: 4px;


  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    height: 100%;    
  }
`;

const ColumnLeft = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;

  h1{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem
  }
`;

const ColumnRight = styled.div`
  background-color: lightSteelBlue;
  filter-background: brightness(70%);
  padding: 1rem 1rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      }
    }
  }
`;

const InfoSection = (delay) => {
  return (
    <Section>
      <Container>
        <ColumnLeft
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-once='true'
          data-aos-delay='100'
          data-aos-anchor-placement='center bottom'>
          <h1>geYo</h1>
          <p>Responsive maps application that let's users search for restaurants, hotels and attractions around the world.</p>
          <Button primary="true" to="" onClick={() => {window.open("https://geyo.netlify.app", "_blank");}}>View Project</Button>
        </ColumnLeft>
        <ColumnRight>
        <img 
          src={geYoImg} 
          alt='geYo project' 
          data-aos='zoom-out'
          data-aos-duration='1000'
          data-aos-once='true'
          data-aos-delay='300'
          data-aos-anchor-placement='center bottom'/>
        </ColumnRight>
        </Container>
        <Container>
        <ColumnLeft
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-once='true'
          data-aos-delay={delay}
          data-aos-anchor-placement='center bottom'>
          <h1>Weather App</h1>
          <p>Weather forecast application that let's users fetch weather from anywhere around the world using city names and zip codes.</p>
          <Button primary="true" to="" onClick={() => {window.open("https://lionelroy.github.io/weather-app/dist/index.html", "_blank");}}>View Project</Button>
        </ColumnLeft>
        <ColumnRight>
        <img 
          src={weatherAppImg}
          alt='home' 
          data-aos='zoom-out'
          data-aos-duration='1000'
          data-aos-once='true'
          data-aos-delay='delay'
          data-aos-anchor-placement='center bottom'/>
        </ColumnRight>
      </Container>
    </Section>
  )
}

export default InfoSection;
