import React from "react";
import MarkdownContent from "../components/MarkdownContent";
import MenuItem from "../components/MenuItem";

export const MenuSection = ({ section, className }) => (
  <div key={section.title} className="menuSection">
    <div className={className}>
      <div className="title is-2">{section.title}</div>
    </div>
    <div className={className}>
      <MarkdownContent content={section.description}></MarkdownContent>
    </div>
    <div>
      {section.items.map(a => (
        <div key={a.item.title}>
          <MenuItem item={a.item} className={className}></MenuItem>
        </div>
      ))}
    </div>
  </div>
);

export default MenuSection