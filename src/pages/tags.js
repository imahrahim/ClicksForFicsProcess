import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import HomeTags from '../components/HomeTags';

const TagsPage = ({ data }) => {
  const tags = data.allMarkdownRemark.group;
  React.useEffect(() => {
    document.body.className = 'tags-page';
  }, []);

  return (
    <Layout title="Tags" >
          <HomeTags tags={tags} />
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
