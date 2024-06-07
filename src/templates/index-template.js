import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import HomeTags from '../components/HomeTags';
import styled from 'styled-components';

const HomePage = ({ data }) => {
  const tags = data.allMarkdownRemark.group;

  React.useEffect(() => {
    document.body.className = 'index-page';
  }, []);

  return (
    <Layout title="Home">
 <Intro>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
</Intro>
      <ContentWrapper>
        <TagsContainer>
          <HomeTags tags={tags} showDocumentationLink={true} />
        </TagsContainer>
      </ContentWrapper>
    </Layout>
  );
};

export default HomePage;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  padding: 2rem;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centers the items horizontally */
  align-items: center; /* Centers the items vertically */
  gap: 1rem; /* Space between items */
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;

  & > * {
    pointer-events: all;
  }
`;

const Intro = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin-top:-15rem;
  max-width: 80%;
  font-size: 2rem; 
  font-weight: 900; 
  color: #000; 
  z-index: 1;

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
