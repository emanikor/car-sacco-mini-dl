import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import './Fleets.css';


const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          {/* <img src={logo} alt="logo" className="logo" /> */}
          <h2>OUR FLEETS </h2>
          < p>we offer and extensive fleetof vehicle including<br></br> 
          Bmw, Audi,Toyota</p>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
