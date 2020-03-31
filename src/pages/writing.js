import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import { Date } from '../components/atoms';
import { PostList, PostItem, PostItemImage } from '../components/post-list';

function WritingPage(props) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMdx.edges;

  return (
    <Fragment>
      <Layout location={props.location} title={siteTitle}>
        <Head title="Writing" />
        <PostList>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            const slug = node.fields.slug;
            const date = node.frontmatter.date;
            const image = node.frontmatter.image;

            return (
              <article key={node.fields.slug}>
                <PostItem to={slug}>
                  <Date>{date}</Date>
                  <h3>{title}</h3>
                  {image && <PostItemImage src={image} />}
                </PostItem>
              </article>
            );
          })}
        </PostList>
      </Layout>
    </Fragment>
  );
}

export default WritingPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { fields: { slug: { glob: "/writing/*" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM YYYY")
            title
            description
            image
          }
        }
      }
    }
  }
`;
