import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Bio from '../components/molecules/bio';
import Layout from '../components/layout';
import SEO from '../components/organisms/seo';

const MarkdownBody = styled.div``;

const BlogPost = styled.div`
  h1 {
    font-weight: 500;
    font-size: 52px;
    font-family: Canela;
  }

  p {
  }
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        backgroundColor="#fafafa"
      >
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <BlogPost>
            <header>
              <h1>{post.frontmatter.title}</h1>
              {/* <small>{post.frontmatter.date}</small> */}
            </header>
            <section>
              <MarkdownBody dangerouslySetInnerHTML={{ __html: post.html }} />
            </section>
          </BlogPost>

          {/* <Bio /> */}
        </article>

        {/* <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav> */}
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 240)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
