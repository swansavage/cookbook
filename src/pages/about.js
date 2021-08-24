import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Vestibulum id ligula porta felis euismod semper.</h2>
            <p>
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Nulla vitae elit libero, a pharetra augue. Sed posuere
              consectetur est at lobortis. Vestibulum id ligula porta felis
              euismod semper.
            </p>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Curabitur blandit tempus
              porttitor. Test two!
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person pouring salt in bowl"
            className="about-img"
            placeholder="tracedSVG"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesauce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
