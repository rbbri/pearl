import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import MarkdownContent from "../components/MarkdownContent";
import MenuColumn from "../components/MenuColumn";

export const BrunchMenuTemplate = ({ about, menu }) => {
  const splitEvery = (array, length) =>
    array.reduce((result, item, index) => {
      if (index % length === 0) result.push([]);
      result[Math.floor(index / length)].push(item);
      return result;
    }, []);

  const sections = splitEvery(menu, Math.floor(menu.length/2))

      
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
                      <div>Brunch is available:</div>
                      <div>{about.brunchTimes.week}</div>
                      <div>{about.brunchTimes.weekend}</div>
                    </div>
                  </div>
                </div>

                <section className={`section-alt section columns`}>
                  <MenuColumn
                    sections={sections[0]}
                    className="tile"
                  ></MenuColumn>
                  <MenuColumn
                    sections={sections[1]}
                    className="tile"
                  ></MenuColumn>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

BrunchMenuTemplate.propTypes = {
  about: PropTypes.object,
  menu: PropTypes.array
};

const BrunchMenu = ({ data }) => {
  const { markdownRemark: brunch } = data;

  return (
    <Layout>
      <BrunchMenuTemplate
        about={brunch.frontmatter.about}
        menu={brunch.frontmatter.menu}
      />
    </Layout>
  );
};

BrunchMenu.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default BrunchMenu;

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
