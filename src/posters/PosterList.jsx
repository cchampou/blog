import React from 'react';
import styled from '@emotion/styled';

import posters from '../../fixtures/articles';
import Poster from './Poster';

const Wrapper = styled('div')`
  display: flex;
  width: calc(100% + 10px);
  margin: -5px;
  overflow-x: auto;
`;

const PosterList = () => (
  <Wrapper>
    {posters.map(article => (<Poster {...article} />))}
  </Wrapper>
);

export default PosterList;
