import React, { useEffect, useState } from 'react';
import { gFetch } from '../utils/gFetch';

const ItemListContainer = (props) => {
  const [ productos, setProductos ] = useState([])


  useEffect (() => {
    gFetch()
    .then(res => {
      setProductos(res)
    })
    .catch(error => console.log(error))
    .finally(() => console.log('Siempre y al último'))
  })

  console.log(productos)
  return (
    <div className="d-flex justify-content-center">
      <div className="card-deck">
        { productos.map(producto =>   <div key={producto.id} className='card mx-2' style={{margin: '20px', display: 'inline-block', width:'300px'}}>
                                        <div className='card-header text-center'>
                                          {producto.name}
                                        </div>
                                        <div className='card-body text-center'>
                                          <img src={producto.image} alt='imagen' className='w-100'/>
                                        </div>
                                        <div className='card-body text-center'>
                                          Categoria: {producto.categoria}
                                        </div>
                                        <div className='card-body text-center'>
                                          ARS ${producto.price}
                                          <button className='btn btn-outline-primary w-100 mt-2'> Detalles </button>
                                        </div>
                                      </div>) }
      </div>
    </div>
  );
}

export default ItemListContainer;