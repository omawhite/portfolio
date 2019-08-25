module.exports = {
  siteMetadata:{
    title: "Louis White",
    author: "Omar Louis White", 
    description: "Omar Louis White's Portfolio",
    social: [
      {
        name: 'twitter',
        url: 'twitter.com/louiswhite3019',
      },
      {
        name: 'github',
        url: 'github.com/omawhite',
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
    `gatsby-plugin-netlify-cms`
  ]
}