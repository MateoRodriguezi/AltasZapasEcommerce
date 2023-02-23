import React from 'react'
import { useCartContext } from '../../Context/CartContext'

const Cart = () => {

  const { cartList, vaciarCarrito } = useCartContext()

  const sumTotal = () => {
    return cartList.reduce((acum, product) => acum + product.price * product.cantidad, 0)
  }

  return (
    <div className='container mt-5'>
      {cartList.length > 0 ? (
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Imagen</th>
              <th scope='col'>Nombre</th>
              <th scope='col'>Precio</th>
              <th scope='col'>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {cartList.map(productos => (
              <tr key={productos.id}>
                <td><img src={productos.image} className='img-thumbnail w-25'/></td>
                <td>{productos.name}</td>
                <td>ARS ${productos.price * productos.cantidad}</td>
                <td>{productos.cantidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className='text-center'>No hay productos en el carrito</div>
      )}
      <div className='d-flex justify-content-end mt-3'>
        <p className='mr-3'>Total: ARS ${sumTotal()}</p>
        <button className='btn btn-success' > Generar orden </button>
        <button className='btn btn-danger' onClick={vaciarCarrito}> Vaciar Carrito </button>
      </div>
    </div>
  )
}

export default Cart
