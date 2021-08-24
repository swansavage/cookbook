import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3> Want to get in touch?</h3>

            <p>
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Integer posuere erat a ante venenatis dapibus posuere
              velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor
              mauris condimentum nibh, ut fermentum massa justo sit amet risus.
              Integer posuere erat a ante venenatis dapibus posuere velit
              aliquet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
              dolor auctor. Donec ullamcorper nulla non metus auctor fringilla.{" "}
            </p>

            <p>
              Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis
              consectetur purus sit amet fermentum. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec
              sed odio dui. Duis mollis, est non commodo luctus, nisi erat
              porttitor ligula, eget lacinia odio sem nec elit. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mbjqpedo"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea type="message" id="message">
                  {" "}
                </textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
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

export default Contact
