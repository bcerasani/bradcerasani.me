import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  ${modernNormalize}

  body {
    background-color: ${(props) =>
      props.backgroundColor || 'hsl(35, 10%, 86%)'};
    font-family: 'Untitled Sans', 'Scto Grotesk A', sans-serif;
    font-size: 20px;
    text-rendering: optimizeLegibility;
    transition-duration: 400ms;
    transition-property: background-color;
    transition-timing-function: ease-in-out;
  }

  section {
    color: hsl(0, 0%, 20%);
    font-size: 20px;
    line-height: 1.4;
    margin-bottom: 64px;
  }

  p {
    margin-bottom: 1.5rem;
    margin-top: 0;
  }

  a {
    color: inherit;
    text-decoration-color: hsl(0, 0%, 36%);

    &:hover {
      color: black;
      text-decoration-color: black;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
