import React, { useState } from "react";

function Item({ name, category }) {
  
  //initialize state to not in cart
  const [inCart, setInCart] = useState(false)

  function handleAddToCart() {
    setInCart( (inCart) => {
      return !inCart
    } )
  }

  return (
    <li className={ inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddToCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
