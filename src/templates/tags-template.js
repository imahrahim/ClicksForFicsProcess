import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/post-list';
import styled from 'styled-components';
import allTags from '../data/tags';

const toKebabCase = (str) => {
  if (!str) {
    return '';
  }
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");
};

const TagsTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const posts = data.allMarkdownRemark.nodes;
  const title = `Posts tagged ${tag}`;

  React.useEffect(() => {
    document.body.className = "index-page";
  }, []);
  let tagColor = '#000'; // Default color

  if (tag === 'P5.js') {
    tagColor = '#589BCF';
  } else if (tag === 'D3.js') {
    tagColor = '#589BCF';
  } else {
    const tagObject = allTags.find(t => t.id === toKebabCase(tag));
    tagColor = tagObject ? tagObject.color : '#000';
  }
  return (
    <Layout title={title}>
      <TagsTemplateWrapper>
        <Title>
          {totalCount} posts tagged <TagSpan color={tagColor}>"{tag}"</TagSpan>
        </Title>
        <PostList posts={posts} />
      </TagsTemplateWrapper>
    </Layout>
  );
};

export default TagsTemplate;

const TagsTemplateWrapper = styled.div`
  padding-top: var(--size-900);
`;

const Title = styled.h1`
  font-size: var(--size-800);
`;

const TagSpan = styled.span`
  color: ${({ color }) => color};
text-shadow: 2px 2px 4px#fff;
  font-family: 'Whyte Inktrap';
  text-transform: uppercase;
`;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fields: { contentType: { eq: "posts" } }
      }
    ) {
      totalCount
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          tags
          title
        }
        timeToRead
        excerpt
      }
    }
  }
`;
