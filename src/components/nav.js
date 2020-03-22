import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { breakpoint, color, font, transition } from './settings';
import { Noise, CAText, CAFilter } from './atoms';

import MenuIconSVG from './atoms/icons/menu.inline.svg';

export const NavInvertWrapper = styled.div`
  display: contents;
  transition-duration: ${transition.default};
  transition-property: color, text-shadow, filter;
  transition-timing-function: ease-in-out;

  @media (max-width: calc(${breakpoint.sm} - 1px)) {
    ${({ invert }) =>
      invert &&
      css`
        color: ${color.white};
        ${CAText}

        svg {
          ${CAFilter}
        }
      `}
  }
`;

export const NavMenuIcon = styled(MenuIconSVG)`
  fill: currentColor;
  height: 10px;
  margin-top: 4px; /* TODO: Remove once logo is SVG */
  position: absolute;
  right: 2rem;
  top: 4rem;
  z-index: 10;

  /* Nav is always visible at larger viewports, so we can hide the icon */
  @media (min-width: ${breakpoint.sm}) {
    display: none;
  }
`;

// Nav is an overlay on small viewports, and a right-aligned stacked list on all others
export const Nav = styled.div`
  --initialInset: 1rem;

  /* Nav styles between viewports differ enough to warrant a max-width media query over overrides */
  @media (max-width: calc(${breakpoint.sm} - 1px)) {
    background-color: ${color.black};
    display: flex;
    flex-direction: column;
    height: calc(100vh - var(--initialInset));
    justify-content: center;
    left: 0;
    opacity: 0;
    padding-left: 2rem;
    padding-right: 2rem;
    pointer-events: none;
    position: fixed;
    top: 0;
    transform: translate(calc(var(--initialInset) / 2), calc(var(--initialInset) / 2));
    transition-duration: ${transition.default};
    transition-property: background-color, color, transform, width, height, opacity;
    transition-timing-function: ease-in-out;
    width: calc(100vw - var(--initialInset));
    will-change: background-color, color, transform, width, height, opacity;
    z-index: 5;

    &::after {
      ${Noise}
    }

    /* stylelint-disable-next-line */
    ${({ isVisible }) =>
      isVisible &&
      css`
        color: ${color.white};
        opacity: 1;
        width: 100%;
        height: 100%;
        transform: translate(0, 0);
        pointer-events: auto;
      `}
  }

  @media (min-width: ${breakpoint.sm}) {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: flex-end;
    margin-bottom: 1rem; /* optically align to baseline of byline */
    position: relative;
  }
`;

export const NavImage = styled.img`
  display: none;

  @media (min-width: ${breakpoint.sm}) {
    bottom: 0;
    display: block;
    margin-right: -1rem;
    opacity: 0;
    position: absolute;
    right: -10rem;
    width: 10rem;
    z-index: -2;
  }
`;

export const NavItem = styled(Link)`
  display: block;
  margin-bottom: 0.5rem;

  &[aria-current] {
    &::after {
      content: '~';
      margin-left: 1rem;
      position: absolute;
      z-index: 5;
    }
  }

  /* Similar to Nav, < sm styles differ enough to warrant max-width media query */
  @media (max-width: calc(${breakpoint.sm} - 1px)) {
    font-family: ${font.family.serif};
    font-size: 2.625rem;
    font-weight: 600;
    letter-spacing: 0.025em;
    visibility: hidden;

    ${CAText} /* stylelint-disable-line */

    /* isVisible on NavItem is true when Nav has finished transitioning */
    ${({ isVisible }) =>
      isVisible &&
      css`
        visibility: visible;
        animation-duration: 800ms;
        animation-fill-mode: both;
        animation-name: fadeInUp;
        animation-timing-function: ease-in-out;
      `}
  }

  @media (min-width: ${breakpoint.sm}) {
    font-size: 1.25rem;
    padding-right: 0.5rem;
    text-decoration: none;

    &[aria-current] {
      color: ${color.black};
      text-decoration: underline;
    }

    &:hover {
      ${NavImage} {
        opacity: 1;
        z-index: 0;
      }
    }
  }
`;
