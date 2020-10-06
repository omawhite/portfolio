const rssFeedQueries = require('./src/node/queries/RSSFeed')
const rssFeedHelpers = require('./src/node/helpers/RSSFeedHelpers')

module.exports = {
  siteMetadata:{
    title: "Louis White",
    siteUrl: 'https://www.louiswhite.me',
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
    `gatsby-theme-material-ui`,
    `gatsby-plugin-netlify`,
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
    },
    `gatsby-transformer-remark`
  ]
}