import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  white-space: nowrap;
  outline: none;
  border-radius: 16px;  
  min-width: 100px;
  max-width: 180px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: moccasin;
  padding: ${({ big }) => (big ? '16px 48px' : '10px 14px')};
  color: ${({ primary }) => (primary ? '#2a2a2a' : '#000d1a')};
  font-size: ${({ big }) => (big ? '16px' : '12px')};

  &:hover {
    background-color: lightSteelBlue;
    color: #2a2a2a;   
    border-radius: 0px;
  }
`;;