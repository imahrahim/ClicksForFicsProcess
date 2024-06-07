import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import StyledLink from "../components/styled-link";
import WormImage from '../../static/media/Worm11.png';


const HomePage = ({ data }) => {
  const tags = data.allMarkdownRemark.group;

  React.useEffect(() => {
    document.body.className = "index-page";
  }, []);

  return (
    <Layout title="Home">
      <IntroWrapper>
        <Intro>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          <WormOverlay src={WormImage} alt="Worm Overlay" />
          <div css={`
          margin: 2rem auto;
              background-color: #2d1c48ab;
              padding: 1rem;
              border-radius: 0.5rem;
              border: 0.1rem solid #000000ff;
              max-width: 45%;
          `}>
                   <h4>
          A Deep Dive into Analyzing and Visualizing Fan Fiction
          </h4>
          <p>
            This is the documentation of Clicks for Fics. Check out my Tags to
            search for something specific or explore my documentation.
            Blablablablaba
          </p>
          <ButtonContainer>
            <StyledButtonLink to="/blog">
              Documentation
            </StyledButtonLink>
            <StyledButtonLink to="/tags">
              Tags
            </StyledButtonLink>
          </ButtonContainer>
          </div>
        </Intro>
      </IntroWrapper>
    </Layout>
  );
};

export default HomePage;

const IntroWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WormOverlay = styled.img`
position:fixed;
  transform: translateY(1rem);
  width: 100%;
  height: calc(100vh - 5rem);
  pointer-events: none; 
  display: absolute;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem; /* Abstand zwischen den Buttons */
  margin-top: 3rem;
  // z-index: 1;
`;

const StyledButtonLink = styled(StyledLink)`
  display: block;
  width: fit-content;
  cursor: pointer;
  color: inherit;
  padding: 0.2rem 01rem;
  border-radius: 5rem;
  backdrop-filter: blur(10px);
  text-shadow: none;
  font-size: 1rem;
  font-weight: 900;
  background-color: #ffffff;
  color: #000000;
  border: 0.1rem solid #000000;

  &:hover {
    background-color: #000000ff;
    color: #ffffff;
    border: 0.1rem solid #ffffff;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 99%;
  color: #fff;
  text-shadow: 2px 2px 4px #2d1c48ff;
  z-index: 2; /* Legt den Titel über das Bild */

  h2 {
    font-size: 6rem;
    font-weight: 900;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 900;

  }

  p {
    font-size: 1rem;
    font-weight: 500;
    z-index: 1;
    text-shadow: none;
    padding-top: 2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 9
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
