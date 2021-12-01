import React from 'react';
import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import PText from './Ptext';

const ItemStyles = styled.div`
  padding: 0.5rem;
  background-color: #adadad;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 3rem;
  border-radius: 4px;
  margin-bottom: 2rem;
  .icon {
    color: moccasin;
    background-color: #2a2a2a;
    padding: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    line-height: 40px;  
    width: 40px;  
    font-size: 1.2em;
    border-radius: 50%;  }
  svg {
    width: 3.5rem;
  }
  
`;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
}) {
  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </ItemStyles>
  );
}