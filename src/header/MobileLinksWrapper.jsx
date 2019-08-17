import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import i18n from '../i18n';

import NavLink from './Link';

const Wrapper = styled('div')`
  @media (min-width: 800px) {
    display: none;
  }
  position: relative;
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  line-height: 2rem;
`;

const LinksWrapper = styled('div')`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: ${({ open }) => open ? '100vw': '0'};
  background-color: white;
  top: 0;
  right: -1rem;
  transition: width 0.15s ease-in-out;
  height: 100vh;
  text-align: center;
  overflow: hidden;
  z-index: -1;
`;

const LangButton = NavLink.withComponent('span');

const StyledIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  const switchLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <StyledIcon icon={faBars} onClick={toggle} />
      <LinksWrapper open={open} onClick={toggle}>
        <NavLink to="/">{t('header.home')}</NavLink>
        <NavLink to="/about">{t('header.about')}</NavLink>
        <LangButton onClick={() => switchLang(t('header.lang'))}>{t('header.lang')}</LangButton>
      </LinksWrapper>
    </Wrapper>
  );
};

export default Header;
