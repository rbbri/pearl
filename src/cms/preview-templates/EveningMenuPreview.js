import React from 'react'
import PropTypes from 'prop-types'
import { EveningMenuTemplate } from '../../templates/evening-menu'

const EveningMenuPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <EveningMenuTemplate
      about={data.about || {}}
      menu={data.menu || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

EveningMenuPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default EveningMenuPreview
