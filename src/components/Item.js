import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const className = inCart ? "in-cart" : "";

  function handleClass() {
    setInCart(!inCart);
  }

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClass}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
