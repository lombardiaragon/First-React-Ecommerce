import { createContext, useState } from "react"

const CartContext=createContext()

const CartProvider=({children})=>{
    const[cartListItems, setCartListItems]=useState([])
    
    const addToCart=(itemToCart)=>{
        setCartListItems([...cartListItems,itemToCart])
    }
    console.log('cartListItems CartContext:',cartListItems)

    const data={
        cartListItems,
        addToCart
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
export {CartContext}