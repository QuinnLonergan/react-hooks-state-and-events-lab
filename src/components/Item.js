import React, { useState } from "react";

function Item({ name, category }) {
  const [cartStatus, setStatus] = useState(false)

  const itemClass = cartStatus ? "in-cart" : ""

  function handleClick() {
    setStatus((cartStatus) => (!cartStatus));
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick}className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
