import React from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled('div')`
  width: calc(100% - 8rem);
  height: 3rem;
  padding: 0 4rem;
  background-color: #042f4b;
  color: white;
  bottom: 1.5rem;
  position: absolute;
  margin-bottom: -1.5rem;
  line-height: 3rem;
  text-align: center;
`;

const Footer = () => (
  <FooterWrapper>
    2019
  </FooterWrapper>
);

// export default Footer;
export default () => null;
