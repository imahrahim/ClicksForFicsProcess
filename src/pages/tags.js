import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import allTags from '../data/tags';

const toKebabCase = (str) => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");
};

const Tags = ({ data }) => {
  const tags = data.allMarkdownRemark.group;

  // Map fieldValue to full tag objects
  const fullTags = tags.map(tag => {
    const fullTag = allTags.find(t => t.id === toKebabCase(tag.fieldValue));
    return {
      ...fullTag,
      totalCount: tag.totalCount,
    };
  }).filter(Boolean);

  return (
    <Layout title="All Tags">
      <h1>Tags</h1>

      <TagList>
        {fullTags.map((tag) => (
          <TagItem key={tag.id} color={tag.color}>
            <Link to={`/tags/${tag.id}/`}>
              {tag.name} ({tag.totalCount})
            </Link>
          </TagItem>
        ))}
      </TagList>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

const TagList = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  padding: 0;
  max-width: 60rem;
`;

const TagItem = styled.li`
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
  font-size: var(--size-600);
  font-family: 'Whyte Inktrap';
  font-weight: 600;

  & a {
    text-decoration: none;
    padding: 0.2rem 0.6rem;
    background-color: rgba(255, 255, 255, 1);
    border: 0.1rem solid ${({ color }) => color};
    color: ${({ color }) => color};
    border-radius: 5rem;
  
  }
  & a:hover {
    background-color: ${({ color }) => color};
    color: rgba(255, 255, 255, 1);
    border: 0.1rem solid rgba(255, 255, 255, 1);
  }

`;
