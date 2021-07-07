import React from 'react';

import styled, { keyframes } from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';
import { FiMenu } from 'react-icons/fi';

const SlideDown = keyframes`
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  padding: 0 5rem;
  animation: 1s ease-out forwards ${SlideDown};
`;

const Logo = styled.span`
  color: white;
  text-transform: uppercase;
  font-weight: bold;
`;

const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  height: 2rem;
`;

const MenuItem = styled.span`
  margin: 0 1rem;
  color: white;
  cursor: pointer;
  position: relative;
  &::after {
    display: block;
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 0;
    height: 1.5px;
    background-color: white;
    transition: 0.2s ease-in-out;
  }
  &:hover::after {
    width: 100%;
    margin-left: -50%;
  }
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  margin-left: 5rem;
`;

const SearchIcon = styled(IoSearchOutline)`
  color: white;
  margin: 0 10px;
  cursor: pointer;
`;
const HamburgerIcon = styled(FiMenu)`
  color: white;
  margin: 0 10px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <Logo>link music</Logo>
      <MenuWrap>
        <MenuItem>Top 100</MenuItem>
        <MenuItem>Music</MenuItem>
        <MenuItem>Contact</MenuItem>
        <IconWrap>
          <SearchIcon />
          {/* <HamburgerIcon /> */}
        </IconWrap>
      </MenuWrap>
    </HeaderWrap>
  );
};

export default Header;
