import React from 'react';
import styled, { css } from 'styled-components/macro';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Section = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  width: 100%;
  background-color: lightSteelBlue;
  margin-top: 4px; 
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 1.3rem;
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterCopyright = styled.div`
  display: flex;
  flex-direction: column;
  color: #2a2a2a;
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  position: absolute;
`;

const Icons = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: clamp(1.2rem, 7vw, 1.7rem);
  margin-right: 1.5rem;
  background-color: moccasin;
  padding: 3px;
  border-radius: 4px;
  color: #2a2a2a;

  &:hover {
    font-size: clamp(1.5rem, 10vw, 2rem);
    transform: translate3d(0, -0.2em, 0);
  }
`;

const Github = styled(FaGithub)`  
  ${Icons}
`;

const LinkedIn = styled(FaLinkedinIn)`
  ${Icons}
`;

const Instagram = styled(FaInstagram)`
  ${Icons}
  `;


const Footer = () => {
  return (
      <Section>
        <Container>
          <FooterRight>
            <FooterCopyright>
              <h4>© Stephane Roy</h4>
            </FooterCopyright>
          </FooterRight>
          <FooterLeft>
            <SocialIcons>
              <a href="https://github.com/lionelroy" rel="noopener noreferrer"
              target="_blank">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/stephane-roy-61b20915b/" rel="noopener noreferrer"
              target="_blank">
                <LinkedIn />
              </a>
              <a href="https://www.instagram.com/stephaneroyphotography/" rel="noopener noreferrer"
              target="_blank">
                <Instagram />
              </a>
            </SocialIcons>
          </FooterLeft>
        </Container>
      </Section>
  )
}

export default Footer;
