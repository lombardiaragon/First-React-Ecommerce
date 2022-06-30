import { createContext, useState } from "react"

const CartContext=createContext()

const CartProvider=({children})=>{
    const[cartListItems, setCartListItems]=useState([])

    const quitFromCart=(item)=>{
        setCartListItems(cartListItems.filter((el)=>el.id !== item.id))
    }
    const addToCart=(itemToCart)=>{
        // console.log('item con quantity',itemToCart)
        let isInCart=cartListItems.some((cartItem)=>cartItem.id===itemToCart.id)
        if(!isInCart){
            setCartListItems([...cartListItems,itemToCart])
        }
    }

    console.log('cartListItems',cartListItems)
    const data={
        cartListItems,
        setCartListItems,
        addToCart,
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