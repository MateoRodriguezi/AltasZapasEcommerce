import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { gFetch } from '../utils/gFetch';

import './Item.css'

const ItemListContainer = (props) => {
  const [ productos, setProductos ] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategoria } = useParams()

  useEffect (() => {
    if (idCategoria) {
      gFetch()
        .then(res => {
          setProductos(res.filter(producto => producto.categoria === idCategoria));
          setLoading(false);
      })
        .catch(error => console.log(error));
      
    } else {

      gFetch()
        .then(res => {
          setProductos(res);
          setLoading(false);
      })
        .catch(error => console.log(error));
    }
  }, [idCategoria]);


  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="loading-circle">
          <div className="loading-inner-circle" />
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="card-deck">
        { productos.map(producto =>   <div key={producto.id} className='card mx-2' style={{margin: '20px', display: 'inline-block', width:'300px'}}>
                                        <div className='card-header text-center'>
                                          {producto.name}
                                        </div>
                                        <div className='card-body text-center'>
                                          <img src={producto.image} alt='imagen' className='product-image w-100'/>
                                        </div>
                                        <div className='card-body text-center'>
                                        <Link to={`/categoria/${producto.categoria}`}>
                                          Categoria: {producto.categoria}
                                        </Link>
                                        </div>
                                        <div className='card-body text-center'>
                                          <strong>ARS ${producto.price}</strong>
                                          <Link to={`/detail/${producto.id}`}>
                                            <button className='btn btn-outline-primary w-100 mt-2'> Detalles </button>
                                          </Link>
                                        </div>
                                      </div>) }
      </div>
    </div>
  );
}

export default ItemListContainer;