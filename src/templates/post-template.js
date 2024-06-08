import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import Tags from "../components/tags";
import allTags from '../data/tags';

const PostTemplate = ({ data }) => {
  const { frontmatter, excerpt, html } = data.markdownRemark;
  const prev = data.prev;
  const next = data.next;

  React.useEffect(() => {
    document.body.className = 'post-page';
  }, []);

  // Map tags to their full objects from allTags
  const fullTags = frontmatter.tags.map(tagId => allTags.find(tag => tag.id === tagId)).filter(Boolean);

  return (
    <Layout
      title={frontmatter.title}
      description={frontmatter.description || excerpt}
    >
      <PostWrapper>
        <article>
          <PostTitle>{frontmatter.title}</PostTitle>
          <PostDate>{frontmatter.date}</PostDate>

          <PostContent dangerouslySetInnerHTML={{ __html: html }} />
        </article>

        <PostPagination>
          {prev && (
            <div>
              <span>previous</span>
              <Link to={prev.fields.slug}> {prev.frontmatter.title}</Link>
            </div>
          )}

          {next && (
            <div>
              <span>next</span>
              <Link to={next.fields.slug}> {next.frontmatter.title}</Link>
            </div>
          )}
        </PostPagination>
        <Tags tags={fullTags} />
      </PostWrapper>
    </Layout>
  );
};

export default PostTemplate;

const PostWrapper = styled.div`
  padding: var(--size-800);
  padding-bottom: var(--size-900);
  margin-left: auto;
  margin-right: auto;
  max-width: 90ch;
  word-wrap: break-word;

  @media (max-width: 1200px) {
    padding: var(--size-700);
    padding-bottom: var(--size-800);
  }

  @media (max-width: 992px) {
    padding: var(--size-600);
    padding-bottom: var(--size-700);
  }

  @media (max-width: 768px) {
    padding: var(--size-500);
    padding-bottom: var(--size-600);
  }

  @media (max-width: 576px) {
    padding: var(--size-400);
    padding-bottom: var(--size-500);
  }

  .gatsby-resp-image-wrapper {
    max-width: none !important;
  }
`;

const PostTitle = styled.h1`
  font-size: var(--size-800);
`;

const PostDate = styled.span`
  font-size: var(--size-300);
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

const PostContent = styled.section`
  padding: 0.2rem;

  & > * + * {
    margin-top: var(--size-300);
  }

  & > p + p {
    margin-top: var(--size-700);
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 8rem;
    margin-bottom: 2rem;
  }

  * + h4,
  * + h5,
  * + h6 {
    margin-top: 5rem;
    margin-bottom: 1rem;
  }

  b,
  strong {
    font-weight: 800;
  }

  a {
    color: inherit;
    text-decoration: underline;
    text-decoration-thickness: 0.125rem;
  }

  blockquote {
    padding-left: var(--size-400);
    border-left: 5px solid;
    font-style: italic;
  }

  code {
    font-family: 'Whyte';
    font-size: 14px;
    overflow-x: auto;
    white-space: pre-wrap;
  }

  pre {
    overflow-x: auto;
    white-space: pre-wrap;
    max-width: 100%;
  }

  img {
    display: block;
    flex: 1;
    width: 100%;
  }
`;

const PostPagination = styled.nav`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: var(--size-900);

  & > * {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: 8px;
    border: 0.1rem solid rgba(0, 0, 0, 1);
    background-color: #2d1c4858;
    backdrop-filter: blur(10px);
    margin-bottom: 1rem;
  }

  & > *:hover {
    background-color: #2d1c48c1;
    backdrop-filter: blur(30px);
  }

  & span {
    text-transform: uppercase;
    opacity: 0.6;
    font-size: var(--size-400);
    padding-bottom: var(--size-500);
    color: #fff;
  }

  & a {
    color: #fff;
    text-decoration: none;
    font-size: var(--size-400);
    text-transform: capitalize;
  }

  & a::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;
export const pageQuery = graphql`
  query PostBySlug($slug: String!, $prevSlug: String, $nextSlug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }

    prev: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }

    next: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;

