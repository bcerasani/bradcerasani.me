import React, { useState } from 'react';
import styled from 'styled-components';

import { font, color } from '../../theme';
import { ChatBubble } from '../../atoms';

const StyledFooter = styled.footer`
  align-items: center;
  border-top: 4px solid black;
  color: ${color.grey.dark};
  display: flex;
  font-family: ${font.family.serif};
  font-size: 1.125rem;
  margin-top: 1.5rem;
  padding-bottom: 6rem;
  padding-top: 3rem;
  transition: color 400ms ease-in-out;

  /* TODO: Convert to text link variant */
  span {
    cursor: pointer;
    display: inline-block;
    user-select: none;

    &:hover {
      color: ${color.grey.darker};
    }
  }
`;

export const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <StyledFooter>
      <div>
        <span>RSS</span> •{' '}
        <span onClick={() => setShowContact(!showContact)}>Say hey</span>
        {showContact && <ChatBubble>brad cerasani at gmail dot com</ChatBubble>}
      </div>
    </StyledFooter>
  );
};
