import styled from 'styled-components';

export const StyledMarkdown = styled.div`
  h2 {
    font-family: Canela, serif;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 0.5rem;
    margin-top: 0;
    padding-top: 1rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -0.5px;
    margin-bottom: 0.5rem;
    margin-top: 0;
    padding-top: 1rem;
  }

  p {
    line-height: 1.5;
  }

  blockquote {
    display: block;
    margin-left: 0;
    padding-bottom: 0.75rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    position: relative;
    width: 80%;

    &::before {
      content: '“';
      font-family: 'Canela';
      font-size: 100px;
      left: -60px;
      position: absolute;
      top: -20px;
    }

    p {
      background-color: hsl(48, 64%, 94%);
      display: inline;
      font-size: 22px;
      font-style: italic;
    }
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  ol,
  ul {
    margin-left: 0;
    padding-left: 0;
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

  .footnotes {
    font-size: 0.9rem;
    margin-bottom: 10rem;
  }

  .footnotes hr {
    margin-bottom: 4rem;
    margin-top: 4rem;
  }

  .footnotes ol li {
    color: hsl(0, 0%, 40%);
    line-height: 1.5;
    margin-bottom: 1rem;
    position: relative;
  }

  .footnotes p {
    display: inline;
  }

  .footnote-backref {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-left: 4px;
    padding: 4px 3px 0px;
    text-decoration: none;
    vertical-align: -1px;

    &:hover {
      background-color: hsl(48, 64%, 94%);
      color: black;
    }
  }

  .footnote-ref {
    text-decoration: none;
  }
`;
