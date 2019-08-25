const rssFeedQueries = require('./src/queries/RSSFeed')
const rssFeedHelpers = require('./src/helpers/RSSFeedHelpers')

module.exports = {
  siteMetadata:{
    title: "Louis White",
    author: "Omar Louis White", 
    description: "Omar Louis White's Portfolio",
    social: [
      {
        name: 'twitter',
        url: 'https://twitter.com/louiswhite3019',
      },
      {
        name: 'github',
        url: 'https://github.com/omawhite',
      },
      {
        name: 'dev.to',
        url: 'https://dev.to/omawhite'
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/omar-white-29b66ba3/'
      },
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-blog',
      options: {
        contentPath: 'static/posts', // the file path to your blog posts
        basePath: '/', // the url for the root of your blog
        assetPath: 'static/assets', // the file path to your assets folder
        mdx: true, // whether or not to configure mdx for you
      }
    },
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-netlify-cms`, //https://www.gatsbyjs.org/packages/gatsby-plugin-netlify-cms/?=netlify
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: rssFeedQueries.siteMetadata,
        feeds: [
          {
            serialize: rssFeedHelpers.rssSerialize,
            query: rssFeedQueries.allPosts,
            output: '/rss.xml',
            title: 'Louis White RSS Feed'
          }
        ]
      }
    }
  ]
}