import styled from 'styled-components';

import { breakpoint, font } from '../settings';

export const Headline = styled.div`
  align-self: flex-end;
  font-family: ${font.family.serif};
  font-size: 3rem;
  font-weight: 700;
  position: relative;
  text-shadow: none;

  @media (min-width: ${breakpoint.sm}) {
    font-size: 4.5rem;
    margin-left: -4rem;
  }
`;

export const H3 = styled.h3`
  font-size: 32px;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 1.25;
`;

export const H4 = styled.h4`
  color: hsl(0, 0%, 30%);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
