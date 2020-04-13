import React, { useState } from 'react';
import styled from 'styled-components';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import { font } from '../../theme';
import { ChatBubble } from '../../atoms';

const StyledFooter = styled.footer`
  align-items: center;
  border-top: 4px solid currentColor;
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
    -webkit-tap-highlight-color: transparent;
    user-select: none;
  }
`;

export const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <StyledFooter>
      <div>
        <span>RSS</span> •{' '}
        <span
          onClick={(e) => {
            e.preventDefault();
            if (showContact) {
              return false;
            }
            setShowContact(true);
            trackCustomEvent({
              category: 'Interactive Elements',
              label: 'Footer Contact - Say Hey',
              action: 'Click',
            });
          }}
          style={{ cursor: showContact ? 'auto' : 'pointer' }}
        >
          Say hey
        </span>
        {showContact && <ChatBubble>brad cerasani at gmail dot com</ChatBubble>}
      </div>
    </StyledFooter>
  );
};
