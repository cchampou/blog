import styled from '@emotion/styled';

const StyledButton = styled('button')`
  border: solid 1px white;
  color: white;
  background: none;
  border-radius: 0;
  padding: 10px 15px;
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    background-color: white;
    color: black;
  }
`;

export default StyledButton;
