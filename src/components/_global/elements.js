import { css } from 'styled-components';

import { breakpoint, color, font, transition } from '../theme';

const Elements = css`
  :root {
    --backgroundColor: ${color.linen.default};
  }

  html,
  body {
    font-family: ${font.family.sansSerif};
    font-size: ${font.size.body};
    min-height: 100%;

    @media (min-width: ${breakpoint.md}) {
      font-size: 20px;
    }
  }

  body {
    background-color: var(--backgroundColor);
    line-height: 1.5;
    text-rendering: optimizeLegibility;
    transition-duration: ${transition.slow};
    transition-property: background-color, color;
    transition-timing-function: ease-in-out;
  }

  section {
    color: ${color.grey.darker};
    margin-bottom: 1.5rem;

    @media (min-width: ${breakpoint.md}) {
      margin-bottom: 3rem;
    }
  }

  p {
    margin-bottom: 1.5rem;
    margin-top: 0;
  }

  ol,
  ul {
    list-style-position: inside;
    margin-left: 0;
    margin-top: 0;
    padding-left: 0;

    @media (min-width: ${breakpoint.md}) {
      list-style-position: outside;
    }
  }

  ul {
    list-style-type: none;
    margin-bottom: 1rem;
    margin-top: 0;
  }

  li {
    margin-bottom: 0;
  }

  a {
    color: inherit;
    text-decoration-color: ${color.grey.dark};

    &:hover {
      color: ${color.black};
      text-decoration-color: ${color.black};
    }
  }

  a[target='_blank'] {
    font-variant-numeric: tabular-nums;

    &::after {
      content: '↟';
      display: inline-block;
      padding-left: 0.25rem;
      position: relative;
      transform: rotate(45deg);
      transform-origin: 100%;
      z-index: -1;
    }
  }

  img,
  video {
    display: block;
    margin-bottom: 1rem;
    width: 100%;
  }

  hr {
    background-color: transparent;
    border-bottom: 2px solid currentColor;
    border-left: none;
    border-right: none;
    border-top: 2px solid currentColor;
    height: 6px;
    margin-bottom: 2.5rem;
    margin-top: 2.5rem;
  }

  blockquote {
    display: block;
    margin-left: 0;
    padding-bottom: 0.5rem;
    padding-left: 2.5rem;
    padding-top: 0.5rem;
    position: relative;
    width: 80%;

    &::before {
      content: '“';
      font-family: ${font.family.serif};
      font-size: 4rem;
      left: 0;
      position: absolute;
      top: -1rem;
    }

    p {
      display: inline;
      font-family: ${font.family.serif};
      font-size: 1.5rem;
      line-height: 1.25;
    }

    @media (min-width: ${breakpoint.md}) {
      padding-left: 0;

      &::before {
        left: -2.75rem;
      }
    }
  }
`;

export default Elements;
