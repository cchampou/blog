import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import i18n from '../i18n';

import NavLink from './Link';
import MobileLinksWrapper from './MobileLinksWrapper';

const Padder = styled('div')`
  transition: all ease-in-out 0.25s;
  ${({scrolled}) => scrolled ? `
    height: 5rem;
  `:`
    height: 6rem;
  `}
  @media (max-width: 800px) {
    box-shadow: none;
    height: 4rem;
  }
`;

const HeaderWrapper = styled('div')`
  position: fixed;
  z-index: 1000;
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

  @media (max-width: 800px) {
    width: calc(100% - 2rem);
    padding: 1rem 1rem;
    height: 2rem;
    h1 {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
`;

const RightLinksWrapper = styled('div')`
  height: 3rem;
  display: flex;
  @media (max-width: 800px) {
    display: none;
  }
`;

const LangButton = NavLink.withComponent('span');

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setScrolled(window.scrollY > 0);
  }, []);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 0);
    });
  }

  const switchLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Padder scrolled={scrolled}>
      <HeaderWrapper scrolled={scrolled}>
        <Link to="/">
          <h1>the Layko project</h1>
        </Link>
        <RightLinksWrapper>
          <NavLink to="/">{t('header.home')}</NavLink>
          <NavLink to="/about">{t('header.about')}</NavLink>
          <LangButton onClick={() => switchLang(t('header.lang'))}>{t('header.lang')}</LangButton>
        </RightLinksWrapper>
        <MobileLinksWrapper />
      </HeaderWrapper>
    </Padder>
  );
};

export default Header;
