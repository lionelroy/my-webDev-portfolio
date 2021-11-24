import React from 'react'
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa'
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { Link } from 'react-router-dom';

const DropdownContainer = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: lightSteelBlue;
display: grid;
align-items: center;
top: 0;
bottom: 0;
right: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(FaTimes)`
  color: #202020;
`;

const DropdownWrapper = styled.div`
 padding:0px;
`;

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 3rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.7rem;
  text-decoration: none;
  list-style: none;
  color: #fff;
  transition: 0.5s ease-in-out;
  
  &:hover { 
    color: #2a2a2a;
    transition: opacity 300ms, transform 70ms;
    transform: translate3d(0.3em, 0, 0);
    visibility: visible;
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-duration: 0.5s;
    @keyframes fadeInOpacity {
  0% {
    opacity: .5;
  }
 
  100% {
    opacity: 1;
  }
}
}`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Dropdown = ({isOpen, toggle}) => {
  return (
    <div>
      <DropdownContainer isOpen={isOpen} onClick={toggle}>
       <Icon onClick={toggle}>
         <CloseIcon />
       </Icon>
       <DropdownWrapper>
         <DropdownMenu>
           {menuData.map((item, index) => (
            <DropdownLink to={item.link} key={index}> 
              {item.title}
            </DropdownLink>
           ))}
         </DropdownMenu>
         <BtnWrap>
         <Button primary="true" round="true" big="true" to="/contact">
           CONTACT ME
         </Button>
         </BtnWrap>
       </DropdownWrapper>
      </DropdownContainer>
    </div>
  )
}

export default Dropdown
