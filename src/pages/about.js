import React, { Fragment, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import Draggable from 'react-draggable';

import Layout from '../components/layout';
import Head from '../components/head';

const StyledBackground = styled.div`
  animation-delay: 400ms;
  animation-duration: 800ms;
  animation-fill-mode: both;
  animation-name: fadeIn;
  animation-timing-function: ease-in-out;
  background-image: url('/images/brad-cerasani-office-wide.jpg');
  background-position: center bottom;
  background-size: cover;
  display: block;
  height: 62.5vw;
  position: relative;
  width: 100vw;
  z-index: -1;

  &::after {
    background-image: linear-gradient(
      180deg,
      hsl(35, 30%, 86%, 1) 0%,
      hsl(35, 30%, 86%, 0.6) 50%,
      hsl(35, 30%, 86%, 0.2) 100%
    );
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

const AboutWrapper = styled.div`
  h6 {
    font-family: Karbon, sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.1em;
    margin-bottom: 0.75rem;
    text-transform: uppercase;
  }

  ul {
    display: flex;
    list-style-type: none;
    margin-bottom: 1rem;
    margin-left: 0;
    margin-top: 0;
    padding-left: 0;
  }

  li {
    margin-bottom: 0.5rem;
    margin-right: 2rem;

    a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    &::after {
      content: '↟';
      display: inline-block;
      padding-left: 0.5rem;
      transform: rotate(45deg);
      transform-origin: 100%;
    }
  }
`;

const ImageContainer = styled.div`
  /* background-color: rgb(255, 255, 255, 0.2); */
  /* height: 100%; */
  /* position: absolute; */
  /* left: 0; */
  /* top: 0; */
  /* width: 100%; */
`;

const StyledImage = styled.div`
  display: block;
  width: 512px;
  height: 512px;
  /* background-color: rgb(255, 0, 255, 0.2); */
  margin: 2px;
  position: absolute;
  opacity: 0;
  z-index: 5;
  visibility: hidden;

  &:nth-of-type(even) {
    width: 400px;
    height: 400px;
  }

  &::after {
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 6;
  }
  /* user-select: none; */

  img {
    opacity: 1;
    display: block;
    width: 100%;
    user-select: none;
    mix-blend-mode: overlay;
  }
`;

const Camera = styled.div`
  position: relative;

  &:active {
    &::after {
      content: '';
      position: absolute;
      width: 800px;
      height: 800px;
      top: -400px;
      right: -400px;
      margin-top: 20px;
      z-index: 100;
      background-image: radial-gradient(
        rgb(255, 255, 255, 0.8) 0%,
        rgb(255, 255, 255, 0.4) 20%,
        rgb(255, 255, 255, 0.2) 40%,
        transparent 60%
      );
      mix-blend-mode: screen;
    }
  }
`;

function AboutPage(props) {
  const post = props.data.mdx;
  const siteTitle = props.data.site.siteMetadata.title;
  const backgroundColor = props.data.mdx.frontmatter.backgroundColor;

  const [photoCount, setPhotoCount] = useState(0);

  const images = [
    'https://instagram.fyyc2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/81173329_144773236944355_4632845052990652893_n.jpg?_nc_ht=instagram.fyyc2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=QhiGg7j-RuIAX9ouIuW&oh=f410d795d73d85975aa56de258c7b3d5&oe=5E930D12',
    'https://instagram.fyyc2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/79374471_522712598332926_6145552460073360366_n.jpg?_nc_ht=instagram.fyyc2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=zXIQA_nXSWkAX-GiiiY&oh=56b2e83aea97a1f726e49d6e2794ddfc&oe=5E93A67D',
    'https://instagram.fyyc2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/74470230_487796415153634_9123291961872763958_n.jpg?_nc_ht=instagram.fyyc2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=y2bb17DCi-kAX-O_3FE&oh=c034bdce12405b7c3815551acef68c89&oe=5E9324F4',
    'https://instagram.fyyc2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/67512366_1631677530300704_6449361018100219800_n.jpg?_nc_ht=instagram.fyyc2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=mSxiti-_kfkAX_-BeLh&oh=33ef64b818d75c9be5e44892ab347e5d&oe=5E958480',
    'https://instagram.fyyc2-1.fna.fbcdn.net/v/t51.2885-15/e35/54511528_321581818545592_9081712202466674686_n.jpg?_nc_ht=instagram.fyyc2-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=eUAth9avnXYAX8awPGd&oh=85b55a27fbb8272dca156e8ac5cddfea&oe=5E946B24',
    'https://instagram.fyyc2-1.fna.fbcdn.net/v/t51.2885-15/e35/43550097_1894016204015791_7648907012167715885_n.jpg?_nc_ht=instagram.fyyc2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=1wCyguQkyZMAX8PmYXw&oh=fba3ac30cb172d88b44d6cfc0c2cfd20&oe=5E96BD04',
  ];

  function handleClick() {
    setPhotoCount(photoCount + 1);

    if (photoCount >= images.length) {
      return;
    }

    const element = document.querySelector(`[data-image='${photoCount}']`);

    element.style.opacity = '1';
    element.style.visibility = 'visible';

    console.log(element);
    // .style.opacity =
    //   '1';

    console.log('photoCount', photoCount);
  }

  useEffect(() => {
    images.forEach((image, index) => {
      const element = document.querySelector(`[data-image='${index}']`);

      const y = Math.floor(Math.random() * 1000);
      const x = Math.floor(Math.random() * 2000);

      element.style.top = `${y}px`;
      element.style.left = `${x}px`;
    });

    console.log('whatup, I am an effect');
  }, []);

  return (
    <Fragment>
      <Layout
        location={props.location}
        title={siteTitle}
        backgroundColor={backgroundColor}
      >
        <Head
          title="About"
          description="About Brad Cerasani; Design & Engineering."
        />

        <ImageContainer>
          {images.map((image, index) => (
            <Draggable>
              <StyledImage data-image={index}>
                <img src={image} />
              </StyledImage>
            </Draggable>
          ))}
        </ImageContainer>

        <section>
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>

        <section>
          <button
            style={{
              appearance: 'none',
              fontSize: '52px',
              backgroundColor: 'transparent',
              outline: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => handleClick()}
          >
            <Camera>📷 ?</Camera>
          </button>
        </section>

        <AboutWrapper>
          <h6>Older versions of this site</h6>
          <ul>
            <li>
              <a
                href="https://2010.bradcerasani.me"
                rel="noopener noreferrer"
                target="blank"
              >
                2010
              </a>
            </li>
            <li>
              <a
                href="https://2011.bradcerasani.me"
                rel="noopener noreferrer"
                target="blank"
              >
                2011
              </a>
            </li>
            <li>
              <a
                href="https://2012.bradcerasani.me"
                rel="noopener noreferrer"
                target="blank"
              >
                2012
              </a>
            </li>
            <li>
              <a
                href="https://2013.bradcerasani.me"
                rel="noopener noreferrer"
                target="blank"
              >
                2013
              </a>
            </li>
            <li>
              <a
                href="https://2014.bradcerasani.me"
                rel="noopener noreferrer"
                target="blank"
              >
                2014
              </a>
            </li>
          </ul>

          <h6>Elsewhere</h6>
          <ul>
            <li>
              <a
                href="https://instagram.com/bradcerasani"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/bradcerasani"
                rel="noopener noreferrer"
                target="_blank"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/bradcerasani"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:bradcerasani@gmail.com" target="_blank">
                Email
              </a>
            </li>
          </ul>
        </AboutWrapper>
      </Layout>
      <StyledBackground />
    </Fragment>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query ContentBySlug {
    site {
      siteMetadata {
        title
      }
    }
    # TODO: add dynamic filename-based(?) content lookup
    mdx(fields: { slug: { eq: "/about/" } }) {
      id
      body
      frontmatter {
        backgroundColor
        excerpt
      }
    }
  }
`;
