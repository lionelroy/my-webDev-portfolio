import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import geYoImg from '../assets/images/geYo-image.png';
import weatherAppImg from '../assets/images/weather-app-image.png';
import blogotekImg from '../assets/images/blogotek-image.png';
import { FaSass, FaReact } from 'react-icons/fa';
import { SiHtml5, SiJavascript, SiNextdotjs, SiGraphql, SiNetlify, SiMaterialui, SiTailwindcss, SiVercel, SiGooglemaps } from 'react-icons/si';
import { MdAccessibility } from 'react-icons/md';

const Section = styled.section`
 border: solid 6px white;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 0fr;
  grid-template-rows: 400px;
  margin-bottom: 8px;


  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    height: 100%;    
  }
`;

const ColumnLeft = styled.div`
  background-color: lightSteelBlue;
  color: #2a2a2a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 6rem;
  
  @media screen and (max-width: 960px) {
    background-color: #2a2a2a;
    color: #fff;
    padding: 1rem 2rem;
  }

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

const TechIcons = styled.div`
  display: flex;
  width: 100%;
`;

const Icons = css`
  display: inlineFlex;
  justify-content: center;
  align-items: center;
  font-size: clamp(2rem, 6vw, 3rem);
  padding: 3px;
  margin: 0.3rem;
  margin-left: 0;
  border-radius: 4px;
  color: moccasin;

  &:hover {
    color: #2a2a2a;
  }

  @media screen and (max-width: 960px) {
  font-size: clamp(1.8rem, 5.5vw, 2.8rem);
  color: lightSteelBlue;

    &:hover {
      color: moccasin;
    }
  }
`;

const HtmlIcon = styled(SiHtml5)`  
  ${Icons}
`;

const SassIcon = styled(FaSass)`  
  ${Icons}
`;

const MaterialuiIcon = styled(SiMaterialui)`  
  ${Icons}
`;

const TailwindIcon = styled(SiTailwindcss)`  
  ${Icons}
`;

const JavascriptIcon = styled(SiJavascript)`
  ${Icons}
`;

const ReactIcon = styled(FaReact)`
  ${Icons}
`;

const NextjsIcon = styled(SiNextdotjs)`
  ${Icons}
`;

const GraphqlIcon = styled(SiGraphql)`
  ${Icons}
`;

const NetlifyIcon = styled(SiNetlify)`
  ${Icons}
`;

const VercelIcon = styled(SiVercel)`
  ${Icons}
`;

const GooglemapIcon = styled(SiGooglemaps)`
  ${Icons}
`;

const AccessibilityIcon = styled(MdAccessibility)`
  ${Icons}
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
          <h1>Blogotek</h1>
          <TechIcons>
            <a href="https://www.w3schools.com/html/" rel="noopener noreferrer"
              target="_blank">
              <TailwindIcon />
            </a>
            <a href="https://reactjs.org/" rel="noopener noreferrer"
              target="_blank">
              <ReactIcon />
            </a>
            <a href="https://nextjs.org/" rel="noopener noreferrer"
              target="_blank">
              <NextjsIcon />
            </a>
            <a href="https://graphql.org/" rel="noopener noreferrer"
              target="_blank">
              <GraphqlIcon />
            </a>
            <a href="https://vercel.com/" rel="noopener noreferrer"
              target="_blank">
              <VercelIcon />
            </a>
          </TechIcons>
          <p>Fully Responsive headless CMS blog focused on technology.</p>
          <Button primary="true" to="" onClick={() => {window.open("https://blogotek.vercel.app", "_blank");}}>View Project</Button>
        </ColumnLeft>
        <ColumnRight>
        <img 
          src={blogotekImg} 
          alt='Blogotek project' 
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
          data-aos-delay='100'
          data-aos-anchor-placement='center bottom'>
          <h1>geYo</h1>
          <TechIcons>
            <a href="https://www.w3schools.com/html/" rel="noopener noreferrer"
              target="_blank">
              <MaterialuiIcon />
            </a>
            <a href="https://reactjs.org/" rel="noopener noreferrer"
              target="_blank">
              <ReactIcon />
            </a>
            <a href="https://www.netlify.com/" rel="noopener noreferrer"
              target="_blank">
              <NetlifyIcon />
            </a>
            <a href="https://developers.google.com/maps" rel="noopener noreferrer"
              target="_blank">
              <GooglemapIcon />
            </a>
          </TechIcons>
          <p>Search for restaurants, hotels and attractions near you with geYo: a responsive Google maps advisory application.</p>
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
          <TechIcons>
            <a href="https://www.w3schools.com/html/" rel="noopener noreferrer"
              target="_blank">
              <HtmlIcon />
            </a>
            <a href="https://sass-lang.com/" rel="noopener noreferrer"
              target="_blank">
              <SassIcon />
            </a>
            <a href="https://www.javascript.com/" rel="noopener noreferrer"
              target="_blank">
              <JavascriptIcon />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility" rel="noopener noreferrer"
              target="_blank">
              <AccessibilityIcon />
            </a>
          </TechIcons>
          <p>Mobile-first weather forecast application built using Open Weather Map API, geolocation API and accessibility considerations.</p>
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
