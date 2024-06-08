import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const toKebabCase = (str) => {
  if (!str) {
    return '';
  }
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");
};


const Tags = ({ tags }) => {
  
  return (
    <TagList>
      {tags.map(tag => (
        <Tag key={tag.id} color={tag.color}>
          <Link to={`/tags/${tag.id}`}>{tag.name}</Link>
        </Tag>
      ))}
    </TagList>
  );
};

export default Tags;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 2rem 0;
`;

const Tag = styled.span`
  display: inline-block;
  font-family: 'Whyte Inktrap';
  text-transform: uppercase;
  font-size: var(--size-400);
  font-weight: 600;
  margin-bottom: 0.5rem;

  & a {
    position: relative;
    z-index: 2;
    text-decoration: none;
    border-radius: 5rem;
    padding: 0.2rem 0.6rem;
    background-color: rgba(255, 255, 255, 1);
    border: 0.1rem solid ${({ color }) => color};
    color: ${({ color }) => color};
  }

  & a:hover {
    border: 0.1rem solid rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, 1);
    background-color: ${({ color }) => color};
  }

  @media screen and (max-width: 500px) {
    & {
      font-size: 0.8rem;
    }
  }
`;
