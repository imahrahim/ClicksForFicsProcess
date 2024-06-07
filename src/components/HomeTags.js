import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import allTags from '../data/tags'; // Importieren der zentralen Tags

const toKebabCase = (str) => {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");
};

const HomeTags = ({ tags, showDocumentationLink }) => {
  // Erstellen eines Mapping-Objekts für die Tag-Anzahl
  const tagCounts = tags.reduce((acc, tag) => {
    acc[tag.fieldValue] = tag.totalCount;
    return acc;
  }, {});

  // Map tags to their full objects from allTags
  const fullTags = Object.keys(tagCounts).map(tagId => {
    const tag = allTags.find(tag => tag.id === toKebabCase(tagId));
    if (tag) {
      return { ...tag, totalCount: tagCounts[tagId] };
    } else {
      return { id: tagId, name: tagId, color: '#cccccc', totalCount: tagCounts[tagId], size: '1.2rem' }; // Fallback für unbekannte Tags
    }
  }).filter(Boolean);

  return (
    <TagList>
      {showDocumentationLink && (
        <TagItem key="documentation" color="#8056C4" size="4rem" weight="900">
          <Link to="/blog">
            Documentation
          </Link>
        </TagItem>
      )}
      {fullTags.map(tag => (
        <TagItem key={tag.id} color={tag.color} size={tag.size} weight="600">
          <Link to={`/tags/${tag.id}/`}>
            {tag.name} ({tag.totalCount})
          </Link>
        </TagItem>
      ))}
    </TagList>
  );
};

export default HomeTags;

const TagList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;  /* Centers the items horizontally */
  align-items: center;  /* Centers the items vertically */
  gap: 2rem;  /* Larger gap for bigger tags */
  flex-wrap: wrap;
  padding: 0;
  width: 100%;
  height: 100%;
`;

const TagItem = styled.li`
  margin-right: 1rem;  /* Larger spacing for bigger tags */
  margin-bottom: 1rem; /* Larger spacing for bigger tags */
  text-transform: uppercase;
  font-size: ${({ size }) => size};  /* Use dynamic size */
  font-family: 'Whyte Inktrap';
  font-weight: ${({ weight }) => weight};

  & a {
    text-decoration: none;
    padding: 1rem 2rem;  /* Larger padding for bigger tags */
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

  @media screen and (max-width: 800px) {
    font-size: ${({ size }) => `calc(${size} * 0.75)`};  /* Smaller size for medium screens */
    
    & a {
      padding: 0.75rem 1.5rem;  /* Smaller padding for medium screens */
    }
  }

  @media screen and (max-width: 500px) {
    font-size: ${({ size }) => `calc(${size} * 0.5)`};  /* Smaller size for small screens */
    
    & a {
      padding: 0.5rem 1rem;  /* Smaller padding for small screens */
    }
  }
`;
