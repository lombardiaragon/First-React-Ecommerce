import { createContext, useState } from "react"

const CartContext=createContext()

const CartProvider=({children})=>{
    const[cartListItems, setCartListItems]=useState([])

    const quitFromCart=(item)=>{
        setCartListItems(cartListItems.filter((el)=>el.id !== item.id))
    }
    
    console.log('cartListItems',cartListItems)
    const data={
        cartListItems,
        setCartListItems,
        quitFromCart      
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
export {CartContext}