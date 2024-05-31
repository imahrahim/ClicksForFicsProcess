import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Tags from "./tags";
import allTags from '../data/tags'; // Importieren der zentralen Tags

const PostList = ({ posts }) => {
  const [sortOrder, setSortOrder] = useState("newest");

  const handleSortToggle = () => {
    setSortOrder((prevOrder) => (prevOrder === "newest" ? "oldest" : "newest"));
  };

  const sortedPosts = posts.sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
    } else {
      return new Date(a.frontmatter.date) - new Date(b.frontmatter.date);
    }
  });

  const PostListItems = sortedPosts.map(
    ({ frontmatter, fields, excerpt, timeToRead }) => {
      const { title, tags, date, description } = frontmatter;
      const { slug } = fields;

      // Map tags to their full objects from allTags
      const fullTags = tags.map(tagId => allTags.find(tag => tag.id === tagId)).filter(Boolean);

      return (
        <PostListItem
          key={slug}
          tags={fullTags}
          title={title}
          date={date}
          slug={slug}
          timeToRead={timeToRead}
          description={description}
          excerpt={excerpt}
        />
      );
    }
  );

  return (
    <div>
      <SortButton onClick={handleSortToggle}>
        SORT: {sortOrder === "newest" ? "LAST POST" : "FIRST POST"}
      </SortButton>
      <StyledPostList>{PostListItems}</StyledPostList>
    </div>
  );
};

export default PostList;

const PostListItem = ({
  title,
  date,
  timeToRead,
  tags,
  excerpt,
  description,
  slug,
}) => {
  return (
    <StyledPostListItem>
      <PostListMeta>
        <span>{date}</span>
        <span>{timeToRead} mins</span>
      </PostListMeta>

      <PostListTitle>
        <Link to={slug}>{title}</Link>
      </PostListTitle>
      <PostListExcerpt
        dangerouslySetInnerHTML={{
          __html: description || excerpt,
        }}
      />

      <Tags tags={tags} />
    </StyledPostListItem>
  );
};

const SortButton = styled.button`
  display: block;
  margin-top: var(--size-800);
  margin-bottom: var(--size-800);
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  cursor: pointer;
  color: inherit;
  padding: 0.2rem 0.6rem;
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

`;

const StyledPostList = styled.ul`
  padding-left: 10rem;
  padding-right: 10rem;
  list-style: none;
  display: block;
  justify-items: center;
  grid-gap: var(--size-600);
  grid-template-columns: repeat(auto-fit, minmax(35ch, 1fr));

  @media screen and (max-width: 800px) {
    & {
      display: block;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
  @media screen and (max-width: 500px) {
    & {
      display: block;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
`;

const StyledPostListItem = styled.li`
  display: flex;
  padding: 2rem;
  margin-top: 2rem;
  border-radius: 8px;
  position: relative;
  flex-direction: column;
  transition: all 0.3s ease-out;

  body.light-mode & {
    backdrop-filter: blur(10px);
    border: 0.1rem solid #000000;
    background-color: #ffffff5f;
  }

  body.light-mode &:hover {
    background-color: rgba(255, 255, 255, 0.331);
  }

  body.dark-mode & {
    background-color: rgba(255, 255, 255, 0.232);
    backdrop-filter: blur(10px);
    border: 0.1rem solid #000000;
  }

  body.dark-mode &:hover {
    background-color: rgba(255, 255, 255, 0.587);
    backdrop-filter: blur(30px);
  }

  @media screen and (max-width: 500px) {
    & {
      margin-top: var(--size-600);
    }
  }
`;

const PostListTitle = styled.h2`
  line-height: 1.2;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  font-size: var(--size-600);
  font-weight: 700;

  & a {
    text-decoration: none;
    color: inherit;
    font-family: 'Brr';
    text-transform: uppercase;
  }

  & a::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const PostListExcerpt = styled.p`
  margin-top: auto;
  margin-bottom: 2rem;
  font-size: var(--size-400);
`;

const PostListMeta = styled.div`
  margin-bottom: 2rem;

  font-size: var(--size-300);
  display: flex;
  justify-content: space-between;
`;
