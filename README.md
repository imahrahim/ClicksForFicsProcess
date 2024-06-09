# Clicks for Fics Process Documentation

### Overview

This project documents the process behind the **Clicks for Fics** project, which analyzes and visualizes the most popular fan fiction works and fandoms on the **Archive of Our Own** platform. The documentation provides insights into the development process, tools used, and methodologies applied to create the visualizations and analyses.

### Template

This project was built using the [Gatsby Starter Glass](https://github.com/yinkakun/gatsby-starter-glass) template, which provides a minimal and beautiful design with a glassmorphism UI. The template was customized to fit the specific needs and goals of the **Clicks for Fics** project.

### Project Structure

The project consists of several main files and directories, each serving a specific purpose:

- `gatsby-config.js`: Gatsby configuration file that sets up plugins and site metadata.
- `gatsby-node.js`: Custom Node.js scripts that extend Gatsby’s build process.
- `package.json`: Contains information about the project, scripts, and dependencies.
- `src`: Source directory containing the main codebase.
  - `pages`: Contains the pages of the project.
  - `templates`: Templates for dynamically generated pages.
  - `components`: Reusable components used throughout the site.
  - `styles` or `css`: CSS files for styling the site.
- `static`: Contains static assets like images used in the project.
- `content`: Contains markdown files with content for the site.

### Files and Their Functions

#### `gatsby-config.js`

This file contains the configuration settings for the Gatsby project, including site metadata, plugins, and their options.

#### `gatsby-node.js`

This file contains custom Node.js scripts that extend the build process of Gatsby. It is used to create dynamic pages, add custom fields to nodes, and customize the GraphQL schema.

#### `package.json`

This file contains metadata about the project, including its name, version, description, and dependencies. It also defines scripts for common tasks like building, developing, and deploying the site.

#### `src/pages`

This directory contains the main pages of the project. Each file in this directory corresponds to a route on the website.

#### `src/templates`

This directory contains templates for dynamically generated pages. These templates are used by `gatsby-node.js` to create pages from markdown files or other data sources.

#### `src/components`

This directory contains reusable components that are used throughout the site, such as headers, footers, and navigation bars.

#### `src/styles` or `src/css`

This directory contains CSS files used for styling the site. It may include global styles, component-specific styles, and theme settings.

#### `static`

This directory contains static assets like images, which are directly served from the root of the site.

#### `content`

This directory contains markdown files with the content for the site. These files are processed by Gatsby and transformed into pages using the templates.

### Key Files

#### `index-template.js`

This file contains the template for the homepage. It defines the layout and structure of the homepage and includes components such as the introduction, content boxes, and buttons.

#### `post-template.js`

This file contains the template for individual blog posts. It defines the layout and structure of a blog post, including the title, date, content, tags, and pagination.

#### `tags-template.js`

This file contains the template for displaying posts by tags. It defines the layout and structure for the tag pages, including the title, number of posts, and the list of posts associated with the tag.

#### `blog.js`

This file defines the main blog page that lists all the blog posts. It fetches the posts using a GraphQL query and displays them using the `PostList` component.

#### `tags.js`

This file defines the tags page that lists all the tags. It fetches the tags using a GraphQL query and displays them using the `HomeTags` component.

### Contact

For questions or support, you can contact me via [GitHub](https://github.com/imahrahim), [Instagram](https://www.instagram.com/imahleaf/), or [email](mailto:imah.rahim@me.com).

### Credits

This project was built using the [Gatsby Starter Glass](https://github.com/yinkakun/gatsby-starter-glass) template by [Yinka Adedire](https://github.com/yinkakun).


