import React from "react";
import PropTypes from "prop-types";
import MenuSection from "../components/MenuSection";

export const MenuColumn = ({ sections, className }) => (
  <div className="column">
    {sections.map(item => (
      <div key={item.section.title}>
        <MenuSection section={item.section} className={className}></MenuSection>
      </div>
    ))}
  </div>
);

MenuColumn.propTypes = {
    sections: PropTypes.array,
    className: PropTypes.string
};

export default MenuColumn