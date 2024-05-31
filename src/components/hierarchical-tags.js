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

const HierarchicalTags = React.memo(({ tags }) => {
  const categories = {};

  tags.forEach(tag => {
    const { category, subcategory, tag: detail } = tag;
    if (!categories[category]) {
      categories[category] = {};
    }
    if (!categories[category][subcategory]) {
      categories[category][subcategory] = [];
    }
    categories[category][subcategory].push(detail);
  });

  return (
    <div>
      {Object.keys(categories).map(category => (
        <Category key={category}>
          <h2>{category}</h2>
          {Object.keys(categories[category]).map(subcategory => (
            <Subcategory key={subcategory}>
              <h3>{subcategory}</h3>
              {categories[category][subcategory].map((tag, index) => (
                <Tag key={`${tag}-${index}`}>
                  <Link to={`/tags/${toKebabCase(tag)}`}>{tag}</Link>
                </Tag>
              ))}
            </Subcategory>
          ))}
        </Category>
      ))}
    </div>
  );
});

export default HierarchicalTags;

const Category = styled.div`
  margin-bottom: 2rem;
`;

const Subcategory = styled.div`
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  display: inline-block;
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
  font-family: 'Brr';
  text-transform: uppercase;
  font-size: var(--size-300);

  & a {
    position: relative;
    z-index: 2;
    text-decoration: none;
    color: inherit;
    padding: 0.2rem 0.6rem;
    border: 0.1rem solid rgba(255, 255, 255, 1);
    border-radius: 5rem;
  }

  & a:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  body.light-mode & a {
    background-color: #ffffff;
    color: #8056C4;
    border: 0.1rem solid #8056C4;
  }

  body.light-mode & a:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  body.dark-mode & a {
    background-color: #8056c4ff;
    color: #ffffffff;
    border: 0.1rem solid #ffffffff;
  }
`;
