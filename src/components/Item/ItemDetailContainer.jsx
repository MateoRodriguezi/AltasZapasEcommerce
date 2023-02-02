import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { gFetch } from '../../utils/gFetch';
import ProductoDetail from '../Product/ProductDetail';

import './Item.css'
 

const ItemDetailContainer = () => {
  const [ productos, setProductos ] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idProducto } = useParams()

  useEffect (() => {
    if (idProducto) {
      gFetch()
        .then(res => {
          setProductos(res.filter(producto => producto.id === idProducto));
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
  }, [idProducto]);


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
    <ProductoDetail productos={productos} />
  );
}

export default ItemDetailContainer;