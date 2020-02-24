import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function Head({ title, description, image, url, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            social {
              twitter
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image || site.Metadata.image;
  const metaAuthor = site.siteMetadata.author;
  const metaUrl = url || site.siteMetadata.siteUrl;
  const metaTwitter = site.siteMetadata.social.twitter;

  return (
    <Helmet title={title} titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <link rel="canonical" href="https://bradcerasani.me" />

      <meta property="og:title" content={metaAuthor} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={metaTwitter} />
      <meta name="twitter:title" content={metaAuthor} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:url" content={metaUrl} />
      <meta name="twitter:image" content={metaImage} />
      {children}
    </Helmet>
  );
}

export default Head;
