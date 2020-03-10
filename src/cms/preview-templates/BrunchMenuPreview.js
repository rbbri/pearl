import React from 'react'
import PropTypes from 'prop-types'
import { BrunchMenuTemplate } from '../../templates/brunch-menu'

const BrunchMenuPreview = ({ entry }) => {

  const data = entry.getIn(['data']).toJS()
  const about = data.about
  const menu = data.menu

  if (data) {
    return (
      <BrunchMenuTemplate
      about={about || {}}
      menu={menu || {section: []} }
      />
    )
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
