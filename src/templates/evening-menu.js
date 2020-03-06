import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import MarkdownContent from '../components/MarkdownContent'



export const EveningMenuTemplate = ({
  about,
  menu
}) => {
    return (
      <h1
        className={`title about`}
        style={{ fontSize: "6em", marginBottom: 0 }}
      >
        {about.title}
      </h1>
    );
}

EveningMenuTemplate.propTypes = {
    about: PropTypes.object,
    menu: PropTypes.object,
}

const EveningMenu = ({ data }) => {
    const { markdownRemark: evening } = data

    return (
        <Layout>
            <EveningMenuTemplate
                about={evening.frontmatter.about}
                menu={evening.frontmatter.menu}
            />
        </Layout>
    )
}

EveningMenu.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default EveningMenu

export const pageQuery = graphql`
         query EveningMenuTemplate {
           markdownRemark(frontmatter: { templateKey: { eq: "evening-menu" } }) {
             frontmatter {
               about {
                 title
                 content
                 eveningTimes
               }
               menu {
                 section {
                   title
                   description
                   featured
                   full
                   items {
                     item {
                       title
                       price
                       info
                       description
                     }
                   }
                 }
               }
             }
           }
         }
       `;
