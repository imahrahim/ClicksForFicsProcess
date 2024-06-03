import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/post-list';
import StyledLink from '../components/styled-link';
import HomeTags from '../components/HomeTags';
import styled from 'styled-components';
import allTags from '../data/tags'; // Importing the central tags

const toKebabCase = (str) => {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");
};

const HomePage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];
  const intro = data?.markdownRemark?.html || '';
  const title = data?.markdownRemark?.frontmatter?.title || 'Title';

  const tags = useMemo(() => {
    return posts.flatMap(node => node.frontmatter.tags || []);
  }, [posts]);

  return (
    <Layout title={title}>
      <div css={`
      display: flex;
      flex-direction: row;
      justify-content: center;
      `}>
        <Intro>
          <div dangerouslySetInnerHTML={{ __html: intro }} />
          <StyledLink
            css={`
              display: block;
              margin-top: var(--size-800);
              margin-bottom: var(--size-800);
              margin-left: auto;
              margin-right: auto;
              width: fit-content;
              cursor: pointer;
              color: inherit;
              font-family: 'Brr';
              padding: 0.5rem 1rem;
              border-radius: 5rem;
              backdrop-filter: blur(10px);
              background-color: #ffffff;
              color: #8056C4;
              border: 0.1rem solid #8056C4;
            
              &:hover {
                background-color: #8056c4ff;
                color: #ffffffff;
                border: 0.1rem solid #ffffffff;
              }
            `}
            to="/documentation"
          >
            Documentation
          </StyledLink>
        </Intro>
        <TagsContainer>
          <HomeTags tags={tags} />
        </TagsContainer>
      </div>
    </Layout>
  );
};

export default HomePage;

const TagsContainer = styled.div`
  margin: var(--size-800);
`;

const Intro = styled.div`
  display: flex;
  padding: 2rem;
  margin-top: 2rem;
  border-radius: 8px;
  position: relative;
  flex-direction: column;
  transition: all 0.3s ease-out;
  text-align: center;
  max-width: 40%;
  height: 40%;

  body.light-mode & {
    backdrop-filter: blur(10px);
    border: 0.1rem solid #000000;
    background-color: #ffffff5f;
  }

  body.dark-mode & {
    background-color: rgba(255, 255, 255, 0.232);
    backdrop-filter: blur(10px);
    border: 0.1rem solid #000000;
  }

  @media screen and (max-width: 500px) {
    & {
      margin-top: var(--size-600);
    }
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
      nodes {
        fields {
          slug
        }
        excerpt
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          title
          tags
        }
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
