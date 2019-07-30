module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/locales`,
        languages: [`en`, `ru`, `by`],
        defaultLanguage: `ru`,
        redirect: true,
      },
    },
  ]
}
