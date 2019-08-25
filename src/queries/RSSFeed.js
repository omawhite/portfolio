/**
 * Query to get all posts for rss feed
 */
export const allPosts = `
{
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] },
  ) {
    edges {
      node {
        excerpt
        html
        fields { slug }
        frontmatter {
          title
          date
        }
      }
    }
  }
}
`

/**
 * Query to get site metadata for rss feed
 */
export const siteMetadata = `allMarkdownRemark(
  sort: { order: DESC, fields: [frontmatter___date] },
) {
  edges {
    node {
      excerpt
      html
      fields { slug }
      frontmatter {
        title
        date
      }
    }
  }
}`