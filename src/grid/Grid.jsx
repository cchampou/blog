import React from 'react';
import styled from '@emotion/styled';

import GridElement from './GridElement';
import articles from '../../fixtures/articles';

const GridColumn = styled('div')`
  height: auto;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    &:nth-of-type(2) {
      display: none;
    }
  }
  @media (max-width: 800px) {
    &:nth-of-type(3) {
      display: none;
    }
  }
`;

const Wrapper = styled('div')`
  display: flex;
  margin: auto;
  margin-top: 4rem;
  max-width: 60rem;
`;

const Grid = () => (
  <Wrapper>
    <GridColumn>
      {articles.map(article => <GridElement {...article}/>)}
    </GridColumn>
    <GridColumn>
      {articles.map(article => <GridElement {...article}/>)}
    </GridColumn>
    <GridColumn>
      {articles.map(article => <GridElement {...article}/>)}
    </GridColumn>
  </Wrapper>
);

export default Grid;
