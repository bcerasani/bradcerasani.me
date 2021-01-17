import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

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

const StyledButton = styled(Link)`
  background-color: var(--colorGreyDarker);
  border-radius: 1rem;
  color: var(--colorLinenDefault);
  font-size: 0.7rem;
  line-height: 1.5;
  padding: 0.5rem 1.25rem;
  text-decoration: none;
  text-transform: capitalize;

  &:hover {
    ${ButtonLinkIcon} {
      transform: translateX(0.5rem);
    }

    color: var(--colorLinenDefault);
  }

  /* TODO: Create proper variant lookup */
  ${({ variant }) =>
    variant === 'link' &&
    css`
      background-color: transparent;
      color: inherit;
      font-size: 1rem;
      text-decoration: underline;
      text-transform: none;
      padding: 0;
      line-height: inherit;

      &:hover {
        color: currentColor;
      }
    `}
`;

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      {children}
      {props.variant === 'link' && <ButtonLinkIcon>»</ButtonLinkIcon>}
    </StyledButton>
  );
};