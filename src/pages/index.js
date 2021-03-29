import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'styled-components';

import Layout from 'src/templates/layout';
import { Button, Head, Timeline, TimelineItem } from 'src/components';

function Home(props) {
  const contents = props.data.allMdx.edges;
  const description = props.data.mdx.frontmatter.description;

  return (
    <Layout>
      <Head
        title="Brad Cerasani"
        description={`Hi, I'm Brad. ${description}`}
      />

      <style>
        {css`
          @media (prefers-color-scheme: light) {
            :root {
              --backgroundColor: hsl(30, 32%, 40%, 0.5);
              --computedBackgroundColor: hsl(32, 18%, 82%, 1);
            }
          }
        `}
      </style>

      <main>
        <section style={{ marginBottom: 'calc(var(--spaceMedium) / 2)' }}>
          <p
            dangerouslySetInnerHTML={{
              __html: description,
            }}
            style={{ marginBottom: 'calc(var(--spaceDefault) / 2)' }}
          />

          <Button
            to={'/about/'}
            $variant="link"
            style={{ textUnderlinePosition: 'under' }}
          >
            More about me
          </Button>
        </section>

        <section>
          <h2
            style={{ paddingTop: 'calc(var(--spaceMedium) / 2)' }}
            id="side-projects"
          >
            Side projects &amp; writing
          </h2>
          <Timeline>
            {contents.map(({ node }) => (
              <TimelineItem
                fields={node.fields}
                frontmatter={node.frontmatter}
                key={node.fields.slug}
              />
            ))}
          </Timeline>
        </section>
      </main>
    </Layout>
  );
}

export default Home;

export const pageQuery = graphql`
  query {
    mdx(fields: { slug: { eq: "/about/" } }) {
      frontmatter {
        description
      }
    }
    allMdx(
      filter: { fields: { slug: { ne: "/about/" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            type
          }
          frontmatter {
            cta
            date(formatString: "YYYY")
            daterange
            description
            image
            skipPage
            status
            title
            video
          }
        }
      }
    }
  }
`;
