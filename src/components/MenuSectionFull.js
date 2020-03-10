import React from "react";
import MarkdownContent from "../components/MarkdownContent";
import MenuItem from "../components/MenuItem";

export const MenuSectionFull = ({ section, className }) => (
         <div key={section.title} className={"menuSection"}>
             <div className="title is-2">{section.title}</div>
             <div className="subtitle is-4">
               {section.description}
             </div>
           <div className={className}>
             {section.items.map(a => (
               <div key={a.item.title}>
                 <MenuItem item={a.item} className={className}></MenuItem>
               </div>
             ))}

             <div></div>
           </div>
         </div>
       );

export default MenuSectionFull;
