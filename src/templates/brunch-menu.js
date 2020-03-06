import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import MarkdownContent from '../components/MarkdownContent'



export const BrunchMenuTemplate = ({
    about,
    menu
}) => {
    return (
      <div>
        <h1
          className={`title about`}
          style={{ fontSize: "6em", marginBottom: 0 }}
        >
          {about.title}
        </h1>
      </div>
    );
}

BrunchMenuTemplate.propTypes = {
    about: PropTypes.object,
    menu: PropTypes.object,
}

const BrunchMenu = ({ data }) => {
    const { markdownRemark: brunch } = data

    return (
        <Layout>
            <BrunchMenuTemplate
                about={brunch.frontmatter.about}
                menu={brunch.frontmatter.menu}
            />
        </Layout>
    )
}

BrunchMenu.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default BrunchMenu

export const pageQuery = graphql`
         query BrunchMenuTemplate {
           markdownRemark(frontmatter: { templateKey: { eq: "brunch-menu" } }) {
             frontmatter {
               about {
                 title
                 content
                 brunchTimes {
                   week
                   weekend
                 }
               }
               menu {
                 section {
                   title
                   description
                   featured
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
