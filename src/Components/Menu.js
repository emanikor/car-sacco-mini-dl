import React from "react";
import data from './data';


const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id,  img, title, price } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
             
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;