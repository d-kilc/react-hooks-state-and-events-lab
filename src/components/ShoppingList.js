import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  let [selectedCategory, setSelectedCategory] = useState('')

  function handleSetSelectedCategory(e) {
    setSelectedCategory( (prevCategory) =>  e.target.value )
  }
  
  function renderList() {
    //show all options if loading in for the first time (i.e. if state is empty string)
    if(selectedCategory === '') {
      return items.map((item) => <Item key={item.id} name={item.name} category={item.category} /> )
    } else {
      //else just show the options with item.category matching the selection
      return items.map((item) => item.category === selectedCategory ? <Item key={item.id} name={item.name} category={item.category} /> : '')
    }
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSetSelectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {renderList()}
      </ul>
    </div>
  );
}

export default ShoppingList;
