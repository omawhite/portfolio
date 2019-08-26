/**
 * Query to get all posts for rss feed
 */
const allPosts =`{
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
}`

/**
 * Query to get site metadata for rss feed
 */
const siteMetadata = `{
  site {
    siteMetadata {
      title
      description
      siteUrl
      site_url: siteUrl
    }
  }
}`

module.exports={siteMetadata,allPosts}