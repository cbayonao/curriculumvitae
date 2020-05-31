import React from 'react';
import styled from 'styled-components';

const Styledh3 = styled.h3`
  color: #303030;
  font-weight: 400;
  margin: .5em 0;
`;

const H3Element = ({ children }) => <Styledh3>{children}</Styledh3>;

export default H3Element;