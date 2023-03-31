import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import AboutPortrait from '../assets/images/self-portrait.jpg';
import { FaGithub } from 'react-icons/fa';


const Section = styled.section`
  background: #2d2d2d;
  padding: 12rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
`;

const Container = styled.div`
  background: AliceBlue;
  padding: 3rem 2rem;
  position: relative;
`;

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0px -15px;
  justify-content: flex-start;
  padding: 1rem;

  h1 {
    color: #2d2d2d;
    margin-bottom: 1rem;
    font-size: 2rem;
    }

    p {
      color: #2d2d2d;
      margin-bottom: 1rem;
      line-height: 1.5;
    }
`;

const Content = styled.div`
  flex: 0 0 50%;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 250px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  max-width: 50px;
  margin-top: 1rem;
`;

const Icons = css`
  display: Flex;
  justify-content: center;
  font-size: clamp(1.7rem, 5.7vw, 2.8em);
  border-radius: 4px;
  color: #2a2a2a;
  padding-left: 8px;

  &:hover {
    color: lightSteelBlue;
  }
`;

const GithubIcon = styled(FaGithub)`  
  ${Icons}
`;


const ColumnRight = styled.div`
  position: absolute;
  top: -80px;
  right: 0;
  max-width: 596px;
  height: 140%;
  width: 45%;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    height: 320px;
    top: -65px;
    width: 80%;
    margin: 0 auto;
    left: 0;
  }
`;

const Image = styled.img`
  height: 90%;
  width: 90%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`;

const AboutSection = () => {
  return (
   <Section>
     <Container>
       <Wrap>
         <ColumnLeft>
            <Content
              data-aos='fade-right'
              data-aos-duration='1200'
              data-aos-delay='300'
              data-aos-once='true'
              data-aos-anchor-placement='center bottom'>
            <h1>About Me</h1>
            <p>Hi, my name is <i><b>Stephane Roy</b></i>.</p>
            <p>I'm a Software QA Specialist with a background in building automation and electrical systems based in <b>Riverview, NB</b>.
            </p>
            <p>Follow the link to my Github account to find more projects including a web server built with NodeJS, ExpressJS, and MongoDB, a shopping list React App, a Python data analysis project, and more.
            </p>
            <ButtonWrap>
              <Button to="/resume" primary="true" style={{backgroundColor: "lightSteelBlue"}}>Resume
              </Button>
              <a href="https://github.com/lionelroy" rel="noopener noreferrer"
              target="_blank">
                <GithubIcon />
              </a>
            </ButtonWrap>
           </Content>
         </ColumnLeft>
         <ColumnRight>
          <Image 
            src={AboutPortrait}
            data-aos='fade-left'
            data-aos-duration='1200'
            data-aos-once='true'
            data-aos-anchor-placement='center bottom'/>
         </ColumnRight>
       </Wrap>
     </Container>
   </Section>
  )
}

export default AboutSection;
