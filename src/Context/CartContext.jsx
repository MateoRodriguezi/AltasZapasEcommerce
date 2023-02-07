import { createContext, useState, useContext  } from "react"


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [ cartList, setCartList ] = useState([])

    const agregarCarrito = (newProducto, cant) => {
        setCartList( [
            ...newProducto,
            cant
        ])
    }

    const vaciarCarrito = () => setCartList ([ ])

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}