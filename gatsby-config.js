module.exports = {
  siteMetadata: {
    siteUrl: `https://vehicleenergyusage.gtsb.io/`,
    title: "Vehicle energy usage",
  },
  plugins: [
    'gatsby-source-mongodb',
    {
      resolve: `gatsby-source-mongodb`,
      options: { 
        dbName: `sample_weatherdata`, 
        collection: `data` },
    },
  ],
}
