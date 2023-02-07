import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import ItemCount from '../Item/ItemCount';

import './Product.css'

const Producto = ({ producto }) => {
  return (
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
};

const ProductoDetail = ({ productos }) => {

  const { agregarCarrito, cartList } = useContext(CartContext)

  const onAdd = (cant) => {
    console.log(cant)
    agregarCarrito( {producto, cantidad: cant} )
  }

  console.log(cartList)

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="card-deck">
        { productos.map(producto => <Producto key={producto.id} producto={producto} />) }
      </div>
      <ItemCount onAdd={onAdd} style={{ marginLeft: 'auto' }} />
    </div>
  );
};

export default ProductoDetail;
