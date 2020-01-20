import styled, { css } from 'styled-components';

const verticalOrientation = css`
  margin-left: -2rem;
  position: absolute;
  transform-origin: 100%;
  transform: rotate(-90deg) translateY(-8ch);
`;

export const Date = styled.div`
  color: inherit;
  font-family: Karbon;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-transform: uppercase;

  ${(props) => props.orientation === 'vertical' && verticalOrientation}
`;
