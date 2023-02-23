import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const agregarCarrito = (newProducto) => {
    const productIndex = cartList.findIndex(
      (producto) => producto.id === newProducto.id
    );
    if (productIndex === -1) {
      setCartList([...cartList, newProducto]);
    } else {
      const updatedCartList = [...cartList];
      updatedCartList[productIndex].cantidad += newProducto.cantidad;
      setCartList(updatedCartList);
    }
  };
  const vaciarCarrito = () => setCartList([]);

  const sumTotal = () => {
    return cartList.reduce(
      (acum, product) => acum + product.price * product.cantidad,
      0
    );
  };

  const cartTotal = () =>
    cartList.reduce((count, producto) => (count += producto.cantidad), 0);

  const eliminarProducto = (productId) => {
    const updatedCartList = cartList.filter(
      (product) => product.id !== productId
    );
    setCartList(updatedCartList);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarCarrito,
        vaciarCarrito,
        sumTotal,
        eliminarProducto,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
