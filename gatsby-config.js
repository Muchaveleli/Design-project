module.exports = {
  siteMetadata: {
    siteUrl: `https://vehicleenergyusage.gtsb.io/`,
    title: "Vehicle energy usage",
  },
  plugins: [
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `gallery`,
          path: `${__dirname}/src/gallery`,
        },
     },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
     // other plugins
  ],  
}
