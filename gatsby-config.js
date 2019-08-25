module.exports = {
  siteMetadata:{
    title: "Louis White",
    author: "Omar Louis White", 
    description: "Omar Louis White's Portfolio",
  },
  plugins: [
    {
      resolve: 'gatsby-theme-blog',
      options: {
        contentPath: 'content/posts', // the file path to your blog posts
        basePath: '/', // the url for the root of your blog
        assetPath: 'content/assets', // the file path to your assets folder
        mdx: true, // whether or not to configure mdx for you
      }
    }
  ]
}