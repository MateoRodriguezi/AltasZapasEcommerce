import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart, FaRegLaughWink } from "react-icons/fa";


const ItemCount = ({ }) => {
  const [count, setCount] = useState(0);
  const [inputType, setInputType ] = useState('buttons');

  const handleClick = (value) => {
    if (count + value >= 0) {
      setCount(count + value);
    }
  };

  const handleAddToCart = () => {
    setInputType('links');
  };

  return (
    <div className="d-flex mt-3">
      {inputType === 'buttons' ? (
        <>
          <button className="btn btn-danger" onClick={() => handleClick(-1)}>
            -
          </button>
          <p className="m-0 font-weight-bold" style={{ fontSize: "1.5em", width: "50px", textAlign: "center" }}>
            {count}
          </p>
          <button className="btn btn-success" onClick={() => handleClick(1)}>
            +
          </button>
          <button className="btn btn-dark ml-3" onClick={handleAddToCart}>
            Agregar al carrito <FaShoppingCart />
          </button>
        </>
      ) : (
        <>
          <Link to="/cart">
            <button className="btn btn-dark ml-3"> Ir al carrito <FaShoppingCart />  </button>
          </Link>
          <Link to="/">
            <button className="btn btn-dark ml-3">Seguir comprando  <FaRegLaughWink />  </button>
          </Link>
        </>
      )}
    </div>
  );
  
};

export default ItemCount;
