import React from 'react';
import styled, { css } from 'styled-components/macro';
import { FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaReact, FaLinux, FaGitAlt, FaGithub, FaFigma} from 'react-icons/fa';
import { SiJavascript,  SiNextdotjs, SiGraphql, SiNetlify, SiVercel, SiAdobelightroom } from 'react-icons/si';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 400px;
  margin-bottom: 8px;


  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    height: 100%;    
  }
`;

const SectionTitle = styled.div`
  background-color: #2a2a2a;
  color: lightSteelBlue;
  display: flex;
  justify-content: center;
  align-items: center;

  h1{
    font-size: 2.6rem;
  }
`;

const TechnologiesSection = styled.div`
  background-color: moccasin;
  padding-top: 4rem;
  padding-bottom: 4rem;
  }
`;

const TechIconsRow1 = styled.div`
  display: flex;
  width: 100%;
  justify-items:center;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    padding-left: 6px;
  }
  `;

const TechIconsRow2 = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    padding-left: 6px;
`;

const TechIconsRow3 = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    padding-left: 6px;
`;

const Icons = css`
  display: flex;
  align-items: center;
  font-size: clamp(4rem, 10vw, 5rem);
  padding: 3px;
  margin: 0.5rem;
  border-radius: 4px;
  color: #2a2a2a;

  &:hover {
    color: lightSteelBlue;
  }

  @media screen and (max-width: 960px) {
  font-size: clamp(4rem, 10vw, 5rem);

  @media screen and (max-width: 480px) {
  font-size: clamp(3.6rem, 8.8vw, 4.4rem);
  }
`;

const HtmlIcon = styled(FaHtml5)`  
  ${Icons}
`;

const CssIcon = styled(FaCss3Alt)`  
  ${Icons}
`;


const SassIcon = styled(FaSass)`  
  ${Icons}
`;

const BootstrapIcon = styled(FaBootstrap)`
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

const GitIcon = styled(FaGitAlt)`
  ${Icons}
`;

const GithubIcon = styled(FaGithub)`
  ${Icons}
`;

const NetlifyIcon = styled(SiNetlify)`
  ${Icons}
`;

const VercelIcon = styled(SiVercel)`
  ${Icons}
`;

const LinuxIcon = styled(FaLinux)`
  ${Icons}
`;

const FigmaIcon = styled(FaFigma)`
  ${Icons}
`;

const LightroomIcon = styled(SiAdobelightroom)`
  ${Icons}
`;


const SkillSection = () => {
  return (
     <Container>
        <SectionTitle
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-once='true'
          data-aos-delay='100'
          data-aos-anchor-placement='center bottom'>
          <h1>Technologies</h1>
          </SectionTitle>
        <TechnologiesSection
          data-aos='zoom-out'
          data-aos-duration='1000'
          data-aos-once='true'
          data-aos-delay='300'
          data-aos-anchor-placement='center bottom'
          >
          <TechIconsRow1>
              <a href="https://www.w3schools.com/html/" rel="noopener noreferrer"
              target="_blank">
                <HtmlIcon />
              </a>
              <a href="https://www.w3schools.com/css/" rel="noopener noreferrer"
              target="_blank">
                <CssIcon />
              </a>
              <a href="https://sass-lang.com/" rel="noopener noreferrer"
              target="_blank">
                <SassIcon />
              </a>
               <a href="https://getbootstrap.com/" rel="noopener noreferrer"
              target="_blank">
                <BootstrapIcon />
              </a>
               <a href="https://www.javascript.com/" rel="noopener noreferrer"
              target="_blank">
                <JavascriptIcon />
              </a>
            </TechIconsRow1>
            <TechIconsRow2>
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
               <a href="https://git-scm.com/" rel="noopener noreferrer"
              target="_blank">
                <GitIcon />
              </a>
               <a href="https://github.com/" rel="noopener noreferrer"
              target="_blank">
                <GithubIcon />
              </a>
            </TechIconsRow2>
            <TechIconsRow3>
              <a href="https://www.netlify.com/" rel="noopener noreferrer"
              target="_blank">
                <NetlifyIcon />
              </a>
              <a href="https://vercel.com/" rel="noopener noreferrer"
              target="_blank">
                <VercelIcon />
              </a>
              <a href="https://www.linux.com/" rel="noopener noreferrer"
              target="_blank">
                <LinuxIcon />
              </a>
              <a href="https://www.figma.com/" rel="noopener noreferrer"
              target="_blank">
                <FigmaIcon />
              </a>
              <a href="https://lightroom.adobe.com/" rel="noopener noreferrer"
              target="_blank">
                <LightroomIcon />
              </a>
            </TechIconsRow3>
        </TechnologiesSection>
        </Container>       
  )
}

export default SkillSection;
