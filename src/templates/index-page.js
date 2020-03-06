import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import MarkdownContent from '../components/MarkdownContent'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'


export const IndexPageTemplate = ({
  image,
  about,
  gallery
}) => { 
  return (
    <div>
      <div>
        <Gallery className="image" photos={gallery.galleryImages}></Gallery>
      </div>

      <section name="about" className="section">
        <div className="container">
          <div className="content">
            <div className="content">
              <div className="tile">
                <h1
                  className={`title about`}
                  style={{ fontSize: "6em", marginBottom: 0 }}
                >
                  {about.title}
                </h1>
              </div>
              <div className="tile">
                <h3 className="subtitle">{about.subtitle}</h3>
              </div>

              <div className="columns">
                <div className="column is-three-fifths">
                  <div className="tile">
                    <MarkdownContent
                      className="content"
                      content={about.content}
                    />
                  </div>
                </div>
                <div className="column is-two-fifth">
                  <figure className="image is-5by3">
                    <img
                      src={
                        !!about.image.childImageSharp
                          ? about.image.childImageSharp.fluid.src
                          : about.image
                      }
                    ></img>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `top center`,
          backgroundAttachment: `fixed`
        }}
      >
        <div
          style={{
            display: "flex",
            height: "150px",
            lineHeight: "1",
            justifyContent: "space-around",
            alignItems: "left",
            flexDirection: "column"
          }}
        ></div>
      </div>

      <section name="contact">
        <Contact></Contact>
      </section>
    </div>
  );
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  about: PropTypes.object,
  gallery: PropTypes.shape({
    galleryImages: PropTypes.array
  })
}

const IndexPage = ({ data }) => {
  const { markdownRemark: index } = data

  return (
    <Layout>
      <IndexPageTemplate
        image={index.frontmatter.image}
        about={index.frontmatter.about}
        gallery={index.frontmatter.gallery}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        about {
          title
          subtitle
          content
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        gallery {
          galleryImages {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
