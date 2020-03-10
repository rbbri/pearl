import React from "react";
import PropTypes from "prop-types";
import MarkdownContent from "../components/MarkdownContent";

export const MenuItem = ({ item, className }) => (
         <div className="menuItem">
           <div className={className}>
             <div className={className}>
               <div className="subtitle">{item.title}</div>
             </div>
             <div className={className}>
               <div className="subtitle" style={{ fontSize: "1rem" }}>
                 {item.price}
               </div>
             </div>
           </div>
           <div className={className}>
             <div className="subtitle" style={{ fontSize: "0.8rem" }}>
               {item.info}
             </div>
           </div>

           <div className={className}>
             <MarkdownContent
               className="menuContent"
               content={item.description}
             ></MarkdownContent>
           </div>
         </div>
       );

MenuItem.propTypes = {
  item: PropTypes.object,
  className: PropTypes.string
};

export default MenuItem