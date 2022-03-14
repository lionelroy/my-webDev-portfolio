import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import Bars from '../assets/images/bars.svg';
import NavLogo from '../assets/images/SR.png';

const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: normal;
`;

const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    color: #fff;
    height: 52px;
    width: 52px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%)  
    }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
  font-size: large;

  &:hover { 
    color: lightSteelBlue;
    transition: opacity 140ms, transform 220ms;
    visibility: visible;
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-delay: 0s;
    animation-duration: 0.6s;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
    <Logo to='/'>
    <img src={NavLogo} to="/" alt={""} style={{height: '60px'}}/></Logo>
    <MenuBars onClick={toggle}/>
    <NavMenu>
      {menuData.map((item, index) => (
        <NavMenuLinks to={item.link} key={index}>
        {item.title}
        </NavMenuLinks>
      ))}
    </NavMenu>
    <NavBtn>
      <Button to="/contact" primary="true">CONTACT</Button>
    </NavBtn>
    </Nav>
  );
};

export default Navbar
