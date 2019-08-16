import React from 'react';
import styled from '@emotion/styled';

import Link from './links/Link';

const HeaderWrapper = styled('div')`
  width: calc(100% - 8rem);
  height: 3rem;
  padding: 1.5rem 4rem;
  display: flex;
  justify-content: space-between;
  
  h1 {
    line-height: 3rem;
  }
`;

const RightLinksWrapper = styled('div')`
  height: 3rem;
  diplay: flex;
`;

const Header = () => (
  <HeaderWrapper>
    <h1>the Layko project</h1>
    <RightLinksWrapper>
      <Link to="/">Home</Link>
      <Link to="/about">A propos</Link>
    </RightLinksWrapper>
  </HeaderWrapper>
);

export default Header;
