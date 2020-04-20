import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { color } from '../theme';

const ButtonLinkIcon = styled.span`
  display: inline-block;
  height: 1.25rem;
  left: 0.5rem;
  position: relative;
  transition-duration: 200ms;
  transition-property: transform;
  transition-timing-function: ease-in;
  width: 1.25rem;
`;

const ButtonLink = styled(Link)`
  text-decoration: none;

  &:hover {
    ${ButtonLinkIcon} {
      transform: translateX(0.5rem);
    }
  }
`;

export const Button = ({ children, ...props }) => {
  return (
    <ButtonLink {...props}>
      {children}
      <ButtonLinkIcon>»</ButtonLinkIcon>
    </ButtonLink>
  );
};
