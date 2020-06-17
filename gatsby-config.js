module.exports = {
  siteMetadata: {
    title: `names`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-112975901-1',
        anonymize: true
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [ `Inconsolata` ]
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: false,
          appleIcon: true,
          appleStartup: false,
          coast: true,
          favicons: true,
          firefox: false,
          twitter: false,
          yandex: false,
          windows: true
        }
      }
    }
  ]
}
