import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemCount = ({ addToCart }) => {
  const [count, setCount] = useState(0);

  const handleClick = (value) => {
    if (count + value >= 0) {
      setCount(count + value);
    }
  };

  const handleAddToCart = () => {
    addToCart(count);
    setCount(0);
  };

  return (
    <div className="d-flex mt-3">
      <button className="btn btn-danger" onClick={() => handleClick(-1)}>
        -
      </button>
      <p className="m-0 font-weight-bold" style={{ fontSize: "1.5em", width: "50px", textAlign: "center" }}>{count}</p>
      <button className="btn btn-success" onClick={() => handleClick(1)}>
        +
      </button>
      <button className="btn btn-dark ml-3" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
