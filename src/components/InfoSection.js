import React from 'react';
import styled from 'styled-components';
import { Button } from './Button'

const Section = styled.section`
 border: solid 4px white;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 0fr;
  grid-template-rows: 400px;

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


const InfoSection = ({heading, paragraph, buttonLabel, image}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <p>{paragraph}</p>
            <Button primary="true" to="">{buttonLabel}</Button>
        </ColumnLeft>
        <ColumnRight>
        <img src={image} alt='home' />
        </ColumnRight>
      </Container>
    </Section>
  )
}

export default InfoSection;
