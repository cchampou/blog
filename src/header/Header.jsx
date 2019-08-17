import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import NavLink from './Link';

const Padder = styled('div')`
  transition: all ease-in-out 0.25s;
  ${({scrolled}) => scrolled ? `
    height: 5rem;
  `:`
    height: 6rem;
  `}
`;

const HeaderWrapper = styled('div')`
  position: fixed;
  background-color: white;
  width: calc(100% - 8rem);
  height: 3rem;
  display: flex;
  justify-content: space-between;
  
  h1 {
    line-height: 3rem;
  }
  transition: all ease-in-out 0.25s;
  
  ${({ scrolled }) => scrolled ? `
    padding: 1rem 4rem;
    box-shadow: 0 0 10px gray;
  `:`
    padding: 1.5rem 4rem;
  `}
`;

const RightLinksWrapper = styled('div')`
  height: 3rem;
  display: flex;
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 0);
    });
  }
  return (
    <Padder scrolled={scrolled}>
      <HeaderWrapper scrolled={scrolled}>
        <Link to="/">
          <h1>the Layko project</h1>
        </Link>
        <RightLinksWrapper>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">A propos</NavLink>
        </RightLinksWrapper>
      </HeaderWrapper>
    </Padder>
  );
};

export default Header;
