import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import i18n from '../i18n';

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

const LangButton = NavLink.withComponent('span');

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

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
      </HeaderWrapper>
    </Padder>
  );
};

export default Header;
