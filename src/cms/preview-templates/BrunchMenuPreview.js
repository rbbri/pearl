import React from 'react'
import PropTypes from 'prop-types'
import { BrunchMenuTemplate } from '../../templates/brunch-menu'

const BrunchMenuPreview = ({ entry, widgetsFor }) => {

  const data = entry.getIn(['data']).toJS()
  const about = entry.data.about
  const menu = entry.data.menu

  if (data) {
    return (
      <BrunchMenuTemplate
      about={about || {}}
      menu= {{
        section: widgetsFor(menu.section)
      }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

BrunchMenuPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetsFor: PropTypes.func
}

export default BrunchMenuPreview
