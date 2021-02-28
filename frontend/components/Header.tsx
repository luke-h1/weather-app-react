import React from 'react';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
  padding: 1rem;
  color: #fff;
  background: #000;
  text-align: center;
  margin: 0 auto;
  font-size: 1.2rem;
`;

const Header: React.FC = () => {
  return (
    <>
      <StyledHeader>Weather App Next</StyledHeader>
    </>
  );
};
export default Header;
