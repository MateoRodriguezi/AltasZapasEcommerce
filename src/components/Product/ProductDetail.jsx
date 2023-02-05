import React from 'react';
import { NavLink } from 'react-router-dom';

import './Product.css'

const Producto = ({ producto }) => (
  <div key={producto.id} className="card mx-2 mb-4" style={{width: "300px"}}>
    <div className='card-header text-center'>
      {producto.name}
    </div>
    <div className='card-body text-center'>
      <img src={producto.image} alt='imagen' className='product-image w-100'/>
    </div>
    <div className='card-body text-center'>
        <p>
            {producto.description}
        </p>
    </div>
    <div className='card-body text-center'>
      <strong>ARS ${producto.price}</strong>
    </div>
    <div className='card-body text-center'>
      <NavLink to={'/'} className="btn btn-dark btn-large">Atrás</NavLink>
    </div>
  </div>
);

const ProductoDetail = ({ productos }) => (
  <div className="d-flex justify-content-center">
    <div className="card-deck">
      { productos.map(producto => <Producto key={producto.id} producto={producto} />) }
    </div>
  </div>
);

export default ProductoDetail;