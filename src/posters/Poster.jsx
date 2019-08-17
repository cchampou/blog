import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from '../button/Button';

const Wrapper = styled('div')`
  background-color: #dddddd;
  background-image: url("${({ background }) => background}");
  background-size: cover;
  background-position: center;
  flex: 1;
  margin: 3px;
  padding: 1rem;
  padding-bottom: 3rem;
  height: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: white;
`;

const Title = styled('h2')`
  font-weight: 400;
  font-size: 1.8rem;
  margin: 2rem 1rem;
  margin-top: 1rem;
  text-shadow: 2px 2px 4px black;
`;

const CategoryLabel = styled('h3')`
  margin: 0;
`;

const Poster = ({ title, link, img, category }) => {
  const { t } = useTranslation();
  return (
    <Wrapper background={img}>
      <CategoryLabel>{`[ ${category} ]`}</CategoryLabel>
      <Title>{title}</Title>
      <Link to={link}><Button>{t('common.readmore')}</Button></Link>
    </Wrapper>
  );
};

export default Poster;
