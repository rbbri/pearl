import React from "react";
import MarkdownContent from "../components/MarkdownContent";
import MenuItem from "../components/MenuItem";

export const MenuSectionFull = ({ section, className }) => (
         <div key={section.title} className={"menuSection", "columns"}>
           <div className="column is-one-quarter">
             <div className="title is-2">{section.title}</div>
             <div className="subtitle is-5">{section.description}</div>
           </div>
             {section.items.map(a => (
               <div key={a.item.title} className="column">
                 <MenuItem item={a.item} className={className}></MenuItem>
               </div>
             ))}
         </div>
       );

export default MenuSectionFull;
