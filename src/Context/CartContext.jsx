import { createContext, useState } from "react"


export const CartContext = createContext([])

export const CartContextProvider = ({children}) => {

    const [cartList, setCarlist] = useState([])
    const agregarCarrito = (newProducto) => {
        setCarlist(newProducto)
        
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