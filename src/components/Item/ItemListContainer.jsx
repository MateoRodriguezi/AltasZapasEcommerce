import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

import ProductItem from "../Product/ProductItem";

import "./Item.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategoria } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const queryCollections = collection(db, "productos");

    const queryFilter = idCategoria
      ? query(queryCollections, where("categoria", "==", idCategoria))
      : queryCollections;

    getDocs(queryFilter)
      .then((resp) => {
        console.log(resp.docs);
        setProductos(
          resp.docs.map((product) => ({ id: product.id, ...product.data() }))
        );
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
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

  return <ProductItem productos={productos} />;
};

export default ItemListContainer;
