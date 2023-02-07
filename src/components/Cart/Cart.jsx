import React from 'react'
import { useCartContext } from '../../Context/CartContext'

const Cart = () => {

  const { cartList, vaciarCarrito } = useCartContext()

  return (
    <div>
      {cartList.length > 0 ? (
        cartList.map(productos => (
          <div key={productos.id}>
            <img src={productos.image} className='w-25'/>
            Nombre: {productos.name} - Cantidad: {productos.cantidad} - {productos.precio}
          </div>
        ))
      ) : (
        <div>No hay productos en el carrito</div>
      )}
      <button className='btn btn-dark ml-3' onClick={vaciarCarrito}> Vaciar Carrito </button>
    </div>
  )


}

export default Cart