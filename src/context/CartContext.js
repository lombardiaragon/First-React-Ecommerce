import { createContext, useState } from "react"

const CartContext=createContext()

const CartProvider=({children})=>{
    const[cartListItems, setCartListItems]=useState([])

    const data={
        cartListItems,
        setCartListItems       
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
export {CartContext}