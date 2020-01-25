import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { toHttps } from '../utils/http.utils';

import Button from '../button/Button';

const Wrapper = styled('div')`
  background-color: #dddddd;
  background-image: url("${({ background }) => background}");
  background-size: cover;
  background-position: center;
  flex: 1 0 0;
  margin: 3px;
  padding: 1rem;
  padding-bottom: 3rem;
  height: 25rem;
  max-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: white;
  @media (max-width: 600px) {
    &:nth-of-type(3) {
      display: none;
    }
  }
  @media (max-width: 800px) {
    &:nth-of-type(4) {
      display: none;
    }
  }
`;

const Title = styled('h2')`
  font-weight: 400;
  font-size: 1.8rem;
  margin: 2rem 1rem;
  margin-top: 1rem;
  @media (max-width: 600px) {
    margin: 1rem;
    font-size: 1.5rem;
  }
  text-shadow: 2px 2px 4px black;
`;

const CategoryLabel = styled('h3')`
  margin: 0;
`;

const Poster = ({ title, _id, cover, category }) => {
  const { t } = useTranslation();
  const [image, setImage] = useState('');
  const fetchImage = async () => {
    const res = await axios.get('https://cockpit.cchampou.me/api/cockpit/assets?token=a6755efa6ea9316c6c0a94a9d97053');
    res.data.assets.map(asset => {
      console.log(cover._id, asset._id);
      if (cover._id === asset._id) {
        setImage(`https://cockpit.cchampou.me/storage/uploads${asset.path}`)
      }
    });

  };

  useEffect(() => {
    cover && fetchImage();
  }, [cover]);

  return (
    <Wrapper background={image}>
      <CategoryLabel>{`[ ${category && category.display || ''} ]`}</CategoryLabel>
      <Title>{title}</Title>
      <Link to={`/post/${_id}`}><Button>{t('common.readmore')}</Button></Link>
    </Wrapper>
  );
};

export default Poster;
