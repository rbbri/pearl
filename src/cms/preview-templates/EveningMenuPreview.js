import React from 'react'
import PropTypes from 'prop-types'
import { EveningMenuTemplate } from '../../templates/evening-menu'

const EveningMenuPreview = ({ entry, widgetsFor }) => {

  const data = entry.getIn(["data"]).toJS();
  const about = data.about
  const menu = data.menu

  if (data) {
    return (
      <EveningMenuTemplate about={about || {}} menu={ menu || widgetsFor(menu.section)} />
    );
  } else {
    return <div>Loading...</div>
  }
}

EveningMenuPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default EveningMenuPreview
