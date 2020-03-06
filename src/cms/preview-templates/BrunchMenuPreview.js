import React from 'react'
import PropTypes from 'prop-types'
import { BrunchMenuTemplate } from '../../templates/brunch-menu'

const BrunchMenuPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <BrunchMenuTemplate
      about={data.about || {}}
      menu={data.menu || {}}
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
