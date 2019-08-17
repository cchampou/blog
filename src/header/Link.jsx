import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledLink = styled(Link)`
  line-height: 3rem;
  text-transform: uppercase;
  margin: 0 1rem;
  transition: color 0.25s ease-in-out;
  white-space: nowrap;
  cursor: pointer;
  
  &:hover {
    color: #35b0ab;
  }
`;

export default StyledLink;
