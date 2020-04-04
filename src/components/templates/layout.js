import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { GlobalStyle } from '../_global';
import { Footer, Header } from '../organisms';
import { Container, Note } from '../atoms';
import { Image, Video } from '../molecules';

const components = {
  Note,
  PostImage: Image, // Image appears to be a reserved word
  Video,
};

export const Layout = (props) => {
  const { children, backgroundColor } = props;

  return (
    <>
      <GlobalStyle backgroundColor={backgroundColor} />
      <Container>
        <Header {...props} />
        <MDXProvider components={components}>{children}</MDXProvider>
        <Footer />
      </Container>
    </>
  );
};
