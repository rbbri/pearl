import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Index from '../pages/contact/index'



export const IndexPageTemplate = ({
  image,
  about, 
  galleryImages
}) => { 
  const PageContent =  Content
  return (
    <div>
      
      <section name="about" className="section">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div  className="content">
                    <div className="tile">
                      <h1 className={`title about`} style={{fontSize: '6em', marginBottom: 0}}>{about.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{about.subtitle}</h3>
                    </div>
                    <div className="tile">
                        <div className="columns">
                          <div className="column is-offset-one-half">
                            <PageContent className="content" content={about.description} />
                          </div>
                          <div className="column">
                            <figure className="image is-5by3">
                              <img src={!!about.image.childImageSharp ? about.image.childImageSharp.fluid.src : about.image}></img>
                            </figure>
                          </div>
                        </div>
                    </div>
                  </div>
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
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
          }}
        >
        </div>
      </div>
      <Index name="contact"></Index>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  about: PropTypes.object,
  gallery: PropTypes.shape({
    galleryImages: PropTypes.array
  })
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        about={frontmatter.about}
        galleryImages={frontmatter.galleryImages}
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
          description
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
