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
  flex-wrap: wrap;
`;

const Wrapper = styled('div')`
  display: flex;
  margin: auto;
  margin-top: 4rem;
  width: 80vw;
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
