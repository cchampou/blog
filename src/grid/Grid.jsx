import React from 'react';
import styled from '@emotion/styled';

import GridElement from './GridElement';
import articles from '../../fixtures/articles';

const GridWrapper = styled('div')`
  width: 80vw;
  height: 200vh;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 4rem;
`;

const Grid = () => (
  <GridWrapper>
    {articles.map(article => <GridElement {...article}/>)}
    {articles.map(article => <GridElement {...article}/>)}
    {articles.map(article => <GridElement {...article}/>)}
  </GridWrapper>
);

export default Grid;
