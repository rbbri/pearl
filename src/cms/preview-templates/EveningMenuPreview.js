import React from 'react'
import PropTypes from 'prop-types'
import { EveningMenuTemplate } from '../../templates/evening-menu'

const EveningMenuPreview = ({ entry }) => {

  const data = entry.getIn(["data"]).toJS();
  const about = entry.data.about
  const menu = entry.data.menu

  if (data) {
    return (
      <EveningMenuTemplate
        about={about || {}}
        menu={{
          section: widgetsFor(menu.section)
        }}
      />
    );
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
