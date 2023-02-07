import { createContext, useState, useContext  } from "react"


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [ cartList, setCartList ] = useState([])

    const agregarCarrito = (newProducto) => {
        setCartList( [
            ...cartList,
            ,newProducto
        ])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}