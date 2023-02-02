import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { gFetch } from '../../utils/gFetch';
import ProductItem from '../Product/ProductItem';

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
    <ProductItem productos={productos} />
  );
}

export default ItemListContainer;