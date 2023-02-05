import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ productos }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card-deck">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="card mx-2"
            style={{ margin: "30px", display: "inline-block", width: "300px" }}
          >
            <div className="card-header text-center">{producto.name}</div>
            <div className="card-body text-center">
              <img
                src={producto.image}
                alt="imagen"
                className="product-image w-100"
              />
            </div>
            <div className="card-body text-center">
              <Link to={`/categoria/${producto.categoria}`}>
                Categoria: {producto.categoria}
              </Link>
            </div>
            <div className="card-body text-center">
              <strong>ARS ${producto.price}</strong>
              <Link to={`/detail/${producto.id}`}>
                <button className="btn btn-outline-primary w-100 mt-2">
                  Detalles
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItem;