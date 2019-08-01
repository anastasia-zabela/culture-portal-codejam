module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'nnjxq94o0k8q',
        accessToken: 'arJoI5VPa5lumtee5XAHhnZSnRK9dsuM_dDHoi8IFks',
      },
    },
  ]
}
