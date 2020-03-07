import React from 'react'
import PropTypes from 'prop-types'
import { BrunchMenuTemplate } from '../../templates/brunch-menu'

const BrunchMenuPreview = ({ entry }) => {

  const menuSections = entry.getIn(['data', 'menu', 'sections'])
  const sections = menuSections ? menuSections.toJS() : []

  if (data) {
    return (
      <BrunchMenuTemplate
        about={{
          title: entry.getIn(["data", "about", "title"]),
          content: entry.getIn(["data", "about", "content"]),
          brunchTimes: {
            week: entry.getIn(["data", "about", "week"]),
            weekend: entry.getIn(["data", "about", "weekend"])
          }
        }}

        menu={{
          sections
        }}
      />
    );
  } else {
    return <div>Loading...</div>
  }
}

BrunchMenuPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default BrunchMenuPreview
