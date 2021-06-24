/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "CookBook",
    description: "Simple place to keep recipes",
    author: "@swansavage",
    person: { name: "shaun", age: 33 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "shaun", age: 33 },
      { name: "susan", age: 21 },
      { name: "randy", age: 25 },
    ],
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
