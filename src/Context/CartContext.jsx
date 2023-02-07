import { createContext, useState, useContext  } from "react"


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [ cartList, setCartList ] = useState([])

    const agregarCarrito = (newProducto, cant) => {
        setCartList( [
            ...cartList,
            {
                id: cartList.length + 1, // agrega un id único para cada objeto
                product: newProducto,
                count: cant
            }
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