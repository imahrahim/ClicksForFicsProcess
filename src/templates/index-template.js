import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import StyledLink from "../components/styled-link";
import WormImage from '../../static/media/Worm1.png';


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
  position: absolute;
  top: -2rem;
  left: 5rem;
  width: 100vh;
  height: auto;
  pointer-events: none; /* Ermöglicht Klicks durch das Bild hindurch */
  z-index: 1; /* Legt das Bild über den Titel */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem; /* Abstand zwischen den Buttons */
  margin-top: 4.5rem;
  // z-index: 1;
`;

const StyledButtonLink = styled(StyledLink)`
  display: block;
  width: fit-content;
  cursor: pointer;
  color: inherit;
  padding: 0.5rem 1.5rem;
  border-radius: 5rem;
  backdrop-filter: blur(10px);
  text-shadow: none;
  font-size: 1.5rem;
  font-weight: 900;
  background-color: #ffffff;
  color: #8056c4;
  border: 0.1rem solid #8056c4;

  &:hover {
    background-color: #8056c4ff;
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
    font-size: 3rem;
    font-weight: 900;
    z-index: 1;
  }

  p {
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 5rem;
    max-width: 50%;
    z-index: 1;
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
