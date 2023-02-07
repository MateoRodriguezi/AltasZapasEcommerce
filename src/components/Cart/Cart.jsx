import React from 'react'
import { useCartContext } from '../../Context/CartContext'

const Cart = () => {

  const { cartList } = useCartContext()

  return (
    <div>
      {cartList.length > 0 ? (
        cartList.map(productos => (
          <div key={productos.name}>
            Nombre: {productos.name} - Cantidad: {productos.cantidad} - {productos.precio}
          </div>
        ))
      ) : (
        <div>No hay productos en el carrito</div>
      )}
    </div>
  )


}

export default Cart