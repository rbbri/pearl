import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import MarkdownContent from '../components/MarkdownContent'
import MenuColumn from "../components/MenuColumn"
import MenuSection from '../components/MenuSection'
import MenuSectionFull from '../components/MenuSectionFull'


export const EveningMenuTemplate = ({
  about,
  menu
}) => {

  const splitEvery = (array, length) =>
    array.reduce((result, item, index) => {
      if (index % length === 0) result.push([]);
      result[Math.floor(index / length)].push(item);
      return result;
    }, []);

  const full = menu.filter(section => section.section.full)
  console.log(full);
  const columns = menu.filter(section => !section.section.full)
  

  const sections = splitEvery(columns, Math.floor(columns.length / 2));

  

    return (
      <div>
        <section className={`section-alt section`}>
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column">
                  <div className="tile">
                    <h1 className={`subtitle is-2`}>{about.title}</h1>
                  </div>

                  <div className="tile">
                    <MarkdownContent
                      className="content"
                      content={about.content}
                    />
                  </div>

                  <div className="tile">
                    <div>
                      <div
                        className="content"
                        style={{ fontWeight: 600, paddingTop: "10px" }}
                      >
                        <div>Dinner is available:</div>
                        <div>{about.eveningTimes}</div>
                      </div>
                    </div>
                  </div>

                  <section className={`section-alt section`}>
                    {full.map(section => (
                      <div key={section.section.title}>
                        <MenuSectionFull
                          section={section.section}
                          className="tile"
                        ></MenuSectionFull>
                      </div>
                    ))}
                    <div className="columns">
                      <MenuColumn
                        sections={sections[0]}
                        className="tile"
                      ></MenuColumn>
                      <MenuColumn
                        sections={sections[1]}
                        className="tile"
                      ></MenuColumn>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

EveningMenuTemplate.propTypes = {
  about: PropTypes.object,
  menu: PropTypes.array
};

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
