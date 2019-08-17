import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Img = styled('div')`
  background-image: url("${({ img }) => img}");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: calc(10rem + 0.15rem * ${({ multiplier }) => multiplier});
  margin-bottom: 20px;
`;

const Wrapper = styled('div')`
  flex: 0;
  margin: 20px;
  text-align: center;
  paddin-bottom: 2rem;
`;

const Title = styled('h2')`
  font-weight: normal;
  margin: 1rem;
`;

const Separator = styled('hr')`
  width: 40%;
  border: solid 1px #35b0ab;
  margin: 2rem auto;
`;

const GridElement = ({ title, img, link, category, description }) => {
  const multiplier = Math.floor(Math.random() * Math.floor(100)) + 1;

  return (
    <Wrapper>
      <Img img={img} multiplier={multiplier} />
      {`[ ${category} ]`}
      <Title>{title}</Title>
      <Separator />
      {description}<br /><br /><br />
      <Link to={link}>Read More</Link>
    </Wrapper>
  );
};

export default GridElement;
