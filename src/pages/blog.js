import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/post-list';

const BlogPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];

    React.useEffect(() => {
      document.body.className = 'blog-page';
    }, []);

  return (
    <Layout title="Blog">
      <PostList posts={posts} />
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: frontmatter___date }
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
  }
`;
