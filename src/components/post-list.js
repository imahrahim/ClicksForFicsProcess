import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Tags from "./tags";

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

      return (
        <PostListItem
          key={slug}
          tags={tags}
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
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.214);
  backdrop-filter: blur(10px);
  border-radius: 4px;
  cursor: pointer;
  color: inherit;
  body.light-mode &:hover {
    background-color: rgba(255, 255, 255, 0.214);
    backdrop-filter: blur(5px);
  }
  body.dark-mode &:hover {
    background-color: rgba(0, 0, 0, 0.214);
    backdrop-filter: blur(5px);
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
    border: 4px solid #000000;
    background-color: #ff93eb5f;
  }

  body.light-mode &:hover {
    background-color: rgba(255, 255, 255, 0.184);
  }

  body.dark-mode & {
    background-color: #ff93eb51;
    backdrop-filter: blur(20px);
    border: 4px solid #000000;
  }

  body.dark-mode &:hover {
    background-color: rgba(0, 0, 0, 0.214);
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
