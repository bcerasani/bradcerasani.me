import styled from 'styled-components';

import { breakpoint } from '../../theme';

export const StyledHeader = styled.div`
  margin-bottom: 3.5rem;
  padding-top: 4rem;

  @media (min-width: ${breakpoint.md}) {
    padding-top: 5rem;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  min-height: 9rem;
`;
