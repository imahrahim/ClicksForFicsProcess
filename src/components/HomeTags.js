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

const HomeTags = ({ tags }) => {
  // Map tags to their full objects from allTags
  const fullTags = tags.map(tagId => {
    const tag = allTags.find(tag => tag.id === toKebabCase(tagId));
    if (tag) {
      return tag;
    } else {
      return { id: tagId, name: tagId, color: '#cccccc' }; // Fallback für unbekannte Tags
    }
  }).filter(Boolean);

  return (
    <TagList>
      {fullTags.map(tag => (
        <TagItem key={tag.id} color={tag.color}>
          <Link to={`/tags/${tag.id}/`}>
            {tag.name}
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
  gap: 1rem;  /* Größeres Gap für größere Tags */
  flex-wrap: wrap;
  padding: 0;
  max-width: 60rem;
`;

const TagItem = styled.li`
  margin-right: 1rem;  /* Größerer Abstand für größere Tags */
  margin-bottom: 1rem; /* Größerer Abstand für größere Tags */
  text-transform: uppercase;
  font-size: 1.5rem;  /* Größere Schriftgröße */
  font-family: 'Brr';

  & a {
    text-decoration: none;
    padding: 0.5rem 1rem;  /* Größeres Padding für größere Tags */
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
