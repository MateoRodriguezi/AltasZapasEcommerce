import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCount from '../Item/ItemCount';

import Swal from 'sweetalert2';


import './Product.css'

const ProductDetail = ({ productos }) => {

  const { agregarCarrito } = useCartContext()

  const onAdd = (cant) => {
    agregarCarrito({ ...productos, cantidad: cant });
    Swal.fire({
      title: 'Agregado exitosamente!',
      text: `El producto ha sido agregado al carrito.`,
      icon: 'success',
      timer: 3000,
      showConfirmButton: false
    });
  };

  const { cartList } = useCartContext()
    console.log(cartList)

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="card mx-2 mb-4" style={{width: "300px"}}>
            <div className='card-header text-center'>
              {productos.name}
            </div>
            <div className='card-body text-center'>
              <img src={productos.image} alt='imagen' className='product-image w-100'/>
            </div>
            <div className='card-body text-center'>
                <p>{productos.description}</p>
            </div>
            <div className='card-body text-center'>
              <strong>ARS ${productos.price}</strong>
            </div>
            <div className='card-body text-center'>
              <NavLink to={'/'} className="btn btn-dark btn-large"> Atras </NavLink>
            </div>
          </div>
          <ItemCount onAdd={onAdd} style={{ marginLeft: 'auto' }}/>
        </div>
      </div>
    );
  };
  
  export default ProductDetail;

