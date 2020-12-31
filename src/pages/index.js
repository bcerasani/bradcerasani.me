import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'styled-components';

import { Button } from '../components/atoms';
import { Head, Layout } from '../components/templates';
import { ProjectList } from '../components/organisms';

function Home(props) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const projects = data.allMdx.edges;

  return (
    <Layout location={props.location} title={siteTitle}>
      <Head title="Design & Engineering" />

      <section>
        <div
          dangerouslySetInnerHTML={{
            __html: data.mdx.frontmatter.excerpt,
          }}
          style={{ marginBottom: '1rem' }}
        />

        <style>{css`
          :root {
            --backgroundColor: HSLA(30, 32%, 40%, 0.5);
            --computedBackgroundColor: HSLA(32, 18%, 82%, 1);
          }
        `}</style>

        <Button to={'/about/'} type="link">
          More about me
        </Button>
      </section>

      <section>
        <h2 style={{ marginLeft: '-4rem' }}>Side Projects</h2>

        <ProjectList projects={projects} />
      </section>
    </Layout>
  );
}

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: "/about/" } }) {
      frontmatter {
        excerpt
      }
    }
    allMdx(
      filter: { fields: { slug: { glob: "/projects/*" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY")
            daterange
            description
            image
            tags
            title
          }
        }
      }
    }
  }
`;
