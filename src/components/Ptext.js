import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  color: #2d2d2d;
  margin: 0 auto;
  font-size: 0.9rem;
  line-height: 1em;
  @media only screen and (max-width: 968px) {
    font-size: 0.9rem;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}